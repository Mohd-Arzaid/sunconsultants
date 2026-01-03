import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadVietnamese = () => {
  const links = [
    {
      title: "Hướng dẫn đầy đủ về chứng nhận BIS",
      path: "/vi/chung-chi-bis-la-gi-bis-an-do",
    },
    {
      title: "Chứng nhận BIS cho nhà sản xuất nước ngoài",
      path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
    },
    {
      title: "Chứng nhận BIS cho nhà sản xuất Ấn Độ",
      path: "/vi/chung-nhan-bis-isi-mark",
    },
    {
      title: "Chứng nhận Scheme X",
      path: "/vi/chung-nhan-bis-an-do-theo-scheme-x",
    },
    {
      title: "Đăng ký CRS",
      path: "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Nhiều người dùng của chúng tôi cũng đọc
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

export default ManyUsersAlsoReadVietnamese;
