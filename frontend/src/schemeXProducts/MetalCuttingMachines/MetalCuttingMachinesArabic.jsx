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
  
  const MetalCuttingMachinesArabic = () => {
    return (
      <div className="relative w-full">
        <MetalCuttingMachinesMetaTags />
        <MetalCuttingMachinesBreadcrumb />
        <MetalCuttingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default MetalCuttingMachinesArabic;
  
  const MetalCuttingMachinesMetaTags = () => {
    const title =
      "شهادة BIS المخطط X لآلات قطع المعادن وتجميعاتها";
    const description =
      "شهادة BIS الآن إلزامية لجميع أنواع آلات قطع المعادن و/أو تجميعاتها، التجميعات الفرعية، ومكوناتها المشمولة في رموز HS من 8456 إلى 8461";
    const keywords =
      "شهادة BIS لآلات قطع المعادن, شهادة BIS المخطط X لآلات قطع المعادن, شهادة المخطط X لآلات قطع المعادن, BIS لآلات قطع المعادن, OTR لآلات قطع المعادن";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لآلات قطع المعادن في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X لآلات قطع المعادن في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const MetalCuttingMachinesBreadcrumb = () => {
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
                      شهادة BIS لآلات قطع المعادن
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
  
  const MetalCuttingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <MetalCuttingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const MetalCuttingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS لآلات قطع المعادن
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
              alt="شهادة BIS المخطط X لأدوات آلات قطع المعادن"
              title="ترخيص BIS المخطط X لأدوات آلات قطع المعادن"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            قطع المعادن هو تقنية تصنيع أساسية تدعم صناعات الآلات والسيارات والطيران
            والتصنيع الهندية. تتراوح هذه الآلات من المخرطة CNC وآلة الطحن إلى قواطع
            الليزر وستساعد أيضاً في الحفاظ على الإنتاج عالياً والتكاليف منخفضة في
            الصناعات في جميع أنحاء العالم. مع زيادة الطلب على الآلات عالية الجودة في
            الهند، جعلت الحكومة شهادة BIS لآلات قطع المعادن إلزامية لضمان الجودة
            والسلامة.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            وفقاً لشهادة BIS (مكتب المعايير الهندية) المخطط X لآلات قطع المعادن،
            يجب على المصنعين الأجانب والهنود على حد سواء تلبية المعايير الهندية قبل
            أن يتم بيعها في السوق الهندي. هذه طريقة لضمان استخدام الآلات بأمان،
            وكذلك ضمان ثقة العملاء.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            توفر هذه المقالة معلومات حول شهادة المخطط X لآلات قطع المعادن، متطلبات
            OTR 2024 لآلات قطع المعادن، وإجراءات الحصول على ترخيص BIS لآلات قطع
            المعادن لاستخدام علامة BIS لآلات قطع المعادن.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            لماذا BIS إلزامي لآلات قطع المعادن؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            آلات قطع المعادن تُستخدم في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>تصنيع السيارات ومكونات السيارات</li>
            <li>صناعات الطيران والدفاع</li>
            <li>الهندسة الثقيلة والبناء</li>
            <li>صناعات الإلكترونيات والكهرباء</li>
            <li>تصنيع القوالب وصب القوالب</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الشركات التي لا تملك BIS لآلات قطع المعادن قد تواجه:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>دقة تشغيل سيئة، وإنتاج منخفض</li>
            <li>
              فشل الآلة وفقدان الإنتاج وقت التشغيل مقابل وقت التوقف.
            </li>
            <li>مخاطر محتملة للمشغلين</li>
            <li>الاستبعاد من المناقصات العامة والأعمال المنظمة</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            علامة BIS تضمن أن آلات قطع المعادن تلتزم بمعايير الجودة التي وضعها
            المكتب.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لآلات قطع المعادن؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لآلات قطع المعادن هي بموجب لوائح تقييم المطابقة BIS،
            2018 التي تم وضعها لضمان أن المنتجات تلبي معايير الجودة المطلوبة التي
            هي حاجة حالية لمعدات الصناعة.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            الميزات الرئيسية لشهادة المخطط X لآلات قطع المعادن
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>إلزامي للمصنعين الهنود والأجانب</li>
            <li>
              ينطبق على أنواع مختلفة من آلات قطع المعادن المعلن عنها بموجب المعايير
              الهندية
            </li>
            <li>
              يتضمن اختبارات المختبر وتفتيش المصنع وتدقيق روتيني
            </li>
            <li>
              يخول استخدام علامة BIS لآلات قطع المعادن.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR BIS إلزامي لآلات قطع المعادن
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أمر وزارة الصناعات الثقيلة بشأن أمر اللائحة الفنية الشاملة (OTR) لآلات
            قطع المعادن في عام 2024 جعل الشهادة إلزامية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: سيكون ترخيص BIS إلزامياً لجميع مصنعي ومستوردي آلات قطع
            المعادن اعتباراً من 1 سبتمبر 2026. اعتباراً من هذا التاريخ، لا يمكن
            عرض الآلات غير المعتمدة للبيع أو الاستيراد أو التثبيت في الهند.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS لآلات قطع المعادن
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              موثوقية المنتج: الآلات معتمدة للدقة والمتانة والأداء المتسق.
            </li>
            <li>
              القدرة التنافسية في السوق: ترخيص BIS لآلات قطع المعادن إلزامي للحصول
              على العديد من طلبات الصناعة والحكومة.
            </li>
            <li>
              ثقة العملاء: علامة BIS لآلات قطع المعادن تزرع الثقة لدى المشترين.
            </li>
            <li>
              الامتثال القانوني: متوافق مع OTR لآلات قطع المعادن وBIS.
            </li>
            <li>
              الميزة العالمية: وصول أسهل للمصنعين الأجانب إلى السوق الهندي.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Metal Cutting Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع آلات قطع المعادن المشمولة في موافقة المخطط X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة المخطط X تغطي الأنواع التالية لآلات قطع المعادن ولكنها لا تقتصر
            على:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>المخرطة CNC ومراكز الخراطة</li>
            <li>آلة الطحن</li>
            <li>آلة الحفر</li>
            <li>آلة الطحن</li>
            <li>آلة القطع CNC</li>
            <li>آلة أو معدات قطع الليزر</li>
            <li>آلة قطع البلازما</li>
            <li>آلات القطع بنفث الماء</li>
            <li>منشار الشريط ومنشار الحديد</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تتبع جميع أنواع آلات قطع المعادن هذه المعايير الهندية ذات الصلة
            (رمز IS) مثل IS 17277 (الجزء 1): 2019 / ISO 16092-1: 2017 (سلامة أدوات
            الآلات المكبس الجزء 1 متطلبات السلامة العامة). يجب أن يلبي كل نموذج من
            الآلات رمز IS الخاص به فيما يتعلق بالسلامة وكفاءة الطاقة والدقة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            إجراءات ترخيص BIS لآلات قطع المعادن
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              تحديد معيار IS المعمول به: اختر المعيار المناسب وفقاً لنوع الآلة.
            </li>
            <li>
              اختبار المنتج: قدم الآلة للاختبار في مختبر BIS المعترف به من الحكومة.
            </li>
            <li>
              تدقيق المصنع: يتم إجراء زيارة مباشرة من قبل مسؤولي BIS لضمان إنتاج
              الجودة المناسبة.
            </li>
            <li>
              تقديم الوثائق: قدم الدليل الفني وتقارير الاختبار ووثائق ضمان الجودة.
            </li>
            <li>
              منح ترخيص BIS لآلات قطع المعادن: يمكن للمصنعين الآن استخدام علامة
              BIS بموجب شهادة المنتج وفقاً للمعايير المذكورة أعلاه.
            </li>
            <li>
              الامتثال المستمر: يتم إجراء المراقبة والتدقيق الدوري لضمان الامتثال
              المستمر مع BIS.
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            عدم الامتثال لشهادة BIS لآلات قطع المعادن بموجب OTR لآلات قطع المعادن
            يمكن أن يؤدي إلى:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>حظر بيع/استيراد الآلات غير المعتمدة</li>
            <li>غرامات عالية ومصادرة المنتجات</li>
            <li>الاستبعاد من العقود الحكومية</li>
            <li>تلف طويل الأمد على سمعة العلامة التجارية والأعمال</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لآلات قطع المعادن في OTR لآلات قطع المعادن (2024)
            لها دور مهم في الدقة والسلامة والموثوقية للصناعة الهندية.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة للمصنعين والمستوردين، الحصول على ترخيص BIS لآلات قطع المعادن
            واستخدام علامة BIS على آلات قطع المعادن ليست مجرد إجراء امتثال، إنها
            استثمار استراتيجي يقدم عوائد مضاعفة في شكل تفوق المنتج وثقة المستهلك
            وتفوق السوق.
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