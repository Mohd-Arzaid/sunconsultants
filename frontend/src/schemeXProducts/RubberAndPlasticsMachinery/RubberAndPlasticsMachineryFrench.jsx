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

const RubberAndPlasticsMachineryFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Machines Caoutchouc et Plastiques
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X obligatoire pour machines caoutchouc et plastiques, assemblages, sous-ensembles et composants sous Schéma X garantir qualité, sécurité et confiance client."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines Caoutchouc et Plastiques, Certification BIS Schéma X pour Machines Caoutchouc et Plastiques, Certification Schéma X pour Machines Caoutchouc et Plastiques, BIS pour Machines Caoutchouc et Plastiques, OTR pour Machines Caoutchouc et Plastiques"
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
          content="Certification BIS Schéma X pour Machines Caoutchouc et Plastiques en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Machines Caoutchouc et Plastiques en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-caoutchouc-et-plastiques"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Machines Caoutchouc et Plastiques en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Machines Caoutchouc et Plastiques en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-caoutchouc-et-plastiques"
        />
      </Helmet>

      <RubberAndPlasticsMachineryFrenchBreadcrumb />
      <RubberAndPlasticsMachineryFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default RubberAndPlasticsMachineryFrench;

const RubberAndPlasticsMachineryFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Machines Caoutchouc et
                  Plastiques
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certification BIS Schéma X pour Machines Caoutchouc et Plastiques
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-machinery-for-working-rubber-and-plastics.png"
            alt="Certification BIS Schéma X pour Machines Caoutchouc et Plastiques"
            title="Licence BIS pour machines pour travailler caoutchouc et plastiques"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Secteurs industriels Inde changent rapidement, conduisant demand
          accrue machinerie standardisée, sécurisée et haute performance.
          Spécifiquement, machinerie travailler avec caoutchouc et plastiques
          cruciale variété industries, incluant automobile, construction,
          emballage et biens consommateur. Mieux améliorer sécurité produits,
          protection consommateur produits et faciliter assurance qualité,
          Bureau Standards Indiens (BIS) mis place cadre réglementaire qui
          mandate certification Schéma X Conformité.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Ministère Industries Lourdes, sous Ordre Règlementation Technique
          Omnibus (OTR), 2024, exige tous fabricants, qu'ils soient domestiques
          ou internationaux, obtenir Certification BIS Schéma X certaines
          catégories machinerie. Ceci couvre tous types machinerie travailler
          avec caoutchouc et plastiques et leurs assemblages, sous-ensembles et
          composants.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog détaille importance et pertinence Certification Schéma X,
          processus certification, et avantages associés documentation requise
          machinerie caoutchouc et plastiques et tous leurs assemblages,
          sous-ensembles et composants.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance BIS Machines Caoutchouc et Plastiques
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Machines Caoutchouc et Plastiques largement utilisées dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Fabrication composants automobiles (pneu, tuyau, joint, tableau
            bord)
          </li>
          <li>Emballage plastique et produits consommateur</li>
          <li>Fournitures médicales et emballage pharmaceutique</li>
          <li>Matériaux construction et infrastructure</li>
          <li>Composants électriques et électroniques</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Absence BIS Machines Caoutchouc et Plastiques, industries peuvent
          faire face :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Inefficacités opération et pannes fréquentes</li>
          <li>Dangers sécurité opérateurs et utilisateurs finaux</li>
          <li>Faible rendement produits qualité</li>
          <li>Disqualification enchères gouvernement ou gros projets</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Certification BIS Schéma X Machines Caoutchouc et Plastiques assure
          machines conformes Standards Indiens rigoureux, rendant machines plus
          sécurisées, durables et prêtes marché.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que BIS Schéma X Machines Caoutchouc et Plastiques ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Machines Caoutchouc et Plastiques En Inde
          vient sous Règlements Évaluation Conformité BIS, 2018. Ceci établit
          critères performance et sécurité machinerie traitement caoutchouc et
          plastiques.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Clés Certification Schéma X :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Obligatoire fabricants indiens et étrangers</li>
          <li>
            Couvre large éventail machinerie caoutchouc et plastiques selon
            codes IS notifiés
          </li>
          <li>
            Requiert testing produits, audits processus manufacturiers et
            surveillance continue.
          </li>
          <li>Utilisation marque standard BIS certifiée.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ce certificat garantit sécurité machine, efficacité énergétique et
          production fiable industrie et utilisateurs finaux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR Machines Caoutchouc et Plastiques
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Ministère Industries Lourdes lancé Règlementation Technique Omnibus
          Machines Caoutchouc et Plastiques (OTR) 2024. Date limite obtenir
          certification tous fabricants et importeurs 1er septembre 2026. Après
          cette date, machines non approuvées ne peuvent être fabriquées,
          importées ou vendues Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages Certification BIS Machinerie Caoutchouc et Machines
          Plastiques
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Assurance Qualité : Conforme Standards Indiens performance et
            durabilité.
          </li>
          <li>
            Compétitivité Marché : Produit certifié priorisé approvisionnement
            secteur public et privé.
          </li>
          <li>
            Confiance Client : Plus grande confiance acheteurs achètent machines
            Certification BIS Machines Caoutchouc et Plastiques.
          </li>
          <li>
            Conformité Légale : Vous soumis pénalités ou restrictions après
            conformité OTR Machines Caoutchouc et Plastiques.
          </li>
          <li>
            Avantage Global : OEMs internationaux certification trouvent chemin
            marché indien plus facile.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Machines Caoutchouc et Plastiques couvertes Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification Schéma X Machines Caoutchouc et Plastiques couvre large
          éventail équipement, incluant :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Machines moulage injection.</li>
          <li>Attribution extrudeurs et machines soufflage</li>
          <li>Moulins mélange caoutchouc et mélangeurs internes</li>
          <li>Machines calendrage</li>
          <li>Presses Moulage Compression</li>
          <li>Machines recyclage et granulation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque catégorie conforme Standards Indiens applicables (Codes IS)
          comme IS/ISO 20430: 2020 (Machines Plastiques et Caoutchouc-Machines
          Moulage Injection- Exigences Sécurité). Chaque type machine doit
          rencontrer Standards Indiens applicables sécurité, performance et
          fiabilité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus Certification BIS Machines Caoutchouc et Plastiques
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Standards Applicables : Choisir codes IS pertinents type
            machinerie.
          </li>
          <li>Testing Produit : Tester laboratoire approuvé BIS.</li>
          <li>
            Audit Usine : Inspecteurs BIS vérifient manufacturing et système
            qualité conformité.
          </li>
          <li>
            Soumission Documentation : Fournir standards techniques, rapports
            tests et manuels qualité.
          </li>
          <li>
            Approubation Certification : BIS accorde certification, permettant
            utilisation marques standard fabricants.
          </li>
          <li>
            Surveillance Continue : Examens programmés et re-testing maintient
            conformité continue.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non-conformité Exigence BIS Machines Caoutchouc et Plastiques OTR
          Machines Caoutchouc et Plastiques entraîne :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Aucune vente/import équipement non certifié</li>
          <li>Amendes sévères ou saisies produits</li>
          <li>Débarrement approvisionnement public et enchères</li>
          <li>Dommage réputation profession</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ajout Certification BIS Schéma X Machines Caoutchouc et Plastiques OTR
          Machines Caoutchouc et Plastiques (2024) mouvement significatif
          assurer conformité qualité et sécurité machines.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants et importeurs, obtenir certification pas seulement
          conformité réglementaire – investissement stratégique construire
          réputation marque, assurer fiabilité et accès marché croissance rapide
          Inde.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS Machines Caoutchouc et Plastiques";

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
