import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import ContactUs from "../../assets/images/ContactUs.png";
import ContactChild from "../../assets/images/ContactChild.png";
import { Button } from "../ui/button";
import { BoxReveal } from "../magicui/box-reveal";

const Contact = () => {
  return (
    <div className="  md:pt-12 pb-16 custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[88rem] px-4 md:px-8 w-full flex flex-col md:flex-row  items-center justify-between mx-auto">
        <div className="w-full md:w-1/2">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex w-full items-center gap-3">
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h3 className="text-[30px]  md:text-[48px] font-bold font-roboto text-[#1E1E1E] ">
              Contact Us
            </h3>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <p className="font-medium font-poppins text-[17px]  md:text-[20px]  text-[#996C6C]">
              Want to contact our team and book a call?
              <span className="text-black"> Try it now</span>
            </p>
          </BoxReveal>

          <div className="mt-6 flex flex-col gap-4">
            <Input
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] 
                focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
                  placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 "
              placeholder="Full Name"
            ></Input>

            <Input
          className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] 
          focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
            placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 "
              placeholder="Email Address"
            />

            <Input
          className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] 
          focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
            placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 "
              placeholder="Phone Number"
            />

            <Input
          className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] 
          focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
            placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 "
              placeholder="Type Message"
            />

            <Button className="w-full md:w-[600px] mt-2 h-14 md:h-[72px] rounded-xl md:rounded-[15px] bg-[#20B2AA] hover:bg-[#20CFC6] text-white text-[17px] md:text-[20px] font-poppins font-semibold">
              Get Started
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative w-[600px] h-[539px] mr-5 mt-16 ">
          <img
            src={ContactUs}
            alt="ContactUs"
            className="absolute right-0 w-[475.99px] h-[539px] object-cover  "
          />

          <img
            src={ContactChild}
            alt="ContactChild"
            className=" 
          absolute inset-0 w-[350px] h-[350px] -translate-x-[70px] translate-y-[180px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
