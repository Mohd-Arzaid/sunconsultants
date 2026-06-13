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

const BISCertificateForWorkChairsFrench = () => {
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

export default BISCertificateForWorkChairsFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour chaises de travail | Licence BIS IS 17631:2022";
  const ogTitle =
    "Certification BIS pour chaises de travail – Guide IS 17631:2022";
  const twitterTitle = "Licence BIS pour chaises de travail | IS 17631:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour chaises de travail selon IS 17631:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour chaises de travail selon IS 17631:2022. Connaître le processus, le coût, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour chaises de travail selon IS 17631:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour chaises de travail, Licence BIS pour chaises de travail, IS 17631:2022, Certification BIS pour chaises de travail";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    Certification BIS pour chaises de travail (IS 17631:2022)
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
          Certification BIS pour chaises de travail (IS 17631:2022) – Guide
          complet de certification Marque ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licence BIS pour chaises de travail"
            alt="Certification BIS pour chaises de travail - Guide Marque ISI IS 17631:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises de travail sont devenues un élément essentiel des
          environnements de travail modernes, des établissements d&apos;enseignement,
          des bureaux gouvernementaux, des espaces de coworking et des bureaux à
          domicile. Alors que les organisations accordent une importance accrue au
          confort des employés, à la productivité, à l&apos;ergonomie au travail et
          au bien-être professionnel, la demande de chaises de travail de haute
          qualité ne cesse de croître.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une chaise mal conçue peut avoir un impact négatif sur la posture, le
          confort et la productivité. Pour cette raison, la qualité, la sécurité,
          la durabilité et les performances ergonomiques sont des considérations
          essentielles pour les fabricants, les acheteurs et les agences
          d&apos;approvisionnement. Afin de garantir des normes de qualité
          uniformes dans l&apos;industrie, le Bureau of Indian Standards (BIS) a
          établi IS 17631:2022, la norme indienne applicable aux chaises de
          travail.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants couverts par le cadre réglementaire applicable sont tenus
          d&apos;obtenir la certification BIS et d&apos;utiliser la marque ISI sur
          les produits conformes. La certification BIS démontre que la chaise de
          travail a été évaluée selon les exigences prescrites en matière de
          sécurité, de résistance, de stabilité, de durabilité et de performance
          ergonomique.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique tout ce que les fabricants, importateurs,
          marques de mobilier, professionnels de l&apos;approvisionnement et
          propriétaires d&apos;entreprise doivent savoir sur la certification BIS
          pour les chaises de travail selon IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aperçu rapide de la certification BIS pour les chaises de travail
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Élément
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Détails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produit", "Chaises de travail"],
                ["Norme indienne applicable", "IS 17631:2022"],
                ["Type de certification", "Certification de produit BIS"],
                [
                  "Schéma de certification applicable",
                  "Schéma I (Certification Marque ISI)",
                ],
                ["Marque applicable", "Marque ISI"],
                ["Autorité réglementaire", "Bureau of Indian Standards (BIS)"],
                ["Ministère applicable", "Ministère du Commerce et de l'Industrie"],
                [
                  "Exigence de conformité",
                  "Obligatoire en vertu du QCO Meubles applicable (Quality Control Order)",
                ],
                [
                  "Demandeurs éligibles",
                  "Fabricants indiens et fabricants étrangers ",
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
                    {particular === "Schéma de certification applicable" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schéma I (Certification Marque ISI)
                      </a>
                    ) : particular === "Exigence de conformité" ? (
                      <>
                        Obligatoire en vertu du{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>QCO Meubles applicable (Quality Control Order)</strong>
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
          Qu&apos;est-ce que la certification BIS pour les chaises de travail ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour les chaises de travail est un processus
          d&apos;évaluation de la conformité mené dans le cadre du schème de
          certification de produits du Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif de la certification est de vérifier que les chaises de
          travail respectent les exigences spécifiées dans IS 17631:2022. Après une
          certification réussie, les fabricants sont autorisés à utiliser la marque
          ISI sur leurs produits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le processus de certification évalue divers aspects de performance et de
          sécurité des chaises de travail, notamment :
        </p>

        <ul className={LIST_CLASS}>
          <li>Conception ergonomique</li>
          <li>Intégrité structurelle</li>
          <li>Stabilité</li>
          <li>Durabilité</li>
          <li>Exigences de sécurité</li>
          <li>Qualité de fabrication</li>
          <li>Performance du produit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La marque ISI garantit que le produit a été évalué selon les normes
          indiennes reconnues et répond aux exigences de qualité prescrites.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est importante pour les chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises de travail sont utilisées pendant de longues périodes dans
          les bureaux, les établissements d&apos;enseignement, les établissements
          commerciaux et les espaces de travail à domicile. Comme les utilisateurs
          passent une part importante de leur journée assis, la qualité et la
          performance ergonomique de ces chaises affectent directement le confort
          et l&apos;efficacité au travail.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La certification BIS contribue à garantir que les chaises de travail
          certifiées :
        </p>

        <ul className={LIST_CLASS}>
          <li>Respectent les exigences de sécurité prescrites</li>
          <li>Offrent des performances fiables</li>
          <li>Présentent une résistance structurelle adéquate</li>
          <li>Maintiennent leur stabilité pendant l&apos;utilisation</li>
          <li>Assurent une durabilité à long terme</li>
          <li>Se conforment aux normes de qualité indiennes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les fabricants, la certification permet de démontrer la qualité du
          produit tout en facilitant la conformité réglementaire et
          l&apos;acceptation sur le marché.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aperçu de IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 est la norme indienne qui spécifie les exigences pour les
          chaises de travail.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme établit des exigences relatives à :
        </p>

        <ul className={LIST_CLASS}>
          <li>La sécurité</li>
          <li>La résistance</li>
          <li>La stabilité</li>
          <li>La durabilité</li>
          <li>Les considérations ergonomiques</li>
          <li>La performance fonctionnelle</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif est de garantir que les chaises de travail sont capables
          de fournir des performances sûres et fiables lors d&apos;une utilisation
          prolongée dans les environnements de travail.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Portée de IS 17631:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selon la norme, IS 17631:2022 couvre les chaises de travail et
          s&apos;applique à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Chaises de travail entièrement fabriquées</li>
          <li>Chaises de travail assemblées</li>
          <li>Chaises de travail prêtes à assembler après assemblage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les exigences de la norme s&apos;appliquent au produit assemblé destiné à
          l&apos;utilisation.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Types de chaises de travail couvertes par IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Selon la conception du produit et l&apos;application prévue, la norme
          peut s&apos;appliquer à diverses catégories de sièges de travail,
          notamment :
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Chaises de bureau —</strong> Sièges utilisés dans les bureaux
            d&apos;entreprise, les services administratifs et les environnements
            professionnels.
          </li>
          <li>
            <strong>Chaises de tâche —</strong> Chaises conçues pour le travail
            quotidien au bureau, les postes de travail et les tâches assises
            routinières.
          </li>
          <li>
            <strong>Chaises de travail réglables —</strong> Modèles avec des
            fonctions réglables en hauteur, inclinaison ou autres pour améliorer le
            confort et l&apos;ergonomie.
          </li>
          <li>
            <strong>Chaises de travail institutionnelles —</strong> Chaises
            fournies aux écoles, collèges, bureaux gouvernementaux et
            établissements commerciaux.
          </li>
          <li>
            <strong>Chaises de bureau à domicile —</strong> Chaises de travail
            conçues pour le télétravail, les freelances et les bureaux
            résidentiels.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Examinez attentivement la conception du produit, le mécanisme et
          l&apos;usage prévu pour confirmer si votre chaise relève de la portée de
          IS 17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Consultez également les produits de mobilier couverts par la
            certification BIS obligatoire —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>Certification BIS pour meubles</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences clés selon IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme se concentre sur plusieurs caractéristiques de performance
          importantes qui contribuent à la qualité et à la sécurité des chaises de
          travail.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conception ergonomique —</strong> Traite du confort de
            l&apos;utilisateur, du support du siège et du dossier, de
            l&apos;ajustabilité et de la posture correcte pour réduire la fatigue
            et améliorer la productivité au travail.
          </li>
          <li>
            <strong>Exigences de résistance —</strong> Le cadre, les joints et les
            structures de support doivent résister à une utilisation normale sans
            défaillance ni perte d&apos;intégrité.
          </li>
          <li>
            <strong>Exigences de stabilité —</strong> Les chaises doivent résister
            au basculement et rester stables pendant l&apos;utilisation assise
            régulière et les mouvements.
          </li>
          <li>
            <strong>Exigences de durabilité —</strong> Les produits doivent
            performer de manière constante après une utilisation quotidienne
            prolongée et répétée sur leur durée de vie prévue.
          </li>
          <li>
            <strong>Exigences de sécurité —</strong> La conception et la
            construction doivent minimiser les risques évitables liés à
            l&apos;instabilité, aux défauts ou à une fabrication dangereuse.
          </li>
          <li>
            <strong>Qualité des matériaux —</strong> Les composants et finitions
            doivent répondre aux normes de qualité qui garantissent des performances
            sûres, durables et fiables.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour la certification BIS des chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avant l&apos;octroi de la certification, les échantillons de produits
          sont évalués par des tests dans un laboratoire reconnu. Les tests
          permettent de vérifier la conformité aux exigences spécifiées dans IS
          17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Principaux tests effectués</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Conception et finition"],
                ["7.3.1", "Renversement du bord avant"],
                ["7.3.2", "Renversement vers l'avant"],
                [
                  "7.3.3",
                  "Renversement vers l'avant pour chaises avec repose-pieds",
                ],
                [
                  "7.3.4",
                  "Renversement latéral pour chaises sans accoudoirs",
                ],
                [
                  "7.3.5",
                  "Renversement latéral pour chaises avec accoudoirs",
                ],
                [
                  "7.3.6",
                  "Renversement vers l'arrière pour chaises sans dossier",
                ],
                ["7.4.1", "Test de charge statique du bord avant du siège"],
                ["7.4.2", "Test de charge statique combiné siège et dossier"],
                [
                  "7.4.3",
                  "Test de charge statique vers le bas de l'accoudoir — Central",
                ],
                [
                  "7.4.4",
                  "Test de charge statique vers le bas de l'accoudoir — Avant",
                ],
                ["7.4.5", "Test de charge statique latérale de l'accoudoir"],
                ["7.4.6", "Test de charge statique du repose-pieds"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour les chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants souhaitant obtenir la certification BIS selon IS
          17631:2022 doivent suivre un processus de certification structuré.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Étape 1 : Évaluation de l&apos;applicabilité du produit —</strong>{" "}
            Confirmer si la chaise de travail relève de IS 17631:2022 et du QCO
            Meubles applicable avant de commencer la certification.
          </li>
          <li>
            <strong>Étape 2 : Préparation de la documentation —</strong> Compiler
            les dossiers techniques, de fabrication, de contrôle qualité et
            juridiques requis pour l&apos;examen BIS.
          </li>
          <li>
            <strong>Étape 3 : Tests du produit —</strong> Soumettre des
            échantillons à un laboratoire reconnu par BIS pour évaluation selon IS
            17631:2022.
          </li>
          <li>
            <strong>Étape 4 : Soumission de la demande —</strong> Déposer la
            demande BIS avec les rapports de test, les détails de l&apos;usine et
            les documents de conformité justificatifs.
          </li>
          <li>
            <strong>Étape 5 : Inspection d&apos;usine —</strong> BIS évalue les
            systèmes de production, les procédures QC et la traçabilité sur le site
            de fabrication.
          </li>
          <li>
            <strong>Étape 6 : Examen technique —</strong> BIS évalue la demande,
            les résultats de laboratoire et les conclusions de l&apos;inspection
            avant l&apos;approbation finale.
          </li>
          <li>
            <strong>Étape 7 : Octroi de la licence BIS —</strong> En cas de
            conformité réussie, BIS délivre la licence et autorise l&apos;utilisation
            de la marque ISI sur les chaises de travail certifiées.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les fabricants indiens
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants indiens postulent généralement via la filière de
          certification domestique. Le processus comprend généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>Tests du produit dans un laboratoire reconnu par BIS</li>
          <li>Examen de la documentation et dépôt de la demande BIS</li>
          <li>Évaluation d&apos;usine et examen technique par BIS</li>
          <li>Octroi de la licence BIS et autorisation de la marque ISI</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Après la certification, les fabricants doivent maintenir une conformité
          continue avec les exigences de surveillance, de marquage et de qualité
          BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Certification BIS pour les fabricants étrangers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants étrangers souhaitant exporter des chaises de travail vers
          l&apos;Inde doivent également obtenir la certification BIS avant de
          fournir des produits couverts par les exigences de certification
          obligatoire.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le processus comprend généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Nomination d&apos;un représentant indien autorisé (AIR – Authorized
            Indian Representative)
          </li>
          <li>Tests du produit à l&apos;étranger et évaluation d&apos;usine</li>
          <li>Examen de la demande BIS et approbation de la certification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cela garantit que les produits importés répondent aux mêmes exigences de
          qualité et de sécurité applicables aux fabricants nationaux.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS des chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La documentation est un élément essentiel du processus de certification
          BIS pour les chaises de travail. Les exigences peuvent différer selon que
          le demandeur est un fabricant indien, un fabricant étranger ou un
          importateur, et selon le schéma de certification suivi. Les dossiers
          incomplets ou incohérents figurent parmi les principales causes de retards
          de demande.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les documents suivants sont couramment requis lors de la certification
          BIS des chaises de travail selon IS 17631:2022 :
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Documents d&apos;entreprise —</strong> Certificat
            d&apos;enregistrement de la société, licence de fabrication (le cas
            échéant), enregistrement GST, justificatif d&apos;adresse commerciale,
            et détails du signataire autorisé avec pièces d&apos;identité et
            d&apos;adresse.
          </li>
          <li>
            <strong>Documents de fabrication —</strong> Plan d&apos;implantation
            de l&apos;usine, organigramme du processus de fabrication, liste des
            machines de production et équipements de test, et détails de
            l&apos;infrastructure de production et de la capacité installée.
          </li>
          <li>
            <strong>Documents produit —</strong> Spécifications du produit,
            plans techniques ou ingénierie, catalogue ou liste des modèles,
            nomenclature (BOM), et détails des matières premières, composants et
            pièces critiques utilisés dans la chaise de travail.
          </li>
          <li>
            <strong>Documents de contrôle qualité —</strong> Procédures écrites de
            contrôle qualité, dossiers d&apos;inspection des matières entrantes,
            rapports d&apos;inspection en cours et produits finis, méthodes de test
            internes, et certificats d&apos;étalonnage des équipements de mesure et
            de test.
          </li>
          <li>
            <strong>Documents de certification —</strong> Rapports de test d&apos;un
            laboratoire reconnu par BIS, formulaires de demande BIS dûment remplis,
            déclarations et engagements, échantillons d&apos;étiquettes ou de
            marquage, et tout document supplémentaire prescrit par BIS pour la
            filière de certification spécifique.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tous les documents doivent être exacts, complets et cohérents avec les
          détails du produit soumis dans la demande BIS. Il est conseillé aux
          fabricants d&apos;examiner attentivement les exigences documentaires avant
          le dépôt afin d&apos;éviter des retards inutiles dans le traitement de la
          certification.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour les chaises de travail
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conformité réglementaire —</strong> Respecter les normes
            indiennes obligatoires et les exigences QCO pour une fabrication et une
            vente légales.
          </li>
          <li>
            <strong>Accès légal au marché —</strong> Fournir des chaises de travail
            certifiées en Inde sans risque réglementaire pour les catégories de
            produits couvertes.
          </li>
          <li>
            <strong>Crédibilité renforcée —</strong> La marque ISI signale une
            qualité, une sécurité et une conformité vérifiées avec IS 17631:2022.
          </li>
          <li>
            <strong>Confiance des clients —</strong> Les acheteurs corporatifs, les
            institutions et les utilisateurs finaux font confiance aux produits
            testés selon les références nationales.
          </li>
          <li>
            <strong>Meilleurs approvisionnements —</strong> Améliore
            l&apos;éligibilité aux appels d&apos;offres gouvernementaux,
            institutionnels et commerciaux à grand volume.
          </li>
          <li>
            <strong>Réputation de marque renforcée —</strong> Démontre
            l&apos;engagement envers la qualité, l&apos;ergonomie et la fiabilité
            du produit à long terme.
          </li>
          <li>
            <strong>Contrôle qualité amélioré —</strong> Encourage des systèmes QC
            structurés, la traçabilité et des normes de production cohérentes.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants lors de la certification BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Interprétation technique —</strong> Faire correspondre les
            clauses de IS 17631:2022 à des conceptions, mécanismes et variantes de
            chaises spécifiques peut être complexe.
          </li>
          <li>
            <strong>Échecs aux tests —</strong> Des cadres faibles, une mauvaise
            stabilité ou des problèmes de mécanisme entraînent souvent un rejet aux
            tests de renversement ou de charge.
          </li>
          <li>
            <strong>Lacunes documentaires —</strong> Des plans incohérents, des
            dossiers QC incomplets ou des déclarations manquantes retardent
            couramment l&apos;approbation.
          </li>
          <li>
            <strong>Conformité d&apos;usine —</strong> Les contrôles de production,
            la traçabilité et les tests internes peuvent nécessiter une mise à
            niveau avant l&apos;octroi de la licence.
          </li>
          <li>
            <strong>Coordination réglementaire —</strong> Aligner les tests en
            laboratoire, les inspections BIS et les demandes de suivi prend du
            temps sans accompagnement expert.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi choisir Sun Certifications India ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India est un cabinet de conseil en conformité
          réglementaire qui assiste les fabricants, importateurs, exportateurs et
          entreprises dans l&apos;obtention de diverses certifications et
          approbations requises pour le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre équipe fournit une assistance complète pour la certification BIS
          des chaises de travail selon IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Nos services comprennent</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Évaluation de l&apos;applicabilité du produit —</strong> Nous
            confirmons si vos chaises de travail relèvent de IS 17631:2022 et du
            QCO applicable.
          </li>
          <li>
            <strong>Conseil en conformité BIS —</strong> Accompagnement expert sur
            les filières de certification, les obligations et les exigences de la
            norme.
          </li>
          <li>
            <strong>Assistance documentaire —</strong> Préparation, examen et
            organisation de tous les dossiers de demande BIS et d&apos;usine.
          </li>
          <li>
            <strong>Coordination des tests —</strong> Accompagnement complet pour
            la soumission d&apos;échantillons et les tests dans des laboratoires
            reconnus.
          </li>
          <li>
            <strong>Support à l&apos;inspection d&apos;usine —</strong> Vérifications
            de préparation pour l&apos;évaluation d&apos;usine BIS et les audits de
            conformité.
          </li>
          <li>
            <strong>Gestion de la demande —</strong> Prise en charge des dépôts
            BIS, des relances et de la communication réglementaire en votre nom.
          </li>
          <li>
            <strong>Support post-certification —</strong> Assistance continue pour
            la surveillance, les règles de marquage et le maintien de la licence.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour les chaises de travail selon IS 17631:2022 joue
          un rôle important pour garantir la qualité, la sécurité, la durabilité, la
          stabilité et les performances ergonomiques des produits d&apos;assise de
          travail.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          En obtenant la certification BIS et en utilisant la marque ISI, les
          fabricants peuvent démontrer leur conformité aux normes indiennes,
          renforcer la confiance des clients, améliorer la crédibilité du produit
          et soutenir la croissance commerciale à long terme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Que vous soyez un fabricant indien ou un fabricant étranger souhaitant
          accéder au marché indien, comprendre les exigences de IS 17631:2022 est
          une étape essentielle vers la conformité réglementaire et le succès
          commercial.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si vous envisagez d&apos;obtenir la certification BIS pour les chaises de
          travail selon IS 17631:2022, Sun Certifications India peut simplifier le
          processus grâce à un accompagnement réglementaire expert et un support
          complet en matière de conformité.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certification BIS pour chaises de travail (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Qu&apos;est-ce que la certification BIS pour les chaises de travail ?</strong>
              <br />
              La certification BIS confirme que les chaises de travail respectent
              les exigences de IS 17631:2022 et les exigences de certification
              applicables.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Qu&apos;est-ce que IS 17631:2022 ?</strong>
              <br />
              IS 17631:2022 est la norme indienne qui spécifie les exigences pour
              les chaises de travail, notamment la sécurité, la résistance, la
              stabilité, la durabilité et les considérations ergonomiques.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. La certification BIS est-elle obligatoire pour les chaises de travail ?</strong>
              <br />
              Les chaises de travail couvertes par le cadre réglementaire applicable
              doivent se conformer aux exigences de certification BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Qu&apos;est-ce que la marque ISI ?</strong>
              <br />
              La marque ISI est la marque de certification standard délivrée dans
              le cadre du schème de certification de produits BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Qui peut demander la certification BIS ?</strong>
              <br />
              Les fabricants indiens et les fabricants étrangers peuvent postuler.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. La certification BIS nécessite-t-elle des tests de produit ?</strong>
              <br />
              Oui. Les tests de produit constituent une part importante du processus
              de certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Les chaises de travail importées nécessitent-elles la certification BIS ?
              </strong>
              <br />
              Les produits couverts par les exigences de certification obligatoire
              doivent se conformer aux réglementations BIS applicables avant d&apos;être
              fournis en Inde.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Quels tests sont effectués selon IS 17631:2022 ?</strong>
              <br />
              La norme comprend des évaluations telles que l&apos;examen de la
              conception et de la finition, la vérification dimensionnelle, les
              tests de stabilité et les tests de charge statique.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Pourquoi la conception ergonomique est-elle importante pour les chaises de travail ?</strong>
              <br />
              La conception ergonomique contribue à améliorer le confort de
              l&apos;utilisateur, favorise une posture correcte et améliore
              l&apos;expérience au travail.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Comment Sun Certifications India peut-elle aider ?</strong>
              <br />
              Sun Certifications India fournit une assistance pour
              l&apos;évaluation de l&apos;applicabilité, la documentation, la
              coordination des tests, la préparation à l&apos;inspection, la gestion
              de la demande et le support en matière de conformité.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour chaises de travail - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ressources connexes
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> Certificat ISI</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Certificat BIS pour fabricant étranger</a>
          </li>
        </ul>

        <ManyUsersAlsoReadFrench />

        <FaqAuthorFrench questionNumber={4} />
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
                Meilleur consultant en certificats d&apos;Inde
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
              Marque BIS (Licence ISI) pour fabricants étrangers
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
