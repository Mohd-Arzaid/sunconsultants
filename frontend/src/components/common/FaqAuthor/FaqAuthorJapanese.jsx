import { Mail, Linkedin } from "lucide-react";
import PropTypes from "prop-types";

const FaqAuthorJapanese = ({ questionNumber = 1 }) => {
  // Calculate which point to show based on rotation: (questionNumber - 1) % 5
  // Q1 -> 0 (point 1), Q2 -> 1 (point 2), Q3 -> 2 (point 3), Q4 -> 3 (point 4), Q5 -> 4 (point 5)
  // Q6 -> 0 (point 1), Q7 -> 1 (point 2), etc.
  const pointIndex = (questionNumber - 1) % 5;

  // Define all 5 review points
  const reviewPoints = [
    {
      title: "この回答は以下によりレビューされています：",
      content:
        "当社の主任規制コンサルタント、元BIS副総局長（標準化）。30年以上の経験を持ち、インド標準法の解釈と、インド製造業者向けの複雑な認証ワークフローの簡素化を専門としています。",
    },
    {
      title: "技術レビュー担当：",
      content:
        "当社のシニアリード監査員（認証）、元BIS科学者「E」で、北部地域の認証責任者を務めていました。1,500件以上の工場検査を監督し、申請段階での一般的な不適合を防ぐためのアドバイスを提供しています。",
    },
    {
      title: "コンプライアンスレビュー：",
      content:
        "この輸入コンプライアンス概要は、当社の外国貿易コンプライアンスディレクター、元BIS上級職員（FMCS部門）によりレビューされました。外国製造業者認証スキームのナビゲーションと、輸入品の通関障壁の解決に精通しています。",
    },
    {
      title: "規制監視：",
      content:
        "このコンプライアンスアドバイザリーは、当社のシニアコンサルタント（執行・監視）、元BISディレクター（執行）により審査されました。認証後のコンプライアンスを専門とし、企業が監査監視とBIS指令への法的遵守をナビゲートするのを支援しています。",
    },
    {
      title: "審査担当：",
      content:
        "この文書ガイドは、当社のリードアプリケーションスペシャリスト、元BIS課長（ライセンス・審査）によりレビューされました。5,000件以上の申請ファイルを処理した経験を持ち、クライアントの提出物が厳格な管理基準を満たし、初期審査段階での却下を防ぐことを確保しています。",
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
                    <span className="font-medium">LinkedIn:</span> つながる
                  </span>
                </a>

                <a
                  href="mailto:info@sunconsultants.co.in"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-[#1A8781]/5 to-[#125E5A]/10 hover:from-[#1A8781]/10 hover:to-[#125E5A]/15 rounded-lg border border-[#1A8781]/10 hover:border-[#1A8781]/20 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1A8781]" />
                  <span className="font-geist text-[14px] md:text-[18px] text-[#42434d]">
                    <span className="font-medium">お問い合わせ:</span>{" "}
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

FaqAuthorJapanese.propTypes = {
  questionNumber: PropTypes.number,
};

export default FaqAuthorJapanese;
