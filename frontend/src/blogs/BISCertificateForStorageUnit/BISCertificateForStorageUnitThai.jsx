import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ManyUsersAlsoReadThai from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import FooterThai from "@/components/manual/Footer/FooterThai";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForStorageUnitThai = () => {
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

export default BISCertificateForStorageUnitThai;

const MetaTags = () => {
  const title = "BIS Certificate for Storage Unit | IS 17634:2022 BIS License";
  const ogTitle = "BIS Certification for Storage Unit – IS 17634:2022 Guide";
  const twitterTitle = "BIS License for Storage Unit | IS 17634:2022";
  const metaDescription =
    "Get BIS Certificate for Storage Unit under IS 17634:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Storage Unit as per IS 17634:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Storage Unit under IS 17634:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Storage Unit, BIS License for Storage Unit, IS 17634:2022, BIS Certification for Storage Unit";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tu-keeb-khong-is-17634";
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    ใบรับรอง BIS สำหรับตู้เก็บของ – IS 17634:2022
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
          ใบรับรอง BIS สำหรับตู้เก็บของ – คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS IS 17634:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="ใบอนุญาต BIS สำหรับตู้เก็บของ"
            alt="ใบรับรอง BIS สำหรับตู้เก็บของ - IS 17634:2022 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับตู้เก็บของเป็นข้อกำหนดบังคับภายใต้มาตรฐานอินเดีย IS 17634:2022 มาตรฐานนี้ครอบคลุมข้อกำหนดด้านความปลอดภัย ความทนทาน และประสิทธิภาพโครงสร้างที่จำเป็นสำหรับเฟอร์นิเจอร์เก็บของทุกประเภทที่ใช้ในบ้าน สำนักงาน โรงเรียน สถานประกอบการพาณิชย์ และการตั้งค่าอุตสาหกรรม
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ตู้เก็บของรวมถึง:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ตู้</li>
          <li>ตู้เสื้อผ้า</li>
          <li>หน่วยชั้นวาง</li>
          <li>ลิ้นชักและตู้ลิ้นชัก</li>
          <li>ตู้เก็บเอกสาร</li>
          <li>หน่วยเก็บของด้านข้าง</li>
          <li>ระบบเก็บของแบบโมดูลาร์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากตู้เก็บของถูกใช้อย่างแพร่หลายในพื้นที่อยู่อาศัยและเชิงพาณิชย์ ความเสถียรของโครงสร้างและความปลอดภัยจึงมีความสำคัญอย่างยิ่ง ตู้เก็บของคุณภาพต่ำอาจล้ม ทรุด หรือทำให้เกิดการบาดเจ็บเนื่องจากขอบคม ข้อต่ออ่อนแอ หรือโครงสร้างที่ไม่เสถียร เพื่อให้แน่ใจในความปลอดภัยของลูกค้าและคุณภาพของผลิตภัณฑ์ การรับรอง BIS สำหรับตู้เก็บของจึงเป็นข้อกำหนดบังคับในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบาย IS 17634:2022 ข้อกำหนดการรับรอง กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม ระยะเวลา โทษ และประโยชน์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นการประเมินความสอดคล้องของบุคคลที่สามที่ออกโดยสำนักงานมาตรฐานอินเดีย เพื่อให้แน่ใจว่าผลิตภัณฑ์เป็นไปตามมาตรฐานความปลอดภัยและคุณภาพของอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบรับรอง BIS ยืนยันว่าผลิตภัณฑ์:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เป็นไปตามมาตรฐานอินเดีย</li>
          <li>ผ่านการทดสอบในห้องปฏิบัติการ</li>
          <li>ได้รับการตรวจสอบโรงงาน</li>
          <li>ปฏิบัติตามการควบคุมคุณภาพอย่างต่อเนื่อง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลิตภัณฑ์ที่ได้รับการรับรองจะมีเครื่องหมาย BIS (เครื่องหมาย ISI)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ใดที่ใช้กับตู้เก็บของ? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐาน BIS บังคับสำหรับตู้เก็บของคือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – ตู้เก็บของ: ข้อกำหนดด้านความปลอดภัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุมเฟอร์นิเจอร์เก็บของทุกประเภท กำหนดข้อกำหนดด้านความปลอดภัย ความทนทาน ความจุในการรับน้ำหนัก และการออกแบบเพื่อให้แน่ใจว่าสามารถใช้งานได้อย่างปลอดภัยภายใต้สภาวะการทำงานประจำวัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ข้อกำหนดหลักของ IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความเสถียรของโครงสร้าง</li>
          <li>ประสิทธิภาพการรับน้ำหนัก</li>
          <li>ความแข็งแรงของลิ้นชัก</li>
          <li>ความต้านทานการพลิกคว่ำ</li>
          <li>คุณภาพวัสดุ</li>
          <li>ความปลอดภัยของขอบ</li>
          <li>การตกแต่งพื้นผิว</li>
          <li>ความทนทานภายใต้การใช้งานซ้ำ</li>
          <li>ไม่มีอันตรายจากการติดค้าง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ไม่ว่าจะผลิตในอินเดียหรือนำเข้า ตู้เก็บของทั้งหมดต้องผ่านการลงทะเบียน BIS สำหรับตู้เก็บของก่อนการขาย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS สำหรับตู้เก็บของจึงเป็นข้อกำหนดบังคับ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ตู้เก็บของถูกใช้อย่างแพร่หลายและมักรองรับน้ำหนักมาก ความล้มเหลวของโครงสร้างอาจส่งผลให้เกิดการบาดเจ็บร้ายแรงหรือความเสียหายต่อทรัพย์สิน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เหตุผลที่ต้องมีการรับรอง BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ป้องกันอันตรายจากการพลิกคว่ำ</li>
          <li>รับประกันความจุในการรับน้ำหนัก</li>
          <li>ปรับปรุงความทนทานและอายุการใช้งาน</li>
          <li>ขจัดขอบคมและการตกแต่งที่เป็นอันตราย</li>
          <li>รับประกันความปลอดภัยของเด็กในการใช้งานในที่อยู่อาศัย</li>
          <li>ทำให้คุณภาพผลิตภัณฑ์เป็นมาตรฐานเดียวกัน</li>
          <li>บังคับภายใต้คำสั่งควบคุมคุณภาพ BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ไม่มีผู้ผลิตหรือผู้นำเข้าคนใดสามารถขายตู้เก็บของได้อย่างถูกกฎหมายโดยไม่มีใบอนุญาต BIS สำหรับตู้เก็บของ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับตู้เก็บของ (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรองเป็นไปตามแผน ISI (แผนการประเมินความสอดคล้อง-I) ซึ่งเกี่ยวข้องกับการทดสอบผลิตภัณฑ์และการตรวจสอบโรงงาน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุการใช้งาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          วิเคราะห์ว่าแบบเฟอร์นิเจอร์เก็บของอยู่ในหมวดหมู่:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ตู้ ชั้นวาง ลิ้นชัก หน่วยตู้เสื้อผ้า หน่วยเก็บเอกสาร หรือเฟอร์นิเจอร์ที่คล้ายกัน
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ยืนยันมาตรฐานที่ถูกต้อง: IS 17634:2022
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – การยื่นคำขอ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          สมัครออนไลน์ผ่านพอร์ทัลออนไลน์ BIS Manak
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">ส่ง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดธุรกิจ</li>
          <li>ข้อมูลหน่วยการผลิต</li>
          <li>การจำแนกผลิตภัณฑ์</li>
          <li>ชื่อแบรนด์</li>
          <li>แผนภาพกระบวนการ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – ชำระค่าธรรมเนียม BIS
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
          ขั้นตอนที่ 4 – การทดสอบผลิตภัณฑ์ (ข้อกำหนด IS 17634:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างจะถูกทดสอบที่ห้องปฏิบัติการที่รับรองโดย BIS
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          ห้องปฏิบัติการประเมิน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความเสถียร</li>
          <li>ความแข็งแรงของโครงสร้าง</li>
          <li>ความจุในการรับน้ำหนัก</li>
          <li>ความทนทานของลิ้นชัก</li>
          <li>ความแข็งแรงของชั้นวาง</li>
          <li>ความปลอดภัยของขอบและมุม</li>
          <li>ขีดจำกัดของสารอันตราย</li>
          <li>ประสิทธิภาพภายใต้การใช้งานซ้ำ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ผลการทดสอบต้องสะท้อนการปฏิบัติตามข้อกำหนดอย่างเต็มที่
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิต</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>การตรวจสอบวัตถุดิบ</li>
          <li>ความสามารถในการทดสอบภายใน</li>
          <li>การปรับเทียบเครื่องมือ</li>
          <li>การปฏิบัติตามแผนการทดสอบและการตรวจสอบ (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การอนุมัติใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากการประเมินที่สำเร็จ BIS จะออก:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS</li>
          <li>อนุญาตให้ใช้เครื่องหมาย ISI</li>
          <li>หมายเลข CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – ข้อกำหนดหลังใบอนุญาต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปฏิบัติตามข้อกำหนดการทำเครื่องหมาย</li>
          <li>รักษาระบบคุณภาพ</li>
          <li>การตรวจสอบเฝ้าระวัง BIS</li>
          <li>ต่ออายุใบอนุญาตทุก 1-2 ปี</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับตู้เก็บของ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> มาตรฐานนี้ครอบคลุมข้อกำหนดที่เกี่ยวข้องกับประสิทธิภาพและความปลอดภัยของตู้เก็บของ รวมถึงส่วนที่เคลื่อนไหวได้และไม่เคลื่อนไหวที่ใช้สำหรับการใช้งานในบ้านและสำหรับการใช้งานในสถาบัน เช่น การเก็บเอกสารหรือสิ่งที่คล้ายกัน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> มาตรฐานนี้ใช้กับตู้เก็บของที่ผลิต/ประกอบเสร็จสมบูรณ์แล้ว นอกจากนี้ยังใช้กับหน่วยที่พร้อมประกอบ ในกรณีนั้นข้อกำหนดของมาตรฐานนี้จะใช้กับหน่วยที่ประกอบแล้ว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของตู้เก็บของ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้านล่างนี้คือรายการเอกสารการรับรอง BIS ที่สมบูรณ์:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. เอกสารการผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการลงทะเบียนโรงงาน</li>
          <li>แผนผัง</li>
          <li>แผนภาพกระบวนการผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบ</li>
          <li>ใบรับรองการปรับเทียบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานแสดงตัวตน</li>
          <li>หลักฐานที่อยู่</li>
          <li>การอนุญาตแบรนด์ (ถ้ามี)</li>
          <li>ใบรับรองเครื่องหมายการค้า (ไม่บังคับแต่แนะนำ)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบวาดผลิตภัณฑ์</li>
          <li>แผนภาพการประกอบ</li>
          <li>รายการวัสดุ</li>
          <li>รายงานการทดสอบภายใน</li>
          <li>คุณสมบัติด้านความปลอดภัย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัคร</li>
          <li>จดหมายอนุญาตโรงงาน</li>
          <li>จดหมายขอทดสอบ</li>
          <li>แบบฟอร์มการประกาศ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การมีเอกสารที่สมบูรณ์ช่วยหลีกเลี่ยงความล่าช้าในการประมวลผล
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับตู้เก็บของ (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบที่เข้มงวดรับประกันว่าผลิตภัณฑ์เป็นไปตามมาตรฐานความปลอดภัยและความทนทาน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          การทดสอบหลักภายใต้ IS 17634:2022
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
                  Design and workmanship
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  General
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflection of shelves
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of shelf supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test for tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of clothes-rail supports
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement of clothes rails
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test for structure and underframe
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests for units with castors or wheels
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam-shut test of pivoted doors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of sliding doors and horizontal
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of bottom-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop test for top-hinged flaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of vertical roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Slam shut/open test of extension elements / Displacement of
                  extension element bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Interlock test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength test for locking and latching mechanisms for
                  extension elements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Locking and latching mechanisms for doors, flaps and
                  roll-fronts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pull Force Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Top Load Ease Cycle Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop Test – Dynamic – for Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Movable parts, shelf supports, tops and bottoms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sustained load test (overload)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dislodgement test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units Supported by the Floor
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a Height of 1 000 mm or less
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Units that can be adjusted to a height
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Opening Doors, Extension Elements and Flaps, All Storage Units
                  Unloaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded and all doors, extension elements
                  and flaps open
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas unloaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  All storage areas loaded with overturning load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Doors, Extension Elements and Flaps Closed and Locked, All
                  Storage Units Loaded
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Force Stability Test for Storage Units
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability Test for Pedestals/Storage Units with Seat Surfaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dynamic Stability Test for Units with Castors
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength Test for Wall Attachments
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบเป็นข้อกำหนดบังคับและต้องดำเนินการที่ห้องปฏิบัติการที่รับรองโดย BIS เท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. การจำแนกประเภทตู้เก็บที่ไม่ถูกต้อง</strong>
            <br />
            ยืนยันขอบเขตภายใต้ IS 17634:2022 เสมอ
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. โรงงานไม่พร้อม</strong>
            <br />
            QMS การปรับเทียบ และการทดสอบภายในต้องพร้อมก่อนการตรวจสอบ
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. การทดสอบผลิตภัณฑ์ล้มเหลว</strong>
            <br />
            รับประกัน:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>ความแข็งแรงของชั้นวาง</li>
            <li>ความทนทานของลิ้นชัก</li>
            <li>ความเสถียรป้องกันการพลิกคว่ำ</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. เอกสารไม่ครบ</strong>
            <br />
            หลีกเลี่ยงความล่าช้าโดยการเตรียมเอกสารล่วงหน้า
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. ชื่อแบรนด์ไม่ตรงกัน</strong>
            <br />
            ต้องตรงกับเครื่องหมายการค้าและฉลาก
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับตู้เก็บของ
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การปฏิบัติตามกฎหมายบังคับ</li>
          <li>การรับประกันความปลอดภัยของลูกค้า</li>
          <li>เพิ่มความน่าเชื่อถือในตลาด</li>
          <li>สิทธิ์สำหรับอีคอมเมิร์ซและห่วงโซ่ค้าปลีก</li>
          <li>ลดความเสี่ยงการล้มเหลวของผลิตภัณฑ์</li>
          <li>สิทธิ์ในการเสนอราคาของรัฐบาล</li>
          <li>การสร้างความแตกต่างของแบรนด์</li>
          <li>ความไว้วางใจของผู้บริโภคที่สูงขึ้น</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายหรือนำเข้าตู้เก็บของโดยไม่ได้รับอนุมัติจาก BIS อาจส่งผลให้:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับหนัก</li>
          <li>การยึดผลิตภัณฑ์</li>
          <li>การห้ามการผลิต</li>
          <li>การดำเนินคดีทางอาญา</li>
          <li>การขึ้นบัญชีดำแบรนด์</li>
          <li>การถอนออกจากตลาด</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การปฏิบัติตามเป็นข้อกำหนดบังคับภายใต้กฎ BIS และคำสั่งควบคุมคุณภาพ (QCO)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับตู้เก็บของ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศ</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ค้า (เจ้าของแบรนด์)</li>
          <li>ซัพพลายเออร์ OEM และ ODM</li>
          <li>แบรนด์เฟอร์นิเจอร์ค้าปลีกและออนไลน์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละโรงงานต้องมีใบอนุญาต BIS แยกกัน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราในการให้คำปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรามีการสนับสนุนแบบครบวงจรตั้งแต่ต้นจนจบ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตีความมาตรฐาน (IS 17634:2022)</li>
          <li>การจำแนกผลิตภัณฑ์</li>
          <li>การเตรียมเอกสาร</li>
          <li>การประสานงานกับห้องปฏิบัติการที่รับรองโดย BIS</li>
          <li>การสนับสนุนการทดสอบ</li>
          <li>การยื่นคำขอผ่านพอร์ทัล BIS</li>
          <li>คำแนะนำการตรวจสอบโรงงาน</li>
          <li>การอนุมัติใบอนุญาต</li>
          <li>การต่ออายุและการเฝ้าระวัง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเรารับประกันกระบวนการรับรองที่รวดเร็ว ราบรื่น และปราศจากข้อผิดพลาด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับตู้เก็บของภายใต้ IS 17634:2022 เป็นสิ่งจำเป็นสำหรับการรับประกันความปลอดภัยของผลิตภัณฑ์ ประสิทธิภาพโครงสร้าง และความทนทาน นอกจากนี้ยังเป็นข้อกำหนดทางกฎหมายบังคับสำหรับการขายหรือนำเข้าเฟอร์นิเจอร์เก็บของในอินเดีย ด้วยเอกสารที่เหมาะสม การทดสอบ และคำแนะนำจากผู้เชี่ยวชาญ กระบวนการรับรองจะราบรื่น
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ทีมที่ปรึกษา BIS ที่ทุ่มเทของเรารับประกันการอนุมัติที่รวดเร็ว เอกสารที่ถูกต้อง และการสนับสนุนการปฏิบัติตามแบบครบวงจรสำหรับผู้ผลิตและผู้นำเข้า
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย — ใบรับรอง BIS สำหรับตู้เก็บของ (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS สำหรับตู้เก็บของในอินเดียเป็นข้อกำหนดบังคับหรือไม่?
              </strong>
              <br />
              ใช่ การรับรอง BIS สำหรับตู้เก็บของเป็นข้อกำหนดบังคับตามมาตรฐานอินเดีย IS 17634:2022 – ตู้เก็บของ: ข้อกำหนดด้านความปลอดภัย มาตรฐานนี้ได้ถูกรวมไว้ภายใต้คำสั่งควบคุมคุณภาพ (QCO) ซึ่งหมายความว่าไม่มีผู้ผลิต ผู้นำเข้า หรือผู้ขายคนใดได้รับอนุญาตตามกฎหมายให้ขายตู้เก็บของในตลาดอินเดียโดยไม่ได้รับอนุมัติจาก BIS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. ตู้เก็บของประเภทใดที่ครอบคลุมภายใต้ IS 17634:2022?
              </strong>
              <br />
              IS 17634:2022 ใช้กับเฟอร์นิเจอร์เก็บของหลากหลายประเภทที่ใช้ในพื้นที่อยู่อาศัย เชิงพาณิชย์ และสถาบัน
              <br />
              มาตรฐานครอบคลุม:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>ตู้ (ไม้ โลหะ แบบโมดูลาร์)</li>
              <li>ตู้กับข้าวและตู้เสื้อผ้า</li>
              <li>หน่วยชั้นวาง</li>
              <li>ตู้เก็บเอกสาร</li>
              <li>หน่วยลิ้นชักและตู้ลิ้นชัก</li>
              <li>ตู้ข้างและระบบเก็บของแบบโมดูลาร์</li>
              <li>หน่วยเก็บของสำนักงาน</li>
              <li>เฟอร์นิเจอร์เก็บของแบบกะทัดรัด</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. การทดสอบใดที่ดำเนินการสำหรับการรับรอง BIS ของตู้เก็บของ?
              </strong>
              <br />
              ตู้เก็บของต้องผ่านการทดสอบบังคับหลายอย่างเพื่อประเมินความทนทาน ความแข็งแรง ความปลอดภัย และประสิทธิภาพ
              <br />
              การทดสอบหลักรวมถึง:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                การทดสอบความเสถียร: รับประกันว่าหน่วยจะไม่ล้มระหว่างการใช้งานหรือการขยายลิ้นชัก
              </li>
              <li>
                การทดสอบโหลดคงที่: วัดความจุในการรับน้ำหนักของชั้นวาง ลิ้นชัก และโครงสร้างหลัก
              </li>
              <li>
                การทดสอบความทนทาน/ความอดทน: ตรวจสอบประสิทธิภาพของลิ้นชัก ประตู และชั้นวางตลอดวงจรการใช้งานซ้ำ
              </li>
              <li>
                การทดสอบความแข็งแรงของชั้นวาง: ประเมินการย้อยหรือการโค้งงอภายใต้น้ำหนัก
              </li>
              <li>
                การทดสอบแรงกระแทก: รับประกันความต้านทานโครงสร้างต่อแรงกระแทกโดยบังเอิญ
              </li>
              <li>
                การทดสอบความต้านทานการพลิกคว่ำ: ตรวจสอบประสิทธิภาพป้องกันการพลิกคว่ำเมื่อลิ้นชักเต็มและขยายออก
              </li>
              <li>
                การทดสอบความปลอดภัยของขอบและการตกแต่ง: รับประกันว่าไม่มีขอบคมหรือการตกแต่งที่เป็นอันตราย
              </li>
              <li>การทดสอบความปลอดภัยของวัสดุ: ยืนยันวัสดุที่ไม่เป็นพิษและปลอดภัย</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. กระบวนการรับรอง BIS สำหรับตู้เก็บของใช้เวลานานเท่าไร?
              </strong>
              <br />
              ระยะเวลาการรับรอง BIS โดยทั่วไปสำหรับตู้เก็บของคือ 30-45 วันทำการ ขึ้นอยู่กับความพร้อมของผลิตภัณฑ์และคุณภาพของเอกสาร
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. ผู้ผลิตต่างประเทศสามารถสมัครการรับรอง BIS สำหรับตู้เก็บของได้หรือไม่?
              </strong>
              <br />
              ใช่ ผู้ผลิตต่างประเทศต้องได้รับใบรับรอง BIS ภายใต้ FMCS (แผนการรับรองผู้ผลิตต่างประเทศ)
              <br />
              ข้อกำหนดหลักรวมถึง:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>ตัวแทนอินเดียท้องถิ่น (AIR)</li>
              <li>การทดสอบผลิตภัณฑ์ในห้องปฏิบัติการอินเดียที่รับรองโดย BIS</li>
              <li>การตรวจสอบโรงงานในต่างประเทศโดยเจ้าหน้าที่ BIS</li>
              <li>การปฏิบัติตาม IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. จะเกิดอะไรขึ้นหากผลิตภัณฑ์ตู้เก็บของล้มเหลวในการทดสอบ BIS?
              </strong>
              <br />
              หากตัวอย่างล้มเหลวในการทดสอบบังคับใดๆ:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>ผู้ผลิตจะได้รับรายงานความล้มเหลว</li>
              <li>พวกเขาต้องทำการปรับเปลี่ยนการออกแบบ/วัสดุที่จำเป็น</li>
              <li>ตัวอย่างที่แก้ไขแล้วต้องส่งเพื่อทดสอบใหม่</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. การตรวจสอบโรงงานเป็นข้อกำหนดบังคับสำหรับการรับรอง BIS หรือไม่?
              </strong>
              <br />
              ใช่ การตรวจสอบโรงงานเป็นข้อกำหนดบังคับสำหรับการรับรองเครื่องหมาย ISI ทั้งหมด รวมถึงตู้เก็บของ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. ผู้ค้าหรือเจ้าของแบรนด์สามารถสมัครการรับรอง BIS ได้หรือไม่?
              </strong>
              <br />
              ใช่ แต่เฉพาะเมื่อ:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>พวกเขาเป็นเจ้าของแบรนด์ และ</li>
              <li>
                พวกเขามีข้อตกลงการผลิตที่ได้รับอนุญาตตามกฎหมายกับโรงงานจริง
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              ใบอนุญาต BIS จะออกตามโรงงาน ไม่ใช่ตามบริษัท
              <br />
              ดังนั้น สถานที่ผลิตจริงต้องผ่านการทดสอบและการตรวจสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. รุ่นตู้เก็บของหลายรุ่นสามารถครอบคลุมภายใต้ใบอนุญาต BIS หนึ่งใบได้หรือไม่?
              </strong>
              <br />
              เฉพาะเมื่อ:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>รุ่นต่างๆ อยู่ภายใต้มาตรฐานเดียวกัน</li>
              <li>ผลิตในโรงงานเดียวกัน</li>
              <li>มีการก่อสร้างและวัตถุดิบที่คล้ายกัน</li>
              <li>เป็นไปตามพารามิเตอร์การทดสอบเดียวกัน</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. ข้อกำหนดการติดฉลากใดที่ต้องปฏิบัติตามหลังการรับรอง?
              </strong>
              <br />
              เมื่อได้รับการอนุมัติแล้ว ผลิตภัณฑ์ต้องแสดง:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>เครื่องหมาย ISI (เครื่องหมายรับรอง BIS)</li>
              <li>หมายเลขมาตรฐาน (IS 17634:2022)</li>
              <li>หมายเลขใบอนุญาต CML</li>
              <li>ชื่อและที่อยู่ของผู้ผลิต</li>
              <li>หมายเลขล็อตหรือหมายเลขซีเรียล</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับตู้เก็บของ - IS 17634:2022 PDF"
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
