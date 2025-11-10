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

const RubberAndPlasticsMachineryIndonesian = () => {
  return (
    <div className="relative w-full">
      <RubberAndPlasticsMachineryMetaTags />

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default RubberAndPlasticsMachineryIndonesian;

const RubberAndPlasticsMachineryMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik";
  const description =
    "Sertifikasi BIS Scheme X wajib untuk mesin karet dan plastik, perakitannya, sub-perakitan, dan komponennya di bawah Scheme X untuk memastikan kualitas, keamanan, dan kepercayaan pelanggan";
  const keywords =
    "Sertifikasi BIS untuk Mesin Karet dan Plastik, Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik, Sertifikasi Scheme X untuk Mesin Karet dan Plastik, BIS untuk Mesin Karet dan Plastik, OTR untuk Mesin Karet dan Plastik";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin karet dan plastik di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Mesin Karet dan Plastik
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

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Karet dan Plastik
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            title="Lisensi BIS Scheme X untuk Mesin Karet dan Plastik"
            alt="Sertifikasi BIS Scheme X Untuk Mesin Karet Dan Plastik"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sektor industri India berubah dengan cepat, yang mengarah pada
          peningkatan permintaan akan mesin yang terstandarisasi, aman, dan
          berkinerja tinggi. Secara khusus, mesin untuk bekerja dengan karet dan
          plastik sangat penting bagi berbagai industri, termasuk otomotif,
          konstruksi, pengemasan, dan barang konsumen. Untuk lebih meningkatkan
          keamanan produk, perlindungan konsumen produk, dan untuk memfasilitasi
          jaminan kualitas, Bureau of Indian Standards (BIS) telah menetapkan
          kerangka regulasi yang mewajibkan sertifikasi untuk Kepatuhan Scheme
          X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat, di bawah Peraturan Teknis Omnibus (OTR)
          Order, 2024, mewajibkan semua produsen, baik domestik maupun
          internasional, untuk memperoleh sertifikasi BIS di bawah Scheme X
          untuk kategori mesin tertentu. Ini mencakup semua jenis mesin untuk
          bekerja dengan karet dan plastik serta perakitannya, sub-perakitan,
          dan komponennya.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini menguraikan pentingnya dan relevansi Sertifikasi Scheme X,
          proses sertifikasi, dan manfaat yang terkait dengan dokumentasi yang
          diperlukan untuk mesin karet dan plastik serta semua perakitannya,
          sub-perakitan, dan komponennya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Mesin Karet dan Plastik
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin Karet dan Plastik banyak digunakan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Manufaktur komponen otomotif (ban, selang, seal, dashboard)</li>
          <li>Pengemasan plastik dan produk konsumen</li>
          <li>Perbekalan medis dan pengemasan farmasi</li>
          <li>Bahan bangunan konstruksi dan infrastruktur</li>
          <li>Komponen listrik dan elektronik</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak adanya BIS untuk Mesin Karet dan Plastik, industri mungkin
          menghadapi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Ketidakefisienan operasional dan kegagalan yang sering terjadi
          </li>
          <li>Bahaya keselamatan bagi operator dan pengguna akhir</li>
          <li>Hasil produk berkualitas rendah</li>
          <li>Diskualifikasi untuk tender pemerintah atau proyek besar</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik memastikan
          bahwa mesin mematuhi Standar India yang ketat, membuat mesin lebih
          aman, lebih tahan lama dan siap pasar.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Mesin Karet dan Plastik?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik di India berada
          di bawah Peraturan Penilaian Kesesuaian BIS, 2018. Ini menetapkan
          kriteria kinerja dan keselamatan untuk mesin pengolahan karet dan
          plastik.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Mesin Karet dan Plastik: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Wajib untuk produsen India maupun asing</li>
          <li>
            Mencakup berbagai macam mesin karet dan plastik sesuai dengan kode
            IS yang diberitahukan
          </li>
          <li>
            Memerlukan pengujian produk, audit proses manufaktur dan pengawasan
            berkelanjutan.
          </li>
          <li>Penggunaan tanda standar BIS ketika disertifikasi.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikat ini menjamin keselamatan mesin, efisiensi energi dan
          produksi yang andal untuk industri maupun pengguna akhir.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Mesin Karet dan Plastik
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR untuk Mesin Karet dan Plastik diumumkan oleh Kementerian Industri
          Berat pada tahun 2024, yang memerlukan sertifikasi Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          Lisensi BIS Mesin Karet dan Plastik yang valid di bawah Scheme X pada
          tanggal 1 September 2026. "Ini akan menghentikan mesin karet dan
          plastik tidak bersertifikat dari dibuat, diimpor atau dijual di
          India," kata pejabat pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Karet dan Plastik
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Jaminan Kualitas: Mematuhi Standar India tentang kinerja dan daya
            tahan.
          </li>
          <li>
            Daya Saing Pasar: Produk bersertifikat diprioritaskan untuk
            pengadaan sektor publik maupun swasta.
          </li>
          <li>
            Kepercayaan Pelanggan: Ada kepercayaan yang lebih besar dari pembeli
            ketika mereka membeli mesin dengan Sertifikasi BIS untuk Mesin Karet
            dan Plastik.
          </li>
          <li>
            Kepatuhan Hukum: Anda tidak akan dikenakan sanksi atau pembatasan
            setelah mematuhi OTR untuk Mesin Karet dan Plastik.
          </li>
          <li>
            Keunggulan Global: OEM internasional dengan sertifikasi menemukan
            jalan ke pasar India lebih mudah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mesin Karet dan Plastik yang Dicakup di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X untuk Mesin Karet dan Plastik mencakup berbagai
          macam peralatan, termasuk:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mesin untuk pencetakan dengan injeksi</li>
          <li>Ekstruder dan mesin pembentuk tiup</li>
          <li>Pabrik pencampur karet & mixer internal</li>
          <li>Mesin kalender</li>
          <li>Press untuk Pencetakan Kompresi</li>
          <li>Mesin daur ulang dan granulasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap kategori harus mematuhi Standar India yang berlaku (kode IS)
          seperti IS/ISO 20430: 2020 (Mesin Plastik dan Karet-Mesin Pencetakan
          Injeksi- Persyaratan Keselamatan). Setiap jenis mesin harus memenuhi
          Standar India yang berlaku dalam hal keselamatan, kinerja, dan
          keandalan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Mesin Karet dan Plastik
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Relevan: Pilih kode IS yang relevan dengan
            jenis mesin.
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
            Penerbitan Lisensi BIS untuk Mesin Karet dan Plastik: Anda dapat
            menempatkan tanda BIS setelah disetujui.
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
          Produsen yang tidak memiliki semua model mesin karet dan plastik yang
          disertifikasi dengan Sertifikasi BIS untuk Mesin Karet dan Plastik
          pada tanggal 1 September 2026 menghadapi risiko:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Penjualan/impor dilarang untuk mesin karet dan plastik tidak
            bersertifikat
          </li>
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
          Implementasi Sertifikasi BIS Scheme X untuk Mesin Karet dan Plastik
          dalam OTR 2024 adalah langkah untuk membawa keselamatan, efisiensi dan
          kualitas ke dalam sektor industri di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, Importir dan Eksportir memanfaatkan proses ini dengan
          mengamankan Sertifikasi BIS untuk Mesin Karet dan Plastik, dengan
          memperoleh Lisensi BIS untuk Mesin Karet dan Plastik, dan menempatkan
          tanda BIS untuk Mesin Karet dan Plastik pada produk mereka,
          menunjukkan bahwa produk mereka memenuhi sistem regulasi pasar lokal
          dan persyaratan pelanggan.
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
