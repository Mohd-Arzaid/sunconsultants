import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterThai from "@/components/manual/Footer/FooterThai";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const GearsGearingsandTransmissionThai = () => {
  return (
    <div className="relative w-full">
      <GearsGearingsandTransmissionMetaTags />
      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default GearsGearingsandTransmissionThai;

const GearsGearingsandTransmissionMetaTags = () => {
  const title =
    "การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง";
  const description =
    "การรับรอง BIS Scheme X สำหรับเฟืองและระบบเกียร์ ล้อเฟือง สปร็อกเก็ตโซ่ องค์ประกอบการส่งกำลัง สกรูลูกกลิ้งหรือลูกกลิ้ง กล่องเกียร์และตัวเปลี่ยนความเร็ว เป็นก้าวสำคัญด้านกฎระเบียบสำหรับภาคเครื่องจักรอุตสาหกรรม";
  const keywords =
    "การรับรอง BIS สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง, การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง, การรับรอง Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง, BIS สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง, OTR สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลังในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลังในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags for Multi-language Support */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-roues-dentees-et-elements-de-transmission"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-banh-rang-he-thong-truyen-dong-va-cac-bo-phan-truyen-tai"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-engranajes-engranajes-y-elementos-de-transmision"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-gia-gearing-oyobi-densha-yoso"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-chi-lun-chi-lun-xi-tong-he-chuan-dong-yuan-jian-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-fueang-rab-khia-lae-ong-prakop-kan-song-kamlang"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-tandwielen-overbrenging-en-transmissie-elementen"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-turus-wa-anmatim-al-turus-wa-anasir-al-naql"
      />
    </Helmet>
  );
};

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">ผลิตภัณฑ์ SchemeX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    การรับรอง BIS สำหรับเฟือง ระบบเกียร์
                    และองค์ประกอบการส่งกำลัง
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

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง"
            title="ใบอนุญาต BIS Scheme X สำหรับเฟืองและระบบเกียร์ ล้อเฟือง สปร็อกเก็ตโซ่"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ในโลกอุตสาหกรรมที่เปลี่ยนแปลงอย่างต่อเนื่อง
          ความปลอดภัยและคุณภาพของส่วนประกอบทางกลมีความสำคัญอย่างยิ่ง
          ตามสำนักงานมาตรฐานอินเดีย
          เครื่องจักรและส่วนประกอบไฟฟ้าทั้งหมดที่ผลิตในอินเดียต้องปฏิบัติตามมาตรฐานความปลอดภัยที่กำหนดโดย
          BIS และอธิบายไว้ในคำสั่งความปลอดภัยของเครื่องจักรและอุปกรณ์ไฟฟ้า
          (ข้อบังคับทางเทคนิคแบบรวม) คำสั่ง 2024 คำสั่งนี้ครอบคลุมโมดูลทางกล
          ส่วนประกอบและส่วนประกอบการประกอบเช่นเฟือง องค์ประกอบระบบเกียร์
          และส่วนการส่งกำลังต่างๆ
          ที่สำคัญสำหรับการทำงานของเครื่องจักรในอุตสาหกรรมใดๆ
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตทั้งหมดทั้งในประเทศและต่างประเทศต้องปฏิบัติตามข้อกำหนดมาตรฐานการรับรอง
          Scheme X ภายในวันที่ 1 กันยายน 2026
          ตามที่กำหนดโดยคำสั่งและจัดตั้งโดยกระทรวงอุตสาหกรรมหนัก
          ผู้ผลิตทั้งหมดในอุตสาหกรรมเฟืองและกล่องเกียร์ตลอดจนองค์ประกอบการส่งกำลังที่เกี่ยวข้องทั้งหมดต้องปฏิบัติตามกฎระเบียบนี้เพื่อให้สามารถเข้าถึงตลาดและกำหนดมาตรฐานสำหรับอุตสาหกรรม
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          บทความนี้มีข้อมูลสำคัญทั้งหมดสำหรับการรับรองเฟือง กล่องเกียร์
          และการรวมส่วนการส่งกำลังที่เกี่ยวข้องพร้อมกับเหตุผลที่สำคัญ ขอบเขต
          ข้อดีของการรับรอง และเอกสารที่จำเป็น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไม Scheme X จึงสำคัญสำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ส่วนประกอบทางกลเหล่านี้มีความสำคัญใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>รถยนต์ รถบรรทุก และรถไฟ</li>
          <li>อุปกรณ์การบินและการป้องกัน</li>
          <li>เครื่องจักรการผลิตและหุ่นยนต์</li>
          <li>ระบบพลังงานและการผลิตไฟฟ้า</li>
          <li>การเดินเรือ (อุตสาหกรรมวิศวกรรมหนักและเบา)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โดยไม่มี BIS สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
          ความเสี่ยงจะสูงมาก:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            ความล้มเหลวของเฟืองที่ส่งผลให้เกิดความเสียหายและเวลาหยุดทำงานที่มีค่าใช้จ่ายสูง
          </li>
          <li>ความเสี่ยงด้านสุขภาพในการขนส่งและอุตสาหกรรมหนัก</li>
          <li>การถ่ายโอนพลังงานและการกระจายพลังงานที่ไม่มีประสิทธิภาพ</li>
          <li>การเข้าถึงที่จำกัดต่อการประมูลสาธารณะและโอกาสในการจัดซื้อ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ในที่สุด การรับรอง Scheme X สำหรับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังให้ความทนทานที่เพิ่มขึ้น
          ลดความเสี่ยงในการดำเนินงานและสอดคล้องกับมาตรฐานในประเทศ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ใบรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังเป็นส่วนหนึ่งของข้อบังคับการประเมินความสอดคล้องของ
          BIS พ.ศ. 2561 ซึ่งกำหนดมาตรฐานที่เข้มงวดสำหรับการออกแบบ คุณภาพวัสดุ
          และประสิทธิภาพในการดำเนินงาน
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          คุณสมบัติหลักของการรับรอง Scheme X คือ:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับสำหรับผู้ผลิตทั้งหมด (อินเดียและต่างประเทศ)</li>
          <li>เหมาะสำหรับเฟือง เพลา และส่วนการส่งกำลังต่างๆ</li>
          <li>ดำเนินการทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่อนุมัติโดย BIS</li>
          <li>รวมถึงการตรวจสอบโรงงานเพื่อตรวจสอบการควบคุมคุณภาพ</li>
          <li>
            มีสิทธิ์ใช้เครื่องหมายมาตรฐาน BIS
            หลังจากผลิตภัณฑ์ได้รับการรับรองแล้ว
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระทรวงอุตสาหกรรมหนักได้นำข้อบังคับทางเทคนิคแบบรวม (OTR) 2024
          เกี่ยวกับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลังมาใช้
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          วันที่ปฏิบัติตาม: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องมีใบรับรองภายในวันที่
          1 กันยายน 2026 หลังจากวันที่นี้ สินค้าที่ไม่มีใบรับรองจะไม่สามารถผลิต
          นำเข้าหรือขายในอินเดียได้อีกต่อไป
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยและความน่าเชื่อถือ:
            หลีกเลี่ยงความล้มเหลวที่ไม่ได้ตรวจสอบจากแอปพลิเคชันระบบที่สำคัญ
          </li>
          <li>
            ความสามารถในการแข่งขันในตลาด:
            บริษัทที่รับรองแล้วได้รับความชอบในการประมูลสาธารณะและเอกชน
          </li>
          <li>
            ความไว้วางใจของลูกค้า: ผู้ซื้อมีความมั่นใจในผลิตภัณฑ์ที่มีการยอมรับ
            BIS อย่างเป็นทางการ
          </li>
          <li>
            การปฏิบัติตามกฎหมาย: ไม่มีค่าปรับด้วย OTR สำหรับเฟือง ระบบเกียร์
            และส่วนการส่งกำลัง
          </li>
          <li>
            การเข้าสู่ตลาดโลก:
            อนุญาตให้ผู้ผลิตต่างประเทศเข้าสู่ตลาดอินเดียได้อย่างง่ายดาย
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทเฟืองและส่วนการส่งกำลังที่รวมอยู่ด้วย
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X ใช้กับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังต่างๆ ดังต่อไปนี้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เฟืองตรง เฟืองเกลียว เฟืองโคน และเฟืองหนอน</li>
          <li>เพลาเฟืองและคัปปลิ้ง</li>
          <li>กล่องเกียร์และส่วนการส่งกำลัง</li>
          <li>ส่วนประกอบขับเคลื่อนโซ่และสายพาน</li>
          <li>เฟืองที่ใช้ในการบินและอวกาศและหุ่นยนต์ รถยนต์หรู จักรยานยนต์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ประเภททั้งหมดต้องสอดคล้องกับมาตรฐานอินเดีย (รหัส IS) เช่น IS
          16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร
          หลักการทั่วไปสำหรับการออกแบบ-การประเมินความเสี่ยงและการลดความเสี่ยง)
          แต่ละประเภทผลิตภัณฑ์ต้องสอดคล้องกับมาตรฐานอินเดียที่เกี่ยวข้องเกี่ยวกับการออกแบบและประสิทธิภาพ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ระบุมาตรฐานที่ใช้บังคับ: ปรึกษารหัส IS
          ที่ใช้บังคับสำหรับผลิตภัณฑ์เฟือง/การส่งกำลังของคุณ
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            การทดสอบผลิตภัณฑ์:
            ดำเนินการทดสอบวัสดุและประสิทธิภาพในห้องปฏิบัติการที่รับรองโดย BIS
          </li>
          <li>การตรวจสอบโรงงาน: BIS มาดำเนินการตรวจสอบ Q.S. ที่สถานที่ผลิต</li>
          <li>
            ยื่นเอกสาร: แชร์รายละเอียดทางเทคนิค เอกสารการทดสอบ และคู่มือคุณภาพ
          </li>
          <li>
            การออกใบอนุญาต: BIS หลังจากตรวจสอบเอกสารเพื่อความถูกต้องแล้ว
            จะออกใบรับรองและอนุญาตให้ใช้เครื่องหมายมาตรฐาน
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง: การตรวจสอบและการทดสอบซ้ำบ่อยๆ
            เพื่อรักษาความถูกต้องของใบรับรอง
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การไม่ปฏิบัติตามการรับรอง BIS สำหรับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังภายใต้ OTR สำหรับเฟือง ระบบเกียร์
          และองค์ประกอบการส่งกำลังจะส่งผลให้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ข้อห้ามในการขายและการผลิตสินค้าที่ไม่มีใบรับรอง</li>
          <li>การยึดสินค้าและค่าปรับทางการเงิน</li>
          <li>ไม่มีคุณสมบัติสำหรับการประมูลและสัญญาของรัฐบาล</li>
          <li>ความเสียหายต่อชื่อเสียงในระยะยาว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
          ซึ่งประกาศภายใต้ OTR สำหรับเฟือง ระบบเกียร์ และองค์ประกอบการส่งกำลัง
          (2024)
          จะเป็นขั้นตอนสำคัญในการยกระดับมาตรฐานคุณภาพและความปลอดภัยของโครงสร้างวิศวกรรมและการผลิตในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ผู้ผลิตและผู้นำเข้าโซลูชันเฟือง ระบบเกียร์
          และการส่งกำลังที่กำลังมองหาการขายในตลาดอินเดียจะพบว่าข้อได้เปรียบของพวกเขาจะเพิ่มขึ้นและจะเปิดประตูสู่ผลกำไรในตลาดด้วยการนำการรับรอง
          Scheme X สำหรับเฟือง ระบบเกียร์ และระบบการส่งกำลังมาใช้
        </p>

        <ServiceAuthorThai />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
                src={BISImage}
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
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
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
                src={EPRCertificate}
                alt="EPRCertificate"
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
                src={LMPC}
                alt="LMPC"
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
                src={BISImage}
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
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย ISI (BIS) สำหรับการผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
