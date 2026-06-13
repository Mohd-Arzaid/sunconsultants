import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
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
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";

const BISCertificateForFurnitureVietnamese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default BISCertificateForFurnitureVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho Nội thất tại Ấn Độ | Hướng dẫn Chứng nhận, Giấy phép & Quy trình BIS";
  const ogTitle =
    "Chứng nhận BIS cho Nội thất tại Ấn Độ - Hướng dẫn Chứng nhận BIS Hoàn chỉnh";
  const twitterTitle =
    "Chứng nhận BIS cho Nội thất | Hướng dẫn Chứng nhận BIS Hoàn chỉnh của BIS Ấn Độ";
  const metaDescription =
    "Chứng nhận BIS cho Nội thất tại Ấn Độ - hướng dẫn đầy đủ về Chứng nhận BIS, Giấy phép BIS, chi phí, tài liệu, tiêu chuẩn, quy trình, đơn đăng ký trực tuyến & Dấu BIS cho các nhà sản xuất nội thất.";
  const ogDescription =
    "Đang tìm Chứng nhận BIS cho Nội thất tại Ấn Độ? Tìm hiểu về Giấy phép BIS, Dấu BIS, tiêu chuẩn áp dụng, quy trình chứng nhận, chi phí, tài liệu & yêu cầu tuân thủ chi tiết.";
  const twitterDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Nội thất tại Ấn Độ - quy trình Chứng nhận BIS, chi phí, tài liệu, Dấu BIS, tiêu chuẩn & đơn đăng ký trực tuyến được giải thích.";
  const metaKeywords =
    "Chứng nhận BIS cho Nội thất, Chứng nhận BIS cho Nội thất, Giấy phép BIS cho Nội thất, BIS là gì, BIS Ấn Độ";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/noi-that";
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
                    <Link to="/">Trang chủ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Blog Mới Nhất</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Chứng nhận BIS cho Nội thất tại Ấn Độ
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
        <ServicesRightSideContentVietnamese />
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
          Chứng nhận BIS cho Nội thất tại Ấn Độ: Hướng dẫn Hoàn chỉnh về Tiêu
          chuẩn BIS, Dấu ISI, Quy trình &amp; Tuân thủ
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Giấy phép BIS cho Nội thất"
            alt="Chứng nhận BIS cho Nội thất tại Ấn Độ - Hướng dẫn Chứng nhận BIS Hoàn chỉnh"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Nội thất là một phần thiết yếu trong nhà ở, văn phòng và không gian
            công cộng. Đảm bảo an toàn, độ bền và chất lượng nội thất là điều
            vô cùng quan trọng đối với cả người tiêu dùng và nhà sản xuất. Tại
            Ấn Độ,{" "}
            <strong>chứng nhận BIS cho nội thất</strong> là yêu cầu bắt buộc
            đối với một số danh mục nội thất theo Furniture (Quality Control)
            Order, 2025. Hướng dẫn này cung cấp tổng quan chi tiết về tiêu chuẩn
            BIS, dấu ISI, quy trình chứng nhận và yêu cầu tuân thủ.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Chứng nhận BIS cho Nội thất là gì?
        </SectionHeading>

        <SubSectionHeading>
          Ý nghĩa Chứng nhận BIS cho Nội thất
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là quy trình chính thức mà Cục Tiêu chuẩn Ấn Độ (BIS)
          đánh giá sản phẩm để đảm bảo chúng tuân thủ các tiêu chuẩn Ấn Độ. Đối
          với nội thất, chứng nhận này đảm bảo sản phẩm đáp ứng các thông số an
          toàn, hiệu suất và chất lượng đã được xác định. Sau khi được chứng
          nhận, nhà sản xuất có thể sử dụng <strong>dấu ISI</strong> trên nội
          thất của mình, thể hiện sự tuân thủ với người mua.
        </p>

        <SubSectionHeading>
          Sự khác biệt giữa Chứng nhận BIS và Dấu ISI cho Nội thất
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Chứng nhận BIS</strong> — Quy trình đánh giá, kiểm tra
              và phê duyệt bởi BIS.
            </>,
            <>
              <strong>Dấu ISI</strong> — Dấu được cấp sau khi chứng nhận BIS,
              cho biết sản phẩm đáp ứng tiêu chuẩn Ấn Độ. Dấu ISI là bảo đảm
              tuân thủ hiển thị đối với người tiêu dùng.
            </>,
          ]}
        />

        <SubSectionHeading>
          Tại sao Chứng nhận BIS quan trọng đối với Nhà sản xuất và Nhà nhập
          khẩu Nội thất
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Tuân thủ pháp lý theo quy định của Ấn Độ",
            "Tiếp cận thị trường Ấn Độ và cơ hội mua sắm của chính phủ",
            "Nâng cao niềm tin người tiêu dùng và lợi thế cạnh tranh",
            "Giảm thiểu rủi ro thu hồi, phạt tiền hoặc hạn chế nhập khẩu",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Yêu cầu Chứng nhận BIS cho Nhà sản xuất Nội thất
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Yêu cầu
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Chi tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Cơ quan Chứng nhận", "Cục Tiêu chuẩn Ấn Độ (BIS)"],
                ["Chương trình Chứng nhận", "Scheme-I (Chứng nhận Dấu ISI)"],
                ["Luật Áp dụng", "Furniture (Quality Control) Order, 2025"],
                ["Đánh dấu Bắt buộc", "Dấu ISI kèm Số Giấy phép BIS"],
                [
                  "Kiểm tra Sản phẩm",
                  "Bắt buộc qua các phòng thí nghiệm được BIS công nhận",
                ],
                ["Thanh tra Nhà máy", "Bắt buộc trước khi cấp giấy phép"],
                [
                  "Áp dụng cho",
                  "Nhà sản xuất Ấn Độ, Nhà sản xuất Nước ngoài, Nhà nhập khẩu",
                ],
                ["Giám sát Sau Chứng nhận", "Bắt buộc"],
                [
                  "Gia hạn Giấy phép",
                  "Gia hạn định kỳ theo yêu cầu của BIS",
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
          Khung Pháp lý cho Chứng nhận BIS Nội thất tại Ấn Độ
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Furniture QCO 2025 quy định một số danh mục nội thất phải tuân thủ tiêu chuẩn BIS. QCO cung cấp cơ sở pháp lý cho chứng nhận bắt buộc và nêu rõ các loại nội thất được bao phủ.",
            },
            {
              icon: Building2,
              title: "Vai trò của Cục Tiêu chuẩn Ấn Độ (BIS)",
              description:
                "BIS xây dựng Tiêu chuẩn Ấn Độ (IS), đánh giá đơn vị sản xuất, tiến hành kiểm tra sản phẩm và cấp giấy phép sử dụng dấu ISI. BIS cũng giám sát tuân thủ thông qua kiểm toán và giám sát.",
            },
          ]}
        />

        <SubSectionHeading>
          Chứng nhận BIS Bắt buộc so với Tự nguyện cho Nội thất
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Bắt buộc</strong> — Các danh mục được quy định theo
              Furniture QCO, như giường, ghế và tủ lưu trữ.
            </>,
            <>
              <strong>Tự nguyện</strong> — Nhà sản xuất có thể chọn chứng nhận
              cho các danh mục sản phẩm bổ sung để nâng cao uy tín thị trường.
            </>,
          ]}
        />

        <SubSectionHeading>
          Phạm vi Áp dụng của Furniture QCO đối với Nhà sản xuất và Nhà nhập
          khẩu
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Nhà sản xuất Ấn Độ sản xuất nội thất thuộc phạm vi QCO",
            "Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ",
            "Nhà nhập khẩu bán nội thất trong nước",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sản phẩm Nội thất được Bao phủ bởi Chứng nhận BIS
        </SectionHeading>

        <SubSectionHeading>
          Danh mục Nội thất và Tiêu chuẩn BIS Áp dụng
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Danh mục Nội thất
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Tiêu chuẩn Ấn Độ Áp dụng
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Tên Tiêu chuẩn
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Yêu cầu Chứng nhận
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Ghế Làm việc",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Ghế và Ghế đẩu Mục đích Chung",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Bàn và Bàn làm việc",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Tủ Lưu trữ",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Giường",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Giường Tầng",
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
                    Bắt buộc theo Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tất cả sản phẩm được bao phủ phải tuân thủ các tiêu chuẩn BIS liên
          quan và mang dấu ISI hợp lệ trước khi được bán tại Ấn Độ. Các tiêu
          chuẩn này xác định yêu cầu tối thiểu về an toàn, độ ổn định và khả
          năng sử dụng của nội thất.
        </p>

        <SectionDivider />

        <SectionHeading>
          Tiêu chuẩn BIS cho Nội thất và Yêu cầu của chúng
        </SectionHeading>

        <SubSectionHeading>
          Yêu cầu Hiệu suất theo Tiêu chuẩn BIS Nội thất
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Nội thất phải chịu được sử dụng bình thường mà không bị biến dạng hoặc
          hỏng cấu trúc.
        </p>
        <CheckPointsList
          points={[
            "Khả năng chịu tải trong điều kiện tải bình thường và tải đỉnh",
            "Độ bền khớp nối và kết nối",
            "Độ ổn định vật liệu không bị cong vênh hoặc suy giảm",
          ]}
        />

        <SubSectionHeading>
          Yêu cầu Kiểm tra An toàn và Độ bền
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Nội thất phải đáp ứng các tiêu chuẩn an toàn để ngăn ngừa tai nạn và
          tiêu chuẩn độ bền để đảm bảo tuổi thọ lâu dài.
        </p>
        <CheckPointsList
          points={[
            "Ngăn ngừa lật (ghế, ghế đẩu và các đơn vị không ổn định)",
            "Ngăn ngừa sụp đổ dưới tải trọng định mức (giường, giường tầng, tủ lưu trữ)",
            "Độ bền lâu dài thông qua kiểm tra hiệu suất sử dụng lặp lại",
          ]}
        />

        <SubSectionHeading>
          Thông số Chất lượng được Đánh giá trong Chứng nhận
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Chất lượng vật liệu và hoàn thiện bề mặt",
            "Khả năng chịu tải",
            "Độ ổn định, công thái học và tính năng an toàn",
          ]}
        />

        <SubSectionHeading>
          Yêu cầu Tuân thủ cho các Danh mục Nội thất Khác nhau
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi loại nội thất có tiêu chuẩn IS cụ thể nêu rõ kích thước, kiểm tra
          hiệu suất và dung sai cho phép. Tuân thủ đảm bảo tính đồng nhất và
          chất lượng giữa các nhà sản xuất.
        </p>

        <SectionDivider />

        <SectionHeading>
          Ai Cần Chứng nhận BIS cho Nội thất?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Nhà sản xuất Nội thất Ấn Độ",
              description:
                "Tất cả nhà sản xuất trong nước của nội thất thuộc phạm vi Furniture QCO phải có chứng nhận BIS trước khi bán sản phẩm.",
            },
            {
              icon: Globe,
              title: "Nhà sản xuất Nước ngoài Xuất khẩu Nội thất sang Ấn Độ",
              description:
                "Nhà xuất khẩu phải tuân thủ tiêu chuẩn BIS để bán nội thất hợp pháp tại Ấn Độ và sử dụng dấu ISI.",
            },
            {
              icon: Package,
              title: "Nhà nhập khẩu Nội thất và Chủ sở hữu Thương hiệu",
              description:
                "Nhà nhập khẩu phải đảm bảo nội thất họ đưa vào Ấn Độ tuân thủ quy chuẩn BIS, ngay cả khi sản xuất ở nước ngoài.",
            },
            {
              icon: ShoppingCart,
              title: "Người bán Thương mại Điện tử và Doanh nghiệp Bán lẻ",
              description:
                "Nhà bán lẻ trực tuyến và ngoại tuyến bán nội thất thuộc các danh mục được bao phủ phải xác minh chứng nhận BIS để tránh trách nhiệm pháp lý.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Chứng nhận BIS ISI cho Nội thất: Quy trình Từng bước
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Xác định Sản phẩm và Lựa chọn Tiêu chuẩn Áp dụng",
              description:
                "Xác định danh mục nội thất và tiêu chuẩn BIS liên quan (IS 17631–IS 17636) để kiểm tra và chứng nhận.",
            },
            {
              title: "Kiểm tra Sản phẩm tại Phòng thí nghiệm được BIS Công nhận",
              description:
                "Nội thất được kiểm tra về độ bền, độ ổn định và tuổi thọ tại các phòng thí nghiệm được BIS phê duyệt. Báo cáo kiểm tra là bắt buộc cho đơn đăng ký.",
            },
            {
              title: "Nộp Đơn BIS",
              description:
                "Nhà sản xuất nộp đơn cho BIS kèm thông số sản phẩm, chi tiết kỹ thuật và báo cáo kiểm tra.",
            },
            {
              title: "Thanh tra và Đánh giá Nhà máy",
              description:
                "BIS tiến hành kiểm toán nhà máy để kiểm tra quy trình sản xuất, hệ thống kiểm soát chất lượng và tính nhất quán sản xuất.",
            },
            {
              title: "Cấp Giấy phép BIS và Quyền sử dụng Dấu ISI",
              description:
                "Sau khi được phê duyệt, BIS cấp giấy phép cho phép nhà sản xuất sử dụng dấu ISI trên nội thất đã được chứng nhận.",
            },
            {
              title: "Yêu cầu Tuân thủ Sau Chứng nhận",
              description:
                "Kiểm toán định kỳ, kiểm tra định kỳ và tuân thủ tiêu chuẩn BIS là bắt buộc để duy trì chứng nhận.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Tài liệu Cần thiết cho Chứng nhận BIS Nội thất
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Đăng ký Công ty và Tài liệu Sản xuất</strong> — Giấy
              phép kinh doanh, đăng ký GST và chi tiết cơ sở sản xuất.
            </>,
            <>
              <strong>Thông số Kỹ thuật và Bản vẽ Sản phẩm</strong> — Thiết kế
              chi tiết, vật liệu sử dụng và hướng dẫn lắp ráp.
            </>,
            <>
              <strong>Báo cáo Kiểm tra và Tài liệu Kiểm soát Chất lượng</strong>{" "}
              — Báo cáo từ phòng thí nghiệm được BIS phê duyệt chứng minh tuân
              thủ tiêu chuẩn IS.
            </>,
            <>
              <strong>Tài liệu Nhà máy và Quy trình Sản xuất</strong> — Hệ
              thống quản lý chất lượng, luồng quy trình và thủ tục kiểm tra.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Yêu cầu Kiểm tra cho Nội thất được Chứng nhận BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Lĩnh vực Kiểm tra
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Mục đích
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Kiểm tra Độ bền",
                  "Xác minh khả năng chịu tải",
                ],
                [
                  "Kiểm tra Độ ổn định",
                  "Ngăn ngừa lật và sụp đổ",
                ],
                [
                  "Kiểm tra Tuổi thọ",
                  "Đánh giá hiệu suất qua sử dụng lặp lại",
                ],
                [
                  "Kiểm tra Tính toàn vẹn Cấu trúc",
                  "Đánh giá khớp nối, khung và kết nối",
                ],
                [
                  "Kiểm tra An toàn",
                  "Giảm rủi ro thương tích trong sử dụng bình thường",
                ],
                [
                  "Kiểm tra Hiệu suất Chức năng",
                  "Xác nhận chức năng và khả năng sử dụng theo thiết kế",
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
          Nội thất phải được kiểm tra tại các phòng thí nghiệm được BIS công
          nhận để xác thực các tuyên bố về an toàn, hiệu suất và độ bền.
        </p>

        <SectionDivider />

        <SectionHeading>
          Dấu ISI cho Nội thất: Quy tắc Sử dụng và Yêu cầu Tuân thủ
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Dấu ISI Thể hiện điều gì</strong> — Xác nhận nội thất
              đáp ứng tiêu chuẩn Ấn Độ và đã được BIS chứng nhận.
            </>,
            <>
              <strong>Quy tắc Gắn Dấu ISI</strong> — Dấu phải hiển thị rõ ràng,
              bền vững và định dạng đúng theo hướng dẫn của BIS.
            </>,
            <>
              <strong>Hậu quả Sử dụng Sai</strong> — Sử dụng trái phép có thể
              dẫn đến phạt tiền, thu hồi giấy phép và hành động pháp lý theo
              Đạo luật BIS, 2016.
            </>,
            <>
              <strong>Cách Người mua Xác minh</strong> — Người tiêu dùng có thể
              xác minh số giấy phép trên trang web chính thức của BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Thời gian, Hiệu lực và Gia hạn Chứng nhận BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Thời gian Chứng nhận cho Sản phẩm Nội thất",
              description:
                "Thường từ 2–3 tháng, tùy thuộc vào lịch kiểm tra và thanh tra nhà máy.",
            },
            {
              icon: ShieldCheck,
              title: "Hiệu lực Giấy phép BIS",
              description:
                "Giấy phép có hiệu lực 1–3 năm và cần gia hạn trước khi hết hạn.",
            },
            {
              icon: RefreshCw,
              title: "Quy trình Gia hạn Chứng nhận BIS",
              description:
                "Gia hạn bao gồm báo cáo kiểm tra cập nhật, thanh tra nhà máy và xác nhận tuân thủ.",
            },
            {
              icon: Eye,
              title: "Giám sát và Yêu cầu Tuân thủ Liên tục",
              description:
                "BIS tiến hành kiểm toán ngẫu nhiên và kiểm tra để đảm bảo tuân thủ tiêu chuẩn liên tục.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Lợi ích của Nội thất được Chứng nhận BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Tuân thủ Pháp lý và Tiếp cận Thị trường</strong> — Bắt
              buộc để bán một số loại nội thất tại Ấn Độ.
            </>,
            <>
              <strong>Cải thiện Chất lượng Sản phẩm và Niềm tin Người tiêu
              dùng</strong> — Chứng nhận BIS thể hiện độ tin cậy và an toàn.
            </>,
            <>
              <strong>Lợi thế Cạnh tranh cho Nhà sản xuất</strong> — Nội thất
              được chứng nhận có uy tín thị trường cao hơn và đủ điều kiện mua
              sắm.
            </>,
            <>
              <strong>Đủ điều kiện Mua sắm Chính phủ</strong> — Chỉ sản phẩm
              được chứng nhận BIS mới có thể cung cấp cho người mua chính phủ
              hoặc tổ chức.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Hình phạt khi Không Tuân thủ Quy định BIS về Nội thất
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Sản xuất hoặc Bán Nội thất Chưa được Chứng nhận</strong>{" "}
              — Vi phạm QCO, dẫn đến phạt tiền và tịch thu sản phẩm.
            </>,
            <>
              <strong>Hạn chế Nhập khẩu Nội thất Không Tuân thủ</strong> —
              Hàng nhập khẩu chưa được chứng nhận có thể bị chặn tại hải quan.
            </>,
            <>
              <strong>Hình phạt theo Đạo luật BIS, 2016</strong> — Bao gồm phạt
              tiền, tù giam và cấm bán sản phẩm.
            </>,
            <>
              <strong>Rủi ro Kinh doanh khi Không Tuân thủ</strong> — Mất niềm
              tin người tiêu dùng, tranh chấp pháp lý và hạn chế tiếp cận thị
              trường.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Thách thức trong Việc Đạt Chứng nhận BIS cho Nội thất
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Xác định Tiêu chuẩn Ấn Độ Đúng",
              description:
                "Nhà sản xuất phải đảm bảo sản phẩm phù hợp với tiêu chuẩn IS 17631–IS 17636 áp dụng.",
            },
            {
              title: "Quản lý Yêu cầu Kiểm tra và Tài liệu",
              description:
                "Kiểm tra phòng thí nghiệm và tài liệu đầy đủ là bắt buộc để được phê duyệt.",
            },
            {
              title: "Xử lý Nhận xét từ Kiểm toán Nhà máy",
              description:
                "Không tuân thủ trong kiểm toán có thể làm chậm chứng nhận.",
            },
            {
              title: "Duy trì Tuân thủ Liên tục Sau Chứng nhận",
              description:
                "Giám sát chất lượng liên tục và tuân thủ tiêu chuẩn BIS là cần thiết để tránh hình phạt.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sun Certifications India Có thể Hỗ trợ Như thế nào
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Hỗ trợ Đơn đăng ký và Tài liệu",
              description:
                "Hướng dẫn nộp đơn BIS đầy đủ và chính xác.",
            },
            {
              icon: FlaskConical,
              title: "Hỗ trợ Kiểm tra Sản phẩm",
              description:
                "Giúp phối hợp với các phòng thí nghiệm được BIS phê duyệt.",
            },
            {
              icon: ClipboardCheck,
              title: "Chuẩn bị Kiểm toán và Hướng dẫn Tuân thủ",
              description:
                "Đảm bảo quy trình nhà máy đáp ứng yêu cầu BIS trước khi thanh tra.",
            },
            {
              icon: ShieldCheck,
              title: "Quản lý Tuân thủ Sau Cấp Giấy phép",
              description:
                "Tư vấn về lưu trữ hồ sơ, kiểm toán giám sát và cập nhật tiêu chuẩn.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Câu hỏi Thường gặp về Chứng nhận BIS cho Nội thất
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "Chứng nhận BIS có bắt buộc cho tất cả sản phẩm nội thất không?",
              answer:
                "Không. Chỉ nội thất được liệt kê theo Furniture QCO 2025 mới yêu cầu chứng nhận BIS bắt buộc.",
            },
            {
              question:
                "Nội thất nhập khẩu có thể bán mà không có Chứng nhận BIS không?",
              answer:
                "Không. Nội thất thuộc các danh mục bắt buộc không thể bán tại Ấn Độ nếu chưa được BIS phê duyệt.",
            },
            {
              question: "Chứng nhận Nội thất mất bao lâu?",
              answer:
                "Thường từ 2–3 tháng, tùy thuộc vào kiểm tra và thanh tra.",
            },
            {
              question:
                "Sự khác biệt giữa Chứng nhận BIS và Dấu ISI là gì?",
              answer:
                "Chứng nhận BIS là quy trình phê duyệt; dấu ISI là nhãn chứng nhận hiển thị trên nội thất.",
            },
            {
              question:
                "Tiêu chuẩn BIS nào áp dụng cho Nội thất?",
              answer:
                "IS 17631–IS 17636 bao phủ ghế, ghế đẩu, ghế làm việc, bàn, giường, giường tầng và tủ lưu trữ.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Tài nguyên Liên quan</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Chứng nhận BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Chứng nhận BIS cho Nhà sản xuất Nước ngoài
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={2} />
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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
