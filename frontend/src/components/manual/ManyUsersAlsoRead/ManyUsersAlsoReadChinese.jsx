import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadChinese = () => {
  const links = [
    {
      title: "BIS认证完整指南",
      path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    },
    {
      title: "外国制造商BIS认证",
      path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    },
    {
      title: "印度制造商BIS认证",
      path: "/zh/bis-isi-mark-renzheng",
    },
    {
      title: "方案X认证",
      path: "/zh/yin-du-bis-fang-an-x-ren-zheng",
    },
    {
      title: "CRS注册",
      path: "/zh/crs-bis-shi-shen-me-huo-crs-deng-ji",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          许多用户也阅读了
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

export default ManyUsersAlsoReadChinese;
