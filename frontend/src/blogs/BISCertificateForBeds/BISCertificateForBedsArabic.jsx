import FaqAuthorArabic from "@/components/common/FaqAuthor/FaqAuthorArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ManyUsersAlsoReadArabic from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadArabic";
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
import LanguageSelector from "./LanguageSelector";
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

const BISCertificateForBedsArabic = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterArabic />
    </div>
  );
};

export default BISCertificateForBedsArabic;

const MetaTags = () => {
  const title = "شهادة BIS للأسرة | ترخيص BIS IS 17635:2022";
  const ogTitle = "شهادة BIS للأسرة – دليل IS 17635:2022";
  const twitterTitle = "ترخيص BIS للأسرة | IS 17635:2022";
  const metaDescription =
    "احصل على شهادة BIS للأسرة بموجب IS 17635:2022. العملية، المستندات، الاختبار، التكلفة والجدول الزمني لشهادة BIS في الهند.";
  const ogDescription =
    "دليل كامل لشهادة BIS للأسرة وفقاً لـ IS 17635:2022. تعرف على العملية، التكلفة، المستندات، الاختبار وفوائد ترخيص BIS.";
  const twitterDescription =
    "تقدم بطلب للحصول على شهادة BIS للأسرة بموجب IS 17635:2022. تعلم عملية BIS، المستندات، الاختبار، الرسوم والجدول الزمني في الهند.";
  const metaKeywords =
    "شهادة BIS للأسرة، ترخيص BIS للأسرة، IS 17635:2022، شهادة BIS للأسرة";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/asrat-is-17635";
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
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/asrat-is-17635",
          },
          headline: "شهادة BIS للأسرة",
          description:
            "شهادة BIS للأسرة في الهند هي ضمان جودة إلزامي، بموجب IS 17635:2022 بشكل أساسي، يضمن معايير السلامة والمتانة والأداء.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "شهادة BIS للأسرة",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "شهادة BIS للأسرة في الهند هي ضمان جودة إلزامي، بموجب IS 17635:2022 بشكل أساسي، يضمن معايير السلامة والمتانة والأداء.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "هل شهادة BIS إلزامية للأسرة في الهند؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، بموجب IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "ما هي صلاحية شهادة BIS؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 سنة، قابلة للتجديد.",
              },
            },
            {
              "@type": "Question",
              name: "هل يمكن للمصنعين الأجانب التقديم؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، بموجب FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "هل يمكن التقدم بطلب شهادة BIS عبر الإنترنت؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم.",
              },
            },
            {
              "@type": "Question",
              name: "هل علامة ISI إلزامية على الأسرة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم.",
              },
            },
            {
              "@type": "Question",
              name: "كم تستغرق العملية؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 يوماً.",
              },
            },
            {
              "@type": "Question",
              name: "هل الأسرة الخشبية والمعدنية مغطاة كلاهما؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، إذا كانت متوافقة مع IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "هل تفتيش المصنع إلزامي؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم.",
              },
            },
            {
              "@type": "Question",
              name: "هل يمكن للتجار التقدم بطلب BIS؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "فقط أصحاب العلامات التجارية مع السيطرة على التصنيع.",
              },
            },
          ],
        })}
      </script>
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
                    شهادة BIS للأسرة – IS 17635:2022
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
          شهادة BIS للأسرة – دليل كامل IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="ترخيص BIS للأسرة"
            alt="شهادة BIS للأسرة - شهادة BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة هي متطلب امتثال إلزامي في الهند للمصنعين والمستوردين
          للأسرة المخصصة للاستخدام المنزلي والتجاري. وفقاً لأحدث المعيار الهندي
          IS 17635:2022 – الأسرة (متطلبات السلامة)، يجب أن تلبي جميع الأسرة
          معايير السلامة الصارمة، والمتانة، والهيكلية، والأداء قبل بيعها في
          السوق الهندي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          الأسرة هي منتجات أثاث أساسية تُستخدم يومياً في المنازل، والفنادق،
          والمستشفيات، وبيوت الطلبة، وأماكن الإقامة PG، والمرافق المؤسسية. أي
          ضعف هيكلي، أو حواف حادة، أو فشل في المواد، أو قدرة تحميل ضعيفة يمكن أن
          يؤدي إلى إصابات خطيرة. لمنع مثل هذه المخاطر، يفرض مكتب المعايير الهندي
          (BIS){" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            شهادة BIS
          </a>{" "}
          للأسرة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يشرح هذا الدليل الشامل كل شيء عن ترخيص BIS للأسرة، بما في ذلك المعايير
          المعمول بها، وعملية الشهادة، ومتطلبات الاختبار، والمستندات، والرسوم،
          والجداول الزمنية، والعقوبات، والفوائد.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          أبرز نقاط شهادة BIS للأسرة
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
                ["المنتج", "الأسرة"],
                ["المعيار الهندي", "IS 17635:2022"],
                ["عنوان المعيار", "الأسرة – المواصفات"],
                ["مخطط الشهادة", "شهادة علامة ISI BIS"],
                ["السلطة التنظيمية", "مكتب المعايير الهندية (BIS)"],
                ["العلامة المعمول بها", "علامة ISI"],
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
                        شهادة علامة ISI BIS
                      </a>
                    ) : particular === "متطلب الامتثال" ? (
                      <>
                        إلزامي بموجب{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            أمر مراقبة الجودة (QCO) للأثاث المعمول به
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
          ما هي شهادة BIS للأسرة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة هي عملية تقييم مطابقة يثبت من خلالها المصنعون أن
          منتجاتهم تتوافق مع المتطلبات المحددة في IS 17635:2022. بمجرد التحقق من
          الامتثال من خلال الاختبار، وتقييم المصنع، والمراجعة التنظيمية، يُمنح
          المصنع ترخيص BIS ويمكنه وضع علامة ISI على المنتجات المعتمدة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يهدف إطار الشهادة إلى ضمان أن الأسرة المتوفرة في السوق الهندي تلبي
          المتطلبات المعتمدة المتعلقة بـ:
        </p>

        <ul className={LIST_CLASS}>
          <li>القوة الهيكلية</li>
          <li>الاستقرار</li>
          <li>المتانة</li>
          <li>أداء السطح</li>
          <li>السلامة أثناء الاستخدام العادي</li>
          <li>الأداء في ظروف سوء الاستخدام المتوقعة</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد هذه المتطلبات في إنشاء معيار متسق للجودة وحماية المستهلك عبر
          مختلف تصاميم الأسرة ومواد التصنيع.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا شهادة BIS مهمة للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تؤثر الأسرة مباشرة على سلامة المستخدم لأنها مصممة لتحمل أحمالاً كبيرة
          لفترات طويلة. المنتجات المصممة بشكل سيئ أو التي لم تُختبر بشكل كافٍ
          يمكن أن تتعرض لفشل هيكلي، أو عدم استقرار، أو تشوه، أو تدهور مبكر.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يعالج IS 17635:2022 هذه المخاوف من خلال تحديد متطلبات أداء وسلامة
          موحدة يجب على المصنعين استيفاؤها قبل دخول منتجاتهم إلى السوق. يتضمن
          المعيار متطلبات تتعلق بالقوة، والاستقرار، والمتانة، والإتقان، وأداء
          السطح.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          بالنسبة للمصنعين، توفر شهادة BIS عدة مزايا:
        </p>

        <ul className={LIST_CLASS}>
          <li>التفويض القانوني لبيع المنتجات المشمولة في الهند</li>
          <li>إثبات الامتثال للمعايير الهندية</li>
          <li>تحسين قبول السوق</li>
          <li>تعزيز ثقة المستهلك</li>
          <li>تقليل مخاطر الإجراءات التنظيمية</li>
          <li>ميزة تنافسية في المشتريات المؤسسية والتجارية</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          نظرة عامة على IS 17635:2022 للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          أصدرت حكومة الهند أوامر مراقبة الجودة لعدة منتجات أثاث لضمان أن
          المنتجات الموضوعة في السوق تلبي متطلبات السلامة والجودة المقررة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          حيثما يكون IS 17635:2022 مشمولاً بموجب أمر مراقبة الجودة (QCO) للأثاث
          المعمول به، يُطلب من المصنعين الحصول على شهادة BIS بموجب المخطط الأول
          واستخدام العلامة القياسية (علامة ISI) وفقاً لمتطلبات ترخيص BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 هو المعيار الهندي الذي يحدد متطلبات الأداء والسلامة
          للأسرة المخصصة للبالغين في البيئات المنزلية وغير المنزلية. يضع المعيار
          متطلبات تساعد على ضمان بقاء الأسرة آمنة وعملية ومتينة طوال عمرها
          الخدمي المقصود.
        </p>

        <h3 className={SUB_HEADING_CLASS}>الغرض من IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          تم تطوير IS 17635:2022 لتوفير معيار شامل قائم على الأداء ينطبق على
          تصاميم الأسرة الحديثة المصنعة باستخدام مواد وطرق بناء مختلفة. يحل
          المعيار محل IS 7259 (الجزء 1):1988 السابق، الذي ركز بشكل أساسي على
          الأسرة الخشبية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يقيّم المعيار الأسرة دون تقييد الامتثال بمادة أو عملية تصنيع معينة.
          بدلاً من ذلك، يركز على كيفية أداء المنتج النهائي في ظروف الاختبار
          المقررة. يتيح هذا النهج تقييماً متسقاً للأسرة الخشبية والمعدنية
          والخشب الهندسي وغيرها من البنى.
        </p>

        <h3 className={SUB_HEADING_CLASS}>نطاق IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          وفقاً للمعيار، يغطي IS 17635:2022 المتطلبات المتعلقة بأداء وسلامة
          الأسرة المصممة للبالغين. ينطبق المعيار على المنتجات المخصصة للاستخدام
          في البيئات المنزلية وغير المنزلية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ينطبق المعيار على:
        </p>

        <ul className={LIST_CLASS}>
          <li>الأسرة المصنعة بالكامل</li>
          <li>الأسرة المجمعة</li>
          <li>الأسرة الجاهزة للتجميع بعد التركيب</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يضمن ذلك تقييم المنتجات الموردة في شكل مجمّع أو قابل للفك باستخدام
          نفس معايير الأداء والسلامة.
        </p>

        <h3 className={SUB_HEADING_CLASS}>أهداف المعيار</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          تشمل الأهداف الرئيسية لـ IS 17635:2022:
        </p>

        <ul className={LIST_CLASS}>
          <li>ضمان سلامة المستخدم</li>
          <li>التحقق من القوة الهيكلية</li>
          <li>تقييم استقرار المنتج</li>
          <li>تقييم المتانة تحت الاستخدام المتكرر</li>
          <li>وضع الحد الأدنى لمتطلبات الأداء</li>
          <li>تعزيز جودة المنتج المتسقة عبر المصنعين</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يتضمن المعيار أيضاً منهجيات اختبار تهدف إلى تقييم الأسرة في ظروف
          الاستخدام العادي وسيناريوهات سوء الاستخدام المتوقعة بشكل معقول.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المنتجات المشمولة بموجب IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ينطبق IS 17635:2022 على الأسرة المخصصة للبالغين في البيئات المنزلية
          وغير المنزلية. يركز المعيار على أداء وسلامة وقوة واستقرار ومتانة
          المنتج النهائي بدلاً من تقييد الامتثال بمادة أو طريقة تصنيع محددة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ينطبق المعيار على:
        </p>

        <ul className={LIST_CLASS}>
          <li>الأسرة المصنعة بالكامل</li>
          <li>الأسرة المجمعة</li>
          <li>الأسرة الجاهزة للتجميع (RTA) بعد التركيب</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين الذين يوردون أسرة في حالة قابلة للفك التأكد من أن
          المنتج المجمّع يتوافق مع جميع المتطلبات المعمول بها للمعيار.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>ملاحظة:</strong> لا يغطي هذا المعيار أسرة الماء، وأسرة الهواء،
          والأسرة القابلة للطي، والأسرة المزدوجة والأسرة للأشخاص ذوي الاحتياجات
          الخاصة، ولا الأسرة للرعاية الصحية والأغراض الطبية.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            تحقق أيضاً من منتجات الأثاث المشمولة بموجب شهادة BIS الإلزامية —
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
          المتطلبات الرئيسية بموجب IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          الهدف الأساسي من IS 17635:2022 هو ضمان بقاء الأسرة آمنة ومستقرة
          ومتينة ومناسبة للغرض المقصود في ظروف الاستخدام العادي. لتحقيق هذا
          الهدف، يضع المعيار عدة متطلبات أداء رئيسية.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات الاستقرار</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تُظهر الأسرة مقاومة كافية للانقلاب وعدم الاستقرار أثناء
          الاستخدام العادي. يقيّم اختبار الاستقرار ما إذا كان المنتج يبقى آمناً
          عند تعرضه لظروف التحميل المتوقعة وحركات المستخدم.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          تقلل السرير المستقر من مخاطر الحوادث وتحسّن سلامة المستخدم بشكل عام.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات القوة</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          تقيّم اختبارات القوة قدرة هيكل السرير على تحمل أحمال كبيرة دون فشل
          هيكلي.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          تفحص هذه التقييمات عادةً:
        </p>

        <ul className={LIST_CLASS}>
          <li>سلامة إطار السرير</li>
          <li>قوة المفاصل</li>
          <li>قدرة تحمل الحمل</li>
          <li>مقاومة التشوه المفرط</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الغرض هو ضمان أن المنتج يمكنه دعم المستخدمين المقصودين بأمان أثناء
          التشغيل اليومي.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات المتانة</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          يحاكي اختبار المتانة الاستخدام طويل الأمد من خلال دورات متكررة من
          التحميل والحركة.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          الهدف هو تحديد ما إذا:
        </p>

        <ul className={LIST_CLASS}>
          <li>تظل الوصلات الهيكلية آمنة</li>
          <li>تستمر المكونات في العمل بشكل صحيح</li>
          <li>يبقى أداء المنتج مقبولاً مع مرور الوقت</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد متطلبات المتانة على ضمان أن الأسرة المعتمدة تحافظ على
          موثوقيتها طوال عمرها الخدمي المتوقع.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات أداء السطح</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          يشير IS 17635:2022 إلى متطلبات أداء السطح المعمول بها على تشطيبات
          الأثاث.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          اعتماداً على البناء والمواد المستخدمة، قد تُقيَّم الأسطح لمقاومتها
          لـ:
        </p>

        <ul className={LIST_CLASS}>
          <li>الأضرار الميكانيكية</li>
          <li>الحرارة الرطبة</li>
          <li>الحرارة الجافة</li>
          <li>التلطيخ</li>
          <li>أداء الالتصاق</li>
          <li>التآكل والبلى</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          تساعد هذه المتطلبات في الحفاظ على الوظيفة والمظهر أثناء الاستخدام
          العادي.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلبات التصميم والإتقان</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          يحتوي المعيار أيضاً على متطلبات تتعلق بجودة التصميم والإتقان.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          من بين الاعتبارات الأخرى:
        </p>

        <ul className={LIST_CLASS}>
          <li>يجب ألا تُشكّل الحواف المتاحة مخاطر إصابة.</li>
          <li>يجب تجنب الحواف الحادة والبروز غير الآمن.</li>
          <li>يجب إغلاق الأقسام المجوفة بشكل صحيح حيثما يلزم.</li>
          <li>يجب تصميم المكونات المتحركة لتقليل مخاطر الإصابة.</li>
          <li>
            يجب أن يتوافق المنتج النهائي مع مواصفات التصميم والطراز المعلنة.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>متطلبات السلامة</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          السلامة مبدأ أساسي في جميع أنحاء IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          يتضمن المعيار متطلبات تهدف إلى تقليل المخاطر الناشئة عن:
        </p>

        <ul className={LIST_CLASS}>
          <li>الانهيار الهيكلي</li>
          <li>الحواف الحادة</li>
          <li>البروز غير الآمن</li>
          <li>فشل المكونات</li>
          <li>إجهادات الاستخدام المتكرر</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          يساعد الامتثال لهذه المتطلبات على ضمان بقاء الأسرة آمنة في الاستخدام
          العادي وظروف سوء الاستخدام المتوقعة بشكل معقول.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          هل شهادة BIS للأسرة إلزامية في الهند؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          نعم، بالنسبة لمنتجات الأثاث المشمولة بموجب أمر مراقبة الجودة المعمول
          به، تكون شهادة BIS إلزامية قبل أن يمكن تصنيع هذه المنتجات أو استيرادها
          أو بيعها أو توزيعها أو تخزينها أو عرضها للبيع في الهند.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب على المصنعين التحقق من أحدث حالة إشعار وتواريخ التنفيذ الصادرة عن
          حكومة الهند لأن المتطلبات التنظيمية قد تُحدَّث من وقت لآخر.
        </p>

        <h3 className={SUB_HEADING_CLASS}>متطلب استخدام علامة ISI</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          تعمل علامة ISI كدليل على أن المنتج يتوافق مع المعيار الهندي ذي
          الصلة ويُصنع بموجب ترخيص BIS ساري.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          لا يمكن وضع العلامة إلا بعد:
        </p>

        <ul className={LIST_CLASS}>
          <li>نجاح اختبار المنتج</li>
          <li>تقييم المصنع</li>
          <li>موافقة BIS على الطلب</li>
          <li>منح الترخيص</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          الاستخدام غير المصرح به لعلامة ISI محظور بموجب قانون BIS لعام 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          عملية شهادة BIS للأسرة (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          تتبع عملية شهادة BIS في الهند إجراءً منظمًا بموجب مخطط شهادة ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 1 – تحديد المعيار ونطاق المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          تأكيد القابلية للتطبيق بموجب IS 17635:2022 وتحديد متغيرات المنتج.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 2 – طلب BIS (عبر الإنترنت)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          تقديم الطلب عبر بوابة BIS Manak الإلكترونية مع:
        </p>
        <ul className={LIST_CLASS}>
          <li>تفاصيل المصنع</li>
          <li>عنوان المصنع</li>
          <li>وصف المنتج</li>
          <li>اسم العلامة التجارية</li>
          <li>تفاصيل مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 3 – رسوم شهادة BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          دفع الرسوم المعمول بها بما في ذلك:
        </p>
        <ul className={LIST_CLASS}>
          <li>رسوم الطلب</li>
          <li>رسوم المعالجة</li>
          <li>رسوم الاختبار</li>
          <li>رسوم التفتيش</li>
          <li>رسوم العلامة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 4 – اختبار المنتج
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يتم اختبار العينات في المختبرات المعترف بها من BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          يتضمن الاختبار
        </h4>
        <ul className={LIST_CLASS}>
          <li>اختبار الحمل الثابت</li>
          <li>اختبار المتانة</li>
          <li>اختبار الاستقرار</li>
          <li>اختبار قوة المفصل</li>
          <li>اختبار الانتهاء السطحي</li>
          <li>اختبار سلامة الحافة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 5 – تفتيش المصنع
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          يقوم ضابط BIS بتفتيش:
        </p>
        <ul className={LIST_CLASS}>
          <li>منشأة التصنيع</li>
          <li>التحكم في المواد الخام</li>
          <li>الاختبار أثناء العملية</li>
          <li>نظام ضمان الجودة</li>
          <li>معدات الاختبار</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 6 – منح ترخيص BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          بعد الامتثال، يصدر BIS:
        </p>
        <ul className={LIST_CLASS}>
          <li>شهادة BIS</li>
          <li>إذن علامة ISI</li>
          <li>رقم CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          الخطوة 7 – الامتثال بعد الشهادة
        </h3>
        <ul className={LIST_CLASS}>
          <li>تفتيشات المراقبة</li>
          <li>التجديد كل 1–2 سنة</li>
          <li>مراقبة الجودة المستمرة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          المستندات المطلوبة لشهادة BIS للأسرة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          إليك قائمة كاملة بمستندات شهادة BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          مستندات المصنع
        </h3>
        <ul className={LIST_CLASS}>
          <li>تسجيل/ترخيص المصنع</li>
          <li>مخطط عملية التصنيع</li>
          <li>قائمة الآلات</li>
          <li>قائمة معدات الاختبار</li>
          <li>شهادات المعايرة</li>
          <li>تخطيط المصنع</li>
          <li>خطة مراقبة الجودة</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات القانونية
        </h3>
        <ul className={LIST_CLASS}>
          <li>إثبات العنوان</li>
          <li>إثبات الهوية</li>
          <li>تفويض العلامة التجارية</li>
          <li>شهادة العلامة التجارية (إن وجدت)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          المستندات التقنية
        </h3>
        <ul className={LIST_CLASS}>
          <li>رسومات المنتج</li>
          <li>المواصفات</li>
          <li>فاتورة المواد</li>
          <li>تقارير الاختبار الداخلية</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          متطلبات الاختبار للأسرة (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          يجب أن تخضع الأسرة لاختبارات صارمة لضمان الامتثال.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          الاختبارات الإلزامية
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  البند
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  المتطلب
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  التصميم والإتقان
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الأبعاد
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار الاستقرار
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحمل الثابت العمودي على قاعدة السرير
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  الحمل الثابت العمودي على القضيب الجانبي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبارات الحمل الثابت الأفقي
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  اختبار التأثير العمودي
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          يجب إجراء الاختبار فقط في المختبرات المعتمدة من BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          التحديات الشائعة وكيفية تجنبها
        </h2>

        <ul className={LIST_CLASS}>
          <li>
            <strong>اختيار المعيار غير الصحيح</strong> – تحقق دائمًا من المعيار
            الهندي الصحيح.
          </li>
          <li>
            <strong>التوثيق الضعيف</strong> – المستندات المفقودة تسبب التأخير؛
            قم بإعدادها مسبقًا.
          </li>
          <li>
            <strong>فشل اختبارات المختبر</strong> – تأكد من المواد عالية الجودة
            والبناء.
          </li>
          <li>
            <strong>عدم جاهزية المصنع</strong> – تأكد من أن QMS ومعدات الاختبار
            محفوظة بشكل صحيح.
          </li>
          <li>
            <strong>عدم تطابق العلامة التجارية</strong> – يجب أن يطابق اسم
            العلامة التجارية طلب الترخيص.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          العقوبات على عدم الامتثال
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          بيع الأسرة بدون شهادة BIS يمكن أن يؤدي إلى:
        </p>

        <ul className={LIST_CLASS}>
          <li>غرامات ثقيلة</li>
          <li>مصادرة المنتج</li>
          <li>إغلاق الأعمال</li>
          <li>إجراء قانوني</li>
          <li>حظر السوق</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          لماذا تختارنا لشهادة BIS للأسرة؟
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          نقدم استشارات BIS شاملة، بما في ذلك:
        </p>

        <ul className={LIST_CLASS}>
          <li>رسم خرائط المعايير</li>
          <li>دعم التوثيق</li>
          <li>تنسيق الاختبار</li>
          <li>تقديم الطلب</li>
          <li>معالجة تفتيش المصنع</li>
          <li>التواصل مع BIS</li>
          <li>إصدار الترخيص</li>
          <li>دعم التجديد والمراقبة</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الخلاصة
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          شهادة BIS للأسرة بموجب IS 17635:2022 هي متطلب قانوني إلزامي يضمن
          السلامة والجودة والمتانة. الحصول على ترخيص BIS للأسرة يحمي المستهلكين،
          ويعزز قيمة العلامة التجارية، و يتيح الوصول القانوني إلى السوق في جميع
          أنحاء الهند. مع الدعم الخبير، تصبح عملية الشهادة سلسة وفعالة.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          الأسئلة الشائعة – شهادة BIS للأسرة
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. هل شهادة BIS إلزامية للأسرة في الهند؟</strong>
              <br />
              نعم، بموجب IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ما هي صلاحية شهادة BIS؟</strong>
              <br />
              1–2 سنة، قابلة للتجديد.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. هل يمكن للمصنعين الأجانب التقديم؟</strong>
              <br />
              نعم، بموجب FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. هل يمكن التقدم بطلب شهادة BIS عبر الإنترنت؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. هل علامة ISI إلزامية على الأسرة؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. كم تستغرق العملية؟</strong>
              <br />
              30–45 يومًا.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. هل الأسرة الخشبية والمعدنية مغطاة كلاهما؟</strong>
              <br />
              نعم، إذا كانت متوافقة مع IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. هل تفتيش المصنع إلزامي؟</strong>
              <br />
              نعم.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. هل يمكن للتجار التقدم بطلب BIS؟</strong>
              <br />
              فقط أصحاب العلامات التجارية مع السيطرة على التصنيع.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="شهادة BIS للأسرة - IS 17635:2022 PDF"
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
              شهادة علامة ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ترخيص BIS FMCS
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للتصنيع الأجنبي
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
