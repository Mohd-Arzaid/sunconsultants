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

const HeatTreatmentEquipmentFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour Équipements de Traitement Thermique
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La certifications BIS scheme X mandyte que tous types de machines pour le traitement des matériaux par processus impliquant un changement de température et/ou leurs assemblages/composants doivent être certifiées BIS"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour équipements de traitement thermique, Certification BIS Schéma X pour équipements de traitement thermique, Certification Schéma X pour équipements de traitement thermique, BIS pour équipements de traitement thermique, OTR pour Équipements de Traitement Thermique"
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
          content="Certification BIS Schéma X pour Équipements de Traitement Thermique en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la certification BIS Schéma X pour les équipements de traitement thermique en Inde. Comprendre la conformité OTR 2024, processus licence BIS, exigences marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment-french"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour Équipements de Traitement Thermique en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="La certifications BIS scheme X mandyte que tous types de machines pour le traitement des matériaux par processus impliquant un changement de température et/ou leurs assemblages/composants doivent être certifiées BIS"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment-french"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-yeolcheori-jangbi"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-netsu-shori-souchi"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-re-chu-li-she-bei-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-warmtebehandelingsapparatuur"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
        />
      </Helmet>

      <HeatTreatmentEquipmentFrenchBreadcrumb />
      <HeatTreatmentEquipmentFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default HeatTreatmentEquipmentFrench;

