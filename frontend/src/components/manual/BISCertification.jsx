import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../../assets/images/BISSRimg.png";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check, Search } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "../common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import PropTypes from "prop-types";

export const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS Certification Services | ISI Mark | BIS License | Sun
          Certifications And Engineers
        </title>
        <meta
          name="description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, ISI Mark, BIS License, BIS registration, Indian Standards, product certification"
        />
        <meta name="author" content="Sun Certifications And Engineers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          property="og:description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="Sun Certifications And Engineers"
        />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ConsultantsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          name="twitter:description"
          content="Expert BIS certification services for Indian and foreign manufacturers."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications And Engineers",
              url: window.location.href,
              logo: "https://sunconsultants.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ISI Mark Certification",
                    description:
                      "ISI Mark certification for Indian manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS License for Foreign Manufacturers",
                    description:
                      "BIS License certification for foreign manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Registration Certificate",
                    description: "BIS Registration certification for products",
                  },
                },
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is BIS Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="w-full">
        <BISCHero />
        <BISCIndex />
        <BISCContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

// BISC Product Table Section
const productsData = [
  {
    id: 1,
    isNumber: "IS 12330",
    product: "Sulphate Resisting Portland Cement",
  },
  { id: 2, isNumber: "IS 12600", product: "Low heat Portland Cement" },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Portland Pozzolana Cement-Part1 Fly-ash based",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Portland Pozzolana Cement-Part 2 Calcined clay based",
  },
  { id: 5, isNumber: "IS 269", product: "Ordinary Portland Cement" },
  { id: 6, isNumber: "IS 3466", product: "Masonry Cement" },
  { id: 7, isNumber: "IS 455", product: "Portland Slag Cement" },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "High Alumina Cement for Structural use",
  },
  { id: 9, isNumber: "IS 6909", product: "Super sulphated cement" },
  { id: 10, isNumber: "IS 8041", product: "Rapid hardening Portland cement" },
  { id: 11, isNumber: "IS 8042", product: "White Portland Cement" },
  { id: 12, isNumber: "IS 8043", product: "Hydrophobic Portland Cement" },
  { id: 13, isNumber: "IS 8229", product: "Oil well Cement" },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Composite Cement- Specification.",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Microfine Ordinary Portland Cement- Specification.",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "High Alumina Refractory Cement.",
  },
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Residual current operated circuit breakers for house hold and similar uses-Part 1 Circuit breakers without integral overcurrent protection (RCCBs)",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Residual current operated circuit breakers for household and similar uses – Part 2 Circuit breakers with integral overcurrent protection(RCVOs)",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "AC watt-hour meters, class 0.5, 1 & 2",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "AC static watt-hour meters, class 1 & 2",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "AC static transformer operated watt-hour and VAR-hour meters, class 0.2S & 0.5S",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Self Ballasted Lamps for General Lighting Services – Part 1 : Safety Requirements & Part 2 : Performance Requirements",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Safety of household and similar electrical appliances – Electric iron",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Safety of household and similar electrical appliances – Electric immersion water-heaters",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Safety of household and similar electrical appliances – Electric stoves",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Safety of household and similar electrical appliances-Room heaters",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Switches for domestic and similar purposes",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Tungsten filament general service electric lamps (upto100 W )",
  },
  {
    id: 29,
    isNumber: "IS 694",
    product:
      "PVC insulated cables for working voltages up to and including 1100V",
  },
  {
    id: 30,
    isNumber: "IS 8828 *",
    product:
      "Electrical Accessories-Circuit breakers for overcurrent protection for household and similar installations",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Elastomer insulated cables (Part.1): For working voltages up to and including1100 V",
  },
  { id: 32, isNumber: "IS 8144", product: "Multi-Purpose dry batteries" },
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Follow – up formula – complimentary foods",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Processed cereal based complementary foods",
  },
  { id: 35, isNumber: "IS 1165", product: "Milk-powder" },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Condensed milk, partly skimmed and skimmed condensed milk",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Sweetened ultra high temperature treated condensed milk",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Skimmed milk-powder, standard grade",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Skimmed milk-powder, extra grade",
  },
  { id: 40, isNumber: "IS 13428", product: "Packaged Natural Mineral Water" },
  { id: 41, isNumber: "IS 14433", product: "Infant milk substitutes" },
  { id: 42, isNumber: "IS 14542", product: "Partly skimmed milk powder" },
  {
    id: 43,
    isNumber: "IS 14543",
    product:
      "Packaged Drinking Water (Other than Packaged Natural Mineral Water)",
  },
  {
    id: 44,
    isNumber: "IS 1656",
    product: "Milk- cereal Based Complementary foods",
  },
  { id: 45, isNumber: "IS 14625", product: "Plastic Feeding Bottles" },
  { id: 46, isNumber: "IS 5168", product: "Glass Feeding Bottles" },
  {
    id: 47,
    isNumber: "IS 10109",
    product: "Oil pressure stove, offset burner type",
  },
  { id: 48, isNumber: "IS 2787", product: "Multi-burner oil pressure stoves" },
  { id: 49, isNumber: "IS 1342", product: "Oil pressure stoves" },
  {
    id: 50,
    isNumber: "IS 13098",
    product: "Automotive vehicles – Tubes for pneumatic tyres",
  },
  {
    id: 51,
    isNumber: "IS 15627",
    product:
      "Automotive vehicles – Pneumatic tyres for two and three-wheeled motor vehicles",
  },
  {
    id: 52,
    isNumber: "IS 15633",
    product:
      "Automotive vehicles-Pneumatic tyres for passenger car vehicles – Diagonal and radial ply",
  },
  {
    id: 53,
    isNumber: "IS 15636",
    product:
      "Automotive vehicles- Pneumatic tyres for commercial vehicles-Diagonal and radial ply",
  },
  {
    id: 54,
    isNumber: "IS 14899",
    product: "Liquefied petroleum gas containers for automotive use",
  },
  {
    id: 55,
    isNumber: "IS 15100",
    product:
      "Multifunction valve assembly for permanently fixed liquefied petroleum gas (LPG) containers for automotive use",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Welded low carbon steel cylinders exceeding 5 litre Water capacity for low pressure liquefiable gases Part 4 Cylinders for toxic and corrosive gases",
  },
  {
    id: 57,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5 litre water capacity for low pressure liquefiable gases Part1 Cylinders for liquefied petroleum gas (LPG)",
  },
  {
    id: 58,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5-litre water capacity for low pressure liquefiable gases Part 2 Cylinders for liquefiable gases other than LPG.",
  },
  {
    id: 59,
    isNumber: "IS 3224",
    product:
      "Valve fittings for compressed gas cylinder excluding liquefied petroleum gas cylinders",
  },
  {
    id: 60,
    isNumber: "IS 3745",
    product: "Yoke Type Valve Connection for Small Medical Gas Cylinders",
  },
  {
    id: 61,
    isNumber: "IS 7142",
    product:
      "Welded low carbon steel cylinders for low pressure liquefiable gases not exceeding 5 litre water capacity",
  },
  {
    id: 62,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Refillable Seamless steel gas cylinders Part1 Normalized steel cylinders",
  },
  {
    id: 63,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Refillable Seamless steel gas cylinders Part 2 Quenched and tempered steel cylinders with tensile strength less than 1100 MPa (112 kgf/mm 2 )",
  },
  {
    id: 64,
    isNumber: "IS 7302",
    product:
      "Valve fittings for gas cylinder valves for use with breathing apparatus",
  },
  {
    id: 65,
    isNumber: "IS 7312",
    product: "Welded and seamless steel dissolved acetylene gas cylinders",
  },
  {
    id: 66,
    isNumber: "IS 8737",
    product:
      "Valve fittings for use with liquefied petroleum gas cylinders of more than 5 litre water capacity Part 2 Valve fittings for newly manufactured LPG cylinders",
  },
  {
    id: 67,
    isNumber: "IS 8776",
    product:
      "Valve Fittings for Use with Liquefied Petroleum Gas (LPG) Cylinders up to and Including 5-Litre Water Capacity",
  },
  {
    id: 68,
    isNumber: "IS 9798",
    product:
      "Low pressure regulators for use with liquefied petroleum gas (LPG) mixtures",
  },
  {
    id: 69,
    isNumber: "IS 3055 (Part 1)",
    product: "Clinical thermometers :Part1 Solid stem type",
  },
  {
    id: 70,
    isNumber: "IS 3055 (Part 2)",
    product: "Clinical thermometers :Part 2 Enclosed scale type",
  },
  {
    id: 71,
    isNumber: "IS 7620 (Part 1)",
    product: "Diagnostic Medical X-Ray Equipment",
  },
  {
    id: 72,
    isNumber: "IS 1785 (Part 1) : 1983",
    product:
      "Plain Hard-drawn Steel Wire For Pre-stressed Concrete: Part 1 Cold Drawn Stress-relieved Wire",
  },
  {
    id: 73,
    isNumber: "IS 1785 (Part 2) : 1983",
    product:
      "Plain hard-drawn steel wire for pre-stressed concrete Part 2: As drawn wire",
  },
  {
    id: 74,
    isNumber: "IS 6003:2010",
    product: "Indented wire for Pre-stressed concrete",
  },
  {
    id: 75,
    isNumber: "IS 6006:2014",
    product: "Uncoated stress relieved strand for Pre-stressed concrete.",
  },
  {
    id: 76,
    isNumber: "IS 13620:1993",
    product: "Fusion bonded epoxy coated reinforcing bars",
  },
  {
    id: 77,
    isNumber: "IS 14268:1995",
    product:
      "Uncoated Stress Relieved Low Relaxation Seven-ply Strand For Pre-stressed Concrete.",
  },
  {
    id: 78,
    isNumber: "IS 277:2003",
    product: "Galvanized steel sheets ( plain and corrugated).",
  },
  {
    id: 79,
    isNumber: "IS 2002:2009",
    product:
      "Steel plates for pressure vessels for intermediate and high temperature service including boilers.",
  },
  {
    id: 80,
    isNumber: "IS 2041:2009",
    product:
      "Steel plates for pressure vessels used at moderate and low temperature",
  },
  {
    id: 81,
    isNumber: "IS 2830:2012",
    product:
      "Carbon steel cast billet ingots ,billets, blooms and slabs for rerolling into steel for general structural purpose",
  },
  {
    id: 82,
    isNumber: "IS 1786:2008",
    product:
      "High strength deformed steel bars and wires for concrete reinforcement",
  },
  {
    id: 83,
    isNumber: "IS 648:2006",
    product:
      "Cold rolled non-oriented electrical steel sheets and strip-fully processed type (CRNO)",
  },
  {
    id: 84,
    isNumber: "IS 3024:2015",
    product: "Grain oriented electrical steel sheet & strip (CRGO)",
  },
  {
    id: 85,
    isNumber: "IS 15391:2003",
    product:
      "Oriented Electrical Steel Sheet and Strip- Semi-Processed Type- Specification.",
  },
  {
    id: 86,
    isNumber: "IS 2062:2011",
    product: "Hot rolled medium and high tensile structural steel",
  },
  {
    id: 87,
    isNumber: "IS 432 : Part 1:1982",
    product:
      "Mild Steel and Medium Tensile Steel Bars and Hard–Drawn Steel Wire for Concrete Reinforcement: Part 1 Mild steel and medium tensile steel bars",
  },
  {
    id: 88,
    isNumber: "IS 432 : Part 2:1982",
    product:
      "Mild steel and Medium Tensile steel bars and Hard–Drawn Steel Wire for Concrete Reinforcement: Part 2 Hard- Drawn Steel Wire",
  },
  {
    id: 89,
    isNumber: "IS 513 (Part-1): 2016",
    product:
      "Cold reduced carbon steel sheets and strips Part 1 Cold Forming and Drawing Purpose",
  },
  {
    id: 90,
    isNumber: "IS 513(Part-2):2016",
    product:
      "Cold reduced carbon steel sheets and strips Part 2 High Tensile and Multi-phase Steel",
  },
  {
    id: 91,
    isNumber: "IS 1079: 2017",
    product: "Hot Rolled Carbon Steel Sheet, Plate and Strip — Specification.",
  },
  {
    id: 92,
    isNumber: "IS 1875:1992",
    product: "Carbon steel billets, blooms, slabs and bars for forgings.",
  },
  {
    id: 93,
    isNumber: "IS 2879:1998",
    product: "Mild steel for metal arc welding electrodes.",
  },
  { id: 94, isNumber: "IS 3502:2009", product: "Steel Chequered Plates" },
  {
    id: 95,
    isNumber: "IS 5872:1990",
    product: "Cold Rolled Steel Strips (Box Strappings).",
  },
  {
    id: 96,
    isNumber: "IS 5986: 2017",
    product:
      "Hot Rolled Steel Sheet, Plate and Strip for Forming and Flanging Purposes — Specification.",
  },
  {
    id: 97,
    isNumber: "IS 6240:2008",
    product:
      "Hot Rolled Steel Plate (up to 6 mm) Sheet and Strip for the Manufacture of Low Pressure Liquefiable Gas Cylinders",
  },
  {
    id: 98,
    isNumber: "IS 7283:1992",
    product:
      "Hot Rolled bars for production of bright bars and machined parts for engineering applications.",
  },
  {
    id: 99,
    isNumber: "IS 7887:1992",
    product: "Mild steel wire rods for general engineering purposes.",
  },
  {
    id: 100,
    isNumber: "IS 10748:2004",
    product: "Hot Rolled Steel Strip for Welded Tubes and Pipes.",
  },
  {
    id: 101,
    isNumber: "IS 11513:2017",
    product:
      "Hot Rolled Carbon Steel Strip for Cold Rolling Purposes — Specification",
  },
  {
    id: 102,
    isNumber: "IS 15647:2006",
    product: "Hot rolled steel narrow width strip for welded tubes and pipes",
  },
  {
    id: 103,
    isNumber: "IS 7904:2017",
    product: "High carbon steel wire rods- Specification",
  },
  {
    id: 104,
    isNumber: "IS 14246:2013",
    product: "Continuously pre-painted galvanized steel sheets and coils",
  },
  {
    id: 105,
    isNumber: "IS 15965:2012",
    product:
      "Pre-painted aluminium zinc alloy metallic coated steel strip and sheet (Plain).",
  },
  {
    id: 106,
    isNumber: "IS 280: 2006",
    product: "Mild steel wire for General Engineering purposes.",
  },
  { id: 107, isNumber: "IS 1835:1976", product: "Round Steel wire for ropes" },
  {
    id: 108,
    isNumber: "IS 3975:1999",
    product:
      "Low Carbon Galvanized steel wires formed wires and Tapes for armouring of Cables",
  },
  {
    id: 109,
    isNumber: "IS 4368:1967",
    product:
      "Alloy Steel billets, blooms and slabs for forging for general engineering purposes.",
  },
  {
    id: 110,
    isNumber: "IS 4454 (Part 1) : 2001",
    product:
      "Steel wire for mechanical springs Part-1 cold drawn unalloyed steel wire.",
  },
  {
    id: 111,
    isNumber: "IS 4454 (Part 2): 2001",
    product:
      "Steel wire for mechanical springs Part-2 oil hardened and tempered steel wire.",
  },
  { id: 112, isNumber: "IS 4824:2006", product: "Bead Wires for Tyres" },
  {
    id: 113,
    isNumber: "IS 11169 (Part 1): 1984",
    product:
      "Steels for Cold Heading/Cold extrusion application Part-1 Wrought carbon and low alloy steels",
  },
  {
    id: 114,
    isNumber: "IS 11587:1986",
    product: "Structural Weather resistant steel.",
  },
  {
    id: 115,
    isNumber: "IS 15103: 2002",
    product: "Fire resistant Steel- Specification",
  },
  {
    id: 116,
    isNumber: "IS 15914:2011",
    product:
      "High Tensile Strength Flat Rolled Steel Plate (Up to 6 mm), Sheet and Strip for the Manufacture of Welded Gas Cylinder.",
  },
  {
    id: 117,
    isNumber: "IS 15961:2012",
    product:
      "Hot Dip aluminium- Zinc alloy metallic coated steel strip and sheet (Plain)",
  },
  {
    id: 118,
    isNumber: "IS 15962:2012",
    product:
      "Structural Steel for Building for Structures with improved seismic Resistance",
  },
  { id: 119, isNumber: "IS 6527:1995", product: "Stainless Steel wire Rod" },
  { id: 120, isNumber: "IS 6528:1995", product: "Stainless Steel Wires" },
  {
    id: 121,
    isNumber: "IS 6603:2001",
    product: "Stainless Steel Bars and Flats",
  },
  {
    id: 122,
    isNumber: "IS 5522:2014",
    product: "Stainless Steel sheets and strips for utensils- Specification",
  },
  {
    id: 123,
    isNumber: "IS 6911:2017",
    product: "Stainless Steel Plate, Sheet and Strip- Specification",
  },
  {
    id: 124,
    isNumber: "IS 15997:2012",
    product:
      "Low Nickel Austenitic Stainless Steel Sheet and Strip For Utensils and Kitchen Applications- Specification",
  },
  {
    id: 125,
    isNumber: "IS 1110 : 1990",
    product: "Ferrosilicon – Specification",
  },
  {
    id: 126,
    isNumber: "IS 4409 : 1973",
    product: "Specification for Ferronickel",
  },
  {
    id: 127,
    isNumber: "IS 1029 : 1970",
    product: "Specification for Hot rolled steel strip (bailing)",
  },
  {
    id: 128,
    isNumber: "IS 2385 : 1977",
    product:
      "Specification for Hot-rolled mild steel sheet and strip in coil form for cold-reduced tinplate and cold-reduced black plate",
  },
  {
    id: 129,
    isNumber: "IS 3039 : 1988",
    product:
      "Specification for Structural steel for construction of hulls of ships",
  },
  {
    id: 130,
    isNumber: "IS 9550 2001",
    product: "Bright steel bars – v Specification",
  },
  {
    id: 131,
    isNumber: "IS 3748 : 1990",
    product: "Tool and die steels – Specification",
  },
  {
    id: 132,
    isNumber: "IS 5517 : 1993",
    product: "Steel for hardening and tempering – Specification",
  },
  {
    id: 133,
    isNumber: "IS 7291 : 1981",
    product: "Specification for High speed tool steels",
  },
  {
    id: 134,
    isNumber: "IS 7494 : 1981",
    product:
      "Specification for Steel for valves for internal combustion engines",
  },
  {
    id: 135,
    isNumber: "IS 12146 : 1987",
    product:
      "Specification for Carbon manganese steel forgings for pressure vessels",
  },
  {
    id: 136,
    isNumber: "IS 16585 : 2016",
    product:
      "Magnetic materials – specification for individual material – Fe based amorphous strip delivered in the semi-processed state.",
  },
  {
    id: 137,
    isNumber: "IS 2831 : 2012",
    product:
      "Carbon steel cast billet ingots, billets, blooms and slabs for re-rolling into structural steel (ordinary quality) – Specification",
  },
  {
    id: 138,
    isNumber: "IS 1148: 2009",
    product:
      "Steel Rivet Bars (medium And High Tensile) – For Structural Purposes",
  },
  {
    id: 139,
    isNumber: "IS 1673: 1984",
    product: "Specification for Mild Steel Wire, Cold Heading Quality",
  },
  {
    id: 140,
    isNumber: "IS 1812: 1982",
    product:
      "Specification for Carbon Steel Wire for the Manufacture of Wood Screws",
  },
  {
    id: 141,
    isNumber: "IS 2507: 1975",
    product: "Specification for Cold – rolled Steel Strips For Springs.",
  },
  {
    id: 142,
    isNumber: "IS 2255: 1977",
    product:
      "Specification for Mild Steel Wire Rod for the Manufacture of Machine Screws (By Cold Heading Process).",
  },
  {
    id: 143,
    isNumber: "IS 3195: 1992",
    product:
      "Steel For the Manufacture of Volute And Helical Springs (for Railway Rolling Stock) – Specification .",
  },
  {
    id: 144,
    isNumber: "IS 3431: 1982",
    product:
      "Specification for Steel for the manufacture of volute, helical and laminated springs for automotive suspension.",
  },
  {
    id: 145,
    isNumber: "IS 3885-Part-1: 1992",
    product:
      "Steel for the manufacture of laminated springs (railway rolling stock) Part 1 Flat Sections – Specification.",
  },
  {
    id: 146,
    isNumber: "IS 3885-Part- 2: 1992",
    product:
      "Steel for the manufacture of laminated springs (railway rolling stock) Part 2: Rib and Groove Sections- Specification.",
  },
  {
    id: 147,
    isNumber: "IS 4223: 1975",
    product: "Specification for Steel Wire for Umbrella Ribs .",
  },
  {
    id: 148,
    isNumber: "IS 4224: 1972",
    product: "Specification for Steel Wire for Staples, Pins And Clips.",
  },
  {
    id: 149,
    isNumber: "IS 4397: 1999",
    product:
      "Cold-rolled Carbon Steel Strips for Ball and Roller Bearing Cages/ Retainers- Specification.",
  },
  {
    id: 150,
    isNumber: "IS 4398: 1994",
    product:
      "Carbon-chromium Steel for the Manufacture of Balls, Rollers and Bearing Races- Specification",
  },
  {
    id: 151,
    isNumber: "IS 6902: 1973",
    product: "Specification for Steel Wire for spokes.",
  },
  {
    id: 152,
    isNumber: "IS 6967: 1973",
    product:
      "Specification for Steel For Electrically welded round Link Chains.",
  },
  {
    id: 153,
    isNumber: "IS 7226: 1974",
    product:
      "Specification for Cold rolled medium, high carbon and low alloy steel strip for general engineering purposes.",
  },
  {
    id: 154,
    isNumber: "IS 7557: 1982",
    product:
      "Specification for Steel Wire: (Up to 20 mm) for the manufacture of cold-forged rivets.",
  },
  {
    id: 155,
    isNumber: "IS 8052: 2006",
    product:
      "Steel ingots, billets and blooms for the production of springs, rivets and screws for general engineering applications – Specification.",
  },
  {
    id: 156,
    isNumber: "IS 8951: 2001",
    product:
      "Steel Cast Billet Ingots, Billets and Blooms for production of High Carbon Steel Wire Rods- Specification",
  },
  {
    id: 157,
    isNumber: "IS 8952: 1995",
    product:
      "Steel ingots, blooms and billets for production of mild steel wire rods for general engineering purposes – Specification",
  },
  {
    id: 158,
    isNumber: "IS 9476: 1980",
    product:
      "Specification for Cold rolled steel strips for carbon steel razor blades.",
  },
  {
    id: 159,
    isNumber: "IS 9962: 1981",
    product: "Specification for Steel Wire for Needles.",
  },
  {
    id: 160,
    isNumber: "IS 12367:1988",
    product:
      "Specification for Cold-rolled Carbon Steel Strips/ Coils for Manufacture of Welded Tubes.",
  },
  {
    id: 161,
    isNumber: "IS 14331:1995",
    product: "Steels for High Temperature Bolting Applications – Specification",
  },
  {
    id: 162,
    isNumber: "IS 14491:1997",
    product:
      "Low carbon high strength cold rolled steel sheets and coils for cold forming- Specification",
  },
  {
    id: 163,
    isNumber: "IS 14650:1999",
    product:
      "Carbon Steel Cast Billet Ingots, Billets, Blooms and Slabs for Rerolling purposes- Specification",
  },
  {
    id: 164,
    isNumber: "IS 4882: 1979",
    product:
      "Specification for Low Carbon Steel Wire for Rivets for use in Bearing Industry",
  },
  {
    id: 165,
    isNumber: "IS 2090:1983",
    product:
      "Specification for High Tensile Steel Bars used in Pre-stressed Concrete",
  },
  {
    id: 166,
    isNumber: "IS 6529:1996",
    product: "Stainless Steel Blooms Billets And Slabs For Forging",
  },
  {
    id: 167,
    isNumber: "IS 9294:1979",
    product: "Cold-Rolled Stainless Steel Strips for Razor Blades",
  },
  {
    id: 168,
    isNumber: "IS 10631:1983",
    product: "Stainless Steel for welding electrode core wire",
  },
  {
    id: 169,
    isNumber: "IS 10632 (Part 2):1983",
    product:
      "Specification for Non Magnetic stainless steel for electrical applications Part 2 Specific requirements for binding wire.",
  },
  {
    id: 170,
    isNumber: "IS 10632 (Part 3):1983",
    product:
      "Specification for Non Magnetic stainless steel for electrical applications Part 3 Specific requirements for sheets, strips and plates.",
  },
  {
    id: 171,
    isNumber: "IS 11169 (Part 2): 1989",
    product:
      "Steels for cold heading/cold extrusion applications – specification Part 2 Stainless steel",
  },
  { id: 172, isNumber: "IS 5651:1987", product: "Steels for Pneumatic Tools" },
  { id: 173, isNumber: "IS 9516:1980", product: "Heat Resisting Steels" },
  {
    id: 174,
    isNumber: "IS 11952:1986",
    product: "Steels For Piston Pins (Gudgeon Pins)",
  },
  {
    id: 175,
    isNumber: "IS 12045:1987",
    product: "Alloys Used in Electrical Resistance Metallic Heating Elements",
  },
  {
    id: 176,
    isNumber: "IS 14652:1999",
    product: "18 Percent Nickel Maraging Steel Bars and Rods",
  },
  {
    id: 177,
    isNumber: "IS 1566:1982",
    product:
      "Specification for Hard-drawn Steel Wire Fabric For Concrete Reinforcement",
  },
  {
    id: 178,
    isNumber: "IS 5489: 1975",
    product: "Carburizing Steels For Use in Bearing Industry.",
  },
  { id: 179, isNumber: "IS 11946:1987", product: "Soft Magnetic Iron Strips" },
  {
    id: 180,
    isNumber: "IS 11947:1987",
    product: "Soft Magnetic Iron Rods, Bars Flats and Sections",
  },
  {
    id: 181,
    isNumber: "IS 963: 1958",
    product: "Chrome molybdenum steel bars and rods for aircraft purposes",
  },
  {
    id: 182,
    isNumber: "IS 4454 (Part 4): 2001",
    product: "Steel Wires for Mechanical Springs- Part 4: Stainless Steel Wire",
  },
  {
    id: 183,
    isNumber: "IS 1993 : 2018",
    product: "Cold-reduced Electrolytic Tin Plate",
  },
  {
    id: 184,
    isNumber: "IS 12591:2018",
    product: "Cold-reduced Electrolytic Chromium/Chromium oxide – coated steel",
  },
  {
    id: 185,
    isNumber: "IS 412:1975",
    product: "Expanded Metal Steel Sheets For General Purposes",
  },
  {
    id: 186,
    isNumber: "IS 2100: 1970",
    product: "Steel Billets,Bars And Sections For Boilers",
  },
  {
    id: 187,
    isNumber: "IS 2589: 1975",
    product: "Hard Drawn Steel Wire For Upholstery Springs",
  },
  {
    id: 188,
    isNumber: "IS 3298: 1981",
    product: "Mild Steel Rivet Bars For Ship Building",
  },
  { id: 189, isNumber: "IS 4072: 1975", product: "Steel For Spring Washers" },
  {
    id: 190,
    isNumber: "IS 8510 (Part II): 1977",
    product:
      "Steel Wire For Banding Of Armatures And Rotors Part II Specific Requirements for magnetic banding wires",
  },
  {
    id: 191,
    isNumber: "IS 8510 (PartIII): 1977",
    product:
      "Tinned Steel Wire For Banding Of Armatures And Rotors Part III Specific Requirements for non-magnetic banding wires",
  },
  {
    id: 192,
    isNumber: "IS 8563: 1977",
    product: "Half Round Mild Steel Wire For The Manufacture of Split Pins",
  },
  {
    id: 193,
    isNumber: "IS 8564: 1977",
    product: "Steel Wire For Nipples For Spokes",
  },
  { id: 194, isNumber: "IS 8565: 1977", product: "Heald Wire" },
  { id: 195, isNumber: "IS 8566: 1977", product: "Steel Wire For Reeds" },
  {
    id: 196,
    isNumber: "IS 8917: 1978",
    product: "Plates For Galvanizing Pots",
  },
  {
    id: 197,
    isNumber: "IS 9442: 1980",
    product:
      "Hot Rolled Steel Plates Sheets And Strips For Manufacture of Agricultural Discs",
  },
  {
    id: 198,
    isNumber: "IS 9485: 1980",
    product:
      "Cold-Reduced And Hot-Rolled Carbon Steel Sheet For Porcelain Enamelling",
  },
  {
    id: 199,
    isNumber: "IS 10794: 1984",
    product: "Mild steel wire for cotter pins",
  },
  {
    id: 200,
    isNumber: "IS 12262:1988",
    product: "Trapezoidal Steel Wire For Springs Washers",
  },
  {
    id: 201,
    isNumber: "IS 12313: 1988",
    product: "Hot-Dip Terne Coated Carbon Steel Sheets",
  },
  {
    id: 202,
    isNumber: "IS 15911:2010",
    product: "Structural Steel (Ordinary Quality)",
  },
  { id: 203, isNumber: "IS 4430: 1979", product: "Mould Steels" },
  {
    id: 204,
    isNumber: "IS 4431: 1978",
    product: "Carbon And Carbon- Manganese Free- Cutting Steels",
  },
  { id: 205, isNumber: "IS 4432: 1988", product: "Case Hardening Steels" },
  {
    id: 206,
    isNumber: "IS 5518: 1996",
    product: "Steels For Die Blocks For Drop Forging",
  },
  { id: 207, isNumber: "IS 8748: 1978", product: "Forged/Rolled CTC Segments" },
  {
    id: 208,
    isNumber: "IS 12145: 1987",
    product: "Quenched And Tempered Alloy Steel Forgings For Pressure Vessels",
  },
  {
    id: 209,
    isNumber: "IS 13387: 1992",
    product: "Tool Steel Forgings For Metal Forming",
  },
  {
    id: 210,
    isNumber: "IS 14698:1999",
    product:
      "Carbon And Low Alloy Billets, Blooms, Slabs And Bars For Manufacture Of Shell BodiesAnd Proof Shots Used In Defence Services",
  },
  {
    id: 211,
    isNumber: "IS/ISO 11951 : 2016",
    product: "Cold – Reduced tinmill products – Blackplate",
  },
  {
    id: 212,
    isNumber: "IS 3930: 1994",
    product: "Flame And Induction Hardening Steels",
  },
  {
    id: 213,
    isNumber: "IS 5478: 1969",
    product: "Thermostat Metal Sheet and Strip",
  },
  {
    id: 214,
    isNumber: "IS 13352: 1992",
    product:
      "Stock for Forgings produced from Continuously Cast Blooms, Billets and Slabs",
  },
  {
    id: 215,
    isNumber: "IS 16644: 2018",
    product:
      "Stress-Relieved, Low Relaxation Steel Wire for Pre-stressed Concrete",
  },
  {
    id: 216,
    isNumber: "IS 17404 : 2020",
    product:
      "Electrogalvanized Hot Rolled and Cold Reduced Carbon Steel Sheetsand Strips",
  },
  {
    id: 217,
    isNumber: "IS 8329 : 2000",
    product:
      "Centrifugally cast (spun) ductile iron pressure pipes for water, gas and sewage",
  },
  {
    id: 218,
    isNumber: "IS 9523:2000",
    product:
      "Ductile iron fittings for pressure pipes for water, gas and sewage",
  },
  {
    id: 219,
    isNumber: "IS 1161:2014",
    product: "Steel tubes for structural purposes",
  },
  {
    id: 220,
    isNumber: "IS 1239 (Part 1):2014",
    product:
      "Steel Tubes, Tubulars and Other Wrought Steel Fittings – Part 1 : Steel Tubes",
  },
  {
    id: 221,
    isNumber: "IS 4270:2001",
    product: "Steel tubes used for water-wells (upto 200 mm dia)",
  },
  {
    id: 222,
    isNumber: "IS 9139:1979",
    product:
      "Specification for Malleable iron shots and grits for use in foundries",
  },
  {
    id: 223,
    isNumber: "IS 1180 (Part 1)",
    product:
      "Out door type Oil immersed Distribution Transformers upto and including 2500 kVA, 33 KV-specification Part 1 Mineral oil immersed",
  },
  {
    id: 224,
    isNumber: "IS 12615",
    product: "Energy Efficient Induction Motors-Three Phase Squirrel Cage",
  },
  { id: 225, isNumber: "IS 2993", product: "A.C. motor capacitors" },
  {
    id: 226,
    isNumber: "IS 13340",
    product:
      "Power Capacitors of Self-healing Type for AC Power Systems having Rated Voltage up to 650V",
  },
  {
    id: 227,
    isNumber: "IS 13585 Part 1",
    product:
      "Shunt Power Capacitors of the Non-Self-Healing Type for AC System having a Rated Voltage up to and Including 1000V Part-1 General Performance, Testing amd Rating Safety Requirements Guide for Installation and Operation",
  },
  { id: 228, isNumber: "IS 252:2013", product: "Caustic Soda -Specification" },
  {
    id: 229,
    isNumber: "IS 10116 : 2015",
    product: "Boric Acid – Specification",
  },
  { id: 230, isNumber: "IS 15573", product: "Poly Aluminium Chloride" },
  { id: 231, isNumber: "IS 695", product: "Acetic Acid" },
  { id: 232, isNumber: "IS 2833", product: "Aniline" },
  { id: 233, isNumber: "IS 517", product: "Methanol" },
  {
    id: 234,
    isNumber: "IS 5158: 1987",
    product: "Specification for Phthalic Anhydride, Technical",
  },
  { id: 235, isNumber: "IS 8058:2018", product: "Pyridine" },
  { id: 236, isNumber: "IS 16113:2013", product: "Gamma Picoline" },
  { id: 237, isNumber: "IS 16112:2013", product: "Beta Picoline" },
  { id: 238, isNumber: "IS 12084: 2018", product: "Morpholine" },
  { id: 239, isNumber: "IS 297:2001", product: "Sodium Sulphide, Technical" },
  {
    id: 240,
    isNumber: "IS 7129:1992",
    product: "Potassium Carbonate, Anhydrous",
  },
  { id: 241, isNumber: "IS 170:2004", product: "Acetone" },
  {
    id: 242,
    isNumber: "IS 4581:1978",
    product: "Phosphorous Trichloride, pure and Analytical Reagent",
  },
  {
    id: 243,
    isNumber: "IS 11744:1986",
    product: "Phosphorous Pentachloride, Technical",
  },
  {
    id: 244,
    isNumber: "IS 11657:1986",
    product: "Phosphorous Oxychloride, Technical",
  },
  {
    id: 245,
    isNumber: "IS 3205:1984",
    product: "Precipitated Barium Carbonate, Technical",
  },
  {
    id: 246,
    isNumber: "IS 12928:1990",
    product: "Precipitated Barium for Ceramic and Glass Industry",
  },
  {
    id: 247,
    isNumber: "IS 4505:2015",
    product: "Sodium Formaldehyde Sulphoxylate",
  },
  {
    id: 248,
    isNumber: "IS 6100:1984",
    product: "Sodium Tripolyphosphate, Anhydrous, Technical",
  },
  { id: 249, isNumber: "IS 14709:1999", product: "n- Butyl Acrylate" },
  { id: 250, isNumber: "IS 336:1973", product: "Ether" },
  { id: 251, isNumber: "IS 5295:1985", product: "Ethylene Glycol" },
  { id: 252, isNumber: "IS 537:2011", product: "Toluene" },
  { id: 253, isNumber: "IS 15030:2001", product: "Terephthalic Acid" },
  { id: 254, isNumber: "IS 14707: 1999", product: "Methyl Acrylate" },
  { id: 255, isNumber: "IS 14708:1999", product: "Ethyl Acrylate" },
  { id: 256, isNumber: "IS 12345:1988", product: "Vinyl Acetate Monomer" },
  { id: 257, isNumber: "IS 4105:2020", product: "Styrene (Vinyl Benzene)" },
  { id: 258, isNumber: "IS 5149:2020", product: "Maleic Anhydride, Technical" },
  { id: 259, isNumber: "IS 12540:1988", product: "Acrylonitrile" },
  {
    id: 260,
    isNumber: "IS 17265:2019",
    product: "100 Percent. Polyester Spun Grey and White Yarn (PSY)",
  },
  {
    id: 261,
    isNumber: "IS 17261:2019",
    product: "Polyester Continuous Filament Fully Drawn Yarn (FDY)",
  },
  {
    id: 262,
    isNumber: "IS 17264:2019",
    product: "Polyester Industrial Yarn (IDY)",
  },
  {
    id: 263,
    isNumber: "IS 17262:2019",
    product: "Polyester Partially Oriented Yarn (POY)",
  },
  {
    id: 264,
    isNumber: "IS 17263:2019",
    product: "Polyester Staple Fibres (PSF)",
  },
  {
    id: 265,
    isNumber: "IS 7328:2020",
    product:
      "Polyethylene Material for moulding and extrusion (i) Low Density Polyethylene (LDPE) (ii) Linear Low-Density Polyethylene (LLDPE) (iii) High Density Polyethylene (HDPE)",
  },
  {
    id: 266,
    isNumber: "IS 11356:2020",
    product: "Styrene-Butadiene Rubber Latex",
  },
  {
    id: 267,
    isNumber: "IS 16481:2016",
    product: "Synthetic Micro-Fibres for use in Cement Based Matrix",
  },
  { id: 268, isNumber: "IS 12795:2020", product: "Linear Alkyl Benzene" },
  {
    id: 269,
    isNumber: "IS 13601:1993",
    product: "Ethylene Vinyl Acetate (EVA) Copolymers",
  },
  { id: 270, isNumber: "IS 7686:2020", product: "3(N, N-DiEthyl) Aminophenol" },
  {
    id: 271,
    isNumber: "IS 4566:2020",
    product: "Methylene Chloride (Dichloromethane)",
  },
  { id: 272, isNumber: "IS 2012:2006", product: "Red Phosphorus" },
  {
    id: 273,
    isNumber: "IS 17077 :2019/ISO 19062-1 : 2015",
    product: "Acrylonitrile Butadiene Styrene (ABS)",
  },
  { id: 274, isNumber: "IS 869:2020", product: "Ethylene Dichloride" },
  { id: 275, isNumber: "IS 17370:2020", product: "p-Xylene" },
  { id: 276, isNumber: "IS 14434:1998", product: "Polycarbonate" },
  {
    id: 277,
    isNumber: "IS 17397 (Part 1) : 2020/ISO 16365-1 : 2014",
    product: "Polyurethanes",
  },
  { id: 278, isNumber: "IS 17442:2020", product: "Vinyl Chloride Monomer" },
  { id: 279, isNumber: "IS 17450 : 2020", product: "1,3 Phenylenediamine" },
  { id: 280, isNumber: "IS 10931 : 1984", product: "Lauric Acid" },
  { id: 281, isNumber: "IS 12029 : 1986", product: "Acid Oil" },
  { id: 282, isNumber: "IS 12067: 1987", product: "Palm Fatty Acids" },
  { id: 283, isNumber: "IS 12068 :1987", product: "Rice Bran Fatty Acids" },
  { id: 284, isNumber: "IS 12069 : 1987", product: "Coconut Fatty Acids" },
  { id: 285, isNumber: "IS 12124 : 1987", product: "Rubberseed Fatty Acids" },
  {
    id: 286,
    isNumber: "IS 12361 :1988",
    product: "Hydrogenated Rice Bran Fatty Acids",
  },
  {
    id: 287,
    isNumber: "IS 302 (Part 2/ Section 14)",
    product: "Hand-held Blender",
  },
  {
    id: 288,
    isNumber: "IS 4250",
    product:
      "Domestic Electric Food Mixer (Liquidizers and Grinders) and Centrifugal Juicer",
  },
  {
    id: 289,
    isNumber: "IS 15558",
    product:
      "Instantaneous Domestic Water Heater for use with Liquefied Petroleum Gas",
  },
  {
    id: 290,
    isNumber: "IS 1391 (Part-1): 2017",
    product:
      "Room Air Conditioners- Specification Part 1 Unitary Air Conditioners",
  },
  {
    id: 291,
    isNumber: "IS 1391 (Part-2): 2018",
    product:
      "Room Air Conditioners- Specification Part 2 Split Air Conditioners",
  },
  {
    id: 292,
    isNumber: "IS 8148:2018",
    product: "Ducted and Package Air Conditioners",
  },
  {
    id: 293,
    isNumber: "IS 11329:2018",
    product: "Finned type Heat Exchanger for Room Air Conditioner",
  },
  {
    id: 294,
    isNumber: "IS 10617:2018",
    product: "Hermetic compressor Hermetic Compressors-Specification",
  },
  {
    id: 295,
    isNumber: "IS 1293 : 2005",
    product:
      "Plugs and socket-outlets of Rated Voltage up to and including 250 Volts and Rated current up to and including 16 amperes",
  },
  {
    id: 296,
    isNumber: "IS 15884:2010",
    product:
      "Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Class1 and 2)",
  },
  {
    id: 297,
    isNumber: "IS 4246: 2002",
    product: "Domestic Gas Stoves for use with Liquefied Petroleum Gases",
  },
  { id: 298, isNumber: "IS 14900: 2018", product: "Transparent Float Glass" },
  { id: 299, isNumber: "IS 2347:2017", product: "Domestic Pressure Cooker" },
  {
    id: 300,
    isNumber: "IS 1554(Part 1) : 1988",
    product:
      "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 1 For Working Voltages up to and Including 1100 V",
  },
  {
    id: 301,
    isNumber: "IS 1554(Part 2) : 1988",
    product:
      "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 2 For Working Voltages from 3.3 kV up to and Including 11 kV",
  },
  {
    id: 302,
    isNumber: "IS 7098 (Part 1) : 1988",
    product:
      "Specification for Crosslinked Polyethylene Insulated PVC Sheathed Cables Part 1 for working voltages up to and including 1100 V",
  },
  {
    id: 303,
    isNumber: "IS 7098 (Part 2) : 2011",
    product:
      "Crosslinked polyethylene insulated Thermoplastics sheathed cables – Specification Part 2 for working voltages from 3.3 kV up to and including 33 kV",
  },
  {
    id: 304,
    isNumber: "IS 7098 (Part 3) : 1993",
    product:
      "Cross-Linked Polyethylene Insulated Thermoplastics Sheathed Cables Part 3 For Working Voltages from 66 kV Up to and Including 220 kV",
  },
  {
    id: 305,
    isNumber: "IS 14255 : 1995",
    product:
      "Aerial Bunched Cables – For Working Voltages Up to and Including 1100 Volts – Specification",
  },
  {
    id: 306,
    isNumber: "IS 9968 (Part 2) : 2002",
    product:
      "Specification for Elastomer Insulated Cables Part 2 For Working Voltages form 3.3 kV Up to and Including 33 kV",
  },
  {
    id: 307,
    isNumber: "IS 8784 : 1987",
    product: "Specification for Thermocouple Compensating Cables",
  },
  {
    id: 308,
    isNumber: "IS 9857 : 1990",
    product: "Welding Cables – Specification",
  },
  {
    id: 309,
    isNumber: "IS 14494 : 2019",
    product:
      "Elastomer Insulated Flexible Cables for Use in Mines – Specification",
  },
  {
    id: 310,
    isNumber: "IS 2593 : 1984",
    product: "Specification for Flexible Cables for Miner's Cap-Lamps",
  },
  {
    id: 311,
    isNumber: "IS 5950 : 1984",
    product:
      "Specification for Shot Firing Cables (for use other than in shafts)",
  },
  {
    id: 312,
    isNumber: "IS 17048 : 2018",
    product:
      "Halogen Free Flame Retardant (HFFR) Cables for Working Voltages Up to and Including 1100 V – Specification",
  },
  {
    id: 313,
    isNumber: "IS 9573(Part 1):2017",
    product:
      "Rubber Hose for Liquefied Petroleum Gas (LPG)- Specification Part 1 Industrial Application",
  },
  {
    id: 314,
    isNumber: "IS 9573(Part 2):2017",
    product:
      "Rubber Hose for Liquefied Petroleum Gas (LPG)- Specification Part 2- Domestic and Commercial Application.",
  },
  {
    id: 315,
    isNumber: "IS 15392",
    product: "Aluminium and Aluminium Alloy Bare Foil for Food Packaging",
  },
  {
    id: 316,
    isNumber: "IS 9873",
    product:
      "Safety of Toys Part l Safety Aspects Related to Mechanical and Physical Properties (Part 1), Flammability (Part 2), Migration of Certain Elements (Part 3), Swings, Slides and Similar Activity Toys for Indoor and Outdoor Family Domestic Use (Part 4), Requirements and Test Methods for Finger Paints (Part 7), Certain Phthalates Esters in Toys and Children's Products (Part 9).",
  },
  { id: 317, isNumber: "IS 15644: 2006", product: "Safety of Electric Toys." },
  {
    id: 318,
    isNumber: "IS 2835 : 1987",
    product: "Flat Transparent Sheet Glass.",
  },
  {
    id: 319,
    isNumber: "IS 2553 (Part 1):2018",
    product:
      "Safety Glass -Specification Part 1 Architectural, Building and General uses.",
  },
  {
    id: 320,
    isNumber: "IS 2553 (Part 2):2019",
    product: "Safety Glass -Specification Part 2 For Road Transport .",
  },
  {
    id: 321,
    isNumber: "IS 14887:2014",
    product:
      "Textiles –High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for packaging of 50 kilogram Foodgrains",
  },
  {
    id: 322,
    isNumber: "IS 16208:2015",
    product:
      "Textiles –High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for packaging 10 kilogram, 15 kilogram, 20 kilogram, 25 kilogram, and 30 kilogram Foodgrains",
  },
  {
    id: 323,
    isNumber: "IS 14968:2015",
    product:
      "Textiles –High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for packaging 50 kilogram /25 kilogram Sugar",
  },
  {
    id: 324,
    isNumber: "IS 14252:2015",
    product:
      "Textiles –High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for filling Sand",
  },
  {
    id: 325,
    isNumber: "IS 13095:1991",
    product: "Butterfly valves for general purpose",
  },
  {
    id: 326,
    isNumber: "IS/ISO 6742 (Part 2):2015",
    product: "Retro-reflective Devices",
  },
  { id: 327, isNumber: "IS 14490:2018", product: "Plain Copier Paper" },
  {
    id: 328,
    isNumber: "IS 2052 : 2009",
    product: "Compounded Feeds for Cattle",
  },
  {
    id: 329,
    isNumber: "IS: 16192 (Part 1)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 1 Light Alloy Wheel Rims Method of Tests and Requirements",
  },
  {
    id: 330,
    isNumber: "IS: 16192 (Part 2)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 2 Sheet Metal Wheel Rims Method of Tests and Requirements",
  },
  {
    id: 331,
    isNumber: "IS: 16192 (Part 3)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 3 Spoke Wheel Rims Method of Tests and Requirements",
  },
  {
    id: 332,
    isNumber: "IS: 9436",
    product:
      "Performance Requirements and Methods of Tests for Wheels for Passenger Cars",
  },
  {
    id: 333,
    isNumber: "IS: 9438",
    product:
      "Performance Requirements and Methods of Tests for Wheels or Rims for Trucks and Buses",
  },
  {
    id: 334,
    isNumber: "IS 5557: 2004",
    product: "Industrial and protective rubber knee and ankle boots",
  },
  {
    id: 335,
    isNumber: "IS 5557 (Part 2): 2018",
    product: "All rubber gum boots and ankle boots",
  },
  {
    id: 336,
    isNumber: "IS 5676: 1995",
    product: "Moulded solid rubber soles and heels",
  },
  {
    id: 337,
    isNumber: "IS 6664: 1992",
    product: "Rubber microcellular sheets for soles and heels",
  },
  { id: 338, isNumber: "IS 6719: 1972", product: "Solid PVC soles and heels" },
  { id: 339, isNumber: "IS 6721: 1972", product: "PVC sandal" },
  { id: 340, isNumber: "IS 10702: 1992", product: "Rubber Hawai Chappal" },
  { id: 341, isNumber: "IS 11544: 1986", product: "Slipper, rubber" },
  {
    id: 342,
    isNumber: "IS 12254: 1993",
    product: "Polyvinyl chloride(PVC) industrial boots",
  },
  {
    id: 343,
    isNumber: "IS 13893: 1994",
    product: "Polyurethane sole, semirigid",
  },
  {
    id: 344,
    isNumber: "IS 13995: 1995",
    product: "Unlined moulded rubber boots",
  },
  {
    id: 345,
    isNumber: "IS 16645: 2018",
    product:
      "Moulded plastics footwear- Lined or Unlined polyurethane boots for general industrial use",
  },
  {
    id: 346,
    isNumber: "IS 16994: 2018",
    product: "Footwear for men and women for municipal scavenging work",
  },
  {
    id: 347,
    isNumber: "IS 1989 (Part 1): 1986",
    product: "Leather safety boots and shoes for miners",
  },
  {
    id: 348,
    isNumber: "IS 1989 (Part.2): 1986",
    product: "Leather safety boots and shoes for heavy metal industries",
  },
  { id: 349, isNumber: "IS 3735: 1996", product: "Canvas Shoes Rubber Sole" },
  { id: 350, isNumber: "IS 3736: 1995", product: "Canvas Boots Rubber Sole" },
  {
    id: 351,
    isNumber: "IS 3976: 2018",
    product: "Safety Rubber Canvas Boots for Miners",
  },
  {
    id: 352,
    isNumber: "IS 11226: 1993",
    product: "Leather safety footwear having direct moulded rubber sole",
  },
  {
    id: 353,
    isNumber: "IS 14544: 1998",
    product:
      "Leather safety footwear with direct moulded polyvinyl chloride (PVC) sole",
  },
  { id: 354, isNumber: "IS 15844: 2010", product: "Sports footwear" },
  {
    id: 355,
    isNumber: "IS 17012: 2018",
    product: "High ankle tactical boots with PU – Rubber sole",
  },
  { id: 356, isNumber: "IS 17037: 2018", product: "Antiriot shoes" },
  { id: 357, isNumber: "IS 17043: 2018", product: "Derby shoes" },
  {
    id: 358,
    isNumber: "IS 15298 (Part 2): 2016",
    product: "Personal protective equipment – Part 2 Safety Footwear",
  },
  {
    id: 359,
    isNumber: "IS 15298 ( Part 3) : 2019",
    product: "Personal protective equipment – Part 3 Protective Footwear",
  },
  {
    id: 360,
    isNumber: "IS 15298 (Part 4) : 2017",
    product: "Personal protective equipment – Part 4 Occupational Footwear",
  },
  {
    id: 361,
    isNumber: "IS 4296 (Part 1):2016",
    product:
      "Tools for Pressing Part 1 Round Punches with 60 Degrees Conical Head and Straight Shank",
  },
  {
    id: 362,
    isNumber: "IS 4296 (Part 2):2016",
    product:
      "Tools for Pressing Part 2 Punches with Cylindrical Head and Straight or Reduced Shank",
  },
  {
    id: 363,
    isNumber: "IS 4296 (Part 3):2016",
    product:
      "Tools for Pressing Part 3 Round Punches with 60 Degrees Conical Head and Reduced Shank",
  },
  {
    id: 364,
    isNumber: "IS 4151: 2015",
    product: "Helmet for riders of Two Wheeler Motor Vehicles",
  },
  {
    id: 365,
    isNumber: "IS 17550 (Part 1): 2021",
    product:
      "Household Refrigerating Appliances- Characteristics and Test Methods part-1 General Requirements",
  },
  { id: 366, isNumber: "IS 7872: 2018", product: "Freezers" },
  {
    id: 367,
    isNumber: "IS 1536: 2001",
    product:
      "Centrifugally cast (Spun) iron pressure pipes for water, gas and sewage",
  },
  {
    id: 368,
    isNumber: "IS 3989: 2009",
    product:
      "Centrifugally cast (Spun) iron spigot and socket soil, waste, ventilating and rainwater pipes, fittings and accessories",
  },
  {
    id: 369,
    isNumber: "IS 15905: 2011",
    product:
      "Hubless centrifugally cast (Spun) iron pipes, fittings and accessories – Spigot series",
  },
  {
    id: 370,
    isNumber: "IS 15769:2008",
    product:
      "Flux Cored (Tubular) Electrodes for Gas Shielded and Self-Shielded Metal Welding of Carbon or Carbon- Manganese Steel",
  },
  {
    id: 371,
    isNumber: "IS 15449 : Part 1 : 2004",
    product: "Household Zig-Zag Sewing Machine Head",
  },
  {
    id: 372,
    isNumber: "IS 16240 : 2015",
    product:
      "Reverse Osmosis (RO) Based Point-Of-Use (POU) Water Treatment System",
  },
  { id: 373, isNumber: "IS 1943:1995", product: "A- twill Jute Bag" },
  {
    id: 374,
    isNumber: "IS 2566:1993",
    product: "B-twill Jute bags for packing foodgrains",
  },
  {
    id: 375,
    isNumber: "IS 12650:2018",
    product: "Jute bags for packing 50 Kg foodgrains",
  },
  {
    id: 376,
    isNumber: "IS 15138:2010",
    product: "Jute bags for packing 50 Kg sugar",
  },
  {
    id: 377,
    isNumber: "IS 16186:2014",
    product: "Light weight jute sacking bags for packing 50 Kg foodgrains",
  },
  {
    id: 378,
    isNumber: "IS 16372:2015",
    product: "Jute bags for packing up to 30 Kg foodgrains",
  },
  { id: 379, isNumber: "IS 17266:2019", product: "Viscose Staple Fibres" },
  { id: 400, isNumber: "IS 17266:2019", product: "Viscose Staple Fibres" },
];

