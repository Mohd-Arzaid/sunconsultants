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

const BISCertificateForFurnitureIndonesian = () => {
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

export default BISCertificateForFurnitureIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Perabotan di India | Sertifikasi BIS, Lisensi & Panduan Proses";
  const ogTitle =
    "Sertifikat BIS untuk Perabotan di India - Panduan Lengkap Sertifikasi BIS";
  const twitterTitle =
    "Sertifikat BIS untuk Perabotan | Panduan Lengkap Sertifikasi BIS India";
  const metaDescription =
    "Sertifikat BIS untuk Perabotan di India - panduan lengkap tentang Sertifikasi BIS, Lisensi BIS, biaya, dokumen, standar, proses, aplikasi online & Tanda BIS untuk produsen perabotan.";
  const ogDescription =
    "Mencari Sertifikasi BIS untuk Perabotan di India? Pelajari tentang Lisensi BIS, Tanda BIS, standar yang berlaku, proses sertifikasi, biaya, dokumen & persyaratan kepatuhan secara detail.";
  const twitterDescription =
    "Panduan lengkap Sertifikat BIS untuk Perabotan di India - proses Sertifikasi BIS, biaya, dokumen, Tanda BIS, standar & aplikasi online dijelaskan.";
  const metaKeywords =
    "Sertifikat BIS untuk Perabotan, Sertifikasi BIS untuk Perabotan, Lisensi BIS untuk Perabotan, Apa itu BIS, BIS India";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/perabotan";
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
                    Sertifikat BIS untuk Perabotan di India – Panduan Lengkap
                    Detail
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
          Sertifikat BIS untuk Perabotan di India – Panduan Lengkap Detail
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Lisensi BIS untuk Perabotan"
            alt="Sertifikat BIS untuk Perabotan di India - Panduan Lengkap Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pengantar: Sertifikasi BIS dan Industri Perabotan India
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Di India, kualitas produk, keselamatan, dan standardisasi diatur oleh
          otoritas statutori pusat yang dikenal sebagai Bureau of Indian
          Standards (BIS). BIS adalah organisasi standar nasional India,
          didirikan di bawah Undang-Undang BIS untuk memastikan bahwa produk
          yang dijual di pasar India sesuai dengan tolok ukur keselamatan,
          kualitas, dan kinerja yang ditetapkan.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS adalah singkatan dari Bureau of Indian Standards. BIS berfungsi di
          bawah Kementerian Urusan Konsumen, Pangan & Distribusi Publik,
          Pemerintah India. BIS memainkan peran penting dalam melindungi
          kepentingan konsumen sambil mendukung produsen melalui ekosistem
          standardisasi dan sertifikasi yang transparan.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Industri perabotan India telah mengalami pertumbuhan pesat karena:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanisasi</li>
          <li>Ekspansi infrastruktur perumahan dan komersial</li>
          <li>
            Pertumbuhan di sektor perhotelan, pendidikan, kesehatan, dan
            co-living
          </li>
          <li>
            Meningkatnya kesadaran konsumen tentang keselamatan dan daya tahan
            produk
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Perabotan tidak lagi dianggap sebagai produk yang murni estetis.
          Perabotan secara langsung terkait dengan keselamatan pengguna,
          ergonomi, stabilitas struktural, ketahanan api, dan daya tahan jangka
          panjang. Insiden yang melibatkan tempat tidur yang runtuh, tempat
          tidur susun yang tidak aman, kursi yang tidak stabil, atau unit
          penyimpanan yang tidak standar telah menimbulkan kekhawatiran di
          kalangan regulator dan konsumen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengatasi risiko ini, Sertifikasi BIS untuk Perabotan telah
          menjadi persyaratan kepatuhan yang kritis. BIS memastikan bahwa produk
          perabotan memenuhi Standar India (IS) yang berkaitan dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekuatan struktural</li>
          <li>Kapasitas menahan beban</li>
          <li>Kualitas material</li>
          <li>Keselamatan desain</li>
          <li>Kinerja dalam kondisi penggunaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen, importir, eksportir, UKM, startup, dan pemilik merek
          perabotan, memperoleh Sertifikat BIS untuk Perabotan tidak lagi hanya
          formalitas regulasi—ini adalah kebutuhan pasar.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS untuk Perabotan Penting
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memastikan kepatuhan hukum di bawah peraturan India</li>
          <li>Meningkatkan kepercayaan konsumen dan kredibilitas merek</li>
          <li>
            Memungkinkan penjualan dan distribusi tanpa batas di seluruh India
          </li>
          <li>Meminimalkan risiko tanggung jawab produk</li>
          <li>Meningkatkan kesiapan ekspor dan penerimaan global</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini dirancang untuk menjadi sumber daya yang
          paling otoritatif dan terperinci tentang Sertifikasi BIS untuk
          Perabotan di India. Baik Anda adalah produsen pertama kali atau merek
          perabotan yang mapan, panduan ini menjawab setiap pertanyaan yang
          mungkin terkait dengan Lisensi BIS untuk Perabotan, Registrasi BIS
          untuk Perabotan, standar yang berlaku, proses, biaya, dokumen, jadwal,
          dan kepatuhan pasca-sertifikasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS untuk Perabotan?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Perabotan adalah persetujuan resmi yang diberikan
          oleh Bureau of Indian Standards yang mengkonfirmasi bahwa produk
          perabotan tertentu mematuhi Standar India (IS) yang relevan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Apa itu Tanda BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tanda BIS, yang biasa dikenal sebagai Tanda ISI, adalah tanda
          kesesuaian standar yang muncul pada produk bersertifikat. Ini
          menandakan bahwa perabotan telah:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lulus pengujian laboratorium</li>
          <li>Lulus inspeksi pabrik</li>
          <li>Memenuhi semua persyaratan standar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Logo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Logo BIS mewakili otoritas BIS sebagai badan standar nasional India.
          Ketika digunakan dengan Tanda ISI pada produk perabotan, ini
          meyakinkan pembeli bahwa produk tersebut mematuhi Standar BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sertifikat BIS India – Status Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Di India, memproduksi, mengimpor, atau menjual produk perabotan yang
          tercakup dalam standar yang diberitahukan tanpa Sertifikasi BIS dapat
          menyebabkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan barang</li>
          <li>Denda moneter yang berat</li>
          <li>Penuntutan di bawah Undang-Undang BIS</li>
          <li>Larangan penjualan atau impor</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Oleh karena itu, Sertifikat BIS untuk Perabotan di India memiliki
          kepentingan hukum yang kuat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Penting untuk Produk Perabotan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Perabotan sangat penting karena beberapa alasan:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Keselamatan & Integritas Struktural
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan perabotan dapat menyebabkan cedera atau kematian. Standar
          BIS mengevaluasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kapasitas menahan beban</li>
          <li>Stabilitas terhadap terbalik</li>
          <li>Kekuatan sambungan</li>
          <li>Kinerja material</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Kualitas & Daya Tahan
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produk perabotan bersertifikat memastikan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Masa pakai yang panjang</li>
          <li>Ketahanan terhadap keausan</li>
          <li>Kinerja yang seragam</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Kepercayaan Konsumen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tanda Sertifikasi BIS membangun kepercayaan instan di kalangan
          pembeli, institusi, dan pembeli grosir.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Akses Pasar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Banyak tender pemerintah, pembeli institusional, dan perusahaan besar
          mewajibkan perabotan bersertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Kepatuhan Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Menjual perabotan yang tidak bersertifikat di bawah norma BIS wajib
          dapat menarik denda dan tindakan hukum.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produk Perabotan yang Dicakup dalam Sertifikasi BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Perabotan adalah kategori umum yang luas di bawah BIS, mencakup
          berbagai jenis produk, masing-masing diatur oleh Standar India yang
          berbeda (Nomor IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kategori Perabotan Utama yang Dicakup:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Kursi Kerja
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Digunakan di kantor, pabrik, dan ruang komersial. Standar fokus pada
          ergonomi, stabilitas, dan kinerja beban.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Kursi dan Bangku Tujuan Umum
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Digunakan di rumah, sekolah, dan ruang publik. BIS mengevaluasi
          keselamatan struktural dan kekuatan material.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Meja dan Meja Tulis
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Termasuk meja kantor, meja belajar, workstation. Standar menguji
          kapasitas beban dan daya tahan permukaan.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Unit Penyimpanan
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lemari, kabinet, loker, rak. Penekanan pada stabilitas, tepi tajam,
          dan akses yang aman.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Tempat Tidur
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tempat tidur tunggal, tempat tidur ganda, tempat tidur lipat. BIS
          memeriksa kekuatan rangka dan kinerja jangka panjang.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Tempat Tidur Susun
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sangat diatur karena risiko keselamatan. Fokus pada pagar pengaman,
          keselamatan tangga, dan pencegahan jatuh.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Komposit Berlapis untuk Perabotan Non-Domestik
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Digunakan di kantor, hotel, auditorium. Standar mencakup pengujian
          ketahanan api dan daya tahan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produk Perabotan Lainnya
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Perabotan sekolah</li>
          <li>Tempat duduk institusional</li>
          <li>Perabotan rumah sakit</li>
          <li>Perabotan modular</li>
          <li>Sistem perabotan logam & kayu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap kategori produk memiliki Nomor IS yang berlaku sendiri,
          diberitahukan secara terpisah oleh BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Perabotan
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Apa itu Standar BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar BIS adalah spesifikasi teknis yang diterbitkan oleh BIS untuk
          mendefinisikan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Persyaratan material</li>
          <li>Parameter kinerja</li>
          <li>Metode pengujian</li>
          <li>Panduan penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Nomor IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nomor IS (Nomor Standar India) secara unik mengidentifikasi standar
          yang berlaku untuk suatu produk.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Pemberitahuan BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS mengeluarkan Pemberitahuan BIS resmi yang membuat standar tertentu
          menjadi wajib. Setelah diberitahukan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan menjadi wajib</li>
          <li>Produk yang tidak bersertifikat adalah ilegal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cara Mengidentifikasi Standar BIS yang Benar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mengidentifikasi kategori produk</li>
          <li>Mempelajari ruang lingkup IS yang berlaku</li>
          <li>Mengkonfirmasi keberlakuan standar</li>
          <li>Menghindari pemilihan standar yang salah (kesalahan umum)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Jenis Sertifikasi BIS yang Berlaku untuk Perabotan
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Lisensi BIS di bawah Skema ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produk perabotan umumnya dicakup dalam Skema Sertifikasi ISI, yang
          melibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengujian produk</li>
          <li>Inspeksi pabrik</li>
          <li>Audit pengawasan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Registrasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Registrasi BIS terutama untuk produk elektronik dan IT. Perabotan
          biasanya memerlukan Lisensi BIS, bukan Registrasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Perabotan di India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1: Persiapan Pra-Aplikasi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mengidentifikasi Standar IS yang berlaku</li>
          <li>Menilai kepatuhan desain produk</li>
          <li>Mempersiapkan dokumentasi teknis</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2: Aplikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ajukan Aplikasi BIS dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produk</li>
          <li>Detail manufaktur</li>
          <li>Referensi standar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3: Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi diajukan melalui portal online BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4: Pengujian Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel diuji di laboratorium yang diakui BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5: Inspeksi Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Petugas BIS memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Kontrol kualitas</li>
          <li>Fasilitas pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6: Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah kepatuhan, BIS memberikan lisensi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7: Penggunaan Tanda Sertifikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen dapat memasang Tanda BIS / Tanda ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Perabotan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian adalah bagian wajib dari proses registrasi BIS. Perabotan
          menjalani pengujian ketat untuk memastikan keselamatan dan daya tahan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Wajib untuk Perabotan:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji Beban Struktural</li>
          <li>Uji Stabilitas</li>
          <li>Uji Kekuatan Pagar Pengaman</li>
          <li>Uji Dampak</li>
          <li>Uji Bahaya Terjebak</li>
          <li>Uji Kekuatan & Sudut Tangga</li>
          <li>Uji Keselamatan Material</li>
          <li>Uji Radius Tepi & Ketajaman</li>
          <li>Uji Dukungan Kasur</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian harus dilakukan di laboratorium yang diakui BIS saja.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS untuk Perabotan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumen Utama Meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti registrasi pabrik</li>
          <li>Gambar produk & spesifikasi</li>
          <li>Detail bahan baku</li>
          <li>Laporan pengujian</li>
          <li>Catatan kontrol kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kesalahan Dokumentasi Umum:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Referensi standar yang salah</li>
          <li>Data pengujian tidak lengkap</li>
          <li>Ketidaksesuaian dalam ruang lingkup produk</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Biaya Sertifikasi BIS untuk Perabotan
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Komponen Biaya Sertifikat BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi pemerintah</li>
          <li>Biaya pengujian</li>
          <li>Biaya inspeksi</li>
          <li>Biaya lisensi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Faktor Biaya Sertifikasi BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kompleksitas produk</li>
          <li>Jumlah model</li>
          <li>Persyaratan pengujian</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Catatan: Biaya konsultasi profesional terpisah dari biaya pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Jadwal Registrasi Sertifikat BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Jadwal Rata-rata:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengujian: 3–6 minggu</li>
          <li>Inspeksi: 1–2 minggu</li>
          <li>Pemberian Lisensi: 2–4 minggu</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total: 8–12 minggu (sekitar)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cara Mendapatkan Sertifikasi BIS di India untuk Produsen Perabotan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">Tips Praktis:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pilih standar IS yang benar</li>
          <li>Pastikan kesiapan pabrik</li>
          <li>Pertahankan catatan pengujian</li>
          <li>Hindari kesalahan dokumentasi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aplikasi Sertifikat BIS Online – Tinjauan Praktis
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tantangan Portal Online:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kesalahan teknis</li>
          <li>Masalah unggah dokumen</li>
          <li>Kebingungan pemilihan standar</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan yang tepat mengurangi penundaan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penggunaan Tanda BIS & Tanda Sertifikasi BIS Setelah Persetujuan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aturan Penandaan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Referensi IS yang benar</li>
          <li>Nomor lisensi</li>
          <li>Ukuran & visibilitas yang tepat</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan dapat menyebabkan penangguhan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan dalam Sertifikasi BIS untuk Perabotan
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Menafsirkan standar</li>
          <li>Kegagalan pengujian produk</li>
          <li>Ketidaksesuaian inspeksi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Peran Konsultan BIS dalam Sertifikasi Perabotan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Konsultan BIS profesional membantu dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mengidentifikasi standar yang benar</li>
          <li>Mengelola pengujian & inspeksi</li>
          <li>Mengurangi waktu persetujuan</li>
          <li>Menghindari penolakan yang mahal</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Perabotan adalah landasan kualitas, keselamatan,
          dan kepatuhan hukum di pasar perabotan India yang berkembang. Baik
          Anda adalah produsen, importir, atau pemilik merek, memperoleh
          Sertifikat BIS untuk Perabotan di India memastikan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan regulasi</li>
          <li>Kepercayaan konsumen</li>
          <li>Kesuksesan pasar jangka panjang</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan memahami Proses Sertifikasi BIS, Standar, Biaya, dan
          persyaratan Kepatuhan, bisnis dapat dengan percaya diri menavigasi
          lanskap regulasi dan membangun produk perabotan yang lebih aman, lebih
          kuat, dan lebih andal untuk pasar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pertanyaan yang Sering Diajukan untuk Lisensi BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah Sertifikasi BIS wajib untuk semua produk perabotan di
              India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak, Sertifikasi BIS wajib hanya untuk produk perabotan yang
              tercakup dalam Standar BIS yang diberitahukan. Namun, setelah
              kategori produk perabotan diberitahukan oleh Bureau of Indian
              Standards, memproduksi, mengimpor, menjual, atau mendistribusikan
              produk tersebut tanpa Lisensi BIS yang valid menjadi ilegal di
              India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Produk perabotan mana yang memerlukan Lisensi BIS daripada
              Registrasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Produk perabotan umumnya masuk dalam Skema Sertifikasi ISI, yang
              memerlukan Lisensi BIS, bukan Registrasi BIS. Registrasi BIS (CRS)
              terutama berlaku untuk produk elektronik dan IT, sedangkan produk
              perabotan memerlukan pengujian + inspeksi pabrik + Lisensi BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah perabotan impor dapat dijual di India tanpa Sertifikasi
              BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak. Produk perabotan impor yang tercakup dalam Standar BIS
              wajib harus memiliki Sertifikasi BIS sebelum clearance bea cukai.
              Mengimpor perabotan yang tidak bersertifikat dapat mengakibatkan:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Penahanan bea cukai</li>
              <li>Ekspor ulang atau penghancuran</li>
              <li>Denda berat</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Produsen asing harus memperoleh Lisensi BIS sebelum mengekspor
              perabotan ke India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah produsen perabotan asing dapat mengajukan Sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya. Produsen asing dapat mengajukan di bawah Skema Sertifikasi
              Produsen Asing (FMCS). Mereka harus:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Mengangkat Perwakilan India yang Berwenang (AIR)</li>
              <li>Mematuhi Standar India</li>
              <li>Mengizinkan inspeksi pabrik BIS di luar negeri.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah Sertifikasi BIS diperlukan untuk produsen perabotan buatan
              tangan atau skala kecil?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, jika produk perabotan tercakup dalam standar BIS wajib, maka
              bahkan UKM, startup, dan unit skala kecil harus memperoleh
              Sertifikasi BIS. Tidak ada pengecualian berdasarkan volume
              produksi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah Sertifikasi BIS diperlukan untuk perabotan kayu?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, produk perabotan kayu seperti tempat tidur, kursi, meja, meja
              tulis, dan unit penyimpanan mungkin memerlukan Sertifikasi BIS
              jika mereka masuk dalam standar yang diberitahukan. Standar BIS
              berlaku untuk perabotan kayu dan logam, tergantung pada jenis
              produk dan penggunaan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah satu Lisensi BIS dapat mencakup beberapa model perabotan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, beberapa model atau varian dapat dicakup dalam satu Lisensi
              BIS, asalkan:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Mereka masuk dalam Standar IS yang sama</li>
              <li>Parameter konstruksi, material, dan desain serupa</li>
              <li>BIS menyetujui pengelompokan selama aplikasi.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah Sertifikasi BIS dapat dialihkan ke produsen lain?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak. Lisensi BIS tidak dapat dialihkan. Setiap produsen harus
              memperoleh Sertifikat BIS mereka sendiri, bahkan jika desain
              produk identik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apa itu Sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ini adalah bukti resmi kepatuhan terhadap Standar BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apakah Sertifikasi BIS wajib untuk perabotan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, untuk produk perabotan yang tercakup dalam standar yang
              diberitahukan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Bagaimana cara mendapatkan Sertifikasi BIS di India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Melalui pengujian, inspeksi, dan persetujuan lisensi BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Apa itu Tanda BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tanda kesesuaian yang menunjukkan persetujuan BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Biaya Sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tergantung pada jenis produk, pengujian, dan ruang lingkup.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kepanjangan BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>
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
