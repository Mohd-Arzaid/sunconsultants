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

const BISCertificationCombinationSideCuttingPliersItalian = () => {
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




export default BISCertificationCombinationSideCuttingPliersItalian;

const MetaTags = () => {
  const title =
    "Certificato BIS per pinze combinate a taglio laterale | IS 3650:1981 Licenza BIS";
  const ogTitle =
    "Certificazione BIS per pinze combinate a taglio laterale – Guida IS 3650:1981";
  const twitterTitle =
    "Licenza BIS per pinze combinate a taglio laterale | IS 3650:1981";
  const metaDescription =
    "Ottieni il certificato BIS per pinze combinate a taglio laterale secondo IS 3650:1981. Processo, documenti, prove, costi e tempistiche per la certificazione BIS in India.";
  const ogDescription =
    "Guida completa alla certificazione BIS per pinze combinate a taglio laterale secondo IS 3650:1981. Processo, costi, documenti, prove e vantaggi della licenza BIS.";
  const twitterDescription =
    "Richiedi il certificato BIS per pinze combinate a taglio laterale secondo IS 3650:1981. Processo BIS, documenti, prove, tariffe e tempistiche in India.";
  const metaKeywords =
    "Certificato BIS per pinze combinate a taglio laterale, Licenza BIS per pinze combinate a taglio laterale, IS 3650:1981, Certificazione BIS per pinze combinate a taglio laterale";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/pinze-combinate-taglio-laterale-is-3650";
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Ultimi articoli</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificato BIS per pinze combinate a taglio laterale – IS
                    3650:1981
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
          Certificazione BIS pinze combinate a taglio laterale – Guida completa IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="Licenza BIS per pinze combinate a taglio laterale"
            alt="Certificato BIS per pinze combinate a taglio laterale - IS 3650:1981 Certificazione BIS"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le pinze combinate a taglio laterale sono tra gli utensili a mano più utilizzati
          nei lavori elettrici, nella manutenzione meccanica, nelle costruzioni, nelle unità
          produttive, nelle officine, nella manutenzione automobilistica e nelle riparazioni
          domestiche. Sono progettate per svolgere più funzioni: afferrare, piegare, torcere
          e tagliare fili. Poiché vengono spesso usate per tagliare fili metallici, conduttori
          elettrici e piccoli componenti, pinze di scarsa qualità possono causare rotture
          dell&apos;utensile, rischi di folgorazione, lesioni alle mani e gravi infortuni sul lavoro.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per garantire sicurezza, durata e qualità uniforme, il Governo dell&apos;India impone
          la conformità alle norme indiane per gli utensili a mano. Ottenere un certificato BIS
          per pinze combinate a taglio laterale secondo IS 3650:1981 è un requisito legale e
          qualitativo essenziale per produttori e importatori che vendono questi utensili in India.
          Una certificazione BIS valida per pinze combinate a taglio laterale attesta che il prodotto
          è stato testato per resistenza meccanica, efficienza di taglio, durezza del materiale
          e prestazioni di sicurezza complessive.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Questa pagina prodotto dettagliata è pensata per produttori, produttori esteri, importatori,
          commercianti, distributori, marchi di ferramenta, venditori e-commerce e professionisti
          della conformità che desiderano una comprensione completa della licenza BIS per pinze
          combinate a taglio laterale, incluso il processo di certificazione BIS in India, i requisiti
          di prova, la documentazione, i costi, le tempistiche, le sanzioni e i vantaggi.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cos&apos;è la certificazione BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          La certificazione BIS è un sistema di valutazione della conformità dei prodotti regolato
          dal Bureau of Indian Standards, l&apos;autorità nazionale indiana per standardizzazione,
          certificazione e assicurazione della qualità.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Significato del certificato BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il significato del certificato BIS si riferisce all&apos;approvazione ufficiale rilasciata dal BIS
          che conferma che un prodotto è conforme allo standard indiano applicabile (IS)
          ed è fabbricato secondo un sistema di qualità controllato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Gli obiettivi principali della certificazione BIS sono:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Proteggere i consumatori da prodotti non sicuri</li>
          <li>Garantire una qualità del prodotto costante</li>
          <li>Sostenere l&apos;applicazione delle normative</li>
          <li>Promuovere la standardizzazione nell&apos;industria indiana</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Marchio ISI spiegato
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il marchio di certificazione BIS, comunemente noto come marchio ISI, è un simbolo
          di fiducia e conformità. Per le pinze combinate a taglio laterale, il marchio ISI indica che:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>L&apos;utensile soddisfa i requisiti IS 3650:1981</li>
          <li>Le prestazioni meccaniche e di taglio sono verificate</li>
          <li>Il prodotto è approvato legalmente per la vendita in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Norma BIS applicabile per pinze combinate a taglio laterale
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Specifica per pinze combinate
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lo standard indiano applicabile a questo prodotto è IS 3650:1981, che specifica
          i requisiti per le pinze combinate con lame di taglio laterale utilizzate per
          applicazioni di presa e taglio.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Campo di applicazione IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Questa norma copre:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pinze combinate con lame di taglio laterale</li>
          <li>Requisiti di dimensioni, forma e finitura</li>
          <li>Qualità del materiale e trattamento termico</li>
          <li>Resistenza meccanica e prestazioni di taglio</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sicurezza, prestazioni e intento delle prove
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 è concepita per garantire che:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Le pinze abbiano sufficiente capacità di taglio</li>
          <li>Le ganasce e le lame non si scheggino o deformino</li>
          <li>Le impugnature offrano presa sicura e isolamento ove applicabile</li>
          <li>L&apos;utensile funzioni in modo affidabile in condizioni normali di lavoro</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chi deve conformarsi
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori di pinze combinate a taglio laterale in India</li>
          <li>Importatori e distributori</li>
          <li>Produttori esteri che riforniscono il mercato indiano</li>
          <li>Marchi che vendono pinze con etichette private</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Perché la certificazione BIS è obbligatoria per le pinze combinate a taglio laterale
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rischi per la sicurezza dei consumatori
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pinze non conformi possono causare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rottura improvvisa durante il taglio</li>
          <li>Scivolamento e lesioni alle mani</li>
          <li>Rischi di folgorazione nelle applicazioni elettriche</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformità normativa e governativa
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Secondo le norme e le notifiche BIS, gli utensili a mano come le pinze combinate
          coperte da IS 3650:1981 devono soddisfare i requisiti di certificazione BIS
          prima di essere venduti in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Implicazioni legali
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          La vendita o l&apos;importazione di pinze non certificate può comportare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sequestro del prodotto da parte delle autorità</li>
          <li>Sanzioni finanziarie</li>
          <li>Revoca delle licenze commerciali</li>
          <li>Azione legale ai sensi del BIS Act</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vantaggi per mercato e marchio
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Una licenza BIS per pinze combinate a taglio laterale aiuta i marchi a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Costruire fiducia con acquirenti e appaltatori</li>
          <li>Partecipare a gare d&apos;appalto governative e PSU</li>
          <li>Competere con marchi di ferramenta consolidati</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Processo di certificazione BIS passo dopo passo per pinze combinate a taglio laterale
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicabilità e identificazione della norma
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il primo passo è confermare che il prodotto:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rientri nelle pinze combinate a taglio laterale</li>
          <li>Sia coperto da IS 3650:1981</li>
          <li>Corrisponda al campo di applicazione della norma per dimensioni e uso</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Processo di domanda online BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I produttori devono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registrarsi sul portale BIS</li>
          <li>Selezionare IS 3650:1981 tra le norme di prodotto</li>
          <li>Compilare il modulo di domanda BIS</li>
          <li>Caricare tutti i documenti richiesti</li>
          <li>Pagare le tariffe applicabili</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Questa fase è comunemente indicata come BIS apply online o registrazione certificato BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Tariffe e struttura dei costi per la licenza BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Il costo della certificazione BIS comprende generalmente:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tariffe di domanda e di elaborazione</li>
          <li>Costi delle prove sul prodotto</li>
          <li>Costi dell&apos;ispezione in fabbrica</li>
          <li>Tariffe di licenza e marcatura</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Il costo totale della certificazione BIS dipende da:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Numero di varianti</li>
          <li>Complessità delle prove</li>
          <li>Ubicazione della fabbrica</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prove su campioni di prodotto (secondo IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          I campioni sono testati nei laboratori riconosciuti BIS per:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Durezza della lama di taglio</li>
          <li>Prestazioni di taglio</li>
          <li>Resistenza meccanica</li>
          <li>Precisione dimensionale</li>
          <li>Finitura superficiale e lavorazione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Ispezione e audit in fabbrica
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Un funzionario BIS effettua un audit in fabbrica per verificare:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Il processo di fabbricazione</li>
          <li>Trattamento termico e operazioni di finitura</li>
          <li>Sistema di controllo qualità</li>
          <li>Impianti di prova e ispezione</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rilascio della licenza BIS e marchio ISI
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dopo prove e ispezione con esito positivo:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Il BIS rilascia la licenza Bureau of Indian Standards</li>
          <li>
            Il produttore è autorizzato a utilizzare il marchio ISI sulle pinze approvate
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conformità post-certificazione
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          I requisiti successivi all&apos;approvazione includono:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ispezioni di sorveglianza</li>
          <li>Prove su campioni di mercato</li>
          <li>Rinnovo tempestivo della licenza</li>
          <li>Conformità continua a IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documenti richiesti per la certificazione BIS
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti del produttore
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di registrazione della fabbrica</li>
          <li>Diagramma di flusso del processo produttivo</li>
          <li>Elenco di macchinari e attrezzature di prova</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Certificato di costituzione della società</li>
          <li>Registrazione GST</li>
          <li>Autorizzazione al marchio (se applicabile)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti tecnici
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Disegni e specifiche del prodotto</li>
          <li>Dettagli delle materie prime</li>
          <li>Piano di trattamento termico e QC</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Documenti per la domanda BIS
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Modulo di domanda BIS</li>
          <li>Dettagli della richiesta di prova</li>
          <li>Dichiarazioni e impegni</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sono collettivamente indicati come DOCUMENTI CERTIFICATO BIS o DOCUMENTI
          CERTIFICAZIONE BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Requisiti di prova secondo IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Le prove obbligatorie includono:
        </p>

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
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fabbricazione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lavorazione e finitura
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Conservazione e imballaggio
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensioni
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Durezza
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolamento (eccetto prova di isolamento)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di isolamento
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di taglio
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di presa tubo
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di urto
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di torsione
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di carico manico
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Prova di flessione
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tutte le prove devono essere effettuate esclusivamente nei laboratori riconosciuti BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sfide comuni e come evitarle
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Problemi comuni
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fallimento nelle prove di durezza o di taglio</li>
          <li>Trattamento termico non corretto</li>
          <li>Finitura superficiale scadente</li>
          <li>Documentazione incompleta</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Buone pratiche
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eseguire pre-prove interne</li>
          <li>Seguire le procedure corrette di trattamento termico</li>
          <li>Mantenere registri di qualità per lotto</li>
          <li>Avvalersi di consulenza BIS specialistica</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vantaggi della certificazione BIS per produttori e importatori
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vantaggi legali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Piena conformità alle normative indiane</li>
          <li>Protezione da sanzioni e sequestri</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vantaggi commerciali
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Accettazione da distributori e appaltatori</li>
          <li>Idoneità per ordini all&apos;ingrosso e istituzionali</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vantaggi di branding
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Il marchio ISI aumenta la credibilità del marchio</li>
          <li>Differenziazione dai fornitori non organizzati</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Espansione del mercato
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ingresso nelle catene retail di ferramenta organizzate</li>
          <li>Maggiore accettazione nelle attività orientate all&apos;esportazione</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanzioni per mancata conformità
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          La mancata conformità può comportare:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pesanti multe pecuniarie</li>
          <li>Sequestro del prodotto</li>
          <li>Interruzione dell&apos;attività</li>
          <li>Azione legale ai sensi del BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Chi ha bisogno della certificazione BIS per pinze combinate a taglio laterale?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produttori indiani</li>
          <li>Importatori</li>
          <li>Produttori esteri (con rappresentante indiano autorizzato)</li>
          <li>Commercianti che vendono con proprio marchio</li>
          <li>Venditori e-commerce che elencano pinze</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusione
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ottenere un certificato BIS per pinze combinate a taglio laterale secondo
          IS 3650:1981 è un requisito legale e qualitativo essenziale per vendere
          questi utensili in India. La certificazione BIS per pinze combinate a taglio
          laterale garantisce sicurezza del prodotto, prestazioni costanti e conformità
          normativa, mentre la licenza BIS per pinze combinate a taglio laterale
          rafforza credibilità del marchio e accettazione sul mercato.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Per produttori, importatori e venditori, la conformità tempestiva non solo
          evita sanzioni ma apre le porte a mercati più ampi e alla crescita aziendale
          a lungo termine. Con una guida esperta, il processo di certificazione BIS
          diventa più fluido, veloce e pienamente conforme agli standard indiani.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – Certificazione BIS per pinze combinate a taglio laterale
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. La certificazione BIS è obbligatoria per le pinze combinate a taglio laterale?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, la conformità a IS 3650:1981 è obbligatoria in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. Qual è la forma estesa del certificato BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate (Certificato Bureau of Indian Standards).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. Quanto dura il processo di certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In genere 30–60 giorni lavorativi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. Qual è il costo del certificato BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Il costo dipende dall&apos;ampiezza delle prove e dalle varianti di prodotto.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Gli importatori possono richiedere la certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, con adeguata autorizzazione del produttore.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Il marchio ISI è obbligatorio?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, la marcatura ISI è obbligatoria dopo la certificazione.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. I produttori esteri possono ottenere la certificazione BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, tramite un rappresentante indiano autorizzato.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. Quali prove sono richieste secondo IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Prove di durezza, prestazioni di taglio, resistenza e dimensioni.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. L&apos;ispezione in fabbrica è obbligatoria?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, il BIS effettua un audit in fabbrica.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Più misure possono essere coperte da una sola licenza?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, previa prova e approvazione.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. Cosa succede se si vendono pinze non certificate?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Possono intervenire sanzioni, sequestro e azione legale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. La domanda BIS online è obbligatoria?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, le domande si presentano solo online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Sono richiesti rinnovi per le licenze BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, le licenze devono essere rinnovate periodicamente.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. I consulenti possono ridurre i ritardi nell&apos;approvazione?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Sì, i consulenti professionali aiutano a evitare errori e respingimenti.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="Certificato BIS per pinze combinate a taglio laterale - IS 3650:1981 PDF"
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
              I nostri servizi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Il miglior consulente certificazioni India
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
              Marchio BIS (Licenza ISI) per produzione estera
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
              Certificazione registrazione CDSCO
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
              Gestione rifiuti plastici
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
              Certificazioni certificato EPR
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
              Certificazioni certificato LMPC
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
              Certificato di registrazione BIS
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
              Marchio ISI (BIS) per produttori indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
