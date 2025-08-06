import { useEffect, useRef, useState } from "react";
import {
  ArabicAboutAuthor,
  ArabicServiceContactForm,
  ArabicServiceContentRight,
  ArabicServices,
} from "./ArabicBISFM";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
import Footer from "@/common/Footer";
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

const ArabicBISCertification = () => {
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
                  <BreadcrumbPage>ما هو شهادة BIS (BIS الهند)</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <ArabicBISCertificationHero />
      <ArabicBISCertificationIndex />
      <ArabicBISCertificationContent />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default ArabicBISCertification;

const ArabicBISCertificationHero = () => {
  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
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
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              خبرة معتمدة
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              شهادة BIS الهند
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            للمستوردين والمصنعين
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            شهادة BIS تضمن جودة وسلامة المنتجات في الهند. هي إجبارية للعديد من
            المنتجات وتتطلب اختبارات وتوثيقات وموافقة.
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

        {/* Right Side */}
        <ArabicServiceContactForm />
      </div>
    </section>
  );
};

const ArabicBISCertificationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  // Arabic navigation labels
  const navigationLabels = {
    overview: "نظرة عامة",
    types: "الأنواع",
    documents: "الوثائق",
    process: "العملية",
    cost: "التكلفة",
    role: "الدور",
    conclusion: "الخاتمة",
    faqs: "الأسئلة الشائعة",
    toggleMenu: "تبديل القائمة",
  };

  const SECTIONS = [
    "overview",
    "types",
    "documents",
    "process",
    "cost",
    "role",
    "conclusion",
    "faqs",
  ];

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

  // Sticky behavior detection
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

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Filter entries that are intersecting and sort by intersection ratio
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries[0];
          const targetId = mostVisibleEntry.target.id;

          // Handle special case for FAQs
          if (targetId === "faqs") {
            setActiveSection("FAQs");
          } else {
            // Capitalize first letter for other sections
            const sectionName =
              targetId.charAt(0).toUpperCase() + targetId.slice(1);
            setActiveSection(sectionName);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: "-20% 0px -70% 0px", // Only trigger when section is in the middle portion of viewport
      }
    );

    // Observe all sections
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
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
          {navigationLabels[activeSection.toLowerCase()] || activeSection}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label={navigationLabels.toggleMenu}
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
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection.toLowerCase()
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {navigationLabels[item]}
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection.toLowerCase()
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {navigationLabels[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection.toLowerCase()
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

const ArabicBISCertificationContent = () => {
  return (
    <section>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ArabicBISCertificationContentLeft />

          {/* Right Side */}
          <ArabicServiceContentRight />
        </div>
      </div>
      <ArabicBISCertificationServiceFaq />
      <div id="services">
        <ArabicServices />
      </div>
    </section>
  );
};

const ArabicBISCertificationContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="flex flex-col  gap-[20px] md:gap-[40px]">
        <ArabicBISCertificationOverviewSection />
        <Divider />
        <ArabicBISCertificationTypesSection />
        <Divider />
        <ArabicBISCertificationDocumentsSection />
        <Divider />
        <ArabicBISCertificationProcessSection />
        <Divider />
        <ArabicBISCertificationCostSection />
        <Divider />
        <ArabicBISCertificationRoleSection />
        <Divider />
        <ArabicBISCertificationConclusionSection />
        <Divider />
        <ArabicBISCertificationReviewSection />
        <Divider />
        <ArabicAboutAuthor />
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  );
};

const ArabicBISCertificationOverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          نظرة عامة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        ما هي شهادة BIS؟ دليل شامل لشهادة BIS الهندية للمصنعين الهنود والأجانب.
      </h1>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        شهادة BIS في الهند: ضمان الجودة بعلامة ISI
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-loose">
        شهادة BIS في الهند هي معيار جودة إلزامي يصدر عن مكتب المعايير الهندية
        (BIS)، الهيئة الوطنية للمعايير تحت وزارة شؤون المستهلك. تؤكد شهادة BIS
        أن المنتج يتوافق مع معايير السلامة والجودة والأداء الهندية. المنتجات
        التي تلبي هذه المعايير تحصل على علامة ISI، رمز الثقة والموثوقية
        للمستهلكين الهنود. شهادة BIS أو علامة ISI لا تعزز ثقة المستهلك فحسب، بل
        تضمن أيضاً أن المصنعين يتبعون ممارسات الإنتاج المنظمة. بالنسبة للعديد من
        فئات المنتجات، مثل الأجهزة الكهربائية والأسمنت والصلب ومياه الشرب
        المعبأة، تعتبر شهادة BIS إلزامية بموجب لوائح حكومية مختلفة. بدون هذه
        العلامة، يُمنع بيع أو استيراد هذه السلع في الهند. تتضمن عملية شهادة BIS
        اختبار المنتجات في مختبرات معتمدة من BIS، وتدقيق المصانع، والمراقبة
        المستمرة بعد منح الترخيص. سواء كنت مصنعاً هندياً أو شركة أجنبية تهدف إلى
        دخول السوق الهندية، فإن الحصول على ترخيص BIS الهندي أمر بالغ الأهمية
        للامتثال والوصول إلى السوق. مع التركيز المتزايد على سلامة المستهلك وجودة
        المنتج، أصبحت شهادة BIS متطلباً أساسياً عبر الصناعات. من خلال الحصول على
        شهادة BIS أو ترخيص BIS، لا تضمن الشركات الامتثال القانوني فحسب، بل تكتسب
        أيضاً ميزة تنافسية في السوق الهندية.
      </p>

      <h2 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        نظام شهادة BIS
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-loose">
        نظام شهادة BIS هو إطار تنظيمي من قبل BIS الهندية لضمان أن المنتجات تلبي
        معايير الجودة والسلامة وفقاً للمعايير الهندية. تحت هذا النظام، يتم إصدار
        شهادة BIS أو ترخيص BIS بعد الاختبار الناجح وتفتيش المصنع والتحقق من
        الامتثال. الهدف من تسجيل BIS هو تعزيز ثقة المستهلك وضمان أن المنتج يحمل
        علامة ISI، رمز الجودة المضمونة. سواء كنت مصنعاً هندياً أو أجنبياً، فإن
        شهادة BIS إلزامية للعديد من المنتجات، بما في ذلك الإلكترونيات والبلاستيك
        الصالح للطعام ومواد البناء. يضمن هذا النظام امتثال المصنعين للمعايير
        المحددة ويساعد في تجنب السلع غير الآمنة أو دون المستوى في السوق الهندية.
        الحصول على شهادة BIS لا يمكّن من الوصول إلى السوق فحسب، بل يُظهر أيضاً
        أن المنتج يتماشى مع المعايير الهندية الإلزامية. من خلال آلية المراقبة
        والتقييمات الدورية للمصانع، تضمن BIS الهندية الامتثال المستمر. هذا النهج
        المنظم والموحد يساعد في تبسيط مراقبة جودة المنتجات عبر القطاعات. في
        النهاية، تحمي شهادة BIS الصحة العامة وتعزز التجارة العادلة وتبني
        المساءلة الصناعية. بدون ترخيص BIS صالح، تواجه الشركات عواقب قانونية
        واستبعاد من السوق في الهند، مما يجعل تسجيل BIS مكوناً حاسماً للتصنيع
        والاستيراد المسؤول في الاقتصاد الهندي.
      </p>
    </section>
  );
};

