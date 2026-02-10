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

const BISCertificationFibreRopesVietnamese = () => {
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

export default BISCertificationFibreRopesVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS cho dây thừng sợi polyetylen | IS 8674:2013 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho dây thừng sợi polyetylen - Hướng dẫn IS 8674:2013";
  const twitterTitle =
    "Giấy phép BIS cho dây thừng sợi polyetylen | IS 8674:2013";
  const metaDescription =
    "Nhận chứng nhận BIS cho dây thừng sợi polyetylen theo IS 8674:2013. Quy trình, tài liệu, thử nghiệm, chi phí và thời gian cho chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về chứng nhận BIS cho dây thừng sợi polyetylen theo IS 8674:2013. Biết quy trình, chi phí, tài liệu, thử nghiệm và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký chứng nhận BIS cho dây thừng sợi polyetylen theo IS 8674:2013. Tìm hiểu quy trình BIS, tài liệu, thử nghiệm, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Chứng nhận BIS dây thừng sợi polyetylen, Giấy phép BIS dây thừng sợi polyetylen, IS 8674:2013, Chứng nhận BIS dây thừng sợi polyetylen";
  const websiteUrl =
    "https://bis-certifications.com/vi/blogs/isi-products/day-thung-soi-polyethylene-8674";
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
                    Chứng nhận BIS dây thừng sợi polyetylen – IS 8674:2013
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
          Chứng nhận BIS dây thừng sợi polyetylen – Hướng dẫn đầy đủ IS 8674:2013
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="Giấy phép BIS dây thừng sợi polyetylen"
            alt="Chứng nhận BIS dây thừng sợi polyetylen - IS 8674:2013 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dây thừng sợi polyetylen được sử dụng rộng rãi tại Ấn Độ trong hoạt động
          hàng hải, đánh bắt cá, cảng, nông nghiệp, xây dựng, hậu cần, vận tải và
          hoạt động công nghiệp nói chung. Đặc tính nhẹ, tỷ lệ độ bền/trọng lượng
          cao, chống ẩm, hóa chất và mài mòn khiến chúng lý tưởng cho môi trường
          khắc nghiệt. Tuy nhiên, khi dây thừng sợi đứt dưới tải do chất lượng kém
          hoặc sản xuất dưới chuẩn, hậu quả có thể nghiêm trọng—từ hư hỏng thiết bị
          đến thương tích nặng và thậm chí tử vong.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để đảm bảo an toàn, chất lượng đồng nhất và độ tin cậy hiệu suất, Chính phủ
          Ấn Độ đã quy định Chứng nhận BIS cho dây thừng sợi polyetylen là bắt buộc
          theo IS 8674:2013. Mọi nhà sản xuất hoặc nhà nhập khẩu cung cấp dây thừng
          sợi polyetylen trên thị trường Ấn Độ phải có Chứng nhận BIS hợp lệ cho dây
          thừng sợi polyetylen. Không có chứng nhận này, sản phẩm bị coi là không tuân
          thủ và có thể bị phạt, tịch thu hoặc cấm bán.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang sản phẩm chi tiết này dành cho nhà sản xuất, nhà nhập khẩu, xuất
          khẩu, thương nhân, nhà phân phối, nhà cung cấp hàng hải, nhà thầu hạ tầng
          và người bán thương mại điện tử. Trang giải thích toàn bộ khuôn khổ Chứng
          nhận BIS cho dây thừng sợi polyetylen, gồm yêu cầu tiêu chuẩn, quy trình
          thử nghiệm, tài liệu, chi phí, thời gian và trách nhiệm tuân thủ. Nếu bạn
          dự định xin Giấy phép BIS cho dây thừng sợi polyetylen, hướng dẫn này sẽ
          giúp bạn thực hiện quy trình rõ ràng và tự tin.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống đánh giá sự phù hợp sản phẩm do Cục Tiêu chuẩn
          Ấn Độ (BIS), cơ quan tiêu chuẩn quốc gia Ấn Độ, quản lý. BIS là viết tắt
          của Bureau of Indian Standards, được thành lập theo Đạo luật BIS năm 2016.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ý nghĩa Chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ý nghĩa Chứng nhận BIS là sự công nhận chính thức rằng sản phẩm phù hợp
          với Tiêu chuẩn Ấn Độ (IS) cụ thể và đáp ứng các yêu cầu về an toàn, độ
          bền, độ bền và hiệu suất. Sản phẩm được chứng nhận BIS phải trải qua thử
          nghiệm tại phòng thí nghiệm được BIS công nhận và đánh giá qua thanh tra
          nhà máy và kiểm toán chất lượng.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dấu ISI và Dấu Chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sản phẩm được chứng nhận theo BIS mang dấu chứng nhận BIS, thường gọi là
          Dấu ISI, kèm số giấy phép duy nhất. Dấu BIS đảm bảo cho người mua, thanh
          tra và cơ quan quản lý rằng sản phẩm tuân thủ Tiêu chuẩn BIS áp dụng.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao có BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS tồn tại để:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ người dùng khỏi sản phẩm không an toàn và kém chất lượng</li>
          <li>Đảm bảo tính nhất quán và độ tin cậy trong sản xuất</li>
          <li>Thực thi quy định chính phủ qua thông báo BIS</li>
          <li>Thúc đẩy niềm tin, chất lượng và thương mại công bằng tại thị trường Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho dây thừng sợi polyetylen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – Giải thích Tiêu chuẩn Ấn Độ
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho sản phẩm này là IS 8674:2013, có tên
          &quot;Fibre Ropes — Polyethylene — Specification&quot;. Tiêu chuẩn này
          quy định yêu cầu cho dây thừng sợi polyetylen dùng cho mục đích chung và
          ứng dụng công nghiệp.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cấu trúc và phân loại dây thừng sợi polyetylen</li>
          <li>Yêu cầu nguyên liệu thô và đặc tính sợi</li>
          <li>Đường kính dây, khối lượng riêng tuyến tính và dung sai</li>
          <li>Tải trọng đứt tối thiểu và yêu cầu độ bền</li>
          <li>Quy định đánh dấu, dán nhãn và đóng gói</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          An toàn, hiệu suất và mục đích thử nghiệm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013 nhằm đảm bảo dây thừng sợi polyetylen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Có độ bền kéo đồng đều</li>
          <li>Hoạt động tin cậy dưới tải tĩnh và động</li>
          <li>Chống ẩm, mục và tiếp xúc hóa chất</li>
          <li>An toàn cho nâng, kéo, neo và buộc</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai phải tuân thủ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tuân thủ IS 8674:2013 là bắt buộc đối với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ dây thừng sợi polyetylen</li>
          <li>Nhà nhập khẩu đưa dây thừng polyetylen vào Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài bán qua pháp nhân Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS bắt buộc cho dây thừng sợi polyetylen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Rủi ro an toàn người tiêu dùng và công nhân
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dây thừng sợi polyetylen thường dùng trong hoạt động chịu tải và quan trọng
          về an toàn. Dây kém chất lượng có thể đứt đột ngột, dẫn đến tai nạn, thương
          tích, hư hỏng thiết bị và tổn thất tài chính.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Tuân thủ chính phủ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Theo thông báo BIS và quy định kiểm soát chất lượng, dây thừng sợi thuộc
          IS 8674:2013 phải được chứng nhận BIS trước khi bán, cung cấp hoặc phân
          phối tại Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Hệ quả pháp lý
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bán dây thừng sợi polyetylen không có chứng nhận BIS có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu hàng hóa</li>
          <li>Phạt tiền</li>
          <li>Hủy hợp đồng và đấu thầu</li>
          <li>Truy tố theo Đạo luật BIS 2016</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Lợi ích thị trường và thương hiệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho dây thừng sợi polyetylen giúp tăng sự chấp nhận thị
          trường, xây dựng niềm tin người mua và tham gia dự án chính phủ, doanh
          nghiệp nhà nước, hàng hải và hạ tầng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho dây thừng sợi polyetylen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Áp dụng và xác định tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước đầu tiên là xác nhận sản phẩm thuộc IS 8674:2013, gồm cấu trúc dây,
          dải đường kính và ứng dụng dự kiến.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quy trình nộp đơn BIS trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải nộp đơn BIS qua cổng nộp đơn trực tuyến BIS. Đơn gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết sản phẩm và model</li>
          <li>Thông tin đơn vị sản xuất</li>
          <li>Tiêu chuẩn BIS áp dụng</li>
          <li>Chi tiết kiểm soát chất lượng và thử nghiệm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Điều này khởi tạo quy trình đăng ký chứng nhận BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phí và cơ cấu chi phí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chi phí chứng nhận BIS thường gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí nộp đơn</li>
          <li>Phí thử nghiệm sản phẩm</li>
          <li>Phí thanh tra nhà máy</li>
          <li>Phí giấy phép</li>
          <li>Phí đánh dấu hàng năm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tổng chi phí chứng nhận BIS phụ thuộc vào biến thể dây, dải đường kính và
          phạm vi thử nghiệm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thử nghiệm mẫu sản phẩm (Thử nghiệm chi tiết theo tiêu chuẩn)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẫu dây thừng sợi polyetylen được thử nghiệm tại phòng thí nghiệm được BIS
          công nhận đúng theo IS 8674:2013.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thanh tra và kiểm toán nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS tiến hành kiểm toán nhà máy để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quy trình và kiểm soát sản xuất</li>
          <li>Quy trình kiểm tra nguyên liệu thô</li>
          <li>Kiểm tra chất lượng trong quá trình</li>
          <li>Cơ sở thử nghiệm và hiệu chuẩn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cấp Giấy phép BIS và Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi thử nghiệm và thanh tra thành công, BIS cấp Giấy phép Bureau of
          Indian Standards, cho phép sử dụng Dấu ISI trên dây thừng sợi polyetylen
          được chứng nhận.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tuân thủ sau chứng nhận
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau chứng nhận, chủ sở hữu giấy phép phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duy trì chất lượng đồng đều</li>
          <li>Tiến hành thử nghiệm định kỳ</li>
          <li>Cho phép thanh tra giám sát</li>
          <li>Gia hạn giấy phép BIS định kỳ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi Giấy phép BIS theo IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy phép BIS áp dụng cho dây thừng sợi polyetylen dùng cho:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hoạt động hàng hải và đánh bắt cá</li>
          <li>Cảng, vận tải biển và hậu cần</li>
          <li>Nông nghiệp và sử dụng đa năng</li>
          <li>Ứng dụng công nghiệp và thương mại</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Phạm vi chỉ giới hạn cho dây thừng phù hợp quy cách IS 8674:2013.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu cần thiết cho Chứng nhận BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc và thiết bị thử nghiệm</li>
          <li>Kế hoạch kiểm soát chất lượng</li>
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
          <li>Thông số kỹ thuật và bản vẽ sản phẩm</li>
          <li>Cấu trúc dây và chi tiết vật liệu</li>
          <li>Dữ liệu đường kính và tải trọng đứt</li>
          <li>Quy trình thử nghiệm nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu đơn BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đơn đăng ký BIS</li>
          <li>Báo cáo thử nghiệm từ phòng lab được BIS công nhận</li>
          <li>Cam kết và tuyên bố</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đây là bộ tài liệu chứng nhận BIS đầy đủ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu thử nghiệm theo IS 8674:2013
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Thử nghiệm bắt buộc gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đo đường kính và khối lượng riêng tuyến tính</li>
          <li>Thử tải trọng đứt và độ bền kéo</li>
          <li>Thử độ giãn dài</li>
          <li>Kiểm tra cấu trúc và cách bện</li>
          <li>Kiểm tra trực quan và chất lượng hoàn thiện</li>
          <li>Tuân thủ đánh dấu và dán nhãn</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mọi thử nghiệm phải được thực hiện tại phòng thí nghiệm được BIS công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức thường gặp và cách tránh
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chất lượng nguyên liệu thô không đồng đều
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giải pháp: Sử dụng sợi polyetylen cấp kiểm soát và nhà cung cấp được phê duyệt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Thử nghiệm không đạt
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giải pháp: Thực hiện thử nghiệm trước nội bộ và cải thiện tính nhất quán quy trình.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sai sót tài liệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giải pháp: Chuẩn bị tài liệu chính xác và đầy đủ trước khi nộp BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích Chứng nhận BIS cho nhà sản xuất và nhà nhập khẩu
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tuân thủ quy định Ấn Độ</li>
          <li>Giảm rủi ro phạt và tịch thu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thương mại
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đủ điều kiện hợp đồng chính phủ, doanh nghiệp nhà nước và hàng hải</li>
          <li>Được người mua công nghiệp chấp nhận tốt hơn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lợi ích thương hiệu
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Niềm tin qua dấu chứng nhận BIS</li>
          <li>Tăng uy tín thương hiệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mở rộng thị trường
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tiếp cận thị trường nội địa và xuất khẩu có quy định</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt khi không tuân thủ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ yêu cầu BIS có thể dẫn đến:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Phạt tiền nặng</li>
          <li>Tịch thu sản phẩm không tuân thủ</li>
          <li>Hạn chế nhập khẩu và bán</li>
          <li>Truy tố pháp lý</li>
          <li>Cấm thị trường vĩnh viễn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai cần Chứng nhận BIS cho dây thừng sợi polyetylen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà sản xuất nước ngoài</li>
          <li>Thương nhân và nhà phân phối</li>
          <li>Người bán thương mại điện tử</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mọi tổ chức đưa dây thừng sợi polyetylen ra thị trường Ấn Độ phải đảm bảo tuân thủ BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Có được Chứng nhận BIS cho dây thừng sợi polyetylen theo IS 8674:2013 là
          yêu cầu pháp lý và lợi thế chiến lược cho doanh nghiệp hoạt động tại Ấn Độ.
          Chứng nhận BIS cho dây thừng sợi polyetylen đảm bảo an toàn, độ bền và độ tin
          cậy sản phẩm, đồng thời bảo vệ người dùng và tăng uy tín thương hiệu.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất và nhà nhập khẩu có Giấy phép BIS hợp lệ cho dây thừng sợi
          polyetylen có thể tự tin tiếp cận thị trường có quy định, tham gia hợp đồng
          giá trị cao và tránh rủi ro pháp lý. Với chuẩn bị đúng, tài liệu chính xác
          và tư vấn chuyên gia, quy trình chứng nhận BIS sẽ trơn tru, hiệu quả và rất
          có lợi cho tăng trưởng dài hạn.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi thường gặp – Chứng nhận BIS cho dây thừng sợi polyetylen
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Chứng nhận BIS có bắt buộc cho dây thừng sợi polyetylen tại Ấn Độ không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, chứng nhận BIS theo IS 8674:2013 là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. BIS viết tắt của gì?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards (Cục Tiêu chuẩn Ấn Độ).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Có thể bán dây thừng polyetylen mà không có chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Không, bán dây không chứng nhận là bất hợp pháp tại Ấn Độ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Chi phí chứng nhận BIS là bao nhiêu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Phụ thuộc vào biến thể sản phẩm và phạm vi thử nghiệm.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Quy trình chứng nhận BIS mất bao lâu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Thường 6–10 tuần.
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
              Q7. Nhiều đường kính dây có thể nằm trong một giấy phép không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, tùy theo tuân thủ và phạm vi thử nghiệm.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Thanh tra nhà máy có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, BIS tiến hành kiểm toán nhà máy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Startup có thể đăng ký chứng nhận BIS không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nếu cơ sở sản xuất tuân thủ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Chứng nhận BIS có cần gia hạn không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, gia hạn định kỳ là bắt buộc.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Nếu thử nghiệm sản phẩm không đạt thì sao?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Cần hành động khắc phục và thử nghiệm lại.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Phòng lab được BIS công nhận có bắt buộc không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, chỉ chấp nhận phòng lab được BIS phê duyệt.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Nhà sản xuất nước ngoài có thể nộp đơn trực tiếp không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, thông qua Đại diện Ấn Độ được ủy quyền.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Dây thừng đánh cá có thuộc tiêu chuẩn này không?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Có, nếu phù hợp IS 8674:2013.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Chứng nhận BIS có ý nghĩa gì với người mua?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Đảm bảo an toàn, độ bền và chất lượng đồng đều.
            </p>
          </div>
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
              Quản lý chất thải nhựa
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
