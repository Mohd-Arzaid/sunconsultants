import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadSpanish = () => {
  const links = [
    {
      title: "Guía completa de certificación BIS",
      path: "/es/que-es-el-certificado-bis-bis-indio",
    },
    {
      title: "Certificación BIS para fabricantes extranjeros",
      path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    },
    {
      title: "Certificación BIS para fabricantes indios",
      path: "/es/certificacion-bis-marca-isi",
    },
    {
      title: "Certificación Esquema X",
      path: "/es/certificacion-bis-india-bajo-esquema-x",
    },
    {
      title: "Registro CRS",
      path: "/es/que-es-crs-bis-o-registro-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Muchos de nuestros usuarios también leen
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

export default ManyUsersAlsoReadSpanish;
