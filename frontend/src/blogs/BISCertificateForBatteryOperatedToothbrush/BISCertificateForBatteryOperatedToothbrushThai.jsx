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

const BISCertificateForBatteryOperatedToothbrushThai = () => {
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

export default BISCertificateForBatteryOperatedToothbrushThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ | ใบอนุญาต BIS IS 302 (ส่วนที่ 1):2024";
  const ogTitle =
    "การรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ – คู่มือ IS 302 (ส่วนที่ 1):2024";
  const twitterTitle =
    "ใบอนุญาต BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ | IS 302 (ส่วนที่ 1):2024";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 กระบวนการ เอกสาร การทดสอบ ค่าใช้จ่าย และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS แปรงสีฟันใช้แบตเตอรี่ตาม IS 302 (ส่วนที่ 1):2024 เรียนรู้กระบวนการ ค่าใช้จ่าย เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่, ใบอนุญาต BIS สำหรับแปรงสีฟันใช้แบตเตอรี่, IS 302 (ส่วนที่ 1):2024, การรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/praeng-si-fan-batari-is-302";
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
                    ใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ – IS 302 (ส่วนที่
                    1):2024
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
          การรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ – คู่มือฉบับสมบูรณ์สำหรับ IS
          302 (ส่วนที่ 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedTootbrush.png"
            title="ใบอนุญาต BIS สำหรับแปรงสีฟันใช้แบตเตอรี่"
            alt="ใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ - IS 302 (ส่วนที่ 1):2024 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ตลาดดูแลช่องปากของอินเดียมีการเติบโตอย่างรวดเร็วในช่วงไม่กี่ปีที่ผ่านมา
          โดยแปรงสีฟันใช้แบตเตอรี่กลายเป็นตัวเลือกที่ต้องการของผู้บริโภคที่ต้องการสุขอนามัยที่ดีขึ้น
          ความสะดวกสบาย และการกำจัดคราบพลัคอย่างมีประสิทธิภาพ
          แปรงสีฟันเหล่านี้ใช้กันอย่างแพร่หลายในบ้าน โรงแรม โรงพยาบาล
          ชุดเดินทาง และกิจวัตรการดูแลส่วนบุคคล โดยเฉพาะโดยเด็ก ผู้สูงอายุ
          และผู้ที่มีข้อจำกัดในการเคลื่อนไหวมือ
          เนื่องจากแปรงสีฟันใช้แบตเตอรี่รวมส่วนประกอบไฟฟ้า แบตเตอรี่
          การสัมผัสความชื้น และการสัมผัสโดยตรงกับร่างกายมนุษย์
          การปฏิบัติตามความปลอดภัยและคุณภาพจึงมีความสำคัญอย่างยิ่ง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การออกแบบที่ไม่เหมาะสมหรือการผลิตที่ต่ำกว่ามาตรฐานของแปรงสีฟันใช้แบตเตอรี่อาจส่งผลให้เกิดไฟฟ้าช็อต
          การรั่วไหลของแบตเตอรี่ ความร้อนสูงเกินไป อันตรายจากไฟไหม้
          หรือการบาดเจ็บทางกล เพื่อปกป้องผู้บริโภคและควบคุมคุณภาพผลิตภัณฑ์
          รัฐบาลอินเดียกำหนดให้เครื่องใช้ไฟฟ้าดูแลส่วนบุคคลดังกล่าวต้องปฏิบัติตามมาตรฐานความปลอดภัยของอินเดีย
          ดังนั้น การได้รับใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ภายใต้ IS 302
          (ส่วนที่ 1):2024
          จึงเป็นข้อกำหนดทางกฎหมายที่บังคับก่อนการผลิต นำเข้า ขาย
          หรือจำหน่ายผลิตภัณฑ์เหล่านี้ในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS ที่ถูกต้องสำหรับแปรงสีฟันใช้แบตเตอรี่ยืนยันว่าผลิตภัณฑ์ได้รับการทดสอบและอนุมัติสำหรับความปลอดภัยทางไฟฟ้า
          ฉนวน ความแข็งแรงทางกล ความทนทานต่อความชื้น
          และการป้องกันผู้ใช้โดยรวม
          คู่มือรายละเอียดนี้เขียนขึ้นสำหรับผู้ผลิต ผู้ผลิตต่างประเทศ ผู้นำเข้า
          เจ้าของแบรนด์ ผู้ค้า ผู้จัดจำหน่าย ผู้ขายอีคอมเมิร์ซ
          และผู้เชี่ยวชาญด้านการปฏิบัติตามที่ต้องการความเข้าใจที่สมบูรณ์เกี่ยวกับใบอนุญาต
          BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ รวมถึงกระบวนการรับรอง
          ข้อกำหนดการทดสอบ เอกสาร ค่าใช้จ่าย ระยะเวลา บทลงโทษ
          และภาระผูกพันหลังการรับรอง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS คือระบบการประเมินความสอดคล้องอย่างเป็นทางการของอินเดียซึ่งบริหารจัดการโดยสำนักงานมาตรฐานอินเดีย
          (Bureau of Indian Standards) BIS
          ดำเนินงานภายใต้กระทรวงกิจการผู้บริโภคและรับผิดชอบในการพัฒนามาตรฐานอินเดียและรับรองว่าผลิตภัณฑ์ที่ขายในตลาดอินเดียเป็นไปตามเกณฑ์ความปลอดภัย
          คุณภาพ และความน่าเชื่อถือที่กำหนดไว้
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ความหมายของใบรับรอง BIS หมายถึงการอนุญาตที่ออกโดย BIS
          ซึ่งอนุญาตให้ผู้ผลิตหรือผู้นำเข้าขายผลิตภัณฑ์ที่สอดคล้องกับมาตรฐานอินเดีย
          (IS) เฉพาะ การรับรองนี้ยังอนุญาตให้ใช้เครื่องหมายรับรอง BIS (เครื่องหมาย
          ISI) บนผลิตภัณฑ์ที่ได้รับการอนุมัติ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          การรับรอง BIS มีอยู่เพื่อ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ปกป้องผู้บริโภคจากผลิตภัณฑ์ไฟฟ้าและอิเล็กทรอนิกส์ที่ไม่ปลอดภัย
          </li>
          <li>ลดความเสี่ยงจากไฟฟ้าช็อต ไฟไหม้ และอันตรายทางกล</li>
          <li>รับรองคุณภาพที่สม่ำเสมอทั้งสินค้าในประเทศและนำเข้า</li>
          <li>เปิดใช้งานการบังคับใช้กฎระเบียบและการเฝ้าระวังตลาด</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          คำอธิบายเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมาย BIS (เครื่องหมาย ISI)
          บนแปรงสีฟันใช้แบตเตอรี่บ่งบอกว่า:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผลิตภัณฑ์สอดคล้องกับ IS 302 (ส่วนที่ 1):2024</li>
          <li>ฉนวนไฟฟ้าและโครงสร้างมีความปลอดภัย</li>
          <li>เครื่องใช้ได้รับการอนุมัติตามกฎหมายสำหรับการขายในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้บังคับสำหรับแปรงสีฟันใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (ส่วนที่ 1):2024 – ความปลอดภัยของเครื่องใช้ไฟฟ้าในครัวเรือนและที่คล้ายกัน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้บังคับสำหรับแปรงสีฟันใช้แบตเตอรี่คือ IS 302 (ส่วนที่
          1):2024
          ซึ่งกำหนดข้อกำหนดความปลอดภัยทั่วไปสำหรับเครื่องใช้ไฟฟ้าที่มีไว้สำหรับใช้ในครัวเรือนและที่คล้ายกัน
          รวมถึงอุปกรณ์ดูแลส่วนบุคคล
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขตของ IS 302 (ส่วนที่ 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความปลอดภัยทางไฟฟ้าของเครื่องใช้ที่ใช้พลังงานจากแบตเตอรี่</li>
          <li>การป้องกันไฟฟ้าช็อตและการซึมผ่านของความชื้น</li>
          <li>ความปลอดภัยทางกลและข้อกำหนดการก่อสร้าง</li>
          <li>ความร้อน การทำงานผิดปกติ และความน่าเชื่อถือของชิ้นส่วน</li>
          <li>ฉนวน ระยะห่างการเลื้อย และระยะห่าง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          วัตถุประสงค์ด้านความปลอดภัย ประสิทธิภาพ และการทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (ส่วนที่ 1):2024 มีจุดมุ่งหมายเพื่อให้แน่ใจว่า:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            แปรงสีฟันใช้แบตเตอรี่ทำงานอย่างปลอดภัยภายใต้สภาวะปกติและสภาวะผิดปกติ
          </li>
          <li>
            ผู้ใช้ได้รับการปกป้องจากอันตรายทางไฟฟ้า ความร้อน และทางกล
          </li>
          <li>แบตเตอรี่และวงจรภายในไม่ร้อนเกินไปหรือรั่วไหล</li>
          <li>ผลิตภัณฑ์ยังคงปลอดภัยในระหว่างการใช้งานประจำวันซ้ำๆ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ใครต้องปฏิบัติตาม
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดียของแปรงสีฟันใช้แบตเตอรี่</li>
          <li>ผู้นำเข้าและผู้จัดจำหน่าย</li>
          <li>ผู้ผลิตต่างประเทศที่จัดหาให้อินเดีย</li>
          <li>เจ้าของแบรนด์และผู้ขายฉลากส่วนตัว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงบังคับสำหรับแปรงสีฟันใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความเสี่ยงด้านความปลอดภัยของผู้บริโภค
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          แปรงสีฟันที่ไม่ได้รับการรับรองอาจนำไปสู่:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ไฟฟ้าช็อตเนื่องจากฉนวนไม่ดี</li>
          <li>การรั่วไหลหรือการระเบิดของแบตเตอรี่</li>
          <li>ความร้อนสูงเกินไปในระหว่างการใช้งานเป็นเวลานาน</li>
          <li>การบาดเจ็บทางกลจากกลไกการสั่นที่ผิดพลาด</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามของรัฐบาล
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ภายใต้ประกาศ BIS ที่ใช้บังคับและข้อบังคับความปลอดภัยทางไฟฟ้า
          แปรงสีฟันใช้แบตเตอรี่อยู่ภายใต้การรับรอง BIS ภาคบังคับ
          การขายผลิตภัณฑ์ดังกล่าวโดยไม่มีการรับรองเป็นการละเมิดกฎหมายอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลกระทบทางกฎหมาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามอาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดผลิตภัณฑ์</li>
          <li>ค่าปรับทางการเงินจำนวนมาก</li>
          <li>การห้ามนำเข้าและการปฏิเสธจากศุลกากร</li>
          <li>การดำเนินคดีทางกฎหมายภายใต้พระราชบัญญัติ BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางการตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบอนุญาต BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ช่วยให้ธุรกิจ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สร้างความไว้วางใจและความมั่นใจของผู้บริโภค</li>
          <li>เปิดใช้งานการลงรายการบนแพลตฟอร์มอีคอมเมิร์ซ</li>
          <li>มีคุณสมบัติสำหรับห่วงโซ่อุปทานสถาบันและค้าปลีก</li>
          <li>เสริมสร้างชื่อเสียงของแบรนด์ในระยะยาว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS แบบทีละขั้นตอนสำหรับแปรงสีฟันใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การใช้บังคับและการระบุมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ขั้นตอนแรกเกี่ยวข้องกับการยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หมวดหมู่ผลิตภัณฑ์: แปรงสีฟันใช้แบตเตอรี่</li>
          <li>แหล่งพลังงานและประเภทแบตเตอรี่</li>
          <li>มาตรฐานที่ใช้บังคับ: IS 302 (ส่วนที่ 1):2024</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          กระบวนการสมัครการรับรอง BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตหรือผู้นำเข้าต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ลงทะเบียนบนพอร์ทัล BIS</li>
          <li>ส่งใบสมัคร BIS ออนไลน์</li>
          <li>อัปโหลดเอกสารทางเทคนิคและกฎหมาย</li>
          <li>ชำระค่าธรรมเนียมรัฐบาลที่เกี่ยวข้อง</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนนี้เรียกกันทั่วไปว่าการสมัคร BIS ออนไลน์หรือการลงทะเบียนใบรับรอง
          BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          โครงสร้างค่าธรรมเนียมและค่าใช้จ่ายสำหรับใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ค่าใช้จ่ายการรับรอง BIS โดยทั่วไปรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัครและการดำเนินการ</li>
          <li>ค่าใช้จ่ายการทดสอบผลิตภัณฑ์</li>
          <li>ค่าใช้จ่ายการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาตและการติดเครื่องหมาย</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ค่าใช้จ่ายรวมของการรับรอง BIS ขึ้นอยู่กับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความซับซ้อนของผลิตภัณฑ์</li>
          <li>การออกแบบแบตเตอรี่และตัวเรือน</li>
          <li>สถานที่ผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์ (ตาม IS 302 ส่วนที่ 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างจะได้รับการทดสอบในห้องปฏิบัติการที่ BIS รับรองสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การป้องกันไฟฟ้าช็อต</li>
          <li>ความทนทานต่อความชื้น</li>
          <li>ความร้อนและการทำงานผิดปกติ</li>
          <li>ความต้านทานฉนวน</li>
          <li>ความแข็งแรงไดอิเล็กทริก</li>
          <li>ความแข็งแรงทางกล</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบและตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิตและสายการประกอบ</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>การจัดหาแบตเตอรี่และการควบคุมความปลอดภัย</li>
          <li>สิ่งอำนวยความสะดวกการทดสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การให้ใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากการทดสอบและตรวจสอบสำเร็จ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS ออกใบอนุญาตสำนักงานมาตรฐานอินเดีย</li>
          <li>ผู้ผลิตได้รับอนุญาตให้ติดเครื่องหมาย ISI</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากได้รับการอนุมัติ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>มีการดำเนินการตรวจสอบเฝ้าระวัง</li>
          <li>อาจมีการทดสอบตัวอย่างตลาด</li>
          <li>การต่ออายุใบอนุญาตเป็นระยะเป็นข้อบังคับ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการจดทะเบียนโรงงาน</li>
          <li>แผนภาพกระบวนการผลิต</li>
          <li>รายการเครื่องจักรและอุปกรณ์ทดสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการจดทะเบียนบริษัท</li>
          <li>การจดทะเบียน GST</li>
          <li>การอนุญาตแบรนด์ (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แผนภาพวงจรไฟฟ้า</li>
          <li>ข้อมูลจำเพาะและเอกสารข้อมูลแบตเตอรี่</li>
          <li>รายการชิ้นส่วน</li>
          <li>คู่มือผู้ใช้และงานศิลป์ฉลาก</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัคร BIS</li>
          <li>แบบฟอร์มคำขอทดสอบ</li>
          <li>คำประกาศและคำรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งเหล่านี้เรียกรวมกันว่าเอกสารใบรับรอง BIS หรือเอกสารการรับรอง BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 302 (ส่วนที่ 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบภาคบังคับรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบการป้องกันไฟฟ้าช็อต</li>
          <li>การทดสอบความทนทานต่อความชื้น</li>
          <li>การทดสอบความร้อนและการทำงานผิดปกติ</li>
          <li>การทดสอบความต้านทานฉนวน</li>
          <li>การทดสอบความแข็งแรงไดอิเล็กทริก</li>
          <li>การทดสอบความแข็งแรงทางกล</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบทั้งหมดต้องดำเนินการเฉพาะที่ห้องปฏิบัติการที่ BIS รับรอง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ปัญหาทั่วไป
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การล้มเหลวในการทดสอบความชื้นหรือฉนวน</li>
          <li>การออกแบบตัวเรือนแบตเตอรี่ที่ไม่ปลอดภัย</li>
          <li>ความร้อนสูงเกินไปในระหว่างการทำงานผิดปกติ</li>
          <li>เอกสารไม่สมบูรณ์</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          วิธีแก้ปัญหาและแนวปฏิบัติที่ดีที่สุด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ดำเนินการทดสอบก่อนการปฏิบัติตาม</li>
          <li>ใช้แบตเตอรี่และชิ้นส่วนที่ได้รับการรับรอง</li>
          <li>รับรองการปิดผนึกและฉนวนที่เหมาะสม</li>
          <li>มีส่วนร่วมกับที่ปรึกษา BIS ที่มีประสบการณ์</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับผู้ผลิตและผู้นำเข้า
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การปฏิบัติตามกฎหมายความปลอดภัยของอินเดีย</li>
          <li>การป้องกันจากค่าปรับและการยึด</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางการค้า
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การเข้าถึงตลาดทั่วประเทศ</li>
          <li>การยอมรับจากร้านค้าปลีกและแพลตฟอร์มอีคอมเมิร์ซ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านแบรนด์
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เครื่องหมาย BIS ปรับปรุงความไว้วางใจของลูกค้า</li>
          <li>การแยกความแตกต่างจากผลิตภัณฑ์ที่ไม่ได้รับการรับรอง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การขยายตลาด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การเข้าสู่ตลาดค้าปลีกและสุขภาพที่จัดระเบียบได้ง่ายขึ้น</li>
          <li>ความยั่งยืนทางธุรกิจในระยะยาว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          บทลงโทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามข้อกำหนด BIS อาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับทางการเงินจำนวนมาก</li>
          <li>การเรียกคืนผลิตภัณฑ์</li>
          <li>ข้อจำกัดการนำเข้า</li>
          <li>การดำเนินคดีทางกฎหมาย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างประเทศ (พร้อมตัวแทนอินเดียที่ได้รับอนุญาต)</li>
          <li>ผู้ค้าและเจ้าของแบรนด์</li>
          <li>ผู้ขายอีคอมเมิร์ซ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราสำหรับการให้คำปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เราให้บริการให้คำปรึกษาการรับรอง BIS แบบครบวงจร รวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การประเมินการใช้บังคับของผลิตภัณฑ์</li>
          <li>การจัดเตรียมและตรวจสอบเอกสาร</li>
          <li>การประสานงานกับห้องปฏิบัติการที่ BIS รับรอง</li>
          <li>การสนับสนุนการตรวจสอบและตรวจสอบโรงงาน</li>
          <li>การอนุมัติที่เร็วขึ้นด้วยการสอบถามที่ลดลง</li>
          <li>การปฏิบัติตามหลังการรับรองและการต่ออายุ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเราในเครื่องใช้ไฟฟ้าและดูแลส่วนบุคคลรับรองการเดินทางการรับรองที่ราบรื่น
          สอดคล้อง และตรงตามกำหนดเวลา
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          บทสรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่
          1):2024
          เป็นข้อกำหนดทางกฎหมายและความปลอดภัยที่สำคัญสำหรับการเข้าและรักษาการมีอยู่ในตลาดอินเดีย
          การรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่รับรองความปลอดภัยทางไฟฟ้า
          การป้องกันความชื้น และความมั่นใจของผู้ใช้ ในขณะที่ใบอนุญาต BIS
          สำหรับแปรงสีฟันใช้แบตเตอรี่เสริมสร้างความน่าเชื่อถือของแบรนด์และการปฏิบัติตามกฎระเบียบ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ผลิตและผู้นำเข้า การปฏิบัติตาม BIS
          อย่างทันท่วงทีไม่เพียงแต่ป้องกันค่าปรับแต่ยังปลดล็อกการเข้าถึงร้านค้าปลีกที่จัดระเบียบ
          ช่องทางสุขภาพ และแพลตฟอร์มอีคอมเมิร์ซ
          ด้วยคำแนะนำจากผู้เชี่ยวชาญและการสนับสนุนการปฏิบัติตามที่มีโครงสร้าง
          กระบวนการรับรอง BIS กลายเป็นมีประสิทธิภาพ
          เชื่อถือได้และสอดคล้องกับมาตรฐานอินเดียอย่างเต็มที่
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับแปรงสีฟันใช้แบตเตอรี่
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. การรับรอง BIS บังคับสำหรับแปรงสีฟันใช้แบตเตอรี่หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ บังคับภายใต้ IS 302 (ส่วนที่ 1):2024
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. ใบรับรอง BIS ย่อมาจากอะไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใบรับรองสำนักงานมาตรฐานอินเดีย (Bureau of Indian Standards
              Certificate)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. การรับรอง BIS ใช้เวลานานเท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              โดยทั่วไป 6-8 สัปดาห์สำหรับผู้ผลิตอินเดียและ 12-16
              สัปดาห์สำหรับผู้ผลิตต่างประเทศ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. ค่าใช้จ่ายการรับรอง BIS เท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ขึ้นอยู่กับการออกแบบผลิตภัณฑ์และขอบเขตการทดสอบ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. ผู้นำเข้าสามารถสมัครการรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ด้วยการอนุญาตที่เหมาะสม
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. เครื่องหมาย ISI บังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การติดเครื่องหมาย ISI บังคับหลังจากการรับรอง
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. จำเป็นต้องมีการทดสอบความทนทานต่อความชื้นหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ สำคัญมากสำหรับความปลอดภัยของแปรงสีฟัน
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. การตรวจสอบโรงงานบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ BIS ดำเนินการตรวจสอบโรงงาน
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. สามารถครอบคลุมหลายรุ่นได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ขึ้นอยู่กับการอนุมัติการทดสอบ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. การสมัคร BIS ออนไลน์บังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การสมัครทั้งหมดส่งออนไลน์
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. แบรนด์ต่างประเทศสามารถได้รับการรับรอง BIS หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ผ่านตัวแทนอินเดียที่ได้รับอนุญาต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. จะเกิดอะไรขึ้นหากขายผลิตภัณฑ์ที่ไม่ได้รับการรับรอง?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              อาจมีค่าปรับ การยึด และการดำเนินคดีทางกฎหมาย
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. จำเป็นต้องต่ออายุหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ใบอนุญาต BIS ต้องต่ออายุเป็นระยะ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. การรับรอง BIS ปรับปรุงยอดขายหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ เพิ่มความไว้วางใจของผู้บริโภคอย่างมาก
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. ที่ปรึกษาสามารถลดเวลาอนุมัติได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ที่ปรึกษาที่มีประสบการณ์ช่วยหลีกเลี่ยงความล่าช้า
            </p>
          </div>
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