export const BISCProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

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

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="w-full pb-12 ">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Products Under BIS Certification as per Indian Standards
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          The following table lists products that require BIS certification in
          India along with their applicable Indian Standard (IS) numbers. These
          standards ensure quality, safety, and reliability of products in the
          Indian market.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for Products by name or IS number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-center text-base md:text-lg w-[80px]">
                  S.No
                </TableHead>
                <TableHead className="font-semibold font-geist text-center text-base md:text-lg w-[180px]">
                  IS No.
                </TableHead>
                <TableHead className="font-semibold font-geist text-center text-base md:text-lg">
                  Product
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-center">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-center">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-center">
                    {item.product}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <div className="font-geist text-sm text-gray-700">
              Showing {indexOfFirstProduct + 1} to{" "}
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </div>
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// BISC Hero Section
const BISCHero = () => {
  return (
    <section
      className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Indian BIS License
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS Registration
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Certification ensures product quality and safety in India. It is
            mandatory for many products and requires testing, documentation, and
            approval.
          </p>

          <nav className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </section>
  );
};

// BISC Index Section
const BISCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting and its position relative to viewport
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1; // Added small buffer
        setIsSticky(
          !entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1)
        );
      },
      {
        threshold: [0, 1], // Observe both when fully visible and when starting to intersect
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {activeSection}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {[
              "Overview",
              "Benefits",
              "Schemes",
              "Types",
              "Documents",
              "Procedure",
              "Process",
              "Cost",
              "Consultant",
              "FAQs",
            ].map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {[
          "Overview",
          "Benefits",
          "Schemes",
          "Types",
          "Documents",
          "Procedure",
          "Process",
          "Cost",
          "Consultant",
          "FAQs",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// BISC Content Section
const BISCContent = () => {
  return (
    <section className="" aria-label="BIS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISCContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <BISCProductTable />
      <ServiceFaq />
    </section>
  );
};

// BISC FAQs Section
const ServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2 bg-white scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What services do you offer for BIS compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                We offer comprehensive BIS regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for various products in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does the BIS approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS approval timelines vary based on product category and
                application type. Typically, it takes 4-6 months for standard
                products. Our consultants work to expedite these timelines
                through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for BIS registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, test reports, quality control documents, and
                various application forms specific to your product category. Our
                team assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you assist with factory inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for BIS factory inspections,
                including pre-inspection readiness assessments, gap analysis,
                preparation of required documentation, mock inspections, and
                assistance during actual inspections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the costs associated with BIS registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS registration costs include official government fees (which
                vary by product type), testing fees, consultant fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISCContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="flex flex-col  gap-[20px] md:gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Benefits Section */}
        <BenefitsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Schemes Section */}
        <SchemesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Types  Section */}
        <TypesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Documents  Section */}
        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*procedure  Section */}
        <ProcedureSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultantSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full  md:w-[441px]">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[24px] gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

