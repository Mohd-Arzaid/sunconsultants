import { useState, useRef } from "react";
import { Search } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import ServiceContactForm from "@/common/ServiceContactForm";
import { BISFMContentLeft, BISFMIndex, ServiceFaq } from "@/components/manual/BISFM";
import CDSCOContentRight from "@/components/manual/CDSCOContentRight";
import Services from "../components/manual/Services";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import AboutAuthor from "../components/common/AboutAuthor";

const productsData = [
    {
        id: 1,
        description: "All types of Pumps for handling liquids, liquid elevators and (or)their assemblies /sub-assemblies /components",
        hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392"
    },
    {
        id: 2,
        description: "All types of compressors and(or)their assemblies /sub-assemblies /components.",
        hsCode: "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090"
    },
    {
        id: 3,
        description: "All types of machinery for treatment of material by a process involving a change of temperature and(or)their assemblies /sub-assemblies /components",
        hsCode: "841932, 841939,841940, 841950, 841960,841981, 841989 and 84199090"
    },
    {
        id: 4,
        description: "All types of centrifuges, filtering or purifying machinery for liquid and gas and(or)their assemblies /sub-assemblies /components",
        hsCode: "842111, 842112, 842119, 84212110, 84212190, 842122, 842129, 842131, 842139, 842191 and 842199"
    },
    {
        id: 5,
        description: "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping and(or)their assemblies/sub-assemblies/components",
        hsCode: "842220, 842230, 842240 and 842290"
    },
    {
        id: 6,
        description: "All types of cranes and (or) their assemblies /sub-assemblies/components",
        hsCode: "842611, 842612,842619, 842620, 842630,842641, 842649, 842691 and 84269990"
    },
    {
        id: 7,
        description: "All types of machinery for construction, earthmoving, Mining and (or)their assemblies /sub-assemblies/components",
        hsCode: "8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050, 843141, 843142, 843143 and 843149"
    },
    {
        id: 8,
        description: "All types of weaving machines (looms) and (or)their assemblies/ sub-assemblies / components.",
        hsCode: "8446, 844811, 844819, 844842 and 844849"
    },
    {
        id: 9,
        description: "All types of machinery for making embroidery and(or)their assemblies /sub-assemblies /components.",
        hsCode: "84479020 and 844859"
    },
    {
        id: 10,
        description: "All types of metal cutting machines",
        hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
        indianStandard: "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
        title: "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements"
    },
    {
        id: 11,
        description: "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
        hsCode: "8464 and 84669100",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 12,
        description: "All types of machinery for working rubber and plastics",
        hsCode: "8477",
        indianStandard: "IS/ISO 20430: 2020",
        title: "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements"
    },
    {
        id: 13,
        description: "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
        hsCode: "84791000, 84798999 and 84799090",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 14,
        description: "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
        hsCode: "84834000 and 84839000",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 15,
        description: "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
        hsCode: "8501 and 8503",
        indianStandard: "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
        title: "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa"
    },
    {
        id: 16,
        description: "All types of Diesel Generator",
        hsCode: "8502 and 8503",
        indianStandard: "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
        title: "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety"
    },
    {
        id: 17,
        description: "All types of Transformers and (or)their assemblies /sub-assemblies /components.",
        hsCode: "850421, 850422,850423, 850431, 850432,850433, 850434 and 850490."
    },
    {
        id: 18,
        description: "All types of Power Semiconductor Converter and (or)their assemblies /sub-assemblies /components.",
        hsCode: "850440"
    },
    {
        id: 19,
        description: "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts*(%4)and (or)their assemblies /sub-assemblies /components",
        hsCode: "8536, 8537 and 8538"
    },
    {
        id: 20,
        description: "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
        hsCode: "8535, 8537 and 8538"
    }
];

