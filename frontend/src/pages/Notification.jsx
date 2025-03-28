import LogoTicker from "@/components/manual/LogoTicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { FileText } from "lucide-react";

const Notification = () => {
  return (
    <>
      {/* <NotificationHero /> */}
     
      <NotificationMainContent />
    </>
  );
};

export default Notification;

// const NotificationHero = () => {
//   return (
//     <div className="relative h-[654px] overflow-x-hidden bg-[#F9F7F2]">
//       {/* Background gradient */}
//       <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

//       {/* Decorative elements */}
//       <div
//         className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
//         style={{ animationDelay: "1s" }}
//       ></div>

//       {/* Larger circle with slower animation */}
//       <div
//         className="absolute top-[10%] left-[10%] w-[50px] h-[50px] rounded-full bg-[#1A8781]/20 animate-float-slow"
//         style={{ animationDelay: "0s" }}
//       ></div>

//       {/* Square element with rotation */}
//       <div
//         className="absolute top-[70%] left-[45%] w-[42px] h-[42px] bg-[#1A8781]/15 animate-spin-slow"
//         style={{ animationDuration: "15s" }}
//       ></div>

//       <div className="max-w-[84rem] gap-[90px] flex items-center justify-center h-full w-full mx-auto">
//         {/* Left Side */}

//         <div className="relative flex flex-col gap-8 w-[533px] items-start">
//           <div className="inline-flex items-center">
//             <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
//             <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
//               Important Notifications
//             </span>
//           </div>

//           <h1 className="leading-[70px] z-[10] font-playfair font-bold text-[56px] text-[#1E1E1E] -mt-2">
//             <span className="relative">
//               Lastest Notifications
//               <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
//             </span>{" "}
//             And Updates
//           </h1>

//           <p className="font-poppins text-[#332156] w-[490px] text-[20px] leading-[40px] ">
//             Stay updated with the latest notifications, guidelines, and news to
//             ensure a smooth and compliant certification process.
//           </p>

//           <div className="flex items-center ">
//             <div className="flex items-center cursor-pointer group">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
//                 <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
//               </div>
//               <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
//                 View Services
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}

//         <div className="z-20 w-[580px] h-[435px] flex flex-col">
//           <div className="flex w-full items-center gap-3">
//             <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
//               Contact Us
//             </span>
//             <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
//           </div>

//           <h3 className="text-[48px] font-inter font-bold text-[#1E1E1E]">
//             Make an Appointment
//           </h3>

//           <p className="font-medium font-poppins text-[20px] text-[#996C6C]">
//             Want to contact our team and book a call?
//             <span className="text-black"> Try it now</span>
//           </p>

//           <div className="flex flex-col mt-5 gap-5">
//             <div className="flex items-center justify-between gap-5">
//               <Input
//                 placeholder="Full Name"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />

//               <Input
//                 placeholder="Email Address"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />
//             </div>

//             <div className="flex items-center justify-between gap-5">
//               <Input
//                 placeholder="Contact Number"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />

//               <Input
//                 placeholder="Company Name"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />
//             </div>

//             <div className="flex items-center justify-between gap-5">
//               <Input
//                 placeholder="Product Name"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />

//               <Input
//                 placeholder="Type Message"
//                 className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
//               />
//             </div>

//             <Button className="mt-1 w-[218px] h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]">
//               Book Appointment
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const NotificationMainContent = () => {
  return (
    <div className=" bg-[#f9f7f2]">
      <div className=" max-w-[88rem] mx-auto p-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="font-playfair text-5xl font-bold text-[#1e1e1e] mb-4">
            DRAFT QCO Notifications
          </h1>
          <p className="text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest Quality Control Order notifications and
            certification requirements
          </p>
        </div>

        {/* Search Bar */}
        <div className=" mb-20 max-w-2xl mx-auto">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Government Notification/QCO Updates"
              className="w-full pl-12 placeholder:font-geist placeholder:text-[18px] pr-4 py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
          </div>
        </div>

        {/* Notifications */}
        <NotificationCard />
      </div>
    </div>
  );
};

const NotificationCard = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
        <div className="h-4 bg-[#1A8781]"></div>
        <div className=" p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1.5 font-geist bg-[#1A8781]/10 text-[#1A8781] font-medium text-sm rounded-full">
              New QCO
            </span>
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1A8781]"></span>
              March 15, 2023
            </span>
          </div>

          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3">
            Medical Devices Quality Control Order 2023
          </h3>

          <p className="font-geist  text-gray-600 mb-6 line-clamp-3">
            New regulations for medical device manufacturing and certification
            requirements have been published. These focus on improved safety
            standards and quality assurance protocols.
          </p>

          <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#1A8781]" />

              <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 text-gray-600 ">
                Official Document
              </span>
            </div>

            <Button
              variant="outline"
              className="border-[#1A8781] text-[#1A8781] hover:bg-[#1A8781] hover:text-white font-geist transition-all duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
        <div className="h-4 bg-[#C86A31]"></div>
        <div className=" p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1.5 font-geist bg-[#C86A31]/10 text-[#C86A31] font-medium text-sm rounded-full">
              Update
            </span>
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1A8781]"></span>
              February 28, 2023
            </span>
          </div>

          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3">
            Electronic Goods Certification Revision
          </h3>

          <p className="font-geist  text-gray-600 mb-6 line-clamp-3">
            The existing Quality Control Order for electronic goods has been
            revised with updated technical specifications and compliance
            requirements for manufacturers and importers.
          </p>

          <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#C86A31]" />

              <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 text-gray-600 ">
                Official Document
              </span>
            </div>

            <Button
              variant="outline"
              className="border-[#C86A31] text-[#C86A31] hover:bg-[#C86A31] hover:text-white font-geist transition-all duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
        <div className="h-4 bg-[#5B63E6]"></div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1.5 font-geist bg-[#5B63E6]/10 text-[#5B63E6] font-medium text-sm rounded-full">
              Draft
            </span>
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1A8781]"></span>
              April 10, 2023
            </span>
          </div>

          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3">
            Pharmaceutical Products Draft QCO
          </h3>

          <p className="font-geist  text-gray-600 mb-6 line-clamp-3">
            A new draft Quality Control Order for pharmaceutical products has
            been issued for public consultation. Stakeholders are invited to
            provide feedback before implementation.
          </p>

          <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#5B63E6]" />

              <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 text-gray-600 ">
                Official Document
              </span>
            </div>

            <Button
              variant="outline"
              className="border-[#5B63E6] text-[#5B63E6] hover:bg-[#5B63E6] hover:text-white font-geist transition-all duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
        <div className="h-4 bg-[#1A8781]"></div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1.5 font-geist bg-[#1A8781]/10 text-[#1A8781] font-medium text-sm rounded-full">
              Draft
            </span>
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#1A8781]"></span>
              March 22, 2023
            </span>
          </div>

          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3">
            Textile Products Standards Implementation
          </h3>

          <p className="font-geist  text-gray-600 mb-6 line-clamp-3">
            The implementation timeline for the Textile Products Quality Control
            Order has been announced. Companies have until October 2023 to
            ensure compliance with the new standards.
          </p>

          <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#1A8781]" />

              <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 text-gray-600 ">
                Official Document
              </span>
            </div>

            <Button
              variant="outline"
              className="border-[#1A8781] text-[#1A8781] hover:bg-[#1A8781] hover:text-white font-geist transition-all duration-200"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
