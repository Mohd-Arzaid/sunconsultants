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
import FooterThai from "@/components/manual/Footer/FooterThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const CranesThai = () => {
  return (
    <div className="relative w-full">
      <CranesMetaTags />

      <CranesBreadcrumb />
      <CranesMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default CranesThai;

const CranesMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับเครน";
  const description =
    "สำนักงานมาตรฐานอินเดีย (BIS) ได้แนะนำการรับรอง Scheme X เป็นข้อบังคับสำหรับเครนทุกประเภทพร้อมกับการประกอบ ชิ้นส่วนย่อย และส่วนประกอบ";
  const keywords =
    "การรับรอง BIS สำหรับเครน, การรับรอง BIS Scheme X สำหรับเครน, การรับรอง Scheme X สำหรับเครน, BIS สำหรับเครน, OTR สำหรับเครน";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับเครนในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับเครนในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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

const CranesBreadcrumb = () => {
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
                    BIS Scheme X สำหรับเครน
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

const CranesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const CranesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X สำหรับเครน
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="การรับรอง BIS Scheme X สำหรับเครน"
            title="ใบอนุญาต BIS Scheme X สำหรับเครน"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เครนใช้หลักในการยกและขนส่งวัสดุ รวมถึงในการผลิต การก่อสร้าง การผลิต
          และการทำเหมือง เนื่องจากฟังก์ชันของมันสามารถมีความสำคัญต่อความปลอดภัย
          เครนที่ไม่ผ่านมาตรฐานหรือมีคุณภาพต่ำอาจทำให้เกิดการลื่นและตก
          ความเสียหายของอุปกรณ์ หรือความสูญเสียที่มีค่าใช้จ่ายสูง
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เนื่องจากอันตรายเหล่านี้ Bureau of Indian Standards (BIS)
          ได้ทำให้การรับรอง BIS สำหรับเครนเป็นข้อบังคับภายใต้การรับรอง Scheme –
          X สิ่งนี้รับประกันว่าเครนที่ใช้ในอินเดียนั้นปลอดภัย เชื่อถือได้
          มีประสิทธิภาพ และมีคุณภาพระดับโลก
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในบล็อกนี้ เราจะแนะนำคุณเกี่ยวกับความสำคัญของการลงทะเบียน BIS Scheme X
          สำหรับเครน ด้านกฎหมายของ OTR สำหรับเครน และวิธีรับใบอนุญาต BIS
          สำหรับเครนรวมถึงการติดเครื่องหมายมาตรฐาน BIS สำหรับเครน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไม BIS สำหรับเครนจึงสำคัญ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครนใช้กันอย่างแพร่หลายใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>งานก่อสร้างและสาธารณูปโภค</li>
          <li>ท่าเรือ อู่ต่อเรือ และศูนย์โลจิสติกส์อื่นๆ</li>
          <li>โรงงานและโรงงานประกอบ</li>
          <li>การทำเหมืองโลหะและการจัดการวัสดุหนัก</li>
          <li>โรงไฟฟ้าและอุตสาหกรรมอื่นๆ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากไม่มี BIS สำหรับเครน อุปกรณ์ที่ไม่มีใบรับรองอาจทำให้เกิด:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ความเสียหายทางกลและอุบัติเหตุ</li>
          <li>
            การลดลงของความพร้อมใช้งานและการเพิ่มขึ้นของค่าใช้จ่ายในการบำรุงรักษา
          </li>
          <li>การสูญเสียคุณสมบัติสำหรับโครงการของรัฐบาล</li>
          <li>คนงานและสาธารณูปโภคเสี่ยงต่ออันตรายด้านความปลอดภัย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เครื่องหมาย BIS
          สำหรับเครนให้ความมั่นใจแก่ผู้บริโภคและหน่วยงานกำกับดูแลว่าผลิตภัณฑ์เป็นไปตามมาตรฐานคุณภาพและความปลอดภัยของอินเดียที่เข้มงวด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับเครนคืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง Scheme X สำหรับเครนภายใต้ BIS
          เป็นข้อบังคับตามกฎระเบียบการประเมินความสอดคล้อง BIS, 2018
          ซึ่งกำหนดให้มีการรับรองผลิตภัณฑ์สำหรับเครื่องจักรที่สำคัญ
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          คุณสมบัติหลักของ Scheme X สำหรับเครน:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>จำเป็นสำหรับผู้ผลิตในประเทศและต่างประเทศ</li>
          <li>ใช้กับหมวดหมู่หลักของเครนทั้งหมดและประกาศภายใต้มาตรฐานอินเดีย</li>
          <li>
            การทดสอบผลิตภัณฑ์
            การตรวจสอบโรงงานและการประเมินการปฏิบัติตามอย่างต่อเนื่องเป็นข้อบังคับ
          </li>
          <li>
            ให้ใบอนุญาตสำหรับการใช้เครื่องหมาย BIS
            บนเครนบนผลิตภัณฑ์ที่ได้รับการรับรอง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับเครน
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กฎระเบียบทางเทคนิค Omnibus (OTR) สำหรับเครน
          ซึ่งได้ประกาศโดยกระทรวงอุตสาหกรรมหนักในปี 2024
          มีวัตถุประสงค์เพื่อกำหนดให้มีการรับรอง
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลา: ผู้ผลิต/ผู้นำเข้าเครนทั้งหมดต้องได้รับใบอนุญาต BIS
          สำหรับเครนภายใต้ Scheme X ภายในวันที่ 1 กันยายน 2026 หลังจากนั้น
          เครนที่ไม่มีใบรับรองไม่สามารถจำหน่ายหรือนำเข้าหรือใช้ในการประมูลสาธารณะในอินเดียได้
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับเครน
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            การปรับปรุงความปลอดภัย:
            เครนที่ได้รับการรับรองลดความล้มเหลวทางกลและอุบัติเหตุ
          </li>
          <li>
            ข้อได้เปรียบทางการตลาด:
            หน่วยงานของรัฐบาลและบริษัทเอกชนให้ความสำคัญกับเครนที่รับรองโดย BIS
            ในการประมูลอิเล็กทรอนิกส์และโครงการขนาดใหญ่
          </li>
          <li>
            ความเชื่อมั่นของผู้บริโภคและผู้รับเหมา: เครื่องหมาย BIS
            สำหรับเครนสร้างความไว้วางใจในคุณภาพและความน่าเชื่อถือ
          </li>
          <li>
            การเข้าสู่ตลาดโลก: สำหรับผู้ผลิตต่างประเทศ ใบอนุญาต BIS
            สำหรับเครนช่วยให้สามารถเข้าสู่ตลาดอินเดียที่ถูกควบคุมได้โดยไม่มีอุปสรรค
          </li>
          <li>
            การปฏิบัติตามกฎหมายอินเดีย: ป้องกันค่าปรับ การยึดทรัพย์
            และการยกเว้นจากสัญญาของรัฐบาล
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทเครนที่รวมอยู่ในการรับรอง Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เครนที่ระบุไว้ภายใต้การรับรอง Scheme X ประกอบด้วยประเภทต่างๆ เช่น:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>เครนหอคอย</li>
          <li>เครนเคลื่อนที่</li>
          <li>เครน Gantry และ Goliath</li>
          <li>เครน OH/BR</li>
          <li>เครน Crawler</li>
          <li>เครน Jib</li>
          <li>เครนลอยน้ำ</li>
          <li>เครนอุตสาหกรรมและโรงงาน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละรุ่นต้องเป็นไปตามมาตรฐานอินเดีย (รหัส IS) ที่เกี่ยวข้อง เช่น IS
          4573:2020 สำหรับข้อกำหนดเครนเคลื่อนที่แบบขับเคลื่อนด้วยพลังงาน และ
          IS/ISO 15442:2012 สำหรับเครน - ข้อกำหนดด้านความปลอดภัยสำหรับเครนโหลด
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ประเภทอุปกรณ์ต้องเป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง (รหัส IS)
          สำหรับการออกแบบ ความจุของโหลด ความปลอดภัย และประสิทธิภาพ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ขั้นตอนการรับใบอนุญาต BIS สำหรับเครน
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            ระบุมาตรฐาน IS ที่เกี่ยวข้อง:
            ระบุมาตรฐานอินเดียที่ใช้บังคับสำหรับประเภทเครนของคุณ
          </li>
          <li>
            การทดสอบในห้องปฏิบัติการที่รับรองโดย BIS:
            จำเป็นต้องทำการทดสอบความปลอดภัยและประสิทธิภาพ
          </li>
          <li>
            การตรวจสอบโรงงาน: BIS ดำเนินการตรวจสอบสถานที่ผลิตและระบบคุณภาพ
          </li>
          <li>
            การสมัครและเอกสาร: นำเสนอรายงานทางเทคนิค ผลการทดสอบ และคู่มือคุณภาพ
          </li>
          <li>
            ใบอนุญาต BIS บนเครน: หลังจากได้รับการอนุมัติ
            ผู้ผลิตมีสิทธิพิเศษในการใช้เครื่องหมาย BIS สำหรับเครน
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง:
            การตรวจสอบและการตรวจสอบเป็นประจำรับประกันการปฏิบัติตามอย่างต่อเนื่อง
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          โทษสำหรับการไม่ปฏิบัติตาม
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          จะเกิดอะไรขึ้นหากใครไม่ปฏิบัติตาม OTR สำหรับเครนและไม่ได้รับการรับรอง
          BIS สำหรับเครนภายในวันที่ 1 กันยายน 2026?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การห้ามขายและนำเข้าเครนที่ไม่มีใบรับรอง</li>
          <li>การยึดผลิตภัณฑ์และค่าปรับจำนวนมาก</li>
          <li>การตัดสิทธิ์จากการประมูลของรัฐบาลและรัฐวิสาหกิจ</li>
          <li>ผลกระทบเชิงลบระยะยาวต่อแบรนด์</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          การบังคับใช้การรับรอง BIS Scheme X
          จะเป็นก้าวสำคัญที่จะเพิ่มความปลอดภัย ความน่าเชื่อถือ
          และจัดหามาตรฐานอุตสาหกรรมทั่วไปในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          สำหรับผู้ผลิต ผู้นำเข้า ผู้ส่งออกเครน สิ่งสำคัญคือต้องมีใบอนุญาต BIS
          สำหรับเครนและสามารถสมัครผ่านพอร์ทัลแอปพลิเคชันออนไลน์สำหรับการลงทะเบียน
          BIS เครนเพื่อปฏิบัติตามมาตรฐาน สร้างความไว้วางใจของผู้บริโภค
          และเพื่อหลีกเลี่ยงความขัดแย้งที่อาจเกิดขึ้นกับ BIS หรือรัฐบาลอินเดีย
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับการผลิตต่างประเทศ
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
              เครื่องหมาย ISI (BIS) สำหรับการผลิตอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
