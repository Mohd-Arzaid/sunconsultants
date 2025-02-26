
import LogoOne from "../../assets/images/OneLogo.png";
import LogoTwo from "../../assets/images/TwoLogo.png";
import LogoThree from "../../assets/images/ThreeLogo.png";
import LogoFour from "../../assets/images/FourLogo.png";
import LogoFive from "../../assets/images/FiveLogo.png";
import LogoSix from "../../assets/images/SixLogo.png";
import { motion } from "motion/react";

const LogoTicker = () => {
  return (
    <div className="h-28 bg-[#B9DEEB]">
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
          <img src={LogoOne} alt="Logo One" />
          <img src={LogoThree} alt="Logo Three" />
          <img src={LogoFour} alt="Logo Four" />
          <img src={LogoFive} alt="Logo Five" />

          <img src={LogoSix} alt="Logo Six" />

          <img src={LogoOne} alt="Logo One" />
          <img src={LogoTwo} alt="Logo Two" />
          <img src={LogoThree} alt="Logo Three" />
          <img src={LogoFour} alt="Logo Four" />
          <img src={LogoFive} alt="Logo Five" />
          <img src={LogoSix} alt="Logo Six" />

          <img src={LogoOne} alt="Logo One" />
          <img src={LogoTwo} alt="Logo Two" />
          <img src={LogoThree} alt="Logo Three" />
          <img src={LogoFour} alt="Logo Four" />
          <img src={LogoFive} alt="Logo Five" />
          <img src={LogoSix} alt="Logo Six" />
                  
          <img src={LogoOne} alt="Logo One" />
          <img src={LogoTwo} alt="Logo Two" />
          <img src={LogoThree} alt="Logo Three" />
          <img src={LogoFour} alt="Logo Four" />
          <img src={LogoFive} alt="Logo Five" />
          <img src={LogoSix} alt="Logo Six" />
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default LogoTicker
