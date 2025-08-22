import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import SchemeXImage from "../assets/servicesImages/SchemeXImage.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ServiceContactForm from "@/common/ServiceContactForm";
import CDSCOContentRight from "@/components/manual/CDSCOContentRight";
import Services from "../components/manual/Services";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import AboutAuthor from "../components/common/AboutAuthor";
import { Check, Search, SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const productDataTableSecond = [
  {
    id: 1,
    isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
    title:
      "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Degree of Protection Provided by Enclosures (IP Code)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "Earth Moving Machinery - Guards - Definitions and Requirements",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "Safety of Machinery Fire Prevention and Fire Protection",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Safety of Machinery Hygiene Requirements for the Design of Machinery",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Safety of Machinery Prevention of Unexpected Start-Up",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "Safety of Machinery Emergency Stop Function Principles for Design",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomics- System of Auditory and Visual Danger and Information Signals",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomics - System of auditory and visual danger and information signals",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements",
  },
];

const productDataTableThird = [
  {
    id: 1,
    description: "All types of Pumps for handling liquids, liquid elevators",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "All types of compressors",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications",
  },
  {
    id: 3,
    description:
      "All types of machinery for Treatment of material by a process involving a Change of temperature",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "or purifying machinery for liquid and gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "All types of cranes",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes",
  },
  {
    id: 7,
    description: "All types of machinery for construction",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers",
  },
  {
    id: 8,
    description: "All types of weaving machines (looms)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery",
  },
  {
    id: 9,
    description: "All types of machinery for making embroidery.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "Textile Machiner Safety Requirements Part 1 Common Requirements",
  },
  {
    id: 10,
    description: "All types of metal cutting machines",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements",
  },
  {
    id: 11,
    description:
      "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "All types of machinery for working rubber and plastics",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements",
  },
  {
    id: 13,
    description:
      "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
  },
  {
    id: 16,
    description: "All types of Diesel Generator",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
  },
  {
    id: 17,
    description: "All types of Transformer",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
  },
  {
    id: 18,
    description:
      "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
  },
  {
    id: 19,
    description:
      "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8535, 8537 and 8538",
    indianStandard: "-",
    title: "-",
  },
];

export const SchemeX = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS Scheme X Certification | Machinery & Electrical Equipment Safety |
          Sun Certifications
        </title>
        <meta
          name="description"
          content="Expert BIS Scheme X certification services for machinery and electrical equipment. Get ISI Mark certification for exports to India. Trusted BIS Certifications since 2013. ✓ Fast Processing ✓ Expert Guidance"
        />
        <meta
          name="keywords"
          content="BIS Scheme X, machinery certification, electrical equipment certification"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Scheme X Certification | Machinery & Electrical Equipment Safety"
        />
        <meta
          property="og:description"
          content="Expert BIS Scheme X certification services for machinery and electrical equipment. Get ISI Mark certification for exports to India. ✓ Fast Processing ✓ Expert Guidance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://suncertifications.com/og-image.jpg"
        />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification | Machinery & Electrical Equipment Safety"
        />
        <meta
          name="twitter:description"
          content="Expert BIS Scheme X certification services for machinery and electrical equipment. Get ISI Mark certification for exports to India."
        />
        <meta
          name="twitter:image"
          content="https://suncertifications.com/twitter-image.jpg"
        />
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />

        {/* Hreflang Links for International Pages */}
        <link
          rel="alternate"
          href="https://bis-certifications.com/indian-bis-certification-under-scheme-x"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/it/certificazione-bis-indiana-secondo-schema-x"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/fr/certification-bis-indienne-selon-schema-x"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/de/indische-bis-zertifizierung-nach-schema-x"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/nl/indiaas-bis-certificaat-volgens-schema-x"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ja/indo-no-bis-nintei-sukimu-x"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ko/indo-bis-injeung-scheme-x-haenghaeng"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/id/sertifikasi-bis-india-di-bawah-skema-x"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/th/bis-prathiap-india-taem-dai-tae-skema-x"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/vi/chung-nhan-bis-an-do-theo-scheme-x"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/es/certificacion-bis-india-bajo-esquema-x"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/indian-bis-certification-under-scheme-x"
          hrefLang="x-default"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS Scheme X Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
              url: window.location.href,
              logo: "https://suncertifications.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8010505057",
                contactType: "customer service",
                email: "admin@bis-certifications.com",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS Scheme X Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Scheme X Certification",
                    description:
                      "BIS certification for machinery and electrical equipment under Scheme X",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AIR Nomination",
                    description:
                      "Authorized Indian Representative nomination services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Compliance Support",
                    description:
                      "Ongoing BIS compliance and surveillance support",
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
                name: "What is BIS Scheme X Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS Scheme X is mandatory for machinery and electrical equipment manufacturers exporting products to India. It ensures products meet Indian Standards and requires ISI Mark certification.",
                },
              },
              {
                "@type": "Question",
                name: "How long does BIS Scheme X certification take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The BIS Scheme X certification process typically takes approximately 3 months from application submission to license grant, including testing and factory audit.",
                },
              },
              {
                "@type": "Question",
                name: "What documents are required for BIS Scheme X certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Required documents include application form, plant and machinery list, raw materials list, test equipment details, calibration certificates, plant layout, and quality control documentation.",
                },
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Indian Bis Certification Under Scheme-X",
                item: "https://bis-certifications.com/indian-bis-certification-under-scheme-x",
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="w-full relative " role="main">
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
          <div className="max-w-[80rem] mx-auto px-4">
            <div className="w-fit font-inter">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      Indian Bis Certification Under Scheme-X
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <SchemeXHero />
        <SchemeXIndex />
        <SchemeXContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export const SchemeXIndex = () => {
  const { t } = useTranslation("SchemeX");
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    {
      key: "overview",
      label: t("navigation.overview"),
    },
    {
      key: "certification",
      label: t("navigation.certification"),
    },
    {
      key: "procedure",
      label: t("navigation.procedure"),
    },
    {
      key: "pricing",
      label: t("navigation.pricing"),
    },
    {
      key: "representative",
      label: t("navigation.representative"),
    },
    {
      key: "benefits",
      label: t("navigation.benefits"),
    },
    {
      key: "conclusion",
      label: t("navigation.conclusion"),
    },
  ];

  const handleItemClick = (item) => {
    const element = document.getElementById(item.key);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item.key);
      setIsMobileMenuOpen(false);
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
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((section) => {
        const element = document.getElementById(section.key);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.key,
            top: rect.top,
            bottom: rect.bottom,
            element,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible in viewport
      // Check which section's top is closest to the top of viewport (with some offset)
      const currentSection = sections.find((section) => {
        return section.top <= 150 && section.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        // If no section is in the sweet spot, find the one closest to top
        const closestSection = sections.reduce((closest, section) => {
          if (!closest) return section;

          const currentDistance = Math.abs(section.top - 150);
          const closestDistance = Math.abs(closest.top - 150);

          return currentDistance < closestDistance ? section : closest;
        }, null);

        if (closestSection) {
          setActiveSection(closestSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Find current section label for mobile display
  const currentSectionLabel =
    SECTIONS.find((section) => section.key === activeSection)?.label ||
    t("navigation.overview");

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {currentSectionLabel}
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
            viewBox="0 24 24"
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
            {SECTIONS.map((item) => (
              <div
                key={item.key}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item.key === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
          <div
            key={item.key}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item.key === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item.label}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item.key === activeSection
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

const SchemeXContent = () => {
  return (
    <section className="" aria-label="BIS Scheme X Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXContentLeft />
          {/* Right Side */}
          <CDSCOContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="product-table">
        <SchemeXTables />
      </div>

      <div id="services">
        <Services />
      </div>
    </section>
  );
};

export const SchemeXContentLeft = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <article className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section
          className="flex flex-col gap-2 md:gap-4 mb-6"
          aria-label={t("overview.ariaLabel")}
        >
          <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            {t("overview.title")}
          </h1>

          <h2 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
            {t("overview.subtitle")}
          </h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.intro")}
          </p>

          <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
            {t("overview.exemptionsTitle")}
          </h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.exemptionsContent")}
          </p>

          <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
            {t("overview.regulationTitle")}
          </h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph1")}
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph2")}
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph3")}
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph4")}
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph5")}
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overview.regulationParagraph6")}
          </p>
          <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

          {/* <div className="bg-[#F9F7F2] border-l-4 border-[#1A8781] p-4 mt-2 md:mt-4 rounded-md shadow-sm">
              <h4 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-1">Is obtaining an ISI mark for Indian importers mandatory?</h4>
              <p className="font-geist text-[16px] md:text-[20px] text-[#42434d]">
                For the products falling under the mandatory list, FMCS BIS certification is mandatory. The list of mandatory products can be accessed on this <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/" target="_blank" rel="noopener noreferrer" className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors">link</a>.
              </p>
            </div> */}
        </section>

        <OverviewSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <Certification />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        
        <Procedure />

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        
        
        
        <Pricing />



        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      
      
        <Representative />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
       
       
       
        <Benefits />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      
        <Conclusion />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
      </div>
    </article>
  );
};

const OverviewSection = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section
      id="overview"
      className="flex flex-col scroll-mt-20"
      aria-label={t("overviewSection.ariaLabel")}
    >
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("overviewSection.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        {t("overviewSection.mainTitle")}
      </h2>

      {/* <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overviewSection.overviewTitle")}
      </h3> */}

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overviewSection.overviewContent")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overviewSection.isiMarkTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overviewSection.isiMarkContent")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overviewSection.schemeXTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overviewSection.schemeXContent")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overviewSection.conclusionTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overviewSection.conclusionContent")}
      </p>

      {/* table  */}

      <div className="overflow-x-auto mt-8 mb-8">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                {t("overviewSection.table.feature")}
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                {t("overviewSection.table.isiMark")}
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px] text-gray-800">
                {t("overviewSection.table.schemeX")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                {t("overviewSection.table.managedBy")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.indianBis")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.indianBis")}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                {t("overviewSection.table.certificationType")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.bisLicence")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.bisCertificateLicence")}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                {t("overviewSection.table.targetProducts")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.consumerGoods")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.machineryElectrical")}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                {t("overviewSection.table.markUsed")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.isiMarkValue")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.bisStandardMark")}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3 font-geist font-medium text-[14px] md:text-[16px] text-gray-700">
                {t("overviewSection.table.complianceLevel")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.indianStandardCompliance")}
              </td>
              <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d]">
                {t("overviewSection.table.highEndCompliance")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <img
        src={SchemeXImage}
        alt={t("overviewSection.imageAlt")}
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      {/* Scheme X Certification Product list */}

      <div className="mt-[16px] md:mt-[24px]">
        {/* Download Button */}

        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("overviewSection.tableSection.serialNumber")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("overviewSection.tableSection.description")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("overviewSection.tableSection.hsCode")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("overviewSection.tableSection.tableData", {
              returnObjects: true,
            }).map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.serialNumber}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {row.description}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {row.hsCode}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            {t("overviewSection.tableSection.title")}
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            {t("overviewSection.tableSection.description")}
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={downloadTableData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {t("overviewSection.tableSection.downloadButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

const Certification = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="certification" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("certification.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        {t("certification.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("certification.intro")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("certification.keyDocumentsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("certification.keyDocumentsContent")}
      </p>

      {/* table for documents */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("certification.documentsTable.serialNumber")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("certification.documentsTable.documentRequired")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("certification.documentsTable.details")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row1.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row1.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row2.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row2.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row3.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row3.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row4.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row4.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row5.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row5.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row6.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row6.detail")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row7.document")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("certification.documentsTable.row7.detail")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("certification.registrationTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("certification.registrationContent")}
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("certification.whySchemeXTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("certification.whySchemeXContent")}
      </p>
    </section>
  );
};

const Procedure = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="procedure" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("procedure.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        {t("procedure.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.intro")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.stepByStepTitle")}
      </h3>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.checkProductTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.checkProductContent")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.prepareDocumentsTitle")}
      </h3>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.keyDocumentsTitle")}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("procedure.documentsList", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.documentsImportance")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.technicalFileTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.technicalFileContent")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("procedure.technicalFileItems", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.technicalFileImportance")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.submitApplicationTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.submitApplicationContent")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.foreignProcessNote")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.factoryInspectionTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.factoryInspectionContent")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("procedure.inspectionDuration", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.inspectionDetails")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.sampleTestingTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.sampleTestingContent")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("procedure.certificateIssuanceTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("procedure.certificateIssuanceContent")}
      </p>
    </section>
  );
};

