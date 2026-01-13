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

const BISCertificateForBedsFrench = () => {
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
          en Inde pour les fabricants et importateurs de lits destinés à un
          usage domestique et commercial. Selon la dernière norme indienne IS
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
          de tels risques, le Bureau des normes indiennes (BIS) rend obligatoire
          la certification BIS pour les lits.
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
          Qu&apos;est-ce que la certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est un système d&apos;évaluation de la conformité
          introduit par le Bureau des normes indiennes, l&apos;autorité
          nationale des normes de l&apos;Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qu&apos;est-ce qu&apos;un certificat BIS ?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un certificat BIS confirme qu&apos;un produit est conforme aux normes
          indiennes et est sûr, fiable et adapté à l&apos;usage. Les produits
          certifiés portent la marque de certification BIS, communément appelée
          la marque ISI.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il signifie que le produit a réussi avec succès :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les tests en laboratoire</li>
          <li>L&apos;inspection de l&apos;usine</li>
          <li>La vérification du contrôle qualité</li>
          <li>L&apos;évaluation de la conformité à la sécurité</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le logo BIS sur les lits assure aux clients que le produit répond aux
          normes de qualité et de sécurité approuvées par le gouvernement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme BIS applicable aux lits – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme indienne applicable aux lits est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – Lits : Exigences de sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme définit les exigences essentielles de sécurité et de
          performance pour les lits utilisés dans les environnements
          résidentiels et commerciaux.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 couvre
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Résistance structurelle</li>
          <li>Capacité de charge</li>
          <li>Stabilité et durabilité</li>
          <li>Qualité des matériaux</li>
          <li>Finition des bords et surfaces</li>
          <li>Sécurité contre l&apos;effondrement</li>
          <li>Absence de risques de piégeage</li>
          <li>Performance à long terme</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tout lit fabriqué ou importé en Inde doit être conforme à IS
          17635:2022 et obtenir un enregistrement BIS pour lits.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est obligatoire pour les lits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lits sont utilisés pendant de longues durées et supportent
          continuellement le poids humain. Les lits mal conçus peuvent causer
          des blessures, un effondrement ou des risques pour la santé à long
          terme.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Raisons pour lesquelles la certification BIS pour lits est requise
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Assure l&apos;intégrité structurelle</li>
          <li>Prévient l&apos;effondrement et la rupture</li>
          <li>Contrôle la qualité des matériaux</li>
          <li>Élimine les arêtes vives et les finitions dangereuses</li>
          <li>Protège les consommateurs</li>
          <li>Assure une qualité nationale uniforme</li>
          <li>Obligatoire selon la notification BIS</li>
          <li>Requis pour la vente légale en Inde</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sans licence BIS pour lits, la vente ou l&apos;importation de lits en
          Inde est illégale.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS pour lits (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS en Inde suit une procédure
          structurée dans le cadre du système de certification ISI.
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
          Les échantillons sont testés dans des laboratoires reconnus par le
          BIS.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Les tests comprennent
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Autorisation de la marque ISI</li>
          <li>Numéro CML</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Conformité post-certification
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Inspections de surveillance</li>
          <li>Renouvellement tous les 1 à 2 ans</li>
          <li>Contrôle qualité continu</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la licence BIS pour lits
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme couvre les exigences relatives aux
          performances et à la sécurité des lits pour adultes à usage domestique
          et non domestique.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme s&apos;applique aux lits entièrement
          fabriqués/construits. Elle s&apos;applique également aux unités prêtes
          à assembler ; dans ce cas, les exigences de cette norme
          s&apos;appliquent aux unités assemblées.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> Cette norme ne couvre pas les lits à eau, les
          lits à air, les lits pliants, les lits superposés et les lits pour
          personnes à besoins spéciaux, ni les lits à des fins de soins de santé
          et médicales.
        </p>

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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;adresse</li>
          <li>Preuve d&apos;identité</li>
          <li>Autorisation de la marque</li>
          <li>Certificat de marque de commerce (si applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
          Avantages de la certification BIS pour lits
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vente légale en Inde</li>
          <li>Confiance accrue des clients</li>
          <li>Accès aux plateformes e-commerce</li>
          <li>Admissibilité aux appels d&apos;offres gouvernementaux</li>
          <li>Réduction de la responsabilité</li>
          <li>Crédibilité de marque forte</li>
          <li>Conformité aux normes indiennes</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La vente de lits sans certification BIS peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Amendes lourdes</li>
          <li>Saisie des produits</li>
          <li>Fermeture de l&apos;entreprise</li>
          <li>Action en justice</li>
          <li>Interdiction du marché</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a besoin du certificat BIS pour lits ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les entités suivantes doivent obtenir une licence BIS pour lits :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers</li>
          <li>Importateurs</li>
          <li>Marques de mobilier</li>
          <li>Fournisseurs OEM/ODM</li>
          <li>Vendeurs e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque unité de fabrication nécessite une licence BIS distincte.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi nous choisir pour la certification BIS pour lits ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nous fournissons un conseil BIS de bout en bout, y compris :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
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
              <br />1 à 2 ans, renouvelable.
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
