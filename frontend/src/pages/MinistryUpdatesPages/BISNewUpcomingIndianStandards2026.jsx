import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, SlashIcon } from "lucide-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const BISNewUpcomingIndianStandards2026 = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default BISNewUpcomingIndianStandards2026;

const departmentSummaryData = [
  { sno: 1, department: "Ayush Department (AYD)", total: 45 },
  { sno: 2, department: "Civil Engineering Department (CED)", total: 9 },
  { sno: 3, department: "Chemical Department (CHD)", total: 64 },
  { sno: 4, department: "Environment and Ecology Department (EED)", total: 30 },
  { sno: 5, department: "Electrotechnical Department (ETD)", total: 71 },
  { sno: 6, department: "Food and Agriculture Department (FAD)", total: 42 },
  {
    sno: 7,
    department: "Electronics and Information Technology Department (LITD)",
    total: 97,
  },
  { sno: 8, department: "Mechanical Engineering Department (MED)", total: 62 },
  {
    sno: 9,
    department: "Medical Equipment and Hospital Planning Department (MHD)",
    total: 129,
  },
  { sno: 10, department: "Management and Systems Department (MSD)", total: 36 },
  {
    sno: 11,
    department: "Metallurgical Engineering Department (MTD)",
    total: 23,
  },
  {
    sno: 12,
    department: "Petroleum, Coal and Related Products Department (PCD)",
    total: 73,
  },
  {
    sno: 13,
    department: "Production and General Engineering Department (PGD)",
    total: 41,
  },
  { sno: 14, department: "Service Sector Department (SSD)", total: 24 },
  { sno: 15, department: "Transport Engineering Department (TED)", total: 31 },
  { sno: 16, department: "Textiles Department (TXD)", total: 47 },
  { sno: 17, department: "Water Resources Department (WRD)", total: 3 },
];

const STANDARDS_TABLE_INITIAL_VISIBLE_ROWS = 5;

