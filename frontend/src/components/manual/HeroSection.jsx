import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { FadeText } from "../ui/fade-text";
import { Separator } from "../ui/separator";
import WordPullUp from "../ui/word-pull-up";
import { Users2, Building, Award } from "lucide-react";
import { motion } from "framer-motion";
import { CoolMode } from "../magicui/cool-mode";

const HeroSection = () => {
  const stats = [
    { icon: Users2, label: "Satisfied Clients", value: "2M+" },
    { icon: Building, label: "Certifications", value: "150k+" },
    { icon: Award, label: "Success Rate", value: "95%" },
  ];

  return (
    <div className="bg-blue-900 w-full h-[90%]">
      <div className="flex items-center justify-between h-full max-w-[90%] mx-auto px-12">
        <div className="w-[550px] flex flex-col  gap-8">
          <CoolMode options={{
            color: "#ffffff",
            particleSize: 3,
            speed: 1,
            particleCount: 50
          }}>  
            <div>
              <WordPullUp
                words="Leading BIS Certification Consultants in India"
                className="text-5xl text-white font-bold text-left max-w-3xl break-words"
              />
            </div>
          </CoolMode>
        
          

          <div className="max-w-2xl">
            <FadeText
              text="Leading consultants for BIS, LMPC, EPR, and WPC certifications since 2013. We assist both Indian and foreign manufacturers in obtaining essential government certifications for the Indian market."
              className="text-base text-gray-300 font-normal text-left max-w-2xl"
            />
          </div>

          <div className=" flex flex-wrap  gap-7 mt-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10  backdrop-blur-sm rounded-lg px-5 py-3"
              >
                <stat.icon className="h-6 w-6 text-white" />
                <div>
                  <p className="font-bold text-2xl text-white">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[500px] bg-[#f1f5f9] rounded-xl p-8">
          <form>
            <p className="text-black text-2xl font-semibold">Contact Us!</p>
            <p className="text-gray-500 text-base mb-4">
              We'd love to hear from you. Send us a message!
            </p>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-gray-500 text-lg placeholder:text-lg w-full"
                required
              />
              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-gray-500 text-lg placeholder:text-lg w-full"
                required
              />
              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mb-6">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-gray-500 text-lg placeholder:text-lg w-full"
                required
              />
              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Type Message"
                rows="3"
                className="bg-transparent border-none focus:outline-none my-1 text-black placeholder:text-gray-500 text-lg placeholder:text-lg w-full resize-none"
                required
              />
              <Separator className="border-t-2 border-[#1e3a8a] w-full" />
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                className="bg-[#1e3a8a]/90 hover:bg-[#1e3a8a] text-md font-bold"
              >
                <Send />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
