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

const BISCertificateBatteryOperatedAirPurifierVietnamese = () => {
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

export default BISCertificateBatteryOperatedAirPurifierVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin | IS 302 (Phần 1):2024 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho Máy lọc không khí chạy bằng pin – Hướng dẫn IS 302 (Phần 1):2024";
  const twitterTitle =
    "Giấy phép BIS cho Máy lọc không khí chạy bằng pin | IS 302 (Phần 1):2024";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin theo IS 302 (Phần 1):2024. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Máy lọc không khí chạy bằng pin theo IS 302 (Phần 1):2024. Biết quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin theo IS 302 (Phần 1):2024. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin, Giấy phép BIS cho Máy lọc không khí chạy bằng pin, IS 302 (Phần 1):2024, Chứng nhận BIS cho Máy lọc không khí chạy bằng pin";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/may-loc-khong-khi-chay-bang-pin-is-302";
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
                    Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin – IS 302
                    (Phần 1):2024
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
          Chứng nhận BIS Máy lọc không khí chạy bằng pin – Hướng dẫn đầy đủ về IS 302 (Phần 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="Giấy phép BIS cho Máy lọc không khí chạy bằng pin"
            alt="Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin - IS 302 (Phần 1):2024 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhu cầu về Máy lọc không khí chạy bằng pin ở Ấn Độ đã tăng trưởng nhanh chóng do mức độ ô nhiễm không khí ngày càng tăng, nhận thức về sức khỏe ngày càng cao và nhu cầu về các giải pháp lọc không khí di động, tiết kiệm năng lượng. Không giống như máy lọc không khí cắm điện thông thường, các mẫu chạy bằng pin được sử dụng rộng rãi trong nhà, văn phòng, bệnh viện, xe cộ, khách sạn, trường học và không gian cá nhân, đặc biệt là những nơi không đảm bảo nguồn điện liên tục. Các thiết bị này tương tác trực tiếp với các thành phần điện, điện tử và pin, khiến an toàn điện, bảo vệ cháy nổ, tính toàn vẹn cách điện và bảo vệ người dùng trở nên cực kỳ quan trọng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để đảm bảo an toàn người tiêu dùng và tuân thủ quy định, Chính phủ Ấn Độ đã yêu cầu phải tuân thủ các tiêu chuẩn an toàn điện của Ấn Độ. Việc có được Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin theo IS 302 (Phần 1):2024 là yêu cầu pháp lý bắt buộc đối với các nhà sản xuất và nhà nhập khẩu trước khi bán các sản phẩm này trên thị trường Ấn Độ. Chứng nhận BIS hợp lệ cho Máy lọc không khí chạy bằng pin xác nhận rằng thiết bị đã được kiểm tra về an toàn điện, cơ khí và nhiệt theo Tiêu chuẩn Ấn Độ mới nhất.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống đánh giá sự phù hợp sản phẩm chính thức của Ấn Độ được quản lý bởi Cục Tiêu chuẩn Ấn Độ. BIS hoạt động dưới Bộ Các vấn đề Người tiêu dùng và chịu trách nhiệm đảm bảo rằng các sản phẩm được bán ở Ấn Độ đáp ứng các tiêu chuẩn đã định về an toàn, chất lượng và độ tin cậy.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ý nghĩa Giấy chứng nhận BIS đề cập đến sự ủy quyền do BIS cấp cho phép nhà sản xuất sản xuất, nhập khẩu và bán sản phẩm tuân thủ một Tiêu chuẩn Ấn Độ cụ thể (IS). Giấy chứng nhận này cũng cho phép sử dụng dấu chứng nhận BIS (Dấu ISI) trên sản phẩm đã được phê duyệt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS tồn tại để:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ người tiêu dùng khỏi các thiết bị điện không an toàn</li>
          <li>Ngăn chặn hỏa hoạn, điện giật và các mối nguy hiểm liên quan đến pin</li>
          <li>Thúc đẩy chất lượng sản phẩm đồng nhất</li>
          <li>Cho phép thực thi các quy định an toàn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải thích Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dấu BIS (Dấu ISI) trên máy lọc không khí chạy bằng pin cho biết rằng:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sản phẩm tuân thủ IS 302 (Phần 1):2024</li>
          <li>Cách điện và cấu trúc an toàn</li>
          <li>Thiết bị được phê duyệt hợp pháp để bán ở Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho Máy lọc không khí chạy bằng pin
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Phần 1):2024 – An toàn của Thiết bị Điện Gia dụng và Tương tự
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho máy lọc không khí chạy bằng pin là IS 302 (Phần 1):2024, quy định các yêu cầu an toàn chung cho thiết bị điện dùng cho gia đình và sử dụng tương tự.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi của IS 302 (Phần 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            An toàn điện của thiết bị sử dụng pin hoặc nguồn điện lai
          </li>
          <li>Bảo vệ chống điện giật</li>
          <li>Rủi ro hỏa hoạn và quá nhiệt</li>
          <li>An toàn cơ khí và cấu trúc</li>
          <li>Yêu cầu cách điện, khoảng cách bề mặt và khoảng cách</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mục đích An toàn, Hiệu suất & Kiểm tra
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Phần 1):2024 nhằm đảm bảo rằng:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Thiết bị chạy bằng pin hoạt động an toàn trong điều kiện bình thường và bất thường
          </li>
          <li>
            Người dùng được bảo vệ khỏi các mối nguy hiểm về điện, nhiệt và cơ khí
          </li>
          <li>Các thành phần không quá nóng hoặc gây cháy</li>
          <li>Thiết bị vẫn an toàn trong suốt vòng đời dự định</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai phải tuân thủ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất máy lọc không khí chạy bằng pin ở Ấn Độ</li>
          <li>Nhà nhập khẩu và phân phối</li>
          <li>Nhà sản xuất nước ngoài cung cấp cho Ấn Độ</li>
          <li>Thương hiệu bán máy lọc không khí dưới nhãn hiệu riêng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là bắt buộc đối với Máy lọc không khí chạy bằng pin
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rủi ro An toàn Người tiêu dùng
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Máy lọc không khí không được chứng nhận có thể gây ra:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Điện giật do cách điện kém</li>
          <li>Pin quá nóng hoặc nổ</li>
          <li>Nguy cơ hỏa hoạn khi sạc hoặc vận hành</li>
          <li>Hỏng hóc cơ khí của các thành phần bên trong</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ Chính phủ và Quy định
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Theo thông báo BIS và quy định an toàn điện, máy lọc không khí thuộc chứng nhận bắt buộc. Bán hàng mà không có Giấy chứng nhận BIS Ấn Độ là bất hợp pháp.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hậu quả Pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Phạt nặng và hình phạt</li>
          <li>Cấm nhập khẩu</li>
          <li>Trách nhiệm hình sự theo Đạo luật BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Thị trường và Thương hiệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy phép BIS cho Máy lọc không khí chạy bằng pin giúp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xây dựng niềm tin người tiêu dùng</li>
          <li>Cho phép niêm yết trên các nền tảng thương mại điện tử</li>
          <li>Đủ điều kiện cho mua sắm thể chế và chính phủ</li>
          <li>Tăng cường danh tiếng thương hiệu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho Máy lọc không khí chạy bằng pin
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Khả năng áp dụng & Nhận dạng Tiêu chuẩn cho Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Quy trình bắt đầu bằng việc xác nhận:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Loại sản phẩm: Máy lọc không khí chạy bằng pin</li>
          <li>Tiêu chuẩn áp dụng: IS 302 (Phần 1):2024</li>
          <li>Điện áp, loại pin, cấu hình bộ sạc</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình Đăng ký BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đăng ký trên cổng BIS</li>
          <li>Gửi Đơn đăng ký BIS trực tuyến</li>
          <li>Tải lên tài liệu kỹ thuật và pháp lý</li>
          <li>Thanh toán phí chính phủ áp dụng</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước này thường được gọi là BIS apply online hoặc đăng ký giấy chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấu trúc Phí & Chi phí cho Giấy chứng nhận BIS cho Máy lọc không khí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chi phí chứng nhận BIS bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí kiểm tra</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí giấy phép và đánh dấu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng chi phí chứng nhận BIS phụ thuộc vào:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ phức tạp của sản phẩm</li>
          <li>Thiết kế pin và bộ sạc</li>
          <li>Vị trí sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kiểm tra Mẫu Sản phẩm (Theo IS 302 Phần 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mẫu được kiểm tra tại các phòng thí nghiệm được BIS công nhận cho:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ chống điện giật</li>
          <li>Nhiệt và hoạt động bất thường</li>
          <li>Điện trở cách điện</li>
          <li>Độ bền điện môi</li>
          <li>An toàn pin và an toàn sạc</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thanh tra & Kiểm toán Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Khả năng truy xuất thành phần</li>
          <li>Cơ sở kiểm tra nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấp Giấy phép BIS & Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi kiểm tra và thanh tra thành công:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS cấp Giấy phép Cục Tiêu chuẩn Ấn Độ</li>
          <li>Nhà sản xuất được ủy quyền sử dụng Dấu BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc và thiết bị kiểm tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận thành lập công ty</li>
          <li>Đăng ký GST</li>
          <li>Ủy quyền thương hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sơ đồ mạch</li>
          <li>Bảng dữ liệu thành phần</li>
          <li>Thông số kỹ thuật pin và bộ sạc</li>
          <li>Hướng dẫn sử dụng và nhãn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đăng ký BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đăng ký BIS</li>
          <li>Mẫu yêu cầu kiểm tra</li>
          <li>Tuyên bố và cam kết</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Những tài liệu này được gọi là TÀI LIỆU GIẤY CHỨNG NHẬN BIS hoặc TÀI LIỆU CHỨNG NHẬN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra theo IS 302 (Phần 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các kiểm tra bắt buộc bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra bảo vệ chống điện giật</li>
          <li>Kiểm tra nhiệt và hoạt động bất thường</li>
          <li>Kiểm tra điện trở cách điện</li>
          <li>Kiểm tra độ bền điện môi</li>
          <li>Kiểm tra an toàn sạc pin</li>
          <li>Kiểm tra độ bền cơ khí và độ ổn định</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kiểm tra chỉ được thực hiện tại các phòng thí nghiệm được BIS công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp & Cách Tránh
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vấn đề Thường gặp
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thất bại trong kiểm tra nhiệt hoặc cách điện</li>
          <li>Cấu hình pin không an toàn</li>
          <li>Tài liệu không đầy đủ</li>
          <li>Dán nhãn không tuân thủ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải pháp & Thực hành Tốt nhất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tiến hành kiểm tra tuân thủ trước</li>
          <li>Sử dụng thành phần được chứng nhận</li>
          <li>Chuẩn bị tài liệu kỹ thuật chính xác</li>
          <li>Làm việc với các tư vấn viên BIS có kinh nghiệm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Nhà sản xuất & Nhà nhập khẩu
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ luật Ấn Độ</li>
          <li>Bảo vệ khỏi hình phạt</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Thương mại
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tiếp cận thị trường trên toàn Ấn Độ</li>
          <li>Được chấp nhận trên các nền tảng thương mại điện tử</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Thương hiệu
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dấu BIS tăng cường niềm tin</li>
          <li>Sự tin tưởng của khách hàng cao hơn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mở rộng Thị trường
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dễ dàng thâm nhập vào thị trường thể chế</li>
          <li>Uy tín thương hiệu lâu dài</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai cần Chứng nhận BIS cho Máy lọc không khí chạy bằng pin?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà sản xuất nước ngoài (với AIR)</li>
          <li>Thương nhân và chủ sở hữu thương hiệu</li>
          <li>Người bán trực tuyến và thị trường</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi để Tư vấn Chứng nhận BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp dịch vụ chứng nhận BIS từ đầu đến cuối, bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đánh giá khả năng áp dụng</li>
          <li>Chuẩn bị tài liệu</li>
          <li>Phối hợp kiểm tra phòng thí nghiệm</li>
          <li>Hỗ trợ thanh tra nhà máy</li>
          <li>Phê duyệt nhanh hơn</li>
          <li>Tuân thủ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chuyên môn của chúng tôi về thiết bị điện và điện tử đảm bảo hành trình chứng nhận suôn sẻ và tuân thủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc có được Giấy chứng nhận BIS cho Máy lọc không khí chạy bằng pin theo IS 302 (Phần 1):2024 không chỉ là thủ tục quy định—đó là yêu cầu an toàn và thị trường quan trọng. Chứng nhận BIS cho Máy lọc không khí chạy bằng pin đảm bảo an toàn điện, độ tin cậy của pin và bảo vệ người tiêu dùng, trong khi Giấy phép BIS cho Máy lọc không khí chạy bằng pin tăng cường uy tín thương hiệu và vị thế pháp lý.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với nhà sản xuất và nhà nhập khẩu, tuân thủ kịp thời ngăn chặn hình phạt, cho phép thâm nhập thị trường suôn sẻ và xây dựng niềm tin lâu dài. Với hướng dẫn chuyên gia và hỗ trợ tuân thủ có cấu trúc, quy trình chứng nhận BIS trở nên hiệu quả, có thể dự đoán và hoàn toàn phù hợp với Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Chứng nhận BIS cho Máy lọc không khí chạy bằng pin
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Chứng nhận BIS có bắt buộc đối với máy lọc không khí chạy bằng pin không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nó là bắt buộc theo IS 302 (Phần 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Giấy chứng nhận BIS viết tắt là gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Giấy chứng nhận Cục Tiêu chuẩn Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Chứng nhận BIS mất bao lâu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thường là 6–8 tuần đối với nhà sản xuất Ấn Độ và 12-16 tuần đối với nhà sản xuất nước ngoài.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Chi phí giấy chứng nhận BIS là bao nhiêu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nó phụ thuộc vào kiểm tra và độ phức tạp của sản phẩm.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Nhà nhập khẩu có thể đăng ký chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, với sự ủy quyền phù hợp.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Dấu ISI có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, sau khi chứng nhận.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Kiểm tra an toàn pin có được bao gồm không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, an toàn pin và sạc là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Thanh tra nhà máy có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, để cấp giấy phép.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Có thể bao gồm nhiều mẫu không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tùy thuộc vào sự phê duyệt kiểm tra.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Có cần đăng ký trực tuyến không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, BIS apply online là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Thương hiệu nước ngoài có thể nhận chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, thông qua Đại diện Ấn Độ được ủy quyền.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Điều gì xảy ra nếu vi phạm quy tắc BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Hình phạt, tịch thu và hành động pháp lý.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Chứng nhận BIS có cải thiện doanh số không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nó tăng cường đáng kể niềm tin.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Có cần gia hạn không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, gia hạn định kỳ là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Tư vấn viên có thể đẩy nhanh phê duyệt không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, các tư vấn viên có kinh nghiệm giảm độ trễ.
            </p>
          </div>
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
                Tư vấn Chứng chỉ Tốt nhất của Ấn Độ
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
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
