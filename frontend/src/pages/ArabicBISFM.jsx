import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { ClockLoader } from "react-spinners";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
import ISIMARKImage from "@/assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "@/assets/bisfmpageimage/biscertificate.png";
import {
  Mail,
  Linkedin,
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
  PhoneCall,
  Phone,
  MessageCircle,
  SendHorizontal,
  User,
} from "lucide-react";
import axios from "axios";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BISFMProductTable from "./BISFMProductTable.jsx";

import BISImage from "@/assets/images/BIS.jpg";
import CDSCO from "@/assets/images/CDSCO.jpg";
import BISCRS from "@/assets/images/BISCRS.jpg";
import PlasticWasteManagement from "@/assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "@/assets/images/EPRCertificate.jpg";
import LMPC from "@/assets/images/LMPC.jpg";
import ISIMark from "@/assets/images/ISIMark.jpg";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ScrollToTopButton from "@/components/common/ScrollToTop";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,

} from "@radix-ui/react-icons";
import { MailPlus } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

const ArabicBISFM = () => {
  return (
    <main className="w-full relative" role="main">
      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">الرئيسية</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>دليل شهادة BIS للمصنعين الأجانب (BIS الهند)</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <ArabicBISFMHero />
      <ArabicBISFMIndex />
      <ArabicBISFMContent />
      <ArabicFooter />
      <ScrollToTopButton />
    </main>
  );
};

export default ArabicBISFM;

const ArabicBISFMHero = () => {
  return (
    <section className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}

        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              الخبرة المعتمدة
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              شهادة BIS الهندية لـ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            المصنوعات الأجنبية
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            يحتاج المصنّعون الأجانب إلى علامة ISI للتصدير إلى الهند. تشمل هذه
            العلامة أكثر من 600 منتج إلزامي وأكثر من 20,000 منتج اختياري.
          </p>

          <nav className="flex items-center -mt-2">
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
                عرض الخدمات
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side  */}
        <ArabicServiceContactForm />
      </div>
    </section>
  );
};

