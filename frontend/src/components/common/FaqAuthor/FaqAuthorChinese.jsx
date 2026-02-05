import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorChinese = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "此回答由以下人员审核：",
      content:
        "我们的首席监管顾问，前BIS副总局长（标准化）。拥有30多年的服务经验，他专门解释《印度标准局法案》并为印度制造商简化复杂的认证工作流程。",
    },
    {
      title: "技术审核：",
      content:
        "我们的高级首席审计员（认证），前BIS科学家'E'，曾担任北部地区认证负责人。他监督了1,500多次工厂检查，并就申请阶段防止常见不符合项提供建议。",
    },
    {
      title: "合规审核：",
      content:
        "此进口合规概览由我们的外贸合规总监审核，前BIS高级官员（FMCS部门）。他的专长在于导航外国制造商认证计划并解决进口货物的清关障碍。",
    },
    {
      title: "监管监督：",
      content:
        "此合规建议由我们的高级顾问（执法与监督）审查，前BIS总监（执法）。他专门从事认证后合规，帮助公司应对监督审计并遵守BIS指令的法律要求。",
    },
    {
      title: "审核人员：",
      content:
        "此文档指南由我们的首席申请专家审核，前BIS部门负责人（许可与审核）。拥有处理超过5,000个申请文件的经验，他确保客户提交的文件符合严格的管理标准，以防止在初始审核阶段被拒绝。",
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
                    <span className="font-medium">LinkedIn:</span> 与我联系
                  </span>
                </a>

                <a
                  href="mailto:info@sunconsultants.co.in"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">联系:</span>{" "}
                    info@sunconsultants.co.in
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

FaqAuthorChinese.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorChinese;
