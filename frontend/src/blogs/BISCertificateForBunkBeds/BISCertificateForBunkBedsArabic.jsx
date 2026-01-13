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

const BISCertificateForBunkBedsArabic = () => {
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

export default BISCertificateForBunkBedsArabic;

const MetaTags = () => {
  const title = "شهادة BIS للأسرة المزدوجة | رخصة BIS IS 17636:2022";
  const ogTitle = "شهادة BIS للأسرة المزدوجة – دليل IS 17636:2022";
  const twitterTitle = "رخصة BIS للأسرة المزدوجة | IS 17636:2022";
  const metaDescription =
    "احصل على شهادة BIS للأسرة المزدوجة بموجب IS 17636:2022. العملية، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للأسرة المزدوجة وفقًا لـ IS 17636:2022. تعرف على العملية، التكلفة، المستندات، الاختبارات وفوائد رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للأسرة المزدوجة بموجب IS 17636:2022. تعرف على عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للأسرة المزدوجة، رخصة BIS للأسرة المزدوجة، IS 17636:2022، شهادة BIS للأسرة المزدوجة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636";
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
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/literas-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-song-chan-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636"
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
                    شهادة BIS للأسرة المزدوجة – IS 17636:2022
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
          شهادة BIS للأسرة المزدوجة – دليل كامل لشهادة BIS IS 17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="رخصة BIS للأسرة المزدوجة"
            alt="شهادة BIS للأسرة المزدوجة - شهادة BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة المزدوجة هي متطلب إلزامي في الهند بموجب IS
          17636:2022، والتي تحدد متطلبات السلامة والأداء والهيكل للأسرة المزدوجة
          المستخدمة في المنازل، النزل، المهاجع، أماكن الإقامة PG، المدارس،
          الفنادق والمنشآت التجارية. يجب على أي مصنع—هندي أو أجنبي—الحصول على
          شهادة BIS للأسرة المزدوجة قبل بيع أو استيراد أو تصدير أو توزيع الأسرة
          المزدوجة في السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع تزايد الطلب على الأثاث الموفّر للمساحة، أصبحت الأسرة المزدوجة فئة
          منتج أساسية. ومع ذلك، فإن مخاطر السلامة مثل السقوط، الانهيار،
          الاحتجاز، والفشل الهيكلي تجعل رخصة BIS للأسرة المزدوجة ضرورية لضمان
          حماية المستهلك. سيرشدك هذه الصفحة الشاملة من خلال تسجيل BIS للأسرة
          المزدوجة، متطلبات الاختبار، التوثيق، الرسوم، الجداول الزمنية،
          العقوبات، والفوائد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          سواء كنت مصنعًا، مستوردًا، مصدرًا، تاجرًا، أو شركة ناشئة، يساعدك هذا
          الدليل على فهم متطلبات الامتثال بموجب مكتب المعايير الهندية (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي برنامج امتثال للجودة والسلامة يحكمه مكتب المعايير
          الهندية، هيئة المعايير الوطنية في الهند. يضمن أن المنتجات تتوافق مع
          المعايير الهندية المحددة وهي آمنة وموثوقة وصالحة للاستخدام.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ما هي شهادة BIS؟
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي رخصة رسمية تصدر للمصنع تسمح له باستخدام علامة ISI، مما
          يثبت الامتثال لمعايير المنتج المحددة من BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تثبت أن المنتج قد اجتاز:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاختبارات المعملية</li>
          <li>تفتيش المصنع</li>
          <li>تقييم مراقبة الجودة</li>
          <li>الامتثال للسلامة</li>
          <li>الامتثال للمعايير الهندية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعرض المنتج المعتمد من BIS شعار BIS، المعروف أيضًا باسم علامة ISI، مما
          يشير إلى أنه يلبي معايير الجودة الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هو معيار BIS المطبق على الأسرة المزدوجة؟ (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تخضع الأسرة المزدوجة لشهادة BIS الإلزامية وفقًا للمعيار الجديد المقدم:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — الأسرة المزدوجة – متطلبات السلامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يضمن هذا المعيار أن الأسرة المزدوجة تلبي معايير السلامة والبناء
          والمتانة الصارمة. ويغطي:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاستقرار الهيكلي</li>
          <li>القضبان الواقية</li>
          <li>مخاطر الاحتجاز</li>
          <li>قدرة التحمل</li>
          <li>متطلبات الأبعاد</li>
          <li>مواصفات المواد</li>
          <li>الحواف والانتهاء السطحي</li>
          <li>بناء السلم</li>
          <li>اختبارات المتانة والأداء</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على أي مصنع يرغب في بيع الأسرة المزدوجة في الهند الحصول على رخصة
          BIS للأسرة المزدوجة بموجب IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا مطلوبة شهادة BIS للأسرة المزدوجة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تستخدم الأسرة المزدوجة على نطاق واسع من قبل الأطفال والبالغين، ومخاوف
          السلامة تجعل الامتثال ضروريًا. جعلت BIS الشهادة إلزامية لمنع:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الانهيار أو الفشل الهيكلي</li>
          <li>احتجاز أجزاء الجسم</li>
          <li>السقوط من السرير العلوي</li>
          <li>الإصابات المتعلقة بالسلم</li>
          <li>جودة المواد الرديئة</li>
          <li>مخاطر الحريق</li>
          <li>الانتهاءات الخطرة أو الحواف الحادة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أسباب إلزامية رخصة BIS للأسرة المزدوجة
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يضمن القوة الميكانيكية والمتانة</li>
          <li>يحمي المستهلكين—خاصة الأطفال—من الإصابة</li>
          <li>يحافظ على معايير الجودة الموحدة</li>
          <li>يساعد العلامات التجارية على بناء الثقة والمصداقية</li>
          <li>يضمن الامتثال للوائح الحكومية</li>
          <li>يمنع المشاكل القانونية والعقوبات</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون تسجيل BIS، لا يمكن للمصنعين والمستوردين بيع المنتج قانونيًا في
          السوق الهندي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة للأسرة المزدوجة (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن عملية شهادة BIS في الهند الاختبارات، التوثيق، وتفتيشات المصنع.
          إليك الإجراء خطوة بخطوة:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 — تحديد القابلية للتطبيق والمعيار
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — إلزامي
          </li>
          <li>تأكيد فئة المنتج وتفاصيل وحدة التصنيع.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 — طلب BIS (تقديم النموذج)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          التقديم عبر الإنترنت من خلال بوابة BIS Manak الإلكترونية.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          المتطلبات تشمل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>عنوان المصنع والإثبات</li>
          <li>فئة المنتج والعلامة التجارية</li>
          <li>قدرات التصنيع</li>
          <li>عمليات مراقبة الجودة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تبدأ هذه الخطوة دورة الموافقة الرسمية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 — دفع تكلفة شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد التقديم، ادفع:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم الاختبار</li>
          <li>رسوم التدقيق</li>
          <li>رسوم العلامة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          تعتمد الرسوم على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عدد متغيرات المنتج</li>
          <li>أسماء العلامات التجارية</li>
          <li>موقع المصنع</li>
          <li>معاملات الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 — اختبار العينات (وفقًا لـ IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم إجراء الاختبارات في مختبر معترف به من BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الاختبارات:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الاستقرار الهيكلي</li>
          <li>اختبار الصدمة</li>
          <li>اختبار الاحتجاز</li>
          <li>اختبار قوة القضبان الواقية</li>
          <li>اختبار جودة الانتهاء</li>
          <li>اختبار سلامة السلم</li>
          <li>اختبار الحمل</li>
          <li>اختبار المتانة</li>
          <li>تقييم سلامة الحواف</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم تحميل تقرير الاختبار مباشرة إلى بوابة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 — تفتيش مصنع BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يزور موظف BIS المصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نظام إدارة الجودة</li>
          <li>التحكم في المواد الخام</li>
          <li>التفتيشات أثناء العملية</li>
          <li>اختبار المنتج النهائي</li>
          <li>قدرة الإنتاج</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتحققون من الامتثال لمخطط BIS للاختبار والتفتيش (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 — منح رخصة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بمجرد إتمام جميع الخطوات، تصدر BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>موافقة علامة ISI</li>
          <li>رقم رخصة CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يمكنك الآن استخدام علامة BIS قانونيًا على الأسرة المزدوجة والتغليف.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 — الالتزامات بعد الرخصة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على الاختبارات الداخلية</li>
          <li>السماح بتفتيشات BIS الدورية</li>
          <li>تجديد الرخصة كل سنة أو سنتين</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق رخصة BIS للأسرة المزدوجة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يغطي هذا المعيار المتطلبات المتعلقة بالأداء
          والسلامة وهي القوة والاستقرار والمتانة للأسرة المزدوجة للاستخدام
          المنزلي وغير المنزلي. ينطبق هذا المعيار أيضًا على الأسرة المفردة
          للاستخدام على ارتفاع قاعدة السرير 800 مم أو أكثر فوق مستوى الأرضية
          النهائية، بغض النظر عن الاستخدام الذي يوضع فيه المساحة أدناه.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> ينطبق هذا المعيار على الأسرة المزدوجة
          المصنعة/المصنعة بالكامل. كما ينطبق على الوحدات الجاهزة للتجميع؛ في هذه
          الحالة، تنطبق متطلبات هذا المعيار على الوحدة المجمعة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للأسرة المزدوجة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          إليك قائمة كاملة بمستندات شهادة BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات المصنع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة تسجيل المصنع</li>
          <li>مخطط تدفق عملية التصنيع</li>
          <li>قائمة الآلات والمعدات</li>
          <li>قائمة معدات الاختبار</li>
          <li>شهادات المعايرة</li>
          <li>تخطيط المصنع/تخطيط المصنع</li>
          <li>خطاب تفويض من الرئيس التنفيذي/المدير</li>
          <li>شهادة ISO 9001 (إن وجدت)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات الهوية</li>
          <li>إثبات العنوان</li>
          <li>تفويض العلامة التجارية (إذا كانت علامة تجارية لطرف ثالث)</li>
          <li>مستند تسجيل العلامة التجارية (اختياري)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مواصفات المنتج</li>
          <li>قائمة المواد</li>
          <li>وصف ميزات السلامة</li>
          <li>خطة مراقبة الجودة</li>
          <li>تقارير الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التعهدات والإعلانات</li>
          <li>نموذج طلب الاختبار</li>
          <li>خطاب موافقة العينة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          وجود المستندات المناسبة يقلل من التأخير ويضمن الموافقة السلسة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للأسرة المزدوجة (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الاختبار جزء إلزامي من عملية تسجيل BIS. تخضع الأسرة المزدوجة لاختبارات
          صارمة لضمان السلامة والمتانة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          مخطط التفتيش والاختبار للأسرة المزدوجة
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  حواجز السلامة للسرير العلوي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الفجوات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  قاعدة السرير
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  السلم
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  قوة الإطار والمثبتات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الاستقرار
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تثبيت السرير العلوي بالسرير السفلي
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء الاختبارات في مختبر معترف به من BIS فقط.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>تصنيف المنتج غير الصحيح</strong>
            <br />
            تحقق دائمًا من المعيار الهندي الصحيح.
          </li>
          <li>
            <strong>التوثيق غير السليم</strong>
            <br />
            المستندات المفقودة تسبب التأخير—قم بإعدادها مسبقًا.
          </li>
          <li>
            <strong>فشل اختبارات المختبر</strong>
            <br />
            تأكد من جودة المواد العالية، اللحام، القضبان الواقية، والانتهاء.
          </li>
          <li>
            <strong>المصنع غير جاهز للتفتيش</strong>
            <br />
            تأكد من صيانة نظام إدارة الجودة ومعدات الاختبار بشكل صحيح.
          </li>
          <li>
            <strong>مشاكل العلامة التجارية</strong>
            <br />
            يجب أن يطابق اسم العلامة التجارية طلب الرخصة.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          حل هذه المشاكل مبكرًا يقلل من وقت المعالجة بشكل كبير.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للمصنعين والمستوردين
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>بيع الأسرة المزدوجة قانونيًا في الهند</li>
          <li>بناء الثقة مع العملاء</li>
          <li>تقليل إرجاع المنتجات</li>
          <li>تحسين سمعة العلامة التجارية</li>
          <li>ضمان الامتثال للسلامة</li>
          <li>الحصول على ميزة تنافسية</li>
          <li>التوسع في سلاسل البيع بالتجزئة ومنصات التجارة الإلكترونية</li>
          <li>الوصول إلى مناقصات الحكومة</li>
          <li>تجنب العقوبات والإجراءات القانونية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات لعدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع الأسرة المزدوجة بدون شهادة BIS قد يؤدي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج</li>
          <li>العقوبات المالية</li>
          <li>أوامر إغلاق المصنع</li>
          <li>الملاحقة القانونية</li>
          <li>الحظر من السوق الهندي</li>
          <li>وضع العلامة التجارية في القائمة السوداء</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الامتثال ليس اختياريًا—إنه إلزامي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS للأسرة المزدوجة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على الكيانات التالية الحصول على رخصة BIS للأسرة المزدوجة:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المصنعون الأجانب الذين يصدرون إلى الهند</li>
          <li>المستوردون</li>
          <li>الموزعون</li>
          <li>بائعون التجارة الإلكترونية</li>
          <li>مصنعو OEM/ODM</li>
          <li>علامات الأثاث وتجار التجزئة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتطلب كل مصنع (وليس الشركة) رخصة BIS منفصلة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم دعمًا شاملاً لتسجيل BIS للأسرة المزدوجة، بما في ذلك:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفسير المعيار (IS 17636:2022)</li>
          <li>إعداد التوثيق</li>
          <li>تنسيق اختبارات المختبر</li>
          <li>طلب بوابة BIS</li>
          <li>دعم تفتيش المصنع</li>
          <li>التواصل مع موظفي BIS</li>
          <li>مساعدة موافقة الرخصة</li>
          <li>الامتثال بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع سنوات من الخبرة، نضمن شهادة BIS سريعة ودقيقة وخالية من المتاعب.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة — شهادة BIS للأسرة المزدوجة
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. هل شهادة BIS إلزامية للأسرة المزدوجة في الهند؟</strong>
              <br />
              نعم. بموجب IS 17636:2022، إنها إلزامية لجميع المصنعين والمستوردين.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. كم يستغرق الحصول على شهادة BIS للأسرة المزدوجة؟
              </strong>
              <br />
              عادة 30-45 يومًا اعتمادًا على الجاهزية والتوثيق.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. هل يمكن للمصنعين الأجانب التقدم بطلب للحصول على BIS؟
              </strong>
              <br />
              نعم، من خلال FMCS (مخطط شهادة المصنعين الأجانب).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. هل يمكنني التقدم بطلب للحصول على شهادة BIS عبر الإنترنت؟
              </strong>
              <br />
              نعم، من خلال بوابة BIS Manak الإلكترونية.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. ما هي الاختبارات المطلوبة لشهادة الأسرة المزدوجة؟
              </strong>
              <br />
              اختبار الحمل، اختبار القضبان الواقية، اختبار الاستقرار، اختبار
              الصدمة، اختبار الاحتجاز، إلخ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. كم تبلغ مدة صلاحية رخصة BIS؟</strong>
              <br />
              عادة سنة إلى سنتين وقابلة للتجديد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل يمكن لرخصة واحدة أن تغطي نماذج متعددة؟</strong>
              <br />
              فقط إذا كانت ضمن نفس المعيار والفئة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل علامة ISI مطلوبة على الأسرة المزدوجة؟</strong>
              <br />
              نعم، علامة ISI إلزامية بعد الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ماذا يحدث إذا فشل منتجي في اختبارات المختبر؟</strong>
              <br />
              يجب عليك تعديل المنتج وإعادة تقديم العينات.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. هل يتحقق BIS من بنية المصنع التحتية؟</strong>
              <br />
              نعم، أثناء التفتيش.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. هل يمكن للتجار التقدم بطلب للحصول على BIS؟</strong>
              <br />
              فقط إذا كانوا أصحاب علامات تجارية ولديهم عقد مع المصنعين.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. ما هو شعار BIS؟</strong>
              <br />
              إنه رمز علامة ISI القياسي الذي يشير إلى امتثال المنتج.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>14. ما هي المستندات المطلوبة لشهادة BIS؟</strong>
              <br />
              رخصة المصنع، التخطيط، قائمة الآلات، قائمة المواد، خطة مراقبة
              الجودة، تقارير الاختبار، إلخ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. هل يتم اختبار BIS في المصنع؟</strong>
              <br />
              لا، فقط في المختبرات المعترف بها من BIS.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS للأسرة المزدوجة بموجب IS 17636:2022 ليس إلزاميًا
          فحسب، بل ضروري أيضًا لضمان سلامة المستهلك وموثوقية المنتج والامتثال
          القانوني في الهند. تتضمن عملية الشهادة اختبار المنتج، التوثيق، تفتيش
          المصنع، وإصدار الرخصة. مع التخطيط المناسب والإرشاد الخبير، تصبح
          العملية سلسة وسريعة وفعالة من حيث التكلفة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          سواء كنت مصنعًا أو مستوردًا أو صاحب علامة تجارية، فإن الحصول على شهادة
          BIS يقوي موقعك في السوق ويزيد من ثقة العملاء ويفتح فرص عمل جديدة.
          فريقنا الاستشاري الخبير جاهز لمساعدتك في شهادة BIS الشاملة للأسرة
          المزدوجة.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="شهادة BIS للأسرة المزدوجة - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
