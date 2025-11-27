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

const PumpsAndLiquidElevatorsIndonesian = () => {
  return (
    <div className="relative w-full">
      <PumpsAndLiquidElevatorsMetaTags />
      <PumpsAndLiquidElevatorsIndonesianPageBreadcrumb />
      <PumpsAndLiquidElevatorsIndonesianPageMainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default PumpsAndLiquidElevatorsIndonesian;

const PumpsAndLiquidElevatorsMetaTags = () => {
  const title = "Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan";
  const description =
    "Sertifikasi BIS Skema X untuk pompa dan elevator cairan di bawah Peraturan Teknis Omnibus 2024 mewajibkan semua jenis pompa dan elevator cairan harus sesuai dengan Sertifikasi Skema X sebelum September 2026";
  const keywords =
    "Sertifikasi BIS untuk Pompa, Sertifikasi BIS Skema X untuk Pompa, Sertifikasi Skema X untuk Pompa, BIS untuk Pompa, Sertifikasi BIS untuk Pompa dan Elevator Cairan, OTR untuk Pompa";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";
  const ogTitle =
    "Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan di India | Panduan Lengkap";
  const ogDescription =
    "Pelajari semua tentang Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan di India. Memahami kepatuhan OTR 2024, proses Lisensi BIS, persyaratan tanda ISI dan cara mendapatkan sertifikasi sebelum tenggat waktu September 2026";

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

      {/* HrefLang Tags */}
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/certification-bis-schema-x-pour-pompes-et-elevateurs-de-liquides"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-ponpu-oyobi-ekitai-erebeetaa"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/bis-schema-x-certificering-voor-pompen-en-vloeistofelevators"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-pump-lae-lift-nam"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-madakhat-wa-masaaid-as-sawail"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
      />
    </Helmet>
  );
};

const PumpsAndLiquidElevatorsIndonesianPageBreadcrumb = () => {
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
                    Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan
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

const PumpsAndLiquidElevatorsIndonesianPageMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PumpsAndLiquidElevatorsPageMainContentLeftIndonesian />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const PumpsAndLiquidElevatorsPageMainContentLeftIndonesian = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan di India
        </h1>

        {/* BIS License for Pumps Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-For-Pumps.png"
            alt="Lisensi BIS untuk Pompa dan Elevator Cairan"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Pertumbuhan industri dan infrastruktur yang pesat di India memerlukan
          mesin yang beroperasi lebih banyak dan memastikan kepuasan terhadap
          permintaan domestik dan internasional. Pompa dan elevator cairan
          sangat penting untuk sumber daya air, pertanian, konstruksi, energi,
          industri, dan banyak sektor lainnya. Peralatan yang rusak dapat
          membahayakan keselamatan, mengganggu operasi, dan menciptakan kerugian
          finansial jika tidak diproduksi sesuai spesifikasi yang tepat dengan
          kontrol kualitas yang ada.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk mengendalikan hal ini, BIS (Bureau of Indian Standards) telah
          meluncurkan sertifikasi Skema X, yang memerlukan setiap pompa dan
          elevator cairan memenuhi standar kualitas nasional sebelum dijual di
          India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dalam artikel ini, kami bermaksud membahas pentingnya Sertifikasi BIS
          untuk Pompa, pentingnya Peraturan Teknis Omnibus (OTR) 2024, dan
          proses untuk mendapatkan Lisensi BIS untuk Pompa di bawah Skema X
          untuk produsen yang bercita-cita.
        </p>

        {/* Why Pumps and Elevators Matter Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa Pompa dan Elevator Cairan Penting
        </div>

        {/* Pumps Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pompa
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pompa adalah perangkat yang sangat diperlukan untuk memindahkan fluida
          atau lumpur melalui berbagai industri. Mereka banyak digunakan dalam:
        </p>

        {/* Pumps Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistem pertanian dan irigasi</li>
          <li>Pasokan air publik dan penggunaan domestik</li>
          <li>Stasiun pengolahan air limbah dan effluent</li>
          <li>Pipa minyak dan gas</li>
          <li>Sistem AC dan pendingin industri</li>
        </ul>

        {/* Liquid Elevators Subsection */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Elevator Cairan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pompa angkat, elevator vertikal cairan untuk mengangkat cairan
          berfungsi untuk pemompaan:
        </p>

        {/* Liquid Elevators Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Sistem distribusi air dengan massa pompa tinggi</li>
          <li>Silo industri/tangki penyimpanan</li>
          <li>Dalam industri energi, kimia, dan proses</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Karena mereka umum, pompa murah atau elevator cairan dapat
          menyebabkan:
        </p>

        {/* Problems with Poor Quality Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Kegagalan mekanis</li>
          <li>Bahaya listrik</li>
          <li>Kebocoran dan korosi</li>
          <li>
            Kecelakaan yang disebabkan oleh risiko keselamatan dan kerugian
            ekonomi
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Itulah mengapa BIS untuk Pompa dan Elevator Cairan adalah perlindungan
          yang sangat diperlukan untuk produsen dan pembeli juga.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS and What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Apa itu BIS dan apa itu Skema X?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bureau of Indian Standards (BIS) adalah badan standarisasi nasional
          India untuk mensertifikasi kualitas dan keselamatan produk. Untuk
          mengendalikan instalasi dan mesin vital, BIS telah mewajibkan
          perolehan Sertifikasi Skema X sejak 16 Maret 2022 di bawah Peraturan
          Penilaian Kesesuaian BIS, 2018.
        </p>

        {/* Scheme X Key Highlights */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Poin Kunci Sertifikasi Skema X untuk Pompa
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Wajib untuk produsen India dan asing</li>
          <li>
            Berlaku untuk pompa, motor, dan elevator cairan yang tercakup di
            bawah Standar India
          </li>
          <li>
            Termasuk tes laboratorium, inspeksi pabrik, verifikasi kepatuhan
            yang konsisten
          </li>
          <li>
            Menambahkan kekuatan hukum untuk memberikan penggunaan merek BIS
            untuk Pompa oleh produsen sebagai bukti sertifikasi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Peraturan Teknis Omnibus (OTR) Untuk Pompa
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          OTR 2024 telah diumumkan oleh Kementerian Industri Berat, yang
          mengamanatkan bahwa semua pompa dan elevator cairan mematuhi
          Sertifikasi Skema X.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Batas waktu untuk Kepatuhan:
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          Paling lambat 1 September 2026, semua produsen dan importir harus
          memperoleh Lisensi BIS yang valid untuk Pompa di bawah Skema X.
          Ketidakpatuhan dapat menyebabkan denda berat, serta penutupan
          penjualan dan pengecualian dari tender publik.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mengapa sertifikasi BIS untuk Pompa dan Elevator Cairan penting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          1. Jaminan Keselamatan: Memastikan bahwa peralatan dirancang dan
          dibangun untuk ketelitian operasi dan tidak menyebabkan:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Kegagalan listrik</li>
          <li>Kebocoran dan karat</li>
          <li>Kerusakan dan kegagalan mesin</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          2. Keuntungan Pasar
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Pompa bersertifikat BIS sering diperlukan untuk proyek publik,
            tender pemerintah, dll.
          </li>
          <li>
            Memberikan keunggulan kompetitif dibandingkan produk tidak
            bersertifikat.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          3. Kepercayaan Konsumen: Merek ISI pada Pompa memberikan kepercayaan
          kepada pembeli tentang kualitas dan menjamin efisiensi produk.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          4. Merek Global Mendapat Akses Pasar yang Mudah: OEM asing mendapat
          akses mudah ke pasar teratur India dengan mematuhi standar Skema X.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Pumps Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Jenis Pompa Di Bawah Pendaftaran BIS Skema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Skema X berisi berbagai jenis pompa termasuk:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pompa Sentrifugal</li>
          <li>Pompa Submersible</li>
          <li>Pompa Booster</li>
          <li>Pompa Multistage</li>
          <li>Pompa Perpindahan Positif</li>
          <li>Pompa Turbin Vertikal</li>
          <li>Pompa Proses Kimia</li>
          <li>Pompa Diafragma</li>
          <li>Pompa Lumpur</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap jenis harus mematuhi Standar India yang relevan (kode IS)
          seperti IS 16819:2018/ISO 12100:2010 (Keselamatan Mesin - Prinsip Umum
          untuk Desain - Penilaian Risiko dan Pengurangan Risiko).
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Untuk elevator cairan, sertifikasi mencakup:
        </div>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Laju aliran dan tinggi pembuangan</li>
          <li>Kompatibilitas material</li>
          <li>Efisiensi energi</li>
          <li>Keselamatan operasional</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* How to Get BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cara Mendapatkan BIS Skema X untuk Pompa?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identifikasi Standar yang Berlaku: Kutipan harus menentukan kode IS
          yang sesuai (misalnya, IS 9079 untuk pompa submersible).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pengujian Produk: Tes kinerja dan keselamatan wajib di laboratorium
          yang diterima BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Inspeksi Pabrik: Otoritas BIS memeriksa lokasi produksi untuk
          memverifikasi implementasi prosedur kontrol kualitas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumentasi dan Aplikasi: Spesifikasi teknis, laporan tes, dan manual
          kualitas harus menyertai formulir aplikasi BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Penerbitan Sertifikat BIS untuk Pompa: Produsen, setelah disetujui,
          menerima lisensi untuk menerapkan merek BIS di bawah Skema X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pengawasan Berkelanjutan: BIS melakukan audit rutin dan inspeksi
          produk acak untuk memastikan kepatuhan berkelanjutan.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Penalties Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Hukuman untuk Ketidakpatuhan
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang gagal memperoleh sertifikasi BIS, pada 1 September 2026,
          akan tunduk pada:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Larangan penjualan/impor pompa tidak bersertifikat</li>
          <li>Penyitaan barang dan denda.</li>
          <li>Diskualifikasi dari pesanan pemerintah dan PSU</li>
          <li>Kerusakan jangka panjang pada reputasi di India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">Kesimpulan:</span>{" "}
          Sertifikasi BIS Skema X untuk Pompa dan Elevator Cairan dengan OTR
          2024 akan diterapkan; sebuah tonggak dalam standarisasi Industri
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi mereka yang memiliki kegiatan manufaktur, impor, atau ekspor,
          pendaftaran BIS untuk pompa bukan hanya proses kepatuhan hukum yang
          harus diselesaikan, tetapi juga keputusan strategis untuk memastikan
          dominasi keselamatan atas risiko potensial, membangun kepercayaan
          konsumen, dan masuk ke pasar India yang diperluas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Sertifikasi BIS Pompa dan Elevator Cairan adalah investasi jangka
          panjang untuk membangun kredensial dan pasar Produk Anda.
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
