import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Country Images
import Thailand from "/countries-images/Thailand.webp";
import Vietnam from "/countries-images/Vietnam.webp";
import Canada from "/countries-images/Canada.webp";
import China from "/countries-images/China.webp";
import Italy from "/countries-images/Italy.webp";
import Colombia from "/countries-images/Colombia.webp";
import Qatar from "/countries-images/Qatar.webp";
import India from "/countries-images/India.webp";
import Indonesia from "/countries-images/Indonesia.webp";
import Malaysia from "/countries-images/Malaysia.webp";
import Russia from "/countries-images/Russia.webp";
import Bahrain from "/countries-images/Bahrain.webp";
import UAE from "/countries-images/UAE.webp";
import Nepal from "/countries-images/Nepal.webp";
import SriLanka from "/countries-images/SriLanka.webp";
import France from "/countries-images/France.webp";
import Germany from "/countries-images/Germany.webp";
import Sweden from "/countries-images/Sweden.webp";
import Slovenia from "/countries-images/Slovenia.webp";
import Austria from "/countries-images/Austria.webp";
import USA from "/countries-images/USA.webp";
import Denmark from "/countries-images/Denmark.webp";

// Countries
const Countries = () => {
  const handlePreviousClick = () => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop();
      newArray.unshift(lastItem);
      return newArray;
    });
  };

  const handleNextClick = () => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      newArray.push(firstItem);
      return newArray;
    });
  };

  const [countriesData, setCountriesData] = useState([
    { name: "Thailand", img: Thailand },
    { name: "Vietnam", img: Vietnam },
    { name: "Canada", img: Canada },
    { name: "China", img: China },
    { name: "Italy", img: Italy },
    { name: "Colombia", img: Colombia },
    { name: "Qatar", img: Qatar },
    { name: "India", img: India },
    { name: "Indonesia", img: Indonesia },
    { name: "Malaysia", img: Malaysia },
    { name: "Russia", img: Russia },
    { name: "Bahrain", img: Bahrain },
    { name: "UAE", img: UAE },
    { name: "Nepal", img: Nepal },
    { name: "Sri Lanka", img: SriLanka },
    { name: "France", img: France },
    { name: "Germany", img: Germany },
    { name: "Sweden", img: Sweden },
    { name: "Slovenia", img: Slovenia },
    { name: "Austria", img: Austria },
    { name: "USA", img: USA },
    { name: "Denmark", img: Denmark },
  ]);

  return (
    <div className="relative bg-white py-12 md:py-0">
      <div className=" max-w-[88rem] mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[18px] ">
          {/* Left Side */}
          <div className="w-full md:max-w-[383px] flex flex-col gap-[30px] items-center text-center md:items-start md:text-left ">
            <div className="flex flex-col gap-2 md:gap-[20px]">
              <h2 className="font-roboto leading-tight font-bold text-[30px] md:text-[40px]">
                Glimpse of the Countries we have Served In
              </h2>

              <p className="font-poppins font-medium text-base md:text-[19px] text-[#008080]">
                Delivering excellence everywhere.
              </p>
            </div>

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
          </div>

          <div className="w-full px-0 md:px-[22px] py-3 md:pt-14 md:pb-10  overflow-hidden scrollbar-hide  [mask-image:linear-gradient(to_right,black_90%,transparent)]">
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
              {countriesData.map((country, index) => (
                <div
                  key={index}
                  className="hidden w-[380px] h-[380px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={country.img}
                      alt={country.name}
                      className={
                        country.name === "Thailand"
                          ? "w-full h-full object-cover"
                          : ""
                      }
                    />
                  </div>
                  <div className="mt-4 px-2 flex items-center justify-between w-full">
                    <span className="flex text-xl items-center font-bold justify-center gap-2">
                      <Star className="fill-current text-[#160E34]" size={20} />
                      <h1 className="tracking-widest text-[#160E34] uppercase">
                        {country.name}
                      </h1>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
