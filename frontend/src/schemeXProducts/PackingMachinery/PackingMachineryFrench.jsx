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

const PackingMachineryFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour Machines d'Emballage</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La Certification BIS Schéma X pour tous types de machines pour remplissage, fermeture, scellage, étiquetage bouteilles, emballage ou enveloppement, et (ou) leurs assemblages/sous-ensembles/composants marque une étape significative vers standardisation sécurité et qualité dans secteur manufacturier de l'Inde."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines d'Emballage, Certification BIS Schéma X pour Machines d'Emballage, Certification Schéma X pour Machines d'Emballage, BIS pour Machines d'Emballage, OTR pour Machines d'Emballage"
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
          content="Certification BIS Schéma X pour Machines d'Emballage en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la Certification BIS Schéma X pour machines d'emballage en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Machines d'Emballage en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la Certification BIS Schéma X pour machines d'emballage en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery-french"
        />
      </Helmet>

      <PackingMachineryFrenchBreadcrumb />
      <PackingMachineryFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default PackingMachineryFrench;

const PackingMachineryFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Machines d'Emballage
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PackingMachineryFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const PackingMachineryFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR MACHINES D'EMBALLAGE
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="Licence BIS machines pour remplissage, fermeture, scellage, étiquetage"
            alt="Certification BIS Schéma X pour Machines d'Emballage"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines d'emballage sont essentielles aux industries dans
          secteurs alimentaire, boissons, pharmaceutique, chimique, biens de
          consommation et logistique. Ce sont les machines assurant l'emballage
          adéquat, sûr et qualité des produits.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Pour assurer sécurité, fiabilité et rentabilité, BIS (Bureau des
          Standards Indiens) a rendu Certification BIS Schéma X pour Machines
          d'Emballage obligatoire. Cette certification est fournie pour garantir
          que toute machinerie d'emballage qu'elle soit vendue en Inde ou
          importée en Inde, est en conformité avec standards qualité nationaux
          en vigueur.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans ce blog, nous décrivons signification de certification Schéma X
          pour Machines d'Emballage, Rôle OTR pour Machines d'Emballage et
          processus pour obtenir Licence BIS et Marque Standard BIS pour
          Machines d'Emballage.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi Certification BIS pour Machines d'Emballage Importe
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La machinerie d'emballage est employée dans toutes entreprises pour :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Emballage alimentaire et boissons</li>
          <li>Médicaments Perceuses et produits médicaux</li>
          <li>Emballage utilisé dans industries chimiques et industrielles</li>
          <li>Produits consommateurs et détail</li>
          <li>Solutions d'emballage pour marché export</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          En absence de BIS pour Machines d'Emballage : Produits non certifiés
          par BIS peuvent conduire à :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Défaillances dans emballage, intégrité produit et contamination
          </li>
          <li>Risques sécurité dans segments alimentaires et pharma.</li>
          <li>Opération inefficace et arrêts</li>
          <li>Échec suivre règles d'achat gouvernement</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS sur Machines d'Emballage assure l'acheteur de sa
          Qualité, Sécurité et longue vie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que Certification X-Schéma pour Machines d'Emballage ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Machines d'Emballage fait partie II de certification Schéma X, sous
          Règlements d'Évaluation Conformité BIS 2018 et conformité avec ceci
          est obligatoire pour fabricants indiens ainsi qu'étrangers.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Sautantes Certification BIS Schéma X pour Machines
          d'Emballage :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Adéquat pour toute machine d'emballage (manuelle, semi-automatique
            et automatique)
          </li>
          <li>
            Besoin tester produits, auditeurs pour usines et contrôler qualité.
          </li>
          <li>Obligatoire pour ventes et importations en Inde</li>
          <li>
            Accorde permission utiliser marque BIS pour Machines d'Emballage sur
            équipement certifié
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR pour Machines d'Emballage
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le cadre de conformité pour fabricant est prescrit sous Règlementation
          Technique Omnibus (OTR) pour Machines d'Emballage, émis par Ministère
          Industries Lourdes en 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Délai : Toute machinerie d'emballage sera couverte avec Certificat BIS
          Schéma X et toute machinerie d'emballage obtiendra Licence BIS pour
          Machines d'Emballage avant 01.09.2026. Machine d'emballage qui n'est
          pas certifiée, à partir 1er septembre 2026, ne peut être fabriquée,
          vendue et importée en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages BIS Schéma X pour Machines d'Emballage
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Hygiène : Machinerie d'emballage qui est certifiée évite
            aussi problèmes contamination (alimentaire et pharma).
          </li>
          <li>
            Assurance Qualité : Garde et machines fonctionnant en douceur et
            efficacement.
          </li>
          <li>
            Avantage Marché : Une Licence Machines d'Emballage BIS est une
            exigence licenciante communément requise pour appels d'offres
            gouvernementaux.
          </li>
          <li>
            Confiance Consommateur : La marque BIS (Bureau Standards Indiens)
            pour Machines d'Emballage reflète qualité et assure un niveau
            crédibilité.
          </li>
          <li>
            Accès Marché Global : Marques étrangères ont accès facile au marché
            régulé Inde par enregistrement produit.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Machines d'Emballage sous Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X pour Machines d'Emballage couvre une large
          variété de machines d'emballage.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Machines d'emballage alimentaire et boissons</li>
          <li>Machines d'emballage blister et bande pour pharma</li>
          <li>Machines enveloppement, scellage et remplissage</li>
          <li>Machines cartonnage et étiquetage</li>
          <li>Systèmes emballage sous vide et sous film</li>
          <li>Machinerie d'emballage en vrac et industrielle</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque sorte de machinerie d'emballage doit rencontrer exigences de
          Normes Indiennes appropriées (codes IS) incluant IS 16819 :2018/ISO
          12100 : 2010 Sécurité Machines Principes Généraux Design- Évaluation
          Risque et Réduction Risque).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Type machine doit rencontrer Normes Indiennes appropriées pour
          performance, sécurité, propreté et efficacité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus Licence BIS pour Machine d'Emballage
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifier Standards Applicables : Identifier codes IS appropriés
            pour votre classe machinerie d'emballage.
          </li>
          <li>
            Testing Laboratoires Reconnus BIS : Tests de performance, hygiène et
            sécurité obligatoires.
          </li>
          <li>
            Inspection d'Usine : Personnel BIS effectue audits site
            manufacturier en personne.
          </li>
          <li>
            Application et Documentation : Téléchargement rapports test,
            spécifications tech et manuels qualité.
          </li>
          <li>
            Émission Licence BIS sur Machines d'Emballage : Peut être utilisé
            dorénavant après obtention approbation pour Machines d'Emballage
            après avoir quitté locaux usine.
          </li>
          <li>
            Conformité Continue : Durant vérifications aléatoires BIS et
            processus surveillance avec vérification échantillons produits des
            étagères maintient cohérence 24 heures.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités Non-Conformité
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si vous ne rencontrez pas OTR pour Machines d'Emballage et n'êtes pas
          certifié avant 1er septembre 2026 :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Interdiction fabrication/import équipement non certifié</li>
          <li>Amendes sévères, confiscation produits</li>
          <li>Banni projets PSU et appels d'offres publics</li>
          <li>Discrédit marque soutenu et perte crédibilité</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification BIS Schéma X Machines d'Emballage sous OTR pour Machines
          d'Emballage (2024) est une initiative clé vers standardisation
          sécurité et qualité dans espace emballage industriel du pays.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Importateurs/exporteurs et fabricants bénéficient déjà Licence BIS
          pour Machines d'Emballage et marquage BIS comme outil stratégique qui
          accès marchés et fiabilité et les aide tenir debout dans marché hyper
          régulé.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const PackingMachineryFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS Schéma X pour Machines d'Emballage";

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
