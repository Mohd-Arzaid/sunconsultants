import FaqAuthorIndonesian from "@/components/common/FaqAuthor/FaqAuthorIndonesian";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import { Services as ServicesIndonesian } from "@/pages/SchemeX/SchemeXIndonesian";

const CANONICAL_URL =
  "https://bis-certifications.com/konsultan-sertifikasi-bis-terbaik-dan-terpercaya-indonesia";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/KonsultanBISterbaikdiIndonesia.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/KonsultanBISterbaikdiIndonesia.webp";

const PAGE_TITLE =
  "Konsultan sertifikasi BIS terbaik dan terpercaya di Indonesia – Sun Certifications India";
const META_DESCRIPTION =
  "Sertifikasi BIS untuk produsen Indonesia dibuat mudah. Sun Certifications India menangani Lisensi FMCS, registrasi CRS, dll. di Indonesia — termasuk layanan AIR & persiapan audit pabrik.";
const META_KEYWORDS =
  "konsultan BIS di Indonesia, sertifikasi BIS Indonesia, sertifikasi FMCS produsen Indonesia, registrasi BIS Indonesia";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: PAGE_TITLE,
  description: META_DESCRIPTION,
  image: SCHEMA_IMAGE_URL,
  author: {
    "@type": "Person",
    name: "Dhruv Aggarwal",
    url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun Certifications India",
    logo: {
      "@type": "ImageObject",
      url: "https://bis-certifications.com/company-logo/company-logo.webp",
    },
  },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description: META_DESCRIPTION,
  brand: {
    "@type": "Brand",
    name: "Sun Certifications India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "58042",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kami memiliki sertifikasi SNI untuk produk kami — apakah BIS tidak diperlukan jika kami sudah memiliki SNI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SNI dan BIS adalah kerangka sertifikasi nasional yang sepenuhnya terpisah tanpa pengakuan timbal balik. SNI mensertifikasi kepatuhan terhadap standar nasional Indonesia untuk pasar Indonesia. BIS mensertifikasi kepatuhan terhadap Standar India (nomor IS) untuk pasar India. Produk yang memiliki sertifikasi SNI tetap harus memperoleh sertifikasi BIS terpisah sebelum dapat diimpor atau dijual secara legal di India. Keduanya berjalan secara paralel — yang satu tidak menggantikan yang lain.",
      },
    },
    {
      "@type": "Question",
      name: "Kami adalah perakit elektronik di Batam — komponen kami berasal dari China dan Taiwan. Siapa yang membutuhkan BIS — kami atau pemasok komponen kami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sertifikasi BIS harus dipegang oleh produsen hukum — entitas yang namanya muncul pada produk dan yang pabriknya memproduksinya. Jika Anda merakit produk elektronik jadi di Batam dan mengekspornya ke India di bawah merek Anda atau merek pelanggan Anda, sertifikasi BIS harus diperoleh atas nama Anda sebagai produsen Indonesia.",
      },
    },
    {
      "@type": "Question",
      name: "AIFTA memberi kami bea preferensial ke India — apakah itu mengurangi atau menghilangkan persyaratan BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Perjanjian Perdagangan Bebas ASEAN-India memberikan tarif bea masuk preferensial pada produk Indonesia yang memenuhi syarat — hal ini tidak memengaruhi persyaratan sertifikasi wajib BIS dengan cara apa pun.",
      },
    },
    {
      "@type": "Question",
      name: "Kami memasok mesin pengolahan minyak sawit yang diproduksi di Indonesia — apakah BIS Scheme X berlaku untuk kami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Scheme X sedang diperluas untuk mencakup peralatan pengolahan industri, termasuk mesin pengolahan makanan dan agri-processing.",
      },
    },
    {
      "@type": "Question",
      name: "Kami adalah produsen furnitur Indonesia yang memasok IKEA India — apakah kami membutuhkan BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Furnitur dan produk kayu sedang dalam tinjauan QCO BIS yang aktif. Tanggung jawab sertifikasi BIS tetap berada pada Anda sebagai produsen.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "Perdagangan bilateral India-Indonesia melampaui $38 miliar pada 2023 — menjadikan India salah satu dari 5 mitra dagang teratas Indonesia",
  "Perjanjian Perdagangan Bebas ASEAN-India (AIFTA) berlaku — barang Indonesia mendapat manfaat bea masuk preferensial atau nol pada ribuan lini tarif yang masuk ke India",
  "Indonesia adalah pemasok ASEAN terbesar India untuk batubara, tetapi hubungan ini secara aktif didiversifikasi ke barang manufaktur, bahan kimia, dan produk konsumen",
  "Impor minyak sawit India dari Indonesia saja melebihi $7 miliar per tahun — ekspor komoditas agrikultur terbesar Indonesia ke India, diproses melalui rantai pasok FMCG dan manufaktur makanan India",
  "Boom konstruksi dan infrastruktur India menghasilkan permintaan berkelanjutan untuk kayu lapis Indonesia, kayu rekayasa, dan produk batu — kategori yang sedang dalam perluasan QCO BIS aktif",
];

