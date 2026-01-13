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

const BISCertificateForFlashlightFrench = () => {
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

export default BISCertificateForFlashlightFrench;

const MetaTags = () => {
  const title = "Certificat BIS pour Lampe de Poche | IS 2083:2024 Licence BIS";
  const ogTitle = "Certification BIS pour Lampe de Poche – Guide IS 2083:2024";
  const twitterTitle = "Licence BIS pour Lampe de Poche | IS 2083:2024";
  const metaDescription =
    "Obtenez le Certificat BIS pour Lampe de Poche selon IS 2083:2024. Processus, documents, tests, coûts et délais pour la Certification BIS en Inde.";
  const ogDescription =
    "Guide complet de la Certification BIS pour Lampe de Poche selon IS 2083:2024. Connaître le processus, les coûts, les documents, les tests et les avantages de la licence BIS.";
  const twitterDescription =
    "Demandez le Certificat BIS pour Lampe de Poche selon IS 2083:2024. Découvrez le processus BIS, les documents, les tests, les frais et les délais en Inde.";
  const metaKeywords =
    "Certificat BIS pour Lampe de Poche, Licence BIS pour Lampe de Poche, IS 2083:2024, Certification BIS pour Lampe de Poche";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/lampe-de-poche-is-2083";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsable des Opérations chez Sun Certification India";

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
                    Certificat BIS pour Lampe de Poche – IS 2083:2024
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
          Certificat BIS pour Lampe de Poche selon IS 2083:2024 – Guide Complet
          de Conformité
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="Licence BIS pour Lampe de Poche"
            alt="Certificat BIS pour Lampe de Poche - Certification BIS IS 2083:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lampes de poche (communément appelées torches) sont des
          dispositifs d&apos;éclairage portables essentiels utilisés dans les
          ménages, les industries, les services d&apos;urgence, les opérations
          de sécurité, les activités de plein air et la gestion des
          catastrophes. Parce que les lampes de poche sont des produits
          électriques qui impliquent des batteries, des circuits, des sources
          lumineuses et des boîtiers, la conformité en matière de qualité et de
          sécurité est essentielle.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pour réglementer la qualité des produits, les performances et la
          sécurité des consommateurs, le Bureau of Indian Standards (BIS) a
          notifié IS 2083:2024 – Lampe de Poche : Spécification, rendant la
          Certification BIS obligatoire pour les lampes de poche vendues,
          fabriquées ou importées en Inde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cette page fournit une explication complète et originale de la
          Certification BIS pour les lampes de poche, couvrant la norme
          applicable, le processus de certification, les exigences de test, la
          documentation, les frais, les délais, les pénalités et les
          responsabilités de conformité.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qu&apos;est-ce que la Certification BIS et Pourquoi Elle
          S&apos;applique aux Lampes de Poche
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Bureau of Indian Standards (BIS) est l&apos;autorité nationale des
          normes de l&apos;Inde, responsable de s&apos;assurer que les produits
          vendus sur le marché indien répondent aux critères de sécurité, de
          qualité et de performance prescrits.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signification de la Certification BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un Certificat BIS confirme qu&apos;une lampe de poche :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Est conforme à la norme indienne IS 2083:2024</li>
          <li>A réussi tous les tests de laboratoire obligatoires</li>
          <li>
            Répond aux exigences électriques, mécaniques et de performance
          </li>
          <li>Est sûre pour l&apos;utilisation des consommateurs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Une fois approuvé, le fabricant est autorisé à apposer la marque ISI,
          qui signifie la conformité aux normes indiennes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norme Indienne Applicable – IS 2083:2024 (Lampe de Poche :
          Spécification)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Lampe de Poche : Spécification
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 définit la construction, les performances, la sécurité et
          les exigences de test pour les lampes de poche portables utilisées
          pour l&apos;éclairage général.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Portée de IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La norme couvre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lampes de poche portatives (torches)</li>
          <li>Lampes de poche à piles</li>
          <li>Lampes de poche rechargeables</li>
          <li>Lampes de poche à LED</li>
          <li>Lampes de poche d&apos;urgence et utilitaires</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Domaines Clés Couverts par la Norme
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sécurité électrique</li>
          <li>Performance lumineuse</li>
          <li>Résistance mécanique</li>
          <li>Compatibilité des batteries</li>
          <li>Durabilité de l&apos;interrupteur</li>
          <li>Protection contre la surchauffe</li>
          <li>Résistance à l&apos;usure normale</li>
          <li>Exigences de marquage et d&apos;étiquetage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toute lampe de poche qui relève de cette portée doit obtenir une
          Licence BIS pour Lampe de Poche avant d&apos;entrer sur le marché
          indien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pourquoi la Certification BIS est Obligatoire pour les Lampes de Poche
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lampes de poche sont largement utilisées par les consommateurs de
          tous les groupes d&apos;âge et dans des situations critiques telles
          que les urgences, les pannes de courant et les opérations
          industrielles. Les lampes de poche de qualité inférieure peuvent
          causer :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Courts-circuits électriques</li>
          <li>Fuite ou explosion de batterie</li>
          <li>Surchauffe</li>
          <li>Risques d&apos;incendie</li>
          <li>Mauvaise performance d&apos;éclairage</li>
          <li>Défaillance prématurée</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          La Certification BIS Garantit
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sécurité électrique et des utilisateurs</li>
          <li>Production de lumière constante</li>
          <li>Construction durable</li>
          <li>Fonctionnement sûr de la batterie</li>
          <li>Conformité aux exigences réglementaires indiennes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          La vente de lampes de poche non certifiées est une violation légale en
          vertu de la loi BIS de 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Portée de la Licence BIS pour Lampe de Poche
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Cette norme spécifie les exigences et les tests
          pour les lampes de poche alimentées par des batteries primaires
          remplaçables et des batteries secondaires remplaçables/intégrées avec
          une tension maximale de 48 V c.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Cette norme s&apos;applique aux lampes de poche
          pré-focalisées ainsi qu&apos;aux lampes de poche de type focalisable
          avec ampoule à incandescence et module LED comme source lumineuse.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Les éléments suivants ne sont pas couverts par la
          portée de cette norme :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Lampes portatives connectées par cordon et prise qui relèvent de la
            portée de IS 10322 (Partie 5/Sec 6);
          </li>
          <li>
            Éclairage d&apos;urgence qui relève de la portée de IS 10322 (Partie
            5/Sec 8); et
          </li>
          <li>Lampes de poche destinées aux emplacements dangereux.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processus de Certification BIS pour Lampes de Poche (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le processus de certification BIS pour les lampes de poche est mené
          dans le cadre du Schéma de Certification de Marque ISI (Schéma-I) et
          implique plusieurs étapes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 1 – Identification du Produit et Correspondance des Normes
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le fabricant doit confirmer que le produit est qualifié de lampe de
          poche selon IS 2083:2024 et identifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Type de lampe de poche</li>
          <li>Source d&apos;alimentation (batterie/rechargeable)</li>
          <li>Source lumineuse (LED, ampoule, etc.)</li>
          <li>Variantes et modèles</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 2 – Demande BIS en Ligne
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La demande est soumise via le Portail en Ligne BIS Manak, accompagnée
          de :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Détails du fabricant</li>
          <li>Adresse de l&apos;usine</li>
          <li>Description du produit</li>
          <li>Détails de la marque/marque de commerce</li>
          <li>Informations sur le processus de fabrication</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 3 – Paiement des Frais BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Les frais applicables comprennent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Frais de demande</li>
          <li>Frais de traitement</li>
          <li>Frais de test du produit</li>
          <li>Frais d&apos;inspection d&apos;usine</li>
          <li>Frais de marquage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 4 – Test du Produit selon IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Les échantillons sont testés dans un laboratoire reconnu par le BIS.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests Obligatoires pour les Lampes de Poche
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test d&apos;intensité lumineuse</li>
          <li>Test de stabilité de la sortie lumineuse</li>
          <li>Test d&apos;endurance de la batterie</li>
          <li>Test de fonctionnement de l&apos;interrupteur</li>
          <li>Résistance mécanique (test de chute)</li>
          <li>Test de résistance d&apos;isolement</li>
          <li>Test d&apos;élévation de température</li>
          <li>Test de sécurité électrique</li>
          <li>Vérification du marquage et de l&apos;étiquetage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les rapports de test sont directement soumis au BIS par le
          laboratoire.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 5 – Inspection d&apos;Usine
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un officier du BIS effectue une inspection sur site pour vérifier :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Configuration de fabrication</li>
          <li>Système de contrôle qualité</li>
          <li>Inspection des matériaux entrants</li>
          <li>Contrôles en cours de processus</li>
          <li>Test du produit fini</li>
          <li>Étalonnage des instruments de test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La conformité au Schéma de Test et d&apos;Inspection (STI) est
          obligatoire.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 6 – Octroi de la Licence BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Après des tests et une inspection réussis, le BIS délivre :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificat BIS</li>
          <li>Approbation de la marque ISI</li>
          <li>Numéro CML (Certificat de Licence de Fabrication)</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le fabricant peut désormais légalement fabriquer et vendre des lampes
          de poche en Inde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Étape 7 – Conformité Post-Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Après la certification, les fabricants doivent :
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utiliser correctement la marque ISI sur le produit et
            l&apos;emballage
          </li>
          <li>Maintenir des registres de qualité par lot</li>
          <li>Autoriser les inspections de surveillance du BIS</li>
          <li>Renouveler la licence périodiquement</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Requis pour la Certification BIS des Lampes de Poche
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents de Fabrication
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Enregistrement/licence d&apos;usine</li>
          <li>Organigramme du processus de fabrication</li>
          <li>Liste des machines</li>
          <li>Liste des équipements de test internes</li>
          <li>Certificats d&apos;étalonnage</li>
          <li>Plan de l&apos;usine</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Techniques
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fiche de spécification du produit</li>
          <li>Schémas de circuits</li>
          <li>Spécifications de la batterie</li>
          <li>Nomenclature des matériaux</li>
          <li>Rapports de test internes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Légaux
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Preuve d&apos;identité du signataire autorisé</li>
          <li>Preuve d&apos;adresse</li>
          <li>Lettre d&apos;autorisation de marque</li>
          <li>Certificat de marque (le cas échéant)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documents Spécifiques au BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Formulaire de demande BIS</li>
          <li>Engagements et déclarations</li>
          <li>Lettre de demande de test</li>
          <li>Artwork d&apos;étiquette (format de marquage ISI)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Exigences de Test selon IS 2083:2024 (Détaillé)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les lampes de poche doivent subir des tests rigoureux pour garantir la
          sécurité et les performances.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Seuls les produits réussissant tous les tests obligatoires sont
          éligibles à l&apos;approbation BIS.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de finition
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vérification des dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vérification des marquages
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test fonctionnel de l&apos;interrupteur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de résistance d&apos;isolement
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test de distribution lumineuse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Courant de circuit de lampe de poche LED
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test du courant de charge dans les lampes de poche à batterie
                  rechargeable intégrée
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Défis Courants dans la Certification BIS pour Lampes de Poche
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Échec du test d&apos;élévation de température</li>
          <li>Sortie lumineuse incohérente</li>
          <li>Faible durabilité de l&apos;interrupteur</li>
          <li>Problèmes de compatibilité de batterie</li>
          <li>Format d&apos;étiquette ISI incorrect</li>
          <li>Documentation incomplète</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Les pré-tests et les conseils d&apos;experts réduisent
          considérablement les risques de rejet.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Avantages de la Certification BIS pour les Fabricants de Lampes de
          Poche
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorisation légale de vendre en Inde</li>
          <li>Confiance accrue des consommateurs</li>
          <li>Fiabilité améliorée du produit</li>
          <li>Acceptation sur les plateformes de commerce électronique</li>
          <li>Éligibilité pour les marchés publics</li>
          <li>Responsabilité et rappels réduits</li>
          <li>Forte crédibilité de la marque</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Pénalités pour la Vente de Lampes de Poche Sans Certification BIS
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La non-conformité peut entraîner :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Saisie du produit</li>
          <li>Lourdes pénalités monétaires</li>
          <li>Interdictions d&apos;importation</li>
          <li>Fermetures de fabrication</li>
          <li>Poursuites pénales en vertu de la loi BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Qui a Besoin de la Certification BIS pour Lampes de Poche ?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabricants indiens</li>
          <li>Fabricants étrangers exportant vers l&apos;Inde</li>
          <li>Importateurs</li>
          <li>Propriétaires de marque</li>
          <li>Fournisseurs OEM/ODM</li>
          <li>Vendeurs en ligne et distributeurs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chaque unité de fabrication nécessite une licence BIS séparée.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le Certificat BIS pour Lampe de Poche selon IS 2083:2024 est une
          exigence réglementaire obligatoire qui garantit la sécurité, les
          performances et la fiabilité des produits d&apos;éclairage portables
          en Inde. La conformité protège non seulement les consommateurs, mais
          renforce également la crédibilité de la marque et l&apos;accès au
          marché. Avec des conseils professionnels, les fabricants et les
          importateurs peuvent obtenir la certification BIS de manière fluide et
          efficace.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificat BIS pour Lampe de Poche (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. La Certification BIS est-elle obligatoire pour les lampes de
                poche en Inde ?
              </strong>
              <br />
              Oui. Les lampes de poche couvertes par IS 2083:2024 doivent être
              certifiées BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quelle norme s&apos;applique aux lampes de poche ?
              </strong>
              <br />
              IS 2083:2024 – Lampe de Poche : Spécification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Combien de temps prend le processus BIS ?</strong>
              <br />
              Environ 30 à 45 jours ouvrables pour les fabricants indiens et
              environ 120 jours pour les fabricants étrangers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Les fabricants étrangers peuvent-ils demander la
                certification BIS ?
              </strong>
              <br />
              Oui, par le biais du schéma FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Le marquage ISI est-il obligatoire ?</strong>
              <br />
              Oui, la marque ISI doit être affichée sur les lampes de poche
              certifiées.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Que se passe-t-il si une lampe de poche échoue aux tests ?
              </strong>
              <br />
              Le produit doit être corrigé et retesté.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Les lampes de poche rechargeables sont-elles également
                couvertes ?
              </strong>
              <br />
              Oui, si elles relèvent de la portée de IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Quelle est la durée de validité de la licence BIS ?
              </strong>
              <br />1 à 2 ans, renouvelable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Plusieurs modèles peuvent-ils être couverts par une seule
                licence ?
              </strong>
              <br />
              Oui, s&apos;ils répondent aux critères de similitude.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="Certificat BIS pour Lampe de Poche - IS 2083:2024 PDF"
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
              Nos Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur Consultant en Certification d&apos;Inde
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
              Marque BIS (Licence ISI) pour Fabricants Étrangers
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
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
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications de Certificat EPR
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
              Certifications de Certificat LMPC
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
