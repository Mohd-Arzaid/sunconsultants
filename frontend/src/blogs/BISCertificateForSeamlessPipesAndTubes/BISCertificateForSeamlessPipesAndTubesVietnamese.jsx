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

const BISCertificateForSeamlessPipesAndTubesVietnamese = () => {
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

export default BISCertificateForSeamlessPipesAndTubesVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Ống và Ống không mối nối | Giấy phép BIS IS 17875:2022";
  const ogTitle =
    "Chứng nhận BIS cho Ống và Ống không mối nối – Hướng dẫn IS 17875:2022";
  const twitterTitle =
    "Giấy phép BIS cho Ống và Ống không mối nối | IS 17875:2022";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho Ống và Ống không mối nối theo IS 17875:2022. Quy trình, tài liệu, kiểm tra, chi phí và thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Ống và Ống không mối nối theo IS 17875:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Ống và Ống không mối nối theo IS 17875:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Ống và Ống không mối nối, Giấy phép BIS cho Ống và Ống không mối nối, IS 17875:2022, Chứng nhận BIS cho Ống và Ống không mối nối";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ong-va-ong-khong-moi-noi-is-17875";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Trưởng Bộ phận Vận hành tại Sun Certification India";

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
                    Giấy chứng nhận BIS cho Ống và Ống không mối nối – IS
                    17875:2022
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
          Giấy chứng nhận BIS cho Ống và Ống không mối nối theo IS 17875:2022 —
          Hướng dẫn Chứng nhận Đầy đủ
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="Giấy phép BIS cho Ống và Ống không mối nối"
            alt="Giấy chứng nhận BIS cho Ống và Ống không mối nối - IS 17875:2022 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ống và ống thép không mối nối được công nhận rộng rãi vì hiệu suất
          vượt trội trong các ứng dụng quan trọng, áp suất cao và nhiệt độ cao.
          Chúng rất cần thiết trong các ngành công nghiệp như dầu khí, hóa dầu,
          nhà máy lọc dầu, kỹ thuật nặng, ô tô, nhà máy nhiệt điện, hàng không
          vũ trụ, thủy lực và hệ thống cơ khí chung. Vì ống không mối nối không
          có đường hàn nên chúng có độ bền, tính đồng nhất và khả năng xử lý áp
          suất lớn hơn so với ống hàn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để đảm bảo các nhà sản xuất tuân theo chất lượng sản xuất nhất quán và
          cung cấp các sản phẩm an toàn, không có khuyết tật vào thị trường Ấn
          Độ, Chính phủ Ấn Độ đã quy định Chứng nhận BIS là bắt buộc cho ống và
          ống không mối nối theo IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang toàn diện này giải thích toàn bộ quy trình để có được Giấy phép
          BIS, bao gồm tài liệu, kiểm tra bắt buộc, yêu cầu tuân thủ chất lượng,
          phí, thời gian, thách thức kỹ thuật, lợi ích, hình phạt và khả năng áp
          dụng trong ngành — được viết ở định dạng mở rộng, chi tiết sâu và giàu
          SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Ống và Ống không mối nối là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS là sự chấp thuận chính thức được Cục Tiêu chuẩn Ấn
          Độ cấp, xác nhận rằng nhà sản xuất sản xuất ống/ống không mối nối theo
          các thông số kỹ thuật được định nghĩa trong IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ống không mối nối phải trải qua các kiểm tra nghiêm ngặt liên quan
          đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Khả năng chịu áp suất</li>
          <li>Độ bền kéo</li>
          <li>Độ dai va đập</li>
          <li>Khả năng uốn cong</li>
          <li>Thành phần hóa học</li>
          <li>Độ chính xác kích thước</li>
          <li>Đánh giá không phá hủy</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chỉ những nhà sản xuất đáp ứng các yêu cầu hiệu suất này mới nhận được
          Dấu ISI, cho phép họ sản xuất, nhập khẩu hoặc bán ống không mối nối
          tại Ấn Độ một cách hợp pháp.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mục tiêu Chính của Chứng nhận BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Ngăn chặn các hệ thống ống dẫn kém chất lượng hoặc nguy hiểm xâm
            nhập vào chuỗi cung ứng công nghiệp
          </li>
          <li>Đảm bảo chất lượng sản xuất nhất quán và đáng tin cậy</li>
          <li>
            Bảo vệ các ngành công nghiệp phụ thuộc vào truyền chất lỏng hoặc khí
            áp suất cao
          </li>
          <li>Duy trì các tiêu chuẩn an toàn và chất lượng quốc gia</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hiểu về IS 17875:2022 — Tiêu chuẩn Ấn Độ cho Ống và Ống không mối nối
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 quy định các yêu cầu về chất lượng, kiểm tra, sản xuất
          và hiệu suất cho ống và ống thép không mối nối dùng cho dịch vụ chung.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Ống và Ống không mối nối
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này bao gồm các yêu cầu cho ống và ống
          thép không gỉ không mối nối cho dịch vụ chung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này không quy định yêu cầu của ống và
          ống thép không gỉ không mối nối dùng cho các mục đích riêng biệt, được
          bao phủ bởi các Tiêu chuẩn Ấn Độ riêng biệt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ứng dụng được Bao phủ theo IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đường ống dầu và khí</li>
          <li>Dịch vụ chất lỏng nhiệt độ cao</li>
          <li>Ống lò hơi</li>
          <li>Nhà máy chế biến hóa chất</li>
          <li>Hệ thống thủy lực và khí nén</li>
          <li>Bộ trao đổi nhiệt</li>
          <li>Ứng dụng kết cấu</li>
          <li>Thành phần ô tô</li>
          <li>Ứng dụng hơi nước</li>
          <li>Đường ống công nghiệp áp suất cao</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thông số Chất lượng Chính trong IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Yêu cầu về Thành phần Hóa học:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Quy định giới hạn cho carbon, mangan, crom, niken, molypden, lưu
          huỳnh, phốt pho, v.v.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Tính chất Cơ học:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ bền kéo</li>
          <li>Giới hạn chảy</li>
          <li>Độ cứng</li>
          <li>Độ dẻo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Dung sai Kích thước:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đường kính ngoài</li>
          <li>Độ dày thành</li>
          <li>Dung sai chiều dài</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Điều kiện Bề mặt:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Ống phải không có vết nứt, tách lớp, đường hàn, vết xước hoặc bất kỳ
          khuyết tật có hại nào.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Kiểm tra Thủy tĩnh:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Đảm bảo ống có thể chịu được áp suất bên trong mà không bị rò rỉ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Kiểm tra Không phá hủy (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Bao gồm dòng xoáy, kiểm tra siêu âm hoặc kiểm tra hạt từ tính.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS Đầy đủ cho Ống không mối nối (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS cho ống không mối nối có tính kỹ thuật và chi
          tiết hơn hầu hết các sản phẩm khác vì các yêu cầu sản xuất và kiểm tra
          rất rộng. Dưới đây là giải thích từng bước rất chi tiết.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 1 — Xác định Khả năng Áp dụng & Phân loại Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xác định tất cả các cấp thép đang được sử dụng</li>
          <li>Xác định kích thước và phạm vi độ dày</li>
          <li>
            Xác nhận xem tất cả các biến thể có nằm trong phạm vi của IS 17875
            không
          </li>
          <li>Chuẩn bị phân loại sản phẩm cho kiểm tra BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Một giấy phép BIS duy nhất có thể bao gồm nhiều kích thước và cấp nếu
          chúng dùng chung cơ sở sản xuất và quy trình.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 2 — Chuẩn bị Tài liệu & Nộp Đơn BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải nộp đơn trên Cổng BIS Trực tuyến Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Thông tin bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết và bố cục nhà máy</li>
          <li>Công suất sản xuất và quy trình</li>
          <li>Chi tiết lò nung và xử lý nhiệt</li>
          <li>Thiết bị cán, đục và kéo</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Tài liệu nguồn nguyên liệu thô</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nộp đơn không đúng là một trong những nguyên nhân phổ biến nhất khiến
          đơn BIS bị từ chối.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 3 — Nộp Phí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Phí bao gồm:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra phòng thí nghiệm</li>
          <li>Chi phí thanh tra và đi lại</li>
          <li>Phí đánh dấu dựa trên khối lượng sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 4 — Chọn Mẫu & Kiểm tra Phòng thí nghiệm BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ống không mối nối trải qua kiểm tra cơ học và hóa học rộng rãi.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đây là phần tốn thời gian nhất và kỹ thuật nhất của chứng nhận BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Kiểm tra Thành phần Hóa học</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Được thực hiện bằng:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quang phổ phát xạ quang học</li>
          <li>Phương pháp hóa học ướt</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Đảm bảo thành phần hóa học chính xác theo IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Kiểm tra Cơ học</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Kiểm tra Kéo</strong> — Đánh giá độ bền kéo tối đa, điểm
            chảy và độ giãn dài.
          </li>
          <li>
            <strong>Kiểm tra Độ cứng</strong> — Xác nhận độ dai của vật liệu.
          </li>
          <li>
            <strong>Kiểm tra Làm phẳng</strong> — Kiểm tra độ dẻo và khả năng
            hàn (mặc dù không mối nối, làm phẳng kiểm tra tính toàn vẹn của vật
            liệu).
          </li>
          <li>
            <strong>Kiểm tra Mở rộng / Viền</strong> — Đảm bảo khả năng biến
            dạng mà không bị nứt.
          </li>
          <li>
            <strong>Kiểm tra Va đập (Charpy)</strong> — Đánh giá hiệu suất ở
            nhiệt độ thấp.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Kiểm tra Thủy tĩnh</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Ống được kiểm tra với áp suất bên trong cao để đảm bảo không xảy ra rò
          rỉ hoặc biến dạng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Kiểm tra Không phá hủy</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Bắt buộc để phát hiện khuyết tật bên trong.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Các phương pháp bao gồm:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra Siêu âm</li>
          <li>Kiểm tra Dòng xoáy</li>
          <li>Kiểm tra Hạt từ tính (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Kiểm tra Trực quan & Kích thước</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Đánh giá:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hoàn thiện bề mặt</li>
          <li>Độ thẳng</li>
          <li>Độ oval</li>
          <li>Dung sai độ dày</li>
          <li>Độ chính xác đường kính</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Kiểm tra Luyện kim</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Phân tích cấu trúc vi mô xác nhận cấu trúc hạt, hiệu quả xử lý nhiệt
          và độ ổn định của vật liệu.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 5 — Thanh tra Nhà máy BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Khi kết quả kiểm tra thành công, cán bộ BIS sẽ đến thăm nhà máy.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Họ kiểm tra:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kho chứa nguyên liệu thô</li>
          <li>Quy trình lò nung/xử lý nhiệt</li>
          <li>Máy đục, máy giảm và bàn kéo nguội</li>
          <li>Cơ sở kiểm tra thủy tĩnh</li>
          <li>Cơ sở NDT</li>
          <li>Thiết bị phòng thí nghiệm & hiệu chuẩn</li>
          <li>Sổ ghi chép kiểm soát chất lượng</li>
          <li>Xác minh công suất sản xuất</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà máy phải tuân thủ đầy đủ Chương trình Kiểm tra & Thanh tra (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 6 — Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nếu kiểm tra và thanh tra đáp ứng yêu cầu BIS, nhà sản xuất sẽ nhận
          được:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS</li>
          <li>Số CML</li>
          <li>Ủy quyền sử dụng Dấu ISI trên ống không mối nối</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS có thể từ chối đơn đăng ký nếu chỉ một yêu cầu không được đáp ứng
          — khiến hướng dẫn chuyên gia trở nên cực kỳ có giá trị.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BƯỚC 7 — Nghĩa vụ Sau Chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sử dụng Dấu ISI đúng cách trên nhãn, bao bì và ống</li>
          <li>Duy trì kiểm tra nội bộ theo STI</li>
          <li>Trải qua các cuộc thanh tra giám sát BIS thường xuyên</li>
          <li>Đảm bảo mỗi lô tuân thủ IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Không duy trì tuân thủ có thể dẫn đến đình chỉ hoặc hủy bỏ giấy phép.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Ống không mối nối
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Tài liệu Sản xuất & Sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy phép nhà máy</li>
          <li>Sơ đồ bố cục với vị trí máy móc</li>
          <li>Sổ tay quy trình kiểm soát chất lượng</li>
          <li>Hồ sơ xử lý nhiệt</li>
          <li>Giấy chứng nhận kiểm tra nhà máy nguyên liệu thô</li>
          <li>Chi tiết quy trình cán/đục</li>
          <li>Chi tiết bàn kéo</li>
          <li>Giấy chứng nhận hiệu chuẩn cho thiết bị kiểm tra</li>
          <li>Báo cáo kiểm tra nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hóa đơn vật liệu</li>
          <li>Thông số kỹ thuật cấp hóa học</li>
          <li>Bảng tính chất cơ học</li>
          <li>Biểu đồ dung sai kích thước</li>
          <li>Bản vẽ & thông số kỹ thuật của ống</li>
          <li>Tài liệu hệ thống truy xuất vật liệu</li>
          <li>Quy trình vận hành tiêu chuẩn cho sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Tài liệu Pháp lý & Tổ chức
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thư ủy quyền</li>
          <li>Tài liệu sở hữu thương hiệu/nhãn hiệu</li>
          <li>Giấy tờ chứng minh danh tính & địa chỉ</li>
          <li>Cam kết & tuyên bố theo yêu cầu của BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Ống không mối nối theo IS 17875:2022
        </h2>

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
                  Phân tích Muôi
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
                  Kiểm tra Mở rộng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Làm phẳng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước Hạt
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Độ kín
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tay nghề, Hoàn thiện, Ngoại hình
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
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
          Thách thức Thường gặp trong Chứng nhận BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Thất bại trong kiểm tra thành phần hóa học</strong>
            <br />
            Xảy ra do cấp thép không nhất quán.
          </li>
          <li>
            <strong>Thất bại của kiểm tra cơ học</strong>
            <br />
            Thường do xử lý nhiệt không đúng.
          </li>
          <li>
            <strong>Từ chối NDT</strong>
            <br />
            Vết nứt bên trong hoặc tạp chất có thể gây ra thất bại mẫu.
          </li>
          <li>
            <strong>Hiệu chuẩn không đầy đủ</strong>
            <br />
            Dẫn đến dữ liệu kiểm tra không chính xác.
          </li>
          <li>
            <strong>Không tuân thủ STI</strong>
            <br />
            Ghi chép không đúng trong quá trình thanh tra trở thành lý do từ
            chối chính.
          </li>
          <li>
            <strong>Biến đổi kích thước</strong>
            <br />
            Sự không nhất quán về đường kính hoặc độ dày ống gây ra thất bại.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Ống không mối nối
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sự chấp thuận pháp lý để sản xuất/bán tại Ấn Độ</li>
          <li>Đảm bảo an toàn và độ tin cậy</li>
          <li>Cải thiện danh tiếng thương hiệu</li>
          <li>Cần thiết cho đấu thầu chính phủ</li>
          <li>Yêu cầu bởi các ngành công nghiệp PSU và tư nhân</li>
          <li>Bảo vệ người tiêu dùng khỏi sản phẩm kém chất lượng</li>
          <li>Tăng cường khả năng cạnh tranh xuất khẩu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Theo Đạo luật BIS, bán ống không mối nối không được chứng nhận dẫn
          đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Hình phạt nặng</li>
          <li>Đóng cửa sản xuất</li>
          <li>Hạn chế nhập khẩu</li>
          <li>Đưa thương hiệu vào danh sách đen</li>
          <li>Khởi tố hình sự</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Phải Có Chứng nhận BIS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Thương nhân (chủ sở hữu thương hiệu)</li>
          <li>Công ty OEM & kỹ thuật</li>
          <li>Nhà nhập khẩu và người tồn trữ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi đơn vị sản xuất phải có giấy phép riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ống và Ống không mối nối theo IS 17875:2022 là
          yêu cầu quy định quan trọng đảm bảo rằng ống dịch vụ áp suất cao đáp
          ứng các tiêu chuẩn an toàn và chất lượng nghiêm ngặt của Ấn Độ. Từ
          thành phần hóa học đến kiểm tra không phá hủy tiên tiến, BIS đảm bảo
          rằng mỗi ống được chứng nhận đều bền, không có khuyết tật và có khả
          năng hoạt động trong điều kiện công nghiệp khắt khe.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với hướng dẫn chuyên nghiệp, các nhà sản xuất có thể đơn giản hóa hành
          trình chứng nhận, giảm thiểu sự chậm trễ và đạt được sự tuân thủ một
          cách suôn sẻ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp — Chứng nhận BIS cho Ống không mối nối (Mở rộng &
          Giàu SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Tại sao Chứng nhận BIS là bắt buộc cho ống không mối nối?
              </strong>
              <br />
              Vì ống không mối nối được sử dụng trong các ứng dụng áp suất cao
              và quan trọng về an toàn. Quy định của chính phủ đảm bảo chỉ ống
              chất lượng cao mới được vào thị trường Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Tiêu chuẩn nào áp dụng cho ống không mối nối?</strong>
              <br />
              IS 17875:2022
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quy trình chứng nhận mất bao lâu?</strong>
              <br />
              Thường là 40–60 ngày cho Nhà sản xuất Ấn Độ và khoảng 120 ngày cho
              nhà sản xuất nước ngoài, tùy thuộc vào tải kiểm tra và lịch trình
              thanh tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Cần kiểm tra gì?</strong>
              <br />
              Phân tích hóa học, kiểm tra kéo, độ cứng, thủy tĩnh, NDT, làm
              phẳng, mở rộng và kiểm tra kích thước.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Các công ty nước ngoài có thể đăng ký chứng nhận BIS không?
              </strong>
              <br />
              Có, thông qua chương trình FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Điều gì xảy ra nếu sản phẩm không đạt kiểm tra?
              </strong>
              <br />
              Phải được sửa chữa và kiểm tra lại; BIS sẽ không cấp giấy phép cho
              đến khi đạt được sự tuân thủ đầy đủ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Cần những tài liệu gì?</strong>
              <br />
              Giấy phép nhà máy, danh sách máy móc, thiết bị kiểm tra, bản vẽ,
              tài liệu kiểm soát chất lượng, giấy chứng nhận nguyên liệu thô,
              v.v.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Đánh dấu ISI có bắt buộc không?</strong>
              <br />
              Có. Việc bán ống không mối nối mà không hiển thị dấu ISI là bất
              hợp pháp.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Có cho phép nhiều cấp trong một giấy phép không?
              </strong>
              <br />
              Có, nếu được sản xuất bằng cùng cơ sở và quy trình (tùy thuộc vào
              sự chấp thuận của BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Giấy phép BIS có hiệu lực bao lâu?</strong>
              <br />
              1–2 năm, có thể gia hạn vô thời hạn.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Ống và Ống không mối nối - IS 17875:2022 PDF"
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
                alt="Logo Giấy chứng nhận LMPC"
                title="Logo Giấy chứng nhận LMPC"
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
