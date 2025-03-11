import React from "react";
import AboutImage from "../assets/images/about.png";
import ContactArrow from "../assets/images/contactarrow.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


const About = () => {
    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }
      ];
 
      
  return (
    <>
      <div
        className="w-full h-[648px] bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <div className="max-w-[88rem] h-full   mx-auto px-12 flex items-center ">
          {/* Left Side */}
          <div className="w-[576.96px]">
            <h1 className="font-roboto text-7xl mb-5 font-bold text-left ">
              Sun Consultants And{" "}
              <span className="text-gradient">Engineers</span>
            </h1>

            <p className=" text-sm sm:text-xl text-zinc-500  tracking-wide mb-7 text-left  antialiased leading-loose w-[500px]">
              Your trusted partner for BIS, LMPC, EPR, ISI Mark, WPC, and TEC
              certifications in India.
            </p>

            <button className="rounded-[50px] mb-8 custom-linear-gradient-4 w-[224.75px] h-[66px] flex items-center justify-center gap-[8px]">
              <span className="text-white font-inter text-[17px] font-bold uppercase">
                Contact Us
              </span>
              <img src={ContactArrow} alt="Contact Arrow"  />
            </button>

            <div className="flex flex-row items-center  mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
