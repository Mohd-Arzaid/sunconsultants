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

const BISCertificateForTablesAndDesksUnitArabic = () => {
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

export default BISCertificateForTablesAndDesksUnitArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للطاولات والمكاتب | IS 17633:2022 ترخيص BIS";
  const ogTitle = "شهادة BIS للطاولات والمكاتب – دليل IS 17633:2022";
  const twitterTitle = "ترخيص BIS للطاولات والمكاتب | IS 17633:2022";
  const metaDescription =
    "احصل على شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022. العملية، الوثائق، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS للطاولات والمكاتب وفقاً لـ IS 17633:2022. تعرف على العملية، التكلفة، الوثائق، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022. تعرف على عملية BIS، الوثائق، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للطاولات والمكاتب، ترخيص BIS للطاولات والمكاتب، IS 17633:2022، شهادة BIS للطاولات والمكاتب";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tawilat-wa-makatib-is-17633";
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
                    شهادة BIS للطاولات والمكاتب – IS 17633:2022
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
          شهادة BIS للطاولات والمكاتب – دليل شامل لشهادة BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="ترخيص BIS للطاولات والمكاتب"
            alt="شهادة BIS للطاولات والمكاتب - IS 17633:2022 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للطاولات والمكاتب إلزامية لجميع المصنعين والمستوردين والبائعين للطاولات والمكاتب في الهند. بموجب المعيار الهندي IS 17633:2022 – الطاولات والمكاتب: متطلبات السلامة، يجب اختبار هذه العناصر من الأثاث والتحقق منها من قبل مكتب المعايير الهندية (BIS) قبل أن يتم بيعها قانونياً في السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الطاولات والمكاتب هي مكونات أساسية في المنازل والمكاتب والمدارس والجامعات والمساحات التجارية وبيئات الضيافة وأماكن العمل الصناعية. نظراً لأنها غالباً ما تدعم الوزن والصدمات والاستخدام المستمر، فإن قوتها الهيكلية وسلامتها أمران بالغان الأهمية. لضمان حماية المستهلك وموثوقية المنتج، يفرض BIS شهادة إلزامية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل IS 17633:2022، عملية تسجيل BIS، الاختبار، الوثائق المطلوبة، الرسوم، الجداول الزمنية، العقوبات، والفوائد للمصنعين والمستوردين.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي عملية امتثال تنظيمية تديرها مكتب المعايير الهندية، هيئة المعايير الوطنية في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تؤكد شهادة BIS أن المنتج يلبي متطلبات السلامة والجودة والأداء والمتانة التي وضعتها المعايير الهندية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد شهادة BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يضمن سلامة المستهلك</li>
          <li>يدعم التصنيع عالي الجودة</li>
          <li>يقلل من مخاطر فشل المنتج</li>
          <li>يحسن قبول السوق</li>
          <li>مطلوب قانونياً بموجب أوامر مراقبة الجودة BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد الموافقة، يحمل المنتج علامة BIS (علامة ISI) مع رقم الترخيص.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما المعيار الهندي الذي ينطبق على الطاولات والمكاتب؟ – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار BIS المعمول به هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – الطاولات والمكاتب: متطلبات السلامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يحدد هذا المعيار متطلبات الأداء والسلامة الهيكلية والمتانة لجميع أنواع الطاولات والمكاتب المستخدمة في البيئات السكنية والتجارية والضيافة والمؤسسية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المنتجات المشمولة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مكاتب المكتب</li>
          <li>مكاتب الكمبيوتر</li>
          <li>طاولات الدراسة</li>
          <li>طاولات الطعام</li>
          <li>طاولات القهوة</li>
          <li>مكاتب العمل</li>
          <li>مكاتب التدريب</li>
          <li>مكاتب المدرسة/الكلية</li>
          <li>طاولات المعلم</li>
          <li>طاولات محطات العمل المعيارية</li>
          <li>طاولات الكتابة</li>
          <li>طاولات الاجتماعات/المؤتمرات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معايير السلامة الرئيسية بموجب IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاستقرار الهيكلي</li>
          <li>القدرة على تحمل الأحمال</li>
          <li>مقاومة الصدمات</li>
          <li>أداء القوة الأفقية/العمودية</li>
          <li>جودة التشطيب السطحي</li>
          <li>سلامة الحواف</li>
          <li>المتانة تحت الاستخدام المتكرر</li>
          <li>سلامة المواد</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تمتثل كل طاولة أو مكتب يتم بيعه في الهند لهذه المعايير من خلال تسجيل BIS للطاولات والمكاتب.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية للطاولات والمكاتب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الطاولات والمكاتب هي عناصر أثاث عالية الاستخدام موجودة في المنازل والمكاتب والمدارس والمناطق العامة. يمكن أن تسبب الأعطال الهيكلية حوادث مثل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الانهيار تحت الوزن</li>
          <li>إصابات الحواف الحادة</li>
          <li>عدم الاستقرار أثناء الاستخدام</li>
          <li>كسر المفاصل</li>
          <li>انفصال السطح</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          لتجنب هذه المخاطر، تضمن شهادة BIS:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التصميم والبناء الآمن</li>
          <li>الامتثال لمتطلبات الأحمال الهيكلية</li>
          <li>الأداء المتين</li>
          <li>منع الانقلاب والانهيار</li>
          <li>اختيار مواد عالية الجودة</li>
          <li>معايير السوق الموحدة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بيع الطاولات والمكاتب بدون ترخيص BIS للطاولات والمكاتب غير قانوني في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للطاولات والمكاتب (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتبع عملية شهادة BIS مخطط ISI (مخطط تقييم المطابقة-I)، والذي يتضمن اختبار المنتج وتفتيش المصنع.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد فئة المنتج والمعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تأكد من أن الطاولة/المكتب يندرج تحت IS 17633:2022. حدد عدد المتغيرات والمواد.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – تقديم طلب BIS (التقديم عبر الإنترنت)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          املأ الطلب على بوابة BIS Manak Online بـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>عنوان المصنع</li>
          <li>مواصفات المنتج</li>
          <li>تفاصيل العلامة التجارية</li>
          <li>أنظمة مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – دفع رسوم شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">يشمل:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار العينات في مختبر معترف به من BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب أن تخضع المنتجات لاختبار كامل كما هو موضح في IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          الاختبارات التي يتم إجراؤها
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الاستقرار</li>
          <li>اختبار القوة (الحمل الثابت)</li>
          <li>اختبار المتانة (التحميل المتكرر)</li>
          <li>اختبار الصدمة</li>
          <li>قياس الانحراف</li>
          <li>اختبار سلامة الحواف والسطح</li>
          <li>اختبار حمل مساحة العمل</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يرفع المختبر تقارير الاختبار مباشرة إلى BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – تفتيش مصنع BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يزور موظف BIS منشأة التصنيع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نظام إدارة الجودة</li>
          <li>القدرة على الاختبار الداخلي</li>
          <li>التحكم في المواد الخام</li>
          <li>خط الإنتاج والآلات</li>
          <li>معايرة الأدوات</li>
          <li>الامتثال لـ STI (مخطط الاختبار والتفتيش)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">يصدر BIS:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>موافقة علامة ISI</li>
          <li>رقم ترخيص CML فريد</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          بعد ذلك، يمكن للمصنع وضع علامة وبيع الطاولات/المكاتب قانونياً في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الامتثال بعد الترخيص
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على السجلات وفقاً لـ STI</li>
          <li>استخدام علامة ISI بشكل صحيح</li>
          <li>السماح بتفتيشات BIS الدورية</li>
          <li>تجديد الترخيص كل 1-2 سنة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق ترخيص BIS للطاولات والمكاتب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يغطي هذا المعيار المتطلبات المتعلقة بالأداء والسلامة، أي القوة والاستقرار والمتانة للطاولات والمكاتب المستخدمة في وضع الجلوس و/أو الوقوف، المستخدمة من قبل البالغين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> ينطبق هذا المعيار على الطاولات والمكاتب المصنعة/المصنفة بالكامل. كما ينطبق على الوحدات الجاهزة للتجميع؛ في هذه الحالة، تنطبق متطلبات هذا المعيار على الوحدات المجمعة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الوثائق المطلوبة لشهادة BIS للطاولات والمكاتب
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          وثائق التصنيع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ترخيص المصنع</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار</li>
          <li>شهادات المعايرة</li>
          <li>تخطيط المصنع</li>
          <li>مخطط تدفق العملية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الوثائق التقنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات الطاولة/المكتب</li>
          <li>قائمة المواد</li>
          <li>مواصفات المنتج</li>
          <li>تقارير اختبار الجودة الداخلية</li>
          <li>صور/فيديوهات المنتج</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الوثائق القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات هوية الموقع المصرح</li>
          <li>إثبات العنوان</li>
          <li>خطاب تفويض العلامة التجارية</li>
          <li>شهادة تسجيل العلامة التجارية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          وثائق طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج الطلب المملوء</li>
          <li>التعهد من المصنع</li>
          <li>خطاب طلب الاختبار</li>
          <li>خطاب التفويض</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الوثائق الكاملة تضمن الموافقات الأسرع.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار بموجب IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يقيم الاختبار القوة والاستقرار والمتانة والسلامة.
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التصميم والإتقان
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الاستقرار
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحمل المعلن
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  للأحمال الثقيلة العرضية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  القوة تحت القوة الثابتة الأفقية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  عام
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الصدمة العمودية لأسطح الطاولات الزجاجية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الصدمة العمودية لجميع أسطح الطاولات الأخرى
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  انحراف أسطح الطاولات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار السقوط
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء الاختبار فقط في المختبرات المعتمدة من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. فشل المنتج في اختبارات الحمل أو المتانة</strong>
            <br />
            الحل: تقوية المفاصل، استخدام مواد متوافقة مع BIS، إضافة التعزيز.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. الوثائق غير مكتملة</strong>
            <br />
            الحل: إعداد جميع الوثائق القانونية والتقنية والتصنيع مسبقاً.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. المصنع يفتقر إلى معدات الاختبار المناسبة</strong>
            <br />
            الحل: تثبيت الأدوات المطلوبة والحفاظ على المعايرة وفقاً لإرشادات BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. وضع العلامات غير صحيح</strong>
            <br />
            الحل: تأكد من أن علامة ISI تتبع قواعد BIS بدقة.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. تصنيف نماذج المنتج بشكل خاطئ</strong>
            <br />
            الحل: احصل على إرشاد مهني لتصنيف المتغيرات بشكل صحيح.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للطاولات والمكاتب
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التفويض القانوني للبيع في الهند</li>
          <li>زيادة ثقة العملاء</li>
          <li>متانة أفضل للمنتج</li>
          <li>الوصول إلى تجار التجزئة الكبار ومنصات التجارة الإلكترونية</li>
          <li>انخفاض مخاطر مسؤولية المنتج</li>
          <li>مصداقية أعلى للعلامة التجارية</li>
          <li>الامتثال لأوامر مراقبة الجودة الحكومية (QCOs)</li>
          <li>ميزة تنافسية في السوق</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات لعدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع أو توزيع الطاولات/المكاتب بدون شهادة BIS قد يؤدي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج</li>
          <li>غرامات ثقيلة</li>
          <li>الملاحقة الجنائية</li>
          <li>حظر الاستيراد</li>
          <li>أوامر إغلاق الأعمال</li>
          <li>إلغاء الترخيص</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يفرض قانون مكتب المعايير الهندية لعام 2016 عقوبات صارمة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS للطاولات والمكاتب؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          هذه الشهادة إلزامية لـ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود</li>
          <li>المصنعين الأجانب</li>
          <li>المستوردين</li>
          <li>التجار/أصحاب العلامات التجارية</li>
          <li>موردي OEM/ODM</li>
          <li>موزعي الأثاث</li>
          <li>بائعي التجارة الإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على كل مصنع الحصول على ترخيص BIS منفصل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم المساعدة من البداية إلى النهاية:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفسير المعيار (IS 17633:2022)</li>
          <li>تصنيف المنتج</li>
          <li>صياغة الوثائق</li>
          <li>تنسيق الاختبار</li>
          <li>تقديم طلب بوابة BIS</li>
          <li>دعم تفتيش المصنع</li>
          <li>المتابعة المستمرة مع BIS</li>
          <li>موافقة الترخيص</li>
          <li>إدارة التجديد والامتثال</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن خبرتنا شهادة سريعة وخالية من المتاعب والأخطاء.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022 هي متطلب مطابقة إلزامي يضمن سلامة المنتج والأداء والمتانة والامتثال للمعايير الوطنية. يجب على المصنعين والمستوردين الخضوع لاختبار المنتج وتفتيش المصنع والوفاء بجميع قواعد وثائق BIS ووضع العلامات للحصول على علامة ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع المساعدة الخبيرة، تصبح عملية الشهادة بأكملها سلسة وسريعة ومتوافقة بالكامل مع لوائح BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للطاولات والمكاتب (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. هل شهادة BIS إلزامية للطاولات والمكاتب؟
              </strong>
              <br />
              نعم. وفقاً لـ IS 17633:2022، يجب أن تكون جميع الطاولات والمكاتب معتمدة من BIS قبل بيعها في الهند.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما الاختبارات المطلوبة للشهادة؟</strong>
              <br />
              تشمل الاختبارات الإلزامية اختبارات الاستقرار والقوة والمتانة والانحراف والصدمة وسلامة السطح.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ما هي تكلفة شهادة BIS؟</strong>
              <br />
              تتراوح التكلفة بين ₹65,000 – ₹1,30,000، اعتماداً على عوامل الاختبار والتفتيش.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. هل يحتاج المصنعون الأجانب إلى شهادة BIS؟
              </strong>
              <br />
              نعم، من خلال مخطط FMCS، والذي يتضمن تفتيشات المصانع في الخارج من قبل BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. هل يمكن لترخيص واحد أن يغطي نماذج طاولة/مكتب متعددة؟
              </strong>
              <br />
              نعم، ولكن فقط إذا كانت النماذج متشابهة في البناء ومعايير الاختبار.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. كم تستغرق عملية BIS؟</strong>
              <br />
              ما يقرب من 30-45 يوماً.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. هل الاختبار إلزامي في مختبر معترف به من BIS؟</strong>
              <br />
              نعم، فقط المختبرات المعتمدة من BIS يمكنها إجراء الاختبارات.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ماذا يحدث إذا فشل المنتج؟</strong>
              <br />
              يجب إعادة تصميمه وإعادة تقديمه للاختبار.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل وضع علامة ISI إلزامي بعد الشهادة؟</strong>
              <br />
              نعم، علامة ISI مطلوبة على المنتج والتغليف.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ما الوثائق المطلوبة؟</strong>
              <br />
              الرسومات التقنية، قائمة المواد (BOM)، وثائق المصنع، تقارير الاختبار، خطة مراقبة الجودة، والوثائق القانونية.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للطاولات والمكاتب - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
                alt="شعار CDSCO"
                title="شعار CDSCO"
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
                alt="شعار BISCRS"
                title="شعار BISCRS"
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
                alt="إدارة النفايات البلاستيكية"
                title="إدارة النفايات البلاستيكية"
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
                alt="شهادة EPR"
                title="شهادة EPR"
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
                alt="شهادة LMPC"
                title="شهادة LMPC"
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
                alt="شعار BIS"
                title="شعار BIS"
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
                alt="علامة ISI"
                title="علامة ISI"
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
