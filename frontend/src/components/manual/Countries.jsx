import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { BoxReveal } from "../magicui/box-reveal";
import Thailand from "../../assets/images/Thailand.png";
import Vietnam from "../../assets/images/Vietnam.png";
import Canada from "../../assets/images/Canada.png";
import China from "../../assets/images/China.png";
import Italy from "../../assets/images/Italy.png";
import Colombia from "../../assets/images/Colombia.png";
import Qatar from "../../assets/images/Qatar.png";
import India from "../../assets/images/India.png";
import { useState } from "react";

const Countries = () => {
  const [current, setCurrent] = useState(0);
  const handlePreviousClick = () => {};
  const handleNextClick = () => {};

  const countriesData = [
    { name: "Thailand", img: Thailand },
    { name: "Vietnam", img: Vietnam },
    { name: "Canada", img: Canada },
    { name: "China", img: China },
    { name: "Italy", img: Italy },
    { name: "Colombia", img: Colombia },
    { name: "Qatar", img: Qatar },
    { name: "India", img: India },
  ];

  return (
    <div className="relative custom-radial-gradient py-12 md:py-0">
      <div className=" max-w-[88rem] mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[18px] ">
          {/* Left Side */}
          <div className="w-full md:max-w-[383px] flex flex-col gap-[30px] items-center text-center md:items-start md:text-left ">
            <div className="flex flex-col gap-2 md:gap-[20px]">
              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                <h1 className="font-roboto leading-tight font-bold text-[30px] md:text-[43px]">
                  Countries We Serve Worldwide
                </h1>
              </BoxReveal>

              <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                <p className="font-poppins font-medium text-base md:text-[19px] text-[#008080]">
                  Expanding our services across multiple nations, delivering
                  excellence everywhere.
                </p>
              </BoxReveal>
            </div>

            <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
              <div className="flex gap-4 items-center ">
                <button
                  onClick={handlePreviousClick}
                  className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-[#160E34]"
                >
                  <ChevronLeft className="hidden md:block" />
                  <ChevronLeft className="block md:hidden size={20}" />
                </button>

                <button
                  onClick={handleNextClick}
                  className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-[#160E34] border-2 border-[#160E34]"
                >
                  <ChevronRight className="hidden md:block text-white" />
                  <ChevronRight className="block md:hidden size-4 text-white" />
                </button>
              </div>
            </BoxReveal>
          </div>

          <div className="w-full px-0 md:px-[22px] py-3 md:py-20 overflow-hidden scrollbar-hide  [mask-image:linear-gradient(to_right,black_90%,transparent)]">
            <div className=" flex gap-4 md:gap-[22px] w-max ">
              {/* Mobile */}
              {countriesData.map((country, index) => (
                <div
                  key={index}
                  className=" md:hidden w-[280px] h-[280px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  rounded-[12px] p-4 flex flex-col items-center justify-center flex-shrink-0"
                >
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src={country.img}
                      alt={country.name}
                      className="w-auto h-full object-contain"
                    />
                  </div>

                  <div className="mt-3 px-1 flex items-center justify-between w-full">
                    <span className="flex text-base items-center font-bold justify-center gap-1">
                      <Star className="fill-current text-[#160E34]" size={16} />
                      <h1 className="tracking-wider  text-[#160E34] uppercase">
                        {country.name}
                      </h1>
                    </span>
                  </div>
                </div>
              ))}

              {/* Desktop */}
              {/* Thailand */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={Thailand}
                    alt="Thailand"
                    className="w-full h-full object-cover"
                  />
                </div>
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

              {/* Vietnam */}
              <div className="hidden   w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={Vietnam} alt="Thailand" />
                </div>
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

              {/* Canada */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={Canada} alt="Canada" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      Canada
                    </h1>
                  </span>
                </div>
              </div>

              {/* China */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={China} alt="China" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      China
                    </h1>
                  </span>
                </div>
              </div>

              {/* Italy */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={Italy} alt="Italy" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      Italy
                    </h1>
                  </span>
                </div>
              </div>

              {/* Colombia */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={Colombia} alt="Colombia" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className="tracking-widest text-[#160E34]  uppercase">
                      Colombia
                    </h1>
                  </span>
                </div>
              </div>

              {/* Qatar */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={Qatar} alt="Qatar" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className=" tracking-widest text-[#160E34]  uppercase">
                      Qatar
                    </h1>
                  </span>
                </div>
              </div>

              {/* India */}
              <div className="hidden  w-[380px] h-[380px]  bg-[#B5DDEB]  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center ">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={India} alt="India" />
                </div>
                <div className=" mt-4 px-2  flex items-center justify-between w-full">
                  <span className="flex text-xl items-center font-bold justify-center gap-2">
                    <Star
                      className="  fill-current text-[#160E34] "
                      size={20}
                    />

                    <h1 className=" tracking-widest text-[#160E34]  uppercase">
                      India
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
