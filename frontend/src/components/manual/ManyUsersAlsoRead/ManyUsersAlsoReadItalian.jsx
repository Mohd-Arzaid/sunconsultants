import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadItalian = () => {
  const links = [
    {
      title: "Guida completa alla certificazione BIS",
      path: "/it/cose-il-certificato-bis-indiano",
    },
    {
      title: "Certificazione BIS per produttori stranieri",
      path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    },
    {
      title: "Certificazione BIS per produttori indiani",
      path: "/it/certificazione-bis-isi-mark",
    },
    {
      title: "Certificazione Schema X",
      path: "/it/certificazione-bis-indiana-secondo-schema-x",
    },
    {
      title: "Registrazione CRS",
      path: "/it/cose-il-crs-bis-o-registrazione-crs",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Molti dei nostri utenti leggono anche
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

export default ManyUsersAlsoReadItalian;
