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
import FooterThai from "@/components/manual/Footer/FooterThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ConstructionMachineryThai = () => {
  return (
    <div className="relative w-full">
      <ConstructionMachineryMetaTags />

      <ConstructionMachineryBreadcrumb />
      <ConstructionMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default ConstructionMachineryThai;

const ConstructionMachineryMetaTags = () => {
  const title =
    "การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้าง การขุดดิน และการทำเหมือง";
  const description =
    "การรับรอง BIS Scheme X เป็นข้อบังคับสำหรับเครื่องจักรก่อสร้าง การขุดดิน และการทำเหมืองเพื่อให้แน่ใจในความปลอดภัย คุณภาพ และมาตรฐานในภาคอุตสาหกรรมที่สำคัญ";
  const keywords =
    "การรับรอง BIS สำหรับเครื่องจักรก่อสร้าง, การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้าง, การรับรอง Scheme X สำหรับเครื่องจักรก่อสร้าง, BIS สำหรับเครื่องจักรก่อสร้าง, OTR สำหรับเครื่องจักรก่อสร้าง";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้างในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้างในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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

const ConstructionMachineryBreadcrumb = () => {
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
                    การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้าง
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

const ConstructionMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const ConstructionMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเครื่องจักรก่อสร้าง
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้าง"
            title="ใบอนุญาต BIS Scheme X สำหรับเครื่องจักรก่อสร้าง"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          รถขุด รถตัก รถแทรกเตอร์ เครื่องผสมคอนกรีต และรถบดถนน
          เป็นเครื่องจักรก่อสร้างหลักที่ใช้ในการพัฒนาสาธารณูปโภคของอินเดีย
          ความต้องการที่สูงขึ้นสำหรับเครื่องจักรที่ปลอดภัยและเชื่อถือได้มาจากการลงทุนขนาดใหญ่ในถนน
          เมืองอัจฉริยะ โรงงาน และที่อยู่อาศัย
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Bureau of Indian Standards (BIS) ได้สร้างการรับรอง BIS
          เป็นข้อบังคับภายใต้ Scheme-X
          สำหรับเครื่องจักรก่อสร้างเพื่อให้การรับประกันคุณภาพ บริการ
          และความปลอดภัย
          สิ่งนี้รับประกันว่าอุปกรณ์เป็นไปตามมาตรฐานอินเดียก่อนที่จะมีจำหน่ายหรือนำเข้าในอินเดีย
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบทความนี้ คุณจะเรียนรู้เกี่ยวกับการรับรอง BIS Scheme X
          สำหรับเครื่องจักรก่อสร้าง ข้อกำหนด OTR สำหรับเครื่องจักรก่อสร้าง
          และกระบวนการรับใบอนุญาต BIS สำหรับเครื่องจักรก่อสร้างรวมถึงเครื่องหมาย
          BIS สำหรับเครื่องจักรก่อสร้าง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไม BIS สำหรับเครื่องจักรก่อสร้างจึงสำคัญ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องจักรก่อสร้างถูกนำไปใช้ในการเติบโตของสาธารณูปโภคและสถานที่ก่อสร้างขนาดใหญ่
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>การพัฒนาถนนและทางหลวง</li>
          <li>โครงการอสังหาริมทรัพย์และที่อยู่อาศัย</li>
          <li>การทำเหมืองและการขุด</li>
          <li>การก่อสร้างอุตสาหกรรมและวิศวกรรมหนัก</li>
          <li>โครงการท่าเรือ สนามบิน และรถไฟใต้ดิน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลที่ตามมาจากการไม่มี BIS สำหรับอุปกรณ์ก่อสร้างมีดังนี้:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ความล้มเหลวของอุปกรณ์และเวลาหยุดทำงานที่มีค่าใช้จ่ายสูง</li>
          <li>ความน่าจะเป็นของอุบัติเหตุที่สูงขึ้นและความเสี่ยงจากอันตราย</li>
          <li>การไม่ปฏิบัติตามการประมูลของรัฐบาล</li>
          <li>ค่าใช้จ่ายในการบำรุงรักษาและการดำเนินงานที่เพิ่มขึ้น</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เครื่องหมาย BIS สำหรับเครื่องจักรก่อสร้างแสดงว่าผลิตภัณฑ์นั้นปลอดภัย
          เชื่อถือได้ และเป็นไปตามมาตรฐานอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับเครื่องจักรก่อสร้างคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X ครอบคลุมโดยข้อกำหนดการประเมินความสอดคล้องของ
          Bureau of Indian Standards (BIS) (2018) ซึ่งให้แนวทางสำหรับผลิตภัณฑ์
          ในโครงการนี้ BIS
          ตัดสินคุณภาพของผลิตภัณฑ์และรับประกันว่าผลิตภัณฑ์นั้นลดอันตรายต่อสุขภาพของมนุษย์
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          คุณสมบัติหลัก - การรับรอง Scheme X สำหรับอุปกรณ์ก่อสร้าง:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับสำหรับผู้ผลิตในประเทศและต่างประเทศ</li>
          <li>ครอบคลุมเครื่องจักรหนักและอุปกรณ์ก่อสร้างทุกประเภท</li>
          <li>
            การทดสอบผลิตภัณฑ์ที่จำเป็น
            การเยี่ยมชมโรงงานที่จำเป็นและการตรวจสอบการปฏิบัติตามกฎระเบียบต้องดำเนินการเป็นประจำ
          </li>
          <li>อนุญาตให้ใช้เครื่องหมาย BIS สำหรับเครื่องจักรก่อสร้าง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับอุปกรณ์ก่อสร้าง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X
          จะกลายเป็นข้อบังคับเป็นส่วนหนึ่งของกฎระเบียบทางเทคนิค Omnibus (OTR)
          2024 สำหรับเครื่องจักรก่อสร้างที่ประกาศโดยกระทรวงอุตสาหกรรมหนัก
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลา: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
          สำหรับเครื่องจักรก่อสร้างภายใต้ Scheme X ก่อนวันที่ 1 กันยายน 2026
          เริ่มตั้งแต่วันที่นี้ อุปกรณ์ที่ไม่มีใบรับรองไม่สามารถผลิต ขนส่ง
          หรือขายสำหรับโครงการสาธารณูปโภคสาธารณะได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับอุปกรณ์หรือเครื่องจักรก่อสร้าง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยและความน่าเชื่อถือ:
            ลดความเสี่ยงของความล้มเหลวทางกลหรืออุบัติเหตุในสถานที่ก่อสร้าง
          </li>
          <li>
            การเข้าถึงตลาดและความเหมาะสมในการประมูล: ผลิตภัณฑ์ที่รับรองโดย BIS
            มีคุณสมบัติสำหรับการประมูลของรัฐบาลและรัฐวิสาหกิจ
          </li>
          <li>
            ความเชื่อมั่นของผู้บริโภคและผู้รับเหมา: เครื่องหมาย BIS
            เครื่องจักรก่อสร้างรับประกันผลิตภัณฑ์ที่ปลอดภัยและมีคุณภาพสำหรับผู้ซื้อทุกราย
          </li>
          <li>
            การเข้าสู่ตลาดโลก: ใบอนุญาต BIS
            สำหรับเครื่องจักรก่อสร้างสามารถเป็นประโยชน์สำหรับบริษัทต่างประเทศในการเข้าถึงตลาดอินเดียอย่างง่ายดาย
          </li>
          <li>
            การปฏิบัติตามกฎหมาย: ภูมิคุ้มกันจากค่าปรับ การห้าม และบทลงโทษภายใต้
            OTR เครื่องจักรก่อสร้าง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทอุปกรณ์ก่อสร้างที่ครอบคลุมภายใต้ Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X
          สำหรับเครื่องจักรก่อสร้างใช้กับอุปกรณ์ประเภทต่างๆ เช่น:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>รถขุดและรถตักแบ็คโฮ</li>
          <li>รถแทรกเตอร์และรถบดถนน</li>
          <li>เครนที่ใช้ในสถานที่ก่อสร้าง</li>
          <li>เครื่องผสมคอนกรีตและโรงงานผสม</li>
          <li>โรงงานแอสฟัลต์และเครื่องปู</li>
          <li>เครื่องตอกเสาเข็มและเจาะ</li>
          <li>อุปกรณ์จัดการวัสดุและการเคลื่อนย้ายดิน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          แต่ละหมวดหมู่ต้องเป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS) ตาม IS
          17055 (ส่วนที่ 7):2020, IS 17055 (ส่วนที่ 8):2020 และ IS 17055
          (ส่วนที่ 12):2020 ในแง่ของการออกแบบ ความปลอดภัย ประสิทธิภาพ ฯลฯ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ขั้นตอนการขอใบอนุญาต BIS สำหรับอุปกรณ์ก่อสร้าง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            ระบุมาตรฐานที่ใช้บังคับ: ค้นหารหัส IS
            สำหรับประเภทเครื่องจักรก่อสร้างของคุณ
          </li>
          <li>
            การทดสอบผลิตภัณฑ์:
            ดำเนินการทดสอบความปลอดภัยและประสิทธิภาพในห้องปฏิบัติการที่รับรองโดย
            BIS
          </li>
          <li>
            การตรวจสอบโรงงาน: ผู้ตรวจสอบ BIS
            ตรวจสอบกระบวนการควบคุมคุณภาพและการผลิตอย่างแท้จริง
          </li>
          <li>การสมัครและเอกสาร: ให้รายงาน ข้อกำหนด และคู่มือเพื่อตรวจสอบ</li>
          <li>
            ใบอนุญาต BIS สำหรับเครื่องจักรก่อสร้าง: หลังจากได้รับการอนุมัติ
            ผู้ผลิตได้รับอนุญาตให้ติดเครื่องหมาย BIS สำหรับเครื่องจักรก่อสร้าง
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง: การตรวจสอบและการตรวจสอบบ่อยๆ
            รักษาการปฏิบัติตามอย่างต่อเนื่อง
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          โทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความล้มเหลวอย่างมากหรือการไม่ได้รับใบรับรอง BIS
          เครื่องจักรก่อสร้างภายในวันที่ 1 กันยายน 2026 ในกรณีของ OTR
          สำหรับเครื่องจักรก่อสร้างจะมีผลกระทบดังนี้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามขายและนำเข้าอุปกรณ์ที่ไม่มีใบรับรอง</li>
          <li>ค่าปรับจำนวนมากและการยึดผลิตภัณฑ์</li>
          <li>การตัดสิทธิ์จากโครงการและรางวัลของรัฐบาล</li>
          <li>
            ความเสียหายต่อชื่อเสียงที่อาจเกิดขึ้นอย่างไม่จำกัดในอีกหลายปีข้างหน้า
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การดำเนินการบังคับการรับรอง BIS Scheme X
          สำหรับเครื่องจักรก่อสร้างภายใต้ OTR สำหรับเครื่องจักรก่อสร้าง (2024)
          เป็นก้าวสำคัญสู่ความปลอดภัย ประสิทธิภาพ
          และมาตรฐานในอุตสาหกรรมในประเทศของอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          สำหรับผู้ผลิต ผู้นำเข้า และผู้ส่งออกเครื่องจักรก่อสร้าง การรับใบอนุญาต
          BIS สำหรับเครื่องจักรก่อสร้างและการติดเครื่องหมาย BIS
          สำหรับเครื่องจักรก่อสร้างไม่เพียงแต่เป็นข้อกำหนดการปฏิบัติตามกฎระเบียบเท่านั้น
          แต่ยังเป็นขั้นตอนเชิงกลยุทธ์ในการขยายไปยังตลาดใหม่
          เจาะตลาดก่อสร้างของอินเดียที่กำลังเติบโตอย่างรวดเร็ว
          และสร้างชื่อเสียงของคุณในระยะยาว
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
