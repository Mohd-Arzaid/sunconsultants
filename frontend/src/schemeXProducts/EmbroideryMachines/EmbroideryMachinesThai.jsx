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
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";

const EmbroideryMachinesThai = () => {
  return (
    <div className="relative w-full">
      <EmbroideryMachinesMetaTags />
      <EmbroideryMachinesBreadcrumb />
      <EmbroideryMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default EmbroideryMachinesThai;

const EmbroideryMachinesMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับเครื่องปักลาย";
  const description =
    "การรับรอง BIS Scheme X สำหรับเครื่องปักลาย ผู้ผลิตมั่นใจว่าผลิตภัณฑ์ของตนเป็นไปตามกฎหมาย มีความเหนือกว่าในทางเทคนิค และได้รับความไว้วางใจจากลูกค้า";
  const keywords =
    "การรับรอง BIS สำหรับเครื่องปักลาย, การรับรอง BIS Scheme X สำหรับเครื่องปักลาย, การรับรอง Scheme X สำหรับเครื่องปักลาย, BIS สำหรับเครื่องปักลาย, OTR สำหรับเครื่องปักลาย";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครื่องปักลายในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องปักลายในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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

const EmbroideryMachinesBreadcrumb = () => {
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
                    การรับรอง BIS สำหรับเครื่องปักลาย
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

const EmbroideryMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเครื่องปักลาย
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="การรับรอง BIS Scheme X สำหรับเครื่องปักลาย"
            title="ใบอนุญาต BIS Scheme X สำหรับเครื่องปักลาย"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ภาคการปักลายเป็นส่วนสำคัญของอุตสาหกรรมสิ่งทอและเสื้อผ้าของอินเดียที่ผลิตผ้าที่มีมูลค่าเพิ่มสำหรับแฟชั่น
          บ้าน และการส่งออก
          เครื่องปักลายหลายหัวที่ควบคุมด้วยคอมพิวเตอร์หรือเครื่องจักรอุตสาหกรรมมีความจำเป็นอย่างยิ่งในการบรรลุคุณภาพสูงในผลิตภัณฑ์ปักลายเนื่องจากให้ประสิทธิภาพและความแม่นยำในการปักลาย
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อให้แน่ใจในความปลอดภัย ความเสถียร และประสิทธิภาพ BIS
          (สำนักงานมาตรฐานอินเดีย)
          ได้บังคับใช้การรับรองบังคับสำหรับเครื่องปักลายภายใต้โครงการรับรอง X
          ของ BIS
          สิ่งนี้รับประกันว่าเฉพาะเครื่องจักรที่ปฏิบัติตามมาตรฐานอินเดียเท่านั้นที่ได้รับอนุญาตให้เข้าสู่ตลาดอินเดีย
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบทความนี้ เราจะหารือเกี่ยวกับความสำคัญของการอนุมัติ BIS Scheme X
          สำหรับเครื่องปักลาย ระเบียบภายใต้ OTR (ข้อบังคับสิ่งทอ)
          สำหรับเครื่องปักลาย และกระบวนการในการรับใบอนุญาต BIS
          สำหรับเครื่องปักลาย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ความสำคัญของ BIS สำหรับเครื่องปักลาย
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องปักลายใช้ใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>โรงงานเสื้อผ้าและเสื้อผ้าสำเร็จรูป</li>
          <li>การผลิตสิ่งทอสำหรับบ้าน (ม่าน ผ้าปูที่นอน ปลอกหมอน)</li>
          <li>การปักลายแบบกำหนดเองและบ้านคูตูร์</li>
          <li>โรงงานสิ่งทอที่มุ่งเน้นการส่งออก</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเสี่ยงโดยไม่มี BIS สำหรับเครื่องปักลายคือ:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>คุณภาพการเย็บที่แย่และด้ายขาด</li>
          <li>เวลาหยุดทำงานของเครื่องจักรมากเกินไป</li>
          <li>ความเสี่ยงด้านความปลอดภัยในสภาพแวดล้อมทางอุตสาหกรรม</li>
          <li>ถูกแยกออกจากตลาดในประเทศและการส่งออก</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เครื่องหมาย BIS
          สำหรับเครื่องปักลายคือการรับประกันสำหรับลูกค้าว่าผลิตภัณฑ์ของคุณได้รับการทดสอบอย่างเข้มงวดและรับรองตามแนวทางที่จำเป็นทั้งหมดจาก
          BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ใบรับรอง BIS Scheme X สำหรับเครื่องปักลายคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กรอบการทำงานสำหรับการรับรอง BIS Scheme X สำหรับเครื่องปักลาย
          ขึ้นอยู่กับพารามิเตอร์ที่ระบุไว้ภายใต้ข้อบังคับการประเมินความสอดคล้องของ
          BIS พ.ศ. 2561
          (ซึ่งพัฒนาขึ้นเพื่อการปฏิบัติตามในการจัดการคุณภาพในหมู่ผู้จัดหาเครื่องจักรอุตสาหกรรม)
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การรับรอง Scheme X สำหรับเครื่องปักลาย: คุณสมบัติหลัก:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับสำหรับผู้ผลิตอินเดียและต่างประเทศ</li>
          <li>รวมถึงการทดสอบ การตรวจสอบความปลอดภัย และการตรวจสอบประสิทธิภาพ</li>
          <li>ต้องมีการเยี่ยมชมโรงงานเป็นประจำและการตรวจสอบคุณภาพ</li>
          <li>
            อนุญาตให้วางเครื่องหมาย BIS
            ภายใต้ใบอนุญาตสำหรับเครื่องปักลายสำหรับผลิตภัณฑ์ที่รับรองแล้ว
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับเครื่องปักลาย
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระทรวงอุตสาหกรรมหนักได้แนะนำข้อบังคับทางเทคนิคแบบรวม (OTR) 2024
          สำหรับเครื่องปักลายซึ่งกำหนดให้มีการรับรองสำหรับเครื่องจักรทั้งหมดที่อยู่ในหมวดหมู่เครื่องปักลาย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลา: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
          สำหรับเครื่องปักลายที่จะขายหรือนำเข้าในอินเดียภายในวันที่ 1 กันยายน
          2026 เพื่อหลีกเลี่ยงค่าปรับหรือการฟ้องร้อง หลังจากนั้น
          เครื่องปักลายที่ไม่มีใบรับรองจะไม่สามารถซื้อขายหรือใช้เพื่อวัตถุประสงค์ทางการค้าในอินเดียได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเครื่องปักลาย
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยและความน่าเชื่อถือของผลิตภัณฑ์:
            เครื่องจักรที่สามารถรับรองได้ทำงานตามมาตรฐานที่คาดหวังและความปลอดภัย
          </li>
          <li>
            การยอมรับในตลาด: ใบอนุญาต BIS
            สำหรับเครื่องปักลายเป็นข้อบังคับสำหรับการประมูลของรัฐบาลและข้อตกลงจำนวนมาก
          </li>
          <li>
            ความไว้วางใจของผู้ซื้อ: เครื่องปักลายได้รับเครื่องหมาย BIS
            ซึ่งยืนยันคุณภาพและมาตรฐาน
          </li>
          <li>
            การปฏิบัติตามกฎระเบียบ: ปฏิบัติตาม OTR
            สำหรับเครื่องปักลายและไม่ก่อให้เกิดค่าปรับ
          </li>
          <li>
            ข้อได้เปรียบในการส่งออก:
            ผู้ซื้ออินเดียได้รับความสบายใจด้วยเครื่องจักรที่รับรองแล้วและบริษัทระหว่างประเทศได้รับสิทธิ์เข้าถึงอินเดียได้ง่ายขึ้น
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทเครื่องปักลายภายใต้โครงการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X สำหรับเครื่องปักลายใช้กับ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เครื่องปักลายแบบหลายหัว</li>
          <li>การปักลายที่ควบคุมด้วยคอมพิวเตอร์และขับเคลื่อนด้วยเครื่องจักร</li>
          <li>เครื่องปักลายแบบหัวเดียว</li>
          <li>เครื่องจักรสำหรับปักลายตะเข็บโซ่</li>
          <li>เครื่องปักลาย Schiffli</li>
          <li>อุปกรณ์ปักลายสิ่งทอพิเศษ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          แต่ละหมวดหมู่สามารถปฏิบัติตามมาตรฐาน IS ที่เกี่ยวข้อง (รหัส IS) เช่น
          IS 17361 (ส่วนที่ 1): 2020 / ISO 11111 (ส่วนที่ 1): 2016
          (ข้อกำหนดความปลอดภัยของเครื่องจักรสิ่งทอ ส่วนที่ 1 ข้อกำหนดทั่วไป)
          ทั้งหมดต้องปฏิบัติตามรหัส IS ที่เกี่ยวข้องสำหรับการออกแบบ ความทนทาน
          ความปลอดภัย และเศรษฐกิจในการดำเนินงาน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเครื่องปักลาย
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            ระบุมาตรฐานที่เกี่ยวข้อง: ค้นหารหัส IS
            ที่เกี่ยวข้องสำหรับรุ่นเครื่องปักลายของคุณ
          </li>
          <li>
            การทดสอบผลิตภัณฑ์:
            เครื่องจักรได้รับการทดสอบในห้องปฏิบัติการที่รับรองโดย BIS
            สำหรับความปลอดภัยและประสิทธิภาพ
          </li>
          <li>
            การตรวจสอบโรงงาน: ผู้ตรวจสอบ BIS
            มาที่โรงงานเพื่อประเมินการควบคุมคุณภาพ
          </li>
          <li>
            เอกสารและการสมัคร: จัดหา BIS ด้วยรายงานทางเทคนิค
            คู่มือและเอกสารคุณภาพ
          </li>
          <li>
            ใบอนุญาต BIS สำหรับเครื่องปักลาย: หลังจากได้รับการอนุมัติ
            ผู้ผลิตจะมีตัวเลือกในการทำเครื่องหมายผลิตภัณฑ์ของตนด้วยเครื่องหมาย
            BIS
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง:
            การตรวจสอบเป็นประจำและการทดสอบซ้ำรับประกันการปฏิบัติตามอย่างต่อเนื่อง
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลที่ตามมาจากการไม่มีใบรับรอง BIS สำหรับเครื่องปักลายภายใต้ OTR
          สำหรับเครื่องปักลายเริ่มตั้งแต่วันที่ 1 กันยายน 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ข้อจำกัดในการขาย/นำเข้าเครื่องจักรที่ไม่มีใบรับรอง</li>
          <li>ค่าปรับ การลงโทษ และการยึดผลิตภัณฑ์ที่อาจเกิดขึ้น</li>
          <li>ไม่มีคุณสมบัติสำหรับสัญญาของรัฐบาลและการส่งออกที่สำคัญ</li>
          <li>ชื่อเสียงของแบรนด์จะเสียหายเป็นเวลานาน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การดำเนินการรับรอง BIS Scheme X สำหรับเครื่องปักลายใน OTR
          สำหรับเครื่องปักลาย (2024)
          เป็นขั้นตอนสำคัญสำหรับภาคสิ่งทอและการปักลายของอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          จากมุมมองของผู้ผลิตและผู้นำเข้าเครื่องปักลาย การได้รับทะเบียน BIS
          สำหรับเครื่องปักลายและการวางเครื่องหมาย BIS
          สำหรับเครื่องปักลายไม่เพียงแต่เป็นการปฏิบัติตามข้อกำหนดทางกฎหมายเท่านั้น
          แต่ยังมีการสนับสนุนที่ยอดเยี่ยมสำหรับคุณภาพผลิตภัณฑ์
          ความไว้วางใจของตลาดและข้อได้เปรียบในการแข่งขันสำหรับอุตสาหกรรมสิ่งทอในอินเดียที่กำลังเติบโตอย่างต่อเนื่อง
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
                alt="BIS"
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
                alt="BIS"
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
