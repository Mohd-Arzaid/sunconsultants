import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ManyUsersAlsoReadDutch = () => {
  const links = [
    {
      title: "Volledige gids voor BIS-certificering",
      path: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    },
    {
      title: "BIS-certificering voor buitenlandse fabrikanten",
      path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    },
    {
      title: "BIS-certificering voor Indiase fabrikanten",
      path: "/nl/bis-isi-mark-certificering",
    },
    {
      title: "Schema X Certificering",
      path: "/nl/indiaas-bis-certificaat-volgens-schema-x",
    },
    {
      title: "CRS-registratie",
      path: "/nl/wat-is-crs-bis-of-crs-registratie",
    },
  ];

  return (
    <div className="mt-8 mb-6">
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Veel van onze gebruikers lezen ook
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

export default ManyUsersAlsoReadDutch;
