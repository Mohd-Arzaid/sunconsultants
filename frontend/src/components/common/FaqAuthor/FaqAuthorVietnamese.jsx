import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorVietnamese = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "Phản hồi này được xem xét bởi:",
      content:
        "Cố vấn Quy định Chính của chúng tôi, cựu Phó Tổng Giám đốc BIS (Tiêu chuẩn hóa). Với hơn 30 năm phục vụ, ông chuyên về việc giải thích Đạo luật Cục Tiêu chuẩn Ấn Độ và đơn giản hóa quy trình chứng nhận phức tạp cho các nhà sản xuất Ấn Độ.",
    },
    {
      title: "Xem xét Kỹ thuật Bởi:",
      content:
        "Kiểm toán viên Trưởng Cấp cao của chúng tôi (Chứng nhận), cựu Nhà khoa học BIS 'E' từng giữ chức Trưởng phòng Chứng nhận cho Khu vực Miền Bắc. Ông đã giám sát hơn 1.500 cuộc thanh tra nhà máy và tư vấn về việc ngăn chặn các sự không phù hợp phổ biến trong giai đoạn nộp đơn.",
    },
    {
      title: "Xem xét Tuân thủ:",
      content:
        "Tổng quan tuân thủ nhập khẩu này được xem xét bởi Giám đốc Tuân thủ Thương mại Nước ngoài của chúng tôi, cựu Cán bộ BIS Cấp cao (Bộ phận FMCS). Chuyên môn của ông nằm ở việc điều hướng Chương trình Chứng nhận Nhà sản xuất Nước ngoài và giải quyết các trở ngại thông quan hải quan cho hàng hóa nhập khẩu.",
    },
    {
      title: "Giám sát Quy định:",
      content:
        "Tư vấn tuân thủ này được kiểm tra bởi Cố vấn Cấp cao của chúng tôi (Thực thi & Cảnh giác), cựu Giám đốc BIS (Thực thi). Ông chuyên về tuân thủ sau chứng nhận, giúp các công ty điều hướng các cuộc kiểm toán giám sát và tuân thủ pháp lý đối với các yêu cầu của BIS.",
    },
    {
      title: "Được xem xét bởi:",
      content:
        "Hướng dẫn tài liệu này được xem xét bởi Chuyên gia Ứng dụng Trưởng của chúng tôi, cựu Trưởng Bộ phận BIS (Cấp phép & Xem xét). Với kinh nghiệm xử lý hơn 5.000 hồ sơ đơn đăng ký, ông đảm bảo rằng các hồ sơ nộp của khách hàng đáp ứng các tiêu chí hành chính nghiêm ngặt để tránh bị từ chối trong giai đoạn xem xét ban đầu.",
    },
  ];

  // Get the current point to display
  const currentPoint = reviewPoints[pointIndex];

  return (
    <section className="">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F9F7F2] via-white to-[#F9F7F2] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A8781]/5 to-transparent rounded-full -translate-y-4 translate-x-4"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#125E5A]/5 to-transparent rounded-full translate-y-2 -translate-x-2"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781]">
              {currentPoint.title}
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#1A8781]/20 to-transparent"></div>
          </div>

          <div className="space-y-3">
            {/* Review section - show only the relevant point */}
            <div className="p-3 bg-white/50 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-colors duration-200">
              <p className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                {currentPoint.content}
              </p>
            </div>

            {/* Contact information with enhanced buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="https://www.linkedin.com/company/sun-certifications-india/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#0077B5]/5 to-[#0077B5]/10 hover:from-[#0077B5]/10 hover:to-[#0077B5]/15 rounded-lg border border-[#0077B5]/10 hover:border-[#0077B5]/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">LinkedIn:</span> Liên hệ với
                    tôi
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">Liên hệ:</span>{" "}
                    admin@bis-certifications.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FaqAuthorVietnamese.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorVietnamese;
