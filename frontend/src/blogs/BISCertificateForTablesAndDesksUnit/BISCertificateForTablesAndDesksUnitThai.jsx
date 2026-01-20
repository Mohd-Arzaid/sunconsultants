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

const BISCertificateForTablesAndDesksUnitThai = () => {
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

export default BISCertificateForTablesAndDesksUnitThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน | IS 17633:2022 ใบอนุญาต BIS";
  const ogTitle = "การรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน – IS 17633:2022 คู่มือ";
  const twitterTitle = "ใบอนุญาต BIS สำหรับโต๊ะและโต๊ะทำงาน | IS 17633:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงานภายใต้ IS 17633:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับโต๊ะและโต๊ะทำงานตาม IS 17633:2022 รู้กระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงานภายใต้ IS 17633:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน, ใบอนุญาต BIS สำหรับโต๊ะและโต๊ะทำงาน, IS 17633:2022, การรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/to-lae-to-ngan-is-17633";
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
                    ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน – IS 17633:2022
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
          ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน – คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="ใบอนุญาต BIS สำหรับโต๊ะและโต๊ะทำงาน"
            alt="ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน - IS 17633:2022 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงานเป็นข้อกำหนดบังคับสำหรับผู้ผลิต ผู้นำเข้า และผู้ขายโต๊ะและโต๊ะทำงานทั้งหมดในอินเดีย ภายใต้มาตรฐานอินเดีย IS 17633:2022 – โต๊ะและโต๊ะทำงาน: ข้อกำหนดด้านความปลอดภัย เฟอร์นิเจอร์เหล่านี้ต้องได้รับการทดสอบและรับรองโดยสำนักงานมาตรฐานอินเดีย (BIS) ก่อนที่จะสามารถขายได้อย่างถูกกฎหมายในตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          โต๊ะและโต๊ะทำงานเป็นส่วนประกอบสำคัญของบ้าน สำนักงาน โรงเรียน มหาวิทยาลัย พื้นที่เชิงพาณิชย์ สภาพแวดล้อมการต้อนรับ และสถานที่ทำงานในอุตสาหกรรม เนื่องจากมักรองรับน้ำหนัก การกระแทก และการใช้งานอย่างต่อเนื่อง ความแข็งแรงของโครงสร้างและความปลอดภัยจึงมีความสำคัญ เพื่อให้แน่ใจในการปกป้องผู้บริโภคและความน่าเชื่อถือของผลิตภัณฑ์ BIS จึงกำหนดให้มีการรับรองบังคับ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบาย IS 17633:2022 กระบวนการลงทะเบียน BIS การทดสอบ เอกสารที่จำเป็น ค่าธรรมเนียม ระยะเวลา โทษ และประโยชน์สำหรับผู้ผลิตและผู้นำเข้า
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นกระบวนการปฏิบัติตามกฎระเบียบที่ดำเนินการโดยสำนักงานมาตรฐานอินเดีย ซึ่งเป็นหน่วยงานมาตรฐานแห่งชาติของอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS ยืนยันว่าผลิตภัณฑ์เป็นไปตามข้อกำหนดด้านความปลอดภัย คุณภาพ ประสิทธิภาพ และความทนทานที่กำหนดโดยมาตรฐานอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ของการรับรอง BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รับประกันความปลอดภัยของผู้บริโภค</li>
          <li>สนับสนุนการผลิตคุณภาพสูง</li>
          <li>ลดความเสี่ยงของความล้มเหลวของผลิตภัณฑ์</li>
          <li>เพิ่มการยอมรับในตลาด</li>
          <li>เป็นข้อกำหนดทางกฎหมายภายใต้คำสั่งควบคุมคุณภาพ BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เมื่อได้รับการอนุมัติแล้ว ผลิตภัณฑ์จะติดเครื่องหมาย BIS (เครื่องหมาย ISI) พร้อมกับหมายเลขใบอนุญาต
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐานอินเดียใดที่ใช้กับโต๊ะและโต๊ะทำงาน? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐาน BIS ที่ใช้ได้คือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – โต๊ะและโต๊ะทำงาน: ข้อกำหนดด้านความปลอดภัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้นิยามข้อกำหนดด้านประสิทธิภาพ ความปลอดภัยของโครงสร้าง และความทนทานสำหรับโต๊ะและโต๊ะทำงานทุกประเภทที่ใช้ในสภาพแวดล้อมที่อยู่อาศัย เชิงพาณิชย์ การต้อนรับ และสถาบัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลิตภัณฑ์ที่ครอบคลุม
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>โต๊ะทำงานสำนักงาน</li>
          <li>โต๊ะคอมพิวเตอร์</li>
          <li>โต๊ะเรียน</li>
          <li>โต๊ะอาหาร</li>
          <li>โต๊ะกาแฟ</li>
          <li>โต๊ะทำงาน</li>
          <li>โต๊ะฝึกอบรม</li>
          <li>โต๊ะโรงเรียน/วิทยาลัย</li>
          <li>โต๊ะครู</li>
          <li>โต๊ะสถานีทำงานแบบโมดูลาร์</li>
          <li>โต๊ะเขียน</li>
          <li>โต๊ะประชุม/การประชุม</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          พารามิเตอร์ความปลอดภัยหลักภายใต้ IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความเสถียรของโครงสร้าง</li>
          <li>ความสามารถในการรับน้ำหนัก</li>
          <li>ความต้านทานการกระแทก</li>
          <li>ประสิทธิภาพแรงแนวนอน/แนวตั้ง</li>
          <li>คุณภาพการตกแต่งพื้นผิว</li>
          <li>ความปลอดภัยของขอบ</li>
          <li>ความทนทานภายใต้การใช้งานซ้ำ</li>
          <li>ความปลอดภัยของวัสดุ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โต๊ะหรือโต๊ะทำงานทุกตัวที่ขายในอินเดียต้องเป็นไปตามพารามิเตอร์เหล่านี้ผ่านการลงทะเบียน BIS สำหรับโต๊ะและโต๊ะทำงาน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงเป็นข้อกำหนดบังคับสำหรับโต๊ะและโต๊ะทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          โต๊ะและโต๊ะทำงานเป็นเฟอร์นิเจอร์ที่ใช้งานสูงที่พบในบ้าน สำนักงาน โรงเรียน และพื้นที่สาธารณะ ความล้มเหลวของโครงสร้างอาจทำให้เกิดอุบัติเหตุ เช่น:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทรุดตัวภายใต้น้ำหนัก</li>
          <li>การบาดเจ็บจากขอบคม</li>
          <li>ความไม่เสถียรระหว่างการใช้งาน</li>
          <li>การแตกหักของข้อต่อ</li>
          <li>การหลุดของพื้นผิว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          เพื่อหลีกเลี่ยงอันตรายเหล่านี้ การรับรอง BIS รับประกันว่า:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การออกแบบและก่อสร้างที่ปลอดภัย</li>
          <li>การปฏิบัติตามข้อกำหนดการรับน้ำหนักของโครงสร้าง</li>
          <li>ประสิทธิภาพที่ทนทาน</li>
          <li>การป้องกันการล้มและการทรุดตัว</li>
          <li>การเลือกวัสดุคุณภาพสูง</li>
          <li>มาตรฐานตลาดที่สม่ำเสมอ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การขายโต๊ะและโต๊ะทำงานโดยไม่มีใบอนุญาต BIS สำหรับโต๊ะและโต๊ะทำงานเป็นสิ่งผิดกฎหมายในอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการรับรอง BIS ตามแผน ISI (แผนการประเมินความสอดคล้อง-I) ซึ่งรวมถึงการทดสอบผลิตภัณฑ์และการตรวจสอบโรงงาน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุหมวดหมู่ผลิตภัณฑ์และมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ยืนยันว่าโต๊ะ/โต๊ะทำงานอยู่ภายใต้ IS 17633:2022 ระบุจำนวนรูปแบบและวัสดุ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – ยื่นคำขอ BIS (การส่งออนไลน์)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          กรอกใบสมัครในพอร์ทัลออนไลน์ BIS Manak ด้วย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดผู้ผลิต</li>
          <li>ที่อยู่โรงงาน</li>
          <li>ข้อมูลจำเพาะของผลิตภัณฑ์</li>
          <li>รายละเอียดเครื่องหมายการค้า</li>
          <li>ระบบควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – การชำระค่าธรรมเนียมการรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">รวมถึง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบผลิตภัณฑ์</li>
          <li>ค่าธรรมเนียมการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การทดสอบตัวอย่างในห้องปฏิบัติการที่รับรองโดย BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผลิตภัณฑ์ต้องผ่านการทดสอบเต็มรูปแบบตามที่กำหนดไว้ใน IS 17633:2022
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          การทดสอบที่ดำเนินการ
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบความเสถียร</li>
          <li>การทดสอบความแข็งแรง (โหลดคงที่)</li>
          <li>การทดสอบความทนทาน (โหลดซ้ำ)</li>
          <li>การทดสอบการกระแทก</li>
          <li>การวัดการโก่งตัว</li>
          <li>การทดสอบความปลอดภัยของขอบและพื้นผิว</li>
          <li>การทดสอบโหลดพื้นที่ทำงาน</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ห้องปฏิบัติการอัปโหลดรายงานการทดสอบโดยตรงไปยัง BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงาน BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS เยี่ยมชมสถานที่ผลิตเพื่อตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ระบบการจัดการคุณภาพ</li>
          <li>ความสามารถในการทดสอบภายใน</li>
          <li>การควบคุมวัตถุดิบ</li>
          <li>สายการผลิตและเครื่องจักร</li>
          <li>การสอบเทียบเครื่องมือ</li>
          <li>การปฏิบัติตาม STI (แผนการทดสอบและการตรวจสอบ)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การอนุมัติใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS ออก:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS</li>
          <li>การอนุมัติเครื่องหมาย ISI</li>
          <li>หมายเลขใบอนุญาต CML ที่ไม่ซ้ำกัน</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          หลังจากนี้ ผู้ผลิตสามารถทำเครื่องหมายและขายโต๊ะ/โต๊ะทำงานได้อย่างถูกกฎหมายในอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – การปฏิบัติตามหลังใบอนุญาต
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รักษาบันทึกตาม STI</li>
          <li>ใช้เครื่องหมาย ISI อย่างถูกต้อง</li>
          <li>อนุญาตให้มีการตรวจสอบ BIS เป็นระยะ</li>
          <li>ต่ออายุใบอนุญาตทุก 1-2 ปี</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับโต๊ะและโต๊ะทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> มาตรฐานนี้ครอบคลุมข้อกำหนดที่เกี่ยวข้องกับประสิทธิภาพและความปลอดภัย นั่นคือ ความแข็งแรง ความเสถียร และความทนทานของโต๊ะและโต๊ะทำงานที่จะใช้ในท่าทางนั่งและ/หรือยืน ใช้โดยผู้ใหญ่
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> มาตรฐานนี้ใช้กับโต๊ะและโต๊ะทำงานที่ผลิต/สร้างเสร็จสมบูรณ์แล้ว ยังใช้กับหน่วยที่พร้อมประกอบ ในกรณีนั้นข้อกำหนดของมาตรฐานนี้จะใช้กับหน่วยที่ประกอบแล้ว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของโต๊ะและโต๊ะทำงาน
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบอนุญาตโรงงาน</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบ</li>
          <li>ใบรับรองการสอบเทียบ</li>
          <li>ผังโรงงาน</li>
          <li>แผนผังกระบวนการ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบแปลนโต๊ะ/โต๊ะทำงาน</li>
          <li>รายการวัสดุ</li>
          <li>ข้อมูลจำเพาะของผลิตภัณฑ์</li>
          <li>รายงานการทดสอบคุณภาพภายใน</li>
          <li>รูปภาพ/วิดีโอของผลิตภัณฑ์</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานตัวตนของผู้ลงนามที่ได้รับอนุญาต</li>
          <li>หลักฐานที่อยู่</li>
          <li>จดหมายอนุญาตแบรนด์</li>
          <li>ใบรับรองการจดทะเบียนเครื่องหมายการค้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัครที่กรอกแล้ว</li>
          <li>คำรับรองของผู้ผลิต</li>
          <li>จดหมายขอทดสอบ</li>
          <li>จดหมายอนุญาต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารที่สมบูรณ์รับประกันการอนุมัติที่เร็วขึ้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบภายใต้ IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบประเมินความแข็งแรง ความเสถียร ความทนทาน และความปลอดภัย
        </p>

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
                  การออกแบบและฝีมือ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความเสถียร
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  โหลดที่ระบุ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  สำหรับโหลดหนักเป็นครั้งคราว
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ความแข็งแรงภายใต้แรงคงที่แนวนอน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ทั่วไป
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการกระแทกแนวตั้งสำหรับโต๊ะกระจก
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการกระแทกแนวตั้งสำหรับโต๊ะอื่นๆ ทั้งหมด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การโก่งตัวของโต๊ะ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการตก
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบต้องดำเนินการในห้องปฏิบัติการที่อนุมัติโดย BIS เท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. ผลิตภัณฑ์ล้มเหลวในการทดสอบโหลดหรือความทนทาน</strong>
            <br />
            วิธีแก้: เสริมข้อต่อ ใช้วัสดุที่สอดคล้องกับ BIS เพิ่มการเสริมแรง
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. เอกสารไม่สมบูรณ์</strong>
            <br />
            วิธีแก้: เตรียมเอกสารทางกฎหมาย เทคนิค และการผลิตทั้งหมดล่วงหน้า
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. โรงงานขาดอุปกรณ์ทดสอบที่เหมาะสม</strong>
            <br />
            วิธีแก้: ติดตั้งเครื่องมือที่จำเป็นและรักษาการสอบเทียบตามแนวทาง BIS
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. การติดป้ายที่ไม่ถูกต้อง</strong>
            <br />
            วิธีแก้: ตรวจสอบให้แน่ใจว่าเครื่องหมาย ISI ตามกฎ BIS อย่างเคร่งครัด
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. การจำแนกประเภทโมเดลผลิตภัณฑ์ผิด</strong>
            <br />
            วิธีแก้: ขอคำแนะนำจากผู้เชี่ยวชาญเพื่อจำแนกรูปแบบอย่างถูกต้อง
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การอนุญาตทางกฎหมายในการขายในอินเดีย</li>
          <li>เพิ่มความไว้วางใจของลูกค้า</li>
          <li>ความทนทานของผลิตภัณฑ์ที่ดีขึ้น</li>
          <li>เข้าถึงผู้ค้าปลีกรายใหญ่และแพลตฟอร์มอีคอมเมิร์ซ</li>
          <li>ลดความเสี่ยงความรับผิดชอบของผลิตภัณฑ์</li>
          <li>ความน่าเชื่อถือของแบรนด์ที่สูงขึ้น</li>
          <li>การปฏิบัติตาม QCOs ของรัฐบาล</li>
          <li>ข้อได้เปรียบทางการแข่งขันในตลาด</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายหรือจำหน่ายโต๊ะ/โต๊ะทำงานโดยไม่มีการรับรอง BIS อาจส่งผลให้:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดผลิตภัณฑ์</li>
          <li>ค่าปรับหนัก</li>
          <li>การดำเนินคดีทางอาญา</li>
          <li>การห้ามนำเข้า</li>
          <li>คำสั่งปิดธุรกิจ</li>
          <li>การยกเลิกใบอนุญาต</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          พระราชบัญญัติสำนักงานมาตรฐานอินเดีย พ.ศ. 2559 บังคับใช้โทษที่เข้มงวด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การรับรองนี้เป็นข้อกำหนดบังคับสำหรับ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศ</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ค้า/เจ้าของแบรนด์</li>
          <li>ผู้จัดหา OEM/ODM</li>
          <li>ผู้จัดจำหน่ายเฟอร์นิเจอร์</li>
          <li>ผู้ขายอีคอมเมิร์ซ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โรงงานแต่ละแห่งต้องได้รับใบอนุญาต BIS แยกต่างหาก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราในการให้คำปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรามีความช่วยเหลือแบบครบวงจร:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตีความมาตรฐาน (IS 17633:2022)</li>
          <li>การจำแนกประเภทผลิตภัณฑ์</li>
          <li>การร่างเอกสาร</li>
          <li>การประสานงานการทดสอบ</li>
          <li>การยื่นพอร์ทัล BIS</li>
          <li>การสนับสนุนการตรวจสอบโรงงาน</li>
          <li>การติดตามอย่างต่อเนื่องกับ BIS</li>
          <li>การอนุมัติใบอนุญาต</li>
          <li>การจัดการต่ออายุและการปฏิบัติตาม</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเรารับประกันการรับรองที่รวดเร็ว ไม่ยุ่งยาก และไม่มีข้อผิดพลาด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงานภายใต้ IS 17633:2022 เป็นข้อกำหนดความสอดคล้องบังคับที่รับประกันความปลอดภัยของผลิตภัณฑ์ ประสิทธิภาพ ความทนทาน และการปฏิบัติตามมาตรฐานแห่งชาติ ผู้ผลิตและผู้นำเข้าต้องผ่านการทดสอบผลิตภัณฑ์ การตรวจสอบโรงงาน และปฏิบัติตามกฎการจัดทำเอกสารและการติดป้าย BIS ทั้งหมดเพื่อรับเครื่องหมาย ISI
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยความช่วยเหลือจากผู้เชี่ยวชาญ กระบวนการรับรองทั้งหมดจะราบรื่น เร็ว และปฏิบัติตามกฎระเบียบ BIS อย่างเต็มที่
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS เป็นข้อกำหนดบังคับสำหรับโต๊ะและโต๊ะทำงานหรือไม่?
              </strong>
              <br />
              ใช่ ตาม IS 17633:2022 โต๊ะและโต๊ะทำงานทั้งหมดต้องได้รับการรับรอง BIS ก่อนขายในอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. การทดสอบใดบ้างที่จำเป็นสำหรับการรับรอง?</strong>
              <br />
              การทดสอบบังคับรวมถึงการทดสอบความเสถียร ความแข็งแรง ความทนทาน การโก่งตัว การกระแทก และความปลอดภัยของพื้นผิว
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ต้นทุนการรับรอง BIS คือเท่าไร?</strong>
              <br />
              ต้นทุนอยู่ระหว่าง ₹65,000 – ₹1,30,000 ขึ้นอยู่กับปัจจัยการทดสอบและการตรวจสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ผู้ผลิตต่างประเทศต้องการการรับรอง BIS หรือไม่?
              </strong>
              <br />
              ใช่ ผ่านแผน FMCS ซึ่งรวมถึงการตรวจสอบโรงงานในต่างประเทศโดย BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ใบอนุญาตหนึ่งใบสามารถครอบคลุมโมเดลโต๊ะ/โต๊ะทำงานหลายแบบได้หรือไม่?
              </strong>
              <br />
              ใช่ แต่เฉพาะเมื่อโมเดลมีความคล้ายคลึงกันในการก่อสร้างและพารามิเตอร์การทดสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. กระบวนการ BIS ใช้เวลานานเท่าไร?</strong>
              <br />
              ประมาณ 30-45 วัน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. การทดสอบเป็นข้อกำหนดบังคับในห้องปฏิบัติการที่รับรองโดย BIS หรือไม่?</strong>
              <br />
              ใช่ เฉพาะห้องปฏิบัติการที่อนุมัติโดย BIS เท่านั้นที่สามารถดำเนินการทดสอบได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. จะเกิดอะไรขึ้นหากผลิตภัณฑ์ล้มเหลว?</strong>
              <br />
              ต้องออกแบบใหม่และส่งใหม่เพื่อการทดสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. การติดเครื่องหมาย ISI เป็นข้อกำหนดบังคับหลังการรับรองหรือไม่?</strong>
              <br />
              ใช่ เครื่องหมาย ISI จำเป็นต้องมีบนผลิตภัณฑ์และบรรจุภัณฑ์
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ต้องใช้เอกสารอะไรบ้าง?</strong>
              <br />
              แบบแปลนทางเทคนิค BOM เอกสารโรงงาน รายงานการทดสอบ แผน QC และเอกสารทางกฎหมาย
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับโต๊ะและโต๊ะทำงาน - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={2} />
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
