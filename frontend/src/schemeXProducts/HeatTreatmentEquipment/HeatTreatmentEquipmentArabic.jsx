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
  
  const HeatTreatmentEquipmentArabic = () => {
    return (
      <div className="relative w-full">
        <HeatTreatmentEquipmentMetaTags />
        <HeatTreatmentEquipmentBreadcrumb />
        <HeatTreatmentEquipmentMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default HeatTreatmentEquipmentArabic;
  
  const HeatTreatmentEquipmentMetaTags = () => {
    const title = "شهادة BIS المخطط X لمعدات المعالجة الحرارية";
    const description =
      "شهادة BIS المخطط X تتطلب أن جميع أنواع الآلات لمعالجة المواد من خلال العمليات التي تنطوي على تغيير درجة الحرارة و/أو تجميعاتها، التجميعات الفرعية، ومكوناتها يجب أن تكون معتمدة من BIS";
    const keywords =
      "شهادة BIS لمعدات المعالجة الحرارية, شهادة BIS المخطط X لمعدات المعالجة الحرارية, شهادة المخطط X لمعدات المعالجة الحرارية, BIS لمعدات المعالجة الحرارية, OTR لمعدات المعالجة الحرارية";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لمعدات المعالجة الحرارية في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X لمعدات المعالجة الحرارية في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const HeatTreatmentEquipmentBreadcrumb = () => {
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
                      شهادة BIS لمعدات المعالجة الحرارية
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
  
  const HeatTreatmentEquipmentMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <HeatTreatmentEquipmentMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const HeatTreatmentEquipmentMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS لمعدات المعالجة الحرارية
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
              title="ترخيص BIS المخطط X لمعالجة المواد"
              alt="شهادة BIS المخطط X لمعدات المعالجة الحرارية"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            معدات المعالجة الحرارية هي واحدة من أكثر التطبيقات أهمية في الصناعات
            مثل السيارات والطيران والصب والحدادة والهندسة الثقيلة. هذه أجهزة تغير
            الخصائص الفيزيائية والميكانيكية للمعادن من خلال عمليات مثل التلدين
            والتبريد والتصلب والتمييع، إلخ.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            نظراً لأهميتها، أعلن مكتب المعايير الهندية (BIS) شهادة BIS لمعدات
            المعالجة الحرارية إلزامية بموجب شهادة المخطط X. يضمن هذا أن المصنعين
            الهنود والعالميين يلتزمون بالمعايير الهندية الصارمة قبل تسويق المعدات
            في البلاد.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            في هذه المقالة، سنشرح أهمية شهادة BIS المخطط X لمعدات المعالجة
            الحرارية، OTR لمعدات المعالجة الحرارية، وعملية الحصول على ترخيص BIS
            لمعدات المعالجة الحرارية مع علامة BIS لمعدات المعالجة الحرارية.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أهمية BIS لمعدات المعالجة الحرارية
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أفران المعالجة الحرارية تُستخدم عادة في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>صناعات المعادن والفلزات</li>
            <li>إنتاج السيارات والطيران</li>
            <li>تصنيع الأدوات والقوالب</li>
            <li>صناعات الطاقة والآلات الثقيلة الأخرى</li>
            <li>الدفاع والهندسة الدقيقة</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            عدم وجود BIS لمعدات المعالجة الحرارية يمكن أن يؤدي إلى آلات منخفضة
            الجودة يمكن أن تسبب:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>تسخين مفرط أو معالجة غير مناسبة</li>
            <li>فشل الآلية وهيكل المنتج النهائي</li>
            <li>زيادة استهلاك الطاقة ونقص الكفاءة</li>
            <li>مخاطر السلامة للمشغلين</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            شهادة BIS لا تضمن فقط أن المعدات تعمل بشكل جيد وآمن وفقاً لمتطلبات
            الأداء الصناعي بل تلبي أيضاً معايير البيئة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لمعدات المعالجة الحرارية؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            المخطط X - معدات المعالجة الحرارية، تماشياً مع وزارة الصلب، حكومة
            الهند، وهو مخطط شهادة إلزامي بموجب لوائح تقييم المطابقة BIS الهندية،
            2018.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            شهادة المخطط X لمعدات المعالجة الحرارية: الميزات الرئيسية:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>إلزامي للمصنعين الهنود والأجانب</li>
            <li>
              يمكن استخدامه على معظم أنواع معدات المعالجة الحرارية والأفران
            </li>
            <li>
              يتضمن اختبار المنتج وفحص أرضية المصنع وتدقيق الامتثال المستمر.
            </li>
            <li>يُسمح للمصنعين باستخدام علامة معيار BIS.</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR لمعدات المعالجة الحرارية
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أصدرت وزارة الصناعات الثقيلة في عام 2024 أمر اللائحة الفنية الشاملة
            (OTR) لمعدات المعالجة الحرارية، حيث يكون الامتثال للمخطط X إلزامياً.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: يحتاج جميع المصنعين والمستوردين إلى الحصول على ترخيص
            BIS صالح لمعدات المعالجة الحرارية بحلول 1 سبتمبر 2026. بعد هذا التاريخ،
            معدات المعالجة الحرارية غير المعتمدة لن تكون مؤهلة للبيع أو الاستيراد
            أو تقديم العطاءات في المناقصات العامة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS لمعدات المعالجة الحرارية
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              السلامة التشغيلية: الحماية من التسخين المفرط والمعالجة غير المتساوية
              وتلف المعدات.
            </li>
            <li>
              موثوقية المنتج: ضمان أن العناصر المعالجة تلبي مواصفات الصلابة
              والمتانة والمقاومة
            </li>
            <li>
              كفاءة الطاقة: المعدات المعتمدة مختبرة لاستخدام الطاقة الأمثل، مما
              يقلل التكاليف التشغيلية.
            </li>
            <li>
              الوصول إلى السوق: علامة BIS لمعدات المعالجة الحرارية غالباً ما تكون
              إلزامية للمشتريات العامة والمناقصات الحكومية.
            </li>
            <li>
              الميزة العالمية: العلامات التجارية العالمية يمكنها الحصول على وصول
              سهل إلى السوق الهندي من خلال الحصول على ترخيص BIS لمعدات المعالجة
              الحرارية.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Equipment Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع معدات المعالجة الحرارية بموجب مخطط شهادة BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لمعدات المعالجة الحرارية تغطي عدداً كبيراً من
            الآلات مثل:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>أفران التلدين</li>
            <li>أفران التبريد</li>
            <li>أفران التصلب والتمييع</li>
            <li>أفران دوارة للمعالجة الحرارية المستمرة</li>
            <li>أفران الكربنة والنتردة.</li>
            <li>معدات المعالجة الحرارية بالحث والكهرباء</li>
            <li>أجهزة المعالجة الحرارية التي تعمل بالغاز والنفط</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يحتاج كل نوع إلى الامتثال للمعايير الهندية ذات الصلة (رمز IS) مثل IS
            16819:2018/ISO 12100:2010. خصائص الأداء ودرجة المواد وميزات توفير
            الطاقة يجب أن تتوافق مع المعايير الهندية ذات الصلة (رمز IS) لكل نوع
            من المعدات.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            عملية شهادة BIS لمعدات المعالجة الحرارية
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              تحديد المعيار ذي الصلة: الرجوع إلى رمز IS ذي الصلة لنوع معدات المعالجة
              الحرارية الخاصة بك.
            </li>
            <li>
              الاختبار في مختبر معترف به من BIS: إجراء اختبارات الأداء والسلامة
              والكفاءة.
            </li>
            <li>
              تفتيش المصنع: يفحص BIS نظام مراقبة الجودة ومرافق الإنتاج.
            </li>
            <li>
              الطلب والوثائق: توفير النتائج والاختبارات التي تم إجراؤها والمواصفات
              الفنية ودليل الجودة.
            </li>
            <li>
              إصدار ترخيص BIS لمعدات المعالجة الحرارية: الموافقة تسمح باستخدام
              علامة BIS لمعدات المعالجة الحرارية.
            </li>
            <li>
              الامتثال المستمر: يتم إجراء التدقيق والتفتيش بانتظام للحفاظ على معايير
              الجودة.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            إذا لم يتم الوفاء بـ OTR لمعدات المعالجة الحرارية بحلول 1 سبتمبر 2026:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>حظر بيع/استيراد المعدات غير المعتمدة</li>
            <li>غرامات ومصادرة المنتجات</li>
            <li>عدم الأهلية للمناقصات الحكومية وشركات القطاع العام</li>
            <li>فقدان قيمة العلامة التجارية على المدى الطويل في السوق الهندي</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            التطبيق الإلزامي لشهادة المخطط X لمعدات المعالجة الحرارية بموجب OTR
            2024 هو معلماً مهماً في تحسين معايير الصناعة الهندية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة لمصنعي ومستوردي ومصدري معدات المعالجة الحرارية، عملية الحصول
            على شهادة BIS لمعدات المعالجة الحرارية، للحصول على ترخيص BIS لمعدات
            المعالجة الحرارية واستخدام علامة معيار BIS لمعدات المعالجة الحرارية
            ليست فقط حول الامتثال، إنها حول بناء منتجات آمنة وموثوقة وقادرة على
            المنافسة في السوق في الحصول على سوق منظم.
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
  