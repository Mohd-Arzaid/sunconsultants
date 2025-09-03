import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SlashIcon, PhoneCall, User, Phone, Mail, Linkedin, MessageCircle, SendHorizontal, MailPlus } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

import BISImage from "../assets/images/BIS.jpg";
import CDSCO from "../assets/images/CDSCO.jpg";
import BISCRS from "../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../assets/images/EPRCertificate.jpg";
import LMPC from "../assets/images/LMPC.jpg";
import ISIMark from "../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal"
import { Separator } from "@/components/ui/separator"
import {
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import VideoSection from "@/components/manual/home-page-sections/VideoSection"


const PumpsAndLiquidElevatorsArabic = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>شهادة BIS مخطط X للمضخات ومصاعد السوائل</title>

                {/* Meta Description */}
                <meta name="description" content="شهادة BIS مخطط X للمضخات ومصاعد السوائل تحت أمر اللائحة التقنية الشاملة 2024 تفرض أن جميع أنواع المضخات ومصاعد السوائل يجب أن تتوافق مع شهادة مخطط X بحلول سبتمبر 2026" />

                {/* Meta Keywords */}
                <meta name="keywords" content="شهادة BIS للمضخات, شهادة BIS مخطط X للمضخات, شهادة مخطط X للمضخات, BIS للمضخات, شهادة BIS للمضخات ومصاعد السوائل, OTR للمضخات" />
                <meta name="author" content="Sun Certifications India" />
                <meta name="publisher" content="Dhruv Aggarwal, رئيس العمليات في Sun Certification India" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="شهادة BIS مخطط X للمضخات ومصاعد السوائل في الهند | دليل شامل" />
                <meta property="og:description" content="تعلم كل شيء عن شهادة BIS مخطط X للمضخات ومصاعد السوائل في الهند. افهم امتثال OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026" />
                <meta property="og:url" content="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail" />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content="شهادة BIS مخطط X للمضخات ومصاعد السوائل في الهند | دليل شامل" />
                <meta name="twitter:description" content="تعلم كل شيء عن شهادة BIS مخطط X للمضخات ومصاعد السوائل في الهند. افهم امتثال OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail" />

                {/* HrefLang Tags */}
                <link rel="alternate" hrefLang="en" href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators" />
                <link rel="alternate" hrefLang="de" href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege" />
                <link rel="alternate" hrefLang="es" href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos" />
                <link rel="alternate" hrefLang="fr" href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides" />
                <link rel="alternate" hrefLang="id" href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan" />
                <link rel="alternate" hrefLang="it" href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi" />
                <link rel="alternate" hrefLang="ja" href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa" />
                <link rel="alternate" hrefLang="ko" href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi" />
                <link rel="alternate" hrefLang="nl" href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators" />
                <link rel="alternate" hrefLang="th" href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam" />
                <link rel="alternate" hrefLang="vi" href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long" />
                <link rel="alternate" hrefLang="ar" href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail" />
                <link rel="alternate" hrefLang="x-default" href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators" />
            </Helmet>

            <PumpsAndLiquidElevatorsArabicPageBreadcrumb />
            <PumpsAndLiquidElevatorsArabicPageMainContent />
            <ServicesArabic />
            <VideoSection />
            <FooterArabic />
        </div>
    )
}

export default PumpsAndLiquidElevatorsArabic


export const FooterArabic = () => {
    return (
        <footer>
            <div className="relative ">
                <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-16 md:pb-16 mx-auto">
                    <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
                        هل تريد معرفة المزيد؟
                    </h3>

                    <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
                        أرسل لنا بريدًا إلكترونيًا على{" "}
                        <a
                            href="mailto:admin@bis-certifications.com"
                            className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4 hover:text-blue-900 transition-colors duration-200"
                        >
                            admin@bis-certifications.com
                        </a>{" "}
                        أو استخدم أحد الخيارات أدناه. نحن نرد عادة خلال 24 ساعة.
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
                                        placeholder="أدخل عنوان بريدك الإلكتروني"
                                    />
                                    <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                                        <div className="text-[#2a5075]">
                                            اشتراك
                                        </div>
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
                                        ITL Twin Tower, Netaji Subhash Place , Pitampura Delhi - 110034
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
                                    الشركة
                                </span>
                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <Link
                                        to="/about"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        معلومات عنا
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
                                        المدونة
                                    </Link>
                                    <Link
                                        to="/bis-qco-updates"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        أحدث التحديثات
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
                                        تحديثات الندوة عبر الإنترنت
                                    </Link>
                                    <Link
                                        to="/international-audits"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        معرض الصور
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
                                العربية (AR)
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
    )
}

export const ServicesArabic = () => {
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
                                أفضل مستشار شهادات في الهند
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
                            شهادات شهادة EPR
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
                            شهادات شهادة LMPC
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
                            علامة ISI (BIS) للمصنعين الهنود
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export const AboutAuthorArabic = () => {
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
                            عن المؤلف
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
                                رئيس العمليات في Sun Certifications India
                            </p>
                        </div>

                        {/* Experience and achievements with subtle cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                    <span className="font-medium">الخبرة:</span>{" "}
                                    أكثر من 10 سنوات وإدارة أكثر من 1000 مشروع
                                </p>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                    حائز على جوائز من منظمات هندية ودولية عديدة
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
                                        تواصل معي
                                    </span>
                                </a>

                                <a
                                    href="mailto:admin@bis-certifications.com"
                                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                                >
                                    <Mail className="w-4 h-4 text-[#1A8781]" />
                                    <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                        <span className="font-medium">
                                            الاتصال:
                                        </span>{" "}
                                        admin@bis-certifications.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const PumpsAndLiquidElevatorsArabicPageBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/SchemeX-Products">
                                        منتجات SchemeX
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    شهادة BIS Scheme X للمضخات ومصاعد السوائل
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const PumpsAndLiquidElevatorsArabicPageMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">

                {/* Left Side Content */}
                <PumpsAndLiquidElevatorsPageMainContentLeftArabic />

                {/* Right Side Content */}
                <PumpsAndLiquidElevatorsPageMainContentRightArabic />
            </div>
        </div>
    )
}