const productDataTableSecond = [
    {
        id: 1,
        isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
        title: "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements"
    },
    {
        id: 2,
        isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
        title: "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV"
    },
    {
        id: 3,
        isNumber: "IS/IEC 61508 (Part 1): 2010",
        title: "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements"
    },
    {
        id: 4,
        isNumber: "IS/IEC 60529 : 2001",
        title: "Degree of Protection Provided by Enclosures (IP Code)"
    },
    {
        id: 5,
        isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods"
    },
    {
        id: 6,
        isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
        title: "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant"
    },
    {
        id: 7,
        isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant"
    },
    {
        id: 8,
        isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system"
    },
    {
        id: 9,
        isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet"
    },
    {
        id: 10,
        isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet"
    },
    {
        id: 11,
        isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter"
    },
    {
        id: 12,
        isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter"
    },
    {
        id: 13,
        isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
        title: "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index"
    },
    {
        id: 14,
        isNumber: "IS 10481:2020/ ISO 4413:2010",
        title: "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components"
    },
    {
        id: 15,
        isNumber: "IS 12725:2021/ ISO 4414:2010",
        title: "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components"
    },
    {
        id: 16,
        isNumber: "IS ISO 3457 : 2003",
        title: "Earth Moving Machinery - Guards - Definitions and Requirements"
    },
    {
        id: 17,
        isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
        title: "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems"
    },
    {
        id: 18,
        isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
        title: "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs"
    },
    {
        id: 19,
        isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
        title: "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators"
    },
    {
        id: 20,
        isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
        title: "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines"
    },
    {
        id: 21,
        isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
        title: "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals"
    },
    {
        id: 22,
        isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
        title: "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests"
    },
    {
        id: 23,
        isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
        title: "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications"
    },
    {
        id: 24,
        isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
        title: "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking"
    },
    {
        id: 25,
        isNumber: "IS 16807: 2020/",
        title: "Safety of Machinery Fire Prevention and Fire Protection"
    },
    {
        id: 26,
        isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
        title: "Safety of Machinery Hygiene Requirements for the Design of Machinery"
    },
    {
        id: 27,
        isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
        title: "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access"
    },
    {
        id: 28,
        isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
        title: "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways"
    },
    {
        id: 29,
        isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
        title: "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails"
    },
    {
        id: 30,
        isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
        title: "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders"
    },
    {
        id: 31,
        isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
        title: "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design"
    },
    {
        id: 32,
        isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
        title: "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation"
    },
    {
        id: 33,
        isNumber: "IS 16811: 2018/ 14120 : 2015",
        title: "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards"
    },
    {
        id: 34,
        isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
        title: "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection"
    },
    {
        id: 35,
        isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
        title: "Safety of Machinery Prevention of Unexpected Start-Up"
    },
    {
        id: 36,
        isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
        title: "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs"
    },
    {
        id: 37,
        isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
        title: "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body"
    },
    {
        id: 38,
        isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
        title: "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body"
    },
    {
        id: 39,
        isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
        title: "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection"
    },
    {
        id: 40,
        isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
        title: "Safety of Machinery Emergency Stop Function Principles for Design"
    },
    {
        id: 41,
        isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
        title: "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements"
    },
    {
        id: 42,
        isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
        title: "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers"
    },
    {
        id: 43,
        isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
        title: "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures"
    },
    {
        id: 44,
        isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
        title: "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors"
    },
    {
        id: 45,
        isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
        title: "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars"
    },
    {
        id: 46,
        isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
        title: "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices."
    },
    {
        id: 47,
        isNumber: "IS 16569: 2018/ ISO 11429:1996",
        title: "Ergonomics- System of Auditory and Visual Danger and Information Signals"
    },
    {
        id: 48,
        isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
        title: "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays"
    },
    {
        id: 49,
        isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
        title: "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators"
    },
    {
        id: 50,
        isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
        title: "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery"
    },
    {
        id: 51,
        isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
        title: "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements"
    },
    {
        id: 52,
        isNumber: "IS 16569:2018/ ISO 11429: 1996",
        title: "Ergonomics - System of auditory and visual danger and information signals"
    },
    {
        id: 53,
        isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
        title: "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements"
    }
];

