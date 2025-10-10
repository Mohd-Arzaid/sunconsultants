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

const PumpsAndLiquidElevatorsThai = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>การรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลว</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="การรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลวภายใต้คำสั่งการกำกับเทคนิครวม 2024 กำหนดให้ปั้มและลิฟต์ของเหลวทุกประเภทต้องปฏิบัติตามการรับรองแผน X ภายในกันยายน 2026"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="การรับรอง BIS สำหรับปั้ม, การรับรอง BIS แผน X สำหรับปั้ม, การรับรองแผน X สำหรับปั้ม, BIS สำหรับปั้ม, การรับรอง BIS สำหรับปั้มและลิฟต์ของเหลว, OTR สำหรับปั้ม"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, หัวหน้าฝ่ายปฏิบัติการที่ Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="การรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลวในอินเดีย | คู่มือฉบับ"
        />
        <meta
          property="og:description"
          content="เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลวในอินเดีย ทำความเข้าใจการปฏิบัติ OTR 2024 กระบวนการขอใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการได้รับการรับรองก่อนกำหนดเวลากันยายน 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="การรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลวในอินเดีย | คู่มือฉบับ"
        />
        <meta
          name="twitter:description"
          content="เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS แผน X สำหรับปั้มและลิฟต์ของเหลวในอินเดีย ทำความเข้าใจการปฏิบัติ OTR 2024 กระบวนการขอใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการได้รับการรับรองก่อนกำหนดเวลากันยายน 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
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

      <PumpsAndLiquidElevatorsThaiPageBreadcrumb />
      <PumpsAndLiquidElevatorsThaiPageMainContent />
      <ServicesThai />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default PumpsAndLiquidElevatorsThai;

