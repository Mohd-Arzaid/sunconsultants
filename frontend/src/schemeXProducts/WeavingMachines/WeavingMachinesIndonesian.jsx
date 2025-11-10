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

const WeavingMachinesIndonesian = () => {
  return (
    <div className="relative w-full">
      <WeavingMachinesMetaTags />
      <WeavingMachinesBreadcrumb />
      <WeavingMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default WeavingMachinesIndonesian;

const WeavingMachinesMetaTags = () => {
  const title = "Sertifikasi BIS Scheme X untuk Mesin Tenun dan Perakitannya";
  const description =
    "Sertifikasi BIS Scheme X adalah sertifikasi kualitas wajib untuk semua jenis mesin tenun (loom) dan/atau perakitannya, sub-perakitan, dan komponennya";
  const keywords =
    "Sertifikasi BIS untuk Mesin Tenun, Sertifikasi BIS Scheme X untuk Mesin Tenun, Sertifikasi Scheme X untuk Mesin Tenun, BIS untuk Mesin Tenun, OTR untuk Mesin Tenun";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Mesin Tenun di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk mesin tenun di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const WeavingMachinesBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Mesin Tenun
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

const WeavingMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <WeavingMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const WeavingMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Tenun
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
            title="Sertifikasi BIS Scheme X untuk Mesin Tenun (Loom)"
            alt="Lisensi BIS Scheme X untuk mesin tenun (loom)"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Industri tekstil dan pakaian India adalah salah satu pendukung
          terbesar manufaktur, ekspor, dan lapangan kerja di negara ini. Inti
          dari industri ini adalah mesin tenun, yang diperlukan untuk membuat
          kain untuk pakaian, perabotan rumah, dan penggunaan industri. Dengan
          permintaan domestik yang terus meningkat dan fokus ekspor negara yang
          besar, ada kebutuhan untuk menjamin standar kualitas dan keselamatan
          mesin tenun di dalam negeri.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memastikan hal ini, Bureau of Indian Standards (BIS), Badan
          Standar Nasional India, telah didirikan dan BIS-lah yang telah
          merumuskan dan mengimplementasikan skema sertifikasi produk di India
          di mana produk disertifikasi. Standar ini memastikan bahwa mesin yang
          memasuki pasar India memenuhi Standar India untuk kinerja, daya tahan
          dan keselamatan.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam artikel ini, kami akan menjelaskan signifikansi Sertifikat BIS
          Scheme X untuk mesin tenun, proses kepatuhan di bawah OTR untuk mesin
          tenun dan cara mendapatkan sertifikasi BIS di India, Registrasi BIS
          untuk Mesin Tenun dan pelabelan tanda ISI untuk Mesin Tenun.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa BIS untuk Mesin Tenun?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin tenun digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pabrik tekstil dan pabrik garmen</li>
          <li>Unit produksi perabotan rumah</li>
          <li>Manufaktur kain industri</li>
          <li>Pabrik tekstil yang berfokus pada ekspor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa BIS untuk Mesin Tenun, mesin tanpa merek dapat mengakibatkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kain berkualitas rendah dan cacat.</li>
          <li>
            Tingkat Kerusakan, ukuran masalah mekanis dan waktu tidak berfungsi
          </li>
          <li>Peningkatan biaya operasi, limbah dan manajemen limbah</li>
          <li>Pelanggaran kontrak pemerintah dan ekspor</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tanda BIS pada Mesin Tenun memberikan keyakinan kepada konsumen dan
          inspektur bahwa produk tersebut sesuai dengan standar India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Mesin Tenun?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Mesin Tenun adalah bagian dari
          Peraturan Penilaian Kesesuaian BIS, 2018, yang bertujuan untuk
          mengatur kualitas dalam mesin penting.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beberapa Fitur sertifikasi Scheme X untuk Mesin Tenun:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Wajib untuk Manufaktur India maupun Asing yang memasok ke India
          </li>
          <li>
            Mencakup berbagai mesin tenun sehubungan dengan Standar India yang
            berlaku
          </li>
          <li>
            Mengharuskan pengujian mesin, inspeksi pabrik dan audit yang
            berkelanjutan dari waktu ke waktu
          </li>
          <li>Memungkinkan penggunaan tanda BIS resmi untuk Mesin Tenun</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Mesin Tenun
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi Scheme X akan menjadi wajib di bawah Peraturan Teknis
          Omnibus (OTR) 2024 untuk Mesin Tenun, yang diterbitkan oleh
          Kementerian Industri Berat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: 1 September 2026 Aplikasi untuk pemberian Lisensi BIS
          untuk Mesin Tenun wajib untuk semua produsen dan importir. Setelah
          batas waktu, mesin tenun yang tidak terdaftar tidak dapat dijual,
          diimpor atau dikirim untuk penggunaan komersial di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Mesin Tenun
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Jaminan Kualitas Produk: Mesin bersertifikat memastikan produksi
            yang tidak terputus dan efisiensi optimal kain.
          </li>
          <li>
            Akses Pasar & Tender: Lisensi BIS untuk Mesin Tenun umumnya wajib
            dalam tender pemerintah dan pesanan pasokan besar.
          </li>
          <li>
            Kepercayaan Pembeli: Tanda BIS untuk Mesin Tenun memastikan
            kepercayaan di pasar domestik dan luar negeri.
          </li>
          <li>
            Kepatuhan Hukum & Regulasi: Memastikan kepatuhan terhadap regulasi
            India di bawah OTR untuk Mesin Tenun.
          </li>
          <li>
            Keunggulan Kompetitif: Mesin bersertifikat jarang ditemukan dalam
            industri peralatan tekstil yang sangat kompetitif.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Weaving Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Mesin Tenun di Bawah Sertifikasi Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin Tenun yang menerima sertifikasi Scheme X:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Loom tenaga</li>
          <li>Loom rapier</li>
          <li>Loom jet udara</li>
          <li>Loom jet air</li>
          <li>Loom shuttle</li>
          <li>Loom otomatis</li>
          <li>Mesin tenun khusus industri</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Semua itu harus sesuai dengan Standar India yang berlaku (Kode IS)
          seperti IS 17361(Bagian 6): 2020 / ISO 11111: (Bagian 6): 2005
          (Persyaratan Keselamatan Mesin Tekstil Bagian 6 Mesin Manufaktur
          Kain). Semua jenis harus mematuhi Standar India (kode IS) yang relevan
          berdasarkan desain, kinerja, keselamatan dan konservasi energi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Lisensi BIS untuk Mesin Tenun
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Berlaku: Cari nomor IS untuk jenis mesin
            tenun Anda.
          </li>
          <li>
            Pengujian Produk: Mesin diuji di laboratorium yang terakreditasi BIS
            untuk keselamatan dan efisiensi.
          </li>
          <li>
            Inspeksi Pabrik: Inspektur BIS melakukan pemeriksaan menyeluruh
            terhadap proses manufaktur dan sistem kontrol kualitas.
          </li>
          <li>
            Pengajuan Aplikasi: Kirim dokumen seperti detail teknis, laporan uji
            dan manual kualitas.
          </li>
          <li>
            Penerbitan Lisensi BIS untuk Mesin Tenun: Dengan persetujuan,
            produsen akan dapat menandai BIS pada produk.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Audit dan pengujian dilakukan secara
            teratur untuk memastikan kami terus memenuhi standar kami.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan Sertifikasi BIS untuk Mesin Tenun dalam OTR akan
          mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Larangan mesin tidak bersertifikat untuk dijual atau diimpor</li>
          <li>Denda berat dan penyitaan produk.</li>
          <li>Diskualifikasi dalam pekerjaan/tender pemerintah</li>
          <li>Kerusakan jangka panjang pada merek dan reputasi pasar</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Peluncuran Sertifikasi BIS Scheme X untuk Mesin Tenun melalui OTR
          untuk Mesin Tenun (2024) adalah tonggak penting dalam memiliki
          industri tekstil di India yang menggunakan mesin yang aman,
          berkualitas dan dapat diandalkan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen/importir, memperoleh Lisensi BIS untuk Mesin Tenun dan
          menandai produk dengan lambang BIS tidak hanya merupakan kepatuhan
          wajib tetapi juga menambah nilai produk untuk pemasaran. Ini
          mengkonsolidasikan keandalan pasar dan menjamin kepatuhan, juga dalam
          jangka menengah mendorong daya saing di pasar tekstil domestik dan
          internasional.
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
