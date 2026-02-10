import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ManyUsersAlsoReadThai from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterThai from "@/components/manual/Footer/FooterThai";

const BISCertificationFibreRopesThai = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default BISCertificationFibreRopesThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีน | IS 8674:2013 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีน - คู่มือ IS 8674:2013";
  const twitterTitle =
    "ใบอนุญาต BIS สำหรับเชือกเส้นใยโพลีเอทิลีน | IS 8674:2013";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนตาม IS 8674:2013 ขั้นตอน เอกสาร การทดสอบ ต้นทุน และระยะเวลาในการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์การรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนตาม IS 8674:2013 รู้ขั้นตอน ต้นทุน เอกสาร การทดสอบ และประโยชน์ใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนตาม IS 8674:2013 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS เชือกเส้นใยโพลีเอทิลีน, ใบอนุญาต BIS เชือกเส้นใยโพลีเอทิลีน, IS 8674:2013, การรับรอง BIS เชือกเส้นใยโพลีเอทิลีน";
  const websiteUrl =
    "https://bis-certifications.com/th/blogs/isi-products/chueak-sen-yai-polie-thilene-8674";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
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
                    <Link to="/Blogs">บทความล่าสุด</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    ใบรับรอง BIS เชือกเส้นใยโพลีเอทิลีน – IS 8674:2013
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS เชือกเส้นใยโพลีเอทิลีน – คู่มือฉบับสมบูรณ์ IS 8674:2013
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="ใบอนุญาต BIS เชือกเส้นใยโพลีเอทิลีน"
            alt="ใบรับรอง BIS เชือกเส้นใยโพลีเอทิลีน - IS 8674:2013 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          เชือกเส้นใยโพลีเอทิลีนใช้กันอย่างแพร่หลายทั่วอินเดียในการปฏิบัติงานทางทะเล
          การประมง ท่าเรือ เกษตรกรรม การก่อสร้าง ลอจิสติกส์ การขนส่ง
          และกิจกรรมอุตสาหกรรมทั่วไป น้ำหนักเบา อัตราส่วนความแข็งแรงต่อน้ำหนักสูง
          ทนความชื้น สารเคมี และการสึกหรอ จึงเหมาะกับสภาพแวดล้อมที่ demanding
          แต่เมื่อเชือกเส้นใยเสียภายใต้ภาระเนื่องจากคุณภาพต่ำหรือการผลิตต่ำกว่ามาตรฐาน
          ผลที่ตามมาอาจรุนแรง ตั้งแต่ความเสียหายของอุปกรณ์ บาดเจ็บสาหัส
          จนถึงการสูญเสียชีวิต
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เพื่อความปลอดภัย คุณภาพสม่ำเสมอ และความน่าเชื่อถือของประสิทธิภาพ
          รัฐบาลอินเดียกำหนดให้การรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนเป็นข้อบังคับภายใต้
          IS 8674:2013 ผู้ผลิตหรือผู้นำเข้าทุกรายที่จัดหาเชือกเส้นใยโพลีเอทิลีนในตลาดอินเดียต้องได้รับใบรับรอง
          BIS สำหรับเชือกเส้นใยโพลีเอทิลีนที่ถูกต้อง หากไม่มีใบรับรองนี้
          ผลิตภัณฑ์ถือว่าไม่เป็นไปตามข้อกำหนดและอาจถูกปรับ ยึดสินค้า
          หรือห้ามจำหน่าย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หน้ารายละเอียดผลิตภัณฑ์นี้จัดทำสำหรับผู้ผลิต ผู้นำเข้า ผู้ส่งออก
          ผู้ค้า ผู้จัดจำหน่าย ซัพพลายเออร์ทางทะเล ผู้รับเหมาก่อสร้างโครงสร้างพื้นฐาน
          และผู้ขายอีคอมเมิร์ซ อธิบายกรอบการรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนอย่างครบถ้วน
          รวมถึงข้อกำหนดมาตรฐาน ขั้นตอนการทดสอบ เอกสาร ต้นทุน ระยะเวลา
          และความรับผิดชอบในการปฏิบัติตาม หากคุณวางแผนจะขอใบอนุญาต BIS
          สำหรับเชือกเส้นใยโพลีเอทิลีน คู่มือนี้จะช่วยให้คุณดำเนินการได้อย่างชัดเจนและมั่นใจ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS คือระบบการประเมินความสอดคล้องของผลิตภัณฑ์ที่ดำเนินการโดยสำนักงานมาตรฐานอินเดีย
          (BIS) ซึ่งเป็นหน่วยงานมาตรฐานแห่งชาติของอินเดีย BIS ย่อมาจาก Bureau of Indian
          Standards ก่อตั้งภายใต้พระราชบัญญัติ BIS พ.ศ. 2559
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความหมายของใบรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความหมายของใบรับรอง BIS หมายถึงการรับรองอย่างเป็นทางการว่าผลิตภัณฑ์สอดคล้องกับมาตรฐานอินเดีย
          (IS) ที่กำหนดและเป็นไปตามข้อกำหนดด้านความปลอดภัย ความแข็งแรง ความทนทาน
          และประสิทธิภาพ ผลิตภัณฑ์ที่ได้รับรอง BIS ต้องผ่านการทดสอบในห้องปฏิบัติการที่ BIS
          รับรอง และการประเมินผ่านการตรวจสอบโรงงานและการตรวจสอบคุณภาพ
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เครื่องหมาย ISI และเครื่องหมายการรับรอง BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลิตภัณฑ์ที่ได้รับรองภายใต้ BIS จะมีเครื่องหมายการรับรอง BIS
          ที่เรียกกันทั่วไปว่าเครื่องหมาย ISI พร้อมหมายเลขใบอนุญาตเฉพาะ
          เครื่องหมาย BIS สร้างความมั่นใจให้ผู้ซื้อ ผู้ตรวจ และหน่วยงานกำกับดูแลว่าผลิตภัณฑ์เป็นไปตามมาตรฐาน
          BIS ที่ใช้บังคับ
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องมี BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS มีอยู่เพื่อ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปกป้องผู้ใช้จากผลิตภัณฑ์ที่ไม่ปลอดภัยและต่ำกว่ามาตรฐาน</li>
          <li>สร้างความสม่ำเสมอและความน่าเชื่อถือในการผลิต</li>
          <li>บังคับใช้กฎระเบียบของรัฐบาลผ่านประกาศ BIS</li>
          <li>ส่งเสริมความไว้วางใจ คุณภาพ และการค้าที่เป็นธรรมในตลาดอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้กับเชือกเส้นใยโพลีเอทิลีน
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – อธิบายมาตรฐานอินเดีย
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้กับผลิตภัณฑ์นี้คือ IS 8674:2013 ชื่อ
          &quot;Fibre Ropes — Polyethylene — Specification&quot;
          มาตรฐานนี้กำหนดข้อกำหนดสำหรับเชือกเส้นใยโพลีเอทิลีนที่ใช้สำหรับงานทั่วไปและอุตสาหกรรม
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขต IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานครอบคลุม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การก่อสร้างและการจำแนกเชือกเส้นใยโพลีเอทิลีน</li>
          <li>ข้อกำหนดวัตถุดิบและคุณลักษณะเส้นใย</li>
          <li>เส้นผ่านศูนย์กลางเชือก ความหนาแน่นเชิงเส้น และความคลาดเคลื่อนที่อนุญาต</li>
          <li>น้ำหนักบรรทุกขาดขั้นต่ำและข้อกำหนดความแข็งแรง</li>
          <li>การทำเครื่องหมาย ติดฉลาก และการบรรจุ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความปลอดภัย ประสิทธิภาพ และวัตถุประสงค์การทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013 มีวัตถุประสงค์เพื่อให้มั่นใจว่าเชือกเส้นใยโพลีเอทิลีน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>มีความแข็งแรงดึงสม่ำเสมอ</li>
          <li>ทำงานได้อย่างน่าเชื่อถือภายใต้ภาระสถิตและไดนามิก</li>
          <li>ทนความชื้น การเน่าเปื่อย และการสัมผัสสารเคมี</li>
          <li>ปลอดภัยสำหรับการยก ลาก ผูกเรือ และผูก</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ใครต้องปฏิบัติตาม
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การปฏิบัติตาม IS 8674:2013 เป็นข้อบังคับสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดียของเชือกเส้นใยโพลีเอทิลีน</li>
          <li>ผู้นำเข้าที่นำเข้าเชือกโพลีเอทิลีนเข้าอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศที่ขายผ่านนิติบุคคลอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงเป็นข้อบังคับสำหรับเชือกเส้นใยโพลีเอทิลีน
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. ความเสี่ยงด้านความปลอดภัยของผู้บริโภคและผู้ปฏิบัติงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เชือกเส้นใยโพลีเอทิลีนมักใช้ในการปฏิบัติงานที่รับน้ำหนักและสำคัญต่อความปลอดภัย
          เชือกต่ำกว่ามาตรฐานอาจขาดกะทันหัน นำไปสู่อุบัติเหตุ บาดเจ็บ
          ความเสียหายของอุปกรณ์ และความสูญเสียทางการเงิน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. การปฏิบัติตามข้อกำหนดของรัฐบาล
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ภายใต้ประกาศ BIS และกฎระเบียบการควบคุมคุณภาพ เชือกเส้นใยที่อยู่ภายใต้
          IS 8674:2013 ต้องได้รับรอง BIS ก่อนการขาย จัดหา หรือจำหน่ายในอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. ผลทางกฎหมาย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การขายเชือกเส้นใยโพลีเอทิลีนโดยไม่มีใบรับรอง BIS อาจส่งผลให้:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สินค้าถูกยึด</li>
          <li>ถูกปรับเงิน</li>
          <li>สัญญาและงานประมูลถูกยกเลิก</li>
          <li>ถูกดำเนินคดีตามพระราชบัญญัติ BIS พ.ศ. 2559</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. ประโยชน์ด้านตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนช่วยเพิ่มการยอมรับในตลาด
          สร้างความไว้วางใจของผู้ซื้อ และเปิดโอกาสเข้าร่วมโครงการรัฐบาล
          รัฐวิสาหกิจ ทะเล และโครงสร้างพื้นฐาน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนทีละขั้น
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การใช้บังคับและการระบุมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนแรกคือยืนยันว่าผลิตภัณฑ์อยู่ภายใต้ IS 8674:2013
          รวมถึงการก่อสร้างเชือก ช่วงเส้นผ่านศูนย์กลาง และการใช้งานที่ตั้งใจ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนการสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้องส่งใบสมัคร BIS ผ่านพอร์ทัลสมัคร BIS ออนไลน์ ใบสมัครประกอบด้วย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดผลิตภัณฑ์และรุ่น</li>
          <li>ข้อมูลหน่วยผลิต</li>
          <li>มาตรฐาน BIS ที่ใช้</li>
          <li>รายละเอียดการควบคุมคุณภาพและการทดสอบ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งนี้เริ่มกระบวนการลงทะเบียนใบรับรอง BIS
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ค่าธรรมเนียมและโครงสร้างต้นทุน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ต้นทุนการรับรอง BIS โดยทั่วไปรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าทดสอบผลิตภัณฑ์</li>
          <li>ค่าตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาต</li>
          <li>ค่าธรรมเนียมทำเครื่องหมายรายปี</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ต้นทุนรวมของการรับรอง BIS ขึ้นอยู่กับรุ่นเชือก ช่วงเส้นผ่านศูนย์กลาง
          และขอบเขตการทดสอบ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์ (การทดสอบตามมาตรฐานโดยละเอียด)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ตัวอย่างเชือกเส้นใยโพลีเอทิลีนจะถูกทดสอบในห้องปฏิบัติการที่ BIS รับรองอย่างเคร่งครัดตาม
          IS 8674:2013
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบโรงงานและการตรวจสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ดำเนินการตรวจสอบโรงงานเพื่อยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิตและการควบคุม</li>
          <li>ขั้นตอนการตรวจสอบวัตถุดิบ</li>
          <li>การตรวจสอบคุณภาพระหว่างกระบวนการ</li>
          <li>สิ่งอำนวยความสะดวกในการทดสอบและสอบเทียบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การออกใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          หลังการทดสอบและการตรวจสอบสำเร็จ BIS จะออกใบอนุญาต Bureau of Indian Standards
          ให้ใช้เครื่องหมาย ISI บนเชือกเส้นใยโพลีเอทิลีนที่ได้รับรอง
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังการรับรอง ผู้ถือใบอนุญาตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รักษาคุณภาพที่สม่ำเสมอ</li>
          <li>ดำเนินการทดสอบเป็นประจำ</li>
          <li>อนุญาตการตรวจสอบเฝ้าระวัง</li>
          <li>ต่ออายุใบอนุญาต BIS เป็นระยะ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขอบเขตใบอนุญาต BIS ตาม IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบอนุญาต BIS ใช้กับเชือกเส้นใยโพลีเอทิลีนที่ใช้สำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การปฏิบัติงานทางทะเลและการประมง</li>
          <li>ท่าเรือ การขนส่ง และลอจิสติกส์</li>
          <li>เกษตรกรรมและการใช้งานทั่วไป</li>
          <li>การใช้งานอุตสาหกรรมและการพาณิชย์</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขอบเขตจำกัดเฉพาะเชือกที่สอดคล้องกับข้อกำหนด IS 8674:2013 เท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่ต้องใช้สำหรับการรับรอง BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หนังสือรับรองการจดทะเบียนโรงงาน</li>
          <li>ผังกระบวนการผลิต</li>
          <li>รายการเครื่องจักรและอุปกรณ์ทดสอบ</li>
          <li>แผนควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หนังสือรับรองการจดทะเบียนบริษัท</li>
          <li>การจดทะเบียน GST</li>
          <li>การอนุญาตเครื่องหมายการค้า (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ข้อกำหนดผลิตภัณฑ์และแบบ drawing</li>
          <li>รายละเอียดการก่อสร้างเชือกและวัสดุ</li>
          <li>ข้อมูลเส้นผ่านศูนย์กลางและน้ำหนักบรรทุกขาด</li>
          <li>ขั้นตอนการทดสอบภายใน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มสมัคร BIS</li>
          <li>รายงานการทดสอบจากห้อง lab ที่ BIS รับรอง</li>
          <li>หนังสือรับรองและคำประกาศ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          เหล่านี้เป็นชุดเอกสารการรับรอง BIS ที่ครบถ้วน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 8674:2013
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การทดสอบที่บังคับรวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การวัดเส้นผ่านศูนย์กลางและความหนาแน่นเชิงเส้น</li>
          <li>การทดสอบน้ำหนักบรรทุกขาดและความแข็งแรงดึง</li>
          <li>การทดสอบการยืดตัว</li>
          <li>การตรวจสอบการก่อสร้างและ lay</li>
          <li>การตรวจสอบด้วยสายตาและคุณภาพผิวสำเร็จ</li>
          <li>การปฏิบัติตามการทำเครื่องหมายและติดฉลาก</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบทั้งหมดต้องดำเนินการในห้องปฏิบัติการที่ BIS รับรองเท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ปัญหาที่พบบ่อยและวิธีหลีกเลี่ยง
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          คุณภาพวัตถุดิบไม่สม่ำเสมอ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          วิธีแก้: ใช้เส้นใยโพลีเอทิลีนเกรดควบคุมและซัพพลายเออร์ที่ได้รับการอนุมัติ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบไม่ผ่าน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          วิธีแก้: ดำเนินการทดสอบล่วงหน้าภายในและปรับปรุงความสม่ำเสมอของกระบวนการ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ข้อผิดพลาดในเอกสาร
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          วิธีแก้: เตรียมเอกสารที่ถูกต้องและครบถ้วนก่อนส่ง BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับผู้ผลิตและผู้นำเข้า
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปฏิบัติตามกฎระเบียบอินเดีย</li>
          <li>ลดความเสี่ยงจากการถูกปรับและยึดสินค้า</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ทางการค้า
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>มีสิทธิ์เข้าร่วมสัญญารัฐบาล รัฐวิสาหกิจ และทางทะเล</li>
          <li>ได้รับการยอมรับจากผู้ซื้ออุตสาหกรรมมากขึ้น</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ประโยชน์ด้านแบรนด์
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความไว้วางใจผ่านเครื่องหมายการรับรอง BIS</li>
          <li>ความน่าเชื่อถือของแบรนด์ที่เพิ่มขึ้น</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การขยายตลาด
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>เข้าถึงตลาดในประเทศและตลาดส่งออกที่ถูกควบคุม</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การไม่ปฏิบัติตามข้อกำหนด BIS อาจนำไปสู่:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การปรับเงินจำนวนมาก</li>
          <li>การยึดผลิตภัณฑ์ที่ไม่เป็นไปตามข้อกำหนด</li>
          <li>ข้อจำกัดการนำเข้าและการขาย</li>
          <li>การดำเนินคดีทางกฎหมาย</li>
          <li>การห้ามตลาดถาวร</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องมีการรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีน?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างประเทศ</li>
          <li>ผู้ค้าและผู้จัดจำหน่าย</li>
          <li>ผู้ขายอีคอมเมิร์ซ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          นิติบุคคลใดที่วางเชือกเส้นใยโพลีเอทิลีนในตลาดอินเดียต้องมั่นใจว่าปฏิบัติตาม BIS
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนภายใต้ IS 8674:2013
          เป็นความจำเป็นทางกฎหมายและข้อได้เปรียบเชิงกลยุทธ์สำหรับธุรกิจที่ดำเนินงานในอินเดีย
          การรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีนสร้างความปลอดภัย ความแข็งแรง
          และความน่าเชื่อถือของผลิตภัณฑ์ ขณะเดียวกันปกป้องผู้ใช้และเสริมความน่าเชื่อถือของแบรนด์
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ผลิตและผู้นำเข้าที่ได้รับใบอนุญาต BIS ที่ถูกต้องสำหรับเชือกเส้นใยโพลีเอทิลีนสามารถเข้าถึงตลาดที่ถูกควบคุม
          มีส่วนร่วมในสัญญามูลค่าสูง และหลีกเลี่ยงความเสี่ยงทางกฎหมายได้อย่างมั่นใจ
          ด้วยการเตรียมการที่เหมาะสม เอกสารที่ถูกต้อง และคำแนะนำจากผู้เชี่ยวชาญ
          กระบวนการรับรอง BIS จะราบรื่น มีประสิทธิภาพ และเป็นประโยชน์อย่างมากสำหรับการเติบโตระยะยาว
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับเชือกเส้นใยโพลีเอทิลีน
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. การรับรอง BIS เป็นข้อบังคับสำหรับเชือกเส้นใยโพลีเอทิลีนในอินเดียหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การรับรอง BIS ภายใต้ IS 8674:2013 เป็นข้อบังคับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS ย่อมาจากอะไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards (สำนักงานมาตรฐานอินเดีย)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. ขายเชือกโพลีเอทิลีนโดยไม่มีใบรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ไม่ได้ การขายเชือกที่ไม่มีใบรับรองเป็นสิ่งผิดกฎหมายในอินเดีย
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. ต้นทุนใบรับรอง BIS เป็นเท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ขึ้นอยู่กับรุ่นผลิตภัณฑ์และขอบเขตการทดสอบ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. กระบวนการรับรอง BIS ใช้เวลานานเท่าไร?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              โดยทั่วไป 6–10 สัปดาห์
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. เครื่องหมาย ISI เป็นข้อบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การทำเครื่องหมาย ISI เป็นข้อบังคับหลังการรับรอง
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. เส้นผ่านศูนย์กลางเชือกหลายขนาดอยู่ภายใต้ใบอนุญาตเดียวได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ขึ้นอยู่กับการปฏิบัติตามและขอบเขตการทดสอบ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. การตรวจสอบโรงงานเป็นข้อบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ BIS ดำเนินการตรวจสอบโรงงาน
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. สตาร์ทอัพสมัครรับรอง BIS ได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ หากสถานที่ผลิตเป็นไปตามข้อกำหนด
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. การรับรอง BIS ต้องต่ออายุหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ การต่ออายุเป็นระยะเป็นข้อบังคับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. ถ้าการทดสอบผลิตภัณฑ์ไม่ผ่านจะเกิดอะไรขึ้น?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ต้องดำเนินการแก้ไขและทดสอบใหม่
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. ห้องปฏิบัติการที่ BIS รับรองเป็นข้อบังคับหรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ มีเฉพาะห้อง lab ที่ BIS อนุมัติเท่านั้นที่ได้รับการยอมรับ
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. ผู้ผลิตต่างประเทศสมัครโดยตรงได้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ได้ ผ่านตัวแทนอินเดียที่ได้รับอนุญาต
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. เชือกประมงอยู่ภายใต้มาตรฐานนี้หรือไม่?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              ใช่ หากสอดคล้องกับ IS 8674:2013
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. การรับรอง BIS หมายถึงอะไรสำหรับผู้ซื้อ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              สร้างความมั่นใจในความปลอดภัย ความแข็งแรง และคุณภาพที่สม่ำเสมอ
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadThai />
        <FaqAuthorThai questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
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
                src="/services-images/BIS.jpg"
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองการจดทะเบียน CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การจดทะเบียน BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ใบรับรองการจดทะเบียน BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
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
