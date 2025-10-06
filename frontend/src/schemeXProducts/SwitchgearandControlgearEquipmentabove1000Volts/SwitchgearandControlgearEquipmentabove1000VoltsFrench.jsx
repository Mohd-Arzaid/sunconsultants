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

const SwitchgearandControlgearEquipmentabove1000VoltsFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Équipements Appareillage et Commande
          au-dessus 1000 Volts
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X pour équipements appareillage et commande au-dessus 1000V. Explorer conformité obligatoire, testing, étapes processus, avantages et plus."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Équipements Appareillage et Commande, Certification BIS Schéma X pour Équipements Appareillage et Commande, Certification Schéma X pour Équipements Appareillage et Commande, BIS pour Équipements Appareillage et Commande, OTR pour Équipements Appareillage et Commande"
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
          content="Certification BIS Schéma X pour Équipements Appareillage et Commande au-dessus 1000 Volts en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Équipements Appareillage et Commande en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Équipements Appareillage et Commande au-dessus 1000 Volts en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur Certification BIS Schéma X pour Équipements Appareillage et Commande en Inde. Comprendre conformité OTR 2024, processus Licence BIS, exigences marque ISI et comment obtenir certification avant date limite septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts-french"
        />
      </Helmet>

      <SwitchgearandControlgearEquipmentabove1000VoltsFrenchBreadcrumb />
      <SwitchgearandControlgearEquipmentabove1000VoltsFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentabove1000VoltsFrench;

const SwitchgearandControlgearEquipmentabove1000VoltsFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X Appareillage et Commande au-dessus
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

