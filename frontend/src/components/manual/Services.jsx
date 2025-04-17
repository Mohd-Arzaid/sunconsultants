import { Separator } from "../ui/separator";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "../magicui/box-reveal";


const Services = () => {
  return (

    <div className="pt-10 md:pt-12 pb-12  md:pb-16 custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[84rem] w-full mx-auto">
 
        <div className="flex flex-col items-center justify-center">
        <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
          <h2 className="text-[30px] md:text-[48px] font-bold font-roboto md:font-roboto  text-center text-[#1E1E1E] ">
            Our Services
          </h2>
          </BoxReveal>
          
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
          <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India's Best Certificate Consultant
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>
          </BoxReveal>
        </div>


        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-x-10 px-4 md:px-0 gap-y-28 md:gap-y-24">
       
   
          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </div>


          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              CDSCO Registration Certification
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS (CRS) Registration
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              Plastic Waste Management
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              EPR Certificate Consultants
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              LMPC Certificate Consultants
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS Registration Certificate
            </p>
          </div>

          <div className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[130px] h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
