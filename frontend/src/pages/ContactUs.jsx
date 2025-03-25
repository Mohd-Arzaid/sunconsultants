import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import ContactVector from "../assets/images/ContactVector.png";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <>
      <main className="w-full pt-[50px] pb-[90px]  relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF] ">
        {/* Decorative elements */}
        <div
          className="absolute top-[20%] z-10 right-[15%] w-[20px] h-[20px] rounded-full bg-blue-800/30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="absolute inset-0 translate-x-[780px] translate-y-[180px]">
          <img
            src={ContactVector}
            alt="ContactVector"
            className="animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-[84rem]  z-[100] gap-[90px] flex items-center justify-center h-full w-full mx-auto">
          {/* Left Side */}
          <div className="w-[600px] flex flex-col items-center justify-center">
            <h3 className="text-[48px] font-geist font-bold text-[#1E1E1E]">
              Contact US
            </h3>

            <div className="flex w-full items-center justify-center gap-3">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[18px] text-[#008080]">
                Get In Touch , We're Here to Assist You
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <div className="flex flex-col mt-4 gap-5 w-full">
              <Input
                placeholder="Please Enter Your Full Name"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Please Enter Your Phone Number"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Please Enter Your Email Address"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Textarea
                placeholder="Enter Your Message"
                className="font-geist  focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-64 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide p-5 resize-none"
              ></Textarea>

              <button
                type="submit"
                className="flex justify-center  font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn"
              >
                <Send />
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="z-20 w-[580px] flex flex-col">
            <img
              src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
              alt="Software Solutions"
            />
          </div>
        </div>
      </main> 

      <div className="w-full h-[196px] bg-[#B9DEEB]">
        <div className="max-w-[84rem]  h-full mx-auto flex items-center justify-between">
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <h4 className="font-geist text-[30px] leading-tight text-[#1E1E1E] font-bold">
              Get In Touch With Us
            </h4>
            <p className="font-geist  text-[20px] font-medium">
              <span className="text-[#1E40AF]">We’re always happy</span> to
              Assist You
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[109px] w-[3px] rounded-xl"
          />
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <h4 className="font-geist text-[30px] leading-tight text-[#1E1E1E] font-bold">
              Email
            </h4>
            <p className="font-geist text-[#3C3C48]  text-[20px] font-medium">
              info@sunconsultants.co.in
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[109px] w-[3px] rounded-xl"
          />
          <div className="w-full h-full flex flex-col items-center justify-center ">
            <h4 className="font-geist text-[30px] leading-tight text-[#1E1E1E] font-bold">
              Phone Number
            </h4>
            <p className="font-geist text-[#3C3C48]  text-[20px] font-medium">
              +91-9315973373 
            </p>
          </div>
        </div>
      </div>


    </>
  );
};

export default ContactUs;
