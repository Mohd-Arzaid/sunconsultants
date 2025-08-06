import { Check } from "lucide-react";
import { ArabicAboutAuthor, ArabicFooter, ArabicServiceContactForm, ArabicServiceContentRight, ArabicServices } from "./ArabicBISFM";
import { useState, useEffect, useRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CISProductTable } from "./CRSRegistration";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ArabicCRS = () => {
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
                                    <BreadcrumbPage>ما هو CRS BIS أو تسجيل CRS</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <ArabicCrsHero />
            <ArabicCrsIndex />
            <ArabicCrsContent />
            <ArabicFooter />
            <ScrollToTopButton />
        </main>
    )
}

export default ArabicCRS

const ArabicCrsHero = () => {
    return (
        <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
            {/* Background gradient */}
            <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

            {/* Decorative elements */}
            <div className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float" style={{ animationDelay: "1s" }}></div>

            <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
                {/* Left Side */}
                <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
                    <div className="inline-flex items-center">
                        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
                        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                            خبرة معتمدة
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            تسجيل BIS CRS
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        إلزامي للمنتجات الإلكترونية لضمان السلامة والجودة. احصل على موافقة BIS بمساعدة الخبراء!
                    </p>

                    <div className="flex items-center -mt-2">
                        <div className="flex items-center cursor-pointer group" onClick={() => {
                            const servicesSection = document.getElementById("services");
                            if (servicesSection) {
                                servicesSection.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }}>
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
                <ArabicServiceContactForm />
            </div>
        </main>
    )
}

const ArabicCrsIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Observe each section
    const SECTIONS = [
        "overview",
        "eligibility",
        "documents",
        "registration",
        "financials",
        "elabelling",
        "expertise",
    ];

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
        // Initial check
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        if (entry.target.id === "faqs") {
                            setActiveSection("faqs");
                        } else {
                            setActiveSection(entry.target.id);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        SECTIONS.forEach((section) => {
            const element = document.getElementById(
                section.toLowerCase().replace(/\s+/g, "-")
            );
            if (element) {
                sectionObserver.observe(element);
            }
        });

        return () => sectionObserver.disconnect();
    }, []);

    // Arabic menu items mapping
    const arabicMenuItems = {
        "overview": "نظرة عامة",
        "eligibility": "الأهلية",
        "documents": "المستندات",
        "registration": "التسجيل",
        "financials": "المالية",
        "elabelling": "التوسيم الإلكتروني",
        "expertise": "الخبرة",
        "faqs": "الأسئلة الشائعة"
    };

    return (
        <div
            ref={stickyRef}
            className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between px-4 h-20">
                <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
                    {arabicMenuItems[activeSection]}
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
                                    {arabicMenuItems[item]}
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
                            {arabicMenuItems[item]}
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

const ArabicCrsContent = () => {
    return (
        <div className="">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <ArabicCrsContentLeft />

                    {/* Right Side */}
                    <ArabicServiceContentRight />
                </div>
            </div>
            <ArabicCrsServiceFaq />
            <CISProductTable />
            <div id="services">
                <ArabicServices />
            </div>
        </div>
    )
}

const ArabicCrsContentLeft = () => {
    return (
        <div className=" flex-1 ">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">

                <section className="flex flex-col gap-2 md:gap-4 mb-6">
                    <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                        الدليل الشامل لشهادة BIS وتسجيل CRS في الهند
                    </h1>

                    <h2 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
                        ما هو تسجيل BIS؟
                    </h2>

                    <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
                        مكتب المعايير الهندية (BIS) هو هيئة المعايير الوطنية في الهند، ويعمل تحت إشراف وزارة شؤون المستهلكين والأغذية والتوزيع العام، حكومة الهند. مسؤوليته الأساسية هي ضمان أن المنتجات في السوق الهندي تتوافق مع معايير الجودة والسلامة والأداء المحددة في المعايير الهندية (IS).
                    </p>

                    <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
                        أحد أهم المخططات التي يحكمها BIS هو مخطط التسجيل الإلزامي (CRS) — إطار تنظيمي يفرض تسجيل المنتجات لفئات معينة، خاصة السلع الإلكترونية وتكنولوجيا المعلومات.
                    </p>

                    <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
                        توفر شهادة BIS ضماناً رسمياً بأن المنتج يتوافق مع معايير السلامة والأداء الهندية، مما يساعد في حماية المستهلكين الهنود من المنتجات غير الآمنة أو الرديئة الجودة.
                    </p>
                </section>

                <ArabicCrsOverviewSection />
                <Divider />

                <ArabicCrsEligibilitySection />
                <Divider />

                <ArabicCrsDocumentsSection />
                <Divider />

                <ArabicCrsRegistrationSection />
                <Divider />

                <ArabicCrsFinancialsSection />
                <Divider />

                <ArabicCrsELabellingSection />
                <Divider />

                <ArabicCrsExpertiseSection />
                <Divider />

                <ArabicCrsReviewSection />


                <ArabicAboutAuthor />

            </div>
        </div>
    )
}

const PointsListTwo = ({
    points,
    heading,
    headingTag = "h3", // Default to h3
    pointTag = "h3", // Default to h3
}) => {
    // Create dynamic components based on the tag props
    const HeadingTag = headingTag;
    const PointTag = pointTag;

    return (
        <div className="flex flex-col ">
            <HeadingTag className="font-semibold font-geist text-[20px] text-[#131316]">
                {heading}
            </HeadingTag>
            <ul className="flex flex-col mt-[20px] gap-2 list-none">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                            <Check size={12} className="text-[#020817]" />
                        </div>
                        <PointTag className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                            {point}
                        </PointTag>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Divider = () => {
    return (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
    )
}

const ArabicCrsOverviewSection = () => {
    return (
        <section id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    نظرة عامة
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal my-3 md:my-0">
                ما هو CRS – مخطط التسجيل الإلزامي؟
            </h2>

            {/* Content */}
            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                تم إطلاق مخطط التسجيل الإلزامي (CRS) في عام 2012، وهو مخطط تسجيل المنتجات تحت إشراف BIS يستهدف في البداية السلع الإلكترونية. على مر السنين، توسع ليشمل مجموعة واسعة من فئات المنتجات مثل الأجهزة الكهربائية ومعدات الطاقة الشمسية والبطاريات والمزيد. CRS إلزامي للمنتجات المعلن عنها من خلال أوامر مراقبة الجودة (QCOs) الصادرة عن مختلف الوزارات.
            </p>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                يضمن تسجيل CRS أن أي منتج مشمول في المخطط يجب أن يكون مسجلاً لدى BIS قبل بيعه أو استيراده أو توزيعه في الهند.
            </p>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                تاريخ شهادة CRS في الهند
            </h2>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "الإلكترونيات الاستهلاكية",
                            "الإضاءة وLED",
                            "البطاريات والخلايا",
                            "أجهزة الاتصال اللاسلكي",
                            "الألواح الشمسية والمكونات",
                            "الأجهزة الكهربائية المنزلية"
                        ]}
                        heading="تم إطلاق أول QCO تحت مخطط CRS في عام 2012، مستهدفاً المعدات الإلكترونية وتكنولوجيا المعلومات. منذ ذلك الحين، تم إصدار QCOs إضافية عبر القطاعات بما في ذلك:"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                تستمر قائمة CRS في النمو، مما يجعل من الضروري للمصنعين البقاء محدثين بالإشعارات الجديدة.
            </p>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                تسجيل CRS مقابل علامة ISI: ما الفرق؟
            </h2>

            {/* Comparison Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[200px] border-r border-gray-300">
                                    الميزة
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    تسجيل CRS
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px]">
                                    علامة ISI
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    الطبيعة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    إلزامي (فقط للمنتجات المدرجة في QCO)
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    طوعي أو إلزامي (حسب المنتج)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    نطاق المنتج
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    الإلكترونيات، تكنولوجيا المعلومات، الكهربائية، البطاريات، إلخ
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    الغذاء، الأسمنت، الصلب، الكهربائيات، إلخ
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    التطبيق
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    عبر الإنترنت، بوابة BIS CRS
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يدوي + عبر الإنترنت، نظام BIS ISI
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    المرونة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    فقط للسلع المشمولة بـ QCO
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يمكن أن يكون طوعياً للسلع غير المشمولة بـ QCO
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    التوسيم
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    يتطلب شعار BIS CRS ورقم التسجيل
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يتطلب شعار ISI مع رمز المعيار
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                لماذا تحتاج إلى معرفة إطار عمل BIS CRS
            </h2>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "تجنب عقوبات عدم الامتثال",
                            "التخطيط لجداول الإنتاج (مع مراعاة مدة اختبار المختبر)",
                            "ضمان تسهيل إجراءات التخليص الجمركي",
                            "بناء ثقة طويلة المدى للعلامة التجارية مع المستهلكين الهنود"
                        ]}
                        heading="سواء كنت مصنعاً في الهند أو علامة تجارية دولية تتطلع إلى التوسع في السوق الهندي، فإن فهم عملية BIS CRS ضروري. يساعدك على:"
                    />
                </div>
            </div>
        </section>
    )
}

const ArabicCrsEligibilitySection = () => {
    return (
        <section id="eligibility" className="flex flex-col scroll-mt-20">
            {/* Products */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    الأهلية
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
                معايير الأهلية لتسجيل BIS CRS
            </h2>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                من يمكنه التقدم للحصول على شهادة BIS تحت CRS؟
            </h3>

            {/* Content */}
            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                للحصول على شهادة BIS تحت مخطط التسجيل الإلزامي (CRS)، يجب على مقدم الطلب تلبية متطلبات الأهلية المحددة من قبل مكتب المعايير الهندية. تضمن هذه الشروط أن المصنعين الحقيقيين فقط هم من يُسمح لهم بتسجيل وتوسيم المنتجات بشعار BIS CRS.
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                قائمة مراجعة معايير الأهلية
            </h3>

            {/*  table for eligibility criteria */}

            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    المتطلب
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    الوصف
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    يجب أن يكون مقدم الطلب مصنعاً
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    المصنع الأصلي فقط (وليس التاجر أو الموزع) للمنتج مؤهل للتقديم.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    الموقع يمكن أن يكون هندياً أو أجنبياً
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يمكن للمصنعين الهنود والعلامات التجارية الدولية التقديم.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    AIR (الممثل الهندي المعتمد)
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يجب على المصنعين الأجانب تعيين AIR — إما فرعهم الهندي أو طرف ثالث معتمد رسمياً.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    تقارير الاختبار من مختبرات BIS المعتمدة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يجب اختبار المنتج في مختبر معترف به من BIS وتلبية المعيار الهندي (IS) المطبق.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    التوثيق المناسب
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يجب تقديم جميع المستندات المطلوبة بالصيغ المحددة (التفاصيل في القسم التالي).
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    تسجيل واحد لكل علامة تجارية وموقع
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    يجب تقديم طلب منفصل لكل نوع منتج وموقع تصنيع واسم علامة تجارية.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                من هو الممثل الهندي المعتمد (AIR)؟
            </h2>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                إذا كنت مصنعاً أجنبياً، يتطلب منك BIS تعيين ممثل هندي معتمد (AIR) كجهة اتصالك الرسمية في الهند.
            </p>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "يعمل كممثل قانوني لمقدم الطلب الأجنبي",
                            "يتعامل مع جميع اتصالات BIS والالتزامات نيابة عن المصنع",
                            "يتحمل المسؤولية القانونية للامتثال والتوثيق",
                            "يجب ألا يكون تاجراً أو موزعاً ما لم يتم تعيينه صراحةً من قبل المصنع"
                        ]}
                        heading="مسؤوليات AIR:"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                يجب على AIR تقديم اتفاقية موقعة من كلا الطرفين ويجب أن يكون لديه عنوان هندي.
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                مثال من العالم الحقيقي:
            </h3>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "شركة ABC هي المصنع",
                            "يختبرون المنتج في مختبر معتمد من BIS في الهند",
                            "مكتبهم في دلهي مسجل كـ AIR",
                            "يقدمون الطلب من خلال بوابة BIS مع المستندات المطلوبة"
                        ]}
                        heading="شركة ABC تريد إطلاق نموذج بنك طاقة جديد في الهند:"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                النتيجة: يتم إصدار شهادة BIS صالحة تحت CRS.
            </p>
        </section>
    )
}

