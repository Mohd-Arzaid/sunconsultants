import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const HeroSection = () => {
  return (
    <div className="bg-blue-900 w-full h-[90%]">
      <div className="flex items-center h-full max-w-[88rem] mx-auto px-8 ">
        {/* Contact Form */}
        <div className="w-[500px] bg-[#f1f5f9] rounded-xl p-8">
          <form>
            <p className="text-black text-2xl font-semibold">Contact Us!</p>
            <p className="text-gray-500 text-base mb-6">
              We'd love to hear from you. Send us a message!
            </p>

            <div className="mb-6">
              <input
                placeholder="Full Name"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-[#9ca3af] text-lg placeholder:text-lg w-full"
              />

              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mb-6">
              <input
                placeholder="Email Address"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-[#9ca3af] text-lg placeholder:text-lg w-full"
              />

              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mb-6">
              <input
                placeholder="Mobile Number"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-[#9ca3af] text-lg placeholder:text-lg w-full"
              />

              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>
            
            <div className="mb-6">
              <input
                placeholder="Type Message"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-[#9ca3af] text-lg placeholder:text-lg w-full"
              />

              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>


            <div className=" mt-8">
       <Button className="bg-[#1e3a8a]/90 text-md font-bold">
        Send Message</Button> 
          </div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
