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
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import { ServicesFrench } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";
import { Helmet } from "react-helmet-async";

const EmbroideryMachinesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>Certification BIS Schéma X pour les Machines à Broderie</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Avec la certification BIS Schéma X pour les machines à broderie, les fabricants s'assurent que leurs produits sont conformes à la loi, techniquement supérieurs et dignes de confiance par les clients"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines à Broderie, Certification BIS Schéma X pour Machines à Broderie, Certification Schéma X pour Machines à Broderie, BIS pour Machines à Broderie, OTR pour Machines à Broderie"
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
          content="Certification BIS Schéma X pour les Machines à Broderie en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les machines à broderie en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour les Machines à Broderie en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les machines à broderie en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery-french"
        />
      </Helmet>

      <EmbroideryMachinesFrenchBreadcrumb />
      <EmbroideryMachinesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default EmbroideryMachinesFrench;

const EmbroideryMachinesFrenchBreadcrumb = () => {
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
                  Certification BIS Schéma X pour les Machines à Broderie
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const EmbroideryMachinesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const EmbroideryMachinesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR LES MACHINES À BRODERIE
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="Certification BIS Schéma X pour les Machines à Broderie"
            title="Licence BIS Schéma X pour Machines à Broderie"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le secteur de la broderie est une partie importante de l'industrie
          textile et vestimentaire de l'Inde, produisant des tissus à valeur
          ajoutée pour la mode, la maison et l'exportation. Les machines à
          broderie informatiques multi-têtes ou les machines industrielles sont
          indispensables pour obtenir une qualité élevée dans les produits
          brodés car elles offrent efficacité et précision dans la broderie.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Pour assurer sécurité, stabilité et performance, le BIS (Bureau des
          Normes Indiennes) a imposé une certification obligatoire pour les
          Machines à Broderie sous le schéma de certification X du BIS. Cela
          garantit que seules les machines conformes aux normes indiennes sont
          autorisées à entrer sur le marché indien.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans le présent article, nous discuterons de l'importance de
          l'Approbation BIS Schéma X pour les Machines à Broderie, des
          réglementations sous l'OTR (Ordre des Règles Textiles) pour les
          Machines à Broderie, et du processus d'obtention de la Licence BIS
          pour les Machines à Broderie.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS pour les Machines à Coudre et Broderie est Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines à broderie sont utilisées :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Usines de vêtements et confectures</li>
          <li>
            Production de textiles pour la maison (rideaux, literies, housses de
            coussins)
          </li>
          <li>Ateliers de broderie sur mesure et haute couture</li>
          <li>Filatures textiles orientées exportation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les risques sans BIS pour les Machines à Broderie sont :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Mauvaise qualité des points et fils cassés.</li>
          <li>Temps d'arrêt mécanique excessif de la machine</li>
          <li>Risques de sécurité dans les environnements industriels</li>
          <li>Exclusion des marchés domestiques et d'exportation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS pour les Machines à Broderie est une garantie aux
          Clients que votre produit est rigoureusement testé et certifié suivant
          toutes les directives nécessaires du BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que le BIS Schéma X pour les Machines à Broderie ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Cadre pour la Certification BIS Schéma X pour les Machines à
          Broderie est basé sur les paramètres mentionnés sous les Règlements
          d'Évaluation de la Conformité BIS, 2018 (qui sont développés pour la
          conformité dans la gestion de la qualité parmi les fournisseurs
          d'équipements industriels).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Importantes du schéma de certification X pour les
          Machines à Broderie :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatoire pour les fabricants indiens et étrangers</li>
          <li>
            Inclut tests, vérification de sécurité et validation d'efficacité
          </li>
          <li>Visites d'usine régulières et audits qualité nécessaires</li>
          <li>
            Permet l'apposition de la marque BIS sous licence pour les Machines
            à Broderie pour les produits certifiés
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour les Machines à Broderie
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Ministère des Industries Lourdes a introduit la Règlementation
          Technique Omnibus (OTR) 2024 pour les Machines à Broderie qui mandate
          la certification pour toutes les machines qui tombent sous la
          catégorie des machines à broderie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Délai : Tous les fabricants et importateurs sont tenus d'obtenir une
          Licence BIS pour les Machines à Broderie avant le 1er septembre 2026
          pour éviter toute pénalité ou poursuite. Après cela, les machines à
          broderie non certifiées ne peuvent pas être échangées ou utilisées à
          des fins commerciales en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Machines à Broderie
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Fiabilité du Produit : Les machines certifiables
            fonctionnent selon les normes attendues et de sécurité.
          </li>
          <li>
            Acceptation du Marché : La Licence BIS pour les Machines à Broderie
            est obligatoire pour les appels d'offres gouvernementaux et les
            accords de quantité.
          </li>
          <li>
            Confiance de l'Acheteur : Les Machines à Broderie sont Marquées BIS
            ce qui confirme sa qualité et son standard.
          </li>
          <li>
            Conformité Réglementaire : Respecte l'OTR pour les Machines à
            Broderie et n'encourt pas de pénalité.
          </li>
          <li>
            Avantage d'Exportation : Les acheteurs indiens ont la tranquillité
            d'esprit avec les machines certifiées et les entreprises
            internationales accèdent plus facilement à l'Inde.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Machines à Broderie Couverts sous le Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification Schéma X pour les Machines à Broderie est applicable
          pour :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Machines à broderie multi-têtes</li>
          <li>Broderie informatique pilotée par machine</li>
          <li>Machines à broderie à une tête</li>
          <li>Machines pour broderie au point de chaîne</li>
          <li>Machines à broderie Schiffli</li>
          <li>Équipements de broderie textile spécialisés</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque catégorie peut être conforme à la norme IS connexe (codes IS),
          telle que IS 17361 (Partie 1) : 2020 / ISO 11111 (Partie 1) : 2016
          (Exigences de Sécurité des Machines Textiles Partie 1 Exigences
          Communes). Toutes doivent nécessairement être conformes à leurs codes
          IS respectifs pour la conception, la durabilité, la sécurité et
          l'économie en exploitation.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour la Licence BIS pour les Machines à Broderie
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier les Normes Pertinentes : Cherchez les codes IS pertinents
            à votre modèle de machine à broderie.
          </li>
          <li>
            Tests de Produits : Les machines sont testées dans les laboratoires
            accrédités BIS pour la sécurité et la performance.
          </li>
          <li>
            Inspection d'Usine : Les auditeurs BIS viennent à l'usine pour
            évaluer le contrôle qualité.
          </li>
          <li>
            Documentation et Demande : Fournissez au BIS les rapports
            techniques, manuels et documents de qualité.
          </li>
          <li>
            Licence BIS pour les Machines à Broderie : Lors de l'acceptation,
            les fabricants auront la possibilité de marquer leurs produits avec
            la marque BIS.
          </li>
          <li>
            Conformité Continue : Les inspections de routine et nouveaux tests
            assurent une conformité continue.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les conséquences de ne pas avoir la Certification BIS pour les
          Machines à Broderie sous l'OTR pour les Machines à Broderie sont à
          partir du 1er septembre 2026 :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Restrictions sur la vente/importation de machines non certifiées
          </li>
          <li>Amendes, pénalités et saisies potentielles de produits</li>
          <li>
            Inéligibilité pour d'importants contrats gouvernementaux et
            d'exportation
          </li>
          <li>Dommage de réputation de marque à long terme</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'implication de la Certification BIS Schéma X pour les Machines à
          Broderie dans l'OTR pour les Machines à Broderie (2024) est une étape
          historique pour le secteur textile et brodé indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Du point de vue du Fabricant et de l'Import de Machines à Broderie
          pour obtenir l'Enregistrement BIS pour les Machines à Broderie et
          mettre une Marque BIS pour les Machines à Broderie n'est pas seulement
          une conformité aux exigences de la loi mais a aussi un énorme soutien
          pour la qualité du produit, la confiance du marché et l'avantage
          concurrentiel pour l'industrie textile en Inde qui ne cesse de
          croître.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const EmbroideryMachinesFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour les Machines à Broderie";

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
