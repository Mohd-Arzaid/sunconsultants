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

const PowerSemiconductorsArabic = () => {
  return (
    <div className="relative w-full">
      <PowerSemiconductorsMetaTags />
      <PowerSemiconductorsBreadcrumb />
      <PowerSemiconductorsMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default PowerSemiconductorsArabic;

const PowerSemiconductorsMetaTags = () => {
  const title = "شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة";
  const description =
    "شهادة BIS المخطط X تنطبق على جميع أنواع محولات أشباه الموصلات للطاقة وتجميعاتها، التجميعات الفرعية، ومكوناتها لضمان الجودة والسلامة في الهند";
  const keywords =
    "شهادة BIS لمحولات أشباه الموصلات للطاقة, شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة, شهادة المخطط X لمحولات أشباه الموصلات للطاقة, BIS لمحولات أشباه الموصلات للطاقة, OTR لمحولات أشباه الموصلات للطاقة";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const PowerSemiconductorsBreadcrumb = () => {
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
                    شهادة BIS لمحولات أشباه الموصلات للطاقة
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

const PowerSemiconductorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لمحولات أشباه الموصلات للطاقة
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة"
            title="ترخيص BIS المخطط X لمحولات أشباه الموصلات للطاقة"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          محولات أشباه الموصلات للطاقة تمكن من تنفيذ وتعديل الطاقة الكهربائية
          بشكل فعال من شكل إلى آخر في تطبيقات متنوعة. تشمل هذه التطبيقات الطاقة
          المتجددة والمركبات الكهربائية وأتمتة الصناعة والإلكترونيات
          الاستهلاكية. تعمل كأساس للأجهزة والمعدات الكهربائية والإلكترونية. بسبب
          الأهمية والأهمية المتزايدة لهذه الأجهزة في قطاع الطاقة والصناعة في
          البلاد، دمج مكتب المعايير الهندية (BIS) شهادة محولات أشباه الموصلات
          للطاقة تحت إطار شهادة المخطط X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          وفقاً للأمر الصادر من وزارة الصناعات الثقيلة، يُتوقع من جميع أنواع
          المصنعين، بغض النظر عما إذا كانوا يعملون محلياً أو في الخارج، الامتثال
          لشهادة BIS لمحولات أشباه الموصلات للطاقة والتجميعات الفرعية ومكوناتها،
          بحلول 1 سبتمبر 2026. شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة
          هي مخطط شهادة تنظيمي، خطوة نحو تحسين التصنيع الهندي من خلال تعزيز
          السلامة والجودة والمعايير التنافسية عالمياً.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          سيساعد هذا المقال في تقديم المعلومات اللازمة حول الوثائق المتعلقة
          بشهادة المخطط X لجميع التجميعات الفرعية والمكونات و/أو أنواع محولات
          أشباه الموصلات للطاقة، النطاق والأهمية، عملية الشهادة، المزايا،
          ومعلومات أخرى.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS لمحولات أشباه الموصلات للطاقة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تطبيقات محولات أشباه الموصلات للطاقة تشمل:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>مشاريع الطاقة الشمسية والرياح</li>
          <li>محطات شحن المركبات الكهربائية ومحركاتها</li>
          <li>أتمتة المصانع والروبوتات</li>
          <li>الإلكترونيات الاستهلاكية ومزودات الطاقة</li>
          <li>شبكات النقل والتوزيع</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون الشهادة، تشمل المخاطر:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>أضرار كهربائية وارتفاع درجة الحرارة</li>
          <li>ظروف غير آمنة وتلف المعدات</li>
          <li>كفاءة طاقة منخفضة</li>
          <li>نتائج عروض سلبية من المشاريع والمناقصات الحكومية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          محولات أشباه الموصلات للطاقة التي لديها شهادة المخطط X تظهر أن هذا
          المنتج يلتزم بالمعايير الهندية الصارمة للأداء والسلامة والموثوقية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة هي بموجب لوائح تقييم
          المطابقة BIS، 2018. تضمن أن المنتجات تخضع لاختبارات صارمة وتفتيش وفحص
          الامتثال قبل دخول السوق الهندي.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>إلزامي لجميع المصنعين الأجانب والهنود</li>
          <li>
            يغطي مقدمة شاملة حول أجهزة أشباه الموصلات للطاقة، تصميم بوابة
            القيادة، والمكونات السلبية.
          </li>
          <li>اختبار المنتج إلزامي في مختبر معتمد من BIS</li>
          <li>الاستبعاد من أعمال المدينة، والمشاريع والمناقصات الحكومية.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          الشهادة تضمن أن محولات أشباه الموصلات للطاقة تلتزم بالمعايير الهندية
          الصارمة للأداء والسلامة والمتانة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة مشمولة بموجب لوائح
          تقييم المطابقة BIS، 2018. يوضح أن المنتج سيتطلب اختبارات صارمة وتفتيش
          وامتثال في الهند قبل إحضاره إلى السوق هنا.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>إلزامي للمصنعين الهنود والأجانب</li>
          <li>
            يغطي تطبيقات متنوعة لأشباه الموصلات للطاقة (AC-DC، DC-DC، DC-AC و
            AC-AC)
          </li>
          <li>يتطلب شهادة القوة والسلامة من مختبر معتمد من BIS</li>
          <li>يشمل تدقيق المصنع ونظام الجودة</li>
          <li>
            يمنح الحق في استخدام علامة معيار BIS إذا كان المنتج أيضاً مرخصاً من
            BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR لمحولات أشباه الموصلات للطاقة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم إصدار أمر اللائحة الفنية الشاملة (OTR) 2024 الجديد لمحولات أشباه
          الموصلات للطاقة من قبل وزارة الصناعات الثقيلة. هذا الأمر OTR يجعل
          شهادة المخطط X إلزامية لهذا المنتج لضمان الجودة والسلامة للمستهلكين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يُطلب من جميع المصنعين والمستوردين الحصول على الشهادة
          بحلول 1 سبتمبر 2026. بعد هذا الموعد النهائي، لا يمكن تصنيع أو بيع أو
          استيراد المحولات غير المعتمدة في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          مزايا شهادة BIS لمحولات أشباه الموصلات للطاقة
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            سلامة المنتج: تقليل مخاطر ارتفاع درجة الحرارة والحوادث النارية
            والدوائر القصيرة.
          </li>
          <li>
            كفاءة الطاقة: ضمان الأداء المحسّن والامتثال لمعايير توفير الطاقة.
          </li>
          <li>
            الوصول إلى السوق: OTR لمحولات أشباه الموصلات للطاقة يتطلب الشهادة
            للوصول إلى السوق في الهند.
          </li>
          <li>
            الميزة التنافسية: المناقصات الحكومية والخاصة تفضل المنتجات المعتمدة.
          </li>
          <li>ثقة العملاء: علامة معيار BIS تظهر الموثوقية والسلامة والجودة.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لمحولات أشباه الموصلات للطاقة
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            تحديد معيار IS ذي الصلة: الرجوع إلى رمز IS ذي الصلة لنوع المحول
            الخاص بك.
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
            إصدار ترخيص BIS لمحولات أشباه الموصلات للطاقة: يمكنك وضع علامة BIS
            بعد الموافقة.
          </li>
          <li>
            الامتثال المستمر: يفحص BIS ويجري تدقيق غير مجدول للامتثال للمعايير.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات على عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصنعون الذين لا يملكون جميع نماذج محولات أشباه الموصلات للطاقة
          المعتمدة بشهادة BIS لمحولات أشباه الموصلات للطاقة بحلول 1 سبتمبر 2026
          يواجهون مخاطر:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر البيع/الاستيراد للمحولات غير المعتمدة</li>
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
          تطبيق شهادة BIS المخطط X لمحولات أشباه الموصلات للطاقة في OTR 2024 هو
          خطوة لجلب السلامة والكفاءة والجودة إلى قطاع الطاقة والإلكترونيات في
          الهند الذي ينمو بسرعة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          المصنعون والمستوردون والمصدرون يستفيدون من هذه العملية من خلال الحصول
          على شهادة BIS لمحولات أشباه الموصلات للطاقة، والحصول على ترخيص BIS
          لمحولات أشباه الموصلات للطاقة، ووضع علامة BIS لمحولات أشباه الموصلات
          للطاقة على منتجاتهم، مما يوضح أن منتجاتهم تلبي نظام تنظيم السوق المحلي
          ومتطلبات العملاء.
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
