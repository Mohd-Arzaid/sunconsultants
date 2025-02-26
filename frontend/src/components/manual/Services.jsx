import { Separator } from "../ui/separator";

const Services = () => {
  return (
    <div className=" pt-12 h-screen custom-radial-gradient overflow-x-hidden ">
      <div className="max-w-[84rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[48px] font-bold font-roboto  text-center text-[#1E1E1E] ">
            Our Services
          </h2>
          <div className="flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India's Best Certificate Consultant
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
