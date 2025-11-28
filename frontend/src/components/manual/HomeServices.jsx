import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

// Service Images
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";

const HomeServices = () => {
  return (
    <div className="pt-10 md:pt-8 pb-8  md:pb-16 bg-white overflow-x-hidden ">
      <div className="max-w-[82rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[25px] uppercase md:text-[36px] font-bold font-inter md:font-roboto  text-center text-[#1E1E1E] ">
            Our Services
          </h2>

          <div className="hidden md:flex items-center w-[760px] gap-3 h-[35px] mx-auto justify-center">
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />

            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India&apos;s most trusted partner for certifications
            </span>

            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-x-10 px-4 md:px-0 gap-y-28 md:gap-y-24">
          {/* 1 */}
          <Link
            to="/services/bis-mark-foreign"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
            aria-label="BIS Mark for Foreign Manufacturers"
          >
            <figure className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 m-0">
              <img
                src={ISIMark}
                alt="BIS Certification Services - Professional ISI License for Foreign Manufacturers"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </figure>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          {/* 2 */}
          <Link
            to="/services/bis-certification"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BIS"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              Scheme X
            </p>
          </Link>

          {/* 3 */}
          <Link
            to="/services/isi-mark-indian"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>

          {/* 4 */}
          <Link
            to="/services/crs-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              BIS (CRS) Registration
            </p>
          </Link>

          {/* 5 */}
          <Link
            to="/services/cdsco-registration-certification"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
            aria-label="CDSCO Registration Certification"
          >
            <figure className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 m-0">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </figure>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              CDSCO Registration Certification
            </p>
          </Link>

          {/* 6*/}
          <Link
            to="/services/plastic-waste"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              Plastic Waste Management
            </p>
          </Link>

          {/* 7*/}
          <Link
            to="/services/epr-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              EPR Certificate Certifications
            </p>
          </Link>

          {/* 8 */}
          <Link
            to="/services/lmpc-registration"
            className="relative col-span-1 h-[240px] bg-[#B5DDEB] rounded-[20px] shadow-2xl shadow-blue-500/20"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[130px] h-[130px] rounded-full object-contain border-2 border-[#B5DDEB]"
              />
            </div>
            <p className="text-lg md:text-xl w-full mt-28 text-center font-roboto tracking-wide font-semibold text-black">
              LMPC Certificate Certifications
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
