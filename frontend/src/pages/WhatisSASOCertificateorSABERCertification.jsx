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
  "https://bis-certifications.com/saso-saber-certification";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const SASO_FAQS = [
  {
    question: "What is a SASO Certificate and why is it required?",
    answer:
      "A Saudi Standards, Metrology and Quality Organization (SASO) Certificate is a mandatory document required for exporting regulated products to Saudi Arabia. It confirms that the product complies with Saudi safety, quality, and technical regulations. Without this certification, products cannot clear customs in Saudi Arabia. The certificate ensures consumer safety, environmental protection, and adherence to international standards. It also helps prevent counterfeit or substandard goods from entering the Saudi market, making it essential for legal and smooth trade operations.",
  },
  {
    question: "What is SABER Certification in Saudi Arabia?",
    answer:
      "SABER Certification is an online conformity assessment system introduced under the SALEEM program. It is used to register products and obtain compliance certificates before exporting goods to Saudi Arabia. SABER is not a certification itself but a digital platform that facilitates issuing Product Certificate of Conformity (PCoC) and Shipment Certificate of Conformity (SCoC). It simplifies and digitizes the entire SASO certification process, ensuring faster approvals, transparency, and efficient customs clearance for imported products.",
  },
  {
    question: "What is the difference between SASO and SABER?",
    answer:
      "SASO refers to the regulatory authority that sets standards and technical regulations in Saudi Arabia, while SABER is the online system used to implement those regulations. In simple terms, SASO creates the rules, and SABER is the platform where businesses register products and obtain certification. Exporters must comply with SASO standards through the SABER system to get approval. Both are interconnected and essential for product compliance and legal entry into the Saudi Arabian market.",
  },
  {
    question: "What is the SALEEM Program in Saudi Arabia?",
    answer:
      "SALEEM is the Saudi Product Safety Program designed to ensure that all products entering the Saudi market are safe and compliant. The word \"SALEEM\" means \"safe\" or \"risk-free.\" This program is managed by SASO and implemented through the SABER platform. It focuses on improving product quality, protecting consumers, and eliminating unsafe goods. Under SALEEM, every product must go through a structured certification process before it is allowed to be imported or sold in Saudi Arabia.",
  },
  {
    question: "What are PCoC and SCoC in SABER Certification?",
    answer:
      "PCoC (Product Certificate of Conformity) is issued for a specific product and confirms that it complies with Saudi standards. It is generally valid for one year. SCoC (Shipment Certificate of Conformity) is issued for each shipment and ensures that the goods being shipped match the approved product. Both certificates are mandatory under the SABER system. Without these certificates, shipments may be delayed, rejected, or denied entry at Saudi customs.",
  },
  {
    question: "Who is responsible for SABER registration?",
    answer:
      "The Saudi importer is responsible for registering products on the SABER platform. They must have a valid Commercial Registration (CR) to initiate the process. However, exporters play a critical supporting role by providing technical documents, test reports, and product details. Without proper coordination between the importer and exporter, the certification process may face delays or rejection. Therefore, both parties must work together to ensure compliance with SASO regulations.",
  },
  {
    question: "What documents are required for SABER Certification?",
    answer:
      "To obtain SABER Certification, several documents are required, including a commercial invoice, packing list, bill of lading, product test reports, product images, and declaration of conformity. These documents help certification bodies evaluate whether the product meets Saudi standards. Accurate and complete documentation is crucial, as any errors or missing information can result in delays or rejection. Proper documentation also ensures smooth processing and faster approval through the SABER system.",
  },
  {
    question: "How long does the SABER certification process take?",
    answer:
      "The timeline for SABER certification depends on product type, documentation accuracy, and testing requirements. Generally, obtaining a Product Certificate (PCoC) can take a few days to a few weeks. Once the product is approved, generating a Shipment Certificate (SCoC) for each shipment is usually quicker and can be done within 1–3 days. Delays may occur if additional testing or corrections are required, so proper preparation is essential to speed up the process.",
  },
  {
    question: "What is the cost of SASO SABER Certification?",
    answer:
      "The cost of SASO SABER Certification varies depending on product complexity, testing requirements, and certification body fees. Typically, the Product Certificate (PCoC) may cost between ₹50,000 to ₹2,00,000, while the Shipment Certificate (SCoC) ranges from ₹10,000 to ₹50,000 per shipment. Additional costs may include testing fees, documentation charges, and SABER platform fees. Businesses should plan their budget accordingly and work with experienced consultants to optimize costs.",
  },
  {
    question: "What products require SASO SABER Certification?",
    answer:
      "Most regulated products exported to Saudi Arabia require SASO SABER Certification. These include electrical products, construction materials, automotive components, and consumer goods. Products are classified as regulated or non-regulated based on SASO technical regulations. Regulated products require certification, while non-regulated products may only need self-declaration. It is important to verify product classification before exporting to avoid compliance issues and shipment delays.",
  },
  {
    question: "What are the benefits of SABER Certification for businesses?",
    answer:
      "SABER Certification offers multiple benefits for businesses, including easy access to the Saudi market, improved brand credibility, and compliance with international standards. It reduces shipment delays, ensures smooth customs clearance, and enhances customer trust. Companies with certified products gain a competitive advantage and can expand their market presence in Saudi Arabia. It also helps avoid penalties, product rejection, and legal issues during import processes.",
  },
  {
    question: "What challenges do companies face during SASO certification?",
    answer:
      "Companies often face challenges such as complex documentation, high certification costs, and evolving regulatory requirements. Technical compliance issues and delays in testing can also impact timelines. Additionally, lack of awareness about SABER procedures can lead to mistakes in product registration. To overcome these challenges, businesses should work with experienced consultants, maintain accurate documentation, and stay updated with the latest SASO regulations.",
  },
  {
    question: "Can exporters directly apply for SABER Certification?",
    answer:
      "No, exporters cannot directly apply for SABER Certification. The Saudi importer must register the product on the SABER platform. However, exporters are responsible for providing all required technical documents, test reports, and product specifications. Their role is crucial in ensuring compliance with SASO standards. Proper coordination between importer and exporter is essential for successful certification and timely shipment clearance.",
  },
  {
    question: "What happens if a product does not have SABER Certification?",
    answer:
      "If a product does not have SABER Certification, it will not be allowed to enter Saudi Arabia. The shipment may be held at customs, rejected, or returned to the origin country. In some cases, penalties may also be imposed. Lack of certification can lead to financial losses, delays, and damage to business reputation. Therefore, obtaining proper certification before shipment is mandatory for smooth trade operations.",
  },
  {
    question: "How can companies ensure successful SABER Certification?",
    answer:
      "Companies can ensure successful SABER Certification by preparing accurate documentation, conducting pre-testing of products, and working with approved certification bodies. Staying updated with SASO regulations and using experienced consultants can significantly reduce errors and delays. Proper planning and coordination with the Saudi importer are also essential. Following best practices helps streamline the process, reduce costs, and ensure faster approvals.",
  },
];

const getSasoFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: SASO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const WhatisSASOCertificateorSABERCertification = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <SASORatingSchema />
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

export default WhatisSASOCertificateorSABERCertification;

const MetaTags = () => {
  const title =
    "SASO Certificate or SABER Certification in Saudi Arabia – Process, Cost & Requirements";
  const description =
    "Learn everything about SASO Certificate or SABER Certification in Saudi Arabia, including process, cost, documents, PCoC, SCoC, and requirements for exporters. Ensure compliance and smooth customs clearance with this complete guide.";
  const keywords =
    "SASO Certificate, SASO Certification Saudi Arabia, SABER Certificate Saudi Arabia, SALEEM Program, SASO registration, SABER process, SASO approval";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "SASO Certificate or SABER Certification in Saudi Arabia – Process, Cost & Requirements";
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
        name: "What is SASO Certificate or SABER Certification",
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
    headline: "What is SASO Certificate or SABER Certification",
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
  const faqSchema = useMemo(() => getSasoFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "saso-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("saso-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const SASORatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "SASO SABER Certification Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional SASO Certificate and SABER Certification assistance for exporters shipping regulated products to Saudi Arabia.",
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
    script.id = "saso-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("saso-rating-schema");
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
                    What is SASO Certificate or SABER Certification
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
              SASO
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            SABER
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            SASO Certificate and SABER Certification are mandatory for exporting
            regulated goods to Saudi Arabia—ensuring compliance, quality, and smooth
            customs clearance through the SALEEM program.
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
    if (path.includes("/saso-saber-certification"))
      return "What is SASO Certificate or SABER Certification - English Page";
    return "What is SASO Certificate or SABER Certification";
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
    () => ["overview", "process", "certificates", "cost", "guidance"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    process: "Process",
    certificates: "Certificates",
    cost: "Cost",
    guidance: "Guidance",
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
            What is SASO Certificate or SABER Certification
          </h1>

          <p className="service-left-content-paragraph">
            A SASO certificate (Saudi Standards, Metrology and Quality
            Organization) is a mandatory compliance document required for
            exporting regulated goods to Saudi Arabia. It verifies that products
            meet safety and quality standards via the SABER online platform,
            ensuring smooth customs clearance. SASO Certificate is also known as
            SABER Certificate.
          </p>

          <p className="service-left-content-paragraph">
            SASO certification is a formal process that verifies whether a product
            complies with Saudi standards. It involves testing, inspection, and
            documentation review.
          </p>

          <p className="service-left-content-paragraph">
            From a company&apos;s perspective, SABER Certificate is not just a
            regulatory requirement but also a quality assurance mechanism. It
            ensures that products meet international safety standards and are
            suitable for the Saudi market.
          </p>
        </div>
        <div className="service-left-content-divider" />
        <OverviewSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CertificatesSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <GuidanceSection />
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

      <MainSectionHeading>What is SALEEM Program?</MainSectionHeading>

      <p className="service-left-content-paragraph">
        &ldquo;SALEEM&rdquo; is the name of the Saudi Arabian Product Safety
        Program, administered by the Saudi Standards, Metrology, and Quality
        Organization (SASO). The SALEEM Saudi Arabia program focuses on ensuring
        the quality of products sold in Saudi Arabia, hence the name. The Arabic
        word SALEEM means &ldquo;without risk&rdquo; or &ldquo;without
        danger&rdquo; to the user, the community, or the environment. SABER Saudi
        Arabia is an online system used by SALEEM to ensure that all products and
        shipments comply with the program&apos;s standards. As a platform, SABER
        facilitates the electronic acquisition of the Certificate of Conformity
        and Certificate of Shipment Conformity necessary for the entry of imported
        and domestically manufactured consumer goods into the Saudi market, called
        the Saber Certification Saudi Arabia.
      </p>

      <TopicHeading>Introduction to SABER System</TopicHeading>

      <p className="service-left-content-paragraph">
        SASO (Saudi Standards, Metrology and Quality Organization) launched the
        online Platform named SABER. It facilitates product&apos;s SASO
        registration and SASO certification. Mandatory for exports to Saudi
        Arabia. SASO uses the SABER platform as its digital gateway to implement
        the SALEEM product safety program which regulates the imports of goods in
        Saudi Arabia. SASO defines the standards and regulations while SABER acts
        as the system that facilitates the registration and certification of the
        products.
      </p>

      <SubHeading>Key purpose SASO Certificate</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Digitalization of SASO Certification process",
          "Transparency in imports",
          "Faster customs clearance",
        ]}
      />

      <SubHeading>Key Features of SABER Certification</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Online system for product certification",
          "Centralized platform for all stakeholders",
          "Product registration with HS code and details",
          "Issues certificates (PCoC & SCoC)",
          "Real Time tracking of applications",
          "Ensures compliance with SASO Standards",
          "Mandatory for imports into Saudi Arabia",
        ]}
      />

      <TopicHeading>Objectives of SASO Certification or SABER Certificate</TopicHeading>
      <PointsListWithoutHeading
        points={[
          "Issuing Saudi standards, quality regulations and guides, and conformity assessment that are consistent with international standards and guides as well as meeting the requirements of the World Trade Organization agreement in this scope in line with Islamic Sharia and in the interests of the Kingdom.",
          "Providing environmental and health protection and general safety by ensuring that products comply with the standards approved by SASO.",
          "Ensuring the national products quality by approving suitable Saudi standard that enables national products to compete in the domestic and international markets in addition to protecting the Kingdom's markets from counterfeit goods.",
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

      <MainSectionHeading>SABER Certification Process</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The SABER certification process is a two-stage online system managed by
        SASO for importing goods into Saudi Arabia. It involves registering
        products to obtain a Product Certificate of Conformity (PCoC) based on
        risk, followed by a Shipment Certificate of Conformity (SCoC) for each
        consignment to ensure customs clearance.
      </p>

      <p className="service-left-content-paragraph">
        The SABER certification process is structured and involves multiple steps.
        Although the Saudi importer registers the product, exporters play a
        crucial role in providing accurate information and documentation.
      </p>

      <SubHeading>Step 1: Account Creation</SubHeading>
      <PointsListWithoutHeading
        points={[
          "The importer creates an account on the SABER platform and logs in to initiate the process.",
        ]}
      />

      <SubHeading>Step 2: Product Registration</SubHeading>
      <p className="service-left-content-paragraph">
        Identify if your product is regulated (needs certification) or
        non-regulated (self-declaration only). Classification is based on SASO
        technical regulations. The product is registered with details such as
        product name, HS code, category, and technical specifications.
      </p>

      <SubHeading>Step 3: Selection of Certification Body</SubHeading>
      <p className="service-left-content-paragraph">
        An approved certification body is selected to evaluate the product (e.g.,
        SGS, Intertek, Bureau Veritas).
      </p>

      <SubHeading>Step 4: Document Submission</SubHeading>
      <p className="service-left-content-paragraph">
        The exporter provides necessary documents, including test reports, product
        specifications, and declaration of conformity.
      </p>

      <SubHeading>Step 5: Product Evaluation</SubHeading>
      <p className="service-left-content-paragraph">
        The SASO certification body reviews the documents and may request
        additional testing if required.
      </p>

      <SubHeading>Step 6: Issuance of Product Certificate (PCoC)</SubHeading>
      <p className="service-left-content-paragraph">
        Once SASO approved, the Product Certificate of Conformity is issued.
      </p>

      <SubHeading>Step 7: Shipment Certificate (SCoC)</SubHeading>
      <p className="service-left-content-paragraph">
        For each shipment, a Shipment Certificate is generated, which is required
        for customs clearance.
      </p>

      <SubHeading>Step 8: Certification Body Approval</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Certification body verifies shipment details",
          "Issues SCoC",
        ]}
      />

      <SubHeading>Step 9: Customs Clearance</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Saudi customs checks SABER certificates",
          "If valid → shipment cleared",
        ]}
      />
    </div>
  );
};

