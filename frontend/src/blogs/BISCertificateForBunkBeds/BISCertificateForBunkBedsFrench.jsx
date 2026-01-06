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

const BISCertificateForBunkBedsFrench = () => {
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

export default BISCertificateForBunkBedsFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour lits superposés | Licence BIS IS 17636:2022";
  const ogTitle =
    "Certification BIS pour lits superposés – Guide IS 17636:2022";
  const twitterTitle = "Licence BIS pour lits superposés | IS 17636:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour lits superposés selon IS 17636:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour lits superposés selon IS 17636:2022. Connaître le processus, le coût, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour lits superposés selon IS 17636:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour lits superposés, Licence BIS pour lits superposés, IS 17636:2022, Certification BIS pour lits superposés";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/lits-superposes-is-17636";
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
                    Certificat BIS pour lits superposés – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificat BIS pour lits superposés – Guide complet de la
          certification BIS IS 17636:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="Licence BIS pour lits superposés"
            alt="Certificat BIS pour lits superposés - Certification BIS IS 17636:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat BIS pour lits superposés est une exigence obligatoire en
          Inde selon IS 17636:2022, qui définit les exigences de sécurité, de
          performance et structurelles pour les lits superposés utilisés dans
          les foyers, les auberges, les dortoirs, les hébergements PG, les
          écoles, les hôtels et les établissements commerciaux. Tout
          fabricant—indien ou étranger—doit obtenir une certification BIS pour
          lits superposés avant de vendre, importer, exporter ou distribuer des
          lits superposés sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec la demande croissante de mobilier économisant l'espace, les lits
          superposés sont devenus une catégorie de produits essentielle.
          Cependant, les risques de sécurité tels que les chutes,
          l'effondrement, le piégeage et les défaillances structurelles rendent
          la licence BIS pour lits superposés cruciale pour assurer la
          protection des consommateurs. Cette page complète vous guidera à
          travers l'enregistrement BIS pour lits superposés, les exigences de
          test, la documentation, les frais, les délais, les pénalités et les
          avantages.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Que vous soyez fabricant, importateur, exportateur, commerçant ou
          start-up, ce guide vous aide à comprendre les exigences de conformité
          du Bureau des normes indiennes (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu'est-ce que la certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est un programme de conformité qualité et
          sécurité régie par le Bureau des normes indiennes, l'organisme
          national de normalisation de l'Inde. Il garantit que les produits sont
          conformes aux normes indiennes spécifiées et sont sûrs, fiables et
          adaptés à l'usage.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qu'est-ce qu'un certificat BIS ?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un certificat BIS est une licence officielle délivrée à un fabricant
          lui permettant d'utiliser la marque ISI, démontrant la conformité aux
          normes de produits prescrites par le BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il prouve que le produit a réussi :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les tests en laboratoire</li>
          <li>L'inspection de l'usine</li>
          <li>L'évaluation du contrôle qualité</li>
          <li>La conformité à la sécurité</li>
          <li>La conformité aux normes indiennes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un produit certifié BIS affiche le logo BIS, également connu sous le
          nom de marque ISI, signifiant qu'il répond aux références de qualité
          indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quelle norme BIS s'applique aux lits superposés ? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits superposés relèvent de la certification BIS obligatoire selon
          la norme nouvellement introduite :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Lits superposés – Exigences de
          sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme garantit que les lits superposés répondent à des critères
          stricts de sécurité, de construction et de durabilité. Elle couvre :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilité structurelle</li>
          <li>Garde-corps</li>
          <li>Risques de piégeage</li>
          <li>Capacité de charge</li>
          <li>Exigences dimensionnelles</li>
          <li>Spécifications des matériaux</li>
          <li>Bords et finition de surface</li>
          <li>Construction de l'échelle</li>
          <li>Tests de durabilité et de performance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tout fabricant souhaitant vendre des lits superposés en Inde doit
          obtenir une licence BIS pour lits superposés selon IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est-elle requise pour les lits
          superposés ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits superposés sont largement utilisés par les enfants et les
          adultes, et les préoccupations de sécurité rendent la conformité
          essentielle. Le BIS a rendu la certification obligatoire pour prévenir
          :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>L'effondrement ou la défaillance structurelle</li>
          <li>Le piégeage des parties du corps</li>
          <li>La chute depuis le lit supérieur</li>
          <li>Les blessures liées à l'échelle</li>
          <li>La mauvaise qualité des matériaux</li>
          <li>Les risques d'incendie</li>
          <li>Les finitions dangereuses ou les bords tranchants</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Raisons pour lesquelles la licence BIS pour lits superposés est
          obligatoire
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantit la résistance mécanique et la durabilité</li>
          <li>Protège les consommateurs—surtout les enfants—des blessures</li>
          <li>Maintient des normes de qualité uniformes</li>
          <li>Aide les marques à construire la confiance et la crédibilité</li>
          <li>Garantit la conformité aux réglementations gouvernementales</li>
          <li>Prévient les problèmes juridiques et les pénalités</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans enregistrement BIS, les fabricants et importateurs ne peuvent pas
          légalement vendre le produit sur le marché indien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS étape par étape pour lits superposés
          (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS en Inde implique des tests, la
          documentation et les inspections d'usine. Voici la procédure étape par
          étape :
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 — Déterminer l'applicabilité et la norme
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Obligatoire
          </li>
          <li>
            Confirmer la catégorie de produit et les détails de l'unité de
            fabrication.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 — Demande BIS (Soumission du formulaire)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Postuler en ligne via le portail en ligne BIS Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les exigences incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du fabricant</li>
          <li>Adresse de l'usine et preuve</li>
          <li>Catégorie de produit et marque</li>
          <li>Capacités de fabrication</li>
          <li>Processus de contrôle qualité</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cette étape démarre le cycle d'approbation officiel.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 — Payer le coût du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Après la soumission, payer :
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de test</li>
          <li>Frais d'audit</li>
          <li>Frais de marquage</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les frais dépendent de :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nombre de variantes de produits</li>
          <li>Noms de marques</li>
          <li>Emplacement de l'usine</li>
          <li>Paramètres de test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 — Test d'échantillon (Selon IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les tests sont effectués dans un laboratoire reconnu par le BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les tests incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test de stabilité structurelle</li>
          <li>Test d'impact</li>
          <li>Test de piégeage</li>
          <li>Test de résistance du garde-corps</li>
          <li>Test de qualité de finition</li>
          <li>Test de sécurité de l'échelle</li>
          <li>Test de charge</li>
          <li>Test de durabilité</li>
          <li>Évaluation de la sécurité des bords</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le rapport de test est directement téléchargé sur le portail BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 — Inspection d'usine BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS visite l'usine pour vérifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Système de gestion de la qualité</li>
          <li>Contrôle des matières premières</li>
          <li>Inspections en cours de processus</li>
          <li>Test du produit final</li>
          <li>Capacité de production</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ils vérifient la conformité au schéma de test et d'inspection BIS
          (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 — Octroi de la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Une fois toutes les étapes validées, le BIS délivre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Approbation de la marque ISI</li>
          <li>Numéro de licence CML</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Vous pouvez maintenant utiliser légalement la marque BIS sur les lits
          superposés et l'emballage.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 — Obligations post-licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintenir les tests internes</li>
          <li>Autoriser les inspections BIS périodiques</li>
          <li>Renouveler la licence tous les 1 ou 2 ans</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la licence BIS pour lits superposés
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences relatives à la
          performance et à la sécurité, c'est-à-dire la résistance, la stabilité
          et la durabilité des lits superposés à usage domestique et non
          domestique. Cette norme s'applique également aux lits simples utilisés
          à une hauteur de la base du lit de 800 mm ou plus au-dessus du niveau
          du sol fini, indépendamment de l'usage auquel l'espace en dessous est
          destiné.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme s'applique aux lits superposés
          complètement fabriqués/ manufacturés. Elle s'applique également aux
          unités prêtes à assembler ; dans ce cas, les exigences de cette norme
          s'appliquent à l'unité assemblée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS des lits superposés
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voici une liste complète des documents de certificat BIS :
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents du fabricant
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat d'enregistrement de l'usine</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines et équipements</li>
          <li>Liste des équipements de test</li>
          <li>Certificats d'étalonnage</li>
          <li>Plan d'implantation de l'usine/plan de l'installation</li>
          <li>Lettre d'autorisation du PDG/Directeur</li>
          <li>Certificat ISO 9001 (si disponible)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d'identité</li>
          <li>Preuve d'adresse</li>
          <li>Autorisation de marque (si marque tierce)</li>
          <li>Document d'enregistrement de marque (optionnel)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spécifications du produit</li>
          <li>Nomenclature des matériaux</li>
          <li>Description des caractéristiques de sécurité</li>
          <li>Plan de contrôle qualité</li>
          <li>Rapports de test internes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Engagements et déclarations</li>
          <li>Formulaire de demande de test</li>
          <li>Lettre d'approbation d'échantillon</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avoir les documents appropriés réduit les retards et assure une
          approbation en douceur.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour lits superposés (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tests sont une partie obligatoire du processus d'enregistrement
          BIS. Les lits superposés subissent des tests rigoureux pour assurer la
          sécurité et la durabilité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Schéma d'inspection et de test pour lits superposés
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
                  Dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Barrières de sécurité du lit supérieur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Espaces
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Base du lit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Échelle
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance du cadre et des fixations
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilité
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fixation du lit supérieur au lit inférieur
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Les tests doivent être effectués uniquement dans un laboratoire
          reconnu par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants et comment les éviter
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Catégorisation incorrecte du produit</strong>
            <br />
            Vérifiez toujours la norme indienne correcte.
          </li>
          <li>
            <strong>Documentation inadéquate</strong>
            <br />
            Les documents manquants causent des retards—préparez-les à l'avance.
          </li>
          <li>
            <strong>Échec des tests en laboratoire</strong>
            <br />
            Assurez-vous de matériaux de haute qualité, de soudure, de
            garde-corps et de finition.
          </li>
          <li>
            <strong>Usine non prête pour l'inspection</strong>
            <br />
            Assurez-vous que le SMQ et les équipements de test sont correctement
            entretenus.
          </li>
          <li>
            <strong>Problèmes de marque</strong>
            <br />
            Le nom de la marque doit correspondre à la demande de licence.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Résoudre ces problèmes tôt réduit considérablement le temps de
          traitement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour les fabricants et importateurs
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vendre légalement des lits superposés en Inde</li>
          <li>Construire la confiance avec les clients</li>
          <li>Réduire les retours de produits</li>
          <li>Améliorer la réputation de la marque</li>
          <li>Assurer la conformité à la sécurité</li>
          <li>Obtenir un avantage concurrentiel</li>
          <li>
            Étendre aux chaînes de vente au détail et aux plateformes e-commerce
          </li>
          <li>Accéder aux appels d'offres gouvernementaux</li>
          <li>Éviter les pénalités et les actions légales</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Vendre des lits superposés sans certification BIS peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie du produit</li>
          <li>Pénalités financières</li>
          <li>Ordres de fermeture d'usine</li>
          <li>Poursuites judiciaires</li>
          <li>Interdiction du marché indien</li>
          <li>Mise sur liste noire de la marque</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La conformité n'est pas optionnelle—elle est obligatoire.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a besoin de la certification BIS pour lits superposés ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les entités suivantes doivent obtenir une licence BIS pour lits
          superposés :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers exportant vers l'Inde</li>
          <li>Importateurs</li>
          <li>Distributeurs</li>
          <li>Vendeurs e-commerce</li>
          <li>Fabricants OEM/ODM</li>
          <li>Marques de mobilier et détaillants</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque usine (pas entreprise) nécessite une licence BIS séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi nous choisir pour le conseil en certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nous fournissons un support de bout en bout pour l'enregistrement BIS
          pour lits superposés, incluant :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interprétation de la norme (IS 17636:2022)</li>
          <li>Préparation de la documentation</li>
          <li>Coordination des tests en laboratoire</li>
          <li>Demande sur le portail BIS</li>
          <li>Support pour l'inspection d'usine</li>
          <li>Communication avec les agents BIS</li>
          <li>Assistance à l'approbation de licence</li>
          <li>Conformité post-certification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avec des années d'expertise, nous garantissons une certification BIS
          rapide, précise et sans tracas.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certification BIS pour lits superposés
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certification BIS est-elle obligatoire pour les lits
                superposés en Inde ?
              </strong>
              <br />
              Oui. Selon IS 17636:2022, elle est obligatoire pour tous les
              fabricants et importateurs.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Combien de temps prend la certification BIS pour lits
                superposés ?
              </strong>
              <br />
              Généralement 30 à 45 jours selon la préparation et la
              documentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Les fabricants étrangers peuvent-ils demander le BIS ?
              </strong>
              <br />
              Oui, via le FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Puis-je demander un certificat BIS en ligne ?</strong>
              <br />
              Oui, via le portail en ligne BIS Manak.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Quels tests sont requis pour la certification de lits
                superposés ?
              </strong>
              <br />
              Test de charge, test de garde-corps, test de stabilité, test
              d'impact, test de piégeage, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Combien de temps une licence BIS est-elle valide ?
              </strong>
              <br />
              Généralement 1 à 2 ans et renouvelable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Une licence peut-elle couvrir plusieurs modèles ?
              </strong>
              <br />
              Seulement s'ils relèvent de la même norme et catégorie.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. La marque ISI est-elle requise sur les lits superposés ?
              </strong>
              <br />
              Oui, la marque ISI est obligatoire après certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Que se passe-t-il si mon produit échoue aux tests en
                laboratoire ?
              </strong>
              <br />
              Vous devez modifier le produit et soumettre à nouveau des
              échantillons.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                11. Le BIS vérifie-t-il l'infrastructure de l'usine ?
              </strong>
              <br />
              Oui, lors de l'inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Les commerçants peuvent-ils demander le BIS ?</strong>
              <br />
              Seulement s'ils sont propriétaires de marque et ont un contrat
              avec les fabricants.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Qu'est-ce que le logo BIS ?</strong>
              <br />
              C'est le symbole standard de la marque ISI indiquant la conformité
              du produit.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. Quels documents sont nécessaires pour la certification BIS ?
              </strong>
              <br />
              Licence d'usine, plan d'implantation, liste des machines, BOM,
              plan QC, rapports de test, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. Les tests BIS sont-ils effectués à l'usine ?</strong>
              <br />
              Non, uniquement dans les laboratoires reconnus par le BIS.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtenir un certificat BIS pour lits superposés selon IS 17636:2022
          n'est pas seulement obligatoire mais aussi essentiel pour assurer la
          sécurité des consommateurs, la fiabilité du produit et la conformité
          légale en Inde. Le processus de certification implique des tests de
          produits, la documentation, l'inspection d'usine, et la délivrance de
          licence. Avec une planification appropriée et des conseils d'experts,
          le processus devient fluide, rapide et rentable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Que vous soyez fabricant, importateur ou propriétaire de marque,
          obtenir la certification BIS renforce votre position sur le marché,
          augmente la confiance des clients et débloque de nouvelles
          opportunités commerciales. Notre équipe de conseil experte est prête à
          vous assister avec une certification BIS de bout en bout pour lits
          superposés.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="Certificat BIS pour lits superposés - PDF IS 17636:2021"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Nos services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur consultant en certificats de l&apos;Inde
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
              Certification d&apos;enregistrement CDSCO
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
              Certificat d&apos;enregistrement BIS
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
