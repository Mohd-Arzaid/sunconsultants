import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";
import { ServicesVietnamese } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsVietnamese";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";

const PublicWorksAndMechanicalVietnamese = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Chứng nhận BIS Scheme X cho máy móc công trình công cộng & xây dựng, và thiết bị cơ khí là một bước đi chiến lược nhằm đảm bảo an toàn công nghiệp, chất lượng đồng nhất và tiếp cận thị trường."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Chứng nhận BIS cho Công trình Công cộng và Thiết bị Cơ khí, Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí, Chứng nhận Scheme X cho Công trình Công cộng và Thiết bị Cơ khí, BIS cho Công trình Công cộng và Thiết bị Cơ khí, OTR cho Công trình Công cộng và Thiết bị Cơ khí"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          property="og:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/vi/chung-nhan-bis-scheme-x-cho-cong-trinh-cong-cong-va-thiet-bi-co-khi"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          name="twitter:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/vi/chung-nhan-bis-scheme-x-cho-cong-trinh-cong-cong-va-thiet-bi-co-khi"
        />
      </Helmet>

      <PublicWorksAndMechanicalVietnameseBreadcrumb />
      <PublicWorksAndMechanicalVietnameseMainContent />
      <ServicesVietnamese />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default PublicWorksAndMechanicalVietnamese;

const PublicWorksAndMechanicalVietnameseBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">Sản phẩm Scheme X</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalVietnameseMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalVietnameseMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentVietnamese />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalVietnameseMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí"
            title="Giấy phép BIS cho Máy móc công trình công cộng & xây dựng"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Với sự phát triển nhanh chóng của cơ sở hạ tầng và hiện đại hóa các
          ngành công nghiệp, hiệu suất và máy móc đáng tin cậy là điều tối quan
          trọng. Máy móc và thiết bị cơ khí hoạt động như trục chính trong các
          công trình kỹ thuật, sản xuất và xây dựng các công trình công cộng và
          các ngành công nghiệp chuyên biệt. Điều bắt buộc là chúng ta phải bảo
          vệ chất lượng và sự tuân thủ của chúng. Đây là một nghĩa vụ pháp lý
          được thực thi bởi Cục Tiêu chuẩn Ấn Độ (BIS) theo Chứng nhận Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Để thực hiện và hợp lý hóa việc thực thi các tiêu chuẩn bắt buộc trong
          phạm vi các loại máy móc công nghiệp khác nhau, Lệnh Quy định Kỹ thuật
          Tổng hợp (OTR), 2024 đã được Bộ Công nghiệp Nặng ban hành. Lệnh này
          quy định rằng tất cả các loại máy móc cho công trình công cộng, xây
          dựng các tòa nhà, và các thiết bị cơ khí khác, bao gồm cả những thiết
          bị không được đề cập rõ ràng trong các phân mục khác của Chương 84,
          đều phải có chứng nhận BIS theo Scheme X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Bài viết này thảo luận về tất cả các loại máy móc và thiết bị được sử
          dụng cho công trình công cộng và xây dựng, các thiết bị cơ khí với các
          chức năng riêng lẻ, các cụm lắp ráp, cụm lắp ráp phụ của chúng, tầm
          quan trọng và phạm vi của kế hoạch được nói đến rộng rãi, quy trình
          chứng nhận và lợi ích, cũng như các tài liệu phải được nộp.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tầm quan trọng của BIS cho Công trình Công cộng & Thiết bị Cơ khí
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Những máy móc này phổ biến trong:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Xây dựng cơ sở hạ tầng công cộng (đường xá, cầu, cung cấp nước)
          </li>
          <li>Dự án kỹ thuật và xây dựng nặng</li>
          <li>Dịch vụ thành phố và tiện ích</li>
          <li>Cơ sở công nghiệp cần máy nâng hoặc xử lý</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Không có BIS cho Công trình Công cộng và Thiết bị Cơ khí, các rủi ro
          bao gồm:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Hỏng máy trong khi thực hiện các dự án quan trọng</li>
          <li>Cân nhắc an toàn nghề nghiệp và người sử dụng cuối</li>
          <li>Chi phí bảo trì và thời gian ngừng hoạt động cao hơn</li>
          <li>Bị loại trừ khỏi các dự án được tài trợ bởi chính phủ</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chứng nhận Scheme X cho Công trình Công cộng và Thiết bị Cơ khí đảm
          bảo máy móc hoạt động an toàn, hiệu quả và với rủi ro hỏng hóc tối
          thiểu.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Chứng nhận BIS Scheme X cho Công trình Công cộng & Thiết bị Cơ khí là
          gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS Scheme X cho Công trình Công cộng và Thiết bị Cơ khí
          thuộc Quy định Đánh giá Tuân thủ BIS, 2018. Đây là một phương tiện
          được xác định và một công cụ quy định để đảm bảo rằng máy móc công
          nghiệp và cơ sở hạ tầng tuân thủ các Tiêu chuẩn Ấn Độ.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Các khía cạnh chính của Đủ điều kiện Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Áp dụng cho cả nhà sản xuất Ấn Độ và nước ngoài</li>
          <li>Bao gồm máy móc cho công trình công cộng và tiện ích</li>
          <li>
            Thử nghiệm tại các phòng thí nghiệm được BIS công nhận. Dễ vận hành.
          </li>
          <li>
            Kiểm tra nhà máy và kiểm tra tuân thủ thường xuyên được bao gồm
          </li>
          <li>Cấp quyền sử dụng Nhãn hiệu Tiêu chuẩn BIS sau khi chứng nhận</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR cho Thiết bị Công trình Công cộng và Cơ khí
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bộ Công nghiệp Nặng đã ban hành Quy định Kỹ thuật Tổng hợp (OTR) cho
          Công trình Công cộng và Thiết bị Cơ khí vào năm 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Thời hạn: Trước ngày 1 tháng 9 năm 2026, tất cả các nhà sản xuất và
          nhà nhập khẩu phải tuân thủ chứng nhận Scheme X cho Công trình Công
          cộng và Thiết bị Cơ khí. Sau ngày này, máy móc chưa đăng ký sẽ không
          được phép sản xuất, bán hoặc nhập khẩu ở Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Lợi ích của BIS cho Công trình Công cộng và Thiết bị Cơ khí
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            An toàn Sản phẩm: Ngăn ngừa sự sụp đổ do các vấn đề cơ khí và hoạt
            động đáng tin cậy.
          </li>
          <li>
            Tuân thủ Quy định: Thỏa mãn OTR cho Công trình Công cộng và Thiết bị
            Cơ khí.
          </li>
          <li>
            Lợi thế Thị trường: Chứng nhận thường được yêu cầu cho các đấu thầu
            công cộng và dự án của chính phủ.
          </li>
          <li>
            Niềm tin Khách hàng: Máy móc được chứng nhận chính thức được ưa
            chuộng bởi một số người mua, vì nó là một sự đảm bảo về chất lượng.
          </li>
          <li>
            Giảm Trách nhiệm: Giảm tiềm năng phơi nhiễm pháp lý và thương hiệu
            với các sản phẩm được chứng nhận.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Các loại Công trình Công cộng và Thiết bị Cơ khí trong OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X cho Chứng nhận Công trình Công cộng và Thiết bị Cơ khí
          bao gồm các sản phẩm sau:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Máy làm và bảo trì đường xá</li>
          <li>Máy nâng thủy lực và thủ công</li>
          <li>Thiết bị dịch vụ đô thị (thiết bị phân phối nước, v.v.)</li>
          <li>Thiết bị dịch vụ và xử lý cơ khí</li>
          <li>
            Thiết bị được thiết kế đặc biệt cho sử dụng công nghiệp trong công
            trình công cộng và dịch vụ
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chúng phải tuân thủ các Tiêu chuẩn Ấn Độ phù hợp (mã IS), nếu có, bao
          gồm IS 16819:2018/ISO 12100:2010 (An toàn Máy móc Nguyên tắc Chung cho
          Thiết kế- Đánh giá Rủi ro và Giảm thiểu Rủi ro). Tất cả các dạng này
          phải được sản xuất theo các Tiêu chuẩn Ấn Độ tương ứng về an toàn,
          hiệu suất và chất lượng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Quy trình cho Chứng nhận BIS cho Công trình Công cộng và Thiết bị Cơ
          khí
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Xác định các Tiêu chuẩn Áp dụng: Chọn mã IS áp dụng cho máy móc của
            bạn.
          </li>
          <li>
            Thử nghiệm Sản phẩm: Thực hiện các thử nghiệm hiệu suất và an toàn
            tại các Phòng thí nghiệm được BIS phê duyệt.
          </li>
          <li>
            Kiểm tra Nhà máy: Các quan chức BIS thăm các cơ sở sản xuất để đảm
            bảo rằng các kiểm soát chất lượng được đặt đúng chỗ.
          </li>
          <li>
            Tài liệu: Nộp các mẫu đơn, báo cáo kỹ thuật và sổ tay chất lượng
          </li>
          <li>
            Cấp Giấy phép: BIS cấp chứng nhận và cho phép sử dụng Nhãn hiệu Tiêu
            chuẩn BIS.
          </li>
          <li>
            Tuân thủ Liên tục: Có thử nghiệm và kiểm tra liên tục để đảm bảo
            tuân thủ liên tục.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hình phạt cho việc Không tuân thủ
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc không tuân thủ Chứng nhận BIS cho Công trình Công cộng và Thiết
          bị Cơ khí được quy định trong OTR cho Công trình Công cộng và Thiết bị
          Cơ khí sẽ dẫn đến:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Cấm bán hoặc nhập khẩu máy móc chưa được chứng nhận</li>
          <li>Tiền phạt nặng và tịch thu sản phẩm</li>
          <li>
            Bị loại trừ khỏi các đấu thầu của chính phủ và quy trình hợp đồng
          </li>
          <li>Danh tiếng bị tổn hại nghiêm trọng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kết luận
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng chỉ BIS Scheme X cho công trình công cộng và thiết bị cơ khí
          được hỗ trợ bởi OTR cho công trình công cộng và thiết bị cơ khí
          (2024), đưa đất nước tiến gần hơn một bước đến việc thiết lập các mức
          chất lượng đồng nhất và an toàn trong máy móc cơ sở hạ tầng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Đối với các nhà sản xuất và nhà nhập khẩu, việc có được chứng nhận
          Scheme X cho Công trình Công cộng và Thiết bị Cơ khí không chỉ là tuân
          thủ đơn thuần – mà còn đại diện cho một khoản đầu tư chiến lược.
        </p>

        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};
