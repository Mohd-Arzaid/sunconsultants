import FaqAuthorVietnamese from "@/components/common/FaqAuthor/FaqAuthorVietnamese";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import ManyUsersAlsoReadVietnamese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadVietnamese";
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
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
import LanguageSelector from "./LanguageSelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForBedsVietnamese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default BISCertificateForBedsVietnamese;

const MetaTags = () => {
  const title = "Giấy chứng nhận BIS cho Giường | Giấy phép BIS IS 17635:2022";
  const ogTitle = "Chứng nhận BIS cho Giường – Hướng dẫn IS 17635:2022";
  const twitterTitle = "Giấy phép BIS cho Giường | IS 17635:2022";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho giường theo IS 17635:2022. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho giường theo IS 17635:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho giường theo IS 17635:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Giường, Giấy phép BIS cho Giường, IS 17635:2022, Chứng nhận BIS cho Giường";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/giuong-is-17635";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Trưởng phòng Vận hành tại Sun Certification India";

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
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
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

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/giuong-is-17635",
          },
          headline: "Giấy chứng nhận BIS cho Giường",
          description:
            "Chứng nhận BIS cho giường tại Ấn Độ là yêu cầu đảm bảo chất lượng bắt buộc, chủ yếu theo IS 17635:2022, đảm bảo các tiêu chuẩn về an toàn, độ bền và hiệu suất.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Giấy chứng nhận BIS cho Giường",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "Chứng nhận BIS cho giường tại Ấn Độ là yêu cầu đảm bảo chất lượng bắt buộc, chủ yếu theo IS 17635:2022, đảm bảo các tiêu chuẩn về an toàn, độ bền và hiệu suất.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Chứng nhận BIS có bắt buộc cho giường tại Ấn Độ không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có, theo IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Giấy chứng nhận BIS có hiệu lực bao lâu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 năm, có thể gia hạn.",
              },
            },
            {
              "@type": "Question",
              name: "Nhà sản xuất nước ngoài có thể đăng ký không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có, theo FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Có thể đăng ký Giấy chứng nhận BIS trực tuyến không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có.",
              },
            },
            {
              "@type": "Question",
              name: "Dấu ISI có bắt buộc trên giường không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có.",
              },
            },
            {
              "@type": "Question",
              name: "Quy trình mất bao lâu?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 ngày.",
              },
            },
            {
              "@type": "Question",
              name: "Giường gỗ và giường kim loại có được bao gồm không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có, nếu tuân thủ IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Kiểm tra nhà máy có bắt buộc không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Có.",
              },
            },
            {
              "@type": "Question",
              name: "Thương nhân có thể đăng ký BIS không?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Chỉ chủ sở hữu thương hiệu có kiểm soát sản xuất.",
              },
            },
          ],
        })}
      </script>
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
                    <Link to="/Blogs">Blog mới nhất</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Giấy chứng nhận BIS cho Giường – IS 17635:2022
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

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Giấy chứng nhận BIS cho Giường – Hướng dẫn đầy đủ IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="Giấy phép BIS cho Giường"
            alt="Giấy chứng nhận BIS cho Giường - Chứng nhận BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Giường là yêu cầu tuân thủ bắt buộc
          tại Ấn Độ cho các nhà sản xuất và nhập khẩu giường dùng cho mục đích sử dụng
          trong nước và thương mại. Theo Tiêu chuẩn Ấn Độ mới nhất IS
          17635:2022 – Giường (Yêu cầu An toàn), tất cả giường phải
          đáp ứng các tiêu chuẩn nghiêm ngặt về an toàn, độ bền, cấu trúc và
          hiệu suất trước khi được bán trên thị trường
          Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường là sản phẩm nội thất thiết yếu được sử dụng hàng ngày trong
          nhà, khách sạn, bệnh viện, ký túc xá,
          chỗ ở PG và cơ sở thể chế. Bất kỳ điểm yếu cấu trúc,
          cạnh sắc, hỏng vật liệu hoặc khả năng chịu tải
          kém đều có thể dẫn đến thương tích nghiêm trọng. Để ngăn chặn
          những rủi ro như vậy, Cục Tiêu chuẩn Ấn Độ (BIS) yêu cầu{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Chứng nhận BIS
          </a>{" "}
          cho Giường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích mọi thứ về Giấy phép BIS cho Giường, bao gồm
          các tiêu chuẩn áp dụng, quy trình chứng nhận, yêu cầu
          kiểm tra, tài liệu, phí, thời gian, hình phạt và
          lợi ích.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Điểm nổi bật của Chứng nhận BIS cho Giường
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Hạng mục
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Chi tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Sản phẩm", "Giường"],
                ["Tiêu chuẩn Ấn Độ", "IS 17635:2022"],
                ["Tên tiêu chuẩn", "Giường – Quy cách"],
                ["Chương trình chứng nhận", "Chứng nhận Dấu ISI BIS"],
                [
                  "Cơ quan quản lý",
                  "Cục Tiêu chuẩn Ấn Độ (BIS)",
                ],
                ["Dấu hiệu áp dụng", "Dấu ISI"],
                [
                  "Đối tượng đăng ký hợp lệ",
                  "Nhà sản xuất Ấn Độ và Nhà sản xuất nước ngoài",
                ],
                [
                  "Yêu cầu tuân thủ",
                  "Bắt buộc theo QCO Nội thất áp dụng (Quality Control Order)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Chương trình chứng nhận" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Chứng nhận Dấu ISI BIS
                      </a>
                    ) : particular === "Yêu cầu tuân thủ" ? (
                      <>
                        Bắt buộc theo{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO Nội thất áp dụng (Quality Control Order)
                          </strong>
                        </a>
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Giường là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Giường là quy trình đánh giá sự phù hợp
          thông qua đó các nhà sản xuất chứng minh sản phẩm của họ tuân thủ
          các yêu cầu quy định trong IS 17635:2022. Sau khi xác minh sự phù hợp
          thông qua kiểm tra, đánh giá nhà máy
          và xem xét quy định, nhà sản xuất được cấp giấy phép BIS và
          có thể dán Dấu ISI lên sản phẩm được chứng nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Khung chứng nhận nhằm đảm bảo giường có trên
          thị trường Ấn Độ đáp ứng các yêu cầu đã thiết lập liên quan đến:
        </p>

        <ul className={LIST_CLASS}>
          <li>Độ bền cấu trúc</li>
          <li>Độ ổn định</li>
          <li>Độ bền</li>
          <li>Hiệu suất bề mặt</li>
          <li>An toàn trong quá trình sử dụng bình thường</li>
          <li>
            Hiệu suất trong điều kiện sử dụng sai cách có thể dự đoán
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các yêu cầu này giúp tạo tiêu chuẩn thống nhất về
          chất lượng và bảo vệ người tiêu dùng cho các thiết kế giường
          và vật liệu sản xuất khác nhau.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS quan trọng đối với Giường
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường ảnh hưởng trực tiếp đến an toàn người dùng vì chúng
          được thiết kế để chịu tải trọng đáng kể trong thời gian dài.
          Sản phẩm thiết kế kém hoặc kiểm tra không đầy đủ có thể
          gặp hỏng cấu trúc, mất ổn định,
          biến dạng hoặc xuống cấp sớm.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 giải quyết các mối quan ngại này bằng cách xác định các yêu cầu
          hiệu suất và an toàn tiêu chuẩn mà nhà sản xuất phải
          đáp ứng trước khi sản phẩm vào thị trường.
          Tiêu chuẩn bao gồm các yêu cầu về độ bền, ổn định,
          độ bền, chất lượng gia công và hiệu suất bề mặt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Đối với nhà sản xuất, chứng nhận BIS mang lại nhiều lợi ích:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Quyền bán hợp pháp sản phẩm thuộc phạm vi tại Ấn Độ
          </li>
          <li>Chứng minh tuân thủ Tiêu chuẩn Ấn Độ</li>
          <li>Cải thiện khả năng tiếp nhận thị trường</li>
          <li>Tăng niềm tin người tiêu dùng</li>
          <li>Giảm rủi ro hành động quy định</li>
          <li>
            Lợi thế cạnh tranh trong mua sắm thể chế và
            thương mại
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tổng quan về IS 17635:2022 cho Giường
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chính phủ Ấn Độ đã ban hành các Lệnh Kiểm soát Chất lượng
          cho nhiều sản phẩm nội thất để đảm bảo sản phẩm
          đưa ra thị trường đáp ứng yêu cầu an toàn và chất lượng
          đã quy định.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Khi IS 17635:2022 được bao gồm trong QCO Nội thất áp dụng,
          nhà sản xuất phải có Chứng nhận BIS theo
          Chương trình I và sử dụng Dấu Tiêu chuẩn (Dấu ISI) theo
          yêu cầu cấp phép BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 là Tiêu chuẩn Ấn Độ quy định yêu cầu
          hiệu suất và an toàn cho giường dành cho người dùng
          trưởng thành trong môi trường gia đình và phi gia đình.
          Tiêu chuẩn thiết lập yêu cầu đảm bảo giường
          an toàn, hoạt động tốt và bền trong suốt
          tuổi thọ dự kiến.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Mục đích của IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 được phát triển để cung cấp tiêu chuẩn toàn diện dựa trên
          hiệu suất, áp dụng cho thiết kế giường hiện đại sản xuất
          bằng nhiều vật liệu và phương pháp chế tạo.
          Tiêu chuẩn thay thế IS 7259 (Phần 1):1988 trước đây,
          chủ yếu tập trung vào giường gỗ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn đánh giá giường mà không giới hạn tuân thủ theo vật liệu hoặc
          quy trình sản xuất cụ thể. Thay vào đó, tập trung vào
          hiệu suất sản phẩm hoàn thiện trong điều kiện kiểm tra
          quy định. Cách tiếp cận này cho phép đánh giá nhất quán giường
          gỗ, kim loại, gỗ công nghiệp và các cấu trúc khác.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Phạm vi áp dụng của IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Theo tiêu chuẩn, IS 17635:2022 bao gồm yêu cầu liên quan đến
          hiệu suất và an toàn của giường thiết kế cho người dùng
          trưởng thành. Tiêu chuẩn áp dụng cho sản phẩm dùng trong
          môi trường gia đình và phi gia đình.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn áp dụng cho:
        </p>

        <ul className={LIST_CLASS}>
          <li>Giường sản xuất hoàn chỉnh</li>
          <li>Giường gia công lắp ráp</li>
          <li>Giường lắp ráp sẵn sau khi lắp</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Điều này đảm bảo sản phẩm cung cấp dạng lắp sẵn hoặc tháo rời được
          đánh giá theo cùng tiêu chí hiệu suất và an toàn.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Mục tiêu của Tiêu chuẩn</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mục tiêu chính của IS 17635:2022 bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Đảm bảo an toàn người dùng</li>
          <li>Xác minh độ bền cấu trúc</li>
          <li>Đánh giá độ ổn định sản phẩm</li>
          <li>Đánh giá độ bền khi sử dụng lặp lại</li>
          <li>Thiết lập yêu cầu hiệu suất tối thiểu</li>
          <li>
            Thúc đẩy chất lượng sản phẩm nhất quán giữa các nhà sản xuất
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn cũng bao gồm phương pháp kiểm tra nhằm
          đánh giá giường trong điều kiện sử dụng bình thường và
          tình huống sử dụng sai cách có thể dự đoán hợp lý.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sản phẩm thuộc phạm vi IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 áp dụng cho giường dành cho người dùng
          trưởng thành trong môi trường gia đình và phi gia đình.
          Tiêu chuẩn tập trung vào hiệu suất, an toàn, độ bền, ổn định
          và độ bền của sản phẩm hoàn thiện thay vì giới hạn
          tuân thủ theo vật liệu hoặc phương pháp sản xuất cụ thể.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn áp dụng cho:
        </p>

        <ul className={LIST_CLASS}>
          <li>Giường sản xuất hoàn chỉnh</li>
          <li>Giường gia công lắp ráp</li>
          <li>Giường lắp ráp sẵn (RTA) sau khi lắp</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất cung cấp giường dạng tháo rời phải
          đảm bảo sản phẩm đã lắp tuân thủ mọi yêu cầu
          áp dụng của tiêu chuẩn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Lưu ý:</strong> Tiêu chuẩn này không bao gồm giường nước,
          giường hơi, giường gấp, giường tầng và giường cho
          người có nhu cầu đặc biệt, cũng như giường cho mục đích chăm sóc sức khỏe
          và y tế.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Xem thêm Sản phẩm Nội thất thuộc Chứng nhận BIS Bắt buộc —
            
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Chứng nhận BIS cho nội thất</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Chính theo IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu chính của IS 17635:2022 là đảm bảo giường
          an toàn, ổn định, bền và phù hợp mục đích sử dụng trong
          điều kiện sử dụng bình thường. Để đạt mục tiêu này, tiêu chuẩn
          thiết lập nhiều yêu cầu hiệu suất chính.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về Độ ổn định</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường phải thể hiện khả năng chống lật và
          mất ổn định đầy đủ trong quá trình sử dụng bình thường. Kiểm tra ổn định
          đánh giá liệu sản phẩm có an toàn khi
          chịu điều kiện tải dự kiến và chuyển động
          của người dùng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường ổn định giảm thiểu rủi ro tai nạn và cải thiện
          an toàn tổng thể cho người dùng.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về Độ bền</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kiểm tra độ bền đánh giá khả năng cấu trúc giường
          chịu tải trọng đáng kể mà không hỏng cấu trúc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các đánh giá này thường xem xét:
        </p>

        <ul className={LIST_CLASS}>
          <li>Tính toàn vẹn khung giường</li>
          <li>Độ bền mối nối</li>
          <li>Khả năng chịu tải</li>
          <li>Khả năng chống biến dạng quá mức</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu là đảm bảo sản phẩm có thể an toàn hỗ trợ
          người dùng dự kiến trong quá trình
          vận hành hàng ngày.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về Độ bền lâu dài</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kiểm tra độ bền mô phỏng sử dụng lâu dài qua các
          chu kỳ tải và chuyển động lặp lại.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mục tiêu là xác định liệu:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kết nối cấu trúc vẫn an toàn</li>
          <li>Các bộ phận vẫn hoạt động đúng</li>
          <li>
            Hiệu suất sản phẩm vẫn chấp nhận được theo thời gian
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yêu cầu độ bền giúp đảm bảo giường được chứng nhận
          duy trì độ tin cậy trong suốt
          tuổi thọ dự kiến.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Yêu cầu về Hiệu suất bề mặt
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 tham chiếu yêu cầu hiệu suất bề mặt
          áp dụng cho hoàn thiện nội thất.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tùy cấu trúc và vật liệu sử dụng, bề mặt có thể
          được đánh giá khả năng chống:
        </p>

        <ul className={LIST_CLASS}>
          <li>Hư hỏng cơ học</li>
          <li>Nhiệt ẩm</li>
          <li>Nhiệt khô</li>
          <li>Vết bẩn</li>
          <li>Hiệu suất bám dính</li>
          <li>Mài mòn và hao mòn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các yêu cầu này giúp bảo toàn cả chức năng và
          vẻ ngoài trong quá trình sử dụng bình thường.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Yêu cầu về Thiết kế và Chất lượng gia công
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn cũng chứa yêu cầu liên quan đến chất lượng
          thiết kế và gia công.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Trong các yếu tố cần xem xét:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Cạnh tiếp cận được không được gây nguy hiểm
            chấn thương.
          </li>
          <li>
            Tránh cạnh sắc và phần nhô nguy hiểm.
          </li>
          <li>
            Phần rỗng phải được đóng đúng cách khi
            cần thiết.
          </li>
          <li>
            Bộ phận chuyển động phải được thiết kế giảm rủi ro
            chấn thương.
          </li>
          <li>
            Sản phẩm hoàn thiện phải phù hợp thông số thiết kế
            và mẫu đã khai báo.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về An toàn</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          An toàn là nguyên tắc cốt lõi xuyên suốt IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn tích hợp yêu cầu nhằm giảm rủi ro phát sinh từ:
          
        </p>

        <ul className={LIST_CLASS}>
          <li>Sụp đổ cấu trúc</li>
          <li>Cạnh sắc</li>
          <li>Phần nhô nguy hiểm</li>
          <li>Hỏng bộ phận</li>
          <li>Áp lực sử dụng lặp lại</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tuân thủ các yêu cầu này giúp đảm bảo giường
          an toàn khi sử dụng bình thường và trong điều kiện
          sử dụng sai cách có thể dự đoán hợp lý.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Giường có Bắt buộc tại Ấn Độ không?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Có, đối với sản phẩm nội thất thuộc Lệnh Kiểm soát Chất lượng
          áp dụng, Chứng nhận BIS bắt buộc trước khi
          các sản phẩm đó có thể sản xuất, nhập khẩu, bán, phân phối,
          lưu kho hoặc đưa ra bán tại Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất phải xác minh trạng thái thông báo mới nhất và
          ngày thực thi do Chính phủ Ấn Độ ban hành, vì
          yêu cầu quy định có thể được cập nhật
          theo thời gian.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Yêu cầu Sử dụng Dấu ISI
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dấu ISI là bằng chứng sản phẩm tuân thủ Tiêu chuẩn Ấn Độ
          liên quan và được sản xuất theo giấy phép BIS hợp lệ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dấu hiệu chỉ được dán sau khi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kiểm tra sản phẩm thành công</li>
          <li>Đánh giá nhà máy</li>
          <li>BIS phê duyệt đơn đăng ký</li>
          <li>Cấp giấy phép</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sử dụng Dấu ISI trái phép bị cấm theo
          Luật BIS, 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Giường (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS tại Ấn Độ tuân theo thủ tục có cấu trúc
          theo Chương trình Chứng nhận ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Xác định Tiêu chuẩn & Phạm vi Sản phẩm
          
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Xác nhận khả năng áp dụng theo IS 17635:2022 và xác định
          các biến thể sản phẩm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Đơn đăng ký BIS (Trực tuyến)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Gửi đơn đăng ký qua Cổng thông tin trực tuyến BIS Manak với:
        </p>
        <ul className={LIST_CLASS}>
          <li>Chi tiết nhà sản xuất</li>
          <li>Địa chỉ nhà máy</li>
          <li>Mô tả sản phẩm</li>
          <li>Tên thương hiệu</li>
          <li>Chi tiết kiểm soát chất lượng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Phí Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Thanh toán các khoản phí áp dụng bao gồm:
        </p>
        <ul className={LIST_CLASS}>
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra</li>
          <li>Phí kiểm tra nhà máy</li>
          <li>Phí đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mẫu được kiểm tra tại các phòng thí nghiệm được BIS công nhận.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Kiểm tra Bao gồm
        </h4>
        <ul className={LIST_CLASS}>
          <li>Kiểm tra tải tĩnh</li>
          <li>Kiểm tra độ bền</li>
          <li>Kiểm tra độ ổn định</li>
          <li>Kiểm tra độ bền khớp nối</li>
          <li>Kiểm tra hoàn thiện bề mặt</li>
          <li>Kiểm tra an toàn cạnh</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Kiểm tra Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS kiểm tra:
        </p>
        <ul className={LIST_CLASS}>
          <li>Cơ sở sản xuất</li>
          <li>Kiểm soát nguyên liệu thô</li>
          <li>Kiểm tra trong quá trình</li>
          <li>Hệ thống đảm bảo chất lượng</li>
          <li>Thiết bị kiểm tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi tuân thủ, BIS cấp:
        </p>
        <ul className={LIST_CLASS}>
          <li>Giấy chứng nhận BIS</li>
          <li>Quyền sử dụng Dấu ISI</li>
          <li>Số CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Tuân thủ Sau Chứng nhận
        </h3>
        <ul className={LIST_CLASS}>
          <li>Kiểm tra giám sát</li>
          <li>Gia hạn mỗi 1–2 năm</li>
          <li>Kiểm soát chất lượng liên tục</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Giường
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đây là danh sách đầy đủ các Tài liệu Giấy chứng nhận BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Nhà sản xuất
        </h3>
        <ul className={LIST_CLASS}>
          <li>Đăng ký/giấy phép nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc</li>
          <li>Danh sách thiết bị kiểm tra</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
          <li>Sơ đồ nhà máy</li>
          <li>Kế hoạch kiểm soát chất lượng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className={LIST_CLASS}>
          <li>Bằng chứng địa chỉ</li>
          <li>Bằng chứng ID</li>
          <li>Ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận nhãn hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className={LIST_CLASS}>
          <li>Bản vẽ sản phẩm</li>
          <li>Thông số kỹ thuật</li>
          <li>Hóa đơn vật liệu</li>
          <li>Báo cáo kiểm tra nội bộ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Giường (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường phải trải qua kiểm tra nghiêm ngặt để đảm bảo tuân thủ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Kiểm tra Bắt buộc
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Điều khoản
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Yêu cầu
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thiết kế và chất lượng gia công
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra độ ổn định
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tải Tĩnh Dọc trên Đế Giường
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tải Tĩnh Dọc trên Thanh Bên
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Ngang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tác động Dọc
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Kiểm tra phải được thực hiện chỉ tại các phòng thí nghiệm được BIS phê
          duyệt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp & Cách Tránh
        </h2>

        <ul className={LIST_CLASS}>
          <li>
            <strong>Lựa chọn tiêu chuẩn không đúng</strong> – Luôn xác minh
            Tiêu chuẩn Ấn Độ đúng.
          </li>
          <li>
            <strong>Tài liệu kém</strong> – Tài liệu thiếu gây chậm trễ; chuẩn
            bị trước.
          </li>
          <li>
            <strong>Kiểm tra phòng thí nghiệm thất bại</strong> – Đảm bảo vật
            liệu và xây dựng chất lượng cao.
          </li>
          <li>
            <strong>Nhà máy chưa sẵn sàng</strong> – Đảm bảo QMS và thiết bị
            kiểm tra được bảo trì đúng cách.
          </li>
          <li>
            <strong>Nhãn hiệu không khớp</strong> – Tên thương hiệu phải khớp
            với đơn đăng ký giấy phép.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán giường không có chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className={LIST_CLASS}>
          <li>Phạt nặng</li>
          <li>Tịch thu sản phẩm</li>
          <li>Đóng cửa kinh doanh</li>
          <li>Hành động pháp lý</li>
          <li>Cấm thị trường</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi cho Chứng nhận BIS của Giường?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp tư vấn BIS đầu cuối, bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Lập bản đồ tiêu chuẩn</li>
          <li>Hỗ trợ tài liệu</li>
          <li>Phối hợp kiểm tra</li>
          <li>Nộp đơn đăng ký</li>
          <li>Xử lý kiểm tra nhà máy</li>
          <li>Liên lạc BIS</li>
          <li>Cấp giấy phép</li>
          <li>Hỗ trợ gia hạn & giám sát</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Giường theo IS 17635:2022 là yêu cầu pháp lý
          bắt buộc đảm bảo an toàn, chất lượng và độ bền. Có được Giấy phép BIS
          cho Giường bảo vệ người tiêu dùng, tăng cường giá trị thương hiệu và
          cho phép tiếp cận thị trường hợp pháp trên toàn Ấn Độ. Với sự hỗ trợ
          chuyên gia, quy trình chứng nhận trở nên liền mạch và hiệu quả.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Giường
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc cho giường tại Ấn Độ không?
              </strong>
              <br />
              Có, theo IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Giấy chứng nhận BIS có hiệu lực bao lâu?</strong>
              <br />
              1–2 năm, có thể gia hạn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Nhà sản xuất nước ngoài có thể đăng ký không?
              </strong>
              <br />
              Có, theo FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Có thể đăng ký Giấy chứng nhận BIS trực tuyến không?
              </strong>
              <br />
              Có.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Dấu ISI có bắt buộc trên giường không?
              </strong>
              <br />
              Có.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quy trình mất bao lâu?</strong>
              <br />
              30–45 ngày.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Giường gỗ và giường kim loại có được bao gồm không?
              </strong>
              <br />
              Có, nếu tuân thủ IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Kiểm tra nhà máy có bắt buộc không?
              </strong>
              <br />
              Có.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Thương nhân có thể đăng ký BIS không?</strong>
              <br />
              Chỉ chủ sở hữu thương hiệu có kiểm soát sản xuất.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Giường - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài nguyên liên quan
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Giấy chứng nhận Dấu ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Giấy phép BIS FMCS
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadVietnamese />

        <FaqAuthorVietnamese questionNumber={1} />
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
              Dịch vụ của Chúng tôi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Tư vấn Chứng nhận Tốt nhất Ấn Độ
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
                alt="Logo BIS"
                title="Logo BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Dấu BIS (Giấy phép ISI) cho Sản xuất Nước ngoài
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="Logo CDSCO"
                title="Logo CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Đăng ký CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="Logo BISCRS"
                title="Logo BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Đăng ký BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Quản lý Chất thải Nhựa"
                title="Quản lý Chất thải Nhựa"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Quản lý Chất thải Nhựa
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Giấy chứng nhận EPR"
                title="Logo Giấy chứng nhận EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Giấy chứng nhận EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="Logo LMPC"
                title="Logo LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Giấy chứng nhận LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="Logo BIS"
                title="Logo BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Giấy chứng nhận Đăng ký BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo Dấu ISI"
                title="Logo Dấu ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Dấu ISI (BIS) cho Nhà sản xuất Ấn Độ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
