import { FaLinkedin } from "react-icons/fa"
import teamImage2 from "../assets/teamImage2.png"
import sadasivan from "../assets/Management/Sadasivan.png"
import reji from "../assets/Management/Reji.png"
import joyson from "../assets/Management/joyson.png"
import { useState } from "react"

function AboutUs() {
  const teamMembers = [
    {
      name: "Mr. Sadasivan",
      role: "Mentor & Guide",
      fullDescription:
        "Full Description",
      image: sadasivan,
    },
    {
      name: "Mr. Reji P Joseph",
      role: "Managing Director",
      fullDescription:
        "Full Description",
      phone: "+91 94481 22438",
      email: "pjreji@rediffmail.com",
      linkedin: "https://www.linkedin.com/in/reji-p-joseph",
      image: reji,
    },
    {
      name: "Mr. Job Joyson",
      role: "Managing Director",
      fullDescription:
        "Full Description",
      phone: "+91 91234 56789",
      email: "joyson@example.com",
      linkedin: "https://www.linkedin.com/in/job-joyson-bb2b511b5/",
      image: joyson,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">
            ABOUT US
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-12">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
            <div className="relative mb-6 sm:mb-8">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border-2 border-blue-600 bg-blue-50 rounded-lg"></div>
              <img 
                src={teamImage2} 
                alt="RJ Creation Team" 
                className="w-full rounded-lg shadow-lg relative z-10 object-cover"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              <div className="bg-gray-100 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Years Experience</p>
              </div>
              <div className="bg-gray-100 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">150+</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Projects Delivered</p>
              </div>
              <div className="bg-gray-100 p-3 sm:p-4 lg:p-5 rounded-lg text-center shadow-sm">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">3+</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Industry Sectors</p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            
            {/* Brand Title */}
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 text-center lg:text-left">
              <h1 className="mb-2 sm:mb-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bankgothic text-blue-600">RJ C</span>
                <span className="font-bankgothic text-xl sm:text-2xl lg:text-3xl text-blue-600">REATION</span>
              </h1>
              <h3 className="text-base sm:text-lg lg:text-xl text-gray-800 sm:ml-2">
                : A RE-DEFINED SOLUTION FOR CNC MACHINING
              </h3>
            </div>
            
            {/* Content */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left">
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                <span className="font-bankgothic font-medium text-blue-600 text-lg sm:text-xl lg:text-2xl">RJ C</span>
                <span className='font-bankgothic font-light text-blue-600 text-base sm:text-lg lg:text-xl'>REATION</span> was established in the year 2015 at Bangalore, keeping in mind the vast opportunities in precision components for Defense and Aerospace, Medical and Microwave sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                We were in this field for 14 years and in 2015 we rebadged ourself as{' '}
                <span className="font-bankgothic font-medium text-blue-600 text-lg sm:text-xl lg:text-2xl">RJ C</span>
                <span className='font-bankgothic font-light text-blue-600 text-base sm:text-lg lg:text-xl'>REATION</span> with improved facilities and capabilities:
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg text-left">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  15,000 sq. feet modern manufacturing facility
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  State-of-the-art CNC machines and equipment
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Advanced instruments for rigorous quality checks
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Expert staff with years of industry experience
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Network of trusted local partners
                </li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                We provide comprehensive, full turnkey project management for successful finished precision parts and sub-Assemblies. With all the best put together, we can achieve high quality products at a minimum time with a competitive price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Management & Mentors Section */}
      <div className="mt-16 sm:mt-20 lg:mt-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-10 lg:mb-12 text-center">
          Our Leadership
        </h3>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 sm:p-8 lg:p-10 border-t-4 border-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover"
                />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h4>
                <p className="text-sm sm:text-base text-gray-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-3 sm:top-3 sm:right-4 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl z-10"
            >
              &times;
            </button>
            
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full border-2 border-blue-600 object-cover mb-4 sm:mb-6"
            />
            
            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-2">
              {selectedMember.name}
            </h4>
            
            <p className="text-center text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
              {selectedMember.role}
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base text-justify mb-4 sm:mb-6 leading-relaxed">
              {selectedMember.fullDescription}
            </p>

            {/* Contact Information */}
            <div className="space-y-2 sm:space-y-3">
              {selectedMember.phone && (
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Phone:</strong> 
                  <a href={`tel:${selectedMember.phone}`} className="ml-1 text-blue-600 hover:underline">
                    {selectedMember.phone}
                  </a>
                </p>
              )}
              
              {selectedMember.email && (
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Email:</strong> 
                  <a href={`mailto:${selectedMember.email}`} className="ml-1 text-blue-600 hover:underline break-all">
                    {selectedMember.email}
                  </a>
                </p>
              )}
              
              {selectedMember.linkedin && (
                <div className="pt-2">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-blue-600 hover:underline text-sm sm:text-base font-medium"
                  >
                    <FaLinkedin className="text-lg sm:text-xl" />
                    Connect on LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutUs;