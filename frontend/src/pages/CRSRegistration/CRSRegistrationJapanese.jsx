/* eslint-disable react/prop-types */
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon, Mail, MailPlus, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// Contact Form Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import {
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;


const CRSRegistrationJapanese = () => {
    return (
        <div className="relative">
            {/* CRS Registration Meta Tags */}
            <CRSRegistrationJapaneseMetaTags />
            {/* CRS Registration Breadcrumb */}
            <CRSRegistrationJapaneseBreadcrumb />
            {/* CRS Registration Hero Section */}
            <CRSRegistrationJapaneseHero />
            {/* CRS Registration Index Section */}
            <CRSRegistrationJapaneseIndex />
            {/* CRS Registration Main Content Section */}
            <CRSRegistrationJapaneseMainContent />
            {/* Footer Section */}
            <FooterJapanese />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />
        </div>
    )
}

export default CRSRegistrationJapanese


const FooterJapanese = () => {
    return (
        <footer>
            <div className="relative ">
                <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-16 md:pb-16 mx-auto">
                    <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
                        もっと詳しく知りたいですか？
                    </h3>

                    <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
                        メールでお問い合わせください{" "}
                        <a
                            href="mailto:admin@bis-certifications.com"
                            className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4 hover:text-blue-900 transition-colors duration-200"
                        >
                            admin@bis-certifications.com
                        </a>
                        {" "}または、以下のオプションのいずれかを使用してください。通常24時間以内にご返信いたします。
                    </div>

                    <div className="flex items-center my-6 md:my-[30px]">
                        <div className="h-px w-full bg-neutral-300  grow"></div>
                        <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
                            または
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
                                        認証の簡素化
                                    </p>
                                </Link>
                            </div>

                            <div className="flex flex-col gap-[15px]">
                                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                                    ニュースレターに登録
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
                                        placeholder="メールアドレスを入力"
                                    />
                                    <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                                        <div className="text-[#2a5075]">
                                            通知を受け取る
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
                            <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                                    住所
                                </span>

                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                                        ITL Twin Tower, Netaji Subhash Place , Pitampura Delhi - 110034
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[15px]">
                                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                                    サービス
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
                                    会社
                                </span>
                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <Link
                                        to="/about"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        会社概要
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        お問い合わせ
                                    </Link>

                                    <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                                        よくある質問
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
                                        サイトマップ
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[15px]">
                                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                                    ニュース・お知らせ
                                </span>

                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <Link
                                        to="/bis-qco-updates"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        ブログ
                                    </Link>
                                    <Link
                                        to="/bis-qco-updates"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        最新アップデート
                                    </Link>
                                    <Link
                                        to="/ministry-updates"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        省庁アップデート
                                    </Link>
                                    <Link
                                        to="/webinar"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        ウェビナーアップデート
                                    </Link>
                                    <Link
                                        to="/international-audits"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        ギャラリー
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
                                日本語
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
                            著作権 © 2025 Sun Certifications India. 全著作権所有。
                        </span>

                        <div className="md:hidden flex items-center gap-2">
                            <Link
                                to="/privacy-policy"
                                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
                            >
                                プライバシーポリシー
                            </Link>
                            <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
                            <Link
                                to="/terms-and-conditions"
                                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
                            >
                                利用規約
                            </Link>
                        </div>

                        <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

                        <Link
                            to="/privacy-policy"
                            className="hidden md:block text-[#2a5075] font-geist hover:underline"
                        >
                            プライバシーポリシー
                        </Link>

                        <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

                        <Link
                            to="/terms-and-conditions"
                            className="hidden md:block text-[#2a5075] font-geist hover:underline"
                        >
                            利用規約
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const CRSRegistrationJapaneseMainContent = () => {
    return (
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <CRSRegistrationJapaneseMainContentLeft />
                    {/* Right Side */}
                    <ServicesRightSideContentEng />
                </div>
            </div>
            <CRSRegistrationJapaneseServiceFaq />
            <CRSRegistrationJapaneseCISProductTable />
            <div id="services">
                <ServicesJapanese />
            </div>

        </div>
    );
};

export const ServicesJapanese = () => {
    return (
        <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
            <div className="max-w-[80rem] w-full mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
                            私たちのサービス
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
                        <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
                            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
                            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                                インド最高の証明書コンサルタント
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
                            外国製造業者向けBISマーク（ISIライセンス）
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
                            CDSCO登録認証
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
                            BIS（CRS）登録
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
                            プラスチック廃棄物管理
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
                            EPR証明書認証
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
                            LMPC証明書認証
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
                            BIS登録証明書
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
                            インド製造業者向けISIマーク（BIS）
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const productsData = [
    {
        id: 1,
        product: "入力電力2000W以上のアンプ",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 2,
        product: "自動データ処理機器",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 3,
        product: "主電源式電子時計",
        isNumber: "IS 302-2-26:2014",
        date: "03 July 2013",
    },
    {
        id: 4,
        product: "電子ゲーム（ビデオ）",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 5,
        product: "入力電力200W以上の電子音楽システム",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 6,
        product: "ラップトップ/ノートブック/タブレット",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 7,
        product: "電子レンジ",
        isNumber: "IS 302-2-25:2014",
        date: "03 July 2013",
    },
    {
        id: 8,
        product:
            "入力電力200W以上の内蔵アンプ付き光学ディスクプレーヤー",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 9,
        product: '画面サイズ32"以上のプラズマ/LCD/LEDテレビ',
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 10,
        product: "プリンター、プロッター",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 11,
        product: "スキャナー",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 12,
        product: "セットトップボックス",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 13,
        product: "電話応答機",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 14,
        product:
            '画面サイズ32"以上のビジュアルディスプレイユニット、ビデオモニター',
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 15,
        product: "ワイヤレスキーボード",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 16,
        product: "レジスター",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 17,
        product: "コピー機/複写機",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 18,
        product: "パスポートリーダー",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 19,
        product: "POS端末",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 20,
        product: "メール処理機/郵便料金機/消印機",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 21,
        product: "携帯用途用パワーバンク",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 22,
        product: "スマートカードリーダー",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 23,
        product: "携帯電話",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 September 2015",
    },
    {
        id: 24,
        product: "一般照明サービス用セルフバラストLEDランプ",
        isNumber: "IS 16102(Part 1):2012",
        date: "13 September 2015",
    },
    {
        id: 25,
        product: "LEDモジュール用DC/AC電源電子制御装置",
        isNumber: "IS 15885(Part 2/Sec 13):2012",
        date: "01 December 2015",
    },
    {
        id: 26,
        product: "オーディオ、ビデオおよび類似電子機器用電源アダプター",
        isNumber: "IS 616:2010",
        date: "01 December 2015",
    },
    {
        id: 27,
        product: "IT機器用電源アダプター",
        isNumber: "IS 13252(Part 1):2010",
        date: "01 December 2015",
    },
    {
        id: 28,
        product: "固定式一般用途LED照明器具",
        isNumber: "IS 10322(Part 5/Sec 1):2012",
        date: "01 March 2016",
    },
    {
        id: 29,
        product: "定格5KVA以下のUPS/インバーター",
        isNumber: "IS 16242(Part 1):2014",
        date: "01 March 2016",
    },
    {
        id: 30,
        product:
            "携帯用途用アルカリまたはその他の非酸性電解質を含む密閉二次電池/バッテリー パート1 ニッケル系",
        isNumber: "IS 16046(Part 1): 2018",
        date: "01 June 2016",
    },
    {
        id: 31,
        product:
            "携帯用途用アルカリまたはその他の非酸性電解質を含む密閉二次電池/バッテリー パート2 リチウム系",
        isNumber: "IS 16046(Part 2): 2018",
        date: "01 June 2016",
    },
    {
        id: 32,
        product: "携帯電話ハンドセット用インド言語サポート",
        isNumber: "IS 16333 (Part 3) : 2022",
        date: "01 May 2018",
    },
    {
        id: 33,
        product: "埋め込み式LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 2) : 2012",
        date: "23 May 2018",
    },
    {
        id: 34,
        product: "道路・街路灯用LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 3) : 2012",
        date: "23 May 2018",
    },
    {
        id: 35,
        product: "LED投光器",
        isNumber: "IS 10322 (Part 5/Section 5) : 2013",
        date: "23 May 2018",
    },
    {
        id: 36,
        product: "LEDハンドランプ",
        isNumber: "IS 10322 (Part 5/Section 6) : 2013",
        date: "23 May 2018",
    },
    {
        id: 37,
        product: "LED照明チェーン",
        isNumber: "IS 10322 (Part 5/Section 7) : 2017",
        date: "23 May 2018",
    },
    {
        id: 38,
        product: "非常照明用LED照明器具",
        isNumber: "IS 10322 (Part 5/Section 8) : 2013",
        date: "23 May 2018",
    },
    {
        id: 39,
        product: "定格10kVA以下のUPS/インバーター",
        isNumber: "IS 16242 (Part 1) : 2014",
        date: "23 May 2018",
    },
    {
        id: 40,
        product: "画面サイズ32以下のプラズマ/LCD/LEDテレビ",
        isNumber: "IS 616 : 2017",
        date: "23 May 2018",
    },
    {
        id: 41,
        product: "画面サイズ32以下のビジュアルディスプレイユニット、ビデオモニター",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 42,
        product: "CCTVカメラ/CCTVレコーダー",
        isNumber:
            "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
        date: "23 May 2018",
    },
    {
        id: 43,
        product: "家庭用および類似電気機器用アダプター",
        isNumber: "IS 302 (Part 1) : 2008",
        date: "23 May 2018",
    },
    {
        id: 44,
        product:
            "USB駆動バーコードリーダー、バーコードスキャナー、虹彩スキャナー、光学指紋スキャナー",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 45,
        product: "スマートウォッチ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 46,
        product:
            "結晶シリコン地上用太陽光発電（PV）モジュール（Siウェーハベース）",
        isNumber:
            "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 47,
        product:
            "薄膜地上用太陽光発電（PV）モジュール（a-Si、CiGs、CdTe）",
        isNumber:
            "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 48,
        product: "太陽光発電システム用パワーコンバーター",
        isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
        date: "30 June 2021",
    },
    {
        id: 49,
        product: "系統連系太陽光発電インバーター",
        isNumber:
            "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
        date: "30 June 2021",
    },
    {
        id: 50,
        product: "蓄電池",
        isNumber: "IS 16270 : 2014",
        date: "01 January 2019",
    },
    {
        id: 51,
        product: "一般照明用独立LEDモジュール",
        isNumber: "IS 16103 (Part 1) : 2012",
        date: "01 April 2021",
    },
    {
        id: 52,
        product: "照明チェーン（ロープライト）",
        isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
        date: "01 April 2021",
    },
    {
        id: 53,
        product: "キーボード",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 54,
        product: "IHクッキングヒーター",
        isNumber: "IS 302-2-6 : 2009",
        date: "01 April 2021",
    },
    {
        id: 55,
        product: "現金自動支払機",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 56,
        product: "USBタイプ外付けハードディスクドライブ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 57,
        product: "ワイヤレスヘッドフォン・イヤホン",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 58,
        product:
            "USBタイプ外付けソリッドステートストレージデバイス（256GB容量以上）",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 59,
        product: "入力電力200W以下の電子音楽システム",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 60,
        product:
            "出力電圧48V（最大）のスタンドアロンスイッチモード電源（SMPS）",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 61,
        product: "プラズマ/LCD/LEDテレビ以外のテレビ",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 62,
        product: "炊飯器",
        isNumber: "IS 302-2-15 : 2009",
        date: "01 April 2021",
    },
    {
        id: 63,
        product: "ワイヤレスマイクロフォン",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 64,
        product: "デジタルカメラ",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 October 2021",
    },
    {
        id: 65,
        product: "ビデオカメラ",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 66,
        product: "ウェブカメラ（完成品）",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 67,
        product: "スマートスピーカー（ディスプレイ付き・なし）",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 68,
        product: "LED製品用調光器",
        isNumber: "IS 60669-2-1: 2008",
        date: "01 October 2021",
    },
    {
        id: 69,
        product: "Bluetoothスピーカー",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 70,
        product: "オルトリン酸",
        isNumber: "IS 798 : 2020",
        date: "12 December 2021",
    },
    {
        id: 71,
        product: "ポリリン酸",
        isNumber: "IS 17439:2020",
        date: "24 December 2021",
    },
    {
        id: 72,
        product: "綿花梱包",
        isNumber: "IS 12171:2019",
        date: "03 March 2023",
    },
    {
        id: 73,
        product: "トリメチルホスファイト工業用",
        isNumber: "IS 17412:2020",
        date: "03 March 2023",
    },
    {
        id: 74,
        product: "テレビセット",
        isNumber: "IS 18112:2022",
        date: "26 April 2023",
    },
];


const CRSRegistrationJapaneseCISProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const filteredProducts = productsData.filter(
        (product) =>
            product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const scrollToTable = () => {
        const tableSection = document.querySelector(".product-table-section");
        if (tableSection) {
            tableSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTable();
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            scrollToTable();
        }
    };
    return (
        <section className="w-full pb-12 product-table-section">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
                    BIS CRS登録の公式製品リスト
                </h2>

                <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
                    以下の表は、インドでBIS CRS登録が必要な製品と、適用されるインド規格（IS）番号および実施日をリストアップしています。
                </p>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="製品名またはIS番号で検索..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>

                <div className="rounded-md border bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                    番号
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    製品
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    IS番号
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    実施日
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentProducts.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.product}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.isNumber}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.date}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex items-center">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                前へ
                            </button>
                            <span className="px-4 py-2 font-geist text-sm">
                                {currentPage} / {totalPages} ページ
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                次へ
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}


const CRSRegistrationJapaneseServiceFaq = () => {
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const allFaqs = [
        {
            id: "item-1",
            question: "1. BIS登録とは何ですか？",
            answer:
                "BIS認証は、インド標準局が管理するコンプライアンスプロセスで、製品が品質、安全性、信頼性に関する適用されるインド規格（IS）を満たしていることを検証します。",
        },
        {
            id: "item-2",
            question: "2. BISの下でのCRS登録とは何ですか？",
            answer:
                "CRSは強制登録スキームを意味します。これは、電子機器、電気機器、バッテリー、太陽光アイテムなどの特定の製品カテゴリーに対する必須登録プロセスです。CRSの下の製品は、インドで販売される前にBISでテストされ登録される必要があります。",
        },
        {
            id: "item-3",
            question: "3. インドでBIS認証は必須ですか？",
            answer:
                "はい。CRS製品リスト（現在80以上のアイテム）に記載されているすべての製品について、インドでの製造、輸入、または販売にはBIS登録が必須です。",
        },
        {
            id: "item-4",
            question: "4. BIS CRSとISIマークの違いは何ですか？",
            answer:
                "BIS CRS：電子機器およびIT製品用、QCOの下で通知された必須製品のみ。<br />ISIマーク：より幅広い製品範囲で使用され、製品カテゴリーに応じて任意または必須の場合があります。",
        },
        {
            id: "item-5",
            question: "5. 誰がBIS CRS登録を申請できますか？",
            answer:
                "製造業者のみが申請できます。これにはインドの製造業者と外国の製造業者の両方が含まれます。外国ブランドは認可インド代表者（AIR）を任命する必要があります。",
        },
        {
            id: "item-6",
            question: "6. AIRの役割は何ですか？",
            answer:
                "認可インド代表者（AIR）は、外国製造業者に代わってBIS申請を提出する法的責任があります。彼らはBISと海外申請者の間の公式連絡役として機能します。",
        },
        {
            id: "item-7",
            question: "7. BIS CRS登録にはどのくらい時間がかかりますか？",
            answer:
                "プロセスは通常3〜4週間かかります。すべての文書とテストレポートが正しく提出され、BISから異議が提起されないことを前提としています。",
        },
        {
            id: "item-8",
            question: "8. BIS CRS証明書の費用はいくらですか？",
            answer:
                "費用には以下が含まれます：<br />テスト料金：₹10,000〜₹20,000 + GST<br />政府料金：テストレポートあたり₹53,000 + GST<br />追加料金：宣誓供述書、宅配便、AIR文書など<br />インドのMSME登録製造業者には割引が適用されます",
        },
        {
            id: "item-9",
            question: "9. BIS CRS証明書の有効性はどのくらいですか？",
            answer:
                "初期のBISライセンスは2年間有効です。製品と製造詳細が変更されない場合、最大5年間更新できます。",
        },
        {
            id: "item-10",
            question: "10. BIS認証は任意で取得できますか？",
            answer:
                "いいえ。CRSの下では、QCOの下にリストされていない製品について任意で申請することはできません。任意認証は、ISIスキームを通じた非CRS製品にのみ適用されます。",
        },
        {
            id: "item-11",
            question: "11. BIS CRS製品リストはどこで見つけられますか？",
            answer:
                '公式BISウェブサイト<a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a>にアクセスし、「CRSの下の製品」セクションに移動して、対象製品の完全なリストを表示できます。',
        },
        {
            id: "item-12",
            question: "12. BISマークは電子的に表示できますか？",
            answer:
                "はい、e-ラベリングを通じて可能ですが、厳格なBISルールを満たす必要があります：ラベル情報はファームウェアに埋め込まれている必要があります<br />デバイスメニューで4ステップ以内で簡単にアクセス可能<br />物理パッケージングには規制情報を引き続き表示する必要があります",
        },
        {
            id: "item-13",
            question:
                "13. 必須製品についてBIS登録を取得しないとどうなりますか？",
            answer:
                "深刻な罰則が科せられます：<br />製品の押収<br />税関での却下<br />法的罰金<br />eコマースポータルからの削除<br />インド市場からの永久禁止",
        },
        {
            id: "item-14",
            question: "14. 1つのBIS証明書で複数のモデルやブランドをカバーできますか？",
            answer:
                "いいえ。各ブランドと工場所在地は別々に認証される必要があります。追加レポートを使用して複数のモデルを追加することは可能ですが、同じ申請とブランドの下でのみです。",
        },
        {
            id: "item-15",
            question: "15. Sun Certifications Indiaはどのように支援してくれますか？",
            answer:
                "私たちは以下を提供します：<br />完全な文書サポート<br />ラボコーディネーション<br />BISポータル申請処理<br />照会解決とBISフォローアップ<br />更新とラベリングガイダンス<br />AIRサービスを通じた外国ブランドのコンプライアンス保証",
        },
    ];

    const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

    return (
        <div id="faqs" className="my-2 scroll-mt-20">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    よくある質問
                </h2>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    お探しの答えが見つかりませんか？{" "}
                    <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
                        お気軽にお問い合わせください！
                    </span>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {visibleFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                    <h3>{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Show More/Show Less Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {showAllFaqs ? (
                                <>
                                    <svg
                                        className="w-5 h-5 transform rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    よくある質問を少なく表示
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    よくある質問をもっと表示
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CRSRegistrationJapaneseMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col gap-2">
                    <h2 className="crs-heading-two">BIS登録とは何ですか？</h2>

                    <p className="crs-paragraph">
                        インド標準局（BIS）は、インドの国家標準化機関であり、インド政府の消費者問題・食料・公共配給省の下で活動しています。BISは、関連するインド規格（IS）に従って、インドの様々な製品とサービスの品質、安全性、性能基準を維持する責任があります。
                    </p>

                    <p className="crs-paragraph">
                        BISは、インドにおける様々なスキームの監督と実施を担当しています。強制登録スキーム（CRS）は、様々なカテゴリーの電子機器およびIT製品をカバーするBISの非常に重要な必須認証スキームです。
                    </p>

                    <p className="crs-paragraph">
                        インド製品の性能と安全性は、インドにとって重要な問題です。BIS CRS認証は、電子機器およびIT製品がインド規格に準拠していることを保証し、消費者を非準拠および粗悪な製品から保護するのに役立ちます。
                    </p>
                </div>

                {/* Overview Section */}
                <CRSRegistrationJapaneseMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Eligibility Section */}
                <CRSRegistrationJapaneseMainContentLeftEligibilitySection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Documents Section */}
                <CRSRegistrationJapaneseMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Registration Section */}
                <CRSRegistrationJapaneseMainContentLeftRegistrationSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Fees Section */}
                <CRSRegistrationJapaneseMainContentLeftFeesSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* E-Labelling  */}
                <CRSRegistrationJapaneseMainContentLeftELabellingSection />

                {/* Divider */}
                <div className="crs-divider" />

                <AboutAuthorJapanese />
            </div>
        </div>
    )
}

const AboutAuthorJapanese = () => {
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
                            著者について
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
                                Sun Certifications India オペレーションヘッド
                            </p>
                        </div>

                        {/* Experience and achievements with subtle cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                    <span className="font-medium">経験:</span>{" "}
                                    10年以上 & 1000以上のプロジェクトを担当
                                </p>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
                                <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                    多くのインドおよび国際機関から表彰
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
                                        私とつながる
                                    </span>
                                </a>

                                <a
                                    href="mailto:admin@bis-certifications.com"
                                    className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200"
                                >
                                    <Mail className="w-4 h-4 text-[#1A8781]" />
                                    <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                                        <span className="font-medium">
                                            連絡先:
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
    );
}

const CRSRegistrationJapaneseMainContentLeftELabellingSection = () => {
    return (
        <div id="elabelling" className="flex flex-col scroll-mt-20">
            {/* E-Labelling */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">E-ラベリング</span>
                <Separator className="crs-separator" />
            </div>

            <div className="crs-heading-two">
                CRS認証製品のE-ラベリングガイドライン
            </div>

            <div className="crs-heading-three">E-ラベリングとは何ですか？</div>

            <p className="crs-paragraph">
                E-ラベリングは、デバイスに印刷して貼り付ける代わりに、デバイス内で規制情報を電子的に表示する慣行です。BISの強制登録スキーム（CRS）の下では、指定された製品、特にコンパクトまたはデジタルデバイスは、ソフトウェアインターフェースまたはデジタルパッケージングを通じてBIS証明書の詳細、標準マーク、ISコードを表示することができます。
            </p>

            <div className="crs-heading-three">
                E-ラベリングに関するBISガイドライン：電子E-ラベリング（BIS CMD
                3/8:1/6975. 2015年12月3日付）
            </div>

            <h3 className="crs-heading-three">E-ラベリングの要件：</h3>

            {/* E-Labelling Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    ルール
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    説明
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    パッケージング上の物理ラベル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品ボックスまたは外部パッケージングにはBIS CRSロゴと登録詳細を表示する必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    バルクパッケージング用の取り外し可能ラベル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品がバルクで出荷される場合、外側のパッケージに取り外し可能な接着ラベルが受け入れ可能です。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    アクセスにツール不要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ユーザーはツールやアクセサリーを必要とせずにe-ラベル情報にアクセスできる必要があります（例：SIMカードの取り外しは許可されません）。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    セキュアプログラミング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    E-ラベル情報はファームウェア/ソフトウェアに埋め込まれ、第三者による変更からロックされている必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    メニューベースアクセス
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ユーザーはデバイスのメニューインターフェースを通じて最大4ステップで情報にアクセスする必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    指示が必要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    e-ラベル詳細にアクセスする方法の指示を提供する必要があります。
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="crs-paragraph">
                Sun Certifications IndiaがCRSスキームの下でBIS登録をどのように支援できるか
            </p>

            <div className="crs-heading-three">なぜBISコンサルタントを選ぶのか？</div>

            <p className="crs-paragraph">
                全体のBIS CRS登録は、ルールと文書の量に関して非常に技術的で包括的です。インド規格、最近のQCO、テストレポートの構造、ポータルインターフェースのワークフローに対する徹底的な理解がない場合、申請者は遅延、却下、または長期間の積極的な非準拠という後続の行動において大幅に損失を被る可能性があります。ここでSun Certifications Indiaが信頼できる信頼できるパートナーとして、強制認証スキームのあらゆる詳細で申請者を支援します。
            </p>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftFeesSection = () => {
    return (
        <div id="fees" className="flex flex-col scroll-mt-20">
            {/* Fees */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">登録料金</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録料金、有効性および更新ガイドライン
            </h2>

            <p className="crs-paragraph">
                CRSの下でBIS証明書を取得するには、申請者は政府料金とテスト対象製品の支払いを行う必要があります。プロセスがオンラインでインターフェースが合理化されているにもかかわらず、多くの申請者は支払い不足や申請の誤提出により、リクエストの遅延や却下に直面しています。
            </p>

            <h3 className="crs-heading-three">CRS登録の料金体系</h3>

            {/* Fee Structure Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    料金タイプ
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    金額
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    政府料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    テストレポートあたり₹53,000 + 18% GST
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    テスト料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹10,000 – ₹20,000 + 18% GST（製品/ラボにより異なる）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    同一申請での追加レポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    レポートあたり₹20,000 + 18% GST
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新料金
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹53,000 + 18% GST
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="crs-paragraph italic text-center">
                <em>
                    価格は更新される可能性があります — BISポータルまたはコンサルタントで確認してください。
                </em>
            </p>

            <h3 className="crs-heading-three">CRS証明書の有効性と更新</h3>

            {/* Certificate Validity & Renewal Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    パラメータ
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    詳細
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    初期有効性
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2年
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新期間
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    最大5年（製品変更がない場合）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    更新プロセス
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    オンライン、新しい宣誓供述書+更新料金に基づく
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    再テストが必要？
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品仕様/IS規格が変更されない限り不要
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftRegistrationSection = () => {
    return (
        <div id="registration" className="flex flex-col scroll-mt-20">
            {/* Registration */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">登録プロセス</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">BIS CRS登録プロセス</h2>

            <p className="crs-paragraph">
                BIS CRS登録は、BIS登録ポータルを通じた完全オンラインプロセスです。文書のアップロードを含む手順だけではありません。技術的な性質の特別な注意、規制の理解、およびインド規格（IS）への完全な準拠も必要です。
            </p>

            <p className="crs-paragraph">
                BIS CRSプロセス、現在は認証・登録システム（CRS）と呼んでいますが、BIS認証の旅がどのように展開するかを以下に示します。
            </p>

            <div className="crs-heading-three">
                ステップ1：BIS認可ラボでの製品テスト
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS承認リストからラボを選択する",
                    "関連するISのテストを実行する製品のサンプルを提出する",
                    "BISテストレポート形式に従ってサンプルのテストレポートを取得する",
                ]}
            />

            <div className="crs-heading-three">ステップ2：文書準備</div>

            <PointsListWithoutHeading
                points={[
                    "既に概説した必要な文書を収集する",
                    "文書が適切に命名、フォーマット、署名、日付付けされていることを確認する",
                    "BISロゴ用のスペースとIS規格用のスペースを含むモックステッカーである製品ラベルを開発する",
                ]}
            />

            <div className="crs-heading-three">
                ステップ3：オンライン申請の記入
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS CRSポータル（https://www.bis.org.in/）にアクセスしてログインまたは登録する",
                    "必要に応じて、製品、モデル番号、ブランド、AIRの製造ユニットを完成させる",
                    "政府手数料の支払い手順に従う",
                ]}
            />

            <div className="crs-heading-three">
                ステップ4：BISによる申請の審査
            </div>

            <PointsListWithoutHeading
                points={[
                    "BISが補助文書とラボレポートをチェックする",
                    "必要に応じて、ポータルを通じて照会が提起される",
                    "適切な文書または論理的な説明で回答する",
                ]}
            />

            <p className="crs-paragraph">
                照会クエリの場合、30日以内に回答する必要があり、そうでなければ申請はアーカイブファイルに送られ、つまり却下されます。
            </p>

            <div className="crs-heading-three">ステップ5：BIS登録の付与</div>

            <PointsListWithoutHeading
                points={[
                    "BIS職員が実施した評価の結果に満足した場合、BIS証明書が発行される",
                ]}
            />

            <p className="crs-paragraph">証明書には以下が含まれます：</p>

            <PointsListWithoutHeading
                points={[
                    "BIS登録番号",
                    "ブランド名",
                    "製品のモデル",
                    "IS規格コード",
                ]}
            />

            <PointsListWithoutHeading
                points={[
                    "製品ラベルには証明書の詳細のe-ラベリングを含めるか持つ必要があります。",
                ]}
            />

            <div className="crs-heading-three">ステップ6：ラベリングと流通</div>

            <PointsListWithoutHeading
                points={[
                    "BIS認証製品は以下を携帯する必要があります：",
                    "BIS CRSロゴ",
                    "製品に関連するISコード",
                    "BIS登録番号",
                    "登録番号とBISロゴは、BIS規制に従って印刷またはデジタル埋め込みされる必要があります。",
                ]}
            />

            <h3 className="crs-heading-three">概算タイムライン</h3>

            {/* Timeline Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    活動
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    推定時間
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品テスト
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    7-10営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    文書収集
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-3日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請提出
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    1日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS審査+照会解決
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    10-15営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    最終証明書発行
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-4営業日
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    合計
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                                    ~4週間
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">文書</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録に必要な文書
            </h2>

            <div className="crs-heading-three">
                BIS CRS登録を取得するために必要な文書のリスト。
            </div>

            <p className="crs-paragraph">
                BIS CRS登録申請の記入は完全にデジタルですが、承認を得るためには完全に完成した文書が必要です。文書タイプ、不適切な形式、間違ったファイルタイプなどのあらゆる側面に従わない細かなミスや失敗は、申請が却下されたり遅延したりする原因となる可能性があります。
            </p>

            <p className="crs-paragraph">
                BIS文書の適切で迅速な処理のためには、各ステップで適切な文書を手元に持つことが必要です。適切な文書を準備しておくことで、BIS証明書が時間通りに処理され、コンプライアンス監査、税関検査、またはマーケットプレイス承認から法的にクリアな状態を保つことができます。
            </p>

            <div className="crs-heading-three">
                BIS CRS登録の文書チェックリスト
            </div>

            {/* Documents Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    文書
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    提出者
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    備考
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製造業者の住所証明
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    工場賃貸契約、公共料金請求書、またはライセンス
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS承認ラボからのテストレポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者/ラボ
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    最新（90日以内）でISコードを参照している必要がある
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    誓約書（BIS形式による）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    申請者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    責任、コンプライアンス、製品責任を含む
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    商標証明書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ブランドが登録されている場合に必要
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR合意書（外国申請者用）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    外国製造業者＆AIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    署名および公証済み
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    宣誓供述書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者またはAIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    BISポータルからダウンロード可能な形式
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    手数料領収書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    申請者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    政府手数料の支払い証明
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    委任状
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    AIRが彼らに代わって行動することを認可する
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    会社登録証明書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    事業登録の証明（GST、ROCなど）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品ラベル/マーキング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    製造業者
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    BISロゴ、IS規格、登録スペースを表示する必要がある
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftEligibilitySection = () => {
    return (
        <div id="eligibility" className="flex flex-col scroll-mt-20">
            {/* Eligibility */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">資格</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS登録の資格基準
            </h2>

            <p className="crs-paragraph">
                CRSの下でBIS認証を申請できるのは誰ですか？
            </p>

            <p className="crs-paragraph">
                インドでは、強制登録スキーム（CRS）の下でのBIS証明書は、インド標準局が定めた要件を満たす製造業者のみに付与されます。これにより、真正な製造業者のみが登録し、製品にBIS CRSロゴを貼付する特権を得ることが保証されます。
            </p>

            <div className="crs-heading-three">資格基準チェックリスト</div>

            {/* Eligibility Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    要件
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    説明
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請者は製造業者でなければならない
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品の元の製造業者（トレーダーや再販業者ではない）のみが申請資格があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    所在地はインドまたは外国でも可
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    インドの製造業者と国際ブランドの両方が申請できます。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR（認可インド代表者）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    外国の製造業者は、インド支社または正式に認可された第三者であるAIRを任命する必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS承認ラボからのテストレポート
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品はBIS認定ラボでテストされ、適用されるインド規格（IS）を満たす必要があります。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    適切な文書
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    すべての必要な文書は所定の形式で提出する必要があります（詳細は次のセクション）。
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    ブランド・所在地ごとに1つの登録
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    製品タイプ、製造場所、ブランド名ごとに別々の申請を提出する必要があります。
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h2 className="crs-heading-three">
                認可インド代表者（AIR）とは誰ですか？
            </h2>

            <p className="crs-paragraph">
                外国の製造業者にとって、インドでのコミュニケーションと代表のための認可インド代表者（AIR）を任命することは義務の一つです。
            </p>

            <div className="crs-heading-three">AIRの責任：</div>

            <PointsListWithoutHeading
                points={[
                    "外国申請者の法的代表者として行動する",
                    "製造業者に代わってBISとのすべての義務をコミュニケーションし管理する",
                    "すべてのコンプライアンスと文書について法的責任を負う",
                    "製造業者によって明確に認可されていない限り、エージェントやディストリビューターになることはできない",
                ]}
            />

            <p className="crs-paragraph">
                合意の一部として、AIRは両当事者からの署名入り合意書とインド住所の証明を提出する必要があります。
            </p>

            <div className="crs-heading-three">実際のシナリオ：</div>

            <p className="crs-paragraph">
                会社ABCはインドで新しいモデルのパワーバンクを導入する計画です。
            </p>

            <PointsListWithoutHeading
                points={[
                    "会社ABCが製造業者です。",
                    "インドのBIS認定ラボの一つで製品をテストしています。",
                    "デリーの支社が登録されたAIRとして機能しています。",
                    "必要な文書とともにBISポータルに申請をアップロードしています。",
                ]}
            />

            <p className="crs-paragraph">
                結果として、CRSの下でBIS証明書が発行されます。
            </p>
        </div>
    )
}

const CRSRegistrationJapaneseMainContentLeftOverviewSection = () => {
    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">概要</span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                強制登録スキーム（CRS）とは何ですか？
            </h2>

            <p className="crs-paragraph">
                強制登録スキーム（CRS）は、2012年に開始されたBIS製品登録スキームで、主に電子製品に焦点を当てていました。年月が経つにつれて、より多くの製品がリリースされるにつれて、CRSは家電製品、太陽光設備、バッテリーなどを含むより幅広い製品カテゴリーを含むように拡張されました。CRS登録は、各省庁が発行する品質管理令（QCO）で指定された製品に必須です。
            </p>

            <p className="crs-paragraph">
                強制CRSスキームに該当する製品は、BISへの登録を取得した後にのみ、インドで販売、輸入、または流通させることができます。
            </p>

            <h3 className="crs-heading-three">
                インドにおけるCRS認証の歴史
            </h3>

            <p className="crs-paragraph">
                2012年、CRSスキームの下で最初のQCOがリリースされ、電子機器およびIT機器に焦点を当てました。それ以来、以下のセクターで追加のQCOが発行されています：
            </p>

            <PointsListWithoutHeading
                points={[
                    "家電製品",
                    "照明・LED",
                    "バッテリー・セル",
                    "無線通信機器",
                    "太陽光パネルおよびコンポーネント",
                    "家庭用電気機器",
                ]}
            />

            <p className="crs-paragraph">
                CRS認証のリストは急速に拡大しているため、製造業者が積極的で最新の更新情報を把握することが非常に重要です。
            </p>

            <h2 className="crs-heading-three">
                CRS登録 vs ISIマーク：違いは何ですか？
            </h2>

            {/* Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    特徴
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    CRS登録
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                                    ISIマーク
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    性質
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    強制（QCOリスト製品のみ）
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    任意または強制（製品による）
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    製品範囲
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    電子機器、IT、電気、バッテリーなど
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    食品、セメント、鋼材、電気機器など
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    申請方法
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    オンライン、BIS CRSポータル
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    手動+オンライン、BIS ISIシステム
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    柔軟性
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    QCO対象商品のみ
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    非QCO商品は任意にできる
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    ラベリング
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    BIS CRSロゴと登録番号が必要
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    標準コード付きISIロゴが必要
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h3 className="crs-heading-three">
                BIS CRSフレームワークを知る必要がある理由
            </h3>

            <p className="crs-paragraph">
                インドの生産者、またはインド市場に参入しようとしている外国企業の場合、BIS CRSのステップを知ることは必須です。これにより以下が可能になります：
            </p>

            <PointsListWithoutHeading
                points={[
                    "非準拠による罰金を回避する。",
                    "生産スケジュールを準備する（ラボテスト時間を考慮）。",
                    "通関処理を容易にする。",
                    "インドの顧客の長期的なブランド信頼を獲得する。",
                ]}
            />
        </div>
    )
}

const CRSRegistrationJapaneseIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const SECTIONS = useMemo(
        () => [
            "overview",
            "eligibility",
            "documents",
            "registration",
            "fees",
            "elabelling",
        ],
        []
    );

    const MENU_ITEMS = {
        overview: "概要",
        eligibility: "対象製品",
        documents: "必要書類",
        registration: "登録手続き",
        fees: "登録料金",
        elabelling: "E-ラベリング",
    };

    const handleItemClick = (item) => {
        const element = document.getElementById(
            item.toLowerCase().replace(/\s+/g, "-")
        );
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
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

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
        handleScrollSpy(); // Initial check

        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, [SECTIONS]);

    return (
        <div
            ref={stickyRef}
            className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
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
                                    {MENU_ITEMS[item]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
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
                            {MENU_ITEMS[item]}
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


const CRSRegistrationJapaneseBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-fit font-inter">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">ホーム</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>BIS CRS登録</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};


const CRSRegistrationJapaneseMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "ホーム",
                "item": window.location.origin + "/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "BIS CRS登録",
                "item": window.location.href
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>BIS登録 - 強制登録制度（CRS）</title>
            <meta name="description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta name="keywords" content="BIS証明書, BIS登録プロセス, BIS登録, BISオンライン登録プロセス, 電子製品のBIS認証, インドのBIS登録プロセス, 電子製品のBIS登録, 強制登録制度" />
            <meta name="author" content="Dhruv Aggarwal" />
            <meta name="publisher" content="Sun Certifications India" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="BIS登録 - 強制登録制度（CRS）" />
            <meta property="og:description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:title" content="BIS登録 - 強制登録制度（CRS）" />
            <meta name="twitter:description" content="BIS登録とは、CRS制度の下で適用されるインド規格に準拠した電子・IT製品について、BISからライセンスを取得することです。" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>
        </Helmet>
    )
}


const CRSRegistrationJapaneseHero = () => {
    return (
        <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
            {/* Background gradient */}
            <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

            {/* Decorative elements */}
            <div
                className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
                {/* Left Side */}
                <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
                    <div className="inline-flex items-center">
                        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
                        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                            認定された専門知識
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            BIS CRS登録
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        電子製品の安全性と品質を確保するために必須です。専門家の支援でBIS承認を取得しましょう！
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
                                サービスを見る
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <CRSRegistrationHeroContactFormJapanese />
            </div>
        </main>
    )
}

