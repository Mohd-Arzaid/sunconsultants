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

const TransformersFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour Transformateurs</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X pour Transformateurs spécifie standards qualité et sécurité fabrication transformation et import transformateurs Inde."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Transformateurs, Certification BIS Schéma X pour Transformateurs, Certification Schéma X pour Transformateurs, BIS pour Transformateurs, OTR pour Transformateurs"
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
          content="Certification BIS Schéma X pour Transformateurs en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Transformateurs en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-transformateurs"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Transformateurs en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Transformateurs en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-transformateurs"
        />
      </Helmet>

      <TransformersFrenchBreadcrumb />
      <TransformersFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default TransformersFrench;

const TransformersFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Transformateurs
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const TransformersFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const TransformersFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certification BIS Schéma X pour Transformateurs
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="Certification BIS Schéma X pour Transformateurs"
            title="Licence BIS Schéma X pour Transformateurs"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Transformateurs composant intégral réseau transmission et distribution
          puissance. Indépendamment application opérations industrielles,
          commerciales ou services publics, transformateur est et devrait
          toujours rester équipement sécurité ultime et performance
          opérationnelle due nature critique son fonctionnement. Améliorer
          sécurité, fiabilité et standardisation industrie équipement électrique
          Inde, Bureau Standards Indiens (BIS) rendu Certification BIS tous
          types transformateurs et leurs assemblages, sous-ensembles, composants
          et sous-composants obligatoire Certification Schéma X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Ministère Industries Lourdes, travers Ordre Règlementation Technique
          Omnibus 2024, spécifié date limite tous fabricants, indépendamment
          pays origine, obtenir Certification BIS Schéma X transformateurs et
          équipements similaires 1er septembre 2026. Certification BIS Schéma X
          transformateurs étape vers amélioration qualité, cohérence, fiabilité
          et sécurité électrique produits Inde. Pour fabricants, importeurs ou
          fournisseurs OEM transformateurs avec composants, ces standards plus
          qu'obligation conformité.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog capture toutes informations pertinentes relatives portée,
          importance et avantages certification, processus et documentation
          nécessaire Certification Schéma X tous types Transformateurs et (ou)
          leurs assemblages, sous-ensembles, composants et ou assemblages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi Schéma X Transformateurs Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Transformateurs largement utilisés dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Installations génération</li>
          <li>Réseaux transmission et distribution</li>
          <li>Usines et bâtiments production</li>
          <li>Projets énergies renouvelables (solaire / éolien / hydro)</li>
          <li>Propriétés commerciales / domaines résidentiels</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans conformité appropriée, transformateurs peuvent causer :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Surchauffe, incendie et choc électrique.</li>
          <li>Pertes et gaspillage puissance pendant transmission</li>
          <li>Pannes dues pannes système</li>
          <li>Rejetés enchères publiques, projets gouvernementaux</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Certification Schéma X Transformateurs assure haute sécurité,
          efficacité énergétique et fiabilité produit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certification Schéma X Transformateurs ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Transformateurs cadre légal sous Règlements
          Évaluation Conformité BIS, 2018. Elle mandate testing et inspection
          rigoureux et insiste niveau documentation supérieur déterminer qualité
          selon Standards Indiens.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Clés Certification Schéma X :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Pour tous fabricants, indiens et étrangers.</li>
          <li>
            Inclut transformateurs distribution, transformateurs puissance et
            transformateurs usage spécial
          </li>
          <li>
            Testing performance, efficacité et sécurité laboratoires approuvés
            BIS obligatoire
          </li>
          <li>
            Usine auditée processus Manufacturing examinés et systèmes qualité
          </li>
          <li>Fournit licence utilisation Marque Standard BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR Transformateurs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ministère Industries Lourdes introduit Règlementation Technique
          Omnibus (OTR) Transformateurs, 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date Conformité : Tous fabricants et importeurs doivent certifiés 1er
          septembre 2026. Après quoi, transformateurs non certifiés ne peuvent
          fabriqués, amenés pays ou vendus Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages BIS Transformateurs
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Fiabilité : Vérifie transformateurs conformes exigences
            sécurité électrique et prévention incendie.
          </li>
          <li>
            Efficacité Énergétique : Encourage moins perte puissance et
            meilleure performance puissance.
          </li>
          <li>
            Conformité Marché : Conforme exigences réglementaires
            transformateurs, listées OTR.
          </li>
          <li>
            Éligibilité Enchères : Produits certifiés éligibles enchères
            Gouvernement et PSU.
          </li>
          <li>
            Confiance Client : Marquage Standard BIS assure qualité produit et
            durabilité.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Types Transformateurs Couverts
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Transformateurs s'applique :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Transformateurs Distribution (utilisation réseaux locaux et
            alimentation résidentielle)
          </li>
          <li>
            Transformateurs Puissance (niveau réseau transmission haute tension)
          </li>
          <li>
            Transformateurs Usage Spécial (applications industrielles,
            ferroviaires et projets renouvelables)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque type rencontrer code IS pertinent (voir note) SO comme IS
          16819:2018/ISO 12100:2010 (sécurité machinerie Principes généraux
          conception – Évaluation risque et réduction risque). Tous types
          doivent conformer codes IS respectifs certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus Certification BIS Transformateurs
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Standards Applicables : Veuillez référer code IS divers
            types transformateur.
          </li>
          <li>
            Testing Produit : Effectuer vérifications sécurité, efficacité
            énergétique et performance laboratoires approuvés BIS.
          </li>
          <li>
            Audit Usine : Personnel BIS observe production fabricant et systèmes
            contrôle qualité.
          </li>
          <li>
            Soumission Documentation : Soumettre spécification, rapports tests
            et données conformité.
          </li>
          <li>
            Octroi Licence : BIS fournit licence utiliser Marque Standard quand
            toutes provisions remplies.
          </li>
          <li>
            Conformité Continue : Testing et revue réguliers effectués maintenir
            validité certification.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Échec conformer BIS / OTR Transformateurs Certification BIS
          Transformateurs sous OTR Transformateurs signifierait suivant :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction vente fabrications et import transformateurs non
            certifiés.
          </li>
          <li>
            Saisie obligatoire produits non conformes et pénalités sévères.
          </li>
          <li>Disqualification enchères gouvernement et PSU</li>
          <li>Dommages réputationnels, financiers longue traîne</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Transformateurs sera requise sous OTR
          Transformateurs (2024) étape importante amélioration infrastructure
          puissance Inde produits fiables, efficaces et sécurisés.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants et importeurs, Certification Schéma X Transformateurs
          pas seulement certification obligatoire mais aussi outil stratégique
          gagner confiance marché indien et soutenir succès long terme industrie
          puissance pays.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const TransformersFrenchMainContentRight = () => {
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
  const currentPageName = "Produit SchémaX - Certification BIS Transformateurs";

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
