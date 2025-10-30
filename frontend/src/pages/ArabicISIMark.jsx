import { useEffect, useRef, useState } from "react";
import {
  ArabicAboutAuthor,
  ArabicFooter,
  ArabicServiceContactForm,
  ArabicServiceContentRight,
  ArabicServices,
} from "./ArabicBISFM";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ISIMarkAndBISCommonTable } from "@/pages/ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTable";
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

const ArabicISIMark = () => {
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
                  <BreadcrumbPage>دليل شهادة BIS (BIS الهند)</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <ArabicISIMarkHero />
      <ArabicISIIndex />
      <ArabicISIContent />
      <ArabicFooter />
      <ScrollToTopButton />
    </main>
  );
};

export default ArabicISIMark;

const ArabicISIMarkHero = () => {
  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="ISI Mark Certification Hero"
    >
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
              خبرة معتمدة
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              شهادة BIS لـ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            المصنعين الهنود
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            كجزء من رؤية "صنع في الهند"، تساعد شهادة BIS المصنعين على ضمان سلامة
            المنتج والجودة والامتثال. احصل على الشهادة وانمو علامتك التجارية
            بثقة.
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
        <ArabicServiceContactForm />
      </div>
    </section>
  );
};

const ArabicISIIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = ["overview", "process", "document", "costing", "faqs"];

  // Arabic translations
  const arabicTranslations = {
    overview: "نظرة عامة",
    process: "العملية",
    document: "الوثائق",
    costing: "التكلفة",
    faqs: "الأسئلة الشائعة",
    toggleMenu: "قائمة التبديل",
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
        const element = document.getElementById(section);
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
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {arabicTranslations[activeSection.toLowerCase()]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label={arabicTranslations.toggleMenu}
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
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection.toLowerCase()
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {arabicTranslations[item]}
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection.toLowerCase()
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {arabicTranslations[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection.toLowerCase()
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

const ArabicISIContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <ArabicISIContentLeft />

          {/* Right Side */}
          <ArabicServiceContentRight />
        </div>
      </div>

      <ArabicISIMarkServiceFaq />

      <div id="product-table">
        <ISIMarkAndBISCommonTable />
      </div>

      <div id="services">
        <ArabicServices />
      </div>
    </div>
  );
};

const ArabicISIMarkServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          لا تجد الإجابة التي تبحث عنها؟{" "}
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
                <h3>ما هي شهادة BIS ولماذا هي مهمة؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                شهادة BIS تصدر من مكتب المعايير الهندي لضمان امتثال المنتجات
                لمعايير السلامة والجودة الهندية. إنها حيوية للامتثال القانوني
                وثقة المستهلك وقبول السوق.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>ما الفرق بين رخصة BIS وعلامة ISI؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                رخصة BIS هي وثيقة قانونية تفوض المُصنّع لاستخدام علامة ISI.
                علامة ISI هي العلامة المرئية على المنتجات التي تشير إلى شهادة
                BIS.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>كم من الوقت يستغرق الحصول على شهادة BIS؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                عادةً من 6 إلى 10 أسابيع حسب نوع المنتج ومتطلبات الاختبار ونتائج
                المراجعة.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>ما هي مدة صلاحية رخصة BIS؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                عادةً من سنة إلى سنتين، وبعدها يجب تجديدها. يجب بدء التجديد قبل
                انتهاء الصلاحية بـ 30 يوماً على الأقل.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>ما هي تكلفة شهادة BIS؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                تختلف التكاليف ولكن يمكن أن تتراوح من ₹25,000 إلى ₹100,000+، بما
                في ذلك رسوم الاختبار والمراجعة والرخصة.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>هل شهادة BIS إلزامية لجميع المنتجات؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                لا. إنها إلزامية فقط للمنتجات المدرجة تحت المخطط 1 من شهادة BIS.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>كيف يمكنني العثور على المعيار الهندي الصحيح لمنتجي؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                زر موقع BIS أو استشر مختبرات الاختبار والمستشارين المعترف بهم من
                BIS لتحديد المعيار المطبق.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>هل يمكن للمُصنّعين الأجانب التقديم لشهادة BIS؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                نعم. من خلال مخطط شهادة المُصنّعين الأجانب (FMCS)، يمكن للكيانات
                الخارجية الحصول على رخص BIS لاستخدام علامة ISI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>ماذا يحدث إذا فشل منتجي في اختبار BIS؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                ستحتاج إلى تصحيح المشاكل وإعادة التقديم للاختبار. قد يتم إيقاف
                الطلبات حتى يتم إثبات الامتثال الناجح.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                <h3>هل شهادة BIS مطلوبة للتصدير؟</h3>
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                بينما ليست إلزامية دائماً للتصدير، فإن شهادة BIS تعزز المصداقية
                ويمكن أن تلبي متطلبات المشترين الدوليين أو الهيئات التنظيمية.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const ArabicISIContentLeft = () => {
  return (
    <article className=" flex-1 ">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section className="flex flex-col gap-2 md:gap-4 mb-6">
          <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            مقدمة حول شهادة BIS في الهند للمصنعين الهنود
          </h1>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
            يشهد قطاع التصنيع في الهند تحولاً ديناميكياً، ومع سعي الحكومة نحو
            شعار "صنع في الهند"، أصبح ضمان جودة المنتج وامتثاله للمعايير أكثر
            أهمية من أي وقت مضى. ومن أهم الخطوات لأي مُصنّع محلي يسعى للازدهار
            في السوق الهندية الحصول على شهادة مكتب المواصفات والمقاييس (BIS).
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            مكتب المعايير الهندي (BIS) هو الهيئة الوطنية المسؤولة عن وضع معايير
            جودة المنتجات والحفاظ عليها. تضمن شهادة BIS استيفاء المنتج للمعايير
            الهندية المحددة، وأنه آمن وموثوق وذو جودة عالية.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            بالنسبة للمصنعين المحليين، لا تُعد شهادة BIS مجرد متطلب قانوني؛ بل
            هي علامة ثقة. تُشير رخصة BIS إلى الامتثال، وتُتيح الوصول إلى أسواق
            أوسع، وتُعزز مصداقية العلامة التجارية. ومع التركيز الواسع على ضمان
            الجودة وسلامة العملاء، برز نظام BIS الهندي كركيزة تنظيمية لقطاعي
            الصناعة والمنتجات الاستهلاكية على حد سواء.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            تتضمن شهادة BIS أيضًا علامة ISI، وهي مؤشر رئيسي على مطابقة المنتج
            لمواصفات المعهد الهندي للمعايير. غالبًا ما تكون المنتجات التي تحمل
            علامة ISI إلزامية في قطاعات مثل الإلكترونيات، والأسمنت، والصلب،
            ومكونات السيارات، والسلع المنزلية. بالنسبة للمصنّعين، يُمكن أن
            يُشكّل الحصول على علامة ISI عبر تسجيل BIS الفارق بين نجاح السوق
            والعقبات التنظيمية.
          </p>
        </section>

        {/* Nomination Section */}
        <ArabicOverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicProcessSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicDocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicCostingSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ArabicAboutAuthor />
      </div>
    </article>
  );
};

const ArabicOverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Nomination */}
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          نظرة عامة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        ما هي علامة ISI؟
      </h2>

      {/* Description */}
      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        علامة ISI هي علامة الجودة والسلامة للمنتجات المصنعة والمباعة في الهند.
        وهي اختصار للمعهد الهندي للمعايير، وتشير علامة ISI إلى أن المنتج يتوافق
        مع المعيار الهندي (IS) المحدد من قبل BIS. تضمن هذه العلامة للمستهلكين أن
        المنتج قد تم اختباره وشهادته من قبل رخصة BIS ويتوافق مع معايير السلامة
        والأداء والموثوقية الوطنية.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        المنتجات الشائعة التي تحمل علامة ISI تشمل:
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "الأجهزة الكهربائية مثل المكواك الكهربائية وسخانات الغرف وسخانات المياه",
            "الأسمنت",
            "منتجات الصلب",
            "أواني الضغط",
            "مكونات السيارات، إلخ.",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        في كثير من الحالات، امتلاك علامة ISI إلزامي بموجب القانون الهندي. لا
        يمكن بيع المنتجات التي تقع تحت نظام الشهادة الإلزامية في الهند بدون هذه
        الشهادة.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ما هي رخصة BIS؟
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        رخصة BIS هي التفويض الرسمي الصادر من مكتب المعايير الهندي الذي يسمح
        للمُصنّع باستخدام علامة ISI على منتجه. تؤكد الرخصة أن المنتج وعملية
        التصنيع والمرافق قد استوفت جميع معايير مراقبة الجودة الصارمة لـ BIS.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        للحصول على رخصة BIS، يجب على المُصنّع المرور بعملية تسجيل BIS، والتي
        تشمل تقديم الوثائق واختبار المنتج وتفتيش المصنع والمراقبة المستمرة.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        بمجرد إصدارها، تكون الرخصة صالحة لفترة محددة ويجب تجديدها قبل انتهاء
        صلاحيتها. عدم الامتثال لمعايير BIS يمكن أن يؤدي إلى تعليق أو إلغاء شهادة
        BIS.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        لماذا كل من علامة ISI ورخصة BIS مهمة؟
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        بينما علامة ISI هي ما يراه المستهلك ويثق به، فإن رخصة BIS هي الموافقة
        الخلفية التي تسمح للمُصنّعين بوضع هذه العلامة قانونياً. بدون رخصة BIS
        صالحة، استخدام علامة ISI يشكل مخالفة قانونية.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        هذا يجعل تسجيل BIS ليس مجرد عقبة تنظيمية بل خطوة أساسية لضمان إمكانية
        تسويق منتجاتك وبيعها قانونياً في الهند.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الاختلافات الرئيسية بين علامة ISI ورخصة BIS:
      </h2>

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
                رخصة BIS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                الغرض
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                علامة الجودة على المنتج
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                الموافقة على استخدام علامة ISI
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تصدر بواسطة
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تُستخدم تحت تفويض BIS
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تصدر من مكتب المعايير الهندي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                الرؤية
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تُرى على المنتج
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                وثيقة يحتفظ بها المُصنّع
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                إلزامية؟
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                نعم، للمنتجات المدرجة
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                نعم، للحصول على علامة ISI
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                التجديد
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                غير مطبق
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                مطلوب دورياً
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        فهم هذه الاختلافات ضروري قبل بدء عملية رخصة BIS أو حساب تكلفة شهادة BIS.
        كلاهما يلعب دوراً حاسماً في الامتثال ومصداقية عمليات التصنيع المحلية.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        لماذا يحتاج المُصنّعون المحليون إلى شهادة BIS
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        في بيئة التصنيع التنافسية في الهند، شهادة BIS ليست مجرد ضرورة تنظيمية -
        بل هي أصل استراتيجي. إليك لماذا الحصول على شهادة BIS لا غنى عنه
        للمُصنّعين المحليين:
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        1. الامتثال القانوني
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        لا يمكن بيع العديد من المنتجات في الهند قانونياً بدون شهادة BIS. اللوائح
        الحكومية تفرض على المُصنّعين الحصول على رخصة BIS صالحة لوضع علامة ISI
        على المنتجات. عدم الامتثال يمكن أن يؤدي إلى غرامات باهظة وسحب المنتجات
        وحظرها.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        2. ضمان الجودة
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تؤكد رخصة BIS أن المُصنّع يتبع بروتوكولات الجودة المعيارية. تتضمن شهادة
        BIS اختبار المنتج الروتيني ومراجعة المصنع، مما يضمن وصول منتجات آمنة
        وموثوقة فقط للمستهلكين. بالنسبة للمُصنّعين المحليين، فإنها تعزز مراقبة
        الجودة الداخلية وتقلل من مخاطر العيوب أو المسؤوليات.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        3. مصداقية العلامة التجارية وثقة المستهلك
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        عرض علامة ISI على منتجاتك يبني الثقة بين المستهلكين. إنها تواصل أن
        المنتج قد تم اعتماده من قبل BIS الهندي - علامة على النزاهة والموثوقية.
        هذه القيمة المتصورة تترجم إلى زيادة المبيعات وتحسين الولاء للعلامة
        التجارية.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        4. الوصول إلى أسواق أوسع
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        مع شهادة BIS، يمكن للمُصنّعين توزيع بضائعهم في جميع أنحاء الهند بدون
        قيود قانونية. غالباً ما يتطلب تجار التجزئة والجملة ومنصات التجارة
        الإلكترونية منتجات معتمدة من BIS قبل إدراجها. بالنسبة للوحدات الموجهة
        للتصدير، قد تساعد شهادة BIS أيضاً في تلبية توقعات الجودة الدولية.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        5. الميزة التنافسية
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        امتلاك رخصة BIS يميز المُصنّع عن المنافسين غير المسجلين. إنها تشير إلى
        الالتزام بالجودة والامتثال، مما يساعد الشركات على الفوز بالعقود العامة
        والمشاركة في المناقصات والحصول على وصول تفضيلي في مخططات المشتريات
        الحكومية.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        6. توفير التكاليف على المدى الطويل
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        بينما قد تبدو تكلفة شهادة BIS مرتفعة مبدئياً، فإنها تؤتي ثمارها من خلال
        تقليل المخاطر القانونية وفشل المنتجات والأضرار السمعة. بالإضافة إلى ذلك،
        يمكن أن تؤدي كفاءة التصنيع المحسنة وشكاوى العملاء الأقل إلى توفير تشغيلي
        على المدى الطويل.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        7. دعم المبادرات الحكومية
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        من خلال المشاركة في تسجيل BIS، يساهم المُصنّعون المحليون في مهمة الهند
        لتوحيد المعايير ورفع الجودة. الانسجام مع البرامج الوطنية مثل "صنع في
        الهند" أو "أتمانيربهار بهارات" يعزز النوايا الحسنة والدعم الحكومي.
      </p>
    </section>
  );
};

const ArabicProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          العملية
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        عملية شهادة BIS للمُصنّعين المحليين
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        الحصول على شهادة BIS يمكن أن يكون نقطة تحول للمُصنّعين المحليين - لكنه
        يتطلب التنقل في عملية محددة ومفصلة. فيما يلي تفصيل خطوة بخطوة لعملية
        رخصة BIS، مصممة خصيصاً للشركات الهندية.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 1: تحديد المعيار الهندي المطبق (IS)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        قبل بدء عملية تسجيل BIS، يجب على المُصنّعين تحديد ما إذا كان منتجهم يخضع
        للشهادة الإلزامية. إذا كان الأمر كذلك، يحتاجون إلى تحديد المعيار الهندي
        ذي الصلة (رمز IS) المرتبط بهذا المنتج.
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الموارد:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "زيارة الموقع الرسمي لـ BIS",
            "الرجوع إلى الإشعارات الخاصة بالمنتج",
            "استشارة المستشارين المعترف بهم من BIS أو مختبرات الاختبار",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 2: إعداد الوثائق المطلوبة
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        تجميع وتقديم الوثائق الأساسية، بما في ذلك:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "نموذج الطلب (النموذج V أو VI، حسب المخطط)",
            "شهادة تسجيل الأعمال",
            "رخصة المصنع",
            "قائمة معدات التصنيع",
            "تفاصيل موظفي مراقبة الجودة",
            "مخطط تدفق عملية التصنيع",
            "تخطيط وحدة التصنيع",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 3: اختبار المنتج في مختبر معترف به من BIS
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يجب على المُصنّعين إرسال عينات المنتج إلى مختبر معترف به من BIS
        للاختبار. سيقوم المختبر بتقييم المنتج بناءً على رموز IS ذات الصلة وإصدار
        تقرير اختبار.
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نصائح مهمة:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "استخدم فقط المختبرات المعتمدة من BIS",
            "تأكد من أن تسمية العينات والتعبئة تتبع معايير BIS",
            "احتفظ بسجل لجميع وثائق الاختبار",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 4: تقديم الطلب عبر الإنترنت
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        مع الوثائق وتقارير الاختبار في متناول اليد، يجب على المُصنّعين التقديم
        عبر بوابة BIS. يجب أن يتضمن الطلب:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "الملف الشخصي للشركة",
            "تفاصيل التصنيع ومراقبة الجودة",
            "مواصفات المنتج",
            "شهادات الاختبار والوثائق الأخرى",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تسمح العملية عبر الإنترنت برفع الوثائق وتتبع الحالة في الوقت الفعلي.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 5: مراجعة المصنع من قبل مسؤولي BIS
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        بعد التحقق من الوثائق، يقوم مسؤولو BIS بإجراء تفتيش ميداني على منشآت
        التصنيع. يتحققون من:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "البنية التحتية للتصنيع",
            "معدات الاختبار",
            "تخزين المواد الخام",
            "إجراءات مراقبة الجودة أثناء العملية والنهائية",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        تضمن المراجعة الامتثال لمعايير BIS وتقييم القدرة على إنتاج منتجات
        متوافقة بشكل مستمر.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 6: منح رخصة BIS
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        إذا اجتاز المنتج الاختبار وكانت مراجعة المصنع مرضية، يمنح BIS الرخصة
        لاستخدام علامة ISI. يتلقى المُصنّع شهادة BIS رسمية، صالحة لمدة سنة أو
        سنتين حسب المخطط.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 7: وضع رمز ISI
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يجب وضع علامة ISI على كل وحدة منتج والتعبئة وأحياناً في المواد
        التسويقية، وفقاً لإرشادات وضع العلامات من BIS.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        الخطوة 8: المراقبة المستمرة والتجديد
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        شهادة BIS تخضع لـ:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "مراجعات المراقبة",
            "إعادة اختبار العينات",
            "التجديد السنوي",
          ]}
        />
      </div>
    </section>
  );
};

