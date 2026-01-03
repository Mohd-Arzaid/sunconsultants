import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadArabic = () => {
  const links = [
    {
      title: "دليل شامل لشهادة BIS",
      path: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    },
    {
      title: "شهادة BIS للمصنعين الأجانب",
      path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    },
    {
      title: "شهادة BIS للمصنعين الهنود",
      path: "/ar/dalil-shahadat-bis-bis-alhind",
    },
    {
      title: "شهادة المخطط X",
      path: "/ar/shahadat-bis-alhind-tahata-almukhatat-x",
    },
    {
      title: "تسجيل CRS",
      path: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          يقرأ العديد من مستخدمينا أيضًا
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

export default ManyUsersAlsoReadArabic;
