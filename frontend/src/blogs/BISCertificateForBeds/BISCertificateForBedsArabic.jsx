import FaqAuthorArabic from "@/components/common/FaqAuthor/FaqAuthorArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ManyUsersAlsoReadArabic from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadArabic";
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

const BISCertificateForBedsArabic = () => {
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

export default BISCertificateForBedsArabic;

const MetaTags = () => {
  const title = "شهادة BIS للأسرة | ترخيص BIS IS 17635:2022";
  const ogTitle = "شهادة BIS للأسرة – دليل IS 17635:2022";
  const twitterTitle = "ترخيص BIS للأسرة | IS 17635:2022";
  const metaDescription =
    "احصل على شهادة BIS للأسرة بموجب IS 17635:2022. العملية، المستندات، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للأسرة وفقاً لـ IS 17635:2022. تعرف على العملية، التكلفة، المستندات، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للأسرة بموجب IS 17635:2022. تعلم عملية BIS، المستندات، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للأسرة، ترخيص BIS للأسرة، IS 17635:2022، شهادة BIS للأسرة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/asrat-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal، رئيس العمليات في Sun Certification India";

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
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
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
                    شهادة BIS للأسرة – IS 17635:2022
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
          شهادة BIS للأسرة – دليل كامل IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="ترخيص BIS للأسرة"
            alt="شهادة BIS للأسرة - شهادة BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة هي متطلب امتثال إلزامي في الهند للمصنعين والمستوردين
          للأسرة المخصصة للاستخدام المنزلي والتجاري. وفقاً لأحدث المعيار الهندي
          IS 17635:2022 – الأسرة (متطلبات السلامة)، يجب أن تلبي جميع الأسرة
          معايير السلامة الصارمة، والمتانة، والهيكلية، والأداء قبل بيعها في
          السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الأسرة هي منتجات أثاث أساسية تُستخدم يومياً في المنازل، والفنادق،
          والمستشفيات، وبيوت الطلبة، وأماكن الإقامة PG، والمرافق المؤسسية. أي
          ضعف هيكلي، أو حواف حادة، أو فشل في المواد، أو قدرة تحميل ضعيفة يمكن أن
          يؤدي إلى إصابات خطيرة. لمنع مثل هذه المخاطر، مكتب المعايير الهندي
          (BIS) يفرض شهادة BIS للأسرة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل كل شيء عن ترخيص BIS للأسرة، بما في ذلك المعايير
          المعمول بها، وعملية الشهادة، ومتطلبات الاختبار، والمستندات، والرسوم،
          والجداول الزمنية، والعقوبات، والفوائد.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي مخطط تقييم المطابقة الذي قدمه مكتب المعايير الهندي، سلطة
          المعايير الوطنية في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ما هي شهادة BIS؟
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تؤكد شهادة BIS أن المنتج يتوافق مع المعايير الهندية وهو آمن وموثوق
          ومناسب للاستخدام. المنتجات المعتمدة تحمل علامة شهادة BIS، المعروفة
          باسم علامة ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يشير إلى أن المنتج نجح في اجتياز:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاختبارات المعملية</li>
          <li>فحص المصنع</li>
          <li>التحقق من مراقبة الجودة</li>
          <li>تقييم الامتثال للسلامة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          شعار BIS على الأسرة يطمئن العملاء أن المنتج يلبي معايير الجودة
          والسلامة المعتمدة من الحكومة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار BIS المعمول به للأسرة – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المعمول به للأسرة هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – الأسرة: متطلبات السلامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يحدد هذا المعيار متطلبات السلامة والأداء الأساسية للأسرة المستخدمة في
          البيئات السكنية والتجارية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          يغطي IS 17635:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القوة الهيكلية</li>
          <li>قدرة التحمل</li>
          <li>الاستقرار والمتانة</li>
          <li>جودة المواد</li>
          <li>الحواف والانتهاء السطحي</li>
          <li>السلامة ضد الانهيار</li>
          <li>عدم وجود مخاطر الاحتجاز</li>
          <li>الأداء طويل الأمد</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تتوافق أي سرير مصنع أو مستورد إلى الهند مع IS 17635:2022
          والحصول على تسجيل BIS للأسرة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم الأسرة لفترات طويلة وتدعم وزن الإنسان باستمرار. الأسرة المصممة
          بشكل سيئ يمكن أن تسبب إصابات، أو انهيار، أو مخاطر صحية طويلة الأمد.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أسباب الحاجة إلى شهادة BIS للأسرة
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يضمن السلامة الهيكلية</li>
          <li>يمنع الانهيار والكسر</li>
          <li>يتحكم في جودة المواد</li>
          <li>يقضي على الحواف الحادة والانتهاء غير الآمن</li>
          <li>يحمي المستهلكين</li>
          <li>يضمن جودة وطنية موحدة</li>
          <li>إلزامي بموجب إشعار BIS</li>
          <li>مطلوب للبيع القانوني في الهند</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون ترخيص BIS للأسرة، بيع أو استيراد الأسرة في الهند غير قانوني.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للأسرة (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتبع عملية شهادة BIS في الهند إجراءً منظمًا بموجب مخطط شهادة ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد المعيار ونطاق المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تأكيد القابلية للتطبيق بموجب IS 17635:2022 وتحديد متغيرات المنتج.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – طلب BIS (عبر الإنترنت)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تقديم الطلب عبر بوابة BIS Manak الإلكترونية مع:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>عنوان المصنع</li>
          <li>وصف المنتج</li>
          <li>اسم العلامة التجارية</li>
          <li>تفاصيل مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – رسوم شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          دفع الرسوم المعمول بها بما في ذلك:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم الاختبار</li>
          <li>رسوم التفتيش</li>
          <li>رسوم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم اختبار العينات في المختبرات المعترف بها من BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          يتضمن الاختبار
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الحمل الثابت</li>
          <li>اختبار المتانة</li>
          <li>اختبار الاستقرار</li>
          <li>اختبار قوة المفصل</li>
          <li>اختبار الانتهاء السطحي</li>
          <li>اختبار سلامة الحافة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – تفتيش المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقوم ضابط BIS بتفتيش:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>منشأة التصنيع</li>
          <li>التحكم في المواد الخام</li>
          <li>الاختبار أثناء العملية</li>
          <li>نظام ضمان الجودة</li>
          <li>معدات الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الامتثال، يصدر BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>إذن علامة ISI</li>
          <li>رقم CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الامتثال بعد الشهادة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفتيشات المراقبة</li>
          <li>التجديد كل 1–2 سنة</li>
          <li>مراقبة الجودة المستمرة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق ترخيص BIS للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يغطي هذا المعيار المتطلبات المتعلقة بأداء وسلامة
          الأسرة للبالغين للاستخدام المنزلي وغير المنزلي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> ينطبق هذا المعيار على الأسرة المصنعة/ المصنعة
          بالكامل. كما ينطبق على الوحدات الجاهزة للتجميع؛ في تلك الحالة تنطبق
          متطلبات هذا المعيار على الوحدات المجمعة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> لا يغطي هذا المعيار أسرة الماء، وأسرة الهواء،
          والأسرة القابلة للطي، والأسرة المزدوجة والأسرة للأشخاص ذوي الاحتياجات
          الخاصة، ولا الأسرة للرعاية الصحية والأغراض الطبية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          إليك قائمة كاملة بمستندات شهادة BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات المصنع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تسجيل/ترخيص المصنع</li>
          <li>مخطط عملية التصنيع</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار</li>
          <li>شهادات المعايرة</li>
          <li>تخطيط المصنع</li>
          <li>خطة مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات العنوان</li>
          <li>إثبات الهوية</li>
          <li>تفويض العلامة التجارية</li>
          <li>شهادة العلامة التجارية (إن وجدت)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات التقنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات المنتج</li>
          <li>المواصفات</li>
          <li>فاتورة المواد</li>
          <li>تقارير الاختبار الداخلية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للأسرة (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تخضع الأسرة لاختبارات صارمة لضمان الامتثال.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          الاختبارات الإلزامية
        </h3>

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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأبعاد
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الاستقرار
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحمل الثابت العمودي على قاعدة السرير
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحمل الثابت العمودي على القضيب الجانبي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبارات الحمل الثابت الأفقي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار التأثير العمودي
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

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>اختيار المعيار غير الصحيح</strong> – تحقق دائمًا من المعيار
            الهندي الصحيح.
          </li>
          <li>
            <strong>التوثيق الضعيف</strong> – المستندات المفقودة تسبب التأخير؛
            قم بإعدادها مسبقًا.
          </li>
          <li>
            <strong>فشل اختبارات المختبر</strong> – تأكد من المواد عالية الجودة
            والبناء.
          </li>
          <li>
            <strong>عدم جاهزية المصنع</strong> – تأكد من أن QMS ومعدات الاختبار
            محفوظة بشكل صحيح.
          </li>
          <li>
            <strong>عدم تطابق العلامة التجارية</strong> – يجب أن يطابق اسم
            العلامة التجارية طلب الترخيص.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للأسرة
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>البيع القانوني في الهند</li>
          <li>زيادة ثقة العملاء</li>
          <li>الوصول إلى منصات التجارة الإلكترونية</li>
          <li>الأهلية لمناقصات الحكومة</li>
          <li>تقليل المسؤولية</li>
          <li>مصداقية العلامة التجارية القوية</li>
          <li>الامتثال للمعايير الهندية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع الأسرة بدون شهادة BIS يمكن أن يؤدي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>غرامات ثقيلة</li>
          <li>مصادرة المنتج</li>
          <li>إغلاق الأعمال</li>
          <li>إجراء قانوني</li>
          <li>حظر السوق</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS للأسرة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على الكيانات التالية الحصول على ترخيص BIS للأسرة:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المصنعون الأجانب</li>
          <li>المستوردون</li>
          <li>علامات الأثاث</li>
          <li>موردو OEM/ODM</li>
          <li>بائعون التجارة الإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتطلب كل وحدة تصنيع ترخيص BIS منفصل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لشهادة BIS للأسرة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم استشارات BIS شاملة، بما في ذلك:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسم خرائط المعايير</li>
          <li>دعم التوثيق</li>
          <li>تنسيق الاختبار</li>
          <li>تقديم الطلب</li>
          <li>معالجة تفتيش المصنع</li>
          <li>التواصل مع BIS</li>
          <li>إصدار الترخيص</li>
          <li>دعم التجديد والمراقبة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة بموجب IS 17635:2022 هي متطلب قانوني إلزامي يضمن
          السلامة والجودة والمتانة. الحصول على ترخيص BIS للأسرة يحمي المستهلكين،
          ويعزز قيمة العلامة التجارية، و يتيح الوصول القانوني إلى السوق في جميع
          أنحاء الهند. مع الدعم الخبير، تصبح عملية الشهادة سلسة وفعالة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للأسرة
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. هل شهادة BIS إلزامية للأسرة في الهند؟</strong>
              <br />
              نعم، بموجب IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هي صلاحية شهادة BIS؟</strong>
              <br />
              1–2 سنة، قابلة للتجديد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. هل يمكن للمصنعين الأجانب التقديم؟</strong>
              <br />
              نعم، بموجب FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. هل يمكن التقدم بطلب شهادة BIS عبر الإنترنت؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل علامة ISI إلزامية على الأسرة؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. كم تستغرق العملية؟</strong>
              <br />
              30–45 يومًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. هل الأسرة الخشبية والمعدنية مغطاة كلاهما؟</strong>
              <br />
              نعم، إذا كانت متوافقة مع IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل تفتيش المصنع إلزامي؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل يمكن للتجار التقدم بطلب BIS؟</strong>
              <br />
              فقط أصحاب العلامات التجارية مع السيطرة على التصنيع.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للأسرة - IS 17635:2022 PDF"
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
