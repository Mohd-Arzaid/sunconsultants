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

const BISCertificateForChairAndStoolsArabic = () => {
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

export default BISCertificateForChairAndStoolsArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة | IS 17632:2022";
  const ogTitle =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة | IS 17632:2022";
  const twitterTitle =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة | IS 17632:2022";
  const metaDescription =
    "تعرّف على كل ما يخص شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022. افهم متطلبات علامة ISI والاختبار وعملية الشهادة والمستندات والفوائد والأسئلة الشائعة";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "شهادة BIS للكراسي والمقاعد للأغراض العامة، IS 17632:2022، علامة ISI للكراسي والمقاعد، رخصة BIS للكراسي والمقاعد، شهادة BIS للأثاث";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632";
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
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    شهادة BIS للكراسي والمقاعد للأغراض العامة (IS 17632:2022)
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
      <div className="flex flex-col gap-6 md:flex-row md:gap-[48px] w-full">
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
          شهادة BIS للكراسي والمقاعد للأغراض العامة (IS 17632:2022) – دليل
          شهادة علامة ISI الكامل
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="رخصة BIS للكراسي والمقاعد للأغراض العامة"
            alt="شهادة BIS للكراسي والمقاعد للأغراض العامة - دليل علامة ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          تُعد الكراسي والمقاعد للأغراض العامة من بين أكثر منتجات الأثاث
          استخدامًا في المنازل والمكاتب والمؤسسات التعليمية والمرافق الصحية
          والمؤسسات التجارية والأماكن العامة والبيئات التجارية. وبما
          أن هذه منتجات الجلوس تخضع للاستخدام المنتظم والمطول، يجب أن تلبي
          متطلبات محددة للجودة والسلامة والقوة والمتانة لضمان أداء موثوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع تزايد التركيز على جودة المنتج وسلامة المستهلك، أصبح الامتثال
          للمعايير الهندية متطلبًا مهمًا لمصنعي الأثاث والمستوردين. تساعد
          شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022 في
          ضمان أن المنتجات تلبي متطلبات الأداء والسلامة المقررة قبل طرحها
          في السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتيح الشهادة بموجب مكتب المعايير الهندية (BIS) للمصنعين استخدام
          علامة ISI على المنتجات المتوافقة. وتُعد علامة ISI تأكيدًا بأن
          المنتج يتوافق مع معايير الجودة الهندية المعترف بها وقد خضع لعملية
          التقييم المطلوبة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع استمرار نمو صناعة الأثاث وتفضيل وكالات المشتريات بشكل متزايد
          للمنتجات المعتمدة، أصبحت شهادة BIS متطلبًا مهمًا للامتثال والوصول
          إلى السوق للمصنعين.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          أبرز نقاط شهادة BIS للكراسي والمقاعد للأغراض العامة
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
                ["اسم المنتج", "الكراسي والمقاعد للأغراض العامة"],
                ["المعيار الهندي المعمول به", "IS 17632:2022"],
                ["نوع الشهادة", "شهادة منتج BIS"],
                ["مخطط الشهادة", "المخطط I (شهادة علامة ISI)"],
                ["العلامة المعمول بها", "علامة ISI"],
                ["السلطة التنظيمية", "مكتب المعايير الهندية (BIS)"],
                ["الوزارة المعمول بها", "وزارة التجارة والصناعة"],
                [
                  "متطلب الامتثال",
                  "إلزامي بموجب أمر مراقبة الجودة للأثاث (QCO) المعمول به",
                ],
                ["فئة المنتج", "الأثاث"],
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
                        المخطط I (شهادة علامة ISI)
                      </a>
                    ) : particular === "متطلب الامتثال" ? (
                      <>
                        إلزامي بموجب{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
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
          ما هي شهادة BIS للكراسي والمقاعد للأغراض العامة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للكراسي والمقاعد للأغراض العامة هي عملية تقييم امتثال
          تُجرى بموجب مخطط شهادة منتجات BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف من الشهادة هو التحقق من أن المنتج يتوافق مع المتطلبات
          المحددة في IS 17632:2022. وبمجرد منح الشهادة، يُصرّح للمصنعين
          باستخدام علامة ISI على منتجاتهم.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تُقيّم عملية الشهادة جوانب مختلفة من أداء المنتج، بما في ذلك:
        </p>

        <ul className={LIST_CLASS}>
          <li>القوة</li>
          <li>الاستقرار</li>
          <li>المتانة</li>
          <li>الأداء الهيكلي</li>
          <li>متطلبات السلامة</li>
          <li>جودة المواد</li>
          <li>الإتقان</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد الشهادة في ضمان أن منتجات الجلوس الموردة في السوق الهندي
          تلبي معايير الجودة والسلامة المعتمدة.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نظرة عامة على IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 هو المعيار الهندي الذي يحدد متطلبات الكراسي والمقاعد
          للأغراض العامة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يضع المعيار متطلبات تتعلق بالسلامة والقوة والمتانة والاستقرار
          والأداء العام لأثاث الجلوس المخصص للاستخدام العام.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ينطبق المعيار على:
        </p>

        <ul className={LIST_CLASS}>
          <li>الكراسي والمقاعد المصنعة بالكامل</li>
          <li>الكراسي والمقاعد المجمعة</li>
          <li>المنتجات الجاهزة للتجميع بعد التجميع</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف من المعيار هو ضمان أن منتجات الأثاث توفر أداءً آمنًا وموثوقًا
          ومتينًا طوال عمر الخدمة المقصود.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المتطلبات الرئيسية بموجب IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>متطلبات القوة</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تتمتع الكراسي والمقاعد للأغراض العامة بقوة هيكلية كافية
          لتحمل ظروف التحميل المتوقعة أثناء الاستخدام العادي.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات الاستقرار</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن يظل الأثاث مستقرًا أثناء الاستخدام المقصود ولا يشكل مخاطر
          انقلاب غير ضرورية.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات المتانة</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تكون المنتجات قادرة على الحفاظ على سلامتها الهيكلية
          وأدائها عبر دورات الاستخدام المتكررة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات السلامة</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتضمن المعيار متطلبات متعلقة بالسلامة تهدف إلى تقليل المخاطر
          المرتبطة باستخدام الأثاث.
        </p>

        <h3 className={SUB_HEADING_CLASS}>جودة المواد والإتقان</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تساهم جودة المواد وممارسات التصنيع وطرق التجميع والوصلات
          والتشطيب بشكل كبير في الامتثال للمعيار.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الاعتبارات البشرية</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يتضمن المعيار اعتبارات متعلقة بالأداء تساهم في راحة المستخدم
          والوظائف العملية.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المنتجات المشمولة بموجب IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ينطبق المعيار عمومًا على:
        </p>

        <ul className={LIST_CLASS}>
          <li>الكراسي للأغراض العامة</li>
          <li>المقاعد للأغراض العامة</li>
          <li>أثاث الجلوس الثابت المخصص للاستخدام العام</li>
          <li>منتجات الجلوس الجاهزة للتجميع بعد التجميع</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين مراجعة نطاق المعيار بعناية لتحديد انطباقه على
          منتجاتهم.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
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
          هل شهادة BIS إلزامية للكراسي والمقاعد للأغراض العامة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          نعم. يُطلب من منتجات الأثاث المشمولة بأمر مراقبة الجودة للأثاث
          (QCO) المعمول به الامتثال للمعيار الهندي ذي الصلة والحصول على
          شهادة BIS قبل التصنيع أو الاستيراد أو البيع أو التوزيع أو
          التوريد في السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين المشمولين بالإطار التنظيمي المعمول به الحصول
          على رخصة BIS والامتثال لمتطلبات وضع العلامات المقررة من BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار لشهادة BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          قبل منح الشهادة، يجب تقييم عينات المنتج من خلال الاختبار في
          مختبرات معترف بها.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يركز الاختبار عمومًا على المعايير التالية:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>تقييم الأداء الهيكلي —</strong> يحدد ما إذا كان الكرسي
            أو المقعد قادرًا على تحمل ظروف الاستخدام العادي دون فشل.
          </li>
          <li>
            <strong>اختبار الاستقرار —</strong> يقيّم ما إذا كان الأثاث
            يظل مستقرًا أثناء الاستخدام المقصود ويقاوم الانقلاب.
          </li>
          <li>
            <strong>تقييم القوة —</strong> يقيّم قدرة تحمل الأحمال
            والسلامة الهيكلية للإطارات والوصلات والدعامات.
          </li>
          <li>
            <strong>تقييم المتانة —</strong> يتحقق من الحفاظ على الأداء
            بعد دورات الاستخدام المتكررة طوال عمر خدمة المنتج.
          </li>
          <li>
            <strong>تقييم السلامة —</strong> يحدد المخاطر المحتملة
            ويتحقق من الامتثال لمتطلبات السلامة المقررة.
          </li>
          <li>
            <strong>فحص الإتقان —</strong> يراجع جودة البناء والتشطيب
            وسلامة التجميع ومعايير البناء العامة.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات وضع العلامات على المنتج
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          يُطلب عمومًا من المنتجات المعتمدة بموجب IS 17632:2022 حمل
          معلومات تعريفية مثل:
        </p>

        <ul className={LIST_CLASS}>
          <li>اسم المصنع أو العلامة التجارية</li>
          <li>تعريف الموديل أو التصميم</li>
          <li>رقم الدفعة أو اللوت</li>
          <li>تاريخ التصنيع</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          لا يجوز وضع علامة ISI إلا بعد الحصول على رخصة BIS سارية.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للكراسي والمقاعد للأغراض العامة
        </h2>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 1: تقييم نطاق المنتج</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تتضمن الخطوة الأولى تحديد ما إذا كان المنتج يقع ضمن نطاق IS
          17632:2022 وأمر مراقبة الجودة للأثاث (QCO) المعمول به.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          راجع نوع الكرسي أو المقعد والاستخدام المقصود والمواد والبناء
          قبل بدء عملية الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 2: إعداد المستندات</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يُعد المصنع المستندات الفنية والامتثالية المطلوبة للشهادة، بما
          في ذلك سجلات الشركة وتفاصيل المصنع ومواصفات المنتج وإجراءات
          مراقبة الجودة.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          تساعد المستندات الكاملة والدقيقة في تجنب التأخير غير الضروري
          أثناء مراجعة BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 3: اختبار المنتج</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تُختبر عينات ممثلة في مختبر معترف به من BIS للتحقق من
          الامتثال لمتطلبات IS 17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          يُعد تقرير اختبار المختبر مستندًا فنيًا رئيسيًا يدعم طلب
          الشهادة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 4: تقديم طلب BIS</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يُقدَّم طلب الشهادة مع المستندات الداعمة وتقارير الاختبار
          ومعلومات التصنيع.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          يراجع BIS الطلب من حيث الاكتمال والامتثال الفني قبل المضي
          قدمًا.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 5: تفتيش المصنع</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          قد يقيّم BIS منشأة التصنيع وأنظمة الإنتاج وعمليات مراقبة
          الجودة للتحقق من القدرة على إنتاج منتجات متوافقة باستمرار.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          يغطي هذا التقييم عادةً البنية التحتية للإنتاج وأنظمة مراقبة
          الجودة وضوابط المواد الخام وقابلية تتبع المنتج.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 6: المراجعة الفنية</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          يراجع BIS الطلب وتقارير الاختبار ونتائج التفتيش قبل اتخاذ
          قرار الشهادة.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          يجب على مقدم الطلب معالجة أي ملاحظات أو نواقص تُثار أثناء
          المراجعة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الخطوة 7: منح الرخصة</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          عند تحقيق الامتثال المرضي، يمنح BIS الرخصة ويُصرّح
          باستخدام علامة ISI على الكراسي والمقاعد للأغراض العامة
          المعتمدة.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الاستمرار في الامتثال لمتطلبات BIS طوال
          فترة الرخصة.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          فوائد شهادة BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>الامتثال للوائح الهندية —</strong> تلبية متطلبات
            الجودة والسلامة الإلزامية بموجب أمر مراقبة الجودة للأثاث
            المعمول به.
          </li>
          <li>
            <strong>الوصول القانوني للسوق —</strong> توريد الكراسي
            والمقاعد المعتمدة في الهند وفقًا للمتطلبات التنظيمية
            المعمول بها.
          </li>
          <li>
            <strong>تعزيز مصداقية المنتج —</strong> تُظهر علامة ISI
            التوافق مع المعايير الهندية المعترف بها.
          </li>
          <li>
            <strong>زيادة ثقة العملاء —</strong> يفضل المستهلكون
            والمشترون المؤسسيون المنتجات المُقيَّمة وفقًا للمعايير
            المعتمدة.
          </li>
          <li>
            <strong>ميزة تنافسية —</strong> قبول أكبر في عمليات
            المشتريات التجارية والحكومية.
          </li>
          <li>
            <strong>تحسين سمعة العلامة التجارية —</strong> يُظهر
            الالتزام بجودة المنتج والسلامة والموثوقية على المدى
            الطويل.
          </li>
          <li>
            <strong>دعم المؤسسات الصغيرة والمتوسطة —</strong> يساعد
            المصنعين الصغار والمتوسطين على تعزيز حضورهم في السوق
            وبناء ثقة العملاء.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة أثناء الشهادة
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>فشل اختبار المنتج —</strong> قد تؤدي أوجه القصور
            في التصميم أو التصنيع إلى عدم الامتثال أثناء التقييم
            المخبري.
          </li>
          <li>
            <strong>مشاكل في المستندات —</strong> غالبًا ما تسبب
            السجلات غير المكتملة أو غير المتسقة تأخيرات في الشهادة.
          </li>
          <li>
            <strong>فجوات امتثال التصنيع —</strong> قد تتطلب أنظمة
            مراقبة الجودة تحسينًا قبل منح الشهادة.
          </li>
          <li>
            <strong>تعقيد اللوائح —</strong> قد يكون إدارة الاختبار
            والتفتيشات وإجراءات الشهادة صعبًا دون إرشاد خبير.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختار Sun Certifications India؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد Sun Certifications India المصنعين والمستوردين والمصدرين
          والشركات في متطلبات الامتثال التنظيمي في جميع أنحاء الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل خدماتنا:
        </p>

        <ul className={LIST_CLASS}>
          <li>تقييم انطباق المنتج</li>
          <li>استشارات شهادة BIS</li>
          <li>دعم المستندات</li>
          <li>تنسيق اختبار المختبر</li>
          <li>الاستعداد لتفتيش المصنع</li>
          <li>إدارة الطلب</li>
          <li>المساعدة في الامتثال التنظيمي</li>
          <li>الدعم بعد الشهادة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          هدفنا هو مساعدة العملاء على التنقل في متطلبات الشهادة بكفاءة
          وتحقيق الامتثال بأقل قدر من التأخير.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تلعب شهادة BIS للكراسي والمقاعد للأغراض العامة بموجب IS 17632:2022
          دورًا مهمًا في ضمان جودة المنتج وسلامته وقوته واستقراره
          ومتانته. تساعد الشهادة المصنعين على إثبات الامتثال للمعايير
          الهندية مع تعزيز ثقة العملاء ودعم الوصول إلى السوق.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          مع استمرار الطلب على منتجات الأثاث المضمونة الجودة في النمو،
          توفر شهادة BIS وعلامة ISI تأكيدًا قيمًا للمستهلكين والمؤسسات
          ووكالات المشتريات. المصنعون الذين يستثمرون في الامتثال لا
          يلبون المتطلبات التنظيمية فحسب، بل يعززون أيضًا قدرتهم التنافسية
          وسمعتهم في السوق على المدى الطويل.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          إذا كنت تخطط للحصول على شهادة BIS للكراسي والمقاعد للأغراض
          العامة بموجب IS 17632:2022، يمكن لـ Sun Certifications India
          تقديم إرشادات خبيرة ودعم شامل للامتثال طوال عملية الشهادة.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للكراسي والمقاعد للأغراض العامة
          (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. ما هو IS 17632:2022؟</strong>
              <br />
              IS 17632:2022 هو المعيار الهندي الذي يحدد متطلبات الكراسي
              والمقاعد للأغراض العامة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. هل شهادة BIS إلزامية للكراسي والمقاعد للأغراض
                العامة؟
              </strong>
              <br />
              يُطلب من المنتجات المشمولة بأمر مراقبة الجودة للأثاث
              المعمول به الامتثال لمتطلبات شهادة BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ما هي علامة ISI؟</strong>
              <br />
              علامة ISI هي علامة الشهادة القياسية الصادرة بموجب مخطط
              شهادة منتجات BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. من يمكنه التقدم للحصول على شهادة BIS؟</strong>
              <br />
              يمكن للمصنعين الهنود والمصنعين الأجانب التقدم للحصول على
              الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل تتطلب شهادة BIS اختبار المنتج؟</strong>
              <br />
              نعم. يُعد اختبار المنتج جزءًا مهمًا من عملية الشهادة.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. هل الكراسي الجاهزة للتجميع مشمولة بموجب IS
                17632:2022؟
              </strong>
              <br />
              نعم. ينطبق المعيار على المنتجات الجاهزة للتجميع بعد
              التجميع.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ما المنتجات المستثناة من نطاق IS 17632:2022؟
              </strong>
              <br />
              منتجات مثل الكراسي القابلة للإمالة والكراسي الهزّازة
              والكراسي المائلة والكنبات وبعض منتجات الجلوس المتخصصة
              مستثناة عمومًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ما فوائد الحصول على شهادة BIS؟</strong>
              <br />
              تشمل الفوائد الامتثال التنظيمي وتحسين مصداقية المنتج
              وتعزيز ثقة العملاء وقبول أفضل في السوق.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. هل يمكن للمصنعين الأجانب الحصول على شهادة BIS؟
              </strong>
              <br />
              نعم. يمكن للمصنعين الأجانب التقدم من خلال مسار شهادة BIS
              المعمول به للمصنعين في الخارج.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. كيف يمكن لـ Sun Certifications India المساعدة؟</strong>
              <br />
              تقدم Sun Certifications India دعمًا شاملاً لشهادة BIS،
              بما في ذلك المستندات وتنسيق الاختبار وإدارة الطلب
              والمساعدة في الامتثال.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للكراسي والمقاعد - IS 17632:2022 PDF"
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
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              شهادة ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              شهادة BIS للمصنع الأجنبي
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadArabic />

        <FaqAuthorArabic questionNumber={1} />
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
                alt="شعار BIS"
                title="شعار BIS"
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
                alt="شعار شهادة EPR"
                title="شعار شهادة EPR"
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
                alt="شعار LMPC"
                title="شعار LMPC"
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
                alt="شعار علامة ISI"
                title="شعار علامة ISI"
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
