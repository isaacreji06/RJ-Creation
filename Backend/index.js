const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Full-time', 'Part-time', 'Contract', 'Temporary']
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String,
        required: true
    }],
    benefits: [{
        type: String,
        required: true
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
jobSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Job = mongoose.model('Job', jobSchema);
const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type:String,
        required:true
    }
})
const adminLogin=mongoose.model('adminLogin',adminSchema)
const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: false
    },
    resumeFilename: {
        type: String,
        required: true
    },
    resumeOriginalName: {
        type: String,
        required: true
    },
    resumePath: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'],
        default: 'pending'
    },
    appliedAt: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', applicationSchema);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir + '/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed for resumes'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS 
        }
    });
};
app.post('/send-email', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Name, email, and message fields are required.' });
    }

    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: subject || 'New Contact Form Submission', 
            html: `
                <h3>Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending general email:', error);
        res.status(500).json({ success: false, error: error.message || 'Failed to send email.' });
    }
});
app.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await Job.find({ isActive: true }) 
            .sort({ createdAt: -1 })
            .select('-__v');

        res.json(jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Access Denied. No token provided." });

  try {
    const verified = jwt.verify(token, process.env.jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

app.get("/api/admin/verify", verifyToken, (req, res) => {
  res.status(200).json({ message: "Token is valid", success: true });
});

app.post('/api/admin/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out' });
});


app.post("/api/admin/signup" ,async(req,res)=>{
    try{
        const {email,password}=req.body;
        if (!email||!password){
            return res.status(404).json({message:"all fields are required",success:false})
        }
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const validEmail=emailRegex.test(email)
        if (!validEmail){
            return res.status(400).json({error:"please enter the correct email format"})
        }
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const validPassword=passwordRegex.test(password)
        if (!validPassword){
            return res.status(400).json({error:"please enter the correct password format"})
        }
        const encryptedPassword= await bcrypt.hash(password,10)
        const admin=new adminLogin({
            email,
            password:encryptedPassword
        })
        await admin.save()
        res.status(200).json({message:"Admin account created successfully"})
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})

app.post('/api/admin/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        if (!email||!password){
            return res.status(404).json({message:"all fields are required",success:false})
        }
        const user=await adminLogin.findOne({email:email})
        if (!user){
            return res.status(404).json({message:"user not found please contact the administrator"})
        }
        passwordCompare=await bcrypt.compare(password,user.password)
        if (!passwordCompare){
            return res.status(403).json({message:"password does not match please enter the correct password"})
        }
        const token = jwt.sign(
            { userId: user._id, email: user.email }, 
            process.env.jwtSecret, 
            { expiresIn: "10m"}
        );
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 60*1000*10
        });
        res.status(200).json({message:"Successfully logged in",success:true})
    }
    catch(err){
        return res.status(500).json({message:"internal server error",error:err.message})
    }
})

app.get('/api/jobs/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).select('-__v');

        if (!job) {
            return res.status(404).json({ error: 'Job not found.' });
        }
        if (!job.isActive) {
            return res.status(404).json({ error: 'Job is no longer active.' });
        }
        
        res.json(job);
    } catch (error) {
        console.error('Error fetching job:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid job ID format.' });
        }
        res.status(500).json({ error: 'Failed to fetch job.' });
    }
});
app.post('/api/admin/jobs', async (req, res) => {
    try {
        const {
            title,
            type,
            department,
            location,
            experience,
            description,
            requirements,
            benefits
        } = req.body;
        if (!title || !type || !department || !location || !experience || !description) {
            return res.status(400).json({ error: 'All required fields (title, type, department, location, experience, description) must be provided.' });
        }
        if (!requirements || !Array.isArray(requirements) || requirements.length === 0) {
            return res.status(400).json({ error: 'At least one requirement must be provided and must be an array.' });
        }
        if (!benefits || !Array.isArray(benefits) || benefits.length === 0) {
            return res.status(400).json({ error: 'At least one benefit must be provided and must be an array.' });
        }
        const newJob = new Job({
            title,
            type,
            department,
            location,
            experience,
            description,
            requirements: requirements.filter(req => req.trim() !== ''),
            benefits: benefits.filter(benefit => benefit.trim() !== '')
        });

        const savedJob = await newJob.save(); 
        res.status(201).json({
            message: 'Job created successfully',
            job: savedJob
        });
    } catch (error) {
        console.error('Error creating job:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Failed to create job.' });
    }
});
app.put('/api/admin/jobs/:id', async (req, res) => {
    try {
        const {
            title,
            type,
            department,
            location,
            experience,
            description,
            requirements,
            benefits,
            isActive
        } = req.body;

        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            {
                title,
                type,
                department,
                location,
                experience,
                description,
                requirements: Array.isArray(requirements) ? requirements.filter(req => req.trim() !== '') : undefined,
                benefits: Array.isArray(benefits) ? benefits.filter(benefit => benefit.trim() !== '') : undefined,
                isActive,
                updatedAt: Date.now() 
            },
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ error: 'Job not found.' });
        }

        res.json({
            message: 'Job updated successfully',
            job: updatedJob
        });
    } catch (error) {
        console.error('Error updating job:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid job ID format.' });
        }
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Failed to update job.' });
    }
});
app.delete('/api/admin/jobs/:id', async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndUpdate(
            req.params.id,
            { isActive: false, updatedAt: Date.now() },
            { new: true }
        );

        if (!deletedJob) {
            return res.status(404).json({ error: 'Job not found.' });
        }

        res.json({ message: 'Job deleted successfully (deactivated).' });
    } catch (error) {
        console.error('Error deleting job:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid job ID format.' });
        }
        res.status(500).json({ error: 'Failed to delete job.' });
    }
});
app.get('/api/admin/jobs', async (req, res) => {
    try {
        const jobs = await Job.find({})
            .sort({ createdAt: -1 })
            .select('-__v');
            
        res.json(jobs);
    } catch (error) {
        console.error('Error fetching admin jobs:', error);
        res.status(500).json({ error: 'Failed to fetch jobs.' });
    }
});
app.post('/api/apply-job', upload.single('resume'), async (req, res) => {
    const resumeFilePath = req.file ? req.file.path : null;
    const resumeOriginalName = req.file ? req.file.originalname : null;
    try {
        const { name, email, message, jobId } = req.body;
        if (!name || !email || !jobId) {
            if (resumeFilePath) {
                fs.unlink(resumeFilePath, (err) => {
                    if (err) console.error('Error deleting file after validation fail:', err);
                });
            }
            return res.status(400).json({ error: 'Name, email, and job ID are required for application.' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Resume file is required for application.' });
        }
        const job = await Job.findById(jobId);
        if (!job || !job.isActive) {
            if (resumeFilePath) {
                fs.unlink(resumeFilePath, (err) => {
                    if (err) console.error('Error deleting file after job not found/inactive:', err);
                });
            }
            return res.status(404).json({ error: 'Job not found or is no longer active.' });
        }
        const newApplication = new Application({
            jobId,
            name,
            email,
            message: message || '', 
            resumeFilename: req.file.filename,
            resumeOriginalName: resumeOriginalName,
            resumePath: resumeFilePath 
        });

        const savedApplication = await newApplication.save(); 
        const transporter = createTransporter();

        const mailOptions = {
            from: `"Job Application Portal" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New Job Application for ${job.title} - ${name}`,
            html: `
                <h3>New Job Application Received!</h3>
                <p><strong>Job Title:</strong> ${job.title}</p>
                <p><strong>Department:</strong> ${job.department}</p>
                <p><strong>Applicant Name:</strong> ${name}</p>
                <p><strong>Applicant Email:</strong> ${email}</p>
                <p><strong>Cover Letter/Message:</strong></p>
                <p>${message || 'N/A'}</p>
                <br>
                <p>Resume is attached.</p>
                <p>You can view all applications in your admin panel.</p>
            `,
            attachments: [
                {
                    filename: resumeOriginalName,
                    path: resumeFilePath,
                    contentType: 'application/pdf' 
                }
            ],
        };

        await transporter.sendMail(mailOptions); 
        if (resumeFilePath) {
            fs.unlink(resumeFilePath, (err) => {
                if (err) console.error('Error deleting resume file after successful email:', err);
            });
        }

        res.status(201).json({
            message: 'Application submitted successfully and email sent!',
            applicationId: savedApplication._id
        });
    } catch (error) {
        console.error('Error submitting application or sending email:', error);
        if (resumeFilePath) {
            fs.unlink(resumeFilePath, (err) => {
                if (err) console.error('Error deleting file in catch block:', err);
            });
        }

        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid job ID format provided.' });
        }
        res.status(500).json({ error: 'Failed to submit application or send email. Please try again.', er:error.message });
    }
});
app.get('/api/admin/applications', async (req, res) => {
    try {
        const { jobId, status } = req.query;
        
        let filter = {};
        if (jobId) filter.jobId = jobId; 
        if (status) filter.status = status; 

        const applications = await Application.find(filter)
            .populate('jobId', 'title department type') 
            .sort({ appliedAt: -1 }) 
            .select('-__v');

        res.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ error: 'Failed to fetch applications.' });
    }
});
app.get('/api/admin/applications/:id', async (req, res) => {
    try {
        const application = await Application.findById(req.params.id)
            .populate('jobId') 
            .select('-__v');

        if (!application) {
            return res.status(404).json({ error: 'Application not found.' });
        }

        res.json(application);
    } catch (error) {
        console.error('Error fetching application:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid application ID format.' });
        }
        res.status(500).json({ error: 'Failed to fetch application.' });
    }
});
app.put('/api/admin/applications/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status provided. Must be one of: pending, reviewed, shortlisted, rejected, hired.' });
        }

        const updatedApplication = await Application.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('jobId', 'title department type');

        if (!updatedApplication) {
            return res.status(404).json({ error: 'Application not found.' });
        }

        res.json({
            message: 'Application status updated successfully',
            application: updatedApplication
        });
    } catch (error) {
        console.error('Error updating application status:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid application ID format.' });
        }
        res.status(500).json({ error: 'Failed to update application status.' });
    }
});
app.get('/api/admin/applications/:id/resume', async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({ error: 'Application not found.' });
        }

        const filePath = path.join(__dirname, application.resumePath);
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Resume file not found on the server.' });
        }
        res.download(filePath, application.resumeOriginalName, (err) => {
            if (err) {
                console.error('Error sending file for download:', err);
                if (err.code === 'ENOENT') {
                    return res.status(404).json({ error: 'Resume file not found or has been moved/deleted from server.' });
                }
                res.status(500).json({ error: 'Failed to download resume.' });
            }
        });
    } catch (error) {
        console.error('Error downloading resume:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid application ID format.' });
        }
        res.status(500).json({ error: 'Failed to download resume.' });
    }
});

app.get('/api/admin/dashboard/stats', async (req, res) => {
    try {
        const totalJobs = await Job.countDocuments({ isActive: true });
        const totalApplications = await Application.countDocuments();
        const pendingApplications = await Application.countDocuments({ status: 'pending' });
        const shortlistedApplications = await Application.countDocuments({ status: 'shortlisted' });
        const applicationsByStatus = await Application.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    status: '$_id',
                    count: 1,
                    _id: 0
                }
            }
        ]);
        const recentApplications = await Application.find()
            .populate('jobId', 'title department')
            .sort({ appliedAt: -1 })
            .limit(10)
            .select('name email appliedAt status jobId');

        res.json({
            totalJobs,
            totalApplications,
            pendingApplications,
            shortlistedApplications,
            applicationsByStatus,
            recentApplications
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ error: 'Failed to fetch dashboard stats.' });
    }
});
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File size too large. Maximum allowed size is 5MB.' });
        }
    }

    if (error.message === 'Only PDF files are allowed for resumes') {
        return res.status(400).json({ error: 'Only PDF files are allowed for resumes.' });
    }
    console.error('Unhandled server error:', error);  
    res.status(500).json({ error: 'An unexpected internal server error occurred.' });
});
app.use((req, res) => {
    res.status(404).json({ error: 'API route not found.' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;