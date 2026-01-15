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

const BISCertificateForSeamlessPipesAndTubesIndonesian = () => {
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

export default BISCertificateForSeamlessPipesAndTubesIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan | Lisensi BIS IS 17875:2022";
  const ogTitle =
    "Sertifikasi BIS untuk Pipa & Tabung Tanpa Sambungan – Panduan IS 17875:2022";
  const twitterTitle =
    "Lisensi BIS untuk Pipa & Tabung Tanpa Sambungan | IS 17875:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan di bawah IS 17875:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Pipa & Tabung Tanpa Sambungan sesuai IS 17875:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan di bawah IS 17875:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan, Lisensi BIS untuk Pipa & Tabung Tanpa Sambungan, IS 17875:2022, Sertifikasi BIS untuk Pipa & Tabung Tanpa Sambungan";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/pipa-dan-tabung-tanpa-sambungan-is-17875";
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
                    Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan – IS
                    17875:2022
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
          Sertifikat BIS untuk Pipa dan Tabung Tanpa Sambungan di bawah IS
          17875:2022 — Panduan Sertifikasi Lengkap
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="Lisensi BIS untuk Pipa & Tabung Tanpa Sambungan"
            alt="Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan - IS 17875:2022 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pipa dan tabung baja tanpa sambungan diakui secara luas karena
          kinerjanya yang unggul dalam aplikasi kritis, bertekanan tinggi, dan
          suhu tinggi. Mereka sangat penting dalam industri seperti minyak &
          gas, petrokimia, kilang, teknik berat, otomotif, pabrik termal,
          dirgantara, hidrolik, dan sistem mekanik umum. Karena pipa tanpa
          sambungan tidak memiliki sambungan las, mereka menawarkan kekuatan,
          keseragaman, dan kemampuan penanganan tekanan yang lebih besar
          dibandingkan dengan pipa las.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan bahwa produsen mengikuti kualitas produksi yang
          konsisten dan memasok produk yang aman dan bebas cacat ke pasar India,
          Pemerintah India telah membuat Sertifikasi BIS wajib untuk pipa dan
          tabung tanpa sambungan di bawah IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman komprehensif ini menjelaskan seluruh proses memperoleh Lisensi
          BIS, termasuk dokumentasi, pengujian wajib, persyaratan kepatuhan
          kualitas, biaya, timeline, tantangan teknis, manfaat, hukuman, dan
          aplikabilitas industri — ditulis dalam format yang diperluas, sangat
          detail, dan kaya SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS untuk Pipa dan Tabung Tanpa Sambungan?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS adalah persetujuan resmi yang dikeluarkan oleh Bureau
          of Indian Standards, yang mengkonfirmasi bahwa produsen memproduksi
          pipa/tabung tanpa sambungan sesuai dengan spesifikasi yang
          didefinisikan di bawah IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pipa tanpa sambungan harus menjalani pengujian ketat terkait:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ketahanan tekanan</li>
          <li>Kekuatan tarik</li>
          <li>Ketangguhan benturan</li>
          <li>Kemampuan menekuk</li>
          <li>Komposisi kimia</li>
          <li>Akurasi dimensi</li>
          <li>Evaluasi non-destruktif</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hanya produsen yang memenuhi persyaratan kinerja ini yang menerima
          Tanda ISI, memungkinkan mereka untuk secara legal memproduksi,
          mengimpor, atau menjual pipa tanpa sambungan di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Utama Sertifikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Mencegah sistem perpipaan yang tidak standar atau berbahaya masuk ke
            rantai pasokan industri
          </li>
          <li>
            Memastikan kualitas manufaktur yang konsisten dan dapat diandalkan
          </li>
          <li>
            Melindungi industri yang mengandalkan transmisi fluida atau gas
            bertekanan tinggi
          </li>
          <li>Mempertahankan tolok ukur keselamatan dan kualitas nasional</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Memahami IS 17875:2022 — Standar India untuk Pipa & Tabung Tanpa
          Sambungan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 menentukan persyaratan kualitas, pengujian, manufaktur,
          dan kinerja untuk pipa dan tabung baja tanpa sambungan yang
          dimaksudkan untuk layanan umum.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruang Lingkup Lisensi BIS untuk Pipa & Tabung Tanpa Sambungan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Standar ini mencakup persyaratan untuk pipa dan
          tabung baja tahan karat tanpa sambungan untuk layanan umum.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Standar ini tidak menentukan persyaratan untuk
          pipa dan tabung Baja Tahan Karat tanpa sambungan yang dimaksudkan
          untuk tujuan yang berbeda, yang dicakup oleh Standar India terpisah.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplikasi yang Dicakup di Bawah IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pipa minyak dan gas</li>
          <li>Layanan fluida suhu tinggi</li>
          <li>Tabung ketel</li>
          <li>Pabrik pengolahan kimia</li>
          <li>Sistem hidrolik dan pneumatik</li>
          <li>Penukar panas</li>
          <li>Aplikasi struktural</li>
          <li>Komponen otomotif</li>
          <li>Aplikasi uap</li>
          <li>Pipa industri bertekanan tinggi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parameter Kualitas Utama dalam IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Persyaratan Komposisi Kimia:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Menentukan batas untuk karbon, mangan, kromium, nikel, molibdenum,
          belerang, fosfor, dll.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Sifat Mekanis:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekuatan tarik</li>
          <li>Kekuatan luluh</li>
          <li>Kekerasan</li>
          <li>Daktilitas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Toleransi Dimensi:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diameter luar</li>
          <li>Ketebalan dinding</li>
          <li>Toleransi panjang</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Kondisi Permukaan:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Pipa harus bebas dari retakan, laminasi, sambungan, goresan, atau
          cacat yang merugikan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Pengujian Hidrostatik:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Memastikan pipa dapat menahan tekanan internal tanpa kebocoran.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Pengujian Non-Destruktif (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Termasuk arus eddy, pengujian ultrasonik, atau pengujian partikel
          magnetik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Lengkap untuk Pipa Tanpa Sambungan (IS
          17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi BIS untuk pipa tanpa sambungan lebih teknis dan
          detail daripada kebanyakan produk lain karena persyaratan manufaktur
          dan pengujian sangat luas. Di bawah ini adalah penjelasan langkah demi
          langkah yang sangat detail.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 1 — Tentukan Aplikabilitas & Kategorisasi Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mengidentifikasi semua grade baja yang digunakan</li>
          <li>Menentukan dimensi dan rentang ketebalan</li>
          <li>
            Mengkonfirmasi apakah semua varian berada dalam ruang lingkup IS
            17875
          </li>
          <li>Mempersiapkan klasifikasi produk untuk pengujian BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Satu lisensi BIS dapat mencakup beberapa ukuran dan grade jika mereka
          berbagi fasilitas manufaktur dan proses yang sama.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 2 — Siapkan Dokumentasi & Ajukan Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus mengajukan di Portal BIS Online Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Informasi meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail dan tata letak pabrik</li>
          <li>Kapasitas dan proses produksi</li>
          <li>Detail tungku dan perlakuan panas</li>
          <li>Peralatan rolling, piercing, dan drawing</li>
          <li>Sistem kontrol kualitas</li>
          <li>Dokumentasi sumber bahan baku</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pengajuan yang salah adalah salah satu penyebab paling umum dari
          penolakan aplikasi BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 3 — Pembayaran Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian laboratorium</li>
          <li>Biaya inspeksi dan perjalanan</li>
          <li>Biaya penandaan berdasarkan volume produksi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 4 — Seleksi Sampel & Pengujian Laboratorium BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pipa tanpa sambungan menjalani pengujian mekanis dan kimia yang
          ekstensif.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ini adalah bagian yang paling memakan waktu dan paling teknis dari
          sertifikasi BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Uji Komposisi Kimia</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Dilakukan menggunakan:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spektroskopi emisi optik</li>
          <li>Metode kimia basah</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Memastikan komposisi kimia yang tepat sesuai IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Pengujian Mekanis</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Uji Tarik</strong> — Mengevaluasi kekuatan tarik ultimate,
            titik luluh, dan elongasi.
          </li>
          <li>
            <strong>Uji Kekerasan</strong> — Mengkonfirmasi ketangguhan
            material.
          </li>
          <li>
            <strong>Uji Perataan</strong> — Menguji daktilitas dan kemampuan las
            (meskipun tanpa sambungan, perataan memeriksa integritas material).
          </li>
          <li>
            <strong>Uji Flaring / Flanging</strong> — Memastikan kemampuan
            deformasi tanpa retak.
          </li>
          <li>
            <strong>Uji Dampak (Charpy)</strong> — Mengevaluasi kinerja pada
            suhu rendah.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Uji Hidrostatik</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Pipa dikenakan tekanan internal tinggi untuk memastikan tidak terjadi
          kebocoran atau deformasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Pengujian Non-Destruktif</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Wajib untuk mendeteksi cacat internal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Metode meliputi:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspeksi Ultrasonik</li>
          <li>Pemeriksaan Arus Eddy</li>
          <li>Inspeksi Partikel Magnetik (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Inspeksi Visual & Dimensi</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Mengevaluasi:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Finishing permukaan</li>
          <li>Kelurusan</li>
          <li>Ovalitas</li>
          <li>Toleransi ketebalan</li>
          <li>Akurasi diameter</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Pemeriksaan Metalurgi</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Analisis mikrostruktur mengkonfirmasi struktur butir, efektivitas
          perlakuan panas, dan stabilitas material.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 5 — Inspeksi Pabrik BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah hasil pengujian berhasil, petugas BIS mengunjungi pabrik.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mereka memeriksa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyimpanan bahan baku</li>
          <li>Proses tungku/perlakuan panas</li>
          <li>Pabrik piercing, reducer & bangku cold-draw</li>
          <li>Fasilitas uji hidrostatik</li>
          <li>Fasilitas NDT</li>
          <li>Peralatan laboratorium & kalibrasi</li>
          <li>Buku catatan kontrol kualitas</li>
          <li>Verifikasi kapasitas manufaktur</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pabrik harus mematuhi sepenuhnya Skema Pengujian & Inspeksi (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 6 — Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Jika pengujian dan inspeksi memenuhi persyaratan BIS, produsen
          menerima:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Nomor CML</li>
          <li>
            Otorisasi untuk menggunakan Tanda ISI pada pipa tanpa sambungan
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS dapat menolak aplikasi jika bahkan satu persyaratan tidak
          terpenuhi — membuat panduan ahli sangat berharga.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          LANGKAH 7 — Kewajiban Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Menggunakan Tanda ISI dengan benar pada label, kemasan, dan pipa
          </li>
          <li>Mempertahankan pengujian internal sesuai STI</li>
          <li>Menjalani inspeksi pengawasan BIS rutin</li>
          <li>Memastikan setiap batch mematuhi IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan untuk mempertahankan kepatuhan dapat mengakibatkan
          penangguhan atau pembatalan lisensi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Pipa Tanpa Sambungan
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Dokumen Manufaktur & Produksi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lisensi pabrik</li>
          <li>Diagram tata letak dengan posisi mesin</li>
          <li>Manual proses kontrol kualitas</li>
          <li>Catatan perlakuan panas</li>
          <li>Sertifikat uji pabrik bahan baku</li>
          <li>Detail proses rolling/piercing</li>
          <li>Detail bangku drawing</li>
          <li>Sertifikat kalibrasi untuk peralatan uji</li>
          <li>Laporan uji internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Daftar material</li>
          <li>Spesifikasi grade kimia</li>
          <li>Lembar sifat mekanis</li>
          <li>Bagan toleransi dimensi</li>
          <li>Gambar & spesifikasi pipa</li>
          <li>Dokumentasi sistem ketertelusuran material</li>
          <li>Prosedur operasi standar untuk produksi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Dokumen Hukum & Organisasi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surat otorisasi</li>
          <li>Dokumen kepemilikan merek/merek dagang</li>
          <li>Bukti identitas & alamat</li>
          <li>Komitmen & deklarasi sesuai persyaratan BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Pipa Tanpa Sambungan di Bawah IS
          17875:2022
        </h2>

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
                  Uji Flaring
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Perataan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ukuran Butir
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Kekedapan Kebocoran
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengerjaan, Finishing, Penampilan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
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
          Tantangan Umum dalam Sertifikasi BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Kegagalan dalam uji komposisi kimia</strong>
            <br />
            Terjadi karena grade baja yang tidak konsisten.
          </li>
          <li>
            <strong>Kegagalan uji mekanis</strong>
            <br />
            Sering disebabkan oleh perlakuan panas yang salah.
          </li>
          <li>
            <strong>Penolakan NDT</strong>
            <br />
            Retak internal atau inklusi dapat menyebabkan kegagalan sampel.
          </li>
          <li>
            <strong>Kalibrasi tidak memadai</strong>
            <br />
            Menyebabkan data uji yang tidak akurat.
          </li>
          <li>
            <strong>Ketidakpatuhan STI</strong>
            <br />
            Pencatatan yang salah selama inspeksi menjadi alasan penolakan
            utama.
          </li>
          <li>
            <strong>Variasi dimensi</strong>
            <br />
            Inkonsistensi diameter atau ketebalan pipa menyebabkan kegagalan.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Pipa Tanpa Sambungan
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Persetujuan hukum untuk memproduksi/menjual di India</li>
          <li>Memastikan keselamatan dan keandalan</li>
          <li>Meningkatkan reputasi merek</li>
          <li>Penting untuk tender pemerintah</li>
          <li>Diperlukan oleh industri PSU dan swasta</li>
          <li>Melindungi konsumen dari produk yang tidak standar</li>
          <li>Meningkatkan daya saing ekspor</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Hukuman untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Di bawah Undang-Undang BIS, menjual pipa tanpa sambungan yang tidak
          bersertifikat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk</li>
          <li>Hukuman berat</li>
          <li>Penghentian manufaktur</li>
          <li>Pembatasan impor</li>
          <li>Pemblokiran merek</li>
          <li>Penuntutan pidana</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Harus Memperoleh Sertifikasi BIS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Produsen asing yang mengekspor ke India</li>
          <li>Pedagang (pemilik merek)</li>
          <li>Perusahaan OEM & teknik</li>
          <li>Importir dan grosir</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap unit manufaktur harus memperoleh lisensi terpisah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Pipa dan Tabung Tanpa Sambungan di bawah IS
          17875:2022 adalah persyaratan regulasi kritis yang memastikan bahwa
          pipa layanan bertekanan tinggi memenuhi standar keselamatan dan
          kualitas India yang ketat. Dari komposisi kimia hingga pengujian
          non-destruktif lanjutan, BIS memastikan bahwa setiap pipa yang
          bersertifikat tahan lama, bebas cacat, dan mampu berfungsi di bawah
          kondisi industri yang menuntut.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan panduan profesional, produsen dapat merampingkan perjalanan
          sertifikasi, meminimalkan penundaan, dan mencapai kepatuhan dengan
          lancar.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Sertifikasi BIS Pipa Tanpa Sambungan (Diperluas & Kaya SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Mengapa Sertifikasi BIS wajib untuk pipa tanpa sambungan?
              </strong>
              <br />
              Karena pipa tanpa sambungan digunakan dalam aplikasi bertekanan
              tinggi dan kritis keselamatan. Peraturan pemerintah memastikan
              hanya pipa berkualitas tinggi yang masuk ke pasar India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Standar mana yang berlaku untuk pipa tanpa sambungan?
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Berapa lama proses sertifikasi berlangsung?</strong>
              <br />
              Biasanya 40-60 hari untuk Produsen India dan sekitar 120 hari
              untuk produsen asing, tergantung pada beban pengujian dan
              penjadwalan inspeksi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Uji apa yang diperlukan?</strong>
              <br />
              Analisis kimia, uji tarik, kekerasan, hidrostatik, NDT, perataan,
              flaring, dan pemeriksaan dimensi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Bisakah perusahaan asing mengajukan sertifikasi BIS?
              </strong>
              <br />
              Ya, melalui skema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Bagaimana jika produk gagal dalam pengujian?</strong>
              <br />
              Harus diperbaiki dan diuji ulang; BIS tidak akan mengeluarkan
              lisensi sampai kepatuhan penuh tercapai.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Dokumen apa yang diperlukan?</strong>
              <br />
              Lisensi pabrik, daftar mesin, peralatan uji, gambar, dokumen QC,
              sertifikat bahan baku, dll.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Apakah penandaan ISI wajib?</strong>
              <br />
              Ya. Ilegal untuk menjual pipa tanpa sambungan tanpa menunjukkan
              tanda ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Apakah beberapa grade diizinkan dalam satu lisensi?
              </strong>
              <br />
              Ya, jika diproduksi menggunakan fasilitas dan proses yang sama
              (tergantung persetujuan BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Berapa lama lisensi BIS berlaku?</strong>
              <br />
              1-2 tahun, dapat diperpanjang tanpa batas.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Pipa & Tabung Tanpa Sambungan - IS 17875:2022 PDF"
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
