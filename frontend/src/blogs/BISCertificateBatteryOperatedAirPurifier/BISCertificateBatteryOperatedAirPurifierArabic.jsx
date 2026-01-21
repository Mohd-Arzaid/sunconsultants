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

const BISCertificateBatteryOperatedAirPurifierArabic = () => {
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

export default BISCertificateBatteryOperatedAirPurifierArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لمنظف الهواء بالبطارية | ترخيص BIS IS 302 (الجزء 1):2024";
  const ogTitle =
    "شهادة BIS لمنظف الهواء بالبطارية – دليل IS 302 (الجزء 1):2024";
  const twitterTitle =
    "ترخيص BIS لمنظف الهواء بالبطارية | IS 302 (الجزء 1):2024";
  const metaDescription =
    "احصل على شهادة BIS لمنظف الهواء بالبطارية بموجب IS 302 (الجزء 1):2024. العملية والمستندات والاختبار والتكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لمنظف الهواء بالبطارية وفقًا لـ IS 302 (الجزء 1):2024. تعرف على العملية والتكلفة والمستندات والاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS لمنظف الهواء بالبطارية بموجب IS 302 (الجزء 1):2024. تعلم عملية BIS والمستندات والاختبار والرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لمنظف الهواء بالبطارية، ترخيص BIS لمنظف الهواء بالبطارية، IS 302 (الجزء 1):2024، شهادة BIS لمنظف الهواء بالبطارية";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/munazzif-hawa-bi-batariya-is-302";
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
                    شهادة BIS لمنظف الهواء بالبطارية – IS 302 (الجزء 1):2024
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
          شهادة BIS لمنظف الهواء بالبطارية – دليل شامل لـ IS 302 (الجزء 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="ترخيص BIS لمنظف الهواء بالبطارية"
            alt="شهادة BIS لمنظف الهواء بالبطارية - IS 302 (الجزء 1):2024 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          نما الطلب على أجهزة تنقية الهواء التي تعمل بالبطارية في الهند بسرعة بسبب
          ارتفاع مستويات تلوث الهواء، وزيادة الوعي الصحي، والحاجة إلى حلول محمولة
          وموفرة للطاقة لتنقية الهواء. على عكس أجهزة تنقية الهواء التقليدية الموصولة
          بالكهرباء، تُستخدم النماذج التي تعمل بالبطارية على نطاق واسع في المنازل
          والمكاتب والمستشفيات والمركبات والفنادق والمدارس والأماكن الشخصية، خاصة
          حيث لا يتم ضمان إمداد الطاقة دون انقطاع. تتفاعل هذه الأجهزة مباشرة مع
          المكونات الكهربائية والإلكترونية والبطارية، مما يجعل السلامة الكهربائية
          وحماية الحرائق وسلامة العزل وحماية المستخدم مهمة للغاية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان سلامة المستهلك والامتثال التنظيمي، فرضت حكومة الهند الامتثال لمعايير
          السلامة الكهربائية الهندية. الحصول على شهادة BIS لمنظف الهواء بالبطارية
          بموجب IS 302 (الجزء 1):2024 هو متطلب قانوني إلزامي للمصنعين والمستوردين
          قبل بيع هذه المنتجات في السوق الهندية. تؤكد شهادة BIS الصالحة لمنظف الهواء
          بالبطارية أن الجهاز قد تم اختباره للسلامة الكهربائية والميكانيكية والحرارية
          وفقًا لأحدث المعيار الهندي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم المطابقة الرسمي للمنتجات في الهند الذي تحكمه
          هيئة المعايير الهندية. تعمل BIS تحت إشراف وزارة شؤون المستهلك وهي مسؤولة
          عن ضمان أن المنتجات المباعة في الهند تلبي معايير محددة للسلامة والجودة
          والموثوقية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يشير معنى شهادة BIS إلى تفويض صادر عن BIS يسمح للمصنع بإنتاج واستيراد
          وبيع منتج يتوافق مع معيار هندي محدد (IS). تسمح هذه الشهادة أيضًا باستخدام
          علامة شهادة BIS (علامة ISI) على المنتج المعتمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          توجد BIS من أجل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية المستهلكين من الأجهزة الكهربائية غير الآمنة</li>
          <li>منع الحرائق والصدمات الكهربائية والمخاطر المتعلقة بالبطارية</li>
          <li>تعزيز جودة المنتج الموحدة</li>
          <li>تمكين إنفاذ لوائح السلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح علامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشير علامة BIS (علامة ISI) على منظف الهواء الذي يعمل بالبطارية إلى أن:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المنتج يتوافق مع IS 302 (الجزء 1):2024</li>
          <li>العزل الكهربائي والبناء آمنان</li>
          <li>الجهاز معتمد قانونيًا للبيع في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معيار BIS المعمول به لمنظف الهواء بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (الجزء 1):2024 – سلامة الأجهزة الكهربائية المنزلية والمماثلة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المعمول به لأجهزة تنقية الهواء التي تعمل بالبطارية هو IS
          302 (الجزء 1):2024، والذي يحدد متطلبات السلامة العامة للأجهزة الكهربائية
          المخصصة للاستخدام المنزلي والمماثل.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 302 (الجزء 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي هذا المعيار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            السلامة الكهربائية للأجهزة التي تستخدم البطاريات أو الطاقة الهجينة
          </li>
          <li>الحماية من الصدمة الكهربائية</li>
          <li>مخاطر الحرائق والاحتراق الزائد</li>
          <li>السلامة الميكانيكية وبناء</li>
          <li>متطلبات العزل والزحف والمسافة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نية السلامة والأداء والاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يهدف IS 302 (الجزء 1):2024 إلى ضمان أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            تعمل الأجهزة التي تعمل بالبطارية بأمان في الظروف العادية وغير
            الطبيعية
          </li>
          <li>
            المستخدمون محميون من المخاطر الكهربائية والحرارية والميكانيكية
          </li>
          <li>المكونات لا تسخن أو تسبب حرائق</li>
          <li>يبقى الجهاز آمنًا طوال دورة حياته المقصودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصنعو أجهزة تنقية الهواء التي تعمل بالبطارية في الهند</li>
          <li>المستوردون والموزعون</li>
          <li>المصنعون الأجانب الذين يوردون إلى الهند</li>
          <li>العلامات التجارية التي تبيع أجهزة تنقية الهواء تحت علامات خاصة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لمنظف الهواء بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مخاطر سلامة المستهلك
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          قد تسبب أجهزة تنقية الهواء غير المعتمدة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>صدمة كهربائية بسبب العزل السيئ</li>
          <li>احتراق البطارية أو انفجارها</li>
          <li>مخاطر الحرائق أثناء الشحن أو التشغيل</li>
          <li>فشل ميكانيكي للمكونات الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال الحكومي والتنظيمي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بموجب إشعارات BIS ولوائح السلامة الكهربائية، تخضع أجهزة تنقية الهواء
          للشهادة الإلزامية. البيع بدون شهادة BIS في الهند غير قانوني.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          قد يؤدي عدم الامتثال إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتجات</li>
          <li>غرامات وعقوبات ثقيلة</li>
          <li>حظر الاستيراد</li>
          <li>المسؤولية الجنائية بموجب قانون BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يساعد ترخيص BIS لمنظف الهواء بالبطارية في:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>بناء ثقة المستهلك</li>
          <li>تمكين الإدراج على منصات التجارة الإلكترونية</li>
          <li>التأهل للمشتريات المؤسسية والحكومية</li>
          <li>تعزيز سمعة العلامة التجارية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لمنظف الهواء بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          القابلية للتطبيق وتحديد المعيار لترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تبدأ العملية بتأكيد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نوع المنتج: منظف الهواء الذي يعمل بالبطارية</li>
          <li>المعيار المعمول به: IS 302 (الجزء 1):2024</li>
          <li>الجهد ونوع البطارية وتكوين الشاحن</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية التقديم عبر الإنترنت لـ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التسجيل على بوابة BIS</li>
          <li>تقديم طلب BIS عبر الإنترنت</li>
          <li>تحميل المستندات التقنية والقانونية</li>
          <li>دفع الرسوم الحكومية المعمول بها</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يُشار إلى هذه الخطوة عادةً باسم التقديم عبر الإنترنت لـ BIS أو تسجيل
          شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          هيكل الرسوم والتكلفة لشهادة BIS لمنظف الهواء
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل تكلفة شهادة BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم الاختبار</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص والعلامة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تعتمد التكلفة الإجمالية لشهادة BIS على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تعقيد المنتج</li>
          <li>تصميم البطارية والشاحن</li>
          <li>موقع التصنيع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينة المنتج (وفقًا لـ IS 302 الجزء 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم اختبار العينات في المختبرات المعترف بها من BIS لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحماية من الصدمة الكهربائية</li>
          <li>التسخين والتشغيل غير الطبيعي</li>
          <li>مقاومة العزل</li>
          <li>قوة العزل الكهربائي</li>
          <li>سلامة البطارية وسلامة الشحن</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش المصنع والتدقيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتحقق مسؤولو BIS من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع</li>
          <li>نظام مراقبة الجودة</li>
          <li>إمكانية تتبع المكونات</li>
          <li>مرافق الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح ترخيص BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الاختبار والتفتيش الناجح:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تصدر BIS ترخيص هيئة المعايير الهندية</li>
          <li>يُصرح للمصنع باستخدام علامة BIS</li>
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
          المستندات التقنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مخططات الدوائر</li>
          <li>أوراق بيانات المكونات</li>
          <li>مواصفات البطارية والشاحن</li>
          <li>دليل المستخدم والملصقات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج طلب BIS</li>
          <li>نموذج طلب الاختبار</li>
          <li>الإعلانات والتعهدات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعرف هذه باسم مستندات شهادة BIS أو مستندات شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقًا لـ IS 302 (الجزء 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الاختبارات الإلزامية:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الحماية من الصدمة الكهربائية</li>
          <li>اختبار التسخين والتشغيل غير الطبيعي</li>
          <li>اختبار مقاومة العزل</li>
          <li>اختبار قوة العزل الكهربائي</li>
          <li>اختبار سلامة شحن البطارية</li>
          <li>اختبار القوة الميكانيكية والاستقرار</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب إجراء الاختبار فقط في المختبرات المعترف بها من BIS.
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
          <li>الفشل في اختبارات التسخين أو العزل</li>
          <li>تكوين البطارية غير الآمن</li>
          <li>المستندات غير مكتملة</li>
          <li>الملصقات غير المتوافقة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الحلول وأفضل الممارسات
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إجراء اختبارات ما قبل الامتثال</li>
          <li>استخدام مكونات معتمدة</li>
          <li>إعداد مستندات تقنية دقيقة</li>
          <li>العمل مع مستشاري BIS ذوي الخبرة</li>
        </ul>

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
          <li>الحماية من العقوبات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الوصول إلى السوق في جميع أنحاء الهند</li>
          <li>القبول على منصات التجارة الإلكترونية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تعزز علامة BIS الثقة</li>
          <li>ثقة أعلى للعملاء</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسيع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>دخول أسهل إلى الأسواق المؤسسية</li>
          <li>مصداقية العلامة التجارية على المدى الطويل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS لمنظف الهواء بالبطارية؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب (مع AIR)</li>
          <li>التجار وأصحاب العلامات التجارية</li>
          <li>البائعون عبر الإنترنت والأسواق</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم خدمات شهادة BIS من البداية إلى النهاية، بما في ذلك:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تقييم القابلية للتطبيق</li>
          <li>إعداد المستندات</li>
          <li>تنسيق اختبارات المختبر</li>
          <li>دعم تفتيش المصنع</li>
          <li>موافقات أسرع</li>
          <li>الامتثال بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن خبرتنا في الأجهزة الكهربائية والإلكترونية رحلة شهادة سلسة ومتوافقة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لمنظف الهواء بالبطارية بموجب IS 302 (الجزء
          1):2024 ليس مجرد إجراء تنظيمي—بل هو متطلب أمان وسوق حاسم. تضمن شهادة
          BIS لمنظف الهواء بالبطارية السلامة الكهربائية وموثوقية البطارية وحماية
          المستهلك، بينما يعزز ترخيص BIS لمنظف الهواء بالبطارية مصداقية العلامة
          التجارية والموقف القانوني.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين والمستوردين، يمنع الامتثال في الوقت المناسب العقوبات
          ويمكن من دخول السوق بسلاسة ويبني الثقة على المدى الطويل. مع التوجيه
          الخبير ودعم الامتثال المنظم، تصبح عملية شهادة BIS فعالة وقابلة للتنبؤ
          ومتوافقة تمامًا مع المعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لمنظف الهواء بالبطارية
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س1. هل شهادة BIS إلزامية لأجهزة تنقية الهواء التي تعمل بالبطارية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، إنها إلزامية بموجب IS 302 (الجزء 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س2. ما هو الشكل الكامل لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              شهادة هيئة المعايير الهندية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س3. كم تستغرق شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادة 6-8 أسابيع للمصنعين الهنود و 12-16 أسبوعًا للمصنعين الأجانب.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س4. ما هي تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              يعتمد على الاختبار وتعقيد المنتج.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س5. هل يمكن للمستوردين التقدم بطلب للحصول على شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، مع التفويض المناسب.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س6. هل علامة ISI إلزامية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، بعد الشهادة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س7. هل تتضمن اختبارات سلامة البطارية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، سلامة البطارية والشحن إلزامية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س8. هل تفتيش المصنع إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، لمنح الترخيص.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س9. هل يمكن تغطية نماذج متعددة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، بشرط موافقة الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س10. هل التقديم عبر الإنترنت مطلوب؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التقديم عبر الإنترنت لـ BIS إلزامي.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س11. هل يمكن للعلامات التجارية الأجنبية الحصول على شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال ممثل هندي معتمد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س12. ماذا يحدث إذا تم انتهاك قواعد BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              العقوبات والمصادرة والإجراءات القانونية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س13. هل تحسن شهادة BIS المبيعات؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تعزز الثقة بشكل كبير.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س14. هل التجديد مطلوب؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التجديد الدوري إلزامي.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س15. هل يمكن للمستشارين تسريع الموافقة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، المستشارون ذوو الخبرة يقللون التأخير.
            </p>
          </div>
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
              علامة BIS (ترخيص ISI) للمصنع الأجنبي
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
