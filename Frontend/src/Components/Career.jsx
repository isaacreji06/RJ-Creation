import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Mail, MessageSquare, FileText, Send, CheckCircle, Users, Award, Briefcase, MapPin, Clock, XCircle, Loader } from 'lucide-react';
const JobRole = ({ job, onApply }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
            <div className="flex items-center space-x-4 text-gray-600 mt-1">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {job.type}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {job.department}
              </span>
              {/* Add Experience here */}
              {job.experience && (
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" /> {/* Using Award icon for experience */}
                  {job.experience}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">
        {job.description}
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="w-5 h-5 text-green-600 mr-2" />
            Requirements
          </h4>
          <div className="space-y-3">
            {job.requirements && job.requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{requirement}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 text-blue-600 mr-2" />
            Benefits
          </h4>
          <div className="space-y-3">
            {job.benefits && job.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => onApply(job)}
          className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 inline-flex items-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Apply for this Position</span>
        </button>
      </div>
    </div>
  );
};
const ApplicationForm = ({ selectedJob, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    jobId: selectedJob?._id || "",
    resume: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      jobId: selectedJob?._id || "",
    }));
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("jobId", formData.jobId);

    if (formData.resume) {
      data.append("resume", formData.resume);
    } else {
      setError("Please upload your resume.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://rj-creation.onrender.com/api/apply-job", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send application.");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        onSubmit();
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          message: "",
          jobId: "",
          resume: null,
        });
      }, 2000);
    } catch (error) {
      console.error("Error sending application:", error);
      setError(error.message || "Error sending application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
          <p className="text-gray-600">Thank you for your interest in the <strong>{selectedJob?.title}</strong> position. We'll review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Apply for {selectedJob?.title}</h3>
          <p className="text-gray-600">Fill out the form below to submit your application</p>
        </div>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700 text-sm underline"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="w-4 h-4 inline mr-2" />
              Position Applying For
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={selectedJob?.title || ""}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Cover Letter / Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us why you'd be a great fit for our team..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-2" />
              Resume (PDF)
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept="application/pdf"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            {formData.resume && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {formData.resume.name}
              </p>
            )}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default function Career() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [jobError, setJobError] = useState(null);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        const response = await fetch("https://rj-creation.onrender.com/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch job openings.");
        }
        const data = await response.json();
        const activeJobs = data.filter(job => job.isActive);
        setJobOpenings(activeJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobError("Failed to load job openings. Please try again later.");
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleSubmitApplication = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  const handleCancelApplication = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:text-7xl">
              Join Our
              <span className="block text-red-200 bg-clip-text">
                Team
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Be part of a dynamic team that shapes the future of precision manufacturing.
              We're looking for skilled professionals to join our growing organization.
            </p>
            <div className="flex items-center justify-center mt-10">
              <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're actively seeking talented individuals to join our manufacturing team
          </p>
        </div>
        <div className="space-y-8 mb-16">
          {loadingJobs ? (
            <div className="flex items-center justify-center py-8 text-blue-600">
              <Loader className="w-6 h-6 animate-spin mr-2" />
              Loading job openings...
            </div>
          ) : jobError ? (
            <div className="text-red-600 text-center py-8">
              <XCircle className="w-6 h-6 inline mr-2" />
              {jobError}
            </div>
          ) : jobOpenings.length === 0 ? (
            <p className="text-center text-gray-700">No job openings available at the moment. Please check back later!</p>
          ) : (
            jobOpenings.map((job) => (
              <JobRole
                key={job._id}
                job={job}
                onApply={handleApply}
              />
            ))
          )}
        </div>
        {showApplicationForm && (
          <div id="application-form" className="mb-16">
            <ApplicationForm
              selectedJob={selectedJob}
              onSubmit={handleSubmitApplication}
              onCancel={handleCancelApplication}
            />
          </div>
        )}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Join Our Team?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Professional Growth</h4>
              <p className="text-gray-600 text-sm">Continuous learning opportunities and career advancement in precision manufacturing.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Work alongside 16 experienced technicians and machinists in a collaborative environment.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Modern Equipment</h4>
              <p className="text-gray-600 text-sm">Access to state-of-the-art CNC machinery and advanced manufacturing technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}