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

const BISCertificateElectricFenceEnergizersVietnamese = () => {
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

export default BISCertificateElectricFenceEnergizersVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào | IS 302-2-76:1999 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào – Hướng dẫn IS 302-2-76:1999";
  const twitterTitle =
    "Giấy phép BIS cho Thiết bị tạo xung điện hàng rào | IS 302-2-76:1999";
  const metaDescription =
    "Nhận Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào theo IS 302-2-76:1999. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn hoàn chỉnh cho Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào theo IS 302-2-76:1999. Biết quy trình, chi phí, tài liệu, kiểm tra & lợi ích của giấy phép BIS.";
  const twitterDescription =
    "Ứng dụng Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào theo IS 302-2-76:1999. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào, Giấy phép BIS cho Thiết bị tạo xung điện hàng rào, IS 302-2-76:1999, Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/electric-fence-energizers-is-302-2-76";
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
                    Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào – IS
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
          Chứng nhận BIS Thiết bị tạo xung điện hàng rào – Hướng dẫn hoàn chỉnh IS
          302-2-76:1999
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforElectricFenceEnergizers.png"
            title="Giấy phép BIS cho Thiết bị tạo xung điện hàng rào"
            alt="Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào - IS 302-2-76:1999 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhu cầu về thiết bị tạo xung điện hàng rào đã tăng nhanh trên khắp
          Ấn Độ do tập trung ngày càng tăng vào việc bảo vệ nông trại, quản lý
          gia súc, an ninh chu vi, và kiểm soát động vật hoang dã. Các thiết bị này đóng
          vai trò quan trọng trong việc bảo vệ cây trồng, động vật và tài sản bằng
          cách cung cấp các xung điện được kiểm soát thông qua hệ thống hàng rào.
          Tuy nhiên, vì thiết bị tạo xung điện hàng rào liên quan trực tiếp đến điện
          áp suất, nguy cơ tiếp xúc của con người, và nguy cơ cháy, an toàn và tuân thủ
          quy định trở thành không thể thương lượng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tại Ấn Độ, thiết bị tạo xung điện hàng rào nằm trong phạm vi chứng nhận
          BIS bắt buộc theo IS 302-2-76:1999. Bất kỳ nhà sản xuất hoặc
          nhà nhập khẩu có ý định bán thiết bị tạo xung điện hàng rào tại thị trường
          Ấn Độ phải nhận Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào
          trước khi thương mại hóa. Nếu không có sự chấp thuận này, sản phẩm bị coi là
          không tuân thủ và bất hợp pháp để bán.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này được thiết kế cho các nhà sản xuất, nhà nhập khẩu,
          thương hiệu nước ngoài, công ty khởi nghiệp, nhà phân phối và người bán hàng trên
          nền tảng thương mại điện tử muốn làm rõ về Chứng nhận BIS Thiết bị tạo xung điện hàng rào, bao gồm
          yêu cầu pháp lý, kiểm tra, tài liệu, chi phí, thời gian và
          nghĩa vụ tuân thủ. Nếu bạn đang lên kế hoạch ứng dụng Giấy phép BIS
          / Giấy phép BIS cho Thiết bị tạo xung điện hàng rào, trang này sẽ hướng dẫn
          bạn qua từng bước một cách rõ ràng, thực tế và tập trung vào tuân thủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống đánh giá sự phù hợp được vận hành bởi
          Cục Tiêu chuẩn Ấn Độ (BIS), cơ quan tiêu chuẩn quốc gia của
          Ấn Độ. Tên đầy đủ của BIS là Cục Tiêu chuẩn Ấn Độ, được thành lập
          theo Đạo luật BIS, 2016 để đảm bảo chất lượng, an toàn, độ tin cậy, và
          sự nhất quán của sản phẩm được bán tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận BIS cho thấy một sản phẩm phù hợp với Tiêu chuẩn Ấn Độ (IS) áp dụng
          và đáp ứng các tiêu chuẩn an toàn, hiệu suất và
          chất lượng quy định. Nó cung cấp sự đảm bảo cho người tiêu dùng và cơ quan quản lý
          rằng sản phẩm đã được kiểm tra và xác minh bởi các hệ thống được BIS công nhận.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dấu ISI và Dấu BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với các sản phẩm điện như thiết bị tạo xung điện hàng rào, chứng nhận
          BIS được cấp theo Chương trình Dấu ISI. Dấu chứng nhận BIS (dấu ISI) được hiển thị trên sản phẩm cho thấy
          sự tuân thủ với các tiêu chuẩn BIS liên quan. Bán sản phẩm có dấu ISI
          mà không có giấy phép BIS hợp lệ là một hành vi bị trừng phạt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tại sao BIS tồn tại
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mục tiêu cốt lõi của BIS là:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ an toàn người tiêu dùng</li>
          <li>Ngăn chặn các sản phẩm không đạt tiêu chuẩn và không an toàn</li>
          <li>Hài hòa sản xuất Ấn Độ với các tiêu chuẩn toàn cầu</li>
          <li>Thực thi tuân thủ bắt buộc thông qua các thông báo BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi của IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn này quy định các yêu cầu an toàn cụ thể cho thiết bị
          tạo xung điện hàng rào dự định sử dụng với hệ thống hàng rào điện cho:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hàng rào nông nghiệp</li>
          <li>Kiểm soát gia súc</li>
          <li>Ngăn chặn động vật hoang dã</li>
          <li>An ninh chu vi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nó bao gồm các thiết bị tạo xung được cung cấp bởi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Điện lưới</li>
          <li>Hệ thống hoạt động bằng pin</li>
          <li>Kết hợp nguồn lưới và pin</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mục đích An toàn và Kiểm tra
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn được thiết kế để giải quyết:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ chống sốc điện</li>
          <li>Giới hạn năng lượng đầu ra</li>
          <li>Kiểm soát thời lượng và tần sốc xung</li>
          <li>Khoảng cách điện và khoảng cách rò rỉ</li>
          <li>Rủi ro và nguy cơ quá nhiệt</li>
          <li>Độ bền cơ học và an toàn vỏ bao</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai Phải Tuân Thủ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tuân thủ với IS 302-2-76:1999 là bắt buộc cho:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu các thiết bị tạo xung sản xuất nước ngoài</li>
          <li>Nhà sản xuất nước ngoài bán tại Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là Bắt buộc cho Thiết bị tạo xung điện hàng rào
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. An toàn Người tiêu dùng và Động vật
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Thiết bị tạo xung điện hàng rào tạo ra các xung điện áp cao. Thiết kế
          không phù hợp hoặc đầu ra quá mức có thể gây ra thương tích nghiêm trọng,
          nguy cơ cháy, hoặc tai nạn chết người. Chứng nhận BIS đảm bảo năng lượng
          đầu ra vẫn nằm trong giới hạn an toàn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Yêu cầu Pháp lý tại Ấn Độ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Theo các thông báo BIS và Đạo luật BIS, bán thiết bị điện không được chứng nhận
          là bất hợp pháp. Sản phẩm không có chứng nhận BIS có thể bị tịch thu,
          cấm, hoặc thu hồi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Tuân thủ Quy định
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Các cơ quan như hải quan, đội giám sát thị trường, và các nền tảng
          thương mại điện tử yêu cầu giấy phép BIS hợp lệ để đăng ký và thông quan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Lợi ích Thị trường và Thương hiệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS Ấn Độ xây dựng lòng tin, cải thiện uy tín thương hiệu,
          và cho phép thâm nhập thuận lợi vào thị trường bán lẻ có tổ chức và thị trường
          tổ chức.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS Từng bước cho Thiết bị tạo xung điện hàng rào
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi Áp dụng & Xác định Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước đầu tiên là xác nhận phân loại sản phẩm và xác định IS
          302-2-76:1999 là tiêu chuẩn BIS áp dụng. Thiết kế sản phẩm, nguồn
          điện và ứng dụng phải phù hợp với phạm vi của tiêu chuẩn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình Ứng dụng BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải nộp đơn đăng ký BIS trực tuyến qua cổng thông tin
          Manak Online. Đơn đăng ký bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết sản phẩm</li>
          <li>Thông tin nhà máy</li>
          <li>Lựa chọn tiêu chuẩn áp dụng</li>
          <li>Cam kết báo cáo kiểm tra</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước này chính thức khởi động quy trình đăng ký BIS / đăng ký chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phí & Cấu trúc Chi phí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chi phí chứng nhận BIS thường bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí kiểm tra (phụ thuộc vào phòng thí nghiệm)</li>
          <li>Phí kiểm tra nhà máy</li>
          <li>Phí giấy phép</li>
          <li>Phí đánh dấu hàng năm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng chi phí chứng nhận BIS phụ thuộc vào độ phức tạp của sản phẩm,
          số lượng mẫu mã và yêu cầu kiểm tra.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kiểm tra Mẫu sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẫu sản phẩm được kiểm tra tại các phòng thí nghiệm được BIS công nhận
          theo IS 302-2-76:1999. Kiểm tra đảm bảo tuân thủ tất cả các tham số
          an toàn và hiệu suất.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kiểm tra Nhà máy & Kiểm toán
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS tiến hành kiểm toán nhà máy để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Cơ sở kiểm tra nội bộ</li>
          <li>Sự nhất quán với tài liệu đã nộp</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấp Giấy phép BIS & Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi kiểm tra và thanh tra thành công, BIS cấp Giấy phép BIS cho
          Thiết bị tạo xung điện hàng rào, cho phép sử dụng dấu ISI với số
          CM/L duy nhất.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ Sau Chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Người giữ giấy phép phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thực hiện kiểm tra định kỳ</li>
          <li>Duy trì hồ sơ sản xuất</li>
          <li>Cho phép kiểm toán giám sát</li>
          <li>Gia hạn giấy phép đúng hạn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Yêu cầu cho Chứng nhận BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bằng chứng đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc</li>
          <li>Kế hoạch kiểm soát chất lượng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận đăng ký công ty</li>
          <li>Đăng ký GST</li>
          <li>Ủy quyền thương hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảng thông số kỹ thuật sản phẩm</li>
          <li>Sơ đồ mạch điện</li>
          <li>Sổ tay hướng dẫn sử dụng và an toàn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Ứng dụng BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biểu mẫu ứng dụng BIS</li>
          <li>Báo cáo kiểm tra từ phòng thí nghiệm được BIS công nhận</li>
          <li>Thư ủy quyền</li>
          <li>Cam kết và tuyên bố</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đây là bộ tài liệu hoàn chỉnh cho CHỨNG NHẬN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra theo IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các kiểm tra bắt buộc bao gồm:
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
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bảo vệ chống Sốc điện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dòng rò rỉ và cường độ điện ở nhiệt độ hoạt động
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Đánh giá
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Đầu vào Nguồn điện và Dòng điện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  11
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sưởi ấm
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dòng rò rỉ và Cường độ điện ở Nhiệt độ hoạt động
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dòng rò rỉ và Cường độ điện
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tất cả các kiểm tra phải được thực hiện chỉ tại các phòng thí nghiệm được BIS công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Phổ biến & Cách Tránh chúng
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Kiểm tra Thất bại
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>Nguyên nhân:</strong> Thiết kế hoặc tham số đầu ra không tuân thủ
          <br />
          <strong>Giải pháp:</strong> Kiểm tra tuân thủ trước và xem xét thiết kế
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Lỗi Tài liệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>Nguyên nhân:</strong> Bài nộp không đầy đủ hoặc không nhất quán
          <br />
          <strong>Giải pháp:</strong> Xác minh tài liệu do chuyên gia dẫn dắt
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Chậm trễ Kiểm toán Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Nguyên nhân:</strong> Hệ thống chất lượng chưa sẵn sàng
          <br />
          <strong>Giải pháp:</strong> Sẵn sàng kiểm toán và kiểm toán giả
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Nhà sản xuất & Nhà nhập khẩu
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ủy quyền pháp lý để bán tại Ấn Độ</li>
          <li>Tiếp cận người mua chính phủ và tổ chức</li>
          <li>Tăng cường lòng tin người tiêu dùng</li>
          <li>Giảm thiểu rủi ro trách nhiệm sản phẩm</li>
          <li>Mở rộng vào thương mại điện tử và chuỗi bán lẻ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán thiết bị tạo xung điện hàng rào không có chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phạt tiền nặng</li>
          <li>Tịch thu hàng hóa</li>
          <li>Hủy bỏ thông quan nhập khẩu</li>
          <li>Truy tố hình sự theo Đạo luật BIS</li>
          <li>Cấm thị trường vĩnh viễn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà sản xuất nước ngoài</li>
          <li>Nhà thương mại và nhà phân phối</li>
          <li>Người bán trên sàn thương mại điện tử</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bất kỳ ai tham gia đưa sản phẩm ra thị trường Ấn Độ phải đảm bảo tuân thủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn chúng tôi cho Tư vấn Chứng nhận BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp tư vấn chứng nhận BIS từ đầu đến cuối, bao gồm:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xác định tiêu chuẩn và kiểm tra tính áp dụng</li>
          <li>Nộp đơn BIS</li>
          <li>Phối hợp phòng thí nghiệm và hỗ trợ kiểm tra</li>
          <li>Chuẩn bị kiểm toán nhà máy</li>
          <li>Quản lý tuân thủ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chuyên môn của chúng tôi đảm bảo phê duyệt nhanh hơn, không bị từ chối,
          và hoàn toàn yên tâm về quy định.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhận Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào theo IS
          302-2-76:1999 không chỉ là một thủ tục quy định—đây là một bước quan trọng
          hướng tới đảm bảo an toàn, tuân thủ pháp lý, và thành công thị trường
          dài hạn. Với việc thực thi nghiêm ngặt các thông báo BIS và sự giám sát
          ngày càng tăng đối với sản phẩm điện, nhà sản xuất và nhà nhập khẩu phải
          ưu tiên Chứng nhận BIS Thiết bị tạo xung điện hàng rào để tránh
          hình phạt và xây dựng lòng tin người tiêu dùng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nếu bạn đang lên kế hoạch ứng dụng Giấy phép BIS / Giấy phép BIS cho
          Thiết bị tạo xung điện hàng rào, hướng dẫn chuyên nghiệp có thể giảm đáng kể
          thời gian, chi phí và rủi ro tuân thủ. Hãy tuân thủ, cạnh tranh, và đảm bảo
          sản phẩm của bạn đáp ứng các tiêu chuẩn an toàn cao nhất của Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi thường gặp – Chứng nhận BIS cho Thiết bị tạo xung điện hàng rào
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C1. Chứng nhận BIS có bắt buộc cho thiết bị tạo xung điện hàng rào
                tại Ấn Độ không?
              </strong>
              <br />
              Có, chứng nhận BIS theo IS 302-2-76:1999 là bắt buộc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C2. Chứng nhận BIS viết đầy đủ là gì?</strong>
              <br />
              Chứng nhận Cục Tiêu chuẩn Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C3. Tôi có thể nhập khẩu thiết bị tạo xung điện hàng rào không có giấy phép BIS không?
              </strong>
              <br />
              Không, nhập khẩu không có chứng nhận BIS bị cấm.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C4. Chi phí giấy phép BIS là bao nhiêu?</strong>
              <br />
              Chi phí thay đổi tùy thuộc vào kiểm tra, quy mô nhà máy và số lượng mẫu mã.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C5. Quy trình chứng nhận BIS mất bao lâu?
              </strong>
              <br />
              Thường là 6–10 tuần nếu tài liệu và kiểm tra hoàn chỉnh.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C6. Dấu ISI có bắt buộc không?</strong>
              <br />
              Có, đánh dấu ISI là bắt buộc sau chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C7. Công ty khởi nghiệp có thể nộp đơn chứng nhận BIS không?</strong>
              <br />
              Có, công ty khởi nghiệp có thể nộp đơn nếu thiết lập sản xuất tuân thủ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C8. Chứng nhận BIS có yêu cầu cho thiết bị tạo xung hoạt động bằng pin không?
              </strong>
              <br />
              Có, nguồn điện không miễn chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C9. Một giấy phép có thể bao gồm nhiều mẫu mã không?</strong>
              <br />
              Có, nếu các mẫu mã tương tự về kỹ thuật.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C10. Điều gì xảy ra nếu sản phẩm của tôi không đạt kiểm tra?</strong>
              <br />
              Cần sửa đổi thiết kế và kiểm tra lại.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C11. Chứng nhận BIS có hiệu lực vĩnh viễn không?</strong>
              <br />
              Không, nó phải được gia hạn định kỳ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C12. Kiểm toán BIS có bắt buộc sau chứng nhận không?
              </strong>
              <br />
              Có, các kiểm toán giám sát được tiến hành.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C13. Nhà sản xuất nước ngoài có thể nộp đơn trực tiếp không?</strong>
              <br />
              Có, thông qua Đại diện Ấn Độ được ủy quyền (AIR).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>C14. Có quy trình ứng dụng BIS trực tuyến không?</strong>
              <br />
              Có, các đơn BIS được nộp trực tuyến.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                C15. Chứng nhận BIS có ý nghĩa gì đối với người tiêu dùng?
              </strong>
              <br />
              Nó đảm bảo an toàn, chất lượng và tuân thủ quy định.
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
                Nhà tư vấn Chứng nhận Tốt nhất Ấn Độ
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
              Dấu BIS (Giấy phép ISI) cho Nhà sản xuất Nước ngoài
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
              Quản lý Rác thải Nhựa
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Đăng ký BIS
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
