import FaqAuthorThai from "@/components/common/FaqAuthor/FaqAuthorThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ManyUsersAlsoReadThai from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadThai";
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
import LanguageSelector from "./LanguageSelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBedsThai = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterThai />
    </div>
  );
};

export default BISCertificateForBedsThai;

const MetaTags = () => {
  const title = "ใบรับรอง BIS สำหรับเตียง | IS 17635:2022 ใบอนุญาต BIS";
  const ogTitle = "การรับรอง BIS สำหรับเตียง – คู่มือ IS 17635:2022";
  const twitterTitle = "ใบอนุญาต BIS สำหรับเตียง | IS 17635:2022";
  const metaDescription =
    "รับใบรับรอง BIS สำหรับเตียงตาม IS 17635:2022 กระบวนการ เอกสาร การทดสอบ ต้นทุน และระยะเวลาสำหรับการรับรอง BIS ในอินเดีย";
  const ogDescription =
    "คู่มือฉบับสมบูรณ์สำหรับการรับรอง BIS สำหรับเตียงตาม IS 17635:2022 รู้จักกระบวนการ ต้นทุน เอกสาร การทดสอบ และประโยชน์ของใบอนุญาต BIS";
  const twitterDescription =
    "สมัครใบรับรอง BIS สำหรับเตียงตาม IS 17635:2022 เรียนรู้กระบวนการ BIS เอกสาร การทดสอบ ค่าธรรมเนียม และระยะเวลาในอินเดีย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเตียง, ใบอนุญาต BIS สำหรับเตียง, IS 17635:2022, การรับรอง BIS สำหรับเตียง";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/teng-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, หัวหน้าฝ่ายปฏิบัติการที่ Sun Certification India";

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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />
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
                    ใบรับรอง BIS สำหรับเตียง – IS 17635:2022
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
          ใบรับรอง BIS สำหรับเตียง – คู่มือฉบับสมบูรณ์ IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="ใบอนุญาต BIS สำหรับเตียง"
            alt="ใบรับรอง BIS สำหรับเตียง - การรับรอง BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเตียงเป็นข้อกำหนดบังคับในอินเดียสำหรับผู้ผลิตและ
          ผู้นำเข้าเตียงที่ใช้สำหรับการใช้งานในบ้านและเชิงพาณิชย์ ตามมาตรฐาน
          อินเดียล่าสุด IS 17635:2022 – เตียง (ข้อกำหนดด้านความปลอดภัย)
          เตียงทั้งหมดต้องเป็นไปตามมาตรฐานความปลอดภัย ความทนทาน โครงสร้าง
          และประสิทธิภาพที่เข้มงวดก่อนขายในตลาดอินเดีย
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงเป็นผลิตภัณฑ์เฟอร์นิเจอร์ที่จำเป็นที่ใช้ทุกวันในบ้าน โรงแรม
          โรงพยาบาล หอพัก ที่พัก PG และสถานประกอบการ ความอ่อนแอของโครงสร้าง
          ขอบคม ความล้มเหลวของวัสดุ
          หรือความสามารถในการรับน้ำหนักต่ำอาจส่งผลให้เกิดการบาดเจ็บร้ายแรง
          เพื่อป้องกันความเสี่ยงดังกล่าว สำนักงานมาตรฐานอินเดีย (BIS)
          กำหนดให้มีการรับรอง BIS สำหรับเตียง
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          คู่มือฉบับสมบูรณ์นี้อธิบายทุกอย่างเกี่ยวกับใบอนุญาต BIS สำหรับเตียง
          รวมถึงมาตรฐานที่ใช้ กระบวนการรับรอง ข้อกำหนดการทดสอบ เอกสาร
          ค่าธรรมเนียม ระยะเวลา โทษ และประโยชน์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS คืออะไร?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นโปรแกรมการประเมินการปฏิบัติตามที่แนะนำโดย
          สำนักงานมาตรฐานอินเดีย ซึ่งเป็นองค์กรมาตรฐานแห่งชาติของอินเดีย
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ใบรับรอง BIS คืออะไร?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS ยืนยันว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดียและปลอดภัย
          เชื่อถือได้ และเหมาะสำหรับการใช้งาน
          ผลิตภัณฑ์ที่รับรองจะแสดงเครื่องหมาย การรับรอง BIS
          ซึ่งเรียกกันทั่วไปว่าเครื่องหมาย ISI
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ความหมายของใบรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          มันหมายความว่าผลิตภัณฑ์ได้ผ่าน:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบในห้องปฏิบัติการ</li>
          <li>การตรวจสอบโรงงาน</li>
          <li>การตรวจสอบการควบคุมคุณภาพ</li>
          <li>การประเมินการปฏิบัติตามความปลอดภัย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โลโก้ BIS บนเตียงรับประกันลูกค้าว่าผลิตภัณฑ์เป็นไปตามมาตรฐานคุณภาพ
          และความปลอดภัยที่รัฐบาลอนุมัติ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          มาตรฐาน BIS ที่ใช้กับเตียง – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          มาตรฐานอินเดียที่ใช้กับเตียงคือ:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – เตียง: ข้อกำหนดด้านความปลอดภัย
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          มาตรฐานนี้นิยามข้อกำหนดด้านความปลอดภัยและประสิทธิภาพที่จำเป็นสำหรับ
          เตียงที่ใช้ในสภาพแวดล้อมที่อยู่อาศัยและเชิงพาณิชย์
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 ครอบคลุม
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ความแข็งแรงของโครงสร้าง</li>
          <li>ความสามารถในการรับน้ำหนัก</li>
          <li>ความเสถียรและความทนทาน</li>
          <li>คุณภาพวัสดุ</li>
          <li>ขอบและผิวหน้า</li>
          <li>ความปลอดภัยจากการพังทลาย</li>
          <li>ไม่มีอันตรายจากการติดค้าง</li>
          <li>ประสิทธิภาพระยะยาว</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงใดๆ ที่ผลิตหรือนำเข้าสู่อินเดียต้องเป็นไปตาม IS 17635:2022
          และได้รับใบลงทะเบียน BIS สำหรับเตียง
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมการรับรอง BIS เป็นข้อบังคับสำหรับเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงถูกใช้เป็นเวลานานและรองรับน้ำหนักของมนุษย์อย่างต่อเนื่อง
          เตียงที่ออกแบบไม่ดีอาจทำให้เกิดการบาดเจ็บ การพังทลาย
          หรือความเสี่ยงต่อสุขภาพในระยะยาว
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เหตุผลที่ต้องมีการรับรอง BIS สำหรับเตียง
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รับประกันความสมบูรณ์ของโครงสร้าง</li>
          <li>ป้องกันการพังทลายและการแตกหัก</li>
          <li>ควบคุมคุณภาพวัสดุ</li>
          <li>กำจัดขอบคมและผิวหน้าที่ไม่ปลอดภัย</li>
          <li>ปกป้องผู้บริโภค</li>
          <li>รับประกันคุณภาพระดับชาติที่สม่ำเสมอ</li>
          <li>บังคับตามประกาศ BIS</li>
          <li>จำเป็นสำหรับการขายตามกฎหมายในอินเดีย</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          โดยไม่มีใบอนุญาต BIS สำหรับเตียง การขายหรือนำเข้าเตียงในอินเดียเป็น
          เรื่องผิดกฎหมาย
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          กระบวนการรับรอง BIS สำหรับเตียง (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          กระบวนการรับรอง BIS ในอินเดียปฏิบัติตามขั้นตอนที่มีโครงสร้างภายใต้
          โครงการรับรอง ISI
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 1 – ระบุมาตรฐานและขอบเขตผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          ยืนยันการบังคับใช้ภายใต้ IS 17635:2022 และกำหนดรูปแบบผลิตภัณฑ์
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 2 – การสมัคร BIS (ออนไลน์)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ส่งใบสมัครผ่านพอร์ทัลออนไลน์ BIS Manak พร้อม:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>รายละเอียดผู้ผลิต</li>
          <li>ที่อยู่โรงงาน</li>
          <li>คำอธิบายผลิตภัณฑ์</li>
          <li>ชื่อแบรนด์</li>
          <li>รายละเอียดการควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 3 – ค่าธรรมเนียมการรับรอง BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          จ่ายค่าธรรมเนียมที่ใช้รวมถึง:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าธรรมเนียมการสมัคร</li>
          <li>ค่าธรรมเนียมการประมวลผล</li>
          <li>ค่าธรรมเนียมการทดสอบ</li>
          <li>ค่าธรรมเนียมการตรวจสอบ</li>
          <li>ค่าธรรมเนียมการทำเครื่องหมาย</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 4 – การทดสอบผลิตภัณฑ์
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          ตัวอย่างจะถูกทดสอบที่ห้องปฏิบัติการที่ BIS รับรอง
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          การทดสอบรวมถึง
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทดสอบน้ำหนักคงที่</li>
          <li>การทดสอบความทนทาน</li>
          <li>การทดสอบความเสถียร</li>
          <li>การทดสอบความแข็งแรงของข้อต่อ</li>
          <li>การทดสอบผิวหน้า</li>
          <li>การทดสอบความปลอดภัยของขอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 5 – การตรวจสอบโรงงาน
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          เจ้าหน้าที่ BIS ตรวจสอบ:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>สถานที่ผลิต</li>
          <li>การควบคุมวัตถุดิบ</li>
          <li>การทดสอบระหว่างกระบวนการ</li>
          <li>ระบบการรับประกันคุณภาพ</li>
          <li>อุปกรณ์ทดสอบ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 6 – การให้ใบอนุญาต BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          หลังจากปฏิบัติตาม BIS จะออก:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ใบรับรอง BIS</li>
          <li>การอนุญาตเครื่องหมาย ISI</li>
          <li>หมายเลข CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ขั้นตอนที่ 7 – การปฏิบัติตามหลังการรับรอง
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การตรวจสอบเฝ้าระวัง</li>
          <li>การต่ออายุทุก 1–2 ปี</li>
          <li>การควบคุมคุณภาพอย่างต่อเนื่อง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ขอบเขตของใบอนุญาต BIS สำหรับเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> มาตรฐานนี้ครอบคลุมข้อกำหนดที่เกี่ยวข้องกับ
          ประสิทธิภาพและความปลอดภัยของเตียงสำหรับผู้ใหญ่สำหรับการใช้งานในบ้าน
          และนอกบ้าน
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> มาตรฐานนี้ใช้กับเตียงที่ผลิต/สร้างเสร็จสมบูรณ์
          ยังใช้กับหน่วยที่พร้อมประกอบ ในกรณีนั้นข้อกำหนดของมาตรฐานนี้จะใช้กับ
          หน่วยที่ประกอบแล้ว
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> มาตรฐานนี้ไม่ครอบคลุมเตียงน้ำ เตียงลม เตียงพับได้
          เตียงสองชั้น และเตียงสำหรับผู้ที่มีความต้องการพิเศษ
          และไม่รวมเตียงสำหรับการดูแลสุขภาพและทางการแพทย์
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของเตียง
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          นี่คือรายการเอกสารใบรับรอง BIS ที่สมบูรณ์:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารผู้ผลิต
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การลงทะเบียน/ใบอนุญาตโรงงาน</li>
          <li>แผนผังกระบวนการผลิต</li>
          <li>รายการเครื่องจักร</li>
          <li>รายการอุปกรณ์ทดสอบ</li>
          <li>ใบรับรองการสอบเทียบ</li>
          <li>ผังโรงงาน</li>
          <li>แผนการควบคุมคุณภาพ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางกฎหมาย
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>หลักฐานที่อยู่</li>
          <li>หลักฐานตัวตน</li>
          <li>การอนุญาตแบรนด์</li>
          <li>ใบรับรองเครื่องหมายการค้า (ถ้ามี)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          เอกสารทางเทคนิค
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>แบบวาดผลิตภัณฑ์</li>
          <li>ข้อกำหนด</li>
          <li>รายการวัสดุ</li>
          <li>รายงานการทดสอบภายใน</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ข้อกำหนดการทดสอบสำหรับเตียง (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          เตียงต้องผ่านการทดสอบอย่างเข้มงวดเพื่อให้แน่ใจว่าปฏิบัติตาม
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          การทดสอบบังคับ
        </h3>

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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การออกแบบและการทำงาน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  ขนาด
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบความเสถียร
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  น้ำหนักคงที่แนวตั้งบนฐานเตียง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  น้ำหนักคงที่แนวตั้งบนราวข้าง
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบน้ำหนักคงที่แนวนอน
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  การทดสอบแรงกระแทกแนวตั้ง
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          การทดสอบต้องดำเนินการที่ห้องปฏิบัติการที่ BIS อนุมัติเท่านั้น
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ความท้าทายทั่วไปและวิธีหลีกเลี่ยง
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>การเลือกมาตรฐานที่ไม่ถูกต้อง</strong> –
            ตรวจสอบมาตรฐานอินเดียที่ถูกต้องเสมอ
          </li>
          <li>
            <strong>เอกสารไม่ดี</strong> – เอกสารที่ขาดหายไปทำให้เกิดความล่าช้า;
            เตรียมไว้ล่วงหน้า
          </li>
          <li>
            <strong>การทดสอบในห้องปฏิบัติการล้มเหลว</strong> –
            รับประกันวัสดุและการก่อสร้างคุณภาพสูง
          </li>
          <li>
            <strong>โรงงานไม่พร้อม</strong> – รับประกันว่า QMS
            และอุปกรณ์ทดสอบได้รับการบำรุงรักษาอย่างเหมาะสม
          </li>
          <li>
            <strong>เครื่องหมายการค้าไม่ตรงกัน</strong> –
            ชื่อแบรนด์ต้องตรงกับใบสมัครใบอนุญาต
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ประโยชน์ของการรับรอง BIS สำหรับเตียง
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การขายตามกฎหมายในอินเดีย</li>
          <li>ความไว้วางใจของลูกค้าเพิ่มขึ้น</li>
          <li>เข้าถึงแพลตฟอร์มอีคอมเมิร์ซ</li>
          <li>สิทธิ์ในการเสนอราคาของรัฐบาล</li>
          <li>ลดความรับผิดชอบ</li>
          <li>ความน่าเชื่อถือของแบรนด์ที่แข็งแกร่ง</li>
          <li>การปฏิบัติตามมาตรฐานอินเดีย</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          โทษสำหรับการไม่ปฏิบัติตาม
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          การขายเตียงโดยไม่มีการรับรอง BIS อาจนำไปสู่:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ค่าปรับหนัก</li>
          <li>การยึดผลิตภัณฑ์</li>
          <li>การปิดธุรกิจ</li>
          <li>การดำเนินการทางกฎหมาย</li>
          <li>การห้ามตลาด</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ใครต้องการใบรับรอง BIS สำหรับเตียง?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          หน่วยงานต่อไปนี้ต้องได้รับใบอนุญาต BIS สำหรับเตียง:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ผู้ผลิตอินเดีย</li>
          <li>ผู้ผลิตต่างประเทศ</li>
          <li>ผู้นำเข้า</li>
          <li>แบรนด์เฟอร์นิเจอร์</li>
          <li>ซัพพลายเออร์ OEM/ODM</li>
          <li>ผู้ขายอีคอมเมิร์ซ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          หน่วยการผลิตแต่ละหน่วยต้องมีใบอนุญาต BIS แยกกัน
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ทำไมต้องเลือกเราสำหรับการรับรอง BIS ของเตียง?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          เรามีการให้คำปรึกษา BIS แบบครบวงจร รวมถึง:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>การทำแผนที่มาตรฐาน</li>
          <li>การสนับสนุนเอกสาร</li>
          <li>การประสานงานการทดสอบ</li>
          <li>การยื่นใบสมัคร</li>
          <li>การจัดการการตรวจสอบโรงงาน</li>
          <li>การประสานงาน BIS</li>
          <li>การออกใบอนุญาต</li>
          <li>การสนับสนุนการต่ออายุและการเฝ้าระวัง</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          สรุป
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          ใบรับรอง BIS สำหรับเตียงภายใต้ IS 17635:2022
          เป็นข้อกำหนดทางกฎหมายบังคับที่รับประกันความปลอดภัย คุณภาพ และความทนทาน
          การได้รับใบอนุญาต BIS สำหรับเตียงปกป้องผู้บริโภค
          เสริมสร้างคุณค่าของแบรนด์
          และเปิดโอกาสการเข้าถึงตลาดตามกฎหมายทั่วอินเดีย
          ด้วยการสนับสนุนจากผู้เชี่ยวชาญ
          กระบวนการรับรองจะราบรื่นและมีประสิทธิภาพ
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          คำถามที่พบบ่อย – ใบรับรอง BIS สำหรับเตียง
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. การรับรอง BIS เป็นข้อบังคับสำหรับเตียงในอินเดียหรือไม่?
              </strong>
              <br />
              ใช่ ตาม IS 17635:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. ใบรับรอง BIS มีอายุเท่าไร?</strong>
              <br />
              1–2 ปี ต่ออายุได้
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. ผู้ผลิตต่างประเทศสามารถสมัครได้หรือไม่?</strong>
              <br />
              ใช่ ภายใต้ FMCS
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. สามารถสมัครใบรับรอง BIS ออนไลน์ได้หรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. เครื่องหมาย ISI เป็นข้อบังคับบนเตียงหรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. กระบวนการใช้เวลานานเท่าไร?</strong>
              <br />
              30–45 วัน
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. เตียงไม้และเตียงโลหะครอบคลุมทั้งสองอย่างหรือไม่?
              </strong>
              <br />
              ใช่ ถ้าเป็นไปตาม IS 17635:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. การตรวจสอบโรงงานเป็นข้อบังคับหรือไม่?</strong>
              <br />
              ใช่
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. พ่อค้าสามารถสมัคร BIS ได้หรือไม่?</strong>
              <br />
              เฉพาะเจ้าของแบรนด์ที่มีการควบคุมการผลิตเท่านั้น
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="ใบรับรอง BIS สำหรับเตียง - IS 17635:2022 PDF"
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
                ที่ปรึกษาใบรับรองที่ดีที่สุดของอินเดีย
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
                alt="โลโก้ BIS"
                title="โลโก้ BIS"
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
                alt="โลโก้ CDSCO"
                title="โลโก้ CDSCO"
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
                src="/services-images/BISCRS.jpg"
                alt="โลโก้ BISCRS"
                title="โลโก้ BISCRS"
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
                alt="การจัดการขยะพลาสติก"
                title="การจัดการขยะพลาสติก"
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
                alt="โลโก้ใบรับรอง EPR"
                title="โลโก้ใบรับรอง EPR"
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
                alt="โลโก้ LMPC"
                title="โลโก้ LMPC"
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
                alt="โลโก้ BIS"
                title="โลโก้ BIS"
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
                alt="โลโก้เครื่องหมาย ISI"
                title="โลโก้เครื่องหมาย ISI"
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
