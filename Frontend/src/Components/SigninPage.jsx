// import React, { useState } from 'react';
// import { Mail, Lock, Eye, EyeOff, User, CheckCircle, XCircle, Loader } from 'lucide-react';

// export default function SigninPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (error) setError(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate API call
//       const response = await fetch('https://rj-creation.onrender.com/api/admin/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//         credentials:"include"
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to sign in');
//       }

//       const data = await response.json();
//       setIsSignedIn(true);
//       setTimeout(() => {
//         setFormData({ email: '', password: '' });
//         setIsSignedIn(false);
//       }, 2000);

//     } catch (error) {
//       console.error('Sign in error:', error);
//       setError(error.message || 'Invalid email or password. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   if (isSignedIn) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
//         <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full">
//           <div className="text-center py-8">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <CheckCircle className="w-8 h-8 text-green-600" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Back!</h3>
//             <p className="text-gray-600">You have successfully signed in to your account.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative px-6 py-16 mx-auto max-w-7xl lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-5xl lg:text-6xl">
//               Welcome
//               <span className="block text-red-200">
//                 Back
//               </span>
//             </h1>
//             <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
//               Sign in to access your account and manage your profile
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center px-6 py-16">
//         <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//               <User className="w-8 h-8 text-blue-600" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
//             <p className="text-gray-600">Enter your credentials to access your account</p>
//           </div>

//           <div>
//             <div className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Mail className="w-4 h-4 inline mr-2" />
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   <Lock className="w-4 h-4 inline mr-2" />
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
//                   <XCircle className="w-5 h-5 flex-shrink-0" />
//                   <p className="text-sm">{error}</p>
//                 </div>
//               )}

//               <button
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader className="w-5 h-5 animate-spin" />
//                     <span>Signing In...</span>
//                   </>
//                 ) : (
//                   <span>Sign In</span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Info Section */}
//       <div className="px-6 pb-16 mx-auto max-w-7xl lg:px-8">
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
//           <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Account Benefits</h3>
//           <div className="grid sm:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <User className="w-6 h-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">Profile Management</h4>
//               <p className="text-gray-600 text-sm">Manage your personal information and preferences</p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <CheckCircle className="w-6 h-6 text-green-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">Application Tracking</h4>
//               <p className="text-gray-600 text-sm">Track your job applications and their status</p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
//                 <Mail className="w-6 h-6 text-purple-600" />
//               </div>
//               <h4 className="font-semibold text-gray-900 mb-1">Notifications</h4>
//               <p className="text-gray-600 text-sm">Get notified about new opportunities and updates</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, CheckCircle, XCircle, Loader } from 'lucide-react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../AuthContext"; // Import useAuth from your AuthContext

export default function SigninPage() {
  // Initialize useNavigate and useAuth
  const navigate = useNavigate();
  const { setAuthenticated } = useAuth(); // Assuming useAuth provides a setAuthenticated function

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false); // This state will now trigger the success UI before navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://rj-creation.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: "include"
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign in');
      }

      // If successful, set isSignedIn to true to display the success UI
      setIsSignedIn(true);
      // After a short delay, update authentication context and navigate
      setTimeout(() => {
        setAuthenticated(true); // Set authentication status via AuthContext
        navigate("/admin"); // Navigate to admin page
        // You might consider clearing formData and isSignedIn state after navigation if needed,
        // but since you're navigating away, it's often not critical.
      }, 2000); // Keep the 2-second delay for the success animation

    } catch (error) {
      console.error('Sign in error:', error);
      setError(error.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // The UI remains exactly as you provided
  if (isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome Back!</h3>
            <p className="text-gray-600">You have successfully signed in to your account.</p>
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
              Welcome
              <span className="block text-red-200">
                Back
              </span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Sign in to access your account and manage your profile
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
            <p className="text-gray-600">Enter your credentials to access your account</p>
          </div>

          <div>
            <div className="space-y-6">
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

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="px-6 pb-16 mx-auto max-w-7xl lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Account Benefits</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Profile Management</h4>
              <p className="text-gray-600 text-sm">Manage your personal information and preferences</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Application Tracking</h4>
              <p className="text-gray-600 text-sm">Track your job applications and their status</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Notifications</h4>
              <p className="text-gray-600 text-sm">Get notified about new opportunities and updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}