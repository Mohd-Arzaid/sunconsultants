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
  
  const WeavingMachinesArabic = () => {
    return (
      <div className="relative w-full">
        <WeavingMachinesMetaTags />
        <WeavingMachinesBreadcrumb />
        <WeavingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterArabic />
      </div>
    );
  };
  
  export default WeavingMachinesArabic;
  
  const WeavingMachinesMetaTags = () => {
    const title = "شهادة BIS المخطط X لآلات النسيج ومجموعاتها";
    const description =
      "شهادة BIS المخطط X هي شهادة جودة إلزامية لجميع أنواع آلات النسيج (أنوال) و/أو مجموعاتها ومجموعاتها الفرعية ومكوناتها";
    const keywords =
      "شهادة BIS لآلات النسيج، شهادة BIS المخطط X لآلات النسيج، شهادة المخطط X لآلات النسيج، BIS لآلات النسيج، OTR لآلات النسيج";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "شهادة BIS المخطط X لآلات النسيج في الهند | دليل شامل";
    const ogDescription =
      "تعرف على كل شيء عن شهادة BIS المخطط X لآلات النسيج في الهند. افهم الامتثال لـ OTR 2024، عملية ترخيص BIS، متطلبات علامة ISI، وكيفية الحصول على الشهادة قبل الموعد النهائي في سبتمبر 2026";

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
  
  const WeavingMachinesBreadcrumb = () => {
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
                      <Link to="/SchemeX-Products">منتجات المخطط X</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="flex-shrink-0">
                    <SlashIcon />
                  </BreadcrumbSeparator>

                  <BreadcrumbItem className="flex-shrink-0">
                    <BreadcrumbPage className="whitespace-nowrap">
                      شهادة BIS لآلات النسيج
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
  
  const WeavingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <WeavingMachinesMainContentLeft />

          {/* Right Side Content */}
          <ServicesRightSideContentArabic />
        </div>
      </div>
    );
  };
  
  const WeavingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            شهادة BIS المخطط X لآلات النسيج
          </h1>

          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
              title="شهادة BIS المخطط X لآلات النسيج (أنوال)"
              alt="ترخيص BIS المخطط X لآلات النسيج (أنوال)"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            صناعة النسيج والملابس الهندية هي واحدة من أكبر داعمي التصنيع والتصدير والعمالة في البلاد. جوهر هذه الصناعة هو آلات النسيج، والتي تعد ضرورية لصنع الأقمشة للملابس والأثاث المنزلي والاستخدام الصناعي. مع الطلب المحلي المتزايد باستمرار والتركيز الكبير على التصدير في البلاد، هناك حاجة لضمان معايير الجودة والسلامة لآلات النسيج محليًا.
          </p>

          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            لضمان ذلك، تم إنشاء مكتب المعايير الهندي (BIS)، الهيئة الوطنية للمعايير في الهند، وقد قام BIS بصياغة وتنفيذ مخطط شهادة المنتج في الهند حيث يتم اعتماد المنتجات. تضمن هذه المعايير أن الآلات التي تدخل السوق الهندي تلبي المعايير الهندية للأداء والمتانة والسلامة.
          </p>

          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            في هذه المقالة، سنشرح أهمية شهادة BIS المخطط X لآلات النسيج، وعملية الامتثال بموجب OTR لآلات النسيج وكيفية الحصول على شهادة BIS في الهند، تسجيل BIS لآلات النسيج ووضع علامة ISI لآلات النسيج.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            لماذا BIS لآلات النسيج؟
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            تُستخدم آلات النسيج في:
          </p>

          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>مصانع النسيج ومصانع الملابس</li>
            <li>وحدات إنتاج الأثاث المنزلي</li>
            <li>تصنيع الأقمشة الصناعية</li>
            <li>مصانع النسيج التي تركز على التصدير</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-4">
            بدون BIS لآلات النسيج، يمكن أن تؤدي الآلات غير المعتمدة إلى:
          </p>

          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>أقمشة منخفضة الجودة ومعيبة.</li>
            <li>
              معدلات التلف، مشاكل الحجم الميكانيكية ووقت التوقف
            </li>
            <li>زيادة تكاليف التشغيل والنفايات وإدارة النفايات</li>
            <li>انتهاك عقود الحكومة والتصدير</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-6">
            علامة BIS على آلات النسيج تمنح الثقة للمستهلكين والمفتشين بأن المنتج يتوافق مع المعايير الهندية.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ما هي شهادة BIS المخطط X لآلات النسيج؟
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            شهادة BIS المخطط X لآلات النسيج هي جزء من لائحة تقييم الامتثال BIS لعام 2018، والتي تهدف إلى تنظيم الجودة في الآلات الحرجة.
          </p>

          <p className="text-gray-600 text-base font-geist mb-4">
            بعض ميزات شهادة المخطط X لآلات النسيج:
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              إلزامي للمصنعين الهنود والأجانب الذين يوردون إلى الهند
            </li>
            <li>
              يغطي أنواعًا مختلفة من آلات النسيج فيما يتعلق بالمعايير الهندية المعمول بها
            </li>
            <li>
              يتطلب اختبار الآلات وتفتيش المصنع والتدقيق المستمر من وقت لآخر
            </li>
            <li>يسمح باستخدام علامة BIS الرسمية لآلات النسيج</li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR لآلات النسيج
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            ستكون شهادة المخطط X إلزامية بموجب اللائحة الفنية الشاملة (OTR) 2024 لآلات النسيج، التي نشرتها وزارة الصناعات الثقيلة.
          </p>

          <p className="text-gray-600 text-base font-geist mb-6">
            الموعد النهائي: 1 سبتمبر 2026. التطبيق لمنح ترخيص BIS لآلات النسيج إلزامي لجميع المصنعين والمستوردين. بعد الموعد النهائي، لا يمكن بيع أو استيراد أو شحن آلات النسيج غير المسجلة للاستخدام التجاري في الهند.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            فوائد شهادة BIS لآلات النسيج
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ضمان جودة المنتج: تضمن الآلات المعتمدة إنتاجًا غير منقطع وكفاءة مثلى للأقمشة.
            </li>
            <li>
              الوصول إلى السوق والمناقصات: ترخيص BIS لآلات النسيج مطلوب بشكل عام في مناقصات الحكومة وأوامر التوريد الكبيرة.
            </li>
            <li>
              ثقة المشترين: علامة BIS لآلات النسيج تضمن الثقة في السوق المحلي والخارجي.
            </li>
            <li>
              الامتثال القانوني والتنظيمي: يضمن الامتثال للوائح الهندية بموجب OTR لآلات النسيج.
            </li>
            <li>
              الميزة التنافسية: نادرًا ما توجد الآلات المعتمدة في صناعة معدات النسيج شديدة التنافس.
            </li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Types of Weaving Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            أنواع آلات النسيج تحت شهادة المخطط X
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            آلات النسيج التي تحصل على شهادة المخطط X:
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>أنوال الطاقة</li>
            <li>أنوال الرابير</li>
            <li>أنوال نفث الهواء</li>
            <li>أنوال نفث الماء</li>
            <li>أنوال المكوك</li>
            <li>أنوال تلقائية</li>
            <li>آلات نسيج خاصة بالصناعة</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-6">
            يجب أن تتوافق جميعها مع المعايير الهندية المعمول بها (رمز IS) مثل IS 17361 (الجزء 6): 2020 / ISO 11111: (الجزء 6): 2005 (متطلبات السلامة لآلات النسيج الجزء 6 آلات تصنيع الأقمشة). يجب أن تلتزم جميع الأنواع بالمعايير الهندية (رمز IS) ذات الصلة بناءً على التصميم والأداء والسلامة والحفاظ على الطاقة.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            عملية ترخيص BIS لآلات النسيج
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              تحديد المعيار المعمول به: ابحث عن رقم IS لنوع آلة النسيج الخاصة بك.
            </li>
            <li>
              اختبار المنتج: يتم اختبار الآلات في مختبرات معتمدة من BIS للسلامة والكفاءة.
            </li>
            <li>
              تفتيش المصنع: يقوم مفتشو BIS بإجراء فحص شامل لعمليات التصنيع وأنظمة مراقبة الجودة.
            </li>
            <li>
              تقديم الطلب: إرسال وثائق مثل التفاصيل التقنية وتقارير الاختبار ودليل الجودة.
            </li>
            <li>
              إصدار ترخيص BIS لآلات النسيج: مع الموافقة، سيتمكن المصنعون من وضع علامة BIS على المنتج.
            </li>
            <li>
              الامتثال المستمر: يتم إجراء التدقيق والاختبار بانتظام لضمان استمرارنا في تلبية معاييرنا.
            </li>
          </ul>

          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            عقوبات عدم الامتثال
          </div>

          <p className="text-gray-600 text-base font-geist mb-4">
            سيؤدي عدم الامتثال لشهادة BIS لآلات النسيج في OTR إلى:
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>حظر بيع أو استيراد الآلات غير المعتمدة</li>
            <li>غرامات ثقيلة ومصادرة المنتجات.</li>
            <li>عدم الأهلية في أعمال/مناقصات الحكومة</li>
            <li>ضرر طويل الأمد للعلامة التجارية وسمعة السوق</li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            الخلاصة
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            إطلاق شهادة BIS المخطط X لآلات النسيج من خلال OTR لآلات النسيج (2024) هو معلم مهم في امتلاك صناعة نسيج في الهند تستخدم آلات آمنة وعالية الجودة وموثوقة.
          </p>

          <p className="text-gray-600 text-base font-geist mb-6">
            بالنسبة للمصنعين/المستوردين، فإن الحصول على ترخيص BIS لآلات النسيج ووضع علامة BIS على المنتجات ليس فقط امتثالًا إلزاميًا ولكنه أيضًا يضيف قيمة للمنتج للتسويق. يعزز هذا موثوقية السوق ويضمن الامتثال، كما يشجع على المدى المتوسط القدرة التنافسية في السوق المحلي والدولي للنسيج.
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
                شهادة شهادة EPR
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
                شهادة شهادة LMPC
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
