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

const CentrifugesIndonesian = () => {
  return (
    <div className="relative w-full">
      <CentrifugesMetaTags />
      <CentrifugesBreadcrumb />
      <CentrifugesMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default CentrifugesIndonesian;

const CentrifugesMetaTags = () => {
  const title =
    "Sertifikasi BIS Scheme X untuk Sentrifugal dan Mesin Filtrasi atau Pemurnian";
  const description =
    "Sertifikasi BIS Scheme X untuk sentrifugal, mesin filtrasi atau pemurnian untuk cairan dan gas, dan/atau perakitannya, sub-perakitan, dan komponennya, merupakan tonggak regulasi penting bagi sektor mesin industri";
  const keywords =
    "Sertifikasi BIS untuk Sentrifugal, Sertifikasi BIS Scheme X untuk Sentrifugal, Sertifikasi Scheme X untuk Sentrifugal, BIS untuk Sentrifugal, OTR untuk Sentrifugal";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Scheme X untuk Sentrifugal di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Scheme X untuk sentrifugal di India. Pahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI, dan cara mendapatkan sertifikasi sebelum batas waktu September 2026";

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

      {/* Hreflang Tags for Multi-language Support - English is the default language */}
      <link
        rel="alternate"
        hreflang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-sentorifugyu-oyobi-roka-matawa-joka-kikai"
      />
      <link
        rel="alternate"
        hreflang="zh"
        href="https://bis-certifications.com/bis-fang-an-x-li-xin-ji-he-guo-lv-huo-jing-hua-ji-xie-ren-zheng"
      />
      <link
        rel="alternate"
        hreflang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-centrifugeuses-et-machines-de-filtrage-ou-purification"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
      />
      <link
        rel="alternate"
        hreflang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-ly-tam-va-thiet-bi-loc-hoac-tinh-che"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://bis-certifications.com/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
      />
      <link
        rel="alternate"
        hreflang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
      />
      <link
        rel="alternate"
        hreflang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian"
      />
      <link
        rel="alternate"
        hreflang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione"
      />
      <link
        rel="alternate"
        hreflang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-pan-wia-lae-khrueang-krong-rue-tham-hai-borisut"
      />
      <link
        rel="alternate"
        hreflang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-centrifuges-en-filter-of-zuiveringsmachines"
      />
      <link
        rel="alternate"
        hreflang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-taard-almarkazi-wa-alat-altasfiya-aw-altanqiya"
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
      />
    </Helmet>
  );
};

const CentrifugesBreadcrumb = () => {
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
                    Sertifikasi BIS untuk Sentrifugal
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

const CentrifugesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const CentrifugesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Sentrifugal
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="Lisensi BIS Scheme X untuk Sentrifugal"
            alt="Sertifikasi BIS Scheme X Untuk Sentrifugal Dan Mesin Filtrasi Atau Pemurnian"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Sentrifugal adalah mesin vital yang banyak digunakan di industri
          laboratorium, farmasi, pengolahan makanan, bioteknologi, petrokimia,
          dan pertambangan. Mesin-mesin ini bekerja dengan cara berputar, dan
          rotasi yang cepat memisahkan campuran, pemisahan ini sangat penting
          untuk pengolahan yang tepat, aman dan cepat.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan aplikasi yang lebih luas di berbagai industri, sangat penting
          untuk meningkatkan keandalan dan keamanan sentrifugal. Untuk
          mempertahankan parameter kontrol kualitas untuk sentrifugal, BIS telah
          memperkenalkan skema Sertifikasi BIS yang dikenal sebagai Sertifikasi
          Scheme -X untuk Sentrifugal.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam postingan ini, kami akan membahas Apa itu Sertifikasi BIS Scheme
          X untuk Sentrifugal, Apa itu OTR untuk Sentrifugal, dan Cara
          mendapatkan Lisensi BIS untuk Sentrifugal dengan tanda BIS resmi untuk
          Sentrifugal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signifikansi BIS untuk Sentrifugal
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sentrifugal digunakan dalam:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sektor Farmasi dan Bio-teknologi</li>
          <li>Pengolahan makanan dan pembuatan minuman</li>
          <li>Kilang minyak dan industri petrokimia</li>
          <li>Laboratorium medis</li>
          <li>Pengolahan lingkungan dan air</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tidak adanya BIS untuk Sentrifugal dapat menyebabkan penggunaan
          Sentrifugal berkualitas rendah atau tidak bersertifikat yang dapat
          mengakibatkan:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Risiko kerusakan mekanis</li>
          <li>Kemungkinan kontaminasi di sektor yang rapuh</li>
          <li>Kehilangan waktu dan kehilangan pendapatan</li>
          <li>Efisiensi rendah dan peningkatan penggunaan energi.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sentrifugal bersertifikat BIS dengan tanda BIS untuk Sentrifugal
          menyiratkan keamanan, kualitas, dan kepercayaan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu Sertifikat BIS Scheme X untuk Sentrifugal?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Scheme X untuk Sentrifugal adalah skema sertifikasi
          wajib di bawah Peraturan Penilaian Kesesuaian BIS, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sertifikasi Scheme X untuk Sentrifugal: Fitur utama:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Berlaku untuk produsen India maupun asing</li>
          <li>
            Berlaku untuk semua jenis sentrifugal yang ditemukan di laboratorium
            industri dan R&D
          </li>
          <li>
            Jumlah pengujian produk, audit, dan validasi kepatuhan yang memadai
            adalah suatu keharusan
          </li>
          <li>
            Memungkinkan produsen untuk mengajukan registrasi BIS berdasarkan
            sertifikasi untuk Sentrifugal yang disebutkan di atas.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR untuk Sentrifugal
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR untuk Sentrifugal diumumkan oleh Kementerian Industri Berat pada
          tahun 2024, yang memerlukan sertifikasi Scheme X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Batas Waktu: Semua produsen dan importir diwajibkan untuk mendapatkan
          Lisensi BIS Sentrifugal yang valid di bawah Scheme X pada tanggal 1
          September 2026. "Ini akan menghentikan sentrifugal tidak bersertifikat
          dari dijual, diimpor atau berpartisipasi dalam tender di seluruh
          negeri," kata pejabat pemerintah.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Keuntungan Sertifikasi BIS untuk Sentrifugal
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Keselamatan & Kepatuhan: Menghindari kecelakaan akibat kerusakan
            mekanis pada kecepatan tinggi.
          </li>
          <li>
            Kualitas & Keandalan: Sentrifugal Bersertifikat berkinerja dengan
            akurasi dan presisi yang tinggi.
          </li>
          <li>
            Akses Pasar: Lisensi Sentrifugal BIS biasanya diperlukan untuk
            pengadaan oleh badan publik.
          </li>
          <li>
            Kepercayaan Konsumen: Tanda BIS untuk Sentrifugal memberikan
            informasi kepada pelanggan tentang kualitas produk dan daya tahan.
          </li>
          <li>
            Keunggulan Kompetitif: Merek/produsen bersertifikat BIS lebih
            disukai di pasar terkontrol dan untuk tender pemerintah.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Sentrifugal di Bawah Skema Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Akreditasi Scheme X untuk Sentrifugal mencakup berbagai jenis seperti:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sentrifugal Laboratorium</li>
          <li>Pemisah Industri</li>
          <li>Sentrifugal, Berpendingin</li>
          <li>Ultracentrifuges</li>
          <li>Sentrifugal Gas</li>
          <li>Sentrifugal Keranjang</li>
          <li>Sentrifugal Dekanter</li>
          <li>Sentrifugal Kontinyu dan Batch</li>
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
          Proses Sertifikasi BIS untuk Sentrifugal
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifikasi Standar yang Relevan: Merujuk kode IS yang relevan
            untuk jenis Sentrifugal Anda.
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
            Penerbitan Lisensi BIS untuk Sentrifugal: Anda dapat menempatkan
            tanda BIS setelah disetujui.
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
          Produsen yang tidak memiliki semua model sentrifugal yang
          disertifikasi dengan Sertifikasi BIS untuk Sentrifugal pada tanggal 1
          September 2026 menghadapi risiko:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Penjualan/impor dilarang untuk sentrifugal tidak bersertifikat
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
          Implementasi Sertifikasi BIS Scheme X untuk Sentrifugal dalam OTR 2024
          adalah langkah untuk membawa keselamatan, efisiensi dan kualitas ke
          dalam sektor industri dan laboratorium di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Produsen, Importir dan Eksportir memanfaatkan proses ini dengan
          mengamankan Sertifikasi BIS untuk Sentrifugal, dengan memperoleh
          Lisensi BIS untuk Sentrifugal, dan menempatkan tanda BIS untuk
          Sentrifugal pada produk mereka, menunjukkan bahwa produk mereka
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
