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

const BISCertificateForFurnitureFrench = () => {
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

export default BISCertificateForFurnitureFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour meubles en Inde | Certification BIS, Licence et Guide du Processus";
  const ogTitle =
    "Certificat BIS pour meubles en Inde - Guide complet de certification BIS";
  const twitterTitle =
    "Certificat BIS pour meubles | Guide complet de certification BIS du BIS indien";
  const metaDescription =
    "Certificat BIS pour meubles en Inde - guide complet sur la certification BIS, la licence BIS, les coûts, les documents, les normes, le processus, la demande en ligne et la marque BIS pour les fabricants de meubles.";
  const ogDescription =
    "Vous cherchez la certification BIS pour meubles en Inde ? Apprenez-en plus sur la licence BIS, la marque BIS, les normes applicables, le processus de certification, les coûts, les documents et les exigences de conformité en détail.";
  const twitterDescription =
    "Guide complet du certificat BIS pour meubles en Inde - processus de certification BIS, coûts, documents, marque BIS, normes et demande en ligne expliqués.";
  const metaKeywords =
    "Certificat BIS pour meubles, Certification BIS pour meubles, Licence BIS pour meubles, Qu'est-ce que le BIS, BIS indien";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meubles";
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
                    Certificat BIS pour meubles en Inde – Guide détaillé complet
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
          Certificat BIS pour meubles en Inde – Guide détaillé complet
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licence BIS pour meubles"
            alt="Certificat BIS pour meubles en Inde - Guide complet de certification BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introduction : Certification BIS et l&apos;industrie indienne du
          meuble
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          En Inde, la qualité, la sécurité et la normalisation des produits sont
          régies par une autorité statutaire centrale connue sous le nom de
          Bureau of Indian Standards (BIS). Le BIS est l&apos;organisation
          nationale de normalisation de l&apos;Inde, établie sous la loi BIS
          pour garantir que les produits vendus sur le marché indien sont
          conformes aux références de sécurité, de qualité et de performance
          définies.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que le BIS ?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS signifie Bureau of Indian Standards. Il fonctionne sous le
          ministère des Affaires des consommateurs, de l&apos;Alimentation et de
          la Distribution publique, Gouvernement de l&apos;Inde. Le BIS joue un
          rôle crucial dans la protection des intérêts des consommateurs tout en
          soutenant les fabricants grâce à un écosystème transparent de
          normalisation et de certification.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;industrie indienne du meuble a connu une croissance rapide en
          raison de :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanisation</li>
          <li>
            Expansion de l&apos;infrastructure résidentielle et commerciale
          </li>
          <li>
            Croissance dans les secteurs de l&apos;hôtellerie, de
            l&apos;éducation, de la santé et de la cohabitation
          </li>
          <li>
            Prise de conscience croissante des consommateurs concernant la
            sécurité et la durabilité des produits
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les meubles ne sont plus considérés comme un produit purement
          esthétique. Ils sont directement liés à la sécurité des utilisateurs,
          à l&apos;ergonomie, à la stabilité structurelle, à la résistance au
          feu et à la durabilité à long terme. Les incidents impliquant des lits
          qui s&apos;effondrent, des lits superposés dangereux, des chaises
          instables ou des unités de stockage de qualité inférieure ont suscité
          des préoccupations parmi les régulateurs et les consommateurs.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pour répondre à ces risques, la certification BIS pour les meubles est
          devenue une exigence de conformité critique. Le BIS garantit que les
          produits de meubles répondent aux normes indiennes (IS) relatives à :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Résistance structurelle</li>
          <li>Capacité de charge</li>
          <li>Qualité des matériaux</li>
          <li>Sécurité de la conception</li>
          <li>Performance dans les conditions d&apos;utilisation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les fabricants, importateurs, exportateurs, PME, startups et
          propriétaires de marques de meubles, l&apos;obtention d&apos;un
          certificat BIS pour les meubles n&apos;est plus seulement une
          formalité réglementaire—c&apos;est une nécessité du marché.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS pour les meubles est importante
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Elle garantit la conformité légale aux réglementations indiennes
          </li>
          <li>
            Elle renforce la confiance des consommateurs et la crédibilité de la
            marque
          </li>
          <li>
            Elle permet la vente et la distribution sans restriction dans toute
            l&apos;Inde
          </li>
          <li>Elle minimise les risques de responsabilité produit</li>
          <li>
            Elle améliore la préparation à l&apos;exportation et
            l&apos;acceptation mondiale
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet est conçu pour être la ressource la plus autoritaire
          et détaillée sur la certification BIS pour les meubles en Inde. Que
          vous soyez un fabricant débutant ou une marque de meubles établie, ce
          guide répond à toutes les questions possibles liées à la licence BIS
          pour les meubles, l&apos;enregistrement BIS pour les meubles, les
          normes applicables, le processus, les coûts, les documents, les délais
          et la conformité post-certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que le certificat BIS pour les meubles ?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un certificat BIS pour les meubles est une approbation officielle
          accordée par le Bureau of Indian Standards confirmant qu&apos;un
          produit de meuble spécifique est conforme à la norme indienne (IS)
          pertinente.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qu&apos;est-ce que la marque BIS ?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La marque BIS, communément appelée la marque ISI, est une marque de
          conformité standard qui apparaît sur les produits certifiés. Elle
          signifie que le meuble a :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Réussi les tests en laboratoire</li>
          <li>Passé l&apos;inspection de l&apos;usine</li>
          <li>Répondu à toutes les exigences de la norme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explication du logo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le logo BIS représente l&apos;autorité du BIS en tant
          qu&apos;organisme national de normalisation de l&apos;Inde.
          Lorsqu&apos;il est utilisé avec la marque ISI sur les produits de
          meubles, il assure aux acheteurs que le produit est conforme aux
          normes BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificat BIS Inde – Statut juridique
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          En Inde, la fabrication, l&apos;importation ou la vente de produits de
          meubles couverts par des normes notifiées sans certification BIS peut
          entraîner :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie des marchandises</li>
          <li>Lourdes amendes monétaires</li>
          <li>Poursuites en vertu de la loi BIS</li>
          <li>Interdiction de vente ou d&apos;importation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Par conséquent, un certificat BIS pour les meubles en Inde revêt une
          importance juridique forte.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est importante pour les produits de
          meubles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour les meubles est critique pour plusieurs
          raisons :
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Sécurité et intégrité structurelle
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les défaillances des meubles peuvent causer des blessures ou des
          décès. Les normes BIS évaluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Capacité de charge</li>
          <li>Stabilité contre le basculement</li>
          <li>Résistance des joints</li>
          <li>Performance des matériaux</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Qualité et durabilité
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les produits de meubles certifiés garantissent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Longue durée de vie</li>
          <li>Résistance à l&apos;usure</li>
          <li>Performance uniforme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Confiance des consommateurs
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La marque de certification BIS instaure une confiance immédiate chez
          les acheteurs, les institutions et les acheteurs en gros.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Accès au marché
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          De nombreux appels d&apos;offres gouvernementaux, acheteurs
          institutionnels et grandes entreprises exigent des meubles certifiés
          BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Conformité légale
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La vente de meubles non certifiés sous les normes BIS obligatoires
          peut entraîner des pénalités et des actions légales.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produits de meubles couverts par la certification BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les meubles constituent une catégorie générale large sous le BIS,
          couvrant plusieurs types de produits, chacun régi par différentes
          normes indiennes (numéros IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Principales catégories de meubles couvertes :
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Chaises de travail
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilisées dans les bureaux, les usines et les espaces commerciaux. Les
          normes se concentrent sur l&apos;ergonomie, la stabilité et les
          performances de charge.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Chaises et tabourets à usage général
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilisés dans les maisons, les écoles et les espaces publics. Le BIS
          évalue la sécurité structurelle et la résistance des matériaux.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Tables et bureaux
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Inclut les bureaux de bureau, les tables d&apos;étude, les postes de
          travail. Les normes testent la capacité de charge et la durabilité de
          la surface.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Unités de stockage
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Armoires, cabinets, casiers, étagères. Accent sur la stabilité, les
          bords tranchants et l&apos;accès sécurisé.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Lits
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lits simples, lits doubles, lits pliants. Le BIS vérifie la résistance
          du cadre et les performances à long terme.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Lits superposés
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Très réglementés en raison des risques de sécurité. Focus sur les
          garde-corps, la sécurité de l&apos;échelle et la prévention des
          chutes.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Composites rembourrés pour meubles non domestiques
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilisés dans les bureaux, les hôtels, les auditoriums. Les normes
          incluent des tests de résistance au feu et de durabilité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Autres produits de meubles
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Meubles scolaires</li>
          <li>Sièges institutionnels</li>
          <li>Meubles d&apos;hôpital</li>
          <li>Meubles modulaires</li>
          <li>Systèmes de meubles métalliques et en bois</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque catégorie de produit a son propre numéro IS applicable, notifié
          séparément par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Normes BIS applicables aux meubles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qu&apos;est-ce que les normes BIS ?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les normes BIS sont des spécifications techniques publiées par le BIS
          pour définir :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Exigences des matériaux</li>
          <li>Paramètres de performance</li>
          <li>Méthodes d&apos;essai</li>
          <li>Directives de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification des numéros IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un numéro IS (Indian Standard Number) identifie de manière unique une
          norme applicable à un produit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processus de notification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le BIS émet des notifications BIS officielles rendant certaines normes
          obligatoires. Une fois notifiées :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La conformité devient obligatoire</li>
          <li>Les produits non certifiés sont illégaux</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Comment identifier la bonne norme BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifier la catégorie de produit</li>
          <li>Étudier la portée IS applicable</li>
          <li>Confirmer l&apos;applicabilité de la norme</li>
          <li>
            Éviter la sélection de la mauvaise norme (une erreur courante)
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Types de certification BIS applicables aux meubles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Licence BIS sous le schéma ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les produits de meubles sont généralement couverts par le schéma de
          certification ISI, qui implique :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tests de produits</li>
          <li>Inspection de l&apos;usine</li>
          <li>Audits de surveillance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Enregistrement BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;enregistrement BIS concerne principalement les produits
          électroniques et informatiques. Les meubles nécessitent généralement
          une licence BIS, pas un enregistrement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour les meubles en Inde
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 : Préparation pré-demande
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifier la norme IS applicable</li>
          <li>Évaluer la conformité de la conception du produit</li>
          <li>Préparer la documentation technique</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 : Demande BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Soumettre la demande BIS avec :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du produit</li>
          <li>Détails de fabrication</li>
          <li>Référence de la norme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 : Demande BIS en ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La demande est déposée via le portail en ligne du BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 : Tests de produits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Échantillons testés dans des laboratoires reconnus par le BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 : Inspection de l&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les agents du BIS vérifient :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processus de fabrication</li>
          <li>Contrôle qualité</li>
          <li>Installations d&apos;essai</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 : Octroi de la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          En cas de conformité, le BIS accorde la licence.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 : Utilisation de la marque de certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le fabricant peut apposer la marque BIS / marque ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour les meubles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les tests sont une partie obligatoire du processus
          d&apos;enregistrement BIS. Les meubles subissent des tests rigoureux
          pour garantir la sécurité et la durabilité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tests obligatoires pour les meubles :
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test de charge structurelle</li>
          <li>Test de stabilité</li>
          <li>Test de résistance des garde-corps</li>
          <li>Test d&apos;impact</li>
          <li>Test de risque de piégeage</li>
          <li>Test de résistance et d&apos;angle de l&apos;échelle</li>
          <li>Test de sécurité des matériaux</li>
          <li>Test de rayon et de netteté des bords</li>
          <li>Test de support du matelas</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les tests doivent être effectués uniquement dans un laboratoire
          reconnu par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS pour les meubles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Documents clés à inclure :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;enregistrement de l&apos;usine</li>
          <li>Dessins et spécifications du produit</li>
          <li>Détails des matières premières</li>
          <li>Rapports d&apos;essai</li>
          <li>Dossiers de contrôle qualité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Erreurs courantes de documentation :
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Référence de norme incorrecte</li>
          <li>Données d&apos;essai incomplètes</li>
          <li>Inadéquation dans la portée du produit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Coût de la certification BIS pour les meubles
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Composantes du coût du certificat BIS :
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande gouvernementaux</li>
          <li>Frais de test</li>
          <li>Frais d&apos;inspection</li>
          <li>Frais de licence</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Facteurs de coût de la certification BIS :
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Complexité du produit</li>
          <li>Nombre de modèles</li>
          <li>Exigences de test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Note : Les frais de conseil professionnel sont séparés des frais
          gouvernementaux.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Délai pour l&apos;enregistrement du certificat BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">Délai moyen :</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tests : 3–6 semaines</li>
          <li>Inspection : 1–2 semaines</li>
          <li>Octroi de licence : 2–4 semaines</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total : 8–12 semaines (environ)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comment obtenir la certification BIS en Inde pour les fabricants de
          meubles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Conseils pratiques :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Choisir la bonne norme IS</li>
          <li>Assurer la préparation de l&apos;usine</li>
          <li>Maintenir les dossiers d&apos;essai</li>
          <li>Éviter les erreurs de documentation</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Demande en ligne de certificat BIS – Aperçu pratique
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Défis du portail en ligne :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Erreurs techniques</li>
          <li>Problèmes de téléchargement de documents</li>
          <li>Confusion dans la sélection de la norme</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un bon accompagnement réduit les retards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Utilisation de la marque BIS et de la marque de certification BIS
          après approbation
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Règles de marquage :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Référence IS correcte</li>
          <li>Numéro de licence</li>
          <li>Taille et visibilité appropriées</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le non-respect peut entraîner une suspension.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis dans la certification BIS pour les meubles
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interprétation des normes</li>
          <li>Échecs des tests de produits</li>
          <li>Non-conformités d&apos;inspection</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Rôle des consultants BIS dans la certification des meubles
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les consultants BIS professionnels aident en :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifiant les bonnes normes</li>
          <li>Gérant les tests et l&apos;inspection</li>
          <li>Réduisant le temps d&apos;approbation</li>
          <li>Évitant les rejets coûteux</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour les meubles est une pierre angulaire de la
          qualité, de la sécurité, et de la conformité légale sur le marché
          indien du meuble en croissance. Que vous soyez un fabricant, un
          importateur ou un propriétaire de marque, l&apos;obtention d&apos;un
          certificat BIS pour les meubles en Inde garantit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformité réglementaire</li>
          <li>Confiance des consommateurs</li>
          <li>Succès à long terme sur le marché</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          En comprenant le processus de certification BIS, les normes, les coûts
          et les exigences de conformité, les entreprises peuvent naviguer en
          toute confiance dans le paysage réglementaire et construire des
          produits de meubles plus sûrs, plus solides et plus fiables pour le
          marché indien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Questions fréquemment posées sur la licence BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La certification BIS est-elle obligatoire pour tous les produits
              de meubles en Inde ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Non, la certification BIS n&apos;est obligatoire que pour les
              produits de meubles qui sont couverts par les normes BIS
              notifiées. Cependant, une fois qu&apos;une catégorie de produits
              de meubles est notifiée par le Bureau of Indian Standards, la
              fabrication, l&apos;importation, la vente ou la distribution de ce
              produit sans une licence BIS valide devient illégale en Inde.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Quels produits de meubles nécessitent une licence BIS au lieu
              d&apos;un enregistrement BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Les produits de meubles relèvent généralement du schéma de
              certification ISI, qui nécessite une licence BIS, pas un
              enregistrement BIS. L&apos;enregistrement BIS (CRS)
              s&apos;applique principalement aux produits électroniques et
              informatiques, tandis que les produits de meubles nécessitent des
              tests + inspection de l&apos;usine + licence BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Les meubles importés peuvent-ils être vendus en Inde sans
              certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Non. Les produits de meubles importés couverts par les normes BIS
              obligatoires doivent avoir la certification BIS avant le
              dédouanement. L&apos;importation de meubles non certifiés peut
              entraîner :
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Rétention douanière</li>
              <li>Réexportation ou destruction</li>
              <li>Lourdes amendes</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Les fabricants étrangers doivent obtenir une licence BIS avant
              d&apos;exporter des meubles vers l&apos;Inde.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Les fabricants de meubles étrangers peuvent-ils demander la
              certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui. Les fabricants étrangers peuvent demander sous le schéma de
              certification des fabricants étrangers (FMCS). Ils doivent :
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Nommer un représentant indien autorisé (AIR)</li>
              <li>Se conformer aux normes indiennes</li>
              <li>
                Permettre l&apos;inspection de l&apos;usine BIS à
                l&apos;étranger.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La certification BIS est-elle requise pour les fabricants de
              meubles artisanaux ou à petite échelle ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, si le produit de meuble est couvert par une norme BIS
              obligatoire, alors même les PME, les startups et les unités à
              petite échelle doivent obtenir la certification BIS. Il n&apos;y a
              pas d&apos;exemption basée sur le volume de production.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La certification BIS est-elle requise pour les meubles en bois ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, les produits de meubles en bois tels que les lits, les
              chaises, les tables, les bureaux et les unités de stockage peuvent
              nécessiter la certification BIS s&apos;ils relèvent de normes
              notifiées. Les normes BIS s&apos;appliquent aux meubles en bois et
              métalliques, selon le type de produit et l&apos;utilisation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Une licence BIS peut-elle couvrir plusieurs modèles de meubles ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, plusieurs modèles ou variantes peuvent être couverts par une
              seule licence BIS, à condition :
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Ils relèvent de la même norme IS</li>
              <li>
                Les paramètres de construction, de matériau et de conception
                sont similaires
              </li>
              <li>Le BIS approuve le regroupement lors de la demande.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La certification BIS peut-elle être transférée à un autre
              fabricant ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Non. La licence BIS n&apos;est pas transférable. Chaque fabricant
              doit obtenir son propre certificat BIS, même si la conception du
              produit est identique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Qu&apos;est-ce que le certificat BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              C&apos;est une preuve officielle de conformité aux normes BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La certification BIS est-elle obligatoire pour les meubles ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, pour les produits de meubles couverts par des normes
              notifiées.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Comment obtenir la certification BIS en Inde ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Par le biais de tests, d&apos;inspection et d&apos;approbation de
              licence BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Qu&apos;est-ce que la marque BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Une marque de conformité montrant l&apos;approbation BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Coût de la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dépend du type de produit, des tests et de la portée.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Forme complète de BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="LMPC logo"
                title="LMPC logo"
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
              MARQUE ISI (BIS) pour fabricants indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
