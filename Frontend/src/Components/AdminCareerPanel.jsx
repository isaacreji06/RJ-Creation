import React, { useState, useEffect } from 'react';
import {
  Plus,
  Briefcase,
  MapPin,
  Clock,
  Users,
  Award,
  Building,
  FileText,
  Send,
  Loader,
  Trash2,
  Edit,
  XCircle,
  CheckCircle,
  LogOut // Import LogOut icon
} from 'lucide-react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../AuthContext"; // Import useAuth from your AuthContext

const AdminCareerPanel = () => {
  // Initialize useNavigate and useAuth
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth();

  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState(null);
  const [editingJobId, setEditingJobId] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State for logout loading

  const API_BASE_URL = 'http://localhost:8080/api/admin/jobs';
  const showNotification = (message, type = 'success') => {
    if (type === 'success') {
      setSuccessMessage(message);
      setError(null);
    } else {
      setError(message);
      setSuccessMessage(null);
    }
    setTimeout(() => {
      setSuccessMessage(null);
      setError(null);
    }, 3000);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoadingJobs(true);
      setJobsError(null);
      try {
        const response = await fetch(API_BASE_URL);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch jobs.');
        }
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setJobsError(err.message || 'Could not load jobs.');
      } finally {
        setIsLoadingJobs(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    const jobData = {
      title: jobRole,
      experience,
      location,
      department,
      type: employmentType,
      description,
      requirements: requirements.split('\n').filter(req => req.trim() !== ''),
      benefits: benefits.split('\n').filter(benefit => benefit.trim() !== ''),
      isActive: isActive
    };

    try {
      let response;
      let method;
      let url;

      if (editingJobId) {
        method = 'PUT';
        url = `${API_BASE_URL}/${editingJobId}`;
      } else {
        method = 'POST';
        url = API_BASE_URL;
      }

      response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Failed to ${editingJobId ? 'update' : 'post'} job. Please try again.`);
      }
      if (editingJobId) {
        setJobs(jobs.map(job => job._id === editingJobId ? data.job : job));
        showNotification('Job updated successfully!');
      } else {
        setJobs([data.job, ...jobs]);
        showNotification('Job posted successfully!');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        resetForm();
        setEditingJobId(null);
      }, 2000);

    } catch (err) {
      console.error(`Error ${editingJobId ? 'updating' : 'posting'} job:`, err);
      showNotification(err.message || `An unexpected error occurred while ${editingJobId ? 'updating' : 'posting'} the job.`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setJobRole("");
    setExperience("");
    setLocation("");
    setDepartment("");
    setEmploymentType("");
    setDescription("");
    setRequirements("");
    setBenefits("");
    setIsActive(true);
    setEditingJobId(null);
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setJobRole(job.title);
    setExperience(job.experience);
    setLocation(job.location);
    setDepartment(job.department);
    setEmploymentType(job.type);
    setDescription(job.description);
    setRequirements(job.requirements.join('\n'));
    setBenefits(job.benefits.join('\n'));
    setIsActive(job.isActive);
    setError(null);
    setSuccessMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (jobId, jobTitle) => {
    // Replace window.confirm with a custom modal for better UX
    // For now, keeping window.confirm as per existing code, but note for future improvements.
    if (!window.confirm(`Are you sure you want to deactivate the job "${jobTitle}"? This will hide it from the public career page.`)) {
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to deactivate job. Please try again.');
      }
      setJobs(jobs.map(job => job._id === jobId ? { ...job, isActive: false } : job));
      showNotification(`Job "${jobTitle}" deactivated successfully!`);
    } catch (err) {
      console.error('Error deactivating job:', err);
      showNotification(err.message || 'An unexpected error occurred while deactivating the job.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- New Logout Functionality ---
  const handleLogout = async () => {
    setIsLoggingOut(true);
    setError(null);
    setSuccessMessage(null); // Clear any existing messages

    try {
      const response = await fetch('http://localhost:8080/api/admin/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for sending cookies
      });

      if (response.ok) {
        setAuthenticated(false); // Clear authentication state
        navigate("/signin"); // Redirect to sign-in page
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to log out.');
      }
    } catch (err) {
      console.error('Logout error:', err);
      showNotification(err.message || 'An error occurred during logout.', 'error');
    } finally {
      setIsLoggingOut(false);
    }
  };
  // --- End New Logout Functionality ---


  if (isSubmitted && !error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {editingJobId ? 'Job Updated Successfully!' : 'Job Posted Successfully!'}
              </h4>
              <p className="text-gray-600">
                The <strong>{jobRole}</strong> position has been {editingJobId ? 'updated' : 'added'} to the career page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-6 py-16 mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-5xl lg:text-6xl">
              Admin
              <span className="block text-red-200">
                Career Panel
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Create and manage job postings for the career page
            </p>
            {/* Logout Button Added Here */}
            <div className="mt-8">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut || isSubmitting} // Disable if already submitting a job or logging out
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingOut ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin mr-2" />
                    <span>Logging Out...</span>
                  </>
                ) : (
                  <>
                    <LogOut className="w-5 h-5 mr-2" />
                    <span>Logout</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 mx-auto max-w-4xl lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              {editingJobId ? (
                <>
                  <Edit className="w-6 h-6 text-orange-500 mr-3" />
                  Edit Job Position
                </>
              ) : (
                <>
                  <Plus className="w-6 h-6 text-blue-600 mr-3" />
                  Add New Job Position
                </>
              )}
            </h2>
            <p className="text-gray-600">
              {editingJobId ? 'Update the details for this job listing' : 'Fill out the form below to create a new job listing'}
            </p>
          </div>
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 flex items-center" role="alert">
              <CheckCircle className="w-5 h-5 mr-3" />
              <span className="block sm:inline"> {successMessage}</span>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 flex items-center" role="alert">
              <XCircle className="w-5 h-5 mr-3" />
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Job Role / Title
                </label>
                <input
                  id="jobRole"
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., CNC Machine Operator"
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="w-4 h-4 inline mr-2" />
                  Experience Level
                </label>
                <input
                  id="experience"
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., 2+ years experience"
                  required
                />
              </div>
            </div>
            {/* <div className="grid md:grid-cols-2 gap-6"> */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Manufacturing Department">Manufacturing Department</option>
                  <option value="Quality Control">Quality Control</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Operations">Operations</option>
                  <option value="Administration">Administration</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
            {/* </div> */}
            <div>
              <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Employment Type
              </label>
              <select
                id="employmentType"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Job Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Provide a detailed description of the role and responsibilities..."
                rows={4}
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="w-4 h-4 inline mr-2 text-green-600" />
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="List each requirement on a new line:&#10;• Experience with CNC operations&#10;• Strong attention to detail&#10;• Team collaboration skills"
                  rows={6}
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Enter each requirement on a new line</p>
              </div>

              <div>
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-2 text-blue-600" />
                  Benefits
                </label>
                <textarea
                  id="benefits"
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="List each benefit on a new line:&#10;• Competitive salary&#10;• Health insurance&#10;• Professional development"
                  rows={6}
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Enter each benefit on a new line</p>
              </div>
            </div>
            {editingJobId && (
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                  Job is Active (visible on public page)
                </label>
              </div>
            )}
            <div className="pt-6 flex gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || isLoggingOut}
                className="flex-1 bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>{editingJobId ? 'Updating Job...' : 'Publishing Job...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{editingJobId ? 'Update Job Position' : 'Publish Job Position'}</span>
                  </>
                )}
              </button>
              {editingJobId && (
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={isSubmitting || isLoggingOut}
                  className="flex-1 bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <XCircle className="w-5 h-5" />
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 text-blue-600 mr-2" />
            Posting Guidelines
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Use clear, descriptive job titles that accurately reflect the role</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Include specific experience levels and skill requirements</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>List each requirement and benefit on separate lines for clarity</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Provide detailed job descriptions to attract qualified candidates</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Review all information before publishing the position</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Ensure department and location information is accurate</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="w-6 h-6 text-purple-600 mr-3" />
            Existing Job Postings
          </h2>

          {isLoadingJobs ? (
            <div className="flex items-center justify-center py-8 text-blue-600">
              <Loader className="w-6 h-6 animate-spin mr-2" />
              Loading jobs...
            </div>
          ) : jobsError ? (
            <div className="text-red-600 text-center py-8">
              <XCircle className="w-6 h-6 inline mr-2" />
              {jobsError}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-gray-600 text-center py-8">
              No job postings found. Add a new one above!
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <li key={job._id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-600">
                      {job.department} - {job.location} ({job.type})
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {job.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(job)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      title="Edit Job"
                      disabled={isSubmitting || isLoggingOut}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job._id, job.title)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      title="Deactivate Job"
                      disabled={isSubmitting || isLoggingOut}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCareerPanel;
