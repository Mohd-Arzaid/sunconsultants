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
  import FooterArabic from "@/components/manual/Footer/FooterArabic";
  import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
  import { Helmet } from "react-helmet-async";
  import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
  import { BoxReveal } from "@/components/magicui/box-reveal";
  import { Separator } from "@/components/ui/separator";
  const BISImage = "/services-images/BIS.jpg";
  const CDSCO = "/services-images/CDSCO.jpg";
  const BISCRS = "/services-images/BISCRS.jpg";
  const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
  const EPRCertificate = "/services-images/EPRCertificate.jpg";
  const LMPC = "/services-images/LMPC.jpg";
  const ISIMarkImage = "/services-images/ISIMark.jpg";
  
  const CranesArabic = () => {
    return (
      <div className="relative w-full">
        <CranesMetaTags />
  
        <CranesBreadcrumb />
        <CranesMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default CranesArabic;
  
  const CranesMetaTags = () => {
    const title = "شهادة BIS المخطط X للرافعات";
    const description =
      "مكتب المعايير الهندية (BIS) قدم شهادة المخطط X الإلزامية لجميع أنواع الرافعات مع تجميعاتها، التجميعات الفرعية، ومكوناتها.";
    const keywords =
      "شهادة BIS للرافعات, شهادة BIS المخطط X للرافعات, شهادة المخطط X للرافعات, BIS للرافعات, OTR للرافعات";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X للرافعات في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X للرافعات في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const CranesBreadcrumb = () => {
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
                      BIS المخطط X للرافعات
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
  
  const CranesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CranesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const CranesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS المخطط X للرافعات
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
              alt="شهادة BIS المخطط X للرافعات"
              title="ترخيص BIS المخطط X للرافعات"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم الرافعات بشكل أساسي لرفع ونقل المواد وكذلك في التصنيع
            والبناء والإنتاج والتعدين. نظراً لأن وظائفها يمكن أن تكون حرجة للسلامة،
            الرافعات غير المؤهلة أو منخفضة الجودة يمكن أن تؤدي إلى الانزلاق
            والسقوط، تلف المعدات، أو خسائر مكلفة.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            نظراً لهذه المخاطر، جعل مكتب المعايير الهندية (BIS) شهادة BIS
            للرافعات إلزامية بموجب شهادة المخطط X. يضمن هذا أن الرافعات المستخدمة
            في الهند آمنة وموثوقة وفعالة وعالية الجودة على مستوى عالمي.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            في هذه المدونة، سنرشدك حول أهمية تسجيل BIS المخطط X للرافعات، الجوانب
            القانونية لـ OTR للرافعات، وكيفية الحصول على ترخيص BIS للرافعات
            وكذلك وضع علامة معيار BIS للرافعات.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            لماذا BIS للرافعات مهم
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم الرافعات على نطاق واسع في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>أعمال البناء والبنية التحتية</li>
            <li>الموانئ البحرية، أحواض بناء السفن ومراكز لوجستية أخرى</li>
            <li>المصانع ومصانع التجميع</li>
            <li>تعدين المعادن ومعالجة المواد الثقيلة</li>
            <li>محطات توليد الطاقة والصناعات الأخرى</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            بدون BIS للرافعات، المعدات غير المعتمدة يمكن أن تسبب:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>التلف الميكانيكي والحوادث</li>
            <li>انخفاض التوفر وزيادة تكاليف الصيانة</li>
            <li>فقدان الأهلية للمشاريع الحكومية</li>
            <li>تعرض العمال والبنية التحتية لمخاطر السلامة</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            علامة BIS للرافعات تعطي الثقة للمستهلكين والمنظمين بأن المنتج يلتزم
            بمعايير الجودة والسلامة الهندية الصارمة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X للرافعات؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة المخطط X للرافعات بموجب BIS إلزامية بناءً على لوائح تقييم
            المطابقة BIS، 2018، والتي تتطلب شهادة المنتج للآلات الحرجة.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            الميزات الرئيسية للمخطط X للرافعات:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>مطلوب للمصنعين المحليين والأجانب</li>
            <li>
              ينطبق على جميع الفئات الرئيسية للرافعات والمعلن عنها بموجب المعايير
              الهندية
            </li>
            <li>
              اختبار المنتج، تدقيق المصنع وتقييم الامتثال المستمر إلزامي
            </li>
            <li>
              يمنح ترخيصاً لاستخدام علامة BIS على الرافعات على المنتجات المعتمدة
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR للرافعات
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أمر اللائحة الفنية الشاملة (OTR) للرافعات، الذي أعلنته وزارة الصناعات
            الثقيلة في عام 2024، يهدف إلى جعل الشهادة إلزامية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: يحتاج جميع مصنعي/مستوردي الرافعات إلى الحصول على
            ترخيص BIS للرافعات بموجب المخطط X في موعد أقصاه 01 سبتمبر 2026. بعد
            ذلك، لا يمكن تسويق أو استيراد أو استخدام الرافعات غير المعتمدة في
            المناقصات العامة في الهند.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS للرافعات
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              تحسين السلامة: الرافعات المعتمدة تقلل من الفشل الميكانيكي والحوادث.
            </li>
            <li>
              مزايا السوق: الهيئات الحكومية والشركات الخاصة تعطي الأفضلية للرافعات
              المعتمدة من BIS في المناقصات الإلكترونية والمشاريع الكبيرة.
            </li>
            <li>
              ثقة المستهلك والمقاول: علامة BIS للرافعات تخلق الثقة في الجودة
              والموثوقية.
            </li>
            <li>
              الدخول إلى السوق العالمي: للمصنعين الأجانب، ترخيص BIS للرافعات
              يسمح بالاختراق بدون عوائق إلى السوق الهندي المنظم.
            </li>
            <li>
              الامتثال للقانون الهندي: يمنع الغرامات والمصادرة والاستبعاد من
              العقود الحكومية.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Cranes Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع الرافعات المشمولة في شهادة المخطط X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الرافعات المدرجة تحت شهادة المخطط X تتكون من أنواع مختلفة، على سبيل
            المثال:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>رافعات البرج</li>
            <li>رافعات متحركة</li>
            <li>رافعات الجسر والعملاقة</li>
            <li>رافعات OH/BR</li>
            <li>رافعات زاحفة</li>
            <li>رافعات الذراع</li>
            <li>رافعات عائمة</li>
            <li>رافعات صناعية وورش</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            يجب أن يلتزم كل نوع بالمعايير الهندية المناسبة (رمز IS) مثل IS
            4573:2020 لمواصفات الرافعات المتحركة المزودة بالطاقة و IS/ISO
            15442:2012 للرافعات - متطلبات السلامة لرافعات اللوادر.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تلتزم أنواع المعدات بالمعايير الهندية ذات الصلة (رمز IS)
            للتصميم، قدرة التحميل، السلامة والأداء.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            إجراءات الحصول على ترخيص BIS للرافعات
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              تحديد معيار IS ذي الصلة: حدد المعيار الهندي المعمول به لنوع رافعتك.
            </li>
            <li>
              الاختبار في مختبر معترف به من BIS: إلزامي إجراء اختبارات السلامة
              والفعالية.
            </li>
            <li>
              تفتيش المصنع: تقوم BIS بتفتيش موقع الإنتاج ونظام الجودة.
            </li>
            <li>
              الطلب والوثائق: قدم التقارير الفنية، نتائج الاختبار، ودليل الجودة.
            </li>
            <li>
              ترخيص BIS على الرافعات: بعد الموافقة، يحصل المصنعون على الحق
              المميز لتطبيق علامة BIS للرافعات.
            </li>
            <li>
              الامتثال المستمر: التدقيق والتفتيش الروتيني يضمن الامتثال المستمر.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ماذا يحدث إذا لم يتبع شخص ما OTR للرافعات ولم يحصل على شهادة BIS
            للرافعات بحلول 1 سبتمبر 2026؟
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>حظر بيع واستيراد الرافعات غير المعتمدة</li>
            <li>مصادرة المنتجات وغرامات كبيرة</li>
            <li>الإقصاء من المناقصات الحكومية وشركات القطاع العام</li>
            <li>تأثير سلبي طويل الأمد على العلامة التجارية</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تطبيق شهادة BIS المخطط X سيكون معلماً مهماً سيعزز السلامة والموثوقية
            ويوفر معايير صناعية عامة في الهند.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة لمصنعي ومستوردي ومصدري الرافعات، من المهم الحصول على ترخيص
            BIS للرافعات ويمكن التقدم من خلال بوابة التطبيق عبر الإنترنت لتسجيل
            BIS للرافعات للامتثال للمعايير، بناء ثقة المستهلك، وأيضاً لتجنب
            النزاعات المحتملة مع BIS أو الحكومة الهندية.
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
  