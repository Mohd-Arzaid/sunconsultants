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

const BISCertificateForFlashlightVietnamese = () => {
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

export default BISCertificateForFlashlightVietnamese;

const MetaTags = () => {
  const title = "Giấy chứng nhận BIS cho Đèn pin | Giấy phép BIS IS 2083:2024";
  const ogTitle = "Chứng nhận BIS cho Đèn pin – Hướng dẫn IS 2083:2024";
  const twitterTitle = "Giấy phép BIS cho Đèn pin | IS 2083:2024";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho Đèn pin theo IS 2083:2024. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Đèn pin theo IS 2083:2024. Biết quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Đèn pin theo IS 2083:2024. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Đèn pin, Giấy phép BIS cho Đèn pin, IS 2083:2024, Chứng nhận BIS cho Đèn pin";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/den-pin-is-2083";
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
                    Giấy chứng nhận BIS cho Đèn pin – IS 2083:2024
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
          Giấy chứng nhận BIS cho Đèn pin theo IS 2083:2024 – Hướng dẫn Tuân thủ
          Đầy đủ
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="Giấy phép BIS cho Đèn pin"
            alt="Giấy chứng nhận BIS cho Đèn pin - Chứng nhận BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đèn pin (thường được gọi là đèn pin) là thiết bị chiếu sáng di động
          thiết yếu được sử dụng trong các hộ gia đình, ngành công nghiệp, dịch
          vụ khẩn cấp, hoạt động an ninh, hoạt động ngoài trời và quản lý thảm
          họa. Vì đèn pin là sản phẩm điện liên quan đến pin, mạch điện, nguồn
          sáng và vỏ bọc, nên việc tuân thủ chất lượng và an toàn là rất quan
          trọng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để điều chỉnh chất lượng sản phẩm, hiệu suất và an toàn người tiêu
          dùng, Cục Tiêu chuẩn Ấn Độ (BIS) đã thông báo IS 2083:2024 – Đèn pin:
          Thông số kỹ thuật, làm cho Chứng nhận BIS trở thành bắt buộc đối với
          đèn pin được bán, sản xuất hoặc nhập khẩu vào Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang này cung cấp giải thích toàn diện và gốc về Chứng nhận BIS cho
          đèn pin, bao gồm tiêu chuẩn áp dụng, quy trình chứng nhận, yêu cầu
          kiểm tra, tài liệu, phí, thời gian, hình phạt và trách nhiệm tuân thủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì và Tại sao Nó Áp dụng cho Đèn pin
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cục Tiêu chuẩn Ấn Độ (BIS) là cơ quan tiêu chuẩn quốc gia của Ấn Độ
          chịu trách nhiệm đảm bảo rằng các sản phẩm được bán trên thị trường Ấn
          Độ đáp ứng các tiêu chuẩn an toàn, chất lượng và hiệu suất được quy
          định.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa của Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy chứng nhận BIS xác nhận rằng đèn pin:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ Tiêu chuẩn Ấn Độ IS 2083:2024</li>
          <li>
            Đã vượt qua tất cả các thử nghiệm bắt buộc trong phòng thí nghiệm
          </li>
          <li>Đáp ứng các yêu cầu về điện, cơ khí và hiệu suất</li>
          <li>An toàn cho người tiêu dùng sử dụng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi được phê duyệt, nhà sản xuất được phép gắn Dấu ISI, biểu thị
          sự tuân thủ Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn Ấn Độ Áp dụng – IS 2083:2024 (Đèn pin: Thông số kỹ thuật)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Đèn pin: Thông số kỹ thuật
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 xác định các yêu cầu về cấu trúc, hiệu suất, an toàn và
          kiểm tra cho đèn pin di động được sử dụng để chiếu sáng chung.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi của IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đèn pin cầm tay (đèn pin)</li>
          <li>Đèn pin chạy bằng pin</li>
          <li>Đèn pin sạc được</li>
          <li>Đèn pin LED</li>
          <li>Đèn pin khẩn cấp và tiện ích</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Các Lĩnh vực Chính được Tiêu chuẩn Bao phủ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>An toàn điện</li>
          <li>Hiệu suất phát sáng</li>
          <li>Độ bền cơ khí</li>
          <li>Tương thích pin</li>
          <li>Độ bền công tắc</li>
          <li>Bảo vệ chống quá nhiệt</li>
          <li>Khả năng chống mài mòn thông thường</li>
          <li>Yêu cầu đánh dấu và dán nhãn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bất kỳ đèn pin nào thuộc phạm vi này phải có Giấy phép BIS cho Đèn pin
          trước khi vào thị trường Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là Bắt buộc cho Đèn pin
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đèn pin được sử dụng rộng rãi bởi người tiêu dùng ở mọi lứa tuổi và
          trong các tình huống quan trọng như khẩn cấp, mất điện và hoạt động
          công nghiệp. Đèn pin kém chất lượng có thể gây ra:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ngắn mạch điện</li>
          <li>Rò rỉ hoặc nổ pin</li>
          <li>Quá nhiệt</li>
          <li>Nguy cơ cháy</li>
          <li>Hiệu suất chiếu sáng kém</li>
          <li>Hỏng sớm</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chứng nhận BIS Đảm bảo
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>An toàn điện và người dùng</li>
          <li>Đầu ra ánh sáng nhất quán</li>
          <li>Cấu trúc bền</li>
          <li>Vận hành pin an toàn</li>
          <li>Tuân thủ các yêu cầu quy định của Ấn Độ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bán đèn pin không được chứng nhận là vi phạm pháp luật theo Đạo luật
          BIS năm 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Đèn pin
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này quy định các yêu cầu và thử nghiệm
          cho đèn pin được cung cấp năng lượng bởi pin sơ cấp có thể thay thế và
          pin thứ cấp có thể thay thế/tích hợp với điện áp tối đa 48 V d.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này áp dụng cho loại đèn pin tiêu cự
          trước cũng như loại lấy nét với bóng đèn sợi đốt và mô-đun LED làm
          nguồn sáng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Những điều sau đây không nằm trong phạm vi của
          tiêu chuẩn này:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Đèn cầm tay kết nối dây và phích cắm nằm trong phạm vi của IS 10322
            (Phần 5/Mục 6);
          </li>
          <li>
            Chiếu sáng khẩn cấp nằm trong phạm vi của IS 10322 (Phần 5/Mục 8);
            và
          </li>
          <li>Đèn pin dành cho các địa điểm nguy hiểm.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Đèn pin (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS cho đèn pin được thực hiện theo Chương trình
          Chứng nhận Dấu ISI (Chương trình-I) và bao gồm nhiều giai đoạn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Nhận dạng Sản phẩm & Ánh xạ Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải xác nhận rằng sản phẩm đủ điều kiện là đèn pin theo
          IS 2083:2024 và xác định:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Loại đèn pin</li>
          <li>Nguồn điện (pin/sạc được)</li>
          <li>Nguồn sáng (LED, bóng đèn, v.v.)</li>
          <li>Biến thể và mẫu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Đơn BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Đơn được gửi qua Cổng Trực tuyến BIS Manak, cùng với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết nhà sản xuất</li>
          <li>Địa chỉ nhà máy</li>
          <li>Mô tả sản phẩm</li>
          <li>Chi tiết thương hiệu/nhãn hiệu</li>
          <li>Thông tin quy trình sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Thanh toán Phí BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Các khoản phí áp dụng bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đơn</li>
          <li>Phí xử lý</li>
          <li>Phí kiểm tra sản phẩm</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Sản phẩm theo IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẫu được kiểm tra tại phòng thí nghiệm được BIS công nhận.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Thử nghiệm Bắt buộc cho Đèn pin
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thử nghiệm cường độ phát sáng</li>
          <li>Thử nghiệm độ ổn định đầu ra ánh sáng</li>
          <li>Thử nghiệm độ bền pin</li>
          <li>Thử nghiệm hoạt động công tắc</li>
          <li>Độ bền cơ khí (thử nghiệm rơi)</li>
          <li>Thử nghiệm điện trở cách điện</li>
          <li>Thử nghiệm tăng nhiệt độ</li>
          <li>Thử nghiệm an toàn điện</li>
          <li>Xác minh đánh dấu và dán nhãn</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Báo cáo thử nghiệm được gửi trực tiếp đến BIS bởi phòng thí nghiệm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Thanh tra Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Một cán bộ BIS tiến hành thanh tra tại chỗ để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thiết lập sản xuất</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Kiểm tra vật liệu đầu vào</li>
          <li>Kiểm tra trong quá trình</li>
          <li>Kiểm tra sản phẩm hoàn chỉnh</li>
          <li>Hiệu chuẩn dụng cụ thử nghiệm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tuân thủ Chương trình Thử nghiệm và Thanh tra (STI) là bắt buộc.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi thử nghiệm và thanh tra thành công, BIS cấp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS</li>
          <li>Phê duyệt Dấu ISI</li>
          <li>Số CML (Giấy chứng nhận Giấy phép Sản xuất)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất hiện có thể hợp pháp sản xuất và bán đèn pin tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Tuân thủ Sau Chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi chứng nhận, nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sử dụng Dấu ISI đúng cách trên sản phẩm và bao bì</li>
          <li>Duy trì hồ sơ chất lượng theo lô</li>
          <li>Cho phép thanh tra giám sát BIS</li>
          <li>Gia hạn giấy phép định kỳ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Đèn pin
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đăng ký/giấy phép nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc</li>
          <li>Danh sách thiết bị kiểm tra nội bộ</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
          <li>Sơ đồ nhà máy</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảng thông số kỹ thuật sản phẩm</li>
          <li>Sơ đồ mạch</li>
          <li>Thông số kỹ thuật pin</li>
          <li>Hóa đơn vật liệu</li>
          <li>Báo cáo thử nghiệm nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân của người ký được ủy quyền</li>
          <li>Giấy tờ chứng minh địa chỉ</li>
          <li>Thư ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận nhãn hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đặc thù BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn BIS</li>
          <li>Cam kết và tuyên bố</li>
          <li>Thư yêu cầu thử nghiệm</li>
          <li>Thiết kế nhãn (định dạng đánh dấu ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra theo IS 2083:2024 (Chi tiết)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đèn pin phải trải qua kiểm tra nghiêm ngặt để đảm bảo an toàn và hiệu
          suất.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chỉ các sản phẩm vượt qua tất cả các thử nghiệm bắt buộc mới đủ điều
          kiện để được BIS phê duyệt.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm Hoàn thiện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra kích thước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra đánh dấu
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm chức năng công tắc
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm điện trở cách điện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm phân bố ánh sáng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dòng điện mạch của đèn pin LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm dòng sạc trong đèn pin chạy bằng pin sạc tích hợp
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp trong Chứng nhận BIS cho Đèn pin
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thất bại trong thử nghiệm tăng nhiệt độ</li>
          <li>Đầu ra phát sáng không nhất quán</li>
          <li>Độ bền công tắc kém</li>
          <li>Vấn đề tương thích pin</li>
          <li>Định dạng nhãn ISI không đúng</li>
          <li>Tài liệu không đầy đủ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kiểm tra trước và hướng dẫn chuyên gia giảm đáng kể rủi ro bị từ chối.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Nhà sản xuất Đèn pin
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quyền hợp pháp để bán tại Ấn Độ</li>
          <li>Tăng niềm tin của người tiêu dùng</li>
          <li>Cải thiện độ tin cậy sản phẩm</li>
          <li>Được chấp nhận trên các nền tảng thương mại điện tử</li>
          <li>Đủ điều kiện cho mua sắm chính phủ</li>
          <li>Giảm trách nhiệm và thu hồi</li>
          <li>Uy tín thương hiệu mạnh</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Việc Bán Đèn pin Không có Chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Hình phạt tiền nặng</li>
          <li>Cấm nhập khẩu</li>
          <li>Đóng cửa sản xuất</li>
          <li>Khởi tố hình sự theo Đạo luật BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Đèn pin?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Chủ sở hữu thương hiệu</li>
          <li>Nhà cung cấp OEM/ODM</li>
          <li>Người bán trực tuyến và nhà phân phối</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi đơn vị sản xuất yêu cầu giấy phép BIS riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Đèn pin theo IS 2083:2024 là yêu cầu quy định
          bắt buộc đảm bảo an toàn, hiệu suất và độ tin cậy của sản phẩm chiếu
          sáng di động tại Ấn Độ. Tuân thủ không chỉ bảo vệ người tiêu dùng mà
          còn tăng cường uy tín thương hiệu và khả năng tiếp cận thị trường. Với
          hướng dẫn chuyên nghiệp, nhà sản xuất và nhà nhập khẩu có thể đạt được
          chứng nhận BIS một cách suôn sẻ và hiệu quả.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Đèn pin (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc cho đèn pin tại Ấn Độ không?
              </strong>
              <br />
              Có. Đèn pin được bao phủ theo IS 2083:2024 phải được chứng nhận
              BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Tiêu chuẩn nào áp dụng cho đèn pin?</strong>
              <br />
              IS 2083:2024 – Đèn pin: Thông số kỹ thuật.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quy trình BIS mất bao lâu?</strong>
              <br />
              Khoảng 30–45 ngày làm việc cho Nhà sản xuất Ấn Độ và khoảng 120
              ngày cho Nhà sản xuất Nước ngoài.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Nhà sản xuất nước ngoài có thể đăng ký chứng nhận BIS không?
              </strong>
              <br />
              Có, thông qua chương trình FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Đánh dấu ISI có bắt buộc không?</strong>
              <br />
              Có, Dấu ISI phải được hiển thị trên đèn pin được chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Điều gì xảy ra nếu đèn pin thất bại trong kiểm tra?
              </strong>
              <br />
              Sản phẩm phải được sửa chữa và kiểm tra lại.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Đèn pin sạc được cũng được bao phủ không?</strong>
              <br />
              Có, nếu chúng nằm trong phạm vi của IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Giấy phép BIS có hiệu lực bao lâu?</strong>
              <br />
              1–2 năm, có thể gia hạn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Nhiều mẫu có thể được bao phủ dưới một giấy phép không?
              </strong>
              <br />
              Có, nếu chúng đáp ứng tiêu chí tương tự.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadVietnamese />
        <FaqAuthorVietnamese questionNumber={4} />
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
