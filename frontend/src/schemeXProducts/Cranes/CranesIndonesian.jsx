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

const CranesIndonesian = () => {
  return (
    <div className="relative w-full">
      <CranesMetaTags />

      <CranesBreadcrumb />
      <CranesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default CranesIndonesian;

const CranesMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Derek";
  const description =
    "Biro Standar India (BIS) telah memperkenalkan sertifikasi Scheme X wajib untuk semua jenis derek beserta rakitan, sub-rakitan, dan komponennya.";
  const keywords =
    "Sertifikasi BIS untuk Derek, Sertifikasi BIS Scheme X untuk Derek, Sertifikasi Scheme X untuk Derek, BIS untuk Derek, OTR untuk Derek";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Derek di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk Derek di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const CranesBreadcrumb = () => {
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
                    BIS Scheme X untuk Derek
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

const CranesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const CranesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X untuk Derek
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="Sertifikasi BIS Scheme X untuk Derek"
            title="Lisensi BIS Scheme X untuk Derek"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Derek terutama digunakan untuk mengangkat dan mengangkut material
          serta dalam manufaktur, konstruksi, produksi, dan pertambangan. Karena
          fungsinya dapat menjadi kritis untuk keselamatan, derek yang tidak
          memenuhi syarat atau berkualitas buruk dapat mengakibatkan terpeleset
          dan jatuh, kerusakan peralatan, atau kerugian yang mahal.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Mengingat bahaya-bahaya ini, Biro Standar India (BIS) telah membuat
          Sertifikasi BIS untuk Derek menjadi wajib di bawah Sertifikasi Scheme
          – X. Hal ini memastikan bahwa derek yang digunakan di India aman,
          andal, efisien, dan berkualitas kelas dunia.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam blog ini, kami akan memandu Anda tentang pentingnya Registrasi
          BIS Scheme X untuk Derek, aspek hukum OTR untuk Derek, dan cara
          mendapatkan Lisensi BIS untuk Derek serta menandai tanda Standar BIS
          untuk Derek.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa BIS untuk Derek Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Derek banyak digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pekerjaan bangunan & infrastruktur</li>
          <li>Pelabuhan laut, galangan kapal dan pusat logistik lainnya</li>
          <li>Pabrik dan pabrik perakitan</li>
          <li>Pertambangan logam dan penanganan material berat</li>
          <li>Pembangkit listrik dan industri lainnya</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa BIS untuk Derek, peralatan yang tidak bersertifikat dapat
          menyebabkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kerusakan mekanis dan kecelakaan</li>
          <li>Penurunan ketersediaan dan peningkatan biaya perawatan</li>
          <li>Kehilangan kelayakan untuk proyek pemerintah</li>
          <li>Pekerja dan infrastruktur terpapar bahaya keselamatan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS untuk Derek memberikan keyakinan kepada konsumen dan
          regulator bahwa produk mematuhi norma kualitas dan keselamatan India
          yang ketat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Derek?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X untuk Derek di bawah BIS adalah wajib berdasarkan
          Peraturan Penilaian Kesesuaian BIS, 2018, yang mewajibkan sertifikasi
          produk untuk mesin kritis.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama Scheme X untuk Derek:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Diperlukan untuk produsen domestik maupun asing</li>
          <li>
            Berlaku untuk semua kategori utama derek & diberitahukan di bawah
            Standar India
          </li>
          <li>
            Pengujian produk, audit pabrik dan penilaian kepatuhan berkelanjutan
            diwajibkan
          </li>
          <li>
            Memberikan lisensi untuk penggunaan tanda BIS pada Derek pada produk
            bersertifikat
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Derek
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Peraturan Teknis Omnibus (OTR) untuk Derek, yang telah diberitahukan
          oleh Kementerian Industri Berat pada tahun 2024, bertujuan untuk
          mewajibkan sertifikasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua Produsen / Importir Derek perlu mendapatkan Lisensi
          BIS untuk Derek di bawah Scheme X paling lambat pada tanggal 01
          September 2026. Setelah itu, derek yang tidak bersertifikat tidak
          dapat dipasarkan atau diimpor atau digunakan dalam tender publik di
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Derek
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Peningkatan Keselamatan: Derek bersertifikat meminimalkan kegagalan
            mekanis dan kecelakaan.
          </li>
          <li>
            Keuntungan Pasar: Badan pemerintah dan perusahaan swasta memberikan
            preferensi untuk derek bersertifikat BIS dalam e-tender dan proyek
            besar.
          </li>
          <li>
            Kepercayaan Konsumen & Kontraktor: Tanda BIS untuk Derek menciptakan
            kepercayaan akan kualitas dan keandalan.
          </li>
          <li>
            Masuk ke Pasar Global: Untuk produsen luar negeri, Lisensi BIS untuk
            Derek memungkinkan penetrasi tanpa hambatan ke pasar India yang
            diatur.
          </li>
          <li>
            Kepatuhan dengan Hukum India: Mencegah denda, penyitaan, dan
            pengecualian dari kontrak pemerintah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Derek yang Termasuk dalam Sertifikasi Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Derek yang tercantum di bawah sertifikasi Scheme X terdiri dari
          berbagai jenis, misalnya:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Derek Menara</li>
          <li>Derek Bergerak</li>
          <li>Derek Gantry dan Goliath</li>
          <li>Derek OH/BR</li>
          <li>Derek Crawler</li>
          <li>Derek Jib</li>
          <li>Derek Apung</li>
          <li>Derek Industri dan Bengkel</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap varian harus mematuhi Standar India (kode IS) yang sesuai
          seperti IS 4573:2020 untuk Spesifikasi Derek Bergerak Bertenaga dan
          IS/ISO 15442:2012 untuk Derek - Persyaratan keselamatan untuk derek
          loader.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jenis peralatan harus mematuhi standar India yang relevan (kode IS)
          untuk desain, kapasitas beban, keselamatan dan kinerja.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur untuk Mendapatkan Lisensi BIS untuk Derek
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar IS yang Relevan: Identifikasi Standar India
            yang berlaku untuk jenis derek Anda.
          </li>
          <li>
            Pengujian di Laboratorium yang Diakui BIS: Wajib melakukan pengujian
            keselamatan dan kemanjuran.
          </li>
          <li>
            Inspeksi Pabrik: BIS melakukan inspeksi lokasi produksi dan sistem
            kualitas.
          </li>
          <li>
            Aplikasi & Dokumentasi: Sajikan laporan teknis, hasil pengujian, dan
            manual kualitas.
          </li>
          <li>
            Lisensi BIS pada Derek: Setelah disetujui, produsen memiliki hak
            istimewa untuk menerapkan tanda BIS untuk Derek.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit dan inspeksi rutin memastikan
            kepatuhan yang berkelanjutan.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hukuman untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Apa yang terjadi jika seseorang tidak mengikuti OTR untuk Derek dan
          tidak mendapatkan Sertifikasi BIS untuk Derek pada tanggal 1 September
          2026?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Melarang penjualan dan impor derek yang tidak bersertifikat</li>
          <li>Penyitaan produk dan denda besar</li>
          <li>Diskualifikasi dari tender pemerintah dan BUMN</li>
          <li>Dampak negatif jangka panjang pada merek</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pemberlakuan Sertifikasi BIS Scheme X akan menjadi tonggak penting
          yang akan meningkatkan keselamatan, keandalan dan menyediakan standar
          industri umum di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen, importir, eksportir Derek, penting untuk memiliki
          Lisensi BIS untuk Derek dan dapat mengajukan melalui portal aplikasi
          online untuk Registrasi BIS Derek agar mematuhi standar, membangun
          kepercayaan konsumen, dan juga untuk menghindari potensi konflik
          dengan BIS atau Pemerintah India.
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
