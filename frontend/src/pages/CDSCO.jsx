import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogImageOne from "../assets/images/BlogImageOne.png";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";

const CDSCO = () => {
  return (
    <>
      <main className="relative py-[106px] custom-radial-gradient overflow-x-hidden ">
        {/* Background gradient */}
        {/* <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div> */}

        <div className="max-w-[84rem]  gap-[90px] flex items-center justify-center h-full w-full mx-auto">
          {/* Left Side */}

          <div className="relative flex flex-col gap-4  w-[533px] items-start">
            <h1 className=" leading-[65px] z-[10] font-playfair font-bold text-[56px]">
              CDSCO Registration Certificate
            </h1>
            <p className="font-poppins text-[20px] z-[10] leading-[40px] text-[#332156]">
              CDSCO license is mandatory for the manufacturing, import, sale,
              andl distribution of all medical devices in India.
            </p>
            <div className="absolute inset-0 w-[371px] h-[170px]  bg-[#3C4A6D]/30 filter blur-[90px]"></div>
          </div>

          {/* Right Side */}
          <div className="z-20 w-[580px] h-[435px] flex flex-col ">
            <div className="flex w-full items-center gap-3">
              <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                Contact Us
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[48px] font-inter  font-bold  text-[#1E1E1E] ">
              Make an Appointment
            </h3>

            <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
              Want to contact our team and book a call?
              <span className="text-black"> Try it now</span>
            </p>

            <div className="flex flex-col mt-5 gap-5 ">
              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Full Name"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />

                <Input
                  placeholder="Email Address"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>

              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Contact Number"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />

                <Input
                  placeholder="Company Name"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>

              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Product Name"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />

                <Input
                  placeholder="Type Message"
                  className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>

              <Button className=" mt-1 w-[218px] h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] font-poppins tracking-wide leading-[28px] ">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Index */}
      <div className="bg-[#B9DEEB] w-full h-20">
        <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
          {[
            "Overview",
            "Eligibility",
            "Classification",
            "Documents",
            "Registration",
            "Licensing",
            "Consulting",
            "FAQs",
          ].map((item) => (
            <div key={item} className="relative cursor-pointer group">
              <div className="text-base font-bold font-roboto tracking-wider text-blue-950 uppercase transition-colors duration-300 group-hover:text-blue-900">
                {item}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[600px] custom-radial-gradient overflow-x-hidden pt-8 ">
        <div className="max-w-[88rem] flex gap-[48px] mx-auto px-12">

          <div className="w-[360px]  ">
            <h1 className=" text-xl font-semibold font-roboto tracking-wide mb-2">
              Latest Blogs
            </h1>
            <Separator className="bg-black mt-[12px] mb-[16px] h-[2px]" />

            <div className="flex items-center    justify-between gap-4">
              <img src={BlogImageOne} alt="BlogImageOne" />
              <div className="flex flex-col gap-2 items-start  justify-between w-full">
                <div className="rounded-md bg-emerald-200 border border-emerald-400 text-emerald-700 px-1.5 py-1 text-sm leading-none no-underline group-hover:no-underline">
                  CDSCO
                </div>

                <p className="text-sm font-normal text-zinc-900">
                  Important update on mandatory BIS Certification for
                  manufacturers and importers of " Work chairs.
                </p>

                <Button
                  variant="link"
                  className="text-blue-900 hover:text-blue-950 p-0 h-auto font-medium text-sm"
                >
                  Read More
                  <ArrowRightIcon className="-ml-1 mt-0.5 w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1">
          <div className="flex w-full items-center gap-3">
              <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
                Overview
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[48px] font-roboto font-bold text-[#1E1E1E]">
              CDSCO License Details
            </h3>
            

            <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
              CDSCO Registration can be obtained through online portal registration
            </p>


<div className=" mt-6 relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-full antialiased leading-loose">
CDSCO stands for Central Drugs Standard Control Organisation (which comes under the Ministry of Health and Family Welfare), headquartered in Delhi and has 6 zonal offices in India namely at Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and various other sub-zonal offices. It is the national regulatory body for products like cosmetics, drugs, medical devices, etc.
</div>

          </div>


        </div>
      </div>
    </>
  );
};

export default CDSCO;
