import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import { ServicesFrench } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const ConstructionMachineryFrench = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          Certification BIS Schéma X pour les Machines de Construction
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="La Certification BIS Schéma X est obligatoire pour les machines de construction, de terrassement et d'exploitation minière afin d'assurer la sécurité, la qualité et la normalisation dans les secteurs industriels critiques"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Certification BIS pour Machines de Construction, Certification BIS Schéma X pour Machines de Construction, Certification Schéma X pour Machines de Construction, BIS pour Machines de Construction, OTR pour Machines de Construction"
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
          content="Certification BIS Schéma X pour les Machines de Construction en Inde | Guide Complet"
        />
        <meta
          property="og:description"
          content="Apprenez tout sur la Certification BIS Schéma X pour les Machines de Construction en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-construction"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="Certification BIS Schéma X pour les Machines de Construction en Inde | Guide Complet"
        />
        <meta
          name="twitter:description"
          content="Apprenez tout sur la Certification BIS Schéma X pour les Machines de Construction en Inde. Comprenez la conformité OTR 2024, le processus de licence BIS, les exigences de la marque ISI et comment obtenir la certification avant la date limite de septembre 2026"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-construction"
        />
      </Helmet>

      <ConstructionMachineryFrenchBreadcrumb />
      <ConstructionMachineryFrenchMainContent />
      <ServicesFrench />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default ConstructionMachineryFrench;

