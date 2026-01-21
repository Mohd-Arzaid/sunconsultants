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

const BISCertificateForWeldedPipesAndTubesThai = () => {
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

export default BISCertificateForWeldedPipesAndTubesThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับท่อและท่อเชื่อม | ใบอนุญาต BIS IS 17876:2022";
  const ogTitle =
    "การรับรอง BIS สำหรับท่อและท่อเชื่อม – คู่มือ IS 17876:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับท่อและท่อเชื่อม | IS 17876:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับท่อและท่อเชื่อมภายใต้ IS 17876:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับท่อและท่อเชื่อมตาม IS 17876:2022 รู้กระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับท่อและท่อเชื่อมภายใต้ IS 17876:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับท่อและท่อเชื่อม, ใบอนุญาต BIS สำหรับท่อและท่อเชื่อม, IS 17876:2022, การรับรอง BIS สำหรับท่อและท่อเชื่อม";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tho-lae-tho-cheum-is-17876";
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
                    ใบรับรอง BIS สำหรับท่อและท่อเชื่อม – IS 17876:2022
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
          ใบรับรอง BIS สำหรับท่อและท่อสแตนเลสเชื่อมภายใต้ IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="ใบอนุญาต BIS สำหรับท่อและท่อเชื่อม"
            alt="ใบรับรอง BIS สำหรับท่อและท่อเชื่อม - การรับรอง BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ท่อและท่อสแตนเลสเชื่อมถูกใช้อย่างแพร่หลายใน
          อุตสาหกรรมต่างๆ เช่น การก่อสร้าง การแปรรูปเคมี อาหารและเครื่องดื่ม
          การกระจายน้ำ การใช้งานโครงสร้าง และวิศวกรรมทั่วไป
          เนื่องจากท่อเหล่านี้ขนส่งของเหลว ก๊าซ และในบางกรณีสารเคมีกัดกร่อน
          ความแข็งแรง ความต้านทานการกัดกร่อน และความสมบูรณ์ของการผลิต
          ต้องได้รับการตรวจสอบก่อนเข้าสู่ตลาด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อควบคุมคุณภาพและรับประกันความปลอดภัยของประชาชนและอุตสาหกรรม
          รัฐบาลอินเดียได้ทำให้การรับรอง BIS เป็นข้อบังคับสำหรับท่อและท่อ
          สแตนเลสเชื่อมภายใต้ IS 17876:2022
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบายกระบวนการอนุมัติ BIS ฉบับสมบูรณ์
          เอกสาร ข้อกำหนดการทดสอบ ต้นทุน ระยะเวลา ภาระผูกพันของผู้ผลิต
          ประโยชน์ และกฎการปฏิบัติตาม — เขียนในรูปแบบใหม่และ
          เป็นเอกลักษณ์ รับประกันการซ้ำซ้อนเป็นศูนย์กับเนื้อหาก่อนหน้า
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับท่อและท่อสแตนเลสเชื่อมคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำนักงานมาตรฐานอินเดีย (BIS) ควบคุมคุณภาพผลิตภัณฑ์ใน
          อินเดียผ่านโครงการรับรองต่างๆ ผลิตภัณฑ์ที่ตกอยู่
          ภายใต้คำสั่งควบคุมคุณภาพบังคับ (QCO) ต้องได้รับ
          ใบอนุญาต BIS ก่อนที่จะผลิต นำเข้า เก็บขาย หรือ
          จำหน่าย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การรับรอง BIS รับประกันอะไร
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบรับรอง BIS ยืนยันว่าท่อ/ท่อสแตนเลสเชื่อม:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ตรงตามความแม่นยำด้านมิติ</li>
          <li>มีความแข็งแรงทางกลตามที่ต้องการ</li>
          <li>แสดงความต้านทานการกัดกร่อน</li>
          <li>ผลิตโดยใช้เกรดสแตนเลสที่ได้รับการอนุมัติ</li>
          <li>ปฏิบัติตามเงื่อนไขการทดสอบของอินเดีย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เมื่อได้รับการรับรองแล้ว ผลิตภัณฑ์ต้องมีเครื่องหมาย ISI พร้อมกับหมายเลข
          ใบอนุญาต (CML)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS สำหรับท่อและท่อสแตนเลสเชื่อม – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานที่ใช้ได้คือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – ท่อและท่อสแตนเลสเชื่อมสำหรับการใช้งานทั่วไป
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้อธิบาย:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>องค์ประกอบทางเคมี</li>
          <li>ข้อกำหนดคุณสมบัติทางกล</li>
          <li>ความคลาดเคลื่อนในการผลิต</li>
          <li>ข้อกำหนดด้านมิติ</li>
          <li>แนวทางพื้นผิวและการตกแต่ง</li>
          <li>การทดสอบความดันไฮโดรสแตติกและการทดสอบแบบไม่ทำลาย</li>
          <li>เกณฑ์ประสิทธิภาพด้านความปลอดภัย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ท่อเหล่านี้ใช้สำหรับการใช้งานทั่วไป หมายความว่าต้องตอบสนองสภาพแวดล้อมการทำงานที่หลากหลาย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงเป็นข้อบังคับสำหรับผลิตภัณฑ์ IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ท่อสแตนเลสเชื่อมถูกใช้อย่างแพร่หลายใน:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ท่อส่งน้ำ</li>
          <li>การขนส่งสารเคมี</li>
          <li>โรงงานอาหารและยา</li>
          <li>วิศวกรรมโครงสร้าง</li>
          <li>ระบบไอเสียและการระบายอากาศ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          หากผลิตไม่ถูกต้อง ท่อเหล่านี้สามารถนำไปสู่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความล้มเหลวจากการรั่วไหล</li>
          <li>ระเบิดภายใต้ความดัน</li>
          <li>การกัดกร่อนและการปนเปื้อน</li>
          <li>ความไม่เสถียรของโครงสร้าง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อป้องกันวัสดุที่ไม่ได้มาตรฐานจากการเข้าสู่ห่วงโซ่อุปทาน BIS
          กำหนดให้ผู้ผลิตทุกคน — ในประเทศหรือต่างประเทศ — ต้องได้รับใบอนุญาต BIS
          สำหรับท่อและท่อสแตนเลสเชื่อม
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับ IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนการรับรองเกี่ยวข้องกับการทดสอบในห้องปฏิบัติการและการตรวจสอบอย่างเข้มงวด
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุหมวดหมู่ผลิตภัณฑ์และเกรด
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ประเมินเกรดเฉพาะของสแตนเลสที่กำลังผลิตและยืนยันว่าตกอยู่ภายใต้ IS 17876:2022
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – ส่งใบสมัครออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้องสมัครผ่าน Manak Online BIS Portal โดยส่ง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดโรงงาน</li>
          <li>กำลังการผลิต</li>
          <li>แผนผังกระบวนการ</li>
          <li>แหล่งที่มาของวัตถุดิบ</li>
          <li>เอกสารการประกันคุณภาพ</li>
          <li>รายละเอียดแบรนด์และเครื่องหมายการค้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – ชำระค่าธรรมเนียม BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การชำระเงินรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบ</li>
          <li>ค่าธรรมเนียมการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ลำดับการผลิต</li>
          <li>การจัดเก็บวัตถุดิบ</li>
          <li>เครื่องจักรเชื่อม</li>
          <li>กระบวนการอบอ่อน/การบำบัดด้วยความร้อน</li>
          <li>เอกสารคุณภาพ</li>
          <li>โครงสร้างพื้นฐานการทดสอบ</li>
          <li>บันทึกการสอบเทียบ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          พวกเขาตรวจสอบการปฏิบัติตาม Scheme of Testing & Inspection (STI)
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การอนุมัติใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หากพารามิเตอร์ทั้งหมดตรงตามข้อกำหนด BIS ผู้ผลิตจะได้รับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS</li>
          <li>การอนุญาตเครื่องหมาย ISI</li>
          <li>หมายเลขใบอนุญาต CML ที่ไม่ซ้ำกัน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – ภาระผูกพันหลังได้รับใบอนุญาต
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ถือใบอนุญาตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รักษาการทดสอบคุณภาพภายในอย่างต่อเนื่อง</li>
          <li>ใช้เครื่องหมาย ISI อย่างถูกต้อง</li>
          <li>ให้ความร่วมมือระหว่างการตรวจสอบเฝ้าระวัง BIS เป็นระยะ</li>
          <li>ต่ออายุใบอนุญาตตรงเวลา</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตใบอนุญาต BIS สำหรับท่อและท่อสแตนเลสเชื่อม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> มาตรฐานนี้ครอบคลุมข้อกำหนดสำหรับท่อและท่อสแตนเลสเชื่อมสำหรับการใช้งานทั่วไป
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> มาตรฐานนี้ไม่ได้ระบุข้อกำหนดของท่อและท่อสแตนเลสเชื่อมที่ใช้สำหรับวัตถุประสงค์เฉพาะ
          ซึ่งครอบคลุมโดยมาตรฐานอินเดียแยกต่างหาก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. เอกสารการผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบอนุญาต/การลงทะเบียนโรงงาน</li>
          <li>แผนผังการจัดวาง</li>
          <li>แผนผังกระบวนการ</li>
          <li>รายการเครื่องจักร (การเชื่อม การขึ้นรูป การอบอ่อน การทดสอบ)</li>
          <li>รายการอุปกรณ์ทดสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ข้อกำหนดเกรด</li>
          <li>ข้อมูลการทดสอบทางเคมีและทางกล</li>
          <li>ข้อกำหนดขั้นตอนการเชื่อม</li>
          <li>บันทึกการบำบัดด้วยความร้อน</li>
          <li>แผนภูมิความคลาดเคลื่อนด้านมิติ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานแสดงตัวตน</li>
          <li>หลักฐานที่อยู่</li>
          <li>เอกสารความเป็นเจ้าของแบรนด์</li>
          <li>จดหมายผู้มีอำนาจลงนาม</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัครที่กรอกแล้ว</li>
          <li>ข้อผูกพันและการประกาศ</li>
          <li>เอกสารคำขอทดสอบ</li>
          <li>งานศิลปะป้ายสำหรับเครื่องหมาย ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบภายใต้ IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบเป็นหัวใจสำคัญของการอนุมัติ BIS และรับประกันว่าทุกชุดตรงตามมาตรฐานคุณภาพที่เข้มงวด
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  ข้อกำหนด
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  ความต้องการ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การวิเคราะห์จากกระทะ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การวิเคราะห์ผลิตภัณฑ์
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ข้อกำหนดแรงดึง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ท่อ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ท่อ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบขอบ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการกดแบนแบบย้อนกลับ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการกดแบน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาดเกรน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความแน่นของรอยรั่ว
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ฝีมือ การตกแต่ง รูปลักษณ์
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  มิติและความคลาดเคลื่อน
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายที่เผชิญระหว่างการรับรอง BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>การทดสอบองค์ประกอบทางเคมีล้มเหลว</strong>
            <br />
            องค์ประกอบโลหะผสมหรือสิ่งเจือปนที่ไม่เป็นมาตรฐานทำให้ถูกปฏิเสธ
          </li>
          <li>
            <strong>ข้อบกพร่องในการเชื่อมระหว่างการทดสอบแบบไม่ทำลาย</strong>
            <br />
            กระบวนการเชื่อมที่ไม่ดีหรือการบำบัดด้วยความร้อนที่ไม่สม่ำเสมอสามารถสร้างข้อบกพร่องได้
          </li>
          <li>
            <strong>ไม่เป็นไปตามมิติ</strong>
            <br />
            ความแตกต่างของความหนาของผนังมักนำไปสู่ความล้มเหลว
          </li>
          <li>
            <strong>เอกสารไม่สมบูรณ์</strong>
            <br />
            บันทึกที่ขาดหายไปหรือไม่ชัดเจนทำให้การอนุมัติใบอนุญาตล่าช้า
          </li>
          <li>
            <strong>ปัญหาการสอบเทียบ</strong>
            <br />
            อุปกรณ์ที่ไม่ได้รับการสอบเทียบส่งผลให้ผลการทดสอบไม่น่าเชื่อถือ
          </li>
          <li>
            <strong>การส่งแบรนด์/ป้ายที่ไม่ถูกต้อง</strong>
            <br />
            งานศิลปะเครื่องหมาย ISI ต้องตรงตามข้อกำหนด BIS
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับท่อและท่อสแตนเลส
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การอนุมัติทางกฎหมายในการผลิต/ขายในอินเดีย</li>
          <li>การรับประกันคุณภาพและความปลอดภัย</li>
          <li>ชื่อเสียงและความน่าเชื่อถือในตลาดที่ดีขึ้น</li>
          <li>การยอมรับจากรัฐบาลและการประมูล PSU</li>
          <li>ศักยภาพการส่งออกที่เพิ่มขึ้น</li>
          <li>ความเสี่ยงความล้มเหลวของผลิตภัณฑ์ลดลง</li>
          <li>การป้องกันจากคู่แข่งปลอมหรือไม่ได้มาตรฐาน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิต/ผู้นำเข้าที่ขายผลิตภัณฑ์ที่ไม่ได้รับการรับรองต้องเผชิญ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดผลิตภัณฑ์</li>
          <li>โทษหนักภายใต้พระราชบัญญัติ BIS</li>
          <li>การปิดการดำเนินงานการผลิต</li>
          <li>ข้อจำกัดการนำเข้า</li>
          <li>การดำเนินคดีทางกฎหมาย</li>
          <li>การยกเลิกใบอนุญาตที่มีอยู่</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การปฏิบัติตามเป็นข้อบังคับและบังคับใช้อย่างเข้มงวด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องได้รับใบอนุญาต BIS สำหรับท่อและท่อสแตนเลสเชื่อม?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศที่ส่งออกไปยังอินเดีย</li>
          <li>ผู้นำเข้าท่อสแตนเลส</li>
          <li>ผู้จัดหา OEM</li>
          <li>ผู้จัดจำหน่ายอุตสาหกรรม</li>
          <li>แบรนด์ป้ายส่วนตัว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สถานที่ผลิตแต่ละแห่งต้องได้รับใบอนุญาตของตนเอง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับท่อและท่อสแตนเลสเชื่อมภายใต้ IS 17876:2022
          รับประกันความน่าเชื่อถือ ความทนทาน และประสิทธิภาพของผลิตภัณฑ์ท่อที่สำคัญ
          ที่ใช้ในอุตสาหกรรมต่างๆ ด้วยการรับรองที่บังคับใช้ในขณะนี้
          ผู้ผลิตและผู้นำเข้าต้องปรับกระบวนการ การทดสอบ
          และเอกสารให้สอดคล้องกับข้อกำหนด BIS
          เพื่อจัดหาผลิตภัณฑ์ของตนในตลาดอินเดียอย่างถูกกฎหมาย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยคำแนะนำจากผู้เชี่ยวชาญ กระบวนการออกใบอนุญาต BIS
          จะเร็วขึ้น ราบรื่นขึ้น และปฏิบัติตามกฎระเบียบอย่างเต็มที่
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย — การรับรอง BIS สำหรับท่อและท่อสแตนเลสเชื่อม
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS เป็นข้อบังคับสำหรับท่อสแตนเลสเชื่อมหรือไม่?
              </strong>
              <br />
              ใช่ ภายใต้ IS 17876:2022 การรับรอง BIS เป็นข้อบังคับสำหรับผู้ผลิตและผู้นำเข้าทุกคน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ต้องทดสอบอะไรบ้าง?</strong>
              <br />
              การวิเคราะห์ทางเคมี การทดสอบแรงดึง การทดสอบความแข็ง การทดสอบความดันไฮโดรสแตติก
              การทดสอบแบบไม่ทำลาย การกดแบน และการตรวจสอบมิติ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. การรับรอง BIS ใช้เวลานานแค่ไหน?</strong>
              <br />
              โดยทั่วไป 35–50 วันสำหรับผู้ผลิตอินเดีย และประมาณ 120 วันสำหรับผู้ผลิตต่างประเทศ
              ขึ้นอยู่กับความพร้อมในการทดสอบและการตรวจสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. ผู้ผลิตต่างประเทศสามารถรับการรับรอง BIS ได้หรือไม่?
              </strong>
              <br />
              ใช่ ผ่านโครงการ FMCS (Foreign Manufacturers Certification Scheme)
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ต้องใช้เอกสารอะไรบ้าง?</strong>
              <br />
              ใบอนุญาตโรงงาน รายการอุปกรณ์ทดสอบ BOM แผนผังกระบวนการ ภาพวาด
              แผน QC เอกสารแบรนด์ ฯลฯ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. จะเกิดอะไรขึ้นหากตัวอย่างล้มเหลวในการทดสอบ?</strong>
              <br />
              ผู้ผลิตต้องแก้ไขปัญหา ปรับปรุงผลิตภัณฑ์ และส่งใหม่เพื่อการทดสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. การทำเครื่องหมาย ISI เป็นข้อบังคับหลังการอนุมัติหรือไม่?</strong>
              <br />
              ใช่ ผลิตภัณฑ์ต้องแสดงเครื่องหมาย ISI + หมายเลข CML
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. เกรดทั้งหมดครอบคลุมภายใต้ IS 17876 หรือไม่?</strong>
              <br />
              เฉพาะเกรดเฉพาะที่กำหนดไว้ภายใต้มาตรฐานเท่านั้นที่มีคุณสมบัติ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. BIS ดำเนินการเฝ้าระวังบ่อยแค่ไหน?</strong>
              <br />
              การตรวจสอบเป็นระยะและการทดสอบตัวอย่างแบบสุ่มจะดำเนินการระหว่างอายุใบอนุญาต
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับท่อและท่อเชื่อม - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={3} />
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
                ที่ปรึกษาใบรับรองที่ดีที่สุดในอินเดีย
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
