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

const BISCertificateForTablesAndDesksUnitFrench = () => {
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

export default BISCertificateForTablesAndDesksUnitFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour Tables & Bureaux | Licence BIS IS 17633:2022";
  const ogTitle = "Certification BIS pour Tables & Bureaux – Guide IS 17633:2022";
  const twitterTitle = "Licence BIS pour Tables & Bureaux | IS 17633:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour Tables & Bureaux selon IS 17633:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour Tables & Bureaux selon IS 17633:2022. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour Tables & Bureaux selon IS 17633:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour Tables & Bureaux, Licence BIS pour Tables & Bureaux, IS 17633:2022, Certification BIS pour Tables & Bureaux";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tables-et-bureaux-is-17633";
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
                    <Link to="/Blogs">Derniers Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificat BIS pour Tables & Bureaux – IS 17633:2022
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
          Certificat BIS pour Tables et Bureaux – Guide Complet sur la Certification BIS IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licence BIS pour Tables et Bureaux"
            alt="Certificat BIS pour Tables et Bureaux - Certification BIS IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Tables et Bureaux est obligatoire pour tous les
          fabricants, importateurs et vendeurs de tables et bureaux en Inde.
          Selon la Norme Indienne IS 17633:2022 – Tables et Bureaux : Exigences de
          Sécurité, ces articles de mobilier doivent être testés et certifiés par
          le Bureau of Indian Standards (BIS) avant de pouvoir être légalement vendus
          sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tables et bureaux sont des composants essentiels des foyers, bureaux, écoles,
          universités, espaces commerciaux, environnements d&apos;hôtellerie et
          lieux de travail industriels. Parce qu&apos;ils supportent souvent le poids, les chocs et
          une utilisation continue, leur résistance structurelle et leur sécurité sont critiques.
          Pour assurer la protection des consommateurs et la fiabilité des produits, le BIS impose
          une certification obligatoire.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique IS 17633:2022, le processus d&apos;enregistrement BIS,
          les tests, la documentation requise, les frais, les délais, les pénalités,
          et les avantages pour les fabricants et importateurs.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS est un processus de conformité réglementaire administré par
          le Bureau of Indian Standards, l&apos;autorité nationale des normes de l&apos;Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du Certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificat BIS confirme que le produit répond aux exigences de sécurité, qualité,
          performance et durabilité établies par les Normes Indiennes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages de la Certification BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Assure la sécurité des consommateurs</li>
          <li>Soutient une fabrication de haute qualité</li>
          <li>Réduit le risque de défaillance du produit</li>
          <li>Améliore l&apos;acceptation sur le marché</li>
          <li>Exigé légalement sous les Ordres de Contrôle Qualité BIS (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une fois approuvé, le produit porte la Marque BIS (Marque ISI) ainsi que
          le numéro de licence.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quelle Norme Indienne s&apos;Applique aux Tables & Bureaux ? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme BIS applicable est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Tables et Bureaux : Exigences de
          Sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme définit les exigences de performance, de sécurité structurelle et de durabilité
          pour tous les types de tables et bureaux utilisés dans les environnements
          résidentiels, commerciaux, d&apos;hôtellerie et institutionnels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produits Couverts
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bureaux de bureau</li>
          <li>Bureaux d&apos;ordinateur</li>
          <li>Tables d&apos;étude</li>
          <li>Tables à manger</li>
          <li>Tables basses</li>
          <li>Bureaux de travail</li>
          <li>Tables de formation</li>
          <li>Bureaux d&apos;école/université</li>
          <li>Tables d&apos;enseignant</li>
          <li>Tables de poste de travail modulaires</li>
          <li>Tables d&apos;écriture</li>
          <li>Tables de réunion/conférence</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Paramètres de Sécurité Clés sous IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilité structurelle</li>
          <li>Capacité de charge</li>
          <li>Résistance aux chocs</li>
          <li>Performance de force horizontale/verticale</li>
          <li>Qualité de finition de surface</li>
          <li>Sécurité des bords</li>
          <li>Durabilité sous utilisation répétitive</li>
          <li>Sécurité des matériaux</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque table ou bureau vendu en Inde doit se conformer à ces paramètres
          via l&apos;Enregistrement BIS pour Tables & Bureaux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS est Obligatoire pour les Tables et Bureaux
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tables et bureaux sont des articles de mobilier à usage intensif trouvés dans les foyers, bureaux,
          écoles et espaces publics. Les défaillances structurelles peuvent causer des accidents
          tels que :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Effondrement sous le poids</li>
          <li>Blessures par bords tranchants</li>
          <li>Instabilité pendant l&apos;utilisation</li>
          <li>Rupture des joints</li>
          <li>Détachement de surface</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pour éviter ces dangers, la certification BIS assure :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conception et construction sécurisées</li>
          <li>Conformité aux exigences de charge structurelle</li>
          <li>Performance durable</li>
          <li>Prévention du basculement et de l&apos;effondrement</li>
          <li>Sélection de matériaux de haute qualité</li>
          <li>Normes de marché uniformes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vendre des tables et bureaux sans Licence BIS pour Tables & Bureaux est
          illégal en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour Tables et Bureaux (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS suit le Schéma ISI (Schéma d&apos;Évaluation de la
          Conformité–I), qui comprend les tests de produits et l&apos;inspection de l&apos;usine.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identifier la Catégorie de Produit & la Norme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmez que la table/bureau relève de IS 17633:2022. Identifiez le nombre
          de variantes et de matériaux.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Déposer la Demande BIS (Soumission en Ligne)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Remplissez la demande sur le Portail BIS Manak en Ligne avec :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du fabricant</li>
          <li>Adresse de l&apos;usine</li>
          <li>Spécifications du produit</li>
          <li>Détails de la marque</li>
          <li>Systèmes de contrôle qualité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Paiement des Frais de Certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Comprend :</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test du produit</li>
          <li>Frais d&apos;inspection de l&apos;usine</li>
          <li>Frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Test d&apos;Échantillon dans un Laboratoire Reconnu par le BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les produits doivent subir des tests complets comme prescrit sous IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests Effectués
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test de Stabilité</li>
          <li>Test de Résistance (Charge Statique)</li>
          <li>Test de Durabilité (Chargement Répétitif)</li>
          <li>Test de Choc</li>
          <li>Mesure de Déflexion</li>
          <li>Test de Sécurité des Bords et de la Surface</li>
          <li>Test de Charge de l&apos;Espace de Travail</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le laboratoire télécharge les rapports de test directement vers le BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Inspection de l&apos;Usine BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS visite l&apos;installation de fabrication pour vérifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Système de gestion de la qualité</li>
          <li>Capacité de test interne</li>
          <li>Contrôle des matières premières</li>
          <li>Ligne de production & machines</li>
          <li>Étalonnage des instruments</li>
          <li>Conformité avec STI (Schéma de Test & Inspection)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Le BIS délivre :</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Approbation de la Marque ISI</li>
          <li>Numéro de licence CML unique</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Après cela, le fabricant peut légalement marquer et vendre des tables/bureaux en
          Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Conformité Post-Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintenir les dossiers selon STI</li>
          <li>Utiliser le marquage ISI correctement</li>
          <li>Permettre les inspections BIS périodiques</li>
          <li>Renouveler la licence tous les 1–2 ans</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la Licence BIS pour Tables & Bureaux
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences relatives à
          la performance et à la sécurité, c&apos;est-à-dire, la résistance, la stabilité et la durabilité
          des tables et bureaux à utiliser en position assise et/ou debout,
          utilisés par des adultes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme s&apos;applique aux tables et bureaux complètement fabriqués/
          manufacturés. Elle s&apos;applique également aux unités prêtes à assembler ;
          dans ce cas, les exigences de cette norme s&apos;appliqueront aux
          unités assemblées.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS des Tables & Bureaux
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de Fabrication
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licence d&apos;usine</li>
          <li>Liste des machines</li>
          <li>Liste de l&apos;équipement de test</li>
          <li>Certificats d&apos;étalonnage</li>
          <li>Plan de l&apos;usine</li>
          <li>Schéma de processus</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dessins de table/bureau</li>
          <li>Nomenclature des matériaux</li>
          <li>Spécifications du produit</li>
          <li>Rapports de test de qualité interne</li>
          <li>Photos/vidéos du produit</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;identité du signataire autorisé</li>
          <li>Preuve d&apos;adresse</li>
          <li>Lettre d&apos;autorisation de marque</li>
          <li>Certificat d&apos;enregistrement de marque</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de Demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande rempli</li>
          <li>Engagement du fabricant</li>
          <li>Lettre de demande de test</li>
          <li>Lettre d&apos;autorisation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une documentation complète assure des approbations plus rapides.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test sous IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tests évaluent la résistance, la stabilité, la durabilité et la sécurité.
        </p>

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
                  Conception et exécution
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Stabilité
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Charge indiquée
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pour charges lourdes occasionnelles
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance sous force statique horizontale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Général
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Choc Vertical pour Plateaux de Table en Verre
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Choc Vertical pour Tous les Autres Plateaux de Table
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Déflexion des Plateaux de Table
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Chute
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Les tests doivent être effectués uniquement dans les laboratoires approuvés par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Courants & Comment Les Éviter
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Produit échouant aux tests de charge ou de durabilité</strong>
            <br />
            Solution : Renforcer les joints, utiliser des matériaux conformes BIS, ajouter
            des renforts.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Documentation incomplète</strong>
            <br />
            Solution : Préparer tous les documents légaux, techniques et de fabrication
            à l&apos;avance.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Usine manquant d&apos;équipement de test approprié</strong>
            <br />
            Solution : Installer les instruments requis et maintenir l&apos;étalonnage selon
            les directives BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Étiquetage incorrect</strong>
            <br />
            Solution : S&apos;assurer que le marquage ISI suit exactement les règles BIS.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Mauvaise classification des modèles de produits</strong>
            <br />
            Solution : Obtenir des conseils professionnels pour catégoriser les variantes
            correctement.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Tables & Bureaux
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorisation légale de vendre en Inde</li>
          <li>Confiance accrue des clients</li>
          <li>Meilleure durabilité du produit</li>
          <li>Accès aux grands détaillants & plateformes e-commerce</li>
          <li>Risque de responsabilité produit réduit</li>
          <li>Crédibilité de marque plus élevée</li>
          <li>Conformité aux QCOs gouvernementaux</li>
          <li>Avantage concurrentiel sur le marché</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour Non-Conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendre ou distribuer des tables/bureaux sans certification BIS peut
          entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie du produit</li>
          <li>Lourdes amendes</li>
          <li>Poursuites pénales</li>
          <li>Interdiction d&apos;importation</li>
          <li>Ordres de fermeture d&apos;entreprise</li>
          <li>Annulation de licence</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Loi sur le Bureau of Indian Standards, 2016 impose des pénalités strictes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a Besoin de la Certification BIS pour Tables & Bureaux ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette certification est obligatoire pour :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers</li>
          <li>Importateurs</li>
          <li>Commerçants/propriétaires de marques</li>
          <li>Fournisseurs OEM/ODM</li>
          <li>Distributeurs de mobilier</li>
          <li>Vendeurs e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque usine doit obtenir une Licence BIS séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi Nous Choisir pour le Conseil en Certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nous fournissons une assistance de bout en bout :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interprétation des normes (IS 17633:2022)</li>
          <li>Classification des produits</li>
          <li>Rédaction de documentation</li>
          <li>Coordination des tests</li>
          <li>Dépôt sur le portail BIS</li>
          <li>Soutien à l&apos;inspection d&apos;usine</li>
          <li>Suivi continu avec le BIS</li>
          <li>Approbation de licence</li>
          <li>Renouvellement et gestion de la conformité</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre expertise assure une certification rapide, sans tracas et sans erreur.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Tables et Bureaux sous IS 17633:2022 est une
          exigence de conformité obligatoire qui assure la sécurité du produit,
          la performance, la durabilité et la conformité aux normes nationales.
          Les fabricants et importateurs doivent subir des tests de produits, une inspection
          d&apos;usine, et respecter toutes les règles de documentation et d&apos;étiquetage BIS pour
          obtenir la Marque ISI.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec une assistance experte, tout le processus de certification devient
          fluide, rapide et entièrement conforme aux règlements BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificat BIS pour Tables & Bureaux (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certification BIS est-elle obligatoire pour les tables et bureaux ?
              </strong>
              <br />
              Oui. Selon IS 17633:2022, toutes les tables et bureaux doivent être
              certifiés BIS avant d&apos;être vendus en Inde.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quels tests sont requis pour la certification ?</strong>
              <br />
              Les tests obligatoires comprennent les tests de stabilité, résistance, durabilité,
              déflexion, choc et sécurité de surface.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quel est le coût de la certification BIS ?</strong>
              <br />
              Le coût varie entre ₹65 000 – ₹1 30 000, selon les facteurs de test
              et d&apos;inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Les fabricants étrangers ont-ils besoin de la Certification BIS ?
              </strong>
              <br />
              Oui, via le schéma FMCS, qui comprend des inspections d&apos;usines à l&apos;étranger
              par le BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Une licence peut-elle couvrir plusieurs modèles de table/bureau ?
              </strong>
              <br />
              Oui, mais seulement si les modèles sont similaires en construction et en paramètres
              de test.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Combien de temps prend le processus BIS ?</strong>
              <br />
              Environ 30–45 jours.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Le test est-il obligatoire dans un laboratoire reconnu par le BIS ?</strong>
              <br />
              Oui, seuls les laboratoires approuvés par le BIS peuvent effectuer les tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Que se passe-t-il si le produit échoue ?</strong>
              <br />
              Il doit être repensé et resoumis pour les tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Le marquage ISI est-il obligatoire après la certification ?</strong>
              <br />
              Oui, la Marque ISI est requise sur le produit et l&apos;emballage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Quels documents sont nécessaires ?</strong>
              <br />
              Dessins techniques, nomenclature, documents d&apos;usine, rapports de test, plan QC,
              et documents légaux.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour Tables & Bureaux - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={2} />
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
                alt="Gestion des Déchets Plastiques"
                title="Gestion des Déchets Plastiques"
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
                alt="Certificat EPR logo"
                title="Certificat EPR logo"
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
                alt="Certificat LMPC logo"
                title="Certificat LMPC logo"
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
                alt="Marque ISI logo"
                title="Marque ISI logo"
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