const ConstructionMachineryFrenchBreadcrumb = () => {
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
                  BIS Schéma X pour Machines de Construction
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachineryFrenchMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryFrenchMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const ConstructionMachineryFrenchMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les Machines de Construction
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="Certification BIS Schéma X pour les Machines de Construction"
            title="Licence BIS Schéma X pour les Machines de Construction"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Les excavatrices, chargeuses, bulldozers, malaxeurs à béton et
          rouleaux compresseurs sont les principales machines de construction
          utilisées dans la construction d'infrastructures en Inde. La demande
          accrue de machines sûres et fiables découle d'investissements massifs
          dans les autoroutes, les villes intelligentes, les usines et le
          logement.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Le Bureau des Normes Indiennes (BIS) a rendu la Certification BIS
          obligatoire dans le cadre du Schéma-X pour les Machines de
          Construction afin de fournir des garanties de qualité, de service et
          de sécurité. Cela garantit qu'un appareil est conforme aux normes
          indiennes avant d'être mis en vente ou importé en Inde.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dans cet article, vous allez découvrir la Certification BIS Schéma X
          pour les Machines de Construction, l'exigence de l'OTR pour les
          Machines de Construction, et le processus d'obtention d'une Licence
          BIS pour les Machines de Construction et de la marque BIS pour les
          Machines de Construction.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Pourquoi le BIS pour les Machines de Construction est Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les machines de construction sont appliquées dans le développement des
          infrastructures et les grands sites de développement de la
          construction.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Développement des routes et autoroutes</li>
          <li>Projets immobiliers et de logement</li>
          <li>Exploitation minière et extraction en carrière</li>
          <li>Construction industrielle et ingénierie lourde</li>
          <li>Ports, aéroports et projets de métro</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les conséquences de l'absence de BIS pour les Équipements de
          Construction sont les suivantes :
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Panne d'équipement et temps d'arrêt coûteux</li>
          <li>
            Probabilités plus élevées d'accidents et de risques de dangers
          </li>
          <li>Non-conformité aux appels d'offres gouvernementaux</li>
          <li>Augmentation des coûts de maintenance et d'exploitation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          La marque BIS pour les Machines de Construction indique que le produit
          est sûr, fiable et conforme aux normes indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Qu'est-ce que la Certification BIS Schéma X pour les Machines de
          Construction ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS Schéma X est couverte par les Exigences
          d'Évaluation de la Conformité du Bureau des Normes Indiennes (BIS)
          (2018) qui fournissent des directives pour les produits. Dans ce
          schéma, le BIS décide de la qualité du produit et s'assure qu'il
          atténue les risques pour la santé humaine.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Caractéristiques Principales - Certification Schéma X pour les
          Équipements de Construction :
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatoire pour les fabricants nationaux et étrangers</li>
          <li>
            Comprend tous les types de machines lourdes et d'équipements de
            construction
          </li>
          <li>
            Les tests de produits sont obligatoires, les visites d'usine sont
            obligatoires et les audits de conformité doivent être effectués
            régulièrement
          </li>
          <li>
            Autorise l'utilisation de la marque BIS pour les Machines de
            Construction
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR pour les Équipements de Construction
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification Schéma X deviendra obligatoire dans le cadre du
          Règlement Technique Omnibus (OTR) de 2024 pour les Machines de
          Construction annoncé par le Ministère des Industries Lourdes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date limite : Tous les fabricants et importateurs doivent obtenir une
          Licence BIS pour les Machines de Construction dans le cadre du Schéma
          X avant le 1er septembre 2026. À partir de cette date, les équipements
          non certifiés ne pourront être produits, transportés ni vendus pour
          les programmes d'infrastructure publique.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Équipements ou Machines de
          Construction
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sécurité et Fiabilité : Réduit le risque de panne mécanique ou
            d'accidents sur les chantiers de construction.
          </li>
          <li>
            Accès au Marché et Éligibilité aux Appels d'Offres : Les produits
            certifiés BIS sont éligibles aux appels d'offres gouvernementaux et
            PSU.
          </li>
          <li>
            Confiance des Consommateurs et des Entrepreneurs : La marque BIS des
            Machines de Construction garantit des produits sûrs et de qualité
            pour tous ses acheteurs.
          </li>
          <li>
            Entrée sur le Marché Mondial : Une Licence BIS pour les Machines de
            Construction peut être bénéfique pour les entreprises étrangères
            pour un accès facile aux marchés indiens.
          </li>
          <li>
            Conformité Légale : Impunité contre les amendes, interdictions et
            sanctions dans le cadre de l'OTR des Machines de Construction.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types d'Équipements de Construction couverts par le Schéma X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS Schéma X pour les Machines de Construction
          s'applique à différentes catégories d'équipements tels que :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Excavatrices et Chargeuses-pelleteuses</li>
          <li>Bulldozers et Rouleaux Compresseurs</li>
          <li>Grues utilisées sur les chantiers de construction</li>
          <li>Malaxeurs à Béton et Centrales de Dosage</li>
          <li>Usines d'Asphalte et Finisseurs</li>
          <li>Machines de Battage de Pieux et de Forage</li>
          <li>Manutention de Matériaux et Équipement de Terrassement</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Chaque catégorie doit répondre aux normes indiennes pertinentes (codes
          IS) conformément à IS 17055 (Partie 7):2020, IS 17055 (Partie 8):2020
          et IS 17055 (Partie 12):2020 en termes de conception, sécurité,
          performance, etc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procédure pour Obtenir une Licence BIS pour les Équipements de
          Construction
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identifier les Normes Applicables : Trouvez quel code IS correspond
            à votre type de Machine de Construction.
          </li>
          <li>
            Tests de Produits : Effectuez des tests de sécurité et de
            performance dans des laboratoires reconnus par le BIS.
          </li>
          <li>
            Inspection d'Usine : Les auditeurs du BIS examinent les processus de
            contrôle qualité et de production littéraux.
          </li>
          <li>
            Demande et Documentation : Fournissez des rapports, des
            spécifications et des manuels pour examen.
          </li>
          <li>
            Licence BIS pour les Machines de Construction : Lors de l'inclusion,
            les fabricants sont autorisés à apposer la marque BIS pour les
            Machines de Construction.
          </li>
          <li>
            Conformité Continue : Des inspections et une surveillance fréquentes
            maintiennent la conformité continue.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Pénalités pour Non-Conformité
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'échec massif ou la non-délivrance du Certificat BIS de Machines de
          Construction jusqu'au 1er septembre 2026 en termes de l'OTR pour les
          Machines de Construction aura les implications suivantes :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Interdiction de vente et d'importation d'équipements non certifiés
          </li>
          <li>Amendes importantes et détentions de produits</li>
          <li>Disqualification des projets et récompenses gouvernementaux</li>
          <li>
            Dommages potentiels illimités à la réputation pendant de nombreuses
            années à venir
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La mise en œuvre obligatoire de la Certification BIS Schéma X pour les
          Machines de Construction dans le cadre de l'OTR pour les Machines de
          Construction (2024) est une étape importante vers la sécurité,
          l'efficacité ainsi que la normalisation dans l'industrie indigène de
          l'Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Pour les fabricants, importateurs et exportateurs de machines de
          construction, l'obtention d'une Licence BIS pour les Machines de
          Construction et l'apposition de la marque BIS pour les Machines de
          Construction n'est pas seulement une exigence de conformité, c'est un
          mouvement stratégique pour se développer sur de nouveaux marchés,
          pénétrer le marché de la construction indien en plein essor et
          construire votre réputation à long terme.
        </p>

        <ServiceAuthorFrench />
      </div>
    </div>
  );
};
