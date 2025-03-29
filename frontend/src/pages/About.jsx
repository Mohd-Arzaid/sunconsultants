import LogoTicker from "@/components/manual/LogoTicker";

const About = () => {
  return (
    <div className="overflow-hidden bg-[#F9F7F2]">
      <AboutHero />
      <LogoTicker/>
      <AboutService/>
      

    
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
  return (
   <div className="">
    
   </div>
  )
}