const PumpsAndLiquidElevatorsPageMainContentLeftArabic = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">

            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    شهادة BIS Scheme X للمضخات ومصاعد السوائل في الهند
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    النمو الصناعي والبنية التحتية السريع في الهند يتطلب آلات تعمل أكثر وتوفر الرضا للطلب المحلي والدولي. المضخات ومصاعد السوائل أمر بالغ الأهمية لموارد المياه والزراعة والبناء والطاقة والصناعة والعديد من القطاعات الأخرى. المعدات المعيبة يمكن أن تعرض السلامة للخطر، وتعطل العمليات، وتسبب خسائر مالية إذا لم يتم إنتاجها وفقًا للمواصفات المناسبة مع مراقبة الجودة.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    للسيطرة على هذا، أطلق BIS (مكتب المعايير الهندية) شهادة Scheme X، والتي تتطلب أن تلتزم كل مضخة ومصعد سوائل بمعيار الجودة الوطني قبل بيعها في الهند.
                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    في هذه المقالة نخطط لتغطية أهمية شهادة BIS للمضخات، وأهمية لائحة التقنية الشاملة (OTR) 2024، وعملية الحصول على ترخيص BIS للمضخات تحت Scheme X للمصنعين الطموحين.
                </p>

                {/* Why Pumps and Elevators Matter Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    لماذا المضخات ومصاعد السوائل مهمة
                </div>

                {/* Pumps Subsection */}
                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    المضخات
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    المضخات هي أجهزة لا غنى عنها لنقل السوائل أو الطين عبر صناعات مختلفة. يتم استخدامها على نطاق واسع في:
                </p>

                {/* Pumps Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>أنظمة الزراعة والري</li>
                    <li>إمدادات المياه العامة والاستخدام المنزلي</li>
                    <li>مرافق معالجة مياه الصرف الصحي والمياه العادمة</li>
                    <li>خطوط أنابيب النفط والغاز</li>
                    <li>تكييف الهواء وأنظمة التبريد الصناعية</li>
                </ul>

                {/* Liquid Elevators Subsection */}
                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    مصاعد السوائل
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    مضخات المصعد، مصاعد السوائل العمودية لرفع السوائل تخدم ضخ:
                </p>

                {/* Liquid Elevators Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>أنظمة توزيع المياه عالية الكتلة</li>
                    <li>الصوامع الصناعية/خزانات التخزين</li>
                    <li>في صناعات الطاقة والكيماويات والعمليات</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    لأنها شائعة، يمكن للمضخات أو مصاعد السوائل الرخيصة أن تسبب:
                </p>

                {/* Problems with Poor Quality Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>أعطال ميكانيكية</li>
                    <li>مخاطر كهربائية</li>
                    <li>تسريبات وتآكل</li>
                    <li>حوادث ناتجة عن مخاطر السلامة والخسائر الاقتصادية</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    لذلك، BIS للمضخات ومصاعد السوائل هو حماية ضرورية جداً لكل من المصنعين والمشترين.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS and What is Scheme X Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    ما هو BIS وما هو Scheme X؟
                </h2>

                <p className="text-gray-600 text-base font-geist mb-6">
                    مكتب المعايير الهندية (BIS) هو منظمة التوحيد القياسي الوطنية في الهند لشهادة جودة وسلامة المنتجات. للسيطرة على المرافق والآلات الحيوية، جعل BIS الحصول على شهادة Scheme X إلزامياً منذ 16 مارس 2022 تحت لوائح تقييم الامتثال BIS، 2018.
                </p>

                {/* Scheme X Key Highlights */}
                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    النقاط البارزة الرئيسية لشهادة Scheme X للمضخات
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>إلزامي للمصنعين الهنود والأجانب</li>
                    <li>ينطبق على المضخات والمحركات ومصاعد السوائل المشمولة تحت المعايير الهندية</li>
                    <li>يشمل اختبارات المختبر وفحوصات المصنع وتحققات الامتثال المتسقة</li>
                    <li>يضيف سلطات قانونية للسماح للمصنعين باستخدام علامة BIS للمضخات كدليل على الشهادة</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    اللائحة التقنية الشاملة (OTR) للمضخات
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    تم الإعلان عن OTR 2024 من قبل وزارة الصناعات الثقيلة، والتي حددت أن جميع المضخات ومصاعد السوائل يجب أن تلتزم بشهادة Scheme X.
                </p>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    الموعد النهائي للامتثال:
                </div>

                <p className="text-gray-600 text-base font-geist mb-6">
                    بحلول 1 سبتمبر 2026، يجب على جميع المصنعين والمستوردين الحصول على ترخيص BIS صالح للمضخات تحت Scheme X. عدم الامتثال يمكن أن يؤدي إلى غرامات ثقيلة، وكذلك إغلاق المبيعات والاستبعاد من المناقصات العامة.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Importance Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    لماذا شهادة BIS للمضخات ومصاعد السوائل مهمة؟
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    1. ضمان السلامة: يضمن أن المعدات مصممة ومبنية لصرامة العمليات ولا تسبب:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>أعطال كهربائية</li>
                    <li>تسريبات وصدأ</li>
                    <li>كسر الآلة والأعطال</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    2. ميزة السوق
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>المضخات المعتمدة من BIS مطلوبة غالباً للمشاريع العامة، مناقصات الحكومة، إلخ</li>
                    <li>توفر ميزة تنافسية على المنتجات غير المعتمدة</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    3. ثقة المستهلك: علامة ISI على المضخات تعطي ثقة للمشتري في الجودة وتضمن كفاءة المنتج.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    4. العلامات التجارية العالمية تحصل على وصول سهل للسوق: OEMs الأجنبية تحصل على وصول سهل لسوق الهند المنظم من خلال الالتزام بمعايير Scheme X.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Types of Pumps Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    أنواع المضخات تحت تسجيل BIS Scheme X
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    BIS Scheme X يشمل مجموعة متنوعة من أنواع المضخات بما في ذلك:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>المضخات الطاردة المركزية</li>
                    <li>المضخات الغاطسة</li>
                    <li>مضخات التعزيز</li>
                    <li>المضخات متعددة المراحل</li>
                    <li>مضخات الإزاحة الإيجابية</li>
                    <li>مضخات التوربين العمودية</li>
                    <li>مضخات العمليات الكيميائية</li>
                    <li>مضخات الحجاب الحاجز</li>
                    <li>مضخات الطين</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    كل نوع يجب أن يلتزم بالمعايير الهندية ذات الصلة (رموز IS) مثل IS 16819:2018/ISO 12100:2010 (سلامة الآلات - المبادئ العامة للتصميم - تقييم المخاطر وتقليل المخاطر).
                </p>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    لمصاعد السوائل، تشمل الشهادة:
                </div>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>معدل التدفق وارتفاع الرفع</li>
                    <li>توافق المواد</li>
                    <li>كفاءة الطاقة</li>
                    <li>سلامة التشغيل</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* How to Get BIS Scheme X Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    كيفية الحصول على BIS Scheme X للمضخات؟
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    تحديد المعايير المطبقة: يجب أن تحدد العروض رموز IS الصحيحة (مثل IS 9079 للمضخات الغاطسة).
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    اختبار المنتج: اختبارات الأداء والسلامة الإلزامية في المختبرات المقبولة من BIS.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    فحص المصنع: سلطات BIS تفحص موقع الإنتاج للتحقق من تنفيذ إجراءات مراقبة الجودة.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    التوثيق والطلب: المواصفات التقنية وتقارير الاختبار وأدلة الجودة يجب أن ترافق نموذج طلب BIS.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    إصدار شهادة BIS للمضخات: المصنعون يحصلون على ترخيص لتطبيق علامة BIS تحت Scheme X بعد الموافقة.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    المراقبة المستمرة: BIS يقوم بعمليات تدقيق منتظمة وفحوصات منتجات عشوائية لضمان الامتثال المستمر.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Penalties Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    العقوبات لعدم الامتثال
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    المصنعون الذين يفشلون في الحصول على شهادة BIS بحلول 1 سبتمبر 2026 سيواجهون:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>حظر بيع/استيراد المضخات غير المعتمدة</li>
                    <li>مصادرة البضائع والغرامات</li>
                    <li>استبعاد من طلبات الحكومة و PSU</li>
                    <li>ضرر سمعة طويل الأمد في الهند</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    <span className="font-medium text-[#1e1e1e]">الخلاصة:</span> شهادة BIS Scheme X للمضخات ومصاعد السوائل مع تطبيق OTR 2024؛ معلم في توحيد الصناعة في الهند.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    لأولئك الذين لديهم أنشطة تصنيع أو استيراد أو تصدير، تسجيل BIS للمضخات ليس فقط عملية امتثال قانوني يجب إكمالها، ولكن أيضاً قرار استراتيجي لضمان هيمنة السلامة على المخاطر المحتملة، وبناء ثقة المستهلك، والوصول إلى السوق الواسع في الهند.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    شهادة BIS للمضخات ومصاعد السوائل هي استثمار طويل الأمد لتأسيس أوراق اعتماد منتجك والسوق.
                </p>

                <AboutAuthorArabic />

            </div>
        </div>
    )
}