const productDataTableThird = [
    {
        id: 1,
        description: "All types of Pumps for handling liquids, liquid elevators",
        hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 2,
        description: "All types of compressors",
        hsCode: "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
        indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
        title: "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications"
    },
    {
        id: 3,
        description: "All types of machinery for Treatment of material by a process involving a Change of temperature",
        hsCode: "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 4,
        description: "or purifying machinery for liquid and gas",
        hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 5,
        description: "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping",
        hsCode: "842220, 842230, 842240 and 842290",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 6,
        description: "All types of cranes",
        hsCode: "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
        indianStandard: "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
        title: "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes"
    },
    {
        id: 7,
        description: "All types of machinery for construction",
        hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
        indianStandard: "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
        title: "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers"
    },
    {
        id: 8,
        description: "All types of weaving machines (looms)",
        hsCode: "8446, 844811, 844819, 844842 and 844849",
        indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
        title: "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery"
    },
    {
        id: 9,
        description: "All types of machinery for making embroidery.",
        hsCode: "84479020 and 844859",
        indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
        title: "Textile Machiner Safety Requirements Part 1 Common Requirements"
    },
    {
        id: 10,
        description: "All types of metal cutting machines",
        hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
        indianStandard: "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
        title: "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements"
    },
    {
        id: 11,
        description: "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
        hsCode: "8464 and 84669100",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 12,
        description: "All types of machinery for working rubber and plastics",
        hsCode: "8477",
        indianStandard: "IS/ISO 20430: 2020",
        title: "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements"
    },
    {
        id: 13,
        description: "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
        hsCode: "84791000, 84798999 and 84799090",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 14,
        description: "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
        hsCode: "84834000 and 84839000",
        indianStandard: "-",
        title: "-"
    },
    {
        id: 15,
        description: "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
        hsCode: "8501 and 8503",
        indianStandard: "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
        title: "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa"
    },
    {
        id: 16,
        description: "All types of Diesel Generator",
        hsCode: "8502 and 8503",
        indianStandard: "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
        title: "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety"
    },
    {
        id: 17,
        description: "All types of Transformer",
        hsCode: "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
        indianStandard: "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
        title: "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors"
    },
    {
        id: 18,
        description: "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
        hsCode: "8536, 8537 and 8538",
        indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
        title: "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)"
    },
    {
        id: 19,
        description: "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
        hsCode: "8535, 8537 and 8538",
        indianStandard: "-",
        title: "-"
    }
];

export const SchemeX = () => {

    return (
        <div className="w-full h-screen">

            <SchemeXHero />
            <BISFMIndex />
            <SchemeXContent />
            <Footer />
            <ScrollToTopButton />

        </div>
    );
};


const SchemeXContent = () => {
    return (
        <section className="" aria-label="BIS FMCS Certification Content">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <BISFMContentLeft />
                    {/* Right Side */}
                    <CDSCOContentRight />
                </div>
            </div>
            <ServiceFaq />
            <SchemeXTables />
            <div id="services">
                <Services />
            </div>
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <AboutAuthor />
            </div>
        </section>
    )
}
const SchemeXHero = () => {
    return (
        <section className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]" aria-label="BIS FMCS Certification Hero">

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
                            Scheme X
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>{" "}

                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        Under Scheme X, foreign manufacturers must obtain approval to export to India. The scheme covers over 600 mandatory and 20,000+ voluntary products.

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
                                View Services
                            </span>
                        </div>
                    </nav>
                </article>



                {/* Right Side */}
                <ServiceContactForm />


            </div>
        </section>
    )
}

const SchemeXTables = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const table1Ref = useRef(null);
    const table2Ref = useRef(null);
    const table3Ref = useRef(null);

    const scrollToTable = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const filteredProducts = productsData.filter(
        (product) =>
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.hsCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full pb-12 borde">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                {/* Navigation Buttons */}
                <div className="flex gap-6 mb-12 justify-center items-center">
                    <button
                        onClick={() => scrollToTable(table1Ref)}
                        className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Product Table A
                    </button>
                    <button
                        onClick={() => scrollToTable(table2Ref)}
                        className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Product Table B
                    </button>
                    <button
                        onClick={() => scrollToTable(table3Ref)}
                        className="px-6 py-3 bg-[#1A8781] text-white rounded-lg font-geist text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Product Table C
                    </button>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                    <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
                        Ministry of Heavy Industries Order
                    </h2>

                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
                        List of Machinery and Electrical Equipment covered under this Order:
                    </p>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by description or HS code..."
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
                                    S.No
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                    Description of Machinery and Electrical Equipment
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    HS Code
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProducts.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
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
    )
}

const TypeBTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productDataTableSecond.slice(indexOfFirstItem, indexOfLastItem);

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
                TYPE B (Generic Safety Standards dealing with one safety aspect or more than one type of safeguard that can be used across a wide range of machinery)
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
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">{item.id}</TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">{item.isNumber}</TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">{item.title}</TableCell>
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
                TYPE C (Machine Safety Standards dealing with detailed safety requirements for a particular machine or group of machines)
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
                                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">{item.id}</TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">{item.description}</TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">{item.hsCode}</TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                    {item.indianStandard.split('\n').map((line, idx) => (
                                        <div key={idx}>{line}</div>
                                    ))}
                                </TableCell>
                                <TableCell className="font-geist text-base md:text-lg text-left">
                                    {item.title.split('\n').map((line, idx) => (
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

export default SchemeX;
