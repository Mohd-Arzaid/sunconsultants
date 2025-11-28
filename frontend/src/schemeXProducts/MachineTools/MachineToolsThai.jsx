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
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const MachineToolsThai = () => {
  return (
    <div className="relative w-full">
      <MachineToolsMetaTags />
      <MachineToolsBreadcrumb />
      <MachineToolsMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default MachineToolsThai;

const MachineToolsMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับเครื่องมือ";
  const description =
    "การรับรอง BIS Scheme X เป็นข้อบังคับสำหรับเครื่องมือ รวมถึงเครื่องกลึง เครื่องกัด เครื่องเจาะ เครื่องเจียร ระบบ CNC และเครื่องมือสำหรับทำงานกับหิน เครามิก คอนกรีต และวัสดุที่คล้ายกัน";
  const keywords =
    "การรับรอง BIS สำหรับเครื่องมือ, การรับรอง BIS Scheme X สำหรับเครื่องมือ, การรับรอง Scheme X สำหรับเครื่องมือ, BIS สำหรับเครื่องมือ, OTR สำหรับเครื่องมือ";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครื่องมือในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องมือในอินเดีย เข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีรับการรับรองก่อนกำหนดเส้นตายกันยายน 2026";

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

const MachineToolsBreadcrumb = () => {
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
                    การรับรอง BIS สำหรับเครื่องมือ
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

const MachineToolsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const MachineToolsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเครื่องมือ
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            ใบอนุญาต BIS Scheme X สำหรับเครื่องมือ
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="การรับรอง BIS Scheme X สำหรับเครื่องมือ"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          โดยพิจารณาคุณภาพและความปลอดภัยเป็นสิ่งสำคัญ BIS (Bureau of Indian
          Standards) ได้เป็นผู้นำด้านความปลอดภัยและมาตรฐานของอุตสาหกรรมต่างๆ
          ผ่านการรับรอง Scheme X
          ใบรับรองนี้มีความสำคัญอย่างยิ่งสำหรับผู้ผลิตเครื่องมือที่ออกแบบมาเพื่อทำงานกับ
          วัสดุเช่น หิน เครามิก คอนกรีต ซีเมนต์ใยหิน และแก้วแร่ที่คล้ายกัน
          รวมถึงเครื่องมืออื่นๆ
          การปฏิบัติตามการรับรองไม่เพียงแต่ตอบสนองข้อกำหนดความปลอดภัยระดับชาติเท่านั้น
          แต่ยังเพิ่มความน่าเชื่อถือและความสามารถทางการตลาดของผลิตภัณฑ์อย่างมีนัยสำคัญ
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X
          นี้เป็นข้อกำหนดภายใต้ความปลอดภัยของเครื่องจักรและอุปกรณ์ไฟฟ้า
          (ข้อบังคับทางเทคนิค Omnibus, 2024)
          ข้อบังคับนี้กำหนดว่าผู้ผลิตเครื่องจักรและอุปกรณ์ไฟฟ้า
          ต้องมีเครื่องหมายมาตรฐานบนอุปกรณ์ของพวกเขา
          การรับรองครอบคลุมการเตรียมไฟล์ทางเทคนิค การตรวจสอบโรงงาน
          การตรวจสอบผลิตภัณฑ์อิสระ และการอนุญาต และกำหนดเส้นตายสุดท้ายคือ 1
          กันยายน 2026
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          บล็อกนี้ครอบคลุมข้อมูลที่จำเป็นทั้งหมดเกี่ยวกับการรับรอง Scheme X
          สำหรับเครื่องมือทุกประเภท สำหรับทำงานกับหิน เครามิก คอนกรีต
          ซีเมนต์ใยหิน หรือแร่ที่คล้ายกัน (หรือ) และการประกอบ /ชุดย่อย
          /ส่วนประกอบ ความสำคัญ ขอบเขต กระบวนการรับรอง ประโยชน์
          และเอกสารที่จำเป็น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS สำหรับเครื่องมือจึงสำคัญ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องมือมีความจำเป็นอย่างยิ่งใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>การผลิตชิ้นส่วนรถยนต์และเครื่องบิน</li>
          <li>อุตสาหกรรมการต่อเรือและวิศวกรรมหนัก</li>
          <li>การผลิตอุปกรณ์โรงไฟฟ้า</li>
          <li>รถไฟ การป้องกันประเทศ และอุปกรณ์ที่มีความแม่นยำ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โดยไม่มีการรับรอง BIS ความเสี่ยงรวมถึง:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>คุณภาพผลิตภัณฑ์ที่ไม่เพียงพอและไม่สม่ำเสมอ</li>
          <li>ความเสียหายของอุปกรณ์และความล่าช้าในการผลิต</li>
          <li>ความเสี่ยงต่อผู้ปฏิบัติงาน</li>
          <li>ความกังวลทางกฎหมายเนื่องจากการละเมิดกฎหมายอินเดีย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          โดยการบังคับใช้การปฏิบัติตาม การรับรอง Scheme X
          ป้องกันอุตสาหกรรมจากความเสี่ยงเหล่านี้
          ยังใช้กับเครื่องมือทุกประเภทสำหรับทำงานกับหิน เครามิก คอนกรีต
          ซีเมนต์ใยหิน หรือแร่ที่คล้ายกัน (หรือ) และการประกอบ /ชุดย่อย
          /ส่วนประกอบ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับเครื่องมือคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยการรับรอง BIS Scheme X ภายใต้ข้อบังคับการประเมินความสอดคล้อง BIS,
          2018 การทดสอบ การตรวจสอบ
          และการอนุญาตได้กลายเป็นข้อบังคับสำหรับผลิตภัณฑ์เครื่องมือ ที่ระบุไว้
          ก่อนการผลิต นำเข้า หรือขายในประเทศ
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          จุดเด่นหลัก:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ใช้กับผู้ผลิตอินเดียและผู้นำเข้า</li>
          <li>
            ครอบคลุมเครื่องมือเช่น เครื่องกลึง เครื่องกัด เครื่องเจาะ
            เครื่องเจียร เครื่องขึ้นรูป ระบบ CNC และอื่นๆ
          </li>
          <li>การทดสอบทำได้เฉพาะในห้องปฏิบัติการที่ BIS อนุมัติ</li>
          <li>การตรวจสอบโรงงานและการทบทวนระบบคุณภาพเป็นข้อบังคับ</li>
          <li>
            เฉพาะผู้สมัครที่สำเร็จเท่านั้นที่จะได้รับใบอนุญาต BIS เพื่อ
            ใช้เครื่องหมายมาตรฐานบนผลิตภัณฑ์ของพวกเขา
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR สำหรับเครื่องมือ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระทรวงอุตสาหกรรมหนักได้ออกข้อบังคับทางเทคนิค Omnibus (OTR)
          ที่กำหนดให้มีการรับรอง BIS scheme X สำหรับเครื่องมือ
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเส้นตาย: ผู้ผลิตและผู้นำเข้าทั้งหมดต้องมีการรับรอง BIS
          ภายในวันที่ 1 กันยายน 2026 เริ่มตั้งแต่วันที่ประกาศ เครื่องมือ
          ที่ไม่ได้รับการรับรองจะไม่สามารถผลิต ขาย หรือนำเข้าในอินเดียได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับเครื่องมือ
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            การรับประกันคุณภาพ: ความแม่นยำที่ได้รับการยืนยัน
            ความทนทานของเครื่องมือ ที่ได้รับการรับรอง
          </li>
          <li>การเข้าถึงตลาด – สำคัญสำหรับการเข้าสู่งานภาครัฐและเอกชน</li>
          <li>
            ความเชื่อมั่นของผู้บริโภค – เครื่องหมายมาตรฐาน BIS
            เป็นการรับประกันคุณภาพ และความปลอดภัยของผลิตภัณฑ์
          </li>
          <li>
            ข้อได้เปรียบทางการแข่งขัน -
            ผู้ผลิตที่ได้รับอนุญาตจะได้รับความนิยมมากขึ้น
            สำหรับการประมูลและการจัดซื้อ
          </li>
          <li>
            การลดความเสี่ยง – ไม่มีความล้มเหลวของอุปกรณ์
            การเพิ่มความปลอดภัยของผู้ปฏิบัติงาน และการป้องกันการหยุดทำงาน
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS เครื่องมือ
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            การระบุมาตรฐาน –
            เชื่อมโยงประเภทเครื่องมือและการใช้งานกับมาตรฐานอินเดีย
          </li>
          <li>
            การทดสอบผลิตภัณฑ์ – การทดสอบประสิทธิภาพ ความปลอดภัย และความทนทานใน
            ห้องปฏิบัติการที่ BIS ให้การรับรอง
          </li>
          <li>
            การตรวจสอบโรงงาน – การตรวจสอบการควบคุมคุณภาพการผลิตอุปกรณ์ไฟฟ้า
          </li>
          <li>
            เอกสาร: รายงานทางเทคนิค
            คู่มือและหลักฐานการปฏิบัติตามต้องจัดเตรียมไว้
          </li>
          <li>
            การออกใบอนุญาต – BIS ออกใบอนุญาต (ใบรับรอง)
            และอนุญาตให้ใช้เครื่องหมายมาตรฐาน
          </li>
          <li>
            การติดตาม – การทบทวนเป็นประจำและการตรวจสอบแบบสุ่มดำเนินการเพื่อ
            ให้แน่ใจว่าพวกเขาปฏิบัติตามกฎระเบียบ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X
          เป็นข้อบังคับสำหรับเครื่องจักรทั้งหมดสำหรับทำงานกับหิน เครามิก คอนกรีต
          ซีเมนต์ใยหิน หรือแร่ที่คล้ายกัน (หรือ) และการประกอบ /ชุดย่อย /ชิ้นส่วน
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          การไม่ปฏิบัติตามมาตรฐานการรับรอง BIS ภายใต้ OTR อาจส่งผลให้:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามการผลิต การนำเข้าและการค้าสินค้าที่ไม่ได้รับการรับรอง</li>
          <li>การยึดสินค้าและค่าปรับ</li>
          <li>การสูญเสียสัญญาป้องกันประเทศและรัฐบาล</li>
          <li>ความเสียหายต่อแบรนด์และชื่อเสียงอย่างถาวรในระยะยาว</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS Scheme X ซึ่งจำเป็นภายใต้ OTR 2024 ไม่ใช่แค่ภาระผูกพัน
          ด้านกฎระเบียบเท่านั้น—นี่คือกุญแจสำคัญสำหรับความเชื่อมั่น ความปลอดภัย
          และความสำเร็จในอุตสาหกรรมการผลิตของอินเดีย การรับรองมีความสำคัญสำหรับ
          ผู้ผลิตอินเดียและทั่วโลกสำหรับการเข้าถึงตลาด
          การปฏิบัติตามและความสำเร็จในระยะยาว
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับการผลิตต่างประเทศ
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
              เครื่องหมาย ISI (BIS) สำหรับการผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
