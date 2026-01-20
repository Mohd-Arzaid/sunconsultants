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

const BISCertificateForTablesAndDesksUnitVietnamese = () => {
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

export default BISCertificateForTablesAndDesksUnitVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Bàn và Bàn làm việc | Giấy phép BIS IS 17633:2022";
  const ogTitle = "Chứng nhận BIS cho Bàn và Bàn làm việc – Hướng dẫn IS 17633:2022";
  const twitterTitle = "Giấy phép BIS cho Bàn và Bàn làm việc | IS 17633:2022";
  const metaDescription =
    "Đăng ký Giấy chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí và thời gian tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Bàn và Bàn làm việc, Giấy phép BIS cho Bàn và Bàn làm việc, IS 17633:2022, Chứng nhận BIS cho Bàn và Bàn làm việc";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ban-va-ban-lam-viec-is-17633";
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
                    <Link to="/Blogs">Blog mới nhất</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Giấy chứng nhận BIS cho Bàn và Bàn làm việc – IS 17633:2022
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
          Giấy chứng nhận BIS cho Bàn và Bàn làm việc – Hướng dẫn đầy đủ về Chứng nhận BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Giấy phép BIS cho Bàn và Bàn làm việc"
            alt="Giấy chứng nhận BIS cho Bàn và Bàn làm việc - IS 17633:2022 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Bàn và Bàn làm việc là bắt buộc đối với tất cả nhà sản xuất, nhà nhập khẩu và người bán bàn và bàn làm việc tại Ấn Độ. Theo Tiêu chuẩn Ấn Độ IS 17633:2022 – Bàn và Bàn làm việc: Yêu cầu An toàn, các mặt hàng nội thất này phải được kiểm tra và chứng nhận bởi Cục Tiêu chuẩn Ấn Độ (BIS) trước khi có thể được bán hợp pháp trên thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bàn và bàn làm việc là các thành phần thiết yếu của nhà ở, văn phòng, trường học, đại học, không gian thương mại, môi trường khách sạn và nơi làm việc công nghiệp. Vì chúng thường chịu trọng lượng, tác động và sử dụng liên tục, nên độ bền cấu trúc và an toàn của chúng là rất quan trọng. Để đảm bảo bảo vệ người tiêu dùng và độ tin cậy của sản phẩm, BIS yêu cầu chứng nhận bắt buộc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích IS 17633:2022, quy trình đăng ký BIS, kiểm tra, tài liệu cần thiết, phí, thời gian, hình phạt và lợi ích cho nhà sản xuất và nhà nhập khẩu.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là quy trình tuân thủ quy định được quản lý bởi Cục Tiêu chuẩn Ấn Độ, cơ quan tiêu chuẩn quốc gia của Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa của Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS xác nhận rằng sản phẩm đáp ứng các yêu cầu về an toàn, chất lượng, hiệu suất và độ bền được đặt ra bởi Tiêu chuẩn Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích của Chứng nhận BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đảm bảo an toàn người tiêu dùng</li>
          <li>Hỗ trợ sản xuất chất lượng cao</li>
          <li>Giảm rủi ro hỏng sản phẩm</li>
          <li>Cải thiện sự chấp nhận của thị trường</li>
          <li>Bắt buộc theo pháp luật theo Lệnh Kiểm soát Chất lượng BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi được phê duyệt, sản phẩm sẽ mang Dấu BIS (Dấu ISI) cùng với số giấy phép.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn Ấn Độ nào áp dụng cho Bàn và Bàn làm việc? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn BIS áp dụng là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Bàn và Bàn làm việc: Yêu cầu An toàn
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này xác định các yêu cầu về hiệu suất, an toàn cấu trúc và độ bền cho tất cả các loại bàn và bàn làm việc được sử dụng trong môi trường dân cư, thương mại, khách sạn và thể chế.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sản phẩm được bao phủ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bàn văn phòng</li>
          <li>Bàn máy tính</li>
          <li>Bàn học</li>
          <li>Bàn ăn</li>
          <li>Bàn cà phê</li>
          <li>Bàn làm việc</li>
          <li>Bàn đào tạo</li>
          <li>Bàn trường học/đại học</li>
          <li>Bàn giáo viên</li>
          <li>Bàn trạm làm việc mô-đun</li>
          <li>Bàn viết</li>
          <li>Bàn họp/hội nghị</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thông số An toàn Chính theo IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ổn định cấu trúc</li>
          <li>Khả năng chịu tải</li>
          <li>Khả năng chống va đập</li>
          <li>Hiệu suất lực ngang/dọc</li>
          <li>Chất lượng hoàn thiện bề mặt</li>
          <li>An toàn cạnh</li>
          <li>Độ bền khi sử dụng lặp lại</li>
          <li>An toàn vật liệu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mọi bàn hoặc bàn làm việc được bán tại Ấn Độ phải tuân thủ các thông số này thông qua Đăng ký BIS cho Bàn và Bàn làm việc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là Bắt buộc cho Bàn và Bàn làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bàn và bàn làm việc là các mặt hàng nội thất được sử dụng nhiều được tìm thấy trong nhà, văn phòng, trường học và khu vực công cộng. Sự cố cấu trúc có thể gây ra tai nạn như:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sụp đổ dưới trọng lượng</li>
          <li>Chấn thương do cạnh sắc</li>
          <li>Không ổn định khi sử dụng</li>
          <li>Gãy khớp nối</li>
          <li>Tách bề mặt</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Để tránh những mối nguy hiểm này, chứng nhận BIS đảm bảo:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thiết kế và xây dựng an toàn</li>
          <li>Tuân thủ yêu cầu tải trọng cấu trúc</li>
          <li>Hiệu suất bền bỉ</li>
          <li>Ngăn ngừa lật và sụp đổ</li>
          <li>Lựa chọn vật liệu chất lượng cao</li>
          <li>Tiêu chuẩn thị trường thống nhất</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bán bàn và bàn làm việc mà không có Giấy phép BIS cho Bàn và Bàn làm việc là bất hợp pháp tại Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Bàn và Bàn làm việc (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS tuân theo Chương trình ISI (Chương trình Đánh giá Sự phù hợp–I), bao gồm kiểm tra sản phẩm và thanh tra nhà máy.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Xác định Danh mục Sản phẩm & Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Xác nhận rằng bàn/bàn làm việc thuộc IS 17633:2022. Xác định số lượng biến thể và vật liệu.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Nộp Đơn BIS (Gửi Trực tuyến)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Điền đơn trên Cổng Trực tuyến BIS Manak với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết nhà sản xuất</li>
          <li>Địa chỉ nhà máy</li>
          <li>Thông số kỹ thuật sản phẩm</li>
          <li>Chi tiết nhãn hiệu</li>
          <li>Hệ thống kiểm soát chất lượng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Thanh toán Phí Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Bao gồm:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra sản phẩm</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Mẫu tại Phòng thí nghiệm được BIS công nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sản phẩm phải trải qua kiểm tra đầy đủ theo quy định trong IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Các Kiểm tra được Thực hiện
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra Ổn định</li>
          <li>Kiểm tra Độ bền (Tải tĩnh)</li>
          <li>Kiểm tra Độ bền (Tải lặp lại)</li>
          <li>Kiểm tra Va đập</li>
          <li>Đo Độ võng</li>
          <li>Kiểm tra An toàn Cạnh và Bề mặt</li>
          <li>Kiểm tra Tải Không gian Làm việc</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Phòng thí nghiệm tải báo cáo kiểm tra trực tiếp lên BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Thanh tra Nhà máy BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS đến thăm cơ sở sản xuất để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hệ thống quản lý chất lượng</li>
          <li>Khả năng kiểm tra nội bộ</li>
          <li>Kiểm soát nguyên liệu thô</li>
          <li>Dây chuyền sản xuất & máy móc</li>
          <li>Hiệu chuẩn dụng cụ</li>
          <li>Tuân thủ STI (Chương trình Kiểm tra & Thanh tra)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS cấp:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS</li>
          <li>Phê duyệt Dấu ISI</li>
          <li>Số giấy phép CML duy nhất</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau đó, nhà sản xuất có thể đánh dấu và bán bàn/bàn làm việc hợp pháp tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Tuân thủ Sau Giấy phép
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duy trì hồ sơ theo STI</li>
          <li>Sử dụng đánh dấu ISI đúng cách</li>
          <li>Cho phép thanh tra BIS định kỳ</li>
          <li>Gia hạn giấy phép mỗi 1–2 năm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Bàn và Bàn làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này bao gồm các yêu cầu liên quan đến hiệu suất và an toàn, tức là độ bền, ổn định và độ bền của bàn và bàn làm việc được sử dụng ở tư thế ngồi và/hoặc đứng, được sử dụng bởi người lớn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này áp dụng cho bàn và bàn làm việc được sản xuất/chế tạo hoàn toàn. Nó cũng áp dụng cho các đơn vị sẵn sàng lắp ráp; trong trường hợp đó, các yêu cầu của tiêu chuẩn này sẽ áp dụng cho các đơn vị đã lắp ráp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Bàn và Bàn làm việc
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy phép nhà máy</li>
          <li>Danh sách máy móc</li>
          <li>Danh sách thiết bị kiểm tra</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
          <li>Sơ đồ nhà máy</li>
          <li>Sơ đồ quy trình</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bản vẽ bàn/bàn làm việc</li>
          <li>Danh mục vật liệu</li>
          <li>Thông số kỹ thuật sản phẩm</li>
          <li>Báo cáo kiểm tra chất lượng nội bộ</li>
          <li>Ảnh/video sản phẩm</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân của người ký được ủy quyền</li>
          <li>Giấy tờ chứng minh địa chỉ</li>
          <li>Thư ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận đăng ký nhãn hiệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đơn BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đã điền</li>
          <li>Cam kết của nhà sản xuất</li>
          <li>Thư yêu cầu kiểm tra</li>
          <li>Thư ủy quyền</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tài liệu đầy đủ đảm bảo phê duyệt nhanh hơn.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra theo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kiểm tra đánh giá độ bền, ổn định, độ bền và an toàn.
        </p>

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
                  Kiểm tra Ổn định
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tải đã nêu
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Cho tải nặng thỉnh thoảng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Độ bền dưới lực tĩnh ngang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Chung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Va đập Dọc cho Mặt bàn Kính
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Va đập Dọc cho Tất cả Mặt bàn Khác
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Độ võng của Mặt bàn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Rơi
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Kiểm tra phải được thực hiện chỉ tại các phòng thí nghiệm được BIS phê duyệt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp & Cách Tránh
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Sản phẩm không vượt qua kiểm tra tải hoặc độ bền</strong>
            <br />
            Giải pháp: Tăng cường khớp nối, sử dụng vật liệu tuân thủ BIS, thêm gia cố.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Tài liệu không đầy đủ</strong>
            <br />
            Giải pháp: Chuẩn bị tất cả tài liệu pháp lý, kỹ thuật và sản xuất trước.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Nhà máy thiếu thiết bị kiểm tra phù hợp</strong>
            <br />
            Giải pháp: Lắp đặt dụng cụ cần thiết và duy trì hiệu chuẩn theo hướng dẫn BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Dán nhãn không đúng</strong>
            <br />
            Giải pháp: Đảm bảo đánh dấu ISI tuân theo quy tắc BIS chính xác.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Phân loại sai mô hình sản phẩm</strong>
            <br />
            Giải pháp: Nhận hướng dẫn chuyên nghiệp để phân loại biến thể đúng cách.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Bàn và Bàn làm việc
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ủy quyền pháp lý để bán tại Ấn Độ</li>
          <li>Tăng niềm tin khách hàng</li>
          <li>Độ bền sản phẩm tốt hơn</li>
          <li>Truy cập vào các nhà bán lẻ lớn & nền tảng thương mại điện tử</li>
          <li>Giảm rủi ro trách nhiệm sản phẩm</li>
          <li>Uy tín thương hiệu cao hơn</li>
          <li>Tuân thủ QCOs của chính phủ</li>
          <li>Lợi thế cạnh tranh thị trường</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán hoặc phân phối bàn/bàn làm việc mà không có chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Phạt nặng</li>
          <li>Truy tố hình sự</li>
          <li>Cấm nhập khẩu</li>
          <li>Lệnh đóng cửa kinh doanh</li>
          <li>Hủy giấy phép</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đạo luật Cục Tiêu chuẩn Ấn Độ, 2016 thực thi các hình phạt nghiêm khắc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Bàn và Bàn làm việc?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận này là bắt buộc đối với:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài</li>
          <li>Nhà nhập khẩu</li>
          <li>Thương nhân/chủ sở hữu thương hiệu</li>
          <li>Nhà cung cấp OEM/ODM</li>
          <li>Nhà phân phối nội thất</li>
          <li>Người bán thương mại điện tử</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi nhà máy phải có Giấy phép BIS riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi cho Tư vấn Chứng nhận BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp hỗ trợ toàn diện:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giải thích tiêu chuẩn (IS 17633:2022)</li>
          <li>Phân loại sản phẩm</li>
          <li>Soạn thảo tài liệu</li>
          <li>Phối hợp kiểm tra</li>
          <li>Nộp hồ sơ cổng BIS</li>
          <li>Hỗ trợ thanh tra nhà máy</li>
          <li>Theo dõi liên tục với BIS</li>
          <li>Phê duyệt giấy phép</li>
          <li>Quản lý gia hạn và tuân thủ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chuyên môn của chúng tôi đảm bảo chứng nhận nhanh chóng, không rắc rối và không có lỗi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022 là yêu cầu tuân thủ bắt buộc đảm bảo an toàn sản phẩm, hiệu suất, độ bền và tuân thủ các tiêu chuẩn quốc gia. Nhà sản xuất và nhà nhập khẩu phải trải qua kiểm tra sản phẩm, thanh tra nhà máy và đáp ứng tất cả các quy tắc tài liệu và dán nhãn BIS để có được Dấu ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với sự hỗ trợ của chuyên gia, toàn bộ quy trình chứng nhận trở nên suôn sẻ, nhanh chóng và tuân thủ đầy đủ các quy định BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Bàn và Bàn làm việc (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc cho bàn và bàn làm việc không?
              </strong>
              <br />
              Có. Theo IS 17633:2022, tất cả bàn và bàn làm việc phải được chứng nhận BIS trước khi được bán tại Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Các kiểm tra nào được yêu cầu cho chứng nhận?</strong>
              <br />
              Các kiểm tra bắt buộc bao gồm kiểm tra ổn định, độ bền, độ bền, độ võng, va đập và an toàn bề mặt.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Chi phí chứng nhận BIS là bao nhiêu?</strong>
              <br />
              Chi phí dao động từ ₹65,000 – ₹1,30,000, tùy thuộc vào các yếu tố kiểm tra và thanh tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Nhà sản xuất nước ngoài có cần Chứng nhận BIS không?
              </strong>
              <br />
              Có, thông qua chương trình FMCS, bao gồm thanh tra nhà máy ở nước ngoài bởi BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Một giấy phép có thể bao gồm nhiều mô hình bàn/bàn làm việc không?
              </strong>
              <br />
              Có, nhưng chỉ khi các mô hình tương tự về cấu trúc và thông số kiểm tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quy trình BIS mất bao lâu?</strong>
              <br />
              Khoảng 30–45 ngày.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Kiểm tra có bắt buộc trong phòng thí nghiệm được BIS công nhận không?</strong>
              <br />
              Có, chỉ các phòng thí nghiệm được BIS phê duyệt mới có thể thực hiện các kiểm tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Điều gì xảy ra nếu sản phẩm không đạt?</strong>
              <br />
              Phải thiết kế lại và gửi lại để kiểm tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Đánh dấu ISI có bắt buộc sau chứng nhận không?</strong>
              <br />
              Có, Dấu ISI là bắt buộc trên sản phẩm và bao bì.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Cần những tài liệu gì?</strong>
              <br />
              Bản vẽ kỹ thuật, BOM, tài liệu nhà máy, báo cáo kiểm tra, kế hoạch QC và tài liệu pháp lý.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Bàn và Bàn làm việc - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadVietnamese />

        <FaqAuthorVietnamese questionNumber={2} />
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
                Tư vấn Chứng chỉ Tốt nhất Ấn Độ
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
                alt="Logo Chứng chỉ EPR"
                title="Logo Chứng chỉ EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Chứng chỉ EPR
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
              Chứng nhận Chứng chỉ LMPC
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
