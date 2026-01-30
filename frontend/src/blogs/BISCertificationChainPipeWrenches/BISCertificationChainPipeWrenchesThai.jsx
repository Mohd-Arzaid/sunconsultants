import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationChainPipeWrenchesThai = () => {
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

export default BISCertificationChainPipeWrenchesThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับประแจท่อโซ่ | IS 4123:1982 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับประแจท่อโซ่ - คู่มือ IS 4123:1982";
  const twitterTitle = "ใบอนุญาต BIS สำหรับประแจท่อโซ่ | IS 4123:1982";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับประแจท่อโซ่ตาม IS 4123:1982 ขั้นตอน เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์การรับรอง BIS สำหรับประแจท่อโซ่ตาม IS 4123:1982 รู้ขั้นตอน ต้นทุน เอกสาร การทดสอบ และประโยชน์ใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับประแจท่อโซ่ตาม IS 4123:1982 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS ประแจท่อโซ่, ใบอนุญาต BIS ประแจท่อโซ่, IS 4123:1982, การรับรอง BIS ประแจท่อโซ่";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/prae-thoo-so-is-4123";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal หัวหน้าฝ่ายปฏิบัติการ Sun Certification India";

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
                    ใบรับรอง BIS สำหรับประแจท่อโซ่ – IS 4123:1982
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
          การรับรอง BIS ประแจท่อโซ่ – คู่มือฉบับสมบูรณ์ IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="ใบอนุญาต BIS สำหรับประแจท่อโซ่"
            alt="ใบรับรอง BIS สำหรับประแจท่อโซ่ - IS 4123:1982 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ประแจท่อโซ่เป็นเครื่องมือมืออุตสาหกรรมหนักเฉพาะทางที่ใช้สำหรับ
          จับ บิดแน่น และคลายท่อขนาดใหญ่ อุปกรณ์ทรงกลม และชิ้นส่วนทรงกระบอก
          ที่ประแจท่อทั่วไปใช้ไม่ได้ผล เครื่องมือเหล่านี้ใช้กันอย่างแพร่หลายในท่อส่งน้ำมันและก๊าซ
          โรงกลั่น โรงไฟฟ้า หน่วยปิโตรเคมี อู่ต่อเรือ โครงการประปา โรงงานวิศวกรรมหนัก
          และสถานที่ก่อสร้างโครงสร้างพื้นฐาน กลไกการจับอาศัยโซ่ที่ชุบแข็งซึ่งพันรอบท่อ
          ทำให้การกระจายน้ำหนักสม่ำเสมอและใช้แรงบิดสูงได้
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากประแจท่อโซ่ใช้ในการทำงานที่เครียดสูงและสำคัญต่อความปลอดภัย
          ความบกพร่องใดๆ ในคุณภาพวัสดุ ความแข็งแรงของโซ่ การออกแบบมือจับ หรือกลไกล็อค
          อาจทำให้ลื่น ปล่อยกะทันหัน เครื่องมือเสียหาย บาดเจ็บสาหัส ความเสียหายของอุปกรณ์
          และหยุดทำงานที่เสียค่าใช้จ่ายสูง เพื่อป้องกันความเสี่ยงดังกล่าวและมาตรฐานคุณภาพในตลาด
          รัฐบาลอินเดียกำหนดให้ต้องปฏิบัติตามมาตรฐานอินเดียสำหรับเครื่องมือเหล่านี้
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับประแจท่อโซ่ตาม IS 4123:1982
          จึงเป็นข้อกำหนดทางกฎหมายที่บังคับสำหรับผู้ผลิตและผู้นำเข้าที่ขายประแจท่อโซ่ในอินเดีย
          การรับรอง BIS ที่ถูกต้องสำหรับประแจท่อโซ่ยืนยันว่าผลิตภัณฑ์ได้รับการทดสอบและอนุมัติ
          ในด้านความแข็งแรง ประสิทธิภาพการจับ ความแม่นยำของมิติ และความปลอดภัยโดยรวมตามมาตรฐานอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นระบบความสอดคล้องของผลิตภัณฑ์และการประกันคุณภาพ
          จัดการโดยสำนักงานมาตรฐานอินเดีย (Bureau of Indian Standards) หน่วยงานระดับชาติ
          ที่รับผิดชอบการมาตรฐาน การทดสอบ และการรับรองผลิตภัณฑ์ในอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ความหมายของใบรับรอง BIS หมายถึงการอนุมัติอย่างเป็นทางการที่ออกโดย
          BIS ยืนยันว่าผลิตภัณฑ์สอดคล้องกับมาตรฐานอินเดียที่เกี่ยวข้อง (IS)
          และผลิตภายใต้ระบบคุณภาพที่ควบคุม การรับรองนี้ช่วยให้ผู้ผลิตใช้เครื่องหมาย ISI
          บนผลิตภัณฑ์ที่รับรองแล้วได้
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          การรับรอง BIS มีไว้เพื่อ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปกป้องผู้ใช้จากผลิตภัณฑ์ที่ไม่ปลอดภัยและต่ำกว่ามาตรฐาน</li>
          <li>รับรองคุณภาพที่สม่ำเสมอในทุกผู้ผลิต</li>
          <li>สนับสนุนการบังคับใช้กฎระเบียบการควบคุมคุณภาพ</li>
          <li>ส่งเสริมความไว้วางใจในสินค้าอุตสาหกรรมอินเดียและนำเข้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          คำอธิบายเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมายการรับรอง BIS ที่รู้จักกันทั่วไปว่าเครื่องหมาย ISI เป็น
          สัญลักษณ์ที่มองเห็นได้ของการปฏิบัติตาม สำหรับประแจท่อโซ่ เครื่องหมาย ISI
          ให้ความมั่นใจกับผู้ซื้อว่า:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เครื่องมือสอดคล้องกับ IS 4123:1982</li>
          <li>โซ่และมือจับทนน้ำหนักที่กำหนดได้</li>
          <li>ผลิตภัณฑ์ได้รับการอนุมัติทางกฎหมายสำหรับขายในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้กับประแจท่อโซ่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – ข้อกำหนดสำหรับประแจท่อโซ่
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้กับประแจท่อโซ่คือ IS 4123:1982
          ซึ่งกำหนดข้อกำหนดสำหรับการออกแบบ วัสดุ ขนาด ประสิทธิภาพ และการทดสอบประแจท่อโซ่
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขตของ IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ประแจท่อโซ่ขนาดและความจุต่างๆ</li>
          <li>การสร้างมือจับและการประกอบโซ่</li>
          <li>วัสดุโซ่ ขนาดข้อต่อ และความแข็งแรง</li>
          <li>ความคลาดเคลื่อนเชิงมิติและฝีมือการผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความปลอดภัย ประสิทธิภาพ และวัตถุประสงค์การทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982 ออกแบบมาเพื่อให้มั่นใจว่า:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>โซ่ให้การจับที่สม่ำเสมอและปลอดภัยบนท่อ</li>
          <li>ประแจทนแรงบิดสูงโดยไม่เสียหาย</li>
          <li>มือจับและข้อต่อไม่ผิดรูปภายใต้แรงโหลด</li>
          <li>เครื่องมือทำงานอย่างปลอดภัยในการใช้งานอุตสาหกรรมหนัก</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผู้ที่ต้องปฏิบัติตามสำหรับใบอนุญาต BIS ประแจท่อ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดียประแจท่อโซ่</li>
          <li>ผู้นำเข้าและผู้จัดจำหน่าย</li>
          <li>ผู้ผลิตต่างชาติที่ส่ง supply ไปอินเดีย</li>
          <li>พ่อค้าและแบรนด์ที่ขายภายใต้แบรนด์ส่วนตัว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงบังคับสำหรับประแจท่อโซ่
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความเสี่ยงด้านความปลอดภัยของผู้บริโภคและที่ทำงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ประแจท่อโซ่ที่ไม่เป็นไปตามมาตรฐานอาจนำไปสู่:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>โซ่ลื่นหรือขาด</li>
          <li>การปล่อยแรงบิดสูงกะทันหัน</li>
          <li>บาดเจ็บที่มือ แขน หรือร่างกายอย่างรุนแรง</li>
          <li>ความเสียหายต่อท่อและอุปกรณ์</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามรัฐบาลและกฎระเบียบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ตามประกาศ BIS ที่ใช้บังคับและกฎระเบียบการควบคุมคุณภาพ
          ประแจท่อโซ่ที่อยู่ภายใต้ IS 4123:1982 ต้องได้รับการรับรอง BIS
          ก่อนขาย นำเข้า หรือจัดจำหน่ายในอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลทางกฎหมาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การขายประแจท่อโซ่ที่ไม่ได้รับรองอาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยึดสินค้า</li>
          <li>ค่าปรับทางการเงินอย่างหนัก</li>
          <li>การระงับการดำเนินธุรกิจ</li>
          <li>การดำเนินการทางกฎหมายตามพระราชบัญญัติ BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบอนุญาต BIS สำหรับประแจท่อโซ่ช่วยให้ธุรกิจสามารถ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สร้างความไว้วางใจกับผู้ซื้ออุตสาหกรรมและผู้รับเหมา EPC</li>
          <li>มีคุณสมบัติสำหรับงานประมูลของรัฐ รัฐวิสาหกิจ และโครงสร้างพื้นฐาน</li>
          <li>แข่งขันกับแบรนด์ในประเทศและต่างประเทศที่ยอมรับแล้ว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับประแจท่อโซ่ทีละขั้นตอน
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การบังคับใช้และการระบุมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ขั้นตอนแรกประกอบด้วยการยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หมวดหมู่ผลิตภัณฑ์: ประแจท่อโซ่</li>
          <li>มาตรฐานที่ใช้: IS 4123:1982</li>
          <li>ช่วงขนาดและตัวแปรความจุ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนการสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ลงทะเบียนบนพอร์ทัล BIS</li>
          <li>เลือก IS 4123:1982 ในใบสมัคร BIS</li>
          <li>อัปโหลดเอกสารทางเทคนิคและกฎหมายที่ต้องการ</li>
          <li>ชำระค่าธรรมเนียมรัฐบาลที่ใช้บังคับ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนนี้เรียกกันทั่วไปว่าการสมัคร BIS ออนไลน์หรือการลงทะเบียนใบรับรอง BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ค่าธรรมเนียมและโครงสร้างต้นทุน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ต้นทุนการรับรอง BIS โดยทั่วไปรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัครและดำเนินการ</li>
          <li>ค่าทดสอบตัวอย่าง</li>
          <li>ค่าตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาตและการทำเครื่องหมาย</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ต้นทุนรวมของการรับรอง BIS ขึ้นอยู่กับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>จำนวนขนาดประแจ</li>
          <li>ความซับซ้อนของการทดสอบ</li>
          <li>สถานที่ผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์ (ตาม IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างได้รับการทดสอบที่ห้องปฏิบัติการที่ BIS รับรองสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความแข็งแรงดึงของโซ่</li>
          <li>ความต้านทานแรงและแรงบิด</li>
          <li>ความแม่นยำเชิงมิติ</li>
          <li>ความแข็งแรงมือจับและฝีมือการผลิต</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบโรงงานและการตรวจสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ดำเนินการตรวจสอบในสถานที่เพื่อยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิตและการประกอบ</li>
          <li>การควบคุมการผลิตหรือจัดหาโซ่</li>
          <li>ระบบการควบคุมคุณภาพ</li>
          <li>สิ่งอำนวยความสะดวกในการทดสอบและตรวจสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การออกใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังการทดสอบและตรวจสอบสำเร็จ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS ออกใบอนุญาต Bureau of Indian Standards</li>
          <li>
            ผู้ผลิตได้รับอนุญาตให้ติดเครื่องหมาย ISI บนประแจท่อโซ่
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ภาระหน้าที่หลังการรับรองรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตรวจสอบเฝ้าระวังเป็นระยะ</li>
          <li>การทดสอบตัวอย่างจากตลาด</li>
          <li>การต่ออายุใบอนุญาตตรงเวลา</li>
          <li>การปฏิบัติตาม IS 4123:1982 อย่างต่อเนื่อง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่ต้องใช้สำหรับการรับรอง BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การลงทะเบียนโรงงานหรือใบรับรอง MSME</li>
          <li>แผนภูมิการไหลของกระบวนการผลิต</li>
          <li>รายการเครื่องจักรและอุปกรณ์ทดสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการจัดตั้งบริษัท</li>
          <li>การลงทะเบียน GST</li>
          <li>การอนุญาตเครื่องหมายการค้า (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบแปลนและข้อกำหนดผลิตภัณฑ์</li>
          <li>วัสดุโซ่และรายละเอียดการอบชุบ</li>
          <li>แผนการควบคุมคุณภาพและการตรวจสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มสมัคร BIS</li>
          <li>รายละเอียดคำขอทดสอบ</li>
          <li>คำประกาศและข้อตกลง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารเหล่านี้เรียกรวมกันว่าเอกสารใบรับรอง BIS หรือเอกสารการรับรอง BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบบังคับรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบความแข็งแรงดึงของโซ่</li>
          <li>การทดสอบแรงและแรงบิด</li>
          <li>การตรวจสอบมิติ</li>
          <li>การตรวจสอบวัสดุและฝีมือการผลิต</li>
          <li>การทดสอบประสิทธิภาพการจับเชิงฟังก์ชัน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบทั้งหมดต้องดำเนินการที่ห้องปฏิบัติการที่ BIS รับรองเท่านั้น
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
          <li>ความล้มเหลวในการทดสอบความแข็งแรงของโซ่</li>
          <li>การอบชุบข้อต่อโซ่ไม่เหมาะสม</li>
          <li>ความไม่สอดคล้องเชิงมิติ</li>
          <li>เอกสารไม่ครบถ้วน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          แนวทางแก้ไขและแนวทางปฏิบัติที่ดีที่สุด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ดำเนินการทดสอบล่วงหน้าภายใน</li>
          <li>ใช้วัตถุดิบที่รับรองแล้ว</li>
          <li>รักษาการควบคุมกระบวนการอย่างเข้มงวด</li>
          <li>ใช้ที่ปรึกษา BIS ที่มีประสบการณ์</li>
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
          <li>การปฏิบัติตามกฎระเบียบอินเดียอย่างเต็มที่</li>
          <li>การป้องกันจากค่าปรับและการบังคับใช้</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์เชิงพาณิชย์
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การยอมรับสูงจากผู้ซื้ออุตสาหกรรม</li>
          <li>คุณสมบัติสำหรับโครงการรัฐวิสาหกิจและโครงสร้างพื้นฐาน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านแบรนด์
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เครื่องหมาย ISI เพิ่มความน่าเชื่อถือและความไว้วางใจ</li>
          <li>ความแตกต่างจากผู้จัดจำหน่ายที่ไม่มีระบบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การขยายตลาด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เข้าถึงตลาดอุตสาหกรรมขนาดใหญ่ได้ง่ายขึ้น</li>
          <li>ความน่าเชื่อถือในการส่งออกที่ดีขึ้น</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามอาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับทางเงินอย่างหนัก</li>
          <li>การยึดผลิตภัณฑ์</li>
          <li>การยกเลิกใบอนุญาต</li>
          <li>การดำเนินคดีทางกฎหมายตามพระราชบัญญัติ BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับประแจท่อโซ่?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างชาติ (กับตัวแทนอินเดียที่ได้รับอนุญาต)</li>
          <li>พ่อค้าและผู้จัดจำหน่ายอุตสาหกรรม</li>
          <li>ผู้ขายอีคอมเมิร์ซที่ลงรายการประแจท่อโซ่</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราในการให้คำปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรามอบบริการให้คำปรึกษาการรับรอง BIS แบบครบวงจร รวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การบังคับใช้ผลิตภัณฑ์และการวิเคราะห์ช่องว่าง</li>
          <li>การเตรียมและตรวจสอบเอกสาร</li>
          <li>การประสานกับห้องปฏิบัติการที่ BIS รับรอง</li>
          <li>การสนับสนุนการตรวจสอบโรงงานและการตรวจสอบ</li>
          <li>การอนุมัติที่เร็วขึ้นด้วยคำถามน้อยที่สุด</li>
          <li>การสนับสนุนการปฏิบัติตามและต่ออายุหลังการรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเราในเครื่องมือมืออุตสาหกรรมและอุปกรณ์หนัก
          รองรับการรับรอง BIS ที่ราบรื่น น่าเชื่อถือ และปฏิบัติตามอย่างสมบูรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับประแจท่อโซ่ตาม IS 4123:1982
          เป็นข้อกำหนดทางกฎหมายและคุณภาพที่สำคัญสำหรับการขายเครื่องมือหนักเหล่านี้ในอินเดีย
          การรับรอง BIS สำหรับประแจท่อโซ่รับรองความปลอดภัย ความแข็งแรง และความน่าเชื่อถือ
          ในขณะที่ใบอนุญาต BIS สำหรับประแจท่อโซ่เสริมสร้างความน่าเชื่อถือของแบรนด์และการยอมรับในตลาด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ผลิต ผู้นำเข้า และผู้ขาย การปฏิบัติตามตรงเวลาไม่เพียงป้องกันค่าปรับ
          แต่ยังเปิดโอกาสเข้าถึงโครงการอุตสาหกรรม โครงสร้างพื้นฐาน และรัฐบาลมูลค่าสูง
          ด้วยคำแนะนำจากผู้เชี่ยวชาญและการสนับสนุนการปฏิบัติตามที่มีโครงสร้าง
          กระบวนการรับรอง BIS จะมีประสิทธิภาพ คาดการณ์ได้ และสอดคล้องกับมาตรฐานอินเดียอย่างสมบูรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Chain Pipe Wrenches
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Is BIS certification mandatory for chain pipe wrenches?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, compliance with IS 4123:1982 is mandatory in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. What is the BIS certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. How long does the BIS certification process take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Usually 45–60 working days for Indian manufacturers and 90-120
              days for foreign manufacturers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It depends on product size range and testing scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Can importers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, with proper manufacturer authorization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Is the ISI Mark compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, ISI marking is mandatory after certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Can foreign manufacturers obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. What tests are required under IS 4123:1982?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Chain strength, load, dimensional, and workmanship tests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Is factory inspection mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts an on-site audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Can multiple sizes be covered under one license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, subject to testing and approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. What happens if non-certified chain pipe wrenches are sold?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Penalties, seizure, and legal action may occur.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Is BIS apply online mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, all applications are submitted online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Are renewals required for BIS licenses?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, periodic renewal is mandatory.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Can consultants reduce approval delays?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, professional consultants help avoid errors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Does BIS certification improve buyer confidence?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, it significantly improves market trust.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Chain Pipe Wrenches - IS 4123:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
