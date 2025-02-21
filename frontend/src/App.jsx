import Navbar from "./common/Navbar";
import HeroSection from "./components/manual/HeroSection";
import { HighlightText } from "./components/ui/HighlightText";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-[90%] mx-auto">
      <div className=" flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          What We Brings To The Table
        </h1>

        <HighlightText text="India's Best Certification Consultant" />

<div className="grid w-[90%] grid-cols-3 gap-4">

</div>
      </div>
      </div>
    </div>
  );
}

export default App;
