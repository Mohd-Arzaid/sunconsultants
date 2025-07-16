import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { useTranslation } from "react-i18next";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServiceContactForm = () => {
  const { t } = useTranslation("BISFM");
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

    // BIS Certification
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
    if (path.includes("a-guide-to-bis-certification-indian-bis"))
      return "ISI Mark Indian";

    if (path.includes("/de/leitfaden-zur-bis-zertifizierung-indisches-bis"))
      return "ISI Mark Indian";

    if (path.includes("/en/a-guide-to-bis-certification-indian-bis"))
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
        title: t("contactForm.messages.nameError"),
        description: t("contactForm.messages.nameErrorDesc"),
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const domain = email.split("@")[1];

    if (!emailRegex.test(email) || !commonDomains.includes(domain)) {
      toast({
        variant: "destructive",
        title: t("contactForm.messages.emailError"),
        description: t("contactForm.messages.emailErrorDesc"),
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
        title: t("contactForm.messages.phoneError"),
        description: t("contactForm.messages.phoneErrorDesc"),
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
        title: t("contactForm.messages.success"),
        description: t("contactForm.messages.successDesc"),
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
        title: errorMessage || t("contactForm.messages.generalError"),
        description: t("contactForm.messages.generalErrorDesc"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          {t("contactForm.badge")}
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        {t("contactForm.title")}
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        {t("contactForm.subtitle")}
        <span className="text-black"> {t("contactForm.tryNow")}</span>
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
            placeholder={t("contactForm.placeholders.fullName")}
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder={t("contactForm.placeholders.email")}
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
            placeholder={t("contactForm.placeholders.phoneNumber")}
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder={t("contactForm.placeholders.companyName")}
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
            placeholder={t("contactForm.placeholders.productName")}
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder={t("contactForm.placeholders.certification")}
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
              <span>{t("contactForm.sending")}</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span> {t("contactForm.button")}</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ServiceContactForm;
