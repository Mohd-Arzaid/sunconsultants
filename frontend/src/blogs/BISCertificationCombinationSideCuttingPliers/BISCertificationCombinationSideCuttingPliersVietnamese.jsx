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

const BISCertificationCombinationSideCuttingPliersVietnamese = () => {
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




export default BISCertificationCombinationSideCuttingPliersVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho kìm cắt bên kết hợp | IS 3650:1981 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho kìm cắt bên kết hợp – Hướng dẫn IS 3650:1981";
  const twitterTitle =
    "Giấy phép BIS cho kìm cắt bên kết hợp | IS 3650:1981";
  const metaDescription =
    "Nhận chứng nhận BIS cho kìm cắt bên kết hợp theo IS 3650:1981. Quy trình, tài liệu, thử nghiệm, chi phí và thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho kìm cắt bên kết hợp theo IS 3650:1981. Quy trình, chi phí, tài liệu, thử nghiệm và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký chứng nhận BIS cho kìm cắt bên kết hợp theo IS 3650:1981. Quy trình BIS, tài liệu, thử nghiệm, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Chứng nhận BIS cho kìm cắt bên kết hợp, Giấy phép BIS cho kìm cắt bên kết hợp, IS 3650:1981, Chứng nhận BIS cho kìm cắt bên kết hợp";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kiem-cat-ben-ket-hop-is-3650";
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
                    <Link to="/Blogs">Bài viết mới nhất</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Chứng nhận BIS cho kìm cắt bên kết hợp – IS 3650:1981
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
          Chứng nhận BIS Kìm cắt bên kết hợp – Hướng dẫn đầy đủ IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="Giấy phép BIS cho kìm cắt bên kết hợp"
            alt="Chứng nhận BIS cho kìm cắt bên kết hợp - IS 3650:1981 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kìm cắt bên kết hợp là một trong những dụng cụ cầm tay được sử dụng phổ biến nhất trong công việc điện, bảo trì cơ khí, xây dựng, đơn vị sản xuất, xưởng, dịch vụ ô tô và sửa chữa gia đình. Các công cụ này được thiết kế để thực hiện nhiều chức năng như kẹp, uốn, xoắn và cắt dây. Vì chúng thường được dùng để cắt dây kim loại, dây dẫn điện và linh kiện nhỏ, kìm chất lượng kém có thể gây vỡ dụng cụ, rủi ro điện giật, chấn thương tay và tai nạn lao động nghiêm trọng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để đảm bảo an toàn, độ bền và chất lượng đồng đều, Chính phủ Ấn Độ yêu cầu tuân thủ Tiêu chuẩn Ấn Độ cho dụng cụ cầm tay. Việc có Chứng nhận BIS cho kìm cắt bên kết hợp theo IS 3650:1981 là yêu cầu pháp lý và chất lượng quan trọng đối với nhà sản xuất và nhà nhập khẩu bán các công cụ này tại Ấn Độ. Chứng nhận BIS hợp lệ cho kìm cắt bên kết hợp xác nhận sản phẩm đã được thử nghiệm về độ bền cơ học, hiệu quả cắt, độ cứng vật liệu và hiệu suất an toàn tổng thể.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang sản phẩm chi tiết này được tạo cho nhà sản xuất, nhà sản xuất nước ngoài, nhà nhập khẩu, thương nhân, nhà phân phối, thương hiệu phần cứng, người bán thương mại điện tử và chuyên gia tuân thủ muốn hiểu đầy đủ về Giấy phép BIS cho kìm cắt bên kết hợp, bao gồm quy trình chứng nhận BIS tại Ấn Độ, yêu cầu thử nghiệm, tài liệu, chi phí, thời gian, hình phạt và lợi ích.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống đánh giá sự phù hợp sản phẩm do Cục Tiêu chuẩn Ấn Độ (Bureau of Indian Standards) quản lý, đây là cơ quan quốc gia của Ấn Độ về tiêu chuẩn hóa, chứng nhận và đảm bảo chất lượng.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ý nghĩa Chứng nhận BIS đề cập đến sự chấp thuận chính thức do BIS cấp xác nhận rằng sản phẩm phù hợp với Tiêu chuẩn Ấn Độ (IS) áp dụng và được sản xuất theo hệ thống chất lượng có kiểm soát.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mục tiêu chính của chứng nhận BIS là:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ người tiêu dùng khỏi sản phẩm không an toàn</li>
          <li>Đảm bảo chất lượng sản phẩm nhất quán</li>
          <li>Hỗ trợ thực thi quy định</li>
          <li>Khuyến khích tiêu chuẩn hóa trong ngành công nghiệp Ấn Độ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dấu ISI giải thích
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dấu chứng nhận BIS, thường gọi là Dấu ISI, là biểu tượng của sự tin cậy và tuân thủ. Đối với kìm cắt bên kết hợp, Dấu ISI cho biết:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Công cụ đáp ứng yêu cầu IS 3650:1981</li>
          <li>Hiệu suất cơ học và cắt đã được xác minh</li>
          <li>Sản phẩm được phê duyệt hợp pháp để bán tại Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho kìm cắt bên kết hợp
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Quy định cho kìm kết hợp
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho sản phẩm này là IS 3650:1981, quy định yêu cầu đối với kìm kết hợp có lưỡi cắt bên dùng cho ứng dụng kẹp và cắt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kìm kết hợp có lưỡi cắt bên</li>
          <li>Yêu cầu kích thước, hình dạng và hoàn thiện</li>
          <li>Chất lượng vật liệu và xử lý nhiệt</li>
          <li>Độ bền cơ học và hiệu suất cắt</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          An toàn, Hiệu suất & Mục đích thử nghiệm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 được thiết kế để đảm bảo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kìm có khả năng cắt đủ</li>
          <li>Hàm và lưỡi cắt không vỡ hoặc biến dạng</li>
          <li>Tay cầm cung cấp độ bám an toàn và cách điện khi cần</li>
          <li>Công cụ hoạt động tin cậy trong điều kiện làm việc bình thường</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai phải tuân thủ
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất kìm cắt bên kết hợp tại Ấn Độ</li>
          <li>Nhà nhập khẩu và phân phối</li>
          <li>Nhà sản xuất nước ngoài cung cấp cho thị trường Ấn Độ</li>
          <li>Thương hiệu bán kìm dưới nhãn riêng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là bắt buộc đối với kìm cắt bên kết hợp
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rủi ro an toàn người tiêu dùng
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kìm kém chất lượng có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vỡ đột ngột khi cắt</li>
          <li>Trượt và chấn thương tay</li>
          <li>Nguy cơ điện giật trong ứng dụng điện</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ Chính phủ và Quy định
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Theo tiêu chuẩn và thông báo BIS, dụng cụ cầm tay như kìm kết hợp thuộc IS 3650:1981 phải tuân thủ yêu cầu chứng nhận BIS trước khi bán tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hậu quả pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bán hoặc nhập khẩu kìm không được chứng nhận có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm bởi cơ quan chức năng</li>
          <li>Phạt tài chính</li>
          <li>Thu hồi giấy phép kinh doanh</li>
          <li>Truy tố pháp lý theo Đạo luật BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thị trường và thương hiệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy phép BIS cho kìm cắt bên kết hợp giúp thương hiệu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xây dựng niềm tin với người mua và nhà thầu</li>
          <li>Đủ điều kiện tham gia đấu thầu chính phủ và PSU</li>
          <li>Cạnh tranh với thương hiệu phần cứng uy tín</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho kìm cắt bên kết hợp
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Áp dụng & Xác định tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bước đầu tiên là xác nhận sản phẩm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thuộc loại kìm cắt bên kết hợp</li>
          <li>Được quy định bởi IS 3650:1981</li>
          <li>Phù hợp phạm vi tiêu chuẩn về kích thước và sử dụng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình đăng ký BIS trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đăng ký trên cổng BIS</li>
          <li>Chọn IS 3650:1981 trong tiêu chuẩn sản phẩm</li>
          <li>Điền đơn đăng ký BIS</li>
          <li>Tải lên tất cả tài liệu yêu cầu</li>
          <li>Thanh toán phí áp dụng</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giai đoạn này thường gọi là đăng ký BIS trực tuyến hoặc đăng ký chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phí & Cấu trúc chi phí Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chi phí chứng nhận BIS thường bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký và xử lý</li>
          <li>Phí thử nghiệm sản phẩm</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí giấy phép và đánh dấu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng chi phí chứng nhận BIS phụ thuộc vào:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Số biến thể</li>
          <li>Độ phức tạp thử nghiệm</li>
          <li>Vị trí nhà máy</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thử nghiệm mẫu sản phẩm (Theo IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mẫu được thử nghiệm tại phòng thí nghiệm được BIS công nhận cho:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ cứng lưỡi cắt</li>
          <li>Hiệu suất cắt</li>
          <li>Độ bền cơ học</li>
          <li>Độ chính xác kích thước</li>
          <li>Hoàn thiện bề mặt và tay nghề</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thanh tra & Kiểm toán nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS tiến hành kiểm toán nhà máy để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất</li>
          <li>Xử lý nhiệt và hoàn thiện</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Cơ sở thử nghiệm và thanh tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấp Giấy phép BIS & Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi thử nghiệm và thanh tra thành công:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS cấp Giấy phép Bureau of Indian Standards</li>
          <li>Nhà sản xuất được phép sử dụng Dấu ISI trên kìm đã phê duyệt</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ sau chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yêu cầu sau phê duyệt bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thanh tra giám sát</li>
          <li>Thử nghiệm mẫu thị trường</li>
          <li>Gia hạn giấy phép đúng hạn</li>
          <li>Tuân thủ liên tục IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu yêu cầu cho Chứng nhận BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc và thiết bị thử nghiệm</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận thành lập công ty</li>
          <li>Đăng ký GST</li>
          <li>Ủy quyền nhãn hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bản vẽ và thông số sản phẩm</li>
          <li>Chi tiết nguyên liệu thô</li>
          <li>Kế hoạch xử lý nhiệt và QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu đăng ký BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đơn đăng ký BIS</li>
          <li>Chi tiết yêu cầu thử nghiệm</li>
          <li>Tuyên bố và cam kết</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các tài liệu này gọi chung là TÀI LIỆU CHỨNG NHẬN BIS hoặc TÀI LIỆU CHỨNG NHẬN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu thử nghiệm theo IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các thử nghiệm bắt buộc bao gồm:
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
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sản xuất
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tay nghề và hoàn thiện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bảo quản và đóng gói
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Độ cứng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Cách điện (trừ thử nghiệm cách điện)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm cách điện
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm cắt
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm kẹp ống
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm va đập
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm xoắn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm tải tay cầm
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thử nghiệm uốn
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tất cả thử nghiệm phải được thực hiện tại phòng thí nghiệm được BIS công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức thường gặp & Cách tránh
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vấn đề thường gặp
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thất bại trong thử nghiệm độ cứng hoặc cắt</li>
          <li>Xử lý nhiệt không đúng</li>
          <li>Hoàn thiện bề mặt kém</li>
          <li>Tài liệu không đầy đủ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thực hành tốt nhất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tiến hành thử nghiệm trước nội bộ</li>
          <li>Tuân theo quy trình xử lý nhiệt đúng</li>
          <li>Duy trì hồ sơ chất lượng theo lô</li>
          <li>Nhận hỗ trợ tư vấn BIS chuyên gia</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích Chứng nhận BIS cho Nhà sản xuất & Nhà nhập khẩu
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ đầy đủ quy định Ấn Độ</li>
          <li>Bảo vệ khỏi hình phạt và tịch thu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thương mại
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Được nhà phân phối và nhà thầu chấp nhận</li>
          <li>Đủ điều kiện cho đơn hàng số lượng lớn và thể chế</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thương hiệu
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dấu ISI nâng cao uy tín thương hiệu</li>
          <li>Khác biệt với nhà cung cấp không có tổ chức</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mở rộng thị trường
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tham gia chuỗi bán lẻ phần cứng có tổ chức</li>
          <li>Tăng sự chấp nhận trong doanh nghiệp hướng xuất khẩu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt khi không tuân thủ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phạt tiền nặng</li>
          <li>Tịch thu sản phẩm</li>
          <li>Gián đoạn kinh doanh</li>
          <li>Hành động pháp lý theo Đạo luật BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai cần Chứng nhận BIS cho kìm cắt bên kết hợp?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà sản xuất nước ngoài (với Đại diện Ấn Độ được ủy quyền)</li>
          <li>Thương nhân bán dưới thương hiệu riêng</li>
          <li>Người bán thương mại điện tử niêm yết kìm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc có Chứng nhận BIS cho kìm cắt bên kết hợp theo IS 3650:1981 là yêu cầu pháp lý và chất lượng quan trọng để bán các công cụ này tại Ấn Độ. Chứng nhận BIS cho kìm cắt bên kết hợp đảm bảo an toàn sản phẩm, hiệu suất nhất quán và tuân thủ quy định, trong khi Giấy phép BIS cho kìm cắt bên kết hợp tăng cường uy tín thương hiệu và sự chấp nhận thị trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với nhà sản xuất, nhà nhập khẩu và người bán, tuân thủ đúng hạn không chỉ tránh hình phạt mà còn mở cửa cho thị trường lớn hơn và tăng trưởng kinh doanh dài hạn. Với hướng dẫn chuyên gia, quy trình chứng nhận BIS trở nên trơn tru hơn, nhanh hơn và tuân thủ đầy đủ tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi thường gặp – Chứng nhận BIS cho kìm cắt bên kết hợp
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C1. Chứng nhận BIS có bắt buộc đối với kìm cắt bên kết hợp không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tuân thủ IS 3650:1981 là bắt buộc tại Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C2. Chứng nhận BIS viết đầy đủ là gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate (Chứng nhận Cục Tiêu chuẩn Ấn Độ).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C3. Quy trình chứng nhận BIS mất bao lâu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thường từ 30–60 ngày làm việc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C4. Chi phí chứng nhận BIS là bao nhiêu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Chi phí phụ thuộc vào phạm vi thử nghiệm và biến thể sản phẩm.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C5. Nhà nhập khẩu có thể đăng ký chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, với sự ủy quyền đúng từ nhà sản xuất.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C6. Dấu ISI có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, đánh dấu ISI là bắt buộc sau khi chứng nhận.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C7. Nhà sản xuất nước ngoài có thể có chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, thông qua Đại diện Ấn Độ được ủy quyền.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C8. Các thử nghiệm nào được yêu cầu theo IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Độ cứng, hiệu suất cắt, độ bền và thử nghiệm kích thước.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C9. Thanh tra nhà máy có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, BIS tiến hành kiểm toán nhà máy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C10. Nhiều kích cỡ có thể nằm trong một giấy phép không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tùy thuộc vào thử nghiệm và phê duyệt.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C11. Điều gì xảy ra nếu bán kìm không được chứng nhận?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có thể bị phạt, tịch thu và hành động pháp lý.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C12. Đăng ký BIS trực tuyến có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, đơn đăng ký chỉ nộp trực tuyến.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C13. Giấy phép BIS có cần gia hạn không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, giấy phép phải được gia hạn định kỳ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              C14. Tư vấn có thể giảm độ trễ phê duyệt không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tư vấn chuyên nghiệp giúp tránh lỗi và từ chối.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="Chứng nhận BIS cho kìm cắt bên kết hợp - IS 3650:1981 PDF"
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
              Dịch vụ của chúng tôi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Tư vấn chứng nhận hàng đầu Ấn Độ
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
              Dấu BIS (Giấy phép ISI) cho nhà sản xuất nước ngoài
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
              Chứng nhận đăng ký CDSCO
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
              Chứng nhận chứng chỉ EPR
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
              Chứng nhận đăng ký BIS
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
              Dấu ISI (BIS) cho nhà sản xuất Ấn Độ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