PointsList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Full Form & Meaning
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures product quality, safety, and compliance in India.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS&apos;s full form is{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Bureau of Indian Standard,
        </span>{" "}
        an Indian National Standard Body established in 1986. It was created to
        harmonize the quality of consumer and industrial products being sold in
        India . BIS Certification or BIS License on a product ensures its
        quality and that the product is as per BIS Standardswhich are set by the
        Indian government to meet international quality standards. To obtain BIS
        certificate in India the manufacturer must first identify in which
        scheme of BIS the product is falling and then follow the procedure to
        obtain the BIS Certificate so that their products can be sold in India.{" "}
        <br />
        <br />
        BIS product certification ensures integrity, trustworthiness, and
        reliability of any product.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          To apply for BIS certification the applicant has to be a manufacturer,{" "}
        </span>{" "}
        either of Indian or foreign origin. In some cases BIS registration can
        be optional or mandatory depending upon the nature of the product and
        the BIS scheme in which it lies.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "It protects the general public's health",
              "It offers quality control at the manufacturer's end",
              "It safeguards consumers from dangerous goods",
              "It increases consumer trust on the standard marked products",
            ]}
            heading="Why BIS Certification is Recommended?"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={BISSRimg}
            alt="BIS Certification Process"
            loading="lazy"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
          ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
          hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
          "
          />
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="flex flex-col scroll-mt-20">
      {/* Benefits */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Benefits
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Benefits
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures quality, safety, market edge, and global compliance.
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Ensures high levels of quality because goods with a BIS registration are produced per BIS standards and are tested during the process.",
              "If the products are marked with BIS license number, it ensures that no harmful chemicals / components are being used in consumer products.",
              "Gives market edge over the manufacturers who are not certified.",
              "Helps Indian manufacturers to export the product, due to their products being developed and tested as per ISS (Indian Standard Specifications) which are at par with international standards.",
              "Enables Foreign manufacturers to understand requirements of the Indian market and standards so that they can develop the products according to the BIS product certification regulations.",
            ]}
            heading="BIS Certification: Quality, Safety & Market Advantage"
          />
        </div>
      </div>
    </section>
  );
};

