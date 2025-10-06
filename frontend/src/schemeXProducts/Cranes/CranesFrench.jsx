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
import { Services } from "@/components/manual/Services";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import Footer from "@/common/Footer";
import AboutAuthor from "@/components/common/AboutAuthor";
import { Helmet } from "react-helmet-async";
import CDSCOContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import { ServicesFrench } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const CranesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour les Ponts Roulants</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Le Bureau des Normes Indiennes (BIS) a introduit la certification Schema X obligatoire pour tous types de ponts roulants et leurs ensembles, sous-ensembles, et composants."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Ponts Roulants, Certification BIS Schéma X pour Ponts Roulants, Certification Schéma X pour Ponts Roulants, BIS pour Ponts Roulants, OTR pour Ponts Roulants"
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
          content="Certification BIS Schéma X pour les Ponts Roulants en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les ponts roulants en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-cranes-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour les Ponts Roulants en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les ponts roulants en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes-french"
        />
      </Helmet>

      <CranesFrenchBreadcrumb />
      <CranesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default CranesFrench;

const CranesFrenchBreadcrumb = () => {
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
                  BIS Schéma X pour Ponts Roulants
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CranesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const CranesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schéma X pour les Ponts Roulants
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="Certification BIS Schéma X pour les Ponts Roulants"
            title="Licence BIS Schéma X pour les Ponts Roulants"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Primary Usage */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les ponts roulants sont principalement utilisés pour lever et
          transporter des matériaux dans la fabrication, la construction, la
          production et les mines. Comme leur fonctionnalité peut être critique
          pour la sécurité, des ponts roulants non qualifiés ou de mauvaise
          qualité peuvent entraîner des glissades et chutes, des
          dysfonctionnements d'équipement ou des pertes coûteuses.
        </p>

        {/* Safety Importance */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Compte tenu de ces dangers, le Bureau des Normes Indiennes (BIS) a
          rendu obligatoire la Certification BIS pour les Ponts Roulants sous la
          Certification Schéma-X. Cela garantit que les ponts roulants utilisés
          en Inde sont sûrs, fiables, efficaces et de qualité mondiale.
        </p>

        {/* Guide Introduction */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans ce guide, nous vous orienterons sur l'importance de
          l'Enregistrement BIS Schéma X pour les Ponts Roulants, les aspects
          légaux de l'OTR pour les Ponts Roulants, et comment obtenir une
          Licence BIS pour les Ponts Roulants et marquer la marque Standard BIS
          pour les Ponts Roulants.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS pour les Ponts Roulants est Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les ponts roulants sont largement utilisés dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Travaux de construction et d'infrastructure</li>
          <li>
            Ports maritimes, chantiers navals et autres centres logistiques
          </li>
          <li>Usines et installations d'assemblage</li>
          <li>Mines métalliques et manutention de matériaux lourds</li>
          <li>Centrales électriques et autres industries</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans BIS pour les Ponts Roulants, des équipements non certifiés
          peuvent causer :
        </p>

        {/* Problems without BIS */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Dysfonctionnements mécaniques et accidents</li>
          <li>
            Réduction de la disponibilité et augmentation des coûts de
            maintenance
          </li>
          <li>Perte d'éligibilité aux projets gouvernementaux</li>
          <li>
            Exposition des travailleurs et des infrastructures aux risques de
            sécurité
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS pour les Ponts Roulants donne confiance aux
          consommateurs et aux régulateurs qu'un produit respecte les normes
          robustes de qualité et de sécurité de l'Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X pour les Ponts Roulants ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification Schéma X pour les Ponts Roulants sous BIS est
          obligatoire en vertu du Règlement d'Évaluation de la Conformité BIS,
          2018, qui mandate la certification de produits pour les machines
          critiques.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Majeures du Schéma X pour les Ponts Roulants :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Requis pour les fabricants nationaux et étrangers</li>
          <li>
            Applicable à toutes les catégories principales de ponts roulants et
            notifié sous les normes indiennes
          </li>
          <li>
            Les tests de produits, audits d'usine et évaluations de conformité
            continue sont mandatés
          </li>
          <li>
            Donne une licence pour l'utilisation de la marque BIS sur les Ponts
            Roulants sur les produits certifiés
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour les Ponts Roulants
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Règlement Technique Omnibus (OTR) pour les Ponts Roulants, qui a
          été notifié par le Ministère des Industries Lourdes en 2024, cherche à
          mandater la certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date limite : Tous les fabricants/importateurs de Ponts Roulants
          doivent obtenir une Licence BIS pour les Ponts Roulants sous le Schéma
          X au plus tard le 1er septembre 2026. Par la suite, les ponts roulants
          non certifiés ne peuvent être commercialisés ou importés ou utilisés
          dans les appels d'offres publics en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Ponts Roulants
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité Améliorée : Les ponts roulants certifiés minimisent les
            défaillances mécaniques et les accidents.
          </li>
          <li>
            Avantage Concurrentiel : Les organismes gouvernementaux et les
            maisons d'entreprise donnent préférence aux ponts roulants certifiés
            BIS dans les e-tenders et projets massifs.
          </li>
          <li>
            Confiance Consommateur et Contracteur : La marque BIS pour les Ponts
            Roulants crée la foi en la qualité et la fiabilité.
          </li>
          <li>
            Entrée Marché Global : Pour les fabricants étrangers, la Licence BIS
            pour les Ponts Roulants permet une pénétration sans tracas dans le
            marché régulé indien.
          </li>
          <li>
            Conformité à la Loi Indienne : Évite les pénalités, confiscations,
            et exclusion des contrats gouvernementaux.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Ponts Roulants Inclus dans la Certification Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les ponts roulants répertoriés sous la certification Schéma X sont de
          divers types, par exemple :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Ponts Roulants Tours</li>
          <li>Ponts Roulants Mobiles</li>
          <li>Ponts Roulants à Portique et Goliath</li>
          <li>Ponts Roulants OH/BR</li>
          <li>Ponts Roulants à Chenille</li>
          <li>Ponts Roulants à Flèche</li>
          <li>Ponts Roulants Flottants</li>
          <li>Ponts Roulants Industriels et d'Atelier</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque variante doit être tenue de respecter les normes indiennes
          appropriées (codes IS) comme IS 4573:2020 pour les Spécifications des
          Ponts Roulants Mobiles Actionnés et IS/ISO 15442:2012 pour les Ponts
          Roulants - Exigences de sécurité pour les ponts roulants chargeurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Le type d'équipement doit respecter les normes indiennes pertinentes
          (codes IS) pour la conception, la capacité de charge, la sécurité et
          la performance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour Obtenir une Licence BIS pour les Ponts Roulants
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier les Normes IS Pertinentes : Identifiez la norme indienne
            applicable à votre type de pont roulant.
          </li>
          <li>
            Tests dans les Laboratoires Reconnus par BIS : Il est obligatoire
            d'effectuer des tests de sécurité et d'efficacité.
          </li>
          <li>
            Inspection d'Usine : Le BIS effectue des inspections des sites de
            production et des systèmes qualité.
          </li>
          <li>
            Demande et Documentation : Présentez les rapports techniques,
            résultats de test, et manuels qualité.
          </li>
          <li>
            Licence BIS sur les Ponts Roulants : Une fois approuvée, le
            fabricant a le privilège d'appliquer la marque BIS pour les Ponts
            Roulants.
          </li>
          <li>
            Conformité Continue : Les audits réguliers et inspections assurent
            continuellement la conformité.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Que se passe-t-il si quelqu'un ne suit pas l'OTR pour les Ponts
          Roulants et n'obtient pas la Certification BIS pour les Ponts Roulants
          avant le 1er septembre 2026 ?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdire la vente et l'importation de ponts roulants non certifiés
          </li>
          <li>Saisie de produits et amendes importantes</li>
          <li>Disqualification des appels d'offres gouvernementaux et PSU</li>
          <li>Impact négatif sur la marque à long terme</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'application de la Certification BIS Schéma X sera un jalon
          significatif qui améliorera la sécurité, la fiabilité et fournira des
          normes industrielles communes en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour les fabricants, importateurs, exportateurs de Ponts Roulants, il
          est important d'avoir une Licence BIS pour les Ponts Roulants et peut
          faire une demande par le biais d'un portail de demande en ligne pour
          l'Enregistrement BIS des Ponts Roulants afin de respecter la norme,
          construire la confiance des consommateurs, et aussi éviter les
          conflits potentiels avec le BIS ou le gouvernement indien.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const CranesFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour les Ponts Roulants";

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
