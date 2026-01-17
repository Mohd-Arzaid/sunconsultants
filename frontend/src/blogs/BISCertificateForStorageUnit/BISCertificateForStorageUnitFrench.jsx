import FaqAuthorFrench from "@/components/common/FaqAuthor/FaqAuthorFrench";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ManyUsersAlsoReadFrench from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadFrench";
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

const BISCertificateForStorageUnitFrench = () => {
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

export default BISCertificateForStorageUnitFrench;

const MetaTags = () => {
  const title = "Certificat BIS pour unités de stockage | Licence BIS IS 17634:2022";
  const ogTitle = "Certification BIS pour unités de stockage – Guide IS 17634:2022";
  const twitterTitle = "Licence BIS pour unités de stockage | IS 17634:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour unités de stockage selon IS 17634:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour unités de stockage selon IS 17634:2022. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour unités de stockage selon IS 17634:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour unités de stockage, Licence BIS pour unités de stockage, IS 17634:2022, Certification BIS pour unités de stockage";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/unites-de-stockage-is-17634";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    <Link to="/">Accueil</Link>
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
                    Certificat BIS pour unités de stockage – IS 17634:2022
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
          Certificat BIS pour unités de stockage – Guide complet de la certification BIS IS 17634:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="Licence BIS pour unités de stockage"
            alt="Certificat BIS pour unités de stockage - Certification BIS IS 17634:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat BIS pour unités de stockage est une exigence obligatoire selon
          la norme indienne IS 17634:2022. Cette norme couvre les exigences essentielles
          de sécurité, de durabilité et de performance structurelle pour tous les types
          de meubles de stockage utilisés dans les maisons, bureaux, écoles, établissements
          commerciaux et installations industrielles.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les unités de stockage comprennent :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Armoires</li>
          <li>Garde-robes</li>
          <li>Unités d'étagères</li>
          <li>Tiroirs et commodes</li>
          <li>Armoires de classement</li>
          <li>Unités de stockage latérales</li>
          <li>Systèmes de stockage modulaires</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Étant donné que les unités de stockage sont largement utilisées dans les espaces
          résidentiels et commerciaux, leur stabilité structurelle et leur sécurité sont
          extrêmement importantes. Les unités de stockage de mauvaise qualité peuvent
          basculer, s'effondrer ou causer des blessures en raison d'arêtes vives, de
          joints faibles ou d'une construction instable. Pour assurer la sécurité des
          clients et la qualité des produits, la certification BIS pour unités de stockage
          est rendue obligatoire en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique IS 17634:2022, les exigences de certification, le
          processus BIS, la documentation, les tests, les frais, les délais, les pénalités
          et les avantages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu'est-ce que la certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est une évaluation de conformité tierce délivrée par le
          Bureau des normes indiennes, garantissant que les produits sont conformes aux
          normes indiennes de sécurité et de qualité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un certificat BIS vérifie qu'un produit :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Répond aux normes indiennes</li>
          <li>A réussi les tests en laboratoire</li>
          <li>A subi une inspection d'usine</li>
          <li>Suit un contrôle qualité continu</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les produits certifiés portent la marque BIS (marque ISI).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quelle norme BIS s'applique aux unités de stockage ? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme BIS obligatoire pour les unités de stockage est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – Unités de stockage : Exigences de sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme couvre tous les types de meubles de stockage. Elle définit les
          exigences de sécurité, de durabilité, de capacité de charge et de conception
          pour assurer une utilisation sûre dans des conditions opérationnelles quotidiennes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Exigences clés de IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilité structurelle</li>
          <li>Performance de portance</li>
          <li>Résistance des tiroirs</li>
          <li>Résistance au basculement</li>
          <li>Qualité des matériaux</li>
          <li>Sécurité des arêtes</li>
          <li>Finition de surface</li>
          <li>Durabilité sous utilisation répétée</li>
          <li>Absence de risques de piégeage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Qu'elles soient fabriquées en Inde ou importées, toutes les unités de stockage
          doivent subir l'enregistrement BIS pour unités de stockage avant la vente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS pour unités de stockage est-elle obligatoire ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les unités de stockage sont utilisées de manière extensive et supportent souvent
          des charges lourdes. Une défaillance structurelle peut entraîner des blessures
          graves ou des dommages matériels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Raisons pour lesquelles la certification BIS est requise
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prévient les risques de basculement</li>
          <li>Assure la capacité de portance</li>
          <li>Améliore la durabilité et la durée de vie</li>
          <li>Élimine les arêtes vives et les finitions dangereuses</li>
          <li>Assure la sécurité des enfants dans un usage résidentiel</li>
          <li>Harmonise la qualité des produits</li>
          <li>Obligatoire selon les ordonnances de contrôle qualité BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Aucun fabricant ou importateur ne peut légalement vendre des unités de stockage
          sans licence BIS pour unités de stockage.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour unités de stockage (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification suit le schéma ISI (Schéma d'évaluation de conformité-I)
          impliquant des tests de produits et une inspection d'usine.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identifier l'applicabilité
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Analyser si le modèle de meuble de stockage relève de :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Armoires, étagères, tiroirs, unités de garde-robe, unités de classement ou
            meubles similaires.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmer la norme correcte : IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Dépôt de la demande BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Postuler en ligne via le portail en ligne BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Soumettre :</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails de l'entreprise</li>
          <li>Informations sur l'unité de fabrication</li>
          <li>Classification du produit</li>
          <li>Nom de la marque</li>
          <li>Diagrammes de flux de processus</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Payer les frais BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Comprend :</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test de produit</li>
          <li>Frais d'inspection d'usine</li>
          <li>Frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Tests de produits (Exigences IS 17634:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les échantillons sont testés dans un laboratoire reconnu par le BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le laboratoire évalue :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilité</li>
          <li>Résistance structurelle</li>
          <li>Capacité de portance</li>
          <li>Durabilité des tiroirs</li>
          <li>Résistance des étagères</li>
          <li>Sécurité des arêtes et coins</li>
          <li>Limites de substances dangereuses</li>
          <li>Performance sous utilisation répétée</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les résultats des tests doivent refléter une conformité totale.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Inspection d'usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS vérifie :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processus de fabrication</li>
          <li>Système de contrôle qualité</li>
          <li>Inspections des matières premières</li>
          <li>Capacité de test interne</li>
          <li>Étalonnage des instruments</li>
          <li>Conformité au schéma de test et d'inspection (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Octroi de la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Après évaluation réussie, le BIS délivre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Autorisation d'utiliser la marque ISI</li>
          <li>Numéro CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Exigences post-licence
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Respecter les exigences de marquage</li>
          <li>Maintenir les systèmes de qualité</li>
          <li>Inspections de surveillance BIS</li>
          <li>Renouvellement de licence tous les 1 à 2 ans</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la licence BIS pour unités de stockage
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences liées à la performance
          et à la sécurité des unités de stockage, y compris leurs parties mobiles et
          non mobiles destinées à un usage domestique et à un usage institutionnel tel
          que le classement de papiers ou similaire.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme s'applique aux unités de stockage complètement
          fabriquées/fabriquées. Elle s'applique également aux unités prêtes à assembler,
          auquel cas les exigences de cette norme s'appliquent aux unités assemblées.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS des unités de stockage
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voici la liste complète des DOCUMENTS DE CERTIFICATION BIS :
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documents de fabrication
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat d'enregistrement d'usine</li>
          <li>Plan de disposition</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines</li>
          <li>Liste des équipements de test</li>
          <li>Certificats d'étalonnage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documents légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d'identité</li>
          <li>Preuve d'adresse</li>
          <li>Autorisation de marque (si applicable)</li>
          <li>Certificat de marque de commerce (optionnel mais recommandé)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dessins de produits</li>
          <li>Diagrammes d'assemblage</li>
          <li>Nomenclature des matériaux</li>
          <li>Rapports de test internes</li>
          <li>Caractéristiques de sécurité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documents de demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande</li>
          <li>Lettres d'autorisation d'usine</li>
          <li>Lettre de demande de test</li>
          <li>Formulaires de déclaration</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avoir une documentation complète aide à éviter les retards de traitement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour les unités de stockage (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Des tests rigoureux garantissent que le produit répond aux critères de sécurité
          et de durabilité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tests majeurs selon IS 17634:2022
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Général
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flèche des étagères
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance des supports d'étagères
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge soutenue pour les dessus et dessous
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance des supports de tringle à vêtements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Délogement des tringles à vêtements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test pour la structure et le châssis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de chute
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests pour les unités avec roulettes ou roues
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance des portes pivotantes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de claquement des portes pivotantes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de claquement fermeture/ouverture des portes coulissantes et
                  rideaux horizontaux
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance des rabats à charnière inférieure
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de chute pour les rabats à charnière supérieure
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de claquement fermeture/ouverture des rideaux verticaux
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance des éléments d'extension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de claquement fermeture/ouverture des éléments d'extension /
                  Déplacement des fonds des éléments d'extension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d'interverrouillage
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de résistance pour les mécanismes de verrouillage et de fermeture
                  des éléments d'extension
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mécanismes de verrouillage et de fermeture pour portes, rabats et
                  rideaux
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de force de traction
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de cycle de facilité de charge supérieure
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de chute – Dynamique – pour les unités avec surfaces d'assise
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Parties mobiles, supports d'étagères, dessus et dessous
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge soutenue (surcharge)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de délogement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unités supportées par le sol
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unités pouvant être ajustées à une hauteur de 1 000 mm ou moins
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Unités pouvant être ajustées à une hauteur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ouverture des portes, éléments d'extension et rabats, toutes les unités
                  de stockage non chargées
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Toutes les zones de stockage non chargées et toutes les portes, éléments
                  d'extension et rabats ouverts
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Toutes les zones de stockage non chargées avec charge de renversement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Toutes les zones de stockage chargées avec charge de renversement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Portes, éléments d'extension et rabats fermés et verrouillés, toutes
                  les unités de stockage chargées
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de stabilité de force verticale pour les unités de stockage
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de stabilité pour les socles/unités de stockage avec surfaces
                  d'assise
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de stabilité dynamique pour les unités avec roulettes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de résistance pour les fixations murales
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Les tests sont obligatoires et doivent être effectués uniquement dans un
          laboratoire approuvé par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants et comment les éviter
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Classification incorrecte de l'unité de stockage</strong>
            <br />
            Toujours confirmer la portée selon IS 17634:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Usine non préparée</strong>
            <br />
            Le SMQ, l'étalonnage et les tests internes doivent être prêts avant
            l'inspection.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Échec du test de produit</strong>
            <br />
            Assurez-vous :
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>Résistance des étagères</li>
            <li>Durabilité des tiroirs</li>
            <li>Stabilité anti-basculement</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Documents manquants</strong>
            <br />
            Évitez les retards en préparant la documentation à l'avance.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Incompatibilité du nom de marque</strong>
            <br />
            Doit correspondre à la marque de commerce et à l'étiquette.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour unités de stockage
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformité légale obligatoire</li>
          <li>Assurance de sécurité client</li>
          <li>Crédibilité accrue sur le marché</li>
          <li>Éligibilité pour le commerce électronique et les chaînes de vente au détail</li>
          <li>Réduction du risque de défaillance du produit</li>
          <li>Éligibilité aux appels d'offres gouvernementaux</li>
          <li>Différenciation de marque</li>
          <li>Confiance accrue des consommateurs</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendre ou importer des unités de stockage sans approbation BIS peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Amendes lourdes</li>
          <li>Saisie de produits</li>
          <li>Interdiction de fabrication</li>
          <li>Poursuites pénales</li>
          <li>Mise sur liste noire de la marque</li>
          <li>Retrait du marché</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformité est obligatoire selon les règles BIS et les ordonnances de contrôle
          qualité (QCO).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a besoin de la certification BIS pour unités de stockage ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers</li>
          <li>Importateurs</li>
          <li>Commerçants (propriétaires de marques)</li>
          <li>Fournisseurs OEM et ODM</li>
          <li>Marques de meubles de vente au détail et en ligne</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque usine a besoin d'une licence BIS séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi nous choisir pour le conseil en certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nous fournissons un support complet de bout en bout :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interprétation des normes (IS 17634:2022)</li>
          <li>Classification des produits</li>
          <li>Préparation de la documentation</li>
          <li>Coordination avec les laboratoires reconnus par le BIS</li>
          <li>Support de test</li>
          <li>Dépôt sur le portail BIS</li>
          <li>Guidance pour l'inspection d'usine</li>
          <li>Approbation de licence</li>
          <li>Renouvellement et surveillance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre expertise garantit un processus de certification rapide, fluide et sans
          erreur.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L'obtention du certificat BIS pour unités de stockage selon IS 17634:2022 est
          essentielle pour assurer la sécurité des produits, la performance structurelle et
          la durabilité. C'est également une exigence légale obligatoire pour vendre ou
          importer des meubles de stockage en Inde. Avec une documentation appropriée, des
          tests et des conseils d'experts, le processus de certification devient fluide.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre équipe de conseil BIS dédiée garantit une approbation rapide, une documentation
          précise et un support de conformité de bout en bout pour les fabricants et les
          importateurs.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certificat BIS pour unités de stockage (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certification BIS est-elle obligatoire pour les unités de stockage en Inde ?
              </strong>
              <br />
              Oui. La certification BIS pour unités de stockage est obligatoire selon la norme
              indienne IS 17634:2022 – Unités de stockage : Exigences de sécurité. Cette norme
              a été incluse dans une ordonnance de contrôle qualité (QCO), ce qui signifie
              qu'aucun fabricant, importateur ou vendeur n'est légalement autorisé à vendre
              des unités de stockage sur le marché indien sans approbation BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quels types d'unités de stockage sont couverts par IS 17634:2022 ?
              </strong>
              <br />
              IS 17634:2022 s'applique à une large gamme de meubles de stockage utilisés dans
              les espaces résidentiels, commerciaux et institutionnels.
              <br />
              La norme couvre :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Armoires (bois, métal, modulaires)</li>
              <li>Placards et garde-robes</li>
              <li>Unités d'étagères</li>
              <li>Armoires de classement</li>
              <li>Unités de tiroirs et commodes</li>
              <li>Buffets et systèmes de stockage modulaires</li>
              <li>Unités de stockage de bureau</li>
              <li>Meubles de stockage compacts</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Quels tests sont effectués pour la certification BIS des unités de stockage ?
              </strong>
              <br />
              Les unités de stockage subissent plusieurs tests obligatoires pour évaluer leur
              durabilité, résistance, sécurité et performance.
              <br />
              Les tests clés comprennent :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                Test de stabilité : Assure que l'unité ne bascule pas pendant l'utilisation ou
                l'extension du tiroir.
              </li>
              <li>
                Test de charge statique : Mesure la capacité de portance des étagères, tiroirs
                et structure principale.
              </li>
              <li>
                Test de durabilité/résistance : Vérifie la performance des tiroirs, portes et
                étagères sur des cycles d'utilisation répétés.
              </li>
              <li>
                Test de résistance des étagères : Évalue l'affaissement ou la flexion sous charge.
              </li>
              <li>
                Test d'impact : Assure la résistance structurelle aux impacts accidentels.
              </li>
              <li>
                Test de résistance au basculement : Vérifie la performance anti-basculement lorsque
                les tiroirs sont complètement chargés et étendus.
              </li>
              <li>
                Test de sécurité des arêtes et de finition : Assure l'absence d'arêtes vives ou
                de finitions dangereuses.
              </li>
              <li>Test de sécurité des matériaux : Confirme des matériaux non toxiques et sûrs.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Combien de temps prend le processus de certification BIS pour les unités de
                stockage ?
              </strong>
              <br />
              Le délai typique de certification BIS pour les unités de stockage est de 30 à 45
              jours ouvrables, selon la préparation du produit et la qualité de la documentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Les fabricants étrangers peuvent-ils demander la certification BIS pour les
                unités de stockage ?
              </strong>
              <br />
              Oui. Les fabricants étrangers doivent obtenir la certification BIS selon le schéma
              FMCS (Foreign Manufacturers Certification Scheme).
              <br />
              Les exigences clés comprennent :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Un représentant indien local (AIR)</li>
              <li>Test de produit dans un laboratoire indien approuvé par le BIS</li>
              <li>Inspection d'usine à l'étranger par des agents BIS</li>
              <li>Conformité avec IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Que se passe-t-il si le produit d'unité de stockage échoue aux tests BIS ?
              </strong>
              <br />
              Si l'échantillon échoue à un test obligatoire :
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Le fabricant reçoit un rapport d'échec.</li>
              <li>Ils doivent apporter les modifications nécessaires de conception/matériau.</li>
              <li>Des échantillons révisés doivent être soumis pour un nouveau test.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. L'inspection d'usine est-elle obligatoire pour la certification BIS ?
              </strong>
              <br />
              Oui. Une inspection d'usine est obligatoire pour toutes les certifications de
              marque ISI, y compris les unités de stockage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Les commerçants ou propriétaires de marques peuvent-ils demander la
                certification BIS ?
              </strong>
              <br />
              Oui, mais seulement si :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Ils possèdent la marque, et</li>
              <li>
                Ils ont un accord de fabrication légalement autorisé avec une usine réelle
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              Les licences BIS sont délivrées par usine, pas par entreprise.
              <br />
              Par conséquent, le lieu de fabrication réel doit subir des tests et une inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Plusieurs modèles d'unités de stockage peuvent-ils être couverts par une
                seule licence BIS ?
              </strong>
              <br />
              Seulement si :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Les modèles relèvent de la même norme</li>
              <li>Ils sont fabriqués dans la même usine</li>
              <li>Ils partagent une construction et des matières premières similaires</li>
              <li>Ils répondent aux mêmes paramètres de test</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Quelles exigences d'étiquetage doivent être suivies après la certification ?
              </strong>
              <br />
              Une fois approuvé, le produit doit afficher :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Marque ISI (marque de certification BIS)</li>
              <li>Numéro de norme (IS 17634:2022)</li>
              <li>Numéro de licence CML</li>
              <li>Nom et adresse du fabricant</li>
              <li>Numéro de lot ou de série</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour unités de stockage - PDF IS 17634:2022"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={3} />
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
              Nos services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur consultant en certificats en Inde
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
                alt="Logo BIS"
                title="Logo BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marque BIS (Licence ISI) pour fabrication étrangère
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="Logo CDSCO"
                title="Logo CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certification d'enregistrement CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="Logo BISCRS"
                title="Logo BISCRS"
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
              Gestion des déchets plastiques
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo certificat EPR"
                title="Logo certificat EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications de certificat EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="Logo LMPC"
                title="Logo LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications de certificat LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="Logo BIS"
                title="Logo BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificat d'enregistrement BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo marque ISI"
                title="Logo marque ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              MARQUE ISI (BIS) pour fabricants indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
