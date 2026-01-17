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
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServicesRightSideContentItalian = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/what-is-crs-bis-or-crs-registration",
    "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    "/certificazione-bis-in-italia",
    "/it/cose-il-crs-bis-o-registrazione-crs",
    // ISI Mark Italian Page Url
    "/it/certificazione-bis-isi-mark",
    // BIS CERTIFICATION PATH
    "/it/cose-il-certificato-bis-indiano",
    // Centrifuges Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione",
    // Compressors Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-compressori",
    // Construction Machinery Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchinari-da-costruzione",
    // Cranes Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-gru",
    // Diesel Generator Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-generatori-diesel",
    // Embroidery Machines Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchine-da-ricamo",
    // Gears, Gearing and Transmission Elements Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione",
    // Heat Treatment Equipment Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico",
    // Machine Tools Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-utensili-per-macchine",
    // Metal Cutting Machines Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli",
    // Packing Machinery Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchinari-per-imballaggio",
    // Power Semiconductors Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-convertitori-a-semiconduttore-di-potenza",
    // Public Works And Mechanical Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-lavori-pubblici-e-apparecchiature-meccaniche",
    // Pumps And Liquid Elevators Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi",
    // Rotary Electrical Machines Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchine-elettriche-rotanti",
    // Rubber And Plastics Machinery Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchinari-di-gomma-e-plastica",
    // Switchgear and Controlgear Equipment Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-fino-a-1000-volt",
    // Switchgear and Controlgear Equipment Above 1000 Volts Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-oltre-1000-volt",
    // Transformers Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-trasformatori",
    // Weaving Machines Scheme X Product (Italian) Page Url
    "/certificazione-bis-schema-x-per-macchine-per-tessitura-telai",
    // BIS Certificate for Bunk Beds Italian Page Url
    "/blogs/isi-products/letti-a-castello-is-17636",
    // BIS Certificate for Beds Italian Page Url
    "/blogs/isi-products/letti-is-17635",
    // BIS Certificate for Work Chairs Italian Page Url
    "/blogs/isi-products/sedie-da-lavoro-is-17631",
    // BIS Certificate for Chair And Stools Italian Page Url
    "/blogs/isi-products/sedie-e-sgabelli-is-17632",
    // Flashlight Italian Page Url
    "/blogs/isi-products/torcia-is-2083",
    // Furniture Italian Page Url
    "/blogs/isi-products/mobili",
    // BIS Certificate for Seamless Pipes and Tubes Italian Page Url
    "/blogs/isi-products/tubi-e-tubi-senza-saldatura-is-17875",
    // Storage Unit Italian Page Url
    "/blogs/isi-products/unita-di-stoccaggio-is-17634",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentItalian />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentItalian />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentItalian />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentItalian />
    </div>
  );
};

export default ServicesRightSideContentItalian;

