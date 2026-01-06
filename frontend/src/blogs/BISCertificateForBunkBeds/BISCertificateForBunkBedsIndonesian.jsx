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

const BISCertificateForBunkBedsIndonesian = () => {
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

export default BISCertificateForBunkBedsIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Ranjang Susun | IS 17636:2022 Lisensi BIS";
  const ogTitle = "Sertifikasi BIS untuk Ranjang Susun – Panduan IS 17636:2022";
  const twitterTitle = "Lisensi BIS untuk Ranjang Susun | IS 17636:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk ranjang susun di bawah IS 17636:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk ranjang susun sesuai IS 17636:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk ranjang susun di bawah IS 17636:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Ranjang Susun, Lisensi BIS untuk Ranjang Susun, IS 17636:2022, Sertifikasi BIS untuk Ranjang Susun";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ranjang-susun-is-17636";
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
                    Sertifikat BIS untuk Ranjang Susun – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikat BIS untuk Ranjang Susun – Panduan Lengkap Sertifikasi BIS
          IS 17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="Lisensi BIS untuk Ranjang Susun"
            alt="Sertifikat BIS untuk Ranjang Susun - Sertifikasi BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Ranjang Susun adalah persyaratan wajib di India
          di bawah IS 17636:2022, yang menetapkan persyaratan keselamatan,
          kinerja, dan struktural untuk ranjang susun yang digunakan di rumah,
          asrama, tempat tinggal, akomodasi PG, sekolah, hotel, dan komersial
          perusahaan. Setiap produsen—India atau asing—harus memperoleh
          Sertifikasi BIS untuk Ranjang Susun sebelum menjual, mengimpor,
          mengekspor, atau mendistribusikan ranjang susun di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan meningkatnya permintaan untuk furnitur hemat ruang, ranjang
          susun telah menjadi kategori produk yang penting. Namun, risiko
          keselamatan seperti jatuh, runtuh, terperangkap, dan kegagalan
          struktural membuat Lisensi BIS untuk Ranjang Susun sangat penting
          untuk memastikan perlindungan konsumen. Halaman komprehensif ini akan
          memandu Anda melalui Registrasi BIS untuk Ranjang Susun, persyaratan
          pengujian, dokumentasi, biaya, timeline, sanksi, dan manfaat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Baik Anda adalah produsen, importir, eksportir, pedagang, atau
          start-up, panduan ini membantu Anda memahami persyaratan kepatuhan di
          bawah Bureau of Indian Standards (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah program kepatuhan kualitas dan keselamatan yang
          diatur oleh Bureau of Indian Standards, badan standar nasional India.
          Ini memastikan bahwa produk sesuai dengan Standar India yang
          ditentukan dan aman, dapat diandalkan, dan layak digunakan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Apa itu Sertifikat BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS adalah lisensi resmi yang dikeluarkan untuk produsen
          yang memungkinkan mereka menggunakan Tanda ISI, menunjukkan kepatuhan
          terhadap standar produk yang ditentukan BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ini membuktikan bahwa produk telah lulus:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengujian laboratorium</li>
          <li>Inspeksi pabrik</li>
          <li>Penilaian kontrol kualitas</li>
          <li>Kepatuhan keselamatan</li>
          <li>Kesesuaian dengan Standar India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produk yang disertifikasi BIS menampilkan Logo BIS, juga dikenal
          sebagai Tanda ISI, yang menandakan bahwa produk tersebut memenuhi
          tolok ukur kualitas India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS Mana yang Berlaku untuk Ranjang Susun? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang susun termasuk dalam sertifikasi BIS wajib sesuai dengan
          standar yang baru diperkenalkan:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Ranjang Susun – Persyaratan
          Keselamatan
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini memastikan bahwa ranjang susun memenuhi kriteria
          keselamatan, konstruksi, dan daya tahan yang ketat. Ini mencakup:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitas struktural</li>
          <li>Pagar pengaman</li>
          <li>Bahaya terperangkap</li>
          <li>Kapasitas menahan beban</li>
          <li>Persyaratan dimensi</li>
          <li>Spesifikasi material</li>
          <li>Tepi dan finishing permukaan</li>
          <li>Konstruksi tangga</li>
          <li>Pengujian daya tahan dan kinerja</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap produsen yang ingin menjual ranjang susun di India harus
          memperoleh Lisensi BIS untuk Ranjang Susun di bawah IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Diperlukan untuk Ranjang Susun
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang susun banyak digunakan oleh anak-anak dan orang dewasa, dan
          kekhawatiran keselamatan membuat kepatuhan menjadi penting. BIS telah
          membuat sertifikasi wajib untuk mencegah:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Runtuh atau kegagalan struktural</li>
          <li>Terperangkapnya bagian tubuh</li>
          <li>Jatuh dari ranjang atas</li>
          <li>Cedera terkait tangga</li>
          <li>Kualitas material yang buruk</li>
          <li>Bahaya kebakaran</li>
          <li>Finishing berbahaya atau tepi tajam</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Alasan Lisensi BIS untuk Ranjang Susun Wajib
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memastikan kekuatan mekanis dan daya tahan</li>
          <li>Melindungi konsumen—terutama anak-anak—dari cedera</li>
          <li>Mempertahankan standar kualitas yang seragam</li>
          <li>Membantu merek membangun kepercayaan dan kredibilitas</li>
          <li>Memastikan kepatuhan terhadap peraturan pemerintah</li>
          <li>Mencegah masalah hukum dan sanksi</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa registrasi BIS, produsen dan importir tidak dapat secara hukum
          menjual produk di pasar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Ranjang Susun (IS
          17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi BIS di India melibatkan pengujian, dokumentasi, dan
          inspeksi pabrik. Berikut adalah prosedur langkah demi langkah:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 — Tentukan Keterapan & Standar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Wajib
          </li>
          <li>Konfirmasi kategori produk dan detail unit manufaktur.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 — Aplikasi BIS (Pengajuan Formulir)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ajukan secara online melalui Portal Online BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Persyaratan meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produsen</li>
          <li>Alamat pabrik dan bukti</li>
          <li>Kategori produk & merek</li>
          <li>Kemampuan manufaktur</li>
          <li>Proses kontrol kualitas</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah ini memulai siklus persetujuan resmi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 — Bayar Biaya Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah pengajuan, bayar:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pengujian</li>
          <li>Biaya audit</li>
          <li>Biaya penandaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya tergantung pada:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Jumlah varian produk</li>
          <li>Nama merek</li>
          <li>Lokasi pabrik</li>
          <li>Parameter pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 — Pengujian Sampel (Sesuai IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian dilakukan di laboratorium yang diakui BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji stabilitas struktural</li>
          <li>Uji dampak</li>
          <li>Uji terperangkap</li>
          <li>Uji kekuatan pagar pengaman</li>
          <li>Uji kualitas finishing</li>
          <li>Uji keselamatan tangga</li>
          <li>Uji beban</li>
          <li>Uji daya tahan</li>
          <li>Evaluasi keselamatan tepi</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Laporan pengujian diunggah langsung ke portal BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 — Inspeksi Pabrik BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS mengunjungi pabrik untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistem manajemen kualitas</li>
          <li>Kontrol bahan baku</li>
          <li>Inspeksi dalam proses</li>
          <li>Pengujian produk akhir</li>
          <li>Kemampuan produksi</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mereka memeriksa kepatuhan terhadap Skema Pengujian & Inspeksi BIS
          (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 — Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah semua langkah selesai, BIS mengeluarkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Persetujuan Tanda ISI</li>
          <li>Nomor Lisensi CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Anda sekarang dapat secara hukum menggunakan Tanda BIS pada ranjang
          susun dan kemasan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 — Kewajiban Pasca-Lisensi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan pengujian internal</li>
          <li>Mengizinkan inspeksi BIS berkala</li>
          <li>Memperbarui lisensi setiap 1 atau 2 tahun</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Ranjang Susun
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini mencakup persyaratan yang berkaitan
          dengan kinerja dan keselamatan yaitu kekuatan, stabilitas dan daya
          tahan ranjang susun untuk penggunaan domestik dan non-domestik.
          Standar ini juga berlaku untuk ranjang tunggal untuk digunakan pada
          ketinggian dasar ranjang 800 mm atau lebih di atas tingkat lantai
          jadi, terlepas dari penggunaan ruang di bawahnya.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini berlaku untuk ranjang susun yang
          sepenuhnya diproduksi/ difabrikasi. Ini juga berlaku untuk unit siap
          rakit; dalam hal ini persyaratan standar ini akan berlaku untuk unit
          yang dirakit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Ranjang Susun
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Berikut adalah daftar lengkap Dokumen Sertifikat BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Produsen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat registrasi pabrik</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin & peralatan</li>
          <li>Daftar peralatan uji</li>
          <li>Sertifikat kalibrasi</li>
          <li>Layout pabrik/layout pabrik</li>
          <li>Surat otorisasi dari CEO/Direktur</li>
          <li>Sertifikat ISO 9001 (jika tersedia)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas</li>
          <li>Bukti alamat</li>
          <li>Otorisasi merek (jika merek pihak ketiga)</li>
          <li>Dokumen registrasi merek dagang (opsional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spesifikasi produk</li>
          <li>Daftar material</li>
          <li>Deskripsi fitur keselamatan</li>
          <li>Rencana kontrol kualitas</li>
          <li>Laporan uji internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Perjanjian & deklarasi</li>
          <li>Formulir permintaan uji</li>
          <li>Surat persetujuan sampel</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memiliki dokumen yang tepat mengurangi penundaan dan memastikan
          persetujuan yang lancar.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Ranjang Susun (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian adalah bagian wajib dari proses registrasi BIS. Ranjang
          susun menjalani pengujian ketat untuk memastikan keselamatan dan daya
          tahan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Skema Inspeksi dan Pengujian untuk Ranjang Susun
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penghalang Keselamatan Ranjang Atas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Celah
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dasar Ranjang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tangga
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan Rangka dan Pengikat
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilitas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengikatan Ranjang Atas ke Ranjang Bawah
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Pengujian harus dilakukan hanya di laboratorium yang diakui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Kategorisasi Produk yang Salah</strong>
            <br />
            Selalu verifikasi Standar India yang benar.
          </li>
          <li>
            <strong>Dokumentasi yang Tidak Tepat</strong>
            <br />
            Dokumen yang hilang menyebabkan penundaan—siapkan sebelumnya.
          </li>
          <li>
            <strong>Uji Laboratorium Gagal</strong>
            <br />
            Pastikan material berkualitas tinggi, pengelasan, pagar pengaman,
            dan finishing.
          </li>
          <li>
            <strong>Pabrik Tidak Siap untuk Inspeksi</strong>
            <br />
            Pastikan QMS dan peralatan uji dipelihara dengan baik.
          </li>
          <li>
            <strong>Masalah Merek Dagang</strong>
            <br />
            Nama merek harus sesuai dengan aplikasi lisensi.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Menyelesaikan ini lebih awal mengurangi waktu pemrosesan secara
          drastis.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Produsen & Importir
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Secara hukum menjual ranjang susun di India</li>
          <li>Membangun kepercayaan dengan pelanggan</li>
          <li>Mengurangi pengembalian produk</li>
          <li>Meningkatkan reputasi merek</li>
          <li>Memastikan kepatuhan keselamatan</li>
          <li>Memperoleh keunggulan kompetitif</li>
          <li>Memperluas ke rantai ritel & platform e-commerce</li>
          <li>Akses ke tender pemerintah</li>
          <li>Menghindari sanksi & tindakan hukum</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual ranjang susun tanpa Sertifikasi BIS dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Sanksi finansial</li>
          <li>Perintah penutupan pabrik</li>
          <li>Tuntutan hukum</li>
          <li>Larangan dari pasar India</li>
          <li>Pemblokiran merek</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan bukan opsional—ini wajib.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Ranjang Susun?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Entitas berikut harus memperoleh Lisensi BIS untuk Ranjang Susun:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing yang mengekspor ke India</li>
          <li>Importir</li>
          <li>Distributor</li>
          <li>Penjual e-commerce</li>
          <li>Produsen OEM/ODM</li>
          <li>Merek furnitur & pengecer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap pabrik (bukan perusahaan) memerlukan lisensi BIS terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan dukungan end-to-end untuk Registrasi BIS untuk
          Ranjang Susun, termasuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretasi standar (IS 17636:2022)</li>
          <li>Persiapan dokumentasi</li>
          <li>Koordinasi pengujian laboratorium</li>
          <li>Aplikasi portal BIS</li>
          <li>Dukungan inspeksi pabrik</li>
          <li>Komunikasi dengan petugas BIS</li>
          <li>Bantuan persetujuan lisensi</li>
          <li>Kepatuhan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan pengalaman bertahun-tahun, kami memastikan sertifikasi BIS yang
          cepat, akurat, dan tanpa hambatan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Sertifikasi BIS untuk Ranjang Susun
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah sertifikasi BIS wajib untuk ranjang susun di India?
              </strong>
              <br />
              Ya. Di bawah IS 17636:2022, ini wajib untuk semua produsen dan
              importir.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Berapa lama Sertifikasi BIS untuk ranjang susun?
              </strong>
              <br />
              Biasanya 30–45 hari tergantung pada kesiapan dan dokumentasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Bisakah produsen asing mengajukan BIS?</strong>
              <br />
              Ya, melalui FMCS (Skema Sertifikasi Produsen Asing).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Bisakah saya mengajukan Sertifikat BIS secara online?
              </strong>
              <br />
              Ya, melalui Portal Online BIS Manak.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Pengujian apa yang diperlukan untuk sertifikasi ranjang
                susun?
              </strong>
              <br />
              Uji beban, uji pagar pengaman, uji stabilitas, uji dampak, uji
              terperangkap, dll.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Berapa lama lisensi BIS berlaku?</strong>
              <br />
              Biasanya 1–2 tahun dan dapat diperpanjang.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Bisakah satu lisensi mencakup beberapa model?</strong>
              <br />
              Hanya jika mereka berada dalam standar dan kategori yang sama.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Apakah Tanda ISI diperlukan pada ranjang susun?
              </strong>
              <br />
              Ya, Tanda ISI wajib setelah sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Apa yang terjadi jika produk saya gagal dalam pengujian
                laboratorium?
              </strong>
              <br />
              Anda harus memodifikasi produk dan mengirimkan ulang sampel.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. Apakah BIS memeriksa infrastruktur pabrik?</strong>
              <br />
              Ya, selama inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Bisakah pedagang mengajukan BIS?</strong>
              <br />
              Hanya jika mereka adalah pemilik merek dan memiliki kontrak dengan
              produsen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Apa itu Logo BIS?</strong>
              <br />
              Ini adalah simbol Tanda ISI standar yang menunjukkan kesesuaian
              produk.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. Dokumen apa yang diperlukan untuk sertifikasi BIS?
              </strong>
              <br />
              Lisensi pabrik, layout, daftar mesin, BOM, rencana QC, laporan
              uji, dll.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. Apakah pengujian BIS dilakukan di pabrik?</strong>
              <br />
              Tidak, hanya di laboratorium yang diakui BIS.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Ranjang Susun di bawah IS 17636:2022
          tidak hanya wajib tetapi juga penting untuk memastikan keselamatan
          konsumen, keandalan produk, dan kepatuhan hukum di India. Proses
          sertifikasi melibatkan pengujian produk, dokumentasi, inspeksi pabrik,
          dan penerbitan lisensi. Dengan perencanaan yang tepat dan bimbingan
          ahli, proses menjadi lancar, cepat, dan hemat biaya.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Baik Anda adalah produsen, importir, atau pemilik merek, mendapatkan
          sertifikasi BIS memperkuat posisi pasar Anda, meningkatkan kepercayaan
          pelanggan, dan membuka peluang bisnis baru. Tim konsultasi ahli kami
          siap membantu Anda dengan Sertifikasi BIS end-to-end untuk ranjang
          susun.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Ranjang Susun - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
                alt="Logo LMPC"
                title="Logo LMPC"
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
