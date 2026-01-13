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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForWorkChairsArabic = () => {
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

export default BISCertificateForWorkChairsArabic;

const MetaTags = () => {
  const title = "شهادة BIS لكراسي العمل | رخصة BIS IS 17631:2022";
  const ogTitle = "شهادة BIS لكراسي العمل – دليل IS 17631:2022";
  const twitterTitle = "رخصة BIS لكراسي العمل | IS 17631:2022";
  const metaDescription =
    "احصل على شهادة BIS لكراسي العمل بموجب IS 17631:2022. العملية، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS لكراسي العمل وفقًا لـ IS 17631:2022. تعرف على العملية، التكلفة، المستندات، الاختبارات وفوائد رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS لكراسي العمل بموجب IS 17631:2022. تعرف على عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لكراسي العمل، رخصة BIS لكراسي العمل، IS 17631:2022، شهادة BIS لكراسي العمل";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    شهادة BIS لكراسي العمل – IS 17631:2022
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
          شهادة BIS لكراسي العمل – دليل الامتثال الكامل لـ IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="رخصة BIS لكراسي العمل"
            alt="شهادة BIS لكراسي العمل - IS 17631:2022 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          أدى الاستخدام المتزايد لمقاعد المكاتب والمهام—سواء في مساحات العمل
          المؤسسية، أو مراكز العمل المشترك، أو المكاتب المنزلية، أو الإعدادات
          المؤسسية—إلى جعل السلامة والأداء المريح أمرًا ضروريًا. لضمان تزويد
          المصنعين بمنتجات مقاعد مستقرة هيكليًا، متينة، وآمنة للمستخدمين، فرضت
          حكومة الهند شهادة BIS لكراسي العمل بموجب IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          عادة ما تتحمل كراسي العمل الأحمال المتكررة، وحركة الجسم المستمرة،
          والإمالة، والدوران، وتعديلات الارتفاع. يمكن أن يؤدي فشل أي ميزة أداء
          إلى إصابة خطيرة. لهذا السبب أصبح الامتثال لـ IS 17631:2022 – كراسي
          العمل: متطلبات السلامة إلزاميًا لجميع المصنعين والمستوردين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل عملية ترخيص BIS الكاملة، بما في ذلك المعايير،
          والاختبارات، والرسوم، والتوثيق، والمسؤوليات، والفوائد، والتحديات—مصممة
          بمحتوى جديد لتجنب التكرار عبر موقعك الإلكتروني.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فهم شهادة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرف مكتب المعايير الهندية (BIS) على جودة وسلامة المنتجات الموردة في
          السوق الهندي. يجب تقييم أي منتج يندرج تحت معيار هندي مدرج في أمر
          مراقبة الجودة الإلزامي والحصول على شهادة من BIS قبل البيع.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شهادة BIS – ما تمثله
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشير شهادة BIS إلى أن كرسي العمل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اجتاز اختبارات الأداء والمتانة</li>
          <li>يلبي مواصفات المواد والبناء</li>
          <li>آمن للاستخدام اليومي طويل الأمد</li>
          <li>يتوافق مع الإرشادات المريحة والهيكلية في المعايير الهندية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتم إصدار رخصة BIS للمصنعين الذين يستوفون هذه المتطلبات، مما يسمح لهم
          بوضع علامة ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار المطبق لكراسي العمل – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الحاكم لكراسي المهام والمكاتب هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – كراسي العمل: متطلبات السلامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يركز هذا المعيار على المقاعد المخصصة للاستخدام الممتد في بيئات العمل.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المنتجات المشمولة بهذا المعيار
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>كراسي المكاتب المريحة</li>
          <li>كراسي المهام</li>
          <li>الكراسي الدوارة</li>
          <li>كراسي مكاتب العمل</li>
          <li>كراسي العمل القابلة لتعديل الارتفاع</li>
          <li>كراسي العمل التنفيذية</li>
          <li>كراسي العمل بشبكة أو ظهر قماشي</li>
          <li>الكراسي المجهزة بمساند للأذرع</li>
          <li>الكراسي مع آليات الإمالة/القفل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا يعتبر الامتثال لـ IS 17631:2022 أمرًا بالغ الأهمية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تختلف كراسي العمل بشكل كبير عن الكراسي متعددة الأغراض لأنها:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تدعم الحركة المستمرة</li>
          <li>تستخدم آليات ميكانيكية وتعديل</li>
          <li>تحمل أحمالًا ديناميكية</li>
          <li>تتطلب متانة للاستخدام المطول</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          قد تفشل الكراسي المبنية بشكل سيء في:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مفاصل القاعدة</li>
          <li>آليات الدوران</li>
          <li>أنظمة رفع الغاز</li>
          <li>دعم المقعد/الظهر</li>
          <li>هيكل الأرجل أو العجلات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          يمكن أن يؤدي هذا إلى إصابات في مكان العمل، وتوقف التشغيل، ومشاكل
          مسؤولية المنتج.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تضمن شهادة BIS الإلزامية
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تصميم مريح آمن</li>
          <li>قدرة تحمل موثوقة</li>
          <li>متانة قوية تحت الاختبار الدوري</li>
          <li>مقاومة للبلى الميكانيكي</li>
          <li>الامتثال لمعايير سلامة المستخدم</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          وبالتالي، فإن الحصول على رخصة BIS لكراسي العمل أمر غير قابل للتفاوض
          للمصنعين الهنود والأجانب.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق رخصة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يغطي هذا المعيار متطلبات كراسي العمل. ينطبق هذا المعيار على كراسي
          العمل المصنعة/المصنعة بالكامل. كما ينطبق على الوحدات الجاهزة للتجميع؛
          في هذه الحالة تنطبق متطلبات هذا المعيار على الوحدات المجمعة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لكراسي العمل (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن عملية شهادة كراسي العمل مزيجًا من التقييم المخبري، وتدقيق
          المصنع، والفحص الفني.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تقييم المنتج ورسم الخرائط المعيارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          حدد جميع أنواع الكراسي وقم بمحاذاتها مع IS 17631:2022. افهم أي نماذج
          تشترك في نفس البناء وأيها يتطلب اختبارًا منفصلاً.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – تقديم الطلب عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقدم المصنع الطلب عبر بوابة Manak Online BIS. المعلومات المطلوبة تشمل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل موقع التصنيع</li>
          <li>ضوابط المواد الخام</li>
          <li>المواصفات الفنية</li>
          <li>قدرات الإنتاج</li>
          <li>وثائق ملكية العلامة التجارية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – دفع الرسوم
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب دفع الرسوم مقابل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الطلب</li>
          <li>المعالجة</li>
          <li>الاختبار</li>
          <li>التفتيش</li>
          <li>العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار العينات (متطلبات IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تقوم مختبر معترف به من BIS بتقييم الكرسي مقابل معايير السلامة والأداء
          المتعددة.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          تشمل اختبارات كرسي العمل
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبارات الحمولة الثابتة للمقعد والظهر</li>
          <li>دورات تحميل المتانة</li>
          <li>اختبار الدوران/الدوران</li>
          <li>تحمل آلية الإمالة</li>
          <li>أداء آلية رفع الغاز</li>
          <li>قوة العجلات ومقاومة التدحرج</li>
          <li>استقرار القاعدة واختبار التحميل الزائد</li>
          <li>قدرة تحميل مسند الذراع</li>
          <li>اختبارات مقاومة الصدمات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يصدر المختبر تقرير اختبار مفصل إلى BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – تدقيق المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يراجع مفتشو BIS ما يلي في المنشأة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نظام الإنتاج</li>
          <li>سجلات فحص المواد</li>
          <li>عمليات ضمان الجودة الداخلية</li>
          <li>أدوات الاختبار وسجلات المعايرة</li>
          <li>الامتثال لمخطط الاختبار والتفتيش (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح رخصة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بمجرد تأكيد المطابقة، يمنح BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رخصة BIS/شهادة علامة ISI</li>
          <li>رقم CML فريد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الامتثال المستمر
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على الفحوصات الداخلية المستمرة</li>
          <li>اتباع قواعد العلامات</li>
          <li>التعاون أثناء عمليات التفتيش الرقابية</li>
          <li>تجديد الترخيص بشكل دوري</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          مجموعة كاملة من المستندات تضمن الموافقة الأسرع.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات الأعمال والمصنع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تسجيل المصنع</li>
          <li>مخطط التصنيع والتخطيط</li>
          <li>سير عمل الإنتاج</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار</li>
          <li>شهادات المعايرة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات هندسية للكرسي</li>
          <li>مواصفات الآلية</li>
          <li>أوراق بيانات المواد</li>
          <li>قائمة المواد</li>
          <li>تعليمات التجميع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات هوية الموقع المصرح</li>
          <li>خطابات تفويض العلامة التجارية</li>
          <li>شهادة العلامة التجارية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات BIS المحددة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج الطلب</li>
          <li>التعهدات</li>
          <li>نموذج طلب الاختبار</li>
          <li>عينات الملصقات</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقًا لـ IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تخضع كراسي العمل لاختبارات أكثر تعقيدًا من الكراسي العامة بسبب الأجزاء
          المتحركة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          الاختبارات الرئيسية التي يتم إجراؤها
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  المتطلبات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التصميم والإتقان
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب الحافة الأمامية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب للأمام
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب للأمام للكراسي مع مسند القدم
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب الجانبي للكراسي بدون مساند الأذرع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب الجانبي للكراسي مع مساند الأذرع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الانقلاب للخلف للكراسي بدون مسند الظهر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة لحافة المقعد الأمامية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة المشتركة للمقعد والظهر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة لمسند الذراع للأسفل — المركزي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة لمسند الذراع للأسفل — الأمامي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة الجانبية لمسند الذراع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحمولة الثابتة لمسند القدم
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          تحاكي هذه الاختبارات أشهر أو سنوات من الاستخدام المنتظم في غضون أيام
          قليلة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة في شهادة BIS لكراسي العمل
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. الفشل في اختبار الميكانيكية/الإمالة</strong> – غالبًا
            ما يكون بسبب آليات ضعيفة أو أجهزة منخفضة الجودة.
          </li>
          <li>
            <strong>✔ 2. عدم امتثال آلية رفع الغاز</strong> – يجب أن تلبي رافعات
            الغاز معايير الضغط والسلامة الصارمة.
          </li>
          <li>
            <strong>✔ 3. البنية التحتية للاختبار غير كافية</strong> – يتطلب
            اختبار كرسي العمل منصات متخصصة.
          </li>
          <li>
            <strong>✔ 4. تجميع المنتج غير الصحيح</strong> – آليات مختلفة =
            اختبار منفصل.
          </li>
          <li>
            <strong>✔ 5. عدم الامتثال لـ STI</strong> – يمكن أن تؤخر أخطاء STI
            إصدار الترخيص.
          </li>
          <li>
            <strong>✔ 6. عدم تطابق المستندات</strong> – يجب أن يطابق اسم العلامة
            التجارية واسم الطراز طلب BIS تمامًا.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لكراسي العمل
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يسهل المبيعات القانونية في جميع أنحاء الهند</li>
          <li>يعزز ثقة العملاء وسمعة العلامة التجارية</li>
          <li>يضمن المتانة طويلة الأمد</li>
          <li>يقلل من مطالبات الضمان والأعطال</li>
          <li>يحمي من العقوبات التنظيمية</li>
          <li>يمكن الإدراج في منصات التجارة الإلكترونية</li>
          <li>إلزامي للمناقصات الحكومية والتوريدات المؤسسية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات لبيع كراسي العمل بدون شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يمكن أن يؤدي عدم الامتثال إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عقوبات مالية ثقيلة</li>
          <li>مصادرة المخزون</li>
          <li>أوامر إغلاق الإنتاج</li>
          <li>حظر الاستيراد</li>
          <li>الملاحقة الجنائية</li>
          <li>إلغاء ترخيص الأعمال</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتم تنفيذ صارم بموجب قانون BIS لعام 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يجب أن يحصل على شهادة BIS لكراسي العمل؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">إلزامي لـ:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود</li>
          <li>المصنعين الأجانب الذين يصدرون إلى الهند</li>
          <li>أصحاب العلامات التجارية</li>
          <li>المستوردين</li>
          <li>موردي OEM/ODM</li>
          <li>موزعي المستودعات</li>
          <li>علامات الأثاث التجارية والإنترنت</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتطلب كل مصنع رخصة BIS فريدة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعد شهادة BIS لكراسي العمل بموجب IS 17631:2022 أمرًا بالغ الأهمية
          لضمان منتجات مقاعد آمنة ومتينة ومريحة في الهند. تعزز الشهادة الإلزامية
          ثقة العملاء، وتقلل من مخاطر مسؤولية المنتج، وتضمن الامتثال لمعايير
          الجودة الوطنية. مع الدعم المهني، تصبح رحلة الشهادة—من الاختبار إلى
          التفتيش إلى الترخيص—فعالة وقابلة للتنبؤ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لكراسي العمل (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ما هي الكراسي التي تندرج تحت IS 17631:2022؟</strong>
              <br />
              أي كرسي مصمم لبيئات العمل، بما في ذلك كراسي المكاتب المريحة،
              وكراسي المهام، والكراسي الدوارة، والكراسي القابلة للتعديل.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. هل شهادة BIS إلزامية لكراسي العمل؟</strong>
              <br />
              نعم. شهادة BIS إلزامية قبل تصنيع أو بيع أو استيراد كراسي العمل في
              الهند.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. ما الذي يجعل اختبار كرسي العمل مختلفًا عن اختبار الكرسي
                العام؟
              </strong>
              <br />
              تستخدم كراسي العمل آليات مثل الدوران، ورفع الغاز، وأنظمة الإمالة،
              والعجلات—مما يتطلب اختبارات ميكانيكية ومتانة متقدمة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. كم تستغرق شهادة BIS؟</strong>
              <br />
              عادة 30-45 يومًا للمصنع الهندي وحوالي 120 يومًا للمصنعين الأجانب،
              اعتمادًا على الاختبارات والتوثيق.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل يمكن للمصنعين الأجانب التقديم؟</strong>
              <br />
              نعم، من خلال FMCS (مخطط شهادة المصنعين الأجانب).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ماذا لو فشل الكرسي في اختبار BIS؟</strong>
              <br />
              يجب إعادة تصميمه وتصحيحه وإعادة اختباره حتى يلبي IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ما هي المستندات المطلوبة لطلب BIS؟</strong>
              <br />
              تفاصيل المصنع، رسومات المنتج، قائمة الآلات، مستندات مراقبة الجودة،
              ملكية العلامة التجارية، والأوراق القانونية.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل تتطلب جميع نماذج الكراسي اختبارًا منفصلاً؟</strong>
              <br />
              إذا اختلفت النماذج في التصميم أو الآلية أو الهيكل، فقد يكون
              الاختبار المنفصل مطلوبًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل وضع علامة ISI إلزامي بعد الموافقة؟</strong>
              <br />
              نعم، يجب أن تظهر علامة ISI على المنتج والملصق والتغليف.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS لكراسي العمل - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={4} />
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
