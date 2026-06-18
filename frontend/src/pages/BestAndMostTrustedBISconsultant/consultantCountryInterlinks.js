export const BIS_CERTIFICATE_PATH = "/what-is-bis-certificate-indian-bis";
export const FMCS_PATH =
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";
export const CRS_PATH = "/what-is-crs-bis-or-crs-registration";
export const SCHEME_X_PATH = "/indian-bis-certification-under-scheme-x";

export const ENGLISH_COUNTRY_PAGES = [
  {
    label: "BIS Consultant in India",
    path: "/best-and-most-trusted-bis-consultant-india",
  },
  {
    label: "BIS Consultant in France",
    path: "/best-and-most-trusted-bis-consultant-france",
  },
  {
    label: "BIS Consultant in Germany",
    path: "/best-and-most-trusted-bis-consultant-germany",
  },
  {
    label: "BIS Consultant in Italy",
    path: "/best-and-most-trusted-bis-consultant-italy",
  },
  {
    label: "BIS Consultant in Netherlands",
    path: "/best-and-most-trusted-bis-consultant-netherland",
  },
  {
    label: "BIS Consultant in Indonesia",
    path: "/best-and-most-trusted-bis-consultant-indonesia",
  },
  {
    label: "BIS Consultant in Japan",
    path: "/best-and-most-trusted-bis-consultant-japan",
  },
  {
    label: "BIS Consultant in South Korea",
    path: "/best-and-most-trusted-bis-consultant-south-korea",
  },
  {
    label: "BIS Consultant in Thailand",
    path: "/best-and-most-trusted-bis-consultant-thailand",
  },
  {
    label: "BIS Consultant in Spain",
    path: "/best-and-most-trusted-bis-consultant-spain",
  },
  {
    label: "BIS Consultant in Vietnam",
    path: "/best-and-most-trusted-bis-consultant-vietnam",
  },
];

export const LANG_PAGE_BY_ENGLISH_PATH = {
  "/best-and-most-trusted-bis-consultant-france":
    "/meilleur-et-plus-fiable-consultant-certification-bis-france",
  "/best-and-most-trusted-bis-consultant-germany":
    "/bester-und-vertrauenswuerdigster-bis-zertifizierungsberater-deutschland",
  "/best-and-most-trusted-bis-consultant-italy":
    "/migliore-e-piu-affidabile-consulente-certificazione-bis-italia",
  "/best-and-most-trusted-bis-consultant-netherland":
    "/beste-en-meest-betrouwbare-bis-certificeringsconsultant-nederland",
  "/best-and-most-trusted-bis-consultant-indonesia":
    "/konsultan-sertifikasi-bis-terbaik-dan-terpercaya-indonesia",
  "/best-and-most-trusted-bis-consultant-japan":
    "/saikou-de-saishinraisuru-bis-nintei-konsarutanto-nihon",
  "/best-and-most-trusted-bis-consultant-south-korea":
    "/hangug-eseo-choegowa-gajang-sinrohaneun-bis-injeung-konsulteonteu",
  "/best-and-most-trusted-bis-consultant-thailand":
    "/konsaltan-bis-thi-di-thi-sut-lae-na-chue-thai-thi-sut-prathet-thai",
  "/best-and-most-trusted-bis-consultant-spain":
    "/mejor-y-mas-confiable-consultor-certificacion-bis-espana",
  "/best-and-most-trusted-bis-consultant-vietnam":
    "/tu-van-chung-nhan-bis-tot-nhat-va-dang-tin-cay-nhat-tai-viet-nam",
};

export function getOtherCountryLinks(currentEnglishPath) {
  return ENGLISH_COUNTRY_PAGES.filter((c) => c.path !== currentEnglishPath);
}
