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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateCompsitSyntheticFibreItalian = () => {
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

export default BISCertificateCompsitSyntheticFibreItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Corde in Fibra Sintetica Composita | IS 14928:2001 Licenza BIS";
  const ogTitle =
    "Certificazione BIS per Corde in Fibra Sintetica Composita – Guida IS 14928:2001";
  const twitterTitle =
    "Licenza BIS per Corde in Fibra Sintetica Composita | IS 14928:2001";
  const metaDescription =
    "Ottieni Certificato BIS per Corde in Fibra Sintetica Composita secondo IS 14928:2001. Processo, documenti, test, costi e tempi per Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Corde in Fibra Sintetica Composita secondo IS 14928:2001. Scopri processo, costi, documenti, test e benefici della licenza BIS.";
  const twitterDescription =
    "Candidati per Certificato BIS per Corde in Fibra Sintetica Composita secondo IS 14928:2001. Scopri processo BIS, documenti, test, tariffe e tempi in India.";
  const metaKeywords =
    "Certificato BIS per Corde in Fibra Sintetica Composita, Licenza BIS per Corde in Fibra Sintetica Composita, IS 14928:2001, Certificazione BIS per Corde in Fibra Sintetica Composita";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/corde-in-fibra-sintetica-composita-is-14928";
  const websiteName = "Sun Certifications Italy";
  const author = "Sun Certifications Italy";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification Italy";

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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Ultimi Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificato BIS per Corde in Fibra Sintetica Composita – IS
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
          Certificazione BIS Corde in Fibra Sintetica Composita – Guida Completa a
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="Licenza BIS per Corde in Fibra Sintetica Composita"
            alt="Certificato BIS per Corde in Fibra Sintetica Composita - IS 14928:2001 Certificazione BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le corde in fibra sintetica composita sono ampiamente utilizzate nelle operazioni
          marittime, porti e approdi, installazioni offshore, pesca,
          navigazione, costruzione, agricoltura e movimentazione di materiali pesanti.
          Queste corde sono progettate combinando due o più fibre sintetiche
          come poliestere, polipropilene, nylon o altre fibre artificiali
          per fornire un mix equilibrato di resistenza, flessibilità, resistenza all'abrasione,
          galleggiabilità e durata. Poiché le corde in fibra sintetica composita sono spesso
          utilizzate in applicazioni di carico, traino, ormeggio,
          sollevamento e sicurezza critica, anche un piccolo difetto di qualità
          può portare a incidenti gravi, danni alle attrezzature o guasti operativi.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per controllare questi rischi e garantire una qualità costante, il Governo
          indiano richiede la Certificazione BIS per Corde in Fibra Sintetica Composita
          secondo lo Standard Indiano applicabile IS 14928:2001. Un Certificato BIS valido
          per Corde in Fibra Sintetica Composita è un requisito legale
          per produttori e importatori prima che tali prodotti possano essere
          fabbricati, venduti, distribuiti o importati nel mercato indiano.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa pagina serve come guida completa focalizzata sulla conformità che spiega
          la Certificazione BIS per Corde in Fibra Sintetica Composita, inclusi
          l'ambito di IS 14928:2001, l'intento di sicurezza, i requisiti di test,
          documentazione, considerazioni sui costi e processo di certificazione passo dopo passo.
          È progettata per produttori, importatori, produttori esteri,
          commercianti e venditori e-commerce che desiderano una chiara
          comprensione di come ottenere una Licenza BIS per
          Corde in Fibra Sintetica Composita in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS è un sistema di valutazione della conformità dei prodotti gestito
          dal Bureau of Indian Standards (BIS), che opera secondo la Legge BIS
          del 2016. Il BIS è responsabile dello sviluppo degli Standard Indiani,
          della certificazione dei prodotti e della garanzia che i beni venduti in India soddisfino
          standard definiti di sicurezza, qualità e prestazioni.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del Certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il significato del Certificato BIS si riferisce all'approvazione formale concessa dal BIS
          che conferma che un prodotto è conforme allo Standard Indiano pertinente.
          Una volta certificato, il produttore è autorizzato a utilizzare il Marchio di Certificazione BIS,
          comunemente noto come Marchio ISI, sul prodotto e sull'imballaggio.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Spiegazione del Marchio ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il Marchio ISI indica che:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Il prodotto è stato testato in un laboratorio riconosciuto dal BIS</li>
          <li>L'impianto di produzione è stato valutato dai funzionari del BIS</li>
          <li>
            Meccanismi di controllo qualità e sorveglianza continui sono in atto
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Perché esiste il BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il BIS esiste per:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteggere la sicurezza dei consumatori e dei lavoratori</li>
          <li>Prevenire la circolazione di prodotti di qualità inferiore</li>
          <li>Garantire uniformità e affidabilità dei beni industriali</li>
          <li>Rafforzare l'applicazione normativa e il commercio equo</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per le corde in fibra sintetica composita—spesso utilizzate in condizioni pericolose e
          ad alto carico—la certificazione BIS svolge un ruolo cruciale nella
          prevenzione degli incidenti e nella garanzia della qualità.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Standard BIS Applicabile per Corde in Fibra Sintetica Composita
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo Standard Indiano applicabile per questo prodotto è:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Corde in Fibra Sintetica Composita
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questo standard specifica i requisiti per materiali, costruzione,
          dimensioni, caratteristiche prestazionali, marcatura, campionamento e
          test delle corde in fibra sintetica composita.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ambito di IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14928:2001 copre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Corde fabbricate utilizzando una combinazione di diverse fibre sintetiche
          </li>
          <li>
            Varie costruzioni di corde come strutture intrecciate e tese
          </li>
          <li>
            Corde destinate ad applicazioni marittime, di pesca, industriali e di uso generale
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Intento di Sicurezza, Prestazioni e Test
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard mira a garantire:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adeguata resistenza alla rottura e capacità di carico</li>
          <li>Dimensioni costanti e qualità della costruzione</li>
          <li>
            Resistenza all'abrasione, umidità e degradazione ambientale
          </li>
          <li>Prestazioni prevedibili e sicure durante tutta la vita di servizio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chi Deve Conformarsi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La conformità a IS 14928:2001 è obbligatoria per:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani di corde in fibra sintetica composita</li>
          <li>Importatori che forniscono queste corde nel mercato indiano</li>
          <li>Produttori esteri che vendono attraverso rappresentanti indiani</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la Certificazione BIS è Obbligatoria per Corde in Fibra Sintetica Composita
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Rischi per la Sicurezza dei Consumatori e dei Lavoratori
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Le corde in fibra sintetica composita sono utilizzate in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Operazioni di ormeggio e traino</li>
          <li>Sollevamento e fissaggio di carichi pesanti</li>
          <li>Reti da pesca e attrezzature marittime</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una rottura della corda può causare lesioni, perdita di vite, danni alla nave
          e ritardi nei progetti.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Conformità Governativa
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Secondo le notifiche BIS e i requisiti di controllo qualità, i prodotti
          coperti da IS 14928:2001 non possono essere legalmente venduti senza certificazione
          BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Implicazioni Legali
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità può portare a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro di prodotti non certificati</li>
          <li>Penalità finanziarie secondo la Legge BIS</li>
          <li>Prosecuzione e azione legale</li>
          <li>Rifiuto dello sdoganamento</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Benefici di Mercato e Marchio
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una Licenza BIS per Corde in Fibra Sintetica Composita migliora:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>La fiducia dei clienti</li>
          <li>L'idoneità per gare governative e PSU</li>
          <li>Credibilità del marchio nei mercati domestici e di esportazione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di Certificazione BIS Passo dopo Passo per Corde in Fibra Sintetica Composita
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicabilità e Identificazione dello Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo inizia confermando che il prodotto rientra in IS
          14928:2001. Questo comporta l'identificazione di:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Composizione e miscela delle fibre</li>
          <li>Tipo di costruzione della corda</li>
          <li>Intervallo di diametro e applicazione prevista</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          L'identificazione accurata evita errori di test e rifiuto dell'applicazione.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processo di Applicazione Online BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I produttori devono candidarsi BIS online attraverso il portale BIS inviando:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli del prodotto</li>
          <li>Informazioni sulla fabbrica e sulla produzione</li>
          <li>Disposizioni di controllo qualità</li>
          <li>Dettagli della richiesta di test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Un'Applicazione BIS compilata correttamente è fondamentale per l'elaborazione tempestiva.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tariffe e Struttura dei Costi
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il costo del certificato BIS include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffe di applicazione</li>
          <li>Costi di test in laboratori riconosciuti dal BIS</li>
          <li>Tariffe di ispezione della fabbrica</li>
          <li>Tariffe annuali di licenza e marcatura</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il costo complessivo della certificazione BIS varia a seconda della costruzione della corda,
          dell'intervallo di dimensioni e della complessità dei test. Una pianificazione adeguata
          aiuta a gestire efficacemente il costo della certificazione BIS e il costo della licenza BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Test dei Campioni di Prodotto (secondo IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I campioni di prodotto vengono prelevati e testati in laboratori riconosciuti dal BIS per
          verificare la conformità con tutti i requisiti dello standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ispezione della Fabbrica e Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I funzionari del BIS conducono un audit della fabbrica per verificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Controllo del processo di produzione</li>
          <li>Gestione delle materie prime</li>
          <li>Impianti di test interni</li>
          <li>Sistemi e registri di garanzia qualità</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Concessione della Licenza BIS e Marchio ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una volta soddisfatti tutti i requisiti, il BIS concede la Licenza del Bureau of Indian
          Standards, permettendo al produttore di utilizzare il Marchio ISI sulle corde in fibra
          sintetica composita.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformità Post-Certificazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo la certificazione, il licenziatario deve:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mantenere una qualità costante del prodotto</li>
          <li>Permettere audit di sorveglianza periodici</li>
          <li>Informare il BIS di qualsiasi modifica nel materiale, processo o design</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti del Produttore
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di registrazione della fabbrica</li>
          <li>Diagramma di flusso del processo di produzione</li>
          <li>Elenco di macchinari e attrezzature di test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di costituzione della società</li>
          <li>Registrazione GST</li>
          <li>Lettera di autorizzazione per il firmatario</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Specifiche del prodotto e disegni</li>
          <li>Specifiche delle materie prime</li>
          <li>Procedure di test interne</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti di Applicazione BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di applicazione BIS compilato correttamente</li>
          <li>Lettera di richiesta di test</li>
          <li>Dettagli di marcatura ed etichettatura</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questi collettivamente formano i DOCUMENTI DI CERTIFICAZIONE BIS obbligatori.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test secondo IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          I test obbligatori includono:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausola
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisito
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Costruzione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Struttura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Trattamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Corda
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Diametro
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Massa
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Resistenza alla Rottura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lunghezza
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tutti i test devono essere condotti solo in laboratori riconosciuti dal BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni e Come Evitarle
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Classificazione Errata del Prodotto</strong>
            <br />
            Soluzione: Condurre una valutazione tecnica pre-certificazione.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Fallimenti dei Test</strong>
            <br />
            Soluzione: Allineare la qualità delle materie prime e i controlli di processo con IS
            14928:2001.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Documentazione Incompleta</strong>
            <br />
            Soluzione: Preparare attentamente i documenti specifici BIS e verificare prima
            della presentazione.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Non Conformità dell'Audit</strong>
            <br />
            Soluzione: Mantenere registri appropriati, calibrazione e controlli qualità interni.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefici della Certificazione BIS per Produttori e Importatori
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Benefici Legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conformità con le normative indiane</li>
          <li>Sdoganamento agevole</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Benefici Commerciali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Idoneità per gare governative e istituzionali</li>
          <li>Migliore accettazione degli acquirenti</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Benefici del Marchio
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uso autorizzato del Marchio BIS</li>
          <li>Maggiore fiducia e credibilità di mercato</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Espansione del Mercato
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ingresso nei settori regolamentati</li>
          <li>Crescita aziendale a lungo termine</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalità per Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato ottenimento della certificazione BIS può portare a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penalità finanziarie pesanti</li>
          <li>Sequestro o richiamo del prodotto</li>
          <li>Divieti di importazione</li>
          <li>Prosecuzione legale</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Ha Bisogno della Certificazione BIS per Corde in Fibra Sintetica Composita?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Importatori</li>
          <li>Produttori esteri che forniscono all'India</li>
          <li>Commercianti e distributori</li>
          <li>Venditori e-commerce</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Qualsiasi entità che colloca corde in fibra sintetica composita nel mercato indiano
          deve garantire la conformità BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenere un Certificato BIS per Corde in Fibra Sintetica Composita secondo
          IS 14928:2001 è sia un obbligo legale che un requisito di sicurezza
          critico. Una Certificazione BIS/Licenza BIS valida per Corde in Fibra Sintetica Composita garantisce la conformità normativa, protegge gli utenti finali
          e migliora la credibilità del mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per produttori e importatori, la certificazione BIS non riguarda solo
          l'approvazione—riguarda fiducia, sicurezza e crescita aziendale sostenibile.
          Con una preparazione tecnica adeguata e una guida esperta, il processo di certificazione BIS in India può essere completato agevolmente ed
          efficientemente.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificazione BIS per Corde in Fibra Sintetica Composita
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Qual è la forma completa di BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. La certificazione BIS è obbligatoria per le corde in fibra sintetica composita?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, secondo IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Qual è la forma completa del Certificato BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Posso candidarmi per il certificato BIS online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, candidati BIS online attraverso il portale ufficiale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Quanto tempo richiede la certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Tipicamente 1-2 mesi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Qual è il costo della certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Varia in base all'ambito dei test e dell'audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Gli importatori hanno bisogno della certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Gli importatori devono garantire che i prodotti siano certificati.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Possono candidarsi i produttori esteri?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, attraverso un Rappresentante Indiano Autorizzato.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. La registrazione BIS è la stessa della licenza BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, le corde in fibra richiedono una licenza BIS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Cosa succede se un prodotto fallisce i test?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sono richiesti azioni correttive e nuovi test.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. La marcatura ISI è obbligatoria?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, dopo la certificazione.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Per quanto tempo è valida la licenza BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Di solito 1-2 anni, rinnovabile.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Gli audit di sorveglianza sono obbligatori?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, il BIS conduce audit periodici.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. L'ambito della licenza può essere esteso in seguito?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, attraverso l'approvazione dell'estensione dell'ambito.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. I prodotti non certificati possono essere venduti online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, le vendite e-commerce richiedono anche la conformità BIS.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="Certificato BIS per Corde in Fibra Sintetica Composita - IS 14928:2001 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadItalian />

        <FaqAuthorItalian questionNumber={1} />
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
                Miglior Consulente di Certificati d'Italia
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
              Marchio BIS (Licenza ISI) per Produttori Esteri
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
                alt="BISCRS logo"
                title="BISCRS logo"
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
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione dei Rifiuti di Plastica
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
                alt="LMPC logo"
                title="LMPC logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISIMark logo"
                title="ISIMark logo"
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
