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
    "Sertifikat BIS untuk Kursi & Bangku | IS 17632:2022 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Kursi & Bangku – Panduan IS 17632:2022";
  const twitterTitle = "Lisensi BIS untuk Kursi & Bangku | IS 17632:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Kursi & Bangku di bawah IS 17632:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Kursi & Bangku sesuai IS 17632:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Kursi & Bangku di bawah IS 17632:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Kursi & Bangku, Lisensi BIS untuk Kursi & Bangku, IS 17632:2022, Sertifikasi BIS untuk Kursi & Bangku";
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
                    Sertifikat BIS untuk Kursi & Bangku – IS 17632:2022
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
          Sertifikat BIS untuk Kursi dan Bangku Tujuan Umum – Panduan Lengkap
          untuk IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Lisensi BIS untuk Kursi & Bangku"
            alt="Sertifikat BIS untuk Kursi & Bangku - Sertifikasi BIS IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Kursi dan Bangku Tujuan Umum adalah persyaratan
          wajib di bawah Standar India IS 17632:2022. Standar ini menetapkan
          persyaratan keselamatan, daya tahan, dan kinerja untuk kursi dan
          bangku yang digunakan di rumah, kantor, area komersial, lembaga
          pendidikan, kafetaria, restoran, hotel, dan ruang publik.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi dan bangku termasuk di antara item furnitur yang paling banyak
          digunakan dan terus-menerus terkena beban, gerakan, dan stres
          berulang. Kursi atau bangku yang strukturnya lemah dapat runtuh
          tiba-tiba, menyebabkan cedera. Untuk mencegah bahaya tersebut dan
          memastikan keselamatan konsumen, Bureau of Indian Standards (BIS)
          mewajibkan setiap produsen dan importir untuk memperoleh Sertifikasi
          BIS untuk Kursi dan Bangku sebelum menjualnya di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman ini menyediakan panduan lengkap untuk Sertifikasi BIS untuk
          kursi dan bangku di bawah IS 17632:2022, termasuk proses sertifikasi,
          dokumen yang diperlukan, persyaratan pengujian, biaya, tantangan,
          sanksi, dan manfaat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem kepatuhan produk yang diatur oleh Bureau
          of Indian Standards, otoritas standar nasional India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS memastikan bahwa produk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memenuhi standar keselamatan dan kualitas India</li>
          <li>Telah lulus pengujian laboratorium yang disetujui BIS</li>
          <li>Telah menjalani inspeksi pabrik</li>
          <li>
            Menyelamatkan konsumen dari produk yang tidak aman atau di bawah
            standar
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produk yang disertifikasi menampilkan Tanda ISI, menunjukkan kepatuhan
          terhadap Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar yang Berlaku – IS 17632:2022 untuk Kursi & Bangku
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar BIS untuk kursi dan bangku adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Kursi dan Bangku Tujuan Umum:
          Persyaratan Keselamatan
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup semua kursi dan bangku non-spesialis yang
          digunakan untuk keperluan tempat duduk di rumah, kantor, lingkungan
          komersial, tempat umum, dan pengaturan institusional.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produk yang Dicakup di Bawah IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kursi tujuan umum</li>
          <li>Kursi makan</li>
          <li>Kursi pengunjung kantor</li>
          <li>Kursi belajar</li>
          <li>Kursi kafetaria</li>
          <li>Kursi restoran</li>
          <li>Kursi ruang rapat</li>
          <li>Kursi area tunggu</li>
          <li>Kursi kayu</li>
          <li>Kursi logam</li>
          <li>Kursi plastik (non-spesialis)</li>
          <li>Bangku tujuan umum</li>
          <li>Bangku bar</li>
          <li>Bangku makan</li>
          <li>Bangku tangga (dalam kriteria yang ditentukan)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parameter Keselamatan & Kinerja Utama
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 mengevaluasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekuatan struktural</li>
          <li>Stabilitas</li>
          <li>Daya tahan di bawah penggunaan berulang</li>
          <li>Kekuatan tempat duduk</li>
          <li>Kinerja sandaran</li>
          <li>Ketahanan benturan kaki</li>
          <li>Kekuatan sambungan</li>
          <li>Kualitas finishing permukaan</li>
          <li>Keselamatan tepi dan sudut</li>
          <li>Kualitas material</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Semua kursi dan bangku yang dijual di India harus mematuhi parameter
          ini dan memperoleh Lisensi BIS untuk Kursi dan Bangku.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Kursi & Bangku
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi dan bangku menahan berat manusia dan digunakan secara sering di
          semua lingkungan. Kegagalan struktural dapat menyebabkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kursi yang runtuh</li>
          <li>Patahnya kaki</li>
          <li>Retaknya tempat duduk</li>
          <li>Kegagalan sandaran</li>
          <li>Cedera akibat tepi tajam</li>
          <li>Ketidakstabilan yang menyebabkan jatuh</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Sertifikasi BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memastikan produk tempat duduk yang aman</li>
          <li>Mencegah kecelakaan dan cedera</li>
          <li>Meningkatkan daya tahan produk</li>
          <li>Mencegah impor di bawah standar</li>
          <li>Membangun kualitas pasar yang seragam</li>
          <li>Meningkatkan kepercayaan pelanggan</li>
          <li>Wajib menurut hukum India (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa Sertifikasi BIS, produsen tidak dapat secara hukum menjual kursi
          atau bangku di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Kursi dan Bangku (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses BIS mengikuti Skema Sertifikasi Tanda ISI, melibatkan
          pengujian, inspeksi, dan verifikasi aplikasi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Tipe Produk & Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Konfirmasi bahwa kursi/bangku termasuk di bawah IS 17632:2022.
          Identifikasi varian desain dan material yang digunakan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Ajukan Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Aplikasi diajukan melalui Portal Online BIS Manak, memerlukan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produsen</li>
          <li>Informasi pabrik</li>
          <li>Spesifikasi produk</li>
          <li>Detail merek/merek dagang</li>
          <li>Alur kerja proses manufaktur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Bayar Biaya Sertifikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian sampel</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Pengujian Produk sesuai IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian wajib dilakukan di laboratorium yang diakui BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tes Meliputi:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji Stabilitas</li>
          <li>Uji Kekuatan untuk Tempat Duduk</li>
          <li>Uji Daya Tahan Sandaran</li>
          <li>Uji Beban Kaki Depan/Samping/Belakang</li>
          <li>Uji Dampak Tempat Duduk</li>
          <li>Uji Jatuh</li>
          <li>Uji Kelelahan</li>
          <li>Uji Finishing Permukaan</li>
          <li>Uji Tepi Tajam</li>
          <li>Daya tahan struktural di bawah siklus berulang</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hasil tes harus menunjukkan kepatuhan penuh dengan IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Inspeksi Pabrik oleh BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS mengunjungi pabrik untuk mengevaluasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Inspeksi bahan baku</li>
          <li>Prosedur kontrol kualitas</li>
          <li>Kemampuan pengujian</li>
          <li>Kalibrasi peralatan</li>
          <li>Volume produksi</li>
          <li>Kepatuhan dengan Skema Pengujian & Inspeksi BIS (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Jika pengujian dan inspeksi berhasil, BIS mengeluarkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS (Lisensi Tanda ISI)</li>
          <li>Nomor CML</li>
          <li>Persetujuan untuk menempelkan Tanda ISI pada kursi dan bangku</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Kewajiban Pasca-Lisensi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Menggunakan Tanda ISI sesuai persyaratan pelabelan BIS</li>
          <li>Mempertahankan catatan kontrol kualitas</li>
          <li>Menjalani inspeksi pengawasan BIS secara teratur</li>
          <li>Memperpanjang lisensi setiap 1–2 tahun</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Kursi & Bangku
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini mencakup persyaratan untuk kursi dan bangku tujuan umum.
          Standar ini berlaku untuk kursi dan bangku tujuan umum yang sepenuhnya
          diproduksi/dibuat. Ini juga berlaku untuk unit siap perakitan; dalam
          hal ini persyaratan standar ini akan berlaku untuk unit yang dirakit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Kursi & Bangku
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Produsen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lisensi/registrasi pabrik</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan pengujian internal</li>
          <li>Sertifikat kalibrasi</li>
          <li>Layout pabrik & denah lantai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar kursi/bangku</li>
          <li>Dimensi & spesifikasi</li>
          <li>Daftar material</li>
          <li>Deskripsi fitur keselamatan</li>
          <li>Laporan uji kualitas internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas & alamat</li>
          <li>Surat otorisasi merek</li>
          <li>Sertifikat merek dagang (opsional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi</li>
          <li>Formulir permintaan pengujian</li>
          <li>Formulir deklarasi</li>
          <li>Surat otorisasi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Kursi & Bangku (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 mencakup pengujian mekanis, struktural, dan keselamatan
          yang ekstensif.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tes Wajib
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Klausul
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Persyaratan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Desain dan pengerjaan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Overbalancing Depan dan Overbalancing Samping untuk Kursi
                  tanpa Lengan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Overbalancing Belakang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Overbalancing Samping untuk Kursi dengan Lengan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bangku/ Poufs (Semua Arah)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Kekuatan
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tes-tes ini memastikan penggunaan harian yang aman di bawah kondisi
          dunia nyata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Kursi gagal dalam uji stabilitas</strong>
            <br />
            Terjadi karena distribusi berat yang tidak tepat.
            <br />
            Perbaikan: Tingkatkan desain kaki, perluas area dasar.
          </li>
          <li>
            <strong>Sambungan lemah menyebabkan kegagalan tes</strong>
            <br />
            Perbaikan: Gunakan material yang diperkuat & konektor yang lebih
            baik.
          </li>
          <li>
            <strong>Peralatan pengujian internal yang tidak memadai</strong>
            <br />
            Perbaikan: Pasang instrumen yang sesuai BIS yang diperlukan.
          </li>
          <li>
            <strong>Ketidakkonsistenan dokumentasi</strong>
            <br />
            Perbaikan: Siapkan dokumen secara sistematis sebelum mengajukan.
          </li>
          <li>
            <strong>Varian produk tidak dipetakan dengan benar</strong>
            <br />
            Perbaikan: Kelompokkan produk berdasarkan struktur & parameter tes.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Kursi & Bangku
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Izin legal untuk menjual di India</li>
          <li>Peningkatan keselamatan produk</li>
          <li>Peningkatan kepercayaan pelanggan</li>
          <li>Risiko tanggung jawab produk yang lebih rendah</li>
          <li>Diperlukan untuk daftar e-commerce</li>
          <li>Penting untuk tender pemerintah</li>
          <li>Kredibilitas merek yang lebih tinggi</li>
          <li>Keunggulan kompetitif</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual kursi atau bangku tanpa sertifikasi BIS dapat menyebabkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter yang berat</li>
          <li>Penarikan/penyitaan produk</li>
          <li>Pembatalan lisensi pabrik</li>
          <li>Penuntutan pidana</li>
          <li>Pembatasan impor</li>
          <li>Daftar hitam pasar</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sanksi diberlakukan di bawah Undang-Undang BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Kursi & Bangku?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">Wajib untuk:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing yang mengekspor ke India</li>
          <li>Importir</li>
          <li>Pemilik merek/pedagang</li>
          <li>Pemasok OEM/ODM</li>
          <li>Rantai ritel</li>
          <li>Penjual online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap pabrik memerlukan Lisensi BIS terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Kursi dan Bangku Tujuan Umum di bawah IS
          17632:2022 wajib untuk memastikan keselamatan produk, stabilitas
          struktural, dan daya tahan. Sertifikasi BIS tidak hanya membantu
          produsen mempertahankan standar kualitas tinggi tetapi juga
          memungkinkan akses pasar legal dan meningkatkan kepercayaan konsumen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan bantuan profesional, proses sertifikasi—dari pengujian hingga
          inspeksi dan persetujuan—menjadi lancar, dapat diprediksi, dan
          sepenuhnya patuh.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikat BIS untuk Kursi dan Bangku
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah Sertifikasi BIS wajib untuk kursi dan bangku?
              </strong>
              <br />
              Ya, sesuai IS 17632:2022, semua kursi dan bangku tujuan umum harus
              disertifikasi BIS sebelum dijual di India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Tes apa yang diperlukan?</strong>
              <br />
              Tes stabilitas, kekuatan, daya tahan, dampak, kelelahan, dan
              keselamatan material.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Berapa lama sertifikasi BIS berlangsung?</strong>
              <br />
              Biasanya 30–45 hari.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Berapa biaya sertifikasi?</strong>
              <br />
              Sekitar ₹60.000–₹1,30.000 tergantung pada pengujian dan inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Bisakah produsen asing mengajukan?</strong>
              <br />
              Ya, di bawah skema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Apakah penandaan ISI wajib?</strong>
              <br />
              Ya, setelah lisensi BIS diberikan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Mengapa kursi gagal dalam pengujian BIS?</strong>
              <br />
              Penyebab umum termasuk kaki lemah, kekuatan sambungan yang buruk,
              dan ketidakstabilan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Bisakah beberapa model dicakup di bawah satu lisensi?
              </strong>
              <br />
              Hanya jika mereka memenuhi kriteria kesamaan dan kepatuhan
              standar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Apakah inspeksi pabrik diperlukan?</strong>
              <br />
              Ya, ini wajib untuk sertifikasi tanda ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Dokumen apa yang diperlukan?</strong>
              <br />
              Lisensi pabrik, spesifikasi teknis, daftar mesin, rencana QC,
              gambar produk, dll.
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
