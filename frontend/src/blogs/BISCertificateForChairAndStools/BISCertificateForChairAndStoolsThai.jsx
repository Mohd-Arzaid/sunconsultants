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
  const title = "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง | IS 17632:2022 ใบอนุญาต BIS";
  const ogTitle = "การรับรอง BIS สำหรับเก้าอี้และม้านั่ง – คู่มือ IS 17632:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับเก้าอี้และม้านั่ง | IS 17632:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเก้าอี้และม้านั่งตาม IS 17632:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับเก้าอี้และม้านั่งตาม IS 17632:2022 รู้จักกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเก้าอี้และม้านั่งตาม IS 17632:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง, ใบอนุญาต BIS สำหรับเก้าอี้และม้านั่ง, IS 17632:2022, การรับรอง BIS สำหรับเก้าอี้และม้านั่ง";
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
                    ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง – IS 17632:2022
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
          ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไป – คู่มือฉบับสมบูรณ์ IS
          17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="ใบอนุญาต BIS สำหรับเก้าอี้และม้านั่ง"
            alt="ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง - การรับรอง BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปเป็นข้อกำหนดบังคับตาม
          มาตรฐานอินเดีย IS 17632:2022 มาตรฐานนี้อธิบายข้อกำหนดด้านความปลอดภัย
          ความทนทาน และประสิทธิภาพสำหรับเก้าอี้และม้านั่งที่ใช้ในบ้าน สำนักงาน
          พื้นที่เชิงพาณิชย์ สถาบันการศึกษา โรงอาหาร ร้านอาหาร โรงแรม และ
          สถานที่สาธารณะ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้และม้านั่งเป็นหนึ่งในรายการเฟอร์นิเจอร์ที่ใช้มากที่สุดและถูก
          สัมผัสกับน้ำหนัก การเคลื่อนไหว และความเครียดซ้ำๆ
          เก้าอี้หรือม้านั่งที่มีโครงสร้างอ่อนแออาจพังทลายกะทันหัน
          ส่งผลให้เกิดการบาดเจ็บ เพื่อป้องกันอันตรายดังกล่าวและรับประกันความ
          ปลอดภัยของผู้บริโภค สำนักงานมาตรฐานอินเดีย (BIS)
          กำหนดให้ผู้ผลิตและผู้นำเข้าทุกคนต้องได้รับใบรับรอง BIS สำหรับเก้าอี้
          และม้านั่งก่อนขายในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หน้านี้ให้คำแนะนำฉบับสมบูรณ์เกี่ยวกับการรับรอง BIS สำหรับเก้าอี้และ
          ม้านั่งตาม IS 17632:2022 รวมถึงกระบวนการรับรอง เอกสารที่ต้องการ
          ข้อกำหนดการทดสอบ ค่าธรรมเนียม ความท้าทาย โทษ และประโยชน์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นระบบการปฏิบัติตามผลิตภัณฑ์ที่ควบคุมโดย
          สำนักงานมาตรฐานอินเดีย ซึ่งเป็นองค์กรมาตรฐานแห่งชาติของอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบรับรอง BIS รับประกันว่าผลิตภัณฑ์:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เป็นไปตามมาตรฐานความปลอดภัยและคุณภาพของอินเดีย</li>
          <li>ผ่านการทดสอบในห้องปฏิบัติการที่ BIS อนุมัติ</li>
          <li>ได้รับการตรวจสอบโรงงาน</li>
          <li>ปกป้องผู้บริโภคจากผลิตภัณฑ์ที่ไม่ปลอดภัยหรือคุณภาพต่ำ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลิตภัณฑ์ที่รับรองแสดงเครื่องหมาย ISI
          แสดงการปฏิบัติตามมาตรฐานอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐานที่ใช้ – IS 17632:2022 สำหรับเก้าอี้และม้านั่ง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐาน BIS สำหรับเก้าอี้และม้านั่งคือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – เก้าอี้และม้านั่งทั่วไป:
          ข้อกำหนดด้านความปลอดภัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุมเก้าอี้และม้านั่งที่ไม่เฉพาะเจาะจงทั้งหมดที่ใช้สำหรับ
          วัตถุประสงค์ในการนั่งในบ้าน สำนักงาน สภาพแวดล้อมเชิงพาณิชย์ สถานที่
          สาธารณะ และการตั้งค่าสถาบัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลิตภัณฑ์ที่ครอบคลุมภายใต้ IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เก้าอี้ทั่วไป</li>
          <li>เก้าอี้รับประทานอาหาร</li>
          <li>เก้าอี้สำหรับผู้เยี่ยมชมสำนักงาน</li>
          <li>เก้าอี้เรียน</li>
          <li>เก้าอี้โรงอาหาร</li>
          <li>เก้าอี้ร้านอาหาร</li>
          <li>เก้าอี้ห้องประชุม</li>
          <li>เก้าอี้พื้นที่รอ</li>
          <li>เก้าอี้ไม้</li>
          <li>เก้าอี้โลหะ</li>
          <li>เก้าอี้พลาสติก (ไม่เฉพาะเจาะจง)</li>
          <li>ม้านั่งทั่วไป</li>
          <li>ม้านั่งบาร์</li>
          <li>ม้านั่งรับประทานอาหาร</li>
          <li>ม้านั่งขั้นบันได (ภายในเกณฑ์ที่กำหนด)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          พารามิเตอร์ความปลอดภัยและประสิทธิภาพหลัก
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 ประเมิน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความแข็งแรงของโครงสร้าง</li>
          <li>ความเสถียร</li>
          <li>ความทนทานภายใต้การใช้งานซ้ำ</li>
          <li>ความแข็งแรงของที่นั่ง</li>
          <li>ประสิทธิภาพของพนักพิง</li>
          <li>ความต้านทานแรงกระแทกของขา</li>
          <li>ความแข็งแรงของข้อต่อ</li>
          <li>คุณภาพการตกแต่งพื้นผิว</li>
          <li>ความปลอดภัยของขอบและมุม</li>
          <li>คุณภาพวัสดุ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้และม้านั่งทั้งหมดที่ขายในอินเดียต้องเป็นไปตามพารามิเตอร์เหล่านี้
          และได้รับใบอนุญาต BIS สำหรับเก้าอี้และม้านั่ง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงเป็นข้อกำหนดสำหรับเก้าอี้และม้านั่ง?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้และม้านั่งรองรับน้ำหนักของมนุษย์และถูกใช้บ่อยในทุกสภาพแวดล้อม
          ความล้มเหลวของโครงสร้างอาจนำไปสู่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เก้าอี้พังทลาย</li>
          <li>ขาแตกหัก</li>
          <li>ที่นั่งแตกร้าว</li>
          <li>ความล้มเหลวของพนักพิง</li>
          <li>การบาดเจ็บเนื่องจากขอบคม</li>
          <li>ความไม่เสถียรที่นำไปสู่การล้ม</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ของการรับรอง BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รับประกันผลิตภัณฑ์ที่นั่งที่ปลอดภัย</li>
          <li>ป้องกันอุบัติเหตุและการบาดเจ็บ</li>
          <li>ปรับปรุงความทนทานของผลิตภัณฑ์</li>
          <li>ป้องกันการนำเข้าที่มีคุณภาพต่ำ</li>
          <li>สร้างคุณภาพตลาดที่สม่ำเสมอ</li>
          <li>เพิ่มความมั่นใจของลูกค้า</li>
          <li>บังคับตามกฎหมายอินเดีย (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โดยไม่มีการรับรอง BIS ผู้ผลิตไม่สามารถขายเก้าอี้หรือม้านั่งในอินเดีย
          ตามกฎหมายได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเก้าอี้และม้านั่ง (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการ BIS ตามแผนการรับรองเครื่องหมาย ISI ซึ่งเกี่ยวข้องกับการ
          ทดสอบ การตรวจสอบ และการยืนยันการสมัคร
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุประเภทผลิตภัณฑ์และมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ยืนยันว่าเก้าอี้/ม้านั่งอยู่ภายใต้ IS 17632:2022
          ระบุรูปแบบการออกแบบและวัสดุที่ใช้
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – ส่งใบสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบสมัครถูกยื่นผ่านพอร์ทัลออนไลน์ BIS Manak โดยต้องมี:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดผู้ผลิต</li>
          <li>ข้อมูลโรงงาน</li>
          <li>ข้อกำหนดผลิตภัณฑ์</li>
          <li>รายละเอียดแบรนด์/เครื่องหมายการค้า</li>
          <li>ขั้นตอนการทำงานของกระบวนการผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – จ่ายค่าธรรมเนียมการรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">ค่าธรรมเนียมรวม:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบตัวอย่าง</li>
          <li>ค่าธรรมเนียมการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การทดสอบผลิตภัณฑ์ตาม IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบบังคับดำเนินการในห้องปฏิบัติการที่ BIS รับรอง
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          การทดสอบรวมถึง:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบความเสถียร</li>
          <li>การทดสอบความแข็งแรงของที่นั่ง</li>
          <li>การทดสอบความทนทานของพนักพิง</li>
          <li>การทดสอบการโหลดขาไปข้างหน้า/ด้านข้าง/หลัง</li>
          <li>การทดสอบแรงกระแทกที่นั่ง</li>
          <li>การทดสอบการตก</li>
          <li>การทดสอบความล้า</li>
          <li>การทดสอบการตกแต่งพื้นผิว</li>
          <li>การทดสอบขอบคม</li>
          <li>ความทนทานของโครงสร้างภายใต้รอบซ้ำ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ผลการทดสอบต้องแสดงการปฏิบัติตาม IS 17632:2022 อย่างเต็มที่
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงานโดย BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS เยี่ยมชมโรงงานเพื่อประเมิน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิต</li>
          <li>การตรวจสอบวัตถุดิบ</li>
          <li>ขั้นตอนการควบคุมคุณภาพ</li>
          <li>ความสามารถในการทดสอบ</li>
          <li>การปรับเทียบอุปกรณ์</li>
          <li>ปริมาณการผลิต</li>
          <li>การปฏิบัติตามแผนการทดสอบและการตรวจสอบ BIS (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การออกใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หากการทดสอบและการตรวจสอบสำเร็จ BIS จะออก:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS (ใบอนุญาตเครื่องหมาย ISI)</li>
          <li>หมายเลข CML</li>
          <li>การอนุมัติให้ติดเครื่องหมาย ISI บนเก้าอี้และม้านั่ง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – ภาระผูกพันหลังใบอนุญาต
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใช้เครื่องหมาย ISI ตามข้อกำหนดการติดฉลาก BIS</li>
          <li>รักษาบันทึกการควบคุมคุณภาพ</li>
          <li>ผ่านการตรวจสอบการเฝ้าระวัง BIS เป็นประจำ</li>
          <li>ต่ออายุใบอนุญาตทุก 1–2 ปี</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับเก้าอี้และม้านั่ง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้ครอบคลุมข้อกำหนดสำหรับเก้าอี้และม้านั่งทั่วไป
          มาตรฐานนี้ใช้กับเก้าอี้และม้านั่งทั่วไปที่ผลิต/สร้างเสร็จสมบูรณ์
          ยังใช้กับหน่วยที่พร้อมประกอบ ในกรณีนั้นข้อกำหนดของมาตรฐานนี้จะ
          ใช้กับหน่วยที่ประกอบแล้ว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่ต้องการสำหรับการรับรอง BIS ของเก้าอี้และม้านั่ง
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบอนุญาต/การลงทะเบียนโรงงาน</li>
          <li>แผนภาพการไหลของกระบวนการผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบภายใน</li>
          <li>ใบรับรองการปรับเทียบ</li>
          <li>แผนผังโรงงานและแผนผังพื้น</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ภาพวาดเก้าอี้/ม้านั่ง</li>
          <li>ขนาดและข้อกำหนด</li>
          <li>รายการวัสดุ</li>
          <li>คำอธิบายคุณสมบัติความปลอดภัย</li>
          <li>รายงานการทดสอบคุณภาพภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานตัวตนและที่อยู่</li>
          <li>จดหมายอนุญาตแบรนด์</li>
          <li>ใบรับรองเครื่องหมายการค้า (ไม่บังคับ)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัคร</li>
          <li>แบบฟอร์มคำขอทดสอบ</li>
          <li>แบบฟอร์มการประกาศ</li>
          <li>จดหมายอนุญาต</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับเก้าอี้และม้านั่ง (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 รวมการทดสอบทางกล โครงสร้าง และความปลอดภัยอย่างกว้างขวาง
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำไปข้างหน้าและการพลิกคว่ำด้านข้างสำหรับเก้าอี้
                  ที่ไม่มีแขน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำไปข้างหลัง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำด้านข้างสำหรับเก้าอี้ที่มีแขน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ม้านั่ง/โพฟ (ทุกทิศทาง)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความแข็งแรง
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบเหล่านี้รับประกันการใช้งานประจำวันที่ปลอดภัยภายใต้สภาวะ
          จริง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>เก้าอี้ล้มเหลวในการทดสอบความเสถียร</strong>
            <br />
            เกิดขึ้นเนื่องจากการกระจายน้ำหนักที่ไม่เหมาะสม
            <br />
            แก้ไข: ปรับปรุงการออกแบบขา ขยายพื้นที่ฐาน
          </li>
          <li>
            <strong>ข้อต่ออ่อนแอที่ทำให้การทดสอบล้มเหลว</strong>
            <br />
            แก้ไข: ใช้วัสดุเสริมและตัวเชื่อมต่อที่ดีกว่า
          </li>
          <li>
            <strong>อุปกรณ์ทดสอบภายในไม่เพียงพอ</strong>
            <br />
            แก้ไข: ติดตั้งเครื่องมือที่สอดคล้องกับ BIS ที่ต้องการ
          </li>
          <li>
            <strong>ความไม่สอดคล้องของเอกสาร</strong>
            <br />
            แก้ไข: เตรียมเอกสารอย่างเป็นระบบก่อนสมัคร
          </li>
          <li>
            <strong>รูปแบบผลิตภัณฑ์ไม่ได้แมปอย่างถูกต้อง</strong>
            <br />
            แก้ไข: จัดกลุ่มผลิตภัณฑ์ตามโครงสร้างและพารามิเตอร์การทดสอบ
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับเก้าอี้และม้านั่ง
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>อนุญาตตามกฎหมายให้ขายในอินเดีย</li>
          <li>ปรับปรุงความปลอดภัยของผลิตภัณฑ์</li>
          <li>เพิ่มความไว้วางใจของลูกค้า</li>
          <li>ลดความเสี่ยงความรับผิดชอบของผลิตภัณฑ์</li>
          <li>จำเป็นสำหรับรายการอีคอมเมิร์ซ</li>
          <li>จำเป็นสำหรับการประมูลของรัฐบาล</li>
          <li>ความน่าเชื่อถือของแบรนด์ที่สูงขึ้น</li>
          <li>ข้อได้เปรียบในการแข่งขัน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายเก้าอี้หรือม้านั่งโดยไม่มีการรับรอง BIS อาจนำไปสู่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับทางเงินที่หนัก</li>
          <li>การเรียกคืน/ยึดผลิตภัณฑ์</li>
          <li>การยกเลิกใบอนุญาตโรงงาน</li>
          <li>การดำเนินคดีทางอาญา</li>
          <li>ข้อจำกัดการนำเข้า</li>
          <li>การขึ้นบัญชีดำตลาด</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โทษถูกบังคับใช้ภายใต้พระราชบัญญัติ BIS พ.ศ. 2559
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับเก้าอี้และม้านั่ง?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          บังคับสำหรับ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศที่ส่งออกไปยังอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>เจ้าของแบรนด์/ผู้ค้า</li>
          <li>ซัพพลายเออร์ OEM/ODM</li>
          <li>ห่วงโซ่ค้าปลีก</li>
          <li>ผู้ขายออนไลน์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละโรงงานต้องการใบอนุญาต BIS แยกต่างหาก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเก้าอี้และม้านั่งทั่วไปตาม IS 17632:2022
          เป็นข้อกำหนดบังคับสำหรับการรับประกันความปลอดภัยของผลิตภัณฑ์
          ความเสถียรของโครงสร้าง และความทนทาน
          การรับรอง BIS ไม่เพียงช่วยให้ผู้ผลิตรักษามาตรฐานคุณภาพสูงเท่านั้น
          แต่ยังเปิดโอกาสการเข้าถึงตลาดตามกฎหมายและเพิ่มความมั่นใจของผู้บริโภค
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยความช่วยเหลือจากผู้เชี่ยวชาญ กระบวนการรับรอง—ตั้งแต่การทดสอบ
          ไปจนถึงการตรวจสอบและการอนุมัติ—จะราบรื่น คาดการณ์ได้ และปฏิบัติตาม
          อย่างเต็มที่
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – ใบรับรอง BIS สำหรับเก้าอี้และม้านั่ง
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS เป็นข้อกำหนดบังคับสำหรับเก้าอี้และม้านั่งหรือไม่?
              </strong>
              <br />
              ใช่ ตาม IS 17632:2022 เก้าอี้และม้านั่งทั่วไปทั้งหมดต้องได้รับ
              การรับรอง BIS ก่อนขายในอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ต้องทดสอบอะไรบ้าง?</strong>
              <br />
              การทดสอบความเสถียร ความแข็งแรง ความทนทาน แรงกระแทก ความล้า และ
              ความปลอดภัยของวัสดุ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. การรับรอง BIS ใช้เวลานานเท่าไร?</strong>
              <br />
              โดยทั่วไป 30–45 วัน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ต้นทุนการรับรองคือเท่าไร?</strong>
              <br />
              ประมาณ ₹60,000–₹1,30,000 ขึ้นอยู่กับการทดสอบและการตรวจสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ผู้ผลิตต่างประเทศสามารถสมัครได้หรือไม่?</strong>
              <br />
              ใช่ ภายใต้แผน FMCS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. การทำเครื่องหมาย ISI เป็นข้อกำหนดบังคับหรือไม่?</strong>
              <br />
              ใช่ หลังจากออกใบอนุญาต BIS แล้ว
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ทำไมเก้าอี้จึงล้มเหลวในการทดสอบ BIS?</strong>
              <br />
              สาเหตุทั่วไปรวมถึงขาอ่อนแอ ความแข็งแรงของข้อต่อต่ำ และความไม่
              เสถียร
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. สามารถครอบคลุมหลายรุ่นภายใต้ใบอนุญาตเดียวได้หรือไม่?
              </strong>
              <br />
              เฉพาะเมื่อเป็นไปตามเกณฑ์ความคล้ายคลึงและการปฏิบัติตามมาตรฐาน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. ต้องมีการตรวจสอบโรงงานหรือไม่?</strong>
              <br />
              ใช่ เป็นข้อกำหนดบังคับสำหรับการรับรองเครื่องหมาย ISI
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ต้องใช้เอกสารอะไรบ้าง?</strong>
              <br />
              ใบอนุญาตโรงงาน ข้อกำหนดทางเทคนิค รายการเครื่องจักร แผน QC
              ภาพวาดผลิตภัณฑ์ ฯลฯ
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

