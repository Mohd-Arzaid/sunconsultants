import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const LatestNews = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      translateX: "-50%",
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <div className="h-28 bg-[#B9DEEB]">
      <div className="max-w-[84rem] mx-auto h-full ">
        <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            animate={controls}
            initial={{ translateX: "0%" }}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              controls.start({
                translateX: "-50%",
                transition: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              });
            }}
            className="flex gap-14 pr-14 items-center justify-center flex-none"
          >
            <span className="text-2xl font-medium">🔥 Breaking: Tesla unveils next-generation electric vehicle</span>
            <span className="text-2xl font-medium">📱 Apple announces iPhone 15 with revolutionary features</span>
            <span className="text-2xl font-medium">💰 S&P 500 reaches all-time high amid tech rally</span>
            <span className="text-2xl font-medium">🏢 Microsoft launches new AI-powered cloud services</span>
            <span className="text-2xl font-medium">🌍 Global climate summit announces major initiatives</span>

            <span className="text-2xl font-medium">🔥 Breaking: Tesla unveils next-generation electric vehicle</span>
            <span className="text-2xl font-medium">📱 Apple announces iPhone 15 with revolutionary features</span>
            <span className="text-2xl font-medium">💰 S&P 500 reaches all-time high amid tech rally</span>
            <span className="text-2xl font-medium">🏢 Microsoft launches new AI-powered cloud services</span>
            <span className="text-2xl font-medium">🌍 Global climate summit announces major initiatives</span>

            <span className="text-2xl font-medium">🔥 Breaking: Tesla unveils next-generation electric vehicle</span>
            <span className="text-2xl font-medium">📱 Apple announces iPhone 15 with revolutionary features</span>
            <span className="text-2xl font-medium">💰 S&P 500 reaches all-time high amid tech rally</span>
            <span className="text-2xl font-medium">🏢 Microsoft launches new AI-powered cloud services</span>
            <span className="text-2xl font-medium">🌍 Global climate summit announces major initiatives</span>

            <span className="text-2xl font-medium">🔥 Breaking: Tesla unveils next-generation electric vehicle</span>
            <span className="text-2xl font-medium">📱 Apple announces iPhone 15 with revolutionary features</span>
            <span className="text-2xl font-medium">💰 S&P 500 reaches all-time high amid tech rally</span>
            <span className="text-2xl font-medium">🏢 Microsoft launches new AI-powered cloud services</span>
            <span className="text-2xl font-medium">🌍 Global climate summit announces major initiatives</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
