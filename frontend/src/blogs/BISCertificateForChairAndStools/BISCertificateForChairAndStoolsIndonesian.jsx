import FaqAuthorIndonesian from "@/components/common/FaqAuthor/FaqAuthorIndonesian";
import ManyUsersAlsoReadIndonesian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadIndonesian";
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
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForChairAndStoolsIndonesian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default BISCertificateForChairAndStoolsIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum | IS 17632:2022";
  const ogTitle =
    "Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum | IS 17632:2022";
  const twitterTitle =
    "Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum | IS 17632:2022";
  const metaDescription =
    "Pelajari semua tentang Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum di bawah IS 17632:2022. Pahami persyaratan Tanda ISI, pengujian, proses sertifikasi, dokumen, manfaat, dan FAQ";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum, IS 17632:2022, Tanda ISI Kursi dan Bangku, Lisensi BIS Kursi Bangku, Sertifikasi BIS Furnitur";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
      />
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
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Blog Terbaru</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum (IS
                    17632:2022)
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
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum (IS 17632:2022) –
          Panduan Lengkap Sertifikasi Tanda ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Lisensi BIS untuk Kursi dan Bangku Tujuan Umum"
            alt="Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum - Panduan Tanda ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi dan bangku tujuan umum termasuk di antara produk furnitur yang
          paling umum digunakan di rumah, kantor, lembaga pendidikan, fasilitas
          kesehatan, toko ritel, ruang publik, dan lingkungan komersial. Karena
          produk tempat duduk ini digunakan secara rutin dan dalam jangka waktu
          lama, produk tersebut harus memenuhi persyaratan kualitas, keselamatan,
          kekuatan, dan daya tahan tertentu untuk memastikan kinerja yang andal.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan meningkatnya penekanan pada kualitas produk dan keselamatan
          konsumen, kepatuhan terhadap Standar India telah menjadi persyaratan
          penting bagi produsen dan importir furnitur. Sertifikasi BIS untuk
          Kursi dan Bangku Tujuan Umum di bawah IS 17632:2022 membantu memastikan
          bahwa produk memenuhi persyaratan kinerja dan keselamatan yang
          ditetapkan sebelum dipasarkan di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi melalui Bureau of Indian Standards (BIS) memungkinkan
          produsen menggunakan Tanda ISI pada produk yang memenuhi syarat. Tanda
          ISI berfungsi sebagai jaminan bahwa produk sesuai dengan standar
          kualitas India yang diakui dan telah melalui proses evaluasi yang
          diperlukan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Seiring industri furnitur terus berkembang dan lembaga pengadaan
          semakin memilih produk bersertifikat, Sertifikasi BIS telah menjadi
          persyaratan kepatuhan dan akses pasar yang penting bagi produsen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sorotan Utama Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Rincian
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detail
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Nama Produk", "Kursi dan Bangku Tujuan Umum"],
                ["Standar India yang Berlaku", "IS 17632:2022"],
                ["Jenis Sertifikasi", "Sertifikasi Produk BIS"],
                ["Skema Sertifikasi", "Skema-I (Sertifikasi Tanda ISI)"],
                ["Tanda yang Berlaku", "Tanda ISI"],
                ["Otoritas Regulasi", "Bureau of Indian Standards"],
                ["Kementerian yang Berlaku", "Kementerian Perdagangan dan Industri"],
                [
                  "Persyaratan Kepatuhan",
                  "Wajib di bawah QCO Furnitur yang berlaku (Quality Control Order)",
                ],
                ["Kategori Produk", "Furnitur"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Skema Sertifikasi" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Skema-I (Sertifikasi Tanda ISI)
                      </a>
                    ) : particular === "Persyaratan Kepatuhan" ? (
                      <>
                        Wajib di bawah{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Furnitur (Quality Control Order)</strong>
                        </a>{" "}
                        yang berlaku
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum adalah proses
          penilaian kesesuaian yang dilakukan di bawah Skema Sertifikasi Produk
          BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan sertifikasi adalah memverifikasi bahwa produk mematuhi
          persyaratan yang ditetapkan dalam IS 17632:2022. Setelah sertifikasi
          diberikan, produsen diizinkan menggunakan Tanda ISI pada produk mereka.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proses sertifikasi mengevaluasi berbagai aspek kinerja produk,
          termasuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kekuatan</li>
          <li>Stabilitas</li>
          <li>Daya tahan</li>
          <li>Kinerja struktural</li>
          <li>Persyaratan keselamatan</li>
          <li>Kualitas material</li>
          <li>Pengerjaan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi membantu memastikan bahwa produk tempat duduk yang
          disuplai di pasar India memenuhi tolok ukur kualitas dan keselamatan
          yang mapan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Gambaran Umum IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 adalah Standar India yang menetapkan persyaratan untuk
          Kursi dan Bangku Tujuan Umum.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini menetapkan persyaratan terkait keselamatan, kekuatan, daya
          tahan, stabilitas, dan kinerja keseluruhan furnitur tempat duduk yang
          dimaksudkan untuk penggunaan umum.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini berlaku untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kursi dan bangku yang diproduksi sepenuhnya</li>
          <li>Kursi dan bangku yang difabrikasi</li>
          <li>Produk siap rakit setelah perakitan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan standar ini adalah memastikan bahwa produk furnitur memberikan
          kinerja yang aman, andal, dan tahan lama sepanjang masa layanan yang
          dimaksudkan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Utama di Bawah IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Kekuatan</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi dan bangku tujuan umum harus memiliki kekuatan struktural yang
          memadai untuk menahan kondisi beban yang diharapkan selama penggunaan
          normal.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Stabilitas</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furnitur harus tetap stabil selama penggunaan yang dimaksudkan dan
          tidak boleh menimbulkan risiko terbalik yang tidak perlu.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Daya Tahan</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produk harus mampu mempertahankan integritas struktural dan kinerjanya
          selama siklus penggunaan berulang.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Keselamatan</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini mencakup persyaratan terkait keselamatan yang dimaksudkan
          untuk meminimalkan risiko yang terkait dengan penggunaan furnitur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Kualitas Material dan Pengerjaan</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kualitas material, praktik manufaktur, metode perakitan, sambungan, dan
          finishing berkontribusi signifikan terhadap kepatuhan standar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Pertimbangan Ergonomis</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini menggabungkan pertimbangan terkait kinerja yang
          berkontribusi pada kenyamanan pengguna dan fungsionalitas praktis.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produk yang Tercakup di Bawah IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini umumnya berlaku untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kursi tujuan umum</li>
          <li>Bangku tujuan umum</li>
          <li>Furnitur tempat duduk tetap yang dimaksudkan untuk penggunaan umum</li>
          <li>Produk tempat duduk siap rakit setelah perakitan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus meninjau ruang lingkup standar dengan cermat untuk
          menentukan keterapannya pada produk mereka.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Periksa juga Produk Furnitur yang Tercakup di Bawah Sertifikasi BIS
            Wajib —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Sertifikasi BIS untuk furnitur</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apakah Sertifikasi BIS Wajib untuk Kursi dan Bangku Tujuan Umum?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya. Produk furnitur yang tercakup di bawah Quality Control Order (QCO)
          Furnitur yang berlaku diwajibkan mematuhi Standar India yang relevan
          dan memperoleh Sertifikasi BIS sebelum diproduksi, diimpor, dijual,
          didistribusikan, atau disuplai di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang tercakup di bawah kerangka regulasi yang berlaku harus
          memperoleh lisensi BIS dan mematuhi persyaratan penandaan yang
          ditetapkan oleh BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sebelum sertifikasi diberikan, sampel produk harus dievaluasi melalui
          pengujian yang dilakukan di laboratorium yang diakui.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian umumnya berfokus pada parameter berikut:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Evaluasi Kinerja Struktural —</strong> Menentukan apakah
            kursi atau bangku dapat menahan kondisi penggunaan normal tanpa
            kegagalan.
          </li>
          <li>
            <strong>Pengujian Stabilitas —</strong> Menilai apakah furnitur
            tetap stabil selama penggunaan yang dimaksudkan dan menahan
            terbalik.
          </li>
          <li>
            <strong>Penilaian Kekuatan —</strong> Mengevaluasi kapasitas
            menahan beban dan integritas struktural rangka, sambungan, dan
            penopang.
          </li>
          <li>
            <strong>Evaluasi Daya Tahan —</strong> Memeriksa retensi kinerja
            setelah siklus penggunaan berulang sepanjang masa layanan produk.
          </li>
          <li>
            <strong>Penilaian Keselamatan —</strong> Mengidentifikasi potensi
            bahaya dan memverifikasi kepatuhan terhadap persyaratan keselamatan
            yang ditetapkan.
          </li>
          <li>
            <strong>Inspeksi Pengerjaan —</strong> Meninjau kualitas
            konstruksi, finishing, integritas perakitan, dan standar pengerjaan
            keseluruhan.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Penandaan Produk
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Produk yang disertifikasi di bawah IS 17632:2022 umumnya diwajibkan
          membawa informasi identifikasi seperti:
        </p>

        <ul className={LIST_CLASS}>
          <li>Nama atau merek dagang produsen</li>
          <li>Identifikasi model atau desain</li>
          <li>Nomor batch atau lot</li>
          <li>Tanggal produksi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanda ISI hanya boleh diterapkan setelah memperoleh lisensi BIS yang
          valid.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 1: Evaluasi Ruang Lingkup Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah pertama melibatkan penentuan apakah produk termasuk dalam
          ruang lingkup IS 17632:2022 dan QCO Furnitur yang berlaku.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Tinjau jenis kursi atau bangku, penggunaan yang dimaksudkan, material,
          dan konstruksi sebelum memulai proses sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 2: Persiapan Dokumentasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen menyiapkan dokumentasi teknis dan kepatuhan yang diperlukan
          untuk sertifikasi, termasuk catatan perusahaan, detail pabrik,
          spesifikasi produk, dan prosedur kontrol kualitas.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Dokumentasi yang lengkap dan akurat membantu menghindari penundaan
          yang tidak perlu selama tinjauan BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Langkah 3: Pengujian Produk</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel representatif diuji di laboratorium yang diakui BIS untuk
          memverifikasi kepatuhan terhadap persyaratan IS 17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Laporan uji laboratorium adalah dokumen teknis utama yang mendukung
          aplikasi sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 4: Pengajuan Aplikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi sertifikasi diajukan beserta dokumentasi pendukung, laporan
          uji, dan informasi manufaktur.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS meninjau aplikasi untuk kelengkapan dan kepatuhan teknis sebelum
          melanjutkan lebih jauh.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Langkah 5: Inspeksi Pabrik</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS dapat mengevaluasi fasilitas manufaktur, sistem produksi, dan
          proses kontrol kualitas untuk memverifikasi kemampuan memproduksi
          produk yang memenuhi syarat secara konsisten.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Penilaian ini biasanya mencakup infrastruktur produksi, sistem QC,
          kontrol bahan baku, dan ketertelusuran produk.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Langkah 6: Tinjauan Teknis</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi, laporan uji, dan temuan inspeksi ditinjau oleh BIS sebelum
          keputusan sertifikasi dibuat.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap observasi atau kekurangan yang muncul selama tinjauan harus
          ditangani oleh pelamar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Langkah 7: Pemberian Lisensi</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah kepatuhan memuaskan, BIS memberikan lisensi dan mengotorisasi
          penggunaan Tanda ISI pada kursi dan bangku tujuan umum yang
          disertifikasi.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus terus mematuhi persyaratan BIS sepanjang periode
          lisensi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Kepatuhan terhadap Regulasi India —</strong> Memenuhi
            persyaratan kualitas dan keselamatan wajib di bawah QCO Furnitur
            yang berlaku.
          </li>
          <li>
            <strong>Akses Pasar Legal —</strong> Menyediakan kursi dan bangku
            bersertifikat di India sesuai dengan persyaratan regulasi yang
            berlaku.
          </li>
          <li>
            <strong>Kredibilitas Produk yang Meningkat —</strong> Tanda ISI
            menunjukkan kesesuaian dengan standar India yang diakui.
          </li>
          <li>
            <strong>Kepercayaan Pelanggan yang Meningkat —</strong> Konsumen
            dan pembeli institusional lebih memilih produk yang dievaluasi
            terhadap tolok ukur yang mapan.
          </li>
          <li>
            <strong>Keunggulan Kompetitif —</strong> Penerimaan yang lebih
            besar dalam proses pengadaan komersial dan pemerintah.
          </li>
          <li>
            <strong>Reputasi Merek yang Lebih Baik —</strong> Menunjukkan
            komitmen terhadap kualitas produk, keselamatan, dan keandalan jangka
            panjang.
          </li>
          <li>
            <strong>Dukungan untuk UMKM —</strong> Membantu produsen kecil dan
            menengah memperkuat kehadiran pasar dan membangun kepercayaan
            pelanggan.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum Selama Sertifikasi
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Kegagalan Pengujian Produk —</strong> Kekurangan desain
            atau manufaktur dapat mengakibatkan ketidakpatuhan selama evaluasi
            laboratorium.
          </li>
          <li>
            <strong>Masalah Dokumentasi —</strong> Catatan yang tidak lengkap
            atau tidak konsisten sering menyebabkan penundaan sertifikasi.
          </li>
          <li>
            <strong>Kesenjangan Kepatuhan Manufaktur —</strong> Sistem kontrol
            kualitas mungkin perlu ditingkatkan sebelum sertifikasi dapat
            diberikan.
          </li>
          <li>
            <strong>Kompleksitas Regulasi —</strong> Mengelola pengujian,
            inspeksi, dan prosedur sertifikasi dapat menjadi tantangan tanpa
            bimbingan ahli.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India membantu produsen, importir, eksportir, dan
          bisnis dengan persyaratan kepatuhan regulasi di seluruh India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Layanan kami meliputi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Penilaian keterapan produk</li>
          <li>Konsultasi sertifikasi BIS</li>
          <li>Dukungan dokumentasi</li>
          <li>Koordinasi pengujian laboratorium</li>
          <li>Persiapan inspeksi pabrik</li>
          <li>Manajemen aplikasi</li>
          <li>Bantuan kepatuhan regulasi</li>
          <li>Dukungan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan kami adalah membantu klien menavigasi persyaratan sertifikasi
          secara efisien dan mencapai kepatuhan dengan penundaan minimal.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum di bawah IS
          17632:2022 memainkan peran penting dalam memastikan kualitas produk,
          keselamatan, kekuatan, stabilitas, dan daya tahan. Sertifikasi
          membantu produsen menunjukkan kepatuhan terhadap Standar India
          sambil memperkuat kepercayaan pelanggan dan mendukung akses pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Seiring permintaan produk furnitur terjamin kualitasnya terus
          meningkat, Sertifikasi BIS dan Tanda ISI memberikan jaminan berharga
          bagi konsumen, institusi, dan lembaga pengadaan. Produsen yang
          berinvestasi dalam kepatuhan tidak hanya memenuhi persyaratan regulasi
          tetapi juga meningkatkan daya saing dan reputasi pasar jangka panjang
          mereka.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika Anda berencana memperoleh Sertifikasi BIS untuk Kursi dan Bangku
          Tujuan Umum di bawah IS 17632:2022, Sun Certifications India dapat
          memberikan panduan ahli dan dukungan kepatuhan end-to-end sepanjang
          proses sertifikasi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Kursi dan Bangku Tujuan Umum (IS
          17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Apa itu IS 17632:2022?</strong>
              <br />
              IS 17632:2022 adalah Standar India yang menetapkan persyaratan
              untuk Kursi dan Bangku Tujuan Umum.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Apakah Sertifikasi BIS wajib untuk Kursi dan Bangku Tujuan
                Umum?
              </strong>
              <br />
              Produk yang tercakup di bawah Quality Control Order Furnitur yang
              berlaku diwajibkan mematuhi persyaratan sertifikasi BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Apa itu Tanda ISI?</strong>
              <br />
              Tanda ISI adalah tanda sertifikasi standar yang diterbitkan di
              bawah Skema Sertifikasi Produk BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Siapa yang dapat mengajukan Sertifikasi BIS?</strong>
              <br />
              Baik produsen India maupun produsen asing dapat mengajukan
              sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Apakah Sertifikasi BIS memerlukan pengujian produk?
              </strong>
              <br />
              Ya. Pengujian produk adalah komponen penting dari proses
              sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Apakah kursi siap rakit tercakup di bawah IS 17632:2022?
              </strong>
              <br />
              Ya. Standar ini berlaku untuk produk siap rakit setelah perakitan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Produk apa yang dikecualikan dari ruang lingkup IS 17632:2022?
              </strong>
              <br />
              Produk seperti kursi recliner, kursi goyang, kursi miring, sofa,
              dan produk tempat duduk khusus tertentu umumnya dikecualikan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Apa manfaat memperoleh Sertifikasi BIS?
              </strong>
              <br />
              Manfaatnya meliputi kepatuhan regulasi, kredibilitas produk yang
              lebih baik, kepercayaan pelanggan yang meningkat, dan penerimaan
              pasar yang lebih baik.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Bisakah produsen asing memperoleh Sertifikasi BIS?
              </strong>
              <br />
              Ya. Produsen asing dapat mengajukan melalui rute sertifikasi BIS
              yang berlaku untuk produsen di luar negeri.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Bagaimana Sun Certifications India dapat membantu?</strong>
              <br />
              Sun Certifications India menyediakan dukungan end-to-end untuk
              sertifikasi BIS, termasuk dokumentasi, koordinasi pengujian,
              manajemen aplikasi, dan bantuan kepatuhan.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Kursi & Bangku - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sumber Daya Terkait
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Sertifikasi ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Sertifikasi BIS untuk Produsen Asing
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={1} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Layanan Kami
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Konsultan Sertifikat Terbaik India
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Tanda BIS (Lisensi ISI) untuk Manufaktur Asing
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikasi Registrasi CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Registrasi BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Manajemen Limbah Plastik
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikasi Sertifikat EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikasi Sertifikat LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikat Registrasi BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              TANDA ISI (BIS) untuk Produsen India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
