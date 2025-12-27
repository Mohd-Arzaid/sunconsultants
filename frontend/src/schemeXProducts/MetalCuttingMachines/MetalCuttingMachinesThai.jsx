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
  
  const MetalCuttingMachinesThai = () => {
    return (
      <div className="relative w-full">
        <MetalCuttingMachinesMetaTags />
        <MetalCuttingMachinesBreadcrumb />
        <MetalCuttingMachinesMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default MetalCuttingMachinesThai;
  
  const MetalCuttingMachinesMetaTags = () => {
    const title =
      "การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะและชิ้นส่วนประกอบ";
    const description =
      "การรับรอง BIS ตอนนี้เป็นข้อบังคับสำหรับเครื่องตัดโลหะทุกประเภทและ/หรือชิ้นส่วนประกอบ ชิ้นส่วนย่อย และส่วนประกอบที่อยู่ในรหัส HS 8456 ถึง 8461";
    const keywords =
      "การรับรอง BIS สำหรับเครื่องตัดโลหะ, การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะ, การรับรอง Scheme X สำหรับเครื่องตัดโลหะ, BIS สำหรับเครื่องตัดโลหะ, OTR สำหรับเครื่องตัดโลหะ";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
          hrefLang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
        />
        <link
          rel="alternate"
          hrefLang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-jin-shu-qie-xiao-ji-chuang-ren-zheng"
        />
        <link
          rel="alternate"
          hrefLang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-metaalsnijmachines"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin"
        />
      </Helmet>
    );
  };
  
  const MetalCuttingMachinesBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับเครื่องตัดโลหะ
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
  
  const MetalCuttingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <MetalCuttingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const MetalCuttingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับเครื่องตัดโลหะ
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
              alt="การรับรอง BIS Scheme X สำหรับเครื่องมือเครื่องตัดโลหะ"
              title="ใบอนุญาต BIS Scheme X สำหรับเครื่องมือเครื่องตัดโลหะ"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            การตัดโลหะเป็นเทคโนโลยีการผลิตหลักที่รองรับอุตสาหกรรมเครื่องยนต์
            ยานยนต์ อวกาศและการผลิตของอินเดีย เครื่องจักรเหล่านี้ตั้งแต่เครื่องกลึง CNC
            และเครื่องกัดไปจนถึงเครื่องตัดเลเซอร์
            และจะช่วยให้การผลิตยังคงสูงและต้นทุนยังคงต่ำในอุตสาหกรรมทั่วโลก
            เมื่อความต้องการเครื่องจักรคุณภาพสูงเพิ่มขึ้นในอินเดีย
            รัฐบาลได้ทำให้การรับรอง BIS สำหรับเครื่องตัดโลหะเป็นข้อบังคับเพื่อให้แน่ใจในคุณภาพและความปลอดภัย
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ตามการรับรอง BIS (สำนักงานมาตรฐานอินเดีย) Scheme X
            สำหรับเครื่องตัดโลหะ
            ทั้งผู้ผลิตต่างประเทศและอินเดียต้องปฏิบัติตามมาตรฐานอินเดียก่อนที่จะสามารถขายในตลาดอินเดียได้
            นี่เป็นวิธีให้เครื่องจักรสามารถใช้งานได้อย่างปลอดภัย
            และสร้างความมั่นใจให้กับลูกค้า
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บทความนี้ให้ข้อมูลเกี่ยวกับการรับรอง scheme X
            สำหรับเครื่องตัดโลหะ ข้อกำหนด OTR 2024 สำหรับเครื่องตัดโลหะ
            และขั้นตอนการได้รับใบอนุญาต BIS สำหรับเครื่องตัดโลหะเพื่อติดเครื่องหมาย BIS
            สำหรับเครื่องตัดโลหะ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ทำไม BIS เป็นข้อบังคับสำหรับเครื่องตัดโลหะ?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องตัดโลหะถูกใช้ใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>การผลิตยานยนต์และชิ้นส่วนยานยนต์</li>
            <li>อุตสาหกรรมการบินและป้องกันประเทศ</li>
            <li>วิศวกรรมหนักและการก่อสร้าง</li>
            <li>อุตสาหกรรมอิเล็กทรอนิกส์และไฟฟ้า</li>
            <li>การทำแม่พิมพ์และการหล่อแม่พิมพ์</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ธุรกิจที่ไม่มี BIS สำหรับเครื่องตัดโลหะอาจต้องเผชิญกับ:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ความแม่นยำในการตัดโลหะไม่ดี และผลผลิตต่ำ</li>
            <li>
              ความล้มเหลวของเครื่องจักรและการสูญเสียการผลิต เวลาทำงานเทียบกับเวลาหยุดทำงาน
            </li>
            <li>อันตรายที่อาจเกิดขึ้นต่อผู้ปฏิบัติงาน</li>
            <li>การถูกตัดออกจากการประมูลสาธารณะและธุรกิจที่ถูกควบคุม</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            เครื่องหมาย BIS รับประกันว่าเครื่องตัดโลหะปฏิบัติตามมาตรฐานคุณภาพที่กำหนดโดยสำนักงาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะอยู่ภายใต้
            ข้อบังคับการประเมินความสอดคล้อง BIS พ.ศ. 2561
            ซึ่งได้ถูกกำหนดขึ้นเพื่อให้แน่ใจว่าผลิตภัณฑ์เป็นไปตามมาตรฐานคุณภาพที่จำเป็น
            ซึ่งเป็นความต้องการในปัจจุบันสำหรับอุปกรณ์อุตสาหกรรม
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            คุณสมบัติหลักของการรับรอง Scheme X สำหรับเครื่องตัดโลหะ
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>เป็นข้อบังคับสำหรับผู้ผลิตอินเดียและต่างประเทศ</li>
            <li>
              ใช้กับเครื่องตัดโลหะหลากหลายประเภทที่ประกาศภายใต้มาตรฐานอินเดีย
            </li>
            <li>
              เกี่ยวข้องกับการทดสอบในห้องปฏิบัติการ การตรวจสอบโรงงานและการตรวจสอบเป็นประจำ
            </li>
            <li>
              อนุญาตให้แสดงเครื่องหมาย BIS สำหรับเครื่องตัดโลหะ
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR BIS เป็นข้อบังคับสำหรับเครื่องตัดโลหะ
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            คำสั่งของกรมอุตสาหกรรมหนักเกี่ยวกับข้อบังคับทางเทคนิค Omnibus (OTR)
            สำหรับเครื่องตัดโลหะในปี 2024 ได้ทำให้การรับรองเป็นข้อบังคับ
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ใบอนุญาต BIS จะเป็นข้อบังคับสำหรับผู้ผลิตและผู้นำเข้าทุกคน
            ของเครื่องตัดโลหะมีผลตั้งแต่วันที่ 1 กันยายน 2026
            ตั้งแต่วันนี้เป็นต้นไป เครื่องจักรที่ไม่ได้รับการรับรองไม่สามารถ
            นำเสนอขาย นำเข้าหรือติดตั้งในอินเดียได้
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับเครื่องตัดโลหะ
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความน่าเชื่อถือของผลิตภัณฑ์: เครื่องจักรได้รับการรับรองสำหรับความแม่นยำ ความทนทานและ
              ประสิทธิภาพที่สม่ำเสมอ
            </li>
            <li>
              ความสามารถในการแข่งขันในตลาด: ใบอนุญาต BIS สำหรับเครื่องตัดโลหะเป็น
              ข้อบังคับเพื่อรับคำสั่งซื้อจากอุตสาหกรรมและรัฐบาลจำนวนมาก
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องหมาย BIS สำหรับเครื่องตัดโลหะ
              สร้างความเชื่อมั่นให้กับผู้ซื้อ
            </li>
            <li>
              การปฏิบัติตามกฎหมาย: ตาม OTR สำหรับเครื่องตัดโลหะและ
              BIS
            </li>
            <li>
              ข้อได้เปรียบระดับโลก: การเข้าถึงที่ง่ายขึ้นสำหรับผู้ผลิตต่างประเทศสู่ตลาด
              อินเดีย
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Metal Cutting Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทเครื่องตัดโลหะที่รวมอยู่ในอนุมัติ Scheme X
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ใบรับรอง Scheme X ครอบคลุมประเภทต่อไปนี้สำหรับเครื่องตัดโลหะ
            แต่ไม่จำกัดเพียง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>เครื่องกลึง CNC และศูนย์กลึง</li>
            <li>เครื่องกัด</li>
            <li>เครื่องเจาะ</li>
            <li>เครื่องเจียร</li>
            <li>เครื่องตัด CNC</li>
            <li>เครื่องหรืออุปกรณ์ตัดเลเซอร์</li>
            <li>เครื่องตัดพลาสมา</li>
            <li>เครื่องสำหรับการตัดด้วยน้ำ (water-jet)</li>
            <li>เครื่องเลื่อยแถบและเลื่อยตัดเหล็ก</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            เครื่องตัดโลหะทุกประเภทนี้ต้องปฏิบัติตามมาตรฐานอินเดีย
            ที่เกี่ยวข้อง (รหัส IS) เช่น IS 17277 (ส่วนที่ 1): 2019 / ISO
            16092-1: 2017 (ความปลอดภัยเครื่องมือเครื่องจักรกด ส่วนที่ 1 ข้อกำหนด
            ความปลอดภัยทั่วไป) เครื่องจักรแต่ละรุ่นต้องเป็นไปตามรหัส IS ของตัวเอง
            เกี่ยวกับความปลอดภัย ประสิทธิภาพการใช้พลังงานและความแม่นยำ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ขั้นตอนใบอนุญาต BIS สำหรับเครื่องตัดโลหะ
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐาน IS ที่ใช้บังคับ: เลือกมาตรฐานที่เหมาะสม
              ตามประเภทเครื่องจักร
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ส่งเครื่องจักรเพื่อทดสอบในห้องปฏิบัติการ BIS
              ที่ได้รับการยอมรับจากรัฐบาล
            </li>
            <li>
              การตรวจสอบโรงงาน: เจ้าหน้าที่ BIS ทำการเยี่ยมชมโดยตรงเพื่อ
              ให้แน่ใจว่าการผลิตมีคุณภาพที่เหมาะสม
            </li>
            <li>
              การยื่นเอกสาร: จัดเตรียมคู่มือทางเทคนิค รายงานการทดสอบและ
              เอกสารการรับประกันคุณภาพ
            </li>
            <li>
              การให้ใบอนุญาต BIS สำหรับเครื่องตัดโลหะ: ผู้ผลิตตอนนี้
              สามารถติดเครื่องหมาย BIS ภายใต้การรับรองผลิตภัณฑ์ตาม
              มาตรฐานข้างต้น
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: ดำเนินการตรวจสอบและตรวจสอบเป็นระยะ
              เพื่อรับประกันการปฏิบัติตามอย่างต่อเนื่องกับ BIS
            </li>
          </ul>
  
          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การไม่ปฏิบัติตามการรับรอง BIS สำหรับเครื่องตัดโลหะภายใต้ OTR
            สำหรับเครื่องตัดโลหะอาจส่งผลให้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>การห้ามขาย/นำเข้าเครื่องจักรที่ไม่ได้รับการรับรอง</li>
            <li>ค่าปรับสูงและการยึดผลิตภัณฑ์</li>
            <li>การถูกตัดออกจากสัญญารัฐบาล</li>
            <li>ความเสียหายระยะยาวต่อชื่อเสียงแบรนด์และธุรกิจ</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องตัดโลหะใน OTR สำหรับ
            เครื่องตัดโลหะ (2024) มีบทบาทสำคัญในความแม่นยำ
            ความปลอดภัยและความน่าเชื่อถือของอุตสาหกรรมอินเดีย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            สำหรับผู้ผลิตและผู้นำเข้า การมีใบอนุญาต BIS สำหรับเครื่องตัด
            โลหะและการติดเครื่องหมาย BIS บนเครื่องตัดโลหะไม่เพียงแต่เป็น
            การปฏิบัติตามกฎหมายเท่านั้น แต่นี่เป็นการลงทุนเชิงกลยุทธ์ที่เสนอ
            ผลตอบแทนที่ทวีคูณในรูปแบบของความเป็นเลิศของผลิตภัณฑ์
            ความเชื่อมั่นของลูกค้าและความเหนือกว่าในตลาด
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