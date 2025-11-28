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
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const MachineToolsIndonesian = () => {
  return (
    <div className="relative w-full">
      <MachineToolsMetaTags />
      <MachineToolsBreadcrumb />
      <MachineToolsMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default MachineToolsIndonesian;

const MachineToolsMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Alat Mesin";
  const description =
    "Sertifikasi BIS Scheme X wajib untuk alat mesin termasuk mesin bubut, mesin frais, mesin bor, mesin gerinda, sistem CNC dan alat untuk mengerjakan batu, keramik, beton dan bahan serupa";
  const keywords =
    "Sertifikasi BIS untuk Alat Mesin, Sertifikasi BIS Scheme X untuk Alat Mesin, Sertifikasi Scheme X untuk Alat Mesin, BIS untuk Alat Mesin, OTR untuk Alat Mesin";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Alat Mesin di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk Alat Mesin di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const MachineToolsBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Alat Mesin
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

const MachineToolsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MachineToolsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Alat Mesin
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Lisensi BIS Scheme X untuk Alat Mesin
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="Sertifikasi BIS Scheme X Untuk Alat Mesin"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Mempertimbangkan kualitas dan keselamatan sebagai hal yang kritis, BIS
          (Bureau of Indian Standards) telah memimpin keselamatan dan standar
          berbagai industri melalui Sertifikasi Scheme X. Sertifikat ini sangat
          penting bagi produsen alat mesin yang dirancang untuk beroperasi pada
          bahan seperti batu, keramik, beton, semen asbes dan kaca mineral
          serupa serta alat mesin lainnya. Kepatuhan sertifikasi tidak hanya
          memenuhi persyaratan keselamatan nasional, tetapi secara signifikan
          meningkatkan kredibilitas dan kemampuan pemasaran produk tersebut.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X ini merupakan persyaratan di bawah Keselamatan
          Mesin & Peralatan Listrik (Peraturan Teknis Omnibus, 2024). Peraturan
          ini mensertifikasi bahwa produsen mesin dan peralatan listrik harus
          memiliki Tanda Standar pada peralatan mereka. Sertifikasi mencakup
          persiapan file teknis, audit pabrik, pemeriksaan produk independen,
          dan perizinan, dan batas waktu akhir adalah 1 September 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini mencakup semua informasi yang diperlukan terkait sertifikasi
          Scheme X untuk semua jenis alat mesin untuk mengerjakan batu, keramik,
          beton, semen asbes atau mineral serupa (atau) dan perakitannya
          /sub-perakitan /komponennya, pentingnya, ruang lingkup, proses
          sertifikasi, keuntungan, dan dokumentasi yang diperlukan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS untuk Alat Mesin Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alat mesin sangat diperlukan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Produksi suku cadang mobil dan pesawat terbang</li>
          <li>Industri pembuatan kapal dan teknik berat</li>
          <li>Pembuatan peralatan pembangkit listrik</li>
          <li>Kereta api, pertahanan dan peralatan presisi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa sertifikasi BIS, risiko meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kualitas produk yang tidak memadai & tidak konsisten</li>
          <li>Kerusakan peralatan dan penundaan dalam produksi</li>
          <li>Risiko bagi operator</li>
          <li>Kekhawatiran hukum karena Pelanggaran Hukum India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Dengan menegakkan kepatuhan, Sertifikasi Scheme X melindungi industri
          dari risiko ini. Ini juga berlaku untuk semua jenis alat mesin untuk
          mengerjakan batu, keramik, beton, semen asbes atau mineral serupa
          (atau) dan perakitannya /sub-perakitan /komponennya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Alat Mesin?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan Sertifikasi BIS Scheme X di bawah Peraturan Penilaian
          Kesesuaian BIS, 2018, pengujian, inspeksi dan perizinan tersebut telah
          menjadi wajib untuk produk alat mesin yang diidentifikasi, sebelum
          pembuatannya, impor atau penjualan di negara tersebut.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sorotan Utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Berlaku untuk produsen India maupun impor</li>
          <li>
            Mencakup alat mesin seperti mesin bubut, mesin frais, mesin bor,
            mesin gerinda, mesin shaping, sistem CNC, dan lainnya
          </li>
          <li>Pengujian hanya dilakukan di laboratorium yang disetujui BIS.</li>
          <li>Audit pabrik dan tinjauan sistem kualitas adalah wajib</li>
          <li>
            Hanya pelamar yang berhasil yang mendapatkan Lisensi BIS untuk
            menggunakan Tanda Standar pada produk mereka
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR untuk Alat Mesin
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah merilis Peraturan Teknis Omnibus
          (OTR) yang mewajibkan sertifikasi BIS scheme X untuk Alat Mesin.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir harus memiliki sertifikasi
          BIS pada tanggal 1 September 2026. Mulai tanggal pemberitahuan
          tersebut, alat mesin yang tidak bersertifikat tidak akan dapat
          diproduksi, dijual atau diimpor di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Alat Mesin
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Jaminan Kualitas: Akurasi yang terverifikasi, daya tahan alat yang
            bersertifikat.
          </li>
          <li>
            Akses ke Pasar – penting untuk masuk ke pekerjaan sektor publik dan
            swasta.
          </li>
          <li>
            Kepercayaan Konsumen – Tanda Standar BIS adalah jaminan kualitas &
            keselamatan produk.
          </li>
          <li>
            Keunggulan Kompetitif - Produsen yang berwenang lebih disukai untuk
            tender dan pengadaan.
          </li>
          <li>
            Pengurangan Risiko – Tidak ada kegagalan peralatan, peningkatan
            keselamatan operator, dan pencegahan downtime.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS Alat Mesin
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar – Hubungkan jenis alat mesin dan penggunaannya
            dengan Standar India.
          </li>
          <li>
            Pengujian Produk – Pengujian kinerja, keselamatan dan Daya tahan di
            laboratorium yang terakreditasi BIS.
          </li>
          <li>
            Audit Pabrik – Audit kontrol kualitas produksi peralatan listrik.
          </li>
          <li>
            Dokumentasi: Laporan teknis, manual dan bukti kepatuhan harus
            disediakan.
          </li>
          <li>
            Pemberian Lisensi – BIS memberikan lisensi (sertifikat) dan
            mengizinkan penggunaan Tanda Standar.
          </li>
          <li>
            Pemantauan – Tinjauan rutin dan inspeksi acak dilakukan untuk
            memastikan mereka mematuhi aturan.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X wajib untuk semua mesin untuk mengerjakan batu,
          keramik, beton, semen asbes atau mineral serupa (atau) dan
          perakitannya/sub-perakitan/partnya.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak mematuhi norma sertifikasi BIS di bawah OTR dapat mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan terhadap produksi, impor dan perdagangan komoditas yang
            tidak bersertifikat
          </li>
          <li>Penyitaan barang dan denda</li>
          <li>Kehilangan kontrak pertahanan dan pemerintah</li>
          <li>Kerusakan merek dan reputasi permanen dalam jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Scheme X, yang diperlukan di bawah OTR 2024, bukan
          hanya kewajiban regulasi—ini adalah kunci untuk kepercayaan,
          keselamatan, dan kesuksesan dalam industri manufaktur India.
          Sertifikasi penting bagi Produsen India & Global untuk Akses Pasar,
          Kepatuhan dan Kesuksesan Jangka Panjang.
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
