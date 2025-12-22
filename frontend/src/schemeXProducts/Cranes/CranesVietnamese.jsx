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

const CranesVietnamese = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Chứng nhận BIS Scheme X cho Cần cẩu</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Cục Tiêu chuẩn Ấn Độ (BIS) đã giới thiệu chứng nhận Scheme X bắt buộc cho tất cả các loại cần cẩu và các cụm lắp ráp, cụm lắp ráp phụ và các bộ phận của chúng."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Chứng nhận BIS cho Cần cẩu, Chứng nhận BIS Scheme X cho Cần cẩu, Chứng nhận Scheme X cho Cần cẩu, BIS cho Cần cẩu, OTR cho Cần cẩu"
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
          content="Chứng nhận BIS Scheme X cho Cần cẩu ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          property="og:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Cần cẩu ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-can-cau"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Chứng nhận BIS Scheme X cho Cần cẩu ở Ấn Độ | Hướng dẫn đầy đủ"
        />
        <meta
          name="twitter:description"
          content="Tìm hiểu mọi thứ về Chứng nhận BIS Scheme X cho Cần cẩu ở Ấn Độ. Hiểu về tuân thủ OTR 2024, quy trình Giấy phép BIS, yêu cầu về nhãn hiệu ISI, và cách được chứng nhận trước thời hạn tháng 9 năm 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-can-cau"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kurein"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-qi-zhong-ji-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-ponts-roulants"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-krane"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-can-cau"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-gruas"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-keurein"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-derek"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-gru"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khren"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-kranen"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-rafaat"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
        />
      </Helmet>

      <CranesVietnameseBreadcrumb />
      <CranesVietnameseMainContent />
      <ServicesVietnamese />
      <VideoSection />
      <FooterVietnamese />
    </div>
  );
};

export default CranesVietnamese;

const CranesVietnameseBreadcrumb = () => {
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
                <BreadcrumbPage>BIS Scheme X cho Cần cẩu</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CranesVietnameseMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesVietnameseMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentVietnamese />
      </div>
    </div>
  );
};

const CranesVietnameseMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X cho Cần cẩu
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="Chứng nhận BIS Scheme X cho Cần cẩu"
            title="Giấy phép BIS Scheme X cho Cần cẩu"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Cần cẩu chủ yếu được sử dụng để nâng và vận chuyển vật liệu trong sản
          xuất, xây dựng, sản xuất và khai thác mỏ. Vì chức năng của chúng có
          thể quan trọng về mặt an toàn, cần cẩu không đủ tiêu chuẩn hoặc chất
          lượng kém có thể dẫn đến trượt và ngã, trục trặc thiết bị hoặc tổn
          thất tốn kém.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Xét đến những mối nguy hiểm này, Cục Tiêu chuẩn Ấn Độ (BIS) đã làm cho
          Chứng nhận BIS cho Cần cẩu trở thành bắt buộc theo Chứng nhận Scheme –
          X. Điều này đảm bảo rằng các cần cẩu được sử dụng ở Ấn Độ an toàn,
          đáng tin cậy, hiệu quả và chất lượng đẳng cấp thế giới.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Trong blog này, chúng tôi sẽ hướng dẫn bạn về tầm quan trọng của Đăng
          ký BIS Scheme X cho Cần cẩu, các khía cạnh pháp lý của OTR cho Cần
          cẩu, và cách nhận Giấy phép BIS cho Cần cẩu và đánh dấu nhãn hiệu Tiêu
          chuẩn BIS cho Cần cẩu.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tại sao BIS cho Cần cẩu quan trọng
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cần cẩu được sử dụng rộng rãi trong:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Công trình xây dựng và cơ sở hạ tầng</li>
          <li>Cảng biển, bãi vận chuyển và các trung tâm logistics khác</li>
          <li>Nhà máy và nhà máy lắp ráp</li>
          <li>Khai thác kim loại và xử lý vật liệu nặng</li>
          <li>Nhà máy điện và các ngành công nghiệp khác</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Không có BIS cho Cần cẩu, thiết bị chưa được chứng nhận có thể gây ra:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Hỏng hóc cơ học và tai nạn.</li>
          <li>Giảm khả năng sẵn sàng và tăng chi phí bảo trì</li>
          <li>Mất đủ điều kiện cho các dự án của chính phủ</li>
          <li>
            Công nhân và cơ sở hạ tầng bị phơi nhiễm với các mối nguy hiểm an
            toàn
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Nhãn hiệu BIS cho Cần cẩu cung cấp sự tự tin cho người tiêu dùng và cơ
          quan quản lý rằng một sản phẩm tuân thủ các tiêu chuẩn chất lượng và
          an toàn mạnh mẽ của Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Chứng nhận BIS Scheme X cho Cần cẩu là gì?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chứng nhận Scheme X cho Cần cẩu theo BIS là bắt buộc theo Quy định
          Đánh giá Tuân thủ BIS, 2018, yêu cầu chứng nhận sản phẩm cho máy móc
          quan trọng.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Các tính năng chính của Scheme X cho Cần cẩu:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Bắt buộc đối với cả nhà sản xuất trong nước và nước ngoài</li>
          <li>
            Áp dụng cho tất cả các loại cần cẩu chính & được thông báo theo Tiêu
            chuẩn Ấn Độ
          </li>
          <li>
            Thử nghiệm sản phẩm, kiểm tra nhà máy và đánh giá tuân thủ liên tục
            là bắt buộc
          </li>
          <li>
            Cấp giấy phép sử dụng nhãn hiệu BIS trên Cần cẩu trên các sản phẩm
            được chứng nhận
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR cho Cần cẩu
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quy định Kỹ thuật Tổng hợp (OTR) cho Cần cẩu, đã được thông báo bởi Bộ
          Công nghiệp Nặng vào năm 2024, tìm cách yêu cầu chứng nhận.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Thời hạn: Tất cả Nhà sản xuất / Nhà nhập khẩu Cần cẩu cần phải có được
          Giấy phép BIS cho Cần cẩu theo Scheme X muộn nhất là ngày 01 tháng 9
          năm 2026. Sau đó, các cần cẩu chưa được chứng nhận không thể được tiếp
          thị hoặc nhập khẩu hoặc sử dụng trong các đấu thầu công cộng ở Ấn Độ.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Lợi ích của Chứng nhận BIS cho Cần cẩu
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            An toàn Nâng cao: Cần cẩu được chứng nhận giảm thiểu hỏng hóc cơ học
            và tai nạn.
          </li>
          <li>
            Lợi thế Thị trường: Các cơ quan chính phủ và các tập đoàn ưu tiên
            các cần cẩu được chứng nhận BIS trong các đấu thầu điện tử và các dự
            án lớn.
          </li>
          <li>
            Niềm tin của Người tiêu dùng & Nhà thầu: Nhãn hiệu BIS cho Cần cẩu
            tạo niềm tin vào chất lượng và độ tin cậy.
          </li>
          <li>
            Nhập cảnh Thị trường Toàn cầu: Đối với các nhà sản xuất nước ngoài,
            Giấy phép BIS cho Cần cẩu cho phép thâm nhập không rắc rối vào thị
            trường Ấn Độ được quy định.
          </li>
          <li>
            Tuân thủ Luật pháp Ấn Độ: Ngăn chặn các hình phạt, tịch thu và cấm
            từ các hợp đồng của chính phủ.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Các loại Cần cẩu được bao gồm trong Chứng nhận Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Các cần cẩu được liệt kê theo chứng nhận Scheme X có nhiều loại khác
          nhau, ví dụ:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Cần cẩu tháp</li>
          <li>Cần cẩu di động</li>
          <li>Cần cẩu cổng và Goliath</li>
          <li>Cần cẩu OH/BR</li>
          <li>Cần cẩu xích</li>
          <li>Cần cẩu tay</li>
          <li>Cần cẩu nổi</li>
          <li>Cần cẩu Công nghiệp và Xưởng</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mỗi biến thể phải được yêu cầu tuân thủ các Tiêu chuẩn Ấn Độ phù hợp
          (mã IS) như IS 4573:2020 cho Thông số kỹ thuật Cần cẩu Di động Chạy
          bằng Nguồn điện và IS/ISO 15442:2012 cho Cần cẩu - Yêu cầu an toàn cho
          cần cẩu tải.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Loại thiết bị phải tuân thủ các tiêu chuẩn Ấn Độ liên quan (mã IS) về
          thiết kế, khả năng chịu tải, an toàn và hiệu suất.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Quy trình để có được Giấy phép BIS cho Cần cẩu
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Xác định các Tiêu chuẩn IS Liên quan: Xác định Tiêu chuẩn Ấn Độ áp
            dụng cho loại cần cẩu của bạn.
          </li>
          <li>
            Thử nghiệm tại các Phòng thí nghiệm Được BIS Công nhận: Bắt buộc
            phải thực hiện thử nghiệm an toàn và hiệu quả.
          </li>
          <li>
            Kiểm tra Nhà máy: BIS tiến hành kiểm tra các địa điểm sản xuất và hệ
            thống chất lượng.
          </li>
          <li>
            Đơn & Tài liệu: Trình bày báo cáo kỹ thuật, kết quả thử nghiệm và sổ
            tay chất lượng.
          </li>
          <li>
            Giấy phép BIS cho Cần cẩu: Sau khi được phê duyệt, nhà sản xuất có
            đặc quyền áp dụng nhãn hiệu BIS cho Cần cẩu.
          </li>
          <li>
            Tuân thủ Liên tục: Kiểm tra và kiểm tra thường xuyên đảm bảo tuân
            thủ liên tục.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hình phạt cho việc Không tuân thủ
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Điều gì xảy ra nếu một người không tuân theo OTR cho Cần cẩu và không
          nhận được Chứng nhận BIS cho Cần cẩu trước ngày 1 tháng 9 năm 2026?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Cấm bán và nhập khẩu cần cẩu chưa được chứng nhận</li>
          <li>Tịch thu sản phẩm và tiền phạt nặng</li>
          <li>Loại khỏi các đấu thầu của chính phủ và PSU</li>
          <li>Tác động tiêu cực đến thương hiệu lâu dài</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kết luận
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Việc thực thi Chứng nhận BIS Scheme X sẽ là một cột mốc quan trọng
          giúp tăng cường an toàn, độ tin cậy và cung cấp các tiêu chuẩn công
          nghiệp chung ở Ấn Độ.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Đối với các nhà sản xuất, nhà nhập khẩu, nhà xuất khẩu Cần cẩu, điều
          quan trọng là phải có Giấy phép BIS cho Cần cẩu và có thể đăng ký
          thông qua cổng thông tin đăng ký trực tuyến cho Đăng ký BIS của Cần
          cẩu để tuân thủ tiêu chuẩn, xây dựng lòng tin của người tiêu dùng, và
          cũng để tránh các xung đột tiềm năng với BIS hoặc Chính phủ Ấn Độ.
        </p>

        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};
