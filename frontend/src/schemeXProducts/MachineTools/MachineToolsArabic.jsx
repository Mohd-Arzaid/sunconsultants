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

const MachineToolsArabic = () => {
  return (
    <div className="relative w-full">
      <MachineToolsMetaTags />
      <MachineToolsBreadcrumb />
      <MachineToolsMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default MachineToolsArabic;

const MachineToolsMetaTags = () => {
  const title = "شهادة BIS المخطط X لأدوات الآلات";
  const description =
    "شهادة BIS المخطط X إلزامية لأدوات الآلات بما في ذلك المخرطة، آلة الطحن، آلة الحفر، آلة الطحن، أنظمة CNC والأدوات لمعالجة الحجر والسيراميك والخرسانة والمواد المماثلة";
  const keywords =
    "شهادة BIS لأدوات الآلات, شهادة BIS المخطط X لأدوات الآلات, شهادة المخطط X لأدوات الآلات, BIS لأدوات الآلات, OTR لأدوات الآلات";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "شهادة BIS المخطط X لأدوات الآلات في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لأدوات الآلات في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

      {/* Hreflang Tags for Multi-language Support */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-machine-tools"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-a-outils"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-cong-cu"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-herramientas-de-maquina"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-gongjag-gigye"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-perkakas-mesin"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-utensili-per-macchine"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kousaku-kikai"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-ji-chuang-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-mue"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-werktuigmachines"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-adawat-al-alat"
      />
    </Helmet>
  );
};

const MachineToolsBreadcrumb = () => {
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
                    شهادة BIS لأدوات الآلات
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

const MachineToolsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const MachineToolsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لأدوات الآلات
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            ترخيص BIS المخطط X لأدوات الآلات
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="شهادة BIS المخطط X لأدوات الآلات"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          بالنظر إلى الجودة والسلامة كأمور حرجة، قاد BIS (مكتب المعايير الهندية)
          سلامة ومعايير مختلف الصناعات من خلال شهادة المخطط X. هذه الشهادة مهمة
          جداً لمصنعي أدوات الآلات المصممة للعمل على مواد مثل الحجر والسيراميك
          والخرسانة وأسمنت الأسبستوس والزجاج المعدني المماثل وأدوات الآلات
          الأخرى. الامتثال للشهادة لا يلبي فقط متطلبات السلامة الوطنية، بل يزيد
          بشكل كبير من مصداقية وقدرة تسويق المنتج.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة المخطط X هذه هي متطلب بموجب سلامة الآلات والمعدات الكهربائية
          (أمر اللائحة الفنية الشاملة، 2024). هذه اللائحة تشهد أن مصنعي الآلات
          والمعدات الكهربائية يجب أن يكون لديهم علامة معيار على معداتهم. الشهادة
          تشمل إعداد الملفات الفنية وتدقيق المصنع وفحص المنتج المستقل والترخيص،
          والموعد النهائي هو 1 سبتمبر 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          تغطي هذه المدونة جميع المعلومات المطلوبة المتعلقة بشهادة المخطط X
          لجميع أنواع أدوات الآلات لمعالجة الحجر والسيراميك والخرسانة وأسمنت
          الأسبستوس أو المعادن المماثلة (أو) وتجميعاتها/التجميعات
          الفرعية/مكوناتها، أهميتها، نطاقها، عملية الشهادة، المزايا، والوثائق
          المطلوبة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا شهادة BIS لأدوات الآلات مهمة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أدوات الآلات ضرورية في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>إنتاج قطع غيار السيارات والطائرات</li>
          <li>صناعات بناء السفن والهندسة الثقيلة</li>
          <li>تصنيع معدات محطات الطاقة</li>
          <li>السكك الحديدية والدفاع والمعدات الدقيقة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون شهادة BIS، تشمل المخاطر:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>جودة المنتج غير كافية وغير متسقة</li>
          <li>تلف المعدات وتأخير في الإنتاج</li>
          <li>مخاطر للمشغلين</li>
          <li>مخاوف قانونية بسبب انتهاك القانون الهندي</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          من خلال فرض الامتثال، تحمي شهادة المخطط X الصناعة من هذه المخاطر. هذا
          ينطبق أيضاً على جميع أنواع أدوات الآلات لمعالجة الحجر والسيراميك
          والخرسانة وأسمنت الأسبستوس أو المعادن المماثلة (أو)
          وتجميعاتها/التجميعات الفرعية/مكوناتها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لأدوات الآلات؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع شهادة BIS المخطط X بموجب لوائح تقييم المطابقة BIS، 2018، أصبحت
          الاختبارات والتفتيش والترخيص إلزامية لمنتجات أدوات الآلات المحددة، قبل
          تصنيعها أو استيرادها أو بيعها في البلاد.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          النقاط الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ينطبق على المصنعين الهنود والمستوردين</li>
          <li>
            يغطي أدوات الآلات مثل المخرطة، آلة الطحن، آلة الحفر، آلة الطحن، آلة
            التشكيل، أنظمة CNC، وغيرها
          </li>
          <li>يتم الاختبار فقط في مختبرات معتمدة من BIS.</li>
          <li>تدقيق المصنع ومراجعة نظام الجودة إلزامي</li>
          <li>
            فقط المتقدمون الناجحون يحصلون على ترخيص BIS لاستخدام علامة المعيار
            على منتجاتهم
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR لأدوات الآلات
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أصدرت وزارة الصناعات الثقيلة أمر اللائحة الفنية الشاملة (OTR) الذي
          يجعل شهادة BIS المخطط X إلزامية لأدوات الآلات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يجب على جميع المصنعين والمستوردين الحصول على شهادة BIS
          بحلول 1 سبتمبر 2026. اعتباراً من تاريخ هذا الإشعار، لن تتمكن أدوات
          الآلات غير المعتمدة من الإنتاج أو البيع أو الاستيراد في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لأدوات الآلات
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ضمان الجودة: دقة مُتحقق منها، متانة الأدوات المعتمدة.</li>
          <li>الوصول إلى السوق – مهم للدخول إلى أعمال القطاع العام والخاص.</li>
          <li>
            ثقة المستهلك – علامة معيار BIS هي ضمان الجودة والسلامة للمنتج.
          </li>
          <li>
            الميزة التنافسية - المصنعون المعتمدون مفضلون للمناقصات والمشتريات.
          </li>
          <li>
            تقليل المخاطر – لا فشل للمعدات، زيادة سلامة المشغلين، ومنع التوقف.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لأدوات الآلات
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            تحديد المعيار – ربط نوع أداة الآلة واستخدامها بالمعايير الهندية.
          </li>
          <li>
            اختبار المنتج – اختبار الأداء والسلامة والمتانة في مختبر معتمد من
            BIS.
          </li>
          <li>تدقيق المصنع – تدقيق مراقبة جودة إنتاج المعدات الكهربائية.</li>
          <li>الوثائق: يجب توفير التقارير الفنية والدليل وإثبات الامتثال.</li>
          <li>
            منح الترخيص – BIS يمنح الترخيص (الشهادة) ويسمح باستخدام علامة
            المعيار.
          </li>
          <li>
            المراقبة – يتم إجراء مراجعات روتينية وتفتيش عشوائي لضمان الامتثال
            للقواعد.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة المخطط X إلزامية لجميع الآلات لمعالجة الحجر والسيراميك والخرسانة
          وأسمنت الأسبستوس أو المعادن المماثلة (أو) وتجميعاتها/التجميعات
          الفرعية/أجزائها.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          عدم الامتثال لمعايير شهادة BIS بموجب OTR يمكن أن يؤدي إلى:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر إنتاج واستيراد وتجارة السلع غير المعتمدة</li>
          <li>مصادرة البضائع وغرامات</li>
          <li>فقدان عقود الدفاع والحكومة</li>
          <li>تلف العلامة التجارية والسمعة الدائمة على المدى الطويل</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة BIS المخطط X، المطلوبة بموجب OTR 2024، ليست مجرد التزام تنظيمي —
          إنها مفتاح الثقة والسلامة والنجاح في صناعة التصنيع الهندية. الشهادة
          مهمة للمصنعين الهنود والعالميين للوصول إلى السوق والامتثال والنجاح
          طويل الأمد.
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
