import React, { useEffect, useState } from 'react';

const NewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400&h=320",
      description: "CPCB has issued a Show Cause Notice for EPR non-compliance under Plastic Waste Management Rules. File your Annual Returns.",
      date: "23 Jan, 2023"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400&h=320",
      title: "Mandatory for Digital TV Receivers by April 2025!",
      description: "The Indian government has set April 25, 2025, as the deadline for all digital TV manufacturers to comply.",
      date: "23 Jan, 2023"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400&h=320",
      title: "CCTV Camera Registration Deadline Extended .",
      description: "The government has extended the deadline for CCTV camera registration under the Compulsory Registration Order",
      date: "23 Jan, 2023"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400&h=320",
      title: "India Lifts BIS Certification Ban for ASEAN Manufacturers!",
      description: "The Indian government has removed BIS certification restrictions for ASEAN countries like Malaysia, Indonesia, Vietnam.",
      date: "23 Jan, 2023"
    }
  ];

  return (
    <div className="bg-blue-50 p-8 md:p-12 lg:p-16 font-sans">
      <div className={`max-w-6xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          View our <span className="text-purple-800">latest news</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-500 hover:shadow-md transform hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="md:w-1/3 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 md:h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs rounded">
                  {item.date}
                </div>
              </div>
              <div className="p-4 md:p-5 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full mb-4">
                    <span className="font-geist text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      LATEST NEWS
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>
                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-black font-medium py-1 px-4 rounded self-start transition-colors duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;