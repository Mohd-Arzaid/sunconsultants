import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";

import PWMRimg from "../../assets/images/PWMRimg.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check } from "lucide-react";
import Footer from "@/common/Footer";

export const PlasticWaste = () => {
  return (
    <>
      <PWMRHero />
      <PWMRIndex />
      <PWMRContent />
      <Footer/>
    </>
  );
};

const PWMRHero = () => {
  return (
    <main className="relative pt-[104px] pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[90px] flex items-center justify-center h-full w-full mx-auto">
        {/* Left Side */}

        <div className="relative flex flex-col gap-8 w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[70px] z-[10] font-playfair font-bold text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Plastic Waste
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certification and Compliance
          </h1>

          <p className="font-poppins text-[20px] z-[10] leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Required for plastic producers, recyclers & raw material
            manufacturers to ensure eco-friendly disposal. Valid for 5 years,
            processed in 6-8 weeks.
          </p>

          <div className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="z-20 w-[580px] h-[435px] flex flex-col">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              Contact Us
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>

          <h3 className="text-[48px] font-inter font-bold text-[#1E1E1E]">
            Make an Appointment
          </h3>

          <p className="font-medium font-poppins text-[20px] text-[#996C6C]">
            Want to contact our team and book a call?
            <span className="text-black"> Try it now</span>
          </p>

          <div className="flex flex-col mt-5 gap-5">
            <div className="flex items-center justify-between gap-5">
              <Input
                placeholder="Full Name"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Email Address"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <div className="flex items-center justify-between gap-5">
              <Input
                placeholder="Contact Number"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Company Name"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <div className="flex items-center justify-between gap-5">
              <Input
                placeholder="Product Name"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Type Message"
                className="focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <Button className="mt-1 w-[218px] h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const PWMRIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  const handleItemClick = (item) => {
    const elementId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting and its position relative to viewport
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1; // Added small buffer
        setIsSticky(
          !entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1)
        );
      },
      {
        threshold: [0, 1], // Observe both when fully visible and when starting to intersect
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      <div className="flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {[
          "Overview",
          "Eligibility",
          "Compliance",
          "Process",
          "Documents",
          "consultancy",
          "FAQs",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className={`relative cursor-pointer group ${
              item === "Overview"
                ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900"
                : ""
            }`}
          >
            <div
              className={`text-base font-semibold font-geist  tracking-wider uppercase transition-colors duration-300 ${
                item === "Overview"
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            {item !== "Overview" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PWMRContent = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto p-12">
        <div className="flex gap-[48px] w-full">
          {/* Left Side */}

          <PWMRContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
    </div>
  );
};

const ServiceFaq = () => {
  return (
    <div id="faqs" className="my-2 bg-gray-50 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto p-12">
        <h2 className="text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                What services do you offer for CDSCO compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                We offer comprehensive CDSCO regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for pharmaceuticals, medical devices, and
                cosmetics in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                How long does the CDSCO approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                CDSCO approval timelines vary based on product category and
                application type. Typically, drug approvals take 6-12 months,
                medical device registrations 3-6 months, and cosmetic
                registrations 2-4 months. Our consultants work to expedite these
                timelines through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                What documents are required for CDSCO registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, stability data, clinical trial results (if
                applicable), Good Manufacturing Practice (GMP) certificates,
                Certificate of Pharmaceutical Product (CoPP), and various
                application forms specific to your product category. Our team
                assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                Do you assist with clinical trial approvals in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for clinical trial
                applications in India, including protocol development, ethics
                committee submissions, CDSCO applications, site selection
                assistance, and regulatory compliance throughout the trial
                process. We also help navigate the New Drugs and Clinical Trials
                Rules, 2019.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                What are the costs associated with CDSCO registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                CDSCO registration costs include official government fees (which
                vary by product type), testing fees, consultant fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements, with options
                for different service levels to fit various budgets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                How do you handle post-approval regulatory requirements?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Our post-approval services include pharmacovigilance support,
                periodic safety update reports, variation applications, renewal
                submissions, compliance with labeling requirements, adverse
                event reporting, and ongoing regulatory intelligence to keep you
                informed of regulatory changes affecting your products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                Can you help with import licenses for pharmaceuticals and
                medical devices?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we specialize in obtaining Import Licenses (Form 10) for
                drugs and Registration Certificates for medical devices. Our
                services include preparing all necessary documentation,
                coordinating with Indian authorized agents, liaising with CDSCO,
                and handling post-approval compliance requirements for imported
                products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                What experience does your consulting team have with CDSCO
                regulations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Our consulting team consists of regulatory experts with 10+
                years of experience in Indian pharmaceutical regulations. Team
                members include former regulatory professionals, pharmacists,
                and industry specialists who maintain close relationships with
                regulatory authorities and stay updated on the latest regulatory
                developments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                How do recent regulatory changes affect pharmaceutical
                registrations in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Recent regulatory changes include the New Drugs and Clinical
                Trials Rules (2019), Medical Device Rules (2017), and ongoing
                updates to the Drugs and Cosmetics Act. These changes have
                streamlined some processes while adding new requirements for
                safety monitoring and quality control. Our consultants keep
                abreast of all changes and adjust strategies accordingly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[18px] text-[#3f3f46] font-medium">
                Do you offer support for manufacturing facility inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] text-[#5e5f6e]">
                Yes, we provide comprehensive support for CDSCO manufacturing
                facility inspections, including pre-inspection readiness
                assessments, gap analysis, preparation of required
                documentation, mock inspections, training of personnel, and
                assistance during actual inspections to ensure a successful
                outcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-[768px] mt-14  mx-auto">
          <h3 className="text-center font-geist text-[48px]  text-[#181818] leading-[48px] font-semibold  ">
            Have questions, feedback or anything to say?
          </h3>

          <div className="text-center mt-[16px] text-[20px] leading-[28px] font-geist text-[#52525b]">
            Email us at{" "}
            <span className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4">
              info@sunconsultants.co.in
            </span>{" "}
            or use one of the options below. We usually get back within a day or
            two.
          </div>

          <div className="flex items-center my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              or
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-x-6">
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="mailto:info@sunconsultants.co.in"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <span className="sr-only">Email</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://www.github.com/sunconsultants"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://x.com/sunconsultants"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
                    className=""
                  ></path>
                </svg>
                <span className="sr-only">Twitter / X</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://www.linkedin.com/company/sunconsultants"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-[441px]">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[24px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col ">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[20px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PWMRContentLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-col gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <EligibilitySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ComplianceSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultingSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Plastic Waste Management & Recycling
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        Promotes eco-friendly disposal, reduces pollution & boosts recycling.
      </p>

      {/* Nomination Content */}

      <div className="mt-[24px]   font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        The initiative aims to establish environment-friendly plastic waste
        disposal solutions. In the process it seeks to ban the use of plastic
        bags and plastic products, and reduce plastic littering across the
        state. It has been observed that disposal of plastic waste is a serious
        concern due to improper collection and segregation system. Only 60% of
        the plastic produced is recycled, balance 9400 Tones of plastic is left
        unattended in environment causing land, air and water pollution
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Plastic License Eligibility
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        Required for manufacturers; foreign applicants need an Indian
        representative.
      </p>

      {/* Nomination Content */}

      <div className="mt-[24px]   font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        All manufacturers, either of Indian or foreign origin can apply for the
        Plastic licence.In case of foreign manufacturer license will be granted
        to the manufacturer and the Indian counterpart of the manufacturer will
        act as it’s Indian Representative. The Indian representative of the
        manufacturer must have a valid state drugs license under Form 20-B/21-B
        or Form 42 ( applied under Form 41 ) as per the latest guidelines
        released by CDSCO.
      </div>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section id="compliance" className="flex flex-col scroll-mt-20">
      {/* Compliance*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Compliance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Businesses That Need Plastic Waste Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        Required for recyclers, producers & raw material manufacturers.
      </p>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsList
          points={[
            "Units engaged in processing or recycling of plastic waste",
            "Producers or brand owners of plastic products",
            "Manufacturers of plastic raw materials",
          ]}
          heading="Consumer Electrical & Electronics"
        />

        <img
          src={PWMRimg}
          alt="Medical laboratory equipment"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
          ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
          hover:ring-gray-900/12.5 w-[400px] h-[250px] mt-2.5
          "
        />
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Plastic Waste Management Rules 2016
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        Regulates plastic collection, EPR, reuse, and awareness to reduce
        environmental impact.
      </p>

      {/* Nomination Content */}

      <div className="mt-[24px]   font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        The Plastic Waste Management Rules, 2016 make an arrangement to reduce
        the negative impact on the environment-related to plastic waste, if we
        talk about these days scenario plastic is a vital material and almost
        impossible to ban. Under the PWM rules, authorities such Urban Local
        Bodies should provide separate collection, storage, and processing of
        plastic waste in respected areas.
      </div>

      {/* Important Points And Image */}
      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Plastic waste has spread to rural areas, expanding its applicability beyond municipal regions.",
            "Establishes producer and generator responsibility for plastic waste under Extended Producer Responsibility (EPR).",
            "Promotes plastic waste usage in road construction, energy recovery, and waste-to-oil as per Indian Road Congress guidelines.",
            "Monitors and facilitates the use of plastic carry bags above 50 microns.",
            "Encourages awareness in civil society to reduce plastic usage.",
          ]}
          heading="Key Provisions of Plastic Waste Management Rules "
        />
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Process for EPR license and post compliances :
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        EPR registration involves CPCB application, certification, recycling,
        and yearly renewal.
      </p>

      {/* Nomination Content */}

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Authorization Letter (except Proprietorship)",
            "Layout Plan",
            "Agreement with Authorized Recycler",
            "Rent Agreement/Proof of Location",
            "PAN Card and Aadhaar Card of Authorized Person",
            "Consent to Operate (CTO) from State Pollution Control Authority",
            "Cost of Project",
          ]}
          heading="Required Documents for Plastic Waste Certification "
        />
      </div>

      <div className="mt-[46px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 ">
          Timeline
        </span>
        Approx 6-8 weeks after submission of application.
      </div>
      <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 ">
          Validity
        </span>
        It is granted for 5 years initially and has to be renewed after that by
        paying the government fees.
      </div>
    </section>
  );
};

const ConsultingSection = () => {
  return (
    <section id="consultancy" className="flex flex-col scroll-mt-20">
      {/* Consultancy */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase  font-semibold font-geist text-[20px] text-gray-700">
          Consultancy
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[40px] font-roboto font-bold text-[#131316]">
        Sun Consultants: Plastic Waste License Experts
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        We make Plastic Waste Management registration easy and compliant.
      </p>

      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        As Plastic Waste Management registration consultants, our job is to
        ensure that the tiring procedures that we have listed above become a
        cake-walk for you. Right from the beginning, i.e. from the stage of
        collection of documents from the foreign manufacturers or preparation of
        documents for the Indian manufacturer and following up with the
        department for grant of license is under our scope. Additionally, we
        provide expert guidance throughout the process, ensuring compliance with
        all regulations, addressing any concerns, and facilitating smooth
        communication with the concerned authorities.
      </div>
    </section>
  );
};