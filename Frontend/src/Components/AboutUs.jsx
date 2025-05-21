import { FaLinkedin } from "react-icons/fa"
import teamImage2 from "../assets/teamImage2.png"
import sadasivan from "../assets/Management/Sadasivan.png"
import reji from "../assets/Management/Reji.png"
import joyson from "../assets/Management/joyson.png"
function AboutUs() {
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
                <h3 className="text-3xl font-bold text-blue-600">3</h3>
                <p className="text-gray-700">Industry Sectors</p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              RJ CREATION: A RE-DEFINED SOLUTION FOR CNC MACHINING
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">RJ CREATION</span> was established in the year 2015 at Bangalore, keeping in mind the vast opportunities in precision components for Defense and Aerospace, Medical and Microwave sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We were in this field for 14 years and in 2015 we rebadged ourself as <span className="font-semibold text-blue-600">RJ CREATION</span> with improved facilities and capabilities:
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

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 border-t-4 border-blue-600">
      <img src={sadasivan} alt="Mr. Sadasivan" className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover" />
      <h4 className="text-xl font-bold text-gray-800">Mr. Sadasivan</h4>
      <p className="text-sm text-gray-500 mb-2">Mentor & Guide</p>
      <p className="text-gray-600 text-sm mb-2">Over 40 years of experience in Die & Mould Manufacturing.</p>
    </div>

<div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 border-t-4 border-blue-600">
  <img src={reji} alt="Mr. Reji P Joseph" className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover" />
  <h4 className="text-xl font-bold text-gray-800">Mr. Reji P Joseph</h4>
  <p className="text-sm text-gray-500 mb-2">Managing Director</p>
  <p className="text-gray-600 text-sm mb-2">Graduate in science with 27 years of experience in Manufacturing.</p>
  <div className="text-sm text-gray-700 mt-4 space-y-1">
    <p><strong>Phone:</strong> +91 94481 22438</p>
    <p><strong>Email:</strong> pjreji@rediffmail.com</p>
    <a 
      href="https://www.linkedin.com/in/reji-p-joseph" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center gap-2 text-blue-600 hover:underline mt-2"
    >
      <FaLinkedin className="text-lg" />
      LinkedIn
    </a>
  </div>
</div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 border-t-4 border-blue-600">
      <img src={joyson} alt="Mr. Job Joyson" className="w-32 h-32 mx-auto rounded-full mb-4 border-2 border-blue-600 object-cover" />
      <h4 className="text-xl font-bold text-gray-800">Mr. Job Joyson</h4>
      <p className="text-sm text-gray-500 mb-2">Managing Director</p>
      <p className="text-gray-600 text-sm mb-2">MBA in Finance with 15 years of experience in Management.</p>
      <div className="text-sm text-gray-700 mt-4">
        <p><strong>Phone:</strong> +91 91234 56789</p>
        <p><strong>Email:</strong> joyson@example.com</p>
        <a 
      href="https://www.linkedin.com/in/job-joyson-bb2b511b5/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center justify-center gap-2 text-blue-600 hover:underline mt-2"
    >
      <FaLinkedin className="text-lg" />
      LinkedIn
    </a>
      </div>
    </div>

  </div>
</div>
    </section>
  );
}

export default AboutUs;
