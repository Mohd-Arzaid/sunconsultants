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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForTablesAndDesksUnitVietnamese = () => {
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

export default BISCertificateForTablesAndDesksUnitVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Bàn và Bàn làm việc | Giấy phép BIS IS 17633:2022";
  const ogTitle = "Chứng nhận BIS cho Bàn và Bàn làm việc – Hướng dẫn IS 17633:2022";
  const twitterTitle = "Giấy phép BIS cho Bàn và Bàn làm việc | IS 17633:2022";
  const metaDescription =
    "Đăng ký Giấy chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí và thời gian tại Ấn Độ.";
  const ogDescription =
    "Hướng dẫn đầy đủ về Chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình, chi phí, tài liệu, kiểm tra và lợi ích giấy phép BIS.";
  const twitterDescription =
    "Đăng ký Giấy chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022. Tìm hiểu quy trình BIS, tài liệu, kiểm tra, phí và thời gian tại Ấn Độ.";
  const metaKeywords =
    "Giấy chứng nhận BIS cho Bàn và Bàn làm việc, Giấy phép BIS cho Bàn và Bàn làm việc, IS 17633:2022, Chứng nhận BIS cho Bàn và Bàn làm việc";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ban-va-ban-lam-viec-is-17633";
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
                    Giấy chứng nhận BIS cho Bàn và Bàn làm việc – IS 17633:2022
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
          Chứng nhận BIS cho Bàn và Bàn làm việc (IS 17633:2022) – Hướng dẫn
          đầy đủ về Chứng nhận Dấu ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Giấy phép BIS cho Bàn và Bàn làm việc"
            alt="Chứng nhận BIS cho Bàn và Bàn làm việc - Hướng dẫn Dấu ISI IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bàn và bàn làm việc là một trong những sản phẩm nội thất được sử dụng
          rộng rãi nhất tại các văn phòng, cơ sở giáo dục, cơ sở thương mại, tổ
          chức chính phủ và không gian dân cư. Vì các sản phẩm này được kỳ vọng
          chịu được việc sử dụng thường xuyên trong khi đảm bảo an toàn cho người
          dùng, sự ổn định và độ bền, việc tuân thủ các tiêu chuẩn chất lượng được
          công nhận ngày càng trở nên quan trọng đối với nhà sản xuất và nhà nhập
          khẩu.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tại Ấn Độ, bàn và bàn làm việc thuộc IS 17633:2022 được yêu cầu phải
          tuân thủ các yêu cầu chất lượng và an toàn áp dụng được quy định bởi Cục
          Tiêu chuẩn Ấn Độ (BIS). Các nhà sản xuất đáp ứng thành công những yêu
          cầu này có thể nhận được giấy phép BIS và sử dụng Dấu ISI trên sản phẩm
          của mình, thể hiện sự phù hợp với Tiêu chuẩn Ấn Độ liên quan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy trình chứng nhận đánh giá nhiều khía cạnh của hiệu suất sản phẩm,
          bao gồm độ bền, sự ổn định, độ bền, tay nghề, kích thước và an toàn tổng
          thể. Việc tuân thủ không chỉ giúp doanh nghiệp đáp ứng các yêu cầu quy
          định mà còn cải thiện độ tin cậy của sản phẩm và sự chấp nhận của thị
          trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích mọi điều mà nhà sản xuất, nhà nhập
          khẩu, thương hiệu nội thất và chuyên gia mua sắm cần biết về Chứng nhận
          BIS cho Bàn và Bàn làm việc theo IS 17633:2022, bao gồm phạm vi áp dụng,
          yêu cầu chứng nhận, thông số kiểm tra, tài liệu, lợi ích và quy trình
          chứng nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Những Điểm nổi bật Chính của Chứng nhận BIS cho Bàn và Bàn làm việc
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Hạng mục
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Chi tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Sản phẩm", "Bàn và Bàn làm việc"],
                ["Tiêu chuẩn áp dụng", "IS 17633:2022"],
                ["Loại chứng nhận", "Chứng nhận Sản phẩm BIS"],
                ["Dấu áp dụng", "Dấu ISI"],
                ["Chương trình chứng nhận", "Scheme-I (Chứng nhận Dấu ISI)"],
                ["Cơ quan quản lý", "Cục Tiêu chuẩn Ấn Độ (BIS)"],
                ["Lĩnh vực áp dụng", "Nội thất"],
                [
                  "Đối tượng đủ điều kiện nộp đơn",
                  "Nhà sản xuất Ấn Độ và Nhà sản xuất Nước ngoài",
                ],
                [
                  "Yêu cầu tuân thủ",
                  "Bắt buộc theo Lệnh Kiểm soát Chất lượng (QCO) Nội thất áp dụng",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Chương trình chứng nhận" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (Chứng nhận Dấu ISI)
                      </a>
                    ) : particular === "Yêu cầu tuân thủ" ? (
                      <>
                        Bắt buộc theo{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            Lệnh Kiểm soát Chất lượng (QCO) Nội thất
                          </strong>
                        </a>{" "}
                        áp dụng
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Bàn và Bàn làm việc là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Bàn và Bàn làm việc là một quy trình đánh giá sự phù
          hợp được thực hiện theo Chương trình Chứng nhận Sản phẩm của Cục Tiêu
          chuẩn Ấn Độ (BIS). Chứng nhận xác nhận rằng sản phẩm tuân thủ các yêu cầu
          được quy định trong IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi chứng nhận thành công, nhà sản xuất được phép sử dụng Dấu ISI
          trên sản phẩm của mình, thể hiện sự tuân thủ Tiêu chuẩn Ấn Độ áp dụng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận nhằm đảm bảo rằng bàn và bàn làm việc được cung cấp trên thị
          trường Ấn Độ đáp ứng các yêu cầu đã được thiết lập liên quan đến:
        </p>

        <ul className={LIST_CLASS}>
          <li>Độ bền cấu trúc và sự ổn định trong quá trình sử dụng bình thường</li>
          <li>Độ bền, an toàn người dùng và tay nghề vật liệu</li>
          <li>Đầy đủ các yêu cầu hiệu suất theo IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với người mua và cơ quan mua sắm, Dấu ISI là sự đảm bảo rằng đồ nội
          thất đã được đánh giá theo các chuẩn mực chất lượng và an toàn được công
          nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tổng quan về IS 17633:2022 cho Bàn và Bàn làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 là Tiêu chuẩn Ấn Độ quy định các yêu cầu về hiệu suất và an
          toàn cho bàn và bàn làm việc dành cho người dùng trưởng thành trong các
          ứng dụng ngồi và đứng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn bao gồm cả:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bàn và bàn làm việc được sản xuất hoàn chỉnh (làm sẵn)</li>
          <li>
            Đơn vị sẵn sàng lắp ráp (RTA) — được kiểm tra sau khi lắp ráp hoàn
            chỉnh
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu của tiêu chuẩn là thiết lập các yêu cầu hiệu suất và an toàn tối
          thiểu giúp đảm bảo đồ nội thất luôn ổn định, bền và an toàn trong suốt
          vòng đời sử dụng dự kiến của nó.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Các Lĩnh vực Chính được Bao phủ theo IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn tập trung vào một số đặc tính hiệu suất quan trọng, bao gồm:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Yêu cầu về Độ bền —</strong> Bàn và bàn làm việc phải chịu được
            tải trọng dự kiến trong quá trình sử dụng bình thường mà không bị hỏng
            hoặc biến dạng quá mức.
          </li>
          <li>
            <strong>Yêu cầu về Sự ổn định —</strong> Đồ nội thất phải luôn ổn định
            khi sử dụng và chống lật trong các điều kiện chịu tải có thể lường
            trước.
          </li>
          <li>
            <strong>Yêu cầu về Độ bền —</strong> Sản phẩm phải duy trì hiệu suất và
            tính toàn vẹn cấu trúc sau khi sử dụng lặp lại trong thời gian dài.
          </li>
          <li>
            <strong>Yêu cầu về An toàn —</strong> Thiết kế và kết cấu phải giảm
            thiểu rủi ro từ sự không ổn định, cạnh sắc, kết cấu không an toàn hoặc
            hỏng cấu trúc.
          </li>
          <li>
            <strong>Chất lượng Tay nghề &amp; Kết cấu —</strong> Tay nghề, lắp ráp,
            khớp nối, dụng cụ buộc và kết cấu tổng thể được đánh giá về hiệu suất
            lâu dài đáng tin cậy.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Bàn và Bàn làm việc có Bắt buộc tại Ấn Độ không?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Có. Bàn và bàn làm việc thuộc Lệnh Kiểm soát Chất lượng (QCO) Nội thất áp
          dụng được yêu cầu phải tuân thủ Tiêu chuẩn Ấn Độ liên quan và nhận được
          Chứng nhận BIS trước khi được sản xuất, nhập khẩu, bán, phân phối hoặc
          chào bán trên thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mục tiêu của chứng nhận bắt buộc là:
        </p>

        <ul className={LIST_CLASS}>
          <li>Đảm bảo chất lượng sản phẩm cao hơn trong toàn ngành nội thất</li>
          <li>Bảo vệ an toàn người tiêu dùng thông qua các tiêu chuẩn đã được xác minh</li>
          <li>Ngăn chặn đồ nội thất kém chất lượng xâm nhập thị trường</li>
          <li>Thúc đẩy tiêu chuẩn hóa và các chuẩn mực chất lượng thống nhất</li>
          <li>Xây dựng niềm tin của người mua đối với các sản phẩm được chứng nhận Dấu ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất thuộc các quy định áp dụng phải nhận được giấy phép BIS
          và sử dụng Dấu ISI theo các yêu cầu của BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Cũng xem các Sản phẩm Nội thất được Bao phủ theo Chứng nhận BIS Bắt buộc
            —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>Chứng nhận BIS cho nội thất</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Phạm vi Sản phẩm được Bao phủ theo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Phạm vi của IS 17633:2022 mở rộng đến nhiều loại bàn và bàn làm việc được
          thiết kế cho người dùng trưởng thành trong môi trường dân cư, thương mại,
          thể chế và nơi làm việc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ví dụ về các sản phẩm thường được bao phủ bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bàn văn phòng, bàn học và bàn máy tính</li>
          <li>Trạm làm việc và bàn đa năng</li>
          <li>Bàn hội nghị và bàn họp</li>
          <li>Bàn thể chế và bàn phòng thí nghiệm</li>
          <li>Đồ nội thất dùng chung và sử dụng thương mại</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất nên xem xét cẩn thận thông số kỹ thuật sản phẩm và mục đích
          sử dụng để xác định liệu sản phẩm của họ có thuộc phạm vi của IS
          17633:2022 hay không.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Các Yêu cầu Kỹ thuật Chính theo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Để nhận được chứng nhận BIS, bàn và bàn làm việc phải đáp ứng các yêu cầu
          về hiệu suất và an toàn khác nhau được quy định bởi tiêu chuẩn.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Tính toàn vẹn Cấu trúc —</strong> Sản phẩm phải hoạt động dưới
            tải trọng quy định; các khớp nối và kết cấu hỗ trợ phải giữ chắc chắn
            trong quá trình kiểm tra.
          </li>
          <li>
            <strong>Hiệu suất Chịu tải —</strong> Bàn và bàn làm việc phải chịu
            được tải trọng quy định mà không bị biến dạng, hư hỏng hoặc hỏng hóc
            không thể chấp nhận.
          </li>
          <li>
            <strong>Hiệu suất Ổn định —</strong> Đồ nội thất phải luôn ổn định khi
            sử dụng và giảm rủi ro lật có thể gây thương tích hoặc hư hại tài sản.
          </li>
          <li>
            <strong>Hiệu suất Độ bền —</strong> Sản phẩm phải chịu được các chu kỳ
            sử dụng lặp lại trong khi duy trì hiệu suất có thể chấp nhận được.
          </li>
          <li>
            <strong>Vật liệu &amp; Tay nghề —</strong> Vật liệu, hoàn thiện và
            phương pháp lắp ráp phải đáp ứng các biện pháp kiểm soát chất lượng để
            sản xuất ổn định.
          </li>
          <li>
            <strong>Cân nhắc về An toàn —</strong> Thiết kế phải giảm thiểu các mối
            nguy hiểm từ việc sử dụng đồ nội thất cho người tiêu dùng và người mua
            thể chế.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS Quan trọng đối với Nhà sản xuất Nội thất
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Thị trường nội thất Ấn Độ ngày càng chú trọng đến chất lượng. Các cơ quan
          chính phủ, cơ sở giáo dục, người mua doanh nghiệp và các cơ quan mua sắm
          lớn thường ưu tiên các sản phẩm tuân thủ các tiêu chuẩn được công nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Việc nhận được chứng nhận BIS giúp nhà sản xuất:
        </p>

        <ul className={LIST_CLASS}>
          <li>Chứng minh sự tuân thủ các tiêu chuẩn Ấn Độ áp dụng</li>
          <li>Nâng cao độ tin cậy của sản phẩm và uy tín thương hiệu</li>
          <li>Giành được niềm tin của khách hàng và người mua thể chế</li>
          <li>Cải thiện sự chấp nhận trong mua sắm của chính phủ và doanh nghiệp</li>
          <li>Tăng cường các hoạt động quản lý chất lượng nội bộ</li>
          <li>Đi trước các yêu cầu quy định đang phát triển</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với các nhà sản xuất tìm kiếm sự tăng trưởng dài hạn, chứng nhận BIS
          thường được xem là vừa là yêu cầu tuân thủ vừa là lợi thế kinh doanh
          chiến lược.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Bàn và Bàn làm việc theo IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trước khi nhà sản xuất có thể nhận được chứng nhận BIS, các mẫu sản phẩm
          phải được đánh giá theo các yêu cầu áp dụng của IS 17633:2022 thông qua
          kiểm tra tại phòng thí nghiệm được BIS công nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu của việc kiểm tra là xác minh rằng đồ nội thất đáp ứng các tiêu
          chuẩn quy định về an toàn, ổn định, độ bền, độ bền và hiệu suất tổng thể.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mặc dù các thông số kiểm tra chính xác có thể khác nhau tùy thuộc vào
          thiết kế sản phẩm và yêu cầu chứng nhận, nhà sản xuất thường được đánh
          giá về các đặc tính sau:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Thiết kế &amp; Tay nghề —</strong> Chất lượng kết cấu, lắp ráp,
            hoàn thiện và tính toàn vẹn tổng thể của sản phẩm được kiểm tra để sử
            dụng lâu dài an toàn.
          </li>
          <li>
            <strong>Xác minh Kích thước —</strong> Các phép đo quan trọng được kiểm
            tra theo tiêu chuẩn và thông số kỹ thuật sản phẩm đã được phê duyệt.
          </li>
          <li>
            <strong>Kiểm tra Ổn định —</strong> Xác nhận sản phẩm luôn ổn định khi
            sử dụng bình thường và phát hiện sự lật hoặc điểm yếu cấu trúc.
          </li>
          <li>
            <strong>Kiểm tra Tải Tĩnh —</strong> Xác minh khả năng chịu tải mà
            không bị hỏng, biến dạng quá mức hoặc hư hỏng.
          </li>
          <li>
            <strong>Kiểm tra Độ bền —</strong> Đánh giá khung, khớp nối và giá đỡ
            dưới ứng suất vận hành trong quá trình sử dụng thường xuyên.
          </li>
          <li>
            <strong>Đánh giá Độ bền —</strong> Kiểm tra việc duy trì hiệu suất sau
            các chu kỳ sử dụng lặp lại.
          </li>
          <li>
            <strong>Đánh giá An toàn —</strong> Loại trừ các rủi ro có thể tránh
            được từ sự không ổn định, khuyết tật hoặc các tính năng thiết kế không
            an toàn.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Bàn và Bàn làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất tìm kiếm chứng nhận BIS theo IS 17633:2022 phải tuân
          theo một quy trình chứng nhận có cấu trúc được thiết lập bởi Cục Tiêu
          chuẩn Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mặc dù các yêu cầu cụ thể có thể khác nhau tùy thuộc vào loại người nộp
          đơn và địa điểm sản xuất, quy trình chung vẫn tương tự.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 1: Đánh giá Phạm vi Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước đầu tiên liên quan đến việc xác định liệu sản phẩm có thuộc phạm vi
          của IS 17633:2022 và Lệnh Kiểm soát Chất lượng áp dụng hay không. Việc
          đánh giá kỹ thuật về thông số kỹ thuật sản phẩm, mục đích sử dụng, vật
          liệu và kết cấu thường được thực hiện trước khi bắt đầu quy trình chứng
          nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 2: Chuẩn bị Tài liệu
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất chuẩn bị tài liệu cần thiết, bao gồm thông tin công ty, chi
          tiết sản xuất, thông số kỹ thuật sản phẩm, quy trình kiểm soát chất lượng
          và các hồ sơ kỹ thuật hỗ trợ. Tài liệu đúng cách rất quan trọng vì những
          thiếu sót ở giai đoạn này có thể làm chậm chứng nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 3: Kiểm tra Sản phẩm
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Các mẫu sản phẩm được kiểm tra tại phòng thí nghiệm được BIS công nhận để
          xác minh sự tuân thủ các yêu cầu của IS 17633:2022. Báo cáo kiểm tra là
          một trong những tài liệu kỹ thuật chính hỗ trợ đơn xin chứng nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 4: Nộp Đơn
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đơn BIS được nộp cùng với các tài liệu hỗ trợ, báo cáo kiểm tra, thông
          tin sản xuất và hồ sơ quản lý chất lượng. Đơn được BIS xem xét về tính
          đầy đủ và sự tuân thủ kỹ thuật.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 5: Đánh giá Nhà máy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS có thể tiến hành thanh tra nhà máy để đánh giá:
        </p>
        <ul className={LIST_CLASS}>
          <li>Cơ sở hạ tầng sản xuất và năng lực sản xuất</li>
          <li>Hệ thống kiểm soát chất lượng và cơ sở kiểm tra nội bộ</li>
          <li>Kiểm soát nguyên liệu thô và cơ chế truy xuất nguồn gốc sản phẩm</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu là xác minh khả năng của nhà sản xuất trong việc sản xuất các
          sản phẩm tuân thủ một cách nhất quán.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 6: Đánh giá và Xem xét
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS xem xét đơn, kết quả thanh tra và báo cáo kiểm tra phòng thí nghiệm
          trước khi đưa ra quyết định chứng nhận. Bất kỳ nhận xét nào được nêu ra
          trong quá trình xem xét phải được người nộp đơn giải quyết.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Bước 7: Cấp Giấy phép BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi hoàn thành thành công tất cả các yêu cầu, BIS cấp giấy phép và ủy
          quyền cho nhà sản xuất sử dụng Dấu ISI trên bàn và bàn làm việc được
          chứng nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Nhà sản xuất Ấn Độ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các nhà sản xuất Ấn Độ thường nộp đơn theo thủ tục chứng nhận trong nước
          được BIS quy định. Quy trình thường bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kiểm tra sản phẩm tại phòng thí nghiệm được BIS công nhận</li>
          <li>Nộp đơn cùng với các tài liệu hỗ trợ</li>
          <li>Thanh tra nhà máy và đánh giá kỹ thuật bởi BIS</li>
          <li>Cấp giấy phép BIS và ủy quyền Dấu ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau khi được chứng nhận, nhà sản xuất phải tiếp tục tuân thủ các yêu cầu
          của BIS và duy trì chất lượng sản phẩm nhất quán trong suốt thời hạn giấy
          phép.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Nhà sản xuất Nước ngoài
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất nước ngoài có ý định xuất khẩu bàn và bàn làm việc sang
          Ấn Độ cũng phải nhận được chứng nhận BIS trước khi cung cấp các sản phẩm
          thuộc Lệnh Kiểm soát Chất lượng áp dụng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Quy trình chứng nhận thường bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bổ nhiệm Đại diện Ấn Độ được Ủy quyền (AIR)</li>
          <li>Kiểm tra sản phẩm và đánh giá nhà máy ở nước ngoài</li>
          <li>Xem xét tài liệu và phê duyệt chứng nhận BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất nước ngoài phải đảm bảo việc tuân thủ liên tục các yêu
          cầu của BIS để duy trì hiệu lực chứng nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS của Bàn và Bàn làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yêu cầu tài liệu có thể khác nhau tùy thuộc vào nhà sản xuất và lộ trình
          chứng nhận. Tuy nhiên, các tài liệu sau thường được yêu cầu trong quá
          trình chứng nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Tài liệu Kinh doanh và Pháp lý</h3>
        <ul className={LIST_CLASS}>
          <li>Đăng ký công ty, giấy phép sản xuất và GST (nếu có)</li>
          <li>Chi tiết người ký được ủy quyền và giấy tờ chứng minh danh tính</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Thông tin Sản xuất</h3>
        <ul className={LIST_CLASS}>
          <li>Sơ đồ quy trình, bố trí nhà máy và chi tiết máy móc</li>
          <li>Hồ sơ cơ sở hạ tầng sản xuất và năng lực</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Thông tin Sản phẩm</h3>
        <ul className={LIST_CLASS}>
          <li>Thông số kỹ thuật sản phẩm, bản vẽ kỹ thuật và danh mục</li>
          <li>Danh mục vật liệu và chi tiết vật liệu/linh kiện</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Tài liệu Kiểm soát Chất lượng</h3>
        <ul className={LIST_CLASS}>
          <li>Quy trình kiểm tra nội bộ, thanh tra và QC</li>
          <li>Hồ sơ kiểm soát chất lượng và báo cáo hiệu chuẩn thiết bị</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Tài liệu Chứng nhận</h3>
        <ul className={LIST_CLASS}>
          <li>Báo cáo kiểm tra phòng thí nghiệm và mẫu đơn BIS đã hoàn thành</li>
          <li>Tuyên bố, cam kết và các tài liệu khác do BIS quy định</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất nên đảm bảo rằng tất cả tài liệu đều chính xác, đầy đủ và
          nhất quán trước khi nộp.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Những Thách thức Thường gặp Trong quá trình Chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mặc dù quy trình chứng nhận đơn giản khi được quản lý đúng cách, nhà sản
          xuất thường gặp phải một số thách thức.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Giải thích kỹ thuật —</strong> Việc ánh xạ các yêu cầu của IS
            17633:2022 với các thiết kế sản phẩm cụ thể có thể khó khăn nếu không
            có sự hướng dẫn của chuyên gia.
          </li>
          <li>
            <strong>Lỗi kiểm tra —</strong> Khớp nối yếu, ổn định kém hoặc vấn đề
            vật liệu thường dẫn đến việc bị từ chối trong kiểm tra phòng thí
            nghiệm.
          </li>
          <li>
            <strong>Thiếu sót tài liệu —</strong> Hồ sơ không đầy đủ hoặc không khớp
            là nguyên nhân thường xuyên gây chậm trễ đơn.
          </li>
          <li>
            <strong>Tuân thủ nhà máy —</strong> Hệ thống QC, truy xuất nguồn gốc
            hoặc kiểm soát sản xuất có thể cần nâng cấp trước khi cấp giấy phép.
          </li>
          <li>
            <strong>Phối hợp quy định —</strong> Việc sắp xếp kiểm tra phòng thí
            nghiệm, thanh tra và theo dõi BIS mất thời gian nếu không có sự hỗ trợ
            có cấu trúc.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Hỗ trợ Chứng nhận BIS Chuyên nghiệp
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Làm việc với một chuyên gia tư vấn BIS giàu kinh nghiệm có thể giúp nhà
          sản xuất tránh được những chậm trễ tốn kém và hợp lý hóa hành trình chứng
          nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Hỗ trợ chuyên nghiệp thường bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Xem xét phạm vi sản phẩm và giải thích tiêu chuẩn</li>
          <li>Chuẩn bị tài liệu và nộp đơn</li>
          <li>Phối hợp kiểm tra phòng thí nghiệm và thanh tra nhà máy</li>
          <li>Tuân thủ liên tục và hỗ trợ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Điều này cho phép nhà sản xuất tập trung vào sản xuất trong khi đảm bảo
          các yêu cầu quy định được giải quyết một cách hiệu quả.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chọn Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India là một đơn vị tư vấn tuân thủ quy định hỗ trợ nhà
          sản xuất, nhà nhập khẩu, nhà xuất khẩu và doanh nghiệp với các yêu cầu
          chứng nhận và phê duyệt trên khắp Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các chuyên gia của chúng tôi cung cấp hỗ trợ toàn diện cho Chứng nhận BIS
          cho Bàn và Bàn làm việc theo IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Dịch vụ của Chúng tôi Bao gồm</h3>

        <ul className={LIST_CLASS}>
          <li>Đánh giá khả năng áp dụng sản phẩm và tư vấn tuân thủ BIS</li>
          <li>Hỗ trợ tài liệu và quản lý đơn</li>
          <li>Phối hợp kiểm tra và hỗ trợ thanh tra nhà máy</li>
          <li>Giao tiếp quy định và hỗ trợ tuân thủ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu của chúng tôi là giúp doanh nghiệp điều hướng quy trình chứng
          nhận một cách hiệu quả trong khi giảm thiểu chậm trễ và các thách thức
          tuân thủ.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Bàn và Bàn làm việc theo IS 17633:2022 là một yêu cầu
          quan trọng đối với các nhà sản xuất muốn cung cấp các sản phẩm nội thất
          tuân thủ trên thị trường Ấn Độ. Chứng nhận giúp đảm bảo rằng bàn và bàn
          làm việc đáp ứng các tiêu chuẩn đã được thiết lập liên quan đến an toàn,
          ổn định, độ bền, độ bền và chất lượng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bằng cách nhận được Chứng nhận BIS và sử dụng Dấu ISI, nhà sản xuất có
          thể chứng minh sự tuân thủ các tiêu chuẩn Ấn Độ, cải thiện niềm tin của
          khách hàng, củng cố vị thế thị trường và hỗ trợ tăng trưởng kinh doanh
          dài hạn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nếu bạn đang có kế hoạch nhận Chứng nhận BIS cho Bàn và Bàn làm việc theo
          IS 17633:2022, Sun Certifications India có thể hỗ trợ bạn với sự hỗ trợ
          tuân thủ toàn diện, giúp bạn điều hướng quy trình chứng nhận một cách hiệu
          quả và tự tin.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Chứng nhận BIS cho Bàn và Bàn làm việc (IS
          17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17633:2022 là gì?</strong>
              <br />
              IS 17633:2022 là Tiêu chuẩn Ấn Độ được công bố bởi Cục Tiêu chuẩn Ấn
              Độ (BIS) đặt ra các yêu cầu tối thiểu về hiệu suất, ổn định, độ bền và
              an toàn cho bàn và bàn làm việc dành cho người dùng trưởng thành trong
              các ứng dụng ngồi và đứng.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Chứng nhận BIS có bắt buộc cho bàn và bàn làm việc không?
              </strong>
              <br />
              Có — đối với các sản phẩm thuộc Lệnh Kiểm soát Chất lượng (QCO) Nội
              thất áp dụng. Nhà sản xuất và nhà nhập khẩu phải có giấy phép BIS hợp
              lệ và tuân thủ IS 17633:2022 trước khi sản xuất, nhập khẩu, bán hoặc
              phân phối đồ nội thất như vậy tại Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Dấu chứng nhận nào áp dụng cho bàn và bàn làm việc?
              </strong>
              <br />
              Bàn và bàn làm việc được chứng nhận được phép mang Dấu ISI theo Chương
              trình Chứng nhận Sản phẩm BIS, thể hiện rằng sản phẩm phù hợp với Tiêu
              chuẩn Ấn Độ áp dụng.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Ai có thể nộp đơn xin chứng nhận BIS?</strong>
              <br />
              Cả nhà sản xuất Ấn Độ và nhà sản xuất nước ngoài đều có thể nộp đơn,
              miễn là bàn và bàn làm việc của họ thuộc phạm vi QCO áp dụng và đáp
              ứng các yêu cầu của IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Mục đích của chứng nhận BIS là gì?</strong>
              <br />
              Chứng nhận BIS xác nhận rằng đồ nội thất đáp ứng các chuẩn mực được
              công nhận trên toàn quốc về an toàn, hiệu suất cấu trúc, độ bền và tay
              nghề — giúp bảo vệ người dùng cuối và duy trì các tiêu chuẩn chất
              lượng trên toàn thị trường.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Những sản phẩm nào được bao phủ theo IS 17633:2022?</strong>
              <br />
              Tiêu chuẩn bao gồm bàn và bàn làm việc dành cho người trưởng thành
              được sử dụng trong văn phòng, cơ sở giáo dục, cơ sở thương mại và môi
              trường nơi làm việc — bao gồm bàn văn phòng, trạm làm việc, bàn học,
              bàn hội nghị và các loại đồ nội thất tương tự.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Kiểm tra phòng thí nghiệm có bắt buộc không?</strong>
              <br />
              Có. Các mẫu sản phẩm phải được kiểm tra tại phòng thí nghiệm được BIS
              công nhận, và báo cáo kiểm tra là tài liệu quan trọng trong đơn xin
              chứng nhận để chứng minh sự tuân thủ IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Bàn và bàn làm việc nhập khẩu có thể được bán mà không có chứng
                nhận BIS không?
              </strong>
              <br />
              Không. Các sản phẩm nhập khẩu thuộc chứng nhận bắt buộc không thể được
              cung cấp hợp pháp tại Ấn Độ mà không có sự phê duyệt BIS hợp lệ. Nhà
              nhập khẩu phải đảm bảo tuân thủ tiêu chuẩn áp dụng trước khi đưa sản
              phẩm ra thị trường.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Vai trò của thanh tra nhà máy là gì?</strong>
              <br />
              BIS tiến hành đánh giá nhà máy để xác minh rằng nhà sản xuất duy trì cơ
              sở hạ tầng sản xuất, hệ thống kiểm soát chất lượng và truy xuất nguồn
              gốc sản phẩm đầy đủ để sản xuất nhất quán các bàn và bàn làm việc tuân
              thủ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India có thể giúp như thế nào?</strong>
              <br />
              Sun Certifications India cung cấp hỗ trợ toàn diện — bao gồm đánh giá
              phạm vi sản phẩm, chuẩn bị tài liệu, phối hợp kiểm tra phòng thí
              nghiệm, quản lý đơn BIS, sẵn sàng thanh tra nhà máy và hỗ trợ tuân thủ
              sau chứng nhận cho bàn và bàn làm việc theo IS 17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Chứng nhận BIS cho Bàn và Bàn làm việc - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài nguyên Liên quan
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Giấy phép Dấu ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Giấy chứng nhận BIS FMCS</a>
          </li>
        </ul>

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
                Tư vấn Chứng chỉ Tốt nhất Ấn Độ
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
                alt="Logo Chứng chỉ EPR"
                title="Logo Chứng chỉ EPR"
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
                alt="Logo LMPC"
                title="Logo LMPC"
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
