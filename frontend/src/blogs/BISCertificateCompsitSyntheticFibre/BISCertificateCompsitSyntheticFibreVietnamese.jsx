import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
import LanguageSelectorCompsitSyntheticFibre from "./LanguageSelectorCompsitSyntheticFibre";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreVietnamese = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelectorCompsitSyntheticFibre />
      <Services />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default BISCertificateCompsitSyntheticFibreVietnamese;

const MetaTags = () => {
  const title =
    "Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp | IS 14928:2001 Giấy phép BIS";
  const ogTitle =
    "Chứng nhận BIS cho Dây Sợi Tổng Hợp Phối Hợp – Hướng dẫn IS 14928:2001";
  const twitterTitle =
    "Giấy phép BIS cho Dây Sợi Tổng Hợp Phối Hợp | IS 14928:2001";
  const metaDescription =
    "Nhận Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp theo IS 14928:2001. Quy trình, tài liệu, kiểm tra, chi phí & thời hạn cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn hoàn chỉnh cho Chứng nhận BIS cho Dây Sợi Tổng Hợp Phối Hợp theo IS 14928:2001. Biết quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Ứng tuyển Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp theo IS 14928:2001. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời hạn tại Ấn Độ.";
  const metaKeywords =
    "Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp, Giấy phép BIS cho Dây Sợi Tổng Hợp Phối Hợp, IS 14928:2001, Chứng nhận BIS cho Dây Sợi Tổng Hợp Phối Hợp";
  const websiteUrl =
    "https://bis-certifications.com/vi/blogs/isi-products/day-soi-tong-hop-phoi-hop-is-14928";
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
      {/* Hreflang: default English, alternate language versions */}
      <link rel="alternate" hrefLang="x-default" href="https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="en" href="https://bis-certifications.com/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="de" href="https://bis-certifications.com/blogs/isi-products/verbund-synthetikfaserseile-is-14928" />
      <link rel="alternate" hrefLang="es" href="https://bis-certifications.com/blogs/isi-products/cuerdas-de-fibra-sintetica-compuesta-is-14928" />
      <link rel="alternate" hrefLang="fr" href="https://bis-certifications.com/blogs/isi-products/cordes-en-fibres-synthetiques-composites-is-14928" />
      <link rel="alternate" hrefLang="id" href="https://bis-certifications.com/blogs/isi-products/tali-serat-sintetik-komposit-is-14928" />
      <link rel="alternate" hrefLang="it" href="https://bis-certifications.com/blogs/isi-products/corde-in-fibra-sintetica-composita-is-14928" />
      <link rel="alternate" hrefLang="ja" href="https://bis-certifications.com/blogs/isi-products/fukugo-gosei-sen-i-ro-pu-is-14928" />
      <link rel="alternate" hrefLang="ko" href="https://bis-certifications.com/blogs/isi-products/bokhap-hapseong-seomyu-ropeu-is-14928" />
      <link rel="alternate" hrefLang="nl" href="https://bis-certifications.com/blogs/isi-products/samengestelde-synthetische-vezeltouwen-is-14928" />
      <link rel="alternate" hrefLang="th" href="https://bis-certifications.com/th/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928" />
      <link rel="alternate" hrefLang="vi" href="https://bis-certifications.com/vi/blogs/isi-products/day-soi-tong-hop-phoi-hop-is-14928" />
      <link rel="alternate" hrefLang="ar" href="https://bis-certifications.com/blogs/isi-products/hibal-alyaf-sinaiya-murakkaba-is-14928" />
      <link rel="alternate" hrefLang="zh" href="https://bis-certifications.com/blogs/isi-products/fuhe-hecheng-xianwei-sheng-is-14928" />
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
                    Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp – IS
                    14928:2001
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
          Chứng nhận BIS Dây Sợi Tổng Hợp Phối Hợp – Hướng dẫn Hoàn chỉnh
          cho IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="Giấy phép BIS cho Dây Sợi Tổng Hợp Phối Hợp"
            alt="Chứng chỉ BIS cho Dây Sợi Tổng Hợp Phối Hợp - IS 14928:2001 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dây sợi tổng hợp phối hợp được sử dụng rộng rãi trong các hoạt động
          hàng hải, cảng và bến cảng, các công trình ngoài khơi, đánh cá,
          vận tải, xây dựng, nông nghiệp và xử lý vật liệu nặng.
          Các loại dây này được thiết kế bằng cách kết hợp hai hoặc nhiều sợi tổng hợp—
          như polyester, polypropylene, nylon hoặc các sợi nhân tạo khác—
          để cung cấp sự cân bằng giữa sức mạnh, độ linh hoạt, khả năng chống mài mòn,
          độ nổi và độ bền. Vì dây sợi tổng hợp phối hợp thường được sử dụng trong các ứng dụng
          chịu tải, kéo, neo, nâng và an toàn quan trọng, ngay cả một khuyết tật chất lượng nhỏ
          cũng có thể dẫn đến tai nạn nghiêm trọng, hư hỏng thiết bị hoặc sự cố vận hành.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để kiểm soát những rủi ro này và đảm bảo chất lượng đồng nhất, Chính phủ
          Ấn Độ yêu cầu Chứng nhận BIS cho Dây Sợi Tổng Hợp Phối Hợp
          theo Tiêu chuẩn Ấn Độ áp dụng IS 14928:2001. Chứng chỉ BIS hợp lệ
          cho Dây Sợi Tổng Hợp Phối Hợp là yêu cầu pháp lý
          đối với nhà sản xuất và nhà nhập khẩu trước khi các sản phẩm như vậy có thể
          được sản xuất, bán, phân phối hoặc nhập khẩu vào thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trang này đóng vai trò là hướng dẫn tập trung vào tuân thủ, giải thích
          Chứng nhận BIS cho Dây Sợi Tổng Hợp Phối Hợp, bao gồm
          phạm vi của IS 14928:2001, ý định an toàn, yêu cầu kiểm tra,
          tài liệu, cân nhắc chi phí và quy trình chứng nhận từng bước.
          Nó được thiết kế cho nhà sản xuất, nhà nhập khẩu, nhà sản xuất nước ngoài,
          thương nhân và người bán thương mại điện tử muốn hiểu rõ
          cách có được Giấy phép BIS / Giấy phép BIS cho
          Dây Sợi Tổng Hợp Phối Hợp tại Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là hệ thống đánh giá sự phù hợp của sản phẩm được vận hành
          bởi Cục Tiêu chuẩn Ấn Độ (BIS), hoạt động theo Đạo luật BIS, 2016. BIS chịu trách nhiệm phát triển các Tiêu chuẩn Ấn Độ,
          chứng nhận sản phẩm và đảm bảo hàng hóa bán tại Ấn Độ đáp ứng
          các tiêu chuẩn an toàn, chất lượng và hiệu suất đã xác định.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Chứng chỉ BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ý nghĩa Chứng chỉ BIS đề cập đến sự chấp thuận chính thức được BIS cấp
          xác nhận rằng sản phẩm phù hợp với Tiêu chuẩn Ấn Độ liên quan.
          Khi được chứng nhận, nhà sản xuất được phép sử dụng Dấu hiệu Chứng nhận BIS,
          thường được gọi là Dấu ISI, trên sản phẩm và bao bì.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giải thích Dấu ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dấu ISI chỉ ra rằng:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sản phẩm đã được kiểm tra tại phòng thí nghiệm được BIS công nhận</li>
          <li>Cơ sở sản xuất đã được đánh giá bởi các quan chức BIS</li>
          <li>
            Các cơ chế kiểm soát chất lượng và giám sát liên tục đang được áp dụng
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tại sao BIS tồn tại
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS tồn tại để:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bảo vệ an toàn người tiêu dùng và người lao động</li>
          <li>Ngăn chặn lưu hành sản phẩm không đạt chuẩn</li>
          <li>Đảm bảo tính đồng nhất và độ tin cậy của hàng hóa công nghiệp</li>
          <li>Tăng cường thực thi quy định và thương mại công bằng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với dây sợi tổng hợp phối hợp—thường được sử dụng trong các điều kiện
          nguy hiểm và chịu tải cao—chứng nhận BIS đóng vai trò quan trọng trong
          việc phòng ngừa tai nạn và đảm bảo chất lượng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS áp dụng cho Dây Sợi Tổng Hợp Phối Hợp
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn Ấn Độ áp dụng cho sản phẩm này là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Dây Sợi Tổng Hợp Phối Hợp
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn này quy định các yêu cầu về vật liệu, kết cấu,
          kích thước, đặc tính hiệu suất, đánh dấu, lấy mẫu và
          kiểm tra dây sợi tổng hợp phối hợp.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Phạm vi của IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Dây được sản xuất sử dụng kết hợp các sợi tổng hợp khác nhau
          </li>
          <li>
            Các kết cấu dây khác nhau như cấu trúc bện và xoắn
          </li>
          <li>
            Dây dự định cho ứng dụng hàng hải, đánh cá, công nghiệp và mục đích chung
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý định An toàn, Hiệu suất & Kiểm tra
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn nhằm đảm bảo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sức mạnh đứt gãy và khả năng chịu tải đầy đủ</li>
          <li>Đường kính và chất lượng kết cấu đồng nhất</li>
          <li>
            Khả năng chống mài mòn, độ ẩm và suy thoái môi trường
          </li>
          <li>Hiệu suất có thể dự đoán và an toàn trong suốt thời gian sử dụng</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ai Phải Tuân Thủ
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Việc tuân thủ IS 14928:2001 là bắt buộc đối với:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ của dây sợi tổng hợp phối hợp</li>
          <li>Nhà nhập khẩu cung cấp các dây này tại thị trường Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài bán qua đại diện Ấn Độ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Composite Synthetic Fibre Ropes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Consumer and Worker Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Composite synthetic fibre ropes are used in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mooring and towing operations</li>
          <li>Lifting and securing heavy loads</li>
          <li>Fishing nets and marine equipment</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          A rope failure can cause injury, loss of life, vessel damage, and
          project delays.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per BIS notifications and quality control requirements, products
          covered under IS 14928:2001 cannot be legally sold without BIS
          certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance may lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of non-certified products</li>
          <li>Financial penalties under the BIS Act</li>
          <li>Prosecution and legal action</li>
          <li>Import clearance rejection</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Market and Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS License for Composite Synthetic Fibre Ropes improves:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Customer confidence</li>
          <li>Eligibility for government and PSU tenders</li>
          <li>Brand credibility in domestic and export markets</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Composite Synthetic Fibre
          Ropes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The process begins with confirming that the product falls under IS
          14928:2001. This involves identifying:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fibre composition and blend</li>
          <li>Rope construction type</li>
          <li>Diameter range and intended application</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Accurate identification avoids testing errors and application
          rejection.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must BIS apply online through the BIS portal by
          submitting:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product details</li>
          <li>Factory and manufacturing information</li>
          <li>Quality control arrangements</li>
          <li>Test request details</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          A correctly filled BIS Application is critical for timely processing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certificate cost includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Testing charges at BIS-recognized labs</li>
          <li>Factory inspection fees</li>
          <li>Annual license and marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The overall BIS certification cost varies depending on rope
          construction, size range, and testing complexity. Proper planning
          helps manage the cost of BIS certification and BIS license cost
          effectively.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing (as per IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Product samples are drawn and tested at BIS-recognized laboratories to
          verify compliance with all requirements of the standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials conduct a factory audit to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process control</li>
          <li>Raw material handling</li>
          <li>In-house testing facilities</li>
          <li>Quality assurance systems and records</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants the Bureau of Indian
          Standards License, allowing the manufacturer to use the ISI Mark on
          composite synthetic fibre ropes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After certification, the licensee must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain consistent product quality</li>
          <li>Allow periodic surveillance audits</li>
          <li>Inform BIS of any change in material, process, or design</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery and testing equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Authorization letter for signatory</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications and drawings</li>
          <li>Raw material specifications</li>
          <li>In-house test procedures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duly filled BIS application form</li>
          <li>Test request letter</li>
          <li>Marking and labeling details</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form the mandatory BIS CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory tests include:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requirement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Construction
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Structure
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Treatment
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rope
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diameter
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mass
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Breaking Strength
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Length
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          All tests must be conducted only in BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Incorrect Product Classification</strong>
            <br />
            Solution: Conduct a pre-certification technical assessment.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Test Failures</strong>
            <br />
            Solution: Align raw material quality and process controls with IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Incomplete Documentation</strong>
            <br />
            Solution: Prepare BIS-specific documents carefully and verify before
            submission.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Audit Non-Compliance</strong>
            <br />
            Solution: Maintain proper records, calibration, and internal quality
            checks.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian regulations</li>
          <li>Smooth customs clearance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eligibility for government and institutional tenders</li>
          <li>Improved buyer acceptance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Authorized use of BIS Mark</li>
          <li>Enhanced trust and market credibility</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into regulated sectors</li>
          <li>Long-term business growth</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to obtain BIS certification can result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary penalties</li>
          <li>Product seizure or recall</li>
          <li>Import bans</li>
          <li>Legal prosecution</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Composite Synthetic Fibre Ropes?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers supplying to India</li>
          <li>Traders and distributors</li>
          <li>E-commerce sellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any entity placing composite synthetic fibre ropes in the Indian
          market must ensure BIS compliance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Composite Synthetic Fibre Ropes under
          IS 14928:2001 is both a legal obligation and a critical safety
          requirement. A valid BIS Certification / BIS License for Composite
          Synthetic Fibre Ropes ensures regulatory compliance, protects end
          users, and enhances market credibility.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, BIS certification is not just about
          approval—it is about trust, safety, and sustainable business growth.
          With proper technical preparation and expert guidance, the BIS
          certification process in India can be completed smoothly and
          efficiently.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Composite Synthetic Fibre Ropes
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the BIS Full Form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for composite synthetic fibre
              ropes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, as per IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the BIS Certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can I apply for BIS certificate online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS apply online through the official portal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How long does BIS certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 1–2 months.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It varies based on testing and audit scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Do importers need BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Importers must ensure products are certified.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Can foreign manufacturers apply?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is BIS registration the same as BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, fibre ropes require a BIS license.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What happens if a product fails testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Corrective action and retesting are required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Is ISI marking mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, after certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. How long is the BIS license valid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Usually 1–2 years, renewable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Are surveillance audits compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts periodic audits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Can license scope be extended later?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through scope extension approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Can uncertified products be sold online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, e-commerce sales also require BIS compliance.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="BIS Certificate for Composite Synthetic Fibre Ropes - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={1} />
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