const ArabicDocumentsSection = () => {
  return (
    <section id="document" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الوثائق المطلوبة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        الوثائق المطلوبة لتسجيل BIS
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        يعتمد نجاح تسجيل BIS بشكل كبير على الوثائق الدقيقة والكاملة. فيما يلي
        قائمة بالوثائق الرئيسية التي يحتاج المُصنّعون المحليون إلى تجميعها
        وتقديمها أثناء عملية شهادة BIS.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        قائمة مراجعة الوثائق العامة
      </h3>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "1. نموذج الطلب المكتمل (النموذج V أو VI حسب المخطط)",
            "2. شهادة تسجيل الأعمال (مثل تسجيل أوديام، MSME، شهادة GST)",
            "3. رخصة المصنع أو رخصة التجارة البلدية",
            "4. قائمة آلات التصنيع",
            "5. مخطط تدفق عملية التصنيع",
            "6. خطة تخطيط منشآت التصنيع",
            "7. تفاصيل موظفي مراقبة الجودة الداخليين",
            "8. تفاصيل معدات الاختبار",
            "9. اتفاقية التعاون التقني (إن كان مطبقاً)",
            "10. توكيل/خطاب تفويض",
            "11. خطاب تفويض اسم العلامة التجارية (إذا كان التقديم تحت علامة تجارية مختلفة)",
            "12. تقرير اختبار من مختبر معتمد من BIS",
            "13. فاتورة شراء المواد الخام",
            "14. صور المنتج والتعبئة",
            "15. إعلان الامتثال للمعايير",
            "16. تعهد بخصوص المنتجات غير القياسية",
          ]}
          tagType="h4"
        />
      </div>
    </section>
  );
};

