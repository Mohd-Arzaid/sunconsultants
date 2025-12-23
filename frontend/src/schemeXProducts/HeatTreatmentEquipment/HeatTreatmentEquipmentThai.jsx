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
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import { Helmet } from "react-helmet-async";
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

const HeatTreatmentEquipmentThai = () => {
  return (
    <div className="relative w-full">
      <HeatTreatmentEquipmentMetaTags />
      <HeatTreatmentEquipmentBreadcrumb />
      <HeatTreatmentEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default HeatTreatmentEquipmentThai;

const HeatTreatmentEquipmentMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อน";
  const description =
    "การรับรอง BIS Scheme X กำหนดให้เครื่องจักรทุกประเภทสำหรับการบำบัดวัสดุผ่านกระบวนการที่เกี่ยวข้องกับการเปลี่ยนแปลงอุณหภูมิและ/หรือการประกอบ การประกอบย่อย และส่วนประกอบต้องได้รับการรับรอง BIS";
  const keywords =
    "การรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน, การรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อน, การรับรอง Scheme X สำหรับอุปกรณ์บำบัดความร้อน, BIS สำหรับอุปกรณ์บำบัดความร้อน, OTR สำหรับอุปกรณ์บำบัดความร้อน";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อนในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อนในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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
        href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-yeolcheori-jangbi"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-netsu-shori-souchi"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-re-chu-li-she-bei-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-warmtebehandelingsapparatuur"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
      />
    </Helmet>
  );
};

