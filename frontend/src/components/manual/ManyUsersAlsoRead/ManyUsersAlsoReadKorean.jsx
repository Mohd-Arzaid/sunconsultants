import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadKorean = () => {
  const links = [
    {
      title: "BIS 인증 완전 가이드",
      path: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    },
    {
      title: "외국 제조업체를 위한 BIS 인증",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
    {
      title: "인도 제조업체를 위한 BIS 인증",
      path: "/ko/bis-isi-mark-injeung",
    },
    {
      title: "스킴 X 인증",
      path: "/ko/indo-bis-injeung-scheme-x-haenghaeng",
    },
    {
      title: "CRS 등록",
      path: "/ko/crs-bis-i-mueos-inga-crs-deunglog",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          많은 사용자도 읽고 있습니다
        </h3>
        <div className="space-y-3">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center justify-between bg-white rounded-md p-4 border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors duration-200"
            >
              <p className="font-geist text-base text-[#1e1e1e] hover:text-blue-600">
                {link.title}
              </p>
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 ml-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManyUsersAlsoReadKorean;
