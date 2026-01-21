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

const BISCertificateForWeldedPipesAndTubesVietnamese = () => {
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

export default BISCertificateForWeldedPipesAndTubesVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho ống và ống hàn | Giấy phép BIS IS 17876:2022";
  const ogTitle =
    "Chứng nhận BIS cho ống và ống hàn – Hướng dẫn IS 17876:2022";
  const twitterTitle = "Giấy phép BIS cho ống và ống hàn | IS 17876:2022";
  const metaDescription =
    "Nhận chứng nhận BIS cho ống và ống hàn theo IS 17876:2022. Quy trình, tài liệu, thử nghiệm, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho ống và ống hàn theo IS 17876:2022. Biết quy trình, chi phí, tài liệu, thử nghiệm & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký chứng nhận BIS cho ống và ống hàn theo IS 17876:2022. Tìm hiểu quy trình BIS, tài liệu, thử nghiệm, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Chứng nhận BIS cho ống và ống hàn, Giấy phép BIS cho ống và ống hàn, IS 17876:2022, Chứng nhận BIS cho ống và ống hàn";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ong-va-ong-han-is-17876";
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
                    Chứng nhận BIS cho ống và ống hàn – IS 17876:2022
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
          Chứng nhận BIS cho ống và ống thép không gỉ hàn theo IS 17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="Giấy phép BIS cho ống và ống hàn"
            alt="Chứng nhận BIS cho ống và ống hàn - Chứng nhận BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ống và ống thép không gỉ hàn được sử dụng rộng rãi trong các ngành công nghiệp
          như xây dựng, chế biến hóa chất, thực phẩm & đồ uống, phân phối nước,
          ứng dụng kết cấu và kỹ thuật chung. Vì các ống này vận chuyển chất lỏng,
          khí và trong một số trường hợp là hóa chất ăn mòn, nên độ bền, khả năng
          chống ăn mòn và tính toàn vẹn sản xuất của chúng phải được xác minh trước
          khi đưa ra thị trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để điều chỉnh chất lượng và đảm bảo an toàn công cộng và công nghiệp,
          Chính phủ Ấn Độ đã làm cho Chứng nhận BIS trở thành bắt buộc đối với ống
          và ống thép không gỉ hàn theo IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích quy trình phê duyệt BIS đầy đủ, tài liệu,
          yêu cầu thử nghiệm, chi phí, thời gian, nghĩa vụ của nhà sản xuất, lợi ích
          và quy tắc tuân thủ — được viết theo định dạng mới và độc đáo, đảm bảo không
          trùng lặp với nội dung trước đó.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho ống và ống thép không gỉ hàn là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cục Tiêu chuẩn Ấn Độ (BIS) điều chỉnh chất lượng sản phẩm tại Ấn Độ
          thông qua các chương trình chứng nhận khác nhau. Một sản phẩm thuộc
          Lệnh Kiểm soát Chất lượng bắt buộc (QCO) phải có Giấy phép BIS trước
          khi được sản xuất, nhập khẩu, tồn kho, bán hoặc phân phối.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chứng nhận BIS đảm bảo điều gì
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận BIS xác nhận rằng ống/ống thép không gỉ hàn:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đáp ứng độ chính xác kích thước</li>
          <li>Có độ bền cơ học theo yêu cầu</li>
          <li>Thể hiện khả năng chống ăn mòn</li>
          <li>Được sản xuất bằng các cấp thép không gỉ đã được phê duyệt</li>
          <li>Tuân thủ các điều kiện thử nghiệm của Ấn Độ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi được chứng nhận, sản phẩm phải mang Dấu ISI cùng với số
          giấy phép (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS cho ống và ống thép không gỉ hàn – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn áp dụng là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Ống và ống thép không gỉ hàn cho
          dịch vụ chung
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này nêu rõ:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thành phần hóa học</li>
          <li>Yêu cầu tính chất cơ học</li>
          <li>Dung sai sản xuất</li>
          <li>Thông số kỹ thuật kích thước</li>
          <li>Hướng dẫn bề mặt và hoàn thiện</li>
          <li>Thử nghiệm thủy tĩnh và không phá hủy</li>
          <li>Tiêu chí hiệu suất an toàn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các ống này được sử dụng cho các ứng dụng dịch vụ chung, có nghĩa là
          chúng phải đáp ứng một loạt các môi trường vận hành.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là bắt buộc đối với Sản phẩm IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ống thép không gỉ hàn được sử dụng rộng rãi trong:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đường ống nước</li>
          <li>Vận chuyển hóa chất</li>
          <li>Nhà máy thực phẩm & dược phẩm</li>
          <li>Kỹ thuật kết cấu</li>
          <li>Hệ thống xả và thông gió</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nếu không được sản xuất đúng cách, các ống này có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hỏng hóc do rò rỉ</li>
          <li>Nổ dưới áp suất</li>
          <li>Ăn mòn và nhiễm bẩn</li>
          <li>Mất ổn định kết cấu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để ngăn chặn vật liệu kém chất lượng xâm nhập vào chuỗi cung ứng, BIS
          yêu cầu mọi nhà sản xuất — trong nước hoặc nước ngoài — phải có Giấy phép
          BIS cho Ống và ống thép không gỉ hàn.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận bao gồm thử nghiệm trong phòng thí nghiệm và
          kiểm tra nghiêm ngặt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Xác định Danh mục Sản phẩm & Cấp
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đánh giá cấp cụ thể của thép không gỉ đang được sản xuất và xác nhận
          chúng thuộc IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Gửi Đơn đăng ký Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải đăng ký qua Cổng BIS Trực tuyến Manak, gửi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết nhà máy</li>
          <li>Năng lực sản xuất</li>
          <li>Sơ đồ quy trình</li>
          <li>Nguồn nguyên liệu thô</li>
          <li>Tài liệu đảm bảo chất lượng</li>
          <li>Chi tiết thương hiệu & nhãn hiệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Thanh toán Phí BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Thanh toán bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí thử nghiệm</li>
          <li>Phí kiểm tra nhà máy</li>
          <li>Phí đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS kiểm tra:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Trình tự sản xuất</li>
          <li>Kho chứa nguyên liệu thô</li>
          <li>Máy hàn</li>
          <li>Quy trình ủ/xử lý nhiệt</li>
          <li>Tài liệu chất lượng</li>
          <li>Cơ sở hạ tầng thử nghiệm</li>
          <li>Hồ sơ hiệu chuẩn</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Họ xác minh sự tuân thủ với Chương trình Thử nghiệm & Kiểm tra (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nếu tất cả các thông số đáp ứng yêu cầu BIS, nhà sản xuất sẽ nhận được:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chứng nhận BIS</li>
          <li>Ủy quyền Dấu ISI</li>
          <li>Số giấy phép CML duy nhất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Nghĩa vụ Sau Giấy phép
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Người giữ giấy phép phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duy trì thử nghiệm chất lượng nội bộ liên tục</li>
          <li>Sử dụng Dấu ISI đúng cách</li>
          <li>Hợp tác trong các cuộc kiểm tra giám sát BIS định kỳ</li>
          <li>Gia hạn giấy phép đúng hạn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho ống và ống thép không gỉ hàn
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này bao gồm các yêu cầu cho ống và ống
          thép không gỉ hàn cho dịch vụ chung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này không quy định các yêu cầu của ống
          và ống thép không gỉ hàn dành cho mục đích riêng biệt, được bao phủ bởi
          các Tiêu chuẩn Ấn Độ riêng biệt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Tài liệu Sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy phép/đăng ký nhà máy</li>
          <li>Sơ đồ bố trí</li>
          <li>Sơ đồ quy trình</li>
          <li>Danh sách máy móc (hàn, tạo hình, ủ, thử nghiệm)</li>
          <li>Danh sách thiết bị thử nghiệm nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thông số kỹ thuật cấp</li>
          <li>Dữ liệu thử nghiệm hóa học & cơ học</li>
          <li>Thông số kỹ thuật quy trình hàn</li>
          <li>Hồ sơ xử lý nhiệt</li>
          <li>Biểu đồ dung sai kích thước</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân</li>
          <li>Giấy tờ địa chỉ</li>
          <li>Tài liệu sở hữu thương hiệu</li>
          <li>Thư người ký được ủy quyền</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Tài liệu Đơn đăng ký BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đã điền</li>
          <li>Cam kết & tuyên bố</li>
          <li>Tài liệu yêu cầu thử nghiệm</li>
          <li>Thiết kế nhãn cho đánh dấu ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Thử nghiệm Theo IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Thử nghiệm là cốt lõi của việc phê duyệt BIS và đảm bảo rằng mỗi lô
          đáp ứng các tiêu chuẩn chất lượng nghiêm ngặt.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Phân tích từ muôi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Phân tích Sản phẩm
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Yêu cầu Kéo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ống
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ống
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm Gờ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm Làm phẳng Ngược
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm Làm phẳng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước Hạt
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm Độ kín Rò rỉ
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tay nghề, Hoàn thiện, Ngoại hình
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước và Dung sai
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Gặp phải Trong Quá trình Chứng nhận BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Thất bại trong Thử nghiệm Thành phần Hóa học</strong>
            <br />
            Các nguyên tố hợp kim hoặc tạp chất không chuẩn gây ra sự từ chối.
          </li>
          <li>
            <strong>Khuyết tật Hàn Trong NDT</strong>
            <br />
            Quy trình hàn kém hoặc xử lý nhiệt không nhất quán có thể tạo ra
            khuyết tật.
          </li>
          <li>
            <strong>Không Tuân thủ Kích thước</strong>
            <br />
            Sự thay đổi độ dày thành ống thường dẫn đến thất bại.
          </li>
          <li>
            <strong>Tài liệu Không đầy đủ</strong>
            <br />
            Hồ sơ thiếu hoặc không rõ ràng làm chậm việc phê duyệt giấy phép.
          </li>
          <li>
            <strong>Vấn đề Hiệu chuẩn</strong>
            <br />
            Thiết bị không được hiệu chuẩn dẫn đến kết quả thử nghiệm không đáng tin cậy.
          </li>
          <li>
            <strong>Gửi thương hiệu/nhãn không đúng</strong>
            <br />
            Thiết kế dấu ISI phải khớp với thông số kỹ thuật BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho ống và ống Thép không gỉ
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phê duyệt pháp lý để sản xuất/bán tại Ấn Độ</li>
          <li>Đảm bảo chất lượng và an toàn</li>
          <li>Cải thiện danh tiếng và uy tín thị trường</li>
          <li>Được chấp nhận bởi các đấu thầu chính phủ và PSU</li>
          <li>Tăng tiềm năng xuất khẩu</li>
          <li>Giảm rủi ro hỏng hóc sản phẩm</li>
          <li>Bảo vệ chống lại đối thủ giả mạo hoặc kém chất lượng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất/người nhập khẩu bán sản phẩm không được chứng nhận phải đối mặt:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Hình phạt nặng theo Đạo luật BIS</li>
          <li>Đóng cửa hoạt động sản xuất</li>
          <li>Hạn chế nhập khẩu</li>
          <li>Khởi tố pháp lý</li>
          <li>Hủy bỏ giấy phép hiện có</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tuân thủ là bắt buộc và được thực thi nghiêm ngặt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Phải Có Giấy phép BIS cho ống và ống Thép không gỉ Hàn?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Người nhập khẩu ống thép không gỉ</li>
          <li>Nhà cung cấp OEM</li>
          <li>Nhà phân phối công nghiệp</li>
          <li>Thương hiệu nhãn riêng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi địa điểm sản xuất phải có giấy phép riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho ống và ống thép không gỉ hàn theo IS 17876:2022
          đảm bảo độ tin cậy, độ bền và hiệu suất của các sản phẩm ống quan trọng
          được sử dụng trong nhiều ngành công nghiệp. Với việc chứng nhận bắt buộc
          hiện được thực thi, nhà sản xuất và người nhập khẩu phải điều chỉnh quy
          trình, thử nghiệm và tài liệu của họ theo yêu cầu BIS để cung cấp sản
          phẩm hợp pháp tại thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với hướng dẫn chuyên gia, quy trình cấp phép BIS trở nên nhanh hơn,
          mượt mà hơn và tuân thủ đầy đủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp — Chứng nhận BIS cho ống và ống Thép không gỉ Hàn
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc đối với ống thép không gỉ hàn không?
              </strong>
              <br />
              Có. Theo IS 17876:2022, chứng nhận BIS là bắt buộc đối với tất cả
              nhà sản xuất và người nhập khẩu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Cần thử nghiệm gì?</strong>
              <br />
              Phân tích hóa học, thử nghiệm kéo, thử nghiệm độ cứng, thử nghiệm
              thủy tĩnh, NDT, làm phẳng và kiểm tra kích thước.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Chứng nhận BIS mất bao lâu?</strong>
              <br />
              Thường là 35–50 ngày cho Nhà sản xuất Ấn Độ và khoảng 120 ngày
              cho nhà sản xuất nước ngoài, tùy thuộc vào sự sẵn sàng thử nghiệm
              và kiểm tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Nhà sản xuất nước ngoài có thể có chứng nhận BIS không?
              </strong>
              <br />
              Có, thông qua FMCS (Chương trình Chứng nhận Nhà sản xuất Nước ngoài).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Cần tài liệu gì?</strong>
              <br />
              Giấy phép nhà máy, danh sách thiết bị thử nghiệm, BOM, quy trình,
              bản vẽ, kế hoạch QC, tài liệu thương hiệu, v.v.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Nếu mẫu thử nghiệm thất bại thì sao?</strong>
              <br />
              Nhà sản xuất phải sửa lỗi, làm lại sản phẩm và gửi lại để thử nghiệm.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Đánh dấu ISI có bắt buộc sau khi phê duyệt không?</strong>
              <br />
              Có. Sản phẩm phải hiển thị Dấu ISI + số CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Tất cả các cấp có được bao phủ theo IS 17876 không?</strong>
              <br />
              Chỉ các cấp cụ thể được định nghĩa theo tiêu chuẩn mới đủ điều kiện.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. BIS tiến hành giám sát thường xuyên như thế nào?</strong>
              <br />
              Kiểm toán định kỳ và thử nghiệm mẫu ngẫu nhiên được thực hiện trong
              thời gian hiệu lực giấy phép.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="Chứng nhận BIS cho ống và ống Hàn - IS 17876:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadVietnamese />

        <FaqAuthorVietnamese questionNumber={3} />
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
              Chứng chỉ Đăng ký BIS
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
