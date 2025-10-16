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

const WeavingMachinesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour Machines à Tisser</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La certification BIS Schéma X est une certification qualité obligatoire pour tous types de machines à tisser (métiers à tisser) et/ou leurs assemblages/sous-ensembles/composants."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines à Tisser, Certification BIS Schéma X pour Machines à Tisser, Certification Schéma X pour Machines à Tisser, BIS pour Machines à Tisser, OTR pour Machines à Tisser"
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
          content="Certification BIS Schéma X pour Machines à Tisser en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les machines à tisser en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
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
          content="Certification BIS Schéma X pour Machines à Tisser en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les machines à tisser en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />
      </Helmet>

      <WeavingMachinesFrenchBreadcrumb />
      <WeavingMachinesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default WeavingMachinesFrench;

const WeavingMachinesFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour Machines à Tisser
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const WeavingMachinesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <WeavingMachinesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const WeavingMachinesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR MACHINES À TISSER
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
            title="Certification BIS Schéma X pour Machines à Tisser (Métiers à Tisser)"
            alt="Licence BIS Schéma X pour machines à tisser (métiers à tisser)"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          L'industrie textile et vestimentaire de l'Inde est parmi les plus
          grands contributeurs du pays à la fabrication, aux exportations et à
          l'emploi. Au cœur de cette industrie se trouvent les machines à
          tisser, essentielles pour la fabrication de tissus pour vêtements,
          ameublement domestique et usage industriel. Alors que la demande
          intérieure continue d'augmenter et avec l'accent mis sur les
          exportations du pays, il est nécessaire de garantir les normes de
          qualité et de sécurité des machines à tisser dans le pays.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Pour assurer cela, le Bureau des Normes Indiennes (BIS), l'organisme
          national de normalisation de l'Inde, a été mis en place et c'est le
          BIS qui a formulé et mis en œuvre les programmes de certification de
          produits en Inde dans le cadre desquels le produit est certifié. Cette
          norme garantit que les machines qui entrent sur le marché indien
          répondent aux normes indiennes en matière de performance, durabilité
          et sécurité.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans cet article, nous expliquerons l'importance du certificat BIS
          Schéma X pour les machines à tisser, le processus de conformité selon
          l'OTR pour machines à tisser et comment obtenir la certification BIS
          en Inde, l'enregistrement BIS pour machines à tisser et l'apposition
          de la marque ISI pour machines à tisser.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS est Important pour les Machines à Tisser ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines à tisser sont utilisées dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Usines textiles et usines de confection</li>
          <li>Unités de production d'ameublement domestique</li>
          <li>Fabrication de tissus industriels</li>
          <li>Usines textiles axées sur l'exportation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans BIS pour les machines à tisser, les machines non certifiées
          peuvent entraîner :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Tissu de qualité inférieure et défauts</li>
          <li>
            Taux de panne élevé, mesure des problèmes mécaniques et temps
            d'arrêt
          </li>
          <li>Augmentation des coûts d'exploitation et des déchets</li>
          <li>Violation des contrats gouvernementaux et d'exportation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS sur les machines à tisser donne confiance au
          consommateur et à l'inspecteur que le produit est conforme aux normes
          indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X pour Machines à Tisser ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS Schéma X pour machines à tisser fait partie des
          Règlements d'Évaluation de Conformité BIS, 2018, qui visent à
          réglementer la qualité des machines importantes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Quelques-unes des caractéristiques de la certification Schéma X pour
          machines à tisser :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obligatoire pour les fabricants indiens et étrangers fournissant
            l'Inde
          </li>
          <li>
            Couvre diverses machines à tisser pour lesquelles les normes
            indiennes sont en vigueur
          </li>
          <li>
            Nécessite des tests de machines, des inspections d'usine et des
            audits qui se poursuivent dans le temps
          </li>
          <li>
            Permet l'utilisation de la marque BIS officielle pour machines à
            tisser
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS pour Machines à Tisser
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification Schéma X sera obligatoire selon la Réglementation
          Technique Omnibus (OTR) 2024 pour les machines à tisser, publiée par
          le Ministère des Industries Lourdes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date limite : 1er septembre 2026. La demande d'octroi d'une licence
          BIS pour machines à tisser sera obligatoire pour tous les fabricants
          et importateurs. Après la date limite, les machines à tisser non
          enregistrées ne pourront pas être vendues, importées ou livrées pour
          un usage commercial en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Machines à Tisser
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Assurance Qualité du Produit : Les machines certifiées assurent une
            production ininterrompue et une efficacité optimale du tissu.
          </li>
          <li>
            Accès au Marché et Appels d'Offres : La licence BIS pour machines à
            tisser est généralement obligatoire dans les appels d'offres
            gouvernementaux et les grandes commandes.
          </li>
          <li>
            Confiance des Acheteurs : La marque BIS pour machines à tisser
            assure la confiance sur le marché national et à l'étranger.
          </li>
          <li>
            Conformité Légale et Réglementaire : Garantit la conformité aux
            réglementations indiennes selon l'OTR pour machines à tisser.
          </li>
          <li>
            Avantage Concurrentiel : Les machines certifiées sont rares dans une
            industrie d'équipement textile extrêmement compétitive.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Weaving Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Machines à Tisser sous Certification Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines à tisser reçoivent la certification Schéma X :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Métiers à tisser motorisés</li>
          <li>Métiers à tisser à pinces</li>
          <li>Métiers à tisser à jet d'air</li>
          <li>Métiers à tisser à jet d'eau</li>
          <li>Métiers à tisser à navette</li>
          <li>Métiers à tisser automatiques</li>
          <li>Machines à tisser industrielles spécialisées</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tous doivent être conformes aux normes indiennes applicables (codes
          IS) comme IS 17361(Partie 6) : 2020 / ISO 11111 : (Partie 6) : 2005
          (Exigences de sécurité des machines textiles Partie 6 Machines de
          fabrication de tissus). Tous les types doivent être conformes aux
          normes indiennes pertinentes (codes IS) en fonction de la conception,
          des performances, de la sécurité et de l'économie d'énergie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus pour Licence BIS pour Machines à Tisser
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier les Normes Applicables : Localiser le numéro IS de votre
            type de machine à tisser.
          </li>
          <li>
            Test du Produit : Les machines sont testées dans des laboratoires
            accrédités par le BIS pour la sécurité et l'efficacité.
          </li>
          <li>
            Inspection d'Usine : Les inspecteurs du BIS effectuent un examen
            approfondi du processus de fabrication et du système de contrôle
            qualité.
          </li>
          <li>
            Soumission de la Demande : Soumettre des documents tels que détails
            techniques, rapports de test et manuels qualité.
          </li>
          <li>
            Délivrance de la Licence BIS pour Machines à Tisser : Avec
            l'approbation, les fabricants seraient en mesure de marquer le BIS
            sur le produit.
          </li>
          <li>
            Conformité Continue : Des audits et des tests sont effectués
            régulièrement pour s'assurer que nous continuons à respecter nos
            normes.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non-conformité de la certification BIS pour machines à tisser dans
          le cadre de l'OTR entraînera :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction de vente ou d'importation de machines non certifiées
          </li>
          <li>Amendes élevées et saisies de produits</li>
          <li>
            Disqualification dans les travaux/appels d'offres gouvernementaux
          </li>
          <li>
            Dommages à long terme à la marque et à la réputation sur le marché
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le déploiement de la certification BIS Schéma X pour machines à tisser
          par l'OTR pour machines à tisser (2024) est une étape majeure dans la
          création d'une industrie textile en Inde qui utilise des machines
          sûres, de qualité et fiables.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour les fabricants/importateurs, l'acquisition d'une licence BIS pour
          machines à tisser et le marquage des produits avec l'effigie BIS n'est
          pas seulement une conformité obligatoire mais ajoute également de la
          valeur au produit pour le marketing. Cela consolide la fiabilité du
          marché et garantit la conformité, ce qui impulse également la
          compétitivité à moyen terme sur les marchés textiles nationaux et
          internationaux.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const WeavingMachinesFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour Machines à Tisser";

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
