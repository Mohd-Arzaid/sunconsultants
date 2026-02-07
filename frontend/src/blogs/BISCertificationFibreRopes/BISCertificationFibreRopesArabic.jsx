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

const BISCertificationFibreRopeArabic = () => {
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

export default BISCertificationFibreRopeArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لحبال الألياف - البولي إيثيلين | IS 8674:2013 ترخيص BIS";
  const ogTitle =
    "شهادة BIS لحبال الألياف - البولي إيثيلين - IS 8674:2013 دليل";
  const twitterTitle =
    "ترخيص BIS لحبال الألياف - البولي إيثيلين | IS 8674:2013";
  const metaDescription =
    "احصل على شهادة BIS لحبال الألياف - البولي إيثيلين بموجب IS 8674:2013. الإجراءات، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لحبال الألياف - البولي إيثيلين بموجب IS 8674:2013. اعرف الإجراءات، التكلفة، المستندات، الاختبارات وفوائد ترخيص BIS.";
  const twitterDescription =
    "التقدم بطلب للحصول على شهادة BIS لحبال الألياف - البولي إيثيلين بموجب IS 8674:2013. تعلم إجراءات BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لحبال الألياف - البولي إيثيلين، ترخيص BIS لحبال الألياف - البولي إيثيلين، IS 8674:2013، شهادة BIS لحبال الألياف - البولي إيثيلين";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/fibre-ropes-polyethylene-8674-arabic";
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
                    شهادة BIS لحبال الألياف – البولي إيثيلين – IS
                    8674:2013
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
          شهادة BIS لحبال الألياف – البولي إيثيلين – دليل شامل لـ IS
          8674:2013
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="BIS License for Fibre Ropes - Polyethylene"
            alt="BIS Certificate for Fibre Ropes - Polyethylene - IS 8674:2013 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          حبال الألياف من البولي إيثيلين تستخدم على نطاق واسع في جميع أنحاء الهند في العمليات البحرية، والصيد، والموانئ، والزراعة، والبناء، والخدمات اللوجستية، والنقل، والأنشطة الصناعية العامة. طبيعتها الخفيفة، ونسبة القوة إلى الوزن العالية، ومقاومتها للرطوبة، والمواد الكيميائية، والتآكل تجعلها مثالية للبيئات الصعبة. ومع ذلك، عندما تفشل حبال الألياف تحت الحمل بسبب الجودة الرديئة أو التصنيع دون المستوى المطلوب، يمكن أن تكون العواقب وخيمة - تتراوح من تلف المعدات إلى إصابات خطيرة وحتى فقدان الأرواح.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان السلامة، والجودة الموحدة، وموثوقية الأداء، جعلت حكومة الهند شهادة BIS لحبال الألياف - البولي إيثيلين إلزامية بموجب IS 8674:2013. يجب على أي مصنع أو مورد يورد حبال الألياف من البولي إيثيلين في السوق الهندية الحصول على شهادة BIS صالحة لحبال الألياف - البولي إيثيلين. بدون هذه الشهادة، يعتبر المنتج غير متوافق وقد يواجه عقوبات قانونية، أو مصادرة، أو حظر من البيع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          هذه الصفحة التفصيلية للمنتج مكتوبة للمصنعين والموردين والمصدرين والتجار والموزعين وموردي البحرية ومقاولي البنية التحتية وبائعي التجارة الإلكترونية. تشرح الإطار الكامل لشهادة BIS لحبال الألياف - البولي إيثيلين، بما في ذلك متطلبات المعيار، وإجراءات الاختبار، والتوثيق، والتكاليف، والجداول الزمنية، ومسؤوليات الامتثال. إذا كنت تخطط للحصول على ترخيص BIS لـ حبال الألياف - البولي إيثيلين، سيساعدك هذا الدليل على التنقل في العملية بوضوح وثقة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم مطابقة المنتجات تديره هيئة المعايير الهندية (BIS)، السلطة الوطنية للمعايير في الهند. BIS هو اختصار لهيئة المعايير الهندية، التي أنشئت بموجب قانون BIS لعام 2016.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معنى شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          معنى شهادة BIS يشير إلى الاعتراف الرسمي بأن المنتج يتوافق مع معيار هندي محدد (IS) ويلبي المتطلبات الموصوفة المتعلقة بالسلامة والقوة والمتانة والأداء. يخضع المنتج المعتمد من BIS للاختبار في مختبرات معترف بها من BIS والتقييم من خلال فحص المصنع وعمليات تدقيق الجودة.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          علامة ISI وعلامة شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المنتجات المعتمدة بموجب BIS تحمل علامة شهادة BIS، المعروفة باسم علامة ISI، مع رقم ترخيص فريد. علامة BIS تضمن للمشترين والمفتشين والسلطات التنظيمية أن المنتج يتوافق مع معايير BIS المطبقة.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا توجد BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS موجودة ل:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية المستخدمين من المنتجات غير الآمنة وغير المناسبة</li>
          <li>ضمان الاتساق والموثوقية في التصنيع</li>
          <li>فرض اللوائح الحكومية من خلال إشعارات BIS</li>
          <li>تعزيز الثقة والجودة والتجارة العادلة في السوق الهندي</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معيار BIS المطبق لحبال الألياف – البولي إيثيلين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – شرح المعيار الهندي
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار الهندي المطبق على هذا المنتج هو IS 8674:2013، بعنوان &quot;حبال الألياف — البولي إيثيلين — المواصفات&quot;. يحدد هذا المعيار متطلبات حبال الألياف من البولي إيثيلين المعدة للتطبيقات العامة والصناعية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي المعيار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التصنيف والتصنيف لحبال الألياف من البولي إيثيلين</li>
          <li>متطلبات المواد الخام وخصائص الألياف</li>
          <li>قطر الحبل والكثافة الخطية والحدود المسموح بها</li>
          <li>حد الحمل الأدنى للكسر ومتطلبات القوة</li>
          <li>أحكام العلامة والتغليف والتعبئة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نية السلامة والأداء والاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يهدف IS 8674:2013 إلى ضمان أن حبال الألياف من البولي إيثيلين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تقدم قوة شد متسقة</li>
          <li>تعمل بشكل موثوق تحت الأحمال الثابتة والديناميكية</li>
          <li>تقاوم الرطوبة والعفن والتعرض للمواد الكيميائية</li>
          <li>آمنة لعمليات الرفع والسحب والربط والربط</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الامتثال لـ IS 8674:2013 إلزامي لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود لحبال الألياف من البولي إيثيلين</li>
          <li>الموردين الذين يجلبون حبال البولي إيثيلين إلى الهند</li>
          <li>المصنعين الأجانب الذين يبيعون من خلال الكيانات الهندية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لحبال الألياف – البولي إيثيلين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. مخاطر سلامة المستهلك والعامل
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          حبال الألياف من البولي إيثيلين تُستخدم بشكل متكرر في العمليات التي تتطلب تحمل الأحمال والعمليات الحرجة. الحبال غير المناسبة قد تنكسر فجأة، مما يؤدي إلى حوادث وإصابات وتلف المعدات وخسائر مالية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. الامتثال الحكومي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بموجب إشعارات BIS ولوائح مراقبة الجودة، يجب أن تكون حبال الألياف المغطاة بموجب IS 8674:2013 معتمدة من BIS قبل البيع أو التوريد أو التوزيع في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. الآثار القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بيع حبال الألياف من البولي إيثيلين بدون شهادة BIS يمكن أن يؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة البضائع</li>
          <li>عقوبات مالية</li>
          <li>إلغاء العقود والمناقصات</li>
          <li>المقاضاة بموجب قانون BIS لعام 2016</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS لحبال الألياف – البولي إيثيلين تحسن قبول السوق، وتبني ثقة المشتري، وتمكن المشاركة في مشاريع الحكومة، ووحدات الخدمة العامة، والبحرية، والبنية التحتية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          إجراءات شهادة BIS خطوة بخطوة لحبال الألياف – البولي إيثيلين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          قابلية التطبيق وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الخطوة الأولى هي التأكد من أن المنتج يقع تحت IS
          8674:2013، بما في ذلك بناء الحبل، نطاق القطر، والتطبيق
          المقصود.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          إجراءات التقديم عبر الإنترنت لـ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين تقديم طلب BIS من خلال بوابة التقديم عبر الإنترنت لـ BIS. يتضمن الطلب:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المنتج والنموذج</li>
          <li>معلومات وحدة التصنيع</li>
          <li>معيار BIS المطبق</li>
          <li>تفاصيل مراقبة الجودة والاختبار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          هذا يبدأ عملية تسجيل شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          هيكل الرسوم والتكاليف
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تكلفة شهادة BIS تشمل بشكل عام:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم التقديم</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم فحص المصنع</li>
          <li>رسوم الترخيص</li>
          <li>رسوم العلامة السنوية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          التكلفة الإجمالية لشهادة BIS تعتمد على متغيرات الحبل،
          نطاقات القطر، ونطاق الاختبار.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينات المنتج (اختبارات مفصلة حسب المعيار)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم اختبار عينات من حبال الألياف من البولي إيثيلين في مختبرات معترف بها من BIS
          بشكل صارم وفقاً لـ IS 8674:2013.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فحص المصنع والتدقيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقوم مسؤولو BIS بإجراء تدقيق للمصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع والضوابط</li>
          <li>إجراءات فحص المواد الخام</li>
          <li>فحوص الجودة أثناء العملية</li>
          <li>مرافق الاختبار والمعايرة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح ترخيص BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بعد الاختبار والفحص الناجحين، تمنح BIS ترخيص هيئة المعايير الهندية،
          مما يسمح باستخدام علامة ISI على حبال الألياف من البولي إيثيلين المعتمدة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الشهادة، يجب على حاملي الترخيص:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحفاظ على الجودة المتسقة</li>
          <li>إجراء الاختبارات الروتينية</li>
          <li>السماح بعمليات التفتيش والمراقبة</li>
          <li>تجديد ترخيص BIS بشكل دوري</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق ترخيص BIS وفقاً لـ IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يطبق ترخيص BIS على حبال الألياف من البولي إيثيلين المعدة لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>العمليات البحرية والصيد</li>
          <li>الموانئ والشحن والخدمات اللوجستية</li>
          <li>الزراعة والاستخدام العام</li>
          <li>التطبيقات الصناعية والتجارية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          النطاق محدود بحبال المطابقة لمواصفات IS 8674:2013.
        </p>
        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار وفقاً لـ IS 8674:2013
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          الاختبارات الإلزامية تشمل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>قياس القطر والكثافة الخطية</li>
          <li>اختبار حمل الكسر وقوة الشد</li>
          <li>اختبار الاستطالة</li>
          <li>التحقق من البناء واللف</li>
          <li>الفحص البصري وجودة التشطيب</li>
          <li>الامتثال للعلامة والتسمية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب إجراء جميع الاختبارات فقط في مختبرات معترف بها من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          جودة المواد الخام غير المتسقة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: استخدام ألياف البولي إيثيلين من درجة خاضعة للرقابة وموردين معتمدين.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فشل الاختبارات
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: إجراء اختبار مسبق داخلي وتحسين اتساق العملية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أخطاء التوثيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الحل: إعداد مستندات دقيقة وكاملة قبل التقديم لـ BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للمصنعين والموردين
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الامتثال مع اللوائح الهندية</li>
          <li>تقليل مخاطر العقوبات والمصادرات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الفوائد التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الأهلية لعقود الحكومة والوحدات الحكومية والبحرية</li>
          <li>تحسين القبول من قبل المشترين الصناعيين</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد العلامة التجارية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الثقة من خلال علامة شهادة BIS</li>
          <li>تعزيز مصداقية العلامة التجارية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          توسع السوق
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الوصول إلى الأسواق المنظمة المحلية والموجهة للتصدير</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عقوبات عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          الفشل في الامتثال لمتطلبات BIS يمكن أن يؤدي إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عقوبات مالية باهظة</li>
          <li>مصادرة المنتجات غير المتوافقة</li>
          <li>قيود الاستيراد والبيع</li>
          <li>مقاضاة قانونية</li>
          <li>حظر دائم من السوق</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS لحبال الألياف – البولي إيثيلين؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود</li>
          <li>الموردين</li>
          <li>المصنعين الأجانب</li>
          <li>التجار والموزعين</li>
          <li>بائعي التجارة الإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على أي كيان يضع حبال الألياف من البولي إيثيلين في السوق الهندي
          ضمان الامتثال لـ BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخاتمة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لحبال الألياف – البولي إيثيلين بموجب IS
          8674:2013 هو ضرورة قانونية وميزة استراتيجية للشركات
          التي تعمل في الهند. شهادة BIS لحبال الألياف –
          البولي إيثيلين تضمن سلامة المنتج، والقوة، والموثوقية بينما
          تحمي المستخدمين وتعزز مصداقية العلامة التجارية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصنعون والموردون الذين يحصلون على ترخيص BIS صالح لـ حبال الألياف – البولي إيثيلين يمكن الوصول بثقة
          إلى الأسواق المنظمة، والمشاركة في العقود ذات القيمة العالية، وتجنب
          المخاطر القانونية. مع التحضير المناسب، والتوثيق الدقيق، و
          الإرشاد الخبير، تصبح عملية شهادة BIS سلسة،
          وفعالة، ومفيدة جداً للنمو طويل الأجل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لحبال الألياف – البولي إيثيلين
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س1. هل شهادة BIS إلزامية لحبال الألياف من البولي إيثيلين في
              الهند؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، شهادة BIS بموجب IS 8674:2013 إلزامية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س2. ما هو الاسم الكامل لـ BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              هيئة المعايير الهندية.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س3. هل يمكن بيع حبال البولي إيثيلين بدون شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا، الحبال غير المعتمدة غير قانونية للبيع في الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س11. ماذا يحدث إذا فشل اختبار المنتج؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              مطلوب إجراء تصحيحي وإعادة الاختبار.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س12. هل المختبرات المعترف بها من BIS إلزامية؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، فقط المختبرات المعتمدة من BIS مقبولة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س13. هل يمكن للمصنعين الأجانب التقديم مباشرة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، من خلال ممثل هندي معتمد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س14. هل حبال الصيد مشمولة تحت هذا المعيار؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، إذا كانت تتوافق مع IS 8674:2013.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              س15. ماذا تعني شهادة BIS للمشترين؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              تضمن السلامة، والقوة، والجودة المتسقة.
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadArabic />
        <FaqAuthorArabic questionNumber={4} />
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
                أفضل مستشارعي شهادات في الهند
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
              علامة ISI (ترخيص BIS) للمصنعين الأجانب
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
                alt="إدارة نفايات البلاستيك"
                title="إدارة نفايات البلاستيك"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادات EPR لإدارة نفايات البلاستيك
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
              شهادات EPR
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
              شهادات LMPC
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


