import FaqAuthorFrench from "@/components/common/FaqAuthor/FaqAuthorFrench";
import ManyUsersAlsoReadFrench from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadFrench";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterFrench from "@/components/manual/Footer/FooterFrench";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForChairAndStoolsFrench = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default BISCertificateForChairAndStoolsFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour Chaises & Tabourets | Licence BIS IS 17632:2022";
  const ogTitle =
    "Certification BIS pour Chaises & Tabourets – Guide IS 17632:2022";
  const twitterTitle = "Licence BIS pour Chaises & Tabourets | IS 17632:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour chaises et tabourets selon IS 17632:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour chaises et tabourets selon IS 17632:2022. Connaître le processus, le coût, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour chaises et tabourets selon IS 17632:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour Chaises & Tabourets, Licence BIS pour Chaises & Tabourets, IS 17632:2022, Certification BIS pour Chaises & Tabourets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Chef des opérations chez Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Derniers blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificat BIS pour Chaises & Tabourets – IS 17632:2022
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentFrench />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificat BIS pour Chaises et Tabourets à Usage Général – Guide
          Complet IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licence BIS pour Chaises & Tabourets"
            alt="Certificat BIS pour Chaises & Tabourets - IS 17632:2022 Certification BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Chaises et Tabourets à Usage Général est une
          exigence obligatoire selon la Norme Indienne IS 17632:2022. Cette
          norme spécifie les exigences de sécurité, de durabilité et de
          performance pour les chaises et tabourets utilisés dans les foyers,
          bureaux, zones commerciales, établissements d&apos;enseignement,
          cafétérias, restaurants, hôtels et espaces publics.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises et tabourets font partie des meubles les plus utilisés et
          sont constamment soumis à des charges, mouvements et contraintes
          répétitives. Une chaise ou un tabouret structurellement faible peut
          s&apos;effondrer soudainement, entraînant des blessures. Pour prévenir
          de tels dangers et assurer la sécurité des consommateurs, le Bureau of
          Indian Standards (BIS) exige que chaque fabricant et importateur
          obtienne la Certification BIS pour Chaises et Tabourets avant de les
          vendre en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette page fournit un guide complet sur la Certification BIS pour
          chaises et tabourets selon IS 17632:2022, incluant le processus de
          certification, les documents requis, les exigences de test, les frais,
          les défis, les pénalités et les avantages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS est un système de conformité des produits régi
          par le Bureau of Indian Standards, l&apos;autorité nationale des
          normes de l&apos;Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du Certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificat BIS garantit qu&apos;un produit :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Répond aux normes de sécurité et de qualité indiennes</li>
          <li>A réussi les tests de laboratoire approuvés par BIS</li>
          <li>A subi une inspection d&apos;usine</li>
          <li>
            Protège les consommateurs contre les produits dangereux ou de
            qualité inférieure
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les produits certifiés affichent la Marque ISI, démontrant la
          conformité aux Normes Indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme Applicable – IS 17632:2022 pour Chaises & Tabourets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Norme BIS pour chaises et tabourets est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Chaises et Tabourets à Usage
          Général : Exigences de Sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme couvre toutes les chaises et tabourets non spécialisés
          utilisés à des fins d&apos;assise dans les foyers, bureaux,
          environnements commerciaux, lieux publics et établissements
          institutionnels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produits Couverts par IS 17632:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chaises à usage général</li>
          <li>Chaises de salle à manger</li>
          <li>Chaises de visiteurs de bureau</li>
          <li>Chaises d&apos;étude</li>
          <li>Chaises de cafétéria</li>
          <li>Chaises de restaurant</li>
          <li>Chaises de salle de réunion</li>
          <li>Chaises de salle d&apos;attente</li>
          <li>Chaises en bois</li>
          <li>Chaises métalliques</li>
          <li>Chaises en plastique (non spécialisées)</li>
          <li>Tabourets à usage général</li>
          <li>Tabourets de bar</li>
          <li>Tabourets de salle à manger</li>
          <li>Tabourets à marches (dans les critères définis)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paramètres Clés de Sécurité & Performance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 évalue :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Résistance structurelle</li>
          <li>Stabilité</li>
          <li>Durabilité sous utilisation répétée</li>
          <li>Résistance du siège</li>
          <li>Performance du dossier</li>
          <li>Résistance aux chocs des pieds</li>
          <li>Résistance des joints</li>
          <li>Qualité de la finition de surface</li>
          <li>Sécurité des bords et coins</li>
          <li>Qualité des matériaux</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toutes les chaises et tabourets vendus en Inde doivent se conformer à
          ces paramètres et obtenir une Licence BIS pour Chaises et Tabourets.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS est Obligatoire pour Chaises & Tabourets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises et tabourets supportent le poids humain et sont utilisés
          fréquemment dans tous les environnements. Une défaillance structurelle
          peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Effondrement de chaises</li>
          <li>Rupture des pieds</li>
          <li>Fissuration du siège</li>
          <li>Défaillance du dossier</li>
          <li>Blessures dues aux bords tranchants</li>
          <li>Instabilité menant à des chutes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages de la Certification BIS
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Assure des produits d&apos;assise sûrs</li>
          <li>Prévient les accidents et blessures</li>
          <li>Améliore la durabilité des produits</li>
          <li>Prévient les importations de qualité inférieure</li>
          <li>Établit une qualité de marché uniforme</li>
          <li>Renforce la confiance des clients</li>
          <li>Obligatoire par la loi indienne (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans Certification BIS, les fabricants ne peuvent pas légalement
          vendre de chaises ou tabourets en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour Chaises et Tabourets (IS
          17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus BIS suit le Schéma de Certification de la Marque ISI,
          impliquant des tests, une inspection et une vérification de la
          demande.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identifier le Type de Produit & la Norme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmez que la chaise/tabouret relève de IS 17632:2022. Identifiez
          les variantes de conception et les matériaux utilisés.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Soumettre la Demande BIS en Ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La demande est déposée via le Portail en Ligne BIS Manak, nécessitant
          :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du fabricant</li>
          <li>Informations sur l&apos;usine</li>
          <li>Spécifications du produit</li>
          <li>Détails de la marque/marque de commerce</li>
          <li>Flux de travail du processus de fabrication</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Payer les Frais de Certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les frais incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test d&apos;échantillon</li>
          <li>Frais d&apos;inspection d&apos;usine</li>
          <li>Frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Tests de Produit selon IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les tests obligatoires sont effectués dans un laboratoire reconnu par
          BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Les Tests Incluent :
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test de Stabilité</li>
          <li>Test de Résistance pour le Siège</li>
          <li>Test de Durabilité du Dossier</li>
          <li>Test de Charge des Pieds Avant/Latéral/Arrière</li>
          <li>Test d&apos;Impact du Siège</li>
          <li>Test de Chute</li>
          <li>Test de Fatigue</li>
          <li>Test de Finition de Surface</li>
          <li>Test de Bord Tranchant</li>
          <li>Durabilité structurelle sous cycles répétés</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les résultats des tests doivent montrer une conformité complète avec
          IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Inspection d&apos;Usine par BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS visite l&apos;usine pour évaluer :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processus de fabrication</li>
          <li>Inspection des matières premières</li>
          <li>Procédures de contrôle qualité</li>
          <li>Capacité de test</li>
          <li>Étalonnage de l&apos;équipement</li>
          <li>Volume de production</li>
          <li>Conformité au Schéma BIS de Test & Inspection (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si les tests et l&apos;inspection sont réussis, BIS délivre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS (Licence Marque ISI)</li>
          <li>Numéro CML</li>
          <li>
            Approbation pour apposer la Marque ISI sur chaises et tabourets
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Obligations Post-Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utiliser la Marque ISI selon les exigences d&apos;étiquetage BIS
          </li>
          <li>Maintenir les registres de contrôle qualité</li>
          <li>Subir des inspections de surveillance BIS régulières</li>
          <li>Renouveler la licence tous les 1–2 ans</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la Licence BIS pour Chaises & Tabourets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette norme couvre les exigences pour chaises et tabourets à usage
          général. Cette norme s&apos;applique aux chaises et tabourets à usage
          général complètement fabriqués/manufacturés. Elle s&apos;applique
          également aux unités prêtes à assembler ; dans ce cas, les exigences
          de cette norme s&apos;appliquent aux unités assemblées.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS de Chaises & Tabourets
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents du Fabricant
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licence/registre d&apos;usine</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines</li>
          <li>Liste de l&apos;équipement de test interne</li>
          <li>Certificats d&apos;étalonnage</li>
          <li>Plan d&apos;usine & plan d&apos;étage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dessins de chaise/tabouret</li>
          <li>Dimensions & spécifications</li>
          <li>Nomenclature des matériaux</li>
          <li>Description des caractéristiques de sécurité</li>
          <li>Rapports de test de qualité interne</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;identité & d&apos;adresse</li>
          <li>Lettre d&apos;autorisation de marque</li>
          <li>Certificat de marque de commerce (optionnel)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de Demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande</li>
          <li>Formulaire de demande de test</li>
          <li>Formulaires de déclaration</li>
          <li>Lettre d&apos;autorisation</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test pour Chaises & Tabourets (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 inclut des tests mécaniques, structurels et de sécurité
          approfondis.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tests Obligatoires
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Exigence
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Conception et finition
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Déséquilibre Avant et Déséquilibre Latéral pour Chaises sans
                  Accoudoirs
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Déséquilibre Arrière
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Déséquilibre Latéral pour Chaises avec Accoudoirs
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tabourets/ Poufs (Toutes Directions)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Résistance
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Ces tests assurent une utilisation quotidienne sûre dans des
          conditions réelles.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Courants & Comment Les Éviter
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Échec de la chaise aux tests de stabilité</strong>
            <br />
            Se produit en raison d&apos;une mauvaise distribution du poids.
            <br />
            Solution : Améliorer la conception des pieds, élargir la zone de
            base.
          </li>
          <li>
            <strong>Joints faibles causant des échecs de test</strong>
            <br />
            Solution : Utiliser des matériaux renforcés & de meilleurs
            connecteurs.
          </li>
          <li>
            <strong>Équipement de test interne inadéquat</strong>
            <br />
            Solution : Installer les instruments conformes BIS requis.
          </li>
          <li>
            <strong>Incohérences dans la documentation</strong>
            <br />
            Solution : Préparer les documents systématiquement avant de
            postuler.
          </li>
          <li>
            <strong>Variantes de produits non correctement mappées</strong>
            <br />
            Solution : Grouper les produits basés sur la structure & les
            paramètres de test.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Chaises & Tabourets
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorisation légale de vendre en Inde</li>
          <li>Amélioration de la sécurité des produits</li>
          <li>Renforcement de la confiance des clients</li>
          <li>Réduction du risque de responsabilité produit</li>
          <li>Requis pour les listes e-commerce</li>
          <li>Essentiel pour les appels d&apos;offres gouvernementaux</li>
          <li>Crédibilité de marque accrue</li>
          <li>Avantage concurrentiel</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour Non-Conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendre des chaises ou tabourets sans certification BIS peut entraîner
          :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lourdes amendes monétaires</li>
          <li>Rappel/saisie de produits</li>
          <li>Annulation des licences d&apos;usine</li>
          <li>Poursuites pénales</li>
          <li>Restrictions d&apos;importation</li>
          <li>Liste noire du marché</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les pénalités sont appliquées sous la Loi BIS, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a Besoin de la Certification BIS pour Chaises & Tabourets ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatoire pour :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers exportant vers l&apos;Inde</li>
          <li>Importateurs</li>
          <li>Propriétaires de marque/commerçants</li>
          <li>Fournisseurs OEM/ODM</li>
          <li>Chaînes de vente au détail</li>
          <li>Vendeurs en ligne</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque usine nécessite une Licence BIS séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Chaises et Tabourets à Usage Général sous IS
          17632:2022 est obligatoire pour assurer la sécurité des produits, la
          stabilité structurelle et la durabilité. La certification BIS aide non
          seulement les fabricants à maintenir des normes de haute qualité mais
          permet également l&apos;accès légal au marché et augmente la confiance
          des consommateurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec une assistance professionnelle, le processus de certification—des
          tests à l&apos;inspection et à l&apos;approbation—devient fluide,
          prévisible et entièrement conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificat BIS pour Chaises et Tabourets
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certification BIS est-elle obligatoire pour chaises et
                tabourets ?
              </strong>
              <br />
              Oui, selon IS 17632:2022, toutes les chaises et tabourets à usage
              général doivent être certifiés BIS avant d&apos;être vendus en
              Inde.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quels tests sont requis ?</strong>
              <br />
              Tests de stabilité, résistance, durabilité, impact, fatigue et
              sécurité des matériaux.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Combien de temps prend la certification BIS ?</strong>
              <br />
              Généralement 30–45 jours.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Quel est le coût de certification ?</strong>
              <br />
              Environ ₹60,000–₹1,30,000 selon les tests et l&apos;inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Les fabricants étrangers peuvent-ils postuler ?
              </strong>
              <br />
              Oui, sous le schéma FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Le marquage ISI est-il obligatoire ?</strong>
              <br />
              Oui, après l&apos;octroi de la licence BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Pourquoi les chaises échouent-elles aux tests BIS ?
              </strong>
              <br />
              Les causes courantes incluent des pieds faibles, une faible
              résistance des joints et l&apos;instabilité.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Plusieurs modèles peuvent-ils être couverts par une licence ?
              </strong>
              <br />
              Seulement s&apos;ils répondent aux critères de similarité et de
              conformité standard.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Une inspection d&apos;usine est-elle requise ?</strong>
              <br />
              Oui, c&apos;est obligatoire pour la certification de marque ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Quels documents sont nécessaires ?</strong>
              <br />
              Licence d&apos;usine, spécifications techniques, liste des
              machines, plan QC, dessins de produits, etc.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour Chaises & Tabourets - IS 17632:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={1} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Nos Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur Consultant en Certificats de l&apos;Inde
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marque BIS (Licence ISI) pour Fabrication Étrangère
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certification d&apos;Enregistrement CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Enregistrement BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Gestion des déchets plastiques"
                title="Gestion des déchets plastiques"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestion des Déchets Plastiques
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Certificat EPR"
                title="Logo Certificat EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications Certificat EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications Certificat LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificat d&apos;Enregistrement BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo Marque ISI"
                title="Logo Marque ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              MARQUE ISI (BIS) pour Fabricants Indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
