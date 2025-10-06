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

const PowerSemiconductorsFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de
          Puissance
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X applicable tous types convertisseurs semi-conducteurs de puissance et leurs assemblages/sous-ensembles/composants pour assurer qualité et sécurité en Inde"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Convertisseurs Semi-conducteurs de Puissance, Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance, Certification Schéma X pour Convertisseurs Semi-conducteurs de Puissance, BIS pour Convertisseurs Semi-conducteurs de Puissance, OTR pour Convertisseurs Semi-conducteurs de Puissance"
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
          content="Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-power-semiconductor-converters-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-power-semiconductor-converters-french"
        />
      </Helmet>

      <PowerSemiconductorsFrenchBreadcrumb />
      <PowerSemiconductorsFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default PowerSemiconductorsFrench;

const PowerSemiconductorsFrenchBreadcrumb = () => {
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
                  BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PowerSemiconductorsFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const PowerSemiconductorsFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS SCHÉMA X POUR CONVERTISSEURS SEMI-CONDUCTEURS DE PUISSANCE
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de Puissance"
            title="Licence BIS Schéma X pour Convertisseur Semi-conducteur de Puissance"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les convertisseurs semi-conducteurs de puissance permettent exécution
          effective et modification puissance électrique d'une forme à autre à
          travers diverses applications. Ces applications vont des sources
          renouvelables, véhicules électriques, automatisation industrielle et
          électroniques consommateurs. Ils servent base pour dispositifs et
          équipements électriques et électroniques. En raison importance et
          signification croissante des dispositifs dans secteurs énergie et
          industriel du pays, Bureau Standards Indiens (BIS) a incorporé
          certification convertisseurs semi-conducteurs de puissance sous cadre
          certification Schéma X.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Selon ordre donné par Ministère Industries Lourdes, il y a attente de
          tous types fabricants, peu importe qu'ils opèrent localement ou à
          l'étranger, de se conformer certificat BIS pour Convertisseurs
          Semi-conducteurs de Puissance et leurs sous-ensembles et composants,
          avant septembre 1, 2026. Certification BIS Schéma X pour
          Convertisseurs Semi-conducteurs de Puissance est schème certification
          réglementaire, étape vers amélioration manufacturing indien par
          sécurité améliorée, qualité et standards compétitifs mondiaux.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog aidera fournir information nécessaire concernant documentation
          certification Schéma X pour tous sous-ensembles, composants et/ou
          types Convertisseurs Semi-conducteurs de Puissance, leur portée et
          importance, processus certification, avantages et autres informations.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Signification BIS pour Convertisseurs Semi-conducteurs de Puissance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Applications convertisseurs semi-conducteurs de puissance incluent :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Projets énergie solaire et éolienne</li>
          <li>Stations charge VE & entraînements</li>
          <li>Automatisation usine et robotique</li>
          <li>Électroniques consommateurs et PSU</li>
          <li>Réseau Transmission & Distribution</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans certification, risques incluent :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Dysfonctionnement électrique et surchauffe</li>
          <li>Conditions dangereuses et dysfonctionnements équipement</li>
          <li>Efficacité énergétique réduite</li>
          <li>
            Résultats négatifs enchères projets gouvernementaux et appels
            d'offres
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Convertisseurs Semi-conducteurs de Puissance ayant certification
          Schéma X indique ces produits adhèrent strictes Standards Indiens
          performance, sécurité et fiabilité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certificat BIS Schéma X Convertisseurs Semi-conducteurs
          de Puissance ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X pour Convertisseurs Semi-conducteurs de
          Puissance relève Règlements d'Évaluation Conformité BIS, 2018. Elle
          assure produits subissent testing robuste, inspections et
          vérifications conformité avant d'atteindre marché indien.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Clés :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Obligatoire pour tous fabricants étrangers et indiens</li>
          <li>
            Inclut introduction complète dispositifs semi-conducteurs de
            puissance, design drive gate et composants passifs.
          </li>
          <li>Testing produits est obligatoire laboratoires accrédités BIS</li>
          <li>
            Exclusion travaux municipaux, projets et appels d'offres
            Gouvernement.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Certification assure Convertisseurs Semi-conducteurs de Puissance se
          conforment strictes Standards Indiens pour performance, sécurité et
          durabilité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certification BIS Schéma X Convertisseurs
          Semi-conducteurs de Puissance ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Pour Convertisseurs Semi-conducteurs de
          Puissance est couverte sous Règlements d'Évaluation Conformité BIS,
          2018. Elle démontre qu'un produit nécessiterait testing strict,
          inspection et conformité en Inde avant d'être amené marché ici.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Clés :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatoire pour producteurs indiens et étrangers</li>
          <li>
            Couvrant large gamme applications semi-conducteurs de puissance
            (AC-DC, DC-DC, DC-AC et AC-AC)
          </li>
          <li>
            Mandate certification résistance et sécurité laboratoires approuvés
            BIS
          </li>
          <li>Inclut audits usine et système qualité</li>
          <li>
            Fournit droit utiliser Marque Standard BIS si produit est aussi
            BIS-licencié.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR Convertisseurs Semi-conducteurs de Puissance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nouvelle Règledlisation Technique Omnibus (OTR) 2024 pour
          Convertisseurs Semi-conducteurs de Puissance a été publiée par
          Ministère Industries Lourdes. Cet ordre OTR mandate certification
          Schéma X pour ces produits afin ass safer qualité et sécurité
          consommateurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date Conformité : Tous fabricants et importateurs doivent être
          certifiés jusqu'au septembre 1, 2026. Après cette date limite,
          convertisseurs non certifiés ne peuvent être fabriqués, vendus ou
          importés en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages Certification BIS Convertisseurs Semi-conducteurs de
          Puissance
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité Produits : Réduit risque surchauffe, accidents feu et
            courts-circuits.
          </li>
          <li>
            Efficacité Énergétique : Garantit performance optimisée et
            conformité standards économie énergie.
          </li>
          <li>
            Accès Marché : OTR Convertisseurs Semi-conducteurs de Puissance
            requiert certification pour accès marché en Inde.
          </li>
          <li>
            Avantage Compétitif : Appels d'offres gouvernementaux et privés
            préfèrent produits certifiés.
          </li>
          <li>
            Confiance Consommateur : Marque Standard BIS indique fiabilité,
            sécurité et qualité.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure Enregistrement BIS Convertisseurs Semi-conducteurs de
          Puissance
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Standards IS Applicables : Identifier Standards Indiens
            applicables pour type convertissez.
          </li>
          <li>
            Testing Produits : Tests performance ou sécurité devront être
            effectués laboratoires accrédités BIS.
          </li>
          <li>
            Inspection Usine : Auditeurs BIS vérifient lignes production,
            contrôle qualité et opérations sécurité.
          </li>
          <li>
            Soumission Documentation : Fournir Spécifications Techniques,
            Rapports Tests et Enregistrements Conformité.
          </li>
          <li>
            Octroi Licence : Sur approbation, BIS accorde licence utiliser
            Marque Standard.
          </li>
          <li>
            Conformité Continue : Audits Réguliers et Tests d'Échantillons
            assurent maintien Certification.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non-conformité avec Certification BIS Convertisseurs Semi-conducteurs
          de Puissance sous OTR Convertisseurs Semi-conducteurs de Puissance
          peut conduire à :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction vente, fabrication ou import produits non certifiés
          </li>
          <li>Confiscation marchandises et peines pécuniaires</li>
          <li>
            Exclusion participation appels d'offres gouvernementaux, contrats
          </li>
          <li>Dommage réputationnel marché indien</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Convertisseurs Semi-conducteurs de
          Puissance, mandatee sous OTR Convertisseurs Semi-conducteurs de
          Puissance (2024), représente règlement game-changer mandatant produits
          sûrs, efficaces et qualité élevée dans marchés énergie et
          électroniques en expansion rapide Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabriquant / fabricant et importeurs, avoir certification Schéma
          X pour Convertisseurs Semi-conducteurs de Puissance n'est pas
          simplement obligatoire – c'est opportunité gagner confiance
          consommateurs, conformité et accès marché plus large.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const PowerSemiconductorsFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS Convertisseurs Semi-conducteurs de Puissance";

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
