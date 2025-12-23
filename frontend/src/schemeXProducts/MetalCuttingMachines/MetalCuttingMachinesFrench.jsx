import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SlashIcon,
  PhoneCall,
  User,
  Phone,
  Mail,
  MessageCircle,
  SendHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import { ServicesFrench } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const MetalCuttingMachinesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Outils de Machines de Découpe
          Métallique
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La certification BIS est maintenant obligatoire pour tous types d'outils de machines de découpe métallique et/ou leurs assemblages, sous-ensembles et composants relevant des codes HS 8456 à 8461"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines de Découpe Métallique, Certification BIS Schéma X pour Machines de Découpe Métallique, Certification Schéma X pour Machines de Découpe Métallique, BIS pour Machines de Découpe Métallique, OTR pour Machines de Découpe Métallique"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Chef des Opérations chez Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Certification BIS Schéma X pour Outils de Machines de Découpe Métallique en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les outils de machines de découpe métallique en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Outils de Machines de Découpe Métallique en Inde | Guide Complet"
        />

        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les outils de machines de découpe métallique en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-jin-shu-qie-xiao-ji-chuang-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-metaalsnijmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin"
        />
      </Helmet>

      <MetalCuttingMachinesFrenchBreadcrumb />
      <MetalCuttingMachinesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default MetalCuttingMachinesFrench;

const MetalCuttingMachinesFrenchBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">Produits SchémaX</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>
                  Certification BIS pour Machines de Découpe Métallique
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const MetalCuttingMachinesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MetalCuttingMachinesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const MetalCuttingMachinesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS POUR MACHINES DE DÉCOUPE MÉTALLIQUE
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
            alt="Certification BIS Schéma X pour Outils de Machines de Découpe Métallique"
            title="Licence BIS Schéma X machines de découpe métallique outils"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          La découpe métallique est la technologie de fabrication cheval de
          bataille sous-tendant l'industrie moteur, automobile, aérospatiale et
          manufacturière de l'Inde. Ces machines vont des tours CNC et machines
          de fraisage aux découpeurs laser et contribueront aussi à maintenir
          production élevée et coûts bas dans industries partout. Alors que la
          demande de machinerie de qualité fine a augmenté en Inde, le
          gouvernement a rendu la Certification BIS des Machines de Découpe
          Métallique obligatoire pour assurer qualité et sécurité.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Selon la Certification BIS (Bureau du Standard Indien) Schéma X pour
          Machines de Découpe Métallique, tant les fabricants étrangers
          qu'indiens doivent respecter les Normes Indiennes avant qu'ils
          puissent être vendus sur le marché indien. C'est une façon pour la
          machine d'être mise en usage sûrement, ainsi qu'assure confiance
          client.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce post fournit information concernant certification schéma X pour
          Machines de Découpe Métallique, l'exigence OTR 2024 pour Machines de
          Découpe Métallique et la procédure d'acquisition d'une Licence BIS
          pour Machines de Découpe Métallique afin d'apposer la marque BIS pour
          Machines de Découpe Métallique.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS est Obligatoire pour Machines de Découpe Métallique ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines de découpe métallique sont appliquées dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabrication automobile et composants auto</li>
          <li>Industrie aviation et défense</li>
          <li>Ingénierie lourde et construction</li>
          <li>Industries électroniques et électriques</li>
          <li>Fabrication matrices d'outils et coulée sous pression.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les entreprises qui manquent BIS pour Machines de Découpe Métallique
          peuvent être exposées à :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Précision d'usinage mauvaise, et rendement faible</li>
          <li>
            Défaillance de machinerie et perte de temps de production Up-time vs
            Down-time.
          </li>
          <li>Dangers potentiels pour l'opérateur</li>
          <li>
            Exclusion des appels d'offres publics et entreprises réglementées
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS vous assure que les machines de découpe métallique sont
          en conformité avec les normes qualité établies par le bureau.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X pour Machines de Découpe
          Métallique ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS Schéma X pour Machines de Découpe Métallique
          relève des Règlements d'Évaluation de Conformité BIS, 2018 qui ont été
          formulés pour s'assurer que le produit rencontre les standards qualité
          nécessaires qui est le besoin du jour actuel pour équipements
          industriels.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Clés de certification Schéma X pour Machines de
          Découpe Métallique
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatoire pour fabricants indiens et étrangers</li>
          <li>
            Applicable pour une variété de machines de découpe métallique
            métallique notifiées sous Normes Indiennes
          </li>
          <li>
            Implique testing laboratoire, inspections d'usine et audits
            réguliers
          </li>
          <li>
            Autorise affichage de Marque BIS pour machines de découpe
            métallique.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS Obligatoire pour Machines de Découpe Métallique
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les Ordres du Département des Industries Lourdes concernant la
          Règlementation Technique Omnibus (OTR) pour Machines de Découpe
          Métallique en 2024 ont rendu la certification obligatoire.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Délai : La Licence BIS sera obligatoire pour tous fabricants et
          importateurs de machines de découpe métallique à effet du 1er
          septembre, 2026. À partir de cette date, machines qui ne sont pas
          certifiées ne peuvent être offertes à la vente, importées ou
          installées en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Machines de Découpe Métallique
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Fiabilité du Produit : Machines sont certifiées pour précision,
            durabilité et performance cohérente.
          </li>
          <li>
            Compétitivité du Marché : Une Licence BIS pour Machines de Découpe
            Métallique est obligatoire pour obtenir multiples commandes
            Industrielles et Gouvernementales.
          </li>
          <li>
            Confiance Client : La marque BIS pour Machines de Découpe Métallique
            inspire confiance chez l'acheteur.
          </li>
          <li>
            Conformité Légale : Se conformer à OTR pour Machines de Découpe
            Métallique et BIS.
          </li>
          <li>
            Avantage Global : Accès plus facile pour fabricants étrangers au
            marché indien.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Metal Cutting Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Machines de Découpe Métallique Incluses dans l'Approbation
          Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat Schéma X couvre le type suivant pour Machines de Découpe
          Métallique mais non limité à :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Tours d'usinage CNC et centres de tournage</li>
          <li>Machines de fraisage</li>
          <li>Machines de perçage</li>
          <li>Machine de meulage</li>
          <li>Machines de découpe CNC</li>
          <li>Machines ou machines de découpe laser</li>
          <li>Machines de Découpe Plasma</li>
          <li>Machines pour découpe jet d'eau</li>
          <li>Machines scie à ruban et scie à métaux</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tous ces types de machines de découpe métallique doivent suivre Normes
          Indiennes pertinentes (codes IS) comme IS 17277 (Partie 1) : 2019 /
          ISO 16092-1 : 2017 (Sécurité Machines-Outils Presses Partie 1
          Exigences Générales de Sécurité). Chaque modèle de machine doit
          rencontrer son propre code IS sur sécurité, efficacité énergétique et
          précision.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour Licence BIS pour Machines de Découpe Métallique
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Normes IS Applicables : Choisir le bon standard selon
            type de machine.
          </li>
          <li>
            Testing de Produits : Remettre machines pour expérimentation dans
            laboratoire reconnu gouvernement BIS laboratoire.
          </li>
          <li>
            Audit d'Usine : Visites sur place sont conduites par officiers BIS
            pour s'assurer production qualité appropriée.
          </li>
          <li>
            Soumission Documentation : Fournir manuels techniques, rapports de
            test et documents d'assurance qualité.
          </li>
          <li>
            Octroi Licence BIS pour Machines de Découpe Métallique : Fabricants
            peuvent maintenant apposer marque BIS sous certification produit
            selon standard susmentionné.
          </li>
          <li>
            Conformité Continue : Surveillance périodique et audits sont
            conduits pour garantir conformité continue avec BIS.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non-conformité de Certification BIS aux Machines de Découpe
          Métallique sous l'OTR pour Machines de Découpe Métallique peut
          résulter :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Interdiction vente/import de machine non certifiée</li>
          <li>Amendes élevées et saisie de produits</li>
          <li>Exclusion des contrats gouvernementaux</li>
          <li>Dommage réputation marque et entreprise long terme</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X pour Machines de Découpe Métallique dans
          OTR pour Machines de Découpe Métallique (2024) a un rôle vital à jouer
          dans précision industrielle, sécurité et fiabilité de l'Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants et importateurs, avoir une Licence BIS pour Machines
          de Découpe Métallique et apposer la marque BIS sur Machines de Découpe
          Métallique n'est pas simplement une mesure de conformité, c'est un
          investissement stratégique qui offre un retour composant sous forme
          d'excellence produit, confiance consommateur et supériorité marché.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const MetalCuttingMachinesFrenchMainContentRight = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Get current page URL and name for form submission
  const currentUrl = window.location.href;
  const currentPageName =
    "Produit SchémaX - Certification BIS pour Machines de Découpe Métallique";

  // Add BASE_URL like other forms
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use BASE_URL like other forms
      const response = await fetch(`${BASE_URL}/contact/submit-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: currentUrl,
          pageName: currentPageName,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Quelque chose s'est mal passé. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Header */}
        <div className="flex gap-2 items-center">
          <PhoneCall className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Demander un Rappel Gratuit
          </div>
        </div>

        {/* Intro Text */}
        <p className="mt-3 text-sm text-gray-600 font-geist">
          Laissez vos coordonnées ci-dessous et nos experts vous rappelleront
          sous 24 heures pour discuter de vos besoins en matière de conformité
          réglementaire.
        </p>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm font-geist ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

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
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Votre Nom*"
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
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="Numéro de Téléphone*"
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
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Adresse E-mail*"
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
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Certification Requise*"
              rows="3"
              required
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center">
              {isSubmitting ? "Envoi en cours..." : "Demander un Rappel"}
              <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </form>

        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500 font-geist">
          En soumettant ce formulaire, vous acceptez notre{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Politique de Confidentialité
          </a>{" "}
          et consentez à être contacté.
        </p>
      </div>
    </div>
  );
};
