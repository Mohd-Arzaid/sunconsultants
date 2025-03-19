// import { ScrollArea } from "../ui/scroll-area";
import CDSCOContentLeft from "./CDSCOContentLeft";
import CDSCOContentRight from "./CDSCOContentRight";

const CDSCOContent = () => {
  return (


    <div
      className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto p-12">
        <div className="flex gap-[48px] w-full">
          {/* Left Side */}
          {/* <ScrollArea className="h-[calc(100vh-200px)] pr-4"> */}
          <CDSCOContentLeft />
          {/* </ScrollArea> */}
          {/* Right Side */}
          <CDSCOContentRight />



        </div>

        <ServiceFaq />
      </div>
    </div>
  );
};


export default CDSCOContent;

const ServiceFaq = () => {
  return (
    <div className="mt-10">

    </div>
  );
};
