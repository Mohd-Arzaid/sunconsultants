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

const BISCertificateCompsitSyntheticFibreFrench = () => {
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

export default BISCertificateCompsitSyntheticFibreFrench;

const MetaTags = () => {
  const title =
    "Certificat BIS pour cordes en fibres synthétiques composites | Licence BIS IS 14928:2001";
  const ogTitle =
    "Certification BIS pour cordes en fibres synthétiques composites – Guide IS 14928:2001";
  const twitterTitle =
    "Licence BIS pour cordes en fibres synthétiques composites | IS 14928:2001";
  const metaDescription =
    "Obtenez le certificat BIS pour les cordes en fibres synthétiques composites selon IS 14928:2001. Processus, documents, tests, coûts et délais pour la certification BIS en Inde.";
  const ogDescription =
    "Guide complet de la certification BIS pour les cordes en fibres synthétiques composites selon IS 14928:2001. Processus, coûts, documents, tests et avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le certificat BIS pour les cordes en fibres synthétiques composites selon IS 14928:2001. Processus BIS, documents, tests, frais et délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour cordes en fibres synthétiques composites, Licence BIS pour cordes en fibres synthétiques composites, IS 14928:2001, Certification BIS pour cordes en fibres synthétiques composites";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cordes-en-fibres-synthetiques-composites-is-14928";
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
                    <Link to="/Blogs">Derniers articles</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificat BIS pour cordes en fibres synthétiques composites – IS
                    14928:2001
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
          Certification BIS cordes en fibres synthétiques composites – Guide complet
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="Licence BIS pour cordes en fibres synthétiques composites"
            alt="Certificat BIS pour cordes en fibres synthétiques composites - Certification BIS IS 14928:2001"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les cordes en fibres synthétiques composites sont largement utilisées dans les
          opérations maritimes, les ports et havres, les installations offshore, la pêche,
          le transport maritime, la construction, l&apos;agriculture et la manutention de
          matériaux lourds. Ces cordes sont conçues en combinant deux ou plusieurs fibres
          synthétiques—polyester, polypropylène, nylon ou autres fibres artificielles—pour
          offrir un équilibre entre résistance, flexibilité, résistance à l&apos;abrasion,
          flottabilité et durabilité. Les cordes en fibres synthétiques composites étant
          souvent utilisées pour la charge, le remorquage, l&apos;amarrage, le levage et
          des applications critiques pour la sécurité, un défaut de qualité même mineur
          peut entraîner de graves accidents, des dommages matériels ou une défaillance
          opérationnelle.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour maîtriser ces risques et garantir une qualité constante, le gouvernement
          indien impose la certification BIS pour les cordes en fibres synthétiques
          composites selon la norme indienne applicable IS 14928:2001. Un certificat BIS
          valide pour les cordes en fibres synthétiques composites est une obligation
          légale pour les fabricants et importateurs avant que ces produits ne puissent
          être fabriqués, vendus, distribués ou importés sur le marché indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette page constitue un guide complet axé sur la conformité expliquant la
          certification BIS pour les cordes en fibres synthétiques composites, notamment
          le champ d&apos;application de l&apos;IS 14928:2001, les objectifs de sécurité,
          les exigences d&apos;essai, la documentation, les coûts et le processus de
          certification étape par étape. Elle s&apos;adresse aux fabricants, importateurs,
          fabricants étrangers, négociants et vendeurs en ligne souhaitant comprendre
          comment obtenir une licence BIS pour les cordes en fibres synthétiques
          composites en Inde.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la certification BIS ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certification BIS est un système d&apos;évaluation de la conformité des
          produits géré par le Bureau of Indian Standards (BIS), qui agit dans le cadre
          de la loi BIS de 2016. Le BIS est responsable de l&apos;élaboration des normes
          indiennes, de la certification des produits et du respect par les marchandises
          vendues en Inde des critères de sécurité, qualité et performance définis.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification du certificat BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La signification du certificat BIS désigne l&apos;approbation formelle délivrée
          par le BIS confirmant qu&apos;un produit est conforme à la norme indienne
          applicable. Une fois certifié, le fabricant est autorisé à apposer la marque de
          certification BIS, communément appelée marque ISI, sur le produit et
          l&apos;emballage.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Explication de la marque ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La marque ISI indique que :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le produit a été testé dans un laboratoire reconnu par le BIS</li>
          <li>L&apos;installation de fabrication a été évaluée par les responsables du BIS</li>
          <li>
            Des mécanismes de contrôle qualité et de surveillance continus sont en place
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Pourquoi le BIS existe
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le BIS existe pour :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protéger la sécurité des consommateurs et des travailleurs</li>
          <li>Prévenir la circulation de produits de qualité inférieure</li>
          <li>Garantir l&apos;uniformité et la fiabilité des biens industriels</li>
          <li>Renforcer l&apos;application de la réglementation et le commerce équitable</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les cordes en fibres synthétiques composites—souvent utilisées dans des
          conditions dangereuses et à forte charge—la certification BIS joue un rôle
          crucial dans la prévention des accidents et l&apos;assurance qualité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme BIS applicable aux cordes en fibres synthétiques composites
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La norme indienne applicable à ce produit est :
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Cordes en fibres synthétiques composites
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette norme précise les exigences relatives aux matériaux, à la construction,
          aux dimensions, aux caractéristiques de performance, au marquage, à l&apos;échantillonnage
          et aux essais des cordes en fibres synthétiques composites.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Champ d&apos;application de l&apos;IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;IS 14928:2001 couvre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Les cordes fabriquées à partir d&apos;une combinaison de différentes fibres synthétiques
          </li>
          <li>
            Différentes constructions de cordes (structures tressées et toronnées)
          </li>
          <li>
            Les cordes destinées aux applications maritimes, à la pêche, industrielles et générales
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Objectifs sécurité, performance et essais
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La norme vise à garantir :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Une résistance à la rupture et une capacité de charge suffisantes</li>
          <li>Un diamètre et une qualité de construction constants</li>
          <li>
            Une résistance à l&apos;abrasion, à l&apos;humidité et à la dégradation environnementale
          </li>
          <li>Des performances prévisibles et sûres tout au long de la durée de vie</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Qui doit se conformer
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La conformité à l&apos;IS 14928:2001 est obligatoire pour :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les fabricants indiens de cordes en fibres synthétiques composites</li>
          <li>Les importateurs fournissant ces cordes sur le marché indien</li>
          <li>Les fabricants étrangers vendant par l&apos;intermédiaire de représentants indiens</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la certification BIS est obligatoire pour les cordes en fibres synthétiques composites
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Risques pour la sécurité des consommateurs et des travailleurs
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les cordes en fibres synthétiques composites sont utilisées pour :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les opérations d&apos;amarrage et de remorquage</li>
          <li>Le levage et la fixation de charges lourdes</li>
          <li>Les filets de pêche et équipements maritimes</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Une rupture de corde peut provoquer des blessures, des pertes humaines, des
          dommages aux navires et des retards de projet.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Conformité réglementaire
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Conformément aux notifications BIS et aux exigences de contrôle qualité, les
          produits couverts par l&apos;IS 14928:2001 ne peuvent être vendus légalement
          sans certification BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Implications juridiques
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La non-conformité peut entraîner :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La saisie des produits non certifiés</li>
          <li>Des amendes en vertu de la loi BIS</li>
          <li>Des poursuites et actions en justice</li>
          <li>Le rejet du dédouanement à l&apos;importation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Avantages marché et image de marque
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Une licence BIS pour les cordes en fibres synthétiques composites améliore :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La confiance des clients</li>
          <li>L&apos;éligibilité aux appels d&apos;offres gouvernementaux et des entreprises publiques</li>
          <li>La crédibilité de la marque sur les marchés nationaux et à l&apos;export</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de certification BIS étape par étape pour les cordes en fibres synthétiques composites
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicabilité et identification de la norme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus commence par confirmer que le produit relève de l&apos;IS
          14928:2001. Il s&apos;agit d&apos;identifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La composition et le mélange des fibres</li>
          <li>Le type de construction de la corde</li>
          <li>La gamme de diamètres et l&apos;application prévue</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Une identification précise évite les erreurs d&apos;essai et le rejet du dossier.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processus de demande BIS en ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les fabricants doivent déposer leur demande BIS en ligne via le portail BIS en
          fournissant :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les détails du produit</li>
          <li>Les informations sur l&apos;usine et la fabrication</li>
          <li>Les dispositions de contrôle qualité</li>
          <li>Les détails de la demande d&apos;essai</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un dossier BIS correctement rempli est essentiel pour un traitement dans les délais.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Frais et structure des coûts
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le coût du certificat BIS comprend :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les frais de dossier</li>
          <li>Les frais d&apos;essai dans les laboratoires reconnus par le BIS</li>
          <li>Les frais d&apos;inspection d&apos;usine</li>
          <li>Les frais annuels de licence et de marquage</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le coût total de la certification BIS varie selon la construction de la corde,
          la gamme de dimensions et la complexité des essais. Une planification adéquate
          permet de gérer efficacement le coût de la certification BIS et de la licence BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Essais sur échantillons de produit (selon IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Des échantillons de produit sont prélevés et testés dans des laboratoires
          reconnus par le BIS pour vérifier la conformité à toutes les exigences de la norme.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Inspection et audit d&apos;usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les responsables du BIS effectuent un audit d&apos;usine pour vérifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le contrôle du processus de fabrication</li>
          <li>La gestion des matières premières</li>
          <li>Les installations d&apos;essai internes</li>
          <li>Les systèmes et dossiers d&apos;assurance qualité</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Délivrance de la licence BIS et de la marque ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Une fois toutes les exigences remplies, le BIS délivre la licence du Bureau of
          Indian Standards, permettant au fabricant d&apos;apposer la marque ISI sur les
          cordes en fibres synthétiques composites.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformité après certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Après certification, le titulaire de licence doit :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintenir une qualité de produit constante</li>
          <li>Accepter les audits de surveillance périodiques</li>
          <li>Informer le BIS de tout changement de matériau, processus ou conception</li>
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
          <li>Certificat de constitution de la société</li>
          <li>Enregistrement GST</li>
          <li>Lettre d&apos;habilitation du signataire</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spécifications et dessins du produit</li>
          <li>Spécifications des matières premières</li>
          <li>Procédures d&apos;essai internes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de demande BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande BIS dûment rempli</li>
          <li>Lettre de demande d&apos;essai</li>
          <li>Détails du marquage et de l&apos;étiquetage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;ensemble constitue les DOCUMENTS DE CERTIFICATION BIS obligatoires.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences d&apos;essai selon IS 14928:2001
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
                  Exigence
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Construction
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Structure
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Traitement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Corde
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diamètre
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Masse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Résistance à la rupture
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Longueur
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

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Classification incorrecte du produit</strong>
            <br />
            Solution : Réaliser une évaluation technique pré-certification.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Échecs aux essais</strong>
            <br />
            Solution : Aligner la qualité des matières premières et les contrôles de processus sur l&apos;IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Documentation incomplète</strong>
            <br />
            Solution : Préparer soigneusement les documents spécifiques BIS et vérifier avant
            soumission.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Non-conformité à l&apos;audit</strong>
            <br />
            Solution : Tenir des registres appropriés, étalonnage et contrôles qualité internes.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la certification BIS pour les fabricants et importateurs
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages juridiques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformité à la réglementation indienne</li>
          <li>Dédouanement fluide</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages commerciaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Éligibilité aux appels d&apos;offres gouvernementaux et institutionnels</li>
          <li>Meilleure acceptation par les acheteurs</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Avantages image de marque
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Utilisation autorisée de la marque BIS</li>
          <li>Confiance et crédibilité marché renforcées</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Expansion du marché
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Accès aux secteurs réglementés</li>
          <li>Croissance commerciale à long terme</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanctions en cas de non-conformité
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;absence de certification BIS peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>De lourdes amendes</li>
          <li>La saisie ou le rappel des produits</li>
          <li>L&apos;interdiction d&apos;importation</li>
          <li>Des poursuites judiciaires</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a besoin de la certification BIS pour les cordes en fibres synthétiques composites ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Les fabricants indiens</li>
          <li>Les importateurs</li>
          <li>Les fabricants étrangers fournissant l&apos;Inde</li>
          <li>Les négociants et distributeurs</li>
          <li>Les vendeurs en ligne</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toute entité mettant des cordes en fibres synthétiques composites sur le marché
          indien doit garantir la conformité BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtenir un certificat BIS pour les cordes en fibres synthétiques composites selon
          l&apos;IS 14928:2001 est à la fois une obligation légale et une exigence de sécurité
          essentielle. Une certification BIS / licence BIS valide pour les cordes en fibres
          synthétiques composites garantit la conformité réglementaire, protège les
          utilisateurs finaux et renforce la crédibilité sur le marché.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour les fabricants et importateurs, la certification BIS ne se limite pas à
          l&apos;approbation—elle concerne la confiance, la sécurité et une croissance
          durable. Avec une préparation technique adéquate et un accompagnement expert,
          le processus de certification BIS en Inde peut être mené à bien de manière
          fluide et efficace.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certification BIS pour les cordes en fibres synthétiques composites
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Quelle est la signification de BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards (Bureau des normes indiennes).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. La certification BIS est-elle obligatoire pour les cordes en fibres synthétiques composites ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, selon l&apos;IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Quelle est la signification du certificat BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certificat du Bureau des normes indiennes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Puis-je demander le certificat BIS en ligne ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, via le portail officiel BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Combien de temps prend la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Généralement 1 à 2 mois.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Quel est le coût de la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Il varie selon le périmètre des essais et de l&apos;audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Les importateurs ont-ils besoin de la certification BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Les importateurs doivent s&apos;assurer que les produits sont certifiés.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Les fabricants étrangers peuvent-ils faire une demande ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, par l&apos;intermédiaire d&apos;un représentant indien autorisé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. L&apos;enregistrement BIS est-il identique à la licence BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Non, les cordes en fibres nécessitent une licence BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Que se passe-t-il si un produit échoue aux essais ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Des actions correctives et une nouvelle série d&apos;essais sont requises.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Le marquage ISI est-il obligatoire ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, après certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Quelle est la durée de validité de la licence BIS ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Généralement 1 à 2 ans, renouvelable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Les audits de surveillance sont-ils obligatoires ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, le BIS effectue des audits périodiques.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Le périmètre de la licence peut-il être étendu ultérieurement ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Oui, par approbation d&apos;extension de périmètre.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Les produits non certifiés peuvent-ils être vendus en ligne ?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Non, la vente en ligne exige également la conformité BIS.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="Certificat BIS pour cordes en fibres synthétiques composites - PDF IS 14928:2001"
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
                Meilleur consultant en certification en Inde
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
                alt="Logo LMPC"
                title="Logo LMPC"
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
              Marque ISI (BIS) pour fabricants indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
