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
  
  const WeavingMachinesThai = () => {
    return (
      <div className="relative w-full">
        <WeavingMachinesMetaTags />
        <WeavingMachinesBreadcrumb />
        <WeavingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default WeavingMachinesThai;
  
  const WeavingMachinesMetaTags = () => {
    const title = "การรับรอง BIS Scheme X สำหรับเครื่องทอผ้าและชุดประกอบ";
    const description =
      "การรับรอง BIS Scheme X เป็นการรับรองคุณภาพบังคับสำหรับเครื่องทอผ้าทุกประเภท (loom) และ/หรือชุดประกอบ ชุดย่อย และส่วนประกอบ";
    const keywords =
      "การรับรอง BIS สำหรับเครื่องทอผ้า, การรับรอง BIS Scheme X สำหรับเครื่องทอผ้า, การรับรอง Scheme X สำหรับเครื่องทอผ้า, BIS สำหรับเครื่องทอผ้า, OTR สำหรับเครื่องทอผ้า";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับเครื่องทอผ้าในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องทอผ้าในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const WeavingMachinesBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับเครื่องทอผ้า
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
  
  const WeavingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <WeavingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const WeavingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องทอผ้า
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
              title="การรับรอง BIS Scheme X สำหรับเครื่องทอผ้า (Loom)"
              alt="ใบอนุญาต BIS Scheme X สำหรับเครื่องทอผ้า (loom)"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            อุตสาหกรรมสิ่งทอและเสื้อผ้าของอินเดียเป็นหนึ่งในผู้สนับสนุนที่ใหญ่ที่สุดของการผลิต
            การส่งออก และการจ้างงานในประเทศ
            หัวใจของอุตสาหกรรมนี้คือเครื่องทอผ้าซึ่งจำเป็นสำหรับการทำผ้าสำหรับเสื้อผ้า
            เฟอร์นิเจอร์ในบ้าน และการใช้งานในอุตสาหกรรม
            ด้วยความต้องการในประเทศที่เพิ่มขึ้นอย่างต่อเนื่องและความสำคัญของการส่งออกของประเทศ
            มีความจำเป็นในการรับประกันมาตรฐานคุณภาพและความปลอดภัยของเครื่องทอผ้าในประเทศ
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            เพื่อให้แน่ใจในเรื่องนี้ สำนักงานมาตรฐานอินเดีย (BIS)
            หน่วยงานมาตรฐานแห่งชาติของอินเดียได้ถูกจัดตั้งขึ้นและ BIS
            เป็นผู้กำหนดและดำเนินการโครงการรับรองผลิตภัณฑ์ในอินเดียซึ่งผลิตภัณฑ์ได้รับการรับรอง
            มาตรฐานนี้รับประกันว่าเครื่องจักรที่เข้าสู่ตลาดอินเดียตรงตามมาตรฐานอินเดียสำหรับประสิทธิภาพ
            ความทนทาน และความปลอดภัย
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            ในบทความนี้ เราจะอธิบายความสำคัญของใบรับรอง BIS Scheme X
            สำหรับเครื่องทอผ้า กระบวนการปฏิบัติตามภายใต้ OTR สำหรับเครื่องทอผ้า
            และวิธีรับการรับรอง BIS ในอินเดีย การลงทะเบียน BIS สำหรับเครื่องทอผ้า
            และการติดป้ายเครื่องหมาย ISI สำหรับเครื่องทอผ้า
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ทำไม BIS สำหรับเครื่องทอผ้าจึงสำคัญ?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องทอผ้าใช้ใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>โรงงานสิ่งทอและโรงงานตัดเย็บ</li>
            <li>หน่วยผลิตเฟอร์นิเจอร์ในบ้าน</li>
            <li>การผลิตผ้าอุตสาหกรรม</li>
            <li>โรงงานสิ่งทอที่มุ่งเน้นการส่งออก</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หากไม่มี BIS สำหรับเครื่องทอผ้า เครื่องจักรที่ไม่มีแบรนด์อาจส่งผลให้:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ผ้าคุณภาพต่ำและมีข้อบกพร่อง</li>
            <li>
              อัตราความเสียหาย ปัญหาขนาดเครื่องจักร และเวลาหยุดทำงาน
            </li>
            <li>ต้นทุนการดำเนินงานที่เพิ่มขึ้น ของเสีย และการจัดการของเสีย</li>
            <li>การละเมิดสัญญาของรัฐบาลและการส่งออก</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            เครื่องหมาย BIS บนเครื่องทอผ้าให้ความมั่นใจแก่ผู้บริโภคและผู้ตรวจสอบว่าผลิตภัณฑ์ตรงตามมาตรฐานอินเดีย
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องทอผ้าคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องทอผ้าเป็นส่วนหนึ่งของกฎระเบียบการประเมินความสอดคล้อง
            BIS ปี 2018 ซึ่งมีวัตถุประสงค์เพื่อควบคุมคุณภาพในเครื่องจักรที่สำคัญ
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            คุณสมบัติบางอย่างของการรับรอง Scheme X สำหรับเครื่องทอผ้า:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              บังคับสำหรับผู้ผลิตทั้งในอินเดียและต่างประเทศที่จัดหาสินค้าให้อินเดีย
            </li>
            <li>
              ครอบคลุมเครื่องทอผ้าหลากหลายประเภทที่เกี่ยวข้องกับมาตรฐานอินเดียที่ใช้บังคับ
            </li>
            <li>
              ต้องมีการทดสอบเครื่องจักร การตรวจสอบโรงงาน และการตรวจสอบอย่างต่อเนื่องเป็นระยะ
            </li>
            <li>อนุญาตให้ใช้เครื่องหมาย BIS อย่างเป็นทางการสำหรับเครื่องทอผ้า</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับเครื่องทอผ้า
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง Scheme X จะเป็นข้อบังคับภายใต้ Omnibus Technical Regulation (OTR) 2024
            สำหรับเครื่องทอผ้าซึ่งเผยแพร่โดยกระทรวงอุตสาหกรรมหนัก
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: 1 กันยายน 2026 การยื่นคำขอสำหรับการให้ใบอนุญาต BIS
            สำหรับเครื่องทอผ้าเป็นข้อบังคับสำหรับผู้ผลิตและผู้นำเข้าทั้งหมด
            หลังจากกำหนดเส้นตาย เครื่องทอผ้าที่ไม่ได้ลงทะเบียนไม่สามารถขาย
            นำเข้า หรือส่งเพื่อการใช้งานเชิงพาณิชย์ในอินเดียได้
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับเครื่องทอผ้า
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              การรับประกันคุณภาพผลิตภัณฑ์: เครื่องจักรที่ได้รับใบรับรองรับประกันการผลิตที่ไม่ขาดตอนและประสิทธิภาพผ้าที่เหมาะสมที่สุด
            </li>
            <li>
              การเข้าถึงตลาดและงานประมูล: ใบอนุญาต BIS สำหรับเครื่องทอผ้าโดยทั่วไปเป็นข้อบังคับในงานประมูลของรัฐบาลและคำสั่งซื้ออุปทานขนาดใหญ่
            </li>
            <li>
              ความเชื่อมั่นของผู้ซื้อ: เครื่องหมาย BIS สำหรับเครื่องทอผ้ารับประกันความเชื่อมั่นในตลาดในประเทศและต่างประเทศ
            </li>
            <li>
              การปฏิบัติตามกฎหมายและกฎระเบียบ: รับประกันการปฏิบัติตามกฎระเบียบของอินเดียภายใต้ OTR
              สำหรับเครื่องทอผ้า
            </li>
            <li>
              ข้อได้เปรียบในการแข่งขัน: เครื่องจักรที่ได้รับใบรับรองพบได้ยากในอุตสาหกรรมอุปกรณ์สิ่งทอที่มีการแข่งขันสูง
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Weaving Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทของเครื่องทอผ้าภายใต้การรับรอง Scheme X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องทอผ้าที่รับการรับรอง Scheme X:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Loom พลังงาน</li>
            <li>Loom rapier</li>
            <li>Loom jet อากาศ</li>
            <li>Loom jet น้ำ</li>
            <li>Loom shuttle</li>
            <li>Loom อัตโนมัติ</li>
            <li>เครื่องทอผ้าพิเศษสำหรับอุตสาหกรรม</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ทั้งหมดต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับ (รหัส IS) เช่น IS 17361(ส่วนที่ 6): 2020 / ISO
            11111: (ส่วนที่ 6): 2005 (ข้อกำหนดความปลอดภัยของเครื่องจักรสิ่งทอ ส่วนที่ 6
            เครื่องจักรผลิตผ้า) ประเภททั้งหมดต้องปฏิบัติตามมาตรฐานอินเดีย (รหัส IS)
            ที่เกี่ยวข้องตามการออกแบบ ประสิทธิภาพ ความปลอดภัย และการอนุรักษ์พลังงาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการใบอนุญาต BIS สำหรับเครื่องทอผ้า
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐานที่ใช้บังคับ: ค้นหาหมายเลข IS สำหรับประเภทเครื่องทอผ้าของคุณ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: เครื่องจักรได้รับการทดสอบในห้องปฏิบัติการที่ได้รับการรับรองจาก BIS
              สำหรับความปลอดภัยและประสิทธิภาพ
            </li>
            <li>
              การตรวจสอบโรงงาน: ผู้ตรวจสอบ BIS ดำเนินการตรวจสอบอย่างละเอียดเกี่ยวกับกระบวนการผลิตและระบบควบคุมคุณภาพ
            </li>
            <li>
              การยื่นแอปพลิเคชัน: ส่งเอกสารเช่นรายละเอียดทางเทคนิค รายงานการทดสอบ และคู่มือคุณภาพ
            </li>
            <li>
              การออกใบอนุญาต BIS สำหรับเครื่องทอผ้า: ด้วยการอนุมัติ
              ผู้ผลิตจะสามารถติดเครื่องหมาย BIS บนผลิตภัณฑ์ได้
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: ดำเนินการตรวจสอบและการทดสอบเป็นประจำเพื่อให้แน่ใจว่าเรายังคงเป็นไปตามมาตรฐานของเรา
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การไม่ปฏิบัติตามการรับรอง BIS สำหรับเครื่องทอผ้าใน OTR จะส่งผลให้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ห้ามเครื่องจักรที่ไม่มีใบรับรองจากการขายหรือนำเข้า</li>
            <li>บทลงโทษทางการเงินที่รุนแรงและการยึดผลิตภัณฑ์</li>
            <li>การถูกตัดสิทธิ์ในงาน/งานประมูลของรัฐบาล</li>
            <li>ความเสียหายระยะยาวต่อแบรนด์และชื่อเสียงในตลาด</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การเปิดตัวการรับรอง BIS Scheme X สำหรับเครื่องทอผ้าผ่าน OTR
            สำหรับเครื่องทอผ้า (2024) เป็นจุดสำคัญในการมีอุตสาหกรรมสิ่งทอในอินเดียที่ใช้เครื่องจักรที่ปลอดภัย
            มีคุณภาพ และเชื่อถือได้
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            สำหรับผู้ผลิต/ผู้นำเข้า การได้รับใบอนุญาต BIS สำหรับเครื่องทอผ้าและการติดป้ายผลิตภัณฑ์ด้วยสัญลักษณ์
            BIS ไม่เพียงแต่เป็นการปฏิบัติตามข้อกำหนดบังคับเท่านั้น
            แต่ยังเพิ่มมูลค่าให้กับผลิตภัณฑ์สำหรับการตลาดอีกด้วย
            สิ่งนี้รวมความน่าเชื่อถือของตลาดและรับประกันการปฏิบัติตาม
            และในระยะกลางยังส่งเสริมความสามารถในการแข่งขันในตลาดสิ่งทอในประเทศและต่างประเทศ
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
  