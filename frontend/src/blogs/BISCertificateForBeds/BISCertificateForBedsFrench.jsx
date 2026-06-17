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
import LanguageSelector from "./LanguageSelector";
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

const BISCertificateForBedsFrench = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterFrench />
    </div>
  );
};

export default BISCertificateForBedsFrench;

const MetaTags = () => {
  const title = "Certificat BIS pour lits | Licence BIS IS 17635:2022";
  const ogTitle = "Certification BIS pour lits – Guide IS 17635:2022";
  const twitterTitle = "Licence BIS pour lits | IS 17635:2022";
  const metaDescription =
    "Obtenez le certificat BIS pour lits selon IS 17635:2022. Processus, documents, tests, coût et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet sur la certification BIS pour lits selon IS 17635:2022. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour lits selon IS 17635:2022. Apprenez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour lits, Licence BIS pour lits, IS 17635:2022, Certification BIS pour lits";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/lits-is-17635";
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
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://bis-certifications.com/blogs/isi-products/lits-is-17635",
          },
          headline: "Certificat BIS pour lits",
          description:
            "La certification BIS pour les lits en Inde est une assurance qualité obligatoire, principalement selon IS 17635:2022, garantissant des normes de sécurité, de durabilité et de performance.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "Certificat BIS pour lits",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "La certification BIS pour les lits en Inde est une assurance qualité obligatoire, principalement selon IS 17635:2022, garantissant des normes de sécurité, de durabilité et de performance.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
          },
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "La certification BIS est-elle obligatoire pour les lits en Inde ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, selon IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Quelle est la validité du certificat BIS ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1 à 2 ans, renouvelable.",
              },
            },
            {
              "@type": "Question",
              name: "Les fabricants étrangers peuvent-ils postuler ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, sous FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Le certificat BIS peut-il être demandé en ligne ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui.",
              },
            },
            {
              "@type": "Question",
              name: "La marque ISI est-elle obligatoire sur les lits ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui.",
              },
            },
            {
              "@type": "Question",
              name: "Combien de temps dure le processus ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30 à 45 jours.",
              },
            },
            {
              "@type": "Question",
              name: "Les lits en bois et en métal sont-ils tous deux couverts ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, s'ils sont conformes à IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "L'inspection de l'usine est-elle obligatoire ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui.",
              },
            },
            {
              "@type": "Question",
              name: "Les commerçants peuvent-ils demander le BIS ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Seulement les propriétaires de marque avec contrôle de fabrication.",
              },
            },
          ],
        })}
      </script>
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
                    Certificat BIS pour lits – IS 17635:2022
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
          Certificat BIS pour lits – Guide complet IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="Licence BIS pour lits"
            alt="Certificat BIS pour lits - Certification BIS IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat BIS pour lits est une exigence de conformité obligatoire
          en Inde pour les fabricants et importateurs de lits destinés à un usage
          domestique et commercial. Selon la dernière norme indienne IS
          17635:2022 – Lits (Exigences de sécurité), tous les lits doivent
          répondre à des critères stricts de sécurité, de durabilité, de
          structure et de performance avant d&apos;être vendus sur le marché
          indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits sont des produits de mobilier essentiels utilisés
          quotidiennement dans les foyers, hôtels, hôpitaux, auberges,
          hébergements PG et installations institutionnelles. Toute faiblesse
          structurelle, arêtes vives, défaillance des matériaux ou faible
          capacité de charge peut entraîner de graves blessures. Pour prévenir
          de tels risques, le Bureau des normes indiennes (BIS) rend obligatoire{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            la certification BIS
          </a>{" "}
          pour les lits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide complet explique tout sur la licence BIS pour lits, y compris
          les normes applicables, le processus de certification, les exigences
          de test, les documents, les frais, les délais, les pénalités et les
          avantages.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Points clés de la certification BIS pour les lits
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particularités
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Détails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produit", "Lits"],
                ["Norme indienne", "IS 17635:2022"],
                ["Titre de la norme", "Lits – Spécification"],
                ["Schéma de certification", "Certification Marque ISI BIS"],
                [
                  "Autorité réglementaire",
                  "Bureau des normes indiennes (BIS)",
                ],
                ["Marque applicable", "Marque ISI"],
                [
                  "Demandeurs admissibles",
                  "Fabricants indiens et fabricants étrangers",
                ],
                [
                  "Exigence de conformité",
                  "Obligatoire en vertu du QCO Meubles applicable (Quality Control Order)",
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
                    {particular === "Schéma de certification" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Certification Marque ISI BIS
                      </a>
                    ) : particular === "Exigence de conformité" ? (
                      <>
                        Obligatoire en vertu du{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>
                            QCO Meubles applicable (Quality Control Order)
                          </strong>
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
          Qu&apos;est-ce que la certification BIS pour les lits ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS pour les lits est un processus d&apos;évaluation
          de la conformité par lequel les fabricants démontrent que leurs
          produits respectent les exigences spécifiées dans IS 17635:2022. Une
          fois la conformité vérifiée par des tests, une évaluation d&apos;usine
          et un examen réglementaire, le fabricant reçoit une licence BIS et
          peut apposer la marque ISI sur les produits certifiés.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Le cadre de certification vise à garantir que les lits disponibles sur
          le marché indien satisfont aux exigences établies relatives à :
        </p>

        <ul className={LIST_CLASS}>
          <li>La résistance structurelle</li>
          <li>La stabilité</li>
          <li>La durabilité</li>
          <li>Les performances de surface</li>
          <li>La sécurité lors d&apos;une utilisation normale</li>
          <li>
            Les performances dans des conditions d&apos;usage abusif prévisibles
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ces exigences contribuent à établir une référence cohérente en matière
          de qualité et de protection des consommateurs pour différents designs
          de lits et matériaux de fabrication.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est importante pour les lits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits affectent directement la sécurité des utilisateurs car ils
          sont conçus pour supporter des charges importantes sur de longues
          périodes. Les produits mal conçus ou insuffisamment testés peuvent
          connaître une défaillance structurelle, une instabilité, une
          déformation ou une détérioration prématurée.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 répond à ces préoccupations en définissant des exigences
          normalisées de performance et de sécurité que les fabricants doivent
          satisfaire avant que leurs produits n&apos;entrent sur le marché. La
          norme comprend des exigences relatives à la résistance, à la stabilité,
          à la durabilité, à la finition et aux performances de surface.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Pour les fabricants, la certification BIS offre plusieurs avantages :
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Autorisation légale de vendre les produits couverts en Inde
          </li>
          <li>Démonstration de conformité aux normes indiennes</li>
          <li>Meilleure acceptation sur le marché</li>
          <li>Confiance accrue des consommateurs</li>
          <li>Réduction du risque d&apos;action réglementaire</li>
          <li>
            Avantage concurrentiel dans les marchés institutionnels et
            commerciaux
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Aperçu de IS 17635:2022 pour les lits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le gouvernement de l&apos;Inde a introduit des ordres de contrôle
          qualité pour plusieurs produits de mobilier afin de garantir que les
          produits mis sur le marché respectent les exigences prescrites en
          matière de sécurité et de qualité.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lorsque IS 17635:2022 est couvert par le QCO Meubles applicable, les
          fabricants sont tenus d&apos;obtenir la certification BIS selon le
          Schéma I et d&apos;utiliser la marque standard (Marque ISI) conformément
          aux exigences de licence BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 est la norme indienne qui spécifie les exigences de
          performance et de sécurité pour les lits destinés aux utilisateurs
          adultes dans les environnements domestiques et non domestiques. La
          norme établit des exigences visant à garantir que les lits restent
          sûrs, fonctionnels et durables tout au long de leur durée de vie
          prévue.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Objectif de IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 a été développée pour fournir une norme complète basée
          sur la performance, applicable aux designs modernes de lits fabriqués
          à l&apos;aide de divers matériaux et méthodes de construction. La
          norme remplace l&apos;ancienne IS 7259 (Partie 1) : 1988, qui
          concernait principalement les lits en bois.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme évalue les lits sans limiter la conformité à un matériau ou
          un processus de fabrication particulier. Elle se concentre plutôt sur
          la performance du produit fini dans des conditions d&apos;essai
          prescrites. Cette approche permet une évaluation cohérente des lits en
          bois, en métal, en bois reconstitué et d&apos;autres constructions.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Champ d&apos;application de IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Selon la norme, IS 17635:2022 couvre les exigences relatives à la
          performance et à la sécurité des lits conçus pour les utilisateurs
          adultes. La norme s&apos;applique aux produits destinés à une
          utilisation dans des environnements domestiques et non domestiques.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme s&apos;applique à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Les lits entièrement fabriqués</li>
          <li>Les lits assemblés sur site</li>
          <li>Les lits prêts à assembler après montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cela garantit que les produits fournis en forme montée ou en kit sont
          évalués selon les mêmes critères de performance et de sécurité.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Objectifs de la norme</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les principaux objectifs de IS 17635:2022 comprennent :
        </p>

        <ul className={LIST_CLASS}>
          <li>Assurer la sécurité des utilisateurs</li>
          <li>Vérifier la résistance structurelle</li>
          <li>Évaluer la stabilité du produit</li>
          <li>Évaluer la durabilité en cas d&apos;utilisation répétée</li>
          <li>Établir des exigences minimales de performance</li>
          <li>
            Promouvoir une qualité de produit cohérente entre les fabricants
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme comprend également des méthodologies d&apos;essai destinées à
          évaluer les lits dans des conditions d&apos;utilisation normale et des
          scénarios d&apos;usage abusif raisonnablement prévisibles.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produits couverts par IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 s&apos;applique aux lits destinés aux utilisateurs
          adultes dans les environnements domestiques et non domestiques. La
          norme se concentre sur la performance, la sécurité, la résistance, la
          stabilité et la durabilité du produit fini plutôt que de restreindre
          la conformité à un matériau ou une méthode de fabrication spécifique.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme s&apos;applique à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Les lits entièrement fabriqués</li>
          <li>Les lits assemblés sur site</li>
          <li>Les lits prêts à assembler (RTA) après montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants fournissant des lits en condition knock-down doivent
          s&apos;assurer que le produit assemblé respecte toutes les exigences
          applicables de la norme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Remarque :</strong> Cette norme ne couvre pas les lits à eau,
          les lits à air, les lits pliants, les lits superposés et les lits pour
          personnes à besoins spéciaux, ni les lits à des fins de soins de santé
          et médicales.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
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
            <strong>Certification BIS pour le mobilier</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences clés selon IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif principal de IS 17635:2022 est de garantir que les lits
          restent sûrs, stables, durables et adaptés à leur usage prévu dans des
          conditions d&apos;utilisation normale. Pour atteindre cet objectif, la
          norme établit plusieurs exigences clés de performance.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de stabilité</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits doivent démontrer une résistance adéquate au basculement et
          à l&apos;instabilité lors d&apos;une utilisation normale. Les essais de
          stabilité évaluent si le produit reste sécurisé lorsqu&apos;il est
          soumis aux conditions de charge attendues et aux mouvements de
          l&apos;utilisateur.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un lit stable minimise le risque d&apos;accidents et améliore la
          sécurité globale de l&apos;utilisateur.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de résistance</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les essais de résistance évaluent la capacité de la structure du lit à
          supporter des charges importantes sans défaillance structurelle.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ces évaluations examinent généralement :
        </p>

        <ul className={LIST_CLASS}>
          <li>L&apos;intégrité du cadre du lit</li>
          <li>La résistance des joints</li>
          <li>La capacité de charge</li>
          <li>La résistance à la déformation excessive</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;objectif est de garantir que le produit peut supporter en toute
          sécurité les utilisateurs prévus lors d&apos;une utilisation
          quotidienne.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Exigences de durabilité</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les essais de durabilité simulent une utilisation à long terme par des
          cycles répétés de charge et de mouvement.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          L&apos;objectif est de déterminer si :
        </p>

        <ul className={LIST_CLASS}>
          <li>Les connexions structurelles restent sécurisées</li>
          <li>Les composants continuent de fonctionner correctement</li>
          <li>
            Les performances du produit restent acceptables au fil du temps
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les exigences de durabilité contribuent à garantir que les lits
          certifiés maintiennent leur fiabilité tout au long de leur durée de
          vie prévue.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Exigences de performance de surface
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 fait référence aux exigences de performance de surface
          applicables aux finitions de mobilier.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selon la construction et les matériaux utilisés, les surfaces peuvent
          être évaluées pour leur résistance à :
        </p>

        <ul className={LIST_CLASS}>
          <li>Les dommages mécaniques</li>
          <li>La chaleur humide</li>
          <li>La chaleur sèche</li>
          <li>Les taches</li>
          <li>Les performances d&apos;adhésion</li>
          <li>L&apos;abrasion et l&apos;usure</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ces exigences contribuent à préserver à la fois la fonctionnalité et
          l&apos;apparence lors d&apos;une utilisation normale.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Exigences de conception et de finition
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme contient également des exigences relatives à la qualité de
          conception et à la finition.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Entre autres considérations :
        </p>

        <ul className={LIST_CLASS}>
          <li>
            Les arêtes accessibles ne doivent pas présenter de risques de
            blessure.
          </li>
          <li>
            Les arêtes vives et les saillies dangereuses doivent être évitées.
          </li>
          <li>
            Les sections creuses doivent être correctement fermées lorsque
            requis.
          </li>
          <li>
            Les composants mobiles doivent être conçus pour réduire le risque
            de blessure.
          </li>
          <li>
            Le produit fini doit être conforme aux spécifications de conception
            et de modèle déclarées.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Exigences de sécurité</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La sécurité est un principe fondamental tout au long de IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La norme intègre des exigences visant à réduire les risques découlant
          de :
        </p>

        <ul className={LIST_CLASS}>
          <li>L&apos;effondrement structurel</li>
          <li>Les arêtes vives</li>
          <li>Les saillies dangereuses</li>
          <li>La défaillance des composants</li>
          <li>Les contraintes d&apos;utilisation répétée</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le respect de ces exigences contribue à garantir que les lits
          restent sûrs en cas d&apos;utilisation normale et dans des conditions
          d&apos;usage abusif raisonnablement prévisibles.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          La certification BIS pour les lits est-elle obligatoire en Inde ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Oui, pour les produits de mobilier couverts par l&apos;ordre de
          contrôle qualité applicable, la certification BIS est obligatoire avant
          que ces produits puissent être fabriqués, importés, vendus, distribués,
          stockés ou mis en vente en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent vérifier le dernier statut de notification et
          les dates de mise en œuvre publiées par le gouvernement de l&apos;Inde,
          car les exigences réglementaires peuvent être mises à jour de temps à
          autre.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Obligation d&apos;utiliser la marque ISI
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          La marque ISI sert de preuve qu&apos;un produit est conforme à la norme
          indienne pertinente et est fabriqué sous une licence BIS valide.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          La marque ne peut être apposée qu&apos;après :
        </p>

        <ul className={LIST_CLASS}>
          <li>Des tests de produit réussis</li>
          <li>Une évaluation d&apos;usine</li>
          <li>L&apos;approbation BIS de la demande</li>
          <li>La délivrance de la licence</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;utilisation non autorisée de la marque ISI est interdite en
          vertu de la loi BIS de 2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour lits (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS en Inde suit une procédure
          structurée dans le cadre du Schéma de certification ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identifier la norme et le champ d&apos;application du
          produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirmer l&apos;applicabilité selon IS 17635:2022 et déterminer les
          variantes de produit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Demande BIS (en ligne)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Soumettre la demande via le portail en ligne BIS Manak avec :
        </p>
        <ul className={LIST_CLASS}>
          <li>Détails du fabricant</li>
          <li>Adresse de l&apos;usine</li>
          <li>Description du produit</li>
          <li>Nom de la marque</li>
          <li>Détails du contrôle qualité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Frais de certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Payer les frais applicables, y compris :
        </p>
        <ul className={LIST_CLASS}>
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test</li>
          <li>Frais d&apos;inspection</li>
          <li>Frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Tests du produit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les échantillons sont testés dans des laboratoires reconnus par le BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Les tests comprennent
        </h4>
        <ul className={LIST_CLASS}>
          <li>Test de charge statique</li>
          <li>Test de durabilité</li>
          <li>Test de stabilité</li>
          <li>Test de résistance des joints</li>
          <li>Test de finition de surface</li>
          <li>Test de sécurité des bords</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Inspection de l&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un agent BIS inspecte :
        </p>
        <ul className={LIST_CLASS}>
          <li>L&apos;installation de fabrication</li>
          <li>Le contrôle des matières premières</li>
          <li>Les tests en cours de processus</li>
          <li>Le système d&apos;assurance qualité</li>
          <li>L&apos;équipement de test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Délivrance de la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Après conformité, le BIS délivre :
        </p>
        <ul className={LIST_CLASS}>
          <li>Certificat BIS</li>
          <li>Autorisation de la marque ISI</li>
          <li>Numéro CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Conformité post-certification
        </h3>
        <ul className={LIST_CLASS}>
          <li>Inspections de surveillance</li>
          <li>Renouvellement tous les 1 à 2 ans</li>
          <li>Contrôle qualité continu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS des lits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Voici une liste complète des documents de certificat BIS :
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents du fabricant
        </h3>
        <ul className={LIST_CLASS}>
          <li>Enregistrement/licence de l&apos;usine</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines</li>
          <li>Liste de l&apos;équipement de test</li>
          <li>Certificats d&apos;étalonnage</li>
          <li>Plan de l&apos;usine</li>
          <li>Plan de contrôle qualité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents juridiques
        </h3>
        <ul className={LIST_CLASS}>
          <li>Preuve d&apos;adresse</li>
          <li>Preuve d&apos;identité</li>
          <li>Autorisation de la marque</li>
          <li>Certificat de marque de commerce (si applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className={LIST_CLASS}>
          <li>Dessins du produit</li>
          <li>Spécifications</li>
          <li>Nomenclature des matériaux</li>
          <li>Rapports de test internes</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test pour les lits (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits doivent subir des tests rigoureux pour assurer la conformité.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tests obligatoires
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
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de stabilité
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Charge statique verticale sur la base du lit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Charge statique verticale sur la barre latérale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests de charge statique horizontale
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test d&apos;impact vertical
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Les tests doivent être effectués uniquement dans des laboratoires
          approuvés par le BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants et comment les éviter
        </h2>

        <ul className={LIST_CLASS}>
          <li>
            <strong>Sélection incorrecte de la norme</strong> – Vérifiez
            toujours la norme indienne correcte.
          </li>
          <li>
            <strong>Documentation insuffisante</strong> – Les documents
            manquants causent des retards ; préparez-les à l&apos;avance.
          </li>
          <li>
            <strong>Échec des tests en laboratoire</strong> – Assurez-vous
            d&apos;utiliser des matériaux et une construction de haute qualité.
          </li>
          <li>
            <strong>Usine non prête</strong> – Assurez-vous que le SMQ et
            l&apos;équipement de test sont correctement entretenus.
          </li>
          <li>
            <strong>Non-concordance de la marque</strong> – Le nom de la marque
            doit correspondre à la demande de licence.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La vente de lits sans certification BIS peut entraîner :
        </p>

        <ul className={LIST_CLASS}>
          <li>Amendes lourdes</li>
          <li>Saisie des produits</li>
          <li>Fermeture de l&apos;entreprise</li>
          <li>Action en justice</li>
          <li>Interdiction du marché</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi nous choisir pour la certification BIS pour lits ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nous fournissons un conseil BIS de bout en bout, y compris :
        </p>

        <ul className={LIST_CLASS}>
          <li>Cartographie des normes</li>
          <li>Soutien à la documentation</li>
          <li>Coordination des tests</li>
          <li>Dépôt de la demande</li>
          <li>Gestion de l&apos;inspection de l&apos;usine</li>
          <li>Liaison BIS</li>
          <li>Délivrance de licence</li>
          <li>Soutien au renouvellement et à la surveillance</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat BIS pour lits selon IS 17635:2022 est une exigence
          légale obligatoire qui assure la sécurité, la qualité et la
          durabilité. L&apos;obtention d&apos;une licence BIS pour lits protège
          les consommateurs, renforce la valeur de la marque et permet un accès
          légal au marché dans toute l&apos;Inde. Avec le soutien
          d&apos;experts, le processus de certification devient fluide et
          efficace.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificat BIS pour lits
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La certification BIS est-elle obligatoire pour les lits en
                Inde ?
              </strong>
              <br />
              Oui, selon IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Quelle est la validité du certificat BIS ?</strong>
              <br />
              1 à 2 ans, renouvelable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Les fabricants étrangers peuvent-ils postuler ?
              </strong>
              <br />
              Oui, sous FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Le certificat BIS peut-il être demandé en ligne ?
              </strong>
              <br />
              Oui.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. La marque ISI est-elle obligatoire sur les lits ?
              </strong>
              <br />
              Oui.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Combien de temps dure le processus ?</strong>
              <br />
              30 à 45 jours.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Les lits en bois et en métal sont-ils tous deux couverts ?
              </strong>
              <br />
              Oui, s&apos;ils sont conformes à IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. L&apos;inspection de l&apos;usine est-elle obligatoire ?
              </strong>
              <br />
              Oui.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Les commerçants peuvent-ils demander le BIS ?</strong>
              <br />
              Seulement les propriétaires de marque avec contrôle de
              fabrication.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="Certificat BIS pour lits - PDF IS 17635:2022"
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
              Certificat Marque ISI
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Licence BIS FMCS
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
