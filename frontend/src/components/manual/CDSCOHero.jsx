import ServiceContactForm from "@/common/ServiceContactForm";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const CDSCOHero = () => {
  return (
    <main className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[56px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              CDSCO
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Registration Certificate
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            CDSCO license is mandatory for the manufacturing, import, sale, and
            distribution of all medical devices in India.
          </p>

          <div className="flex items-center -mt-2">
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
      <ServiceContactForm/>
      
      </div>
    </main>
  );
};

export default CDSCOHero;
