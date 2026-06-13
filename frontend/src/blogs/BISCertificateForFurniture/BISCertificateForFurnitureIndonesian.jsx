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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";

const BISCertificateForFurnitureIndonesian = () => {
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

export default BISCertificateForFurnitureIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikat BIS untuk Perabotan di India | Sertifikasi BIS, Lisensi & Panduan Proses";
  const ogTitle =
    "Sertifikat BIS untuk Perabotan di India - Panduan Lengkap Sertifikasi BIS";
  const twitterTitle =
    "Sertifikat BIS untuk Perabotan | Panduan Lengkap Sertifikasi BIS India";
  const metaDescription =
    "Sertifikat BIS untuk Perabotan di India - panduan lengkap tentang Sertifikasi BIS, Lisensi BIS, biaya, dokumen, standar, proses, aplikasi online & Tanda BIS untuk produsen perabotan.";
  const ogDescription =
    "Mencari Sertifikasi BIS untuk Perabotan di India? Pelajari tentang Lisensi BIS, Tanda BIS, standar yang berlaku, proses sertifikasi, biaya, dokumen & persyaratan kepatuhan secara detail.";
  const twitterDescription =
    "Panduan lengkap Sertifikat BIS untuk Perabotan di India - proses Sertifikasi BIS, biaya, dokumen, Tanda BIS, standar & aplikasi online dijelaskan.";
  const metaKeywords =
    "Sertifikat BIS untuk Perabotan, Sertifikasi BIS untuk Perabotan, Lisensi BIS untuk Perabotan, Apa itu BIS, BIS India";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/perabotan";
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
                    Sertifikasi BIS untuk Perabotan di India
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

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Sertifikasi BIS untuk Perabotan di India: Panduan Lengkap Standar
          BIS, Tanda ISI, Proses &amp; Kepatuhan
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Lisensi BIS untuk Perabotan"
            alt="Sertifikasi BIS untuk Perabotan di India - Panduan Tanda ISI"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Perabotan merupakan bagian penting dari rumah, kantor, dan ruang
            publik. Memastikan keselamatan, daya tahan, dan kualitas perabotan
            sangat penting bagi konsumen maupun produsen. Di India,{" "}
            <strong>Sertifikasi BIS untuk perabotan</strong> merupakan
            persyaratan wajib untuk kategori perabotan tertentu berdasarkan
            Furniture (Quality Control) Order, 2025. Panduan ini memberikan
            gambaran mendetail tentang standar BIS, tanda ISI, proses
            sertifikasi, dan persyaratan kepatuhan.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Apa itu Sertifikasi BIS untuk Perabotan?
        </SectionHeading>

        <SubSectionHeading>
          Arti Sertifikasi BIS untuk Perabotan
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sertifikasi BIS adalah proses formal di mana Bureau of Indian
          Standards (BIS) mengevaluasi produk untuk memastikan kepatuhan
          terhadap standar India. Untuk perabotan, sertifikasi ini memastikan
          bahwa produk memenuhi parameter keselamatan, kinerja, dan kualitas
          yang ditetapkan. Setelah tersertifikasi, produsen dapat menggunakan{" "}
          <strong>Tanda ISI</strong> pada perabotan mereka, yang menandakan
          kepatuhan kepada pembeli.
        </p>

        <SubSectionHeading>
          Perbedaan antara Sertifikasi BIS dan Tanda ISI untuk Perabotan
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Sertifikasi BIS</strong> — Proses evaluasi, pengujian, dan
              persetujuan oleh BIS.
            </>,
            <>
              <strong>Tanda ISI</strong> — Tanda yang diberikan setelah
              sertifikasi BIS yang menunjukkan produk memenuhi standar India.
              Tanda ISI adalah jaminan kepatuhan yang terlihat bagi konsumen.
            </>,
          ]}
        />

        <SubSectionHeading>
          Mengapa Sertifikasi BIS Penting bagi Produsen dan Importir Perabotan
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Kepatuhan hukum terhadap peraturan India",
            "Akses ke pasar India dan peluang pengadaan pemerintah",
            "Kepercayaan konsumen yang lebih kuat dan keunggulan kompetitif",
            "Risiko penarikan produk, denda, atau pembatasan impor yang lebih rendah",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Persyaratan Sertifikasi BIS untuk Produsen Perabotan
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Persyaratan
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Detail
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Otoritas Sertifikasi", "Bureau of Indian Standards (BIS)"],
                ["Skema Sertifikasi", "Skema-I (Sertifikasi Tanda ISI)"],
                ["Undang-Undang yang Berlaku", "Furniture (Quality Control) Order, 2025"],
                ["Penandaan Wajib", "Tanda ISI dengan Nomor Lisensi BIS"],
                [
                  "Pengujian Produk",
                  "Diperlukan melalui laboratorium yang diakui BIS",
                ],
                ["Inspeksi Pabrik", "Wajib sebelum pemberian lisensi"],
                [
                  "Berlaku Untuk",
                  "Produsen India, Produsen Asing, Importir",
                ],
                ["Pengawasan Pasca-Sertifikasi", "Diperlukan"],
                [
                  "Perpanjangan Lisensi",
                  "Perpanjangan berkala sesuai persyaratan BIS",
                ],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          Kerangka Regulasi Sertifikasi BIS Perabotan di India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Furniture QCO 2025 mewajibkan kategori perabotan tertentu untuk mematuhi standar BIS. QCO memberikan dasar hukum untuk sertifikasi wajib dan menguraikan jenis perabotan yang dicakup.",
            },
            {
              icon: Building2,
              title: "Peran Bureau of Indian Standards (BIS)",
              description:
                "BIS mengembangkan Standar India (IS), mengevaluasi unit manufaktur, melakukan pengujian produk, dan menerbitkan lisensi untuk penggunaan tanda ISI. BIS juga memantau kepatuhan melalui audit dan pengawasan.",
            },
          ]}
        />

        <SubSectionHeading>
          Sertifikasi BIS Wajib vs Sukarela untuk Perabotan
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Wajib</strong> — Kategori yang ditetapkan dalam Furniture
              QCO, seperti tempat tidur, kursi, dan unit penyimpanan.
            </>,
            <>
              <strong>Sukarela</strong> — Produsen dapat memilih sertifikasi
              untuk kategori produk tambahan guna meningkatkan kredibilitas
              pasar.
            </>,
          ]}
        />

        <SubSectionHeading>
          Penerapan Furniture QCO pada Produsen dan Importir
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Produsen India yang memproduksi perabotan yang tercakup dalam QCO",
            "Produsen asing yang mengekspor ke India",
            "Importir yang menjual perabotan di dalam negeri",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Produk Perabotan yang Dicakup dalam Sertifikasi BIS
        </SectionHeading>

        <SubSectionHeading>
          Kategori Perabotan dan Standar BIS yang Berlaku
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Kategori Perabotan
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Standar India yang Berlaku
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Judul Standar
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Persyaratan Sertifikasi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Kursi Kerja",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Kursi dan Bangku Tujuan Umum",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Meja dan Meja Tulis",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Unit Penyimpanan",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Tempat Tidur",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Tempat Tidur Susun",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    Wajib berdasarkan Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Semua produk yang tercakup harus mematuhi standar BIS yang relevan
          dan memiliki tanda ISI yang valid sebelum dijual di India. Standar
          ini menetapkan persyaratan minimum untuk keselamatan, stabilitas, dan
          kegunaan perabotan.
        </p>

        <SectionDivider />

        <SectionHeading>
          Standar BIS untuk Perabotan dan Persyaratannya
        </SectionHeading>

        <SubSectionHeading>
          Persyaratan Kinerja Berdasarkan Standar Perabotan BIS
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Perabotan harus mampu menahan penggunaan normal tanpa deformasi atau
          kegagalan struktural.
        </p>
        <CheckPointsList
          points={[
            "Kapasitas menahan beban dalam kondisi beban normal dan puncak",
            "Kekuatan sambungan dan daya tahan koneksi",
            "Stabilitas material tanpa melengkung atau degradasi",
          ]}
        />

        <SubSectionHeading>
          Persyaratan Pengujian Keselamatan dan Daya Tahan
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Perabotan harus memenuhi norma keselamatan untuk mencegah kecelakaan
          dan standar daya tahan untuk memastikan umur panjang.
        </p>
        <CheckPointsList
          points={[
            "Pencegahan terbalik (kursi, bangku, dan unit yang tidak stabil)",
            "Pencegahan runtuh di bawah beban nominal (tempat tidur, tempat tidur susun, penyimpanan)",
            "Daya tahan jangka panjang melalui uji kinerja penggunaan berulang",
          ]}
        />

        <SubSectionHeading>
          Parameter Kualitas yang Dievaluasi Selama Sertifikasi
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Kualitas material dan finishing",
            "Kapasitas menahan beban",
            "Stabilitas, ergonomi, dan fitur keselamatan",
          ]}
        />

        <SubSectionHeading>
          Persyaratan Kepatuhan untuk Berbagai Kategori Perabotan
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Setiap jenis perabotan memiliki standar IS khusus yang merinci
          dimensi, uji kinerja, dan toleransi yang diizinkan. Kepatuhan
          memastikan keseragaman dan kualitas di seluruh produsen.
        </p>

        <SectionDivider />

        <SectionHeading>
          Siapa yang Membutuhkan Sertifikasi BIS untuk Perabotan?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Produsen Perabotan India",
              description:
                "Semua produsen domestik perabotan yang tercakup dalam Furniture QCO harus memperoleh sertifikasi BIS sebelum menjual produk.",
            },
            {
              icon: Globe,
              title: "Produsen Asing yang Mengekspor Perabotan ke India",
              description:
                "Eksportir harus mematuhi standar BIS untuk menjual perabotan secara legal di India dan menggunakan tanda ISI.",
            },
            {
              icon: Package,
              title: "Importir Perabotan dan Pemilik Merek",
              description:
                "Importir harus memastikan perabotan yang mereka bawa ke India mematuhi norma BIS, meskipun diproduksi di luar negeri.",
            },
            {
              icon: ShoppingCart,
              title: "Penjual E-Commerce dan Bisnis Ritel",
              description:
                "Pengecer online dan offline yang menjual perabotan dalam kategori yang tercakup harus memverifikasi sertifikasi BIS untuk menghindari tanggung jawab hukum.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sertifikasi BIS ISI untuk Perabotan: Proses Langkah demi Langkah
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Identifikasi Produk dan Pemilihan Standar yang Berlaku",
              description:
                "Identifikasi kategori perabotan dan standar BIS yang relevan (IS 17631–IS 17636) untuk pengujian dan sertifikasi.",
            },
            {
              title: "Pengujian Produk di Laboratorium yang Diakui BIS",
              description:
                "Perabotan diuji untuk kekuatan, stabilitas, dan daya tahan di laboratorium yang disetujui BIS. Laporan uji wajib untuk aplikasi.",
            },
            {
              title: "Pengajuan Aplikasi BIS",
              description:
                "Produsen mengajukan aplikasi ke BIS dengan spesifikasi produk, detail teknis, dan laporan uji.",
            },
            {
              title: "Inspeksi Pabrik dan Penilaian",
              description:
                "BIS melakukan audit pabrik untuk memeriksa proses manufaktur, sistem kontrol kualitas, dan konsistensi produksi.",
            },
            {
              title: "Pemberian Lisensi BIS dan Izin Tanda ISI",
              description:
                "Setelah disetujui, BIS menerbitkan lisensi yang memungkinkan produsen menggunakan tanda ISI pada perabotan yang tersertifikasi.",
            },
            {
              title: "Persyaratan Kepatuhan Pasca-Sertifikasi",
              description:
                "Audit rutin, pengujian berkala, dan kepatuhan terhadap standar BIS diperlukan untuk mempertahankan sertifikasi.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Dokumen yang Diperlukan untuk Sertifikasi BIS Perabotan
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Registrasi Perusahaan dan Dokumen Manufaktur</strong> —
              Lisensi bisnis, registrasi GST, dan detail fasilitas manufaktur.
            </>,
            <>
              <strong>Spesifikasi Teknis Produk dan Gambar</strong> — Desain
              detail, material yang digunakan, dan instruksi perakitan.
            </>,
            <>
              <strong>Laporan Uji dan Dokumen Kontrol Kualitas</strong> —
              Laporan dari laboratorium yang disetujui BIS yang menunjukkan
              kepatuhan terhadap standar IS.
            </>,
            <>
              <strong>Dokumen Pabrik dan Proses Produksi</strong> — Sistem
              manajemen kualitas, alur proses, dan prosedur inspeksi.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Persyaratan Pengujian untuk Perabotan Bersertifikat BIS
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Area Pengujian
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Tujuan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Pengujian Kekuatan",
                  "Memverifikasi kapasitas menahan beban",
                ],
                [
                  "Pengujian Stabilitas",
                  "Mencegah terbalik dan runtuh",
                ],
                [
                  "Pengujian Daya Tahan",
                  "Menilai kinerja selama penggunaan berulang",
                ],
                [
                  "Pengujian Integritas Struktural",
                  "Mengevaluasi sambungan, rangka, dan koneksi",
                ],
                [
                  "Pengujian Keselamatan",
                  "Mengurangi risiko cedera selama penggunaan normal",
                ],
                [
                  "Pengujian Kinerja Fungsional",
                  "Mengonfirmasi fungsionalitas dan kegunaan yang dimaksudkan",
                ],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Perabotan harus menjalani pengujian di laboratorium yang diakui BIS
          untuk memvalidasi klaim keselamatan, kinerja, dan daya tahan.
        </p>

        <SectionDivider />

        <SectionHeading>
          Tanda ISI untuk Perabotan: Penggunaan dan Persyaratan Kepatuhan
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Apa yang Ditunjukkan Tanda ISI</strong> — Mengonfirmasi
              bahwa perabotan memenuhi standar India dan telah disertifikasi oleh
              BIS.
            </>,
            <>
              <strong>Aturan Pemasangan Tanda ISI</strong> — Tanda harus
              terlihat, permanen, dan diformat dengan benar sesuai pedoman BIS.
            </>,
            <>
              <strong>Konsekuensi Penyalahgunaan</strong> — Penggunaan ilegal
              dapat mengakibatkan denda, pencabutan lisensi, dan tindakan hukum
              berdasarkan Undang-Undang BIS, 2016.
            </>,
            <>
              <strong>Cara Pembeli Dapat Memverifikasi</strong> — Konsumen dapat
              memverifikasi nomor lisensi di situs web resmi BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Jadwal, Masa Berlaku, dan Perpanjangan Sertifikasi BIS
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Jadwal Sertifikasi untuk Produk Perabotan",
              description:
                "Biasanya 2–3 bulan, tergantung pada jadwal pengujian dan inspeksi pabrik.",
            },
            {
              icon: ShieldCheck,
              title: "Masa Berlaku Lisensi BIS",
              description:
                "Lisensi berlaku selama 1–3 tahun dan memerlukan perpanjangan sebelum kedaluwarsa.",
            },
            {
              icon: RefreshCw,
              title: "Proses Perpanjangan Sertifikasi BIS",
              description:
                "Perpanjangan mencakup laporan uji terbaru, inspeksi pabrik, dan konfirmasi kepatuhan.",
            },
            {
              icon: Eye,
              title: "Pengawasan dan Persyaratan Kepatuhan Berkelanjutan",
              description:
                "BIS melakukan audit dan pengujian acak untuk memastikan kepatuhan berkelanjutan terhadap standar.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Manfaat Perabotan Bersertifikat BIS
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Kepatuhan Hukum dan Akses Pasar</strong> — Wajib untuk
              menjual jenis perabotan tertentu di India.
            </>,
            <>
              <strong>Kualitas Produk dan Kepercayaan Konsumen yang Lebih Baik</strong>{" "}
              — Sertifikasi BIS menandakan keandalan dan keselamatan.
            </>,
            <>
              <strong>Keunggulan Kompetitif bagi Produsen</strong> — Perabotan
              tersertifikasi memiliki kredibilitas pasar dan kelayakan pengadaan
              yang lebih tinggi.
            </>,
            <>
              <strong>Kelayakan untuk Pengadaan Pemerintah</strong> — Hanya
              produk bersertifikat BIS yang dapat dipasok kepada pembeli
              pemerintah atau institusional.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Sanksi atas Ketidakpatuhan terhadap Regulasi Perabotan BIS
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Memproduksi atau Menjual Perabotan Tidak Tersertifikasi</strong>{" "}
              — Melanggar QCO, mengakibatkan denda dan penyitaan produk.
            </>,
            <>
              <strong>Pembatasan Impor untuk Perabotan Tidak Patuh</strong> —
              Impor yang tidak tersertifikasi dapat diblokir di bea cukai.
            </>,
            <>
              <strong>Sanksi Berdasarkan Undang-Undang BIS, 2016</strong> —
              Meliputi denda uang, hukuman penjara, dan larangan penjualan
              produk.
            </>,
            <>
              <strong>Risiko Bisnis atas Ketidakpatuhan</strong> — Kehilangan
              kepercayaan konsumen, sengketa hukum, dan akses pasar yang
              terbatas.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Tantangan dalam Memperoleh Sertifikasi BIS untuk Perabotan
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Mengidentifikasi Standar India yang Benar",
              description:
                "Produsen harus memastikan produk mereka sesuai dengan standar IS 17631–IS 17636 yang berlaku.",
            },
            {
              title: "Mengelola Persyaratan Pengujian dan Dokumentasi",
              description:
                "Pengujian laboratorium dan dokumentasi yang tepat wajib untuk persetujuan.",
            },
            {
              title: "Menangani Temuan Audit Pabrik",
              description:
                "Ketidakpatuhan selama audit dapat menunda sertifikasi.",
            },
            {
              title: "Mempertahankan Kepatuhan Berkelanjutan Setelah Sertifikasi",
              description:
                "Pemantauan kualitas berkelanjutan dan kepatuhan terhadap standar BIS diperlukan untuk menghindari sanksi.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Bagaimana Sun Certifications India Dapat Membantu
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Dukungan Aplikasi dan Dokumentasi",
              description:
                "Panduan dalam mengajukan aplikasi BIS yang lengkap dan akurat.",
            },
            {
              icon: FlaskConical,
              title: "Bantuan Pengujian Produk",
              description:
                "Membantu koordinasi dengan laboratorium yang disetujui BIS.",
            },
            {
              icon: ClipboardCheck,
              title: "Persiapan Audit dan Panduan Kepatuhan",
              description:
                "Memastikan proses pabrik memenuhi persyaratan BIS sebelum inspeksi.",
            },
            {
              icon: ShieldCheck,
              title: "Manajemen Kepatuhan Pasca-Lisensi",
              description:
                "Memberikan saran tentang pencatatan, audit pengawasan, dan pembaruan standar.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Pertanyaan yang Sering Diajukan tentang Sertifikasi BIS untuk Perabotan
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "Apakah Sertifikasi BIS Wajib untuk Semua Produk Perabotan?",
              answer:
                "Tidak. Hanya perabotan yang tercantum dalam Furniture QCO 2025 yang memerlukan sertifikasi BIS wajib.",
            },
            {
              question:
                "Apakah Perabotan Impor Dapat Dijual Tanpa Sertifikasi BIS?",
              answer:
                "Tidak. Perabotan dalam kategori wajib tidak dapat dijual di India tanpa persetujuan BIS.",
            },
            {
              question: "Berapa Lama Proses Sertifikasi Perabotan?",
              answer:
                "Biasanya 2–3 bulan, tergantung pada pengujian dan inspeksi.",
            },
            {
              question:
                "Apa Perbedaan antara Sertifikasi BIS dan Tanda ISI?",
              answer:
                "Sertifikasi BIS adalah proses persetujuan; tanda ISI adalah label sertifikasi yang ditampilkan pada perabotan.",
            },
            {
              question:
                "Apa Standar BIS yang Berlaku untuk Perabotan?",
              answer:
                "IS 17631–IS 17636 mencakup kursi, bangku, kursi kerja, meja, tempat tidur, tempat tidur susun, dan unit penyimpanan.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Sumber Daya Terkait</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Sertifikasi BIS ISI
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                Sertifikat BIS untuk Produsen Asing
              </a>
            </>,
          ]}
        />

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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
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
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
