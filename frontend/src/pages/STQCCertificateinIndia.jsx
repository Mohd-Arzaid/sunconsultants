import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const CANONICAL_URL =
  "https://bis-certifications.com/stqc-certificate-india";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const STQC_FAQS = [
  {
    question: "What is STQC certificate under MeitY?",
    answer:
      "The STQC Certificate under the Ministry of Electronics and Information Technology is an official quality certification issued by the Standardisation Testing and Quality Certification Directorate. It confirms that a product, system, or service—especially in electronics and IT—has been tested and meets required quality, safety, and security standards set by the government. This STQC certification is commonly used for software applications, hardware devices, cybersecurity systems, and e-governance projects. The STQC certificate is not just a document—it is legal compliance proof. It is important because it ensures that technology is reliable and secure for users. It is often mandatory for government-related digital projects and helps organizations prove their credibility. For companies, having this certificate increases trust among customers and improves their chances of working with government and large organizations, while also helping them meet both national and international quality standards. The STQC Certification Requirements differ depending on the product category.",
  },
  {
    question: "What Is Indian STQC Certificate and Why It Matters?",
    answer:
      "The Indian STQC, officially known as the Standardisation Testing and Quality Certification Directorate, is a government body under the Ministry of Electronics and Information Technology. It is responsible for testing, certifying, and ensuring the quality and security of electronic and IT products in India. STQC checks whether software, hardware, and digital systems meet required national and international standards. STQC Certificate matters because it helps ensure that technology used in India is safe, reliable, and secure. It protects users from risks like data breaches and system failures while building trust in digital services. For businesses, it improves credibility and is often required for government projects. A STQC Certified Product assures users of quality, reliability, and compliance. It also helps both Indian and foreign companies meet standards and compete effectively in the market, supporting a strong and secure digital ecosystem in the country.",
  },
  {
    question: "Is STQC certification or STQC license mandatory for import to India?",
    answer:
      "The Standardisation Testing and Quality Certification Directorate (STQC certification), under the Ministry of Electronics and Information Technology, is not generally mandatory for all imports into India. Unlike certifications such as BIS Certificate, STQC Certificate does not focus on regulating imports of products. Instead, it is mainly concerned with ensuring the quality, security, and performance of IT systems, especially those used in government and e-governance projects. STQC certification becomes important only in specific cases, such as when imported products or systems are intended for government use, public digital services, or cybersecurity-sensitive applications. A STQC certificate is required to clear customs and demonstrate compliance. Without STQC Approval, imported products may be rejected. The STQC audit process ensures that imported goods meet Indian safety and quality standards. It applies equally to both Indian and foreign companies, depending on how and where the product is used. In simple terms, STQC certification is not required just for importing a product, but it may be necessary if the product is used in regulated or high-security environments in India.",
  },
  {
    question: "Is STQC Certification required only for Imports?",
    answer:
      "No, STQC certification is not required only for imports. The Standardisation Testing and Quality Certification Directorate (STQC), under the Ministry of Electronics and Information Technology, applies to both domestic (Indian) and foreign products and systems. STQC certification is mainly required for e-Governance projects (government software, portals, digital services), IT systems and applications used in public services, and cybersecurity and data-sensitive systems.",
  },
  {
    question: "Role of Authorized Indian Representative (AIR) in STQC Certification.",
    answer:
      "The Authorized Indian Representative (AIR) acts as a local contact person between STQC and the foreign manufacturer, handles application submission and documentation in India, coordinates product testing, audits, and the certification process, ensures compliance with Indian standards and regulations, is responsible for communication, updates, and issue resolution, and may be legally accountable for compliance and post-certification matters.",
  },
  {
    question: "Post STQC Certification Surveillance and Compliance Requirements.",
    answer:
      "Organizations are also required to maintain consistent quality, keep proper records, and inform STQC about any changes in product design, software, or processes. They must address customer complaints and ensure timely renewal of certification before expiry. Failure to comply with these STQC requirements can lead to suspension or cancellation of the certificate, along with loss of credibility and restrictions in the market.",
  },
  {
    question: "Who needs STQC Certification?",
    answer:
      "Government project vendors working on e-Governance or public sector IT systems, software developers especially those building secure or large-scale applications, IT service providers offering digital platforms or system integration, cybersecurity product providers dealing with data protection and security tools, electronics and hardware manufacturers for specific regulated devices, and foreign manufacturers entering Indian government or regulated IT sectors. Any company (Indian or foreign) whose products or services are used in government, digital infrastructure, or require high security and quality standards may need STQC certification.",
  },
  {
    question: "How much does STQC Certification cost?",
    answer:
      "STQC Certification cost depends on factors like system complexity, testing scope, and audit requirements. Application fees typically range from ₹5,000 to ₹20,000, testing charges from ₹50,000 to ₹5,00,000+, STQC audit or inspection fees from ₹20,000 to ₹1,00,000, certification fees from ₹10,000 to ₹50,000, and renewal and surveillance fees from ₹10,000 to ₹1,00,000 periodically. Optional consultancy fees may range from ₹25,000 to ₹2,00,000. There is no fixed price, and costs vary based on project size, security testing needs, and number of audit cycles.",
  },
  {
    question: "What is the STQC Certification process?",
    answer:
      "The STQC Certification process includes application submission with product and company details, document review by STQC for completeness and eligibility, product testing and evaluation at STQC-approved labs including performance and security testing, on-site audit or inspection if required, compliance verification against Indian and international standards, certification grant upon successful evaluation, and periodic surveillance and renewal to maintain certification validity.",
  },
  {
    question: "What is STQC Approval meaning?",
    answer:
      "STQC Approval means that a product or system has been tested and validated by STQC authorities and meets required quality, security, and performance standards, making it eligible for government and regulated use. It serves as official confirmation that the technology is reliable, secure, and compliant with MeitY requirements.",
  },
];

const getStqcFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: STQC_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const STQCCertificateinIndia = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <STQCRatingSchema />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
      <FooterEng />
      <ScrollToTopButton />
    </div>
  );
};

export default STQCCertificateinIndia;

const MetaTags = () => {
  const title =
    "STQC Certificate in India: Process, Cost, Audit & Complete Guide";
  const description =
    "Complete details on STQC Certificate in India including STQC Certification process, cost, audit, requirements, and approval.";
  const keywords =
    "STQC Certificate, STQC Certification, STQC License, STQC Licence, STQC Audit, STQC Certification Cost, STQC Approval, STQC Certification Process, STQC Certification Requirements";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "STQC Certificate in India: Process, Cost, Audit & Complete Guide";
  const ogDescription = description;

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "STQC Certificate in India: Complete Information",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    headline: "STQC Certificate in India: Complete Information",
    description: description,
    image: "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
    author: {
      "@type": "Person",
      name: "Dhruv Aggarwal",
      url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
    },
    publisher: {
      "@type": "Organization",
      name: "Sun Certifications India",
      logo: {
        "@type": "ImageObject",
        url: "https://bis-certifications.com/company-logo/company-logo.webp",
      },
    },
    datePublished: "2025-09-15",
    dateModified: "2026-05-28",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={CANONICAL_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </Helmet>
  );
};

