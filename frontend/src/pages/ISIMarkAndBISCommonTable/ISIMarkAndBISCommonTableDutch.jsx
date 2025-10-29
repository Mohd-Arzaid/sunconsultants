import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const productsData = [
  { 
    id: 1,
    isNumber: "IS 12330",
    product: "Portland Cement Bestand tegen Sulfaat",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "Portland Cement met Laag Warmte",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Portland Pozzolana Cement-Deel 1 Gebaseerd op Vliegas",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Portland Pozzolana Cement-Deel 2 Gebaseerd op Gecalcineerde Klei",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "Gewoon Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "Metselwerk Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "Portland Slakken Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "Hoog Alumina Cement voor Structureel Gebruik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "Supersulfaat cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "Snelhardend Portland cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "Wit Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "Hydrofoob Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "Oliebron Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Samenstelling Cement- Specificatie.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Microfijn Gewoon Portland Cement- Specificatie.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "Hoog Alumina Vuurvast Cement.",
    notificationText: "",
    notificationLink: "",
  },

  // Elektrische Draden, Kabels, Apparaten en Beveiligingsapparaten en Accessoires
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Aardlekschakelaars voor huishoudelijk gebruik en soortgelijke toepassingen-Deel 1 Automatische schakelaars zonder geïntegreerde overstroombeveiliging (RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Aardlekschakelaars voor huishoudelijk gebruik en soortgelijke toepassingen-Deel 2 Automatische schakelaars met geïntegreerde overstroombeveiliging (RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "AC watt-uur meters, klasse 0.5, 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "AC statische watt-uur meters, klasse 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "AC statische transformator aangedreven watt-uur en VAR-uur meters, klasse 0.2S & 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Zelfballast Lampen voor Algemene Verlichtingsdiensten – Deel 1 : Veiligheidsvereisten & Deel 2 : Prestatievereisten",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Veiligheid van huishoudelijke en soortgelijke elektrische apparaten – Elektrisch strijkijzer",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Veiligheid van huishoudelijke en soortgelijke elektrische apparaten – Elektrische onderdompelbare waterverwarmers",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Veiligheid van huishoudelijke en soortgelijke elektrische apparaten – Elektrische fornuizen",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Veiligheid van huishoudelijke en soortgelijke elektrische apparaten - Kamerverwarmers",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Schakelaars voor huishoudelijk gebruik en soortgelijke doeleinden",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Wolfraam gloeidraad algemene service elektrische lampen (tot 100 W)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Elastomeer geïsoleerde kabels (Deel.1): Voor werkende spanningen tot en met 1100 V",
    notificationText: "",
    notificationLink: "",
  },

  // Batterijen
  {
    id: 32,
    isNumber: "IS 8144",
    product: "Meervoudige droge batterijen",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Voedsel & Gerelateerde Producten (Gedeclareerd niet verplicht van verplichte BIS certificering)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Opvolgformule – aanvullend voedsel",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Verwerkte granen gebaseerd aanvullend voedsel",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "Melkpoeder",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Gecondenseerde melk, gedeeltelijk afgeroomd en afgeroomde gecondenseerde melk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Gezoete ultra hoge temperatuur behandelde gecondenseerde melk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Afgeroomd melkpoeder, standaard kwaliteit",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Afgeroomd melkpoeder, extra kwaliteit",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "Verpakt Natuurlijk Mineraalwater",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "Melkvervangers voor zuigelingen",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "Voedsel voor Speciaal Medisch Doel bestemd voor Zuigelingen",
    notificationText: "",
    notificationLink: "",
  },

  // Flesjes
  {
    id: 43,
    isNumber: "IS 14625",
    product: "Plastic Flesjes",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "Glas Flesjes",
    notificationText: "",
    notificationLink: "",
  },

  // Olie Druk Kachels
  {
    id: 45,
    isNumber: "IS 10109",
    product: "Olie druk kachel, offset brander type",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "Meerdere brander olie druk kachels",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "Olie druk kachels",
    notificationText: "",
    notificationLink: "",
  },

  // Automobiel Accessoires
  {
    id: 48,
    isNumber: "IS 13098",
    product: "Automobiel voertuigen – Binnenbanden voor pneumatische banden",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "Automobiel voertuigen – Pneumatische banden voor twee- en driewielige motorvoertuigen",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "Automobiel voertuigen - Pneumatische banden voor personenauto's – Diagonaal en radiaal lagen",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "Automobiel voertuigen - Pneumatische banden voor commerciële voertuigen - Diagonaal en radiaal lagen",
    notificationText: "",
    notificationLink: "",
  },

  // Cilinder, Ventielen en Regelaar
  {
    id: 52,
    isNumber: "IS 14899",
    product: "Vloeibaar gemaakte petroleumgas containers voor automobiel gebruik",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "Multifunctionele ventielassemblage voor permanent gefixeerde vloeibaar gemaakte petroleumgas (LPG) containers voor automobiel gebruik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Gelaste laagkoolstofstaal cilinders met meer dan 5 liter watercapaciteit voor lage druk vloeibaar gemaakte gassen Deel 4 cilinders voor toxische en corrosieve gassen",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Gelaste laagkoolstofstaal gascilinder met meer dan 5 liter watercapaciteit voor lage druk vloeibaar gemaakte gassen Deel 1 cilinders voor vloeibaar gemaakt petroleumgas (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Gelaste laagkoolstofstaal gascilinder met meer dan 5 liter watercapaciteit voor lage druk vloeibaar gemaakte gassen Deel 2 cilinders voor vloeibaar gemaakte gassen anders dan LPG.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "Ventiel fittingen voor gecomprimeerde gascilinder exclusief vloeibaar gemaakt petroleumgas cilinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "Yoke Type Ventiel Verbinding voor Kleine Medische Gascilinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "Gelaste laagkoolstofstaal cilinders voor lage druk vloeibaar gemaakte gassen niet meer dan 5 liter watercapaciteit",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Herbruikbare Naadloos staal gascilinders Deel 1 Genormaliseerde staal cilinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Herbruikbare Naadloos staal gascilinders Deel 2 Geharde en getempereerde staal cilinders met treksterkte minder dan 1100 MPa (112 kgf/mm2)",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableDutch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const tableRef = useRef(null);

  const filteredProducts = productsData.filter(
    (product) =>
      product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const scrollToTableTop = () => {
    if (tableRef?.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  return (
    <section ref={tableRef} className="w-full pb-12 ">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Producten onder BIS Certificering volgens Indiase Normen
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          De volgende tabel vermeldt producten die BIS certificering vereisen in
          India samen met hun toepasselijke Indiase Standaard (IS) nummers. Deze
          normen garanderen kwaliteit, veiligheid en betrouwbaarheid van producten op de
          Indiase markt.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Zoek naar producten op naam of IS nummer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  Nr.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS Nr.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  Product
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Klik op de gegeven link voor meldingsdetails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.notificationText ? (
                      <>
                        {item.notificationText.split("\n").map((line, idx) =>
                          idx === 1 && item.notificationLink ? (
                            <div key={idx}>
                              <a
                                href={item.notificationLink}
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {line}
                              </a>
                            </div>
                          ) : (
                            <div key={idx}>{line}</div>
                          )
                        )}
                      </>
                    ) : (
                      " "
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-end items-center mt-6">
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Vorige
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Pagina {currentPage} van {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Volgende
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
