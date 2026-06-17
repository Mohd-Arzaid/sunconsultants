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
    "Certification BIS pour chaises et tabourets à usage général | IS 17632:2022";
  const ogTitle =
    "Certification BIS pour chaises et tabourets à usage général | IS 17632:2022";
  const twitterTitle =
    "Certification BIS pour chaises et tabourets à usage général | IS 17632:2022";
  const metaDescription =
    "Découvrez tout sur la certification BIS pour chaises et tabourets à usage général selon IS 17632:2022. Comprenez les exigences de la Marque ISI, les tests, le processus de certification, les documents, les avantages et les FAQ.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "Certification BIS pour chaises et tabourets à usage général, IS 17632:2022, Marque ISI chaises et tabourets, Licence BIS chaises tabourets, Certification BIS meubles";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
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
                    Certification BIS pour chaises et tabourets à usage général
                    (IS 17632:2022)
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
          Certification BIS pour chaises et tabourets à usage général (IS
          17632:2022) – Guide complet de certification Marque ISI
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="Licence BIS pour chaises et tabourets à usage général"
            alt="Certification BIS pour chaises et tabourets à usage général - Guide Marque ISI IS 17632:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises et tabourets à usage général figurent parmi les produits
          d&apos;ameublement les plus couramment utilisés dans les foyers, les
          bureaux, les établissements d&apos;enseignement, les établissements de
          santé, les commerces de détail, les espaces publics et les
          environnements commerciaux. Étant soumis à une utilisation régulière et
          prolongée, ces produits d&apos;assise doivent répondre à des exigences
          spécifiques de qualité, de sécurité, de résistance et de durabilité
          afin de garantir des performances fiables.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Face à l&apos;accent croissant mis sur la qualité des produits et la
          sécurité des consommateurs, la conformité aux Normes Indiennes est
          devenue une exigence importante pour les fabricants et importateurs de
          meubles. La certification BIS pour chaises et tabourets à usage
          général selon IS 17632:2022 permet de s&apos;assurer que les produits
          répondent aux exigences de performance et de sécurité prescrites avant
          leur mise sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification auprès du Bureau of Indian Standards (BIS) permet aux
          fabricants d&apos;apposer la Marque ISI sur les produits conformes.
          Cette marque garantit que le produit est conforme aux normes indiennes
          reconnues en matière de qualité et qu&apos;il a subi le processus
          d&apos;évaluation requis.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alors que l&apos;industrie du meuble continue de se développer et que
          les organismes d&apos;achat privilégient de plus en plus les produits
          certifiés, la certification BIS est devenue une exigence importante de
          conformité et d&apos;accès au marché pour les fabricants.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Points clés de la certification BIS pour chaises et tabourets à usage
          général
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
                ["Nom du produit", "Chaises et tabourets à usage général"],
                ["Norme indienne applicable", "IS 17632:2022"],
                ["Type de certification", "Certification de produits BIS"],
                ["Schéma de certification", "Schéma I (certification Marque ISI)"],
                ["Marque applicable", "Marque ISI"],
                ["Autorité de réglementation", "Bureau of Indian Standards"],
                ["Ministère compétent", "Ministère du Commerce et de l'Industrie"],
                [
                  "Exigence de conformité",
                  "Obligatoire en vertu de l'Ordre de contrôle de la qualité (QCO) applicable aux meubles",
                ],
                ["Catégorie de produit", "Meubles"],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Schéma de certification" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schéma I (certification Marque ISI)
                      </a>
                    ) : particular === "Exigence de conformité" ? (
                      <>
                        Obligatoire en vertu du{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO meubles (Ordre de contrôle de la qualité)
                          </strong>
                        </a>{" "}
                        applicable
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
          Qu&apos;est-ce que la certification BIS pour chaises et tabourets à
          usage général ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour chaises et tabourets à usage général est un
          processus d&apos;évaluation de la conformité mené dans le cadre du
          Schéma de certification de produits BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif de la certification est de vérifier que le produit est
          conforme aux exigences spécifiées dans IS 17632:2022. Une fois la
          certification accordée, les fabricants sont autorisés à apposer la
          Marque ISI sur leurs produits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le processus de certification évalue divers aspects de la performance
          du produit, notamment :
        </p>

        <ul className={LIST_CLASS}>
          <li>Résistance</li>
          <li>Stabilité</li>
          <li>Durabilité</li>
          <li>Performance structurelle</li>
          <li>Exigences de sécurité</li>
          <li>Qualité des matériaux</li>
          <li>Qualité de fabrication</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification contribue à garantir que les produits d&apos;assise
          commercialisés sur le marché indien respectent les références établies
          en matière de qualité et de sécurité.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aperçu de IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 est la Norme Indienne qui spécifie les exigences
          applicables aux chaises et tabourets à usage général.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme établit des exigences relatives à la sécurité, à la résistance,
          à la durabilité, à la stabilité et à la performance globale des
          meubles d&apos;assise destinés à un usage général.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme s&apos;applique à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Chaises et tabourets entièrement fabriqués</li>
          <li>Chaises et tabourets assemblés</li>
          <li>Produits prêts à assembler après montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif de la norme est de garantir que les produits
          d&apos;ameublement offrent des performances sûres, fiables et durables
          tout au long de leur durée de vie prévue.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences clés selon IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Exigences de résistance</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises et tabourets à usage général doivent posséder une
          résistance structurelle suffisante pour supporter les conditions de
          charge prévues lors d&apos;une utilisation normale.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de stabilité</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le meuble doit rester stable lors de l&apos;utilisation prévue et ne
          doit pas présenter de risques de basculement inutiles.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de durabilité</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les produits doivent être capables de maintenir leur intégrité
          structurelle et leurs performances sur de nombreux cycles
          d&apos;utilisation.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de sécurité</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norme inclut des exigences liées à la sécurité visant à réduire les
          risques associés à l&apos;utilisation du meuble.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Qualité des matériaux et de la fabrication
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La qualité des matériaux, les pratiques de fabrication, les méthodes
          d&apos;assemblage, les assemblages et la finition contribuent
          significativement à la conformité à la norme.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Considérations ergonomiques</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norme intègre des considérations liées aux performances qui
          contribuent au confort de l&apos;utilisateur et à la fonctionnalité
          pratique.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produits couverts par IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme s&apos;applique généralement à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Chaises à usage général</li>
          <li>Tabourets à usage général</li>
          <li>Meubles d&apos;assise fixes destinés à un usage général</li>
          <li>Produits d&apos;assise prêts à assembler après montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent examiner attentivement la portée de la norme
          afin de déterminer son applicabilité à leurs produits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Consultez également les produits d&apos;ameublement couverts par la
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
          La certification BIS est-elle obligatoire pour les chaises et
          tabourets à usage général ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Oui. Les produits d&apos;ameublement couverts par l&apos;Ordre de
          contrôle de la qualité (QCO) applicable aux meubles doivent être
          conformes à la Norme Indienne pertinente et obtenir la certification
          BIS avant d&apos;être fabriqués, importés, vendus, distribués ou
          fournis sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants couverts par le cadre réglementaire applicable doivent
          obtenir une licence BIS et respecter les exigences de marquage
          prescrites par le BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour la certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Avant l&apos;octroi de la certification, des échantillons de produits
          doivent être évalués par des tests réalisés dans des laboratoires
          reconnus.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les tests portent généralement sur les paramètres suivants :
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Évaluation de la performance structurelle —</strong> Détermine
            si la chaise ou le tabouret peut supporter les conditions
            d&apos;utilisation normales sans défaillance.
          </li>
          <li>
            <strong>Test de stabilité —</strong> Évalue si le meuble reste stable
            lors de l&apos;utilisation prévue et résiste au basculement.
          </li>
          <li>
            <strong>Évaluation de la résistance —</strong> Évalue la capacité de
            charge et l&apos;intégrité structurelle des cadres, assemblages et
            supports.
          </li>
          <li>
            <strong>Évaluation de la durabilité —</strong> Vérifie le maintien
            des performances après de nombreux cycles d&apos;utilisation sur la
            durée de vie du produit.
          </li>
          <li>
            <strong>Évaluation de la sécurité —</strong> Identifie les risques
            potentiels et vérifie la conformité aux exigences de sécurité
            prescrites.
          </li>
          <li>
            <strong>Inspection de la qualité de fabrication —</strong> Examine
            la qualité de construction, la finition, l&apos;intégrité de
            l&apos;assemblage et les normes de fabrication globales.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de marquage des produits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les produits certifiés selon IS 17632:2022 doivent généralement porter
          les informations d&apos;identification suivantes :
        </p>

        <ul className={LIST_CLASS}>
          <li>Nom ou marque de commerce du fabricant</li>
          <li>Identification du modèle ou de la conception</li>
          <li>Numéro de lot ou de série</li>
          <li>Date de fabrication</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Marque ISI ne peut être apposée qu&apos;après l&apos;obtention
          d&apos;une licence BIS valide.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour chaises et tabourets à usage général
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 1 : Évaluation de la portée du produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La première étape consiste à déterminer si le produit relève de la
          portée de IS 17632:2022 et du QCO applicable aux meubles.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Examinez le type de chaise ou de tabouret, l&apos;usage prévu, les
          matériaux et la construction avant d&apos;engager le processus de
          certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 2 : Préparation de la documentation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le fabricant prépare la documentation technique et de conformité
          requise pour la certification, y compris les dossiers de
          l&apos;entreprise, les informations sur l&apos;usine, les
          spécifications du produit et les procédures de contrôle qualité.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Une documentation complète et exacte permet d&apos;éviter des retards
          inutiles lors de l&apos;examen par le BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Étape 3 : Tests du produit</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Des échantillons représentatifs sont testés dans un laboratoire reconnu
          par le BIS afin de vérifier la conformité aux exigences de IS
          17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Le rapport d&apos;essai du laboratoire constitue un document technique
          clé à l&apos;appui de la demande de certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 4 : Soumission de la demande BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La demande de certification est soumise avec la documentation
          justificative, les rapports d&apos;essai et les informations de
          fabrication.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Le BIS examine la demande pour en vérifier l&apos;exhaustivité et la
          conformité technique avant de poursuivre la procédure.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Étape 5 : Inspection de l&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le BIS peut évaluer l&apos;installation de fabrication, les systèmes
          de production et les processus de contrôle qualité afin de vérifier la
          capacité à produire de manière constante des produits conformes.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Cette évaluation couvre généralement l&apos;infrastructure de
          production, les systèmes de contrôle qualité, le contrôle des matières
          premières et la traçabilité des produits.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Étape 6 : Examen technique</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La demande, les rapports d&apos;essai et les conclusions de
          l&apos;inspection sont examinés par le BIS avant qu&apos;une décision
          de certification ne soit prise.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Toute observation ou non-conformité relevée lors de l&apos;examen doit
          être corrigée par le demandeur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Étape 7 : Octroi de la licence</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          En cas de conformité satisfaisante, le BIS accorde la licence et
          autorise l&apos;utilisation de la Marque ISI sur les chaises et
          tabourets à usage général certifiés.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent continuer à respecter les exigences du BIS
          pendant toute la durée de validité de la licence.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Conformité à la réglementation indienne —</strong> Répondre
            aux exigences obligatoires de qualité et de sécurité en vertu du QCO
            applicable aux meubles.
          </li>
          <li>
            <strong>Accès légal au marché —</strong> Fournir des chaises et
            tabourets certifiés en Inde conformément aux exigences
            réglementaires applicables.
          </li>
          <li>
            <strong>Crédibilité accrue du produit —</strong> La Marque ISI
            atteste de la conformité aux normes indiennes reconnues.
          </li>
          <li>
            <strong>Confiance renforcée des clients —</strong> Les consommateurs
            et les acheteurs institutionnels privilégient les produits évalués
            selon des références établies.
          </li>
          <li>
            <strong>Avantage concurrentiel —</strong> Meilleure acceptation dans
            les processus d&apos;achat commerciaux et gouvernementaux.
          </li>
          <li>
            <strong>Réputation de marque améliorée —</strong> Démontre
            l&apos;engagement envers la qualité, la sécurité et la fiabilité à
            long terme du produit.
          </li>
          <li>
            <strong>Soutien aux PME —</strong> Aide les petites et moyennes
            entreprises manufacturières à renforcer leur présence sur le marché
            et la confiance des clients.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants rencontrés lors de la certification
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Échecs aux tests du produit —</strong> Des lacunes de
            conception ou de fabrication peuvent entraîner une non-conformité lors
            de l&apos;évaluation en laboratoire.
          </li>
          <li>
            <strong>Problèmes de documentation —</strong> Des dossiers incomplets
            ou incohérents provoquent fréquemment des retards dans la
            certification.
          </li>
          <li>
            <strong>Lacunes de conformité en fabrication —</strong> Les systèmes
            de contrôle qualité peuvent nécessiter des améliorations avant
            l&apos;octroi de la certification.
          </li>
          <li>
            <strong>Complexité réglementaire —</strong> La gestion des tests, des
            inspections et des procédures de certification peut s&apos;avérer
            difficile sans l&apos;accompagnement d&apos;experts.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi choisir Sun Certifications India ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India accompagne les fabricants, importateurs,
          exportateurs et entreprises dans leurs exigences de conformité
          réglementaire en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nos services comprennent :
        </p>

        <ul className={LIST_CLASS}>
          <li>Évaluation de l&apos;applicabilité du produit</li>
          <li>Conseil en certification BIS</li>
          <li>Assistance documentaire</li>
          <li>Coordination des tests en laboratoire</li>
          <li>Préparation à l&apos;inspection d&apos;usine</li>
          <li>Gestion de la demande</li>
          <li>Assistance à la conformité réglementaire</li>
          <li>Support post-certification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Notre objectif est d&apos;aider nos clients à naviguer efficacement dans
          les exigences de certification et à atteindre la conformité avec un
          minimum de retards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour chaises et tabourets à usage général selon
          IS 17632:2022 joue un rôle important pour garantir la qualité, la
          sécurité, la résistance, la stabilité et la durabilité des produits.
          Elle permet aux fabricants de démontrer leur conformité aux Normes
          Indiennes tout en renforçant la confiance des clients et en facilitant
          l&apos;accès au marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alors que la demande de produits d&apos;ameublement garantis en qualité
          continue de croître, la certification BIS et la Marque ISI offrent une
          assurance précieuse aux consommateurs, aux institutions et aux
          organismes d&apos;achat. Les fabricants qui investissent dans la
          conformité respectent non seulement les exigences réglementaires, mais
          renforcent également leur compétitivité et leur réputation à long terme
          sur le marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Si vous envisagez d&apos;obtenir la certification BIS pour chaises et
          tabourets à usage général selon IS 17632:2022, Sun Certifications India
          peut vous fournir un accompagnement expert et un soutien complet à la
          conformité tout au long du processus de certification.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certification BIS pour chaises et tabourets à usage général (IS
          17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Qu&apos;est-ce que IS 17632:2022 ?</strong>
              <br />
              IS 17632:2022 est la Norme Indienne qui spécifie les exigences
              applicables aux chaises et tabourets à usage général.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. La certification BIS est-elle obligatoire pour les chaises et
                tabourets à usage général ?
              </strong>
              <br />
              Les produits couverts par l&apos;Ordre de contrôle de la qualité
              (QCO) applicable aux meubles doivent se conformer aux exigences de
              certification BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Qu&apos;est-ce que la Marque ISI ?</strong>
              <br />
              La Marque ISI est la marque de certification standard délivrée dans
              le cadre du Schéma de certification de produits BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Qui peut demander la certification BIS ?</strong>
              <br />
              Les fabricants indiens et les fabricants étrangers peuvent tous deux
              déposer une demande de certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. La certification BIS nécessite-t-elle des tests de produits ?
              </strong>
              <br />
              Oui. Les tests de produits constituent un élément important du
              processus de certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Les chaises prêtes à assembler sont-elles couvertes par IS
                17632:2022 ?
              </strong>
              <br />
              Oui. La norme s&apos;applique aux produits prêts à assembler après
              montage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Quels produits sont exclus de la portée de IS 17632:2022 ?
              </strong>
              <br />
              Des produits tels que les fauteuils inclinables, les chaises à
              bascule, les chaises basculantes, les canapés et certains produits
              d&apos;assise spécialisés sont généralement exclus.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Quels sont les avantages de l&apos;obtention de la
                certification BIS ?
              </strong>
              <br />
              Les avantages incluent la conformité réglementaire, une crédibilité
              accrue du produit, une confiance renforcée des clients et une
              meilleure acceptation sur le marché.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Les fabricants étrangers peuvent-ils obtenir la certification
                BIS ?
              </strong>
              <br />
              Oui. Les fabricants étrangers peuvent postuler via la filière de
              certification BIS applicable aux fabricants étrangers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Comment Sun Certifications India peut-il aider ?</strong>
              <br />
              Sun Certifications India fournit un accompagnement complet pour la
              certification BIS, incluant la documentation, la coordination des
              tests, la gestion de la demande et l&apos;assistance à la
              conformité.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour chaises et tabourets - IS 17632:2022 PDF"
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
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certification ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Certification BIS pour fabricants étrangers
            </a>
          </li>
        </ul>

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
