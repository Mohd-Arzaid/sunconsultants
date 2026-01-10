import FaqAuthorVietnamese from "@/components/common/FaqAuthor/FaqAuthorVietnamese";
import ManyUsersAlsoReadVietnamese from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadVietnamese";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
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

const BISCertificateForChairAndStoolsVietnamese = () => {
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

export default BISCertificateForChairAndStoolsVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu | Giấy phép BIS IS 17632:2022";
  const ogTitle = "Chứng nhận BIS cho Ghế và Ghế đẩu – Hướng dẫn IS 17632:2022";
  const twitterTitle = "Giấy phép BIS cho Ghế và Ghế đẩu | IS 17632:2022";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho Ghế và Ghế đẩu theo IS 17632:2022. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Ghế và Ghế đẩu theo IS 17632:2022. Biết quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Ghế và Ghế đẩu theo IS 17632:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu, Giấy phép BIS cho Ghế và Ghế đẩu, IS 17632:2022, Chứng nhận BIS cho Ghế và Ghế đẩu";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632";
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
                    Giấy chứng nhận BIS cho Ghế và Ghế đẩu – IS 17632:2022
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
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung – Hướng dẫn Đầy
          đủ IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Giấy phép BIS cho Ghế và Ghế đẩu"
            alt="Giấy chứng nhận BIS cho Ghế và Ghế đẩu - Chứng nhận BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung là yêu cầu bắt
          buộc theo Tiêu chuẩn Ấn Độ IS 17632:2022. Tiêu chuẩn này quy định các
          yêu cầu về an toàn, độ bền và hiệu suất cho ghế và ghế đẩu được sử
          dụng trong nhà, văn phòng, khu vực thương mại, cơ sở giáo dục, căng
          tin, nhà hàng, khách sạn và không gian công cộng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế và ghế đẩu là một trong những đồ nội thất được sử dụng nhiều nhất
          và liên tục chịu tải, chuyển động và ứng suất lặp lại. Một chiếc ghế
          hoặc ghế đẩu có cấu trúc yếu có thể sụp đổ đột ngột, dẫn đến thương
          tích. Để ngăn chặn những mối nguy hiểm như vậy và đảm bảo an toàn
          người tiêu dùng, Cục Tiêu chuẩn Ấn Độ (BIS) yêu cầu mọi nhà sản xuất
          và nhập khẩu phải có Chứng nhận BIS cho Ghế và Ghế đẩu trước khi bán
          chúng tại Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang này cung cấp hướng dẫn đầy đủ về Chứng nhận BIS cho ghế và ghế
          đẩu theo IS 17632:2022, bao gồm quy trình chứng nhận, tài liệu yêu
          cầu, yêu cầu kiểm tra, phí, thách thức, hình phạt và lợi ích.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống tuân thủ sản phẩm được quản lý bởi Cục Tiêu
          chuẩn Ấn Độ, cơ quan tiêu chuẩn quốc gia của Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy chứng nhận BIS đảm bảo rằng sản phẩm:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đáp ứng các tiêu chuẩn an toàn và chất lượng của Ấn Độ</li>
          <li>Đã vượt qua kiểm tra phòng thí nghiệm được BIS phê duyệt</li>
          <li>Đã trải qua kiểm tra nhà máy</li>
          <li>
            Bảo vệ người tiêu dùng khỏi các sản phẩm không an toàn hoặc kém chất
            lượng
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sản phẩm được chứng nhận hiển thị Dấu ISI, chứng minh sự tuân thủ với
          Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn Áp dụng – IS 17632:2022 cho Ghế và Ghế đẩu
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn BIS cho ghế và ghế đẩu là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Ghế và Ghế đẩu Mục đích Chung: Yêu
          cầu An toàn
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này bao gồm tất cả ghế và ghế đẩu không chuyên dụng được sử
          dụng cho mục đích ngồi trong nhà, văn phòng, môi trường thương mại,
          nơi công cộng và cơ sở thể chế.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sản phẩm Được Bao phủ Theo IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ghế mục đích chung</li>
          <li>Ghế ăn</li>
          <li>Ghế khách văn phòng</li>
          <li>Ghế học</li>
          <li>Ghế căng tin</li>
          <li>Ghế nhà hàng</li>
          <li>Ghế phòng họp</li>
          <li>Ghế khu vực chờ</li>
          <li>Ghế gỗ</li>
          <li>Ghế kim loại</li>
          <li>Ghế nhựa (không chuyên dụng)</li>
          <li>Ghế đẩu mục đích chung</li>
          <li>Ghế đẩu quầy bar</li>
          <li>Ghế đẩu ăn</li>
          <li>Ghế đẩu bậc thang (trong tiêu chí xác định)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thông số An toàn & Hiệu suất Chính
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 đánh giá:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ bền cấu trúc</li>
          <li>Độ ổn định</li>
          <li>Độ bền dưới sử dụng lặp lại</li>
          <li>Độ bền ghế ngồi</li>
          <li>Hiệu suất tựa lưng</li>
          <li>Khả năng chống va đập chân</li>
          <li>Độ bền khớp nối</li>
          <li>Chất lượng hoàn thiện bề mặt</li>
          <li>An toàn cạnh và góc</li>
          <li>Chất lượng vật liệu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tất cả ghế và ghế đẩu được bán tại Ấn Độ phải tuân thủ các thông số
          này và có Giấy phép BIS cho Ghế và Ghế đẩu.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là Bắt buộc cho Ghế và Ghế đẩu?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế và ghế đẩu chịu trọng lượng con người và được sử dụng thường xuyên
          trong tất cả môi trường. Sự cố cấu trúc có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ghế sụp đổ</li>
          <li>Gãy chân</li>
          <li>Nứt ghế ngồi</li>
          <li>Hỏng tựa lưng</li>
          <li>Thương tích do cạnh sắc</li>
          <li>Không ổn định dẫn đến ngã</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích của Chứng nhận BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đảm bảo sản phẩm ngồi an toàn</li>
          <li>Ngăn chặn tai nạn và thương tích</li>
          <li>Cải thiện độ bền sản phẩm</li>
          <li>Ngăn chặn nhập khẩu kém chất lượng</li>
          <li>Thiết lập chất lượng thị trường đồng nhất</li>
          <li>Tăng cường niềm tin khách hàng</li>
          <li>Bắt buộc theo luật Ấn Độ (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Không có Chứng nhận BIS, nhà sản xuất không thể bán ghế hoặc ghế đẩu
          tại Ấn Độ một cách hợp pháp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Ghế và Ghế đẩu (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình BIS tuân theo Chương trình Chứng nhận Dấu ISI, bao gồm kiểm
          tra, thanh tra và xác minh đơn đăng ký.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Xác định Loại Sản phẩm & Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Xác nhận rằng ghế/ghế đẩu thuộc IS 17632:2022. Xác định các biến thể
          thiết kế và vật liệu được sử dụng.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Gửi Đơn đăng ký BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Đơn đăng ký được nộp qua Cổng thông tin Trực tuyến BIS Manak, yêu cầu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết nhà sản xuất</li>
          <li>Thông tin nhà máy</li>
          <li>Thông số kỹ thuật sản phẩm</li>
          <li>Chi tiết thương hiệu/nhãn hiệu</li>
          <li>Quy trình làm việc sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Thanh toán Phí Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Phí bao gồm:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra mẫu</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Sản phẩm theo IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kiểm tra bắt buộc được thực hiện trong phòng thí nghiệm được BIS công
          nhận.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Các Kiểm tra Bao gồm:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra Độ ổn định</li>
          <li>Kiểm tra Độ bền cho Ghế ngồi</li>
          <li>Kiểm tra Độ bền Tựa lưng</li>
          <li>Kiểm tra Tải Trọng Chân Phía trước/Bên/Sau</li>
          <li>Kiểm tra Va đập Ghế ngồi</li>
          <li>Kiểm tra Rơi</li>
          <li>Kiểm tra Mệt mỏi</li>
          <li>Kiểm tra Hoàn thiện Bề mặt</li>
          <li>Kiểm tra Cạnh Sắc</li>
          <li>Độ bền cấu trúc dưới chu kỳ lặp lại</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kết quả kiểm tra phải cho thấy sự tuân thủ đầy đủ với IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Thanh tra Nhà máy bởi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Một cán bộ BIS đến thăm nhà máy để đánh giá:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất</li>
          <li>Kiểm tra nguyên liệu thô</li>
          <li>Quy trình kiểm soát chất lượng</li>
          <li>Khả năng kiểm tra</li>
          <li>Hiệu chuẩn thiết bị</li>
          <li>Khối lượng sản xuất</li>
          <li>Tuân thủ Chương trình Kiểm tra & Thanh tra BIS (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nếu kiểm tra và thanh tra thành công, BIS cấp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS (Giấy phép Dấu ISI)</li>
          <li>Số CML</li>
          <li>Phê duyệt gắn Dấu ISI trên ghế và ghế đẩu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Nghĩa vụ Sau Giấy phép
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sử dụng Dấu ISI theo yêu cầu ghi nhãn BIS</li>
          <li>Duy trì hồ sơ kiểm soát chất lượng</li>
          <li>Trải qua các cuộc thanh tra giám sát BIS thường xuyên</li>
          <li>Gia hạn giấy phép mỗi 1–2 năm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Ghế và Ghế đẩu
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn này bao gồm các yêu cầu cho ghế và ghế đẩu mục đích chung.
          Tiêu chuẩn này áp dụng cho ghế và ghế đẩu mục đích chung được sản
          xuất/lắp ráp hoàn toàn. Nó cũng áp dụng cho các đơn vị sẵn sàng lắp
          ráp; trong trường hợp đó các yêu cầu của tiêu chuẩn này sẽ áp dụng cho
          các đơn vị đã lắp ráp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Yêu cầu cho Chứng nhận BIS của Ghế và Ghế đẩu
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy phép/đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc</li>
          <li>Danh sách thiết bị kiểm tra nội bộ</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
          <li>Sơ đồ bố trí & mặt bằng nhà máy</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bản vẽ ghế/ghế đẩu</li>
          <li>Kích thước & thông số kỹ thuật</li>
          <li>Hóa đơn nguyên vật liệu</li>
          <li>Mô tả tính năng an toàn</li>
          <li>Báo cáo kiểm tra chất lượng nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân & bằng chứng địa chỉ</li>
          <li>Thư ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận nhãn hiệu (tùy chọn)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đơn đăng ký BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đăng ký</li>
          <li>Mẫu yêu cầu kiểm tra</li>
          <li>Mẫu tuyên bố</li>
          <li>Thư ủy quyền</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Ghế và Ghế đẩu (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 bao gồm kiểm tra cơ khí, cấu trúc và an toàn rộng rãi.
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
                  Thiết kế và tay nghề
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mất cân bằng Phía trước và Mất cân bằng Bên cho Ghế không có
                  Tay
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mất cân bằng Phía sau
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mất cân bằng Bên cho Ghế có Tay
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ghế đẩu/ Poufs (Tất cả Hướng)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Độ bền
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Các kiểm tra này đảm bảo sử dụng hàng ngày an toàn trong điều kiện
          thực tế.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp & Cách Tránh
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Ghế không vượt qua kiểm tra độ ổn định</strong>
            <br />
            Xảy ra do phân bố trọng lượng không đúng.
            <br />
            Sửa: Cải thiện thiết kế chân, mở rộng diện tích đế.
          </li>
          <li>
            <strong>Khớp nối yếu gây thất bại kiểm tra</strong>
            <br />
            Sửa: Sử dụng vật liệu gia cố & bộ kết nối tốt hơn.
          </li>
          <li>
            <strong>Thiết bị kiểm tra nội bộ không đầy đủ</strong>
            <br />
            Sửa: Lắp đặt các dụng cụ tuân thủ BIS yêu cầu.
          </li>
          <li>
            <strong>Không nhất quán tài liệu</strong>
            <br />
            Sửa: Chuẩn bị tài liệu có hệ thống trước khi nộp đơn.
          </li>
          <li>
            <strong>Biến thể sản phẩm không được ánh xạ đúng</strong>
            <br />
            Sửa: Nhóm sản phẩm dựa trên cấu trúc & thông số kiểm tra.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Ghế và Ghế đẩu
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quyền pháp lý bán tại Ấn Độ</li>
          <li>Cải thiện an toàn sản phẩm</li>
          <li>Tăng cường niềm tin khách hàng</li>
          <li>Giảm rủi ro trách nhiệm sản phẩm</li>
          <li>Yêu cầu cho danh sách thương mại điện tử</li>
          <li>Cần thiết cho đấu thầu chính phủ</li>
          <li>Uy tín thương hiệu cao hơn</li>
          <li>Lợi thế cạnh tranh</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Không Tuân thủ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán ghế hoặc ghế đẩu không có chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tiền phạt nặng</li>
          <li>Thu hồi/tịch thu sản phẩm</li>
          <li>Hủy giấy phép nhà máy</li>
          <li>Truy tố hình sự</li>
          <li>Hạn chế nhập khẩu</li>
          <li>Đưa vào danh sách đen thị trường</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hình phạt được thực thi theo Đạo luật BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Ghế và Ghế đẩu?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">Bắt buộc cho:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Chủ sở hữu thương hiệu/thương nhân</li>
          <li>Nhà cung cấp OEM/ODM</li>
          <li>Chuỗi bán lẻ</li>
          <li>Người bán trực tuyến</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi nhà máy yêu cầu một Giấy phép BIS riêng biệt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung theo IS
          17632:2022 là bắt buộc để đảm bảo an toàn sản phẩm, ổn định cấu trúc
          và độ bền. Chứng nhận BIS không chỉ giúp nhà sản xuất duy trì tiêu
          chuẩn chất lượng cao mà còn cho phép tiếp cận thị trường hợp pháp và
          tăng cường niềm tin người tiêu dùng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với sự hỗ trợ chuyên nghiệp, quy trình chứng nhận—từ kiểm tra đến
          thanh tra và phê duyệt—trở nên suôn sẻ, có thể dự đoán và tuân thủ đầy
          đủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Ghế và Ghế đẩu
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc cho ghế và ghế đẩu không?
              </strong>
              <br />
              Có, theo IS 17632:2022, tất cả ghế và ghế đẩu mục đích chung phải
              được chứng nhận BIS trước khi bán tại Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Cần kiểm tra gì?</strong>
              <br />
              Kiểm tra độ ổn định, độ bền, độ bền, va đập, mệt mỏi và an toàn
              vật liệu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Chứng nhận BIS mất bao lâu?</strong>
              <br />
              Thường là 30–45 ngày.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Chi phí chứng nhận là bao nhiêu?</strong>
              <br />
              Khoảng ₹60,000–₹1,30,000 tùy thuộc vào kiểm tra và thanh tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Nhà sản xuất nước ngoài có thể đăng ký không?</strong>
              <br />
              Có, theo chương trình FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Đánh dấu ISI có bắt buộc không?</strong>
              <br />
              Có, sau khi giấy phép BIS được cấp.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Tại sao ghế không vượt qua kiểm tra BIS?</strong>
              <br />
              Nguyên nhân phổ biến bao gồm chân yếu, độ bền khớp nối kém và
              không ổn định.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Nhiều mẫu có thể được bao phủ dưới một giấy phép không?
              </strong>
              <br />
              Chỉ khi chúng đáp ứng tiêu chí tương tự và tuân thủ tiêu chuẩn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Có cần thanh tra nhà máy không?</strong>
              <br />
              Có, nó là bắt buộc cho chứng nhận dấu ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Cần tài liệu gì?</strong>
              <br />
              Giấy phép nhà máy, thông số kỹ thuật, danh sách máy móc, kế hoạch
              QC, bản vẽ sản phẩm, v.v.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Ghế và Ghế đẩu - IS 17632:2022 PDF"
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
              Dịch vụ của chúng tôi
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
                alt="BIS Logo"
                title="BIS Logo"
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
              DẤU ISI (BIS) cho Nhà sản xuất Ấn Độ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
