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

const BISCertificateForWeldedPipesAndTubesArabic = () => {
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

export default BISCertificateForWeldedPipesAndTubesArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للأنابيب والأنابيب الملحومة | IS 17876:2022 ترخيص BIS";
  const ogTitle =
    "شهادة BIS للأنابيب والأنابيب الملحومة – دليل IS 17876:2022";
  const twitterTitle = "ترخيص BIS للأنابيب والأنابيب الملحومة | IS 17876:2022";
  const metaDescription =
    "احصل على شهادة BIS للأنابيب والأنابيب الملحومة بموجب IS 17876:2022. العملية، الوثائق، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للأنابيب والأنابيب الملحومة وفقاً لـ IS 17876:2022. تعرف على العملية، التكلفة، الوثائق، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للأنابيب والأنابيب الملحومة بموجب IS 17876:2022. تعرف على عملية BIS، الوثائق، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للأنابيب والأنابيب الملحومة، ترخيص BIS للأنابيب والأنابيب الملحومة، IS 17876:2022، شهادة BIS للأنابيب والأنابيب الملحومة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/anabib-wa-anabib-malwama-is-17876";
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
                    شهادة BIS للأنابيب والأنابيب الملحومة – IS 17876:2022
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
          شهادة BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ بموجب IS 17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="ترخيص BIS للأنابيب والأنابيب الملحومة"
            alt="شهادة BIS للأنابيب والأنابيب الملحومة - IS 17876:2022 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم الأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ على نطاق واسع في الصناعات مثل البناء، المعالجة الكيميائية، الأغذية والمشروبات، توزيع المياه، التطبيقات الهيكلية، والهندسة العامة. نظراً لأن هذه الأنابيب تحمل السوائل والغازات، وفي بعض الحالات المواد الكيميائية المسببة للتآكل، يجب التحقق من قوتها ومقاومتها للتآكل وسلامة التصنيع قبل دخولها السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لتنظيم الجودة وضمان السلامة العامة والصناعية، جعلت حكومة الهند شهادة BIS إلزامية للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ بموجب IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل عملية الموافقة الكاملة من BIS، التوثيق، متطلبات الاختبار، التكلفة، الجدول الزمني، التزامات الشركة المصنعة، الفوائد، وقواعد الامتثال — مكتوبة بتنسيق جديد وفريد، مما يضمن عدم التكرار مع المحتوى السابق.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ينظم مكتب المعايير الهندية (BIS) جودة المنتجات في الهند من خلال مخططات شهادات مختلفة. يجب على المنتج الذي يخضع لأمر مراقبة الجودة الإلزامي (QCO) الحصول على ترخيص BIS قبل تصنيعه أو استيراده أو تخزينه أو بيعه أو توزيعه.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ما تضمنه شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تؤكد شهادة BIS أن الأنابيب/الأنابيب الملحومة من الفولاذ المقاوم للصدأ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفي بدقة الأبعاد</li>
          <li>تمتلك القوة الميكانيكية المطلوبة</li>
          <li>تظهر مقاومة التآكل</li>
          <li>يتم تصنيعها باستخدام درجات معتمدة من الفولاذ المقاوم للصدأ</li>
          <li>تتوافق مع ظروف الاختبار الهندية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد الحصول على الشهادة، يجب أن تحمل المنتجات علامة ISI مع رقم الترخيص (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معيار BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار المعمول به هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – الأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ للخدمة العامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يحدد هذا المعيار:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التركيب الكيميائي</li>
          <li>متطلبات الخصائص الميكانيكية</li>
          <li>تفاوتات التصنيع</li>
          <li>مواصفات الأبعاد</li>
          <li>إرشادات السطح والإنهاء</li>
          <li>الاختبار الهيدروستاتيكي والاختبار غير المدمر</li>
          <li>معايير أداء السلامة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم هذه الأنابيب لتطبيقات الخدمة العامة، مما يعني أنها يجب أن تلبي مجموعة واسعة من البيئات التشغيلية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لمنتجات IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم الأنابيب الملحومة من الفولاذ المقاوم للصدأ على نطاق واسع في:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>خطوط أنابيب المياه</li>
          <li>نقل المواد الكيميائية</li>
          <li>مصانع الأغذية والأدوية</li>
          <li>الهندسة الهيكلية</li>
          <li>أنظمة العادم والتهوية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          إذا لم يتم تصنيعها بشكل صحيح، يمكن أن تؤدي هذه الأنابيب إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>فشل التسرب</li>
          <li>الانفجار تحت الضغط</li>
          <li>التآكل والتلوث</li>
          <li>عدم الاستقرار الهيكلي</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          لمنع دخول المواد دون المستوى إلى سلسلة التوريد، يتطلب BIS من كل مصنع — محلي أو أجنبي — الحصول على ترخيص BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS لـ IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن إجراءات الشهادة اختبارات معملية صارمة وفحص.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد فئة المنتج والدرجة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          قيّم الدرجة (الدرجات) المحددة من الفولاذ المقاوم للصدأ التي يتم تصنيعها وتأكد من أنها تخضع لـ IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – تقديم الطلب عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين التقديم من خلال بوابة BIS الإلكترونية Manak، بتقديم:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>القدرة الإنتاجية</li>
          <li>مخطط تدفق العملية</li>
          <li>مصادر المواد الخام</li>
          <li>توثيق ضمان الجودة</li>
          <li>تفاصيل العلامة التجارية والعلامة التجارية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – دفع رسوم BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل المدفوعات:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم الاختبار</li>
          <li>رسوم فحص المصنع</li>
          <li>رسوم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – فحص المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يفحص مسؤولو BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تسلسل الإنتاج</li>
          <li>تخزين المواد الخام</li>
          <li>آلات اللحام</li>
          <li>عمليات التلدين/المعالجة الحرارية</li>
          <li>توثيق الجودة</li>
          <li>بنية الاختبار</li>
          <li>سجلات المعايرة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتحققون من الامتثال لمخطط الاختبار والفحص (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          إذا استوفت جميع المعايير متطلبات BIS، يحصل المصنع على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>تفويض علامة ISI</li>
          <li>رقم ترخيص CML فريد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – التزامات ما بعد الترخيص
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على حاملي الترخيص:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على اختبار الجودة الداخلي المستمر</li>
          <li>استخدام علامة ISI بشكل صحيح</li>
          <li>التعاون أثناء عمليات التفتيش الدورية لمراقبة BIS</li>
          <li>تجديد الترخيص في الوقت المحدد</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق ترخيص BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يغطي هذا المعيار المتطلبات للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ للخدمات العامة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> لا يحدد هذا المعيار متطلبات الأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ المخصصة لأغراض مميزة، والتي تغطيها معايير هندية منفصلة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الوثائق المطلوبة لشهادة BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. وثائق التصنيع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ترخيص/تسجيل المصنع</li>
          <li>مخطط التخطيط</li>
          <li>مخطط تدفق العملية</li>
          <li>قائمة الآلات (اللحام، التشكيل، التلدين، الاختبار)</li>
          <li>قائمة معدات الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. الوثائق التقنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مواصفات الدرجة</li>
          <li>بيانات الاختبار الكيميائي والميكانيكي</li>
          <li>مواصفات إجراءات اللحام</li>
          <li>سجلات المعالجة الحرارية</li>
          <li>مخططات تفاوت الأبعاد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. الوثائق القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات الهوية</li>
          <li>إثبات العنوان</li>
          <li>وثائق ملكية العلامة التجارية</li>
          <li>خطاب الموقع المصرح</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. وثائق طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج الطلب المملوء</li>
          <li>التعهدات والإعلانات</li>
          <li>وثائق طلب الاختبار</li>
          <li>تصميم الملصق لعلامة ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار بموجب IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الاختبار هو جوهر موافقة BIS ويضمن أن كل دفعة تلبي معايير الجودة الصارمة.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تحليل المغرفة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تحليل المنتج
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  متطلبات الشد
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأنابيب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأنابيب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الحافة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار التسطح العكسي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار التسطح
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  حجم الحبيبات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار إحكام التسرب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحرفية، التشطيب، المظهر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأبعاد والتفاوتات
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات التي تواجهها أثناء شهادة BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>فشل اختبارات التركيب الكيميائي</strong>
            <br />
            العناصر السبائكية غير القياسية أو الشوائب تسبب الرفض.
          </li>
          <li>
            <strong>عيوب اللحام أثناء الاختبار غير المدمر</strong>
            <br />
            عمليات اللحام الرديئة أو المعالجة الحرارية غير المتسقة يمكن أن تخلق عيوباً.
          </li>
          <li>
            <strong>عدم الامتثال للأبعاد</strong>
            <br />
            اختلافات سمك الجدار تؤدي عادة إلى الفشل.
          </li>
          <li>
            <strong>التوثيق غير الكامل</strong>
            <br />
            السجلات المفقودة أو غير الواضحة تؤخر موافقة الترخيص.
          </li>
          <li>
            <strong>مشاكل المعايرة</strong>
            <br />
            المعدات غير المعايرة تؤدي إلى نتائج اختبار غير موثوقة.
          </li>
          <li>
            <strong>تقديم العلامة التجارية/الملصق غير الصحيح</strong>
            <br />
            يجب أن يطابق تصميم علامة ISI مواصفات BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للأنابيب والأنابيب من الفولاذ المقاوم للصدأ
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الموافقة القانونية للتصنيع/البيع في الهند</li>
          <li>ضمان الجودة والسلامة</li>
          <li>تحسين السمعة ومصداقية السوق</li>
          <li>القبول من قبل مناقصات الحكومة والقطاع العام</li>
          <li>زيادة إمكانات التصدير</li>
          <li>تقليل مخاطر فشل المنتج</li>
          <li>الحماية من المنافسين المزيفين أو دون المستوى</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يواجه المصنعون/المستوردون الذين يبيعون منتجات غير معتمدة:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج</li>
          <li>عقوبات شديدة بموجب قانون BIS</li>
          <li>إغلاق عمليات التصنيع</li>
          <li>قيود الاستيراد</li>
          <li>الملاحقة القانونية</li>
          <li>إلغاء التراخيص الموجودة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الامتثال إلزامي ويتم فرضه بصرامة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يجب أن يحصل على ترخيص BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المصنعون في الخارج الذين يصدرون إلى الهند</li>
          <li>مستوردو الأنابيب من الفولاذ المقاوم للصدأ</li>
          <li>موردو OEM</li>
          <li>موزعو الصناعة</li>
          <li>العلامات التجارية الخاصة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على كل موقع تصنيع الحصول على ترخيصه الخاص.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن شهادة BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ بموجب IS 17876:2022 الموثوقية والمتانة والأداء لمنتجات الأنابيب الحرجة المستخدمة عبر صناعات متعددة. مع فرض الشهادة الإلزامية الآن، يجب على المصنعين والمستوردين محاذاة عملياتهم واختباراتهم وتوثيقهم مع متطلبات BIS لتوريد منتجاتهم بشكل قانوني في السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع التوجيه الخبير، تصبح عملية ترخيص BIS أسرع وأكثر سلاسة ومتوافقة بالكامل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة — شهادة BIS للأنابيب والأنابيب الملحومة من الفولاذ المقاوم للصدأ
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. هل شهادة BIS إلزامية للأنابيب الملحومة من الفولاذ المقاوم للصدأ؟
              </strong>
              <br />
              نعم. بموجب IS 17876:2022، شهادة BIS إلزامية لجميع المصنعين والمستوردين.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هي الاختبارات المطلوبة؟</strong>
              <br />
              التحليل الكيميائي، اختبار الشد، اختبار الصلابة، الاختبار الهيدروستاتيكي، الاختبار غير المدمر، التسطح، وفحوصات الأبعاد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. كم تستغرق شهادة BIS؟</strong>
              <br />
              عادة 35–50 يوماً للمصنع الهندي وحوالي 120 يوماً للمصنع الأجنبي، اعتماداً على جاهزية الاختبار والفحص.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. هل يمكن للمصنعين الأجانب الحصول على شهادة BIS؟
              </strong>
              <br />
              نعم، من خلال FMCS (مخطط شهادة المصنعين الأجانب).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ما هي الوثائق المطلوبة؟</strong>
              <br />
              ترخيص المصنع، قائمة معدات الاختبار، BOM، تدفق العملية، الرسومات، خطة QC، وثائق العلامة التجارية، إلخ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ماذا لو فشل العينة في الاختبار؟</strong>
              <br />
              يجب على المصنع تصحيح المشكلة، إعادة العمل على المنتج، وإعادة تقديمه للاختبار.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. هل وضع علامة ISI إلزامي بعد الموافقة؟</strong>
              <br />
              نعم. يجب أن تعرض المنتجات علامة ISI + رقم CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل جميع الدرجات مغطاة بموجب IS 17876؟</strong>
              <br />
              فقط الدرجات المحددة المحددة في المعيار مؤهلة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. كم مرة يجري BIS المراقبة؟</strong>
              <br />
              يتم إجراء عمليات التدقيق الدورية واختبار العينات العشوائية أثناء صلاحية الترخيص.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للأنابيب والأنابيب الملحومة - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={3} />
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
                alt="شعار BIS"
                title="شعار BIS"
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
                alt="شعار شهادة EPR"
                title="شعار شهادة EPR"
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
                alt="شعار LMPC"
                title="شعار LMPC"
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
                alt="شعار علامة ISI"
                title="شعار علامة ISI"
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
