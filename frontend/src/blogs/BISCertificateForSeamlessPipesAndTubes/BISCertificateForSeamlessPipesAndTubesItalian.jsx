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

const BISCertificateForSeamlessPipesAndTubesItalian = () => {
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

export default BISCertificateForSeamlessPipesAndTubesItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per Tubi e Tubi Senza Saldatura | Licenza BIS IS 17875:2022";
  const ogTitle =
    "Certificazione BIS per Tubi e Tubi Senza Saldatura – Guida IS 17875:2022";
  const twitterTitle =
    "Licenza BIS per Tubi e Tubi Senza Saldatura | IS 17875:2022";
  const metaDescription =
    "Ottieni il Certificato BIS per Tubi e Tubi Senza Saldatura ai sensi di IS 17875:2022. Processo, documenti, test, costi e tempistiche per la Certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla Certificazione BIS per Tubi e Tubi Senza Saldatura secondo IS 17875:2022. Scopri processo, costi, documenti, test e benefici della licenza BIS.";
  const twitterDescription =
    "Richiedi il Certificato BIS per Tubi e Tubi Senza Saldatura ai sensi di IS 17875:2022. Scopri il processo BIS, documenti, test, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per Tubi e Tubi Senza Saldatura, Licenza BIS per Tubi e Tubi Senza Saldatura, IS 17875:2022, Certificazione BIS per Tubi e Tubi Senza Saldatura";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tubi-e-tubi-senza-saldatura-is-17875";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile delle Operazioni presso Sun Certification India";

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
                    Certificato BIS per Tubi e Tubi Senza Saldatura – IS
                    17875:2022
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
          Certificato BIS per Tubi e Tubi Senza Saldatura ai sensi di IS
          17875:2022 — Guida Completa alla Certificazione
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="Licenza BIS per Tubi e Tubi Senza Saldatura"
            alt="Certificato BIS per Tubi e Tubi Senza Saldatura - IS 17875:2022 Certificazione BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          I tubi e i tubi in acciaio senza saldatura sono ampiamente
          riconosciuti per le loro prestazioni superiori in applicazioni
          critiche, ad alta pressione e ad alta temperatura. Sono essenziali in
          settori come petrolio e gas, petrolchimica, raffinerie, ingegneria
          pesante, automobilistico, centrali termiche, aerospaziale, idraulica e
          sistemi meccanici generali. Poiché i tubi senza saldatura non hanno
          saldatura, offrono maggiore resistenza, uniformità e capacità di
          gestione della pressione rispetto ai tubi saldati.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire che i produttori seguano una qualità di produzione
          costante e forniscano prodotti sicuri e privi di difetti nel mercato
          indiano, il Governo dell&apos;India ha reso obbligatoria la
          Certificazione BIS per tubi e tubi senza saldatura ai sensi di IS
          17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa pagina completa spiega l&apos;intero processo per ottenere una
          Licenza BIS, inclusa documentazione, test obbligatori, requisiti di
          conformità alla qualità, tariffe, tempistiche, sfide tecniche,
          benefici, sanzioni e applicabilità industriale — scritto in un formato
          esteso, molto dettagliato e ricco di SEO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la Certificazione BIS per Tubi e Tubi Senza Saldatura?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Un Certificato BIS è un&apos;approvazione ufficiale rilasciata dal
          Bureau of Indian Standards, che conferma che il produttore produce
          tubi/tubi senza saldatura secondo le specifiche definite ai sensi di
          IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          I tubi senza saldatura devono sottoporsi a test rigorosi relativi a:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistenza alla pressione</li>
          <li>Resistenza alla trazione</li>
          <li>Tenacità all&apos;impatto</li>
          <li>Piegabilità</li>
          <li>Composizione chimica</li>
          <li>Precisione dimensionale</li>
          <li>Valutazioni non distruttive</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Solo i produttori che soddisfano questi requisiti di prestazione
          ricevono il Marchio ISI, consentendo loro di produrre, importare o
          vendere legalmente tubi senza saldatura in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Obiettivi Chiave della Certificazione BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Impedire che sistemi di tubazioni scadenti o pericolosi entrino
            nelle catene di approvvigionamento industriali
          </li>
          <li>Garantire una qualità di produzione costante e affidabile</li>
          <li>
            Proteggere le industrie che si affidano alla trasmissione di fluidi
            o gas ad alta pressione
          </li>
          <li>
            Mantenere i parametri di riferimento nazionali per sicurezza e
            qualità
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Comprensione di IS 17875:2022 — Lo Standard Indiano per Tubi e Tubi
          Senza Saldatura
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 specifica i requisiti di qualità, test, produzione e
          prestazioni per tubi e tubi in acciaio senza saldatura destinati a
          servizio generale.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ambito della Licenza BIS per Tubi e Tubi Senza Saldatura
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Questo standard copre i requisiti per tubi e tubi
          in acciaio inossidabile senza saldatura per servizi generali.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Questo standard non specifica i requisiti per
          tubi e tubi in Acciaio Inossidabile senza saldatura destinati a scopi
          distinti, che sono coperti da Standard Indiani separati.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicazioni Coperte da IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Condutture petrolio e gas</li>
          <li>Servizio fluido ad alta temperatura</li>
          <li>Tubi caldaia</li>
          <li>Impianti di lavorazione chimica</li>
          <li>Sistemi idraulici e pneumatici</li>
          <li>Scambiatori di calore</li>
          <li>Applicazioni strutturali</li>
          <li>Componenti automobilistici</li>
          <li>Applicazioni vapore</li>
          <li>Condutture industriali ad alta pressione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Parametri di Qualità Chiave in IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Requisiti di Composizione Chimica:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Specifica i limiti per carbonio, manganese, cromo, nichel, molibdeno,
          zolfo, fosforo, ecc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Proprietà Meccaniche:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistenza alla trazione</li>
          <li>Resistenza allo snervamento</li>
          <li>Durezza</li>
          <li>Duttilità</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Tolleranze Dimensionali:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diametro esterno</li>
          <li>Spessore della parete</li>
          <li>Tolleranze di lunghezza</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Condizioni Superficiali:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          I tubi devono essere privi di crepe, laminazioni, saldature,
          scalfitture o qualsiasi difetto dannoso.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Test Idrostatico:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Garantisce che i tubi possano resistere alla pressione interna senza
          perdite.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Test Non Distruttivo (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Include correnti parassite, test ultrasonici o test particelle
          magnetiche.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo Completo di Certificazione BIS per Tubi Senza Saldatura (IS
          17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il processo di certificazione BIS per tubi senza saldatura è più
          tecnico e dettagliato rispetto alla maggior parte degli altri prodotti
          perché i requisiti di produzione e test sono estesi. Di seguito è
          riportata una spiegazione passo-passo molto dettagliata.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 1 — Determinare l&apos;Applicabilità e la Categorizzazione
          del Prodotto
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il produttore deve:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identificare tutti i gradi di acciaio utilizzati</li>
          <li>Determinare le dimensioni e gli intervalli di spessore</li>
          <li>
            Confermare se tutte le varianti rientrano nell&apos;ambito di IS
            17875
          </li>
          <li>Preparare la classificazione del prodotto per i test BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Una singola licenza BIS può coprire più dimensioni e gradi se
          condividono la stessa struttura di produzione e processo.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 2 — Preparare la Documentazione e Presentare la Domanda BIS
          Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il produttore deve presentare domanda sul Portale BIS Online Manak.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le informazioni includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dettagli e layout della fabbrica</li>
          <li>Capacità e processi di produzione</li>
          <li>Dettagli forno e trattamento termico</li>
          <li>Attrezzature per laminazione, perforazione e trafilatura</li>
          <li>Sistemi di controllo qualità</li>
          <li>Documentazione di approvvigionamento materie prime</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La presentazione errata è una delle cause più comuni di rifiuto della
          domanda BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 3 — Pagamento delle Tariffe
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Le tariffe includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffa di domanda</li>
          <li>Tariffa di elaborazione</li>
          <li>Addebiti per test di laboratorio</li>
          <li>Costi di ispezione e viaggio</li>
          <li>Tariffa di marcatura basata sul volume di produzione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 4 — Selezione Campioni e Test di Laboratorio BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I tubi senza saldatura subiscono test meccanici e chimici estesi.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Questa è la parte più dispendiosa in termini di tempo e più tecnica
          della certificazione BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test di Composizione Chimica</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Eseguito utilizzando:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Spettroscopia di emissione ottica</li>
          <li>Metodi chimici umidi</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Garantisce l&apos;esatta composizione chimica secondo IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test Meccanici</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Test di Trazione</strong> — Valuta la resistenza alla
            trazione massima, il punto di snervamento e l&apos;allungamento.
          </li>
          <li>
            <strong>Test di Durezza</strong> — Conferma la tenacità del
            materiale.
          </li>
          <li>
            <strong>Test di Schiacciamento</strong> — Testa la duttilità e la
            saldabilità (anche se senza saldatura, lo schiacciamento verifica
            l&apos;integrità del materiale).
          </li>
          <li>
            <strong>Test di Svasatura / Bordo</strong> — Garantisce la
            deformabilità senza crepe.
          </li>
          <li>
            <strong>Test di Impatto (Charpy)</strong> — Valuta le prestazioni a
            basse temperature.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Test Idrostatico</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          I tubi sono sottoposti ad alta pressione interna per garantire che non
          si verifichino perdite o deformazioni.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Test Non Distruttivo</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Obbligatorio per rilevare difetti interni.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          I metodi includono:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ispezione Ultrasonica</li>
          <li>Esame Correnti Parassite</li>
          <li>Ispezione Particelle Magnetiche (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Ispezione Visiva e Dimensionale</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">Valuta:</p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Finitura superficiale</li>
          <li>Dirittura</li>
          <li>Ovalità</li>
          <li>Tolleranza di spessore</li>
          <li>Precisione del diametro</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Esame Metallurgico</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          L&apos;analisi della microstruttura conferma la struttura del grano,
          l&apos;efficacia del trattamento termico e la stabilità del materiale.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 5 — Ispezione Fabbrica BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una volta che i risultati dei test sono positivi, gli ufficiali BIS
          visitano la fabbrica.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Ispezionano:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stoccaggio materie prime</li>
          <li>Processi forno/trattamento termico</li>
          <li>
            Laminatoi di perforazione, riduttori e banchi di trafilatura a
            freddo
          </li>
          <li>Struttura di test idrostatico</li>
          <li>Struttura NDT</li>
          <li>Attrezzature di laboratorio e calibrazione</li>
          <li>Registri di controllo qualità</li>
          <li>Verifica capacità di produzione</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          La fabbrica deve conformarsi pienamente allo Schema di Test e
          Ispezione (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 6 — Concessione della Licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Se i test e l&apos;ispezione soddisfano i requisiti BIS, il produttore
          riceve:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato BIS</li>
          <li>Numero CML</li>
          <li>
            Autorizzazione all&apos;uso del Marchio ISI sui tubi senza saldatura
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS può rifiutare le domande se anche un solo requisito non è
          soddisfatto — rendendo la guida esperta estremamente preziosa.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          PASSAGGIO 7 — Obblighi Post-Certificazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Utilizzare correttamente il Marchio ISI su etichette, imballaggi e
            tubi
          </li>
          <li>Mantenere test interni secondo STI</li>
          <li>Sottoporsi a ispezioni di sorveglianza BIS regolari</li>
          <li>Garantire che ogni lotto sia conforme a IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il mancato mantenimento della conformità può comportare la sospensione
          o la cancellazione della licenza.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti Richiesti per la Certificazione BIS dei Tubi Senza Saldatura
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Documenti di Produzione e Manifattura
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Licenza fabbrica</li>
          <li>Diagramma di layout con posizionamento macchinari</li>
          <li>Manuale del processo di controllo qualità</li>
          <li>Registri trattamento termico</li>
          <li>Certificati di test del mulino materie prime</li>
          <li>Dettagli processo laminazione/perforazione</li>
          <li>Dettagli banco di trafilatura</li>
          <li>Certificati di calibrazione per attrezzature di test</li>
          <li>Rapporti di test interni</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Documenti Tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Distinta materiali</li>
          <li>Specifiche grado chimico</li>
          <li>Fogli proprietà meccaniche</li>
          <li>Grafici tolleranze dimensionali</li>
          <li>Disegni e specifiche dei tubi</li>
          <li>Documentazione sistema di tracciabilità materiali</li>
          <li>Procedure operative standard per la produzione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Documenti Legali e Organizzativi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lettera di autorizzazione</li>
          <li>Documento di proprietà marchio/marchio commerciale</li>
          <li>Prove di identità e indirizzo</li>
          <li>Impegni e dichiarazioni secondo i requisiti BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di Test per Tubi Senza Saldatura ai sensi di IS 17875:2022
        </h2>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clausola
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requisiti
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisi Panchina
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Analisi Prodotto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Requisiti di Trazione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubi
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Svasatura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Schiacciamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensione del Grano
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test di Tenuta alle Perdite
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lavorazione, Finitura, Aspetto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensioni e Tolleranze
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide Comuni nella Certificazione BIS
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fallimento nel test di composizione chimica</strong>
            <br />
            Si verifica a causa di gradi di acciaio inconsistenti.
          </li>
          <li>
            <strong>Fallimento dei test meccanici</strong>
            <br />
            Spesso causato da trattamento termico errato.
          </li>
          <li>
            <strong>Rifiuto NDT</strong>
            <br />
            Crepe interne o inclusioni possono causare il fallimento del
            campione.
          </li>
          <li>
            <strong>Calibrazione inadeguata</strong>
            <br />
            Porta a dati di test imprecisi.
          </li>
          <li>
            <strong>Non conformità STI</strong>
            <br />
            La tenuta dei registri errata durante l&apos;ispezione diventa un
            motivo principale di rifiuto.
          </li>
          <li>
            <strong>Variazione dimensionale</strong>
            <br />
            Le inconsistenze del diametro o dello spessore del tubo causano il
            fallimento.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefici della Certificazione BIS per Tubi Senza Saldatura
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approvazione legale per produrre/vendere in India</li>
          <li>Garantisce sicurezza e affidabilità</li>
          <li>Migliora la reputazione del marchio</li>
          <li>Essenziale per gare d&apos;appalto governative</li>
          <li>Richiesto da industrie PSU e private</li>
          <li>Protegge i consumatori da prodotti scadenti</li>
          <li>Migliora la competitività delle esportazioni</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per Non Conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Ai sensi della Legge BIS, la vendita di tubi senza saldatura non
          certificati comporta:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Confisca del prodotto</li>
          <li>Sanzioni pesanti</li>
          <li>Chiusura della produzione</li>
          <li>Restrizioni all&apos;importazione</li>
          <li>Blacklist del marchio</li>
          <li>Persecuzione penale</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi Deve Ottenere la Certificazione BIS?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Produttori stranieri che esportano in India</li>
          <li>Commercianti (proprietari di marchi)</li>
          <li>Aziende OEM e ingegneristiche</li>
          <li>Importatori e grossisti</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ogni unità di produzione deve ottenere una licenza separata.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il Certificato BIS per Tubi e Tubi Senza Saldatura ai sensi di IS
          17875:2022 è un requisito normativo critico che garantisce che i tubi
          di servizio ad alta pressione soddisfino gli standard rigorosi di
          sicurezza e qualità dell&apos;India. Dalla composizione chimica ai
          test non distruttivi avanzati, BIS garantisce che ogni tubo
          certificato sia resistente, privo di difetti e capace di funzionare in
          condizioni industriali impegnative.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Con una guida professionale, i produttori possono semplificare il
          percorso di certificazione, minimizzare i ritardi e raggiungere la
          conformità senza problemi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ — Certificazione BIS Tubi Senza Saldatura (Estesa e Ricca di SEO)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Perché la Certificazione BIS è obbligatoria per i tubi senza
                saldatura?
              </strong>
              <br />
              Perché i tubi senza saldatura sono utilizzati in applicazioni ad
              alta pressione e critiche per la sicurezza. Le normative
              governative garantiscono che solo tubi di alta qualità entrino nel
              mercato indiano.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Quale standard si applica ai tubi senza saldatura?
              </strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Quanto tempo richiede il processo di certificazione?
              </strong>
              <br />
              Tipicamente 40-60 giorni per Produttore Indiano e circa 120 giorni
              per produttore straniero, a seconda del carico di test e della
              programmazione dell&apos;ispezione.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Quali test sono necessari?</strong>
              <br />
              Analisi chimica, test di trazione, durezza, idrostatico, NDT,
              schiacciamento, svasatura e controlli dimensionali.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Le aziende straniere possono richiedere la certificazione
                BIS?
              </strong>
              <br />
              Sì, attraverso lo schema FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Cosa succede se il prodotto fallisce i test?</strong>
              <br />
              Deve essere corretto e ritestato; BIS non rilascerà la licenza
              fino al raggiungimento della piena conformità.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Quali documenti sono richiesti?</strong>
              <br />
              Licenza fabbrica, elenco macchinari, attrezzature di test,
              disegni, documenti QC, certificati materie prime, ecc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. La marcatura ISI è obbligatoria?</strong>
              <br />
              Sì. È illegale vendere tubi senza saldatura senza mostrare il
              marchio ISI.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Sono consentiti più gradi in una licenza?</strong>
              <br />
              Sì, se prodotti utilizzando la stessa struttura e processo
              (soggetto all&apos;approvazione BIS).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Quanto è valida la licenza BIS?</strong>
              <br />
              1-2 anni, rinnovabile indefinitamente.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="Certificato BIS per Tubi e Tubi Senza Saldatura - IS 17875:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
                Miglior Consulente Certificati dell&apos;India
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
              Certificazione Registrazione CDSCO
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
                alt="Gestione Rifiuti di Plastica"
                title="Gestione Rifiuti di Plastica"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestione Rifiuti di Plastica
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
