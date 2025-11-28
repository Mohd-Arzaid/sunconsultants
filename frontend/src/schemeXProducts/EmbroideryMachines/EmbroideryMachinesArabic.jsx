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
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";

const EmbroideryMachinesArabic = () => {
  return (
    <div className="relative w-full">
      <EmbroideryMachinesMetaTags />
      <EmbroideryMachinesBreadcrumb />
      <EmbroideryMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default EmbroideryMachinesArabic;

const EmbroideryMachinesMetaTags = () => {
  const title = "شهادة BIS المخطط X لآلات التطريز";
  const description =
    "شهادة BIS المخطط X لآلات التطريز، يضمن المصنعون أن منتجاتهم متوافقة قانونياً، متفوقة تقنياً، وموثوقة من قبل العملاء";
  const keywords =
    "شهادة BIS لآلات التطريز, شهادة BIS المخطط X لآلات التطريز, شهادة المخطط X لآلات التطريز, BIS لآلات التطريز, OTR لآلات التطريز";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "شهادة BIS المخطط X لآلات التطريز في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لآلات التطريز في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const EmbroideryMachinesBreadcrumb = () => {
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
                    شهادة BIS لآلات التطريز
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

const EmbroideryMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لآلات التطريز
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="شهادة BIS المخطط X لآلات التطريز"
            title="ترخيص BIS المخطط X لآلات التطريز"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          قطاع التطريز هو جزء مهم من صناعة النسيج والملابس الهندية التي تنتج
          أقمشة ذات قيمة مضافة للموضة والمنزل والتصدير. آلات التطريز متعددة
          الرؤوس المحوسبة أو الآلات الصناعية ضرورية للحصول على جودة عالية في
          منتجات التطريز لأنها توفر الكفاءة والدقة في التطريز.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان السلامة والاستقرار والأداء، فرض BIS (مكتب المعايير الهندية)
          شهادة إلزامية لآلات التطريز بموجب مخطط الشهادة X من BIS. يضمن هذا أن
          فقط الآلات التي تتوافق مع المعايير الهندية مسموح لها بالدخول إلى السوق
          الهندي.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          في هذه المقالة، سنناقش أهمية موافقة BIS المخطط X لآلات التطريز،
          اللوائح بموجب OTR (أمر اللائحة الفنية الشاملة) لآلات التطريز، وعملية
          الحصول على ترخيص BIS لآلات التطريز.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS لآلات التطريز
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم آلات التطريز في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>مصانع الملابس والمنسوجات</li>
          <li>
            إنتاج المنسوجات المنزلية (الستائر، أغطية الأسرة، أكياس الوسائد)
          </li>
          <li>التطريز المخصص وبيوت الأزياء</li>
          <li>مصانع النسيج الموجهة للتصدير</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          المخاطر بدون BIS لآلات التطريز هي:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>جودة خياطة رديئة وخيوط مقطوعة.</li>
          <li>توقف ميكانيكي مفرط للآلة</li>
          <li>مخاطر السلامة في البيئة الصناعية</li>
          <li>الاستبعاد من السوق المحلية والتصدير</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          علامة BIS لآلات التطريز هي ضمان للعملاء أن منتجك قد تم اختباره بشكل
          صارم وتم اعتماده وفقاً لجميع الإرشادات المطلوبة من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لآلات التطريز؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الإطار لشهادة BIS المخطط X لآلات التطريز يعتمد على المعايير المذكورة
          بموجب لوائح تقييم المطابقة BIS، 2018 (التي تم تطويرها للامتثال في
          إدارة الجودة بين موردي المعدات الصناعية).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          شهادة المخطط X لآلات التطريز: الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>إلزامي للمصنعين الهنود والأجانب</li>
          <li>يتضمن الاختبار وفحص السلامة والتحقق من الكفاءة</li>
          <li>زيارات المصنع الروتينية وتدقيق الجودة مطلوبة</li>
          <li>
            يسمح بوضع علامة BIS بموجب ترخيص لآلات التطريز للمنتجات المعتمدة
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR لآلات التطريز
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قدمت وزارة الصناعات الثقيلة أمر اللائحة الفنية الشاملة (OTR) 2024
          لآلات التطريز الذي يجعل الشهادة إلزامية لجميع الآلات المشمولة في فئة
          آلات التطريز.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يجب على جميع المصنعين والمستوردين الحصول على ترخيص BIS
          لآلات التطريز التي سيتم بيعها أو استيرادها في الهند بحلول 1 سبتمبر
          2026 لتجنب الغرامات أو الملاحقة القضائية. بعد ذلك، لا يمكن تداول أو
          استخدام آلات التطريز غير المعتمدة للأغراض التجارية في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لآلات التطريز
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            سلامة وموثوقية المنتج: الآلات القابلة للاعتماد تؤدي وفقاً للمعايير
            المتوقعة والسلامة.
          </li>
          <li>
            قبول السوق: ترخيص BIS لآلات التطريز إلزامي للمناقصات الحكومية
            واتفاقيات الكمية.
          </li>
          <li>
            ثقة المشترين: آلات التطريز تحمل علامة BIS التي تؤكد الجودة
            ومعاييرها.
          </li>
          <li>
            الامتثال التنظيمي: الامتثال لـ OTR لآلات التطريز وعدم التعرض
            للغرامات.
          </li>
          <li>
            مزايا التصدير: المشترون الهنود يحصلون على راحة البال مع الآلات
            المعتمدة والشركات الدولية تحصل على وصول أسهل إلى الهند.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع آلات التطريز بموجب مخطط شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة المخطط X لآلات التطريز تنطبق على:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>آلات التطريز متعددة الرؤوس</li>
          <li>التطريز المحوسب الذي يعمل بالآلة</li>
          <li>آلات التطريز برأس واحد</li>
          <li>آلات لتطريز غرزة السلسلة</li>
          <li>آلات التطريز Schiffli</li>
          <li>معدات تطريز النسيج المتخصصة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          يمكن لكل فئة أن تلتزم بمعايير IS ذات الصلة (رمز IS)، مثل IS 17361
          (الجزء 1): 2020 / ISO 11111 (الجزء 1): 2016 (متطلبات سلامة آلات النسيج
          الجزء 1 المتطلبات العامة). يجب أن تلتزم جميعها بكل منها وفقاً لرمز IS
          للتصميم والمتانة والسلامة والاقتصاد في التشغيل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لآلات التطريز
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            تحديد المعيار ذي الصلة: البحث عن رمز IS ذي الصلة لنموذج آلة التطريز
            الخاصة بك.
          </li>
          <li>
            اختبار المنتج: يتم اختبار الآلة في مختبر معتمد من BIS للسلامة
            والأداء.
          </li>
          <li>تفتيش المصنع: يأتي مدققو BIS إلى المصنع لتقييم مراقبة الجودة.</li>
          <li>
            الوثائق والطلب: توفير BIS بالتقارير الفنية والدليل ووثائق الجودة.
          </li>
          <li>
            ترخيص BIS لآلات التطريز: بعد القبول، سيكون لدى المصنعين خيار وضع
            علامة BIS على منتجاتهم.
          </li>
          <li>
            الامتثال المستمر: التفتيش الروتيني وإعادة الاختبار يضمنان الامتثال
            المستمر.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          عواقب عدم وجود شهادة BIS لآلات التطريز بموجب OTR لآلات التطريز
          اعتباراً من 1 سبتمبر 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>قيود على بيع/استيراد الآلات غير المعتمدة</li>
          <li>غرامات وعقوبات ومصادرة محتملة للمنتجات</li>
          <li>عدم الأهلية للعقود الحكومية والتصدير الكبير</li>
          <li>سمعة العلامة التجارية ستتضرر لفترة طويلة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تطبيق شهادة BIS المخطط X لآلات التطريز في OTR لآلات التطريز (2024) هو
          خطوة مهمة لقطاع النسيج والتطريز الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          من منظور مصنعي ومستوردي آلات التطريز للحصول على تسجيل BIS لآلات
          التطريز ووضع علامة BIS لآلات التطريز ليس فقط امتثالاً للمتطلبات
          القانونية بل أيضاً لدعم استثنائي لجودة المنتج وثقة السوق والميزة
          التنافسية لصناعة النسيج في الهند المتزايدة باستمرار.
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