const INDIA_PRIORITY_POINTS = [
  "Kelas menengah India — diproyeksikan mencapai 500 juta pada 2030 — mendorong permintaan akan elektronik konsumen, furnitur, produk perawatan pribadi, dan makanan kemasan: semua kategori di mana manufaktur Indonesia kompetitif",
  "Skema PLI (Production Linked Incentive) India di tekstil, elektronik, dan pengolahan makanan menciptakan peluang sourcing B2B baru bagi pemasok komponen dan bahan baku Indonesia",
  "Produsen Indonesia yang sudah memasok merek global seperti IKEA, H&M, dan Unilever dari pabrik mereka di Indonesia menemukan pengiriman ke pasar India tiba-tiba tunduk pada persyaratan BIS yang tidak mereka sadari",
  "Hubungan investasi bilateral Indonesia-India berkembang — konglomerat Indonesia seperti Salim Group, Sinar Mas, dan Indofood memiliki operasi yang menghadap India yang semakin membutuhkan kepatuhan BIS pada lini produk mereka",
];

const BIS_OVERVIEW_POINTS = [
  "SNI (Standar Nasional Indonesia) tidak diakui oleh BIS. Standar nasional wajib Indonesia — yang dikelola oleh BSN (Badan Standardisasi Nasional) — tidak memiliki pengakuan timbal balik dengan BIS. Produk yang disertifikasi sesuai standar SNI tidak secara otomatis memenuhi Standar India BIS, bahkan ketika parameter teknisnya tumpang tindih.",
  "Registrasi BPOM tidak menggantikan BIS. BPOM (Badan Pengawas Obat dan Makanan) Indonesia mengatur kosmetik, farmasi, dan produk makanan di Indonesia — tidak memiliki kesetaraan dengan rezim BIS India atau persyaratan CDSCO.",
  "Laporan laboratorium terakreditasi KAN memiliki keterbatasan penerapan. Laporan dari laboratorium terakreditasi KAN (Komite Akreditasi Nasional) saat ini tidak termasuk dalam daftar pengakuan timbal balik BIS yang diterima untuk sebagian besar skema. Untuk registrasi CRS (elektronik), Sun Certifications India mengevaluasi per produk apakah laporan KAN dapat dipertimbangkan — tetapi produsen Indonesia harus merencanakan pengujian laboratorium yang diakui BIS dalam sebagian besar kasus.",
  "Sertifikasi produk LSPro bukan setara BIS. Tanda sertifikasi produk LSPro (Lembaga Sertifikasi Produk) Indonesia tidak memiliki kedudukan di bea cukai India atau BIS.",
  "Produsen asing tidak dapat mengajukan langsung ke BIS. Perusahaan Indonesia harus menunjuk Authorized Indian Representative (AIR) — entitas hukum India yang terdaftar yang mengajukan atas nama mereka, menandatangani semua dokumen BIS, dan mengelola semua korespondensi dengan biro.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ tahun pengalaman BIS",
    benefit:
      "Kami melacak setiap QCO baru — termasuk yang memengaruhi kategori karet, elektronik, dan kimia yang dominan dalam ekspor Indonesia",
  },
  {
    offer: "Layanan AIR",
    benefit:
      "Kami bertindak sebagai Authorized Indian Representative Anda — tidak perlu entitas di India",
  },
  {
    offer: "Analisis kesenjangan SNI-ke-IS",
    benefit:
      "Kami memetakan dokumentasi SNI yang ada terhadap persyaratan IS — menghindari pekerjaan ulang yang sia-sia",
  },
  {
    offer: "Evaluasi laporan laboratorium KAN",
    benefit:
      "Kami mengonfirmasi per produk apakah laporan KAN dapat diterima sebelum merekomendasikan pengujian ulang",
  },
  {
    offer: "Persiapan audit FMCS dan Scheme X",
    benefit:
      "Kami telah mempersiapkan produsen luar negeri untuk inspeksi pabrik BIS — termasuk audit simulasi khusus IS",
  },
  {
    offer: "Kejelasan rantai pasok",
    benefit:
      "Kami memberikan saran tentang siapa yang memegang BIS ketika pabrik Indonesia merakit produk dengan komponen asal luar negeri",
  },
  {
    offer: "Manajer proyek khusus",
    benefit: "Satu kontak, tonggak yang jelas, tanpa ambiguitas",
  },
  {
    offer: "Kepatuhan multi-kementerian",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — semuanya in-house",
  },
  {
    offer: "Dukungan pasca-sertifikasi",
    benefit: "Perpanjangan, audit pengawasan, amandemen — ditangani secara proaktif",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinIndonesialang = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <ServicesIndonesian />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default BestandmosttrustedBIScertificationConsultantinIndonesialang;

const MetaTags = () => {
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";

  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={META_DESCRIPTION} />
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={META_DESCRIPTION} />
      <meta name="twitter:image" content={SCHEMA_IMAGE_URL} />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(ratingSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Beranda</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Konsultan sertifikasi BIS terbaik dan terpercaya di
                    Indonesia
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <MainContentLeft />
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          {PAGE_TITLE}
        </h1>

        <div className="mb-6">
          <img
            src={PAGE_IMAGE_SRC}
            title={PAGE_TITLE}
            alt={PAGE_TITLE}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indonesia dan India adalah dua ekonomi terbesar di Asia Tenggara dan
          Asia Selatan — dan selama puluhan tahun, keduanya sebagian besar
          saling melewati daripada saling menjual. Hal itu berubah dengan cepat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indonesia adalah ekonomi kepulauan terbesar di dunia, negara
          berpenduduk terbanyak keempat di bumi, dan kekuatan manufaktur dalam
          turunan minyak sawit, peralatan pengolahan batubara dan mineral,
          produk karet, tekstil, perakitan elektronik, furnitur, dan barang
          konsumen cepat saji. Pembeli India secara aktif bersumber dari
          pemasok Indonesia di setiap kategori ini.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India memiliki rezim sertifikasi produk wajib yang beroperasi secara
          independen dari SNI, BPOM, atau sistem sertifikasi Indonesia mana pun.
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS) mengatur apa yang masuk ke India — dan
          untuk daftar kategori produk yang terus berkembang, tanpa sertifikasi
          BIS berarti tidak ada masuknya secara legal.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Di{" "}
          <a
            href="https://bis-certifications.com/"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Sun Certifications India
          </a>
          , kami telah membantu produsen Indonesia — termasuk produsen dari
          negara ASEAN yang menavigasi sertifikasi BIS — mendapatkan sertifikasi
          secara efisien sejak 2016. Jika bisnis Indonesia Anda menargetkan
          India, halaman ini memberi tahu Anda persis apa yang diperlukan BIS,
          mengapa hal itu penting, dan bagaimana kami menanganinya untuk Anda.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa India — Peluang bagi Produsen Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India dan Indonesia adalah mitra dagang alami — dua ekonomi besar
          dengan pertumbuhan tercepat di dunia, secara geografis berdekatan, dan
          semakin selaras dalam strategi industri. Angka-angka mencerminkan
          hubungan yang masih jauh di bawah potensinya — yang justru merupakan
          peluangnya.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Fakta perdagangan utama:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {TRADE_FACTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa produsen Indonesia memprioritaskan India sekarang:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ikhtisar Sertifikasi BIS — Yang Perlu Diketahui Produsen Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) beroperasi di bawah Kementerian
          Urusan Konsumen India dan mengatur kualitas serta keselamatan produk
          untuk pasar India. Setiap produk yang diatur berdasarkan Quality
          Control Order (QCO) harus memiliki sertifikasi BIS yang valid
          sebelum dapat diimpor, dijual, atau didistribusikan secara legal di
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Yang harus dipahami produsen Indonesia tentang sertifikasi yang sudah
          mereka miliki:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
        Bagi produsen Indonesia yang berencana mengekspor produk mereka ke India, memahami persyaratan sertifikasi yang ditetapkan oleh Biro Standar India (BIS) merupakan langkah yang sangat penting. Banyak perusahaan mencari informasi terkait Sertifikasi BIS untuk India, Sertifikat BIS untuk India, Lisensi BIS untuk India, maupun Sertifikat BIS India untuk memastikan produk mereka memenuhi standar yang berlaku di pasar India. Regulasi BIS mencakup berbagai kategori produk, mulai dari elektronik, peralatan industri, bahan kimia, hingga barang konsumsi. Baik Anda memerlukan Registrasi BIS untuk India, Sertifikasi BIS India, maupun Lisensi BIS untuk memasuki pasar India secara legal, kepatuhan terhadap persyaratan teknis dan dokumentasi yang benar sangatlah penting. Sun Certifications India membantu produsen Indonesia dalam seluruh proses sertifikasi, mulai dari pengujian produk, penyusunan dokumen teknis, koordinasi dengan laboratorium yang diakui, hingga memperoleh persetujuan BIS yang diperlukan untuk memasuki pasar India dengan lancar.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Skema Sertifikasi BIS yang Berlaku untuk Produsen Indonesia
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. FMCS — Foreign Manufacturers Certification Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Rute utama bagi produsen Indonesia yang mencari Tanda ISI — sertifikasi
          kualitas wajib India yang paling dikenal luas untuk barang yang
          diatur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. CRS — Compulsory Registration Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk produk elektronik dan IT — kategori kepatuhan BIS dengan
          pertumbuhan tercepat bagi perakit dan eksportir elektronik Indonesia.
          Tidak diperlukan audit pabrik — tetapi pengujian produk di laboratorium
          yang diakui BIS wajib dilakukan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. BIS Scheme X</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi wajib untuk mesin industri dan peralatan modal — berkembang
          pesat di bawah QCO baru.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Produsen Indonesia
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 1 — Penilaian Produk dan Identifikasi Skema
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kami mengidentifikasi skema BIS yang benar dan Standar India yang
          berlaku untuk produk Anda sebelum pekerjaan aplikasi dimulai.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 2 — Menunjuk Authorized Indian Representative (AIR)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India dapat bertindak sebagai AIR Anda, menghilangkan
          kebutuhan untuk mencari entitas terpisah.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 3 — Analisis Kesenjangan dan Persiapan Dokumentasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kami menyiapkan dan meninjau semua berkas teknis, catatan manufaktur,
          dan dokumen pendukung yang diperlukan untuk aplikasi BIS Anda.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 4 — Identifikasi laboratorium yang diakui BIS untuk kategori
          produk Anda dan lakukan pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produk Anda diuji terhadap Standar India yang berlaku di laboratorium
          yang disetujui BIS atau saling diakui.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 5 — Siapkan dan kirimkan aplikasi lengkap melalui portal BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kami mengajukan aplikasi Anda di portal BIS dan mengelola semua
          korespondensi resmi dengan BIS atas nama Anda.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 6 — Audit Pabrik BIS di Indonesia (Scheme X / FMCS)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pejabat BIS melakukan perjalanan ke fasilitas manufaktur Indonesia
          Anda. Kami mengoordinasikan dan mempersiapkan tim Anda untuk inspeksi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 7 — BIS menerbitkan sertifikat registrasi Scheme X atau
          lisensi Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah semua persyaratan terpenuhi, BIS memberikan sertifikasi Anda
          dan produk Anda dapat masuk ke pasar India secara legal.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS di Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan dokumen bervariasi menurut skema dan kategori produk. Sun
          Certifications India menyediakan daftar periksa yang disesuaikan untuk
          produk spesifik Anda setelah konsultasi awal.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat pendaftaran / pendirian perusahaan (Indonesia)</li>
          <li>
            Berkas teknis produk — spesifikasi, gambar, daftar bahan
          </li>
          <li>
            Laporan uji dari laboratorium yang disetujui BIS atau saling diakui
          </li>
          <li>Diagram alir proses manufaktur</li>
          <li>
            Daftar pabrik, mesin, dan peralatan pengujian beserta catatan
            kalibrasi
          </li>
          <li>Rencana kontrol kualitas dan prosedur pengujian internal</li>
          <li>
            Surat penunjukan untuk Authorized Indian Representative (AIR)
          </li>
          <li>Surat otorisasi di kop surat perusahaan</li>
        </ol>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sun Certifications India adalah konsultan BIS terbaik dan
          terpercaya di Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen Indonesia yang memasuki India membutuhkan konsultan yang
          memahami realitas rantai pasok ASEAN, kesenjangan dokumentasi
          SNI-ke-IS, dan kompleksitas praktis mengelola sertifikasi BIS luar
          negeri dari Jakarta, Surabaya, atau Batam.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>Yang Kami Tawarkan</th>
                <th className={TH_CLASS}>
                  Apa Artinya bagi Produsen Indonesia
                </th>
              </tr>
            </thead>
            <tbody>
              {BENEFITS_ROWS.map((row) => (
                <tr key={row.offer}>
                  <td className={TD_CLASS}>{row.offer}</td>
                  <td className={TD_CLASS}>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indonesia adalah salah satu ekonomi manufaktur paling berpengaruh di
          Asia — karet dari Sumatra berjalan di ban di jalan-jalan India, minyak
          sawit dari Kalimantan mengalir melalui rantai pasok FMCG India,
          elektronik yang dirakit di Batam menghidupkan rumah India, dan furnitur
          yang dibuat di Jawa memenuhi apartemen India. Manufaktur Indonesia
          sudah hadir di India. Yang baru banyak eksportir Indonesia sadari
          adalah bahwa sertifikasi BIS adalah yang membuat kehadiran itu legal
          dan berkelanjutan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          AIFTA telah menurunkan hambatan tarif. Sertifikasi BIS adalah
          hambatan kepatuhan — dan sepenuhnya dapat dikelola dengan mitra yang
          tepat.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pertanyaan yang Sering Diajukan
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Kami memiliki sertifikasi SNI untuk produk kami — apakah BIS tidak
          diperlukan jika kami sudah memiliki SNI?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          SNI dan BIS adalah kerangka sertifikasi nasional yang sepenuhnya
          terpisah tanpa pengakuan timbal balik. SNI mensertifikasi kepatuhan
          terhadap standar nasional Indonesia untuk pasar Indonesia. BIS
          mensertifikasi kepatuhan terhadap Standar India (nomor IS) untuk pasar
          India. Produk yang memiliki sertifikasi SNI tetap harus memperoleh
          sertifikasi BIS terpisah sebelum dapat diimpor atau dijual secara
          legal di India. Keduanya berjalan secara paralel — yang satu tidak
          menggantikan yang lain.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Kami adalah perakit elektronik di Batam — komponen kami berasal dari
          China dan Taiwan. Siapa yang membutuhkan BIS — kami atau pemasok
          komponen kami?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS harus dipegang oleh produsen hukum — entitas yang
          namanya muncul pada produk dan yang pabriknya memproduksinya. Jika
          Anda merakit produk elektronik jadi di Batam dan mengekspornya ke
          India di bawah merek Anda atau merek pelanggan Anda, sertifikasi BIS
          harus diperoleh atas nama Anda sebagai produsen Indonesia.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          AIFTA memberi kami bea preferensial ke India — apakah itu mengurangi
          atau menghilangkan persyaratan BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak. Perjanjian Perdagangan Bebas ASEAN-India memberikan tarif bea
          masuk preferensial pada produk Indonesia yang memenuhi syarat — hal
          ini tidak memengaruhi persyaratan sertifikasi wajib BIS dengan cara
          apa pun.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Kami memasok mesin pengolahan minyak sawit yang diproduksi di
          Indonesia — apakah BIS Scheme X berlaku untuk kami?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X sedang diperluas untuk mencakup peralatan pengolahan
          industri, termasuk mesin pengolahan makanan dan agri-processing.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Kami adalah produsen furnitur Indonesia yang memasok IKEA India —
          apakah kami membutuhkan BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furnitur dan produk kayu sedang dalam tinjauan QCO BIS yang aktif.
          Tanggung jawab sertifikasi BIS tetap berada pada Anda sebagai
          produsen.
        </p>

        <FaqAuthorIndonesian questionNumber={1} />
      </div>
    </div>
  );
};
