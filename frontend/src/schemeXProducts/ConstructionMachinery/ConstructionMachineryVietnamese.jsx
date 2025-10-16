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

const ConstructionMachineryVietnamese = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Chứng nhận BIS Scheme X cho Máy móc Xây dựng</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Chứng nhận BIS Scheme X là bắt buộc đối với máy móc xây dựng, di chuyển đất và khai thác mỏ để đảm bảo an toàn, chất lượng và tiêu chuẩn hóa trong các ngành công nghiệp quan trọng"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Chứng nhận BIS cho Máy móc Xây dựng, Chứng nhận BIS Scheme X cho Máy móc Xây dựng, Chứng nhận Scheme X cho Máy móc Xây dựng, BIS cho Máy móc Xây dựng, OTR cho Máy móc Xây dựng"
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
          content="Chứng nhận BIS Scheme X cho Máy móc Xây dựng ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          property="og:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Máy móc Xây dựng ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Chứng nhận BIS Scheme X cho Máy móc Xây dựng ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          name="twitter:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Máy móc Xây dựng ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
        />
      </Helmet>

      <ConstructionMachineryVietnameseBreadcrumb />
      <ConstructionMachineryVietnameseMainContent />
      <ServicesVietnamese />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default ConstructionMachineryVietnamese;

const ConstructionMachineryVietnameseBreadcrumb = () => {
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
                  BIS Scheme X cho Máy móc Xây dựng
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachineryVietnameseMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryVietnameseMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentVietnamese />
      </div>
    </div>
  );
};

const ConstructionMachineryVietnameseMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Chứng nhận BIS cho Máy móc Xây dựng
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="Chứng nhận BIS Scheme X cho Máy móc Xây dựng"
            title="Giấy phép BIS Scheme X cho Máy móc Xây dựng"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Máy xúc, máy xúc lật, máy ủi, máy trộn bê tông và lu đường là các máy
          móc xây dựng chính được sử dụng trong xây dựng cơ sở hạ tầng của Ấn
          Độ. Nhu cầu cao hơn về máy móc an toàn và đáng tin cậy xuất phát từ
          các khoản đầu tư khổng lồ vào đường cao tốc, thành phố thông minh, nhà
          máy và nhà ở.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Cục Tiêu chuẩn Ấn Độ (BIS) đã làm cho Chứng nhận BIS trở thành Bắt
          buộc theo Scheme-X cho Máy móc Xây dựng để cung cấp đảm bảo chất
          lượng, dịch vụ và an toàn. Nó đảm bảo rằng một thiết bị tuân thủ các
          Tiêu chuẩn Ấn Độ trước khi được cung cấp để bán hoặc nhập khẩu vào Ấn
          Độ.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Tại đây trong bài viết này, bạn sẽ tìm hiểu về Chứng nhận BIS Scheme X
          cho Máy móc Xây dựng, Yêu cầu của OTR cho Máy móc Xây dựng, và quy
          trình để có được Giấy phép BIS cho Máy móc Xây dựng và nhãn hiệu BIS
          cho Máy móc Xây dựng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tại sao BIS cho Máy móc Xây dựng quan trọng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Máy móc xây dựng được áp dụng trong phát triển cơ sở hạ tầng và các
          trang web phát triển xây dựng khổng lồ.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Phát triển đường bộ và đường cao tốc</li>
          <li>Bất động sản và dự án nhà ở</li>
          <li>Khai thác mỏ và khai thác đá</li>
          <li>Xây dựng công nghiệp và kỹ thuật nặng</li>
          <li>Cảng, sân bay và dự án tàu điện ngầm</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hậu quả của việc không có BIS cho Thiết bị Xây dựng như sau:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Hỏng hóc thiết bị và thời gian chết đắt đỏ</li>
          <li>Xác suất cao hơn về tai nạn và rủi ro nguy hiểm</li>
          <li>Không tuân thủ đấu thầu của chính phủ</li>
          <li>Chi phí bảo trì và vận hành tăng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Nhãn hiệu BIS cho Máy móc Xây dựng chỉ ra rằng sản phẩm an toàn, đáng
          tin cậy và tuân thủ các Tiêu chuẩn Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Chứng nhận BIS Scheme X cho Máy móc Xây dựng là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS Scheme X được bao phủ bởi Yêu cầu Đánh giá Tuân thủ của
          Cục Tiêu chuẩn Ấn Độ (BIS) (2018) cung cấp hướng dẫn cho sản phẩm.
          Trong kế hoạch này, BIS quyết định chất lượng của sản phẩm và đảm bảo
          rằng nó đang giảm thiểu các mối nguy hiểm sức khỏe con người.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Các tính năng chính - Chứng nhận Scheme X cho Thiết bị Xây dựng:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Bắt buộc đối với các nhà sản xuất trong nước và nước ngoài</li>
          <li>Bao gồm tất cả các loại máy móc nặng và thiết bị xây dựng</li>
          <li>
            Thử nghiệm sản phẩm là bắt buộc, thăm quan nhà máy bắt buộc và kiểm
            tra tuân thủ phải được thực hiện thường xuyên
          </li>
          <li>Cho phép sử dụng nhãn hiệu BIS cho Máy móc Xây dựng</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR cho Thiết bị Xây dựng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận Scheme X sẽ trở thành bắt buộc như một phần của Quy định Kỹ
          thuật Tổng hợp (OTR) năm 2024 cho Máy móc Xây dựng được công bố bởi Bộ
          Công nghiệp Nặng.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Thời hạn: Tất cả các nhà sản xuất và nhà nhập khẩu nên nhận được Giấy
          phép BIS cho Máy móc Xây dựng theo Scheme X trước ngày 01 tháng 9 năm
          2026. Từ ngày này trở đi, thiết bị chưa được chứng nhận có thể không
          được sản xuất, vận chuyển cũng như bán cho các chương trình cơ sở hạ
          tầng công cộng.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Thiết bị hoặc Máy móc Xây dựng
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            An toàn & Độ tin cậy: Giảm nguy cơ hỏng hóc cơ học hoặc tai nạn tại
            các công trường xây dựng.
          </li>
          <li>
            Tiếp cận Thị trường & Đủ điều kiện Đấu thầu: Sản phẩm Được chứng
            nhận BIS đủ điều kiện cho Đấu thầu của Chính phủ và PSU.
          </li>
          <li>
            Niềm tin của Người tiêu dùng & Nhà thầu: Nhãn hiệu BIS Máy móc Xây
            dựng đảm bảo sản phẩm an toàn và chất lượng cho tất cả người mua.
          </li>
          <li>
            Nhập cảnh Thị trường Toàn cầu: Giấy phép BIS cho Máy móc Xây dựng có
            thể có lợi cho các công ty nước ngoài để dễ dàng tiếp cận thị trường
            Ấn Độ.
          </li>
          <li>
            Tuân thủ Pháp lý: Miễn trừ khỏi tiền phạt, lệnh cấm và các biện pháp
            trừng phạt theo OTR của Máy móc Xây dựng.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Các loại Thiết bị Xây dựng được bao phủ theo Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận BIS Scheme X cho Máy móc Xây dựng áp dụng cho các loại
          thiết bị khác nhau như:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Máy xúc và Máy xúc lật</li>
          <li>Máy ủi và Lu đường</li>
          <li>Cần cẩu được sử dụng tại các công trường xây dựng</li>
          <li>Máy trộn Bê tông và Nhà máy Phân phối</li>
          <li>Nhà máy và Máy rải Asphalt</li>
          <li>Máy móc Đóng cọc và Khoan</li>
          <li>Xử lý Vật liệu và Thiết bị Di chuyển Đất</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Mỗi loại phải đáp ứng các Tiêu chuẩn Ấn Độ liên quan (Mã IS) theo IS
          17055 (Phần 7):2020, IS 17055 (Phần 8):2020 và IS 17055 (Phần 12):2020
          về thiết kế, an toàn, hiệu suất, v.v.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Quy trình cho Giấy phép BIS cho Thiết bị Xây dựng
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Xác định các Tiêu chuẩn Áp dụng: Tìm mã IS nào dành cho loại Máy móc
            Xây dựng của bạn.
          </li>
          <li>
            Thử nghiệm Sản phẩm: Thực hiện các thử nghiệm an toàn và hiệu suất
            trong các phòng thí nghiệm được BIS công nhận.
          </li>
          <li>
            Kiểm tra Nhà máy: Các kiểm toán viên BIS kiểm tra các quy trình QC
            và sản xuất theo nghĩa đen.
          </li>
          <li>
            Đơn & Tài liệu: Cung cấp báo cáo, thông số kỹ thuật và sổ tay để xem
            xét.
          </li>
          <li>
            Giấy phép BIS cho Máy móc Xây dựng: Khi được đưa vào, các nhà sản
            xuất được phép đặt nhãn hiệu BIS cho Máy móc Xây dựng.
          </li>
          <li>
            Tuân thủ Liên tục: Kiểm tra và giám sát thường xuyên duy trì tuân
            thủ liên tục.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hình phạt cho việc Không tuân thủ
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Thất bại hàng loạt hoặc không cấp Chứng chỉ BIS của Máy móc Xây dựng
          cho đến ngày 1 tháng 9 năm 2026 theo OTR cho Máy móc Xây dựng sẽ có
          những tác động sau:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Cấm bán và nhập khẩu thiết bị chưa được chứng nhận</li>
          <li>Tiền phạt lớn và giam giữ sản phẩm</li>
          <li>Loại khỏi các dự án và giải thưởng của chính phủ</li>
          <li>
            Thiệt hại tiềm năng không giới hạn về danh tiếng trong nhiều năm tới
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kết luận
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc thực hiện bắt buộc Chứng nhận BIS Scheme X cho Máy móc Xây dựng
          theo OTR cho Máy móc Xây dựng (2024) là một bước quan trọng hướng tới
          an toàn, hiệu quả cũng như tiêu chuẩn hóa trong ngành công nghiệp bản
          địa của Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Đối với các nhà sản xuất máy móc xây dựng, nhà nhập khẩu và nhà xuất
          khẩu, việc có được Giấy phép BIS cho Máy móc Xây dựng và gắn nhãn hiệu
          BIS cho Máy móc Xây dựng không chỉ là một yêu cầu tuân thủ, mà còn là
          một bước đi chiến lược để mở rộng sang các thị trường mới, thâm nhập
          thị trường xây dựng Ấn Độ đang bùng nổ và xây dựng danh tiếng của bạn
          trong dài hạn.
        </p>

        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};
