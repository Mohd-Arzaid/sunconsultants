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

const BISCertificateForWorkChairsVietnamese = () => {
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

export default BISCertificateForWorkChairsVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Ghế làm việc | Giấy phép BIS IS 17631:2022";
  const ogTitle = "Chứng nhận BIS cho Ghế làm việc – Hướng dẫn IS 17631:2022";
  const twitterTitle = "Giấy phép BIS cho Ghế làm việc | IS 17631:2022";
  const metaDescription =
    "Nhận Giấy chứng nhận BIS cho ghế làm việc theo IS 17631:2022. Quy trình, tài liệu, kiểm tra, chi phí & thời gian cho Chứng nhận BIS tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho ghế làm việc theo IS 17631:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra & lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho ghế làm việc theo IS 17631:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí & thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Ghế làm việc, Giấy phép BIS cho Ghế làm việc, IS 17631:2022, Chứng nhận BIS cho Ghế làm việc";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    Giấy chứng nhận BIS cho Ghế làm việc – IS 17631:2022
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
          Giấy chứng nhận BIS cho Ghế làm việc – Hướng dẫn đầy đủ về Chứng nhận
          BIS IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Giấy phép BIS cho Ghế làm việc"
            alt="Giấy chứng nhận BIS cho Ghế làm việc - IS 17631:2022 Chứng nhận BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc sử dụng ngày càng tăng của ghế văn phòng và ghế làm việc—dù là
          trong không gian làm việc doanh nghiệp, trung tâm làm việc chung, văn
          phòng tại nhà, hay thiết lập thể chế—đã làm cho hiệu suất an toàn và
          công thái học trở nên thiết yếu. Để đảm bảo các nhà sản xuất cung cấp
          sản phẩm ghế ổn định về cấu trúc, bền bỉ và an toàn cho người dùng,
          Chính phủ Ấn Độ đã bắt buộc Chứng nhận BIS cho Ghế làm việc theo IS
          17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế làm việc thường chịu tải trọng lặp lại, chuyển động cơ thể liên
          tục, nghiêng, xoay và điều chỉnh chiều cao. Sự cố ở bất kỳ tính năng
          hiệu suất nào có thể dẫn đến chấn thương nghiêm trọng. Đây là lý do
          tại sao việc tuân thủ IS 17631:2022 – Ghế làm việc: Yêu cầu An toàn
          hiện là bắt buộc đối với tất cả các nhà sản xuất và nhà nhập khẩu.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn này giải thích quy trình cấp phép BIS đầy đủ, bao gồm tiêu
          chuẩn, kiểm tra, phí, tài liệu, trách nhiệm, lợi ích và thách
          thức—được tạo với nội dung mới để tránh trùng lặp trên toàn bộ trang
          web của bạn.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hiểu về Chứng nhận BIS cho Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cục Tiêu chuẩn Ấn Độ (BIS) giám sát chất lượng và an toàn của các sản
          phẩm được cung cấp trong thị trường Ấn Độ. Bất kỳ sản phẩm nào thuộc
          Tiêu chuẩn Ấn Độ được liệt kê trong Lệnh Kiểm soát Chất lượng bắt buộc
          phải được đánh giá và chứng nhận bởi BIS trước khi bán.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Giấy chứng nhận BIS – Điều Nó Đại diện
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Giấy chứng nhận BIS cho biết rằng ghế làm việc:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đã vượt qua kiểm tra hiệu suất và độ bền</li>
          <li>Đáp ứng thông số kỹ thuật vật liệu và xây dựng</li>
          <li>An toàn cho việc sử dụng hàng ngày lâu dài</li>
          <li>
            Tuân thủ các hướng dẫn công thái học và cấu trúc trong Tiêu chuẩn Ấn
            Độ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất đáp ứng các yêu cầu này được cấp Giấy phép BIS cho
          phép họ gắn Dấu ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tiêu chuẩn Áp dụng cho Ghế làm việc – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn điều chỉnh cho ghế làm việc và ghế văn phòng là:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Ghế làm việc: Yêu cầu An toàn
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này tập trung vào ghế ngồi dành cho việc sử dụng kéo dài
          trong môi trường làm việc.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sản phẩm Được Bao phủ Theo Tiêu chuẩn Này
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ghế văn phòng công thái học</li>
          <li>Ghế làm việc</li>
          <li>Ghế xoay</li>
          <li>Ghế bàn làm việc</li>
          <li>Ghế làm việc điều chỉnh chiều cao</li>
          <li>Ghế làm việc điều hành</li>
          <li>Ghế làm việc có lưng lưới hoặc vải</li>
          <li>Ghế có tay vịn</li>
          <li>Ghế có cơ chế nghiêng/khóa</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Tuân thủ IS 17631:2022 là Quan trọng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế làm việc khác biệt đáng kể so với ghế đa năng vì chúng:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hỗ trợ chuyển động liên tục</li>
          <li>Sử dụng cơ chế cơ khí và điều chỉnh</li>
          <li>Chịu tải trọng động</li>
          <li>Yêu cầu độ bền cho việc sử dụng kéo dài</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ghế được chế tạo kém có thể hỏng ở:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Khớp nối đế</li>
          <li>Cơ chế xoay</li>
          <li>Hệ thống nâng khí</li>
          <li>Hỗ trợ ghế/lưng</li>
          <li>Cấu trúc chân hoặc bánh xe</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Điều này có thể dẫn đến chấn thương nơi làm việc, thời gian ngừng hoạt
          động và các vấn đề trách nhiệm sản phẩm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chứng nhận BIS Bắt buộc Đảm bảo
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thiết kế công thái học an toàn</li>
          <li>Khả năng chịu tải đáng tin cậy</li>
          <li>Độ bền mạnh dưới kiểm tra chu kỳ</li>
          <li>Khả năng chống mài mòn cơ khí</li>
          <li>Tuân thủ các thông số an toàn người dùng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Do đó, việc có được Giấy phép BIS cho Ghế làm việc là không thể thương
          lượng đối với các nhà sản xuất Ấn Độ và nước ngoài.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Giấy phép BIS cho Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn này bao gồm các yêu cầu của ghế làm việc. Tiêu chuẩn này áp
          dụng cho ghế làm việc được sản xuất/lắp ráp hoàn toàn. Nó cũng áp dụng
          cho các đơn vị sẵn sàng lắp ráp; trong trường hợp đó các yêu cầu của
          tiêu chuẩn này sẽ áp dụng cho các đơn vị đã lắp ráp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS từng bước cho Ghế làm việc (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận cho ghế làm việc bao gồm sự kết hợp của đánh giá
          phòng thí nghiệm, kiểm tra nhà máy và xem xét kỹ thuật.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 1 – Đánh giá Sản phẩm & Ánh xạ Tiêu chuẩn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Xác định tất cả các biến thể ghế và căn chỉnh chúng với IS 17631:2022.
          Hiểu mô hình nào chia sẻ cùng một cấu trúc và mô hình nào yêu cầu kiểm
          tra riêng.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 2 – Gửi Đơn đăng ký Trực tuyến
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất gửi đơn đăng ký qua Cổng thông tin BIS Manak Trực tuyến.
          Thông tin yêu cầu bao gồm:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chi tiết địa điểm sản xuất</li>
          <li>Kiểm soát nguyên vật liệu</li>
          <li>Thông số kỹ thuật</li>
          <li>Khả năng sản xuất</li>
          <li>Tài liệu quyền sở hữu thương hiệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 3 – Thanh toán Phí
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Phí phải được thanh toán cho:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đơn đăng ký</li>
          <li>Xử lý</li>
          <li>Kiểm tra</li>
          <li>Kiểm tra</li>
          <li>Đánh dấu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 4 – Kiểm tra Mẫu (Yêu cầu IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Phòng thí nghiệm được BIS công nhận đánh giá ghế theo nhiều tiêu chí
          an toàn và hiệu suất.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Kiểm tra Ghế làm việc Bao gồm
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kiểm tra tải tĩnh ghế và lưng</li>
          <li>Chu kỳ tải độ bền</li>
          <li>Kiểm tra xoay/quay</li>
          <li>Độ bền cơ chế nghiêng</li>
          <li>Hiệu suất cơ chế nâng khí</li>
          <li>Độ bền bánh xe và khả năng chống lăn</li>
          <li>Độ ổn định đế và kiểm tra quá tải</li>
          <li>Khả năng tải tay vịn</li>
          <li>Kiểm tra khả năng chống va đập</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Phòng thí nghiệm phát hành báo cáo kiểm tra chi tiết cho BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 5 – Kiểm tra Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Thanh tra BIS xem xét:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hệ thống sản xuất</li>
          <li>Hồ sơ kiểm tra vật liệu</li>
          <li>Quy trình đảm bảo chất lượng nội bộ</li>
          <li>Dụng cụ kiểm tra & nhật ký hiệu chuẩn</li>
          <li>Tuân thủ Chương trình Kiểm tra & Kiểm tra (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 6 – Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Khi sự phù hợp được xác nhận, BIS cấp:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chứng nhận Giấy phép BIS/Dấu ISI</li>
          <li>Số CML duy nhất</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bước 7 – Tuân thủ Nhất quán
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất phải:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duy trì kiểm tra nội bộ liên tục</li>
          <li>Tuân theo quy tắc đánh dấu</li>
          <li>Hợp tác trong các cuộc kiểm tra giám sát</li>
          <li>Gia hạn giấy phép định kỳ</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Một bộ tài liệu đầy đủ đảm bảo phê duyệt nhanh hơn.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kinh doanh & Nhà máy
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Đăng ký nhà máy</li>
          <li>Sơ đồ & bố trí sản xuất</li>
          <li>Quy trình sản xuất</li>
          <li>Danh sách máy móc</li>
          <li>Danh sách thiết bị kiểm tra</li>
          <li>Giấy chứng nhận hiệu chuẩn</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Kỹ thuật
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bản vẽ kỹ thuật ghế</li>
          <li>Thông số kỹ thuật cơ chế</li>
          <li>Bảng dữ liệu vật liệu</li>
          <li>Hóa đơn vật liệu</li>
          <li>Hướng dẫn lắp ráp</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Pháp lý
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Giấy tờ tùy thân của người ký được ủy quyền</li>
          <li>Thư ủy quyền thương hiệu</li>
          <li>Giấy chứng nhận nhãn hiệu</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tài liệu Đặc biệt BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mẫu đơn đăng ký</li>
          <li>Cam kết</li>
          <li>Mẫu yêu cầu kiểm tra</li>
          <li>Mẫu nhãn</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra theo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế làm việc trải qua kiểm tra phức tạp hơn so với ghế thông thường do
          các bộ phận chuyển động.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Kiểm tra Chính được Thực hiện
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Cạnh Trước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Về Phía Trước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Về Phía Trước cho Ghế có Chỗ Đặt Chân
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Bên cho Ghế Không có Tay vịn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Bên cho Ghế Có Tay vịn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lật ngửa Về Phía Sau cho Ghế Không có Lưng Tựa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Cạnh Trước Ghế
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Kết hợp Ghế và Lưng
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Xuống Tay vịn — Trung tâm
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Xuống Tay vịn — Phía Trước
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Bên Tay vịn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kiểm tra Tải Tĩnh Chỗ Đặt Chân
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Các kiểm tra này mô phỏng nhiều tháng hoặc nhiều năm sử dụng thường
          xuyên trong vài ngày.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp trong Chứng nhận BIS cho Ghế làm việc
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Thất bại trong kiểm tra cơ khí/nghiêng</strong> –
            Thường do cơ chế yếu hoặc phần cứng chất lượng thấp.
          </li>
          <li>
            <strong>✔ 2. Không tuân thủ cơ chế nâng khí</strong> – Bộ nâng khí
            phải đáp ứng các thông số áp suất và an toàn nghiêm ngặt.
          </li>
          <li>
            <strong>✔ 3. Cơ sở hạ tầng kiểm tra không đầy đủ</strong> – Kiểm tra
            ghế làm việc yêu cầu thiết bị chuyên dụng.
          </li>
          <li>
            <strong>✔ 4. Nhóm sản phẩm không chính xác</strong> – Cơ chế khác
            nhau = kiểm tra riêng.
          </li>
          <li>
            <strong>✔ 5. Không tuân thủ STI</strong> – Lỗi STI có thể làm chậm
            việc cấp giấy phép.
          </li>
          <li>
            <strong>✔ 6. Tài liệu không khớp</strong> – Tên thương hiệu và tên
            mô hình phải khớp chính xác với đơn đăng ký BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Ghế làm việc
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tạo điều kiện bán hàng hợp pháp trên toàn Ấn Độ</li>
          <li>Tăng niềm tin khách hàng & danh tiếng thương hiệu</li>
          <li>Đảm bảo độ bền lâu dài</li>
          <li>Giảm khiếu nại bảo hành và hỏng hóc</li>
          <li>Bảo vệ khỏi hình phạt quy định</li>
          <li>Cho phép niêm yết trên các nền tảng thương mại điện tử</li>
          <li>Bắt buộc cho đấu thầu chính phủ và cung cấp doanh nghiệp</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hình phạt cho Việc Bán Ghế làm việc Không có Chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Không tuân thủ có thể dẫn đến:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hình phạt tài chính nặng</li>
          <li>Tịch thu hàng tồn kho</li>
          <li>Lệnh đóng cửa sản xuất</li>
          <li>Cấm nhập khẩu</li>
          <li>Truy tố hình sự</li>
          <li>Hủy bỏ giấy phép kinh doanh</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc thực thi nghiêm ngặt được thực hiện theo Đạo luật BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ai Phải Có Chứng nhận BIS cho Ghế làm việc?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">Bắt buộc cho:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nhà sản xuất Ấn Độ</li>
          <li>Nhà sản xuất nước ngoài xuất khẩu sang Ấn Độ</li>
          <li>Chủ sở hữu thương hiệu</li>
          <li>Nhà nhập khẩu</li>
          <li>Nhà cung cấp OEM/ODM</li>
          <li>Nhà phân phối kho</li>
          <li>Thương hiệu nội thất bán lẻ và trực tuyến</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi nhà máy yêu cầu một giấy phép BIS duy nhất.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ghế làm việc theo IS 17631:2022 là rất quan
          trọng để đảm bảo sản phẩm ghế an toàn, bền bỉ và có công thái học tốt
          tại Ấn Độ. Chứng nhận bắt buộc tăng cường niềm tin khách hàng, giảm
          rủi ro trách nhiệm sản phẩm và đảm bảo tuân thủ các tiêu chuẩn chất
          lượng quốc gia. Với sự hỗ trợ chuyên nghiệp, hành trình chứng nhận—từ
          kiểm tra đến kiểm tra đến cấp phép—trở nên hiệu quả và có thể dự đoán
          được.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Ghế làm việc (IS
          17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Ghế nào thuộc IS 17631:2022?</strong>
              <br />
              Bất kỳ ghế nào được thiết kế cho môi trường làm việc, bao gồm ghế
              văn phòng công thái học, ghế làm việc, ghế xoay và ghế điều chỉnh.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Chứng nhận BIS có bắt buộc cho ghế làm việc không?
              </strong>
              <br />
              Có. Chứng nhận BIS là bắt buộc trước khi sản xuất, bán hoặc nhập
              khẩu ghế làm việc tại Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Điều gì làm cho kiểm tra ghế làm việc khác với kiểm tra ghế
                thông thường?
              </strong>
              <br />
              Ghế làm việc sử dụng cơ chế như xoay, nâng khí, hệ thống nghiêng
              và bánh xe—yêu cầu kiểm tra cơ khí và độ bền nâng cao.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Chứng nhận BIS mất bao lâu?</strong>
              <br />
              Thường là 30–45 ngày cho nhà sản xuất Ấn Độ và khoảng 120 ngày cho
              nhà sản xuất nước ngoài, tùy thuộc vào kiểm tra và tài liệu.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Nhà sản xuất nước ngoài có thể đăng ký không?</strong>
              <br />
              Có, thông qua FMCS (Chương trình Chứng nhận Nhà sản xuất Nước
              ngoài).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Điều gì xảy ra nếu ghế không đạt kiểm tra BIS?</strong>
              <br />
              Nó phải được thiết kế lại, sửa chữa và kiểm tra lại cho đến khi
              đáp ứng IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Tài liệu nào được yêu cầu cho đơn đăng ký BIS?</strong>
              <br />
              Chi tiết nhà máy, bản vẽ sản phẩm, danh sách máy móc, tài liệu QC,
              quyền sở hữu thương hiệu và giấy tờ pháp lý.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Tất cả mô hình ghế có yêu cầu kiểm tra riêng không?
              </strong>
              <br />
              Nếu các mô hình khác nhau về thiết kế, cơ chế hoặc cấu trúc, có
              thể cần kiểm tra riêng.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Đánh dấu ISI có bắt buộc sau khi phê duyệt không?
              </strong>
              <br />
              Có, dấu ISI phải xuất hiện trên sản phẩm, nhãn và bao bì.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Ghế làm việc - IS 17631:2022 PDF"
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
                alt="Logo BIS"
                title="Logo BIS"
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
