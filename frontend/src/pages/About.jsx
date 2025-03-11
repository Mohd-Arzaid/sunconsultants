import React from "react";
import AboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <>
    <div className="w-full h-[626px] bg-cover bg-center" style={{ backgroundImage: `url(${AboutImage})` }}>

<div className="max-w-[88rem] h-full  mx-auto px-12 flex items-center">
    {/* Left Side */}
    <div className="w-[576.96px] h-[459.23px] ">
<h1 className="font-roboto text-7xl mb-6 font-bold text-left ">
Sun Consultants 
And <span className="text-blue-950">Engineers</span>
</h1>

    <p className=" text-sm sm:text-xl text-zinc-500  tracking-wide mb-8 text-left  antialiased leading-loose">
    Your trusted partner for BIS, LMPC, EPR, ISI Mark, WPC, and TEC certifications in India.
    </p>


    </div>
</div>
    </div>


    </>
  );
};

export default About;
