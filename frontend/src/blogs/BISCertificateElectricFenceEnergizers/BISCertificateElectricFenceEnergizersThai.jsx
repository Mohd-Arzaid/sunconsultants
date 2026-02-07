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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateElectricFenceEnergizersThai = () => {
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

export default BISCertificateElectricFenceEnergizersThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว | IS 302-2-76:1999 ใบอนุญาต BIS";
  const ogTitle =
    "การรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว – คู่มือ IS 302-2-76:1999";
  const twitterTitle =
    "ใบอนุญาต BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว | IS 302-2-76:1999";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้วภายใต้ IS 302-2-76:1999 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มีการรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้วตาม IS 302-2-76:1999 ทราบกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้วภายใต้ IS 302-2-76:1999 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว, ใบอนุญาต BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว, IS 302-2-76:1999, การรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/electric-fence-energizers-is-302-2-76";
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
                    <Link to="/Blogs">บล็อกล่าสุด</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    ใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว – IS
                    302-2-76:1999
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
          การรับรอง BIS เครื่องกำเนิดไฟฟ้ารั้ว – คู่มือสมบูรณ์ IS
          302-2-76:1999
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforElectricFenceEnergizers.png"
            title="ใบอนุญาต BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว"
            alt="ใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว - IS 302-2-76:1999 การรับรอง BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความต้องการเครื่องกำเนิดไฟฟ้ารั้วเพิ่มขึ้นอย่างรวดเร็วทั่ว
          อินเดียเนื่องจากความสนใจในการป้องกันฟาร์ม การจัดการปศุสัตว์
          ความปลอดภัยของพื้นที่ชายแดน และการควบคุมสัตว์ป่า อุปกรณ์เหล่านี้มีบทบาท
          สำคัญในการปกป้องพืชผล สัตว์ และทรัพย์สินโดย
          ส่งพัลส์ไฟฟ้าที่ควบคุมได้ผ่านระบบรั้ว
          อย่างไรก็ตาม เนื่องจากเครื่องกำเนิดไฟฟ้ารั้วเกี่ยวข้องโดยตรงกับไฟฟ้า
          ออก ความเสี่ยงในการสัมผัสของมนุษย์ และอันตรายจากไฟไหม้ ความปลอดภัยและการปฏิบัติตามกฎระเบียบ
          จึงเป็นสิ่งที่จำเป็นต้องทำ
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          ในอินเดีย เครื่องกำเนิดไฟฟ้ารั้วอยู่ภายใต้ขอบเขตของการรับรอง BIS ที่จำเป็น
          ตาม IS 302-2-76:1999 ผู้ผลิตหรือ
          ผู้นำเข้าที่ต้องการขายเครื่องกำเนิดไฟฟ้ารั้วในตลาด
          อินเดียต้องได้รับใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว
          ก่อนการจำหน่าย โดยไม่มีการอนุมัตินี้ ผลิตภัณฑ์จะถูกพิจารณาว่าไม่สอดคล้องและผิดกฎหมายในการขาย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือที่ครอบคลุมนี้ออกแบบมาสำหรับผู้ผลิต ผู้นำเข้า
          แบรนด์ต่างประเทศ สตาร์ทอัพ ผู้จัดจำหน่าย และผู้ขายออนไลน์ที่
          ต้องการความชัดเจนเกี่ยวกับการรับรอง BIS เครื่องกำเนิดไฟฟ้ารั้ว รวมถึง
          ข้อกำหนดทางกฎหมาย การทดสอบ เอกสาร ต้นทุน ระยะเวลา และ
          ภาระหน้าที่ในการปฏิบัติตามกฎระเบียบ หากคุณวางแผนที่จะสมัครใบอนุญาต BIS
          / ใบอนุญาต BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว หน้านี้จะแนะนำ
          คุณทุกขั้นตอนในลักษณะที่ชัดเจน ใช้งานได้จริง และเน้นการปฏิบัติตามกฎระเบียบ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นระบบประเมินความสอดคล้องที่ดำเนินการโดย
          สำนักงานมาตรฐานอินเดีย (BIS) ซึ่งเป็นองค์กรมาตรฐานแห่งชาติของ
          อินเดีย ชื่อเต็มของ BIS คือ สำนักงานมาตรฐานอินเดีย ก่อตั้ง
          ภายใต้พระราชบัญญัติ BIS 2016 เพื่อให้แน่ใจว่าผลิตภัณฑ์ที่ขายในอินเดียมีคุณภาพ ความปลอดภัย ความน่าเชื่อถือ และความสม่ำเสมอ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ใบรับรอง BIS หมายความว่าผลิตภัณฑ์สอดคล้องกับมาตรฐานอินเดียที่ใช้งาน (IS)
          และตรงตามเกณฑ์ความปลอดภัย ประสิทธิภาพ และคุณภาพที่กำหนด โดยให้ความมั่นใจแก่ผู้บริโภคและผู้ควบคุมกฎระเบียบ
          ว่าผลิตภัณฑ์ได้รับการทดสอบและตรวจสอบโดยระบบที่ BIS รับรอง
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เครื่องหมาย ISI และเครื่องหมาย BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          สำหรับผลิตภัณฑ์ไฟฟ้าเช่นเครื่องกำเนิดไฟฟ้ารั้ว การรับรอง BIS
          ได้รับภายใต้แผนเครื่องหมาย ISI เครื่องหมายการรับรอง BIS (เครื่องหมาย ISI)
          ที่แสดงบนผลิตภัณฑ์บ่งบอก
          การปฏิบัติตามมาตรฐาน BIS ที่เกี่ยวข้อง การขายผลิตภัณฑ์ที่มีเครื่องหมาย ISI
          โดยไม่มีใบอนุญาต BIS ที่ถูกต้องเป็นความผิดที่สามารถลงโทษได้
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เหตุผลที่ BIS มีอยู่
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          วัตถุประสงค์หลักของ BIS คือ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ปกป้องความปลอดภัยของผู้บริโภค</li>
          <li>ป้องกันผลิตภัณฑ์ที่ไม่มาตรฐานและไม่ปลอดภัย</li>
          <li>ปรับสอดคล้องการผลิตในอินเดียกับมาตรฐานสากล</li>
          <li>บังคับใช้การปฏิบัติตามกฎระเบียบที่จำเป็นผ่านการประกาศ BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของ IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานนี้ระบุข้อกำหนดความปลอดภัยเฉพาะสำหรับเครื่องกำเนิดไฟฟ้ารั้ว
          ที่มีวัตถุประสงค์เพื่อใช้กับระบบรั้วไฟฟ้าสำหรับ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รั้วเกษตรกรรม</li>
          <li>การควบคุมปศุสัตว์</li>
          <li>การขับไล่สัตว์ป่า</li>
          <li>ความปลอดภัยของพื้นที่ชายแดน</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          ครอบคลุมเครื่องกำเนิดที่ขับเคลื่อนโดย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ไฟฟ้าจากเครือข่าย</li>
          <li>ระบบที่ใช้แบตเตอรี่</li>
          <li>แหล่งจ่ายไฟจากเครือข่ายและแบตเตอรี่รวมกัน</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          วัตถุประสงค์ด้านความปลอดภัยและการทดสอบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้ออกแบบมาเพื่อแก้ไข:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การป้องกันอันตรายจากไฟฟ้าช็อต</li>
          <li>ข้อจำกัดของพลังงานเอาต์พุต</li>
          <li>การควบคุมระยะเวลาและการทำซ้ำของพัลส์</li>
          <li>ระยะห่างของฉนวนและระยะครีปเพจ</li>
          <li>ความเสี่ยงจากไฟไหม้และความร้อนสูงเกินไป</li>
          <li>ความแข็งแรงทางกลและความปลอดภัยของเคส</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ผู้ที่ต้องปฏิบัติตาม
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          การปฏิบัติตาม IS 302-2-76:1999 เป็นที่จำเป็นสำหรับ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตในอินเดีย</li>
          <li>ผู้นำเข้าเครื่องกำเนิดจากต่างประเทศ</li>
          <li>ผู้ผลิตต่างประเทศที่ขายในอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS จึงจำเป็นสำหรับเครื่องกำเนิดไฟฟ้ารั้ว
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. ความปลอดภัยของผู้บริโภคและสัตว์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เครื่องกำเนิดไฟฟ้ารั้วสร้างพัลส์แรงดันสูง การออกแบบที่ไม่เหมาะสม
          หรือเอาต์พุตที่สูงเกินไปอาจทำให้ได้รับบาดเจ็บสาหัส อันตรายจากไฟไหม้ หรือ
          อุบัติเหตุถึงตายได้ การรับรอง BIS ช่วยให้มั่นใจว่าพลังงานเอาต์พุตยังคง
          อยู่ภายในขีดจำกัดที่ปลอดภัย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. ข้อกำหนดทางกฎหมายในอินเดีย
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ภายใต้การประกาศ BIS และพระราชบัญญัติ BIS การขายเครื่องใช้ไฟฟ้าที่ไม่ได้รับการรับรอง
          เป็นสิ่งผิดกฎหมาย ผลิตภัณฑ์ที่ไม่มีการรับรอง BIS
          อาจถูกยึด ห้าม หรือเรียกคืนได้
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. การปฏิบัติตามกฎระเบียบ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          หน่วยงาน เช่น ศุลกากร ทีมตรวจสอบตลาด และแพลตฟอร์มอีคอมเมิร์ซ
          ต้องการใบอนุญาต BIS ที่ถูกต้องสำหรับการลงรายการและการผ่านพิธีการ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. ประโยชน์ด้านตลาดและแบรนด์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS อินเดียสร้างความไว้วางใจ ปรับปรุงความน่าเชื่อถือของแบรนด์ และ
          อนุญาตให้เข้าสู่ตลาดค้าปลีกและสถาบันได้อย่างราบรื่น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขั้นตอนการรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความเหมาะสมและการระบุมาตรฐาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนแรกคือการยืนยันการจำแนกประเภทผลิตภัณฑ์และระบุ IS
          302-2-76:1999 เป็นมาตรฐาน BIS ที่ใช้งาน การออกแบบผลิตภัณฑ์ แหล่งจ่ายพลังงาน
          และการประยุกต์ใช้ต้องสอดคล้องกับขอบเขตของมาตรฐาน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          กระบวนการสมัคร BIS ออนไลน์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ผลิตต้องส่งใบสมัคร BIS ออนไลน์ผ่านพอร์ทัล Manak
          Online ใบสมัครประกอบด้วย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดผลิตภัณฑ์</li>
          <li>ข้อมูลโรงงาน</li>
          <li>การเลือกมาตรฐานที่ใช้งาน</li>
          <li>การผูกมัดรายงานการทดสอบ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ขั้นตอนนี้เริ่มต้นกระบวนการลงทะเบียน BIS / การลงทะเบียนใบรับรอง BIS อย่างเป็นทางการ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ค่าธรรมเนียมและโครงสร้างต้นทุน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ต้นทุนการรับรอง BIS โดยทั่วไปประกอบด้วย:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าทดสอบ (ขึ้นอยู่กับห้องปฏิบัติการ)</li>
          <li>ค่าธรรมเนียมการตรวจสอบโรงงาน</li>
          <li>ค่าธรรมเนียมใบอนุญาต</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมายรายปี</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          ต้นทุนการรับรอง BIS โดยรวมขึ้นอยู่กับความซับซ้อนของผลิตภัณฑ์
          จำนวนรุ่น และข้อกำหนดการทดสอบ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การทดสอบตัวอย่างผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ตัวอย่างผลิตภัณฑ์จะถูกทดสอบในห้องปฏิบัติการที่ BIS รับรองตาม IS
          302-2-76:1999 การทดสอบช่วยให้มั่นใจว่าสอดคล้องกับพารามิเตอร์ความปลอดภัยและ
          ประสิทธิภาพทั้งหมด
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การตรวจสอบและการตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ดำเนินการตรวจสอบโรงงานเพื่อยืนยัน:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>กระบวนการผลิต</li>
          <li>ระบบควบคุมคุณภาพ</li>
          <li>สิ่งอำนวยความสะดวดในการทดสอบภายใน</li>
          <li>ความสอดคล้องกับเอกสารที่ส่ง</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การมอบใบอนุญาต BIS และเครื่องหมาย ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          เมื่อการทดสอบและการตรวจสอบสำเร็จ BIS จะมอบใบอนุญาต BIS สำหรับ
          เครื่องกำเนิดไฟฟ้ารั้ว อนุญาตให้ใช้เครื่องหมาย ISI พร้อมหมายเลข
          CM/L ที่ไม่ซ้ำกัน
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          การปฏิบัติตามกฎระเบียบหลังการรับรอง
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ผู้ถือใบอนุญาตต้อง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ดำเนินการทดสอบตามปกติ</li>
          <li>รักษาบันทึกการผลิต</li>
          <li>อนุญาตให้ตรวจสอบตามกำหนด</li>
          <li>ต่ออายุใบอนุญาตตรงเวลา</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานการจดทะเบียนโรงงาน</li>
          <li>แผนภูมิขั้นตอนกระบวนการผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>แผนควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรองการจดทะเบียนบริษัท</li>
          <li>การจดทะเบียน GST</li>
          <li>การอนุญาตเครื่องหมายการค้า (หากมี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แผ่นข้อมูลจำเพาะผลิตภัณฑ์</li>
          <li>แผนภูมิวงจล</li>
          <li>คู่มือผู้ใช้และคำแนะนำความปลอดภัย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารการสมัคร BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบฟอร์มการสมัคร BIS</li>
          <li>รายงานการทดสอบจากห้องปฏิบัติการที่ BIS รับรอง</li>
          <li>จดหมายอนุญาต</li>
          <li>การให้คำมั่นและการประกาศ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          สิ่งเหล่านี้เป็นชุดเอกสารการรับรอง BIS ที่สมบูรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบตาม IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การทดสอบที่จำเป็นประกอบด้วย:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  ข้อ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  ข้อกำหนด
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การป้องกันอันตรายจากไฟฟ้าช็อต
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  กระแสไหลและความแข็งแรงทางไฟฟ้าที่อุณหภูมิการทำงาน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การจัดอันดับ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  พลังงานอินพุตและกระแส
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  11
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทำให้ร้อน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  กระแสไหลและความแข็งแรงทางไฟฟ้าที่อุณหภูมิการทำงาน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  กระแสไหลและความแข็งแรงทางไฟฟ้า
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบทั้งหมดต้องดำเนินการเฉพาะในห้องปฏิบัติการที่ BIS รับรองเท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ปัญหาทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. การทดสอบล้มเหลว
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>สาเหตุ:</strong> การออกแบบหรือพารามิเตอร์เอาต์พุตที่ไม่สอดคล้อง
          <br />
          <strong>วิธีแก้ไข:</strong> การทดสอบก่อนปฏิบัติตามและการตรวจสอบการออกแบบ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. ข้อผิดพลาดในเอกสาร
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>สาเหตุ:</strong> การส่งที่ไม่สมบูรณ์หรือไม่สอดคล้องกัน
          <br />
          <strong>วิธีแก้ไข:</strong> การตรวจสอบเอกสารโดยผู้เชี่ยวชาญ
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. การล่าช้าในการตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>สาเหตุ:</strong> ระบบคุณภาพที่ไม่พร้อม
          <br />
          <strong>วิธีแก้ไข:</strong> การเตรียมความพร้อมสำหรับการตรวจสอบและการจำลองการตรวจสอบ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับผู้ผลิตและผู้นำเข้า
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การอนุญาตทางกฎหมายในการขายในอินเดีย</li>
          <li>การเข้าถึงผู้ซื้อภาครัฐและสถาบัน</li>
          <li>ความไว้วางใจของผู้บริโภคที่เพิ่มขึ้น</li>
          <li>ลดความเสี่ยงความรับผิดชอบของผลิตภัณฑ์</li>
          <li>การขยายไปสู่อีคอมเมิร์ซและห่วงโซ่ค้าปลีก</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          บทลงโทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายเครื่องกำเนิดไฟฟ้ารั้วโดยไม่มีการรับรอง BIS อาจส่งผลให้:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>บทลงโทษทางการเงินที่หนัก</li>
          <li>การยึดสินค้า</li>
          <li>การยกเลิกการผ่านพิธีการนำเข้า</li>
          <li>การดำเนินคดีอาญาตามพระราชบัญญัติ BIS</li>
          <li>การห้ามขายถาวร</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการการรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตในอินเดีย</li>
          <li>ผู้นำเข้า</li>
          <li>ผู้ผลิตต่างประเทศ</li>
          <li>ผู้ค้าและผู้จัดจำหน่าย</li>
          <li>ผู้ขายในตลาดออนไลน์</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผู้ที่เกี่ยวข้องกับการนำผลิตภัณฑ์สู่ตลาดอินเดียต้อง
          ให้แน่ใจว่าปฏิบัติตามกฎระเบียบ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราสำหรับการปรึกษาการรับรอง BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เราให้บริการปรึกษาการรับรอง BIS ตั้งแต่ต้นจนจบ รวมถึง:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การระบุมาตรฐานและการตรวจสอบความเหมาะสม</li>
          <li>การยื่นใบสมัคร BIS</li>
          <li>การประสานงานห้องปฏิบัติการและการสนับสนุนการทดสอบ</li>
          <li>การเตรียมความพร้อมสำหรับการตรวจสอบโรงงาน</li>
          <li>การจัดการการปฏิบัติตามกฎระเบียบหลังการรับรอง</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          ความเชี่ยวชาญของเราช่วยให้การอนุมัติเร็วขึ้น ไม่มีการปฏิเสธ และความสงบสุขทางกฎระเบียบอย่างสมบูรณ์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          บทสรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การได้รับใบรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้วภายใต้ IS
          302-2-76:1999 ไม่ใช่แค่เพียงเรื่องราชการตามกฎหมาย แต่เป็นขั้นตอนสำคัญ
          ในการรับประกันความปลอดภัย การปฏิบัติตามกฎหมาย และความสำเร็จในตลาดในระยะยาว
          ด้วยการบังคับใช้การประกาศ BIS อย่างเข้มงวดและการตรวจสอบที่เพิ่มขึ้น
          สำหรับผลิตภัณฑ์ไฟฟ้า ผู้ผลิตและผู้นำเข้าต้อง
          ให้ความสำคัญกับการรับรอง BIS เครื่องกำเนิดไฟฟ้ารั้วเพื่อหลีกเลี่ยง
          บทลงโทษและสร้างความไว้วางใจของผู้บริโภค
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          หากคุณวางแผนที่จะสมัครใบอนุญาต BIS / ใบอนุญาต BIS สำหรับ
          เครื่องกำเนิดไฟฟ้ารั้ว คำแนะนำจากผู้เชี่ยวชาญสามารถช่วยลดระยะเวลา ต้นทุน และความเสี่ยงในการปฏิบัติตามกฎระเบียบได้อย่างมีนัยสำคัญ ให้ปฏิบัติตามกฎระเบียบ อยู่ในการแข่งขัน และให้แน่ใจว่าผลิตภัณฑ์ของคุณเป็นไปตามมาตรฐานความปลอดภัยสูงสุดของอินเดีย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – การรับรอง BIS สำหรับเครื่องกำเนิดไฟฟ้ารั้ว
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                คำถาม 1. การรับรอง BIS จำเป็นสำหรับเครื่องกำเนิดไฟฟ้ารั้วในอินเดียหรือไม่?
              </strong>
              <br />
              ใช่ การรับรอง BIS ภายใต้ IS 302-2-76:1999 เป็นที่จำเป็น
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 2. ชื่อเต็มของใบรับรอง BIS คืออะไร?</strong>
              <br />
              ใบรับรองสำนักงานมาตรฐานอินเดีย
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                คำถาม 3. ฉันสามารถนำเข้าเครื่องกำเนิดไฟฟ้ารั้วโดยไม่มีใบอนุญาต BIS ได้หรือไม่?
              </strong>
              <br />
              ไม่ การนำเข้าโดยไม่มีการรับรอง BIS ถูกห้าม
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 4. ต้นทุนใบอนุญาต BIS เท่าไหร่?</strong>
              <br />
              ต้นทุนแตกต่างกันไปตามการทดสอบ ขนาดโรงงาน และจำนวนรุ่น
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                คำถาม 5. กระบวนการรับรอง BIS ใช้เวลานานเท่าไหร่?
              </strong>
              <br />
              โดยทั่วไป 6–10 สัปดาห์หากเอกสารและการทดสอบสมบูรณ์
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 6. เครื่องหมาย ISI จำเป็นหรือไม่?</strong>
              <br />
              ใช่ การทำเครื่องหมาย ISI เป็นภาคบังคับหลังการรับรอง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 7. สตาร์ทอัพสามารถสมัครการรับรอง BIS ได้หรือไม่?</strong>
              <br />
              ใช่ สตาร์ทอัพสามารถสมัครได้หากการตั้งค่าผลิตสอดคล้อง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                คำถาม 8. การรับรอง BIS จำเป็นสำหรับเครื่องกำเนิดที่ใช้แบตเตอรี่หรือไม่?
              </strong>
              <br />
              ใช่ แหล่งพลังงานไม่ได้ยกเว้นการรับรอง
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 9. ใบอนุญาตหนึ่งสามารถครอบคลุมหลายรุ่นได้หรือไม่?</strong>
              <br />
              ใช่ หากรุ่นมีความคล้ายคลึงกันทางเทคนิค
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 10. จะเกิดอะไรขึ้นหากผลิตภัณฑ์ของฉันทดสอบล้มเหลว?</strong>
              <br />
              ต้องมีการแก้ไขการออกแบบและทดสอบใหม่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 11. การรับรอง BIS มีผลตลอดไปตลอดเวลาหรือไม่?</strong>
              <br />
              ไม่ ต้องต่ออายุเป็นระยะ
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 12. การตรวจสอบ BIS จำเป็นหลังการรับรองหรือไม่?</strong>
              <br />
              ใช่ มีการตรวจสอบตามกำหนด
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 13. ผู้ผลิตต่างประเทศสามารถสมัครโดยตรงได้หรือไม่?</strong>
              <br />
              ใช่ ผ่านตัวแทนผู้มีอำนาจในอินเดีย (AIR)
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>คำถาม 14. มีกระบวนการสมัคร BIS ออนไลน์หรือไม่?</strong>
              <br />
              ใช่ ใบสมัคร BIS จะถูกส่งออนไลน์
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                คำถาม 15. ความหมายของใบรับรอง BIS สำหรับผู้บริโภคคืออะไร?
              </strong>
              <br />
              รับประกันความปลอดภัย คุณภาพ และการปฏิบัติตามกฎระเบียบ
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-302-2-76-Sun-Certifications-India.pdf"
            title="BIS Certificate for Electric Fence Energizers - IS 302-2-76:1999 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={1} />
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
                ที่ปรึกษาใบรับรองอันดับหนึ่งของอินเดีย
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
              การรับรอง CDSCO
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
              การลงทะเบียน BIS (CRS)
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
              ใบรับรอง EPR
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
              ใบรับรอง LMPC
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
              ใบรับรองการลงทะเบียน BIS
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
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตในอินเดีย
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
