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

const BISCertificateForFlashlightIndonesian = () => {
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

export default BISCertificateForFlashlightIndonesian;

const MetaTags = () => {
  const title = "Sertifikat BIS untuk Senter | IS 2083:2024 Lisensi BIS";
  const ogTitle = "Sertifikasi BIS untuk Senter – Panduan IS 2083:2024";
  const twitterTitle = "Lisensi BIS untuk Senter | IS 2083:2024";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Senter berdasarkan IS 2083:2024. Proses, dokumen, pengujian, biaya & jadwal untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Senter sesuai IS 2083:2024. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Senter berdasarkan IS 2083:2024. Pelajari proses BIS, dokumen, pengujian, biaya & jadwal di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Senter, Lisensi BIS untuk Senter, IS 2083:2024, Sertifikasi BIS untuk Senter";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/senter-is-2083";
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
                    Sertifikat BIS untuk Senter – IS 2083:2024
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
          Sertifikat BIS untuk Senter berdasarkan IS 2083:2024 – Panduan
          Kepatuhan Lengkap
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="Lisensi BIS untuk Senter"
            alt="Sertifikat BIS untuk Senter - Sertifikasi BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senter (umumnya disebut sebagai obor) adalah perangkat penerangan
          portabel penting yang digunakan di rumah tangga, industri, layanan
          darurat, operasi keamanan, kegiatan luar ruangan, dan manajemen
          bencana. Karena senter adalah produk listrik yang melibatkan baterai,
          sirkuit, sumber cahaya, dan penutup, kepatuhan kualitas dan
          keselamatan sangat penting.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengatur kualitas produk, kinerja, dan keselamatan konsumen,
          Bureau of Indian Standards (BIS) telah memberitahukan IS 2083:2024 –
          Senter: Spesifikasi, membuat Sertifikasi BIS wajib untuk senter yang
          dijual, diproduksi, atau diimpor ke India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman ini menyediakan penjelasan komprehensif dan asli tentang
          Sertifikasi BIS untuk senter, mencakup standar yang berlaku, proses
          sertifikasi, persyaratan pengujian, dokumentasi, biaya, jadwal,
          penalti, dan tanggung jawab kepatuhan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS dan Mengapa Berlaku untuk Senter
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bureau of Indian Standards (BIS) adalah otoritas standar nasional
          India yang bertanggung jawab untuk memastikan bahwa produk yang dijual
          di pasar India memenuhi tolok ukur keselamatan, kualitas, dan kinerja
          yang ditentukan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Makna Sertifikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS mengonfirmasi bahwa sebuah senter:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sesuai dengan Standar India IS 2083:2024</li>
          <li>Telah lulus semua tes laboratorium wajib</li>
          <li>Memenuhi persyaratan listrik, mekanis, dan kinerja</li>
          <li>Aman untuk penggunaan konsumen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah disetujui, produsen diizinkan untuk memasang Tanda ISI, yang
          menandakan kepatuhan dengan Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar India yang Berlaku – IS 2083:2024 (Senter: Spesifikasi)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Senter: Spesifikasi
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 mendefinisikan konstruksi, kinerja, keselamatan, dan
          persyaratan pengujian untuk senter portabel yang digunakan untuk
          penerangan umum.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Senter genggam (obor)</li>
          <li>Senter bertenaga baterai</li>
          <li>Senter isi ulang</li>
          <li>Senter LED</li>
          <li>Senter darurat dan utilitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Area Kunci yang Dicakup oleh Standar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Keselamatan listrik</li>
          <li>Kinerja luminous</li>
          <li>Kekuatan mekanis</li>
          <li>Kompatibilitas baterai</li>
          <li>Daya tahan sakelar</li>
          <li>Perlindungan terhadap panas berlebih</li>
          <li>Ketahanan terhadap keausan normal</li>
          <li>Persyaratan penandaan dan pelabelan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap senter yang termasuk dalam ruang lingkup ini harus mendapatkan
          Lisensi BIS untuk Senter sebelum memasuki pasar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Senter
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senter banyak digunakan oleh konsumen dari semua kelompok usia dan
          dalam situasi kritis seperti keadaan darurat, pemadaman listrik, dan
          operasi industri. Senter di bawah standar dapat menyebabkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Korsleting listrik</li>
          <li>Kebocoran atau ledakan baterai</li>
          <li>Panas berlebih</li>
          <li>Bahaya kebakaran</li>
          <li>Kinerja penerangan yang buruk</li>
          <li>Kegagalan prematur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sertifikasi BIS Memastikan
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Keselamatan listrik dan pengguna</li>
          <li>Output cahaya yang konsisten</li>
          <li>Konstruksi yang tahan lama</li>
          <li>Operasi baterai yang aman</li>
          <li>Kepatuhan dengan persyaratan regulasi India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Menjual senter yang tidak bersertifikat adalah pelanggaran hukum
          berdasarkan UU BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Senter
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini menentukan persyaratan dan pengujian
          untuk senter yang ditenagai oleh baterai primer yang dapat diganti dan
          baterai sekunder yang dapat diganti/terintegrasi dengan tegangan
          maksimum 48 V d.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini berlaku untuk jenis senter pra-fokus
          serta fokus dengan lampu pijar dan modul LED sebagai sumber cahaya.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Berikut ini tidak tercakup dalam ruang lingkup
          standar ini:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Lampu tangan yang terhubung dengan kabel dan steker yang termasuk
            dalam ruang lingkup IS 10322 (Bagian 5/Sek 6);
          </li>
          <li>
            Penerangan darurat yang termasuk dalam ruang lingkup IS 10322
            (Bagian 5/Sek 8); dan
          </li>
          <li>Senter yang dimaksudkan untuk lokasi berbahaya.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Senter (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi BIS untuk senter dilakukan di bawah Skema
          Sertifikasi Tanda ISI (Skema-I) dan melibatkan beberapa tahap.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Produk & Pemetaan Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus mengonfirmasi bahwa produk memenuhi syarat sebagai
          senter berdasarkan IS 2083:2024 dan mengidentifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Jenis senter</li>
          <li>Sumber daya (baterai/isi ulang)</li>
          <li>Sumber cahaya (LED, lampu, dll.)</li>
          <li>Varian dan model</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Aplikasi diajukan melalui Portal Online BIS Manak, bersama dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produsen</li>
          <li>Alamat pabrik</li>
          <li>Deskripsi produk</li>
          <li>Detail merek/merek dagang</li>
          <li>Informasi proses pembuatan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Pembayaran Biaya BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya yang berlaku meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian produk</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Pengujian Produk sesuai IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel diuji di laboratorium yang diakui BIS.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tes Wajib untuk Senter
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tes intensitas cahaya</li>
          <li>Tes stabilitas output cahaya</li>
          <li>Tes daya tahan baterai</li>
          <li>Tes operasi sakelar</li>
          <li>Kekuatan mekanis (tes jatuh)</li>
          <li>Tes resistensi isolasi</li>
          <li>Tes kenaikan suhu</li>
          <li>Tes keselamatan listrik</li>
          <li>Verifikasi penandaan dan pelabelan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Laporan tes langsung diserahkan ke BIS oleh laboratorium.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Inspeksi Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS melakukan inspeksi di lokasi untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengaturan manufaktur</li>
          <li>Sistem kontrol kualitas</li>
          <li>Inspeksi material masuk</li>
          <li>Pemeriksaan dalam proses</li>
          <li>Pengujian produk jadi</li>
          <li>Kalibrasi instrumen tes</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan dengan Skema Pengujian dan Inspeksi (STI) adalah wajib.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah pengujian dan inspeksi berhasil, BIS mengeluarkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Persetujuan Tanda ISI</li>
          <li>Nomor CML (Certificate of Manufacturing Licence)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen sekarang dapat secara legal memproduksi dan menjual senter di
          India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah sertifikasi, produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Menggunakan Tanda ISI dengan benar pada produk dan kemasan</li>
          <li>Memelihara catatan kualitas per batch</li>
          <li>Mengizinkan inspeksi pengawasan BIS</li>
          <li>Memperbarui lisensi secara berkala</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Senter
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Manufaktur
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pendaftaran/lisensi pabrik</li>
          <li>Diagram alur proses manufaktur</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan pengujian internal</li>
          <li>Sertifikat kalibrasi</li>
          <li>Tata letak pabrik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lembar spesifikasi produk</li>
          <li>Diagram sirkuit</li>
          <li>Spesifikasi baterai</li>
          <li>Bill of materials</li>
          <li>Laporan tes internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas penandatangan resmi</li>
          <li>Bukti alamat</li>
          <li>Surat otorisasi merek</li>
          <li>Sertifikat merek dagang (jika ada)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Khusus BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Pernyataan dan deklarasi</li>
          <li>Surat permintaan tes</li>
          <li>Desain label (format penandaan ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian berdasarkan IS 2083:2024 (Rinci)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senter harus menjalani pengujian ketat untuk memastikan keselamatan
          dan kinerja.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hanya produk yang lulus semua tes wajib yang memenuhi syarat untuk
          persetujuan BIS.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tes untuk Finishing
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pemeriksaan dimensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pemeriksaan penandaan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tes fungsional untuk sakelar
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tes resistensi isolasi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tes distribusi cahaya
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arus sirkuit senter LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tes untuk arus pengisian pada senter bertenaga baterai isi
                  ulang terintegrasi
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum dalam Sertifikasi BIS untuk Senter
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kegagalan dalam tes kenaikan suhu</li>
          <li>Output luminous yang tidak konsisten</li>
          <li>Daya tahan sakelar yang buruk</li>
          <li>Masalah kompatibilitas baterai</li>
          <li>Format label ISI yang salah</li>
          <li>Dokumentasi yang tidak lengkap</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian awal dan panduan ahli secara signifikan mengurangi risiko
          penolakan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Produsen Senter
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Izin legal untuk menjual di India</li>
          <li>Kepercayaan konsumen yang meningkat</li>
          <li>Keandalan produk yang lebih baik</li>
          <li>Penerimaan di platform e-commerce</li>
          <li>Kelayakan untuk pengadaan pemerintah</li>
          <li>Tanggung jawab dan penarikan yang berkurang</li>
          <li>Kredibilitas merek yang kuat</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalti untuk Menjual Senter Tanpa Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Denda moneter yang berat</li>
          <li>Larangan impor</li>
          <li>Penutupan manufaktur</li>
          <li>Tuntutan pidana berdasarkan UU BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Senter?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing yang mengekspor ke India</li>
          <li>Importir</li>
          <li>Pemilik merek</li>
          <li>Pemasok OEM/ODM</li>
          <li>Penjual online dan distributor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap unit manufaktur memerlukan lisensi BIS terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Senter berdasarkan IS 2083:2024 adalah
          persyaratan regulasi wajib yang memastikan keselamatan, kinerja, dan
          keandalan produk penerangan portabel di India. Kepatuhan tidak hanya
          melindungi konsumen tetapi juga memperkuat kredibilitas merek dan
          akses pasar. Dengan panduan profesional, produsen dan importir dapat
          mencapai sertifikasi BIS dengan lancar dan efisien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikat BIS untuk Senter (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah Sertifikasi BIS wajib untuk senter di India?
              </strong>
              <br />
              Ya. Senter yang tercakup dalam IS 2083:2024 harus bersertifikat
              BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Standar mana yang berlaku untuk senter?</strong>
              <br />
              IS 2083:2024 – Senter: Spesifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Berapa lama proses BIS memakan waktu?</strong>
              <br />
              Sekitar 30–45 hari kerja untuk Produsen India dan sekitar 120 hari
              untuk Produsen Asing.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Bisakah produsen asing mengajukan sertifikasi BIS?
              </strong>
              <br />
              Ya, melalui skema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Apakah penandaan ISI wajib?</strong>
              <br />
              Ya, Tanda ISI harus ditampilkan pada senter bersertifikat.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Apa yang terjadi jika senter gagal pengujian?</strong>
              <br />
              Produk harus diperbaiki dan diuji ulang.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Apakah senter isi ulang juga tercakup?</strong>
              <br />
              Ya, jika termasuk dalam ruang lingkup IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Berapa lama lisensi BIS berlaku?</strong>
              <br />
              1–2 tahun, dapat diperbarui.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Bisakah beberapa model dicakup dalam satu lisensi?
              </strong>
              <br />
              Ya, jika memenuhi kriteria kesamaan.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flashlight - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadIndonesian />
        <FaqAuthorIndonesian questionNumber={4} />
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
                Konsultan Sertifikat Terbaik di India
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
              Tanda BIS (Lisensi ISI) untuk Produsen Asing
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
