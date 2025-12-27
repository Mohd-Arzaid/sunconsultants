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
  
  const PackingMachineryThai = () => {
    return (
      <div className="relative w-full">
        <PackingMachineryMetaTags />

        <PackingMachineryBreadcrumb />
        <PackingMachineryMainContent />
        <Services />
        <VideoSection />
        <FooterThai />
      </div>
    );
  };
  
  export default PackingMachineryThai;
  
  const PackingMachineryMetaTags = () => {
    const title =
      "การรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์และชิ้นส่วนประกอบ";
    const description =
      "การรับรอง BIS Scheme X สำหรับเครื่องจักรทุกประเภทสำหรับการบรรจุ ปิดผนึก ติดฉลากขวด บรรจุหรือห่อ และ/หรือชิ้นส่วนประกอบ ชิ้นส่วนย่อย และส่วนประกอบ เป็นขั้นตอนสำคัญในการมาตรฐานความปลอดภัยและคุณภาพในภาคการผลิตของอินเดีย";
    const keywords =
      "การรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์, การรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์, การรับรอง Scheme X สำหรับเครื่องบรรจุภัณฑ์, BIS สำหรับเครื่องบรรจุภัณฑ์, OTR สำหรับเครื่องบรรจุภัณฑ์";
    const canonicalUrl = window.location.href;
    const author = "Sun Certifications India";
    const publisher =
      "Dhruv Aggarwal, Head of Operations at Sun Certification India";
    const ogTitle =
      "การรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์ในอินเดีย | คู่มือฉบับสมบูรณ์";
    const ogDescription =
      "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์ในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";
  
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
          href="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-conditionnement"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-dong-goi"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-empaque"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-pojang-gigye"
        />
        <link
          rel="alternate"
          hrefLang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-mesin-pengemasan"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-macchinari-per-imballaggio"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-pakkingu-kikai"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-bao-zhuang-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hrefLang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-pack"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-verpakkingsmachines"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-taabia-wa-al-taghlif"
        />
      </Helmet>
    );
  };
  
  const PackingMachineryBreadcrumb = () => {
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
                      การรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์
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
  
  const PackingMachineryMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <PackingMachineryMainContentLeft />
  
          {/* Right Side Content */}
          <ServicesRightSideContentThai />
        </div>
      </div>
    );
  };
  
  const PackingMachineryMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            การรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์
          </h1>
  
          {/* BIS Scheme X Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
              title="ใบอนุญาต BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์"
              alt="การรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องบรรจุภัณฑ์มีความสำคัญอย่างยิ่งสำหรับอุตสาหกรรมในภาคอาหาร
            เครื่องดื่ม ยา เคมี สินค้าอุปโภคบริโภค และโลจิสติกส์ เครื่องจักรเหล่านี้
            รับประกันการบรรจุภัณฑ์ที่ถูกต้อง ปลอดภัยและมีคุณภาพ
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            เพื่อให้แน่ใจในความปลอดภัย ความน่าเชื่อถือและความสามารถในการทำกำไร BIS (สำนักงานมาตรฐานอินเดีย)
            ได้ทำให้การรับรอง BIS Scheme X สำหรับ
            เครื่องบรรจุภัณฑ์เป็นข้อบังคับ การรับรองนี้มอบให้เพื่อ
            รับประกันว่าเครื่องบรรจุภัณฑ์ทั้งหมดไม่ว่าจะขายในอินเดียหรือ
            นำเข้าไปยังอินเดีย ปฏิบัติตามมาตรฐานคุณภาพแห่งชาติที่
            ใช้บังคับ
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            ในบทความนี้ เราจะอธิบายความสำคัญของการรับรอง
            Scheme X สำหรับเครื่องบรรจุภัณฑ์ บทบาท OTR สำหรับเครื่องบรรจุภัณฑ์และ
            กระบวนการเพื่อรับใบอนุญาต BIS และเครื่องหมายมาตรฐาน BIS สำหรับ
            เครื่องบรรจุภัณฑ์
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS Certification Matters Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ความสำคัญของ BIS สำหรับเครื่องบรรจุภัณฑ์
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องบรรจุภัณฑ์ถูกใช้ในธุรกิจทั้งหมดสำหรับสิ่งต่อไปนี้:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>การบรรจุภัณฑ์อาหารและเครื่องดื่ม</li>
            <li>ยาและผลิตภัณฑ์ทางการแพทย์</li>
            <li>การบรรจุภัณฑ์ที่ใช้ในอุตสาหกรรมเคมีและอุตสาหกรรม</li>
            <li>ผลิตภัณฑ์ผู้บริโภคและค้าปลีก</li>
            <li>โซลูชันการบรรจุภัณฑ์สำหรับตลาดส่งออก</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            โดยไม่มี BIS สำหรับเครื่องบรรจุภัณฑ์: ผลิตภัณฑ์ที่ไม่มี
            การรับรอง BIS อาจทำให้เกิด:
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>ความล้มเหลวในการบรรจุภัณฑ์ ความสมบูรณ์ของผลิตภัณฑ์และการปนเปื้อน</li>
            <li>อันตรายด้านความปลอดภัยในส่วนอาหารและยา</li>
            <li>การดำเนินงานที่ไม่มีประสิทธิภาพและเวลาหยุดทำงาน</li>
            <li>ความล้มเหลวในการปฏิบัติตามกฎการจัดซื้อของรัฐบาล</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            เครื่องหมาย BIS บนเครื่องบรรจุภัณฑ์รับประกันผู้ซื้อในเรื่องคุณภาพ
            ความปลอดภัยและอายุการใช้งาน
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is X-Scheme Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ใบรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์คืออะไร?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            เครื่องบรรจุภัณฑ์เป็นส่วนที่ II ของการรับรอง Scheme X ภายใต้
            ข้อบังคับการประเมินความสอดคล้อง BIS 2018 และการปฏิบัติตามนี้
            เป็นข้อบังคับสำหรับผู้ผลิตอินเดียและต่างประเทศ
          </p>
  
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            การรับรอง Scheme X สำหรับเครื่องบรรจุภัณฑ์: คุณสมบัติหลัก:
          </h3>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              เหมาะสำหรับเครื่องบรรจุภัณฑ์ใดๆ (แบบใช้มือ กึ่งอัตโนมัติและ
              อัตโนมัติ)
            </li>
            <li>
              ต้องทดสอบผลิตภัณฑ์ ผู้ตรวจสอบสำหรับโรงงานและควบคุมคุณภาพ
            </li>
            <li>เป็นข้อบังคับสำหรับการขายและการนำเข้าในอินเดีย</li>
            <li>
              ให้อนุญาตให้ใช้เครื่องหมาย BIS สำหรับเครื่องบรรจุภัณฑ์
              บนอุปกรณ์ที่ได้รับการรับรอง
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR สำหรับเครื่องบรรจุภัณฑ์
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            OTR สำหรับเครื่องบรรจุภัณฑ์ประกาศโดยกระทรวงอุตสาหกรรมหนัก
            ในปี 2024 ซึ่งต้องการการรับรอง Scheme X
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            กำหนดเส้นตาย: เครื่องบรรจุภัณฑ์ทั้งหมดต้องมีใบรับรอง
            BIS Scheme X และเครื่องบรรจุภัณฑ์ทั้งหมดต้องได้รับใบอนุญาต BIS
            สำหรับเครื่องบรรจุภัณฑ์ภายในวันที่ 1 กันยายน 2026 "นี่จะ
            หยุดเครื่องบรรจุภัณฑ์ที่ไม่ได้รับการรับรองจากการขาย นำเข้า
            หรือเข้าร่วมการประมูลทั่วประเทศ" เจ้าหน้าที่รัฐบาลกล่าว
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ข้อดีของการรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ความปลอดภัยและความสะอาด: เครื่องบรรจุภัณฑ์ที่ได้รับการรับรองยัง
              ป้องกันปัญหาการปนเปื้อน (อาหารและยา)
            </li>
            <li>
              การรับประกันคุณภาพ: รักษาเครื่องจักรให้ทำงานได้อย่างราบรื่นและมีประสิทธิภาพ
            </li>
            <li>
              การเข้าถึงตลาด: ใบอนุญาตเครื่องบรรจุภัณฑ์ BIS มักจำเป็นสำหรับ
              การจัดซื้อโดยหน่วยงานสาธารณะ
            </li>
            <li>
              ความเชื่อมั่นของลูกค้า: เครื่องหมาย BIS สำหรับเครื่องบรรจุภัณฑ์ให้
              ข้อมูลแก่ลูกค้าเกี่ยวกับคุณภาพผลิตภัณฑ์และความทนทาน
            </li>
            <li>
              ข้อได้เปรียบในการแข่งขัน: แบรนด์/ผู้ผลิตที่ได้รับการรับรอง BIS มี
              ความนิยมมากขึ้นในตลาดที่ถูกควบคุมและสำหรับการประมูลของรัฐบาล
            </li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Packing Machinery Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            ประเภทเครื่องบรรจุภัณฑ์ภายใต้โครงการรับรอง BIS
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            การรับรอง Scheme X สำหรับเครื่องบรรจุภัณฑ์ครอบคลุมประเภทต่างๆ
            เช่น:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>เครื่องบรรจุภัณฑ์อาหารและเครื่องดื่ม</li>
            <li>เครื่องบรรจุภัณฑ์บลิสเตอร์และสตริปสำหรับยา</li>
            <li>เครื่องห่อ ผนึก และเติม</li>
            <li>เครื่องกล่องกระดาษและการติดฉลาก</li>
            <li>ระบบบรรจุภัณฑ์สูญญากาศและหด</li>
            <li>เครื่องบรรจุภัณฑ์จำนวนมากและอุตสาหกรรม</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            เครื่องบรรจุภัณฑ์แต่ละประเภทต้องเป็นไปตามข้อกำหนดมาตรฐานอินเดีย
            ที่เกี่ยวข้อง (รหัส IS) รวมถึง IS 16819:2018/ISO 12100:2010
            (ความปลอดภัยเครื่องจักร หลักการทั่วไปสำหรับการออกแบบ - การประเมินความเสี่ยงและ
            การลดความเสี่ยง)
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ประเภทเครื่องจักรต้องเป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้องสำหรับประสิทธิภาพ
            ความปลอดภัย ความสะอาดและประสิทธิภาพ
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            กระบวนการรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              ระบุมาตรฐานที่เกี่ยวข้อง: อ้างอิงรหัส IS ที่เกี่ยวข้อง
              สำหรับประเภทเครื่องบรรจุภัณฑ์ของคุณ
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
              การออกใบอนุญาต BIS สำหรับเครื่องบรรจุภัณฑ์: คุณสามารถ
              ติดเครื่องหมาย BIS หลังจากได้รับการอนุมัติ
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
            ผู้ผลิตที่ไม่มีเครื่องบรรจุภัณฑ์ทุกรุ่นที่
            ได้รับการรับรองด้วยการรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์ภายใน
            วันที่ 1 กันยายน 2026 ต้องเผชิญกับความเสี่ยง:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              การขาย/นำเข้าถูกห้ามสำหรับเครื่องบรรจุภัณฑ์ที่ไม่ได้รับการรับรอง
            </li>
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
            การดำเนินการรับรอง BIS Scheme X สำหรับเครื่องบรรจุภัณฑ์ใน OTR
            2024 เป็นขั้นตอนในการนำความปลอดภัย ประสิทธิภาพและคุณภาพ
            เข้าสู่อุตสาหกรรมและภาคการบรรจุภัณฑ์ในอินเดีย
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            ผู้ผลิต ผู้นำเข้าและผู้ส่งออกใช้ประโยชน์จากกระบวนการนี้โดย
            การรับประกันการรับรอง BIS สำหรับเครื่องบรรจุภัณฑ์ โดยการได้รับ
            ใบอนุญาต BIS สำหรับเครื่องบรรจุภัณฑ์ และการติดเครื่องหมาย BIS สำหรับ
            เครื่องบรรจุภัณฑ์บนผลิตภัณฑ์ของพวกเขา แสดงให้เห็นว่าผลิตภัณฑ์ของพวกเขา
            เป็นไปตามระบบกฎระเบียบตลาดท้องถิ่นและข้อกำหนดของลูกค้า
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
  