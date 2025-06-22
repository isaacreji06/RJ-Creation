import React from 'react';
import { FaThumbsUp, FaUsers, FaTools, FaCogs, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaThumbsUp className="text-white text-3xl" />,
    title: 'Excellent Quality',
    description: 'We ensure top-notch quality in every product we manufacture.',
    bgColor: 'bg-red-600',
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: 'Skilled Staff',
    description: 'Our experienced team is committed to precision and performance.',
    bgColor: 'bg-blue-600',
  },
  {
    icon: <FaTools className="text-white text-3xl" />,
    title: 'Outstanding Services',
    description: 'Tailor-made solutions to suit your industry-specific needs.',
    bgColor: 'bg-gray-600',
  },
  {
    icon: <FaClock className="text-white text-3xl" />,
    title: 'On Time Delivery',
    description: 'We prioritize timely delivery to meet your project deadlines.',
    bgColor: 'bg-violet-600',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 bg-white text-center font-serif">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${feature.bgColor}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
