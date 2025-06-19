import { Separator } from "../ui/separator";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "../magicui/box-reveal";
import { Link } from "react-router-dom";


export const Services = () => {
  return (

    <div className="pt-10 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">

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
                India&apos;s Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>


        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-16 md:gap-y-24">


          <Link to="/services/bis-mark-foreign" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>


          <Link to="/services/cdsco-registration-certification" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link to="/services/crs-registration" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link to="/services/plastic-waste" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              Plastic Waste Management
            </p>
          </Link>

          <Link to="/services/epr-registration" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              EPR Certificate certifications
            </p>
          </Link>

          <Link to="/services/lmpc-registration" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link to="/services/bis-certification" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              BIS Registration Certificate
            </p>
          </Link>

          <Link to="/services/isi-mark-indian" className="relative col-span-1 h-[200px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-16 md:mt-28 px-2 md:px-0 text-center font-roboto tracking-wide font-semibold text-black leading-tight">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
