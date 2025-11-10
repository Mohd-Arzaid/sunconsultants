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

const SwitchgearandControlgearEquipmentabove1000VoltsIndonesian = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentabove1000VoltsMetaTags />
      <SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb />
      <SwitchgearandControlgearEquipmentabove1000VoltsMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentabove1000VoltsIndonesian;

const SwitchgearandControlgearEquipmentabove1000VoltsMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear di Atas 1000 Volt";
  const description =
    "Sertifikasi BIS Scheme X untuk peralatan switchgear dan controlgear di atas 1000V. Jelajahi kepatuhan wajib, pengujian, langkah proses, manfaat, dan lainnya.";
  const keywords =
    "Sertifikasi BIS untuk Peralatan Switchgear dan Controlgear, Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear, Sertifikasi Scheme X untuk Peralatan Switchgear dan Controlgear, BIS untuk Peralatan Switchgear dan Controlgear, OTR untuk Peralatan Switchgear dan Controlgear";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear di Atas 1000 Volt di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Peralatan Switchgear dan Controlgear
                    di Atas 1000 Volt
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

const SwitchgearandControlgearEquipmentabove1000VoltsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear di
          Atas 1000 Volt
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
            alt="Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear di Atas 1000 Volt"
            title="Lisensi BIS untuk peralatan switchgear melebihi 1000 volt"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Switchgear dan controlgear tegangan tinggi terintegrasi dengan mulus
          dengan distribusi energi dan proses operasional dalam upaya
          elektrifikasi peradaban kontemporer yang terus berkembang.
          Sistem-sistem ini dirancang untuk memastikan kontrol dan distribusi
          listrik yang aman lebih dari 1000 volt dan sangat berharga di area
          kritis permintaan daya untuk sistem manajemen risiko dan kontinuitas
          daya. Dengan meningkatnya kepedulian terhadap keselamatan dan
          standardisasi peralatan, Bureau of Indian Standards (BIS) telah
          mengambil langkah konkret untuk mengontrol industri dengan Sertifikasi
          Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Peraturan Teknis Omnibus (OTR) yang merupakan bagian dari
          undang-undang ini, telah membuat Sertifikasi Scheme X menjadi wajib
          bagi semua produsen peralatan tegangan tinggi skematik untuk digunakan
          di sektor energi dan industri. Produsen-produsen ini, baik domestik
          maupun internasional, akan tunduk pada peraturan ini mulai dari
          tanggal 1 September 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini mencakup semua informasi yang diperlukan terkait sertifikasi
          Scheme X untuk semua jenis peralatan switchgear dan controlgear yang
          beroperasi pada tegangan melebihi 1000 volt dan (atau) perakitannya,
          sub-perakitan, komponennya, pentingnya, ruang lingkup, proses
          sertifikasi, keuntungan, dan dokumentasi yang diperlukan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS untuk Switchgear dan Controlgear Penting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Switchgear dan controlgear tegangan tinggi banyak digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fasilitas pembangkit listrik</li>
          <li>Gardu transmisi dan distribusi</li>
          <li>Sistem elektrifikasi metro dan kereta api</li>
          <li>Minyak & gas dan industri berat</li>
          <li>Taman energi terbarukan (surya, angin, hidro)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa sertifikasi yang tepat, risiko meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Bahaya kebakaran dan kecelakaan busur api</li>
          <li>Kerusakan peralatan yang menyebabkan pemadaman listrik meluas</li>
          <li>Pelanggaran standar keselamatan India</li>
          <li>Diskualifikasi dari kontrak pemerintah dan swasta skala besar</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi Scheme X adalah jaminan bahwa sistem penting diisolasi
          sesuai dengan norma keselamatan & kualitas yang paling ketat. Ini juga
          berlaku untuk perakitan (BS8867) yang terkait dengan jenis peralatan
          ini yang beroperasi pada tegangan di atas 1000V sesuai kebutuhan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk switchgear dan controlgear?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS Scheme X ditetapkan di bawah Peraturan Penilaian
          Kesesuaian BIS, 2018, untuk memastikan bahwa pengujian, inspeksi dan
          perizinan switchgear dan controlgear diperlukan sebelum produk dapat
          masuk ke pasar India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk perusahaan India dan asing</li>
          <li>
            Mencakup semua switchgear dan controlgear tegangan tinggi pada atau
            di atas 1000 volt
          </li>
          <li>Memerlukan pengujian di laboratorium yang terakreditasi BIS</li>
          <li>Audit pabrik dan sistem kualitas termasuk</li>
          <li>
            Menyediakan Lisensi BIS untuk menggunakan Tanda Standar pada
            peralatan yang ditentukan
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR untuk Peralatan Switchgear dan Controlgear
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat memperkenalkan Peraturan Teknis Omnibus
          (OTR) untuk Peralatan Switchgear dan Controlgear pada tahun 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir harus bersertifikat BIS pada
          tanggal 1 September 2026. Setelah tanggal ini, peralatan yang tidak
          disetujui tipe tidak dapat dibuat, dijual atau diimpor di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Switchgear dan Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan Listrik – Melindungi dari kesalahan, busur api, dan
            kerusakan sistem.
          </li>
          <li>
            Kepatuhan Regulasi – Persyaratan wajib untuk masuk pasar di bawah
            OTR.
          </li>
          <li>
            Akses Pasar – Produk bersertifikat memenuhi syarat untuk proyek
            infrastruktur publik dan swasta.
          </li>
          <li>
            Kredibilitas & Kepercayaan – Tanda Standar BIS mencerminkan
            kepatuhan terhadap kualitas dan keandalan.
          </li>
          <li>
            Efisiensi Operasional – Memastikan kinerja jaringan tegangan tinggi
            yang kuat dan tidak terputus
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur Sertifikasi BIS untuk Switchgear dan Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar – Cari tahu standar India yang relevan untuk
            produk Anda.
          </li>
          <li>
            Pengujian Produk – Lakukan semua pengujian kinerja dan keselamatan
            yang diperlukan di laboratorium yang disetujui BIS.
          </li>
          <li>
            Pemeriksaan Pabrik – Auditor BIS memastikan proses dan kontrol
            kualitas di pabrik.
          </li>
          <li>
            Pengajuan Dokumentasi – Ajukan laporan uji; spesifikasi standar;
            catatan kepatuhan.
          </li>
          <li>
            Pemberian Lisensi: BIS akan memberikan Lisensi untuk menggunakan
            Tanda Standar.
          </li>
          <li>
            Pemantauan Pasca-Sertifikasi: Inspeksi berkelanjutan dan pemeriksaan
            mendadak menjamin kepatuhan.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses ini berlaku sama untuk semua jenis peralatan switchgear dan
          controlgear yang beroperasi pada tegangan melebihi 1000 volt dan
          (atau) perakitannya, sub-perakitan, komponennya.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan untuk disertifikasi di bawah model OTR dapat mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan menjual, mengimpor atau memproduksi peralatan yang tidak
            bersertifikat
          </li>
          <li>Penyitaan barang dan denda berat</li>
          <li>Larangan untuk tender dan kontrak pemerintah</li>
          <li>
            Kerusakan Reputasi dan Finansial: Kerusakan reputasi dan finansial
            yang signifikan
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Scheme X, yang diwajibkan di bawah OTR 2024,
          memastikan bahwa infrastruktur tenaga tegangan tinggi India dibangun
          di atas peralatan yang aman, andal, dan patuh. Bagi produsen dan
          importir, mencapai sertifikasi tidak hanya tentang memenuhi
          peraturan—ini tentang mendapatkan kepercayaan pelanggan, membuka
          peluang pasar, dan mendukung pertumbuhan energi dan infrastruktur
          India.
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
