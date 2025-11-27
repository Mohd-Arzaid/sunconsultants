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

const RubberAndPlasticsMachineryArabic = () => {
  return (
    <div className="relative w-full">
      <RubberAndPlasticsMachineryMetaTags />

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default RubberAndPlasticsMachineryArabic;

const RubberAndPlasticsMachineryMetaTags = () => {
  const title = "شهادة BIS المخطط X لآلات المطاط والبلاستيك";
  const description =
    "شهادة BIS المخطط X إلزامية لآلات المطاط والبلاستيك ومجموعاتها ومجموعاتها الفرعية ومكوناتها تحت المخطط X لضمان الجودة والسلامة وثقة العملاء";
  const keywords =
    "شهادة BIS لآلات المطاط والبلاستيك، شهادة BIS المخطط X لآلات المطاط والبلاستيك، شهادة المخطط X لآلات المطاط والبلاستيك، BIS لآلات المطاط والبلاستيك، OTR لآلات المطاط والبلاستيك";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X لآلات المطاط والبلاستيك في الهند | دليل شامل";
  const ogDescription =
    "تعرف على كل شيء عن شهادة BIS المخطط X لآلات المطاط والبلاستيك في الهند. افهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                    شهادة BIS لآلات المطاط والبلاستيك
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

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS لآلات المطاط والبلاستيك
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            title="ترخيص BIS المخطط X لآلات المطاط والبلاستيك"
            alt="شهادة BIS المخطط X لآلات المطاط والبلاستيك"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          يتغير القطاع الصناعي في الهند بسرعة، مما يؤدي إلى زيادة الطلب على
          الآلات المعيارية والآمنة وعالية الأداء. على وجه الخصوص، تعد الآلات
          للعمل مع المطاط والبلاستيك ضرورية لمختلف الصناعات، بما في ذلك السيارات
          والبناء والتعبئة والسلع الاستهلاكية. لتعزيز أمان المنتج وحماية
          المستهلك وتسهيل ضمان الجودة، أنشأ مكتب المعايير الهندي (BIS) إطارًا
          تنظيميًا يتطلب الشهادة للامتثال للمخطط X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          تطلب وزارة الصناعات الثقيلة، بموجب أمر اللائحة الفنية الشاملة (OTR)
          لعام 2024، من جميع المصنعين، المحليين والدوليين، الحصول على شهادة BIS
          تحت المخطط X لفئات معينة من الآلات. يشمل ذلك جميع أنواع الآلات للعمل
          مع المطاط والبلاستيك ومجموعاتها ومجموعاتها الفرعية ومكوناتها.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          يوضح هذا المدونة أهمية وملاءمة شهادة المخطط X، وعملية الشهادة،
          والفوائد المرتبطة بالوثائق المطلوبة لآلات المطاط والبلاستيك وجميع
          مجموعاتها ومجموعاتها الفرعية ومكوناتها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أهمية BIS لآلات المطاط والبلاستيك
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم آلات المطاط والبلاستيك على نطاق واسع في:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            تصنيع مكونات السيارات (الإطارات والخراطيم والأختام ولوحة القيادة)
          </li>
          <li>تعبئة البلاستيك والمنتجات الاستهلاكية</li>
          <li>الإمدادات الطبية وتعبئة الأدوية</li>
          <li>مواد البناء والبنية التحتية</li>
          <li>المكونات الكهربائية والإلكترونية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          في حالة عدم وجود BIS لآلات المطاط والبلاستيك، قد تواجه الصناعة:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>عدم كفاءة التشغيل والفشل المتكرر</li>
          <li>مخاطر السلامة للمشغلين والمستخدمين النهائيين</li>
          <li>نتائج منتجات منخفضة الجودة</li>
          <li>عدم الأهلية للمناقصات الحكومية أو المشاريع الكبيرة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          تضمن شهادة BIS المخطط X لآلات المطاط والبلاستيك أن الآلات تلتزم
          بالمعايير الهندية الصارمة، مما يجعل الآلات أكثر أمانًا وأطول عمرًا
          وجاهزة للسوق.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هي شهادة BIS المخطط X لآلات المطاط والبلاستيك؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تقع شهادة BIS المخطط X لآلات المطاط والبلاستيك في الهند تحت لائحة
          تقييم الامتثال BIS لعام 2018. تحدد معايير الأداء والسلامة لآلات معالجة
          المطاط والبلاستيك.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          شهادة المخطط X لآلات المطاط والبلاستيك: الميزات الرئيسية:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>إلزامي للمصنعين الهنود والأجانب</li>
          <li>
            يغطي مجموعة واسعة من آلات المطاط والبلاستيك وفقًا لرموز IS المعلنة
          </li>
          <li>يتطلب اختبار المنتج ومراجعة عملية التصنيع والرقابة المستمرة.</li>
          <li>استخدام علامة BIS القياسية عند الشهادة.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          تضمن هذه الشهادة سلامة الآلات وكفاءة الطاقة والإنتاج الموثوق للصناعة
          والمستخدمين النهائيين.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR لآلات المطاط والبلاستيك
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم الإعلان عن OTR لآلات المطاط والبلاستيك من قبل وزارة الصناعات
          الثقيلة في عام 2024، مما يتطلب شهادة المخطط X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          الموعد النهائي: يُطلب من جميع المصنعين والمستوردين الحصول على ترخيص
          BIS صالح لآلات المطاط والبلاستيك تحت المخطط X بحلول 1 سبتمبر 2026.
          "سيوقف هذا آلات المطاط والبلاستيك غير المعتمدة من التصنيع أو الاستيراد
          أو البيع في الهند،" كما قال مسؤول حكومي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          فوائد شهادة BIS لآلات المطاط والبلاستيك
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ضمان الجودة: الامتثال للمعايير الهندية المتعلقة بالأداء والمتانة.
          </li>
          <li>
            القدرة التنافسية في السوق: يتم إعطاء الأولوية للمنتجات المعتمدة
            للمشتريات في القطاعين العام والخاص.
          </li>
          <li>
            ثقة العملاء: هناك ثقة أكبر من المشترين عندما يشترون آلات بشهادة BIS
            لآلات المطاط والبلاستيك.
          </li>
          <li>
            الامتثال القانوني: لن تواجه عقوبات أو قيود بعد الامتثال لـ OTR لآلات
            المطاط والبلاستيك.
          </li>
          <li>
            الميزة العالمية: تجد الشركات المصنعة الأصلية الدولية المعتمدة طريقها
            إلى السوق الهندي بسهولة أكبر.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          آلات المطاط والبلاستيك المشمولة تحت مخطط شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تغطي شهادة المخطط X لآلات المطاط والبلاستيك مجموعة واسعة من المعدات،
          بما في ذلك:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>آلات القولبة بالحقن</li>
          <li>البثق وآلات النفخ</li>
          <li>مصانع خلط المطاط والخلاطات الداخلية</li>
          <li>آلات التقويم</li>
          <li>المكابس للقولبة بالضغط</li>
          <li>آلات إعادة التدوير والتحبيب</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          يجب أن تمتثل كل فئة للمعايير الهندية المعمول بها (رموز IS) مثل IS/ISO
          20430: 2020 (آلات البلاستيك والمطاط - آلات القولبة بالحقن - متطلبات
          السلامة). يجب أن تلبي كل نوع من الآلات المعايير الهندية المعمول بها من
          حيث السلامة والأداء والموثوقية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          عملية شهادة BIS لآلات المطاط والبلاستيك
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>تحديد المعايير ذات الصلة: اختر رمز IS المناسب لنوع الآلة.</li>
          <li>
            اختبار المنتج: إجراء اختبارات الأداء والسلامة المطلوبة وفقًا لمعايير
            الصناعة، في مختبر معتمد من BIS.
          </li>
          <li>
            تفتيش المصنع: فحص أنظمة ضمان الجودة في موقع الإنتاج من قبل مسؤولي
            BIS.
          </li>
          <li>
            التطبيق والوثائق: توفير المتطلبات الفنية ودليل الجودة وتقرير
            الاختبار.
          </li>
          <li>
            إصدار ترخيص BIS لآلات المطاط والبلاستيك: يمكنك وضع علامة BIS بعد
            الموافقة.
          </li>
          <li>
            الامتثال المستمر: يفحص BIS ويجري عمليات تدقيق غير مجدولة للامتثال
            للمعايير.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          العقوبات لعدم الامتثال
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          يواجه المصنعون الذين لا يمتلكون جميع نماذج آلات المطاط والبلاستيك
          المعتمدة بشهادة BIS لآلات المطاط والبلاستيك بحلول 1 سبتمبر 2026 مخاطر:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر البيع/الاستيراد لآلات المطاط والبلاستيك غير المعتمدة</li>
          <li>مصادرة المعدات غير الممتثلة والعقوبات المالية</li>
          <li>سيؤدي هذا إلى عدم أهليتك للمناقصات الحكومية أو PSU</li>
          <li>تأثر قيمة العلامة التجارية بشكل دائم في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          إن تنفيذ شهادة BIS المخطط X لآلات المطاط والبلاستيك في OTR 2024 هو
          خطوة لجلب السلامة والكفاءة والجودة إلى القطاع الصناعي في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          يستفيد المصنعون والمستوردون والمصدرون من هذه العملية من خلال تأمين
          شهادة BIS لآلات المطاط والبلاستيك، والحصول على ترخيص BIS لآلات المطاط
          والبلاستيك، ووضع علامة BIS لآلات المطاط والبلاستيك على منتجاتهم، مما
          يوضح أن منتجاتهم تلبي نظام التنظيم في السوق المحلي ومتطلبات العملاء.
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
              علامة BIS (ترخيص ISI) للتصنيع الأجنبي
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
              علامة ISI (BIS) للتصنيع الهندي
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