const SwitchgearandControlgearEquipmentabove1000VoltsFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentabove1000VoltsFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsFrenchMainContentLeft =
  () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            Certification BIS Schéma X pour Équipements Appareillage et Commande
            au-dessus 1000 Volts
          </h1>

          {/* Main Image */}
          <div className="mb-6">
            <img
              src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
              alt="Certification BIS Schéma X pour Équipements Appareillage et Commande au-dessus 1000 Volts"
              title="Licence BIS appareillage excédant 1000 volts"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Appareillage et commande haute tension s'intègrent parfaitement
            distributions énergie et processus opérationnels efforts
            électrification toujours croissants civilisation contemporaine. Ces
            systèmes conçus assurer contrôle sécurisé et distribution
            électricité plus 1000 volts inestimables domaines critiques demande
            puissance gestion risque et systèmes continuité puissance. Avec
            augmentation préoccupations sécurité et standardisation équipement,
            Bureau Standards Indiens (BIS) pris mesures concrètes contrôler
            industrie Certification Schéma X.
          </p>

          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            Ordre Règlementation Technique Omnibus partie cette loi, rendu
            Certification Schéma X obligatoire tous fabricants équipement haute
            tension schématique utilisation secteur énergie et industries. Ces
            fabricants, domestiques et internationaux, seront soumis cette
            règlementation partir 1er septembre 2026.
          </p>

          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            Ce blog couvre toutes informations nécessaires liées Certification
            Schéma X tous types équipements appareillage et commande opérant
            tensions excédant 1000 volts et (ou) leurs
            assemblages/sous-ensembles/composants, son importance, portée,
            processus certification, avantages et documentation nécessaire.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Pourquoi Certification BIS Appareillage et Commande Importante ?
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Appareillage et commande haute tension largement utilisés dans :
          </p>

          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Installations génération puissance</li>
            <li>Postes transformation transmission et distribution</li>
            <li>Systèmes électrification métro et ferroviaire</li>
            <li>Pétrole et gaz et industries lourdes</li>
            <li>Parcs énergie renouvelable (solaire, éolien, hydro)</li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-4">
            Sans certification appropriée, risques incluent :
          </p>

          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Risques incendie et accidents arc électrique</li>
            <li>Pannes équipement conduisant pannes généralisées</li>
            <li>Violations standards sécurité indiens</li>
            <li>
              Disqualification contrats gouvernementaux et privés grande échelle
            </li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-6">
            Certification Schéma X garantie systèmes cruciaux isolés
            conformément normes sécurité et qualité plus rigoureuses. Elle
            applicable assemblages (BS8867) associés ces types équipement
            opérant tensions au-dessus 1000V approprié.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* What is BIS Scheme X Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Qu'est-ce que Certification BIS Schéma X appareillage et commande ?
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Certificat BIS Schéma X établi sous Règlements Évaluation Conformité
            BIS, 2018, assurer testing, inspection et licence appareillage et
            commande requis avant produit puisse entrer marché indien.
          </p>

          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Caractéristiques Clés :
          </h3>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Obligatoire entreprises indiennes et étrangères</li>
            <li>
              Inclut tout appareillage et commande haute tension égal ou
              au-dessus 1000 volts
            </li>
            <li>Requiert testing laboratoires accrédités BIS</li>
            <li>Audits usine et système qualité inclus</li>
            <li>
              Fournit Licence BIS utiliser Marque Standard équipement spécifié
            </li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            OTR Équipements Appareillage et Commande
          </h2>

          <p className="text-gray-600 text-base font-geist mb-4">
            Ministère Industries Lourdes introduit Règlementation Technique
            Omnibus (OTR) Équipements Appareillage et Commande 2024.
          </p>

          <p className="text-gray-600 text-base font-geist mb-6">
            Date Limite : Tous fabricants et importeurs doivent certifiés BIS
            1er septembre 2026. Après cette date, équipement non type approuvé
            ne peut fabriqué, vendu ou importé Inde.
          </p>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Benefits Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Avantages Certification BIS Appareillage et Commande
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>
              Sécurité Électrique – Protège contre défauts, arcs électriques et
              pannes système.
            </li>
            <li>
              Conformité Réglementaire – Exigence obligatoire entrée marché sous
              OTR.
            </li>
            <li>
              Accès Marché – Produits certifiés qualifient projets
              infrastructure publics et privés.
            </li>
            <li>
              Crédibilité et Confiance – Marque Standard BIS reflète adhésion
              qualité et fiabilité.
            </li>
            <li>
              Efficacité Opérationnelle – Assure performance robuste,
              ininterrompue réseaux haute tension
            </li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Procédure Certification BIS Appareillage et Commande
          </h2>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>
              Identifier Standards – Découvrir standard indien pertinent votre
              produit.
            </li>
            <li>
              Testing Produit – Effectuer tous tests performance et sécurité
              requis laboratoires approuvés BIS.
            </li>
            <li>
              Contrôle Usine – Auditeurs BIS assurent processus et contrôle
              qualité usine.
            </li>
            <li>
              Soumission Documentation – Soumettre rapports tests; standards
              spécifications; dossiers conformité.
            </li>
            <li>
              Octroi Licence : BIS accordera Licence utiliser Marque Standard.
            </li>
            <li>
              Surveillance Post-certification : Inspection continue et contrôles
              ponctuels garantir conformité.
            </li>
          </ul>

          <p className="text-gray-600 text-base font-geist mb-4">
            Ce processus s'applique également tous types équipements
            appareillage et commande opérant tensions excédant 1000 volts et
            (ou) leurs assemblages/sous-ensembles/composants.
          </p>

          <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Pénalités Non-Conformité
          </div>

          <p className="text-gray-600 text-base font-geist mb-4">
            Échec être certifié sous modèle OTR peut résulter :
          </p>

          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>
              Interdiction vente, import ou fabrication équipement non certifié
            </li>
            <li>Confiscation marchandises et amendes lourdes</li>
            <li>Interdiction enchères et contrats gouvernementaux</li>
            <li>
              Dommage Réputation et Financier : Dommage réputationnel et
              financier significatif
            </li>
          </ul>

          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>

          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusion
          </div>

          <p className="text-gray-600 text-base font-geist mb-6">
            Certification BIS Schéma X, mandatée sous OTR 2024, assure
            infrastructure puissance haute tension Inde construite équipement
            sécurisé, fiable et conforme. Pour fabricants et importeurs, obtenir
            certification pas seulement rencontrer règlements—gagner confiance
            client, débloquer opportunités marché et soutenir croissance énergie
            et infrastructure Inde.
          </p>

          <ServiceAuthorFrench />
        </div>
      </div>
    );
  };

const SwitchgearandControlgearEquipmentabove1000VoltsFrenchMainContentRight =
  () => {
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
      "Produit SchémaX - Certification BIS Équipements Appareillage et Commande au-dessus 1000 Volts";

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
