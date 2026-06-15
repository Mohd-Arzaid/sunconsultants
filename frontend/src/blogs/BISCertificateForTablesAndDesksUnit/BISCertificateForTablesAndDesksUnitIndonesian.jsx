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

const BISCertificateForTablesAndDesksUnitIndonesian = () => {
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

export default BISCertificateForTablesAndDesksUnitIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Meja & Meja Tulis | Lisensi BIS IS 17633:2022";
  const ogTitle = "Sertifikasi BIS untuk Meja & Meja Tulis – Panduan IS 17633:2022";
  const twitterTitle = "Lisensi BIS untuk Meja & Meja Tulis | IS 17633:2022";
  const metaDescription =
    "Dapatkan Sertifikat BIS untuk Meja & Meja Tulis di bawah IS 17633:2022. Proses, dokumen, pengujian, biaya & timeline untuk Sertifikasi BIS di India.";
  const ogDescription =
    "Panduan lengkap Sertifikasi BIS untuk Meja & Meja Tulis sesuai IS 17633:2022. Ketahui proses, biaya, dokumen, pengujian & manfaat lisensi BIS.";
  const twitterDescription =
    "Ajukan Sertifikat BIS untuk Meja & Meja Tulis di bawah IS 17633:2022. Pelajari proses BIS, dokumen, pengujian, biaya & timeline di India.";
  const metaKeywords =
    "Sertifikat BIS untuk Meja & Meja Tulis, Lisensi BIS untuk Meja & Meja Tulis, IS 17633:2022, Sertifikasi BIS untuk Meja & Meja Tulis";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meja-dan-meja-tulis-is-17633";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    Sertifikat BIS untuk Meja & Meja Tulis – IS 17633:2022
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
          Sertifikasi BIS untuk Meja dan Meja Tulis (IS 17633:2022) – Panduan
          Lengkap Sertifikasi Tanda ISI
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Lisensi BIS untuk Meja dan Meja Tulis"
            alt="Sertifikasi BIS untuk Meja dan Meja Tulis - Panduan Tanda ISI IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meja dan meja tulis termasuk produk furnitur yang paling banyak
          digunakan di kantor, lembaga pendidikan, perusahaan komersial,
          organisasi pemerintah, dan ruang hunian. Karena produk-produk ini
          diharapkan mampu menahan penggunaan rutin sekaligus menjamin
          keselamatan pengguna, stabilitas, dan daya tahan, kepatuhan terhadap
          standar kualitas yang diakui menjadi semakin penting bagi produsen dan
          importir.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Di India, meja dan meja tulis yang tercakup dalam IS 17633:2022 wajib
          mematuhi persyaratan kualitas dan keselamatan yang berlaku sebagaimana
          ditetapkan oleh Bureau of Indian Standards (BIS). Produsen yang berhasil
          memenuhi persyaratan ini dapat memperoleh lisensi BIS dan menggunakan
          Tanda ISI pada produk mereka, yang menunjukkan kesesuaian dengan Standar
          India yang relevan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Proses sertifikasi mengevaluasi berbagai aspek kinerja produk,
          termasuk kekuatan, stabilitas, daya tahan, pengerjaan, dimensi, dan
          keselamatan secara keseluruhan. Kepatuhan tidak hanya membantu bisnis
          memenuhi persyaratan regulasi tetapi juga meningkatkan kredibilitas
          produk dan penerimaan pasar.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Panduan komprehensif ini menjelaskan segala hal yang perlu diketahui
          produsen, importir, merek furnitur, dan profesional pengadaan tentang
          Sertifikasi BIS untuk Meja dan Meja Tulis di bawah IS 17633:2022,
          termasuk keberlakuan, persyaratan sertifikasi, parameter pengujian,
          dokumentasi, manfaat, dan proses sertifikasi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sorotan Utama Sertifikasi BIS untuk Meja dan Meja Tulis
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
                ["Produk", "Meja dan Meja Tulis"],
                ["Standar yang Berlaku", "IS 17633:2022"],
                ["Jenis Sertifikasi", "Sertifikasi Produk BIS"],
                ["Tanda yang Berlaku", "Tanda ISI"],
                ["Skema Sertifikasi", "Skema-I (Sertifikasi Tanda ISI)"],
                ["Otoritas Regulasi", "Bureau of Indian Standards (BIS)"],
                ["Sektor yang Berlaku", "Furnitur"],
                [
                  "Pemohon yang Memenuhi Syarat",
                  "Produsen India dan Produsen Asing",
                ],
                [
                  "Persyaratan Kepatuhan",
                  "Wajib di bawah QCO Furnitur (Perintah Kontrol Kualitas) yang berlaku",
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
                        Skema-I (Sertifikasi Tanda ISI)
                      </a>
                    ) : particular === "Persyaratan Kepatuhan" ? (
                      <>
                        Wajib di bawah {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>QCO Furnitur (Perintah Kontrol Kualitas)</strong>
                        </a>
                        {" "}yang berlaku
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
          Apa itu Sertifikasi BIS untuk Meja dan Meja Tulis?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Meja dan Meja Tulis adalah proses penilaian
          kesesuaian yang dilakukan di bawah Skema Sertifikasi Produk Bureau of
          Indian Standards (BIS). Sertifikasi ini memastikan bahwa produk mematuhi
          persyaratan yang ditentukan dalam IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah sertifikasi berhasil, produsen diizinkan menggunakan Tanda ISI
          pada produk mereka, yang menunjukkan kepatuhan terhadap Standar India
          yang berlaku.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Sertifikasi ini bertujuan memastikan bahwa meja dan meja tulis yang
          dipasok di pasar India memenuhi persyaratan yang ditetapkan terkait:
        </p>

        <ul className={LIST_CLASS}>
          <li>Kekuatan struktural dan stabilitas selama penggunaan normal</li>
          <li>Daya tahan, keselamatan pengguna, dan kualitas pengerjaan material</li>
          <li>Persyaratan kinerja penuh di bawah IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi pembeli dan lembaga pengadaan, Tanda ISI menjadi jaminan bahwa
          furnitur telah dievaluasi terhadap tolok ukur kualitas dan keselamatan
          yang diakui.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ikhtisar IS 17633:2022 untuk Meja dan Meja Tulis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 adalah Standar India yang menetapkan persyaratan kinerja
          dan keselamatan untuk meja dan meja tulis yang ditujukan bagi pengguna
          dewasa dalam aplikasi duduk dan berdiri.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini mencakup keduanya:
        </p>

        <ul className={LIST_CLASS}>
          <li>Meja dan meja tulis yang diproduksi penuh (siap pakai)</li>
          <li>Unit siap rakit (RTA) — diuji setelah perakitan lengkap</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan standar ini adalah menetapkan persyaratan kinerja dan
          keselamatan minimum yang membantu memastikan furnitur tetap stabil,
          tahan lama, dan aman sepanjang masa pakai yang dimaksudkan.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Area Utama yang Dicakup Di Bawah IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Standar ini berfokus pada beberapa karakteristik kinerja penting,
          termasuk:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Persyaratan Kekuatan —</strong> Meja dan meja tulis harus mampu
            menahan beban yang diperkirakan selama penggunaan normal tanpa
            kegagalan atau deformasi berlebihan.
          </li>
          <li>
            <strong>Persyaratan Stabilitas —</strong> Furnitur harus tetap stabil
            saat digunakan dan tahan terhadap terbalik di bawah kondisi pembebanan
            yang dapat diperkirakan.
          </li>
          <li>
            <strong>Persyaratan Daya Tahan —</strong> Produk harus mempertahankan
            kinerja dan integritas struktural setelah penggunaan berulang dalam
            jangka waktu yang lama.
          </li>
          <li>
            <strong>Persyaratan Keselamatan —</strong> Desain dan konstruksi harus
            meminimalkan risiko dari ketidakstabilan, tepi tajam, konstruksi tidak
            aman, atau kegagalan struktural.
          </li>
          <li>
            <strong>Kualitas Pengerjaan &amp; Konstruksi —</strong> Pengerjaan,
            perakitan, sambungan, pengencang, dan konstruksi keseluruhan dinilai
            untuk kinerja jangka panjang yang andal.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Apakah Sertifikasi BIS untuk Meja dan Meja Tulis Wajib di India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ya. Meja dan meja tulis yang tercakup dalam Perintah Kontrol Kualitas
          (QCO) Furnitur yang berlaku wajib mematuhi Standar India yang relevan
          dan memperoleh Sertifikasi BIS sebelum diproduksi, diimpor, dijual,
          didistribusikan, atau ditawarkan di pasar India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Tujuan sertifikasi wajib adalah untuk:
        </p>

        <ul className={LIST_CLASS}>
          <li>Memastikan kualitas produk yang lebih tinggi di seluruh industri furnitur</li>
          <li>Melindungi keselamatan konsumen melalui standar yang terverifikasi</li>
          <li>Mencegah furnitur di bawah standar memasuki pasar</li>
          <li>Mempromosikan standardisasi dan tolok ukur kualitas yang seragam</li>
          <li>Membangun kepercayaan pembeli terhadap produk bersertifikat Tanda ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang tercakup dalam peraturan yang berlaku harus memperoleh
          lisensi BIS dan menggunakan Tanda ISI sesuai dengan persyaratan BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Periksa juga Produk Furnitur yang Tercakup dalam Sertifikasi BIS
            Wajib —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>Sertifikasi BIS untuk furnitur</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cakupan Produk Di Bawah IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cakupan IS 17633:2022 meliputi berbagai kategori meja dan meja tulis
          yang dirancang untuk pengguna dewasa di lingkungan hunian, komersial,
          institusional, dan tempat kerja.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Contoh produk yang umumnya dicakup meliputi:
        </p>

        <ul className={LIST_CLASS}>
          <li>Meja kantor, meja belajar, dan meja komputer</li>
          <li>Workstation dan meja serbaguna</li>
          <li>Meja konferensi dan meja rapat</li>
          <li>Meja institusional dan meja laboratorium</li>
          <li>Furnitur co-working dan penggunaan komersial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus meninjau dengan cermat spesifikasi produk dan tujuan
          penggunaan untuk menentukan apakah produk mereka termasuk dalam cakupan
          IS 17633:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Teknis Utama Di Bawah IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Untuk memperoleh sertifikasi BIS, meja dan meja tulis harus memenuhi
          berbagai persyaratan kinerja dan keselamatan yang ditentukan oleh
          standar.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Integritas Struktural —</strong> Produk harus berkinerja di
            bawah beban yang ditentukan; sambungan dan struktur penopang tetap
            aman selama pengujian.
          </li>
          <li>
            <strong>Kinerja Menahan Beban —</strong> Meja dan meja tulis harus
            menopang beban yang ditentukan tanpa deformasi, kerusakan, atau
            kegagalan yang tidak dapat diterima.
          </li>
          <li>
            <strong>Kinerja Stabilitas —</strong> Furnitur harus tetap stabil saat
            digunakan dan mengurangi risiko terbalik yang dapat menyebabkan cedera
            atau kerusakan properti.
          </li>
          <li>
            <strong>Kinerja Daya Tahan —</strong> Produk harus mampu menahan siklus
            penggunaan berulang sambil mempertahankan kinerja yang dapat diterima.
          </li>
          <li>
            <strong>Material &amp; Pengerjaan —</strong> Material, finishing, dan
            metode perakitan harus memenuhi kontrol kualitas untuk produksi yang
            konsisten.
          </li>
          <li>
            <strong>Pertimbangan Keselamatan —</strong> Desain harus meminimalkan
            bahaya dari penggunaan furnitur bagi konsumen dan pembeli
            institusional.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Sertifikasi BIS Penting bagi Produsen Furnitur
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pasar furnitur India semakin sadar akan kualitas. Departemen
          pemerintah, lembaga pendidikan, pembeli korporat, dan lembaga pengadaan
          besar sering kali lebih memilih produk yang mematuhi standar yang
          diakui.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Memperoleh sertifikasi BIS membantu produsen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Membuktikan kepatuhan terhadap standar India yang berlaku</li>
          <li>Meningkatkan kredibilitas produk dan reputasi merek</li>
          <li>Memenangkan kepercayaan pelanggan dan pembeli institusional</li>
          <li>Meningkatkan penerimaan dalam pengadaan pemerintah dan korporat</li>
          <li>Memperkuat praktik manajemen kualitas internal</li>
          <li>Tetap unggul terhadap perubahan persyaratan regulasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bagi produsen yang mencari pertumbuhan jangka panjang, sertifikasi BIS
          sering kali dipandang sebagai persyaratan kepatuhan sekaligus keunggulan
          bisnis strategis.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Persyaratan Pengujian untuk Meja dan Meja Tulis Di Bawah IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sebelum produsen dapat memperoleh sertifikasi BIS, sampel produk harus
          dievaluasi terhadap persyaratan IS 17633:2022 yang berlaku melalui
          pengujian di laboratorium yang diakui BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan pengujian adalah memverifikasi bahwa furnitur memenuhi standar
          yang ditentukan untuk keselamatan, stabilitas, kekuatan, daya tahan, dan
          kinerja secara keseluruhan.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Meskipun parameter pengujian yang tepat dapat bervariasi tergantung pada
          desain produk dan persyaratan sertifikasi, produsen umumnya dinilai
          untuk karakteristik berikut:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Desain &amp; Pengerjaan —</strong> Kualitas konstruksi,
            perakitan, finishing, dan integritas produk keseluruhan diperiksa untuk
            penggunaan jangka panjang yang aman.
          </li>
          <li>
            <strong>Verifikasi Dimensi —</strong> Pengukuran penting diperiksa
            terhadap standar dan spesifikasi produk yang disetujui.
          </li>
          <li>
            <strong>Pengujian Stabilitas —</strong> Memastikan produk tetap stabil
            dalam penggunaan normal dan menandai kelemahan terbalik atau struktural.
          </li>
          <li>
            <strong>Pengujian Beban Statis —</strong> Memverifikasi kapasitas
            menahan beban tanpa kegagalan, deformasi berlebihan, atau kerusakan.
          </li>
          <li>
            <strong>Pengujian Kekuatan —</strong> Menilai rangka, sambungan, dan
            penopang di bawah tekanan operasional selama penggunaan rutin.
          </li>
          <li>
            <strong>Penilaian Daya Tahan —</strong> Memeriksa retensi kinerja
            setelah siklus penggunaan berulang.
          </li>
          <li>
            <strong>Penilaian Keselamatan —</strong> Menyingkirkan risiko yang dapat
            dihindari dari ketidakstabilan, cacat, atau fitur desain yang tidak
            aman.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Proses Sertifikasi BIS untuk Meja dan Meja Tulis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen yang mencari sertifikasi BIS di bawah IS 17633:2022 harus
          mengikuti proses sertifikasi terstruktur yang ditetapkan oleh Bureau of
          Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meskipun persyaratan spesifik dapat bervariasi berdasarkan jenis pemohon
          dan lokasi manufaktur, proses umumnya tetap serupa.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 1: Penilaian Cakupan Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Langkah pertama melibatkan penentuan apakah produk termasuk dalam cakupan
          IS 17633:2022 dan Perintah Kontrol Kualitas yang berlaku. Tinjauan teknis
          terhadap spesifikasi produk, tujuan penggunaan, material, dan konstruksi
          biasanya dilakukan sebelum memulai proses sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 2: Persiapan Dokumentasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen menyiapkan dokumentasi yang diperlukan, termasuk informasi
          perusahaan, detail manufaktur, spesifikasi produk, prosedur kontrol
          kualitas, dan catatan teknis pendukung. Dokumentasi yang tepat sangat
          penting karena kekurangan pada tahap ini dapat menunda sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 3: Pengujian Produk
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sampel produk diuji di laboratorium yang diakui BIS untuk memverifikasi
          kepatuhan terhadap persyaratan IS 17633:2022. Laporan pengujian menjadi
          salah satu dokumen teknis utama yang mendukung aplikasi sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 4: Pengajuan Aplikasi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aplikasi BIS diajukan bersama dengan dokumen pendukung, laporan
          pengujian, informasi manufaktur, dan catatan manajemen kualitas.
          Aplikasi ditinjau oleh BIS untuk kelengkapan dan kepatuhan teknis.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 5: Penilaian Pabrik
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS dapat melakukan inspeksi pabrik untuk mengevaluasi:
        </p>
        <ul className={LIST_CLASS}>
          <li>Infrastruktur manufaktur dan kemampuan produksi</li>
          <li>Sistem kontrol kualitas dan fasilitas pengujian internal</li>
          <li>Kontrol material mentah dan mekanisme keterlacakan produk</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuannya adalah memverifikasi kemampuan produsen untuk secara konsisten
          memproduksi produk yang patuh.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 6: Evaluasi dan Tinjauan
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS meninjau aplikasi, temuan inspeksi, dan laporan pengujian
          laboratorium sebelum membuat keputusan sertifikasi. Setiap pengamatan
          yang muncul selama proses tinjauan harus ditangani oleh pemohon.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Langkah 7: Pemberian Lisensi BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah berhasil menyelesaikan semua persyaratan, BIS memberikan lisensi
          dan mengizinkan produsen menggunakan Tanda ISI pada meja dan meja tulis
          bersertifikat.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Produsen India
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Produsen India umumnya mengajukan di bawah prosedur sertifikasi domestik
          yang ditetapkan oleh BIS. Proses ini biasanya mencakup:
        </p>

        <ul className={LIST_CLASS}>
          <li>Pengujian produk di laboratorium yang diakui BIS</li>
          <li>Pengajuan aplikasi dengan dokumen pendukung</li>
          <li>Inspeksi pabrik dan tinjauan teknis oleh BIS</li>
          <li>Pemberian lisensi BIS dan otorisasi Tanda ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Setelah disertifikasi, produsen harus terus mematuhi persyaratan BIS dan
          mempertahankan kualitas produk yang konsisten sepanjang masa lisensi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Produsen Asing
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen asing yang berniat mengekspor meja dan meja tulis ke India juga
          harus memperoleh sertifikasi BIS sebelum memasok produk yang tercakup
          dalam Perintah Kontrol Kualitas yang berlaku.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Proses sertifikasi umumnya melibatkan:
        </p>

        <ul className={LIST_CLASS}>
          <li>Penunjukan Perwakilan India yang Berwenang (AIR)</li>
          <li>Pengujian produk dan penilaian pabrik di luar negeri</li>
          <li>Tinjauan dokumentasi dan persetujuan sertifikasi BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen asing harus memastikan kepatuhan berkelanjutan terhadap
          persyaratan BIS untuk mempertahankan validitas sertifikasi.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Dokumen yang Diperlukan untuk Sertifikasi BIS Meja dan Meja Tulis
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Persyaratan dokumentasi dapat bervariasi tergantung pada produsen dan
          jalur sertifikasi. Namun, dokumen berikut umumnya diperlukan selama
          proses sertifikasi.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Dokumen Bisnis dan Hukum</h3>
        <ul className={LIST_CLASS}>
          <li>Pendaftaran perusahaan, lisensi manufaktur, dan GST (jika berlaku)</li>
          <li>Detail penandatangan yang berwenang dan bukti identitas</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informasi Manufaktur</h3>
        <ul className={LIST_CLASS}>
          <li>Diagram alir proses, layout pabrik, dan detail mesin</li>
          <li>Infrastruktur produksi dan catatan kapasitas</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informasi Produk</h3>
        <ul className={LIST_CLASS}>
          <li>Spesifikasi produk, gambar teknis, dan katalog</li>
          <li>Daftar material dan detail material/komponen</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Dokumen Kontrol Kualitas</h3>
        <ul className={LIST_CLASS}>
          <li>Pengujian internal, inspeksi, dan prosedur QC</li>
          <li>Catatan kontrol kualitas dan laporan kalibrasi peralatan</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Dokumen Sertifikasi</h3>
        <ul className={LIST_CLASS}>
          <li>Laporan pengujian laboratorium dan formulir aplikasi BIS yang diisi</li>
          <li>Deklarasi, undertaking, dan dokumen lain yang ditentukan BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Produsen harus memastikan bahwa semua dokumentasi akurat, lengkap, dan
          konsisten sebelum pengajuan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tantangan Umum Selama Sertifikasi BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meskipun proses sertifikasi mudah jika dikelola dengan baik, produsen
          sering kali menghadapi beberapa tantangan.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interpretasi teknis —</strong> Memetakan persyaratan IS
            17633:2022 ke desain produk tertentu bisa sulit tanpa panduan ahli.
          </li>
          <li>
            <strong>Kegagalan pengujian —</strong> Sambungan lemah, stabilitas
            buruk, atau masalah material sering menyebabkan penolakan uji
            laboratorium.
          </li>
          <li>
            <strong>Kesenjangan dokumentasi —</strong> Catatan yang tidak lengkap
            atau tidak sesuai adalah penyebab umum penundaan aplikasi.
          </li>
          <li>
            <strong>Kepatuhan pabrik —</strong> Sistem QC, keterlacakan, atau
            kontrol produksi mungkin perlu ditingkatkan sebelum pemberian lisensi.
          </li>
          <li>
            <strong>Koordinasi regulasi —</strong> Menyelaraskan pengujian
            laboratorium, inspeksi, dan tindak lanjut BIS membutuhkan waktu tanpa
            dukungan terstruktur.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Manfaat Bantuan Sertifikasi BIS Profesional
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bekerja dengan konsultan BIS berpengalaman dapat membantu produsen
          menghindari penundaan yang mahal dan memperlancar perjalanan
          sertifikasi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dukungan profesional biasanya mencakup:
        </p>

        <ul className={LIST_CLASS}>
          <li>Tinjauan cakupan produk dan interpretasi standar</li>
          <li>Persiapan dokumentasi dan pengajuan aplikasi</li>
          <li>Koordinasi pengujian laboratorium dan inspeksi pabrik</li>
          <li>Kepatuhan berkelanjutan dan dukungan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ini memungkinkan produsen fokus pada produksi sambil memastikan
          persyaratan regulasi ditangani secara efisien.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Mengapa Memilih Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India adalah konsultansi kepatuhan regulasi yang
          membantu produsen, importir, eksportir, dan bisnis dengan persyaratan
          sertifikasi dan persetujuan di seluruh India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Para ahli kami memberikan dukungan menyeluruh untuk Sertifikasi BIS untuk
          Meja dan Meja Tulis di bawah IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Layanan Kami Meliputi</h3>

        <ul className={LIST_CLASS}>
          <li>Penilaian keberlakuan produk dan konsultasi kepatuhan BIS</li>
          <li>Dukungan dokumentasi dan manajemen aplikasi</li>
          <li>Koordinasi pengujian dan bantuan inspeksi pabrik</li>
          <li>Komunikasi regulasi dan dukungan kepatuhan pasca-sertifikasi</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tujuan kami adalah membantu bisnis menavigasi proses sertifikasi secara
          efisien sambil meminimalkan penundaan dan tantangan kepatuhan.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kesimpulan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS untuk Meja dan Meja Tulis di bawah IS 17633:2022 adalah
          persyaratan penting bagi produsen yang ingin memasok produk furnitur yang
          patuh di pasar India. Sertifikasi ini membantu memastikan bahwa meja dan
          meja tulis memenuhi standar yang ditetapkan terkait keselamatan,
          stabilitas, daya tahan, kekuatan, dan kualitas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dengan memperoleh Sertifikasi BIS dan menggunakan Tanda ISI, produsen
          dapat menunjukkan kepatuhan terhadap standar India, meningkatkan
          kepercayaan pelanggan, memperkuat posisi pasar mereka, dan mendukung
          pertumbuhan bisnis jangka panjang.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jika Anda berencana memperoleh Sertifikasi BIS untuk Meja dan Meja Tulis
          di bawah IS 17633:2022, Sun Certifications India dapat membantu Anda
          dengan dukungan kepatuhan menyeluruh, membantu Anda menavigasi proses
          sertifikasi secara efisien dan percaya diri.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Sertifikasi BIS untuk Meja dan Meja Tulis (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Apa itu IS 17633:2022?</strong>
              <br />
              IS 17633:2022 adalah Standar India yang diterbitkan oleh Bureau of
              Indian Standards (BIS) yang menetapkan persyaratan minimum kinerja,
              stabilitas, daya tahan, dan keselamatan untuk meja dan meja tulis yang
              ditujukan bagi pengguna dewasa dalam aplikasi duduk dan berdiri.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Apakah sertifikasi BIS wajib untuk meja dan meja tulis?</strong>
              <br />
              Ya — untuk produk yang tercakup dalam Perintah Kontrol Kualitas (QCO)
              Furnitur yang berlaku. Produsen dan importir harus memiliki lisensi
              BIS yang valid dan mematuhi IS 17633:2022 sebelum memproduksi,
              mengimpor, menjual, atau mendistribusikan furnitur tersebut di India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Tanda sertifikasi mana yang berlaku untuk meja dan meja tulis?</strong>
              <br />
              Meja dan meja tulis bersertifikat diizinkan menggunakan Tanda ISI di
              bawah Skema Sertifikasi Produk BIS, yang menunjukkan bahwa produk
              sesuai dengan Standar India yang berlaku.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Siapa yang dapat mengajukan sertifikasi BIS?</strong>
              <br />
              Baik produsen India maupun produsen asing dapat mengajukan, asalkan
              meja dan meja tulis mereka termasuk dalam cakupan QCO yang berlaku dan
              memenuhi persyaratan IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Apa tujuan sertifikasi BIS?</strong>
              <br />
              Sertifikasi BIS memastikan bahwa furnitur memenuhi tolok ukur yang
              diakui secara nasional untuk keselamatan, kinerja struktural, daya
              tahan, dan pengerjaan — membantu melindungi pengguna akhir dan
              mempertahankan standar kualitas di seluruh pasar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Produk apa saja yang dicakup di bawah IS 17633:2022?</strong>
              <br />
              Standar ini mencakup meja dan meja tulis untuk penggunaan dewasa yang
              digunakan di kantor, lembaga pendidikan, perusahaan komersial, dan
              lingkungan tempat kerja — termasuk meja kantor, workstation, meja
              belajar, meja konferensi, dan kategori furnitur serupa.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Apakah pengujian laboratorium wajib?</strong>
              <br />
              Ya. Sampel produk harus diuji di laboratorium yang diakui BIS, dan
              laporan pengujian yang dihasilkan merupakan dokumen kunci dalam
              aplikasi sertifikasi untuk menunjukkan kepatuhan terhadap IS
              17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Dapatkah meja dan meja tulis impor dijual tanpa sertifikasi BIS?</strong>
              <br />
              Tidak. Produk impor yang termasuk dalam sertifikasi wajib tidak dapat
              dipasok secara legal di India tanpa persetujuan BIS yang valid.
              Importir harus memastikan kepatuhan terhadap standar yang berlaku
              sebelum menempatkan produk di pasar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Apa peran inspeksi pabrik?</strong>
              <br />
              BIS melakukan penilaian pabrik untuk memverifikasi bahwa produsen
              mempertahankan infrastruktur produksi yang memadai, sistem kontrol
              kualitas, dan keterlacakan produk untuk secara konsisten memproduksi
              meja dan meja tulis yang patuh.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Bagaimana Sun Certifications India dapat membantu?</strong>
              <br />
              Sun Certifications India menawarkan bantuan menyeluruh — termasuk
              penilaian cakupan produk, persiapan dokumentasi, koordinasi pengujian
              laboratorium, manajemen aplikasi BIS, kesiapan inspeksi pabrik, dan
              dukungan kepatuhan pasca-sertifikasi untuk meja dan meja tulis di
              bawah IS 17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Sertifikat BIS untuk Meja & Meja Tulis - IS 17633:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Lisensi Tanda ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Sertifikat BIS FMCS</a>
          </li>
        </ul>

        <ManyUsersAlsoReadIndonesian />

        <FaqAuthorIndonesian questionNumber={2} />
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
                alt="Logo Sertifikat LMPC"
                title="Logo Sertifikat LMPC"
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
