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

const DieselGeneratorFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour les Générateurs Diesel</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La Certification BIS Schéma X pour les générateurs diesel et leurs composants est une mesure réglementaire cruciale visant à standardiser et garantir la qualité et la sécurité en Inde."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Générateurs Diesel, Certification BIS Schéma X pour Générateurs Diesel, Certification Schéma X pour Générateurs Diesel, BIS pour Générateurs Diesel, OTR pour Générateurs Diesel"
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
          content="Certification BIS Schéma X pour les Générateurs Diesel en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les générateurs diesel en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-generateurs-diesel"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour les Générateurs Diesel en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les générateurs diesel en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-generateurs-diesel"
        />
      </Helmet>

      <DieselGeneratorFrenchBreadcrumb />
      <DieselGeneratorFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default DieselGeneratorFrench;

const DieselGeneratorFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour les Générateurs Diesel
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const DieselGeneratorFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const DieselGeneratorFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR GÉNÉRATEUR DIESEL
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="Certification BIS Schéma X pour les Générateurs Diesel"
            title="Licence BIS Schéma X pour Générateur Diesel"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les générateurs diesel sont utilisés dans les établissements
          commerciaux, industries, hôpitaux, projets d'infrastructure, projets
          résidentiels et dans bien d'autres endroits comme source secondaire
          d'énergie. En tant qu'actifs économiques responsables de garantir la
          continuité de l'alimentation électrique, il est important que les
          machines soient sûres, efficaces et conformes aux normes nationales.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dans cet effort, la Certification BIS du Générateur Diesel est incluse
          dans la Certification Schéma X du Bureau des Normes Indiennes (BIS).
          Ce schéma a été mis en place pour s'assurer que les fabricants
          nationaux et internationaux respectent les normes indiennes
          rigoureuses et strictes avant de vendre leurs produits en Inde.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Cet article détaille l'importance de la Certification BIS Schéma X des
          Générateurs Diesel, le mandat OTR de 2024 et comment les fabricants
          peuvent obtenir la certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance du BIS pour les Générateurs Diesel
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les générateurs diesel sont utilisés dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Usines et chantiers de travail</li>
          <li>Hôpitaux et services d'urgence</li>
          <li>Centres de données et hubs informatiques</li>
          <li>Bâtiments commerciaux et résidentiels</li>
          <li>Travaux publics et services publics</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les risques sont énormes si les générateurs diesel ne sont pas
          correctement certifiés :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Défaillances mécaniques (mécaniques et électriques) entraînant une
            interruption d'alimentation
          </li>
          <li>
            Risque élevé d'incendie et de dangers de sécurité dans les unités
            non conformes
          </li>
          <li>Émissions trop élevées et inefficacité énergétique</li>
          <li>Barrières légales, exclusion des appels d'offres</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Les Générateurs Diesel peuvent facilement respecter la certification
          Schéma X qui permet aux fabricants de vendre des produits sûrs,
          fiables et respectueux de l'environnement pour une utilisation en
          Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X des Générateurs Diesel ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS Schéma X pour les Générateurs Diesel est un
          processus de certification officiel et un système établi par les
          Règlements d'Évaluation de la Conformité BIS 2018. Il mande des tests
          rigoureux et une évaluation de la qualité pour valider l'adhésion aux
          normes indiennes.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Points Forts de la Certification Schéma X :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Tous les fabricants - indiens et étrangers - Exigence obligatoire
          </li>
          <li>
            Applicable à tous types de générateurs diesel de différentes
            capacités
          </li>
          <li>
            Inclut les tests de produits dans les laboratoires autorisés par BIS
          </li>
          <li>
            Audit d'Usine, Visite d'Atelier et Vérification du Processus de
            Production, pour effectuer indépendamment une inspection d'usine sur
            site afin de s'assurer des normes de qualité et de sécurité.
          </li>
          <li>
            Offre la licence d'utiliser la Marque Standard BIS lorsqu'elle est
            délivrée
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour les Générateurs Diesel (GD)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Ministère des Industries Lourdes a émis une notification pour l'OTR
          pour les Générateurs Diesel en 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date d'Application : Tous les producteurs et importateurs doivent
          obtenir la certification avant le 1er septembre 2026. À partir de
          cette date, la production, la vente ou l'importation de groupes
          générateurs diesel non certifiés sera interdite en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Générateurs Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Assurance de Sécurité : Minimise les défaillances mécaniques, basé
            sur la technologie de prévention d'incendie pour prévenir
            l'incendie, les courts-circuits et les accidents.
          </li>
          <li>
            Conformité Environnementale : S'assure que les normes d'économie
            d'énergie et de réduction des émissions sont suivies.
          </li>
          <li>
            Accès au Marché : OTR pour les Générateurs Diesel - La certification
            est obligatoire pour la vente en Inde
          </li>
          <li>
            Confiance du Client : La Marque Standard BIS assure une haute
            fiabilité et sécurité.
          </li>
          <li>
            Éligibilité aux Appels d'Offres : Pour les contrats
            Gouvernementaux/PSU, les produits doivent être certifiés.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Générateurs Diesel Couverts sous le Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le schéma de certification des Générateurs Diesel X comprend les
          groupes suivants :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Générateurs domestiques mobiles utilisant du diesel</li>
          <li>Groupes générateurs diesel commerciaux (haute capacité)</li>
          <li>Générateurs d'alimentation de secours et d'urgence</li>
          <li>
            Groupes Générateurs Diesel Silencieux pour Usage Commercial
            (Application et Usage Urbain)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque sous-type doit être conforme aux normes indiennes applicables
          (codes IS) comme IS 16819:2018 / ISO 12100:2010 (Sécurité des Machines
          Principes Généraux de Conception - Évaluation des Risques et Réduction
          des Risques). Chaque type doit respecter ses propres normes indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour la Certification BIS des Générateurs Diesel
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier les Normes Applicables : Trouvez les codes IS pour le
            type de générateur.
          </li>
          <li>
            Tests de Produits : Effectuez des tests de sécurité, performance et
            émissions dans les laboratoires reconnus par BIS.
          </li>
          <li>
            Audit d'Usine : Les officiers BIS examinent le processus de contrôle
            qualité de la fabrication.
          </li>
          <li>
            Soumission de Documentation : Rendez disponibles les spécifications,
            résultats de tests et documentation de conformité.
          </li>
          <li>
            Octroi de Licence : Lorsqu'approuvée, BIS délivre une licence et
            permet l'utilisation de la Marque Standard.
          </li>
          <li>
            Conformité Continue : Des audits et inspections de produits sont
            menés pour la certification reste valide.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le non-respect de la Certification BIS pour les Générateurs Diesel de
          l'OTR pour les Générateurs Diesel peut entraîner :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdire la vente, l'importation et la fabrication d'équipements
            non certifiés.
          </li>
          <li>Confiscation des biens et pénalités financières</li>
          <li>Inéligibilité aux contrats gouvernementaux</li>
          <li>Dommages de réputation et financiers permanents</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS Schéma X pour les Générateurs Diesel selon l'OTR
          pour les Générateurs Diesel (2024) est une étape importante dans le
          parcours d'amélioration de la sécurité des produits, de la fiabilité
          et de l'efficacité dans l'industrie indienne de secours électrique.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour les fabricants/importateurs, la certification Schéma X pour les
          Générateurs Diesel n'est pas seulement une nécessité légale, c'est un
          avantage concurrentiel qui reflète la crédibilité, l'adhésion et la
          confiance du marché.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const DieselGeneratorFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour les Générateurs Diesel";

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
