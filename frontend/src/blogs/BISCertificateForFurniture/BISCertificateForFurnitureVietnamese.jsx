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
import { SlashIcon } from "lucide-react";

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

export default BISCertificateForFurnitureVietnamese ;

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
                    Chứng nhận BIS cho Nội thất tại Ấn Độ – Hướng dẫn Chi tiết Hoàn chỉnh
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
          Chứng nhận BIS cho Nội thất tại Ấn Độ – Hướng dẫn Chi tiết Hoàn chỉnh
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Giấy phép BIS cho Nội thất"
            alt="Chứng nhận BIS cho Nội thất tại Ấn Độ - Hướng dẫn Chứng nhận BIS Hoàn chỉnh"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Giới thiệu: Chứng nhận BIS và Ngành Nội thất Ấn Độ
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tại Ấn Độ, chất lượng sản phẩm, an toàn và tiêu chuẩn hóa được quản lý bởi
          một cơ quan pháp lý trung ương được gọi là Cục Tiêu chuẩn Ấn Độ
          (BIS). BIS là tổ chức tiêu chuẩn quốc gia của Ấn Độ,
          được thành lập theo Đạo luật BIS để đảm bảo rằng các sản phẩm được bán trên
          thị trường Ấn Độ tuân thủ các tiêu chuẩn an toàn, chất lượng và hiệu suất
          đã được xác định.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS là gì?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS là viết tắt của Cục Tiêu chuẩn Ấn Độ. Nó hoạt động
          dưới Bộ Công vụ Người tiêu dùng, Thực phẩm & Phân phối Công cộng,
          Chính phủ Ấn Độ. BIS đóng vai trò quan trọng trong việc bảo vệ lợi ích của người tiêu dùng
          đồng thời hỗ trợ các nhà sản xuất thông qua một hệ sinh thái
          tiêu chuẩn hóa và chứng nhận minh bạch.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ngành nội thất Ấn Độ đã chứng kiến sự tăng trưởng nhanh chóng do:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đô thị hóa</li>
          <li>Mở rộng cơ sở hạ tầng dân cư và thương mại</li>
          <li>
            Tăng trưởng trong các lĩnh vực khách sạn, giáo dục, y tế và sống chung
          </li>
          <li>Nhận thức ngày càng tăng của người tiêu dùng về an toàn sản phẩm và độ bền</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nội thất không còn được coi là một sản phẩm thuần túy về mặt thẩm mỹ. Nó
          liên quan trực tiếp đến an toàn người dùng, công thái học, độ ổn định cấu trúc, khả năng
          chống cháy và độ bền lâu dài. Các sự cố liên quan đến giường
          sụp đổ, giường tầng không an toàn, ghế không ổn định hoặc tủ lưu trữ kém chất lượng
          đã làm dấy lên mối quan ngại trong số các nhà quản lý và người tiêu dùng.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Để giải quyết những rủi ro này, Chứng nhận BIS cho Nội thất đã trở thành một
          yêu cầu tuân thủ quan trọng. BIS đảm bảo rằng các sản phẩm nội thất
          đáp ứng các Tiêu chuẩn Ấn Độ (IS) liên quan đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ bền cấu trúc</li>
          <li>Khả năng chịu tải</li>
          <li>Chất lượng vật liệu</li>
          <li>An toàn thiết kế</li>
          <li>Hiệu suất trong điều kiện sử dụng</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với các nhà sản xuất, nhà nhập khẩu, nhà xuất khẩu, MSME, công ty khởi nghiệp và
          chủ sở hữu thương hiệu nội thất, việc có được Chứng nhận BIS cho Nội thất
          không còn chỉ là một thủ tục pháp lý—nó là một nhu cầu thị trường.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS cho Nội thất Quan trọng
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nó đảm bảo tuân thủ pháp lý theo quy định của Ấn Độ</li>
          <li>Nó nâng cao niềm tin của người tiêu dùng và uy tín thương hiệu</li>
          <li>Nó cho phép bán và phân phối không hạn chế trên toàn Ấn Độ</li>
          <li>Nó giảm thiểu rủi ro trách nhiệm sản phẩm</li>
          <li>Nó cải thiện khả năng sẵn sàng xuất khẩu và chấp nhận toàn cầu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này được thiết kế để trở thành nguồn tài liệu có thẩm quyền và
          chi tiết nhất về Chứng nhận BIS cho Nội thất tại Ấn Độ. Dù
          bạn là nhà sản xuất lần đầu hay một thương hiệu nội thất đã thành lập,
          hướng dẫn này trả lời mọi câu hỏi có thể liên quan đến Giấy phép BIS cho
          Nội thất, Đăng ký BIS cho Nội thất, tiêu chuẩn áp dụng,
          quy trình, chi phí, tài liệu, thời gian và tuân thủ sau chứng nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Nội thất là gì?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Nội thất là sự chấp thuận chính thức được cấp bởi
          Cục Tiêu chuẩn Ấn Độ xác nhận rằng một sản phẩm nội thất cụ thể
          tuân thủ Tiêu chuẩn Ấn Độ (IS) liên quan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dấu BIS là gì?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dấu BIS, thường được gọi là Dấu ISI, là dấu phù hợp tiêu chuẩn
          xuất hiện trên các sản phẩm được chứng nhận. Nó cho thấy rằng
          nội thất đã:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vượt qua kiểm tra phòng thí nghiệm</li>
          <li>Vượt qua thanh tra nhà máy</li>
          <li>Đáp ứng tất cả các yêu cầu tiêu chuẩn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải thích Logo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Logo BIS đại diện cho thẩm quyền của BIS với tư cách là cơ quan tiêu chuẩn quốc gia
          của Ấn Độ. Khi được sử dụng cùng với Dấu ISI trên các sản phẩm nội thất, nó
          đảm bảo cho người mua rằng sản phẩm tuân thủ Tiêu chuẩn BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chứng nhận BIS Ấn Độ – Tình trạng Pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tại Ấn Độ, sản xuất, nhập khẩu hoặc bán các sản phẩm nội thất
          được bao phủ bởi các tiêu chuẩn đã được thông báo mà không có Chứng nhận BIS có thể dẫn
          đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu hàng hóa</li>
          <li>Phạt tiền nặng</li>
          <li>Khởi tố theo Đạo luật BIS</li>
          <li>Cấm bán hoặc nhập khẩu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Do đó, Chứng nhận BIS cho Nội thất tại Ấn Độ có tầm quan trọng pháp lý
          mạnh mẽ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS Quan trọng cho Sản phẩm Nội thất
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Nội thất là quan trọng vì nhiều lý do:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. An toàn & Tính toàn vẹn Cấu trúc
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sự cố nội thất có thể gây thương tích hoặc tử vong. Tiêu chuẩn BIS
          đánh giá:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Khả năng chịu tải</li>
          <li>Độ ổn định chống lật</li>
          <li>Độ bền khớp nối</li>
          <li>Hiệu suất vật liệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Chất lượng & Độ bền
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Các sản phẩm nội thất được chứng nhận đảm bảo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuổi thọ sử dụng lâu dài</li>
          <li>Khả năng chống mài mòn</li>
          <li>Hiệu suất đồng đều</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Niềm tin Người tiêu dùng
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dấu Chứng nhận BIS xây dựng sự tin cậy ngay lập tức trong số người mua,
          các tổ chức và người mua số lượng lớn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Tiếp cận Thị trường
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhiều đấu thầu chính phủ, người mua tổ chức và các tập đoàn lớn
          yêu cầu nội thất được chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Tuân thủ Pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bán nội thất không được chứng nhận theo quy định BIS bắt buộc có thể bị
          phạt và hành động pháp lý.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sản phẩm Nội thất được Bao phủ bởi Chứng nhận BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nội thất là một danh mục chung rộng lớn dưới BIS, bao gồm nhiều
          loại sản phẩm, mỗi loại được quản lý bởi các Tiêu chuẩn Ấn Độ khác nhau (Số
          IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Các Danh mục Nội thất Chính được Bao phủ:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Ghế Làm việc
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Được sử dụng trong văn phòng, nhà máy và không gian thương mại. Tiêu chuẩn tập trung vào
          công thái học, độ ổn định và hiệu suất tải.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Ghế và Ghế đẩu Mục đích Chung
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Được sử dụng trong nhà, trường học và không gian công cộng. BIS đánh giá an toàn
          cấu trúc và độ bền vật liệu.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Bàn và Bàn làm việc
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bao gồm bàn văn phòng, bàn học, bàn làm việc. Tiêu chuẩn kiểm tra khả năng
          chịu tải và độ bền bề mặt.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Tủ Lưu trữ
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tủ quần áo, tủ, tủ khóa, kệ. Nhấn mạnh vào độ ổn định, cạnh
          sắc và truy cập an toàn.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Giường
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giường đơn, giường đôi, giường gấp. BIS kiểm tra độ bền khung và
          hiệu suất lâu dài.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Giường Tầng
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Được quy định nghiêm ngặt do rủi ro an toàn. Tập trung vào lan can, an toàn
          thang và phòng ngừa ngã.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Vật liệu Composite Bọc nệm cho Nội thất Không Gia đình
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Được sử dụng trong văn phòng, khách sạn, hội trường. Tiêu chuẩn bao gồm khả năng
          chống cháy và kiểm tra độ bền.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sản phẩm Nội thất Khác
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nội thất trường học</li>
          <li>Ghế ngồi thể chế</li>
          <li>Nội thất bệnh viện</li>
          <li>Nội thất mô-đun</li>
          <li>Hệ thống nội thất kim loại & gỗ</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi danh mục sản phẩm có Số IS áp dụng riêng, được thông báo
          riêng bởi BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS Áp dụng cho Nội thất
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tiêu chuẩn BIS là gì?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn BIS là các thông số kỹ thuật được BIS công bố để xác định:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Yêu cầu vật liệu</li>
          <li>Thông số hiệu suất</li>
          <li>Phương pháp kiểm tra</li>
          <li>Hướng dẫn đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa của Số IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Số IS (Số Tiêu chuẩn Ấn Độ) xác định duy nhất một tiêu chuẩn
          áp dụng cho một sản phẩm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình Thông báo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS phát hành Thông báo BIS chính thức làm cho một số tiêu chuẩn
          trở thành bắt buộc. Một khi được thông báo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ trở thành bắt buộc</li>
          <li>Sản phẩm không được chứng nhận là bất hợp pháp</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cách Xác định Tiêu chuẩn BIS Đúng
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xác định danh mục sản phẩm</li>
          <li>Nghiên cứu phạm vi IS áp dụng</li>
          <li>Xác nhận khả năng áp dụng tiêu chuẩn</li>
          <li>Tránh lựa chọn tiêu chuẩn sai (một lỗi phổ biến)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Các Loại Chứng nhận BIS Áp dụng cho Nội thất
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giấy phép BIS theo Chương trình ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sản phẩm nội thất thường được bao phủ bởi Chương trình Chứng nhận
          ISI, bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra sản phẩm</li>
          <li>Thanh tra nhà máy</li>
          <li>Kiểm toán giám sát</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Đăng ký BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đăng ký BIS chủ yếu dành cho sản phẩm điện tử và CNTT. Nội thất
          thường yêu cầu Giấy phép BIS, không phải Đăng ký.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Nội thất tại Ấn Độ
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1: Chuẩn bị Trước Đơn
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xác định Tiêu chuẩn IS áp dụng</li>
          <li>Đánh giá tuân thủ thiết kế sản phẩm</li>
          <li>Chuẩn bị tài liệu kỹ thuật</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2: Đơn BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nộp Đơn BIS với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết sản phẩm</li>
          <li>Chi tiết sản xuất</li>
          <li>Tham chiếu tiêu chuẩn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3: Đăng ký BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đơn được nộp qua cổng thông tin trực tuyến BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4: Kiểm tra Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẫu được kiểm tra tại các phòng thí nghiệm được BIS công nhận.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5: Thanh tra Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cán bộ BIS xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất</li>
          <li>Kiểm soát chất lượng</li>
          <li>Cơ sở kiểm tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6: Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi tuân thủ, BIS cấp giấy phép.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7: Sử dụng Dấu Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất có thể gắn Dấu BIS / Dấu ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Nội thất
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kiểm tra là một phần bắt buộc của quy trình đăng ký BIS. Nội thất
          trải qua các kiểm tra nghiêm ngặt để đảm bảo an toàn và độ bền.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Các Kiểm tra Bắt buộc cho Nội thất:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra Tải Cấu trúc</li>
          <li>Kiểm tra Độ ổn định</li>
          <li>Kiểm tra Độ bền Lan can</li>
          <li>Kiểm tra Va đập</li>
          <li>Kiểm tra Nguy cơ Mắc kẹt</li>
          <li>Kiểm tra Độ bền & Góc Thang</li>
          <li>Kiểm tra An toàn Vật liệu</li>
          <li>Kiểm tra Bán kính Cạnh & Độ sắc</li>
          <li>Kiểm tra Hỗ trợ Nệm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Các kiểm tra phải được thực hiện tại phòng thí nghiệm được BIS công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS cho Nội thất
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tài liệu Chính Bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bằng chứng đăng ký nhà máy</li>
          <li>Bản vẽ sản phẩm & thông số kỹ thuật</li>
          <li>Chi tiết nguyên liệu thô</li>
          <li>Báo cáo kiểm tra</li>
          <li>Hồ sơ kiểm soát chất lượng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lỗi Tài liệu Phổ biến:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tham chiếu tiêu chuẩn không đúng</li>
          <li>Dữ liệu kiểm tra không đầy đủ</li>
          <li>Không khớp phạm vi sản phẩm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi phí Chứng nhận BIS cho Nội thất
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thành phần Chi phí Chứng nhận BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đơn chính phủ</li>
          <li>Phí kiểm tra</li>
          <li>Phí thanh tra</li>
          <li>Phí giấy phép</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Yếu tố Chi phí Chứng nhận BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ phức tạp sản phẩm</li>
          <li>Số lượng mẫu</li>
          <li>Yêu cầu kiểm tra</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lưu ý: Phí tư vấn chuyên nghiệp tách biệt với phí chính phủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thời gian Đăng ký Chứng nhận BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Thời gian Trung bình:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra: 3–6 tuần</li>
          <li>Thanh tra: 1–2 tuần</li>
          <li>Cấp Giấy phép: 2–4 tuần</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng: 8–12 tuần (xấp xỉ)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cách Lấy Chứng nhận BIS tại Ấn Độ cho Nhà sản xuất Nội thất
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẹo Thực tế:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chọn tiêu chuẩn IS đúng</li>
          <li>Đảm bảo nhà máy sẵn sàng</li>
          <li>Duy trì hồ sơ kiểm tra</li>
          <li>Tránh lỗi tài liệu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Đơn Đăng ký Chứng nhận BIS Trực tuyến – Tổng quan Thực tế
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Thách thức Cổng thông tin Trực tuyến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lỗi kỹ thuật</li>
          <li>Vấn đề tải tài liệu</li>
          <li>Nhầm lẫn lựa chọn tiêu chuẩn</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn đúng giảm thiểu sự chậm trễ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sử dụng Dấu BIS & Dấu Chứng nhận BIS Sau Khi Phê duyệt
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quy tắc Đánh dấu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tham chiếu IS đúng</li>
          <li>Số giấy phép</li>
          <li>Kích thước & độ hiển thị phù hợp</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Không tuân thủ có thể dẫn đến đình chỉ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức trong Chứng nhận BIS cho Nội thất
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diễn giải tiêu chuẩn</li>
          <li>Thất bại kiểm tra sản phẩm</li>
          <li>Không phù hợp thanh tra</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vai trò của Tư vấn viên BIS trong Chứng nhận Nội thất
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tư vấn viên BIS chuyên nghiệp giúp bằng cách:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xác định tiêu chuẩn đúng</li>
          <li>Quản lý kiểm tra & thanh tra</li>
          <li>Giảm thời gian phê duyệt</li>
          <li>Tránh từ chối tốn kém</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Nội thất là nền tảng của chất lượng, an toàn,
          và tuân thủ pháp lý trong thị trường nội thất đang phát triển của Ấn Độ. Dù
          bạn là nhà sản xuất, nhà nhập khẩu hay chủ sở hữu thương hiệu, việc có được Chứng nhận
          BIS cho Nội thất tại Ấn Độ đảm bảo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ quy định</li>
          <li>Niềm tin người tiêu dùng</li>
          <li>Thành công thị trường lâu dài</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bằng cách hiểu Quy trình Chứng nhận BIS, Tiêu chuẩn, Chi phí và
          yêu cầu Tuân thủ, các doanh nghiệp có thể tự tin điều hướng
          môi trường quy định và xây dựng các sản phẩm nội thất an toàn hơn, mạnh mẽ hơn và đáng tin cậy hơn
          cho thị trường Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp về Giấy phép BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS có bắt buộc cho tất cả sản phẩm nội thất tại
              Ấn Độ không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Không, Chứng nhận BIS chỉ bắt buộc đối với những sản phẩm nội thất
              được bao phủ bởi các Tiêu chuẩn BIS đã được thông báo. Tuy nhiên,
              một khi một danh mục sản phẩm nội thất được thông báo bởi Cục
              Tiêu chuẩn Ấn Độ, việc sản xuất, nhập khẩu, bán hoặc
              phân phối sản phẩm đó mà không có Giấy phép BIS hợp lệ trở thành
              bất hợp pháp tại Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Sản phẩm nội thất nào yêu cầu Giấy phép BIS thay vì Đăng ký
              BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sản phẩm nội thất thường thuộc Chương trình Chứng nhận
              ISI, yêu cầu Giấy phép BIS, không phải Đăng ký BIS. Đăng ký
              BIS (CRS) chủ yếu áp dụng cho sản phẩm điện tử và CNTT,
              trong khi sản phẩm nội thất yêu cầu kiểm tra + thanh tra nhà máy +
              Giấy phép BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Nội thất nhập khẩu có thể được bán tại Ấn Độ mà không có Chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Không. Sản phẩm nội thất nhập khẩu được bao phủ bởi các Tiêu chuẩn BIS
              bắt buộc phải có Chứng nhận BIS trước khi thông quan hải quan.
              Nhập khẩu nội thất không được chứng nhận có thể dẫn đến:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Giữ lại hải quan</li>
              <li>Tái xuất hoặc tiêu hủy</li>
              <li>Phạt nặng</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Các nhà sản xuất nước ngoài phải có Giấy phép BIS trước khi xuất khẩu
              nội thất sang Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Nhà sản xuất nội thất nước ngoài có thể đăng ký Chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có. Nhà sản xuất nước ngoài có thể đăng ký theo Chương trình
              Chứng nhận Nhà sản xuất Nước ngoài (FMCS). Họ phải:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Bổ nhiệm một Đại diện Ấn Độ được Ủy quyền (AIR)</li>
              <li>Tuân thủ Tiêu chuẩn Ấn Độ</li>
              <li>Cho phép thanh tra nhà máy BIS ở nước ngoài.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS có bắt buộc cho nhà sản xuất nội thất thủ công hoặc quy mô nhỏ
              không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nếu sản phẩm nội thất được bao phủ bởi một tiêu chuẩn BIS
              bắt buộc, thì ngay cả MSME, công ty khởi nghiệp và đơn vị quy mô nhỏ cũng phải
              có Chứng nhận BIS. Không có miễn trừ dựa trên
              khối lượng sản xuất.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS có bắt buộc cho nội thất gỗ không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, sản phẩm nội thất gỗ như giường, ghế, bàn,
              bàn làm việc và tủ lưu trữ có thể yêu cầu Chứng nhận BIS nếu chúng
              thuộc các tiêu chuẩn đã được thông báo. Tiêu chuẩn BIS áp dụng cho cả nội thất
              gỗ và kim loại, tùy thuộc vào loại sản phẩm và cách sử dụng.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Một Giấy phép BIS có thể bao phủ nhiều mẫu nội thất không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nhiều mẫu hoặc biến thể có thể được bao phủ bởi một Giấy phép BIS
              duy nhất, với điều kiện:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Chúng thuộc cùng Tiêu chuẩn IS</li>
              <li>Các thông số xây dựng, vật liệu và thiết kế tương tự</li>
              <li>BIS phê duyệt nhóm trong quá trình đăng ký.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS có thể được chuyển giao cho nhà sản xuất khác không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Không. Giấy phép BIS không thể chuyển giao. Mỗi nhà sản xuất phải có
              Chứng nhận BIS riêng, ngay cả khi thiết kế sản phẩm
              giống hệt nhau.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS là gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Đó là bằng chứng chính thức về tuân thủ Tiêu chuẩn BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chứng nhận BIS có bắt buộc cho nội thất không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, đối với sản phẩm nội thất được bao phủ bởi các tiêu chuẩn đã được thông báo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Làm thế nào để có Chứng nhận BIS tại Ấn Độ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thông qua kiểm tra, thanh tra và phê duyệt giấy phép BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Dấu BIS là gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Một dấu phù hợp cho thấy sự phê duyệt của BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Chi phí Chứng nhận BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Phụ thuộc vào loại sản phẩm, kiểm tra và phạm vi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS là viết tắt của gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Cục Tiêu chuẩn Ấn Độ.
            </p>
          </div>
        </div>

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
