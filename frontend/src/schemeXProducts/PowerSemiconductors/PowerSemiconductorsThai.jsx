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
  
  const PowerSemiconductorsThai = () => {
    return (
      <div className="relative w-full">
        <PowerSemiconductorsMetaTags />
        <PowerSemiconductorsBreadcrumb />
        <PowerSemiconductorsMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default PowerSemiconductorsThai;
  
  const PowerSemiconductorsMetaTags = () => {
    const title = "การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง";
    const description =
      "การรับรอง BIS Scheme X ใช้กับตัวแปลงเซมิคอนดักเตอร์กำลังทุกประเภทและชิ้นส่วนประกอบ ชิ้นส่วนย่อย และส่วนประกอบเพื่อให้แน่ใจในคุณภาพและความปลอดภัยในอินเดีย";
    const keywords =
      "การรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง, การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง, การรับรอง Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง, BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง, OTR สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const PowerSemiconductorsBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
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
  
  const PowerSemiconductorsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PowerSemiconductorsMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const PowerSemiconductorsMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
              alt="การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง"
              title="ใบอนุญาต BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ตัวแปลงเซมิคอนดักเตอร์กำลังช่วยให้สามารถดำเนินการและปรับเปลี่ยนพลังงาน
            ไฟฟ้าได้อย่างมีประสิทธิภาพจากรูปแบบหนึ่งไปอีกรูปแบบหนึ่งในการใช้งานต่างๆ
            การใช้งานเหล่านี้รวมถึงพลังงานหมุนเวียน ยานพาหนะไฟฟ้า
            อัตโนมัติในอุตสาหกรรม และอิเล็กทรอนิกส์ผู้บริโภค พวกเขาทำหน้าที่เป็น
            พื้นฐานสำหรับอุปกรณ์และเครื่องใช้ไฟฟ้าและอิเล็กทรอนิกส์ เนื่องจาก
            ความสำคัญและความสำคัญที่เพิ่มขึ้นอย่างต่อเนื่องของอุปกรณ์เหล่านี้
            ในภาคพลังงานและอุตสาหกรรมของประเทศ สำนักงานมาตรฐานอินเดีย (BIS)
            ได้รวมการรับรองตัวแปลงเซมิคอนดักเตอร์กำลังไว้ภายใต้
            กรอบการรับรอง Scheme X
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ตามคำสั่งที่ออกโดยกระทรวงอุตสาหกรรมหนัก
            มีความคาดหวังจากผู้ผลิตทุกประเภท ไม่ว่าพวกเขาจะ
            ดำเนินการในประเทศหรือต่างประเทศ เพื่อปฏิบัติตาม
            การรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังและชิ้นส่วนย่อย
            รวมถึงส่วนประกอบภายในวันที่ 1 กันยายน 2026 การรับรอง BIS
            Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังเป็นโครงการรับรอง
            ตามกฎระเบียบ ขั้นตอนสู่การปรับปรุงการผลิตของอินเดียผ่าน
            การปรับปรุงความปลอดภัย คุณภาพและมาตรฐานที่แข่งขันได้ในระดับ
            โลก
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้จะช่วยในการให้ข้อมูลที่จำเป็น
            เกี่ยวกับเอกสารเกี่ยวกับการรับรอง Scheme X สำหรับ
            ชิ้นส่วนย่อย ส่วนประกอบและ/หรือประเภทตัวแปลงเซมิคอนดักเตอร์กำลัง
            ขอบเขตและความสำคัญ กระบวนการรับรอง ข้อดี และ
            ข้อมูลอื่นๆ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การใช้งานตัวแปลงเซมิคอนดักเตอร์กำลังรวมถึง:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>โครงการพลังงานแสงอาทิตย์และลม</li>
            <li>สถานีชาร์จ EV และไดรฟ์</li>
            <li>อัตโนมัติในโรงงานและหุ่นยนต์</li>
            <li>อิเล็กทรอนิกส์ผู้บริโภคและ PSU</li>
            <li>เครือข่ายส่งและจำหน่าย</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            โดยไม่มีการรับรอง ความเสี่ยงรวมถึง:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ความเสียหายทางไฟฟ้าและการร้อนเกิน</li>
            <li>สภาวะที่ไม่ปลอดภัยและความเสียหายของอุปกรณ์</li>
            <li>ประสิทธิภาพการใช้พลังงานที่ลดลง</li>
            <li>ผลการเสนอราคาเชิงลบจากโครงการและการประมูลของรัฐบาล</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ตัวแปลงเซมิคอนดักเตอร์กำลังที่มีการรับรอง Scheme X
            แสดงให้เห็นว่าผลิตภัณฑ์นี้ปฏิบัติตามมาตรฐานอินเดียที่เข้มงวดสำหรับ
            ประสิทธิภาพ ความปลอดภัยและความน่าเชื่อถือ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ใบรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังอยู่ภายใต้
            ข้อบังคับการประเมินความสอดคล้อง BIS พ.ศ. 2561 นี่รับประกันว่า
            ผลิตภัณฑ์ผ่านการทดสอบที่เข้มงวด การตรวจสอบ และการตรวจสอบ
            การปฏิบัติตามก่อนเข้าสู่ตลาดอินเดีย
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>เป็นข้อบังคับสำหรับผู้ผลิตต่างประเทศและอินเดียทั้งหมด</li>
            <li>
              ครอบคลุมการแนะนำที่ครอบคลุมเกี่ยวกับอุปกรณ์เซมิคอนดักเตอร์
              กำลัง การออกแบบ gate drive และส่วนประกอบแบบพาสซีฟ
            </li>
            <li>การทดสอบผลิตภัณฑ์เป็นข้อบังคับในห้องปฏิบัติการที่ได้รับการรับรอง BIS</li>
            <li>
              การถูกตัดออกจากงานเมือง และโครงการและการประมูลของรัฐบาล
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรองรับประกันว่าตัวแปลงเซมิคอนดักเตอร์กำลังปฏิบัติตาม
            มาตรฐานอินเดียที่เข้มงวดสำหรับประสิทธิภาพ ความปลอดภัยและความทนทาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังครอบคลุม
            ภายใต้ข้อบังคับการประเมินความสอดคล้อง BIS พ.ศ. 2561 นี่แสดงให้เห็น
            ว่าผลิตภัณฑ์จะต้องมีการทดสอบที่เข้มงวด การตรวจสอบและ
            การปฏิบัติตามในอินเดียก่อนที่จะนำไปสู่ตลาดที่นี่
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>เป็นข้อบังคับสำหรับผู้ผลิตอินเดียและต่างประเทศ</li>
            <li>
              ครอบคลุมการใช้งานเซมิคอนดักเตอร์กำลังต่างๆ (AC-DC, DC-DC, DC-AC
              และ AC-AC)
            </li>
            <li>
              กำหนดให้มีการรับรองกำลังและความปลอดภัยโดยห้องปฏิบัติการ
              ที่ได้รับการอนุมัติจาก BIS
            </li>
            <li>ครอบคลุมการตรวจสอบโรงงานและระบบคุณภาพ</li>
            <li>
              ให้สิทธิ์ในการใช้เครื่องหมายมาตรฐาน BIS หากผลิตภัณฑ์ยัง
              มีใบอนุญาต BIS
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ข้อบังคับทางเทคนิค Omnibus (OTR) 2024 ใหม่สำหรับตัวแปลง
            เซมิคอนดักเตอร์กำลังได้ถูกเผยแพร่โดยกระทรวงอุตสาหกรรมหนัก
            คำสั่ง OTR นี้กำหนดให้มีการรับรอง Scheme X สำหรับผลิตภัณฑ์นี้
            เพื่อให้แน่ใจในคุณภาพและความปลอดภัยของผู้บริโภค
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับ
            การรับรองภายในวันที่ 1 กันยายน 2026 หลังจากวันที่กำหนด
            นี้ ตัวแปลงที่ไม่ได้รับการรับรองไม่สามารถผลิต ขาย
            หรือนำเข้าในอินเดียได้
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยของผลิตภัณฑ์: ลดความเสี่ยงของการร้อนเกิน อุบัติเหตุ
              ไฟไหม้ และไฟฟ้าลัดวงจร
            </li>
            <li>
              ประสิทธิภาพการใช้พลังงาน: รับประกันประสิทธิภาพที่ปรับให้เหมาะสมและความสอดคล้อง
              กับมาตรฐานประหยัดพลังงาน
            </li>
            <li>
              การเข้าถึงตลาด: OTR สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังต้องการ
              การรับรองเพื่อเข้าถึงตลาดในอินเดีย
            </li>
            <li>
              ข้อได้เปรียบในการแข่งขัน: การประมูลของรัฐบาลและเอกชนชอบ
              ผลิตภัณฑ์ที่ได้รับการรับรอง
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องหมายมาตรฐาน BIS แสดงความน่าเชื่อถือ
              ความปลอดภัย และคุณภาพ
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐาน IS ที่เกี่ยวข้อง: อ้างอิงรหัส IS ที่เกี่ยวข้อง
              สำหรับประเภทตัวแปลงของคุณ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบประสิทธิภาพและความปลอดภัยที่
              จำเป็นตามมาตรฐานอุตสาหกรรม ในห้องปฏิบัติการที่
              ได้รับการรับรอง BIS
            </li>
            <li>
              การตรวจสอบโรงงาน: ตรวจสอบระบบการรับประกันคุณภาพที่สถานที่
              ผลิตโดยเจ้าหน้าที่ BIS
            </li>
            <li>
              การสมัครและเอกสาร: จัดเตรียมข้อกำหนดทางเทคนิค คู่มือ
              คุณภาพและรายงานการทดสอบ
            </li>
            <li>
              การออกใบอนุญาต BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง: คุณ
              สามารถติดเครื่องหมาย BIS หลังจากได้รับการอนุมัติ
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: BIS ตรวจสอบและดำเนินการตรวจสอบไม่
              ตามกำหนดเวลาเพื่อการปฏิบัติตามมาตรฐาน
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ผู้ผลิตที่ไม่มีตัวแปลงเซมิคอนดักเตอร์กำลังทุกรุ่น
            ที่ได้รับการรับรองด้วยการรับรอง BIS สำหรับตัวแปลง
            เซมิคอนดักเตอร์กำลังภายในวันที่ 1 กันยายน 2026 ต้องเผชิญกับความเสี่ยง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>การขาย/นำเข้าถูกห้ามสำหรับตัวแปลงที่ไม่ได้รับการรับรอง</li>
            <li>การยึดอุปกรณ์ที่ไม่ปฏิบัติตามและโทษทางการเงิน</li>
            <li>
              นี่จะทำให้คุณไม่มีคุณสมบัติสำหรับการประมูลของรัฐบาล
              หรือ PSU
            </li>
            <li>มูลค่าแบรนด์ได้รับผลกระทบอย่างถาวรในอินเดีย</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การดำเนินการรับรอง BIS Scheme X สำหรับตัวแปลงเซมิคอนดักเตอร์
            กำลังใน OTR 2024 เป็นขั้นตอนในการนำความปลอดภัย
            ประสิทธิภาพและคุณภาพเข้าสู่ภาคพลังงานและอิเล็กทรอนิกส์ในอินเดีย
            ที่กำลังเติบโตอย่างรวดเร็ว
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ผู้ผลิต ผู้นำเข้าและผู้ส่งออกใช้ประโยชน์จากกระบวนการนี้โดย
            การรับประกันการรับรอง BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง โดย
            การได้รับใบอนุญาต BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลัง และ
            การติดเครื่องหมาย BIS สำหรับตัวแปลงเซมิคอนดักเตอร์กำลังบนผลิตภัณฑ์
            ของพวกเขา แสดงให้เห็นว่าผลิตภัณฑ์ของพวกเขาเป็นไปตามระบบกฎระเบียบตลาด
            ท้องถิ่นและข้อกำหนดของลูกค้า
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
  