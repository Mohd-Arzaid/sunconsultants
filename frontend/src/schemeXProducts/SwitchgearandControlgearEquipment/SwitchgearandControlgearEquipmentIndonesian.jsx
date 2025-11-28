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

const SwitchgearandControlgearEquipmentIndonesian = () => {
  return (
    <div className="relative w-full">
      <SwitchgearandControlgearEquipmentMetaTags />
      <SwitchgearandControlgearEquipmentBreadcrumb />
      <SwitchgearandControlgearEquipmentMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentIndonesian;

const SwitchgearandControlgearEquipmentMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear hingga 1000 Volt";
  const description =
    "Sertifikasi BIS Scheme X untuk peralatan switchgear dan controlgear hingga 1000V dan perakitannya, sub-perakitan, dan komponennya, merupakan kewajiban untuk memastikan kualitas dan keselamatan di India";
  const keywords =
    "Sertifikasi BIS untuk Peralatan Switchgear dan Controlgear, Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear, Sertifikasi Scheme X untuk Peralatan Switchgear dan Controlgear, BIS untuk Peralatan Switchgear dan Controlgear, OTR untuk Peralatan Switchgear dan Controlgear";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear hingga 1000 Volt di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk peralatan switchgear dan controlgear hingga 1000V di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                    hingga 1000 Volt
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

const SwitchgearandControlgearEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Peralatan Switchgear dan Controlgear hingga 1000
          Volt
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="Sertifikasi BIS Scheme X Untuk Peralatan Switchgear Dan Controlgear Hingga 1000 Volt"
            title="Lisensi BIS Scheme X untuk Peralatan Switchgear dan Controlgear"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Di era otomatisasi dan elektrifikasi ini, sakelar instrumen dan
          sakelar kontrol adalah komponen integral dari sistem listrik yang aman
          dan efektif. Dari kabel rumah hingga sistem industri yang canggih,
          perangkat ini mengelola perlindungan, kontrol, dan isolasi aliran
          daya. Karena posisi penting yang dimiliki perangkat ini, Bureau of
          Indian Standards (BIS) telah menetapkan sertifikasi wajib untuk
          perangkat tersebut di bawah Scheme X untuk memastikan mereka memenuhi
          tolok ukur keselamatan dan kinerja yang ditetapkan di India.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat, di bawah Peraturan Teknis Omnibus, 2024,
          telah memberlakukan sertifikasi BIS wajib untuk semua peralatan
          switchgear dan controlgear (≤ 1000V) yang dijual, diimpor, dan
          diproduksi di India mulai 1 September 2026. Untuk mengatasi peralatan
          listrik yang tidak patuh dan tidak aman, serta untuk meningkatkan
          standar produk yang ditawarkan di pasar, BIS, di bawah Sertifikasi
          Scheme X, telah membuat sertifikasi wajib untuk perangkat ini yang
          beroperasi pada atau di bawah 1000 volt.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini menguraikan prosedur sertifikasi beserta kelebihannya, ruang
          lingkup, tujuan, bukti pendukung, dan dokumentasi penting, yang vital
          untuk sertifikasi Scheme X untuk semua jenis peralatan switchgear dan
          controlgear yang beroperasi (atau)
          perakitannya/sub-perakitan/komponennya yang beroperasi pada tegangan
          tidak melebihi 1000 volt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Peralatan Switchgear dan Controlgear
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Switchgear dan controlgear hingga 1000 volt sangat penting dalam:
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Instalasi distribusi listrik domestik dan komersial</li>
          <li>Sistem manajemen daya untuk industri</li>
          <li>Fasilitas energi terbarukan (pabrik surya/angin)</li>
          <li>Proyek infrastruktur publik</li>
          <li>
            Aplikasi kritis keselamatan yang memerlukan perlindungan sirkuit
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa sertifikasi yang tepat, risiko meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Risiko sengatan listrik atau kebakaran</li>
          <li>Kerusakan peralatan dan downtime yang mahal</li>
          <li>Pelanggaran norma keselamatan India</li>
          <li>
            Larangan dari tender dan proyek yang memerlukan peralatan
            bersertifikat
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi Scheme X untuk Peralatan Switchgear dan Controlgear
          memastikan produk ini memenuhi standar kinerja, keselamatan, dan daya
          tahan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Switchgear dan Controlgear?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan Controlgear
          adalah bagian dari Peraturan Penilaian Kesesuaian BIS, 2018. Ini
          memberlakukan pengujian produk wajib, inspeksi pabrik, dan kepatuhan
          dengan Standar India yang berlaku.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Switchgear dan Controlgear: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Berlaku untuk semua produsen India maupun asing</li>
          <li>
            Mencakup berbagai perangkat: pemutus sirkuit, pemutus sambungan,
            sakelar pemutus sambungan, unit kombinasi sekering dan perangkat
            kontrol hingga 1000V.
          </li>
          <li>
            Memerlukan pengujian laboratorium di fasilitas yang diakui BIS
          </li>
          <li>Termasuk audit sistem produksi dan kualitas</li>
          <li>
            Memberikan hak untuk menggunakan Tanda Standar pada produk setelah
            sertifikasi
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Peralatan Switchgear dan Controlgear
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR untuk Peralatan Switchgear dan Controlgear diumumkan oleh
          Kementerian Industri Berat pada tahun 2024, yang memerlukan
          sertifikasi Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          Lisensi BIS Peralatan Switchgear dan Controlgear yang valid di bawah
          Scheme X pada tanggal 1 September 2026. "Ini akan menghentikan
          peralatan switchgear dan controlgear tidak bersertifikat dari dijual,
          diimpor atau diproduksi di India," kata pejabat pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Switchgear dan Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan Listrik: Melindungi dari korsleting, kelebihan beban,
            dan bahaya kebakaran potensial.
          </li>
          <li>
            Kepatuhan Regulasi: Wajib oleh OTR untuk Perangkat Switchgear dan
            Controlgear.
          </li>
          <li>
            Penerimaan Pasar: Produk terdaftar dapat diterima untuk semua proyek
            pemerintah dan swasta.
          </li>
          <li>
            Kepercayaan Pelanggan: Tanda Standar BIS pada Switchgear dan
            Controlgear memberikan keyakinan kualitas dan keselamatan kepada
            pelanggan.
          </li>
          <li>
            Keunggulan Kompetitif: Meningkatkan reputasi merek dan membuka pintu
            untuk bisnis baru.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Switchgear dan Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar India yang Relevan: Identifikasi kode IS yang
            terkait dengan switchgear dan controlgear hingga 1000 volt.
          </li>
          <li>
            Pengujian Produk: Melakukan pengujian keselamatan, kinerja, dan daya
            tahan di laboratorium yang disetujui BIS.
          </li>
          <li>
            Audit Pabrik: Inspektur BIS memverifikasi pabrik dan sistem kontrol
            kualitas.
          </li>
          <li>
            Pengajuan Dokumentasi: Semua spesifikasi detail, laporan uji dan
            dukungan file kepatuhan.
          </li>
          <li>
            Penerbitan Lisensi BIS: Jika diterima, BIS mengeluarkan lisensi
            untuk penggunaan Tanda Standar.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit terhadap standar dan pengujian produk
            pada interval reguler memastikan sertifikasi tetap valid.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan terhadap Sertifikasi BIS untuk Peralatan Switchgear dan
          Controlgear di bawah skema OTR memiliki konsekuensi berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan pembuatan, impor atau penjualan produk apa pun yang tidak
            bersertifikat
          </li>
          <li>Peralatan yang tidak patuh akan disita; dan denda.</li>
          <li>Ketidakmampuan dalam tender pemerintah</li>
          <li>Merugikan hubungan bisnis dan kepercayaan di pasar.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implementasi Sertifikasi BIS Scheme X untuk Peralatan Switchgear dan
          Controlgear dalam OTR 2024 adalah langkah untuk menjamin manajemen
          daya yang aman, andal dan efisien di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen dan importir, bagi siapa Scheme X sertifikasi Peralatan
          Switchgear dan Controlgear tidak hanya kewajiban hukum tetapi juga
          investasi strategis, memastikan akses ke pasar, kredibilitas merek dan
          kepercayaan pelanggan secara umum.
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
