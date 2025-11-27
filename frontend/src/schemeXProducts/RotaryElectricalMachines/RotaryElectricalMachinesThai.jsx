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
  
  const RotaryElectricalMachinesThai = () => {
    return (
      <div className="relative w-full">
        <RotaryElectricalMachinesMetaTags />
        <RotaryElectricalMachinesBreadcrumb />
        <RotaryElectricalMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default RotaryElectricalMachinesThai;
  
  const RotaryElectricalMachinesMetaTags = () => {
    const title = "การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน";
    const description =
      "การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน เช่น เครื่องกำเนิดไฟฟ้า ฯลฯ และ/หรือชุดประกอบ ชุดย่อย และส่วนประกอบของเครื่องจักรเหล่านี้ เป็นขั้นตอนการกำกับดูแลที่สำคัญต่อคุณภาพและความปลอดภัยของอุปกรณ์อุตสาหกรรมที่สำคัญ";
    const keywords =
      "การรับรอง BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน, การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน, การรับรอง Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน, BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน, OTR สำหรับเครื่องจักรไฟฟ้าแบบหมุน";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const RotaryElectricalMachinesBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
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
  
  const RotaryElectricalMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <RotaryElectricalMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const RotaryElectricalMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
              alt="การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน"
              title="ใบอนุญาต BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องกำเนิดไฟฟ้า มอเตอร์ และเครื่องกำเนิดไฟฟ้ากระแสสลับในฐานะเครื่องจักรไฟฟ้าแบบหมุน
            เป็นเครื่องจักรประเภทสำคัญที่ใช้ในกิจกรรมสำคัญต่างๆ เช่น การขับเคลื่อนอุตสาหกรรม
            การผลิตพลังงาน และแม้กระทั่งการตอบสนองความต้องการโครงสร้างพื้นฐานเทคโนโลยีสารสนเทศ
            และความต้องการอื่นๆ ในระดับโลก เครื่องจักรเหล่านี้ทำงานร่วมกันในภาคส่วนต่างๆ เช่น
            พลังงานและการขนส่ง การผลิต และอาคารพาณิชย์ เนื่องจากเครื่องจักรเหล่านี้แปลงพลังงานกล
            เป็นไฟฟ้าหรือในทางกลับกัน เครื่องจักรประเภทนี้มีความสำคัญมาก ดังนั้นคุณภาพ ความน่าเชื่อถือ
            และความปลอดภัยจึงมีความสำคัญ ในอินเดีย BIS ได้แก้ไขปัญหานี้ด้วยการรับรอง Scheme X
            สำหรับเครื่องจักรไฟฟ้าแบบหมุนและชุดประกอบรวมถึงส่วนประกอบพร้อมกับอุปกรณ์ไฟฟ้าอื่นๆ
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ในคำสั่ง Omnibus Order 2024 กระทรวงอุตสาหกรรมหนักได้ระบุว่าผู้ผลิตทั้งหมด
            ทั้งต่างประเทศและในประเทศที่ผลิตเครื่องจักรแบบหมุนและอุปกรณ์ที่เกี่ยวข้องอื่นๆ ทั้งหมด
            ต้องปฏิบัติตามการรับรอง Scheme X ภายในวันที่ 1 กันยายน 2026
            ข้อบังคับนี้ระบุเครื่องจักรไฟฟ้าแบบหมุนทุกประเภท รวมถึงเครื่องกำเนิดไฟฟ้า
            เครื่องกำเนิดไฟฟ้ากระแสสลับ มอเตอร์แบบซิงโครนัสและอะซิงโครนัส
            รวมถึงชุดประกอบทั้งหมด ชุดย่อย และส่วนประกอบของเครื่องจักร
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้กล่าวถึงความสำคัญ ขอบเขต ขั้นตอนการรับรอง ประโยชน์
            และเอกสารที่เกี่ยวข้องอื่นๆ ของการรับรอง Scheme X
            สำหรับเครื่องจักรไฟฟ้าแบบหมุนทุกประเภท
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องจักรไฟฟ้าแบบหมุนถูกใช้อย่างแพร่หลายใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>การผลิตและการจำหน่ายไฟฟ้า</li>
            <li>ระบบอัตโนมัติในอุตสาหกรรมและอุปกรณ์</li>
            <li>การขนส่ง (รถไฟ เรือ รถยนต์ไฟฟ้า)</li>
            <li>ภาคส่วนน้ำมัน ก๊าซ และพลังงาน</li>
            <li>อุปกรณ์ไฟฟ้าสำหรับการใช้งานของผู้บริโภคและเชิงพาณิชย์</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ความเสี่ยงบางประการที่อาจเกิดขึ้นโดยไม่มีการรับรอง ได้แก่:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>อันตรายจากไฟฟ้า ไฟฟ้าลัดวงจร และอันตรายจากไฟไหม้</li>
            <li>ความเสียหายทางกลและเวลาหยุดทำงานที่เสียค่าใช้จ่ายสูง</li>
            <li>การสิ้นเปลืองพลังงาน</li>
            <li>การห้ามจากงานประมูลของรัฐบาลและโครงการ</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนรับประกันว่าผลิตภัณฑ์เหล่านี้
            ตรงตามมาตรฐานคุณภาพ ประสิทธิภาพ และความปลอดภัยที่เข้มงวด
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ใบรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนเป็นโครงการกำกับดูแลของรัฐบาล
            ภายใต้กฎระเบียบการประเมินความสอดคล้อง BIS ปี 2018
            ซึ่งรับรองสินค้าตามมาตรฐานอินเดียก่อนเข้าสู่ตลาดอินเดีย
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            การรับรอง Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุน: คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>ใช้ได้กับผู้ผลิตทั้งในอินเดียและต่างประเทศ</li>
            <li>
              ใช้ได้กับมอเตอร์ เครื่องกำเนิดไฟฟ้า เครื่องกำเนิดไฟฟ้ากระแสสลับ
              และเครื่องจักรไฟฟ้าแบบหมุนอื่นๆ
            </li>
            <li>
              จำนวนการทดสอบผลิตภัณฑ์ การตรวจสอบ และการตรวจสอบความสอดคล้องที่เพียงพอ
              เป็นสิ่งจำเป็น
            </li>
            <li>การตรวจสอบโรงงานเพื่อให้แน่ใจว่ามีการควบคุมคุณภาพ</li>
            <li>
              อนุญาตให้ผู้ผลิตยื่นขอการลงทะเบียน BIS
              ตามการรับรองสำหรับเครื่องจักรไฟฟ้าแบบหมุนที่กล่าวถึงข้างต้น
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับเครื่องจักรแบบหมุน
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR สำหรับเครื่องจักรไฟฟ้าแบบหมุนประกาศโดยกระทรวงอุตสาหกรรมหนักในปี 2024
            ซึ่งต้องมีการรับรอง Scheme X
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
            เครื่องจักรไฟฟ้าแบบหมุนที่ถูกต้องภายใต้ Scheme X ภายในวันที่ 1 กันยายน 2026
            "สิ่งนี้จะหยุดเครื่องจักรไฟฟ้าแบบหมุนที่ไม่มีใบรับรองจากการขาย การนำเข้า
            หรือการเข้าร่วมในงานประมูลทั่วประเทศ" เจ้าหน้าที่รัฐบาลกล่าว
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยและการปฏิบัติตาม: หลีกเลี่ยงอันตรายจากไฟฟ้าและกลไกด้วยมาตรฐานที่เข้มงวด
            </li>
            <li>
              คุณภาพและความน่าเชื่อถือ: เครื่องจักรไฟฟ้าแบบหมุนที่ได้รับใบรับรองทำงานด้วยความแม่นยำ
              และความเที่ยงตรงสูง
            </li>
            <li>
              การเข้าถึงตลาด: ใบอนุญาตเครื่องจักรไฟฟ้าแบบหมุน BIS
              มักจำเป็นสำหรับการจัดซื้อโดยหน่วยงานสาธารณะ
            </li>
            <li>
              ความเชื่อมั่นของผู้บริโภค: เครื่องหมาย BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
              ให้ข้อมูลแก่ลูกค้าเกี่ยวกับคุณภาพผลิตภัณฑ์และความทนทาน
            </li>
            <li>
              ข้อได้เปรียบในการแข่งขัน: แบรนด์/ผู้ผลิตที่ได้รับใบรับรอง BIS
              ได้รับความนิยมในตลาดที่ควบคุมและสำหรับงานประมูลของรัฐบาล
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทเครื่องจักรไฟฟ้าแบบหมุนภายใต้โครงการรับรอง BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนครอบคลุมประเภทต่างๆ เช่น:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>มอเตอร์ AC และ DC</li>
            <li>เครื่องกำเนิดไฟฟ้าและเครื่องกำเนิดไฟฟ้ากระแสสลับ</li>
            <li>เทอร์โบเจเนอเรเตอร์และไฮโดรเจเนอเรเตอร์</li>
            <li>
              ประเภทพิเศษของเครื่องจักรแบบหมุนที่ใช้ในอุตสาหกรรมและสาธารณูปโภค
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ประเภททั้งหมดนี้ต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับ (รหัส IS)
            เช่น IS 16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร
            หลักการทั่วไปสำหรับการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
            ทุกประเภทต้องเป็นไปตามมาตรฐานอินเดีย (รหัส IS) ที่เหมาะสมสำหรับคุณภาพ
            ความปลอดภัย และประสิทธิภาพการใช้พลังงาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ระบุมาตรฐานที่เกี่ยวข้อง: อ้างอิงรหัส IS ที่เกี่ยวข้องสำหรับประเภทเครื่องจักรไฟฟ้าแบบหมุนของคุณ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบประสิทธิภาพและความปลอดภัยที่จำเป็นตามมาตรฐานอุตสาหกรรม
              ในห้องปฏิบัติการที่ได้รับการรับรองจาก BIS
            </li>
            <li>
              การตรวจสอบโรงงาน: ตรวจสอบระบบประกันคุณภาพที่สถานที่ผลิตโดยเจ้าหน้าที่ BIS
            </li>
            <li>
              แอปพลิเคชันและเอกสาร: จัดเตรียมข้อกำหนดทางเทคนิค คู่มือคุณภาพ และรายงานการทดสอบ
            </li>
            <li>
              การออกใบอนุญาต BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน: คุณสามารถติดตั้งเครื่องหมาย BIS
              หลังจากได้รับการอนุมัติ
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: BIS ตรวจสอบและดำเนินการตรวจสอบโดยไม่มีการแจ้งเตือนล่วงหน้า
              เพื่อการปฏิบัติตามมาตรฐาน
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ผู้ผลิตที่ไม่มีเครื่องจักรไฟฟ้าแบบหมุนทุกรุ่นที่ได้รับใบรับรองด้วยการรับรอง BIS
            สำหรับเครื่องจักรไฟฟ้าแบบหมุนภายในวันที่ 1 กันยายน 2026 ต้องเผชิญกับความเสี่ยง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              ห้ามขาย/นำเข้าเครื่องจักรไฟฟ้าแบบหมุนที่ไม่มีใบรับรอง
            </li>
            <li>การยึดอุปกรณ์ที่ไม่ปฏิบัติตามและบทลงโทษทางการเงิน</li>
            <li>
              สิ่งนี้จะทำให้คุณไม่มีคุณสมบัติสำหรับงานประมูลของรัฐบาลหรือ PSU
            </li>
            <li>มูลค่าของแบรนด์ได้รับผลกระทบอย่างถาวรในอินเดีย</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การดำเนินการรับรอง BIS Scheme X สำหรับเครื่องจักรไฟฟ้าแบบหมุนใน OTR 2024
            เป็นขั้นตอนในการนำความปลอดภัย ประสิทธิภาพ และคุณภาพเข้าสู่ภาคอุตสาหกรรมไฟฟ้าในอินเดีย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ผู้ผลิต ผู้นำเข้า และผู้ส่งออกใช้ประโยชน์จากกระบวนการนี้โดยการรับรอง BIS
            สำหรับเครื่องจักรไฟฟ้าแบบหมุน โดยการได้รับใบอนุญาต BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุน
            และการติดตั้งเครื่องหมาย BIS สำหรับเครื่องจักรไฟฟ้าแบบหมุนบนผลิตภัณฑ์ของพวกเขา
            แสดงให้เห็นว่าผลิตภัณฑ์ของพวกเขาตรงตามระบบกฎระเบียบของตลาดท้องถิ่นและความต้องการของลูกค้า
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
  