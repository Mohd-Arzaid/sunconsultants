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

const BISCertificateForFlashlightArabic = () => {
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

export default BISCertificateForFlashlightArabic;

const MetaTags = () => {
  const title = "شهادة BIS للمصباح اليدوي | ترخيص BIS IS 2083:2024";
  const ogTitle = "شهادة BIS للمصباح اليدوي – دليل IS 2083:2024";
  const twitterTitle = "ترخيص BIS للمصباح اليدوي | IS 2083:2024";
  const metaDescription =
    "احصل على شهادة BIS للمصباح اليدوي بموجب IS 2083:2024. العملية والمستندات والاختبار والتكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS للمصباح اليدوي وفقًا لـ IS 2083:2024. تعرف على العملية والتكلفة والمستندات والاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للمصباح اليدوي بموجب IS 2083:2024. تعلم عملية BIS والمستندات والاختبار والرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للمصباح اليدوي، ترخيص BIS للمصباح اليدوي، IS 2083:2024، شهادة BIS للمصباح اليدوي";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/masbah-yadawi-is-2083";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    شهادة BIS للمصباح اليدوي – IS 2083:2024
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
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمصباح اليدوي بموجب IS 2083:2024 – دليل الامتثال الكامل
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="ترخيص BIS للمصباح اليدوي"
            alt="شهادة BIS للمصباح اليدوي - شهادة BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          المصابيح اليدوية (التي يشار إليها عادة باسم الكشافات) هي أجهزة إضاءة
          محمولة أساسية تستخدم في المنازل والصناعات وخدمات الطوارئ والعمليات
          الأمنية والأنشطة الخارجية وإدارة الكوارث. نظرًا لأن المصابيح اليدوية
          هي منتجات كهربائية تتضمن بطاريات ودوائر كهربائية ومصادر إضاءة وأغلفة،
          فإن الامتثال للجودة والسلامة أمر بالغ الأهمية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          لتنظيم جودة المنتج والأداء وسلامة المستهلك، أعلن مكتب المعايير الهندية
          (BIS) عن IS 2083:2024 – المصباح اليدوي: المواصفات، مما يجعل شهادة BIS
          إلزامية للمصابيح اليدوية المباعة أو المصنعة أو المستوردة إلى الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          توفر هذه الصفحة شرحًا شاملاً وأصليًا لشهادة BIS للمصابيح اليدوية،
          والتي تغطي المعيار المطبق وعملية الشهادة ومتطلبات الاختبار والوثائق
          والرسوم والجداول الزمنية والعقوبات ومسؤوليات الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS ولماذا تنطبق على المصابيح اليدوية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          مكتب المعايير الهندية (BIS) هو السلطة الوطنية للمعايير في الهند
          المسؤولة عن ضمان أن المنتجات المباعة في السوق الهندية تلبي معايير
          السلامة والجودة والأداء المنصوص عليها.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          شهادة BIS تؤكد أن المصباح اليدوي:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يتوافق مع المعيار الهندي IS 2083:2024</li>
          <li>نجح في جميع الاختبارات المعملية الإلزامية</li>
          <li>يلبي المتطلبات الكهربائية والميكانيكية والأداء</li>
          <li>آمن لاستخدام المستهلك</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد الموافقة، يُسمح للمصنع بوضع علامة ISI، والتي تدل على الامتثال
          للمعايير الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المعيار الهندي المطبق – IS 2083:2024 (المصباح اليدوي: المواصفات)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – المصباح اليدوي: المواصفات
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يحدد IS 2083:2024 متطلبات البناء والأداء والسلامة والاختبار للمصابيح
          اليدوية المحمولة المستخدمة للإضاءة العامة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          نطاق IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">يغطي المعيار:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصابيح اليدوية المحمولة (الكشافات)</li>
          <li>المصابيح اليدوية التي تعمل بالبطارية</li>
          <li>المصابيح اليدوية القابلة لإعادة الشحن</li>
          <li>المصابيح اليدوية LED</li>
          <li>المصابيح اليدوية للطوارئ والاستخدام العام</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المجالات الرئيسية التي يغطيها المعيار
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>السلامة الكهربائية</li>
          <li>أداء الإضاءة</li>
          <li>القوة الميكانيكية</li>
          <li>توافق البطارية</li>
          <li>متانة المفتاح</li>
          <li>الحماية من السخونة الزائدة</li>
          <li>المقاومة للتآكل العادي</li>
          <li>متطلبات وضع العلامات والتصنيف</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على أي مصباح يدوي يقع ضمن هذا النطاق الحصول على ترخيص BIS للمصباح
          اليدوي قبل دخول السوق الهندية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS إلزامية للمصابيح اليدوية
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تستخدم المصابيح اليدوية على نطاق واسع من قبل المستهلكين من جميع الفئات
          العمرية وفي المواقف الحرجة مثل حالات الطوارئ وانقطاع التيار الكهربائي
          والعمليات الصناعية. يمكن أن تسبب المصابيح اليدوية دون المستوى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>دوائر كهربائية قصيرة</li>
          <li>تسرب البطارية أو الانفجار</li>
          <li>السخونة الزائدة</li>
          <li>مخاطر الحريق</li>
          <li>أداء إضاءة ضعيف</li>
          <li>فشل مبكر</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شهادة BIS تضمن
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>السلامة الكهربائية وسلامة المستخدم</li>
          <li>إخراج ضوء متسق</li>
          <li>بناء متين</li>
          <li>تشغيل آمن للبطارية</li>
          <li>الامتثال للمتطلبات التنظيمية الهندية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بيع المصابيح اليدوية غير المعتمدة هو انتهاك قانوني بموجب قانون BIS،
          2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق ترخيص BIS للمصباح اليدوي
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> يحدد هذا المعيار المتطلبات والاختبارات للمصابيح
          اليدوية التي تعمل ببطاريات أولية قابلة للاستبدال وبطاريات ثانوية قابلة
          للاستبدال/مدمجة بجهد أقصى يبلغ 48 فولت تيار مستمر.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> ينطبق هذا المعيار على المصابيح اليدوية من النوع
          المركز مسبقًا وكذلك نوع التركيز مع مصباح متوهج ووحدة LED كمصدر للضوء.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> لا يشمل نطاق هذا المعيار ما يلي:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            المصابيح اليدوية المتصلة بالسلك والمقبس التي تقع ضمن نطاق IS 10322
            (الجزء 5/القسم 6)؛
          </li>
          <li>إضاءة الطوارئ التي تقع ضمن نطاق IS 10322 (الجزء 5/القسم 8)؛ و</li>
          <li>المصابيح اليدوية المخصصة للأماكن الخطرة.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للمصابيح اليدوية (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتم عملية شهادة BIS للمصابيح اليدوية بموجب نظام شهادة علامة ISI
          (المخطط الأول) وتتضمن مراحل متعددة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد المنتج ورسم خريطة المعيار
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يجب على المصنع تأكيد أن المنتج مؤهل كمصباح يدوي بموجب IS 2083:2024
          وتحديد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نوع المصباح اليدوي</li>
          <li>مصدر الطاقة (بطارية/قابل لإعادة الشحن)</li>
          <li>مصدر الضوء (LED، مصباح، إلخ.)</li>
          <li>المتغيرات والموديلات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – طلب BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم تقديم الطلب من خلال بوابة BIS Manak عبر الإنترنت، بالإضافة إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المصنع</li>
          <li>عنوان المصنع</li>
          <li>وصف المنتج</li>
          <li>تفاصيل العلامة التجارية/العلامة التجارية</li>
          <li>معلومات عملية التصنيع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – دفع رسوم BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الرسوم المطبقة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم اختبار المنتج</li>
          <li>رسوم فحص المصنع</li>
          <li>رسم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار المنتج وفقًا لـ IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم اختبار العينات في مختبر معترف به من قبل BIS.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          الاختبارات الإلزامية للمصابيح اليدوية
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار شدة الإضاءة</li>
          <li>اختبار استقرار إخراج الضوء</li>
          <li>اختبار تحمل البطارية</li>
          <li>اختبار تشغيل المفتاح</li>
          <li>القوة الميكانيكية (اختبار السقوط)</li>
          <li>اختبار مقاومة العزل</li>
          <li>اختبار ارتفاع درجة الحرارة</li>
          <li>اختبار السلامة الكهربائية</li>
          <li>التحقق من وضع العلامات والتصنيف</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتم تقديم تقارير الاختبار مباشرة إلى BIS من قبل المختبر.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – فحص المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقوم مسؤول BIS بإجراء فحص في الموقع للتحقق من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إعداد التصنيع</li>
          <li>نظام مراقبة الجودة</li>
          <li>فحص المواد الواردة</li>
          <li>الفحوصات أثناء العملية</li>
          <li>اختبار المنتج النهائي</li>
          <li>معايرة أدوات الاختبار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          الامتثال لنظام الاختبار والفحص (STI) إلزامي.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الاختبار والفحص الناجحين، تصدر BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>شهادة BIS</li>
          <li>موافقة علامة ISI</li>
          <li>رقم CML (شهادة ترخيص التصنيع)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن للمصنع الآن تصنيع وبيع المصابيح اليدوية بشكل قانوني في الهند.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الامتثال بعد الشهادة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الشهادة، يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>استخدام علامة ISI بشكل صحيح على المنتج والتغليف</li>
          <li>الاحتفاظ بسجلات الجودة حسب الدفعة</li>
          <li>السماح بعمليات تفتيش مراقبة BIS</li>
          <li>تجديد الترخيص بشكل دوري</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للمصابيح اليدوية
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات التصنيع
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تسجيل/ترخيص المصنع</li>
          <li>مخطط تدفق عملية التصنيع</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار الداخلية</li>
          <li>شهادات المعايرة</li>
          <li>مخطط المصنع</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات الفنية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ورقة مواصفات المنتج</li>
          <li>الرسوم البيانية للدوائر</li>
          <li>مواصفات البطارية</li>
          <li>فاتورة المواد</li>
          <li>تقارير الاختبار الداخلية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات هوية الموقع المفوض</li>
          <li>إثبات العنوان</li>
          <li>خطاب تفويض العلامة التجارية</li>
          <li>شهادة العلامة التجارية (إن وجدت)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات BIS المحددة
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>نموذج طلب BIS</li>
          <li>التعهدات والإقرارات</li>
          <li>خطاب طلب الاختبار</li>
          <li>تصميم الملصق (تنسيق علامة ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار بموجب IS 2083:2024 (تفصيلي)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تخضع المصابيح اليدوية لاختبارات صارمة لضمان السلامة والأداء.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          فقط المنتجات التي تجتاز جميع الاختبارات الإلزامية مؤهلة للحصول على
          موافقة BIS.
        </p>

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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الإنهاء
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  فحص الأبعاد
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  فحص العلامات
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار وظيفي للمفتاح
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار مقاومة العزل
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار توزيع الضوء
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  تيار الدائرة للمصباح اليدوي LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار تيار الشحن في المصابيح اليدوية التي تعمل ببطارية قابلة
                  لإعادة الشحن المدمجة
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة في شهادة BIS للمصابيح اليدوية
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الفشل في اختبار ارتفاع درجة الحرارة</li>
          <li>إخراج ضوئي غير متسق</li>
          <li>متانة المفتاح الضعيفة</li>
          <li>مشاكل توافق البطارية</li>
          <li>تنسيق ملصق ISI غير صحيح</li>
          <li>وثائق غير كاملة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الاختبار المسبق والتوجيه الخبير يقلل بشكل كبير من مخاطر الرفض.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS لمصنعي المصابيح اليدوية
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إذن قانوني للبيع في الهند</li>
          <li>تعزيز ثقة المستهلك</li>
          <li>تحسين موثوقية المنتج</li>
          <li>القبول على منصات التجارة الإلكترونية</li>
          <li>الأهلية للمشتريات الحكومية</li>
          <li>تقليل المسؤولية والاستدعاء</li>
          <li>مصداقية علامة تجارية قوية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عقوبات بيع المصابيح اليدوية بدون شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          قد يؤدي عدم الامتثال إلى:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة المنتج</li>
          <li>عقوبات مالية ثقيلة</li>
          <li>حظر الاستيراد</li>
          <li>إغلاق التصنيع</li>
          <li>الملاحقة الجنائية بموجب قانون BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          من يحتاج إلى شهادة BIS للمصابيح اليدوية؟
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>المصنعون الهنود</li>
          <li>المصنعون الأجانب الذين يصدرون إلى الهند</li>
          <li>المستوردون</li>
          <li>أصحاب العلامات التجارية</li>
          <li>موردو OEM/ODM</li>
          <li>البائعون والموزعون عبر الإنترنت</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتطلب كل وحدة تصنيع ترخيص BIS منفصل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للمصباح اليدوي بموجب IS 2083:2024 هي متطلب تنظيمي إلزامي
          يضمن السلامة والأداء والموثوقية لمنتجات الإضاءة المحمولة في الهند. لا
          يحمي الامتثال المستهلكين فحسب، بل يعزز أيضًا مصداقية العلامة التجارية
          والوصول إلى السوق. مع التوجيه المهني، يمكن للمصنعين والمستوردين تحقيق
          شهادة BIS بسلاسة وكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للمصباح اليدوي (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. هل شهادة BIS إلزامية للمصابيح اليدوية في الهند؟
              </strong>
              <br />
              نعم. يجب أن تكون المصابيح اليدوية المشمولة بموجب IS 2083:2024
              معتمدة من BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هو المعيار الذي ينطبق على المصابيح اليدوية؟</strong>
              <br />
              IS 2083:2024 – المصباح اليدوي: المواصفات.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. كم من الوقت تستغرق عملية BIS؟</strong>
              <br />
              حوالي 30-45 يوم عمل للمصنعين الهنود وحوالي 120 يومًا للمصنعين
              الأجانب.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. هل يمكن للمصنعين الأجانب التقدم بطلب للحصول على شهادة BIS؟
              </strong>
              <br />
              نعم، من خلال نظام FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل وضع علامة ISI إلزامي؟</strong>
              <br />
              نعم، يجب عرض علامة ISI على المصابيح اليدوية المعتمدة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ماذا يحدث إذا فشل المصباح اليدوي في الاختبار؟</strong>
              <br />
              يجب تصحيح المنتج وإعادة اختباره.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. هل المصابيح اليدوية القابلة لإعادة الشحن مشمولة أيضًا؟
              </strong>
              <br />
              نعم، إذا كانت تقع ضمن نطاق IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. كم من الوقت يكون ترخيص BIS صالحًا؟</strong>
              <br />
              1-2 سنة، قابلة للتجديد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل يمكن تغطية عدة موديلات بموجب ترخيص واحد؟</strong>
              <br />
              نعم، إذا كانت تستوفي معايير التشابه.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadArabic />
        <FaqAuthorArabic questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
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
              علامة BIS (ترخيص ISI) للمصنع الأجنبي
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
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              شهادات شهادة EPR
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
              شهادات شهادة LMPC
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
              شهادة تسجيل BIS
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
              علامة ISI (BIS) للمصنعين الهنود
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
