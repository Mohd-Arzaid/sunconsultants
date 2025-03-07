import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { BoxReveal } from "../magicui/box-reveal";
import Thailand from "../../assets/images/Thailand.png";
import Vietnam from "../../assets/images/Vietnam.png";

const Countries = () => {
  return (
    <div className="relative custom-radial-gradient  ">
      <div className=" max-w-[88rem] mx-auto w-full px-8">
        <div className="flex items-center  justify-between ">
          {/* Left Side */}
          <div className="max-w-[383px] flex flex-col gap-[30px] ">
            <div className="flex flex-col gap-[20px]">
              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                <h1 className="font-roboto leading-tight font-bold text-[43px]">
                  Countries We Serve Worldwide
                </h1>
              </BoxReveal>

              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                <p className="font-poppins font-medium text-[19px] text-[#008080]">
                  Expanding our services across multiple nations, delivering
                  excellence everywhere.
                </p>
              </BoxReveal>
            </div>

            <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
              <div className="flex gap-4 items-center ">
                <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center border-2 border-[#160E34]">
                  <ChevronLeft />
                </div>

                <div className="rounded-full w-[48px] h-[48px] flex items-center justify-center bg-[#160E34] border-2 border-[#160E34]">
                  <ChevronRight className="text-white" />
                </div>
              </div>
            </BoxReveal>
          </div>

          <div className="w-full px-10 p-20 overflow-hidden scrollbar-hide [mask-image:linear-gradient(to_right,black_90%,transparent)]">
            <div className="flex gap-[22px] w-max">

              <div className="min-w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 flex flex-col items-center justify-center ">
                <img src={Thailand} alt="Thailand" className="w-[384px] h-[284px] object-cover " />
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className=" tracking-widest text-[#160E34]  uppercase">
                      Thailand
                    </h1>
                  </span>
                </div>
              </div>

              <div className="min-w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 flex flex-col items-center justify-center ">
                <img src={Vietnam} alt="Thailand" className="object-cover " />
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      Vietnam
                    </h1>
                  </span>
                </div>
              </div>


              <div className="min-w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 flex flex-col items-center justify-center ">
                <img src={Thailand} alt="Thailand" className="object-cover " />
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      Thailand
                    </h1>
                  </span>
                </div>
              </div>


            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
