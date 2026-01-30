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

const BISCertificationCombinationSideCuttingPliersFrench = () => {
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




export default BISCertificationCombinationSideCuttingPliersFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour pinces combinées à coupe latérale | Licence BIS IS 3650:1981";
  const ogTitle =
    "Certification BIS pour pinces combinées à coupe latérale – Guide IS 3650:1981";
  const twitterTitle =
    "Licence BIS pour pinces combinées à coupe latérale | IS 3650:1981";
  const metaDescription =
    "Obtenez le certificat BIS pour pinces combinées à coupe latérale selon IS 3650:1981. Processus, documents, tests, coûts et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour pinces combinées à coupe latérale selon IS 3650:1981. Processus, coûts, documents, tests et avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour pinces combinées à coupe latérale selon IS 3650:1981. Processus BIS, documents, tests, frais et délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour pinces combinées à coupe latérale, Licence BIS pour pinces combinées à coupe latérale, IS 3650:1981, Certification BIS pour pinces combinées à coupe latérale";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/pinces-combinees-coupe-laterale-is-3650";
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Derniers articles</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificat BIS pour pinces combinées à coupe latérale – IS
                    3650:1981
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
          Certification BIS pinces combinées à coupe latérale – Guide complet IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="Licence BIS pour pinces combinées à coupe latérale"
            alt="Certificat BIS pour pinces combinées à coupe latérale - Certification BIS IS 3650:1981"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les pinces combinées à coupe latérale sont parmi les outils à main les plus
          utilisés dans les travaux électriques, la maintenance mécanique, la construction,
          les unités de production, les ateliers, l&apos;entretien automobile et les
          réparations domestiques. Ces outils sont conçus pour plusieurs fonctions :
          serrer, plier, tordre et couper des fils. Comme ils servent souvent à couper
          des fils métalliques, des conducteurs électriques et de petits composants,
          des pinces de mauvaise qualité peuvent provoquer des ruptures, des risques
          d&apos;électrocution, des blessures aux mains et des accidents du travail graves.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour garantir la sécurité, la durabilité et une qualité uniforme, le gouvernement
          indien impose la conformité aux normes indiennes pour les outils à main.
          L&apos;obtention d&apos;un certificat BIS pour pinces combinées à coupe latérale
          selon IS 3650:1981 est une exigence légale et qualité essentielle pour les
          fabricants et importateurs qui vendent ces outils en Inde. Une certification BIS
          valide pour pinces combinées à coupe latérale confirme que le produit a été testé
          pour la résistance mécanique, l&apos;efficacité de coupe, la dureté du matériau
          et les performances de sécurité globales.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette page produit détaillée s&apos;adresse aux fabricants, fabricants étrangers,
          importateurs, négociants, distributeurs, marques de quincaillerie, vendeurs
          e-commerce et professionnels de la conformité qui souhaitent une compréhension
          complète de la licence BIS pour pinces combinées à coupe latérale, notamment le
          processus de certification BIS en Inde, les exigences de test, la documentation,
          les coûts, les délais, les sanctions et les avantages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est un système d&apos;évaluation de la conformité des produits
          réglementé par le Bureau of Indian Standards, autorité nationale indienne
          pour la normalisation, la certification et l&apos;assurance qualité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La signification du certificat BIS désigne l&apos;approbation officielle délivrée
          par le BIS confirmant qu&apos;un produit est conforme à la norme indienne applicable
          (IS) et fabriqué sous un système qualité contrôlé.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les objectifs principaux de la certification BIS sont :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protéger les consommateurs des produits dangereux</li>
          <li>Garantir une qualité de produit constante</li>
          <li>Soutenir l&apos;application de la réglementation</li>
          <li>Encourager la normalisation dans l&apos;industrie indienne</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marque ISI expliquée
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La marque de certification BIS, communément appelée marque ISI, est un
          symbole de confiance et de conformité. Pour les pinces combinées à coupe latérale,
          la marque ISI indique que :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>L&apos;outil répond aux exigences de l&apos;IS 3650:1981</li>
          <li>Les performances mécaniques et de coupe sont vérifiées</li>
          <li>Le produit est légalement approuvé pour la vente en Inde</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme BIS applicable aux pinces combinées à coupe latérale
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Spécification pour pinces combinées
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme indienne applicable à ce produit est l&apos;IS 3650:1981, qui
          précise les exigences pour les pinces combinées à bords de coupe latéraux
          utilisées pour la préhension et la coupe.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Domaine d&apos;application de l&apos;IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme couvre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pinces combinées à bords de coupe latéraux</li>
          <li>Dimensions, forme et exigences de finition</li>
          <li>Qualité du matériau et traitement thermique</li>
          <li>Résistance mécanique et performances de coupe</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sécurité, performances et objectif des essais
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;IS 3650:1981 est conçue pour garantir que :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les pinces ont une capacité de coupe suffisante</li>
          <li>Les mâchoires et bords de coupe ne s&apos;ébrèchent ni ne se déforment</li>
          <li>Les poignées assurent une prise sûre et une isolation si nécessaire</li>
          <li>L&apos;outil fonctionne de manière fiable en conditions normales</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qui doit se conformer
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants de pinces combinées à coupe latérale en Inde</li>
          <li>Importateurs et distributeurs</li>
          <li>Fabricants étrangers fournissant le marché indien</li>
          <li>Marques vendant des pinces sous marques privées</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est obligatoire pour les pinces combinées à coupe latérale
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risques pour la sécurité des consommateurs
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Des pinces de qualité inférieure peuvent entraîner :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rupture soudaine lors de la coupe</li>
          <li>Glissade et blessures aux mains</li>
          <li>Risques d&apos;électrocution dans les applications électriques</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformité gouvernementale et réglementaire
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Conformément aux normes et notifications BIS, les outils à main tels que
          les pinces combinées couvertes par l&apos;IS 3650:1981 doivent respecter les
          exigences de certification BIS avant d&apos;être vendus en Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implications juridiques
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La vente ou l&apos;importation de pinces non certifiées peut entraîner :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie des produits par les autorités</li>
          <li>Sanctions pécuniaires</li>
          <li>Annulation des licences commerciales</li>
          <li>Poursuites judiciaires au titre de la loi BIS</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages marché et marque
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Une licence BIS pour pinces combinées à coupe latérale aide les marques à :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bâtir la confiance avec acheteurs et sous-traitants</li>
          <li>Être éligibles aux appels d&apos;offres gouvernementaux et PSU</li>
          <li>Concurrencer les marques de quincaillerie établies</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS étape par étape pour pinces combinées à coupe latérale
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicabilité et identification de la norme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La première étape consiste à confirmer que le produit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Relève des pinces combinées à coupe latérale</li>
          <li>Est couvert par l&apos;IS 3650:1981</li>
          <li>Correspond au domaine d&apos;application de la norme en taille et usage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processus de demande BIS en ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>S&apos;inscrire sur le portail BIS</li>
          <li>Sélectionner l&apos;IS 3650:1981 parmi les normes produits</li>
          <li>Remplir le formulaire de demande BIS</li>
          <li>Télécharger tous les documents requis</li>
          <li>Payer les frais applicables</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cette étape est couramment appelée demande BIS en ligne ou
          enregistrement du certificat BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Frais et structure des coûts pour la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le coût de la certification BIS comprend généralement :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande et de traitement</li>
          <li>Frais d&apos;essais des produits</li>
          <li>Frais d&apos;inspection d&apos;usine</li>
          <li>Frais de licence et de marquage</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le coût total de la certification BIS dépend de :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nombre de variantes</li>
          <li>Complexité des essais</li>
          <li>Localisation de l&apos;usine</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Essais sur échantillons de produits (selon IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les échantillons sont testés dans des laboratoires reconnus par le BIS pour :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dureté du tranchant</li>
          <li>Performances de coupe</li>
          <li>Résistance mécanique</li>
          <li>Précision dimensionnelle</li>
          <li>Finition de surface et qualité d&apos;exécution</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspection et audit d&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS effectue un audit d&apos;usine pour vérifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le processus de fabrication</li>
          <li>Le traitement thermique et les opérations de finition</li>
          <li>Le système de contrôle qualité</li>
          <li>Les installations d&apos;essais et d&apos;inspection</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Délivrance de la licence BIS et de la marque ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Après essais et inspection réussis :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le BIS délivre la licence Bureau of Indian Standards</li>
          <li>
            Le fabricant est autorisé à apposer la marque ISI sur les pinces approuvées
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformité après certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les exigences après approbation comprennent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspections de surveillance</li>
          <li>Essais sur échantillons du marché</li>
          <li>Renouvellement en temps utile de la licence</li>
          <li>Conformité continue à l&apos;IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents du fabricant
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat d&apos;enregistrement de l&apos;usine</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines et équipements d&apos;essai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents juridiques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat de constitution de société</li>
          <li>Enregistrement GST</li>
          <li>Autorisation de marque (le cas échéant)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dessins et spécifications du produit</li>
          <li>Détails des matières premières</li>
          <li>Plan de traitement thermique et QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande BIS</li>
          <li>Détails de la demande d&apos;essai</li>
          <li>Déclarations et engagements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ils sont collectivement appelés DOCUMENTS DU CERTIFICAT BIS ou
          DOCUMENTS DE CERTIFICATION BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences d&apos;essais selon l&apos;IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les essais obligatoires comprennent :
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Exigences
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fabrication
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Finition et qualité d&apos;exécution
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Préservation et emballage
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dureté
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolation (sauf essai d&apos;isolation)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai d&apos;isolation
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de coupe
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de préhension de tube
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de choc
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de torsion
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de charge sur poignée
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Essai de flexion
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tous les essais doivent être réalisés uniquement dans des laboratoires reconnus par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants et comment les éviter
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Problèmes courants
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Échec aux essais de dureté ou de coupe</li>
          <li>Traitement thermique inadéquat</li>
          <li>Mauvaise finition de surface</li>
          <li>Documentation incomplète</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bonnes pratiques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Réaliser des pré-essais internes</li>
          <li>Suivre les procédures de traitement thermique appropriées</li>
          <li>Tenir des registres qualité par lot</li>
          <li>Faire appel à un expert conseil BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour fabricants et importateurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages juridiques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformité totale à la réglementation indienne</li>
          <li>Protection contre les sanctions et saisies</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages commerciaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceptation par distributeurs et sous-traitants</li>
          <li>Éligibilité aux commandes en gros et institutionnelles</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages de marque
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La marque ISI renforce la crédibilité de la marque</li>
          <li>Différenciation par rapport aux fournisseurs non structurés</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Expansion du marché
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Accès aux chaînes de vente au détail de quincaillerie organisées</li>
          <li>Acceptation accrue dans les entreprises orientées à l&apos;export</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanctions en cas de non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La non-conformité peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lourdes amendes pécuniaires</li>
          <li>Saisie des produits</li>
          <li>Perturbation de l&apos;activité</li>
          <li>Poursuites judiciaires au titre de la loi BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a besoin de la certification BIS pour les pinces combinées à coupe latérale ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Importateurs</li>
          <li>Fabricants étrangers (avec représentant indien autorisé)</li>
          <li>Négociants vendant sous marque propre</li>
          <li>Vendeurs e-commerce proposant des pinces</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;obtention d&apos;un certificat BIS pour pinces combinées à coupe latérale selon
          l&apos;IS 3650:1981 est une exigence légale et qualité essentielle pour vendre
          ces outils en Inde. La certification BIS pour pinces combinées à coupe latérale
          garantit la sécurité du produit, des performances constantes et la conformité
          réglementaire, tandis que la licence BIS pour pinces combinées à coupe latérale
          renforce la crédibilité de la marque et l&apos;acceptation sur le marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les fabricants, importateurs et vendeurs, une conformité en temps utile
          évite non seulement les sanctions mais ouvre aussi l&apos;accès à des marchés
          plus larges et à une croissance durable. Avec un accompagnement expert, le
          processus de certification BIS devient plus fluide, plus rapide et pleinement
          conforme aux normes indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certification BIS pour pinces combinées à coupe latérale
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. La certification BIS est-elle obligatoire pour les pinces combinées à coupe latérale ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, la conformité à l&apos;IS 3650:1981 est obligatoire en Inde.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Quelle est la forme complète du certificat BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Combien de temps prend le processus de certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              En général 30 à 60 jours ouvrés.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Quel est le coût du certificat BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Le coût dépend du périmètre des essais et des variantes de produit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Les importateurs peuvent-ils demander la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, avec une autorisation appropriée du fabricant.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. La marque ISI est-elle obligatoire ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, le marquage ISI est obligatoire après certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Les fabricants étrangers peuvent-ils obtenir la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, via un représentant indien autorisé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Quels essais sont requis selon l&apos;IS 3650:1981 ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dureté, performances de coupe, résistance et essais dimensionnels.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. L&apos;inspection d&apos;usine est-elle obligatoire ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, le BIS effectue un audit d&apos;usine.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Plusieurs tailles peuvent-elles être couvertes par une seule licence ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, sous réserve d&apos;essais et d&apos;approbation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Que se passe-t-il si des pinces non certifiées sont vendues ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Des sanctions, une saisie et des poursuites judiciaires peuvent survenir.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. La demande BIS en ligne est-elle obligatoire ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, les demandes ne sont déposées qu&apos;en ligne.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Les renouvellements sont-ils requis pour les licences BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, les licences doivent être renouvelées périodiquement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Les consultants peuvent-ils réduire les délais d&apos;approbation ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, les consultants professionnels aident à éviter les erreurs et les rejets.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="Certificat BIS pour pinces combinées à coupe latérale - PDF IS 3650:1981"
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marque BIS (licence ISI) pour fabrication étrangère
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications certificat EPR
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
              Certifications certificat LMPC
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
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marque ISI (BIS) pour fabricants indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
