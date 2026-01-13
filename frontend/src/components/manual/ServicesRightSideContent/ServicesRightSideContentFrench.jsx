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

const ServicesRightSideContentFrench = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/certification-bis-schema-x-pour-equipements-de-traitement-thermique",
    "/certification-bis-schema-x-pour-compresseurs",
    "/certification-bis-en-france",
    "/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs",
    // ISI Mark French Page Url
    "/fr/certification-bis-marque-isi",
    // BIS CERTIFICATION PATH
    "/fr/quest-ce-que-le-certificat-bis-indien",
    // BISFM (FMCS - Foreign Manufacturers) French Page Url
    "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    // Bunk Beds French Page Url
    "/blogs/isi-products/lits-superposes-is-17636",
    // Beds French Page Url
    "/blogs/isi-products/lits-is-17635",
    // Work Chairs French Page Url
    "/blogs/isi-products/chaises-de-travail-is-17631",
    // Chair And Stools French Page Url
    "/blogs/isi-products/chaises-et-tabourets-is-17632",
    // Flashlight French Page Url
    "/blogs/isi-products/lampe-de-poche-is-2083",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentFrench />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentFrench />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentFrench />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentFrench />
    </div>
  );
};

export default ServicesRightSideContentFrench;

const BISQCOUpdatesServicesRightSideContentFrench = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Certification BIS pour les chaises de travail",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Certification BIS pour les chaises et tabourets",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
      title: "Notification BIS pour les tables et bureaux",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "Notification BIS pour les unités de stockage",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "Notification BIS pour les lits superposés",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title:
        "Notification BIS pour les câbles DC solaires et câbles de survie au feu",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "Notification BIS pour l'aluminium forgé et les alliages d'aluminium, stock de forgeage et pièces forgées",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notification BIS pour l'acide H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notification BIS pour l'acide K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "Notification BIS pour le vinyl sulfone",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "Notification BIS pour les énergiseurs de clôture électrique",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Notification BIS pour les machines à laver le linge",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "Notification BIS pour les panneaux de plâtre de gypse",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "Notification BIS pour les tubes d'alliage d'aluminium à usage d'irrigation - tubes soudés",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "Notification BIS pour les tubes d'alliage d'aluminium à usage d'irrigation – tubes extrudés",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "Notification BIS pour les barres d'aluminium de qualité EC produites par coulée continue et laminage",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
      title:
        "Notification BIS pour les barres, tiges et sections d'aluminium forgé et d'alliages d'aluminium",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "Notification BIS pour les panneaux de plâtre de gypse",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Mises à jour BIS QCO
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
                        Lire la suite
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
            Voir toutes les mises à jour
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentFrench = () => {
  const testimonials = [
    {
      name: "Mme.Eliyawati",
      role: "PT Quty Karunia, Titulaire de licence BIS au Vietnam",
      content:
        "Sun Certifications India a fourni d'excellents services de certification BIS. Leur service inégalé et leur sincérité ont gagné notre confiance. L'un des meilleurs consultants BIS en Inde !",
    },
    {
      name: "Mme.Belle",
      role: "Thantawan Industries Ltd, Titulaire de licence BIS en Thaïlande",
      content:
        "Sun Certifications India nous a soutenus tout au long du processus de certification BIS. Leur service client réactif et leur ponctualité sont exceptionnels. Recommande fortement pour une certification BIS sans tracas.",
    },
    {
      name: "Mme.Jun Min Sim",
      role: "Leaderart Industries, Titulaire de licence BIS en Malaisie",
      content:
        "Sun Certifications India nous a aidés à acquérir la certification BIS, doublant notre engagement en Inde. Leurs services sont rapides, authentiques et à jour avec les dernières normes BIS.",
    },
    {
      name: "Mme. Fatima",
      role: "Aluminium Bahrain (ALBA), Titulaire de licence BIS au Bahreïn",
      content:
        "Excellent support de certification BIS, consultants très fiables.",
    },
    {
      name: "M. Yousef",
      role: "Bahrain Aluminium Manufacturing Company, Titulaire de licence BIS au Bahreïn",
      content:
        "Processus d'enregistrement BIS fluide avec des consultants experts.",
    },
    {
      name: "M. Satoshi",
      role: "Daiki Aluminium Japan, Titulaire de licence BIS au Japon",
      content:
        "Assistance efficace pour la licence BIS, excellents consultants.",
    },
    {
      name: "Mme. Amanda",
      role: "Honeywell, Titulaire de licence BIS aux États-Unis",
      content:
        "Guidance professionnelle pour le certificat BIS, très satisfaite.",
    },
    {
      name: "Mme. Amanda",
      role: "Trimble Navigation, Titulaire de licence BIS aux États-Unis",
      content: "Support fluide pour la certification et l'enregistrement BIS.",
    },
    {
      name: "Mme. Martina",
      role: "Remsa Italia, Titulaire de licence BIS en Italie",
      content: "Consultants BIS utiles, processus de licence simplifié.",
    },
    {
      name: "Mme. Nikola",
      role: "Aquazzura, Titulaire de licence BIS en Italie",
      content:
        "Nous avons obtenu notre certificat BIS dans les délais et à des prix abordables, excellent travail équipe Sun !",
    },
    {
      name: "Mme. Ayu",
      role: "PT Quty, Titulaire de licence BIS en Indonésie",
      content: "Excellent service d'enregistrement BIS, fortement recommandé.",
    },
    {
      name: "M. Huy",
      role: "Danu Vina, Titulaire de licence BIS au Vietnam",
      content: "Consultants de licence BIS fiables, processus rapide.",
    },
    {
      name: "M. Minh",
      role: "Hanh My Production Company, Titulaire de licence BIS au Vietnam",
      content: "Consultants BIS experts, certification facilitée.",
    },
    {
      name: "Mme. Hoa",
      role: "Sedo Vina, Titulaire de licence BIS au Vietnam",
      content: "Enregistrement de certificat BIS fluide, excellent support.",
    },
    {
      name: "Mme. Hana",
      role: "Misumi Japan, Titulaire de licence BIS au Japon",
      content:
        "Consultants BIS de confiance, processus de certification rapide.",
    },
    {
      name: "Mme. Nok",
      role: "Thantawan Public Industry Company, Titulaire de licence BIS en Thaïlande",
      content: "Service de certification BIS professionnel, très efficace.",
    },
    {
      name: "M. Luis",
      role: "Cortizo Aluminios, Titulaire de licence BIS en Espagne",
      content: "Excellente guidance pour l'enregistrement et la licence BIS.",
    },
    {
      name: "Mme. Aisha",
      role: "Midal Cables, Titulaire de licence BIS au Bahreïn",
      content: "Consultants BIS experts, processus de certification fluide.",
    },
    {
      name: "Mme. Aisha",
      role: "Nobilia Kitchens, Titulaire de licence BIS au Bahreïn",
      content: "Support fiable pour l'enregistrement de certificat BIS.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Témoignages clients
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

const WhyChooseUsServicesRightSideContentFrench = () => {
  const stats = {
    experience: { value: "12+", label: "Années d'exp." },
    clients: { value: "1500+", label: "Nos clients" },
    successRate: { value: "100%", label: "Taux de réussite" },
    countries: { value: "20+", label: "Pays desservis" },
  };

  const reasons = [
    {
      title: "Guidance experte",
      description:
        "Notre équipe apporte plus de 12 ans d'expérience en conformité CDSCO et BIS.",
    },
    {
      title: "Efficacité temporelle",
      description:
        "Nous réduisons le temps d'approbation jusqu'à 40% avec des processus rationalisés.",
    },
    {
      title: "Succès prouvé",
      description:
        "100% de taux de réussite avec plus de 1500 enregistrements réussis.",
    },
    {
      title: "Centré client",
      description:
        "Gestionnaire de compte dédié assurant un service personnalisé.",
    },
  ];

  const performance = {
    title: "Notre performance",
    metrics: {
      speed: { label: "Vitesse", value: "95" },
      success: { label: "Succès", value: "99" },
      satisfaction: { label: "Satisfaction", value: "98" },
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
          Pourquoi nous choisir
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

const ContactFormServicesRightSideContentFrench = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (French)";

    if (
      path.includes(
        "/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
      )
    )
      return "Schema X Certification for Heat Treatment Equipment (French)";

    if (path.includes("/certification-bis-en-france"))
      return "France Blog (French)";
    if (path.includes("/certification-bis-schema-x-pour-compresseurs"))
      return "Schema X Certification for Compressors (French)";
    if (path.includes("/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"))
      return "CRS Registration (French)";
    if (path.includes("/fr/certification-bis-marque-isi"))
      return "ISI Mark - French Page";
    if (path.includes("/fr/quest-ce-que-le-certificat-bis-indien"))
      return "BIS Certification (French)";
    if (
      path.includes(
        "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde"
      )
    )
      return "BISFM (FMCS - Foreign Manufacturers) French Page";
    if (path.includes("/blogs/isi-products/lits-superposes-is-17636"))
      return "BIS Certificate for Bunk Beds (French)";
    if (path.includes("/blogs/isi-products/lits-is-17635"))
      return "BIS Certificate for Beds (French)";
    if (path.includes("/blogs/isi-products/chaises-de-travail-is-17631"))
      return "BIS Certificate for Work Chairs (French)";
    if (path.includes("/blogs/isi-products/chaises-et-tabourets-is-17632"))
      return "BIS Certificate for Chair And Stools (French)";
    if (path.includes("/blogs/isi-products/lampe-de-poche-is-2083"))
      return "BIS Certificate for Flashlight (French)";
    return "";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

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
        title: "Veuillez entrer un nom complet valide.",
        description: "Le nom ne doit contenir que des lettres et des espaces.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer un numéro de téléphone valide",
        description: "Le numéro de téléphone doit contenir (8-15 chiffres)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer une adresse e-mail valide.",
        description: "Vérifiez si le format de votre e-mail est correct",
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
        title: "Formulaire de contact soumis avec succès !",
        description:
          "Merci de nous avoir contactés. Notre équipe vous contactera sous peu.",
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
        "Échec de la soumission du formulaire de contact !";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Quelque chose s'est mal passé. Veuillez vérifier vos détails et réessayer.",
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
          Demander un rappel gratuit
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Laissez vos coordonnées ci-dessous et nos experts vous rappelleront dans
        les 24 heures pour discuter de vos besoins de conformité réglementaire.
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
            placeholder="Votre nom*"
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
            placeholder="Numéro de téléphone*"
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
            placeholder="Adresse e-mail*"
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
            placeholder="Certification requise*"
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
                <span>Envoi en cours</span>
              </div>
            ) : (
              <>
                Demander un rappel
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Politique de confidentialité
        </Link>{" "}
        et consentez à être contacté.
      </p>
    </div>
  );
};