export const ArabicServiceContactForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/cdsco-registration-certification"))
      return "CDSCO Registration";

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes("ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/en/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes("/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu")
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do"
      )
    )
      return "BIS Mark Foreign";

    if (path.includes("/a-guide-on-how-to-obtain-epr-certificate"))
      return "EPR Registration";

    // BIS Certification (Common)
    if (path.includes("/what-is-bis-certificate-indian-bis"))
      return "BIS Certification";

    if (path.includes("/de/was-ist-das-bis-zertifikat-indisches-bis"))
      return "BIS Certification";

    if (path.includes("/en/what-is-bis-certificate-indian-bis"))
      return "BIS Certification";

    if (path.includes("/es/que-es-el-certificado-bis-bis-indio"))
      return "BIS Certification";

    if (path.includes("/fr/quest-ce-que-le-certificat-bis-indien"))
      return "BIS Certification";

    if (path.includes("/id/apa-itu-sertifikat-bis-bis-india"))
      return "BIS Certification";

    if (path.includes("/it/cose-il-certificato-bis-indiano"))
      return "BIS Certification";

    if (path.includes("/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"))
      return "BIS Certification";

    if (path.includes("/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"))
      return "BIS Certification";

    if (path.includes("/nl/wat-is-het-bis-certificaat-indiaas-bis"))
      return "BIS Certification";

    if (path.includes("/th/bis-certificate-khue-a-rai-bis-india"))
      return "BIS Certification";

    if (path.includes("/vi/chung-chi-bis-la-gi-bis-an-do"))
      return "BIS Certification";

    if (path.includes("/a-guide-on-how-to-obtain-lmpc-certificate"))
      return "LMPC Registration";
    if (path.includes("/epr-certificate-for-plastic-waste-management-pwm"))
      return "Plastic Waste";
    if (path.includes("/what-is-legal-metrology-or-lmpc-certificate"))
      return "Legal Metrology";

    // ISI Mark Indian
    if (path.includes("/bis-isi-mark-certification"))
      return "ISI Mark Indian";

    if (path.includes("/ar/dalil-shahadat-bis-bis-alhind"))
      return "ISI Mark Indian";

    if (path.includes("/de/leitfaden-zur-bis-zertifizierung-indisches-bis"))
      return "ISI Mark Indian";

    if (path.includes("/en/bis-isi-mark-certification"))
      return "ISI Mark Indian";

    if (path.includes("/es/guia-certificacion-bis-bis-indio"))
      return "ISI Mark Indian";

    if (path.includes("/fr/guide-certification-bis-bis-indien"))
      return "ISI Mark Indian";

    if (path.includes("/id/panduan-sertifikasi-bis-bis-india"))
      return "ISI Mark Indian";

    if (path.includes("/it/guida-alla-certificazione-bis-bis-indiano"))
      return "ISI Mark Indian";

    if (path.includes("/ja/bis-nintei-gaido-india-no-bis"))
      return "ISI Mark Indian";

    if (path.includes("/ko/bis-injeung-gaideu-indo-bis"))
      return "ISI Mark Indian";

    if (path.includes("/nl/gids-voor-bis-certificering-indiaas-bis"))
      return "ISI Mark Indian";

    if (path.includes("/th/khumanam-kanraprong-bis-bis-india"))
      return "ISI Mark Indian";

    if (path.includes("/vi/huong-dan-chung-nhan-bis-bis-an-do"))
      return "ISI Mark Indian";

    if (path.includes("/epr-certificate-for-battery-waste-management-bwm"))
      return "Battery Waste";

    // CRS Registration
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";

    if (path.includes("/ar/ma-huwa-crs-bis-aw-tasjeel-crs"))
      return "CRS Registration";

    if (path.includes("/de/was-ist-crs-bis-oder-crs-registrierung"))
      return "CRS Registration";

    if (path.includes("/en/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";

    if (path.includes("/es/que-es-crs-bis-o-registro-crs"))
      return "CRS Registration";

    if (path.includes("/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"))
      return "CRS Registration";

    if (path.includes("/id/apa-itu-crs-bis-atau-registrasi-crs"))
      return "CRS Registration";

    if (path.includes("/it/cose-il-crs-bis-o-registrazione-crs"))
      return "CRS Registration";

    if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
      return "CRS Registration";

    if (path.includes("/ko/crs-bis-i-mueos-inga-crs-deunglog"))
      return "CRS Registration";

    if (path.includes("/nl/wat-is-crs-bis-of-crs-registratie"))
      return "CRS Registration";

    if (path.includes("/th/crs-bis-khue-a-rai-rab-phit-thab-crs"))
      return "CRS Registration";

    if (path.includes("/vi/crs-bis-la-gi-hoac-dang-ky-crs"))
      return "CRS Registration";

    if (
      path.includes("/information-about-peso-certification-peso-license-india")
    )
      return "PESO";
    if (path.includes("/information-about-tec-certificate-mtcte")) return "TEC";
    if (path.includes("/information-about-wpc-certificate-eta-approval"))
      return "WPC";
    if (path.includes("/restriction-of-hazardous-substance-rohs-certificate"))
      return "ROHS";
    if (path.includes("/bee-certification")) return "BEE";
    if (path.includes("/ce-certification")) return "CE Certification";
    if (path.includes("/emi-emc-certification")) return "EMI EMC";
    if (path.includes("/cb-certification")) return "CB Certification";

    // Scheme X
    if (path.includes("/indian-bis-certification-under-scheme-x"))
      return "SchemeX";


    if (path.includes("/ar/BIS/shahadat-bis-alhind-tahata-almukhatat-x"))
      return "SchemeX";

    if (path.includes("/de/indische-bis-zertifizierung-nach-schema-x"))
      return "SchemeX";

    if (path.includes("/en/indian-bis-certification-under-scheme-x"))
      return "SchemeX";

    if (path.includes("/es/certificacion-bis-india-bajo-esquema-x"))
      return "SchemeX";

    if (path.includes("/fr/certification-bis-indienne-selon-schema-x"))
      return "SchemeX";

    if (path.includes("/id/sertifikasi-bis-india-di-bawah-skema-x"))
      return "SchemeX";

    if (path.includes("/it/certificazione-bis-indiana-secondo-schema-x"))
      return "SchemeX";

    if (path.includes("/ja/indo-no-bis-nintei-sukimu-x")) return "SchemeX";

    if (path.includes("/ko/indo-bis-injeung-scheme-x-haenghaeng"))
      return "SchemeX";

    if (path.includes("/nl/indiaas-bis-certificaat-volgens-schema-x"))
      return "SchemeX";

    if (path.includes("/th/bis-prathiap-india-taem-dai-tae-skema-x"))
      return "SchemeX";

    if (path.includes("/vi/chung-nhan-bis-an-do-theo-scheme-x"))
      return "SchemeX";
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

    // console.log("Form Data:", formData);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      // toast.error("Please Enter a valid Full Name.");
      toast({
        variant: "destructive",
        title: "الاسم الكامل مطلوب",
        description: "الاسم الكامل مطلوب",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "البريد الإلكتروني مطلوب",
        description: "البريد الإلكتروني مطلوب",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      // toast.error("Please Enter a Valid Phone number (8-15 digits)");
      toast({
        variant: "destructive",
        title: "رقم الاتصال مطلوب",
        description: "رقم الاتصال مطلوب",
      });
      setLoading(false);
      return;
    }

    //  console.log(BASE_URL);
    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      // toast.success("Contact form submitted successfully!");
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "تم إرسال الرسالة بنجاح",
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
      // toast.error(errorMessage || "Failed to submit contact form details!");
      toast({
        variant: "destructive",
        title: errorMessage || "حدث خطأ ما",
        description: "حدث خطأ ما",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          اتصل بنا
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        حجز موعد
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        هل تريد الاتصال بفريقنا وتحديد موعد للمكالمة؟
        <span className="text-black"> جرب الآن</span>
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
            placeholder="الاسم الكامل *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="عنوان البريد الإلكتروني *"
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
            placeholder="رقم الاتصال *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="اسم الشركة *"
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
            placeholder="اسم المنتج *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="الشهادة المطلوبة *"
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
              <span> جاري الإرسال </span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span> حجز موعد </span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const ArabicBISFMIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "overview",
    "standardization",
    "representation",
    "document",
    "process",
    "costing",
    "surveillance",
    "facilitator",
  ];

  // Arabic translations for sections
  const SECTION_NAMES = {
    overview: "نظرة عامة",
    standardization: "المعايير",
    representation: "التمثيل",
    document: "الوثيقة",
    process: "العملية",
    costing: "التكلفة",
    surveillance: "المراقبة",
    facilitator: "الميسر",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
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

  // Close mobile menu when clicking outside
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
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section,
            top: rect.top,
            bottom: rect.bottom,
            element,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible in viewport
      // Check which section's top is closest to the top of viewport (with some offset)
      const currentSection = sections.find((section) => {
        return section.top <= 150 && section.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        // If no section is in the sweet spot, find the one closest to top
        const closestSection = sections.reduce((closest, section) => {
          if (!closest) return section;

          const currentDistance = Math.abs(section.top - 150);
          const closestDistance = Math.abs(closest.top - 150);

          return currentDistance < closestDistance ? section : closest;
        }, null);

        if (closestSection) {
          setActiveSection(closestSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
        }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {SECTION_NAMES[activeSection]}
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
            viewBox="0 24 24"
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {SECTION_NAMES[item]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {SECTION_NAMES[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
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

const ArabicBISFMContent = () => {
  return (
    <section className="" aria-label="BIS FMCS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ArabicBISFMContentLeft />
          {/* Right Side */}
          <ArabicServiceContentRight />
        </div>
      </div>
      <ArabicServiceFaq />
      <div id="product-table">
        {/* Fix : Later in Arabic */}
        <BISFMProductTable />
      </div>

      <div id="services">
        <ArabicServices />
      </div>
    </section>
  );
};

export const ArabicServiceContentRight = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      <ArabicLatestBlog />
      <ArabicClientTestimonial />
      <ArabicWhyChooseUs />
      <ArabicFreeCallBack />
    </div>
  );
};

const ArabicFreeCallBack = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/cdsco-registration-certification"))
      return "CDSCO Registration";

    // BISFM
    if (
      path.includes(
        "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes("/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BIS Mark Foreign";

    if (
      path.includes("/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes("/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu")
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india"
      )
    )
      return "BIS Mark Foreign";

    if (
      path.includes(
        "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do"
      )
    )
      return "BIS Mark Foreign";

    if (path.includes("/a-guide-on-how-to-obtain-epr-certificate"))
      return "EPR Registration";

    // BIS Certification
    if (path.includes("/what-is-bis-certificate-indian-bis"))
      return "BIS Certification";

    if (path.includes("/ar/ma-huwa-shahadat-bis-bis-alhind"))
      return "BIS Certification";

    if (path.includes("/de/was-ist-das-bis-zertifikat-indisches-bis"))
      return "BIS Certification";

    if (path.includes("/es/que-es-el-certificado-bis-bis-indio"))
      return "BIS Certification";

    if (path.includes("/fr/quest-ce-que-le-certificat-bis-indien"))
      return "BIS Certification";

    if (path.includes("/id/apa-itu-sertifikat-bis-bis-india"))
      return "BIS Certification";

    if (path.includes("/it/cose-il-certificato-bis-indiano"))
      return "BIS Certification";

    if (path.includes("/ja/bis-shomeisho-to-wa-indo-bis"))
      return "BIS Certification";

    if (path.includes("/ko/bis-injeungseo-ran-indo-bis"))
      return "BIS Certification";

    if (path.includes("/nl/wat-is-het-bis-certificaat-indiaas-bis"))
      return "BIS Certification";

    if (path.includes("/th/bai-rap-rong-bis-khue-arai-bis-india"))
      return "BIS Certification";

    if (path.includes("/vi/chung-chi-bis-la-gi-bis-an-do"))
      return "BIS Certification";

    if (path.includes("/a-guide-on-how-to-obtain-lmpc-certificate"))
      return "LMPC Registration";
    if (path.includes("/epr-certificate-for-plastic-waste-management-pwm"))
      return "Plastic Waste";
    if (path.includes("/what-is-legal-metrology-or-lmpc-certificate"))
      return "Legal Metrology";

    // ISI Mark Indian
    if (path.includes("bis-isi-mark-certification"))
      return "ISI Mark Indian";


    if (path.includes("/ar/dalil-shahadat-bis-bis-alhind"))
      return "ISI Mark Indian";

    if (path.includes("/ar/dalil-shahadat-bis-bis-alhind"))
      return "ISI Mark Indian";

    if (path.includes("/de/leitfaden-bis-zertifizierung-indisches-bis"))
      return "ISI Mark Indian";

    if (path.includes("/es/guia-certificacion-bis-bis-indio"))
      return "ISI Mark Indian";

    if (path.includes("/fr/guide-certification-bis-bis-indien"))
      return "ISI Mark Indian";

    if (path.includes("/id/panduan-sertifikasi-bis-bis-india"))
      return "ISI Mark Indian";

    if (path.includes("/it/guida-alla-certificazione-bis-bis-indiano"))
      return "ISI Mark Indian";

    if (path.includes("/ja/bis-nintei-gaido-india-no-bis"))
      return "ISI Mark Indian";

    if (path.includes("/ko/bis-injeung-gaideu-indo-bis"))
      return "ISI Mark Indian";

    if (path.includes("/nl/gids-voor-bis-certificering-indiaas-bis"))
      return "ISI Mark Indian";

    if (path.includes("/th/khumanam-kanraprong-bis-bis-india"))
      return "ISI Mark Indian";

    if (path.includes("/vi/huong-dan-chung-nhan-bis-bis-an-do"))
      return "ISI Mark Indian";

    if (path.includes("/epr-certificate-for-battery-waste-management-bwm"))
      return "Battery Waste";

    // CRS Registration
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";

    if (path.includes("/ar/ma-huwa-crs-bis-aw-tasjeel-crs"))
      return "CRS Registration";

    if (path.includes("/ar/ma-huwa-crs-bis-aw-tasjeel-crs"))
      return "CRS Registration";

    if (path.includes("/de/was-ist-crs-bis-oder-crs-registrierung"))
      return "CRS Registration";

    if (path.includes("/en/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";

    if (path.includes("/es/que-es-crs-bis-o-registro-crs"))
      return "CRS Registration";

    if (path.includes("/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"))
      return "CRS Registration";

    if (path.includes("/id/apa-itu-crs-bis-atau-registrasi-crs"))
      return "CRS Registration";

    if (path.includes("/it/cose-il-crs-bis-o-registrazione-crs"))
      return "CRS Registration";

    if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
      return "CRS Registration";

    if (path.includes("/ko/crs-bis-i-mueos-inga-crs-deunglog"))
      return "CRS Registration";

    if (path.includes("/nl/wat-is-crs-bis-of-crs-registratie"))
      return "CRS Registration";

    if (path.includes("/th/crs-bis-khue-a-rai-rab-phit-thab-crs"))
      return "CRS Registration";

    if (path.includes("/vi/crs-bis-la-gi-hoac-dang-ky-crs"))
      return "CRS Registration";

    if (
      path.includes("/information-about-peso-certification-peso-license-india")
    )
      return "PESO";
    if (path.includes("/information-about-tec-certificate-mtcte")) return "TEC";
    if (path.includes("/information-about-wpc-certificate-eta-approval"))
      return "WPC";
    if (path.includes("/restriction-of-hazardous-substance-rohs-certificate"))
      return "ROHS";
    if (path.includes("/bee-certification")) return "BEE";
    if (path.includes("/ce-certification")) return "CE Certification";
    if (path.includes("/emi-emc-certification")) return "EMI EMC";
    if (path.includes("/cb-certification")) return "CB Certification";

    // schemeX
    if (path.includes("/indian-bis-certification-under-scheme-x"))
      return "SchemeX";

    if (path.includes("/ar/BIS/shahadat-bis-alhind-tahata-almukhatat-x"))
      return "SchemeX";

    if (path.includes("/ar/shahadat-bis-alhind-tahata-almukhatat-x"))
      return "SchemeX";

    if (path.includes("/de/indische-bis-zertifizierung-nach-schema-x"))
      return "SchemeX";

    if (path.includes("/en/indian-bis-certification-under-scheme-x"))
      return "SchemeX";

    if (path.includes("/es/certificacion-bis-india-bajo-esquema-x"))
      return "SchemeX";

    if (path.includes("/fr/certification-bis-indienne-selon-schema-x"))
      return "SchemeX";

    if (path.includes("/id/sertifikasi-bis-india-di-bawah-skema-x"))
      return "SchemeX";

    if (path.includes("/it/certificazione-bis-indiana-secondo-schema-x"))
      return "SchemeX";

    if (path.includes("/ja/indo-no-bis-nintei-sukimu-x")) return "SchemeX";

    if (path.includes("/ko/indo-bis-injeung-scheme-x-haenghaeng"))
      return "SchemeX";

    if (path.includes("/nl/indiaas-bis-certificaat-volgens-schema-x"))
      return "SchemeX";

    if (path.includes("/th/bis-prathiap-india-taem-dai-tae-skema-x"))
      return "SchemeX";

    if (path.includes("/vi/chung-nhan-bis-an-do-theo-scheme-x"))
      return "SchemeX";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "الرجاء إدخال اسم كامل صالح.",
        description: "الاسم يجب أن يحتوي على الحروف والمساحات فقط.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "الرجاء إدخال رقم هاتف صالح",
        description: "رقم الهاتف يجب أن يكون (8-15 رقم)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
        description: "تحقق من صحة تنسيق بريدك الإلكتروني",
      });
      setLoading(false);
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "تم إرسال نموذج الاتصال بنجاح!",
        description: "شكرا لتواصلك معنا. سيتواصل معك فريقنا قريبا.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "فشل في إرسال تفاصيل نموذج الاتصال!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description: "حدث خطأ ما. يرجى التحقق من التفاصيل والمحاولة مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <h2 className="text-xl font-geist font-semibold text-[#232327]">
          اطلب اتصال مجاني
        </h2>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        اترك تفاصيلك أدناه وسيتصل بك خبراؤنا خلال 24 ساعة لمناقشة احتياجات
        الامتثال التنظيمي الخاصة بك.
      </p>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="اسمك*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="رقم الهاتف*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="عنوان البريد الإلكتروني*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="الشهادة المطلوبة*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>إرسال</span>
              </div>
            ) : (
              <>
                اطلب اتصال
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        بإرسال هذا النموذج، فإنك توافق على{" "}
        <a href="#" className="text-blue-600 hover:underline">
          سياسة الخصوصية
        </a>{" "}
        وتوافق على الاتصال بك.
      </p>
    </div>
  );
};

const ArabicLatestBlog = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "شهادة BIS لكراسي العمل",
      url: "/latest-notification/work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "شهادة BIS للكراسي والمقاعد",
      url: "/latest-notification/and-stools",
    },
    {
      image:
        "https://globalomega.com/wp-content/uploads/WhatsApp-Image-2023-11-22-at-16.08.01-1-300x300.jpeg",
      category: "BIS",
      title: "إشعار BIS للطاولات والمكاتب",
      url: "/latest-notification/and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      category: "BIS",
      title: "إشعار BIS لوحدات التخزين",
      url: "/latest-notification/storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      category: "BIS",
      title: "إشعار BIS للأسرة المزدوجة",
      url: "/latest-notification/bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      category: "BIS",
      title: "إشعار BIS لكابل الطاقة الشمسية DC وكابل مقاومة الحريق",
      url: "/latest-notification/survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      category: "BIS",
      title:
        "إشعار BIS للألمنيوم المطاوع وسبائك الألمنيوم، مخزون التشكيل والمشكولات",
      url: "/latest-notification/and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "إشعار BIS لحمض H",
      url: "/latest-notification/h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "إشعار BIS لحمض K",
      url: "/latest-notification/k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      category: "BIS",
      title: "إشعار BIS لكبريتون الفينيل",
      url: "/latest-notification/vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      category: "BIS",
      title: "إشعار BIS لمنشطات السياج الكهربائي",
      url: "/latest-notification/fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "BIS",
      title: "إشعار BIS لغسالات الملابس",
      url: "/latest-notification/washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      category: "BIS",
      title: "إشعار BIS لألواح الجبس الجصي",
      url: "/latest-notification/plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      category: "BIS",
      title: "إشعار BIS لأنابيب سبائك الألمنيوم لأغراض الري - أنابيب ملحومة",
      url: "/latest-notification/-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      category: "BIS",
      title: "إشعار BIS لأنبوب سبائك الألمنيوم لأغراض الري - أنبوب مبثوق",
      url: "/latest-notification/extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      category: "BIS",
      title: "إشعار BIS لقضيب الألمنيوم درجة EC المنتج بالصب والدرفلة المستمرة",
      url: "/latest-notification/and-rolling",
    },
    {
      image:
        "https://vincular.in/wp-content/uploads/2024/11/304.-Quality-Control-Order-on-Wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections-For-General-Engineering-Purposes.png",
      category: "BIS",
      title: "إشعار BIS للألمنيوم المطاوع وقضبان وعيدان وأقسام سبائك الألمنيوم",
      url: "/latest-notification/and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      category: "BIS",
      title: "إشعار BIS لألواح الجبس الجصي",
      url: "/latest-notification/plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center ">
        <AlignLeft className="text-[#232327]" />
        <h2 className="text-xl font-geist font-semibold  text-[#232327]">
          أحدث المدونات
        </h2>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300">
                <div className="h-20 w-20 overflow-hidden rounded-md">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 font-geist text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
                    >
                      {post.category}
                    </Badge>
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900">
                      {post.title}
                    </p>

                    {/* <Link to={post.url}> */}
                    <div>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        اقرأ المزيد
                        <ArrowRightIcon className="-ml-1 mt-0.5" />
                      </Button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>

              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full flex justify-center">
        <Link to="/latest-notifications" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300 hover:bg-gray-100"
          >
            عرض جميع المدونات
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ArabicClientTestimonial = () => {
  const testimonials = [
    {
      name: "السيدة إلياواتي",
      role: "شركة PT Quty Karunia، مرخص BIS في فيتنام",
      content:
        "قدمت شركة Sun Certifications India خدمات ممتازة لشهادة BIS. خدمتهم المتميزة وإخلاصهم كسب ثقتنا.",
    },
    {
      name: "السيدة بيل",
      role: "شركة Thantawan Industries Ltd، مرخص BIS في تايلاند",
      content:
        "دعمتنا شركة Sun Certifications India طوال عملية شهادة BIS. خدمة العملاء المتجاوبة لديهم استثنائية.",
    },
    {
      name: "السيدة جون مين سيم",
      role: "شركة Leaderart Industries، مرخص BIS في ماليزيا",
      content:
        "ساعدتنا شركة Sun Certifications India في الحصول على شهادة BIS، مما ضاعف مشاركتنا في الهند. خدماتهم أصيلة ومحدثة.",
    },
    {
      name: "السيدة إلياواتي",
      role: "شركة PT Quty Karunia، مرخص BIS في فيتنام",
      content:
        "واحد من أفضل استشاريي BIS في الهند! خبرتهم جعلت العملية بأكملها سلسة بالنسبة لنا.",
    },
    {
      name: "السيدة بيل",
      role: "شركة Thantawan Industries Ltd، مرخص BIS في تايلاند",
      content:
        "أوصي بشدة بشركة Sun Certifications India للحصول على شهادة BIS بدون متاعب. خدمة مهنية ودقيقة.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <h2 className="text-xl font-geist font-semibold text-[#232327]">
            شهادات العملاء
          </h2>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-60 overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:18s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <h3 className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-neutral-600 font-geist mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-700 font-geist text-sm leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const ArabicWhyChooseUs = () => {
  const reasons = [
    {
      title: "إرشاد الخبراء",
      description:
        "يجلب فريقنا أكثر من 12 عامًا من الخبرة في امتثال CDSCO و BIS.",
    },
    {
      title: "فعال من حيث الوقت",
      description:
        "نحن نقلل وقت الموافقة بنسبة تصل إلى 40% مع العمليات المبسطة.",
    },
    {
      title: "نجاح مثبت",
      description: "معدل نجاح 100% مع أكثر من 1500 تسجيل ناجح.",
    },
    {
      title: "محوره العميل",
      description: "مدير حساب مخصص يضمن خدمة شخصية.",
    },
  ];

  const stats = {
    experience: {
      value: "12+",
      label: "سنوات الخبرة",
    },
    clients: {
      value: "1500+",
      label: "عملاؤنا",
    },
    successRate: {
      value: "100%",
      label: "معدل النجاح",
    },
    countries: {
      value: "20+",
      label: "البلدان المخدومة",
    },
  };

  const performance = {
    title: "أداؤنا",
    metrics: {
      speed: {
        label: "السرعة",
        value: "95",
      },
      success: {
        label: "النجاح",
        value: "99",
      },
      satisfaction: {
        label: "الرضا",
        value: "98",
      },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <h2 className="text-xl font-geist font-semibold text-[#232327]">
          لماذا تختارنا
        </h2>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <h3 className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <h3 className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <h3 className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.countries.label}
          </p>
        </div>
      </div>

      {/* Reasons List */}
      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <h3 className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </h3>
                <p className="text-xs text-gray-600 font-geist">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Performance */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900 font-geist">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: `${performance.metrics.satisfaction.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArabicBISFMContentLeft = () => {
  return (
    <article className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section
          className="flex flex-col gap-2 md:gap-4 mb-6"
          aria-label="BIS Certificate for Foreign Manufacturers"
        >
          <article className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            معلومات كاملة عن شهادة BIS الهندية بموجب مخطط FMCS
          </article>

          <h2 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
            ما هو BIS الهندي؟
          </h2>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
            مكتب المعايير الهندي (BIS) هو الهيئة الوطنية الهندية للمعايير،
            التابعة لوزارة شؤون المستهلك والأغذية والتوزيع العام. أُنشئ بموجب
            قانون مكتب المعايير الهندي لعام ١٩٨٦، والمُعدّل عام ٢٠١٦، ويلعب
            دورًا محوريًا في توحيد معايير السلع ووضع العلامات عليها ومنح شهادات
            الجودة لها. ويهدف إلى ضمان جودة المنتجات المُقدمة للمستهلكين الهنود
            وسلامتها وموثوقيتها.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            يعمل مكتب المعايير والمواصفات (BIS) من خلال برامج متنوعة تشمل إصدار
            شهادات للمنتجات، وختم المجوهرات، وخدمات الاختبار، وبرامج التدريب.
            إلا أن أحد أهم أطر عمله على الصعيد الدولي هو نظام اعتماد المصنّعين
            الأجانب (FMCS).
          </p>

          {/* <div className="bg-[#F9F7F2] border-l-4 border-[#1A8781] p-4 mt-2 md:mt-4 rounded-md shadow-sm">
          <h4 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-1">Is obtaining an ISI mark for Indian importers mandatory?</h4>
          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d]">
            For the products falling under the mandatory list, FMCS BIS certification is mandatory. The list of mandatory products can be accessed on this <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/" target="_blank" rel="noopener noreferrer" className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors">link</a>.
          </p>
        </div> */}
        </section>

        <ArabicOverviewSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ArabicStandardizationSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicRepresentationSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicDocumentSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicProcessSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicCostingSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicSurveillanceSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicFacilitatorSection />

        <ArabicAboutAuthor />
      </div>
    </article>
  );
};

const ArabicOverviewSection = () => {
  return (
    <section
      id="overview"
      className="flex flex-col scroll-mt-20"
      aria-label="Authorized Indian Representative Nomination"
    >
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          ملخص
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        ما هي شهادة BIS بموجب FMCS؟
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        طُبِّق نظام FMCS عام ٢٠٠٠، وهو آلية تُمكِّن المصنّعين الأجانب من الحصول
        على ترخيص من مكتب المواصفات والمقاييس (BIS) لاستخدام علامة ISI على
        منتجاتهم، مما يُشير إلى مطابقتها للمعايير الهندية. تُمكِّن عملية اعتماد
        FMCS الكيانات الأجنبية من بيع منتجاتها قانونيًا في الهند دون الحاجة إلى
        إنشاء وحدة تصنيع محلية.{" "}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As of now, more than 1,650 foreign manufacturers are operating in India
        under the BIS certification system through FMCS.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        حتى الآن، يعمل أكثر من 1650 مصنعًا أجنبيًا في الهند بموجب نظام شهادة BIS
        من خلال FMCS.
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الحصول على شهادة BIS ليس مجرد متطلب قانوني، بل هو بوابة لسوق المستهلكين
        الهندي الواسع. إليك بعض الأسباب الرئيسية التي تجعله ضروريًا:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "الامتثال القانوني: يجب أن تتوافق المنتجات مع المعايير الهندية ذات الصلة.",
            "مصداقية العلامة التجارية: تعمل علامة ISI كدليل على الجودة وتعزز ثقة المستهلك.",
            "التخليص الجمركي: بدون ترخيص BIS صالح، قد يتم رفض المنتجات في الجمارك.",
            "الوصول إلى السوق: يساعد العلامات التجارية الأجنبية على الدخول بسلاسة والحصول على قبول واسع النطاق في الهند.",
            "التخفيف من المخاطر: ضمان أن المنتجات آمنة، وبالتالي تجنب عمليات الاستدعاء المحتملة وقضايا المسؤولية.",
          ]}
        />
      </div>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نطاق المنتجات المشمولة في BIS{" "}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        أدرج مكتب المعايير والمواصفات (BIS) أكثر من 600 منتج ضمن قائمة الشهادات
        الإلزامية، وأكثر من 20,000 منتج مؤهل للحصول على شهادة BIS اختيارية.
        وتشمل هذه المنتجات مجموعة واسعة من الصناعات:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "الأجهزة الإلكترونية وتكنولوجيا المعلومات",
            "قطع غيار السيارات",
            "الأجهزة المنزلية",
            "منتجات الصلب",
            "الأسمنت ومواد البناء وغيرها.",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تشير القائمة المتزايدة إلى النطاق المتزايد وأهمية شهادة BIS في التجارة
        العالمية.
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        أهداف أو فوائد شهادة BIS للمصنعين الأجانب بموجب نظام FMCS
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يهدف نظام شهادة FMCS وBIS إلى:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "إن استخدام علامة ISI دون الحصول على ترخيص BIS صالح يعد جريمة يعاقب عليها القانون.",
            "يجب أن تعرض المنتجات المعتمدة شعار ISI ورقم CM/L (شهادة ترخيص التصنيع).",
            "وقد يواجه المخالفون حظرًا على المنتجات، أو غرامات، أو حتى مقاضاة جنائية.",
            "بناء الثقة بين المستهلكين والعلامات التجارية المستوردة.",
            "تسهيل التجارة العادلة وتوفير تكافؤ الفرص.",
          ]}
        />
      </div>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الميزات الرئيسية لشهادة BIS للمصنعين الأجانب
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200  shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                ميزة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                وصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                feature: "قابلية التطبيق",
                description: "الشركات المصنعة الأجنبية فقط",
              },
              {
                feature: "وضع العلامات",
                description: "علامة ISI + رقم CM/L",
              },
              {
                feature: "متطلبات التدقيق",
                description: "التفتيش الإلزامي للمصنع",
              },
              {
                feature: "اختبار",
                description: "تم إجراؤها في مختبرات هندية معتمدة من BIS",
              },
              {
                feature: "صحة",
                description: "رخصة BIS صالحة لمدة 1-2 سنة",
              },
              {
                feature: "تجديد",
                description: "مطلوب عند انتهاء الصلاحية أو تحديثات المنتج",
              },
              {
                feature: "AIR (الممثل الهندي المعتمد)",
                description: "يجب تعيينه للتواصل مع BIS",
              },
              {
                feature: "ضمان الأداء البنكي",
                description: "مطلوب من بنك هندي معتمد من بنك الاحتياطي الهندي",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.feature}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const ArabicStandardizationSection = () => {
  return (
    <section id="standardization" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التوحيد القياسي
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        ما هي شهادة BIS الهندية ولماذا هي مهمة؟
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        شهادة BIS الهندية هي علامة الجودة والسلامة الصادرة عن مكتب المعايير
        الهندية (BIS). اليوم، تُستخدم علامة ISI حصريًا لتعيين المنتجات المطابقة
        للمعايير الهندية بموجب نظام شهادة BIS الرسمي.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        لكي يحمل المنتج علامة BIS أو ISI الهندية، يجب أن يمر بعملية شهادة BIS
        صارمة، بما في ذلك اختبارات المعمل، تفتيش المصنع، مراجعة الوثائق، وفحوصات
        الامتثال لإرشادات BIS الهندية.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        المكانة القانونية لشهادة BIS في الهند
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ترخيص BIS ليس مجرد أداة تسويقية - إنه متطلب قانوني لجميع المنتجات
        الخاضعة لنظام شهادة BIS الإلزامي.
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        وفقًا لقانون BIS لعام 2016:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "استخدام علامة ISI بدون ترخيص BIS ساري المفعول يعاقب عليه القانون.",
            "يجب على المنتجات المعتمدة عرض شعار ISI ورقم CM/L (شهادة التصنيع/الترخيص).",
            "قد يواجه المخالفون حظرًا للمنتجات أو غرامات أو حتى ملاحقة جنائية.",
          ]}
        />
      </div>

      <img
        src={ISIMARKImage}
        alt="علامة ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        يتكون شعار ISI عادة من:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            'الحروف "ISI" المميزة داخل مستطيل بزوايا مستديرة',
            "رقم CM/L معروض أسفل العلامة أو بجوارها",
            "رقم المعيار الهندي المرجعي (مثال: IS 302 للأجهزة الكهربائية)",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        يجب أن يكون الموضع:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "دائمًا وواضحًا على المنتج",
            "على العبوة إذا لم يكن ممكنًا على المنتج نفسه",
            "على كتيبات المستخدم في بعض فئات المنتجات",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        فئات المنتجات التي تتطلب شهادة BIS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        أكثر من 600 منتج تتطلب علامة ISI بموجب نظام التسجيل الإلزامي في الهند.
        أمثلة تشمل:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200  shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                فئة المنتج
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                كود IS
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الحالة
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                category: "الأجهزة الكهربائية",
                code: "IS 302",
                status: "إلزامي",
              },
              {
                category: "الصلب والحديد",
                code: "IS 2062",
                status: "إلزامي",
              },
              {
                category: "حاويات الطعام",
                code: "IS 10146",
                status: "إلزامي",
              },
              {
                category: "الخوذات",
                code: "IS 4151",
                status: "إلزامي",
              },
              {
                category: "الأسمنت",
                code: "IS 1489",
                status: "إلزامي",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.category}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.code}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تتطلب كل فئة الالتزام بالمعيار الهندي المقابل، والذي يتم اختباره أثناء
        عملية شهادة BIS، يمكن الوصول إلى القائمة الكاملة للمنتجات عن طريق
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          النقر هنا
        </span>
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS الهندية مقابل الشهادات العالمية الأخرى
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        دعونا نقارن علامة ISI مع الرموز الدولية الأخرى:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                العلامة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                البلد
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                إلزامي؟
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                التركيز
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                mark: "ISI",
                country: "الهند",
                mandatory: "نعم",
                focus: "سلامة وجودة المنتج",
              },
              {
                mark: "CE",
                country: "الاتحاد الأوروبي",
                mandatory: "نعم (لفئات محددة)",
                focus: "الصحة، السلامة، البيئة",
              },
              {
                mark: "UL",
                country: "الولايات المتحدة",
                mandatory: "لا",
                focus: "معايير السلامة (طوعي)",
              },
              {
                mark: "CCC",
                country: "الصين",
                mandatory: "نعم",
                focus: "سلامة السلع الكهربائية",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.mark}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.country}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.mandatory}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.focus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        على عكس UL (طوعي) أو CE (خاص بمنطقة معينة)، فإن علامة ISI بموجب نظام
        تسجيل BIS إلزامية وتنفذ محليًا.
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        هل شهادة BIS أو ترخيص BIS إلزامي للاستيراد إلى الهند؟
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الطبيعة الإلزامية لشهادة BIS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        جعلت حكومة الهند من الإلزامي أن يتم اعتماد بعض المنتجات من قبل مكتب
        المعايير الهندية (BIS) قبل أن يتم استيرادها أو بيعها أو توزيعها في السوق
        الهندية. ينبع هذا الالتزام من:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "أهداف حماية المستهلك",
            "التوافق مع المعايير الهندية",
            "لوائح السلامة الوطنية",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        إذا كان المنتج يخضع للمتطلبات الإلزامية لـ BIS الهندية، فيجب أن يكون
        لديه شهادة BIS وتحمل علامة ISI قبل أن يتمكن من التخليص الجمركي في الهند.
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        هل شهادة BIS مطلوبة فقط للواردات؟
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        لا. شهادة BIS إلزامية لـ:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "المصنعين المحليين الذين ينتجون منتجات منظمة",
            "المصنعين الأجانب الذين يصدرون منتجات منظمة إلى الهند",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        سواء كنت موجودًا في الهند أو في الخارج، إذا كان منتجك موجودًا في القائمة
        الإلزامية، فيجب أن يكون لديك ترخيص BIS ويجب أن يحمل علامة ISI.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تستخدم الجمارك الهندية الآن أنظمة بيانات متقدمة لتمييز الشحنات غير
        المطابقة تلقائيًا. يتم فحص جميع السلع تحت الفئات المنظمة لوجود شهادة BIS
        سارية المفعول.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الإعفاءات من شهادة BIS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        شهادة BIS إلزامية في معظم الحالات، ولكن قد يتم منح إعفاءات في سيناريوهات
        محددة:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "للنماذج الأولية للبحث والتطوير أو اختبار العينات",
            "للإستيراد الشخصي بكمية محدودة",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ومع ذلك، هذه حالات نادرة وتتطلب خطابات إعفاء رسمية من BIS أو الوزارات
        ذات الصلة.
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        كيف تعرف إذا كان منتجك يحتاج إلى شهادة BIS أو ترخيص BIS؟
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          انقر هنا
        </span>{" "}
        للتحقق مما إذا كان منتجك مشمولًا بنظام شهادة BIS الهندية الإلزامي.
      </p>
    </section>
  );
};

const ArabicRepresentationSection = () => {
  return (
    <section id="representation" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التمثيل
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        دور الممثل الهندي المعتمد (AIR) في شهادة BIS
      </h3>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ما هو الممثل الهندي المعتمد (AIR)؟
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الممثل الهندي المعتمد (AIR) هو وسيط حاسم يعينه مصنع أجنبي يسعى للحصول
        على شهادة BIS بموجب نظام تسجيل FMCS. يعمل AIR كحلقة وصل رسمية بين مكتب
        المعايير الهندية (BIS) والمصنع، مما يضمن اتصالًا سلسًا، ومعالجة الوثائق،
        وتنسيق عملية الشهادة.
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        المتطلب القانوني لتعيين AIR
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        وفقًا لإرشادات BIS، يجب على أي مصنع أجنبي ليس لديه مكتب مسجل في الهند
        تعيين AIR. يضمن هذا المتطلب أن يكون لدى BIS نقطة اتصال موثوقة يمكن
        الوصول إليها ضمن الولاية القضائية الهندية.
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        المسؤوليات الرئيسية لـ AIR
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يمتد دور AIR عبر عملية شهادة BIS بأكملها، من الوثائق وتقديم الطلب إلى
        تنسيق التدقيق والامتثال بعد الشهادة:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                المسؤولية
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                responsibility: "الاتصال",
                description: "يعمل كنقطة اتصال مع مسؤولي وأقسام BIS",
              },
              {
                responsibility: "دعم الطلبات",
                description:
                  "يساعد في ملء النماذج، وتجميع الوثائق، وتقديم الطلب",
              },
              {
                responsibility: "تنسيق التدقيق",
                description:
                  "ينسق جدول تفتيش المصنع ويجيب على استفسارات المدقق",
              },
              {
                responsibility: "مراقبة الامتثال",
                description:
                  "يضمن أن جميع أنشطة الاختبار والشهادة تفي بمعايير BIS",
              },
              {
                responsibility: "إدارة التجديد",
                description:
                  "يشرف على تجديد ترخيص BIS، وتحديث الوثائق، ودفع الرسوم",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.responsibility}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        معايير الأهلية لتصبح AIR
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        للعمل كـ AIR، يجب على الفرد أو المنظمة:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "أن يكون مواطنًا هنديًا أو كيانًا تجاريًا مسجلًا قانونيًا في الهند",
            "لديه عنوان فعلي في الهند مع رمز بريدي صالح",
            "قادر على التواصل بطلاقة باللغتين الإنجليزية واللغات المحلية",
            "يفهم نظام الشهادة، بروتوكولات وثائق BIS، والتوقعات التنظيمية",
            "قادر على الرد على عمليات التدقيق والمراسلات بسرعة نيابة عن المصنع الأجنبي",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        لماذا دور AIR حيوي
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يضمن AIR الاستمرارية والمساءلة خلال عملية شهادة BIS. بدون AIR:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "لا يوجد لـ BIS ولاية قضائية للتحرك ضد مصنع أجنبي غير متوافق",
            "قد تتأخر الاستفسات الحساسة للوقت وجداول التدقيق",
            "قد تتعطل عملية الشهادة أو يتم إلغاؤها أو رفضها",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يزيد AIR النشط والخبير بشكل كبير من فرص نجاح شهادة BIS.
      </p>
    </section>
  );
};

const ArabicDocumentSection = () => {
  return (
    <section id="document" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الوثائق
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        الوثائق المطلوبة للحصول على شهادة BIS بموجب نظام FMCS
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                نوع الوثيقة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الغرض
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                type: "نموذج طلب FMCS",
                purpose: "طلب رسمي للحصول على الشهادة",
              },
              {
                type: "قائمة معدات التصنيع",
                purpose: "توضح قدرات الإنتاج",
              },
              {
                type: "قائمة المواد الخام",
                purpose: "تضمن جودة المواد المدخلة",
              },
              {
                type: "قائمة معدات الاختبار",
                purpose: "تقييم جاهزية الاختبار والامتثال",
              },
              {
                type: "شهادات المعايرة",
                purpose: "تثبت دقة معدات الاختبار",
              },
              {
                type: "مخطط المصنع وتدفق العملية",
                purpose: "يساعد المدققين على فهم مراحل التصنيع",
              },
              {
                type: "شهادات الاختبار",
                purpose: "تثبت جودة المواد الخام والمنتج النهائي",
              },
              {
                type: "ملف مراقبة الجودة",
                purpose:
                  "يتحقق من مؤهلات الموظفين والإجراءات التشغيلية القياسية",
              },
              {
                type: "إثبات الدفع",
                purpose: "يؤكد تقديم الرسوم إلى BIS",
              },
              {
                type: "ضمان بنكي للأداء",
                purpose: "يعمل كضمان مالي لـ BIS",
              },
            ].map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.type}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {row.purpose}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        تفصيل مفصل لكل وثيقة مطلوبة للحصول على شهادة BIS الهندية
      </p>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        1. نموذج طلب FMCS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        توفر هذه الوثيقة تفاصيل عامة عن المصنع الأجنبي، بما في ذلك:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "تفاصيل المنتج (النوع، الفئة، الموديل)",
            "المعيار الهندي المقصود",
            "تفاصيل الاتصال بالمصنع وAIR",
            "قدرة التصنيع ونطاق الاختبار",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        2. قائمة معدات التصنيع
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "اسم الآلة والعلامة التجارية",
            "قدرة الإنتاج",
            "تفاصيل الاتصال بالمصنع وAIR",
            "سجلات الصيانة (إن وجدت)",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        3. قائمة المواد الخام
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "مصدر التوريد",
            "الدرجات والمواصفات",
            "بروتوكول الاختبار (إن وجد)",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        4. قائمة معدات الاختبار
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "اسم المعدة والشركة المصنعة",
            "الامتثال لمعايير الاختبار في المعيار الهندي",
            "الموقع داخل المصنع",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        5. شهادات المعايرة
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={["تاريخ آخر معايرة", "فترة الصلاحية", "رقم الشهادة"]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        6. مخطط المصنع ومخطط تدفق العملية
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "نقاط الدخول والخروج",
            "مناطق مختبر الاختبار",
            "نقاط فحص مراقبة الجودة",
            "أقسام التخزين والتغليف",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        7. ضمان بنكي للأداء
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يصدر من بنك هندي معتمد من قبل RBI، يغطي ضمان البنك للأداء (PBG)
        المسؤولية في حالة عدم الامتثال. يجب أن تكون هذه الوثيقة:
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "على ورقة رسمية للبنك",
            "تشير إلى فترة الضمان والمبلغ",
            "موقعة ومختومة",
          ]}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        أخطاء شائعة في الوثائق يجب تجنبها عند التقدم للحصول على شهادة BIS أو BIS
        الهندية
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "عدم التطابق بين بيانات النموذج وواقع المصنع",
            "تقديم تقارير معايرة منتهية الصلاحية",
            "عدم وجود إثبات دفع رسوم BIS",
            "مخططات تدفق العملية غير مكتملة أو غامضة",
            "تناقضات في التسمية بين الوثائق",
          ]}
        />
      </div>
    </section>
  );
};

const ArabicProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          العملية
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        عملية الحصول على شهادة BIS خطوة بخطوة بموجب نظام FMCS
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نظرة عامة على رحلة الحصول على شهادة BIS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        عملية الحصول على شهادة BIS بموجب نظام تصنيع المصانع الأجنبية (FMCS) هي
        عملية منهجية ومنظمة ومتعددة المراحل. تضمن أن المنتجات تتوافق مع المعايير
        الهندية المعمول بها، وأن عمليات التصنيع قوية، وأن الاختبارات دقيقة.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        جدول ملخص للعملية خطوة بخطوة
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                الخطوة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              {
                step: "1",
                description: "تقديم الطلب إلى قسم FMCD في BIS",
              },
              {
                step: "2",
                description: "فحص الوثائق والمراجعة الأولية",
              },
              {
                step: "3",
                description: "حل الاستفسارات وتقديم التوضيحات",
              },
              {
                step: "4",
                description: "تعيين مدقق فني من BIS",
              },
              {
                step: "5",
                description: "جدولة تفتيش المصنع والتنسيق عبر AIR",
              },
              {
                step: "6",
                description: "تفتيش المصنع وختم العينات بواسطة مدقق BIS",
              },
              {
                step: "7",
                description: "اختبار المنتج داخليًا (إذا كان مطبقًا)",
              },
              {
                step: "8",
                description:
                  "اختبار العينات المختمة في معامل معتمدة من BIS في الهند",
              },
              {
                step: "9",
                description: "مراجعة تقارير الاختبار ونتائج التفتيش",
              },
              {
                step: "10",
                description: "إصدار ترخيص BIS واستخدام علامة ISI",
              },
            ].map((step) => (
              <TableRow key={step.step} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {step.step}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {step.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="مخطط عملية شهادة BIS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الإطار الزمني للحصول على شهادة BIS
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        المدة النموذجية من تقديم الطلب حتى الحصول على الشهادة
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تستغرق عملية الحصول على شهادة BIS بموجب نظام FMCS بشكل عام حوالي 120 يوم
        عمل (حوالي 3-4 أشهر) من تاريخ تقديم الطلب الصحيح. غالبًا ما تحدث
        التأخيرات عندما تكون الوثائق غير واضحة أو إذا لم يكن المصنع جاهزًا
        للتفتيش.
      </p>
    </section>
  );
};

const ArabicCostingSection = () => {
  return (
    <section id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التكلفة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        شرح هيكل تكاليف شهادة BIS
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نظرة عامة على تكاليف شهادة BIS
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الحصول على شهادة BIS في إطار مخطط شهادة المصنعين الأجانب (FMCS) ينطوي
        على عدة أنواع من التكاليف. تغطي هذه التكاليف كل شيء من تقديم الطلب
        والمراجعات إلى اختبار المنتجات واستخدام العلامات.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يجب على المصنعين الأجانب وضع ميزانية كافية لضمان المدفوعات في الوقت
        المناسب، حيث أن عدم الدفع يمكن أن يؤدي إلى رفض شهادة BIS في منتصف
        الطريق.
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                فئة التكلفة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الطلب (1000 روبية هندية)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تُدفع أثناء تقديم نموذج طلب FMCS للحصول على BIS الهندية
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم المراجعة (7000 روبية هندية)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                تغطي سفر مراجع BIS ومعدلات اليوم الواحد والمصاريف ذات الصلة
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم اختبار المنتج (حسب المنتج)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                لاختبار العينات المختومة في المختبرات المعترف بها من قبل BIS في
                الهند
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الترخيص (1000 روبية هندية)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم لمرة واحدة تُدفع عند منح شهادة BIS
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم العلامة التجارية (حسب المنتج)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                رسوم سنوية لاستخدام علامة ISI على المنتجات المعتمدة
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ضمان الأداء المصرفي (10,000 دولار أمريكي)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ضمان مالي يُودع عبر بنك هندي لضمان الامتثال
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const ArabicSurveillanceSection = () => {
  return (
    <section id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          المراقبة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        متطلبات المراقبة والامتثال بعد الحصول على شهادة BIS
      </h3>

      {/* <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نظرة عامة
      </p> */}

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        بمجرد منح شهادة BIS، لا تنتهي المسؤولية عند هذا الحد. تتضمن شهادة BIS
        نظام مراقبة وامتثال مستمر لضمان الالتزام المستمر بالمعايير الهندية. هذه
        المرحلة التي تلي الحصول على الشهادة أمر بالغ الأهمية للحفاظ على ترخيص
        BIS الخاص بك، والاحتفاظ بالحق في استخدام علامة ISI، وتجنب العقوبات
        القانونية أو التعليق.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        المكونات الرئيسية للمراقبة بعد الحصول على شهادة BIS مراقبة السوق: أخذ
        عينات عشوائية من المنتجات من السوق الهندي لإجراء اختبارات مختبرية
        مستقلة، وفي حالة فشل العينة يتم تعليق شهادة BIS. يتم ذلك مرتين كل عام.
      </p>
    </section>
  );
};

const ArabicFacilitatorSection = () => {
  return (
    <section id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الميسر
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        لماذا تختار استشاري شهادة BIS؟
      </h3>

      {/* <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        مقدمة
      </p> */}

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        شهادة BIS تحت نظام تسجيل FMCS معقدة وتقنية للغاية وحساسة للوقت. بينما من
        الممكن السعي للحصول على الشهادة بشكل مستقل، فإن معظم المصنعين الأجانب
        الناجحين يعتمدون على استشاريي BIS لتبسيط الرحلة وتقليل المخاطر.
      </p>

      <p className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        ماذا يفعل استشاري BIS؟
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يوفر استشاري شهادة BIS إرشادات شاملة عبر كل خطوة من خطوات العملية.
        مسؤولياتهم الأساسية تشمل:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                المهمة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                التوثيق
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يعد ويراجع وينسق جميع المستندات المطلوبة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                دعم التطبيق
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يقدم ويتتبع طلب BIS الخاص بك
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                إعداد التدقيق
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يرشد فرق المصنع لضمان الاستعداد للتدقيق
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تنسيق العينات
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يدير ختم وشحن العينات إلى الهند
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                مساعدة الاختبار
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يتواصل مع المختبرات ويساعد في تفسير النتائج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                التجديد والمراقبة
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                يشرف على تمديدات الترخيص وفحوصات الامتثال
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يعملون كشريك استراتيجي لك، وغالباً ما يعملون كممثلك الهندي المعتمد
        (AIR).
      </p>
    </section>
  );
};

export const ArabicAboutAuthor = () => {
  return (
    <section className="">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A8781]/5 to-transparent rounded-full -translate-y-4 translate-x-4"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#125E5A]/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781]">
              حول المؤلف
            </h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1A8781]/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            {/* Author name and title */}
            <div>
              <p className="font-geist text-[16px] md:text-[20px] font-semibold text-[#131316]">
                دروف أغاروال
              </p>
              <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                رئيس العمليات في Sun Certifications India
              </p>
            </div>

            {/* Experience and achievements with subtle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">الخبرة:</span> أكثر من 10 سنوات
                  وتعامل مع أكثر من 1000 مشروع
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  حائز على جوائز من العديد من المنظمات الهندية والدولية
                </p>
              </div>
            </div>

            {/* Contact information with enhanced buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://www.linkedin.com/in/dhruv-aggarwal-44b116155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 hover:from-[#0077B5]/10 hover:to-[#0077B5]/15 rounded-lg border border-[#0077B5]/10 hover:border-[#0077B5]/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">LinkedIn:</span> تواصل معي
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">اتصل:</span>{" "}
                    admin@bis-certifications.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArabicServices = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              خدماتنا
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                أفضل استشاري شهادات في الهند
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
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للمصنعين الأجانب
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادة تسجيل CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              تسجيل BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              إدارة النفايات البلاستيكية
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادات EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادات LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادة تسجيل BIS
            </p>
          </Link>

          <Link
            to="/bis-isi-mark-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة ISI (BIS) للمصنعين الهنود
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ArabicServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          لا يمكنك العثور على الإجابة التي تبحث عنها؟{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            تواصل معنا!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ما هي شهادة BIS ولماذا من المهم للمصنعين الأجانب الحصول على BIS
                الهندي؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                شهادة BIS هي عملية تنظيمية يقوم بها مكتب المعايير الهندية لضمان
                أن المنتجات تلبي المعايير الهندية. وهي ضرورية للمصنعين الأجانب
                للحصول على وصول إلى السوق والتخليص الجمركي وثقة المستهلك في
                الهند.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ماذا تمثل علامة ISI؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تشير علامة ISI إلى المطابقة لمعيار هندي محدد. وهي إلزامية
                للمنتجات تحت شهادة BIS ويجب طباعتها على التغليف والمنتجات.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل شهادة BIS إلزامية لجميع الواردات إلى الهند؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                لا. شهادة BIS إلزامية للمنتجات المدرجة تحت نظام شهادة BIS الهندي
                الإلزامي. ومع ذلك، الشهادة الطوعية متاحة للمنتجات الأخرى.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                من يمكنه التقدم للحصول على شهادة BIS تحت FMCS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                فقط المصنعون الأجانب الفعليون (وليس المستوردون أو التجار) يمكنهم
                التقدم. الممثل الهندي المعتمد (AIR) إلزامي لتمثيلهم في الهند.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                كم من الوقت يستغرق الحصول على شهادة BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تستغرق عملية شهادة BIS تحت FMCS في المتوسط 120 يوماً، اعتماداً
                على جاهزية المستندات وجدولة التدقيق وأوقات الاختبار.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ما هي التكاليف الرئيسية المتضمنة في شهادة BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تشمل التكاليف رسوم التطبيق ورسوم التدقيق ورسوم اختبار المختبر
                ورسوم الترخيص والعلامات وضمان الأداء المصرفي (PBG) من بنك هندي
                معتمد من RBI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل يمكن تجديد ترخيص BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                نعم. ترخيص BIS صالح عموماً لمدة 1-2 سنة ويمكن تجديده عند الوفاء
                بمتطلبات الامتثال وتحديث المستندات.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ماذا يحدث إذا فشل المنتج أثناء اختبار مختبر BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                إذا فشل المنتج، قد يسمح BIS بالإجراء التصحيحي وإعادة الاختبار.
                الفشل المستمر يمكن أن يؤدي إلى رفض الطلب.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل من الضروري توظيف استشاري شهادة BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                ليس إلزامياً ولكن موصى به بشدة. يساعد الاستشاري في تقليل التأخير
                وإدارة الامتثال وتحسين فرص الموافقة من خلال ضمان التوافق الكامل
                مع بروتوكولات BIS.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل يمكن تعليق أو إلغاء ترخيص BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                نعم. قد يعلق BIS أو يلغي الترخيص لعدم الامتثال أو فشل المنتج أو
                إساءة استخدام شعار ISI أو تناقضات التدقيق.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ما هي المستندات المطلوبة لعملية شهادة BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تشمل المستندات نموذج طلب FMCS وتقارير الاختبار وقوائم المعدات
                وشهادات المعايرة وتخطيط المصنع وخطاب تعيين AIR وإثبات دفع
                الرسوم.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل يمكن لممثل هندي معتمد واحد تمثيل طلبات BIS متعددة؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                نعم، بشرط أن يكونوا مخولين لكل مشروع ولديهم القدرة على التعامل
                مع التوثيق والتدقيق والتواصل لكل شهادة.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                ما هو دور ضمان الأداء المصرفي؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                ضمان الأداء المصرفي يؤكد لـ BIS أن المصنع سيلتزم بالمعايير
                الهندية. وهو قابل للاسترداد عند إلغاء الترخيص وإلزامي لجميع
                طلبات FMCS للحصول على BIS الهندي.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                هل شهادة BIS معترف بها خارج الهند؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                بينما شهادة BIS هي معيار هندي، فهي محترمة في سياقات التجارة في
                العديد من المناطق التي تقبل الامتثال الهندي، خاصة في آسيا
                وأفريقيا.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                كيف أعرف إذا كان منتجي يتطلب شهادة BIS؟
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تحقق من القائمة المحدثة على موقع BIS الرسمي أو استشر استشاري BIS
                للتحقق مما إذا كان منتجك يندرج تحت الشهادة الإلزامية.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export const ArabicFooter = () => {
  return (
    <footer>
      <div className="relative ">
        <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-16 md:pb-16 mx-auto">
          <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
            تريد معرفة المزيد؟
          </h3>

          <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
            راسلنا على{" "}
            <span className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4">
              admin@bis-certifications.com
            </span>{" "}
            أو استخدم أحد الخيارات أدناه. عادة نرد خلال 24 ساعة.
          </div>

          <div className="flex items-center my-6 md:my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              أو
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/918010505057"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a
                href="tel:+918010505057"
                rel="noreferrer noopener"
                aria-label="اتصل بنا على +91 80105 05057"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"></path>
                </svg>
                <span className="sr-only">Call</span>
              </a>

              <a
                href="https://www.linkedin.com/company/sun-consultants-engineers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="زر صفحتنا على لينكد إن"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px] ">
            {/* Company Logo */}
            <div className="flex flex-col gap-[20px] md:gap-[25px]">
              <div
                className=" selection:bg-emerald-600 flex md:space-x-2.5 
               text-2xl font-bold text-center text-neutral-600"
              >
                <img
                  src="/company-logo/company-logo.webp"
                  alt="شهادات الشمس الهند"
                  className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                />
                <Link to="/" className="text-center">
                  <h2 className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
                    شهادات الشمس الهند
                  </h2>
                  <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-normal">
                    تبسيط الشهادات
                  </p>
                </Link>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                  اشترك في نشرتنا الإخبارية
                </div>

                <div className="relative">
                  <input
                    className="w-full bg-[white] disabled:cursor-not-allowed rounded focus:outline-none focus:outline-transparent ring-1 ring-inset focus:ring-2 focus:ring-inset 
                text-sm md:text-base py-2 px-3 h-9 text-neutral-700
                ring-neutral-300
                placeholder:text-neutral-400
                focus:ring-neutral-700
                pr-24 
                border border-[#7eafd9]
                "
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                  <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                    <div className="text-[#2a5075]">أعلمني</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
              <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  العنوان
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    برج ITL التوأم، نيتاجي سوباش بليس، بيتامبورا دلهي - 110034
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  خدماتنا
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/information-about-tec-certificate-mtcte"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    TEC
                  </Link>
                  <Link
                    to="/bis-isi-mark-certification"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    علامة ISI
                  </Link>
                  <Link
                    to="/ce-certification"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    شهادة CE
                  </Link>
                  <Link
                    to="/a-guide-on-how-to-obtain-epr-certificate"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    EPR
                  </Link>
                  <Link
                    to="/restriction-of-hazardous-substance-rohs-certificate"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    ROHS
                  </Link>

                  <Link
                    to="/information-about-wpc-certificate-eta-approval"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    WPC
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  الشركة
                </span>
                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/about"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    عنا
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    اتصل بنا
                  </Link>

                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    الأسئلة الشائعة
                  </span>
                  <Link
                    to="/sitemap"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }, 100);
                    }}
                  >
                    خريطة الموقع
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  الأخبار والإشعارات
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    المدونات
                  </Link>
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    آخر التحديثات
                  </Link>
                  <Link
                    to="/ministry-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    تحديثات الوزارة
                  </Link>
                  <Link
                    to="/webinar"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    تحديثات الندوات الإلكترونية
                  </Link>
                  <Link
                    to="/international-audits"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    المعرض
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border border-[#7eafd9] mt-8 md:mt-0"></div>
          <div className="flex flex-col md:flex-row  items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
            <div className="flex gap-3 flex-wrap items-center justify-center">
              <a
                href="https://www.linkedin.com/company/sun-certifications-india/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="زر ملفنا الشخصي على جيت هاب"
              >
                <LinkedInLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">LinkedIn</span>
              </a>



              <a
                href="mailto:admin@bis-certifications.com?body=Hello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="أرسل لنا بريد إلكتروني"
              >
                <MailPlus className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">Email</span>
              </a>

              <a
                href="https://www.instagram.com/suncertificationsindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تابعنا على إنستغرام"
              >
                <InstagramLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <button className="flex items-center justify-center h-9 px-4 py-2 gap-x-1 rounded-full border border-[#7eafd9] bg-gray-50 hover:bg-[#E3EFF4] transition-all duration-200">
              <span className="text-[13px] md:text-[15px] text-[#2a5075] font-geist leading-[20px] font-medium">
                العربية
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="shrink-0 !size-3 md:!size-4 text-[#2a5075]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </button>

            <span className="text-[#2a5075] font-geist text-[13px] md:text-base text-center">
              حقوق الطبع والنشر © 2025 شهادات الشمس الهند. جميع الحقوق محفوظة.
            </span>

            <div className="md:hidden flex items-center gap-2">
              <Link
                to="/privacy-policy"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                سياسة الخصوصية
              </Link>
              <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
              <Link
                to="/terms-and-conditions"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                شروط الخدمة
              </Link>
            </div>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/privacy-policy"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              سياسة الخصوصية
            </Link>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/terms-and-conditions"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </h3>
      <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};