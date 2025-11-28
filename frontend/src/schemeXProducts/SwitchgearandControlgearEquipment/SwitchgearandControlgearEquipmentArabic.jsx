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

const SwitchgearandControlgearEquipmentArabic = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentMetaTags />
      <SwitchgearandControlgearEquipmentBreadcrumb />
      <SwitchgearandControlgearEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentArabic;

const SwitchgearandControlgearEquipmentMetaTags = () => {
  const title =
    "شهادة BIS المخطط X لمعدات Switchgear و Controlgear حتى 1000 فولت";
  const description =
    "شهادة BIS المخطط X لمعدات switchgear و controlgear حتى 1000 فولت ومجموعاتها، ومجموعاتها الفرعية، ومكوناتها، إلزامية لضمان الجودة والسلامة في الهند";
  const keywords =
    "شهادة BIS لمعدات Switchgear و Controlgear، شهادة BIS المخطط X لمعدات Switchgear و Controlgear، شهادة المخطط X لمعدات Switchgear و Controlgear، BIS لمعدات Switchgear و Controlgear، OTR لمعدات Switchgear و Controlgear";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X لمعدات Switchgear و Controlgear حتى 1000 فولت في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لمعدات switchgear و controlgear حتى 1000 فولت في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                    شهادة BIS لمعدات Switchgear و Controlgear حتى 1000 فولت
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

const SwitchgearandControlgearEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لمعدات Switchgear و Controlgear حتى 1000 فولت
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="شهادة BIS المخطط X لمعدات Switchgear و Controlgear حتى 1000 فولت"
            title="ترخيص BIS المخطط X لمعدات Switchgear و Controlgear"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          في هذا العصر من الأتمتة والكهرباء، تعد مفاتيح التحكم ومفاتيح التحكم
          مكونات أساسية في الأنظمة الكهربائية الآمنة والفعالة. من الأسلاك
          المنزلية إلى الأنظمة الصناعية المتطورة، تدير هذه الأجهزة الحماية
          والتحكم والعزل لتدفق الطاقة. نظرًا للموقع الحرج الذي تشغله هذه
          الأجهزة، فقد أنشأ مكتب المعايير الهندية (BIS) شهادة إلزامية لهذه
          الأجهزة تحت المخطط X لضمان استيفائها لمعايير السلامة والأداء المحددة
          في الهند.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          وزارة الصناعات الثقيلة، بموجب اللوائح التقنية الشاملة، 2024، فرضت
          شهادة BIS الإلزامية لجميع معدات switchgear و controlgear (≤ 1000 فولت)
          المباعة والمستوردة والمصنعة في الهند اعتبارًا من 1 سبتمبر 2026.
          لمعالجة المعدات الكهربائية غير المتوافقة وغير الآمنة، ولتحسين معايير
          المنتجات المعروضة في السوق، جعلت BIS، بموجب شهادة المخطط X، الشهادة
          إلزامية لهذه الأجهزة التي تعمل على أو أقل من 1000 فولت.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          تحدد هذه المدونة إجراءات الشهادة مع مزاياها ونطاقها وهدفها والأدلة
          الداعمة والوثائق الهامة، الضرورية لشهادة المخطط X لجميع أنواع معدات
          switchgear و controlgear التي تعمل (أو) مجموعاتها/مجموعاتها
          الفرعية/مكوناتها التي تعمل على جهد لا يتجاوز 1000 فولت.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS لمعدات Switchgear و Controlgear
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          معدات Switchgear و controlgear حتى 1000 فولت ضرورية في:
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>تركيبات توزيع الطاقة المنزلية والتجارية</li>
          <li>أنظمة إدارة الطاقة للصناعة</li>
          <li>مرافق الطاقة المتجددة (محطات الطاقة الشمسية/الرياح)</li>
          <li>مشاريع البنية التحتية العامة</li>
          <li>التطبيقات الحرجة للسلامة التي تتطلب حماية الدوائر</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون الشهادة المناسبة، تشمل المخاطر:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>مخاطر الصدمات الكهربائية أو الحرائق</li>
          <li>تلف المعدات ووقت التوقف المكلف</li>
          <li>انتهاك معايير السلامة الهندية</li>
          <li>الحظر من العطاءات والمشاريع التي تتطلب معدات معتمدة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة المخطط X لمعدات Switchgear و Controlgear تضمن أن هذه المنتجات
          تلبي معايير الأداء والسلامة والمتانة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لمعدات Switchgear و Controlgear؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X لمعدات Switchgear و Controlgear هي جزء من لوائح
          تقييم المطابقة لـ BIS، 2018. تفرض اختبار المنتج الإلزامي، وفحص المصنع،
          والامتثال للمعايير الهندية المعمول بها.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          شهادة المخطط X لمعدات Switchgear و Controlgear: الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>تنطبق على جميع المصنعين الهنود والأجانب</li>
          <li>
            تغطي مجموعة من الأجهزة: قواطع الدوائر، وفواصل، ومفاتيح الفصل، وحدات
            مجمعة للصمامات وأجهزة التحكم حتى 1000 فولت.
          </li>
          <li>تتطلب اختبارًا معمليًا في منشآت معتمدة من BIS</li>
          <li>تشمل تدقيق نظام الإنتاج والجودة</li>
          <li>تمنح الحق في استخدام علامة المعيار على المنتج بعد الشهادة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR لمعدات Switchgear و Controlgear
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم الإعلان عن OTR لمعدات Switchgear و Controlgear من قبل وزارة
          الصناعات الثقيلة في عام 2024، والتي تتطلب شهادة المخطط X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يُطلب من جميع المصنعين والمستوردين الحصول على ترخيص
          BIS صالح لمعدات Switchgear و Controlgear تحت المخطط X بحلول 1 سبتمبر
          2026. "سيمنع ذلك معدات switchgear و controlgear غير المعتمدة من البيع
          أو الاستيراد أو التصنيع في الهند،" حسب قول مسؤول حكومي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لمعدات Switchgear و Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            السلامة الكهربائية: الحماية من الدوائر القصيرة والحمل الزائد ومخاطر
            الحرائق المحتملة.
          </li>
          <li>
            الامتثال التنظيمي: إلزامي بموجب OTR لأجهزة Switchgear و Controlgear.
          </li>
          <li>
            قبول السوق: المنتجات المسجلة مقبولة لجميع المشاريع الحكومية والخاصة.
          </li>
          <li>
            ثقة العملاء: علامة معيار BIS على Switchgear و Controlgear تمنح
            العملاء الثقة في الجودة والسلامة.
          </li>
          <li>
            الميزة التنافسية: تعزز سمعة العلامة التجارية وتفتح الأبواب للأعمال
            الجديدة.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لمعدات Switchgear و Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            تحديد المعيار الهندي ذي الصلة: تحديد رمز IS المتعلق بمعدات
            switchgear و controlgear حتى 1000 فولت.
          </li>
          <li>
            اختبار المنتج: إجراء اختبارات السلامة والأداء والمتانة في المختبرات
            المعتمدة من BIS.
          </li>
          <li>تدقيق المصنع: يتحقق مفتشو BIS من المصنع ونظام مراقبة الجودة.</li>
          <li>
            تقديم الوثائق: جميع المواصفات التفصيلية وتقارير الاختبار وملفات دعم
            الامتثال.
          </li>
          <li>
            إصدار ترخيص BIS: إذا تم القبول، تصدر BIS ترخيصًا لاستخدام علامة
            المعيار.
          </li>
          <li>
            الامتثال المستمر: التدقيق على المعايير واختبار المنتج على فترات
            منتظمة يضمن بقاء الشهادة صالحة.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          عقوبات عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          عدم الامتثال لشهادة BIS لمعدات Switchgear و Controlgear بموجب نظام OTR
          له العواقب التالية:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر التصنيع أو الاستيراد أو بيع أي منتج غير معتمد</li>
          <li>سيتم مصادرة المعدات غير المتوافقة؛ والغرامات.</li>
          <li>عدم الأهلية في المناقصات الحكومية</li>
          <li>الإضرار بالعلاقات التجارية والثقة في السوق.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تنفيذ شهادة BIS المخطط X لمعدات Switchgear و Controlgear في OTR 2024
          هو خطوة لضمان إدارة الطاقة الآمنة والموثوقة والفعالة في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالنسبة للمصنعين والمستوردين، فإن شهادة المخطط X لمعدات Switchgear و
          Controlgear ليست التزامًا قانونيًا فحسب، بل أيضًا استثمار استراتيجي،
          يضمن الوصول إلى السوق ومصداقية العلامة التجارية وثقة العملاء بشكل عام.
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
