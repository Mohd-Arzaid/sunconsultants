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

// Static navigation sections for Scheme X page
const SCHEMEX_SECTIONS = [
  { key: "introduction", label: "Introduction" },
  { key: "what-is", label: "What is Scheme X" },
  { key: "otr", label: "OTR" },
  { key: "otr-certification", label: "Certification under OTR" },
  { key: "steps", label: "Steps" },
  { key: "documents-required", label: "Documents" },
  { key: "validity-renewal", label: "Validity & Renewal" },
  { key: "conclusion", label: "Conclusion" },
];

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
    description: "All types of Power Semiconductor Converter",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
  },

  {
    id: 19,
    description:
      "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
  },
  {
    id: 20,
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
          BIS Scheme X Certification | Machinery & Electrical Equipment Safety
        </title>
        <meta
          name="description"
          content="BIS Scheme X Certification is required to ensure quality and safety of low voltage switchgear, control gear, machinery, and electrical equipment."
        />
        <meta
          name="keywords"
          content="Scheme X, BIS Scheme X, BIS Scheme X Certification, Scheme X Certification, machinery certification, electrical equipment certification"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Scheme X Certification | Machinery & Electrical Equipment Safety"
        />
        <meta
          property="og:description"
          content="BIS Scheme X Certification is required to ensure quality and safety of low voltage switchgear, control gear, machinery, and electrical equipment."
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
          content="BIS Scheme X Certification is required to ensure quality and safety of low voltage switchgear, control gear, machinery, and electrical equipment."
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
          href="https://bis-certifications.com/ar/BIS/shahadat-bis-alhind-tahata-almukhatat-x"
          hrefLang="ar"
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
  // Navigation labels are static for this page per custom content
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = SCHEMEX_SECTIONS;

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
  }, [SECTIONS]);

  // Find current section label for mobile display
  const currentSectionLabel =
    SECTIONS.find((section) => section.key === activeSection)?.label ||
    SECTIONS[0].label;

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
                className={`px-4 py-3 cursor-pointer transition-colors ${item.key === activeSection
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item.key === activeSection
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {item.label}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item.key === activeSection
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

  // Update the downloadTableData function
  const downloadTableData = () => {
    // Create a link element to download the PDF
    const link = document.createElement("a");
    link.href = "/pdf/schemeXproduct.pdf"; // Path to your PDF in public/pdf folder
    link.download = "SchemeXproduct.pdf"; // File name for download

    link.target = "_blank"; // Open in new tab if direct download fails

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Additional download functions for different table types
  const downloadStandardsTable = () => {
    const link = document.createElement("a");
    link.href = "/pdf/schemeXstandards.pdf";
    link.download = "SchemeXstandards.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadHsCodeTable = () => {
    const link = document.createElement("a");
    link.href = "/pdf/schemeXhscodes.pdf";
    link.download = "SchemeXhscodes.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Introduction */}
        <section
          id="introduction"
          className="flex flex-col scroll-mt-20"
          aria-label="Introduction to BIS Scheme X Certification"
        >
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Introduction to BIS Scheme X Certification
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The Bureau of Indian Standards, or BIS for short, rolled out &quot;Scheme X&quot; on March 16, 2022, aimed at improving compliance on product safety and quality in India. Indian and foreign manufacturers can apply for BIS certification for Machine and Electrical equipment, components Like assemblies, sub-assemblies and, and Tools specified in Schedule-II of Scheme-X and take certification prior to exporting, selling, or distributing in India.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Under Scheme X, the manufacturers can apply for a BIS License or a Certificate of Conformity (CoC) for low voltage switch gear and control gear, machinery, and electric equipment. Once the manufacturers are certified, they are allowed to use the BIS Standard mark, indicating that their products are in accordance with the standards laid down in India.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The certification, while promoting the product and compliance with the Indian Standards and Government Regulations, helps develop trust and confidence of the consumers in the certified products.
          </p>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* What is Scheme X */}
        <section id="what-is-scheme-x" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">What is Scheme X Certification?</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Understanding BIS Scheme X Certification
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Scheme X is a product certification scheme developed under the BIS Conformity Assessment Regulations, 2018 and later on, simplified under the BIS Conformity Assessment (Amendment) Regulations, 2022. The main goal is to bring the Indian safety and quality standards to global standards, especially with regard to the industrial machinery and electrical equipment. The products manufactured in or imported to India under this scheme are subjected to rigorous scrutiny and assessment to prove technical, safety, as well as performance standards.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Provisions under the original scope of Scheme X Certification have been revised for and expanded with the newly issued Machinery and Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024, which is under the jurisdiction of the Ministry of Heavy Industries and has been brought into force by the BIS. The order comes into effect on 1st September 2026, and covers a broad spectrum of machinery and electrical equipment such as pumps for handling liquids, compressors, cranes, rotary electrical machines, transformers, and switchgear and control gear.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Assemblies, sub-assemblies and components of such machinery or equipment are also part of the certification scope as per Section 16 of the Bureau of Indian Standards Act, 2016.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Moreover, under the 1989 CMVR Rules (Construction and Manufacture of Valve Regulation), Bowser and other types of construction equipment under the jurisdiction of Scheme X, are ensured that the market does not get exposed to the equipment which lacks the requisite of safety and technical standards.
          </p>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Omnibus Technical Regulation */}
        <section id="otr" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Omnibus Technical Regulation (OTR)</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Omnibus Technical Regulation Framework
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The Ministry of Heavy Industries released the &quot;Omnibus Technical Regulation on Safety Orders (Machinery and Electric equipment Safety)&quot; via E-Gazette notification of August 28, 2024. This innovative regulation intends to improve - safety, quality and compliance of machinery, electrical equipment and their assemblies, sub assemblies and components, under Scheme X of the BIS Regulation, 2016.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Under the OTR, all categories of machinery and electrical equipment, and all their parts and components are included. However, a few categories are specifically excluded:
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <PointsListTwo
              points={[
                "Any machinery and components that are a part of any other order under Section 16 which is issued under the Bureau of Indian Standards Act, 2016.",
                "Manufactured domestic goods and articles that are only intended for export.",
                "Construction machinery and equipment which are under the CMVR Rules, 1989, prescribed by the Ministry of Road Transport and Highways (MoRTH).",
              ]}
            />
          </div>

          <p className="mt-[12px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            These exceptions are made to facilitate compliance and avoid unnecessary duplication of regulation in order to promote ease of doing business.
          </p>

          <p className="mt-[12px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The Omnibus Technical Regulation, 2024 covers all machinery and electrical equipment, including low voltage switchgear and control gear notified by the Ministry of Heavy Industries, will be treated under the Scheme X framework of BIS Certification. The Order will come into effect on the <strong>1st of September 2026</strong> so that the manufacturers and importer have enough to modify their operations as per the Orders issued.
          </p>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Certification under OTR */}
        <section id="otr-certification" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">BIS Certification under the Omnibus Technical Regulation</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            BIS Certification Process under OTR
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            As per the OTR 2024, manufacturers, as well as importers, of machinery and electrical equipment which include pumps, pumps, compressors, centrifuges, cranes, transformers, and switchgears must apply for BIS Certification under Scheme X.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Under Scheme X, manufacturers can opt to apply for:
          </p>

          <div className="ml-6 mt-3">
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              - <strong>A BIS Licence</strong>, or
            </p>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              - <strong>A Certificate of Conformity (CoC)</strong>
            </p>
          </div>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Products bearing the BIS Standard Mark which is a Mark of Conformity which certifies and assures the users that the product is safe, reliable, and of good quality. It is also a mark of trust and really good performance.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Special Note for MSMEs</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            As with many other sectors, Micro, Small, and Medium Enterprises (MSMEs) must also comply with Scheme X and obtain BIS Certification for their machinery and electrical equipment. While it may appear that compliance with the regulatory requirements may be challenging, the Scheme X certificate is a value addition and advantage to MSMEs for the following reasons:
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <PointsListTwo
              points={[
                "Proves adherence to legal and other requisite obligations set by the government.",
                "Increase the product's reputation and consumer trust.",
                "Facilitates access to a larger domestic and overseas market.",
                "Improves the MSME's standing globally with respect to competitiveness, safety, and quality.",
              ]}
            />
          </div>

          <img
            src={SchemeXImage}
            alt="BIS Scheme X Logo"
            className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
          />

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The BIS standard mark of Scheme X forms a quality mark and a principle of trust. The Logo contains:
          </p>

          <div className="ml-6 mt-3">
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              1. the standard number is displayed in the top portion of the logo; and
            </p>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              2. the license number displayed in the bottom portion of the Logo in the format: <strong>CM/L-XXXXXXXXXX</strong>
            </p>
          </div>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            This mark signifies that a BIS Licence has been successfully issued to the manufacturer. It entitles the manufacturer to place the BIS Mark and assures the consumers that the product is authentic and safe.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Legal Implications</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            BIS Standard Mark is a mark of trust and quality. The mark is only available after a valid contract is in place. Only a valid contract allows the owner to use the mark. Using the mark without a valid contract is an offense under the Indian constitution and is equal to having a legal mark. The owner of the mark is placed under heavy restrictions for the use of the license CM/L-XXXXXXXXXX for products that have no BIS certification.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            It follows that every producer is obliged to:
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-3">
            <PointsListTwo
              points={[
                "Acquire a valid BIS License under Scheme X.",
                "Satisfy the relevant requirements of Indian Standards; and",
                "Properly affix the products with the approved BIS Logo.",
              ]}
            />
          </div>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            This regulatory framework is extended to protect the interests of consumers and business people, fostering a market that emphasizes safety, openness, and confidence.
          </p>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Differences */}
        <section id="differences" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Key Differences Between Scheme-I and Scheme-X</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Comparison: Scheme-I vs Scheme-X
          </h2>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Scheme-I</h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <PointsListTwo
              points={[
                "Includes a wider category of consumer products such as electronics, home appliances, and even industrial products.",
                "Products issued a certificate under this scheme must have the Standard ISI Mark.",
                "Relates to both domestic and foreign manufacturers.",
                "Involves factory audits and sample testing to determine quality and compliance with Indian Standards.",
              ]}
            />
          </div>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Scheme-X</h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <PointsListTwo
              points={[
                "Addresses high-risk industrial and safety critical engineering products, which include electrical equipment, machinery, and industrial systems of considerable duty.",
                "The certification is of greater rigor than Scheme-I. It involves advanced technical reporting, compliance checking, and extensive certification audits.",
                "Scheme-X tends to be more expensive than Scheme-I because of the extra compliance documentation.",
                "Any business that deals with electrical equipment or industrial machinery is mandated to obtain certification under Scheme-X.",
              ]}
            />
          </div>
          <div className="mt-[16px] md:mt-[24px]">
            <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
              <TableHeader className="bg-[#F9F7F2]">
                <TableRow className="bg-[#1A8781]/10">
                  <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">Feature</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">ISI Mark</TableHead>
                  <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">Scheme X</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-white divide-y divide-gray-200">
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Managed by</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Indian BIS</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Indian BIS</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Certification Type</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">BIS licence</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">BIS certificate / BIS licence</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Target Products</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Consumer goods</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Machinery & electrical equipment</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Mark Used</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">ISI mark</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">BIS standard mark (under Scheme X)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Compliance Level</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">Indian standard compliance</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">High-end technical and safety compliance</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Products Covered */}
        <section id="products-covered" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Products Covered by Scheme-X</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Product Categories under Scheme-X
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Scheme-X covers products with the highest risk to safety and performance, including:
          </p>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <PointsListTwo
              points={[
                "Electrical Equipment: Industrial transformers, power supply units, low-voltage switchgear and control gear, and high-voltage devices.",
                "Heavy Machinery: Hydraulic presses, industrial cranes, automated machine tools, and specialized equipment for large-scale industries.",
                "Life-Critical Equipment: Fire extinguishers, pressure vessels, emergency electrical systems, and other life-safety systems.",
                "Specialized Consumer & Industrial Electronics: Medical grade electronics with advanced protective measures.",
              ]}
            />
          </div>

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

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Safety Standards */}
        <section id="safety-standards" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Safety Standards Under BIS Scheme - X</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Safety Standards and Compliance Requirements
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            More than simply a legal necessity, the BIS Scheme - X Certification offers a promise of safety, quality, and reliability. This Certification, which entails strict adherence to national and international norms, ensures that the machinery and electrical apparatus offered to users are safe, environmentally friendly, and technically sound. To certify under Scheme - X, manufacturers need to comply with the following major safety components:
          </p>

          <div className="mt-[12px] md:mt-[16px] space-y-4">
            <div className="space-y-3">
              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                <strong>1. Electrical Safety:</strong> Compliance with the applicable IEC and Indian Standards. Certification protects against short circuits, electric shocks, insulation breakdown, loss in protective earth, ignition of surrounding combustible material, and fire.
              </p>

              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                <strong>2. Mechanical Safety:</strong> Assessment of the machinery&apos;s structural integrity and the integrity of moving parts and of new materials. Ensures that equipment is safely subjected to mechanical stress, wear, and operational hazards.
              </p>

              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                <strong>3. Fire Safety:</strong> The use of materials that are designed and constructed with fire resistant material. Compliance with standards for flame propagation performance to control the risks associated with fire.
              </p>

              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                <strong>4. Environmental Compliance:</strong> The use of controlled power and eco - friendly materials in the production of equipment. Encourages manufacturers to lessen the environmental impact of their equipment.
              </p>

              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                <strong>5. Quality Management:</strong> Dominant and autonomous control on the production processes to maintain the pre-set standards and norms. Focus on regulation of factory conditions, including process audits, and continual adherence.
              </p>
            </div>
          </div>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Regulatory Standards */}
        <section id="regulatory-standards" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Regulatory Standards Under Scheme-X</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Regulatory Standards Under Scheme-X
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Manufacturers are required to comply with the Relevant Indian Standards which are aligned with the International Standards, including:
          </p>

          <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Type A Standards:</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">IS 16819:2018 / ISO 12100:2010 – Safety of Machinery: General Principles for the Design, Risk Assessment, and Risk Reduction.</li>
          </ul>

          <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Type B Standards:</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Described in the Second Schedule of the Omnibus Technical Regulation (OTR) Order, 2024.</li>
          </ul>

          <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Type C Standards:</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Described in the Third Schedule of the OTR Order, 2024.</li>
          </ul>

          <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">IS/IEC 60947 Series:</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Cover low voltage switchgear and control gear in multiple parts and sections.</li>
          </ul>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Steps */}
        <section id="steps" className="flex flex-col scroll-mt-20">
          <header className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Steps to Get Certified Under BIS Scheme-X</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </header>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Certification Process Steps
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Issuing BIS Certificate under Scheme-X is a systematic activity meant to ensure the manufacturer has the applicable safety, quality, and compliance standards fulfilled. The process is as follows:
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">1. Verify Scope:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Determine whether your product is in the scope of Scheme-X and if it is with BIS safety requirements. Check the relevant Indian Standards and technical schedule to determine if you will be able to comply.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">2. Prepare The Required Documents:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Manufacturers need to collect and arrange the following documents:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Registered Business certificates</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Basis of design documents</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Factory and Process flow documents</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Service Test Reports (if applicable)</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Quality assurance and Control Documents</li>
          </ul>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">3. Construct the Technical File:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            A technical file is an indispensable part for the claim for extension of a certificate. It should contain:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Technical Specifications of the Product</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Methods and Techniques Information</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Compliance and Test Documents</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Limitation and the Intended purpose of the product</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Quality assurance documentation</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Raw materials traceability, subcontract traceability, and the rest of the evidence.</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Conformance to the standards within the scope framed.</li>
          </ul>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            This file serves as the technical and statistical evidence of the product claim substantiating to safety trace standards.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">4. The Application Form:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The application form can be submitted electronically on the BIS Website for the designated place. Settlement of the application fee is a must. The rest of the documents verifying application should be included for proper assessment.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">5. Factory Inspection:</h2>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">For domestic manufacturers: Inspection is conducted over a period of a maximum of 2 days.</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">For foreign manufacturers: Inspection is conducted over a period of a maximum of 3 days (additional days may accrue due to additional requests).</li>
          </ul>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            During the period of inspection, the BIS officials are expected to:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Analyze the technical file.</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Evaluate the ways of manufacturing along with supporting quality assurance systems.</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Observe the testing of the product.</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Determine non-compliance (if any) and give remedial steps.</li>
          </ul>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            A detailed report of the audit is provided to the applicant after the visit.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">6. Testing of Product Samples:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Sample testing is either carried out at the manufacturers site or at outsourced BIS approved labs (outsource testing is allowed). The testing demonstrates the fulfillment of the relevant Indian standards.
          </p>

          <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">7. Issuance of Certification:</h2>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            If a product meets all the conditions, BIS grants every product a License or a Certificate of Conformity (CoC). The BIS Standard Mark may be used freely by the manufacturer on all certified products. This strategy maintains compliance with BIS Standard and is a recognition of Indian and international compliance, cornering the industry on consumer trust towards safety and quality.
          </p>
        </section>

        {/* Domestic procedure */}
        <section id="domestic-procedure" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Procedure for Domestic Manufacturers</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Procedure for Domestic Manufacturers
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Domestic manufacturers follow a direct approach by obtaining the BIS License under Scheme-X. The direct steps to follow include:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-3">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Documentation:</strong> All documents pertaining to the scheme must be gathered and prepared.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Execution of the Application:</strong> The application is to be presented alongside the relevant fees.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Inquiry on the Application:</strong> any application submitted is subject to scrutiny and a subsequent set of questions is generated by BIS.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Appointing Auditors:</strong> Auditors are appointed by BIS but the nominated individual is subject to the payment of the audit fees.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Factory Audit:</strong> An examination and survey works audit is conducted onsite and relevant samples are collected.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Sample Evaluation:</strong> The samples are evaluated in a BIS-recognized laboratory. The applicant pays all BIS-recognized laboratory testing fees.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Payment of Licencing & Marking Fees:</strong> The requisite payments are accomplished to BIS.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Grant of Licencing:</strong> The certificate granting permission to use the BIS Mark is awarded by BIS.
            </li>
          </ul>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            <strong>Typical Timeline:</strong> Close to 90 working days (as per BIS practice) are needed. This is provided there are no key non-conformities.
          </p>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Foreign procedure */}
        <section id="foreign-procedure" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Procedure For Foreign Manufacturers</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Procedure For Foreign Manufacturers
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Unlike domestic manufacturers, foreign manufacturers applying for a BIS certificate under Scheme-X are required to comply with a more stringent process and additional steps. The procedure is elaborated as follows.
          </p>

          <ol className="list-decimal pl-6 mt-4 space-y-4">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Preparation of Documentation:</strong> Business registered, the product and factory layout, test reports, and the associated quality management documents all must be in the configured folder to comply.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Submission of The Application:</strong> The application, the requisite fee and all application materials be submitted through BIS online portal.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Recording of Application and Scrutiny:</strong> The application is recorded by BIS and a check of the documents is conducted. Any issues that BIS may have must be resolved by the applicant in a timely manner.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Auditor Assignment and Payment:</strong> BIS&apos;s auditors responsible for factory inspections are assigned to the applicant for the audit. The applicant must pay the set fees for the conducted audit, as determined by the applicable legislation.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Audit Preparation:</strong> Foreign manufacturers are responsible for logistical arrangements for the audit such as Visa issuance, air tickets, and hotel reservations for BIS officials are arranged and paid.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Factory Audit & Sample Selection:</strong> BIS officials conduct a factory audit spanning 3 days (more days can be added if more applications are needed).
            </li>
          </ol>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            <strong>The audit comprises:</strong>
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Evaluation of the quality assurance systems and the workflows in the manufacturing processes</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Assessment of the compliance and the technical documentation</li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">Independent testing sample selection</li>
          </ul>

          <ol className="list-decimal pl-6 mt-4 space-y-4" start="7">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Product Testing:</strong> Selected samples are forwarded to a BIS accredited laboratory for testing. In some instances, testing is contracted to other testing laboratories and so the payment is settled through the principal testing laboratory.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Payment of Marking & Licence Fees:</strong> After successful audit and test results, the manufacturer must pay the required marking fee and licence fee to BIS.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Grant of Licence:</strong> BIS issues the Licensed/Certificate of Conformity (CoC) once all conditions have been followed in total. BIS then allows the manufacturer with a used BIS Standard Mark on other certified products, once compliance is confirmed.
            </li>
          </ol>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The entire process takes, based on the practices from BIS, roughly 6-7 months.
          </p>

          <h4 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">Key Additional Pointers for Foreign Manufacturers:</h4>

          <ul className="list-disc pl-6 mt-3 space-y-3">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Classification FMCS:</strong> All foreign manufacturers are classified as &apos;Large Scale&apos; under the Foreign Manufacturers Certification Scheme. This classification is irrespective of the scale of operations being carried out.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Authorized Indian Representative (AIR):</strong> Every foreign manufacturer is required to designate an Authorized Indian Representative (AIR). The AIR is the primary contact point for the foreign applicant and BIS, responsible for compliance, collaboration and the maintenance of the BIS licence.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Factory Audits:</strong> Factory audits for foreign manufacturers are comprehensive and tend to last 3 days. Also, more days are required in the case of multiple product applications being filed.
            </li>
          </ul>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Documents Required */}
        <section id="documents-required" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Key Documents Required for BIS Scheme X Certification</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Key Documents Required for BIS Scheme X Certification
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            To streamline the BIS certification process, manufacturers are required to gather and submit the following documents during the registration phase:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm">
              <thead>
                <tr className="bg-[#4A90E2] text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px]">Sl. No.</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px]">Document Required</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-geist font-semibold text-[16px] md:text-[18px]">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">1.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Name and Address (Factory & Office)</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Full legal name and physical addresses of the manufacturing site and office</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">2.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">PAN and GST Information</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Permanent Account Number (PAN) and GST registration details</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">3.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Contact Details</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Email address, mobile number, and landline for official communications</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">4.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Management Details</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Names, roles, and IDs of key executives and authorized signatory</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">5.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Product Description</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Details of machinery and equipment covered under the First Schedule of the Omnibus Technical Regulation</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">6.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Product Classification</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Specific type, model, and variety for which BIS license is being requested</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">7.</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">Technical file</td>
                  <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px]">All the technical details related to the product and details about the manufacturing unit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Validity & Renewal */}
        <section id="validity-renewal" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Validity and Renewal Process of Scheme-X Certificate</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Validity and Renewal Process of Scheme-X Certificate
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-4">
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Licence Validity and Renewal:</strong> BIS Licences under Scheme-X are issued for a period of 3 to 6 years for continuous production. Once the period has expired, the licence can be renewed for the same duration by the submission of a renewal application, the required fee, and compliance documents.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Certificate of Conformity (CoC):</strong> A CoC is issued for One time production, and is applicable for domestic as well as overseas manufacturers. Since it applies only to a single batch, a CoC has no renewal option.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Report of Product Tests:</strong> When test reports are prepared in the laboratory of the manufacturer, the BIS officials verify them during the factory inspection by conducting witness testing. If testing is done at subcontracted facilities, those facilities are also inspected and approved by BIS.
            </li>
            <li className="font-geist text-sm md:text-lg text-[#42434d]">
              <strong>Review of Application for Renewal:</strong> For uninterrupted validity, a manufacturer is required to continue to comply with the Scheme-X provisions. As per Regulation 8 of the BIS Conformity Assessment Regulations, the Bureau of Indian Standards processes the application for renewal in form VIII. Renewal is done only after satisfactory compliance is verified.
            </li>
          </ul>
        </section>

        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        {/* Conclusion */}
        <section id="conclusion" className="flex flex-col scroll-mt-20">
          <div className="flex w-full items-center gap-3 mt-2">
            <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Conclusion</span>
            <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
          </div>

          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Conclusion
          </h2>

          <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The BIS Scheme-X Certification remains vital in upholding the safety, reliability, and quality of Low-voltage switchgear and control gear, Machinery and electrical equipment. For the manufacturers of machine tools applicable to processing stone, ceramics, concrete, asphantic cement and mineral glass, BIS Scheme-X certification is compulsory.
          </p>

          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            By fulfilling these obligations, manufacturers guarantee product conformity, enhance consumer confidence, as well as improve their credibility on the market. Scheme-X makes sure the production is as smooth as possible, safety standards around the world are met, and the recognized brands gain a positive reputation.
          </p>

          <AboutAuthor />
        </section>
      </div>
    </article>
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

// Additional Table Components based on reference code patterns

export const StandardsTable = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <div className="mt-[16px] md:mt-[24px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316]">
          Indian Standards for Scheme X
        </h3>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/pdf/schemeXstandards.pdf";
            link.download = "SchemeXstandards.pdf";
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
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
          Download Standards
        </button>
      </div>

      <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
        <TableHeader className="bg-[#F9F7F2]">
          <TableRow className="bg-[#1A8781]/10">
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
              S.No.
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
              IS Number
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
              Title
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {productDataTableSecond.map((row, index) => (
            <TableRow key={row.id} className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                {row.id}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                {row.isNumber}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {row.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const HsCodeTable = () => {
  const { t } = useTranslation("SchemeX");

  return (
    <div className="mt-[16px] md:mt-[24px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316]">
          HS Codes and Indian Standards
        </h3>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/pdf/schemeXhscodes.pdf";
            link.download = "SchemeXhscodes.pdf";
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
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
          Download HS Codes
        </button>
      </div>

      <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
        <TableHeader className="bg-[#F9F7F2]">
          <TableRow className="bg-[#1A8781]/10">
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
              S.No.
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
              Description
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
              HS Code
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
              Indian Standard
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {productDataTableThird.map((row, index) => (
            <TableRow key={row.id} className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                {row.id}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {row.description}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-mono text-xs">
                {row.hsCode}
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                {row.indianStandard}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
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
            <h1 className="relative">
              BIS Scheme X Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </h1>{" "}
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Scheme X Certification covers Machinery, Electrical Equipment, and Components Assemblies, and Sub-assemblies under the Omnibus Technical Regulation (OTR).
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

        {/* <div ref={table1Ref} className="rounded-md border bg-white shadow-sm">
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
                <TableRow key={index} className="hover:bg-gray-50">
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
        </div> */}
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
  const tableRef = useRef(null);

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
      // Scroll to table top
      setTimeout(() => {
        tableRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to table top
      setTimeout(() => {
        tableRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div ref={tableRef} className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist text-sm md:text-lg text-[#42434d] font-bold tracking-wide text-left max-w-full leading-none mb-6">
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
        <div className="flex justify-center items-center mt-6">
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
      <p className="font-geist text-sm md:text-lg text-[#42434d] font-bold tracking-wide text-left max-w-full leading-none mb-6">
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
/* const downloadTableData = () => {
  // Create a link element to download the PDF
  const link = document.createElement("a");
  link.href = "/pdf/schemeXproduct.pdf"; // Path to your PDF in public/pdf folder
  link.download = "SchemeXproduct.pdf"; // File name for download

  link.target = "_blank"; // Open in new tab if direct download fails

  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; */