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

const CentrifugesFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour les Centrifugeuses et les Machines de
          Filtration ou de Purification
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Certification BIS Schéma X pour les centrifugeuses, machines de filtration ou de purification pour liquides et gaz, et/ou leurs ensembles, sous-ensembles et composants, est une étape réglementaire cruciale pour le secteur des machines industrielles"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Centrifugeuses, Certification BIS Schéma X pour Centrifugeuses, Certification Schéma X pour Centrifugeuses, BIS pour Centrifugeuses, OTR pour Centrifugeuses"
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
          content="Certification BIS Schéma X pour les Centrifugeuses en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les centrifugeuses en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour les Centrifugeuses en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les centrifugeuses en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery-french"
        />
      </Helmet>

      <CentrifugesFrenchBreadcrumb />
      <CentrifugesFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default CentrifugesFrench;

const CentrifugesFrenchBreadcrumb = () => {
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
                  Certification BIS pour les Centrifugeuses
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CentrifugesFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const CentrifugesFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les Centrifugeuses
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="Licence BIS Schéma X pour les Centrifugeuses"
            alt="Certification BIS Schéma X pour les Centrifugeuses et les Machines de Filtration ou de Purification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          La centrifugeuse est une machine vitale largement applicable dans les
          laboratoires, les industries pharmaceutiques, de transformation
          alimentaire, de biotechnologie, pétrochimiques et minières. Ces
          machines fonctionnent par rotation, et la rotation rapide sépare les
          mélanges, cette séparation est essentielle pour un traitement précis,
          sûr et rapide.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Avec des applications plus larges dans diverses industries, il est
          essentiel d'augmenter la fiabilité et la sécurité des centrifugeuses.
          Pour maintenir le paramètre de contrôle de qualité des centrifugeuses,
          le BIS a introduit un schéma de certification BIS connu sous le nom de
          Certification Schéma-X pour les Centrifugeuses.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans cet article, nous aborderons Qu'est-ce que la Certification BIS
          Schéma X pour les Centrifugeuses, Qu'est-ce que l'OTR pour les
          Centrifugeuses, et Comment obtenir une Licence BIS pour les
          Centrifugeuses avec la marque officielle BIS pour les Centrifugeuses.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance du BIS pour les Centrifugeuses
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les centrifugeuses sont utilisées dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Secteur pharmaceutique et biotechnologique</li>
          <li>Transformation alimentaire et fabrication de boissons</li>
          <li>Raffineries de pétrole et industries pétrochimiques</li>
          <li>Laboratoires médicaux</li>
          <li>Traitement de l'environnement et de l'eau</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'absence de BIS pour les Centrifugeuses pourrait conduire à
          l'utilisation de centrifugeuses de qualité inférieure ou non
          certifiées, ce qui peut entraîner :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Risques de panne mécanique</li>
          <li>Possibilité de contamination dans les secteurs fragiles</li>
          <li>Perte de temps et perte de revenus</li>
          <li>Faible efficacité et consommation d'énergie accrue</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Une centrifugeuse certifiée BIS avec la marque BIS pour les
          Centrifugeuses implique sécurité, qualité et confiance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que le Certificat BIS Schéma X pour les Centrifugeuses ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certification BIS Schéma X pour les Centrifugeuses est le schéma de
          certification obligatoire en vertu du Règlement d'Évaluation de la
          Conformité BIS, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Certification Schéma X pour les Centrifugeuses : Caractéristiques
          principales :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable aux fabricants indiens et étrangers</li>
          <li>
            S'applique à tous les types de centrifugeuses présentes dans les
            laboratoires industriels et de R&D
          </li>
          <li>
            Des tests de produits, des audits et une validation de conformité
            appropriés sont indispensables
          </li>
          <li>
            Permet aux fabricants de demander l'enregistrement BIS sur la base
            de la certification pour les Centrifugeuses mentionnée ci-dessus
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour les Centrifugeuses
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'OTR pour les Centrifugeuses a été publié au Journal Officiel par le
          Ministère des Industries Lourdes en 2024, qui exige la certification
          Schéma X.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date limite : Tous les fabricants et importateurs devront obtenir une
          Licence BIS valide pour les Centrifugeuses dans le cadre du Schéma X
          avant le 1er septembre 2026. "Cela empêchera les centrifugeuses non
          certifiées d'être vendues, importées ou de participer aux appels
          d'offres dans tout le pays", ont déclaré les responsables
          gouvernementaux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Centrifugeuses
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Conformité : Évite les accidents dus aux pannes
            mécaniques à haute vitesse.
          </li>
          <li>
            Qualité et Fiabilité : Les Centrifugeuses certifiées fonctionnent
            avec une précision et une exactitude excellentes.
          </li>
          <li>
            Accès au Marché : Une Licence BIS pour Centrifugeuses est
            généralement requise pour les achats par les organismes publics.
          </li>
          <li>
            Confiance du Consommateur : La marque BIS pour les Centrifugeuses
            rassure les clients sur la qualité et la durabilité du produit.
          </li>
          <li>
            Avantage Concurrentiel : Les marques/fabricants certifiés BIS sont
            préférés sur les marchés réglementés et pour les appels d'offres
            gouvernementaux.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types de Centrifugeuses Couvertes par le Schéma de Certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'accréditation Schéma X pour les Centrifugeuses couvre différents
          types tels que :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Centrifugeuses de Laboratoire</li>
          <li>Séparateurs Industriels</li>
          <li>Centrifugeuse Réfrigérée</li>
          <li>Ultracentrifugeuses</li>
          <li>Centrifugeuses à Gaz</li>
          <li>Centrifugeuses à Panier</li>
          <li>Centrifugeuses à Décanteur</li>
          <li>Centrifugeuses Continues et par Lots</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tous ces types doivent satisfaire aux normes indiennes applicables
          (codes IS) comme IS 16819:2018/ISO 12100:2010 (Sécurité des Machines -
          Principes Généraux de Conception - Évaluation et Réduction des
          Risques). Toutes les variétés doivent répondre aux normes indiennes
          appropriées (codes IS) en matière de qualité, de sécurité et
          d'efficacité énergétique.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour les Centrifugeuses
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifier les Normes Pertinentes : Référez-vous aux codes IS
            pertinents pour votre type de Centrifugeuse.
          </li>
          <li>
            Tests de Produits : Effectuez les tests de performance et de
            sécurité requis par les normes de l'industrie, dans des laboratoires
            accrédités par le BIS.
          </li>
          <li>
            Inspection d'Usine : Vérification des systèmes d'assurance qualité
            dans les sites de production par les responsables du BIS.
          </li>
          <li>
            Demande et Documentation : Fournissez les exigences techniques, le
            manuel qualité et les rapports de test.
          </li>
          <li>
            Délivrance de la Licence BIS pour les Centrifugeuses : Vous pouvez
            apposer la marque BIS après son approbation.
          </li>
          <li>
            Conformité Continue : Le BIS effectue des contrôles et des audits
            imprévus pour vérifier la conformité aux normes.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanctions en Cas de Non-Conformité
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants qui n'ont pas fait certifier tous les modèles de
          centrifugeuses avec la Certification BIS pour les Centrifugeuses avant
          le 1er septembre 2026 courent le risque de :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction des ventes/importations de centrifugeuses non
            certifiées
          </li>
          <li>
            Confiscation des équipements non conformes et pénalités monétaires
          </li>
          <li>
            Cela vous rendra inadmissible à tout appel d'offres gouvernemental
            ou PSU
          </li>
          <li>Image de marque durablement affectée en Inde</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La mise en œuvre de la Certification BIS Schéma X pour les
          Centrifugeuses dans l'OTR 2024 est une étape pour apporter sécurité,
          efficacité et qualité dans le secteur industriel et de laboratoire en
          Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Les fabricants, importateurs et exportateurs profitent de ce processus
          en obtenant la Certification BIS pour les Centrifugeuses, en obtenant
          la Licence BIS pour les Centrifugeuses et en apposant la marque BIS
          pour les Centrifugeuses sur leur produit, démontrant que leur produit
          répond aux systèmes réglementaires du marché local et aux exigences
          des clients.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const CentrifugesFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS pour les Centrifugeuses";

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
