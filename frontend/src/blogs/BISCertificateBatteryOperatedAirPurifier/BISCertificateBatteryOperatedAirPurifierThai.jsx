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

const BISCertificateBatteryOperatedAirPurifierThai = () => {
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

export default BISCertificateBatteryOperatedAirPurifierThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ | IS 302 (ส่วนที่ 1):2024 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ – คู่มือ IS 302 (ส่วนที่ 1):2024";
  const twitterTitle =
    "ใบอนุญาต BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ | IS 302 (ส่วนที่ 1):2024";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ตาม IS 302 (ส่วนที่ 1):2024 รู้จักกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่, ใบอนุญาต BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่, IS 302 (ส่วนที่ 1):2024, การรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/khrueang-fok-lom-batari-is-302";
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
                    ใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ – IS 302
                    (ส่วนที่ 1):2024
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
          การรับรอง BIS เครื่องฟอกอากาศใช้แบตเตอรี่ – คู่มือฉบับสมบูรณ์สำหรับ IS 302 (ส่วนที่ 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="ใบอนุญาต BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่"
            alt="ใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ - IS 302 (ส่วนที่ 1):2024 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความต้องการเครื่องฟอกอากาศใช้แบตเตอรี่ในอินเดียเพิ่มขึ้นอย่างรวดเร็วเนื่องจากระดับมลพิษทางอากาศที่เพิ่มขึ้น การตระหนักรู้ด้านสุขภาพที่เพิ่มขึ้น และความต้องการโซลูชันการฟอกอากาศแบบพกพาที่ประหยัดพลังงาน ไม่เหมือนเครื่องฟอกอากาศแบบเสียบปลั๊กทั่วไป รุ่นที่ใช้แบตเตอรี่ถูกใช้กันอย่างแพร่หลายในบ้าน สำนักงาน โรงพยาบาล ยานพาหนะ โรงแรม โรงเรียน และพื้นที่ส่วนตัว โดยเฉพาะในสถานที่ที่ไม่มีการรับประกันแหล่งจ่ายไฟที่ต่อเนื่อง อุปกรณ์เหล่านี้มีปฏิสัมพันธ์โดยตรงกับส่วนประกอบไฟฟ้า อิเล็กทรอนิกส์ และแบตเตอรี่ ทำให้ความปลอดภัยทางไฟฟ้า การป้องกันอัคคีภัย ความสมบูรณ์ของฉนวน และการป้องกันผู้ใช้มีความสำคัญอย่างยิ่ง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อให้แน่ใจถึงความปลอดภัยของผู้บริโภคและการปฏิบัติตามกฎระเบียบ รัฐบาลอินเดียได้กำหนดให้ต้องปฏิบัติตามมาตรฐานความปลอดภัยทางไฟฟ้าของอินเดีย การได้รับใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 เป็นข้อกำหนดทางกฎหมายที่บังคับสำหรับผู้ผลิตและผู้นำเข้าก่อนขายผลิตภัณฑ์เหล่านี้ในตลาดอินเดีย การรับรอง BIS ที่ถูกต้องสำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ยืนยันว่าอุปกรณ์ได้รับการทดสอบความปลอดภัยทางไฟฟ้า กลไก และความร้อนตามมาตรฐานอินเดียล่าสุด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นระบบการประเมินความสอดคล้องของผลิตภัณฑ์อย่างเป็นทางการของอินเดียที่ควบคุมโดยสำนักงานมาตรฐานอินเดีย BIS ทำงานภายใต้กระทรวงกิจการผู้บริโภคและรับผิดชอบในการให้แน่ใจว่าผลิตภัณฑ์ที่ขายในอินเดียเป็นไปตามมาตรฐานที่กำหนดไว้ด้านความปลอดภัย คุณภาพ และความน่าเชื่อถือ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ความหมายของใบรับรอง BIS หมายถึงการอนุญาตที่ออกโดย BIS ที่อนุญาตให้ผู้ผลิตผลิต นำเข้า และขายผลิตภัณฑ์ที่สอดคล้องกับมาตรฐานอินเดียเฉพาะ (IS) ใบรับรองนี้ยังอนุญาตให้ใช้เครื่องหมายการรับรอง BIS (เครื่องหมาย ISI) บนผลิตภัณฑ์ที่ได้รับการอนุมัติ
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS มีอยู่เพื่อ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปกป้องผู้บริโภคจากอุปกรณ์ไฟฟ้าที่ไม่ปลอดภัย</li>
          <li>ป้องกันไฟ ไฟฟ้าช็อต และอันตรายที่เกี่ยวข้องกับแบตเตอรี่</li>
          <li>ส่งเสริมคุณภาพผลิตภัณฑ์ที่สม่ำเสมอ</li>
          <li>เปิดใช้งานการบังคับใช้กฎระเบียบด้านความปลอดภัย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          คำอธิบายเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมาย BIS (เครื่องหมาย ISI) บนเครื่องฟอกอากาศใช้แบตเตอรี่บ่งชี้ว่า:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผลิตภัณฑ์สอดคล้องกับ IS 302 (ส่วนที่ 1):2024</li>
          <li>ฉนวนไฟฟ้าและการก่อสร้างมีความปลอดภัย</li>
          <li>อุปกรณ์ได้รับการอนุมัติทางกฎหมายสำหรับการขายในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้ได้สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (ส่วนที่ 1):2024 – ความปลอดภัยของอุปกรณ์ไฟฟ้าภายในบ้านและที่คล้ายกัน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้ได้สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่คือ IS 302 (ส่วนที่ 1):2024 ซึ่งระบุข้อกำหนดด้านความปลอดภัยทั่วไปสำหรับอุปกรณ์ไฟฟ้าที่มีไว้สำหรับใช้ในครัวเรือนและที่คล้ายกัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขตของ IS 302 (ส่วนที่ 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ความปลอดภัยทางไฟฟ้าของอุปกรณ์ที่ใช้แบตเตอรี่หรือพลังงานแบบไฮบริด
          </li>
          <li>การป้องกันไฟฟ้าช็อต</li>
          <li>ความเสี่ยงจากไฟและความร้อนสูงเกินไป</li>
          <li>ความปลอดภัยทางกลไกและการก่อสร้าง</li>
          <li>ข้อกำหนดฉนวน ระยะห่างพื้นผิว และระยะห่าง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความตั้งใจด้านความปลอดภัย ประสิทธิภาพ และการทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (ส่วนที่ 1):2024 มีเป้าหมายเพื่อให้แน่ใจว่า:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            อุปกรณ์ที่ใช้พลังงานจากแบตเตอรี่ทำงานอย่างปลอดภัยภายใต้สภาวะปกติและผิดปกติ
          </li>
          <li>
            ผู้ใช้ได้รับการปกป้องจากอันตรายทางไฟฟ้า ความร้อน และกลไก
          </li>
          <li>ส่วนประกอบไม่ร้อนเกินไปหรือทำให้เกิดไฟ</li>
          <li>อุปกรณ์ยังคงปลอดภัยตลอดวงจรชีวิตที่ตั้งใจไว้</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ใครต้องปฏิบัติตาม
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตเครื่องฟอกอากาศใช้แบตเตอรี่ในอินเดีย</li>
          <li>ผู้นำเข้าและผู้จัดจำหน่าย</li>
          <li>ผู้ผลิตต่างประเทศที่จัดหาสินค้าให้อินเดีย</li>
          <li>แบรนด์ที่ขายเครื่องฟอกอากาศภายใต้ฉลากส่วนตัว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงเป็นข้อบังคับสำหรับเครื่องฟอกอากาศใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความเสี่ยงด้านความปลอดภัยของผู้บริโภค
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องฟอกอากาศที่ไม่ได้รับการรับรองอาจทำให้เกิด:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ไฟฟ้าช็อตเนื่องจากฉนวนไม่ดี</li>
          <li>แบตเตอรี่ร้อนเกินไปหรือระเบิด</li>
          <li>อันตรายจากไฟระหว่างการชาร์จหรือการทำงาน</li>
          <li>ความล้มเหลวทางกลไกของส่วนประกอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามกฎระเบียบของรัฐบาล
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ภายใต้การแจ้งเตือน BIS และกฎระเบียบความปลอดภัยทางไฟฟ้า เครื่องฟอกอากาศอยู่ภายใต้การรับรองที่บังคับ การขายโดยไม่มีใบรับรอง BIS อินเดียเป็นสิ่งผิดกฎหมาย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลกระทบทางกฎหมาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามอาจส่งผลให้เกิด:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดผลิตภัณฑ์</li>
          <li>ค่าปรับและบทลงโทษที่หนัก</li>
          <li>การห้ามนำเข้า</li>
          <li>ความรับผิดทางอาญาภายใต้พระราชบัญญัติ BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบอนุญาต BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ช่วย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สร้างความไว้วางใจของผู้บริโภค</li>
          <li>เปิดใช้งานการแสดงรายการบนแพลตฟอร์มอีคอมเมิร์ซ</li>
          <li>มีคุณสมบัติสำหรับการจัดซื้อจัดจ้างของสถาบันและรัฐบาล</li>
          <li>เสริมสร้างชื่อเสียงของแบรนด์</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS แบบทีละขั้นตอนสำหรับเครื่องฟอกอากาศใช้แบตเตอรี่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การบังคับใช้และการระบุมาตรฐานสำหรับใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          กระบวนการเริ่มต้นด้วยการยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ประเภทผลิตภัณฑ์: เครื่องฟอกอากาศใช้แบตเตอรี่</li>
          <li>มาตรฐานที่ใช้ได้: IS 302 (ส่วนที่ 1):2024</li>
          <li>แรงดันไฟฟ้า ประเภทแบตเตอรี่ การกำหนดค่าตัวชาร์จ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          กระบวนการสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ลงทะเบียนบนพอร์ทัล BIS</li>
          <li>ส่งใบสมัคร BIS ออนไลน์</li>
          <li>อัปโหลดเอกสารทางเทคนิคและกฎหมาย</li>
          <li>ชำระค่าธรรมเนียมของรัฐบาลที่ใช้ได้</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนนี้มักเรียกว่า BIS apply online หรือการลงทะเบียนใบรับรอง BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          โครงสร้างค่าธรรมเนียมและต้นทุนสำหรับใบรับรอง BIS สำหรับเครื่องฟอกอากาศ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ต้นทุนการรับรอง BIS รวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการทดสอบ</li>
          <li>ค่าธรรมเนียมการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาตและการทำเครื่องหมาย</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ต้นทุนรวมของการรับรอง BIS ขึ้นอยู่กับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความซับซ้อนของผลิตภัณฑ์</li>
          <li>การออกแบบแบตเตอรี่และตัวชาร์จ</li>
          <li>สถานที่ผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์ (ตาม IS 302 ส่วนที่ 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างได้รับการทดสอบในห้องปฏิบัติการที่ BIS รับรองสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การป้องกันไฟฟ้าช็อต</li>
          <li>ความร้อนและการทำงานผิดปกติ</li>
          <li>ความต้านทานฉนวน</li>
          <li>ความแข็งแรงของไดอิเล็กทริก</li>
          <li>ความปลอดภัยของแบตเตอรี่และความปลอดภัยในการชาร์จ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบและตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิต</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>การติดตามส่วนประกอบ</li>
          <li>สิ่งอำนวยความสะดวกในการทดสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การให้ใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากทดสอบและตรวจสอบสำเร็จ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS ออกใบอนุญาตสำนักงานมาตรฐานอินเดีย</li>
          <li>ผู้ผลิตได้รับอนุญาตให้ใช้เครื่องหมาย BIS</li>
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
          <li>ใบรับรองการลงทะเบียนโรงงาน</li>
          <li>แผนผังกระบวนการผลิต</li>
          <li>รายการเครื่องจักรและอุปกรณ์ทดสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการจัดตั้งบริษัท</li>
          <li>การลงทะเบียน GST</li>
          <li>การอนุญาตแบรนด์ (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แผนผังวงจร</li>
          <li>แผ่นข้อมูลส่วนประกอบ</li>
          <li>ข้อกำหนดแบตเตอรี่และตัวชาร์จ</li>
          <li>คู่มือผู้ใช้และป้าย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัคร BIS</li>
          <li>แบบฟอร์มคำขอทดสอบ</li>
          <li>คำประกาศและข้อผูกพัน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งเหล่านี้เรียกว่าเอกสารใบรับรอง BIS หรือเอกสารการรับรอง BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 302 (ส่วนที่ 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบบังคับรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบการป้องกันไฟฟ้าช็อต</li>
          <li>การทดสอบความร้อนและการทำงานผิดปกติ</li>
          <li>การทดสอบความต้านทานฉนวน</li>
          <li>การทดสอบความแข็งแรงของไดอิเล็กทริก</li>
          <li>การทดสอบความปลอดภัยในการชาร์จแบตเตอรี่</li>
          <li>การทดสอบความแข็งแรงทางกลไกและความเสถียร</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบต้องทำเฉพาะในห้องปฏิบัติการที่ BIS รับรองเท่านั้น
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
          <li>ความล้มเหลวในการทดสอบความร้อนหรือฉนวน</li>
          <li>การกำหนดค่าของแบตเตอรี่ที่ไม่ปลอดภัย</li>
          <li>เอกสารไม่สมบูรณ์</li>
          <li>การติดฉลากที่ไม่เป็นไปตามข้อกำหนด</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          โซลูชันและแนวทางปฏิบัติที่ดีที่สุด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ดำเนินการทดสอบการปฏิบัติตามกฎระเบียบล่วงหน้า</li>
          <li>ใช้ส่วนประกอบที่ได้รับการรับรอง</li>
          <li>เตรียมเอกสารทางเทคนิคที่ถูกต้อง</li>
          <li>ทำงานร่วมกับที่ปรึกษา BIS ที่มีประสบการณ์</li>
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
          <li>การปฏิบัติตามกฎหมายอินเดีย</li>
          <li>การป้องกันจากบทลงโทษ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางการค้า
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การเข้าถึงตลาดทั่วอินเดีย</li>
          <li>การยอมรับบนแพลตฟอร์มอีคอมเมิร์ซ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านแบรนด์
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เครื่องหมาย BIS เพิ่มความไว้วางใจ</li>
          <li>ความมั่นใจของลูกค้าที่สูงขึ้น</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การขยายตลาด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การเข้าสู่ตลาดสถาบันได้ง่ายขึ้น</li>
          <li>ความน่าเชื่อถือของแบรนด์ในระยะยาว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างประเทศ (พร้อม AIR)</li>
          <li>ผู้ค้าและเจ้าของแบรนด์</li>
          <li>ผู้ขายออนไลน์และตลาด</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราเพื่อการให้คำปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรานำเสนอบริการรับรอง BIS แบบครบวงจร รวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การประเมินการบังคับใช้</li>
          <li>การเตรียมเอกสาร</li>
          <li>การประสานงานการทดสอบในห้องปฏิบัติการ</li>
          <li>การสนับสนุนการตรวจสอบโรงงาน</li>
          <li>การอนุมัติที่เร็วขึ้น</li>
          <li>การปฏิบัติตามหลังการรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเราในอุปกรณ์ไฟฟ้าและอิเล็กทรอนิกส์รับประกันการเดินทางของการรับรองที่ราบรื่นและเป็นไปตามข้อกำหนด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่ภายใต้ IS 302 (ส่วนที่ 1):2024 ไม่ใช่เพียงพิธีการทางกฎระเบียบ—มันเป็นข้อกำหนดด้านความปลอดภัยและตลาดที่สำคัญ การรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่รับประกันความปลอดภัยทางไฟฟ้า ความน่าเชื่อถือของแบตเตอรี่ และการปกป้องผู้บริโภค ในขณะที่ใบอนุญาต BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่เสริมสร้างความน่าเชื่อถือของแบรนด์และสถานะทางกฎหมาย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ผลิตและผู้นำเข้า การปฏิบัติตามกฎระเบียบอย่างทันท่วงทีป้องกันบทลงโทษ เปิดใช้งานการเข้าสู่ตลาดที่ราบรื่น และสร้างความไว้วางใจในระยะยาว ด้วยคำแนะนำจากผู้เชี่ยวชาญและการสนับสนุนการปฏิบัติตามกฎระเบียบที่มีโครงสร้าง กระบวนการรับรอง BIS กลายเป็นมีประสิทธิภาพ คาดการณ์ได้ และสอดคล้องกับมาตรฐานอินเดียอย่างสมบูรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับเครื่องฟอกอากาศใช้แบตเตอรี่
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. การรับรอง BIS เป็นข้อบังคับสำหรับเครื่องฟอกอากาศใช้แบตเตอรี่หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ เป็นข้อบังคับภายใต้ IS 302 (ส่วนที่ 1):2024
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. ใบรับรอง BIS ย่อมาจากอะไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใบรับรองสำนักงานมาตรฐานอินเดีย
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. การรับรอง BIS ใช้เวลานานเท่าไหร่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              โดยทั่วไป 6–8 สัปดาห์สำหรับผู้ผลิตอินเดียและ 12-16 สัปดาห์สำหรับผู้ผลิตต่างประเทศ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. ต้นทุนใบรับรอง BIS คือเท่าไหร่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ขึ้นอยู่กับการทดสอบและความซับซ้อนของผลิตภัณฑ์
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. ผู้นำเข้าสามารถสมัครการรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ด้วยการอนุญาตที่เหมาะสม
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. เครื่องหมาย ISI เป็นข้อบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ หลังจากการรับรอง
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. การทดสอบความปลอดภัยของแบตเตอรี่รวมอยู่ด้วยหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ความปลอดภัยของแบตเตอรี่และการชาร์จเป็นข้อบังคับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. การตรวจสอบโรงงานเป็นข้อบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ สำหรับการให้ใบอนุญาต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. สามารถครอบคลุมหลายรุ่นได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ขึ้นอยู่กับการอนุมัติการทดสอบ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. จำเป็นต้องสมัครออนไลน์หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ BIS apply online เป็นข้อบังคับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. แบรนด์ต่างประเทศสามารถรับการรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ผ่านตัวแทนอินเดียที่ได้รับอนุญาต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. จะเกิดอะไรขึ้นหากละเมิดกฎ BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              บทลงโทษ การยึด และการดำเนินการทางกฎหมาย
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. การรับรอง BIS ช่วยเพิ่มยอดขายหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ มันเพิ่มความไว้วางใจอย่างมาก
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. จำเป็นต้องต่ออายุหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การต่ออายุเป็นระยะเป็นข้อบังคับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. ที่ปรึกษาสามารถเร่งการอนุมัติได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ที่ปรึกษาที่มีประสบการณ์ลดความล่าช้า
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
                alt="BIS Logo"
                title="BIS Logo"
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
