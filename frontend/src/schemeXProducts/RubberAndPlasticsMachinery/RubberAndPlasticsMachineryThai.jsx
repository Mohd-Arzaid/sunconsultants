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
  
  const RubberAndPlasticsMachineryThai = () => {
    return (
      <div className="relative w-full">
        <RubberAndPlasticsMachineryMetaTags />
  
        <RubberAndPlasticsMachineryBreadcrumb />
        <RubberAndPlasticsMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default RubberAndPlasticsMachineryThai;
  
  const RubberAndPlasticsMachineryMetaTags = () => {
    const title = "การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติก";
    const description =
      "การรับรอง BIS Scheme X เป็นข้อบังคับสำหรับเครื่องจักรยางและพลาสติก ชุดประกอบ ชุดย่อย และส่วนประกอบภายใต้ Scheme X เพื่อให้แน่ใจในคุณภาพ ความปลอดภัย และความเชื่อมั่นของลูกค้า";
    const keywords =
      "การรับรอง BIS สำหรับเครื่องจักรยางและพลาสติก, การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติก, การรับรอง Scheme X สำหรับเครื่องจักรยางและพลาสติก, BIS สำหรับเครื่องจักรยางและพลาสติก, OTR สำหรับเครื่องจักรยางและพลาสติก";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
  
  const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับเครื่องจักรยางและพลาสติก
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
  
  const RubberAndPlasticsMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <RubberAndPlasticsMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const RubberAndPlasticsMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับเครื่องจักรยางและพลาสติก
          </h1>
  
          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
              title="ใบอนุญาต BIS Scheme X สำหรับเครื่องจักรยางและพลาสติก"
              alt="การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติก"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            ภาคอุตสาหกรรมของอินเดียกำลังเปลี่ยนแปลงอย่างรวดเร็ว
            ซึ่งนำไปสู่ความต้องการเครื่องจักรที่มีมาตรฐาน ปลอดภัย
            และมีประสิทธิภาพสูงเพิ่มขึ้น โดยเฉพาะเครื่องจักรสำหรับการทำงานกับยางและพลาสติก
            มีความสำคัญอย่างยิ่งต่ออุตสาหกรรมต่างๆ รวมถึงยานยนต์ การก่อสร้าง
            การบรรจุภัณฑ์ และสินค้าอุปโภคบริโภค เพื่อเพิ่มความปลอดภัยของผลิตภัณฑ์
            การปกป้องผู้บริโภค และเพื่ออำนวยความสะดวกในการรับประกันคุณภาพ
            สำนักงานมาตรฐานอินเดีย (BIS) ได้กำหนดกรอบการกำกับดูแลที่บังคับให้มีการรับรองสำหรับการปฏิบัติตาม
            Scheme X
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            กระทรวงอุตสาหกรรมหนักภายใต้คำสั่ง Omnibus Technical Regulation (OTR) Order
            2024 ได้บังคับให้ผู้ผลิตทั้งหมดทั้งในประเทศและต่างประเทศ
            ต้องได้รับใบรับรอง BIS ภายใต้ Scheme X สำหรับหมวดหมู่เครื่องจักรเฉพาะ
            ซึ่งรวมถึงเครื่องจักรทุกประเภทสำหรับการทำงานกับยางและพลาสติก
            รวมถึงชุดประกอบ ชุดย่อย และส่วนประกอบ
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            บล็อกนี้อธิบายความสำคัญและความเกี่ยวข้องของการรับรอง Scheme X
            กระบวนการรับรอง และประโยชน์ที่เกี่ยวข้องพร้อมเอกสารที่จำเป็นสำหรับเครื่องจักรยางและพลาสติก
            รวมถึงชุดประกอบทั้งหมด ชุดย่อย และส่วนประกอบ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Importance Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับเครื่องจักรยางและพลาสติก
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องจักรยางและพลาสติกถูกใช้อย่างแพร่หลายใน:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>การผลิตชิ้นส่วนยานยนต์ (ยางรถยนต์ ท่อ ซีล แดชบอร์ด)</li>
            <li>การบรรจุภัณฑ์พลาสติกและผลิตภัณฑ์ผู้บริโภค</li>
            <li>อุปกรณ์ทางการแพทย์และการบรรจุภัณฑ์เภสัชกรรม</li>
            <li>วัสดุก่อสร้างและโครงสร้างพื้นฐาน</li>
            <li>ชิ้นส่วนไฟฟ้าและอิเล็กทรอนิกส์</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            หากไม่มี BIS สำหรับเครื่องจักรยางและพลาสติก อุตสาหกรรมอาจเผชิญกับ:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              การดำเนินงานที่ไม่มีประสิทธิภาพและความล้มเหลวที่เกิดขึ้นบ่อยครั้ง
            </li>
            <li>อันตรายต่อความปลอดภัยสำหรับผู้ปฏิบัติงานและผู้ใช้ปลายทาง</li>
            <li>ผลผลิตที่มีคุณภาพต่ำ</li>
            <li>การถูกตัดสิทธิ์สำหรับงานประมูลของรัฐบาลหรือโครงการขนาดใหญ่</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกรับประกันว่าเครื่องจักร
            เป็นไปตามมาตรฐานอินเดียที่เข้มงวด ทำให้เครื่องจักรปลอดภัยมากขึ้น
            ทนทานมากขึ้น และพร้อมสำหรับตลาด
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ใบรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกคืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกในอินเดียอยู่ภายใต้กฎระเบียบการประเมินความสอดคล้อง
            BIS ปี 2018 ซึ่งกำหนดเกณฑ์ประสิทธิภาพและความปลอดภัยสำหรับเครื่องจักรแปรรูปยางและพลาสติก
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            การรับรอง Scheme X สำหรับเครื่องจักรยางและพลาสติก: คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>บังคับสำหรับผู้ผลิตทั้งในอินเดียและต่างประเทศ</li>
            <li>
              ครอบคลุมเครื่องจักรยางและพลาสติกหลากหลายประเภทตามรหัส IS ที่ประกาศ
            </li>
            <li>
              ต้องมีการทดสอบผลิตภัณฑ์ การตรวจสอบกระบวนการผลิต และการตรวจสอบอย่างต่อเนื่อง
            </li>
            <li>การใช้เครื่องหมายมาตรฐาน BIS เมื่อได้รับการรับรอง</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ใบรับรองนี้รับประกันความปลอดภัยของเครื่องจักร ประสิทธิภาพการใช้พลังงาน
            และการผลิตที่เชื่อถือได้สำหรับอุตสาหกรรมและผู้ใช้ปลายทาง
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับเครื่องจักรยางและพลาสติก
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR สำหรับเครื่องจักรยางและพลาสติกประกาศโดยกระทรวงอุตสาหกรรมหนักในปี 2024
            ซึ่งต้องมีการรับรอง Scheme X
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องได้รับใบอนุญาต BIS
            เครื่องจักรยางและพลาสติกที่ถูกต้องภายใต้ Scheme X ภายในวันที่ 1 กันยายน 2026
            "สิ่งนี้จะหยุดเครื่องจักรยางและพลาสติกที่ไม่มีใบรับรองจากการผลิต การนำเข้า
            หรือการขายในอินเดีย" เจ้าหน้าที่รัฐบาลกล่าว
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับเครื่องจักรยางและพลาสติก
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              การรับประกันคุณภาพ: เป็นไปตามมาตรฐานอินเดียเกี่ยวกับประสิทธิภาพและความทนทาน
            </li>
            <li>
              ความสามารถในการแข่งขันในตลาด: ผลิตภัณฑ์ที่ได้รับใบรับรองได้รับการจัดลำดับความสำคัญสำหรับการจัดซื้อทั้งภาครัฐและเอกชน
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: มีความเชื่อมั่นมากขึ้นจากผู้ซื้อเมื่อพวกเขาซื้อเครื่องจักรด้วยการรับรอง
              BIS สำหรับเครื่องจักรยางและพลาสติก
            </li>
            <li>
              การปฏิบัติตามกฎหมาย: คุณจะไม่ถูกปรับหรือถูกจำกัดหลังจากปฏิบัติตาม OTR
              สำหรับเครื่องจักรยางและพลาสติก
            </li>
            <li>
              ข้อได้เปรียบระดับโลก: OEM ระดับนานาชาติที่มีใบรับรองพบเส้นทางเข้าสู่ตลาดอินเดียได้ง่ายขึ้น
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            เครื่องจักรยางและพลาสติกที่ครอบคลุมภายใต้โครงการรับรอง BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง Scheme X สำหรับเครื่องจักรยางและพลาสติกครอบคลุมอุปกรณ์หลากหลายประเภท รวมถึง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>เครื่องจักรสำหรับการขึ้นรูปด้วยการฉีด</li>
            <li>เครื่องอัดรีดและเครื่องเป่า</li>
            <li>โรงงานผสมยางและเครื่องผสมภายใน</li>
            <li>เครื่องจักรคาเลนเดอร์</li>
            <li>เครื่องอัดสำหรับการขึ้นรูปแบบอัด</li>
            <li>เครื่องจักรรีไซเคิลและแกรนูเลชัน</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            แต่ละหมวดหมู่ต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับ (รหัส IS) เช่น IS/ISO 20430:
            2020 (เครื่องจักรพลาสติกและยาง-เครื่องขึ้นรูปด้วยการฉีด-ข้อกำหนดความปลอดภัย)
            เครื่องจักรทุกประเภทต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับในด้านความปลอดภัย
            ประสิทธิภาพ และความน่าเชื่อถือ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับเครื่องจักรยางและพลาสติก
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              ระบุมาตรฐานที่เกี่ยวข้อง: เลือกรหัส IS ที่เกี่ยวข้องกับประเภทเครื่องจักร
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
              การออกใบอนุญาต BIS สำหรับเครื่องจักรยางและพลาสติก: คุณสามารถติดตั้งเครื่องหมาย BIS
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
            ผู้ผลิตที่ไม่มีเครื่องจักรยางและพลาสติกทุกรุ่นที่ได้รับใบรับรองด้วยการรับรอง BIS
            สำหรับเครื่องจักรยางและพลาสติกภายในวันที่ 1 กันยายน 2026 ต้องเผชิญกับความเสี่ยง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              ห้ามขาย/นำเข้าเครื่องจักรยางและพลาสติกที่ไม่มีใบรับรอง
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
            การดำเนินการรับรอง BIS Scheme X สำหรับเครื่องจักรยางและพลาสติกใน OTR 2024
            เป็นขั้นตอนในการนำความปลอดภัย ประสิทธิภาพ และคุณภาพเข้าสู่ภาคอุตสาหกรรมในอินเดีย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ผู้ผลิต ผู้นำเข้า และผู้ส่งออกใช้ประโยชน์จากกระบวนการนี้โดยการรับรอง BIS
            สำหรับเครื่องจักรยางและพลาสติก โดยการได้รับใบอนุญาต BIS สำหรับเครื่องจักรยางและพลาสติก
            และการติดตั้งเครื่องหมาย BIS สำหรับเครื่องจักรยางและพลาสติกบนผลิตภัณฑ์ของพวกเขา
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
  