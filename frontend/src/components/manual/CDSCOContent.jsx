// import { ScrollArea } from "../ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import CDSCOContentLeft from "./CDSCOContentLeft";
import CDSCOContentRight from "./CDSCOContentRight";

const CDSCOContent = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto p-12">
        <div className="flex gap-[48px] w-full">
          {/* Left Side */}
          {/* <ScrollArea className="h-[calc(100vh-200px)] pr-4"> */}
          <CDSCOContentLeft />
          {/* </ScrollArea> */}
          {/* Right Side */}
          <CDSCOContentRight />
        </div>

      </div>
      <ServiceFaq />
    </div>
  );
};

export default CDSCOContent;

const ServiceFaq = () => {
  return (
    <div className="mt-2 h-96 bg-gray-50">
      <div className="max-w-[88rem] mx-auto p-12">


        <h2 className="text-[48px] text-center font-geist font-semibold  text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[20px] font-geist">
          Can't find the answer you are looking for? <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>


        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </div>
  );
};