const ayushDepartmentStandardsData = [
  { sno: 1, isNumber: "IS 19230:2025", isTitle: "Ksharasutra - Methods of test" },
  {
    sno: 2,
    isNumber: "IS 19231:2025",
    isTitle:
      "Ayurveda Glossary of Terms Standardized Terminology for Preventive and Promotive Health",
  },
  { sno: 3, isNumber: "IS 19356:2025", isTitle: "Ksharasutra Cabinet Specification" },
  {
    sno: 4,
    isNumber: "IS 19467:2026",
    isTitle:
      "Herbal Raw Materials for use in Traditional Medicine - Methods of Test",
  },
  { sno: 5, isNumber: "IS 19769:2026", isTitle: "Tarpana Code of Practice" },
  { sno: 6, isNumber: "IS 19768:2026", isTitle: "Agnikarma Code of Practice" },
  {
    sno: 7,
    isNumber: "IS 19340:2025",
    isTitle: "Naturopathy Leg Massage Therapy- Code of Practice",
  },
  {
    sno: 8,
    isNumber: "IS 19341:2025",
    isTitle: "Naturopathy Head Massage Therapy- Code of Practice",
  },
  {
    sno: 9,
    isNumber: "IS 19693:2026",
    isTitle: "Full Immersion Bath Therapy —Code Of Practice",
  },
  {
    sno: 10,
    isNumber: "IS 19669:2026",
    isTitle: "Enema Procedure - Code of Practice",
  },
  {
    sno: 11,
    isNumber: "IS 19686:2026",
    isTitle: "Full Mud Bath Therapy -Code of Practice",
  },
  {
    sno: 12,
    isNumber: "IS 19729:2026",
    isTitle: "Naturopathy Therapeutic Fasting — Code of Practice",
  },
  {
    sno: 13,
    isNumber: "IS 19630:2026",
    isTitle: "Naturopathy Back Massage Therapy — Code of Practice",
  },
  {
    sno: 14,
    isNumber: "IS 19760:2026",
    isTitle: "Polypropylene Enema Can - Specification",
  },
  {
    sno: 15,
    isNumber: "IS 19346:2025",
    isTitle: "Hajima (Cupping therapy) Code of Practice",
  },
  {
    sno: 16,
    isNumber: "IS 19355:2025",
    isTitle: "UNANI MEDICINE GLASS CUP (CUPPING THERAPY) DEVICE",
  },
  {
    sno: 17,
    isNumber: "IS 18750 (Part 8/Sec 1):2025",
    isTitle:
      "Unani medicine Glossary of Terms Part 8Sec 1 Standardized Terminology Used for Diseases of Upper Gastrointestinal Tract Oesophagus and Stomach",
  },
  {
    sno: 18,
    isNumber: "IS 18750 (Part 8/Sec 2):2025",
    isTitle:
      "Unani Medicine Glossary of Terms Part 8Sec 2 Standardized Terminology Used for Diseases of Liver Spleen and Pancreas",
  },
  {
    sno: 19,
    isNumber: "IS 19442:2026",
    isTitle: "Unani medicine Air extraction Hijama Cupping Device",
  },
  {
    sno: 20,
    isNumber: "IS 19485:2026",
    isTitle:
      "Bkh-i-Sahajana Moringa oleifera Lam Root Bark for use in Traditional Medicine Specification",
  },
  {
    sno: 21,
    isNumber: "IS 18750 (Part 8/Sec 3):2026",
    isTitle:
      "Unani medicine — Glossary of Terms, Part 8/Sec 3 Standardized Terminology used for Diseases of Lower Gastro-intestinal Tract (Intestine, Mesentery and other parts)",
  },
  {
    sno: 22,
    isNumber: "IS 19470:2026",
    isTitle:
      "Gul-I-Guhal Hibiscus rosa-sinensis L dried flowers for use in Traditional Medicine Specification",
  },
  {
    sno: 23,
    isNumber: "IS 19518:2026",
    isTitle:
      "Papta Desi Carica papaya L dried pericarp of fruits for use in Traditional Medicine Specification",
  },
  {
    sno: 24,
    isNumber: "IS 19511:2026",
    isTitle:
      "Ushba Smilax aristolociaefolia Mill dried root for use in Traditional Medicine Specification",
  },
  {
    sno: 25,
    isNumber: "IS 19310:2025",
    isTitle: "Neykkuṭi (Oleo-Uromacroscopy) Analysis – Code of Practice",
  },
  {
    sno: 26,
    isNumber: "IS 19325:2025",
    isTitle:
      "Taxus wallichiana Zucc leaf for use in Traditional Medicine - Specification",
  },
  {
    sno: 27,
    isNumber: "IS 19047 (Part 7):2025",
    isTitle:
      "Siddha Glossary of Terms Part 7 - Standardized Terminology on Fundamental Principles of Varmam",
  },
  {
    sno: 28,
    isNumber: "IS 19324:2025",
    isTitle:
      "Clerodendrum serratum (L.) Moon - Root for use in Traditional Medicine Specification",
  },
  {
    sno: 29,
    isNumber: "IS 19368:2025",
    isTitle: "Nārkkuṭi analysis (Uromacroscopy) – Code of Practice",
  },
  {
    sno: 30,
    isNumber: "IS 19371:2025",
    isTitle:
      "Mucuna pruriens L DC Seed for Use in Traditional Medicine Specification",
  },
  {
    sno: 31,
    isNumber: "IS 19047 (Part 4):2025",
    isTitle:
      "Siddha Glossary of Terms Part - 4 Standardized Terminology for Food",
  },
  {
    sno: 32,
    isNumber: "IS 19466:2026",
    isTitle:
      "Cinnamomum tamala Buch - Ham Nees Eberm Leaf for Use in Traditional Medicine Specification",
  },
  {
    sno: 33,
    isNumber: "IS 19460:2026",
    isTitle:
      "Ficus racemosa L Stem Bark for Use in Traditional Medicine Specification",
  },
  {
    sno: 34,
    isNumber: "IS 19253:2025",
    isTitle:
      "Inula racemosa Hook f Root for use in Traditional Medicine Specification",
  },
  {
    sno: 35,
    isNumber: "IS 19326:2025",
    isTitle:
      "Janosia ashoka Hydro-alcoholic Extract for Use in Homoeopathy Specification",
  },
  {
    sno: 36,
    isNumber: "IS 19327 (Part 1):2025",
    isTitle:
      "METHODS OF PREPARATION OF HOMOEOPATHIC MOTHER TINCTURES - Part 1 MACERATION",
  },
  {
    sno: 37,
    isNumber: "IS 19311:2025",
    isTitle: "Standard Abbreviations of Homoeopathic Drugs",
  },
  {
    sno: 38,
    isNumber: "IS 19344:2025",
    isTitle:
      "PILOCARPUS JABORANDI HOLMES LEAVES FOR USE IN TRADITIONAL MEDICINE -SPECIFICATION",
  },
  {
    sno: 39,
    isNumber: "IS 19350:2025",
    isTitle:
      "Jaborandi Hydro-alcoholic Extract for Use in Homoeopathy Specification",
  },
  {
    sno: 40,
    isNumber: "IS 19351:2025",
    isTitle:
      "Digitalis purpurea Hydro-alcoholic Extract for Use in Homoeopathy Specification",
  },
  {
    sno: 41,
    isNumber: "IS 19343:2025",
    isTitle:
      "DIGITALIS PURPUREA L LEAVES FOR USE IN TRADITIONAL MEDICINE - SPECIFICATION",
  },
  {
    sno: 42,
    isNumber: "IS 19400:2025",
    isTitle:
      "HOLARRHENA ANTIDYSENTERICA HYDRO-ALCOHOLIC EXTRACT FOR USE IN HOMOEOPATHY- SPECIFICATION",
  },
  {
    sno: 43,
    isNumber: "IS 19327 (Part 2):2025",
    isTitle:
      "METHODS OF PREPARATION OF HOMOEOPATHIC MOTHER TINCTURES Part 2 PERCOLATION",
  },
  {
    sno: 44,
    isNumber: "IS 19415:2025",
    isTitle: "Sugar of Milk for use in Homoeopathy - Specification",
  },
  {
    sno: 45,
    isNumber: "IS 19509:2026",
    isTitle:
      "Justicia adhatoda Hydro-alcoholic Extract for Use in Homoeopathy Specification",
  },
];

const civilEngineeringDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19315:2025",
    isTitle: "Ball Valves for Water Works Purposes - Specification",
  },
  {
    sno: 2,
    isNumber: "IS 19752 (Part 1):2026",
    isTitle:
      "Floor and Wall tiling — Guidelines : Part 1 Characteristics and Requirements of tile and Stone Laying Materials and Design Data",
  },
  {
    sno: 3,
    isNumber: "IS 19752 (Part 2):2026",
    isTitle:
      "Floor and Wall tiling — Guidelines : Part 2 Installation Inspection and Maintenance of Tile and Stone Systems",
  },
  {
    sno: 4,
    isNumber: "IS 14223 (Part 2):2025",
    isTitle:
      "Polished Building Stones –– Specification Part 2 Marble and Similar Stones",
  },
  {
    sno: 5,
    isNumber: "IS 19267:2025",
    isTitle: "Oriented Strand Boards Specification",
  },
  {
    sno: 6,
    isNumber: "IS 19452:2026",
    isTitle:
      "Design Installation Testing and Maintenance of Condensed Aerosol Fire Extinguishing System - Code of Practice",
  },
  {
    sno: 7,
    isNumber: "IS 19339:2025",
    isTitle: "Numerical Modelling in Rock Engineering - Guidelines",
  },
  {
    sno: 8,
    isNumber: "IS 19068:2025",
    isTitle:
      "Continuous hot-dip galvanized steel bars for concrete reinforcement - Specification",
  },
  {
    sno: 9,
    isNumber: "IS 14458 (Part 9):2025",
    isTitle:
      "Retaining Wall for Hill Areas Guidelines: Part 9 Construction of Reinforced Cement Concrete (RCC) Crib Wall",
  },
];

const chemicalDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19300:2025",
    isTitle:
      "Electrolyte Formulations for Energy Storage Technologies - Specification",
  },
  {
    sno: 2,
    isNumber: "IS 19364:2025",
    isTitle: "Lithium Hexafluorophosphate - Specification",
  },
  {
    sno: 3,
    isNumber: "IS 19358:2025",
    isTitle:
      "NBC Canister - Method of Test - Breakthrough Test for Sulphur Mustard Vapor (BTTSM)",
  },
  {
    sno: 4,
    isNumber: "IS 19561:2026",
    isTitle: "Sodium Cyanide — Code of Safety",
  },
  {
    sno: 5,
    isNumber: "IS 19508:2026",
    isTitle: "Selection of PPE for Waste Handling — Guidelines",
  },
  {
    sno: 6,
    isNumber: "IS 17274 (Part 4):2025",
    isTitle:
      "Respiratory Protective Devices — Methods of Test and Test Equipment Part 4 Determination of gas filter capacity and migration, desorption and carbon monoxide dynamic testing",
  },
  {
    sno: 7,
    isNumber: "IS 19420:2026",
    isTitle:
      "Personal Protective Equipment — Test Methods for Sunglasses and Related Eyewear",
  },
  {
    sno: 8,
    isNumber: "IS 19517 (Part 1):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 1 Sunglasses for General Use",
  },
  {
    sno: 9,
    isNumber: "IS 19522:2025",
    isTitle:
      "Safety Harness for Child to be Carried on Two Wheelers Specifications",
  },
  {
    sno: 10,
    isNumber: "IS 17274 (Part 14):2026",
    isTitle:
      "Respiratory Protective Devices — Methods of Test and Test Equipment Part 14 Measurement of Sound Pressure Level",
  },
  {
    sno: 11,
    isNumber: "IS 19517 (Part 3):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 3 Sunglasses for Running, Cycling and Similar Active Lifestyles",
  },
  {
    sno: 12,
    isNumber: "IS 19517 (Part 2):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 2 Filters for Direct Observation of the Sun",
  },
  {
    sno: 13,
    isNumber: "IS 19348:2025",
    isTitle: "GLASS SCREEN PROTECTOR - SPECIFICATION",
  },
  {
    sno: 14,
    isNumber: "IS 19328:2025",
    isTitle: "FIRE RESISTANT GLASS SPECIFICATION",
  },
  {
    sno: 15,
    isNumber: "IS 19331:2025",
    isTitle: "TINTED FLOAT GLASS - SPECIFICATION",
  },
  {
    sno: 16,
    isNumber: "IS 19360:2026",
    isTitle: "Coated Glass - Specification",
  },
  {
    sno: 17,
    isNumber: "IS 14661 (Part 3/Sec 5):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 5 Determination of Optical Properties — Measurement of Brightness and Colour with D65/10° (Outdoor Daylight)",
  },
  {
    sno: 18,
    isNumber: "IS 14661 (Part 1):2025",
    isTitle: "Tissue paper and tissue products Part 1 Vocabulary",
  },
  {
    sno: 19,
    isNumber: "IS 14661 (Part 3/Sec 1):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 1 Determination of thickness bulking thickness and apparent bulk density and bulk",
  },
  {
    sno: 20,
    isNumber: "IS 14661 (Part 3/Sec 2):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 2 Determination of tensile strength, stretch at maximum force and tensile energy absorption",
  },
  {
    sno: 21,
    isNumber: "IS 14661 (Part 3/Sec 3):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 3 Determination of wet tensile strength",
  },
  {
    sno: 22,
    isNumber: "IS 14661 (Part 3/Sec 4):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 4 Determination of Grammage",
  },
  {
    sno: 23,
    isNumber: "IS 14661 (Part 3/Sec 7):2025",
    isTitle:
      "Tissue paper and tissue products Methods of test Part 7 Determination of disintegration in water",
  },
  {
    sno: 24,
    isNumber: "IS 14661 (Part 3/Sec 6):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 6 Water-Absorption Time and Water-Absorption Capacity, Basket-Immersion Test Method",
  },
  {
    sno: 25,
    isNumber: "IS 19378:2025",
    isTitle:
      "Base Paper for Sublimation Coating and Sublimation Coated Paper Specification",
  },
  {
    sno: 26,
    isNumber: "IS 1060 (Part 5/Sec 22):2026",
    isTitle:
      "Method of Sampling and Test for Paper and Allied Products Part 5 Method of Test for Paper and Board Section 22 Determination of roughness smoothness Air leak methods - Oken method",
  },
  {
    sno: 27,
    isNumber: "IS 19655 (Part 2):2026",
    isTitle:
      "Handmade Paper Board for File Covers and Folders — Specification",
  },
  {
    sno: 28,
    isNumber: "IS 19655 (Part 1):2026",
    isTitle: "Handmade Paper for Carry Bags Specification",
  },
  {
    sno: 29,
    isNumber: "IS 19655 (Part 3):2026",
    isTitle: "Handmade Paper for Packaging Specification",
  },
  {
    sno: 30,
    isNumber: "IS 19655 (Part 4):2026",
    isTitle: "Handmade Paper for Envelopes Specification",
  },
  {
    sno: 31,
    isNumber: "IS 19655:2026",
    isTitle: "Handmade Paper for Writing Specification",
  },
  {
    sno: 32,
    isNumber: "IS 19534:2025",
    isTitle:
      "Paper and board Determination of resistance to water penetration",
  },
  {
    sno: 33,
    isNumber: "IS 19530:2025",
    isTitle:
      "Paper and board Determination of compressive strength Ring crush method",
  },
  {
    sno: 34,
    isNumber: "IS 19527 (Part 1):2025",
    isTitle:
      "Paper and board Determination of grease resistance Part 1: Permeability test",
  },
  {
    sno: 35,
    isNumber: "IS 19527 (Part 3):2026",
    isTitle:
      "Paper and board Determination of grease resistance Part 3: Turpentine test for voids in glassine and greaseproof papers",
  },
  {
    sno: 36,
    isNumber: "IS 19531:2026",
    isTitle:
      "Paper and board Determination of bending stiffness Resonance method",
  },
  {
    sno: 37,
    isNumber: "IS 19527 (Part 2):2026",
    isTitle:
      "Paper and board Determination of grease resistance Part 2: Surface repellency test",
  },
  {
    sno: 38,
    isNumber: "IS 19533:2026",
    isTitle:
      "Paper and board Determination of bending stiffness General principles for two-point three-point and four-point methods",
  },
  {
    sno: 39,
    isNumber: "IS 19627:2026",
    isTitle:
      "Footwear Critical Substances Potentially Present in Footwear and Footwear Components Test Method to Quantitatively Determine Dimethylformamide in Footwear Materials",
  },
  {
    sno: 40,
    isNumber: "IS 19628:2026",
    isTitle:
      "Footwear Critical Substances Potentially Present in Footwear and Footwear Components Test Method to Quantitatively Determine Polycyclic Aromatic Hydrocarbons PAHs in Footwear Materials",
  },
  {
    sno: 41,
    isNumber: "IS 19229:2025",
    isTitle: "SHOCK TUBE DETONATORS SPECIFICATION",
  },
  {
    sno: 42,
    isNumber: "IS 19304:2025",
    isTitle: "Flexible Aerogel blanket - Specification",
  },
  {
    sno: 43,
    isNumber: "IS 19306:2025",
    isTitle:
      "Fire Performance for Thermal Insulation Materials to be Used in Building Equipments or Building Structures - Method of Test",
  },
  {
    sno: 44,
    isNumber: "IS 19389:2025",
    isTitle:
      "Monitoring Radioactive Gases in Effluents from Facilities Producing Positron Emitting Radionuclides and Radiopharmaceuticals",
  },
  {
    sno: 45,
    isNumber: "IS 19390:2025",
    isTitle:
      "Guidance for Gamma Spectrometry Measurement of Radioactive Waste",
  },
  {
    sno: 46,
    isNumber: "IS 19392:2025",
    isTitle:
      "Measurement of radioactivity - Gamma ray and beta emitting radionuclides - Test method to assess the ease of decontamination of surface materials",
  },
  {
    sno: 47,
    isNumber: "IS 18066 (Part 4):2026",
    isTitle:
      "Measurement of Radioactivity in the Environment - Air Radon-222 Part 4 Integrated Measurement Method for Determining Average Activity Concentration Using Passive Sampling and Delayed Analysis",
  },
  {
    sno: 48,
    isNumber: "IS 18066 (Part 6):2026",
    isTitle:
      "Measurement of Radioactivity in the Environment - Air Radon-222 Part 6 Spot Measurement Methods of the Activity Concentration",
  },
  {
    sno: 49,
    isNumber: "IS 19749:2026",
    isTitle:
      "Probabilistic Risk Assessment of Nuclear Power Plants - Guidelines.",
  },
  {
    sno: 50,
    isNumber: "IS 5182 (Part 29/Sec 1):2025",
    isTitle:
      "Air Pollution — Methods for Measurement Part 29 Vapor Phase Mercury in Ambient Air Section 1 Cold-Vapor Atomic Fluorescence Spectroscopy Method by Amalgamation Principle",
  },
  {
    sno: 51,
    isNumber: "IS 5182 (Part 29/Sec 2):2025",
    isTitle:
      "Air Pollution — Methods for Measurement Part 29 Vapor Phase Mercury in Ambient Air Section 2 Cold-Vapor Atomic Absorption or Fluorescence Spectroscopy Method Using Acidified solution of KMnO4",
  },
  {
    sno: 52,
    isNumber: "IS 11255 (Part 16):2025",
    isTitle:
      "Methods for Measurement of Emission from Stationary Sources Part 16 Chemical Absorption Method for Sampling and Determining Mercury Species in Flue Gas",
  },
  {
    sno: 53,
    isNumber: "IS 5182 (Part 30):2025",
    isTitle:
      "Air Pollution - Methods For Measurement Part 30 Metals in Particulate Matter in Ambient Air",
  },
  {
    sno: 54,
    isNumber: "IS 17118 (Part 6):2026",
    isTitle:
      "Indoor Air Part 6 Determination of Organic Compounds VVOC VOC SVOC In Indoor and Test Chamber Air by Active Sampling on Sorbent Tubes Thermal Desorption and Gas Chromatography Using MS or MS FID",
  },
  {
    sno: 55,
    isNumber: "IS 17118 (Part 7):2026",
    isTitle:
      "Indoor air Part 7: Sampling strategy for determination of airborne asbestos fibre concentrations",
  },
  {
    sno: 56,
    isNumber: "IS 17118 (Part 10):2026",
    isTitle:
      "Indoor Air Part 10 Determination of the emission of volatile organic compounds from building products and furnishing Emission test cell method",
  },
  {
    sno: 57,
    isNumber: "IS 17118 (Part 5):2026",
    isTitle:
      "Indoor Air Part 5 Sampling Strategy for Volatile Organic Compounds VOCs",
  },
  {
    sno: 58,
    isNumber: "IS 17118 (Part 11):2026",
    isTitle:
      "Indoor Air Part 11 Determination of the Emission of Volatile Organic Compounds from Samples of Building Products and Furnishing - Sampling Storage of Samples and Preparation of Test Specimens",
  },
  {
    sno: 59,
    isNumber: "IS 17118 (Part 15):2026",
    isTitle:
      "Indoor Air Part 15 Sampling Strategy for Nitrogen Dioxide NO2",
  },
  {
    sno: 60,
    isNumber: "IS 3025 (Part 85):2025",
    isTitle:
      "Methods of Sampling and Test Physical and Chemical for Water and Wastewater Part 85 Detection of selected congeners of polychlorinated dibenzo-p-dioxins and polychlorinated biphenyls Method using a flow immunosensor technique",
  },
  {
    sno: 61,
    isNumber: "IS 19644:2026",
    isTitle:
      "Water Quality — Guidance and requirements for designing an interlaboratory trial for validation of analytical methods",
  },
  {
    sno: 62,
    isNumber: "IS 17614 (Part 26):2026",
    isTitle:
      "Water Quality — Sampling Part 26 Guideline on the validation of the storage time of water samples",
  },
  {
    sno: 63,
    isNumber: "IS 17614 (Part 27):2026",
    isTitle:
      "Water Quality — Sampling Part 27 Guidance on sampling for the parameters of the oceanic carbon dioxide system",
  },
];

