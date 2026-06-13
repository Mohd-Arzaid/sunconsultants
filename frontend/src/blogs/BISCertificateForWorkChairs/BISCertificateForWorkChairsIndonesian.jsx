import FaqAuthorIndonesian from "@/components/common/FaqAuthor/FaqAuthorIndonesian";
import ManyUsersAlsoReadIndonesian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadIndonesian";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForWorkChairsIndonesian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default BISCertificateForWorkChairsIndonesian;

const MetaTags = () => {
  const title = "Sertifikat BIS untuk Kursi Kerja | IS 17631:2022 Lisensi BIS";
  const ogTitle = "Sertifikasi BIS untuk Kursi Kerja – Panduan IS 17631:2022";
  const twitterTitle = "Lisensi BIS untuk Kursi Kerja | IS 17631:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk kursi kerja di bawah IS 17631:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap untuk Sertifikasi BIS untuk Kursi Kerja sesuai IS 17631:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Kursi Kerja di bawah IS 17631:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Kursi Kerja, Lisensi BIS untuk Kursi Kerja, IS 17631:2022, Sertifikasi BIS untuk Kursi Kerja";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
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
                    <Link to="/Blogs">Blog Terbaru</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Sertifikasi BIS untuk Kursi Kerja (IS 17631:2022)
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Kursi Kerja (IS 17631:2022) – Panduan Lengkap
          Sertifikasi Tanda ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Lisensi BIS untuk Kursi Kerja"
            alt="Sertifikasi BIS untuk Kursi Kerja - Panduan Tanda ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi kerja telah menjadi bagian penting dari tempat kerja modern,
          institusi pendidikan, kantor pemerintah, ruang co-working, dan lingkungan
          kantor rumah. Seiring organisasi semakin menekankan kenyamanan karyawan,
          produktivitas, ergonomi tempat kerja, dan kesejahteraan okupasi, permintaan
          akan kursi kerja berkualitas tinggi terus meningkat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi yang dirancang dengan buruk dapat berdampak negatif pada postur,
          kenyamanan, dan produktivitas. Untuk alasan ini, kualitas, keselamatan,
          daya tahan, dan kinerja ergonomis menjadi pertimbangan penting bagi
          produsen, pembeli, dan lembaga pengadaan. Untuk memastikan standar kualitas
          seragam di seluruh industri, Bureau of Indian Standards (BIS) telah
          menetapkan IS 17631:2022, Standar India yang berlaku untuk kursi kerja.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang tercakup dalam kerangka regulasi yang berlaku wajib memperoleh
          Sertifikasi BIS dan menggunakan Tanda ISI pada produk yang memenuhi syarat.
          Sertifikasi BIS menunjukkan bahwa kursi kerja telah dievaluasi terhadap
          persyaratan yang ditetapkan terkait keselamatan, kekuatan, stabilitas,
          daya tahan, dan kinerja ergonomis.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini menjelaskan semua yang perlu diketahui produsen,
          importir, merek furnitur, profesional pengadaan, dan pemilik bisnis tentang
          Sertifikasi BIS untuk Kursi Kerja di bawah IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ringkasan Singkat Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Rincian
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detail
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produk", "Kursi Kerja"],
                ["Standar India yang Berlaku", "IS 17631:2022"],
                ["Jenis Sertifikasi", "Sertifikasi Produk BIS"],
                [
                  "Skema Sertifikasi yang Berlaku",
                  "Skema-I (Sertifikasi Tanda ISI)",
                ],
                ["Tanda yang Berlaku", "Tanda ISI"],
                ["Otoritas Regulasi", "Bureau of Indian Standards (BIS)"],
                ["Kementerian yang Berlaku", "Kementerian Perdagangan dan Industri"],
                [
                  "Persyaratan Kepatuhan",
                  "Wajib di bawah QCO Perabotan yang berlaku (Quality Control Order)",
                ],
                [
                  "Pelamar yang Memenuhi Syarat",
                  "Produsen India dan Produsen Asing ",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Skema Sertifikasi yang Berlaku" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Skema-I (Sertifikasi Tanda ISI)
                      </a>
                    ) : particular === "Persyaratan Kepatuhan" ? (
                      <>
                        Wajib di bawah{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Perabotan yang berlaku (Quality Control Order)</strong>
                        </a>
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apa itu Sertifikasi BIS untuk Kursi Kerja?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Kursi Kerja adalah proses penilaian kesesuaian yang
          dilakukan di bawah Skema Sertifikasi Produk Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan sertifikasi adalah memverifikasi bahwa kursi kerja mematuhi
          persyaratan yang ditentukan di bawah IS 17631:2022. Setelah sertifikasi
          berhasil, produsen diizinkan menggunakan Tanda ISI pada produk mereka.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proses sertifikasi mengevaluasi berbagai aspek kinerja dan keselamatan kursi
          kerja, termasuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Desain ergonomis</li>
          <li>Integritas struktural</li>
          <li>Stabilitas</li>
          <li>Daya tahan</li>
          <li>Persyaratan keselamatan</li>
          <li>Kualitas pengerjaan</li>
          <li>Kinerja produk</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tanda ISI memberikan jaminan bahwa produk telah dinilai terhadap standar
          India yang diakui dan memenuhi persyaratan kualitas yang ditetapkan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Penting untuk Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kursi kerja digunakan dalam jangka waktu lama di kantor, institusi
          pendidikan, tempat usaha komersial, dan ruang kerja di rumah. Karena
          pengguna menghabiskan sebagian besar hari mereka dalam posisi duduk,
          kualitas dan kinerja ergonomis kursi ini secara langsung memengaruhi
          kenyamanan dan efisiensi tempat kerja.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikasi BIS membantu memastikan bahwa kursi kerja bersertifikat:
        </p>

        <ul className={LIST_CLASS}>
          <li>Memenuhi persyaratan keselamatan yang ditetapkan</li>
          <li>Memberikan kinerja yang andal</li>
          <li>Menawarkan kekuatan struktural yang memadai</li>
          <li>Mempertahankan stabilitas selama penggunaan</li>
          <li>Mendukung daya tahan jangka panjang</li>
          <li>Mematuhi standar kualitas India</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen, sertifikasi membantu menunjukkan kualitas produk sekaligus
          mendukung kepatuhan regulasi dan penerimaan pasar.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ringkasan IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 adalah Standar India yang menentukan persyaratan untuk kursi
          kerja.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini menetapkan persyaratan terkait:
        </p>

        <ul className={LIST_CLASS}>
          <li>Keselamatan</li>
          <li>Kekuatan</li>
          <li>Stabilitas</li>
          <li>Daya tahan</li>
          <li>Pertimbangan ergonomis</li>
          <li>Kinerja fungsional</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuannya adalah memastikan bahwa kursi kerja mampu memberikan kinerja yang
          aman dan andal selama penggunaan berkepanjangan di lingkungan tempat kerja.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ruang Lingkup IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menurut standar ini, IS 17631:2022 mencakup kursi kerja dan berlaku untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kursi kerja yang diproduksi sepenuhnya</li>
          <li>Kursi kerja yang difabrikasi</li>
          <li>Kursi kerja siap rakit setelah perakitan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan standar ini berlaku untuk produk yang dirakit dan dimaksudkan
          untuk digunakan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Jenis Kursi Kerja yang Dicakup di Bawah IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bergantung pada desain produk dan aplikasi yang dimaksudkan, standar ini
          dapat berlaku untuk berbagai kategori furnitur tempat duduk di tempat kerja,
          termasuk:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Kursi Kerja Kantor —</strong> Tempat duduk yang digunakan di
            kantor perusahaan, departemen administrasi, dan lingkungan tempat kerja
            profesional.
          </li>
          <li>
            <strong>Kursi Tugas —</strong> Kursi yang dibuat untuk pekerjaan meja
            harian, stasiun kerja, dan tugas duduk rutin.
          </li>
          <li>
            <strong>Kursi Kerja yang Dapat Disesuaikan —</strong> Model dengan fitur
            ketinggian, kemiringan, atau penyesuaian lainnya untuk meningkatkan
            kenyamanan dan ergonomi.
          </li>
          <li>
            <strong>Kursi Kerja Institusional —</strong> Kursi yang disediakan untuk
            sekolah, perguruan tinggi, kantor pemerintah, dan institusi komersial.
          </li>
          <li>
            <strong>Kursi Kantor Rumah —</strong> Kursi kerja yang dirancang untuk
            kerja jarak jauh, pekerja lepas, dan pengaturan kantor di rumah.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tinjau desain produk, mekanisme, dan penggunaan yang dimaksudkan dengan
          cermat untuk memastikan apakah kursi Anda termasuk dalam ruang lingkup IS
          17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Periksa juga Produk Perabotan yang Dicakup di Bawah Sertifikasi BIS
            Wajib —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Sertifikasi BIS untuk perabotan</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Utama di Bawah IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini berfokus pada beberapa karakteristik kinerja penting yang
          berkontribusi terhadap kualitas dan keselamatan kursi kerja.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Desain Ergonomis —</strong> Menangani kenyamanan pengguna,
            dukungan kursi dan sandaran punggung, penyesuaian, dan postur yang tepat
            untuk mengurangi kelelahan dan meningkatkan produktivitas tempat kerja.
          </li>
          <li>
            <strong>Persyaratan Kekuatan —</strong> Rangka, sambungan, dan struktur
            penopang harus menahan penggunaan normal tanpa kegagalan atau kehilangan
            integritas.
          </li>
          <li>
            <strong>Persyaratan Stabilitas —</strong> Kursi harus menahan terbalik
            dan tetap stabil selama penggunaan duduk reguler dan pergerakan.
          </li>
          <li>
            <strong>Persyaratan Daya Tahan —</strong> Produk harus berkinerja
            konsisten setelah penggunaan harian yang berkepanjangan dan berulang
            selama masa pakai yang dimaksudkan.
          </li>
          <li>
            <strong>Persyaratan Keselamatan —</strong> Desain dan konstruksi harus
            meminimalkan bahaya yang dapat dihindari akibat ketidakstabilan, cacat,
            atau konstruksi yang tidak aman.
          </li>
          <li>
            <strong>Kualitas Material —</strong> Komponen dan finishing harus memenuhi
            standar kualitas yang mendukung kinerja yang aman, tahan lama, dan andal.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Sertifikasi BIS Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sebelum sertifikasi diberikan, sampel produk dievaluasi melalui pengujian
          di laboratorium yang diakui. Pengujian membantu memverifikasi kepatuhan
          terhadap persyaratan yang ditentukan di bawah IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Tes Utama yang Dilakukan</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Klausul
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Persyaratan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["4", "Desain dan pengerjaan"],
                ["7.3.1", "Penggulingan Tepi Depan"],
                ["7.3.2", "Penggulingan ke Depan"],
                [
                  "7.3.3",
                  "Penggulingan ke Depan untuk Kursi dengan Sandaran Kaki",
                ],
                [
                  "7.3.4",
                  "Penggulingan ke Samping untuk Kursi Tanpa Sandaran Lengan",
                ],
                [
                  "7.3.5",
                  "Penggulingan ke Samping untuk Kursi dengan Sandaran Lengan",
                ],
                [
                  "7.3.6",
                  "Penggulingan ke Belakang untuk Kursi Tanpa Sandaran Punggung",
                ],
                ["7.4.1", "Pengujian Beban Statis Tepi Depan Kursi"],
                ["7.4.2", "Pengujian Beban Statis Gabungan Kursi dan Punggung"],
                ["7.4.3", "Pengujian Beban Statis Sandaran Lengan ke Bawah — Pusat"],
                ["7.4.4", "Pengujian Beban Statis Sandaran Lengan ke Bawah — Depan"],
                ["7.4.5", "Pengujian Beban Statis Sandaran Lengan ke Samping"],
                ["7.4.6", "Pengujian Beban Statis Sandaran Kaki"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang ingin memperoleh Sertifikasi BIS di bawah IS 17631:2022 harus
          menyelesaikan proses sertifikasi yang terstruktur.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Langkah 1: Penilaian Kelayakan Produk —</strong> Konfirmasi
            apakah kursi kerja termasuk dalam IS 17631:2022 dan QCO Perabotan yang
            berlaku sebelum memulai sertifikasi.
          </li>
          <li>
            <strong>Langkah 2: Persiapan Dokumentasi —</strong> Kumpulkan catatan
            teknis, manufaktur, kontrol kualitas, dan hukum yang diperlukan untuk
            tinjauan BIS.
          </li>
          <li>
            <strong>Langkah 3: Pengujian Produk —</strong> Kirimkan sampel ke
            laboratorium yang diakui BIS untuk evaluasi terhadap IS 17631:2022.
          </li>
          <li>
            <strong>Langkah 4: Pengajuan Aplikasi —</strong> Ajukan aplikasi BIS
            dengan laporan pengujian, detail pabrik, dan dokumen kepatuhan pendukung.
          </li>
          <li>
            <strong>Langkah 5: Inspeksi Pabrik —</strong> BIS menilai sistem produksi,
            prosedur QC, dan ketertelusuran di fasilitas manufaktur.
          </li>
          <li>
            <strong>Langkah 6: Tinjauan Teknis —</strong> BIS mengevaluasi aplikasi,
            hasil laboratorium, dan temuan inspeksi sebelum persetujuan akhir.
          </li>
          <li>
            <strong>Langkah 7: Pemberian Lisensi BIS —</strong> Setelah kepatuhan
            berhasil, BIS menerbitkan lisensi dan mengizinkan penggunaan Tanda ISI
            pada kursi kerja bersertifikat.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Produsen India
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen India biasanya mengajukan melalui jalur sertifikasi domestik.
          Prosesnya umumnya meliputi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pengujian produk di laboratorium yang diakui BIS</li>
          <li>Tinjauan dokumentasi dan pengajuan aplikasi BIS</li>
          <li>Penilaian pabrik dan evaluasi teknis oleh BIS</li>
          <li>Pemberian lisensi BIS dan otorisasi Tanda ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah sertifikasi, produsen harus mempertahankan kepatuhan berkelanjutan
          terhadap persyaratan pengawasan, penandaan, dan kualitas BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Produsen Asing
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen asing yang bermaksud mengekspor kursi kerja ke India juga harus
          memperoleh Sertifikasi BIS sebelum memasok produk yang tercakup dalam
          persyaratan sertifikasi wajib.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Prosesnya umumnya meliputi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Penunjukan Perwakilan India Resmi (AIR – Authorized Indian Representative)</li>
          <li>Pengujian produk di luar negeri dan penilaian pabrik</li>
          <li>Tinjauan aplikasi BIS dan persetujuan sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hal ini memastikan produk impor memenuhi persyaratan kualitas dan
          keselamatan yang sama yang berlaku bagi produsen domestik.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Kursi Kerja
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumentasi merupakan bagian penting dari proses sertifikasi BIS untuk
          kursi kerja. Persyaratan dapat berbeda tergantung apakah pelamar adalah
          produsen India, produsen asing, atau importir, serta skema sertifikasi
          yang diikuti. Catatan yang tidak lengkap atau tidak konsisten termasuk
          di antara alasan paling umum keterlambatan aplikasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dokumen berikut umumnya diperlukan selama sertifikasi BIS kursi kerja di
          bawah IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Dokumen Bisnis —</strong> Sertifikat registrasi perusahaan,
            lisensi manufaktur (jika berlaku), registrasi GST, bukti alamat bisnis,
            dan detail penandatangan yang berwenang beserta identitas dan bukti
            alamat.
          </li>
          <li>
            <strong>Dokumen Manufaktur —</strong> Rencana tata letak pabrik, bagan
            alur proses manufaktur, daftar mesin produksi dan peralatan uji, serta
            detail infrastruktur produksi dan kapasitas terpasang.
          </li>
          <li>
            <strong>Dokumen Produk —</strong> Spesifikasi produk, gambar teknik
            atau engineering, katalog produk atau daftar model, bill of materials
            (BOM), dan detail bahan baku, komponen, dan suku cadang kritis yang
            digunakan dalam kursi kerja.
          </li>
          <li>
            <strong>Dokumen Kontrol Kualitas —</strong> Prosedur kontrol kualitas
            tertulis, catatan inspeksi material masuk, laporan inspeksi dalam proses
            dan barang jadi, metode pengujian internal, dan sertifikat kalibrasi
            untuk peralatan pengukuran dan pengujian.
          </li>
          <li>
            <strong>Dokumen Sertifikasi —</strong> Laporan pengujian dari laboratorium
            yang diakui BIS, formulir aplikasi BIS yang diisi dengan benar,
            pernyataan dan surat pernyataan, sampel label atau penandaan, dan dokumen
            tambahan yang ditetapkan BIS untuk jalur sertifikasi tertentu.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Semua dokumen harus akurat, lengkap, dan konsisten dengan detail produk
          yang diajukan dalam aplikasi BIS. Produsen disarankan untuk meninjau
          persyaratan dokumentasi dengan cermat sebelum mengajukan agar menghindari
          keterlambatan yang tidak perlu dalam pemrosesan sertifikasi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Sertifikasi BIS untuk Kursi Kerja
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Kepatuhan Regulasi —</strong> Memenuhi standar India wajib dan
            persyaratan QCO untuk produksi dan penjualan yang sah.
          </li>
          <li>
            <strong>Akses Pasar Legal —</strong> Memasok kursi kerja bersertifikat
            di India tanpa risiko regulasi untuk kategori produk yang tercakup.
          </li>
          <li>
            <strong>Kredibilitas yang Ditingkatkan —</strong> Tanda ISI menandakan
            kualitas, keselamatan, dan kesesuaian terverifikasi dengan IS 17631:2022.
          </li>
          <li>
            <strong>Kepercayaan Pelanggan —</strong> Pembeli korporat, institusi,
            dan pengguna akhir mempercayai produk yang diuji terhadap benchmark
            nasional.
          </li>
          <li>
            <strong>Pengadaan yang Lebih Baik —</strong> Meningkatkan kelayakan
            dalam tender pemerintah, institusional, dan komersial volume besar.
          </li>
          <li>
            <strong>Reputasi Merek yang Lebih Kuat —</strong> Menunjukkan komitmen
            terhadap kualitas, ergonomi, dan keandalan produk jangka panjang.
          </li>
          <li>
            <strong>Kontrol Kualitas yang Ditingkatkan —</strong> Mendorong sistem
            QC terstruktur, ketertelusuran, dan standar produksi yang konsisten.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum yang Dihadapi Selama Sertifikasi BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretasi teknis —</strong> Memetakan klausul IS 17631:2022
            ke desain kursi, mekanisme, dan varian tertentu dapat menjadi kompleks.
          </li>
          <li>
            <strong>Kegagalan pengujian —</strong> Rangka lemah, stabilitas buruk,
            atau masalah mekanisme sering menyebabkan penolakan tes penggulingan
            atau beban.
          </li>
          <li>
            <strong>Kesenjangan dokumentasi —</strong> Gambar yang tidak cocok,
            catatan QC tidak lengkap, atau pernyataan yang hilang umumnya menunda
            persetujuan.
          </li>
          <li>
            <strong>Kepatuhan pabrik —</strong> Kontrol produksi, ketertelusuran,
            dan pengujian internal mungkin perlu ditingkatkan sebelum pemberian
            lisensi.
          </li>
          <li>
            <strong>Koordinasi regulasi —</strong> Menyelaraskan pengujian
            laboratorium, inspeksi BIS, dan tindak lanjut pertanyaan membutuhkan
            waktu tanpa dukungan ahli.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India adalah konsultan kepatuhan regulasi yang
          membantu produsen, importir, eksportir, dan bisnis memperoleh berbagai
          sertifikasi dan persetujuan yang diperlukan untuk pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tim kami memberikan bantuan end-to-end untuk Sertifikasi BIS Kursi Kerja
          di bawah IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Layanan Kami Meliputi</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Penilaian Kelayakan Produk —</strong> Kami mengonfirmasi apakah
            kursi kerja Anda termasuk dalam IS 17631:2022 dan QCO yang berlaku.
          </li>
          <li>
            <strong>Konsultasi Kepatuhan BIS —</strong> Panduan ahli tentang jalur
            sertifikasi, kewajiban, dan persyaratan standar.
          </li>
          <li>
            <strong>Bantuan Dokumentasi —</strong> Persiapan, tinjauan, dan
            pengorganisasian semua catatan aplikasi BIS dan pabrik.
          </li>
          <li>
            <strong>Koordinasi Pengujian —</strong> Dukungan end-to-end untuk
            pengiriman sampel dan pengujian di laboratorium yang diakui.
          </li>
          <li>
            <strong>Dukungan Inspeksi Pabrik —</strong> Pemeriksaan kesiapan untuk
            penilaian pabrik BIS dan evaluasi kepatuhan.
          </li>
          <li>
            <strong>Manajemen Aplikasi —</strong> Menangani pengajuan BIS, tindak
            lanjut, dan komunikasi regulasi atas nama Anda.
          </li>
          <li>
            <strong>Dukungan Pasca-Sertifikasi —</strong> Bantuan berkelanjutan
            untuk pengawasan, aturan penandaan, dan persyaratan pemeliharaan lisensi.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Kursi Kerja di bawah IS 17631:2022 memainkan peran
          penting dalam memastikan kualitas, keselamatan, daya tahan, stabilitas,
          dan kinerja ergonomis pada produk tempat duduk di tempat kerja.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan memperoleh Sertifikasi BIS dan menggunakan Tanda ISI, produsen
          dapat menunjukkan kepatuhan terhadap standar India, memperkuat kepercayaan
          pelanggan, meningkatkan kredibilitas produk, dan mendukung pertumbuhan
          bisnis jangka panjang.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Baik Anda produsen India maupun produsen luar negeri yang ingin mengakses
          pasar India, memahami persyaratan IS 17631:2022 adalah langkah penting
          menuju kepatuhan regulasi dan kesuksesan pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika Anda berencana memperoleh Sertifikasi BIS untuk Kursi Kerja di bawah
          IS 17631:2022, Sun Certifications India dapat membantu menyederhanakan
          proses melalui panduan regulasi ahli dan dukungan kepatuhan end-to-end.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Kursi Kerja (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Apa itu Sertifikasi BIS untuk Kursi Kerja?</strong>
              <br />
              Sertifikasi BIS mengonfirmasi bahwa kursi kerja mematuhi persyaratan
              IS 17631:2022 dan persyaratan sertifikasi yang berlaku.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Apa itu IS 17631:2022?</strong>
              <br />
              IS 17631:2022 adalah Standar India yang menentukan persyaratan untuk
              kursi kerja, termasuk keselamatan, kekuatan, stabilitas, daya tahan,
              dan pertimbangan ergonomis.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Apakah Sertifikasi BIS wajib untuk kursi kerja?</strong>
              <br />
              Kursi kerja yang tercakup dalam kerangka regulasi yang berlaku wajib
              mematuhi persyaratan sertifikasi BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Apa itu Tanda ISI?</strong>
              <br />
              Tanda ISI adalah tanda sertifikasi standar yang diterbitkan di bawah
              Skema Sertifikasi Produk BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Siapa yang dapat mengajukan Sertifikasi BIS?</strong>
              <br />
              Baik produsen India maupun produsen asing dapat mengajukan.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Apakah Sertifikasi BIS memerlukan pengujian produk?</strong>
              <br />
              Ya. Pengujian produk merupakan bagian penting dari proses sertifikasi.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Apakah kursi kerja impor memerlukan Sertifikasi BIS?
              </strong>
              <br />
              Produk yang tercakup dalam persyaratan sertifikasi wajib harus mematuhi
              peraturan BIS yang berlaku sebelum dipasok di India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Tes apa yang dilakukan di bawah IS 17631:2022?</strong>
              <br />
              Standar ini mencakup evaluasi seperti penilaian desain dan pengerjaan,
              verifikasi dimensi, pengujian stabilitas, dan pengujian beban statis.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Mengapa desain ergonomis penting untuk kursi kerja?</strong>
              <br />
              Desain ergonomis membantu meningkatkan kenyamanan pengguna, mendukung
              postur yang tepat, dan berkontribusi pada pengalaman tempat kerja yang
              lebih baik.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Bagaimana Sun Certifications India dapat membantu?</strong>
              <br />
              Sun Certifications India memberikan bantuan untuk penilaian kelayakan,
              dokumentasi, koordinasi pengujian, persiapan inspeksi, manajemen
              aplikasi, dan dukungan kepatuhan.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Kursi Kerja - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sumber Daya Terkait
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> Sertifikat ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Sertifikat BIS untuk Produsen Asing</a>
          </li>
        </ul>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Tanda BIS (Lisensi ISI) untuk Produsen Asing
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="Logo CDSCO"
                title="Logo CDSCO"
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
                src="/services-images/BISCRS.jpg"
                alt="Logo BISCRS"
                title="Logo BISCRS"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Manajemen Limbah Plastik"
                title="Manajemen Limbah Plastik"
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
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Sertifikat EPR"
                title="Logo Sertifikat EPR"
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
                src="/services-images/LMPC.jpg"
                alt="Logo LMPC"
                title="Logo LMPC"
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
                src="/services-images/BIS.jpg"
                alt="Logo BIS"
                title="Logo BIS"
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
                src="/services-images/ISIMark.jpg"
                alt="Logo Tanda ISI"
                title="Logo Tanda ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              TANDA ISI (BIS) untuk Produsen India
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
