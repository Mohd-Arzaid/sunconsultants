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

const PublicWorksAndMechanicalIndonesian = () => {
  return (
    <div className="relative w-full">
      <PublicWorksAndMechanicalMetaTags />
      <PublicWorksAndMechanicalBreadcrumb />
      <PublicWorksAndMechanicalMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default PublicWorksAndMechanicalIndonesian;

const PublicWorksAndMechanicalMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis";
  const description =
    "Sertifikasi BIS Scheme X untuk mesin untuk pekerjaan umum & bangunan, dan peralatan mekanis merupakan langkah strategis untuk memastikan keselamatan industri, kualitas seragam, dan akses pasar.";
  const keywords =
    "Sertifikasi BIS untuk Pekerjaan Umum dan Peralatan Mekanis, Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis, Sertifikasi Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis, BIS untuk Pekerjaan Umum dan Peralatan Mekanis, OTR untuk Pekerjaan Umum dan Peralatan Mekanis";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

const PublicWorksAndMechanicalBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Pekerjaan Umum dan Peralatan Mekanis
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

const PublicWorksAndMechanicalMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Pekerjaan Umum dan Peralatan Mekanis
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis"
            title="Lisensi BIS untuk Mesin Pekerjaan Umum dan Bangunan"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan perkembangan infrastruktur yang pesat dan modernisasi industri,
          kinerja dan mesin yang andal sangat penting. Mesin dan peralatan
          mekanis berperan sebagai poros dalam pekerjaan teknik, manufaktur dan
          konstruksi pekerjaan umum serta industri khusus. Sangat penting untuk
          menjaga kualitas dan kesesuaiannya. Ini adalah kewajiban hukum yang
          diberlakukan oleh Bureau of Indian Standards (BIS) di bawah
          Sertifikasi Scheme X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengimplementasikan dan merampingkan penegakan standar wajib
          dalam berbagai kategori mesin industri, Peraturan Teknis Omnibus
          (OTR), 2024 dikeluarkan oleh Kementerian Industri Berat. Perintah ini
          menyatakan bahwa semua jenis mesin untuk pekerjaan umum, konstruksi
          bangunan, dan peralatan mekanis lainnya, termasuk yang tidak
          disebutkan secara eksplisit dalam subdivisi lain dari Bab 84,
          diwajibkan untuk memperoleh sertifikasi BIS di bawah Scheme X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam postingan ini, kami akan membahas semua jenis mesin dan
          peralatan yang digunakan untuk pekerjaan umum dan pembangunan
          konstruksi, peralatan mekanis dengan fungsi individual, perakitannya,
          sub-perakitan, pentingnya dan ruang lingkup skema yang banyak
          dibicarakan, proses sertifikasi dan keuntungan, serta dokumen yang
          harus diserahkan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Pekerjaan Umum dan Peralatan Mekanis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mesin-mesin ini umum digunakan di:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Konstruksi infrastruktur publik (jalan, jembatan, pasokan air)
          </li>
          <li>Proyek teknik dan konstruksi berat</li>
          <li>Layanan kota dan utilitas</li>
          <li>
            Fasilitas industri yang memerlukan pengangkatan atau pemrosesan
            mesin
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanpa BIS untuk Pekerjaan Umum dan Peralatan Mekanis, risikonya
          meliputi:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Kerusakan mesin saat proyek penting sedang berlangsung</li>
          <li>Pertimbangan keselamatan pekerja dan pengguna akhir</li>
          <li>Biaya perawatan dan downtime yang lebih tinggi</li>
          <li>Dilarang dari proyek yang didanai oleh pemerintah</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis
          memastikan mesin beroperasi dengan aman, efisien, dan dengan risiko
          kegagalan minimal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan
          Mekanis?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS Scheme X untuk Pekerjaan Umum dan Peralatan Mekanis
          berada di bawah Peraturan Penilaian Kesesuaian BIS, 2018. Ini adalah
          sarana yang diidentifikasi dan instrumen regulasi untuk memastikan
          bahwa mesin industri dan infrastruktur sesuai dengan Standar India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Aspek Utama Kualifikasi Scheme X:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Berlaku untuk produsen India maupun asing</li>
          <li>Termasuk mesin untuk pekerjaan umum dan utilitas</li>
          <li>Pengujian di laboratorium yang diakui oleh BIS</li>
          <li>
            Audit pabrik dan inspeksi kepatuhan rutin termasuk dalam proses
          </li>
          <li>
            Memberikan hak untuk menggunakan Tanda Standar BIS setelah
            sertifikasi
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Pekerjaan Umum dan Peralatan Mekanis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kementerian Industri Berat telah mengeluarkan Peraturan Teknis Omnibus
          (OTR) untuk Pekerjaan Umum dan Peralatan Mekanis pada tahun 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Pada tanggal 1 September 2026, semua produsen dan
          importir harus mematuhi sertifikasi Scheme X untuk Pekerjaan Umum dan
          Peralatan Mekanis. Setelah tanggal ini, mesin yang tidak terdaftar
          tidak akan diizinkan untuk diproduksi, dijual atau diimpor di India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Pekerjaan Umum dan Peralatan Mekanis
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan Produk: Mencegah keruntuhan akibat masalah mekanis dan
            operasi yang andal.
          </li>
          <li>
            Kepatuhan Regulasi: Memenuhi OTR untuk Pekerjaan Umum dan Peralatan
            Mekanis.
          </li>
          <li>
            Keunggulan Pasar: Sertifikasi seringkali diperlukan untuk tender
            publik dan proyek pemerintah.
          </li>
          <li>
            Kepercayaan Pelanggan: Mesin yang disertifikasi secara resmi lebih
            disukai oleh beberapa pembeli, karena ini merupakan jaminan
            kualitas.
          </li>
          <li>
            Pengurangan Tanggung Jawab: Mengurangi potensi paparan hukum dan
            merek dengan produk bersertifikat.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Pekerjaan Umum dan Peralatan Mekanis dalam OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X untuk Sertifikasi Pekerjaan Umum dan Peralatan Mekanis
          mencakup produk berikut:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mesin pembuatan dan pemeliharaan jalan</li>
          <li>Mesin pengangkat hidrolik dan manual</li>
          <li>Peralatan layanan kota (peralatan distribusi air, dll.)</li>
          <li>Peralatan layanan dan penanganan mekanis</li>
          <li>
            Peralatan yang dirancang khusus untuk penggunaan industri dalam
            pekerjaan umum dan layanan
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Mereka harus mematuhi Standar India yang sesuai (kode IS), jika
          berlaku, termasuk IS 16819:2018/ISO 12100:2010 (Keselamatan Mesin
          Prinsip Umum untuk Desain - Penilaian Risiko dan Pengurangan Risiko).
          Semua bentuk ini harus diproduksi sesuai dengan Standar India yang
          berlaku untuk keselamatan, kinerja dan kualitas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Pekerjaan Umum dan Peralatan Mekanis
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifikasi Standar yang Relevan: Pilih kode IS yang berlaku untuk
            mesin Anda.
          </li>
          <li>
            Pengujian Produk: Lakukan pengujian kinerja dan keselamatan di
            Laboratorium yang disetujui BIS.
          </li>
          <li>
            Inspeksi Pabrik: Pejabat BIS mengunjungi fasilitas produksi untuk
            memastikan bahwa kontrol kualitas ada di tempat.
          </li>
          <li>
            Dokumentasi: Serahkan formulir aplikasi, laporan teknis, dan manual
            kualitas
          </li>
          <li>
            Penerbitan Lisensi: BIS memberikan sertifikasi dan mengizinkan
            penggunaan Tanda Standar BIS.
          </li>
          <li>
            Kepatuhan Berkelanjutan: Ada pengujian dan audit yang berkelanjutan
            untuk memastikan kepatuhan terus-menerus.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanksi untuk Ketidakpatuhan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ketidakpatuhan terhadap Sertifikasi BIS untuk Pekerjaan Umum dan
          Peralatan Mekanis yang ditetapkan dalam OTR untuk Pekerjaan Umum dan
          Peralatan Mekanis akan mengakibatkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Larangan penjualan atau impor mesin yang tidak bersertifikat</li>
          <li>Denda berat dan penyitaan produk</li>
          <li>Dilarang dari tender pemerintah dan proses kontrak</li>
          <li>Reputasi sangat ternoda</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS Scheme X untuk pekerjaan umum dan peralatan mekanis
          yang didukung oleh OTR untuk pekerjaan umum dan peralatan mekanis
          (2024), membawa negara selangkah lebih dekat untuk menetapkan tingkat
          kualitas seragam dan keselamatan dalam mesin infrastruktur.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bagi produsen dan importir, perolehan sertifikasi Scheme X untuk
          Pekerjaan Umum dan Peralatan Mekanis lebih dari sekadar kepatuhan –
          ini mewakili investasi strategis.
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