const SchemesSection = () => {
  return (
    <section id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes  */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Schemes
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Schemes under the purview of BIS are as follows:
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "BIS License for Indian manufacturers (For obtaining BIS certification on electrical, Metal, Industrial, and other types of products.)",
              "BIS License for Foreign Manufacturers / Indian Importers under FMCS (For obtaining BIS License on electrical, Metal, Industrial, and other types of products.)",
              "BIS Certificate under Compulsory Registration Scheme - CRS (For obtaining BIS registration for electronic products)",
              "Recognition of Hallmarking Centres",
              "Hallmark for all types of gold and silver jewellery",
              "ECO Mark Certification",
              "BIS Laboratory Recognition Scheme (LRS)",
              "Management System Certification Scheme (MSCS)",
              "Development of BIS Standards for new products.",
            ]}
            heading="Types of BIS Certification Schemes"
          />
        </div>

        {/* Image */}
      </div>
    </section>
  );
};

const TypesSection = () => {
  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* types */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          types
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Schemes Explained
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        1. BIS License for Indian manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certification or ISI Mark is granted to{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Indian Manufacturers under schedule II and scheme I of BIS
        </span>{" "}
        ISI Mark is mandatory for 650+ products under the Product Certification
        Scheme. Over 40,000 manufacturers have BIS certification for steel,
        glass, footwear, toys, electronics, and more.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS License is initially granted for 1 year and after that it can be
          renewed from 1-5 years,
        </span>{" "}
        by payment of the requisite fees. To check the products that require
        mandatory BIS certification for Indian manufacturers.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        2. BIS Licence for Foreign Manufacturers / Indian Importers under FMCS:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        FMCS Standards for Foreign Manufacturer Certification Scheme, under this
        scheme{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          ISI Mark Certification is granted to manufacturers based out of India
        </span>{" "}
        Governed by the BIS Act 2016, it allows manufacturers (not importers) to
        export to India. Importers can be Authorized Indian Representatives
        (AIR). Over 1,850 licenses granted since 2000.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        3. BIS Certificate under Compulsory Registration Scheme ( CRS ) for
        Indian and Foreign Manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Most of the electronic products{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          like mobile phones, adaptors, televisions, li-ion batteries, UPS, LED
          bulbs, etc
        </span>{" "}
        require BIS registration under the CRS scheme. In which, the product has
        to be tested as per the BIS standards and the statutory documents of the
        manufacturer have to be filed along with the application, once the
        registration is granted R.no. is generated which has to be mentioned on
        the products that are registered with BIS.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        4. Recognition of Hallmarking Centres
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All the gold and silver jewellery sold in India must have{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          hallmark certification from BIS, and hallmark is grante
        </span>{" "}
        after the product is tested in a BIS approved Hallmarking centre,
        therefore it is the duty of BIS to recognize hallmarking centres that
        can test as per the BIS standards.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        5. Hallmark for all types of gold and silver jewellery
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS formulates standards as per the international norms according to
        which{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          all types of gold and silver jewellery must be tested.
        </span>{" "}
        Hallmark helps the consumer to ensure the purity of product that they
        are buying and also helps them to know what they are paying for.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        6. ECO Mark Certification
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The products carrying ECO mark by BIS ensures that they are
        environmentally safe and are not polluting earth.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          The major product heads covered under this BIS registration schem
        </span>{" "}
        are Includes paints, beverages, infant foods, cosmetics, batteries,
        edible oils, electronics, leather, fire extinguishers, and food
        additives.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        7. BIS Laboratory Recognition Scheme ( LRS )
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS-approved labs test products to ensure compliance with BIS standards
        for certification. quality.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS certification is granted after the test report from BIS laboratory
          is submitted
        </span>{" "}
        to the concerned branch office or headquarters, however the case maybe.
        Laboratories that require BIS certification must have prior approval
        from NABL.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        8. Management System Certification Scheme:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This scheme for BIS Certification of management systems{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          was started in the year 1991,
        </span>{" "}
        and BIS, India&apos;s sole certification body under the Parliament Act,
        grants certifications from its Delhi headquarters.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        9. Development of BIS Standards for new products.
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification requires product testing as per specific Indian
        Standards set by the Bureau of Indian Standards. Standards ( BIS. )
        Currently,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          there are more than 20,000 BIS Standards developed by various
          sectional
        </span>{" "}
        there are more than 20,000 BIS Standards developed by various sectional
        committees incorporated within the department.
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        ISI Mark BIS Certification Documents
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          ISI: GST, MSME, test report.&nbsp;&nbsp;&nbsp;&nbsp;CRS: GST, brand,
          test report.
        </p>
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "GST certificate of the applicant",
              "MSME certificate (if applicable)",
              "List of machinery used for manufacturing the specific product for which BIS Certification is applied for.",
              "List of raw materials used for manufacturing.",
              "List of instruments in the in-house test laboratory.",
              "Plant layout of the factory",
              "Test report from BIS' lab or OSL (Outside privately owned laboratories appointed by BIS as per BIS standards.)",
              "Calibration certificates, etc.",
            ]}
            heading="For BIS license of manufacturers the following documents are a must:"
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To apply for a BIS certificate, the manufacturer must visit
      </div>
    </section>
  );
};

const ProcedureSection = () => {
  return (
    <section id="procedure" className="flex flex-col scroll-mt-20">
      {/* Procedure*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Identifying the Indian Standard (IS) applicable on the product.",
                "Setting up of in-house lab as per the standard.",
                "Creation of BIS portal (in case of Indian manufacturers).",
                "Getting the product tested as per ISS (Indian Standard Specifications).",
                "Filing of BIS application with test report and other requisite documents.",
                "Clearing of queries (if any) raised by the department.",
                "Audit of the factory by a BIS officer allotted to the firm.",
                "Sample testing in the in-house test lab.",
                "Sealing of samples for re-verification by the officer during the audit. (The applicant does not have to wait for this test report, as the test report is already submitted during the application. This sample is just for re-verification purposes.)",
                "Completion of audit.",
                "Grant of BIS Licence.",
              ]}
              heading="BIS Certification Process for Manufacturers"
            />
          </div>
        </div>

        <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Note
          </span>
          After grant of BIS certificate, there are 4 surveillances conducted
          annually on all manufacturers, the details are as below: <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            A
          </span>
          Random market sample testing in done 2 times in a year ( every 6
          months ), <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            B
          </span>
          Random factory surveillances are conducted twice to check if all the
          formalities are met by the licensee ( every 6 months).
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Creation of BIS portal.",
                "Testing of samples as per BIS' allocated Indian Standard (IS).",
                "Preparation of application documents.",
                "Filing of BIS application.",
                "Clearing of queries (if any).",
                "Grant of BIS registration.",
              ]}
              heading="BIS/CRS Registration Process for Manufacturers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CostSection = () => {
  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Cost
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Cost Or BIS License Fees.
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Starts from ₹1,000 + testing & audit charges.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certificate fees depends on various factors such as product, Indian
        Standard ( IS ) applicable, Nature of the manufacturer ( Indian or
        overseas ), etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Government fees: INR 53,000 + GST @18% per test report (Additional INR 20,000 for each test report in one application).",
              "Testing charges: As per actuals (vary based on product and lab).",
            ]}
            heading="Fee structure for BIS registration ( CRS ):"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        Certain discounts on Govt.fee are provided to companies registered under
        the MSME act.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Application fee: INR 1,000 + GST @18%",
              "License fee: INR 1,000 + GST @18%",
              "Audit charges: INR 7,000 per man-day + GST @18%",
              "Testing charges: As per actuals (vary based on product and lab)",
              "Minimum Marking Fee: As per actuals (varies according to the product)",
            ]}
            heading="Fee Structure for BIS Certification or BIS licence:"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification cost in case of Foreign manufacturers has certain
        other charges that are payable, please contact us for more details for
        the complete schedule of charges to obtain BIS License under FMCS.
      </div>
    </section>
  );
};

const ConsultantSection = () => {
  return (
    <section id="consultant" className="flex flex-col scroll-mt-20">
      {/* Consultant*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consultant
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Role of BIS Consultant in Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Guides manufacturers through BIS certification for hassle-free approval.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS consultantshelp you to understand all the requirements that are to
        be fulfilled by the manufacturers lawfully, and completely hand-holds
        you in the BIS certification process right from the start till the BIS
        license is granted. <br />
        <br />
        We at Sun Consultants & Engineers ( Best BIS Consultant in India ),
        being in this field for over a decade now, have the greatest possible
        knowledge, resources, manpower and technical know-how to assist our
        clients , and ensure them a feeling of cake-walk while going through the
        process to obtain BIS certificate.
        <br />
        <br />
        For detailed details on all of the above you can contact our experts on
        the details below:
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
        What did you think of this content?
      </span>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
              />
            </svg>

            <span>It was helpful</span>
          </button>

          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
              />
            </svg>

            <span>It was not helpful</span>
          </button>
        </div>

        <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
          Last updated on Mar 19, 2025
        </p>
      </div>
    </section>
  );
};