const ArabicBISCertificationTypesSection = () => {
  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* Types */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الأنواع
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      {/* Title */}

      <h2 className="mainHeading">أنواع شهادة BIS</h2>
      <p className="simpleParagraph">
        هناك أنواع مختلفة من شهادة BIS تصدرها BIS الهندية، كل منها مصمم لتلبية
        فئات منتجات مختلفة واحتياجات السوق تحت المعايير الهندية.
      </p>

      <div className="pointList">
        <PointsListTwo
          points={[
            "FMCS – نظام شهادة المصنعين الأجانب للإلكترونيات وأجهزة تكنولوجيا المعلومات",
            "النظام X تحت BIS الهندية",
            "CRS – نظام التسجيل الإلزامي",
            "نظام الدمغة (المجوهرات والمعادن الثمينة)",
            "الأسمنت ومواد البناء وغيرها",
            "شهادة العلامة البيئية",
          ]}
        />
      </div>

      <h2 className="normalHeading">نظام FMCS تحت BIS الهندية</h2>

      <p className="simpleParagraph">
        نظام شهادة المصنعين الأجانب (FMCS) هو نظام شهادة BIS خاص مصمم من قبل BIS
        الهندية للمصنعين الأجانب الذين يريدون بيع منتجاتهم في السوق الهندية. تحت
        هذا النظام، يجب على المصنعين في الخارج الحصول على ترخيص BIS أو شهادة BIS
        لإثبات أن منتجاتهم تلبي المعايير الهندية المطبقة. تماماً كما في النظام
        المحلي، يتم منح علامة ISI بعد تقييم مفصل يشمل اختبار عينات المنتج وتفتيش
        المصانع. FMCS حيوي لضمان أن البضائع المستوردة تتماشى مع توقعات السلامة
        والأداء في الهند. بدون تسجيل BIS المناسب، لا يمكن للبضائع الأجنبية دخول
        السوق الهندية قانونياً.
      </p>

      <h2 className="normalHeading">
        ترخيص BIS للمصنعين المحليين (BIS الهندية)
      </h2>

      <div className="simpleParagraph">
        يجب على المصنعين المحليين الحصول على شهادة BIS من خلال BIS الهندية لبيع
        المنتجات المنظمة في الهند. هذا يتضمن الحصول على شهادة BIS صالحة أو ترخيص
        BIS بعد تلبية المعايير المحددة بواسطة المعايير الهندية. بالنسبة للمصنعين
        الهنود، تسجيل BIS يعني أن منتجاتهم مختبرة ومتحققة للسلامة والجودة
        والموثوقية. بعد الشهادة، تحمل المنتجات علامة ISI التي تشير إلى الامتثال
        للمعايير الوطنية.
      </div>

      <h2 className="normalHeading">ما هي علامة ISI؟</h2>

      <p className="simpleParagraph">
        علامة ISI هي واحدة من رموز الجودة الأكثر اعترافاً في الهند، تُمنح تحت
        نظام شهادة BIS. تُدار من قبل BIS الهندية، علامة ISI تشير إلى أن المنتج
        يلبي المعايير الهندية ذات الصلة للسلامة والأداء والجودة. للحصول على
        علامة ISI، يجب على المصنعين - سواء المحليين أو الأجانب - تأمين ترخيص BIS
        صالح أو شهادة BIS من خلال الاختبار الصارم وتدقيق المصانع. فقط بعد تسجيل
        BIS الناجح يمكن استخدام العلامة قانونياً على المنتجات. علامة ISI إلزامية
        لفئات منتجات عديدة مثل الأجهزة الكهربائية والأسمنت وأسطوانات الغاز
        المسال ومياه الشرب المعبأة. بدونها، لا تستطيع الشركات تصنيع أو استيراد
        أو بيع هذه البضائع في الهند.
      </p>

      <h2 className="normalHeading">
        ما هو النظام X؟ (اللائحة التقنية الشاملة)
      </h2>

      <p className="simpleParagraph">
        هو نظام شهادة BIS مبسط قدمته BIS الهندية لتبسيط العملية لمصنعين معينين،
        خاصة في القطاع الميكانيكي والصناعي. النظام X يبسط التوثيق والتقييم مع
        ضمان أن المنتجات لا تزال تلبي جميع المعايير الهندية المطبقة. تحت هذا
        النظام، يتم منح شهادة BIS بعد اختبار النوع وتدقيق المصنع والامتثال
        للإرشادات الإلزامية. ما هو النظام X مخصص له؟ إنه مصمم للصناعات مثل
        المضخات والرافعات وأدوات الآلات والمحولات وغيرها - القطاعات التي تلعب
        فيها معايرة المنتج دوراً حاسماً.
      </p>

      <h2 className="normalHeading">نظام التسجيل الإلزامي (CRS)</h2>

      <p className="simpleParagraph">
        نظام التسجيل الإلزامي (CRS) هو برنامج شهادة BIS متخصص تنفذه BIS الهندية
        للمنتجات الإلكترونية وتكنولوجيا المعلومات. تحت CRS، يجب على المصنعين
        الحصول على شهادة BIS قبل بيع أو استيراد منتجات مثل أضواء LED والهواتف
        المحمولة وبنوك الطاقة والحاسوب المحمول في الهند. هذا النظام يضمن أن هذه
        المنتجات عالية المخاطر تتوافق مع المعايير الهندية لضمان السلامة
        والوظائف. CRS ليس واسعاً مثل نظام ISI، لكنه لا يزال يفرض الاختبار في
        مختبرات معترف بها من BIS وتسجيل BIS إلزامي قبل أن تتمكن المنتجات من دخول
        السوق.
      </p>

      <h2 className="normalHeading">الدمغة</h2>

      <p className="simpleParagraph">
        الدمغة تحت شهادة BIS إلزامية للمجوهرات الذهبية والفضية في الهند لضمان
        النقاء والأصالة. تُدار من قبل BIS الهندية، الدمغة هي عملية ضمان الجودة
        حيث يتم اختبار مقالات المعادن الثمينة وختمها بعلامة ISI (أو رمز الدمغة)
        بمجرد أن تلبي المعايير الهندية المطلوبة. يجب على تجار المجوهرات الحصول
        على ترخيص BIS أو شهادة BIS لبيع المنتجات المدموغة قانونياً. هذا يشمل
        تسجيل BIS والاختبار في مراكز الفحص والدمغة المعتمدة من BIS (AHCs)
        والتدقيق المنتظم.
      </p>

      <h2 className="normalHeading">العلامة البيئية</h2>

      <p className="simpleParagraph">
        العلامة البيئية هي شهادة فريدة تحت نظام شهادة BIS تقدمها BIS الهندية
        للمنتجات الصديقة للبيئة. تُمنح للمنتجات التي لا تتوافق مع المعايير
        الهندية للجودة فحسب بل تُظهر أيضاً تأثيراً بيئياً أدنى طوال دورة حياتها.
        المنتجات التي تحمل العلامة البيئية يجب أن تخضع لاختبار صارم وتلبي معايير
        متعلقة بكفاءة الطاقة وقابلية إعادة التدوير وتقليل الانبعاثات.
      </p>

      <h2 className="normalHeading">نظام شهادة أنظمة الإدارة (MSCS)</h2>

      <p className="simpleParagraph">
        نظام شهادة أنظمة الإدارة (MSCS) من قبل مكتب المعايير الهندية (BIS) هو
        برنامج منظم مصمم لتقييم وشهادة المنظمات التي تنفذ أنظمة إدارة معترف بها
        دولياً مختلفة. هذه الأنظمة تشمل معايير مثل ISO 9001 (إدارة الجودة) وISO
        14001 (الإدارة البيئية) وISO 45001 (الصحة والسلامة المهنية) وغيرها.
      </p>

      <h2 className="normalHeading">LRS (نظام اعتراف المختبرات)</h2>

      <div className="simpleParagraph">
        LRS (نظام اعتراف المختبرات) من مكتب المعايير الهندية (BIS) هو آلية حاسمة
        لضمان جودة ومصداقية مختبرات الاختبار التي تقيم المنتجات لشهادة BIS.
      </div>

      <h2 className="normalHeading">المنتجات تحت شهادة BIS</h2>

      <div className="simpleParagraph">
        العديد من المنتجات في الهند تتطلب شهادة BIS لضمان مطابقتها لمعايير
        السلامة والأداء الموضوعة من قبل BIS الهندية. هذه المنتجات تشمل صناعات
        مختلفة مثل الإلكترونيات والأجهزة الكهربائية والأسمنت وقطع غيار السيارات
        والصلب وأدوات المطبخ والمزيد.
      </div>

      <h2 className="normalHeading">فوائد شهادة BIS</h2>

      <div className="simpleParagraph">
        شهادة BIS تقدم فوائد عديدة للمصنعين والشركات العاملة في السوق الهندية.
        الشهادة تعزز مصداقية المنتج وتضمن الامتثال للمعايير الهندية وتسهل الوصول
        إلى السوق. الفوائد الرئيسية تشمل الامتثال القانوني وزيادة ثقة المستهلك
        والميزة التنافسية وتبسيط إجراءات التصدير.
      </div>

      <h2 className="normalHeading">المستندات المطلوبة لشهادة BIS</h2>
      <div className="simpleParagraph">
        للتقدم بطلب للحصول على شهادة BIS، يجب على الشركات إعداد مجموعة شاملة من
        المستندات التي تُظهر الامتثال للمعايير الهندية والأهلية لشهادة BIS.
        المستندات الرئيسية تشمل ترخيص عمل الشركة ومخطط التصنيع وقائمة الآلات
        ومصادر المواد الخام والتفاصيل التقنية للمنتج ودليل مراقبة الجودة.
      </div>
    </section>
  );
};

