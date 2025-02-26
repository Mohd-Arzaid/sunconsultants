import Navbar from "./common/Navbar";
import HeroImage from "./assets/images/PlaceHolder.png";
import ArrowOne from "./assets/images/ArrowOne.png";
import ArrowTwo from "./assets/images/ArrowTwo.png";
import LogoOne from "./assets/images/OneLogo.png";
import LogoTwo from "./assets/images/TwoLogo.png";
import LogoThree from "./assets/images/ThreeLogo.png";
import LogoFour from "./assets/images/FourLogo.png";
import LogoFive from "./assets/images/FiveLogo.png";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <main className="relative pb-24 pt-12  custom-radial-gradient overflow-x-hidden ">
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div>

        <div className="max-w-[84rem] w-full mx-auto ">
          <div className="flex flex-col items-start">
            <div className="relative px-8 z-20 ">
              <img
                src={HeroImage}
                alt="Hero Image "
                className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)]"
              />
              <div className="absolute inset-0 flex items-center justify-center transform translate-x-[575px]">
                <div className="py-6 px-8 bg-white w-[650px] h-[380px] bg-white/70 backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <div className="relative max-w-96">
                    <h1 className="text-5xl font-bold font-playfair text-left text-black leading-[52px]">
                      Sun Consultants And Engineers
                    </h1>
                    <div className="w-[52px] h-[8px] bg-black inset-0 absolute transform translate-x-[380px] translate-y-7"></div>
                  </div>

                  <div className="mt-5 text-sm sm:text-xl text-zinc-500 tracking-wide mb-7 text-left max-w-2xl">
                    Trusted consultants for BIS, LMPC, EPR, and WPC
                    certifications since 2013. We assist both Indian and foreign
                    manufacturers in obtaining essential government
                    certifications for the Indian market.
                  </div>
                </div>
              </div>

              <div className="absolute shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] flex inset-0 w-[160px] h-[80px] transform translate-x-[70px] translate-y-[475px]">
                <div className="w-full h-full bg-white flex items-center justify-center ">
                  <button>
                    <img src={ArrowOne} alt="Arrow One" />
                  </button>
                </div>
                <div className="w-full h-full bg-[#64bfdd] flex items-center justify-center ">
                  <button>
                    <img src={ArrowTwo} alt="Arrow Two" />
                  </button>
                </div>
              </div>

              <div className=" flex items-center justify-between absolute inset-0  w-[219px] h-[27px] transform translate-x-[553.5px] translate-y-[525px]">
                <div className="font-poppins text-[#313131] text-xl">01</div>
                <div className="w-[135px] h-[10px] bg-white">
                  <div className="w-[52px] h-full bg-[#64bfdd]"></div>

                  <div></div>
                </div>
                <div className="font-poppins text-[#313131] text-xl">10</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Logo Section */}
      <div className="h-28 bg-[#B9DEEB]">
        <div className="max-w-[84rem] mx-auto h-full ">
          <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex gap-14 pr-14 items-center justify-center flex-none"
            >
              <img src={LogoOne} alt="Logo One" />
              <img src={LogoThree} alt="Logo Three" />
              <img src={LogoFour} alt="Logo Four" />
              <img src={LogoFive} alt="Logo Five" />
              <img src={LogoOne} alt="Logo One" />
              <img src={LogoTwo} alt="Logo Two" />
              <img src={LogoThree} alt="Logo Three" />
              <img src={LogoFour} alt="Logo Four" />
              <img src={LogoFive} alt="Logo Five" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
