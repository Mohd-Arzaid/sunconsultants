import Navbar from "./common/Navbar";
import HeroImage from "./assets/images/PlaceHolder.png";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <Navbar />
      <div className="relative pb-20 pt-16  custom-radial-gradient overflow-x-hidden ">
        {/* gradient div */}
        <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div>

        <div className="max-w-[84rem] w-full mx-auto ">
          <div className="flex flex-col items-start">
            <div className="relative px-8 z-20 ">
              <img
                src={HeroImage}
                alt="Hero Image "
                className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
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
                  {/* <div className="flex w-full justify-end items-center">
                    <Button className="px-5 py-6 text-lg bg-[#16C9BF] font-poppins tracking-wide hover:bg-[#16C9BF]/80 ">
                      Book An Appointment
                    </Button>
                  </div> */}
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>hyy</div>
    </>
  );
}

export default App;
