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

const BISCertificateForWeldedPipesAndTubesFrench = () => {
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

export default BISCertificateForWeldedPipesAndTubesFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour Tubes et Tuyaux Soudés | Licence BIS IS 17876:2022";
  const ogTitle =
    "Certification BIS pour Tubes et Tuyaux Soudés – Guide IS 17876:2022";
  const twitterTitle =
    "Licence BIS pour Tubes et Tuyaux Soudés | IS 17876:2022";
  const metaDescription =
    "Obtenez le Certificat BIS pour Tubes et Tuyaux Soudés sous IS 17876:2022. Processus, documents, tests, coûts et délais pour la Certification BIS en Inde.";
  const ogDescription =
    "Guide complet de la Certification BIS pour Tubes et Tuyaux Soudés selon IS 17876:2022. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le Certificat BIS pour Tubes et Tuyaux Soudés sous IS 17876:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour Tubes et Tuyaux Soudés, Licence BIS pour Tubes et Tuyaux Soudés, IS 17876:2022, Certification BIS pour Tubes et Tuyaux Soudés";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubes-et-tuyaux-soudes-is-17876";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsable des opérations chez Sun Certification India";

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
                    Certificat BIS pour Tubes et Tuyaux Soudés – IS 17876:2022
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
          Certificat BIS pour Tubes et Tuyaux en Acier Inoxydable Soudés selon
          IS 17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="Licence BIS pour Tubes et Tuyaux Soudés"
            alt="Certificat BIS pour Tubes et Tuyaux Soudés - Certification BIS IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tubes et tuyaux en acier inoxydable soudés sont largement utilisés
          dans des industries telles que la construction, la transformation
          chimique, l&apos;alimentation et les boissons, la distribution d&apos;eau,
          les applications structurelles et l&apos;ingénierie générale. Comme ces
          tuyaux transportent des fluides, des gaz et, dans certains cas, des
          produits chimiques corrosifs, leur résistance, leur résistance à la
          corrosion et l&apos;intégrité de leur fabrication doivent être vérifiées
          avant leur mise sur le marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour réglementer la qualité et assurer la sécurité publique et
          industrielle, le gouvernement de l&apos;Inde a rendu la Certification BIS
          obligatoire pour les tubes et tuyaux en acier inoxydable soudés selon
          IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique le processus complet d&apos;approbation BIS, la
          documentation, les exigences de test, les coûts, les délais, les
          obligations des fabricants, les avantages et les règles de conformité —
          rédigé dans un format frais et unique, garantissant zéro duplication
          avec le contenu précédent.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS pour Tubes et Tuyaux en Acier
          Inoxydable Soudés ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Bureau des normes indiennes (BIS) réglemente la qualité des
          produits en Inde grâce à divers systèmes de certification. Un produit
          qui relève d&apos;un arrêté de contrôle de qualité (QCO) obligatoire doit
          obtenir une Licence BIS avant d&apos;être fabriqué, importé, stocké, vendu
          ou distribué.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ce que garantit la Certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un certificat BIS confirme que les tubes/tuyaux en acier inoxydable
          soudés :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Répondent à la précision dimensionnelle</li>
          <li>Possèdent la résistance mécanique requise</li>
          <li>Présentent une résistance à la corrosion</li>
          <li>Sont fabriqués en utilisant des qualités d&apos;acier inoxydable
            approuvées</li>
          <li>Conformes aux conditions de test indiennes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une fois certifiés, les produits doivent porter la Marque ISI ainsi
          que le numéro de licence (CML).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme BIS pour Tubes et Tuyaux en Acier Inoxydable Soudés – IS
          17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme applicable est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Tubes et Tuyaux en Acier Inoxydable
          Soudés pour Service Général
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme décrit :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La composition chimique</li>
          <li>Les exigences de propriétés mécaniques</li>
          <li>Les tolérances de fabrication</li>
          <li>Les spécifications dimensionnelles</li>
          <li>Les directives de surface et de finition</li>
          <li>Les tests hydrostatiques et non destructifs</li>
          <li>Les critères de performance de sécurité</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ces tuyaux sont utilisés pour des applications de service général, ce
          qui signifie qu&apos;ils doivent répondre à une large gamme
          d&apos;environnements opérationnels.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS est Obligatoire pour les Produits IS
          17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tuyaux en acier inoxydable soudés sont largement utilisés dans :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les pipelines d&apos;eau</li>
          <li>Le transport chimique</li>
          <li>Les usines alimentaires et pharmaceutiques</li>
          <li>L&apos;ingénierie structurelle</li>
          <li>Les systèmes d&apos;échappement et de ventilation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          S&apos;ils ne sont pas fabriqués correctement, ces tuyaux peuvent
          entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Des défaillances de fuite</li>
          <li>Des éclatements sous pression</li>
          <li>La corrosion et la contamination</li>
          <li>L&apos;instabilité structurelle</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour empêcher les matériaux de qualité inférieure d&apos;entrer dans la
          chaîne d&apos;approvisionnement, le BIS exige que chaque fabricant —
          national ou étranger — obtienne la Licence BIS pour Tubes et Tuyaux
          en Acier Inoxydable Soudés.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La procédure de certification implique des tests de laboratoire et des
          inspections rigoureux.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identifier la Catégorie et la Qualité du Produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Évaluer la ou les qualités spécifiques d&apos;acier inoxydable fabriquées
          et confirmer qu&apos;elles relèvent d&apos;IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Soumettre la Demande en Ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent faire une demande via le Portail BIS Manak
          Online, en soumettant :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les détails de l&apos;usine</li>
          <li>La capacité de production</li>
          <li>Le diagramme de flux de processus</li>
          <li>Les sources de matières premières</li>
          <li>La documentation d&apos;assurance qualité</li>
          <li>Les détails de la marque et de la marque déposée</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Payer les Frais BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les paiements comprennent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les frais de demande</li>
          <li>Les frais de traitement</li>
          <li>Les frais de test</li>
          <li>Les frais d&apos;inspection d&apos;usine</li>
          <li>Les frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Inspection d&apos;Usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les responsables BIS inspectent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La séquence de production</li>
          <li>Le stockage des matières premières</li>
          <li>Les machines de soudage</li>
          <li>Les processus de recuit/traitement thermique</li>
          <li>La documentation qualité</li>
          <li>L&apos;infrastructure de test</li>
          <li>Les dossiers d&apos;étalonnage</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ils vérifient la conformité au Schéma de Test et d&apos;Inspection (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Si tous les paramètres répondent aux exigences BIS, le fabricant
          reçoit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le Certificat BIS</li>
          <li>L&apos;autorisation de la Marque ISI</li>
          <li>Un numéro de licence CML unique</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Obligations Post-Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les titulaires de licence doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintenir des tests de qualité internes continus</li>
          <li>Utiliser correctement la Marque ISI</li>
          <li>Coopérer lors des inspections de surveillance périodiques du
            BIS</li>
          <li>Renouveler la licence à temps</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la Licence BIS pour Tubes et Tuyaux en Acier Inoxydable
          Soudés
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences pour les tubes et
          tuyaux en acier inoxydable soudés pour services généraux.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme ne spécifie pas les exigences des
          tubes et tuyaux en acier inoxydable soudés destinés à des fins
          distinctes, qui sont couverts par des Normes indiennes séparées.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Documents de Fabrication
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licence/enregistrement d&apos;usine</li>
          <li>Diagramme de disposition</li>
          <li>Organigramme de processus</li>
          <li>Liste des machines (soudage, formage, recuit, test)</li>
          <li>Liste de l&apos;équipement de test interne</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Documents Techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spécifications de qualité</li>
          <li>Données de test chimiques et mécaniques</li>
          <li>Spécifications de procédure de soudage</li>
          <li>Dossiers de traitement thermique</li>
          <li>Tableaux de tolérances dimensionnelles</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Documents Légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;identité</li>
          <li>Preuve d&apos;adresse</li>
          <li>Documents de propriété de marque</li>
          <li>Lettre de signataire autorisé</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Documents de Demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande rempli</li>
          <li>Engagements et déclarations</li>
          <li>Documents de demande de test</li>
          <li>Maquette d&apos;étiquette pour le marquage ISI</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test selon IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tests sont au cœur de l&apos;approbation BIS et garantissent que
          chaque lot répond à des normes de qualité strictes.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analyse de Poche
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analyse de Produit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Exigences de Traction
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tuyaux
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de Bords
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Aplatissement Inverse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Aplatissement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Taille de Grain
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;Étanchéité aux Fuites
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Travail, Finition, Apparence
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions et Tolérances
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Rencontrés lors de la Certification BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Échec aux Tests de Composition Chimique</strong>
            <br />
            Les éléments d&apos;alliage non standard ou les impuretés causent le
            rejet.
          </li>
          <li>
            <strong>Défauts de Soudure lors des Tests Non Destructifs</strong>
            <br />
            Les processus de soudage médiocres ou le traitement thermique
            incohérent peuvent créer des défauts.
          </li>
          <li>
            <strong>Non-Conformité Dimensionnelle</strong>
            <br />
            Les variations d&apos;épaisseur de paroi conduisent couramment à des
            échecs.
          </li>
          <li>
            <strong>Documentation Incomplète</strong>
            <br />
            Les dossiers manquants ou peu clairs retardent l&apos;approbation de la
            licence.
          </li>
          <li>
            <strong>Problèmes d&apos;Étalonnage</strong>
            <br />
            L&apos;équipement non étalonné entraîne des résultats de test peu
            fiables.
          </li>
          <li>
            <strong>Soumission incorrecte de marque/étiquette</strong>
            <br />
            La maquette de la marque ISI doit correspondre aux spécifications
            BIS.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour Tubes et Tuyaux en Acier
          Inoxydable
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approbation légale pour fabriquer/vendre en Inde</li>
          <li>Assurance de qualité et de sécurité</li>
          <li>Réputation améliorée et crédibilité du marché</li>
          <li>Acceptabilité par les appels d&apos;offres gouvernementaux et des
            entreprises publiques</li>
          <li>Potentiel d&apos;exportation accru</li>
          <li>Risques de défaillance de produit réduits</li>
          <li>Protection contre les concurrents contrefaits ou de qualité
            inférieure</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour Non-Conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants/importateurs vendant des produits non certifiés
          encourent :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie de produits</li>
          <li>Pénalités lourdes en vertu de la Loi BIS</li>
          <li>Fermeture des opérations de fabrication</li>
          <li>Restrictions à l&apos;importation</li>
          <li>Poursuites judiciaires</li>
          <li>Annulation des licences existantes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformité est obligatoire et strictement appliquée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui Doit Obtenir la Licence BIS pour Tubes et Tuyaux Soudés en Acier
          Inoxydable ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les fabricants indiens</li>
          <li>Les fabricants étrangers exportant vers l&apos;Inde</li>
          <li>Les importateurs de tuyaux en acier inoxydable</li>
          <li>Les fournisseurs OEM</li>
          <li>Les distributeurs industriels</li>
          <li>Les marques de marque privée</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque site de fabrication doit obtenir sa propre licence.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Tubes et Tuyaux en Acier Inoxydable Soudés
          selon IS 17876:2022 garantit la fiabilité, la durabilité et les
          performances des produits de tuyauterie critiques utilisés dans
          plusieurs industries. Avec la certification obligatoire maintenant
          appliquée, les fabricants et importateurs doivent aligner leurs
          processus, tests et documentation sur les exigences BIS pour fournir
          légalement leurs produits sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec un accompagnement expert, le processus de licence BIS devient
          plus rapide, plus fluide et entièrement conforme.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certification BIS pour Tubes et Tuyaux en Acier Inoxydable
          Soudés
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certification BIS est-elle obligatoire pour les tuyaux en
                acier inoxydable soudés ?
              </strong>
              <br />
              Oui. Selon IS 17876:2022, la certification BIS est obligatoire pour
              tous les fabricants et importateurs.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quels tests sont requis ?</strong>
              <br />
              Analyse chimique, test de traction, test de dureté, test
              hydrostatique, tests non destructifs, aplatissement et contrôles
              dimensionnels.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Combien de temps prend la certification BIS ?</strong>
              <br />
              Généralement 35 à 50 jours pour le Fabricant indien et environ
              120 jours pour le fabricant étranger, selon la préparation aux
              tests et à l&apos;inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Les fabricants étrangers peuvent-ils obtenir la certification
                BIS ?
              </strong>
              <br />
              Oui, via le FMCS (Système de Certification des Fabricants
              Étrangers).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Quels documents sont requis ?</strong>
              <br />
              Licence d&apos;usine, liste d&apos;équipement de test, nomenclature, flux
              de processus, dessins, plan QC, documents de marque, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Que se passe-t-il si un échantillon échoue aux tests
                ?</strong>
              <br />
              Le fabricant doit corriger le problème, retravailler le produit
              et le soumettre à nouveau aux tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Le marquage ISI est-il obligatoire après approbation ?
              </strong>
              <br />
              Oui. Les produits doivent afficher la Marque ISI + numéro CML.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Toutes les qualités sont-elles couvertes par IS 17876 ?
              </strong>
              <br />
              Seules les qualités spécifiques définies dans la norme sont
              éligibles.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. À quelle fréquence le BIS effectue-t-il la surveillance ?
              </strong>
              <br />
              Des audits périodiques et des tests d&apos;échantillons aléatoires sont
              effectués pendant la validité de la licence.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour Tubes et Tuyaux Soudés - IS 17876:2022 PDF"
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
              Nos Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur Consultant en Certificats d&apos;Inde
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications de Certificat EPR
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
              Certifications de Certificat LMPC
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
