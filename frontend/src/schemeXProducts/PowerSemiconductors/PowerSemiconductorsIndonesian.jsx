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

const PowerSemiconductorsIndonesian = () => {
  return (
    <div className="relative w-full">
      <PowerSemiconductorsMetaTags />
      <PowerSemiconductorsBreadcrumb />
      <PowerSemiconductorsMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default PowerSemiconductorsIndonesian;

const PowerSemiconductorsMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya";
  const description =
    "Sertifikasi BIS Scheme X berlaku untuk semua jenis konverter semikonduktor daya dan perakitannya, sub-perakitan, dan komponennya untuk memastikan kualitas dan keselamatan di India";
  const keywords =
    "Sertifikasi BIS untuk Konverter Semikonduktor Daya, Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya, Sertifikasi Scheme X untuk Konverter Semikonduktor Daya, BIS untuk Konverter Semikonduktor Daya, OTR untuk Konverter Semikonduktor Daya";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk konverter semikonduktor daya di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const PowerSemiconductorsBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Konverter Semikonduktor Daya
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

const PowerSemiconductorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Konverter Semikonduktor Daya
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="Sertifikasi BIS Scheme X Untuk Konverter Semikonduktor Daya"
            title="Lisensi BIS Scheme X untuk Konverter Semikonduktor Daya"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Konverter semikonduktor daya memungkinkan eksekusi dan modifikasi daya
          listrik yang efektif dari satu bentuk ke bentuk lainnya di berbagai
          aplikasi. Aplikasi ini mencakup energi terbarukan, kendaraan listrik,
          otomasi industri, dan elektronik konsumen. Mereka berfungsi sebagai
          dasar untuk perangkat dan peralatan listrik dan elektronik. Karena
          pentingnya dan signifikansi yang terus berkembang dari perangkat ini
          di sektor energi dan industri negara, Bureau of Indian Standards (BIS)
          telah menggabungkan sertifikasi konverter semikonduktor daya di bawah
          kerangka sertifikasi Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai dengan perintah yang diberikan oleh Kementerian Industri Berat,
          ada harapan dari semua jenis produsen, terlepas dari apakah mereka
          beroperasi secara lokal atau di luar negeri, untuk mematuhi
          sertifikasi BIS untuk Konverter Semikonduktor Daya dan sub-perakitan
          serta komponennya, pada tanggal 1 September 2026. Sertifikasi BIS
          Scheme X untuk Konverter Semikonduktor Daya adalah skema sertifikasi
          regulasi, langkah menuju peningkatan manufaktur India melalui
          peningkatan keselamatan, kualitas dan standar yang kompetitif secara
          global.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini akan membantu dalam memberikan informasi yang diperlukan
          tentang dokumentasi mengenai sertifikasi Scheme X untuk semua
          sub-perakitan, komponen dan/atau jenis Konverter Semikonduktor Daya,
          ruang lingkup dan pentingnya, proses sertifikasi, keuntungan, dan
          informasi lainnya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Konverter Semikonduktor Daya
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi konverter semikonduktor daya meliputi:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Proyek tenaga surya dan angin</li>
          <li>Stasiun pengisian EV & drive</li>
          <li>Otomasi pabrik dan robotika</li>
          <li>Elektronik konsumen dan PSU</li>
          <li>Jaringan transmisi & distribusi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa sertifikasi, risiko meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kerusakan listrik dan kepanasan berlebih</li>
          <li>Kondisi tidak aman dan kerusakan peralatan</li>
          <li>Efisiensi energi yang berkurang</li>
          <li>Hasil penawaran negatif dari proyek dan tender pemerintah</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Konverter Semikonduktor Daya yang memiliki sertifikasi Scheme X
          menunjukkan bahwa produk ini mematuhi Standar India yang ketat untuk
          kinerja, keselamatan dan keandalan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Konverter Semikonduktor Daya?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya berada di
          bawah Peraturan Penilaian Kesesuaian BIS, 2018. Ini memastikan bahwa
          produk menjalani pengujian yang ketat, inspeksi, dan pemeriksaan
          kepatuhan sebelum memasuki pasar India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Wajib untuk semua produsen asing dan India</li>
          <li>
            Mencakup pengenalan komprehensif tentang perangkat semikonduktor
            daya, desain gate drive, dan komponen pasif.
          </li>
          <li>Pengujian produk wajib di laboratorium yang terakreditasi BIS</li>
          <li>
            Pengeluaran dari pekerjaan kota, dan proyek serta tender Pemerintah.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi memastikan bahwa Konverter Semikonduktor Daya mematuhi
          Standar India yang ketat untuk kinerja, keselamatan dan daya tahan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Konverter Semikonduktor Daya tercakup
          di bawah Peraturan Penilaian Kesesuaian BIS, 2018. Ini menunjukkan
          bahwa suatu produk akan memerlukan pengujian yang ketat, inspeksi dan
          kepatuhan di India sebelum dibawa ke pasar di sini.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk produsen India dan asing</li>
          <li>
            Mencakup berbagai aplikasi semikonduktor daya (AC-DC, DC-DC, DC-AC
            dan AC-AC)
          </li>
          <li>
            Mewajibkan sertifikasi kekuatan dan keselamatan oleh laboratorium
            yang disetujui BIS
          </li>
          <li>Mencakup audit pabrik dan sistem kualitas</li>
          <li>
            Memberikan hak untuk menggunakan Tanda Standar BIS jika produk juga
            berlisensi BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Konverter Semikonduktor Daya
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Peraturan Teknis Omnibus (OTR) 2024 yang baru untuk Konverter
          Semikonduktor Daya telah diterbitkan oleh Kementerian Industri Berat.
          Perintah OTR ini mewajibkan sertifikasi Scheme X untuk produk ini
          untuk memastikan kualitas dan keselamatan konsumen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          sertifikasi hingga tanggal 1 September 2026. Setelah tanggal batas
          ini, konverter yang tidak bersertifikat tidak dapat dibuat, dijual,
          atau diimpor di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Konverter Semikonduktor Daya
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan Produk: Mengurangi risiko kepanasan berlebih, kecelakaan
            kebakaran, dan korsleting.
          </li>
          <li>
            Efisiensi Energi: Menjamin kinerja yang dioptimalkan dan kesesuaian
            dengan standar hemat energi.
          </li>
          <li>
            Akses Pasar: OTR untuk Konverter Semikonduktor Daya memerlukan
            sertifikasi untuk akses pasar di India.
          </li>
          <li>
            Keunggulan Kompetitif: Tender pemerintah dan swasta lebih memilih
            produk bersertifikat.
          </li>
          <li>
            Kepercayaan Pelanggan: Tanda Standar BIS menunjukkan keandalan,
            keselamatan, dan kualitas.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Konverter Semikonduktor Daya
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar IS yang Relevan: Merujuk kode IS yang relevan
            untuk jenis konverter Anda.
          </li>
          <li>
            Pengujian Produk: Melakukan pengujian kinerja dan keselamatan yang
            diperlukan sesuai standar industri, di laboratorium yang
            terakreditasi BIS.
          </li>
          <li>
            Inspeksi Pabrik: Memeriksa sistem jaminan kualitas di lokasi
            produksi oleh pejabat BIS.
          </li>
          <li>
            Aplikasi & Dokumentasi: Menyediakan persyaratan teknis, buku pedoman
            kualitas dan laporan uji.
          </li>
          <li>
            Penerbitan Lisensi BIS untuk Konverter Semikonduktor Daya: Anda
            dapat menempatkan tanda BIS setelah disetujui.
          </li>
          <li>
            Kepatuhan Berkelanjutan: BIS memeriksa dan melakukan audit tidak
            terjadwal untuk kepatuhan terhadap standar.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang tidak memiliki semua model konverter semikonduktor daya
          yang disertifikasi dengan Sertifikasi BIS untuk Konverter
          Semikonduktor Daya pada tanggal 1 September 2026 menghadapi risiko:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Penjualan/impor dilarang untuk konverter tidak bersertifikat</li>
          <li>Penyitaan peralatan yang tidak patuh dan sanksi moneter</li>
          <li>
            Ini akan membuat Anda tidak memenuhi syarat untuk tender pemerintah
            atau PSU
          </li>
          <li>Ekuitas Merek secara permanen terpengaruh di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implementasi Sertifikasi BIS Scheme X untuk Konverter Semikonduktor
          Daya dalam OTR 2024 adalah langkah untuk membawa keselamatan,
          efisiensi dan kualitas ke dalam sektor energi dan elektronik di India
          yang berkembang pesat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, Importir dan Eksportir memanfaatkan proses ini dengan
          mengamankan Sertifikasi BIS untuk Konverter Semikonduktor Daya, dengan
          memperoleh Lisensi BIS untuk Konverter Semikonduktor Daya, dan
          menempatkan tanda BIS untuk Konverter Semikonduktor Daya pada produk
          mereka, menunjukkan bahwa produk mereka memenuhi sistem regulasi pasar
          lokal dan persyaratan pelanggan.
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
