
import LogoOne from "../../assets/images/client-logo-one-sun-certifications.png";
import LogoTwo from "../../assets/images/client-logo-two-sun-certifications.png";
import LogoThree from "../../assets/images/client-logo-three-sun-certifications.png";
import LogoFour from "../../assets/images/client-logo-four-sun-certifications.png";
import LogoFive from "../../assets/images/client-logo-five-sun-certifications.png";
import LogoSix from "../../assets/images/client-logo-six-sun-certifications.png";
import { motion } from "motion/react";

const LogoTicker = () => {
  return (
    <div className="h-20 md:h-28 bg-[#B9DEEB]">
    <div className="max-w-[84rem] mx-auto h-full ">
      <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-14 pr-14 items-center justify-center flex-none"
        >
                  <img src={LogoOne} alt="Client Logo One - Sun Certifications India Partner"      />
        <img src={LogoThree} alt="Client Logo Three - Sun Certifications India Partner"  />
        <img src={LogoFour} alt="Client Logo Four - Sun Certifications India Partner"    />
        <img src={LogoFive} alt="Client Logo Five - Sun Certifications India Partner"    />

        <img src={LogoSix} alt="Client Logo Six - Sun Certifications India Partner"       />

        <img src={LogoOne} alt="Client Logo One - Sun Certifications India Partner"        />
        <img src={LogoTwo} alt="Client Logo Two - Sun Certifications India Partner"        />
        <img src={LogoThree} alt="Client Logo Three - Sun Certifications India Partner"     />
        <img src={LogoFour} alt="Client Logo Four - Sun Certifications India Partner"       />
        <img src={LogoFive} alt="Client Logo Five - Sun Certifications India Partner"      />
        <img src={LogoSix} alt="Client Logo Six - Sun Certifications India Partner"      />

        <img src={LogoOne} alt="Client Logo One - Sun Certifications India Partner" />
        <img src={LogoTwo} alt="Client Logo Two - Sun Certifications India Partner" />
        <img src={LogoThree} alt="Client Logo Three - Sun Certifications India Partner" />
        <img src={LogoFour} alt="Client Logo Four - Sun Certifications India Partner" />
        <img src={LogoFive} alt="Client Logo Five - Sun Certifications India Partner" />
        <img src={LogoSix} alt="Client Logo Six - Sun Certifications India Partner" />

        <img src={LogoOne} alt="Client Logo One - Sun Certifications India Partner"  className="hidden md:block"/>
        <img src={LogoTwo} alt="Client Logo Two - Sun Certifications India Partner" className="hidden md:block"/>
        <img src={LogoThree} alt="Client Logo Three - Sun Certifications India Partner" className="hidden md:block" />
        <img src={LogoFour} alt="Client Logo Four - Sun Certifications India Partner" className="hidden md:block" />
        <img src={LogoFive} alt="Client Logo Five - Sun Certifications India Partner" className="hidden md:block" />
        <img src={LogoSix} alt="Client Logo Six - Sun Certifications India Partner" className="hidden md:block" />
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default LogoTicker
