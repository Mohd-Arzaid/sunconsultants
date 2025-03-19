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
    <div id="faqs" className="my-2 bg-gray-50 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto p-12">
        <h2 className="text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[20px] font-geist">
          Can't find the answer you are looking for? <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">What services do you offer for CDSCO compliance?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                We offer comprehensive CDSCO regulatory compliance services including product registration, license applications, regulatory strategy, documentation preparation, and post-approval compliance monitoring for pharmaceuticals, medical devices, and cosmetics in India.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">How long does the CDSCO approval process typically take?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                CDSCO approval timelines vary based on product category and application type. Typically, drug approvals take 6-12 months, medical device registrations 3-6 months, and cosmetic registrations 2-4 months. Our consultants work to expedite these timelines through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">What documents are required for CDSCO registration?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing information, stability data, clinical trial results (if applicable), Good Manufacturing Practice (GMP) certificates, Certificate of Pharmaceutical Product (CoPP), and various application forms specific to your product category. Our team assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">Do you assist with clinical trial approvals in India?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for clinical trial applications in India, including protocol development, ethics committee submissions, CDSCO applications, site selection assistance, and regulatory compliance throughout the trial process. We also help navigate the New Drugs and Clinical Trials Rules, 2019.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">What are the costs associated with CDSCO registrations?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                CDSCO registration costs include official government fees (which vary by product type), testing fees, consultant fees, and potential inspection costs. We provide transparent quotations based on your specific product and requirements, with options for different service levels to fit various budgets.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">How do you handle post-approval regulatory requirements?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Our post-approval services include pharmacovigilance support, periodic safety update reports, variation applications, renewal submissions, compliance with labeling requirements, adverse event reporting, and ongoing regulatory intelligence to keep you informed of regulatory changes affecting your products.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">Can you help with import licenses for pharmaceuticals and medical devices?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we specialize in obtaining Import Licenses (Form 10) for drugs and Registration Certificates for medical devices. Our services include preparing all necessary documentation, coordinating with Indian authorized agents, liaising with CDSCO, and handling post-approval compliance requirements for imported products.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">What experience does your consulting team have with CDSCO regulations?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Our consulting team consists of regulatory experts with 10+ years of experience in Indian pharmaceutical regulations. Team members include former regulatory professionals, pharmacists, and industry specialists who maintain close relationships with regulatory authorities and stay updated on the latest regulatory developments.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">How do recent regulatory changes affect pharmaceutical registrations in India?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Recent regulatory changes include the New Drugs and Clinical Trials Rules (2019), Medical Device Rules (2017), and ongoing updates to the Drugs and Cosmetics Act. These changes have streamlined some processes while adding new requirements for safety monitoring and quality control. Our consultants keep abreast of all changes and adjust strategies accordingly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">Do you offer support for manufacturing facility inspections?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we provide comprehensive support for CDSCO manufacturing facility inspections, including pre-inspection readiness assessments, gap analysis, preparation of required documentation, mock inspections, training of personnel, and assistance during actual inspections to ensure a successful outcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
