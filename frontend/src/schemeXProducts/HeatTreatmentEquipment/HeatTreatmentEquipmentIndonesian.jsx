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
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
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

const HeatTreatmentEquipmentIndonesian = () => {
  return (
    <div className="relative w-full">
      <HeatTreatmentEquipmentMetaTags />
      <HeatTreatmentEquipmentBreadcrumb />
      <HeatTreatmentEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default HeatTreatmentEquipmentIndonesian;

const HeatTreatmentEquipmentMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Peralatan Perlakuan Panas";
  const description =
    "Sertifikasi BIS Scheme X mewajibkan bahwa semua jenis mesin untuk perlakuan material melalui proses yang melibatkan perubahan suhu dan/atau perakitannya, sub-perakitan, dan komponennya harus disertifikasi BIS";
  const keywords =
    "Sertifikasi BIS untuk Peralatan Perlakuan Panas, Sertifikasi BIS Scheme X untuk Peralatan Pemrosesan Termal, Sertifikasi Scheme X untuk Peralatan Perlakuan Panas, BIS untuk Peralatan Pemrosesan Termal, OTR untuk Peralatan Perlakuan Panas";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Peralatan Perlakuan Panas di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk peralatan perlakuan panas di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const HeatTreatmentEquipmentBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Peralatan Perlakuan Panas
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

const HeatTreatmentEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Peralatan Perlakuan Panas
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="Lisensi BIS Scheme X untuk perlakuan material"
            alt="Sertifikasi BIS Scheme X Untuk Peralatan Perlakuan Panas"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Peralatan perlakuan panas adalah salah satu aplikasi paling kritis di
          industri seperti otomotif, dirgantara, pengecoran, penempaan, dan
          rekayasa berat. Ini adalah perangkat yang mengubah atribut fisik dan
          mekanik logam melalui operasi seperti anil, pendinginan, pengerasan,
          tempering, dll.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Melihat signifikansinya, Bureau of Indian Standards (BIS) telah
          menyatakan Sertifikasi BIS untuk Peralatan Perlakuan Panas wajib di
          bawah Sertifikasi Scheme X. Hal ini memastikan produsen India maupun
          global mematuhi Standar India yang ketat sebelum memasarkan peralatan
          di negara tersebut.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam postingan ini, kami akan menjelaskan signifikansi Sertifikasi
          BIS Scheme X untuk Peralatan Perlakuan Panas, OTR untuk Peralatan
          Perlakuan Panas, dan proses untuk mendapatkan Lisensi BIS untuk
          Peralatan Perlakuan Panas dengan Tanda BIS untuk Peralatan Perlakuan
          Panas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Peralatan Perlakuan Panas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tungku perlakuan panas umumnya digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Industri logam dan metalurgi</li>
          <li>Produksi otomotif dan dirgantara</li>
          <li>Pembuatan alat dan cetakan</li>
          <li>Industri energi dan mesin berat lainnya</li>
          <li>Pertahanan dan rekayasa presisi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak adanya BIS untuk Peralatan Perlakuan Panas dapat menyebabkan
          mesin berkualitas rendah yang dapat menyebabkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Pemanasan berlebihan atau pemrosesan yang tidak tepat</li>
          <li>Kegagalan mekanisme dan struktur produk akhir</li>
          <li>Peningkatan penggunaan energi dan kurangnya efisiensi</li>
          <li>Bahaya keselamatan bagi operator</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS tidak hanya menjamin bahwa peralatan berfungsi dengan
          baik dan aman sesuai dengan tuntutan kinerja industri tetapi juga
          memenuhi kriteria lingkungan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Peralatan Perlakuan Panas?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scheme X - Peralatan Perlakuan Panas, sejalan dengan Kementerian Baja,
          Pemerintah India, yang merupakan skema sertifikasi wajib di bawah
          Peraturan Penilaian Kesesuaian BIS India, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Peralatan Perlakuan Panas: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Diwajibkan untuk produsen India maupun asing</li>
          <li>
            Dapat digunakan pada sebagian besar jenis peralatan perlakuan panas
            dan pembakaran
          </li>
          <li>
            Termasuk pengujian produk, pemeriksaan lantai pabrik dan audit
            kepatuhan berkelanjutan.
          </li>
          <li>Produsen diizinkan menggunakan Tanda Standar BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Peralatan Perlakuan Panas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat pada tahun 2024 mengeluarkan Peraturan
          Teknis Omnibus (OTR) untuk Peralatan Perlakuan Panas, di mana
          kepatuhan terhadap Scheme X diwajibkan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir perlu memperoleh Lisensi BIS
          yang valid untuk Peralatan Perlakuan Panas pada tanggal 1 September
          2026. Setelah tanggal ini, Peralatan Perlakuan Panas yang Tidak
          Bersertifikat tidak akan memenuhi syarat untuk dijual, diimpor atau
          mengajukan penawaran dalam tender publik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Peralatan Perlakuan Panas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan Operasional: Melindungi dari pemanasan berlebihan,
            perlakuan tidak merata dan kerusakan peralatan.
          </li>
          <li>
            Keandalan Produk: Memastikan item yang dirawat memenuhi spesifikasi
            kekerasan, daya tahan, dan ketangguhan
          </li>
          <li>
            Efisiensi Energi: Peralatan bersertifikat diuji untuk penggunaan
            energi yang optimal, menurunkan biaya operasional.
          </li>
          <li>
            Akses Pasar: Tanda BIS untuk Peralatan Perlakuan Panas seringkali
            wajib untuk pembelian publik dan tender pemerintah.
          </li>
          <li>
            Keunggulan Global: Merek global dapat memperoleh akses mudah ke
            pasar India dengan memperoleh Lisensi BIS untuk Peralatan Perlakuan
            Panas.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Peralatan Perlakuan Panas di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X pada Peralatan Perlakuan Panas mencakup
          sejumlah besar mesin seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Tungku Anil</li>
          <li>Tungku Pendinginan</li>
          <li>Tungku Pengerasan dan Temper</li>
          <li>Tungku Rotary untuk Perlakuan Panas Kontinyu</li>
          <li>Tungku Karburisasi dan Nitridasi.</li>
          <li>Peralatan Perlakuan Panas Induksi & Listrik</li>
          <li>Perangkat Perlakuan Panas Berbahan Bakar Gas dan Minyak</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap jenis perlu mematuhi Standar India yang relevan (kode IS)
          seperti IS 16819:2018/ISO 12100:2010. Karakteristik kinerja, grade
          material dan fitur konservasi energi harus sesuai dengan Standar India
          yang relevan (kode IS) untuk setiap jenis peralatan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Peralatan Perlakuan Panas
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifikasi Standar yang Relevan: Merujuk kode IS yang relevan
            untuk jenis Peralatan Perlakuan Panas Anda.
          </li>
          <li>
            Pengujian di Laboratorium yang Diakui BIS: Melakukan pengujian
            kinerja, keselamatan, dan efisiensi.
          </li>
          <li>
            Inspeksi Pabrik: BIS memeriksa sistem kontrol kualitas dan fasilitas
            produksi.
          </li>
          <li>
            Aplikasi & Dokumentasi: Menyediakan hasil, pengujian yang dilakukan,
            dan spesifikasi teknis serta manual kualitas.
          </li>
          <li>
            Penerbitan Lisensi BIS untuk Peralatan Perlakuan Panas: Persetujuan
            memungkinkan penggunaan Tanda BIS untuk Peralatan Perlakuan Panas.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit dan inspeksi secara teratur dilakukan
            untuk mempertahankan standar kualitas.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika OTR Peralatan Perlakuan Panas tidak dipenuhi pada tanggal 1 Sep
          2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Larangan penjualan/impor peralatan yang tidak bersertifikat</li>
          <li>Denda dan penyitaan produk</li>
          <li>Tidak memenuhi syarat untuk tender pemerintah dan PSU</li>
          <li>Kehilangan ekuitas merek dalam jangka panjang di pasar India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Penerapan wajib Sertifikasi Scheme X untuk Peralatan Perlakuan Panas
          di bawah OTR 2024 adalah tonggak penting dalam meningkatkan standar
          industri India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen, importir, dan eksportir Peralatan Perlakuan Panas,
          proses untuk mendapatkan Sertifikasi BIS untuk Peralatan Perlakuan
          Panas, untuk mendapatkan Lisensi BIS Peralatan Perlakuan Panas dan
          menggunakan Tanda Standar BIS Peralatan Perlakuan Panas bukan hanya
          tentang kepatuhan, ini tentang membangun produk yang aman dan produk
          yang dapat diandalkan yang kompetitif di pasar dalam mendapatkan pasar
          yang diatur.
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
