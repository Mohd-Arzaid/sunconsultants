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

const BISCertificateForBunkBedsVietnamese = () => {
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

export default BISCertificateForBunkBedsVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Giường tầng | Giấy phép BIS IS 17636:2022";
  const ogTitle = "Chứng nhận BIS cho Giường tầng – Hướng dẫn IS 17636:2022";
  const twitterTitle = "Giấy phép BIS cho Giường tầng | IS 17636:2022";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho giường tầng theo IS 17636:2022. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho giường tầng theo IS 17636:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho giường tầng theo IS 17636:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Giường tầng, Giấy phép BIS cho Giường tầng, IS 17636:2022, Chứng nhận BIS cho Giường tầng";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/bunk-beds-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-muzdawijat-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/shuang-ceng-chuang-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stapelbedden-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-a-castello-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/nidan-beddo-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/icheung-chimdae-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/literas-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-song-chan-is-17636"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-tang-is-17636"
      />
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
                    Giấy chứng nhận BIS cho Giường tầng – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Giấy chứng nhận BIS cho Giường tầng – Hướng dẫn đầy đủ về Chứng nhận
          BIS IS 17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="Giấy phép BIS cho Giường tầng"
            alt="Giấy chứng nhận BIS cho Giường tầng - Chứng nhận BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Giường tầng là yêu cầu bắt buộc tại Ấn Độ theo
          IS 17636:2022, quy định các yêu cầu về an toàn, hiệu suất và cấu trúc
          cho giường tầng được sử dụng trong nhà, ký túc xá, ký túc xá, chỗ ở
          PG, trường học, khách sạn và cơ sở thương mại. Bất kỳ nhà sản xuất
          nào—Ấn Độ hoặc nước ngoài—phải có Chứng nhận BIS cho Giường tầng trước
          khi bán, nhập khẩu, xuất khẩu hoặc phân phối giường tầng trong thị
          trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với nhu cầu ngày càng tăng về nội thất tiết kiệm không gian, giường
          tầng đã trở thành một danh mục sản phẩm thiết yếu. Tuy nhiên, rủi ro
          an toàn như ngã, sụp đổ, mắc kẹt và hỏng cấu trúc khiến Giấy phép BIS
          cho Giường tầng trở nên quan trọng để đảm bảo bảo vệ người tiêu dùng.
          Trang này toàn diện sẽ hướng dẫn bạn qua Đăng ký BIS cho Giường tầng,
          yêu cầu kiểm tra, tài liệu, phí, thời gian, hình phạt và lợi ích.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dù bạn là nhà sản xuất, nhà nhập khẩu, nhà xuất khẩu, thương nhân hay
          khởi nghiệp, hướng dẫn này giúp bạn hiểu các yêu cầu tuân thủ theo Cục
          Tiêu chuẩn Ấn Độ (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS là chương trình tuân thủ chất lượng và an toàn được
          quản lý bởi Cục Tiêu chuẩn Ấn Độ, cơ quan tiêu chuẩn quốc gia của Ấn
          Độ. Nó đảm bảo rằng sản phẩm tuân thủ các Tiêu chuẩn Ấn Độ được chỉ
          định và an toàn, đáng tin cậy và phù hợp để sử dụng.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giấy chứng nhận BIS là gì?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS là giấy phép chính thức được cấp cho nhà sản xuất
          cho phép họ sử dụng Dấu ISI, chứng minh sự tuân thủ với tiêu chuẩn sản
          phẩm do BIS quy định.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ý nghĩa Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nó chứng minh sản phẩm đã vượt qua:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra trong phòng thí nghiệm</li>
          <li>Kiểm tra nhà máy</li>
          <li>Đánh giá kiểm soát chất lượng</li>
          <li>Tuân thủ an toàn</li>
          <li>Phù hợp với Tiêu chuẩn Ấn Độ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sản phẩm được chứng nhận BIS hiển thị Logo BIS, còn được gọi là Dấu
          ISI, có nghĩa là nó đáp ứng các tiêu chuẩn chất lượng Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn BIS nào áp dụng cho Giường tầng? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường tầng thuộc chứng nhận BIS bắt buộc theo tiêu chuẩn mới được
          giới thiệu:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Giường tầng – Yêu cầu An toàn
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này đảm bảo rằng giường tầng đáp ứng các tiêu chí an toàn,
          xây dựng và độ bền nghiêm ngặt. Nó bao gồm:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ổn định cấu trúc</li>
          <li>Lan can bảo vệ</li>
          <li>Nguy cơ mắc kẹt</li>
          <li>Khả năng chịu tải</li>
          <li>Yêu cầu kích thước</li>
          <li>Thông số kỹ thuật vật liệu</li>
          <li>Cạnh và hoàn thiện bề mặt</li>
          <li>Xây dựng thang</li>
          <li>Kiểm tra độ bền và hiệu suất</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bất kỳ nhà sản xuất nào muốn bán giường tầng tại Ấn Độ phải có Giấy
          phép BIS cho Giường tầng theo IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao cần Chứng nhận BIS cho Giường tầng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giường tầng được sử dụng rộng rãi bởi trẻ em và người lớn, và mối quan
          tâm về an toàn làm cho việc tuân thủ trở nên cần thiết. BIS đã làm cho
          chứng nhận trở thành bắt buộc để ngăn chặn:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sụp đổ hoặc hỏng cấu trúc</li>
          <li>Mắc kẹt các bộ phận cơ thể</li>
          <li>Ngã từ tầng trên</li>
          <li>Chấn thương liên quan đến thang</li>
          <li>Chất lượng vật liệu kém</li>
          <li>Nguy cơ cháy</li>
          <li>Hoàn thiện nguy hiểm hoặc cạnh sắc</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lý do Giấy phép BIS cho Giường tầng là Bắt buộc
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đảm bảo độ bền cơ học và độ bền</li>
          <li>Bảo vệ người tiêu dùng—đặc biệt là trẻ em—khỏi chấn thương</li>
          <li>Duy trì tiêu chuẩn chất lượng đồng nhất</li>
          <li>Giúp thương hiệu xây dựng niềm tin và uy tín</li>
          <li>Đảm bảo tuân thủ các quy định của chính phủ</li>
          <li>Ngăn chặn các vấn đề pháp lý và hình phạt</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Không có đăng ký BIS, nhà sản xuất và nhà nhập khẩu không thể hợp pháp
          bán sản phẩm trong thị trường Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho Giường tầng (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận BIS tại Ấn Độ bao gồm kiểm tra, tài liệu và kiểm
          tra nhà máy. Đây là quy trình từng bước:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 — Xác định Khả năng áp dụng & Tiêu chuẩn
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Bắt buộc
          </li>
          <li>Xác nhận danh mục sản phẩm và chi tiết đơn vị sản xuất.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 — Đơn đăng ký BIS (Gửi biểu mẫu)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nộp đơn trực tuyến qua Cổng thông tin trực tuyến BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yêu cầu bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết nhà sản xuất</li>
          <li>Địa chỉ nhà máy và bằng chứng</li>
          <li>Danh mục sản phẩm & thương hiệu</li>
          <li>Khả năng sản xuất</li>
          <li>Quy trình kiểm soát chất lượng</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước này bắt đầu chu kỳ phê duyệt chính thức.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 — Thanh toán Chi phí Giấy chứng nhận BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi gửi, thanh toán:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Phí đăng ký</li>
          <li>Phí kiểm tra</li>
          <li>Phí kiểm toán</li>
          <li>Phí đánh dấu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Phí phụ thuộc vào:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Số lượng biến thể sản phẩm</li>
          <li>Tên thương hiệu</li>
          <li>Vị trí nhà máy</li>
          <li>Thông số kiểm tra</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 — Kiểm tra Mẫu (Theo IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kiểm tra được thực hiện trong phòng thí nghiệm được BIS công nhận.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Các kiểm tra bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra độ ổn định cấu trúc</li>
          <li>Kiểm tra tác động</li>
          <li>Kiểm tra mắc kẹt</li>
          <li>Kiểm tra độ bền lan can</li>
          <li>Kiểm tra chất lượng hoàn thiện</li>
          <li>Kiểm tra an toàn thang</li>
          <li>Kiểm tra tải trọng</li>
          <li>Kiểm tra độ bền</li>
          <li>Đánh giá an toàn cạnh</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Báo cáo kiểm tra được tải trực tiếp lên cổng thông tin BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 — Kiểm tra Nhà máy BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cán bộ BIS đến thăm nhà máy để xác minh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hệ thống quản lý chất lượng</li>
          <li>Kiểm soát nguyên vật liệu</li>
          <li>Kiểm tra trong quá trình</li>
          <li>Kiểm tra sản phẩm cuối cùng</li>
          <li>Khả năng sản xuất</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Họ kiểm tra sự tuân thủ với Chương trình Kiểm tra & Kiểm tra BIS
          (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 — Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sau khi tất cả các bước được hoàn tất, BIS cấp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận BIS</li>
          <li>Phê duyệt Dấu ISI</li>
          <li>Số Giấy phép CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bây giờ bạn có thể hợp pháp sử dụng Dấu BIS trên giường tầng và bao
          bì.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 — Nghĩa vụ Sau Giấy phép
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duy trì kiểm tra nội bộ</li>
          <li>Cho phép kiểm tra BIS định kỳ</li>
          <li>Gia hạn giấy phép mỗi 1 hoặc 2 năm</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Giường tầng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Tiêu chuẩn này bao gồm các yêu cầu liên quan đến
          hiệu suất và an toàn, đó là độ bền, độ ổn định và độ bền của giường
          tầng cho sử dụng trong nước và ngoài nước. Tiêu chuẩn này cũng áp dụng
          cho giường đơn để sử dụng ở độ cao của đế giường 800 mm hoặc cao hơn
          so với mức sàn hoàn thiện, bất kể việc sử dụng không gian bên dưới
          được đặt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Tiêu chuẩn này áp dụng cho giường tầng được sản
          xuất/ chế tạo hoàn toàn. Nó cũng áp dụng cho các đơn vị sẵn sàng lắp
          ráp; trong trường hợp đó các yêu cầu của tiêu chuẩn này sẽ áp dụng cho
          đơn vị đã lắp ráp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Giường tầng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đây là danh sách đầy đủ các Tài liệu Giấy chứng nhận BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Nhà sản xuất
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy chứng nhận đăng ký nhà máy</li>
          <li>Sơ đồ quy trình sản xuất</li>
          <li>Danh sách máy móc & thiết bị</li>
          <li>Danh sách thiết bị kiểm tra</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
          <li>Bố trí nhà máy/bố trí nhà máy</li>
          <li>Thư ủy quyền từ CEO/Giám đốc</li>
          <li>Giấy chứng nhận ISO 9001 (nếu có)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân</li>
          <li>Giấy tờ địa chỉ</li>
          <li>Ủy quyền thương hiệu (nếu là thương hiệu bên thứ ba)</li>
          <li>Tài liệu đăng ký nhãn hiệu (tùy chọn)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thông số kỹ thuật sản phẩm</li>
          <li>Hóa đơn nguyên vật liệu</li>
          <li>Mô tả tính năng an toàn</li>
          <li>Kế hoạch kiểm soát chất lượng</li>
          <li>Báo cáo kiểm tra nội bộ</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đơn đăng ký BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cam kết & tuyên bố</li>
          <li>Biểu mẫu yêu cầu kiểm tra</li>
          <li>Thư phê duyệt mẫu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Có tài liệu phù hợp giảm thiểu sự chậm trễ và đảm bảo phê duyệt suôn
          sẻ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Giường tầng (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kiểm tra là một phần bắt buộc của quy trình đăng ký BIS. Giường tầng
          trải qua các kiểm tra nghiêm ngặt để đảm bảo an toàn và độ bền.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Chương trình Kiểm tra và Kiểm tra cho Giường tầng
        </h3>

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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thiết kế và tay nghề
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kích thước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rào chắn An toàn Giường trên
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Khe hở
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Đế giường
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Thang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Độ bền của Khung và Bộ phận cố định
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Độ ổn định
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Cố định Giường trên với Giường dưới
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Các kiểm tra phải được thực hiện chỉ tại phòng thí nghiệm được BIS
          công nhận.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp & Cách Tránh
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Phân loại Sản phẩm Không đúng</strong>
            <br />
            Luôn xác minh Tiêu chuẩn Ấn Độ chính xác.
          </li>
          <li>
            <strong>Tài liệu Không phù hợp</strong>
            <br />
            Tài liệu thiếu gây chậm trễ—chuẩn bị trước.
          </li>
          <li>
            <strong>Kiểm tra Phòng thí nghiệm Thất bại</strong>
            <br />
            Đảm bảo vật liệu chất lượng cao, hàn, lan can và hoàn thiện.
          </li>
          <li>
            <strong>Nhà máy Chưa sẵn sàng cho Kiểm tra</strong>
            <br />
            Đảm bảo QMS và thiết bị kiểm tra được bảo trì đúng cách.
          </li>
          <li>
            <strong>Vấn đề Nhãn hiệu</strong>
            <br />
            Tên thương hiệu phải khớp với đơn đăng ký giấy phép.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giải quyết những vấn đề này sớm giảm thời gian xử lý đáng kể.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Nhà sản xuất & Nhà nhập khẩu
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bán giường tầng hợp pháp tại Ấn Độ</li>
          <li>Xây dựng niềm tin với khách hàng</li>
          <li>Giảm trả lại sản phẩm</li>
          <li>Cải thiện danh tiếng thương hiệu</li>
          <li>Đảm bảo tuân thủ an toàn</li>
          <li>Đạt được lợi thế cạnh tranh</li>
          <li>Mở rộng vào chuỗi bán lẻ & nền tảng thương mại điện tử</li>
          <li>Truy cập đấu thầu chính phủ</li>
          <li>Tránh hình phạt & hành động pháp lý</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Vi phạm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bán giường tầng không có Chứng nhận BIS có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tịch thu sản phẩm</li>
          <li>Hình phạt tài chính</li>
          <li>Lệnh đóng cửa nhà máy</li>
          <li>Truy tố pháp lý</li>
          <li>Cấm khỏi thị trường Ấn Độ</li>
          <li>Đưa vào danh sách đen thương hiệu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tuân thủ không phải là tùy chọn—nó là bắt buộc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Cần Chứng nhận BIS cho Giường tầng?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các thực thể sau phải có Giấy phép BIS cho Giường tầng:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà phân phối</li>
          <li>Người bán thương mại điện tử</li>
          <li>Nhà sản xuất OEM/ODM</li>
          <li>Thương hiệu nội thất & nhà bán lẻ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi nhà máy (không phải công ty) yêu cầu giấy phép BIS riêng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Chúng tôi cho Tư vấn Chứng nhận BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chúng tôi cung cấp hỗ trợ toàn diện cho Đăng ký BIS cho Giường tầng,
          bao gồm:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giải thích tiêu chuẩn (IS 17636:2022)</li>
          <li>Chuẩn bị tài liệu</li>
          <li>Điều phối kiểm tra phòng thí nghiệm</li>
          <li>Đơn đăng ký cổng thông tin BIS</li>
          <li>Hỗ trợ kiểm tra nhà máy</li>
          <li>Giao tiếp với cán bộ BIS</li>
          <li>Hỗ trợ phê duyệt giấy phép</li>
          <li>Tuân thủ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với nhiều năm kinh nghiệm, chúng tôi đảm bảo chứng nhận BIS nhanh
          chóng, chính xác và không rắc rối.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp — Chứng nhận BIS cho Giường tầng
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Chứng nhận BIS có bắt buộc cho giường tầng tại Ấn Độ không?
              </strong>
              <br />
              Có. Theo IS 17636:2022, nó là bắt buộc cho tất cả nhà sản xuất và
              nhà nhập khẩu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Chứng nhận BIS cho giường tầng mất bao lâu?</strong>
              <br />
              Thường 30–45 ngày tùy thuộc vào sự sẵn sàng và tài liệu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Nhà sản xuất nước ngoài có thể đăng ký BIS không?
              </strong>
              <br />
              Có, thông qua FMCS (Chương trình Chứng nhận Nhà sản xuất Nước
              ngoài).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Tôi có thể đăng ký Giấy chứng nhận BIS trực tuyến không?
              </strong>
              <br />
              Có, thông qua Cổng thông tin trực tuyến BIS Manak.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Các kiểm tra nào được yêu cầu cho chứng nhận giường tầng?
              </strong>
              <br />
              Kiểm tra tải trọng, kiểm tra lan can, kiểm tra độ ổn định, kiểm
              tra tác động, kiểm tra mắc kẹt , v.v.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Giấy phép BIS có hiệu lực bao lâu?</strong>
              <br />
              Thường 1–2 năm và có thể gia hạn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Một giấy phép có thể bao gồm nhiều mẫu không?</strong>
              <br />
              Chỉ khi chúng nằm trong cùng tiêu chuẩn và danh mục.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Dấu ISI có bắt buộc trên giường tầng không?</strong>
              <br />
              Có, Dấu ISI là bắt buộc sau chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Điều gì xảy ra nếu sản phẩm của tôi không vượt qua kiểm tra
                phòng thí nghiệm?
              </strong>
              <br />
              Bạn phải sửa đổi sản phẩm và gửi lại mẫu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. BIS có kiểm tra cơ sở hạ tầng nhà máy không?</strong>
              <br />
              Có, trong quá trình kiểm tra.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Thương nhân có thể đăng ký BIS không?</strong>
              <br />
              Chỉ khi họ là chủ sở hữu thương hiệu và có hợp đồng với nhà sản
              xuất.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Logo BIS là gì?</strong>
              <br />
              Đó là biểu tượng Dấu ISI tiêu chuẩn cho biết sự phù hợp sản phẩm.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>14. Tài liệu nào cần thiết cho chứng nhận BIS?</strong>
              <br />
              Giấy phép nhà máy, bố trí, danh sách máy móc, BOM, kế hoạch QC,
              báo cáo kiểm tra, v.v.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                15. Kiểm tra BIS được thực hiện tại nhà máy không?
              </strong>
              <br />
              Không, chỉ tại các phòng thí nghiệm được BIS công nhận.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc có được Giấy chứng nhận BIS cho Giường tầng theo IS 17636:2022
          không chỉ là bắt buộc mà còn cần thiết để đảm bảo an toàn người tiêu
          dùng, độ tin cậy sản phẩm và tuân thủ pháp lý tại Ấn Độ. Quy trình
          chứng nhận bao gồm kiểm tra sản phẩm, tài liệu, kiểm tra nhà máy, và
          cấp giấy phép. Với kế hoạch phù hợp và hướng dẫn chuyên gia, quy trình
          trở nên suôn sẻ, nhanh chóng và hiệu quả về chi phí.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dù bạn là nhà sản xuất, nhà nhập khẩu hay chủ sở hữu thương hiệu, việc
          có chứng nhận BIS tăng cường vị thế thị trường của bạn, tăng niềm tin
          của khách hàng và mở ra các cơ hội kinh doanh mới. Đội ngũ tư vấn
          chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn với Chứng nhận BIS toàn
          diện cho giường tầng.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Giường tầng - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadVietnamese />

        <FaqAuthorVietnamese questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
                alt="Logo LMPC"
                title="Logo LMPC"
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
