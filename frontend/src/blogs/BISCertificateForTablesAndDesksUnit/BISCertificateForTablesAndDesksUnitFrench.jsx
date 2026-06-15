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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

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
                    Certification BIS pour Tables et Bureaux (IS 17633:2022)
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
          Certification BIS pour Tables et Bureaux (IS 17633:2022) – Guide Complet
          de Certification Marque ISI
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="Licence BIS pour Tables et Bureaux"
            alt="Certification BIS pour Tables et Bureaux - Guide Marque ISI IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les tables et bureaux comptent parmi les produits de mobilier les plus
          largement utilisés dans les bureaux, les établissements d&apos;enseignement,
          les établissements commerciaux, les organisations gouvernementales et les
          espaces résidentiels. Comme ces produits sont censés résister à un usage
          régulier tout en garantissant la sécurité de l&apos;utilisateur, la stabilité
          et la durabilité, la conformité aux normes de qualité reconnues est devenue
          de plus en plus importante pour les fabricants et les importateurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          En Inde, les tables et bureaux couverts par IS 17633:2022 doivent se
          conformer aux exigences applicables de qualité et de sécurité prescrites par
          le Bureau of Indian Standards (BIS). Les fabricants qui satisfont avec succès
          à ces exigences peuvent obtenir une licence BIS et utiliser la Marque ISI sur
          leurs produits, démontrant ainsi la conformité à la Norme Indienne pertinente.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification évalue divers aspects de la performance du
          produit, y compris la résistance, la stabilité, la durabilité, la qualité de
          fabrication, les dimensions et la sécurité globale. La conformité aide non
          seulement les entreprises à satisfaire aux exigences réglementaires, mais
          améliore également la crédibilité du produit et son acceptation sur le marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique tout ce que les fabricants, les importateurs, les
          marques de mobilier et les professionnels des achats doivent savoir sur la
          Certification BIS pour Tables et Bureaux selon IS 17633:2022, y compris
          l&apos;applicabilité, les exigences de certification, les paramètres de test,
          la documentation, les avantages et le processus de certification.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Points Clés de la Certification BIS pour Tables et Bureaux
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particularité
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Détails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produit", "Tables et Bureaux"],
                ["Norme Applicable", "IS 17633:2022"],
                ["Type de Certification", "Certification de Produit BIS"],
                ["Marque Applicable", "Marque ISI"],
                ["Schéma de Certification", "Schéma-I (Certification Marque ISI)"],
                ["Autorité de Réglementation", "Bureau of Indian Standards (BIS)"],
                ["Secteur Applicable", "Mobilier"],
                [
                  "Demandeurs Éligibles",
                  "Fabricants Indiens et Fabricants Étrangers",
                ],
                [
                  "Exigence de Conformité",
                  "Obligatoire sous le QCO Mobilier applicable (Ordre de Contrôle Qualité)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Schéma de Certification" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schéma-I (Certification Marque ISI)
                      </a>
                    ) : particular === "Exigence de Conformité" ? (
                      <>
                        Obligatoire sous le {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>QCO Mobilier applicable (Ordre de Contrôle Qualité)</strong>
                        </a>
                        
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS pour Tables et Bureaux ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS pour Tables et Bureaux est un processus d&apos;évaluation
          de la conformité mené dans le cadre du Schéma de Certification de Produit du
          Bureau of Indian Standards (BIS). La certification confirme que le produit se
          conforme aux exigences spécifiées dans IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Après une certification réussie, les fabricants sont autorisés à utiliser la
          Marque ISI sur leurs produits, indiquant la conformité à la Norme Indienne
          applicable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La certification vise à garantir que les tables et bureaux fournis sur le
          marché indien répondent aux exigences établies relatives à :
        </p>

        <ul className={LIST_CLASS}>
          <li>La résistance structurelle et la stabilité lors d&apos;une utilisation normale</li>
          <li>La durabilité, la sécurité de l&apos;utilisateur et la qualité de fabrication des matériaux</li>
          <li>Toutes les exigences de performance selon IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les acheteurs et les agences d&apos;achat, la Marque ISI sert d&apos;assurance
          que le mobilier a été évalué selon des références de qualité et de sécurité
          reconnues.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aperçu de IS 17633:2022 pour Tables et Bureaux
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 est la Norme Indienne qui spécifie les exigences de performance
          et de sécurité pour les tables et bureaux destinés à des utilisateurs adultes
          dans des applications assises et debout.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme couvre à la fois :
        </p>

        <ul className={LIST_CLASS}>
          <li>Les tables et bureaux entièrement fabriqués (prêts à l&apos;emploi)</li>
          <li>Les unités prêtes à assembler (RTA) — testées après assemblage complet</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif de la norme est d&apos;établir des exigences minimales de
          performance et de sécurité qui aident à garantir que le mobilier reste stable,
          durable et sûr tout au long de sa durée de service prévue.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Domaines Clés Couverts par IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme se concentre sur plusieurs caractéristiques de performance
          importantes, notamment :
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Exigences de Résistance —</strong> Les tables et bureaux doivent
            résister aux charges prévues lors d&apos;une utilisation normale sans
            défaillance ni déformation excessive.
          </li>
          <li>
            <strong>Exigences de Stabilité —</strong> Le mobilier doit rester stable en
            utilisation et résister au basculement dans des conditions de charge
            prévisibles.
          </li>
          <li>
            <strong>Exigences de Durabilité —</strong> Les produits doivent conserver
            leur performance et leur intégrité structurelle après une utilisation
            répétée sur une période prolongée.
          </li>
          <li>
            <strong>Exigences de Sécurité —</strong> La conception et la construction
            doivent minimiser les risques liés à l&apos;instabilité, aux bords
            tranchants, à une construction dangereuse ou à une défaillance structurelle.
          </li>
          <li>
            <strong>Qualité de Fabrication et de Construction —</strong> La qualité de
            fabrication, l&apos;assemblage, les joints, les fixations et la construction
            globale sont évalués pour une performance fiable à long terme.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          La Certification BIS pour Tables et Bureaux est-elle Obligatoire en Inde ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Oui. Les tables et bureaux couverts par l&apos;Ordre de Contrôle Qualité (QCO)
          Mobilier applicable doivent se conformer à la Norme Indienne pertinente et
          obtenir la Certification BIS avant d&apos;être fabriqués, importés, vendus,
          distribués ou proposés sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;objectif de la certification obligatoire est de :
        </p>

        <ul className={LIST_CLASS}>
          <li>Garantir une meilleure qualité des produits dans toute l&apos;industrie du mobilier</li>
          <li>Protéger la sécurité des consommateurs grâce à des normes vérifiées</li>
          <li>Empêcher l&apos;entrée de mobilier de qualité inférieure sur le marché</li>
          <li>Promouvoir la standardisation et des références de qualité uniformes</li>
          <li>Renforcer la confiance des acheteurs dans les produits certifiés Marque ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants couverts par les réglementations applicables doivent obtenir une
          licence BIS et utiliser la Marque ISI conformément aux exigences du BIS.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Consultez également les Produits de Mobilier Couverts par la Certification
            BIS Obligatoire —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>Certification BIS pour le mobilier</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée des Produits Couverts par IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La portée de IS 17633:2022 s&apos;étend à diverses catégories de tables et
          bureaux conçus pour des utilisateurs adultes dans des environnements
          résidentiels, commerciaux, institutionnels et de travail.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Exemples de produits couramment couverts :
        </p>

        <ul className={LIST_CLASS}>
          <li>Bureaux de bureau, d&apos;étude et d&apos;ordinateur</li>
          <li>Postes de travail et bureaux polyvalents</li>
          <li>Tables de conférence et de réunion</li>
          <li>Tables institutionnelles et de laboratoire</li>
          <li>Mobilier de coworking et à usage commercial</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent examiner attentivement les spécifications du produit et
          l&apos;utilisation prévue pour déterminer si leurs produits entrent dans la
          portée de IS 17633:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences Techniques Clés sous IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour obtenir la certification BIS, les tables et bureaux doivent satisfaire à
          diverses exigences de performance et de sécurité spécifiées par la norme.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Intégrité Structurelle —</strong> Les produits doivent fonctionner
            sous les charges prescrites ; les joints et les structures de support
            restent sécurisés pendant les tests.
          </li>
          <li>
            <strong>Performance de Capacité de Charge —</strong> Les tables et bureaux
            doivent supporter les charges spécifiées sans déformation, dommage ou
            défaillance inacceptable.
          </li>
          <li>
            <strong>Performance de Stabilité —</strong> Le mobilier doit rester stable en
            utilisation et réduire les risques de basculement pouvant causer des
            blessures ou des dommages matériels.
          </li>
          <li>
            <strong>Performance de Durabilité —</strong> Les produits doivent résister à
            des cycles d&apos;utilisation répétés tout en maintenant une performance
            acceptable.
          </li>
          <li>
            <strong>Matériaux et Qualité de Fabrication —</strong> Les matériaux, la
            finition et les méthodes d&apos;assemblage doivent respecter les contrôles de
            qualité pour une production cohérente.
          </li>
          <li>
            <strong>Considérations de Sécurité —</strong> La conception doit minimiser
            les dangers liés à l&apos;utilisation du mobilier pour les consommateurs et les
            acheteurs institutionnels.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS est Importante pour les Fabricants de Mobilier
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le marché indien du mobilier est devenu de plus en plus soucieux de la qualité.
          Les départements gouvernementaux, les établissements d&apos;enseignement, les
          acheteurs d&apos;entreprise et les grandes agences d&apos;achat préfèrent souvent
          les produits conformes aux normes reconnues.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;obtention de la certification BIS aide les fabricants à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Prouver la conformité aux Normes Indiennes applicables</li>
          <li>Renforcer la crédibilité du produit et la réputation de la marque</li>
          <li>Gagner la confiance des clients et des acheteurs institutionnels</li>
          <li>Améliorer l&apos;acceptation dans les achats gouvernementaux et d&apos;entreprise</li>
          <li>Renforcer les pratiques internes de gestion de la qualité</li>
          <li>Anticiper l&apos;évolution des exigences réglementaires</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les fabricants en quête de croissance à long terme, la certification BIS
          est souvent considérée à la fois comme une exigence de conformité et comme un
          avantage commercial stratégique.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test pour Tables et Bureaux sous IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avant qu&apos;un fabricant puisse obtenir la certification BIS, les échantillons
          de produits doivent être évalués selon les exigences applicables de
          IS 17633:2022 par des tests dans un laboratoire reconnu par le BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif des tests est de vérifier que le mobilier répond aux normes
          prescrites en matière de sécurité, de stabilité, de résistance, de durabilité et
          de performance globale.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Bien que les paramètres de test exacts puissent varier selon la conception du
          produit et les exigences de certification, les fabricants sont généralement
          évalués pour les caractéristiques suivantes :
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conception et Qualité de Fabrication —</strong> La qualité de
            construction, l&apos;assemblage, la finition et l&apos;intégrité globale du
            produit sont examinés pour une utilisation sûre à long terme.
          </li>
          <li>
            <strong>Vérification Dimensionnelle —</strong> Les mesures critiques sont
            vérifiées par rapport à la norme et aux spécifications de produit approuvées.
          </li>
          <li>
            <strong>Test de Stabilité —</strong> Confirme que le produit reste stable en
            utilisation normale et signale les faiblesses de basculement ou
            structurelles.
          </li>
          <li>
            <strong>Test de Charge Statique —</strong> Vérifie la capacité de charge sans
            défaillance, déformation excessive ou dommage.
          </li>
          <li>
            <strong>Test de Résistance —</strong> Évalue les cadres, les joints et les
            supports sous les contraintes opérationnelles lors d&apos;une utilisation
            régulière.
          </li>
          <li>
            <strong>Évaluation de la Durabilité —</strong> Vérifie le maintien de la
            performance après des cycles d&apos;utilisation répétés.
          </li>
          <li>
            <strong>Évaluation de la Sécurité —</strong> Écarte les risques évitables liés
            à l&apos;instabilité, aux défauts ou aux caractéristiques de conception
            dangereuses.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour Tables et Bureaux
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants cherchant à obtenir la certification BIS sous IS 17633:2022
          doivent suivre un processus de certification structuré établi par le Bureau of
          Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bien que les exigences spécifiques puissent varier selon le type de demandeur et
          le lieu de fabrication, le processus général reste similaire.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 1 : Évaluation de la Portée du Produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La première étape consiste à déterminer si le produit entre dans la portée de
          IS 17633:2022 et de l&apos;Ordre de Contrôle Qualité applicable. Une revue
          technique des spécifications du produit, de l&apos;utilisation prévue, des
          matériaux et de la construction est généralement effectuée avant d&apos;initier le
          processus de certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 2 : Préparation de la Documentation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le fabricant prépare la documentation requise, y compris les informations sur
          l&apos;entreprise, les détails de fabrication, les spécifications du produit, les
          procédures de contrôle qualité et les documents techniques justificatifs. Une
          documentation appropriée est essentielle car des lacunes à ce stade peuvent
          retarder la certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 3 : Test du Produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les échantillons de produits sont testés dans un laboratoire reconnu par le BIS
          pour vérifier la conformité aux exigences de IS 17633:2022. Le rapport de test
          sert de l&apos;un des principaux documents techniques soutenant la demande de
          certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 4 : Soumission de la Demande
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La demande BIS est soumise avec les documents justificatifs, les rapports de
          test, les informations de fabrication et les dossiers de gestion de la qualité.
          La demande est examinée par le BIS pour vérifier son exhaustivité et sa
          conformité technique.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 5 : Évaluation de l&apos;Usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le BIS peut effectuer une inspection de l&apos;usine pour évaluer :
        </p>
        <ul className={LIST_CLASS}>
          <li>L&apos;infrastructure de fabrication et les capacités de production</li>
          <li>Les systèmes de contrôle qualité et les installations de test internes</li>
          <li>Les contrôles des matières premières et les mécanismes de traçabilité du produit</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif est de vérifier la capacité du fabricant à produire de manière
          cohérente des produits conformes.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 6 : Évaluation et Revue
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le BIS examine la demande, les constatations d&apos;inspection et les rapports de
          test de laboratoire avant de prendre une décision de certification. Toute
          observation soulevée pendant le processus de revue doit être traitée par le
          demandeur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 7 : Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Après l&apos;achèvement réussi de toutes les exigences, le BIS octroie la licence
          et autorise le fabricant à utiliser la Marque ISI sur les tables et bureaux
          certifiés.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les Fabricants Indiens
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants indiens demandent généralement la certification selon la
          procédure de certification nationale prescrite par le BIS. Le processus comprend
          généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>Le test du produit dans un laboratoire reconnu par le BIS</li>
          <li>La soumission de la demande avec les documents justificatifs</li>
          <li>L&apos;inspection de l&apos;usine et la revue technique par le BIS</li>
          <li>L&apos;octroi de la licence BIS et l&apos;autorisation de la Marque ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une fois certifiés, les fabricants doivent continuer à se conformer aux
          exigences du BIS et maintenir une qualité de produit cohérente tout au long de
          la période de licence.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les Fabricants Étrangers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants étrangers ayant l&apos;intention d&apos;exporter des tables et
          bureaux vers l&apos;Inde doivent également obtenir la certification BIS avant de
          fournir des produits couverts par l&apos;Ordre de Contrôle Qualité applicable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le processus de certification implique généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>La nomination d&apos;un Représentant Indien Autorisé (AIR)</li>
          <li>Le test du produit et l&apos;évaluation de l&apos;usine à l&apos;étranger</li>
          <li>La revue de la documentation et l&apos;approbation de la certification BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants étrangers doivent assurer une conformité continue aux exigences
          du BIS pour maintenir la validité de la certification.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS des Tables et Bureaux
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les exigences de documentation peuvent varier selon le fabricant et la voie de
          certification. Cependant, les documents suivants sont couramment requis pendant
          le processus de certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Documents Commerciaux et Légaux</h3>
        <ul className={LIST_CLASS}>
          <li>Enregistrement de l&apos;entreprise, licence de fabrication et GST (le cas échéant)</li>
          <li>Détails du signataire autorisé et preuve d&apos;identité</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informations de Fabrication</h3>
        <ul className={LIST_CLASS}>
          <li>Diagramme de flux de processus, plan de l&apos;usine et détails des machines</li>
          <li>Infrastructure de production et dossiers de capacité</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Informations sur le Produit</h3>
        <ul className={LIST_CLASS}>
          <li>Spécifications du produit, dessins techniques et catalogue</li>
          <li>Nomenclature et détails des matériaux/composants</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documents de Contrôle Qualité</h3>
        <ul className={LIST_CLASS}>
          <li>Procédures de test internes, d&apos;inspection et de contrôle qualité</li>
          <li>Dossiers de contrôle qualité et rapports d&apos;étalonnage des équipements</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Documents de Certification</h3>
        <ul className={LIST_CLASS}>
          <li>Rapports de test de laboratoire et formulaires de demande BIS remplis</li>
          <li>Déclarations, engagements et autres documents prescrits par le BIS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent s&apos;assurer que toute la documentation est exacte,
          complète et cohérente avant la soumission.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Courants Pendant la Certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bien que le processus de certification soit simple lorsqu&apos;il est
          correctement géré, les fabricants rencontrent souvent plusieurs défis.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interprétation technique —</strong> Faire correspondre les exigences
            de IS 17633:2022 à des conceptions de produits spécifiques peut être difficile
            sans conseils d&apos;experts.
          </li>
          <li>
            <strong>Échecs de test —</strong> Des joints faibles, une mauvaise stabilité
            ou des problèmes de matériaux conduisent souvent au rejet des tests en
            laboratoire.
          </li>
          <li>
            <strong>Lacunes de documentation —</strong> Des dossiers incomplets ou
            incohérents sont une cause fréquente de retards de demande.
          </li>
          <li>
            <strong>Conformité de l&apos;usine —</strong> Les systèmes de contrôle qualité,
            la traçabilité ou les contrôles de production peuvent nécessiter une mise à
            niveau avant l&apos;octroi de la licence.
          </li>
          <li>
            <strong>Coordination réglementaire —</strong> Aligner les tests en
            laboratoire, les inspections et les suivis du BIS prend du temps sans un
            soutien structuré.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages d&apos;une Assistance Professionnelle à la Certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Travailler avec un consultant BIS expérimenté peut aider les fabricants à éviter
          des retards coûteux et à rationaliser le parcours de certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le soutien professionnel comprend généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>La revue de la portée du produit et l&apos;interprétation des normes</li>
          <li>La préparation de la documentation et le dépôt de la demande</li>
          <li>La coordination des tests en laboratoire et de l&apos;inspection de l&apos;usine</li>
          <li>La conformité continue et le soutien post-certification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cela permet aux fabricants de se concentrer sur la production tout en
          garantissant que les exigences réglementaires sont traitées efficacement.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi Choisir Sun Certifications India ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India est un cabinet de conseil en conformité réglementaire
          qui assiste les fabricants, les importateurs, les exportateurs et les
          entreprises avec les exigences de certification et d&apos;approbation à travers
          l&apos;Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nos experts fournissent un soutien de bout en bout pour la Certification BIS pour
          Tables et Bureaux sous IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Nos Services Comprennent</h3>

        <ul className={LIST_CLASS}>
          <li>L&apos;évaluation de l&apos;applicabilité du produit et le conseil en conformité BIS</li>
          <li>Le soutien à la documentation et la gestion de la demande</li>
          <li>La coordination des tests et l&apos;assistance à l&apos;inspection de l&apos;usine</li>
          <li>La communication réglementaire et le soutien à la conformité post-certification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre objectif est d&apos;aider les entreprises à naviguer efficacement dans le
          processus de certification tout en minimisant les retards et les défis de
          conformité.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certification BIS pour Tables et Bureaux sous IS 17633:2022 est une exigence
          importante pour les fabricants cherchant à fournir des produits de mobilier
          conformes sur le marché indien. La certification aide à garantir que les tables
          et bureaux répondent aux normes établies relatives à la sécurité, la stabilité,
          la durabilité, la résistance et la qualité.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          En obtenant la Certification BIS et en utilisant la Marque ISI, les fabricants
          peuvent démontrer la conformité aux Normes Indiennes, améliorer la confiance des
          clients, renforcer leur position sur le marché et soutenir la croissance
          commerciale à long terme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si vous prévoyez d&apos;obtenir la Certification BIS pour Tables et Bureaux sous
          IS 17633:2022, Sun Certifications India peut vous assister avec un soutien à la
          conformité de bout en bout, vous aidant à naviguer dans le processus de
          certification de manière efficace et confiante.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certification BIS pour Tables et Bureaux (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Qu&apos;est-ce que IS 17633:2022 ?</strong>
              <br />
              IS 17633:2022 est la Norme Indienne publiée par le Bureau of Indian
              Standards (BIS) qui fixe les exigences minimales de performance, de
              stabilité, de durabilité et de sécurité pour les tables et bureaux destinés
              à des utilisateurs adultes dans des applications assises et debout.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. La certification BIS est-elle obligatoire pour les tables et bureaux ?</strong>
              <br />
              Oui — pour les produits couverts par l&apos;Ordre de Contrôle Qualité (QCO)
              Mobilier applicable. Les fabricants et importateurs doivent détenir une
              licence BIS valide et se conformer à IS 17633:2022 avant de fabriquer,
              importer, vendre ou distribuer un tel mobilier en Inde.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Quelle marque de certification s&apos;applique aux tables et bureaux ?</strong>
              <br />
              Les tables et bureaux certifiés sont autorisés à porter la Marque ISI dans
              le cadre du Schéma de Certification de Produit BIS, indiquant que le produit
              est conforme à la Norme Indienne applicable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Qui peut demander la certification BIS ?</strong>
              <br />
              Les fabricants indiens et les fabricants étrangers peuvent tous deux
              demander la certification, à condition que leurs tables et bureaux entrent
              dans la portée du QCO applicable et répondent aux exigences de
              IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Quel est l&apos;objectif de la certification BIS ?</strong>
              <br />
              La certification BIS confirme que le mobilier répond aux références
              reconnues au niveau national en matière de sécurité, de performance
              structurelle, de durabilité et de qualité de fabrication — contribuant à
              protéger les utilisateurs finaux et à maintenir les normes de qualité sur le
              marché.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Quels produits sont couverts par IS 17633:2022 ?</strong>
              <br />
              La norme couvre les tables et bureaux à usage adulte utilisés dans les
              bureaux, les établissements d&apos;enseignement, les établissements
              commerciaux et les environnements de travail — y compris les bureaux de
              bureau, les postes de travail, les tables d&apos;étude, les tables de
              conférence et les catégories de mobilier similaires.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Le test en laboratoire est-il obligatoire ?</strong>
              <br />
              Oui. Les échantillons de produits doivent être testés dans un laboratoire
              reconnu par le BIS, et le rapport de test résultant est un document clé de la
              demande de certification pour démontrer la conformité à IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Les tables et bureaux importés peuvent-ils être vendus sans certification BIS ?</strong>
              <br />
              Non. Les produits importés relevant de la certification obligatoire ne
              peuvent pas être légalement fournis en Inde sans approbation BIS valide. Les
              importateurs doivent assurer la conformité à la norme applicable avant de
              mettre les produits sur le marché.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Quel est le rôle d&apos;une inspection de l&apos;usine ?</strong>
              <br />
              Le BIS effectue une évaluation de l&apos;usine pour vérifier que le fabricant
              maintient une infrastructure de production adéquate, des systèmes de contrôle
              qualité et une traçabilité du produit pour fabriquer de manière cohérente des
              tables et bureaux conformes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Comment Sun Certifications India peut-elle aider ?</strong>
              <br />
              Sun Certifications India offre une assistance de bout en bout — y compris
              l&apos;évaluation de la portée du produit, la préparation de la documentation,
              la coordination des tests en laboratoire, la gestion de la demande BIS, la
              préparation à l&apos;inspection de l&apos;usine et le soutien à la conformité
              post-certification pour les tables et bureaux sous IS 17633:2022.
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ressources Connexes
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Licence Marque ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Certificat BIS FMCS</a>
          </li>
        </ul>

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