const PointsListTwo = ({ points, heading }) => {
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
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

const ArabicBISCertificationDocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          المستندات
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="mainHeading">المستندات المطلوبة لشهادة BIS</h1>

      <p className="simpleParagraph">
        للتقدم بطلب للحصول على شهادة BIS، يجب على الشركات إعداد مجموعة شاملة من
        المستندات التي تُظهر الامتثال للمعايير الهندية والأهلية لشهادة BIS.
        المستندات الرئيسية تشمل ترخيص عمل الشركة ومخطط التصنيع وقائمة الآلات
        ومصادر المواد الخام والتفاصيل التقنية للمنتج ودليل مراقبة الجودة. إذا
        كان التقديم تحت نظام علامة ISI، يجب على المتقدم أيضاً تقديم تقارير
        اختبار من مختبرات معترف بها من BIS. شهادة علامة تجارية صالحة مطلوبة
        لحماية العلامة التجارية أثناء تسجيل BIS. بالنسبة للمصنعين الأجانب، يجب
        على الممثل الهندي المخول (AIR) تقديم وثائق إضافية مثل إثبات التمثيل
        والهوية. BIS الهندية تستخدم هذه المستندات لتقييم ما إذا كان المنتج
        والمرفق يلبيان معايير ترخيص BIS. المراسلات غير المكتملة أو غير الدقيقة
        يمكن أن تؤخر عملية شهادة BIS أو تؤدي إلى رفض صريح. اعتماداً على فئة
        المنتج، قد تكون هناك حاجة لمستندات إضافية تحت إرشادات CRS أو FMCS أو
        النظام X. التوثيق الدقيق يضمن تدقيقاً سلساً ويقلل وقت الموافقة ويسهل
        الوصول إلى السوق بشكل أسرع. من خلال تجميع جميع الأوراق المطلوبة بشكل
        صحيح، تُظهر الشركات التزامها بجودة المنتج والسلامة. لذلك، إعداد
        المستندات الصحيحة خطوة حاسمة في تأمين ترخيص BIS صالح والنجاح في السوق
        الهندية تحت معايير شهادة BIS.
      </p>
    </section>
  );
};

const ArabicBISCertificationProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          العملية
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">عملية شهادة BIS</h2>

      <p className="simpleParagraph">
        تتبع عملية شهادة BIS نهجاً منظماً لضمان أن المنتجات تلبي المعايير
        الهندية الإلزامية للجودة والسلامة والأداء. فيما يلي نظرة عامة شاملة على
        العملية الكاملة:
      </p>

      <h3 className="normalHeading">الغرض من شهادة BIS</h3>
      <p className="simpleParagraph">
        عملية شهادة BIS منظمة من قبل BIS الهندية لضمان أن المنتجات تلبي المعايير
        الهندية الإلزامية للجودة والسلامة والأداء.
      </p>

      <h3 className="normalHeading">تحديد المعيار المطبق</h3>
      <p className="simpleParagraph">
        يجب على المصنعين أولاً تحديد المعيار الهندي ذي الصلة وتحديد فئة المنتج
        تحت نظام BIS.
      </p>

      <h3 className="normalHeading">تقديم الطلب</h3>
      <p className="simpleParagraph">
        تقديم طلب رسمي إلى BIS الهندية، بما في ذلك المستندات المطلوبة مثل:
      </p>
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "مخطط تدفق التصنيع",
              "خطة مراقبة الجودة",
              "تقارير اختبار المنتج",
            ]}
            heading="المستندات المطلوبة:"
          />
        </div>
      </div>

      <h3 className="normalHeading">تسجيل BIS واختبار المنتج</h3>
      <p className="simpleParagraph">
        التقدم بطلب لتسجيل BIS واختبار المنتج في مختبرات معتمدة من BIS. هذه
        الخطوة إلزامية تحت جميع أنظمة BIS، بما في ذلك ISI وCRS وFMCS والنظام X.
      </p>

      <h3 className="normalHeading">تفتيش المصنع</h3>
      <p className="simpleParagraph">
        BIS الهندية تجري تفتيش المصنع لتقييم إعداد الإنتاج ومراقبة الجودة
        والامتثال للمعايير الهندية.
      </p>

      <h3 className="normalHeading">منح شهادة BIS / ترخيص BIS</h3>
      <p className="simpleParagraph">
        بعد التقييم الناجح، يتم منح المصنع ترخيص BIS (أو ترخيص BIS) ويمكنه
        استخدام علامة ISI على المنتج.
      </p>
    </section>
  );
};

