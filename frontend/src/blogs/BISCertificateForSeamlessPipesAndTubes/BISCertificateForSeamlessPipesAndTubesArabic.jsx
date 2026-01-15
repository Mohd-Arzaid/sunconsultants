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

const BISCertificateForSeamlessPipesAndTubesArabic = () => {
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

export default BISCertificateForSeamlessPipesAndTubesArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للأنابيب والأنابيب غير الملحومة | رخصة BIS IS 17875:2022";
  const ogTitle =
    "شهادة BIS للأنابيب والأنابيب غير الملحومة – دليل IS 17875:2022";
  const twitterTitle =
    "رخصة BIS للأنابيب والأنابيب غير الملحومة | IS 17875:2022";
  const metaDescription =
    "احصل على شهادة BIS للأنابيب والأنابيب غير الملحومة بموجب IS 17875:2022. العملية والوثائق والاختبارات والتكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للأنابيب والأنابيب غير الملحومة وفقاً لـ IS 17875:2022. تعرف على العملية والتكلفة والوثائق والاختبارات ومزايا رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للأنابيب والأنابيب غير الملحومة بموجب IS 17875:2022. تعلم عملية BIS والوثائق والاختبارات والرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للأنابيب والأنابيب غير الملحومة, رخصة BIS للأنابيب والأنابيب غير الملحومة, IS 17875:2022, شهادة BIS للأنابيب والأنابيب غير الملحومة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/anabib-wa-anabib-bila-daraz-is-17875";
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
                    شهادة BIS للأنابيب والأنابيب غير الملحومة – IS 17875:2022
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
          شهادة BIS للأنابيب والأنابيب غير الملحومة بموجب IS 17875:2022 — دليل
          الشهادة الكامل
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="رخصة BIS للأنابيب والأنابيب غير الملحومة"
            alt="شهادة BIS للأنابيب والأنابيب غير الملحومة - IS 17875:2022 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          الأنابيب والأنابيب الفولاذية غير الملحومة معترف بها على نطاق واسع
          لأدائها المتفوق في التطبيقات الحرجة وعالية الضغط وعالية الحرارة. إنها
          ضرورية في الصناعات مثل النفط والغاز والبتروكيماويات والمصافي والهندسة
          الثقيلة والسيارات ومحطات الطاقة الحرارية والفضاء والهيدروليك والأنظمة
          الميكانيكية العامة. نظراً لأن الأنابيب غير الملحومة لا تحتوي على لحام،
          فإنها توفر قوة أكبر وتوحيداً وقدرة على التعامل مع الضغط مقارنة
          بالأنابيب الملحومة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان أن المصنعين يتبعون جودة إنتاج متسقة ويوفرون منتجات آمنة وخالية
          من العيوب في السوق الهندية، جعلت حكومة الهند شهادة BIS إلزامية
          للأنابيب والأنابيب غير الملحومة بموجب IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تشرح هذه الصفحة الشاملة العملية الكاملة للحصول على رخصة BIS، بما في
          ذلك الوثائق والاختبارات الإلزامية ومتطلبات الامتثال للجودة والرسوم
          والجداول الزمنية والتحديات التقنية والمزايا والعقوبات وقابلية التطبيق
          في الصناعة — مكتوبة بتنسيق موسع ومفصل للغاية وغني بـ SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS للأنابيب والأنابيب غير الملحومة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي موافقة رسمية تصدرها هيئة المعايير الهندية، تؤكد أن المصنع
          ينتج أنابيب/أنابيب غير ملحومة وفقاً للمواصفات المحددة بموجب IS
          17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يجب أن تخضع الأنابيب غير الملحومة لاختبارات صارمة تتعلق بـ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مقاومة الضغط</li>
          <li>قوة الشد</li>
          <li>متانة الصدمة</li>
          <li>القدرة على الانحناء</li>
          <li>التركيب الكيميائي</li>
          <li>دقة الأبعاد</li>
          <li>التقييمات غير المدمرة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          فقط المصنعون الذين يستوفون متطلبات الأداء هذه يحصلون على علامة ISI،
          مما يمكنهم من إنتاج أو استيراد أو بيع الأنابيب غير الملحومة بشكل
          قانوني في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الأهداف الرئيسية لشهادة BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            منع أنظمة الأنابيب دون المستوى أو الخطرة من دخول سلاسل التوريد
            الصناعية
          </li>
          <li>ضمان جودة التصنيع المتسقة والموثوقة</li>
          <li>
            حماية الصناعات التي تعتمد على نقل السوائل أو الغازات عالية الضغط
          </li>
          <li>الحفاظ على معايير السلامة والجودة الوطنية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فهم IS 17875:2022 — المعيار الهندي للأنابيب والأنابيب غير الملحومة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يحدد IS 17875:2022 متطلبات الجودة والاختبار والتصنيع والأداء للأنابيب
          والأنابيب الفولاذية غير الملحومة المخصصة للخدمة العامة.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق رخصة BIS للأنابيب والأنابيب غير الملحومة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يغطي هذا المعيار متطلبات الأنابيب والأنابيب
          الفولاذية غير القابل للصدأ غير الملحومة للخدمات العامة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> لا يحدد هذا المعيار متطلبات الأنابيب والأنابيب
          الفولاذية غير القابل للصدأ غير الملحومة المخصصة لأغراض مميزة، والتي
          تغطيها معايير هندية منفصلة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          التطبيقات المغطاة بموجب IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>خطوط أنابيب النفط والغاز</li>
          <li>خدمة السوائل عالية الحرارة</li>
          <li>أنابيب الغلايات</li>
          <li>مصانع المعالجة الكيميائية</li>
          <li>الأنظمة الهيدروليكية والهوائية</li>
          <li>مبادلات الحرارة</li>
          <li>التطبيقات الهيكلية</li>
          <li>مكونات السيارات</li>
          <li>تطبيقات البخار</li>
          <li>خطوط الأنابيب الصناعية عالية الضغط</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معايير الجودة الرئيسية في IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. متطلبات التركيب الكيميائي:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          يحدد حدود الكربون والمنغنيز والكروم والنيكل والموليبدينوم والكبريت
          والفوسفور، إلخ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. الخصائص الميكانيكية:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قوة الشد</li>
          <li>قوة الخضوع</li>
          <li>الصلابة</li>
          <li>المطيلية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. التسامحات الأبعاد:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القطر الخارجي</li>
          <li>سمك الجدار</li>
          <li>تسامحات الطول</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. حالات السطح:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          يجب أن تكون الأنابيب خالية من الشقوق والطبقات واللحامات والخدوش أو أي
          عيوب ضارة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. اختبار الضغط الهيدروستاتيكي:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          يضمن أن الأنابيب يمكنها تحمل الضغط الداخلي دون تسرب.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. الاختبار غير المدمر (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          يتضمن اختبار التيار الدوامي واختبار الموجات فوق الصوتية أو اختبار
          الجسيمات المغناطيسية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS الكاملة للأنابيب غير الملحومة (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          عملية شهادة BIS للأنابيب غير الملحومة أكثر تقنية وتفصيلاً من معظم
          المنتجات الأخرى لأن متطلبات التصنيع والاختبار واسعة. فيما يلي شرح مفصل
          خطوة بخطوة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 — تحديد القابلية للتطبيق وتصنيف المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنع:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحديد جميع درجات الفولاذ المستخدمة</li>
          <li>تحديد الأبعاد ونطاقات السماكة</li>
          <li>التأكد من أن جميع المتغيرات تقع ضمن نطاق IS 17875</li>
          <li>إعداد تصنيف المنتج لاختبار BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          قد تغطي رخصة BIS واحدة أحجاماً ودرجات متعددة إذا كانت تشترك في نفس
          منشأة التصنيع والعملية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 — إعداد الوثائق وتقديم طلب BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنع التقديم على بوابة Manak Online BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل المعلومات:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع والتخطيط</li>
          <li>القدرة الإنتاجية والعمليات</li>
          <li>تفاصيل الفرن والمعالجة الحرارية</li>
          <li>معدات الدرفلة والثقب والرسم</li>
          <li>أنظمة مراقبة الجودة</li>
          <li>وثائق مصادر المواد الخام</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          التقديم غير الصحيح هو أحد أكثر أسباب رفض طلب BIS شيوعاً.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 — تقديم الرسوم
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">تشمل الرسوم:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم اختبار المختبر</li>
          <li>تكاليف التفتيش والسفر</li>
          <li>رسوم العلامة بناءً على حجم الإنتاج</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 — اختيار العينات واختبار مختبر BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تخضع الأنابيب غير الملحومة لاختبارات ميكانيكية وكيميائية واسعة.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          هذا هو الجزء الأكثر استهلاكاً للوقت والأكثر تقنية في شهادة BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ اختبار التركيب الكيميائي</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          يتم إجراؤه باستخدام:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مطيافية الانبعاث البصري</li>
          <li>الطرق الكيميائية الرطبة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          يضمن التركيب الكيميائي الدقيق وفقاً لـ IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ الاختبار الميكانيكي</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>اختبار الشد</strong> — يقيم قوة الشد القصوى ونقطة الخضوع
            والاستطالة.
          </li>
          <li>
            <strong>اختبار الصلابة</strong> — يؤكد متانة المواد.
          </li>
          <li>
            <strong>اختبار التسطح</strong> — يختبر المطيلية والقابلية للحام (على
            الرغم من عدم وجود لحام، يتحقق التسطح من سلامة المواد).
          </li>
          <li>
            <strong>اختبار التوسيع / الحافة</strong> — يضمن قابلية التشوه دون
            تكسير.
          </li>
          <li>
            <strong>اختبار الصدمة (Charpy)</strong> — يقيم الأداء في درجات حرارة
            منخفضة.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ اختبار الضغط الهيدروستاتيكي</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          تخضع الأنابيب لضغط داخلي عالي لضمان عدم حدوث تسرب أو تشوه.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – الاختبار غير المدمر</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          إلزامي لاكتشاف العيوب الداخلية.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          تشمل الطرق:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التفتيش بالموجات فوق الصوتية</li>
          <li>فحص التيار الدوامي</li>
          <li>فحص الجسيمات المغناطيسية (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ التفتيش البصري والأبعاد</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">يقيم:</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إنهاء السطح</li>
          <li>الاستقامة</li>
          <li>البيضاوية</li>
          <li>تسامح السماكة</li>
          <li>دقة القطر</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ الفحص المعدني</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          يؤكد تحليل البنية الدقيقة هيكل الحبيبات وفعالية المعالجة الحرارية
          واستقرار المواد.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 — تفتيش مصنع BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بمجرد نجاح نتائج الاختبار، يزور مسؤولو BIS المصنع.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">يفحصون:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تخزين المواد الخام</li>
          <li>عمليات الفرن/المعالجة الحرارية</li>
          <li>مطاحن الثقب والمخفضات ومقاعد السحب البارد</li>
          <li>منشأة اختبار الضغط الهيدروستاتيكي</li>
          <li>منشأة NDT</li>
          <li>معدات المختبر والمعايرة</li>
          <li>سجلات مراقبة الجودة</li>
          <li>التحقق من القدرة التصنيعية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن يمتثل المصنع بالكامل لمخطط الاختبار والتفتيش (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 — منح رخصة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          إذا استوفت الاختبارات والتفتيش متطلبات BIS، يحصل المصنع على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>رقم CML</li>
          <li>التفويض لاستخدام علامة ISI على الأنابيب غير الملحومة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          قد يرفض BIS الطلبات إذا لم يتم استيفاء حتى متطلب واحد — مما يجعل
          التوجيه الخبير ذا قيمة كبيرة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 — الالتزامات بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>استخدام علامة ISI بشكل صحيح على الملصقات والتعبئة والأنابيب</li>
          <li>الحفاظ على الاختبارات الداخلية وفقاً لـ STI</li>
          <li>الخضوع لتفتيشات مراقبة BIS المنتظمة</li>
          <li>ضمان امتثال كل دفعة لـ IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          قد يؤدي الفشل في الحفاظ على الامتثال إلى تعليق الرخصة أو إلغائها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الوثائق المطلوبة لشهادة BIS للأنابيب غير الملحومة
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أ. وثائق التصنيع والإنتاج
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رخصة المصنع</li>
          <li>مخطط التخطيط مع موضع الآلات</li>
          <li>دليل عملية مراقبة الجودة</li>
          <li>سجلات المعالجة الحرارية</li>
          <li>شهادات اختبار مطحنة المواد الخام</li>
          <li>تفاصيل عملية الدرفلة/الثقب</li>
          <li>تفاصيل مقعد الرسم</li>
          <li>شهادات معايرة معدات الاختبار</li>
          <li>تقارير الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ب. الوثائق التقنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قائمة المواد</li>
          <li>مواصفات الدرجة الكيميائية</li>
          <li>أوراق الخصائص الميكانيكية</li>
          <li>مخططات تسامح الأبعاد</li>
          <li>رسومات ومواصفات الأنابيب</li>
          <li>وثائق نظام تتبع المواد</li>
          <li>إجراءات التشغيل القياسية للإنتاج</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ج. الوثائق القانونية والتنظيمية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>خطاب التفويض</li>
          <li>وثيقة ملكية العلامة التجارية/العلامة التجارية</li>
          <li>إثباتات الهوية والعنوان</li>
          <li>التعهدات والإعلانات المطلوبة من BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للأنابيب غير الملحومة بموجب IS 17875:2022
        </h2>

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
                  اختبار التوسيع
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار التسطح
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  حجم الحبيبات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار إحكام التسرب
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحرفية والإنهاء والمظهر
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأبعاد والتسامحات
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة في شهادة BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>فشل اختبار التركيب الكيميائي</strong>
            <br />
            يحدث بسبب درجات الفولاذ غير المتسقة.
          </li>
          <li>
            <strong>فشل الاختبارات الميكانيكية</strong>
            <br />
            غالباً ما يحدث بسبب المعالجة الحرارية غير الصحيحة.
          </li>
          <li>
            <strong>رفض NDT</strong>
            <br />
            قد تسبب الشقوق الداخلية أو الشوائب فشل العينة.
          </li>
          <li>
            <strong>المعايرة غير الكافية</strong>
            <br />
            يؤدي إلى بيانات اختبار غير دقيقة.
          </li>
          <li>
            <strong>عدم الامتثال لـ STI</strong>
            <br />
            يصبح حفظ السجلات غير الصحيح أثناء التفتيش سبباً رئيسياً للرفض.
          </li>
          <li>
            <strong>التباين الأبعاد</strong>
            <br />
            تسبب عدم اتساق قطر الأنبوب أو السماكة الفشل.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          مزايا شهادة BIS للأنابيب غير الملحومة
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الموافقة القانونية للتصنيع/البيع في الهند</li>
          <li>يضمن السلامة والموثوقية</li>
          <li>يحسن سمعة العلامة التجارية</li>
          <li>ضروري لمناقصات الحكومة</li>
          <li>مطلوب من قبل الصناعات العامة والخاصة</li>
          <li>يحمي المستهلكين من المنتجات دون المستوى</li>
          <li>يعزز القدرة التنافسية للتصدير</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بموجب قانون BIS، يؤدي بيع الأنابيب غير الملحومة غير المعتمدة إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج</li>
          <li>عقوبات شديدة</li>
          <li>إغلاق التصنيع</li>
          <li>قيود الاستيراد</li>
          <li>القائمة السوداء للعلامة التجارية</li>
          <li>الملاحقة الجنائية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يجب الحصول على شهادة BIS؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المصنعون الأجانب الذين يصدرون إلى الهند</li>
          <li>التجار (أصحاب العلامات التجارية)</li>
          <li>شركات OEM والهندسة</li>
          <li>المستوردون والمخزونون</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على كل وحدة تصنيع الحصول على رخصة منفصلة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأنابيب والأنابيب غير الملحومة بموجب IS 17875:2022 هي متطلب
          تنظيمي حرجي يضمن أن أنابيب الخدمة عالية الضغط تلبي معايير السلامة
          والجودة الصارمة في الهند. من التركيب الكيميائي إلى الاختبار غير المدمر
          المتقدم، يضمن BIS أن كل أنبوب معتمد متين وخالٍ من العيوب وقادر على
          الأداء في ظل ظروف صناعية صارمة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع التوجيه المهني، يمكن للمصنعين تبسيط رحلة الشهادة وتقليل التأخير
          وتحقيق الامتثال بسلاسة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة — شهادة BIS للأنابيب غير الملحومة (موسعة وغنية بـ SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. لماذا شهادة BIS إلزامية للأنابيب غير الملحومة؟</strong>
              <br />
              لأن الأنابيب غير الملحومة تستخدم في التطبيقات عالية الضغط والحرجة
              للسلامة. تضمن اللوائح الحكومية دخول أنابيب عالية الجودة فقط إلى
              السوق الهندية.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ما المعيار الذي ينطبق على الأنابيب غير الملحومة؟
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. كم تستغرق عملية الشهادة؟</strong>
              <br />
              عادة 40-60 يوماً للمصنع الهندي وحوالي 120 يوماً للمصنع الأجنبي،
              اعتماداً على عبء الاختبار وجدولة التفتيش.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ما الاختبارات المطلوبة؟</strong>
              <br />
              التحليل الكيميائي واختبار الشد والصلابة والضغط الهيدروستاتيكي وNDT
              والتسطح والتوسيع والفحوصات الأبعاد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. هل يمكن للشركات الأجنبية التقدم بطلب للحصول على شهادة BIS؟
              </strong>
              <br />
              نعم، من خلال مخطط FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ماذا لو فشل المنتج في الاختبار؟</strong>
              <br />
              يجب تصحيحه وإعادة اختباره؛ لن تصدر BIS الرخصة حتى يتم تحقيق
              الامتثال الكامل.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ما الوثائق المطلوبة؟</strong>
              <br />
              رخصة المصنع وقائمة الآلات ومعدات الاختبار والرسومات ووثائق مراقبة
              الجودة وشهادات المواد الخام، إلخ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل وضع علامة ISI إلزامي؟</strong>
              <br />
              نعم. من غير القانوني بيع الأنابيب غير الملحومة دون إظهار علامة
              ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل يُسمح بدرجات متعددة في رخصة واحدة؟</strong>
              <br />
              نعم، إذا تم إنتاجها باستخدام نفس المنشأة والعملية (خاضعة لموافقة
              BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. كم تبلغ مدة صلاحية رخصة BIS؟</strong>
              <br />
              1-2 سنة، قابلة للتجديد إلى ما لا نهاية.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للأنابيب والأنابيب غير الملحومة - IS 17875:2022 PDF"
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
                أفضل مستشار الشهادات في الهند
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
                alt="شعار EPRCertificate"
                title="شعار EPRCertificate"
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
                alt="شعار ISIMark"
                title="شعار ISIMark"
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
