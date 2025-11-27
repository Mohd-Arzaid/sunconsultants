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

const PackingMachineryIndonesian = () => {
  return (
    <div className="relative w-full">
      <PackingMachineryIndonesianMetaTags />

      <PackingMachineryBreadcrumb />
      <PackingMachineryMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default PackingMachineryIndonesian;

const PackingMachineryIndonesianMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Mesin Pengemasan dan Perakitannya";
  const description =
    "Sertifikasi BIS Scheme X untuk semua jenis mesin untuk mengisi, menutup, menyegel, melabeli botol, mengemas atau membungkus, dan/atau perakitannya, sub-perakitan, dan komponennya, merupakan langkah penting menuju standardisasi keselamatan dan kualitas di sektor manufaktur India";
  const keywords =
    "Sertifikasi BIS untuk Mesin Pengemasan, Sertifikasi BIS Scheme X untuk Mesin Pengemasan, Sertifikasi Scheme X untuk Mesin Pengemasan, BIS untuk Mesin Pengemasan, OTR untuk Mesin Pengemasan";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Pengemasan di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin pengemasan di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const PackingMachineryBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Mesin Pengemasan
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

const PackingMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const PackingMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Pengemasan
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="Lisensi BIS Scheme X untuk Mesin Pengemasan"
            alt="Sertifikasi BIS Scheme X Untuk Mesin Pengemasan"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin pengemasan sangat penting bagi industri di sektor makanan,
          minuman, farmasi, kimia, barang konsumen, dan logistik. Mesin-mesin
          ini memastikan pengemasan produk yang tepat, aman dan berkualitas.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan keselamatan, keandalan & profitabilitas, BIS (Bureau
          of Indian Standards) telah membuat Sertifikasi BIS Scheme X untuk
          Mesin Pengemasan menjadi wajib. Sertifikasi ini diberikan untuk
          menjamin bahwa semua mesin pengemasan baik yang dijual di India maupun
          yang diimpor ke India, mematuhi standar kualitas nasional yang
          berlaku.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam postingan ini, kami akan menjelaskan signifikansi Sertifikasi
          Scheme X untuk Mesin Pengemasan, Peran OTR untuk Mesin Pengemasan dan
          proses untuk mendapatkan Lisensi BIS serta Tanda Standar BIS untuk
          Mesin Pengemasan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Mesin Pengemasan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin pengemasan digunakan di semua bisnis untuk hal-hal berikut:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pengemasan Makanan dan Minuman</li>
          <li>Obat-obatan dan produk medis</li>
          <li>Pengemasan yang digunakan di industri kimia dan industri</li>
          <li>Produk konsumen dan ritel</li>
          <li>Solusi pengemasan untuk pasar ekspor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa adanya BIS untuk Mesin Pengemasan: Produk yang tidak
          bersertifikat BIS dapat menyebabkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kegagalan dalam pengemasan, integritas produk dan kontaminasi</li>
          <li>Bahaya keselamatan di segmen makanan dan farmasi</li>
          <li>Operasi yang tidak efisien dan downtime</li>
          <li>Kegagalan mengikuti aturan pembelian pemerintah</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS pada Mesin Pengemasan menjamin pembeli akan Kualitas,
          Keselamatan dan umur panjangnya.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Mesin Pengemasan?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Mesin Pengemasan adalah bagian II dari sertifikasi Scheme X, di bawah
          Peraturan Penilaian Kesesuaian BIS 2018 dan kepatuhan terhadap ini
          wajib bagi produsen India maupun asing.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Mesin Pengemasan: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Cocok untuk mesin pengemasan apa pun (manual, semi-otomatis &
            otomatis)
          </li>
          <li>
            Perlu menguji produk, auditor untuk pabrik dan mengontrol kualitas
          </li>
          <li>Wajib untuk penjualan dan impor di India</li>
          <li>
            Memberikan izin untuk menggunakan tanda BIS untuk Mesin Pengemasan
            pada peralatan yang disertifikasi
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Mesin Pengemasan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR untuk Mesin Pengemasan diumumkan oleh Kementerian Industri Berat
          pada tahun 2024, yang memerlukan sertifikasi Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua mesin pengemasan harus dilengkapi dengan Sertifikat
          BIS Scheme X dan semua mesin pengemasan harus mendapatkan Lisensi BIS
          untuk Mesin Pengemasan pada tanggal 1 September 2026. "Ini akan
          menghentikan mesin pengemasan tidak bersertifikat dari dijual, diimpor
          atau berpartisipasi dalam tender di seluruh negeri," kata pejabat
          pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Pengemasan
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Kebersihan: Mesin pengemasan yang bersertifikat juga
            menghindari masalah kontaminasi (makanan dan farmasi).
          </li>
          <li>
            Jaminan Kualitas: Menjaga mesin berjalan dengan lancar dan efisien.
          </li>
          <li>
            Akses Pasar: Lisensi Mesin Pengemasan BIS biasanya diperlukan untuk
            pengadaan oleh badan publik.
          </li>
          <li>
            Kepercayaan Konsumen: Tanda BIS untuk Mesin Pengemasan memberikan
            informasi kepada pelanggan tentang kualitas produk dan daya tahan.
          </li>
          <li>
            Keunggulan Kompetitif: Merek/produsen bersertifikat BIS lebih
            disukai di pasar terkontrol dan untuk tender pemerintah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Mesin Pengemasan di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Akreditasi Scheme X untuk Mesin Pengemasan mencakup berbagai jenis
          seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mesin pengemasan makanan dan minuman</li>
          <li>Mesin pengemasan blister dan strip untuk farmasi</li>
          <li>Mesin pembungkus, penyegel, dan pengisi</li>
          <li>Mesin karton dan pelabelan</li>
          <li>Sistem pengemasan vakum dan shrink</li>
          <li>Mesin pengemasan curah dan industri</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap jenis mesin pengemasan harus memenuhi persyaratan Standar India
          yang sesuai (kode IS) termasuk IS 16819:2018/ISO 12100:2010
          (Keselamatan Mesin Prinsip Umum untuk Desain - Penilaian Risiko dan
          Pengurangan Risiko).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jenis mesin harus memenuhi Standar India yang sesuai untuk kinerja,
          keselamatan, kebersihan dan efisiensi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Mesin Pengemasan
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifikasi Standar yang Relevan: Merujuk kode IS yang relevan
            untuk jenis Mesin Pengemasan Anda.
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
            Penerbitan Lisensi BIS untuk Mesin Pengemasan: Anda dapat
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
          Produsen yang tidak memiliki semua model mesin pengemasan yang
          disertifikasi dengan Sertifikasi BIS untuk Mesin Pengemasan pada
          tanggal 1 September 2026 menghadapi risiko:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Penjualan/impor dilarang untuk mesin pengemasan tidak bersertifikat
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
          Implementasi Sertifikasi BIS Scheme X untuk Mesin Pengemasan dalam OTR
          2024 adalah langkah untuk membawa keselamatan, efisiensi dan kualitas
          ke dalam sektor industri dan pengemasan di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, Importir dan Eksportir memanfaatkan proses ini dengan
          mengamankan Sertifikasi BIS untuk Mesin Pengemasan, dengan memperoleh
          Lisensi BIS untuk Mesin Pengemasan, dan menempatkan tanda BIS untuk
          Mesin Pengemasan pada produk mereka, menunjukkan bahwa produk mereka
          memenuhi sistem regulasi pasar lokal dan persyaratan pelanggan.
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
