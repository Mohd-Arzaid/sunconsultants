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

const BISCertificateForChairAndStoolsVietnamese = () => {
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

export default BISCertificateForChairAndStoolsVietnamese;

const MetaTags = () => {
  const title =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung | IS 17632:2022";
  const ogTitle =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung | IS 17632:2022";
  const twitterTitle =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung | IS 17632:2022";
  const metaDescription =
    "Tìm hiểu mọi điều về Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung theo IS 17632:2022. Yêu cầu Dấu ISI, kiểm tra, quy trình chứng nhận, tài liệu, lợi ích và Câu hỏi thường gặp";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung, IS 17632:2022, Dấu ISI Ghế và Ghế đẩu, Giấy phép BIS Ghế Ghế đẩu, Chứng nhận BIS Nội thất";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632";
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
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung (IS
                    17632:2022)
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
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung (IS 17632:2022)
          – Hướng dẫn Chứng nhận Dấu ISI Hoàn chỉnh
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Giấy phép BIS cho Ghế và Ghế đẩu Mục đích Chung"
            alt="Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung - Hướng dẫn Dấu ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế và ghế đẩu mục đích chung là một trong những sản phẩm nội thất
          được sử dụng phổ biến nhất trong gia đình, văn phòng, cơ sở giáo dục,
          cơ sở y tế, cửa hàng bán lẻ, không gian công cộng và môi trường thương
          mại. Vì các sản phẩm ngồi này chịu sử dụng thường xuyên và kéo dài,
          chúng phải đáp ứng các yêu cầu cụ thể về chất lượng, an toàn, sức mạnh
          và độ bền để đảm bảo hiệu suất đáng tin cậy.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Với sự chú trọng ngày càng tăng vào chất lượng sản phẩm và an toàn người
          tiêu dùng, việc tuân thủ Tiêu chuẩn Ấn Độ đã trở thành yêu cầu quan
          trọng đối với nhà sản xuất và nhà nhập khẩu nội thất. Giấy chứng nhận
          BIS cho Ghế và Ghế đẩu Mục đích Chung theo IS 17632:2022 giúp đảm bảo
          sản phẩm đáp ứng các yêu cầu về hiệu suất và an toàn quy định trước khi
          được đưa ra thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận theo Cục Tiêu chuẩn Ấn Độ (BIS) cho phép nhà sản xuất sử
          dụng Dấu ISI trên các sản phẩm tuân thủ. Dấu ISI là bảo đảm rằng sản
          phẩm phù hợp với các tiêu chuẩn chất lượng Ấn Độ được công nhận và đã
          trải qua quy trình đánh giá bắt buộc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Khi ngành nội thất tiếp tục phát triển và các cơ quan mua sắm ngày càng
          ưu tiên sản phẩm được chứng nhận, Giấy chứng nhận BIS đã trở thành yêu
          cầu tuân thủ và tiếp cận thị trường quan trọng đối với nhà sản xuất.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Điểm nổi bật về Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung
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
                ["Tên sản phẩm", "Ghế và Ghế đẩu Mục đích Chung"],
                ["Tiêu chuẩn Ấn Độ áp dụng", "IS 17632:2022"],
                ["Loại chứng nhận", "Chứng nhận Sản phẩm BIS"],
                [
                  "Chương trình Chứng nhận",
                  "Chương trình I (Chứng nhận Dấu ISI)",
                ],
                ["Dấu hiệu áp dụng", "Dấu ISI"],
                ["Cơ quan quản lý", "Bureau of Indian Standards (BIS)"],
                ["Bộ ngành áp dụng", "Bộ Thương mại và Công nghiệp"],
                [
                  "Yêu cầu Tuân thủ",
                  "Bắt buộc theo QCO Nội thất áp dụng (Quality Control Order)",
                ],
                ["Danh mục sản phẩm", "Nội thất"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Chương trình Chứng nhận" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Chương trình I (Chứng nhận Dấu ISI)
                      </a>
                    ) : particular === "Yêu cầu Tuân thủ" ? (
                      <>
                        Bắt buộc theo{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Nội thất (Quality Control Order)</strong>
                        </a>
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
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung là quy trình đánh
          giá sự phù hợp được thực hiện theo Chương trình Chứng nhận Sản phẩm
          BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu của chứng nhận là xác minh sản phẩm tuân thủ các yêu cầu quy
          định trong IS 17632:2022. Sau khi được cấp chứng nhận, nhà sản xuất được
          phép sử dụng Dấu ISI trên sản phẩm của mình.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Quy trình chứng nhận đánh giá nhiều khía cạnh hiệu suất sản phẩm, bao
          gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sức mạnh</li>
          <li>Ổn định</li>
          <li>Độ bền</li>
          <li>Hiệu suất cấu trúc</li>
          <li>Yêu cầu an toàn</li>
          <li>Chất lượng vật liệu</li>
          <li>Tay nghề gia công</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận giúp đảm bảo các sản phẩm ngồi cung cấp trên thị trường Ấn
          Độ đáp ứng các tiêu chuẩn chất lượng và an toàn đã được thiết lập.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tổng quan về IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 là Tiêu chuẩn Ấn Độ quy định các yêu cầu đối với Ghế và
          Ghế đẩu Mục đích Chung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn này thiết lập các yêu cầu liên quan đến an toàn, sức mạnh,
          độ bền, ổn định và hiệu suất tổng thể của nội thất ngồi dùng cho mục
          đích chung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn áp dụng cho:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ghế và ghế đẩu được sản xuất hoàn chỉnh</li>
          <li>Ghế và ghế đẩu được gia công lắp ráp</li>
          <li>Sản phẩm lắp ráp sẵn sau khi lắp ráp</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục đích của tiêu chuẩn là đảm bảo sản phẩm nội thất cung cấp hiệu suất
          an toàn, đáng tin cậy và bền bỉ trong suốt thời gian sử dụng dự kiến.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu chính theo IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về sức mạnh</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế và ghế đẩu mục đích chung phải có sức mạnh cấu trúc đầy đủ để chịu
          được các điều kiện tải trọng dự kiến trong quá trình sử dụng bình
          thường.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về ổn định</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nội thất phải duy trì ổn định trong quá trình sử dụng dự kiến và không
          gây rủi ro lật ngã không cần thiết.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu về độ bền</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sản phẩm phải có khả năng duy trì tính toàn vẹn cấu trúc và hiệu suất
          qua nhiều chu kỳ sử dụng lặp lại.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Yêu cầu an toàn</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn bao gồm các yêu cầu liên quan đến an toàn nhằm giảm thiểu
          rủi ro gắn với việc sử dụng nội thất.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Chất lượng vật liệu và tay nghề</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chất lượng vật liệu, phương pháp sản xuất, cách lắp ráp, mối nối và hoàn
          thiện đóng vai trò quan trọng trong việc tuân thủ tiêu chuẩn.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Cân nhắc công thái học</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn kết hợp các yếu tố liên quan đến hiệu suất góp phần vào sự
          thoải mái của người dùng và chức năng thực tế.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sản phẩm thuộc phạm vi IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này nói chung áp dụng cho:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ghế mục đích chung</li>
          <li>Ghế đẩu mục đích chung</li>
          <li>Nội thất ngồi cố định dùng cho mục đích chung</li>
          <li>Sản phẩm ngồi lắp ráp sẵn sau khi lắp ráp</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất nên xem xét kỹ phạm vi của tiêu chuẩn để xác định mức độ áp
          dụng đối với sản phẩm của mình.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Cũng xem các Sản phẩm Nội thất thuộc Chứng nhận BIS Bắt buộc —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Chứng nhận BIS cho nội thất</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Giấy chứng nhận BIS có bắt buộc đối với Ghế và Ghế đẩu Mục đích Chung
          không?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Có. Sản phẩm nội thất thuộc phạm vi Lệnh Kiểm soát Chất lượng Nội thất
          (QCO) áp dụng phải tuân thủ Tiêu chuẩn Ấn Độ liên quan và có Giấy chứng
          nhận BIS trước khi được sản xuất, nhập khẩu, bán, phân phối hoặc cung
          cấp trên thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất thuộc khung pháp lý áp dụng phải có giấy phép BIS và tuân
          thủ các yêu cầu ghi nhãn do BIS quy định.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu kiểm tra cho Giấy chứng nhận BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trước khi cấp chứng nhận, mẫu sản phẩm phải được đánh giá thông qua
          kiểm tra tại các phòng thí nghiệm được công nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kiểm tra thường tập trung vào các thông số sau:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Đánh giá hiệu suất cấu trúc —</strong> Xác định ghế hoặc ghế
            đẩu có thể chịu được điều kiện sử dụng bình thường mà không bị hỏng
            hay không.
          </li>
          <li>
            <strong>Kiểm tra ổn định —</strong> Đánh giá nội thất có duy trì ổn
            định trong quá trình sử dụng dự kiến và chống lật ngã hay không.
          </li>
          <li>
            <strong>Đánh giá sức mạnh —</strong> Đánh giá khả năng chịu tải và
            tính toàn vẹn cấu trúc của khung, mối nối và bộ phận hỗ trợ.
          </li>
          <li>
            <strong>Đánh giá độ bền —</strong> Kiểm tra khả năng duy trì hiệu
            suất sau nhiều chu kỳ sử dụng lặp lại trong suốt tuổi thọ dịch vụ của
            sản phẩm.
          </li>
          <li>
            <strong>Đánh giá an toàn —</strong> Xác định các mối nguy tiềm ẩn và
            xác minh tuân thủ các yêu cầu an toàn quy định.
          </li>
          <li>
            <strong>Kiểm tra tay nghề —</strong> Xem xét chất lượng cấu tạo, hoàn
            thiện, tính toàn vẹn lắp ráp và tiêu chuẩn gia công tổng thể.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu ghi nhãn sản phẩm
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sản phẩm được chứng nhận theo IS 17632:2022 thường phải mang thông tin
          nhận dạng như:
        </p>

        <ul className={LIST_CLASS}>
          <li>Tên hoặc nhãn hiệu của nhà sản xuất</li>
          <li>Mã nhận dạng mẫu hoặc thiết kế</li>
          <li>Số lô hoặc số lô sản xuất</li>
          <li>Ngày sản xuất</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dấu ISI chỉ được áp dụng sau khi có giấy phép BIS hợp lệ.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Bước 1: Đánh giá phạm vi sản phẩm</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bước đầu tiên là xác định sản phẩm có thuộc phạm vi IS 17632:2022 và QCO
          Nội thất áp dụng hay không.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Xem xét loại ghế hoặc ghế đẩu, mục đích sử dụng, vật liệu và cấu tạo
          trước khi bắt đầu quy trình chứng nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 2: Chuẩn bị tài liệu</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất chuẩn bị tài liệu kỹ thuật và tuân thủ cần thiết cho chứng
          nhận, bao gồm hồ sơ công ty, thông tin nhà máy, thông số sản phẩm và quy
          trình kiểm soát chất lượng.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Tài liệu đầy đủ và chính xác giúp tránh chậm trễ không cần thiết trong
          quá trình BIS xem xét.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 3: Kiểm tra sản phẩm</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mẫu đại diện được kiểm tra tại phòng thí nghiệm được BIS công nhận để
          xác minh tuân thủ các yêu cầu của IS 17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Báo cáo kiểm tra phòng thí nghiệm là tài liệu kỹ thuật quan trọng hỗ trợ
          đơn đăng ký chứng nhận.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 4: Nộp đơn đăng ký BIS</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đơn đăng ký chứng nhận được nộp kèm tài liệu hỗ trợ, báo cáo kiểm tra và
          thông tin sản xuất.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS xem xét đơn đăng ký về tính đầy đủ và tuân thủ kỹ thuật trước khi tiếp
          tục.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 5: Kiểm tra nhà máy</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS có thể đánh giá cơ sở sản xuất, hệ thống sản xuất và quy trình kiểm
          soát chất lượng để xác minh khả năng sản xuất sản phẩm tuân thủ một cách
          nhất quán.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Đánh giá này thường bao gồm hạ tầng sản xuất, hệ thống QC, kiểm soát
          nguyên liệu thô và khả năng truy xuất sản phẩm.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 6: Xem xét kỹ thuật</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Đơn đăng ký, báo cáo kiểm tra và kết quả kiểm tra được BIS xem xét trước
          khi đưa ra quyết định chứng nhận.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Mọi nhận xét hoặc thiếu sót phát sinh trong quá trình xem xét phải được
          người nộp đơn khắc phục.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Bước 7: Cấp giấy phép</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Khi tuân thủ đạt yêu cầu, BIS cấp giấy phép và cho phép sử dụng Dấu ISI
          trên ghế và ghế đẩu mục đích chung được chứng nhận.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất phải tiếp tục tuân thủ các yêu cầu của BIS trong suốt thời
          hạn giấy phép.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Giấy chứng nhận BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Tuân thủ quy định Ấn Độ —</strong> Đáp ứng yêu cầu chất lượng
            và an toàn bắt buộc theo QCO Nội thất áp dụng.
          </li>
          <li>
            <strong>Tiếp cận thị trường hợp pháp —</strong> Cung cấp ghế và ghế
            đẩu được chứng nhận tại Ấn Độ theo các yêu cầu quy định áp dụng.
          </li>
          <li>
            <strong>Nâng cao uy tín sản phẩm —</strong> Dấu ISI thể hiện sự phù
            hợp với các tiêu chuẩn Ấn Độ được công nhận.
          </li>
          <li>
            <strong>Tăng niềm tin khách hàng —</strong> Người tiêu dùng và người
            mua tổ chức ưu tiên sản phẩm được đánh giá theo các tiêu chuẩn đã
            thiết lập.
          </li>
          <li>
            <strong>Lợi thế cạnh tranh —</strong> Được chấp nhận rộng rãi hơn
            trong quy trình mua sắm thương mại và chính phủ.
          </li>
          <li>
            <strong>Cải thiện danh tiếng thương hiệu —</strong> Thể hiện cam kết
            về chất lượng sản phẩm, an toàn và độ tin cậy lâu dài.
          </li>
          <li>
            <strong>Hỗ trợ doanh nghiệp vừa và nhỏ —</strong> Giúp nhà sản xuất
            quy mô nhỏ và vừa củng cố sự hiện diện trên thị trường và xây dựng
            niềm tin khách hàng.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức thường gặp trong quá trình chứng nhận
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Thất bại kiểm tra sản phẩm —</strong> Thiếu sót thiết kế hoặc
            sản xuất có thể dẫn đến không tuân thủ trong quá trình đánh giá phòng
            thí nghiệm.
          </li>
          <li>
            <strong>Vấn đề tài liệu —</strong> Hồ sơ không đầy đủ hoặc không nhất
            quán thường gây chậm trễ chứng nhận.
          </li>
          <li>
            <strong>Khoảng trống tuân thủ sản xuất —</strong> Hệ thống kiểm soát
            chất lượng có thể cần cải thiện trước khi cấp chứng nhận.
          </li>
          <li>
            <strong>Phức tạp quy định —</strong> Quản lý kiểm tra, thanh tra và
            thủ tục chứng nhận có thể khó khăn nếu không có hướng dẫn chuyên
            gia.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao chọn Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India hỗ trợ nhà sản xuất, nhà nhập khẩu, nhà xuất
          khẩu và doanh nghiệp trong các yêu cầu tuân thủ quy định trên toàn Ấn
          Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dịch vụ của chúng tôi bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Đánh giá khả năng áp dụng sản phẩm</li>
          <li>Tư vấn chứng nhận BIS</li>
          <li>Hỗ trợ tài liệu</li>
          <li>Phối hợp kiểm tra phòng thí nghiệm</li>
          <li>Chuẩn bị kiểm tra nhà máy</li>
          <li>Quản lý đơn đăng ký</li>
          <li>Hỗ trợ tuân thủ quy định</li>
          <li>Hỗ trợ sau chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu của chúng tôi là giúp khách hàng điều hướng các yêu cầu chứng
          nhận một cách hiệu quả và đạt tuân thủ với thời gian chậm trễ tối
          thiểu.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích Chung theo IS
          17632:2022 đóng vai trò quan trọng trong việc đảm bảo chất lượng sản
          phẩm, an toàn, sức mạnh, ổn định và độ bền. Chứng nhận giúp nhà sản
          xuất chứng minh tuân thủ Tiêu chuẩn Ấn Độ, đồng thời củng cố niềm tin
          khách hàng và hỗ trợ tiếp cận thị trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Khi nhu cầu về sản phẩm nội thất đảm bảo chất lượng tiếp tục tăng, Giấy
          chứng nhận BIS và Dấu ISI cung cấp sự đảm bảo có giá trị cho người tiêu
          dùng, tổ chức và cơ quan mua sắm. Nhà sản xuất đầu tư vào tuân thủ không
          chỉ đáp ứng yêu cầu quy định mà còn nâng cao khả năng cạnh tranh và uy
          tín thị trường lâu dài.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nếu bạn đang lên kế hoạch có Giấy chứng nhận BIS cho Ghế và Ghế đẩu
          Mục đích Chung theo IS 17632:2022, Sun Certifications India có thể cung
          cấp hướng dẫn chuyên gia và hỗ trợ tuân thủ toàn diện trong suốt quy
          trình chứng nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Giấy chứng nhận BIS cho Ghế và Ghế đẩu Mục đích
          Chung (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. IS 17632:2022 là gì?</strong>
              <br />
              IS 17632:2022 là Tiêu chuẩn Ấn Độ quy định các yêu cầu đối với Ghế
              và Ghế đẩu Mục đích Chung.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Giấy chứng nhận BIS có bắt buộc đối với Ghế và Ghế đẩu Mục
                đích Chung không?
              </strong>
              <br />
              Sản phẩm thuộc phạm vi Lệnh Kiểm soát Chất lượng Nội thất áp dụng
              phải tuân thủ các yêu cầu chứng nhận BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Dấu ISI là gì?</strong>
              <br />
              Dấu ISI là dấu chứng nhận tiêu chuẩn được cấp theo Chương trình
              Chứng nhận Sản phẩm BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Ai có thể đăng ký Giấy chứng nhận BIS?</strong>
              <br />
              Cả nhà sản xuất Ấn Độ và nhà sản xuất nước ngoài đều có thể đăng
              ký chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Giấy chứng nhận BIS có yêu cầu kiểm tra sản phẩm không?</strong>
              <br />
              Có. Kiểm tra sản phẩm là thành phần quan trọng của quy trình chứng
              nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Ghế lắp ráp sẵn có thuộc phạm vi IS 17632:2022 không?
              </strong>
              <br />
              Có. Tiêu chuẩn áp dụng cho sản phẩm lắp ráp sẵn sau khi lắp ráp.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Những sản phẩm nào bị loại trừ khỏi phạm vi IS 17632:2022?
              </strong>
              <br />
              Các sản phẩm như ghế ngả, ghế bập bênh, ghế nghiêng, ghế sofa và
              một số sản phẩm ngồi chuyên dụng nhất định thường bị loại trừ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Lợi ích của việc có Giấy chứng nhận BIS là gì?</strong>
              <br />
              Lợi ích bao gồm tuân thủ quy định, nâng cao uy tín sản phẩm, tăng
              niềm tin khách hàng và được thị trường chấp nhận tốt hơn.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Nhà sản xuất nước ngoài có thể có Giấy chứng nhận BIS không?
              </strong>
              <br />
              Có. Nhà sản xuất nước ngoài có thể đăng ký qua lộ trình chứng nhận
              BIS áp dụng cho nhà sản xuất ở nước ngoài.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India có thể hỗ trợ như thế nào?</strong>
              <br />
              Sun Certifications India cung cấp hỗ trợ toàn diện cho chứng nhận
              BIS, bao gồm tài liệu, phối hợp kiểm tra, quản lý đơn đăng ký và hỗ
              trợ tuân thủ.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Giấy chứng nhận BIS cho Ghế và Ghế đẩu - IS 17632:2022 PDF"
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
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Giấy chứng nhận ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Giấy chứng nhận BIS cho Nhà sản xuất Nước ngoài
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadVietnamese />

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
              Dịch vụ của chúng tôi
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
