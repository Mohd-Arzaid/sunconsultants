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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateElectricFenceEnergizersArabic = () => {
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

export default BISCertificateElectricFenceEnergizersArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS لمولدات السياج الكهربائي | IS 302-2-76:1999 ترخيص BIS";
  const ogTitle =
    "شهادة BIS لمولدات السياج الكهربائي – دليل IS 302-2-76:1999";
  const twitterTitle =
    "ترخيص BIS لمولدات السياج الكهربائي | IS 302-2-76:1999";
  const metaDescription =
    "احصل على شهادة BIS لمولدات السياج الكهربائي بموجب IS 302-2-76:1999. العملية، المستندات، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS لمولدات السياج الكهربائي بموجب IS 302-2-76:1999. اعرف العملية، التكلفة، المستندات، الاختبار ومزايا ترخيص BIS.";
  const twitterDescription =
    "قدم طلب شهادة BIS لمولدات السياج الكهربائي بموجب IS 302-2-76:1999. تعلم عملية BIS، المستندات، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لمولدات السياج الكهربائي، ترخيص BIS لمولدات السياج الكهربائي، IS 302-2-76:1999، شهادة BIS لمولدات السياج الكهربائي";
  const websiteUrl =
    "https://bis-certifications.com/ar/blogs/isi-products/munazzimat-siyaj-kahrabai-is-302-2-76";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "دهروف أغاروال، رئيس العمليات في Sun Certification India";

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
                    شهادة BIS لمولدات السياج الكهربائي – IS
                    302-2-76:1999
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
          شهادة BIS لمولدات السياج الكهربائي – دليل شامل لـ IS
          302-2-76:1999
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforElectricFenceEnergizers.png"
            title="ترخيص BIS لمولدات السياج الكهربائي"
            alt="شهادة BIS لمولدات السياج الكهربائي - IS 302-2-76:1999 شهادة BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          زاد الطلب على مولدات السياج الكهربائي بسرعة في جميع أنحاء الهند
          بسبب التركيز المتزايد على حماية المزارع، وإدارة الماشية، وأمن المحيط،
          والتحكم في الحياة البرية. تلعب هذه الأجهزة دورًا حاسمًا في حماية
          المحاصيل والحيوانات والممتلكات من خلال توصيل نبضات كهربائية محكومة عبر أنظمة السياج.
          ومع ذلك، نظرًا لأن مولدات السياج الكهربائي تتضمن مباشرة مخرجات كهربائية،
          وخطر التلامس البشري، ومخاطر الحريق، فإن السلامة والامتثال التنظيمي
          يصبحان غير قابلين للتفاوض.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          في الهند، تقع مولدات السياج الكهربائي ضمن نطاق شهادة BIS الإلزامية
          بموجب IS 302-2-76:1999. يجب على أي مصنع أو مستورد يخطط لبيع مولدات السياج الكهربائي
          في السوق الهندية الحصول على شهادة BIS لمولدات السياج الكهربائي قبل التسويق.
          بدون هذا الموافقة، تعتبر المنتجات غير متوافقة وغير قانونية للبيع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          هذا الدليل الشامل مصمم للمصنعين والمستوردين والعلامات التجارية الأجنبية
          والشركات الناشئة والموزعين وبائعي التجارة الإلكترونية الذين يريدون
          الوضوح حول شهادة BIS لمولدات السياج الكهربائي، بما في ذلك المتطلبات القانونية،
          والاختبار، والتوثيق، والتكلفة، والجداول الزمنية، والالتزامات الامتثالية.
          إذا كنت تخطط للتقديم للحصول على ترخيص BIS لمولدات السياج الكهربائي،
          فستوجهك هذه الصفحة خلال كل خطوة بطريقة واضحة وعملية ومركزة على الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام تقييم المطابقة للمنتجات تشغله هيئة المعايير الهندية (BIS)،
          الهيئة الوطنية للمعايير في الهند. BIS الكامل هو مكتب المعايير الهندية،
          أنشئ بموجب قانون BIS لعام 2016 لضمان الجودة والسلامة والموثوقية واتساق المنتجات المباعة في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشير شهادة BIS إلى أن المنتج يتوافق مع المعيار الهندي المطبق ويلبي معايير السلامة
          والأداء والجودة المحددة. توفر ضمانًا للمستهلكين والمنظمين بأن المنتج تم اختباره
          والتحقق منه بواسطة أنظمة معترف بها من BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          علامة ISI وعلامة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          للمنتجات الكهربائية مثل مولدات السياج الكهربائي، تمنح شهادة BIS ضمن مخطط علامة ISI.
          تشير علامة شهادة BIS (علامة ISI) المعروضة على المنتج إلى الامتثال مع معايير BIS ذات الصلة.
          بيع منتج تحمل علامة ISI بدون ترخيص BIS صالح هو جريمة معاقب عليها.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          لماذا وجود BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الهدف الأساسي من BIS هو:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>حماية سلامة المستهلك</li>
          <li>منع المنتجات دون المستوى وغير الآمنة</li>
          <li>تنسيق التصنيع الهندي مع المعايير العالمية</li>
          <li>فرض الامتثال الإلزامي من خلال إشعارات BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يحدد هذا المعيار متطلبات السلامة الخاصة لمولدات السياج الكهربائي المخصصة للاستخدام مع أنظمة السياج الكهربائي لـ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>السياج الزراعي</li>
          <li>التحكم في الماشية</li>
          <li>ردع الحياة البرية</li>
          <li>أمن المحيط</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي المولدات التي تعمل بالطاقة من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الكهرباء الرئيسية</li>
          <li>أنظمة تعمل بالبطارية</li>
          <li>مصادر رئيسية وبطاريات مجتمعة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نية السلامة والاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          المعيار مصمم لمعالجة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الحماية من الصدمة الكهربائية</li>
          <li>قيود طاقة الإخراج</li>
          <li>التحكم في مدة وتكرار النبضة</li>
          <li>مسافات العزل والتسرب</li>
          <li>مخاطر الحريق والسخونة الزائدة</li>
          <li>قوة الميكانيكية وسلامة الغلاف</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          من يجب أن يمتثل
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          الامتثال مع IS 302-2-76:1999 إلزامي لـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود</li>
          <li>مستوردي مولدات المصنعة أجنبيًا</li>
          <li>المصنعين الأجانب الذين يبيعون في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية لمولدات السياج الكهربائي
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. سلامة المستهلك والحيوان
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          مولدات السياج الكهربائي تولد نبضات عالية الجهد. التصميم غير السليم أو المخرجات الزائدة
          يمكن أن تسبب إصابات خطيرة، مخاطر الحريق، أو حوادث مميتة. شهادة BIS تضمن بقاء طاقة الإخراج ضمن حدود آمنة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. متطلب قانوني في الهند
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بموجب إشعارات BIS وقانون BIS، بيع الأجهزة الكهربائية غير المعتمدة هو أمر غير قانوني.
          قد يتم مصادرة المنتجات بدون شهادة BIS أو حظرها أو استدعاؤها.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. الامتثال التنظيمي
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          السلطات مثل الجمارك، فرق مراقبة السوق، ومنصات التجارة الإلكترونية تطلب تراخيص BIS صالحة للقائمة والتخليص الجمركي.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. فوائد السوق والعلامة التجارية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS الهند تبني الثقة، تحسن مصداقية العلامة التجارية، وتسمح بالدخول السلس إلى التجزئة المنظمة والأسواق المؤسسية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS خطوة بخطوة لمولدات السياج الكهربائي
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          القابلية وتحديد المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          الخطوة الأولى هي تأكيد تصنيف المنتج وتحديد IS 302-2-76:1999 كمعيار BIS المطبق.
          يجب أن يتوافق تصميم المنتج ومصدر الطاقة والتطبيق مع نطاق المعيار.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية التقديم عبر الإنترنت لـ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين تقديم طلب BIS عبر الإنترنت من خلال بوابة Manak Online. يتضمن الطلب:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المنتج</li>
          <li>معلومات المصنع</li>
          <li>اختيار المعيار المطبق</li>
          <li>التزام تقرير الاختبار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          هذه الخطوة تبدأ رسميًا عملية تسجيل BIS / شهادة BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          هيكل الرسوم والتكلفة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل تكلفة شهادة BIS عادةً:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم الاختبار (تعتمد على المختبر)</li>
          <li>رسوم تفتيش المصنع</li>
          <li>رسوم الترخيص</li>
          <li>رسوم العلامة السنوية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تعتمد التكلفة الإجمالية لشهادة BIS على تعقيد المنتج وعدد النماذج ومتطلبات الاختبار.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          اختبار عينة المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم اختبار عينات المنتج في مختبرات معترف بها من BIS بموجب IS 302-2-76:1999.
          يضمن الاختبار الامتثال مع جميع معلمات السلامة والأداء.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تفتيش المصنع والتدقيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقوم مسؤولو BIS بإجراء تدقيق في المصنع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع</li>
          <li>أنظمة مراقبة الجودة</li>
          <li>مرافق الاختبار الداخلية</li>
          <li>الاتساق مع المستندات المقدمة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منح ترخيص BIS وعلامة ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          عند نجاح الاختبار والتفتيش، تمنح BIS ترخيص BIS لمولدات السياج الكهربائي،
          مما يسمح باستخدام علامة ISI مع رقم CM/L فريد.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على حاملي الترخيص:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إجراء الاختبار الروتيني</li>
          <li>الحفاظ على سجلات الإنتاج</li>
          <li>السماح بتدقيقات المراقبة</li>
          <li>تجديد الترخيص في الوقت المحدد</li>
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
          <li>إثبات تسجيل المصنع</li>
          <li>مخطط تدفق عملية التصنيع</li>
          <li>قائمة الآلات</li>
          <li>خطة مراقبة الجودة</li>
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
          <li>ورقة مواصفات المنتج</li>
          <li>مخططات الدائرة</li>
          <li>دليل المستخدم وتعليمات السلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج طلب BIS</li>
          <li>تقرير الاختبار من مختبر معترف به من BIS</li>
          <li>رسالة التفويض</li>
          <li>التعهدات والإقرارات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          هذه تشكل مجموعة كاملة من مستندات شهادة BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار بموجب IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الاختبارات الإلزامية تشمل:
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
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحماية ضد الصدمة الكهربائية
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تيار التسرب والقوة الكهربائية في درجة حرارة التشغيل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التقييم
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  مدخل الطاقة والتيار
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  11
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التسخين
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تيار التسرب والقوة الكهربائية في درجة حرارة التشغيل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تيار التسرب والقوة الكهربائية
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء جميع الاختبارات فقط في مختبرات معترف بها من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. فشل الاختبار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>السبب:</strong> تصميم غير متوافق أو معلمات مخرجات زائدة
          <br />
          <strong>الحل:</strong> اختبار الامتثال المسبق ومراجعة التصميم
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. أخطاء التوثيق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>السبب:</strong> عمليات تقديم غير مكتملة أو غير متسقة
          <br />
          <strong>الحل:</strong> التحقق من المستندات بقيادة الخبراء
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. تأخيرات تدقيق المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>السبب:</strong> أنظمة جودة غير مستعدة
          <br />
          <strong>الحل:</strong> استعداد التدقيق والتفتيشات الوهمية
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للمصنعين والمستوردين
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الترخيص القانوني للبيع في الهند</li>
          <li>الوصول إلى المشترين الحكوميين والمؤسسيين</li>
          <li>تعزيز ثقة المستهلك</li>
          <li>تقليل مخاطر مسؤولية المنتج</li>
          <li>التوسع في التجارة الإلكترونية وسلاسل البيع بالتجزئة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عقوبات عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع مولدات السياج الكهربائي بدون شهادة BIS يمكن أن يؤدي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>غرامات مالية كبيرة</li>
          <li>مصادرة البضائع</li>
          <li>إلغاء التخليص الجمركي</li>
          <li>المقاضاة الجنائية بموجب قانون BIS</li>
          <li>حظر السوق الدائم</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج شهادة BIS لمولدات السياج الكهربائي؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المستوردون</li>
          <li>المصنعون الأجانب</li>
          <li>التجار والموزعون</li>
          <li>بائعو السوق عبر الإنترنت</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على أي شخص يضع المنتج في السوق الهندية ضمان الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لاستشارات شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم استشارات شهادة BIS من البداية إلى النهاية، بما في ذلك:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحديد المعيار والتحقق من القابلية</li>
          <li>تقديم طلب BIS</li>
          <li>تنسيق المختبر ودعم الاختبار</li>
          <li>استعداد تدقيق المصنع</li>
          <li>إدارة الامتثال بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          خبرتنا تضمن موافقات أسرع، عدم وجود رفضات، وطمأنينة امتثالية كاملة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخاتمة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الحصول على شهادة BIS لمولدات السياج الكهربائي بموجب IS 302-2-76:1999
          ليس مجرد إجراء تنظيمي - إنها خطوة حاسمة نحو ضمان السلامة والامتثال القانوني
          ونجاح السوق على المدى الطويل. مع التنفيذ الصارم لإشعارات BIS والزيادة
          في فحص المنتجات الكهربائية، يجب على المصنعين والمستوردين إعطاء الأولوية
          لشهادة BIS لمولدات السياج الكهربائي لتجنب العقوبات وبناء ثقة المستهلك.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إذا كنت تخطط للتقديم للحصول على ترخيص BIS لمولدات السياج الكهربائي،
          يمكن أن يقلل التوجيه الاحترافي بشكل كبير من الجداول الزمنية والتكاليف ومخاطر الامتثال.
          كن متوافقًا، كن تنافسيًا، وتأكد من أن منتجاتك تلبي أعلى معايير السلامة في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لمولدات السياج الكهربائي
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س1. هل شهادة BIS إلزامية لمولدات السياج الكهربائي في الهند؟
              </strong>
              <br />
              نعم، شهادة BIS بموجب IS 302-2-76:1999 إلزامية.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س2. ما هو الشكل الكامل لشهادة BIS؟</strong>
              <br />
              شهادة مكتب المعايير الهندية.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س3. هل يمكنني استيراد مولدات السياج الكهربائي بدون ترخيص BIS؟
              </strong>
              <br />
              لا، الاستيراد بدون شهادة BIS ممنوع.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س4. ما هي تكلفة ترخيص BIS؟</strong>
              <br />
              التكلفة تختلف حسب الاختبار وحجم المصنع وعدد النماذج.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س5. كم من الوقت تستغرق عملية شهادة BIS؟
              </strong>
              <br />
              عادة 6-10 أسابيع إذا كانت المستندات والاختبار مكتملة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س6. هل علامة ISI إلزامية؟</strong>
              <br />
              نعم، وضع علامة ISI إلزامي بعد الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س7. هل يمكن للشركات الناشئة التقديم لشهادة BIS؟</strong>
              <br />
              نعم، يمكن للشركات الناشئة التقديم إذا كان إعداد التصنيع متوافقًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س8. هل شهادة BIS مطلوبة للمولدات التي تعمل بالبطارية؟
              </strong>
              <br />
              نعم، مصدر الطاقة لا يعفي من الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س9. هل يمكن لترخيص واحد تغطية نماذج متعددة؟</strong>
              <br />
              نعم، إذا كانت النماذج متشابهة تقنيًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س10. ماذا يحدث إذا فشل منتجي في الاختبار؟</strong>
              <br />
              تعديل التصميم وإعادة الاختبار مطلوبة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س11. هل شهادة BIS صالحة إلى الأبد؟</strong>
              <br />
              لا، يجب تجديدها بشكل دوري.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س12. هل تدقيقات BIS إلزامية بعد الشهادة؟
              </strong>
              <br />
              نعم، يتم إجراء تدقيقات المراقبة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س13. هل يمكن للمصنعين الأجانب التقديم مباشرة؟</strong>
              <br />
              نعم، من خلال ممثل هندي معتمد (AIR).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>س14. هل عملية التقديم عبر الإنترنت لـ BIS متاحة؟</strong>
              <br />
              نعم، يتم تقديم طلبات BIS عبر الإنترنت.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                س15. ماذا تعني شهادة BIS للمستهلكين؟
              </strong>
              <br />
              تضمن السلامة والجودة والامتثال التنظيمي.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-302-2-76-Sun-Certifications-India.pdf"
            title="شهادة BIS لمولدات السياج الكهربائي - IS 302-2-76:1999 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
                alt="شعار ISI"
                title="شعار ISI"
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