export const FooterThai = () => {
  return (
    <footer>
      <div className="relative ">
        <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-16 md:pb-16 mx-auto">
          <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
            ต้องการทราบข้อมูลเพิ่มเติมหรือไม่?
          </h3>

          <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
            ส่งอีเมลถึงเราได้ที่{" "}
            <a
              href="mailto:admin@bis-certifications.com"
              className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4 hover:text-blue-900 transition-colors duration-200"
            >
              admin@bis-certifications.com
            </a>{" "}
            หรือใช้ตัวเลือกใดตัวเลือกหนึ่งด้านล่าง โดยปกติเราจะตอบกลับภายใน 24
            ชั่วโมง
          </div>

          <div className="flex items-center my-6 md:my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              หรือ
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/918010505057"
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
                  alt="Sun Certifications India"
                  className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                />
                <Link to="/" className="text-center">
                  <div className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
                    Sun Certifications India
                  </div>
                  <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-normal">
                    Simplifying Certifications
                  </p>
                </Link>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                  สมัครรับจดหมายข่าวของเรา
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
                    placeholder="กรอกที่อยู่อีเมลของคุณ"
                  />
                  <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                    <div className="text-[#2a5075]">สมัคร</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
              <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  ที่อยู่
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
                  บริการของเรา
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
                  บริษัท
                </span>
                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/about"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    เกี่ยวกับเรา
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    ติดต่อเรา
                  </Link>

                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    คำถามที่พบบ่อย
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
                    แผนผังเว็บไซต์
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  ข่าวสารและการแจ้งเตือน
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    บล็อก
                  </Link>
                  <Link
                    to="/bis-qco-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    อัปเดตล่าสุด
                  </Link>
                  <Link
                    to="/ministry-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    อัปเดตกระทรวง
                  </Link>
                  <Link
                    to="/webinar"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    อัปเดตเว็บอินาร์
                  </Link>
                  <Link
                    to="/international-audits"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    แกลเลอรี
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
                href="mailto:admin@bis-certifications.com?body=Hello"
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
                ไทย (TH)
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
                นโยบายความเป็นส่วนตัว
              </Link>
              <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
              <Link
                to="/terms-and-conditions"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                เงื่อนไขการบริการ
              </Link>
            </div>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/privacy-policy"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              นโยบายความเป็นส่วนตัว
            </Link>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/terms-and-conditions"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              เงื่อนไขการบริการ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ServicesThai = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              บริการของเรา
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                ที่ปรึกษาใบรับรองที่ดีที่สุดของอินเดีย
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างชาติ
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
              การรับรองการลงทะเบียน CDSCO
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
              การลงทะเบียน BIS (CRS)
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
              การจัดการขยะพลาสติก
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
              การรับรองใบรับรอง EPR
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
              การรับรองใบรับรอง LMPC
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
              ใบรับรองการลงทะเบียน BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
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
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const AboutAuthorThai = () => {
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
              เกี่ยวกับผู้เขียน
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
                หัวหน้าฝ่ายปฏิบัติการที่ Sun Certifications India
              </p>
            </div>

            {/* Experience and achievements with subtle cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  <span className="font-medium">ประสบการณ์:</span> 10+ ปี
                  และจัดการ 1000+ โครงการ
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                  ได้รับรางวัลจากองค์กรอินเดียและนานาชาติมากมาย
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
                    <span className="font-medium">LinkedIn:</span>{" "}
                    เชื่อมต่อกับฉัน
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">ติดต่อ:</span>{" "}
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

const PumpsAndLiquidElevatorsThaiPageBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">ผลิตภัณฑ์ SchemeX</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลว
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsThaiPageMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentLeftThai />

        {/* Right Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentRightThai />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentLeftThai = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวในอินเดีย
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="BIS License for Pumps and Liquid Elevators"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          การเจริญเติบโตทางอุตสาหกรรมและโครงสร้างพื้นฐานอย่างรวดเร็วในอินเดียต้องการเครื่องจักรที่ทำงานมากขึ้นและให้ความพึงพอใจต่อความต้องการในประเทศและต่างประเทศ
          ปั๊มและลิฟต์ของเหลวมีความสำคัญต่อแหล่งน้ำ การเกษตร การก่อสร้าง พลังงาน
          อุตสาหกรรม และภาคส่วนอื่น ๆ อีกมากมาย
          อุปกรณ์ที่ผิดพลาดอาจเป็นอันตรายต่อความปลอดภัย รบกวนการดำเนินงาน
          และทำให้เกิดการสูญเสียทางการเงินหากไม่ได้ผลิตตามข้อกำหนดที่เหมาะสมพร้อมการควบคุมคุณภาพ
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อควบคุมสิ่งนี้ BIS (Bureau of Indian Standards)
          ได้เปิดตัวการรับรอง Scheme X
          ซึ่งกำหนดให้ปั๊มและลิฟต์ของเหลวทุกตัวต้องเป็นไปตามมาตรฐานคุณภาพแห่งชาติก่อนที่จะขายในอินเดีย
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบทความนี้เราวางแผนที่จะครอบคลุมความสำคัญของการรับรอง BIS สำหรับปั๊ม
          ความสำคัญของ Omnibus Technical Regulation (OTR) 2024
          และกระบวนการได้รับใบอนุญาต BIS สำหรับปั๊มภายใต้ Scheme X
          สำหรับผู้ผลิตที่มีความมุ่งหวัง
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          เหตุใดปั๊มและลิฟต์ของเหลวจึงสำคัญ
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ปั๊ม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ปั๊มเป็นอุปกรณ์ที่ขาดไม่ได้สำหรับการขนส่งของเหลวหรือโคลนผ่านอุตสาหกรรมต่าง
          ๆ มีการใช้งานอย่างแพร่หลายใน:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ระบบการเกษตรและการชลประทาน</li>
          <li>การประปาสาธารณะและการใช้งานในครัวเรือน</li>
          <li>สิ่งอำนวยความสะดวกในการบำบัดน้ำเสียและน้ำทิ้ง</li>
          <li>ท่อส่งน้ำมันและก๊าซ</li>
          <li>เครื่องปรับอากาศและระบบทำความเย็นอุตสาหกรรม</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ลิฟต์ของเหลว
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ปั๊มลิฟต์ ลิฟต์ของเหลวแนวตั้งสำหรับการยกของเหลวใช้สำหรับการสูบ:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ระบบจำหน่ายน้ำปั๊มมวลสูง</li>
          <li>ไซโลอุตสาหกรรม/ถังเก็บ</li>
          <li>ในอุตสาหกรรมพลังงาน เคมี และกระบวนการ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากเป็นเรื่องธรรมดา ปั๊มหรือลิฟต์ของเหลวราคาถูกอาจทำให้เกิด:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ความล้มเหลวทางกล</li>
          <li>อันตรายทางไฟฟ้า</li>
          <li>การรั่วไหลและการกัดกร่อน</li>
          <li>
            อุบัติเหตุที่เกิดจากความเสี่ยงด้านความปลอดภัยและการสูญเสียทางเศรษฐกิจ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ดังนั้น BIS
          สำหรับปั๊มและลิฟต์ของเหลวจึงเป็นการป้องกันที่จำเป็นมากสำหรับทั้งผู้ผลิตและผู้ซื้อ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS คืออะไร และ Scheme X คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bureau of Indian Standards (BIS)
          เป็นองค์กรมาตรฐานแห่งชาติของอินเดียสำหรับการรับรองคุณภาพและความปลอดภัยของผลิตภัณฑ์
          เพื่อควบคุมสิ่งอำนวยความสะดวกและเครื่องจักรที่สำคัญ BIS
          ได้กำหนดให้ต้องได้รับการรับรอง Scheme X ตั้งแต่วันที่ 16 มีนาคม 2022
          ภายใต้ BIS Conformity Assessment Regulations, 2018
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          จุดเด่นหลักของการรับรอง Scheme X สำหรับปั๊ม
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับใช้กับผู้ผลิตอินเดียและต่างประเทศ</li>
          <li>
            ใช้กับปั๊ม มอเตอร์ และลิฟต์ของเหลวที่ครอบคลุมภายใต้มาตรฐานอินเดีย
          </li>
          <li>
            รวมถึงการทดสอบในห้องปฏิบัติการ การตรวจสอบโรงงาน
            การตรวจสอบการปฏิบัติตามอย่างสม่ำเสมอ
          </li>
          <li>
            เพิ่มอำนาจทางกฎหมายเพื่อให้ผู้ผลิตสามารถใช้เครื่องหมาย BIS
            สำหรับปั๊มเป็นหลักฐานการรับรอง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Omnibus Technical Regulation (OTR) สำหรับปั๊ม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 2024 ได้รับการประกาศโดยกระทรวงอุตสาหกรรมหนัก
          ซึ่งกำหนดให้ปั๊มและลิฟต์ของเหลวทั้งหมดต้องปฏิบัติตามการรับรอง Scheme X
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          กำหนดเวลาสำหรับการปฏิบัติตาม:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          ภายในวันที่ 1 กันยายน 2026
          ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
          ที่ถูกต้องสำหรับปั๊มภายใต้ Scheme X
          การไม่ปฏิบัติตามอาจนำไปสู่ค่าปรับหนัก
          รวมทั้งการปิดการขายและการแยกออกจากการประมูลสาธารณะ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          เหตุใดการรับรอง BIS สำหรับปั๊มและลิฟต์ของเหลวจึงสำคัญ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. การรับประกันความปลอดภัย:
          ให้ความมั่นใจว่าอุปกรณ์ได้รับการออกแบบและสร้างสำหรับความเข้มงวดของการดำเนินงานและไม่ทำให้เกิด:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ความล้มเหลวทางไฟฟ้า</li>
          <li>การรั่วไหลและสนิม</li>
          <li>เครื่องจักรเสียและความล้มเหลว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. ข้อได้เปรียบในตลาด
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            ปั๊มที่ได้รับการรับรอง BIS มักต้องใช้สำหรับโครงการสาธารณะ
            การประมูลของรัฐบาล ฯลฯ
          </li>
          <li>
            ให้ข้อได้เปรียบในการแข่งขันเหนือผลิตภัณฑ์ที่ไม่ได้รับการรับรอง
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. ความเชื่อมั่นของผู้บริโภค: เครื่องหมาย ISI
          บนปั๊มให้ความเชื่อมั่นแก่ผู้ซื้อในคุณภาพและรับประกันประสิทธิภาพของผลิตภัณฑ์
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. แบรนด์ระดับโลกได้รับการเข้าถึงตลาดที่ง่าย: OEM
          ต่างประเทศได้รับการเข้าถึงที่ง่ายไปยังตลาดที่มีการควบคุมของอินเดียโดยการปฏิบัติตามมาตรฐาน
          Scheme X
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทของปั๊มภายใต้การลงทะเบียน BIS Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X ครอบคลุมปั๊มหลายประเภทรวมถึง:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ปั๊มหอยโข่ง</li>
          <li>ปั๊มจุ่ม</li>
          <li>ปั๊มเพิ่มแรงดัน</li>
          <li>ปั๊มหลายขั้น</li>
          <li>ปั๊มการเคลื่อนที่เชิงบวก</li>
          <li>ปั๊มกังหันแนวตั้ง</li>
          <li>ปั๊มกระบวนการเคมี</li>
          <li>ปั๊มไดอะแฟรม</li>
          <li>ปั๊มโคลน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละประเภทต้องเป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS) เช่น IS
          16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร -
          หลักการทั่วไปสำหรับการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          สำหรับลิฟต์ของเหลว การรับรองครอบคลุม:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>อัตราการไหลและความสูงในการยก</li>
          <li>ความเข้ากันได้ของวัสดุ</li>
          <li>ประสิทธิภาพพลังงาน</li>
          <li>ความปลอดภัยในการดำเนินงาน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          วิธีการได้รับ BIS Scheme X สำหรับปั๊ม?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ระบุมาตรฐานที่ใช้บังคับ: ใบเสนอราคาต้องระบุรหัส IS ที่ถูกต้อง (เช่น IS
          9079 สำหรับปั๊มจุ่ม)
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบผลิตภัณฑ์:
          การทดสอบประสิทธิภาพและความปลอดภัยที่บังคับในห้องปฏิบัติการที่ BIS
          ยอมรับ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การตรวจสอบโรงงาน: เจ้าหน้าที่ BIS
          ตรวจสอบสถานที่ผลิตเพื่อตรวจสอบการใช้งานขั้นตอนการควบคุมคุณภาพ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารและใบสมัคร: ข้อกำหนดทางเทคนิค รายงานการทดสอบ
          และคู่มือคุณภาพต้องมาพร้อมกับแบบฟอร์มใบสมัคร BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การออกใบรับรอง BIS สำหรับปั๊ม:
          ผู้ผลิตจะได้รับใบอนุญาตในการใช้เครื่องหมาย BIS ภายใต้ Scheme X
          หลังจากได้รับการอนุมัติ
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          การเฝ้าระวังอย่างต่อเนื่อง: BIS
          ดำเนินการตรวจสอบเป็นประจำและการตรวจสอบผลิตภัณฑ์แบบสุ่มเพื่อให้แน่ใจว่ามีการปฏิบัติตามอย่างต่อเนื่อง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ไม่สามารถได้รับการรับรอง BIS ภายในวันที่ 1 กันยายน 2026
          จะต้องเผชิญ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามขาย/นำเข้าปั๊มที่ไม่ได้รับการรับรอง</li>
          <li>การยึดสินค้าและค่าปรับ</li>
          <li>การตัดสิทธิ์จากคำสั่งซื้อของรัฐบาลและ PSU</li>
          <li>ความเสียหายต่อชื่อเสียงระยะยาวในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">บทสรุป:</span> การรับรอง
          BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวพร้อมกับ OTR 2024
          ที่จะใช้บังคับ; เป็นก้าวสำคัญในการสร้างมาตรฐานอุตสาหกรรมของอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ที่มีกิจกรรมการผลิต การนำเข้า หรือการส่งออก การลงทะเบียน BIS
          สำหรับปั๊มไม่เพียงแต่เป็นกระบวนการปฏิบัติตามกฎหมายที่ต้องดำเนินการให้เสร็จสิ้น
          แต่ยังเป็นการตัดสินใจเชิงกลยุทธ์เพื่อให้แน่ใจว่ามีการควบคุมความปลอดภัยเหนือความเสี่ยงที่อาจเกิดขึ้น
          สร้างความเชื่อมั่นของผู้บริโภค และเข้าถึงตลาดที่กว้างขวางของอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS
          ของปั๊มและลิฟต์ของเหลวเป็นการลงทุนระยะยาวเพื่อสร้างข้อมูลประจำตัวของผลิตภัณฑ์และตลาดของคุณ
        </p>

        <AboutAuthorThai />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentRightThai = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Get current page URL and name for form submission
  const currentUrl = window.location.href;
  const currentPageName =
    "SchemeX Product - BIS Certification for Pumps & Liquid Elevators (Thai)";

  // Add BASE_URL like other forms
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use BASE_URL like other forms
      const response = await fetch(`${BASE_URL}/contact/submit-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: currentUrl,
          pageName: currentPageName,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "ขอบคุณ! เราจะติดต่อกลับภายใน 24 ชั่วโมง",
        });
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Header */}
        <div className="flex gap-2 items-center">
          <PhoneCall className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            ขอการโทรกลับฟรี
          </div>
        </div>

        {/* Intro Text */}
        <p className="mt-3 text-sm text-gray-600 font-geist">
          ฝากข้อมูลของคุณไว้ด้านล่าง และผู้เชี่ยวชาญของเราจะโทรกลับภายใน 24
          ชั่วโมงเพื่อหารือเกี่ยวกับความต้องการการปฏิบัติตามกฎระเบียบของคุณ
        </p>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm font-geist ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

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
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="ชื่อของคุณ*"
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
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="หมายเลขโทรศัพท์*"
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
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="ที่อยู่อีเมล*"
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
              value={formData.message}
              onChange={handleInputChange}
              placeholder="การรับรองที่ต้องการ*"
              rows="3"
              required
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center">
              {isSubmitting ? "กำลังส่ง..." : "ขอการโทรกลับ"}
              <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </form>

        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500 font-geist">
          การส่งแบบฟอร์มนี้ คุณยอมรับ{" "}
          <a href="#" className="text-blue-600 hover:underline">
            นโยบายความเป็นส่วนตัว
          </a>{" "}
          ของเรา และยินยอมให้ติดต่อ
        </p>
      </div>
    </div>
  );
};
