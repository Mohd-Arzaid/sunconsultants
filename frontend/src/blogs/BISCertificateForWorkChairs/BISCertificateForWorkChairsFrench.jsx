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
                    Certificat BIS pour chaises de travail – IS 17631:2022
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
          Certificat BIS pour chaises de travail – Guide complet de conformité
          pour IS 17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="Licence BIS pour chaises de travail"
            alt="Certificat BIS pour chaises de travail - IS 17631:2022 Certification BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;utilisation croissante de sièges de bureau et de travail—que ce
          soit dans les espaces de travail d&apos;entreprise, les centres de
          coworking, les bureaux à domicile ou les installations
          institutionnelles—a rendu la sécurité et les performances ergonomiques
          essentielles. Pour garantir que les fabricants fournissent des
          produits d&apos;assise structurellement stables, durables et sûrs pour
          les utilisateurs, le gouvernement indien a rendu obligatoire la
          certification BIS pour les chaises de travail selon IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises de travail subissent généralement des charges répétitives,
          des mouvements corporels continus, des inclinaisons, des rotations et
          des ajustements de hauteur. Une défaillance de toute fonctionnalité de
          performance peut entraîner des blessures graves. C&apos;est pourquoi
          la conformité à IS 17631:2022 – Chaises de travail : Exigences de
          sécurité est maintenant obligatoire pour tous les fabricants et
          importateurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ce guide explique le processus complet d&apos;octroi de licence BIS, y
          compris les normes, les tests, les frais, la documentation, les
          responsabilités, les avantages et les défis—créé avec un contenu frais
          pour éviter la duplication sur votre site web.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprendre la certification BIS pour les chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Bureau of Indian Standards (BIS) supervise la qualité et la
          sécurité des produits fournis sur le marché indien. Tout produit
          relevant d&apos;une norme indienne répertoriée dans un arrêté de
          contrôle qualité obligatoire doit être évalué et certifié par BIS
          avant la vente.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificat BIS – Ce qu&apos;il représente
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un certificat BIS indique qu&apos;une chaise de travail :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>A réussi les tests de performance et de durabilité</li>
          <li>Répond aux spécifications de matériaux et de construction</li>
          <li>Est sûre pour un usage quotidien à long terme</li>
          <li>
            Respecte les directives ergonomiques et structurelles des normes
            indiennes
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants qui répondent à ces exigences reçoivent une licence BIS
          leur permettant d&apos;apposer la marque ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme applicable pour les chaises de travail – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme régissant les chaises de travail et de bureau est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Chaises de travail : Exigences de
          sécurité
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cette norme se concentre sur les sièges destinés à un usage prolongé
          dans les environnements de travail.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produits couverts par cette norme
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chaises de bureau ergonomiques</li>
          <li>Chaises de travail</li>
          <li>Chaises pivotantes</li>
          <li>Chaises de bureau de travail</li>
          <li>Chaises de travail à hauteur réglable</li>
          <li>Chaises de travail exécutives</li>
          <li>Chaises de travail à dossier en mesh ou en tissu</li>
          <li>Chaises équipées d&apos;accoudoirs</li>
          <li>Chaises avec mécanismes d&apos;inclinaison/verrouillage</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la conformité IS 17631:2022 est cruciale
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises de travail diffèrent considérablement des chaises à usage
          général car elles :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Supportent un mouvement continu</li>
          <li>Utilisent des mécanismes mécaniques et d&apos;ajustement</li>
          <li>Portent des charges dynamiques</li>
          <li>Nécessitent une durabilité pour un usage prolongé</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Les chaises mal construites peuvent échouer au niveau de :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Joints de base</li>
          <li>Mécanismes pivotants</li>
          <li>Systèmes de levage à gaz</li>
          <li>Support de siège/dossier</li>
          <li>Structure des pieds ou des roulettes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Cela peut entraîner des blessures sur le lieu de travail, des temps
          d&apos;arrêt opérationnels et des problèmes de responsabilité produit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La certification BIS obligatoire garantit
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conception ergonomique sûre</li>
          <li>Capacité de charge fiable</li>
          <li>Forte durabilité sous tests cycliques</li>
          <li>Résistance à l&apos;usure mécanique</li>
          <li>Conformité aux paramètres de sécurité des utilisateurs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ainsi, l&apos;obtention d&apos;une licence BIS pour les chaises de
          travail est non négociable pour les fabricants indiens et étrangers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la licence BIS pour les chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette norme couvre les exigences pour les chaises de travail. Cette
          norme s&apos;applique aux chaises de travail complètement fabriquées.
          Elle s&apos;applique également aux unités prêtes à assembler ; dans ce
          cas, les exigences de cette norme s&apos;appliquent aux unités
          assemblées.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS étape par étape pour les chaises de
          travail (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification pour les chaises de travail implique un
          mélange d&apos;évaluation en laboratoire, d&apos;audit d&apos;usine et
          d&apos;examen technique.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Évaluation du produit et cartographie des normes
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identifiez toutes les variantes de chaises et alignez-les avec IS
          17631:2022. Comprenez quels modèles partagent la même construction et
          lesquels nécessitent des tests séparés.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Soumission de la demande en ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le fabricant soumet la demande via le portail BIS Manak Online. Les
          informations requises incluent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du site de fabrication</li>
          <li>Contrôles des matières premières</li>
          <li>Spécifications techniques</li>
          <li>Capacités de production</li>
          <li>Documentation de propriété de la marque</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Paiement des frais
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les frais doivent être payés pour :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Demande</li>
          <li>Traitement</li>
          <li>Tests</li>
          <li>Inspection</li>
          <li>Marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Tests d&apos;échantillons (Exigences IS 17631:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un laboratoire reconnu par BIS évalue la chaise selon plusieurs
          critères de sécurité et de performance.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Les tests de chaise de travail incluent
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tests de charge statique du siège et du dossier</li>
          <li>Cycles de chargement de durabilité</li>
          <li>Tests de pivotement/rotation</li>
          <li>Endurance du mécanisme d&apos;inclinaison</li>
          <li>Performance du mécanisme de levage à gaz</li>
          <li>Résistance des roulettes et résistance au roulement</li>
          <li>Stabilité de base et tests de surcharge</li>
          <li>Capacité de charge des accoudoirs</li>
          <li>Tests de résistance aux chocs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le laboratoire émet un rapport de test détaillé à BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Audit d&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les inspecteurs BIS examinent les éléments suivants de
          l&apos;installation :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Système de production</li>
          <li>Dossiers d&apos;inspection des matériaux</li>
          <li>Processus d&apos;assurance qualité interne</li>
          <li>Instruments de test et journaux de calibration</li>
          <li>Conformité au schéma de test et d&apos;inspection (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Octroi de la licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Une fois la conformité confirmée, BIS accorde :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La certification de licence BIS/Marque ISI</li>
          <li>Un numéro CML unique</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Conformité constante
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintenir des contrôles internes continus</li>
          <li>Suivre les règles de marquage</li>
          <li>Coopérer lors des inspections de surveillance</li>
          <li>Renouveler la licence périodiquement</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents requis pour la certification BIS des chaises de travail
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un ensemble complet de documents garantit une approbation plus rapide.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents d&apos;entreprise et d&apos;usine
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Enregistrement de l&apos;usine</li>
          <li>Diagramme et plan de fabrication</li>
          <li>Flux de travail de production</li>
          <li>Liste des machines</li>
          <li>Liste de l&apos;équipement de test</li>
          <li>Certificats de calibration</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dessins techniques de la chaise</li>
          <li>Spécifications des mécanismes</li>
          <li>Fiches de données matérielles</li>
          <li>Nomenclature</li>
          <li>Instructions d&apos;assemblage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents juridiques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;identité du signataire autorisé</li>
          <li>Lettres d&apos;autorisation de marque</li>
          <li>Certificat de marque de commerce</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents spécifiques BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande</li>
          <li>Engagements</li>
          <li>Formulaire de demande de test</li>
          <li>Échantillons d&apos;étiquettes</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de test selon IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les chaises de travail subissent des tests plus complexes que les
          chaises générales en raison des pièces mobiles.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Tests clés effectués
        </h3>

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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Conception et finition
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement du bord avant
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement vers l&apos;avant
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement vers l&apos;avant pour chaises avec repose-pieds
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement latéral pour chaises sans accoudoirs
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement latéral pour chaises avec accoudoirs
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Renversement vers l&apos;arrière pour chaises sans dossier
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique du bord avant du siège
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique combiné siège et dossier
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique vers le bas de l&apos;accoudoir —
                  Central
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique vers le bas de l&apos;accoudoir —
                  Avant
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique latérale de l&apos;accoudoir
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de charge statique du repose-pieds
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Ces tests simulent des mois ou des années d&apos;utilisation régulière
          en quelques jours.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis courants dans la certification BIS pour les chaises de travail
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>
              ✔ 1. Échec dans les tests mécaniques/d&apos;inclinaison
            </strong>{" "}
            – Souvent causé par des mécanismes faibles ou du matériel de qualité
            inférieure.
          </li>
          <li>
            <strong>✔ 2. Non-conformité du mécanisme de levage à gaz</strong> –
            Les levages à gaz doivent répondre à des paramètres stricts de
            pression et de sécurité.
          </li>
          <li>
            <strong>✔ 3. Infrastructure de test inadéquate</strong> – Les tests
            de chaises de travail nécessitent des installations spécialisées.
          </li>
          <li>
            <strong>✔ 4. Regroupement de produits incorrect</strong> –
            Différents mécanismes = tests séparés.
          </li>
          <li>
            <strong>✔ 5. Non-conformité STI</strong> – Les erreurs STI peuvent
            retarder l&apos;émission de la licence.
          </li>
          <li>
            <strong>✔ 6. Incohérences de documents</strong> – Le nom de la
            marque et le nom du modèle doivent correspondre exactement à la
            demande BIS.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour les chaises de travail
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Facilite les ventes légales dans toute l&apos;Inde</li>
          <li>
            Renforce la confiance des clients et la réputation de la marque
          </li>
          <li>Garantit une durabilité à long terme</li>
          <li>Réduit les réclamations de garantie et les défaillances</li>
          <li>Protège contre les pénalités réglementaires</li>
          <li>Permet l&apos;inscription sur les plateformes e-commerce</li>
          <li>
            Obligatoire pour les appels d&apos;offres gouvernementaux et les
            approvisionnements d&apos;entreprise
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour la vente de chaises de travail sans certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La non-conformité peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lourdes pénalités financières</li>
          <li>Confiscation des stocks</li>
          <li>Ordres d&apos;arrêt de production</li>
          <li>Interdiction d&apos;importation</li>
          <li>Poursuites pénales</li>
          <li>Annulation de la licence commerciale</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une application stricte est effectuée sous la loi BIS de 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui doit obtenir la certification BIS pour les chaises de travail ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatoire pour :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers exportant vers l&apos;Inde</li>
          <li>Propriétaires de marques</li>
          <li>Importateurs</li>
          <li>Fournisseurs OEM/ODM</li>
          <li>Distributeurs d&apos;entrepôt</li>
          <li>Marques de meubles de détail et en ligne</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque usine nécessite une licence BIS unique.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le certificat BIS pour les chaises de travail selon IS 17631:2022 est
          crucial pour garantir des produits d&apos;assise sûrs, durables et
          ergonomiquement solides en Inde. La certification obligatoire renforce
          la confiance des clients, réduit les risques de responsabilité produit
          et garantit la conformité aux normes de qualité nationales. Avec un
          soutien professionnel, le parcours de certification—des tests à
          l&apos;inspection en passant par l&apos;octroi de licence—devient
          efficace et prévisible.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificat BIS pour chaises de travail (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Quelles chaises relèvent de IS 17631:2022 ?</strong>
              <br />
              Toute chaise conçue pour les environnements de travail, y compris
              les chaises ergonomiques de bureau, les chaises de travail, les
              chaises pivotantes et les chaises réglables.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. La certification BIS est-elle obligatoire pour les chaises de
                travail ?
              </strong>
              <br />
              Oui. La certification BIS est obligatoire avant la fabrication, la
              vente ou l&apos;importation de chaises de travail en Inde.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Qu&apos;est-ce qui rend les tests de chaises de travail
                différents des tests de chaises générales ?
              </strong>
              <br />
              Les chaises de travail utilisent des mécanismes comme les pivots,
              les levages à gaz, les systèmes d&apos;inclinaison et les
              roulettes—nécessitant des tests mécaniques et d&apos;endurance
              avancés.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Combien de temps prend la certification BIS ?</strong>
              <br />
              Généralement 30–45 jours pour les fabricants indiens et environ
              120 jours pour les fabricants étrangers, selon les tests et la
              documentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Les fabricants étrangers peuvent-ils postuler ?
              </strong>
              <br />
              Oui, via le FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Que se passe-t-il si une chaise échoue aux tests BIS ?
              </strong>
              <br />
              Elle doit être repensée, corrigée et retestée jusqu&apos;à ce
              qu&apos;elle réponde à IS 17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Quels documents sont requis pour la demande BIS ?
              </strong>
              <br />
              Détails de l&apos;usine, dessins de produits, liste des machines,
              documents QC, propriété de la marque et papiers juridiques.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Tous les modèles de chaises nécessitent-ils des tests séparés
                ?
              </strong>
              <br />
              Si les modèles diffèrent par la conception, le mécanisme ou la
              structure, des tests séparés peuvent être nécessaires.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Le marquage ISI est-il obligatoire après approbation ?
              </strong>
              <br />
              Oui, la marque ISI doit apparaître sur le produit,
              l&apos;étiquette et l&apos;emballage.
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