const ArabicCrsDocumentsSection = () => {
    // Table rows data with Arabic content
    const tableRows = [
        {
            document: "إثبات عنوان المصنع",
            whoSubmits: "المصنع",
            notes: "إيجار المصنع، فاتورة المرافق، أو الترخيص"
        },
        {
            document: "تقرير الاختبار من مختبر معتمد من BIS",
            whoSubmits: "المصنع/المختبر",
            notes: "يجب أن يكون حديثاً (خلال 90 يوماً) ويشير إلى رمز IS"
        },
        {
            document: "التعهدات (حسب صيغة BIS)",
            whoSubmits: "مقدم الطلب",
            notes: "يشمل المسؤولية والامتثال ومسؤولية المنتج"
        },
        {
            document: "شهادة العلامة التجارية",
            whoSubmits: "المصنع",
            notes: "مطلوب إذا كانت العلامة التجارية مسجلة"
        },
        {
            document: "اتفاقية AIR (لمقدمي الطلبات الأجانب)",
            whoSubmits: "المصنع الأجنبي وAIR",
            notes: "موقعة ومصدقة"
        },
        {
            document: "إفادة خطية",
            whoSubmits: "المصنع أو AIR",
            notes: "الصيغة قابلة للتحميل من بوابة BIS"
        },
        {
            document: "إيصال الرسوم",
            whoSubmits: "مقدم الطلب",
            notes: "إثبات دفع الرسوم الحكومية"
        },
        {
            document: "خطاب التفويض",
            whoSubmits: "المصنع",
            notes: "يفوض AIR للعمل نيابة عنه"
        },
        {
            document: "شهادة تسجيل الشركة",
            whoSubmits: "المصنع",
            notes: "إثبات تسجيل الأعمال (GST، ROC، إلخ)"
        },
        {
            document: "ملصقات/علامات المنتج",
            whoSubmits: "المصنع",
            notes: "يجب أن تظهر شعار BIS ومعيار IS ومساحة التسجيل"
        }
    ];
    return (
        <section id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    المستندات
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                المستندات المطلوبة لتسجيل BIS CRS
            </h2>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                قائمة المستندات المطلوبة للحصول على تسجيل BIS CRS.
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                عملية تسجيل BIS CRS تتم بالكامل عبر الإنترنت ولكنها تتطلب توثيقاً دقيقاً للحصول على الموافقة بنجاح. حتى الأخطاء البسيطة في النماذج أو الصيغ أو أنواع الملفات يمكن أن تؤدي إلى الرفض أو التأخير.
            </p>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                التوثيق المناسب يضمن أيضاً معالجة شهادة BIS الخاصة بك بشكل أسرع وتبقى صالحة قانونياً عبر عمليات تدقيق الامتثال والفحوصات الجمركية وموافقات السوق.
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                قائمة مراجعة رئيسية: المستندات المطلوبة لتسجيل BIS CRS
            </h3>

            {/* Master Checklist Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    المستند
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    من يقدم؟
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    ملاحظات
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableRows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        className={`font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 ${index % 2 === 1 ? "bg-gray-50" : ""
                                            }`}
                                    >
                                        {row.document}
                                    </TableCell>
                                    <TableCell
                                        className={`font-geist text-base md:text-lg text-left border-r border-gray-200 ${index % 2 === 1 ? "bg-gray-50" : ""
                                            }`}
                                    >
                                        {row.whoSubmits}
                                    </TableCell>
                                    <TableCell
                                        className={`font-geist text-base md:text-lg text-left ${index % 2 === 1 ? "bg-gray-50" : ""
                                            }`}
                                    >
                                        {row.notes}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

const ArabicCrsRegistrationSection = () => {
    return (
        <section id="registration" className="flex flex-col scroll-mt-20">
            {/* Registration */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    التسجيل
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                عملية تسجيل BIS CRS: دليل خطوة بخطوة
            </h2>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                تسجيل BIS CRS هو عملية تتم بالكامل عبر الإنترنت من خلال بوابة تسجيل BIS. ومع ذلك، فهي ليست مجرد رفع المستندات — بل تتطلب دقة تقنية وفهم تنظيمي والتزام صارم بالمعايير الهندية (IS).
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                عملية BIS CRS خطوة بخطوة
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                إليك كيف تتكشف رحلة شهادة BIS تحت CRS:
            </p>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "اختر مختبراً من القائمة المعتمدة من BIS",
                            "قدم عينة منتجك للاختبار تحت المعيار IS المعني",
                            "احصل على تقرير الاختبار النهائي، منسق حسب متطلبات BIS"
                        ]}
                        heading="الخطوة 1: اختبار المنتج في مختبر معترف به من BIS"
                        headingTag="h4"
                        pointTag="h5"
                    />
                </div>
            </div>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "اجمع جميع المستندات المطلوبة (كما هو مفصل في القسم 7)",
                            "تأكد من التسمية الصحيحة والتنسيق والتوقيعات والتواريخ",
                            "أنشئ نموذج ملصق المنتج يظهر مساحة شعار BIS + معيار IS"
                        ]}
                        heading="الخطوة 2: إعداد المستندات"
                        headingTag="h4"
                        pointTag="h5"
                    />
                </div>
            </div>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "سجل الدخول أو سجل في بوابة BIS CRS (https://www.bis.org.in/)",
                            "املأ الحقول الرئيسية: المنتج، رقم الموديل، العلامة التجارية، وحدة التصنيع، وAIR (إن أمكن)",
                            "ارفع جميع المستندات وتقرير الاختبار في الأقسام الصحيحة",
                            "ادفع الرسوم الحكومية عبر الإنترنت"
                        ]}
                        heading="الخطوة 3: تقديم الطلب عبر الإنترنت"
                        headingTag="h4"
                        pointTag="h5"
                    />
                </div>
            </div>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <PointsListTwo
                        points={[
                            "يراجع BIS المستندات المقدمة ويتحقق من تقارير المختبر",
                            "إذا كانت هناك حاجة لأي توضيح، سيتم رفع استفسار من خلال البوابة",
                            "رد بالتوثيق أو الشروحات المناسبة"
                        ]}
                        heading="الخطوة 4: مراجعة الطلب من قبل BIS"
                        headingTag="h4"
                        pointTag="h5"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                يجب حل الاستفسارات خلال 30 يوماً أو سيتم رفض الطلب تلقائياً.
            </p>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <div className="flex flex-col">
                        <h4 className="font-semibold font-geist text-[20px] text-[#131316]">
                            الخطوة 5: منح تسجيل BIS
                        </h4>
                        <ul className="flex flex-col mt-[20px] gap-2 list-none">
                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                                    <Check size={12} className="text-[#020817]" />
                                </div>
                                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                    إذا كان كل شيء في النظام، يصدر BIS شهادة التسجيل
                                </h5>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                                    <Check size={12} className="text-[#020817]" />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                        ستذكر شهادتك:
                                    </h5>
                                    <ul className="flex flex-col mt-2 gap-1 list-none ml-4">
                                        {[
                                            "رقم تسجيل BIS",
                                            "اسم العلامة التجارية",
                                            "موديل المنتج",
                                            "رمز معيار IS"
                                        ].map((detail, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                                    <Check size={12} className="text-[#020817]" />
                                </div>
                                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                    يجب عليك طباعة هذه المعلومات على ملصق المنتج أو تطبيق التوسيم الإلكتروني
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                    <div className="flex flex-col">
                        <h4 className="font-semibold font-geist text-[20px] text-[#131316]">
                            الخطوة 6: التوسيم والتوزيع
                        </h4>
                        <ul className="flex flex-col mt-[20px] gap-2 list-none">
                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                                    <Check size={12} className="text-[#020817]" />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                        يجب أن تحمل جميع المنتجات المعتمدة:
                                    </h5>
                                    <ul className="flex flex-col mt-2 gap-1 list-none ml-4">
                                        {[
                                            "شعار BIS CRS",
                                            "رمز IS المطبق على المنتج",
                                            "رقم التسجيل"
                                        ].map((requirement, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                                                <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                                    {requirement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                                    <Check size={12} className="text-[#020817]" />
                                </div>
                                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                    يجب طباعة الملصق أو تضمينه رقمياً حسب إرشادات BIS
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                الجدول الزمني التقريبي
            </h2>

            {/* Timeline Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    النشاط
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    الوقت المقدر
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    اختبار المنتج
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    7-10 أيام عمل
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    جمع المستندات
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    2-3 أيام
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    تقديم الطلب
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    1 يوم
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    مراجعة BIS + حل الاستفسارات
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    10-15 يوم عمل
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    إصدار الشهادة النهائية
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    2-4 أيام عمل
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-[#1A8781]/5">
                                <TableCell className="font-bold font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    المجموع
                                </TableCell>
                                <TableCell className="font-bold font-geist text-base md:text-lg text-left">
                                    ~4 أسابيع
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                هيكل الرسوم لتسجيل CRS
            </h2>

            {/* Fee Structure Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    نوع الرسوم
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    المبلغ
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    الرسوم الحكومية
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    ₹53,000 + 18% GST لكل تقرير اختبار
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    تقرير إضافي في نفس الطلب
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    ₹20,000 + 18% GST لكل تقرير
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    رسوم الاختبار
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    ₹10,000 – ₹20,000 + 18% GST (يختلف حسب المنتج/المختبر)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="mt-4 font-geist text-sm md:text-base text-[#42434d] italic text-center">
                الأسعار قابلة للتحديث — تأكد من بوابة BIS أو مع مستشارك.
            </p>

            <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                صلاحية شهادة CRS والتجديد
            </h2>

            {/* Validity & Renewal Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    المعامل
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    التفاصيل
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    الصلاحية الأولية
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    2 سنوات
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    مدة التجديد
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    حتى 5 سنوات (إذا لم تتغير مواصفات المنتج)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    عملية التجديد
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    عبر الإنترنت، بناءً على إفادة خطية جديدة + رسوم التجديد
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    هل يلزم إعادة الاختبار؟
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    لا، ما لم تتغير مواصفات المنتج/معيار IS
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

const ArabicCrsFinancialsSection = () => {
    return (
        <section id="financials" className="flex flex-col scroll-mt-20">
            {/* Financials */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    المالية
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                رسوم تسجيل BIS CRS والصلاحية وإرشادات التجديد
            </h2>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                فهم الجوانب المالية
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                الحصول على شهادة BIS تحت مخطط التسجيل الإلزامي (CRS) يتضمن رسوماً مفروضة من الحكومة ورسوم اختبار المنتج. بينما العملية تتم عبر الإنترنت ومبسطة، من المهم وضع ميزانية دقيقة لتجنب التأخير أو الرفض بسبب الدفع الناقص أو الطلبات المقدمة بشكل خاطئ.
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                تفصيل هيكل الرسوم
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
                الرسوم الحكومية (قابلة للدفع لـ BIS)
            </p>

            {/* Government Fees Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                                    النوع
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[150px] border-r border-gray-300">
                                    الرسوم (INR)
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[150px] border-r border-gray-300">
                                    GST (18%)
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    المجموع (INR)
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    أول تقرير اختبار
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    ₹53,000
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    ₹9,540
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    ₹62,540
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    تقرير اختبار إضافي (نفس الطلب)
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    ₹20,000
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                                    ₹3,600
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                                    ₹23,600
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    رسوم التجديد
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    ₹53,000
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    ₹9,540
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    ₹62,540
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

const ArabicCrsELabellingSection = () => {
    return (
        <section id="elabelling" className="flex flex-col scroll-mt-20">
            {/*E-Labelling*/}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    الوسم الإلكتروني
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                إرشادات الوسم الإلكتروني للمنتجات المعتمدة من نظام التسجيل الإجباري BIS CRS
            </h2>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                ما هو الوسم الإلكتروني؟
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-relaxed md:leading-loose">
                يشير الوسم الإلكتروني إلى ممارسة عرض المعلومات التنظيمية إلكترونياً داخل الجهاز بدلاً من طباعتها على الأسطح المادية. في إطار نظام التسجيل الإجباري BIS (CRS)، يمكن لبعض المنتجات - خاصة الأجهزة المدمجة أو الرقمية - عرض تفاصيل شهادة BIS وعلامة المعيار ورمز IS من خلال واجهة البرمجيات أو التغليف الرقمي.
            </p>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                الإرشادات الرسمية لـ BIS حول الوسم الإلكتروني (CMD 3/8:1/6975 بتاريخ 3 ديسمبر 2015)
            </h3>

            <h4 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                المتطلبات الأساسية للوسم الإلكتروني:
            </h4>

            {/* E-Labelling Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-right text-base md:text-lg w-[300px] border-r border-gray-300">
                                    القاعدة
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-right text-base md:text-lg">
                                    الوصف
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200 bg-gray-50">
                                    الملصق المادي على التغليف
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right bg-gray-50">
                                    يجب أن تعرض علبة المنتج أو التغليف الخارجي شعار BIS CRS وتفاصيل التسجيل.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200">
                                    الملصقات القابلة للإزالة للتغليف بالجملة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right">
                                    إذا تم شحن المنتجات بالجملة، فإن الملصق اللاصق القابل للإزالة على العبوة الخارجية مقبول.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200 bg-gray-50">
                                    لا حاجة لأدوات للوصول
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right bg-gray-50">
                                    يجب أن يتمكن المستخدمون من الوصول إلى معلومات الوسم الإلكتروني دون الحاجة إلى أدوات أو ملحقات (مثل إزالة بطاقة SIM غير مسموحة).
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200">
                                    البرمجة الآمنة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right">
                                    يجب تضمين معلومات الوسم الإلكتروني في البرامج الثابتة/البرمجيات، ومحمية من التعديل من قبل أي طرف ثالث.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200 bg-gray-50">
                                    الوصول عبر القائمة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right bg-gray-50">
                                    يجب أن يتمكن المستخدمون من الوصول إلى المعلومات في ما لا يزيد عن 4 خطوات من خلال واجهة قائمة الجهاز.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-base md:text-lg text-right border-r border-gray-200">
                                    التعليمات مطلوبة
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-right">
                                    يجب توفير تعليمات حول كيفية الوصول إلى تفاصيل الوسم الإلكتروني:
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

const ArabicCrsExpertiseSection = () => {
    return (
        <section id="expertise" className="flex flex-col scroll-mt-20">
            {/* Expertise */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
                    الخبرة
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                كيف يمكن لشركة Sun Certifications India مساعدتك في تسجيل BIS تحت نظام CRS
            </h2>

            <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                لماذا تختار استشاري BIS؟
            </h3>

            <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-relaxed md:leading-loose">
                عملية تسجيل BIS CRS تقنية للغاية ومنظمة وتتطلب وثائق كثيرة. بدون معرفة عميقة بالمعايير الهندية وتحديثات QCO وتنسيقات تقارير الاختبار وسير عمل البوابة، يواجه المتقدمون مخاطر التأخير أو الرفض أو حتى عدم الامتثال على المدى الطويل. هنا يأتي دور Sun Certifications India - شريكك الموثوق والمتمرس في التنقل عبر كل خطوة من خطوات نظام الشهادات الإجبارية.
            </p>
        </section>
    )
}

const ArabicCrsReviewSection = () => {
    return (
        <section>
            <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
                ما رأيك في هذا المحتوى؟
            </span>
            <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
                <div className="flex gap-6">
                    <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
                        >
                            <path
                                fillOpacity="0.15"
                                strokeWidth="0"
                                className="group-hover:text-blue-500 transition-colors duration-200"
                                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
                            />
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="group-hover:text-blue-500 transition-colors duration-200"
                                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
                            />
                        </svg>

                        <span>كان مفيداً</span>
                    </button>

                    <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
                        >
                            <path
                                fillOpacity="0.15"
                                strokeWidth="0"
                                className="group-hover:text-red-500 transition-colors duration-200"
                                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
                            />
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="group-hover:text-red-500 transition-colors duration-200"
                                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
                            />
                        </svg>

                        <span>لم يكن مفيداً</span>
                    </button>
                </div>

                <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
                    آخر تحديث في 19 مارس 2025
                </p>
            </div>
        </section>
    )
}

const ArabicCrsServiceFaq = () => {
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const allFaqs = [
        {
            id: "item-1",
            question: "1. ما هو تسجيل BIS؟",
            answer:
                "شهادة BIS هي عملية امتثال تحكمها مكتب المعايير الهندية، والتي تتحقق من أن المنتج يلبي المعايير الهندية المعمول بها (IS) للجودة والسلامة والموثوقية.",
        },
        {
            id: "item-2",
            question: "2. ما هو تسجيل CRS تحت BIS؟",
            answer:
                "CRS تعني نظام التسجيل الإجباري. إنها عملية تسجيل إلزامية لفئات منتجات محددة مثل الإلكترونيات والكهربائيات والبطاريات والعناصر الشمسية. يجب اختبار المنتجات تحت CRS وتسجيلها مع BIS قبل أن يمكن بيعها في الهند.",
        },
        {
            id: "item-3",
            question: "3. هل شهادة BIS إلزامية في الهند؟",
            answer:
                "نعم. لجميع المنتجات المدرجة تحت قائمة منتجات CRS (حاليا أكثر من 80 عنصر)، تسجيل BIS إلزامي للتصنيع أو الاستيراد أو البيع في الهند.",
        },
        {
            id: "item-4",
            question: "4. ما الفرق بين BIS CRS وعلامة ISI؟",
            answer:
                "BIS CRS: للسلع الإلكترونية وتكنولوجيا المعلومات، فقط للمنتجات الإلزامية المبلغ عنها تحت QCO. <br />علامة ISI: تستخدم لمجموعة أوسع من المنتجات، قد تكون طوعية أو إلزامية حسب فئة المنتج.",
        },
        {
            id: "item-5",
            question: "5. من يمكنه التقدم لتسجيل BIS CRS؟",
            answer:
                "فقط المصنعون يمكنهم التقدم. هذا يشمل المصنعين الهنود والأجانب. العلامات التجارية الأجنبية يجب أن تعين ممثلاً هندياً مفوضاً (AIR).",
        },
        {
            id: "item-6",
            question: "6. ما هو دور AIR؟",
            answer:
                "الممثل الهندي المفوض (AIR) مسؤول قانونياً عن تقديم طلب BIS نيابة عن المصنع الأجنبي. يعمل كحلقة وصل رسمية بين BIS ومقدم الطلب الخارجي.",
        },
        {
            id: "item-7",
            question: "7. كم من الوقت يستغرق تسجيل BIS CRS؟",
            answer:
                "العملية تستغرق عادة 3-4 أسابيع، بافتراض تقديم جميع الوثائق وتقارير الاختبار بشكل صحيح وعدم إثارة أي اعتراضات من قبل BIS.",
        },
        {
            id: "item-8",
            question: "8. كم تكلف شهادة BIS CRS؟",
            answer:
                "التكاليف تشمل: <br />رسوم الاختبار: ₹10,000-₹20,000 + GST <br />الرسوم الحكومية: ₹53,000 + GST لكل تقرير اختبار <br />الرسوم الإضافية: الإفادة الخطية، البريد السريع، وثائق AIR، إلخ. <br />خصم متاح للمصنعين الهنود المسجلين في MSME",
        },
        {
            id: "item-9",
            question: "9. ما هي صلاحية شهادات BIS CRS؟",
            answer:
                "رخصة BIS الأولية صالحة لمدة سنتين. يمكن تجديدها لمدة تصل إلى 5 سنوات إذا بقيت تفاصيل المنتج والتصنيع دون تغيير.",
        },
        {
            id: "item-10",
            question: "10. هل يمكن الحصول على شهادة BIS طوعياً؟",
            answer:
                "لا. تحت CRS، لا يمكنك التقدم طوعياً للمنتجات غير المدرجة تحت QCOs. الشهادة الطوعية متاحة فقط للمنتجات غير CRS عبر نظام ISI.",
        },
        {
            id: "item-11",
            question: "11. أين يمكنني العثور على قائمة منتجات BIS CRS؟",
            answer:
                'يمكنك زيارة موقع BIS الرسمي <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> والانتقال إلى قسم "المنتجات تحت CRS" لعرض القائمة الكاملة للمنتجات المشمولة.',
        },
        {
            id: "item-12",
            question: "12. هل يمكن عرض علامة BIS إلكترونياً؟",
            answer:
                "نعم، من خلال الوسم الإلكتروني، ولكن يجب أن يلبي قواعد BIS الصارمة: معلومات التسمية يجب أن تكون مدمجة في البرامج الثابتة <br />وصول سهل خلال 4 خطوات في قائمة الجهاز <br />التغليف المادي يجب أن يحمل المعلومات التنظيمية",
        },
        {
            id: "item-13",
            question:
                "13. ماذا يحدث إذا لم أحصل على تسجيل BIS لمنتج إلزامي؟",
            answer:
                "عقوبات شديدة، تشمل: <br />مصادرة المنتج <br />رفض الجمارك <br />غرامات قانونية <br />إلغاء الإدراج من منصات التجارة الإلكترونية <br />حظر دائم من السوق الهندي",
        },
        {
            id: "item-14",
            question: "14. هل يمكن لشهادة BIS واحدة تغطية عدة نماذج أو علامات تجارية؟",
            answer:
                "لا. كل علامة تجارية وموقع مصنع يجب أن يكون معتمداً بشكل منفصل. يمكن إضافة نماذج متعددة باستخدام تقارير إضافية، ولكن فقط تحت نفس الطلب والعلامة التجارية.",
        },
        {
            id: "item-15",
            question: "15. كيف يمكن لـ Sun Certifications India مساعدتي؟",
            answer:
                "نحن نقدم: <br />دعم كامل للوثائق <br />تنسيق المختبر <br />التعامل مع طلب بوابة BIS <br />حل الاستفسارات ومتابعة BIS <br />إرشادات التجديد والتسمية <br />ضمان الامتثال للعلامات التجارية الأجنبية عبر خدمات AIR",
        },
    ];

    const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

    return (
        <div id="faqs" className="my-2 scroll-mt-20">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    الأسئلة الشائعة
                </h2>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    لا يمكنك العثور على الإجابة التي تبحث عنها؟{" "}
                    <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
                        تواصل معنا!
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
                                    عرض أسئلة أقل
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
                                    عرض المزيد من الأسئلة
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}