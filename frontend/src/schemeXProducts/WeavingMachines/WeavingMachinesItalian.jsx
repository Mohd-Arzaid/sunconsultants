import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const WeavingMachinesItalian = () => {
  return (
    <div className="relative w-full">
      <WeavingMachinesMetaTags />
      <WeavingMachinesBreadcrumb />
      <WeavingMachinesMainContent />
      <Services />
      <VideoSection />
      <FooterItalian />
    </div>
  );
};

export default WeavingMachinesItalian;

const WeavingMachinesMetaTags = () => {
  const title =
    "Certificazione BIS Schema X per Macchine per Tessitura e Loro Assemblaggi";
  const description =
    "La Certificazione BIS Schema X è una certificazione di qualità obbligatoria per tutti i tipi di macchine per tessitura (telai) e/o loro assemblaggi, sottoassemblaggi e componenti";
  const keywords =
    "Certificazione BIS per Macchine per Tessitura, Certificazione BIS Schema X per Macchine per Tessitura, Certificazione Schema X per Macchine per Tessitura, BIS per Macchine per Tessitura, OTR per Macchine per Tessitura";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Responsabile Operazioni presso Sun Certification India";
  const ogTitle =
    "Certificazione BIS Schema X per Macchine per Tessitura in India | Guida Completa";
  const ogDescription =
    "Scopri tutto sulla Certificazione BIS Schema X per macchine per tessitura in India. Comprendi la conformità OTR 2024, il processo di Licenza BIS, i requisiti del marchio ISI e come ottenere la certificazione entro la scadenza di settembre 2026";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const WeavingMachinesBreadcrumb = () => {
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
                    <Link to="/SchemeX-Products">Prodotti SchemaX</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificazione BIS per Macchine per Tessitura
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

const WeavingMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <WeavingMachinesMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentItalian />
      </div>
    </div>
  );
};

const WeavingMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Certificazione BIS Schema X per Macchine per Tessitura
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-weaving-machines-(looms).png"
            title="Certificazione BIS Schema X per Macchine per Tessitura (Telai)"
            alt="Licenza BIS Schema X per macchine per tessitura (telai)"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          L'industria tessile e dell'abbigliamento indiana è uno dei maggiori
          sostenitori della produzione, dell'esportazione e dell'occupazione del
          paese. Al centro di questa industria ci sono le macchine per
          tessitura, necessarie per produrre tessuti per abbigliamento,
          arredamento per la casa e uso industriale. Con la domanda domestica in
          continua crescita e il grande focus del paese sulle esportazioni, c'è
          la necessità di garantire standard di qualità e sicurezza delle
          macchine per tessitura a livello nazionale.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire ciò, è stato istituito il Bureau of Indian Standards
          (BIS), l'Ente Nazionale di Standardizzazione Indiano, ed è il BIS che
          ha formulato e implementato schemi di certificazione dei prodotti in
          India dove i prodotti vengono certificati. Questi standard
          garantiscono che le macchine che entrano nel mercato indiano
          soddisfino gli Standard Indiani per prestazioni, durata e sicurezza.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In questo articolo spiegheremo il significato del Certificato BIS
          Schema X per le macchine per tessitura, il processo di conformità ai
          sensi dell'OTR per le macchine per tessitura e come ottenere la
          certificazione BIS in India, la Registrazione BIS per Macchine per
          Tessitura e l'etichettatura del marchio ISI per Macchine per
          Tessitura.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Perché BIS per le Macchine per Tessitura?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le macchine per tessitura sono utilizzate in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabbriche tessili e stabilimenti di abbigliamento</li>
          <li>Unità di produzione di arredamento per la casa</li>
          <li>Produzione di tessuti industriali</li>
          <li>Fabbriche tessili focalizzate sull'esportazione</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Senza BIS per le Macchine per Tessitura, le macchine non marchiate
          possono causare:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Tessuti di bassa qualità e difettosi.</li>
          <li>
            Tassi di guasto, problemi meccanici di dimensione e tempi di
            inattività
          </li>
          <li>Aumento dei costi operativi, sprechi e gestione dei rifiuti</li>
          <li>Violazione di contratti governativi ed esportazioni</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Il marchio BIS sulle Macchine per Tessitura fornisce garanzia ai
          consumatori e agli ispettori che il prodotto è conforme agli standard
          indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cos'è la Certificazione BIS Schema X per Macchine per Tessitura?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione BIS Schema X per Macchine per Tessitura fa parte del
          Regolamento di Valutazione della Conformità BIS, 2018, che mira a
          regolare la qualità nelle macchine critiche.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alcune caratteristiche della certificazione Schema X per Macchine per
          Tessitura:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obbligatorio per i produttori indiani e stranieri che forniscono
            all'India
          </li>
          <li>
            Copre varie macchine per tessitura in relazione agli Standard
            Indiani applicabili
          </li>
          <li>
            Richiede test delle macchine, ispezione di fabbrica e audit
            continuativi nel tempo
          </li>
          <li>
            Consente l'uso del marchio BIS ufficiale per le Macchine per
            Tessitura
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR BIS per Macchine per Tessitura
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La Certificazione Schema X diventerà obbligatoria ai sensi del
          Regolamento Tecnico Omnibus (OTR) 2024 per le Macchine per Tessitura,
          pubblicato dal Ministero dell'Industria Pesante.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scadenza: 1° settembre 2026 La richiesta per il rilascio della Licenza
          BIS per le Macchine per Tessitura è obbligatoria per tutti i
          produttori e importatori. Dopo la scadenza, le macchine per tessitura
          non registrate non possono essere vendute, importate o spedite per uso
          commerciale in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vantaggi della Certificazione BIS per Macchine per Tessitura
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Garanzia di Qualità del Prodotto: Le macchine certificate
            garantiscono produzione ininterrotta ed efficienza ottimale dei
            tessuti.
          </li>
          <li>
            Accesso al Mercato & Gare d'Appalto: La Licenza BIS per le Macchine
            per Tessitura è generalmente obbligatoria nelle gare governative e
            negli ordini di fornitura di grandi dimensioni.
          </li>
          <li>
            Fiducia dell'Acquirente: Il marchio BIS per le Macchine per
            Tessitura garantisce fiducia nei mercati domestici ed esteri.
          </li>
          <li>
            Conformità Legale & Normativa: Garantisce la conformità alle
            normative indiane ai sensi dell'OTR per le Macchine per Tessitura.
          </li>
          <li>
            Vantaggio Competitivo: Le macchine certificate sono rare
            nell'industria delle attrezzature tessili altamente competitiva.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Weaving Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Tipi di Macchine per Tessitura ai sensi della Certificazione Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Macchine per Tessitura che ricevono la certificazione Schema X:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Telai motorizzati</li>
          <li>Telai a pinza</li>
          <li>Telai a getto d'aria</li>
          <li>Telai a getto d'acqua</li>
          <li>Telai a navetta</li>
          <li>Telai automatici</li>
          <li>Macchine per tessitura speciali industriali</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Tutte devono essere conformi agli Standard Indiani applicabili (Codice
          IS) come IS 17361(Parte 6): 2020 / ISO 11111: (Parte 6): 2005
          (Requisiti di Sicurezza per Macchine Tessili Parte 6 Macchine per la
          Produzione di Tessuti). Tutti i tipi devono rispettare gli Standard
          Indiani (codice IS) pertinenti in base a design, prestazioni,
          sicurezza e conservazione dell'energia.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Processo di Licenza BIS per Macchine per Tessitura
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identificazione degli Standard Applicabili: Trovare il numero IS per
            il tipo di macchina per tessitura.
          </li>
          <li>
            Test del Prodotto: Le macchine vengono testate in laboratori
            accreditati BIS per sicurezza ed efficienza.
          </li>
          <li>
            Ispezione di Fabbrica: Gli ispettori BIS eseguono un esame
            approfondito dei processi di produzione e dei sistemi di controllo
            qualità.
          </li>
          <li>
            Presentazione della Domanda: Inviare documenti come dettagli
            tecnici, rapporti di test e manuali di qualità.
          </li>
          <li>
            Rilascio della Licenza BIS per Macchine per Tessitura: Con
            l'approvazione, i produttori potranno marchiare BIS sui prodotti.
          </li>
          <li>
            Conformità Continuativa: Audit e test vengono eseguiti regolarmente
            per garantire che continuiamo a soddisfare i nostri standard.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Sanzioni per Non Conformità
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          La non conformità alla Certificazione BIS per Macchine per Tessitura
          nell'OTR comporterà:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Divieto di vendita o importazione di macchine non certificate</li>
          <li>Pesanti multe e sequestro dei prodotti.</li>
          <li>Squalifica da lavori/gare governative</li>
          <li>
            Danni a lungo termine al marchio e alla reputazione di mercato
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Il lancio della Certificazione BIS Schema X per Macchine per Tessitura
          attraverso l'OTR per Macchine per Tessitura (2024) è una pietra
          miliare importante nell'avere un'industria tessile in India che
          utilizza macchine sicure, di qualità e affidabili.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Per produttori/importatori, ottenere la Licenza BIS per Macchine per
          Tessitura e marchiare i prodotti con il simbolo BIS non è solo
          conformità obbligatoria ma aggiunge anche valore al prodotto per il
          marketing. Ciò consolida l'affidabilità del mercato e garantisce la
          conformità, anche nel medio termine promuovendo la competitività nei
          mercati tessili domestici e internazionali.
        </p>

        <ServiceAuthorItalian />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              I Nostri Servizi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Miglior Consulente per Certificazioni in India
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
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marchio BIS (Licenza ISI) per Produttori Stranieri
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
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
                src={BISCRS}
                alt="BISCRS"
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
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
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazione Certificato EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazione Certificato LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
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
                src={ISIMarkImage}
                alt="ISIMark"
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
