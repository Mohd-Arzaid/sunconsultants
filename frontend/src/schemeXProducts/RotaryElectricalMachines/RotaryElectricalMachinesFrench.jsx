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

const RotaryElectricalMachinesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Machines Électriques Rotatives
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X pour machines électriques rotatives, comme Générateurs, etc., et (ou) leurs assemblages/sous-ensembles/composants est mouvement réglementaire pivot vers qualité et sécurité équipements industriels essentiels."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines Électriques Rotatives, Certification BIS Schéma X pour Machines Électriques Rotatives, Certification Schéma X pour Machines Électriques Rotatives, BIS pour Machines Électriques Rotatives, OTR pour Machines Électriques Rotatives"
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
          content="Certification BIS Schéma X pour Machines Électriques Rotatives en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Machines Électriques Rotatives en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-machines-electriques-rotatives"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Machines Électriques Rotatives en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Machines Électriques Rotatives en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-electriques-rotatives"
        />
      </Helmet>

      <RotaryElectricalMachinesFrenchBreadcrumb />
      <RotaryElectricalMachinesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default RotaryElectricalMachinesFrench;

const RotaryElectricalMachinesFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Machines Électriques Rotatives
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const RotaryElectricalMachinesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR MACHINES ÉLECTRIQUES ROTATIVES
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="Certification BIS Schéma X pour Machines Électriques Rotatives"
            title="Licence BIS Schéma X pour Machines électriques rotatives"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Générateurs, moteurs et alternateurs comme machines électriques
          rotatives sont types essentiels machinerie utilisés nombreuses
          activités importantes comme faire fonctionner industries, générer
          puissance et même rencontrer infrastructure technologie information et
          autres besoins niveau global. Ces machines travaillent main dans main
          dans secteurs comme puissance et transport, fabrication ainsi que
          complexes commerciaux parce qu'elles convertissent énergie mécanique
          en électrique ou vice versa. Telles machines sont critiques et donc,
          leur qualité, fiabilité et sécurité sont importantes. En Inde, BIS a
          adressé cette question avec Certification Schéma X pour machines
          électriques rotatives et leurs assemblages et composants avec autre
          équipement électrique.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dans Ordre Règlementation Technique Omnibus 2024, Ministère Industries
          Lourdes a déclaré que tous fabricants, qu'ils soient étrangers ou
          locaux, produisant machines rotatives et tout autre équipement lié,
          doivent se conformer Certification Schéma X avant date 1er septembre
          2026. Ce cadre réglementaire mentionne tous tableaux machines
          électriques rotatives incluant générateurs, alternateurs, moteurs
          synchrones et asynchrones et tous assemblages des machines,
          sous-ensembles et composants.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog discute importance, portée, procédures certification,
          avantages et autre documentation liée Certification Schéma X pour tous
          types machines électriques rotatives.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance BIS Pour Machines Électriques Rotatives
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Machines électriques rotatives sont largement utilisées dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Génération et distribution électricité</li>
          <li>Automatisation industrielle et équipement</li>
          <li>Transport (chemins de fer, bateaux, voitures électriques)</li>
          <li>Secteurs pétrole, gaz et énergie</li>
          <li>Appareils électriques usage consommateur et commercial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certains risques possibles sans certification incluent :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Dangers électriques, courts-circuits et risques incendie</li>
          <li>Pannes mécaniques et arrêts coûteux</li>
          <li>Gaspillage énergie</li>
          <li>Interdiction enchères gouvernementaux et projets</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Certification Schéma X pour Machines Électriques Rotatives garantit
          que ces produits satisfassent standards qualité, efficacité et
          sécurité rigoureux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certification BIS Schéma X Machines Électriques
          Rotatives ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Machine Électrique Rotative est schème
          régulation gouvernement sous Règlement d'Évaluation Conformité BIS,
          2018. Elle certifie produits pour Standards Indiens avant qu'ils
          entrent marché indien.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certaines caractéristiques Certification Schéma X :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatoire Tous Fabricants (Domestiques et Étrangers)</li>
          <li>
            Inclut moteurs, générateurs, alternateurs et autres machines
            électriques rotatives
          </li>
          <li>Nécessite testing laboratoires reconnus BIS</li>
          <li>Audit usine garantir contrôle qualité</li>
          <li>
            Elle permet utilisation Marque Standard BIS sur produit après
            certification.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour Machines Rotatives
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Règlementation Technique Omnibus (OTR) Machines Électriques Rotatives
          a été annoncée par Ministère Industries Lourdes 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date Conformité : Selon ce schème OTR, tous fabricants et importeurs
          Machines Électriques Rotatives doivent être certifiés sous
          Certification BIS Schéma X avant septembre 1, 2026. Après cette date
          limite, machines électriques rotatives non certifiées ne peuvent être
          vendues, fabriquées ou importées en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages Certification BIS Machine Électrique Rotative
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Fiabilité Produits : Assure sécurité standards
            électriques et mécaniques.
          </li>
          <li>
            Conformité Réglementaire : Rencontre exigence OTR Machines
            Électriques Rotatives.
          </li>
          <li>
            Compétitivité Marché : Certification est avantage dans
            approvisionnement gouvernement et privé.
          </li>
          <li>
            Confiance Consommateur : Marque Standard BIS assure qualité et
            sécurité usage.
          </li>
          <li>
            Accès Marché Global : Assiste marques étrangères pénétrer facilement
            marché strictement régulé Inde.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Types Machines Électriques Rotatives Incluses
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification Schéma X Machines Électriques Rotatives couvre large
          variété équipement comme listé ci-dessous ;
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Moteurs AC et DC</li>
          <li>Générateurs et alternateurs</li>
          <li>Turbo-générateurs et hydro-générateurs</li>
          <li>
            Types spéciaux Machines Rotatives employées Industries et
            Utilitaires
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tous types sont tenus être selon Standards Indiens appropriés (codes
          IS) comme IS 16819:2018/ ISO 12100:2010 (Sécurité Machinerie Principes
          Généraux Design- Évaluation Risque et Réduction Risque). Tous types
          machines doivent se conformer Standards Indiens correspondants être
          approuvés.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus Certification BIS Machine Électrique Rotative
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Standards : Passer par codes IS applicables type machine.
          </li>
          <li>
            Testing Produits : Effectuer testing performance, sécurité et
            efficacité laboratoires approuvés BIS.
          </li>
          <li>
            Inspection Usine : Révision officiels BIS usine manufacturière et
            systèmes assurance qualité.
          </li>
          <li>
            Soumission Documentation : Soumettre documentation technique,
            spécifications et nomenclature matérielle.
          </li>
          <li>
            Octroi Licence : Si application approuvée, BIS accorde certification
            et permet utilisation Marque Standard BIS.
          </li>
          <li>
            Conformité Continue : Testing et audits réguliers garder
            certification actuelle.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabricants ne suivant pas Certification BIS Machines Électriques
          Rotatives couvertes sous OTR Machines Électriques Rotatives sont
          soumis à :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Interdiction vente ou import articles non certifiés</li>
          <li>Confiscation articles et amendes substantielles</li>
          <li>Élimination travaux ou projets gouvernementaux et enchères</li>
          <li>Pertes économiques et dommage réputationnel</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Machines Électriques Rotatives, conforme
          OTR Machines Électriques Rotatives (2024), est étape vitale renforcer
          sécurité industrielle, conservation énergie et performance industrie
          machinerie électrique Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants et importeurs, certification Schéma X Machines
          Électriques Rotatives n'est pas simplement exercice case à cocher,
          c'est important s'appuyer cette certification et positionner
          stratégiquement avantageux être vu comme crédible consommateur comme
          partie leur histoire croissance.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS Machines Électriques Rotatives";

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
