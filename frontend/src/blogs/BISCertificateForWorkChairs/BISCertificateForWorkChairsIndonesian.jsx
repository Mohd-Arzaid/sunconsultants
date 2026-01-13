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

const BISCertificateForWorkChairsIndonesian = () => {
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

export default BISCertificateForWorkChairsIndonesian;

const MetaTags = () => {
  const title = "Sertifikat BIS untuk Kursi Kerja | IS 17631:2022 Lisensi BIS";
  const ogTitle = "Sertifikasi BIS untuk Kursi Kerja – Panduan IS 17631:2022";
  const twitterTitle = "Lisensi BIS untuk Kursi Kerja | IS 17631:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk kursi kerja di bawah IS 17631:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap untuk Sertifikasi BIS untuk Kursi Kerja sesuai IS 17631:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Kursi Kerja di bawah IS 17631:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Kursi Kerja, Lisensi BIS untuk Kursi Kerja, IS 17631:2022, Sertifikasi BIS untuk Kursi Kerja";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    Sertifikat BIS untuk Kursi Kerja – IS 17631:2022
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
          Sertifikat BIS untuk Kursi Kerja – Panduan Kepatuhan Lengkap untuk IS
          17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Lisensi BIS untuk Kursi Kerja"
            alt="Sertifikat BIS untuk Kursi Kerja - IS 17631:2022 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Peningkatan penggunaan kursi kantor dan tugas—baik di ruang kerja
          perusahaan, pusat co-working, kantor rumah, atau pengaturan
          institusional—telah membuat keselamatan dan kinerja ergonomis menjadi
          penting. Untuk memastikan produsen menyediakan produk kursi yang
          stabil secara struktural, tahan lama, dan aman bagi pengguna,
          Pemerintah India telah mewajibkan Sertifikasi BIS untuk Kursi Kerja di
          bawah IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi kerja biasanya menahan beban berulang, gerakan tubuh
          terus-menerus, kemiringan, putaran, dan penyesuaian ketinggian.
          Kegagalan dalam fitur kinerja apa pun dapat menyebabkan cedera serius.
          Inilah mengapa kepatuhan terhadap IS 17631:2022 – Kursi Kerja:
          Persyaratan Keselamatan sekarang wajib untuk semua produsen dan
          importir.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan ini menjelaskan proses lisensi BIS lengkap, termasuk standar,
          pengujian, biaya, dokumentasi, tanggung jawab, manfaat, dan
          tantangan—dibuat dengan konten segar untuk menghindari duplikasi di
          seluruh situs web Anda.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Memahami Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bureau of Indian Standards (BIS) mengawasi kualitas dan keselamatan
          produk yang disediakan di pasar India. Setiap produk yang termasuk
          dalam Standar India yang tercantum dalam Perintah Kontrol Kualitas
          wajib harus dievaluasi dan disertifikasi oleh BIS sebelum dijual.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sertifikat BIS – Apa yang Diwakilinya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS menunjukkan bahwa kursi kerja:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Telah lulus pengujian kinerja dan daya tahan</li>
          <li>Memenuhi spesifikasi material dan konstruksi</li>
          <li>Aman untuk penggunaan harian jangka panjang</li>
          <li>Mematuhi pedoman ergonomis dan struktural dalam Standar India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang memenuhi persyaratan ini diberikan Lisensi BIS yang
          memungkinkan mereka untuk menempelkan Tanda ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar yang Berlaku untuk Kursi Kerja – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar yang mengatur untuk kursi tugas dan kantor adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Kursi Kerja: Persyaratan
          Keselamatan
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini berfokus pada kursi yang dimaksudkan untuk penggunaan
          jangka panjang di lingkungan kerja.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produk yang Dicakup oleh Standar Ini
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kursi kantor ergonomis</li>
          <li>Kursi tugas</li>
          <li>Kursi putar</li>
          <li>Kursi meja kerja</li>
          <li>Kursi kerja dengan ketinggian dapat disesuaikan</li>
          <li>Kursi kerja eksekutif</li>
          <li>Kursi kerja dengan punggung mesh atau kain</li>
          <li>Kursi yang dilengkapi dengan sandaran lengan</li>
          <li>Kursi dengan mekanisme kemiringan/penguncian</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Kepatuhan IS 17631:2022 Sangat Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi kerja berbeda secara signifikan dari kursi serbaguna karena:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mendukung gerakan terus-menerus</li>
          <li>Menggunakan mekanisme mekanis dan penyesuaian</li>
          <li>Membawa beban dinamis</li>
          <li>Memerlukan daya tahan untuk penggunaan jangka panjang</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kursi yang dibuat dengan buruk mungkin gagal di:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sambungan dasar</li>
          <li>Mekanisme putar</li>
          <li>Sistem pengangkat gas</li>
          <li>Dukungan kursi/punggung</li>
          <li>Struktur kaki atau roda</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Hal ini dapat menyebabkan cedera di tempat kerja, waktu henti
          operasional, dan masalah tanggung jawab produk.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sertifikasi BIS Wajib Memastikan
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Desain ergonomis yang aman</li>
          <li>Kapasitas menahan beban yang andal</li>
          <li>Daya tahan kuat di bawah pengujian siklik</li>
          <li>Ketahanan terhadap keausan mekanis</li>
          <li>Kepatuhan terhadap parameter keselamatan pengguna</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan demikian, memperoleh Lisensi BIS untuk Kursi Kerja tidak dapat
          ditawar untuk produsen India dan asing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini mencakup persyaratan untuk kursi kerja. Standar ini
          berlaku untuk kursi kerja yang sepenuhnya diproduksi/dibuat. Ini juga
          berlaku untuk unit siap rakitan; dalam hal ini persyaratan standar ini
          akan berlaku untuk unit yang dirakit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Kursi Kerja (IS
          17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi untuk kursi kerja melibatkan campuran evaluasi
          laboratorium, audit pabrik, dan pemeriksaan teknis.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Evaluasi Produk & Pemetaan Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identifikasi semua varian kursi dan selaraskan dengan IS 17631:2022.
          Pahami model mana yang memiliki konstruksi yang sama dan mana yang
          memerlukan pengujian terpisah.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Pengajuan Aplikasi Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen mengajukan aplikasi melalui Portal BIS Manak Online.
          Informasi yang diperlukan meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail lokasi manufaktur</li>
          <li>Kontrol bahan baku</li>
          <li>Spesifikasi teknis</li>
          <li>Kemampuan produksi</li>
          <li>Dokumentasi kepemilikan merek</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Pembayaran Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya harus dibayar untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aplikasi</li>
          <li>Pemrosesan</li>
          <li>Pengujian</li>
          <li>Inspeksi</li>
          <li>Penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Pengujian Sampel (Persyaratan IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Laboratorium yang diakui BIS mengevaluasi kursi terhadap beberapa
          kriteria keselamatan dan kinerja.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tes Kursi Kerja Meliputi
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengujian beban statis kursi dan punggung</li>
          <li>Siklus pembebanan daya tahan</li>
          <li>Pengujian putar/rotasi</li>
          <li>Ketahanan mekanisme kemiringan</li>
          <li>Kinerja mekanisme pengangkat gas</li>
          <li>Kekuatan roda dan hambatan gulir</li>
          <li>Stabilitas dasar dan pengujian kelebihan beban</li>
          <li>Kemampuan beban sandaran lengan</li>
          <li>Pengujian ketahanan benturan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Laboratorium mengeluarkan laporan pengujian terperinci kepada BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Inspektur BIS meninjau fasilitas:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sistem produksi</li>
          <li>Catatan inspeksi material</li>
          <li>Proses jaminan kualitas internal</li>
          <li>Instrumen pengujian & log kalibrasi</li>
          <li>Kepatuhan terhadap Skema Pengujian & Inspeksi (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah konformitas dikonfirmasi, BIS memberikan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikasi Lisensi BIS/Tanda ISI</li>
          <li>Nomor CML unik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Kepatuhan Konsisten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan pemeriksaan internal yang berkelanjutan</li>
          <li>Mengikuti aturan penandaan</li>
          <li>Bekerja sama selama inspeksi pengawasan</li>
          <li>Memperbarui lisensi secara berkala</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Satu set dokumen lengkap memastikan persetujuan yang lebih cepat.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Bisnis & Pabrik
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrasi pabrik</li>
          <li>Diagram & tata letak manufaktur</li>
          <li>Alur kerja produksi</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan uji</li>
          <li>Sertifikat kalibrasi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar teknik kursi</li>
          <li>Spesifikasi mekanisme</li>
          <li>Lembar data material</li>
          <li>Daftar material</li>
          <li>Instruksi perakitan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti identitas penandatangan yang berwenang</li>
          <li>Surat otorisasi merek</li>
          <li>Sertifikat merek dagang</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Khusus BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi</li>
          <li>Perjanjian</li>
          <li>Formulir permintaan pengujian</li>
          <li>Sampel label</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi kerja menjalani pengujian yang lebih kompleks daripada kursi
          umum karena bagian yang bergerak.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tes Utama yang Dilakukan
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan Tepi Depan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan ke Depan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan ke Depan untuk Kursi dengan Sandaran Kaki
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan ke Samping untuk Kursi Tanpa Sandaran Lengan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan ke Samping untuk Kursi dengan Sandaran Lengan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Penggulingan ke Belakang untuk Kursi Tanpa Sandaran Punggung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Tepi Depan Kursi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Gabungan Kursi dan Punggung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Sandaran Lengan ke Bawah — Pusat
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Sandaran Lengan ke Bawah — Depan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Sandaran Lengan ke Samping
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengujian Beban Statis Sandaran Kaki
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tes-tes ini mensimulasikan bulan atau tahun penggunaan rutin dalam
          beberapa hari.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum dalam Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Kegagalan dalam pengujian mekanis/kemiringan</strong> –
            Sering disebabkan oleh mekanisme yang lemah atau perangkat keras
            berkualitas rendah.
          </li>
          <li>
            <strong>✔ 2. Ketidakpatuhan mekanisme pengangkat gas</strong> –
            Pengangkat gas harus memenuhi parameter tekanan dan keselamatan yang
            ketat.
          </li>
          <li>
            <strong>✔ 3. Infrastruktur pengujian yang tidak memadai</strong> –
            Pengujian kursi kerja memerlukan rig khusus.
          </li>
          <li>
            <strong>✔ 4. Pengelompokan produk yang salah</strong> – Mekanisme
            berbeda = pengujian terpisah.
          </li>
          <li>
            <strong>✔ 5. Ketidakpatuhan STI</strong> – Kesalahan STI dapat
            menunda penerbitan lisensi.
          </li>
          <li>
            <strong>✔ 6. Ketidakcocokan dokumen</strong> – Nama merek dan nama
            model harus sesuai dengan aplikasi BIS secara tepat.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memfasilitasi penjualan legal di seluruh India</li>
          <li>Meningkatkan kepercayaan pelanggan & reputasi merek</li>
          <li>Memastikan daya tahan jangka panjang</li>
          <li>Mengurangi klaim garansi dan kegagalan</li>
          <li>Melindungi dari sanksi regulasi</li>
          <li>Memungkinkan pencantuman di platform e-commerce</li>
          <li>Wajib untuk tender pemerintah dan pasokan perusahaan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Menjual Kursi Kerja Tanpa Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sanksi finansial yang berat</li>
          <li>Penyitaan inventaris</li>
          <li>Perintah penghentian produksi</li>
          <li>Larangan impor</li>
          <li>Tuntutan pidana</li>
          <li>Pembatalan lisensi bisnis</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Penegakan ketat dilakukan di bawah Undang-Undang BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Harus Memperoleh Sertifikasi BIS untuk Kursi Kerja?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">Wajib untuk:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing yang mengekspor ke India</li>
          <li>Pemilik merek</li>
          <li>Importir</li>
          <li>Pemasok OEM/ODM</li>
          <li>Distributor gudang</li>
          <li>Merek furnitur ritel dan online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap pabrik memerlukan lisensi BIS yang unik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Kursi Kerja di bawah IS 17631:2022 sangat penting
          untuk memastikan produk kursi yang aman, tahan lama, dan ergonomis di
          India. Sertifikasi wajib meningkatkan kepercayaan pelanggan,
          mengurangi risiko tanggung jawab produk, dan memastikan kepatuhan
          terhadap standar kualitas nasional. Dengan dukungan profesional,
          perjalanan sertifikasi—dari pengujian hingga inspeksi hingga
          lisensi—menjadi efisien dan dapat diprediksi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikat BIS untuk Kursi Kerja (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Kursi mana yang termasuk dalam IS 17631:2022?</strong>
              <br />
              Setiap kursi yang dirancang untuk lingkungan kerja, termasuk kursi
              ergonomis kantor, kursi tugas, kursi putar, dan kursi yang dapat
              disesuaikan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Apakah Sertifikasi BIS wajib untuk kursi kerja?
              </strong>
              <br />
              Ya. Sertifikasi BIS wajib sebelum memproduksi, menjual, atau
              mengimpor kursi kerja di India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Apa yang membuat pengujian kursi kerja berbeda dari pengujian
                kursi umum?
              </strong>
              <br />
              Kursi kerja menggunakan mekanisme seperti putar, pengangkat gas,
              sistem kemiringan, dan roda—memerlukan pengujian mekanis dan daya
              tahan yang canggih.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Berapa lama proses sertifikasi BIS?</strong>
              <br />
              Biasanya 30–45 hari untuk produsen India dan sekitar 120 hari
              untuk produsen asing, tergantung pada pengujian dan dokumentasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Bisakah produsen asing mengajukan?</strong>
              <br />
              Ya, melalui FMCS (Skema Sertifikasi Produsen Asing).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Apa yang terjadi jika kursi gagal dalam pengujian BIS?
              </strong>
              <br />
              Kursi harus didesain ulang, diperbaiki, dan diuji ulang hingga
              memenuhi IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Dokumen apa yang diperlukan untuk aplikasi BIS?
              </strong>
              <br />
              Detail pabrik, gambar produk, daftar mesin, dokumen QC,
              kepemilikan merek, dan dokumen hukum.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Apakah semua model kursi memerlukan pengujian terpisah?
              </strong>
              <br />
              Jika model berbeda dalam desain, mekanisme, atau struktur,
              pengujian terpisah mungkin diperlukan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Apakah penandaan ISI wajib setelah persetujuan?
              </strong>
              <br />
              Ya, tanda ISI harus muncul pada produk, label, dan kemasan.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Kursi Kerja - IS 17631:2022 PDF"
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
