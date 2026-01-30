import FaqAuthorArabic from "@/components/common/FaqAuthor/FaqAuthorArabic";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationCombinationSideCuttingPliersArabic = () => {
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




export default BISCertificationCombinationSideCuttingPliersArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للكماشة الجانبية المجمعة للقطع | IS 3650:1981 رخصة BIS";
  const ogTitle =
    "شهادة BIS للكماشة الجانبية المجمعة للقطع – دليل IS 3650:1981";
  const twitterTitle =
    "رخصة BIS للكماشة الجانبية المجمعة للقطع | IS 3650:1981";
  const metaDescription =
    "احصل على شهادة BIS للكماشة الجانبية المجمعة للقطع وفقاً لـ IS 3650:1981. الإجراءات، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للكماشة الجانبية المجمعة للقطع وفقاً لـ IS 3650:1981. تعرف على الإجراءات، التكلفة، المستندات، الاختبارات ومزايا رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب شهادة BIS للكماشة الجانبية المجمعة للقطع وفقاً لـ IS 3650:1981. تعلم عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للكماشة الجانبية المجمعة للقطع، رخصة BIS للكماشة الجانبية المجمعة للقطع، IS 3650:1981، شهادة BIS للكماشة الجانبية المجمعة للقطع";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/qalb-janubiya-mujammaa-lilqata-is-3650";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal، رئيس العمليات في Sun Certification India";

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
                    شهادة BIS للكماشة الجانبية المجمعة للقطع – IS 3650:1981
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
          شهادة BIS للكماشة الجانبية المجمعة للقطع – الدليل الكامل لـ IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="رخصة BIS للكماشة الجانبية المجمعة للقطع"
            alt="شهادة BIS للكماشة الجانبية المجمعة للقطع - IS 3650:1981 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          الكماشة الجانبية المجمعة للقطع من أكثر أدوات اليد استخداماً في الأعمال الكهربائية
          والصيانة الميكانيكية والبناء ووحدات التصنيع والورش وصيانة السيارات
          وأنشطة إصلاح المنزل. مصممة لأداء وظائف متعددة مثل الإمساك والثني واللف
          وقطع الأسلاك. ونظراً لاستخدامها المتكرر لقطع الأسلاك المعدنية والموصلات
          الكهربائية والمكونات الصغيرة، فإن الكماشة رديئة الجودة قد تسبب كسر الأداة
          ومخاطر الصدمة الكهربائية وإصابات اليد وحوادث عمل خطيرة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان السلامة والمتانة والجودة الموحدة، تلزم حكومة الهند بالامتثال للمعايير
          الهندية لأدوات اليد. الحصول على شهادة BIS للكماشة الجانبية المجمعة للقطع
          وفقاً لـ IS 3650:1981 متطلب قانوني وجودة حاسم للمصنعين والمستوردين الذين
          يبيعون هذه الأدوات في الهند. تؤكد شهادة BIS السارية للكماشة الجانبية المجمعة
          للقطع أن المنتج قد خضع للاختبار من حيث القوة الميكانيكية وكفاءة القطع
          وصلابة المادة وأداء السلامة العام.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم إنشاء صفحة المنتج التفصيلية هذه للمصنعين والمصنعين الأجانب والمستوردين
          والتجار والموزعين وعلامات الأدوات والبائعين عبر الإنترنت ومهنيي الامتثال
          الراغبين في فهم كامل لرخصة BIS للكماشة الجانبية المجمعة للقطع، بما في ذلك
          عملية شهادة BIS في الهند ومتطلبات الاختبار والوثائق والتكلفة والجداول
          الزمنية والعقوبات والمزايا.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم مطابقة المنتجات ينظمه مكتب المعايير الهندية، وهو
          السلطة الوطنية في الهند للمعايرة والشهادة وضمان الجودة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          معنى شهادة BIS يشير إلى الموافقة الرسمية الصادرة عن BIS والتي تؤكد أن
          المنتج يتوافق مع المعيار الهندي المعمول به (IS) ويُصنع ضمن نظام جودة
          خاضع للرقابة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          الأهداف الرئيسية لشهادة BIS هي:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية المستهلكين من المنتجات غير الآمنة</li>
          <li>ضمان جودة منتج متسقة</li>
          <li>دعم إنفاذ اللوائح</li>
          <li>تشجيع التوحيد القياسي في الصناعة الهندية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح علامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          علامة شهادة BIS، المعروفة باسم علامة ISI، هي رمز الثقة والامتثال. بالنسبة
          للكماشة الجانبية المجمعة للقطع، تشير علامة ISI إلى أن:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الأداة تلبي متطلبات IS 3650:1981</li>
          <li>تم التحقق من الأداء الميكانيكي والقطع</li>
          <li>المنتج معتمد قانونياً للبيع في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار BIS المعمول به للكماشة الجانبية المجمعة للقطع
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – المواصفة للكماشة المجمعة
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المعمول به لهذا المنتج هو IS 3650:1981، الذي يحدد المتطلبات
          للكماشة المجمعة ذات حواف القطع الجانبية المستخدمة في تطبيقات الإمساك والقطع.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي هذا المعيار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الكماشة المجمعة ذات حواف القطع الجانبية</li>
          <li>الأبعاد والشكل ومتطلبات التشطيب</li>
          <li>جودة المادة والمعالجة الحرارية</li>
          <li>القوة الميكانيكية وأداء القطع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          السلامة والأداء ومقصد الاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          صُمم IS 3650:1981 لضمان أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الكماشة لديها قدرة قطع كافية</li>
          <li>الفكوك وحواف القطع لا تتشقق أو تتشوه</li>
          <li>المقابض توفر إمساكاً آمناً وعزلاً حيثما ينطبق</li>
          <li>الأداة تعمل بموثوقية في ظروف العمل العادية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصنعو الكماشة الجانبية المجمعة للقطع في الهند</li>
          <li>المستوردون والموزعون</li>
          <li>المصنعون الأجانب الذين يوردون للسوق الهندية</li>
          <li>العلامات التي تبيع الكماشة تحت علامات خاصة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية للكماشة الجانبية المجمعة للقطع
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مخاطر سلامة المستهلك
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الكماشة دون المعيار قد تؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>كسر مفاجئ أثناء القطع</li>
          <li>انزلاق وإصابات اليد</li>
          <li>مخاطر صدمة كهربائية في التطبيقات الكهربائية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال الحكومي والتنظيمي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          وفقاً لمعايير BIS وإشعارات BIS، يجب أن تمتثل أدوات اليد مثل الكماشة
          المجمعة الخاضعة لـ IS 3650:1981 لمتطلبات شهادة BIS قبل بيعها في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بيع أو استيراد كماشة غير معتمدة قد يؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج من قبل السلطات</li>
          <li>غرامات مالية</li>
          <li>إلغاء تراخيص التجارة</li>
          <li>محاكمة قانونية بموجب قانون BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مزايا السوق والعلامة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          رخصة BIS للكماشة الجانبية المجمعة للقطع تساعد العلامات على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>بناء الثقة مع المشترين والمقاولين</li>
          <li>التأهل لمناقصات الحكومة والقطاع العام</li>
          <li>المنافسة مع علامات الأدوات الراسخة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة للكماشة الجانبية المجمعة للقطع
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          القابلية للتطبيق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الخطوة الأولى هي التأكد من أن المنتج:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يصنف ضمن الكماشة الجانبية المجمعة للقطع</li>
          <li>يُغطى بـ IS 3650:1981</li>
          <li>يتطابق مع نطاق المعيار من حيث الحجم والاستخدام</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية التقديم الإلكتروني لـ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التسجيل على بوابة BIS</li>
          <li>اختيار IS 3650:1981 ضمن معايير المنتج</li>
          <li>ملء نموذج طلب BIS</li>
          <li>تحميل جميع المستندات المطلوبة</li>
          <li>دفع الرسوم المعمول بها</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يُشار إلى هذه المرحلة عادةً باسم التقديم الإلكتروني لـ BIS أو تسجيل شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الرسوم وهيكل التكلفة لرخصة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن تكلفة شهادة BIS عادةً:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب والمعالجة</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص والوسم</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تعتمد التكلفة الإجمالية لشهادة BIS على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عدد المتغيرات</li>
          <li>تعقيد الاختبار</li>
          <li>موقع المصنع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينة المنتج (وفقاً لـ IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تُختبر العينات في المختبرات المعترف بها من BIS من حيث:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>صلابة حافة القطع</li>
          <li>أداء القطع</li>
          <li>القوة الميكانيكية</li>
          <li>دقة الأبعاد</li>
          <li>تشطيب السطح والصنعة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش ومراجعة المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجري مسؤول BIS مراجعة للمصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع</li>
          <li>المعالجة الحرارية وعمليات التشطيب</li>
          <li>نظام مراقبة الجودة</li>
          <li>مرافق الاختبار والتفتيش</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح رخصة BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بعد نجاح الاختبار والتفتيش:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تصدر BIS رخصة مكتب المعايير الهندية</li>
          <li>
            يُسمح للمصنع باستخدام علامة ISI على الكماشة المعتمدة
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تشمل متطلبات ما بعد الموافقة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفتيشات المراقبة</li>
          <li>اختبار عينات السوق</li>
          <li>تجديد الترخيص في الوقت المناسب</li>
          <li>الامتثال المستمر لـ IS 3650:1981</li>
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
          <li>تسجيل GST</li>
          <li>تفويض العلامة التجارية (إن وجد)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات ومواصفات المنتج</li>
          <li>تفاصيل المواد الخام</li>
          <li>خطة المعالجة الحرارية ومراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج طلب BIS</li>
          <li>تفاصيل طلب الاختبار</li>
          <li>الإقرارات والتعهدات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعرف هذه مجتمعة باسم مستندات شهادة BIS أو مستندات شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 3650:1981
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
                  المتطلبات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التصنيع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الصنعة والتشطيب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحفظ والتعبئة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأبعاد
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الصلابة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  العزل (ما عدا اختبار العزل)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار العزل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار القطع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار إمساك الأنبوب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الصدمة
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الالتواء
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار حمل المقبض
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الانحناء
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
          المشاكل الشائعة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الفشل في اختبارات الصلابة أو القطع</li>
          <li>معالجة حرارية غير مناسبة</li>
          <li>تشطيب سطح رديء</li>
          <li>توثيق غير مكتمل</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أفضل الممارسات
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إجراء اختبار مسبق داخلي</li>
          <li>اتباع إجراءات المعالجة الحرارية الصحيحة</li>
          <li>الاحتفاظ بسجلات جودة حسب الدفعة</li>
          <li>الحصول على دعم استشاري BIS متخصص</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          مزايا شهادة BIS للمصنعين والمستوردين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المزايا القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الامتثال الكامل للوائح الهندية</li>
          <li>الحماية من الغرامات والمصادرات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المزايا التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القبول من الموزعين والمقاولين</li>
          <li>الأهلية للطلبات السائبة والمؤسسية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مزايا العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>علامة ISI تعزز مصداقية العلامة</li>
          <li>التميز عن الموردين غير المنظمين</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسيع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الدخول إلى سلاسل تجارة التجزئة المنظمة للأدوات</li>
          <li>زيادة القبول في الأعمال الموجهة للتصدير</li>
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
          <li>غرامات مالية ثقيلة</li>
          <li>مصادرة المنتج</li>
          <li>تعطيل الأعمال</li>
          <li>إجراءات قانونية بموجب قانون BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج شهادة BIS للكماشة الجانبية المجمعة للقطع؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب (مع ممثل هندي معتمد)</li>
          <li>التجار الذين يبيعون تحت علامتهم</li>
          <li>بائعو التجارة الإلكترونية الذين يعرضون الكماشة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS للكماشة الجانبية المجمعة للقطع وفقاً لـ IS 3650:1981
          متطلب قانوني وجودة حاسم لبيع هذه الأدوات في الهند. تضمن شهادة BIS للكماشة
          الجانبية المجمعة للقطع سلامة المنتج وأداءً متسقاً والامتثال التنظيمي، بينما
          تعزز رخصة BIS للكماشة الجانبية المجمعة للقطع مصداقية العلامة وقبول السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          للمصنعين والمستوردين والبائعين، الامتثال في الوقت المناسب لا يتجنب العقوبات
          فحسب بل يفتح أيضاً أبواب أسواق أكبر ونمو أعمال طويل الأجل. مع التوجيه
          الخبير، تصبح عملية شهادة BIS أكثر سلاسة وسرعة ومتوافقة بالكامل مع المعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للكماشة الجانبية المجمعة للقطع
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س1. هل شهادة BIS إلزامية للكماشة الجانبية المجمعة للقطع؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، الامتثال لـ IS 3650:1981 إلزامي في الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س2. ما هو الاسم الكامل لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate (شهادة مكتب المعايير الهندية).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س3. كم تستغرق عملية شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادةً 30–60 يوماً عمل.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س4. ما هي تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تعتمد التكلفة على نطاق الاختبار ومتغيرات المنتج.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س5. هل يمكن للمستوردين التقدم لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، مع تفويض صحيح من المصنع.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س6. هل علامة ISI إلزامية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، وضع علامة ISI إلزامي بعد الشهادة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س7. هل يمكن للمصنعين الأجانب الحصول على شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال ممثل هندي معتمد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س8. ما الاختبارات المطلوبة وفقاً لـ IS 3650:1981؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              اختبارات الصلابة وأداء القطع والقوة والأبعاد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س9. هل تفتيش المصنع إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تجري BIS مراجعة للمصنع.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س10. هل يمكن تغطية أحجام متعددة تحت ترخيص واحد؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، رهناً بالاختبار والموافقة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س11. ماذا يحدث إذا بيعت كماشة غير معتمدة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              قد تحدث غرامات ومصادرة وإجراءات قانونية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س12. هل التقديم الإلكتروني لـ BIS إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تُقدّم الطلبات إلكترونياً فقط.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س13. هل مطلوب تجديد تراخيص BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يجب تجديد التراخيص دورياً.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س14. هل يمكن للمستشارين تقليل تأخيرات الموافقة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، المستشارون المحترفون يساعدون على تجنب الأخطاء والرفض.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="شهادة BIS للكماشة الجانبية المجمعة للقطع - IS 3650:1981 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />
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
              BIS Mark (ISI License) for Foreign Manufacture
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
