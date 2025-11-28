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
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
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

const DieselGeneratorThai = () => {
  return (
    <div className="relative w-full">
      <DieselGeneratorMetaTags />
      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default DieselGeneratorThai;

const DieselGeneratorMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล";
  const description =
    "การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซลและส่วนประกอบเป็นขั้นตอนการกำกับดูแลที่สำคัญที่มุ่งหมายเพื่อมาตรฐานและรักษาคุณภาพและความปลอดภัยในอินเดีย";
  const keywords =
    "การรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้าดีเซล, การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล, การรับรอง Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล, BIS สำหรับเครื่องกำเนิดไฟฟ้าดีเซล, OTR สำหรับเครื่องกำเนิดไฟฟ้าดีเซล";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซลในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซลในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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
    </Helmet>
  );
};

const DieselGeneratorBreadcrumb = () => {
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
                    การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล
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

const DieselGeneratorMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS SCHEME X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล"
            title="ใบอนุญาต BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซล"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องกำเนิดไฟฟ้าดีเซลใช้ในสถานที่เชิงพาณิชย์ อุตสาหกรรม โรงพยาบาล
          โครงการสาธารณูปโภค โครงการที่อยู่อาศัยและสถานที่อื่นๆ อีกมากมาย
          เป็นแหล่งพลังงานสำรอง
          ในฐานะสินทรัพย์ทางเศรษฐกิจที่มีความรับผิดชอบในการรับประกันความต่อเนื่องของการจ่ายไฟฟ้า
          สิ่งสำคัญคือเครื่องจักรต้องปลอดภัย
          มีประสิทธิภาพและเป็นไปตามมาตรฐานแห่งชาติ
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ในความพยายามที่จะทำเช่นนั้น การรับรอง BIS
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซล รวมอยู่ในการรับรอง Scheme X จาก Bureau
          of Indian Standards (BIS)
          โครงการนี้ได้ถูกบังคับใช้เพื่อให้แน่ใจว่าทั้งผู้ผลิตในประเทศและทั่วโลกเป็นไปตามมาตรฐานอินเดียที่เข้มงวดและเข้มงวดก่อนที่จะขายผลิตภัณฑ์ในอินเดีย
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          โพสต์นี้อธิบายรายละเอียดเกี่ยวกับความสำคัญของการรับรอง BIS Scheme X
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซล ข้อบังคับ OTR ปี 2024
          และวิธีที่ผู้ผลิตสามารถรับการรับรอง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ความสำคัญของ BIS สำหรับเครื่องกำเนิดไฟฟ้าดีเซล
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องกำเนิดไฟฟ้าดีเซลใช้ใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>โรงงานและสถานที่ทำงาน</li>
          <li>โรงพยาบาลและผู้ตอบสนองฉุกเฉิน</li>
          <li>ศูนย์ข้อมูลและศูนย์ IT</li>
          <li>อาคารพาณิชย์และที่อยู่อาศัย</li>
          <li>งานสาธารณะและสาธารณูปโภค</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเสี่ยงมีมากหากเครื่องกำเนิดไฟฟ้าดีเซลไม่ได้รับการรับรองอย่างถูกต้อง:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            ความล้มเหลวของเครื่องวัด (ทางกลและไฟฟ้า) ที่ส่งผลให้ขาดแคลนการจ่ายไฟ
          </li>
          <li>
            ความเสี่ยงสูงต่อไฟไหม้และอันตรายด้านความปลอดภัยในหน่วยที่ไม่ปฏิบัติตาม
          </li>
          <li>การปล่อยมลพิษสูงเกินไปและไม่มีประสิทธิภาพด้านพลังงาน</li>
          <li>อุปสรรคทางกฎหมาย ถูกปิดกั้นจากการประมูล</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เครื่องกำเนิดไฟฟ้าดีเซลสามารถปฏิบัติตามการรับรอง Scheme X
          ได้อย่างง่ายดายซึ่งช่วยให้ผู้ผลิตสามารถขายผลิตภัณฑ์ที่ปลอดภัย
          เชื่อถือได้และเป็นมิตรกับสิ่งแวดล้อมสำหรับใช้ในอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซลคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซลเป็นกระบวนการรับรองอย่างเป็นทางการและเป็นระบบที่จัดตั้งขึ้นโดยกฎระเบียบการประเมินความสอดคล้อง
          BIS 2018
          สิ่งนี้กำหนดให้มีการทดสอบที่เข้มงวดและการประเมินคุณภาพเพื่อตรวจสอบการปฏิบัติตามมาตรฐานอินเดีย
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ไฮไลท์ของการรับรอง Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ผู้ผลิตทั้งหมด - อินเดียและต่างประเทศ - ข้อกำหนดบังคับ</li>
          <li>ใช้กับเครื่องกำเนิดไฟฟ้าดีเซลทุกประเภทที่มีความจุต่างกัน</li>
          <li>รวมถึงการทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่ได้รับอนุญาตจาก BIS</li>
          <li>
            การตรวจสอบโรงงาน การเยี่ยมชมโรงงานและการตรวจสอบกระบวนการผลิต
            เพื่อดำเนินการตรวจสอบโรงงานในสถานที่อย่างอิสระเพื่อให้แน่ใจในมาตรฐานคุณภาพและความปลอดภัย
          </li>
          <li>
            เสนอใบอนุญาตสำหรับการใช้เครื่องหมายมาตรฐาน BIS เมื่อได้รับใบอนุญาต
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับเครื่องกำเนิดไฟฟ้าดีเซล (DG)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระทรวงอุตสาหกรรมหนักได้ออกประกาศสำหรับ OTR
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซลในปี 2024
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          วันที่บังคับใช้:
          ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับการรับรองภายในวันที่ 1 กันยายน
          2026 เริ่มตั้งแต่วันที่นี้ การผลิต การขาย
          หรือการนำเข้าเครื่องกำเนิดไฟฟ้าดีเซลที่ไม่มีใบรับรองจะถูกห้ามในอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้าดีเซล
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            การรับประกันความปลอดภัย: ลดความล้มเหลวทางกล
            ตามเทคโนโลยีป้องกันอัคคีภัยเพื่อป้องกันไฟไหม้ ไฟฟ้าลัดวงจร
            และอุบัติเหตุ
          </li>
          <li>
            การปฏิบัติตามสิ่งแวดล้อม:
            รับประกันว่ามาตรฐานประหยัดพลังงานและการลดการปล่อยมลพิษได้รับการปฏิบัติตาม
          </li>
          <li>
            การเข้าถึงตลาด: OTR สำหรับเครื่องกำเนิดไฟฟ้าดีเซล -
            การรับรองเป็นข้อบังคับสำหรับการขายในอินเดีย
          </li>
          <li>
            ความเชื่อมั่นของลูกค้า: เครื่องหมายมาตรฐาน BIS
            รับประกันความน่าเชื่อถือและความปลอดภัยสูง
          </li>
          <li>
            ความเหมาะสมในการประมูล: สำหรับสัญญาของรัฐบาล/รัฐวิสาหกิจ
            ผลิตภัณฑ์ต้องได้รับการรับรอง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทเครื่องกำเนิดไฟฟ้าดีเซลที่ครอบคลุมใน Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          โครงการรับรองเครื่องกำเนิดไฟฟ้าดีเซล X ครอบคลุมกลุ่มต่อไปนี้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เครื่องกำเนิดไฟฟ้าบ้านเคลื่อนที่ที่ใช้ดีเซล</li>
          <li>เครื่องกำเนิดไฟฟ้าดีเซลเชิงพาณิชย์ (ความจุสูง)</li>
          <li>เครื่องกำเนิดไฟฟ้าสำรองฉุกเฉินและสแตนด์บาย</li>
          <li>
            ชุดเครื่องกำเนิดไฟฟ้าดีเซลไร้เสียงสำหรับเชิงพาณิชย์
            (การใช้งานและการใช้ในเมือง)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          แต่ละประเภทย่อยต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับ (รหัส IS) เช่น
          IS 16819:2018 / ISO 12100:2010 (ความปลอดภัยของเครื่องจักร
          หลักการทั่วไปของการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
          แต่ละประเภทต้องเป็นไปตามมาตรฐานอินเดียของตัวเอง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้าดีเซล
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            ระบุมาตรฐานที่ใช้บังคับ: ค้นหารหัส IS สำหรับประเภทเครื่องกำเนิดไฟฟ้า
          </li>
          <li>
            การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบความปลอดภัย
            ประสิทธิภาพและการปล่อยมลพิษในห้องปฏิบัติการที่รับรองโดย BIS
          </li>
          <li>
            การตรวจสอบโรงงาน: เจ้าหน้าที่ BIS
            ตรวจสอบกระบวนการควบคุมคุณภาพการผลิต
          </li>
          <li>การยื่นเอกสาร: ให้ข้อกำหนด ผลการทดสอบ และเอกสารการปฏิบัติตาม</li>
          <li>
            การออกใบอนุญาต: หลังจากได้รับการอนุมัติ BIS
            ออกใบอนุญาตและอนุญาตให้ใช้เครื่องหมายมาตรฐาน
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง:
            การตรวจสอบและการตรวจสอบผลิตภัณฑ์ดำเนินการเพื่อให้แน่ใจว่าการรับรองยังคงใช้ได้
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          โทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความล้มเหลวในการปฏิบัติตามการรับรอง BIS
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซลจาก OTR
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซลอาจส่งผลให้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามขาย นำเข้าและการผลิตอุปกรณ์ที่ไม่มีใบรับรอง</li>
          <li>สินค้าถูกยึดและค่าปรับทางการเงิน</li>
          <li>การไม่เหมาะสมสำหรับสัญญาของรัฐบาล</li>
          <li>ความเสียหายต่อชื่อเสียงและการเงินถาวร</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X สำหรับเครื่องกำเนิดไฟฟ้าดีเซลตาม OTR
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซล (2024)
          เป็นก้าวสำคัญในการเดินทางสู่การปรับปรุงความปลอดภัยของผลิตภัณฑ์
          ความน่าเชื่อถือและประสิทธิภาพในอุตสาหกรรมพลังงานสำรองของอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          สำหรับผู้ผลิต/ผู้นำเข้า การรับรอง Scheme X
          สำหรับเครื่องกำเนิดไฟฟ้าดีเซลไม่เพียงแต่เป็นความต้องการทางกฎหมายเท่านั้น
          แต่ยังเป็นข้อได้เปรียบทางการแข่งขันที่สะท้อนถึงความน่าเชื่อถือ
          การปฏิบัติตามและความไว้วางใจของตลาด
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
