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
  
  
  const ConstructionMachineryArabic = () => {
    return (
      <div className="relative w-full">
        <ConstructionMachineryMetaTags />
  
        <ConstructionMachineryBreadcrumb />
        <ConstructionMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default ConstructionMachineryArabic;
  
  const ConstructionMachineryMetaTags = () => {
    const title =
      "شهادة BIS المخطط X لآلات البناء، الحفر، والتعدين";
    const description =
      "شهادة BIS المخطط X إلزامية لآلات البناء، الحفر، والتعدين لضمان السلامة والجودة والتوحيد القياسي في القطاع الصناعي الحرج";
    const keywords =
      "شهادة BIS لآلات البناء, شهادة BIS المخطط X لآلات البناء, شهادة المخطط X لآلات البناء, BIS لآلات البناء, OTR لآلات البناء";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لآلات البناء في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X لآلات البناء في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const ConstructionMachineryBreadcrumb = () => {
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
                      شهادة BIS المخطط X لآلات البناء
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
  
  const ConstructionMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <ConstructionMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const ConstructionMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS لآلات البناء
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
              alt="شهادة BIS المخطط X لآلات البناء"
              title="ترخيص BIS المخطط X لآلات البناء"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            الحفارات، اللوادر، الجرافات، خلاطات الخرسانة ومداحل الطرق هي آلات
            البناء الرئيسية المستخدمة في بناء البنية التحتية الهندية. الطلب
            المتزايد على الآلات الآمنة والموثوقة يأتي من الاستثمارات الكبيرة في
            الطرق السريعة، المدن الذكية، المصانع، والإسكان.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            أنشأ مكتب المعايير الهندية (BIS) شهادة BIS الإلزامية بموجب المخطط
            X لآلات البناء لتوفير ضمان الجودة والخدمة والسلامة. يضمن هذا أن
            الأجهزة تتوافق مع المعايير الهندية قبل أن تكون متاحة للبيع أو الاستيراد
            في الهند.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            في هذه المقالة، سوف تتعلم عن شهادة BIS المخطط X لآلات البناء،
            متطلبات OTR لآلات البناء، وعملية الحصول على ترخيص BIS لآلات البناء
            وكذلك علامة BIS لآلات البناء.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            لماذا BIS لآلات البناء مهم
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم آلات البناء في نمو البنية التحتية ومواقع تطوير البناء الكبيرة.
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>تطوير الطرق والطرق السريعة</li>
            <li>مشاريع العقارات والإسكان</li>
            <li>التعدين والحفر</li>
            <li>البناء الصناعي والهندسة الثقيلة</li>
            <li>مشاريع الموانئ والمطارات والمترو</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            عواقب عدم وجود BIS لمعدات البناء هي كما يلي:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>فشل المعدات وتوقف مكلف</li>
            <li>احتمالية أعلى للحوادث ومخاطر الخطر</li>
            <li>عدم الامتثال للمناقصات الحكومية</li>
            <li>زيادة تكاليف الصيانة والتشغيل</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            علامة BIS لآلات البناء تشير إلى أن المنتج آمن وموثوق ومتوافق مع
            المعايير الهندية.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لآلات البناء؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X مشمولة بمتطلبات تقييم المطابقة لمكتب المعايير
            الهندية (BIS) (2018) التي توفر إرشادات للمنتجات. في هذا المخطط، يقرر
            BIS جودة المنتج ويضمن أن المنتج يقلل من مخاطر صحة الإنسان.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            الميزات الرئيسية - شهادة المخطط X لمعدات البناء:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>إلزامي للمصنعين المحليين والأجانب</li>
            <li>يغطي جميع أنواع الآلات الثقيلة ومعدات البناء</li>
            <li>
              اختبار المنتج الإلزامي، زيارة المصنع الإلزامية ومراجعة الامتثال
              يجب إجراؤها بانتظام
            </li>
            <li>يصرح باستخدام علامة BIS لآلات البناء</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR لمعدات البناء
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ستصبح شهادة المخطط X إلزامية كجزء من أمر اللائحة الفنية الشاملة (OTR)
            2024 لآلات البناء الذي أعلنته وزارة الصناعات الثقيلة.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: يجب على جميع المصنعين والمستوردين الحصول على ترخيص
            BIS لآلات البناء بموجب المخطط X قبل 01 سبتمبر 2026. اعتباراً من هذا
            التاريخ، لا يجوز إنتاج أو نقل أو بيع المعدات غير المعتمدة لبرامج
            البنية التحتية العامة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            فوائد شهادة BIS لمعدات أو آلات البناء
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              السلامة والموثوقية: تقليل مخاطر الفشل الميكانيكي أو الحوادث في مواقع
              البناء.
            </li>
            <li>
              الوصول إلى السوق والأهلية للمناقصات: المنتجات المعتمدة من BIS مؤهلة
              للمناقصات الحكومية وشركات القطاع العام.
            </li>
            <li>
              ثقة المستهلك والمقاول: علامة BIS لآلات البناء تضمن منتجاً آمناً
              وعالي الجودة لجميع المشترين.
            </li>
            <li>
              الدخول إلى السوق العالمي: ترخيص BIS لآلات البناء يمكن أن يكون
              مفيداً للشركات الأجنبية للوصول السهل إلى السوق الهندي.
            </li>
            <li>
              الامتثال القانوني: الحصانة من الغرامات والحظر والعقوبات بموجب OTR
              لآلات البناء.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Construction Equipment Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع معدات البناء المشمولة بموجب المخطط X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لآلات البناء تنطبق على فئات مختلفة من المعدات مثل:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>الحفارات واللوادر الخلفية</li>
            <li>الجرافات ومداحل الطرق</li>
            <li>الرافعات المستخدمة في مواقع البناء</li>
            <li>خلاطات الخرسانة ومحطات الخلط</li>
            <li>مصانع الأسفلت والمداحل</li>
            <li>آلات الدك والحفر</li>
            <li>معدات مناولة المواد وأعمال الحفر</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تلبي كل فئة المعايير الهندية ذات الصلة (رمز IS) وفقاً لـ IS
            17055 (الجزء 7):2020، IS 17055 (الجزء 8):2020 و IS 17055 (الجزء
            12):2020 من حيث التصميم والسلامة والأداء، إلخ.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            إجراءات ترخيص BIS لمعدات البناء
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              تحديد المعيار المعمول به: ابحث عن رمز IS لنوع آلة البناء الخاصة
              بك.
            </li>
            <li>
              اختبار المنتج: قم بإجراء اختبارات السلامة والأداء في مختبر معترف
              به من BIS.
            </li>
            <li>
              تفتيش المصنع: يفحص مدققو BIS عمليات مراقبة الجودة والإنتاج بشكل
              حرفي.
            </li>
            <li>
              الطلب والوثائق: قدم التقارير والمواصفات والدليل للمراجعة.
            </li>
            <li>
              ترخيص BIS لآلات البناء: بعد الموافقة، يُسمح للمصنعين بوضع علامة
              BIS لآلات البناء.
            </li>
            <li>
              الامتثال المستمر: التفتيش والمراقبة المتكررة تحافظ على الامتثال
              المستمر.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الفشل الجماعي أو عدم إصدار شهادة BIS لآلات البناء حتى 1 سبتمبر 2026
            فيما يتعلق بـ OTR لآلات البناء سيكون له الآثار التالية:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              حظر بيع واستيراد المعدات غير المعتمدة
            </li>
            <li>غرامات كبيرة واحتجاز المنتجات</li>
            <li>الإقصاء من المشاريع والجوائز الحكومية</li>
            <li>
              إمكانية تلف السمعة غير المحدود لسنوات قادمة
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            التطبيق الإلزامي لشهادة BIS المخطط X لآلات البناء بموجب OTR لآلات
            البناء (2024) هو خطوة مهمة نحو السلامة والكفاءة والتوحيد القياسي في
            الصناعة المحلية الهندية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة للمصنعين والمستوردين والمصدرين لآلات البناء، الحصول على ترخيص
            BIS لآلات البناء ووضع علامة BIS لآلات البناء ليس مجرد متطلب امتثال،
            إنها خطوة استراتيجية للتوسع في أسواق جديدة، اختراق سوق البناء الهندي
            سريع النمو، وبناء سمعتك على المدى الطويل.
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
  