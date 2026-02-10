import FaqAuthorIndonesian from "@/components/common/FaqAuthor/FaqAuthorIndonesian";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationFibreRopesIndonesian = () => {
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

export default BISCertificationFibreRopesIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Tali Serat - Polietilen | IS 8674:2013 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Tali Serat - Polietilen - Panduan IS 8674:2013";
  const twitterTitle =
    "Lisensi BIS untuk Tali Serat - Polietilen | IS 8674:2013";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Tali Serat - Polietilen menurut IS 8674:2013. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Tali Serat - Polietilen sesuai IS 8674:2013. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Tali Serat - Polietilen menurut IS 8674:2013. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Tali Serat - Polietilen, Lisensi BIS untuk Tali Serat - Polietilen, IS 8674:2013, Sertifikasi BIS untuk Tali Serat - Polietilen";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tali-serat-polietilen-8674";
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
                    <Link to="/">Home</Link>
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
                    Sertifikat BIS untuk Tali Serat – Polietilen – IS
                    8674:2013
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
          Sertifikasi BIS Tali Serat – Polietilen – Panduan Lengkap IS
          8674:2013
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreRopesPolyethylene.png"
            title="Lisensi BIS untuk Tali Serat - Polietilen"
            alt="Sertifikat BIS untuk Tali Serat - Polietilen - IS 8674:2013 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tali serat polietilen banyak digunakan di India untuk operasi laut,
          perikanan, pelabuhan, pertanian, konstruksi, logistik, transportasi,
          dan kegiatan industri umum. Sifatnya yang ringan, rasio kekuatan-terhadap-berat
          tinggi, tahan kelembapan, bahan kimia, dan abrasi membuatnya ideal untuk
          lingkungan yang menuntut. Namun, ketika tali serat gagal di bawah beban
          karena kualitas buruk atau manufaktur di bawah standar, konsekuensinya
          bisa parah—mulai dari kerusakan peralatan hingga cedera serius dan
          bahkan kehilangan nyawa.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan keamanan, kualitas seragam, dan keandalan kinerja,
          Pemerintah India telah menjadikan Sertifikasi BIS untuk Tali Serat –
          Polietilen wajib menurut IS 8674:2013. Setiap produsen atau importir
          yang memasok tali serat polietilen di pasar India harus memperoleh
          Sertifikat BIS yang valid untuk Tali Serat – Polietilen. Tanpa
          sertifikasi ini, produk dianggap tidak sesuai dan dapat menghadapi
          sanksi hukum, penyitaan, atau larangan penjualan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman produk rinci ini ditujukan untuk produsen, importir, eksportir,
          pedagang, distributor, pemasok laut, kontraktor infrastruktur, dan
          penjual e-commerce. Ini menjelaskan kerangka lengkap Sertifikasi BIS
          untuk Tali Serat – Polietilen, termasuk persyaratan standar, prosedur
          pengujian, dokumentasi, biaya, timeline, dan tanggung jawab kepatuhan.
          Jika Anda berencana memperoleh Lisensi BIS untuk Tali Serat –
          Polietilen, panduan ini akan membantu Anda menjalani proses dengan
          jelas dan percaya diri.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kesesuaian produk yang
          dikelola oleh Bureau of Indian Standards (BIS), otoritas standar
          nasional India. Kepanjangan BIS adalah Bureau of Indian Standards,
          didirikan berdasarkan Undang-Undang BIS 2016.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Arti Sertifikat BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Arti Sertifikat BIS mengacu pada pengakuan resmi bahwa suatu produk
          memenuhi Standar India (IS) tertentu dan memenuhi persyaratan yang
          ditetapkan terkait keamanan, kekuatan, daya tahan, dan kinerja.
          Produk bersertifikat BIS menjalani pengujian di laboratorium yang
          diakui BIS serta penilaian melalui inspeksi pabrik dan audit kualitas.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tanda ISI dan Tanda Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produk yang disertifikasi di bawah BIS membawa tanda sertifikasi BIS,
          yang biasa disebut Tanda ISI, bersama dengan nomor lisensi unik.
          Tanda BIS meyakinkan pembeli, inspektur, dan otoritas pengawas bahwa
          produk mematuhi Standar BIS yang berlaku.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa BIS Ada
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS ada untuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi pengguna dari produk yang tidak aman dan di bawah standar</li>
          <li>Memastikan konsistensi dan keandalan dalam manufaktur</li>
          <li>Menegakkan peraturan pemerintah melalui pemberitahuan BIS</li>
          <li>Mempromosikan kepercayaan, kualitas, dan perdagangan yang adil di pasar India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Tali Serat – Polietilen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 8674:2013 – Standar India Dijelaskan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk produk ini adalah IS 8674:2013,
          berjudul &quot;Tali Serat — Polietilen — Spesifikasi&quot;. Standar
          ini mendefinisikan persyaratan untuk tali serat polietilen yang
          dimaksudkan untuk penggunaan umum dan aplikasi industri.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Konstruksi dan klasifikasi tali serat polietilen</li>
          <li>Persyaratan bahan baku dan karakteristik serat</li>
          <li>Diameter tali, kerapatan linier, dan toleransi</li>
          <li>Beban putus minimum dan persyaratan kekuatan</li>
          <li>Ketentuan penandaan, pelabelan, dan pengemasan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Keamanan, Kinerja & Tujuan Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 8674:2013 bertujuan memastikan bahwa tali serat polietilen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Memberikan kekuatan tarik yang konsisten</li>
          <li>Berkinerja andal di bawah beban statis dan dinamis</li>
          <li>Tahan kelembapan, pembusukan, dan paparan kimia</li>
          <li>Aman untuk operasi angkat, tarik, tambat, dan ikat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Mematuhi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Kepatuhan terhadap IS 8674:2013 wajib bagi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India tali serat polietilen</li>
          <li>Importir yang membawa tali polietilen ke India</li>
          <li>Produsen asing yang menjual melalui entitas India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Tali Serat – Polietilen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Risiko Keamanan Konsumen dan Pekerja
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tali serat polietilen sering digunakan dalam operasi penahan beban
          dan kritis keamanan. Tali di bawah standar dapat putus tiba-tiba,
          mengakibatkan kecelakaan, cedera, kerusakan peralatan, dan kerugian
          finansial.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Kepatuhan Pemerintah
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai pemberitahuan BIS dan peraturan pengendalian mutu, tali serat
          yang tercakup dalam IS 8674:2013 harus bersertifikat BIS sebelum
          dijual, dipasok, atau didistribusikan di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Implikasi Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual tali serat polietilen tanpa sertifikasi BIS dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan barang</li>
          <li>Denda moneter</li>
          <li>Pembatalan kontrak dan tender</li>
          <li>Tuntutan berdasarkan Undang-Undang BIS 2016</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Tali Serat – Polietilen meningkatkan penerimaan
          pasar, membangun kepercayaan pembeli, dan memungkinkan partisipasi
          dalam proyek pemerintah, BUMN, kelautan, dan infrastruktur.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Tali Serat – Polietilen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Keterapan & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah pertama adalah mengonfirmasi bahwa produk masuk dalam IS
          8674:2013, termasuk konstruksi tali, rentang diameter, dan aplikasi
          yang dimaksud.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi BIS Daring
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus mengajukan aplikasi BIS melalui portal daring BIS.
          Aplikasi meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produk dan model</li>
          <li>Informasi unit manufaktur</li>
          <li>Standar BIS yang berlaku</li>
          <li>Detail pengendalian mutu dan pengujian</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ini memulai proses pendaftaran sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Biaya & Struktur Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS umumnya meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pengujian produk</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi</li>
          <li>Biaya penandaan tahunan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS tergantung pada varian tali, rentang
          diameter, dan cakupan pengujian.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk (Pengujian Rinci sesuai Standar)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel tali serat polietilen diuji di laboratorium yang diakui BIS
          secara ketat sesuai IS 8674:2013.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi & Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pejabat BIS melakukan audit pabrik untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses dan pengendalian manufaktur</li>
          <li>Prosedur inspeksi bahan baku</li>
          <li>Pemeriksaan kualitas dalam proses</li>
          <li>Fasilitas pengujian dan kalibrasi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah pengujian dan inspeksi berhasil, BIS memberikan Lisensi
          Bureau of Indian Standards, mengizinkan penggunaan Tanda ISI pada
          tali serat polietilen bersertifikat.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah sertifikasi, pemegang lisensi harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan kualitas yang konsisten</li>
          <li>Melakukan pengujian rutin</li>
          <li>Mengizinkan inspeksi pengawasan</li>
          <li>Memperbarui lisensi BIS secara berkala</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup Lisensi BIS sesuai IS 8674:2013
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lisensi BIS berlaku untuk tali serat polietilen yang dimaksudkan untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Operasi laut dan perikanan</li>
          <li>Pelabuhan, pengiriman, dan logistik</li>
          <li>Pertanian dan penggunaan umum</li>
          <li>Aplikasi industri dan komersial</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ruang lingkup dibatasi secara ketat pada tali yang memenuhi
          spesifikasi IS 8674:2013.
        </p>

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
          <li>Daftar mesin dan peralatan pengujian</li>
          <li>Rencana pengendalian mutu</li>
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
          <li>Spesifikasi produk dan gambar</li>
          <li>Konstruksi tali dan detail material</li>
          <li>Data diameter dan beban putus</li>
          <li>Prosedur pengujian internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Laporan pengujian dari lab yang diakui BIS</li>
          <li>Perjanjian dan pernyataan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ini membentuk rangkaian lengkap DOKUMEN SERTIFIKASI BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 8674:2013
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian wajib meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pengukuran diameter dan kerapatan linier</li>
          <li>Pengujian beban putus dan kekuatan tarik</li>
          <li>Pengujian perpanjangan</li>
          <li>Verifikasi konstruksi dan lapisan</li>
          <li>Inspeksi visual dan kualitas hasil akhir</li>
          <li>Kepatuhan penandaan dan pelabelan</li>
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
          Kualitas Bahan Baku yang Tidak Konsisten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Solusi: Gunakan serat polietilen bermutu terkendali dan pemasok
          yang disetujui.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kegagalan Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Solusi: Lakukan pra-pengujian internal dan tingkatkan konsistensi
          proses.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kesalahan Dokumentasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Solusi: Siapkan dokumen yang akurat dan lengkap sebelum pengajuan ke BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS bagi Produsen & Importir
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan terhadap peraturan India</li>
          <li>Pengurangan risiko denda dan penyitaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kelayakan untuk kontrak pemerintah, BUMN, dan kelautan</li>
          <li>Penerimaan lebih baik dari pembeli industri</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Merek
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepercayaan melalui tanda sertifikasi BIS</li>
          <li>Kredibilitas merek yang ditingkatkan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Akses ke pasar domestik yang diatur dan berorientasi ekspor</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi atas Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kegagalan mematuhi persyaratan BIS dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter berat</li>
          <li>Penyitaan produk yang tidak sesuai</li>
          <li>Pembatasan impor dan penjualan</li>
          <li>Tuntutan hukum</li>
          <li>Larangan pasar permanen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Tali Serat – Polietilen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing</li>
          <li>Pedagang dan distributor</li>
          <li>Penjual e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap entitas yang menempatkan tali serat polietilen di pasar India
          harus memastikan kepatuhan BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Tali Serat – Polietilen menurut IS
          8674:2013 adalah kebutuhan hukum dan keunggulan strategis bagi
          bisnis yang beroperasi di India. Sertifikasi BIS untuk Tali Serat –
          Polietilen memastikan keamanan produk, kekuatan, dan keandalan sambil
          melindungi pengguna dan memperkuat kredibilitas merek.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen dan importir yang memperoleh Lisensi BIS yang valid untuk
          Tali Serat – Polietilen dapat dengan percaya diri mengakses pasar
          yang diatur, berpartisipasi dalam kontrak bernilai tinggi, dan
          menghindari risiko hukum. Dengan persiapan yang tepat, dokumentasi
          yang akurat, dan bimbingan ahli, proses sertifikasi BIS menjadi
          lancar, efisien, dan sangat bermanfaat untuk pertumbuhan jangka panjang.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Tali Serat – Polietilen
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T1. Apakah sertifikasi BIS wajib untuk tali serat polietilen di India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, sertifikasi BIS menurut IS 8674:2013 wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T2. Apa kepanjangan BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T3. Apakah tali polietilen bisa dijual tanpa sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak, menjual tali yang tidak bersertifikat ilegal di India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T4. Berapa biaya sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tergantung varian produk dan cakupan pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T5. Berapa lama proses sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 6–10 minggu.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T6. Apakah tanda ISI wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, penandaan ISI wajib setelah sertifikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T7. Apakah beberapa diameter tali bisa dicakup dalam satu lisensi?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, tunduk pada kepatuhan dan cakupan pengujian.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T8. Apakah inspeksi pabrik wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS melakukan audit pabrik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T9. Apakah startup bisa mengajukan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, jika fasilitas manufaktur mematuhi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T10. Apakah sertifikasi BIS perlu diperbarui?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, pembaruan berkala wajib.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T11. Apa yang terjadi jika pengujian produk gagal?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tindakan korektif dan pengujian ulang diperlukan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T12. Apakah lab yang diakui BIS wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, hanya lab yang disetujui BIS yang diterima.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T13. Apakah produsen asing bisa mengajukan langsung?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T14. Apakah tali pancing tercakup dalam standar ini?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, jika memenuhi IS 8674:2013.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              T15. Apa arti sertifikasi BIS bagi pembeli?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Menjamin keamanan, kekuatan, dan kualitas yang konsisten.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />
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
              Tanda ISI (BIS) untuk Produsen India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
