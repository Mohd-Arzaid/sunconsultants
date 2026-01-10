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
                    ใบรับรอง BIS สำหรับเก้าอี้ทำงาน – IS 17631:2022
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
          ใบรับรอง BIS สำหรับเก้าอี้ทำงาน – คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS
          IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="ใบอนุญาต BIS สำหรับเก้าอี้ทำงาน"
            alt="ใบรับรอง BIS สำหรับเก้าอี้ทำงาน - IS 17631:2022 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การใช้เก้าอี้สำนักงานและเก้าอี้ทำงานที่เพิ่มขึ้น—ไม่ว่าจะเป็นในพื้นที่
          ทำงานขององค์กร ศูนย์โคเวิร์กกิ้ง สำนักงานที่บ้าน
          หรือการตั้งค่าสถาบัน—ได้
          ทำให้ประสิทธิภาพด้านความปลอดภัยและสรีรศาสตร์มีความจำเป็น
          เพื่อให้แน่ใจว่าผู้ผลิตจัดหาผลิตภัณฑ์ที่นั่งที่มีความเสถียรทางโครงสร้าง
          ทนทาน และปลอดภัยสำหรับผู้ใช้ รัฐบาลอินเดียได้กำหนดการรับรอง BIS
          สำหรับเก้าอี้ทำงานภายใต้ IS 17631:2022
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ทำงานโดยทั่วไปทนต่อการโหลดซ้ำๆ
          การเคลื่อนไหวของร่างกายอย่างต่อเนื่อง การเอียง การหมุน
          และการปรับความสูง ความล้มเหลวในคุณสมบัติการทำงานใดๆ
          อาจนำไปสู่การบาดเจ็บร้ายแรง นี่คือเหตุผลที่การปฏิบัติตาม IS 17631:2022
          – เก้าอี้ทำงาน: ข้อกำหนดด้านความปลอดภัย
          เป็นข้อบังคับสำหรับผู้ผลิตและผู้นำเข้าทั้งหมด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือนี้อธิบายกระบวนการออกใบอนุญาต BIS อย่างสมบูรณ์ รวมถึงมาตรฐาน
          การทดสอบ ค่าธรรมเนียม เอกสาร ความรับผิดชอบ ประโยชน์
          และความท้าทาย—สร้างด้วยเนื้อหาสดใหม่เพื่อหลีกเลี่ยงการทำซ้ำทั่วทั้ง
          เว็บไซต์ของคุณ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความเข้าใจเกี่ยวกับการรับรอง BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำนักงานมาตรฐานอินเดีย (BIS) ดูแลคุณภาพและความปลอดภัยของผลิตภัณฑ์ที่
          จัดหาในตลาดอินเดีย ผลิตภัณฑ์ใดๆ
          ที่อยู่ภายใต้มาตรฐานอินเดียที่ระบุไว้ใน
          คำสั่งควบคุมคุณภาพบังคับต้องได้รับการประเมินและรับรองโดย BIS ก่อนขาย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ใบรับรอง BIS – สิ่งที่มันแสดงถึง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบรับรอง BIS ระบุว่าเก้าอี้ทำงาน:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผ่านการทดสอบประสิทธิภาพและความทนทาน</li>
          <li>เป็นไปตามข้อกำหนดวัสดุและการก่อสร้าง</li>
          <li>ปลอดภัยสำหรับการใช้งานรายวันในระยะยาว</li>
          <li>เป็นไปตามแนวทางสรีรศาสตร์และโครงสร้างในมาตรฐานอินเดีย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ตรงตามข้อกำหนดเหล่านี้จะได้รับใบอนุญาต BIS
          ที่อนุญาตให้พวกเขาติดเครื่องหมาย ISI
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐานที่ใช้กับเก้าอี้ทำงาน – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานที่ควบคุมสำหรับเก้าอี้ทำงานและสำนักงานคือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – เก้าอี้ทำงาน:
          ข้อกำหนดด้านความปลอดภัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้มุ่งเน้นไปที่ที่นั่งที่ออกแบบมาสำหรับการใช้งานอย่างต่อเนื่องใน
          สภาพแวดล้อมการทำงาน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลิตภัณฑ์ที่ครอบคลุมภายใต้มาตรฐานนี้
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เก้าอี้สำนักงานแบบสรีรศาสตร์</li>
          <li>เก้าอี้ทำงาน</li>
          <li>เก้าอี้หมุน</li>
          <li>เก้าอี้โต๊ะทำงาน</li>
          <li>เก้าอี้ทำงานปรับความสูงได้</li>
          <li>เก้าอี้ทำงานระดับผู้บริหาร</li>
          <li>เก้าอี้ทำงานที่มีหลังพิงแบบตาข่ายหรือผ้า</li>
          <li>เก้าอี้ที่ติดตั้งที่วางแขน</li>
          <li>เก้าอี้ที่มีกลไกการเอียง/ล็อค</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการปฏิบัติตาม IS 17631:2022 จึงมีความสำคัญ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ทำงานแตกต่างจากเก้าอี้ทั่วไปอย่างมากเพราะ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รองรับการเคลื่อนไหวอย่างต่อเนื่อง</li>
          <li>ใช้กลไกทางกลและการปรับแต่ง</li>
          <li>รองรับโหลดแบบไดนามิก</li>
          <li>ต้องการความทนทานสำหรับการใช้งานเป็นเวลานาน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          เก้าอี้ที่สร้างไม่ดีอาจล้มเหลวที่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ข้อต่อฐาน</li>
          <li>กลไกการหมุน</li>
          <li>ระบบยกแก๊ส</li>
          <li>การรองรับที่นั่ง/หลัง</li>
          <li>โครงสร้างขาหรือล้อ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          สิ่งนี้อาจนำไปสู่การบาดเจ็บในที่ทำงาน เวลาหยุดทำงาน
          และปัญหาความรับผิดชอบ ของผลิตภัณฑ์
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การรับรอง BIS บังคับรับประกัน
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การออกแบบสรีรศาสตร์ที่ปลอดภัย</li>
          <li>ความสามารถในการรับน้ำหนักที่เชื่อถือได้</li>
          <li>ความทนทานที่แข็งแกร่งภายใต้การทดสอบแบบวนซ้ำ</li>
          <li>ความต้านทานต่อการสึกหรอทางกล</li>
          <li>การปฏิบัติตามพารามิเตอร์ความปลอดภัยของผู้ใช้</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ดังนั้น การได้รับใบอนุญาต BIS
          สำหรับเก้าอี้ทำงานจึงไม่สามารถต่อรองได้สำหรับ
          ผู้ผลิตอินเดียและต่างประเทศ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้ครอบคลุมข้อกำหนดของเก้าอี้ทำงาน
          มาตรฐานนี้ใช้กับเก้าอี้ทำงานที่ผลิต/ประกอบเสร็จสมบูรณ์แล้ว
          นอกจากนี้ยังใช้กับหน่วยที่พร้อมประกอบ ในกรณีนั้นข้อกำหนดของมาตรฐานนี้
          จะใช้กับหน่วยที่ประกอบแล้ว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเก้าอี้ทำงานทีละขั้นตอน (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการรับรองสำหรับเก้าอี้ทำงานเกี่ยวข้องกับการประเมินห้องปฏิบัติการ
          การตรวจสอบโรงงาน และการตรวจสอบทางเทคนิค
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – การประเมินผลิตภัณฑ์และการแมปมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ระบุตัวแปรเก้าอี้ทั้งหมดและจัดแนวกับ IS 17631:2022
          เข้าใจว่าโมเดลใดใช้โครงสร้างเดียวกันและโมเดลใดต้องการการทดสอบแยก
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – การส่งใบสมัครออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตส่งใบสมัครผ่านพอร์ทัล BIS Manak ออนไลน์ ข้อมูลที่ต้องการรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดสถานที่ผลิต</li>
          <li>การควบคุมวัตถุดิบ</li>
          <li>ข้อกำหนดทางเทคนิค</li>
          <li>ความสามารถในการผลิต</li>
          <li>เอกสารความเป็นเจ้าของแบรนด์</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – การชำระค่าธรรมเนียม
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ต้องชำระค่าธรรมเนียมสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การสมัคร</li>
          <li>การประมวลผล</li>
          <li>การทดสอบ</li>
          <li>การตรวจสอบ</li>
          <li>การทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การทดสอบตัวอย่าง (ข้อกำหนด IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ห้องปฏิบัติการที่ BIS รับรองประเมินเก้าอี้ตามเกณฑ์ความปลอดภัยและ
          ประสิทธิภาพหลายประการ
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          การทดสอบเก้าอี้ทำงานรวมถึง
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบโหลดคงที่ของที่นั่งและหลัง</li>
          <li>รอบการโหลดความทนทาน</li>
          <li>การทดสอบการหมุน/การหมุน</li>
          <li>ความทนทานของกลไกการเอียง</li>
          <li>ประสิทธิภาพของกลไกยกแก๊ส</li>
          <li>ความแข็งแรงของล้อและความต้านทานการหมุน</li>
          <li>ความเสถียรของฐานและการทดสอบโอเวอร์โหลด</li>
          <li>ความสามารถในการรับน้ำหนักของที่วางแขน</li>
          <li>การทดสอบความต้านทานต่อแรงกระแทก</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ห้องปฏิบัติการออกรายงานการทดสอบโดยละเอียดให้กับ BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ตรวจสอบ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ระบบการผลิต</li>
          <li>บันทึกการตรวจสอบวัสดุ</li>
          <li>กระบวนการประกันคุณภาพภายใน</li>
          <li>เครื่องมือทดสอบและบันทึกการสอบเทียบ</li>
          <li>การปฏิบัติตามแผนการทดสอบและการตรวจสอบ (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การให้ใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เมื่อยืนยันการปฏิบัติตามแล้ว BIS จะให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การรับรองใบอนุญาต BIS/เครื่องหมาย ISI</li>
          <li>หมายเลข CML ที่ไม่ซ้ำกัน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – การปฏิบัติตามอย่างสม่ำเสมอ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">ผู้ผลิตต้อง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รักษาการตรวจสอบภายในอย่างต่อเนื่อง</li>
          <li>ปฏิบัติตามกฎการทำเครื่องหมาย</li>
          <li>ให้ความร่วมมือระหว่างการตรวจสอบเฝ้าระวัง</li>
          <li>ต่ออายุใบอนุญาตเป็นระยะ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของเก้าอี้ทำงาน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ชุดเอกสารที่สมบูรณ์รับประกันการอนุมัติที่เร็วขึ้น
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารธุรกิจและโรงงาน
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การลงทะเบียนโรงงาน</li>
          <li>แผนภาพและเค้าโครงการผลิต</li>
          <li>เวิร์กโฟลว์การผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบ</li>
          <li>ใบรับรองการสอบเทียบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบร่างวิศวกรรมเก้าอี้</li>
          <li>ข้อกำหนดกลไก</li>
          <li>แผ่นข้อมูลวัสดุ</li>
          <li>รายการวัสดุ</li>
          <li>คำแนะนำการประกอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานตัวตนของผู้ลงนามที่ได้รับอนุญาต</li>
          <li>จดหมายอนุญาตแบรนด์</li>
          <li>ใบรับรองเครื่องหมายการค้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารเฉพาะ BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มใบสมัคร</li>
          <li>ข้อผูกพัน</li>
          <li>แบบฟอร์มคำขอทดสอบ</li>
          <li>ตัวอย่างป้าย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เก้าอี้ทำงานได้รับการทดสอบที่ซับซ้อนกว่าเก้าอี้ทั่วไปเนื่องจากมีชิ้นส่วนที่
          เคลื่อนไหว
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          การทดสอบหลักที่ดำเนินการ
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
                  การออกแบบและฝีมือ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำขอบด้านหน้า
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำไปข้างหน้า
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำไปข้างหน้าสำหรับเก้าอี้ที่มีที่วางเท้า
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำด้านข้างสำหรับเก้าอี้ที่ไม่มีที่วางแขน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำด้านข้างสำหรับเก้าอี้ที่มีที่วางแขน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การพลิกคว่ำไปข้างหลังสำหรับเก้าอี้ที่ไม่มีพนักพิง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่ขอบด้านหน้าของที่นั่ง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่รวมของที่นั่งและหลัง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่ลงของที่วางแขน — กลาง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่ลงของที่วางแขน — ด้านหน้า
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่ด้านข้างของที่วางแขน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบโหลดคงที่ของที่วางเท้า
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบเหล่านี้จำลองการใช้งานปกติเป็นเดือนหรือปีภายในไม่กี่วัน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปในการรับรอง BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. ความล้มเหลวในการทดสอบทางกล/การเอียง</strong> –
            มักเกิดจาก กลไกที่อ่อนแอหรือฮาร์ดแวร์คุณภาพต่ำ
          </li>
          <li>
            <strong>✔ 2. การไม่ปฏิบัติตามกลไกยกแก๊ส</strong> – ตัวยกแก๊ส
            ต้องเป็นไปตามพารามิเตอร์ความดันและความปลอดภัยที่เข้มงวด
          </li>
          <li>
            <strong>✔ 3. โครงสร้างพื้นฐานการทดสอบไม่เพียงพอ</strong> – การทดสอบ
            เก้าอี้ทำงานต้องการอุปกรณ์พิเศษ
          </li>
          <li>
            <strong>✔ 4. การจัดกลุ่มผลิตภัณฑ์ไม่ถูกต้อง</strong> –
            กลไกที่แตกต่างกัน = การทดสอบแยก
          </li>
          <li>
            <strong>✔ 5. การไม่ปฏิบัติตาม STI</strong> – ข้อผิดพลาด STI
            สามารถชะลอการออกใบอนุญาต
          </li>
          <li>
            <strong>✔ 6. เอกสารไม่ตรงกัน</strong> – ชื่อแบรนด์และชื่อรุ่น
            ต้องตรงกับใบสมัคร BIS อย่างแน่นอน
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเก้าอี้ทำงาน
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>อำนวยความสะดวกในการขายที่ถูกกฎหมายทั่วอินเดีย</li>
          <li>เพิ่มความไว้วางใจของลูกค้าและชื่อเสียงของแบรนด์</li>
          <li>รับประกันความทนทานในระยะยาว</li>
          <li>ลดการเรียกร้องการรับประกันและความล้มเหลว</li>
          <li>ป้องกันจากโทษทางกฎระเบียบ</li>
          <li>เปิดใช้งานการแสดงรายการบนแพลตฟอร์มอีคอมเมิร์ซ</li>
          <li>บังคับสำหรับการประมูลของรัฐบาลและอุปทานองค์กร</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการขายเก้าอี้ทำงานโดยไม่มีการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามอาจส่งผลให้:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>โทษทางการเงินที่หนัก</li>
          <li>การยึดสินค้าคงคลัง</li>
          <li>คำสั่งปิดการผลิต</li>
          <li>การห้ามนำเข้า</li>
          <li>การดำเนินคดีทางอาญา</li>
          <li>การยกเลิกใบอนุญาตธุรกิจ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การบังคับใช้ที่เข้มงวดดำเนินการภายใต้พระราชบัญญัติ BIS พ.ศ. 2559
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครที่ต้องได้รับใบรับรอง BIS สำหรับเก้าอี้ทำงาน?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">บังคับสำหรับ:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศที่ส่งออกไปยังอินเดีย</li>
          <li>เจ้าของแบรนด์</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้จัดหาอุปทาน OEM/ODM</li>
          <li>ผู้จัดจำหน่ายคลังสินค้า</li>
          <li>แบรนด์เฟอร์นิเจอร์ขายปลีกและออนไลน์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ทุกโรงงานต้องการใบอนุญาต BIS ที่ไม่ซ้ำกัน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเก้าอี้ทำงานภายใต้ IS 17631:2022
          มีความสำคัญอย่างยิ่งสำหรับการรับประกันผลิตภัณฑ์ที่นั่งที่ปลอดภัย ทนทาน
          และมีคุณภาพทางสรีรศาสตร์ในอินเดีย
          การรับรองบังคับเพิ่มความไว้วางใจของลูกค้า ลดความเสี่ยงความรับผิดชอบของ
          ผลิตภัณฑ์ และรับประกันการปฏิบัติตามมาตรฐานคุณภาพแห่งชาติ
          ด้วยการสนับสนุนจากผู้เชี่ยวชาญ การเดินทางรับรอง—จากการทดสอบไปจนถึงการ
          ตรวจสอบไปจนถึงการออกใบอนุญาต—กลายเป็นมีประสิทธิภาพและคาดการณ์ได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – ใบรับรอง BIS สำหรับเก้าอี้ทำงาน (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. เก้าอี้ใดที่อยู่ภายใต้ IS 17631:2022?</strong>
              <br />
              เก้าอี้ใดๆ ที่ออกแบบมาสำหรับสภาพแวดล้อมการทำงาน รวมถึงเก้าอี้
              สำนักงานแบบสรีรศาสตร์ เก้าอี้ทำงาน เก้าอี้หมุน และเก้าอี้ปรับได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. การรับรอง BIS เป็นข้อบังคับสำหรับเก้าอี้ทำงานหรือไม่?
              </strong>
              <br />
              ใช่ การรับรอง BIS เป็นข้อบังคับก่อนการผลิต ขาย
              หรือนำเข้าเก้าอี้ทำงานในอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3.
                อะไรที่ทำให้การทดสอบเก้าอี้ทำงานแตกต่างจากการทดสอบเก้าอี้ทั่วไป?
              </strong>
              <br />
              เก้าอี้ทำงานใช้กลไกเช่นการหมุน ตัวยกแก๊ส ระบบการเอียง
              และล้อ—ต้องการการทดสอบทางกลและความทนทานขั้นสูง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. การรับรอง BIS ใช้เวลานานแค่ไหน?</strong>
              <br />
              โดยทั่วไป 30–45 วันสำหรับผู้ผลิตอินเดียและประมาณ 120 วัน
              สำหรับผู้ผลิตต่างประเทศ ขึ้นอยู่กับการทดสอบและเอกสาร
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. ผู้ผลิตต่างประเทศสามารถสมัครได้หรือไม่?</strong>
              <br />
              ใช่ ผ่าน FMCS (แผนการรับรองผู้ผลิตต่างประเทศ)
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. จะเกิดอะไรขึ้นถ้าเก้าอี้ล้มเหลวในการทดสอบ BIS?</strong>
              <br />
              ต้องได้รับการออกแบบใหม่ แก้ไข และทดสอบใหม่จนกว่าจะเป็นไปตาม IS
              17631:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. เอกสารใดที่จำเป็นสำหรับใบสมัคร BIS?</strong>
              <br />
              รายละเอียดโรงงาน แบบร่างผลิตภัณฑ์ รายการเครื่องจักร เอกสาร QC
              ความเป็นเจ้าของแบรนด์ และเอกสารทางกฎหมาย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. รุ่นเก้าอี้ทั้งหมดต้องการการทดสอบแยกหรือไม่?</strong>
              <br />
              หากรุ่นแตกต่างกันในการออกแบบ กลไก หรือโครงสร้าง
              อาจต้องมีการทดสอบแยก
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. การทำเครื่องหมาย ISI เป็นข้อบังคับหลังการอนุมัติหรือไม่?
              </strong>
              <br />
              ใช่ เครื่องหมาย ISI ต้องปรากฏบนผลิตภัณฑ์ ป้าย และบรรจุภัณฑ์
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
