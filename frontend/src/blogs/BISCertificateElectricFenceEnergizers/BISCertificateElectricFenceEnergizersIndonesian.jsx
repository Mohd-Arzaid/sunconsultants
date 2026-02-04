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

const BISCertificateElectricFenceEnergizersIndonesian = () => {
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

export default BISCertificateElectricFenceEnergizersIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Energizer Pagar Listrik | IS 302-2-76:1999 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Energizer Pagar Listrik – Panduan IS 302-2-76:1999";
  const twitterTitle =
    "Lisensi BIS untuk Energizer Pagar Listrik | IS 302-2-76:1999";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Energizer Pagar Listrik sesuai IS 302-2-76:1999. Proses, dokumen, pengujian, biaya & jadwal untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Energizer Pagar Listrik sesuai IS 302-2-76:1999. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Energizer Pagar Listrik sesuai IS 302-2-76:1999. Pelajari proses BIS, dokumen, pengujian, biaya & jadwal di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Energizer Pagar Listrik, Lisensi BIS untuk Energizer Pagar Listrik, IS 302-2-76:1999, Sertifikasi BIS untuk Energizer Pagar Listrik";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/energizer-pagar-listrik-is-302-2-76";
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
                    Sertifikat BIS untuk Energizer Pagar Listrik – IS
                    302-2-76:1999
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
          Sertifikasi BIS Energizer Pagar Listrik – Panduan Lengkap IS
          302-2-76:1999
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforElectricFenceEnergizers.png"
            title="BIS License for Electric Fence Energizers"
            alt="BIS Certificate for Electric Fence Energizers - IS 302-2-76:1999 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Permintaan untuk energizer pagar listrik telah tumbuh pesat di seluruh
          India karena peningkatan fokus pada perlindungan pertanian, manajemen
          ternak, keamanan perimeter, dan pengendalian satwa liar. Perangkat ini
          memainkan peran krusial dalam melindungi tanaman, hewan, dan properti
          dengan memberikan pulsa listrik terkontrol melalui sistem pagar.
          Namun, karena energizer pagar listrik secara langsung melibatkan output
          listrik, risiko kontak manusia, dan bahaya kebakaran, keamanan dan
          kepatuhan regulasi menjadi tidak dapat dinegosiasikan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Di India, energizer pagar listrik berada dalam lingkup sertifikasi BIS
          wajib sesuai IS 302-2-76:1999. Setiap produsen atau importir yang
          berniat menjual energizer pagar listrik di pasar India harus memperoleh
          Sertifikat BIS untuk Energizer Pagar Listrik sebelum komersialisasi.
          Tanpa persetujuan ini, produk dianggap tidak patuh dan ilegal untuk
          dijual.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini dirancang untuk produsen, importir, merek
          asing, startup, distributor, dan penjual e-commerce yang ingin
          kejelasan tentang Sertifikasi BIS Energizer Pagar Listrik, termasuk
          persyaratan hukum, pengujian, dokumentasi, biaya, jadwal, dan
          kewajiban kepatuhan. Jika Anda berencana mengajukan Lisensi BIS /
          Lisensi BIS untuk Energizer Pagar Listrik, halaman ini akan memandu
          Anda melalui setiap langkah dengan cara yang jelas, praktis, dan
          berfokus pada kepatuhan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kesesuaian yang dioperasikan oleh
          Bureau of Indian Standards (BIS), badan standar nasional India.
          BIS adalah singkatan dari Bureau of Indian Standards, didirikan
          berdasarkan Undang-Undang BIS, 2016 untuk memastikan kualitas, keamanan,
          keandalan, dan konsistensi produk yang dijual di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikat BIS menandakan bahwa produk sesuai dengan Standar India (IS)
          yang berlaku dan memenuhi tolok ukur keamanan, kinerja, dan kualitas
          yang ditentukan. Ini memberikan jaminan kepada konsumen dan regulator
          bahwa produk telah diuji dan diverifikasi oleh sistem yang diakui BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mark ISI dan Mark BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk produk listrik seperti energizer pagar listrik, sertifikasi BIS
          diberikan di bawah Skema Mark ISI. Mark sertifikasi BIS (mark ISI)
          yang ditampilkan pada produk menunjukkan kepatuhan terhadap standar BIS
          yang relevan. Menjual produk bertanda ISI tanpa lisensi BIS yang valid
          adalah pelanggaran yang dapat dipidana.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mengapa BIS Ada
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tujuan utama BIS adalah untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi keselamatan konsumen</li>
          <li>Mencegah produk substandar dan tidak aman</li>
          <li>Menyelaraskan manufaktur India dengan tolok ukur global</li>
          <li>Menegakkan kepatuhan wajib melalui notifikasi BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Lingkup IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini menentukan persyaratan keamanan khusus untuk energizer
          pagar listrik yang dimaksudkan untuk digunakan dengan sistem pagar listrik untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pagar pertanian</li>
          <li>Kontrol ternak</li>
          <li>Pencegahan satwa liar</li>
          <li>Keamanan perimeter</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ini mencakup energizer yang ditenagai oleh:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Listrik PLN</li>
          <li>Sistem bertenaga baterai</li>
          <li>Kombinasi sumber PLN dan baterai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Keamanan dan Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini dirancang untuk mengatasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Perlindungan terhadap sengatan listrik</li>
          <li>Pembatasan energi output</li>
          <li>Kontrol durasi dan pengulangan pulsa</li>
          <li>Jarak isolasi dan creepage</li>
          <li>Risiko kebakaran dan kepanasan</li>
          <li>Kekuatan mekanis dan keamanan enklosur</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Patuh
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kepatuhan terhadap IS 302-2-76:1999 wajib untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir energizer buatan luar negeri</li>
          <li>Produsen asing yang menjual di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Energizer Pagar Listrik
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Keselamatan Konsumen dan Hewan
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Energizer pagar listrik menghasilkan pulsa tegangan tinggi. Desain yang
          tidak tepat atau output yang berlebihan dapat menyebabkan cedera serius,
          bahaya kebakaran, atau kecelakaan fatal. Sertifikasi BIS memastikan energi
          output tetap dalam batas aman.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Persyaratan Hukum di India
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Berdasarkan notifikasi BIS dan Undang-Undang BIS, menjual peralatan
          listrik tanpa sertifikasi adalah ilegal. Produk tanpa sertifikasi BIS
          dapat disita, dilarang, atau ditarik kembali.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Kepatuhan Regulasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Otoritas seperti bea cukai, tim pengawasan pasar, dan platform
          e-commerce menuntut lisensi BIS yang valid untuk penayangan dan
          pembersihan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS India membangun kepercayaan, meningkatkan kredibilitas
          merek, dan memungkinkan masuk yang lancar ke ritel terorganisir dan
          pasar institusional.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Energizer Pagar Listrik
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aplikabilitas & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah pertama adalah mengkonfirmasi klasifikasi produk dan mengidentifikasi IS
          302-2-76:1999 sebagai standar BIS yang berlaku. Desain produk, sumber
          daya, dan aplikasi harus selaras dengan lingkup standar.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus mengajukan aplikasi BIS secara online melalui portal Manak
          Online. Aplikasi ini mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produk</li>
          <li>Informasi pabrik</li>
          <li>Pemilihan standar yang berlaku</li>
          <li>Komitmen laporan pengujian</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah ini secara resmi memulai proses pendaftaran BIS / sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Biaya & Struktur Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS biasanya mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pengujian (tergantung lab)</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi</li>
          <li>Biaya penandaan tahunan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS tergantung pada kompleksitas produk,
          jumlah model, dan persyaratan pengujian.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel produk diuji di laboratorium yang diakui BIS sesuai IS
          302-2-76:1999. Pengujian memastikan kepatuhan terhadap semua parameter
          keamanan dan kinerja.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi & Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pejabat BIS melakukan audit pabrik untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Sistem kontrol kualitas</li>
          <li>Fasilitas pengujian internal</li>
          <li>Konsistensi dengan dokumen yang diajukan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Mark ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah pengujian dan inspeksi berhasil, BIS memberikan Lisensi BIS untuk
          Energizer Pagar Listrik, memungkinkan penggunaan mark ISI dengan nomor
          CM/L unik.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pemegang lisensi harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melakukan pengujian rutin</li>
          <li>Mempertahankan catatan produksi</li>
          <li>Memungkinkan audit pengawasan</li>
          <li>Memperbarui lisensi tepat waktu</li>
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
          <li>Bukti registrasi pabrik</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin</li>
          <li>Rencana kontrol kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat inkorporasi perusahaan</li>
          <li>Registrasi GST</li>
          <li>Otorisasi merek dagang (jika berlaku)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lembar spesifikasi produk</li>
          <li>Diagram sirkuit</li>
          <li>Manual pengguna dan instruksi keamanan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Laporan pengujian dari lab yang diakui BIS</li>
          <li>Surat otorisasi</li>
          <li>Pernyataan dan deklarasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ini membentuk set lengkap DOKUMEN SERTIFIKASI BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 302-2-76:1999
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian wajib meliputi:
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
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Perlindungan Terhadap Sengatan Listrik
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arus bocor dan kekuatan listrik pada suhu operasi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rating
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Input Daya dan Arus
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  11
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pemanasan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arus bocor dan Kekuatan listrik pada Suhu Operasi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arus bocor dan Kekuatan listrik
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Semua pengujian harus dilakukan hanya di laboratorium yang diakui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Kegagalan Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>Penyebab:</strong> Desain tidak patuh atau parameter output yang salah
          <br />
          <strong>Solusi:</strong> Pengujian pra-kepatuhan dan tinjauan desain
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Kesalahan Dokumentasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>Penyebab:</strong> Pengajuan yang tidak lengkap atau tidak konsisten
          <br />
          <strong>Solusi:</strong> Verifikasi dokumen yang dipimpin ahli
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Keterlambatan Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Penyebab:</strong> Sistem kualitas yang tidak siap
          <br />
          <strong>Solusi:</strong> Kesiapan audit dan inspeksi simulasi
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Produsen & Importir
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Otorisasi hukum untuk menjual di India</li>
          <li>Akses ke pembeli pemerintah dan institusional</li>
          <li>Kepercayaan konsumen yang ditingkatkan</li>
          <li>Risiko kewajiban produk yang berkurang</li>
          <li>Ekspansi ke e-commerce dan rantai ritel</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Kepatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual energizer pagar listrik tanpa sertifikasi BIS dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter yang berat</li>
          <li>Sitaan barang</li>
          <li>Pembatalan pembersihan impor</li>
          <li>Penuntutan pidana berdasarkan Undang-Undang BIS</li>
          <li>Larangan pasar permanen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Energizer Pagar Listrik?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing</li>
          <li>Pedagang dan distributor</li>
          <li>Penjual marketplace online</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Siapa pun yang terlibat dalam menempatkan produk di pasar India harus
          memastikan kepatuhan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Konsultasi Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan konsultasi sertifikasi BIS end-to-end, termasuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifikasi standar dan pemeriksaan kelayakan</li>
          <li>Pengajuan aplikasi BIS</li>
          <li>Koordinasi lab dan dukungan pengujian</li>
          <li>Persiapan audit pabrik</li>
          <li>Manajemen kepatuhan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Keahlian kami memastikan persetujuan lebih cepat, nol penolakan, dan ketenangan
          regulasi yang lengkap.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Energizer Pagar Listrik sesuai IS
          302-2-76:1999 bukan hanya formalitas regulasi—ini adalah langkah krusial
          untuk memastikan keselamatan, kepatuhan hukum, dan kesuksesan pasar
          jangka panjang. Dengan penegakan ketat notifikasi BIS dan peningkatan
          pengawasan pada produk listrik, produsen dan importir harus
          memprioritaskan Sertifikasi BIS Energizer Pagar Listrik untuk menghindari
          penalti dan membangun kepercayaan konsumen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika Anda berencana mengajukan Lisensi BIS / Lisensi BIS untuk
          Energizer Pagar Listrik, bimbingan profesional secara signifikan
          dapat mengurangi jadwal, biaya, dan risiko kepatuhan. Tetap patuh, tetap
          kompetitif, dan pastikan produk Anda memenuhi standar keselamatan
          tertinggi India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Energizer Pagar Listrik
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q1. Apakah sertifikasi BIS wajib untuk energizer pagar listrik
                di India?
              </strong>
              <br />
              Ya, sertifikasi BIS sesuai IS 302-2-76:1999 wajib.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q2. Apa bentuk lengkap sertifikat BIS?</strong>
              <br />
              Sertifikat Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q3. Bisakah saya mengimpor energizer pagar listrik tanpa lisensi BIS?
              </strong>
              <br />
              Tidak, impor tanpa sertifikasi BIS dilarang.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q4. Berapa biaya lisensi BIS?</strong>
              <br />
              Biaya bervariasi berdasarkan pengujian, ukuran pabrik, dan jumlah model.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q5. Berapa lama proses sertifikasi BIS memakan waktu?
              </strong>
              <br />
              Biasanya 6-10 minggu jika dokumentasi dan pengujian lengkap.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q6. Apakah mark ISI wajib?</strong>
              <br />
              Ya, penandaan ISI wajib setelah sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q7. Bisakah startup mengajukan sertifikasi BIS?</strong>
              <br />
              Ya, startup dapat mengajukan jika setup manufaktur patuh.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q8. Apakah sertifikasi BIS diperlukan untuk energizer
                bertenaga baterai?
              </strong>
              <br />
              Ya, sumber daya tidak membebaskan dari sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q9. Bisakah satu lisensi mencakup beberapa model?</strong>
              <br />
              Ya, jika model secara teknis serupa.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q10. Apa yang terjadi jika produk saya gagal dalam pengujian?</strong>
              <br />
              Modifikasi desain dan pengujian ulang diperlukan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q11. Apakah sertifikasi BIS berlaku selamanya?</strong>
              <br />
              Tidak, harus diperbarui secara berkala.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q12. Apakah audit BIS wajib setelah sertifikasi?
              </strong>
              <br />
              Ya, audit pengawasan dilakukan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q13. Bisakah produsen asing mengajukan langsung?</strong>
              <br />
              Ya, melalui Wakil India Berwenang (AIR).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>Q14. Apakah proses aplikasi BIS online tersedia?</strong>
              <br />
              Ya, aplikasi BIS diajukan secara online.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                Q15. Apa arti sertifikat BIS bagi konsumen?
              </strong>
              <br />
              Ini menjamin keselamatan, kualitas, dan kepatuhan regulasi.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-302-2-76-Sun-Certifications-India.pdf"
            title="BIS Certificate for Electric Fence Energizers - IS 302-2-76:1999 PDF"
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
              Mark BIS (Lisensi ISI) untuk Manufaktur Asing
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
              Sertifikat EPR
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
              Sertifikat LMPC
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
              Mark ISI (BIS) untuk Manufaktur India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
