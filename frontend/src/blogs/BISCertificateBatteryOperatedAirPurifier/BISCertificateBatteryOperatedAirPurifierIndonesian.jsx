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

const BISCertificateBatteryOperatedAirPurifierIndonesian = () => {
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

export default BISCertificateBatteryOperatedAirPurifierIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Pembersih Udara Berbaterai | IS 302 (Bagian 1):2024 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Pembersih Udara Berbaterai – Panduan IS 302 (Bagian 1):2024";
  const twitterTitle =
    "Lisensi BIS untuk Pembersih Udara Berbaterai | IS 302 (Bagian 1):2024";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Pembersih Udara Berbaterai di bawah IS 302 (Bagian 1):2024. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Pembersih Udara Berbaterai sesuai IS 302 (Bagian 1):2024. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Pembersih Udara Berbaterai di bawah IS 302 (Bagian 1):2024. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Pembersih Udara Berbaterai, Lisensi BIS untuk Pembersih Udara Berbaterai, IS 302 (Bagian 1):2024, Sertifikasi BIS untuk Pembersih Udara Berbaterai";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/pembersih-udara-berbaterai-is-302";
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
                    Sertifikat BIS untuk Pembersih Udara Berbaterai – IS 302
                    (Bagian 1):2024
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
          Sertifikasi BIS Pembersih Udara Berbaterai – Panduan Lengkap untuk IS
          302 (Bagian 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedAirPurifier.png"
            title="Lisensi BIS untuk Pembersih Udara Berbaterai"
            alt="Sertifikat BIS untuk Pembersih Udara Berbaterai - IS 302 (Bagian 1):2024 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Permintaan untuk Pembersih Udara Berbaterai di India telah tumbuh
          pesat karena meningkatnya tingkat polusi udara, meningkatnya kesadaran
          kesehatan, dan kebutuhan akan solusi pemurnian udara portabel yang
          hemat energi. Tidak seperti pembersih udara plug-in konvensional,
          model berbaterai banyak digunakan di rumah, kantor, rumah sakit,
          kendaraan, hotel, sekolah, dan ruang pribadi, terutama di tempat yang
          pasokan listrik tidak terjamin. Peralatan ini berinteraksi langsung
          dengan komponen listrik, elektronik, dan baterai, sehingga keselamatan
          listrik, perlindungan kebakaran, integritas isolasi, dan perlindungan
          pengguna menjadi sangat penting.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan keselamatan konsumen dan kepatuhan regulasi, Pemerintah
          India telah mewajibkan kesesuaian dengan standar keselamatan listrik
          India. Memperoleh Sertifikat BIS untuk Pembersih Udara Berbaterai di
          bawah IS 302 (Bagian 1):2024 adalah persyaratan hukum wajib bagi produsen
          dan importir sebelum menjual produk ini di pasar India. Sertifikasi BIS
          yang valid untuk Pembersih Udara Berbaterai mengkonfirmasi bahwa
          peralatan telah diuji untuk keselamatan listrik, mekanik, dan termal
          sesuai Standar India terbaru.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kesesuaian produk resmi India
          yang diatur oleh Bureau of Indian Standards. BIS berfungsi di bawah
          Kementerian Urusan Konsumen dan bertanggung jawab untuk memastikan bahwa
          produk yang dijual di India memenuhi standar keselamatan, kualitas, dan
          keandalan yang ditetapkan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Arti Sertifikat BIS mengacu pada otorisasi yang dikeluarkan oleh BIS
          yang memungkinkan produsen untuk memproduksi, mengimpor, dan menjual
          produk yang mematuhi Standar India (IS) tertentu. Sertifikat ini juga
          mengizinkan penggunaan tanda sertifikasi BIS (Tanda ISI) pada produk
          yang disetujui.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS ada untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi konsumen dari peralatan listrik yang tidak aman</li>
          <li>Mencegah kebakaran, sengatan listrik, dan bahaya terkait baterai</li>
          <li>Mempromosikan kualitas produk yang seragam</li>
          <li>Memungkinkan penegakan peraturan keselamatan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda BIS (Tanda ISI) pada pembersih udara berbaterai menunjukkan bahwa:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produk mematuhi IS 302 (Bagian 1):2024</li>
          <li>Isolasi listrik dan konstruksi aman</li>
          <li>Peralatan disetujui secara hukum untuk dijual di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Pembersih Udara Berbaterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Bagian 1):2024 – Keselamatan Peralatan Listrik Rumah Tangga dan Sejenisnya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk pembersih udara berbaterai adalah
          IS 302 (Bagian 1):2024, yang menentukan persyaratan keselamatan umum untuk
          peralatan listrik yang dimaksudkan untuk penggunaan rumah tangga dan sejenisnya.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 302 (Bagian 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Keselamatan listrik peralatan yang menggunakan baterai atau daya hibrida
          </li>
          <li>Perlindungan terhadap sengatan listrik</li>
          <li>Risiko kebakaran dan kepanasan</li>
          <li>Keselamatan mekanik dan konstruksi</li>
          <li>Persyaratan isolasi, jarak merayap, dan jarak bebas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Keselamatan, Kinerja & Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Bagian 1):2024 bertujuan untuk memastikan bahwa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Peralatan bertenaga baterai beroperasi dengan aman dalam kondisi normal dan abnormal
          </li>
          <li>
            Pengguna dilindungi dari bahaya listrik, termal, dan mekanik
          </li>
          <li>Komponen tidak kepanasan atau menyebabkan kebakaran</li>
          <li>Peralatan tetap aman sepanjang siklus hidup yang dimaksudkan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Mematuhi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen pembersih udara berbaterai di India</li>
          <li>Importir dan distributor</li>
          <li>Produsen asing yang memasok ke India</li>
          <li>Merek yang menjual pembersih udara dengan label pribadi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Pembersih Udara Berbaterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risiko Keselamatan Konsumen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pembersih udara yang tidak tersertifikasi dapat menyebabkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sengatan listrik karena isolasi yang buruk</li>
          <li>Kepanasan baterai atau ledakan</li>
          <li>Bahaya kebakaran selama pengisian atau operasi</li>
          <li>Kegagalan mekanik komponen internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pemerintah dan Regulasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Di bawah pemberitahuan BIS dan peraturan keselamatan listrik, pembersih
          udara termasuk dalam sertifikasi wajib. Menjual tanpa Sertifikat BIS India
          adalah ilegal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dampak Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Denda dan sanksi berat</li>
          <li>Larangan impor</li>
          <li>Tanggung jawab pidana di bawah Undang-Undang BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lisensi BIS untuk Pembersih Udara Berbaterai membantu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Membangun kepercayaan konsumen</li>
          <li>Memungkinkan listing di platform e-commerce</li>
          <li>Memenuhi syarat untuk pengadaan institusional dan pemerintah</li>
          <li>Memperkuat reputasi merek</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Pembersih Udara Berbaterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penerapan & Identifikasi Standar untuk Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Proses dimulai dengan mengkonfirmasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Jenis produk: Pembersih udara berbaterai</li>
          <li>Standar yang berlaku: IS 302 (Bagian 1):2024</li>
          <li>Tegangan, jenis baterai, konfigurasi pengisi daya</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mendaftar di portal BIS</li>
          <li>Mengirimkan Aplikasi BIS online</li>
          <li>Mengunggah dokumen teknis dan hukum</li>
          <li>Membayar biaya pemerintah yang berlaku</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah ini biasa disebut sebagai BIS apply online atau registrasi
          sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Struktur Biaya & Biaya untuk Sertifikat BIS untuk Pembersih Udara
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pengujian</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi dan penandaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS tergantung pada:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kompleksitas produk</li>
          <li>Desain baterai dan pengisi daya</li>
          <li>Lokasi manufaktur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk (Sesuai IS 302 Bagian 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sampel diuji di laboratorium yang diakui BIS untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Perlindungan terhadap sengatan listrik</li>
          <li>Pemanasan dan operasi abnormal</li>
          <li>Resistansi isolasi</li>
          <li>Kekuatan dielektrik</li>
          <li>Keselamatan baterai dan pengisian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi & Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Sistem kontrol kualitas</li>
          <li>Jejak komponen</li>
          <li>Fasilitas pengujian internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah pengujian dan inspeksi berhasil:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS mengeluarkan Lisensi Bureau of Indian Standards</li>
          <li>Produsen diizinkan menggunakan Tanda BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Produsen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat registrasi pabrik</li>
          <li>Diagram alur proses manufaktur</li>
          <li>Daftar mesin dan peralatan pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat pendirian perusahaan</li>
          <li>Registrasi GST</li>
          <li>Otorisasi merek (jika berlaku)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diagram sirkuit</li>
          <li>Datasheet komponen</li>
          <li>Spesifikasi baterai dan pengisi daya</li>
          <li>Manual pengguna dan label</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Formulir permintaan pengujian</li>
          <li>Pernyataan dan komitmen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ini dikenal sebagai DOKUMEN SERTIFIKAT BIS atau DOKUMEN SERTIFIKASI BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 302 (Bagian 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian wajib meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengujian perlindungan sengatan listrik</li>
          <li>Pengujian pemanasan dan operasi abnormal</li>
          <li>Pengujian resistansi isolasi</li>
          <li>Pengujian kekuatan dielektrik</li>
          <li>Pengujian keselamatan pengisian baterai</li>
          <li>Pengujian kekuatan mekanik dan stabilitas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian harus dilakukan hanya di laboratorium yang diakui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Masalah Umum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kegagalan dalam pengujian pemanasan atau isolasi</li>
          <li>Konfigurasi baterai yang tidak aman</li>
          <li>Dokumentasi tidak lengkap</li>
          <li>Pelabelan yang tidak sesuai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Solusi & Praktik Terbaik
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melakukan pengujian pra-kepatuhan</li>
          <li>Menggunakan komponen bersertifikat</li>
          <li>Mempersiapkan dokumen teknis yang akurat</li>
          <li>Bekerja dengan konsultan BIS berpengalaman</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Produsen & Importir
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan dengan hukum India</li>
          <li>Perlindungan dari sanksi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Akses pasar di seluruh India</li>
          <li>Penerimaan di platform e-commerce</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Merek
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tanda BIS meningkatkan kepercayaan</li>
          <li>Keyakinan pelanggan yang lebih tinggi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lebih mudah memasuki pasar institusional</li>
          <li>Kredibilitas merek jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Pembersih Udara Berbaterai?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing (dengan AIR)</li>
          <li>Pedagang dan pemilik merek</li>
          <li>Penjual online dan marketplace</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menawarkan layanan sertifikasi BIS end-to-end, termasuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penilaian penerapan</li>
          <li>Persiapan dokumentasi</li>
          <li>Koordinasi pengujian laboratorium</li>
          <li>Dukungan inspeksi pabrik</li>
          <li>Persetujuan lebih cepat</li>
          <li>Kepatuhan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami dalam peralatan listrik dan elektronik memastikan perjalanan
          sertifikasi yang lancar dan patuh.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Pembersih Udara Berbaterai di bawah IS
          302 (Bagian 1):2024 bukan hanya formalitas regulasi—ini adalah persyaratan
          keselamatan dan pasar yang kritis. Sertifikasi BIS untuk Pembersih Udara
          Berbaterai memastikan keselamatan listrik, keandalan baterai, dan
          perlindungan konsumen, sementara Lisensi BIS untuk Pembersih Udara
          Berbaterai memperkuat kredibilitas merek dan kedudukan hukum.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk produsen dan importir, kepatuhan tepat waktu mencegah sanksi,
          memungkinkan masuk pasar yang lancar, dan membangun kepercayaan jangka panjang.
          Dengan panduan ahli dan dukungan kepatuhan yang terstruktur, proses sertifikasi
          BIS menjadi efisien, dapat diprediksi, dan sepenuhnya selaras dengan Standar
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Pembersih Udara Berbaterai
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Apakah sertifikasi BIS wajib untuk pembersih udara berbaterai?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, wajib di bawah IS 302 (Bagian 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Apa kepanjangan sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sertifikat Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Berapa lama waktu sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 6–8 minggu untuk produsen India dan 12-16 minggu untuk
              produsen asing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Berapa biaya sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tergantung pada pengujian dan kompleksitas produk.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Bisakah importir mengajukan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, dengan otorisasi yang tepat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Apakah Tanda ISI wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, setelah sertifikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Apakah pengujian keselamatan baterai termasuk?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, keselamatan baterai dan pengisian adalah wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Apakah inspeksi pabrik wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, untuk pemberian lisensi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Bisakah beberapa model dicakup?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, tergantung persetujuan pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Apakah aplikasi online diperlukan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS apply online adalah wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Bisakah merek asing mendapatkan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Apa yang terjadi jika aturan BIS dilanggar?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sanksi, penyitaan, dan tindakan hukum.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Apakah sertifikasi BIS meningkatkan penjualan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, secara signifikan meningkatkan kepercayaan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Apakah pembaruan diperlukan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, pembaruan berkala adalah wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Bisakah konsultan mempercepat persetujuan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, konsultan berpengalaman mengurangi penundaan.
            </p>
          </div>
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
                alt="Logo BIS"
                title="Logo BIS"
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