const ArabicBISCertificationCostSection = () => {
  const costRows = [
    {
      component: "رسوم الطلب",
      details: "رسوم لمرة واحدة غير قابلة للاسترداد حسب نوع المنتج",
    },
    {
      component: "رسوم الاختبار",
      details: "بناءً على التعقيد؛ تُدفع للمختبرات المعترف بها من BIS",
    },
    {
      component: "رسوم الترخيص السنوية",
      details: "تُدفع سنوياً للحفاظ على ترخيص BIS",
    },
    {
      component: "رسوم التفتيش/تدقيق المصنع",
      details:
        "تُفرض إذا قام مسؤولو BIS بزيارة المصنع (رسوم سفر محلية أو دولية إضافية)",
    },
    {
      component: "رسوم الاستشارة (إن أمكن)",
      details: "اختيارية، للحصول على مساعدة شاملة في الامتثال من المستشارين",
    },
  ];

  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          التكلفة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">تكلفة شهادة BIS</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-right text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                مكون التكلفة
              </TableHead>
              <TableHead className="px-6 py-3 text-right text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                التفاصيل
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {costRows.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] text-right">
                  {row.component}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] text-right">
                  {row.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const ArabicBISCertificationRoleSection = () => {
  return (
    <section id="role" className="flex flex-col scroll-mt-20">
      {/* role */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الدور
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">ما هو دور الممثل الهندي المعتمد (AIR)</h2>

      <p className="simpleParagraph text-right">
        دور الممثل الهندي المعتمد (AIR) أمر بالغ الأهمية في عملية شهادة BIS
        للمصنعين الأجانب. وفقاً للوائح BIS الهندية، يجب على الشركات الموجودة
        خارج الهند تعيين ممثل هندي معتمد (AIR) ليعمل كحلقة وصل رسمية مع BIS.
        الممثل الهندي المعتمد مسؤول عن تقديم الطلبات وإدارة تسجيل BIS والتواصل
        مع المسؤولين وتنسيق عمليات التفتيش أو التدقيق. يلعب دوراً محورياً في
        ضمان أن المصنع الأجنبي يلتزم بجميع المعايير الهندية ويمتثل للمبادئ
        التوجيهية الخاصة بالمخطط مثل CRS أو FMCS أو Scheme X. بدون ممثل هندي
        معتمد صالح، لا يمكن المضي قدماً في طلب شهادة BIS. الممثل الهندي المعتمد
        مسؤول أيضاً عن الامتثال بعد الحصول على الشهادة، بما في ذلك عمليات
        التدقيق الرقابية وتجديد ترخيص BIS. تعيين ممثل هندي معتمد ذو خبرة يمكن أن
        يبسط بشكل كبير عملية شهادة BIS ويقلل من تأخير الموافقة. من الضروري أن
        يكون الممثل الهندي المعتمد مواطناً هندياً أو كياناً له عنوان فعلي في
        الهند. هذا يجعل التواصل بين المتقدمين الأجانب و BIS الهندية شفافاً
        وفعالاً. باختصار، الممثل الهندي المعتمد يعمل كقناة رسمية لضمان إتمام
        جميع خطوات الشهادة - من الاختبار إلى إصدار علامة ISI - دون تعقيدات، مما
        يجعلهم جزءاً لا غنى عنه في عملية تسجيل BIS.
      </p>
    </section>
  );
};

const ArabicBISCertificationConclusionSection = () => {
  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          الخاتمة
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">ملخص شهادة BIS والنقاط الرئيسية</h2>

      <p className="simpleParagraph text-right">
        في الختام، شهادة BIS هي ضرورة قانونية واستراتيجية للمصنعين الذين يتطلعون
        للوصول إلى السوق الهندية. هذه الشهادة الصادرة عن BIS الهندية تضمن أن
        المنتج يمتثل للمعايير الهندية المعتمدة للسلامة والأداء والجودة. سواء كان
        ذلك من خلال مخطط علامة ISI أو CRS أو FMCS أو Scheme X، فإن الحصول على
        شهادة BIS يعزز ثقة المستهلك ويضمن موثوقية المنتج. من الإلكترونيات ومواد
        البناء إلى مجوهرات الذهب والمنتجات الصديقة للبيئة، تمتد متطلبات ترخيص
        BIS عبر قطاعات متعددة. وجود علامة ISI يشير إلى الالتزام باللوائح الوطنية
        ويعمل كعلامة ضمان الجودة. بالنسبة للمصنعين الأجانب، يلعب الممثل الهندي
        المعتمد (AIR) دوراً بالغ الأهمية في استيفاء متطلبات الامتثال في إطار
        عملية شهادة BIS. بينما قد تبدو التكلفة والوثائق واسعة، فإن الفوائد طويلة
        المدى لتسجيل BIS تفوق بكثير الاستثمار الأولي. الوصول القانوني إلى السوق
        الهندية الواسعة، وتحسين مصداقية العلامة التجارية، وتقليل المخاطر
        التنظيمية تجعل ترخيص BIS لا غنى عنه. سواء كنت منتجاً محلياً أو مصدراً
        عالمياً، فإن مواءمة منتجاتك مع المعايير الهندية من خلال شهادة BIS
        المناسبة يضمن استدامة الأعمال وسلامة المستهلك والموافقة التنظيمية في
        واحد من أكبر الأسواق وأكثرها ديناميكية في العالم.
      </p>
    </section>
  );
};

const ArabicBISCertificationReviewSection = () => {
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
  );
};

