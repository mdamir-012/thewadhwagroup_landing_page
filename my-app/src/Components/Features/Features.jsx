import React from 'react';
import { FaAward, FaBuilding, FaMapMarkerAlt, FaMicrochip, FaPencilRuler, FaUserAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBuilding className="w-12 h-12 text-[#c5a880]" />,
      title: "INNOVATIVE CONSTRUCTION",
      description: "Use of latest & innovative construction technology"
    },
    {
      icon: <FaPencilRuler className="w-12 h-12 text-[#c5a880]" />,
      title: "METICULOUS PLANNING",
      description: "Well planned homes keeping the smallest details in mind"
    },
    {
      icon: <FaUserAlt className="w-12 h-12 text-[#c5a880]" />,
      title: "CUSTOMER FIRST",
      description: "Adopting a customer first Approach in everything we do"
    },
    {
      icon: <FaMapMarkerAlt className="w-12 h-12 text-[#c5a880]" />,
      title: "CONVENIENT LOCATIONS",
      description: "Thoughtfully selected project locations for utmost convenience"
    },
    {
      icon: <FaMicrochip className="w-12 h-12 text-[#c5a880]" />,
      title: "MODERN TECHNOLOGY",
      description: "Adapting latest technology in our projects"
    },
    {
      icon: <FaAward className="w-12 h-12 text-[#c5a880]" />,
      title: "AWARDED DESIGNS",
      description: "Best designs which are recognized across the industry"
    }
  ];

  return (
    <div className="bg-[#111111] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[#222222] flex items-center justify-center mb-6 border border-[#c5a880] group-hover:bg-[#c5a880] transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 