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

const BISCertificateForWeldedPipesAndTubesIndonesian = () => {
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

export default BISCertificateForWeldedPipesAndTubesIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Pipa & Tabung Las | Lisensi BIS IS 17876:2022";
  const ogTitle =
    "Sertifikasi BIS untuk Pipa & Tabung Las – Panduan IS 17876:2022";
  const twitterTitle =
    "Lisensi BIS untuk Pipa & Tabung Las | IS 17876:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Pipa & Tabung Las di bawah IS 17876:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Pipa & Tabung Las sesuai IS 17876:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Pipa & Tabung Las di bawah IS 17876:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Pipa & Tabung Las, Lisensi BIS untuk Pipa & Tabung Las, IS 17876:2022, Sertifikasi BIS untuk Pipa & Tabung Las";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/pipa-dan-tabung-las-is-17876";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";

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
                    Sertifikat BIS untuk Pipa & Tabung Las – IS 17876:2022
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
          Sertifikat BIS untuk Pipa dan Tabung Las Baja Tahan Karat di bawah IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="Lisensi BIS untuk Pipa & Tabung Las"
            alt="Sertifikat BIS untuk Pipa & Tabung Las - Sertifikasi BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pipa dan tabung las baja tahan karat banyak digunakan di berbagai
          industri seperti konstruksi, pengolahan kimia, makanan & minuman,
          distribusi air, aplikasi struktural, dan rekayasa umum. Karena pipa
          ini membawa cairan, gas, dan dalam beberapa kasus bahan kimia
          korosif, kekuatan, ketahanan korosi, dan integritas manufakturnya
          harus diverifikasi sebelum memasuki pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengatur kualitas dan memastikan keselamatan publik dan
          industri, Pemerintah India telah membuat Sertifikasi BIS wajib untuk
          pipa dan tabung las baja tahan karat di bawah IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini menjelaskan proses persetujuan BIS lengkap,
          dokumentasi, persyaratan pengujian, biaya, timeline, kewajiban
          produsen, manfaat, dan aturan kepatuhan — ditulis dalam format yang
          segar dan unik, memastikan nol duplikasi dengan konten sebelumnya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS untuk Pipa & Tabung Las Baja Tahan Karat?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bureau of Indian Standards (BIS) mengatur kualitas produk di India
          melalui berbagai skema sertifikasi. Produk yang berada di bawah
          Perintah Kontrol Kualitas (QCO) wajib harus memperoleh Lisensi BIS
          sebelum diproduksi, diimpor, disimpan, dijual, atau didistribusikan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Apa yang Dijamin oleh Sertifikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS mengkonfirmasi bahwa pipa/tabung las baja tahan karat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memenuhi akurasi dimensi</li>
          <li>Memiliki kekuatan mekanik yang diperlukan</li>
          <li>Menampilkan ketahanan korosi</li>
          <li>Diproduksi menggunakan grade baja tahan karat yang disetujui</li>
          <li>Mematuhi kondisi pengujian India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah disertifikasi, produk harus menampilkan Tanda ISI bersama
          dengan nomor lisensi (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS untuk Pipa & Tabung Las Baja Tahan Karat – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar yang berlaku adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Pipa dan Tabung Las Baja Tahan
          Karat untuk Layanan Umum
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini menguraikan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Komposisi kimia</li>
          <li>Persyaratan sifat mekanik</li>
          <li>Toleransi manufaktur</li>
          <li>Spesifikasi dimensi</li>
          <li>Panduan permukaan dan finishing</li>
          <li>Pengujian hidrostatik dan non-destruktif</li>
          <li>Kriteria kinerja keselamatan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pipa ini digunakan untuk aplikasi layanan umum, yang berarti mereka
          harus memenuhi berbagai lingkungan operasional.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Produk IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pipa las baja tahan karat banyak digunakan di:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pipelines air</li>
          <li>Transportasi kimia</li>
          <li>Pabrik makanan & farmasi</li>
          <li>Rekayasa struktural</li>
          <li>Sistem knalpot dan ventilasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Jika tidak diproduksi dengan benar, pipa ini dapat menyebabkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kegagalan kebocoran</li>
          <li>Meledak di bawah tekanan</li>
          <li>Korosi dan kontaminasi</li>
          <li>Ketidakstabilan struktural</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mencegah bahan berkualitas rendah memasuki rantai pasokan, BIS
          mengharuskan setiap produsen — domestik atau asing — untuk memperoleh
          Lisensi BIS untuk Pipa dan Tabung Las Baja Tahan Karat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prosedur sertifikasi melibatkan pengujian laboratorium dan inspeksi
          yang ketat.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Kategori & Grade Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Evaluasi grade spesifik baja tahan karat yang diproduksi dan
          konfirmasikan bahwa mereka berada di bawah IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Kirim Aplikasi Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus melamar melalui Portal BIS Manak Online, mengirimkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail pabrik</li>
          <li>Kapasitas produksi</li>
          <li>Diagram alur proses</li>
          <li>Sumber bahan baku</li>
          <li>Dokumentasi jaminan kualitas</li>
          <li>Detail merek & merek dagang</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Bayar Biaya BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pembayaran meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Inspeksi Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pejabat BIS memeriksa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urutan produksi</li>
          <li>Penyimpanan bahan baku</li>
          <li>Mesin las</li>
          <li>Proses anil/perlakuan panas</li>
          <li>Dokumentasi kualitas</li>
          <li>Infrastruktur pengujian</li>
          <li>Catatan kalibrasi</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mereka memverifikasi kepatuhan dengan Skema Pengujian & Inspeksi
          (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Jika semua parameter memenuhi persyaratan BIS, produsen menerima:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Otorisasi Tanda ISI</li>
          <li>Nomor lisensi CML yang unik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Kewajiban Pasca-Lisensi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pemegang lisensi harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan pengujian kualitas internal yang berkelanjutan</li>
          <li>Menggunakan Tanda ISI dengan benar</li>
          <li>Bekerja sama selama inspeksi pengawasan BIS berkala</li>
          <li>Memperpanjang lisensi tepat waktu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Pipa & Tabung Las Baja Tahan Karat
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini mencakup persyaratan untuk pipa dan
          tabung las baja tahan karat untuk layanan umum.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini tidak menentukan persyaratan untuk
          pipa dan tabung las baja tahan karat yang dimaksudkan untuk tujuan
          yang berbeda, yang dicakup oleh Standar India terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Dokumen Manufaktur
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lisensi/registrasi pabrik</li>
          <li>Diagram tata letak</li>
          <li>Bagan alur proses</li>
          <li>Daftar mesin (las, pembentukan, anil, pengujian)</li>
          <li>Daftar peralatan uji internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spesifikasi grade</li>
          <li>Data uji kimia & mekanik</li>
          <li>Spesifikasi prosedur las</li>
          <li>Catatan perlakuan panas</li>
          <li>Bagan toleransi dimensi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas</li>
          <li>Bukti alamat</li>
          <li>Dokumen kepemilikan merek</li>
          <li>Surat penandatangan berwenang</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi yang diisi</li>
          <li>Komitmen & deklarasi</li>
          <li>Dokumen permintaan uji</li>
          <li>Desain label untuk penandaan ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian di Bawah IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian adalah inti dari persetujuan BIS dan memastikan bahwa setiap
          batch memenuhi standar kualitas yang ketat.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisis Panci
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisis Produk
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Persyaratan Tarik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pipa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tabung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Flanging
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Pemipihan Terbalik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Pemipihan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ukuran Butir
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Ketat Kebocoran
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengerjaan, Finishing, Penampilan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensi dan Toleransi
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan yang Dihadapi Selama Sertifikasi BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Gagal dalam Uji Komposisi Kimia</strong>
            <br />
            Unsur paduan non-standar atau pengotor menyebabkan penolakan.
          </li>
          <li>
            <strong>Cacat Las Selama NDT</strong>
            <br />
            Proses las yang buruk atau perlakuan panas yang tidak konsisten dapat
            menciptakan cacat.
          </li>
          <li>
            <strong>Ketidaksesuaian Dimensi</strong>
            <br />
            Variasi ketebalan dinding umumnya menyebabkan kegagalan.
          </li>
          <li>
            <strong>Dokumentasi Tidak Lengkap</strong>
            <br />
            Catatan yang hilang atau tidak jelas menunda persetujuan lisensi.
          </li>
          <li>
            <strong>Masalah Kalibrasi</strong>
            <br />
            Peralatan yang tidak dikalibrasi menghasilkan hasil uji yang tidak
            dapat diandalkan.
          </li>
          <li>
            <strong>Pengiriman merek/label yang salah</strong>
            <br />
            Desain tanda ISI harus sesuai dengan spesifikasi BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Pipa & Tabung Baja Tahan Karat
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Persetujuan hukum untuk memproduksi/menjual di India</li>
          <li>Jaminan kualitas dan keselamatan</li>
          <li>Reputasi dan kredibilitas pasar yang meningkat</li>
          <li>Dapat diterima oleh tender pemerintah dan BUMN</li>
          <li>Potensi ekspor yang meningkat</li>
          <li>Risiko kegagalan produk yang berkurang</li>
          <li>Perlindungan terhadap pesaing palsu atau berkualitas rendah</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hukuman untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen/importir yang menjual produk tidak bersertifikat menghadapi:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Hukuman berat di bawah Undang-Undang BIS</li>
          <li>Penutupan operasi manufaktur</li>
          <li>Pembatasan impor</li>
          <li>Penuntutan hukum</li>
          <li>Pembatalan lisensi yang ada</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan adalah wajib dan ditegakkan dengan ketat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Harus Memperoleh Lisensi BIS untuk Pipa dan Tabung Las SS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen luar negeri yang mengekspor ke India</li>
          <li>Importir pipa baja tahan karat</li>
          <li>Pemasok OEM</li>
          <li>Distributor industri</li>
          <li>Merek label swasta</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap lokasi manufaktur harus memperoleh lisensinya sendiri.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Pipa dan Tabung Las Baja Tahan Karat di bawah IS
          17876:2022 memastikan keandalan, daya tahan, dan kinerja produk
          pipa kritis yang digunakan di berbagai industri. Dengan sertifikasi
          wajib yang sekarang ditegakkan, produsen dan importir harus
          menyelaraskan proses, pengujian, dan dokumentasi mereka dengan
          persyaratan BIS untuk memasok produk mereka secara legal di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan panduan ahli, proses lisensi BIS menjadi lebih cepat, lebih
          lancar, dan sepenuhnya patuh.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Sertifikasi BIS untuk Pipa & Tabung Las Baja Tahan Karat
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah Sertifikasi BIS wajib untuk pipa las baja tahan karat?
              </strong>
              <br />
              Ya. Di bawah IS 17876:2022, sertifikasi BIS wajib untuk semua
              produsen dan importir.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Uji apa yang diperlukan?</strong>
              <br />
              Analisis kimia, uji tarik, uji kekerasan, pengujian hidrostatik,
              NDT, pemipihan, dan pemeriksaan dimensi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Berapa lama sertifikasi BIS berlangsung?</strong>
              <br />
              Biasanya 35–50 hari untuk Produsen India dan sekitar 120 hari
              untuk produsen asing, tergantung pada kesiapan pengujian dan
              inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Bisakah produsen asing memperoleh sertifikasi BIS?
              </strong>
              <br />
              Ya, melalui FMCS (Skema Sertifikasi Produsen Asing).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Dokumen apa yang diperlukan?</strong>
              <br />
              Lisensi pabrik, daftar peralatan uji, BOM, alur proses, gambar,
              rencana QC, dokumen merek, dll.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Bagaimana jika sampel gagal dalam pengujian?</strong>
              <br />
              Produsen harus memperbaiki masalah, mengerjakan ulang produk, dan
              mengirimkan ulang untuk pengujian.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Apakah penandaan ISI wajib setelah persetujuan?</strong>
              <br />
              Ya. Produk harus menampilkan Tanda ISI + nomor CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Apakah semua grade tercakup di bawah IS 17876?</strong>
              <br />
              Hanya grade spesifik yang didefinisikan di bawah standar yang
              memenuhi syarat.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Seberapa sering BIS melakukan pengawasan?</strong>
              <br />
              Audit berkala dan pengujian sampel acak dilakukan selama
              validitas lisensi.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Pipa & Tabung Las - IS 17876:2022 PDF"
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
