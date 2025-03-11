
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'


const CDSCOHero = () => {
  return (
    <main className="relative  pt-[104px] pb-[106px]  overflow-x-hidden ">
    {/* Background gradient */}
    {/* <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-2"></div> */}

    <div className="max-w-[84rem]  gap-[90px] flex items-center justify-center h-full w-full mx-auto">
      {/* Left Side */}

      <div className="relative flex flex-col gap-4  w-[533px] items-start">
        <h1 className=" leading-[65px] z-[10] font-playfair font-bold text-[56px]">
          CDSCO Registration Certificate
        </h1>
        <p className="font-poppins text-[20px] z-[10] leading-[40px] text-[#332156]">
          CDSCO license is mandatory for the manufacturing, import, sale,
          andl distribution of all medical devices in India.
        </p>
        <div className="absolute inset-0 w-[371px] h-[170px]  bg-[#3C4A6D]/30 filter blur-[90px]"></div>
      </div>

      {/* Right Side */}
      <div className="z-20 w-[580px] h-[435px] flex flex-col ">
        <div className="flex w-full items-center gap-3">
          <span className="uppercase  font-poppins font-semibold text-[20px] text-[#008080]">
            Contact Us
          </span>
          <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
 
        </div>

        <h3 className="text-[48px] font-inter  font-bold  text-[#1E1E1E] ">
          Make an Appointment
        </h3>

        <p className="font-medium font-poppins text-[20px]  text-[#996C6C]">
          Want to contact our team and book a call?
          <span className="text-black"> Try it now</span>
        </p>

        <div className="flex flex-col mt-5 gap-5 ">
          <div className="flex items-center justify-between gap-5">
            <Input
              placeholder="Full Name"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />

            <Input
              placeholder="Email Address"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />
          </div>

          <div className="flex items-center justify-between gap-5">
            <Input
              placeholder="Contact Number"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />

            <Input
              placeholder="Company Name"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />
          </div>

          <div className="flex items-center justify-between gap-5">
            <Input
              placeholder="Product Name"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />

            <Input
              placeholder="Type Message"
              className="focus-visible:ring-1  focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
            />
          </div>

          <Button className=" mt-1 w-[218px] h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] font-poppins tracking-wide leading-[28px] ">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  </main>
  )
}

export default CDSCOHero
