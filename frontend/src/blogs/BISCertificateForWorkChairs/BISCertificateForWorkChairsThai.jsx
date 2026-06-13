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

const BISCertificateForWorkChairsThai = () => {
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

export default BISCertificateForWorkChairsThai;

const MetaTags = () => {
  const title = "ใบรับรอง BIS สำหรับเก้าอี้ทำงาน | IS 17631:2022 ใบอนุญาต BIS";
  const ogTitle = "การรับรอง BIS สำหรับเก้าอี้ทำงาน – คู่มือ IS 17631:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับเก้าอี้ทำงาน | IS 17631:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเก้าอี้ทำงานตาม IS 17631:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับเก้าอี้ทำงานตาม IS 17631:2022 รู้จักกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเก้าอี้ทำงานตาม IS 17631:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเก้าอี้ทำงาน, ใบอนุญาต BIS สำหรับเก้าอี้ทำงาน, IS 17631:2022, การรับรอง BIS สำหรับเก้าอี้ทำงาน";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631";
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
                    ใบรับรอง BIS สำหรับเก้าอี้ทำงาน (IS 17631:2022)
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
          ใบรับรอง BIS สำหรับเก้าอี้ทำงาน (IS 17631:2022) – คู่มือการรับรองเครื่องหมาย
          ISI ฉบับสมบูรณ์
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="ใบอนุญาต BIS สำหรับเก้าอี้ทำงาน"
            alt="ใบรับรอง BIS สำหรับเก้าอี้ทำงาน - คู่มือเครื่องหมาย ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ทำงานได้กลายเป็นส่วนสำคัญของสถานที่ทำงานสมัยใหม่ สถาบันการศึกษา
          สำนักงานภาครัฐ พื้นที่โคเวิร์กกิ้ง และสำนักงานที่บ้าน
          เนื่องจากองค์กรให้ความสำคัญกับความสะดวกสบายของพนักงาน ประสิทธิภาพการทำงาน
          สรีรศาสตร์ในที่ทำงาน และความเป็นอยู่ที่ดีในอาชีพมากขึ้น
          ความต้องการเก้าอี้ทำงานคุณภาพสูงจึงเพิ่มขึ้นอย่างต่อเนื่อง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ที่ออกแบบไม่ดีอาจส่งผลเสียต่อท่าทาง ความสะดวกสบาย และประสิทธิภาพการทำงาน
          ด้วยเหตุนี้ คุณภาพ ความปลอดภัย ความทนทาน และประสิทธิภาพด้านสรีรศาสตร์จึงเป็น
          ข้อพิจารณาสำคัญสำหรับผู้ผลิต ผู้ซื้อ และหน่วยงานจัดซื้อ
          เพื่อให้มาตรฐานคุณภาพเป็นเอกภาพทั่วอุตสาหกรรม
          สำนักงานมาตรฐานอินเดีย (BIS) ได้กำหนด IS 17631:2022
          ซึ่งเป็นมาตรฐานอินเดียที่ใช้กับเก้าอี้ทำงาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่อยู่ภายใต้กรอบกฎระเบียบที่เกี่ยวข้องต้องได้รับการรับรอง BIS
          และใช้เครื่องหมาย ISI บนผลิตภัณฑ์ที่เป็นไปตามข้อกำหนด
          การรับรอง BIS แสดงว่าเก้าอี้ทำงานได้รับการประเมินตามข้อกำหนดที่กำหนด
          เกี่ยวกับความปลอดภัย ความแข็งแรง ความเสถียร ความทนทาน และประสิทธิภาพด้านสรีรศาสตร์
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบายทุกสิ่งที่ผู้ผลิต ผู้นำเข้า แบรนด์เฟอร์นิเจอร์
          ผู้เชี่ยวชาญด้านจัดซื้อ และเจ้าของธุรกิจจำเป็นต้องรู้
          เกี่ยวกับการรับรอง BIS สำหรับเก้าอี้ทำงานภายใต้ IS 17631:2022
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ภาพรวมโดยย่อของการรับรอง BIS สำหรับเก้าอี้ทำงาน
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
                ["ผลิตภัณฑ์", "เก้าอี้ทำงาน"],
                ["มาตรฐานอินเดียที่ใช้บังคับ", "IS 17631:2022"],
                ["ประเภทการรับรอง", "การรับรองผลิตภัณฑ์ BIS"],
                ["แผนการรับรองที่ใช้บังคับ", "แผน I (การรับรองเครื่องหมาย ISI)"],
                ["เครื่องหมายที่ใช้บังคับ", "เครื่องหมาย ISI"],
                ["หน่วยงานกำกับดูแล", "สำนักงานมาตรฐานอินเดีย (BIS)"],
                ["กระทรวงที่เกี่ยวข้อง", "กระทรวงพาณิชย์และอุตสาหกรรม"],
                [
                  "ข้อกำหนดการปฏิบัติตาม",
                  "บังคับภายใต้ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง (Quality Control Order)",
                ],
                [
                  "ผู้สมัครที่มีสิทธิ์",
                  "ผู้ผลิตอินเดียและผู้ผลิตต่างประเทศ ",
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
                    {particular === "แผนการรับรองที่ใช้บังคับ" ? (
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
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง (Quality Control Order)</strong>
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
          การรับรอง BIS สำหรับเก้าอี้ทำงานคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS สำหรับเก้าอี้ทำงานเป็นกระบวนการประเมินความสอดคล้อง
          ภายใต้แผนการรับรองผลิตภัณฑ์ของสำนักงานมาตรฐานอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์ของการรับรองคือเพื่อตรวจสอบว่าเก้าอี้ทำงานเป็นไปตามข้อกำหนด
          ที่ระบุไว้ใน IS 17631:2022 เมื่อได้รับการรับรองสำเร็จ
          ผู้ผลิตได้รับอนุญาตให้ใช้เครื่องหมาย ISI บนผลิตภัณฑ์ของตน
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          กระบวนการรับรองประเมินด้านประสิทธิภาพและความปลอดภัยต่างๆ ของเก้าอี้ทำงาน รวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>การออกแบบสรีรศาสตร์</li>
          <li>ความสมบูรณ์ของโครงสร้าง</li>
          <li>ความเสถียร</li>
          <li>ความทนทาน</li>
          <li>ข้อกำหนดด้านความปลอดภัย</li>
          <li>ฝีมือการผลิต</li>
          <li>ประสิทธิภาพของผลิตภัณฑ์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องหมาย ISI ให้ความมั่นใจว่าผลิตภัณฑ์ได้รับการประเมินตามมาตรฐานอินเดียที่ยอมรับ
          และเป็นไปตามข้อกำหนดคุณภาพที่กำหนด
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงสำคัญสำหรับเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ทำงานถูกใช้งานเป็นเวลานานในสำนักงาน สถาบันการศึกษา
          สถานประกอบการเชิงพาณิชย์ และพื้นที่ทำงานที่บ้าน
          เนื่องจากผู้ใช้นั่งอยู่เป็นส่วนใหญ่ของวัน
          คุณภาพและประสิทธิภาพด้านสรีรศาสตร์ของเก้าอี้เหล่านี้ส่งผลโดยตรงต่อความสะดวกสบาย
          และประสิทธิภาพในที่ทำงาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          การรับรอง BIS ช่วยให้มั่นใจว่าเก้าอี้ทำงานที่ได้รับการรับรอง:
        </p>

        <ul className={LIST_CLASS}>
          <li>เป็นไปตามข้อกำหนดด้านความปลอดภัยที่กำหนด</li>
          <li>ให้ประสิทธิภาพที่เชื่อถือได้</li>
          <li>มีความแข็งแรงทางโครงสร้างเพียงพอ</li>
          <li>รักษาความเสถียรระหว่างการใช้งาน</li>
          <li>รองรับความทนทานในระยะยาว</li>
          <li>เป็นไปตามมาตรฐานคุณภาพอินเดีย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ผลิต การรับรองช่วยแสดงคุณภาพของผลิตภัณฑ์
          พร้อมสนับสนุนการปฏิบัติตามกฎระเบียบและการยอมรับในตลาด
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ภาพรวมของ IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 เป็นมาตรฐานอินเดียที่กำหนดข้อกำหนดสำหรับเก้าอี้ทำงาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้กำหนดข้อกำหนดที่เกี่ยวข้องกับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>ความปลอดภัย</li>
          <li>ความแข็งแรง</li>
          <li>ความเสถียร</li>
          <li>ความทนทาน</li>
          <li>ข้อพิจารณาด้านสรีรศาสตร์</li>
          <li>ประสิทธิภาพการทำงาน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          วัตถุประสงค์คือเพื่อให้มั่นใจว่าเก้าอี้ทำงานสามารถให้ประสิทธิภาพที่ปลอดภัย
          และเชื่อถือได้ระหว่างการใช้งานเป็นเวลานานในสภาพแวดล้อมการทำงาน
        </p>

        <h3 className={SUB_HEADING_CLASS}>ขอบเขตของ IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          ตามมาตรฐาน IS 17631:2022 ครอบคลุมเก้าอี้ทำงานและใช้กับ:
        </p>

        <ul className={LIST_CLASS}>
          <li>เก้าอี้ทำงานที่ผลิตเสร็จสมบูรณ์</li>
          <li>เก้าอี้ทำงานที่ประกอบ</li>
          <li>เก้าอี้ทำงานพร้อมประกอบหลังจากประกอบแล้ว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ข้อกำหนดของมาตรฐานใช้กับผลิตภัณฑ์ที่ประกอบแล้วซึ่งมีไว้สำหรับการใช้งาน
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประเภทเก้าอี้ทำงานที่ครอบคลุมภายใต้ IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ขึ้นอยู่กับการออกแบบผลิตภัณฑ์และการใช้งานที่ตั้งใจไว้
          มาตรฐานอาจใช้กับหมวดหมู่เฟอร์นิเจอร์นั่งทำงานต่างๆ รวมถึง:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>เก้าอี้ทำงานสำนักงาน —</strong> ที่นั่งที่ใช้ในสำนักงานองค์กร
            แผนกบริหาร และสภาพแวดล้อมการทำงานระดับมืออาชีพ
          </li>
          <li>
            <strong>เก้าอี้งาน —</strong> เก้าอี้ที่ออกแบบสำหรับงานโต๊ะประจำวัน
            สถานีทำงาน และงานนั่งทั่วไป
          </li>
          <li>
            <strong>เก้าอี้ทำงานปรับได้ —</strong> รุ่นที่มีความสูง การเอียง
            หรือคุณสมบัติปรับได้อื่นๆ เพื่อเพิ่มความสะดวกสบายและสรีรศาสตร์
          </li>
          <li>
            <strong>เก้าอี้ทำงานสถาบัน —</strong> เก้าอี้ที่จัดหาให้โรงเรียน วิทยาลัย
            สำนักงานภาครัฐ และสถาบันเชิงพาณิชย์
          </li>
          <li>
            <strong>เก้าอี้สำนักงานที่บ้าน —</strong> เก้าอี้ทำงานที่ออกแบบสำหรับการทำงานระยะไกล
            ฟรีแลนซ์ และการตั้งค่าสำนักงานที่บ้าน
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ตรวจสอบการออกแบบผลิตภัณฑ์ กลไก และการใช้งานที่ตั้งใจไว้อย่างรอบคอบ
          เพื่อยืนยันว่าเก้าอี้ของคุณอยู่ในขอบเขตของ IS 17631:2022
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            ตรวจสอบผลิตภัณฑ์เฟอร์นิเจอร์ที่ครอบคลุมภายใต้การรับรอง BIS บังคับ —
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
          ข้อกำหนดหลักภายใต้ IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานมุ่งเน้นลักษณะประสิทธิภาพที่สำคัญหลายประการ
          ซึ่งมีส่วนสนับสนุนคุณภาพและความปลอดภัยของเก้าอี้ทำงาน
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การออกแบบสรีรศาสตร์ —</strong> ครอบคลุมความสะดวกสบายของผู้ใช้
            การรองรับที่นั่งและพนักพิง การปรับได้ และท่าทางที่เหมาะสม
            เพื่อลดความเหนื่อยล้าและเพิ่มประสิทธิภาพในที่ทำงาน
          </li>
          <li>
            <strong>ข้อกำหนดด้านความแข็งแรง —</strong> โครง ข้อต่อ และโครงสร้างรองรับ
            ต้องทนต่อการใช้งานปกติโดยไม่ล้มเหลวหรือสูญเสียความสมบูรณ์
          </li>
          <li>
            <strong>ข้อกำหนดด้านความเสถียร —</strong> เก้าอี้ต้องต้านทานการพลิกคว่ำ
            และคงความเสถียรระหว่างการนั่งและการเคลื่อนไหวปกติ
          </li>
          <li>
            <strong>ข้อกำหนดด้านความทนทาน —</strong> ผลิตภัณฑ์ต้องทำงานได้สม่ำเสมอ
            หลังการใช้งานประจำวันเป็นเวลานานและซ้ำๆ ตลอดอายุการใช้งานที่ตั้งใจไว้
          </li>
          <li>
            <strong>ข้อกำหนดด้านความปลอดภัย —</strong> การออกแบบและการก่อสร้างต้องลดอันตราย
            ที่หลีกเลี่ยงได้จากความไม่เสถียร ข้อบกพร่อง หรือการผลิตที่ไม่ปลอดภัย
          </li>
          <li>
            <strong>คุณภาพวัสดุ —</strong> ส่วนประกอบและการตกแต่งต้องเป็นไปตามมาตรฐานคุณภาพ
            ที่สนับสนุนประสิทธิภาพที่ปลอดภัย ทนทาน และเชื่อถือได้
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับการรับรอง BIS ของเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ก่อนให้การรับรอง ตัวอย่างผลิตภัณฑ์จะได้รับการประเมินผ่านการทดสอบ
          ในห้องปฏิบัติการที่ได้รับการยอมรับ
          การทดสอบช่วยตรวจสอบความสอดคล้องกับข้อกำหนดที่ระบุไว้ใน IS 17631:2022
        </p>

        <h3 className={SUB_HEADING_CLASS}>การทดสอบหลักที่ดำเนินการ</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "การออกแบบและฝีมือ"],
                ["7.3.1", "การพลิกคว่ำขอบด้านหน้า"],
                ["7.3.2", "การพลิกคว่ำไปข้างหน้า"],
                [
                  "7.3.3",
                  "การพลิกคว่ำไปข้างหน้าสำหรับเก้าอี้ที่มีที่วางเท้า",
                ],
                [
                  "7.3.4",
                  "การพลิกคว่ำด้านข้างสำหรับเก้าอี้ที่ไม่มีที่วางแขน",
                ],
                [
                  "7.3.5",
                  "การพลิกคว่ำด้านข้างสำหรับเก้าอี้ที่มีที่วางแขน",
                ],
                [
                  "7.3.6",
                  "การพลิกคว่ำไปข้างหลังสำหรับเก้าอี้ที่ไม่มีพนักพิง",
                ],
                ["7.4.1", "การทดสอบโหลดคงที่ขอบด้านหน้าของที่นั่ง"],
                ["7.4.2", "การทดสอบโหลดคงที่รวมของที่นั่งและหลัง"],
                ["7.4.3", "การทดสอบโหลดคงที่ลงของที่วางแขน — กลาง"],
                ["7.4.4", "การทดสอบโหลดคงที่ลงของที่วางแขน — ด้านหน้า"],
                ["7.4.5", "การทดสอบโหลดคงที่ด้านข้างของที่วางแขน"],
                ["7.4.6", "การทดสอบโหลดคงที่ของที่วางเท้า"],
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
          กระบวนการรับรอง BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ต้องการรับรอง BIS ภายใต้ IS 17631:2022
          ต้องดำเนินกระบวนการรับรองที่มีโครงสร้าง
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>ขั้นตอนที่ 1: การประเมินความเกี่ยวข้องของผลิตภัณฑ์ —</strong>{" "}
            ยืนยันว่าเก้าอี้ทำงานอยู่ภายใต้ IS 17631:2022 และ QCO เฟอร์นิเจอร์ที่เกี่ยวข้อง
            ก่อนเริ่มการรับรอง
          </li>
          <li>
            <strong>ขั้นตอนที่ 2: การจัดเตรียมเอกสาร —</strong> รวบรวมบันทึกทางเทคนิค
            การผลิต การควบคุมคุณภาพ และกฎหมายที่จำเป็นสำหรับการตรวจสอบของ BIS
          </li>
          <li>
            <strong>ขั้นตอนที่ 3: การทดสอบผลิตภัณฑ์ —</strong> ส่งตัวอย่างไปยังห้องปฏิบัติการ
            ที่ BIS รับรองเพื่อประเมินตาม IS 17631:2022
          </li>
          <li>
            <strong>ขั้นตอนที่ 4: การยื่นใบสมัคร —</strong> ยื่นใบสมัคร BIS
            พร้อมรายงานการทดสอบ รายละเอียดโรงงาน และเอกสารสนับสนุนการปฏิบัติตาม
          </li>
          <li>
            <strong>ขั้นตอนที่ 5: การตรวจสอบโรงงาน —</strong> BIS ประเมินระบบการผลิต
            ขั้นตอน QC และการติดตามย้อนกลับที่โรงงานผลิต
          </li>
          <li>
            <strong>ขั้นตอนที่ 6: การตรวจสอบทางเทคนิค —</strong> BIS ประเมินใบสมัคร
            ผลห้องปฏิบัติการ และผลการตรวจสอบก่อนการอนุมัติขั้นสุดท้าย
          </li>
          <li>
            <strong>ขั้นตอนที่ 7: การออกใบอนุญาต BIS —</strong> เมื่อปฏิบัติตามสำเร็จ
            BIS ออกใบอนุญาตและอนุญาตให้ใช้เครื่องหมาย ISI บนเก้าอี้ทำงานที่ได้รับการรับรอง
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับผู้ผลิตอินเดีย
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตอินเดียโดยทั่วไปสมัครผ่านเส้นทางการรับรองในประเทศ
          กระบวนการโดยทั่วไปรวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>การทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่ BIS รับรอง</li>
          <li>การตรวจสอบเอกสารและการยื่นใบสมัคร BIS</li>
          <li>การประเมินโรงงานและการตรวจสอบทางเทคนิคโดย BIS</li>
          <li>การออกใบอนุญาต BIS และการอนุญาตเครื่องหมาย ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          หลังการรับรอง ผู้ผลิตต้องรักษาการปฏิบัติตามอย่างต่อเนื่อง
          ตามข้อกำหนดการเฝ้าระวัง การทำเครื่องหมาย และคุณภาพของ BIS
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับผู้ผลิตต่างประเทศ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตต่างประเทศที่ต้องการส่งออกเก้าอี้ทำงานไปยังอินเดีย
          ต้องได้รับการรับรอง BIS ก่อนจัดหาผลิตภัณฑ์ที่ครอบคลุมภายใต้ข้อกำหนดการรับรองบังคับ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          กระบวนการโดยทั่วไปรวมถึง:
        </p>

        <ul className={LIST_CLASS}>
          <li>การแต่งตั้งตัวแทนอินเดียที่ได้รับอนุญาต (AIR)</li>
          <li>การทดสอบผลิตภัณฑ์ในต่างประเทศและการประเมินโรงงาน</li>
          <li>การตรวจสอบใบสมัคร BIS และการอนุมัติการรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งนี้รับประกันว่าผลิตภัณฑ์นำเข้าเป็นไปตามข้อกำหนดคุณภาพและความปลอดภัยเดียวกัน
          ที่ใช้กับผู้ผลิตในประเทศ
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารเป็นส่วนสำคัญของกระบวนการรับรอง BIS สำหรับเก้าอี้ทำงาน
          ข้อกำหนดอาจแตกต่างกันตามว่าผู้สมัครเป็นผู้ผลิตอินเดีย ผู้ผลิตต่างประเทศ
          หรือผู้นำเข้า และตามแผนการรับรองที่ปฏิบัติตาม
          บันทึกที่ไม่สมบูรณ์หรือไม่สอดคล้องกันเป็นสาเหตุหลักที่ทำให้ใบสมัครล่าช้า
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          เอกสารต่อไปนี้มักจำเป็นระหว่างการรับรอง BIS ของเก้าอี้ทำงานภายใต้ IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>เอกสารธุรกิจ —</strong> ใบรับรองการจดทะเบียนบริษัท
            ใบอนุญาตการผลิต (ถ้ามี) การลงทะเบียน GST หลักฐานที่อยู่ธุรกิจ
            และรายละเอียดผู้ลงนามที่ได้รับอนุญาตพร้อมหลักฐานตัวตนและที่อยู่
          </li>
          <li>
            <strong>เอกสารการผลิต —</strong> แผนผังโรงงาน แผนภาพกระบวนการผลิต
            รายการเครื่องจักรผลิตและอุปกรณ์ทดสอบ
            และรายละเอียดโครงสร้างพื้นฐานการผลิตและกำลังการผลิตที่ติดตั้ง
          </li>
          <li>
            <strong>เอกสารผลิตภัณฑ์ —</strong> ข้อกำหนดผลิตภัณฑ์ แบบร่างวิศวกรรมหรือเทคนิค
            แคตตาล็อกหรือรายการรุ่น บิลออฟแมทีเรียล (BOM)
            และรายละเอียดวัตถุดิบ ส่วนประกอบ และชิ้นส่วนสำคัญที่ใช้ในเก้าอี้ทำงาน
          </li>
          <li>
            <strong>เอกสารควบคุมคุณภาพ —</strong> ขั้นตอนการควบคุมคุณภาพเป็นลายลักษณ์อักษร
            บันทึกการตรวจสอบวัสดุเข้า รายงานการตรวจสอบระหว่างกระบวนการและสินค้าสำเร็จรูป
            วิธีการทดสอบภายใน และใบรับรองการสอบเทียบอุปกรณ์วัดและทดสอบ
          </li>
          <li>
            <strong>เอกสารการรับรอง —</strong> รายงานการทดสอบจากห้องปฏิบัติการที่ BIS รับรอง
            แบบฟอร์มใบสมัคร BIS ที่กรอกครบถ้วน คำประกาศและข้อผูกพัน
            ตัวอย่างฉลากหรือเครื่องหมาย และเอกสารเพิ่มเติมที่ BIS กำหนด
            สำหรับเส้นทางการรับรองเฉพาะ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารทั้งหมดควรถูกต้อง สมบูรณ์ และสอดคล้องกับรายละเอียดผลิตภัณฑ์
          ที่ยื่นในใบสมัคร BIS ผู้ผลิตควรตรวจสอบข้อกำหนดเอกสารอย่างรอบคอบก่อนยื่น
          เพื่อหลีกเลี่ยงความล่าช้าที่ไม่จำเป็นในการดำเนินการรับรอง
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การปฏิบัติตามกฎระเบียบ —</strong> เป็นไปตามมาตรฐานอินเดียบังคับ
            และข้อกำหนด QCO สำหรับการผลิตและจำหน่ายอย่างถูกกฎหมาย
          </li>
          <li>
            <strong>การเข้าถึงตลาดอย่างถูกกฎหมาย —</strong> จัดหาเก้าอี้ทำงานที่ได้รับการรับรองในอินเดีย
            โดยไม่มีความเสี่ยงด้านกฎระเบียบสำหรับหมวดหมู่ผลิตภัณฑ์ที่ครอบคลุม
          </li>
          <li>
            <strong>ความน่าเชื่อถือที่เพิ่มขึ้น —</strong> เครื่องหมาย ISI แสดงถึงคุณภาพ ความปลอดภัย
            และความสอดคล้องที่ได้รับการตรวจสอบกับ IS 17631:2022
          </li>
          <li>
            <strong>ความมั่นใจของลูกค้า —</strong> ผู้ซื้อองค์กร สถาบัน และผู้ใช้ปลายทาง
            ไว้วางใจผลิตภัณฑ์ที่ทดสอบตามเกณฑ์มาตรฐานแห่งชาติ
          </li>
          <li>
            <strong>การจัดซื้อที่ดีขึ้น —</strong> เพิ่มคุณสมบัติในการประมูลของรัฐบาล
            สถาบัน และเชิงพาณิชย์ปริมาณมาก
          </li>
          <li>
            <strong>ชื่อเสียงแบรนด์ที่แข็งแกร่งขึ้น —</strong> แสดงความมุ่งมั่นต่อคุณภาพ
            สรีรศาสตร์ และความน่าเชื่อถือของผลิตภัณฑ์ในระยะยาว
          </li>
          <li>
            <strong>การควบคุมคุณภาพที่ดีขึ้น —</strong> ส่งเสริมระบบ QC ที่มีโครงสร้าง
            การติดตามย้อนกลับ และมาตรฐานการผลิตที่สม่ำเสมอ
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไประหว่างการรับรอง BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การตีความทางเทคนิค —</strong> การแมปข้อ IS 17631:2022
            กับการออกแบบ กลไก และรุ่นเก้าอี้เฉพาะอาจซับซ้อน
          </li>
          <li>
            <strong>การทดสอบล้มเหลว —</strong> โครงอ่อนแอ ความเสถียรไม่ดี
            หรือปัญหากลไกมักนำไปสู่การไม่ผ่านการทดสอบการพลิกคว่ำหรือโหลด
          </li>
          <li>
            <strong>ช่องว่างเอกสาร —</strong> แบบร่างไม่ตรงกัน บันทึก QC ไม่สมบูรณ์
            หรือคำประกาศขาดหายมักทำให้การอนุมัติล่าช้า
          </li>
          <li>
            <strong>การปฏิบัติตามโรงงาน —</strong> การควบคุมการผลิต การติดตามย้อนกลับ
            และการทดสอบภายในอาจต้องปรับปรุงก่อนออกใบอนุญาต
          </li>
          <li>
            <strong>การประสานงานด้านกฎระเบียบ —</strong> การจัดให้การทดสอบห้องปฏิบัติการ
            การตรวจสอบ BIS และคำถามติดตามใช้เวลาโดยไม่มีผู้เชี่ยวชาญสนับสนุน
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือก Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India เป็นที่ปรึกษาด้านการปฏิบัติตามกฎระเบียบ
          ที่ช่วยเหลือผู้ผลิต ผู้นำเข้า ผู้ส่งออก และธุรกิจในการได้รับ
          การรับรองและการอนุมัติต่างๆ ที่จำเป็นสำหรับตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ทีมของเราให้ความช่วยเหลือแบบครบวงจรสำหรับการรับรอง BIS ของเก้าอี้ทำงาน
          ภายใต้ IS 17631:2022
        </p>

        <h3 className={SUB_HEADING_CLASS}>บริการของเรารวมถึง</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>การประเมินความเกี่ยวข้องของผลิตภัณฑ์ —</strong> เรายืนยันว่า
            เก้าอี้ทำงานของคุณอยู่ภายใต้ IS 17631:2022 และ QCO ที่เกี่ยวข้อง
          </li>
          <li>
            <strong>ที่ปรึกษาการปฏิบัติตาม BIS —</strong> คำแนะนำจากผู้เชี่ยวชาญ
            เกี่ยวกับเส้นทางการรับรอง ข้อผูกพัน และข้อกำหนดมาตรฐาน
          </li>
          <li>
            <strong>ความช่วยเหลือด้านเอกสาร —</strong> การจัดเตรียม ตรวจสอบ
            และจัดระเบียบบันทึกใบสมัคร BIS และโรงงานทั้งหมด
          </li>
          <li>
            <strong>การประสานงานการทดสอบ —</strong> การสนับสนุนแบบครบวงจร
            สำหรับการส่งตัวอย่างและการทดสอบในห้องปฏิบัติการที่ได้รับการยอมรับ
          </li>
          <li>
            <strong>การสนับสนุนการตรวจสอบโรงงาน —</strong> การตรวจสอบความพร้อม
            สำหรับการประเมินโรงงาน BIS และการตรวจสอบการปฏิบัติตาม
          </li>
          <li>
            <strong>การจัดการใบสมัคร —</strong> ดูแลการยื่น BIS การติดตาม
            และการสื่อสารด้านกฎระเบียบในนามของคุณ
          </li>
          <li>
            <strong>การสนับสนุนหลังการรับรอง —</strong> ความช่วยเหลืออย่างต่อเนื่อง
            เกี่ยวกับการเฝ้าระวัง กฎการทำเครื่องหมาย และการรักษาใบอนุญาต
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS สำหรับเก้าอี้ทำงานภายใต้ IS 17631:2022
          มีบทบาทสำคัญในการรับประกันคุณภาพ ความปลอดภัย ความทนทาน ความเสถียร
          และประสิทธิภาพด้านสรีรศาสตร์ของผลิตภัณฑ์ที่นั่งทำงาน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยการได้รับการรับรอง BIS และใช้เครื่องหมาย ISI
          ผู้ผลิตสามารถแสดงความสอดคล้องกับมาตรฐานอินเดีย เสริมความมั่นใจของลูกค้า
          เพิ่มความน่าเชื่อถือของผลิตภัณฑ์ และสนับสนุนการเติบโตทางธุรกิจในระยะยาว
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ไม่ว่าคุณจะเป็นผู้ผลิตอินเดียหรือผู้ผลิตต่างประเทศที่ต้องการเข้าถึงตลาดอินเดีย
          การทำความเข้าใจข้อกำหนดของ IS 17631:2022 เป็นขั้นตอนสำคัญ
          สู่การปฏิบัติตามกฎระเบียบและความสำเร็จในตลาด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากคุณวางแผนจะรับการรับรอง BIS สำหรับเก้าอี้ทำงานภายใต้ IS 17631:2022
          Sun Certifications India สามารถช่วยทำให้กระบวนการง่ายขึ้น
          ผ่านคำแนะนำด้านกฎระเบียบจากผู้เชี่ยวชาญและการสนับสนุนการปฏิบัติตามแบบครบวงจร
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับเก้าอี้ทำงาน (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. การรับรอง BIS สำหรับเก้าอี้ทำงานคืออะไร?</strong>
              <br />
              การรับรอง BIS ยืนยันว่าเก้าอี้ทำงานเป็นไปตามข้อกำหนดของ IS 17631:2022
              และข้อกำหนดการรับรองที่เกี่ยวข้อง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. IS 17631:2022 คืออะไร?</strong>
              <br />
              IS 17631:2022 เป็นมาตรฐานอินเดียที่กำหนดข้อกำหนดสำหรับเก้าอี้ทำงาน
              รวมถึงความปลอดภัย ความแข็งแรง ความเสถียร ความทนทาน
              และข้อพิจารณาด้านสรีรศาสตร์
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. การรับรอง BIS บังคับสำหรับเก้าอี้ทำงานหรือไม่?</strong>
              <br />
              เก้าอี้ทำงานที่อยู่ภายใต้กรอบกฎระเบียบที่เกี่ยวข้อง
              ต้องปฏิบัติตามข้อกำหนดการรับรอง BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. เครื่องหมาย ISI คืออะไร?</strong>
              <br />
              เครื่องหมาย ISI เป็นเครื่องหมายรับรองมาตรฐานที่ออกภายใต้
              แผนการรับรองผลิตภัณฑ์ BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ใครสามารถสมัครการรับรอง BIS ได้?</strong>
              <br />
              ทั้งผู้ผลิตอินเดียและผู้ผลิตต่างประเทศสามารถสมัครได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. การรับรอง BIS ต้องมีการทดสอบผลิตภัณฑ์หรือไม่?</strong>
              <br />
              ใช่ การทดสอบผลิตภัณฑ์เป็นส่วนสำคัญของกระบวนการรับรอง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. เก้าอี้ทำงานนำเข้าต้องมีการรับรอง BIS หรือไม่?
              </strong>
              <br />
              ผลิตภัณฑ์ที่ครอบคลุมภายใต้ข้อกำหนดการรับรองบังคับ
              ต้องปฏิบัติตามกฎระเบียบ BIS ที่เกี่ยวข้องก่อนจัดหาในอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. มีการทดสอบอะไรบ้างภายใต้ IS 17631:2022?</strong>
              <br />
              มาตรฐานรวมการประเมินเช่น การตรวจสอบการออกแบบและฝีมือ
              การตรวจสอบขนาด การทดสอบความเสถียร และการทดสอบโหลดคงที่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ทำไมการออกแบบสรีรศาสตร์จึงสำคัญสำหรับเก้าอี้ทำงาน?</strong>
              <br />
              การออกแบบสรีรศาสตร์ช่วยเพิ่มความสะดวกสบายของผู้ใช้ สนับสนุนท่าทางที่เหมาะสม
              และส่งเสริมประสบการณ์การทำงานที่ดีขึ้น
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India ช่วยได้อย่างไร?</strong>
              <br />
              Sun Certifications India ให้ความช่วยเหลือด้านการประเมินความเกี่ยวข้อง
              เอกสาร การประสานงานการทดสอบ การเตรียมการตรวจสอบ
              การจัดการใบสมัคร และการสนับสนุนการปฏิบัติตาม
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับเก้าอี้ทำงาน - IS 17631:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> ใบรับรอง ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">ใบรับรอง BIS สำหรับผู้ผลิตต่างประเทศ</a>
          </li>
        </ul>

        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={4} />
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
