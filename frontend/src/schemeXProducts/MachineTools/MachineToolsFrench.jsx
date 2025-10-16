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

const MachineToolsFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour Outils de Machines</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La certification BIS Schéma X est obligatoire pour les outils de machines incluant tours, machines de fraisage, machines de perçage, meuleuses, systèmes CNC et outils pour travailler pierre, céramiques, béton et matériaux similaires"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Outils de Machines, Certification BIS Schéma X pour Outils de Machines, Certification Schéma X pour Outils de Machines, BIS pour Outils de Machines, OTR pour Outils de Machines"
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
          content="Certification BIS Schéma X pour Outils de Machines en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les outils de machines en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-machines-a-outils"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Outils de Machines en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les outils de machines en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-a-outils"
        />
      </Helmet>

      <MachineToolsFrenchBreadcrumb />
      <MachineToolsFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default MachineToolsFrench;

const MachineToolsFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Outils de Machines
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const MachineToolsFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const MachineToolsFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR OUTILS DE MACHINES
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Licence BIS Schéma X pour Outils de Machines
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="Certification BIS Schéma X pour Outils de Machines"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Considérant la qualité et la sécurité comme critiques, le BIS (Bureau
          des Normes Indiennes) a été à la tête de la sécurité et normes de
          différentes industries par Certification Schéma X. Ce Certificat est
          d'importance capitale envers les fabricants d'outils de machines
          conçus pour fonctionner sur matériaux comme pierre, céramique, béton,
          ciment amiante et verres minéraux similaires et autres outils
          d'usinage. La conformité de certification ne répond pas seulement aux
          exigences nationales de sécurité, mais augmente significativement la
          crédibilité et commercialisabilité de tels produits.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Cette Certification Schéma X est une exigence sous Sécurité des
          Machines et Équipements Électriques (Règlementation Technique Omnibus,
          2024). La Règlementation certifie que les fabricants des machines et
          équipements électriques doivent avoir la Marque Standard sur leur
          équipement. La certification inclut préparation de dossier technique,
          audits d'usine, vérification indépendante de produits et licence, et
          la date limite finale est le 1er septembre 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Ce blog couvre toute l'information nécessaire liée à certification
          Schéma X pour tous types d'outils de machines pour travailler pierre,
          céramiques, béton, ciment amiante ou minéraux similaires (ou) et leurs
          assemblages/sous-assemblages/composants, son importance, portée,
          processus de certification, avantages et documentation nécessaire.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS pour Outils de Machines est Importante
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les outils de machines sont indispensables dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Production de pièces automobile et d'aéronefs</li>
          <li>Construction navale et industrie d'ingénierie lourde</li>
          <li>Fabrication d'équipements de génération électrique</li>
          <li>Chemins de fer, défense et outillage de précision</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans certification BIS, les risques incluent :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Qualité de produit inadéquate et incohérente</li>
          <li>Dysfonctionnement dans équipements et délais en production</li>
          <li>Risques pour opérateurs</li>
          <li>Préoccupations légales pour Violation des Lois Indiennes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          En appliquant la conformité, la Certification Schéma X protège les
          industries contre ces risques. Elle s'applique aussi à tous types
          d'outils de machines pour travailler pierre, céramiques, béton, ciment
          amiante ou minéraux similaires (ou) et leurs
          assemblages/sous-assemblages/composants.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X pour Outils de Machines ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec la Certification BIS Schéma X sous Règlements d'Évaluation de
          Conformité BIS, 2018, tel testing, inspection et licence sont devenus
          obligatoires pour l'outil de machine produit identifié, avant sa
          fabrication, importation ou vente dans le pays.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Points Forts Clés :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable pour fabricants indiens et importés</li>
          <li>
            Couvre outils de machines comme tours, machines de fraisage,
            machines de perçage, meuleuses, machines de façonnage, systèmes CNC
            et plus
          </li>
          <li>
            Le testing est effectué seulement dans laboratoires approuvés BIS.
          </li>
          <li>
            Les audits d'usine et révisions systèmes qualité sont obligatoires
          </li>
          <li>
            Seuls les candidats réussis obtiennent la Licence BIS pour utiliser
            la Marque Standard sur leurs produits
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR pour Outils de Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Ministère des Industries Lourdes a publié la Règlementation
          Technique Omnibus (OTR) mandant certification BIS schéma X pour Outils
          de Machines.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Délai : Tous producteurs et importateurs devront avoir certification
          BIS avant le 1er septembre 2026. À partir de la date de telle
          notification, tout outil de machine non certifié ne pourra être
          fabriqué, vendu ou importé en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Outils de Machines
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Assurance Qualité : Précision vérifiée, durabilité des outils
            certifiés.
          </li>
          <li>
            Accès au Marché – essentiel pour entrée dans travaux secteur public
            et privé.
          </li>
          <li>
            Confiance consommateur – La Marque Standard BIS est l'assurance de
            qualité et sécurité du produit.
          </li>
          <li>
            Avantage concurrentiel - Les fabricants autorisés sont préférés pour
            appels d'offres et achats.
          </li>
          <li>
            Réduction des Risques – Pas de défaillance d'équipement, sécurité
            opérateur augmentée, et prévention des temps d'arrêt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus de Certification BIS des Outils de Machines
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier Normes – Corréler le type d'outil de machine et son usage
            avec Normes Indiennes.
          </li>
          <li>
            Testing de Produits – Tests de performance, sécurité et Durabilité
            dans laboratoires accrédités BIS.
          </li>
          <li>
            Audit d'Usine – Audit contrôle qualité de production des appareils
            électriques.
          </li>
          <li>
            Documentation : Rapports techniques, manuels et preuve de conformité
            doivent être fournis.
          </li>
          <li>
            Octroi de Licence : BIS accorde une licence (certificate) et permet
            usage de la Marque Standard.
          </li>
          <li>
            Surveillance – Revues régulières et inspections aléatoires sont en
            place pour confirmer qu'ils adhèrent aux règles.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification Schéma X est obligatoire pour toutes machines pour
          travailler pierre, céramiques, béton, ciment amiante ou minéraux
          similaires (ou) et leurs assemblages/sous-assemblages/pièces.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ne pas se conformer aux normes de certification BIS sous OTR peut
          résulter en :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction contre production, importation et commerce de
            commodités non certifiées
          </li>
          <li>Forfaite des biens et amendes dans Affaire Criminelle.</li>
          <li>Perte de contrats défense et gouvernementaux</li>
          <li>Dommage permanent de marque et réputation sur le long terme</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certification BIS Schéma X, requise sous OTR 2024, n'est pas juste
          une obligation réglementaire—elle est la clé vers confiance, sécurité
          et succès dans l'industrie manufacturière indienne. La certification
          est importante pour Fabricants Indiens et Mondiaux pour Accès au
          Marché, Conformité et Succès à Long Terme.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const MachineToolsFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour Outils de Machines";

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