const HeatTreatmentEquipmentFrenchBreadcrumb = () => {
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
                  Certification BIS pour Équipements de Traitement Thermique
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          CERTIFICATION BIS SCHÉMA X POUR ÉQUIPEMENTS DE TRAITEMENT THERMIQUE
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="Licence BIS Schéma X pour traitement de matériau"
            alt="Certification BIS Schéma X pour Équipements de Traitement Thermique"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les équipements de traitement thermique sont l'une des applications
          les plus critiques dans les industries comme l'automobile,
          l'aérospatial, la fonderie, la forge et l'ingénierie lourde. Ce sont
          des dispositifs qui changent les attributs physiques et mécaniques des
          métaux à travers des opérations comme le recuit, la trempe, la
          durcissement, le revenu etc.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Voyant leur importance, le Bureau des Normes Indiennes (BIS) a déclaré
          la Certification BIS pour Équipements de Traitement Thermique
          obligatoire sous Certification Schéma X. Cela garantit que les
          fabricants indiens et mondiaux adhèrent aux normes indiennes
          rigoureuses avant de commercialiser l'équipement dans le pays.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans ce post, nous expliquerons l'importance de la Certification BIS
          Schéma X pour Équipements de Traitement Thermique, l'OTR pour
          Équipements de Traitement Thermique, et le processus pour obtenir une
          Licence BIS pour Équipements de Traitement Thermique avec la Marque
          BIS pour Équipements de Traitement Thermique.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS pour Équipements de Traitement Thermique est
          Obligatoire
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le four de traitement thermique est couramment utilisé dans :
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Industries métalliques et métallurgiques</li>
          <li>Production automobile et aérospatiale</li>
          <li>Fabrication d'outils et matrices</li>
          <li>Industries énergétiques et autres machines lourdes</li>
          <li>Défense et ingénierie de précision</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          En l'absence de BIS pour Équipements de Traitement Thermique, les
          machines de mauvaise qualité peuvent causer :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Surchauffe ou traitement inadéquat</li>
          <li>Défaillances de mécanisme et structure du produit fini</li>
          <li>Usage énergétique augmenté et manque d'efficacité</li>
          <li>Dangers de sécurité pour les opérateurs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La Certification BIS garantit non seulement que l'équipement
          fonctionne correctement et sûrement selon les exigences de performance
          industrielle mais rencontre aussi les critères environnementaux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification Schéma X des Équipements de Traitement
          Thermique ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Schéma X - Équipements de Traitement Thermique, s'aligne avec le
          Ministère de l'Acier, Gouvernement de l'Inde, qui est un schéma de
          certification obligatoire sous les Règlements d'Évaluation de la
          Conformité BIS de l'Inde, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Points Forts Importants de la Certification BIS Schéma X pour
          Équipements de Traitement Thermique :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Requis des fabricants USA et étrangers</li>
          <li>
            Peut être utilisé sur la plupart de types d'équipements de
            traitement thermique et de cuisson
          </li>
          <li>
            Inclut testing de produits, vérifications du plancher d'usine et
            audits de conformité continue.
          </li>
          <li>Fabricants autorisés à utiliser la Marque Standard BIS.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour Équipements de Traitement Thermique
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Ministère des Industries Lourdes en 2024 a introduit la
          Règlementation Technique Omnibus (OTR) pour Équipements de Traitement
          Thermique, où la conformité avec Schéma X a été rendue obligatoire.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Délai : Tous producteurs et importateurs doivent obtenir une Licence
          BIS valide pour Équipements de Traitement Thermique avant le 1er
          septembre 2026. Après cette date, les Équipements de Traitement
          Thermique Non-Certifiés ne seront pas éligibles pour vente,
          importation ou enchères dans les appels d'offres publics.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Équipements de Traitement
          Thermique
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité Opérationnelle : Protection contre surchauffe, traitement
            inégal et panne d'équipement.
          </li>
          <li>
            Fiabilité du Produit : Garantit que les articles traités rencontrent
            spécifications de dureté, durabilité et robustesse
          </li>
          <li>
            Efficacité Énergétique : L'équipement certifié est testé pour usage
            énergétique optimal, réduisant les coûts opérationnels.
          </li>
          <li>
            Accès au Marché : La Marque BIS pour Équipements de Traitement
            Thermique est fréquemment obligatoire pour achat public et appels
            d'offres gouvernementaux.
          </li>
          <li>
            Avantage Global : Les marques mondiales peuvent gagner accès facile
            au marché indien en obtenant Licence BIS pour Équipements de
            Traitement Thermique.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types d'Équipements de Traitement Thermique sous Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS Schéma X sur Équipements de Traitement Thermique
          inclut un grand nombre de machines comme :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fours de Recuit</li>
          <li>Fours de Trempe</li>
          <li>Fours de Durcissement et Revenu</li>
          <li>Fours Rotatifs pour Traitement Thermique Continu</li>
          <li>Fours de Cémentation et Nitruration.</li>
          <li>
            Équipements de Traitement Thermique par Induction et Électrique
          </li>
          <li>Appareils de Traitement Thermique à Gaz et Pétrole</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque type doit adhérer aux Normes Indiennes pertinentes (codes IS)
          comme IS 16819:2018/ISO 12100:2010. Les caractéristiques de
          performance, grades de matériaux et fonctionnalités de conservation
          d'énergie doivent être conformes aux Normes Indiennes pertinentes
          (codes IS) pour chaque type d'équipement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour Licence BIS pour Équipements de Traitement Thermique
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identifier les Normes IS Pertinentes : Si le projet concerne une
            catégorie particulière, vous vérifiez si la norme proposée
            correspond à votre catégorie d'équipement, et quel numéro IS.
          </li>
          <li>
            Testing dans Laboratoires Reconnus BIS : Effectuer tests de
            performance, sécurité et efficacité.
          </li>
          <li>
            Inspection d'Usine : BIS examine systèmes de contrôle qualité et
            installations de production.
          </li>
          <li>
            Demande et Documentation : Fournir résultats, les tests effectués,
            et spécifications techniques et manuels qualité.
          </li>
          <li>
            Émission Licence BIS : L'approbation permet utilisation de la Marque
            BIS pour Équipements de Traitement Thermique.
          </li>
          <li>
            Conformité Continue : Audits et inspections sont régulièrement
            conduits pour maintenir standards qualité.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si l'OTR des Équipements de Traitement Thermique n'est pas respecté
          avant le 01 Sep 2026 :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Interdiction ventes/import d'équipements non certifiés</li>
          <li>amendes et confiscation de produits</li>
          <li>Non éligible pour tenders gouvernementaux et PSU</li>
          <li>
            Perte d'équité de marque sur le long terme dans le marché indien
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'application obligatoire de Certification Schéma X pour Équipements
          de Traitement Thermique sous l'OTR 2024 est un jalon significatif en
          améliorant les standards industriels de l'Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour fabricants, importateurs et exports des Équipements de Traitement
          Thermique le processus pour obtenir Certification BIS pour Équipements
          de Traitement Thermique, pour obtenir Licence BIS des Équipements de
          Traitement Thermique et utiliser Marque Standard BIS des Équipements
          de Traitement Thermique ne concerne pas seulement la conformité, c'est
          établir produits sûrs et produits fiables compréhensibles pensées sont
          compétitives sur le marché en obtenant un marché réglementé.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentFrenchMainContentRight = () => {
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
    "Produit SchémaX - Certification BIS schéma x pour équipements de traitement thermique";

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
