import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ManyUsersAlsoReadThai from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadThai";
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
import FooterThai from "@/components/manual/Footer/FooterThai";
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

const BISCertificateForBedsThai = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default BISCertificateForBedsThai;

const MetaTags = () => {
  const title = "ใบรับรอง BIS สำหรับเตียง | IS 17635:2022 ใบอนุญาต BIS";
  const ogTitle = "การรับรอง BIS สำหรับเตียง – คู่มือ IS 17635:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับเตียง | IS 17635:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเตียงตาม IS 17635:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับเตียงตาม IS 17635:2022 รู้จักกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเตียงตาม IS 17635:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเตียง, ใบอนุญาต BIS สำหรับเตียง, IS 17635:2022, การรับรอง BIS สำหรับเตียง";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/teng-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, หัวหน้าฝ่ายปฏิบัติการที่ Sun Certification India";

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
              "https://bis-certifications.com/blogs/isi-products/teng-is-17635",
          },
          headline: "ใบรับรอง BIS สำหรับเตียง",
          description:
            "การรับรอง BIS สำหรับเตียงในอินเดียเป็นการรับประกันคุณภาพที่บังคับ โดยหลักตาม IS 17635:2022 เพื่อให้มั่นใจในมาตรฐานความปลอดภัย ความทนทาน และประสิทธิภาพ",
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
          name: "ใบรับรอง BIS สำหรับเตียง",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "การรับรอง BIS สำหรับเตียงในอินเดียเป็นการรับประกันคุณภาพที่บังคับ โดยหลักตาม IS 17635:2022 เพื่อให้มั่นใจในมาตรฐานความปลอดภัย ความทนทาน และประสิทธิภาพ",
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
              name: "การรับรอง BIS เป็นข้อบังคับสำหรับเตียงในอินเดียหรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่ ตาม IS 17635:2022",
              },
            },
            {
              "@type": "Question",
              name: "ใบรับรอง BIS มีอายุเท่าไร?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 ปี ต่ออายุได้",
              },
            },
            {
              "@type": "Question",
              name: "ผู้ผลิตต่างประเทศสามารถสมัครได้หรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่ ภายใต้ FMCS",
              },
            },
            {
              "@type": "Question",
              name: "สามารถสมัครใบรับรอง BIS ออนไลน์ได้หรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่",
              },
            },
            {
              "@type": "Question",
              name: "เครื่องหมาย ISI เป็นข้อบังคับบนเตียงหรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่",
              },
            },
            {
              "@type": "Question",
              name: "กระบวนการใช้เวลานานเท่าไร?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 วัน",
              },
            },
            {
              "@type": "Question",
              name: "เตียงไม้และเตียงโลหะครอบคลุมทั้งสองอย่างหรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่ ถ้าเป็นไปตาม IS 17635:2022",
              },
            },
            {
              "@type": "Question",
              name: "การตรวจสอบโรงงานเป็นข้อบังคับหรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ใช่",
              },
            },
            {
              "@type": "Question",
              name: "พ่อค้าสามารถสมัคร BIS ได้หรือไม่?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "เฉพาะเจ้าของแบรนด์ที่มีการควบคุมการผลิตเท่านั้น",
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
                    <Link to="/">หน้าแรก</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">บล็อกล่าสุด</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    ใบรับรอง BIS สำหรับเตียง – IS 17635:2022
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
        <ServicesRightSideContentThai />
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
          ใบรับรอง BIS สำหรับเตียง – คู่มือฉบับสมบูรณ์ IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="ใบอนุญาต BIS สำหรับเตียง"
            alt="ใบรับรอง BIS สำหรับเตียง - การรับรอง BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเตียงเป็นข้อกำหนดบังคับในอินเดียสำหรับผู้ผลิตและ
          ผู้นำเข้าเตียงที่ใช้สำหรับการใช้งานในบ้านและเชิงพาณิชย์ ตามมาตรฐาน
          อินเดียล่าสุด IS 17635:2022 – เตียง (ข้อกำหนดด้านความปลอดภัย)
          เตียงทั้งหมดต้องเป็นไปตามมาตรฐานความปลอดภัย ความทนทาน โครงสร้าง
          และประสิทธิภาพที่เข้มงวดก่อนขายในตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงเป็นผลิตภัณฑ์เฟอร์นิเจอร์ที่จำเป็นที่ใช้ทุกวันในบ้าน โรงแรม
          โรงพยาบาล หอพัก ที่พัก PG และสถานประกอบการ ความอ่อนแอของโครงสร้าง
          ขอบคม ความล้มเหลวของวัสดุ
          หรือความสามารถในการรับน้ำหนักต่ำอาจส่งผลให้เกิดการบาดเจ็บร้ายแรง
          เพื่อป้องกันความเสี่ยงดังกล่าว สำนักงานมาตรฐานอินเดีย (BIS)
          กำหนดให้มี{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            การรับรอง BIS
          </a>{" "}
          สำหรับเตียง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบายทุกอย่างเกี่ยวกับใบอนุญาต BIS สำหรับเตียง
          รวมถึงมาตรฐานที่ใช้ กระบวนการรับรอง ข้อกำหนดการทดสอบ เอกสาร
          ค่าธรรมเนียม ระยะเวลา โทษ และประโยชน์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>


        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ไฮไลท์สำคัญของการรับรอง BIS สำหรับเตียง
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  รายการ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  รายละเอียด
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["ผลิตภัณฑ์", "เตียง"],
                ["มาตรฐานอินเดีย", "IS 17635:2022"],
                ["ชื่อมาตรฐาน", "เตียง – ข้อกำหนด"],
                ["โครงการรับรอง", "การรับรองเครื่องหมาย ISI ของ BIS"],
                ["หน่วยงานกำกับดูแล", "สำนักงานมาตรฐานอินเดีย (BIS)"],
                ["เครื่องหมายที่ใช้", "เครื่องหมาย ISI"],
                [
                  "ผู้สมัครที่มีสิทธิ์",
                  "ผู้ผลิตอินเดียและผู้ผลิตต่างประเทศ",
                ],
                [
                  "ข้อกำหนดการปฏิบัติตาม",
                  "บังคับภายใต้ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง (Quality Control Order)",
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
                    {particular === "โครงการรับรอง" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        การรับรองเครื่องหมาย ISI ของ BIS
                      </a>
                    ) : particular === "ข้อกำหนดการปฏิบัติตาม" ? (
                      <>
                        บังคับภายใต้{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO เฟอร์นิเจอร์ (Quality Control Order)</strong>
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
          การรับรอง BIS สำหรับเตียงคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS สำหรับเตียงเป็นกระบวนการประเมินการปฏิบัติตามที่ผู้ผลิต
          พิสูจน์ว่าผลิตภัณฑ์ของตนปฏิบัติตามข้อกำหนดที่ระบุใน IS 17635:2022
          เมื่อการปฏิบัติตามได้รับการยืนยันผ่านการทดสอบ การประเมินโรงงาน
          และการตรวจสอบของหน่วยงานกำกับดูแล ผู้ผลิตจะได้รับใบอนุญาต BIS
          และสามารถติดเครื่องหมาย ISI บนผลิตภัณฑ์ที่ได้รับการรับรอง
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          กรอบการรับรองมีวัตถุประสงค์เพื่อให้มั่นใจว่าเตียงที่มีจำหน่ายในตลาดอินเดีย
          เป็นไปตามข้อกำหนดที่กำหนดไว้เกี่ยวกับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>ความแข็งแรงของโครงสร้าง</li>
          <li>ความเสถียร</li>
          <li>ความทนทาน</li>
          <li>ประสิทธิภาพของพื้นผิว</li>
          <li>ความปลอดภัยในการใช้งานปกติ</li>
          <li>ประสิทธิภาพภายใต้สภาวะการใช้งานผิดปกติที่คาดการณ์ได้</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ข้อกำหนดเหล่านี้ช่วยสร้างเกณฑ์มาตรฐานที่สม่ำเสมอด้านคุณภาพและการคุ้มครองผู้บริโภค
          สำหรับการออกแบบเตียงและวัสดุการผลิตที่หลากหลาย
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงสำคัญสำหรับเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงมีผลโดยตรงต่อความปลอดภัยของผู้ใช้ เนื่องจากออกแบบมาเพื่อรองรับ
          น้ำหนักอย่างมากเป็นระยะเวลานาน ผลิตภัณฑ์ที่ออกแบบไม่ดีหรือทดสอบไม่เพียงพอ
          อาจเกิดความล้มเหลวของโครงสร้าง ความไม่เสถียร การบิดเบี้ยว
          หรือการเสื่อมสภาพก่อนกำหนด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 แก้ไขข้อกังวลเหล่านี้โดยกำหนดข้อกำหนดด้านประสิทธิภาพและความปลอดภัย
          ที่เป็นมาตรฐานซึ่งผู้ผลิตต้องปฏิบัติตามก่อนที่ผลิตภัณฑ์จะเข้าสู่ตลาด
          มาตรฐานนี้รวมข้อกำหนดเกี่ยวกับความแข็งแรง ความเสถียร ความทนทาน
          คุณภาพงาน และประสิทธิภาพของพื้นผิว
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          สำหรับผู้ผลิต การรับรอง BIS มีข้อได้เปรียบหลายประการ:
        </p>

        <ul className={LIST_CLASS}>
          <li>การอนุญาตตามกฎหมายในการขายผลิตภัณฑ์ที่ครอบคลุมในอินเดีย</li>
          <li>การแสดงว่าปฏิบัติตามมาตรฐานอินเดีย</li>
          <li>การยอมรับในตลาดที่ดีขึ้น</li>
          <li>ความมั่นใจของผู้บริโภคที่เพิ่มขึ้น</li>
          <li>ลดความเสี่ยงจากการดำเนินการทางกฎหมาย</li>
          <li>ข้อได้เปรียบในการจัดซื้อของหน่วยงานและภาคธุรกิจ</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ภาพรวมของ IS 17635:2022 สำหรับเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          รัฐบาลอินเดียได้ออกคำสั่งควบคุมคุณภาพ (QCO) สำหรับผลิตภัณฑ์เฟอร์นิเจอร์หลายประเภท
          เพื่อให้มั่นใจว่าผลิตภัณฑ์ที่วางจำหน่ายในตลาดเป็นไปตามข้อกำหนดด้านความปลอดภัยและคุณภาพที่กำหนด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เมื่อ IS 17635:2022 อยู่ภายใต้ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง
          ผู้ผลิตต้องได้รับการรับรอง BIS ภายใต้ Scheme-I และใช้เครื่องหมายมาตรฐาน
          (เครื่องหมาย ISI) ตามข้อกำหนดใบอนุญาต BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 เป็นมาตรฐานอินเดียที่กำหนดข้อกำหนดด้านประสิทธิภาพและความปลอดภัย
          สำหรับเตียงที่ใช้สำหรับผู้ใหญ่ในสภาพแวดล้อมที่อยู่อาศัยและไม่ใช่ที่อยู่อาศัย
          มาตรฐานนี้กำหนดข้อกำหนดเพื่อให้มั่นใจว่าเตียงยังคงปลอดภัย ใช้งานได้
          และทนทานตลอดอายุการใช้งานที่ตั้งใจไว้
        </p>

        <h3 className={SUB_HEADING_CLASS}>วัตถุประสงค์ของ IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 ได้รับการพัฒนาเพื่อให้มาตรฐานด้านประสิทธิภาพที่ครอบคลุม
          ซึ่งใช้ได้กับการออกแบบเตียงสมัยใหม่ที่ผลิตด้วยวัสดุและวิธีการก่อสร้างต่างๆ
          มาตรฐานนี้แทนที่ IS 7259 (Part 1):1988 ก่อนหน้า
          ซึ่งมุ่งเน้นไปที่เตียงไม้เป็นหลัก
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้ประเมินเตียงโดยไม่จำกัดการปฏิบัติตามให้กับวัสดุหรือกระบวนการผลิตเฉพาะ
          แต่มุ่งเน้นที่ประสิทธิภาพของผลิตภัณฑ์สำเร็จรูปภายใต้เงื่อนไขการทดสอบที่กำหนด
          วิธีการนี้ช่วยให้สามารถประเมินเตียงไม้ โลหะ ไม้ engineered
          และการก่อสร้างอื่นๆ ได้อย่างสม่ำเสมอ
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขอบเขตของ IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          ตามมาตรฐาน IS 17635:2022 ครอบคลุมข้อกำหนดเกี่ยวกับประสิทธิภาพและความปลอดภัย
          ของเตียงที่ออกแบบสำหรับผู้ใหญ่ มาตรฐานนี้ใช้กับผลิตภัณฑ์ที่ใช้ทั้งในที่อยู่อาศัย
          และไม่ใช่ที่อยู่อาศัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ใช้กับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>เตียงที่ผลิตเสร็จสมบูรณ์</li>
          <li>เตียงที่ประกอบในสถานที่</li>
          <li>เตียงพร้อมประกอบหลังจากประกอบแล้ว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งนี้รับประกันว่าผลิตภัณฑ์ที่จัดหาในรูปแบบประกอบแล้วหรือแบบ knock-down
          จะได้รับการประเมินด้วยเกณฑ์ประสิทธิภาพและความปลอดภัยเดียวกัน
        </p>

        <h3 className={SUB_HEADING_CLASS}>วัตถุประสงค์ของมาตรฐาน</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          วัตถุประสงค์หลักของ IS 17635:2022 ได้แก่:
        </p>

        <ul className={LIST_CLASS}>
          <li>รับประกันความปลอดภัยของผู้ใช้</li>
          <li>ตรวจสอบความแข็งแรงของโครงสร้าง</li>
          <li>ประเมินความเสถียรของผลิตภัณฑ์</li>
          <li>ประเมินความทนทานภายใต้การใช้งานซ้ำ</li>
          <li>กำหนดข้อกำหนดประสิทธิภาพขั้นต่ำ</li>
          <li>ส่งเสริมคุณภาพผลิตภัณฑ์ที่สม่ำเสมอในหมู่ผู้ผลิต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้ยังรวมวิธีการทดสอบที่มีวัตถุประสงค์เพื่อประเมินเตียงภายใต้สภาวะการใช้งานปกติ
          และสถานการณ์การใช้งานผิดปกติที่คาดการณ์ได้อย่างสมเหตุสมผล
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ผลิตภัณฑ์ที่ครอบคลุมภายใต้ IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 ใช้กับเตียงที่ใช้สำหรับผู้ใหญ่ทั้งในสภาพแวดล้อมที่อยู่อาศัย
          และไม่ใช่ที่อยู่อาศัย มาตรฐานนี้มุ่งเน้นที่ประสิทธิภาพ ความปลอดภัย
          ความแข็งแรง ความเสถียร และความทนทานของผลิตภัณฑ์สำเร็จรูป
          มากกว่าการจำกัดการปฏิบัติตามให้กับวัสดุหรือวิธีการผลิตเฉพาะ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ใช้กับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>เตียงที่ผลิตเสร็จสมบูรณ์</li>
          <li>เตียงที่ประกอบในสถานที่</li>
          <li>เตียงพร้อมประกอบ (RTA) หลังจากประกอบแล้ว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่จัดหาเตียงในรูปแบบ knock-down ต้องแน่ใจว่าผลิตภัณฑ์ที่ประกอบแล้ว
          ปฏิบัติตามข้อกำหนดทั้งหมดของมาตรฐาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>หมายเหตุ:</strong> มาตรฐานนี้ไม่ครอบคลุมเตียงน้ำ เตียงลม
          เตียงพับได้ เตียงสองชั้น และเตียงสำหรับผู้ที่มีความต้องการพิเศษ
          รวมถึงเตียงสำหรับการดูแลสุขภาพและทางการแพทย์
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            ตรวจสอบเพิ่มเติมผลิตภัณฑ์เฟอร์นิเจอร์ที่ครอบคลุมภายใต้การรับรอง BIS บังคับ —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>การรับรอง BIS สำหรับเฟอร์นิเจอร์</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดหลักภายใต้ IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์หลักของ IS 17635:2022 คือเพื่อให้มั่นใจว่าเตียงยังคงปลอดภัย
          เสถียร ทนทาน และเหมาะสมกับวัตถุประสงค์การใช้งานตลอดสภาวะการใช้งานปกติ
          เพื่อบรรลุวัตถุประสงค์นี้ มาตรฐานกำหนดข้อกำหนดด้านประสิทธิภาพหลายประการ
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความเสถียร</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงต้องแสดงให้เห็นถึงความต้านทานที่เพียงพอต่อการพลิกคว่ำและความไม่เสถียร
          ในการใช้งานปกติ การทดสอบความเสถียรประเมินว่าผลิตภัณฑ์ยังคงมั่นคงเมื่อได้รับ
          ภาระโหลดที่คาดหวังและการเคลื่อนไหวของผู้ใช้
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงที่เสถียรช่วยลดความเสี่ยงจากอุบัติเหตุและเพิ่มความปลอดภัยโดยรวมของผู้ใช้
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความแข็งแรง</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบความแข็งแรงประเมินความสามารถของโครงสร้างเตียงในการรับน้ำหนัก
          อย่างมากโดยไม่เกิดความล้มเหลวของโครงสร้าง
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          การประเมินเหล่านี้มักตรวจสอบ:
        </p>

        <ul className={LIST_CLASS}>
          <li>ความสมบูรณ์ของโครงเตียง</li>
          <li>ความแข็งแรงของข้อต่อ</li>
          <li>ความสามารถในการรับน้ำหนัก</li>
          <li>ความต้านทานต่อการบิดเบี้ยวมากเกินไป</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์คือเพื่อให้มั่นใจว่าผลิตภัณฑ์สามารถรองรับผู้ใช้ที่ตั้งใจไว้
          ได้อย่างปลอดภัยในการใช้งานประจำวัน
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความทนทาน</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบความทนทานจำลองการใช้งานระยะยาวผ่านวงจรการรับน้ำหนักและการเคลื่อนไหวซ้ำๆ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          วัตถุประสงค์คือเพื่อพิจารณาว่า:
        </p>

        <ul className={LIST_CLASS}>
          <li>การเชื่อมต่อโครงสร้างยังคงมั่นคง</li>
          <li>ส่วนประกอบยังคงทำงานได้อย่างถูกต้อง</li>
          <li>ประสิทธิภาพของผลิตภัณฑ์ยังคงยอมรับได้เมื่อเวลาผ่านไป</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ข้อกำหนดด้านความทนทานช่วยให้มั่นใจว่าเตียงที่ได้รับการรับรองยังคงเชื่อถือได้
          ตลอดอายุการใช้งานที่คาดหวัง
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านประสิทธิภาพของพื้นผิว</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 อ้างอิงข้อกำหนดด้านประสิทธิภาพของพื้นผิวที่ใช้กับงานตกแต่งเฟอร์นิเจอร์
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ขึ้นอยู่กับการก่อสร้างและวัสดุที่ใช้ พื้นผิวอาจได้รับการประเมินความต้านทานต่อ:
        </p>

        <ul className={LIST_CLASS}>
          <li>ความเสียหายทางกล</li>
          <li>ความร้อนชื้น</li>
          <li>ความร้อนแห้ง</li>
          <li>คราบ</li>
          <li>ประสิทธิภาพการยึดเกาะ</li>
          <li>การขัดสีและการสึกหรอ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ข้อกำหนดเหล่านี้ช่วยรักษาทั้งการทำงานและรูปลักษณ์ในการใช้งานปกติ
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านการออกแบบและคุณภาพงาน</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานยังมีข้อกำหนดเกี่ยวกับคุณภาพการออกแบบและคุณภาพงาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ในข้อพิจารณาอื่นๆ:
        </p>

        <ul className={LIST_CLASS}>
          <li>ขอบที่เข้าถึงได้ไม่ควรก่อให้เกิดอันตรายจากการบาดเจ็บ</li>
          <li>ควรหลีกเลี่ยงขอบคมและส่วนที่ยื่นออกมาที่ไม่ปลอดภัย</li>
          <li>ส่วนกลวงควรปิดอย่างเหมาะสมเมื่อจำเป็น</li>
          <li>ส่วนประกอบที่เคลื่อนไหวควรออกแบบเพื่อลดความเสี่ยงจากการบาดเจ็บ</li>
          <li>
            ผลิตภัณฑ์สำเร็จรูปควรสอดคล้องกับข้อกำหนดการออกแบบและรุ่นที่ประกาศ
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความปลอดภัย</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          ความปลอดภัยเป็นหลักการหลักตลอด IS 17635:2022
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานรวมข้อกำหนดที่มีวัตถุประสงค์เพื่อลดความเสี่ยงที่เกิดจาก:
        </p>

        <ul className={LIST_CLASS}>
          <li>การพังทลายของโครงสร้าง</li>
          <li>ขอบคม</li>
          <li>ส่วนที่ยื่นออกมาที่ไม่ปลอดภัย</li>
          <li>ความล้มเหลวของส่วนประกอบ</li>
          <li>ความเครียดจากการใช้งานซ้ำ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การปฏิบัติตามข้อกำหนดเหล่านี้ช่วยให้มั่นใจว่าเตียงยังคงปลอดภัยภายใต้การใช้งานปกติ
          และสภาวะการใช้งานผิดปกติที่คาดการณ์ได้อย่างสมเหตุสมผล
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเตียงเป็นข้อบังคับในอินเดียหรือไม่?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใช่ สำหรับผลิตภัณฑ์เฟอร์นิเจอร์ที่ครอบคลุมภายใต้ QCO ที่เกี่ยวข้อง
          การรับรอง BIS เป็นข้อบังคับก่อนที่ผลิตภัณฑ์ดังกล่าวจะสามารถผลิต นำเข้า
          ขาย จัดจำหน่าย จัดเก็บ หรือเสนอขายในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตต้องตรวจสอบสถานะประกาศล่าสุดและวันที่บังคับใช้ที่ออกโดยรัฐบาลอินเดีย
          เนื่องจากข้อกำหนดด้านกฎระเบียบอาจมีการอัปเดตเป็นครั้งคราว
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดในการใช้เครื่องหมาย ISI</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมาย ISI เป็นหลักฐานว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง
          และผลิตภายใต้ใบอนุญาต BIS ที่ถูกต้อง
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมายสามารถติดได้หลังจาก:
        </p>

        <ul className={LIST_CLASS}>
          <li>การทดสอบผลิตภัณฑ์สำเร็จ</li>
          <li>การประเมินโรงงาน</li>
          <li>การอนุมัติใบสมัครโดย BIS</li>
          <li>การให้ใบอนุญาต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การใช้เครื่องหมาย ISI โดยไม่ได้รับอนุญาตเป็นสิ่งต้องห้ามภายใต้พระราชบัญญัติ BIS 2016
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>


        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเตียง (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการรับรอง BIS ในอินเดียปฏิบัติตามขั้นตอนที่มีโครงสร้างภายใต้
          โครงการรับรอง ISI
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุมาตรฐานและขอบเขตผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ยืนยันการบังคับใช้ภายใต้ IS 17635:2022 และกำหนดรูปแบบผลิตภัณฑ์
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – การสมัคร BIS (ออนไลน์)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ส่งใบสมัครผ่านพอร์ทัลออนไลน์ BIS Manak พร้อม:
        </p>
        <ul className={LIST_CLASS}>
          <li>รายละเอียดผู้ผลิต</li>
          <li>ที่อยู่โรงงาน</li>
          <li>คำอธิบายผลิตภัณฑ์</li>
          <li>ชื่อแบรนด์</li>
          <li>รายละเอียดการควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – ค่าธรรมเนียมการรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          จ่ายค่าธรรมเนียมที่ใช้รวมถึง:
        </p>
        <ul className={LIST_CLASS}>
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบ</li>
          <li>ค่าธรรมเนียมการตรวจสอบ</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การทดสอบผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างจะถูกทดสอบที่ห้องปฏิบัติการที่ BIS รับรอง
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          การทดสอบรวมถึง
        </h4>
        <ul className={LIST_CLASS}>
          <li>การทดสอบน้ำหนักคงที่</li>
          <li>การทดสอบความทนทาน</li>
          <li>การทดสอบความเสถียร</li>
          <li>การทดสอบความแข็งแรงของข้อต่อ</li>
          <li>การทดสอบผิวหน้า</li>
          <li>การทดสอบความปลอดภัยของขอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className={LIST_CLASS}>
          <li>สถานที่ผลิต</li>
          <li>การควบคุมวัตถุดิบ</li>
          <li>การทดสอบระหว่างกระบวนการ</li>
          <li>ระบบการรับประกันคุณภาพ</li>
          <li>อุปกรณ์ทดสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การให้ใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากปฏิบัติตาม BIS จะออก:
        </p>
        <ul className={LIST_CLASS}>
          <li>ใบรับรอง BIS</li>
          <li>การอนุญาตเครื่องหมาย ISI</li>
          <li>หมายเลข CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – การปฏิบัติตามหลังการรับรอง
        </h3>
        <ul className={LIST_CLASS}>
          <li>การตรวจสอบเฝ้าระวัง</li>
          <li>การต่ออายุทุก 1–2 ปี</li>
          <li>การควบคุมคุณภาพอย่างต่อเนื่อง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          นี่คือรายการเอกสารใบรับรอง BIS ที่สมบูรณ์:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className={LIST_CLASS}>
          <li>การลงทะเบียน/ใบอนุญาตโรงงาน</li>
          <li>แผนผังกระบวนการผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบ</li>
          <li>ใบรับรองการสอบเทียบ</li>
          <li>ผังโรงงาน</li>
          <li>แผนการควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className={LIST_CLASS}>
          <li>หลักฐานที่อยู่</li>
          <li>หลักฐานตัวตน</li>
          <li>การอนุญาตแบรนด์</li>
          <li>ใบรับรองเครื่องหมายการค้า (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className={LIST_CLASS}>
          <li>แบบวาดผลิตภัณฑ์</li>
          <li>ข้อกำหนด</li>
          <li>รายการวัสดุ</li>
          <li>รายงานการทดสอบภายใน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับเตียง (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงต้องผ่านการทดสอบอย่างเข้มงวดเพื่อให้แน่ใจว่าปฏิบัติตาม
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          การทดสอบบังคับ
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  ข้อ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  ข้อกำหนด
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การออกแบบและการทำงาน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความเสถียร
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  น้ำหนักคงที่แนวตั้งบนฐานเตียง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  น้ำหนักคงที่แนวตั้งบนราวข้าง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบน้ำหนักคงที่แนวนอน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบแรงกระแทกแนวตั้ง
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบต้องดำเนินการที่ห้องปฏิบัติการที่ BIS อนุมัติเท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <ul className={LIST_CLASS}>
          <li>
            <strong>การเลือกมาตรฐานที่ไม่ถูกต้อง</strong> –
            ตรวจสอบมาตรฐานอินเดียที่ถูกต้องเสมอ
          </li>
          <li>
            <strong>เอกสารไม่ดี</strong> – เอกสารที่ขาดหายไปทำให้เกิดความล่าช้า;
            เตรียมไว้ล่วงหน้า
          </li>
          <li>
            <strong>การทดสอบในห้องปฏิบัติการล้มเหลว</strong> –
            รับประกันวัสดุและการก่อสร้างคุณภาพสูง
          </li>
          <li>
            <strong>โรงงานไม่พร้อม</strong> – รับประกันว่า QMS
            และอุปกรณ์ทดสอบได้รับการบำรุงรักษาอย่างเหมาะสม
          </li>
          <li>
            <strong>เครื่องหมายการค้าไม่ตรงกัน</strong> –
            ชื่อแบรนด์ต้องตรงกับใบสมัครใบอนุญาต
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายเตียงโดยไม่มีการรับรอง BIS อาจนำไปสู่:
        </p>

        <ul className={LIST_CLASS}>
          <li>ค่าปรับหนัก</li>
          <li>การยึดผลิตภัณฑ์</li>
          <li>การปิดธุรกิจ</li>
          <li>การดำเนินการทางกฎหมาย</li>
          <li>การห้ามตลาด</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราสำหรับการรับรอง BIS ของเตียง?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรามีการให้คำปรึกษา BIS แบบครบวงจร รวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>การทำแผนที่มาตรฐาน</li>
          <li>การสนับสนุนเอกสาร</li>
          <li>การประสานงานการทดสอบ</li>
          <li>การยื่นใบสมัคร</li>
          <li>การจัดการการตรวจสอบโรงงาน</li>
          <li>การประสานงาน BIS</li>
          <li>การออกใบอนุญาต</li>
          <li>การสนับสนุนการต่ออายุและการเฝ้าระวัง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเตียงภายใต้ IS 17635:2022
          เป็นข้อกำหนดทางกฎหมายบังคับที่รับประกันความปลอดภัย คุณภาพ และความทนทาน
          การได้รับใบอนุญาต BIS สำหรับเตียงปกป้องผู้บริโภค
          เสริมสร้างคุณค่าของแบรนด์
          และเปิดโอกาสการเข้าถึงตลาดตามกฎหมายทั่วอินเดีย
          ด้วยการสนับสนุนจากผู้เชี่ยวชาญ
          กระบวนการรับรองจะราบรื่นและมีประสิทธิภาพ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – ใบรับรอง BIS สำหรับเตียง
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS เป็นข้อบังคับสำหรับเตียงในอินเดียหรือไม่?
              </strong>
              <br />
              ใช่ ตาม IS 17635:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ใบรับรอง BIS มีอายุเท่าไร?</strong>
              <br />
              1–2 ปี ต่ออายุได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ผู้ผลิตต่างประเทศสามารถสมัครได้หรือไม่?</strong>
              <br />
              ใช่ ภายใต้ FMCS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. สามารถสมัครใบรับรอง BIS ออนไลน์ได้หรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. เครื่องหมาย ISI เป็นข้อบังคับบนเตียงหรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. กระบวนการใช้เวลานานเท่าไร?</strong>
              <br />
              30–45 วัน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. เตียงไม้และเตียงโลหะครอบคลุมทั้งสองอย่างหรือไม่?
              </strong>
              <br />
              ใช่ ถ้าเป็นไปตาม IS 17635:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. การตรวจสอบโรงงานเป็นข้อบังคับหรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. พ่อค้าสามารถสมัคร BIS ได้หรือไม่?</strong>
              <br />
              เฉพาะเจ้าของแบรนด์ที่มีการควบคุมการผลิตเท่านั้น
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับเตียง - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทรัพยากรที่เกี่ยวข้อง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ใบรับรองเครื่องหมาย ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">ใบอนุญาต BIS FMCS</a>
          </li>
        </ul>


        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={1} />
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
              บริการของเรา
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                ที่ปรึกษาใบรับรองที่ดีที่สุดของอินเดีย
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
                alt="โลโก้ BIS"
                title="โลโก้ BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับการผลิตต่างประเทศ
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="โลโก้ CDSCO"
                title="โลโก้ CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองการลงทะเบียน CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="โลโก้ BISCRS"
                title="โลโก้ BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การลงทะเบียน BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="การจัดการขยะพลาสติก"
                title="การจัดการขยะพลาสติก"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การจัดการขยะพลาสติก
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="โลโก้ใบรับรอง EPR"
                title="โลโก้ใบรับรอง EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองใบรับรอง EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="โลโก้ LMPC"
                title="โลโก้ LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองใบรับรอง LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="โลโก้ BIS"
                title="โลโก้ BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ใบรับรองการลงทะเบียน BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="โลโก้เครื่องหมาย ISI"
                title="โลโก้เครื่องหมาย ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
