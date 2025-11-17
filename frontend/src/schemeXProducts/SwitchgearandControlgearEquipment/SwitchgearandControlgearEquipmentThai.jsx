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
  
  const SwitchgearandControlgearEquipmentThai = () => {
    return (
      <div className="relative w-full">
        <SwitchgearandControlgearEquipmentMetaTags />
        <SwitchgearandControlgearEquipmentBreadcrumb />
        <SwitchgearandControlgearEquipmentMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  };
  
  export default SwitchgearandControlgearEquipmentThai;
  
  const SwitchgearandControlgearEquipmentMetaTags = () => {
    const title =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000 โวลต์";
    const description =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000V และชุดประกอบ ชุดย่อย และส่วนประกอบของอุปกรณ์เหล่านี้ เป็นข้อบังคับเพื่อให้แน่ใจในคุณภาพและความปลอดภัยในอินเดีย";
    const keywords =
      "การรับรอง BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, การรับรอง Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์, OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000 โวลต์ในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000V ในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                      สูงสุด 1000 โวลต์
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
  
  const SwitchgearandControlgearEquipmentMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <SwitchgearandControlgearEquipmentMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const SwitchgearandControlgearEquipmentMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000
            โวลต์
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
              alt="การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000 โวลต์"
              title="ใบอนุญาต BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ในยุคของระบบอัตโนมัติและการใช้ไฟฟ้า
            สวิตช์เครื่องมือและสวิตช์ควบคุมเป็นส่วนประกอบสำคัญของระบบไฟฟ้าที่ปลอดภัยและมีประสิทธิภาพ
            จากสายไฟในบ้านไปจนถึงระบบอุตสาหกรรมที่ซับซ้อน
            อุปกรณ์เหล่านี้จัดการการป้องกัน การควบคุม และการแยกการไหลของพลังงาน
            เนื่องจากตำแหน่งสำคัญที่อุปกรณ์เหล่านี้มี สำนักงานมาตรฐานอินเดีย (BIS)
            ได้กำหนดการรับรองบังคับสำหรับอุปกรณ์เหล่านี้ภายใต้ Scheme X
            เพื่อให้แน่ใจว่าอุปกรณ์เหล่านี้ตรงตามมาตรฐานความปลอดภัยและประสิทธิภาพที่กำหนดในอินเดีย
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักภายใต้ Omnibus Technical Regulation, 2024
            ได้บังคับใช้การรับรอง BIS บังคับสำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ทั้งหมด
            (≤ 1000V) ที่ขาย นำเข้า และผลิตในอินเดียเริ่มตั้งแต่วันที่ 1 กันยายน 2026
            เพื่อจัดการกับอุปกรณ์ไฟฟ้าที่ไม่ปฏิบัติตามและไม่ปลอดภัย
            และเพื่อยกระดับมาตรฐานผลิตภัณฑ์ที่นำเสนอในตลาด BIS
            ภายใต้การรับรอง Scheme X ได้กำหนดการรับรองบังคับสำหรับอุปกรณ์เหล่านี้ที่ทำงานที่หรือต่ำกว่า
            1000 โวลต์
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้อธิบายขั้นตอนการรับรองพร้อมข้อดี ขอบเขต วัตถุประสงค์
            หลักฐานสนับสนุน และเอกสารสำคัญ ซึ่งมีความสำคัญต่อการรับรอง Scheme X
            สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ทุกประเภทที่ทำงาน (หรือ)
            ชุดประกอบ/ชุดย่อย/ส่วนประกอบที่ทำงานที่แรงดันไฟฟ้าไม่เกิน 1000 โวลต์
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            สวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000 โวลต์มีความสำคัญอย่างยิ่งใน:
          </h3>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>การติดตั้งจำหน่ายไฟฟ้าในบ้านและเชิงพาณิชย์</li>
            <li>ระบบจัดการพลังงานสำหรับอุตสาหกรรม</li>
            <li>สิ่งอำนวยความสะดวกพลังงานหมุนเวียน (โรงงานพลังงานแสงอาทิตย์/ลม)</li>
            <li>โครงการโครงสร้างพื้นฐานสาธารณะ</li>
            <li>
              แอปพลิเคชันความปลอดภัยที่สำคัญซึ่งต้องมีการป้องกันวงจร
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หากไม่มีการรับรองที่เหมาะสม ความเสี่ยงรวมถึง:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>ความเสี่ยงจากไฟฟ้าช็อตหรือไฟไหม้</li>
            <li>ความเสียหายของอุปกรณ์และเวลาหยุดทำงานที่เสียค่าใช้จ่ายสูง</li>
            <li>การละเมิดมาตรฐานความปลอดภัยของอินเดีย</li>
            <li>
              การห้ามจากงานประมูลและโครงการที่ต้องใช้อุปกรณ์ที่ได้รับใบรับรอง
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
            รับประกันว่าผลิตภัณฑ์เหล่านี้ตรงตามมาตรฐานประสิทธิภาพ ความปลอดภัย
            และความทนทาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ใบรับรอง BIS Scheme X สำหรับสวิตช์เกียร์และคอนโทรลเกียร์คืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
            เป็นส่วนหนึ่งของกฎระเบียบการประเมินความสอดคล้อง BIS ปี 2018
            ซึ่งกำหนดการทดสอบผลิตภัณฑ์บังคับ การตรวจสอบโรงงาน
            และการปฏิบัติตามมาตรฐานอินเดียที่ใช้บังคับ
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            การรับรอง Scheme X สำหรับสวิตช์เกียร์และคอนโทรลเกียร์: คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>ใช้ได้กับผู้ผลิตทั้งในอินเดียและต่างประเทศทั้งหมด</li>
            <li>
              ครอบคลุมอุปกรณ์หลากหลาย: เซอร์กิตเบรกเกอร์ สวิตช์ตัดการเชื่อมต่อ
              สวิตช์ตัดการเชื่อมต่อ หน่วยฟิวส์รวม และอุปกรณ์ควบคุมสูงสุด 1000V
            </li>
            <li>
              ต้องมีการทดสอบในห้องปฏิบัติการในสถานที่ที่ได้รับการรับรองจาก BIS
            </li>
            <li>รวมถึงการตรวจสอบระบบการผลิตและคุณภาพ</li>
            <li>
              ให้สิทธิ์ในการใช้เครื่องหมายมาตรฐานบนผลิตภัณฑ์หลังจากได้รับการรับรอง
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ประกาศโดยกระทรวงอุตสาหกรรมหนักในปี
            2024 ซึ่งต้องมีการรับรอง Scheme X
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
            อุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ที่ถูกต้องภายใต้ Scheme X ภายในวันที่ 1
            กันยายน 2026 "สิ่งนี้จะหยุดอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ที่ไม่มีใบรับรองจากการขาย
            การนำเข้า หรือการผลิตในอินเดีย" เจ้าหน้าที่รัฐบาลกล่าว
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับสวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยทางไฟฟ้า: ป้องกันจากไฟฟ้าลัดวงจร ไฟฟ้าเกินโหลด
              และอันตรายจากไฟไหม้ที่อาจเกิดขึ้น
            </li>
            <li>
              การปฏิบัติตามกฎระเบียบ: บังคับโดย OTR สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์
            </li>
            <li>
              การยอมรับในตลาด: ผลิตภัณฑ์ที่ลงทะเบียนสามารถยอมรับได้สำหรับโครงการของรัฐบาลและเอกชนทั้งหมด
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องหมายมาตรฐาน BIS
              บนสวิตช์เกียร์และคอนโทรลเกียร์ให้ความมั่นใจในคุณภาพและความปลอดภัยแก่ลูกค้า
            </li>
            <li>
              ข้อได้เปรียบในการแข่งขัน: เพิ่มชื่อเสียงของแบรนด์และเปิดประตูสู่ธุรกิจใหม่
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับสวิตช์เกียร์และคอนโทรลเกียร์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐานอินเดียที่เกี่ยวข้อง: ระบุรหัส IS
              ที่เกี่ยวข้องกับสวิตช์เกียร์และคอนโทรลเกียร์สูงสุด 1000 โวลต์
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบความปลอดภัย ประสิทธิภาพ
              และความทนทานในห้องปฏิบัติการที่ได้รับอนุมัติจาก BIS
            </li>
            <li>
              การตรวจสอบโรงงาน: ผู้ตรวจสอบ BIS ตรวจสอบโรงงานและระบบควบคุมคุณภาพ
            </li>
            <li>
              การยื่นเอกสาร: ข้อมูลจำเพาะรายละเอียดทั้งหมด รายงานการทดสอบ
              และไฟล์สนับสนุนการปฏิบัติตาม
            </li>
            <li>
              การออกใบอนุญาต BIS: หากได้รับการยอมรับ BIS
              จะออกใบอนุญาตสำหรับการใช้เครื่องหมายมาตรฐาน
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: การตรวจสอบมาตรฐานและการทดสอบผลิตภัณฑ์ในช่วงเวลาปกติ
              รับประกันว่าการรับรองยังคงใช้ได้
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การไม่ปฏิบัติตามการรับรอง BIS สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ภายใต้โครงการ
            OTR มีผลกระทบดังต่อไปนี้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              ห้ามการผลิต การนำเข้า หรือการขายผลิตภัณฑ์ใดๆ ที่ไม่มีใบรับรอง
            </li>
            <li>อุปกรณ์ที่ไม่ปฏิบัติตามจะถูกยึด และปรับ</li>
            <li>ไม่สามารถเข้าร่วมงานประมูลของรัฐบาล</li>
            <li>ทำลายความสัมพันธ์ทางธุรกิจและความเชื่อมั่นในตลาด</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การดำเนินการรับรอง BIS Scheme X สำหรับอุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ใน OTR
            2024 เป็นขั้นตอนในการรับประกันการจัดการพลังงานที่ปลอดภัย เชื่อถือได้
            และมีประสิทธิภาพในอินเดีย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            สำหรับผู้ผลิตและผู้นำเข้าสำหรับผู้ที่การรับรอง Scheme X
            อุปกรณ์สวิตช์เกียร์และคอนโทรลเกียร์ไม่เพียงแต่เป็นภาระผูกพันทางกฎหมายเท่านั้น
            แต่ยังเป็นการลงทุนเชิงกลยุทธ์ รับประกันการเข้าถึงตลาด
            ความน่าเชื่อถือของแบรนด์ และความเชื่อมั่นของลูกค้าโดยรวม
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
                เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  