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
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsThai = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default CompressorsThai;

const CompressorsMetaTags = () => {
  const title = "การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์";
  const description =
    "การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์ การประกอบ หรือส่วนประกอบเป็นข้อบังคับภายใต้กฎระเบียบทางเทคนิค Omnibus, 2024 เพิ่มความปลอดภัยของผลิตภัณฑ์ มาตรฐานในอินเดีย";
  const keywords =
    "การรับรอง BIS สำหรับคอมเพรสเซอร์, การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์, การรับรอง Scheme X สำหรับคอมเพรสเซอร์, BIS สำหรับคอมเพรสเซอร์, OTR สำหรับคอมเพรสเซอร์";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์ในอินเดีย | คู่มือฉบับสมบูรณ์";
  const ogDescription =
    "เรียนรู้ทุกอย่างเกี่ยวกับการรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์ในอินเดีย ทำความเข้าใจการปฏิบัติตาม OTR 2024 กระบวนการใบอนุญาต BIS ข้อกำหนดเครื่องหมาย ISI และวิธีการรับรองก่อนกำหนดเวลากันยายน 2026";

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

const CompressorsBreadcrumb = () => {
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
                    BIS Scheme X สำหรับคอมเพรสเซอร์
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

const CompressorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const CompressorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X สำหรับคอมเพรสเซอร์
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="ใบอนุญาต BIS Scheme X สำหรับคอมเพรสเซอร์"
            alt="การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          คอมเพรสเซอร์เป็นอุปกรณ์สำคัญในอุตสาหกรรมต่างๆ เช่น การทำความเย็น HVAC
          ปิโตรเคมี การผลิต การแปรรูปอาหาร และการใช้งานเภสัชกรรม
          อุตสาหกรรมอินเดียที่เติบโตอย่างรวดเร็วกำลังเติบโตอย่างรวดเร็ว
          และคุณภาพและความปลอดภัยของคอมเพรสเซอร์เป็นความกังวลหลัก
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อให้แน่ใจว่าสิ่งเดียวกัน Bureau of Indian Standards (BIS)
          ได้ดำเนินการรับรอง BIS สำหรับคอมเพรสเซอร์ภายใต้การรับรอง Scheme X
          การรับรองนี้รับประกันว่าคอมเพรสเซอร์ทุกตัวที่นำเข้ามาในดินแดนอินเดียเป็นไปตามมาตรฐานความปลอดภัย
          ประสิทธิภาพ และประสิทธิภาพที่กำหนด
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          ในคู่มือนี้ เรามีการรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์และ OTR
          สำหรับคอมเพรสเซอร์ รวมถึงวิธีที่ผู้ผลิตจะได้รับใบอนุญาต BIS
          สำหรับคอมเพรสเซอร์เพื่อใช้เครื่องหมาย BIS สำหรับคอมเพรสเซอร์ในอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ทำไม BIS สำหรับคอมเพรสเซอร์จึงสำคัญ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          คอมเพรสเซอร์ใช้ใน:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>ระบบทำความเย็น/เครื่องปรับอากาศ</li>
          <li>ท่อส่งก๊าซและที่เก็บ</li>
          <li>โรงงานแปรรูปน้ำมันและก๊าซ</li>
          <li>การติดตั้งโรงไฟฟ้าและโรงงานอุตสาหกรรมเคมี</li>
          <li>การผลิตอาหารและเครื่องดื่ม</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละประเภทต้องเป็นไปตามมาตรฐานอินเดียที่ใช้บังคับ (รหัส IS) เช่น IS
          17093:2019
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากไม่มี BIS สำหรับคอมเพรสเซอร์
          ผลิตภัณฑ์ที่ด้อยกว่าหรือไม่มีเครื่องหมายอาจทำให้เกิด:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>ความเสียหาย ช่วงเวลาบำรุงรักษา และเวลาหยุดทำงาน</li>
          <li>การผลิตพลังงานที่สิ้นเปลืองต่อบิลสาธารณูปโภคพลังงานสูง</li>
          <li>
            ความเสี่ยงด้านความปลอดภัย เช่น ความร้อนสูงเกินไปหรือการรั่วไหล
          </li>
          <li>การสูญเสียชื่อเสียงและความเสียหายทางการเงิน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          ดังนั้นเครื่องหมาย BIS สำหรับคอมเพรสเซอร์ที่ได้รับการรับรอง ISI
          จึงเป็นหลักประกันความปลอดภัย ความน่าเชื่อถือ และคุณภาพ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          การรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          การรับรอง BIS Scheme X
          สำหรับคอมเพรสเซอร์เป็นโครงการประเมินความสอดคล้องในอินเดียภายใต้กฎระเบียบการประเมินความสอดคล้อง
          BIS, 2018
          เพื่อให้แน่ใจว่าทั้งผู้ผลิตในประเทศและต่างประเทศปฏิบัติตามมาตรฐานคุณภาพอินเดีย
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          คุณสมบัติของใบรับรอง Scheme X สำหรับคอมเพรสเซอร์:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>บังคับสำหรับผู้ผลิตทุกราย (ทั้งอินเดียและต่างประเทศ)</li>
          <li>ครอบคลุมคอมเพรสเซอร์ประเภทต่างๆ ที่ประกาศภายใต้มาตรฐานอินเดีย</li>
          <li>
            มีการทดสอบโดยบุคคลที่สาม การตรวจสอบโรงงาน
            และการตรวจสอบการปฏิบัติตามกฎระเบียบเป็นระยะ
          </li>
          <li>
            อนุญาตให้ใช้เครื่องหมาย BIS
            สำหรับคอมเพรสเซอร์บนผลิตภัณฑ์ของผู้ถือใบอนุญาตเป็นผลิตภัณฑ์ที่ได้รับการรับรอง
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR สำหรับคอมเพรสเซอร์
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กฎระเบียบทางเทคนิค Omnibus (OTR)
          สำหรับคอมเพรสเซอร์ที่เผยแพร่โดยกระทรวงอุตสาหกรรมหนักในปี 2024
          กำหนดให้มีการรับรอง Scheme X สำหรับคอมเพรสเซอร์
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          กำหนดเวลาการปฏิบัติตาม: ในวันที่ 1 กันยายน 2026
          ผู้ผลิตและผู้นำเข้าทั้งหมดต้องมีใบอนุญาต BIS
          สำหรับคอมเพรสเซอร์ที่ถูกต้องภายใต้ Scheme – X การไม่ปฏิบัติตามใดๆ
          จะส่งผลให้มีการห้ามขายและนำเข้าคอมเพรสเซอร์ที่ไม่มีใบรับรองในอินเดียทั้งหมด
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ข้อดีของการรับรอง BIS สำหรับคอมเพรสเซอร์
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ความปลอดภัยและประสิทธิภาพ: ช่วยหลีกเลี่ยงอันตราย เช่น การรั่วไหล
            ความร้อนสูงเกินไป และความล้มเหลวของเครื่อง
          </li>
          <li>
            การเข้าถึงตลาด: คอมเพรสเซอร์ที่รับรองโดย BIS
            สามารถใช้ในการประมูลสาธารณะและโครงการของรัฐบาล
          </li>
          <li>
            ความเชื่อมั่นของผู้บริโภค: เครื่องหมาย BIS
            สำหรับคอมเพรสเซอร์ให้ความมั่นใจแก่ผู้ซื้อว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดีย
          </li>
          <li>
            ข้อได้เปรียบในการแข่งขัน:
            เฉพาะแบรนด์ที่ได้รับการรับรองเท่านั้นที่จะได้รับความไว้วางใจและความชอบของตลาดมากขึ้น
          </li>
          <li>
            การเข้าถึงตลาดที่ง่ายสำหรับแบรนด์ระหว่างประเทศ: ใบอนุญาต BIS
            สำหรับคอมเพรสเซอร์อำนวยความสะดวกในการเข้าถึงตลาดอินเดียอย่างง่ายดายสำหรับผู้ผลิตต่างประเทศ
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ประเภทคอมเพรสเซอร์ที่ครอบคลุมใน BIS Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS Scheme X มีให้สำหรับคอมเพรสเซอร์ประเภทต่างๆ เช่น:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>คอมเพรสเซอร์แบบลูกสูบ Positive-Displacement</li>
          <li>คอมเพรสเซอร์แบบโรตารี</li>
          <li>คอมเพรสเซอร์แบบสกรู</li>
          <li>คอมเพรสเซอร์แบบเทอร์โบ</li>
          <li>คอมเพรสเซอร์แบบไหลตามแนวแกน</li>
          <li>คอมเพรสเซอร์อากาศอุตสาหกรรมและแบบพกพา</li>
          <li>คอมเพรสเซอร์เครื่องปรับอากาศและการทำความเย็น</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          เทคนิคคอมเพรสเซอร์ที่แตกต่างกันต้องเป็นไปตามมาตรฐานอินเดียของแต่ละประเภท
          ซึ่งกำหนดข้อกำหนดสำหรับประสิทธิภาพ การใช้พลังงาน คุณภาพวัสดุ
          และความปลอดภัย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          ขั้นตอนการขอใบอนุญาต BIS สำหรับคอมเพรสเซอร์ – วิธีการสมัคร?
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            ระบุมาตรฐานที่ใช้บังคับ: ค้นหารหัส IS
            ที่เหมาะสมสำหรับคอมเพรสเซอร์ของคุณ
          </li>
          <li>
            การทดสอบผลิตภัณฑ์: ดำเนินการทดสอบประสิทธิภาพ ความปลอดภัย
            และประสิทธิภาพการใช้พลังงานที่จำเป็นในห้องปฏิบัติการที่รับรองโดย BIS
          </li>
          <li>
            การตรวจสอบโรงงาน: บุคลากร BIS
            ทำการเยี่ยมชมสถานที่เพื่อตรวจสอบขั้นตอนการผลิตและวิธีการควบคุมคุณภาพ
          </li>
          <li>
            เอกสารและการสมัคร: รวมรายงานการทดสอบ
            ข้อกำหนดทางเทคนิคและคู่มือคุณภาพพร้อมกับใบสมัคร BIS ของคุณ
          </li>
          <li>
            การออกใบอนุญาต BIS สำหรับคอมเพรสเซอร์: เมื่อได้รับการอนุมัติ
            ผู้ผลิตจะได้รับสิทธิ์ในการใช้เครื่องหมาย BIS สำหรับคอมเพรสเซอร์
          </li>
          <li>
            การปฏิบัติตามอย่างต่อเนื่อง:
            การตรวจสอบการกำกับดูแลเป็นประจำและการทดสอบผลิตภัณฑ์ดำเนินการโดย BIS
            เพื่อการปฏิบัติตามอย่างต่อเนื่อง
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตที่ไม่ได้รับการรับรอง BIS สำหรับคอมเพรสเซอร์ภายในวันที่ 1
          กันยายน 2026 ภายใต้ OTR สำหรับคอมเพรสเซอร์จะถูก:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>การขาย/นำเข้าคอมเพรสเซอร์ที่ไม่ได้ทดสอบประเภทไม่ได้รับอนุญาต</li>
          <li>การยึดสินค้าที่ไม่ปฏิบัติตามและบทลงโทษทางธุรกิจ</li>
          <li>การห้ามจากการประมูลของรัฐบาลและข้อตกลง PSU</li>
          <li>ตลาดอินเดียสูญเสียความไว้วางใจ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การดำเนินการรับรอง BIS Scheme X สำหรับคอมเพรสเซอร์โดย OBR
          สำหรับคอมเพรสเซอร์ (2024) เป็นก้าวสำคัญสำหรับความปลอดภัยในอุตสาหกรรม
          ประสิทธิภาพการใช้พลังงาน และการรับประกันคุณภาพในอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          ผู้ผลิต ผู้นำเข้า และผู้ส่งออกที่ผ่านกระบวนการรับใบรับรอง BIS
          สำหรับคอมเพรสเซอร์ และได้รับใบรับรอง BIS
          สำหรับคอมเพรสเซอร์จะได้รับสิทธิ์ในการเป็นส่วนหนึ่งของตลาดนี้โดยการรับประกันว่าผลิตภัณฑ์ที่พวกเขานำเสนอต่อผู้บริโภคอินเดียถือว่าปลอดภัยในการใช้งาน
          มีความเสี่ยงต่อสิ่งแวดล้อมต่ำกว่า และมีคุณภาพดี
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
