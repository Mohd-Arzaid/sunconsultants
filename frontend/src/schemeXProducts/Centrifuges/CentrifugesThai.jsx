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

const CentrifugesThai = () => {
  return (
    <div className="relative w-full">
      <CentrifugesMetaTags />
      <CentrifugesBreadcrumb />
      <CentrifugesMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default CentrifugesThai;

const CentrifugesMetaTags = () => {
  const title =
    "การรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงและเครื่องกรองหรือทำให้บริสุทธิ์";
  const description =
    "การรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยง เครื่องกรองหรือทำให้บริสุทธิ์สำหรับของเหลวและก๊าซ และ/หรือการประกอบ การประกอบย่อย และส่วนประกอบ เป็นก้าวสำคัญด้านกฎระเบียบสำหรับภาคเครื่องจักรอุตสาหกรรม";
  const keywords =
    "การรับรอง BIS สำหรับเครื่องปั่นเหวี่ยง, การรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยง, การรับรอง Scheme X สำหรับเครื่องปั่นเหวี่ยง, BIS สำหรับเครื่องปั่นเหวี่ยง, OTR สำหรับเครื่องปั่นเหวี่ยง";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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

const CentrifugesBreadcrumb = () => {
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
                    การรับรอง BIS สำหรับเครื่องปั่นเหวี่ยง
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

const CentrifugesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const CentrifugesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเครื่องปั่นเหวี่ยง
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="ใบอนุญาต BIS Scheme X สำหรับเครื่องปั่นเหวี่ยง"
            alt="การรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงและเครื่องกรองหรือทำให้บริสุทธิ์"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องปั่นเหวี่ยงเป็นเครื่องจักรที่สำคัญที่ใช้กันอย่างแพร่หลายในอุตสาหกรรมห้องปฏิบัติการ
          เภสัชกรรม การแปรรูปอาหาร เทคโนโลยีชีวภาพ ปิโตรเคมี และการเหมืองแร่
          เครื่องจักรเหล่านี้ทำงานโดยการหมุน และการหมุนที่รวดเร็วช่วยแยกส่วนผสม
          การแยกนี้มีความสำคัญอย่างยิ่งต่อการประมวลผลที่แม่นยำ ปลอดภัย
          และรวดเร็ว
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          ด้วยการใช้งานที่กว้างขวางในอุตสาหกรรมต่างๆ
          จึงมีความสำคัญอย่างยิ่งที่จะต้องเพิ่มความน่าเชื่อถือและความปลอดภัยของเครื่องปั่นเหวี่ยง
          เพื่อรักษาพารามิเตอร์การควบคุมคุณภาพสำหรับเครื่องปั่นเหวี่ยง BIS
          ได้นำเสนอโครงการรับรอง BIS ที่เรียกว่าการรับรอง Scheme-X
          สำหรับเครื่องปั่นเหวี่ยง
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบทความนี้ เราจะพูดถึงการรับรอง BIS Scheme X
          สำหรับเครื่องปั่นเหวี่ยงคืออะไร OTR สำหรับเครื่องปั่นเหวี่ยงคืออะไร
          และวิธีการได้รับใบอนุญาต BIS สำหรับเครื่องปั่นเหวี่ยงพร้อมเครื่องหมาย
          BIS อย่างเป็นทางการสำหรับเครื่องปั่นเหวี่ยง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ความสำคัญของ BIS สำหรับเครื่องปั่นเหวี่ยง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องปั่นเหวี่ยงถูกใช้ใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ภาคเภสัชกรรมและเทคโนโลยีชีวภาพ</li>
          <li>การแปรรูปอาหารและการผลิตเครื่องดื่ม</li>
          <li>โรงกลั่นน้ำมันและอุตสาหกรรมปิโตรเคมี</li>
          <li>ห้องปฏิบัติการทางการแพทย์</li>
          <li>การบำบัดสิ่งแวดล้อมและน้ำ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          การขาด BIS
          สำหรับเครื่องปั่นเหวี่ยงอาจนำไปสู่การใช้เครื่องปั่นเหวี่ยงที่มีคุณภาพต่ำหรือไม่ได้รับการรับรอง
          ซึ่งอาจส่งผลให้:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ความเสี่ยงต่อความเสียหายทางกล</li>
          <li>โอกาสการปนเปื้อนในภาคส่วนที่ละเอียดอ่อน</li>
          <li>การสูญเสียเวลาและรายได้</li>
          <li>ประสิทธิภาพต่ำและการใช้พลังงานที่เพิ่มขึ้น</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เครื่องปั่นเหวี่ยงที่ได้รับการรับรอง BIS พร้อมเครื่องหมาย BIS
          สำหรับเครื่องปั่นเหวี่ยง หมายถึงความปลอดภัย คุณภาพ และความไว้วางใจ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ใบรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS Scheme X
          สำหรับเครื่องปั่นเหวี่ยงเป็นโครงการรับรองบังคับภายใต้กฎระเบียบการประเมินความสอดคล้อง
          BIS 2018
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การรับรอง Scheme X สำหรับเครื่องปั่นเหวี่ยง: คุณสมบัติหลัก:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>ใช้กับผู้ผลิตทั้งในอินเดียและต่างประเทศ</li>
          <li>
            ใช้กับเครื่องปั่นเหวี่ยงทุกประเภทที่พบในห้องปฏิบัติการอุตสาหกรรมและ
            R&D
          </li>
          <li>
            การทดสอบผลิตภัณฑ์ การตรวจสอบ
            และการตรวจสอบความสอดคล้องที่เพียงพอเป็นสิ่งจำเป็น
          </li>
          <li>
            ช่วยให้ผู้ผลิตสามารถส่งการลงทะเบียน BIS
            ตามการรับรองสำหรับเครื่องปั่นเหวี่ยงที่กล่าวถึงข้างต้น
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับเครื่องปั่นเหวี่ยง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR
          สำหรับเครื่องปั่นเหวี่ยงได้รับการประกาศโดยกระทรวงอุตสาหกรรมหนักในปี
          2024 ซึ่งจำเป็นต้องมีการรับรอง Scheme X
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลา: ผู้ผลิตและผู้นำเข้าทั้งหมดจะต้องได้รับใบอนุญาต BIS
          เครื่องปั่นเหวี่ยงที่ถูกต้องภายใต้ Scheme X ภายในวันที่ 1 กันยายน 2026
          "นี่จะหยุดเครื่องปั่นเหวี่ยงที่ไม่ได้รับการรับรองจากการขาย นำเข้า
          หรือเข้าร่วมในการประมูลทั่วประเทศ" เจ้าหน้าที่รัฐบาลกล่าว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเครื่องปั่นเหวี่ยง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยและการปฏิบัติตาม:
            หลีกเลี่ยงอุบัติเหตุจากความเสียหายทางกลที่ความเร็วสูง
          </li>
          <li>
            คุณภาพและความน่าเชื่อถือ:
            เครื่องปั่นเหวี่ยงที่ได้รับการรับรองมีประสิทธิภาพด้วยความแม่นยำและความเที่ยงตรงสูง
          </li>
          <li>
            การเข้าถึงตลาด: ใบอนุญาตเครื่องปั่นเหวี่ยง BIS
            มักจะต้องใช้สำหรับการจัดซื้อโดยหน่วยงานสาธารณะ
          </li>
          <li>
            ความไว้วางใจของผู้บริโภค: เครื่องหมาย BIS
            สำหรับเครื่องปั่นเหวี่ยงให้ข้อมูลแก่ลูกค้าเกี่ยวกับคุณภาพและความทนทานของผลิตภัณฑ์
          </li>
          <li>
            ความได้เปรียบทางการแข่งขัน: แบรนด์/ผู้ผลิตที่ได้รับการรับรอง BIS
            เป็นที่ต้องการในตลาดที่มีการควบคุมและสำหรับการประมูลของรัฐบาล
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทของเครื่องปั่นเหวี่ยงภายใต้โครงการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X สำหรับเครื่องปั่นเหวี่ยงครอบคลุมประเภทต่างๆ เช่น:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เครื่องปั่นเหวี่ยงห้องปฏิบัติการ</li>
          <li>เครื่องแยกอุตสาหกรรม</li>
          <li>เครื่องปั่นเหวี่ยงแบบมีระบบทำความเย็น</li>
          <li>เครื่องปั่นเหวี่ยงความเร็วสูง</li>
          <li>เครื่องปั่นเหวี่ยงก๊าซ</li>
          <li>เครื่องปั่นเหวี่ยงแบบตะกร้า</li>
          <li>เครื่องปั่นเหวี่ยงแบบดีแคนเตอร์</li>
          <li>เครื่องปั่นเหวี่ยงแบบต่อเนื่องและแบบแบตช์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ประเภททั้งหมดนี้ต้องเป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS)
          เช่น IS 16819:2018/ISO 12100:2010 (ความปลอดภัยของเครื่องจักร
          หลักการทั่วไปสำหรับการออกแบบ - การประเมินความเสี่ยงและการลดความเสี่ยง)
          ทุกประเภทต้องเป็นไปตามมาตรฐานอินเดีย (รหัส IS) ที่เหมาะสมสำหรับคุณภาพ
          ความปลอดภัย และประสิทธิภาพการใช้พลังงาน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเครื่องปั่นเหวี่ยง
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ระบุมาตรฐานที่เกี่ยวข้อง: อ้างอิงรหัส IS
            ที่เกี่ยวข้องสำหรับประเภทเครื่องปั่นเหวี่ยงของคุณ
          </li>
          <li>
            การทดสอบผลิตภัณฑ์:
            ทำการทดสอบประสิทธิภาพและความปลอดภัยที่จำเป็นตามมาตรฐานอุตสาหกรรม
            ในห้องปฏิบัติการที่ได้รับการรับรองจาก BIS
          </li>
          <li>
            การตรวจสอบโรงงาน:
            ตรวจสอบระบบประกันคุณภาพที่สถานที่ผลิตโดยเจ้าหน้าที่ BIS
          </li>
          <li>
            การสมัครและเอกสาร: จัดเตรียมข้อกำหนดทางเทคนิค คู่มือคุณภาพ
            และรายงานการทดสอบ
          </li>
          <li>
            การออกใบอนุญาต BIS สำหรับเครื่องปั่นเหวี่ยง: คุณสามารถติดเครื่องหมาย
            BIS ได้หลังจากได้รับการอนุมัติ
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง: BIS
            ตรวจสอบและทำการตรวจสอบโดยไม่แจ้งล่วงหน้าเพื่อการปฏิบัติตามมาตรฐาน
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          การลงโทษสำหรับการไม่ปฏิบัติตาม
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ไม่มีเครื่องปั่นเหวี่ยงทุกรุ่นที่ได้รับการรับรองด้วยการรับรอง
          BIS สำหรับเครื่องปั่นเหวี่ยงภายในวันที่ 1 กันยายน 2026
          เผชิญความเสี่ยง:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            การขาย/นำเข้าถูกห้ามสำหรับเครื่องปั่นเหวี่ยงที่ไม่ได้รับการรับรอง
          </li>
          <li>การยึดอุปกรณ์ที่ไม่ปฏิบัติตามและการลงโทษทางการเงิน</li>
          <li>จะทำให้คุณไม่มีคุณสมบัติสำหรับการประมูลของรัฐบาลหรือ PSU</li>
          <li>ทุนของแบรนด์ได้รับผลกระทบอย่างถาวรในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การนำการรับรอง BIS Scheme X สำหรับเครื่องปั่นเหวี่ยงมาใช้ใน OTR 2024
          เป็นก้าวสำคัญในการนำความปลอดภัย ประสิทธิภาพ
          และคุณภาพมาสู่ภาคอุตสาหกรรมและห้องปฏิบัติการในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ผู้ผลิต ผู้นำเข้า
          และผู้ส่งออกได้รับประโยชน์จากกระบวนการนี้โดยการรักษาความปลอดภัยการรับรอง
          BIS สำหรับเครื่องปั่นเหวี่ยง การได้รับใบอนุญาต BIS
          สำหรับเครื่องปั่นเหวี่ยง และการติดเครื่องหมาย BIS
          สำหรับเครื่องปั่นเหวี่ยงบนผลิตภัณฑ์ของพวกเขา
          แสดงให้เห็นว่าผลิตภัณฑ์ของพวกเขาเป็นไปตามระบบกฎระเบียบของตลาดท้องถิ่นและความต้องการของลูกค้า
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
