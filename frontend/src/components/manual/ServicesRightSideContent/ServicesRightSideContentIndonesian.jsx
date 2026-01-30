import {
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Phone,
  User,
  Mail,
  PhoneCall,
  SendHorizontal,
  MessageCircle,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServicesRightSideContentIndonesian = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/what-is-crs-bis-or-crs-registration",
    "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    "/sertifikasi-bis-di-indonesia",
    "/id/apa-itu-crs-bis-atau-registrasi-crs",
    // ISI Mark Indonesian Page Url
    "/id/sertifikasi-bis-isi-mark",
    // BIS CERTIFICATION PATH
    "/id/apa-itu-sertifikat-bis-bis-india",

    // Centrifuges Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian",
    // Compressors Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-kompresor",
    // Construction Machinery Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-konstruksi",
    // Cranes Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-derek",
    // Diesel Generators Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-generator-diesel",
    // Embroidery Machines Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-bordir",
    // Gears Gearings and Transmission Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi",
    // Heat Treatment Equipment Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas",
    // Machine Tools Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-perkakas-mesin",
    // Metal Cutting Machines Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam",
    // Packing Machinery Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-pengemasan",
    // Power Semiconductors Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-konverter-semikonduktor-daya",
    // Public Works and Mechanical Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-pekerjaan-umum-dan-peralatan-mekanik",
    // Pumps and Liquid Elevators Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan",
    // Rotary Electrical Machines Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-listrik-rotary",
    // Rubber and Plastics Machinery Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-karet-dan-plastik",
    // Switchgear and Controlgear Equipment Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-hingga-1000-volt",
    // Switchgear and Controlgear Equipment above 1000 Volts Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-di-atas-1000-volt",
    // Transformers Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-transformator",
    // Weaving Machines Scheme X Product (Indonesian) Page Url
    "/sertifikasi-bis-skema-x-untuk-mesin-tenun-alat-tenun",
    // BIS Certificate for Bunk Beds Indonesian Page Url
    "/blogs/isi-products/ranjang-susun-is-17636",
    // BIS Certificate for Beds Indonesian Page Url
    "/blogs/isi-products/ranjang-is-17635",
    // BIS Certificate for Work Chairs Indonesian Page Url
    "/blogs/isi-products/kursi-kerja-is-17631",
    // BIS Certificate for Chair And Stools Indonesian Page Url
    "/blogs/isi-products/kursi-dan-bangku-is-17632",
    // Flashlight Indonesian Page Url
    "/blogs/isi-products/senter-is-2083",
    // Furniture Indonesian Page Url
    "/blogs/isi-products/perabotan",
    // BIS Certificate for Seamless Pipes and Tubes Indonesian Page Url
    "/blogs/isi-products/pipa-dan-tabung-tanpa-sambungan-is-17875",
    // BIS Certificate for Welded Pipes and Tubes Indonesian Page Url
    "/blogs/isi-products/pipa-dan-tabung-las-is-17876",
    // Storage Unit Indonesian Page Url
    "/blogs/isi-products/unit-penyimpanan-is-17634",
    // BIS Certificate for Tables & Desks Indonesian Page Url
    "/blogs/isi-products/meja-dan-meja-tulis-is-17633",
    // BIS Certificate for Battery Operated Air Purifier Indonesian Page Url
    "/blogs/isi-products/pembersih-udara-berbaterai-is-302",
    // BIS Certificate for Battery Operated Toothbrush Indonesian Page Url
    "/blogs/isi-products/sikat-gigi-bertenaga-baterai-is-302",
    // BIS Certificate for Chain Pipe Wrenches Indonesian Page Url
    "/blogs/isi-products/kunci-pipa-rantai-is-4123",
    // BIS Certificate for Combination Side Cutting Pliers Indonesian Page Url
    "/blogs/isi-products/tang-kombinasi-pemotong-samping-is-3650",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && (
        <BISQCOUpdatesServicesRightSideContentIndonesian />
      )}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentIndonesian />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentIndonesian />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentIndonesian />
    </div>
  );
};

export default ServicesRightSideContentIndonesian;

