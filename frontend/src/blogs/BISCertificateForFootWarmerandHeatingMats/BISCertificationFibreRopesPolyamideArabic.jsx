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

const BISCertificationFibreRopesPolyamideArabic = () => {
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

export default BISCertificationFibreRopesPolyamideArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لحبال الألياف البولياميد | IS 4572:2022 ترخيص BIS";
  const ogTitle =
    "شهادة BIS لحبال الألياف البولياميد – دليل IS 4572:2022";
  const twitterTitle = "ترخيص BIS لحبال الألياف البولياميد | IS 4572:2022";
  const metaDescription =
    "احصل على شهادة BIS لحبال الألياف البولياميد بموجب IS 4572:2022. الإجراءات، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لحبال الألياف البولياميد وفقاً لـ IS 4572:2022. اعرف الإجراءات، التكلفة، المستندات، الاختبارات وفوائد ترخيص BIS.";
  const twitterDescription =
    "التقدم بطلب للحصول على شهادة BIS لحبال الألياف البولياميد بموجب IS 4572:2022. تعلم إجراءات BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لحبال الألياف البولياميد، ترخيص BIS لحبال الألياف البولياميد، IS 4572:2022، شهادة BIS لحبال الألياف البولياميد";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/fibre-ropes-polyamide-is-4572-arabic";
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
                    شهادة BIS لحبال الألياف – البولياميد – IS 4572:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لحبال الألياف – البولياميد: دليل شامل لـ IS 4572:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyamide.png"
            title="ترخيص BIS لحبال الألياف - البولياميد"
            alt="شهادة BIS لحبال الألياف - البولياميد - IS 4572:2022 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          زاد الطلب على حبال الألياف المصنوعة من البولياميد (النايلون) بسرعة في
          جميع أنحاء الهند نظراً لمقاومتها العالية للشد والاحتكاك والمرونة
          والمتانة. تُستخدم هذه الحبال على نطاق واسع في العمليات البحرية والنقل
          البحري والصيد والبناء وتطبيقات الرفع والمعالجة الصناعية والموانئ
          والمنصات البحرية والأنشطة الدفاعية. نظراً لأن حبال الألياف تُستخدم
          غالباً في بيئات تحمل الأحمال والحساسة للسلامة، فإن أي عطل قد يؤدي إلى
          حوادث خطيرة وخسائر مالية ومسؤوليات قانونية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان جودة متسقة وموثوقية الأداء وسلامة المستخدم، تلزم حكومة الهند
          بشهادة BIS لحبال الألياف – البولياميد وفقاً لـ IS 4572:2022. يجب
          على المصنعين والمستوردين الحصول على شهادة BIS سارية لحبال الألياف –
          البولياميد قبل بيع أو توزيع أو استيراد هذه المنتجات في السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          هذه الصفحة دليل امتثال كامل للمصنعين والمستوردين والمصدرين والتجار
          وأصحاب العلامات التجارية الذين يريدون فهم عملية شهادة BIS لحبال
          الألياف – البولياميد والمعايير المعمول بها ومتطلبات الاختبار والتكاليف
          والوثائق والالتزامات القانونية. إذا كنت تخطط للحصول على ترخيص BIS
          لحبال الألياف – البولياميد، فسيساعدك هذا الدليل على اتخاذ قرارات
          مستنيرة وتجنب مخاطر الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم المطابقة الذي تديره مكتب معايير الهند (BIS)،
          هيئة المعايير الوطنية في الهند. تعمل BIS بموجب قانون BIS لعام 2016،
          بهدف ضمان أن المنتجات المباعة في الهند تلبي معايير الهند (IS) المحددة
          للسلامة والجودة والأداء.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معنى شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي موافقة رسمية تؤكد أن المنتج يتوافق مع المعيار الهندي
          المعمول به ومناسب للاستخدام في السوق الهندية. بمجرد الحصول على
          الشهادة، يُسمح للمصنع باستخدام علامة شهادة BIS، المعروفة باسم علامة
          ISI، على المنتج وتغليفه.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          شرح علامة ISI
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشير علامة ISI إلى أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تم اختبار المنتج في مختبر معترف به من BIS</li>
          <li>تم تقييم منشأة التصنيع من قبل BIS</li>
          <li>الامتثال والمراقبة المستمران قائمان</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا يوجد BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يوجد BIS من أجل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية سلامة المستهلك</li>
          <li>منع تداول المنتجات دون المستوى</li>
          <li>تعزيز معايير الجودة الموحدة</li>
          <li>دعم التجارة العادلة والامتثال التنظيمي</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة لحبال الألياف المستخدمة في العمليات عالية المخاطر، تلعب شهادة
          BIS دوراً حاسماً في منع الحوادث الناجمة عن مواد رديئة أو تصنيع غير سليم.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار القياسي BIS المعمول به لحبال الألياف – البولياميد
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المعمول به لحبال الألياف البولياميد هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 4572:2022</strong> – حبال الألياف (البولياميد)
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يحدد هذا المعيار البناء والتركيب المادي والتفاوتات الأبعاد والخصائص
          الميكانيكية ومعايير الأداء وطرق الاختبار لحبال الألياف البولياميد.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 4572:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي IS 4572:2022:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حبال مصنوعة من ألياف البولياميد</li>
          <li>تركيبات حبال مختلفة (ملفوفة، مضفورة، منسوجة)</li>
          <li>حبال مخصصة للتطبيقات البحرية والصناعية والتجارية والعامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          غرض المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          صُمم المعيار لضمان:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قوة كسر كافية</li>
          <li>قطر وبناء موحدان</li>
          <li>مقاومة التآكل والاحتكاك والإجهاد البيئي</li>
          <li>أداء متسق خلال العمر التشغيلي</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الامتثال لـ IS 4572:2022 إلزامي لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصنعي حبال الألياف البولياميد الهنود</li>
          <li>المستوردين الذين يدخلون مثل هذه الحبال إلى الهند</li>
          <li>المصنعين الأجانب الذين يبيعون في الهند من خلال كيانات هندية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لحبال الألياف – البولياميد
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. مخاطر السلامة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          غالباً ما تُستخدم حبال الألياف البولياميد في:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رفع الأحمال</li>
          <li>ربط السفن</li>
          <li>تأمين المعدات</li>
          <li>المناولة الصناعية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          فشل الحبل بسبب رداءة الجودة قد يؤدي إلى إصابات خطيرة ووفيات وأضرار
          بالممتلكات.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. الامتثال الحكومي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بموجب إشعارات BIS ولوائح مراقبة الجودة، لا يمكن بيع المنتجات الخاضعة
          للمعايير المُعلن عنها دون شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بيع حبال الألياف غير المعتمدة قد يؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة البضائع</li>
          <li>غرامات مالية</li>
          <li>محاكمة بموجب قانون BIS</li>
          <li>إلغاء تصاريح الاستيراد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ترخيص BIS لحبال الألياف – البولياميد يعزز:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ثقة المشتري</li>
          <li>القبول في مناقصات الحكومة والقطاع العام</li>
          <li>مصداقية العلامة التجارية في الأسواق المحلية والتصدير</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لحبال الألياف – البولياميد
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          القابلية للتطبيق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الخطوة الأولى هي التأكد من أن منتجك يندرج تحت IS 4572:2022 وتحديد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مادة الحبل (البولياميد)</li>
          <li>نوع البناء</li>
          <li>التطبيق المقصود</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن هذه الخطوة التخطيط الصحيح للاختبار وتجنب رفض الطلب.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية تقديم طلب BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين تقديم طلب BIS عبر الإنترنت من خلال بوابة BIS. يتضمن
          الطلب:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المنتج</li>
          <li>معلومات المصنع</li>
          <li>عملية التصنيع</li>
          <li>ترتيبات مراقبة الجودة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          الدقة في هذه المرحلة حاسمة للمعالجة السلسة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الرسوم وهيكل التكلفة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تعتمد تكلفة شهادة BIS على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص السنوية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تختلف تكلفة شهادة BIS حسب تعقيد المنتج ومتطلبات الاختبار. يساعد
          التخطيط السليم في التحكم في إجمالي تكلفة شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينات المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم سحب عينات المنتج واختبارها في المختبرات المعترف بها من BIS وفقاً
          لـ IS 4572:2022. فقط المنتجات الممتثلة تنتقل إلى المرحلة التالية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش ومراجعة المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجري مسؤولو BIS مراجعة للمصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القدرة التصنيعية</li>
          <li>مرافق الاختبار الداخلية</li>
          <li>أنظمة ضمان الجودة</li>
          <li>التحكم في المواد الخام</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح ترخيص BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد تأكيد الامتثال، تمنح BIS ترخيص مكتب معايير الهند، مما يسمح
          باستخدام علامة ISI على حبال الألياف.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الشهادة، يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على جودة متسقة</li>
          <li>السماح بمراجعات المراقبة الدورية</li>
          <li>إعادة اختبار المنتجات عند الحاجة</li>
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
          <li>مخطط تدفق التصنيع</li>
          <li>تفاصيل المصنع والآلات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات تأسيس الشركة</li>
          <li>تسجيل GST</li>
          <li>خطاب التفويض</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مواصفات المنتج</li>
          <li>الرسومات وتفاصيل التصميم</li>
          <li>مواصفات المواد الخام</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج طلب BIS</li>
          <li>خطاب طلب الاختبار</li>
          <li>تفاصيل العلامات والوسم</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تشكل هذه معاً مجموعة مستندات شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 4572:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
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
                  البناء والتصنيع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الطبقة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  العلامات والوسم
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التعبئة والفوترة والطول المُسلّم
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.0
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الكثافة الخطية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.0
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  قوة الكسر الدنيا
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء جميع الاختبارات في المختبرات المعترف بها من BIS فقط.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تصنيف المنتج غير الصحيح
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: إجراء تقييم مسبق قبل التقديم.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فشل الاختبارات
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: محاذاة المواد الخام وضوابط العملية مع IS 4572:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أخطاء المستندات
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: إعداد مستندات BIS بعناية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عدم الامتثال في المراجعة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: تنفيذ فحوصات وسجلات جودة مناسبة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للمصنعين والمستوردين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الامتثال للقانون الهندي</li>
          <li>تخليص جمركي سلس</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الأهلية للمناقصات</li>
          <li>وصول أوسع للسوق</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>استخدام علامة BIS</li>
          <li>تعزيز ثقة العملاء</li>
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
          عقوبات عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          قد يؤدي عدم الامتثال إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>غرامات ثقيلة</li>
          <li>استدعاء المنتجات</li>
          <li>حظر الاستيراد</li>
          <li>محاكمة قانونية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج شهادة BIS لحبال الألياف – البولياميد؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب</li>
          <li>التجار والموزعون</li>
          <li>بائعو التجارة الإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على أي جهة تطرح المنتج في السوق الهندية ضمان الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم خدمات شهادة BIS من طرف إلى طرف، بما في ذلك:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تقييم القابلية للتطبيق</li>
          <li>إعداد المستندات</li>
          <li>تنسيق المختبر</li>
          <li>دعم المراجعة</li>
          <li>الامتثال بعد الشهادة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن خبرتنا موافقات أسرع وتقليل مخاطر الامتثال.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لحبال الألياف – البولياميد وفقاً لـ IS 4572:2022
          ليس مجرد متطلب قانوني بل خطوة حاسمة لضمان السلامة والموثوقية
          ومصداقية السوق. سواء كنت مصنعاً أو مستورداً، فإن الحصول على شهادة BIS
          / ترخيص BIS لحبال الألياف – البولياميد يحمي عملك من المخاطر التنظيمية
          مع تعزيز ثقة العملاء.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع التوجيه الصحيح والمستندات المناسبة والنهج القائم على الامتثال،
          يمكن أن تكون عملية شهادة BIS سلسة وقابلة للتنبؤ. تضمن الشراكة مع
          مستشاري BIS ذوي الخبرة موافقات أسرع وتكاليف أقل ونجاح امتثال طويل
          الأمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إذا كنت تخطط للتقدم بطلب شهادة BIS في الهند لحبال الألياف البولياميد،
          فالآن هو الوقت المناسب للتحرك والبقاء متوافقاً.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لحبال الألياف – البولياميد
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. ما هو الشكل الكامل لـ BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS تعني مكتب معايير الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. هل شهادة BIS إلزامية لحبال الألياف البولياميد؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، وفقاً لـ IS 4572:2022، شهادة BIS إلزامية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. ما هو الشكل الكامل لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              شهادة مكتب معايير الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. هل يمكنني التقدم بطلب شهادة BIS عبر الإنترنت؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التقديم على BIS عبر الإنترنت من خلال البوابة الرسمية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. ما هي عملية شهادة BIS التي تتبعها الهند؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              الطلب، الاختبار، مراجعة المصنع، ومنح الترخيص.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. كم تستغرق شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادةً 1–2 شهر، حسب جاهزية الامتثال.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. ما هي تكلفة ترخيص BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تختلف التكاليف حسب متطلبات الاختبار والتفتيش.
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
              9. هل تسجيل BIS يختلف عن ترخيص BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التسجيل ينطبق بشكل رئيسي على الإلكترونيات؛ حبال الألياف تتطلب ترخيصاً.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. ماذا يحدث إذا فشلت المنتجات في الاختبار؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              مطلوب إجراءات تصحيحية وإعادة الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. هل علامة BIS إلزامية على العبوة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يجب اتباع متطلبات الوسم بدقة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. كم مدة صلاحية ترخيص BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              يُمنح عادةً لمدة 1–2 سنة، قابلة للتجديد بعد ذلك.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. هل يمكن توسيع النطاق لاحقاً؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال عملية توسيع النطاق.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. هل مراجعات المراقبة إلزامية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تجري BIS مراقبة دورية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. هل يمكن بيع المنتجات غير المعتمدة عبر الإنترنت؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا، منصات التجارة الإلكترونية تتطلب الامتثال أيضاً.
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للمصنعين الأجانب
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
