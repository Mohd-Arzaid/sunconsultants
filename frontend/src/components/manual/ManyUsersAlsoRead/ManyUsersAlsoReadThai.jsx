import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadThai = () => {
  const links = [
    {
      title: "คู่มือการรับรอง BIS แบบสมบูรณ์",
      path: "/th/bis-certificate-khue-a-rai-bis-india",
    },
    {
      title: "การรับรอง BIS สำหรับผู้ผลิตต่างประเทศ",
      path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    },
    {
      title: "การรับรอง BIS สำหรับผู้ผลิตอินเดีย",
      path: "/th/bis-isi-mark-raprong",
    },
    {
      title: "การรับรองสคีม X",
      path: "/th/bis-prathiap-india-taem-dai-tae-skema-x",
    },
    {
      title: "การลงทะเบียน CRS",
      path: "/th/crs-bis-khue-a-rai-rab-phit-thab-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          ผู้ใช้หลายคนของเราก็อ่านเช่นกัน
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

export default ManyUsersAlsoReadThai;
