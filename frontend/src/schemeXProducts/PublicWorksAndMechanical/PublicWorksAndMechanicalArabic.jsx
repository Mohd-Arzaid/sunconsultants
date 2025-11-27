import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterArabic from "@/components/manual/Footer/FooterArabic";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const PublicWorksAndMechanicalArabic = () => {
  return (
    <div className="relative w-full">
      <PublicWorksAndMechanicalMetaTags />
      <PublicWorksAndMechanicalBreadcrumb />
      <PublicWorksAndMechanicalMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default PublicWorksAndMechanicalArabic;

const PublicWorksAndMechanicalMetaTags = () => {
  const title = "شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية";
  const description =
    "شهادة BIS المخطط X للآلات للأشغال العامة والبناء، والمعدات الميكانيكية هي خطوة استراتيجية لضمان سلامة الصناعة وجودة موحدة والوصول إلى السوق.";
  const keywords =
    "شهادة BIS للأشغال العامة والمعدات الميكانيكية, شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية, شهادة المخطط X للأشغال العامة والمعدات الميكانيكية, BIS للأشغال العامة والمعدات الميكانيكية, OTR للأشغال العامة والمعدات الميكانيكية";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const PublicWorksAndMechanicalBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">الصفحة الرئيسية</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/SchemeX-Products">منتجات المخطط X</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS للأشغال العامة والمعدات الميكانيكية
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

const PublicWorksAndMechanicalMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للأشغال العامة والمعدات الميكانيكية
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية"
            title="ترخيص BIS لآلات الأشغال العامة والبناء"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          مع التطور السريع للبنية التحتية وتحديث الصناعة، أصبح الأداء والآلات
          الموثوقة ضرورية. تلعب الآلات والمعدات الميكانيكية دوراً محورياً في
          الأعمال الهندسية والتصنيع وبناء الأشغال العامة والصناعات المتخصصة. من
          المهم جداً الحفاظ على جودتها وملاءمتها. هذا التزام قانوني فرضه مكتب
          المعايير الهندية (BIS) بموجب شهادة المخطط X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          لتنفيذ وتبسيط إنفاذ المعايير الإلزامية في فئات مختلفة من الآلات
          الصناعية، أصدرت وزارة الصناعات الثقيلة أمر اللائحة الفنية الشاملة
          (OTR)، 2024. ينص هذا الأمر على أن جميع أنواع الآلات للأشغال العامة
          وبناء المباني والمعدات الميكانيكية الأخرى، بما في ذلك تلك غير المذكورة
          صراحة في أقسام فرعية أخرى من الفصل 84، مطلوبة للحصول على شهادة BIS
          بموجب المخطط X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          في هذه المقالة، سنناقش جميع أنواع الآلات والمعدات المستخدمة للأشغال
          العامة وبناء البنية التحتية، المعدات الميكانيكية بوظائف فردية،
          تجميعاتها، التجميعات الفرعية، أهمية ونطاق المخطط الذي يتم الحديث عنه
          كثيراً، عملية الشهادة والمزايا، والوثائق التي يجب تقديمها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS للأشغال العامة والمعدات الميكانيكية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          هذه الآلات تُستخدم عادة في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>بناء البنية التحتية العامة (الطرق، الجسور، إمدادات المياه)</li>
          <li>مشاريع الهندسة والبناء الثقيل</li>
          <li>خدمات المدينة والمرافق</li>
          <li>المرافق الصناعية التي تتطلب رفع أو معالجة الآلات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون BIS للأشغال العامة والمعدات الميكانيكية، تشمل المخاطر:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>تلف الآلات أثناء المشاريع المهمة الجارية</li>
          <li>اعتبارات سلامة العمال والمستخدمين النهائيين</li>
          <li>تكاليف صيانة وتوقف أعلى</li>
          <li>المنع من المشاريع الممولة من الحكومة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة المخطط X للأشغال العامة والمعدات الميكانيكية تضمن أن الآلات تعمل
          بأمان وكفاءة وبحد أدنى من مخاطر الفشل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية هي بموجب لوائح
          تقييم المطابقة BIS، 2018. إنها وسيلة محددة وأداة تنظيمية لضمان أن
          الآلات الصناعية والبنية التحتية تتوافق مع المعايير الهندية.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الجوانب الرئيسية لمؤهلات المخطط X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ينطبق على المصنعين الهنود والأجانب</li>
          <li>يشمل الآلات للأشغال العامة والمرافق</li>
          <li>الاختبار في مختبر معترف به من BIS</li>
          <li>تدقيق المصنع وتفتيش الامتثال الروتيني مدرج في العملية</li>
          <li>يمنح الحق في استخدام علامة معيار BIS بعد الشهادة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR للأشغال العامة والمعدات الميكانيكية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أصدرت وزارة الصناعات الثقيلة أمر اللائحة الفنية الشاملة (OTR) للأشغال
          العامة والمعدات الميكانيكية في عام 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: بحلول 1 سبتمبر 2026، يجب على جميع المصنعين والمستوردين
          الامتثال لشهادة المخطط X للأشغال العامة والمعدات الميكانيكية. بعد هذا
          التاريخ، لن يُسمح للآلات غير المسجلة بالتصنيع أو البيع أو الاستيراد في
          الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS للأشغال العامة والمعدات الميكانيكية
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            سلامة المنتج: منع الانهيار بسبب المشاكل الميكانيكية والعمليات
            الموثوقة.
          </li>
          <li>
            الامتثال التنظيمي: تلبية OTR للأشغال العامة والمعدات الميكانيكية.
          </li>
          <li>
            الميزة في السوق: الشهادة غالباً ما تكون مطلوبة للمناقصات العامة
            والمشاريع الحكومية.
          </li>
          <li>
            ثقة العملاء: الآلات المعتمدة رسمياً مفضلة من قبل بعض المشترين، لأنها
            ضمان للجودة.
          </li>
          <li>
            تقليل المسؤولية: تقليل التعرض القانوني والعلامة التجارية المحتملة مع
            المنتجات المعتمدة.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع الأشغال العامة والمعدات الميكانيكية في OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS المخطط X لشهادة الأشغال العامة والمعدات الميكانيكية يغطي المنتجات
          التالية:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>آلات صناعة وصيانة الطرق</li>
          <li>آلات الرفع الهيدروليكية واليدوية</li>
          <li>معدات الخدمات البلدية (معدات توزيع المياه، إلخ)</li>
          <li>معدات الخدمة والمعالجة الميكانيكية</li>
          <li>
            المعدات المصممة خصيصاً للاستخدام الصناعي في الأشغال العامة والخدمات
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          يجب أن تلتزم بالمعايير الهندية ذات الصلة (رمز IS)، إن أمكن، بما في ذلك
          IS 16819:2018/ISO 12100:2010 (سلامة الآلات المبادئ العامة للتصميم -
          تقييم المخاطر وتقليل المخاطر). يجب إنتاج جميع هذه الأشكال وفقاً
          للمعايير الهندية المعمول بها للسلامة والأداء والجودة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS للأشغال العامة والمعدات الميكانيكية
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>تحديد المعيار ذي الصلة: اختر رمز IS المعمول به لآلتك.</li>
          <li>
            اختبار المنتج: إجراء اختبارات الأداء والسلامة في مختبر معتمد من BIS.
          </li>
          <li>
            تفتيش المصنع: يزور مسؤولو BIS مرافق الإنتاج لضمان وجود ضوابط الجودة
            في المكان.
          </li>
          <li>الوثائق: قدم نموذج الطلب والتقارير الفنية ودليل الجودة</li>
          <li>
            إصدار الترخيص: يمنح BIS الشهادة ويسمح باستخدام علامة معيار BIS.
          </li>
          <li>
            الامتثال المستمر: هناك اختبارات وتدقيق مستمرة لضمان الامتثال
            المستمر.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          عدم الامتثال لشهادة BIS للأشغال العامة والمعدات الميكانيكية المحددة في
          OTR للأشغال العامة والمعدات الميكانيكية سيؤدي إلى:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر بيع أو استيراد الآلات غير المعتمدة</li>
          <li>غرامات ثقيلة ومصادرة المنتجات</li>
          <li>المنع من المناقصات الحكومية وعمليات العقد</li>
          <li>سمعة مشوهة بشدة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X للأشغال العامة والمعدات الميكانيكية المدعومة من OTR
          للأشغال العامة والمعدات الميكانيكية (2024)، تجعل البلاد أقرب خطوة نحو
          إنشاء مستوى موحد من الجودة والسلامة في آلات البنية التحتية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالنسبة للمصنعين والمستوردين، الحصول على شهادة المخطط X للأشغال العامة
          والمعدات الميكانيكية هو أكثر من مجرد امتثال – إنه يمثل استثماراً
          استراتيجياً.
        </p>

        <ServiceAuthorArabic />
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
                أفضل مستشاري الشهادات في الهند
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
                src={BISImage}
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
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
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
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادة EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادة LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
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
                src={ISIMarkImage}
                alt="ISIMark"
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
