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
  
  const RotaryElectricalMachinesArabic = () => {
    return (
      <div className="relative w-full">
        <RotaryElectricalMachinesMetaTags />
        <RotaryElectricalMachinesBreadcrumb />
        <RotaryElectricalMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default RotaryElectricalMachinesArabic;
  
  const RotaryElectricalMachinesMetaTags = () => {
    const title = "شهادة BIS المخطط X للآلات الكهربائية الدوارة";
    const description =
      "شهادة BIS المخطط X للآلات الكهربائية الدوارة، مثل المولدات، إلخ، و/أو تجميعاتها، التجميعات الفرعية، ومكوناتها، هي خطوة تنظيمية مهمة نحو جودة وسلامة المعدات الصناعية الحيوية";
    const keywords =
      "شهادة BIS للآلات الكهربائية الدوارة, شهادة BIS المخطط X للآلات الكهربائية الدوارة, شهادة المخطط X للآلات الكهربائية الدوارة, BIS للآلات الكهربائية الدوارة, OTR للآلات الكهربائية الدوارة";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X للآلات الكهربائية الدوارة في الهند | دليل كامل";
    const ogDescription =
      "تعلم كل شيء عن شهادة BIS المخطط X للآلات الكهربائية الدوارة في الهند. فهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";
  
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
  
  const RotaryElectricalMachinesBreadcrumb = () => {
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
                      شهادة BIS للآلات الكهربائية الدوارة
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
  
  const RotaryElectricalMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <RotaryElectricalMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const RotaryElectricalMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS للآلات الكهربائية الدوارة
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
              alt="شهادة BIS المخطط X للآلات الكهربائية الدوارة"
              title="ترخيص BIS المخطط X للآلات الكهربائية الدوارة"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            المولدات والمحركات والمولدات البديلة كآلات كهربائية دوارة هي أنواع مهمة
            من الآلات المستخدمة في أنشطة حيوية مختلفة مثل تشغيل الصناعات وإنتاج الطاقة
            وحتى تلبية احتياجات البنية التحتية لتكنولوجيا المعلومات وغيرها على المستوى
            العالمي. تعمل هذه الآلات معاً في قطاعات مثل الطاقة والنقل والتصنيع
            والمجمعات التجارية لأنها تحول الطاقة الميكانيكية إلى كهرباء أو العكس.
            هذه الآلات مهمة جداً وبالتالي، جودتها وموثوقيتها وسلامتها مهمة. في الهند،
            تعامل BIS مع هذه المشكلة من خلال شهادة المخطط X للآلات الكهربائية الدوارة
            وتجميعاتها ومكوناتها جنباً إلى جنب مع المعدات الكهربائية الأخرى.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            في أمر اللائحة الفنية الشاملة 2024، أعلنت وزارة الصناعات الثقيلة أن جميع
            المصنعين، الأجانب والمحليين، الذين ينتجون الآلات الدوارة وجميع المعدات
            ذات الصلة الأخرى، يجب أن يمتثلوا لشهادة المخطط X بحلول 1 سبتمبر 2026.
            تنص هذه اللائحة على جميع أنواع الآلات الكهربائية الدوارة بما في ذلك
            المولدات والمولدات البديلة والمحركات المتزامنة وغير المتزامنة، وكذلك جميع
            التجميعات والتجميعات الفرعية ومكونات الآلات.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            تناقش هذه المقالة الأهمية والنطاق وإجراءات الشهادة والمزايا والوثائق ذات
            الصلة الأخرى لشهادة المخطط X لجميع أنواع الآلات الكهربائية الدوارة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أهمية BIS للآلات الكهربائية الدوارة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            الآلات الكهربائية الدوارة تُستخدم على نطاق واسع في:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>توليد وتوزيع الكهرباء</li>
            <li>أتمتة الصناعة والمعدات</li>
            <li>النقل (السكك الحديدية، السفن، السيارات الكهربائية)</li>
            <li>قطاع النفط والغاز والطاقة</li>
            <li>المعدات الكهربائية للاستخدام الاستهلاكي والتجاري</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            بعض المخاطر التي قد تحدث بدون الشهادة تشمل:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>مخاطر كهربائية، دوائر قصيرة ومخاطر حريق</li>
            <li>تلف ميكانيكي وتوقف مكلف</li>
            <li>إهدار الطاقة</li>
            <li>المنع من المناقصات الحكومية والمشاريع</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            شهادة المخطط X للآلات الكهربائية الدوارة تضمن أن هذه المنتجات تلبي
            معايير الجودة والكفاءة والسلامة الصارمة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X للآلات الكهربائية الدوارة؟
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X للآلات الكهربائية الدوارة هي مخطط تنظيمي حكومي بموجب
            لوائح تقييم المطابقة BIS، 2018. إنها تشهد على البضائع للمعايير الهندية
            قبل دخولها السوق الهندي.
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            شهادة المخطط X للآلات الكهربائية الدوارة: الميزات الرئيسية:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>ينطبق على المصنعين الهنود والأجانب</li>
            <li>
              ينطبق على المحركات والمولدات والمولدات البديلة والآلات الكهربائية
              الدوارة الأخرى
            </li>
            <li>
              كمية كافية من اختبار المنتج والتدقيق والتحقق من الامتثال هي ضرورة
            </li>
            <li>تفتيش المصنع لضمان ضبط الجودة</li>
            <li>
              يسمح للمصنعين بتقديم تسجيل BIS بناءً على الشهادة للآلات الكهربائية
              الدوارة المذكورة أعلاه.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR للآلات الدوارة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            أعلنت وزارة الصناعات الثقيلة OTR للآلات الكهربائية الدوارة في عام 2024،
            التي تتطلب شهادة المخطط X.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: جميع المصنعين والمستوردين مطلوب منهم الحصول على ترخيص
            BIS للآلات الكهربائية الدوارة صالح بموجب المخطط X بحلول 1 سبتمبر 2026.
            "سيوقف هذا الآلات الكهربائية الدوارة غير المعتمدة من البيع أو الاستيراد
            أو المشاركة في المناقصات في جميع أنحاء البلاد،" كما قال مسؤول حكومي.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            مزايا شهادة BIS للآلات الكهربائية الدوارة
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              السلامة والامتثال: تجنب المخاطر الكهربائية والميكانيكية بمعايير صارمة.
            </li>
            <li>
              الجودة والموثوقية: الآلات الكهربائية الدوارة المعتمدة تؤدي بدقة ودقة
              عالية.
            </li>
            <li>
              الوصول إلى السوق: ترخيص BIS للآلات الكهربائية الدوارة عادة ما يكون
              مطلوباً للمشتريات من قبل الهيئات العامة.
            </li>
            <li>
              ثقة المستهلك: علامة BIS للآلات الكهربائية الدوارة تعطي معلومات
              للعملاء حول جودة المنتج والمتانة.
            </li>
            <li>
              الميزة التنافسية: العلامات التجارية/المصنعون المعتمدون من BIS مفضلون
              في السوق المنظمة وللمناقصات الحكومية.
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع الآلات الكهربائية الدوارة بموجب مخطط شهادة BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            اعتماد المخطط X للآلات الكهربائية الدوارة يغطي أنواع مختلفة مثل:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>محركات AC و DC</li>
            <li>المولدات والمولدات البديلة</li>
            <li>مولدات التوربينات ومولدات المياه</li>
            <li>
              أنواع خاصة من الآلات الدوارة المستخدمة في الصناعة والمرافق
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تلبي جميع هذه الأنواع المعايير الهندية المعمول بها (رمز IS)
            مثل IS 16819:2018/ISO 12100:2010 (سلامة الآلات المبادئ العامة للتصميم -
            تقييم المخاطر وتقليل المخاطر). يجب أن تلبي جميع الأصناف المعايير الهندية
            (رمز IS) المناسبة للجودة والسلامة وكفاءة الطاقة.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            عملية شهادة BIS للآلات الكهربائية الدوارة
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              تحديد المعيار ذي الصلة: الرجوع إلى رمز IS ذي الصلة لنوع الآلة
              الكهربائية الدوارة الخاصة بك.
            </li>
            <li>
              اختبار المنتج: إجراء اختبارات الأداء والسلامة المطلوبة وفقاً لمعايير
              الصناعة، في مختبر معتمد من BIS.
            </li>
            <li>
              تفتيش المصنع: فحص أنظمة ضمان الجودة في موقع الإنتاج من قبل مسؤولي BIS.
            </li>
            <li>
              الطلب والوثائق: توفير المتطلبات الفنية ودليل الجودة وتقارير الاختبار.
            </li>
            <li>
              إصدار ترخيص BIS للآلات الكهربائية الدوارة: يمكنك وضع علامة BIS بعد
              الموافقة.
            </li>
            <li>
              الامتثال المستمر: يفحص BIS ويجري تدقيق غير مجدول للامتثال للمعايير.
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            العقوبات على عدم الامتثال
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            المصنعون الذين لا يمتلكون جميع نماذج الآلات الكهربائية الدوارة المعتمدة
            بشهادة BIS للآلات الكهربائية الدوارة بحلول 1 سبتمبر 2026 يواجهون مخاطر:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              حظر البيع/الاستيراد للآلات الكهربائية الدوارة غير المعتمدة
            </li>
            <li>مصادرة المعدات غير الممتثلة والعقوبات النقدية</li>
            <li>
              سيجعلك هذا غير مؤهل للمناقصات الحكومية أو شركات القطاع العام
            </li>
            <li>حقوق العلامة التجارية تتأثر بشكل دائم في الهند</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            تنفيذ شهادة BIS المخطط X للآلات الكهربائية الدوارة في OTR 2024 هو خطوة
            لجلب السلامة والكفاءة والجودة إلى قطاع الصناعة الكهربائية في الهند.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            المصنعون والمستوردون والمصدرون يستفيدون من هذه العملية من خلال تأمين
            شهادة BIS للآلات الكهربائية الدوارة، والحصول على ترخيص BIS للآلات
            الكهربائية الدوارة، ووضع علامة BIS للآلات الكهربائية الدوارة على
            منتجاتهم، مما يوضح أن منتجاتهم تلبي أنظمة تنظيم السوق المحلي ومتطلبات
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
  