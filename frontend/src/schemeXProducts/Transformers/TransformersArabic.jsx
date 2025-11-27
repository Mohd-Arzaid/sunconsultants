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

const TransformersArabic = () => {
  return (
    <div className="relative w-full">
      <TransformersMetaTags />
      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default TransformersArabic;

const TransformersMetaTags = () => {
  const title = "شهادة BIS المخطط X للمحولات";
  const description =
    "تحدد شهادة BIS المخطط X للمحولات معايير الجودة والسلامة لتصنيع واستيراد المحولات إلى الهند";
  const keywords =
    "شهادة BIS للمحولات، شهادة BIS المخطط X للمحولات، شهادة المخطط X للمحولات، BIS للمحولات، OTR للمحولات";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "شهادة BIS المخطط X للمحولات في الهند | دليل شامل";
  const ogDescription =
    "تعرف على كل شيء عن شهادة BIS المخطط X للمحولات في الهند. افهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const TransformersBreadcrumb = () => {
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
                    شهادة BIS للمحولات
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

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمحولات
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="شهادة BIS المخطط X للمحولات"
            title="ترخيص BIS المخطط X للمحولات"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          المحولات هي مكونات أساسية في كل شبكة نقل وتوزيع الطاقة. بغض النظر عن
          تطبيقها في العمليات الصناعية أو التجارية أو المرافق، يجب أن تظل
          المحولات دائمًا معدات بأعلى مستويات السلامة والأداء التشغيلي بسبب
          الطبيعة الحرجة لوظائفها. لتعزيز السلامة والموثوقية والتوحيد في صناعة
          المعدات الكهربائية في الهند، جعل مكتب المعايير الهندي (BIS) شهادة BIS
          لجميع أنواع المحولات ومجموعاتها ومجموعاتها الفرعية ومكوناتها ومكوناتها
          الفرعية إلزامية تحت شهادة المخطط X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          حددت وزارة الصناعات الثقيلة، من خلال أمر اللائحة الفنية الشاملة لعام
          2024، موعدًا نهائيًا لجميع المصنعين، بغض النظر عن بلد المنشأ، لتحقيق
          شهادة BIS تحت المخطط X للمحولات والمعدات المماثلة بحلول 1 سبتمبر 2026.
          شهادة BIS المخطط X للمحولات هي خطوة نحو تحسين الجودة والاتساق
          والموثوقية والسلامة الكهربائية للمنتجات في الهند. بالنسبة للمصنعين أو
          المستوردين أو موردي OEM للمحولات مع المكونات، هذا المعيار هو أكثر من
          مجرد التزام بالامتثال.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          تغطي هذه المدونة جميع المعلومات ذات الصلة المتعلقة بالنطاق والأهمية
          والفوائد من الشهادة والعملية والوثائق المطلوبة لشهادة المخطط X لجميع
          أنواع المحولات و(أو) مجموعاتها ومجموعاتها الفرعية ومكوناتها و/أو
          التجميع.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا المخطط X للمحولات مهم
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم المحولات على نطاق واسع في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>مرافق توليد الطاقة</li>
          <li>شبكات النقل والتوزيع</li>
          <li>المصانع ومباني الإنتاج</li>
          <li>
            مشاريع الطاقة المتجددة (الطاقة الشمسية / الرياح / الطاقة
            الكهرومائية)
          </li>
          <li>الممتلكات التجارية / السكنية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون الامتثال المناسب، يمكن أن تسبب المحولات:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>الاحتراق الزائد والحرائق والصدمات الكهربائية.</li>
          <li>فقدان وإهدار الطاقة أثناء النقل</li>
          <li>انقطاع التيار الكهربائي بسبب تلف النظام</li>
          <li>الرفض في المناقصات العامة ومشاريع الحكومة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          تضمن شهادة المخطط X للمحولات السلامة العالية وكفاءة الطاقة وموثوقية
          المنتج.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة المخطط X للمحولات؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X للمحولات هي إطار قانوني بموجب لائحة تقييم الامتثال
          BIS لعام 2018. تتطلب اختبارًا وتفتيشًا صارمًا وتطالب بمستوى أعلى من
          الوثائق لضمان الجودة وفقًا للمعايير الهندية.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الميزات الرئيسية لشهادة المخطط X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>لجميع المصنعين، الهنود والأجانب.</li>
          <li>
            يشمل محولات التوزيع ومحولات الطاقة والمحولات ذات الأغراض الخاصة
          </li>
          <li>
            اختبار الأداء والكفاءة والسلامة في مختبرات معتمدة من BIS إلزامي
          </li>
          <li>يتم تدقيق المصنع لعمليات التصنيع وفحص أنظمة الجودة</li>
          <li>يوفر ترخيصًا لاستخدام علامة المعيار BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR للمحولات
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قدمت وزارة الصناعات الثقيلة اللائحة الفنية الشاملة (OTR) للمحولات في
          عام 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          تاريخ الامتثال: يجب أن يكون جميع المصنعين والمستوردين معتمدين بحلول 1
          سبتمبر 2026. بعد ذلك، لا يمكن تصنيع أو إحضار أو بيع المحولات غير
          المعتمدة في الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          فوائد BIS للمحولات
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            السلامة والموثوقية: التحقق من أن المحولات تلتزم بمتطلبات السلامة
            الكهربائية ومنع الحرائق.
          </li>
          <li>كفاءة الطاقة: تشجع على تقليل فقدان الطاقة وأداء طاقة أفضل.</li>
          <li>
            امتثال السوق: الامتثال لمتطلبات تنظيم المحولات، كما هو مذكور في OTR.
          </li>
          <li>
            الأهلية للمناقصات: المنتجات المعتمدة مؤهلة لمناقصات الحكومة وPSU.
          </li>
          <li>ثقة العملاء: تضمن علامة المعيار BIS جودة المنتج والمتانة.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع المحولات المشمولة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تنطبق شهادة BIS المخطط X للمحولات على:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>محولات التوزيع (للاستخدام في الشبكات المحلية والإمداد السكني)</li>
          <li>محولات الطاقة (على مستوى شبكة النقل عالية الجهد)</li>
          <li>
            المحولات ذات الأغراض الخاصة (تطبيقات صناعية وسكك حديدية ومشاريع
            الطاقة المتجددة)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          يجب أن تلبي كل نوع رموز IS ذات الصلة (انظر الملاحظة) مثل IS
          16819:2018/ISO 12100:2010 (سلامة الآلات - المبادئ العامة للتصميم -
          تقييم المخاطر وتقليل المخاطر). يجب أن تتوافق جميع الأنواع مع رموز IS
          الخاصة بها للحصول على الشهادة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS للمحولات
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            تحديد المعيار المعمول به: يرجى الرجوع إلى رموز IS لأنواع مختلفة من
            المحولات.
          </li>
          <li>
            اختبار المنتج: إجراء فحوصات السلامة وكفاءة الطاقة والأداء في مختبرات
            معتمدة من BIS.
          </li>
          <li>
            تدقيق المصنع: يراقب موظفو BIS إنتاج المصنع وأنظمة مراقبة الجودة.
          </li>
          <li>
            تقديم الوثائق: إرسال المواصفات وتقارير الاختبار وبيانات الامتثال.
          </li>
          <li>
            منح الترخيص: يمنح BIS ترخيصًا لاستخدام علامة المعيار عند استيفاء
            جميع الأحكام.
          </li>
          <li>
            الامتثال المستمر: يتم إجراء الاختبارات والمراجعات الروتينية للحفاظ
            على صلاحية الشهادة.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          عقوبات عدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعني الفشل في الامتثال لـ BIS / OTR للمحولات - شهادة BIS للمحولات تحت
          OTR للمحولات ما يلي:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر بيع وتصنيع واستيراد المحولات غير المعتمدة.</li>
          <li>مصادرة إلزامية للمنتجات غير الممتثلة وعقوبات صارمة.</li>
          <li>عدم الأهلية لمناقصات الحكومة وPSU</li>
          <li>ضرر طويل الأمد بالسمعة، خسائر مالية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS المخطط X للمحولات، التي ستكون مطلوبة بموجب OTR للمحولات
          (2024)، هي خطوة مهمة في تحسين البنية التحتية للطاقة في الهند بمنتجات
          موثوقة وفعالة وآمنة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          بالنسبة للمصنعين والمستوردين، فإن شهادة المخطط X للمحولات ليست مجرد
          شهادة إلزامية ولكنها أيضًا أداة استراتيجية لكسب الثقة في السوق الهندي
          والحفاظ على النجاح طويل الأمد في صناعة الطاقة في البلاد.
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