const BISQCOUpdatesServicesRightSideContentItalian = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Certificazione BIS per sedie da lavoro",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Certificazione BIS per sedie e sgabelli",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "Notifica BIS per tavoli e scrivanie",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "Notifica BIS per unità di stoccaggio",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "Notifica BIS per letti a castello",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "Notifica BIS per cavi DC solari e cavi resistenti al fuoco",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "Notifica BIS per alluminio lavorato e leghe di alluminio, stock di forgiatura e forgiati",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifica BIS per acido H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifica BIS per acido K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "Notifica BIS per vinilsolfone",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "Notifica BIS per energizzatori per recinti elettrici",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notifica BIS per lavatrici",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "Notifica BIS per pannelli di gesso",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "Notifica BIS per tubi in lega di alluminio per scopi di irrigazione - tubi saldati",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "Notifica BIS per tubi in lega di alluminio per scopi di irrigazione – tubi estrusi",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "Notifica BIS per barre di alluminio di grado EC prodotte mediante colata continua e laminazione",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "Notifica BIS per barre, aste e sezioni di alluminio lavorato e leghe di alluminio",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "Notifica BIS per pannelli di gesso",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Aggiornamenti BIS QCO
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
                        Leggi di più
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
            Visualizza tutti gli aggiornamenti
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentItalian = () => {
  const testimonials = [
    {
      name: "Sig.ra Eliyawati",
      role: "PT Quty Karunia, Titolare di licenza BIS in Vietnam",
      content:
        "Sun Certifications India ha fornito servizi di certificazione BIS eccellenti. Il loro servizio ineguagliabile e la loro sincerità hanno conquistato la nostra fiducia. Uno dei migliori consulenti BIS in India!",
    },
    {
      name: "Sig.ra Belle",
      role: "Thantawan Industries Ltd, Titolare di licenza BIS in Thailandia",
      content:
        "Sun Certifications India ci ha supportato durante tutto il processo di certificazione BIS. Il loro servizio clienti reattivo e la loro puntualità sono eccezionali. Altamente raccomandato per una certificazione BIS senza problemi.",
    },
    {
      name: "Sig.ra Jun Min Sim",
      role: "Leaderart Industries, Titolare di licenza BIS in Malesia",
      content:
        "Sun Certifications India ci ha aiutato ad ottenere la Certificazione BIS, raddoppiando il nostro coinvolgimento in India. I loro servizi sono veloci, autentici e aggiornati con le ultime norme BIS.",
    },
    {
      name: "Sig.ra Fatima",
      role: "Aluminium Bahrain (ALBA), Titolare di licenza BIS in Bahrain",
      content:
        "Supporto certificazione BIS eccellente, consulenti molto affidabili.",
    },
    {
      name: "Sig. Yousef",
      role: "Bahrain Aluminium Manufacturing Company, Titolare di licenza BIS in Bahrain",
      content: "Processo di registrazione BIS fluido con consulenti esperti.",
    },
    {
      name: "Sig. Satoshi",
      role: "Daiki Aluminium Japan, Titolare di licenza BIS in Giappone",
      content: "Assistenza licenza BIS efficiente, ottimi consulenti.",
    },
    {
      name: "Sig.ra Amanda",
      role: "Honeywell, Titolare di licenza BIS negli Stati Uniti",
      content: "Guida certificato BIS professionale, molto soddisfatta.",
    },
    {
      name: "Sig.ra Amanda",
      role: "Trimble Navigation, Titolare di licenza BIS negli Stati Uniti",
      content: "Supporto certificazione e registrazione BIS fluido.",
    },
    {
      name: "Sig.ra Martina",
      role: "Remsa Italia, Titolare di licenza BIS in Italia",
      content: "Consulenti BIS utili, processo di licenza semplificato.",
    },
    {
      name: "Sig.ra Nikola",
      role: "Aquazzura, Titolare di licenza BIS in Italia",
      content:
        "Abbiamo ottenuto il nostro certificato BIS nei tempi e a prezzi accessibili, ottimo lavoro team Sun!",
    },
    {
      name: "Sig.ra Ayu",
      role: "PT Quty, Titolare di licenza BIS in Indonesia",
      content:
        "Servizio di registrazione BIS eccellente, altamente raccomandato.",
    },
    {
      name: "Sig. Huy",
      role: "Danu Vina, Titolare di licenza BIS in Vietnam",
      content: "Consulenti licenza BIS affidabili, processo veloce.",
    },
    {
      name: "Sig. Minh",
      role: "Hanh My Production Company, Titolare di licenza BIS in Vietnam",
      content: "Consulenti BIS esperti, certificazione resa facile.",
    },
    {
      name: "Sig.ra Hoa",
      role: "Sedo Vina, Titolare di licenza BIS in Vietnam",
      content: "Registrazione certificato BIS fluida, ottimo supporto.",
    },
    {
      name: "Sig.ra Hana",
      role: "Misumi Japan, Titolare di licenza BIS in Giappone",
      content: "Consulenti BIS fidati, processo di certificazione veloce.",
    },
    {
      name: "Sig.ra Nok",
      role: "Thantawan Public Industry Company, Titolare di licenza BIS in Thailandia",
      content: "Servizio certificazione BIS professionale, molto efficiente.",
    },
    {
      name: "Sig. Luis",
      role: "Cortizo Aluminios, Titolare di licenza BIS in Spagna",
      content: "Guida registrazione e licenza BIS eccellente.",
    },
    {
      name: "Sig.ra Aisha",
      role: "Midal Cables, Titolare di licenza BIS in Bahrain",
      content: "Consulenti BIS esperti, processo di certificazione fluido.",
    },
    {
      name: "Sig.ra Aisha",
      role: "Nobilia Kitchens, Titolare di licenza BIS in Bahrain",
      content: "Supporto registrazione certificato BIS affidabile.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Testimonianze Clienti
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

const WhyChooseUsServicesRightSideContentItalian = () => {
  const stats = {
    experience: { value: "12+", label: "Anni di esperienza" },
    clients: { value: "1500+", label: "I nostri clienti" },
    successRate: { value: "100%", label: "Tasso di successo" },
    countries: { value: "20+", label: "Paesi serviti" },
  };

  const reasons = [
    {
      title: "Guida esperta",
      description:
        "Il nostro team porta più di 12 anni di esperienza nella conformità CDSCO e BIS.",
    },
    {
      title: "Efficienza temporale",
      description:
        "Riduciamo i tempi di approvazione fino al 40% con processi ottimizzati.",
    },
    {
      title: "Successo comprovato",
      description:
        "100% di tasso di successo con più di 1500 registrazioni riuscite.",
    },
    {
      title: "Centrato sul cliente",
      description:
        "Account manager dedicato che garantisce un servizio personalizzato.",
    },
  ];

  const performance = {
    title: "Le nostre prestazioni",
    metrics: {
      speed: { label: "Velocità", value: "95" },
      success: { label: "Successo", value: "99" },
      satisfaction: { label: "Soddisfazione", value: "98" },
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
          Perché sceglierci
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

const ContactFormServicesRightSideContentItalian = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Italian)";
    if (
      path.includes(
        "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
      )
    )
      return "BIS FMCS Certification - Italian Page";
    if (path.includes("/certificazione-bis-in-italia"))
      return "Italy Blog Italian";
    if (path.includes("/it/cose-il-crs-bis-o-registrazione-crs"))
      return "CRS Registration (Italian)";
    if (path.includes("/it/certificazione-bis-isi-mark"))
      return "ISI Mark - Italian Page";

    // BIS CERTIFICATION PATH
    if (path.includes("/it/cose-il-certificato-bis-indiano"))
      return "BIS Certification (Italian)";

    // Centrifuges Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione"
      )
    )
      return "Centrifuges Scheme X Product (Italian)";

    // Compressors Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-compressori"))
      return "Compressors Scheme X Product (Italian)";

    // Construction Machinery Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-macchinari-da-costruzione"
      )
    )
      return "Construction Machinery Scheme X Product (Italian)";

    // Cranes Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-gru"))
      return "Cranes Scheme X Product (Italian)";

    // Diesel Generator Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-generatori-diesel"))
      return "Diesel Generator Scheme X Product (Italian)";

    // Embroidery Machines Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-macchine-da-ricamo"))
      return "Embroidery Machines Scheme X Product (Italian)";

    // Gears, Gearing and Transmission Elements Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione"
      )
    )
      return "Gears, Gearing and Transmission Elements Scheme X Product (Italian)";

    // Heat Treatment Equipment Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
      )
    )
      return "Heat Treatment Equipment Scheme X Product (Italian)";

    // Machine Tools Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-utensili-per-macchine"))
      return "Machine Tools Scheme X Product (Italian)";

    // Metal Cutting Machines Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
      )
    )
      return "Metal Cutting Machines Scheme X Product (Italian)";

    // Packing Machinery Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-macchinari-per-imballaggio"
      )
    )
      return "Packing Machinery Scheme X Product (Italian)";

    // Power Semiconductors Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-convertitori-a-semiconduttore-di-potenza"
      )
    )
      return "Power Semiconductors Scheme X Product (Italian)";

    // Public Works And Mechanical Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-lavori-pubblici-e-apparecchiature-meccaniche"
      )
    )
      return "Public Works And Mechanical Scheme X Product (Italian)";

    // Pumps And Liquid Elevators Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
      )
    )
      return "Pumps And Liquid Elevators Scheme X Product (Italian)";

    // Rotary Electrical Machines Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-macchine-elettriche-rotanti"
      )
    )
      return "Rotary Electrical Machines Scheme X Product (Italian)";

    // Rubber And Plastics Machinery Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-macchinari-di-gomma-e-plastica"
      )
    )
      return "Rubber And Plastics Machinery Scheme X Product (Italian)";

    // Switchgear and Controlgear Equipment Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-fino-a-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment Scheme X Product (Italian)";

    // Switchgear and Controlgear Equipment Above 1000 Volts Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-oltre-1000-volt"
      )
    )
      return "Switchgear and Controlgear Equipment Above 1000 Volts Scheme X Product (Italian)";

    // Transformers Scheme X Product (Italian) Page Url
    if (path.includes("/certificazione-bis-schema-x-per-trasformatori"))
      return "Transformers Scheme X Product (Italian)";

    // Weaving Machines Scheme X Product (Italian) Page Url
    if (
      path.includes(
        "/certificazione-bis-schema-x-per-macchine-per-tessitura-telai"
      )
    )
      return "Weaving Machines Scheme X Product (Italian)";

    // BIS Certificate for Bunk Beds Italian
    if (path.includes("/blogs/isi-products/letti-a-castello-is-17636"))
      return "BIS Certificate for Bunk Beds (Italian)";
    // BIS Certificate for Beds Italian
    if (path.includes("/blogs/isi-products/letti-is-17635"))
      return "BIS Certificate for Beds (Italian)";
    // BIS Certificate for Work Chairs Italian
    if (path.includes("/blogs/isi-products/sedie-da-lavoro-is-17631"))
      return "BIS Certificate for Work Chairs (Italian)";
    // BIS Certificate for Chair And Stools Italian
    if (path.includes("/blogs/isi-products/sedie-e-sgabelli-is-17632"))
      return "BIS Certificate for Chair And Stools (Italian)";
    // BIS Certificate for Flashlight Italian
    if (path.includes("/blogs/isi-products/torcia-is-2083"))
      return "BIS Certificate for Flashlight (Italian)";
    // BIS Certificate for Furniture Italian
    if (path.includes("/blogs/isi-products/mobili"))
      return "BIS Certificate for Furniture (Italian)";
    // BIS Certificate for Seamless Pipes and Tubes Italian
    if (path.includes("/blogs/isi-products/tubi-e-tubi-senza-saldatura-is-17875"))
      return "BIS Certificate for Seamless Pipes and Tubes (Italian)";
    // BIS Certificate for Storage Unit Italian
    if (path.includes("/blogs/isi-products/unita-di-stoccaggio-is-17634"))
      return "BIS Certificate for Storage Unit (Italian)";
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
        title: "Inserisci un nome completo valido.",
        description: "Il nome deve contenere solo lettere e spazi.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Inserisci un numero di telefono valido",
        description: "Il numero di telefono deve contenere (8-15 cifre)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Inserisci un indirizzo email valido.",
        description: "Controlla se il formato della tua email è corretto",
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
        title: "Modulo di contatto inviato con successo!",
        description:
          "Grazie per averci contattato. Il nostro team ti contatterà a breve.",
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
        "Impossibile inviare i dettagli del modulo di contatto!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Qualcosa è andato storto. Controlla i tuoi dettagli e riprova.",
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
          Richiedi una richiamata gratuita
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Lascia i tuoi dettagli qui sotto e i nostri esperti ti richiameranno
        entro 24 ore per discutere delle tue esigenze di conformità normativa.
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
            placeholder="Il tuo nome*"
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
            placeholder="Numero di telefono*"
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
            placeholder="Indirizzo email*"
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
            placeholder="Certificazione richiesta*"
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
                <span>Invio</span>
              </div>
            ) : (
              <>
                Richiedi richiamata
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        Inviando questo modulo, accetti la nostra{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Politica sulla Privacy
        </Link>{" "}
        e acconsenti ad essere contattato.
      </p>
    </div>
  );
};
