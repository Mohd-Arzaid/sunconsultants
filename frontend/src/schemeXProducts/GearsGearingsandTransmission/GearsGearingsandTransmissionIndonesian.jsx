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
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
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

const GearsGearingsandTransmissionIndonesian = () => {
  return (
    <div className="relative w-full">
      <GearsGearingsandTransmissionMetaTags />
      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default GearsGearingsandTransmissionIndonesian;

const GearsGearingsandTransmissionMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi";
  const description =
    "Sertifikasi BIS Scheme X untuk roda gigi dan sistem gigi, roda bergigi, sproket rantai, elemen transmisi, sekrup bola atau rol, kotak gigi dan pengubah kecepatan, merupakan tonggak regulasi penting bagi sektor mesin industri";
  const keywords =
    "Sertifikasi BIS untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi, Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi, Sertifikasi Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi, BIS untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi, OTR untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk roda gigi, sistem gigi, dan elemen transmisi di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Roda Gigi, Sistem Gigi, dan Elemen
                    Transmisi
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

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen
          Transmisi
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="Sertifikasi BIS Scheme X Untuk Roda Gigi Sistem Gigi Dan Elemen Transmisi"
            title="Lisensi BIS Scheme X untuk roda gigi dan sistem gigi, roda bergigi, sproket rantai"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dalam dunia industri yang terus berubah, keselamatan dan kualitas
          komponen mekanis sangat penting. Menurut Bureau of Indian Standards,
          semua mesin dan komponen listrik yang diproduksi di India harus
          mematuhi keselamatan dan standar yang ditetapkan oleh BIS dan
          dijelaskan dalam Perintah Keselamatan Mesin dan Peralatan Listrik
          (Omnibus Technical Regulation) Order, 2024. Perintah ini mencakup
          modul mekanis, komponen dan komponen perakitan seperti roda gigi,
          elemen sistem gigi, dan berbagai bagian transmisi yang penting untuk
          fungsi mesin di industri manapun.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Semua produsen, domestik maupun asing, diwajibkan untuk memenuhi
          persyaratan standar Sertifikasi Scheme X pada tanggal 1 September 2026
          sesuai yang ditetapkan oleh perintah dan diinstitusikan oleh
          Kementerian Industri Berat. Semua produsen di industri roda gigi dan
          kotak gigi serta semua elemen transmisi terkait mereka perlu mematuhi
          regulasi ini agar mereka dapat mengakses pasar dan menetapkan standar
          untuk industri.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini berisi semua informasi penting untuk sertifikasi roda gigi,
          kotak gigi, dan penggabungan bagian transmisi terkait beserta mengapa
          hal ini berharga, jangkauannya, keuntungan sertifikasi, dan dokumen
          yang diperlukan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa Scheme X Penting untuk Roda Gigi, Sistem Gigi, dan Elemen
          Transmisi
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagian mekanis ini penting dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mobil, truk, dan kereta api</li>
          <li>Peralatan penerbangan dan pertahanan</li>
          <li>Mesin manufaktur dan robotika</li>
          <li>Sistem Energi dan Pembangkit Listrik</li>
          <li>Kelautan (industri rekayasa berat dan ringan)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa BIS untuk Roda Gigi, Sistem Gigi dan Elemen Transmisi, bahaya
          sangat tinggi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Kegagalan roda gigi yang mengakibatkan kerusakan dan downtime yang
            mahal
          </li>
          <li>Risiko kesehatan dalam transportasi dan industri berat</li>
          <li>Transfer energi dan disipasi energi yang tidak efektif</li>
          <li>
            Aksesibilitas terbatas terhadap tender publik dan peluang pengadaan
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Akhirnya, sertifikasi Scheme X untuk Roda Gigi, Sistem Gigi, dan
          Elemen Transmisi memberikan peningkatan daya tahan, meminimalkan
          risiko operasional dan konsisten dengan standar domestik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi dan
          Elemen Transmisi?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi, dan Elemen
          Transmisi adalah bagian dari Peraturan Penilaian Kesesuaian BIS, 2018.
          Ini mendefinisikan tolok ukur ketat untuk desain, kualitas material,
          dan kinerja operasional.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama Sertifikasi Scheme X adalah:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk semua produsen (India dan luar negeri)</li>
          <li>Cocok untuk berbagai roda gigi, poros dan bagian transmisi</li>
          <li>Melakukan pengujian produk di laboratorium yang disetujui BIS</li>
          <li>Mencakup audit pabrik untuk memvalidasi kontrol kualitas</li>
          <li>
            Berhak menggunakan Tanda Standar BIS setelah produk disertifikasi
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR untuk Roda Gigi, Sistem Gigi, dan Elemen Transmisi
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat mengadopsi Peraturan Teknis Omnibus (OTR)
          2024 tentang Roda Gigi, Sistem Gigi, dan Elemen Transmisi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanggal Kepatuhan: Semua produsen dan importir diwajibkan untuk
          memiliki sertifikasi pada tanggal 1 September 2026. Setelah tanggal
          ini, barang yang tidak bersertifikat tidak lagi dapat dibuat, diimpor
          atau dijual di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Roda Gigi, Sistem Gigi dan Elemen
          Transmisi
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan dan Keandalan: Menghindari kegagalan tanpa pengawasan
            dari aplikasi sistem vital.
          </li>
          <li>
            Daya Saing Pasar: Perusahaan bersertifikat menikmati preferensi
            dalam tender publik dan swasta.
          </li>
          <li>
            Kepercayaan Pelanggan: Pembeli memiliki keyakinan pada produk dengan
            pengakuan BIS resmi.
          </li>
          <li>
            Kepatuhan Hukum: Tidak ada penalti dengan OTR untuk Roda Gigi,
            Sistem Gigi dan Bagian Transmisi.
          </li>
          <li>
            Masuk ke Pasar Global: Memungkinkan produsen asing untuk memasuki
            pasar India dengan mudah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Roda Gigi dan Bagian Transmisi yang Termasuk
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X berlaku untuk berbagai Roda Gigi, Sistem Gigi Dan
          Elemen Transmisi seperti berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Roda gigi spur, heliks, bevel dan worm wheel</li>
          <li>Poros roda gigi dan kopling</li>
          <li>Kotak gigi dan bagian transmisi</li>
          <li>Komponen penggerak rantai dan sabuk</li>
          <li>
            Roda gigi yang digunakan dalam dirgantara dan robotika, mobil mewah,
            sepeda motor.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Semua jenis harus sesuai dengan Standar India (kode IS) seperti IS
          16819:2018/ISO 12100:2010 (Keselamatan Mesin Prinsip Umum untuk
          Desain- Penilaian Risiko dan Pengurangan Risiko). Setiap jenis produk
          harus sesuai dengan Standar India yang sesuai sehubungan dengan desain
          dan kinerjanya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur Sertifikasi BIS untuk Roda Gigi, Sistem Gigi dan Elemen
          Transmisi
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identifikasi Standar yang Berlaku: Konsultasikan kode IS yang berlaku
          untuk produk roda gigi / transmisi Anda.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Pengujian Produk: Lakukan pengujian material dan kinerja di
            laboratorium yang terakreditasi BIS.
          </li>
          <li>Audit Pabrik: BIS datang untuk audit Q.S. di lokasi produksi.</li>
          <li>
            Ajukan Dokumentasi: Bagikan detail teknis, dokumen pengujian, dan
            manual kualitas.
          </li>
          <li>
            Pemberian Lisensi: BIS, setelah memeriksa dokumen untuk akurasi,
            memberikan sertifikasi dan mengizinkan penggunaan Tanda Standar.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit dan pengujian ulang yang sering untuk
            mempertahankan validitas sertifikasi.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalti untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan terhadap Sertifikasi BIS untuk Roda Gigi, Sistem Gigi
          dan Elemen Transmisi di bawah OTR untuk Roda Gigi, Sistem Gigi dan
          Elemen Transmisi akan mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan penjualan dan fabrikasi item yang tidak bersertifikat
          </li>
          <li>Penyitaan barang dan denda moneter</li>
          <li>Tidak memenuhi syarat untuk tender dan kontrak pemerintah</li>
          <li>Kerugian reputasi dalam jangka panjang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Roda Gigi, Sistem Gigi dan Elemen
          Transmisi, yang diberitahukan di bawah OTR untuk Roda Gigi, Sistem
          Gigi dan Elemen Transmisi (2024) akan menjadi langkah kunci menuju
          peningkatan standar kualitas dan keselamatan struktur rekayasa dan
          manufaktur di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen dan importir Solusi Roda Gigi, Sistem Gigi, dan Transmisi
          Daya yang mencari penjualan di pasar India akan menemukan bahwa
          keuntungan mereka akan meningkat dan akan membuka pintu untuk
          keuntungan pasar dengan menerapkan sertifikasi Scheme X untuk Roda
          Gigi, Sistem Gigi, dan Sistem Transmisi Daya.
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