const DepartmentStandardsTable = ({ data }) => {
  const [showAllRows, setShowAllRows] = useState(false);
  const totalRows = data.length;
  const hiddenRowsCount = totalRows - STANDARDS_TABLE_INITIAL_VISIBLE_ROWS;
  const visibleRows = showAllRows
    ? data
    : data.slice(0, STANDARDS_TABLE_INITIAL_VISIBLE_ROWS);

  return (
    <div className="mb-6">
      <div className="relative overflow-x-auto mb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                S.No
              </TableHead>
              <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                IS Number
              </TableHead>
              <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                IS Title
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.sno}>
                <TableCell className="font-geist text-gray-600">
                  {row.sno}
                </TableCell>
                <TableCell className="font-geist text-gray-600 whitespace-nowrap">
                  {row.isNumber}
                </TableCell>
                <TableCell className="font-geist text-gray-600">
                  {row.isTitle}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {!showAllRows && totalRows > STANDARDS_TABLE_INITIAL_VISIBLE_ROWS && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-blue-50 to-transparent"
          />
        )}
      </div>

      {totalRows > STANDARDS_TABLE_INITIAL_VISIBLE_ROWS && (
        <div className="mt-3 flex flex-col items-center gap-2">
          <p className="text-sm font-geist text-gray-500">
            Showing {visibleRows.length} of {totalRows} standards
          </p>
          <button
            type="button"
            onClick={() => setShowAllRows(!showAllRows)}
            aria-expanded={showAllRows}
            className="group inline-flex items-center gap-2 rounded-full border border-[#1A8781]/25 bg-white px-5 py-2.5 text-sm font-geist font-medium text-[#1A8781] shadow-sm transition-all duration-200 hover:border-[#1A8781]/45 hover:bg-[#1A8781]/5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781]/30"
          >
            {showAllRows ? "Show Less" : `Show More `}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                showAllRows ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

const MetaTags = () => {
  const title =
    "BIS Introduces New Indian Standards Across Multiple Departments - Check IS Codes & BIS Updates";
  const ogTitle = title;
  const twitterTitle = title;
  const metaDescription =
    "Explore the latest BIS New Standards 2026 issued by the Bureau of Indian Standards across departments including Civil, Chemical, Mechanical, Electronics, Textiles, Transport, Environment, and more.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS new standards 2026, BIS standards, Bureau of Indian Standards, BIS certification, BIS updates, civil engineering standards, chemical standards India, mechanical engineering standards, transport engineering standards, textile standards India, petroleum standards BIS";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-new-standards-2026-department-wise-indian-standards";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const headline =
    "BIS New Upcoming Indian Standards 2026 – Complete Department-Wise Indian Standards & IS Codes Guide";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": websiteUrl,
          },
          headline,
          description: metaDescription,
          image:
            "https://bis-certifications.com/blogImages/bisupcomingstandards.webp",
          author: {
            "@type": "Person",
            name: "Dhruv Aggarwal",
            url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
          },
          publisher: {
            "@type": "Organization",
            name: "Sun Certifications India",
            logo: {
              "@type": "ImageObject",
              url: "https://bis-certifications.com/company-logo/company-logo.webp",
            },
          },
          datePublished: "2026-05-28",
          dateModified: "2026-05-28",
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: headline,
          image:
            "https://bis-certifications.com/blogImages/bisupcomingstandards.webp",
          description: metaDescription,
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "58042",
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
              name: "What are BIS standards?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BIS standards are officially published Indian Standards developed by the Bureau of Indian Standards to ensure product quality, safety, testing reliability, and regulatory compliance across industries.",
              },
            },
            {
              "@type": "Question",
              name: "Why are Indian Standards important?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Indian Standards help improve product quality, consumer safety, industrial efficiency, environmental sustainability, and export competitiveness.",
              },
            },
            {
              "@type": "Question",
              name: "How many new BIS standards were introduced?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BIS regularly publishes and revises hundreds of standards across multiple departments to support evolving industrial and technological requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Are BIS standards mandatory?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some BIS standards are voluntary, while others become mandatory under Quality Control Orders (QCOs) issued by the Government of India.",
              },
            },
            {
              "@type": "Question",
              name: "Which industries are covered under BIS standards?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BIS standards cover industries including construction, chemicals, healthcare, electronics, food processing, engineering, energy, agriculture, water management, textiles, and many more.",
              },
            },
          ],
        })}
      </script>
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS New Upcoming Indian Standards 2026 – Complete
                    Department-Wise Indian Standards &amp; IS Codes Guide
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
        <MainContentLeft />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          BIS New Upcoming Indian Standards 2026 – Complete Department-Wise
          Indian Standards &amp; IS Codes Guide
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards continues to strengthen India&apos;s
          quality infrastructure ecosystem through the publication and revision
          of new Indian Standards (IS Codes) across multiple industrial and
          technical departments. These new BIS standards are designed to support
          manufacturing excellence, infrastructure growth, product safety,
          sustainability, innovation, exports, digital transformation, and
          consumer protection across India.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As India rapidly expands its industrial capabilities and global trade
          presence, the importance of standardized quality benchmarks has become
          more critical than ever. BIS standards play a foundational role in
          ensuring that products, systems, services, and technologies
          manufactured or used in India comply with recognized quality, safety,
          testing, and performance requirements.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The newly introduced Indian Standards span several departments
          including:
        </p>

        <div className="overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                  S.No
                </TableHead>
                <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                  Technical Departments
                </TableHead>
                <TableHead className="font-geist font-semibold text-[#1e1e1e]">
                  Total Standards
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departmentSummaryData.map((row) => (
                <TableRow key={row.sno}>
                  <TableCell className="font-geist text-gray-600">
                    {row.sno}
                  </TableCell>
                  <TableCell className="font-geist text-gray-600">
                    {row.department}
                  </TableCell>
                  <TableCell className="font-geist text-gray-600">
                    {row.total}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>
{/* -------------------------------------------------------------------------------------------------------------------------------------- */}
        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
          Ayush Department
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ayush Department under BIS plays an increasingly important role
          in standardizing India&apos;s traditional healthcare systems including
          Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy. With the
          global demand for natural healthcare products and wellness solutions
          rising rapidly, BIS Ayush standards help establish scientific quality
          benchmarks for herbal formulations, medicinal ingredients, wellness
          products, therapeutic equipment, and traditional healthcare practices.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Ayush Department under BIS Certification
        </h3>


        {/* table of upcoming products of Ayush Department under BIS Certification */}
        <DepartmentStandardsTable data={ayushDepartmentStandardsData} />

    {/* ---------------------------------------------------------------------------------------------------------------------------------------     */}

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
          Civil Engineering Department (CED)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Civil Engineering Department is one of the most influential
          standardization divisions supporting India&apos;s infrastructure and
          construction ecosystem. BIS civil engineering standards are widely used
          in highways, bridges, buildings, dams, airports, railways, smart
          cities, urban development, housing projects, and industrial
          construction. The growing emphasis on resilient infrastructure, green
          construction, and urban modernization has made BIS civil engineering
          standards critical for engineers, architects, contractors, consultants,
          government agencies, and real estate developers.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          According to BIS documentation, these standards are extensively used
          by regulatory bodies, PWDs, construction agencies, testing
          laboratories, and infrastructure consultants throughout India.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Civil Engineering Department under BIS
          Certification
        </h3>

        {/* table of upcoming products of Civil Engineering Department under BIS Certification */}
        <DepartmentStandardsTable data={civilEngineeringDepartmentStandardsData} />

{/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Chemical Department (CHD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Chemical Department (CHD) develops and maintains Indian Standards
          related to chemicals, industrial materials, environmental management
          systems, laboratory testing, consumer chemicals, and industrial
          processing requirements.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS chemical standards are essential for maintaining product safety,
          environmental compliance, industrial efficiency, and international
          quality alignment. These standards are extensively used in sectors such
          as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pharmaceuticals</li>
          <li>Paints and coatings</li>
          <li>Petrochemicals</li>
          <li>Fertilizers</li>
          <li>Industrial chemicals</li>
          <li>Consumer products</li>
          <li>Water treatment</li>
          <li>Packaging materials</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The latest BIS chemical standards focus heavily on environmental
          sustainability, product consistency, testing accuracy, and safe
          chemical handling practices.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Chemical Department under BIS Certification
        </h3>


        {/* table of upcoming products of Chemical Department under BIS Certification */}
        <DepartmentStandardsTable data={chemicalDepartmentStandardsData} />

        {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
         

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Electronics and Information Technology Department (LITD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Electronics and Information Technology Department (LITD) is
          responsible for developing standards related to electronics,
          cybersecurity, digital systems, AI technologies, telecommunications,
          software interoperability, data privacy, and emerging technologies.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As India accelerates digital transformation initiatives including
          Digital India, smart manufacturing, Industry 4.0, IoT adoption, and AI
          implementation, BIS electronics standards are becoming increasingly
          important.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          According to BIS strategic documentation, these standards broadly
          cover: product functionality, safety, quality, security, privacy,
          interoperability, testing methods, terminology, and technology
          guidelines.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Electronics and Information Technology
          Department under BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Medical Equipment and Hospital Planning Department
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Medical Equipment and Hospital Planning Department develops
          Standards related to medical devices, healthcare technologies, hospital
          systems, diagnostic equipment, and digital healthcare infrastructure.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The healthcare sector requires extremely high levels of precision,
          safety, and regulatory compliance. BIS medical standards help ensure
          that medical devices and healthcare technologies meet strict quality
          benchmarks.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS reports indicate that this department has published more than 1400
          standards, with several harmonized with international standards.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Medical Equipment and Hospital Planning
          Department under BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Food and Agriculture Department (FAD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Food and Agriculture Department establishes standards for food
          safety, agricultural products, packaging, storage systems, food
          testing, and quality assurance mechanisms.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS food standards are critical for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Public health protection</li>
          <li>Food processing quality</li>
          <li>Export compliance</li>
          <li>Agricultural sustainability</li>
          <li>Supply chain safety</li>
          <li>Nutritional consistency</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These standards help food manufacturers, processors, exporters,
          retailers, and laboratories comply with safety and quality regulations.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Food and Agriculture Department under BIS
          Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Production and General Engineering Department (PGD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Production and General Engineering Department develops standards
          related to industrial tools, machinery, engineering components,
          manufacturing systems, and industrial productivity.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS engineering standards support industrial modernization and
          manufacturing efficiency across multiple sectors.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Recent standards include tools and elastomer pressure spring
          specifications.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Focus Areas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Industrial tools</li>
          <li>Manufacturing quality</li>
          <li>Engineering products</li>
          <li>Industrial safety</li>
          <li>Machine performance</li>
          <li>Production systems</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Production and General Engineering
          Department under BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Electro-technical Department (ETD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Electro-technical Department develops standards for electrical
          systems, power equipment, energy efficiency technologies, renewable
          energy systems, and electrical safety mechanisms.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These standards are highly relevant for India&apos;s growing renewable
          energy and power infrastructure sectors.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Focus Areas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Power systems</li>
          <li>Renewable energy</li>
          <li>Smart grids</li>
          <li>Electrical equipment</li>
          <li>Energy efficiency</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Electro-technical Department under BIS
          Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Water Resources Department (WRD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Water Resources Department creates standards for water supply
          systems, wastewater management, irrigation infrastructure, water
          conservation technologies, and environmental water quality.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          With increasing concerns related to water scarcity and sustainable
          resource management, BIS water standards are becoming strategically
          important for India.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Focus Areas
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Drinking water systems</li>
          <li>Wastewater treatment</li>
          <li>Irrigation infrastructure</li>
          <li>Water conservation</li>
          <li>Environmental sustainability</li>
          <li>Public utility systems</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Water Resources Department under BIS
          Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Environment and Ecology Department (EED)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Environment and Ecology Department (EED) plays a vital role in
          supporting India&apos;s sustainability, environmental protection,
          climate resilience, and ecological management initiatives through the
          development of comprehensive Indian Standards. As industries
          increasingly move toward greener operations and environmentally
          responsible manufacturing practices, BIS environmental standards are
          becoming essential for regulatory compliance, ESG implementation, and
          sustainable industrial development.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Environment and Ecology Department develops standards related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Environmental management systems</li>
          <li>Waste management</li>
          <li>Pollution monitoring</li>
          <li>Air and water quality</li>
          <li>Climate adaptation</li>
          <li>Carbon reduction practices</li>
          <li>Sustainable resource utilization</li>
          <li>Environmental testing methodologies</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS environmental standards are widely used by industries,
          government agencies, urban development authorities, environmental
          consultants, infrastructure developers, laboratories, and sustainability
          professionals across India.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Environment and Ecology Department under
          BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Mechanical Engineering Department (MED)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Mechanical Engineering Department (MED) is one of the most
          significant technical divisions within the Bureau of Indian Standards,
          responsible for developing standards related to machinery, industrial
          equipment, manufacturing systems, heavy engineering, automation
          technologies, and mechanical components.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS mechanical engineering standards are widely used across:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Industrial manufacturing</li>
          <li>Heavy machinery</li>
          <li>Automotive components</li>
          <li>Power plants</li>
          <li>Process industries</li>
          <li>Pumps and compressors</li>
          <li>Industrial automation</li>
          <li>Machine tools</li>
          <li>HVAC systems</li>
          <li>Industrial safety systems</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These Indian Standards establish technical specifications, testing
          methods, performance requirements, material standards, and operational
          safety benchmarks for a broad range of mechanical engineering
          applications.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Mechanical Engineering Department under
          BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Management and Systems Department (MSD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Management and Systems Department (MSD) develops Standards related
          to organizational management systems, quality management, risk
          management, governance frameworks, business continuity, process
          optimization, and operational excellence.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          In today&apos;s highly competitive and compliance-driven business
          environment, organizations require structured systems to maintain
          consistency, efficiency, and quality performance. BIS management
          standards help organizations establish internationally aligned
          frameworks for operational control, customer satisfaction, and
          continuous improvement.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department covers standards associated with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quality management systems</li>
          <li>Risk management</li>
          <li>Knowledge management</li>
          <li>Innovation management</li>
          <li>Governance systems</li>
          <li>Compliance management</li>
          <li>Information documentation</li>
          <li>Business continuity systems</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          MSD standards are applicable across virtually every industry including
          manufacturing, healthcare, IT, infrastructure, logistics, government
          institutions, education, finance, and service organizations.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Management and Systems Department under
          BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Metallurgical Engineering Department (MTD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Metallurgical Engineering Department (MTD) develops Standards
          related to ferrous and non-ferrous metals, alloys, metallurgical
          processes, heat treatment, material testing, structural metals,
          industrial metallurgy, and advanced engineering materials.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Metallurgical standards form the backbone of industries such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Steel manufacturing</li>
          <li>Construction</li>
          <li>Automotive</li>
          <li>Aerospace</li>
          <li>Railways</li>
          <li>Heavy engineering</li>
          <li>Defense manufacturing</li>
          <li>Infrastructure</li>
          <li>Energy systems</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS metallurgical standards establish critical quality and performance
          requirements for raw materials, metal processing, welding systems,
          corrosion resistance, material durability, and structural integrity.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Metallurgical Engineering Department under
          BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Petroleum, Coal and Related Products Department (PCD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Petroleum, Coal and Related Products Department (PCD) develops
          standards for petroleum products, lubricants, fuels, coal-based
          products, petrochemicals, energy materials, and associated testing
          methodologies.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These standards are crucial for India&apos;s energy infrastructure and
          industrial economy. BIS petroleum standards help ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fuel quality</li>
          <li>Operational safety</li>
          <li>Environmental compliance</li>
          <li>Energy efficiency</li>
          <li>Product consistency</li>
          <li>Industrial reliability</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department covers standards for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Diesel and petrol quality</li>
          <li>Lubricants and greases</li>
          <li>LPG and gaseous fuels</li>
          <li>Bitumen and asphalt</li>
          <li>Coal testing</li>
          <li>Petrochemical products</li>
          <li>Fuel storage systems</li>
          <li>Industrial oils</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Petroleum, Coal and Related Products
          Department under BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Service Sector Department (SSD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Service Sector Department (SSD) focuses on developing Standards for
          service quality, customer experience, operational efficiency, digital
          services, tourism, healthcare services, logistics, education, and
          professional service delivery systems.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As India&apos;s service economy continues to expand rapidly, the need
          for structured service quality benchmarks has become increasingly
          important. BIS service sector standards help organizations deliver
          consistent, reliable, and customer-focused services.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department supports sectors such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hospitality and tourism</li>
          <li>Healthcare services</li>
          <li>Education and training</li>
          <li>Logistics and supply chain</li>
          <li>E-commerce</li>
          <li>Banking and financial services</li>
          <li>IT-enabled services</li>
          <li>Professional consulting services</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming services of Service Sector Department under BIS
          Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Transport Engineering Department (TED)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Transport Engineering Department (TED) develops Standards related
          to automotive engineering, road transport systems, vehicle components,
          mobility infrastructure, transportation safety, and emerging mobility
          technologies.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS transport standards support India&apos;s rapidly evolving
          transportation ecosystem, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Automotive manufacturing</li>
          <li>Electric vehicles</li>
          <li>Rail transport</li>
          <li>Road safety systems</li>
          <li>Commercial vehicles</li>
          <li>Intelligent transportation systems</li>
          <li>Sustainable mobility</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department establishes technical specifications for vehicle
          performance, component safety, fuel efficiency, testing methodologies,
          and transport infrastructure reliability.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As India promotes electric mobility, smart transportation systems, and
          sustainable logistics, BIS transport engineering standards are
          becoming increasingly critical for manufacturers, suppliers, and
          infrastructure developers.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department contributes significantly to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Road safety improvement</li>
          <li>Vehicle reliability</li>
          <li>Emission reduction</li>
          <li>Sustainable transportation</li>
          <li>Mobility innovation</li>
          <li>Manufacturing quality</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Transport Engineering Department under BIS
          Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Textiles Department (TXD)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Textiles Department (TXD) develops Standards for textile fibers,
          fabrics, garments, technical textiles, testing methods, dyeing
          processes, textile machinery, and textile product safety.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s textile industry is one of the largest contributors to
          manufacturing, exports, employment, and MSME development. BIS textile
          standards help ensure product consistency, fabric quality, consumer
          safety, and international competitiveness.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The department covers standards related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Natural and synthetic fibers</li>
          <li>Technical textiles</li>
          <li>Protective clothing</li>
          <li>Textile testing</li>
          <li>Fabric durability</li>
          <li>Dyeing and finishing</li>
          <li>Apparel quality</li>
          <li>Textile safety compliance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS standards are widely used by textile mills, garment
          manufacturers, exporters, laboratories, fashion brands, and technical
          textile companies.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of Upcoming products of Textile Department under BIS Certification
        </h3>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards continues to play a transformative role
          in strengthening India&apos;s quality ecosystem through the development
          and publication of new Indian Standards across diverse sectors.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS standards are not merely technical documents — they serve as
          the foundation for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Industrial growth</li>
          <li>Consumer protection</li>
          <li>Product reliability</li>
          <li>Sustainable development</li>
          <li>Infrastructure modernization</li>
          <li>Global trade competitiveness</li>
          <li>Technological innovation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          As India advances toward becoming a global manufacturing and innovation
          hub, adherence to BIS certification requirements and Indian Standards
          will become increasingly important for businesses seeking long-term
          growth, regulatory compliance, and international market access.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Organizations that proactively align with the latest BIS standards will
          be better positioned to enhance product quality, improve operational
          efficiency, strengthen consumer trust, and remain competitive in both
          domestic and international markets.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What are BIS standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS standards are officially published Indian Standards developed by
          the Bureau of Indian Standards to ensure product quality, safety,
          testing reliability, and regulatory compliance across industries.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Why are Indian Standards important?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Indian Standards help improve product quality, consumer safety,
          industrial efficiency, environmental sustainability, and export
          competitiveness.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. How many new BIS standards were introduced?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS regularly publishes and revises hundreds of standards across
          multiple departments to support evolving industrial and technological
          requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Are BIS standards mandatory?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Some BIS standards are voluntary, while others become mandatory under
          Quality Control Orders (QCOs) issued by the Government of India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Which industries are covered under BIS standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS standards cover industries including construction, chemicals,
          healthcare, electronics, food processing, engineering, energy,
          agriculture, water management, textiles, and many more.
        </p>

        <ServiceAuthorEng />
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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
