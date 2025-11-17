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
  
  const PublicWorksAndMechanicalThai = () => {
    return (
      <div className="relative w-full">
        <PublicWorksAndMechanicalMetaTags />
        <PublicWorksAndMechanicalBreadcrumb />
        <PublicWorksAndMechanicalMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default PublicWorksAndMechanicalThai;
  
  const PublicWorksAndMechanicalMetaTags = () => {
    const title =
      "การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล";
    const description =
      "การรับรอง BIS Scheme X สำหรับเครื่องจักรสำหรับงานสาธารณะและอาคาร และอุปกรณ์เครื่องกลเป็นขั้นตอนเชิงกลยุทธ์เพื่อให้แน่ใจในความปลอดภัยในอุตสาหกรรม คุณภาพที่สม่ำเสมอ และการเข้าถึงตลาด";
    const keywords =
      "การรับรอง BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล, การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล, การรับรอง Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล, BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล, OTR สำหรับงานสาธารณะและอุปกรณ์เครื่องกล";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกลในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกลในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const PublicWorksAndMechanicalBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
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
  
  const PublicWorksAndMechanicalMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PublicWorksAndMechanicalMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const PublicWorksAndMechanicalMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
              alt="การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล"
              title="ใบอนุญาต BIS สำหรับเครื่องจักรงานสาธารณะและอาคาร"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ด้วยการพัฒนาอุปกรณ์โครงสร้างพื้นฐานที่รวดเร็วและการทำให้ทันสมัยของอุตสาหกรรม
            ประสิทธิภาพและเครื่องจักรที่เชื่อถือได้มีความสำคัญอย่างยิ่ง เครื่องจักรและอุปกรณ์
            เครื่องกลทำหน้าที่เป็นแกนหลักในงานวิศวกรรม การผลิตและ
            การก่อสร้างงานสาธารณะรวมถึงอุตสาหกรรมเฉพาะ สิ่งสำคัญคือต้อง
            รักษาคุณภาพและความสอดคล้อง นี่คือภาระผูกพันทางกฎหมายที่
            กำหนดโดยสำนักงานมาตรฐานอินเดีย (BIS) ภายใต้
            การรับรอง Scheme X
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            เพื่อดำเนินการและปรับปรุงการบังคับใช้มาตรฐานบังคับ
            ในหมวดหมู่เครื่องจักรอุตสาหกรรมต่างๆ ข้อบังคับทางเทคนิค Omnibus
            (OTR) พ.ศ. 2567 ได้ถูกออกโดยกระทรวงอุตสาหกรรมหนัก คำสั่งนี้
            ระบุว่าเครื่องจักรทุกประเภทสำหรับงานสาธารณะ การก่อสร้าง
            อาคาร และอุปกรณ์เครื่องกลอื่นๆ รวมถึงที่ไม่ได้
            ระบุไว้อย่างชัดเจนในส่วนย่อยอื่นๆ ของบทที่ 84
            ต้องได้รับการรับรอง BIS ภายใต้ Scheme X
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            ในโพสต์นี้ เราจะหารือเกี่ยวกับเครื่องจักรและ
            อุปกรณ์ทุกประเภทที่ใช้สำหรับงานสาธารณะและการพัฒนา
            การก่อสร้าง อุปกรณ์เครื่องกลที่มีฟังก์ชันเฉพาะ ชิ้นส่วนประกอบ
            ชิ้นส่วนย่อย ความสำคัญและขอบเขตของโครงการที่
            ถูกพูดถึงมาก กระบวนการรับรองและข้อดี รวมถึงเอกสารที่
            ต้องส่ง
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Significance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องจักรเหล่านี้ใช้กันทั่วไปใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>
              การก่อสร้างโครงสร้างพื้นฐานสาธารณะ (ถนน สะพาน การจ่ายน้ำ)
            </li>
            <li>โครงการวิศวกรรมและการก่อสร้างหนัก</li>
            <li>บริการเมืองและสาธารณูปโภค</li>
            <li>
              สถานประกอบการอุตสาหกรรมที่ต้องการการยกหรือการประมวลผล
              เครื่องจักร
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            โดยไม่มี BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล ความเสี่ยง
            รวมถึง:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ความเสียหายของเครื่องจักรขณะโครงการสำคัญกำลังดำเนินอยู่</li>
            <li>การพิจารณาความปลอดภัยของคนงานและผู้ใช้ปลายทาง</li>
            <li>ค่าใช้จ่ายในการบำรุงรักษาและ downtime ที่สูงขึ้น</li>
            <li>ถูกห้ามจากโครงการที่ได้รับเงินทุนจากรัฐบาล</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
            รับประกันว่าเครื่องจักรทำงานได้อย่างปลอดภัย มีประสิทธิภาพ และมีความเสี่ยง
            ความล้มเหลวน้อยที่สุด
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกลคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
            อยู่ภายใต้ข้อบังคับการประเมินความสอดคล้อง BIS พ.ศ. 2561 นี่คือ
            วิธีการที่ระบุและเครื่องมือกฎระเบียบเพื่อให้แน่ใจ
            ว่าเครื่องจักรอุตสาหกรรมและโครงสร้างพื้นฐานเป็นไปตามมาตรฐานอินเดีย
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            แง่มุมหลักของการมีคุณสมบัติ Scheme X:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>ใช้กับผู้ผลิตอินเดียและต่างประเทศ</li>
            <li>รวมถึงเครื่องจักรสำหรับงานสาธารณะและสาธารณูปโภค</li>
            <li>การทดสอบในห้องปฏิบัติการที่ได้รับการยอมรับจาก BIS</li>
            <li>
              การตรวจสอบโรงงานและการตรวจสอบการปฏิบัติตามเป็นประจำรวมอยู่ในกระบวนการ
            </li>
            <li>
              ให้สิทธิ์ในการใช้เครื่องหมายมาตรฐาน BIS หลังจาก
              การรับรอง
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักได้ออกข้อบังคับทางเทคนิค Omnibus
            (OTR) สำหรับงานสาธารณะและอุปกรณ์เครื่องกลในปี 2567
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ในวันที่ 1 กันยายน 2026 ผู้ผลิตและ
            ผู้นำเข้าทั้งหมดต้องปฏิบัติตามการรับรอง Scheme X สำหรับงานสาธารณะและ
            อุปกรณ์เครื่องกล หลังจากวันที่นี้ เครื่องจักรที่ไม่ได้ลงทะเบียน
            จะไม่ได้รับอนุญาตให้ผลิต ขายหรือนำเข้าในอินเดีย
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยของผลิตภัณฑ์: ป้องกันการล้มเหลวเนื่องจากปัญหาทางกลและ
              การทำงานที่เชื่อถือได้
            </li>
            <li>
              การปฏิบัติตามกฎระเบียบ: เป็นไปตาม OTR สำหรับงานสาธารณะและอุปกรณ์
              เครื่องกล
            </li>
            <li>
              ข้อได้เปรียบในตลาด: การรับรองมักจำเป็นสำหรับการประมูล
              สาธารณะและโครงการของรัฐบาล
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องจักรที่ได้รับการรับรองอย่างเป็นทางการ
              ได้รับความนิยมจากผู้ซื้อบางราย เนื่องจากนี่เป็นการรับประกัน
              คุณภาพ
            </li>
            <li>
              การลดความรับผิดชอบ: ลดการเปิดเผยทางกฎหมายและ
              แบรนด์ด้วยผลิตภัณฑ์ที่ได้รับการรับรอง
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทงานสาธารณะและอุปกรณ์เครื่องกลใน OTR
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Scheme X สำหรับการรับรองงานสาธารณะและอุปกรณ์เครื่องกล
            ครอบคลุมผลิตภัณฑ์ต่อไปนี้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>เครื่องจักรสำหรับการสร้างและบำรุงรักษาถนน</li>
            <li>เครื่องจักรยกแบบไฮดรอลิกและแบบแมนนวล</li>
            <li>อุปกรณ์บริการเมือง (อุปกรณ์จำหน่ายน้ำ ฯลฯ)</li>
            <li>อุปกรณ์บริการและการจัดการทางกล</li>
            <li>
              อุปกรณ์ที่ออกแบบมาโดยเฉพาะสำหรับการใช้งานในอุตสาหกรรมใน
              งานสาธารณะและบริการ
            </li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            พวกเขาต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS) หาก
            ใช้บังคับ รวมถึง IS 16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร
            หลักการทั่วไปสำหรับการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
            รูปแบบทั้งหมดนี้ต้องผลิตตามมาตรฐานอินเดียที่
            ใช้บังคับสำหรับความปลอดภัย ประสิทธิภาพและคุณภาพ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐานที่เกี่ยวข้อง: เลือกรหัส IS ที่ใช้บังคับสำหรับ
              เครื่องจักรของคุณ
            </li>
            <li>
              การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบประสิทธิภาพและความปลอดภัยใน
              ห้องปฏิบัติการที่ได้รับการอนุมัติจาก BIS
            </li>
            <li>
              การตรวจสอบโรงงาน: เจ้าหน้าที่ BIS เยี่ยมชมสถานที่ผลิตเพื่อ
              ให้แน่ใจว่าการควบคุมคุณภาพมีอยู่
            </li>
            <li>
              เอกสาร: ส่งแบบฟอร์มใบสมัคร รายงานทางเทคนิค และคู่มือ
              คุณภาพ
            </li>
            <li>
              การออกใบอนุญาต: BIS ให้การรับรองและอนุญาต
              การใช้เครื่องหมายมาตรฐาน BIS
            </li>
            <li>
              การปฏิบัติตามอย่างต่อเนื่อง: มีการทดสอบและการตรวจสอบอย่างต่อเนื่อง
              เพื่อให้แน่ใจในการปฏิบัติตามอย่างต่อเนื่อง
            </li>
          </ul>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            โทษสำหรับการไม่ปฏิบัติตาม
          </h3>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การไม่ปฏิบัติตามการรับรอง BIS สำหรับงานสาธารณะและ
            อุปกรณ์เครื่องกลที่กำหนดใน OTR สำหรับงานสาธารณะและ
            อุปกรณ์เครื่องกลจะส่งผลให้:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>การห้ามขายหรือนำเข้าเครื่องจักรที่ไม่ได้รับการรับรอง</li>
            <li>ค่าปรับหนักและการยึดผลิตภัณฑ์</li>
            <li>ถูกห้ามจากการประมูลของรัฐบาลและกระบวนการสัญญา</li>
            <li>ชื่อเสียงเสียหายอย่างมาก</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            สรุป
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            ใบรับรอง BIS Scheme X สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
            ที่ได้รับการสนับสนุนโดย OTR สำหรับงานสาธารณะและอุปกรณ์เครื่องกล
            (2567) นำประเทศเข้าใกล้การกำหนดระดับ
            คุณภาพที่สม่ำเสมอและความปลอดภัยในเครื่องจักรโครงสร้างพื้นฐาน
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            สำหรับผู้ผลิตและผู้นำเข้า การได้รับการรับรอง Scheme X สำหรับ
            งานสาธารณะและอุปกรณ์เครื่องกลมากกว่าแค่การปฏิบัติตาม –
            นี่แสดงถึงการลงทุนเชิงกลยุทธ์
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
  