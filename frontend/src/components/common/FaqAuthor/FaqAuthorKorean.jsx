import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorKorean = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "이 답변은 다음에 의해 검토되었습니다:",
      content:
        "우리의 주요 규제 컨설턴트, 전 BIS 차관 (표준화). 30년 이상의 경력을 보유한 그는 인도 표준국 법령을 해석하고 인도 제조업체를 위한 복잡한 인증 워크플로우를 단순화하는 데 전문성을 가지고 있습니다.",
    },
    {
      title: "기술 검토:",
      content:
        "우리의 시니어 리드 오디터 (인증), 북부 지역 인증 책임자로 근무한 전 BIS 과학자 'E'. 그는 1,500개 이상의 공장 검사를 감독했으며 신청 단계에서 일반적인 부적합을 방지하는 방법에 대해 조언합니다.",
    },
    {
      title: "규정 준수 검토:",
      content:
        "이 수입 규정 준수 개요는 우리의 외국 무역 규정 준수 이사, 전 BIS 시니어 담당관 (FMCS 부서)에 의해 검토되었습니다. 그의 전문성은 외국 제조업체 인증 계획을 탐색하고 수입 상품의 세관 통관 장애를 해결하는 데 있습니다.",
    },
    {
      title: "규제 감독:",
      content:
        "이 규정 준수 자문은 우리의 시니어 컨설턴트 (집행 및 감시), 전 BIS 이사 (집행)에 의해 검토되었습니다. 그는 인증 후 규정 준수에 전문성을 가지고 있으며, 기업이 감시 감사를 탐색하고 BIS 지침에 대한 법적 준수를 돕습니다.",
    },
    {
      title: "검토자:",
      content:
        "이 문서 가이드는 우리의 리드 애플리케이션 전문가, 전 BIS 부서장 (라이선싱 및 검토)에 의해 검토되었습니다. 5,000개 이상의 신청 파일을 처리한 경험을 바탕으로, 그는 클라이언트 제출물이 엄격한 행정 기준을 충족하여 초기 검토 단계에서 거부를 방지하도록 보장합니다.",
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
                    <span className="font-medium">LinkedIn:</span> 연락하기
                  </span>
                </a>

                <a
                  href="mailto:admin@bis-certifications.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">연락처:</span>{" "}
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

FaqAuthorKorean.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorKorean;
