import teamImage2 from "../assets/teamImage2.png"
import sadasivan from "../assets/Management/Sadasivan.png"
import reji from "../assets/Management/Reji.jpeg"
import joyson from "../assets/Management/joyson.png"
import React, { useState } from "react";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
const teamMembers = [
  {
    name: "Mr. Sadasivan",
    role: "Mentor & Guide",
    fullDescription: "With decades of experience in precision manufacturing, Mr. Sadasivan provides strategic guidance and mentorship to our team. His expertise in quality management and operational excellence has been instrumental in establishing RJ Creation's reputation for delivering world-class precision components.",
    image: sadasivan,
  },
  {
    name: "Mr. Reji P Joseph",
    role: "Managing Director",
    fullDescription: `Mr. Reji P Joseph is a highly experienced CNC manufacturing professional with over 32 years of hands-on expertise. A graduate of Mysore University, he trained at HMT Kalamassery in 1993 and began his career as a CNC Operator in Mysore. His leadership skills took shape at Hi-Tech Cam, Bangalore, and further evolved during his tenure in the USA with Diversitronix, a unit of Renissance Electronic Corporation (REC), USA, where he gained international exposure in RF and microwave housings.

Returning to India, he served as Production Manager at Wave Mechanics Pvt. Ltd. for a decade, driving operational excellence. In 2008, he founded Creations, which later became RJ Creation a testament to his entrepreneurial spirit and commitment to precision engineering. Known for his innovation, meticulous craftsmanship, and dedication, Mr. Reji continues to lead the company with a focus on quality and growth.`,
    phone: "+91 94481 22438",
    email: "pjreji@rediffmail.com",
    linkedin: "https://www.linkedin.com/in/reji-p-joseph",
    image: reji,
  },
  {
    name: "Mr. Job Joyson",
    role: "Managing Director",
    fullDescription: "Mr. Job Joyson leads RJ Creation with a focus on innovation and customer satisfaction. His managerial expertise and commitment to excellence drive our continuous improvement initiatives and ensure we deliver exceptional results for our clients across aerospace, medical, and defense sectors.",
    phone: "+91 91234 56789",
    email: "joyson@example.com",
    linkedin: "https://www.linkedin.com/in/job-joyson-bb2b511b5/",
    image: joyson,
  },
];

const aboutSections = [
  {
    title: "Our Story",
    content: "RJ Creation was established in 2015 at Bangalore, keeping in mind the vast opportunities in precision components for Defense and Aerospace, Medical and Microwave sectors. We were in this field for 14 years and in 2015 we rebadged ourselves as RJ Creation with improved facilities and capabilities."
  },
  {
    title: "Our Mission",
    content: "We provide comprehensive, full turnkey project management for successful finished precision parts and sub-assemblies. With all the best put together, we can achieve high quality products at minimum time with competitive pricing."
  },
  {
    title: "Our Leadership",
    content: "Our experienced and dynamic leadership team brings decades of expertise in precision manufacturing, quality management, and strategic business development to drive RJ Creation's continued growth and success."
  }
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  return (
  <div className="min-h-screen bg-gray-100">
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:text-7xl">
            About
            <span className="block text-red-200 bg-clip-text">
              <span className="font-bankgothic text-red-200 bg-clip-text">RJ Creation</span>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              A re-defined solution for CNC machining with 15+ years of expertise in precision manufacturing across Defense, Aerospace, Medical and RF & Microwave sectors.
          </p>
          <div className="flex items-center justify-center mt-10">
            <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center border-b">
          {aboutSections.map((section, index) => (
            <button
              key={index}
                onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === index
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                } `}
              >
                {section.title}
            </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            {aboutSections[activeTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {aboutSections[activeTab].content}
          </p>
        </div>
        {activeTab === 0 && (
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <img 
                  src={teamImage2} 
                  alt="RJ Creation Team" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">15+</h3>
                  <p className="text-gray-700 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">150+</h3>
                  <p className="text-gray-700 text-sm">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">3+</h3>
                  <p className="text-gray-700 text-sm">Industry Sectors</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Capabilities</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">15,000 sq. feet modern manufacturing facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">State-of-the-art CNC machines and equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Advanced instruments for rigorous quality checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Expert staff with years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Network of trusted local partners</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Quality Standards</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Precision tolerance: ±10 microns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">CMM inspection and quality certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">ISO compliant manufacturing processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">100% quality assurance testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-semibold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Service Excellence</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Full turnkey project management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Competitive pricing with quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Minimum lead times with maximum precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-gray-700">Comprehensive sub-assembly solutions</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover object-top"
                  />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.phone && (
                      <FaPhone className="text-blue-600 hover:text-blue-700" />
                    )}
                    {member.email && (
                      <FaEnvelope className="text-blue-600 hover:text-blue-700" />
                    )}
                    {member.linkedin && (
                      <FaLinkedin className="text-blue-600 hover:text-blue-700" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-6">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Aerospace", "Defense", "Medical", "Microwave", "Electronics", "Automotive"].map((industry, k) => (
              <span 
                key={k} 
                className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
        </div>
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            
            <div className="text-center mb-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-blue-600 object-cover mb-4 object-top"
              />
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMember.name}
              </h4>
              <p className="text-gray-600 mb-4">
                {selectedMember.role}
              </p>
            </div>
            
            <p className="text-gray-700 text-justify mb-6 leading-relaxed">
              {selectedMember.fullDescription}
            </p>
            <div className="border-t pt-6 space-y-3">
              {selectedMember.phone && (
                <div className="flex items-center justify-center">
                  <FaPhone className="text-blue-600 mr-3" />
                  <a href={`tel:${selectedMember.phone}`} className="text-blue-600 hover:underline">
                    {selectedMember.phone}
                  </a>
                </div>
              )}
              
              {selectedMember.email && (
                <div className="flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <a href={`mailto:${selectedMember.email}`} className="text-blue-600 hover:underline">
                    {selectedMember.email}
                  </a>
                </div>
              )}
              
              {selectedMember.linkedin && (
                <div className="flex items-center justify-center">
                  <FaLinkedin className="text-blue-600 mr-3" />
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
