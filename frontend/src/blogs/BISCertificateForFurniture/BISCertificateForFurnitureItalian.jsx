import FaqAuthorItalian from "@/components/common/FaqAuthor/FaqAuthorItalian";
import ManyUsersAlsoReadItalian from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadItalian";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
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
import FooterItalian from "@/components/manual/Footer/FooterItalian";

const BISCertificateForFurnitureItalian = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default BISCertificateForFurnitureItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Mobili in India | Certificazione BIS, Licenza e Guida al Processo";
  const ogTitle =
    "Certificato BIS per Mobili in India - Guida Completa alla Certificazione BIS";
  const twitterTitle =
    "Certificato BIS per Mobili | Guida Completa alla Certificazione BIS Indiana";
  const metaDescription =
    "Certificato BIS per Mobili in India - guida completa su Certificazione BIS, Licenza BIS, costi, documenti, standard, processo, domanda online e Marchio BIS per produttori di mobili.";
  const ogDescription =
    "Cerchi la Certificazione BIS per Mobili in India? Scopri Licenza BIS, Marchio BIS, standard applicabili, processo di certificazione, costi, documenti e requisiti di conformità in dettaglio.";
  const twitterDescription =
    "Guida completa al Certificato BIS per Mobili in India - processo di Certificazione BIS, costi, documenti, Marchio BIS, standard e domanda online spiegati.";
  const metaKeywords =
    "Certificato BIS per Mobili, Certificazione BIS per Mobili, Licenza BIS per Mobili, Cos'è BIS, BIS Indiano";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/mobili";
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
                    <Link to="/">Casa</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Blog Recenti</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificato BIS per Mobili in India – Guida Completa
                    Dettagliata
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
        <ServicesRightSideContentItalian />
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
          Certificato BIS per Mobili in India – Guida Completa Dettagliata
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="Licenza BIS per Mobili"
            alt="Certificato BIS per Mobili in India - Guida Completa alla Certificazione BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introduzione: Certificazione BIS e l&apos;Industria dei Mobili Indiana
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India, la qualità del prodotto, la sicurezza e la standardizzazione
          sono regolamentate da un&apos;autorità statutaria centrale nota come
          Bureau of Indian Standards (BIS). BIS è l&apos;organizzazione
          nazionale degli standard dell&apos;India, istituita ai sensi del BIS
          Act per garantire che i prodotti venduti nel mercato indiano siano
          conformi a parametri di sicurezza, qualità e prestazioni definiti.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS è l&apos;acronimo di Bureau of Indian Standards. Funziona sotto il
          Ministero degli Affari dei Consumatori, Alimentazione e Distribuzione
          Pubblica, Governo dell&apos;India. BIS svolge un ruolo cruciale nella
          protezione degli interessi dei consumatori supportando i produttori
          attraverso un ecosistema trasparente di standardizzazione e
          certificazione.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          L&apos;industria dei mobili indiana ha assistito a una rapida crescita
          a causa di:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanizzazione</li>
          <li>
            Espansione dell&apos;infrastruttura residenziale e commerciale
          </li>
          <li>
            Crescita nei settori dell&apos;ospitalità, istruzione, sanità e
            co-living
          </li>
          <li>
            Crescente consapevolezza dei consumatori sulla sicurezza e durata
            dei prodotti
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          I mobili non sono più considerati un prodotto puramente estetico. Sono
          direttamente collegati alla sicurezza dell&apos;utente,
          all&apos;ergonomia, alla stabilità strutturale, alla resistenza al
          fuoco e alla durata a lungo termine. Incidenti che coinvolgono letti
          che crollano, letti a castello non sicuri, sedie instabili o unità di
          stoccaggio di qualità inferiore hanno sollevato preoccupazioni tra
          regolatori e consumatori.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Per affrontare questi rischi, la Certificazione BIS per Mobili è
          diventata un requisito di conformità critico. BIS garantisce che i
          prodotti di mobili soddisfino gli Standard Indiani (IS) relativi a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistenza strutturale</li>
          <li>Capacità di carico</li>
          <li>Qualità del materiale</li>
          <li>Sicurezza del design</li>
          <li>Prestazioni in condizioni d&apos;uso</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Per produttori, importatori, esportatori, PMI, startup e proprietari
          di marchi di mobili, ottenere un Certificato BIS per Mobili non è più
          solo una formalità normativa—è una necessità di mercato.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS per Mobili è Importante
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Garantisce la conformità legale secondo le normative indiane</li>
          <li>
            Migliora la fiducia dei consumatori e la credibilità del marchio
          </li>
          <li>
            Consente la vendita e distribuzione senza restrizioni in tutta
            l&apos;India
          </li>
          <li>Minimizza i rischi di responsabilità del prodotto</li>
          <li>
            Migliora la prontezza all&apos;esportazione e l&apos;accettazione
            globale
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Questa guida completa è progettata per essere la risorsa più
          autorevole e dettagliata sulla Certificazione BIS per Mobili in India.
          Sia che tu sia un produttore alle prime armi o un marchio di mobili
          affermato, questa guida risponde a ogni possibile domanda relativa
          alla Licenza BIS per Mobili, alla Registrazione BIS per Mobili, agli
          standard applicabili, al processo, ai costi, ai documenti, alle
          tempistiche e alla conformità post-certificazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è il Certificato BIS per Mobili?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificato BIS per Mobili è un&apos;approvazione ufficiale
          concessa dal Bureau of Indian Standards che conferma che un prodotto
          di mobili specifico è conforme allo Standard Indiano (IS) pertinente.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cos&apos;è il Marchio BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Marchio BIS, comunemente noto come Marchio ISI, è un marchio di
          conformità standard che appare sui prodotti certificati. Significa che
          i mobili hanno:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Superato i test di laboratorio</li>
          <li>Superato l&apos;ispezione della fabbrica</li>
          <li>Soddisfatto tutti i requisiti standard</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Spiegazione del Logo BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Logo BIS rappresenta l&apos;autorità di BIS come organismo
          nazionale degli standard dell&apos;India. Quando utilizzato con il
          Marchio ISI sui prodotti di mobili, garantisce agli acquirenti che il
          prodotto è conforme agli Standard BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certificato BIS India – Status Legale
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India, produrre, importare o vendere prodotti di mobili coperti da
          standard notificati senza Certificazione BIS può portare a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro delle merci</li>
          <li>Pesanti sanzioni monetarie</li>
          <li>Perseguimento ai sensi del BIS Act</li>
          <li>Divieto di vendita o importazione</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quindi, un Certificato BIS per Mobili in India ha una forte importanza
          legale.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Importante per i Prodotti di Mobili
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Mobili è critica per molteplici ragioni:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Sicurezza e Integrità Strutturale
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I guasti dei mobili possono causare lesioni o decessi. Gli Standard
          BIS valutano:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Capacità di carico</li>
          <li>Stabilità contro il ribaltamento</li>
          <li>Resistenza dei giunti</li>
          <li>Prestazioni del materiale</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Qualità e Durata
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I prodotti di mobili certificati garantiscono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lunga durata di servizio</li>
          <li>Resistenza all&apos;usura</li>
          <li>Prestazioni uniformi</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Fiducia dei Consumatori
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Marchio di Certificazione BIS costruisce fiducia istantanea tra
          acquirenti, istituzioni e acquirenti all&apos;ingrosso.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Accesso al Mercato
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Molte gare d&apos;appalto governative, acquirenti istituzionali e
          grandi corporazioni richiedono mobili certificati BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Conformità Legale
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Vendere mobili non certificati secondo le norme BIS obbligatorie può
          attirare sanzioni e azioni legali.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prodotti di Mobili Coperti dalla Certificazione BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          I mobili sono una categoria generale ampia sotto BIS, che copre
          diversi tipi di prodotti, ciascuno governato da diversi Standard
          Indiani (Numeri IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Principali Categorie di Mobili Coperte:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Sedie da Lavoro
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizzate in uffici, fabbriche e spazi commerciali. Gli standard si
          concentrano su ergonomia, stabilità e prestazioni di carico.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Sedie e Sgabelli per Uso Generale
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizzate in case, scuole e spazi pubblici. BIS valuta la sicurezza
          strutturale e la resistenza del materiale.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Tavoli e Scrivanie
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Include scrivanie da ufficio, tavoli da studio, workstation. Gli
          standard testano la capacità di carico e la durata della superficie.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Unità di Stoccaggio
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Armadi, credenze, armadietti, scaffali. Enfasi su stabilità, bordi
          taglienti e accesso sicuro.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Letti
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Letti singoli, letti matrimoniali, letti pieghevoli. BIS controlla la
          resistenza del telaio e le prestazioni a lungo termine.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Letti a Castello
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Altamente regolamentati a causa dei rischi di sicurezza. Focus su
          parapetti, sicurezza della scala e prevenzione delle cadute.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Compositi Imbottiti per Mobili Non Domestici
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Utilizzati in uffici, hotel, auditorium. Gli standard includono test
          di resistenza al fuoco e durata.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Altri Prodotti di Mobili
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mobili scolastici</li>
          <li>Posti a sedere istituzionali</li>
          <li>Mobili ospedalieri</li>
          <li>Mobili modulari</li>
          <li>Sistemi di mobili in metallo e legno</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni categoria di prodotto ha il proprio Numero IS applicabile,
          notificato separatamente da BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard BIS Applicabili ai Mobili
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Cosa sono gli Standard BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gli Standard BIS sono specifiche tecniche pubblicate da BIS per
          definire:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Requisiti dei materiali</li>
          <li>Parametri di prestazione</li>
          <li>Metodi di test</li>
          <li>Linee guida per la marcatura</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato dei Numeri IS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un Numero IS (Numero Standard Indiano) identifica in modo univoco uno
          standard applicabile a un prodotto.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processo di Notifica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS emette Notifiche BIS ufficiali che rendono obbligatori determinati
          standard. Una volta notificati:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La conformità diventa obbligatoria</li>
          <li>I prodotti non certificati sono illegali</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Come Identificare lo Standard BIS Corretto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificare la categoria del prodotto</li>
          <li>Studiare l&apos;ambito IS applicabile</li>
          <li>Confermare l&apos;applicabilità dello standard</li>
          <li>Evitare la selezione errata dello standard (un errore comune)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tipi di Certificazione BIS Applicabili ai Mobili
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Licenza BIS sotto lo Schema ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I prodotti di mobili sono generalmente coperti dallo Schema di
          Certificazione ISI, che comporta:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test del prodotto</li>
          <li>Ispezione della fabbrica</li>
          <li>Audit di sorveglianza</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Registrazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Registrazione BIS è principalmente per prodotti elettronici e IT. I
          mobili di solito richiedono Licenza BIS, non Registrazione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS per Mobili in India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 1: Preparazione Pre-Domanda
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificare lo Standard IS applicabile</li>
          <li>Valutare la conformità del design del prodotto</li>
          <li>Preparare la documentazione tecnica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 2: Domanda BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Inviare la Domanda BIS con:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del prodotto</li>
          <li>Dettagli di produzione</li>
          <li>Riferimento standard</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 3: Domanda BIS Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La domanda viene presentata tramite il portale online BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 4: Test del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Campioni testati in laboratori riconosciuti BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 5: Ispezione della Fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gli ufficiali BIS verificano:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Processo di produzione</li>
          <li>Controllo qualità</li>
          <li>Strutture di test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 6: Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo la conformità, BIS concede la licenza.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Passo 7: Uso del Marchio di Certificazione BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il produttore può apporre il Marchio BIS / Marchio ISI.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Mobili
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il test è una parte obbligatoria del processo di registrazione BIS. I
          mobili subiscono test rigorosi per garantire sicurezza e durata.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Test Obbligatori per Mobili:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test di Carico Strutturale</li>
          <li>Test di Stabilità</li>
          <li>Test di Resistenza del Parapetto</li>
          <li>Test di Impatto</li>
          <li>Test di Pericolo di Intrappolamento</li>
          <li>Test di Resistenza e Angolo della Scala</li>
          <li>Test di Sicurezza del Materiale</li>
          <li>Test del Raggio del Bordo e della Nitidezza</li>
          <li>Test di Supporto del Materasso</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          I test devono essere eseguiti solo in un laboratorio riconosciuto BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS per Mobili
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Documenti Chiave Includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Prova di registrazione della fabbrica</li>
          <li>Disegni del prodotto e specifiche</li>
          <li>Dettagli dei materiali grezzi</li>
          <li>Rapporti di test</li>
          <li>Registri di controllo qualità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Errori Comuni nella Documentazione:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Riferimento standard errato</li>
          <li>Dati di test incompleti</li>
          <li>Disallineamento nell&apos;ambito del prodotto</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Costo della Certificazione BIS per Mobili
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Componenti del Costo del Certificato BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffe di domanda governative</li>
          <li>Costi di test</li>
          <li>Tariffe di ispezione</li>
          <li>Tariffe di licenza</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fattori di Costo della Certificazione BIS:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Complessità del prodotto</li>
          <li>Numero di modelli</li>
          <li>Requisiti di test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nota: Le tariffe di consulenza professionale sono separate dalle
          tariffe governative.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Tempistiche per la Registrazione del Certificato BIS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tempistiche Medie:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Test: 3–6 settimane</li>
          <li>Ispezione: 1–2 settimane</li>
          <li>Concessione Licenza: 2–4 settimane</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Totale: 8–12 settimane (circa)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Come Ottenere la Certificazione BIS in India per Produttori di Mobili
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Consigli Pratici:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Scegliere lo standard IS corretto</li>
          <li>Garantire la prontezza della fabbrica</li>
          <li>Mantenere i registri dei test</li>
          <li>Evitare errori nella documentazione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Domanda Online del Certificato BIS – Panoramica Pratica
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sfide del Portale Online:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Errori tecnici</li>
          <li>Problemi di caricamento documenti</li>
          <li>Confusione nella selezione dello standard</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una guida adeguata riduce i ritardi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Uso del Marchio BIS e del Marchio di Certificazione BIS Dopo
          l&apos;Approvazione
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Regole di Marcatura:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Riferimento IS corretto</li>
          <li>Numero di licenza</li>
          <li>Dimensione e visibilità appropriate</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità può portare alla sospensione.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide nella Certificazione BIS per Mobili
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretazione degli standard</li>
          <li>Fallimenti nei test del prodotto</li>
          <li>Non conformità nelle ispezioni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ruolo dei Consulenti BIS nella Certificazione dei Mobili
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          I consulenti BIS professionali aiutano:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificando gli standard corretti</li>
          <li>Gestendo test e ispezioni</li>
          <li>Riducendo i tempi di approvazione</li>
          <li>Evitando rifiuti costosi</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS per Mobili è una pietra angolare della qualità,
          sicurezza e conformità legale nel mercato dei mobili in crescita
          dell&apos;India. Sia che tu sia un produttore, importatore o
          proprietario di marchio, ottenere un Certificato BIS per Mobili in
          India garantisce:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformità normativa</li>
          <li>Fiducia dei consumatori</li>
          <li>Successo di mercato a lungo termine</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Comprendendo il Processo di Certificazione BIS, gli Standard, i Costi
          e i requisiti di Conformità, le aziende possono navigare con sicurezza
          nel panorama normativo e costruire prodotti di mobili più sicuri, più
          forti e più affidabili per il mercato indiano.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Domande Frequenti sulla Licenza BIS
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La Certificazione BIS è obbligatoria per tutti i prodotti di
              mobili in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, la Certificazione BIS è obbligatoria solo per quei prodotti di
              mobili che sono coperti da Standard BIS notificati. Tuttavia, una
              volta che una categoria di prodotti di mobili è notificata dal
              Bureau of Indian Standards, produrre, importare, vendere o
              distribuire quel prodotto senza una Licenza BIS valida diventa
              illegale in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Quali prodotti di mobili richiedono Licenza BIS invece di
              Registrazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              I prodotti di mobili generalmente rientrano nello Schema di
              Certificazione ISI, che richiede una Licenza BIS, non una
              Registrazione BIS. La Registrazione BIS (CRS) si applica
              principalmente a prodotti elettronici e IT, mentre i prodotti di
              mobili richiedono test + ispezione della fabbrica + Licenza BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              I mobili importati possono essere venduti in India senza
              Certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. I prodotti di mobili importati coperti da Standard BIS
              obbligatori devono avere Certificazione BIS prima dello
              sdoganamento. Importare mobili non certificati può comportare:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Detenzione doganale</li>
              <li>Riesportazione o distruzione</li>
              <li>Pesanti sanzioni</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              I produttori stranieri devono ottenere Licenza BIS prima di
              esportare mobili in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              I produttori stranieri di mobili possono richiedere la
              Certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì. I produttori stranieri possono richiedere sotto lo Schema di
              Certificazione per Produttori Stranieri (FMCS). Devono:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Nominare un Rappresentante Indiano Autorizzato (AIR)</li>
              <li>Conformarsi agli Standard Indiani</li>
              <li>
                Consentire l&apos;ispezione della fabbrica BIS all&apos;estero.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La Certificazione BIS è richiesta per produttori di mobili
              artigianali o su piccola scala?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, se il prodotto di mobili è coperto da uno standard BIS
              obbligatorio, anche PMI, startup e unità su piccola scala devono
              ottenere la Certificazione BIS. Non c&apos;è esenzione basata sul
              volume di produzione.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La Certificazione BIS è richiesta per mobili in legno?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, i prodotti di mobili in legno come letti, sedie, tavoli,
              scrivanie e unità di stoccaggio possono richiedere Certificazione
              BIS se rientrano in standard notificati. Gli standard BIS si
              applicano sia ai mobili in legno che in metallo, a seconda del
              tipo di prodotto e dell&apos;uso.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Una Licenza BIS può coprire più modelli di mobili?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, più modelli o varianti possono essere coperti da una singola
              Licenza BIS, a condizione che:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Rientrino nello stesso Standard IS</li>
              <li>Costruzione, materiale e parametri di design siano simili</li>
              <li>BIS approvi il raggruppamento durante la domanda.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La Certificazione BIS può essere trasferita a un altro produttore?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. La Licenza BIS non è trasferibile. Ogni produttore deve
              ottenere il proprio Certificato BIS, anche se il design del
              prodotto è identico.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Cos&apos;è il Certificato BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              È una prova ufficiale di conformità agli Standard BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              La Certificazione BIS è obbligatoria per i mobili?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, per i prodotti di mobili coperti da standard notificati.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Come ottenere la Certificazione BIS in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Attraverso test, ispezione e approvazione della licenza BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Cos&apos;è il Marchio BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Un marchio di conformità che mostra l&apos;approvazione BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Costo della Certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dipende dal tipo di prodotto, test e ambito.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Forma Completa BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={2} />
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
              I Nostri Servizi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Il Miglior Consulente per Certificati dell&apos;India
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
              Marchio BIS (Licenza ISI) per Produzione Estera
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
              Certificazione di Registrazione CDSCO
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
              Registrazione BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Gestione dei Rifiuti Plastici"
                title="Gestione dei Rifiuti Plastici"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione dei Rifiuti Plastici
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="Logo Certificato EPR"
                title="Logo Certificato EPR"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazioni Certificato EPR
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
              Certificazioni Certificato LMPC
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
              Certificato di Registrazione BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="Logo Marchio ISI"
                title="Logo Marchio ISI"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              MARCHIO ISI (BIS) per Produttori Indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