const FAQSchemaInjector = () => {
  const faqSchema = useMemo(() => getStqcFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "stqc-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("stqc-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const STQCRatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "STQC Certificate Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional STQC Certificate and STQC Certification assistance for IT and electronics manufacturers entering the Indian market.",
      brand: {
        "@type": "Brand",
        name: "Sun Certifications India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "58042",
        reviewCount: "58042",
      },
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "stqc-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("stqc-rating-schema");
      if (el) el.remove();
    };
  }, [ratingSchema]);

  return null;
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    STQC Certificate in India: Complete Information
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              STQC
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certificate
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            STQC Certificate under MeitY ensures IT and electronic products meet
            quality, safety, and security standards—essential for government
            projects and regulated digital systems in India.
          </p>

          <div className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/stqc-certificate-india"))
      return "STQC Certificate in India: Complete Information - English Page";
    return "STQC Certificate in India: Complete Information";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid full name.",
        description: "Name should only contain letters and spaces.",
      });
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
        description: "Check if your email format is correct",
      });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid phone number",
        description: "Phone number must be (8-15 digits)",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Contact form submitted successfully!",
        description:
          "Thank you for contacting us. Our team will get back to you soon.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something went wrong. Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact Us
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Book an Appointment
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Want to contact our team and schedule a call?
        <span className="text-black"> Try Now</span>
      </p>

      <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Full Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Contact Number *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Product Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          {loading ? (
            <div className="flex gap-3 items-center justify-center">
              <ClockLoader size={22} color="#fff" />
              <span>Sending</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Book Appointment</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "scope", "features", "process", "cost", "labs"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    scope: "Scope",
    features: "Features",
    process: "Process",
    cost: "Cost",
    labs: "Labs",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 text-left text-sm font-semibold font-geist tracking-wider uppercase transition-colors ${
                  item === activeSection
                    ? "text-blue-900 bg-blue-50"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                {MENU_ITEMS[item]}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <MainContentLeft />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainSectionHeading = ({ children }) => (
  <h2 className="service-left-content-heading-two mt-4 md:mt-6 mb-2 md:mb-3">
    {children}
  </h2>
);

const TopicHeading = ({ children }) => (
  <h2 className="service-left-content-heading-three mt-8 md:mt-10">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="service-left-content-heading-three mt-5 md:mt-6">
    {children}
  </h3>
);

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two mt-0 mb-2 md:mb-3">
            STQC Certificate in India: Complete Information
          </h1>

          <p className="service-left-content-paragraph">
            Standardisation Testing and Quality Certification Directorate (STQC)
            operates under the Ministry of Electronics and Information Technology
            (MeitY).
          </p>

          <p className="service-left-content-paragraph">
            STQC Certification Services took lead and became the first Third Party
            Certification Agency of Indian origin in India in 1991 to offer QMS
            certification. Since then STQC Certification Services has broaden its
            scope of certification and is now providing Certification Service in
            QMS Product Certification/ISMS/ITSM/Website quality / smart card /
            Biometric devices/eProcurement along with a host of other schemes for
            the benefit of the industry. It caters to the need of third party
            certification for the products in line with National and International
            standards and schemes.
          </p>
        </div>
        <div className="service-left-content-divider" />
        <OverviewSection />
        <div className="service-left-content-divider" />
        <ScopeSection />
        <div className="service-left-content-divider" />
        <FeaturesSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <LabsSection />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>What is Indian STQC Certificate?</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The STQC full form is Standardisation Testing and Quality Certification.
        Indian STQC is a certification system under the Ministry of Electronics and
        Information Technology, plays a crucial role in ensuring that electronic
        and IT products used in India are safe, reliable, and secure. It tests and
        certifies systems such as software, hardware, and e-governance platforms to
        make sure they meet required quality standards. This is important for
        protecting users from risks like data breaches, system failures, and
        fraud, especially as India is rapidly moving towards digital services.
      </p>

      <p className="service-left-content-paragraph">
        STQC Certificate is issued after a strict STQC Audit and testing procedure.
        It is also important for both Indian and foreign companies. For Indian
        businesses, its STQC certification builds trust and improves their
        competitiveness in national and international markets. For foreign
        companies, meeting STQC standards is often necessary to enter and operate
        in the Indian market, particularly in government projects. Overall, STQC
        Certification helps maintain quality, promotes fair competition, and
        ensures that technology used in India is dependable and secure.
      </p>

      <TopicHeading>Why is STQC certificate is Crucial?</TopicHeading>

      <p className="service-left-content-paragraph">
        The STQC certificate, issued by the Standardisation Testing and Quality
        Certification Directorate under the Ministry of Electronics and Information
        Technology, is crucial because it ensures that electronic and IT products
        meet high standards of quality, safety, and security. In today&apos;s
        digital world, where systems handle sensitive data and essential services,
        this STQC certification helps reduce risks such as data breaches, cyber
        threats, and system failures. It builds trust among users by assuring
        them that the technology they are using is reliable and properly tested.
      </p>

      <p className="service-left-content-paragraph">
        It is also very important for organizations and businesses, especially
        those involved in government or large-scale digital projects. The STQC
        certificate not only improves credibility but also helps companies meet
        regulatory STQC requirements and compete in both domestic and international
        markets.
      </p>

      <SubHeading>Key Importance:</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Ensures quality, safety, and security of IT and electronic products",
          "Protects users from data breaches and cyber risks",
          "Builds trust and reliability in digital systems",
          "Often mandatory for government projects",
          "Enhances credibility of companies",
          "Helps in market expansion (India & abroad)",
        ]}
      />

      <p className="service-left-content-paragraph">
        Overall, the STQC certificate plays a vital role in maintaining standards,
        protecting users, and supporting a secure digital ecosystem in India. It is
        often mandatory for government tenders, where STQC Approval is required.
      </p>
    </div>
  );
};

