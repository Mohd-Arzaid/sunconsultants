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

const BISCertificateForFurnitureArabic = () => {
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

export default BISCertificateForFurnitureArabic;

const MetaTags = () => {
  const title = "شهادة BIS للأثاث في الهند | شهادة BIS وترخيص ودليل العملية";
  const ogTitle = "شهادة BIS للأثاث في الهند - دليل شهادة BIS الكامل";
  const twitterTitle = "شهادة BIS للأثاث | دليل شهادة BIS الكامل لـ BIS الهندي";
  const metaDescription =
    "شهادة BIS للأثاث في الهند - دليل كامل عن شهادة BIS وترخيص BIS والتكلفة والمستندات والمعايير والعملية والتطبيق عبر الإنترنت وعلامة BIS لمصنعي الأثاث.";
  const ogDescription =
    "تبحث عن شهادة BIS للأثاث في الهند؟ تعرف على ترخيص BIS وعلامة BIS والمعايير المعمول بها وعملية الشهادة والتكلفة والمستندات ومتطلبات الامتثال بالتفصيل.";
  const twitterDescription =
    "دليل كامل لشهادة BIS للأثاث في الهند - عملية شهادة BIS والتكلفة والمستندات وعلامة BIS والمعايير والتطبيق عبر الإنترنت موضح.";
  const metaKeywords =
    "شهادة BIS للأثاث، شهادة BIS للأثاث، ترخيص BIS للأثاث، ترخيص BIS للأثاث، ما هو BIS، BIS الهندي";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/athath";
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
                    شهادة BIS للأثاث في الهند – دليل مفصل كامل
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
          شهادة BIS للأثاث في الهند – دليل مفصل كامل
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="ترخيص BIS للأثاث"
            alt="شهادة BIS للأثاث في الهند - دليل شهادة BIS الكامل"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          مقدمة: شهادة BIS وصناعة الأثاث الهندية
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          في الهند، يتم تنظيم جودة المنتج والسلامة والتوحيد القياسي من قبل سلطة
          قانونية مركزية تُعرف باسم مكتب المعايير الهندية (BIS). BIS هو منظمة
          المعايير الوطنية في الهند، التي تأسست بموجب قانون BIS لضمان أن
          المنتجات المباعة في السوق الهندية تتوافق مع معايير السلامة والجودة
          والأداء المحددة.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هو BIS؟
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          الشكل الكامل لـ BIS يعني مكتب المعايير الهندية. يعمل تحت إشراف وزارة
          شؤون المستهلك والغذاء والتوزيع العام، حكومة الهند. يلعب BIS دورًا
          حاسمًا في حماية مصالح المستهلكين مع دعم المصنعين من خلال نظام توحيد
          قياسي وشهادة شفاف.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهدت صناعة الأثاث الهندية نموًا سريعًا بسبب:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>التحضر</li>
          <li>توسع البنية التحتية السكنية والتجارية</li>
          <li>
            النمو في قطاعات الضيافة والتعليم والرعاية الصحية والمعيشة المشتركة
          </li>
          <li>زيادة وعي المستهلكين حول سلامة المنتج ومتانته</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          لم يعد الأثاث يُعتبر منتجًا جماليًا بحتًا. إنه مرتبط مباشرة بسلامة
          المستخدم وعلم الحركة والاستقرار الهيكلي ومقاومة الحريق والمتانة طويلة
          الأمد. الحوادث التي تنطوي على انهيار الأسرة والأسرة المزدوجة غير
          الآمنة والكراسي غير المستقرة أو وحدات التخزين دون المستوى أثارت مخاوف
          بين المنظمين والمستهلكين على حد سواء.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          لمعالجة هذه المخاطر، أصبحت شهادة BIS للأثاث متطلبًا حاسمًا للامتثال.
          يضمن BIS أن منتجات الأثاث تلبي المعايير الهندية (IS) المتعلقة بـ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القوة الهيكلية</li>
          <li>القدرة على تحمل الأحمال</li>
          <li>جودة المواد</li>
          <li>سلامة التصميم</li>
          <li>الأداء في ظل ظروف الاستخدام</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين والمستوردين والمصدرين والشركات الصغيرة والمتوسطة
          والشركات الناشئة وأصحاب العلامات التجارية للأثاث، لم يعد الحصول على
          شهادة BIS للأثاث مجرد شكليات تنظيمية—بل هو ضرورة سوقية.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تهم شهادة BIS للأثاث
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تضمن الامتثال القانوني بموجب اللوائح الهندية</li>
          <li>تعزز ثقة المستهلك ومصداقية العلامة التجارية</li>
          <li>تمكن من البيع والتوزيع غير المقيد في جميع أنحاء الهند</li>
          <li>تقليل مخاطر المسؤولية عن المنتج</li>
          <li>تحسين جاهزية التصدير والقبول العالمي</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          تم تصميم هذا الدليل الشامل ليكون المصدر الأكثر موثوقية وتفصيلاً حول
          شهادة BIS للأثاث في الهند. سواء كنت مصنعًا لأول مرة أو علامة تجارية
          أثاث راسخة، يجيب هذا الدليل على كل سؤال محتمل يتعلق بترخيص BIS للأثاث
          وتسجيل BIS للأثاث والمعايير المعمول بها والعملية والتكلفة والمستندات
          والجداول الزمنية والامتثال بعد الشهادة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS للأثاث؟
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأثاث هي موافقة رسمية تمنحها مكتب المعايير الهندية تؤكد أن
          منتج أثاث محدد يتوافق مع المعيار الهندي (IS) ذي الصلة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ما هي علامة BIS؟
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          علامة BIS، المعروفة باسم علامة ISI، هي علامة مطابقة قياسية تظهر على
          المنتجات المعتمدة. تشير إلى أن الأثاث قد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اجتاز الاختبارات المعملية</li>
          <li>تم فحص المصنع</li>
          <li>استوفى جميع متطلبات المعيار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شرح شعار BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يمثل شعار BIS سلطة BIS كجهة معايير وطنية في الهند. عند استخدامه مع
          علامة ISI على منتجات الأثاث، يضمن للمشترين أن المنتج يتوافق مع معايير
          BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          شهادة BIS الهند – الحالة القانونية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          في الهند، يمكن أن يؤدي تصنيع أو استيراد أو بيع منتجات الأثاث المغطاة
          بموجب المعايير المعلنة دون شهادة BIS إلى:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مصادرة البضائع</li>
          <li>غرامات مالية ثقيلة</li>
          <li>الملاحقة القضائية بموجب قانون BIS</li>
          <li>حظر البيع أو الاستيراد</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          وبالتالي، تحمل شهادة BIS للأثاث في الهند أهمية قانونية قوية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS مهمة لمنتجات الأثاث
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأثاث حرجة لأسباب متعددة:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. السلامة والسلامة الهيكلية
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن أن تسبب أعطال الأثاث إصابات أو وفيات. تقيم معايير BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>القدرة على تحمل الأحمال</li>
          <li>الاستقرار ضد الانقلاب</li>
          <li>قوة المفاصل</li>
          <li>أداء المواد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. الجودة والمتانة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تضمن منتجات الأثاث المعتمدة:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عمر خدمة طويل</li>
          <li>مقاومة التآكل والتمزق</li>
          <li>أداء موحد</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. ثقة المستهلك
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          علامة شهادة BIS تبني ثقة فورية بين المشترين والمؤسسات والمشترين
          بالجملة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. الوصول إلى السوق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          العديد من المناقصات الحكومية والمشترين المؤسسيين والشركات الكبيرة تفرض
          أثاثًا معتمدًا من BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. الامتثال القانوني
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          بيع أثاث غير معتمد بموجب معايير BIS الإلزامية يمكن أن يجذب غرامات
          وإجراءات قانونية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          منتجات الأثاث المغطاة بموجب شهادة BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          الأثاث هو فئة عامة واسعة تحت BIS، يغطي أنواعًا متعددة من المنتجات، كل
          منها يحكمها معايير هندية مختلفة (أرقام IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          فئات الأثاث الرئيسية المغطاة:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. كراسي العمل
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم في المكاتب والمصانع والمساحات التجارية. تركز المعايير على علم
          الحركة والاستقرار وأداء الأحمال.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. كراسي ومقاعد للأغراض العامة
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم في المنازل والمدارس والمساحات العامة. يقيم BIS السلامة
          الهيكلية وقوة المواد.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. الطاولات والمكاتب
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          يشمل مكاتب المكاتب وطاولات الدراسة ومحطات العمل. تختبر المعايير قدرة
          تحمل الأحمال ومتانة السطح.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. وحدات التخزين
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          الخزائن والخزانات والخزائن والرفوف. التركيز على الاستقرار والحواف
          الحادة والوصول الآمن.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. الأسرة
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          أسرة مفردة وأسرة مزدوجة وأسرة قابلة للطي. يتحقق BIS من قوة الإطار
          والأداء طويل الأمد.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. الأسرة المزدوجة
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          منظمة للغاية بسبب مخاطر السلامة. التركيز على الحواجز وسلامة السلم ومنع
          السقوط.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. المركبات المنجدة للأثاث غير المنزلي
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم في المكاتب والفنادق والقاعات. تشمل المعايير اختبارات مقاومة
          الحريق والمتانة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          منتجات أثاث أخرى
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>أثاث المدرسة</li>
          <li>مقاعد مؤسسية</li>
          <li>أثاث المستشفى</li>
          <li>أثاث معياري</li>
          <li>أنظمة أثاث معدنية وخشبية</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          لكل فئة منتج رقم IS الخاص بها المعمول به، يتم إعلانه بشكل منفصل من قبل
          BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          معايير BIS المعمول بها للأثاث
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ما هي معايير BIS؟
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          معايير BIS هي مواصفات تقنية تنشرها BIS لتحديد:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>متطلبات المواد</li>
          <li>معاملات الأداء</li>
          <li>طرق الاختبار</li>
          <li>إرشادات العلامات</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          معنى أرقام IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          رقم IS (رقم المعيار الهندي) يحدد بشكل فريد معيارًا معمولاً به على
          منتج.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عملية إشعار BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يصدر BIS إشعارات BIS الرسمية التي تجعل معايير معينة إلزامية. بمجرد
          الإشعار:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>يصبح الامتثال إلزاميًا</li>
          <li>المنتجات غير المعتمدة غير قانونية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          كيفية تحديد معيار BIS الصحيح
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحديد فئة المنتج</li>
          <li>دراسة نطاق IS المعمول به</li>
          <li>تأكيد قابلية تطبيق المعيار</li>
          <li>تجنب اختيار المعيار الخاطئ (خطأ شائع)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          أنواع شهادة BIS المعمول بها للأثاث
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ترخيص BIS بموجب مخطط ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          منتجات الأثاث مغطاة بشكل عام بموجب مخطط شهادة ISI، والذي يتضمن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار المنتج</li>
          <li>فحص المصنع</li>
          <li>عمليات تدقيق المراقبة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          تسجيل BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تسجيل BIS مخصص بشكل أساسي للمنتجات الإلكترونية ومنتجات تكنولوجيا
          المعلومات. عادة ما يتطلب الأثاث ترخيص BIS، وليس التسجيل.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للأثاث في الهند
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1: التحضير قبل التقديم
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحديد معيار IS المعمول به</li>
          <li>تقييم امتثال تصميم المنتج</li>
          <li>إعداد الوثائق التقنية</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2: طلب BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تقديم طلب BIS مع:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفاصيل المنتج</li>
          <li>تفاصيل التصنيع</li>
          <li>مرجع المعيار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3: التقديم على BIS عبر الإنترنت
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم تقديم الطلب من خلال بوابة BIS الإلكترونية.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4: اختبار المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم اختبار العينات في مختبرات معترف بها من BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5: فحص المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتحقق ضباط BIS من:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>عملية التصنيع</li>
          <li>مراقبة الجودة</li>
          <li>مرافق الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6: منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          عند الامتثال، يمنح BIS الترخيص.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7: استخدام علامة شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن للمصنع وضع علامة BIS / علامة ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للأثاث
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          الاختبار جزء إلزامي من عملية تسجيل BIS. يخضع الأثاث لاختبارات صارمة
          لضمان السلامة والمتانة.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الاختبارات الإلزامية للأثاث:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختبار تحميل هيكلي</li>
          <li>اختبار الاستقرار</li>
          <li>اختبار قوة الحاجز</li>
          <li>اختبار الصدمة</li>
          <li>اختبار خطر الاحتجاز</li>
          <li>اختبار قوة وزاوية السلم</li>
          <li>اختبار سلامة المواد</li>
          <li>اختبار نصف قطر الحافة والحدة</li>
          <li>اختبار دعم المرتبة</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب إجراء الاختبارات في مختبر معترف به من BIS فقط.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للأثاث
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          المستندات الرئيسية تشمل:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>إثبات تسجيل المصنع</li>
          <li>رسومات المنتج والمواصفات</li>
          <li>تفاصيل المواد الخام</li>
          <li>تقارير الاختبار</li>
          <li>سجلات مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          أخطاء التوثيق الشائعة:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مرجع معيار غير صحيح</li>
          <li>بيانات اختبار غير مكتملة</li>
          <li>عدم تطابق في نطاق المنتج</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          تكلفة شهادة BIS للأثاث
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مكونات تكلفة شهادة BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>رسوم طلب الحكومة</li>
          <li>رسوم الاختبار</li>
          <li>رسوم الفحص</li>
          <li>رسوم الترخيص</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          عوامل تكلفة شهادة BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تعقيد المنتج</li>
          <li>عدد النماذج</li>
          <li>متطلبات الاختبار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ملاحظة: رسوم الاستشارة المهنية منفصلة عن الرسوم الحكومية.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الجدول الزمني لتسجيل شهادة BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          الجدول الزمني المتوسط:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الاختبار: 3–6 أسابيع</li>
          <li>الفحص: 1–2 أسبوع</li>
          <li>منح الترخيص: 2–4 أسابيع</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          الإجمالي: 8–12 أسبوع (تقريبًا)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          كيفية الحصول على شهادة BIS في الهند لمصنعي الأثاث
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">نصائح عملية:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>اختر معيار IS الصحيح</li>
          <li>تأكد من جاهزية المصنع</li>
          <li>احتفظ بسجلات الاختبار</li>
          <li>تجنب أخطاء التوثيق</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التطبيق عبر الإنترنت لشهادة BIS – نظرة عملية
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          تحديات البوابة الإلكترونية:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>أخطاء تقنية</li>
          <li>مشاكل تحميل المستندات</li>
          <li>الارتباك في اختيار المعيار</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          الإرشاد المناسب يقلل من التأخير.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          استخدام علامة BIS وعلامة شهادة BIS بعد الموافقة
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          قواعد العلامات:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>مرجع IS صحيح</li>
          <li>رقم الترخيص</li>
          <li>الحجم والوضوح المناسب</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          عدم الامتثال يمكن أن يؤدي إلى التعليق.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات في شهادة BIS للأثاث
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تفسير المعايير</li>
          <li>فشل اختبار المنتج</li>
          <li>عدم المطابقة في الفحص</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          دور مستشاري BIS في شهادة الأثاث
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          يساعد مستشاري BIS المحترفون من خلال:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>تحديد المعايير الصحيحة</li>
          <li>إدارة الاختبار والفحص</li>
          <li>تقليل وقت الموافقة</li>
          <li>تجنب الرفض المكلف</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأثاث هي حجر الزاوية للجودة والسلامة والامتثال القانوني في
          سوق الأثاث المتنامي في الهند. سواء كنت مصنعًا أو مستوردًا أو صاحب
          علامة تجارية، فإن الحصول على شهادة BIS للأثاث في الهند يضمن:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>الامتثال التنظيمي</li>
          <li>ثقة المستهلك</li>
          <li>نجاح السوق طويل الأمد</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          من خلال فهم عملية شهادة BIS والمعايير والتكاليف ومتطلبات الامتثال،
          يمكن للشركات التنقل بثقة في المشهد التنظيمي وبناء منتجات أثاث أكثر
          أمانًا وقوة وموثوقية للسوق الهندي.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة لترخيص BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل شهادة BIS إلزامية لجميع منتجات الأثاث في الهند؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا، شهادة BIS إلزامية فقط لتلك منتجات الأثاث المغطاة بموجب معايير
              BIS المعلنة. ومع ذلك، بمجرد إعلان فئة منتج أثاث من قبل مكتب
              المعايير الهندية، يصبح تصنيع أو استيراد أو بيع أو توزيع ذلك المنتج
              دون ترخيص BIS صالح غير قانوني في الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              أي منتجات أثاث تتطلب ترخيص BIS بدلاً من تسجيل BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              منتجات الأثاث تقع بشكل عام تحت مخطط شهادة ISI، والذي يتطلب ترخيص
              BIS، وليس تسجيل BIS. ينطبق تسجيل BIS (CRS) بشكل أساسي على المنتجات
              الإلكترونية ومنتجات تكنولوجيا المعلومات، بينما تتطلب منتجات الأثاث
              الاختبار + فحص المصنع + ترخيص BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل يمكن بيع الأثاث المستورد في الهند دون شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا. يجب أن يكون لمنتجات الأثاث المستوردة المغطاة بموجب معايير BIS
              الإلزامية شهادة BIS قبل التخليص الجمركي. قد يؤدي استيراد أثاث غير
              معتمد إلى:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>احتجاز الجمارك</li>
              <li>إعادة التصدير أو التدمير</li>
              <li>غرامات ثقيلة</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              يجب على المصنعين الأجانب الحصول على ترخيص BIS قبل تصدير الأثاث إلى
              الهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل يمكن لمصنعي الأثاث الأجانب التقدم بطلب للحصول على شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم. يمكن للمصنعين الأجانب التقدم بطلب بموجب مخطط شهادة المصنعين
              الأجانب (FMCS). يجب عليهم:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>تعيين ممثل هندي معتمد (AIR)</li>
              <li>الامتثال للمعايير الهندية</li>
              <li>السماح بفحص مصنع BIS في الخارج.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل شهادة BIS مطلوبة لمصنعي الأثاث اليدوي أو الصغير؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، إذا كان منتج الأثاث مغطى بموجب معيار BIS إلزامي، فيجب حتى على
              الشركات الصغيرة والمتوسطة والشركات الناشئة والوحدات الصغيرة الحصول
              على شهادة BIS. لا يوجد إعفاء بناءً على حجم الإنتاج.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل شهادة BIS مطلوبة للأثاث الخشبي؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، قد تتطلب منتجات الأثاث الخشبي مثل الأسرة والكراسي والطاولات
              والمكاتب ووحدات التخزين شهادة BIS إذا كانت تحت المعايير المعلنة.
              تنطبق معايير BIS على الأثاث الخشبي والمعدني، اعتمادًا على نوع
              المنتج والاستخدام.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل يمكن لترخيص BIS واحد تغطية نماذج أثاث متعددة؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، يمكن تغطية نماذج أو متغيرات متعددة بموجب ترخيص BIS واحد،
              بشرط:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>تقع تحت نفس معيار IS</li>
              <li>معاملات البناء والمواد والتصميم متشابهة</li>
              <li>يوافق BIS على التجميع أثناء التقديم.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل يمكن نقل شهادة BIS إلى مصنع آخر؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              لا. ترخيص BIS غير قابل للتحويل. يجب على كل مصنع الحصول على شهادة
              BIS الخاصة به، حتى لو كان تصميم المنتج متطابقًا.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ما هي شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              إنه دليل رسمي على الامتثال لمعايير BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              هل شهادة BIS إلزامية للأثاث؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              نعم، لمنتجات الأثاث المغطاة بموجب المعايير المعلنة.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              كيفية الحصول على شهادة BIS في الهند؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              من خلال الاختبار والفحص وموافقة ترخيص BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              ما هي علامة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              علامة مطابقة تظهر موافقة BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              تكلفة شهادة BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              يعتمد على نوع المنتج والاختبار والنطاق.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              الشكل الكامل لـ BIS؟
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              مكتب المعايير الهندية.
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={2} />
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
                أفضل مستشار شهادة في الهند
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
              علامة BIS (ترخيص ISI) للتصنيع الأجنبي
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
