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

const TransformersIndonesian = () => {
  return (
    <div className="relative w-full">
      <TransformersMetaTags />
      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default TransformersIndonesian;

const TransformersMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Transformator";
  const description =
    "Sertifikasi BIS Scheme X untuk Transformator menentukan standar kualitas dan keselamatan untuk manufaktur dan impor transformator ke India";
  const keywords =
    "Sertifikasi BIS untuk Transformator, Sertifikasi BIS Scheme X untuk Transformator, Sertifikasi Scheme X untuk Transformator, BIS untuk Transformator, OTR untuk Transformator";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Transformator di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk Transformator di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const TransformersBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Transformator
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

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Transformator
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="Sertifikasi BIS Scheme X Untuk Transformator"
            title="Lisensi BIS Scheme X untuk Transformator"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Transformator adalah komponen integral dari setiap jaringan transmisi
          dan distribusi tenaga. Terlepas dari aplikasinya dalam operasi
          industri, komersial atau utilitas, transformator adalah dan harus
          selalu tetap menjadi peralatan dengan keselamatan dan kinerja
          operasional tertinggi karena sifat kritis dari fungsinya. Untuk
          meningkatkan keselamatan, keandalan, dan standardisasi dalam industri
          peralatan listrik di India, Bureau of Indian Standards (BIS) telah
          membuat sertifikasi BIS untuk semua jenis transformator dan
          perakitannya, sub-perakitan, komponen, dan sub-komponen menjadi wajib
          di bawah Sertifikasi Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah, melalui Peraturan Teknis Omnibus
          Order 2024, menetapkan batas waktu bagi semua produsen, terlepas dari
          negara asal, untuk mencapai sertifikasi BIS di bawah Scheme X untuk
          transformator dan peralatan serupa pada tanggal 1 September 2026.
          Sertifikasi BIS Scheme X untuk transformator adalah langkah menuju
          peningkatan kualitas, konsistensi, keandalan, dan keselamatan listrik
          produk di India. Bagi produsen, importir, atau pemasok OEM
          transformator dengan komponen, standar ini adalah lebih dari sekadar
          kewajiban kepatuhan.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Blog ini menangkap semua informasi relevan yang berkaitan dengan ruang
          lingkup, pentingnya, dan keuntungan dari sertifikasi, proses, dan
          dokumentasi yang diperlukan untuk sertifikasi Scheme X untuk Semua
          jenis Transformator dan (atau) perakitannya, sub-perakitan, komponen,
          dan atau perakitan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa Scheme X untuk Transformator Penting
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Transformator banyak digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fasilitas pembangkit listrik</li>
          <li>Jaringan transmisi dan distribusi</li>
          <li>Pabrik dan bangunan produksi</li>
          <li>Proyek energi terbarukan (surya / angin / hidro)</li>
          <li>Properti komersial / perumahan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa kepatuhan yang tepat, transformator dapat menyebabkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kepanasan berlebih, kebakaran dan sengatan listrik.</li>
          <li>Kehilangan dan pemborosan daya selama transmisi</li>
          <li>Pemadaman listrik karena kerusakan sistem</li>
          <li>Ditolak dalam tender publik, proyek pemerintah</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi Scheme X untuk Transformator memastikan keselamatan
          tinggi, efisiensi energi, dan keandalan produk.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi Scheme X untuk Transformator?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Transformator adalah kerangka hukum di
          bawah Peraturan Penilaian Kesesuaian BIS, 2018. Ini mewajibkan
          pengujian dan inspeksi yang ketat dan menuntut tingkat yang lebih
          tinggi dari dokumentasi untuk memastikan kualitas sesuai Standar
          India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama Sertifikasi Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Untuk semua produsen, India dan asing.</li>
          <li>
            Termasuk transformator distribusi, transformator daya, dan
            transformator tujuan khusus
          </li>
          <li>
            Pengujian kinerja, efisiensi dan keselamatan di laboratorium yang
            disetujui BIS adalah wajib
          </li>
          <li>
            Pabrik diaudit untuk proses manufaktur dan sistem kualitas yang
            diperiksa
          </li>
          <li>Memberikan lisensi untuk penggunaan Tanda Standar BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Transformator
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah memperkenalkan Peraturan Teknis
          Omnibus (OTR) untuk Transformator, pada tahun 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanggal Kepatuhan: Semua produsen dan importir harus disertifikasi
          pada tanggal 1 September 2026. Setelah itu, transformator yang tidak
          bersertifikat tidak dapat dibuat, dibawa ke negara atau dijual di
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan BIS untuk Transformator
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Keandalan: Memverifikasi transformator mematuhi
            persyaratan keselamatan listrik dan pencegahan kebakaran.
          </li>
          <li>
            Efisiensi Energi: Mendorong pengurangan kehilangan daya dan kinerja
            daya yang lebih baik.
          </li>
          <li>
            Kepatuhan Pasar: Mematuhi persyaratan regulasi transformator,
            seperti yang tercantum dalam OTR.
          </li>
          <li>
            Kelayakan Tender: Produk bersertifikat memenuhi syarat untuk tender
            Pemerintah dan BUMN.
          </li>
          <li>
            Kepercayaan Pelanggan: Tanda Standar BIS memastikan kualitas produk
            dan daya tahan.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Transformator yang Dicakup
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS scheme X untuk Transformator berlaku untuk:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Transformator Distribusi (untuk digunakan dalam jaringan lokal dan
            pasokan perumahan)
          </li>
          <li>
            Transformator Daya (pada tingkat jaringan transmisi tegangan tinggi)
          </li>
          <li>
            Transformator Tujuan Khusus (aplikasi industri, kereta api dan
            energi terbarukan proyek)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Setiap jenis harus memenuhi kode IS yang relevan (lihat catatan)
          seperti IS 16819:2018/ISO 12100:2010 (keselamatan mesin Prinsip umum
          untuk desain – Penilaian risiko dan pengurangan risiko). Semua jenis
          harus sesuai dengan kode IS masing-masing untuk sertifikasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Transformator
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Berlaku: Silakan merujuk ke kode IS untuk
            berbagai jenis transformator.
          </li>
          <li>
            Pengujian Produk: Melakukan pemeriksaan keselamatan, efisiensi
            energi dan kinerja di laboratorium yang disetujui BIS.
          </li>
          <li>
            Audit Pabrik: Personel BIS mengamati produksi produsen dan sistem
            kontrol kualitas.
          </li>
          <li>
            Pengajuan Dokumentasi: Kirim spesifikasi, laporan uji dan data
            kepatuhan.
          </li>
          <li>
            Pemberian Lisensi: BIS memberikan lisensi untuk menggunakan Tanda
            Standar ketika semua ketentuan terpenuhi.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Pengujian dan tinjauan rutin dilakukan
            untuk mempertahankan validitas sertifikasi.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kegagalan untuk mematuhi BIS / OTR untuk Transformator Sertifikasi BIS
          untuk Transformator di bawah OTR untuk Transformator akan berarti hal
          berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Larangan penjualan manufaktur dan impor transformator yang tidak
            bersertifikat.
          </li>
          <li>
            Penyitaan wajib produk yang tidak sesuai dan sanksi yang keras.
          </li>
          <li>Diskualifikasi dari tender pemerintah dan BUMN</li>
          <li>Kerusakan reputasi jangka panjang, kerugian finansial</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Transformator yang akan diwajibkan di
          bawah OTR untuk Transformator (2024) adalah langkah penting dalam
          peningkatan infrastruktur tenaga India dengan produk yang andal,
          efisien & aman.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen dan importir, sertifikasi Scheme X untuk Transformator
          bukan hanya sertifikasi wajib tetapi juga alat strategis untuk
          mendapatkan kepercayaan di pasar India dan mempertahankan kesuksesan
          jangka panjang di industri tenaga negara.
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