const Pricing = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="pricing" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("pricing.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("pricing.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("pricing.intro")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("pricing.keyChargesTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("pricing.keyChargesContent")}
      </p>

      {/* table for fee structure  */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("pricing.feeTable.feeType")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("pricing.feeTable.cost")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("pricing.feeTable.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeLicense.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeLicense.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeLicense.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeCoc.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeCoc.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.applicationFeeCoc.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeLicense.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeLicense.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeLicense.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeCoc.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeCoc.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.certificationFeeCoc.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.technicalFileReview.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.technicalFileReview.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.technicalFileReview.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.inspectionFee.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.inspectionFee.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.inspectionFee.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.sampleProcurement.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.sampleProcurement.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.sampleProcurement.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.testingCharges.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.testingCharges.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.testingCharges.description")}
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.bankGuarantee.type")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.bankGuarantee.cost")}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {t("pricing.feeTable.bankGuarantee.description")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );

};

const Representative = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="representative" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("representative.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("representative.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representative.intro")}
      </p>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.keyResponsibilitiesTitle")}
      </h3>

      <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.bisRegistrationTitle")}
      </h4>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representative.bisRegistrationPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.submissionTitle")}
      </h4>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representative.submissionPoints", { returnObjects: true })}
        />
      </div>

      <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.coordinatingTitle")}
      </h4>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representative.coordinatingPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.managingFeesTitle")}
      </h4>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representative.managingFeesPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.postCertificationTitle")}
      </h4>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representative.postCertificationPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representative.whyAirCriticalTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representative.whyAirCriticalContent")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representative.importantNote")}
      </p>
    </section>
  );
};

