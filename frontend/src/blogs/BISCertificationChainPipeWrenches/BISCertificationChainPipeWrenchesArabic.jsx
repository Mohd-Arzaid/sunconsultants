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

const BISCertificationChainPipeWrenchesArabic = () => {
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

export default BISCertificationChainPipeWrenchesArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لمفاتيح الأنابيب بالسلسلة | ترخيص BIS IS 4123:1982";
  const ogTitle =
    "شهادة BIS لمفاتيح الأنابيب بالسلسلة - دليل IS 4123:1982";
  const twitterTitle = "ترخيص BIS لمفاتيح الأنابيب بالسلسلة | IS 4123:1982";
  const metaDescription =
    "احصل على شهادة BIS لمفاتيح الأنابيب بالسلسلة بموجب IS 4123:1982. العملية والمستندات والاختبارات والتكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لمفاتيح الأنابيب بالسلسلة وفقاً لـ IS 4123:1982. تعرف على العملية والتكلفة والمستندات والاختبارات وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS لمفاتيح الأنابيب بالسلسلة بموجب IS 4123:1982. تعلم عملية BIS والمستندات والاختبارات والرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لمفاتيح الأنابيب بالسلسلة، ترخيص BIS لمفاتيح الأنابيب بالسلسلة، IS 4123:1982، شهادة BIS لمفاتيح الأنابيب بالسلسلة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/mafatih-anabib-silsila-is-4123";
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
                    <Link to="/Blogs">أحدث المقالات</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS لمفاتيح الأنابيب بالسلسلة – IS 4123:1982
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
          شهادة BIS لمفاتيح الأنابيب بالسلسلة – دليل شامل لـ IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="ترخيص BIS لمفاتيح الأنابيب بالسلسلة"
            alt="شهادة BIS لمفاتيح الأنابيب بالسلسلة - IS 4123:1982 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          مفاتيح الأنابيب بالسلسلة هي أدوات يدوية متخصصة للأعمال الشاقة تُستخدم
          لإمساك وشد وفك الأنابيب ذات القطر الكبير والتركيبات الدائرية والمكونات
          الأسطوانية حيث تكون مفاتيح الأنابيب التقليدية غير فعالة. تُستخدم هذه
          الأدوات على نطاق واسع في خطوط أنابيب النفط والغاز والمصافي ومحطات الطاقة
          والوحدات البتروكيماوية وأحواض بناء السفن ومشاريع إمدادات المياه وورش
          الهندسة الثقيلة ومواقع البناء التحتي. تعتمد آلية الإمساك على سلسلة مقسّاة
          تلتف حول الأنبوب، مما يسمح بتوزيع الحمل بشكل موحد وتطبيق عزم دوران عالٍ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          نظراً لاستخدام مفاتيح الأنابيب بالسلسلة في العمليات عالية الإجهاد
          والحرجة للسلامة، فإن أي عيب في جودة المواد أو قوة السلسلة أو تصميم المقبض
          أو آلية القفل يمكن أن يؤدي إلى الانزلاق أو الإفلات المفاجئ أو فشل الأداة
          أو إصابات خطيرة أو تلف المعدات وتوقف مكلف. لمنع مثل هذه المخاطر ولتوحيد
          الجودة عبر السوق، تفرض حكومة الهند الامتثال للمعايير الهندية لهذه الأدوات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لذلك، يعد الحصول على شهادة BIS لمفاتيح الأنابيب بالسلسلة بموجب IS
          4123:1982 متطلباً قانونياً إلزامياً للمصنعين والمستوردين الذين يبيعون
          مفاتيح الأنابيب بالسلسلة في الهند. تؤكد شهادة BIS الصالحة لمفاتيح
          الأنابيب بالسلسلة أن المنتج قد تم اختباره والموافقة عليه من حيث القوة
          وأداء الإمساك والدقة البعدية والسلامة الشاملة وفقاً للمعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام مطابقة المنتجات وضمان الجودة الذي يديره مكتب المعايير
          الهندية، السلطة الوطنية المسؤولة عن التوحيد القياسي والاختبار وإصدار
          الشهادات للمنتجات في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يشير معنى شهادة BIS إلى الموافقة الرسمية الصادرة عن BIS تؤكد أن المنتج
          يتوافق مع المعيار الهندي (IS) ذي الصلة ويتم تصنيعه ضمن نظام جودة خاضع
          للرقابة. تسمح هذه الشهادة للشركة المصنعة باستخدام علامة ISI على المنتج
          المعتمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          توجد شهادة BIS من أجل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية المستخدمين من المنتجات غير الآمنة ودون المستوى</li>
          <li>ضمان جودة متسقة عبر الشركات المصنعة</li>
          <li>دعم تنفيذ لوائح مراقبة الجودة</li>
          <li>تعزيز الثقة في السلع الصناعية الهندية والمستوردة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح علامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          علامة شهادة BIS، المعروفة باسم علامة ISI، هي رمز مرئي للامتثال. بالنسبة
          لمفاتيح الأنابيب بالسلسلة، تؤكد علامة ISI للمشترين أن:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الأداة تتوافق مع IS 4123:1982</li>
          <li>يمكن للسلسلة والمقبض تحمل الأحمال المحددة</li>
          <li>المنتج معتمد قانونياً للبيع في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معيار BIS المطبق لمفاتيح الأنابيب بالسلسلة
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – مواصفات مفاتيح الأنابيب بالسلسلة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المطبق لمفاتيح الأنابيب بالسلسلة هو IS 4123:1982، الذي
          يضع متطلبات التصميم والمواد والأبعاد والأداء والاختبار لمفاتيح الأنابيب
          بالسلسلة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي هذا المعيار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مفاتيح الأنابيب بالسلسلة بأحجام وسعات مختلفة</li>
          <li>بناء المقبض وتجميع السلسلة</li>
          <li>مادة السلسلة وأبعاد الحلقات والقوة</li>
          <li>التفاوتات البعدية والتشطيب</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          السلامة والأداء والغرض من الاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تم تصميم IS 4123:1982 لضمان أن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>توفر السلسلة قبضة موحدة وآمنة على الأنابيب</li>
          <li>يتحمل المفتاح عزم دوران عالٍ دون فشل</li>
          <li>لا تتشوه المقابض والمفاصل تحت الحمل</li>
          <li>تعمل الأداة بأمان في التطبيقات الصناعية الثقيلة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل لترخيص BIS لمفاتيح الأنابيب
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الشركات المصنعة الهندية لمفاتيح الأنابيب بالسلسلة</li>
          <li>المستوردون والموزعون</li>
          <li>الشركات المصنعة الأجنبية التي تورد إلى الهند</li>
          <li>التجار والعلامات التجارية التي تبيع تحت علامات خاصة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لمفاتيح الأنابيب بالسلسلة
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مخاطر سلامة المستهلك ومكان العمل
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          قد تؤدي مفاتيح الأنابيب بالسلسلة غير القياسية إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>انزلاق أو كسر السلسلة</li>
          <li>إفلات مفاجئ لحمل عزم دوران عالٍ</li>
          <li>إصابات شديدة في اليد أو الذراع أو الجسم</li>
          <li>تلف خطوط الأنابيب والتركيبات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال الحكومي والتنظيمي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          وفقاً لإخطارات BIS المعمول بها ولوائح مراقبة الجودة، يجب أن تحصل مفاتيح
          الأنابيب بالسلسلة المشمولة بموجب IS 4123:1982 على شهادة BIS قبل البيع
          أو الاستيراد أو التوزيع في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          العواقب القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يمكن أن يؤدي بيع مفاتيح الأنابيب بالسلسلة غير المعتمدة إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة البضائع</li>
          <li>غرامات مالية باهظة</li>
          <li>تعليق العمليات التجارية</li>
          <li>إجراءات قانونية بموجب قانون BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يمكّن ترخيص BIS لمفاتيح الأنابيب بالسلسلة الشركات من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>بناء الثقة مع المشترين الصناعيين ومقاولي EPC</li>
          <li>التأهل لمناقصات الحكومة والقطاع العام ومشاريع البنية التحتية</li>
          <li>التنافس مع العلامات التجارية المحلية والدولية الراسخة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لمفاتيح الأنابيب بالسلسلة
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          قابلية التطبيق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن الخطوة الأولى التأكيد على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>فئة المنتج: مفاتيح الأنابيب بالسلسلة</li>
          <li>المعيار المطبق: IS 4123:1982</li>
          <li>نطاق الحجم ومتغيرات السعة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية طلب BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على الشركات المصنعة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التسجيل على بوابة BIS</li>
          <li>اختيار IS 4123:1982 في طلب BIS</li>
          <li>تحميل المستندات الفنية والقانونية المطلوبة</li>
          <li>دفع الرسوم الحكومية المطبقة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُعرف هذه العملية عادة باسم التقديم عبر الإنترنت لـ BIS أو تسجيل شهادة
          BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          هيكل الرسوم والتكلفة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن تكلفة شهادة BIS عادة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب والمعالجة</li>
          <li>رسوم اختبار العينات</li>
          <li>رسوم فحص المصنع</li>
          <li>رسوم الترخيص والتعليم</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تعتمد التكلفة الإجمالية لشهادة BIS على:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عدد أحجام المفاتيح</li>
          <li>تعقيد الاختبار</li>
          <li>موقع التصنيع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينة المنتج (وفقاً لـ IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم اختبار العينات في مختبرات معترف بها من BIS لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قوة شد السلسلة</li>
          <li>مقاومة الحمل وعزم الدوران</li>
          <li>الدقة البعدية</li>
          <li>قوة المقبض والتشطيب</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فحص ومراجعة المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجري مسؤول BIS مراجعة في الموقع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عمليات التصنيع والتجميع</li>
          <li>تصنيع السلسلة أو التحكم في المصادر</li>
          <li>نظام مراقبة الجودة</li>
          <li>مرافق الاختبار والفحص الداخلي</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح ترخيص BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الاختبار والفحص الناجح:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يصدر BIS ترخيص مكتب المعايير الهندية</li>
          <li>
            يُخوّل المصنع بوضع علامة ISI على مفاتيح الأنابيب بالسلسلة
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل التزامات ما بعد الشهادة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مراجعات مراقبة دورية</li>
          <li>اختبار عينات السوق</li>
          <li>تجديد الترخيص في الوقت المناسب</li>
          <li>الامتثال المستمر لـ IS 4123:1982</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات الشركة المصنعة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة تسجيل المصنع أو شهادة MSME</li>
          <li>مخطط تدفق عملية التصنيع</li>
          <li>قائمة الآلات ومعدات الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة تأسيس الشركة</li>
          <li>تسجيل GST</li>
          <li>ترخيص العلامة التجارية (إن وجد)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات المنتج والمواصفات</li>
          <li>تفاصيل مادة السلسلة والمعالجة الحرارية</li>
          <li>خطة مراقبة الجودة والفحص</li>
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
          تُعرف هذه مجتمعة بمستندات شهادة BIS أو وثائق شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الاختبارات الإلزامية:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار قوة شد السلسلة</li>
          <li>اختبار الحمل وعزم الدوران</li>
          <li>التحقق البعدي</li>
          <li>فحص المواد والتشطيب</li>
          <li>اختبار أداء الإمساك الوظيفي</li>
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
          <li>الفشل في اختبارات قوة السلسلة</li>
          <li>المعالجة الحرارية غير السليمة لحلقات السلسلة</li>
          <li>عدم المطابقة البعدية</li>
          <li>التوثيق غير المكتمل</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الحلول وأفضل الممارسات
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إجراء اختبار داخلي مسبق</li>
          <li>استخدام مواد خام معتمدة</li>
          <li>الحفاظ على رقابة صارمة على العملية</li>
          <li>إشراك مستشاري BIS ذوي الخبرة</li>
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
          <li>الامتثال الكامل للوائح الهندية</li>
          <li>الحماية من العقوبات وإجراءات التنفيذ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قبول أعلى من المشترين الصناعيين</li>
          <li>الأهلية لمشاريع القطاع العام والبنية التحتية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>علامة ISI تعزز المصداقية والثقة</li>
          <li>التمييز عن الموردين غير المنظمين</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسيع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>وصول أسهل إلى الأسواق الصناعية الكبيرة</li>
          <li>تحسين مصداقية التصدير</li>
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
          <li>غرامات مالية باهظة</li>
          <li>مصادرة المنتجات</li>
          <li>إلغاء التراخيص</li>
          <li>الملاحقة القانونية بموجب قانون BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج شهادة BIS لمفاتيح الأنابيب بالسلسلة؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الشركات المصنعة الهندية</li>
          <li>المستوردون</li>
          <li>الشركات المصنعة الأجنبية (مع ممثل هندي معتمد)</li>
          <li>التجار والموردون الصناعيون</li>
          <li>بائعو التجارة الإلكترونية الذين يسردون مفاتيح الأنابيب بالسلسلة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم خدمات استشارات شهادة BIS الشاملة، بما في ذلك:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تقييم قابلية التطبيق وتحليل الفجوات</li>
          <li>إعداد الوثائق والتحقق منها</li>
          <li>التنسيق مع المختبرات المعترف بها من BIS</li>
          <li>دعم فحص ومراجعة المصنع</li>
          <li>موافقات أسرع مع استفسارات أقل</li>
          <li>دعم الامتثال بعد الشهادة والتجديد</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن خبرتنا في الأدوات اليدوية الصناعية والمعدات الثقيلة رحلة شهادة BIS
          سلسة وموثوقة ومتوافقة تماماً.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لمفاتيح الأنابيب بالسلسلة بموجب IS 4123:1982 هو
          متطلب قانوني وجودة حاسم لبيع هذه الأدوات الثقيلة في الهند. تضمن شهادة
          BIS لمفاتيح الأنابيب بالسلسلة السلامة والقوة والموثوقية، بينما يعزز
          ترخيص BIS لمفاتيح الأنابيب بالسلسلة مصداقية العلامة التجارية وقبول
          السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين والمستوردين والبائعين، لا يمنع الامتثال في الوقت
          المناسب العقوبات فحسب، بل يفتح أيضاً الوصول إلى المشاريع الصناعية
          والبنية التحتية والحكومية عالية القيمة. مع التوجيه الخبير ودعم الامتثال
          المنظم، تصبح عملية شهادة BIS فعالة وقابلة للتنبؤ ومتوافقة تماماً مع
          المعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لمفاتيح الأنابيب بالسلسلة
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س1. هل شهادة BIS إلزامية لمفاتيح الأنابيب بالسلسلة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، الامتثال لـ IS 4123:1982 إلزامي في الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س2. ما هو الاسم الكامل لشهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              شهادة مكتب المعايير الهندية (Bureau of Indian Standards
              Certificate).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س3. كم تستغرق عملية شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              عادة 45-60 يوم عمل للمصنعين الهنود و90-120 يوماً للمصنعين الأجانب.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س4. ما هي تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تعتمد على نطاق حجم المنتج ونطاق الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س5. هل يمكن للمستوردين التقدم للحصول على شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، مع تفويض مناسب من الشركة المصنعة.
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
              س8. ما هي الاختبارات المطلوبة بموجب IS 4123:1982؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              اختبارات قوة السلسلة والحمل والأبعاد والتشطيب.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س9. هل فحص المصنع إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يجري BIS مراجعة في الموقع.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س10. هل يمكن تغطية أحجام متعددة تحت ترخيص واحد؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، بشرط الاختبار والموافقة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س11. ماذا يحدث إذا بيعت مفاتيح أنابيب بالسلسلة غير معتمدة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              قد تحدث عقوبات ومصادرة وإجراءات قانونية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س12. هل التقديم عبر الإنترنت لـ BIS إلزامي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يتم تقديم جميع الطلبات عبر الإنترنت.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س13. هل التجديد مطلوب لتراخيص BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، التجديد الدوري إلزامي.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س14. هل يمكن للمستشارين تقليل تأخيرات الموافقة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يساعد المستشارون المحترفون في تجنب الأخطاء.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س15. هل تحسن شهادة BIS ثقة المشتري؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، تحسن بشكل كبير الثقة في السوق.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="شهادة BIS لمفاتيح الأنابيب بالسلسلة - IS 4123:2024 PDF"
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
                alt="شعار BIS"
                title="شعار BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للشركات المصنعة الأجنبية
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
              علامة ISI (BIS) للشركات المصنعة الهندية
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
