import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";

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

  let interval;

  const words = ["Updates", "News"];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i = i === words.length - 1 ? 0 : i + 1;
      setCurrentWord(words[i]);
    }, 2000);
  };

  useEffect(() => {
    startAnimation();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 md:h-28  bg-[#B9DEEB]">
      <div className="max-w-[84rem] mx-auto h-full flex justify-between items-center px-4 md:px-0 ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[20px] md:text-[35px] font-bold font-roboto text-center">
            Latest{" "}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                damping: 8,
                stiffness: 100,
              }}
              key={currentWord}
              className="inline-block bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent"
            >
              {currentWord}
            </motion.div>
          </h2>
        </div>

        <div className="flex w-[50%] md:w-[82%]">
          <div className="flex overflow-hidden h-full [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
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
              className="flex gap-14 pr-14 items-center  justify-center flex-none"
            >
              {[...Array(4)].map((_, index) => (
                <>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🔥 Breaking: Tesla unveils next-generation electric vehicle
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      📱 Apple announces iPhone 15 with revolutionary features
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      💰 S&P 500 reaches all-time high amid tech rally
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🏢 Microsoft launches new AI-powered cloud services
                    </span>
                  </Link>
                  <Link to="/latest-notifications" className="no-underline">
                    <span className="font-roboto tracking-wide text-lg md:text-xl font-medium text-[#005069] hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                      🌍 Global climate summit announces major initiatives
                    </span>
                  </Link>
                </>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
