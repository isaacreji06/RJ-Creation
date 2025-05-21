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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">ABOUT US</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 bg-blue-50 rounded-lg"></div>
              <img 
                src={teamImage2} 
                alt="RJ Creation Team" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                <p className="text-gray-700">Projects Delivered</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">3+</h3>
                <p className="text-gray-700">Industry Sectors</p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="lg:w-1/2">
          <div className="flex">
            <h1><span className="text-3xl font-bankgothic">RJ C</span><span className="font-bankgothic text-2xl">REATION</span></h1>
              <h3 className="text-xl text-gray-800 mb-4">
                : A RE-DEFINED SOLUTION FOR CNC MACHINING
              </h3>
          </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bankgothic font-medium text-blue-600 text-2xl">RJ C</span><span className='font-bankgothic font-light text-blue-600'>REATION</span> was established in the year 2015 at Bangalore, keeping in mind the vast opportunities in precision components for Defense and Aerospace, Medical and Microwave sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We were in this field for 14 years and in 2015 we rebadged ourself as <span className="font-bankgothic font-medium text-blue-600 text-2xl">RJ C</span><span className='font-bankgothic font-light text-blue-600'>REATION</span> with improved facilities and capabilities:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>15,000 sq. feet modern manufacturing facility</li>
                <li>State-of-the-art CNC machines and equipment</li>
                <li>Advanced instruments for rigorous quality checks</li>
                <li>Expert staff with years of industry experience</li>
                <li>Network of trusted local partners</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                We provide comprehensive, full turnkey project management for successful finished precision parts and sub-Assemblies. With all the best put together, we can achieve high quality products at a minimum time with a competitive price.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Management & Mentors Section */}
<div className="mt-20">
  <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Leadership</h3>

  <div className="container mx-auto px-4">
    
    <div className="grid md:grid-cols-3 gap-4 ">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      onClick={() => setSelectedMember(member)}
      className="cursor-pointer bg-white shadow-lg rounded-lg mr-96 w-96 overflow-hidden text-center p-10 border-t-4 border-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover"
      />
      <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
      <p className="text-sm text-gray-500 mb-2">{member.role}</p>
      {/* <p className="text-gray-600 text-sm mb-2">{member.description}</p> */}
    </div>
  ))}
</div>
</div>
{selectedMember && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl relative">
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
      >
        &times;
      </button>
      <img
        src={selectedMember.image}
        alt={selectedMember.name}
        className="w-40 h-40 mx-auto rounded-full border-2 border-blue-600 object-cover mb-4"
      />
      <h4 className="text-2xl font-bold text-center text-gray-800">{selectedMember.name}</h4>
      <p className="text-center text-gray-500 mb-2">{selectedMember.role}</p>
      <p className="text-gray-700 text-sm text-justify">{selectedMember.fullDescription}</p>

      {selectedMember.phone && (
        <p className="mt-4 text-sm text-gray-700">
          <strong>Phone:</strong> {selectedMember.phone}
        </p>
      )}
      {selectedMember.email && (
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> {selectedMember.email}
        </p>
      )}
      {selectedMember.linkedin && (
        <a
          href={selectedMember.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-blue-600 hover:underline mt-2"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>
      )}
    </div>
  </div>
)}

</div>
    </section>
  );
}

export default AboutUs;