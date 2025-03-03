import { BoxReveal } from "../magicui/box-reveal";
import { Separator } from "../ui/separator";
import TestimonialImage from "../../assets/images/TestimonialImage.png";
import TestimonialImageSecond from "../../assets/images/TestimonialImageSecond.png";
import TestimonialImageThree from "../../assets/images/TestimonialImageThree.png";
import Vector from "../../assets/images/Vector.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState } from "react";

const Client = () => {

  const slideData = [
    {
      image: TestimonialImage,
      name: "Priya Sharma",
      designation: "Web Designer",
      description: "Working with this certification consultancy was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
    },
    {
      image: TestimonialImageSecond,
      name: "Rajeev Kumar",
      designation: "Web Developer",
      description: "Outstanding support for our EPR certification process. The team's in-depth knowledge and prompt responses made the entire certification journey smooth. They truly understand both Indian and international compliance requirements.",
    },
    {
      image: TestimonialImageThree,
      name: "Ragini Singh",
      designation: "App Developer",
      description: "Their expertise in LMPC certification was invaluable for our product launch in India. The consultants provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
    },
    {
      image: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Uday Chaudhary",
      designation: "Marketing Manager",
      description: "Their comprehensive support for our BIS certification was crucial for entering the Indian market. The team's detailed analysis and strategic guidance ensured we met all necessary standards without delays.",
    },
  ]

  const [current,setCurrent] = useState(0);

  const handlePreviousClick  = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick  = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  return (
    <div className=" pt-10 pb-4 custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[88rem] px-8 w-full mx-auto overflow-hidden relative">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[48px] font-bold font-roboto  text-center text-[#1E1E1E] ">
              Our Clients
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                What our clients have to say
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        {/* Testimonials */}
        <div className="w-full flex items-center justify-between mt-10  ">
          {/* First Testimonial */}

          <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImageThree} className="rounded-[52px] w-[235px] h-[284.58px] object-cover" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Rajeev Kumar
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  Web Developer
                </span> 
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImage} className="rounded-[52px] w-[235px] h-[284.58px] object-cover" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Priya Sharma
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  Web Designer
                </span>
              </div>
            </div>

            <div className="py-2 text-[19px] font-poppins text-[#785F5F] text-left max-w-xs">
              Trusted consultants for BIS, LMPC, EPR, and WPC certifications
              since 2013. We assist both Indian and foreign manufacturers in
              obtaining essential government certifications for the Indian
              market.
            </div>

            <div className="absolute inset-0  translate-x-[480px] translate-y-[300px] ">
              <img src={Vector} alt="Vector" />
            </div>
          </div>

          {/* Third Testimonial */}
          <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImageSecond} className="rounded-[52px] w-[235px] h-[284.58px] object-cover" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Ragini Singh
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  App Developer
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}

        <div className="flex items-center justify-center gap-4 my-5">
          {/* Previous Button */}
          <button 
            className="w-10 h-10 flex items-center justify-center bg-neutral-300  rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
            onClick={handlePreviousClick }
          >
            <IconArrowNarrowRight className="text-neutral-700  rotate-180" />
          </button>

          {/* Next Button */}
          <button 
            className="w-10 h-10 flex items-center justify-center bg-neutral-300 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
            onClick={handleNextClick }
          >
            <IconArrowNarrowRight className="text-neutral-700 " />
          </button>
        </div>


      </div>
    </div>
  );
};

export default Client;
