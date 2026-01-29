import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
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

const BISCertificateForBatteryOperatedToothbrushArabic = () => {
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

export default BISCertificateForBatteryOperatedToothbrushArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية | IS 302 (الجزء 1):2024 ترخيص BIS";
  const ogTitle =
    "شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية – دليل IS 302 (الجزء 1):2024";
  const twitterTitle =
    "ترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية | IS 302 (الجزء 1):2024";
  const metaDescription =
    "احصل على شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية بموجب IS 302 (الجزء 1):2024. العملية، المستندات، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لفرشاة الأسنان التي تعمل بالبطارية وفقاً لـ IS 302 (الجزء 1):2024. تعرف على العملية، التكلفة، المستندات، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية بموجب IS 302 (الجزء 1):2024. تعلم عملية BIS، المستندات، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية، ترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية، IS 302 (الجزء 1):2024، شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/firsha-asnan-bi-batariya-is-302";
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
                    شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية – IS 302
                    (الجزء 1):2024
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
          شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية – دليل شامل لـ IS
          302 (الجزء 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedTootbrush.png"
            title="ترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية"
            alt="شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية - IS 302 (الجزء 1):2024 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهد سوق العناية بالفم في الهند نمواً سريعاً في السنوات الأخيرة، حيث أصبحت فرش الأسنان التي تعمل بالبطارية خياراً مفضلاً بين المستهلكين الذين يسعون لتحسين النظافة والراحة وإزالة البلاك بشكل فعال. تُستخدم هذه الفرش على نطاق واسع في المنازل والفنادق والمستشفيات وعدة السفر وروتينات العناية الشخصية، خاصة من قبل الأطفال وكبار السن والأشخاص ذوي الحركة المحدودة في اليد. نظراً لأن فرش الأسنان التي تعمل بالبطارية تجمع بين المكونات الكهربائية والبطاريات والتعرض للرطوبة والاتصال المباشر مع جسم الإنسان، فإن الامتثال للسلامة والجودة أمر بالغ الأهمية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن أن يؤدي التصميم غير السليم أو التصنيع دون المستوى المطلوب لفرشاة الأسنان التي تعمل بالبطارية إلى صدمة كهربائية أو تسرب البطارية أو ارتفاع درجة الحرارة أو مخاطر الحريق أو الإصابة الميكانيكية. لحماية المستهلكين وتنظيم جودة المنتج، تفرض حكومة الهند أن تمتثل هذه الأجهزة الكهربائية للعناية الشخصية لمعايير السلامة الهندية. لذلك، فإن الحصول على شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية بموجب IS 302 (الجزء 1):2024 هو متطلب قانوني إلزامي قبل تصنيع أو استيراد أو بيع أو توزيع هذه المنتجات في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تؤكد شهادة BIS الصالحة لفرشاة الأسنان التي تعمل بالبطارية أن المنتج قد تم اختباره والموافقة عليه للسلامة الكهربائية والعزل والقوة الميكانيكية ومقاومة الرطوبة وحماية المستخدم بشكل عام. تم كتابة هذا الدليل التفصيلي للمصنعين والمصنعين الأجانب والمستوردين وأصحاب العلامات التجارية والتجار والموزعين وبائعي التجارة الإلكترونية ومهنيي الامتثال الذين يريدون فهماً كاملاً لترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية، بما في ذلك عملية الشهادة ومتطلبات الاختبار والمستندات والتكلفة والجداول الزمنية والعقوبات والالتزامات بعد الشهادة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم المطابقة الرسمي في الهند الذي تديره هيئة المعايير الهندية. تعمل BIS تحت إشراف وزارة شؤون المستهلك وهي مسؤولة عن تطوير المعايير الهندية وضمان أن المنتجات المباعة في السوق الهندي تلبي معايير السلامة والجودة والموثوقية المقررة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يشير معنى شهادة BIS إلى تفويض تصدره BIS يسمح للمصنع أو المستورد ببيع منتج يتوافق مع معيار هندي محدد (IS). تسمح هذه الشهادة أيضاً باستخدام علامة شهادة BIS (علامة ISI) على المنتجات المعتمدة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          توجد شهادة BIS من أجل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            حماية المستهلكين من المنتجات الكهربائية والإلكترونية غير الآمنة
          </li>
          <li>تقليل مخاطر الصدمة الكهربائية والحريق والمخاطر الميكانيكية</li>
          <li>ضمان جودة موحدة عبر السلع المحلية والمستوردة</li>
          <li>تمكين إنفاذ اللوائح ومراقبة السوق</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح علامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشير علامة BIS (علامة ISI) على فرشاة الأسنان التي تعمل بالبطارية إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المنتج يتوافق مع IS 302 (الجزء 1):2024</li>
          <li>العزل الكهربائي والبناء آمنان</li>
          <li>الجهاز معتمد قانونياً للبيع في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معيار BIS المعمول به لفرشاة الأسنان التي تعمل بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (الجزء 1):2024 – سلامة الأجهزة الكهربائية المنزلية والمماثلة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المعمول به لفرش الأسنان التي تعمل بالبطارية هو IS
          302 (الجزء 1):2024، والذي يحدد متطلبات السلامة العامة للأجهزة الكهربائية المخصصة للاستخدام المنزلي والمماثل، بما في ذلك أجهزة العناية الشخصية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 302 (الجزء 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي هذا المعيار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>السلامة الكهربائية للأجهزة التي تعمل بالبطاريات</li>
          <li>الحماية من الصدمة الكهربائية وتسلل الرطوبة</li>
          <li>السلامة الميكانيكية ومتطلبات البناء</li>
          <li>التسخين والتشغيل غير الطبيعي وموثوقية المكونات</li>
          <li>العزل ومسافات الزحف والخلوص</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          السلامة والأداء والغرض من الاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يهدف IS 302 (الجزء 1):2024 إلى ضمان أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            تعمل فرش الأسنان التي تعمل بالبطارية بأمان في ظل الظروف العادية وعند الأعطال
          </li>
          <li>
            المستخدمون محميون من المخاطر الكهربائية والحرارية والميكانيكية
          </li>
          <li>البطاريات والدوائر الداخلية لا ترتفع درجة حرارتها أو تتسرب</li>
          <li>المنتج يبقى آمناً أثناء الاستخدام اليومي المتكرر</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود لفرش الأسنان التي تعمل بالبطارية</li>
          <li>المستوردون والموزعون</li>
          <li>المصنعون الأجانب الذين يوردون إلى الهند</li>
          <li>أصحاب العلامات التجارية وبائعي العلامات الخاصة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لفرشاة الأسنان التي تعمل بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مخاطر سلامة المستهلك
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          قد تؤدي فرش الأسنان غير المعتمدة إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>صدمة كهربائية بسبب العزل السيئ</li>
          <li>تسرب البطارية أو انفجارها</li>
          <li>ارتفاع درجة الحرارة أثناء الاستخدام المطول</li>
          <li>إصابة ميكانيكية من آليات الاهتزاز المعطلة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال الحكومي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بموجب إشعارات BIS المعمول بها ولوائح السلامة الكهربائية، تخضع فرش الأسنان التي تعمل بالبطارية لشهادة BIS الإلزامية. بيع مثل هذه المنتجات بدون شهادة هو انتهاك للقانون الهندي.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يمكن أن يؤدي عدم الامتثال إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتجات</li>
          <li>عقوبات مالية ثقيلة</li>
          <li>حظر الاستيراد ورفض الجمارك</li>
          <li>الملاحقة القانونية بموجب قانون BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يساعد ترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية الشركات على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>بناء ثقة واطمئنان المستهلكين</li>
          <li>تمكين الإدراج في منصات التجارة الإلكترونية</li>
          <li>التأهل لسلاسل التوريد المؤسسية والتجزئة</li>
          <li>تعزيز سمعة العلامة التجارية على المدى الطويل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لفرشاة الأسنان التي تعمل بالبطارية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          القابلية للتطبيق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن الخطوة الأولى التأكيد على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>فئة المنتج: فرشاة الأسنان التي تعمل بالبطارية</li>
          <li>مصدر الطاقة ونوع البطارية</li>
          <li>المعيار المعمول به: IS 302 (الجزء 1):2024</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية التقديم الإلكتروني لشهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين أو المستوردين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التسجيل على بوابة BIS</li>
          <li>تقديم طلب BIS عبر الإنترنت</li>
          <li>رفع المستندات التقنية والقانونية</li>
          <li>دفع الرسوم الحكومية المعمول بها</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُعرف هذه الخطوة عادة باسم التقديم الإلكتروني لـ BIS أو تسجيل شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الرسوم وهيكل التكلفة لترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن تكلفة شهادة BIS عادة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب والمعالجة</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص والعلامة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تعتمد التكلفة الإجمالية لشهادة BIS على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تعقيد المنتج</li>
          <li>تصميم البطارية والغلاف</li>
          <li>موقع التصنيع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينات المنتج (وفقاً لـ IS 302 الجزء 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم اختبار العينات في المختبرات المعترف بها من BIS لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحماية من الصدمة الكهربائية</li>
          <li>مقاومة الرطوبة</li>
          <li>التسخين والتشغيل غير الطبيعي</li>
          <li>مقاومة العزل</li>
          <li>قوة العزل الكهربائي</li>
          <li>القوة الميكانيكية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش المصنع والتدقيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتحقق مسؤولو BIS من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع وخط التجميع</li>
          <li>أنظمة مراقبة الجودة</li>
          <li>مصادر البطاريات وضوابط السلامة</li>
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
          <li>يُخول للمصنع وضع علامة ISI</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الموافقة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يتم إجراء تدقيقات المراقبة</li>
          <li>قد يتم اختبار عينات السوق</li>
          <li>تجديد الترخيص الدوري إلزامي</li>
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
          <li>مخططات الدائرة الكهربائية</li>
          <li>مواصفات البطارية وورقات البيانات</li>
          <li>قائمة المكونات</li>
          <li>دليل المستخدم وفن العلامات</li>
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
          يُشار إلى هذه مجتمعة باسم مستندات شهادة BIS أو مستندات شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 302 (الجزء 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الاختبارات الإلزامية:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الحماية من الصدمة الكهربائية</li>
          <li>اختبار مقاومة الرطوبة</li>
          <li>اختبار التسخين والتشغيل غير الطبيعي</li>
          <li>اختبار مقاومة العزل</li>
          <li>اختبار قوة العزل الكهربائي</li>
          <li>اختبار القوة الميكانيكية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب إجراء جميع الاختبارات فقط في المختبرات المعترف بها من BIS.
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
          <li>الفشل في اختبارات الرطوبة أو العزل</li>
          <li>تصميم غلاف البطارية غير الآمن</li>
          <li>ارتفاع درجة الحرارة أثناء التشغيل غير الطبيعي</li>
          <li>المستندات غير مكتملة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الحلول وأفضل الممارسات
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إجراء اختبار الامتثال المسبق</li>
          <li>استخدام البطاريات والمكونات المعتمدة</li>
          <li>ضمان الإغلاق والعزل المناسبين</li>
          <li>الاستعانة بمستشاري BIS ذوي الخبرة</li>
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
          <li>الامتثال لقوانين السلامة الهندية</li>
          <li>الحماية من العقوبات والمصادرات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الوصول إلى السوق على مستوى البلاد</li>
          <li>القبول من قبل تجار التجزئة ومنصات التجارة الإلكترونية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحسن علامة BIS ثقة العملاء</li>
          <li>التمييز عن المنتجات غير المعتمدة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسيع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>دخول أسهل إلى أسواق التجزئة المنظمة والرعاية الصحية</li>
          <li>استدامة الأعمال على المدى الطويل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يمكن أن يؤدي عدم الامتثال لمتطلبات BIS إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عقوبات مالية ثقيلة</li>
          <li>استدعاء المنتجات</li>
          <li>قيود الاستيراد</li>
          <li>الملاحقة القانونية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب (مع ممثل هندي معتمد)</li>
          <li>التجار وأصحاب العلامات التجارية</li>
          <li>بائعون التجارة الإلكترونية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم خدمات استشارية شاملة لشهادة BIS من البداية إلى النهاية، بما في ذلك:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تقييم قابلية تطبيق المنتج</li>
          <li>إعداد المستندات والتحقق منها</li>
          <li>التنسيق مع المختبرات المعترف بها من BIS</li>
          <li>دعم تفتيش المصنع والتدقيق</li>
          <li>موافقات أسرع مع تقليل الاستفسارات</li>
          <li>الامتثال بعد الشهادة والتجديدات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن خبرتنا في الأجهزة الكهربائية وأجهزة العناية الشخصية رحلة شهادة سلسة ومتوافقة ومحددة بوقت.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية بموجب IS
          302 (الجزء 1):2024 هو متطلب قانوني وسلامة حاسم لدخول واستدامة السوق الهندي. تضمن شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية السلامة الكهربائية وحماية الرطوبة وثقة المستخدم، بينما يعزز ترخيص BIS لفرشاة الأسنان التي تعمل بالبطارية مصداقية العلامة التجارية والامتثال التنظيمي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين والمستوردين، لا يمنع الامتثال في الوقت المناسب لـ BIS العقوبات فحسب، بل يفتح أيضاً الوصول إلى تجارة التجزئة المنظمة وقنوات الرعاية الصحية ومنصات التجارة الإلكترونية. مع التوجيه الخبير ودعم الامتثال المنظم، تصبح عملية شهادة BIS فعالة وموثوقة ومتوافقة بالكامل مع المعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لفرشاة الأسنان التي تعمل بالبطارية
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س1. هل شهادة BIS إلزامية لفرش الأسنان التي تعمل بالبطارية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، إنها إلزامية بموجب IS 302 (الجزء 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س2. ما هو الاسم الكامل لشهادة BIS؟
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
              عادة 6-8 أسابيع للمصنعين الهنود و12-16 أسبوعاً للمصنعين الأجانب.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س4. ما هي تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تعتمد على تصميم المنتج ونطاق الاختبار.
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
              نعم، وضع علامة ISI إلزامي بعد الشهادة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س7. هل اختبارات مقاومة الرطوبة مطلوبة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، إنها حاسمة لسلامة فرشاة الأسنان.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س8. هل تفتيش المصنع إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تجري BIS تدقيقاً للمصنع.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س9. هل يمكن تغطية نماذج متعددة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، بموافقة الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س10. هل التقديم الإلكتروني لـ BIS إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يتم تقديم جميع الطلبات عبر الإنترنت.
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
              س12. ماذا يحدث إذا تم بيع منتجات غير معتمدة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              قد تتبع العقوبات والمصادرة والإجراءات القانونية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س13. هل التجديد مطلوب؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تتطلب تراخيص BIS التجديد الدوري.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س14. هل تحسن شهادة BIS المبيعات؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تزيد بشكل كبير من ثقة المستهلكين.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س15. هل يمكن للمستشارين تقليل وقت الموافقة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يساعد المستشارون ذوو الخبرة في تجنب التأخيرات.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={1} />
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
                India&apos;s Best Certificate Consultant
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
