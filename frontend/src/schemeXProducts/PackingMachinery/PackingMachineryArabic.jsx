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

const PackingMachineryArabic = () => {
  return (
    <div className="relative w-full">
      <PackingMachineryMetaTags />

      <PackingMachineryBreadcrumb />
      <PackingMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default PackingMachineryArabic;

const PackingMachineryMetaTags = () => {
  const title = "شهادة BIS المخطط X لآلات التعبئة والتغليف وتجميعاتها";
  const description =
    "شهادة BIS المخطط X لجميع أنواع الآلات للعبء والإغلاق واللصق ووضع العلامات على الزجاجات والتعبئة أو التغليف، و/أو تجميعاتها، التجميعات الفرعية، ومكوناتها، هي خطوة مهمة نحو توحيد السلامة والجودة في قطاع التصنيع الهندي";
  const keywords =
    "شهادة BIS لآلات التعبئة والتغليف, شهادة BIS المخطط X لآلات التعبئة والتغليف, شهادة المخطط X لآلات التعبئة والتغليف, BIS لآلات التعبئة والتغليف, OTR لآلات التعبئة والتغليف";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X لآلات التعبئة والتغليف في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لآلات التعبئة والتغليف في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const PackingMachineryBreadcrumb = () => {
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
                    شهادة BIS لآلات التعبئة والتغليف
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

const PackingMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const PackingMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لآلات التعبئة والتغليف
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="ترخيص BIS المخطط X لآلات التعبئة والتغليف"
            alt="شهادة BIS المخطط X لآلات التعبئة والتغليف"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          آلات التعبئة والتغليف مهمة جداً للصناعات في قطاعات الأغذية والمشروبات
          والأدوية والكيماويات والسلع الاستهلاكية واللوجستيات. تضمن هذه الآلات
          التعبئة والتغليف المناسب والآمن والجيد للمنتجات.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان السلامة والموثوقية والربحية، جعل BIS (مكتب المعايير الهندية)
          شهادة BIS المخطط X لآلات التعبئة والتغليف إلزامية. تُمنح هذه الشهادة
          لضمان أن جميع آلات التعبئة والتغليف سواء المباعة في الهند أو المستوردة
          إلى الهند، تلتزم بمعايير الجودة الوطنية المعمول بها.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          في هذه المقالة، سنشرح أهمية شهادة المخطط X لآلات التعبئة والتغليف، دور
          OTR لآلات التعبئة والتغليف وعملية الحصول على ترخيص BIS وعلامة معيار
          BIS لآلات التعبئة والتغليف.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS لآلات التعبئة والتغليف
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          آلات التعبئة والتغليف تُستخدم في جميع الأعمال للأمور التالية:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>تعبئة وتغليف الأغذية والمشروبات</li>
          <li>الأدوية والمنتجات الطبية</li>
          <li>التعبئة والتغليف المستخدمة في الصناعات الكيماوية والصناعية</li>
          <li>المنتجات الاستهلاكية والتجزئة</li>
          <li>حلول التعبئة والتغليف لسوق التصدير</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون وجود BIS لآلات التعبئة والتغليف: المنتجات غير المعتمدة من BIS
          يمكن أن تسبب:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>فشل في التعبئة والتغليف، سلامة المنتج والتلوث</li>
          <li>مخاطر السلامة في قطاعات الأغذية والأدوية</li>
          <li>عمليات غير فعالة وتوقف</li>
          <li>فشل في اتباع قواعد المشتريات الحكومية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          علامة BIS على آلات التعبئة والتغليف تضمن للمشترين الجودة والسلامة وطول
          العمر.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لآلات التعبئة والتغليف؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          آلات التعبئة والتغليف هي الجزء الثاني من شهادة المخطط X، بموجب لوائح
          تقييم المطابقة BIS 2018 والامتثال لهذا إلزامي للمصنعين الهنود
          والأجانب.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          شهادة المخطط X لآلات التعبئة والتغليف: الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>مناسب لأي آلة تعبئة وتغليف (يدوية، شبه آلية وآلية)</li>
          <li>يتطلب اختبار المنتج ومدقق للمصنع ومراقبة الجودة</li>
          <li>إلزامي للبيع والاستيراد في الهند</li>
          <li>
            يمنح الإذن لاستخدام علامة BIS لآلات التعبئة والتغليف على المعدات
            المعتمدة
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR لآلات التعبئة والتغليف
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أعلنت وزارة الصناعات الثقيلة OTR لآلات التعبئة والتغليف في عام 2024،
          والذي يتطلب شهادة المخطط X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يجب أن تكون جميع آلات التعبئة والتغليف مزودة بشهادة
          BIS المخطط X ويجب أن تحصل جميع آلات التعبئة والتغليف على ترخيص BIS
          لآلات التعبئة والتغليف بحلول 1 سبتمبر 2026. "سيوقف هذا آلات التعبئة
          والتغليف غير المعتمدة من البيع أو الاستيراد أو المشاركة في المناقصات
          في جميع أنحاء البلاد،" كما قال مسؤول حكومي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لآلات التعبئة والتغليف
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            السلامة والنظافة: آلات التعبئة والتغليف المعتمدة أيضاً تتجنب مشاكل
            التلوث (الأغذية والأدوية).
          </li>
          <li>ضمان الجودة: يحافظ على عمل الآلات بسلاسة وكفاءة.</li>
          <li>
            الوصول إلى السوق: ترخيص BIS لآلات التعبئة والتغليف عادة ما يكون
            مطلوباً للمشتريات من قبل الهيئات العامة.
          </li>
          <li>
            ثقة المستهلك: علامة BIS لآلات التعبئة والتغليف تعطي معلومات للعملاء
            حول جودة المنتج والمتانة.
          </li>
          <li>
            الميزة التنافسية: العلامات التجارية/المصنعون المعتمدون من BIS مفضلون
            في السوق المنظمة وللمناقصات الحكومية.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع آلات التعبئة والتغليف بموجب مخطط شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          اعتماد المخطط X لآلات التعبئة والتغليف يغطي أنواعاً مختلفة مثل:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>آلات تعبئة وتغليف الأغذية والمشروبات</li>
          <li>آلات تعبئة وتغليف البثور والشرائط للأدوية</li>
          <li>آلات التغليف واللصق والملء</li>
          <li>آلات الكرتون ووضع العلامات</li>
          <li>أنظمة التعبئة والتغليف بالتفريغ والانكماش</li>
          <li>آلات التعبئة والتغليف السائبة والصناعية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن يلبي كل نوع من آلات التعبئة والتغليف متطلبات المعايير الهندية
          ذات الصلة (رمز IS) بما في ذلك IS 16819:2018/ISO 12100:2010 (سلامة
          الآلات المبادئ العامة للتصميم - تقييم المخاطر وتقليل المخاطر).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          يجب أن يلبي نوع الآلة المعايير الهندية ذات الصلة للأداء والسلامة
          والنظافة والكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لآلات التعبئة والتغليف
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            تحديد المعيار ذي الصلة: الرجوع إلى رمز IS ذي الصلة لنوع آلة التعبئة
            والتغليف الخاصة بك.
          </li>
          <li>
            اختبار المنتج: إجراء اختبارات الأداء والسلامة المطلوبة وفقاً لمعايير
            الصناعة، في مختبر معتمد من BIS.
          </li>
          <li>
            تفتيش المصنع: فحص نظام ضمان الجودة في موقع الإنتاج من قبل مسؤولي
            BIS.
          </li>
          <li>
            الطلب والوثائق: توفير المتطلبات الفنية ودليل الجودة وتقرير الاختبار.
          </li>
          <li>
            إصدار ترخيص BIS لآلات التعبئة والتغليف: يمكنك وضع علامة BIS بعد
            الموافقة.
          </li>
          <li>
            الامتثال المستمر: يفحص BIS ويجري تدقيق غير مجدول للامتثال للمعايير.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصنعون الذين لا يملكون جميع نماذج آلات التعبئة والتغليف المعتمدة
          بشهادة BIS لآلات التعبئة والتغليف بحلول 1 سبتمبر 2026 يواجهون مخاطر:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر البيع/الاستيراد لآلات التعبئة والتغليف غير المعتمدة</li>
          <li>مصادرة المعدات غير الممتثلة والعقوبات المالية</li>
          <li>سيجعلك هذا غير مؤهل للمناقصات الحكومية أو شركات القطاع العام</li>
          <li>تأثر قيمة العلامة التجارية بشكل دائم في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تطبيق شهادة BIS المخطط X لآلات التعبئة والتغليف في OTR 2024 هو خطوة
          لجلب السلامة والكفاءة والجودة إلى قطاع الصناعة والتعبئة والتغليف في
          الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          المصنعون والمستوردون والمصدرون يستفيدون من هذه العملية من خلال الحصول
          على شهادة BIS لآلات التعبئة والتغليف، والحصول على ترخيص BIS لآلات
          التعبئة والتغليف، ووضع علامة BIS لآلات التعبئة والتغليف على منتجاتهم،
          مما يوضح أن منتجاتهم تلبي نظام تنظيم السوق المحلي ومتطلبات العملاء.
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