const Benefits = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="benefits" className="flex flex-col scroll-mt-20">
      {/* Header */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("benefits.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("benefits.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.intro")}
      </p>

      {/* Manufacturing Benefits */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("benefits.manufacturingBenefitsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.manufacturingBenefitsContent")}
      </p>

      {/* Quality Benefits */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("benefits.qualityBenefitsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.qualityBenefitsContent")}
      </p>

      {/* Competitive Benefits */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("benefits.competitiveBenefitsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.competitiveBenefitsContent")}
      </p>

      {/* Compliance Benefits */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("benefits.complianceBenefitsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.complianceBenefitsContent")}
      </p>

      {/* Sustainability Benefits */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("benefits.sustainabilityBenefitsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("benefits.sustainabilityBenefitsContent")}
      </p>
    </section>
  );
};

const Conclusion = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("conclusion.headerTitle")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("conclusion.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.paragraph1")}
      </p>

      {/* Exemptions Section */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("conclusion.exemptionsTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.exemptionsContent")}
      </p>

      {/* Regulation Section */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] mt-6 mb-3">
        {t("conclusion.regulationTitle")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph2")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph3")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph4")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph5")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.regulationParagraph6")}
      </p>
    </section>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </h3>
      <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
};

const SchemeXHero = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS FMCS Certification Hero"
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
              {t("hero.badge")}
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              {t("hero.title")}
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            {t("hero.description")}
          </p>

          <nav className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                {t("hero.viewServices")}
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

