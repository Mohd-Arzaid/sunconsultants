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

const BISCertificationChainPipeWrenchesIndonesian = () => {
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

export default BISCertificationChainPipeWrenchesIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Kunci Pipa Rantai | IS 4123:1982 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Kunci Pipa Rantai - Panduan IS 4123:1982";
  const twitterTitle = "Lisensi BIS untuk Kunci Pipa Rantai | IS 4123:1982";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Kunci Pipa Rantai sesuai IS 4123:1982. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Kunci Pipa Rantai sesuai IS 4123:1982. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Kunci Pipa Rantai sesuai IS 4123:1982. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Kunci Pipa Rantai, Lisensi BIS untuk Kunci Pipa Rantai, IS 4123:1982, Sertifikasi BIS untuk Kunci Pipa Rantai";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kunci-pipa-rantai-is-4123";
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
                    <Link to="/id">Beranda</Link>
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
                    Sertifikat BIS untuk Kunci Pipa Rantai – IS 4123:1982
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
          Sertifikasi BIS Kunci Pipa Rantai – Panduan Lengkap IS 4123:1982
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforChainPipeWrenches.png"
            title="Lisensi BIS untuk Kunci Pipa Rantai"
            alt="Sertifikat BIS untuk Kunci Pipa Rantai - IS 4123:1982 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kunci Pipa Rantai adalah alat tangan berat khusus yang digunakan untuk
          mencengkeram, mengencangkan, dan melonggarkan pipa berdiameter besar,
          fitting bulat, dan komponen silinder di mana kunci pipa konvensional
          tidak efektif. Alat ini banyak digunakan di pipa minyak & gas,
          kilang minyak, pembangkit listrik, unit petrokimia, galangan kapal,
          proyek pasokan air, bengkel teknik berat, dan lokasi konstruksi
          infrastruktur. Mekanisme cengkeraman mengandalkan rantai yang dikeraskan
          yang membungkus pipa, memungkinkan distribusi beban seragam dan
          penerapan torsi tinggi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Karena kunci pipa rantai digunakan dalam operasi bertekanan tinggi dan
          kritis keamanan, cacat apa pun pada kualitas material, kekuatan rantai,
          desain gagang, atau mekanisme penguncian dapat mengakibatkan selip,
          pelepasan mendadak, kegagalan alat, cedera serius, kerusakan peralatan,
          dan penghentian operasi yang mahal. Untuk mencegah risiko tersebut dan
          menstandarkan kualitas di pasar, Pemerintah India mewajibkan kepatuhan
          terhadap Standar India untuk alat-alat ini.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Kunci Pipa Rantai sesuai IS 4123:1982
          oleh karena itu merupakan persyaratan hukum wajib bagi produsen dan
          importir yang menjual kunci pipa rantai di India. Sertifikasi BIS yang
          valid untuk Kunci Pipa Rantai mengonfirmasi bahwa produk telah diuji
          dan disetujui untuk kekuatan, kinerja cengkeraman, akurasi dimensi, dan
          keamanan keseluruhan sesuai Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem kesesuaian produk dan jaminan kualitas
          yang dikelola oleh Bureau of Indian Standards, otoritas nasional yang
          bertanggung jawab atas standardisasi, pengujian, dan sertifikasi
          produk di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Arti Sertifikat BIS mengacu pada persetujuan resmi yang dikeluarkan
          oleh BIS yang mengonfirmasi bahwa suatu produk mematuhi Standar India
          (IS) yang relevan dan diproduksi di bawah sistem kualitas terkendali.
          Sertifikasi ini memungkinkan produsen menggunakan Tanda ISI pada
          produk yang disertifikasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikasi BIS ada untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi pengguna dari produk tidak aman dan di bawah standar</li>
          <li>Memastikan kualitas konsisten di semua produsen</li>
          <li>Mendukung penegakan peraturan pengendalian kualitas</li>
          <li>Meningkatkan kepercayaan pada barang industri India dan impor</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda sertifikasi BIS, umumnya dikenal sebagai Tanda ISI, adalah
          simbol kepatuhan yang terlihat. Untuk kunci pipa rantai, Tanda ISI
          meyakinkan pembeli bahwa:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Alat mematuhi IS 4123:1982</li>
          <li>Rantai dan gagang dapat menahan beban yang ditentukan</li>
          <li>Produk disetujui secara hukum untuk dijual di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Kunci Pipa Rantai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 4123:1982 – Spesifikasi untuk Kunci Pipa Rantai
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk kunci pipa rantai adalah IS
          4123:1982, yang menetapkan persyaratan untuk desain, material,
          dimensi, kinerja, dan pengujian kunci pipa rantai.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 4123:1982
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kunci pipa rantai berbagai ukuran dan kapasitas</li>
          <li>Konstruksi gagang dan perakitan rantai</li>
          <li>Material rantai, dimensi mata rantai, dan kekuatan</li>
          <li>Toleransi dimensi dan pengerjaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Keamanan, Kinerja & Tujuan Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 4123:1982 dirancang untuk memastikan bahwa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rantai memberikan cengkeraman seragam dan aman pada pipa</li>
          <li>Kunci menahan torsi tinggi tanpa kegagalan</li>
          <li>Gagang dan sambungan tidak berubah bentuk di bawah beban</li>
          <li>Alat berfungsi dengan aman dalam aplikasi industri berat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Mematuhi Lisensi BIS untuk Kunci Pipa
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India kunci pipa rantai</li>
          <li>Importir dan distributor</li>
          <li>Produsen asing yang memasok ke India</li>
          <li>Pedagang dan merek yang menjual dengan label pribadi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Kunci Pipa Rantai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risiko Keamanan Konsumen dan Tempat Kerja
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kunci pipa rantai non-standar dapat menyebabkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Selip atau patah rantai</li>
          <li>Pelepasan mendadak beban torsi tinggi</li>
          <li>Cedera parah pada tangan, lengan, atau tubuh</li>
          <li>Kerusakan pada pipa dan fitting</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pemerintah dan Regulasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai pemberitahuan BIS dan peraturan pengendalian kualitas yang
          berlaku, kunci pipa rantai yang tercakup dalam IS 4123:1982 harus
          memperoleh sertifikasi BIS sebelum penjualan, impor, atau distribusi
          di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implikasi Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual kunci pipa rantai yang tidak disertifikasi dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan barang</li>
          <li>Denda keuangan berat</li>
          <li>Penangguhan operasi bisnis</li>
          <li>Tindakan hukum berdasarkan Undang-Undang BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lisensi BIS untuk Kunci Pipa Rantai memungkinkan bisnis untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Membangun kepercayaan dengan pembeli industri dan kontraktor EPC</li>
          <li>Memenuhi syarat untuk tender pemerintah, BUMN, dan infrastruktur</li>
          <li>Bersaing dengan merek domestik dan internasional mapan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Kunci Pipa Rantai Langkah demi Langkah
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Keterapan & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Langkah pertama melibatkan konfirmasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kategori produk: Kunci Pipa Rantai</li>
          <li>Standar yang berlaku: IS 4123:1982</li>
          <li>Rentang ukuran dan varian kapasitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi Online BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mendaftar di portal BIS</li>
          <li>Memilih IS 4123:1982 dalam aplikasi BIS</li>
          <li>Mengunggah dokumen teknis dan hukum yang diperlukan</li>
          <li>Membayar biaya pemerintah yang berlaku</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proses ini umumnya dikenal sebagai aplikasi BIS online atau
          registrasi sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Struktur Biaya & Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS umumnya mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi dan pemrosesan</li>
          <li>Biaya pengujian sampel</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi dan penandaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS tergantung pada:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Jumlah ukuran kunci</li>
          <li>Kompleksitas pengujian</li>
          <li>Lokasi manufaktur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk (Sesuai IS 4123:1982)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sampel diuji di laboratorium yang diakui BIS untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekuatan tarik rantai</li>
          <li>Ketahanan beban dan torsi</li>
          <li>Akurasi dimensi</li>
          <li>Kekuatan gagang dan pengerjaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi Pabrik & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS melakukan audit di lokasi untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur dan perakitan</li>
          <li>Kontrol manufaktur atau pengadaan rantai</li>
          <li>Sistem pengendalian kualitas</li>
          <li>Fasilitas pengujian dan inspeksi internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah pengujian dan inspeksi berhasil:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS menerbitkan Lisensi Bureau of Indian Standards</li>
          <li>
            Produsen diberi wewenang untuk memasang Tanda ISI pada kunci pipa
            rantai
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kewajiban pasca-sertifikasi meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Audit pengawasan berkala</li>
          <li>Pengujian sampel pasar</li>
          <li>Perpanjangan lisensi tepat waktu</li>
          <li>Kepatuhan berkelanjutan terhadap IS 4123:1982</li>
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
          <li>Registrasi pabrik atau sertifikat UMKM</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin dan peralatan pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat pendirian perusahaan</li>
          <li>Registrasi GST</li>
          <li>Otorisasi merek dagang (jika berlaku)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar dan spesifikasi produk</li>
          <li>Detail material rantai dan perlakuan panas</li>
          <li>Rencana pengendalian kualitas dan inspeksi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Detail permintaan pengujian</li>
          <li>Pernyataan dan komitmen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ini secara kolektif dikenal sebagai DOKUMEN SERTIFIKAT BIS atau
          DOKUMEN SERTIFIKASI BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 4123:1982
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian wajib meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji kekuatan tarik rantai</li>
          <li>Uji beban dan torsi</li>
          <li>Verifikasi dimensi</li>
          <li>Inspeksi material dan pengerjaan</li>
          <li>Uji kinerja cengkeraman fungsional</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Semua pengujian harus dilakukan hanya di laboratorium yang diakui BIS.
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
          <li>Kegagalan dalam uji kekuatan rantai</li>
          <li>Perlakuan panas mata rantai yang tidak tepat</li>
          <li>Ketidaksesuaian dimensi</li>
          <li>Dokumentasi tidak lengkap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Solusi & Praktik Terbaik
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melakukan pra-pengujian internal</li>
          <li>Menggunakan bahan baku bersertifikat</li>
          <li>Mempertahankan kontrol proses yang ketat</li>
          <li>Melibatkan konsultan BIS berpengalaman</li>
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
          <li>Kepatuhan penuh terhadap peraturan India</li>
          <li>Perlindungan dari denda dan tindakan penegakan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penerimaan lebih tinggi oleh pembeli industri</li>
          <li>Kelayakan untuk proyek BUMN dan infrastruktur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Merek
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tanda ISI meningkatkan kredibilitas dan kepercayaan</li>
          <li>Diferensiasi dari pemasok tidak terorganisir</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Akses lebih mudah ke pasar industri besar</li>
          <li>Kredibilitas ekspor yang lebih baik</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter berat</li>
          <li>Penyitaan produk</li>
          <li>Pencabutan lisensi</li>
          <li>Tuntutan hukum berdasarkan Undang-Undang BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Kunci Pipa Rantai?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing (dengan Perwakilan India yang Berwenang)</li>
          <li>Pedagang dan pemasok industri</li>
          <li>Penjual e-commerce yang mencantumkan kunci pipa rantai</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan layanan konsultasi sertifikasi BIS ujung ke ujung,
          termasuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Keterapan produk dan analisis kesenjangan</li>
          <li>Persiapan dan verifikasi dokumentasi</li>
          <li>Koordinasi dengan laboratorium yang diakui BIS</li>
          <li>Dukungan inspeksi pabrik dan audit</li>
          <li>Persetujuan lebih cepat dengan pertanyaan minimal</li>
          <li>Dukungan kepatuhan dan perpanjangan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami dalam alat tangan industri dan peralatan berat
          memastikan perjalanan sertifikasi BIS yang lancar, andal, dan
          sepenuhnya patuh.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Kunci Pipa Rantai sesuai IS 4123:1982
          merupakan persyaratan hukum dan kualitas yang sangat penting untuk
          menjual alat berat ini di India. Sertifikasi BIS untuk Kunci Pipa
          Rantai memastikan keamanan, kekuatan, dan keandalan, sementara Lisensi
          BIS untuk Kunci Pipa Rantai memperkuat kredibilitas merek dan
          penerimaan pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen, importir, dan penjual, kepatuhan tepat waktu tidak
          hanya mencegah sanksi tetapi juga membuka akses ke proyek industri,
          infrastruktur, dan pemerintah bernilai tinggi. Dengan bimbingan ahli
          dan dukungan kepatuhan terstruktur, proses sertifikasi BIS menjadi
          efisien, dapat diprediksi, dan sepenuhnya selaras dengan Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Kunci Pipa Rantai
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Apakah sertifikasi BIS wajib untuk kunci pipa rantai?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, kepatuhan terhadap IS 4123:1982 wajib di India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Apa kepanjangan sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Berapa lama proses sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 45–60 hari kerja untuk produsen India dan 90-120
              hari untuk produsen asing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Berapa biaya sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tergantung rentang ukuran produk dan ruang lingkup pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Bisakah importir mengajukan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, dengan otorisasi produsen yang tepat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Apakah Tanda ISI wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, penandaan ISI wajib setelah sertifikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Bisakah produsen asing memperoleh sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Pengujian apa yang diperlukan sesuai IS 4123:1982?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Uji kekuatan rantai, beban, dimensi, dan pengerjaan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Apakah inspeksi pabrik wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS melakukan audit di lokasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Bisakah beberapa ukuran dicakup dalam satu lisensi?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, tunduk pada pengujian dan persetujuan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Apa yang terjadi jika kunci pipa rantai tidak disertifikasi dijual?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Denda, penyitaan, dan tindakan hukum dapat terjadi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Apakah aplikasi BIS online wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, semua aplikasi diajukan secara online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Apakah perpanjangan diperlukan untuk lisensi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, perpanjangan berkala wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Bisakah konsultan mengurangi penundaan persetujuan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, konsultan profesional membantu menghindari kesalahan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Apakah sertifikasi BIS meningkatkan kepercayaan pembeli?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, secara signifikan meningkatkan kepercayaan pasar.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-4123-2024-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Kunci Pipa Rantai - IS 4123:2024 PDF"
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
            to="/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
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
            to="/id/apa-itu-crs-bis-atau-registrasi-crs"
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
                alt="Pengelolaan Limbah Plastik"
                title="Pengelolaan Limbah Plastik"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Pengelolaan Limbah Plastik
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
            to="/id/apa-itu-sertifikat-bis-bis-india"
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
            to="/id/sertifikasi-bis-isi-mark"
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
              Tanda ISI (BIS) untuk Manufaktur India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
