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

const BISCertificateForStorageUnitIndonesian = () => {
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

export default BISCertificateForStorageUnitIndonesian;

const MetaTags = () => {
  const title = "Sertifikat BIS untuk Unit Penyimpanan | Lisensi BIS IS 17634:2022";
  const ogTitle = "Sertifikasi BIS untuk Unit Penyimpanan – Panduan IS 17634:2022";
  const twitterTitle = "Lisensi BIS untuk Unit Penyimpanan | IS 17634:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Unit Penyimpanan di bawah IS 17634:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Unit Penyimpanan sesuai IS 17634:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Unit Penyimpanan di bawah IS 17634:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Unit Penyimpanan, Lisensi BIS untuk Unit Penyimpanan, IS 17634:2022, Sertifikasi BIS untuk Unit Penyimpanan";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/unit-penyimpanan-is-17634";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    Sertifikat BIS untuk Unit Penyimpanan – IS 17634:2022
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
          Sertifikat BIS untuk Unit Penyimpanan – Panduan Lengkap Sertifikasi BIS IS 17634:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="Lisensi BIS untuk Unit Penyimpanan"
            alt="Sertifikat BIS untuk Unit Penyimpanan - Sertifikasi BIS IS 17634:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Unit Penyimpanan adalah persyaratan wajib di bawah
          Standar India IS 17634:2022. Standar ini mencakup persyaratan penting
          keselamatan, daya tahan, dan kinerja struktural untuk semua
          jenis furnitur penyimpanan yang digunakan di rumah, kantor, sekolah, tempat
          komersial, dan pengaturan industri.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Unit penyimpanan meliputi:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kabinet</li>
          <li>Lemari pakaian</li>
          <li>Unit rak</li>
          <li>Laci & lemari laci</li>
          <li>Kabinet arsip</li>
          <li>Unit penyimpanan samping</li>
          <li>Sistem penyimpanan modular</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Karena unit penyimpanan banyak digunakan di ruang perumahan dan komersial,
          stabilitas struktural dan keselamatannya sangat penting.
          Unit penyimpanan berkualitas buruk dapat roboh, runtuh, atau menyebabkan cedera karena
          tepi tajam, sambungan lemah, atau konstruksi tidak stabil. Untuk memastikan
          keselamatan pelanggan dan kualitas produk, Sertifikasi BIS untuk Unit
          Penyimpanan dibuat wajib di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan lengkap ini menjelaskan IS 17634:2022, persyaratan
          sertifikasi, proses BIS, dokumentasi, pengujian, biaya, timeline,
          hukuman, dan manfaat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah penilaian kesesuaian pihak ketiga yang dikeluarkan oleh
          Bureau of Indian Standards, memastikan bahwa produk mematuhi standar
          keselamatan dan kualitas India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS memverifikasi bahwa suatu produk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memenuhi Standar India</li>
          <li>Telah lulus pengujian laboratorium</li>
          <li>Telah menjalani inspeksi pabrik</li>
          <li>Mengikuti kontrol kualitas berkelanjutan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produk bersertifikat membawa Tanda BIS (Tanda ISI).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS Mana yang Berlaku untuk Unit Penyimpanan? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar BIS wajib untuk unit penyimpanan adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – Unit Penyimpanan: Persyaratan Keselamatan
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup semua jenis furnitur penyimpanan. Ini mendefinisikan
          keselamatan, daya tahan, kapasitas beban, dan persyaratan desain untuk memastikan
          penggunaan yang aman di bawah kondisi operasional harian.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Persyaratan Utama IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitas struktural</li>
          <li>Kinerja menahan beban</li>
          <li>Kekuatan laci</li>
          <li>Ketahanan terhadap terbalik</li>
          <li>Kualitas material</li>
          <li>Keselamatan tepi</li>
          <li>Finishing permukaan</li>
          <li>Daya tahan di bawah penggunaan berulang</li>
          <li>Tidak adanya bahaya jebakan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Baik diproduksi di India atau diimpor, semua unit penyimpanan harus
          menjalani Registrasi BIS untuk Unit Penyimpanan sebelum dijual.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS untuk Unit Penyimpanan Wajib
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unit penyimpanan digunakan secara luas dan sering menopang beban berat.
          Kegagalan struktural dapat mengakibatkan cedera serius atau kerusakan properti.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alasan Sertifikasi BIS Diperlukan
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mencegah bahaya terbalik</li>
          <li>Memastikan kapasitas menahan beban</li>
          <li>Meningkatkan daya tahan dan umur pakai</li>
          <li>Menghilangkan tepi tajam dan finishing berbahaya</li>
          <li>Memastikan keselamatan anak dalam penggunaan perumahan</li>
          <li>Menyelaraskan kualitas produk</li>
          <li>Wajib di bawah Perintah Kontrol Kualitas BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak ada produsen atau importir yang secara hukum dapat menjual unit penyimpanan tanpa
          Lisensi BIS untuk Unit Penyimpanan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Unit Penyimpanan (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi mengikuti Skema ISI (Conformity Assessment
          Scheme-I) yang melibatkan pengujian produk dan inspeksi pabrik.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Keterapan
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Analisis apakah model furnitur penyimpanan termasuk dalam:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Kabinet, rak, laci, unit lemari pakaian, unit arsip, atau furnitur
            serupa.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Konfirmasi standar yang benar: IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Pengajuan Aplikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ajukan secara online melalui Portal BIS Manak Online.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Kirim:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail bisnis</li>
          <li>Informasi unit manufaktur</li>
          <li>Klasifikasi produk</li>
          <li>Nama merek</li>
          <li>Diagram alur proses</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Bayar Biaya BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Termasuk:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian produk</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Pengujian Produk (Persyaratan IS 17634:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sampel diuji di laboratorium yang diakui BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Laboratorium mengevaluasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitas</li>
          <li>Kekuatan struktural</li>
          <li>Kapasitas menahan beban</li>
          <li>Daya tahan laci</li>
          <li>Kekuatan rak</li>
          <li>Keselamatan tepi dan sudut</li>
          <li>Batas zat berbahaya</li>
          <li>Kinerja di bawah penggunaan berulang</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hasil pengujian harus mencerminkan kepatuhan penuh.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Inspeksi Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Sistem kontrol kualitas</li>
          <li>Inspeksi bahan baku</li>
          <li>Kemampuan pengujian internal</li>
          <li>Kalibrasi instrumen</li>
          <li>Kepatuhan terhadap Skema Pengujian dan Inspeksi (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah evaluasi berhasil, BIS mengeluarkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Izin untuk menggunakan Tanda ISI</li>
          <li>Nomor CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Persyaratan Pasca Lisensi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ikuti persyaratan penandaan</li>
          <li>Pertahankan sistem kualitas</li>
          <li>Inspeksi pengawasan BIS</li>
          <li>Pembaruan lisensi setiap 1–2 tahun</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Unit Penyimpanan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini mencakup persyaratan terkait
          kinerja dan keselamatan unit penyimpanan, termasuk bagian yang dapat dipindahkan
          dan tidak dapat dipindahkan yang dimaksudkan untuk penggunaan domestik dan untuk
          penggunaan institusional seperti pengarsipan kertas atau sejenisnya.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini berlaku untuk unit penyimpanan yang sepenuhnya
          diproduksi/dibuat. Ini juga berlaku untuk
          unit siap rakit, dalam hal ini persyaratan standar ini
          akan berlaku untuk unit yang dirakit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Unit Penyimpanan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Di bawah ini adalah daftar lengkap DOKUMEN SERTIFIKASI BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Dokumen Manufaktur
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat registrasi pabrik</li>
          <li>Rencana tata letak</li>
          <li>Diagram alur proses manufaktur</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan pengujian</li>
          <li>Sertifikat kalibrasi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas</li>
          <li>Bukti alamat</li>
          <li>Otorisasi merek (jika berlaku)</li>
          <li>Sertifikat merek dagang (opsional tetapi direkomendasikan)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar produk</li>
          <li>Diagram perakitan</li>
          <li>Daftar material</li>
          <li>Laporan pengujian internal</li>
          <li>Fitur keselamatan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi</li>
          <li>Surat otorisasi pabrik</li>
          <li>Surat permintaan pengujian</li>
          <li>Formulir deklarasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memiliki dokumentasi lengkap membantu menghindari penundaan pemrosesan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Unit Penyimpanan (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian ketat memastikan produk memenuhi tolok ukur keselamatan dan daya tahan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Pengujian Utama di Bawah IS 17634:2022
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Umum
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lendutan rak
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan penyangga rak
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji beban berkelanjutan untuk bagian atas dan bawah
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan penyangga rel pakaian
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lepasnya rel pakaian
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji struktur dan rangka bawah
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji jatuh
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji untuk unit dengan roda atau roda
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan pintu berengsel
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji tutup keras pintu berengsel
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji tutup/buka keras pintu geser dan penutup depan horizontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan penutup berengsel bawah
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji jatuh untuk penutup berengsel atas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji tutup/buka keras penutup depan vertikal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan elemen ekstensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji tutup/buka keras elemen ekstensi / Perpindahan
                  bagian bawah elemen ekstensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji interlock
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji kekuatan mekanisme penguncian dan penahan untuk
                  elemen ekstensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mekanisme penguncian dan penahan untuk pintu, penutup dan
                  penutup depan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Gaya Tarik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Siklus Kemudahan Beban Atas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Jatuh – Dinamis – untuk Unit dengan Permukaan Duduk
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bagian yang dapat dipindahkan, penyangga rak, bagian atas dan bawah
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji beban berkelanjutan (kelebihan beban)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji lepas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unit yang Didukung oleh Lantai
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unit yang dapat disesuaikan ke Tinggi 1 000 mm atau kurang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unit yang dapat disesuaikan ke ketinggian
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Membuka Pintu, Elemen Ekstensi dan Penutup, Semua Unit Penyimpanan
                  Tidak Dimuat
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Semua area penyimpanan tidak dimuat dan semua pintu, elemen ekstensi
                  dan penutup terbuka
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Semua area penyimpanan tidak dimuat dengan beban terbalik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Semua area penyimpanan dimuat dengan beban terbalik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pintu, Elemen Ekstensi dan Penutup Tertutup dan Terkunci, Semua
                  Unit Penyimpanan Dimuat
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Stabilitas Gaya Vertikal untuk Unit Penyimpanan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Stabilitas untuk Pedestal/Unit Penyimpanan dengan Permukaan Duduk
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Stabilitas Dinamis untuk Unit dengan Roda
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Kekuatan untuk Lampiran Dinding
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Pengujian wajib dan harus dilakukan hanya di laboratorium yang disetujui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Klasifikasi Unit Penyimpanan yang Salah</strong>
            <br />
            Selalu konfirmasi ruang lingkup di bawah IS 17634:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Pabrik Tidak Siap</strong>
            <br />
            QMS, kalibrasi, dan pengujian internal harus siap sebelum
            inspeksi.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Kegagalan Uji Produk</strong>
            <br />
            Pastikan:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>Kekuatan rak</li>
            <li>Daya tahan laci</li>
            <li>Stabilitas anti terbalik</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Dokumen Hilang</strong>
            <br />
            Hindari penundaan dengan menyiapkan dokumentasi terlebih dahulu.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Ketidakcocokan Nama Merek</strong>
            <br />
            Harus sesuai dengan merek dagang dan label.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Unit Penyimpanan
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan hukum wajib</li>
          <li>Jaminan keselamatan pelanggan</li>
          <li>Peningkatan kredibilitas pasar</li>
          <li>Kelayakan untuk e-commerce & rantai ritel</li>
          <li>Pengurangan risiko kegagalan produk</li>
          <li>Kelayakan tender pemerintah</li>
          <li>Diferensiasi merek</li>
          <li>Kepercayaan konsumen yang lebih tinggi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hukuman untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual atau mengimpor unit penyimpanan tanpa persetujuan BIS dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda berat</li>
          <li>Penyitaan produk</li>
          <li>Larangan manufaktur</li>
          <li>Tuntutan pidana</li>
          <li>Pemblokiran merek</li>
          <li>Penarikan dari pasar</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan wajib di bawah aturan BIS dan Perintah Kontrol Kualitas
          (QCO).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Unit Penyimpanan?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing</li>
          <li>Importir</li>
          <li>Pedagang (pemilik merek)</li>
          <li>Pemasok OEM & ODM</li>
          <li>Merek furnitur ritel & online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap pabrik memerlukan lisensi BIS terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan dukungan lengkap dari ujung ke ujung:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretasi standar (IS 17634:2022)</li>
          <li>Klasifikasi produk</li>
          <li>Persiapan dokumentasi</li>
          <li>Koordinasi dengan laboratorium yang diakui BIS</li>
          <li>Dukungan pengujian</li>
          <li>Pengajuan portal BIS</li>
          <li>Panduan inspeksi pabrik</li>
          <li>Persetujuan lisensi</li>
          <li>Pembaruan dan pengawasan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami memastikan proses sertifikasi yang cepat, lancar, dan bebas kesalahan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Unit Penyimpanan di bawah IS 17634:2022 adalah
          penting untuk memastikan keselamatan produk, kinerja struktural, dan
          daya tahan. Ini juga merupakan persyaratan hukum wajib untuk menjual atau
          mengimpor furnitur penyimpanan di India. Dengan dokumentasi yang tepat,
          pengujian, dan panduan ahli, proses sertifikasi menjadi
          mulus.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tim konsultasi BIS kami yang berdedikasi memastikan persetujuan cepat, dokumentasi
          yang akurat, dan dukungan kepatuhan dari ujung ke ujung untuk produsen dan
          importir.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Sertifikat BIS untuk Unit Penyimpanan (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah sertifikasi BIS wajib untuk unit penyimpanan di India?
              </strong>
              <br />
              Ya. Sertifikasi BIS untuk Unit Penyimpanan adalah wajib sesuai
              Standar India IS 17634:2022 – Unit Penyimpanan: Persyaratan
              Keselamatan. Standar ini telah dimasukkan di bawah Perintah
              Kontrol Kualitas (QCO), yang berarti tidak ada produsen, importir, atau
              penjual yang secara hukum diizinkan untuk menjual unit penyimpanan di pasar
              India tanpa persetujuan BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Jenis unit penyimpanan apa yang tercakup dalam IS 17634:2022?
              </strong>
              <br />
              IS 17634:2022 berlaku untuk berbagai furnitur penyimpanan yang digunakan di
              ruang perumahan, komersial, dan institusional.
              <br />
              Standar ini mencakup:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Kabinet (kayu, logam, modular)</li>
              <li>Lemari & lemari pakaian</li>
              <li>Unit rak</li>
              <li>Kabinet arsip</li>
              <li>Unit laci & lemari laci</li>
              <li>Sideboard & sistem penyimpanan modular</li>
              <li>Unit penyimpanan kantor</li>
              <li>Furnitur penyimpanan kompak</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Pengujian apa yang dilakukan untuk Sertifikasi BIS unit
                penyimpanan?
              </strong>
              <br />
              Unit penyimpanan menjalani beberapa pengujian wajib untuk mengevaluasi
              daya tahan, kekuatan, keselamatan, dan kinerjanya.
              <br />
              Pengujian utama meliputi:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                Uji Stabilitas: Memastikan unit tidak roboh selama penggunaan atau
                ekstensi laci.
              </li>
              <li>
                Uji Beban Statis: Mengukur kapasitas menahan beban rak,
                laci, dan struktur utama.
              </li>
              <li>
                Uji Daya Tahan/Endurance: Memeriksa kinerja laci,
                pintu, dan rak selama siklus penggunaan berulang.
              </li>
              <li>
                Uji Kekuatan Rak: Mengevaluasi melorot atau melengkung di bawah beban.
              </li>
              <li>
                Uji Dampak: Memastikan ketahanan struktural terhadap dampak
                tidak disengaja.
              </li>
              <li>
                Uji Ketahanan Terbalik: Memeriksa kinerja anti terbalik ketika
                laci sepenuhnya dimuat dan diperpanjang.
              </li>
              <li>
                Uji Keselamatan Tepi & Finishing: Memastikan tidak ada tepi tajam atau finishing
                berbahaya.
              </li>
              <li>Uji Keselamatan Material: Mengkonfirmasi material non-toksik dan aman.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Berapa lama proses sertifikasi BIS untuk unit penyimpanan?
              </strong>
              <br />
              Timeline Sertifikasi BIS yang khas untuk unit penyimpanan adalah 30–45
              hari kerja, tergantung pada kesiapan produk dan kualitas dokumentasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Bisakah produsen asing mengajukan Sertifikasi BIS untuk
                unit penyimpanan?
              </strong>
              <br />
              Ya. Produsen asing harus memperoleh sertifikasi BIS di bawah
              FMCS (Foreign Manufacturers Certification Scheme).
              <br />
              Persyaratan utama meliputi:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Perwakilan India lokal (AIR)</li>
              <li>Pengujian produk di laboratorium India yang disetujui BIS</li>
              <li>Inspeksi pabrik luar negeri oleh pejabat BIS</li>
              <li>Kepatuhan terhadap IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Apa yang terjadi jika produk unit penyimpanan gagal dalam pengujian BIS?
              </strong>
              <br />
              Jika sampel gagal dalam pengujian wajib apa pun:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Produsen menerima laporan kegagalan.</li>
              <li>Mereka harus melakukan modifikasi desain/material yang diperlukan.</li>
              <li>Sampel yang direvisi harus dikirimkan untuk pengujian ulang.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Apakah inspeksi pabrik wajib untuk Sertifikasi BIS?
              </strong>
              <br />
              Ya. Inspeksi pabrik wajib untuk semua sertifikasi tanda
              ISI, termasuk unit penyimpanan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Bisakah pedagang atau pemilik merek mengajukan Sertifikasi BIS?
              </strong>
              <br />
              Ya, tetapi hanya jika:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Mereka memiliki merek, dan</li>
              <li>
                Mereka memiliki perjanjian manufaktur yang sah dengan
                pabrik yang sebenarnya
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              Lisensi BIS dikeluarkan per pabrik, bukan per perusahaan.
              <br />
              Oleh karena itu, lokasi manufaktur yang sebenarnya harus menjalani pengujian
              dan inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Bisakah beberapa model unit penyimpanan dicakup dalam satu lisensi
                BIS?
              </strong>
              <br />
              Hanya jika:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Model-model tersebut berada di bawah standar yang sama</li>
              <li>Mereka diproduksi di pabrik yang sama</li>
              <li>Mereka memiliki konstruksi dan bahan baku yang serupa</li>
              <li>Mereka memenuhi parameter pengujian yang sama</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Persyaratan pelabelan apa yang harus diikuti setelah
                sertifikasi?
              </strong>
              <br />
              Setelah disetujui, produk harus menampilkan:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Tanda ISI (tanda sertifikasi BIS)</li>
              <li>Nomor standar (IS 17634:2022)</li>
              <li>Nomor Lisensi CML</li>
              <li>Nama dan alamat produsen</li>
              <li>Nomor batch atau serial</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Unit Penyimpanan - IS 17634:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={3} />
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