const ScopeSection = () => {
  return (
    <div id="scope" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Scope</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Scope of STQC Certificate?</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The scope of products covered under the Standardisation Testing and Quality
        Certification Directorate is quite broad, mainly focusing on electronics
        and information technology systems. It includes products and services that
        require quality, safety, and security assurance, especially those used in
        government and large-scale digital applications.
      </p>

      <SubHeading>STQC Certified Products:</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Software applications (websites, mobile apps, e-governance systems)",
          "Cybersecurity products (encryption tools, security systems)",
          "IT hardware (computers, servers, networking devices)",
          "Electronic devices (smart devices, embedded systems)",
          "E-Governance projects (Aadhaar-related systems, digital service)",
          "Biometric systems (fingerprint, iris devices)",
          "Quality management systems (process certification in organizations)",
        ]}
      />

      <p className="service-left-content-paragraph">
        Overall, STQC covers a wide range of products to ensure they meet STQC
        required standards of performance, security, and reliability.
      </p>

      <TopicHeading>
        Objectives or benefits of STQC Certification for Foreign Manufacturers under
        MeitY?
      </TopicHeading>

      <p className="service-left-content-paragraph">
        The STQC certification, provided by the Standardisation Testing and Quality
        Certification Directorate under the Ministry of Electronics and Information
        Technology, offers several important benefits for foreign manufacturers who
        want to enter or expand in the Indian market. It ensures that their products
        meet Indian standards for quality, safety, and security, making it easier to
        gain STQC approval and acceptance.
      </p>

      <PointsListWithoutHeading
        points={[
          "Provides easy access to the Indian market",
          "Ensures compliance with Indian regulations and standards",
          "Builds trust and credibility among Indian customers",
          "Required for participation in government and e-governance projects",
          "Enhances product quality and reliability",
          "Helps in fair competition with Indian companies",
          "Supports global recognition by aligning with international standards",
        ]}
      />

      <p className="service-left-content-paragraph">
        Overall, STQC certification helps foreign manufacturers operate smoothly in
        India while ensuring their products are safe, secure, and trusted. Although
        the STQC Certification Cost may be high initially, it provides long-term
        business benefits.
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div id="features" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Features</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>
        Key Features of STQC Certificate for Foreign Manufacturers
      </MainSectionHeading>

      <div className="mt-4 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Feature
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Standard Compliance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ensures products meet Indian and international quality standards
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Product Testing
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Involves detailed testing of software, hardware, and IT systems
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Security Assurance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Focuses on cybersecurity and data protection requirements
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Recognition in India
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Accepted and often required for government and regulated sectors
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Third-Party Certification
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Provides independent and unbiased verification
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Wide Coverage
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Covers IT products, electronics, and e-governance systems
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Market Acceptance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Builds trust and helps foreign products enter the Indian market easily
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph mt-4">
        These features make the Standardisation Testing and Quality Certification
        Directorate certification valuable for foreign manufacturers looking to
        operate in India.
      </p>

      <TopicHeading>
        Common documentation mistakes to avoid while applying for STQC certificate
      </TopicHeading>

      <p className="service-left-content-paragraph">
        When applying for an STQC certificate from the Standardisation Testing and
        Quality Certification Directorate under the Ministry of Electronics and
        Information Technology, many applicants face delays due to common
        documentation errors. Avoiding these mistakes can make the STQC
        Certification process much smoother and faster.
      </p>

      <PointsListWithoutHeading
        points={[
          "Incomplete Application Form → Missing details, signatures, or incorrect information",
          "Incorrect Product Details → Mismatch in model numbers, specifications, or features",
          "Outdated or Invalid Test Reports → Submitting expired or non-accredited lab reports",
          "Missing Security Documents → Not providing required cybersecurity or data protection details",
          "Improper Documentation Format → Submitting documents in wrong format or without proper labelling",
          "Lack of Authorization (AIR) → Foreign manufacturers not providing valid AIR authorization letter",
          "Inconsistent Information → Differences between documents (e.g., company name, product specs)",
          "Incomplete User Manuals → Missing installation, usage, or safety instructions",
          "No Supporting Certifications → Not attaching relevant ISO or previous certifications (if available)",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Process</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>
        Step-by-Step STQC Certification Process Under MeitY
      </MainSectionHeading>

      <SubHeading>1. Application Submission</SubHeading>
      <PointsListWithoutHeading
        points={[
          "The applicant submits a duly filled application form along with all required documents such as product details, company information, and certifications.",
        ]}
      />

      <SubHeading>2. Document Review</SubHeading>
      <PointsListWithoutHeading
        points={[
          "STQC reviews the submitted documents to check completeness, accuracy, and eligibility for certification.",
        ]}
      />

      <SubHeading>3. Product Testing &amp; Evaluation</SubHeading>
      <PointsListWithoutHeading
        points={[
          "The product/system is tested in STQC-approved labs",
          "Includes performance, functionality, and security testing",
          "For software, source code and cybersecurity checks may be done",
        ]}
      />

      <SubHeading>4. Audit / Inspection</SubHeading>
      <PointsListWithoutHeading
        points={[
          "STQC may conduct on-site audits of the manufacturing facility or development process to verify quality practices and compliance.",
        ]}
      />

      <SubHeading>5. Compliance Verification</SubHeading>
      <PointsListWithoutHeading
        points={[
          "All test results and STQC audit findings are evaluated to ensure the product meets required Indian and international standards.",
        ]}
      />

      <SubHeading>6. Certification Grant</SubHeading>
      <PointsListWithoutHeading
        points={[
          "If the product passes all checks, the STQC certificate is issued confirming compliance.",
        ]}
      />

      <SubHeading>7. Surveillance &amp; Renewal</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Periodic checks or audits may be conducted",
          "Certification may require renewal after a certain period",
        ]}
      />

      <p className="service-left-content-paragraph">
        The process ensures that products are thoroughly tested, verified, and
        monitored, making them safe, secure, and reliable for use in India. Which
        makes the product STQC certified product.
      </p>
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Cost</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>STQC Certification Cost Structure Explained</MainSectionHeading>

      <div className="mt-4 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STQC Cost Component
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Approximate Amount (INR)
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Application Fees
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹5,000 – ₹20,000
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Charges for submitting and processing the application
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Testing Charges
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹50,000 – ₹5,00,000+
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Depends on product type (software, hardware, cybersecurity testing)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                STQC Audit / Inspection Fees
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹20,000 – ₹1,00,000
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Cost of on-site audits or inspections (if required)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Consultancy Fees
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹25,000 – ₹2,00,000 (optional)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fees for hiring experts STQC Certificate Consultant to handle documentation and process
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                STQC Certification Fees
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹10,000 – ₹50,000
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Charges for issuing the final certificate
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Renewal &amp; Surveillance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹10,000 – ₹1,00,000 (periodic)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fees for renewal and follow-up audits
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <TopicHeading>Why Choose a STQC Certification Consultant?</TopicHeading>

      <p className="service-left-content-paragraph">
        Navigating the STQC Certification process can be complex, which is why many
        businesses hire STQC Consultants. Choosing experienced STQC Certification
        consultants can save time, reduce errors, and improve approval success
        rates.
      </p>

      <div className="mt-4 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Reason
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Expert Guidance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Provides in-depth knowledge of STQC rules and requirements
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Faster Process
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Helps speed up STQC certification by avoiding delays
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Documentation Support
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Assists in preparing accurate and complete documents
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Error Reduction
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Minimizes chances of rejection due to mistakes
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordination with Authorities
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Handles communication with Standardisation Testing and Quality Certification Directorate
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Technical Assistance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supports in testing, compliance, and technical requirements
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Time &amp; Cost Saving
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Reduces overall effort and unnecessary expenses
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Better Approval Chances
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Increases success rate of STQC certification
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph mt-4">
        These benefits make consultants valuable for companies applying under the
        Ministry of Electronics and Information Technology for STQC certification.
      </p>
    </div>
  );
};

