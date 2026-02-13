/**
 * Language-wise footer link paths. Each key maps to the path for that page in the given language.
 * If a page has no translation, English path is used (fallback).
 * Routes source: App.jsx, BISFMPagesRoutes, BISCertificationPagesRoutes, ISIMarkPagesRoutes,
 * CRSRegistrationRoutes, schemeXPagesRoutes. Pages like about, contact, faqs, sitemap, Blogs,
 * ministry-updates, webinar, SchemeX-products, privacy-policy, terms-and-conditions are
 * English-only in routing — same path for all languages.
 */

const EN = {
  bisCertification: "/what-is-bis-certificate-indian-bis",
  isiMark: "/a-guide-to-bis-certification-indian-bis",
  bisMarkForeign: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
  crsRegistration: "/what-is-crs-bis-or-crs-registration",
  schemeX: "/indian-bis-certification-under-scheme-x",
  about: "/about",
  contact: "/contact",
  faqs: "/faqs",
  sitemap: "/sitemap",
  blogs: "/Blogs",
  bisQcoUpdates: "/bis-qco-updates",
  ministryUpdates: "/ministry-updates",
  webinar: "/webinar",
  schemeXProducts: "/SchemeX-products",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
};

const FOOTER_PATHS = {
  en: EN,
  ja: {
    ...EN,
    bisCertification: "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    isiMark: "/ja/bis-isi-mark-shounin",
    bisMarkForeign: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    crsRegistration: "/ja/crs-bis-toha-nani-ka-crs-toroku",
    schemeX: "/ja/indo-no-bis-nintei-sukimu-x",
  },
  th: {
    ...EN,
    bisCertification: "/th/bis-certificate-khue-a-rai-bis-india",
    isiMark: "/th/bis-isi-mark-raprong",
    bisMarkForeign: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    crsRegistration: "/th/crs-bis-khue-a-rai-rab-phit-thab-crs",
    schemeX: "/th/bis-prathiap-india-taem-dai-tae-skema-x",
  },
  zh: {
    ...EN,
    bisCertification: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    isiMark: "/zh/bis-isi-mark-renzheng",
    bisMarkForeign: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    crsRegistration: "/zh/crs-bis-shi-shen-me-huo-crs-deng-ji",
    schemeX: "/zh/yin-du-bis-fang-an-x-ren-zheng",
  },
  de: {
    ...EN,
    bisCertification: "/de/was-ist-das-bis-zertifikat-indisches-bis",
    isiMark: "/de/bis-isi-mark-zertifizierung",
    bisMarkForeign: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    crsRegistration: "/de/was-ist-crs-bis-oder-crs-registrierung",
    schemeX: "/de/indische-bis-zertifizierung-nach-schema-x",
  },
  nl: {
    ...EN,
    bisCertification: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    isiMark: "/nl/bis-isi-mark-certificering",
    bisMarkForeign: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    crsRegistration: "/nl/wat-is-crs-bis-of-crs-registratie",
    schemeX: "/nl/indiaas-bis-certificaat-volgens-schema-x",
  },
  fr: {
    ...EN,
    bisCertification: "/fr/quest-ce-que-le-certificat-bis-indien",
    isiMark: "/fr/certification-bis-marque-isi",
    bisMarkForeign: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    crsRegistration: "/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs",
    schemeX: "/fr/certification-bis-indienne-selon-schema-x",
  },
  es: {
    ...EN,
    bisCertification: "/es/que-es-el-certificado-bis-bis-indio",
    isiMark: "/es/certificacion-bis-marca-isi",
    bisMarkForeign: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    crsRegistration: "/es/que-es-crs-bis-o-registro-crs",
    schemeX: "/es/certificacion-bis-india-bajo-esquema-x",
  },
  id: {
    ...EN,
    bisCertification: "/id/apa-itu-sertifikat-bis-bis-india",
    isiMark: "/id/sertifikasi-bis-isi-mark",
    bisMarkForeign: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    crsRegistration: "/id/apa-itu-crs-bis-atau-registrasi-crs",
    schemeX: "/id/sertifikasi-bis-india-di-bawah-skema-x",
  },
  it: {
    ...EN,
    bisCertification: "/it/cose-il-certificato-bis-indiano",
    isiMark: "/it/certificazione-bis-isi-mark",
    bisMarkForeign: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    crsRegistration: "/it/cose-il-crs-bis-o-registrazione-crs",
    schemeX: "/it/certificazione-bis-indiana-secondo-schema-x",
  },
  ko: {
    ...EN,
    bisCertification: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    isiMark: "/ko/bis-isi-mark-injeung",
    bisMarkForeign: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    crsRegistration: "/ko/crs-bis-i-mueos-inga-crs-deunglog",
    schemeX: "/ko/indo-bis-injeung-scheme-x-haenghaeng",
  },
  vi: {
    ...EN,
    bisCertification: "/vi/chung-chi-bis-la-gi-bis-an-do",
    isiMark: "/vi/chung-nhan-bis-isi-mark",
    bisMarkForeign: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
    crsRegistration: "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
    schemeX: "/vi/chung-nhan-bis-an-do-theo-scheme-x",
  },
  ar: {
    ...EN,
    bisCertification: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    isiMark: "/ar/dalil-shahadat-bis-bis-alhind",
    bisMarkForeign: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    crsRegistration: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    schemeX: "/ar/shahadat-bis-alhind-tahata-almukhatat-x",
  },
};

/**
 * Returns footer paths for the given language. Falls back to English if lang is missing.
 * @param {string} lang - Language code: en, ja, th, zh, de, nl, fr, es, id, it, ko, vi, ar
 * @returns {object} Object with keys: bisCertification, isiMark, bisMarkForeign, crsRegistration, schemeX, about, contact, faqs, sitemap, blogs, bisQcoUpdates, ministryUpdates, webinar, schemeXProducts, privacyPolicy, termsAndConditions
 */
export function getFooterPaths(lang) {
  return FOOTER_PATHS[lang] ?? EN;
}

export default getFooterPaths;
