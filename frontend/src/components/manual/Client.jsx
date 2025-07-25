import { BoxReveal } from "../magicui/box-reveal";
import { Separator } from "../ui/separator";
import TestimonialImage from "../../assets/images/TestimonialImage.png";
import TestimonialImageSecond from "../../assets/images/TestimonialImageSecond.png";
import TestimonialImageThree from "../../assets/images/TestimonialImageThree.png";
import Vector from "../../assets/images/Vector.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Client = () => {
  const slideData = [
    {
      image: TestimonialImage,
      name: "Priya Sharma",
      designation: "Web Designer",
      description:
        "Working with this certification consultancy was a seamless experience. Their expertise in BIS and WPC certifications helped us navigate the complex regulatory landscape efficiently. Highly recommended for their professional approach.",
    },
    {
      image: TestimonialImageSecond,
      name: "Rajeev Kumar",
      designation: "Web Developer",
      description:
        "Outstanding support for our EPR certification process. The team's in-depth knowledge and prompt responses made the entire certification journey smooth. They truly understand both Indian and international compliance requirements.",
    },
    {
      image: TestimonialImageThree,
      name: "Ragini Singh",
      designation: "App Developer",
      description:
        "Their expertise in LMPC certification was invaluable for our product launch in India. The certifications provided clear guidance throughout the process and helped us meet all regulatory requirements well within our timeline.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Uday Chaudhary",
      designation: "Marketing Manager",
      description:
        "Their comprehensive support for our BIS certification was crucial for entering the Indian market. The team's detailed analysis and strategic guidance ensured we met all necessary standards without delays.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  return (
    <div className=" pt-5 md:pt-10 pb-8 custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[88rem] px-4 md:px-8 w-full mx-auto overflow-hidden relative">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-roboto  text-center text-[#1E1E1E] ">
              Our Clients
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                What our clients have to say
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden mt-8">
          <div className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] rounded-[30px] p-6 ">
            <div className="flex flex-col items-center gap-4">
              <img
                src={slideData[current].image}
                className="rounded-full w-24 h-24 object-cover border-4 border-white"
                alt="Testimonial"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-xl font-semibold font-roboto text-black tracking-wide">
                  {slideData[current].name}
                </div>
                <span className="text-base font-roboto text-[#181040] tracking-wide">
                  {slideData[current].designation}
                </span>
              </div>
              <p className="text-base font-poppins text-[#5a4a4a] text-center ">
                {slideData[current].description}
              </p>
            </div>
            <div className="absolute top-4 right-4">
              <img src={Vector} alt="Vector" className="w-10 h-10 opacity-50" />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="hidden md:flex w-full flex items-center justify-between mt-10  ">
          {[-1, 0, 1].map((offset) => {
            const index =
              (current + offset + slideData.length) % slideData.length;
            const slide = slideData[index];

            return (
              <div
                key={index}
                className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7 rounded-[47px] p-8 transition-all duration-300 ease-in-out"
                style={{
                  opacity: offset === 0 ? 1 : 0.7,
                  transform: `scale(${offset === 0 ? 1 : 0.9})`,
                }}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={slide.image}
                    className="rounded-[52px] w-[235px] h-[284.58px] object-cover"
                    alt="Testimonial"
                  />

                  <div className="flex flex-col items-center justify-center">
                    <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                      {slide.name}
                    </div>
                    <span className="text-[18px] font-roboto text-black tracking-wide text-[#181040]">
                      {slide.designation}
                    </span>
                  </div>
                </div>

                {offset === 0 && (
                  <>
                    <div className="py-2 text-[19px] font-poppins text-[#785F5F] text-left max-w-xs">
                      {slide.description}
                    </div>

                    <div className="absolute inset-0  translate-x-[480px] translate-y-[300px] ">
                      <img src={Vector} alt="Vector" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 my-5">
          {/* Previous Button */}
          <button
            className="w-10 h-10 flex items-center justify-center bg-neutral-300  rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
            onClick={handlePreviousClick}
          >
            <ArrowRight className="text-neutral-700  rotate-180" />
          </button>

          {/* Next Button */}
          <button
            className="w-10 h-10 flex items-center justify-center bg-neutral-300 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
            onClick={handleNextClick}
          >
            <ArrowRight className="text-neutral-700 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
