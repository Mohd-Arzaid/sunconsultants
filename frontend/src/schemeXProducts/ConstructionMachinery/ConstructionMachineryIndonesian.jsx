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
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";


const ConstructionMachineryIndonesian = () => {
  return (
    <div className="relative w-full">
      <ConstructionMachineryMetaTags />

      <ConstructionMachineryBreadcrumb />
      <ConstructionMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default ConstructionMachineryIndonesian;

const ConstructionMachineryMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Mesin Konstruksi, Penggalian Tanah, dan Pertambangan";
  const description =
    "Sertifikasi BIS Scheme X wajib untuk mesin konstruksi, penggalian tanah, dan pertambangan untuk memastikan keselamatan, kualitas, dan standardisasi di sektor industri yang kritis";
  const keywords =
    "Sertifikasi BIS untuk Mesin Konstruksi, Sertifikasi BIS Scheme X untuk Mesin Konstruksi, Sertifikasi Scheme X untuk Mesin Konstruksi, BIS untuk Mesin Konstruksi, OTR untuk Mesin Konstruksi";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Konstruksi di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin konstruksi di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const ConstructionMachineryBreadcrumb = () => {
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
                    Sertifikasi BIS Scheme X untuk Mesin Konstruksi
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

const ConstructionMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const ConstructionMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Konstruksi
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="Sertifikasi BIS Scheme X untuk Mesin Konstruksi"
            title="Lisensi BIS Scheme X untuk Mesin Konstruksi"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Excavator, loader, bulldozer, concrete mixer dan road roller adalah
          mesin konstruksi utama yang digunakan dalam pembangunan infrastruktur
          India. Permintaan yang lebih tinggi untuk mesin yang aman dan andal
          berasal dari investasi besar dalam jalan raya, smart city, pabrik, dan
          perumahan.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Bureau of Indian Standards (BIS) telah membuat Sertifikasi BIS Wajib
          di bawah Scheme-X untuk Mesin Konstruksi untuk memberikan jaminan
          kualitas, layanan dan keselamatan. Ini memastikan bahwa perangkat
          sesuai dengan Standar India sebelum tersedia untuk dijual atau diimpor
          di India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Di artikel ini, Anda akan mempelajari tentang Sertifikasi BIS Scheme X
          untuk Mesin Konstruksi, persyaratan OTR untuk Mesin Konstruksi, dan
          proses mendapatkan Lisensi BIS untuk Mesin Konstruksi serta tanda BIS
          untuk Mesin Konstruksi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa BIS untuk Mesin Konstruksi Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin konstruksi diterapkan dalam pertumbuhan infrastruktur dan situs
          pengembangan konstruksi besar.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pengembangan jalan dan jalan raya</li>
          <li>Proyek real estate dan perumahan</li>
          <li>Pertambangan dan penggalian</li>
          <li>Konstruksi industri dan teknik berat</li>
          <li>Proyek pelabuhan, bandara, dan metro</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Konsekuensi dari tidak adanya BIS untuk Peralatan Konstruksi adalah
          sebagai berikut:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kegagalan peralatan dan downtime yang mahal</li>
          <li>Probabilitas kecelakaan yang lebih tinggi dan risiko bahaya</li>
          <li>Ketidakpatuhan dengan tender pemerintah</li>
          <li>Peningkatan biaya perawatan dan operasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS untuk Mesin Konstruksi menunjukkan bahwa produk tersebut
          aman, andal dan sesuai dengan Standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Mesin Konstruksi?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X dicakup oleh Persyaratan Penilaian Kesesuaian
          Bureau of Indian Standards (BIS) (2018) yang memberikan pedoman untuk
          produk. Dalam skema ini, BIS memutuskan kualitas produk dan memastikan
          bahwa produk tersebut mengurangi bahaya kesehatan manusia.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama - Sertifikasi Scheme X untuk Peralatan Konstruksi:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk produsen domestik dan asing</li>
          <li>Mencakup semua jenis mesin berat dan peralatan konstruksi</li>
          <li>
            Pengujian produk wajib, kunjungan pabrik wajib dan audit kepatuhan
            harus dilakukan secara teratur
          </li>
          <li>Mengotorisasi penggunaan tanda BIS untuk Mesin Konstruksi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Peralatan Konstruksi
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X akan menjadi wajib sebagai bagian dari Peraturan
          Teknis Omnibus (OTR) 2024 untuk Mesin Konstruksi yang diumumkan oleh
          Kementerian Industri Berat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir harus mendapatkan Lisensi BIS
          untuk Mesin Konstruksi di bawah Scheme X sebelum 01 September 2026.
          Mulai tanggal ini, peralatan yang tidak bersertifikat tidak boleh
          diproduksi, diangkut maupun dijual untuk program infrastruktur publik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Peralatan atau Mesin Konstruksi
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Keandalan: Mengurangi risiko kegagalan mekanis atau
            kecelakaan di lokasi konstruksi.
          </li>
          <li>
            Akses Pasar & Kelayakan Tender: Produk Bersertifikat BIS memenuhi
            syarat untuk Tender Pemerintah dan BUMN.
          </li>
          <li>
            Kepercayaan Konsumen & Kontraktor: Tanda BIS Mesin Konstruksi
            memastikan produk yang aman dan berkualitas untuk semua pembelinya.
          </li>
          <li>
            Masuk ke Pasar Global: Lisensi BIS untuk Mesin Konstruksi dapat
            bermanfaat bagi perusahaan asing untuk akses mudah ke pasar India.
          </li>
          <li>
            Kepatuhan Hukum: Kekebalan dari denda, larangan dan sanksi di bawah
            OTR Mesin Konstruksi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Peralatan Konstruksi yang Dicakup di Bawah Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Konstruksi berlaku untuk berbagai
          kategori peralatan seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Excavator dan Backhoe Loader</li>
          <li>Bulldozer dan Road Roller</li>
          <li>Crane yang digunakan di lokasi konstruksi</li>
          <li>Concrete Mixer dan Batching Plant</li>
          <li>Asphalt Plant dan Paver</li>
          <li>Mesin Piling dan Drilling</li>
          <li>Peralatan Material Handling dan Earthmoving</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap kategori harus memenuhi Standar India yang relevan (Kode IS)
          sesuai dengan IS 17055 (Bagian 7):2020, IS 17055 (Bagian 8):2020 dan
          IS 17055 (Bagian 12):2020 dalam hal desain, keselamatan, kinerja, dll.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur untuk Lisensi BIS untuk Peralatan Konstruksi
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Berlaku: Temukan kode IS untuk jenis Mesin
            Konstruksi Anda.
          </li>
          <li>
            Pengujian Produk: Lakukan pengujian keselamatan dan kinerja di
            laboratorium yang diakui BIS.
          </li>
          <li>
            Inspeksi Pabrik: Auditor BIS memeriksa proses QC dan produksi secara
            literal.
          </li>
          <li>
            Aplikasi & Dokumentasi: Berikan laporan, spesifikasi, dan manual
            untuk ditinjau.
          </li>
          <li>
            Lisensi BIS untuk Mesin Konstruksi: Setelah disetujui, produsen
            diizinkan untuk menempatkan tanda BIS untuk Mesin Konstruksi.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Inspeksi dan pemantauan yang sering
            mempertahankan kepatuhan berkelanjutan.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan massal atau tidak diterbitkannya Sertifikat BIS Mesin
          Konstruksi hingga 1 September 2026 dalam hal OTR untuk Mesin
          Konstruksi akan memiliki implikasi berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan penjualan dan impor peralatan yang tidak bersertifikat
          </li>
          <li>Denda besar dan penahanan produk</li>
          <li>Diskualifikasi dari proyek dan penghargaan pemerintah</li>
          <li>
            Potensi kerusakan reputasi yang tidak terbatas selama bertahun-tahun
            ke depan
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implementasi wajib Sertifikasi BIS Scheme X untuk Mesin Konstruksi di
          bawah OTR untuk Mesin Konstruksi (2024) adalah langkah signifikan
          menuju keselamatan, efisiensi serta standardisasi dalam industri
          domestik India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen, importir, dan eksportir mesin konstruksi, mendapatkan
          Lisensi BIS untuk Mesin Konstruksi dan menempatkan tanda BIS untuk
          Mesin Konstruksi bukan hanya persyaratan kepatuhan, ini adalah langkah
          strategis untuk memperluas ke pasar baru, menembus pasar konstruksi
          India yang berkembang pesat, dan membangun reputasi Anda dalam jangka
          panjang.
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
                alt="BIS Logo"
                title="BIS Logo"
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
