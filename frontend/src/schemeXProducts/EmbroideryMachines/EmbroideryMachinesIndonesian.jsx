import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";

const EmbroideryMachinesIndonesian = () => {
  return (
    <div className="relative w-full">
      <EmbroideryMachinesMetaTags />
      <EmbroideryMachinesBreadcrumb />
      <EmbroideryMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default EmbroideryMachinesIndonesian;

const EmbroideryMachinesMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Mesin Bordir";
  const description =
    "Sertifikasi BIS Scheme X untuk mesin bordir, produsen memastikan produk mereka mematuhi hukum, unggul secara teknis, dan dipercaya oleh pelanggan";
  const keywords =
    "Sertifikasi BIS untuk Mesin Bordir, Sertifikasi BIS Scheme X untuk Mesin Bordir, Sertifikasi Scheme X untuk Mesin Bordir, BIS untuk Mesin Bordir, OTR untuk Mesin Bordir";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Bordir di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin bordir di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const EmbroideryMachinesBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">Produk SchemeX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Sertifikasi BIS untuk Mesin Bordir
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

const EmbroideryMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Bordir
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="Sertifikasi BIS Scheme X Untuk Mesin Bordir"
            title="Lisensi BIS Scheme X untuk Mesin Bordir"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sektor bordir adalah bagian penting dari industri tekstil dan pakaian
          India yang memproduksi kain bernilai tambah untuk fashion, rumah dan
          ekspor. Mesin bordir multi-kepala terkomputerisasi atau mesin industri
          sangat diperlukan untuk mendapatkan kualitas tinggi dalam produk
          bordir karena menawarkan efisiensi dan presisi dalam bordir.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan keselamatan, stabilitas dan kinerja, BIS (Biro
          Standar India) telah memberlakukan sertifikasi wajib untuk Mesin
          Bordir di bawah skema sertifikasi X dari BIS. Ini memastikan bahwa
          hanya mesin yang mematuhi Standar India yang diizinkan masuk ke pasar
          India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam artikel ini, kami akan membahas pentingnya Persetujuan BIS
          Scheme X untuk Mesin Bordir, peraturan di bawah OTR (Peraturan
          Tekstil) untuk Mesin Bordir, dan proses untuk mendapatkan Lisensi BIS
          untuk Mesin Bordir.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Mesin Bordir
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin bordir digunakan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pabrik pakaian dan garmen</li>
          <li>Produksi tekstil rumah (tirai, seprai, sarung bantal)</li>
          <li>Bordir yang dibuat khusus dan rumah couture</li>
          <li>Pabrik tekstil yang berorientasi ekspor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Risiko tanpa BIS untuk Mesin Bordir adalah:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kualitas jahitan yang buruk dan benang putus.</li>
          <li>Waktu henti mekanis mesin yang berlebihan</li>
          <li>Risiko keselamatan di lingkungan industri</li>
          <li>Dikecualikan dari pasar domestik dan ekspor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS untuk Mesin Bordir adalah jaminan bagi Pelanggan bahwa
          produk Anda telah diuji secara ketat dan disertifikasi mengikuti semua
          pedoman yang diperlukan dari BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Mesin Bordir?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kerangka Kerja untuk Sertifikasi BIS Scheme X untuk Mesin Bordir
          didasarkan pada parameter yang disebutkan di bawah Peraturan Penilaian
          Kesesuaian BIS, 2018 (yang dikembangkan untuk kepatuhan dalam
          manajemen kualitas di antara pemasok peralatan industri).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Mesin Bordir: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk produsen India maupun asing</li>
          <li>
            Termasuk pengujian, pemeriksaan keselamatan, dan verifikasi
            efisiensi
          </li>
          <li>Kunjungan pabrik rutin dan audit kualitas diperlukan</li>
          <li>
            Memungkinkan menempatkan tanda BIS di bawah lisensi untuk Mesin
            Bordir untuk produk yang disertifikasi
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Mesin Bordir
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah memperkenalkan Peraturan Teknis
          Omnibus (OTR) 2024 untuk Mesin Bordir yang mewajibkan sertifikasi
          untuk semua mesin yang termasuk dalam kategori mesin bordir.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          Lisensi BIS untuk Mesin Bordir yang akan dijual atau diimpor di India
          pada tanggal 1 September 2026 untuk menghindari denda atau penuntutan.
          Setelah itu, mesin bordir yang tidak bersertifikat tidak dapat
          diperdagangkan atau digunakan untuk tujuan komersial di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Bordir
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Keandalan Produk: Mesin yang dapat disertifikasi
            berkinerja sesuai standar yang diharapkan dan keselamatan.
          </li>
          <li>
            Penerimaan Pasar: Lisensi BIS untuk Mesin Bordir wajib untuk tender
            pemerintah dan kesepakatan kuantitas.
          </li>
          <li>
            Kepercayaan Pembeli: Mesin Bordir diberi Tanda BIS yang
            mengkonfirmasi kualitas dan standarnya.
          </li>
          <li>
            Kepatuhan Regulasi: Mematuhi OTR untuk Mesin Bordir dan tidak
            menimbulkan denda.
          </li>
          <li>
            Keuntungan Ekspor: Pembeli India mendapatkan ketenangan pikiran
            dengan mesin bersertifikat dan perusahaan internasional mendapatkan
            akses yang lebih mudah ke India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Mesin Bordir di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X untuk Mesin Bordir berlaku untuk:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mesin bordir dengan multi-kepala</li>
          <li>Bordir terkomputerisasi yang digerakkan mesin</li>
          <li>Mesin bordir dengan satu kepala</li>
          <li>Mesin untuk bordir jahitan rantai</li>
          <li>Mesin bordir Schiffli</li>
          <li>Peralatan bordir tekstil khusus</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap kategori dapat mematuhi standar IS terkait (kode IS), seperti
          IS 17361 (Bagian 1): 2020 / ISO 11111 (Bagian 1): 2016 (Persyaratan
          Keselamatan Mesin Tekstil Bagian 1 Persyaratan Umum). Semuanya harus
          mematuhi masing-masing sesuai kode IS untuk desain, daya tahan,
          keselamatan dan ekonomi dalam operasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Mesin Bordir
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Relevan: Mencari kode IS yang relevan
            untuk model mesin bordir Anda.
          </li>
          <li>
            Pengujian Produk: Mesin diuji di laboratorium yang terakreditasi BIS
            untuk keselamatan dan kinerja.
          </li>
          <li>
            Inspeksi Pabrik: Auditor BIS datang ke pabrik untuk mengevaluasi
            kontrol kualitas.
          </li>
          <li>
            Dokumentasi & Aplikasi: Menyediakan BIS dengan laporan teknis,
            manual dan dokumen kualitas.
          </li>
          <li>
            Lisensi BIS untuk Mesin Bordir: Setelah diterima, produsen akan
            memiliki opsi untuk menandai produk mereka dengan tanda BIS.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Inspeksi rutin dan pengujian ulang
            memastikan kepatuhan berkelanjutan.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Konsekuensi dari tidak memiliki Sertifikasi BIS untuk Mesin Bordir di
          bawah OTR untuk Mesin Bordir mulai dari 1 September 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Pembatasan penjualan/impor mesin tidak bersertifikat</li>
          <li>Denda, hukuman dan penyitaan produk potensial</li>
          <li>
            Tidak memenuhi syarat untuk kontrak pemerintah dan ekspor yang
            signifikan
          </li>
          <li>Reputasi merek akan rusak untuk waktu yang lama</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implementasi Sertifikasi BIS Scheme X untuk Mesin Bordir dalam OTR
          untuk Mesin Bordir (2024) adalah langkah penting bagi sektor tekstil
          dan bordir India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Dari sudut pandang Produsen dan Impor Mesin Bordir untuk mendapatkan
          Registrasi BIS untuk Mesin Bordir dan menempatkan Tanda BIS untuk
          Mesin Bordir tidak hanya kepatuhan terhadap persyaratan hukum tetapi
          juga memiliki dukungan yang luar biasa untuk kualitas produk,
          kepercayaan pasar & keunggulan kompetitif untuk industri tekstil di
          India yang terus berkembang.
        </p>

        <ServiceAuthorIndonesian />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
                src={BISImage}
                alt="BIS"
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
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
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
                src={EPRCertificate}
                alt="EPRCertificate"
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
                src={LMPC}
                alt="LMPC"
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
                src={BISImage}
                alt="BIS"
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
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              TANDA ISI (BIS) untuk Manufaktur India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