const HeatTreatmentEquipmentBreadcrumb = () => {
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
                    การรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน
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

const HeatTreatmentEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="ใบอนุญาต BIS Scheme X สำหรับการบำบัดวัสดุ"
            alt="การรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อน"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          อุปกรณ์บำบัดความร้อนเป็นหนึ่งในการใช้งานที่สำคัญที่สุดในอุตสาหกรรมเช่นยานยนต์
          การบินและอวกาศ การหล่อ การตีขึ้นรูป และวิศวกรรมหนัก
          เป็นอุปกรณ์ที่เปลี่ยนคุณสมบัติทางกายภาพและกลไกของโลหะผ่านการทำงานเช่นการอบอ่อน
          การทำให้เย็น การชุบแข็ง การอบอ่อน ฯลฯ
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากความสำคัญ สำนักงานมาตรฐานอินเดีย (BIS) ได้ประกาศให้การรับรอง
          BIS สำหรับอุปกรณ์บำบัดความร้อนเป็นข้อบังคับภายใต้การรับรอง Scheme X
          สิ่งนี้รับประกันว่าผู้ผลิตทั้งในอินเดียและทั่วโลกปฏิบัติตามมาตรฐานอินเดียที่เข้มงวดก่อนการตลาดอุปกรณ์ในประเทศ
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในโพสต์นี้ เราจะอธิบายความสำคัญของการรับรอง BIS Scheme X
          สำหรับอุปกรณ์บำบัดความร้อน OTR สำหรับอุปกรณ์บำบัดความร้อน
          และกระบวนการในการรับใบอนุญาต BIS
          สำหรับอุปกรณ์บำบัดความร้อนพร้อมเครื่องหมาย BIS
          สำหรับอุปกรณ์บำบัดความร้อน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ความสำคัญของ BIS สำหรับอุปกรณ์บำบัดความร้อน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตาบำบัดความร้อนมักใช้ใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>อุตสาหกรรมโลหะและโลหะวิทยา</li>
          <li>การผลิตยานยนต์และการบินและอวกาศ</li>
          <li>การผลิตเครื่องมือและแม่พิมพ์</li>
          <li>อุตสาหกรรมพลังงานและเครื่องจักรหนักอื่นๆ</li>
          <li>การป้องกันประเทศและวิศวกรรมความแม่นยำ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การไม่มี BIS
          สำหรับอุปกรณ์บำบัดความร้อนอาจทำให้เกิดเครื่องจักรคุณภาพต่ำซึ่งอาจทำให้เกิด:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การให้ความร้อนมากเกินไปหรือการประมวลผลที่ไม่เหมาะสม</li>
          <li>ความล้มเหลวของกลไกและโครงสร้างของผลิตภัณฑ์สุดท้าย</li>
          <li>การใช้พลังงานที่เพิ่มขึ้นและขาดประสิทธิภาพ</li>
          <li>อันตรายต่อความปลอดภัยสำหรับผู้ปฏิบัติงาน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS
          ไม่เพียงแต่รับประกันว่าอุปกรณ์ทำงานได้ดีและปลอดภัยตามความต้องการประสิทธิภาพของอุตสาหกรรมเท่านั้น
          แต่ยังเป็นไปตามเกณฑ์ด้านสิ่งแวดล้อมอีกด้วย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ใบรับรอง BIS Scheme X สำหรับอุปกรณ์บำบัดความร้อนคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scheme X - อุปกรณ์บำบัดความร้อน สอดคล้องกับกระทรวงเหล็ก รัฐบาลอินเดีย
          ซึ่งเป็นโครงการรับรองบังคับภายใต้ข้อบังคับการประเมินความสอดคล้องของ
          BIS อินเดีย พ.ศ. 2561
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การรับรอง Scheme X สำหรับอุปกรณ์บำบัดความร้อน: คุณสมบัติหลัก:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับสำหรับผู้ผลิตทั้งในอินเดียและต่างประเทศ</li>
          <li>สามารถใช้กับอุปกรณ์บำบัดความร้อนและเตาเผาส่วนใหญ่</li>
          <li>
            รวมถึงการทดสอบผลิตภัณฑ์
            การตรวจสอบโรงงานและการตรวจสอบการปฏิบัติตามอย่างต่อเนื่อง
          </li>
          <li>ผู้ผลิตได้รับอนุญาตให้ใช้เครื่องหมายมาตรฐาน BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับอุปกรณ์บำบัดความร้อน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระทรวงอุตสาหกรรมหนักในปี 2024 ได้ออกข้อบังคับทางเทคนิคแบบรวม (OTR)
          สำหรับอุปกรณ์บำบัดความร้อน ซึ่งกำหนดให้มีการปฏิบัติตาม Scheme X
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลา: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
          ที่ถูกต้องสำหรับอุปกรณ์บำบัดความร้อนภายในวันที่ 1 กันยายน 2026
          หลังจากวันที่นี้
          อุปกรณ์บำบัดความร้อนที่ไม่มีใบรับรองจะไม่มีคุณสมบัติสำหรับการขาย
          การนำเข้าหรือการยื่นข้อเสนอในการประมูลสาธารณะ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยในการดำเนินงาน: ป้องกันจากการให้ความร้อนมากเกินไป
            การบำบัดที่ไม่สม่ำเสมอและความเสียหายของอุปกรณ์
          </li>
          <li>
            ความน่าเชื่อถือของผลิตภัณฑ์:
            รับประกันว่าสิ่งที่บำบัดแล้วเป็นไปตามข้อกำหนดความแข็ง ความทนทาน
            และความเหนียว
          </li>
          <li>
            ประสิทธิภาพพลังงาน:
            อุปกรณ์ที่รับรองแล้วได้รับการทดสอบสำหรับการใช้พลังงานที่เหมาะสม
            ลดต้นทุนการดำเนินงาน
          </li>
          <li>
            การเข้าถึงตลาด: เครื่องหมาย BIS
            สำหรับอุปกรณ์บำบัดความร้อนมักเป็นข้อบังคับสำหรับการซื้อสาธารณะและการประมูลของรัฐบาล
          </li>
          <li>
            ข้อได้เปรียบระดับโลก:
            แบรนด์ระดับโลกสามารถเข้าถึงตลาดอินเดียได้อย่างง่ายดายด้วยการได้รับใบอนุญาต
            BIS สำหรับอุปกรณ์บำบัดความร้อน
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทอุปกรณ์บำบัดความร้อนภายใต้โครงการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X
          สำหรับอุปกรณ์บำบัดความร้อนครอบคลุมเครื่องจักรจำนวนมากเช่น:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เตาอบอ่อน</li>
          <li>เตาทำให้เย็น</li>
          <li>เตาชุบแข็งและอบอ่อน</li>
          <li>เตาโรตารีสำหรับการบำบัดความร้อนอย่างต่อเนื่อง</li>
          <li>เตาคาร์บูไรซ์และไนไตรด์</li>
          <li>อุปกรณ์บำบัดความร้อนแบบเหนี่ยวนำและไฟฟ้า</li>
          <li>อุปกรณ์บำบัดความร้อนที่ใช้แก๊สและน้ำมัน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          แต่ละประเภทต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS) เช่น IS
          16819:2018/ISO 12100:2010 ลักษณะประสิทธิภาพ
          เกรดวัสดุและคุณสมบัติการอนุรักษ์พลังงานต้องสอดคล้องกับมาตรฐานอินเดียที่เกี่ยวข้อง
          (รหัส IS) สำหรับแต่ละประเภทอุปกรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ระบุมาตรฐานที่เกี่ยวข้อง: อ้างอิงรหัส IS
            ที่เกี่ยวข้องสำหรับประเภทอุปกรณ์บำบัดความร้อนของคุณ
          </li>
          <li>
            การทดสอบในห้องปฏิบัติการที่รับรองโดย BIS: ดำเนินการทดสอบประสิทธิภาพ
            ความปลอดภัย และประสิทธิภาพ
          </li>
          <li>
            การตรวจสอบโรงงาน: BIS
            ตรวจสอบระบบควบคุมคุณภาพและสิ่งอำนวยความสะดวกในการผลิต
          </li>
          <li>
            การสมัครและเอกสาร: จัดหาผลลัพธ์ การทดสอบที่ดำเนินการ
            และข้อกำหนดทางเทคนิคและคู่มือคุณภาพ
          </li>
          <li>
            การออกใบอนุญาต BIS สำหรับอุปกรณ์บำบัดความร้อน:
            การอนุมัติอนุญาตให้ใช้เครื่องหมาย BIS สำหรับอุปกรณ์บำบัดความร้อน
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง:
            ดำเนินการตรวจสอบและการตรวจสอบเป็นประจำเพื่อรักษามาตรฐานคุณภาพ
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากไม่ปฏิบัติตาม OTR อุปกรณ์บำบัดความร้อนภายในวันที่ 1 ก.ย. 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ข้อห้ามในการขาย/นำเข้าอุปกรณ์ที่ไม่มีใบรับรอง</li>
          <li>ค่าปรับและการยึดผลิตภัณฑ์</li>
          <li>ไม่มีคุณสมบัติสำหรับการประมูลของรัฐบาลและ PSU</li>
          <li>การสูญเสียมูลค่าแบรนด์ในระยะยาวในตลาดอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การบังคับใช้การรับรอง Scheme X สำหรับอุปกรณ์บำบัดความร้อนภายใต้ OTR
          2024 เป็นก้าวสำคัญในการยกระดับมาตรฐานอุตสาหกรรมอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          สำหรับผู้ผลิต ผู้นำเข้า และผู้ส่งออกอุปกรณ์บำบัดความร้อน
          กระบวนการในการรับการรับรอง BIS สำหรับอุปกรณ์บำบัดความร้อน
          เพื่อรับใบอนุญาต BIS อุปกรณ์บำบัดความร้อนและการใช้เครื่องหมายมาตรฐาน
          BIS อุปกรณ์บำบัดความร้อนไม่เพียงแต่เกี่ยวกับการปฏิบัติตามเท่านั้น
          แต่ยังเกี่ยวกับการสร้างผลิตภัณฑ์ที่ปลอดภัยและเชื่อถือได้ซึ่งสามารถแข่งขันในตลาดในการเข้าถึงตลาดที่ถูกควบคุม
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