const CertificatesSection = () => {
  return (
    <div id="certificates" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Certificates</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Types of SASO Certificates</MainSectionHeading>

      <SubHeading>Product Certificate of Conformity (PCoC)</SubHeading>
      <p className="service-left-content-paragraph">
        The PCoC is issued for a specific product and is valid for one year. It
        confirms that the product complies with Saudi standards.
      </p>

      <SubHeading>Shipment Certificate of Conformity (SCoC)</SubHeading>
      <p className="service-left-content-paragraph">
        The SCoC is issued for each shipment and ensures that the shipped goods
        match the approved product.
      </p>

      <TopicHeading>SASO Registration and Documentation</TopicHeading>

      <p className="service-left-content-paragraph">
        SASO registration is done through the SABER platform, which is managed by
        the Saudi Standards, Metrology and Quality Organization. Proper
        documentation is essential for obtaining SASO certification. Companies
        must ensure that all documents are accurate and complete.
      </p>

      <SubHeading>Who Registers?</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Saudi Importer (mandatory)",
          "Must have a valid Commercial Registration (CR)",
          "Exporters cannot register directly (they support documentation)",
        ]}
      />

      <TopicHeading>Documents Required for Saber Certification</TopicHeading>
      <PointsListWithoutHeading
        points={[
          "Commercial Invoice",
          "Packing List",
          "Bill of Lading",
          "Product Test Reports",
          "Product Images",
          "Declaration of Conformity",
        ]}
      />

      <p className="service-left-content-paragraph">
        Incomplete or incorrect documentation can lead to delays or rejection.
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

      <MainSectionHeading>SASO Certification Cost</MainSectionHeading>

      <p className="service-left-content-paragraph">
        SASO SABER certification costs typically range from ₹20,000 to ₹45,000+
        per certificate in India, depending on product complexity and the agency.
        The process involves a Product Certificate of Conformity (PCoC) valid for
        one year and a Shipment Certificate of Conformity (SCoC) for each
        consignment, with total costs including assessment fees and mandatory
        platform charges.
      </p>

      <p className="service-left-content-paragraph">
        The SASO certification cost varies depending on several factors,
        including product type, testing requirements, and certification body
        charges.
      </p>

      <SubHeading>Cost Components</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Testing fees",
          "Certification fees",
          "SABER platform charges",
          "Documentation costs",
        ]}
      />

      <SubHeading>Approximate Cost Range</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Product Certificate (PCoC): ₹50,000 – ₹2,00,000",
          "Shipment Certificate (SCoC): ₹10,000 – ₹50,000",
        ]}
      />

      <TopicHeading>Role of Companies in SABER Certification Process</TopicHeading>

      <p className="service-left-content-paragraph">
        Companies play a central role in the SASO certification process by ensuring
        product safety, technical compliance, and initiating the two-stage
        certification (PCoC and SCoC) via the SABER online platform. They must
        register products, provide lab test reports from accredited bodies, and
        ensure compliance with Saudi technical regulations.
      </p>

      <p className="service-left-content-paragraph">
        Companies must actively participate in the SASO certification process by:
      </p>

      <PointsListWithoutHeading
        points={[
          "Preparing accurate documentation",
          "Coordinating with importers",
          "Ensuring product quality",
          "Maintaining certification validity",
        ]}
      />
    </div>
  );
};

