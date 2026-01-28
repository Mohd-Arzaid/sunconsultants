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

const BISCertificateForBatteryOperatedToothbrushIndonesian = () => {
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

export default BISCertificateForBatteryOperatedToothbrushIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai | IS 302 (Bagian 1):2024 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Sikat Gigi Bertenaga Baterai – Panduan IS 302 (Bagian 1):2024";
  const twitterTitle =
    "Lisensi BIS untuk Sikat Gigi Bertenaga Baterai | IS 302 (Bagian 1):2024";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai di bawah IS 302 (Bagian 1):2024. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Sikat Gigi Bertenaga Baterai sesuai IS 302 (Bagian 1):2024. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai di bawah IS 302 (Bagian 1):2024. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai, Lisensi BIS untuk Sikat Gigi Bertenaga Baterai, IS 302 (Bagian 1):2024, Sertifikasi BIS untuk Sikat Gigi Bertenaga Baterai";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/sikat-gigi-bertenaga-baterai-is-302";
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
                    Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai – IS 302
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
          Sertifikasi BIS Sikat Gigi Bertenaga Baterai – Panduan Lengkap IS 302
          (Bagian 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedTootbrush.png"
            title="Lisensi BIS untuk Sikat Gigi Bertenaga Baterai"
            alt="Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai - IS 302 (Bagian 1):2024 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pasar perawatan mulut India telah mencatat pertumbuhan pesat dalam
          beberapa tahun terakhir, dengan Sikat Gigi Bertenaga Baterai menjadi
          pilihan utama di antara konsumen yang mencari kebersihan yang lebih
          baik, kenyamanan, dan penghilangan plak yang efektif. Sikat gigi ini
          banyak digunakan di rumah, hotel, rumah sakit, perlengkapan perjalanan,
          dan rutinitas perawatan pribadi, terutama oleh anak-anak, pengguna
          lanjut usia, dan orang dengan mobilitas tangan terbatas. Karena sikat
          gigi bertenaga baterai menggabungkan komponen listrik, baterai,
          paparan kelembapan, dan kontak langsung dengan tubuh manusia,
          keselamatan dan kepatuhan kualitas sangat penting.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Desain yang tidak tepat atau manufaktur sikat gigi bertenaga baterai
          yang di bawah standar dapat mengakibatkan sengatan listrik, kebocoran
          baterai, panas berlebih, bahaya kebakaran, atau cedera mekanis. Untuk
          melindungi konsumen dan mengatur kualitas produk, Pemerintah India
          mewajibkan alat perawatan pribadi listrik semacam itu mematuhi standar
          keselamatan India. Oleh karena itu, memperoleh Sertifikat BIS untuk
          Sikat Gigi Bertenaga Baterai di bawah IS 302 (Bagian 1):2024 adalah
          persyaratan hukum wajib sebelum memproduksi, mengimpor, menjual, atau
          mendistribusikan produk ini di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS yang valid untuk Sikat Gigi Bertenaga Baterai
          mengonfirmasi bahwa produk telah diuji dan disetujui untuk keselamatan
          listrik, isolasi, kekuatan mekanik, ketahanan kelembapan, dan
          perlindungan pengguna secara keseluruhan. Panduan rinci ini ditujukan
          untuk produsen, produsen asing, importir, pemilik merek, pedagang,
          distributor, penjual e-commerce, dan profesional kepatuhan yang ingin
          pemahaman lengkap tentang Lisensi BIS untuk Sikat Gigi Bertenaga
          Baterai, termasuk proses sertifikasi, persyaratan pengujian,
          dokumen, biaya, timeline, sanksi, dan kewajiban pasca-sertifikasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kesesuaian resmi India yang
          dikelola oleh Bureau of Indian Standards. BIS beroperasi di bawah
          Kementerian Urusan Konsumen dan bertanggung jawab mengembangkan
          Standar India serta memastikan produk yang dijual di pasar India
          memenuhi tolok ukur keselamatan, kualitas, dan keandalan yang
          ditetapkan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Arti Sertifikat BIS mengacu pada otorisasi yang dikeluarkan oleh BIS
          yang memungkinkan produsen atau importir menjual produk yang sesuai
          dengan Standar India (IS) tertentu. Sertifikasi ini juga mengizinkan
          penggunaan tanda sertifikasi BIS (Tanda ISI) pada produk yang
          disetujui.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikasi BIS ada untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Melindungi konsumen dari produk listrik dan elektronik yang tidak aman
          </li>
          <li>Mengurangi risiko sengatan listrik, kebakaran, dan bahaya mekanis</li>
          <li>Memastikan kualitas seragam di barang domestik dan impor</li>
          <li>Memungkinkan penegakan regulasi dan pengawasan pasar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda BIS (Tanda ISI) pada sikat gigi bertenaga baterai menunjukkan
          bahwa:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produk mematuhi IS 302 (Bagian 1):2024</li>
          <li>Isolasi listrik dan konstruksi aman</li>
          <li>Alat disetujui secara hukum untuk dijual di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Sikat Gigi Bertenaga Baterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Bagian 1):2024 – Keselamatan Peralatan Listrik Rumah Tangga dan Serupa
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk sikat gigi bertenaga baterai adalah IS
          302 (Bagian 1):2024, yang menetapkan persyaratan keselamatan umum untuk
          peralatan listrik yang dimaksudkan untuk penggunaan rumah tangga dan
          serupa, termasuk perangkat perawatan pribadi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 302 (Bagian 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Keselamatan listrik peralatan bertenaga baterai</li>
          <li>Perlindungan terhadap sengatan listrik dan masuknya kelembapan</li>
          <li>Keselamatan mekanis dan persyaratan konstruksi</li>
          <li>Pemanasan, operasi abnormal, dan keandalan komponen</li>
          <li>Isolasi, jarak merayap, dan jarak bebas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Keselamatan, Kinerja & Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Bagian 1):2024 bertujuan memastikan bahwa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Sikat gigi bertenaga baterai beroperasi dengan aman dalam kondisi normal dan fault
          </li>
          <li>
            Pengguna terlindungi dari bahaya listrik, termal, dan mekanis
          </li>
          <li>Baterai dan sirkuit internal tidak kepanasan atau bocor</li>
          <li>Produk tetap aman selama penggunaan harian yang berulang</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Patuh
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India sikat gigi bertenaga baterai</li>
          <li>Importir dan distributor</li>
          <li>Produsen asing yang memasok ke India</li>
          <li>Pemilik merek dan penjual label pribadi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Sikat Gigi Bertenaga Baterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risiko Keselamatan Konsumen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sikat gigi tidak bersertifikat dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sengatan listrik karena isolasi yang buruk</li>
          <li>Kebocoran atau ledakan baterai</li>
          <li>Panas berlebih selama penggunaan lama</li>
          <li>Cedera mekanis dari mekanisme getaran yang rusak</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pemerintah
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai Notifikasi BIS yang berlaku dan peraturan keselamatan listrik,
          sikat gigi bertenaga baterai termasuk sertifikasi BIS wajib. Menjual
          produk tersebut tanpa sertifikasi merupakan pelanggaran hukum India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implikasi Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Denda keuangan berat</li>
          <li>Larangan impor dan penolakan bea cukai</li>
          <li>Tuntutan hukum berdasarkan Undang-Undang BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Pasar & Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lisensi BIS untuk Sikat Gigi Bertenaga Baterai membantu bisnis:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Membangun kepercayaan dan keyakinan konsumen</li>
          <li>Memungkinkan listing di platform e-commerce</li>
          <li>Memenuhi syarat untuk rantai pasokan institusional dan ritel</li>
          <li>Memperkuat reputasi merek jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Sikat Gigi Bertenaga Baterai
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kelayakan & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Langkah pertama meliputi pengonfirmasian:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kategori produk: Sikat gigi bertenaga baterai</li>
          <li>Sumber daya dan tipe baterai</li>
          <li>Standar yang berlaku: IS 302 (Bagian 1):2024</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi Sertifikasi BIS Secara Daring
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen atau importir harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mendaftar di portal BIS</li>
          <li>Mengajukan aplikasi BIS secara daring</li>
          <li>Mengunggah dokumen teknis dan hukum</li>
          <li>Membayar biaya pemerintah yang berlaku</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah ini umumnya dikenal sebagai pendaftaran BIS daring atau
          registrasi sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Biaya & Struktur Biaya untuk Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS biasanya meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi dan pemrosesan</li>
          <li>Biaya pengujian produk</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi dan penandaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS bergantung pada:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kompleksitas produk</li>
          <li>Desain baterai dan selubung</li>
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
          <li>Ketahanan kelembapan</li>
          <li>Pemanasan dan operasi abnormal</li>
          <li>Tahanan isolasi</li>
          <li>Kekuatan dielektrik</li>
          <li>Kekuatan mekanis</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi & Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur dan jalur perakitan</li>
          <li>Sistem pengendalian kualitas</li>
          <li>Sumber baterai dan pengendalian keselamatan</li>
          <li>Fasilitas pengujian internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penerbitan Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah pengujian dan inspeksi berhasil:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS menerbitkan Lisensi Bureau of Indian Standards</li>
          <li>Produsen diotorisasi untuk mencantumkan Tanda ISI</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah persetujuan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Audit pengawasan dilakukan</li>
          <li>Sampel pasar dapat diuji</li>
          <li>Pembaruan lisensi berkala wajib</li>
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
          <li>Sertifikat pendaftaran pabrik</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin dan peralatan uji</li>
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
          <li>Diagram sirkuit listrik</li>
          <li>Spesifikasi baterai dan lembar data</li>
          <li>Daftar komponen</li>
          <li>Manual pengguna dan artwork labelling</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Formulir permintaan uji</li>
          <li>Deklarasi dan pernyataan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ini secara kolektif disebut sebagai DOKUMEN SERTIFIKAT BIS atau
          DOKUMEN SERTIFIKASI BIS.
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
          <li>Uji perlindungan sengatan listrik</li>
          <li>Uji ketahanan kelembapan</li>
          <li>Uji pemanasan dan operasi abnormal</li>
          <li>Uji tahanan isolasi</li>
          <li>Uji kekuatan dielektrik</li>
          <li>Uji kekuatan mekanis</li>
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
          <li>Kegagalan dalam uji kelembapan atau isolasi</li>
          <li>Desain selubung baterai yang tidak aman</li>
          <li>Panas berlebih selama operasi abnormal</li>
          <li>Dokumentasi tidak lengkap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Solusi & Praktik Terbaik
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melakukan pengujian pra-kepatuhan</li>
          <li>Menggunakan baterai dan komponen bersertifikat</li>
          <li>Memastikan sealing dan isolasi yang tepat</li>
          <li>Melibatkan konsultan BIS berpengalaman</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS bagi Produsen & Importir
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan terhadap undang-undang keselamatan India</li>
          <li>Perlindungan dari sanksi dan penyitaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Akses pasar nasional</li>
          <li>Penerimaan oleh pedagang ritel dan platform e-commerce</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Branding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tanda BIS meningkatkan kepercayaan pelanggan</li>
          <li>Diferensiasi dari produk tidak bersertifikat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Masuk lebih mudah ke pasar ritel terorganisir dan kesehatan</li>
          <li>Keberlanjutan bisnis jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi atas Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan terhadap persyaratan BIS dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda keuangan berat</li>
          <li>Penarikan produk</li>
          <li>Pembatasan impor</li>
          <li>Tuntutan hukum</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Sikat Gigi Bertenaga Baterai?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing (dengan Perwakilan India yang Berwenang)</li>
          <li>Pedagang dan pemilik merek</li>
          <li>Penjual e-commerce</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan layanan konsultasi sertifikasi BIS ujung-ke-ujung,
          meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penilaian kelayakan produk</li>
          <li>Penyiapan dan verifikasi dokumen</li>
          <li>Koordinasi dengan laboratorium yang diakui BIS</li>
          <li>Dukungan inspeksi pabrik dan audit</li>
          <li>Persetujuan lebih cepat dengan pertanyaan yang berkurang</li>
          <li>Kepatuhan pasca-sertifikasi dan pembaruan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami dalam peralatan listrik dan perawatan pribadi menjamin
          perjalanan sertifikasi yang lancar, patuh, dan terbatas waktu.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Sikat Gigi Bertenaga Baterai di bawah
          IS 302 (Bagian 1):2024 adalah persyaratan hukum dan keselamatan yang
          penting untuk memasuki dan mempertahankan pasar India. Sertifikasi BIS
          untuk Sikat Gigi Bertenaga Baterai memastikan keselamatan listrik,
          perlindungan kelembapan, dan kepercayaan pengguna, sementara Lisensi
          BIS untuk Sikat Gigi Bertenaga Baterai memperkuat kredibilitas merek
          dan kepatuhan regulasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen dan importir, kepatuhan BIS yang tepat waktu tidak hanya
          mencegah sanksi tetapi juga membuka akses ke ritel terorganisir,
          saluran kesehatan, dan platform e-commerce. Dengan panduan ahli dan
          dukungan kepatuhan terstruktur, proses sertifikasi BIS menjadi efisien,
          andal, dan sepenuhnya selaras dengan Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tanya Jawab – Sertifikasi BIS untuk Sikat Gigi Bertenaga Baterai
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Apakah sertifikasi BIS wajib untuk sikat gigi bertenaga baterai?
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
              Bureau of Indian Standards Certificate (Sertifikat Bureau of Indian Standards).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Berapa lama proses sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 6–8 minggu untuk produsen India dan 12–16 minggu untuk
              produsen asing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Berapa biaya sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bergantung pada desain produk dan ruang lingkup pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Bisakah importir mengajukan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, dengan otorisasi yang sesuai.
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
              Q7. Apakah uji ketahanan kelembapan diperlukan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, sangat penting untuk keselamatan sikat gigi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Apakah inspeksi pabrik wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS melakukan audit pabrik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Bisakah beberapa model dicakup?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, tunduk pada persetujuan pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Apakah pengajuan BIS daring wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, semua aplikasi diajukan secara daring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Bisakah merek asing memperoleh sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Apa akibatnya jika produk tidak bersertifikat dijual?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sanksi, penyitaan, dan tindakan hukum dapat menyusul.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Apakah pembaruan diperlukan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, lisensi BIS memerlukan pembaruan berkala.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Apakah sertifikasi BIS meningkatkan penjualan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, secara signifikan meningkatkan kepercayaan konsumen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q15. Bisakah konsultan mempercepat waktu persetujuan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, konsultan berpengalaman membantu menghindari keterlambatan.
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
