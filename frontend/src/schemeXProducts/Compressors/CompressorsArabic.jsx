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
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsArabic = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default CompressorsArabic;

const CompressorsMetaTags = () => {
  const title = "شهادة BIS المخطط X للضاغطات";
  const description =
    "شهادة BIS المخطط X للضاغطات، التجميعات، أو المكونات إلزامية بموجب أمر اللائحة الفنية الشاملة، 2024 لتعزيز سلامة المنتج والتوحيد القياسي في الهند";
  const keywords =
    "شهادة BIS للضاغطات, شهادة BIS المخطط X للضاغطات, شهادة المخطط X للضاغطات, BIS للضاغطات, OTR للضاغطات";
  const canonicalUrl =
    "https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-daghitat";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "شهادة BIS المخطط X للضاغطات في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X للضاغطات في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

      {/* Hreflang Tags for Multi-language Support - English is the default language */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-konpuresa"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-ya-suo-ji-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-compresseurs"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-kompressoren"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-nen-khi"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-compresores"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-apchukgi"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-kompresor"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-compressori"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-kompresor"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-compressoren"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-daghitat"
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
      />
    </Helmet>
  );
};

const CompressorsBreadcrumb = () => {
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
                    BIS المخطط X للضاغطات
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

const CompressorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const CompressorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS المخطط X للضاغطات
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="ترخيص BIS المخطط X للضاغطات"
            alt="شهادة BIS المخطط X للضاغطات"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          الضاغطات هي معدات مهمة في مختلف الصناعات مثل التبريد، التدفئة والتهوية
          وتكييف الهواء، البتروكيماويات، التصنيع، معالجة الأغذية وتطبيقات
          الأدوية. الصناعة الهندية سريعة النمو تتطور بسرعة وجودة وسلامة الضاغطات
          أصبحت مصدر قلق رئيسي.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          لضمان نفس الشيء، نفذ مكتب المعايير الهندية (BIS) شهادة BIS للضاغطات
          بموجب شهادة المخطط X. تضمن هذه الشهادة أن كل ضاغط يتم إدخاله إلى أراضي
          الهند يلتزم بمعايير السلامة والأداء والكفاءة المحددة.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          في هذا الدليل، نقدم شهادة BIS المخطط X للضاغطات و OTR للضاغطات، وكذلك
          كيفية حصول المصنعين على ترخيص BIS للضاغطات لاستخدام علامة BIS للضاغطات
          في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا BIS للضاغطات مهم
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم الضاغطات في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>أنظمة تبريد الهواء/التبريد</li>
          <li>خطوط نقل الغاز والتخزين</li>
          <li>مرافق معالجة النفط والغاز</li>
          <li>منشآت توليد الطاقة والمرافق الصناعية الكيميائية</li>
          <li>إنتاج الأغذية والمشروبات</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن يلبي كل نوع المعايير الهندية المعمول بها (رمز IS) مثل IS
          17093:2019.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون BIS للضاغطات، المنتجات الرديئة أو غير المميزة يمكن أن تسبب:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>التلف، فترات الصيانة ووقت التوقف</li>
          <li>إنتاج طاقة مهدر مقابل فواتير مرافق طاقة عالية</li>
          <li>مخاطر السلامة، مثل ارتفاع الحرارة أو التسرب</li>
          <li>فقدان السمعة والأضرار المالية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          لذلك علامة BIS للضاغطات المعتمدة من ISI هي ضمان للسلامة والموثوقية
          والجودة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X للضاغطات؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة BIS المخطط X للضاغطات هي مخطط تقييم المطابقة في الهند بموجب
          لوائح تقييم المطابقة BIS، 2018. هذا لضمان أن المصنعين المحليين
          والأجانب يلتزمون بالجودة الهندية.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ميزات شهادة المخطط X للضاغطات:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>إلزامي لجميع المصنعين (الهنديين والأجانب)</li>
          <li>
            يغطي أنواعاً مختلفة من الضاغطات المعلن عنها بموجب المعايير الهندية
          </li>
          <li>يعرض اختبار الطرف الثالث، تفتيش المصنع وفحص الامتثال الدوري</li>
          <li>
            يسمح باستخدام علامة BIS للضاغطات على منتجات حاملي الترخيص كمنتجات
            معتمدة
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR للضاغطات
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أمر اللائحة الفنية الشاملة (OTR) للضاغطات الذي أصدرته وزارة الصناعات
          الثقيلة في عام 2024 يتطلب شهادة المخطط X للضاغطات.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي للامتثال: بحلول 1 سبتمبر 2026، يُطلب من جميع المصنعين
          والمستوردين الحصول على ترخيص BIS صالح للضاغطات بموجب المخطط X. أي عدم
          امتثال سيؤدي إلى حظر كامل على بيع واستيراد الضاغطات غير المعتمدة في
          الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS للضاغطات
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            السلامة والأداء: يساعد في تجنب المخاطر مثل التسرب وارتفاع الحرارة
            وفشل الآلة.
          </li>
          <li>
            الوصول إلى السوق: الضاغطات المعتمدة من BIS يمكن استخدامها في
            المناقصات العامة ومشاريع الحكومة.
          </li>
          <li>
            ثقة المستهلك: علامة BIS للضاغطات تعطي المشترين الثقة بأن المنتج
            يتوافق مع المعايير الهندية.
          </li>
          <li>
            ميزة تنافسية: فقط العلامات التجارية المعتمدة تحصل على المزيد من
            الثقة وتفضيل السوق.
          </li>
          <li>
            وصول سهل إلى السوق للعلامات التجارية الدولية: ترخيص BIS للضاغطات
            يسهل الوصول السهل إلى السوق الهندي للمصنعين الأجانب.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع الضاغطات المشمولة في BIS المخطط X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X متاحة لأنواع مختلفة من الضاغطات مثل:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ضاغطات الإزاحة الإيجابية الترددية</li>
          <li>ضاغطات دوارة</li>
          <li>ضاغطات لولبية</li>
          <li>ضاغطات توربينية</li>
          <li>ضاغطات التدفق المحوري</li>
          <li>ضاغطات الهواء الصناعية والمحمولة</li>
          <li>ضاغطات تبريد الهواء والتبريد</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          تقنيات الضاغطات المختلفة يجب أن تتوافق مع المعايير الهندية الخاصة بكل
          منها، والتي تحدد متطلبات الأداء واستهلاك الطاقة وجودة المواد والسلامة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          خطوة بخطوة ترخيص BIS للضاغطات – كيف تتقدم؟
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>تحديد المعيار المعمول به: ابحث عن رمز IS المناسب لضاغطك.</li>
          <li>
            اختبار المنتج: قم بإجراء اختبارات الأداء والسلامة وكفاءة الطاقة
            الإلزامية في مختبر معترف به من BIS.
          </li>
          <li>
            تفتيش المصنع: يقوم موظفو BIS بزيارة ميدانية للتحقق من إجراءات
            التصنيع وطرق مراقبة الجودة.
          </li>
          <li>
            الوثائق والطلب: قم بتضمين تقارير الاختبار والمواصفات الفنية ودليل
            الجودة مع طلب BIS الخاص بك.
          </li>
          <li>
            إصدار ترخيص BIS للضاغطات: عند القبول، يُمنح المصنعون الحق في استخدام
            علامة BIS للضاغطات.
          </li>
          <li>
            الامتثال المستمر: يتم إجراء عمليات تدقيق إشرافية روتينية واختبار
            المنتج من قبل BIS للامتثال المستمر.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصنعون الذين لا يحصلون على شهادة BIS للضاغطات حتى 1 سبتمبر 2026
          بموجب OTR للضاغطات سيخضعون لـ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>البيع/الاستيراد للضاغطات غير المختبرة غير مسموح</li>
          <li>مصادرة البضائع غير المتوافقة والعقوبات التجارية</li>
          <li>الحظر من المناقصات الحكومية واتفاقيات القطاع العام</li>
          <li>فقدان ثقة السوق الهندي</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تطبيق شهادة BIS المخطط X للضاغطات من قبل OBR للضاغطات (2024) هو خطوة
          مهمة للأمام لسلامة الصناعة وكفاءة الطاقة وضمان الجودة في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          المصنعون والمستوردون والمصدرون الذين يمرون بعملية الحصول على شهادة BIS
          للضاغطات، وتأمين شهادة BIS للضاغطات يحصلون على الحق في أن يكونوا جزءاً
          من هذا السوق من خلال ضمان أن المنتجات التي يقدمونها للمستهلكين الهنود
          تعتبر آمنة للاستخدام ولديها مخاطر بيئية أقل وجودة جيدة.
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement logo"
                title="PlasticWasteManagement logo"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS logo"
                title="BIS logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
