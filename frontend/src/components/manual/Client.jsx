import { BoxReveal } from "../magicui/box-reveal";
import { Separator } from "../ui/separator";
import TestimonialImage from "../../assets/images/TestimonialImage.png";
import Vector from "../../assets/images/Vector.png";

const Client = () => {
  return (
    <div className=" pt-12 pb-16 custom-radial-gradient overflow-x-hidden ">
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

        <div className="w-full flex items-center justify-between mt-12  ">

        <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImage} className="" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Mohd Arzaid
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  Web Developer
                </span>
              </div>
            </div>

    
          </div>
          
          <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImage} className="" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Mohd Arzaid
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  Web Developer
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

          <div className=" relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#B5DDEB] flex gap-7  rounded-[47px] p-8 ">
            <div className="flex flex-col items-center justify-center gap-3">
              <img src={TestimonialImage} className="" alt="Testimonial" />

              <div className="flex flex-col items-center justify-center">
                <div className="text-[27px] font-semibold font-roboto text-black tracking-wide">
                  Mohd Arzaid
                </div>
                <span className="text-[18px] font-roboto  text-black tracking-wide text-[#181040]">
                  Web Developer
                </span>
              </div>
            </div>

    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
