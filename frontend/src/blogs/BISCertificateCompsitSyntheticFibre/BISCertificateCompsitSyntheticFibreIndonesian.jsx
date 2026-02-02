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

const BISCertificateCompsitSyntheticFibreIndonesian = () => {
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

export default BISCertificateCompsitSyntheticFibreIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Tali Serat Sintetik Komposit | IS 14928:2001 Lisensi BIS";
  const ogTitle =
    "Sertifikasi BIS untuk Tali Serat Sintetik Komposit – Panduan IS 14928:2001";
  const twitterTitle =
    "Lisensi BIS untuk Tali Serat Sintetik Komposit | IS 14928:2001";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Tali Serat Sintetik Komposit sesuai IS 14928:2001. Proses, dokumen, pengujian, biaya & jadwal untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap untuk Sertifikasi BIS untuk Tali Serat Sintetik Komposit sesuai IS 14928:2001. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Tali Serat Sintetik Komposit sesuai IS 14928:2001. Pelajari proses BIS, dokumen, pengujian, biaya & jadwal di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Tali Serat Sintetik Komposit, Lisensi BIS untuk Tali Serat Sintetik Komposit, IS 14928:2001, Sertifikasi BIS untuk Tali Serat Sintetik Komposit";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tali-serat-sintetik-komposit-is-14928";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Kepala Operasional di Sun Certification India";

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
                    Sertifikat BIS untuk Tali Serat Sintetik Komposit – IS
                    14928:2001
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
          Sertifikasi BIS Tali Serat Sintetik Komposit – Panduan Lengkap untuk
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="Lisensi BIS untuk Tali Serat Sintetik Komposit"
            alt="Sertifikat BIS untuk Tali Serat Sintetik Komposit - IS 14928:2001 Sertifikasi BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tali serat sintetik komposit banyak digunakan dalam operasi maritim,
          pelabuhan, instalasi lepas pantai, perikanan, pelayaran, konstruksi,
          pertanian, dan penanganan material berat. Tali ini dirancang dengan menggabungkan
          dua atau lebih serat sintetik—seperti polyester, polypropylene, nylon, atau
          serat buatan lainnya—untuk memberikan keseimbangan kekuatan, fleksibilitas,
          ketahanan abrasi, daya apung, dan daya tahan. Karena tali serat sintetik
          komposit sering digunakan dalam aplikasi penahan beban, penarikan, tambat,
          pengangkatan, dan aplikasi kritis keselamatan, bahkan cacat kualitas minor
          dapat menyebabkan kecelakaan serius, kerusakan peralatan, atau kegagalan operasional.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengendalikan risiko ini dan memastikan kualitas yang konsisten,
          Pemerintah India mewajibkan Sertifikasi BIS untuk Tali Serat Sintetik Komposit
          sesuai Standar India yang berlaku IS 14928:2001. Sertifikat BIS yang valid
          untuk Tali Serat Sintetik Komposit adalah persyaratan hukum bagi produsen
          dan importir sebelum produk tersebut dapat diproduksi, dijual, didistribusikan,
          atau diimpor ke pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Halaman ini berfungsi sebagai panduan lengkap yang berfokus pada kepatuhan
          yang menjelaskan Sertifikasi BIS untuk Tali Serat Sintetik Komposit, termasuk
          ruang lingkup IS 14928:2001, tujuan keselamatan, persyaratan pengujian,
          dokumentasi, pertimbangan biaya, dan proses sertifikasi langkah demi langkah.
          Ini dirancang untuk produsen, importir, produsen asing, pedagang, dan penjual
          e-commerce yang ingin pemahaman yang jelas tentang cara mendapatkan Lisensi
          BIS untuk Tali Serat Sintetik Komposit di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah sistem penilaian kepatuhan produk yang dioperasikan
          oleh Bureau of Indian Standards (BIS), yang berfungsi sesuai Undang-Undang
          BIS tahun 2016. BIS bertanggung jawab untuk mengembangkan Standar India,
          mensertifikasi produk, dan memastikan barang yang dijual di India memenuhi
          standar keselamatan, kualitas, dan kinerja yang ditetapkan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Arti Sertifikat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Arti Sertifikat BIS mengacu pada persetujuan formal yang diberikan oleh BIS
          yang mengkonfirmasi bahwa produk sesuai dengan Standar India yang relevan.
          Setelah tersertifikasi, produsen berhak menggunakan Tanda Sertifikasi BIS,
          yang umumnya dikenal sebagai Tanda ISI, pada produk dan kemasan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penjelasan Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tanda ISI menunjukkan bahwa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produk telah diuji di laboratorium yang diakui BIS</li>
          <li>Fasilitas produksi telah dinilai oleh pejabat BIS</li>
          <li>
            Mekanisme kontrol kualitas dan pengawasan berkelanjutan telah ada
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mengapa BIS Ada
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS ada untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Melindungi keselamatan konsumen dan pekerja</li>
          <li>Mencegah peredaran produk substandar</li>
          <li>Memastikan keseragaman dan keandalan barang industri</li>
          <li>Memperkuat penegakan peraturan dan perdagangan yang adil</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk tali serat sintetik komposit—yang sering digunakan dalam kondisi berbahaya
          dan beban tinggi—sertifikasi BIS memainkan peran penting dalam pencegahan
          kecelakaan dan jaminan kualitas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standar BIS yang Berlaku untuk Tali Serat Sintetik Komposit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar India yang berlaku untuk produk ini adalah:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Tali Serat Sintetik Komposit
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini menentukan persyaratan untuk material, konstruksi, dimensi,
          karakteristik kinerja, penandaan, pengambilan sampel, dan pengujian tali
          serat sintetik komposit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ruang Lingkup IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 mencakup:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Tali yang diproduksi menggunakan kombinasi serat sintetik yang berbeda
          </li>
          <li>
            Berbagai konstruksi tali seperti struktur lilit dan anyaman
          </li>
          <li>
            Tali yang dimaksudkan untuk aplikasi maritim, perikanan, industri, dan umum
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tujuan Keselamatan, Kinerja & Pengujian
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini bertujuan untuk memastikan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kekuatan putus dan kapasitas penahan beban yang memadai</li>
          <li>Diameter dan kualitas konstruksi yang konsisten</li>
          <li>
            Ketahanan terhadap abrasi, kelembaban, dan degradasi lingkungan
          </li>
          <li>Kinerja yang dapat diprediksi dan aman sepanjang masa layanan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Siapa yang Harus Mematuhi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan terhadap IS 14928:2001 wajib untuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India tali serat sintetik komposit</li>
          <li>Importir yang menyediakan tali ini di pasar India</li>
          <li>Produsen asing yang menjual melalui perwakilan India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Wajib untuk Tali Serat Sintetik Komposit
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Risiko Keselamatan Konsumen dan Pekerja
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tali serat sintetik komposit digunakan dalam:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Operasi tambat dan penarikan</li>
          <li>Pengangkatan dan pengamanan beban berat</li>
          <li>Jaring ikan dan peralatan maritim</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan tali dapat menyebabkan cedera, kehilangan nyawa, kerusakan kapal,
          dan keterlambatan proyek.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Kepatuhan Pemerintah
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai notifikasi BIS dan persyaratan kontrol kualitas, produk yang
          dicakup dalam IS 14928:2001 tidak dapat dijual secara legal tanpa sertifikasi
          BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Implikasi Hukum
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan dapat menyebabkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sita produk tidak tersertifikasi</li>
          <li>Denda finansial sesuai Undang-Undang BIS</li>
          <li>Penuntutan dan tindakan hukum</li>
          <li>Penolakan pembersihan bea cukai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Manfaat Pasar dan Merek
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lisensi BIS untuk Tali Serat Sintetik Komposit meningkatkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepercayaan pelanggan</li>
          <li>Kelayakan untuk tender pemerintah dan PSU</li>
          <li>Kredibilitas merek di pasar domestik dan ekspor</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Langkah demi Langkah untuk Tali Serat Sintetik Komposit
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penerapan & Identifikasi Standar
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proses dimulai dengan mengkonfirmasi bahwa produk termasuk dalam IS
          14928:2001. Ini melibatkan identifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Komposisi dan campuran serat</li>
          <li>Jenis konstruksi tali</li>
          <li>Range diameter dan aplikasi yang dimaksud</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identifikasi yang akurat menghindari kesalahan pengujian dan penolakan aplikasi.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Proses Aplikasi Online BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus mengajukan BIS online melalui portal BIS dengan
          mengirimkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produk</li>
          <li>Informasi pabrik dan manufaktur</li>
          <li>Arrangement kontrol kualitas</li>
          <li>Detail permintaan pengujian</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi BIS yang diisi dengan benar sangat penting untuk pemrosesan tepat waktu.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Biaya & Struktur Biaya
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Biaya sertifikat BIS meliputi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pengujian di lab yang diakui BIS</li>
          <li>Biaya inspeksi pabrik</li>
          <li>Biaya lisensi dan penandaan tahunan</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total biaya sertifikasi BIS bervariasi tergantung pada konstruksi tali,
          range ukuran, dan kompleksitas pengujian. Perencanaan yang tepat
          membantu mengelola biaya sertifikasi BIS dan biaya lisensi BIS secara efektif.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pengujian Sampel Produk (sesuai IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel produk diambil dan diuji di laboratorium yang diakui BIS untuk
          memverifikasi kepatuhan terhadap semua persyaratan standar.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspeksi Pabrik & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pejabat BIS melakukan audit pabrik untuk memverifikasi:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kontrol proses manufaktur</li>
          <li>Penanganan bahan baku</li>
          <li>Fasilitas pengujian internal</li>
          <li>Sistem dan catatan jaminan kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pemberian Lisensi BIS & Tanda ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah semua persyaratan terpenuhi, BIS memberikan Lisensi Bureau of Indian
          Standards, memungkinkan produsen menggunakan Tanda ISI pada tali serat
          sintetik komposit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kepatuhan Pasca-Sertifikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah sertifikasi, pemegang lisensi harus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mempertahankan kualitas produk yang konsisten</li>
          <li>Memungkinkan audit pengawasan berkala</li>
          <li>Memberi tahu BIS tentang perubahan material, proses, atau desain</li>
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
          <li>Bagan alir proses manufaktur</li>
          <li>Daftar mesin dan peralatan pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat pendirian perusahaan</li>
          <li>Registrasi GST</li>
          <li>Surat kuasa untuk penandatangan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spesifikasi produk dan gambar</li>
          <li>Spesifikasi bahan baku</li>
          <li>Prosedur pengujian internal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Aplikasi BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulir aplikasi BIS yang diisi dengan benar</li>
          <li>Surat permintaan pengujian</li>
          <li>Detail penandaan dan pelabelan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Secara kolektif ini membentuk DOKUMEN SERTIFIKASI BIS yang wajib.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian sesuai IS 14928:2001
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
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Konstruksi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Struktur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Perlakuan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tali
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diameter
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Massa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Kekuatan Putus
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Panjang
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

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Klasifikasi Produk yang Tidak Benar</strong>
            <br />
            Solusi: Lakukan penilaian teknis pra-sertifikasi.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Kegagalan Pengujian</strong>
            <br />
            Solusi: Sesuaikan kualitas bahan baku dan kontrol proses dengan IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Dokumentasi Tidak Lengkap</strong>
            <br />
            Solusi: Siapkan dokumen khusus BIS dengan hati-hati dan verifikasi sebelum
            pengiriman.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Ketidakpatuhan Audit</strong>
            <br />
            Solusi: Pertahankan catatan yang tepat, kalibrasi, dan pemeriksaan kualitas
            internal.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Produsen & Importir
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kepatuhan dengan peraturan India</li>
          <li>Pembersihan bea cukai yang lancar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Komersial
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kelayakan untuk tender pemerintah dan institusional</li>
          <li>Peningkatan penerimaan pembeli</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manfaat Merek
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penggunaan Tanda BIS yang resmi</li>
          <li>Peningkatan kepercayaan dan kredibilitas pasar</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ekspansi Pasar
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Masuk ke sektor yang diatur</li>
          <li>Pertumbuhan bisnis jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan mendapatkan sertifikasi BIS dapat mengakibatkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda moneter yang berat</li>
          <li>Sita atau penarikan produk</li>
          <li>Larangan impor</li>
          <li>Penuntutan hukum</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Siapa yang Membutuhkan Sertifikasi BIS untuk Tali Serat Sintetik Komposit?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produsen India</li>
          <li>Importir</li>
          <li>Produsen asing yang memasok ke India</li>
          <li>Pedagang dan distributor</li>
          <li>Penjual e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap entitas yang menempatkan tali serat sintetik komposit di pasar India
          harus memastikan kepatuhan BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mendapatkan Sertifikat BIS untuk Tali Serat Sintetik Komposit sesuai
          IS 14928:2001 adalah kewajiban hukum dan persyaratan keselamatan
          yang kritis. Sertifikasi BIS/Lisensi BIS yang valid untuk Tali Serat Sintetik Komposit memastikan kepatuhan regulasi, melindungi pengguna akhir,
          dan meningkatkan kredibilitas pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen dan importir, sertifikasi BIS bukan hanya tentang
          persetujuan—ini tentang kepercayaan, keselamatan, dan pertumbuhan bisnis yang berkelanjutan.
          Dengan persiapan teknis yang tepat dan bimbingan ahli, proses sertifikasi BIS di India dapat diselesaikan dengan lancar dan efisien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Tali Serat Sintetik Komposit
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Apa bentuk lengkap dari BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Apakah sertifikasi BIS wajib untuk tali serat sintetik komposit?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, sesuai IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Apa bentuk lengkap dari Sertifikat BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Bisakah saya mengajukan sertifikat BIS online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, ajukan BIS online melalui portal resmi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Berapa lama waktu sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 1-2 bulan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Berapa biaya sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bervariasi tergantung pada lingkup pengujian dan audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Apakah importir membutuhkan sertifikasi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Importir harus memastikan produk tersertifikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Bisakah produsen asing mengajukan?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui Perwakilan India yang Berwenang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Apakah registrasi BIS sama dengan lisensi BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak, tali serat memerlukan lisensi BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Apa yang terjadi jika produk gagal pengujian?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tindakan korektif dan pengujian ulang diperlukan.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Apakah penandaan ISI wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, setelah sertifikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Berapa lama lisensi BIS berlaku?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Biasanya 1-2 tahun, dapat diperpanjang.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Apakah audit pengawasan wajib?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, BIS melakukan audit berkala.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Bisakah lingkup lisensi diperluas nanti?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ya, melalui persetujuan perluasan lingkup.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Bisakah produk tidak tersertifikasi dijual online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tidak, penjualan e-commerce juga memerlukan kepatuhan BIS.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Tali Serat Sintetik Komposit - IS 14928:2001 PDF"
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
              BIS Mark (Lisensi ISI) untuk Produsen Asing
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
              ISI MARK (BIS) untuk Produsen India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
