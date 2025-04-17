import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import ContactVector from "../assets/images/ContactVector.png";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <>
      <main className="w-full pt-[30px] md:pt-[50px] pb-[50px] md:pb-[90px]  relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF] ">
        {/* Decorative elements */}
        <div
          className="hidden md:block absolute top-[20%] z-10 right-[15%] w-[20px] h-[20px] rounded-full bg-blue-800/30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="hidden md:block absolute inset-0 translate-x-[780px] translate-y-[180px]">
          <img
            src={ContactVector}
            alt="ContactVector"
            className="animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-[84rem] z-[100] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Left Side */}
          <div className="w-full md:w-[600px] flex flex-col items-center justify-center">
            <h3 className="text-[32px] md:text-[48px] font-geist font-bold text-[#1E1E1E] text-center">
              Contact US
            </h3>

            <div className="flex w-full items-center justify-center gap-2 md:gap-3 mt-2 md:mt-0">
              <Separator className="hidden md:block w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[14px] md:text-[18px] text-[#008080] text-center">
                Get In Touch , We're Here to Assist You
              </span>
              <Separator className="hidden md:block w-[94.46px]  h-[2px] bg-[#008080]" />
            </div>

            <div className="flex flex-col mt-4 gap-5 w-full">
              <Input
                placeholder="Please Enter Your Full Name"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Please Enter Your Phone Number"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Please Enter Your Email Address"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Textarea
                placeholder="Enter Your Message"
                className="font-geist focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-48 md:h-64 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[14px] md:placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide p-5 resize-none"
              ></Textarea>

              <button
                type="submit"
                className="flex justify-center font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn "
              >
                <Send />
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="z-20 w-full md:w-[580px] flex flex-col">
            <img
              src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
              alt="Software Solutions"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      <div className="w-full h-auto md:h-[196px] bg-[#B9DEEB] py-8 md:py-0">
        <div className="max-w-[84rem] h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-8 md:gap-0">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Get In Touch With Us
            </h4>

            <p className="font-geist text-[16px] md:text-[20px] font-medium text-center">
              <span className="text-[#1E40AF]">We're always happy</span> to
              Assist You
            </p>
          </div>

          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
          />

          <Separator
            orientation="horizontal"
            className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
          />

          <div className="w-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Email
            </h4>
            <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
              info@sunconsultants.co.in
            </p>
          </div>


          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
          />

<Separator
            orientation="horizontal"
            className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
          />


        <div className="w-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Phone Number
            </h4>
            <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
              +91-9315973373
            </p>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ContactUs;
