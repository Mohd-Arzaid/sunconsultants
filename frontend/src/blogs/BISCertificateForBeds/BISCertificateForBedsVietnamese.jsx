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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForBedsVietnamese = () => {
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
          Giấy chứng nhận BIS cho Giường là yêu cầu tuân thủ bắt buộc tại Ấn Độ
          cho các nhà sản xuất và nhập khẩu giường dùng cho mục đích sử dụng
          trong nước và thương mại. Theo Tiêu chuẩn Ấn Độ mới nhất IS 17635:2022
          – Giường (Yêu cầu An toàn), tất cả giường phải đáp ứng các tiêu chuẩn
          nghiêm ngặt về an toàn, độ bền, cấu trúc và hiệu suất trước khi được
          bán trên thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường là sản phẩm nội thất thiết yếu được sử dụng hàng ngày trong
          nhà, khách sạn, bệnh viện, ký túc xá, chỗ ở PG và cơ sở thể chế. Bất
          kỳ điểm yếu cấu trúc, cạnh sắc, hỏng vật liệu hoặc khả năng chịu tải
          kém đều có thể dẫn đến thương tích nghiêm trọng. Để ngăn chặn những
          rủi ro như vậy, Cục Tiêu chuẩn Ấn Độ (BIS) yêu cầu Chứng nhận BIS cho
          Giường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích mọi thứ về Giấy phép BIS cho
          Giường, bao gồm các tiêu chuẩn áp dụng, quy trình chứng nhận, yêu cầu
          kiểm tra, tài liệu, phí, thời gian, hình phạt và lợi ích.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là chương trình đánh giá sự phù hợp được giới thiệu bởi
          Cục Tiêu chuẩn Ấn Độ, cơ quan tiêu chuẩn quốc gia của Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giấy chứng nhận BIS là gì?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS xác nhận rằng sản phẩm tuân thủ Tiêu chuẩn Ấn Độ
          và an toàn, đáng tin cậy và phù hợp để sử dụng. Sản phẩm được chứng
          nhận mang Dấu Chứng nhận BIS, thường được gọi là Dấu ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nó có nghĩa là sản phẩm đã vượt qua thành công:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra trong phòng thí nghiệm</li>
          <li>Kiểm tra nhà máy</li>
          <li>Xác minh kiểm soát chất lượng</li>
          <li>Đánh giá tuân thủ an toàn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Logo BIS trên giường đảm bảo với khách hàng rằng sản phẩm đáp ứng các
          tiêu chuẩn chất lượng và an toàn được chính phủ phê duyệt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho Giường – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho giường là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – Giường: Yêu cầu An toàn
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này định nghĩa các yêu cầu an toàn và hiệu suất thiết yếu
          cho giường được sử dụng trong môi trường dân cư và thương mại.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 Bao gồm
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ bền cấu trúc</li>
          <li>Khả năng chịu tải</li>
          <li>Ổn định và độ bền</li>
          <li>Chất lượng vật liệu</li>
          <li>Cạnh và hoàn thiện bề mặt</li>
          <li>An toàn chống sụp đổ</li>
          <li>Không có nguy cơ mắc kẹt</li>
          <li>Hiệu suất dài hạn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bất kỳ giường nào được sản xuất hoặc nhập khẩu vào Ấn Độ phải tuân thủ
          IS 17635:2022 và có Đăng ký BIS cho Giường.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là Bắt buộc cho Giường
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường được sử dụng trong thời gian dài và hỗ trợ trọng lượng con
          người liên tục. Giường được thiết kế kém có thể gây thương tích, sụp
          đổ hoặc rủi ro sức khỏe lâu dài.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lý do Cần Chứng nhận BIS cho Giường
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đảm bảo tính toàn vẹn cấu trúc</li>
          <li>Ngăn chặn sụp đổ và vỡ</li>
          <li>Kiểm soát chất lượng vật liệu</li>
          <li>Loại bỏ cạnh sắc và hoàn thiện không an toàn</li>
          <li>Bảo vệ người tiêu dùng</li>
          <li>Đảm bảo chất lượng quốc gia đồng nhất</li>
          <li>Bắt buộc theo thông báo BIS</li>
          <li>Cần thiết cho việc bán hợp pháp tại Ấn Độ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Không có Giấy phép BIS cho Giường, việc bán hoặc nhập khẩu giường tại
          Ấn Độ là bất hợp pháp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Giường (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS tại Ấn Độ tuân theo một thủ tục có cấu trúc
          theo Chương trình Chứng nhận ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Xác định Tiêu chuẩn & Phạm vi Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Xác nhận khả năng áp dụng theo IS 17635:2022 và xác định các biến thể
          sản phẩm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Đơn đăng ký BIS (Trực tuyến)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Gửi đơn đăng ký qua Cổng thông tin trực tuyến BIS Manak với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra</li>
          <li>Phí kiểm tra</li>
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS</li>
          <li>Quyền sử dụng Dấu ISI</li>
          <li>Số CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Tuân thủ Sau Chứng nhận
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra giám sát</li>
          <li>Gia hạn mỗi 1–2 năm</li>
          <li>Kiểm soát chất lượng liên tục</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Giường
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này bao gồm các yêu cầu liên quan đến
          hiệu suất và an toàn của giường cho người lớn cho mục đích sử dụng
          trong nước và ngoài nước.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này áp dụng cho giường được sản xuất/
          chế tạo hoàn toàn. Nó cũng áp dụng cho các đơn vị sẵn sàng lắp ráp;
          trong trường hợp đó các yêu cầu của tiêu chuẩn này sẽ áp dụng cho các
          đơn vị đã lắp ráp.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> Tiêu chuẩn này không bao gồm giường nước, giường
          hơi, giường gấp, giường tầng và giường cho người có nhu cầu đặc biệt,
          cũng không bao gồm giường cho mục đích chăm sóc sức khỏe và y tế.
        </p>

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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bằng chứng địa chỉ</li>
          <li>Bằng chứng ID</li>
          <li>Ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận nhãn hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
                  Thiết kế và chất lượng làm việc
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
                  Kiểm tra Độ ổn định
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

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Lựa chọn tiêu chuẩn không đúng</strong> – Luôn xác minh Tiêu
            chuẩn Ấn Độ đúng.
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
          Lợi ích của Chứng nhận BIS cho Giường
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bán hợp pháp tại Ấn Độ</li>
          <li>Tăng niềm tin của khách hàng</li>
          <li>Truy cập các nền tảng thương mại điện tử</li>
          <li>Đủ điều kiện cho đấu thầu chính phủ</li>
          <li>Giảm trách nhiệm</li>
          <li>Uy tín thương hiệu mạnh</li>
          <li>Tuân thủ tiêu chuẩn Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán giường không có chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phạt nặng</li>
          <li>Tịch thu sản phẩm</li>
          <li>Đóng cửa kinh doanh</li>
          <li>Hành động pháp lý</li>
          <li>Cấm thị trường</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Giấy chứng nhận BIS cho Giường?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các thực thể sau phải có Giấy phép BIS cho Giường:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài</li>
          <li>Nhà nhập khẩu</li>
          <li>Thương hiệu nội thất</li>
          <li>Nhà cung cấp OEM/ODM</li>
          <li>Người bán thương mại điện tử</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi đơn vị sản xuất yêu cầu giấy phép BIS riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi cho Chứng nhận BIS của Giường?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp tư vấn BIS đầu cuối, bao gồm:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
              <strong>3. Nhà sản xuất nước ngoài có thể đăng ký không?</strong>
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
              <strong>5. Dấu ISI có bắt buộc trên giường không?</strong>
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
              <strong>8. Kiểm tra nhà máy có bắt buộc không?</strong>
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
