import FaqAuthorVietnamese from "@/components/common/FaqAuthor/FaqAuthorVietnamese";
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

const BISCertificationChainPipeWrenchesVietnamese = () => {
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

export default BISCertificationChainPipeWrenchesVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho cờ lê ống xích | IS 4123:1982 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho cờ lê ống xích - Hướng dẫn IS 4123:1982";
  const twitterTitle = "Giấy phép BIS cho cờ lê ống xích | IS 4123:1982";
  const metaDescription =
    "Nhận chứng nhận BIS cho cờ lê ống xích theo IS 4123:1982. Quy trình, tài liệu, thử nghiệm, chi phí và thời gian cho chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về chứng nhận BIS cho cờ lê ống xích theo IS 4123:1982. Biết quy trình, chi phí, tài liệu, thử nghiệm và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký chứng nhận BIS cho cờ lê ống xích theo IS 4123:1982. Tìm hiểu quy trình BIS, tài liệu, thử nghiệm, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Chứng nhận BIS cờ lê ống xích, Giấy phép BIS cờ lê ống xích, IS 4123:1982, Chứng nhận BIS cờ lê ống xích";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/co-le-ong-xich-is-4123";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Trưởng phòng Điều hành tại Sun Certification India";

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
                    Chứng nhận BIS cho cờ lê ống xích – IS 4123:1982
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
          Chứng nhận BIS cờ lê ống xích – Hướng dẫn đầy đủ IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="Giấy phép BIS cho cờ lê ống xích"
            alt="Chứng nhận BIS cho cờ lê ống xích - IS 4123:1982 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cờ lê ống xích là công cụ cầm tay chuyên dụng hạng nặng dùng để
          kẹp, siết chặt và nới lỏng ống đường kính lớn, phụ kiện tròn và
          chi tiết hình trụ nơi cờ lê ống thông thường không hiệu quả. Các công cụ này
          được sử dụng rộng rãi trong đường ống dầu khí, nhà máy lọc dầu, nhà máy điện,
          đơn vị hóa dầu, xưởng đóng tàu, dự án cấp nước, xưởng kỹ thuật nặng
          và công trường xây dựng hạ tầng. Cơ chế kẹp dựa trên xích đã tôi cứng
          quấn quanh ống, cho phép phân bố tải đều và áp dụng mô-men xoắn cao.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vì cờ lê ống xích được dùng trong vận hành căng thẳng cao, quan trọng về an toàn,
          bất kỳ khiếm khuyết nào về chất lượng vật liệu, độ bền xích, thiết kế tay cầm
          hoặc cơ chế khóa có thể dẫn đến trượt, nhả đột ngột, hỏng dụng cụ,
          thương tích nghiêm trọng, hư hỏng thiết bị và ngừng hoạt động tốn kém.
          Để ngăn chặn rủi ro như vậy và chuẩn hóa chất lượng trên thị trường,
          Chính phủ Ấn Độ bắt buộc tuân thủ Tiêu chuẩn Ấn Độ cho các công cụ này.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Do đó, việc có Chứng nhận BIS cho cờ lê ống xích theo IS 4123:1982
          là yêu cầu pháp lý bắt buộc đối với nhà sản xuất và nhà nhập khẩu
          bán cờ lê ống xích tại Ấn Độ. Chứng nhận BIS hợp lệ cho cờ lê ống xích
          xác nhận sản phẩm đã được thử nghiệm và phê duyệt về độ bền, hiệu suất kẹp,
          độ chính xác kích thước và an toàn tổng thể theo Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống phù hợp sản phẩm và đảm bảo chất lượng
          do Cục Tiêu chuẩn Ấn Độ quản lý, cơ quan quốc gia chịu trách nhiệm
          tiêu chuẩn hóa, thử nghiệm và chứng nhận sản phẩm tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ý nghĩa Chứng nhận BIS là sự phê duyệt chính thức do BIS cấp
          xác nhận sản phẩm phù hợp với Tiêu chuẩn Ấn Độ (IS) có liên quan
          và được sản xuất theo hệ thống chất lượng có kiểm soát. Chứng nhận này
          cho phép nhà sản xuất sử dụng Dấu ISI trên sản phẩm được chứng nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận BIS tồn tại để:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ người dùng khỏi sản phẩm không an toàn và kém chất lượng</li>
          <li>Đảm bảo chất lượng nhất quán giữa các nhà sản xuất</li>
          <li>Hỗ trợ thực thi quy định kiểm soát chất lượng</li>
          <li>Thúc đẩy niềm tin vào hàng công nghiệp Ấn Độ và nhập khẩu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải thích Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dấu chứng nhận BIS, thường gọi là Dấu ISI, là biểu tượng trực quan
          của sự tuân thủ. Đối với cờ lê ống xích, Dấu ISI đảm bảo với người mua rằng:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Công cụ tuân thủ IS 4123:1982</li>
          <li>Xích và tay cầm chịu được tải trọng quy định</li>
          <li>Sản phẩm được phê duyệt hợp pháp để bán tại Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho cờ lê ống xích
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – Quy định cho cờ lê ống xích
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho cờ lê ống xích là IS 4123:1982,
          quy định yêu cầu về thiết kế, vật liệu, kích thước, hiệu suất
          và thử nghiệm cờ lê ống xích.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cờ lê ống xích các kích cỡ và công suất khác nhau</li>
          <li>Cấu tạo tay cầm và lắp ráp xích</li>
          <li>Vật liệu xích, kích thước mắt xích và độ bền</li>
          <li>Sai số kích thước và tay nghề chế tạo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          An toàn, Hiệu suất & Mục đích Thử nghiệm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982 được thiết kế để đảm bảo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xích tạo độ kẹp đồng đều và chắc chắn trên ống</li>
          <li>Cờ lê chịu mô-men xoắn cao mà không hỏng</li>
          <li>Tay cầm và khớp nối không biến dạng dưới tải</li>
          <li>Công cụ hoạt động an toàn trong ứng dụng công nghiệp nặng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai phải tuân thủ để có Giấy phép BIS cho cờ lê ống
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ cờ lê ống xích</li>
          <li>Nhà nhập khẩu và phân phối</li>
          <li>Nhà sản xuất nước ngoài cung cấp cho Ấn Độ</li>
          <li>Thương nhân và thương hiệu bán dưới nhãn riêng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS là bắt buộc cho cờ lê ống xích
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rủi ro an toàn người dùng và nơi làm việc
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cờ lê ống xích không đạt chuẩn có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xích trượt hoặc đứt</li>
          <li>Nhả đột ngột tải mô-men xoắn cao</li>
          <li>Thương tích nặng tay, cánh tay hoặc cơ thể</li>
          <li>Hư hỏng đường ống và phụ kiện</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ Chính phủ và Quy định
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Theo thông báo BIS và quy định kiểm soát chất lượng có hiệu lực,
          cờ lê ống xích thuộc IS 4123:1982 phải có chứng nhận BIS
          trước khi bán, nhập khẩu hoặc phân phối tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hệ quả pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bán cờ lê ống xích không được chứng nhận có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu hàng hóa</li>
          <li>Phạt tài chính nặng</li>
          <li>Đình chỉ hoạt động kinh doanh</li>
          <li>Kiện tụng theo Đạo luật BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thị trường và thương hiệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy phép BIS cho cờ lê ống xích giúp doanh nghiệp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Xây dựng niềm tin với người mua công nghiệp và nhà thầu EPC</li>
          <li>Đủ điều kiện tham gia đấu thầu chính phủ, PSU và hạ tầng</li>
          <li>Cạnh tranh với thương hiệu nội địa và quốc tế đã có</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho cờ lê ống xích
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Áp dụng & Xác định Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bước đầu tiên là xác nhận:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Danh mục sản phẩm: Cờ lê ống xích</li>
          <li>Tiêu chuẩn áp dụng: IS 4123:1982</li>
          <li>Dải kích cỡ và biến thể công suất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình Đăng ký BIS Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đăng ký trên cổng BIS</li>
          <li>Chọn IS 4123:1982 trong đơn BIS</li>
          <li>Tải lên tài liệu kỹ thuật và pháp lý theo yêu cầu</li>
          <li>Thanh toán phí chính phủ áp dụng</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình này thường gọi là đăng ký BIS trực tuyến hoặc đăng ký chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phí & Cơ cấu Chi phí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chi phí chứng nhận BIS thường bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký và xử lý</li>
          <li>Phí thử nghiệm mẫu</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí giấy phép và đánh dấu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng chi phí chứng nhận BIS phụ thuộc vào:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Số kích cỡ cờ lê</li>
          <li>Độ phức tạp thử nghiệm</li>
          <li>Địa điểm sản xuất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thử nghiệm Mẫu Sản phẩm (Theo IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mẫu được thử nghiệm tại phòng thí nghiệm được BIS công nhận về:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Độ bền kéo xích</li>
          <li>Khả năng chịu tải và mô-men xoắn</li>
          <li>Độ chính xác kích thước</li>
          <li>Độ bền tay cầm và tay nghề chế tạo</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thanh tra & Kiểm toán Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS tiến hành kiểm toán tại chỗ để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình sản xuất và lắp ráp</li>
          <li>Kiểm soát sản xuất hoặc nguồn cung xích</li>
          <li>Hệ thống kiểm soát chất lượng</li>
          <li>Cơ sở thử nghiệm và kiểm tra nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấp Giấy phép BIS & Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi thử nghiệm và thanh tra thành công:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS cấp Giấy phép Cục Tiêu chuẩn Ấn Độ</li>
          <li>
            Nhà sản xuất được ủy quyền gắn Dấu ISI lên cờ lê ống xích
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ Sau Chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nghĩa vụ sau chứng nhận bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm toán giám sát định kỳ</li>
          <li>Thử nghiệm mẫu thị trường</li>
          <li>Gia hạn giấy phép đúng hạn</li>
          <li>Tuân thủ liên tục IS 4123:1982</li>
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
          <li>Đăng ký nhà máy hoặc chứng nhận MSME</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc và thiết bị thử nghiệm</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận thành lập công ty</li>
          <li>Đăng ký GST</li>
          <li>Ủy quyền nhãn hiệu (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bản vẽ và thông số kỹ thuật sản phẩm</li>
          <li>Vật liệu xích và chi tiết xử lý nhiệt</li>
          <li>Kế hoạch kiểm soát chất lượng và kiểm tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đơn BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đăng ký BIS</li>
          <li>Chi tiết yêu cầu thử nghiệm</li>
          <li>Tuyên bố và cam kết</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các tài liệu này gọi chung là TÀI LIỆU CHỨNG NHẬN BIS hoặc TÀI LIỆU CHỨNG NHẬN BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Thử nghiệm theo IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các thử nghiệm bắt buộc bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thử nghiệm độ bền kéo xích</li>
          <li>Thử nghiệm tải và mô-men xoắn</li>
          <li>Xác minh kích thước</li>
          <li>Kiểm tra vật liệu và tay nghề chế tạo</li>
          <li>Thử nghiệm hiệu suất kẹp chức năng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mọi thử nghiệm phải được thực hiện chỉ tại phòng thí nghiệm được BIS công nhận.
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
          <li>Không đạt thử nghiệm độ bền xích</li>
          <li>Xử lý nhiệt mắt xích không đúng</li>
          <li>Không phù hợp kích thước</li>
          <li>Tài liệu không đầy đủ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải pháp & Thực hành Tốt nhất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thực hiện thử nghiệm trước nội bộ</li>
          <li>Sử dụng nguyên liệu đã chứng nhận</li>
          <li>Duy trì kiểm soát quy trình chặt chẽ</li>
          <li>Thuê tư vấn BIS có kinh nghiệm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích Chứng nhận BIS cho Nhà sản xuất & Nhà nhập khẩu
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ đầy đủ quy định Ấn Độ</li>
          <li>Bảo vệ khỏi phạt và biện pháp thực thi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Thương mại
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Được người mua công nghiệp chấp nhận cao hơn</li>
          <li>Đủ điều kiện tham gia dự án PSU và hạ tầng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích Thương hiệu
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dấu ISI nâng cao uy tín và niềm tin</li>
          <li>Khác biệt với nhà cung cấp không tổ chức</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mở rộng Thị trường
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dễ tiếp cận thị trường công nghiệp lớn</li>
          <li>Tăng uy tín xuất khẩu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt khi Không Tuân thủ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phạt tiền nặng</li>
          <li>Tịch thu sản phẩm</li>
          <li>Thu hồi giấy phép</li>
          <li>Truy tố pháp lý theo Đạo luật BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Cờ lê ống xích?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà sản xuất nước ngoài (có Đại diện Ấn Độ được ủy quyền)</li>
          <li>Thương nhân và nhà cung cấp công nghiệp</li>
          <li>Người bán thương mại điện tử niêm yết cờ lê ống xích</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi cho Tư vấn Chứng nhận BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp dịch vụ tư vấn chứng nhận BIS trọn gói, bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phân tích áp dụng sản phẩm và khoảng trống</li>
          <li>Chuẩn bị và xác minh tài liệu</li>
          <li>Phối hợp với phòng thí nghiệm được BIS công nhận</li>
          <li>Hỗ trợ thanh tra và kiểm toán nhà máy</li>
          <li>Phê duyệt nhanh hơn với ít truy vấn</li>
          <li>Hỗ trợ tuân thủ và gia hạn sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chuyên môn của chúng tôi về công cụ cầm tay công nghiệp và thiết bị hạng nặng
          đảm bảo hành trình chứng nhận BIS trơn tru, đáng tin cậy và tuân thủ đầy đủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc có Chứng nhận BIS cho cờ lê ống xích theo IS 4123:1982
          là yêu cầu pháp lý và chất lượng quan trọng để bán các công cụ hạng nặng này
          tại Ấn Độ. Chứng nhận BIS cho cờ lê ống xích đảm bảo an toàn, độ bền và độ tin cậy,
          trong khi Giấy phép BIS cho cờ lê ống xích tăng cường uy tín thương hiệu và
          sự chấp nhận thị trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với nhà sản xuất, nhà nhập khẩu và người bán, tuân thủ đúng hạn không chỉ
          tránh hình phạt mà còn mở ra cơ hội tham gia các dự án công nghiệp, hạ tầng
          và chính phủ giá trị cao. Với hướng dẫn chuyên gia và hỗ trợ tuân thủ có cấu trúc,
          quy trình chứng nhận BIS trở nên hiệu quả, dự đoán được và hoàn toàn phù hợp với Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi thường gặp – Chứng nhận BIS cho Cờ lê ống xích
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Chứng nhận BIS có bắt buộc cho cờ lê ống xích không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tuân thủ IS 4123:1982 là bắt buộc tại Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Chứng nhận BIS viết đầy đủ là gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate (Chứng nhận Cục Tiêu chuẩn Ấn Độ).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Quy trình chứng nhận BIS mất bao lâu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thường 45–60 ngày làm việc cho nhà sản xuất Ấn Độ và 90-120 ngày cho nhà sản xuất nước ngoài.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Chi phí chứng nhận BIS là bao nhiêu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Phụ thuộc vào dải kích cỡ sản phẩm và phạm vi thử nghiệm.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Nhà nhập khẩu có thể đăng ký chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, với ủy quyền đúng từ nhà sản xuất.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Dấu ISI có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, đánh dấu ISI là bắt buộc sau khi chứng nhận.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Nhà sản xuất nước ngoài có thể có chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, thông qua Đại diện Ấn Độ được ủy quyền.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Các thử nghiệm nào bắt buộc theo IS 4123:1982?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thử nghiệm độ bền xích, tải, kích thước và tay nghề chế tạo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Thanh tra nhà máy có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, BIS tiến hành kiểm toán tại chỗ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Nhiều kích cỡ có thể nằm trong một giấy phép không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tùy theo thử nghiệm và phê duyệt.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Điều gì xảy ra nếu bán cờ lê ống xích không được chứng nhận?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có thể bị phạt, tịch thu và kiện tụng.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Đăng ký BIS trực tuyến có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tất cả đơn đăng ký đều nộp trực tuyến.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Giấy phép BIS có cần gia hạn không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, gia hạn định kỳ là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Tư vấn có thể giảm chậm trễ phê duyệt không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tư vấn chuyên nghiệp giúp tránh sai sót.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Chứng nhận BIS có tăng niềm tin người mua không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nó cải thiện đáng kể niềm tin thị trường.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="Chứng nhận BIS cho cờ lê ống xích - IS 4123:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

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
              Dấu ISI (BIS) cho Nhà sản xuất Ấn Độ
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
