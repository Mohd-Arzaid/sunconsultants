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
  import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
  import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
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
  
  const GearsGearingsandTransmissionArabic = () => {
    return (
      <div className="relative w-full">
        <GearsGearingsandTransmissionMetaTags />
        <GearsGearingsandTransmissionBreadcrumb />
        <GearsGearingsandTransmissionMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default GearsGearingsandTransmissionArabic;
  
  const GearsGearingsandTransmissionMetaTags = () => {
    const title =
      "شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل";
    const description =
      "شهادة BIS المخطط X للتروس وأنظمة التروس، العجلات المسننة، بكرات السلسلة، عناصر النقل، البراغي الكروية أو الأسطوانية، علب التروس ومغيرات السرعة، هي معلماً تنظيمياً مهماً لقطاع الآلات الصناعية";
    const keywords =
      "شهادة BIS للتروس وأنظمة التروس وعناصر النقل, شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل, شهادة المخطط X للتروس وأنظمة التروس وعناصر النقل, BIS للتروس وأنظمة التروس وعناصر النقل, OTR للتروس وأنظمة التروس وعناصر النقل";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const GearsGearingsandTransmissionBreadcrumb = () => {
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
                      شهادة BIS للتروس وأنظمة التروس وعناصر النقل
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
  
  const GearsGearingsandTransmissionMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <GearsGearingsandTransmissionMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const GearsGearingsandTransmissionMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
              alt="شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل"
              title="ترخيص BIS المخطط X للتروس وأنظمة التروس، العجلات المسننة، بكرات السلسلة"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            في عالم الصناعة المتغير باستمرار، السلامة وجودة المكونات الميكانيكية
            أمران بالغا الأهمية. وفقاً لمكتب المعايير الهندية، يجب أن تتوافق جميع
            الآلات والمكونات الكهربائية المنتجة في الهند مع معايير السلامة التي
            وضعها BIS والمذكورة في أمر سلامة الآلات والمعدات الكهربائية (أمر
            اللائحة الفنية الشاملة)، 2024. يغطي هذا الأمر الوحدات الميكانيكية
            والمكونات ومكونات التجميع مثل التروس وعناصر أنظمة التروس وأجزاء النقل
            المختلفة المهمة لعمل الآلات في أي صناعة.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            يجب على جميع المصنعين، المحليين والأجانب، تلبية متطلبات شهادة المخطط
            X بحلول 1 سبتمبر 2026 وفقاً لما حدده الأمر وأنشأته وزارة الصناعات
            الثقيلة. يحتاج جميع المصنعين في صناعة التروس وعلب التروس وجميع عناصر
            النقل ذات الصلة إلى الامتثال لهذه اللائحة حتى يتمكنوا من الوصول إلى
            السوق ووضع معايير للصناعة.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            تحتوي هذه المدونة على جميع المعلومات المهمة لشهادة التروس وعلب التروس
            وتجميع أجزاء النقل ذات الصلة بالإضافة إلى سبب قيمتها ونطاقها ومزايا
            الشهادة والوثائق المطلوبة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            لماذا المخطط X مهم للتروس وأنظمة التروس وعناصر النقل
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            هذه الأجزاء الميكانيكية مهمة في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>السيارات والشاحنات والسكك الحديدية</li>
            <li>معدات الطيران والدفاع</li>
            <li>آلات التصنيع والروبوتات</li>
            <li>أنظمة الطاقة ومحطات توليد الكهرباء</li>
            <li>البحرية (صناعات الهندسة الثقيلة والخفيفة)</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            بدون BIS للتروس وأنظمة التروس وعناصر النقل، المخاطر عالية جداً:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              فشل التروس مما يؤدي إلى التلف وتوقف مكلف
            </li>
            <li>مخاطر صحية في النقل والصناعات الثقيلة</li>
            <li>نقل الطاقة وتشتت الطاقة غير فعال</li>
            <li>
              إمكانية وصول محدودة للمناقصات العامة وفرص المشتريات
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            في النهاية، شهادة المخطط X للتروس وأنظمة التروس وعناصر النقل توفر
            متانة محسنة، تقلل من المخاطر التشغيلية ومتوافقة مع المعايير المحلية.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل هي جزء من لوائح
            تقييم المطابقة BIS، 2018. تحدد معايير صارمة للتصميم وجودة المواد
            والأداء التشغيلي.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            الميزات الرئيسية لشهادة المخطط X هي:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>إلزامي لجميع المصنعين (الهند والخارج)</li>
            <li>مناسب لمجموعة متنوعة من التروس والمحاور وأجزاء النقل</li>
            <li>إجراء اختبار المنتج في مختبرات معتمدة من BIS</li>
            <li>يتضمن تدقيق المصنع للتحقق من مراقبة الجودة</li>
            <li>
              يحق استخدام علامة معيار BIS بعد اعتماد المنتج
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR للتروس وأنظمة التروس وعناصر النقل
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            اعتمدت وزارة الصناعات الثقيلة أمر اللائحة الفنية الشاملة (OTR) 2024
            بشأن التروس وأنظمة التروس وعناصر النقل.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            تاريخ الامتثال: يجب على جميع المصنعين والمستوردين الحصول على الشهادة
            بحلول 1 سبتمبر 2026. بعد هذا التاريخ، لا يمكن تصنيع أو استيراد أو بيع
            البضائع غير المعتمدة في الهند.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS للتروس وأنظمة التروس وعناصر النقل
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              السلامة والموثوقية: تجنب الفشل غير المراقب من تطبيقات الأنظمة الحيوية.
            </li>
            <li>
              القدرة التنافسية في السوق: الشركات المعتمدة تتمتع بالأفضلية في
              المناقصات العامة والخاصة.
            </li>
            <li>
              ثقة العملاء: المشترون لديهم ثقة في المنتجات مع اعتراف BIS الرسمي.
            </li>
            <li>
              الامتثال القانوني: لا توجد عقوبات مع OTR للتروس وأنظمة التروس
              وأجزاء النقل.
            </li>
            <li>
              الدخول إلى السوق العالمي: يسمح للمصنعين الأجانب بالدخول إلى السوق
              الهندي بسهولة.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Gears Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع التروس وأجزاء النقل المشمولة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة المخطط X تنطبق على أنواع مختلفة من التروس وأنظمة التروس وعناصر
            النقل كما يلي:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>تروس مستقيمة، حلزونية، مخروطية وتروس دودية</li>
            <li>محاور التروس والقوابض</li>
            <li>علب التروس وأجزاء النقل</li>
            <li>مكونات محرك السلسلة والحزام</li>
            <li>
              التروس المستخدمة في الطيران والروبوتات، السيارات الفاخرة، الدراجات
              النارية.
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تتوافق جميع الأنواع مع المعايير الهندية (رمز IS) مثل IS
            16819:2018/ISO 12100:2010 (سلامة الآلات المبادئ العامة للتصميم - تقييم
            المخاطر وتقليل المخاطر). يجب أن يتوافق كل نوع من المنتجات مع المعيار
            الهندي المناسب فيما يتعلق بالتصميم والأداء.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            إجراءات شهادة BIS للتروس وأنظمة التروس وعناصر النقل
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تحديد المعيار المعمول به: استشر رمز IS المعمول به لمنتج التروس/النقل
            الخاص بك.
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              اختبار المنتج: قم بإجراء اختبارات المواد والأداء في مختبر معتمد من
              BIS.
            </li>
            <li>تدقيق المصنع: يأتي BIS لإجراء تدقيق مراقبة الجودة في موقع الإنتاج.</li>
            <li>
              تقديم الوثائق: شارك التفاصيل الفنية ووثائق الاختبار ودليل الجودة.
            </li>
            <li>
              منح الترخيص: بعد فحص BIS للوثائق للتأكد من الدقة، يمنح الشهادة
              ويسمح باستخدام علامة المعيار.
            </li>
            <li>
              الامتثال المستمر: التدقيق وإعادة الاختبار المتكررة للحفاظ على صحة
              الشهادة.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            عدم الامتثال لشهادة BIS للتروس وأنظمة التروس وعناصر النقل بموجب OTR
            للتروس وأنظمة التروس وعناصر النقل سيؤدي إلى:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              حظر بيع وتصنيع العناصر غير المعتمدة
            </li>
            <li>مصادرة البضائع وغرامات مالية</li>
            <li>عدم الأهلية للمناقصات والعقود الحكومية</li>
            <li>خسارة السمعة على المدى الطويل</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X للتروس وأنظمة التروس وعناصر النقل، المعلن عنها
            بموجب OTR للتروس وأنظمة التروس وعناصر النقل (2024) ستكون خطوة رئيسية
            نحو تحسين معايير الجودة والسلامة لهياكل الهندسة والتصنيع في الهند.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            المصنعون والمستوردون لحلول التروس وأنظمة التروس ونقل الطاقة الذين
            يسعون للبيع في السوق الهندي سيجدون أن مزاياهم ستزيد وستفتح الأبواب
            لمزايا السوق من خلال تطبيق شهادة المخطط X للتروس وأنظمة التروس وأنظمة
            نقل الطاقة.
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
  