const LabsSection = () => {
  const labs = [
    {
      sno: "1.",
      name: "M/s. Precise Testing Solution Pvt. Ltd.",
      location:
        "E-81, Second Floor, Sector 63, Noida (U.P.) www.precisetestingsolution.com",
      certNo: "STQC-SAB-SETL-3",
      validUpto: "10/12/2027",
      certificate: "Certificate",
    },
    {
      sno: "2.",
      name: "M/s. AQM Technologies Pvt. Ltd.",
      location:
        "4th Floor, A Wing, 401 Raheja Plaza, LBS Road, Ghatkopar(W), Mumbai – 400086 www.aqmtechnologies.com",
      certNo: "STQC-SAB-SETL-10",
      validUpto: "19/10/2026",
      certificate: "Certificate",
    },
    {
      sno: "3.",
      name: "M/s. AKS Information Technology Services Pvt. Ltd.",
      location:
        "B - 21, Sector 59, Noida – 201309 (UP) https://www.aksitservices.co.in/",
      certNo: "STQC-SAB-SETL-9",
      validUpto: "05/09/2026",
      certificate: "Certificate",
    },
    {
      sno: "4.",
      name: "M/s. Information Technology Quality Certification and Research (ITQCR)",
      location:
        "C-202, Infotech Park, Tower No-8 CBD Belapur, Navi Mumbai – 400614 (Maharastra), India www.itqcr.com",
      certNo: "STQC-SAB-SETL-1",
      validUpto: "11/09/2027",
      certificate: "Certificate",
    },
    {
      sno: "5.",
      name: "M/s. Quality Kiosk Technologies Pvt. Ltd.",
      location:
        "419 A, Rupa Solitaire, Sector 1, Millenium Business Park, Mahape, Navi Mumbai – 4000710, India https://qualitykiosk.com/",
      certNo: "STQC-SAB-SETL-4",
      validUpto: "19/12/2027",
      certificate: "Certificate",
    },
    {
      sno: "6.",
      name: "M/s. Suma Soft Pvt. Ltd.",
      location:
        "Suma Centre, 2nd Floor, Opp. Himali Society, near Mangeshkar Hospital, Erandwane, Pune 411004 https://www.sumasoft.com/",
      certNo: "STQC-SAB-SETL-7",
      validUpto: "25/12/2025",
      certificate: "Certificate",
    },
    {
      sno: "7.",
      name: "M/s Innovador Infotech Pvt. Ltd.",
      location:
        "Ahmamau, Amar Shaheed Path, Arjunganj, Lucknow, Uttar Pradesh, 226002 www.innovadorinfotech.com",
      certNo: "STQC-SAB-SETL-8",
      validUpto: "12/04/2026",
      certificate: "Certificate",
    },
    {
      sno: "8.",
      name: "M/s Maverick Quality Advisory Services Private Limited",
      location:
        "123 Radhey Shyam Park, PO Sahibabad, District Ghaziabad, 201005, Uttar Pradesh, India www.mqasglobal.com",
      certNo: "STQC-SAB-SETL-11",
      validUpto: "28/07/2027",
      certificate: "Certificate",
    },
    {
      sno: "9.",
      name: "M/s. Redinent Innovations Private Ltd.",
      location:
        "18, Novel MSR Park, Sy. No. 93/9, K. No. 731-2389, Varthur Main Road, Munnekolalu, Marathahalli, Bengaluru, Karnataka-560037 www.redinent.com",
      certNo: "STQC-SAB-SETL-12",
      validUpto: "05/08/2027",
      certificate: "Certificate",
    },
    {
      sno: "10.",
      name: "M/s. Levithan Technologies Private Limited",
      location:
        "Shop No.374A, Bhoor Colony, Old Faridabad, Haryana, 121002 https://levithan.tech/",
      certNo: "STQC-SAB-SETL-13",
      validUpto: "05/08/2027",
      certificate: "Certificate",
    },
    {
      sno: "11.",
      name: "M/s. CyberSRC Consultancy Pvt. Ltd.",
      location:
        "Unit 605, 6th Floor, World Trade Tower, Sector 16, Noida-201301 https://cybersrcc.com/",
      certNo: "STQC-SAB-SETL-14",
      validUpto: "18-08-2028",
      certificate: "Certificate",
    },
    {
      sno: "12.",
      name: "M/s. ITOrizin Technology Solution Private Limited",
      location:
        "8/14, Sahid Nagar, Ground Floor, P.O.- Haltu, PS- Garfa, Kolkata- 700078, West Bengal. https://www.itorizin.com/",
      certNo: "STQC-SAB-SETL-15",
      validUpto: "23-11-2028",
      certificate: "Certificate",
    },
    {
      sno: "13.",
      name: "M/s Terasoft Technologies Pvt. Ltd.",
      location:
        "Shivanand Vedantnagar Savedi Road, Ahmed Nagar, Maharastra 414003",
      certNo: "STQC-SAB-SETL-6",
      validUpto: "04-08-2025",
      certificate: "",
    },
  ];

  return (
    <div id="labs" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Labs</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>STQC Approved Test Labs</MainSectionHeading>

      <div className="mt-4 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                S no.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Name of SETL
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Location of SETL
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Certificate No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Certificate Valid upto
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 md:py-4 text-[#1E1E1E]">
                Certificate
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {labs.map((lab) => (
              <TableRow key={lab.certNo} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {lab.sno}
                </TableCell>
                <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {lab.name}
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {lab.location}
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {lab.certNo}
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {lab.validUpto}
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 md:py-4 text-[#42434d]">
                  {lab.certificate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <SubHeading>Major Locations in India:</SubHeading>
      <PointsListWithoutHeading
        points={["New Delhi", "Bengaluru", "Hyderabad", "Kolkata", "Chennai"]}
      />

      <SubHeading>Important Points:</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Only STQC-approved labs are accepted for certification",
          "In some cases, recognized third-party labs may be accepted (if approved by STQC)",
          "Testing type depends on product (software, hardware, cybersecurity, etc.)",
        ]}
      />

      <TopicHeading>Conclusion</TopicHeading>

      <p className="service-left-content-paragraph">
        The STQC Certificate is a critical compliance requirement for organizations
        operating in India&apos;s digital and IT ecosystem. From ensuring
        cybersecurity to enabling participation in government projects, STQC
        Certification plays a vital role in establishing trust and credibility.
      </p>

      <p className="service-left-content-paragraph">
        While the process may seem complex, understanding the STQC Certification
        process, preparing for the STQC Audit, and leveraging expert STQC
        consultants can make the journey smooth and efficient.
      </p>

      <p className="service-left-content-paragraph">
        If your business aims to scale in regulated sectors, investing in an STQC
        License or STQC Certificate is not just a compliance step—it&apos;s a
        strategic decision for long-term growth and success.
      </p>
    </div>
  );
};

const PointsListWithoutHeading = ({ points }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceFaq = () => {
  return (
    <section
      id="faq"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {STQC_FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Our Services
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS Logo"
                title="BISCRS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC Logo"
                title="LMPC Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI Mark Certification
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
