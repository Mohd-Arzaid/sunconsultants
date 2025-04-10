import HeroImage from "../../assets/images/Placeholder.png";
import ArrowOne from "../../assets/images/ArrowOne.png";
import ArrowTwo from "../../assets/images/ArrowTwo.png";
// import { ImagesSlider } from "../ui/images-slider";

const Hero = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   HeroImage
  // ];

  return (
    <>
      <main className="hidden md:block relative pb-24 pt-12  custom-radial-gradient overflow-x-hidden ">
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div>

        <div className="max-w-[84rem] w-full mx-auto ">
          <div className="flex flex-col items-start">
            <div className="relative px-8 z-20 ">
              <img
                src={HeroImage}
                alt="Hero Image "
                className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-[740px] h-[515px] object-cover"
              />
              {/* <ImagesSlider   className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-[740px] h-[515px] object-cover" images={images}></ImagesSlider> */}
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

      {/* For Mobile Device */}
      <main className="md:hidden pb-16 pt-6 custom-radial-gradient overflow-hidden">
        <div className="w-full px-4 mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="shadow-lg w-full h-auto object-cover mb-6"
            />
            
            <div className="py-5 px-4 bg-white/70 backdrop-blur-lg shadow-lg w-full">
              <div className="relative">
                <h1 className="text-3xl font-bold font-playfair text-center text-black leading-tight">
                  Sun Consultants And Engineers
                </h1>
                <div className="w-12 h-1.5 bg-black mx-auto mt-2"></div>
              </div>

              <div className="mt-4 text-sm text-zinc-500 mb-5 text-center">
                Trusted consultants for BIS, LMPC, EPR, and WPC
                certifications since 2013. We assist both Indian and foreign
                manufacturers in obtaining essential government
                certifications for the Indian market.
              </div>
            </div>
            
            <div className="flex w-full max-w-[280px] h-[60px] mt-6 shadow-md">
              <div className="w-full h-full bg-white flex items-center justify-center">
                <button>
                  <img src={ArrowOne} alt="Arrow One" className="w-6 h-6" />
                </button>
              </div>
              <div className="w-full h-full bg-[#64bfdd] flex items-center justify-center">
                <button>
                  <img src={ArrowTwo} alt="Arrow Two" className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full max-w-[200px] mt-4">
              <div className="font-poppins text-[#313131] text-lg">01</div>
              <div className="w-[100px] h-[8px] bg-white">
                <div className="w-[38px] h-full bg-[#64bfdd]"></div>
              </div>
              <div className="font-poppins text-[#313131] text-lg">10</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
