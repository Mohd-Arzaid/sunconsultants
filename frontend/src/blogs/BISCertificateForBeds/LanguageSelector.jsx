import { Link, useLocation } from "react-router-dom";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w320/gb.png",
    path: "/blogs/isi-products/beds-is-17635",
  },
  {
    code: "ar",
    name: "Arabic",
    flag: "https://flagcdn.com/w320/sa.png",
    path: "/blogs/isi-products/asrat-is-17635",
  },
  {
    code: "zh",
    name: "Chinese",
    flag: "https://flagcdn.com/w320/cn.png",
    path: "/blogs/isi-products/chuangju-is-17635",
  },
  {
    code: "nl",
    name: "Dutch",
    flag: "https://flagcdn.com/w320/nl.png",
    path: "/blogs/isi-products/bedden-is-17635",
  },
  {
    code: "fr",
    name: "French",
    flag: "https://flagcdn.com/w320/fr.png",
    path: "/blogs/isi-products/lits-is-17635",
  },
  {
    code: "de",
    name: "German",
    flag: "https://flagcdn.com/w320/de.png",
    path: "/blogs/isi-products/betten-is-17635",
  },
  {
    code: "id",
    name: "Indonesian",
    flag: "https://flagcdn.com/w320/id.png",
    path: "/blogs/isi-products/ranjang-is-17635",
  },
  {
    code: "it",
    name: "Italian",
    flag: "https://flagcdn.com/w320/it.png",
    path: "/blogs/isi-products/letti-is-17635",
  },
  {
    code: "ja",
    name: "Japanese",
    flag: "https://flagcdn.com/w320/jp.png",
    path: "/blogs/isi-products/beddo-is-17635",
  },
  {
    code: "ko",
    name: "Korean",
    flag: "https://flagcdn.com/w320/kr.png",
    path: "/blogs/isi-products/chimdae-is-17635",
  },
  {
    code: "es",
    name: "Spanish",
    flag: "https://flagcdn.com/w320/es.png",
    path: "/blogs/isi-products/camas-is-17635",
  },
  {
    code: "th",
    name: "Thai",
    flag: "https://flagcdn.com/w320/th.png",
    path: "/blogs/isi-products/teng-is-17635",
  },
  {
    code: "vi",
    name: "Vietnamese",
    flag: "https://flagcdn.com/w320/vn.png",
    path: "/blogs/isi-products/giuong-is-17635",
  },
];

const getCountryName = (flagUrl) => {
  const countryMap = {
    cn: "China",
    de: "Germany",
    nl: "Netherlands",
    jp: "Japan",
    kr: "South Korea",
    fr: "France",
    es: "Spain",
    th: "Thailand",
    id: "Indonesia",
    it: "Italy",
    sa: "Saudi Arabia",
    vn: "Vietnam",
    gb: "United Kingdom",
  };
  const match = flagUrl.match(/\/([a-z]{2})\.png$/);
  const countryCode = match ? match[1] : null;
  return countryMap[countryCode] || "Flag";
};

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-white">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
              View This Page in Your Language
            </p>
          </div>

          <div className="w-full max-w-[1400px]">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {languages.map((language) => {
                const isActive = currentPath === language.path;
                return (
                  <Link
                    key={language.code}
                    to={language.path}
                    className="group relative flex flex-col items-center justify-center transition-all duration-300"
                  >
                    <div
                      className={`w-[42px] h-[28px] md:w-[64px] md:h-[42px] transition-transform duration-300 flex items-center justify-center ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={`${getCountryName(language.flag)} Flag`}
                        title={`${getCountryName(language.flag)} Flag`}
                        className="w-full h-full object-cover rounded-sm border border-neutral-500"
                      />
                    </div>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1A8781] rounded-full border-2 border-white"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
