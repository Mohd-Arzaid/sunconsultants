import React, { useState } from 'react';
import { User, Bike, Globe, Play } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WHYCimg from "../../assets/images/WHYCimg.jpg";

const WhyChooseUs = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b font-geist">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full mb-4">
              <span className="font-geist text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                OUR STRENGTHS
              </span>
            </div>
            <h2 className=" font-geist text-4xl font-bold mb-2 flex items-center gap-2 tracking-tight">
              Why{" "}
              <span className="relative inline-block" ref={ref}>
                <span className=" font-geist text-gradient">Choose Us?</span>
                <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="absolute bottom-[-8px] left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                />
              </span>
            </h2>
            <p className="text-gray-700 font-medium tracking-wide font-geist">CREATIVE AND UNIQUE SOLUTIONS</p>
            <div className="w-24 h-0.5 bg-gray-300 mt-4"></div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <motion.div 
              className="flex gap-4  rounded-xl hover:bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="bg-[#4318FF] p-3 rounded-xl h-fit">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">Comprehensive Certification Solutions</h3>
                <p className="text-gray-600">With 4,999+ projects executed and 1,299+ happy clients, we bring deep industry knowledge.</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-4  rounded-xl hover:bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="bg-[#4318FF] p-3 rounded-xl h-fit">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">Fast & Efficient Process</h3>
                <p className="text-gray-600">Our dedicated team ensures a smooth and time-efficient certification process so that you can focus.</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-4  rounded-xl hover:bg-white/50 backdrop-blur-sm"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <div className="bg-[#4318FF] p-3 rounded-xl h-fit">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">Global Reach</h3>
                <p className="text-gray-600">We assist manufacturers and exporters from 20+ countries, including India, China, Malaysia, Thailand.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div 
            className={`transition-all duration-700 ease-in-out ${
              isVideoActive ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img
              src={WHYCimg}
              alt="Team working"
              className="w-full h-[500px] object-cover rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
            />
          </div>

          <div 
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isVideoActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <iframe
              className="w-full h-[500px] rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
              title="Video presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={() => setIsVideoActive(!isVideoActive)}
            className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-2 transition-all duration-300 hover:bg-white font-medium ${
              isVideoActive ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Play className="w-5 h-5 text-[#4318FF]" />
            <span>Watch video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;