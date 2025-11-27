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

const PumpsAndLiquidElevatorsThai = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsBreadcrumb />
      <PumpsAndLiquidElevatorsMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default PumpsAndLiquidElevatorsThai;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลว";
  const description =
    "การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวภายใต้ข้อบังคับทางเทคนิค Omnibus 2024 กำหนดให้ปั๊มและลิฟต์ของเหลวทุกประเภทต้องเป็นไปตามการรับรอง Scheme X ก่อนกันยายน 2026";
  const keywords =
    "การรับรอง BIS สำหรับปั๊ม, การรับรอง BIS Scheme X สำหรับปั๊ม, การรับรอง Scheme X สำหรับปั๊ม, BIS สำหรับปั๊ม, การรับรอง BIS สำหรับปั๊มและลิฟต์ของเหลว, OTR สำหรับปั๊ม";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsBreadcrumb = () => {
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
                    การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลว
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

const PumpsAndLiquidElevatorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวในอินเดีย
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="ใบอนุญาต BIS สำหรับปั๊มและลิฟต์ของเหลว"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          การเติบโตของอุตสาหกรรมและโครงสร้างพื้นฐานที่รวดเร็วในอินเดียต้องการ
          เครื่องจักรที่ทำงานมากขึ้นและให้แน่ใจว่าตอบสนองต่อ
          ความต้องการในประเทศและระหว่างประเทศ ปั๊มและลิฟต์ของเหลว
          มีความสำคัญอย่างยิ่งสำหรับทรัพยากรน้ำ เกษตรกรรม การก่อสร้าง พลังงาน
          อุตสาหกรรม และภาคส่วนอื่นๆ อีกมากมาย อุปกรณ์ที่ชำรุดสามารถ
          สร้างความเสี่ยงต่อความปลอดภัย รบกวนการดำเนินงาน และสร้างความสูญเสีย
          ทางการเงินหากไม่ผลิตตามข้อกำหนดที่ถูกต้องด้วย การควบคุมคุณภาพที่มีอยู่
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อควบคุมสิ่งนี้ BIS (สำนักงานมาตรฐานอินเดีย) ได้ เปิดตัวการรับรอง
          Scheme X ซึ่งกำหนดให้ปั๊มและ
          ลิฟต์ของเหลวทุกตัวต้องเป็นไปตามมาตรฐานคุณภาพแห่งชาติก่อนขายใน อินเดีย
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบทความนี้ เราตั้งใจจะหารือเกี่ยวกับความสำคัญของการรับรอง BIS
          สำหรับปั๊ม ความสำคัญของข้อบังคับทางเทคนิค Omnibus (OTR) 2024 และ
          กระบวนการเพื่อรับใบอนุญาต BIS สำหรับปั๊มภายใต้ Scheme X
          สำหรับผู้ผลิตที่มีความทะเยอทะยาน
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไมปั๊มและลิฟต์ของเหลวจึงสำคัญ
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ปั๊ม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ปั๊มเป็นอุปกรณ์ที่จำเป็นอย่างยิ่งสำหรับการเคลื่อนย้ายของไหล
          หรือโคลนผ่านอุตสาหกรรมต่างๆ พวกเขาถูกใช้กันอย่างแพร่หลายใน:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ระบบเกษตรกรรมและการชลประทาน</li>
          <li>การจ่ายน้ำสาธารณะและการใช้งานในครัวเรือน</li>
          <li>สถานีบำบัดน้ำเสียและน้ำทิ้ง</li>
          <li>ท่อน้ำมันและก๊าซ</li>
          <li>ระบบปรับอากาศและทำความเย็นในอุตสาหกรรม</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          ลิฟต์ของเหลว
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ปั๊มยก ลิฟต์ของเหลวแนวตั้งสำหรับยกของเหลว ทำงานสำหรับการสูบ:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ระบบจำหน่ายน้ำที่มีมวลปั๊มสูง</li>
          <li>ไซโลอุตสาหกรรม/ถังเก็บ</li>
          <li>ในอุตสาหกรรมพลังงาน เคมี และกระบวนการ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากพวกเขามีการใช้กันทั่วไป ปั๊มราคาถูกหรือลิฟต์ของเหลวสามารถ
          ทำให้เกิด:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ความล้มเหลวทางกล</li>
          <li>อันตรายทางไฟฟ้า</li>
          <li>การรั่วไหลและการกัดกร่อน</li>
          <li>
            อุบัติเหตุที่เกิดจากความเสี่ยงด้านความปลอดภัยและความสูญเสีย
            ทางเศรษฐกิจ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          นั่นคือเหตุผลที่ BIS สำหรับปั๊มและลิฟต์ของเหลวเป็นการป้องกัน
          ที่จำเป็นอย่างยิ่งสำหรับผู้ผลิตและผู้ซื้อเช่นกัน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS คืออะไรและ Scheme X คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          สำนักงานมาตรฐานอินเดีย (BIS) เป็นหน่วยงานมาตรฐานแห่งชาติ
          ของอินเดียสำหรับการรับรองคุณภาพและความปลอดภัยของผลิตภัณฑ์ เพื่อ
          ควบคุมการติดตั้งและเครื่องจักรที่สำคัญ BIS ได้กำหนดให้ ได้รับการรับรอง
          Scheme X ตั้งแต่ 16 มีนาคม 2022 ภายใต้ข้อบังคับ การประเมินความสอดคล้อง
          BIS พ.ศ. 2561
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          จุดสำคัญของการรับรอง Scheme X สำหรับปั๊ม
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>เป็นข้อบังคับสำหรับผู้ผลิตอินเดียและต่างประเทศ</li>
          <li>
            ใช้กับปั๊ม มอเตอร์ และลิฟต์ของเหลวที่ครอบคลุมภายใต้ มาตรฐานอินเดีย
          </li>
          <li>
            รวมถึงการทดสอบในห้องปฏิบัติการ การตรวจสอบโรงงาน
            การตรวจสอบการปฏิบัติตาม ที่สม่ำเสมอ
          </li>
          <li>
            เพิ่มความแข็งแกร่งทางกฎหมายเพื่อให้สิทธิ์ในการใช้เครื่องหมาย BIS
            สำหรับปั๊มโดยผู้ผลิตเป็นหลักฐานการรับรอง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อบังคับทางเทคนิค Omnibus (OTR) สำหรับปั๊ม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 2024 ได้ถูกประกาศโดยกระทรวงอุตสาหกรรมหนัก ซึ่ง
          กำหนดให้ปั๊มและลิฟต์ของเหลวทั้งหมดปฏิบัติตาม การรับรอง Scheme X
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          กำหนดเส้นตายสำหรับการปฏิบัติตาม:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          ภายในวันที่ 1 กันยายน 2026 ผู้ผลิตและผู้นำเข้าทั้งหมดต้อง
          ได้รับใบอนุญาต BIS ที่ถูกต้องสำหรับปั๊มภายใต้ Scheme X
          การไม่ปฏิบัติตามสามารถทำให้เกิดค่าปรับหนัก รวมถึงการปิด
          การขายและการถูกตัดออกจากการประมูลสาธารณะ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS สำหรับปั๊มและลิฟต์ของเหลวจึงสำคัญ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. การรับประกันความปลอดภัย: ให้แน่ใจว่าอุปกรณ์ได้รับการออกแบบและ
          สร้างขึ้นเพื่อความแม่นยำในการทำงานและไม่ทำให้เกิด:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ความล้มเหลวทางไฟฟ้า</li>
          <li>การรั่วไหลและการกัดกร่อน</li>
          <li>ความเสียหายและความล้มเหลวของเครื่องจักร</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. ข้อได้เปรียบในตลาด
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            ปั๊มที่ได้รับการรับรอง BIS มักจำเป็นสำหรับโครงการสาธารณะ
            การประมูลของรัฐบาล ฯลฯ
          </li>
          <li>
            ให้ข้อได้เปรียบในการแข่งขันเมื่อเทียบกับผลิตภัณฑ์ที่
            ไม่ได้รับการรับรอง
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. ความเชื่อมั่นของลูกค้า: เครื่องหมาย ISI บนปั๊มให้ความเชื่อมั่น
          แก่ผู้ซื้อเกี่ยวกับคุณภาพและรับประกันประสิทธิภาพของผลิตภัณฑ์
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. แบรนด์ระดับโลกได้รับสิทธิ์เข้าถึงตลาดได้ง่าย: OEM ต่างประเทศได้รับ
          สิทธิ์เข้าถึงตลาดที่ถูกควบคุมของอินเดียได้ง่ายโดยการปฏิบัติตามมาตรฐาน
          Scheme X
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทปั๊มภายใต้การลงทะเบียน BIS Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X ครอบคลุมปั๊มประเภทต่างๆ รวมถึง:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ปั๊มแรงเหวี่ยง</li>
          <li>ปั๊มจุ่ม</li>
          <li>ปั๊มบูสเตอร์</li>
          <li>ปั๊มหลายขั้น</li>
          <li>ปั๊มการแทนที่เชิงบวก</li>
          <li>ปั๊มเทอร์ไบน์แนวตั้ง</li>
          <li>ปั๊มกระบวนการทางเคมี</li>
          <li>ปั๊มไดอะแฟรม</li>
          <li>ปั๊มโคลน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละประเภทต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS) เช่น IS
          16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร - หลักการทั่วไป
          สำหรับการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          สำหรับลิฟต์ของเหลว การรับรองครอบคลุม:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>อัตราการไหลและความสูงของการปล่อย</li>
          <li>ความเข้ากันได้ของวัสดุ</li>
          <li>ประสิทธิภาพการใช้พลังงาน</li>
          <li>ความปลอดภัยในการทำงาน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          วิธีรับ BIS Scheme X สำหรับปั๊ม?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ระบุมาตรฐานที่ใช้บังคับ: การอ้างอิงต้องระบุรหัส IS ที่เกี่ยวข้อง (เช่น
          IS 9079 สำหรับปั๊มจุ่ม)
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบผลิตภัณฑ์:
          การทดสอบประสิทธิภาพและความปลอดภัยเป็นข้อบังคับในห้องปฏิบัติการ
          ที่ได้รับการยอมรับจาก BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การตรวจสอบโรงงาน: เจ้าหน้าที่ BIS ตรวจสอบสถานที่ผลิตเพื่อ
          ตรวจสอบการดำเนินการตามขั้นตอนการควบคุมคุณภาพ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เอกสารและการสมัคร: ข้อกำหนดทางเทคนิค รายงานการทดสอบ และคู่มือ
          คุณภาพต้องมาพร้อมกับแบบฟอร์มใบสมัคร BIS
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          การออกใบรับรอง BIS สำหรับปั๊ม: ผู้ผลิต หลังจากได้รับการอนุมัติ
          จะได้รับใบอนุญาตเพื่อใช้เครื่องหมาย BIS ภายใต้ Scheme X
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          การตรวจสอบอย่างต่อเนื่อง: BIS ดำเนินการตรวจสอบเป็นประจำและการตรวจสอบ
          ผลิตภัณฑ์แบบสุ่มเพื่อให้แน่ใจในการปฏิบัติตามอย่างต่อเนื่อง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ไม่สามารถรับการรับรอง BIS ได้ภายในวันที่ 1 กันยายน 2026
          จะต้องเผชิญกับ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามขาย/นำเข้าปั๊มที่ไม่ได้รับการรับรอง</li>
          <li>การยึดสินค้าและค่าปรับ</li>
          <li>การถูกตัดสิทธิ์จากคำสั่งซื้อของรัฐบาลและ PSU</li>
          <li>ความเสียหายระยะยาวต่อชื่อเสียงในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">สรุป:</span> การรับรอง
          BIS Scheme X สำหรับปั๊มและลิฟต์ของเหลวด้วย OTR 2024 จะถูกนำมาใช้;
          เป็นก้าวสำคัญในการมาตรฐานอุตสาหกรรม อินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผู้ที่มีกิจกรรมการผลิต การนำเข้า หรือการส่งออก การลงทะเบียน BIS
          สำหรับปั๊มไม่ใช่แค่กระบวนการปฏิบัติตามกฎหมายที่ ต้องทำให้เสร็จ
          แต่ยังเป็นการตัดสินใจเชิงกลยุทธ์เพื่อให้แน่ใจ
          ว่าความปลอดภัยเหนือความเสี่ยงที่อาจเกิดขึ้น สร้างความเชื่อมั่น
          ของลูกค้า และเข้าสู่ตลาดอินเดียที่ขยายตัว
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS ปั๊มและลิฟต์ของเหลวเป็นการลงทุนระยะ
          ยาวเพื่อสร้างความน่าเชื่อถือและตลาดสำหรับผลิตภัณฑ์ของคุณ
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
                ที่ปรึกษาการรับรองที่ดีที่สุดในอินเดีย
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
