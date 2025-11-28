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
  
  const CentrifugesArabic = () => {
    return (
      <div className="relative w-full">
        <CentrifugesMetaTags />
        <CentrifugesBreadcrumb />
        <CentrifugesMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default CentrifugesArabic;
  
  const CentrifugesMetaTags = () => {
    const title =
      "شهادة BIS المخطط X لأجهزة الطرد المركزي وآلات التصفية أو التنقية";
    const description =
      "شهادة BIS المخطط X لأجهزة الطرد المركزي، آلات التصفية أو التنقية للسوائل والغازات، و/أو تجميعاتها، التجميعات الفرعية، والمكونات، تعد معلماً تنظيمياً حاسماً لقطاع الآلات الصناعية";
    const keywords =
      "شهادة BIS لأجهزة الطرد المركزي, شهادة BIS المخطط X لأجهزة الطرد المركزي, شهادة المخطط X لأجهزة الطرد المركزي, BIS لأجهزة الطرد المركزي, OTR لأجهزة الطرد المركزي";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لأجهزة الطرد المركزي في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X لأجهزة الطرد المركزي في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const CentrifugesBreadcrumb = () => {
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
                      شهادة BIS لأجهزة الطرد المركزي
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
  
  const CentrifugesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CentrifugesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const CentrifugesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS لأجهزة الطرد المركزي
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
              title="ترخيص BIS المخطط X لأجهزة الطرد المركزي"
              alt="شهادة BIS المخطط X لأجهزة الطرد المركزي وآلات التصفية أو التنقية"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            أجهزة الطرد المركزي هي آلات حيوية تُستخدم على نطاق واسع في المختبرات
            والصيدلة ومعالجة الأغذية والتكنولوجيا الحيوية والبتروكيماويات
            والتعدين. تعمل هذه الآلات بالدوران، والدوران السريع يفصل الخلائط،
            وهذا الفصل ضروري للمعالجة الدقيقة والآمنة والسريعة.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            مع التطبيقات الواسعة في مختلف الصناعات، من الضروري تحسين موثوقية
            وسلامة أجهزة الطرد المركزي. للحفاظ على معايير مراقبة الجودة لأجهزة
            الطرد المركزي، قدمت BIS مخطط شهادة BIS المعروف باسم شهادة المخطط X
            لأجهزة الطرد المركزي.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            في هذا المنشور، سنناقش ما هي شهادة BIS المخطط X لأجهزة الطرد
            المركزي، ما هو OTR لأجهزة الطرد المركزي، وكيفية الحصول على ترخيص
            BIS لأجهزة الطرد المركزي مع علامة BIS الرسمية لأجهزة الطرد المركزي.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أهمية BIS لأجهزة الطرد المركزي
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم أجهزة الطرد المركزي في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>قطاع الأدوية والتكنولوجيا الحيوية</li>
            <li>معالجة الأغذية وصناعة المشروبات</li>
            <li>مصافي النفط والصناعات البتروكيماوية</li>
            <li>المختبرات الطبية</li>
            <li>معالجة البيئة والمياه</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            عدم وجود BIS لأجهزة الطرد المركزي يمكن أن يؤدي إلى استخدام أجهزة
            طرد مركزي منخفضة الجودة أو غير معتمدة والتي يمكن أن تؤدي إلى:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>خطر التلف الميكانيكي</li>
            <li>احتمال التلوث في القطاعات الحساسة</li>
            <li>فقدان الوقت وفقدان الإيرادات</li>
            <li>كفاءة منخفضة وزيادة استهلاك الطاقة.</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            أجهزة الطرد المركزي المعتمدة من BIS مع علامة BIS لأجهزة الطرد
            المركزي تعني السلامة والجودة والثقة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certificate Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لأجهزة الطرد المركزي؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            شهادة BIS المخطط X لأجهزة الطرد المركزي هي مخطط شهادة إلزامي بموجب
            لوائح تقييم المطابقة BIS، 2018.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            شهادة المخطط X لأجهزة الطرد المركزي: الميزات الرئيسية:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>ينطبق على الشركات المصنعة الهندية والأجنبية</li>
            <li>
              ينطبق على جميع أنواع أجهزة الطرد المركزي الموجودة في المختبرات
              الصناعية والبحث والتطوير
            </li>
            <li>
              اختبار المنتج الكافي والتدقيق والتحقق من الامتثال أمر ضروري
            </li>
            <li>
              يسمح للمصنعين بالتقدم بطلب للحصول على تسجيل BIS بناءً على
              الشهادة لأجهزة الطرد المركزي المذكورة أعلاه.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR لأجهزة الطرد المركزي
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تم الإعلان عن OTR لأجهزة الطرد المركزي من قبل وزارة الصناعات
            الثقيلة في عام 2024، والتي تتطلب شهادة المخطط X.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: يُطلب من جميع المصنعين والمستوردين الحصول على
            ترخيص BIS صالح لأجهزة الطرد المركزي بموجب المخطط X بحلول 1 سبتمبر
            2026. "سيؤدي هذا إلى منع أجهزة الطرد المركزي غير المعتمدة من البيع
            أو الاستيراد أو المشاركة في المناقصات في جميع أنحاء البلاد"، حسب
            قول مسؤول حكومي.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS لأجهزة الطرد المركزي
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              السلامة والامتثال: تجنب الحوادث الناتجة عن الأضرار الميكانيكية
              بسرعات عالية.
            </li>
            <li>
              الجودة والموثوقية: أجهزة الطرد المركزي المعتمدة تعمل بدقة وكفاءة
              عالية.
            </li>
            <li>
              الوصول إلى السوق: عادة ما يكون ترخيص BIS لأجهزة الطرد المركزي
              مطلوباً للمشتريات من قبل الهيئات العامة.
            </li>
            <li>
              ثقة المستهلك: علامة BIS لأجهزة الطرد المركزي تخبر العملاء عن
              جودة المنتج ومتانته.
            </li>
            <li>
              ميزة تنافسية: العلامات التجارية/الشركات المصنعة المعتمدة من BIS
              مفضلة في الأسواق المنظمة وللمناقصات الحكومية.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Centrifuge Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع أجهزة الطرد المركزي بموجب مخطط شهادة BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            يغطي اعتماد المخطط X لأجهزة الطرد المركزي أنواعاً مختلفة مثل:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>أجهزة الطرد المركزي المخبرية</li>
            <li>الفواصل الصناعية</li>
            <li>أجهزة الطرد المركزي المبردة</li>
            <li>أجهزة الطرد الفائقة</li>
            <li>أجهزة الطرد المركزي الغازية</li>
            <li>أجهزة الطرد المركزي السلة</li>
            <li>أجهزة الطرد المركزي النازعة</li>
            <li>أجهزة الطرد المركزي المستمرة والدفعية</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تلبي جميع هذه الأنواع المعايير الهندية المعمول بها (رمز IS)
            مثل IS 16819:2018/ISO 12100:2010 (سلامة الآلات المبادئ العامة
            للتصميم - تقييم المخاطر وتقليل المخاطر). يجب أن تلبي جميع الأصناف
            المعايير الهندية المناسبة (رمز IS) للجودة والسلامة وكفاءة الطاقة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            عملية شهادة BIS لأجهزة الطرد المركزي
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              تحديد المعيار ذي الصلة: الرجوع إلى رمز IS ذي الصلة لنوع جهاز
              الطرد المركزي الخاص بك.
            </li>
            <li>
              اختبار المنتج: إجراء الاختبارات المطلوبة للأداء والسلامة وفقاً
              للمعايير الصناعية، في مختبر معتمد من BIS.
            </li>
            <li>
              تفتيش المصنع: فحص نظام ضمان الجودة في موقع الإنتاج من قبل
              مسؤولي BIS.
            </li>
            <li>
              الطلب والوثائق: توفير المتطلبات الفنية، دليل الجودة وتقارير
              الاختبار.
            </li>
            <li>
              إصدار ترخيص BIS لأجهزة الطرد المركزي: يمكنك وضع علامة BIS بعد
              الموافقة.
            </li>
            <li>
              الامتثال المستمر: تقوم BIS بالتفتيش وإجراء عمليات تدقيق غير
              مجدولة للامتثال للمعايير.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الشركات المصنعة التي ليس لديها جميع طرازات أجهزة الطرد المركزي
            معتمدة بشهادة BIS لأجهزة الطرد المركزي بحلول 1 سبتمبر 2026 تواجه
            مخاطر:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              حظر البيع/الاستيراد لأجهزة الطرد المركزي غير المعتمدة
            </li>
            <li>مصادرة المعدات غير المتوافقة والعقوبات النقدية</li>
            <li>
              سيجعلك هذا غير مؤهل للمناقصات الحكومية أو شركات القطاع العام
            </li>
            <li>قيمة العلامة التجارية ستتأثر بشكل دائم في الهند</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تطبيق شهادة BIS المخطط X لأجهزة الطرد المركزي في OTR 2024 هو خطوة
            لجلب السلامة والكفاءة والجودة إلى قطاع الصناعة والمختبرات في الهند.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يستفيد المصنعون والمستوردون والمصدرون من هذه العملية من خلال تأمين
            شهادة BIS لأجهزة الطرد المركزي، من خلال الحصول على ترخيص BIS لأجهزة
            الطرد المركزي، ووضع علامة BIS لأجهزة الطرد المركزي على منتجاتهم،
            مما يظهر أن منتجاتهم تلبي نظام التنظيم في السوق المحلي ومتطلبات
            العملاء.
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
  