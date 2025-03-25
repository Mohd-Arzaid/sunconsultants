import LogoTicker from "@/components/manual/LogoTicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Notification = () => {
  return (
<>
<NotificationHero/>
<LogoTicker />
<SearchNotification/>
</>
  );
};

export default Notification;


const NotificationHero = ()=>{
    return (
        <div className="relative h-[654px] overflow-x-hidden bg-[#F9F7F2]">
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>
  
        {/* Decorative elements */}
        <div
          className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
  
        {/* Larger circle with slower animation */}
        <div
          className="absolute top-[10%] left-[10%] w-[50px] h-[50px] rounded-full bg-[#1A8781]/20 animate-float-slow"
          style={{ animationDelay: "0s" }}
        ></div>
  
        {/* Square element with rotation */}
        <div
          className="absolute top-[70%] left-[45%] w-[42px] h-[42px] bg-[#1A8781]/15 animate-spin-slow"
          style={{ animationDuration: "15s" }}
        ></div>
  
        <div className="max-w-[84rem] gap-[90px] flex items-center justify-center h-full w-full mx-auto">
          {/* Left Side */}
  
          <div className="relative flex flex-col gap-8 w-[533px] items-start">
            <div className="inline-flex items-center">
              <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
              <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                Important Notifications
              </span>
            </div>
  
            <h1 className="leading-[70px] z-[10] font-playfair font-bold text-[56px] text-[#1E1E1E] -mt-2">
              <span className="relative">
                Lastest Notifications
                <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
              </span>{" "}
              And Updates
            </h1>
  
            <p className="font-poppins text-[#332156] w-[490px] text-[20px] leading-[40px] ">
              Stay updated with the latest notifications, guidelines, and news to
              ensure a smooth and compliant certification process.
            </p>
  
            <div className="flex items-center ">
              <div className="flex items-center cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
                </div>
                <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                  View Services
                </span>
              </div>
            </div>
          </div>
  
          {/* Right Side */}
  
          <div className="z-20 w-[580px] h-[435px] flex flex-col">
            <div className="flex w-full items-center gap-3">
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Contact Us
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
  
            <h3 className="text-[48px] font-inter font-bold text-[#1E1E1E]">
              Make an Appointment
            </h3>
  
            <p className="font-medium font-poppins text-[20px] text-[#996C6C]">
              Want to contact our team and book a call?
              <span className="text-black"> Try it now</span>
            </p>
  
            <div className="flex flex-col mt-5 gap-5">
              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Full Name"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
  
                <Input
                  placeholder="Email Address"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>
  
              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Contact Number"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
  
                <Input
                  placeholder="Company Name"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>
  
              <div className="flex items-center justify-between gap-5">
                <Input
                  placeholder="Product Name"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
  
                <Input
                  placeholder="Type Message"
                  className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
                />
              </div>
  
              <Button className="mt-1 w-[218px] h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

const SearchNotification = ()=>{
    return(
        <div>
            Search For Government Notification/QCO Updates
        </div>
    )
}