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

const PumpsAndLiquidElevatorsArabic = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsBreadcrumb />
      <PumpsAndLiquidElevatorsMainContent />
      <ServicesArabic />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default PumpsAndLiquidElevatorsArabic;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "شهادة BIS المخطط X للمضخات ومصاعد السوائل";
  const description =
    "شهادة BIS المخطط X للمضخات ومصاعد السوائل بموجب أمر اللائحة الفنية الشاملة 2024 تجعل جميع أنواع المضخات ومصاعد السوائل يجب أن تتوافق مع شهادة المخطط X قبل سبتمبر 2026";
  const keywords =
    "شهادة BIS للمضخات, شهادة BIS المخطط X للمضخات, شهادة المخطط X للمضخات, BIS للمضخات, شهادة BIS للمضخات ومصاعد السوائل, OTR للمضخات";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "شهادة BIS المخطط X للمضخات ومصاعد السوائل في الهند | دليل كامل";
  const ogDescription =
    "تعلم كل شيء عن شهادة BIS المخطط X للمضخات ومصاعد السوائل في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsBreadcrumb = () => {
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
                    شهادة BIS المخطط X للمضخات ومصاعد السوائل
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

const PumpsAndLiquidElevatorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS المخطط X للمضخات ومصاعد السوائل في الهند
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="ترخيص BIS للمضخات ومصاعد السوائل"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          النمو السريع للصناعة والبنية التحتية في الهند يتطلب المزيد من الآلات
          العاملة وضمان تلبية الطلب المحلي والدولي. المضخات ومصاعد السوائل
          ضرورية جداً لموارد المياه والزراعة والبناء والطاقة والصناعة والعديد من
          القطاعات الأخرى. المعدات المعطلة يمكن أن تعرض السلامة للخطر وتعطل
          العمليات وتخلق خسائر مالية إذا لم يتم إنتاجها وفقاً للمواصفات الصحيحة
          مع ضوابط الجودة الموجودة.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          للسيطرة على هذا، أطلق BIS (مكتب المعايير الهندية) شهادة المخطط X، التي
          تتطلب أن تلبي كل مضخة ومصعد سوائل معايير الجودة الوطنية قبل بيعها في
          الهند.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          في هذه المقالة، ننوي مناقشة أهمية شهادة BIS للمضخات، أهمية أمر اللائحة
          الفنية الشاملة (OTR) 2024، وعملية الحصول على ترخيص BIS للمضخات بموجب
          المخطط X للمصنعين الطموحين.
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا المضخات ومصاعد السوائل مهمة
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          المضخات
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          المضخات هي أجهزة ضرورية لنقل السوائل أو الطين عبر مختلف الصناعات.
          تُستخدم على نطاق واسع في:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>أنظمة الزراعة والري</li>
          <li>إمدادات المياه العامة والاستخدام المنزلي</li>
          <li>محطات معالجة مياه الصرف الصحي والمياه المبتذلة</li>
          <li>خطوط أنابيب النفط والغاز</li>
          <li>أنظمة التكييف والتبريد الصناعية</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          مصاعد السوائل
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          مضخات الرفع، مصاعد السوائل العمودية لرفع السوائل تعمل للضخ:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>أنظمة توزيع المياه بكتلة مضخة عالية</li>
          <li>صوامع/خزانات التخزين الصناعية</li>
          <li>في صناعات الطاقة والكيماويات والمعالجة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          لأنها شائعة، المضخات الرخيصة أو مصاعد السوائل يمكن أن تسبب:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>فشل ميكانيكي</li>
          <li>مخاطر كهربائية</li>
          <li>تسرب وتآكل</li>
          <li>حوادث ناجمة عن مخاطر السلامة والخسائر الاقتصادية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          لهذا السبب BIS للمضخات ومصاعد السوائل هو حماية ضرورية جداً للمصنعين
          والمشترين أيضاً.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ما هو BIS وما هو المخطط X؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          مكتب المعايير الهندية (BIS) هو هيئة التوحيد القياسي الوطنية في الهند
          لشهادة جودة وسلامة المنتجات. للسيطرة على التركيبات والآلات الحيوية،
          جعل BIS الحصول على شهادة المخطط X إلزامياً منذ 16 مارس 2022 بموجب
          لوائح تقييم المطابقة BIS، 2018.
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          النقاط الرئيسية لشهادة المخطط X للمضخات
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>إلزامي للمصنعين الهنود والأجانب</li>
          <li>
            ينطبق على المضخات والمحركات ومصاعد السوائل المشمولة بموجب المعايير
            الهندية
          </li>
          <li>
            يتضمن اختبارات المختبر وتفتيش المصنع والتحقق من الامتثال المستمر
          </li>
          <li>
            يضيف قوة قانونية لمنح استخدام علامة BIS للمضخات من قبل المصنعين
            كدليل على الشهادة.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أمر اللائحة الفنية الشاملة (OTR) للمضخات
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أعلنت وزارة الصناعات الثقيلة OTR 2024، التي توجب أن جميع المضخات
          ومصاعد السوائل تلتزم بشهادة المخطط X.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          الموعد النهائي للامتثال:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          في موعد أقصاه 1 سبتمبر 2026، يجب على جميع المصنعين والمستوردين الحصول
          على ترخيص BIS صالح للمضخات بموجب المخطط X. عدم الامتثال يمكن أن يؤدي
          إلى غرامات ثقيلة، وكذلك إغلاق المبيعات والاستبعاد من المناقصات العامة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          لماذا شهادة BIS للمضخات ومصاعد السوائل مهمة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. ضمان السلامة: ضمان أن المعدات مصممة ومبنية لدقة التشغيل ولا تسبب:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>فشل كهربائي</li>
          <li>تسرب وصدأ</li>
          <li>تلف وفشل الآلة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. مزايا السوق
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            المضخات المعتمدة من BIS غالباً ما تكون مطلوبة للمشاريع العامة
            والمناقصات الحكومية، إلخ.
          </li>
          <li>تمنح ميزة تنافسية مقارنة بالمنتجات غير المعتمدة.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. ثقة المستهلك: علامة ISI على المضخات تعطي ثقة للمشترين حول الجودة
          وضمان كفاءة المنتج.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. العلامات التجارية العالمية تحصل على وصول سهل للسوق: مصنعو المعدات
          الأصلية الأجانب يحصلون على وصول سهل إلى السوق المنظمة الهندية من خلال
          الامتثال لمعايير المخطط X.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          أنواع المضخات بموجب تسجيل BIS المخطط X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS المخطط X يحتوي على أنواع مختلفة من المضخات بما في ذلك:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>المضخات الطاردة المركزية</li>
          <li>المضخات الغاطسة</li>
          <li>المضخات المعززة</li>
          <li>المضخات متعددة المراحل</li>
          <li>مضخات الإزاحة الإيجابية</li>
          <li>مضخات التوربينات العمودية</li>
          <li>مضخات المعالجة الكيماوية</li>
          <li>مضخات الحجاب الحاجز</li>
          <li>مضخات الطين</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن يلبي كل نوع المعايير الهندية ذات الصلة (رمز IS) مثل IS
          16819:2018/ISO 12100:2010 (سلامة الآلات - المبادئ العامة للتصميم -
          تقييم المخاطر وتقليل المخاطر).
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          لمصاعد السوائل، الشهادة تغطي:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>معدل التدفق وارتفاع التفريغ</li>
          <li>توافق المواد</li>
          <li>كفاءة الطاقة</li>
          <li>السلامة التشغيلية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          كيفية الحصول على BIS المخطط X للمضخات؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تحديد المعيار المعمول به: يجب أن تحدد الاقتباسات رمز IS المناسب (على
          سبيل المثال، IS 9079 للمضخات الغاطسة).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          اختبار المنتج: اختبارات الأداء والسلامة إلزامية في مختبر مقبول من BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تفتيش المصنع: تفحص سلطات BIS موقع الإنتاج للتحقق من تنفيذ إجراءات ضبط
          الجودة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الوثائق والطلب: المواصفات الفنية وتقارير الاختبار ودليل الجودة يجب أن
          ترافق نموذج طلب BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إصدار شهادة BIS للمضخات: المصنعون، بعد الموافقة، يتلقون ترخيصاً لتطبيق
          علامة BIS بموجب المخطط X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          المراقبة المستمرة: يجري BIS تدقيق روتيني وتفتيش منتجات عشوائية لضمان
          الامتثال المستمر.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصنعون الذين فشلوا في الحصول على شهادة BIS، بحلول 1 سبتمبر 2026،
          سيكونون عرضة لـ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>حظر بيع/استيراد المضخات غير المعتمدة</li>
          <li>مصادرة البضائع والغرامات.</li>
          <li>الاستبعاد من طلبات الحكومة وشركات القطاع العام</li>
          <li>تلف طويل الأمد على السمعة في الهند</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">الخلاصة:</span> شهادة BIS
          المخطط X للمضخات ومصاعد السوائل مع OTR 2024 سيتم تطبيقها؛ معلماً في
          توحيد معايير الصناعة الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة لأولئك الذين لديهم أنشطة تصنيع أو استيراد أو تصدير، تسجيل BIS
          للمضخات ليس مجرد عملية امتثال قانوني يجب إكمالها، بل أيضاً قرار
          استراتيجي لضمان هيمنة السلامة على المخاطر المحتملة، وبناء ثقة
          المستهلك، والدخول إلى السوق الهندي الموسع.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          شهادة BIS للمضخات ومصاعد السوائل هي استثمار طويل الأجل لبناء
          الاعتمادات وسوق منتجك.
        </p>

        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

export const ServicesArabic = () => {
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
                alt="BIS"
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
                alt="BIS"
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
