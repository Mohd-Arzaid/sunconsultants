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

const BISCertificateForSeamlessPipesAndTubesThai = () => {
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

export default BISCertificateForSeamlessPipesAndTubesThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ | IS 17875:2022 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ – คู่มือ IS 17875:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับท่อและท่อไร้รอยต่อ | IS 17875:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อภายใต้ IS 17875:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุนและระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับท่อและท่อไร้รอยต่อตาม IS 17875:2022 รู้กระบวนการ ต้นทุน เอกสาร การทดสอบและประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อภายใต้ IS 17875:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียมและระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ, ใบอนุญาต BIS สำหรับท่อและท่อไร้รอยต่อ, IS 17875:2022, การรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tho-lae-tho-rai-roi-tor-is-17875";
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
                    ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ – IS 17875:2022
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
          ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อภายใต้ IS 17875:2022 —
          คู่มือการรับรองฉบับสมบูรณ์
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="ใบอนุญาต BIS สำหรับท่อและท่อไร้รอยต่อ"
            alt="ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ - IS 17875:2022 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ท่อและท่อเหล็กไร้รอยต่อได้รับการยอมรับอย่างกว้างขวางสำหรับประสิทธิภาพที่เหนือกว่า
          ในแอปพลิเคชันที่สำคัญ แรงดันสูง และอุณหภูมิสูง
          พวกมันมีความจำเป็นในอุตสาหกรรมต่างๆ เช่น น้ำมันและก๊าซ ปิโตรเคมี
          โรงกลั่น วิศวกรรมหนัก อุตสาหกรรมยานยนต์ โรงไฟฟ้าพลังความร้อน อวกาศ
          ไฮดรอลิกส์ และระบบกลไกทั่วไป เนื่องจากท่อไร้รอยต่อไม่มีรอยเชื่อม
          จึงมีความแข็งแรง ความสม่ำเสมอ
          และความสามารถในการจัดการแรงดันมากกว่าท่อเชื่อม
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อให้แน่ใจว่าผู้ผลิตปฏิบัติตามคุณภาพการผลิตที่สม่ำเสมอและ
          จัดหาผลิตภัณฑ์ที่ปลอดภัยและไม่มีข้อบกพร่องเข้าสู่ตลาดอินเดีย
          รัฐบาลอินเดียได้กำหนดให้การรับรอง BIS
          เป็นข้อบังคับสำหรับท่อและท่อไร้รอยต่อ ภายใต้ IS 17875:2022
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หน้านี้ครอบคลุมอธิบายกระบวนการทั้งหมดในการขอใบอนุญาต BIS รวมถึงเอกสาร
          การทดสอบบังคับ ข้อกำหนดการปฏิบัติตามคุณภาพ ค่าธรรมเนียม ระยะเวลา
          ความท้าทายทางเทคนิค ประโยชน์ โทษ และการใช้งานในอุตสาหกรรม —
          เขียนในรูปแบบที่ขยายออกไป รายละเอียดลึกซึ้ง และอุดมไปด้วย SEO
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับท่อและท่อไร้รอยต่อคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS
          คือการอนุมัติอย่างเป็นทางการที่ออกโดยสำนักงานมาตรฐานอินเดีย
          ยืนยันว่าผู้ผลิตผลิตท่อ/ท่อไร้รอยต่อตามข้อกำหนดที่กำหนดไว้ภายใต้ IS
          17875:2022
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          ท่อไร้รอยต่อต้องผ่านการทดสอบที่เข้มงวดที่เกี่ยวข้องกับ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความต้านทานแรงดัน</li>
          <li>ความแข็งแรงแรงดึง</li>
          <li>ความเหนียวต่อแรงกระแทก</li>
          <li>ความสามารถในการโค้งงอ</li>
          <li>องค์ประกอบทางเคมี</li>
          <li>ความแม่นยำของมิติ</li>
          <li>การประเมินแบบไม่ทำลาย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เฉพาะผู้ผลิตที่ตรงตามข้อกำหนดประสิทธิภาพเหล่านี้เท่านั้นที่จะได้รับ
          เครื่องหมาย ISI ซึ่งทำให้พวกเขาสามารถผลิต นำเข้า
          หรือขายท่อไร้รอยต่อในอินเดียได้อย่างถูกกฎหมาย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          วัตถุประสงค์หลักของการรับรอง BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ป้องกันระบบท่อที่ไม่ได้มาตรฐานหรือเป็นอันตรายจากการเข้าสู่
            ห่วงโซ่อุปทานอุตสาหกรรม
          </li>
          <li>รับประกันคุณภาพการผลิตที่สม่ำเสมอและเชื่อถือได้</li>
          <li>ป้องกันอุตสาหกรรมที่พึ่งพาการส่งผ่านของเหลวหรือก๊าซแรงดันสูง</li>
          <li>รักษามาตรฐานความปลอดภัยและคุณภาพระดับชาติ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำความเข้าใจ IS 17875:2022 — มาตรฐานอินเดียสำหรับท่อและท่อไร้รอยต่อ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 ระบุข้อกำหนดคุณภาพ การทดสอบ การผลิต และ
          ประสิทธิภาพสำหรับท่อและท่อเหล็กไร้รอยต่อที่ใช้สำหรับบริการทั่วไป
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับท่อและท่อไร้รอยต่อ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> มาตรฐานนี้ครอบคลุมข้อกำหนดสำหรับ
          ท่อและท่อสแตนเลสไร้รอยต่อสำหรับบริการทั่วไป
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> มาตรฐานนี้ไม่ได้ระบุข้อกำหนดของ
          ท่อและท่อสแตนเลสไร้รอยต่อที่ใช้สำหรับวัตถุประสงค์ที่แตกต่างกัน
          ซึ่งครอบคลุมโดยมาตรฐานอินเดียแยกต่างหาก
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          แอปพลิเคชันที่ครอบคลุมภายใต้ IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ท่อส่งน้ำมันและก๊าซ</li>
          <li>บริการของเหลวอุณหภูมิสูง</li>
          <li>ท่อหม้อไอน้ำ</li>
          <li>โรงงานแปรรูปเคมี</li>
          <li>ระบบไฮดรอลิกและนิวแมติก</li>
          <li>เครื่องแลกเปลี่ยนความร้อน</li>
          <li>แอปพลิเคชันโครงสร้าง</li>
          <li>ส่วนประกอบยานยนต์</li>
          <li>แอปพลิเคชันไอน้ำ</li>
          <li>ท่อส่งอุตสาหกรรมแรงดันสูง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          พารามิเตอร์คุณภาพหลักใน IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. ข้อกำหนดองค์ประกอบทางเคมี:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          ระบุขีดจำกัดสำหรับคาร์บอน แมงกานีส โครเมียม นิกเกิล โมลิบดีนัม กำมะถัน
          ฟอสฟอรัส ฯลฯ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. คุณสมบัติทางกล:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความแข็งแรงแรงดึง</li>
          <li>จุดคราก</li>
          <li>ความแข็ง</li>
          <li>ความเหนียว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. ความคลาดเคลื่อนของมิติ:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เส้นผ่านศูนย์กลางภายนอก</li>
          <li>ความหนาของผนัง</li>
          <li>ความคลาดเคลื่อนของความยาว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. สภาพพื้นผิว:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          ท่อต้องปราศจากรอยแตก การแยกชั้น รอยเชื่อม รอยขีด หรือ
          ข้อบกพร่องที่เป็นอันตรายใดๆ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. การทดสอบไฮโดรสแตติก:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          รับประกันว่าท่อสามารถทนต่อแรงดันภายในโดยไม่รั่วไหล
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. การทดสอบแบบไม่ทำลาย (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          รวมถึงกระแสวน การทดสอบอัลตราโซนิก หรือการทดสอบอนุภาคแม่เหล็ก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS ฉบับสมบูรณ์สำหรับท่อไร้รอยต่อ (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการรับรอง BIS สำหรับท่อไร้รอยต่อมีความเป็นเทคนิคและ
          รายละเอียดมากกว่าผลิตภัณฑ์อื่นๆ ส่วนใหญ่เพราะข้อกำหนดการผลิตและ
          การทดสอบมีความครอบคลุม ด้านล่างนี้คือคำอธิบายทีละขั้นตอนที่ละเอียดมาก
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 — กำหนดการใช้งานและการจัดหมวดหมู่ผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">ผู้ผลิตต้อง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ระบุเกรดเหล็กทั้งหมดที่ใช้</li>
          <li>กำหนดขนาดและช่วงความหนา</li>
          <li>ยืนยันว่าตัวแปรทั้งหมดอยู่ในขอบเขตของ IS 17875 หรือไม่</li>
          <li>เตรียมการจัดหมวดหมู่ผลิตภัณฑ์สำหรับการทดสอบ BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ใบอนุญาต BIS เดียวอาจครอบคลุมหลายขนาดและเกรดหากใช้
          สถานที่ผลิตและกระบวนการเดียวกัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 — เตรียมเอกสารและยื่นคำขอ BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้องยื่นคำขอในพอร์ทัล BIS ออนไลน์ Manak
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">ข้อมูลรวมถึง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดและแผนผังโรงงาน</li>
          <li>กำลังการผลิตและกระบวนการ</li>
          <li>รายละเอียดเตาเผาและการบำบัดความร้อน</li>
          <li>อุปกรณ์รีด เจาะ และดึง</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>เอกสารการจัดหาวัตถุดิบ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          การยื่นคำขอที่ไม่ถูกต้องเป็นหนึ่งในสาเหตุที่พบบ่อยที่สุดของการปฏิเสธคำขอ
          BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 — การชำระค่าธรรมเนียม
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ค่าธรรมเนียมรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบในห้องปฏิบัติการ</li>
          <li>ค่าใช้จ่ายในการตรวจสอบและการเดินทาง</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมายตามปริมาณการผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 — การเลือกตัวอย่างและการทดสอบในห้องปฏิบัติการ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ท่อไร้รอยต่อต้องผ่านการทดสอบทางกลและทางเคมีอย่างกว้างขวาง
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          นี่เป็นส่วนที่ใช้เวลามากที่สุดและเป็นเทคนิคมากที่สุดของการรับรอง BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ การทดสอบองค์ประกอบทางเคมี</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          ดำเนินการโดยใช้:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สเปกโทรสโกปีการปล่อยแสง</li>
          <li>วิธีการทางเคมีแบบเปียก</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          รับประกันองค์ประกอบทางเคมีที่แน่นอนตาม IS 17875
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ การทดสอบทางกล</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>การทดสอบแรงดึง</strong> — ประเมินความแข็งแรงแรงดึงสูงสุด
            จุดคราก และการยืดตัว
          </li>
          <li>
            <strong>การทดสอบความแข็ง</strong> — ยืนยันความเหนียวของวัสดุ
          </li>
          <li>
            <strong>การทดสอบการกดแบน</strong> —
            ทดสอบความเหนียวและความสามารถในการเชื่อม (แม้ว่าจะไร้รอยต่อ
            การกดแบนตรวจสอบความสมบูรณ์ของวัสดุ)
          </li>
          <li>
            <strong>การทดสอบการขยาย / ฟลานจ์</strong> —
            รับประกันความสามารถในการเปลี่ยนรูป โดยไม่แตก
          </li>
          <li>
            <strong>การทดสอบแรงกระแทก (Charpy)</strong> —
            ประเมินประสิทธิภาพที่อุณหภูมิต่ำ
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ การทดสอบไฮโดรสแตติก</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          ท่อจะถูกทดสอบด้วยแรงดันภายในสูงเพื่อให้แน่ใจว่าไม่เกิดการรั่วไหลหรือ
          การเปลี่ยนรูป
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – การทดสอบแบบไม่ทำลาย</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          บังคับสำหรับการตรวจจับข้อบกพร่องภายใน
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          วิธีการรวมถึง:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตรวจสอบอัลตราโซนิก</li>
          <li>การตรวจสอบกระแสวน</li>
          <li>การตรวจสอบอนุภาคแม่เหล็ก (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ การตรวจสอบด้วยสายตาและมิติ</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">ประเมิน:</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตกแต่งพื้นผิว</li>
          <li>ความตรง</li>
          <li>ความรี</li>
          <li>ความคลาดเคลื่อนของความหนา</li>
          <li>ความแม่นยำของเส้นผ่านศูนย์กลาง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ การตรวจสอบโลหะวิทยา</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          การวิเคราะห์โครงสร้างจุลภาคยืนยันโครงสร้างเมล็ด
          ประสิทธิภาพการบำบัดความร้อน และความเสถียรของวัสดุ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 — การตรวจสอบโรงงาน BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เมื่อผลการทดสอบสำเร็จ เจ้าหน้าที่ BIS จะเยี่ยมชมโรงงาน
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          พวกเขาตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การจัดเก็บวัตถุดิบ</li>
          <li>กระบวนการเตาเผา/การบำบัดความร้อน</li>
          <li>โรงงานเจาะ ตัวลด และม้านั่งดึงเย็น</li>
          <li>สิ่งอำนวยความสะดวกการทดสอบไฮโดรสแตติก</li>
          <li>สิ่งอำนวยความสะดวก NDT</li>
          <li>อุปกรณ์ห้องปฏิบัติการและการสอบเทียบ</li>
          <li>สมุดบันทึกควบคุมคุณภาพ</li>
          <li>การตรวจสอบกำลังการผลิต</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          โรงงานต้องปฏิบัติตามโครงการทดสอบและการตรวจสอบ (STI) อย่างเต็มที่
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 — การอนุมัติใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หากการทดสอบและการตรวจสอบเป็นไปตามข้อกำหนด BIS ผู้ผลิต จะได้รับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS</li>
          <li>หมายเลข CML</li>
          <li>การอนุญาตให้ใช้เครื่องหมาย ISI บนท่อไร้รอยต่อ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS อาจปฏิเสธคำขอหากแม้แต่ข้อกำหนดเดียวไม่เป็นไปตาม —
          ทำให้คำแนะนำจากผู้เชี่ยวชาญมีค่ามาก
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 — ภาระผูกพันหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">ผู้ผลิตต้อง:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใช้เครื่องหมาย ISI อย่างถูกต้องบนฉลาก บรรจุภัณฑ์ และท่อ</li>
          <li>รักษาการทดสอบภายในตาม STI</li>
          <li>ผ่านการตรวจสอบเฝ้าระวัง BIS เป็นประจำ</li>
          <li>รับประกันว่าทุกล็อตเป็นไปตาม IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          การไม่รักษาการปฏิบัติตามอาจส่งผลให้ใบอนุญาตถูกระงับหรือ ยกเลิก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของท่อไร้รอยต่อ
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. เอกสารการผลิตและการผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบอนุญาตโรงงาน</li>
          <li>แผนผังพร้อมตำแหน่งเครื่องจักร</li>
          <li>คู่มือกระบวนการควบคุมคุณภาพ</li>
          <li>บันทึกการบำบัดความร้อน</li>
          <li>ใบรับรองการทดสอบโรงงานวัตถุดิบ</li>
          <li>รายละเอียดกระบวนการรีด/เจาะ</li>
          <li>รายละเอียดม้านั่งดึง</li>
          <li>ใบรับรองการสอบเทียบสำหรับอุปกรณ์ทดสอบ</li>
          <li>รายงานการทดสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>บิลของวัสดุ</li>
          <li>ข้อกำหนดเกรดทางเคมี</li>
          <li>แผ่นคุณสมบัติทางกล</li>
          <li>แผนภูมิความคลาดเคลื่อนของมิติ</li>
          <li>แบบแปลนและข้อกำหนดของท่อ</li>
          <li>เอกสารระบบการติดตามวัสดุ</li>
          <li>ขั้นตอนการทำงานมาตรฐานสำหรับการผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. เอกสารทางกฎหมายและองค์กร
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>จดหมายอนุญาต</li>
          <li>เอกสารความเป็นเจ้าของแบรนด์/เครื่องหมายการค้า</li>
          <li>หลักฐานตัวตนและที่อยู่</li>
          <li>ข้อผูกพันและคำประกาศตามที่ BIS กำหนด</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับท่อไร้รอยต่อภายใต้ IS 17875:2022
        </h2>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การวิเคราะห์กระทะ
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
                  การทดสอบการขยาย
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบการกดแบน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาดเมล็ด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความแน่น
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ฝีมือ การตกแต่ง รูปลักษณ์
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาดและความคลาดเคลื่อน
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปในการรับรอง BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>ความล้มเหลวในการทดสอบองค์ประกอบทางเคมี</strong>
            <br />
            เกิดขึ้นเนื่องจากเกรดเหล็กที่ไม่สม่ำเสมอ
          </li>
          <li>
            <strong>ความล้มเหลวของการทดสอบทางกล</strong>
            <br />
            มักเกิดจากการบำบัดความร้อนที่ไม่ถูกต้อง
          </li>
          <li>
            <strong>การปฏิเสธ NDT</strong>
            <br />
            รอยแตกภายในหรือสิ่งเจือปนอาจทำให้ตัวอย่างล้มเหลว
          </li>
          <li>
            <strong>การสอบเทียบไม่เพียงพอ</strong>
            <br />
            นำไปสู่ข้อมูลการทดสอบที่ไม่ถูกต้อง
          </li>
          <li>
            <strong>การไม่ปฏิบัติตาม STI</strong>
            <br />
            การบันทึกที่ไม่ถูกต้องระหว่างการตรวจสอบกลายเป็นสาเหตุหลักของการปฏิเสธ
          </li>
          <li>
            <strong>ความแปรปรวนของมิติ</strong>
            <br />
            ความไม่สอดคล้องของเส้นผ่านศูนย์กลางหรือความหนาของท่อทำให้เกิดความล้มเหลว
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับท่อไร้รอยต่อ
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การอนุมัติทางกฎหมายในการผลิต/ขายในอินเดีย</li>
          <li>รับประกันความปลอดภัยและความน่าเชื่อถือ</li>
          <li>ปรับปรุงชื่อเสียงของแบรนด์</li>
          <li>จำเป็นสำหรับการประมูลของรัฐบาล</li>
          <li>จำเป็นสำหรับอุตสาหกรรม PSU และเอกชน</li>
          <li>ปกป้องผู้บริโภคจากผลิตภัณฑ์ที่ไม่ได้มาตรฐาน</li>
          <li>เพิ่มความสามารถในการแข่งขันในการส่งออก</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          ภายใต้พระราชบัญญัติ BIS
          การขายท่อไร้รอยต่อที่ไม่ได้รับการรับรองส่งผลให้:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดผลิตภัณฑ์</li>
          <li>โทษหนัก</li>
          <li>การปิดการผลิต</li>
          <li>ข้อจำกัดการนำเข้า</li>
          <li>การขึ้นบัญชีดำแบรนด์</li>
          <li>การดำเนินคดีทางอาญา</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องได้รับใบรับรอง BIS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศที่ส่งออกไปยังอินเดีย</li>
          <li>พ่อค้า (เจ้าของแบรนด์)</li>
          <li>บริษัท OEM และวิศวกรรม</li>
          <li>ผู้นำเข้าและผู้จัดเก็บ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ทุกหน่วยการผลิตต้องได้รับใบอนุญาตแยกต่างหาก
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อภายใต้ IS 17875:2022
          เป็นข้อกำหนดด้านกฎระเบียบที่สำคัญที่รับประกันว่าท่อบริการแรงดันสูง
          เป็นไปตามมาตรฐานความปลอดภัยและคุณภาพที่เข้มงวดของอินเดีย
          ตั้งแต่องค์ประกอบทางเคมีไปจนถึงการทดสอบแบบไม่ทำลายขั้นสูง BIS
          รับประกันว่าท่อที่ได้รับการรับรองทุกท่อมีความทนทาน ปราศจากข้อบกพร่อง
          และสามารถทำงานภายใต้สภาวะอุตสาหกรรมที่ต้องการได้
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยคำแนะนำจากผู้เชี่ยวชาญ
          ผู้ผลิตสามารถทำให้กระบวนการรับรองเป็นไปอย่างราบรื่น ลดความล่าช้า
          และบรรลุการปฏิบัติตามได้อย่างราบรื่น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย — การรับรอง BIS สำหรับท่อไร้รอยต่อ (ขยายและอุดมไปด้วย
          SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. ทำไมการรับรอง BIS จึงเป็นข้อบังคับสำหรับท่อไร้รอยต่อ?
              </strong>
              <br />
              เพราะท่อไร้รอยต่อใช้ในแอปพลิเคชันแรงดันสูงและ สำคัญต่อความปลอดภัย
              กฎระเบียบของรัฐบาลรับประกันว่าเฉพาะ
              ท่อคุณภาพสูงเท่านั้นที่เข้าสู่ตลาดอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. มาตรฐานใดที่ใช้กับท่อไร้รอยต่อ?</strong>
              <br />
              IS 17875:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. กระบวนการรับรองใช้เวลานานแค่ไหน?</strong>
              <br />
              โดยทั่วไป 40–60 วันสำหรับผู้ผลิตอินเดียและประมาณ 120 วัน
              สำหรับผู้ผลิตต่างประเทศ ขึ้นอยู่กับภาระการทดสอบและการจัดตาราง
              การตรวจสอบ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. ต้องทดสอบอะไรบ้าง?</strong>
              <br />
              การวิเคราะห์ทางเคมี การทดสอบแรงดึง ความแข็ง ไฮโดรสแตติก NDT
              การกดแบน การขยาย และการตรวจสอบมิติ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. บริษัทต่างประเทศสามารถสมัครรับรอง BIS ได้หรือไม่?
              </strong>
              <br />
              ได้ ผ่านโครงการ FMCS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. จะเกิดอะไรขึ้นหากผลิตภัณฑ์ล้มเหลวในการทดสอบ?</strong>
              <br />
              ต้องแก้ไขและทดสอบใหม่ BIS จะไม่ออกใบอนุญาต
              จนกว่าจะบรรลุการปฏิบัติตามอย่างเต็มที่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. ต้องใช้เอกสารอะไรบ้าง?</strong>
              <br />
              ใบอนุญาตโรงงาน รายการเครื่องจักร อุปกรณ์ทดสอบ แบบแปลน เอกสาร
              ควบคุมคุณภาพ ใบรับรองวัตถุดิบ ฯลฯ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. การทำเครื่องหมาย ISI เป็นข้อบังคับหรือไม่?</strong>
              <br />
              ใช่ เป็นสิ่งผิดกฎหมายที่จะขายท่อไร้รอยต่อโดยไม่แสดงเครื่องหมาย ISI
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. อนุญาตให้มีหลายเกรดในใบอนุญาตเดียวได้หรือไม่?</strong>
              <br />
              ได้ หากผลิตโดยใช้สถานที่และกระบวนการเดียวกัน (ขึ้นอยู่กับ
              การอนุมัติ BIS)
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. ใบอนุญาต BIS ใช้ได้นานแค่ไหน?</strong>
              <br />
              1–2 ปี ต่ออายุได้ไม่จำกัด
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับท่อและท่อไร้รอยต่อ - IS 17875:2022 PDF"
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
                alt="โลโก้ใบรับรอง LMPC"
                title="โลโก้ใบรับรอง LMPC"
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
