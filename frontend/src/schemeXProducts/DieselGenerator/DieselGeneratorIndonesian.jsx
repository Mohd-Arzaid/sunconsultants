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
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
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

const DieselGeneratorIndonesian = () => {
  return (
    <div className="relative w-full">
      <DieselGeneratorMetaTags />
      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default DieselGeneratorIndonesian;

const DieselGeneratorMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Generator Diesel";
  const description =
    "Sertifikasi BIS Scheme X untuk generator diesel dan komponennya merupakan langkah regulasi penting yang bertujuan untuk menstandardisasi dan menjaga kualitas serta keselamatan di India";
  const keywords =
    "Sertifikasi BIS untuk Generator Diesel, Sertifikasi BIS Scheme X untuk Generator Diesel, Sertifikasi Scheme X untuk Generator Diesel, BIS untuk Generator Diesel, OTR untuk Generator Diesel";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Generator Diesel di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk generator diesel di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const DieselGeneratorBreadcrumb = () => {
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
                    Sertifikasi BIS Skema X untuk Generator Diesel
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

const DieselGeneratorMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          SERTIFIKASI BIS SCHEME X UNTUK GENERATOR DIESEL
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="Sertifikasi BIS Scheme X untuk Generator Diesel"
            title="Lisensi BIS Scheme X untuk Generator Diesel"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Generator Diesel digunakan di tempat komersial, industri, rumah sakit,
          proyek infrastruktur, proyek perumahan dan di banyak tempat lainnya
          sebagai sumber daya sekunder. Sebagai aset ekonomi dengan tanggung
          jawab untuk menjamin kontinuitas pasokan listrik, penting bagi mesin
          untuk aman, efisien dan memenuhi standar nasional.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dalam upaya untuk melakukannya, Sertifikasi BIS untuk Generator Diesel
          termasuk dalam Sertifikasi Scheme X dari Bureau of Indian Standards
          (BIS). Skema ini telah diberlakukan untuk memastikan bahwa baik
          produsen nasional maupun global memenuhi Standar India yang ketat dan
          ketat sebelum mereka menjual produk mereka di India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Postingan ini merinci pentingnya Sertifikasi BIS Scheme X untuk
          Generator Diesel, mandat OTR tahun 2024 dan bagaimana produsen dapat
          memperoleh sertifikasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pentingnya BIS untuk Generator Diesel
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Generator diesel digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pabrik dan lokasi kerja</li>
          <li>Rumah sakit dan responden darurat</li>
          <li>Pusat data dan hub IT</li>
          <li>Gedung komersial dan perumahan</li>
          <li>Pekerjaan Umum dan Utilitas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Risikonya sangat besar jika genset diesel tidak disertifikasi dengan
          benar:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Kegagalan meter (mekanis dan listrik) yang mengakibatkan kurangnya
            pasokan
          </li>
          <li>
            Risiko tinggi kebakaran dan bahaya keselamatan pada unit yang tidak
            patuh
          </li>
          <li>Emisi terlalu tinggi dan tidak efisien energi</li>
          <li>Hambatan hukum, terkunci dari tender</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Generator Diesel dapat dengan mudah memenuhi sertifikasi Scheme X yang
          memungkinkan produsen untuk menjual produk yang aman, andal dan ramah
          lingkungan untuk digunakan di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Generator Diesel?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Generator Diesel adalah proses
          sertifikasi resmi dan merupakan sistem yang didirikan oleh Peraturan
          Penilaian Kesesuaian BIS 2018. Ini mewajibkan pengujian yang ketat dan
          penilaian kualitas untuk memvalidasi kepatuhan terhadap Standar India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sorotan Sertifikasi Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Semua produsen - India maupun asing - Persyaratan wajib</li>
          <li>
            Berlaku untuk semua jenis generator diesel dengan kapasitas berbeda
          </li>
          <li>
            Termasuk pengujian produk di laboratorium yang diotorisasi BIS
          </li>
          <li>
            Audit Pabrik, Kunjungan Bengkel dan Pemeriksaan Proses Produksi,
            untuk melakukan inspeksi pabrik di lokasi secara independen untuk
            memastikan standar kualitas dan keselamatan.
          </li>
          <li>
            Menawarkan lisensi untuk menggunakan Tanda Standar BIS ketika
            dilisensikan
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Generator Diesel (DG)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah mengeluarkan pemberitahuan untuk OTR
          untuk Generator Diesel pada tahun 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanggal Pemberlakuan: Semua produsen dan importir harus mendapatkan
          sertifikasi hingga 1 September 2026. Mulai tanggal ini, produksi,
          penjualan, atau impor genset diesel yang tidak disertifikasi akan
          dilarang di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Generator Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Jaminan Keselamatan: Meminimalkan kegagalan mekanis, berdasarkan
            teknologi pencegahan kebakaran untuk mencegah kebakaran, korsleting,
            dan kecelakaan.
          </li>
          <li>
            Kepatuhan Lingkungan: Memastikan standar hemat energi dan
            pengurangan emisi diikuti.
          </li>
          <li>
            Akses Pasar: OTR untuk Generator Diesel - Sertifikasi wajib untuk
            dijual di India
          </li>
          <li>
            Kepercayaan Pelanggan: Tanda Standar BIS memastikan keandalan dan
            keselamatan yang tinggi.
          </li>
          <li>
            Kelayakan Tender: Untuk kontrak Pemerintah / BUMN, produk harus
            disertifikasi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Generator Diesel yang Dicakup dalam Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Skema sertifikasi Generator Diesel X mencakup kelompok berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Generator rumah mobile menggunakan diesel</li>
          <li>Genset diesel komersial (kapasitas tinggi)</li>
          <li>Generator pasokan daya darurat dan siaga</li>
          <li>
            Set Generator Diesel Tanpa Suara untuk Komersial (Aplikasi dan
            Penggunaan Perkotaan)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap sub tipe harus sesuai dengan Standar India yang berlaku (kode
          IS) seperti IS 16819:2018 / ISO 12100:2010 (Keselamatan Mesin Prinsip
          Umum Desain - Penilaian Risiko & Pengurangan Risiko). Setiap jenis
          harus memenuhi Standar India sendiri.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur Sertifikasi BIS untuk Generator Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Berlaku: Cari tahu kode IS untuk jenis
            generator.
          </li>
          <li>
            Pengujian Produk: Lakukan pengujian keselamatan, kinerja dan emisi
            di laboratorium yang diakui BIS.
          </li>
          <li>
            Audit Pabrik: Petugas BIS memeriksa proses pengendalian kualitas
            manufaktur.
          </li>
          <li>
            Pengajuan Dokumentasi: Sediakan spesifikasi, hasil pengujian, dan
            dokumentasi kepatuhan.
          </li>
          <li>
            Pemberian Lisensi: Setelah disetujui, BIS mengeluarkan lisensi dan
            mengizinkan penggunaan Tanda Standar.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit dan inspeksi produk dilakukan untuk
            memastikan sertifikasi tetap valid.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hukuman untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan untuk mematuhi Sertifikasi BIS untuk Generator Diesel dari
          OTR untuk Generator Diesel dapat mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Melarang penjualan, impor dan pembuatan Peralatan yang Tidak
            Disertifikasi.
          </li>
          <li>Barang disita dan denda keuangan</li>
          <li>Ketidaklayakan untuk kontrak pemerintah</li>
          <li>Kerusakan reputasi dan keuangan permanen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Generator Diesel sesuai dengan OTR
          untuk Generator Diesel (2024) merupakan tonggak penting dalam
          perjalanan peningkatan keselamatan produk, keandalan dan efisiensi
          dalam industri cadangan daya India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen/importir, sertifikasi Scheme X untuk Generator Diesel
          bukan hanya kebutuhan hukum, tetapi juga keunggulan kompetitif yang
          mencerminkan kredibilitas, kepatuhan dan kepercayaan pasar.
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
