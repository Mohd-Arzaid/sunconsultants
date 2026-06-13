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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForWorkChairsArabic = () => {
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

export default BISCertificateForWorkChairsArabic;

const MetaTags = () => {
  const title = "شهادة BIS لكراسي العمل | رخصة BIS IS 17631:2022";
  const ogTitle = "شهادة BIS لكراسي العمل – دليل IS 17631:2022";
  const twitterTitle = "رخصة BIS لكراسي العمل | IS 17631:2022";
  const metaDescription =
    "احصل على شهادة BIS لكراسي العمل بموجب IS 17631:2022. العملية، المستندات، الاختبارات، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS لكراسي العمل وفقًا لـ IS 17631:2022. تعرف على العملية، التكلفة، المستندات، الاختبارات وفوائد رخصة BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS لكراسي العمل بموجب IS 17631:2022. تعرف على عملية BIS، المستندات، الاختبارات، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS لكراسي العمل، رخصة BIS لكراسي العمل، IS 17631:2022، شهادة BIS لكراسي العمل";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    شهادة BIS لكراسي العمل (IS 17631:2022)
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
          شهادة BIS لكراسي العمل (IS 17631:2022) – دليل شهادة علامة ISI الكامل
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="رخصة BIS لكراسي العمل"
            alt="شهادة BIS لكراسي العمل - دليل علامة ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          أصبحت كراسي العمل جزءًا أساسيًا من أماكن العمل الحديثة، والمؤسسات
          التعليمية، والمكاتب الحكومية، ومساحات العمل المشتركة، وبيئات المكاتب
          المنزلية. مع تزايد تركيز المؤسسات على راحة الموظفين، والإنتاجية،
          والبيئة المريحة في مكان العمل، والرفاهية المهنية، يستمر الطلب على
          كراسي العمل عالية الجودة في النمو.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن أن يؤثر الكرسي المصمم بشكل سيئ سلبًا على الوضعية والراحة
          والإنتاجية. لهذا السبب، تُعد الجودة والسلامة والمتانة والأداء المريح
          اعتبارات حاسمة للمصنعين والمشترين ووكالات المشتريات. ولضمان معايير
          جودة موحدة عبر الصناعة، وضع مكتب المعايير الهندية (BIS) المعيار IS
          17631:2022، وهو المعيار الهندي المعمول به لكراسي العمل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يُطلب من المصنعين المشمولين بالإطار التنظيمي المعمول به الحصول على
          شهادة BIS واستخدام علامة ISI على المنتجات المتوافقة. تُظهر شهادة BIS
          أن كرسي العمل قد تم تقييمه وفقًا للمتطلبات المقررة المتعلقة بالسلامة
          والقوة والاستقرار والمتانة والأداء المريح.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل كل ما يحتاج المصنعون والمستوردون وعلامات
          الأثاث التجارية ومحترفو المشتريات وأصحاب الأعمال إلى معرفته عن شهادة
          BIS لكراسي العمل بموجب IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نظرة سريعة على شهادة BIS لكراسي العمل
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  التفاصيل
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["المنتج", "كراسي العمل"],
                ["المعيار الهندي المعمول به", "IS 17631:2022"],
                ["نوع الشهادة", "شهادة منتج BIS"],
                ["مخطط الشهادة المعمول به", "المخطط I (شهادة علامة ISI)"],
                ["العلامة المعمول بها", "علامة ISI"],
                ["السلطة التنظيمية", "مكتب المعايير الهندية (BIS)"],
                ["الوزارة المعمول بها", "وزارة التجارة والصناعة"],
                [
                  "متطلب الامتثال",
                  "إلزامي بموجب أمر مراقبة الجودة للأثاث (QCO) المعمول به",
                ],
                [
                  "المتقدمون المؤهلون",
                  "المصنعون الهنود والمصنعون الأجانب ",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "مخطط الشهادة المعمول به" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        المخطط I (شهادة علامة ISI)
                      </a>
                    ) : particular === "متطلب الامتثال" ? (
                      <>
                        إلزامي بموجب{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            أمر مراقبة الجودة للأثاث (QCO) المعمول به
                          </strong>
                        </a>
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS لكراسي العمل؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS لكراسي العمل هي عملية تقييم امتثال تُجرى بموجب مخطط شهادة
          منتجات مكتب المعايير الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف من الشهادة هو التحقق من أن كراسي العمل تتوافق مع المتطلبات
          المحددة بموجب IS 17631:2022. عند نجاح الشهادة، يُسمح للمصنعين
          باستخدام علامة ISI على منتجاتهم.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تُقيّم عملية الشهادة جوانب مختلفة من الأداء والسلامة لكراسي العمل،
          بما في ذلك:
        </p>

        <ul className={LIST_CLASS}>
          <li>التصميم المريح</li>
          <li>السلامة الهيكلية</li>
          <li>الاستقرار</li>
          <li>المتانة</li>
          <li>متطلبات السلامة</li>
          <li>جودة الصنع</li>
          <li>أداء المنتج</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          توفر علامة ISI تأكيدًا بأن المنتج قد تم تقييمه وفقًا للمعايير الهندية
          المعترف بها ويلبي متطلبات الجودة المقررة.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تُعد شهادة BIS مهمة لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُستخدم كراسي العمل لفترات طويلة في المكاتب والمؤسسات التعليمية
          والمنشآت التجارية ومساحات العمل المنزلية. وبما أن المستخدمين يقضون
          جزءًا كبيرًا من يومهم جالسين، فإن جودة وأداء هذه الكراسي المريح يؤثر
          مباشرة على الراحة وكفاءة مكان العمل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تساعد شهادة BIS في ضمان أن كراسي العمل المعتمدة:
        </p>

        <ul className={LIST_CLASS}>
          <li>تلبي متطلبات السلامة المقررة</li>
          <li>توفر أداءً موثوقًا</li>
          <li>تقدم قوة هيكلية كافية</li>
          <li>تحافظ على الاستقرار أثناء الاستخدام</li>
          <li>تدعم المتانة طويلة الأمد</li>
          <li>تلتزم بمعايير الجودة الهندية</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين، تساعد الشهادة في إثبات جودة المنتج مع دعم الامتثال
          التنظيمي وقبول السوق.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نظرة عامة على IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 هو المعيار الهندي الذي يحدد متطلبات كراسي العمل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يضع المعيار متطلبات تتعلق بـ:
        </p>

        <ul className={LIST_CLASS}>
          <li>السلامة</li>
          <li>القوة</li>
          <li>الاستقرار</li>
          <li>المتانة</li>
          <li>الاعتبارات المريحة</li>
          <li>الأداء الوظيفي</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف هو ضمان أن كراسي العمل قادرة على توفير أداء آمن وموثوق أثناء
          الاستخدام المطول في بيئات العمل.
        </p>

        <h3 className={SUB_HEADING_CLASS}>نطاق IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          وفقًا للمعيار، يغطي IS 17631:2022 كراسي العمل وينطبق على:
        </p>

        <ul className={LIST_CLASS}>
          <li>كراسي العمل المصنعة بالكامل</li>
          <li>كراسي العمل المجمعة</li>
          <li>كراسي العمل الجاهزة للتجميع بعد التجميع</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تنطبق متطلبات المعيار على المنتج المجمّع المخصص للاستخدام.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          أنواع كراسي العمل المشمولة بموجب IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          اعتمادًا على تصميم المنتج والاستخدام المقصود، قد ينطبق المعيار على
          فئات مختلفة من مقاعد العمل، بما في ذلك:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>كراسي المكاتب —</strong> المقاعد المستخدمة في المكاتب
            المؤسسية والإدارات الإدارية وبيئات العمل المهنية.
          </li>
          <li>
            <strong>كراسي المهام —</strong> الكراسي المصممة للعمل اليومي على
            المكتب ومحطات العمل والمهام الجلوسية الروتينية.
          </li>
          <li>
            <strong>كراسي العمل القابلة للتعديل —</strong> الموديلات ذات
            ميزات تعديل الارتفاع أو الإمالة أو غيرها لتحسين الراحة والبيئة
            المريحة.
          </li>
          <li>
            <strong>كراسي العمل المؤسسية —</strong> الكراسي الموردة للمدارس
            والكليات والمكاتب الحكومية والمؤسسات التجارية.
          </li>
          <li>
            <strong>كراسي المكاتب المنزلية —</strong> كراسي العمل المصممة
            للعمل عن بُعد والعاملين المستقلين وإعدادات المكاتب السكنية.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          راجع تصميم المنتج والآلية والاستخدام المقصود بعناية للتأكد مما إذا
          كان كرسيك يقع ضمن نطاق IS 17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            تحقق أيضًا من منتجات الأثاث المشمولة بشهادة BIS الإلزامية —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>شهادة BIS للأثاث</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المتطلبات الرئيسية بموجب IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يركز المعيار على عدة خصائص أداء مهمة تساهم في جودة وسلامة كراسي
          العمل.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>التصميم المريح —</strong> يتناول راحة المستخدم ودعم المقعد
            ومسند الظهر وقابلية التعديل والوضعية الصحيحة لتقليل التعب وتحسين
            الإنتاجية في مكان العمل.
          </li>
          <li>
            <strong>متطلبات القوة —</strong> يجب أن تتحمل الإطار والوصلات
            والهياكل الداعمة الاستخدام العادي دون فشل أو فقدان السلامة
            الهيكلية.
          </li>
          <li>
            <strong>متطلبات الاستقرار —</strong> يجب أن تقاوم الكراسي الانقلاب
            وتظل مستقرة أثناء الاستخدام الجلوسي المنتظم والحركة.
          </li>
          <li>
            <strong>متطلبات المتانة —</strong> يجب أن يؤدي المنتج باستمرار بعد
            الاستخدام اليومي المطول والمتكرر طوال عمر الخدمة المقصود.
          </li>
          <li>
            <strong>متطلبات السلامة —</strong> يجب أن يقلل التصميم والبناء من
            المخاطر القابلة للتجنب الناتجة عن عدم الاستقرار أو العيوب أو
            البناء غير الآمن.
          </li>
          <li>
            <strong>جودة المواد —</strong> يجب أن تلبي المكونات والتشطيبات
            معايير الجودة التي تدعم الأداء الآمن والمتين والموثوق.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار لشهادة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قبل منح الشهادة، يتم تقييم عينات المنتج من خلال الاختبار في مختبر
          معترف به. يساعد الاختبار في التحقق من الامتثال للمتطلبات المحددة
          بموجب IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الاختبارات الرئيسية التي يتم إجراؤها</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  المتطلبات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["4", "التصميم والإتقان"],
                ["7.3.1", "الانقلاب الحافة الأمامية"],
                ["7.3.2", "الانقلاب للأمام"],
                [
                  "7.3.3",
                  "الانقلاب للأمام للكراسي مع مسند القدم",
                ],
                [
                  "7.3.4",
                  "الانقلاب الجانبي للكراسي بدون مساند الأذرع",
                ],
                [
                  "7.3.5",
                  "الانقلاب الجانبي للكراسي مع مساند الأذرع",
                ],
                [
                  "7.3.6",
                  "الانقلاب للخلف للكراسي بدون مسند الظهر",
                ],
                ["7.4.1", "اختبار الحمولة الثابتة لحافة المقعد الأمامية"],
                ["7.4.2", "اختبار الحمولة الثابتة المشتركة للمقعد والظهر"],
                ["7.4.3", "اختبار الحمولة الثابتة لمسند الذراع للأسفل — المركزي"],
                ["7.4.4", "اختبار الحمولة الثابتة لمسند الذراع للأسفل — الأمامي"],
                ["7.4.5", "اختبار الحمولة الثابتة الجانبية لمسند الذراع"],
                ["7.4.6", "اختبار الحمولة الثابتة لمسند القدم"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الذين يسعون للحصول على شهادة BIS بموجب IS 17631:2022
          إكمال عملية شهادة منظمة.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>الخطوة 1: تقييم انطباق المنتج —</strong> تأكيد ما إذا كان
            كرسي العمل يقع ضمن IS 17631:2022 وأمر مراقبة الجودة للأثاث المعمول
            به قبل بدء الشهادة.
          </li>
          <li>
            <strong>الخطوة 2: إعداد المستندات —</strong> تجميع السجلات
            الفنية والتصنيعية ومراقبة الجودة والقانونية المطلوبة لمراجعة BIS.
          </li>
          <li>
            <strong>الخطوة 3: اختبار المنتج —</strong> تقديم العينات إلى
            مختبر معترف به من BIS للتقييم وفقًا لـ IS 17631:2022.
          </li>
          <li>
            <strong>الخطوة 4: تقديم الطلب —</strong> تقديم طلب BIS مع
            تقارير الاختبار وتفاصيل المصنع ومستندات الامتثال الداعمة.
          </li>
          <li>
            <strong>الخطوة 5: تفتيش المصنع —</strong> يقيّم BIS أنظمة
            الإنتاج وإجراءات مراقبة الجودة وقابلية التتبع في منشأة التصنيع.
          </li>
          <li>
            <strong>الخطوة 6: المراجعة الفنية —</strong> يقيّم BIS الطلب
            ونتائج المختبر ونتائج التفتيش قبل الموافقة النهائية.
          </li>
          <li>
            <strong>الخطوة 7: منح رخصة BIS —</strong> عند نجاح الامتثال، يصدر
            BIS الرخصة ويُصرّح باستخدام علامة ISI على كراسي العمل المعتمدة.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمصنعين الهنود
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يتقدم المصنعون الهنود عادةً عبر مسار الشهادة المحلية. تتضمن العملية
          عمومًا:
        </p>

        <ul className={LIST_CLASS}>
          <li>اختبار المنتج في مختبر معترف به من BIS</li>
          <li>مراجعة المستندات وتقديم طلب BIS</li>
          <li>تقييم المصنع والمراجعة الفنية من BIS</li>
          <li>منح رخصة BIS والتفويض بعلامة ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بعد الشهادة، يجب على المصنعين الحفاظ على الامتثال المستمر لمتطلبات
          المراقبة والعلامات والجودة لـ BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمصنعين الأجانب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الأجانب الذين يعتزمون تصدير كراسي العمل إلى الهند
          أيضًا الحصول على شهادة BIS قبل توريد المنتجات المشمولة بمتطلبات
          الشهادة الإلزامية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن العملية عمومًا:
        </p>

        <ul className={LIST_CLASS}>
          <li>تعيين ممثل هندي معتمد (AIR)</li>
          <li>اختبار المنتج في الخارج وتقييم المصنع</li>
          <li>مراجعة طلب BIS والموافقة على الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يضمن ذلك أن المنتجات المستوردة تلبي نفس متطلبات الجودة والسلامة
          المعمول بها للمصنعين المحليين.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS لكراسي العمل
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعد الوثائق جزءًا حاسمًا من عملية شهادة BIS لكراسي العمل. قد
          تختلف المتطلبات بناءً على ما إذا كان مقدم الطلب مصنعًا هنديًا أو
          مصنعًا أجنبيًا أو مستوردًا، وعلى مخطط الشهادة المتبع. تُعد السجلات
          غير المكتملة أو غير المتسقة من أكثر أسباب تأخير الطلبات شيوعًا.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تُطلب المستندات التالية عادةً أثناء شهادة BIS لكراسي العمل بموجب IS
          17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>مستندات الأعمال —</strong> شهادة تسجيل الشركة، رخصة
            التصنيع (إن وجدت)، تسجيل GST، إثبات عنوان العمل، وتفاصيل
            الموقّع المخول مع إثبات الهوية والعنوان.
          </li>
          <li>
            <strong>مستندات التصنيع —</strong> مخطط تخطيط المصنع، مخطط
            انسياب عملية التصنيع، قائمة آلات الإنتاج ومعدات الاختبار، وتفاصيل
            البنية التحتية للإنتاج والطاقة المثبتة.
          </li>
          <li>
            <strong>مستندات المنتج —</strong> مواصفات المنتج، الرسومات
            الهندسية أو الفنية، دليل المنتج أو قائمة الموديلات، قائمة
            المواد (BOM)، وتفاصيل المواد الخام والمكونات والأجزاء الحرجة
            المستخدمة في كرسي العمل.
          </li>
          <li>
            <strong>مستندات مراقبة الجودة —</strong> إجراءات مراقبة الجودة
            المكتوبة، سجلات فحص المواد الواردة، تقارير فحص العمليات الجارية
            والمنتجات النهائية، طرق الاختبار الداخلية، وشهادات المعايرة
            لمعدات القياس والاختبار.
          </li>
          <li>
            <strong>مستندات الشهادة —</strong> تقارير الاختبار من مختبر
            معترف به من BIS، نماذج طلب BIS المعبأة، الإقرارات والتعهدات،
            عينات الملصقات أو العلامات، وأي مستندات إضافية يحددها BIS لمسار
            الشهادة المحدد.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تكون جميع المستندات دقيقة وكاملة ومتسقة مع تفاصيل المنتج
          المقدمة في طلب BIS. يُنصح المصنعون بمراجعة متطلبات الوثائق بعناية
          قبل التقديم لتجنب التأخير غير الضروري في معالجة الشهادة.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS لكراسي العمل
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>الامتثال التنظيمي —</strong> الوفاء بالمعايير الهندية
            الإلزامية ومتطلبات QCO للتصنيع والبيع القانوني.
          </li>
          <li>
            <strong>الوصول القانوني للسوق —</strong> توريد كراسي العمل
            المعتمدة في الهند دون مخاطر تنظيمية لفئات المنتجات المشمولة.
          </li>
          <li>
            <strong>تعزيز المصداقية —</strong> تشير علامة ISI إلى جودة
            وسلامة وامتثال تم التحقق منها وفقًا لـ IS 17631:2022.
          </li>
          <li>
            <strong>ثقة العملاء —</strong> يثق المشترون المؤسسيون والمؤسسات
            والمستخدمون النهائيون بالمنتجات المختبرة وفقًا للمعايير الوطنية.
          </li>
          <li>
            <strong>مشتريات أفضل —</strong> يحسّن الأهلية في المناقصات
            الحكومية والمؤسسية والتجارية ذات الحجم الكبير.
          </li>
          <li>
            <strong>سمعة علامة تجارية أقوى —</strong> يُظهر الالتزام بالجودة
            والبيئة المريحة وموثوقية المنتج على المدى الطويل.
          </li>
          <li>
            <strong>تحسين مراقبة الجودة —</strong> يشجع أنظمة مراقبة جودة
            منظمة وقابلية التتبع ومعايير إنتاج متسقة.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة أثناء شهادة BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>التفسير الفني —</strong> قد يكون ربط بنود IS 17631:2022
            بتصاميم وآليات ومتغيرات كراسي محددة معقدًا.
          </li>
          <li>
            <strong>فشل الاختبارات —</strong> غالبًا ما تؤدي الإطارات الضعيفة
            أو عدم الاستقرار أو مشاكل الآلية إلى رفض اختبارات الانقلاب أو
            الحمولة.
          </li>
          <li>
            <strong>فجوات في المستندات —</strong> غالبًا ما تؤخر الرسومات
            غير المتطابقة أو سجلات مراقبة الجودة غير المكتملة أو الإقرارات
            المفقودة الموافقة.
          </li>
          <li>
            <strong>امتثال المصنع —</strong> قد تحتاج ضوابط الإنتاج
            وقابلية التتبع والاختبار الداخلي إلى ترقية قبل منح الرخصة.
          </li>
          <li>
            <strong>التنسيق التنظيمي —</strong> يستغرق مواءمة اختبار المختبر
            وتفتيشات BIS ومتابعة الاستفسارات وقتًا دون دعم خبير.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختار Sun Certifications India؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India هي شركة استشارات امتثال تنظيمي تساعد
          المصنعين والمستوردين والمصدرين والشركات في الحصول على شهادات
          وموافقات مختلفة مطلوبة للسوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يقدم فريقنا مساعدة شاملة لشهادة BIS لكراسي العمل بموجب IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>تشمل خدماتنا</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>تقييم انطباق المنتج —</strong> نؤكد ما إذا كانت كراسي
            العمل الخاصة بك تقع ضمن IS 17631:2022 وأمر مراقبة الجودة المعمول
            به.
          </li>
          <li>
            <strong>استشارات امتثال BIS —</strong> إرشادات خبراء حول مسارات
            الشهادة والالتزامات ومتطلبات المعيار.
          </li>
          <li>
            <strong>المساعدة في المستندات —</strong> إعداد ومراجعة وتنظيم
            جميع سجلات طلب BIS والمصنع.
          </li>
          <li>
            <strong>تنسيق الاختبار —</strong> دعم شامل لتقديم العينات
            والاختبار في المختبرات المعترف بها.
          </li>
          <li>
            <strong>دعم تفتيش المصنع —</strong> فحوصات الجاهزية لتقييم
            المصنع من BIS وتقييمات الامتثال.
          </li>
          <li>
            <strong>إدارة الطلب —</strong> التعامل مع تقديمات BIS والمتابعات
            والتواصل التنظيمي نيابةً عنك.
          </li>
          <li>
            <strong>دعم ما بعد الشهادة —</strong> مساعدة مستمرة في المراقبة
            وقواعد العلامات ومتطلبات صيانة الرخصة.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تلعب شهادة BIS لكراسي العمل بموجب IS 17631:2022 دورًا مهمًا في
          ضمان الجودة والسلامة والمتانة والاستقرار والأداء المريح في منتجات
          مقاعد العمل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          من خلال الحصول على شهادة BIS واستخدام علامة ISI، يمكن للمصنعين
          إثبات الامتثال للمعايير الهندية، وتعزيز ثقة العملاء، وتحسين
          مصداقية المنتج، ودعم نمو الأعمال على المدى الطويل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          سواء كنت مصنعًا هنديًا أو مصنعًا في الخارج يسعى للوصول إلى السوق
          الهندي، فإن فهم متطلبات IS 17631:2022 خطوة أساسية نحو الامتثال
          التنظيمي والنجاح في السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إذا كنت تخطط للحصول على شهادة BIS لكراسي العمل بموجب IS 17631:2022،
          يمكن لـ Sun Certifications India تبسيط العملية من خلال الإرشاد
          التنظيمي الخبير والدعم الشامل للامتثال.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS لكراسي العمل (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ما هي شهادة BIS لكراسي العمل؟</strong>
              <br />
              تؤكد شهادة BIS أن كراسي العمل تتوافق مع متطلبات IS 17631:2022
              ومتطلبات الشهادة المعمول بها.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هو IS 17631:2022؟</strong>
              <br />
              IS 17631:2022 هو المعيار الهندي الذي يحدد متطلبات كراسي العمل،
              بما في ذلك السلامة والقوة والاستقرار والمتانة والاعتبارات
              المريحة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. هل شهادة BIS إلزامية لكراسي العمل؟</strong>
              <br />
              يُطلب من كراسي العمل المشمولة بالإطار التنظيمي المعمول به
              الامتثال لمتطلبات شهادة BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ما هي علامة ISI؟</strong>
              <br />
              علامة ISI هي علامة الشهادة القياسية الصادرة بموجب مخطط شهادة
              منتجات BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. من يمكنه التقدم للحصول على شهادة BIS؟</strong>
              <br />
              يمكن للمصنعين الهنود والمصنعين الأجانب التقدم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. هل تتطلب شهادة BIS اختبار المنتج؟</strong>
              <br />
              نعم. يُعد اختبار المنتج جزءًا مهمًا من عملية الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. هل تتطلب كراسي العمل المستوردة شهادة BIS؟
              </strong>
              <br />
              يجب أن تتوافق المنتجات المشمولة بمتطلبات الشهادة الإلزامية مع
              لوائح BIS المعمول بها قبل توريدها في الهند.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ما الاختبارات التي تُجرى بموجب IS 17631:2022؟</strong>
              <br />
              يتضمن المعيار تقييمات مثل تقييم التصميم والإتقان، والتحقق
              من الأبعاد، واختبار الاستقرار، واختبار الحمولة الثابتة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. لماذا يُعد التصميم المريح مهمًا لكراسي العمل؟</strong>
              <br />
              يساعد التصميم المريح في تحسين راحة المستخدم ويدعم الوضعية
              الصحيحة ويساهم في تجربة عمل أفضل.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. كيف يمكن لـ Sun Certifications India المساعدة؟</strong>
              <br />
              تقدم Sun Certifications India المساعدة في تقييم الانطباق
              والمستندات وتنسيق الاختبار والاستعداد للتفتيش وإدارة الطلب
              ودعم الامتثال.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS لكراسي العمل - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          موارد ذات صلة
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> شهادة ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">شهادة BIS للمصنع الأجنبي</a>
          </li>
        </ul>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={4} />
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
                أفضل مستشار شهادات في الهند
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
              علامة BIS (رخصة ISI) للمصنعين الأجانب
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
