import FaqAuthorArabic from "@/components/common/FaqAuthor/FaqAuthorArabic";
import ManyUsersAlsoReadArabic from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterArabic from "@/components/manual/Footer/FooterArabic";

const BISCertificateForFurnitureArabic = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default BISCertificateForFurnitureArabic;

const MetaTags = () => {
  const title = "شهادة BIS للأثاث في الهند | شهادة BIS وترخيص ودليل العملية";
  const ogTitle = "شهادة BIS للأثاث في الهند - دليل شهادة BIS الكامل";
  const twitterTitle = "شهادة BIS للأثاث | دليل شهادة BIS الكامل لـ BIS الهندي";
  const metaDescription =
    "شهادة BIS للأثاث في الهند - دليل كامل عن شهادة BIS وترخيص BIS والتكلفة والمستندات والمعايير والعملية والتطبيق عبر الإنترنت وعلامة BIS لمصنعي الأثاث.";
  const ogDescription =
    "تبحث عن شهادة BIS للأثاث في الهند؟ تعرف على ترخيص BIS وعلامة BIS والمعايير المعمول بها وعملية الشهادة والتكلفة والمستندات ومتطلبات الامتثال بالتفصيل.";
  const twitterDescription =
    "دليل كامل لشهادة BIS للأثاث في الهند - عملية شهادة BIS والتكلفة والمستندات وعلامة BIS والمعايير والتطبيق عبر الإنترنت موضح.";
  const metaKeywords =
    "شهادة BIS للأثاث، شهادة BIS للأثاث، ترخيص BIS للأثاث، ترخيص BIS للأثاث، ما هو BIS، BIS الهندي";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/athath";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, رئيس العمليات في Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">الرئيسية</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">أحدث المدونات</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS للأثاث في الهند
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للأثاث في الهند: دليل شامل لمعايير BIS وعلامة ISI والعملية
          والامتثال
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="ترخيص BIS للأثاث"
            alt="شهادة BIS للأثاث في الهند - دليل علامة ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            الأثاث جزء أساسي من المنازل والمكاتب والأماكن العامة. ضمان سلامة
            الأثاث ومتانته وجودته أمر بالغ الأهمية للمستهلكين والمصنعين على حد
            سواء. في الهند، تُعد{" "}
            <strong>شهادة BIS للأثاث</strong> متطلبًا إلزاميًا لفئات معينة من
            الأثاث بموجب أمر مراقبة الجودة للأثاث (Furniture (Quality Control)
            Order)، 2025. يقدم هذا الدليل نظرة شاملة على معايير BIS وعلامة ISI
            وعملية الشهادة ومتطلبات الامتثال.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>ما هي شهادة BIS للأثاث؟</SectionHeading>

        <SubSectionHeading>معنى شهادة BIS للأثاث</SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي عملية رسمية يقوم بموجبها مكتب المعايير الهندية (BIS)
          بتقييم المنتجات للتأكد من امتثالها للمعايير الهندية. بالنسبة للأثاث،
          تضمن هذه الشهادة أن المنتجات تلبي معايير السلامة والأداء والجودة
          المحددة. بعد الحصول على الشهادة، يمكن للمصنعين استخدام{" "}
          <strong>علامة ISI</strong> على أثاثهم، مما يشير إلى الامتثال للمشترين.
        </p>

        <SubSectionHeading>
          الفرق بين شهادة BIS وعلامة ISI للأثاث
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>شهادة BIS</strong> — عملية التقييم والاختبار والموافقة من
              قبل BIS.
            </>,
            <>
              <strong>علامة ISI</strong> — علامة تُمنح بعد شهادة BIS وتشير إلى
              أن المنتج يتوافق مع المعايير الهندية. علامة ISI هي الضمان المرئي
              للامتثال للمستهلكين.
            </>,
          ]}
        />

        <SubSectionHeading>
          لماذا تُعد شهادة BIS مهمة لمصنعي الأثاث والمستوردين
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "الامتثال القانوني للوائح الهندية",
            "الوصول إلى السوق الهندي وفرص المشتريات الحكومية",
            "تعزيز ثقة المستهلك والميزة التنافسية",
            "تقليل مخاطر الاستدعاء والغرامات أو قيود الاستيراد",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          متطلبات شهادة BIS لمصنعي الأثاث
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  المتطلب
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  التفاصيل
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["جهة الشهادة", "مكتب المعايير الهندية (BIS)"],
                ["مخطط الشهادة", "المخطط الأول (شهادة علامة ISI)"],
                ["القانون المعمول به", "أمر مراقبة الجودة للأثاث، 2025"],
                ["العلامة الإلزامية", "علامة ISI مع رقم ترخيص BIS"],
                [
                  "اختبار المنتج",
                  "مطلوب عبر مختبرات معترف بها من BIS",
                ],
                ["فحص المصنع", "إلزامي قبل منح الترخيص"],
                [
                  "ينطبق على",
                  "المصنعين الهنود، المصنعين الأجانب، المستوردين",
                ],
                ["المراقبة بعد الشهادة", "مطلوبة"],
                [
                  "تجديد الترخيص",
                  "تجديد دوري وفقًا لمتطلبات BIS",
                ],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          الإطار التنظيمي لشهادة BIS للأثاث في الهند
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "أمر مراقبة الجودة للأثاث، 2025",
              description:
                "يُلزم أمر مراقبة الجودة للأثاث 2025 فئات معينة من الأثاث بالامتثال لمعايير BIS. يشكل الأمر الأساس القانوني للشهادة الإلزامية ويحدد أنواع الأثاث المشمولة.",
            },
            {
              icon: Building2,
              title: "دور مكتب المعايير الهندية (BIS)",
              description:
                "يطور BIS المعايير الهندية (IS)، ويقيّم وحدات التصنيع، ويجري اختبارات المنتجات، ويصدر تراخيص استخدام علامة ISI. كما يراقب الامتثال من خلال التدقيق والمتابعة.",
            },
          ]}
        />

        <SubSectionHeading>
          الشهادة الإلزامية مقابل الطوعية لشهادة BIS للأثاث
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>إلزامية</strong> — الفئات المحددة بموجب أمر مراقبة الجودة
              للأثاث، مثل الأسرة والكراسي ووحدات التخزين.
            </>,
            <>
              <strong>طوعية</strong> — يمكن للمصنعين اختيار شهادة فئات منتجات
              إضافية لتعزيز مصداقية السوق.
            </>,
          ]}
        />

        <SubSectionHeading>
          انطباق أمر مراقبة الجودة للأثاث على المصنعين والمستوردين
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "المصنعون الهنود الذين ينتجون أثاثًا مشمولًا بموجب الأمر",
            "المصنعون الأجانب الذين يصدرون إلى الهند",
            "المستوردون الذين يبيعون الأثاث محليًا",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          منتجات الأثاث المشمولة بشهادة BIS
        </SectionHeading>

        <SubSectionHeading>
          فئات الأثاث والمعايير الهندية المعمول بها
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  فئة الأثاث
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  المعيار الهندي المعمول به
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  عنوان المعيار
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  متطلب الشهادة
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "كراسي العمل",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "كراسي ومقاعد للأغراض العامة",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "الطاولات والمكاتب",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "وحدات التخزين",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "الأسرة",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "الأسرة المزدوجة",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    إلزامي بموجب أمر مراقبة الجودة للأثاث
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تتوافق جميع المنتجات المشمولة مع معايير BIS ذات الصلة وتحمل
          علامة ISI صالحة قبل بيعها في الهند. تحدد هذه المعايير الحد الأدنى
          لمتطلبات سلامة الأثاث واستقراره وسهولة استخدامه.
        </p>

        <SectionDivider />

        <SectionHeading>
          معايير BIS للأثاث ومتطلباتها
        </SectionHeading>

        <SubSectionHeading>
          متطلبات الأداء بموجب معايير BIS للأثاث
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          يجب أن يتحمل الأثاث الاستخدام العادي دون تشوه أو فشل هيكلي.
        </p>
        <CheckPointsList
          points={[
            "القدرة على تحمل الأحمال في ظروف الاستخدام العادية والذروة",
            "قوة الوصلات ومتانة التوصيلات",
            "استقرار المواد دون التواء أو تدهور",
          ]}
        />

        <SubSectionHeading>
          متطلبات اختبار السلامة والمتانة
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          يجب أن يلبي الأثاث معايير السلامة لمنع الحوادث ومعايير المتانة لضمان
          العمر الافتراضي الطويل.
        </p>
        <CheckPointsList
          points={[
            "منع الانقلاب (الكراسي والمقاعد والوحدات غير المستقرة)",
            "منع الانهيار تحت الحمل المحدد (الأسرة والأسرة المزدوجة والتخزين)",
            "المتانة طويلة الأمد من خلال اختبارات الأداء عند الاستخدام المتكرر",
          ]}
        />

        <SubSectionHeading>
          معايير الجودة المُقيَّمة أثناء الشهادة
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "جودة المواد والتشطيب",
            "القدرة على تحمل الأحمال",
            "الاستقرار والتصميم الإرغونومي وميزات السلامة",
          ]}
        />

        <SubSectionHeading>
          متطلبات الامتثال لفئات الأثاث المختلفة
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          لكل نوع من الأثاث معايير IS محددة تفصل الأبعاد واختبارات الأداء
          والتسامحات المسموح بها. يضمن الامتثال التوحيد والجودة عبر جميع
          المصنعين.
        </p>

        <SectionDivider />

        <SectionHeading>من يحتاج إلى شهادة BIS للأثاث؟</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "مصنعو الأثاث الهنود",
              description:
                "يجب على جميع المصنعين المحليين للأثاث المشمول بأمر مراقبة الجودة للأثاث الحصول على شهادة BIS قبل بيع المنتجات.",
            },
            {
              icon: Globe,
              title: "المصنعون الأجانب الذين يصدرون الأثاث إلى الهند",
              description:
                "يجب على المصدرين الامتثال لمعايير BIS لبيع الأثاث قانونيًا في الهند واستخدام علامة ISI.",
            },
            {
              icon: Package,
              title: "مستوردو الأثاث وأصحاب العلامات التجارية",
              description:
                "يجب على المستوردين التأكد من أن الأثاث الذي يدخلونه إلى الهند يتوافق مع معايير BIS، حتى لو كان مصنوعًا في الخارج.",
            },
            {
              icon: ShoppingCart,
              title: "بائعو التجارة الإلكترونية وأعمال التجزئة",
              description:
                "يجب على تجار التجزئة عبر الإنترنت وخارجه الذين يبيعون أثاثًا ضمن الفئات المشمولة التحقق من شهادة BIS لتجنب المسؤولية القانونية.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          شهادة BIS ISI للأثاث: العملية خطوة بخطوة
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "تحديد المنتج واختيار المعيار المعمول به",
              description:
                "حدد فئة الأثاث ومعيار BIS ذي الصلة (IS 17631–IS 17636) للاختبار والشهادة.",
            },
            {
              title: "اختبار المنتج في مختبرات معترف بها من BIS",
              description:
                "يُختبر الأثاث للقوة والاستقرار والمتانة في مختبرات معتمدة من BIS. تقارير الاختبار إلزامية للتقديم.",
            },
            {
              title: "تقديم طلب BIS",
              description:
                "يقدم المصنعون طلبًا إلى BIS مع مواصفات المنتج والتفاصيل الفنية وتقارير الاختبار.",
            },
            {
              title: "فحص المصنع والتقييم",
              description:
                "يجري BIS تدقيقًا للمصنع للتحقق من عمليات التصنيع وأنظمة مراقبة الجودة واتساق الإنتاج.",
            },
            {
              title: "منح ترخيص BIS وإذن علامة ISI",
              description:
                "عند الموافقة، يصدر BIS ترخيصًا يسمح للمصنع باستخدام علامة ISI على الأثاث المعتمد.",
            },
            {
              title: "متطلبات الامتثال بعد الشهادة",
              description:
                "التدقيقات المنتظمة والاختبارات الدورية والالتزام بمعايير BIS مطلوبة للحفاظ على الشهادة.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          المستندات المطلوبة لشهادة BIS للأثاث
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>تسجيل الشركة ومستندات التصنيع</strong> — تراخيص
              الأعمال وتسجيل GST وتفاصيل منشأة التصنيع.
            </>,
            <>
              <strong>المواصفات الفنية للمنتج والرسومات</strong> — التصاميم
              التفصيلية والمواد المستخدمة وتعليمات التجميع.
            </>,
            <>
              <strong>تقارير الاختبار ومستندات مراقبة الجودة</strong> —
              تقارير من مختبرات معتمدة من BIS تثبت الامتثال لمعايير IS.
            </>,
            <>
              <strong>مستندات المصنع وعملية الإنتاج</strong> — أنظمة إدارة
              الجودة وتدفق العمليات وإجراءات الفحص.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          متطلبات الاختبار للأثاث المعتمد من BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  مجال الاختبار
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  الغرض
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "اختبار القوة",
                  "يتحقق من القدرة على تحمل الأحمال",
                ],
                [
                  "اختبار الاستقرار",
                  "يمنع الانقلاب والانهيار",
                ],
                [
                  "اختبار المتانة",
                  "يقيّم الأداء عند الاستخدام المتكرر",
                ],
                [
                  "اختبار السلامة الهيكلية",
                  "يقيّم الوصلات والإطارات والتوصيلات",
                ],
                [
                  "اختبار السلامة",
                  "يقلل مخاطر الإصابة أثناء الاستخدام العادي",
                ],
                [
                  "اختبار الأداء الوظيفي",
                  "يؤكد الوظيفة المقصودة وسهولة الاستخدام",
                ],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب إجراء اختبار الأثاث في مختبرات معترف بها من BIS للتحقق من ادعاءات
          السلامة والأداء والمتانة.
        </p>

        <SectionDivider />

        <SectionHeading>
          علامة ISI للأثاث: الاستخدام ومتطلبات الامتثال
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>ما تشير إليه علامة ISI</strong> — تؤكد أن الأثاث يتوافق
              مع المعايير الهندية وقد حصل على شهادة BIS.
            </>,
            <>
              <strong>قواعد وضع علامة ISI</strong> — يجب أن تكون العلامة مرئية
              ودائمة ومنسقة بشكل صحيح وفقًا لإرشادات BIS.
            </>,
            <>
              <strong>عواقب سوء الاستخدام</strong> — الاستخدام غير القانوني
              قد يؤدي إلى غرامات وإلغاء الترخيص وإجراءات قانونية بموجب قانون
              BIS لعام 2016.
            </>,
            <>
              <strong>كيف يمكن للمشترين التحقق</strong> — يمكن للمستهلكين
              التحقق من رقم الترخيص على الموقع الرسمي لـ BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          الجدول الزمني وصلاحية وتجديد شهادة BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "الجدول الزمني للشهادة لمنتجات الأثاث",
              description:
                "عادةً من 2 إلى 3 أشهر، حسب جداول الاختبار وفحص المصنع.",
            },
            {
              icon: ShieldCheck,
              title: "صلاحية ترخيص BIS",
              description:
                "الترخيص صالح لمدة 1–3 سنوات ويتطلب التجديد قبل انتهاء الصلاحية.",
            },
            {
              icon: RefreshCw,
              title: "عملية تجديد شهادة BIS",
              description:
                "يشمل التجديد تقارير اختبار محدثة وفحوصات المصنع وتأكيد الامتثال.",
            },
            {
              icon: Eye,
              title: "المراقبة ومتطلبات الامتثال المستمرة",
              description:
                "يجري BIS تدقيقات واختبارات عشوائية لضمان الالتزام المستمر بالمعايير.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>فوائد الأثاث المعتمد من BIS</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>الامتثال القانوني والوصول إلى السوق</strong> — إلزامي
              لبيع أنواع معينة من الأثاث في الهند.
            </>,
            <>
              <strong>تحسين جودة المنتج وثقة المستهلك</strong> — تشير شهادة
              BIS إلى الموثوقية والسلامة.
            </>,
            <>
              <strong>الميزة التنافسية للمصنعين</strong> — الأثاث المعتمد
              يتمتع بمصداقية أعلى في السوق وأهلية للمشتريات.
            </>,
            <>
              <strong>الأهلية للمشتريات الحكومية</strong> — يمكن توريد المنتجات
              المعتمدة من BIS فقط للمشترين الحكوميين أو المؤسسيين.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          العقوبات على عدم الامتثال للوائح BIS للأثاث
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>تصنيع أو بيع أثاث غير معتمد</strong> — يخالف أمر مراقبة
              الجودة للأثاث ويؤدي إلى غرامات ومصادرة المنتجات.
            </>,
            <>
              <strong>قيود الاستيراد على الأثاث غير المتوافق</strong> — قد
              تُحجز الاستيرادات غير المعتمدة في الجمارك.
            </>,
            <>
              <strong>العقوبات بموجب قانون BIS لعام 2016</strong> — تشمل
              الغرامات المالية والسجن وحظر البيع.
            </>,
            <>
              <strong>مخاطر الأعمال عند عدم الامتثال</strong> — فقدان ثقة
              المستهلك والنزاعات القانونية وتقييد الوصول إلى السوق.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          التحديات في الحصول على شهادة BIS للأثاث
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "تحديد المعيار الهندي الصحيح",
              description:
                "يجب على المصنعين التأكد من أن منتجاتهم تتوافق مع معيار IS 17631–IS 17636 المعمول به.",
            },
            {
              title: "إدارة متطلبات الاختبار والتوثيق",
              description:
                "الاختبار المعملي المناسب والتوثيق إلزاميان للموافقة.",
            },
            {
              title: "معالجة ملاحظات تدقيق المصنع",
              description:
                "عدم الامتثال أثناء التدقيقات قد يؤخر الشهادة.",
            },
            {
              title: "الحفاظ على الامتثال المستمر بعد الشهادة",
              description:
                "المراقبة المستمرة للجودة والالتزام بمعايير BIS مطلوبة لتجنب العقوبات.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>كيف يمكن لـ Sun Certifications India المساعدة</SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "دعم الطلب والتوثيق",
              description:
                "إرشاد في تقديم طلب BIS كامل ودقيق.",
            },
            {
              icon: FlaskConical,
              title: "المساعدة في اختبار المنتج",
              description:
                "يساعد في التنسيق مع المختبرات المعتمدة من BIS.",
            },
            {
              icon: ClipboardCheck,
              title: "التحضير للتدقيق وإرشادات الامتثال",
              description:
                "يضمن أن عمليات المصنع تلبي متطلبات BIS قبل الفحص.",
            },
            {
              icon: ShieldCheck,
              title: "إدارة الامتثال بعد الترخيص",
              description:
                "يقدم المشورة بشأن حفظ السجلات وتدقيقات المراقبة وتحديثات المعايير.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          الأسئلة الشائعة حول شهادة BIS للأثاث
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "هل شهادة BIS إلزامية لجميع منتجات الأثاث؟",
              answer:
                "لا. فقط الأثاث المدرج بموجب أمر مراقبة الجودة للأثاث 2025 يتطلب شهادة BIS إلزامية.",
            },
            {
              question:
                "هل يمكن بيع الأثاث المستورد دون شهادة BIS؟",
              answer:
                "لا. لا يمكن بيع الأثاث ضمن الفئات الإلزامية في الهند دون موافقة BIS.",
            },
            {
              question: "كم تستغرق شهادة الأثاث؟",
              answer:
                "عادةً من 2 إلى 3 أشهر، حسب الاختبارات والفحوصات.",
            },
            {
              question:
                "ما الفرق بين شهادة BIS وعلامة ISI؟",
              answer:
                "شهادة BIS هي عملية الموافقة؛ علامة ISI هي ملصق الشهادة المعروض على الأثاث.",
            },
            {
              question:
                "ما هي معايير BIS المعمول بها للأثاث؟",
              answer:
                "تغطي IS 17631–IS 17636 الكراسي والمقاعد وكراسي العمل والطاولات والأسرة والأسرة المزدوجة ووحدات التخزين.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>موارد ذات صلة</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                شهادة BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                شهادة BIS للمصنعين الأجانب
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={2} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              خدماتنا
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                أفضل مستشار شهادة في الهند
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للتصنيع الأجنبي
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
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
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
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
