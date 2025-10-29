/* eslint-disable react/prop-types */
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";

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
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXArabic = () => {
    return (
        <div className="relative">
            {/* Scheme X English Meta Tags */}
            <SchemeXArabicMetaTags />
            {/* Scheme X English Breadcrumb */}
            <SchemeXArabicBreadcrumb />
            {/* Scheme X English Hero Section */}
            <SchemeXArabicHero />
            {/* Scheme X English Index Section */}
            <SchemeXArabicIndex />
            {/* Scheme X English Main Content Section */}
            <SchemeXArabicMainContent />
            {/* Footer English Section */}
            <FooterArabic />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />

        </div>
    )
}

export default SchemeXArabic

const SchemeXArabicMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "الرئيسية",
                item: window.location.origin + "/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "شهادة BIS الهندية تحت النظام X",
                item: window.location.href,
            },
        ],
    };
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>
                شهادة نظام X لـ BIS | سلامة الآلات والمعدات الكهربائية
            </title>
            <meta
                name="description"
                content="شهادة نظام X لـ BIS مطلوبة لضمان جودة وسلامة المفاتيح المنخفضة الجهد، ومعدات التحكم، والآلات، والمعدات الكهربائية."
            />
            <meta
                name="keywords"
                content="النظام X، نظام X لـ BIS، شهادة نظام X لـ BIS، شهادة النظام X، شهادة الآلات، شهادة المعدات الكهربائية"
            />

            <meta name="author" content="Dhruv Aggarwal" />
            <meta name="publisher" content="Sun Certifications India" />
            <meta name="robots" content="index, follow" />


            {/* Canonical URL */}
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph Meta Tags */}
            <meta
                property="og:title"
                content="شهادة نظام X لـ BIS | سلامة الآلات والمعدات الكهربائية"
            />
            <meta
                property="og:description"
                content="شهادة نظام X لـ BIS مطلوبة لضمان جودة وسلامة المفاتيح المنخفضة الجهد، ومعدات التحكم، والآلات، والمعدات الكهربائية."
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter Meta Tags */}
            <meta
                name="twitter:title"
                content="شهادة نظام X لـ BIS | سلامة الآلات والمعدات الكهربائية"
            />
            <meta
                name="twitter:description"
                content="شهادة نظام X لـ BIS مطلوبة لضمان جودة وسلامة المفاتيح المنخفضة الجهد، ومعدات التحكم، والآلات، والمعدات الكهربائية."
            />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>


        </Helmet>
    )
}
const SchemeXArabicBreadcrumb = () => {
    return (
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
                                <BreadcrumbPage>شهادة BIS الهندية تحت النظام X
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const SchemeXArabicHero = () => {
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
                            الخبرة المعتمدة
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            شهادة نظام X لـ BIS
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        تغطي شهادة نظام X لـ BIS الآلات، والمعدات الكهربائية، وتجميعات المكونات، والتجميعات الفرعية تحت اللائحة الفنية الشاملة (OTR).
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
                                عرض الخدمات
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <SchemeXArabicHeroContactForm />
            </div>

        </main>
    )
}

const SchemeXArabicHeroContactForm = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
        const path = window.location.pathname;
        // Service pages
        if (path.includes("/ar/shahadat-bis-alhind-tahata-almukhatat-x"))
            return "Scheme X Arabic";
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
                title: "يرجى إدخال اسم كامل صالح.",
                description: "يجب أن يحتوي الاسم على حروف ومسافات فقط.",
            });
            setLoading(false);
            return;
        }

        // Email validation - allow any domain
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            toast({
                variant: "destructive",
                title: "يرجى إدخال عنوان بريد إلكتروني صالح.",
                description: "تحقق من صحة تنسيق بريدك الإلكتروني",
            });
            setLoading(false);
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                title: "يرجى إدخال رقم هاتف صالح",
                description: "يجب أن يكون رقم الهاتف (8-15 رقمًا)",
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
                title: "تم إرسال نموذج الاتصال بنجاح!",
                description:
                    "شكرًا لك على الاتصال بنا. سيعود فريقنا إليك قريبًا.",
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
                error.response?.data?.message || "حدث خطأ ما";
            toast({
                variant: "destructive",
                title: errorMessage || "فشل في إرسال تفاصيل نموذج الاتصال!",
                description:
                    "حدث خطأ ما. يرجى التحقق من تفاصيلك وحاول مرة أخرى.",
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
                هل ترغب في الاتصال بفريقنا وجدولة مكالمة؟
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
                        placeholder="الشهادة المطلوبة*"
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
                            <span>إرسال</span>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center justify-center">
                            <span>حجز موعد</span>
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};


const SchemeXArabicIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const SECTIONS = useMemo(
        () => [
            "overview",
            "process",
            "documents",
            "conclusion",
        ],
        []
    );

    const MENU_ITEMS = {
        overview: "نظرة عامة",
        process: "العملية",
        documents: "الوثائق",
        conclusion: "الخاتمة",
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

const SchemeXArabicMainContent = () => {
    return (
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <SchemeXMainContentLeft />
                    {/* Right Side */}
                    <ServicesRightSideContentArabic />
                </div>
            </div>
            <SchemeXServiceFaq />
            <SchemeXProductTable />
            <div id="services">
                <Services />
            </div>
        </div>
    )
}

export const Services = () => {
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
                            علامة BIS (رخصة ISI) للتصنيع الأجنبي
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
                            علامة ISI (BIS) للتصنيع الهندي
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const SchemeXProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const table2Ref = useRef(null);
    const table3Ref = useRef(null);

    return (
        <div className="w-full pb-12">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">

                <div className="flex flex-col gap-2 mt-6">
                    <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
                        معيار السلامة حسب المنتج
                    </h2>

                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                        وصف الآلات والمعدات الكهربائية
                    </p>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={
                            "البحث حسب الوصف أو رمز HS..."
                        }
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>
            </div>

            <div ref={table2Ref}>
                <TypeBTable tableRef={table2Ref} searchQuery={searchQuery} />
            </div>
            <div ref={table3Ref}>
                <TypeCTable searchQuery={searchQuery} />
            </div>

        </div>
    )
}

const productDataTableThird = [
    {
        id: 1,
        description: "جميع أنواع المضخات للتعامل مع السوائل، مصاعد السوائل",
        hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 2,
        description: "جميع أنواع الضواغط",
        hsCode:
            "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
        indianStandard: "البند 16 من IS 17093:2019\nالبند 6.6 من IS 12258:1987",
        title:
            "الشروط الفنية للتوريد لضواغط الهواء الترددية للأغراض العامة والتطبيقات الصناعية\nالشروط الفنية لتوريد ضواغط الهواء الدورانية (الغمر بالزيت) للأغراض العامة والتطبيقات الصناعية",
    },
    {
        id: 3,
        description:
            "جميع أنواع الآلات لمعالجة المواد بعملية تشمل تغيير درجة الحرارة",
        hsCode:
            "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 4,
        description: "أو آلات التنقية للسوائل والغازات",
        hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 5,
        description:
            "جميع أنواع الآلات للحشو، والإغلاق، والختم، وتسمية الزجاجات، والتعبئة أو اللف",
        hsCode: "842220, 842230, 842240 and 842290",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 6,
        description: "جميع أنواع الرافعات",
        hsCode:
            "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
        indianStandard:
            "البند 66.1، 66.1.1، 66.1.2، 66.1.3، 66.2، 66.2.1، 66.2.2، 66.3، 66.4، 66.5 و 66.6 من IS 3177:2020\nالبند 8.1، 8.2، 8.3 و 45 من IS 4573:2020\nIS/ISO 15442:2012",
        title:
            "رافعة كهربائية علوية متحركة ورافعة بوابة لجميع التطبيقات كود الممارسة\nمواصفات الرافعات المتحركة ذات الطاقة\nالرافعات - متطلبات السلامة للرافعات المحملة",
    },
    {
        id: 7,
        description: "جميع أنواع الآلات للبناء",
        hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
        indianStandard:
            "IS 17055 (الجزء 7): 2020\nIS 17055 (الجزء 8): 2020\nIS 17055 (الجزء 12): 2020",
        title:
            "آلات حركة الأرض السلامة الجزء 7 كاشطات\nمتطلبات آلات حركة الأرض للمنسقين\nآلات حركة الأرض السلامة الجزء 12 راصفات الطرق",
    },
    {
        id: 8,
        description: "جميع أنواع آلات النسيج (النول)",
        hsCode: "8446, 844811, 844819, 844842 and 844849",
        indianStandard: "IS 17361 (الجزء 6) : 2020 / ISO 11111 (الجزء 6) : 2005",
        title:
            "متطلبات سلامة آلات النسيج الجزء 6 آلات تصنيع الأقمشة",
    },
    {
        id: 9,
        description: "جميع أنواع الآلات لصنع التطريز.",
        hsCode: "84479020 and 844859",
        indianStandard: "IS 17361 (الجزء 1): 2020 / ISO 11111 (الجزء 1) : 2016",
        title: "متطلبات سلامة آلات النسيج الجزء 1 المتطلبات العامة",
    },
    {
        id: 10,
        description: "جميع أنواع آلات القطع المعدني",
        hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
        indianStandard:
            "IS 17277 (الجزء 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (الجزء 1): 2019\nISO 16090-1 : 2017",
        title:
            "سلامة أدوات الآلات المطابع الجزء 1 المتطلبات العامة للسلامة\nسلامة أدوات الآلات آلات الشحن الكهربائي\nسلامة أدوات الآلات آلات الدوران\nسلامة أدوات الآلات آلات المنشار للمعادن الباردة\nسلامة أدوات الآلات مراكز التصنيع، آلات الطحن، آلات النقل الجزء 1 متطلبات السلامة",
    },
    {
        id: 11,
        description:
            "جميع أنواع أدوات الآلات للعمل على الحجر، والسيراميك، والخرسانة، والأسمنت المحتوي على الأسبستوس أو زجاج المعادن المشابه",
        hsCode: "8464 and 84669100",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 12,
        description: "جميع أنواع الآلات للعمل على المطاط والبلاستيك",
        hsCode: "8477",
        indianStandard: "IS/ISO 20430: 2020",
        title:
            "آلات البلاستيك والمطاط - آلات القولبة بالحقن - متطلبات السلامة",
    },
    {
        id: 13,
        description:
            "جميع أنواع الآلات بما في ذلك الآلات للأعمال العامة والبناء والآلات والأجهزة الميكانيكية ذات الوظائف الفردية، غير المحددة",
        hsCode: "84791000, 84798999 and 84799090",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 14,
        description:
            "جميع أنواع التروس والتروس، والعجلات المسننة، وسلسلة التروس، وعناصر النقل الكروية أو الدورانية، وصناديق التروس ومغيرات السرعة، بما في ذلك محولات العزم و(أو)تجميعاتها /التجميعات الفرعية /المكونات",
        hsCode: "84834000 and 84839000",
        indianStandard: "-",
        title: "-",
    },
    {
        id: 15,
        description:
            "جميع أنواع الآلات الكهربائية الدورانية مثل المولد، إلخ. البناء والآلات والأجهزة الميكانيكية ذات الوظائف الفردية، غير المحددة",
        hsCode: "8501 and 8503",
        indianStandard:
            "البند 4.7، 4.8 و 4.12 من القسم 2،\nالبند 7.4 من القسم 3، البند 8.6 من القسم 4،\nالبند 9.4 من القسم 5 من IS 5422:1996\nالبند 11، 21، 22، 23، 25 و 26 من IS 13364\n(الجزء 1): 1992\nالبند 11، 21، 22 23 25 و 26 من IS 13364\n(الجزء 2): 1992",
        title:
            "التوليد من نوع التوربين\nمولدات التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية - المواصفات: الجزء 1\nالمولدات حتى 20 كيلو فولت أمبير\nمولدات التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية - المواصفات: الجزء 2\nالمولدات فوق 20 كيلو فولت أمبير وحتى 1250 كيلو فولت أمبير",
    },
    {
        id: 16,
        description: "جميع أنواع مولدات الديزل",
        hsCode: "8502 and 8503",
        indianStandard:
            "البند 5,6,7,8, 9 و 10 من IS/ISO 8528 (الجزء 2) : 2018\nالبند 6 و 10 من IS/ISO 8528 (الجزء 3)\nالبند 4، 5.5، 7.3.5، 7.3.7 و 7.4 من IS/ISO 8528 (الجزء 4): 2005\nالبند 12، 13، 14، 15 من IS/ISO 8528-5: 2018\nالبند 6.4 من IS/ISO 8528 (الجزء 8): 2016\nالبند 9.1 من IS/ISO 8528 (الجزء 12): 1997",
        title:
            "مجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية: الجزء 2 المحركات\nمجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية: الجزء 3 مولدات التيار المتردد لمجموعات التوليد\nمجموعات توليد التيار المتردفل المدارة بمحركات الاحتراق الداخلي الترددية: الجزء 4 معدات التحكم والتحكم\nمجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية الجزء 5 مجموعات التوليد\nمجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية: الجزء 8\nمجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية: الجزء 12 إمداد الطاقة الطارئة للسلامة",
    },
    {
        id: 17,
        description: "جميع أنواع المحولات",
        hsCode:
            "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
        indianStandard:
            "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nالبند 5.6 و البند 10 من IS 2026 (الجزء 1)\nالبند 7.5، 7.6، 7.7 من IS 2026 (الجزء 6)",
        title:
            "سلامة المحولات، والمفاعلات، ووحدات الطاقة ومنتجات مشابهة لجهود التوريد حتى 1100 فولت الجزء 2-4: المتطلبات الخاصة والاختبارات للمحولات العازلة ووحدات الطاقة المدمجة\nسلامة محولات الطاقة، ووحدات الطاقة ومشابه: الجزء 2 المتطلبات الخاصة: القسم 6 محولات العزل الآمنة للاستخدام العام\nسلامة محولات الطاقة، ووحدات الطاقة المفاعلات ومنتجات مشابهة: الجزء 2-7 المتطلبات الخاصة والاختبارات للمحولات ووحدات الطاقة للألعاب\nمحولات الطاقة: الجزء 1 عام\nمحولات الطاقة: الجزء 6 المفاعلات",
    },
    {
        id: 18,
        description: "جميع أنواع محول أشباه الموصلات الطاقة",
        hsCode: "850440",
        indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
        title: "البند 7 من محولات أشباه الموصلات الجزء 1 المتطلبات العامة ومحولات التبديل بالخط القسم 1 مواصفات المتطلبات الأساسية",
    },
    {
        id: 19,
        description:
            "جميع أنواع معدات المفاتيح والتحكم تعمل بجهود لا تتجاوز 1000 فولت و(أو)تجميعاتها /التجميعات الفرعية /المكونات",
        hsCode: "8536, 8537 and 8538",
        indianStandard: "البند 8 من IS/IEC 61439 (الجزء 3): 2012",
        title:
            "تجميعات المفاتيح والتحكم الجهد المنخفض: الجزء 3 لوحات التوزيع المقصود تشغيلها بواسطة الأشخاص العاديين (DBO)",
    },
    {
        id: 20,
        description:
            "جميع أنواع معدات المفاتيح والتحكم تعمل بجهود تتجاوز 1000 فولت و(أو)تجميعاتها /التجميعات الفرعية /المكونات",
        hsCode: "8535, 8537 and 8538",
        indianStandard: "-",
        title: "-",
    },
];

const TypeCTable = ({ searchQuery }) => {
    // Filter data based on search query
    const filteredData = productDataTableThird.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            item.description.toLowerCase().includes(query) ||
            item.hsCode.toLowerCase().includes(query) ||
            item.indianStandard.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );
    });

    return (
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
            <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                النوع C (معايير السلامة للآلات تتعامل مع المتطلبات التفصيلية للسلامة لآلة معينة أو مجموعة من الآلات)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                الرقم التسلسلي.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                وصف الآلات والمعدات الكهربائية
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                رمز HS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                المعيار الهندي/بند المعيار الهندي
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                عنوان المعيار الهندي
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.description}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.hsCode}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.indianStandard.split("\n").map((line, idx) => (
                                            <div key={idx}>{line}</div>
                                        ))}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.title.split("\n").map((line, idx) => (
                                            <div key={idx}>{line}</div>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 font-geist text-gray-500">
                                    لا توجد نتائج لـ &quot;{searchQuery}&quot;
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

const productDataTableSecond = [
    {
        id: 1,
        isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
        title:
            "سلامة الآلات معدات كهربائية للآلات الجزء 1 المتطلبات العامة",
    },
    {
        id: 2,
        isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
        title:
            "سلامة الآلات - معدات كهربائية للآلات الجزء 11 متطلبات للمعدات للجهود فوق 1 000 فولت AC أو 1 500 فولت DC ولا تتجاوز 36 كيلو فولت",
    },
    {
        id: 3,
        isNumber: "IS/IEC 61508 (Part 1): 2010",
        title:
            "السلامة الوظيفية للأنظمة الكهربائية-الإلكترونية-الإلكترونية القابلة للبرمجة المتعلقة بالسلامة الجزء 1- المتطلبات العامة",
    },
    {
        id: 4,
        isNumber: "IS/IEC 60529 : 2001",
        title: "درجة الحماية التي توفرها الغلافات (رمز IP)",
    },
    {
        id: 5,
        isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 1: اختيار طرق الاختبار",
    },
    {
        id: 6,
        isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
        title:
            "سلامة الآلات تقييم انبعاث المواد الخطرة الجوية الجزء 2 طريقة غاز الترصيد لقياس معدل انبعاث ملوث معين",
    },
    {
        id: 7,
        isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 3: طريقة مقعد الاختبار لقياس معدل انبعاث ملوث معين",
    },
    {
        id: 8,
        isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 4: طريقة الترصيد لقياس كفاءة الالتقاط لنظام الإخلاء",
    },
    {
        id: 9,
        isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 5: طريقة مقعد الاختبار لقياس كفاءة الفصل بالكتلة لأنظمة تنظيف الهواء ذات المخرج غير الموصل",
    },
    {
        id: 10,
        isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 6 : طريقة مقعد الاختبار لقياس كفاءة الفصل بالكتلة لأنظمة تنظيف الهواء ذات المخرج الموصل",
    },
    {
        id: 11,
        isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 7: طريقة مقعد الاختبار لقياس معامل تركيز الملوث",
    },
    {
        id: 12,
        isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 8: طريقة الغرفة لقياس معامل تركيز الملوث",
    },
    {
        id: 13,
        isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
        title:
            "سلامة الآلات - تقييم انبعاث المواد الخطرة الجوية - الجزء 9: مؤشر التنقية",
    },
    {
        id: 14,
        isNumber: "IS 10481:2020/ ISO 4413:2010",
        title:
            "قوة السائل الهيدروليكي - القواعد العامة ومتطلبات السلامة للأنظمة ومكوناتها",
    },
    {
        id: 15,
        isNumber: "IS 12725:2021/ ISO 4414:2010",
        title:
            "قوة السائل الهوائي - القواعد العامة ومتطلبات السلامة للأنظمة ومكوناتها",
    },
    {
        id: 16,
        isNumber: "IS ISO 3457 : 2003",
        title: "آلات حركة الأرض - الحراس - التعريفات والمتطلبات",
    },
    {
        id: 17,
        isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
        title:
            "سلامة الآلات - السلامة الوظيفية لأنظمة التحكم الكهربائية الإلكترونية والإلكترونية القابلة للبرمجة المتعلقة بالسلامة",
    },
    {
        id: 18,
        isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
        title:
            "سلامة الآلات - معدات الحماية الحساسة كهربائيًا الجزء 2 المتطلبات الخاصة للمعدات باستخدام أجهزة الحماية البصرية الإلكترونية النشطة AOPDs",
    },
    {
        id: 19,
        isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
        title:
            "سلامة الآلات- الإشارة والعلامة والتشغيل الجزء 3 متطلبات موقع وتشغيل المحركات",
    },
    {
        id: 20,
        isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
        title:
            "سلامة الآلات-معدات كهربائية للآلات الجزء 32 متطلبات آلات الرفع",
    },
    {
        id: 21,
        isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
        title:
            "سلامة الآلات - الإشارة والعلامة والتشغيل الجزء 1 متطلبات الإشارات البصرية والسمعية واللمسية",
    },
    {
        id: 22,
        isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
        title:
            "سلامة الآلات - معدات الحماية الحساسة كهربائيًا الجزء 1 المتطلبات العامة والاختبارات",
    },
    {
        id: 23,
        isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
        title:
            "سلامة الآلات إرشادات لاستخدام أنظمة الاتصال في التطبيقات المتعلقة بالسلامة",
    },
    {
        id: 24,
        isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
        title:
            "سلامة الآلات - الإشارة والعلامة والتشغيل الجزء 2 متطلبات العلامة",
    },
    {
        id: 25,
        isNumber: "IS 16807: 2020/",
        title: "سلامة الآلات الوقاية من الحريق وحماية الحريق",
    },
    {
        id: 26,
        isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
        title:
            "سلامة الآلات متطلبات النظافة لتصميم الآلات",
    },
    {
        id: 27,
        isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
        title:
            "سلامة الآلات وسائل الوصول الدائمة إلى الآلات الجزء 1 اختيار الوسائل الثابتة والمتطلبات العامة للوصول",
    },
    {
        id: 28,
        isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
        title:
            "سلامة الآلات وسائل الوصول الدائمة إلى الآلات الجزء 2 المنصات العاملة والممرات",
    },
    {
        id: 29,
        isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
        title:
            "سلامة الآلات وسائل الوصول الدائمة إلى الآلات الجزء 3 السلالم والسلميات والحراس",
    },
    {
        id: 30,
        isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
        title:
            "سلامة الآلات وسائل الوصول الدائمة إلى الآلات الجزء 4 السلميات الثابتة",
    },
    {
        id: 31,
        isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
        title:
            "سلامة الآلات الأجزاء المتعلقة بالسلامة لأنظمة التحكم الجزء 1 المبادئ العامة للتصميم",
    },
    {
        id: 32,
        isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
        title:
            "سلامة الآلات الأجزاء المتعلقة بالسلامة لأنظمة التحكم الجزء 2 التحقق",
    },
    {
        id: 33,
        isNumber: "IS 16811: 2018/ 14120 : 2015",
        title:
            "سلامة الآلات الحراس المتطلبات العامة لتصميم وبناء الحراس الثابتة والمتحركة",
    },
    {
        id: 34,
        isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
        title:
            "سلامة الآلات أجهزة الإغلاق المرتبطة بالحراس مبادئ التصميم والاختيار",
    },
    {
        id: 35,
        isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
        title: "سلامة الآلات الوقاية من البدء غير المتوقع",
    },
    {
        id: 36,
        isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
        title:
            "سلامة الآلات المسافات الآمنة لمنع الوصول إلى مناطق الخطر بواسطة الأطراف العلوية والسفلية",
    },
    {
        id: 37,
        isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
        title:
            "سلامة الآلات وضع الحراس بالنسبة لسرعات الاقتراب لأجزاء الجسم البشري",
    },
    {
        id: 38,
        isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
        title:
            "سلامة الآلات الفجوات الدنيا لتجنب سحق أجزاء الجسم البشري",
    },
    {
        id: 39,
        isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
        title:
            "سلامة الآلات أجهزة التحكم بيدين مبادئ التصميم والاختيار",
    },
    {
        id: 40,
        isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
        title: "سلامة الآلات وظيفة التوقف الطارئ مبادئ التصميم",
    },
    {
        id: 41,
        isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
        title:
            "سلامة الآلات المزلقات بالاتصال العرضي بالمنتج -- متطلبات النظافة",
    },
    {
        id: 42,
        isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
        title:
            "سلامة الآلات - تقليل المخاطر الصحية الناتجة عن المواد الخطرة المنبعثة من الآلات - الجزء 1: المبادئ والمواصفات لمصنعي الآلات",
    },
    {
        id: 43,
        isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
        title:
            "سلامة الآلات - تقليل المخاطر الصحية الناتجة عن المواد الخطرة المنبعثة من الآلات - الجزء 2: المنهجية التي تؤدي إلى إجراءات التحقق",
    },
    {
        id: 44,
        isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
        title:
            "سلامة الآلات - أجهزة الحماية الحساسة للضغط - الجزء 1: المبادئ العامة لتصميم واختبار الحصائر الحساسة للضغط والأرضيات الحساسة للضغط",
    },
    {
        id: 45,
        isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
        title:
            "سلامة الآلات - أجهزة الحماية الحساسة للضغط - الجزء 2: المبادئ العامة لتصميم واختبار الحواف الحساسة للضغط والأشرطة الحساسة للضغط",
    },
    {
        id: 46,
        isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
        title:
            "سلامة الآلات - أجهزة الحماية الحساسة للضغط - الجزء 3: المبادئ العامة لتصميم واختبار المصدات الحساسة للضغط، والألواح، والأسلاك والأجهزة المشابهة.",
    },
    {
        id: 47,
        isNumber: "IS 16569: 2018/ ISO 11429:1996",
        title:
            "الإرگونوميا - نظام الإشارات السمعية والبصرية للخطر والمعلومات",
    },
    {
        id: 48,
        isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
        title:
            "المتطلبات الإرگونومية لتصميم الشاشات ومحركات التحكم الجزء 2 الشاشات",
    },
    {
        id: 49,
        isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
        title:
            "المتطلبات الإرگونومية لتصميم الشاشات ومحركات التحكم الجزء 3 محركات التحكم",
    },
    {
        id: 50,
        isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
        title:
            "سلامة الآلات - المتطلبات الإنثروبومترية لتصميم محطات العمل في الآلات",
    },
    {
        id: 51,
        isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
        title:
            "الإرگونوميا - نماذج الرجل الحاسوب وقوالب الجسم الجزء 1 المتطلبات العامة",
    },
    {
        id: 52,
        isNumber: "IS 16569:2018/ ISO 11429: 1996",
        title:
            "الإرگونوميا - نظام الإشارات السمعية والبصرية للخطر والمعلومات",
    },
    {
        id: 53,
        isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
        title:
            "أنظمة الأتمتة الصناعية - سلامة أنظمة التصنيع المتكاملة - المتطلبات الأساسية",
    },
];
const TypeBTable = ({ tableRef, searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Filter data based on search query
    const filteredData = productDataTableSecond.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            item.isNumber.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );
    });

    // Reset to first page when search query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const scrollToTableTop = () => {
        if (tableRef?.current) {
            tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setTimeout(() => scrollToTableTop(), 100);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setTimeout(() => scrollToTableTop(), 100);
        }
    };

    return (
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
            <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                النوع B (المعايير العامة للسلامة تتعامل مع جانب سلامة واحد أو أكثر من نوع واحد من الحراسة يمكن استخدامها عبر مجموعة واسعة من الآلات)
            </p>

            <div className="rounded-md border bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                الرقم التسلسلي.
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                رقم IS
                            </TableHead>
                            <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                العنوان
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.isNumber}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.title}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-8 font-geist text-gray-500">
                                    لا توجد نتائج لـ &quot;{searchQuery}&quot;
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {totalPages > 1 && (
                <div className="flex justify-end items-center mt-6">
                    <div className="flex items-center">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            السابق
                        </button>
                        <span className="px-4 py-2 font-geist text-sm">
                            صفحة {currentPage} من {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            التالي
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const SchemeXServiceFaq = () => {
    const faqData = [
        {
            question: "1. ما هو النظام X تحت شهادة BIS؟",
            answer: "النظام X هو نظام تقييم الامتثال تم إدخاله بواسطة BIS الهندي للآلات والمعدات الكهربائية. يضمن الامتثال لمعايير السلامة والفنية الصارمة كما هو محدد في اللائحة الفنية الشاملة."
        },
        {
            question: "2. هل النظام X مختلف عن شهادة علامة ISI؟",
            answer: "نعم. علامة ISI عادة للسلع الاستهلاكية والامتثال الأساسي للمنتج، بينما ينطبق النظام X على المنتجات المعقدة والصناعية التي تتطلب اختبارًا وشهادة متقدمة من خلال شهادة BIS أو رخصة BIS."
        },
        {
            question: "3. من يحتاج إلى التقدم بطلب لشهادة النظام X؟",
            answer: "يجب على مصنعي ومستوردي الآلات والمعدات الكهربائية المدرجة تحت اللائحة الفنية الشاملة التقدم بطلب للنظام X والحصول على شهادة BIS صالحة لبيع أو توزيع منتجاتهم قانونيًا في الهند. يجب على المصنعين العالميين أو الأجانب الراغبين في بيع المنتج في الهند الامتثال لهذه اللوائح أيضًا."
        },
        {
            question: "4. ما هو تكلفة شهادة نظام X لـ BIS؟",
            answer: "تشمل تكلفة النظام X رسوم التقديم، ورسوم الشهادة، ورسوم مراجعة الملف الفني، وتكاليف تفتيش المصنع، ورسوم اختبار المنتج. في المتوسط، تبدأ من ₹2,000 للتقديم ويمكن أن ترتفع حسب تعقيد المنتج. للمزيد من التفاصيل اتصل بنا على admin@bis-certifications.com."
        },
        {
            question: "5. كم من الوقت يستغرق الحصول على رخصة BIS تحت النظام X؟",
            answer: "يختلف الجدول الزمني حسب الوثائق، ومتطلبات الاختبار، وتفتيش المصنع. عادة، يستغرق 4-6 أسابيع من تاريخ تسجيل BIS الناجح وتقديم الطلب للمصنعين الهنديين و60-90 يومًا للمصنعين الأجانب."
        },
        {
            question: "6. هل يمكن للمؤسسات الصغيرة والمتوسطة التقدم أيضًا لشهادة BIS تحت النظام X؟",
            answer: "بالتأكيد. في الواقع، يشجع BIS الهندي المؤسسات الصغيرة والمتوسطة على التقدم برخصة BIS أو شهادة الامتثال تحت النظام X لتعزيز الجودة والامتثال والتنافسية في القطاع الصناعي."
        },
        {
            question: "7. هل شهادة BIS تحت النظام X إلزامية للصادرات؟",
            answer: "لا. المنتجات المصنعة حصريًا للتصدير معفاة تحت اللائحة الفنية الشاملة. ومع ذلك، يجب أن تكون المنتجات المقصودة للأسواق الهندية معتمدة تحت النظام X."
        },
        {
            question: "8. ما هي صلاحية رخصة BIS تحت النظام X؟",
            answer: "رخصة BIS تحت النظام X صالحة عادة لمدة 3-6 سنوات ويجب تجديدها وفقًا لذلك. يتضمن التجديد دفع رسوم الشهادة السنوية لـ BIS وقد يتطلب إعادة التقييم حسب التغييرات في نطاق المنتج أو المعايير."
        },
        {
            question: "9. هل يمكن للمصنعين الأجانب التقدم لشهادة النظام X؟",
            answer: "نعم، يمكن للمصنعين الأجانب التقدم لشهادة النظام X من خلال ممثل هندي مصرح. يتطلب BIS الهندي تفتيش مصنع، والذي قد يستغرق 3 أيام للمتقدمين الأجانب، بالإضافة إلى عمليات التسجيل والاختبار القياسية لـ BIS."
        },
        {
            question: "10. ما هو الملف الفني ولماذا هو مطلوب؟",
            answer: "الملف الفني هو ملف امتثال مفصل مطلوب تحت النظام X. يشمل عمليات التصنيع، وتفاصيل المنتج، وتقارير الاختبار، ووثائق التحكم في الجودة. يدعم امتثال المنتج للمعايير الهندية ذات الصلة أثناء عملية شهادة BIS."
        },
        {
            question: "11. كيف يرتبط النظام X باللائحة الفنية الشاملة؟",
            answer: "تفرض اللائحة الفنية الشاملة استخدام النظام X لفئات محددة من الآلات والمعدات الكهربائية في الهند. يجب على المنتجات المدرجة تحت اللائحة أن تكون معتمدة تحت النظام X للحصول على شهادة BIS صالحة أو رخصة BIS."
        },
        {
            question: "12. هل يمكن إلغاء شهادة BIS تحت النظام X؟",
            answer: "نعم. يمكن لـ BIS الهندي تعليق أو إلغاء رخصة BIS أو شهادة تحت النظام X إذا تم العثور على عدم امتثال أثناء الرصد أو إذا فشل المنتج في الامتثال للمعايير الهندية المطلوبة."
        },
        {
            question: "13. ما الفرق بين رخصة BIS وشهادة BIS تحت النظام X؟",
            answer: "تصدر رخصة BIS عادة للمصنعين الهنديين، بينما تصدر شهادة الامتثال (CoC) للمصنعين الأجانب أو للحالات المحددة. كلاهما يخدمان الغرض نفسه - ضمان امتثال المنتج تحت النظام X."
        },
        {
            question: "14. هل يُسمح بعلامة ISI للمنتجات المعتمدة تحت النظام X؟",
            answer: "لا. المنتجات تحت النظام X لا تحمل علامة ISI. بدلاً من ذلك، تعرض علامة المعيار BIS ذات الصلة بالنظام الشهادة، كما هو محدد بواسطة BIS الهندي."
        },
        {
            question: "كيف أعرف إذا كانت آلتي تتطلب شهادة النظام X؟",
            answer: "تحقق من القائمة الرسمية في اللائحة الفنية الشاملة أو استشر مستشار BIS للتحقق مما إذا كانت آلتك تخضع لمتطلبات شهادة النظام X الإلزامية."
        }
    ];

    return (
        <section
            id="faqs"
            className="my-2 scroll-mt-20"
            aria-label="الأسئلة الشائعة"
        >
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    الأسئلة الشائعة
                </h4>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    هل لا يمكنك العثور على الإجابة التي تبحث عنها؟{" "}
                    <a
                        href="/contact"
                        className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
                    >
                        اتصل بنا!
                    </a>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                    {faq.question}
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

const SchemeXMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">

                {/* Overview Section */}
                <SchemeXMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Process Section */}
                <SchemeXMainContentLeftProcessSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Documents Section */}
                <SchemeXMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                {/* Conclusion Section */}
                <SchemeXMainContentLeftConclusionSection />

                {/* Divider */}
                <div className="service-left-content-divider" />

                <ServiceAuthorArabic />
            </div>
        </div>
    )
}

const SchemeXMainContentLeftConclusionSection = () => {
    return (
        <div id="conclusion" className="flex flex-col scroll-mt-20">
            {/* Conclusion */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">الخاتمة</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                الخاتمة
            </h2>

            <p className="service-left-content-paragraph">
                تظل شهادة نظام X لـ BIS حيوية في الحفاظ على السلامة،
                والموثوقية، وجودة المفاتيح المنخفضة الجهد ومعدات التحكم،
                والآلات والمعدات الكهربائية. بالنسبة لمصنعي أدوات الآلات
                القابلة لمعالجة الحجر، والسيراميك، والخرسانة، والأسمنت
                الأسبستي والزجاج المعدني، شهادة نظام X لـ BIS إلزامية.
            </p>


            <p className="service-left-content-paragraph">
                من خلال الوفاء بهذه الالتزامات، يضمن المصنعون امتثال المنتج،
                وتعزيز ثقة المستهلك، بالإضافة إلى تحسين مصداقيتهم في السوق. يضمن النظام X
                أن تكون الإنتاج سلسًا قدر الإمكان، وأن تلبي معايير السلامة حول العالم، وأن تحصل
                العلامات التجارية المعترف بها على سمعة إيجابية.
            </p>

        </div>
    )
}

const SchemeXMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">الوثائق</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                الوثائق الرئيسية المطلوبة لشهادة نظام X لـ BIS
            </h2>


            <p className="service-left-content-paragraph">
                لتبسيط عملية شهادة BIS، يُطلب من المصنعين جمع
                وتقديم الوثائق التالية أثناء مرحلة التسجيل:
            </p>

            <div className="mt-[16px] md:mt-[24px]">
                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                الرقم التسلسلي.
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                الوثيقة المطلوبة
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                التفاصيل
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                1.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                الاسم والعنوان (المصنع والمكتب)
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                الاسم القانوني الكامل وعناوين الموقع الجسدي لموقع التصنيع
                                والمكتب
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                2.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                معلومات PAN و GST
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                رقم الحساب الدائم (PAN) وتفاصيل تسجيل GST
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                3.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                تفاصيل الاتصال
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                عنوان البريد الإلكتروني، ورقم الهاتف المحمول، والخط الثابت للاتصالات
                                الرسمية
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                4.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                تفاصيل الإدارة
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                أسماء، وأدوار، وهويات المديرين الرئيسيين والموقع المخول
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                5.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                وصف المنتج
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                تفاصيل الآلات والمعدات المشمولة تحت الجدول الأول
                                من اللائحة الفنية الشاملة
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                6.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                تصنيف المنتج
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                النوع، والنموذج، والتنوع المحدد الذي يُطلب له رخصة BIS
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                7.
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                                الملف الفني
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                جميع التفاصيل الفنية المتعلقة بالمنتج وتفاصيل
                                وحدة التصنيع.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <h3 className="service-left-content-heading-three">
                صلاحية وإجراء تجديد شهادة النظام X:
            </h3>

            <PointsListWithoutHeading
                points={[
                    "صلاحية الرخصة وتجديدها: تصدر رخص BIS تحت النظام X لمدة 3 إلى 6 سنوات للإنتاج المستمر. بمجرد انتهاء المدة، يمكن تجديد الرخصة للمدة نفسها من خلال تقديم طلب تجديد، والرسوم المطلوبة، ووثائق الامتثال.",
                    "شهادة الامتثال (CoC): تصدر CoC للإنتاج مرة واحدة، وتنطبق على المصنعين المحليين والأجانب. بما أنها تنطبق فقط على دفعة واحدة، فإن CoC ليس لديها خيار تجديد.",
                    "تقرير اختبارات المنتج: عند إعداد تقارير الاختبار في مختبر المصنع، يتحقق مسؤولو BIS منها أثناء تفتيش المصنع من خلال إجراء اختبار الشهود. إذا تم الاختبار في منشآت فرعية، يتم تفتيش واعتماد تلك المنشآت أيضًا بواسطة BIS.",
                    "مراجعة طلب التجديد: للحفاظ على صلاحية غير منقطعة، يجب على المصنع الاستمرار في الامتثال لأحكام النظام X. وفقًا للائحة 8 من لوائح تقييم الامتثال لـ BIS، تعالج مكتب المعايير الهندي طلب التجديد في النموذج VIII. يتم التجديد فقط بعد التحقق من الامتثال الراضي.",
                ]}
            />
        </div>
    )
}

