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

const BISCertificateForTablesAndDesksUnitArabic = () => {
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

export default BISCertificateForTablesAndDesksUnitArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للطاولات والمكاتب | IS 17633:2022 ترخيص BIS";
  const ogTitle = "شهادة BIS للطاولات والمكاتب – دليل IS 17633:2022";
  const twitterTitle = "ترخيص BIS للطاولات والمكاتب | IS 17633:2022";
  const metaDescription =
    "احصل على شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022. العملية، الوثائق، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل شامل لشهادة BIS للطاولات والمكاتب وفقاً لـ IS 17633:2022. تعرف على العملية، التكلفة، الوثائق، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022. تعرف على عملية BIS، الوثائق، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للطاولات والمكاتب، ترخيص BIS للطاولات والمكاتب، IS 17633:2022، شهادة BIS للطاولات والمكاتب";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tawilat-wa-makatib-is-17633";
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
                    شهادة BIS للطاولات والمكاتب – IS 17633:2022
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
          شهادة BIS للطاولات والمكاتب (IS 17633:2022) – الدليل الكامل لشهادة علامة ISI
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="ترخيص BIS للطاولات والمكاتب"
            alt="شهادة BIS للطاولات والمكاتب - IS 17633:2022 دليل علامة ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعد الطاولات والمكاتب من أكثر منتجات الأثاث استخداماً على نطاق واسع في
          المكاتب والمؤسسات التعليمية والمنشآت التجارية والمؤسسات الحكومية
          والمساحات السكنية. وبما أنه يُتوقع من هذه المنتجات تحمّل الاستخدام المنتظم
          مع ضمان سلامة المستخدم والاستقرار والمتانة، فقد أصبح الامتثال لمعايير
          الجودة المعترف بها أمراً متزايد الأهمية للمصنعين والمستوردين.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          في الهند، يُطلب من الطاولات والمكاتب المشمولة بموجب IS 17633:2022 الامتثال
          لمتطلبات الجودة والسلامة المعمول بها التي يحددها مكتب المعايير الهندية
          (BIS). يمكن للمصنعين الذين يستوفون هذه المتطلبات بنجاح الحصول على ترخيص BIS
          واستخدام علامة ISI على منتجاتهم، مما يدل على المطابقة للمعيار الهندي ذي
          الصلة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُقيّم عملية الشهادة جوانب مختلفة من أداء المنتج، بما في ذلك القوة
          والاستقرار والمتانة والإتقان والأبعاد والسلامة العامة. ولا يساعد الامتثال
          الشركات على تلبية المتطلبات التنظيمية فحسب، بل يحسّن أيضاً مصداقية المنتج
          وقبوله في السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل كل ما يحتاج المصنعون والمستوردون والعلامات التجارية
          للأثاث ومحترفو المشتريات معرفته حول شهادة BIS للطاولات والمكاتب بموجب
          IS 17633:2022، بما في ذلك القابلية للتطبيق ومتطلبات الشهادة ومعايير
          الاختبار والوثائق والفوائد وعملية الشهادة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          أبرز نقاط شهادة BIS للطاولات والمكاتب
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
                ["المنتج", "الطاولات والمكاتب"],
                ["المعيار المعمول به", "IS 17633:2022"],
                ["نوع الشهادة", "شهادة منتج BIS"],
                ["العلامة المعمول بها", "علامة ISI"],
                ["مخطط الشهادة", "المخطط الأول (شهادة علامة ISI)"],
                ["السلطة التنظيمية", "مكتب المعايير الهندية (BIS)"],
                ["القطاع المعمول به", "الأثاث"],
                [
                  "المتقدمون المؤهلون",
                  "المصنعون الهنود والمصنعون الأجانب",
                ],
                [
                  "متطلب الامتثال",
                  "إلزامي بموجب أمر مراقبة الجودة (QCO) للأثاث المعمول به",
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
                    {particular === "مخطط الشهادة" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        المخطط الأول (شهادة علامة ISI)
                      </a>
                    ) : particular === "متطلب الامتثال" ? (
                      <>
                        إلزامي بموجب{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>أمر مراقبة الجودة (QCO) للأثاث</strong>
                        </a>{" "}
                        المعمول به
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

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ما هي شهادة BIS للطاولات والمكاتب؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للطاولات والمكاتب هي عملية تقييم مطابقة تُجرى بموجب مخطط شهادة
          المنتجات لمكتب المعايير الهندية (BIS). تؤكد الشهادة أن المنتج يمتثل
          للمتطلبات المحددة في IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          عند الحصول على الشهادة بنجاح، يُسمح للمصنعين باستخدام علامة ISI على
          منتجاتهم، مما يدل على الامتثال للمعيار الهندي المعمول به.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تهدف الشهادة إلى ضمان أن الطاولات والمكاتب المورّدة في السوق الهندية تلبي
          المتطلبات المعتمدة المتعلقة بـ:
        </p>

        <ul className={LIST_CLASS}>
          <li>القوة الهيكلية والاستقرار أثناء الاستخدام العادي</li>
          <li>المتانة وسلامة المستخدم وإتقان المواد</li>
          <li>متطلبات الأداء الكاملة بموجب IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمشترين ووكالات المشتريات، تُعد علامة ISI ضماناً بأن الأثاث قد تم
          تقييمه وفقاً لمعايير الجودة والسلامة المعترف بها.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نظرة عامة على IS 17633:2022 للطاولات والمكاتب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 هو المعيار الهندي الذي يحدد متطلبات الأداء والسلامة للطاولات
          والمكاتب المخصصة للمستخدمين البالغين في تطبيقات الجلوس والوقوف.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يغطي المعيار كلاً من:
        </p>

        <ul className={LIST_CLASS}>
          <li>الطاولات والمكاتب المصنّعة بالكامل (الجاهزة)</li>
          <li>
            الوحدات الجاهزة للتجميع (RTA) — التي يتم اختبارها بعد التجميع الكامل
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف من المعيار هو وضع الحد الأدنى من متطلبات الأداء والسلامة التي تساعد
          على ضمان بقاء الأثاث مستقراً ومتيناً وآمناً طوال عمره التشغيلي المقصود.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          المجالات الرئيسية المشمولة بموجب IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          يركز المعيار على عدة خصائص أداء مهمة، بما في ذلك:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>متطلبات القوة —</strong> يجب أن تتحمل الطاولات والمكاتب الأحمال
            المتوقعة أثناء الاستخدام العادي دون فشل أو تشوه مفرط.
          </li>
          <li>
            <strong>متطلبات الاستقرار —</strong> يجب أن يظل الأثاث مستقراً أثناء
            الاستخدام ويقاوم الانقلاب تحت ظروف التحميل المتوقعة.
          </li>
          <li>
            <strong>متطلبات المتانة —</strong> يجب أن تحافظ المنتجات على الأداء
            والسلامة الهيكلية بعد الاستخدام المتكرر على مدى فترة طويلة.
          </li>
          <li>
            <strong>متطلبات السلامة —</strong> يجب أن يقلل التصميم والبناء من المخاطر
            الناجمة عن عدم الاستقرار أو الحواف الحادة أو البناء غير الآمن أو الفشل
            الهيكلي.
          </li>
          <li>
            <strong>جودة الإتقان والبناء —</strong> يتم تقييم الإتقان والتجميع
            والمفاصل والمثبتات والبناء العام لضمان أداء موثوق طويل الأمد.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          هل شهادة BIS للطاولات والمكاتب إلزامية في الهند؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          نعم. يُطلب من الطاولات والمكاتب المشمولة بأمر مراقبة الجودة (QCO) للأثاث
          المعمول به الامتثال للمعيار الهندي ذي الصلة والحصول على شهادة BIS قبل
          تصنيعها أو استيرادها أو بيعها أو توزيعها أو عرضها في السوق الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          الهدف من الشهادة الإلزامية هو:
        </p>

        <ul className={LIST_CLASS}>
          <li>ضمان جودة منتج أعلى عبر صناعة الأثاث</li>
          <li>حماية سلامة المستهلك من خلال معايير موثقة</li>
          <li>منع دخول الأثاث دون المستوى إلى السوق</li>
          <li>تعزيز التوحيد القياسي ومعايير الجودة الموحدة</li>
          <li>بناء ثقة المشتري في المنتجات المعتمدة بعلامة ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين المشمولين باللوائح المعمول بها الحصول على ترخيص BIS
          واستخدام علامة ISI وفقاً لمتطلبات BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            تحقق أيضاً من منتجات الأثاث المشمولة بشهادة BIS الإلزامية —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>شهادة BIS للأثاث</strong>
          </a>
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نطاق المنتجات المشمولة بموجب IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يمتد نطاق IS 17633:2022 ليشمل فئات مختلفة من الطاولات والمكاتب المصممة
          للمستخدمين البالغين عبر البيئات السكنية والتجارية والمؤسسية وأماكن العمل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل أمثلة المنتجات المشمولة بشكل شائع:
        </p>

        <ul className={LIST_CLASS}>
          <li>مكاتب المكتب والدراسة والكمبيوتر</li>
          <li>محطات العمل والمكاتب متعددة الأغراض</li>
          <li>طاولات المؤتمرات والاجتماعات</li>
          <li>الطاولات المؤسسية والمخبرية</li>
          <li>أثاث العمل المشترك والاستخدام التجاري</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين مراجعة مواصفات المنتج والاستخدام المقصود بعناية لتحديد ما
          إذا كانت منتجاتهم تقع ضمن نطاق IS 17633:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المتطلبات التقنية الرئيسية بموجب IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          للحصول على شهادة BIS، يجب أن تستوفي الطاولات والمكاتب متطلبات الأداء
          والسلامة المختلفة المحددة بموجب المعيار.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>السلامة الهيكلية —</strong> يجب أن تؤدي المنتجات تحت الأحمال
            المحددة؛ وتبقى المفاصل والهياكل الداعمة آمنة أثناء الاختبار.
          </li>
          <li>
            <strong>أداء تحمل الأحمال —</strong> يجب أن تدعم الطاولات والمكاتب
            الأحمال المحددة دون تشوه أو ضرر أو فشل غير مقبول.
          </li>
          <li>
            <strong>أداء الاستقرار —</strong> يجب أن يظل الأثاث مستقراً أثناء
            الاستخدام ويقلل من مخاطر الانقلاب التي قد تسبب إصابة أو ضرراً بالممتلكات.
          </li>
          <li>
            <strong>أداء المتانة —</strong> يجب أن تتحمل المنتجات دورات الاستخدام
            المتكررة مع الحفاظ على أداء مقبول.
          </li>
          <li>
            <strong>المواد والإتقان —</strong> يجب أن تستوفي المواد والتشطيب وطرق
            التجميع ضوابط الجودة للإنتاج المتسق.
          </li>
          <li>
            <strong>اعتبارات السلامة —</strong> يجب أن يقلل التصميم من المخاطر
            الناجمة عن استخدام الأثاث للمستهلكين والمشترين المؤسسيين.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تهم شهادة BIS لمصنعي الأثاث
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أصبح سوق الأثاث الهندي مهتماً بالجودة بشكل متزايد. وغالباً ما تفضّل
          الإدارات الحكومية والمؤسسات التعليمية والمشترون من الشركات ووكالات
          المشتريات الكبيرة المنتجات التي تمتثل للمعايير المعترف بها.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يساعد الحصول على شهادة BIS المصنعين على:
        </p>

        <ul className={LIST_CLASS}>
          <li>إثبات الامتثال للمعايير الهندية المعمول بها</li>
          <li>تعزيز مصداقية المنتج وسمعة العلامة التجارية</li>
          <li>كسب ثقة العملاء والمشترين المؤسسيين</li>
          <li>تحسين القبول في المشتريات الحكومية والشركات</li>
          <li>تعزيز ممارسات إدارة الجودة الداخلية</li>
          <li>البقاء في طليعة المتطلبات التنظيمية المتطورة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بالنسبة للمصنعين الذين يسعون إلى النمو طويل الأمد، غالباً ما يُنظر إلى شهادة
          BIS على أنها متطلب امتثال وميزة تجارية استراتيجية في آن واحد.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للطاولات والمكاتب بموجب IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قبل أن يتمكن المصنع من الحصول على شهادة BIS، يجب تقييم عينات المنتج وفقاً
          للمتطلبات المعمول بها في IS 17633:2022 من خلال الاختبار في مختبر معترف به
          من BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف من الاختبار هو التحقق من أن الأثاث يلبي المعايير المحددة للسلامة
          والاستقرار والقوة والمتانة والأداء العام.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          بينما قد تختلف معايير الاختبار الدقيقة بناءً على تصميم المنتج ومتطلبات
          الشهادة، يتم تقييم المصنعين بشكل عام للخصائص التالية:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>التصميم والإتقان —</strong> يتم فحص جودة البناء والتجميع والتشطيب
            وسلامة المنتج العامة للاستخدام الآمن طويل الأمد.
          </li>
          <li>
            <strong>التحقق من الأبعاد —</strong> يتم فحص القياسات الحرجة مقابل المعيار
            ومواصفات المنتج المعتمدة.
          </li>
          <li>
            <strong>اختبار الاستقرار —</strong> يؤكد بقاء المنتج مستقراً في الاستخدام
            العادي ويكشف عن نقاط الضعف في الانقلاب أو الهيكل.
          </li>
          <li>
            <strong>اختبار الحمل الثابت —</strong> يتحقق من قدرة تحمل الأحمال دون فشل
            أو تشوه مفرط أو ضرر.
          </li>
          <li>
            <strong>اختبار القوة —</strong> يقيّم الإطارات والمفاصل والدعامات تحت
            الإجهادات التشغيلية أثناء الاستخدام المنتظم.
          </li>
          <li>
            <strong>تقييم المتانة —</strong> يفحص الحفاظ على الأداء بعد دورات
            الاستخدام المتكررة.
          </li>
          <li>
            <strong>تقييم السلامة —</strong> يستبعد المخاطر التي يمكن تجنبها الناجمة
            عن عدم الاستقرار أو العيوب أو ميزات التصميم غير الآمنة.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للطاولات والمكاتب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الذين يسعون للحصول على شهادة BIS بموجب IS 17633:2022 اتباع
          عملية شهادة منظمة وضعها مكتب المعايير الهندية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          على الرغم من أن المتطلبات المحددة قد تختلف بناءً على نوع المتقدم وموقع
          التصنيع، تظل العملية العامة متشابهة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 1: تقييم نطاق المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن الخطوة الأولى تحديد ما إذا كان المنتج يقع ضمن نطاق IS 17633:2022 وأمر
          مراقبة الجودة المعمول به. عادةً ما يتم إجراء مراجعة تقنية لمواصفات المنتج
          والاستخدام المقصود والمواد والبناء قبل بدء عملية الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 2: إعداد الوثائق
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يقوم المصنع بإعداد الوثائق المطلوبة، بما في ذلك معلومات الشركة وتفاصيل
          التصنيع ومواصفات المنتج وإجراءات مراقبة الجودة والسجلات التقنية الداعمة.
          الوثائق المناسبة أمر بالغ الأهمية لأن أوجه القصور في هذه المرحلة يمكن أن
          تؤخر الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 3: اختبار المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم اختبار عينات المنتج في مختبر معترف به من BIS للتحقق من الامتثال
          لمتطلبات IS 17633:2022. يُعد تقرير الاختبار أحد الوثائق التقنية الأساسية
          الداعمة لطلب الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 4: تقديم الطلب
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتم تقديم طلب BIS مع الوثائق الداعمة وتقارير الاختبار ومعلومات التصنيع
          وسجلات إدارة الجودة. تتم مراجعة الطلب من قبل BIS للتأكد من اكتماله وامتثاله
          التقني.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 5: تقييم المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          قد يجري BIS تفتيشاً للمصنع لتقييم:
        </p>
        <ul className={LIST_CLASS}>
          <li>البنية التحتية للتصنيع وقدرات الإنتاج</li>
          <li>أنظمة مراقبة الجودة ومرافق الاختبار الداخلية</li>
          <li>ضوابط المواد الخام وآليات تتبع المنتج</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف هو التحقق من قدرة المصنع على إنتاج منتجات متوافقة باستمرار.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 6: التقييم والمراجعة
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يراجع BIS الطلب ونتائج التفتيش وتقارير اختبار المختبر قبل اتخاذ قرار
          الشهادة. يجب على المتقدم معالجة أي ملاحظات تُثار أثناء عملية المراجعة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          الخطوة 7: منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          عند الانتهاء بنجاح من جميع المتطلبات، يمنح BIS الترخيص ويفوّض المصنع
          باستخدام علامة ISI على الطاولات والمكاتب المعتمدة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمصنعين الهنود
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يتقدم المصنعون الهنود عموماً بموجب إجراء الشهادة المحلية الذي يحدده BIS.
          تتضمن العملية عادةً:
        </p>

        <ul className={LIST_CLASS}>
          <li>اختبار المنتج في مختبر معترف به من BIS</li>
          <li>تقديم الطلب مع الوثائق الداعمة</li>
          <li>تفتيش المصنع والمراجعة التقنية من قبل BIS</li>
          <li>منح ترخيص BIS وتفويض علامة ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          بمجرد الحصول على الشهادة، يجب على المصنعين الاستمرار في الامتثال لمتطلبات
          BIS والحفاظ على جودة منتج متسقة طوال فترة الترخيص.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          شهادة BIS للمصنعين الأجانب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الأجانب الذين يعتزمون تصدير الطاولات والمكاتب إلى الهند
          الحصول أيضاً على شهادة BIS قبل توريد المنتجات المشمولة بأمر مراقبة الجودة
          المعمول به.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تتضمن عملية الشهادة عموماً:
        </p>

        <ul className={LIST_CLASS}>
          <li>تعيين ممثل هندي مفوض (AIR)</li>
          <li>اختبار المنتج وتقييم المصنع في الخارج</li>
          <li>مراجعة الوثائق والموافقة على شهادة BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الأجانب ضمان الامتثال المستمر لمتطلبات BIS للحفاظ على صلاحية
          الشهادة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الوثائق المطلوبة لشهادة BIS للطاولات والمكاتب
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قد تختلف متطلبات الوثائق بناءً على المصنع ومسار الشهادة. ومع ذلك، عادةً ما
          تكون الوثائق التالية مطلوبة أثناء عملية الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الوثائق التجارية والقانونية</h3>
        <ul className={LIST_CLASS}>
          <li>تسجيل الشركة وترخيص التصنيع وضريبة السلع والخدمات (إن وجدت)</li>
          <li>تفاصيل الموقّع المفوض وإثبات الهوية</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>معلومات التصنيع</h3>
        <ul className={LIST_CLASS}>
          <li>مخطط تدفق العملية وتخطيط المصنع وتفاصيل الآلات</li>
          <li>سجلات البنية التحتية للإنتاج والقدرة</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>معلومات المنتج</h3>
        <ul className={LIST_CLASS}>
          <li>مواصفات المنتج والرسومات التقنية والكتالوج</li>
          <li>قائمة المواد وتفاصيل المواد/المكونات</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>وثائق مراقبة الجودة</h3>
        <ul className={LIST_CLASS}>
          <li>إجراءات الاختبار الداخلي والتفتيش ومراقبة الجودة</li>
          <li>سجلات مراقبة الجودة وتقارير معايرة المعدات</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>وثائق الشهادة</h3>
        <ul className={LIST_CLASS}>
          <li>تقارير اختبار المختبر ونماذج طلب BIS المكتملة</li>
          <li>الإقرارات والتعهدات والوثائق الأخرى التي يحددها BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين التأكد من أن جميع الوثائق دقيقة وكاملة ومتسقة قبل التقديم.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة أثناء شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          على الرغم من أن عملية الشهادة بسيطة عند إدارتها بشكل صحيح، إلا أن المصنعين
          غالباً ما يواجهون عدة تحديات.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>التفسير التقني —</strong> قد يكون ربط متطلبات IS 17633:2022
            بتصاميم المنتجات المحددة صعباً دون إرشاد متخصص.
          </li>
          <li>
            <strong>فشل الاختبارات —</strong> غالباً ما تؤدي المفاصل الضعيفة أو ضعف
            الاستقرار أو مشاكل المواد إلى رفض اختبار المختبر.
          </li>
          <li>
            <strong>فجوات الوثائق —</strong> السجلات غير المكتملة أو غير المتطابقة سبب
            متكرر لتأخير الطلبات.
          </li>
          <li>
            <strong>امتثال المصنع —</strong> قد تحتاج أنظمة مراقبة الجودة أو التتبع أو
            ضوابط الإنتاج إلى ترقية قبل منح الترخيص.
          </li>
          <li>
            <strong>التنسيق التنظيمي —</strong> يستغرق التوفيق بين اختبار المختبر
            والتفتيشات ومتابعات BIS وقتاً دون دعم منظم.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد المساعدة المهنية في شهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يمكن أن يساعد العمل مع مستشار BIS ذي خبرة المصنعين على تجنب التأخيرات
          المكلفة وتبسيط رحلة الشهادة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يشمل الدعم المهني عادةً:
        </p>

        <ul className={LIST_CLASS}>
          <li>مراجعة نطاق المنتج وتفسير المعيار</li>
          <li>إعداد الوثائق وتقديم الطلب</li>
          <li>تنسيق اختبار المختبر وتفتيش المصنع</li>
          <li>الامتثال المستمر ودعم ما بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتيح ذلك للمصنعين التركيز على الإنتاج مع ضمان معالجة المتطلبات التنظيمية
          بكفاءة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختار Sun Certifications India؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India هي استشارة امتثال تنظيمي تساعد المصنعين والمستوردين
          والمصدّرين والشركات في متطلبات الشهادة والموافقة عبر الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يقدم خبراؤنا دعماً شاملاً من البداية إلى النهاية لشهادة BIS للطاولات
          والمكاتب بموجب IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>تشمل خدماتنا</h3>

        <ul className={LIST_CLASS}>
          <li>تقييم قابلية تطبيق المنتج واستشارات الامتثال لـ BIS</li>
          <li>دعم الوثائق وإدارة الطلب</li>
          <li>تنسيق الاختبار والمساعدة في تفتيش المصنع</li>
          <li>التواصل التنظيمي ودعم الامتثال بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          هدفنا هو مساعدة الشركات على اجتياز عملية الشهادة بكفاءة مع تقليل التأخيرات
          وتحديات الامتثال.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعد شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022 متطلباً مهماً للمصنعين
          الذين يسعون لتوريد منتجات أثاث متوافقة في السوق الهندية. تساعد الشهادة على
          ضمان أن الطاولات والمكاتب تلبي المعايير المعتمدة المتعلقة بالسلامة
          والاستقرار والمتانة والقوة والجودة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          من خلال الحصول على شهادة BIS واستخدام علامة ISI، يمكن للمصنعين إثبات
          الامتثال للمعايير الهندية وتحسين ثقة العملاء وتعزيز موقعهم في السوق ودعم
          النمو التجاري طويل الأمد.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إذا كنت تخطط للحصول على شهادة BIS للطاولات والمكاتب بموجب IS 17633:2022،
          يمكن لـ Sun Certifications India مساعدتك بدعم امتثال شامل من البداية إلى
          النهاية، مما يساعدك على اجتياز عملية الشهادة بكفاءة وثقة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للطاولات والمكاتب (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ما هو IS 17633:2022؟</strong>
              <br />
              IS 17633:2022 هو المعيار الهندي الصادر عن مكتب المعايير الهندية (BIS)
              الذي يحدد الحد الأدنى من متطلبات الأداء والاستقرار والمتانة والسلامة
              للطاولات والمكاتب المخصصة للمستخدمين البالغين في تطبيقات الجلوس والوقوف.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. هل شهادة BIS إلزامية للطاولات والمكاتب؟</strong>
              <br />
              نعم — للمنتجات المشمولة بأمر مراقبة الجودة (QCO) للأثاث المعمول به. يجب
              على المصنعين والمستوردين الحصول على ترخيص BIS صالح والامتثال لـ
              IS 17633:2022 قبل تصنيع أو استيراد أو بيع أو توزيع هذا الأثاث في الهند.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ما علامة الشهادة المعمول بها على الطاولات والمكاتب؟</strong>
              <br />
              يُسمح للطاولات والمكاتب المعتمدة بحمل علامة ISI بموجب مخطط شهادة المنتجات
              لـ BIS، مما يشير إلى أن المنتج يتوافق مع المعيار الهندي المعمول به.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. من يمكنه التقدم للحصول على شهادة BIS؟</strong>
              <br />
              يمكن لكل من المصنعين الهنود والمصنعين الأجانب التقدم، شريطة أن تقع
              طاولاتهم ومكاتبهم ضمن نطاق أمر مراقبة الجودة المعمول به وتلبي متطلبات
              IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ما الغرض من شهادة BIS؟</strong>
              <br />
              تؤكد شهادة BIS أن الأثاث يلبي المعايير المعترف بها وطنياً للسلامة
              والأداء الهيكلي والمتانة والإتقان — مما يساعد على حماية المستخدمين
              النهائيين والحفاظ على معايير الجودة عبر السوق.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. ما المنتجات المشمولة بموجب IS 17633:2022؟</strong>
              <br />
              يغطي المعيار الطاولات والمكاتب المخصصة للبالغين المستخدمة في المكاتب
              والمؤسسات التعليمية والمنشآت التجارية وبيئات العمل — بما في ذلك مكاتب
              المكتب ومحطات العمل وطاولات الدراسة وطاولات المؤتمرات وفئات الأثاث
              المماثلة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. هل اختبار المختبر إلزامي؟</strong>
              <br />
              نعم. يجب اختبار عينات المنتج في مختبر معترف به من BIS، ويُعد تقرير
              الاختبار الناتج وثيقة أساسية في طلب الشهادة لإثبات الامتثال لـ
              IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل يمكن بيع الطاولات والمكاتب المستوردة دون شهادة BIS؟</strong>
              <br />
              لا. لا يمكن توريد المنتجات المستوردة التي تقع تحت الشهادة الإلزامية
              قانونياً في الهند دون موافقة BIS صالحة. يجب على المستوردين ضمان الامتثال
              للمعيار المعمول به قبل طرح المنتجات في السوق.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ما دور تفتيش المصنع؟</strong>
              <br />
              يجري BIS تقييم المصنع للتحقق من أن المصنع يحافظ على بنية تحتية كافية
              للإنتاج وأنظمة مراقبة الجودة وتتبع المنتج لتصنيع طاولات ومكاتب متوافقة
              باستمرار.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. كيف يمكن لـ Sun Certifications India المساعدة؟</strong>
              <br />
              تقدم Sun Certifications India مساعدة شاملة من البداية إلى النهاية — بما
              في ذلك تقييم نطاق المنتج وإعداد الوثائق وتنسيق اختبار المختبر وإدارة طلب
              BIS وجاهزية تفتيش المصنع ودعم الامتثال بعد الشهادة للطاولات والمكاتب
              بموجب IS 17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للطاولات والمكاتب - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          موارد ذات صلة
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ترخيص علامة ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">شهادة BIS FMCS</a>
          </li>
        </ul>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={2} />
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
                alt="شعار CDSCO"
                title="شعار CDSCO"
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
                alt="شعار BISCRS"
                title="شعار BISCRS"
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
                alt="إدارة النفايات البلاستيكية"
                title="إدارة النفايات البلاستيكية"
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
                alt="شهادة EPR"
                title="شهادة EPR"
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
                alt="شهادة LMPC"
                title="شهادة LMPC"
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
                alt="شعار BIS"
                title="شعار BIS"
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
                alt="علامة ISI"
                title="علامة ISI"
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
