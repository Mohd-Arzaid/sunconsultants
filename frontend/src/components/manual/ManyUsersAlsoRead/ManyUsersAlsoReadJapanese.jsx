import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadJapanese = () => {
  const links = [
    {
      title: "BIS認証完全ガイド",
      path: "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    },
    {
      title: "外国製造業者向けBIS認証",
      path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    },
    {
      title: "インド製造業者向けBIS認証",
      path: "/ja/bis-isi-mark-shounin",
    },
    {
      title: "スキームX認証",
      path: "/ja/indo-no-bis-nintei-sukimu-x",
    },
    {
      title: "CRS登録",
      path: "/ja/crs-bis-toha-nani-ka-crs-toroku",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          多くのユーザーも読んでいます
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

export default ManyUsersAlsoReadJapanese;
