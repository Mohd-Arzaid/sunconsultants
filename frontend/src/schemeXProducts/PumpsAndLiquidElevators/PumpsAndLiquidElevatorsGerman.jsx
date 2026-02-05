import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SlashIcon,
  PhoneCall,
  User,
  Phone,
  Mail,
  Linkedin,
  MessageCircle,
  SendHorizontal,
  MailPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";

const PumpsAndLiquidElevatorsGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge unter der Omnibus Technical Regulation Order 2024 schreibt vor, dass alle Arten von Pumpen und Flüssigkeitsaufzügen bis September 2026 der Scheme X Zertifizierung entsprechen müssen"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Pumpen, BIS Scheme X Zertifizierung für Pumpen, Scheme X Zertifizierung für Pumpen, BIS für Pumpen, BIS Zertifizierung für Pumpen und Flüssigkeitsaufzüge, OTR für Pumpen"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Leiter der Operationen bei Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzverfahren, ISI-Kennzeichnungsanforderungen und wie Sie vor der September 2026 Frist zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Scheme X Zertifizierung für Pumpen und Flüssigkeitsaufzüge in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzverfahren, ISI-Kennzeichnungsanforderungen und wie Sie vor der September 2026 Frist zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
        />

        {/* HrefLang Tags */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
        />
        <link
          rel="alternate"
          hrefLang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
        />
        <link
          rel="alternate"
          hrefLang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
        />
      </Helmet>

      <PumpsAndLiquidElevatorsGermanPageBreadcrumb />
      <PumpsAndLiquidElevatorsGermanPageMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default PumpsAndLiquidElevatorsGerman;

export const FooterGerman = () => {
  return (
    <footer>
      <div className="relative ">
        <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-16 md:pb-16 mx-auto">
          <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
            Möchten Sie mehr erfahren?
          </h3>

          <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
            Senden Sie uns eine E-Mail an{" "}
            <a
              href="mailto:info@sunconsultants.co.in"
              className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4 hover:text-blue-900 transition-colors duration-200"
            >
              info@sunconsultants.co.in
            </a>{" "}
            oder nutzen Sie eine der unten stehenden Optionen. Wir melden uns
            normalerweise innerhalb von 24 Stunden zurück.
          </div>

          <div className="flex items-center my-6 md:my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              oder
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/918766262463"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
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
                aria-label="Call us at +91 80105 05057"
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
                aria-label="Visit our LinkedIn page"
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
                  alt="Sun Certifications India logo"
                  title="Sun Certifications India logo"
                  className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                />
                <Link to="/" className="text-center">
                  <div className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
                    Sun Certifications India
                  </div>
                  <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-roboto font-normal min-h-[10px] md:min-h-[13px]">
                    Simplifying Certifications
                  </p>
                </Link>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                  Abonnieren Sie unseren Newsletter
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
                    placeholder="Geben Sie Ihre E-Mail ein"
                  />
                  <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                    <div className="text-[#2a5075]">Benachrichtigen</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
              <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Adresse
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    ITL Twin Tower, Netaji Subhash Place , Pitampura Delhi -
                    110034
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Unsere Dienstleistungen
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/information-about-tec-certificate-mtcte"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    TEC
                  </Link>
                  <Link
                    to="/a-guide-to-bis-certification-indian-bis"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    ISI MARK
                  </Link>
                  <Link
                    to="/ce-certification"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    CE CERTIFICATION
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
                  Unternehmen
                </span>
                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/about"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Über uns
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Kontaktieren Sie uns
                  </Link>

                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Häufige Fragen
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
                    Sitemap
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Nachrichten & Benachrichtigungen
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Neueste Updates
                  </Link>
                  <Link
                    to="/ministry-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Ministeriums-Updates
                  </Link>
                  <Link
                    to="/webinar"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Webinar-Updates
                  </Link>
                  <Link
                    to="/international-audits"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Galerie
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
                aria-label="Visit our GitHub profile"
              >
                <LinkedInLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">linkedin</span>
              </a>

              <a
                href="mailto:info@sunconsultants.co.in?body=Hello"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send us an email"
              >
                <MailPlus className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">Email</span>
              </a>

              <a
                href="https://www.instagram.com/suncertificationsindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <InstagramLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <button className="flex items-center justify-center h-9 px-4 py-2 gap-x-1 rounded-full border border-[#7eafd9] bg-gray-50 hover:bg-[#E3EFF4] transition-all duration-200">
              <span className="text-[13px] md:text-[15px] text-[#2a5075] font-geist leading-[20px] font-medium">
                Deutsch (DE)
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
              Copyright © 2025 Sun Certifications India. All Rights Reserved.
            </span>

            <div className="md:hidden flex items-center gap-2">
              <Link
                to="/privacy-policy"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                Datenschutzrichtlinie
              </Link>
              <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
              <Link
                to="/terms-and-conditions"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                Nutzungsbedingungen
              </Link>
            </div>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/privacy-policy"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              Datenschutzrichtlinie
            </Link>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/terms-and-conditions"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              Nutzungsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ServicesGerman = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifikatsberater
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Zeichen (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO logo"
                title="CDSCO logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registrierung
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement logo"
                title="PlasticWasteManagement logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfallmanagement
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Registrierungszertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-ZEICHEN (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsGermanPageBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Startseite</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">SchemeX Produkte</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  BIS Scheme X Zertifizierung für Pumpen und
                  Flüssigkeitshebevorrichtungen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsGermanPageMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentLeftGerman />

        {/* Right Side Content */}
        {/* <PumpsAndLiquidElevatorsPageMainContentRightGerman /> */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentLeftGerman = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Zertifizierung für Pumpen und
          Flüssigkeitshebevorrichtungen in Indien
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="BIS License for Pumps and Liquid Elevators"
            title="BIS License for Pumps and Liquid Elevators"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Das schnelle Industrie- und Infrastrukturwachstum in Indien erfordert
          Maschinen, die mehr leisten und die Erfüllung nationaler und
          internationaler Nachfrage sicherstellen. Pumpen und
          Flüssigkeitshebevorrichtungen sind entscheidend für Wasserressourcen,
          Landwirtschaft, Bauwesen, Energie, Industrie und viele andere
          Bereiche. Ein defektes Gerät kann die Sicherheit gefährden, den
          Betrieb stören und finanzielle Verluste verursachen, wenn es nicht
          nach den richtigen Spezifikationen mit Qualitätskontrolle hergestellt
          wird.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Um dies zu kontrollieren, hat das BIS (Bureau of Indian Standards) die
          Scheme X Zertifizierung eingeführt, die es erforderlich macht, dass
          jede Pumpe und Flüssigkeitshebevorrichtung den nationalen
          Qualitätsstandard erfüllt, bevor sie in Indien verkauft wird.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Beitrag möchten wir die Bedeutung der BIS-Zertifizierung für
          Pumpen, die Bedeutung der Omnibus Technical Regulation (OTR) 2024 und
          den Prozess zur Erlangung einer BIS-Lizenz für Pumpen unter Scheme X
          für angehende Hersteller behandeln.
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum Pumpen und Flüssigkeitshebevorrichtungen wichtig sind
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pumpen
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pumpen sind unverzichtbare Geräte für den Transport von Flüssigkeiten
          oder Schlämmen in verschiedenen Industrien. Sie werden weit verbreitet
          eingesetzt in:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Landwirtschaft und Bewässerungssysteme</li>
          <li>Öffentliche Wasserversorgung und Haushaltsnutzung</li>
          <li>Abwasser- und Kläranlagen</li>
          <li>Öl- und Gaspipelines</li>
          <li>Klimaanlagen und industrielle Kühlsysteme</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Flüssigkeitshebevorrichtungen
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hebepumpen, vertikale Flüssigkeitshebevorrichtungen zum Heben von
          Flüssigkeiten dienen zum Pumpen:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Hochmassen-Wasserverteilungssysteme</li>
          <li>Industrielle Silos/Lagertanks</li>
          <li>In der Energie-, Chemie- und Verfahrensindustrie</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Da sie weit verbreitet sind, können billige Pumpen oder
          Flüssigkeitsheber verursachen:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mechanische Ausfälle</li>
          <li>Elektrische Gefahren</li>
          <li>Leckagen und Korrosion</li>
          <li>Unfälle durch Sicherheitsrisiken und wirtschaftliche Verluste</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deshalb ist BIS für Pumpen und Flüssigkeitshebevorrichtungen ein
          dringend benötigter Schutz für Hersteller und Käufer gleichermaßen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS und was ist Scheme X?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das Bureau of Indian Standards (BIS) ist die nationale
          Normungsorganisation Indiens zur Zertifizierung der Qualität und
          Sicherheit von Produkten. Um wichtige Anlagen und Maschinen zu
          kontrollieren, hat das BIS ab dem 16. März 2022 die Scheme X
          Zertifizierung unter den BIS Conformity Assessment Regulations, 2018
          obligatorisch gemacht.
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X Zertifizierung für Pumpen - Wichtige Highlights
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatorisch für indische und ausländische Hersteller</li>
          <li>
            Gilt für Pumpen, Motoren und Flüssigkeitshebevorrichtungen unter
            indischen Standards
          </li>
          <li>
            Umfasst Labortests, Fabrikinspektionen, konsistente
            Compliance-Prüfungen
          </li>
          <li>
            Verleiht rechtliche Befugnisse zur Gewährung der Nutzung des
            BIS-Zeichens für Pumpen durch Hersteller als Nachweis der
            Zertifizierung
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Omnibus Technical Regulation (OTR) für Pumpen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die OTR 2024 wurde vom Ministerium für Schwerindustrie angekündigt,
          die alle Pumpen und Flüssigkeitshebevorrichtungen zur Einhaltung der
          Scheme X Zertifizierung verpflichtet.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Frist für die Compliance:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bis zum 1. September 2026 müssen alle Hersteller und Importeure eine
          gültige BIS-Lizenz für Pumpen unter Scheme X erhalten. Nichteinhaltung
          kann zu hohen Geldstrafen sowie zur Schließung des Verkaufs und zum
          Ausschluss von öffentlichen Ausschreibungen führen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum ist die BIS-Zertifizierung für Pumpen und
          Flüssigkeitshebevorrichtungen wichtig?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. Sicherheitsgewähr: Stellt sicher, dass die Ausrüstung für die
          Betriebsanforderungen konzipiert und gebaut ist und nicht zu folgenden
          Problemen führt:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Elektrische Störungen</li>
          <li>Leckagen und Rost</li>
          <li>Ausfälle und Maschinendefekte</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. Marktvorteil
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            BIS-zertifizierte Pumpen werden oft für öffentliche Projekte,
            Regierungsausschreibungen usw. benötigt
          </li>
          <li>
            Bietet Wettbewerbsvorteile gegenüber nicht-zertifizierten Produkten
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. Verbrauchervertrauen: Das ISI-Zeichen auf Pumpen gibt dem Käufer
          Sicherheit über die Qualität und garantiert die Effizienz des
          Produkts.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. Globale Marken erhalten einfachen Marktzugang: Ausländische OEMs
          erhalten bei Erfüllung der Scheme X Normen einfachen Zugang zu Indiens
          reguliertem Markt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Pumpen unter BIS Scheme X Registrierung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X umfasst verschiedene Pumpentypen einschließlich:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Kreiselpumpen</li>
          <li>Tauchpumpen</li>
          <li>Druckerhöhungspumpen</li>
          <li>Mehrstufige Pumpen</li>
          <li>Verdrängerpumpen</li>
          <li>Vertikale Turbinenpumpen</li>
          <li>Chemische Verfahrenspumpen</li>
          <li>Membranpumpen</li>
          <li>Schlammpumpen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder Typ muss den relevanten indischen Standards (IS-Codes)
          entsprechen, wie z.B. IS 16819:2018/ISO 12100:2010 (Sicherheit von
          Maschinen - Allgemeine Prinzipien für Design - Risikobewertung und
          Risikominderung).
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Für Flüssigkeitshebevorrichtungen umfasst die Zertifizierung:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Durchflussrate und Förderhöhe</li>
          <li>Materialkompatibilität</li>
          <li>Energieeffizienz</li>
          <li>Betriebssicherheit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Wie erhält man BIS Scheme X für Pumpen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Anwendbare Standards identifizieren: Das Angebot muss die
          entsprechenden IS-Codes spezifizieren (zum Beispiel IS 9079 für
          Tauchpumpen).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produktprüfung: Obligatorische Tests zu Leistung und Sicherheit in
          BIS-anerkannten Laboren.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabrikinspektion: BIS-Behörden inspizieren die Produktionsstätte, um
          die Umsetzung von Qualitätskontrollverfahren zu überprüfen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumentation und Antrag: Technische Spezifikationen, Prüfberichte und
          Qualitätshandbücher sind dem BIS-Antragsformular beizufügen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ausstellung des BIS-Zertifikats für Pumpen: Bei Genehmigung erhalten
          Hersteller die Lizenz zur Anwendung des BIS-Zeichens unter Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Laufende Überwachung: BIS führt regelmäßige Audits und
          Stichprobenkontrollen von Produkten durch, um die kontinuierliche
          Compliance sicherzustellen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Strafen bei Nichteinhaltung
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die bis zum 1. September 2026 keine BIS-Zertifizierung
          erhalten, werden folgenden Maßnahmen unterworfen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Verbot des Verkaufs/Imports von nicht-zertifizierten Pumpen</li>
          <li>Beschlagnahme von Artikeln und Geldstrafen</li>
          <li>Disqualifikation von Regierungs- und PSU-Aufträgen</li>
          <li>Langfristiger Reputationsschaden in INDIEN</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">Fazit:</span> Die BIS
          Scheme X Zertifizierung für Pumpen und Flüssigkeitshebevorrichtungen
          mit der OTR 2024 ist ein Meilenstein in der Standardisierung der
          indischen Industrie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für diejenigen mit Herstellungs-, Import- oder Exportgeschäften ist
          die BIS-Registrierung für Pumpen nicht nur ein gesetzlicher
          Compliance-Prozess, sondern auch eine strategische Entscheidung zur
          Gewährleistung der Sicherheitsdominanz über potenzielle Risiken, zum
          Aufbau von Verbrauchervertrauen und zum Eintritt in den erweiterten
          Markt Indiens.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Die BIS-Zertifizierung für Pumpen und Flüssigkeitshebevorrichtungen
          ist eine langfristige Investition zur Etablierung der Glaubwürdigkeit
          und des Marktes Ihres Produkts.
        </p>

        <AboutAuthorGerman />
      </div>
    </div>
  );
};

export const AboutAuthorGerman = () => {
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
              Über den Autor
            </h3>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1A8781]/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            {/* Author name and title */}
            <div>
              <p className="font-geist text-[16px] md:text-[20px] font-semibold text-[#131316]">
                Dhruv Aggarwal
              </p>
              <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                Leiter der Betriebsabteilung bei Sun Certifications India
              </p>
            </div>

            {/* Experience and achievements with subtle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">Erfahrung:</span> 10+ Jahre &
                  1000+ Projekte abgewickelt
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  Ausgezeichnet von vielen indischen und internationalen
                  Organisationen
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
                    <span className="font-medium">LinkedIn:</span> Verbinden Sie
                    sich mit mir
                  </span>
                </a>

                <a
                  href="mailto:info@sunconsultants.co.in"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Kontakt:</span>{" "}
                    info@sunconsultants.co.in
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
