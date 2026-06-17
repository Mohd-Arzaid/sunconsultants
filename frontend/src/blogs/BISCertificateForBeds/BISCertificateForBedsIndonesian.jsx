import FaqAuthorIndonesian from "@/components/common/FaqAuthor/FaqAuthorIndonesian";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import ManyUsersAlsoReadIndonesian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadIndonesian";
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
import LanguageSelector from "./LanguageSelector";
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

const BISCertificateForBedsIndonesian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterIndonesian />
    </div>
  );
};

export default BISCertificateForBedsIndonesian;

const MetaTags = () => {
  const title = "Sertifikat BIS untuk Ranjang | IS 17635:2022 Lisensi BIS";
  const ogTitle = "Sertifikasi BIS untuk Ranjang – Panduan IS 17635:2022";
  const twitterTitle = "Lisensi BIS untuk Ranjang | IS 17635:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk ranjang di bawah IS 17635:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk ranjang sesuai IS 17635:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk ranjang di bawah IS 17635:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Ranjang, Lisensi BIS untuk Ranjang, IS 17635:2022, Sertifikasi BIS untuk Ranjang";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/ranjang-is-17635";
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
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/ranjang-is-17635",
          },
          headline: "Sertifikat BIS untuk Ranjang",
          description:
            "Sertifikasi BIS untuk ranjang di India adalah jaminan kualitas wajib, terutama di bawah IS 17635:2022, yang memastikan standar keselamatan, daya tahan, dan kinerja.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Sertifikat BIS untuk Ranjang",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "Sertifikasi BIS untuk ranjang di India adalah jaminan kualitas wajib, terutama di bawah IS 17635:2022, yang memastikan standar keselamatan, daya tahan, dan kinerja.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Apakah sertifikasi BIS wajib untuk ranjang di India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, di bawah IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Berapa validitas Sertifikat BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 tahun, dapat diperpanjang.",
              },
            },
            {
              "@type": "Question",
              name: "Bisakah produsen asing mengajukan?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, di bawah FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Bisakah Sertifikat BIS diajukan secara online?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah Tanda ISI wajib pada ranjang?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya.",
              },
            },
            {
              "@type": "Question",
              name: "Berapa lama prosesnya?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 hari.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah ranjang kayu dan logam keduanya tercakup?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya, jika sesuai dengan IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Apakah inspeksi pabrik wajib?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ya.",
              },
            },
            {
              "@type": "Question",
              name: "Bisakah pedagang mengajukan BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hanya pemilik merek dengan kontrol manufaktur.",
              },
            },
          ],
        })}
      </script>
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
                    Sertifikat BIS untuk Ranjang – IS 17635:2022
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
          Sertifikat BIS untuk Ranjang – Panduan Lengkap IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="Lisensi BIS untuk Ranjang"
            alt="Sertifikat BIS untuk Ranjang - Sertifikasi BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Ranjang adalah persyaratan kepatuhan wajib di
          India untuk produsen dan importir ranjang yang dimaksudkan untuk
          penggunaan domestik dan komersial. Sesuai dengan Standar India terbaru
          IS 17635:2022 – Ranjang (Persyaratan Keselamatan), semua ranjang harus
          memenuhi tolok ukur keselamatan, daya tahan, struktural, dan kinerja
          yang ketat sebelum dijual di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang adalah produk furnitur penting yang digunakan setiap hari di
          rumah, hotel, rumah sakit, asrama, akomodasi PG, dan fasilitas
          institusional. Kelemahan struktural, tepi tajam, kegagalan material,
          atau kapasitas beban yang buruk dapat menyebabkan cedera serius. Untuk
          mencegah risiko tersebut, Bureau of Indian Standards (BIS) mewajibkan{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Sertifikasi BIS
          </a>{" "}
          untuk Ranjang.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini menjelaskan segala hal tentang Lisensi BIS
          untuk Ranjang, termasuk standar yang berlaku, proses sertifikasi,
          persyaratan pengujian, dokumen, biaya, timeline, sanksi, dan manfaat.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sorotan Utama Sertifikasi BIS untuk Ranjang
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
                ["Produk", "Ranjang"],
                ["Standar India", "IS 17635:2022"],
                ["Judul Standar", "Ranjang – Spesifikasi"],
                ["Skema Sertifikasi", "Sertifikasi Tanda ISI BIS"],
                ["Otoritas Regulasi", "Bureau of Indian Standards (BIS)"],
                ["Tanda yang Berlaku", "Tanda ISI"],
                [
                  "Pelamar yang Memenuhi Syarat",
                  "Produsen India dan Produsen Asing",
                ],
                [
                  "Persyaratan Kepatuhan",
                  "Wajib di bawah QCO Furnitur yang berlaku (Quality Control Order)",
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
                    {particular === "Skema Sertifikasi" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Sertifikasi Tanda ISI BIS
                      </a>
                    ) : particular === "Persyaratan Kepatuhan" ? (
                      <>
                        Wajib di bawah{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Furnitur (Quality Control Order)</strong>
                        </a>{" "}
                        yang berlaku
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
          Apa itu Sertifikasi BIS untuk Ranjang?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Ranjang adalah proses penilaian kesesuaian
          melalui mana produsen menunjukkan bahwa produk mereka mematuhi
          persyaratan yang ditetapkan dalam IS 17635:2022. Setelah kepatuhan
          diverifikasi melalui pengujian, penilaian pabrik, dan tinjauan
          regulasi, produsen diberikan lisensi BIS dan dapat menempelkan Tanda
          ISI pada produk yang disertifikasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kerangka sertifikasi ini dimaksudkan untuk memastikan bahwa ranjang
          yang tersedia di pasar India memenuhi persyaratan yang ditetapkan
          terkait:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kekuatan struktural</li>
          <li>Stabilitas</li>
          <li>Daya tahan</li>
          <li>Kinerja permukaan</li>
          <li>Keselamatan selama penggunaan normal</li>
          <li>Kinerja dalam kondisi penyalahgunaan yang dapat diperkirakan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan ini membantu menciptakan tolok ukur yang konsisten untuk
          kualitas dan perlindungan konsumen di berbagai desain ranjang dan
          material manufaktur.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Penting untuk Ranjang
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang secara langsung memengaruhi keselamatan pengguna karena
          dirancang untuk menopang beban signifikan dalam jangka waktu yang
          lama. Produk yang dirancang dengan buruk atau diuji secara tidak
          memadai dapat mengalami kegagalan struktural, ketidakstabilan,
          deformasi, atau deteriorasi prematur.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 mengatasi kekhawatiran ini dengan mendefinisikan
          persyaratan kinerja dan keselamatan standar yang harus dipenuhi
          produsen sebelum produk mereka memasuki pasar. Standar ini mencakup
          persyaratan terkait kekuatan, stabilitas, daya tahan, pengerjaan, dan
          kinerja permukaan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bagi produsen, sertifikasi BIS menawarkan beberapa keuntungan:
        </p>

        <ul className={LIST_CLASS}>
          <li>Otorisasi hukum untuk menjual produk yang tercakup di India</li>
          <li>Demonstrasi kepatuhan terhadap Standar India</li>
          <li>Penerimaan pasar yang lebih baik</li>
          <li>Kepercayaan konsumen yang meningkat</li>
          <li>Risiko tindakan regulasi yang berkurang</li>
          <li>Keunggulan kompetitif dalam pengadaan institusional dan komersial</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Gambaran Umum IS 17635:2022 untuk Ranjang
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pemerintah India telah memperkenalkan Quality Control Order (QCO)
          untuk beberapa produk furnitur guna memastikan bahwa produk yang
          dipasarkan memenuhi persyaratan keselamatan dan kualitas yang
          ditetapkan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika IS 17635:2022 tercakup di bawah QCO Furnitur yang berlaku,
          produsen diwajibkan memperoleh sertifikasi BIS di bawah Skema-I dan
          menggunakan Tanda Standar (Tanda ISI) sesuai dengan persyaratan
          lisensi BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 adalah Standar India yang menetapkan persyaratan kinerja
          dan keselamatan untuk ranjang yang dimaksudkan untuk pengguna dewasa
          di lingkungan domestik dan non-domestik. Standar ini menetapkan
          persyaratan yang membantu memastikan ranjang tetap aman, fungsional,
          dan tahan lama sepanjang masa layanan yang dimaksudkan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Tujuan IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 dikembangkan untuk menyediakan standar berbasis kinerja
          yang komprehensif yang berlaku untuk desain ranjang modern yang
          diproduksi menggunakan berbagai material dan metode konstruksi.
          Standar ini menggantikan IS 7259 (Bagian 1):1988 sebelumnya, yang
          terutama berfokus pada ranjang kayu.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini mengevaluasi ranjang tanpa membatasi kepatuhan pada
          material atau proses manufaktur tertentu. Sebaliknya, standar ini
          berfokus pada bagaimana produk jadi berkinerja di bawah kondisi
          pengujian yang ditetapkan. Pendekatan ini memungkinkan penilaian yang
          konsisten terhadap konstruksi ranjang kayu, logam, kayu rekayasa, dan
          lainnya.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ruang Lingkup IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Menurut standar ini, IS 17635:2022 mencakup persyaratan terkait
          kinerja dan keselamatan ranjang yang dirancang untuk pengguna dewasa.
          Standar ini berlaku untuk produk yang dimaksudkan untuk digunakan
          baik di lingkungan domestik maupun non-domestik.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini berlaku untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ranjang yang diproduksi sepenuhnya</li>
          <li>Ranjang yang difabrikasi</li>
          <li>Ranjang siap rakit setelah perakitan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hal ini memastikan bahwa produk yang disuplai dalam bentuk terakit
          atau knock-down dievaluasi menggunakan kriteria kinerja dan
          keselamatan yang sama.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Tujuan Standar</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tujuan utama IS 17635:2022 meliputi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Memastikan keselamatan pengguna</li>
          <li>Memverifikasi kekuatan struktural</li>
          <li>Menilai stabilitas produk</li>
          <li>Mengevaluasi daya tahan dalam penggunaan berulang</li>
          <li>Menetapkan persyaratan kinerja minimum</li>
          <li>Mempromosikan kualitas produk yang konsisten di seluruh produsen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standar ini juga mencakup metodologi pengujian yang dimaksudkan untuk
          mengevaluasi ranjang di bawah kondisi penggunaan normal dan skenario
          penyalahgunaan yang dapat diperkirakan secara wajar.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produk yang Tercakup di Bawah IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 berlaku untuk ranjang yang dimaksudkan untuk pengguna
          dewasa di lingkungan domestik dan non-domestik. Standar ini
          berfokus pada kinerja, keselamatan, kekuatan, stabilitas, dan daya
          tahan produk jadi daripada membatasi kepatuhan pada material atau
          metode manufaktur tertentu.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini berlaku untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ranjang yang diproduksi sepenuhnya</li>
          <li>Ranjang yang difabrikasi</li>
          <li>Ranjang siap rakit (RTA) setelah perakitan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang mensuplai ranjang dalam kondisi knock-down harus
          memastikan bahwa produk yang dirakit mematuhi semua persyaratan
          standar yang berlaku.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Catatan:</strong> Standar ini tidak mencakup ranjang air,
          ranjang udara, ranjang lipat, ranjang susun dan ranjang untuk orang
          dengan kebutuhan khusus, maupun ranjang untuk keperluan kesehatan dan
          medis.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Periksa juga Produk Furnitur yang Tercakup di Bawah Sertifikasi BIS
            Wajib —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Sertifikasi BIS untuk furnitur</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Utama di Bawah IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan utama IS 17635:2022 adalah memastikan bahwa ranjang tetap aman,
          stabil, tahan lama, dan layak untuk tujuan yang dimaksudkan sepanjang
          kondisi penggunaan normal. Untuk mencapai tujuan ini, standar
          menetapkan beberapa persyaratan kinerja utama.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Stabilitas</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang harus menunjukkan resistensi yang memadai terhadap
          terbaliknya dan ketidakstabilan selama penggunaan normal. Pengujian
          stabilitas mengevaluasi apakah produk tetap aman ketika dikenai
          kondisi beban yang diharapkan dan gerakan pengguna.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang yang stabil meminimalkan risiko kecelakaan dan meningkatkan
          keselamatan pengguna secara keseluruhan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Kekuatan</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Uji kekuatan menilai kemampuan struktur ranjang untuk menahan beban
          signifikan tanpa kegagalan struktural.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Evaluasi ini biasanya memeriksa:
        </p>

        <ul className={LIST_CLASS}>
          <li>Integritas rangka ranjang</li>
          <li>Kekuatan sambungan</li>
          <li>Kapasitas menahan beban</li>
          <li>Resistensi terhadap deformasi berlebihan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuannya adalah memastikan bahwa produk dapat dengan aman menopang
          pengguna yang dimaksudkan selama operasi sehari-hari.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Daya Tahan</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pengujian daya tahan mensimulasikan penggunaan jangka panjang melalui
          siklus beban dan gerakan berulang.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tujuannya adalah menentukan apakah:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sambungan struktural tetap aman</li>
          <li>Komponen terus berfungsi dengan benar</li>
          <li>Kinerja produk tetap dapat diterima seiring waktu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan daya tahan membantu memastikan bahwa ranjang bersertifikat
          tetap andal sepanjang masa layanan yang diharapkan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Kinerja Permukaan</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 merujuk pada persyaratan kinerja permukaan yang berlaku
          untuk finishing furnitur.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tergantung pada konstruksi dan material yang digunakan, permukaan
          dapat dievaluasi untuk resistensi terhadap:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kerusakan mekanis</li>
          <li>Panas basah</li>
          <li>Panas kering</li>
          <li>Noda</li>
          <li>Kinerja adhesi</li>
          <li>Abrasi dan keausan</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan ini membantu menjaga fungsionalitas dan penampilan selama
          penggunaan normal.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Persyaratan Desain dan Pengerjaan
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini juga berisi persyaratan terkait kualitas desain dan
          pengerjaan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Di antara pertimbangan lainnya:
        </p>

        <ul className={LIST_CLASS}>
          <li>Tepi yang dapat diakses tidak boleh menimbulkan bahaya cedera.</li>
          <li>Tepi tajam dan tonjolan yang tidak aman harus dihindari.</li>
          <li>Bagian berongga harus ditutup dengan benar jika diperlukan.</li>
          <li>Komponen bergerak harus dirancang untuk mengurangi risiko cedera.</li>
          <li>
            Produk jadi harus sesuai dengan spesifikasi desain dan model yang
            dideklarasikan.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Persyaratan Keselamatan</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Keselamatan adalah prinsip inti di seluruh IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini menggabungkan persyaratan yang dimaksudkan untuk
          mengurangi risiko yang timbul dari:
        </p>

        <ul className={LIST_CLASS}>
          <li>Keruntuhan struktural</li>
          <li>Tepi tajam</li>
          <li>Tonjolan yang tidak aman</li>
          <li>Kegagalan komponen</li>
          <li>Stres penggunaan berulang</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kepatuhan terhadap persyaratan ini membantu memastikan bahwa ranjang
          tetap aman di bawah penggunaan normal dan kondisi penyalahgunaan yang
          dapat diperkirakan secara wajar.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apakah Sertifikasi BIS untuk Ranjang Wajib di India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya, untuk produk furnitur yang tercakup di bawah Quality Control Order
          yang berlaku, sertifikasi BIS wajib sebelum produk tersebut dapat
          diproduksi, diimpor, dijual, didistribusikan, disimpan, atau
          ditawarkan untuk dijual di India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus memverifikasi status pemberitahuan terbaru dan tanggal
          implementasi yang dikeluarkan oleh Pemerintah India karena persyaratan
          regulasi dapat diperbarui dari waktu ke waktu.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Persyaratan Penggunaan Tanda ISI
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda ISI berfungsi sebagai bukti bahwa produk sesuai dengan Standar
          India yang relevan dan diproduksi di bawah lisensi BIS yang valid.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tanda ini hanya dapat diterapkan setelah:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pengujian produk berhasil</li>
          <li>Penilaian pabrik</li>
          <li>Persetujuan BIS atas aplikasi</li>
          <li>Pemberian lisensi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Penggunaan Tanda ISI tanpa otorisasi dilarang di bawah BIS Act, 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Ranjang (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi BIS di India mengikuti prosedur terstruktur di
          bawah Skema Sertifikasi ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 1 – Identifikasi Standar & Ruang Lingkup Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Konfirmasi keterapan di bawah IS 17635:2022 dan tentukan varian
          produk.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 2 – Aplikasi BIS (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ajukan aplikasi melalui Portal Online BIS Manak dengan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Detail produsen</li>
          <li>Alamat pabrik</li>
          <li>Deskripsi produk</li>
          <li>Nama merek</li>
          <li>Detail kontrol kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 3 – Biaya Sertifikasi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bayar biaya yang berlaku termasuk:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Biaya aplikasi</li>
          <li>Biaya pemrosesan</li>
          <li>Biaya pengujian</li>
          <li>Biaya inspeksi</li>
          <li>Biaya penandaan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 4 – Pengujian Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sampel diuji di laboratorium yang diakui BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Pengujian Mencakup
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uji beban statis</li>
          <li>Uji daya tahan</li>
          <li>Uji stabilitas</li>
          <li>Uji kekuatan sambungan</li>
          <li>Uji finishing permukaan</li>
          <li>Uji keselamatan tepi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 5 – Inspeksi Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Petugas BIS memeriksa:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fasilitas manufaktur</li>
          <li>Kontrol bahan baku</li>
          <li>Pengujian dalam proses</li>
          <li>Sistem jaminan kualitas</li>
          <li>Peralatan pengujian</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 6 – Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Setelah kepatuhan, BIS mengeluarkan:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sertifikat BIS</li>
          <li>Izin Tanda ISI</li>
          <li>Nomor CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Langkah 7 – Kepatuhan Pasca-Sertifikasi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspeksi pengawasan</li>
          <li>Perpanjangan setiap 1–2 tahun</li>
          <li>Kontrol kualitas berkelanjutan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Ranjang
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Berikut adalah daftar lengkap Dokumen Sertifikat BIS:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Produsen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrasi/lisensi pabrik</li>
          <li>Diagram alir proses manufaktur</li>
          <li>Daftar mesin</li>
          <li>Daftar peralatan pengujian</li>
          <li>Sertifikat kalibrasi</li>
          <li>Layout pabrik</li>
          <li>Rencana kontrol kualitas</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Hukum
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bukti alamat</li>
          <li>Bukti identitas</li>
          <li>Otorisasi merek</li>
          <li>Sertifikat merek dagang (jika berlaku)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Dokumen Teknis
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gambar produk</li>
          <li>Spesifikasi</li>
          <li>Daftar material</li>
          <li>Laporan uji internal</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Ranjang (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ranjang harus menjalani pengujian yang ketat untuk memastikan
          kepatuhan.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Uji Wajib
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Desain dan pengerjaan
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Stabilitas
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Beban Statis Vertikal pada Dasar Ranjang
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Beban Statis Vertikal pada Rel Sisi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Beban Statis Horizontal
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Uji Dampak Vertikal
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Pengujian harus dilakukan hanya di laboratorium yang disetujui BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum & Cara Menghindarinya
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Pemilihan standar yang salah</strong> – Selalu verifikasi
            Standar India yang benar.
          </li>
          <li>
            <strong>Dokumentasi yang buruk</strong> – Dokumen yang hilang
            menyebabkan penundaan; siapkan sebelumnya.
          </li>
          <li>
            <strong>Uji lab gagal</strong> – Pastikan material dan konstruksi
            berkualitas tinggi.
          </li>
          <li>
            <strong>Pabrik tidak siap</strong> – Pastikan QMS dan peralatan uji
            dipelihara dengan baik.
          </li>
          <li>
            <strong>Ketidakcocokan merek dagang</strong> – Nama merek harus
            sesuai dengan aplikasi lisensi.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanksi untuk Ketidakpatuhan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Menjual ranjang tanpa sertifikasi BIS dapat menyebabkan:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Denda berat</li>
          <li>Penyitaan produk</li>
          <li>Penutupan bisnis</li>
          <li>Tindakan hukum</li>
          <li>Larangan pasar</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Kami untuk Sertifikasi BIS untuk Ranjang?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Kami menyediakan konsultasi BIS dari ujung ke ujung, termasuk:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pemetaan standar</li>
          <li>Dukungan dokumentasi</li>
          <li>Koordinasi pengujian</li>
          <li>Pengajuan aplikasi</li>
          <li>Penanganan inspeksi pabrik</li>
          <li>Liaison BIS</li>
          <li>Penerbitan lisensi</li>
          <li>Dukungan perpanjangan & pengawasan</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikat BIS untuk Ranjang di bawah IS 17635:2022 adalah persyaratan
          hukum wajib yang memastikan keselamatan, kualitas, dan daya tahan.
          Memperoleh Lisensi BIS untuk Ranjang melindungi konsumen, memperkuat
          nilai merek, dan memungkinkan akses pasar yang sah di seluruh India.
          Dengan dukungan ahli, proses sertifikasi menjadi lancar dan efisien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikat BIS untuk Ranjang
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Apakah sertifikasi BIS wajib untuk ranjang di India?
              </strong>
              <br />
              Ya, di bawah IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Berapa validitas Sertifikat BIS?</strong>
              <br />
              1–2 tahun, dapat diperpanjang.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Bisakah produsen asing mengajukan?</strong>
              <br />
              Ya, di bawah FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Bisakah Sertifikat BIS diajukan secara online?</strong>
              <br />
              Ya.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Apakah Tanda ISI wajib pada ranjang?</strong>
              <br />
              Ya.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Berapa lama prosesnya?</strong>
              <br />
              30–45 hari.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Apakah ranjang kayu dan logam keduanya tercakup?
              </strong>
              <br />
              Ya, jika sesuai dengan IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Apakah inspeksi pabrik wajib?</strong>
              <br />
              Ya.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Bisakah pedagang mengajukan BIS?</strong>
              <br />
              Hanya pemilik merek dengan kontrol manufaktur.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Ranjang - PDF IS 17635:2022"
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
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Sertifikat Tanda ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Lisensi BIS FMCS
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={1} />
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
