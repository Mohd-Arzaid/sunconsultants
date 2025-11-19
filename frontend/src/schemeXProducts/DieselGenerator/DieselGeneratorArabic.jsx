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
  import { Helmet } from "react-helmet-async";
  import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
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
  
  const DieselGeneratorArabic = () => {
    return (
      <div className="relative w-full">
        <DieselGeneratorMetaTags />
        <DieselGeneratorBreadcrumb />
        <DieselGeneratorMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default DieselGeneratorArabic;
  
  const DieselGeneratorMetaTags = () => {
    const title = "شهادة BIS المخطط X لمولدات الديزل";
    const description =
      "شهادة BIS المخطط X لمولدات الديزل ومكوناتها هي خطوة تنظيمية مهمة تهدف إلى توحيد المعايير والحفاظ على الجودة والسلامة في الهند";
    const keywords =
      "شهادة BIS لمولدات الديزل, شهادة BIS المخطط X لمولدات الديزل, شهادة المخطط X لمولدات الديزل, BIS لمولدات الديزل, OTR لمولدات الديزل";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لمولدات الديزل في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X لمولدات الديزل في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const DieselGeneratorBreadcrumb = () => {
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
                      شهادة BIS المخطط X لمولدات الديزل
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
  
  const DieselGeneratorMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <DieselGeneratorMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const DieselGeneratorMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS المخطط X لمولدات الديزل
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
              alt="شهادة BIS المخطط X لمولدات الديزل"
              title="ترخيص BIS المخطط X لمولدات الديزل"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم مولدات الديزل في الأماكن التجارية والصناعية والمستشفيات
            ومشاريع البنية التحتية ومشاريع الإسكان وفي أماكن أخرى كثيرة كمصدر
            طاقة ثانوي. كأصل اقتصادي مع مسؤولية ضمان استمرارية إمدادات الكهرباء،
            من المهم أن تكون الآلات آمنة وفعالة وتلبي المعايير الوطنية.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            في محاولة للقيام بذلك، تم تضمين شهادة BIS لمولدات الديزل في شهادة
            المخطط X من مكتب المعايير الهندية (BIS). تم تطبيق هذا المخطط لضمان
            أن المصنعين الوطنيين والعالميين على حد سواء يلبون المعايير الهندية
            الصارمة والدقيقة قبل بيع منتجاتهم في الهند.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            تناقش هذه المقالة أهمية شهادة BIS المخطط X لمولدات الديزل، تفويض OTR
            لعام 2024 وكيف يمكن للمصنعين الحصول على الشهادة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أهمية BIS لمولدات الديزل
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم مولدات الديزل في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>المصانع ومواقع العمل</li>
            <li>المستشفيات والاستجابة للطوارئ</li>
            <li>مراكز البيانات ومراكز تكنولوجيا المعلومات</li>
            <li>المباني التجارية والسكنية</li>
            <li>الأعمال العامة والمرافق</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            المخاطر كبيرة جداً إذا لم يتم اعتماد مجموعات مولدات الديزل بشكل صحيح:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              فشل العداد (ميكانيكي وكهربائي) مما يؤدي إلى نقص الإمداد
            </li>
            <li>
              مخاطر عالية للحريق ومخاطر السلامة على الوحدات غير الممتثلة
            </li>
            <li>انبعاثات عالية جداً وغير فعالة في استهلاك الطاقة</li>
            <li>عوائق قانونية، مقفل من المناقصات</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يمكن لمولدات الديزل بسهولة تلبية شهادة المخطط X التي تسمح للمصنعين
            ببيع منتجات آمنة وموثوقة وصديقة للبيئة للاستخدام في الهند.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لمولدات الديزل؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لمولدات الديزل هي عملية شهادة رسمية ونظام أنشأته
            لوائح تقييم المطابقة BIS 2018. تتطلب اختبارات صارمة وتقييم الجودة
            للتحقق من الامتثال للمعايير الهندية.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            أبرز شهادة المخطط X:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>جميع المصنعين - الهند والأجانب - متطلب إلزامي</li>
            <li>
              ينطبق على جميع أنواع مولدات الديزل بسعات مختلفة
            </li>
            <li>
              يتضمن اختبار المنتج في مختبرات معتمدة من BIS
            </li>
            <li>
              تدقيق المصنع، زيارة الورشة وفحص عملية الإنتاج، لإجراء تفتيش المصنع
              في الموقع بشكل مستقل لضمان معايير الجودة والسلامة.
            </li>
            <li>
              يقدم ترخيصاً لاستخدام علامة معيار BIS عند الترخيص
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR لمولدات الديزل (DG)
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أصدرت وزارة الصناعات الثقيلة إشعاراً لـ OTR لمولدات الديزل في عام 2024.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            تاريخ التنفيذ: يجب على جميع المصنعين والمستوردين الحصول على الشهادة
            بحلول 1 سبتمبر 2026. اعتباراً من هذا التاريخ، سيتم حظر إنتاج أو بيع أو
            استيراد مجموعات مولدات الديزل غير المعتمدة في الهند.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS لمولدات الديزل
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ضمان السلامة: تقليل الفشل الميكانيكي، بناءً على تقنيات منع الحرائق
              لمنع الحرائق والدوائر القصيرة والحوادث.
            </li>
            <li>
              الامتثال البيئي: ضمان اتباع معايير توفير الطاقة وتقليل الانبعاثات.
            </li>
            <li>
              الوصول إلى السوق: OTR لمولدات الديزل - شهادة إلزامية للبيع في الهند
            </li>
            <li>
              ثقة العملاء: علامة معيار BIS تضمن موثوقية عالية وسلامة.
            </li>
            <li>
              الأهلية للمناقصات: للعقود الحكومية/شركات القطاع العام، يجب أن يكون
              المنتج معتمداً.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Diesel Generators Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع مولدات الديزل المشمولة في المخطط X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            يغطي مخطط شهادة مولدات الديزل X المجموعات التالية:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>مولدات منزلية متنقلة تعمل بالديزل</li>
            <li>مجموعات مولدات ديزل تجارية (سعة عالية)</li>
            <li>مولدات إمداد طاقة الطوارئ والاحتياطية</li>
            <li>
              مجموعات مولدات ديزل صامتة للتجارية (تطبيقات واستخدامات حضرية)
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن يلتزم كل نوع فرعي بالمعايير الهندية المعمول بها (رمز IS) مثل
            IS 16819:2018 / ISO 12100:2010 (سلامة الآلات المبادئ العامة للتصميم -
            تقييم المخاطر وتقليل المخاطر). يجب أن يلبي كل نوع معاييره الهندية
            الخاصة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            إجراءات شهادة BIS لمولدات الديزل
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              تحديد المعيار المعمول به: اكتشف رمز IS لنوع المولد.
            </li>
            <li>
              اختبار المنتج: قم بإجراء اختبارات السلامة والأداء والانبعاثات في
              مختبر معترف به من BIS.
            </li>
            <li>
              تدقيق المصنع: يفحص مسؤولو BIS عمليات مراقبة الجودة التصنيعية.
            </li>
            <li>
              تقديم الوثائق: قدم المواصفات ونتائج الاختبار ووثائق الامتثال.
            </li>
            <li>
              منح الترخيص: بعد الموافقة، يصدر BIS الترخيص ويسمح باستخدام علامة
              المعيار.
            </li>
            <li>
              الامتثال المستمر: يتم إجراء تدقيق وتفتيش المنتج لضمان بقاء الشهادة
              صالحة.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الفشل في الامتثال لشهادة BIS لمولدات الديزل من OTR لمولدات الديزل
            يمكن أن يؤدي إلى:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              حظر بيع واستيراد وتصنيع المعدات غير المعتمدة.
            </li>
            <li>مصادرة البضائع وغرامات مالية</li>
            <li>عدم الأهلية للعقود الحكومية</li>
            <li>ضرر دائم للسمعة والمالية</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لمولدات الديزل وفقاً لـ OTR لمولدات الديزل (2024)
            هي معلماً مهماً في رحلة تحسين سلامة المنتج والموثوقية والكفاءة في
            صناعة الطاقة الاحتياطية الهندية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة للمصنعين/المستوردين، شهادة المخطط X لمولدات الديزل ليست مجرد
            متطلب قانوني، بل هي ميزة تنافسية تعكس المصداقية والامتثال وثقة السوق.
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
  