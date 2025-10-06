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

const SwitchgearandControlgearEquipmentFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Équipements Appareillage et Commande
          jusqu'à 1000 Volts
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X pour équipements appareillage et commande jusqu'à 1000V et leurs assemblages/sous-ensembles/composants obligatoire garantir qualité et sécurité Inde."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Équipements Appareillage et Commande, Certification BIS Schéma X pour Équipements Appareillage et Commande, Certification Schéma.X pour Équipements Appareillage et Commande, BIS pour Équipements Appareillage et Commande, OTR pour Équipements Appareillage et Commande"
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
          content="Certification BIS Schéma X pour Équipements Appareillage et Commande jusqu'à 1000 Volts en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour équipements appareillage et commande jusqu'à 1000V en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Équipements Appareillage et Commande jusqu'à 1000 Volts en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour équipements appareillage et commande jusqu'à 1000V en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts-french"
        />
      </Helmet>

      <SwitchgearandControlgearEquipmentFrenchBreadcrumb />
      <SwitchgearandControlgearEquipmentFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentFrench;

const SwitchgearandControlgearEquipmentFrenchBreadcrumb = () => {
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
                  Certification BIS Équipements Appareillage et Commande jusqu'à
                  1000 Volts
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certification BIS Équipements Appareillage et Commande jusqu'à 1000
          Volts
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="Certification BIS Schéma X pour Équipements Appareillage et Commande jusqu'à 1000 Volts"
            title="Licence BIS appareillage commande équipement volts"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dans cette ère automatisation et électrification, commutateurs
          instruments et commutateurs contrôle composants intégral systèmes
          électriques sécurisés et efficaces. De câblage maison systèmes
          industriels sophistiqués, ces dispositifs gèrent protection, contrôle
          et isolation flux puissance. À cause position importante ces
          dispositifs occupent, Bureau Standards Indiens (BIS) institué
          certification obligatoire tels dispositifs Schéma X s'assurer
          satisfassent repères sécurité et performance établis Inde.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Ministère Industries Lourdes, sous Ordre Règlementation Technique
          Omnibus, 2024, a appliqué certification BIS obligatoire tous
          équipements appareillage et commande (≤ 1000V) vendus, importés et
          fabriqués Inde 1er septembre 2026 onwards. Contrer équipement
          électrique non-conforme et dangereux, ainsi éléver standards produits
          offerts marché, BIS, Certification Schéma X, rendu certification
          obligatoire ces dispositifs opérant ou sous 1000 volts.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog détaille procédure certification avec mérites, portée,
          objectif, preuves support et documentation essentielle, vitale
          Certification Schéma X tous types équipements appareillage et commande
          opérant (ou) leurs assemblages/sous-ensembles/composants opérant
          tensions n'excédant pas 1000 volts.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi BIS Équipements Appareillage et Commande Important
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Appareillage et commande jusqu'à 1000 volts essentiels dans :
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Installations distribution électrique domestique et commerciale
          </li>
          <li>Systèmes gestion puissance industrie</li>
          <li>
            Installations énergie renouvelable (centrales solaire/éolienne)
          </li>
          <li>Projets infrastructure publique</li>
          <li>Applications sécurité critique nécessitant protection circuit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans certification appropriée, risques incluent :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Risque choc électrique ou incendie</li>
          <li>Panne équipement et arrêts coûteux</li>
          <li>Violation normes sécurité indiennes</li>
          <li>
            Interdiction enchères et projets nécessitant équipement certifié
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Certification Schéma X Équipements Appareillage et Commande assure ces
          produits rencontrent standards performance, sécurité et durabilité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certification BIS Schéma X Appareillage et Commande ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Équipements Appareillage et Commande partie
          Règlements Évaluation Conformité BIS, 2018. Elle applique testing
          produit obligatoire, inspections usine et conformité Standards Indiens
          applicables.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Caractéristiques Clés :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable tous fabricants indiens ainsi étrangers</li>
          <li>
            Couvre variété dispositifs : disjoncteurs, sectionneurs, inter
            sectionneurs, unités combinaison fusible et dispositifs commande
            jusqu'à 1000V.
          </li>
          <li>Requiert testing laboratoire installations reconnues BIS</li>
          <li>Inclut audits production et système qualité</li>
          <li>Entitle utiliser Marque Standard produit certification</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR Équipements Appareillage et Commande
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ministère Industries Lourdes introduit Règlementation Technique
          Omnibus (OTR) Équipements Appareillage et Commande 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date Limite Conformité : Fabricants et importeurs tenus obtenir
          certification 1er septembre 2026. Suivant cette date tels équipements
          appareillage et commande non certifiés ne peuvent mis marché, importés
          ou fabriqués Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages Certification BIS Appareillage et Commande
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité Électrique : Protection contre courts-circuits, surcharges
            et risques incendie potentiels.
          </li>
          <li>
            Conformité Réglementaire : Obligatoire OTR Appareillage et
            Dispositifs Commande.
          </li>
          <li>
            Acceptation Marché : Produits enregistrés acceptables tous projets
            gouvernementaux et privés.
          </li>
          <li>
            Confiance Client : Marque Standard BIS Appareillage et Commande
            fournit confiance qualité et sécurité client.
          </li>
          <li>
            Avantage Concurrentiel : Améliore réputation marque et ouvre portes
            nouvelles entreprises.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus Certification BIS Appareillage et Commande
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Standards Indiens Applicables : Identifier codes IS liés
            appareillage et commande jusqu'à 1000 volts.
          </li>
          <li>
            Testing Produit : Effectuez tests sécurité, performance et endurance
            laboratoires approuvés BIS.
          </li>
          <li>
            Audit Usine : Inspecteurs BIS vérifie usines et systèmes contrôle
            qualité.
          </li>
          <li>
            Soumission Documentation : Toutes spécifications détailées, rapport
            test et support fichier conformité.
          </li>
          <li>
            Octroi Licence BIS : Si accepté, BIS émet licence utilisation Marque
            Standard.
          </li>
          <li>
            Conformité Continue : Audits standard et testing produit intervalles
            réguliers assurer certification reste valide.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non conformité Certification BIS Équipements Appareillage et Commande
          sous schème OTR conséquences suivantes :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction fabrication, import ou vente produits non certifiés
          </li>
          <li>Équipement non-conforme saisit et amende.</li>
          <li>Inéligibilité enchère gouvernement</li>
          <li>Dommage relations commerciales et confiance marché.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Équipements Appareillage et Commande
          notifiée sous OTR Équipements Appareillage et Commande (2024), outil
          clé garantir gestion puissance sécurisée, fiable et efficace Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants et importeurs, pour qui Certification Schéma X
          Équipements Appareillage et Commande pas seulement obligation légale
          mais aussi investissement stratégique, assurant accès marché,
          crédibilité marque et confiance clients général.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS Équipements Appareillage et Commande jusqu'à 1000 Volts";

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
