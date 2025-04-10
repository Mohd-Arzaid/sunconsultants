import HeroImage from "../../assets/images/Placeholder.png";
import ArrowOne from "../../assets/images/ArrowOne.png";
import ArrowTwo from "../../assets/images/ArrowTwo.png";
import WordPullUp from "../ui/word-pull-up";
import { FadeText } from "../ui/fade-text";
import { BlurIn } from "../ui/blur-in";
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
      <main className="md:hidden flex flex-col gap-5 w-full min-h-screen">
        <div className="bg-gray-100  w-full flex flex-col justify-center p-4">
          <div className="flex justify-between flex-col items-center w-full m-auto">
            <div className="flex flex-col gap-8 mt-20 mb-12">
              <WordPullUp
                words="Sun Consultants And Engineers"
                className="text-4xl font-geist font-bold text-left max-w-3xl break-words"
              />
              <div className="max-w-2xl">
                <FadeText
                  text="
             Trusted consultants for BIS, LMPC, EPR, and WPC certifications since 2013. We assist both Indian and foreign manufacturers in obtaining essential government certifications for the Indian market.
              "
                  className="font-geist"
                  direction="left"
                />
              </div>

              <div className="flex gap-3 flex-wrap items-center">
                <BlurIn
                  word="Our Services"
                  className="bg-black text-white text-sm font-geist py-3 rounded-md flex gap-2 justify-center items-center px-8"
                />
                <BlurIn
                  word="Contact Us"
                  className="border font-geist text-sm bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
                />
              </div>
            </div>
            <img 
                src="https://gitcs-brain.vercel.app/assets/undraw_agreement_re_d4dv-CXonPu7G.svg" 
                alt="Hero Image" 
                className="w-80 md:w-96 drop-shadow-xl" 
              />
          </div>
        </div>
      </main>

    </>
  );
};

export default Hero;
