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
                    Chứng nhận BIS cho Ghế làm việc (IS 17631:2022)
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
          Chứng nhận BIS cho Ghế làm việc (IS 17631:2022) – Hướng dẫn Chứng nhận
          Dấu ISI Hoàn chỉnh
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Giấy phép BIS cho Ghế làm việc"
            alt="Chứng nhận BIS cho Ghế làm việc - Hướng dẫn Dấu ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế làm việc đã trở thành một phần thiết yếu trong môi trường làm việc
          hiện đại, các cơ sở giáo dục, văn phòng chính phủ, không gian làm việc
          chung và văn phòng tại nhà. Khi các tổ chức ngày càng chú trọng đến sự
          thoải mái của nhân viên, năng suất, công thái học nơi làm việc và phúc
          lợi nghề nghiệp, nhu cầu về ghế làm việc chất lượng cao không ngừng
          tăng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Một chiếc ghế thiết kế kém có thể ảnh hưởng tiêu cực đến tư thế, sự thoải
          mái và năng suất. Vì vậy, chất lượng, an toàn, độ bền và hiệu suất công
          thái học là những yếu tố quan trọng đối với nhà sản xuất, người mua và
          các cơ quan mua sắm. Để đảm bảo tiêu chuẩn chất lượng đồng nhất trong
          ngành, Cục Tiêu chuẩn Ấn Độ (BIS) đã ban hành IS 17631:2022, Tiêu chuẩn
          Ấn Độ áp dụng cho ghế làm việc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các nhà sản xuất thuộc phạm vi khung pháp lý áp dụng phải có Chứng nhận
          BIS và sử dụng Dấu ISI trên sản phẩm tuân thủ. Chứng nhận BIS chứng minh
          rằng ghế làm việc đã được đánh giá theo các yêu cầu quy định về an toàn,
          sức mạnh, ổn định, độ bền và hiệu suất công thái học.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hướng dẫn toàn diện này giải thích mọi điều nhà sản xuất, nhà nhập khẩu,
          thương hiệu nội thất, chuyên gia mua sắm và chủ doanh nghiệp cần biết về
          Chứng nhận BIS cho Ghế làm việc theo IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tổng quan nhanh về Chứng nhận BIS cho Ghế làm việc
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
                ["Sản phẩm", "Ghế làm việc"],
                ["Tiêu chuẩn Ấn Độ áp dụng", "IS 17631:2022"],
                ["Loại Chứng nhận", "Chứng nhận Sản phẩm BIS"],
                [
                  "Chương trình Chứng nhận Áp dụng",
                  "Chương trình I (Chứng nhận Dấu ISI)",
                ],
                ["Dấu hiệu Áp dụng", "Dấu ISI"],
                ["Cơ quan Quản lý", "Bureau of Indian Standards (BIS)"],
                ["Bộ ngành Áp dụng", "Bộ Thương mại và Công nghiệp"],
                [
                  "Yêu cầu Tuân thủ",
                  "Bắt buộc theo QCO Nội thất áp dụng (Quality Control Order)",
                ],
                [
                  "Đối tượng Đủ điều kiện",
                  "Nhà sản xuất Ấn Độ và Nhà sản xuất Nước ngoài ",
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
                    {particular === "Chương trình Chứng nhận Áp dụng" ? (
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
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Nội thất áp dụng (Quality Control Order)</strong>
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
          Chứng nhận BIS cho Ghế làm việc là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Ghế làm việc là quy trình đánh giá sự phù hợp được
          thực hiện theo Chương trình Chứng nhận Sản phẩm của Cục Tiêu chuẩn Ấn
          Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục đích của chứng nhận là xác minh rằng ghế làm việc tuân thủ các yêu
          cầu quy định trong IS 17631:2022. Sau khi chứng nhận thành công, nhà sản
          xuất được phép sử dụng Dấu ISI trên sản phẩm của mình.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Quy trình chứng nhận đánh giá nhiều khía cạnh hiệu suất và an toàn của ghế
          làm việc, bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Thiết kế công thái học</li>
          <li>Tính toàn vẹn cấu trúc</li>
          <li>Ổn định</li>
          <li>Độ bền</li>
          <li>Yêu cầu an toàn</li>
          <li>Chất lượng gia công</li>
          <li>Hiệu suất sản phẩm</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dấu ISI đảm bảo rằng sản phẩm đã được đánh giá theo các tiêu chuẩn Ấn Độ
          được công nhận và đáp ứng các yêu cầu chất lượng quy định.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao Chứng nhận BIS quan trọng đối với Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ghế làm việc được sử dụng trong thời gian dài tại văn phòng, cơ sở giáo
          dục, cơ sở thương mại và không gian làm việc tại nhà. Vì người dùng dành
          phần lớn thời gian trong ngày ở tư thế ngồi, chất lượng và hiệu suất công
          thái học của những chiếc ghế này ảnh hưởng trực tiếp đến sự thoải mái và
          hiệu quả nơi làm việc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chứng nhận BIS giúp đảm bảo rằng ghế làm việc được chứng nhận:
        </p>

        <ul className={LIST_CLASS}>
          <li>Đáp ứng các yêu cầu an toàn quy định</li>
          <li>Cung cấp hiệu suất đáng tin cậy</li>
          <li>Có sức mạnh cấu trúc phù hợp</li>
          <li>Duy trì ổn định trong quá trình sử dụng</li>
          <li>Hỗ trợ độ bền lâu dài</li>
          <li>Tuân thủ tiêu chuẩn chất lượng Ấn Độ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đối với nhà sản xuất, chứng nhận giúp chứng minh chất lượng sản phẩm đồng
          thời hỗ trợ tuân thủ quy định và được thị trường chấp nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tổng quan về IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 là Tiêu chuẩn Ấn Độ quy định các yêu cầu đối với ghế làm
          việc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tiêu chuẩn này thiết lập các yêu cầu liên quan đến:
        </p>

        <ul className={LIST_CLASS}>
          <li>An toàn</li>
          <li>Sức mạnh</li>
          <li>Ổn định</li>
          <li>Độ bền</li>
          <li>Các yếu tố công thái học</li>
          <li>Hiệu suất chức năng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mục tiêu là đảm bảo ghế làm việc có khả năng cung cấp hiệu suất an toàn
          và đáng tin cậy trong quá trình sử dụng kéo dài tại môi trường làm việc.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Phạm vi của IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Theo tiêu chuẩn, IS 17631:2022 bao gồm ghế làm việc và áp dụng cho:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ghế làm việc được sản xuất hoàn chỉnh</li>
          <li>Ghế làm việc được lắp ráp</li>
          <li>Ghế làm việc lắp ráp sẵn sau khi lắp ráp</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các yêu cầu của tiêu chuẩn áp dụng cho sản phẩm đã lắp ráp dự kiến sử
          dụng.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Các loại Ghế làm việc thuộc phạm vi IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tùy theo thiết kế sản phẩm và ứng dụng dự kiến, tiêu chuẩn có thể áp
          dụng cho nhiều loại ghế làm việc, bao gồm:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Ghế văn phòng —</strong> Ghế sử dụng tại văn phòng doanh nghiệp,
            phòng ban hành chính và môi trường làm việc chuyên nghiệp.
          </li>
          <li>
            <strong>Ghế công việc —</strong> Ghế được thiết kế cho công việc hàng
            ngày tại bàn, trạm làm việc và các nhiệm vụ ngồi thường xuyên.
          </li>
          <li>
            <strong>Ghế làm việc điều chỉnh được —</strong> Mẫu có tính năng điều
            chỉnh chiều cao, nghiêng hoặc các tính năng khác để cải thiện sự thoải
            mái và công thái học.
          </li>
          <li>
            <strong>Ghế làm việc tổ chức —</strong> Ghế cung cấp cho trường học,
            cao đẳng, văn phòng chính phủ và các cơ sở thương mại.
          </li>
          <li>
            <strong>Ghế văn phòng tại nhà —</strong> Ghế làm việc được thiết kế cho
            làm việc từ xa, freelancer và thiết lập văn phòng tại nhà.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Xem xét kỹ thiết kế sản phẩm, cơ chế và mục đích sử dụng để xác nhận ghế
          của bạn có thuộc phạm vi IS 17631:2022 hay không.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
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
          Yêu cầu Chính theo IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tiêu chuẩn tập trung vào nhiều đặc tính hiệu suất quan trọng góp phần
          đảm bảo chất lượng và an toàn của ghế làm việc.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Thiết kế công thái học —</strong> Giải quyết sự thoải mái của
            người dùng, hỗ trợ ghế và tựa lưng, khả năng điều chỉnh và tư thế đúng
            để giảm mệt mỏi và cải thiện năng suất nơi làm việc.
          </li>
          <li>
            <strong>Yêu cầu về sức mạnh —</strong> Khung, mối nối và cấu trúc hỗ trợ
            phải chịu được sử dụng bình thường mà không bị hỏng hoặc mất tính toàn
            vẹn.
          </li>
          <li>
            <strong>Yêu cầu về ổn định —</strong> Ghế phải chống lật và duy trì ổn
            định trong quá trình sử dụng ngồi thường xuyên và di chuyển.
          </li>
          <li>
            <strong>Yêu cầu về độ bền —</strong> Sản phẩm phải hoạt động ổn định sau
            quá trình sử dụng hàng ngày kéo dài và lặp lại trong suốt tuổi thọ dự
            kiến.
          </li>
          <li>
            <strong>Yêu cầu an toàn —</strong> Thiết kế và cấu trúc phải giảm thiểu
            các mối nguy có thể tránh được từ sự không ổn định, lỗi hoặc cấu trúc
            không an toàn.
          </li>
          <li>
            <strong>Chất lượng vật liệu —</strong> Linh kiện và hoàn thiện phải đáp
            ứng tiêu chuẩn chất lượng hỗ trợ hiệu suất an toàn, bền bỉ và đáng tin
            cậy.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Yêu cầu Kiểm tra cho Chứng nhận BIS Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Trước khi cấp chứng nhận, mẫu sản phẩm được đánh giá thông qua kiểm tra
          tại phòng thí nghiệm được công nhận. Kiểm tra giúp xác minh tuân thủ các
          yêu cầu quy định trong IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Các Kiểm tra Chính được Thực hiện</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Thiết kế và tay nghề"],
                ["7.3.1", "Lật ngửa Cạnh Trước"],
                ["7.3.2", "Lật ngửa Về Phía Trước"],
                [
                  "7.3.3",
                  "Lật ngửa Về Phía Trước cho Ghế có Chỗ Đặt Chân",
                ],
                [
                  "7.3.4",
                  "Lật ngửa Bên cho Ghế Không có Tay vịn",
                ],
                [
                  "7.3.5",
                  "Lật ngửa Bên cho Ghế Có Tay vịn",
                ],
                [
                  "7.3.6",
                  "Lật ngửa Về Phía Sau cho Ghế Không có Lưng Tựa",
                ],
                ["7.4.1", "Kiểm tra Tải Tĩnh Cạnh Trước Ghế"],
                ["7.4.2", "Kiểm tra Tải Tĩnh Kết hợp Ghế và Lưng"],
                ["7.4.3", "Kiểm tra Tải Tĩnh Xuống Tay vịn — Trung tâm"],
                ["7.4.4", "Kiểm tra Tải Tĩnh Xuống Tay vịn — Phía Trước"],
                ["7.4.5", "Kiểm tra Tải Tĩnh Bên Tay vịn"],
                ["7.4.6", "Kiểm tra Tải Tĩnh Chỗ Đặt Chân"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quy trình Chứng nhận BIS cho Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất muốn có Chứng nhận BIS theo IS 17631:2022 phải hoàn thành
          quy trình chứng nhận có cấu trúc.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Bước 1: Đánh giá Khả năng Áp dụng Sản phẩm —</strong> Xác nhận
            ghế làm việc có thuộc IS 17631:2022 và QCO Nội thất áp dụng trước khi
            bắt đầu chứng nhận.
          </li>
          <li>
            <strong>Bước 2: Chuẩn bị Tài liệu —</strong> Tổng hợp hồ sơ kỹ thuật,
            sản xuất, kiểm soát chất lượng và pháp lý cần thiết cho BIS xem xét.
          </li>
          <li>
            <strong>Bước 3: Kiểm tra Sản phẩm —</strong> Gửi mẫu đến phòng thí
            nghiệm được BIS công nhận để đánh giá theo IS 17631:2022.
          </li>
          <li>
            <strong>Bước 4: Nộp Đơn đăng ký —</strong> Nộp đơn BIS kèm báo cáo kiểm
            tra, thông tin nhà máy và tài liệu tuân thủ hỗ trợ.
          </li>
          <li>
            <strong>Bước 5: Kiểm tra Nhà máy —</strong> BIS đánh giá hệ thống sản
            xuất, quy trình QC và khả năng truy xuất tại cơ sở sản xuất.
          </li>
          <li>
            <strong>Bước 6: Xem xét Kỹ thuật —</strong> BIS đánh giá đơn đăng ký,
            kết quả phòng thí nghiệm và kết quả kiểm tra trước khi phê duyệt cuối
            cùng.
          </li>
          <li>
            <strong>Bước 7: Cấp Giấy phép BIS —</strong> Khi tuân thủ thành công,
            BIS cấp giấy phép và cho phép sử dụng Dấu ISI trên ghế làm việc được
            chứng nhận.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Nhà sản xuất Ấn Độ
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nhà sản xuất Ấn Độ thường đăng ký qua lộ trình chứng nhận trong nước. Quy
          trình thường bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kiểm tra sản phẩm tại phòng thí nghiệm được BIS công nhận</li>
          <li>Xem xét tài liệu và nộp đơn đăng ký BIS</li>
          <li>Đánh giá nhà máy và xem xét kỹ thuật bởi BIS</li>
          <li>Cấp giấy phép BIS và ủy quyền Dấu ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sau chứng nhận, nhà sản xuất phải duy trì tuân thủ liên tục với các yêu
          cầu giám sát, đánh dấu và chất lượng của BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Nhà sản xuất Nước ngoài
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nhà sản xuất nước ngoài có ý định xuất khẩu ghế làm việc sang Ấn Độ cũng
          phải có Chứng nhận BIS trước khi cung cấp sản phẩm thuộc phạm vi chứng
          nhận bắt buộc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Quy trình thường bao gồm:
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Bổ nhiệm Đại diện Ấn Độ được ủy quyền (AIR – Authorized Indian
            Representative)
          </li>
          <li>Kiểm tra sản phẩm tại nước ngoài và đánh giá nhà máy</li>
          <li>Xem xét đơn BIS và phê duyệt chứng nhận</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Điều này đảm bảo sản phẩm nhập khẩu đáp ứng cùng yêu cầu chất lượng và an
          toàn áp dụng cho nhà sản xuất trong nước.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài liệu Cần thiết cho Chứng nhận BIS Ghế làm việc
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tài liệu là yếu tố quan trọng trong quy trình chứng nhận BIS cho ghế làm
          việc. Yêu cầu có thể khác nhau tùy theo người nộp đơn là nhà sản xuất Ấn
          Độ, nhà sản xuất nước ngoài hay nhà nhập khẩu, và theo chương trình chứng
          nhận được áp dụng. Hồ sơ không đầy đủ hoặc không nhất quán là một trong
          những nguyên nhân phổ biến gây chậm trễ đơn đăng ký.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Các tài liệu sau thường được yêu cầu trong quá trình chứng nhận BIS ghế
          làm việc theo IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Tài liệu Doanh nghiệp —</strong> Giấy chứng nhận đăng ký công
            ty, giấy phép sản xuất (nếu có), đăng ký GST, giấy tờ chứng minh địa
            chỉ kinh doanh, và thông tin người ký được ủy quyền kèm giấy tờ tùy
            thân và chứng minh địa chỉ.
          </li>
          <li>
            <strong>Tài liệu Sản xuất —</strong> Sơ đồ bố trí nhà máy, lưu đồ quy
            trình sản xuất, danh sách máy móc sản xuất và thiết bị kiểm tra, cùng
            thông tin cơ sở hạ tầng sản xuất và công suất lắp đặt.
          </li>
          <li>
            <strong>Tài liệu Sản phẩm —</strong> Thông số kỹ thuật sản phẩm, bản
            vẽ kỹ thuật hoặc kỹ sư, catalogue hoặc danh sách mẫu, bảng vật liệu
            (BOM), và chi tiết nguyên liệu, linh kiện và bộ phận quan trọng sử
            dụng trong ghế làm việc.
          </li>
          <li>
            <strong>Tài liệu Kiểm soát Chất lượng —</strong> Quy trình kiểm soát
            chất lượng bằng văn bản, hồ sơ kiểm tra nguyên liệu đầu vào, báo cáo
            kiểm tra trong quá trình và thành phẩm, phương pháp kiểm tra nội bộ, và
            giấy chứng nhận hiệu chuẩn thiết bị đo và kiểm tra.
          </li>
          <li>
            <strong>Tài liệu Chứng nhận —</strong> Báo cáo kiểm tra từ phòng thí
            nghiệm được BIS công nhận, mẫu đơn BIS đã điền đầy đủ, tuyên bố và cam
            kết, mẫu nhãn hoặc đánh dấu, và mọi tài liệu bổ sung do BIS quy định
            cho lộ trình chứng nhận cụ thể.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tất cả tài liệu phải chính xác, đầy đủ và nhất quán với thông tin sản
          phẩm nộp trong đơn BIS. Nhà sản xuất nên xem xét kỹ yêu cầu tài liệu trước
          khi nộp để tránh chậm trễ không cần thiết trong xử lý chứng nhận.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Ghế làm việc
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Tuân thủ Quy định —</strong> Đáp ứng tiêu chuẩn Ấn Độ bắt buộc
            và yêu cầu QCO để sản xuất và bán hàng hợp pháp.
          </li>
          <li>
            <strong>Tiếp cận Thị trường Hợp pháp —</strong> Cung cấp ghế làm việc
            được chứng nhận tại Ấn Độ mà không gặp rủi ro quy định đối với các danh
            mục sản phẩm được bao phủ.
          </li>
          <li>
            <strong>Nâng cao Uy tín —</strong> Dấu ISI thể hiện chất lượng, an
            toàn và sự phù hợp đã được xác minh với IS 17631:2022.
          </li>
          <li>
            <strong>Niềm tin Khách hàng —</strong> Người mua doanh nghiệp, tổ chức
            và người dùng cuối tin tưởng sản phẩm được kiểm tra theo tiêu chuẩn quốc
            gia.
          </li>
          <li>
            <strong>Mua sắm Tốt hơn —</strong> Cải thiện khả năng tham gia đấu thầu
            chính phủ, tổ chức và thương mại khối lượng lớn.
          </li>
          <li>
            <strong>Danh tiếng Thương hiệu Mạnh hơn —</strong> Thể hiện cam kết về
            chất lượng, công thái học và độ tin cậy sản phẩm lâu dài.
          </li>
          <li>
            <strong>Cải thiện Kiểm soát Chất lượng —</strong> Khuyến khích hệ thống
            QC có cấu trúc, khả năng truy xuất và tiêu chuẩn sản xuất nhất quán.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Thách thức Thường gặp trong Quá trình Chứng nhận BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Diễn giải kỹ thuật —</strong> Ánh xạ các điều khoản IS
            17631:2022 với thiết kế, cơ chế và biến thể ghế cụ thể có thể phức
            tạp.
          </li>
          <li>
            <strong>Thất bại kiểm tra —</strong> Khung yếu, ổn định kém hoặc vấn đề
            cơ chế thường dẫn đến bị từ chối trong kiểm tra lật hoặc tải.
          </li>
          <li>
            <strong>Thiếu sót tài liệu —</strong> Bản vẽ không khớp, hồ sơ QC không
            đầy đủ hoặc thiếu tuyên bố thường làm chậm phê duyệt.
          </li>
          <li>
            <strong>Tuân thủ nhà máy —</strong> Kiểm soát sản xuất, truy xuất và
            kiểm tra nội bộ có thể cần nâng cấp trước khi cấp giấy phép.
          </li>
          <li>
            <strong>Phối hợp quy định —</strong> Đồng bộ kiểm tra phòng thí nghiệm,
            kiểm tra BIS và các yêu cầu theo dõi mất thời gian nếu không có hỗ trợ
            chuyên gia.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tại sao chọn Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India là công ty tư vấn tuân thủ quy định hỗ trợ nhà
          sản xuất, nhà nhập khẩu, nhà xuất khẩu và doanh nghiệp trong việc có được
          các chứng nhận và phê duyệt cần thiết cho thị trường Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Đội ngũ của chúng tôi cung cấp hỗ trợ toàn diện cho Chứng nhận BIS Ghế
          làm việc theo IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Dịch vụ của chúng tôi bao gồm</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Đánh giá Khả năng Áp dụng Sản phẩm —</strong> Chúng tôi xác
            nhận ghế làm việc của bạn có thuộc IS 17631:2022 và QCO áp dụng hay
            không.
          </li>
          <li>
            <strong>Tư vấn Tuân thủ BIS —</strong> Hướng dẫn chuyên gia về lộ trình
            chứng nhận, nghĩa vụ và yêu cầu tiêu chuẩn.
          </li>
          <li>
            <strong>Hỗ trợ Tài liệu —</strong> Chuẩn bị, xem xét và sắp xếp tất cả
            hồ sơ đơn BIS và nhà máy.
          </li>
          <li>
            <strong>Phối hợp Kiểm tra —</strong> Hỗ trợ toàn diện cho việc gửi mẫu
            và kiểm tra tại phòng thí nghiệm được công nhận.
          </li>
          <li>
            <strong>Hỗ trợ Kiểm tra Nhà máy —</strong> Kiểm tra sẵn sàng cho đánh
            giá nhà máy BIS và các cuộc đánh giá tuân thủ.
          </li>
          <li>
            <strong>Quản lý Đơn đăng ký —</strong> Xử lý hồ sơ BIS, theo dõi và
            liên lạc quy định thay mặt bạn.
          </li>
          <li>
            <strong>Hỗ trợ Sau Chứng nhận —</strong> Hỗ trợ liên tục về giám sát,
            quy tắc đánh dấu và yêu cầu duy trì giấy phép.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kết luận
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS cho Ghế làm việc theo IS 17631:2022 đóng vai trò quan
          trọng trong việc đảm bảo chất lượng, an toàn, độ bền, ổn định và hiệu
          suất công thái học của sản phẩm ghế làm việc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bằng cách có Chứng nhận BIS và sử dụng Dấu ISI, nhà sản xuất có thể chứng
          minh tuân thủ tiêu chuẩn Ấn Độ, tăng cường niềm tin khách hàng, cải thiện
          uy tín sản phẩm và hỗ trợ tăng trưởng kinh doanh lâu dài.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dù bạn là nhà sản xuất Ấn Độ hay nhà sản xuất nước ngoài muốn tiếp cận
          thị trường Ấn Độ, hiểu rõ yêu cầu của IS 17631:2022 là bước thiết yếu hướng
          tới tuân thủ quy định và thành công trên thị trường.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nếu bạn đang lên kế hoạch có Chứng nhận BIS cho Ghế làm việc theo IS
          17631:2022, Sun Certifications India có thể giúp đơn giản hóa quy trình
          thông qua hướng dẫn quy định chuyên gia và hỗ trợ tuân thủ toàn diện.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Câu hỏi Thường gặp – Chứng nhận BIS cho Ghế làm việc (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Chứng nhận BIS cho Ghế làm việc là gì?</strong>
              <br />
              Chứng nhận BIS xác nhận rằng ghế làm việc tuân thủ các yêu cầu của IS
              17631:2022 và các yêu cầu chứng nhận áp dụng.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. IS 17631:2022 là gì?</strong>
              <br />
              IS 17631:2022 là Tiêu chuẩn Ấn Độ quy định các yêu cầu đối với ghế
              làm việc, bao gồm an toàn, sức mạnh, ổn định, độ bền và các yếu tố
              công thái học.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Chứng nhận BIS có bắt buộc đối với ghế làm việc không?</strong>
              <br />
              Ghế làm việc thuộc phạm vi khung pháp lý áp dụng phải tuân thủ các yêu
              cầu chứng nhận BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Dấu ISI là gì?</strong>
              <br />
              Dấu ISI là dấu chứng nhận tiêu chuẩn được cấp theo Chương trình
              Chứng nhận Sản phẩm BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Ai có thể đăng ký Chứng nhận BIS?</strong>
              <br />
              Cả nhà sản xuất Ấn Độ và nhà sản xuất nước ngoài đều có thể đăng ký.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Chứng nhận BIS có yêu cầu kiểm tra sản phẩm không?</strong>
              <br />
              Có. Kiểm tra sản phẩm là phần quan trọng của quy trình chứng nhận.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Ghế làm việc nhập khẩu có yêu cầu Chứng nhận BIS không?
              </strong>
              <br />
              Sản phẩm thuộc phạm vi chứng nhận bắt buộc phải tuân thủ các quy định
              BIS áp dụng trước khi được cung cấp tại Ấn Độ.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Các kiểm tra nào được thực hiện theo IS 17631:2022?</strong>
              <br />
              Tiêu chuẩn bao gồm các đánh giá như kiểm tra thiết kế và tay nghề, xác
              minh kích thước, kiểm tra ổn định và kiểm tra tải tĩnh.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Tại sao thiết kế công thái học quan trọng đối với ghế làm việc?</strong>
              <br />
              Thiết kế công thái học giúp cải thiện sự thoải mái của người dùng, hỗ
              trợ tư thế đúng và nâng cao trải nghiệm nơi làm việc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Sun Certifications India có thể hỗ trợ như thế nào?</strong>
              <br />
              Sun Certifications India cung cấp hỗ trợ về đánh giá khả năng áp
              dụng, tài liệu, phối hợp kiểm tra, chuẩn bị kiểm tra, quản lý đơn
              đăng ký và hỗ trợ tuân thủ.
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tài nguyên Liên quan
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> Giấy chứng nhận ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Giấy chứng nhận BIS cho Nhà sản xuất Nước ngoài</a>
          </li>
        </ul>

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
