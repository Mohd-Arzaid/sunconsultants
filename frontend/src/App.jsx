import Navbar from "./common/Navbar";
import HeroSection from "./components/manual/HeroSection";
import { HighlightText } from "./components/ui/HighlightText";
import {
  Code,
  Server,
  FolderCode,
  Database,
  Component,
  GitBranch,
} from "lucide-react";

function App() {
  const sections = [
    {
      title: "BIS Mark (ISI License) for Foreign Manufacturers",

      icon: Code,
      description:
        "BIS Certificate for foreign manufacturers under the FMCS scheme. This certification is mandatory for products on the mandatory list, and foreign manufacturers must appoint an Authorized Indian Representative. The process includes document submission, audits, and testing.",
    },
    {
      title: "CDSCO Registration Certificate",

      icon: Server,
      description:
        "CDSCO registration is essential for manufacturers of drugs, cosmetics, and medical devices in India. This online process, managed by the Central Drugs Standard Control Organisation, allows both Indian and foreign manufacturers to apply. With a focus on compliance, the registration typically takes just 1 day and requires the submission of key documents.",
    },
    {
      title: "BIS (CRS) Registration",

      icon: FolderCode,
      description:
        "Set up automated email sequences that engage customers at every stage of their journey, from welcome series to re-engagement campaigns.",
    },
    {
      title: "Plastic Waste Management",
      icon: Database,
      description:
        "Track campaign performance with detailed analytics. Monitor open rates, click-through rates, conversions, and ROI to optimize your strategies.",
    },
    {
      title: "EPR Certificate Consultant",

      icon: Component,
      description:
        "Ensure your emails reach the inbox with our advanced deliverability tools and best practices for maximum engagement and success.",
    },
    {
      title: "LMPC Certificate Consultants",

      icon: GitBranch,
      description:
        "Seamlessly connect your email marketing with your existing tools and platforms through our robust API and integration options.",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Navbar />
      <HeroSection />
      <div className="max-w-[90%] mx-auto ">
        <div className=" flex justify-center flex-col gap-8 items-center p-9">
          <h1 className="text-center text-4xl font-bold md:text-6xl">
            What We Brings To The Table
          </h1>

          <HighlightText text="India's Best Certification Consultant" />

          <div className="grid  grid-cols-3 gap-4 ">
            {sections.map((section, index) => {
              const IconComponent = section.icon;

              return (
                <div
                  key={index}
                  className="p-4 md:p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-orange-700 hover:bg-gray-100 duration-200"
                >
                  <IconComponent size={40} className="mb-4 md:mb-6" />
                  <h1 className="text-xl md:text-2xl font-bold">
                    {section.title}
                  </h1>
                  <p className="break-words text-sm md:text-base mt-2">
                    {section.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