const ArabicCostingSection = () => {
  return (
    <section id="costing" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التكلفة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        تكلفة شهادة BIS (تكلفة شهادة BIS)
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        فهم الالتزام المالي لشهادة BIS أمر حيوي للتخطيط السليم. يمكن أن تختلف
        التكلفة الإجمالية لشهادة BIS للمُصنّعين المحليين بناءً على نوع المنتج
        والمخطط ومتطلبات الاختبار وحجم وحدة الإنتاج. فيما يلي تفصيل مفصل لمكونات
        التكلفة الشائعة.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        تفصيل تكلفة شهادة BIS القياسية
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                مكون التكلفة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                المبلغ المقدر (INR)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الطلب
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹1,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم اختبار المنتج (لكل منتج)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹15,000 – ₹50,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم تفتيش المصنع
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹7,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الرخصة (المنح الأولي)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹1,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم العلامة (لكل منتج/سنة)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                يعتمد على المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم التجديد (كل سنتين/سنوياً)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                يعتمد على المنتج
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const PointsListTwo = ({ points, heading, tagType = "h3" }) => {
  const TagComponent = tagType;

  return (
    <div className="flex flex-col w-full">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <TagComponent className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </TagComponent>
          </li>
        ))}
      </div>
    </div>
  );
};
