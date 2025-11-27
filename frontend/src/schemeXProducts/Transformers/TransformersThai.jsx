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
  
  const TransformersThai = () => {
    return (
      <div className="relative w-full">
        <TransformersMetaTags />
        <TransformersBreadcrumb />
        <TransformersMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default TransformersThai;
  
  const TransformersMetaTags = () => {
    const title = "การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้า";
    const description =
      "การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้ากำหนดมาตรฐานคุณภาพและความปลอดภัยสำหรับการผลิตและการนำเข้าหม้อแปลงไฟฟ้าไปยังอินเดีย";
    const keywords =
      "การรับรอง BIS สำหรับหม้อแปลงไฟฟ้า, การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้า, การรับรอง Scheme X สำหรับหม้อแปลงไฟฟ้า, BIS สำหรับหม้อแปลงไฟฟ้า, OTR สำหรับหม้อแปลงไฟฟ้า";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้าในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้าในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const TransformersBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับหม้อแปลงไฟฟ้า
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
  
  const TransformersMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <TransformersMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const TransformersMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับหม้อแปลงไฟฟ้า
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
              alt="การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้า"
              title="ใบอนุญาต BIS Scheme X สำหรับหม้อแปลงไฟฟ้า"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            หม้อแปลงไฟฟ้าเป็นส่วนประกอบสำคัญของเครือข่ายส่งและจำหน่ายพลังงานทุกเครือข่าย
            ไม่ว่าจะเป็นการใช้งานในการดำเนินงานอุตสาหกรรม เชิงพาณิชย์ หรือสาธารณูปโภค
            หม้อแปลงไฟฟ้าเป็นและต้องเป็นอุปกรณ์ที่มีความปลอดภัยและประสิทธิภาพการทำงานสูงสุดเสมอ
            เนื่องจากธรรมชาติที่สำคัญของฟังก์ชันการทำงาน
            เพื่อเพิ่มความปลอดภัย ความน่าเชื่อถือ และการทำให้เป็นมาตรฐานในอุตสาหกรรมอุปกรณ์ไฟฟ้าในอินเดีย
            สำนักงานมาตรฐานอินเดีย (BIS) ได้กำหนดการรับรอง BIS
            สำหรับหม้อแปลงไฟฟ้าทุกประเภทและชุดประกอบ ชุดย่อย ส่วนประกอบ และส่วนย่อยเป็นข้อบังคับภายใต้การรับรอง
            Scheme X
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักได้ผ่าน Omnibus Technical Regulation Order 2024
            กำหนดกำหนดเส้นตายสำหรับผู้ผลิตทั้งหมดไม่ว่าจะมาจากประเทศใด
            เพื่อให้บรรลุการรับรอง BIS ภายใต้ Scheme X สำหรับหม้อแปลงไฟฟ้าและอุปกรณ์ที่คล้ายกันภายในวันที่
            1 กันยายน 2026 การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้าเป็นขั้นตอนสู่การปรับปรุงคุณภาพ
            ความสม่ำเสมอ ความน่าเชื่อถือ และความปลอดภัยทางไฟฟ้าของผลิตภัณฑ์ในอินเดีย
            สำหรับผู้ผลิต ผู้นำเข้า หรือผู้จัดหา OEM หม้อแปลงไฟฟ้าพร้อมส่วนประกอบ
            มาตรฐานนี้เป็นมากกว่าการปฏิบัติตามข้อกำหนด
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้รวบรวมข้อมูลที่เกี่ยวข้องทั้งหมดที่เกี่ยวข้องกับขอบเขต
            ความสำคัญ และข้อดีของการรับรอง กระบวนการ และเอกสารที่จำเป็นสำหรับการรับรอง Scheme X
            สำหรับหม้อแปลงไฟฟ้าทุกประเภทและ (หรือ) ชุดประกอบ ชุดย่อย ส่วนประกอบ
            และหรือการประกอบ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why Scheme X is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ทำไม Scheme X สำหรับหม้อแปลงไฟฟ้าจึงสำคัญ
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หม้อแปลงไฟฟ้าใช้กันอย่างแพร่หลายใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>สิ่งอำนวยความสะดวกในการผลิตไฟฟ้า</li>
            <li>เครือข่ายส่งและจำหน่าย</li>
            <li>โรงงานและอาคารผลิต</li>
            <li>โครงการพลังงานหมุนเวียน (แสงอาทิตย์ / ลม / น้ำ)</li>
            <li>ทรัพย์สินเชิงพาณิชย์ / ที่อยู่อาศัย</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หากไม่มีการปฏิบัติตามที่เหมาะสม หม้อแปลงไฟฟ้าอาจทำให้เกิด:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ความร้อนสูงเกินไป ไฟไหม้ และไฟฟ้าช็อต</li>
            <li>การสูญเสียและการสิ้นเปลืองพลังงานระหว่างการส่ง</li>
            <li>การดับไฟเนื่องจากความเสียหายของระบบ</li>
            <li>ถูกปฏิเสธในงานประมูลสาธารณะ โครงการของรัฐบาล</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง Scheme X สำหรับหม้อแปลงไฟฟ้ารับประกันความปลอดภัยสูง
            ประสิทธิภาพการใช้พลังงาน และความน่าเชื่อถือของผลิตภัณฑ์
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง Scheme X สำหรับหม้อแปลงไฟฟ้าคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้าเป็นกรอบกฎหมายภายใต้กฎระเบียบการประเมินความสอดคล้อง
            BIS ปี 2018 ซึ่งกำหนดการทดสอบและการตรวจสอบที่เข้มงวดและต้องการระดับเอกสารที่สูงขึ้นเพื่อให้แน่ใจในคุณภาพตามมาตรฐานอินเดีย
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            คุณสมบัติหลักของการรับรอง Scheme X:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>สำหรับผู้ผลิตทั้งหมดทั้งในอินเดียและต่างประเทศ</li>
            <li>
              รวมถึงหม้อแปลงไฟฟ้าจำหน่าย หม้อแปลงไฟฟ้ากำลัง และหม้อแปลงไฟฟ้าสำหรับวัตถุประสงค์พิเศษ
            </li>
            <li>
              การทดสอบประสิทธิภาพ ประสิทธิภาพการใช้พลังงาน และความปลอดภัยในห้องปฏิบัติการที่ได้รับอนุมัติจาก
              BIS เป็นข้อบังคับ
            </li>
            <li>
              โรงงานได้รับการตรวจสอบสำหรับกระบวนการผลิตและระบบคุณภาพที่ได้รับการตรวจสอบ
            </li>
            <li>ให้ใบอนุญาตสำหรับการใช้เครื่องหมายมาตรฐาน BIS</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับหม้อแปลงไฟฟ้า
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักได้แนะนำ Omnibus Technical Regulation (OTR)
            สำหรับหม้อแปลงไฟฟ้าในปี 2024
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            วันที่ปฏิบัติตาม: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบรับรองภายในวันที่ 1
            กันยายน 2026 หลังจากนั้น หม้อแปลงไฟฟ้าที่ไม่มีใบรับรองไม่สามารถผลิต
            นำเข้าประเทศ หรือขายในอินเดียได้
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของ BIS สำหรับหม้อแปลงไฟฟ้า
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยและความน่าเชื่อถือ: ตรวจสอบว่าหม้อแปลงไฟฟ้าเป็นไปตามข้อกำหนดความปลอดภัยทางไฟฟ้าและการป้องกันไฟไหม้
            </li>
            <li>
              ประสิทธิภาพการใช้พลังงาน: ส่งเสริมการลดการสูญเสียพลังงานและประสิทธิภาพพลังงานที่ดีขึ้น
            </li>
            <li>
              การปฏิบัติตามตลาด: ปฏิบัติตามข้อกำหนดกฎระเบียบของหม้อแปลงไฟฟ้า
              ตามที่ระบุไว้ใน OTR
            </li>
            <li>
              คุณสมบัติสำหรับงานประมูล: ผลิตภัณฑ์ที่ได้รับใบรับรองมีคุณสมบัติสำหรับงานประมูลของรัฐบาลและ
              BUMN
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องหมายมาตรฐาน BIS รับประกันคุณภาพผลิตภัณฑ์และความทนทาน
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Transformers Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทของหม้อแปลงไฟฟ้าที่ครอบคลุม
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS scheme X สำหรับหม้อแปลงไฟฟ้าใช้กับ:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>
              หม้อแปลงไฟฟ้าจำหน่าย (สำหรับใช้ในเครือข่ายท้องถิ่นและการจ่ายไฟฟ้าในบ้าน)
            </li>
            <li>
              หม้อแปลงไฟฟ้ากำลัง (ที่ระดับเครือข่ายส่งแรงดันสูง)
            </li>
            <li>
              หม้อแปลงไฟฟ้าสำหรับวัตถุประสงค์พิเศษ (การใช้งานในอุตสาหกรรม รถไฟ และโครงการพลังงานหมุนเวียน)
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            แต่ละประเภทต้องเป็นไปตามรหัส IS ที่เกี่ยวข้อง (ดูหมายเหตุ) เช่น IS 16819:2018/ISO
            12100:2010 (ความปลอดภัยของเครื่องจักร หลักการทั่วไปสำหรับการออกแบบ –
            การประเมินความเสี่ยงและการลดความเสี่ยง) ประเภททั้งหมดต้องเป็นไปตามรหัส IS
            ของแต่ละประเภทสำหรับการรับรอง
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับหม้อแปลงไฟฟ้า
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐานที่ใช้บังคับ: กรุณาอ้างอิงรหัส IS สำหรับหม้อแปลงไฟฟ้าประเภทต่างๆ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ดำเนินการตรวจสอบความปลอดภัย ประสิทธิภาพการใช้พลังงาน
              และประสิทธิภาพในห้องปฏิบัติการที่ได้รับอนุมัติจาก BIS
            </li>
            <li>
              การตรวจสอบโรงงาน: บุคลากร BIS สังเกตการผลิตของผู้ผลิตและระบบควบคุมคุณภาพ
            </li>
            <li>
              การยื่นเอกสาร: ส่งข้อมูลจำเพาะ รายงานการทดสอบ และข้อมูลการปฏิบัติตาม
            </li>
            <li>
              การให้ใบอนุญาต: BIS ให้ใบอนุญาตสำหรับการใช้เครื่องหมายมาตรฐานเมื่อเงื่อนไขทั้งหมดเป็นไปตามที่กำหนด
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: ดำเนินการทดสอบและทบทวนเป็นประจำเพื่อรักษาความถูกต้องของการรับรอง
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ความล้มเหลวในการปฏิบัติตาม BIS / OTR สำหรับการรับรอง BIS หม้อแปลงไฟฟ้าภายใต้ OTR
            สำหรับหม้อแปลงไฟฟ้าจะหมายถึงสิ่งต่อไปนี้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              ห้ามการขาย การผลิต และการนำเข้าหม้อแปลงไฟฟ้าที่ไม่มีใบรับรอง
            </li>
            <li>
              การยึดผลิตภัณฑ์ที่ไม่ปฏิบัติตามและบทลงโทษที่รุนแรงเป็นข้อบังคับ
            </li>
            <li>การถูกตัดสิทธิ์จากงานประมูลของรัฐบาลและ BUMN</li>
            <li>ความเสียหายต่อชื่อเสียงในระยะยาว ความสูญเสียทางการเงิน</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับหม้อแปลงไฟฟ้าซึ่งจะบังคับภายใต้ OTR
            สำหรับหม้อแปลงไฟฟ้า (2024) เป็นขั้นตอนสำคัญในการปรับปรุงโครงสร้างพื้นฐานพลังงานของอินเดียด้วยผลิตภัณฑ์ที่เชื่อถือได้
            มีประสิทธิภาพและปลอดภัย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            สำหรับผู้ผลิตและผู้นำเข้า การรับรอง Scheme X สำหรับหม้อแปลงไฟฟ้าไม่เพียงแต่เป็นการรับรองบังคับเท่านั้น
            แต่ยังเป็นเครื่องมือเชิงกลยุทธ์ในการได้รับความไว้วางใจในตลาดอินเดียและรักษาความสำเร็จในระยะยาวในอุตสาหกรรมพลังงานของประเทศ
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
  