import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
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
import FooterEng from "@/components/manual/Footer/FooterEng";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificationCombinationSideCuttingPliersIndonesian = () => {
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




export default BISCertificationCombinationSideCuttingPliersIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Tang Kombinasi Pemotong Samping | IS 3650:1981 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping – Panduan IS 3650:1981";
  const twitterTitle =
    "Lisensi BIS untuk Tang Kombinasi Pemotong Samping | IS 3650:1981";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Tang Kombinasi Pemotong Samping sesuai IS 3650:1981. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping sesuai IS 3650:1981. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Tang Kombinasi Pemotong Samping sesuai IS 3650:1981. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Tang Kombinasi Pemotong Samping, Lisensi BIS untuk Tang Kombinasi Pemotong Samping, IS 3650:1981, Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tang-kombinasi-pemotong-samping-is-3650";
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
                    Sertifikat BIS untuk Tang Kombinasi Pemotong Samping – IS
                    3650:1981
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
          Sertifikasi BIS Tang Kombinasi Pemotong Samping – Panduan Lengkap IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="Lisensi BIS untuk Tang Kombinasi Pemotong Samping"
            alt="Sertifikat BIS untuk Tang Kombinasi Pemotong Samping - IS 3650:1981 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tang Kombinasi Pemotong Samping adalah salah satu alat tangan yang paling
          sering digunakan dalam pekerjaan listrik, perawatan mekanik, konstruksi,
          unit manufaktur, bengkel, servis otomotif, dan kegiatan perbaikan rumah tangga.
          Alat ini dirancang untuk melakukan berbagai fungsi seperti mencengkeram,
          menekuk, memuntir, dan memotong kabel. Karena sering digunakan untuk memotong
          kabel logam, konduktor listrik, dan komponen kecil, tang berkualitas rendah
          dapat menyebabkan kerusakan alat, risiko sengatan listrik, cedera tangan,
          dan kecelakaan kerja yang serius.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan keamanan, daya tahan, dan kualitas yang seragam, Pemerintah
          India mewajibkan kepatuhan terhadap Standar India untuk alat tangan.
          Memperoleh Sertifikat BIS untuk Tang Kombinasi Pemotong Samping sesuai
          IS 3650:1981 adalah persyaratan hukum dan kualitas yang kritis bagi
          produsen dan importir yang menjual alat ini di India. Sertifikasi BIS
          yang valid untuk Tang Kombinasi Pemotong Samping menegaskan bahwa produk
          telah diuji kekuatan mekanik, efisiensi pemotongan, kekerasan material,
          dan kinerja keamanan keseluruhan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman produk rinci ini dibuat untuk produsen, produsen asing, importir,
          pedagang, distributor, merek perangkat keras, penjual e-commerce, dan
          profesional kepatuhan yang ingin pemahaman lengkap tentang Lisensi BIS
          untuk Tang Kombinasi Pemotong Samping, termasuk proses sertifikasi BIS
          di India, persyaratan pengujian, dokumentasi, biaya, timeline, sanksi,
          dan manfaat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kesesuaian produk yang diatur
          oleh Bureau of Indian Standards, yang merupakan otoritas nasional India
          untuk standardisasi, sertifikasi, dan jaminan kualitas.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Arti Sertifikat BIS mengacu pada persetujuan resmi yang dikeluarkan oleh BIS
          yang menegaskan bahwa suatu produk memenuhi Standar India yang berlaku (IS)
          dan diproduksi di bawah sistem kualitas yang terkendali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tujuan utama sertifikasi BIS adalah:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi konsumen dari produk yang tidak aman</li>
          <li>Memastikan kualitas produk yang konsisten</li>
          <li>Mendukung penegakan peraturan</li>
          <li>Mendorong standardisasi di industri India</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda sertifikasi BIS, yang biasa dikenal sebagai Tanda ISI, adalah
          simbol kepercayaan dan kepatuhan. Untuk tang kombinasi pemotong samping,
          Tanda ISI menunjukkan bahwa:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Alat memenuhi persyaratan IS 3650:1981</li>
          <li>Kinerja mekanik dan pemotongan telah diverifikasi</li>
          <li>Produk disetujui secara hukum untuk dijual di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Tang Kombinasi Pemotong Samping
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Spesifikasi untuk Tang Kombinasi
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk produk ini adalah IS 3650:1981, yang
          menentukan persyaratan untuk tang kombinasi dengan mata pemotong samping
          yang digunakan untuk aplikasi mencengkeram dan memotong.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tang kombinasi dengan mata pemotong samping</li>
          <li>Persyaratan dimensi, bentuk, dan penyelesaian</li>
          <li>Kualitas material dan perlakuan panas</li>
          <li>Kekuatan mekanik dan kinerja pemotongan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Keamanan, Kinerja & Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 dirancang untuk memastikan bahwa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tang memiliki kapasitas pemotongan yang cukup</li>
          <li>Rahang dan mata pemotong tidak pecah atau berubah bentuk</li>
          <li>Pegangan memberikan cengkeraman aman dan insulasi jika berlaku</li>
          <li>Alat berkinerja andal dalam kondisi kerja normal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Mematuhi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen tang kombinasi pemotong samping di India</li>
          <li>Importir dan distributor</li>
          <li>Produsen asing yang memasok ke pasar India</li>
          <li>Merek yang menjual tang dengan label pribadi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Tang Kombinasi Pemotong Samping
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risiko Keamanan Konsumen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tang di bawah standar dapat menyebabkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kerusakan mendadak saat memotong</li>
          <li>Terpeleset dan cedera tangan</li>
          <li>Bahaya sengatan listrik dalam aplikasi listrik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pemerintah dan Regulasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai standar BIS dan pemberitahuan BIS, alat tangan seperti tang
          kombinasi yang tercakup dalam IS 3650:1981 harus memenuhi persyaratan
          sertifikasi BIS sebelum dijual di India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implikasi Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual atau mengimpor tang yang tidak bersertifikat dapat mengakibatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penyitaan produk oleh pihak berwenang</li>
          <li>Denda keuangan</li>
          <li>Pembatalan lisensi perdagangan</li>
          <li>Tuntutan hukum berdasarkan Undang-Undang BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lisensi BIS untuk Tang Kombinasi Pemotong Samping membantu merek:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Membangun kepercayaan dengan pembeli dan kontraktor</li>
          <li>Memenuhi syarat untuk tender pemerintah dan BUMN</li>
          <li>Bersaing dengan merek perangkat keras mapan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Tang Kombinasi Pemotong Samping
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Keterapan & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Langkah pertama adalah memastikan bahwa produk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Termasuk dalam tang kombinasi pemotong samping</li>
          <li>Tercakup oleh IS 3650:1981</li>
          <li>Sesuai ruang lingkup standar dalam hal ukuran dan penggunaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi Online BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mendaftar di portal BIS</li>
          <li>Memilih IS 3650:1981 di bawah standar produk</li>
          <li>Mengisi formulir aplikasi BIS</li>
          <li>Mengunggah semua dokumen yang diperlukan</li>
          <li>Membayar biaya yang berlaku</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tahap ini biasa disebut sebagai BIS apply online atau pendaftaran sertifikat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Biaya & Struktur Biaya untuk Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Biaya sertifikasi BIS umumnya meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi dan pemrosesan</li>
          <li>Biaya pengujian produk</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi dan penandaan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS tergantung pada:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Jumlah varian</li>
          <li>Kompleksitas pengujian</li>
          <li>Lokasi pabrik</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk (Sesuai IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sampel diuji di laboratorium yang diakui BIS untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekerasan mata pemotong</li>
          <li>Kinerja pemotongan</li>
          <li>Kekuatan mekanik</li>
          <li>Akurasi dimensi</li>
          <li>Penyelesaian permukaan dan pengerjaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi & Audit Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS melakukan audit pabrik untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proses manufaktur</li>
          <li>Operasi perlakuan panas dan penyelesaian</li>
          <li>Sistem pengendalian kualitas</li>
          <li>Fasilitas pengujian dan inspeksi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah pengujian dan inspeksi berhasil:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS menerbitkan Lisensi Bureau of Indian Standards</li>
          <li>
            Produsen diizinkan menggunakan Tanda ISI pada tang yang disetujui
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan pasca-persetujuan meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspeksi pengawasan</li>
          <li>Pengujian sampel pasar</li>
          <li>Perpanjangan lisensi tepat waktu</li>
          <li>Kepatuhan berkelanjutan terhadap IS 3650:1981</li>
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
          <li>Diagram alur proses manufaktur</li>
          <li>Daftar mesin dan peralatan pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat pendirian perusahaan</li>
          <li>Pendaftaran GST</li>
          <li>Otorisasi merek dagang (jika berlaku)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar dan spesifikasi produk</li>
          <li>Detail bahan baku</li>
          <li>Rencana perlakuan panas dan QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS</li>
          <li>Detail permintaan pengujian</li>
          <li>Deklarasi dan perjanjian</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Secara kolektif dikenal sebagai DOKUMEN SERTIFIKAT BIS atau DOKUMEN
          SERTIFIKASI BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 3650:1981
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
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Manufaktur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengerjaan dan penyelesaian
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pengawetan dan pengepakan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekerasan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Insulasi (kecuali uji insulasi)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji insulasi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Pemotongan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Cengkeraman Tabung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Kejut
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Torsi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Beban Pegangan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Tekuk
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
          Masalah Umum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kegagalan dalam uji kekerasan atau pemotongan</li>
          <li>Perlakuan panas yang tidak tepat</li>
          <li>Penyelesaian permukaan yang buruk</li>
          <li>Dokumentasi tidak lengkap</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Praktik Terbaik
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melakukan pra-pengujian internal</li>
          <li>Mengikuti prosedur perlakuan panas yang benar</li>
          <li>Memelihara catatan kualitas per batch</li>
          <li>Menggunakan dukungan konsultan BIS ahli</li>
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
          <li>Kepatuhan penuh terhadap peraturan India</li>
          <li>Perlindungan dari denda dan penyitaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diterima oleh distributor dan kontraktor</li>
          <li>Memenuhi syarat untuk pesanan grosir dan institusional</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Merek
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tanda ISI meningkatkan kredibilitas merek</li>
          <li>Diferensiasi dari pemasok tidak terorganisir</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Masuk ke rantai ritel perangkat keras terorganisir</li>
          <li>Penerimaan meningkat di bisnis berorientasi ekspor</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi atas Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ketidakpatuhan dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter berat</li>
          <li>Penyitaan produk</li>
          <li>Gangguan bisnis</li>
          <li>Tindakan hukum berdasarkan Undang-Undang BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Memerlukan Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing (dengan Perwakilan India yang Berwenang)</li>
          <li>Pedagang yang menjual dengan merek sendiri</li>
          <li>Penjual e-commerce yang mencantumkan tang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Memperoleh Sertifikat BIS untuk Tang Kombinasi Pemotong Samping sesuai
          IS 3650:1981 adalah persyaratan hukum dan kualitas yang kritis untuk menjual
          alat ini di India. Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping
          memastikan keamanan produk, kinerja konsisten, dan kepatuhan regulasi,
          sementara Lisensi BIS untuk Tang Kombinasi Pemotong Samping memperkuat
          kredibilitas merek dan penerimaan pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen, importir, dan penjual, kepatuhan tepat waktu tidak hanya
          menghindari sanksi tetapi juga membuka pintu ke pasar yang lebih besar
          dan pertumbuhan bisnis jangka panjang. Dengan bimbingan ahli, proses
          sertifikasi BIS menjadi lebih lancar, lebih cepat, dan sepenuhnya sesuai
          dengan standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Tang Kombinasi Pemotong Samping
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Apakah sertifikasi BIS wajib untuk tang kombinasi pemotong samping?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, kepatuhan terhadap IS 3650:1981 wajib di India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Apa kepanjangan dari sertifikat BIS?
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
              Biasanya 30–60 hari kerja.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Berapa biaya sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biaya tergantung pada ruang lingkup pengujian dan varian produk.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Apakah importir bisa mengajukan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, dengan otorisasi yang tepat dari produsen.
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
              Q7. Apakah produsen asing bisa mendapatkan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Pengujian apa yang diperlukan sesuai IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Uji kekerasan, kinerja pemotongan, kekuatan, dan dimensi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Apakah inspeksi pabrik wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS melakukan audit pabrik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Apakah beberapa ukuran bisa dicakup dalam satu lisensi?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, tergantung pengujian dan persetujuan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Apa yang terjadi jika tang tidak bersertifikat dijual?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sanksi, penyitaan, dan tindakan hukum dapat terjadi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Apakah BIS apply online wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, aplikasi hanya diajukan secara online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Apakah perpanjangan diperlukan untuk lisensi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, lisensi harus diperpanjang secara berkala.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Apakah konsultan dapat mengurangi penundaan persetujuan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, konsultan profesional membantu menghindari kesalahan dan penolakan.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Tang Kombinasi Pemotong Samping - IS 3650:1981 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={2} />
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
              Tanda BIS (Lisensi ISI) untuk Produksi Asing
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
              Sertifikasi Pendaftaran CDSCO
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
              Pendaftaran BIS (CRS)
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
              Sertifikat Pendaftaran BIS
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
