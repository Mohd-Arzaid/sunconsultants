import FaqAuthorArabic from "@/components/common/FaqAuthor/FaqAuthorArabic";
import ManyUsersAlsoReadArabic from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateforGeneralPurposeChairsandStoolsArabic = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default BISCertificateforGeneralPurposeChairsandStoolsArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة | رخصة BIS IS 17632:2022";
  const ogTitle =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة – دليل IS 17632:2022";
  const twitterTitle =
    "رخصة BIS للكراسي والمقاعد للأغراض العامة | IS 17632:2022";
  const metaDescription =
    "احصل على شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022. العملية، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للكراسي والمقاعد للأغراض العامة وفقًا لـ IS 17632:2022. تعرف على العملية، التكلفة، المستندات، الاختبارات وفوائد رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022. تعرف على عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة، رخصة BIS للكراسي والمقاعد للأغراض العامة، IS 17632:2022، شهادة BIS للكراسي والمقاعد للأغراض العامة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-ammat-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, رئيس العمليات في Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
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
                    <Link to="/Blogs">أحدث المدونات</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    شهادة BIS للكراسي والمقاعد للأغراض العامة – IS 17632:2022
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentArabic />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للكراسي والمقاعد للأغراض العامة – دليل كامل لـ IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforchairsandstools.webp"
            title="رخصة BIS للكراسي والمقاعد للأغراض العامة"
            alt="شهادة BIS للكراسي والمقاعد للأغراض العامة - شهادة BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للكراسي والمقاعد للأغراض العامة هي متطلب إلزامي بموجب
          المعيار الهندي IS 17632:2022. يحدد هذا المعيار متطلبات السلامة
          والمتانة والأداء للكراسي والمقاعد المستخدمة في المنازل والمكاتب
          والمناطق التجارية والمؤسسات التعليمية والمقاصف والمطاعم والفنادق
          والأماكن العامة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الكراسي والمقاعد من بين أكثر قطع الأثاث استخدامًا وتتعرض باستمرار
          للحمل والحركة والإجهاد المتكرر. قد ينهار الكرسي أو المقعد الضعيف
          هيكليًا فجأة، مما يؤدي إلى إصابات. لمنع مثل هذه المخاطر وضمان سلامة
          المستهلك، يتطلب مكتب المعايير الهندية (BIS) من كل مصنع ومستورد الحصول
          على شهادة BIS للكراسي والمقاعد قبل بيعها في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          توفر هذه الصفحة دليلاً كاملاً لشهادة BIS للكراسي والمقاعد بموجب IS
          17632:2022، بما في ذلك عملية الشهادة والمستندات المطلوبة ومتطلبات
          الاختبار والرسوم والتحديات والعقوبات والفوائد.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS هي نظام امتثال للمنتجات يحكمه مكتب المعايير الهندية، السلطة
          الوطنية للمعايير في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تضمن شهادة BIS أن المنتج:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يلبي معايير السلامة والجودة الهندية</li>
          <li>اجتاز اختبارات المختبر المعتمدة من BIS</li>
          <li>خضع لفحص المصنع</li>
          <li>يحمي المستهلكين من المنتجات غير الآمنة أو دون المستوى</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تعرض المنتجات المعتمدة علامة ISI، مما يثبت الامتثال للمعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار المعمول به – IS 17632:2022 للكراسي والمقاعد
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          المعيار BIS للكراسي والمقاعد هو:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> — الكراسي والمقاعد للأغراض العامة:
          متطلبات السلامة
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يغطي هذا المعيار جميع الكراسي والمقاعد غير المتخصصة المستخدمة لأغراض
          الجلوس في المنازل والمكاتب والبيئات التجارية والأماكن العامة
          والإعدادات المؤسسية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المنتجات المشمولة بموجب IS 17632:2022
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>كراسي للأغراض العامة</li>
          <li>كراسي الطعام</li>
          <li>كراسي زوار المكتب</li>
          <li>كراسي الدراسة</li>
          <li>كراسي المقصف</li>
          <li>كراسي المطاعم</li>
          <li>كراسي غرف الاجتماعات</li>
          <li>كراسي منطقة الانتظار</li>
          <li>كراسي خشبية</li>
          <li>كراسي معدنية</li>
          <li>كراسي بلاستيكية (غير متخصصة)</li>
          <li>مقاعد للأغراض العامة</li>
          <li>مقاعد البار</li>
          <li>مقاعد الطعام</li>
          <li>مقاعد الخطوة (ضمن المعايير المحددة)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معايير السلامة والأداء الرئيسية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقيم IS 17632:2022:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القوة الهيكلية</li>
          <li>الاستقرار</li>
          <li>المتانة تحت الاستخدام المتكرر</li>
          <li>قوة المقعد</li>
          <li>أداء مسند الظهر</li>
          <li>مقاومة تأثير الأرجل</li>
          <li>قوة المفاصل</li>
          <li>جودة التشطيب السطحي</li>
          <li>سلامة الحواف والزوايا</li>
          <li>جودة المواد</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تمتثل جميع الكراسي والمقاعد المباعة في الهند لهذه المعايير
          والحصول على رخصة BIS للكراسي والمقاعد.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية للكراسي والمقاعد
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          تحمل الكراسي والمقاعد وزن الإنسان وتستخدم بشكل متكرر في جميع البيئات.
          يمكن أن يؤدي الفشل الهيكلي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>انهيار الكراسي</li>
          <li>كسر الأرجل</li>
          <li>تصدع المقعد</li>
          <li>فشل مسند الظهر</li>
          <li>إصابة بسبب الحواف الحادة</li>
          <li>عدم الاستقرار المؤدي إلى السقوط</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فوائد شهادة BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يضمن منتجات جلوس آمنة</li>
          <li>يمنع الحوادث والإصابات</li>
          <li>يحسن متانة المنتج</li>
          <li>يمنع الواردات دون المستوى</li>
          <li>يؤسس جودة سوق موحدة</li>
          <li>يعزز ثقة العملاء</li>
          <li>إلزامي بموجب القانون الهندي (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بدون شهادة BIS، لا يمكن للمصنعين بيع الكراسي أو المقاعد بشكل قانوني في
          الهند.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للكراسي والمقاعد (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتبع عملية BIS مخطط شهادة علامة ISI، بما في ذلك الاختبار والفحص
          والتحقق من الطلب.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد نوع المنتج والمعيار
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تأكد من أن الكرسي/المقعد يندرج تحت IS 17632:2022.</li>
          <li>حدد المتغيرات التصميمية والمواد المستخدمة.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – تقديم طلب BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم تقديم الطلب من خلال بوابة BIS Manak الإلكترونية، ويتطلب:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>معلومات المصنع</li>
          <li>مواصفات المنتج</li>
          <li>تفاصيل العلامة التجارية/العلامة التجارية</li>
          <li>سير عمل عملية التصنيع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – دفع رسوم شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">تشمل الرسوم:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم اختبار العينات</li>
          <li>رسوم فحص المصنع</li>
          <li>رسوم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار المنتج وفقًا لـ IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم إجراء الاختبار الإلزامي في مختبر معترف به من BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الاختبارات:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار الاستقرار</li>
          <li>اختبار القوة للمقعد</li>
          <li>اختبار متانة مسند الظهر</li>
          <li>اختبار تحميل الأرجل للأمام/الجانب/الخلف</li>
          <li>اختبار تأثير المقعد</li>
          <li>اختبار السقوط</li>
          <li>اختبار التعب</li>
          <li>اختبار التشطيب السطحي</li>
          <li>اختبار الحافة الحادة</li>
          <li>المتانة الهيكلية تحت الدورات المتكررة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تظهر نتائج الاختبار الامتثال الكامل لـ IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – فحص المصنع من قبل BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يزور ضابط BIS المصنع لتقييم:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع</li>
          <li>فحص المواد الخام</li>
          <li>إجراءات مراقبة الجودة</li>
          <li>قدرة الاختبار</li>
          <li>معايرة المعدات</li>
          <li>حجم الإنتاج</li>
          <li>الامتثال لمخطط BIS للاختبار والفحص (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح رخصة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          إذا نجحت الاختبارات والفحص، يصدر BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS (رخصة علامة ISI)</li>
          <li>رقم CML</li>
          <li>الموافقة على وضع علامة ISI على الكراسي والمقاعد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الالتزامات بعد الترخيص
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>استخدام علامة ISI وفقًا لمتطلبات وضع العلامات من BIS</li>
          <li>الحفاظ على سجلات مراقبة الجودة</li>
          <li>الخضوع لفحوصات مراقبة BIS المنتظمة</li>
          <li>تجديد الترخيص كل 1-2 سنوات</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق رخصة BIS للكراسي والمقاعد
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يغطي هذا المعيار متطلبات الكراسي والمقاعد للأغراض العامة. ينطبق هذا
          المعيار على الكراسي والمقاعد للأغراض العامة المصنعة/المصنعة بالكامل.
          كما ينطبق على الوحدات الجاهزة للتجميع؛ في هذه الحالة تنطبق متطلبات هذا
          المعيار على الوحدات المجمعة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للكراسي والمقاعد
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات المصنع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رخصة/تسجيل المصنع</li>
          <li>مخطط سير عملية التصنيع</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار الداخلية</li>
          <li>شهادات المعايرة</li>
          <li>تخطيط المصنع ومخطط الأرضية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسومات الكرسي/المقعد</li>
          <li>الأبعاد والمواصفات</li>
          <li>قائمة المواد</li>
          <li>وصف ميزات السلامة</li>
          <li>تقارير اختبار الجودة الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات الهوية والعنوان</li>
          <li>خطاب تفويض العلامة التجارية</li>
          <li>شهادة العلامة التجارية (اختياري)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات طلب BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج الطلب</li>
          <li>نموذج طلب الاختبار</li>
          <li>نماذج الإقرار</li>
          <li>خطاب التفويض</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للكراسي والمقاعد (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتضمن IS 17632:2022 اختبارات ميكانيكية وهيكلية واختبارات سلامة شاملة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          الاختبارات الإلزامية
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  المتطلب
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التصميم والإتقان
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  عدم التوازن للأمام والجانب للكراسي بدون مساند
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  عدم التوازن للخلف
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  عدم التوازن الجانبي للكراسي ذات المساند
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  المقاعد/المقاعد المنخفضة (جميع الاتجاهات)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار القوة
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          تضمن هذه الاختبارات الاستخدام اليومي الآمن في ظل الظروف الواقعية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>فشل الكرسي في اختبارات الاستقرار</strong>
            <br />
            يحدث بسبب توزيع الوزن غير الصحيح.
            <br />
            الحل: تحسين تصميم الأرجل، توسيع منطقة القاعدة.
          </li>
          <li>
            <strong>المفاصل الضعيفة تسبب فشل الاختبارات</strong>
            <br />
            الحل: استخدام مواد معززة وموصلات أفضل.
          </li>
          <li>
            <strong>معدات الاختبار الداخلية غير كافية</strong>
            <br />
            الحل: تثبيت الأدوات المطلوبة المتوافقة مع BIS.
          </li>
          <li>
            <strong>عدم اتساق الوثائق</strong>
            <br />
            الحل: إعداد المستندات بشكل منهجي قبل التقديم.
          </li>
          <li>
            <strong>متغيرات المنتج غير معينة بشكل صحيح</strong>
            <br />
            الحل: تجميع المنتجات بناءً على الهيكل ومعاملات الاختبار.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS للكراسي والمقاعد
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الإذن القانوني للبيع في الهند</li>
          <li>تحسين سلامة المنتج</li>
          <li>تعزيز ثقة العملاء</li>
          <li>تقليل مخاطر مسؤولية المنتج</li>
          <li>مطلوب لقوائم التجارة الإلكترونية</li>
          <li>ضروري لمناقصات الحكومة</li>
          <li>مصداقية أعلى للعلامة التجارية</li>
          <li>ميزة تنافسية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات لعدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع الكراسي أو المقاعد بدون شهادة BIS قد يؤدي إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>غرامات مالية ثقيلة</li>
          <li>استدعاء/مصادرة المنتج</li>
          <li>إلغاء تراخيص المصنع</li>
          <li>الملاحقة الجنائية</li>
          <li>قيود الاستيراد</li>
          <li>القائمة السوداء في السوق</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتم فرض العقوبات بموجب قانون BIS لعام 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS للكراسي والمقاعد؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">إلزامي لـ:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعين الهنود</li>
          <li>المصنعين الأجانب المصدرين إلى الهند</li>
          <li>المستوردين</li>
          <li>أصحاب العلامات التجارية/التجار</li>
          <li>موردي OEM/ODM</li>
          <li>سلاسل البيع بالتجزئة</li>
          <li>البائعون عبر الإنترنت</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتطلب كل مصنع رخصة BIS منفصلة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022 إلزامية
          لضمان سلامة المنتج والاستقرار الهيكلي والمتانة. لا تساعد شهادة BIS
          المصنعين فقط في الحفاظ على معايير الجودة العالية ولكنها تمكن أيضًا من
          الوصول القانوني إلى السوق وتزيد من ثقة المستهلك.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع المساعدة المهنية، تصبح عملية الشهادة—من الاختبار إلى الفحص
          والموافقة—سلسة وقابلة للتنبؤ ومتوافقة بالكامل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للكراسي والمقاعد
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. هل شهادة BIS إلزامية للكراسي والمقاعد؟</strong>
              <br />
              نعم، وفقًا لـ IS 17632:2022، يجب أن تكون جميع الكراسي والمقاعد
              للأغراض العامة معتمدة من BIS قبل بيعها في الهند.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هي الاختبارات المطلوبة؟</strong>
              <br />
              اختبارات الاستقرار والقوة والمتانة والتأثير والتعب وسلامة المواد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. كم تستغرق شهادة BIS؟</strong>
              <br />
              عادة 30-45 يومًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ما هي تكلفة الشهادة؟</strong>
              <br />
              حوالي ₹60,000–₹1,30,000 حسب الاختبار والفحص.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل يمكن للمصنعين الأجانب التقديم؟</strong>
              <br />
              نعم، بموجب نظام FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. هل وضع علامة ISI إلزامي؟</strong>
              <br />
              نعم، بعد منح رخصة BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. لماذا تفشل الكراسي في اختبار BIS؟</strong>
              <br />
              تشمل الأسباب الشائعة الأرجل الضعيفة وقوة المفاصل الضعيفة وعدم
              الاستقرار.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل يمكن تغطية نماذج متعددة تحت رخصة واحدة؟</strong>
              <br />
              فقط إذا استوفت معايير التشابه والامتثال للمعايير.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل فحص المصنع مطلوب؟</strong>
              <br />
              نعم، إلزامي لشهادة علامة ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ما هي المستندات المطلوبة؟</strong>
              <br />
              رخصة المصنع والمواصفات الفنية وقائمة الآلات وخطة مراقبة الجودة
              ورسومات المنتج، إلخ.
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={5} />
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
                أفضل مستشار شهادات في الهند
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
