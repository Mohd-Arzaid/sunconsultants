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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterThai from "@/components/manual/Footer/FooterThai";

const BISCertificateForFurnitureThai = () => {
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

export default BISCertificateForFurnitureThai;

const MetaTags = () => {
  const title =
    "ใบรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย | การรับรอง BIS ใบอนุญาตและคู่มือกระบวนการ";
  const ogTitle =
    "ใบรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย - คู่มือการรับรอง BIS ฉบับสมบูรณ์";
  const twitterTitle =
    "ใบรับรอง BIS สำหรับเฟอร์นิเจอร์ | คู่มือการรับรอง BIS ฉบับสมบูรณ์ของ BIS อินเดีย";
  const metaDescription =
    "ใบรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย - คู่มือฉบับสมบูรณ์เกี่ยวกับการรับรอง BIS ใบอนุญาต BIS ต้นทุน เอกสาร มาตรฐาน กระบวนการ การสมัครออนไลน์ และเครื่องหมาย BIS สำหรับผู้ผลิตเฟอร์นิเจอร์";
  const ogDescription =
    "กำลังมองหาการรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย? เรียนรู้เกี่ยวกับใบอนุญาต BIS เครื่องหมาย BIS มาตรฐานที่ใช้ได้ กระบวนการรับรอง ต้นทุน เอกสาร และข้อกำหนดการปฏิบัติตามกฎระเบียบอย่างละเอียด";
  const twitterDescription =
    "คู่มือฉบับสมบูรณ์สำหรับใบรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย - กระบวนการรับรอง BIS ต้นทุน เอกสาร เครื่องหมาย BIS มาตรฐานและการสมัครออนไลน์อธิบาย";
  const metaKeywords =
    "ใบรับรอง BIS สำหรับเฟอร์นิเจอร์, การรับรอง BIS สำหรับเฟอร์นิเจอร์, ใบอนุญาต BIS สำหรับเฟอร์นิเจอร์, BIS คืออะไร, BIS อินเดีย";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/furniture-thai";
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
                    การรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย
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

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          การรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย: คู่มือฉบับสมบูรณ์เกี่ยวกับ
          มาตรฐาน BIS เครื่องหมาย ISI กระบวนการ &amp; การปฏิบัติตามกฎระเบียบ
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="ใบอนุญาต BIS สำหรับเฟอร์นิเจอร์"
            alt="การรับรอง BIS สำหรับเฟอร์นิเจอร์ในอินเดีย - คู่มือเครื่องหมาย ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            เฟอร์นิเจอร์เป็นส่วนสำคัญของบ้าน สำนักงาน และพื้นที่สาธารณะ
            การรับประกันความปลอดภัย ความทนทาน และคุณภาพของเฟอร์นิเจอร์มีความสำคัญ
            ทั้งสำหรับผู้บริโภคและผู้ผลิต ในอินเดีย{" "}
            <strong>การรับรอง BIS สำหรับเฟอร์นิเจอร์</strong> เป็นข้อกำหนดบังคับ
            สำหรับหมวดหมู่เฟอร์นิเจอร์บางประเภทภายใต้ Furniture (Quality Control)
            Order, 2025 คู่มือนี้ให้ภาพรวมโดยละเอียดเกี่ยวกับมาตรฐาน BIS
            เครื่องหมาย ISI กระบวนการรับรอง และข้อกำหนดการปฏิบัติตามกฎระเบียบ
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          การรับรอง BIS สำหรับเฟอร์นิเจอร์คืออะไร?
        </SectionHeading>

        <SubSectionHeading>
          ความหมายของการรับรอง BIS สำหรับเฟอร์นิเจอร์
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          การรับรอง BIS เป็นกระบวนการอย่างเป็นทางการที่สำนักงานมาตรฐานอินเดีย
          (BIS) ประเมินผลิตภัณฑ์เพื่อให้แน่ใจว่าเป็นไปตามมาตรฐานอินเดีย
          สำหรับเฟอร์นิเจอร์ การรับรองนี้รับประกันว่าผลิตภัณฑ์ตรงตามพารามิเตอร์
          ด้านความปลอดภัย ประสิทธิภาพ และคุณภาพที่กำหนดไว้
          เมื่อได้รับการรับรองแล้ว ผู้ผลิตสามารถใช้{" "}
          <strong>เครื่องหมาย ISI</strong> บนเฟอร์นิเจอร์ของตน
          เพื่อแสดงการปฏิบัติตามกฎระเบียบต่อผู้ซื้อ
        </p>

        <SubSectionHeading>
          ความแตกต่างระหว่างการรับรอง BIS และเครื่องหมาย ISI สำหรับเฟอร์นิเจอร์
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>การรับรอง BIS</strong> — กระบวนการประเมิน การทดสอบ
              และการอนุมัติโดย BIS
            </>,
            <>
              <strong>เครื่องหมาย ISI</strong> — เครื่องหมายที่ได้รับหลังการรับรอง
              BIS ซึ่งแสดงว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดีย
              เครื่องหมาย ISI คือการรับประกันการปฏิบัติตามที่ผู้บริโภคเห็นได้ชัด
            </>,
          ]}
        />

        <SubSectionHeading>
          ทำไมการรับรอง BIS จึงสำคัญสำหรับผู้ผลิตและผู้นำเข้าเฟอร์นิเจอร์
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "การปฏิบัติตามกฎหมายตามข้อบังญัติของอินเดีย",
            "การเข้าถึงตลาดอินเดียและโอกาสในการจัดซื้อของรัฐบาล",
            "ความไว้วางใจของผู้บริโภคที่เพิ่มขึ้นและข้อได้เปรียบทางการแข่งขัน",
            "ลดความเสี่ยงจากการเรียกคืนสินค้า ค่าปรับ หรือข้อจำกัดการนำเข้า",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ข้อกำหนดการรับรอง BIS สำหรับผู้ผลิตเฟอร์นิเจอร์
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  ข้อกำหนด
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  รายละเอียด
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["หน่วยงานรับรอง", "Bureau of Indian Standards (BIS)"],
                ["โครงการรับรอง", "Scheme-I (การรับรองเครื่องหมาย ISI)"],
                ["กฎหมายที่ใช้บังคับ", "Furniture (Quality Control) Order, 2025"],
                ["การทำเครื่องหมายบังคับ", "เครื่องหมาย ISI พร้อมหมายเลขใบอนุญาต BIS"],
                [
                  "การทดสอบผลิตภัณฑ์",
                  "จำเป็นต้องทำผ่านห้องปฏิบัติการที่ BIS รับรอง",
                ],
                ["การตรวจสอบโรงงาน", "บังคับก่อนการออกใบอนุญาต"],
                [
                  "ใช้บังคับกับ",
                  "ผู้ผลิตอินเดีย ผู้ผลิตต่างประเทศ ผู้นำเข้า",
                ],
                ["การเฝ้าระวังหลังการรับรอง", "จำเป็น"],
                [
                  "การต่ออายุใบอนุญาต",
                  "ต่ออายุเป็นระยะตามข้อกำหนดของ BIS",
                ],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          กรอบกฎระเบียบสำหรับการรับรอง BIS ของเฟอร์นิเจอร์ในอินเดีย
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Furniture QCO 2025 กำหนดให้หมวดหมู่เฟอร์นิเจอร์บางประเภทต้องปฏิบัติตามมาตรฐาน BIS QCO เป็นรากฐานทางกฎหมายสำหรับการรับรองบังคับและระบุประเภทเฟอร์นิเจอร์ที่ครอบคลุม",
            },
            {
              icon: Building2,
              title: "บทบาทของ Bureau of Indian Standards (BIS)",
              description:
                "BIS จัดทำมาตรฐานอินเดีย (IS) ประเมินหน่วยการผลิต ดำเนินการทดสอบผลิตภัณฑ์ และออกใบอนุญาตสำหรับการใช้เครื่องหมาย ISI รวมถึงตรวจสอบการปฏิบัติตามผ่านการตรวจสอบและการเฝ้าระวัง",
            },
          ]}
        />

        <SubSectionHeading>
          การรับรอง BIS บังคับ vs สมัครใจสำหรับเฟอร์นิเจอร์
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>บังคับ</strong> — หมวดหมู่ที่ระบุภายใต้ Furniture QCO
              เช่น เตียง เก้าอี้ และตู้เก็บของ
            </>,
            <>
              <strong>สมัครใจ</strong> — ผู้ผลิตสามารถเลือกรับรองหมวดหมู่ผลิตภัณฑ์
              เพิ่มเติมเพื่อเพิ่มความน่าเชื่อถือในตลาด
            </>,
          ]}
        />

        <SubSectionHeading>
          การบังคับใช้ Furniture QCO กับผู้ผลิตและผู้นำเข้า
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "ผู้ผลิตอินเดียที่ผลิตเฟอร์นิเจอร์ภายใต้ QCO",
            "ผู้ผลิตต่างประเทศที่ส่งออกไปยังอินเดีย",
            "ผู้นำเข้าที่ขายเฟอร์นิเจอร์ในประเทศ",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ผลิตภัณฑ์เฟอร์นิเจอร์ที่อยู่ภายใต้การรับรอง BIS
        </SectionHeading>

        <SubSectionHeading>
          หมวดหมู่เฟอร์นิเจอร์และมาตรฐาน BIS ที่ใช้บังคับ
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  หมวดหมู่เฟอร์นิเจอร์
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  มาตรฐานอินเดียที่ใช้บังคับ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  ชื่อมาตรฐาน
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  ข้อกำหนดการรับรอง
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "เก้าอี้ทำงาน",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "เก้าอี้และม้านั่งอเนกประสงค์",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "โต๊ะและโต๊ะทำงาน",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "ตู้เก็บของ",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "เตียง",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "เตียงสองชั้น",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    บังคับภายใต้ Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          ผลิตภัณฑ์ที่ครอบคลุมทั้งหมดต้องปฏิบัติตามมาตรฐาน BIS ที่เกี่ยวข้อง
          และมีเครื่องหมาย ISI ที่ถูกต้องก่อนจำหน่ายในอินเดีย
          มาตรฐานเหล่านี้กำหนดข้อกำหนดขั้นต่ำด้านความปลอดภัย ความเสถียร
          และการใช้งานของเฟอร์นิเจอร์
        </p>

        <SectionDivider />

        <SectionHeading>
          มาตรฐาน BIS สำหรับเฟอร์นิเจอร์และข้อกำหนด
        </SectionHeading>

        <SubSectionHeading>
          ข้อกำหนดด้านประสิทธิภาพภายใต้มาตรฐาน BIS สำหรับเฟอร์นิเจอร์
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          เฟอร์นิเจอร์ต้องทนต่อการใช้งานปกติโดยไม่บิดเบี้ยวหรือเสียหายทางโครงสร้าง
        </p>
        <CheckPointsList
          points={[
            "ความสามารถในการรับน้ำหนักภายใต้สภาวะโหลดปกติและโหลดสูงสุด",
            "ความแข็งแรงของข้อต่อและความทนทานของการเชื่อมต่อ",
            "ความเสถียรของวัสดุโดยไม่บิดเบี้ยวหรือเสื่อมสภาพ",
          ]}
        />

        <SubSectionHeading>
          ข้อกำหนดการทดสอบความปลอดภัยและความทนทาน
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          เฟอร์นิเจอร์ต้องเป็นไปตามมาตรฐานความปลอดภัยเพื่อป้องกันอุบัติเหตุ
          และมาตรฐานความทนทานเพื่อรับประกันอายุการใช้งานยาวนาน
        </p>
        <CheckPointsList
          points={[
            "การป้องกันการพลิกคว่ำ (เก้าอี้ ม้านั่ง และหน่วยที่ไม่เสถียร)",
            "การป้องกันการพังทลายภายใต้น้ำหนักที่กำหนด (เตียง เตียงสองชั้น ตู้เก็บของ)",
            "ความทนทานระยะยาวผ่านการทดสอบประสิทธิภาพการใช้งานซ้ำ",
          ]}
        />

        <SubSectionHeading>
          พารามิเตอร์คุณภาพที่ประเมินระหว่างการรับรอง
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "คุณภาพวัสดุและการตกแต่งผิว",
            "ความสามารถในการรับน้ำหนัก",
            "ความเสถียร หลักการยศาสตร์ และคุณสมบัติด้านความปลอดภัย",
          ]}
        />

        <SubSectionHeading>
          ข้อกำหนดการปฏิบัติตามสำหรับหมวดหมู่เฟอร์นิเจอร์ต่างๆ
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          แต่ละประเภทเฟอร์นิเจอร์มีมาตรฐาน IS เฉพาะที่ระบุขนาด การทดสอบประสิทธิภาพ
          และความคลาดเคลื่อนที่ยอมรับได้ การปฏิบัติตามช่วยรับประกันความสม่ำเสมอ
          และคุณภาพในหมู่ผู้ผลิต
        </p>

        <SectionDivider />

        <SectionHeading>
          ใครต้องการการรับรอง BIS สำหรับเฟอร์นิเจอร์?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "ผู้ผลิตเฟอร์นิเจอร์อินเดีย",
              description:
                "ผู้ผลิตในประเทศทั้งหมดของเฟอร์นิเจอร์ภายใต้ Furniture QCO ต้องได้รับการรับรอง BIS ก่อนจำหน่ายผลิตภัณฑ์",
            },
            {
              icon: Globe,
              title: "ผู้ผลิตต่างประเทศที่ส่งออกเฟอร์นิเจอร์ไปอินเดีย",
              description:
                "ผู้ส่งออกต้องปฏิบัติตามมาตรฐาน BIS เพื่อขายเฟอร์นิเจอร์ในอินเดียอย่างถูกกฎหมายและใช้เครื่องหมาย ISI",
            },
            {
              icon: Package,
              title: "ผู้นำเข้าเฟอร์นิเจอร์และเจ้าของแบรนด์",
              description:
                "ผู้นำเข้าต้องให้แน่ใจว่าเฟอร์นิเจอร์ที่นำเข้าอินเดียเป็นไปตามมาตรฐาน BIS แม้จะผลิตในต่างประเทศ",
            },
            {
              icon: ShoppingCart,
              title: "ผู้ขายอีคอมเมิร์ซและธุรกิจค้าปลีก",
              description:
                "ผู้ค้าออนไลน์และออฟไลน์ที่ขายเฟอร์นิเจอร์ในหมวดหมู่ที่ครอบคลุมต้องตรวจสอบการรับรอง BIS เพื่อหลีกเลี่ยงความรับผิดทางกฎหมาย",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          การรับรอง BIS ISI สำหรับเฟอร์นิเจอร์: กระบวนการทีละขั้นตอน
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "การระบุผลิตภัณฑ์และการเลือกมาตรฐานที่ใช้บังคับ",
              description:
                "ระบุหมวดหมู่เฟอร์นิเจอร์และมาตรฐาน BIS ที่เกี่ยวข้อง (IS 17631–IS 17636) สำหรับการทดสอบและการรับรอง",
            },
            {
              title: "การทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่ BIS รับรอง",
              description:
                "เฟอร์นิเจอร์ถูกทดสอบความแข็งแรง ความเสถียร และความทนทานในห้องปฏิบัติการที่ BIS อนุมัติ รายงานการทดสอบเป็นข้อบังคับสำหรับการสมัคร",
            },
            {
              title: "การยื่นคำขอ BIS",
              description:
                "ผู้ผลิตยื่นคำขอต่อ BIS พร้อมข้อมูลจำเพาะผลิตภัณฑ์ รายละเอียดทางเทคนิค และรายงานการทดสอบ",
            },
            {
              title: "การตรวจสอบและประเมินโรงงาน",
              description:
                "BIS ดำเนินการตรวจสอบโรงงานเพื่อตรวจสอบกระบวนการผลิต ระบบควบคุมคุณภาพ และความสม่ำเสมอของการผลิต",
            },
            {
              title: "การออกใบอนุญาต BIS และอนุญาตเครื่องหมาย ISI",
              description:
                "เมื่อได้รับการอนุมัติ BIS จะออกใบอนุญาตให้ผู้ผลิตใช้เครื่องหมาย ISI บนเฟอร์นิเจอร์ที่ได้รับการรับรอง",
            },
            {
              title: "ข้อกำหนดการปฏิบัติตามหลังการรับรอง",
              description:
                "จำเป็นต้องมีการตรวจสอบเป็นประจำ การทดสอบเป็นระยะ และการปฏิบัติตามมาตรฐาน BIS เพื่อรักษาการรับรอง",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          เอกสารที่จำเป็นสำหรับการรับรอง BIS ของเฟอร์นิเจอร์
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>เอกสารการจดทะเบียนบริษัทและการผลิต</strong> —
              ใบอนุญาตธุรกิจ การลงทะเบียน GST และรายละเอียดสถานที่ผลิต
            </>,
            <>
              <strong>ข้อมูลจำเพาะทางเทคนิคและแบบแปลนผลิตภัณฑ์</strong> —
              แบบออกแบบโดยละเอียด วัสดุที่ใช้ และคำแนะนำการประกอบ
            </>,
            <>
              <strong>รายงานการทดสอบและเอกสารควบคุมคุณภาพ</strong> —
              รายงานจากห้องปฏิบัติการที่ BIS อนุมัติแสดงการปฏิบัติตามมาตรฐาน IS
            </>,
            <>
              <strong>เอกสารโรงงานและกระบวนการผลิต</strong> —
              ระบบการจัดการคุณภาพ ขั้นตอนกระบวนการ และขั้นตอนการตรวจสอบ
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ข้อกำหนดการทดสอบสำหรับเฟอร์นิเจอร์ที่ได้รับการรับรอง BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  ด้านการทดสอบ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  วัตถุประสงค์
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "การทดสอบความแข็งแรง",
                  "ตรวจสอบความสามารถในการรับน้ำหนัก",
                ],
                [
                  "การทดสอบความเสถียร",
                  "ป้องกันการพลิกคว่ำและการพังทลาย",
                ],
                [
                  "การทดสอบความทนทาน",
                  "ประเมินประสิทธิภาพจากการใช้งานซ้ำ",
                ],
                [
                  "การทดสอบความสมบูรณ์ของโครงสร้าง",
                  "ประเมินข้อต่อ โครง และการเชื่อมต่อ",
                ],
                [
                  "การทดสอบความปลอดภัย",
                  "ลดความเสี่ยงการบาดเจ็บระหว่างการใช้งานปกติ",
                ],
                [
                  "การทดสอบประสิทธิภาพการทำงาน",
                  "ยืนยันฟังก์ชันและการใช้งานตามที่ออกแบบไว้",
                ],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          เฟอร์นิเจอร์ต้องผ่านการทดสอบในห้องปฏิบัติการที่ BIS รับรอง
          เพื่อยืนยันความปลอดภัย ประสิทธิภาพ และความทนทาน
        </p>

        <SectionDivider />

        <SectionHeading>
          เครื่องหมาย ISI สำหรับเฟอร์นิเจอร์: การใช้งานและข้อกำหนดการปฏิบัติตาม
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>สิ่งที่เครื่องหมาย ISI แสดง</strong> — ยืนยันว่าเฟอร์นิเจอร์
              เป็นไปตามมาตรฐานอินเดียและได้รับการรับรองโดย BIS
            </>,
            <>
              <strong>กฎการติดเครื่องหมาย ISI</strong> — เครื่องหมายควรมองเห็นได้
              ถาวร และจัดรูปแบบถูกต้องตามแนวทางของ BIS
            </>,
            <>
              <strong>ผลกระทบจากการใช้ในทางที่ผิด</strong> — การใช้โดยไม่ได้รับอนุญาต
              อาจนำไปสู่ค่าปรับ การเพิกถอนใบอนุญาต และดำเนินคดีตามพระราชบัญญัติ BIS
              ปี 2016
            </>,
            <>
              <strong>วิธีที่ผู้ซื้อสามารถตรวจสอบได้</strong> — ผู้บริโภคสามารถตรวจสอบ
              หมายเลขใบอนุญาตบนเว็บไซต์อย่างเป็นทางการของ BIS
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ระยะเวลา ความถูกต้อง และการต่ออายุการรับรอง BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "ระยะเวลาการรับรองสำหรับผลิตภัณฑ์เฟอร์นิเจอร์",
              description:
                "โดยทั่วไป 2–3 เดือน ขึ้นอยู่กับตารางการทดสอบและการตรวจสอบโรงงาน",
            },
            {
              icon: ShieldCheck,
              title: "ความถูกต้องของใบอนุญาต BIS",
              description:
                "ใบอนุญาตมีอายุ 1–3 ปี และต้องต่ออายุก่อนหมดอายุ",
            },
            {
              icon: RefreshCw,
              title: "กระบวนการต่ออายุการรับรอง BIS",
              description:
                "การต่ออายุรวมถึงรายงานการทดสอบที่อัปเดต การตรวจสอบโรงงาน และการยืนยันการปฏิบัติตาม",
            },
            {
              icon: Eye,
              title: "การเฝ้าระวังและข้อกำหนดการปฏิบัติตามอย่างต่อเนื่อง",
              description:
                "BIS ดำเนินการตรวจสอบและทดสอบแบบสุ่มเพื่อให้แน่ใจว่ามีการปฏิบัติตามมาตรฐานอย่างต่อเนื่อง",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ประโยชน์ของเฟอร์นิเจอร์ที่ได้รับการรับรอง BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>การปฏิบัติตามกฎหมายและการเข้าถึงตลาด</strong> —
              บังคับสำหรับการขายเฟอร์นิเจอร์บางประเภทในอินเดีย
            </>,
            <>
              <strong>คุณภาพผลิตภัณฑ์ที่ดีขึ้นและความไว้วางใจของผู้บริโภค</strong>{" "}
              — การรับรอง BIS แสดงถึงความน่าเชื่อถือและความปลอดภัย
            </>,
            <>
              <strong>ข้อได้เปรียบทางการแข่งขันสำหรับผู้ผลิต</strong> —
              เฟอร์นิเจอร์ที่ได้รับการรับรองมีความน่าเชื่อถือในตลาดสูงกว่า
              และมีสิทธิ์ในการจัดซื้อ
            </>,
            <>
              <strong>สิทธิ์ในการจัดซื้อของรัฐบาล</strong> — เฉพาะผลิตภัณฑ์ที่ได้รับการรับรอง
              BIS เท่านั้นที่สามารถจัดหาให้กับผู้ซื้อของรัฐหรือสถาบันได้
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          บทลงโทษสำหรับการไม่ปฏิบัติตามกฎระเบียบ BIS สำหรับเฟอร์นิเจอร์
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>การผลิตหรือขายเฟอร์นิเจอร์ที่ไม่ได้รับการรับรอง</strong> —
              ละเมิด QCO ส่งผลให้ถูกปรับและยึดสินค้า
            </>,
            <>
              <strong>ข้อจำกัดการนำเข้าเฟอร์นิเจอร์ที่ไม่เป็นไปตามข้อกำหนด</strong> —
              สินค้านำเข้าที่ไม่ได้รับการรับรองอาจถูกบล็อกที่ศุลกากร
            </>,
            <>
              <strong>บทลงโทษภายใต้พระราชบัญญัติ BIS ปี 2016</strong> — รวมถึง
              ค่าปรับ จำคุก และห้ามขายผลิตภัณฑ์
            </>,
            <>
              <strong>ความเสี่ยงทางธุรกิจจากการไม่ปฏิบัติตาม</strong> — สูญเสีย
              ความไว้วางใจของผู้บริโภค ข้อพิพาททางกฎหมาย และการเข้าถึงตลาดที่จำกัด
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          ความท้าทายในการขอรับการรับรอง BIS สำหรับเฟอร์นิเจอร์
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "การระบุมาตรฐานอินเดียที่ถูกต้อง",
              description:
                "ผู้ผลิตต้องให้แน่ใจว่าผลิตภัณฑ์ตรงกับมาตรฐาน IS 17631–IS 17636 ที่ใช้บังคับ",
            },
            {
              title: "การจัดการข้อกำหนดการทดสอบและเอกสาร",
              description:
                "การทดสอบในห้องปฏิบัติการและเอกสารที่ถูกต้องเป็นข้อบังคับสำหรับการอนุมัติ",
            },
            {
              title: "การแก้ไขข้อสังเกตจากการตรวจสอบโรงงาน",
              description:
                "การไม่ปฏิบัติตามระหว่างการตรวจสอบอาจทำให้การรับรองล่าช้า",
            },
            {
              title: "การรักษาการปฏิบัติตามอย่างต่อเนื่องหลังการรับรอง",
              description:
                "จำเป็นต้องมีการตรวจสอบคุณภาพอย่างต่อเนื่องและปฏิบัติตามมาตรฐาน BIS เพื่อหลีกเลี่ยงค่าปรับ",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sun Certifications India สามารถช่วยได้อย่างไร
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "การสนับสนุนการสมัครและเอกสาร",
              description:
                "คำแนะนำในการยื่นคำขอ BIS ที่สมบูรณ์และถูกต้อง",
            },
            {
              icon: FlaskConical,
              title: "ความช่วยเหลือในการทดสอบผลิตภัณฑ์",
              description:
                "ช่วยประสานงานกับห้องปฏิบัติการที่ BIS อนุมัติ",
            },
            {
              icon: ClipboardCheck,
              title: "การเตรียมตัวสำหรับการตรวจสอบและคำแนะนำการปฏิบัติตาม",
              description:
                "ให้แน่ใจว่ากระบวนการในโรงงานเป็นไปตามข้อกำหนดของ BIS ก่อนการตรวจสอบ",
            },
            {
              icon: ShieldCheck,
              title: "การจัดการการปฏิบัติตามหลังการออกใบอนุญาต",
              description:
                "ให้คำแนะนำเกี่ยวกับการเก็บบันทึก การตรวจสอบเฝ้าระวัง และการอัปเดตมาตรฐาน",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          คำถามที่พบบ่อยเกี่ยวกับการรับรอง BIS สำหรับเฟอร์นิเจอร์
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "การรับรอง BIS เป็นข้อบังคับสำหรับผลิตภัณฑ์เฟอร์นิเจอร์ทั้งหมดหรือไม่?",
              answer:
                "ไม่ มีเฉพาะเฟอร์นิเจอร์ที่ระบุภายใต้ Furniture QCO 2025 เท่านั้นที่ต้องการการรับรอง BIS บังคับ",
            },
            {
              question:
                "เฟอร์นิเจอร์นำเข้าสามารถขายได้โดยไม่มีการรับรอง BIS หรือไม่?",
              answer:
                "ไม่ เฟอร์นิเจอร์ในหมวดหมู่บังคับไม่สามารถขายในอินเดียได้โดยไม่ได้รับการอนุมัติจาก BIS",
            },
            {
              question: "การรับรองเฟอร์นิเจอร์ใช้เวลานานเท่าใด?",
              answer:
                "โดยทั่วไป 2–3 เดือน ขึ้นอยู่กับการทดสอบและการตรวจสอบ",
            },
            {
              question:
                "ความแตกต่างระหว่างการรับรอง BIS และเครื่องหมาย ISI คืออะไร?",
              answer:
                "การรับรอง BIS คือกระบวนการอนุมัติ เครื่องหมาย ISI คือป้ายรับรองที่แสดงบนเฟอร์นิเจอร์",
            },
            {
              question:
                "มาตรฐาน BIS ที่ใช้บังคับสำหรับเฟอร์นิเจอร์มีอะไรบ้าง?",
              answer:
                "IS 17631–IS 17636 ครอบคลุมเก้าอี้ ม้านั่ง เก้าอี้ทำงาน โต๊ะ เตียง เตียงสองชั้น และตู้เก็บของ",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>แหล่งข้อมูลที่เกี่ยวข้อง</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                การรับรอง BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                ใบรับรอง BIS สำหรับผู้ผลิตต่างประเทศ
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadThai />

        <FaqAuthorThai questionNumber={2} />
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
