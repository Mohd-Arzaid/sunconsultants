import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const Contact = () => {
  return (
    <div className=" pt-12 pb-20 custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[84rem] w-full mx-auto">
        <div className="w-1/2">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India's Best Certificate Consultant
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>

          <h3 className="text-[48px] font-bold font-roboto text-[#1E1E1E] ">
            Contact Us
          </h3>

          <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
            Want to contact our team and book a call?
            <span className="text-black"> Try it now</span>
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <Input
              className="w-[575.08px] h-[72px] rounded-[15px] placeholder:text-[#7E7E7E] placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-8"
              placeholder="Full Name"
            />

            <Input
              className="w-[575.08px] h-[72px] rounded-[15px] placeholder:text-[#7E7E7E] placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-8"
              placeholder="Email Address"
            />

            <Input
              className="w-[575.08px] h-[72px] rounded-[15px] placeholder:text-[#7E7E7E] placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-8"
              placeholder="Phone Number"
            />

            <Input
              className="w-[575.08px] h-[72px] rounded-[15px] placeholder:text-[#7E7E7E] placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-8"
              placeholder="Type Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