const GuidanceSection = () => {
  return (
    <div id="guidance" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Guidance</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>
        Challenges Faced by Companies during SASO Certificate Process
      </MainSectionHeading>

      <p className="service-left-content-paragraph">
        Companies looking to export regulated products to Saudi Arabia face
        significant hurdles in complying with the SABER Certificate regulations,
        primarily due to complex, evolving, and mandatory conformity assessment
        procedures. Failure to navigate these requirements often leads to shipment
        delays, product rejection, or severe penalties.
      </p>

      <p className="service-left-content-paragraph">
        Companies often face several challenges during the SASO certification
        process:
      </p>

      <SubHeading>Common Issues</SubHeading>
      <PointsListWithoutHeading
        points={[
          "High certification cost",
          "Complex documentation",
          "Time delays",
          "Technical compliance issues",
        ]}
      />

      <TopicHeading>Solutions and Best Practices</TopicHeading>

      <p className="service-left-content-paragraph">
        Navigating SASO Certificate (Saudi Standards, Metrology and Quality
        Organization) requirements is essential for importing goods into Saudi
        Arabia. The process centers on the SABER platform, an online system
        designed to ensure products comply with safety and quality regulations,
        reducing delays at customs.
      </p>

      <p className="service-left-content-paragraph">To overcome challenges, companies should:</p>
      <PointsListWithoutHeading
        points={[
          "Conduct pre-testing of products",
          "Use experienced consultants",
          "Maintain proper documentation",
          "Stay updated with regulations",
        ]}
      />

      <TopicHeading>Benefits of SASO SABER Certification</TopicHeading>

      <p className="service-left-content-paragraph">
        SASO SABER certification is a mandatory online platform in Saudi Arabia
        that ensures imported products meet safety and quality standards, enabling
        legal market access and streamlined customs clearance. Benefits include
        reduced shipping delays, enhanced brand trust, increased consumer
        confidence, and compliance with regulations to prevent product rejection.
      </p>

      <SubHeading>For Companies</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Easy market access",
          "Improved credibility",
          "Compliance assurance",
          "Business growth opportunities",
        ]}
      />

      <SubHeading>For Consumers</SubHeading>
      <PointsListWithoutHeading
        points={["Safe and reliable products", "Quality assurance"]}
      />

      <TopicHeading>Conclusion</TopicHeading>

      <p className="service-left-content-paragraph">
        SASO SABER certification are essential for companies exporting to Saudi
        Arabia. They ensure that products meet quality and safety standards while
        simplifying the SASO certification process through digitalization.
      </p>

      <p className="service-left-content-paragraph">
        By understanding the SASO certification process, SABER certification
        process, SASO approval, and SASO certification costs, companies can
        effectively manage their export operations and achieve long-term success in
        the Saudi market.
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
            {SASO_FAQS.map((faq, index) => (
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
