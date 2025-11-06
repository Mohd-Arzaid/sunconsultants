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
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";

const CompressorsIndonesian = () => {
  return (
    <div className="relative w-full">
      <CompressorsMetaTags />
      <CompressorsBreadcrumb />
      <CompressorsMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default CompressorsIndonesian;

const CompressorsMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Kompresor";
  const description =
    "Sertifikasi BIS scheme X untuk kompresor, perakitan, atau komponennya adalah wajib di bawah Peraturan Teknis Omnibus, 2024 meningkatkan keselamatan produk, standardisasi di India";
  const keywords =
    "Sertifikasi BIS untuk Kompresor, Sertifikasi BIS Scheme X untuk Kompresor, Sertifikasi Scheme X untuk Kompresor, BIS untuk Kompresor, OTR untuk Kompresor";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Kompresor di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk kompresor di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const CompressorsBreadcrumb = () => {
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
                    BIS Scheme X untuk Kompresor
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

const CompressorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const CompressorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X untuk Kompresor
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="Lisensi BIS Scheme X untuk Kompresor"
            alt="Sertifikasi BIS Scheme X Untuk Kompresor"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Kompresor adalah peralatan penting di berbagai industri seperti
          refrigerasi, HVAC, petrokimia, manufaktur, pengolahan makanan dan
          aplikasi farmasi. Industri India yang berkembang pesat tumbuh dengan
          cepat dan kualitas serta keselamatan kompresor menjadi perhatian
          utama.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan hal yang sama, Bureau of Indian Standards (BIS) telah
          mengimplementasikan Sertifikasi BIS untuk Kompresor di bawah
          Sertifikasi Scheme X. Sertifikasi ini memastikan bahwa setiap
          kompresor yang diperkenalkan ke wilayah India mematuhi standar
          keselamatan, kinerja, dan efisiensi tertentu.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam panduan ini, kami menyediakan sertifikasi BIS Scheme X untuk
          Kompresor dan OTR untuk Kompresor, serta cara produsen mendapatkan
          Lisensi BIS untuk Kompresor untuk menggunakan Tanda BIS untuk
          Kompresor di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa BIS untuk Kompresor Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kompresor digunakan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistem pendingin udara/refrigerasi</li>
          <li>Saluran transmisi gas dan penyimpanan</li>
          <li>Fasilitas proses minyak & gas</li>
          <li>Instalasi pembangkit listrik dan fasilitas industri kimia</li>
          <li>Produksi makanan dan minuman</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap jenis harus memenuhi Standar India yang berlaku (kode IS)
          seperti IS 17093:2019.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa BIS untuk Kompresor, produk inferior atau tidak bertanda dapat
          menyebabkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kerusakan, periode perawatan dan waktu menganggur</li>
          <li>
            Produksi energi yang boros terhadap tagihan utilitas energi tinggi
          </li>
          <li>Risiko keselamatan, seperti kepanasan atau kebocoran</li>
          <li>Kehilangan reputasi dan kerusakan moneter</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Oleh karena itu Tanda BIS untuk Kompresor yang telah dilakukan
          sertifikasi ISI adalah jaminan keselamatan, keandalan dan kualitas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Kompresor?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Scheme X untuk Kompresor adalah skema penilaian
          kesesuaian di India di bawah Peraturan Penilaian Kesesuaian BIS, 2018.
          Ini untuk memastikan bahwa baik produsen domestik maupun asing
          mematuhi kualitas India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Sertifikat Scheme X untuk Kompresor:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk semua produsen (baik India maupun asing)</li>
          <li>
            Mencakup berbagai jenis kompresor yang diberitahukan di bawah
            Standar India
          </li>
          <li>
            Menampilkan pengujian pihak ketiga, inspeksi pabrik dan pemeriksaan
            kepatuhan berkala
          </li>
          <li>
            Memungkinkan penggunaan Tanda BIS untuk Kompresor pada produk
            pemegang lisensi sebagai produk bersertifikat
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Kompresor
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Peraturan Teknis Omnibus (OTR) untuk Kompresor yang dirilis oleh
          Kementerian Industri Berat pada tahun 2024 mewajibkan Sertifikasi
          Scheme X untuk Kompresor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu Kepatuhan: Pada tanggal 1 September 2026, semua produsen
          dan importir diwajibkan untuk memiliki Lisensi BIS untuk Kompresor
          yang valid di bawah Scheme – X. Setiap ketidakpatuhan akan menyebabkan
          larangan total penjualan dan impor kompresor tidak bersertifikat di
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Kompresor
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Kinerja: Membantu menghindari bahaya seperti
            kebocoran, kepanasan dan kegagalan mesin.
          </li>
          <li>
            Akses Pasar: Kompresor yang disertifikasi oleh BIS dapat digunakan
            dalam tender publik dan proyek pemerintah.
          </li>
          <li>
            Kepercayaan Konsumen: Tanda BIS untuk Kompresor memberikan pembeli
            keyakinan bahwa produk sesuai dengan Standar India.
          </li>
          <li>
            Keunggulan Kompetitif: Hanya merek bersertifikat yang mendapatkan
            lebih banyak kepercayaan dan preferensi pasar.
          </li>
          <li>
            Akses Pasar yang Mudah untuk Merek Internasional: Lisensi BIS untuk
            Kompresor memfasilitasi akses mudah ke pasar India bagi produsen
            asing.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Kompresor yang Dicakup dalam BIS Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X tersedia untuk berbagai jenis kompresor
          seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Kompresor Reciprocating Positive-Displacement</li>
          <li>Kompresor Rotary</li>
          <li>Kompresor Sekrup</li>
          <li>Kompresor Turbo</li>
          <li>Kompresor Aliran Aksial</li>
          <li>Kompresor Udara Industri dan Portabel</li>
          <li>Kompresor pendingin udara dan refrigerasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Teknik kompresor yang berbeda harus sesuai dengan Standar India
          masing-masing, yang menetapkan persyaratan untuk kinerja, konsumsi
          energi, kualitas material, dan keselamatan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Langkah demi Langkah Lisensi BIS untuk Kompresor – Bagaimana Cara
          Mengajukan?
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifikasi Standar yang Berlaku: Temukan kode IS yang sesuai untuk
            kompresor Anda.
          </li>
          <li>
            Pengujian Produk: Lakukan pengujian kinerja, keselamatan dan
            efisiensi energi wajib di laboratorium yang diakui BIS.
          </li>
          <li>
            Inspeksi Pabrik: Personel BIS melakukan kunjungan lapangan untuk
            memverifikasi prosedur manufaktur dan metode kontrol kualitas.
          </li>
          <li>
            Dokumentasi & Aplikasi: Sertakan laporan uji, spesifikasi teknis dan
            manual Kualitas bersama dengan aplikasi BIS Anda.
          </li>
          <li>
            Penerbitan Lisensi BIS untuk Kompresor: Ketika diterima, produsen
            diberikan hak untuk menggunakan Tanda BIS untuk Kompresor.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit pengawasan rutin & pengujian produk
            dilakukan oleh BIS untuk kepatuhan berkelanjutan.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang tidak mendapatkan Sertifikasi BIS untuk Kompresor hingga
          tanggal 1 September 2026 di bawah OTR untuk Kompresor akan dikenakan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Penjualan/Impor kompresor yang tidak diuji tipe tidak diizinkan
          </li>
          <li>Penyitaan barang yang tidak patuh dan sanksi bisnis</li>
          <li>Larangan dari tender pemerintah dan kesepakatan PSU</li>
          <li>Pasar India kehilangan kepercayaan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implementasi Sertifikasi BIS Scheme X untuk Kompresor oleh OBR untuk
          Kompresor (2024) adalah langkah maju yang signifikan untuk keselamatan
          industri, efisiensi energi, dan jaminan kualitas di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, importir, dan eksportir yang melalui proses mendapatkan
          Sertifikat BIS untuk Kompresor, dan mengamankan sertifikat BIS untuk
          Kompresor memperoleh hak untuk menjadi bagian dari pasar ini dengan
          memastikan bahwa produk yang mereka tawarkan kepada konsumen India
          dianggap aman digunakan, memiliki risiko lingkungan yang lebih rendah
          dan berkualitas baik.
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
