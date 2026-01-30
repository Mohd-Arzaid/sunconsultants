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

const BISCertificationCombinationSideCuttingPliersThai = () => {
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




export default BISCertificationCombinationSideCuttingPliersThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับคีมตัดข้างแบบผสม | IS 3650:1981 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับคีมตัดข้างแบบผสม – คู่มือ IS 3650:1981";
  const twitterTitle =
    "ใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสม | IS 3650:1981";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับคีมตัดข้างแบบผสมตาม IS 3650:1981 ขั้นตอน เอกสาร การทดสอบ ค่าใช้จ่าย และระยะเวลาในการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์การรับรอง BIS สำหรับคีมตัดข้างแบบผสมตาม IS 3650:1981 ขั้นตอน ค่าใช้จ่าย เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับคีมตัดข้างแบบผสมตาม IS 3650:1981 ขั้นตอน BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับคีมตัดข้างแบบผสม, ใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสม, IS 3650:1981, การรับรอง BIS สำหรับคีมตัดข้างแบบผสม";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/khim-tat-khang-baep-som-is-3650";
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
                    <Link to="/Blogs">บทความล่าสุด</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    ใบรับรอง BIS สำหรับคีมตัดข้างแบบผสม – IS 3650:1981
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
          การรับรอง BIS คีมตัดข้างแบบผสม – คู่มือฉบับสมบูรณ์ IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="ใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสม"
            alt="ใบรับรอง BIS สำหรับคีมตัดข้างแบบผสม - IS 3650:1981 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          คีมตัดข้างแบบผสมเป็นเครื่องมือมือที่ใช้กันมากที่สุดชนิดหนึ่งในงานไฟฟ้า การบำรุงรักษากลไก การก่อสร้าง หน่วยผลิต เวิร์กช็อป บริการรถยนต์ และการซ่อมแซมในครัวเรือน เครื่องมือเหล่านี้ออกแบบมาเพื่อจับ ดัด บิด และตัดสายไฟ เนื่องจากใช้ตัดลวดโลหะ ตัวนำไฟฟ้า และชิ้นส่วนขนาดเล็กเป็นประจำ คีมคุณภาพต่ำอาจทำให้เครื่องมือแตก เสี่ยงไฟฟ้าช็อต บาดเจ็บที่มือ และอุบัติเหตุในที่ทำงานร้ายแรง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อความปลอดภัย ความทนทาน และคุณภาพที่สม่ำเสมอ รัฐบาลอินเดียบังคับให้ปฏิบัติตามมาตรฐานอินเดียสำหรับเครื่องมือมือ การได้รับใบรับรอง BIS สำหรับคีมตัดข้างแบบผสมตาม IS 3650:1981 เป็นข้อกำหนดทางกฎหมายและคุณภาพที่สำคัญสำหรับผู้ผลิตและผู้นำเข้าที่ขายเครื่องมือเหล่านี้ในอินเดีย การรับรอง BIS ที่ถูกต้องสำหรับคีมตัดข้างแบบผสมยืนยันว่าผลิตภัณฑ์ได้รับการทดสอบความแข็งแรงทางกล ประสิทธิภาพการตัด ความแข็งของวัสดุ และประสิทธิภาพความปลอดภัยโดยรวม
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หน้ารายละเอียดผลิตภัณฑ์นี้จัดทำสำหรับผู้ผลิต ผู้ผลิตต่างประเทศ ผู้นำเข้า ผู้ค้า ผู้จัดจำหน่าย แบรนด์ฮาร์ดแวร์ ผู้ขายอีคอมเมิร์ซ และผู้เชี่ยวชาญด้านการปฏิบัติตามกฎระเบียบที่ต้องการความเข้าใจอย่างครบถ้วนเกี่ยวกับใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสม รวมถึงกระบวนการรับรอง BIS ในอินเดีย ข้อกำหนดการทดสอบ เอกสาร ค่าใช้จ่าย ระยะเวลา โทษ และประโยชน์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นระบบการประเมินความสอดคล้องของผลิตภัณฑ์ที่กำกับโดยสำนักงานมาตรฐานอินเดีย (Bureau of Indian Standards) ซึ่งเป็นหน่วยงานระดับชาติของอินเดียด้านมาตรฐาน การรับรอง และการรับประกันคุณภาพ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ความหมายของใบรับรอง BIS หมายถึงการอนุมัติอย่างเป็นทางการที่ออกโดย BIS ยืนยันว่าผลิตภัณฑ์สอดคล้องกับมาตรฐานอินเดีย (IS) ที่ใช้บังคับ และผลิตภายใต้ระบบคุณภาพที่ควบคุมได้
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          วัตถุประสงค์หลักของการรับรอง BIS คือ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปกป้องผู้บริโภคจากผลิตภัณฑ์ที่ไม่ปลอดภัย</li>
          <li>รับประกันคุณภาพผลิตภัณฑ์ที่สม่ำเสมอ</li>
          <li>สนับสนุนการบังคับใช้กฎระเบียบ</li>
          <li>ส่งเสริมการมาตรฐานในอุตสาหกรรมอินเดีย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เครื่องหมาย ISI อธิบาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เครื่องหมายรับรอง BIS ที่มักเรียกว่าเครื่องหมาย ISI เป็นสัญลักษณ์แห่งความน่าเชื่อถือและการปฏิบัติตาม สำหรับคีมตัดข้างแบบผสม เครื่องหมาย ISI ระบุว่า:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เครื่องมือเป็นไปตามข้อกำหนด IS 3650:1981</li>
          <li>ประสิทธิภาพทางกลและการตัดได้รับการตรวจสอบแล้ว</li>
          <li>ผลิตภัณฑ์ได้รับการอนุมัติอย่างถูกกฎหมายสำหรับจำหน่ายในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้กับคีมตัดข้างแบบผสม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – ข้อกำหนดสำหรับคีมแบบผสม
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้กับผลิตภัณฑ์นี้คือ IS 3650:1981 ซึ่งกำหนดข้อกำหนดสำหรับคีมแบบผสมที่มีคมตัดด้านข้างสำหรับการจับและการตัด
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขตของ IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ครอบคลุม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>คีมแบบผสมที่มีคมตัดด้านข้าง</li>
          <li>ข้อกำหนดขนาด รูปทรง และการตกแต่งผิว</li>
          <li>คุณภาพวัสดุและการอบชุบความร้อน</li>
          <li>ความแข็งแรงทางกลและประสิทธิภาพการตัด</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความปลอดภัย ประสิทธิภาพ และวัตถุประสงค์การทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 ออกแบบมาเพื่อให้มั่นใจว่า:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>คีมมีความสามารถในการตัดเพียงพอ</li>
          <li>ขากรรไกรและคมตัดไม่แตกหรือเสียรูป</li>
          <li>มือจับให้การจับที่ปลอดภัยและฉนวนเมื่อจำเป็น</li>
          <li>เครื่องมือทำงานได้อย่างน่าเชื่อถือภายใต้สภาพการทำงานปกติ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผู้ที่ต้องปฏิบัติตาม
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตคีมตัดข้างแบบผสมในอินเดีย</li>
          <li>ผู้นำเข้าและผู้จัดจำหน่าย</li>
          <li>ผู้ผลิตต่างประเทศที่ส่งไปยังตลาดอินเดีย</li>
          <li>แบรนด์ที่ขายคีมภายใต้ฉลากส่วนตัว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงบังคับสำหรับคีมตัดข้างแบบผสม
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความเสี่ยงด้านความปลอดภัยของผู้บริโภค
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          คีมที่ไม่ได้มาตรฐานอาจนำไปสู่:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การแตกกะทันหันระหว่างการตัด</li>
          <li>การลื่นและบาดเจ็บที่มือ</li>
          <li>อันตรายจากไฟฟ้าช็อตในการใช้งานไฟฟ้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามรัฐบาลและกฎระเบียบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ตามมาตรฐาน BIS และประกาศ BIS เครื่องมือมือเช่นคีมแบบผสมที่ครอบคลุมภายใต้ IS 3650:1981 ต้องปฏิบัติตามข้อกำหนดการรับรอง BIS ก่อนจำหน่ายในอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผลทางกฎหมาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การขายหรือนำเข้าคีมที่ไม่ได้รับรองอาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผลิตภัณฑ์ถูกยึดโดยหน่วยงาน</li>
          <li>ค่าปรับทางการเงิน</li>
          <li>การยกเลิกใบอนุญาตการค้า</li>
          <li>การดำเนินคดีตามพระราชบัญญัติ BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสมช่วยให้แบรนด์:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สร้างความไว้วางใจกับผู้ซื้อและผู้รับเหมา</li>
          <li>มีคุณสมบัติสำหรับการประมูลของรัฐบาลและ PSU</li>
          <li>แข่งขันกับแบรนด์ฮาร์ดแวร์ที่ established</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับคีมตัดข้างแบบผสมทีละขั้นตอน
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การบังคับใช้และระบุมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ขั้นตอนแรกคือยืนยันว่าผลิตภัณฑ์:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>จัดอยู่ในคีมตัดข้างแบบผสม</li>
          <li>ครอบคลุมโดย IS 3650:1981</li>
          <li>ตรงกับขอบเขตของมาตรฐานในด้านขนาดและการใช้งาน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนการสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ลงทะเบียนในพอร์ทัล BIS</li>
          <li>เลือก IS 3650:1981 ภายใต้มาตรฐานผลิตภัณฑ์</li>
          <li>กรอกแบบฟอร์มสมัคร BIS</li>
          <li>อัปโหลดเอกสารที่ต้องการทั้งหมด</li>
          <li>ชำระค่าธรรมเนียมที่ใช้บังคับ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนนี้มักเรียกว่าสมัคร BIS ออนไลน์หรือการลงทะเบียนใบรับรอง BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ค่าธรรมเนียมและโครงสร้างต้นทุนสำหรับใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ค่าใช้จ่ายการรับรอง BIS โดยทั่วไปรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัครและการดำเนินการ</li>
          <li>ค่าทดสอบผลิตภัณฑ์</li>
          <li>ค่าตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาตและการทำเครื่องหมาย</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ค่าใช้จ่ายรวมของการรับรอง BIS ขึ้นอยู่กับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>จำนวนรุ่น</li>
          <li>ความซับซ้อนของการทดสอบ</li>
          <li>ที่ตั้งโรงงาน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์ (ตาม IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างได้รับการทดสอบที่ห้องปฏิบัติการที่ BIS รับรองสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความแข็งของคมตัด</li>
          <li>ประสิทธิภาพการตัด</li>
          <li>ความแข็งแรงทางกล</li>
          <li>ความแม่นยำเชิงมิติ</li>
          <li>ผิวสำเร็จและฝีมือ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบและตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ดำเนินการตรวจสอบโรงงานเพื่อยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิต</li>
          <li>การอบชุบความร้อนและการตกแต่ง</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>สิ่งอำนวยความสะดวกในการทดสอบและตรวจสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การออกใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          หลังการทดสอบและตรวจสอบที่สำเร็จ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS ออกใบอนุญาต Bureau of Indian Standards</li>
          <li>ผู้ผลิตได้รับอนุญาตให้ใช้เครื่องหมาย ISI บนคีมที่ได้รับการอนุมัติ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ข้อกำหนดหลังการอนุมัติรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตรวจสอบเฝ้าระวัง</li>
          <li>การทดสอบตัวอย่างจากตลาด</li>
          <li>การต่ออายุใบอนุญาตตรงเวลา</li>
          <li>การปฏิบัติตาม IS 3650:1981 อย่างต่อเนื่อง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่ต้องการสำหรับการรับรอง BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารของผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการลงทะเบียนโรงงาน</li>
          <li>ผังกระบวนการผลิต</li>
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
          <li>แบบและข้อกำหนดผลิตภัณฑ์</li>
          <li>รายละเอียดวัตถุดิบ</li>
          <li>แผนการอบชุบความร้อนและ QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มสมัคร BIS</li>
          <li>รายละเอียดคำขอทดสอบ</li>
          <li>คำประกาศและข้อผูกพัน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารเหล่านี้เรียกรวมกันว่าเอกสารใบรับรอง BIS หรือเอกสารการรับรอง BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบบังคับรวมถึง:
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
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การผลิต
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ฝีมือและการตกแต่งผิว
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การเก็บรักษาและการบรรจุ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ความแข็ง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ฉนวน (ยกเว้นการทดสอบฉนวน)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบฉนวน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบตัด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบจับท่อ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบกระแทก
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบบิด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบน้ำหนักมือจับ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบดัด
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
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
          <li>ล้มเหลวในการทดสอบความแข็งหรือการตัด</li>
          <li>การอบชุบความร้อนที่ไม่เหมาะสม</li>
          <li>ผิวสำเร็จไม่ดี</li>
          <li>เอกสารไม่ครบถ้วน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          แนวทางปฏิบัติที่ดีที่สุด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ดำเนินการทดสอบล่วงหน้าภายใน</li>
          <li>ปฏิบัติตามขั้นตอนการอบชุบความร้อนที่ถูกต้อง</li>
          <li>รักษาบันทึกคุณภาพตามล็อต</li>
          <li>รับการสนับสนุนที่ปรึกษา BIS ผู้เชี่ยวชาญ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Full compliance with Indian regulations</li>
          <li>Protection from penalties and seizures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceptance by distributors and contractors</li>
          <li>Eligibility for bulk and institutional orders</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark enhances brand credibility</li>
          <li>Differentiation from unorganized suppliers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into organized hardware retail chains</li>
          <li>Increased acceptance in export-oriented businesses</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามอาจนำไปสู่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับทางเงินจำนวนมาก</li>
          <li>การยึดผลิตภัณฑ์</li>
          <li>การหยุดชะงักของธุรกิจ</li>
          <li>การดำเนินคดีตามพระราชบัญญัติ BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับคีมตัดข้างแบบผสม?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างประเทศ (กับตัวแทนอินเดียที่ได้รับอนุญาต)</li>
          <li>ผู้ค้าที่ขายภายใต้แบรนด์ของตนเอง</li>
          <li>ผู้ขายอีคอมเมิร์ซที่ลงรายการคีม</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับคีมตัดข้างแบบผสมตาม IS 3650:1981 เป็นข้อกำหนดทางกฎหมายและคุณภาพที่สำคัญสำหรับการขายเครื่องมือเหล่านี้ในอินเดีย การรับรอง BIS สำหรับคีมตัดข้างแบบผสมรับประกันความปลอดภัยของผลิตภัณฑ์ ประสิทธิภาพที่สม่ำเสมอ และการปฏิบัติตามกฎระเบียบ ในขณะที่ใบอนุญาต BIS สำหรับคีมตัดข้างแบบผสมเสริมสร้างความน่าเชื่อถือของแบรนด์และการยอมรับในตลาด
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ผลิต ผู้นำเข้า และผู้ขาย การปฏิบัติตามอย่างทันเวลานอกจากจะหลีกเลี่ยงโทษแล้ว ยังเปิดประตูสู่ตลาดที่ใหญ่ขึ้นและการเติบโตของธุรกิจในระยะยาว ด้วยคำแนะนำจากผู้เชี่ยวชาญ กระบวนการรับรอง BIS จะราบรื่น เร็วขึ้น และปฏิบัติตามมาตรฐานอินเดียอย่างครบถ้วน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับคีมตัดข้างแบบผสม
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 1. การรับรอง BIS บังคับสำหรับคีมตัดข้างแบบผสมหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การปฏิบัติตาม IS 3650:1981 เป็นข้อบังคับในอินเดีย
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 2. ใบรับรอง BIS ย่อมาจากอะไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate (ใบรับรองสำนักงานมาตรฐานอินเดีย)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 3. กระบวนการรับรอง BIS ใช้เวลานานเท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              โดยทั่วไป 30–60 วันทำการ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 4. ค่าใช้จ่ายใบรับรอง BIS เป็นเท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ค่าใช้จ่ายขึ้นอยู่กับขอบเขตการทดสอบและรุ่นผลิตภัณฑ์
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 5. ผู้นำเข้าสามารถสมัครการรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ โดยมีการอนุญาตที่ถูกต้องจากผู้ผลิต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 6. เครื่องหมาย ISI บังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การทำเครื่องหมาย ISI เป็นข้อบังคับหลังการรับรอง
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 7. ผู้ผลิตต่างประเทศสามารถรับการรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ผ่านตัวแทนอินเดียที่ได้รับอนุญาต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 8. การทดสอบใดที่ต้องการตาม IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ความแข็ง ประสิทธิภาพการตัด ความแข็งแรง และการทดสอบเชิงมิติ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 9. การตรวจสอบโรงงานบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ BIS ดำเนินการตรวจสอบโรงงาน
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 10. ขนาดหลายขนาดสามารถรวมภายใต้ใบอนุญาตเดียวได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ขึ้นอยู่กับการทดสอบและการอนุมัติ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 11. จะเกิดอะไรขึ้นหากขายคีมที่ไม่ได้รับรอง?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              อาจเกิดค่าปรับ การยึดสินค้า และการดำเนินคดี
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 12. การสมัคร BIS ออนไลน์บังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การสมัครส่งทางออนไลน์เท่านั้น
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 13. ต้องต่ออายุใบอนุญาต BIS หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ ใบอนุญาตต้องต่ออายุเป็นระยะ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              คำถามที่ 14. ที่ปรึกษาสามารถลดความล่าช้าในการอนุมัติได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ที่ปรึกษามืออาชีพช่วยหลีกเลี่ยงข้อผิดพลาดและการปฏิเสธ
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับคีมตัดข้างแบบผสม - IS 3650:1981 PDF"
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
