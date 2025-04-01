import LogoTicker from "@/components/manual/LogoTicker";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, User, Bike, Globe, Play } from "lucide-react";
import whychooseus from "../assets/images/whychooseus.jpg"

const About = () => {
  return (
    <div className="overflow-hidden bg-[#F9F7F2]">
      <AboutHero />
      <LogoTicker />
      <AboutService />
      <WhyChooseUs />
      <NewsSection/>
    </div>
  );
};

export default About;

const AboutHero = () => {
  return (
    <div className="relative h-[654px] overflow-x-hidden ">
      {/* Decorative elements */}

      {/* <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div> */}

      {/* Larger circle with slower animation */}
      <div
        className="absolute top-[8%] left-[8%] w-[50px] h-[50px] rounded-full bg-[#1A8781]/20 animate-float-slow"
        style={{ animationDelay: "0s" }}
      ></div>

      {/* Square element with rotation */}
      <div
        className="absolute top-[70%] left-[42%] w-[42px] h-[42px] bg-[#1A8781]/15 animate-spin-slow"
        style={{ animationDuration: "15s" }}
      ></div>

      <div className="max-w-[84rem]  flex items-center justify-center h-full w-full mx-auto">
        {/* Left Side */}
        <div className="relative flex flex-col gap-8 w-[640px]   items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
          </div>

          <h1 className="leading-[70px] z-[10] font-playfair font-bold text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              India's Best Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Consultant
          </h1>

          <p className="font-poppins text-[#332156] w-[490px] text-[20px] leading-[40px] ">
            We are a Consulting Firm for BIS Certification, LMPC certificate,
            EPR and various other certifications which will help you enter /
            sell in the Indian market.
          </p>

          <div className="flex items-center ">
            <div className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[580px]  h-[435px] flex flex-col">
          <div className="relative">
            <div className="bg-indigo-700 bg-opacity-40 backdrop-filter backdrop-blur-sm  rounded-xl border border-indigo-500 border-opacity-30 shadow-2xl h-[435px] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNvbXB1dGVyfGVufDB8fDB8fHww"
                alt="Professional business team discussing certification"
                className="w-full h-full object-cover rounded-xl opacity-90"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 bg-opacity-20 rounded-lg rotate-12 backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 bg-opacity-20 rounded-lg -rotate-12 backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const services = [
    {
      id: 'CDSCO',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
      title: '#CDSCO'
    },
    {
      id: 'BIS',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600',
      title: '#BIS'
    },
    {
      id: 'PESO',
      image: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&q=80&w=600',
      title: '#PESO'
    },
    {
      id: 'WPC',
      image: 'https://images.unsplash.com/photo-1587502537745-84b86da1204f?auto=format&fit=crop&q=80&w=600',
      title: '#WPC'
    },
    {
      id: 'FDA',
      image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=600',
      title: '#FDA'
    },
    {
      id: 'CE',
      image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80&w=600',
      title: '#CE'
    },
    {
      id: 'ISO',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
      title: '#ISO'
    },
    {
      id: 'GMP',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
      title: '#GMP'
    }
  ];

  const scrollTo = async (direction) => {
    if (!containerRef.current) return;

    const newIndex = direction === 'left' 
      ? (currentIndex - 1 + services.length) % services.length
      : (currentIndex + 1) % services.length;

    await controls.start({
      x: direction === 'left' ? '100%' : '-100%',
      transition: { duration: 0.5, ease: 'easeInOut' }
    });

    setCurrentIndex(newIndex);
    controls.set({ x: direction === 'left' ? '-100%' : '100%' });
    
    await controls.start({
      x: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    });
  };

  const visibleServices = [
    services[(currentIndex - 1 + services.length) % services.length],
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center py-16 px-4">
      <div className="inline-flex items-center mb-8">
        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
          Our Services
        </span>
      </div>

      <h1 className="font-playfair text-6xl font-bold mb-16">
        Our <span className="text-[#1A8781]">Services</span>
      </h1>
      
      <div className="relative w-full max-w-7xl">
        <button 
          onClick={() => scrollTo('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden" ref={containerRef}>
          <motion.div 
            animate={controls}
            className="flex gap-6"
          >
            {visibleServices.map((service) => (
              <div 
                key={service.id}
                className="flex-shrink-0 w-[300px] group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button 
          onClick={() => scrollTo('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#1A8781]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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
              src={whychooseus}
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


