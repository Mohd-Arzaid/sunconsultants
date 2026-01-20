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

const BISCertificateForTablesAndDesksUnitIndonesian = () => {
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

export default BISCertificateForTablesAndDesksUnitIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Meja & Meja Tulis | Lisensi BIS IS 17633:2022";
  const ogTitle = "Sertifikasi BIS untuk Meja & Meja Tulis – Panduan IS 17633:2022";
  const twitterTitle = "Lisensi BIS untuk Meja & Meja Tulis | IS 17633:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Meja & Meja Tulis di bawah IS 17633:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Meja & Meja Tulis sesuai IS 17633:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Meja & Meja Tulis di bawah IS 17633:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Meja & Meja Tulis, Lisensi BIS untuk Meja & Meja Tulis, IS 17633:2022, Sertifikasi BIS untuk Meja & Meja Tulis";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meja-dan-meja-tulis-is-17633";
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
                    Sertifikat BIS untuk Meja & Meja Tulis – IS 17633:2022
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
          Sertifikat BIS untuk Meja dan Meja Tulis – Panduan Lengkap Sertifikasi BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Lisensi BIS untuk Meja dan Meja Tulis"
            alt="Sertifikat BIS untuk Meja dan Meja Tulis - Sertifikasi BIS IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Meja dan Meja Tulis wajib bagi semua
          produsen, importir, dan penjual meja dan meja tulis di India.
          Di bawah Standar India IS 17633:2022 – Meja dan Meja Tulis: Persyaratan
          Keselamatan, item furnitur ini harus diuji dan disertifikasi oleh
          Bureau of Indian Standards (BIS) sebelum dapat dijual secara legal
          di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meja dan meja tulis adalah komponen penting dari rumah, kantor, sekolah,
          universitas, ruang komersial, lingkungan perhotelan, dan
          tempat kerja industri. Karena mereka sering menopang beban, benturan, dan
          penggunaan terus-menerus, kekuatan struktural dan keselamatannya sangat penting.
          Untuk memastikan perlindungan konsumen dan keandalan produk, BIS mewajibkan
          sertifikasi wajib.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini menjelaskan IS 17633:2022, proses registrasi BIS,
          pengujian, dokumentasi yang diperlukan, biaya, timeline, hukuman,
          dan manfaat bagi produsen dan importir.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah proses kepatuhan regulasi yang dikelola oleh
          Bureau of Indian Standards, otoritas standar nasional India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS mengkonfirmasi bahwa produk memenuhi persyaratan keselamatan, kualitas,
          kinerja, dan daya tahan yang ditetapkan oleh Standar India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Sertifikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memastikan keselamatan konsumen</li>
          <li>Mendukung manufaktur berkualitas tinggi</li>
          <li>Mengurangi risiko kegagalan produk</li>
          <li>Meningkatkan penerimaan pasar</li>
          <li>Diwajibkan secara hukum di bawah Perintah Kontrol Kualitas BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah disetujui, produk menampilkan Tanda BIS (Tanda ISI) bersama dengan
          nomor lisensi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar India Mana yang Berlaku untuk Meja & Meja Tulis? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar BIS yang berlaku adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Meja dan Meja Tulis: Persyaratan
          Keselamatan
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mendefinisikan persyaratan kinerja, keselamatan struktural, dan daya tahan
          untuk semua jenis meja dan meja tulis yang digunakan di lingkungan
          perumahan, komersial, perhotelan, dan institusional.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produk yang Dicakup
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Meja kantor</li>
          <li>Meja komputer</li>
          <li>Meja belajar</li>
          <li>Meja makan</li>
          <li>Meja kopi</li>
          <li>Meja kerja</li>
          <li>Meja pelatihan</li>
          <li>Meja tulis sekolah/kuliah</li>
          <li>Meja guru</li>
          <li>Meja workstation modular</li>
          <li>Meja tulis</li>
          <li>Meja rapat/konferensi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parameter Keselamatan Utama di Bawah IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitas struktural</li>
          <li>Kapasitas menahan beban</li>
          <li>Ketahanan benturan</li>
          <li>Kinerja gaya horizontal/vertikal</li>
          <li>Kualitas finishing permukaan</li>
          <li>Keselamatan tepi</li>
          <li>Daya tahan di bawah penggunaan berulang</li>
          <li>Keselamatan material</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap meja atau meja tulis yang dijual di India harus mematuhi parameter ini
          melalui Registrasi BIS untuk Meja & Meja Tulis.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Meja dan Meja Tulis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meja dan meja tulis adalah item furnitur yang banyak digunakan yang ditemukan di rumah, kantor,
          sekolah, dan area publik. Kegagalan struktural dapat menyebabkan kecelakaan
          seperti:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Runtuh di bawah beban</li>
          <li>Cedera tepi tajam</li>
          <li>Ketidakstabilan selama penggunaan</li>
          <li>Kerusakan sambungan</li>
          <li>Pelepasan permukaan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Untuk menghindari bahaya ini, sertifikasi BIS memastikan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Desain dan konstruksi yang aman</li>
          <li>Kepatuhan terhadap persyaratan beban struktural</li>
          <li>Kinerja tahan lama</li>
          <li>Pencegahan terbalik dan runtuh</li>
          <li>Pemilihan material berkualitas tinggi</li>
          <li>Standar pasar yang seragam</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Menjual meja dan meja tulis tanpa Lisensi BIS untuk Meja & Meja Tulis adalah
          ilegal di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Meja dan Meja Tulis (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi BIS mengikuti Skema ISI (Skema Penilaian
          Kesesuaian–I), yang mencakup pengujian produk dan inspeksi
          pabrik.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Kategori Produk & Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Konfirmasikan bahwa meja/meja tulis termasuk dalam IS 17633:2022. Identifikasi jumlah
          varian dan material.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Ajukan Aplikasi BIS (Pengajuan Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Isi aplikasi di Portal Online BIS Manak dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produsen</li>
          <li>Alamat pabrik</li>
          <li>Spesifikasi produk</li>
          <li>Detail merek dagang</li>
          <li>Sistem kontrol kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Pembayaran Biaya Sertifikasi BIS
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
          Langkah 4 – Pengujian Sampel di Laboratorium yang Diakui BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produk harus menjalani pengujian lengkap seperti yang ditentukan di bawah IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Pengujian yang Dilakukan
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji Stabilitas</li>
          <li>Uji Kekuatan (Beban Statis)</li>
          <li>Uji Daya Tahan (Beban Berulang)</li>
          <li>Uji Dampak</li>
          <li>Pengukuran Defleksi</li>
          <li>Uji Keselamatan Tepi dan Permukaan</li>
          <li>Uji Beban Ruang Kerja</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lab mengunggah laporan pengujian langsung ke BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Inspeksi Pabrik BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS mengunjungi fasilitas manufaktur untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistem manajemen kualitas</li>
          <li>Kemampuan pengujian internal</li>
          <li>Kontrol material mentah</li>
          <li>Lini produksi & mesin</li>
          <li>Kalibrasi instrumen</li>
          <li>Kepatuhan dengan STI (Skema Pengujian & Inspeksi)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS menerbitkan:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Persetujuan Tanda ISI</li>
          <li>Nomor lisensi CML unik</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah ini, produsen dapat secara legal menandai dan menjual meja/meja tulis di
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Kepatuhan Pasca-Lisensi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan catatan sesuai STI</li>
          <li>Menggunakan penandaan ISI dengan benar</li>
          <li>Mengizinkan inspeksi BIS berkala</li>
          <li>Memperpanjang lisensi setiap 1–2 tahun</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Meja & Meja Tulis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini mencakup persyaratan yang berkaitan dengan
          kinerja dan keselamatan yaitu, kekuatan, stabilitas dan daya tahan
          meja dan meja tulis yang akan digunakan dalam posisi duduk dan/atau berdiri,
          digunakan oleh orang dewasa.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini berlaku untuk meja dan meja tulis yang sepenuhnya diproduksi/
          difabrikasi. Ini juga berlaku untuk unit siap rakitan;
          dalam hal itu persyaratan standar ini akan berlaku untuk
          unit yang dirakit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Meja & Meja Tulis
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Manufaktur
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lisensi pabrik</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan pengujian</li>
          <li>Sertifikat kalibrasi</li>
          <li>Layout pabrik</li>
          <li>Diagram alir proses</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar meja/meja tulis</li>
          <li>Daftar material</li>
          <li>Spesifikasi produk</li>
          <li>Laporan uji kualitas internal</li>
          <li>Foto/video produk</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas penandatangan yang berwenang</li>
          <li>Bukti alamat</li>
          <li>Surat otorisasi merek</li>
          <li>Sertifikat pendaftaran merek dagang</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi yang diisi</li>
          <li>Perjanjian produsen</li>
          <li>Surat permintaan pengujian</li>
          <li>Surat otorisasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumentasi lengkap memastikan persetujuan yang lebih cepat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian di Bawah IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian mengevaluasi kekuatan, stabilitas, daya tahan, dan keselamatan.
        </p>

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
                  Uji Stabilitas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Beban yang dinyatakan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Untuk beban berat sesekali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan di bawah gaya statis horizontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Umum
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Dampak Vertikal untuk Permukaan Meja Kaca
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Dampak Vertikal untuk Semua Permukaan Meja Lainnya
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Defleksi Permukaan Meja
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Jatuh
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Pengujian harus dilakukan hanya di laboratorium yang disetujui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Produk gagal dalam uji beban atau daya tahan</strong>
            <br />
            Solusi: Perkuat sambungan, gunakan material yang sesuai BIS, tambahkan
            penguatan.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Dokumentasi tidak lengkap</strong>
            <br />
            Solusi: Siapkan semua dokumen hukum, teknis, dan manufaktur
            terlebih dahulu.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Pabrik kekurangan peralatan pengujian yang tepat</strong>
            <br />
            Solusi: Pasang instrumen yang diperlukan dan pertahankan kalibrasi sesuai
            pedoman BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Pelabelan yang salah</strong>
            <br />
            Solusi: Pastikan penandaan ISI mengikuti aturan BIS dengan tepat.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Klasifikasi model produk yang salah</strong>
            <br />
            Solusi: Dapatkan panduan profesional untuk mengkategorikan varian
            dengan benar.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Meja & Meja Tulis
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Otorisasi legal untuk menjual di India</li>
          <li>Meningkatkan kepercayaan pelanggan</li>
          <li>Daya tahan produk yang lebih baik</li>
          <li>Akses ke pengecer besar & platform e-commerce</li>
          <li>Risiko tanggung jawab produk yang lebih rendah</li>
          <li>Kredibilitas merek yang lebih tinggi</li>
          <li>Kepatuhan dengan QCO pemerintah</li>
          <li>Keuntungan pasar kompetitif</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hukuman untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual atau mendistribusikan meja/meja tulis tanpa sertifikasi BIS dapat
          mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Denda berat</li>
          <li>Tuntutan pidana</li>
          <li>Larangan impor</li>
          <li>Perintah penutupan bisnis</li>
          <li>Pembatalan lisensi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Undang-Undang Bureau of Indian Standards, 2016 memberlakukan hukuman yang ketat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Meja & Meja Tulis?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikasi ini wajib untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing</li>
          <li>Importir</li>
          <li>Pedagang/pemilik merek</li>
          <li>Pemasok OEM/ODM</li>
          <li>Distributor furnitur</li>
          <li>Penjual e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap pabrik harus memperoleh Lisensi BIS terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan bantuan end-to-end:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretasi standar (IS 17633:2022)</li>
          <li>Klasifikasi produk</li>
          <li>Penyusunan dokumentasi</li>
          <li>Koordinasi pengujian</li>
          <li>Pengajuan portal BIS</li>
          <li>Dukungan inspeksi pabrik</li>
          <li>Tindak lanjut berkelanjutan dengan BIS</li>
          <li>Persetujuan lisensi</li>
          <li>Pembaruan dan manajemen kepatuhan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami memastikan sertifikasi yang cepat, tanpa masalah, dan bebas kesalahan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Meja dan Meja Tulis di bawah IS 17633:2022 adalah
          persyaratan kesesuaian wajib yang memastikan keselamatan produk,
          kinerja, daya tahan, dan kepatuhan terhadap standar nasional.
          Produsen dan importir harus menjalani pengujian produk, inspeksi
          pabrik, dan memenuhi semua aturan dokumentasi dan pelabelan BIS untuk
          memperoleh Tanda ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan bantuan ahli, seluruh proses sertifikasi menjadi
          lancar, cepat, dan sepenuhnya sesuai dengan peraturan BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikat BIS untuk Meja & Meja Tulis (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah sertifikasi BIS wajib untuk meja dan meja tulis?
              </strong>
              <br />
              Ya. Sesuai IS 17633:2022, semua meja dan meja tulis harus
              disertifikasi BIS sebelum dijual di India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Pengujian apa yang diperlukan untuk sertifikasi?</strong>
              <br />
              Pengujian wajib meliputi uji stabilitas, kekuatan, daya tahan,
              defleksi, dampak, dan keselamatan permukaan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Berapa biaya sertifikasi BIS?</strong>
              <br />
              Biaya berkisar antara ₹65.000 – ₹1.30.000, tergantung pada faktor
              pengujian dan inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Apakah produsen asing memerlukan Sertifikasi BIS?
              </strong>
              <br />
              Ya, melalui skema FMCS, yang mencakup inspeksi pabrik luar negeri
              oleh BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Dapatkah satu lisensi mencakup beberapa model meja/meja tulis?
              </strong>
              <br />
              Ya, tetapi hanya jika model serupa dalam konstruksi dan parameter
              pengujian.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Berapa lama proses BIS berlangsung?</strong>
              <br />
              Sekitar 30–45 hari.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Apakah pengujian wajib di lab yang diakui BIS?</strong>
              <br />
              Ya, hanya laboratorium yang disetujui BIS yang dapat melakukan pengujian.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Apa yang terjadi jika produk gagal?</strong>
              <br />
              Produk harus didesain ulang dan diajukan kembali untuk pengujian.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Apakah penandaan ISI wajib setelah sertifikasi?</strong>
              <br />
              Ya, Tanda ISI diperlukan pada produk dan kemasan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Dokumen apa yang diperlukan?</strong>
              <br />
              Gambar teknis, BOM, dokumen pabrik, laporan pengujian, rencana QC,
              dan dokumen hukum.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Meja & Meja Tulis - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={2} />
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
                alt="Logo CDSCO"
                title="Logo CDSCO"
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
                alt="Logo BISCRS"
                title="Logo BISCRS"
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
                alt="Manajemen Limbah Plastik"
                title="Manajemen Limbah Plastik"
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
                alt="Logo Sertifikat EPR"
                title="Logo Sertifikat EPR"
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
                alt="Logo Sertifikat LMPC"
                title="Logo Sertifikat LMPC"
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
                alt="Logo BIS"
                title="Logo BIS"
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
                alt="Logo Tanda ISI"
                title="Logo Tanda ISI"
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