const ArabicBISCertificationServiceFaq = () => {
  const faqData = [
    {
      question: "ما هي شهادة BIS في الهند؟",
      answer: "شهادة BIS هي شهادة ضمان الجودة الصادرة عن مكتب المعايير الهندية (BIS) لضمان أن المنتجات تتوافق مع المعايير الهندية للسلامة والأداء والجودة. إنها إلزامية لفئات مختلفة من المنتجات وتساعد في حماية المستهلك والامتثال التنظيمي."
    },
    {
      question: "لماذا أحتاج إلى شهادة BIS؟",
      answer: "شهادة BIS ضرورية لتصنيع أو استيراد أو توزيع أو بيع منتجات معينة في الهند بشكل قانوني. إنها تؤكد للمستهلكين أن المنتج يلبي إرشادات السلامة والجودة للمعايير الهندية."
    },
    {
      question: "ما هي علامة ISI تحت شهادة BIS؟",
      answer: "علامة ISI هي رمز شهادة يُقدم تحت نظام شهادة BIS. إنها تشير إلى أن المنتج يتوافق مع المعايير الهندية وقد تم اعتماده من قبل BIS الهندية من خلال الاختبار والتسجيل المناسب."
    },
    {
      question: "من يصدر تراخيص BIS في الهند؟",
      answer: "تراخيص BIS تصدر عن مكتب المعايير الهندية (BIS الهندية)، الهيئة الوطنية للمعايير تحت وزارة شؤون المستهلك والغذاء والتوزيع العام."
    },
    {
      question: "ما هي أنواع أنظمة شهادة BIS المختلفة؟",
      answer: "أنظمة شهادة BIS الرئيسية تشمل نظام علامة ISI، ونظام التسجيل الإلزامي (CRS)، ونظام شهادة المصنعين الأجانب (FMCS)، والدمغة للمجوهرات، وشهادة العلامة البيئية، والنظام X للآلات الصناعية."
    },
    {
      question: "ما هو النظام X تحت شهادة BIS؟",
      answer: "النظام X هو عملية شهادة BIS مبسطة قابلة للتطبيق على المنتجات الصناعية مثل المضخات والمحولات وأدوات الآلات والرافعات. إنه يضمن الموافقة الأسرع دون المساس بالامتثال للمعايير الهندية."
    },
    {
      question: "ما هي المنتجات التي تتطلب شهادة BIS في الهند؟",
      answer: "المنتجات مثل الأجهزة الكهربائية والإلكترونيات وأدوات المطبخ والأسمنت والصلب ومجوهرات الذهب والهواتف المحمولة والمحولات تتطلب شهادة BIS وفقاً لتفويض BIS الهندية."
    },
    {
      question: "هل تسجيل BIS إلزامي لجميع المنتجات؟",
      answer: "لا، تسجيل BIS إلزامي فقط للمنتجات المدرجة في نظام الشهادة الإلزامية. ومع ذلك، شهادة BIS الطوعية متاحة أيضاً لتعزيز مصداقية المنتج."
    },
    {
      question: "كم مدة صلاحية ترخيص BIS؟",
      answer: "ترخيص BIS صالح عادة لمدة سنة إلى سنتين ويجب تجديده قبل انتهاء صلاحيته لمواصلة استخدام علامة ISI أو الحفاظ على حالة تسجيل BIS."
    },
    {
      question: "ما هي خطوات الحصول على شهادة BIS في الهند؟",
      answer: "عملية شهادة BIS تشمل تحديد المعايير الهندية المطبقة، وتقديم طلب، واختبار المنتج، وتفتيش المصنع، وإصدار شهادة BIS عند الموافقة."
    },
    {
      question: "هل يمكن للمصنعين الأجانب التقدم للحصول على ترخيص BIS؟",
      answer: "نعم، تحت نظام شهادة المصنعين الأجانب (FMCS)، يمكن للشركات الأجنبية التقدم للحصول على ترخيص BIS لبيع المنتجات في الهند. يجب عليهم تعيين ممثل هندي معتمد (AIR)."
    },
    {
      question: "ما هو دور AIR في شهادة BIS؟",
      answer: "AIR (الممثل الهندي المعتمد) يعمل كحلقة وصل بين المصنع الأجنبي و BIS الهندية. إنهم مسؤولون عن التوثيق والتواصل والامتثال لمتطلبات شهادة BIS."
    },
    {
      question: "كيف يمكنني التقدم لتسجيل BIS عبر الإنترنت؟",
      answer: "يمكنك التقدم لتسجيل BIS عبر الإنترنت من خلال البوابة الرسمية لـ BIS. العملية تتضمن تقديم النموذج ورفع المستندات وتقارير الاختبار ودفع الرسوم."
    },
    {
      question: "ما هي المستندات المطلوبة لشهادة BIS؟",
      answer: "المستندات المطلوبة تشمل ترخيص العمل ومواصفات المنتج وعملية التصنيع وتقارير اختبار المختبر وتخطيط المصنع ودليل الجودة ونماذج التخويل (للمصنعين الأجانب)."
    },
    {
      question: "كم تكلف شهادة BIS في الهند؟",
      answer: "تكلفة شهادة BIS تعتمد على نوع المنتج ومتطلبات الاختبار ونوع النظام (ISI، CRS، FMCS) وما إذا كان المتقدم محلي أو أجنبي. التكاليف تشمل رسوم الطلب ورسوم الاختبار ومصاريف التفتيش."
    },
    {
      question: "هل علامة ISI إلزامية لجميع المنتجات المعتمدة من BIS؟",
      answer: "لا، فقط المنتجات تحت نظام ISI مطلوبة لحمل علامة ISI. المنتجات تحت أنظمة CRS أو الدمغة تتبع بروتوكولات وسم مختلفة وفقاً لمعايير تسجيل BIS."
    },
    {
      question: "هل يمكنني الحصول على شهادة BIS للمنتجات الصديقة للبيئة؟",
      answer: "نعم، المنتجات التي تلبي المعايير البيئية يمكن أن تحصل على شهادة BIS تحت نظام العلامة البيئية، والذي يضمن الامتثال للمعايير الهندية للسلامة البيئية."
    },
    {
      question: "ما الفرق بين شهادة BIS وتسجيل BIS؟",
      answer: "شهادة BIS تشير عموماً إلى الموافقة تحت أنظمة ISI أو FMCS أو الدمغة، بينما تسجيل BIS مرتبط عادة بنظام CRS للمنتجات الإلكترونية."
    },
    {
      question: "ما هو نظام التسجيل الإلزامي (CRS)؟",
      answer: "CRS هو برنامج تسجيل BIS للسلع الإلكترونية وتكنولوجيا المعلومات مثل أضواء LED والهواتف المحمولة وبنوك الطاقة. إنه يضمن امتثال المنتج للمعايير الهندية المتعلقة بالسلامة."
    },
    {
      question: "هل علامة ISI وشهادة BIS تعنيان نفس الشيء؟",
      answer: "ليس تماماً. علامة ISI هي الرمز الممنوح للمنتجات المعتمدة تحت نظام شهادة BIS. شهادة BIS هي الوثيقة القانونية الصادرة للمصنع."
    },
    {
      question: "هل يمكن لترخيص BIS واحد أن يغطي منتجات متعددة؟",
      answer: "لا، ترخيص BIS منفصل مطلوب لكل نوع منتج ولكل موقع تصنيع، حتى لو كانت المنتجات متشابهة."
    },
    {
      question: "ماذا يحدث إذا بعت منتجات بدون شهادة BIS؟",
      answer: "بيع المنتجات التي تتطلب شهادة BIS بدون ترخيص BIS صالح غير قانوني في الهند ويمكن أن يؤدي إلى عقوبات أو سحب المنتجات أو حظر."
    },
    {
      question: "كم من الوقت يستغرق الحصول على شهادة BIS؟",
      answer: "عملية شهادة BIS تستغرق عموماً من 30 إلى 90 يوماً، اعتماداً على نوع المنتج ومتطلبات الاختبار وما إذا كان المتقدم محلي أو أجنبي."
    },
    {
      question: "هل شهادة BIS مقبولة عالمياً؟",
      answer: "بينما شهادة BIS خاصة بالهند، فإنها تعزز المصداقية العالمية من خلال إظهار الامتثال للمعايير الهندية الصارمة. بعض المنتجات المعتمدة من BIS مقبولة أيضاً تحت اتفاقيات الاعتراف المتبادل."
    },
    {
      question: "كم مرة أحتاج لتجديد ترخيص BIS؟",
      answer: "تراخيص BIS يجب تجديدها سنوياً أو كل سنتين. يجب على المصنعين الحفاظ على الامتثال للمعايير الهندية واجتياز عمليات التدقيق الرقابية لتجديد شهادة BIS."
    }
  ];

  return (
    <section
      id="faqs"
      className="my-2 bg-white scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة - شهادة BIS في الهند
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
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium text-right">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e] text-right">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}