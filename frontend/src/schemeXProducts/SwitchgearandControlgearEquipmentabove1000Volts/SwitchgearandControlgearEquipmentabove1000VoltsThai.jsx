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
  
  const SwitchgearandControlgearEquipmentabove1000VoltsThai = () => {
    return (
      <div className="relative w-full">
        <SwitchgearandControlgearEquipmentabove1000VoltsMetaTags />
        <SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb />
        <SwitchgearandControlgearEquipmentabove1000VoltsMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default SwitchgearandControlgearEquipmentabove1000VoltsThai;
  
  const SwitchgearandControlgearEquipmentabove1000VoltsMetaTags = () => {
    const title =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงกว่า 1000 โวลต์";
    const description =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงกว่า 1000V สำรวจการปฏิบัติตามข้อบังคับ การทดสอบ ขั้นตอนกระบวนการ ข้อดี และอื่นๆ";
    const keywords =
      "การรับรอง BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, การรับรอง Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงกว่า 1000 โวลต์ในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
                      สูงกว่า 1000 โวลต์
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
  
  const SwitchgearandControlgearEquipmentabove1000VoltsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงกว่า
            1000 โวลต์
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
              alt="การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงกว่า 1000 โวลต์"
              title="ใบอนุญาต BIS สำหรับอุปกรณ์สวิตช์เกียร์ที่เกิน 1000 โวลต์"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            สวิตช์เกียร์และคอนโทรลเกียร์แรงดันสูงรวมเข้ากับการจำหน่ายพลังงานและกระบวนการดำเนินงานอย่างราบรื่น
            ในความพยายามในการใช้ไฟฟ้าของอารยธรรมร่วมสมัยที่กำลังเติบโตอย่างต่อเนื่อง
            ระบบเหล่านี้ได้รับการออกแบบเพื่อให้แน่ใจในการควบคุมและการจำหน่ายไฟฟ้าที่ปลอดภัยมากกว่า
            1000 โวลต์และมีค่าอย่างยิ่งในพื้นที่สำคัญของความต้องการพลังงานสำหรับระบบจัดการความเสี่ยงและความต่อเนื่องของพลังงาน
            ด้วยความกังวลที่เพิ่มขึ้นเกี่ยวกับความปลอดภัยและการทำให้เป็นมาตรฐานของอุปกรณ์
            สำนักงานมาตรฐานอินเดีย (BIS) ได้ดำเนินการที่เป็นรูปธรรมเพื่อควบคุมอุตสาหกรรมด้วยการรับรอง
            Scheme X
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Omnibus Technical Regulation (OTR) ซึ่งเป็นส่วนหนึ่งของกฎหมายนี้
            ได้ทำให้การรับรอง Scheme X เป็นข้อบังคับสำหรับผู้ผลิตอุปกรณ์แรงดันสูงแบบแผนทั้งหมดเพื่อใช้ในภาคพลังงานและอุตสาหกรรม
            ผู้ผลิตเหล่านี้ทั้งในประเทศและต่างประเทศจะต้องปฏิบัติตามกฎระเบียบนี้เริ่มตั้งแต่วันที่
            1 กันยายน 2026
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้ครอบคลุมข้อมูลที่จำเป็นทั้งหมดที่เกี่ยวข้องกับการรับรอง Scheme X
            สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ทุกประเภทที่ทำงานที่แรงดันไฟฟ้าเกิน 1000
            โวลต์และ (หรือ) ชุดประกอบ ชุดย่อย ส่วนประกอบ ความสำคัญ ขอบเขต
            กระบวนการรับรอง ข้อดี และเอกสารที่จำเป็น
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ทำไมการรับรอง BIS สำหรับสวิตช์เกียร์และคอนโทรลเกียร์จึงสำคัญ?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            สวิตช์เกียร์และคอนโทรลเกียร์แรงดันสูงถูกใช้อย่างแพร่หลายใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>สิ่งอำนวยความสะดวกในการผลิตไฟฟ้า</li>
            <li>สถานีย่อยส่งและจำหน่าย</li>
            <li>ระบบไฟฟ้าของรถไฟใต้ดินและรถไฟ</li>
            <li>น้ำมันและก๊าซและอุตสาหกรรมหนัก</li>
            <li>สวนพลังงานหมุนเวียน (แสงอาทิตย์ ลม น้ำ)</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หากไม่มีการรับรองที่เหมาะสม ความเสี่ยงรวมถึง:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>อันตรายจากไฟไหม้และอุบัติเหตุอาร์ค</li>
            <li>ความเสียหายของอุปกรณ์ที่ทำให้เกิดการดับไฟอย่างกว้างขวาง</li>
            <li>การละเมิดมาตรฐานความปลอดภัยของอินเดีย</li>
            <li>การถูกตัดสิทธิ์จากสัญญาของรัฐบาลและเอกชนขนาดใหญ่</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง Scheme X เป็นการรับประกันว่าระบบสำคัญถูกแยกตามมาตรฐานความปลอดภัยและคุณภาพที่เข้มงวดที่สุด
            สิ่งนี้ยังใช้กับชุดประกอบ (BS8867) ที่เกี่ยวข้องกับประเภทอุปกรณ์นี้ที่ทำงานที่แรงดันไฟฟ้าสูงกว่า
            1000V ตามความจำเป็น
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับสวิตช์เกียร์และคอนโทรลเกียร์คืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ใบรับรอง BIS Scheme X กำหนดภายใต้กฎระเบียบการประเมินความสอดคล้อง BIS ปี 2018
            เพื่อให้แน่ใจว่าการทดสอบ การตรวจสอบ และการอนุญาตสวิตช์เกียร์และคอนโทรลเกียร์จำเป็นก่อนที่ผลิตภัณฑ์จะสามารถเข้าสู่ตลาดอินเดีย
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>บังคับสำหรับบริษัททั้งในอินเดียและต่างประเทศ</li>
            <li>
              ครอบคลุมสวิตช์เกียร์และคอนโทรลเกียร์แรงดันสูงทั้งหมดที่หรือสูงกว่า 1000 โวลต์
            </li>
            <li>ต้องมีการทดสอบในห้องปฏิบัติการที่ได้รับการรับรองจาก BIS</li>
            <li>รวมถึงการตรวจสอบโรงงานและระบบคุณภาพ</li>
            <li>
              ให้ใบอนุญาต BIS สำหรับการใช้เครื่องหมายมาตรฐานบนอุปกรณ์ที่กำหนด
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักแนะนำ Omnibus Technical Regulation (OTR)
            สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ในปี 2024
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบรับรอง BIS ภายในวันที่ 1
            กันยายน 2026 หลังจากวันที่นี้
            อุปกรณ์ที่ไม่ได้อนุมัติประเภทไม่สามารถผลิต ขาย หรือนำเข้าในอินเดียได้
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับสวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยทางไฟฟ้า – ป้องกันจากข้อผิดพลาด อาร์ค
              และความเสียหายของระบบ
            </li>
            <li>
              การปฏิบัติตามกฎระเบียบ – ข้อกำหนดบังคับสำหรับการเข้าสู่ตลาดภายใต้ OTR
            </li>
            <li>
              การเข้าถึงตลาด – ผลิตภัณฑ์ที่ได้รับใบรับรองมีคุณสมบัติสำหรับโครงการโครงสร้างพื้นฐานสาธารณะและเอกชน
            </li>
            <li>
              ความน่าเชื่อถือและความไว้วางใจ – เครื่องหมายมาตรฐาน BIS
              สะท้อนการปฏิบัติตามคุณภาพและความน่าเชื่อถือ
            </li>
            <li>
              ประสิทธิภาพการดำเนินงาน – รับประกันประสิทธิภาพของเครือข่ายแรงดันสูงที่แข็งแกร่งและไม่ขาดตอน
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ขั้นตอนการรับรอง BIS สำหรับสวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐาน – ค้นหามาตรฐานอินเดียที่เกี่ยวข้องกับผลิตภัณฑ์ของคุณ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์ – ดำเนินการทดสอบประสิทธิภาพและความปลอดภัยที่จำเป็นทั้งหมดในห้องปฏิบัติการที่ได้รับอนุมัติจาก
              BIS
            </li>
            <li>
              การตรวจสอบโรงงาน – ผู้ตรวจสอบ BIS ตรวจสอบกระบวนการและการควบคุมคุณภาพในโรงงาน
            </li>
            <li>
              การยื่นเอกสาร – ยื่นรายงานการทดสอบ ข้อมูลจำเพาะมาตรฐาน
              บันทึกการปฏิบัติตาม
            </li>
            <li>
              การให้ใบอนุญาต: BIS จะให้ใบอนุญาตสำหรับการใช้เครื่องหมายมาตรฐาน
            </li>
            <li>
              การตรวจสอบหลังการรับรอง: การตรวจสอบอย่างต่อเนื่องและการตรวจสอบโดยไม่มีการแจ้งเตือนล่วงหน้า
              รับประกันการปฏิบัติตาม
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            กระบวนการนี้ใช้ได้เท่ากันสำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ทุกประเภทที่ทำงานที่แรงดันไฟฟ้าเกิน
            1000 โวลต์และ (หรือ) ชุดประกอบ ชุดย่อย ส่วนประกอบ
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ความล้มเหลวในการรับรองภายใต้โมเดล OTR อาจส่งผลให้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              ห้ามขาย นำเข้า หรือผลิตอุปกรณ์ที่ไม่มีใบรับรอง
            </li>
            <li>การยึดสินค้าและบทลงโทษทางการเงินที่รุนแรง</li>
            <li>การห้ามสำหรับงานประมูลและสัญญาของรัฐบาล</li>
            <li>
              ความเสียหายต่อชื่อเสียงและการเงิน: ความเสียหายต่อชื่อเสียงและการเงินอย่างมีนัยสำคัญ
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง BIS Scheme X ซึ่งบังคับภายใต้ OTR 2024
            รับประกันว่าสาธารณูปโภคพลังงานแรงดันสูงของอินเดียถูกสร้างขึ้นบนอุปกรณ์ที่ปลอดภัย
            เชื่อถือได้ และปฏิบัติตาม สำหรับผู้ผลิตและผู้นำเข้า
            การบรรลุการรับรองไม่เพียงแต่เกี่ยวกับการปฏิบัติตามกฎระเบียบเท่านั้น
            แต่ยังเกี่ยวกับการได้รับความไว้วางใจจากลูกค้า เปิดโอกาสทางการตลาด
            และสนับสนุนการเติบโตของพลังงานและโครงสร้างพื้นฐานของอินเดีย
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
  