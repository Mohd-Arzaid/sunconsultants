import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadIndonesian = () => {
  const links = [
    {
      title: "Panduan Lengkap Sertifikasi BIS",
      path: "/id/apa-itu-sertifikat-bis-bis-india",
    },
    {
      title: "Sertifikasi BIS untuk Produsen Asing",
      path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    },
    {
      title: "Sertifikasi BIS untuk Produsen India",
      path: "/id/sertifikasi-bis-isi-mark",
    },
    {
      title: "Sertifikasi Skema X",
      path: "/id/sertifikasi-bis-india-di-bawah-skema-x",
    },
    {
      title: "Registrasi CRS",
      path: "/id/apa-itu-crs-bis-atau-registrasi-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Banyak pengguna kami juga membaca
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

export default ManyUsersAlsoReadIndonesian;
