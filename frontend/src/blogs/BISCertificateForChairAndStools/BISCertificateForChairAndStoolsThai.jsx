import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ManyUsersAlsoReadThai from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
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

const BISCertificateForChairAndStoolsThai = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default BISCertificateForChairAndStoolsThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป | IS 17632:2022";
  const ogTitle =
    "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป | IS 17632:2022";
  const twitterTitle =
    "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป | IS 17632:2022";
  const metaDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปภายใต้ IS 17632:2022 เข้าใจข้อกำหนดเครื่องหมาย ISI การทดสอบ กระบวนการรับรอง เอกสาร ประโยชน์ และคำถามที่พบบ่อย";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป, IS 17632:2022, เครื่องหมาย ISI เก้าอี้และม้านั่ง, ใบอนุญาต BIS เก้าอี้ม้านั่ง, การรับรอง BIS เฟอร์นิเจอร์";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632";
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
                    ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป (IS 17632:2022)
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
          ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป (IS 17632:2022) –
          คู่มือการรับรองเครื่องหมาย ISI ฉบับสมบูรณ์
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="ใบอนุญาต BIS สำหรับเก้าอี้และม้านั่งทั่วไป"
            alt="ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป - คู่มือเครื่องหมาย ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้และม้านั่งทั่วไปเป็นหนึ่งในผลิตภัณฑ์เฟอร์นิเจอร์ที่ใช้กันอย่าง
          แพร่หลายที่สุดในบ้าน สำนักงาน สถาบันการศึกษา สถานพยาบาล ร้านค้าปลีก
          พื้นที่สาธารณะ และสภาพแวดล้อมเชิงพาณิชย์ เนื่องจากผลิตภัณฑ์ที่นั่งเหล่านี้
          ถูกใช้งานอย่างสม่ำเสมอและเป็นเวลานาน จึงต้องเป็นไปตามข้อกำหนดด้านคุณภาพ
          ความปลอดภัย ความแข็งแรง และความทนทานเพื่อให้มั่นใจในประสิทธิภาพที่เชื่อถือได้
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยการเน้นความสำคัญของคุณภาพผลิตภัณฑ์และความปลอดภัยของผู้บริโภคที่เพิ่มขึ้น
          การปฏิบัติตามมาตรฐานอินเดียจึงกลายเป็นข้อกำหนดสำคัญสำหรับผู้ผลิตและผู้นำเข้า
          เฟอร์นิเจอร์ การรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปภายใต้ IS 17632:2022
          ช่วยให้มั่นใจว่าผลิตภัณฑ์เป็นไปตามข้อกำหนดด้านประสิทธิภาพและความปลอดภัยที่กำหนด
          ก่อนจำหน่ายในตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรองภายใต้สำนักงานมาตรฐานอินเดีย (BIS) ช่วยให้ผู้ผลิตสามารถใช้เครื่องหมาย
          ISI บนผลิตภัณฑ์ที่เป็นไปตามข้อกำหนด เครื่องหมาย ISI
          เป็นการรับประกันว่าผลิตภัณฑ์เป็นไปตามมาตรฐานคุณภาพอินเดียที่ได้รับการยอมรับ
          และได้ผ่านกระบวนการประเมินที่จำเป็น
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ในขณะที่อุตสาหกรรมเฟอร์นิเจอร์ยังคงเติบโตและหน่วยงานจัดซื้อนิยมผลิตภัณฑ์ที่ได้รับการรับรอง
          มากขึ้น การรับรอง BIS จึงกลายเป็นข้อกำหนดด้านการปฏิบัติตามและการเข้าถึงตลาดที่สำคัญ
          สำหรับผู้ผลิต
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ไฮไลท์สำคัญของการรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป
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
                ["ชื่อผลิตภัณฑ์", "เก้าอี้และม้านั่งทั่วไป"],
                ["มาตรฐานอินเดียที่ใช้บังคับ", "IS 17632:2022"],
                ["ประเภทการรับรอง", "การรับรองผลิตภัณฑ์ BIS"],
                ["แผนการรับรอง", "แผน I (การรับรองเครื่องหมาย ISI)"],
                ["เครื่องหมายที่ใช้", "เครื่องหมาย ISI"],
                ["หน่วยงานกำกับดูแล", "สำนักงานมาตรฐานอินเดีย (BIS)"],
                ["กระทรวงที่เกี่ยวข้อง", "กระทรวงพาณิชย์และอุตสาหกรรม"],
                [
                  "ข้อกำหนดการปฏิบัติตาม",
                  "บังคับภายใต้ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง (Quality Control Order)",
                ],
                ["หมวดหมู่ผลิตภัณฑ์", "เฟอร์นิเจอร์"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "แผนการรับรอง" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        แผน I (การรับรองเครื่องหมาย ISI)
                      </a>
                    ) : particular === "ข้อกำหนดการปฏิบัติตาม" ? (
                      <>
                        บังคับภายใต้{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
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
          การรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปเป็นกระบวนการประเมินความสอดคล้อง
          ภายใต้แผนการรับรองผลิตภัณฑ์ BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์ของการรับรองคือเพื่อตรวจสอบว่าผลิตภัณฑ์เป็นไปตามข้อกำหนดที่ระบุใน
          IS 17632:2022 เมื่อได้รับการรับรองแล้ว ผู้ผลิตจะได้รับอนุญาตให้ใช้เครื่องหมาย ISI
          บนผลิตภัณฑ์ของตน
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          กระบวนการรับรองประเมินด้านประสิทธิภาพของผลิตภัณฑ์หลายด้าน รวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>ความแข็งแรง</li>
          <li>ความเสถียร</li>
          <li>ความทนทาน</li>
          <li>ประสิทธิภาพโครงสร้าง</li>
          <li>ข้อกำหนดด้านความปลอดภัย</li>
          <li>คุณภาพวัสดุ</li>
          <li>ฝีมือการผลิต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรองช่วยให้มั่นใจว่าผลิตภัณฑ์ที่นั่งที่จำหน่ายในตลาดอินเดียเป็นไปตามเกณฑ์
          คุณภาพและความปลอดภัยที่กำหนดไว้
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ภาพรวมของ IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 เป็นมาตรฐานอินเดียที่กำหนดข้อกำหนดสำหรับเก้าอี้และม้านั่งทั่วไป
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้กำหนดข้อกำหนดที่เกี่ยวข้องกับความปลอดภัย ความแข็งแรง ความทนทาน
          ความเสถียร และประสิทธิภาพโดยรวมของเฟอร์นิเจอร์ที่นั่งที่มีไว้สำหรับการใช้งานทั่วไป
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ใช้กับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>เก้าอี้และม้านั่งที่ผลิตเสร็จสมบูรณ์</li>
          <li>เก้าอี้และม้านั่งที่ประกอบสร้าง</li>
          <li>ผลิตภัณฑ์พร้อมประกอบหลังจากประกอบแล้ว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์ของมาตรฐานคือเพื่อให้มั่นใจว่าผลิตภัณฑ์เฟอร์นิเจอร์ให้ประสิทธิภาพที่ปลอดภัย
          เชื่อถือได้ และทนทานตลอดอายุการใช้งานที่ตั้งใจไว้
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดหลักภายใต้ IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความแข็งแรง</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้และม้านั่งทั่วไปต้องมีความแข็งแรงของโครงสร้างเพียงพอที่จะทนต่อสภาวะ
          การรับน้ำหนักที่คาดหวังในระหว่างการใช้งานปกติ
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความเสถียร</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เฟอร์นิเจอร์ควรคงความเสถียรในระหว่างการใช้งานตามวัตถุประสงค์
          และไม่ควรมีความเสี่ยงในการพลิกคว่ำที่ไม่จำเป็น
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความทนทาน</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ผลิตภัณฑ์ต้องสามารถรักษาความสมบูรณ์ของโครงสร้างและประสิทธิภาพ
          ผ่านรอบการใช้งานซ้ำๆ ได้
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อกำหนดด้านความปลอดภัย</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานรวมข้อกำหนดที่เกี่ยวข้องกับความปลอดภัย
          เพื่อลดความเสี่ยงที่เกี่ยวข้องกับการใช้เฟอร์นิเจอร์
        </p>

        <h3 className={SUB_HEADING_CLASS}>คุณภาพวัสดุและฝีมือการผลิต</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          คุณภาพของวัสดุ วิธีการผลิต วิธีการประกอบ ข้อต่อ
          และการตกแต่งมีส่วนสำคัญอย่างยิ่งต่อการปฏิบัติตามมาตรฐาน
        </p>

        <h3 className={SUB_HEADING_CLASS}>ข้อพิจารณาด้านสรีรศาสตร์</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานรวมข้อพิจารณาที่เกี่ยวข้องกับประสิทธิภาพ
          ซึ่งมีส่วนช่วยในเรื่องความสะดวกสบายของผู้ใช้และการใช้งานที่เป็นประโยชน์
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ผลิตภัณฑ์ที่ครอบคลุมภายใต้ IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้โดยทั่วไปใช้กับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>เก้าอี้ทั่วไป</li>
          <li>ม้านั่งทั่วไป</li>
          <li>เฟอร์นิเจอร์ที่นั่งแบบติดตั้งที่มีไว้สำหรับการใช้งานทั่วไป</li>
          <li>ผลิตภัณฑ์ที่นั่งแบบพร้อมประกอบหลังจากประกอบแล้ว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตควรตรวจสอบขอบเขตของมาตรฐานอย่างรอบคอบ
          เพื่อกำหนดความเกี่ยวข้องกับผลิตภัณฑ์ของตน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            ตรวจสอบผลิตภัณฑ์เฟอร์นิเจอร์ที่ครอบคลุมภายใต้การรับรอง BIS บังคับ —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>ใบรับรอง BIS สำหรับเฟอร์นิเจอร์</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS เป็นข้อบังคับสำหรับเก้าอี้และม้านั่งทั่วไปหรือไม่?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใช่ ผลิตภัณฑ์เฟอร์นิเจอร์ที่ครอบคลุมภายใต้คำสั่งควบคุมคุณภาพเฟอร์นิเจอร์ (QCO)
          ที่เกี่ยวข้อง ต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง
          และได้รับการรับรอง BIS ก่อนที่จะผลิต นำเข้า ขาย จัดจำหน่าย
          หรือจัดหาในตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่อยู่ภายใต้กรอบกฎระเบียบที่เกี่ยวข้องต้องได้รับใบอนุญาต BIS
          และปฏิบัติตามข้อกำหนดการติดเครื่องหมายที่ BIS กำหนด
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ก่อนที่จะได้รับการรับรอง ตัวอย่างผลิตภัณฑ์ต้องได้รับการประเมินผ่านการทดสอบ
          ที่ห้องปฏิบัติการที่ได้รับการยอมรับ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบโดยทั่วไปมุ่งเน้นไปที่พารามิเตอร์ต่อไปนี้:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การประเมินประสิทธิภาพโครงสร้าง —</strong>{" "}
            กำหนดว่าเก้าอี้หรือม้านั่งสามารถทนต่อสภาวะการใช้งานปกติได้โดยไม่ล้มเหลวหรือไม่
          </li>
          <li>
            <strong>การทดสอบความเสถียร —</strong>{" "}
            ประเมินว่าเฟอร์นิเจอร์คงความเสถียรในระหว่างการใช้งานตามวัตถุประสงค์
            และต้านทานการพลิกคว่ำได้หรือไม่
          </li>
          <li>
            <strong>การประเมินความแข็งแรง —</strong>{" "}
            ประเมินความสามารถในการรับน้ำหนักและความสมบูรณ์ของโครงสร้างของโครง
            ข้อต่อ และส่วนค้ำยัน
          </li>
          <li>
            <strong>การประเมินความทนทาน —</strong>{" "}
            ตรวจสอบการรักษาประสิทธิภาพหลังรอบการใช้งานซ้ำๆ
            ตลอดอายุการใช้งานของผลิตภัณฑ์
          </li>
          <li>
            <strong>การประเมินความปลอดภัย —</strong>{" "}
            ระบุอันตรายที่เป็นไปได้และตรวจสอบการปฏิบัติตามข้อกำหนดด้านความปลอดภัยที่กำหนด
          </li>
          <li>
            <strong>การตรวจสอบฝีมือการผลิต —</strong>{" "}
            ตรวจสอบคุณภาพการก่อสร้าง การตกแต่ง ความสมบูรณ์ของการประกอบ
            และมาตรฐานการผลิตโดยรวม
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการติดเครื่องหมายผลิตภัณฑ์
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ผลิตภัณฑ์ที่ได้รับการรับรองภายใต้ IS 17632:2022 โดยทั่วไปต้องมีข้อมูลระบุตัวตน
          ดังต่อไปนี้:
        </p>

        <ul className={LIST_CLASS}>
          <li>ชื่อหรือเครื่องหมายการค้าของผู้ผลิต</li>
          <li>การระบุรุ่นหรือการออกแบบ</li>
          <li>หมายเลขชุดหรือล็อต</li>
          <li>วันที่ผลิต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องหมาย ISI สามารถติดได้เฉพาะหลังจากได้รับใบอนุญาต BIS ที่ถูกต้องเท่านั้น
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป
        </h2>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 1: การประเมินขอบเขตผลิตภัณฑ์</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนแรกคือการกำหนดว่าผลิตภัณฑ์อยู่ในขอบเขตของ IS 17632:2022
          และ QCO เฟอร์นิเจอร์ที่เกี่ยวข้องหรือไม่
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          ตรวจสอบประเภทเก้าอี้หรือม้านั่ง การใช้งานที่ตั้งใจ วัสดุ
          และการก่อสร้างก่อนเริ่มกระบวนการรับรอง
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 2: การจัดเตรียมเอกสาร</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตจัดเตรียมเอกสารทางเทคนิคและการปฏิบัติตามที่จำเป็นสำหรับการรับรอง
          รวมถึงบันทึกบริษัท รายละเอียดโรงงาน ข้อกำหนดผลิตภัณฑ์
          และขั้นตอนการควบคุมคุณภาพ
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          เอกสารที่ครบถ้วนและถูกต้องช่วยหลีกเลี่ยงความล่าช้าที่ไม่จำเป็นในระหว่างการตรวจสอบของ BIS
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 3: การทดสอบผลิตภัณฑ์</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ตัวอย่างที่เป็นตัวแทนจะได้รับการทดสอบที่ห้องปฏิบัติการที่ BIS รับรอง
          เพื่อตรวจสอบการปฏิบัติตามข้อกำหนดของ IS 17632:2022
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          รายงานการทดสอบจากห้องปฏิบัติการเป็นเอกสารทางเทคนิคสำคัญ
          ที่สนับสนุนการสมัครขอรับรอง
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 4: การยื่นคำขอ BIS</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          คำขอรับรองจะถูกยื่นพร้อมเอกสารประกอบ รายงานการทดสอบ
          และข้อมูลการผลิต
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS จะตรวจสอบคำขอเพื่อความครบถ้วนและการปฏิบัติตามทางเทคนิค
          ก่อนดำเนินการในขั้นตอนถัดไป
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 5: การตรวจสอบโรงงาน</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS อาจประเมินสถานที่ผลิต ระบบการผลิต และกระบวนการควบคุมคุณภาพ
          เพื่อตรวจสอบความสามารถในการผลิตผลิตภัณฑ์ที่เป็นไปตามข้อกำหนดอย่างสม่ำเสมอ
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          การประเมินนี้โดยทั่วไปครอบคลุมโครงสร้างพื้นฐานการผลิต ระบบ QC
          การควบคุมวัตถุดิบ และการติดตามผลิตภัณฑ์
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 6: การตรวจสอบทางเทคนิค</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          คำขอ รายงานการทดสอบ และผลการตรวจสอบจะได้รับการพิจารณาโดย BIS
          ก่อนตัดสินใจเรื่องการรับรอง
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          ข้อสังเกตหรือข้อบกพร่องใดๆ ที่เกิดขึ้นในระหว่างการตรวจสอบ
          ผู้สมัครต้องดำเนินการแก้ไข
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขั้นตอนที่ 7: การออกใบอนุญาต</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เมื่อการปฏิบัติตามเป็นที่น่าพอใจ BIS จะออกใบอนุญาต
          และอนุญาตให้ใช้เครื่องหมาย ISI บนเก้าอี้และม้านั่งทั่วไปที่ได้รับการรับรอง
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตต้องปฏิบัติตามข้อกำหนดของ BIS ตลอดระยะเวลาใบอนุญาต
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การปฏิบัติตามกฎระเบียบอินเดีย —</strong>{" "}
            เป็นไปตามข้อกำหนดด้านคุณภาพและความปลอดภัยที่บังคับภายใต้ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง
          </li>
          <li>
            <strong>การเข้าถึงตลาดอย่างถูกกฎหมาย —</strong>{" "}
            จัดหาเก้าอี้และม้านั่งที่ได้รับการรับรองในอินเดีย
            ตามข้อกำหนดกฎระเบียบที่เกี่ยวข้อง
          </li>
          <li>
            <strong>ความน่าเชื่อถือของผลิตภัณฑ์ที่เพิ่มขึ้น —</strong>{" "}
            เครื่องหมาย ISI แสดงถึงการเป็นไปตามมาตรฐานอินเดียที่ได้รับการยอมรับ
          </li>
          <li>
            <strong>ความมั่นใจของลูกค้าที่เพิ่มขึ้น —</strong>{" "}
            ผู้บริโภคและผู้ซื้อในองค์กรนิยมผลิตภัณฑ์ที่ได้รับการประเมินตามเกณฑ์ที่กำหนด
          </li>
          <li>
            <strong>ข้อได้เปรียบในการแข่งขัน —</strong>{" "}
            ได้รับการยอมรับมากขึ้นในกระบวนการจัดซื้อเชิงพาณิชย์และของรัฐบาล
          </li>
          <li>
            <strong>ชื่อเสียงแบรนด์ที่ดีขึ้น —</strong>{" "}
            แสดงถึงความมุ่งมั่นต่อคุณภาพผลิตภัณฑ์ ความปลอดภัย
            และความน่าเชื่อถือในระยะยาว
          </li>
          <li>
            <strong>การสนับสนุน MSME —</strong>{" "}
            ช่วยผู้ผลิตขนาดกลางและขนาดย่อมเสริมสร้างการมีอยู่ในตลาด
            และสร้างความไว้วางใจของลูกค้า
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปในระหว่างการรับรอง
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การทดสอบผลิตภัณฑ์ไม่ผ่าน —</strong>{" "}
            ข้อบกพร่องในการออกแบบหรือการผลิตอาจทำให้ไม่เป็นไปตามข้อกำหนดในระหว่างการประเมินในห้องปฏิบัติการ
          </li>
          <li>
            <strong>ปัญหาเอกสาร —</strong>{" "}
            บันทึกที่ไม่ครบถ้วนหรือไม่สอดคล้องกันมักเป็นสาเหตุของความล่าช้าในการรับรอง
          </li>
          <li>
            <strong>ช่องว่างการปฏิบัติตามในการผลิต —</strong>{" "}
            ระบบควบคุมคุณภาพอาจต้องได้รับการปรับปรุงก่อนที่จะได้รับการรับรอง
          </li>
          <li>
            <strong>ความซับซ้อนของกฎระเบียบ —</strong>{" "}
            การจัดการการทดสอบ การตรวจสอบ และขั้นตอนการรับรอง
            อาจเป็นเรื่องท้าทายหากไม่มีคำแนะนำจากผู้เชี่ยวชาญ
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือก Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India ช่วยเหลือผู้ผลิต ผู้นำเข้า ผู้ส่งออก
          และธุรกิจต่างๆ ด้านข้อกำหนดการปฏิบัติตามกฎระเบียบทั่วอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          บริการของเรารวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>การประเมินความเกี่ยวข้องของผลิตภัณฑ์</li>
          <li>ที่ปรึกษาการรับรอง BIS</li>
          <li>การสนับสนุนเอกสาร</li>
          <li>การประสานงานการทดสอบในห้องปฏิบัติการ</li>
          <li>การเตรียมการตรวจสอบโรงงาน</li>
          <li>การจัดการคำขอ</li>
          <li>ความช่วยเหลือด้านการปฏิบัติตามกฎระเบียบ</li>
          <li>การสนับสนุนหลังการรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เป้าหมายของเราคือช่วยให้ลูกค้าดำเนินการตามข้อกำหนดการรับรองได้อย่างมีประสิทธิภาพ
          และบรรลุการปฏิบัติตามด้วยความล่าช้าน้อยที่สุด
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปภายใต้ IS 17632:2022
          มีบทบาทสำคัญในการรับประกันคุณภาพ ความปลอดภัย ความแข็งแรง ความเสถียร
          และความทนทานของผลิตภัณฑ์ การรับรองช่วยให้ผู้ผลิตแสดงการปฏิบัติตามมาตรฐานอินเดีย
          พร้อมเสริมสร้างความมั่นใจของลูกค้าและสนับสนุนการเข้าถึงตลาด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ในขณะที่ความต้องการผลิตภัณฑ์เฟอร์นิเจอร์ที่รับประกันคุณภาพยังคงเพิ่มขึ้น
          การรับรอง BIS และเครื่องหมาย ISI ให้ความมั่นใจที่มีค่าแก่ผู้บริโภค
          องค์กร และหน่วยงานจัดซื้อ ผู้ผลิตที่ลงทุนในการปฏิบัติตาม
          ไม่เพียงตอบสนองข้อกำหนดกฎระเบียบเท่านั้น แต่ยังเสริมสร้างความสามารถในการแข่งขัน
          และชื่อเสียงในตลาดระยะยาว
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากคุณวางแผนจะขอรับการรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปภายใต้
          IS 17632:2022 Sun Certifications India สามารถให้คำแนะนำจากผู้เชี่ยวชาญ
          และการสนับสนุนการปฏิบัติตามแบบครบวงจรตลอดกระบวนการรับรอง
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17632:2022 คืออะไร?</strong>
              <br />
              IS 17632:2022 เป็นมาตรฐานอินเดียที่กำหนดข้อกำหนดสำหรับเก้าอี้และม้านั่งทั่วไป
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. การรับรอง BIS เป็นข้อบังคับสำหรับเก้าอี้และม้านั่งทั่วไปหรือไม่?
              </strong>
              <br />
              ผลิตภัณฑ์ที่ครอบคลุมภายใต้คำสั่งควบคุมคุณภาพเฟอร์นิเจอร์ (QCO) ที่เกี่ยวข้อง
              ต้องปฏิบัติตามข้อกำหนดการรับรอง BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. เครื่องหมาย ISI คืออะไร?</strong>
              <br />
              เครื่องหมาย ISI เป็นเครื่องหมายรับรองมาตรฐานที่ออกภายใต้แผนการรับรองผลิตภัณฑ์ BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ใครสามารถสมัครขอรับรอง BIS ได้?</strong>
              <br />
              ทั้งผู้ผลิตอินเดียและผู้ผลิตต่างประเทศสามารถสมัครขอรับรองได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. การรับรอง BIS ต้องมีการทดสอบผลิตภัณฑ์หรือไม่?</strong>
              <br />
              ใช่ การทดสอบผลิตภัณฑ์เป็นส่วนประกอบสำคัญของกระบวนการรับรอง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. เก้าอี้แบบพร้อมประกอบครอบคลุมภายใต้ IS 17632:2022 หรือไม่?
              </strong>
              <br />
              ใช่ มาตรฐานนี้ใช้กับผลิตภัณฑ์พร้อมประกอบหลังจากประกอบแล้ว
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. ผลิตภัณฑ์ใดที่ไม่รวมอยู่ในขอบเขตของ IS 17632:2022?
              </strong>
              <br />
              ผลิตภัณฑ์เช่น เก้าอี้เอนหลัง เก้าอี้โยก เก้าอี้เอียง โซฟา
              และผลิตภัณฑ์ที่นั่งเฉพาะทางบางประเภทโดยทั่วไปจะไม่รวมอยู่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. ประโยชน์ของการได้รับการรับรอง BIS คืออะไร?</strong>
              <br />
              ประโยชน์รวมถึงการปฏิบัติตามกฎระเบียบ ความน่าเชื่อถือของผลิตภัณฑ์ที่ดีขึ้น
              ความมั่นใจของลูกค้าที่เพิ่มขึ้น และการยอมรับในตลาดที่ดีขึ้น
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ผู้ผลิตต่างประเทศสามารถขอรับรอง BIS ได้หรือไม่?</strong>
              <br />
              ใช่ ผู้ผลิตต่างประเทศสามารถสมัครผ่านเส้นทางการรับรอง BIS
              ที่ใช้สำหรับผู้ผลิตในต่างประเทศ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India ช่วยได้อย่างไร?</strong>
              <br />
              Sun Certifications India ให้การสนับสนุนแบบครบวงจรสำหรับการรับรอง BIS
              รวมถึงเอกสาร การประสานงานการทดสอบ การจัดการคำขอ
              และความช่วยเหลือด้านการปฏิบัติตาม
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          แหล่งข้อมูลที่เกี่ยวข้อง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ใบรับรอง ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              ใบรับรอง BIS สำหรับผู้ผลิตต่างประเทศ
            </a>
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