const PumpsAndLiquidElevatorsPageMainContentRightArabic = () => {
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
    const currentPageName = "SchemeX Product - BIS Certification for Pumps & Liquid Elevators (Arabic)";

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
                setSubmitStatus({ type: "success", message: "شكراً لك! سنتصل بك خلال 24 ساعة." });
                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    message: "",
                });
            } else {
                setSubmitStatus({ type: "error", message: "حدث خطأ. يرجى المحاولة مرة أخرى." });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus({
                type: "error",
                message: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
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
                        اطلب اتصال مجاني
                    </div>
                </div>

                {/* Intro Text */}
                <p className="mt-3 text-sm text-gray-600 font-geist">
                    اترك تفاصيلك أدناه وسيتصل بك خبراؤنا خلال 24
                    ساعة لمناقشة متطلبات الامتثال التنظيمي الخاصة بك.
                </p>

                {/* Status Message */}
                {submitStatus && (
                    <div
                        className={`mt-4 p-3 rounded-lg text-sm font-geist ${submitStatus.type === "success"
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
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
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
                            value={formData.email}
                            onChange={handleInputChange}
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
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="الشهادة المطلوبة*"
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
                            {isSubmitting ? "جاري الإرسال..." : "اطلب اتصال"}
                            <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Button>
                </form>

                {/* Privacy Note */}
                <p className="mt-3 text-xs text-center text-gray-500 font-geist">
                    بإرسال هذا النموذج، أنت توافق على{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        سياسة الخصوصية
                    </a>{" "}
                    الخاصة بنا وتوافق على الاتصال بك.
                </p>
            </div>
        </div>
    )
}