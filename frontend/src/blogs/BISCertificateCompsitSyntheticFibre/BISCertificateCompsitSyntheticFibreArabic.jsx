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
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import LanguageSelectorCompsitSyntheticFibre from "./LanguageSelectorCompsitSyntheticFibre";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreArabic = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelectorCompsitSyntheticFibre />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default BISCertificateCompsitSyntheticFibreArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لحبال الألياف الاصطناعية المركبة | IS 14928:2001 رخصة BIS";
  const ogTitle =
    "شهادة BIS لحبال الألياف الاصطناعية المركبة – دليل IS 14928:2001";
  const twitterTitle =
    "رخصة BIS لحبال الألياف الاصطناعية المركبة | IS 14928:2001";
  const metaDescription =
    "احصل على شهادة BIS لحبال الألياف الاصطناعية المركبة وفق IS 14928:2001. الإجراءات، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لحبال الألياف الاصطناعية المركبة وفق IS 14928:2001. الإجراءات، التكلفة، المستندات، الاختبارات ومزايا رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب شهادة BIS لحبال الألياف الاصطناعية المركبة وفق IS 14928:2001. عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لحبال الألياف الاصطناعية المركبة، رخصة BIS لحبال الألياف الاصطناعية المركبة، IS 14928:2001، شهادة BIS لحبال الألياف الاصطناعية المركبة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/hibal-alyaf-sinaiya-murakkaba-is-14928";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
      {/* Hreflang: default English, alternate language versions */}
      <link rel="alternate" hrefLang="x-default" href="https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="en" href="https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="de" href="https://bis-certifications.com/blogs/isi-products/verbund-synthetikfaserseile-is-14928" />
      <link rel="alternate" hrefLang="es" href="https://bis-certifications.com/blogs/isi-products/cuerdas-de-fibra-sintetica-compuesta-is-14928" />
      <link rel="alternate" hrefLang="fr" href="https://bis-certifications.com/blogs/isi-products/cordes-en-fibres-synthetiques-composites-is-14928" />
      <link rel="alternate" hrefLang="id" href="https://bis-certifications.com/blogs/isi-products/tali-serat-sintetik-komposit-is-14928" />
      <link rel="alternate" hrefLang="it" href="https://bis-certifications.com/blogs/isi-products/corde-in-fibra-sintetica-composita-is-14928" />
      <link rel="alternate" hrefLang="ja" href="https://bis-certifications.com/blogs/isi-products/fukugo-gosei-sen-i-ro-pu-is-14928" />
      <link rel="alternate" hrefLang="ko" href="https://bis-certifications.com/blogs/isi-products/bokhap-hapseong-seomyu-ropeu-is-14928" />
      <link rel="alternate" hrefLang="nl" href="https://bis-certifications.com/blogs/isi-products/samengestelde-synthetische-vezeltouwen-is-14928" />
      <link rel="alternate" hrefLang="th" href="https://bis-certifications.com/th/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="vi" href="https://bis-certifications.com/vi/blogs/isi-products/day-soi-tong-hop-phoi-hop-is-14928" />
      <link rel="alternate" hrefLang="ar" href="https://bis-certifications.com/blogs/isi-products/hibal-alyaf-sinaiya-murakkaba-is-14928" />
      <link rel="alternate" hrefLang="zh" href="https://bis-certifications.com/blogs/isi-products/fuhe-hecheng-xianwei-sheng-is-14928" />
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
                    شهادة BIS لحبال الألياف الاصطناعية المركبة – IS 14928:2001
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

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لحبال الألياف الاصطناعية المركبة – دليل كامل لـ IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="رخصة BIS لحبال الألياف الاصطناعية المركبة"
            alt="شهادة BIS لحبال الألياف الاصطناعية المركبة - IS 14928:2001 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم حبال الألياف الاصطناعية المركبة على نطاق واسع في العمليات البحرية والموانئ والمرافئ والمنشآت البحرية وصيد الأسماك والشحن والبناء والزراعة وتداول المواد الثقيلة. تُصنع هذه الحبال بدمج ليفين اصطناعيين أو أكثر—مثل البوليستر أو البولي بروبيلين أو النايلون أو ألياف صناعية أخرى—لتحقيق مزيج متوازن من القوة والمرونة ومقاومة التآكل والطفو والمتانة. نظراً لأن حبال الألياف الاصطناعية المركبة تُستخدم غالباً في تطبيقات تحميل الوزن والقطر والربط والرفع والتطبيقات الحرجة للسلامة، فإن أي عيب بسيط في الجودة قد يؤدي إلى حوادث خطيرة أو تلف المعدات أو فشل تشغيلي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          للتحكم في هذه المخاطر وضمان جودة متسقة، تفرض حكومة الهند شهادة BIS لحبال الألياف الاصطناعية المركبة بموجب المعيار الهندي المعمول به IS 14928:2001. شهادة BIS السارية لحبال الألياف الاصطناعية المركبة هي متطلب قانوني للمصنعين والمستوردين قبل تصنيع أو بيع أو توزيع أو استيراد هذه المنتجات إلى السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعمل هذه الصفحة كدليل كامل يركز على الامتثال لشهادة BIS لحبال الألياف الاصطناعية المركبة، بما في ذلك نطاق IS 14928:2001، ونية السلامة، ومتطلبات الاختبار، والوثائق، واعتبارات التكلفة، وعملية الشهادة خطوة بخطوة. وهي مصممة للمصنعين والمستوردين والمصنعين الأجانب والتجار وبائعي التجارة الإلكترونية الذين يريدون فهماً واضحاً لكيفية الحصول على رخصة BIS لحبال الألياف الاصطناعية المركبة في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم مطابقة المنتجات تديره مكتب المعايير الهندية (BIS) الذي يعمل بموجب قانون BIS 2016. BIS مسؤول عن وضع المعايير الهندية وشهادة المنتجات وضمان أن البضائع المباعة في الهند تلبي معايير السلامة والجودة والأداء المحددة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          معنى شهادة BIS يشير إلى الموافقة الرسمية الممنوحة من BIS التي تؤكد أن المنتج يتوافق مع المعيار الهندي المعني. بمجرد الشهادة، يُصرح للمصنع باستخدام علامة شهادة BIS، المعروفة باسم علامة ISI، على المنتج والتغليف.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح علامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تشير علامة ISI إلى أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تم اختبار المنتج في مختبر معترف به من BIS</li>
          <li>تم تقييم منشأة التصنيع من قبل مسؤولي BIS</li>
          <li>آليات مراقبة الجودة والمراقبة المستمرة قائمة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          لماذا يوجد BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يوجد BIS من أجل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية سلامة المستهلك والعامل</li>
          <li>منع تداول المنتجات دون المستوى</li>
          <li>ضمان توحيد وموثوقية السلع الصناعية</li>
          <li>تعزيز إنفاذ اللوائح والتجارة العادلة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة لحبال الألياف الاصطناعية المركبة—المستخدمة غالباً في ظروف خطرة وحمولة عالية—تلعب شهادة BIS دوراً حاسماً في منع الحوادث وضمان الجودة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Composite Synthetic Fibre Ropes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Composite Synthetic Fibre Ropes
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies the requirements for materials, construction,
          dimensions, performance characteristics, marking, sampling, and
          testing of composite synthetic fibre ropes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Ropes manufactured using a combination of different synthetic fibres
          </li>
          <li>
            Various rope constructions such as laid and braided structures
          </li>
          <li>
            Ropes intended for marine, fishing, industrial, and general-purpose
            applications
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard aims to ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adequate breaking strength and load-bearing capacity</li>
          <li>Consistent diameter and construction quality</li>
          <li>
            Resistance to abrasion, moisture, and environmental degradation
          </li>
          <li>Predictable and safe performance throughout service life</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with IS 14928:2001 is mandatory for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers of composite synthetic fibre ropes</li>
          <li>Importers supplying these ropes in the Indian market</li>
          <li>Foreign manufacturers selling through Indian representatives</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Composite Synthetic Fibre Ropes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Consumer and Worker Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Composite synthetic fibre ropes are used in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mooring and towing operations</li>
          <li>Lifting and securing heavy loads</li>
          <li>Fishing nets and marine equipment</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          A rope failure can cause injury, loss of life, vessel damage, and
          project delays.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per BIS notifications and quality control requirements, products
          covered under IS 14928:2001 cannot be legally sold without BIS
          certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          عدم الامتثال قد يؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتجات غير المعتمدة</li>
          <li>غرامات مالية بموجب قانون BIS</li>
          <li>المقاضاة والإجراءات القانونية</li>
          <li>رفض إخلاء الاستيراد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. مزايا السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          رخصة BIS لحبال الألياف الاصطناعية المركبة تحسّن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ثقة العملاء</li>
          <li>الأهلية لمناقصات الحكومة والقطاع العام</li>
          <li>مصداقية العلامة التجارية في الأسواق المحلية والتصدير</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لحبال الألياف الاصطناعية المركبة
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الانطباق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تبدأ العملية بتأكيد أن المنتج يندرج تحت IS 14928:2001. ويتضمن ذلك تحديد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تركيب الألياف والمزيج</li>
          <li>نوع بناء الحبل</li>
          <li>نطاق القطر والتطبيق المقصود</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          التحديد الدقيق يتجنب أخطاء الاختبار ورفض الطلب.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية التقديم الإلكتروني لـ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين التقديم إلكترونياً عبر بوابة BIS بإرسال:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المنتج</li>
          <li>معلومات المصنع والتصنيع</li>
          <li>ترتيبات مراقبة الجودة</li>
          <li>تفاصيل طلب الاختبار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          استمارة BIS المعبأة بشكل صحيح ضرورية للمعالجة في الوقت المناسب.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الرسوم وهيكل التكلفة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن تكلفة شهادة BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم الاختبار في المختبرات المعترف بها من BIS</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص والوسم السنوية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تختلف تكلفة شهادة BIS الإجمالية حسب بناء الحبل ونطاق الحجم وتعقيد الاختبار. التخطيط السليم يساعد في إدارة تكلفة شهادة BIS وتكلفة رخصة BIS بفعالية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينات المنتج (وفقاً لـ IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم سحب عينات المنتج واختبارها في المختبرات المعترف بها من BIS للتحقق من الامتثال لجميع متطلبات المعيار.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش المصنع والتدقيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يقوم مسؤولو BIS بإجراء تدقيق للمصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التحكم في عملية التصنيع</li>
          <li>التعامل مع المواد الخام</li>
          <li>مرافق الاختبار الداخلية</li>
          <li>أنظمة ووثائق ضمان الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح رخصة BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد استيفاء جميع المتطلبات، تمنح BIS رخصة مكتب المعايير الهندية، مما يسمح للمصنع باستخدام علامة ISI على حبال الألياف الاصطناعية المركبة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بعد الشهادة، يجب على المرخص له:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على جودة المنتج بشكل متسق</li>
          <li>السماح بتدقيقات المراقبة الدورية</li>
          <li>إبلاغ BIS بأي تغيير في المواد أو العملية أو التصميم</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات المصنع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة تسجيل المصنع</li>
          <li>مخطط تدفق عملية التصنيع</li>
          <li>قائمة الآلات ومعدات الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة تأسيس الشركة</li>
          <li>تسجيل ضريبة السلع والخدمات (GST)</li>
          <li>خطاب التفويض للموقع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مواصفات ورسومات المنتج</li>
          <li>مواصفات المواد الخام</li>
          <li>إجراءات الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>استمارة طلب BIS معبأة بشكل صحيح</li>
          <li>خطاب طلب الاختبار</li>
          <li>تفاصيل الوسم والبطاقات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشكل هذه مجتمعة المستندات الإلزامية لشهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشمل الاختبارات الإلزامية:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  المتطلب
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  البناء
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الهيكل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  المعالجة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحبل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  القطر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الكتلة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  قوة الكسر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الطول
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء جميع الاختبارات فقط في المختبرات المعترف بها من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>تصنيف المنتج بشكل خاطئ</strong>
            <br />
            الحل: إجراء تقييم فني قبل الشهادة.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>فشل الاختبارات</strong>
            <br />
            الحل: مواءمة جودة المواد الخام وضوابط العملية مع IS 14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>المستندات غير المكتملة</strong>
            <br />
            الحل: إعداد مستندات BIS بعناية والتحقق منها قبل التقديم.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>عدم الامتثال في التدقيق</strong>
            <br />
            الحل: الحفاظ على السجلات والمعايرة وفحوصات الجودة الداخلية بشكل صحيح.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          مزايا شهادة BIS للمصنعين والمستوردين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المزايا القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الامتثال للوائح الهندية</li>
          <li>إخلاء جمركي سلس</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المزايا التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الأهلية لمناقصات الحكومة والمؤسسات</li>
          <li>تحسين قبول المشترين</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مزايا العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاستخدام المعتمد لعلامة BIS</li>
          <li>تعزيز الثقة ومصداقية السوق</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسيع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الدخول إلى القطاعات المنظمة</li>
          <li>نمو الأعمال على المدى الطويل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قد يؤدي عدم الحصول على شهادة BIS إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>غرامات مالية ثقيلة</li>
          <li>مصادرة المنتج أو استدعاؤه</li>
          <li>حظر الاستيراد</li>
          <li>المقاضاة القانونية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج شهادة BIS لحبال الألياف الاصطناعية المركبة؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب الذين يوردون إلى الهند</li>
          <li>التجار والموزعون</li>
          <li>بائعو التجارة الإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          أي جهة تضع حبال الألياف الاصطناعية المركبة في السوق الهندي يجب أن تضمن الامتثال لـ BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لحبال الألياف الاصطناعية المركبة بموجب IS 14928:2001 هو التزام قانوني ومتطلب سلامة حرج. تضمن شهادة BIS / رخصة BIS السارية لحبال الألياف الاصطناعية المركبة الامتثال التنظيمي وحماية المستخدمين النهائيين وتعزيز مصداقية السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          للمصنعين والمستوردين، شهادة BIS ليست مجرد موافقة—بل تتعلق بالثقة والسلامة ونمو الأعمال المستدام. مع التحضير الفني السليم والإرشاد الخبير، يمكن إكمال عملية شهادة BIS في الهند بسلاسة وكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لحبال الألياف الاصطناعية المركبة
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. ما هو الاسم الكامل لـ BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              مكتب المعايير الهندية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. هل شهادة BIS إلزامية لحبال الألياف الاصطناعية المركبة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، وفقاً لـ IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. ما هو الاسم الكامل لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              شهادة مكتب المعايير الهندية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. هل يمكنني التقدم بطلب شهادة BIS إلكترونياً؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التقديم إلكترونياً عبر البوابة الرسمية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. كم تستغرق شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادة من شهر إلى شهرين.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. ما هي تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تختلف حسب نطاق الاختبار والتدقيق.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. هل يحتاج المستوردون إلى شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              يجب على المستوردين التأكد من أن المنتجات معتمدة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. هل يمكن للمصنعين الأجانب التقديم؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال ممثل هندي معتمد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. هل تسجيل BIS هو نفسه رخصة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا، حبال الألياف تتطلب رخصة BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. ماذا يحدث إذا فشل المنتج في الاختبار؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              يلزم اتخاذ إجراء تصحيحي وإعادة الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. هل وضع علامة ISI إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، بعد الشهادة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. كم تبلغ مدة صلاحية رخصة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادة سنة إلى سنتين، قابلة للتجديد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. هل تدقيقات المراقبة إلزامية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تقوم BIS بإجراء تدقيقات دورية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. هل يمكن توسيع نطاق الترخيص لاحقاً؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال موافقة توسيع النطاق.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. هل يمكن بيع المنتجات غير المعتمدة عبر الإنترنت؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا، مبيعات التجارة الإلكترونية تتطلب أيضاً الامتثال لـ BIS.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="شهادة BIS لحبال الألياف الاصطناعية المركبة - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={1} />
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (رخصة ISI) للمصنعين الأجانب
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