const BISQCOUpdatesServicesRightSideContentIndonesian = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sertifikasi BIS untuk kursi kerja",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sertifikasi BIS untuk kursi dan bangku",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "Notifikasi BIS untuk meja dan meja tulis",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "Notifikasi BIS untuk unit penyimpanan",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "Notifikasi BIS untuk tempat tidur bertingkat",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "Notifikasi BIS untuk kabel DC surya dan kabel tahan api",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "Notifikasi BIS untuk aluminium tempa dan paduan aluminium, stok tempa dan tempaan",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifikasi BIS untuk asam H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifikasi BIS untuk asam K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "Notifikasi BIS untuk vinil sulfon",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "Notifikasi BIS untuk energizer pagar listrik",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifikasi BIS untuk mesin cuci pakaian",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "Notifikasi BIS untuk papan plester gipsum",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "Notifikasi BIS untuk tabung paduan aluminium untuk keperluan irigasi - tabung las",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "Notifikasi BIS untuk tabung paduan aluminium untuk keperluan irigasi – tabung ekstrusi",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "Notifikasi BIS untuk batang aluminium grade EC yang diproduksi dengan pengecoran kontinyu dan penggulungan",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "Notifikasi BIS untuk batang, batang dan bagian aluminium tempa dan paduan aluminium",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "Notifikasi BIS untuk papan plester gipsum",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Pembaruan BIS QCO
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300 h-20">
                {/* Image Container - Fixed width and height */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    title={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Content Container - Flexible with consistent structure */}
                <div className="flex-1 flex flex-col justify-between h-20 py-1">
                  {/* Title - Takes available space but with consistent line clamping */}
                  <div className="flex-1">
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900 leading-tight">
                      {post.title}
                    </p>
                  </div>

                  {/* Read More Button - Always at bottom */}
                  <div className="flex-shrink-0">
                    <Link to={post.url}>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        Baca selengkapnya
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Separator - consistent spacing */}
              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full flex justify-center">
        <Link to="/bis-qco-updates" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300 hover:bg-gray-100"
          >
            Lihat semua pembaruan
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentIndonesian = () => {
  const testimonials = [
    {
      name: "Ibu Eliyawati",
      role: "PT Quty Karunia, Pemegang Lisensi BIS di Vietnam",
      content:
        "Sun Certifications India memberikan layanan sertifikasi BIS yang sangat baik. Layanan mereka yang tak tertandingi dan ketulusan mereka memenangkan kepercayaan kami. Salah satu konsultan BIS terbaik di India!",
    },
    {
      name: "Ibu Belle",
      role: "Thantawan Industries Ltd, Pemegang Lisensi BIS di Thailand",
      content:
        "Sun Certifications India mendukung kami sepanjang proses sertifikasi BIS. Layanan pelanggan mereka yang responsif dan ketepatan waktu mereka luar biasa. Sangat direkomendasikan untuk sertifikasi BIS tanpa masalah.",
    },
    {
      name: "Ibu Jun Min Sim",
      role: "Leaderart Industries, Pemegang Lisensi BIS di Malaysia",
      content:
        "Sun Certifications India membantu kami memperoleh Sertifikasi BIS, menggandakan keterlibatan kami di India. Layanan mereka cepat, otentik, dan terkini dengan norma BIS terbaru.",
    },
    {
      name: "Ibu Fatima",
      role: "Aluminium Bahrain (ALBA), Pemegang Lisensi BIS di Bahrain",
      content:
        "Dukungan sertifikasi BIS yang sangat baik, konsultan yang sangat dapat diandalkan.",
    },
    {
      name: "Bapak Yousef",
      role: "Bahrain Aluminium Manufacturing Company, Pemegang Lisensi BIS di Bahrain",
      content: "Proses registrasi BIS yang lancar dengan konsultan ahli.",
    },
    {
      name: "Bapak Satoshi",
      role: "Daiki Aluminium Japan, Pemegang Lisensi BIS di Jepang",
      content: "Bantuan lisensi BIS yang efisien, konsultan yang hebat.",
    },
    {
      name: "Ibu Amanda",
      role: "Honeywell, Pemegang Lisensi BIS di Amerika Serikat",
      content: "Panduan sertifikat BIS yang profesional, sangat puas.",
    },
    {
      name: "Ibu Amanda",
      role: "Trimble Navigation, Pemegang Lisensi BIS di Amerika Serikat",
      content: "Dukungan sertifikasi dan registrasi BIS yang lancar.",
    },
    {
      name: "Ibu Martina",
      role: "Remsa Italia, Pemegang Lisensi BIS di Italia",
      content:
        "Konsultan BIS yang membantu, proses lisensi yang disederhanakan.",
    },
    {
      name: "Ibu Nikola",
      role: "Aquazzura, Pemegang Lisensi BIS di Italia",
      content:
        "Kami mendapat sertifikat BIS kami tepat waktu dan dengan harga yang terjangkau, kerja bagus tim Sun!",
    },
    {
      name: "Ibu Ayu",
      role: "PT Quty, Pemegang Lisensi BIS di Indonesia",
      content:
        "Layanan registrasi BIS yang sangat baik, sangat direkomendasikan.",
    },
    {
      name: "Bapak Huy",
      role: "Danu Vina, Pemegang Lisensi BIS di Vietnam",
      content: "Konsultan lisensi BIS yang dapat diandalkan, proses cepat.",
    },
    {
      name: "Bapak Minh",
      role: "Hanh My Production Company, Pemegang Lisensi BIS di Vietnam",
      content: "Konsultan BIS ahli, sertifikasi dibuat mudah.",
    },
    {
      name: "Ibu Hoa",
      role: "Sedo Vina, Pemegang Lisensi BIS di Vietnam",
      content: "Registrasi sertifikat BIS yang lancar, dukungan yang hebat.",
    },
    {
      name: "Ibu Hana",
      role: "Misumi Japan, Pemegang Lisensi BIS di Jepang",
      content: "Konsultan BIS yang terpercaya, proses sertifikasi cepat.",
    },
    {
      name: "Ibu Nok",
      role: "Thantawan Public Industry Company, Pemegang Lisensi BIS di Thailand",
      content: "Layanan sertifikasi BIS yang profesional, sangat efisien.",
    },
    {
      name: "Bapak Luis",
      role: "Cortizo Aluminios, Pemegang Lisensi BIS di Spanyol",
      content: "Panduan registrasi dan lisensi BIS yang sangat baik.",
    },
    {
      name: "Ibu Aisha",
      role: "Midal Cables, Pemegang Lisensi BIS di Bahrain",
      content: "Konsultan BIS ahli, proses sertifikasi yang lancar.",
    },
    {
      name: "Ibu Aisha",
      role: "Nobilia Kitchens, Pemegang Lisensi BIS di Bahrain",
      content: "Dukungan registrasi sertifikat BIS yang dapat diandalkan.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Testimoni Klien
          </div>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-[450px] overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:60s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <div className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-sm text-neutral-600 font-geist mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-700 font-geist text-sm leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsServicesRightSideContentIndonesian = () => {
  const stats = {
    experience: { value: "12+", label: "Tahun Pengalaman" },
    clients: { value: "1500+", label: "Klien Kami" },
    successRate: { value: "100%", label: "Tingkat Keberhasilan" },
    countries: { value: "20+", label: "Negara Dilayani" },
  };

  const reasons = [
    {
      title: "Panduan Ahli",
      description:
        "Tim kami membawa lebih dari 12 tahun pengalaman dalam kepatuhan CDSCO dan BIS.",
    },
    {
      title: "Efisiensi Waktu",
      description:
        "Kami mengurangi waktu persetujuan hingga 40% dengan proses yang disederhanakan.",
    },
    {
      title: "Keberhasilan Terbukti",
      description:
        "100% tingkat keberhasilan dengan lebih dari 1500 registrasi berhasil.",
    },
    {
      title: "Berpusat pada Klien",
      description:
        "Manajer akun khusus memastikan layanan yang dipersonalisasi.",
    },
  ];

  const performance = {
    title: "Kinerja Kami",
    metrics: {
      speed: { label: "Kecepatan", value: "95" },
      success: { label: "Keberhasilan", value: "99" },
      satisfaction: { label: "Kepuasan", value: "98" },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Mengapa Memilih Kami
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <div className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <div className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <div className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <div className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </div>
          <p className="text-xs text-gray-600 font-geist">
            {stats.countries.label}
          </p>
        </div>
      </div>

      {/* Reasons List */}
      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <div className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </div>
                <p className="text-xs text-gray-600 font-geist">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Performance */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900 font-geist">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: `${performance.metrics.satisfaction.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactFormServicesRightSideContentIndonesian = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Indonesian)";
    if (
      path.includes(
        "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india"
      )
    )
      return "BIS FMCS Certification - Indonesian Page";
    if (path.includes("/sertifikasi-bis-di-indonesia"))
      return "Indonesia Blog (Indonesian)";
    if (path.includes("/id/apa-itu-crs-bis-atau-registrasi-crs"))
      return "CRS Registration (Indonesian)";
    if (path.includes("/id/sertifikasi-bis-isi-mark"))
      return "ISI Mark - Indonesian Page";
    if (path.includes("/id/apa-itu-sertifikat-bis-bis-india"))
      return "BIS Certification (Indonesian)";

    // Centrifuges Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian"
      )
    )
      return "Centrifuges Scheme X Product (Indonesian)";

    // Compressors Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-kompresor"))
      return "Compressors Scheme X Product (Indonesian)";

    // Construction Machinery Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-konstruksi"))
      return "Construction Machinery Scheme X Product (Indonesian)";

    // Cranes Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-derek"))
      return "Cranes Scheme X Product (Indonesian)";

    // Diesel Generators Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-generator-diesel"))
      return "Diesel Generators Scheme X Product (Indonesian)";

    // Embroidery Machines Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-bordir"))
      return "Embroidery Machines Scheme X Product (Indonesian)";

    // Gears Gearings and Transmission Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi"
      )
    )
      return "Gears Gearings and Transmission Scheme X Product (Indonesian)";

    // Heat Treatment Equipment Scheme X Product (Indonesian)
    if (
      path.includes("/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas")
    )
      return "Heat Treatment Equipment Scheme X Product (Indonesian)";

    // Machine Tools Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-perkakas-mesin"))
      return "Machine Tools Scheme X Product (Indonesian)";

    // Metal Cutting Machines Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
      )
    )
      return "Metal Cutting Machines Scheme X Product (Indonesian)";

    // Packing Machinery Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-pengemasan"))
      return "Packing Machinery Scheme X Product (Indonesian)";

    // Power Semiconductors Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-konverter-semikonduktor-daya"
      )
    )
      return "Power Semiconductors Scheme X Product (Indonesian)";

    // Public Works and Mechanical Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-pekerjaan-umum-dan-peralatan-mekanik"
      )
    )
      return "Public Works and Mechanical Scheme X Product (Indonesian)";

    // Pumps and Liquid Elevators Scheme X Product (Indonesian)
    if (
      path.includes("/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan")
    )
      return "Pumps and Liquid Elevators Scheme X Product (Indonesian)";

    // Rotary Electrical Machines Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-listrik-rotary"))
      return "Rotary Electrical Machines Scheme X Product (Indonesian)";

    // Rubber and Plastics Machinery Scheme X Product (Indonesian)
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-karet-dan-plastik"))
      return "Rubber and Plastics Machinery Scheme X Product (Indonesian)";

    // Switchgear and Controlgear Equipment Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-hingga-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment Scheme X Product (Indonesian)";

    // Switchgear and Controlgear Equipment above 1000 Volts Scheme X Product (Indonesian)
    if (
      path.includes(
        "/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-di-atas-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment above 1000 Volts Scheme X Product (Indonesian)";

    // Transformers Scheme X Product (Indonesian) Page Url
    if (path.includes("/sertifikasi-bis-skema-x-untuk-transformator"))
      return "Transformers Scheme X Product (Indonesian)";

    // Weaving Machines Scheme X Product (Indonesian) Page Url
    if (path.includes("/sertifikasi-bis-skema-x-untuk-mesin-tenun-alat-tenun"))
      return "Weaving Machines Scheme X Product (Indonesian)";

    // BIS Certificate for Bunk Beds Indonesian
    if (path.includes("/blogs/isi-products/ranjang-susun-is-17636"))
      return "BIS Certificate for Bunk Beds (Indonesian)";
    // BIS Certificate for Beds Indonesian
    if (path.includes("/blogs/isi-products/ranjang-is-17635"))
      return "BIS Certificate for Beds (Indonesian)";
    // BIS Certificate for Work Chairs Indonesian
    if (path.includes("/blogs/isi-products/kursi-kerja-is-17631"))
      return "BIS Certificate for Work Chairs (Indonesian)";
    // BIS Certificate for Chair And Stools Indonesian
    if (path.includes("/blogs/isi-products/kursi-dan-bangku-is-17632"))
      return "BIS Certificate for Chair And Stools (Indonesian)";
    // BIS Certificate for Flashlight Indonesian
    if (path.includes("/blogs/isi-products/senter-is-2083"))
      return "BIS Certificate for Flashlight (Indonesian)";
    // BIS Certificate for Furniture Indonesian
    if (path.includes("/blogs/isi-products/perabotan"))
      return "BIS Certificate for Furniture (Indonesian)";
    // BIS Certificate for Seamless Pipes and Tubes Indonesian
    if (path.includes("/blogs/isi-products/pipa-dan-tabung-tanpa-sambungan-is-17875"))
      return "BIS Certificate for Seamless Pipes and Tubes (Indonesian)";
    // BIS Certificate for Welded Pipes and Tubes Indonesian
    if (path.includes("/blogs/isi-products/pipa-dan-tabung-las-is-17876"))
      return "BIS Certificate for Welded Pipes and Tubes (Indonesian)";
    // BIS Certificate for Storage Unit Indonesian
    if (path.includes("/blogs/isi-products/unit-penyimpanan-is-17634"))
      return "BIS Certificate for Storage Unit (Indonesian)";
    // BIS Certificate for Tables & Desks Indonesian
    if (path.includes("/blogs/isi-products/meja-dan-meja-tulis-is-17633"))
      return "BIS Certificate for Tables & Desks (Indonesian)";
    // BIS Certificate for Battery Operated Air Purifier Indonesian
    if (path.includes("/blogs/isi-products/pembersih-udara-berbaterai-is-302"))
      return "BIS Certificate for Battery Operated Air Purifier (Indonesian)";
    // BIS Certificate for Battery Operated Toothbrush Indonesian
    if (path.includes("/blogs/isi-products/sikat-gigi-bertenaga-baterai-is-302"))
      return "BIS Certificate for Battery Operated Toothbrush (Indonesian)";
    // BIS Certificate for Chain Pipe Wrenches Indonesian
    if (path.includes("/blogs/isi-products/kunci-pipa-rantai-is-4123"))
      return "BIS Certificate for Chain Pipe Wrenches (Indonesian)";

    // BIS Certificate for Combination Side Cutting Pliers Indonesian
    if (path.includes("/blogs/isi-products/tang-kombinasi-pemotong-samping-is-3650"))
      return "BIS Certificate for Combination Side Cutting Pliers (Indonesian)";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Silakan masukkan nama lengkap yang valid.",
        description: "Nama hanya boleh berisi huruf dan spasi.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Silakan masukkan nomor telepon yang valid",
        description: "Nomor telepon harus berisi (8-15 digit)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Silakan masukkan alamat email yang valid.",
        description: "Periksa apakah format email Anda benar",
      });
      setLoading(false);
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Formulir kontak berhasil dikirim!",
        description:
          "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Gagal mengirimkan detail formulir kontak!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Ada yang salah. Silakan periksa detail Anda dan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Minta Panggilan Balik Gratis
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Tinggalkan detail Anda di bawah ini dan ahli kami akan menghubungi Anda
        kembali dalam 24 jam untuk membahas kebutuhan kepatuhan regulasi Anda.
      </p>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Nama Anda*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Nomor Telepon*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Alamat Email*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Sertifikasi yang Diperlukan*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>Mengirim</span>
              </div>
            ) : (
              <>
                Minta Panggilan Balik
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        Dengan mengirimkan formulir ini, Anda menyetujui{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Kebijakan Privasi
        </Link>{" "}
        kami dan menyetujui untuk dihubungi.
      </p>
    </div>
  );
};