const SchemeXTables = () => {
  const { t } = useTranslation("SchemeX");
  const [searchQuery, setSearchQuery] = useState("");
  const table1Ref = useRef(null);
  const table2Ref = useRef(null);
  const table3Ref = useRef(null);

  const scrollToTable = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Get table data from translations
  const tableData = t("overviewSection.tableSection.tableData", {
    returnObjects: true,
  });

  const filteredProducts =
    tableData?.filter(
      (product) =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.hsCode.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="w-full pb-12 borde">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        {/* Navigation Buttons */}
        <div className="flex gap-6 mb-12 justify-center items-center">
          <button
            onClick={() => scrollToTable(table1Ref)}
            className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {t("overviewSection.tableSection.productTableA") ||
              "Product Table A"}
          </button>
          <button
            onClick={() => scrollToTable(table2Ref)}
            className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {t("overviewSection.tableSection.productTableB") ||
              "Product Table B"}
          </button>
          <button
            onClick={() => scrollToTable(table3Ref)}
            className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {t("overviewSection.tableSection.productTableC") ||
              "Product Table C"}
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            {t("overviewSection.tableSection.title")}
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            {t("overviewSection.tableSection.description")}
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={
              t("overviewSection.tableSection.searchPlaceholder") ||
              "Search by description or HS code..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div ref={table1Ref} className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  {t("overviewSection.tableSection.serialNumber")}
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  {t("overviewSection.tableSection.description")}
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  {t("overviewSection.tableSection.hsCode")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.serialNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.hsCode}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div ref={table2Ref}>
        <TypeBTable />
      </div>
      <div ref={table3Ref}>
        <TypeCTable />
      </div>
    </div>
  );
};

const TypeBTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productDataTableSecond.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(productDataTableSecond.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYPE B (Generic Safety Standards dealing with one safety aspect or more
        than one type of safeguard that can be used across a wide range of
        machinery)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                S.No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS Number
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Title
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.id}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.isNumber}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  {item.title}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <div className="font-geist text-sm text-gray-700">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, productDataTableSecond.length)} of{" "}
            {productDataTableSecond.length} results
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
  );
};

const TypeCTable = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYPE C (Machine Safety Standards dealing with detailed safety
        requirements for a particular machine or group of machines)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                S. No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Description of Machinery and Electrical Equipment
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HS Code
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Indian Standard/Specifis Clause of Indian Standard
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Title of Indian Standard
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productDataTableThird.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.id}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.description}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.hsCode}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  {item.indianStandard.split("\n").map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  {item.title.split("\n").map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// SchemeX FAQs Section
export const ServiceFaq = () => {
  const { t } = useTranslation("SchemeX");
  const faqData = t("faq.questions", { returnObjects: true }) || [];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          {t("faq.title")}
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          {t("faq.intro")}{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SchemeX;

// Update the downloadTableData function
const downloadTableData = () => {
  // Create a link element to download the PDF
  const link = document.createElement("a");
  link.href = "/pdf/schemeXtable.pdf"; // Path to your PDF in public/pdf folder
  link.download = "SchemeXtable.pdf"; // File name for download
  link.target = "_blank"; // Open in new tab if direct download fails

  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