const CRSRegistrationHeroContactFormJapanese = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
        const path = window.location.pathname;

        // Service pages
        if (path.includes("/ja/crs-bis-toha-nani-ka-crs-toroku"))
            return "CRS Registration Japanese";
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
            toast({
                variant: "destructive",
                title: "有効な氏名を入力してください。",
                description: "氏名には文字とスペースのみ使用できます。",
            });
            setLoading(false);
            return;
        }

        // Email validation - allow any domain
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast({
                variant: "destructive",
                title: "有効なメールアドレスを入力してください。",
                description: "メール形式が正しいかご確認ください",
            });
            setLoading(false);
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                title: "有効な電話番号を入力してください",
                description: "電話番号は8〜15桁である必要があります",
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
            toast({
                title: "お問い合わせフォームが正常に送信されました！",
                description:
                    "お問い合わせありがとうございます。担当者より間もなくご連絡いたします。",
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
                error.response?.data?.message || "問題が発生しました";
            toast({
                variant: "destructive",
                title: errorMessage || "お問い合わせフォームの送信に失敗しました！",
                description:
                    "問題が発生しました。入力内容をご確認の上、再度お試しください。",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
                    お問い合わせ
                </span>
                <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>

            <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
                予約する
            </h3>

            <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
                チームにご連絡いただき、通話のスケジュールを組みませんか？
                <span className="text-black"> 今すぐ試す</span>
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
                        placeholder="氏名 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="メールアドレス *"
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
                        placeholder="連絡先番号 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="companyName"
                        value={companyName}
                        onChange={handleOnChange}
                        placeholder="会社名 *"
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
                        placeholder="製品名 *"
                        className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
                    />

                    <Input
                        disabled={loading}
                        required
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleOnChange}
                        placeholder="必要な認証*"
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
                            <span>送信中</span>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center justify-center">
                            <span>予約する</span>
                        </div>
                    )}
                </Button>
            </form>
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