const SchemeXMainContentLeftProcessSection = () => {
    return (
        <div id="process" className="flex flex-col scroll-mt-20">
            {/* Process */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">العملية</span>
                <Separator className="service-left-content-separator" />
            </div>

            <h2 className="service-left-content-heading-two">
                الخطوات للحصول على الشهادة تحت نظام BIS-X
            </h2>


            <p className="service-left-content-paragraph">
                إصدار شهادة BIS تحت النظام X هو نشاط منهجي يهدف إلى
                ضمان أن يكون لدى المصنع السلامة، والجودة، و
                معايير الامتثال المطبقة ملباة. العملية كالتالي:
            </p>


            <PointsListWithoutHeading
                points={[
                    "التحقق من النطاق: تحديد ما إذا كان منتجك ضمن نطاق النظام X وإذا كان مع متطلبات سلامة BIS. تحقق من المعايير الهندية ذات الصلة والجدول الفني لتحديد ما إذا كنت قادرًا على الامتثال.",
                    "إعداد الوثائق المطلوبة: يحتاج المصنعون إلى جمع وترتيب الوثائق التالية: شهادات الأعمال المسجلة، وثائق أساس التصميم، وثائق تدفق المصنع والعملية، تقارير اختبار الخدمة (إذا كانت適用ة)، وثائق ضمان وتحكم الجودة.",
                    "بناء الملف الفني: الملف الفني جزء أساسي لا غنى عنه لادعاء تمديد الشهادة. يجب أن يحتوي على: المواصفات الفنية للمنتج، معلومات الطرق والتقنيات، وثائق الامتثال والاختبار، والقيود والغرض المقصود للمنتج، وثائق ضمان الجودة، تتبع المواد الخام، تتبع الفرعي، والباقي من الأدلة، الامتثال للمعايير ضمن النطاق المحدد.",
                    "نموذج الطلب: يمكن تقديم نموذج الطلب إلكترونيًا على موقع BIS للمكان المحدد. دفع رسوم الطلب ضروري. يجب تضمين باقي الوثائق التي تتحقق من الطلب للتقييم السليم.",
                    "تفتيش المصنع: للمصنعين المحليين: يُجرى التفتيش على مدى فترة قصوى 2 يوم. للمصنعين الأجانب: يُجرى التفتيش على مدى فترة قصوى 3 أيام (قد تضاف أيام إضافية بسبب طلبات إضافية).",
                    "اختبار عينات المنتج: يتم اختبار العينات إما في موقع المصنع أو في مختبرات معتمدة من BIS المُنقلة (يُسمح بالاختبار المنقول). يُظهر الاختبار الوفاء بالمعايير الهندية ذات الصلة.",
                    "إصدار الشهادة: إذا استوفى المنتج جميع الشروط، تمنح BIS كل منتج رخصة أو شهادة امتثال (CoC). يمكن للمصنع استخدام علامة المعيار BIS بحرية على جميع المنتجات المعتمدة.",
                ]}
            />


            <p className="service-left-content-paragraph">
                يخدم هذا الملف كدليل فني وإحصائي على
                ادعاء المنتج الذي يدعم معايير السلامة.
            </p>


            <p className="service-left-content-paragraph">
                خلال فترة التفتيش، يُتوقع من مسؤولي BIS أن:
                يحللوا الملف الفني، يقيموا طرق التصنيع بالإضافة إلى أنظمة ضمان الجودة الداعمة، يراقبوا اختبار المنتج، يحددوا عدم الامتثال (إن وجد) ويعطوا خطوات علاجية. يُقدم تقرير مفصل عن التدقيق للمتقدم بعد الزيارة.
            </p>



            <p className="service-left-content-paragraph">
                تحافظ هذه الاستراتيجية على الامتثال لمعيار BIS وهي
                اعتراف بالامتثال الهندي والدولي، مما يجعل الصناعة تركز على ثقة المستهلك تجاه السلامة والجودة.
            </p>


            <h2 className="service-left-content-heading-three">
                إجراء للمصنعين المحليين
            </h2>


            <p className="service-left-content-paragraph">
                يتبع المصنعون المحليون نهجًا مباشرًا من خلال الحصول على رخصة BIS
                تحت النظام X. تشمل الخطوات المباشرة التالية:
            </p>


            <PointsListWithoutHeading
                points={[
                    "الوثائق: يجب جمع وإعداد جميع الوثائق المتعلقة بالنظام.",
                    "تنفيذ الطلب: يُقدم الطلب مع الرسوم ذات الصلة.",
                    "الاستعلام عن الطلب: أي طلب مقدم يخضع للفحص ويتم إنشاء مجموعة لاحقة من الأسئلة بواسطة BIS.",
                    "تعيين المدققين: يعين BIS المدققين لكن الفرد المرشح خاضع لدفع رسوم التدقيق.",
                    "تدقيق المصنع: يُجرى تدقيق فحص ومسح في الموقع ويتم جمع العينات ذات الصلة.",
                    "تقييم العينة: تُقيم العينات في مختبر معترف به من BIS. يدفع المتقدم جميع رسوم اختبار المختبر المعترف به من BIS.",
                    "دفع رسوم الترخيص والعلامة: يتم إنجاز المدفوعات المطلوبة إلى BIS.",
                    "منح الترخيص: تُمنح الشهادة التي تسمح باستخدام علامة BIS بواسطة BIS.",
                ]}
            />


            <p className="service-left-content-paragraph">
                <strong>الجدول الزمني النموذجي:</strong> حوالي 90 يوم عمل (وفقًا لممارسة
                BIS) مطلوبة. هذا بشرط عدم وجود عدم امتثال رئيسي.
            </p>


            <h2 className="service-left-content-heading-three">
                إجراء للمصنعين الأجانب
            </h2>


            <p className="service-left-content-paragraph">
                بخلاف المصنعين المحليين، يُطلب من المصنعين الأجانب التقدم لشهادة BIS
                تحت النظام X الامتثال لعملية أكثر صرامة وخطوات إضافية. يُفصل الإجراء كالتالي.
            </p>

            <PointsListWithoutHeading
                points={[
                    "إعداد الوثائق: الأعمال المسجلة، والمنتج وتخطيط المصنع، وتقارير الاختبار، والوثائق المتعلقة بإدارة الجودة كلها يجب أن تكون في المجلد المكون للامتثال.",
                    "تقديم الطلب: يُقدم الطلب، والرسوم المطلوبة وجميع مواد الطلب من خلال بوابة BIS عبر الإنترنت.",
                    "تسجيل الطلب والفحص: يُسجل الطلب بواسطة BIS ويُجرى فحص الوثائق. يجب على المتقدم حل أي مشكلات قد تكون لدى BIS في الوقت المناسب.",
                    "تعيين المدقق ودفع: يُعين مدققو BIS المسؤولون عن تفتيش المصنع للمتقدم للتدقيق. يجب على المتقدم دفع الرسوم المحددة للتدقيق الذي أُجري، كما هو محدد بالتشريعات ذات الصلة.",
                    "إعداد التدقيق: يتحمل المصنعون الأجانب مسؤولية الترتيبات اللوجستية للتدقيق مثل إصدار التأشيرة، وتذاكر الطيران، وحجوزات الفندق لمسؤولي BIS يتم ترتيبها ودفعها.",
                    "تدقيق المصنع واختيار العينة: يُجري مسؤولو BIS تدقيق مصنع يمتد 3 أيام (يمكن إضافة أيام أكثر إذا لزم الأمر).",
                    "اختبار المنتج: تُرسل العينات المختارة إلى مختبر معتمد من BIS للاختبار. في بعض الحالات، يُعاقد الاختبار مع مختبرات اختبار أخرى وبالتالي يتم تسوية الدفع من خلال المختبر الرئيسي للاختبار.",
                    "دفع رسوم العلامة والرخصة: بعد التدقيق الناجح ونتائج الاختبار، يجب على المصنع دفع رسوم العلامة المطلوبة ورسوم الرخصة إلى BIS.",
                    "منح الرخصة: تصدر BIS الرخصة/شهادة الامتثال (CoC) بمجرد اتباع جميع الشروط بالكامل. ثم تسمح BIS للمصنع باستخدام علامة المعيار BIS على المنتجات المعتمدة الأخرى، بمجرد تأكيد الامتثال.",
                ]}
            />

            <p className="service-left-content-paragraph">
                يشمل التدقيق: تقييم أنظمة ضمان الجودة وسير العمل
                في عمليات التصنيع، تقييم الامتثال والوثائق الفنية، اختيار عينة اختبار مستقلة.
            </p>


            <p className="service-left-content-paragraph">
                تستغرق العملية بأكملها، بناءً على ممارسات BIS، حوالي 6-7
                أشهر.
            </p>


            <h3 className="service-left-content-heading-three">
                نقاط إضافية رئيسية للمصنعين الأجانب:
            </h3>


            <PointsListWithoutHeading
                points={[
                    "تصنيف FMCS: يُصنف جميع المصنعين الأجانب كـ 'كبيرة النطاق' تحت نظام شهادة المصنعين الأجانب. هذا التصنيف بغض النظر عن حجم العمليات المُجراة.",
                    "الممثل الهندي المخول (AIR): يُطلب من كل مصنع أجنبي تعيين ممثل هندي مخول (AIR). يكون AIR النقطة الرئيسية للاتصال للمتقدم الأجنبي وBIS، مسؤول عن الامتثال، والتعاون، وصيانة رخصة BIS.",
                    "تدقيقات المصنع: تدقيقات المصنع للمصنعين الأجانب شاملة وتميل إلى الاستمرار 3 أيام. كما أن أيام أكثر مطلوبة في حالة تقديم طلبات منتجات متعددة.",
                ]}
            />

        </div>
    )
}

const SchemeXMainContentLeftOverviewSection = () => {
    // Download function for table data
    const downloadTableData = () => {
        const link = document.createElement("a");
        link.href = "/pdf/schemeXproduct.pdf";
        link.download = "SchemeXproduct.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="service-left-content-index-heading">نظرة عامة</span>
                <Separator className="service-left-content-separator" />
            </div>


            <h2 className="service-left-content-heading-two">
                مقدمة عن شهادة نظام X لـ BIS
            </h2>

            <p className="service-left-content-paragraph">
                أطلقت مكتب المعايير الهندي، أو BIS باختصار،
                &ldquo;النظام X&rdquo; في 16 مارس 2022، بهدف تحسين الامتثال
                لسلامة وجودة المنتج في الهند. يمكن للمصنعين الهنديين والأجانب
                التقدم بطلب لشهادة BIS للآلات والمعدات الكهربائية،
                والمكونات مثل التجميعات، والتجميعات الفرعية، والأدوات المحددة في
                الجدول II من النظام X وأخذ الشهادة قبل التصدير،
                أو البيع، أو التوزيع في الهند.
            </p>


            <p className="service-left-content-paragraph">
                تحت النظام X، يمكن للمصنعين التقدم بطلب لـ رخصة BIS أو
                شهادة امتثال (CoC) لمفاتيح الجهد المنخفض ومعدات التحكم
                والآلات، والمعدات الكهربائية. بمجرد اعتماد المصنعين، يُسمح لهم باستخدام علامة المعيار BIS، مما يشير إلى
                أن منتجاتهم تتوافق مع المعايير الموضوعة في
                الهند.
            </p>


            <p className="service-left-content-paragraph">
                تساعد الشهادة، بينما تعزز المنتج والامتثال للمعايير
                الهندية ولوائح الحكومة، في بناء ثقة وراحة البال لدى
                المستهلكين في المنتجات المعتمدة.
            </p>


            <h2 className="service-left-content-heading-three">
                ما هي شهادة النظام X؟
            </h2>


            <p className="service-left-content-paragraph">
                النظام X هو نظام شهادة منتج تم تطويره تحت لوائح تقييم الامتثال لـ BIS،
                2018 وبعد ذلك تم تبسيطه تحت
                لوائح تقييم الامتثال (التعديل) لـ BIS، 2022.
            </p>



            <p className="service-left-content-paragraph">
                الهدف الرئيسي هو جلب معايير السلامة والجودة الهندية إلى
                المعايير العالمية، خاصة فيما يتعلق بالآلات الصناعية و
                المعدات الكهربائية. المنتجات المصنعة في أو المستوردة إلى الهند
                تحت هذا النظام تخضع لفحص وتقييم صارم لإثبات الفنية، والسلامة، و
                معايير الأداء.
            </p>


            <p className="service-left-content-paragraph">
                تم تعديل الأحكام تحت النطاق الأصلي لشهادة النظام X
                وتوسيعها مع الأمر الصادر حديثًا بشأن سلامة الآلات والمعدات
                الكهربائية (اللائحة الفنية الشاملة)، 2024، والذي يخضع لاختصاص
                وزارة الصناعات الثقيلة وتم إحضاره إلى التنفيذ بواسطة BIS. يدخل الأمر حيز التنفيذ في 1
                سبتمبر 2026، ويغطي طيفًا واسعًا من الآلات والمعدات
                الكهربائية مثل المضخات للتعامل مع السوائل، والضواغط، والرافعات،
                والآلات الكهربائية الدورانية، والمحولات، ومفاتيح التحكم ومعدات التحكم.
            </p>


            <p className="service-left-content-paragraph">
                التجميعات، والتجميعات الفرعية والمكونات لهذه الآلات أو المعدات
                جزء أيضًا من نطاق الشهادة وفقًا للقسم 16 من قانون
                مكتب المعايير الهندي، 2016.
            </p>

            <p className="service-left-content-paragraph">
                علاوة على ذلك، تحت قواعد CMVR 1989 (بناء وتصنيع
                لائحة الصمام)، البوثر والأنواع الأخرى من معدات البناء
                تحت اختصاص النظام X، يُضمن أن السوق لا يتعرض
                للمعدات التي تفتقر إلى المتطلبات الرئيسية للسلامة والمعايير
                الفنية.
            </p>


            <h2 className="service-left-content-heading-three">
                اللائحة الفنية الشاملة (OTR)
            </h2>


            <p className="service-left-content-paragraph">
                أصدرت وزارة الصناعات الثقيلة &ldquo;اللائحة الفنية
                الشاملة حول أوامر السلامة (سلامة الآلات والمعدات
                الكهربائية)&rdquo; عبر إخطار E-Gazette في 28 أغسطس 2024. تهدف هذه
                اللائحة المبتكرة إلى تحسين - السلامة، والجودة وال
                الامتثال للآلات، والمعدات الكهربائية وتجميعاتها، والفرعية
                والمكونات، تحت النظام X من لائحة BIS، 2016.
            </p>


            <p className="service-left-content-paragraph">
                تحت OTR، تشمل جميع فئات الآلات والمعدات الكهربائية، و
                جميع أجزائها ومكوناتها. ومع ذلك، بعض الفئات مستثناة صراحة:
            </p>

            <PointsListWithoutHeading
                points={[
                    "أي آلات ومكونات هي جزء من أي أمر آخر تحت القسم 16 الذي صدر تحت قانون مكتب المعايير الهندي، 2016.",
                    "السلع والمنتجات المحلية المصنعة والمقصودة فقط للتصدير.",
                    "آلات ومعدات البناء التي تخضع لقواعد CMVR، 1989، المقررة بواسطة وزارة النقل الطرقي والطرق السريعة (MoRTH).",
                ]}
            />


            <p className="service-left-content-paragraph">
                تم إجراء هذه الاستثناءات لتسهيل الامتثال وتجنب التكرار
                غير الضروري للتنظيم من أجل تعزيز سهولة ممارسة الأعمال.
            </p>



            <p className="service-left-content-paragraph">
                تغطي اللائحة الفنية الشاملة، 2024 جميع الآلات وال
                المعدات الكهربائية، بما في ذلك مفاتيح الجهد المنخفض ومعدات التحكم
                المُخطرة بواسطة وزارة الصناعات الثقيلة، ستُعامل تحت إطار
                النظام X لشهادة BIS. سيدخل الأمر حيز التنفيذ
                في 1 سبتمبر 2026 حتى يتمكن المصنعون والمستوردون
                من تعديل عملياتهم وفقًا للأوامر الصادرة.
            </p>


            <h2 className="service-left-content-heading-three">
                شهادة BIS تحت اللائحة الفنية الشاملة
            </h2>


            <p className="service-left-content-paragraph">
                وفقًا لـ OTR 2024، يجب على المصنعين، بالإضافة إلى المستوردين، للآلات
                والمعدات الكهربائية التي تشمل المضخات، والمضخات، والضواغط،
                والطرد المركزي، والرافعات، والمحولات، ومفاتيح التحكم التقدم بطلب لشهادة BIS
                تحت النظام X.
            </p>



            <p className="service-left-content-paragraph">
                تحت النظام X، يمكن للمصنعين الاختيار للتقدم بطلب لـ:
            </p>


            <PointsListWithoutHeading
                points={["رخصة BIS، أو", "شهادة امتثال (CoC)"]}
            />


            <p className="service-left-content-paragraph">
                المنتجات التي تحمل علامة المعيار BIS والتي هي علامة امتثال
                تُشهد وتضمن للمستخدمين أن المنتج آمن،
                موثوق، وذو جودة جيدة. إنها أيضًا علامة ثقة وأداء
                جيد حقًا.
            </p>


            <h3 className="service-left-content-heading-three">
                ملاحظة خاصة للمؤسسات الصغيرة والمتوسطة
            </h3>


            <p className="service-left-content-paragraph">
                كما في العديد من القطاعات الأخرى، يجب على المؤسسات الصغيرة والمتوسطة (MSMEs)
                الامتثال أيضًا للنظام X والحصول على شهادة BIS لآلاتهم
                والمعدات الكهربائية. بينما قد يبدو أن الامتثال
                للمتطلبات التنظيمية قد يكون صعبًا، فإن شهادة النظام X
                إضافة قيمة وميزة لـ MSMEs للأسباب التالية:
            </p>


            <PointsListWithoutHeading
                points={[
                    "يثبت الالتزام بالقانونية والالتزامات الأخرى المطلوبة من الحكومة.",
                    "يزيد من سمعة المنتج وثقة المستهلك.",
                    "يسهل الوصول إلى سوق أكبر محليًا ودوليًا.",
                    "يحسن موقف MSME عالميًا فيما يتعلق بالتنافسية، والسلامة، والجودة.",
                ]}
            />


            <h3 className="service-left-content-heading-three">
                شعار نظام X لـ BIS
            </h3>



            <p className="service-left-content-paragraph">
                تشكل علامة المعيار BIS للنظام X علامة جودة ومبدأ
                ثقة. يحتوي الشعار على:
            </p>



            <PointsListWithoutHeading
                points={[
                    "يُعرض رقم المعيار في الجزء العلوي من الشعار؛ و",
                    "رقم الرخصة المعروض في الجزء السفلي من الشعار بالصيغة: CM/L-XXXXXXXXXX",
                ]}
            />



            <p className="service-left-content-paragraph">
                تشير هذه العلامة إلى أن رخصة BIS قد صدرت بنجاح إلى
                المصنع. تسمح للمصنع بوضع علامة BIS و
                تضمن للمستهلكين أن المنتج أصلي وآمن.
            </p>


            <div className="flex justify-center mt-[20px] md:mt-[26px]">
                <img
                    src="/services-images/scheme-x-logo.png"
                    alt="شعار نظام X لـ BIS"
                    title="شهادة نظام X لـ BIS"
                    className="max-w-full h-auto rounded-lg shadow-md"
                />
            </div>


            <h3 className="service-left-content-heading-three">
                الآثار القانونية
            </h3>


            <p className="service-left-content-paragraph">
                علامة المعيار BIS هي علامة ثقة وجودة. العلامة متاحة فقط
                بعد أن يكون هناك عقد صالح. يسمح العقد الصالح فقط للمالك باستخدام العلامة. استخدام العلامة بدون عقد
                صالح جريمة تحت الدستور الهندي وتساوي امتلاك علامة
                قانونية. يُوضع مالك العلامة تحت قيود ثقيلة
                لاستخدام رخصة CM/L-XXXXXXXXXX للمنتجات
                التي ليس لديها شهادة BIS.
            </p>




            <p className="service-left-content-paragraph">
                يتبع ذلك أن كل منتج ملزم بـ:
            </p>


            <PointsListWithoutHeading
                points={[
                    "الحصول على رخصة BIS صالحة تحت النظام X.",
                    "إشباع المتطلبات ذات الصلة للمعايير الهندية؛ و",
                    "وضع المنتجات بشكل صحيح بعلامة BIS المعتمدة.",
                ]}
            />


            <p className="service-left-content-paragraph">
                يمتد هذا الإطار التنظيمي لحماية مصالح
                المستهلكين ورجال الأعمال، مما يعزز سوقًا يركز على
                السلامة، والشفافية، والثقة.
            </p>



            <h2 className="service-left-content-heading-three">
                الاختلافات الرئيسية بين النظام I والنظام X
            </h2>


            <h3 className="service-left-content-heading-three">
                النظام I
            </h3>


            <PointsListWithoutHeading
                points={[
                    "يشمل فئة أوسع من المنتجات الاستهلاكية مثل الإلكترونيات، والأجهزة المنزلية، وحتى المنتجات الصناعية.",
                    "يجب أن تحمل المنتجات الصادرة شهادة تحت هذا النظام علامة ISI القياسية.",
                    "يتعلق بكل من المصنعين المحليين والأجانب.",
                    "يتضمن تدقيقات المصنع واختبار العينات لتحديد الجودة والامتثال للمعايير الهندية.",
                ]}
            />

            <h3 className="service-left-content-heading-three">
                النظام X
            </h3>

            <PointsListWithoutHeading
                points={[
                    "يغطي المنتجات الهندسية الصناعية والحرجة للسلامة عالية المخاطر، والتي تشمل المعدات الكهربائية، والآلات، وأنظمة الصناعية الثقيلة.",
                    "شهادة أكثر صرامة من النظام I. تتضمن تقريرًا فنيًا متقدمًا، وفحص الامتثال، وتدقيقات شهادة واسعة.",
                    "النظام X يميل إلى أن يكون أغلى من النظام I بسبب الوثائق الإضافية للامتثال.",
                    "أي أعمال تتعامل مع المعدات الكهربائية أو الآلات الصناعية ملزمة بالحصول على شهادة تحت النظام X.",
                ]}
            />

            <div className="mt-[16px] md:mt-[24px]">
                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                الميزة
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                علامة ISI
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                النظام X
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                يدير بواسطة
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                BIS الهندي
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                BIS الهندي
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                نوع الشهادة
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                رخصة BIS
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                شهادة BIS / رخصة BIS
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                المنتجات المستهدفة
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                السلع الاستهلاكية
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                الآلات والمعدات الكهربائية
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                العلامة المستخدمة
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                علامة ISI
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                علامة المعيار BIS (تحت النظام X)
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                                مستوى الامتثال
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                امتثال المعيار الهندي
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                امتثال فني وسلامة عالي المستوى
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>


            <h3 className="service-left-content-heading-three">
                المنتجات المشمولة بنظام X
            </h3>


            <p className="service-left-content-paragraph">
                يغطي النظام X المنتجات ذات أعلى مخاطر السلامة والأداء، بما في ذلك:
            </p>



            <PointsListWithoutHeading
                points={[
                    "المعدات الكهربائية: المحولات الصناعية، ووحدات الطاقة، وما شابه، ومفاتيح الجهد المنخفض ومعدات التحكم، بالإضافة إلى الأجهزة عالية الجهد الأخرى.",
                    "الآلات الثقيلة: المطابع الهيدروليكية، والرافعات الصناعية، وأدوات الآلات الآلية، والمعدات المتخصصة للصناعات الكبيرة.",
                    "معدات الحياة الحرجة: مطفآت الحريق، والأوعية تحت الضغط، وأنظمة الكهرباء الطارئة، وأجهزة وأنظمة أخرى لسلامة الحياة.",
                    "الإلكترونيات الاستهلاكية والصناعية المتخصصة: الأجهزة الإلكترونية الطبية والمعدات التي تتضمن تدابير حماية متقدمة.",
                ]}
            />

            {/* Scheme X Product Table 20 */}
            <div className="mt-[16px] md:mt-[24px]">

                <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
                    <TableHeader className="bg-[#F9F7F2]">
                        <TableRow className="bg-[#1A8781]/10">
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                                الرقم التسلسلي.
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                                وصف الآلات والمعدات الكهربائية
                            </TableHead>
                            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                                رمز HS
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white divide-y divide-gray-200">
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                1
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع المضخات للتعامل مع السوائل، مصاعد السوائل و
                                    (أو)تجميعاتها /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841340، 841350، 841360، 841370، 841381، 841382، 841391 و
                                841392
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                2
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-compressors"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الضواغط و(أو)تجميعاتها /التجميعات الفرعية
                                    /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841430، 841440، 84148011، 84148090، 84149011، 84149019، 84149040
                                و 84149090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                3
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-heat-treatment-equipment"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات لمعالجة المواد بعملية
                                    تشمل تغيير درجة الحرارة و(أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                841932، 841939، 841940، 841950، 841960، 841981، 841989 و
                                84199090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                4
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الطرد المركزي، آلات الترشيح أو التنقية لـ
                                    السوائل والغازات و(أو)تجميعاتها /التجميعات الفرعية
                                    /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842111، 842112، 842119، 84212110، 84212190، 842122، 842129،
                                842131، 842139، 842191 و 842199
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                5
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-packing-machinery"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات للحشو، والإغلاق، والختم، وتسمية
                                    الزجاجات، والتعبئة أو اللف و(أو)تجميعاتها
                                    /التجميعات الفرعية/المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842220، 842230، 842240 و 842290
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                6
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-cranes"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الرافعات و (أو) تجميعاتها
                                    /التجميعات الفرعية/المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                842611، 842612، 842619، 842620، 842630، 842641، 842649، 842691
                                و 84269990
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                7
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-construction-machinery"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات للبناء، وحركة الأرض، والتعدين و
                                    (أو)تجميعاتها /التجميعات الفرعية/المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8429، 843010، 843020، 843031، 843039، 843041، 843049، 843050،
                                843141، 843142، 843143 و 843149
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                8
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-weaving-machines-looms"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع آلات النسيج (النول) و (أو)تجميعاتها
                                    /التجميعات الفرعية / المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8446، 844811، 844819، 844842 و 844849
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                9
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-embroidery-machinery"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات لصنع التطريز و(أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84479020 و 844859
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                10
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع أدوات آلات القطع المعدني المشمولة تحت
                                    العنوان 8456 إلى 8461 و(أو)تجميعاتها
                                    /التجميعات الفرعية/المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8456، 8457، 8458، 8459، 8460، 8461 و 846693
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                11
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-machine-tools"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع أدوات الآلات للعمل على الحجر، والسيراميك،
                                    والخرسانة، والأسمنت المحتوي على الأسبستوس أو زجاج المعادن المشابه و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8464 و 84669100
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                12
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات للعمل على المطاط والبلاستيك و(أو)
                                    تجميعاتها /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8477
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                13
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات بما في ذلك الآلات للأعمال العامة و
                                    البناء والآلات والأجهزة الميكانيكية ذات
                                    الوظائف الفردية، غير المحددة أو المشمولة في مكان آخر في
                                    الفصل 84 و(أو)تجميعاتها/التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84791000، 84798999 و 84799090
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                14
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع التروس والتروس، والعجلات المسننة، وسلسلة التروس،
                                    وعناصر النقل الكروية أو الدورانية، وصناديق التروس و
                                    مغيرات السرعة، بما في ذلك محولات العزم و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                84834000 و 84839000
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                15
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-rotary-electrical-machines"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع الآلات الكهربائية الدورانية مثل المولد، إلخ.
                                    و (أو) تجميعاتها /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8501 و 8503
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                16
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-diesel-generators"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع مولدات الديزل و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8502 و 8503
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                17
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-transformers"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع المحولات و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                850421، 850422، 850423، 850431، 850432، 850433، 850434 و
                                850490
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                18
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-power-semiconductor-converters"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع محول أشباه الموصلات الطاقة و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                850440
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                19
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع معدات المفاتيح والتحكم تعمل بجهود
                                    لا تتجاوز 1000 فولت و (أو)تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8536، 8537 و 8538
                            </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-gray-50">
                            <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                                20
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                <Link
                                    to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
                                    className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                                >
                                    جميع أنواع معدات المفاتيح والتحكم تعمل بجهود
                                    تتجاوز 1000 فولت و (أو) تجميعاتها
                                    /التجميعات الفرعية /المكونات
                                </Link>
                            </TableCell>
                            <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                                8535، 8537 و 8538
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                {/* Heading and Description */}
                <div className="mb-6">
                    <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
                        معيار السلامة حسب المنتج
                    </h3>
                    <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        وصف الآلات والمعدات الكهربائية
                    </p>
                </div>

                <div className="flex justify-end mb-4">
                    <button
                        onClick={downloadTableData}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 md:h-5 md:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        تنزيل PDF
                    </button>
                </div>
            </div>

            <h2 className="service-left-content-heading-three">
                معايير السلامة تحت نظام X لـ BIS
            </h2>



            <p className="service-left-content-paragraph">
                أكثر من مجرد ضرورة قانونية، تقدم شهادة نظام X لـ BIS
                وعدًا بالسلامة، والجودة، والموثوقية. هذه
                الشهادة، التي تتضمن الالتزام الصارم بالمعايير الوطنية والدولية،
                تضمن أن الآلات والأجهزة الكهربائية
                المقدمة للمستخدمين آمنة، وصديقة للبيئة، وفنيًا
                سليمة.
            </p>


            <p className="service-left-content-paragraph">
                للشهادة تحت النظام X، يحتاج المصنعون إلى الامتثال للآتي
                المكونات الرئيسية للسلامة:
            </p>



            <PointsListWithoutHeading
                points={[
                    "السلامة الكهربائية: الامتثال لـ IEC والمعايير الهندية ذات الصلة. تحمي الشهادة من الدوائر القصيرة، والصدمات الكهربائية، وانهيار العزل، وفقدان الأرض الحامية، وإشعال المواد القابلة للاحتراق المحيطة، والحريق.",
                    "السلامة الميكانيكية: تقييم سلامة هيكل الآلة وسالمة الأجزاء المتحركة والمواد الجديدة. يضمن أن المعدات خاضعة بأمان للإجهاد الميكانيكي، والتآكل، والمخاطر التشغيلية.",
                    "سلامة الحريق: استخدام مواد مصممة وبنيت بمواد مقاومة للحريق. الامتثال لمعايير أداء الانتشار اللظي للتحكم في المخاطر المرتبطة بالحريق.",
                    "الامتثال البيئي: استخدام الطاقة المنضبطة والمواد الصديقة للبيئة في إنتاج المعدات. يشجع المصنعين على تقليل التأثير البيئي لمعداتهم.",
                    "إدارة الجودة: سيطرة مهيمنة ومستقلة على عمليات الإنتاج للحفاظ على المعايير والمعايير المحددة مسبقًا. التركيز على تنظيم شروط المصنع، بما في ذلك تدقيقات العملية، والالتزام المستمر.",
                ]}
            />



            <h2 className="service-left-content-heading-three">
                المعايير التنظيمية تحت النظام X
            </h2>


            <p className="service-left-content-paragraph">
                يُطلب من المصنعين الامتثال للمعايير الهندية ذات الصلة
                والتي تتوافق مع المعايير الدولية، بما في ذلك:
            </p>


            <h3 className="service-left-content-heading-three">
                معايير النوع A:
            </h3>


            <PointsListWithoutHeading
                points={[
                    "IS 16819:2018 / ISO 12100:2010 – سلامة الآلات: المبادئ العامة للتصميم، وتقييم المخاطر، وتقليل المخاطر.",
                ]}
            />


            <h3 className="service-left-content-heading-three">
                معايير النوع B:
            </h3>


            <PointsListWithoutHeading
                points={[
                    "الموضحة في الجدول الثاني من أمر اللائحة الفنية الشاملة (OTR)، 2024.",
                ]}
            />



            <h3 className="service-left-content-heading-three">
                معايير النوع C:
            </h3>


            <PointsListWithoutHeading
                points={["الموضحة في الجدول الثالث من أمر OTR، 2024."]}
            />


            <h3 className="service-left-content-heading-three">
                سلسلة IS/IEC 60947:
            </h3>


            <PointsListWithoutHeading
                points={[
                    "تغطي مفاتيح الجهد المنخفض ومعدات التحكم في أجزاء وأقسام متعددة.",
                ]} />
        </div>
    )
}




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