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

const RotaryElectricalMachinesIndonesian = () => {
  return (
    <div className="relative w-full">
      <RotaryElectricalMachinesMetaTags />
      <RotaryElectricalMachinesBreadcrumb />
      <RotaryElectricalMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default RotaryElectricalMachinesIndonesian;

const RotaryElectricalMachinesMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Mesin Listrik Rotari";
  const description =
    "Sertifikasi BIS Scheme X untuk mesin listrik rotari, seperti Generator, dll., dan/atau perakitannya, sub-perakitan, dan komponennya, merupakan langkah regulasi penting menuju kualitas dan keselamatan peralatan industri penting";
  const keywords =
    "Sertifikasi BIS untuk Mesin Listrik Rotari, Sertifikasi BIS Scheme X untuk Mesin Listrik Rotari, Sertifikasi Scheme X untuk Mesin Listrik Rotari, BIS untuk Mesin Listrik Rotari, OTR untuk Mesin Listrik Rotari";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Listrik Rotari di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin listrik rotari di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const RotaryElectricalMachinesBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Mesin Listrik Rotari
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

const RotaryElectricalMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Listrik Rotari
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="Sertifikasi BIS Scheme X Untuk Mesin Listrik Rotari"
            title="Lisensi BIS Scheme X untuk Mesin Listrik Rotari"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Generator, motor, dan alternator sebagai mesin listrik rotari adalah
          jenis mesin penting yang digunakan dalam berbagai aktivitas penting
          seperti menjalankan industri, menghasilkan tenaga, dan bahkan memenuhi
          infrastruktur teknologi informasi dan kebutuhan lainnya di tingkat
          global. Mesin-mesin ini bekerja sama di sektor seperti tenaga dan
          transportasi, manufaktur, serta kompleks komersial karena mereka
          mengubah energi mekanik menjadi listrik atau sebaliknya. Mesin-mesin
          seperti ini sangat penting dan karenanya, kualitas, keandalan, dan
          keselamatannya penting. Di India, BIS telah mengatasi masalah ini
          dengan sertifikasi Scheme X untuk mesin listrik rotari dan
          perakitannya serta komponennya bersama dengan peralatan listrik
          lainnya.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dalam Peraturan Teknis Omnibus Order 2024, Kementerian Industri Berat
          telah menyatakan bahwa semua produsen, baik asing maupun lokal, yang
          memproduksi mesin rotari dan semua peralatan terkait lainnya, harus
          mematuhi Sertifikasi Scheme X pada tanggal 1 September 2026. Regulasi
          ini menyebutkan semua jenis mesin listrik rotari termasuk generator,
          alternator, motor sinkron dan asinkron, serta semua perakitan,
          sub-perakitan, dan komponen mesin.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini membahas pentingnya, ruang lingkup, prosedur sertifikasi,
          manfaat, dan dokumentasi terkait lainnya dari sertifikasi Scheme X
          untuk semua jenis mesin listrik rotari.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Mesin Listrik Rotari
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin listrik rotari banyak digunakan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pembangkitan dan distribusi listrik</li>
          <li>Otomasi industri dan peralatan</li>
          <li>Transportasi (rel kereta api, kapal, mobil listrik)</li>
          <li>Sektor minyak, gas, dan energi</li>
          <li>Peralatan listrik untuk penggunaan konsumen dan komersial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beberapa risiko yang mungkin terjadi tanpa sertifikasi meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Bahaya listrik, korsleting dan bahaya kebakaran</li>
          <li>Kerusakan mekanis dan downtime yang mahal</li>
          <li>Pemborosan energi</li>
          <li>Larangan dari tender pemerintah dan proyek</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi Scheme X untuk Mesin Listrik Rotari menjamin bahwa produk
          ini memenuhi standar kualitas, efisiensi dan keselamatan yang ketat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Mesin Listrik Rotari?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Listrik Rotari adalah skema
          regulasi pemerintah di bawah Peraturan Penilaian Kesesuaian BIS, 2018.
          Ini mensertifikasi barang untuk Standar India sebelum mereka memasuki
          pasar India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Mesin Listrik Rotari: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Berlaku untuk produsen India maupun asing</li>
          <li>
            Berlaku untuk motor, generator, alternator, dan mesin listrik rotari
            lainnya
          </li>
          <li>
            Jumlah pengujian produk, audit, dan validasi kepatuhan yang memadai
            adalah suatu keharusan
          </li>
          <li>Inspeksi pabrik untuk memastikan kontrol kualitas</li>
          <li>
            Memungkinkan produsen untuk mengajukan registrasi BIS berdasarkan
            sertifikasi untuk Mesin Listrik Rotari yang disebutkan di atas.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Mesin Rotari
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR untuk Mesin Listrik Rotari diumumkan oleh Kementerian Industri
          Berat pada tahun 2024, yang memerlukan sertifikasi Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          Lisensi BIS Mesin Listrik Rotari yang valid di bawah Scheme X pada
          tanggal 1 September 2026. "Ini akan menghentikan mesin listrik rotari
          tidak bersertifikat dari dijual, diimpor atau berpartisipasi dalam
          tender di seluruh negeri," kata pejabat pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Listrik Rotari
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Kepatuhan: Menghindari bahaya listrik dan mekanis
            dengan standar yang ketat.
          </li>
          <li>
            Kualitas & Keandalan: Mesin Listrik Rotari Bersertifikat berkinerja
            dengan akurasi dan presisi yang tinggi.
          </li>
          <li>
            Akses Pasar: Lisensi Mesin Listrik Rotari BIS biasanya diperlukan
            untuk pengadaan oleh badan publik.
          </li>
          <li>
            Kepercayaan Konsumen: Tanda BIS untuk Mesin Listrik Rotari
            memberikan informasi kepada pelanggan tentang kualitas produk dan
            daya tahan.
          </li>
          <li>
            Keunggulan Kompetitif: Merek/produsen bersertifikat BIS lebih
            disukai di pasar terkontrol dan untuk tender pemerintah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Mesin Listrik Rotari di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Akreditasi Scheme X untuk Mesin Listrik Rotari mencakup berbagai jenis
          seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Motor AC dan DC</li>
          <li>Generator dan alternator</li>
          <li>Turbo-generator dan hydro-generator</li>
          <li>
            Jenis khusus Mesin Rotari yang digunakan di Industri dan Utilitas
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Semua jenis ini harus memenuhi Standar India yang berlaku (kode IS)
          seperti IS 16819:2018/ISO 12100:2010 (Keselamatan Mesin Prinsip Umum
          untuk Desain - Penilaian Risiko dan Pengurangan Risiko). Semua
          varietas harus memenuhi Standar India (kode IS) yang sesuai untuk
          kualitas, keselamatan, dan efisiensi energi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Mesin Listrik Rotari
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifikasi Standar yang Relevan: Merujuk kode IS yang relevan
            untuk jenis Mesin Listrik Rotari Anda.
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
            Penerbitan Lisensi BIS untuk Mesin Listrik Rotari: Anda dapat
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
          Produsen yang tidak memiliki semua model mesin listrik rotari yang
          disertifikasi dengan Sertifikasi BIS untuk Mesin Listrik Rotari pada
          tanggal 1 September 2026 menghadapi risiko:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Penjualan/impor dilarang untuk mesin listrik rotari tidak
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
          Implementasi Sertifikasi BIS Scheme X untuk Mesin Listrik Rotari dalam
          OTR 2024 adalah langkah untuk membawa keselamatan, efisiensi dan
          kualitas ke dalam sektor industri listrik di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, Importir dan Eksportir memanfaatkan proses ini dengan
          mengamankan Sertifikasi BIS untuk Mesin Listrik Rotari, dengan
          memperoleh Lisensi BIS untuk Mesin Listrik Rotari, dan menempatkan
          tanda BIS untuk Mesin Listrik Rotari pada produk mereka, menunjukkan
          bahwa produk mereka memenuhi sistem regulasi pasar lokal dan
          persyaratan pelanggan.
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
