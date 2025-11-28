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

const SwitchgearandControlgearEquipmentabove1000VoltsArabic = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentabove1000VoltsMetaTags />
      <SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb />
      <SwitchgearandControlgearEquipmentabove1000VoltsMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentabove1000VoltsArabic;

const SwitchgearandControlgearEquipmentabove1000VoltsMetaTags = () => {
  const title =
    "شهادة BIS المخطط X لمعدات Switchgear و Controlgear فوق 1000 فولت";
  const description =
    "شهادة BIS المخطط X لمعدات switchgear و controlgear فوق 1000V. استكشف الامتثال الإلزامي والاختبار وخطوات العملية والفوائد والمزيد.";
  const keywords =
    "شهادة BIS لمعدات Switchgear و Controlgear، شهادة BIS المخطط X لمعدات Switchgear و Controlgear، شهادة المخطط X لمعدات Switchgear و Controlgear، BIS لمعدات Switchgear و Controlgear، OTR لمعدات Switchgear و Controlgear";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X لمعدات Switchgear و Controlgear فوق 1000 فولت في الهند | دليل شامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لمعدات Switchgear و Controlgear في الهند. افهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">منتجات المخطط X</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS لمعدات Switchgear و Controlgear فوق 1000 فولت
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

const SwitchgearandControlgearEquipmentabove1000VoltsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS المخطط X لمعدات Switchgear و Controlgear فوق 1000 فولت
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
            alt="شهادة BIS المخطط X لمعدات Switchgear و Controlgear فوق 1000 فولت"
            title="ترخيص BIS لمعدات switchgear التي تتجاوز 1000 فولت"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          تندمج معدات switchgear و controlgear عالية الجهد بسلاسة مع توزيع
          الطاقة والعمليات التشغيلية في مسعى كهربة الحضارة المعاصرة المتزايدة.
          تم تصميم هذه الأنظمة لضمان التحكم الآمن وتوزيع الكهرباء لأكثر من 1000
          فولت وهي لا تقدر بثمن في المناطق الحرجة لطلب الطاقة لأنظمة إدارة
          المخاطر واستمرارية الطاقة. مع زيادة الاهتمام بالسلامة وتوحيد المعدات،
          اتخذ مكتب المعايير الهندي (BIS) خطوات ملموسة للسيطرة على الصناعة من
          خلال شهادة المخطط X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          جعلت اللائحة الفنية الشاملة (OTR)، التي تعد جزءًا من هذا التشريع،
          شهادة المخطط X إلزامية لجميع مصنعي معدات الجهد العالي المخطط
          لاستخدامها في قطاعات الطاقة والصناعة. سيخضع هؤلاء المصنعون، المحليون
          والدوليون، لهذه اللائحة اعتبارًا من 1 سبتمبر 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          تغطي هذه المدونة جميع المعلومات اللازمة المتعلقة بشهادة المخطط X لجميع
          أنواع معدات switchgear و controlgear التي تعمل بجهد يتجاوز 1000 فولت
          و(أو) مجموعاتها ومجموعاتها الفرعية ومكوناتها، وأهميتها ونطاقها وعملية
          الشهادة والفوائد والوثائق المطلوبة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا شهادة BIS لمعدات Switchgear و Controlgear مهمة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم معدات switchgear و controlgear عالية الجهد على نطاق واسع في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>مرافق توليد الطاقة</li>
          <li>محطات النقل والتوزيع</li>
          <li>أنظمة كهربة المترو والسكك الحديدية</li>
          <li>النفط والغاز والصناعات الثقيلة</li>
          <li>
            متنزهات الطاقة المتجددة (الطاقة الشمسية والرياح والطاقة الكهرومائية)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون الشهادة المناسبة، تشمل المخاطر:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>مخاطر الحرائق وحوادث القوس الكهربائي</li>
          <li>
            تلف المعدات مما يؤدي إلى انقطاع التيار الكهربائي على نطاق واسع
          </li>
          <li>انتهاك معايير السلامة الهندية</li>
          <li>عدم الأهلية للعقود الحكومية والخاصة واسعة النطاق</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة المخطط X هي ضمان أن الأنظمة الحرجة معزولة وفقًا لأكثر معايير
          السلامة والجودة صرامة. ينطبق هذا أيضًا على المجموعات (BS8867) المتعلقة
          بهذا النوع من المعدات التي تعمل بجهد أعلى من 1000V حسب الحاجة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لمعدات switchgear و controlgear؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم إنشاء شهادة BIS المخطط X بموجب لائحة تقييم الامتثال BIS لعام 2018،
          لضمان أن الاختبار والتفتيش والترخيص لمعدات switchgear و controlgear
          مطلوبة قبل أن يتمكن المنتج من دخول السوق الهندي.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>إلزامي للشركات الهندية والأجنبية</li>
          <li>
            يغطي جميع معدات switchgear و controlgear عالية الجهد عند أو أعلى من
            1000 فولت
          </li>
          <li>يتطلب الاختبار في مختبرات معتمدة من BIS</li>
          <li>يشمل تدقيق المصنع ونظام الجودة</li>
          <li>يوفر ترخيص BIS لاستخدام علامة المعيار على المعدات المحددة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR لمعدات Switchgear و Controlgear
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قدمت وزارة الصناعات الثقيلة اللائحة الفنية الشاملة (OTR) لمعدات
          Switchgear و Controlgear في عام 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يجب أن يكون جميع المصنعين والمستوردين معتمدين من BIS
          بحلول 1 سبتمبر 2026. بعد هذا التاريخ، لا يمكن تصنيع أو بيع أو استيراد
          المعدات غير المعتمدة من النوع في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          فوائد شهادة BIS لمعدات Switchgear و Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            السلامة الكهربائية – الحماية من الأعطال والأقواس الكهربائية وتلف
            النظام.
          </li>
          <li>الامتثال التنظيمي – متطلب إلزامي لدخول السوق بموجب OTR.</li>
          <li>
            الوصول إلى السوق – المنتجات المعتمدة مؤهلة لمشاريع البنية التحتية
            العامة والخاصة.
          </li>
          <li>
            المصداقية والثقة – تعكس علامة المعيار BIS الامتثال للجودة
            والموثوقية.
          </li>
          <li>
            الكفاءة التشغيلية – ضمان أداء شبكة الجهد العالي القوية وغير المنقطعة
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          إجراءات شهادة BIS لمعدات Switchgear و Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>تحديد المعيار – اكتشف المعيار الهندي ذي الصلة لمنتجك.</li>
          <li>
            اختبار المنتج – قم بإجراء جميع اختبارات الأداء والسلامة المطلوبة في
            مختبرات معتمدة من BIS.
          </li>
          <li>
            فحص المصنع – يتحقق مدققو BIS من العمليات وضوابط الجودة في المصنع.
          </li>
          <li>
            تقديم الوثائق – قدم تقارير الاختبار؛ مواصفات المعيار؛ سجلات
            الامتثال.
          </li>
          <li>منح الترخيص: سيقوم BIS بمنح الترخيص لاستخدام علامة المعيار.</li>
          <li>
            المراقبة بعد الشهادة: التفتيش المستمر والفحص المفاجئ يضمن الامتثال.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تنطبق هذه العملية بنفس الطريقة على جميع أنواع معدات switchgear و
          controlgear التي تعمل بجهد يتجاوز 1000 فولت و(أو) مجموعاتها ومجموعاتها
          الفرعية ومكوناتها.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          عقوبات عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          قد يؤدي الفشل في الحصول على الشهادة بموجب نموذج OTR إلى:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر بيع أو استيراد أو تصنيع المعدات غير المعتمدة</li>
          <li>مصادرة البضائع والغرامات الثقيلة</li>
          <li>الحظر من المناقصات والعقود الحكومية</li>
          <li>الضرر بالسمعة والمالية: ضرر كبير بالسمعة والمالية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          تضمن شهادة BIS المخطط X، المطلوبة بموجب OTR 2024، أن البنية التحتية
          للطاقة عالية الجهد في الهند مبنية على معدات آمنة وموثوقة وممتثلة.
          بالنسبة للمصنعين والمستوردين، فإن تحقيق الشهادة لا يتعلق فقط بامتثال
          اللوائح—بل يتعلق بكسب ثقة العملاء وفتح فرص السوق ودعم نمو الطاقة
          والبنية التحتية في الهند.
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
              شهادة شهادة EPR
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
              شهادة شهادة LMPC
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
