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

const MetalCuttingMachinesIndonesian = () => {
  return (
    <div className="relative w-full">
      <MetalCuttingMachinesMetaTags />
      <MetalCuttingMachinesBreadcrumb />
      <MetalCuttingMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default MetalCuttingMachinesIndonesian;

const MetalCuttingMachinesMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam dan Perakitannya";
  const description =
    "Sertifikasi BIS sekarang wajib untuk semua jenis mesin pemotong logam dan/atau perakitannya, sub-perakitan, dan komponennya yang termasuk dalam kode HS 8456 hingga 8461";
  const keywords =
    "Sertifikasi BIS untuk Mesin Pemotong Logam, Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam, Sertifikasi Scheme X untuk Mesin Pemotong Logam, BIS untuk Mesin Pemotong Logam, OTR untuk Mesin Pemotong Logam";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin pemotong logam di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const MetalCuttingMachinesBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Mesin Pemotong Logam
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

const MetalCuttingMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MetalCuttingMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MetalCuttingMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Mesin Pemotong Logam
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
            alt="Sertifikasi BIS Scheme X untuk Alat Mesin Pemotong Logam"
            title="Lisensi BIS Scheme X untuk alat mesin pemotong logam"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Pemotongan logam adalah teknologi fabrikasi andalan yang mendukung
          industri mesin, otomotif, dirgantara dan manufaktur India. Mesin-mesin
          ini mulai dari mesin bubut CNC dan mesin frais hingga pemotong laser
          dan juga akan membantu menjaga produksi tetap tinggi dan biaya tetap
          rendah di industri di seluruh dunia. Seiring meningkatnya permintaan
          mesin berkualitas tinggi di India, pemerintah telah membuat
          Sertifikasi BIS untuk Mesin Pemotong Logam menjadi wajib untuk
          memastikan kualitas dan keselamatan.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sesuai dengan Sertifikasi BIS (Biro Standar India) Scheme X untuk
          Mesin Pemotong Logam, baik produsen asing maupun India harus memenuhi
          Standar India sebelum dapat dijual di pasar India. Ini adalah cara
          agar mesin dapat digunakan dengan aman, serta memastikan kepercayaan
          pelanggan.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Postingan ini memberikan informasi mengenai sertifikasi scheme X untuk
          Mesin Pemotong Logam, persyaratan OTR 2024 untuk Mesin Pemotong Logam,
          dan prosedur memperoleh Lisensi BIS untuk Mesin Pemotong Logam untuk
          menempelkan tanda BIS untuk Mesin Pemotong Logam.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa BIS Wajib untuk Mesin Pemotong Logam?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin pemotong logam diterapkan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Manufaktur otomotif dan komponen otomotif</li>
          <li>Industri penerbangan dan pertahanan</li>
          <li>Rekayasa berat dan konstruksi</li>
          <li>Industri elektronik dan kelistrikan</li>
          <li>Pembuatan cetakan dan pengecoran cetakan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bisnis yang tidak memiliki BIS untuk Mesin Pemotong Logam dapat
          menghadapi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Akurasi pemesinan buruk, dan hasil produksi rendah</li>
          <li>
            Kegagalan mesin dan hilangnya produksi Waktu operasi vs Waktu henti.
          </li>
          <li>Bahaya potensial bagi operator</li>
          <li>Pengucilan dari tender publik dan bisnis yang diatur</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS memastikan bahwa mesin pemotong logam mematuhi norma
          kualitas yang ditetapkan oleh biro.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam berada di bawah
          Peraturan Penilaian Kesesuaian BIS, 2018 yang telah dirumuskan untuk
          memastikan bahwa produk memenuhi standar kualitas yang diperlukan yang
          merupakan kebutuhan saat ini untuk peralatan industri.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Fitur Utama Sertifikasi Scheme X untuk Mesin Pemotong Logam
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk produsen India dan asing</li>
          <li>
            Berlaku untuk berbagai mesin pemotong logam yang diberitahukan di
            bawah Standar India
          </li>
          <li>
            Melibatkan pengujian laboratorium, inspeksi pabrik dan audit rutin
          </li>
          <li>
            Mengotorisasi penampilan Tanda BIS untuk mesin pemotong logam.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS Wajib untuk Mesin Pemotong Logam
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Perintah Departemen Industri Berat mengenai Peraturan Teknis Omnibus
          (OTR) untuk Mesin Pemotong Logam pada tahun 2024 telah membuat
          sertifikasi menjadi wajib.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Lisensi BIS akan menjadi wajib untuk semua produsen dan
          importir mesin pemotong logam mulai berlaku pada 1 September 2026.
          Mulai tanggal ini, mesin yang tidak disertifikasi tidak dapat
          ditawarkan untuk dijual, diimpor atau dipasang di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Pemotong Logam
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keandalan Produk: Mesin disertifikasi untuk akurasi, daya tahan dan
            kinerja yang konsisten.
          </li>
          <li>
            Daya Saing Pasar: Lisensi BIS untuk Mesin Pemotong Logam adalah
            wajib untuk mendapatkan banyak pesanan Industri dan Pemerintah.
          </li>
          <li>
            Kepercayaan Pelanggan: Tanda BIS untuk Mesin Pemotong Logam
            menumbuhkan kepercayaan pada pembeli.
          </li>
          <li>
            Kepatuhan Hukum: Sesuai dengan OTR untuk Mesin Pemotong Logam dan
            BIS.
          </li>
          <li>
            Keuntungan Global: Akses lebih mudah bagi produsen asing ke pasar
            India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Metal Cutting Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Mesin Pemotong Logam yang Termasuk dalam Persetujuan Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat Scheme X mencakup jenis berikut untuk Mesin Pemotong Logam
          tetapi tidak terbatas pada:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mesin bubut CNC dan pusat pembubutan</li>
          <li>Mesin frais</li>
          <li>Mesin bor</li>
          <li>Mesin gerinda</li>
          <li>Mesin pemotong CNC</li>
          <li>Mesin atau peralatan pemotong laser</li>
          <li>Mesin pemotong plasma</li>
          <li>Mesin untuk pemotongan water-jet</li>
          <li>Mesin gergaji pita dan gergaji besi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Semua jenis mesin pemotong logam ini harus mengikuti Standar India
          yang relevan (kode IS) seperti IS 17277 (Bagian 1): 2019 / ISO
          16092-1: 2017 (Alat Mesin Keselamatan Press Bagian 1 Persyaratan
          Keselamatan Umum). Setiap model mesin harus memenuhi kode IS sendiri
          tentang keselamatan, efisiensi energi dan akurasi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prosedur Lisensi BIS untuk Mesin Pemotong Logam
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar IS yang Berlaku: Pilih standar yang tepat
            sesuai dengan jenis mesin.
          </li>
          <li>
            Pengujian Produk: Serahkan mesin untuk pengujian di laboratorium BIS
            yang diakui pemerintah.
          </li>
          <li>
            Audit Pabrik: Kunjungan langsung dilakukan oleh pejabat BIS untuk
            memastikan produksi kualitas yang sesuai.
          </li>
          <li>
            Pengajuan Dokumen: Sediakan manual teknis, laporan pengujian dan
            dokumen jaminan kualitas.
          </li>
          <li>
            Pemberian Lisensi BIS untuk Mesin Pemotong Logam: Produsen sekarang
            dapat menempelkan tanda BIS di bawah sertifikasi produk sesuai
            dengan standar di atas.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Pengawasan dan audit berkala dilakukan
            untuk menjamin kepatuhan berkelanjutan dengan BIS.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hukuman untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan Sertifikasi BIS untuk Mesin Pemotong Logam di bawah OTR
          untuk Mesin Pemotong Logam dapat mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Larangan penjualan/impor mesin yang tidak disertifikasi</li>
          <li>Denda tinggi dan penyitaan produk</li>
          <li>Pengucilan dari kontrak pemerintah</li>
          <li>Kerusakan jangka panjang pada reputasi merek dan bisnis</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Pemotong Logam dalam OTR untuk
          Mesin Pemotong Logam (2024) memiliki peran penting dalam akurasi,
          keselamatan dan keandalan industri India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen dan importir, memiliki Lisensi BIS untuk Mesin Pemotong
          Logam dan menempelkan tanda BIS pada Mesin Pemotong Logam bukan hanya
          tindakan kepatuhan, ini adalah investasi strategis yang menawarkan
          pengembalian yang berlipat ganda dalam bentuk keunggulan produk,
          kepercayaan konsumen dan superioritas pasar.
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
