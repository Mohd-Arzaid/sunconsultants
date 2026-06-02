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
  { sno: 3, department: "Chemical Department (CHD)", total: 63 },
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
  { sno: 15, department: "Transport Engineering Department (TED)", total: 28 },
  { sno: 16, department: "Textiles Department (TXD)", total: 46 },
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
    isNumber: "IS 19575:2026",
    isTitle:
      "Efficiency Assessment of Anion Exchange Membrane, Proton Exchange Membrane and Alkaline Water Electrolysers",
  },
  {
    sno: 4,
    isNumber: "IS 19358:2025",
    isTitle:
      "NBC Canister - Method of Test - Breakthrough Test for Sulphur Mustard Vapor (BTTSM)",
  },
  {
    sno: 5,
    isNumber: "IS 19561:2026",
    isTitle: "Sodium Cyanide — Code of Safety",
  },
  {
    sno: 6,
    isNumber: "IS 19508:2026",
    isTitle: "Selection of PPE for Waste Handling — Guidelines",
  },
  {
    sno: 7,
    isNumber: "IS 17274 (Part 4):2025",
    isTitle:
      "Respiratory Protective Devices — Methods of Test and Test Equipment Part 4 Determination of gas filter capacity and migration, desorption and carbon monoxide dynamic testing",
  },
  {
    sno: 8,
    isNumber: "IS 19420:2026",
    isTitle:
      "Personal Protective Equipment — Test Methods for Sunglasses and Related Eyewear",
  },
  {
    sno: 9,
    isNumber: "IS 19517 (Part 1):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 1 Sunglasses for General Use",
  },
  {
    sno: 10,
    isNumber: "IS 19522:2025",
    isTitle:
      "Safety Harness for Child to be Carried on Two Wheelers Specifications",
  },
  {
    sno: 11,
    isNumber: "IS 17274 (Part 14):2026",
    isTitle:
      "Respiratory Protective Devices — Methods of Test and Test Equipment Part 14 Measurement of Sound Pressure Level",
  },
  {
    sno: 12,
    isNumber: "IS 19517 (Part 3):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 3 Sunglasses for Running, Cycling and Similar Active Lifestyles",
  },
  {
    sno: 13,
    isNumber: "IS 19517 (Part 2):2026",
    isTitle:
      "Eye and Face Protection — Sunglasses and Related Eyewear Part 2 Filters for Direct Observation of the Sun",
  },
  {
    sno: 14,
    isNumber: "IS 19348:2025",
    isTitle: "GLASS SCREEN PROTECTOR - SPECIFICATION",
  },
  {
    sno: 15,
    isNumber: "IS 19328:2025",
    isTitle: "FIRE RESISTANT GLASS SPECIFICATION",
  },
  {
    sno: 16,
    isNumber: "IS 19331:2025",
    isTitle: "TINTED FLOAT GLASS - SPECIFICATION",
  },
  {
    sno: 17,
    isNumber: "IS 19360:2026",
    isTitle: "Coated Glass - Specification",
  },
  {
    sno: 18,
    isNumber: "IS 14661 (Part 3/Sec 5):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 5 Determination of Optical Properties — Measurement of Brightness and Colour with D65/10° (Outdoor Daylight)",
  },
  {
    sno: 19,
    isNumber: "IS 14661 (Part 1):2025",
    isTitle: "Tissue paper and tissue products Part 1 Vocabulary",
  },
  {
    sno: 20,
    isNumber: "IS 14661 (Part 3/Sec 1):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 1 Determination of thickness bulking thickness and apparent bulk density and bulk",
  },
  {
    sno: 21,
    isNumber: "IS 14661 (Part 3/Sec 2):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 2 Determination of tensile strength, stretch at maximum force and tensile energy absorption",
  },
  {
    sno: 22,
    isNumber: "IS 14661 (Part 3/Sec 3):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of test Section 3 Determination of wet tensile strength",
  },
  {
    sno: 23,
    isNumber: "IS 14661 (Part 3/Sec 4):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 4 Determination of Grammage",
  },
  {
    sno: 24,
    isNumber: "IS 14661 (Part 3/Sec 7):2025",
    isTitle:
      "Tissue paper and tissue products Methods of test Part 7 Determination of disintegration in water",
  },
  {
    sno: 25,
    isNumber: "IS 14661 (Part 3/Sec 6):2025",
    isTitle:
      "Tissue paper and tissue products Part 3 Methods of Test Section 6 Water-Absorption Time and Water-Absorption Capacity, Basket-Immersion Test Method",
  },
  {
    sno: 26,
    isNumber: "IS 19378:2025",
    isTitle:
      "Base Paper for Sublimation Coating and Sublimation Coated Paper Specification",
  },
  {
    sno: 27,
    isNumber: "IS 1060 (Part 5/Sec 22):2026",
    isTitle:
      "Method of Sampling and Test for Paper and Allied Products Part 5 Method of Test for Paper and Board Section 22 Determination of roughness smoothness Air leak methods - Oken method",
  },
  {
    sno: 28,
    isNumber: "IS 19655 (Part 2):2026",
    isTitle:
      "Handmade Paper Board for File Covers and Folders — Specification",
  },
  {
    sno: 29,
    isNumber: "IS 19655 (Part 1):2026",
    isTitle: "Handmade Paper for Carry Bags Specification",
  },
  {
    sno: 30,
    isNumber: "IS 19655 (Part 3):2026",
    isTitle: "Handmade Paper for Packaging Specification",
  },
  {
    sno: 31,
    isNumber: "IS 19655 (Part 4):2026",
    isTitle: "Handmade Paper for Envelopes Specification",
  },
  {
    sno: 32,
    isNumber: "IS 19655:2026",
    isTitle: "Handmade Paper for Writing Specification",
  },
  {
    sno: 33,
    isNumber: "IS 19534:2025",
    isTitle:
      "Paper and board Determination of resistance to water penetration",
  },
  {
    sno: 34,
    isNumber: "IS 19530:2025",
    isTitle:
      "Paper and board Determination of compressive strength Ring crush method",
  },
  {
    sno: 35,
    isNumber: "IS 19527 (Part 1):2025",
    isTitle:
      "Paper and board Determination of grease resistance Part 1: Permeability test",
  },
  {
    sno: 36,
    isNumber: "IS 19527 (Part 3):2026",
    isTitle:
      "Paper and board Determination of grease resistance Part 3: Turpentine test for voids in glassine and greaseproof papers",
  },
  {
    sno: 37,
    isNumber: "IS 19531:2026",
    isTitle:
      "Paper and board Determination of bending stiffness Resonance method",
  },
  {
    sno: 38,
    isNumber: "IS 19527 (Part 2):2026",
    isTitle:
      "Paper and board Determination of grease resistance Part 2: Surface repellency test",
  },
  {
    sno: 39,
    isNumber: "IS 19533:2026",
    isTitle:
      "Paper and board Determination of bending stiffness General principles for two-point three-point and four-point methods",
  },
  {
    sno: 40,
    isNumber: "IS 19627:2026",
    isTitle:
      "Footwear Critical Substances Potentially Present in Footwear and Footwear Components Test Method to Quantitatively Determine Dimethylformamide in Footwear Materials",
  },
  {
    sno: 41,
    isNumber: "IS 19628:2026",
    isTitle:
      "Footwear Critical Substances Potentially Present in Footwear and Footwear Components Test Method to Quantitatively Determine Polycyclic Aromatic Hydrocarbons PAHs in Footwear Materials",
  },
  {
    sno: 42,
    isNumber: "IS 19229:2025",
    isTitle: "SHOCK TUBE DETONATORS SPECIFICATION",
  },
  {
    sno: 43,
    isNumber: "IS 19304:2025",
    isTitle: "Flexible Aerogel blanket - Specification",
  },
  {
    sno: 44,
    isNumber: "IS 19306:2025",
    isTitle:
      "Fire Performance for Thermal Insulation Materials to be Used in Building Equipments or Building Structures - Method of Test",
  },
  {
    sno: 45,
    isNumber: "IS 19389:2025",
    isTitle:
      "Monitoring Radioactive Gases in Effluents from Facilities Producing Positron Emitting Radionuclides and Radiopharmaceuticals",
  },
  {
    sno: 46,
    isNumber: "IS 19390:2025",
    isTitle:
      "Guidance for Gamma Spectrometry Measurement of Radioactive Waste",
  },
  {
    sno: 47,
    isNumber: "IS 19392:2025",
    isTitle:
      "Measurement of radioactivity - Gamma ray and beta emitting radionuclides - Test method to assess the ease of decontamination of surface materials",
  },
  {
    sno: 48,
    isNumber: "IS 18066 (Part 4):2026",
    isTitle:
      "Measurement of Radioactivity in the Environment - Air Radon-222 Part 4 Integrated Measurement Method for Determining Average Activity Concentration Using Passive Sampling and Delayed Analysis",
  },
  {
    sno: 49,
    isNumber: "IS 18066 (Part 6):2026",
    isTitle:
      "Measurement of Radioactivity in the Environment - Air Radon-222 Part 6 Spot Measurement Methods of the Activity Concentration",
  },
  {
    sno: 50,
    isNumber: "IS 19749:2026",
    isTitle:
      "Probabilistic Risk Assessment of Nuclear Power Plants - Guidelines.",
  },
  {
    sno: 51,
    isNumber: "IS 5182 (Part 29/Sec 1):2025",
    isTitle:
      "Air Pollution — Methods for Measurement Part 29 Vapor Phase Mercury in Ambient Air Section 1 Cold-Vapor Atomic Fluorescence Spectroscopy Method by Amalgamation Principle",
  },
  {
    sno: 52,
    isNumber: "IS 5182 (Part 29/Sec 2):2025",
    isTitle:
      "Air Pollution — Methods for Measurement Part 29 Vapor Phase Mercury in Ambient Air Section 2 Cold-Vapor Atomic Absorption or Fluorescence Spectroscopy Method Using Acidified solution of KMnO4",
  },
  {
    sno: 53,
    isNumber: "IS 11255 (Part 16):2025",
    isTitle:
      "Methods for Measurement of Emission from Stationary Sources Part 16 Chemical Absorption Method for Sampling and Determining Mercury Species in Flue Gas",
  },
  {
    sno: 54,
    isNumber: "IS 5182 (Part 30):2025",
    isTitle:
      "Air Pollution - Methods For Measurement Part 30 Metals in Particulate Matter in Ambient Air",
  },
  {
    sno: 55,
    isNumber: "IS 17118 (Part 6):2026",
    isTitle:
      "Indoor Air Part 6 Determination of Organic Compounds VVOC VOC SVOC In Indoor and Test Chamber Air by Active Sampling on Sorbent Tubes Thermal Desorption and Gas Chromatography Using MS or MS FID",
  },
  {
    sno: 56,
    isNumber: "IS 17118 (Part 7):2026",
    isTitle:
      "Indoor air Part 7: Sampling strategy for determination of airborne asbestos fibre concentrations",
  },
  {
    sno: 57,
    isNumber: "IS 17118 (Part 10):2026",
    isTitle:
      "Indoor Air Part 10 Determination of the emission of volatile organic compounds from building products and furnishing Emission test cell method",
  },
  {
    sno: 58,
    isNumber: "IS 17118 (Part 5):2026",
    isTitle:
      "Indoor Air Part 5 Sampling Strategy for Volatile Organic Compounds VOCs",
  },
  {
    sno: 59,
    isNumber: "IS 17118 (Part 11):2026",
    isTitle:
      "Indoor Air Part 11 Determination of the Emission of Volatile Organic Compounds from Samples of Building Products and Furnishing - Sampling Storage of Samples and Preparation of Test Specimens",
  },
  {
    sno: 60,
    isNumber: "IS 17118 (Part 15):2026",
    isTitle:
      "Indoor Air Part 15 Sampling Strategy for Nitrogen Dioxide NO2",
  },
  {
    sno: 61,
    isNumber: "IS 3025 (Part 85):2025",
    isTitle:
      "Methods of Sampling and Test Physical and Chemical for Water and Wastewater Part 85 Detection of selected congeners of polychlorinated dibenzo-p-dioxins and polychlorinated biphenyls Method using a flow immunosensor technique",
  },
  {
    sno: 62,
    isNumber: "IS 19644:2026",
    isTitle:
      "Water Quality — Guidance and requirements for designing an interlaboratory trial for validation of analytical methods",
  },
  {
    sno: 63,
    isNumber: "IS 17614 (Part 26):2026",
    isTitle:
      "Water Quality — Sampling Part 26 Guideline on the validation of the storage time of water samples",
  },
  {
    sno: 64,
    isNumber: "IS 17614 (Part 27):2026",
    isTitle:
      "Water Quality — Sampling Part 27 Guidance on sampling for the parameters of the oceanic carbon dioxide system",
  },
];

const environmentAndEcologyDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS/ISO 14007:2019",
    isTitle:
      "Environmental management systems — Guidelines for determining environmental costs and benefits",
  },
  {
    sno: 2,
    isNumber: "IS/ISO 14016:2020",
    isTitle:
      "Environmental management — Guidelines on the assurance of environmental reports",
  },
  {
    sno: 3,
    isNumber: "IS/ISO/TR 14073:2017",
    isTitle:
      "Environmental management — Water footprint — Illustrative examples on how to apply ISO 14046",
  },
  {
    sno: 4,
    isNumber: "IS/ISO 14083:2023",
    isTitle:
      "Greenhouse Gases — Quantification and Reporting of Greenhouse Gas Emissions Arising from Transport Chain Operations",
  },
  {
    sno: 5,
    isNumber: "IS/ISO 14091:2021",
    isTitle:
      "Adaptation to Climate Change — Guidelines on Vulnerability Impacts and Risk Assessment",
  },
  {
    sno: 6,
    isNumber: "IS/ISO 14017:2022",
    isTitle:
      "Environmental Management — Requirements with Guidance for Verification and Validation of Water Statements",
  },
  {
    sno: 7,
    isNumber: "IS/ISO 14055-1:2017",
    isTitle:
      "Environmental Management — Guidelines for Establishing Good Practices for Combatting Land Degradation and Desertification Part 1 Good Practices Framework",
  },
  {
    sno: 8,
    isNumber: "IS/ISO 14068-1:2023",
    isTitle:
      "Climate Change Management — Transition to Net Zero Part 1 Carbon Neutrality",
  },
  {
    sno: 9,
    isNumber: "IS/ISO 14080:2018",
    isTitle:
      "Greenhouse Gas Management and Related Activities — Framework and Principles for Methodologies on Climate Actions",
  },
  {
    sno: 10,
    isNumber: "IS/ISO/TS 14092:2020",
    isTitle:
      "Adaptation to Climate Change — Requirements and Guidance on Adaptation Planning for Local Governments and Communities",
  },
  {
    sno: 11,
    isNumber: "IS/ISO 14093:2022",
    isTitle:
      "Mechanism for Financing Local Adaption to Climate Change — Performance-Based Climate Resilience Grants Requirements and Guidelines",
  },
  {
    sno: 12,
    isNumber: "IS/ISO 14097:2021",
    isTitle:
      "Greenhouse Gas Management and Related Activities — Framework Including Principles and Requirements for Assessing and Reporting Investments and Financing Activities Related to Climate Change",
  },
  {
    sno: 13,
    isNumber: "IS/ISO/TS 14074:2022",
    isTitle:
      "Environmental Management — Life Cycle Assessment — Principles, Requirements, and Guidelines for Normalization, Weighting, and Interpretation",
  },
  {
    sno: 14,
    isNumber: "IS 19334 (Part 1):2025",
    isTitle:
      "Stationary source emissions — Determination of greenhouse gas emissions in energy-intensive industries Part 1 General aspects",
  },
  {
    sno: 15,
    isNumber: "IS/ISO 14067:2018",
    isTitle:
      "Greenhouse Gases — Carbon Footprint of Products — Requirements and Guidelines for Quantification",
  },
  {
    sno: 16,
    isNumber: "IS 19767:2026",
    isTitle:
      "Control of Air Pollution in Coal Based Thermal Power Plant — Code of Practice",
  },
  {
    sno: 17,
    isNumber: "IS 46001:2019",
    isTitle:
      "Water Efficiency Management Systems — Requirements with Guidance for Use",
  },
  {
    sno: 18,
    isNumber: "IS 19756:2026",
    isTitle: "Benchmarking of Environmental Monitoring Services — Guidelines",
  },
  {
    sno: 19,
    isNumber: "IS 19723:2026",
    isTitle: "Measurement of Diameter and Girth of Trees — Guidelines",
  },
  {
    sno: 20,
    isNumber: "IS 19766 (Part 1):2026",
    isTitle:
      "Sustainability in Building and Civil Engineering Works — Sustainability Indicators — Part 1 Framework for the Development of Indicators and a Core Set of Indicators for Buildings",
  },
  {
    sno: 21,
    isNumber: "IS 19766 (Part 2):2026",
    isTitle:
      "Sustainability in buildings and civil engineering works — Sustainability indicators — Part 2 Framework for the development of indicators for civil engineering works",
  },
  {
    sno: 22,
    isNumber: "IS 19372:2025",
    isTitle:
      "Thermal Processing of Horticulture and Wet Waste — Guidelines",
  },
  {
    sno: 23,
    isNumber: "IS 19323:2025",
    isTitle:
      "Circular Economy — Guidance on the Transition of Business Models and Value Networks (ISO 59010:2024)",
  },
  {
    sno: 24,
    isNumber: "IS 19336:2025",
    isTitle:
      "Circular Economy — Vocabulary, Principles, and Guidance for Implementation (ISO 59004:2024)",
  },
  {
    sno: 25,
    isNumber: "IS 19337:2025",
    isTitle:
      "Circular Economy — Measuring and Assessing Circularity Performance (ISO 59020:2024)",
  },
  {
    sno: 26,
    isNumber: "IS 19349:2025",
    isTitle:
      "Circular Economy — Review of Existing Value Networks (IS/TR 59032:2024)",
  },
  {
    sno: 27,
    isNumber: "IS 19247 (Part 2):2025",
    isTitle:
      "Carbon Dioxide Capture Part 2 — Evaluation Procedure to Assure and Maintain Stable Performance of Post Combustion CO2 Capture Plant Integrated with a Power Plant (ISO 27919 Part 2:2021)",
  },
  {
    sno: 28,
    isNumber: "IS 19335:2025",
    isTitle:
      "Carbon Dioxide Capture, Transportation and Geological Storage — Cross Cutting Issues — Flow Assurance (ISO/TR 27925:2023)",
  },
  {
    sno: 29,
    isNumber: "IS 19347:2025",
    isTitle:
      "Carbon Dioxide Capture — Overview of Carbon Dioxide Capture Technologies in the Cement Industry (ISO/TR 27922:2021)",
  },
  {
    sno: 30,
    isNumber: "IS 19354:2025",
    isTitle:
      "Lifecycle Risk Management for Integrated CCS Projects (ISO/TR 27918:2018)",
  },
];

const electrotechnicalDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 6303 (Part 6):2025",
    isTitle:
      "Primary Batteries Part 6 Guidance on Environmental Aspects (IEC 60086-6:2020)",
  },
  {
    sno: 2,
    isNumber: "IS 19142:2025",
    isTitle:
      "Secondary Cells and Batteries — Marking Symbols for Identification of Their Chemistry (IEC 62902:2019)",
  },
  {
    sno: 3,
    isNumber: "IS 19174:2025",
    isTitle:
      "Adaptors for Household and Similar Purposes — Particular Requirements",
  },
  {
    sno: 4,
    isNumber: "IS/IEC 60034-23:2019",
    isTitle:
      "Rotating electrical machines Part 23: Repair overhaul and reclamation",
  },
  {
    sno: 5,
    isNumber: "IS/IEC/TS 60034-27-5:2021",
    isTitle:
      "Rotating Electrical Machines Part 27 Winding Insulation of Rotating Electrical Machines Section 5 Off-line measurement of partial discharge inception voltage under repetitive impulse voltage",
  },
  {
    sno: 6,
    isNumber: "IS/IEC 60034-27-1:2017",
    isTitle:
      "Rotating electrical machines Part 27 Winding insulation of rotating electrical machines Section 1 Off-Line partial discharge measurements on the winding insulation",
  },
  {
    sno: 7,
    isNumber: "IS/IEC 60034-27-2:2023",
    isTitle:
      "Rotating electrical machines Part 27 Winding insulation of rotating electrical machines Section 2 On-line partial discharge measurements on the stator winding insulation",
  },
  {
    sno: 8,
    isNumber: "IS/IEC 60034-27-3:2015",
    isTitle:
      "Rotating electrical machines Part 27 Winding insulation of rotating electrical machines Section 3 Dielectric dissipation factor measurement on stator winding insulation of rotating electrical machines",
  },
  {
    sno: 9,
    isNumber: "IS/IEC 60034-30-3:2024",
    isTitle:
      "Rotating electrical machines Part 30 Efficiency classes Section 3 High voltage a.c. motors IE-code",
  },
  {
    sno: 10,
    isNumber: "IS/IEC 60773:2021",
    isTitle:
      "Rotating electrical machines — Test methods and apparatus for the measurement of the operational characteristics of brushes",
  },
  {
    sno: 11,
    isNumber: "IS 19427:2026",
    isTitle:
      "Onsite diagnostic testing of power transformers for condition health assessment",
  },
  {
    sno: 12,
    isNumber: "IS 19283:2025",
    isTitle:
      "Graphite Electrodes for Electric Arc Furnaces — Dimensions and Designation (IEC 60239:2005)",
  },
  {
    sno: 13,
    isNumber: "IS 19284 (Part 1):2025",
    isTitle:
      "Characteristics of Electric Infra-Red Emitters for Industrial Heating Part 1 Short Wave Infra-Red Emitters (IEC 60240-1:1992)",
  },
  {
    sno: 14,
    isNumber: "IS/IEC 60519-4:2021",
    isTitle:
      "Safety in Installations for Electroheating and Electromagnetic Processing Part 4 Particular Requirements for ARC Furnace Installations (IEC 60519-4:2021)",
  },
  {
    sno: 15,
    isNumber: "IS 19761:2026",
    isTitle:
      "Power installations exceeding 1 kV a.c. and 1.5 kV d.c. Part 0 Principles to be observed in the design and erection of high voltage installations — Safety of high voltage installations",
  },
  {
    sno: 16,
    isNumber: "IS 19428:2025",
    isTitle:
      "Dry Type Mining Transformers Transwitch Units and Load Centers",
  },
  {
    sno: 17,
    isNumber: "IS 17900 (Part 7/Sec 1):2025",
    isTitle:
      "Lift for the Transport of Person and Goods Part 7 Lifts for Special Applications Section 1 Lifts Used Under-Construction Buildings",
  },
  {
    sno: 18,
    isNumber: "IS 17900 (Part 7/Sec 4):2025",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 7 Lifts for Special Applications Section 4 Requirements of Lifts for Persons with Disabilities",
  },
  {
    sno: 19,
    isNumber: "IS 17900 (Part 7/Sec 2):2025",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 7 Lifts for Special Applications Section 2 Rack and Pinion Lifts Used in Under-Construction Buildings",
  },
  {
    sno: 20,
    isNumber: "IS 17900 (Part 10):2025",
    isTitle:
      "Lifts for The Transport of Persons and Goods Part 10 Replacement of Existing Passenger and Goods Passenger Lifts in Existing Buildings",
  },
  {
    sno: 21,
    isNumber: "IS 17900 (Part 7/Sec 6):2025",
    isTitle:
      "Lifts for Transport of Persons and Goods Part 7 Section 6 Occupant Evacuation Lifts Specification",
  },
  {
    sno: 22,
    isNumber: "IS 17900 (Part 4):2025",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 4 Specifications for Control Devices Buttons Signals Indicators and Other Fittings",
  },
  {
    sno: 23,
    isNumber: "IS 17900 (Part 11):2025",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 11 Safety Norms for Existing Lifts Risk Assessment and Risk Reduction",
  },
  {
    sno: 24,
    isNumber: "IS 17900 (Part 5):2026",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 5 Guide for Inspection of Lifts",
  },
  {
    sno: 25,
    isNumber: "IS 17900 (Part 3/Sec 2):2025",
    isTitle:
      "Lifts for the Transport of Persons and Goods Part 3 Specifications for Planning and Selection Section 2 Goods Automobile Lift",
  },
  {
    sno: 26,
    isNumber: "IS 16463 (Part 22):2026",
    isTitle:
      "Low-Voltage Surge Protective Devices Part 22 Surge Protective Devices Connected to Telecommunications and Signalling Networks — Selection and Application Principles",
  },
  {
    sno: 27,
    isNumber: "IS 16463 (Part 10):2026",
    isTitle:
      "Low-Voltage Surge Protective Devices Part 32 Surge Protective Devices Connected to the dc Side of Photovoltaic Installations — Selection and Application Principles",
  },
  {
    sno: 28,
    isNumber: "IS 16463 (Part 31):2026",
    isTitle:
      "Low-Voltage Surge Protective Devices Part 31 Requirements and Test Methods for SPDs for Photovoltaic Installations",
  },
  {
    sno: 29,
    isNumber: "IS 17123 (Part 3):2025",
    isTitle:
      "Adjustable speed electrical power drive systems Part 3 EMC requirements and specific test methods for PDS and machine tools",
  },
  {
    sno: 30,
    isNumber: "IS 17123 (Part 5/Sec 1):2025",
    isTitle:
      "Adjustable speed electrical power drive systems Part 5 Safety requirements Section 1 Electrical thermal and energy",
  },
  {
    sno: 31,
    isNumber: "IS 17123 (Part 5/Sec 3):2025",
    isTitle:
      "Adjustable speed electrical power drive systems Part 5 Safety requirements Section 3 Functional electrical and environmental requirements for encoders",
  },
  {
    sno: 32,
    isNumber: "IS 17123 (Part 7/Sec 201):2025",
    isTitle:
      "Adjustable speed electrical power drive systems Part 7 Generic interface and use of profiles for power drive systems Section 201 Profile type 1 specification",
  },
  {
    sno: 33,
    isNumber: "IS/IEC 62477-1:2022",
    isTitle:
      "Safety requirements for power electronic converter systems and equipment Part 1 General",
  },
  {
    sno: 34,
    isNumber: "IS/IEC 62477-2:2018",
    isTitle:
      "Safety requirements for power electronic converter systems and equipment Part 2 Power electronic converters from 1 000 V a.c or 1 500 V d.c up to 36 kV a.c or 54 kV d.c.",
  },
  {
    sno: 35,
    isNumber: "IS 13730 (Part 27/Sec 1):2025",
    isTitle:
      "Specifications for particular types of winding wires Part 27 Paper tape covered Section 1 Round copper wire",
  },
  {
    sno: 36,
    isNumber: "IS 13730 (Part 27/Sec 2):2025",
    isTitle:
      "Particular Types of Winding Wires — Specification Part 27 Paper Tape Covered Section 2 Round Aluminium Wire",
  },
  {
    sno: 37,
    isNumber: "IS 13730 (Part 57):2025",
    isTitle:
      "Specifications for particular types of winding wires Part 57 Polyamide-imide enameled round copper wire class 220",
  },
  {
    sno: 38,
    isNumber: "IS 13730 (Part 27/Sec 3):2025",
    isTitle:
      "Specifications for particular types of winding wires Part 27 Paper tape covered Section 3 Rectangular copper wire",
  },
  {
    sno: 39,
    isNumber: "IS 13730 (Part 27/Sec 4):2025",
    isTitle:
      "Specifications for particular types of winding wires Part 27 Paper tape covered Section 4 Rectangular aluminium wire",
  },
  {
    sno: 40,
    isNumber: "IS/IEC 60255-187-1:2021",
    isTitle:
      "Measuring relays and protection equipment Part 187 Functional requirements for differential protection Section 1 Restrained and Unrestrained differential protection of motors, generators and transformers (IEC 60255-187-1:2021)",
  },
  {
    sno: 41,
    isNumber: "IS 14956 (Part 2):2025",
    isTitle:
      "Live Working — Minimum Approach Distances Part 2 Method of Determination of the Electrical Component Distance for a.c. Systems from 1.0 kV to 72.5 kV (IEC 61472-2:2021)",
  },
  {
    sno: 42,
    isNumber: "IS/IEC 60269-7:2021",
    isTitle:
      "Low Voltage Fuses Part 7 Fuse-Links for the Protection of Batteries and Battery Systems — Supplementary Requirements (IEC 60269-7:2021)",
  },
  {
    sno: 43,
    isNumber: "IS/IEC 60269-4:2009",
    isTitle:
      "Low-Voltage Fuses Part 4 Fuse-Links for the Protection of Semiconductor Devices — Supplementary Requirements (IEC 60269-4:2009 + Amd 1:2012 + Amd 2:2016)",
  },
  {
    sno: 44,
    isNumber: "IS/IEC 61400-12-2:2022",
    isTitle:
      "Wind Energy Generation Systems Part 12 Power Performance Sec 2 Electricity producing wind turbines based on nacelle anemometry",
  },
  {
    sno: 45,
    isNumber: "IS/IEC 61400-50-1:2022",
    isTitle:
      "Wind Energy Generation Systems Part 50 Wind measurement Sec 1 Application of meteorological mast, nacelle and spinner mounted instruments",
  },
  {
    sno: 46,
    isNumber: "IS/IEC 61400-12:2022",
    isTitle:
      "Wind energy generation systems Part 12 Power performance measurements of electricity producing wind turbines Overview",
  },
  {
    sno: 47,
    isNumber: "IS/IEC 61400-21-2:2023",
    isTitle:
      "Wind Energy Generation Systems Part 21 Measurement and Assessment of Electrical Characteristics Section 2 Wind Power Plants",
  },
  {
    sno: 48,
    isNumber: "IS/IEC 61400-6:2023",
    isTitle:
      "Wind Energy Generation Systems Part 29 Marking and Lighting of Wind Turbines",
  },
  {
    sno: 49,
    isNumber: "IS/IEC/TS 61400-28:2025",
    isTitle:
      "Wind Energy Generation Systems Part 28 Through-Life Management and Life Extension of Wind Power Assets",
  },
  {
    sno: 50,
    isNumber: "IS/IEC/TS 61400-28:2025",
    isTitle:
      "Wind Energy Generation Systems Part 28 Through-life management and life extension of wind power assets",
  },
  {
    sno: 51,
    isNumber: "IS/IEC 61400-21-2:2023",
    isTitle:
      "Wind Energy Generation Systems Part 21 Measurement and Assessment of Electrical Characteristics Section 2 Wind Power Plants",
  },
  {
    sno: 52,
    isNumber: "IS/IEC TS TS-29:2023",
    isTitle:
      "Wind energy generation systems Part 29 Marking and lighting of wind turbines",
  },
  {
    sno: 53,
    isNumber: "IS/IEC 61400-5:2020",
    isTitle: "Wind energy generation systems Part 5 Wind turbine blades",
  },
  {
    sno: 54,
    isNumber: "IS/IEC 61400-6:2020",
    isTitle:
      "Wind energy generation systems Part 6 Tower and foundation design requirements",
  },
  {
    sno: 55,
    isNumber: "IS/IEC 61400-3-1:2019",
    isTitle:
      "Wind energy generation systems Part 3 Design Requirements Section 1 Fixed Offshore Wind Turbines",
  },
  {
    sno: 56,
    isNumber: "IS 19118:2025",
    isTitle:
      "Safety of Machinery — Guidelines on Functional Safety of Safety-Related Control System",
  },
  {
    sno: 57,
    isNumber: "IS 17520 (Part 3):2025",
    isTitle:
      "Safety of Machinery — Safety-Related Sensors Used for the Protection of Persons Part 3 Sensor Technologies and Algorithms",
  },
  {
    sno: 58,
    isNumber: "IS 16502 (Part 5):2026",
    isTitle:
      "Safety of Machinery Electro-Sensitive Protective Equipment Part 5 Particular Requirements for Radar-Based Protective Devices",
  },
  {
    sno: 59,
    isNumber: "IS 19635:2026",
    isTitle:
      "Grid Integration of Renewable Energy Generation Terms and Definitions",
  },
  {
    sno: 60,
    isNumber: "IS 19637:2026",
    isTitle:
      "Grid code compliance assessment methods for grid connection of wind and PV Power plants",
  },
  {
    sno: 61,
    isNumber: "IS 19320:2025",
    isTitle:
      "Electrical installations for lighting and beaconing of aerodromes — Characteristics of inset and elevated luminaires used on aerodromes and heliports (IEC 61827:2004)",
  },
  {
    sno: 62,
    isNumber: "IS 10322 (Part 5/Sec 18):2026",
    isTitle:
      "Luminaires Part 5 Particular requirements Section 18 Luminaires for swimming pools and similar applications",
  },
  {
    sno: 63,
    isNumber: "IS 19691:2026",
    isTitle:
      "Lighting systems Characteristics for selected outdoor applications",
  },
  {
    sno: 64,
    isNumber: "IS 19143 (Part 3/Sec 1):2025",
    isTitle:
      "Electrical energy storage EES systems Part 3 Planning and performance assessment of electrical energy storage systems Section 1 General specification (IEC 62933-3-1:2018)",
  },
  {
    sno: 65,
    isNumber: "IS 19143 (Part 4/Sec 4):2025",
    isTitle:
      "Electrical energy storage EES systems Part 4 Environmental requirements Section 4 battery based energy storage systems BESS with reused batteries (IEC 62933-4-4:2023)",
  },
  {
    sno: 66,
    isNumber: "IS 17067 (Part 2/Sec 2):2025",
    isTitle:
      "Electrical Energy Storage EES Systems Part 2 Unit Parameters and Testing Methods Section 2 Application and Performance Testing (IEC 62933-2-2:2022)",
  },
  {
    sno: 67,
    isNumber: "IS 18972 (Part 101):2026",
    isTitle:
      "Marine energy — Wave, tidal and other water current converters Part 101 Wave energy resource assessment and characterization",
  },
  {
    sno: 68,
    isNumber: "IS 18972 (Part 200):2026",
    isTitle:
      "Marine energy — Wave, tidal and other water current converters Part 200 Electricity producing tidal energy converters — Power performance assessment",
  },
  {
    sno: 69,
    isNumber: "IS 18972 (Part 201):2026",
    isTitle:
      "Marine energy — Wave, tidal and other water current converters Part 201 Tidal energy resource assessment and characterization",
  },
  {
    sno: 70,
    isNumber: "IS 18972 (Part 202):2026",
    isTitle:
      "Marine energy — Wave, tidal and other water current converters Part 202 Early stage development of tidal energy converters — Best practices and recommended procedures for the testing of pre-prototy",
  },
  {
    sno: 71,
    isNumber: "IS 19257:2025",
    isTitle: "Metal Air Flow Batteries",
  },
];

const foodAndAgricultureDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19788:2026",
    isTitle: "Clothianidin technical — Specification",
  },
  {
    sno: 2,
    isNumber: "IS 19199:2025",
    isTitle: "Sugar Cane Juice Screens — Specification",
  },
  {
    sno: 3,
    isNumber: "IS 19365:2025",
    isTitle: "Mating Nucleus Hive for Apis Mellifera — Specification",
  },
  {
    sno: 4,
    isNumber: "IS 19397:2025",
    isTitle:
      "Compounded Feed for Pregnant Cows and Buffaloes — Specification",
  },
  {
    sno: 5,
    isNumber: "IS 19562:2026",
    isTitle: "Maize or Corn Silage as Livestock Fodder — Specification",
  },
  {
    sno: 6,
    isNumber: "IS 19532:2026",
    isTitle:
      "Dried Distillers Grain with Solubles DDGS as Livestock Feed Ingredient — Specification",
  },
  {
    sno: 7,
    isNumber: "IS 19285:2025",
    isTitle:
      "Guidelines for the Harvesting Transportation Separation of Stigma Drying and Storage of Saffron before Packing",
  },
  {
    sno: 8,
    isNumber: "IS 19432:2025",
    isTitle: "Dried dill — Specification",
  },
  {
    sno: 9,
    isNumber: "IS 19440:2025",
    isTitle: "Dried Parsley Petroselinum crispum — Specification",
  },
  {
    sno: 10,
    isNumber: "IS 19576:2026",
    isTitle:
      "Spices and condiments — Dried chive (Allium schoenoprasum L.), Cut and ground — Specification",
  },
  {
    sno: 11,
    isNumber: "IS 19439:2025",
    isTitle: "Spices and condiments — Dried sumac — Specification",
  },
  {
    sno: 12,
    isNumber: "IS 19303:2025",
    isTitle:
      "Tractors, machinery for agriculture and forestry, powered lawn and garden equipment — Safety labels — General principles (ISO 11684:2023)",
  },
  {
    sno: 13,
    isNumber: "IS 19361:2025",
    isTitle:
      "Unmanned aerial spraying systems — Requirements and test procedure",
  },
  {
    sno: 14,
    isNumber: "IS 19514:2026",
    isTitle:
      "Crop protection equipment — Belly-mounter hand-rotary duster — Specification",
  },
  {
    sno: 15,
    isNumber: "IS 19582:2026",
    isTitle:
      "Vegetable fats and oils — Determination of aflatoxins B1, B2, G1 and G2 by immunoaffinity column clean-up and high-performance liquid chromatography",
  },
  {
    sno: 16,
    isNumber: "IS 19287:2025",
    isTitle:
      "Sealed Silos for Storage of Foodgrains — Sealing Requirements",
  },
  {
    sno: 17,
    isNumber: "IS 19468:2026",
    isTitle:
      "Irrigation techniques — Localised/remote monitoring and control for irrigation Part 2 Tests",
  },
  {
    sno: 18,
    isNumber: "IS 8539 (Part 2):2025",
    isTitle:
      "Meat Products and Meat Animals — Terminology Part 2 Other Than Poultry",
  },
  {
    sno: 19,
    isNumber: "IS 19272:2025",
    isTitle: "Rotary Animal Restrainer — Specification",
  },
  {
    sno: 20,
    isNumber: "IS 19458:2025",
    isTitle:
      "Eggs and egg products — Determination of fipronil and metabolites residues — Liquid chromatography tandem mass spectrometry method (Adoption of ISO 7124:2023)",
  },
  {
    sno: 21,
    isNumber: "IS 19459:2025",
    isTitle:
      "Meat and meat products — Determination of nitrite and nitrate content — Ion chromatography method (Adoption of ISO 7158:2024)",
  },
  {
    sno: 22,
    isNumber: "IS 19457:2026",
    isTitle:
      "Meat and meat products — Determination hydroxyproline content (Adoption of ISO 3496:1994)",
  },
  {
    sno: 23,
    isNumber: "IS 19770:2026",
    isTitle: "Slaughterhouse Waste Management — Code of Practice",
  },
  {
    sno: 24,
    isNumber: "IS 19396:2025",
    isTitle:
      "Milk, Dried Milk Products and Cream — Determination of Fat Content — Gravimetric Method (Adoption of ISO 23318:2022)",
  },
  {
    sno: 25,
    isNumber: "IS 19434:2025",
    isTitle:
      "Mobile agro-processing units for food grains — Safety requirements",
  },
  {
    sno: 26,
    isNumber: "IS 19515:2026",
    isTitle: "Spiral Separator — Specification and Test code",
  },
  {
    sno: 27,
    isNumber: "IS 19589:2026",
    isTitle:
      "Plant Layout Optimal Process for Production of Biomass Pellets — Guidelines",
  },
  {
    sno: 28,
    isNumber: "IS 19588:2026",
    isTitle: "Biomass Shredder — Specification and Test Code",
  },
  {
    sno: 29,
    isNumber: "IS 19587:2026",
    isTitle: "Biomass Hammer Mill — Specification and Test Code",
  },
  {
    sno: 30,
    isNumber: "IS 19590:2026",
    isTitle:
      "Biomass Pelletiser — Ring Die Type — Specification and Test Code",
  },
  {
    sno: 31,
    isNumber: "IS 19586:2026",
    isTitle:
      "Biomass Pelletiser — Crank-Piston-Cylinder Type — Specification and Test Code",
  },
  {
    sno: 32,
    isNumber: "IS 19585:2026",
    isTitle:
      "Power operated coconut dehusker — Specification and Test code",
  },
  {
    sno: 33,
    isNumber: "IS 19308:2025",
    isTitle:
      "Determination of Vitamin B12 in Foods Using Liquid Chromatography and Tandem Mass Spectrometry (LC-MS/MS) — Method of Test",
  },
  {
    sno: 34,
    isNumber: "IS 18349 (Part 2):2025",
    isTitle:
      "Microbiology of the food chain — Horizontal method for the detection and enumeration of Clostridium spp Part 2 Enumeration of Clostridium perfringens by colony-count technique",
  },
  {
    sno: 35,
    isNumber: "IS 18349 (Part 3):2025",
    isTitle:
      "Microbiology of the food chain — Horizontal method for the detection and enumeration of Clostridium spp Part 3 Detection of Clostridium perfringens",
  },
  {
    sno: 36,
    isNumber: "IS 19333 (Part 1):2025",
    isTitle:
      "Water Quality — Detection and enumeration of Pseudomonas aeruginosa Part 1 Method by membrane filtration",
  },
  {
    sno: 37,
    isNumber: "IS 19333 (Part 2):2025",
    isTitle:
      "Water Quality — Detection and enumeration of Pseudomonas aeruginosa Part 2 Most probable number method",
  },
  {
    sno: 38,
    isNumber: "IS 19338:2025",
    isTitle:
      "Water Quality — The variability of test results and the uncertainty of measurement of microbiological enumeration methods",
  },
  {
    sno: 39,
    isNumber: "IS 19342:2025",
    isTitle:
      "Water Quality — Detection and enumeration of thermotolerant Campylobacter spp",
  },
  {
    sno: 40,
    isNumber: "IS 19353:2025",
    isTitle:
      "Microbiology of the Food Chain — Sampling Techniques for Microbiological Analysis of Food and Feed Samples",
  },
  {
    sno: 41,
    isNumber: "IS 19352:2025",
    isTitle:
      "Water Quality — Detection and Quantification of Legionella spp and/or Legionella Pneumophila by Concentration and Genic Amplification by Quantitative Polymerase Chain Reaction qPCR",
  },
  {
    sno: 42,
    isNumber: "IS 19200:2025",
    isTitle:
      "Water Quality — Isolation and identification of Cryptosporidium oocysts and Giardia cysts from water",
  },
];

const electronicsAndInformationTechnologyDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS/IEC 60068-2-11:2021",
    isTitle:
      "Environmental Testing Part 2: Tests Section 11: Test Ka - Salt mist",
  },
  {
    sno: 2,
    isNumber: "IS 62402:2019",
    isTitle:
      "Obsolescence management ( Superseding IS 16958 : 2018)",
  },
  {
    sno: 3,
    isNumber: "IS 61709:2017",
    isTitle:
      "Electric components Reliability Reference conditions for failure rates and stress models for conversion (Superseding IS 7354 (Part 3): 2011)",
  },
  {
    sno: 4,
    isNumber: "IS 61703:2016",
    isTitle:
      "Mathematical expressions for reliability availability maintainability and maintenance support terms",
  },
  {
    sno: 5,
    isNumber: "IS/IEC 61649:2008",
    isTitle: "Weibull Analysis",
  },
  {
    sno: 6,
    isNumber: "IS/IEC 62429:2007",
    isTitle:
      "Reliability growth Stress testing for early failures in unique complex systems",
  },
  {
    sno: 7,
    isNumber: "IS 62550:2017",
    isTitle: "Spare Parts Provisioning",
  },
  {
    sno: 8,
    isNumber: "IS 62740:2015",
    isTitle: "Root cause analysis RCA",
  },
  {
    sno: 9,
    isNumber: "IS/IEC 62308:2006",
    isTitle: "Equipment Reliability Reliability assessment methods",
  },
  {
    sno: 10,
    isNumber: "IS/IEC 60068-2-21:2021",
    isTitle:
      "Environmental Testing Part 2: Tests Section 21: Test U: Robustness of Terminations and Integral Mounting Devices Superseding IS 9000 Part 19Section 1 to 5:1986",
  },
  {
    sno: 11,
    isNumber: "IS/IEC 60115-2:2023",
    isTitle:
      "Fixed resistors for use in electronic equipment Part 2 Sectional specification: Low-power film resistors with leads for through-hole assembly on circuit boards (THT)",
  },
  {
    sno: 12,
    isNumber: "IS/IEC 60958-4-2:2016",
    isTitle:
      "Digital Audio Interface - Part 4: Professional Applications - Section 2: Metadata and Subcode",
  },
  {
    sno: 13,
    isNumber: "IS/IEC 60958-4-4:2016",
    isTitle:
      "Digital Audio Interface - Part 4: Professional Applications - Section 4: Physical and Electrical Parameters",
  },
  {
    sno: 14,
    isNumber: "IS 62680 (Part 4):2022",
    isTitle:
      "Universal Serial Bus Interfaces for Data and Power - Part 4-1: Universal Serial Bus 4 Specification",
  },
  {
    sno: 15,
    isNumber: "IS 9989 (Part 2):2025",
    isTitle:
      "Acoustics Description Measurement and Assessment of Environmental Noise Part 2: Determination of Sound Pressure Levels",
  },
  {
    sno: 16,
    isNumber: "IS 1996 (Part 1):2016",
    isTitle:
      "Acoustics Description Measurement and Assessment of Environmental Noise Part 1: Basic Quantities and Assessment Procedures",
  },
  {
    sno: 17,
    isNumber: "IS/IEC 60461:2021",
    isTitle: "Time and control code",
  },
  {
    sno: 18,
    isNumber: "IS/IEC 63002:2025",
    isTitle:
      "Interoperability Specifications and Communication Method for External Power Supplies used with Computing and Consumer Electronics Devices",
  },
  {
    sno: 19,
    isNumber: "IS 19367:2025",
    isTitle:
      "Nuclear power plants - Instrumentation control and electrical power systems important to safety - Categorization of functions and classification of systems",
  },
  {
    sno: 20,
    isNumber: "IS 14700 (Part 5/Sec 1):2026",
    isTitle:
      "Electromagnetic Compatibility EMC Part 5: Installation and Mitigation Guidelines Section 1: General Considerations",
  },
  {
    sno: 21,
    isNumber: "IS 15040:2026",
    isTitle:
      "Vehicles Boats and Internal Combustion Engines - Radio Disturbance Characteristics Limits and Methods of Measurement for the Protection of On-Board Receivers",
  },
  {
    sno: 22,
    isNumber: "IS/IEC 62232:2022",
    isTitle:
      "Determination of RF field strength power density and SAR in the vicinity of base stations for the purpose of evaluating human exposure",
  },
  {
    sno: 23,
    isNumber: "IS/IEC/IEEE-2:2022",
    isTitle:
      "Assessment of Power Density of Human Exposure to Radio Frequency Fields from Wireless Devices in Close Proximity to the Head and Body Frequency Range of 6 Ghz to 300 Ghz Part 2 Computational Procedure",
  },
  {
    sno: 24,
    isNumber: "IS/IEC/IEEE 63195-1:2022",
    isTitle:
      "Assessment of Power Density of Human Exposure to Radio Frequency Fields from Wireless Devices in Close Proximity to the Head and Body Frequency Range of 6 Ghz to 300 Ghz Part 1: Measurement Procedure",
  },
  {
    sno: 25,
    isNumber: "IS/IEC 61000-5-2:2026",
    isTitle:
      "Electromagnetic Compatibility EMC Part 5: Installation and Mitigation Guidelines Section 2: Earthing and Cabling",
  },
  {
    sno: 26,
    isNumber: "IS/ISO/IEC 11801-4:2017",
    isTitle:
      "Information technology Generic cabling for customer premises Part 4: Single-tenant homes",
  },
  {
    sno: 27,
    isNumber: "IS/ISO/IEC 11801-9908:2020",
    isTitle:
      "Information technology Generic cabling systems for customer premises Part 9908: Guidance for the support of higher speed applications over optical fibre channels",
  },
  {
    sno: 28,
    isNumber: "IS/ISO/IEC 11801-9910:2020",
    isTitle:
      "Information technology Generic cabling systems for customer premises Part 9910: Specifications for modular plug terminated link cabling",
  },
  {
    sno: 29,
    isNumber: "IS/ISO/IEC 11801-6:2017",
    isTitle:
      "Information technology Generic cabling for customer premises Part 6: Distributed building services",
  },
  {
    sno: 30,
    isNumber: "IS/ISO/IEC 11801-9909:2020",
    isTitle:
      "Information technology Generic cabling systems for customer premises Part 9909: Evaluation of balanced cabling in support of 25 Gbits for reach greater than 30 metres",
  },
  {
    sno: 31,
    isNumber: "IS 19319:2025",
    isTitle:
      "Internet of Things Security and Privacy - Assessment and Evaluation",
  },
  {
    sno: 32,
    isNumber: "IS/ISO/IEC 27561:2024",
    isTitle:
      "Information Security Cybersecurity and Privacy Protection Privacy Operationalisation Model and Method for Engineering POMME",
  },
  {
    sno: 33,
    isNumber: "IS/ISO/IEC 27033-7:2023",
    isTitle:
      "Information technology Network security Part 7: Guidelines for network virtualization security",
  },
  {
    sno: 34,
    isNumber: "IS/ISO/IEC 27403:2024",
    isTitle:
      "Cybersecurity IoT security and privacy Guidelines for IoT-domotics",
  },
  {
    sno: 35,
    isNumber: "IS/ISO/IEC 27035-4:2024",
    isTitle:
      "Information Technology Information Security Incident Management Part 4: Coordination",
  },
  {
    sno: 36,
    isNumber: "IS/ISO/IEC 20013:2020",
    isTitle:
      "Information technology for learning education and training Reference framework of e-Portfolio information",
  },
  {
    sno: 37,
    isNumber: "IS 19450:2025",
    isTitle: "Requirements for E-Textbooks in Education",
  },
  {
    sno: 38,
    isNumber: "IS 18888 (Part 2):2025",
    isTitle:
      "Code of Practice for Designing Online Course Contents and Quality Assessment of Course Content Delivery Platform Part 2: Online Course Contents Quality Model and Assessment Methodology",
  },
  {
    sno: 39,
    isNumber: "IS 18888 (Part 3):2026",
    isTitle:
      "Designing Online Course Contents and Quality Assessment of Course Content & Delivery Platform —Code of Practice Part 3 Online Course Hosting Platform Quality Model and Assessment Methodology",
  },
  {
    sno: 40,
    isNumber: "IS 19321:2025",
    isTitle: "Navic Receiver - Specification",
  },
  {
    sno: 41,
    isNumber: "IS 19583:2026",
    isTitle: "Orthoimagery- Data Acquisition and Accuracy Assessment",
  },
  {
    sno: 42,
    isNumber: "IS 1885 (Part 90):2025",
    isTitle:
      "Electrotechnical Vocabulary Part 89 Magnetic Materials and Components",
  },
  {
    sno: 43,
    isNumber: "IS 19526:2026",
    isTitle: "Digital Platform Conformity Assessment",
  },
  {
    sno: 44,
    isNumber: "IS/IEC 62820-1-2:2017",
    isTitle:
      "Building intercom systems Part 1-2: System requirements Building intercom systems using the internet protocol IP",
  },
  {
    sno: 45,
    isNumber: "IS/IEC 62820-3-1:2017",
    isTitle:
      "Building intercom systems Part 3-1: Application guidelines General",
  },
  {
    sno: 46,
    isNumber: "IS/IEC 62820-3-2:2018",
    isTitle:
      "Building intercom systems Part 3-2: Application guidelines Advanced security building intercom systems ASBIS",
  },
  {
    sno: 47,
    isNumber: "IS 16910 (Part 5/Sec 1):2026",
    isTitle:
      "Video surveillance systems for use in security applications Part 5-1: Data specifications and image quality performance for camera devices Environmental test methods for image quality performance",
  },
  {
    sno: 48,
    isNumber: "IS/IEC 62851-1:2014",
    isTitle:
      "Alarm and electronic security systems Social alarm systems Part 1: System requirements",
  },
  {
    sno: 49,
    isNumber: "IS/IEC 62851-3:2014",
    isTitle:
      "Alarm and electronic security systems Social alarm systems Part 3: Local unit and controller",
  },
  {
    sno: 50,
    isNumber: "IS 16910 (Part 2/Sec 33):2026",
    isTitle:
      "Video surveillance systems for use in security applications Part 2-33: Video transmission protocols Cloud uplink and remote management system access",
  },
  {
    sno: 51,
    isNumber: "IS/IEC 62820-2:2017",
    isTitle:
      "Building intercom systems Part 2: System requirements Building intercom systems using the Internet Protocol IP",
  },
  {
    sno: 52,
    isNumber: "IS 16910 (Part 2/Sec 11):2026",
    isTitle:
      "Video Surveillance Systems VSS for use in security applications - Part 2-11: Video transmission protocols - Interop profiles for VMS and cloud VSaaS systems for safe cities and law enforcement",
  },
  {
    sno: 53,
    isNumber: "IS/IEC 62851-2:2014",
    isTitle:
      "Alarm and electronic security systems - Social alarm systems - Part 2: Trigger devices",
  },
  {
    sno: 54,
    isNumber: "IS/IEC 62851-5:2014",
    isTitle:
      "Alarm and electronic security systems Social alarm systems Part 5: Interconnections and communications",
  },
  {
    sno: 55,
    isNumber: "IS 19386:2025",
    isTitle: "Internet of Things (IoT) and Digital Twin — Vocabulary",
  },
  {
    sno: 56,
    isNumber: "IS 19394:2025",
    isTitle: "Digital Twin — Concepts and Terminology",
  },
  {
    sno: 57,
    isNumber: "IS 19395:2025",
    isTitle: "Internet of things (IoT) — Real-time IoT framework",
  },
  {
    sno: 58,
    isNumber: "IS 19398:2025",
    isTitle:
      "Internet of Things (IoT) — Compatibility Requirements and Model for Devices within Industrial IoT Systems",
  },
  {
    sno: 59,
    isNumber: "IS 19403:2025",
    isTitle: "Internet of Things (IoT) — Trustworthiness principles",
  },
  {
    sno: 60,
    isNumber: "IS 19416:2025",
    isTitle: "Internet of Things (loT) — Digital Twin — Use Cases",
  },
  {
    sno: 61,
    isNumber: "IS 19629:2026",
    isTitle:
      "Internet of Things (IoT) - IoT for Stress Management , Good Health and Well-Being",
  },
  {
    sno: 62,
    isNumber: "IS 18003 (Part 4/Sec 1):2025",
    isTitle:
      "Unified Data Exchange Part 4: Compliance Specifications Section 1: Catalogue Service",
  },
  {
    sno: 63,
    isNumber: "IS 18006 (Part 4/Sec 1):2025",
    isTitle:
      "Municipal Governance Part 4: Fire No Objection Certificate NoC Section 1: Taxonomy",
  },
  {
    sno: 64,
    isNumber: "IS 18006 (Part 5/Sec 1):2025",
    isTitle:
      "Municipal Governance Part 5: Municipal Grievance Redressal Section 1: Taxonomy",
  },
  {
    sno: 65,
    isNumber: "IS 18006 (Part 6/Sec 1):2025",
    isTitle:
      "Municipal Governance Part 6: Trade License Section 1: Taxonomy",
  },
  {
    sno: 66,
    isNumber: "IS/ISO 22739:2026",
    isTitle:
      "Blockchain and Distributed Ledger Technologies — Vocabulary (First Revision)",
  },
  {
    sno: 67,
    isNumber: "IS/ISO 23644:2023",
    isTitle:
      "Blockchain and Distributed Ledger Technologies (DLTs) - Overview of Trust Anchors for DLT-Based Identity Management",
  },
  {
    sno: 68,
    isNumber: "IS/ISO 6039:2023",
    isTitle:
      "Blockchain and Distributed Ledger Technologies - Identifiers of Subjects and Objects for the Design of Blockchain Systems",
  },
  {
    sno: 69,
    isNumber: "IS/ISO/IEC 5259-1:2024",
    isTitle:
      "Artificial Intelligence Data Quality for Analytics and Machine Learning ML Part 1: Overview Terminology and Examples",
  },
  {
    sno: 70,
    isNumber: "IS/ISO/IEC 5259-2:2024",
    isTitle:
      "Artificial Intelligence Data Quality for Analytics and Machine Learning ML Part 2: Data Quality Measures",
  },
  {
    sno: 71,
    isNumber: "IS/ISO/IEC 5259-3:2024",
    isTitle:
      "Artificial Intelligence Data Quality for Analytics and Machine Learning ML Part 3: Data Quality Management Requirements and Guidelines",
  },
  {
    sno: 72,
    isNumber: "IS/ISO/IEC 5259-4:2024",
    isTitle:
      "Artificial intelligence Data Quality for Analytics and Machine Learning ML Part 4: Data Quality Process Framework",
  },
  {
    sno: 73,
    isNumber: "IS/ISO/IEC 5259-5:2025",
    isTitle:
      "Artificial Intelligence — Data Quality for Analytics and Machine Learning (ML) Part 5 Data Quality Governance Framework",
  },
  {
    sno: 74,
    isNumber: "IS/ISO/IEC 42005:2025",
    isTitle:
      "Information technology Artificial intelligence AI AI system impact assessment",
  },
  {
    sno: 75,
    isNumber: "IS/ISO/IEC 42006:2025",
    isTitle:
      "Information technology Artificial intelligence AI Requirements for bodies providing audit and certification of artificial intelligence management systems",
  },
  {
    sno: 76,
    isNumber: "IS/ISO/IECTR 20226:2025",
    isTitle:
      "Information technology Artificial intelligence AI Environmental sustainability aspects of AI systems",
  },
  {
    sno: 77,
    isNumber: "IS/ISO/IECTS 12791:2024",
    isTitle:
      "Information technology Artificial intelligence AI Treatment of unwanted bias in classification and regression machine learning tasks",
  },
  {
    sno: 78,
    isNumber: "IS/ISO/IECTR 24027:2021",
    isTitle:
      "Information technology Artificial intelligence AI Bias in AI systems and AI aided decision making",
  },
  {
    sno: 79,
    isNumber: "IS/ISO/IEC 22123-2:2023",
    isTitle: "Information technology Cloud computing Part 2: Concepts",
  },
  {
    sno: 80,
    isNumber: "IS/ISO/IEC 30134-7:2023",
    isTitle:
      "Information technology — Data centres key performance indicators — Part 7: Cooling efficiency ratio (CER)",
  },
  {
    sno: 81,
    isNumber: "IS/ISO/IEC 5140:2024",
    isTitle:
      "Information technology Cloud computing Concepts for multi-cloud and the use of multiple cloud services",
  },
  {
    sno: 82,
    isNumber: "IS/ISO/IEC 22123-3:2023",
    isTitle:
      "Information technology Cloud computing Part 3: Reference architecture",
  },
  {
    sno: 83,
    isNumber: "IS/ISO/IECTR 10822-1:2025",
    isTitle:
      "Cloud computing — Multi-Cloud management Part 1: Overview and use cases",
  },
  {
    sno: 84,
    isNumber: "IS/ISO/IEC 22237-2:2024",
    isTitle:
      "Information technology — Data centre facilities and infrastructures Part 2: Building construction",
  },
  {
    sno: 85,
    isNumber: "IS/ISO/IEC 22237-6:2024",
    isTitle:
      "Information technology — Data centre facilities and infrastructures Part 6: Security systems",
  },
  {
    sno: 86,
    isNumber: "IS/ISO/IEC 19795-1:2021",
    isTitle:
      "Information Technology Biometric Performance Testing and Reporting Part 1: Principles and Framework",
  },
  {
    sno: 87,
    isNumber: "IS 19380 (Part 4):2025",
    isTitle:
      "Information technology Use of biometrics in video surveillance systems Part 4: Ground truth and video annotation procedure",
  },
  {
    sno: 88,
    isNumber: "IS 19380 (Part 1):2025",
    isTitle:
      "Information technology Use of biometrics in video surveillance systems Part 1: System design and specification",
  },
  {
    sno: 89,
    isNumber: "IS/ISO/IEC 2382-37:2022",
    isTitle: "Information Technology Vocabulary Part 37: Biometrics",
  },
  {
    sno: 90,
    isNumber: "IS/IEC 63203-201-1:2022",
    isTitle:
      "Wearable Electronic Devices and Technologies Part 201: Electronic Textile Section 1: Measurement Methods for Basic Properties of Conductive Yarns",
  },
  {
    sno: 91,
    isNumber: "IS 19454:2026",
    isTitle: "Writable Functional Inks for Pens Conductive and Resistive",
  },
  {
    sno: 92,
    isNumber: "IS 63240 (Part 1):2026",
    isTitle:
      "Active Assisted Living AAL Reference Architecture and Architecture Model Part 1: Reference Architecture",
  },
  {
    sno: 93,
    isNumber: "IS/IEC 63240-2:2020",
    isTitle:
      "Active Assisted Living AAL Reference Architecture and Architecture Model Part 2: Architecture Model",
  },
  {
    sno: 94,
    isNumber: "IS 63416:2026",
    isTitle:
      "Ethical Considerations of Artificial Intelligence AI When Applied in the Active Assisted Living AAL Context",
  },
];

const mechanicalEngineeringDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 302 (Part 2/Sec 40):2025",
    isTitle:
      "Safety of Household and Similar Electrical Appliances Part 2 Particular Requirements Sec 40 Electrical Heat Pumps, Air-Conditioners and Dehumidifiers (IEC 60335-2-40 : 2022, MOD)",
  },
  {
    sno: 2,
    isNumber: "IS 19409:2025",
    isTitle:
      "SERVICE VALVES FOR AIR CONDITIONING AND REFRIGERATION PURPOSES - SPECIFICATION",
  },
  {
    sno: 3,
    isNumber: "IS 19557:2026",
    isTitle:
      "Clean Cookstoves and Clean Cooking Solutions — Test Protocols for Institutional Cookstoves",
  },
  {
    sno: 4,
    isNumber: "IS/ISO 10263-5:2009",
    isTitle:
      "Earth-moving machinery Operator enclosure environment Part 5 Windscreen defrosting system test method",
  },
  {
    sno: 5,
    isNumber: "IS 19539:2026",
    isTitle:
      "Earth-moving machinery Product identification numbering system",
  },
  {
    sno: 6,
    isNumber: "IS 19542 (Part 2):2026",
    isTitle:
      "Earth-moving machinery Operators manual Part 2 List of references",
  },
  {
    sno: 7,
    isNumber: "IS 19541:2026",
    isTitle:
      "Earth-moving machinery Hydraulic breakers Terminology and commercial specifications",
  },
  {
    sno: 8,
    isNumber: "IS 19540:2026",
    isTitle:
      "Earth-moving machinery - Tip-over protection structure TOPS for compact excavators - Laboratory tests and performance requirements",
  },
  {
    sno: 9,
    isNumber: "IS 19363:2025",
    isTitle:
      "METALLIC OR POLYMER COATED WELDED WIRE MESH FENCING SPECIFICATION",
  },
  {
    sno: 10,
    isNumber: "IS 19747:2026",
    isTitle:
      "Steel wire ropes — Determination of the actual modulus of elasticity",
  },
  {
    sno: 11,
    isNumber: "IS 19745:2026",
    isTitle:
      "STEEL WIRE ROPES — DETERMINATION OF THE TRANSVERS RIGIDITY OF STEEL WIRE ROPES UNDER NO AXIAL LOAD CONDITION",
  },
  {
    sno: 12,
    isNumber: "IS 19746:2026",
    isTitle:
      "STEEL WIRE ROPES — DETERMINATION OF ROTATIONAL PROPERTIES",
  },
  {
    sno: 13,
    isNumber: "IS 19309:2025",
    isTitle: "CRANES REQUIREMENTS FOR TEST LOADS",
  },
  {
    sno: 14,
    isNumber: "IS 19543 (Part 1):2026",
    isTitle:
      "PLASTICS AND RUBBER MACHINES CLAMPING SYSTEMS PART 1 SAFETY REQUIREMENTS FOR MAGNETIC CLAMPING SYSTEMS",
  },
  {
    sno: 15,
    isNumber: "IS 19316 (Part 1):2025",
    isTitle:
      "Building Construction Machinery and Equipment — Machinery for Concrete Surface Floating and Finishing Part 1 Commercial Specifications (Adoption of ISO 13105-1)",
  },
  {
    sno: 16,
    isNumber: "IS 19322 (Part 2):2025",
    isTitle:
      "Building Construction Machinery and Equipment Concrete Pumps Part 2 Procedure for Examination of Technical Parameters (Modified Adoption of ISO 21573-2)",
  },
  {
    sno: 17,
    isNumber: "IS 19316 (Part 2):2026",
    isTitle:
      "Building Construction Machinery and Equipment Machinery for Concrete Surface Floating and Finishing Part 2 Safety Requirements and Verification Adoption of ISO 13105-2",
  },
  {
    sno: 18,
    isNumber: "IS 19565 (Part 2):2026",
    isTitle:
      "Building Construction Machinery and Equipment Truck Mixers Part 2 Safety Requirements Adoption of ISO 19711-2",
  },
  {
    sno: 19,
    isNumber: "IS 19570 (Part 1):2026",
    isTitle:
      "Building Construction Machinery and Equipment Plants for the Preparation of Concrete and Mortar Part 1 Terminology and Commercial Specifications Adoption of ISO 19720-1",
  },
  {
    sno: 20,
    isNumber: "IS 19573:2026",
    isTitle:
      "Road Construction and Maintenance Equipment Chippings Spreaders Terminology and Commercial Specifications Adoption of ISO 15644",
  },
  {
    sno: 21,
    isNumber: "IS 19574:2026",
    isTitle:
      "Road Construction and Maintenance Equipment Powder Binder Spreaders Terminology and Commercial Specification Adoption of ISO 15689",
  },
  {
    sno: 22,
    isNumber: "IS 19572:2026",
    isTitle:
      "Drilling and Foundation Machinery Horizontal Directional Drilling HDD Machines Commercial Specifications Adoption of ISO 21467",
  },
  {
    sno: 23,
    isNumber: "IS 19565 (Part 1):2026",
    isTitle:
      "Building Construction Machinery and Equipment Truck Mixers Part 1 Terminology and Commercial Specifications Adoption of ISO 19711-1",
  },
  {
    sno: 24,
    isNumber: "IS 19560:2026",
    isTitle:
      "Road Operation Machinery and Associated Equipment Sweepers Commercial Specifications Adoption of ISO 24147",
  },
  {
    sno: 25,
    isNumber: "IS 19568:2026",
    isTitle:
      "Building Construction Machinery and Equipment Classification Adoption of ISO/TR 12603",
  },
  {
    sno: 26,
    isNumber: "IS 19567:2026",
    isTitle:
      "Building Construction Machinery and Equipment Pedestrian-Controlled Vibratory Percussion Rammers Terminology and Commercial Specifications Adoption of ISO 19452",
  },
  {
    sno: 27,
    isNumber: "IS 19564 (Part 1):2026",
    isTitle:
      "Building Construction Machinery and Equipment Mobile Crushers Part 1 Terminology and Commercial Specifications Adoption of ISO 21873-1",
  },
  {
    sno: 28,
    isNumber: "IS 19571:2026",
    isTitle:
      "Building Construction Machinery and Equipment Concrete Spraying Machines Terminology and Commercial Specifications Adoption of ISO 21592",
  },
  {
    sno: 29,
    isNumber: "IS 19569:2026",
    isTitle:
      "Building Construction Machinery and Equipment Pedestrian-Controlled Vibratory Plates Terminology and Commercial Specifications Adoption of ISO 19433",
  },
  {
    sno: 30,
    isNumber: "IS 19566 (Part 1):2026",
    isTitle:
      "Building Construction Machinery and Equipment Concrete Placing Systems for Stationary Equipment Part 1 Terminology and Commercial Specifications Adoption of ISO 17740-1",
  },
  {
    sno: 31,
    isNumber: "IS 19743:2026",
    isTitle:
      "Building Construction Machinery and Equipment Pile Driving and Extracting Equipment Terminology and Commercial Specifications Adoption of ISO 11886",
  },
  {
    sno: 32,
    isNumber: "IS 19765:2026",
    isTitle:
      "Road Construction and Maintenance Equipment — Pavers-finishers — Commercial Specifications (First Revision)",
  },
  {
    sno: 33,
    isNumber: "IS 19687:2026",
    isTitle:
      "Safety Guidelines and General Precautions for Abandonment of Tube Wells and Bore Wells",
  },
  {
    sno: 34,
    isNumber: "IS 19603:2026",
    isTitle:
      "Petroleum, chemical and gas service industries — Packaged, integrally geared centrifugal air compressors (Adoption of ISO 10442: 2002)",
  },
  {
    sno: 35,
    isNumber: "IS 19605 (Part 1):2026",
    isTitle:
      "Petroleum, petrochemical and natural gas industries — Axial and centrifugal compressors and expander compressors — Part 1: General requirements (Adoption of ISO 10439-1: 2015)",
  },
  {
    sno: 36,
    isNumber: "IS 19605 (Part 2):2026",
    isTitle:
      "Petroleum, petrochemical and natural gas industries — Axial and centrifugal compressors and expander compressors — Part 2: Non-integrally geared centrifugal and axial compressors (Adoption of ISO 10439-2: 2015)",
  },
  {
    sno: 37,
    isNumber: "IS 19605 (Part 3):2026",
    isTitle:
      "Petroleum, petrochemical and natural gas industries — Axial and centrifugal compressors and expander compressors — Part 3: Integrally geared centrifugal compressors (Adoption of ISO 10439-3: 2015)",
  },
  {
    sno: 38,
    isNumber: "IS 19605 (Part 4):2026",
    isTitle:
      "Petroleum, petrochemical and natural gas industries — Axial and centrifugal compressors and expander compressors — Part 4: Expander-compressors (Adoption of ISO 10439-4: 2015)",
  },
  {
    sno: 39,
    isNumber: "IS 19604 (Part 1):2026",
    isTitle:
      "Petroleum, petrochemical and natural gas industries — Rotary-type positive displacement compressors — Part 1: Process compressors (Adoption of ISO 10440-1: 2007)",
  },
  {
    sno: 40,
    isNumber: "IS 19604 (Part 2):2026",
    isTitle:
      "Petroleum and natural gas industries — Rotary-type positive-displacement compressors — Part 2: Packaged air compressors (oil-free) (Adoption of ISO 10440-2: 2001)",
  },
  {
    sno: 41,
    isNumber: "IS 19461:2025",
    isTitle:
      "ELECTRONIC LOCKS FOR SECURITY EQUIPMENT SPECIFICATIONS",
  },
  {
    sno: 42,
    isNumber: "IS 19455:2026",
    isTitle: "Gasket and packing Glossary of terms",
  },
  {
    sno: 43,
    isNumber: "IS 19599:2026",
    isTitle:
      "Gaskets and Packings Oxidation of Expanded Graphite Methods of Test",
  },
  {
    sno: 44,
    isNumber: "IS 19606:2026",
    isTitle: "Non-Asbestos Beater Addition Jointing Specification",
  },
  {
    sno: 45,
    isNumber: "IS 19600:2026",
    isTitle: "Gasket and Packing Flexible Graphite Material Specification",
  },
  {
    sno: 46,
    isNumber: "IS 19584:2026",
    isTitle:
      "Natural Gas Fuelling Stations — LNG Stations for Fuelling Vehicles (ISO 16924 : 2016, MOD)",
  },
  {
    sno: 47,
    isNumber: "IS 19558 (Part 3):2026",
    isTitle:
      "Energy Audits Part 3 Guidance for Conducting an Energy Audit using ISO 50002-1 in Processes",
  },
  {
    sno: 48,
    isNumber: "IS 19558 (Part 2):2026",
    isTitle:
      "Energy Audits Part 2 Guidance for Conducting an Energy Audit using ISO 50002-1 in Buildings",
  },
  {
    sno: 49,
    isNumber: "IS 18988 (Part 3):2025",
    isTitle:
      "Safety of machinery - Relationship with ISO 12100 Part 3 Implementation of ergonomic principles in safety standards",
  },
  {
    sno: 50,
    isNumber: "IS 19551:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Determination of Emission Sound Pressure Levels at a Work Station and at other Specified Positions Applying Approximate Environmental Corrections",
  },
  {
    sno: 51,
    isNumber: "IS 19549:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Determination of Emission Sound Pressure Levels at a Work Station and at other Specified Positions in an Essentially Free Field over a Reflecting Plane with Negligible Environmental Corrections",
  },
  {
    sno: 52,
    isNumber: "IS 19544 (Part 1):2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources Using Sound Pressure — Engineering Methods for Small Movable Sources in Reverberant Fields Part 1 Comparison Method for a Hard-Walled Test Room",
  },
  {
    sno: 53,
    isNumber: "IS 19548:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Determination of Emission Sound Pressure Levels at a Work Station and at other Specified Positions from the Sound Power Level",
  },
  {
    sno: 54,
    isNumber: "IS 19547:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Determination of Emission Sound Pressure Levels at a Work Station and at other Specified Positions Applying Accurate Environmental Corrections",
  },
  {
    sno: 55,
    isNumber: "IS 19545:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Engineering Method for the Determination of Emission Sound Pressure Levels in Situ at the Work Station and at other Specified Positions using Sound Intensity",
  },
  {
    sno: 56,
    isNumber: "IS 19553:2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources using Sound Pressure — Survey Method Using an Enveloping Measurement Surface over a Reflecting Plane",
  },
  {
    sno: 57,
    isNumber: "IS 19552:2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources using Sound Pressure — Engineering/Survey Methods for use in Situ in a Reverberant Environment",
  },
  {
    sno: 58,
    isNumber: "IS 19550:2026",
    isTitle:
      "Acoustics — Noise Emitted by Machinery and Equipment — Guidelines for the use of Basic Standards for the Determination of Emission Sound Pressure Levels at a Work Station and at other Specified Positions",
  },
  {
    sno: 59,
    isNumber: "IS 19546:2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources using Sound Pressure — Precision Methods for Reverberation Test Rooms",
  },
  {
    sno: 60,
    isNumber: "IS 19544 (Part 2):2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels of Noise Sources Using Sound Pressure — Engineering Methods for Small, Movable Sources in Reverberant Fields Part 2 Methods for Special Reverberation Test Rooms",
  },
  {
    sno: 61,
    isNumber: "IS 19554:2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources Using Sound Pressure — Precision Methods for Anechoic Rooms and Hemi-Anechoic Rooms",
  },
  {
    sno: 62,
    isNumber: "IS 19555:2026",
    isTitle:
      "Acoustics — Determination of Sound Power Levels and Sound Energy Levels of Noise Sources using Sound Pressure — Engineering Methods for an Essentially Free Field over a Reflecting Plane",
  },
];

const medicalEquipmentAndHospitalPlanningDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19233 (Part 1):2025",
    isTitle:
      "Implants for Surgery - Coatings on Metallic Surgical Implants Part 1 Plasma-Sprayed Coatings Derived from Titanium or Titanium 6 Aluminum-4 Vanadium Alloy Powders",
  },
  {
    sno: 2,
    isNumber: "IS 19503:2026",
    isTitle:
      "Implants for Surgery Determination of Impact Resistance of Ceramic Femoral Heads for Hip Joint Prostheses",
  },
  {
    sno: 3,
    isNumber: "IS 19504:2026",
    isTitle:
      "Implants for Surgery Mechanical Testing of Implantable Spinal Devices Fatigue Test Method for Spinal Implant Assemblies Using an Anterior Support",
  },
  {
    sno: 4,
    isNumber: "IS 19491:2026",
    isTitle:
      "Implants for Surgery Test Solutions and Environmental Conditions for Static and Dynamic Corrosion Tests on Implantable Materials and Medical Devices",
  },
  {
    sno: 5,
    isNumber: "IS 19502:2026",
    isTitle:
      "Implants for Surgery Measurements of Open-circuit Potential to Assess Corrosion Behaviour of Metallic Implantable Materials and Medical Devices Over Extended Time Periods",
  },
  {
    sno: 6,
    isNumber: "IS 19492 (Part 1):2025",
    isTitle:
      "Implants for Surgery - Wear of Total Intervertebral Spinal Disc Prostheses Part 1 Loading and Displacement Parameters for Wear Testing and Corresponding Environmental Conditions for Test",
  },
  {
    sno: 7,
    isNumber: "IS 19501 (Part 1):2026",
    isTitle:
      "Implants for Surgery Orthopaedic Joint Prosthesis Part 1 Procedure for Producing Parametric 3D Bone Models from CT Data of the Knee",
  },
  {
    sno: 8,
    isNumber: "IS 19499:2026",
    isTitle:
      "Implants for Surgery Metallic Materials Classification of Microstructures for AlphaBeta Titanium Alloy Bars",
  },
  {
    sno: 9,
    isNumber: "IS 19500:2026",
    isTitle:
      "Implants for Surgery Wear of Total Ankle-Joint Prostheses Loading and Displacement Parameters for Wear-Testing Machines with Load or Displacement Control and Corresponding Environmental Conditions for Test",
  },
  {
    sno: 10,
    isNumber: "IS 19490 (Part 2):2026",
    isTitle:
      "Implants for Surgery Metal Intramedullary Nailing Systems Part 2 Locking Components",
  },
  {
    sno: 11,
    isNumber: "IS 19489:2026",
    isTitle:
      "Non-active Surgical Implants Implants for Osteosynthesis Particular Requirements",
  },
  {
    sno: 12,
    isNumber: "IS 19492 (Part 2):2026",
    isTitle:
      "Implants for Surgery Wear of Total Intervertebral Spinal Disc Prostheses Part 2 Nucleus Replacements",
  },
  {
    sno: 13,
    isNumber: "IS 19490 (Part 3):2026",
    isTitle:
      "Implants for Surgery Metal Intramedullary Nailing Systems Part 3 Connection Devices and Reamer Diameter Measurements",
  },
  {
    sno: 14,
    isNumber: "IS 19512 (Part 2):2025",
    isTitle:
      "Implants for Surgery Pre-Clinical Mechanical Assessment of Spinal Implants and Particular Requirements Part 2 Spinal Intervertebral Body Fusion Devices",
  },
  {
    sno: 15,
    isNumber: "IS 19697:2026",
    isTitle:
      "Compatibility of lubricants with synthetic male condoms",
  },
  {
    sno: 16,
    isNumber: "IS 19383:2025",
    isTitle:
      "Audiometric Test Room - Specification",
  },
  {
    sno: 17,
    isNumber: "IS 19476:2025",
    isTitle:
      "Pure-tone and Speech Audiometers - Specification",
  },
  {
    sno: 18,
    isNumber: "IS 19731:2026",
    isTitle:
      "ENT Surgery Instruments –– Otology Drill — Specification",
  },
  {
    sno: 19,
    isNumber: "IS 19791:2026",
    isTitle:
      "ENT Surgery Instruments –– Microdebrider — Specification",
  },
  {
    sno: 20,
    isNumber: "IS 19379:2026",
    isTitle:
      "Optics and Optical Instruments Ophthalmic Optics Formers",
  },
  {
    sno: 21,
    isNumber: "IS 19443:2026",
    isTitle:
      "Ophthalmic optics Contact lens care products Microbiological requirements and test methods for products and regimens for hygienic management of contact lenses",
  },
  {
    sno: 22,
    isNumber: "IS 19399:2026",
    isTitle:
      "Ophthalmic optics Contact lenses Determination of shelf-life",
  },
  {
    sno: 23,
    isNumber: "IS 19419:2026",
    isTitle:
      "Ophthalmic optics Contact lenses and contact lens care products Guidance for clinical investigations",
  },
  {
    sno: 24,
    isNumber: "IS 19475:2026",
    isTitle:
      "Ophthalmic optics Contact lens care products Guidelines for determination of shelf-life",
  },
  {
    sno: 25,
    isNumber: "IS 19402:2026",
    isTitle:
      "Ophthalmic optics Contact lens care products Antimicrobial preservative efficacy testing and guidance on determining discard date",
  },
  {
    sno: 26,
    isNumber: "IS 19369:2026",
    isTitle:
      "Ophthalmic optics Contact lenses Hygienic management of multipatient use trial contact lenses",
  },
  {
    sno: 27,
    isNumber: "IS 19422:2026",
    isTitle:
      "Ophthalmic optics Spectacle lenses Short wavelength visible solar radiation and the eye",
  },
  {
    sno: 28,
    isNumber: "IS 19417:2026",
    isTitle:
      "Ophthalmic implants Intraocular lenses Guidance on assessment of the need for clinical investigation of intraocular lens design modifications",
  },
  {
    sno: 29,
    isNumber: "IS 19405:2026",
    isTitle:
      "Ophthalmic optics Contact lenses and contact lens care products Determination of physical compatibility of contact lens care products with contact lenses",
  },
  {
    sno: 30,
    isNumber: "IS 19525:2026",
    isTitle:
      "Ophthalmic Optics Spectacle Lenses Fundamental Requirements for Uncut Finished Lenses",
  },
  {
    sno: 31,
    isNumber: "IS 19453:2025",
    isTitle:
      "Ophthalmic optics Spectacle frames Screw threads",
  },
  {
    sno: 32,
    isNumber: "IS 19479:2026",
    isTitle:
      "Sterile Blades for Ophthalmic Microsurgeries for Single Use - Requirements and Test Methods",
  },
  {
    sno: 33,
    isNumber: "IS 19391:2026",
    isTitle:
      "Neurosurgical implants Sterile single-use hydrocephalus shunts",
  },
  {
    sno: 34,
    isNumber: "IS 19423:2026",
    isTitle:
      "Dentistry Compatibility Testing for Metal-Ceramic and Ceramic-Ceramic Systems",
  },
  {
    sno: 35,
    isNumber: "IS 19424:2026",
    isTitle:
      "Dentistry Polymer-Based Die Materials",
  },
  {
    sno: 36,
    isNumber: "IS 19430:2026",
    isTitle:
      "Dentistry Bonding Test Between Polymer Teeth and Denture Base Materials",
  },
  {
    sno: 37,
    isNumber: "IS 19494:2026",
    isTitle:
      "Dentistry Guidance on Colour Measurement",
  },
  {
    sno: 38,
    isNumber: "IS 19429:2026",
    isTitle:
      "Dentistry Bore Diameters for Rotary Instruments such as Discs and Wheels",
  },
  {
    sno: 39,
    isNumber: "IS 19483:2026",
    isTitle:
      "Dentistry General Requirements for Instruments and Related Accessories Used in Dental Implant Placement and Treatment",
  },
  {
    sno: 40,
    isNumber: "IS 19401:2026",
    isTitle:
      "Dentistry Screening Method for Erosion Potential of Oral Rinses on Dental Hard Tissues",
  },
  {
    sno: 41,
    isNumber: "IS 19477 (Part 3):2026",
    isTitle:
      "Dentistry Dental Furnace Part 3 Test Method for the Evaluation of High Temperature Sintering Furnace Measurement with a Separate Thermocouple",
  },
  {
    sno: 42,
    isNumber: "IS 19617:2026",
    isTitle:
      "Dentistry Pre-capsulated Dental Amalgam",
  },
  {
    sno: 43,
    isNumber: "IS 19495:2026",
    isTitle:
      "Dentistry Mandrels for Rotary Instruments",
  },
  {
    sno: 44,
    isNumber: "IS 19619 (Part 1):2026",
    isTitle:
      "Dentistry Portable Dental Equipment for Use in Non-Permanent Healthcare Environment Part 1 General Requirements",
  },
  {
    sno: 45,
    isNumber: "IS 19619 (Part 3):2026",
    isTitle:
      "Dentistry Portable Dental Equipment for Use in Non-Permanent Healthcare Environment Part 3 Portable Suction Equipment",
  },
  {
    sno: 46,
    isNumber: "IS 19620:2026",
    isTitle:
      "Dentistry Physical Properties of Powered Toothbrushes",
  },
  {
    sno: 47,
    isNumber: "IS 19616:2026",
    isTitle:
      "Dentistry Screw Loosening Test Using Cyclic Torsional Loading for Implant Body-Implant Abutment Connection of Endosseous Dental Implants",
  },
  {
    sno: 48,
    isNumber: "IS 19621:2026",
    isTitle:
      "Dentistry Graphical Symbols for Dental Instruments",
  },
  {
    sno: 49,
    isNumber: "IS 18489 (Part 2):2026",
    isTitle:
      "Dentistry Digital Impression Devices Part 2 Methods for Assessing Accuracy for Implanted Devices",
  },
  {
    sno: 50,
    isNumber: "IS 18682 (Part 5):2026",
    isTitle:
      "Dentistry Periodontal Curettes Dental Scalers and Excavators Part 5 Jacquette Scalers",
  },
  {
    sno: 51,
    isNumber: "IS 19618:2026",
    isTitle:
      "Dentistry Filling Instrument with Contra Angle",
  },
  {
    sno: 52,
    isNumber: "IS 19496:2026",
    isTitle:
      "Dentistry Refractory Investment and Die Material",
  },
  {
    sno: 53,
    isNumber: "IS 19477 (Part 2):2026",
    isTitle:
      "Dentistry Dental Furnace Part 2 Test Method for Evaluation of Furnace Programme via Firing Glaze",
  },
  {
    sno: 54,
    isNumber: "IS 19477:2026",
    isTitle:
      "Dentistry Dental Furnace Test Method for Temperature Measurement with Separate Thermocouple",
  },
  {
    sno: 55,
    isNumber: "IS 19189:2025",
    isTitle:
      "Accessible Design Information Contents, Figuration and Display Methods of Tactile Guide Maps",
  },
  {
    sno: 56,
    isNumber: "IS 19190:2025",
    isTitle:
      "Accessible Design Application of Braille on Signage, Equipment and Appliances",
  },
  {
    sno: 57,
    isNumber: "IS 18651 (Part 28):2025",
    isTitle:
      "Wheelchairs Part 28 Requirements and Test Methods for Stair-Climbing Devices",
  },
  {
    sno: 58,
    isNumber: "IS 18651 (Part 30):2025",
    isTitle:
      "Wheelchairs Part 30 Wheelchairs for Changing Occupant Posture – Test Methods and Requirements",
  },
  {
    sno: 59,
    isNumber: "IS 18651 (Part 25):2025",
    isTitle:
      "Wheelchairs Part 25 Lead-Acid Batteries and Chargers for Powered Wheelchairs – Requirements and Test Methods",
  },
  {
    sno: 60,
    isNumber: "IS 18651 (Part 21):2025",
    isTitle:
      "Wheelchairs Part 21 Requirements and Test Methods for Electromagnetic Compatibility of Electrically Powered Wheelchairs and Scooters and Battery Chargers",
  },
  {
    sno: 61,
    isNumber: "IS 18651 (Part 14):2025",
    isTitle:
      "Wheelchairs Part 14 Power and Control Systems for Electrically Powered Wheelchairs and Scooters – Requirements and Test Methods",
  },
  {
    sno: 62,
    isNumber: "IS 19638 (Part 1):2026",
    isTitle:
      "Prosthetics and Orthotics Limb Deficiencies Part 1: Method of Describing Limb Deficiencies Present at Birth",
  },
  {
    sno: 63,
    isNumber: "IS 19638 (Part 2):2026",
    isTitle:
      "Prosthetics and Orthotics Limb Deficiencies Part 2: Method of Describing Lower Limb Amputation Stumps",
  },
  {
    sno: 64,
    isNumber: "IS 19638 (Part 4):2026",
    isTitle:
      "Prosthetics and Orthotics Limb Deficiencies Part 4: Description of Causal Conditions Leading to Amputation",
  },
  {
    sno: 65,
    isNumber: "IS 19638 (Part 5):2026",
    isTitle:
      "Prosthetics and Orthotics Limb Deficiencies Part 5: Description of the Clinical Condition of the Person Who Has Had an Amputation",
  },
  {
    sno: 66,
    isNumber: "IS 19631:2026",
    isTitle:
      "Portable Ramps – Specification",
  },
  {
    sno: 67,
    isNumber: "IS 19639:2026",
    isTitle:
      "Prosthetics and Orthotics Vocabulary Part 4: Terms Relating to Limb Amputation",
  },
  {
    sno: 68,
    isNumber: "IS 19642:2026",
    isTitle:
      "Assistive Products Accessibility Guidelines and Requirements to Survey the Needs of Persons with Sensory Disabilities for Assistive Products and Services",
  },
  {
    sno: 69,
    isNumber: "IS 13450 (Part 2/Sec 67):2025",
    isTitle:
      "Medical Electrical Equipment Part 2 Particular Requirements for Basic Safety and Essential Performance Section 67 Oxygen-Conserving Equipment",
  },
  {
    sno: 70,
    isNumber: "IS 13450 (Part 2/Sec 74):2025",
    isTitle:
      "Medical Electrical Equipment Part 2 Particular Requirements for Basic Safety and Essential Performance Section 74 Respiratory Humidifying Equipment",
  },
  {
    sno: 71,
    isNumber: "IS 13450 (Part 2/Sec 72):2025",
    isTitle:
      "Medical Electrical Equipment Part 2 Particular Requirements for Basic Safety and Essential Performance Section 72 Home Healthcare Environment Ventilators for Ventilator-Dependent Patients",
  },
  {
    sno: 72,
    isNumber: "IS 19228 (Part 1):2025",
    isTitle:
      "Anaesthetic and Respiratory Equipment Heat and Moisture Exchangers (HMEs) for Humidifying Respired Gases in Humans Part 1: HMEs for Use with Minimum Tidal Volumes of 250 ml",
  },
  {
    sno: 73,
    isNumber: "IS 13450 (Part 2/Sec 55):2025",
    isTitle:
      "Medical Electrical Equipment Part 2 Particular Requirements for the Basic Safety and Essential Performance Section 55 Respiratory Gas Monitors",
  },
  {
    sno: 74,
    isNumber: "IS 19227 (Part 1):2025",
    isTitle:
      "Breathing System Filters for Anaesthetic and Respiratory Use Part 1: Salt Test Method to Assess Filtration Performance",
  },
  {
    sno: 75,
    isNumber: "IS 18881 (Part 1):2025",
    isTitle:
      "Aseptic Processing of Health Care Products Part 1 General Requirements",
  },
  {
    sno: 76,
    isNumber: "IS 19282 (Part 1):2025",
    isTitle:
      "Needle-Based Injection Systems for Medical Use – Requirements and Test Methods Part 1 Needle-Based Injection Systems",
  },
  {
    sno: 77,
    isNumber: "IS 19282 (Part 2):2025",
    isTitle:
      "Needle-Based Injection Systems for Medical Use – Requirements and Test Methods Part 2 Double-Ended Pen Needles",
  },
  {
    sno: 78,
    isNumber: "IS 19329 (Part 4):2025",
    isTitle:
      "Prefilled Syringes Part 4 Glass Barrels for Injectables and Sterilized Subassembled Syringes Ready for Filling",
  },
  {
    sno: 79,
    isNumber: "IS 17964 (Part 7):2025",
    isTitle:
      "Small-Bore Connectors for Liquids and Gases in Healthcare Applications Part 7 Connectors for Intravascular or Hypodermic Applications",
  },
  {
    sno: 80,
    isNumber: "IS 18474 (Part 4):2026",
    isTitle:
      "Transfusion Equipment for Medical Use Part 4 Transfusion Sets for Single Use, Gravity Feed",
  },
  {
    sno: 81,
    isNumber: "IS 18294 (Part 1):2026",
    isTitle:
      "Sterilization of Health Care Products — Radiation Part 1 Requirements for the Development, Validation and Routine Control of a Sterilization Process for Medical Devices",
  },
  {
    sno: 82,
    isNumber: "IS 18344 (Part 1):2026",
    isTitle:
      "Washer-Disinfectors Part 1 General Requirements, Terms and Definitions and Tests",
  },
  {
    sno: 83,
    isNumber: "IS 18344 (Part 2):2026",
    isTitle:
      "Washer-Disinfectors Part 2 Requirements and Tests for Washer-Disinfectors Employing Thermal Disinfection for Critical and Semi-Critical Medical Devices",
  },
  {
    sno: 84,
    isNumber: "IS 18344 (Part 3):2026",
    isTitle:
      "Washer-Disinfectors Part 3 Requirements and Tests for Washer-Disinfectors Employing Thermal Disinfection for Human Waste Containers",
  },
  {
    sno: 85,
    isNumber: "IS 1984 (Part 7):2026",
    isTitle:
      "Injection Containers and Accessories Part 7 Injection Caps Made of Aluminium-Plastics Combinations Without Overlapping Plastics",
  },
  {
    sno: 86,
    isNumber: "IS 19611 (Part 1):2026",
    isTitle:
      "Elastomeric Parts for Parenterals and for Devices for Pharmaceutical Use Part 1 Extractables in Aqueous Autoclavates",
  },
  {
    sno: 87,
    isNumber: "IS 19611 (Part 3):2026",
    isTitle:
      "Elastomeric Parts for Parenterals and for Devices for Pharmaceutical Use Part 3 Determination of Released-Particle Count",
  },
  {
    sno: 88,
    isNumber: "IS 19611 (Part 4):2026",
    isTitle:
      "Elastomeric Parts for Parenterals and for Devices for Pharmaceutical Use Part 4 Biological Requirements and Test Methods",
  },
  {
    sno: 89,
    isNumber: "IS 19329 (Part 7):2026",
    isTitle:
      "Prefilled Syringes Part 7 Packaging Systems for Sterilized Subassembled Syringes Ready for Filling",
  },
  {
    sno: 90,
    isNumber: "IS 19329 (Part 8):2026",
    isTitle:
      "Prefilled Syringes Part 8 Requirements and Test Methods for Finished Prefilled Syringes",
  },
  {
    sno: 91,
    isNumber: "IS 19282 (Part 4):2026",
    isTitle:
      "Needle-Based Injection Systems for Medical Use — Requirements and Test Methods Part 4 Needle-Based Injection Systems Containing Electronics",
  },
  {
    sno: 92,
    isNumber: "IS 19611 (Part 5):2026",
    isTitle:
      "Elastomeric Parts for Parenterals and for Devices for Pharmaceutical Use Part 5 Functional Requirements and Testing",
  },
  {
    sno: 93,
    isNumber: "IS 19612:2026",
    isTitle:
      "Aluminium Caps and Aluminium/Plastic Caps for Infusion Bottles and Injection Vials — General Requirements and Test Methods",
  },
  {
    sno: 94,
    isNumber: "IS 19329 (Part 6):2026",
    isTitle:
      "Prefilled Syringes Part 6 Plastic Barrels for Injectables and Sterilized Subassembled Syringes Ready for Filling",
  },
  {
    sno: 95,
    isNumber: "IS 19282 (Part 3):2026",
    isTitle:
      "Needle-Based Injection Systems for Medical Use — Requirements and Test Methods Part 3 Containers and Integrated Fluid Paths",
  },
  {
    sno: 96,
    isNumber: "IS 19282 (Part 7):2026",
    isTitle:
      "Needle-Based Injection Systems for Medical Use — Requirements and Test Methods Part 7 Accessibility for Persons with Visual Impairment",
  },
  {
    sno: 97,
    isNumber: "IS 19611 (Part 2):2026",
    isTitle:
      "Elastomeric Parts for Parenterals and for Devices for Pharmaceutical Use Part 2 Identification and Characterization",
  },
  {
    sno: 98,
    isNumber: "IS 19282 (Part 5):2026",
    isTitle:
      "Needle-Based Injection Systems for Medical Use — Requirements and Test Methods Part 5 Automated Functions",
  },
  {
    sno: 99,
    isNumber: "IS 19282 (Part 6):2026",
    isTitle:
      "Needle-Based Injection Systems for Medical Use — Requirements and Test Methods Part 6 On-Body Delivery Systems",
  },
  {
    sno: 100,
    isNumber: "IS 18292 (Part 8):2026",
    isTitle:
      "Intravascular Catheters — Sterile and Single-Use Catheters Part 8 Catheters for Extracorporeal Blood Treatment",
  },
  {
    sno: 101,
    isNumber: "IS 19613:2026",
    isTitle:
      "Sterilization of Health Care Products — Low Temperature Vaporized Hydrogen Peroxide — Requirements for the Development, Validation and Routine Control of a Sterilization Process for Medical Devices",
  },
  {
    sno: 102,
    isNumber: "IS 19478:2025",
    isTitle:
      "Bovine Endometrial Cytotaping Catheter Specification",
  },
  {
    sno: 103,
    isNumber: "IS 19173 (Part 1):2025",
    isTitle:
      "Medical Device Software Part 1 Guidance on the Application of ISO 14971 to Medical Device Software",
  },
  {
    sno: 104,
    isNumber: "IS 19771:2026",
    isTitle:
      "Medical electrical equipment Dosimeters with ionization chambers as used in Radiotherapy IEC 60731:2011AMD1:2016 CSV MOD",
  },
  {
    sno: 105,
    isNumber: "IS 18875 (Part 10101):2025",
    isTitle:
      "Health Informatics – Device Interoperability Part 10101 Point-of-Care Medical Device Communication – Nomenclature",
  },
  {
    sno: 106,
    isNumber: "IS 19481:2026",
    isTitle:
      "Genomics Informatics — Phenopackets: A Format for Phenotypic Data Exchange",
  },
  {
    sno: 107,
    isNumber: "IS 19431:2026",
    isTitle:
      "Health Informatics — Interoperability of Public Health Emergency Preparedness and Response Information Systems",
  },
  {
    sno: 108,
    isNumber: "IS 19480:2026",
    isTitle:
      "Health Informatics — Standardizing Graphical Content",
  },
  {
    sno: 109,
    isNumber: "IS 19425:2026",
    isTitle:
      "Health Informatics — Workforce Roles and Capabilities for Terminology and Terminology Services in Healthcare (Term Workforce)",
  },
  {
    sno: 110,
    isNumber: "IS 18875 (Part 10472):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10472 Personal Health Device Communication — Device Specialization — Medication Monitor",
  },
  {
    sno: 111,
    isNumber: "IS 19435:2026",
    isTitle:
      "Genomics Informatics — Data Elements and Their Metadata for Describing the Tumor Mutation Burden (TMB) Information of Clinical Massive Parallel DNA Sequencing",
  },
  {
    sno: 112,
    isNumber: "IS ISO:2024",
    isTitle:
      "Health Informatics — Categorial Structures for Representation of Ayurvedic Medicinal Water — Decocting Process in Ayurveda",
  },
  {
    sno: 113,
    isNumber: "IS 19482:2026",
    isTitle:
      "Genomics Informatics — Omics Markup Language (OML)",
  },
  {
    sno: 114,
    isNumber: "IS 18867 (Part 4):2026",
    isTitle:
      "Health Informatics — Medical Waveform Format Part 4 Stress Test Electrocardiography",
  },
  {
    sno: 115,
    isNumber: "IS 18875 (Part 10471):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10471 Personal Health Device Communication — Device Specialization — Independent Living Activity Hub",
  },
  {
    sno: 116,
    isNumber: "IS 19421:2026",
    isTitle:
      "Genomics Informatics — Data Elements and Their Metadata for Describing the Microsatellite Instability (MSI) Information of Clinical Massive Parallel DNA Sequencing",
  },
  {
    sno: 117,
    isNumber: "IS 18775 (Part 20701):2025",
    isTitle:
      "Health Informatics — Device Interoperability Part 20701 Point-of-Care Medical Device Communication — Service-Oriented Medical Device Exchange Architecture and Protocol Binding",
  },
  {
    sno: 118,
    isNumber: "IS 18875 (Part 40101):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 40101 Foundational — Cybersecurity — Processes for Vulnerability Assessment",
  },
  {
    sno: 119,
    isNumber: "IS 18875 (Part 40102):2025",
    isTitle:
      "Health Informatics — Device Interoperability Part 40102 Foundational — Cybersecurity — Capabilities for Mitigation",
  },
  {
    sno: 120,
    isNumber: "IS 18875 (Part 10421):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10421 Personal Health Device Communication — Device Specialization — Peak Expiratory Flow Monitor (Peak Flow)",
  },
  {
    sno: 121,
    isNumber: "IS 19433:2025",
    isTitle:
      "Health Informatics — Security Requirements for Archiving of Electronic Health Records — Guidelines",
  },
  {
    sno: 122,
    isNumber: "IS 18667 (Part 5):2025",
    isTitle:
      "Health Informatics — Medical Waveform Format Part 5 Neurophysiological Signals",
  },
  {
    sno: 123,
    isNumber: "IS 18875 (Part 10206):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10206 Personal Health Device Communication — Abstract Content Information Model",
  },
  {
    sno: 124,
    isNumber: "IS 18875 (Part 10700):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10700 Point-of-Care Medical Device Communication — Standard for Base Requirements for Participants in a Service-Oriented Device Connectivity (SDC) System",
  },
  {
    sno: 125,
    isNumber: "IS 18875 (Part 10701):2026",
    isTitle:
      "Health Informatics — Device Interoperability Part 10701 Point-of-Care Medical Device Communication — Metric Provisioning by Participants in a Service-Oriented Device Connectivity (SDC) System",
  },
  {
    sno: 126,
    isNumber: "IS 19615:2026",
    isTitle:
      "Extracellular Vesicles - Characterization",
  },
  {
    sno: 127,
    isNumber: "IS 19314:2025",
    isTitle:
      "Non-chlorinated Plastic Biomedical Waste Bag",
  },
  {
    sno: 128,
    isNumber: "IS 19330:2026",
    isTitle:
      "Formaldehyde Dosimeter - Specification",
  },
];

const managementAndSystemsDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19506:2026",
    isTitle:
      "Statistical methods Six Sigma Basic criteria underlying benchmarking for Six Sigma in organisations",
  },
  {
    sno: 2,
    isNumber: "IS 19507:2026",
    isTitle:
      "Quantitative Methods in Process Improvement - Six Sigma - Competencies for Key Personnel and their Organizations in relation to Six Sigma and Lean Implementation",
  },
  {
    sno: 3,
    isNumber: "IS 19724 (Part 2):2026",
    isTitle:
      "Document Management Information Classification, Marking and Handling Part 2: Functional and Technical Requirements for ICMH Solutions",
  },
  {
    sno: 4,
    isNumber: "IS 19714:2026",
    isTitle:
      "Information and Documentation - Paper for Documents - Requirements for Permanence",
  },
  {
    sno: 5,
    isNumber: "IS 19716:2026",
    isTitle:
      "Information and Documentation - Archival Paper - Requirements for Permanence and Durability",
  },
  {
    sno: 6,
    isNumber: "IS 19715:2026",
    isTitle: "Impact Assessment for Museums",
  },
  {
    sno: 7,
    isNumber: "IS 19717:2026",
    isTitle:
      "Document Management Applications - Specification for a Digital Safe",
  },
  {
    sno: 8,
    isNumber: "IS 19724 (Part 1):2026",
    isTitle:
      "Document Management — Information Classification, Marking and Handling Part 1: Requirements",
  },
  {
    sno: 9,
    isNumber: "IS 19721:2026",
    isTitle:
      "Application of Blockchain-Based Traceability Platform for Cold Chain Food",
  },
  {
    sno: 10,
    isNumber: "IS 19718:2026",
    isTitle:
      "Information and Documentation — Principles of Identification",
  },
  {
    sno: 11,
    isNumber: "IS 19722:2026",
    isTitle:
      "Information and Documentation — Papers and Boards Used for Conservation — Measurement of Impact of Volatiles on Cellulose in Paper",
  },
  {
    sno: 12,
    isNumber: "IS 19719:2026",
    isTitle:
      "Trusted Mobile e-Document Framework — Requirements, Functionality and Criteria for Ensuring Reliable and Safe Mobile e-Business",
  },
  {
    sno: 13,
    isNumber: "IS 19720:2026",
    isTitle:
      "Information and Documentation — Presentation and Identification of Periodicals",
  },
  {
    sno: 14,
    isNumber: "IS 19318:2025",
    isTitle: "Internal Investigations of Organizations Guidance",
  },
  {
    sno: 15,
    isNumber: "IS ISO:2024",
    isTitle:
      "Asset Management Guidance on the Management of Data Assets",
  },
  {
    sno: 16,
    isNumber: "IS/ISO 55011:2024",
    isTitle:
      "Asset management Guidance for the development of public policy to enable asset management",
  },
  {
    sno: 17,
    isNumber: "IS/ISO 55012:2024",
    isTitle:
      "Asset management Guidance on people involvement and competence",
  },
  {
    sno: 18,
    isNumber: "IS 19677:2026",
    isTitle:
      "Security and Resilience — Guidelines for Complexity Assessment Process",
  },
  {
    sno: 19,
    isNumber: "IS 19676:2026",
    isTitle:
      "Security and Resilience – Authenticity, Integrity and Trust for Products and Documents — Guidelines for Interoperable Object Identification and Related Authentication Systems to Deter Counterfeiting and Illicit Trade",
  },
  {
    sno: 20,
    isNumber: "IS 19680:2026",
    isTitle:
      "Security and Resilience – Authenticity, Integrity and Trust for Products and Documents — General Principles for Product Fraud Risk and Countermeasures",
  },
  {
    sno: 21,
    isNumber: "IS 19679:2026",
    isTitle:
      "Security and Resilience – Authenticity, Integrity and Trust for Products and Documents — Guidelines for the Content, Security, Issuance and Examination of Excise Tax Stamps",
  },
  {
    sno: 22,
    isNumber: "IS 19678:2026",
    isTitle:
      "Security and Resilience – Authenticity, Integrity and Trust for Products and Documents — Validation Procedures for the Application of Artefact Metrics",
  },
  {
    sno: 23,
    isNumber: "IS 19797:2026",
    isTitle:
      "Security and Resilience — Authenticity, Integrity and Trust for Products and Documents — Guidelines for Securing Physical Documents",
  },
  {
    sno: 24,
    isNumber: "IS 19795:2026",
    isTitle:
      "Security and Resilience — Authenticity, Integrity and Trust for Products and Documents — Framework for Establishing Trustworthy Supply and Value Chains",
  },
  {
    sno: 25,
    isNumber: "IS 19802:2026",
    isTitle:
      "Security and Resilience — Authenticity, Integrity and Trust for Products and Documents — Specification and Usage of Visible Digital Seal (VDS) Data Format for Authentication, Verification and Acquisition of Data Carried by a Document or Object",
  },
  {
    sno: 26,
    isNumber: "IS 19800:2026",
    isTitle:
      "Security and Resilience — Authenticity, Integrity and Trust for Products and Documents — Guidelines for Establishing Interoperability Among Object Identification Systems to Deter Counterfeiting and Illicit Trade",
  },
  {
    sno: 27,
    isNumber: "IS 19799:2026",
    isTitle:
      "Security and Resilience — Community Resilience — Principles, Framework and Guidelines on Urban Resilience",
  },
  {
    sno: 28,
    isNumber: "IS 19798:2026",
    isTitle:
      "Security and Resilience — Community Resilience — Guidelines for Infrastructure Resilience",
  },
  {
    sno: 29,
    isNumber: "IS 19796:2026",
    isTitle:
      "Security and Resilience — Crisis Management — Concepts, Principles and Framework",
  },
  {
    sno: 30,
    isNumber: "IS 19793:2026",
    isTitle:
      "Societal Security — Guidelines for Establishing Partnering Arrangements",
  },
  {
    sno: 31,
    isNumber: "IS 19794:2026",
    isTitle:
      "Security and Resilience — Authenticity, Integrity and Trust for Products and Documents — Guidelines to Establish a Framework for Trust and Interoperability",
  },
  {
    sno: 32,
    isNumber: "IS 19808:2026",
    isTitle:
      "Reference Materials Requirements and Recommendations for Use",
  },
  {
    sno: 33,
    isNumber: "IS 19806:2026",
    isTitle:
      "Reference Materials Approaches for Characterization and Assessment of Homogeneity and Stability",
  },
  {
    sno: 34,
    isNumber: "IS 19804:2026",
    isTitle:
      "Approaches for the Production of Reference Materials with Qualitative Properties",
  },
  {
    sno: 35,
    isNumber: "IS 19805:2026",
    isTitle:
      "Guidance for the Production of Pure Organic Substance Certified Reference Materials",
  },
  {
    sno: 36,
    isNumber: "IS 19807:2026",
    isTitle:
      "Reference Materials — Contents of Certificates, Labels and Accompanying Documentation",
  },
];

const metallurgicalEngineeringDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19301:2025",
    isTitle:
      "Hot-Rolled and Cold-Rolled Steel Strips Intended for Processing of Fully Processed Grain Oriented Electrical Steel - Specification",
  },
  {
    sno: 2,
    isNumber: "IS 19464:2025",
    isTitle: "Steel Wire for Hose Reinforcement - Specification",
  },
  {
    sno: 3,
    isNumber: "IS 19474:2026",
    isTitle:
      "Hot Dip Aluminium and Aluminium-Silicon Coated Steel Sheet and Strip - Specification",
  },
  {
    sno: 4,
    isNumber: "IS 2062 (Part 2):2026",
    isTitle:
      "Structural Steel - Part 2 - Hot Rolled Quenched and Tempered Steel Plates, Sheets, Strips and Wide Flats",
  },
  {
    sno: 5,
    isNumber: "IS 19626:2026",
    isTitle:
      "Electrolytic Zinc-Nickel Alloy Coated Steel Sheet and Strip - Specification",
  },
  {
    sno: 6,
    isNumber: "IS 19608:2026",
    isTitle:
      "Hot-Rolled Carbon and Alloy Steel Plates, Sheets and Strips - Specification",
  },
  {
    sno: 7,
    isNumber: "IS 19472:2026",
    isTitle:
      "Steel Sheets and Strips for Hot Stamping Applications - Specification",
  },
  {
    sno: 8,
    isNumber: "IS 19497:2026",
    isTitle:
      "Carbon and Low-Alloy Steel Wire Rods for Submerged Arc Welding and Gas Shielded Arc Welding Electrodes - Specification",
  },
  {
    sno: 9,
    isNumber: "IS 19469:2025",
    isTitle: "Jewellery — Consumer Confidence in the Diamond Industry",
  },
  {
    sno: 10,
    isNumber: "IS 19563:2026",
    isTitle:
      "Jewellery and Precious Metals — Determination of High Purity Gold, Silver, Platinum and Palladium — Difference Method Using SPARK-OES",
  },
  {
    sno: 11,
    isNumber: "IS 19750:2026",
    isTitle:
      "Welding Measurement of preheating temperature interpass temperature and preheat maintenance temperature",
  },
  {
    sno: 12,
    isNumber: "IS 19580:2026",
    isTitle: "Iron ore and direct reduced iron - Vocabulary",
  },
  {
    sno: 13,
    isNumber: "IS 19773:2026",
    isTitle:
      "High chrome grinding media ball for cement mills - Specification",
  },
  {
    sno: 14,
    isNumber: "IS 19559:2026",
    isTitle: "Hot Rolled Alloy Steel Bars Specification",
  },
  {
    sno: 15,
    isNumber: "IS 19362:2025",
    isTitle:
      "Non-destructive testing Eddy Current TestingDetermination of Electrical Conductivity of Non-magnetic Metals",
  },
  {
    sno: 16,
    isNumber: "IS 19406:2026",
    isTitle:
      "Metallic and Other Inorganic Coatings — Test for Residual Embrittlement in Both Metallic-Coated and Uncoated Externally-Threaded Articles and Rods — Inclined Wedge Method",
  },
  {
    sno: 17,
    isNumber: "IS 19407:2026",
    isTitle:
      "Method of Measurement of Hydrogen Permeation and Determination of Hydrogen Uptake and Transport in Metals by an Electrochemical Technique",
  },
  {
    sno: 18,
    isNumber: "IS 19657:2026",
    isTitle:
      "Microbeam Analysis — Scanning Electron Microscopy Guidelines for Calibrating Image Magnification",
  },
  {
    sno: 19,
    isNumber: "IS 19667:2026",
    isTitle:
      "Nanotechnology — Nanoparticles in Powder Form — Characteristics and Measurements",
  },
  {
    sno: 20,
    isNumber: "IS 1493 (Part 12):2026",
    isTitle:
      "Methods of Chemical Analysis of Iron Ores: Part 12 Determination of Various Elements — Inductively Coupled Plasma Atomic Emission Spectrometric Method",
  },
  {
    sno: 21,
    isNumber: "IS 228 (Part 26):2026",
    isTitle:
      "Methods for Chemical Analysis of Steels: Part 26 Determination of Nickel Content — Flame Atomic Absorption Spectrometric Method",
  },
  {
    sno: 22,
    isNumber: "IS 228 (Part 27):2026",
    isTitle:
      "Methods for Chemical Analysis of Steels: Part 27 Determination of Silicon Content — Inductively Coupled Plasma Atomic Emission Spectrometric Method",
  },
  {
    sno: 23,
    isNumber: "IS 228 (Part 25):2025",
    isTitle:
      "Methods for Chemical Analysis of Steels: Part 25 Determination of Sulphur Content — Infrared Absorption Method After Combustion in an Induction Furnace",
  },
];

const petroleumCoalAndRelatedProductsDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 1448 (Part 25/Sec 2):2025",
    isTitle:
      "Petroleum and Its Products - Methods of Test Part 25 Glass Capillary Kinematic Viscometers - Section 2 Specifications and Operating Instructions",
  },
  {
    sno: 2,
    isNumber: "IS 1448 (Part 198):2025",
    isTitle:
      "Petroleum and Its Products - Methods of Test Part 198 Determination of Hydrocarbon Types and Oxygenates in Automotive Motor Gasoline and in Ethanol (E85) Automotive Fuel — Multidimensional Gas Chromatography Method",
  },
  {
    sno: 3,
    isNumber: "IS 17315 (Part 3):2025",
    isTitle:
      "Petroleum and Related Products - Precision of Measurement Methods and Results Part 3 Monitoring and Verification of Published Precision Data in Relation to Methods of Test",
  },
  {
    sno: 4,
    isNumber: "IS 17315 (Part 4):2025",
    isTitle:
      "Petroleum and Related Products - Precision of Measurement Methods and Results Part 4 Use of Statistical Control Charts to Validate \"In-Statistical-Control\" Status for the Execution of a Standard Test Method in a Single Laboratory",
  },
  {
    sno: 5,
    isNumber: "IS 17315 (Part 5):2025",
    isTitle:
      "Petroleum and Related Products - Precision of Measurement Methods and Results Part 5 Statistical Assessment of Agreement Between Two Different Measurement Methods That Claim to Measure the Same Property",
  },
  {
    sno: 6,
    isNumber: "IS 1448 (Part 202):2025",
    isTitle:
      "Petroleum and Its Products - Methods of Test Part 202 Determination of Fatty Acid Methyl Esters in Biodiesel Blended Automotive Diesel/Paraffinic Diesel Fuels by High-Performance Liquid Chromatography–Refractive Index Detection",
  },
  {
    sno: 7,
    isNumber: "IS 1448 (Part 201):2025",
    isTitle:
      "Petroleum and Its Products - Methods of Test Part 201 Determination of Oxygenates Such as Ethers, Tertiary Amyl Alcohol and C1 to C4 Alcohols in Motor Gasoline by Gas Chromatography Method",
  },
  {
    sno: 8,
    isNumber: "IS 1448 (Part 204):2026",
    isTitle:
      "Industrial Quenching Oils — Determination of Cooling Characteristics — Nickel-Alloy Probe Test Method",
  },
  {
    sno: 9,
    isNumber: "IS 19689:2026",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XXX Determination of Total Volatile Sulphur in Gaseous Hydrocarbons and Liquefied Petroleum Gases Through Ultraviolet Fluorescence Detection",
  },
  {
    sno: 10,
    isNumber: "IS 19688:2026",
    isTitle:
      "Lubricants - Methods of Tests — Determination of Wear Preventive Characteristics — Four-Ball Method",
  },
  {
    sno: 11,
    isNumber: "IS 1448 (Part 207):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Determination of Aromatic Hydrocarbon Types in Aviation Turbine Fuels, Kerosene Type and Petroleum Distillates — High Performance Liquid Chromatography Method with Refractive Index Detection",
  },
  {
    sno: 12,
    isNumber: "IS 1448 (Part 209):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Determination of Fatty Acid Methyl Esters (FAME) Content Derived from Biodiesel Fuel in Aviation Turbine Fuel — GC-MS with Selective Ion Monitoring/Scan Detection Method",
  },
  {
    sno: 13,
    isNumber: "IS 1448 (Part 213):2026",
    isTitle:
      "Petroleum and Its Products - Test Methods — Determination of Elements in Unused Lubricating Greases by Inductively Coupled Plasma Atomic Emission Spectrometer",
  },
  {
    sno: 14,
    isNumber: "IS 1448 (Part 208):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Determination of Distillation Characteristics of Petroleum Products by Micro Distillation Method",
  },
  {
    sno: 15,
    isNumber: "IS 1448 (Part 210):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Evaluation of Lubricity of Aviation Turbine Fuels by Using the Ball-on-Cylinder Lubricity Evaluator (BOCLE)",
  },
  {
    sno: 16,
    isNumber: "IS 1448 (Part 211):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Standard Test Method for Vapor Pressure of Petroleum Products — Mini Method",
  },
  {
    sno: 17,
    isNumber: "IS 1448 (Part 212):2019",
    isTitle:
      "Petroleum and Its Products - Test Methods Part XX Determination of Trace Impurities in Monocyclic Aromatic Hydrocarbons with Carbon Number Separation by Gas Chromatography Method",
  },
  {
    sno: 18,
    isNumber: "IS 19275:2025",
    isTitle:
      "Automotive Fuels - Paraffinic Diesel Fuel from Synthesis or Hydrotreatment - Specification",
  },
  {
    sno: 19,
    isNumber: "IS 19486:2026",
    isTitle:
      "Hexane Industrial Solvent Grade - Specification",
  },
  {
    sno: 20,
    isNumber: "IS 19850:2026",
    isTitle:
      "E22, E25, E27 & E30 Fuel – Admixture of Anhydrous Ethanol and Gasoline — Specification",
  },
  {
    sno: 21,
    isNumber: "IS 19232:2025",
    isTitle:
      "Methods for Testing Tar and Bituminous Materials - Determination of Specific Gravity of Bituminous Mixtures",
  },
  {
    sno: 22,
    isNumber: "IS 19487:2025",
    isTitle:
      "Safe Handling of Bitumen and Bitumen Products - Code of Practice",
  },
  {
    sno: 23,
    isNumber: "IS 19158:2025",
    isTitle:
      "Solid Biofuels - Determination of Minor Elements",
  },
  {
    sno: 24,
    isNumber: "IS 19139:2025",
    isTitle:
      "Solid Biofuels – Determination of Major Elements – Al, Ca, Fe, Mg, P, K, Si, Na and Ti",
  },
  {
    sno: 25,
    isNumber: "IS 19410:2026",
    isTitle:
      "Solid Biofuels — Sampling",
  },
  {
    sno: 26,
    isNumber: "IS 19370:2025",
    isTitle:
      "2,6-Di-Tertiary Butyl Phenol - Specification",
  },
  {
    sno: 27,
    isNumber: "IS 19377:2025",
    isTitle:
      "2,4-Di-Tertiary Butyl Phenol - Specification",
  },
  {
    sno: 28,
    isNumber: "IS 19345:2026",
    isTitle:
      "o-Tertiary Butyl Phenol - Specification",
  },
  {
    sno: 29,
    isNumber: "IS 19374:2026",
    isTitle:
      "p-Tertiary Butyl Phenol - Specification",
  },
  {
    sno: 30,
    isNumber: "IS 19733:2026",
    isTitle:
      "Hexylene Glycol - Specification",
  },
  {
    sno: 31,
    isNumber: "IS 19286:2025",
    isTitle:
      "Aluminium Foil Tapes Application in White Goods Industry Specification",
  },
  {
    sno: 32,
    isNumber: "IS 19668:2026",
    isTitle:
      "Rubber raw natural Guidelines for the specification of technically specified rubber TSR",
  },
  {
    sno: 33,
    isNumber: "IS 19276:2025",
    isTitle:
      "Coumarin - Specification",
  },
  {
    sno: 34,
    isNumber: "IS 19412:2025",
    isTitle:
      "Incense Sticks (Agarbatti) - Specification",
  },
  {
    sno: 35,
    isNumber: "IS 19086:2026",
    isTitle:
      "Oil of Clove Leaves [Syzygium aromaticum (L.) Merr. & L.M. Perry, Syn. Eugenia caryophyllus (Spreng.) Bullock & S.G. Harrison] — Specification",
  },
  {
    sno: 36,
    isNumber: "IS 19087:2026",
    isTitle:
      "Oil of Clove Buds [Syzygium aromaticum (L.) Merr. & L.M. Perry, Syn. Eugenia caryophyllus (Spreng.) Bullock & S.G. Harrison] — Specification",
  },
  {
    sno: 37,
    isNumber: "IS 19088:2026",
    isTitle:
      "Oil of Clove Stems [Syzygium aromaticum (L.) Merr. & L.M. Perry, Syn. Eugenia caryophyllus (Spreng.) Bullock & S.G. Harrison] — Specification",
  },
  {
    sno: 38,
    isNumber: "IS 19516:2026",
    isTitle:
      "Determination of Fatty Acids in Natural and Synthetic Perfumery Materials by Gas Chromatography",
  },
  {
    sno: 39,
    isNumber: "IS 19270:2025",
    isTitle:
      "Cosmetics Microbiology — Evaluation of the Antimicrobial Protection of a Cosmetic Product",
  },
  {
    sno: 40,
    isNumber: "IS 4707 (Part 3):2025",
    isTitle:
      "Classification of Cosmetic Raw Materials and Adjuncts Part 3 List of Preservatives Allowed in Cosmetics with Restriction",
  },
  {
    sno: 41,
    isNumber: "IS 19685:2026",
    isTitle:
      "Sunscreen Cosmetic Products - Specification",
  },
  {
    sno: 42,
    isNumber: "IS 19681:2026",
    isTitle:
      "Face Wash - Specification",
  },
  {
    sno: 43,
    isNumber: "IS 19683:2026",
    isTitle:
      "Face and Body Scrub - Specification",
  },
  {
    sno: 44,
    isNumber: "IS 19682:2026",
    isTitle:
      "Shower Gel Body Wash - Specification",
  },
  {
    sno: 45,
    isNumber: "IS 19684:2026",
    isTitle:
      "Oral Rinses for Cosmetics — Specification",
  },
  {
    sno: 46,
    isNumber: "IS 19110:2025",
    isTitle:
      "Lubricants, Industrial Oils and Related Products (Class L) - Family H (Hydraulic Systems) - Hydraulic Fluids in Categories HFAE, HFAS, HFB, HFC, HFDR and HFDU - Specification",
  },
  {
    sno: 47,
    isNumber: "IS 19366:2025",
    isTitle:
      "Lubricants, Industrial Oils and Related Products (Class L) — Family H (Hydraulic Systems) — Specifications for Hydraulic Fluids in Categories HETG, HEPG, HEES and HEPR",
  },
  {
    sno: 48,
    isNumber: "IS 19221:2025",
    isTitle:
      "Vinyl Sulphone ester of 2,5-Dimethoxyaniline - Specification",
  },
  {
    sno: 49,
    isNumber: "IS 13360 (Part 3/Sec 13):2025",
    isTitle:
      "Plastics — Methods of Testing Part 3 Physical and Dimensional Properties Section 13 Determination of Linear Dimensions of Test Specimens",
  },
  {
    sno: 50,
    isNumber: "IS 13360 (Part 5/Sec 28/Sub-Sec 2):2025",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 28 Determination of Puncture Impact Behaviour of Rigid Plastics Subsection 2 Instrumented Impact Testing",
  },
  {
    sno: 51,
    isNumber: "IS 13360 (Part 5/Sec 30):2025",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 30 Determination of Scratch Properties",
  },
  {
    sno: 52,
    isNumber: "IS 13360 (Part 8/Sec 15):2025",
    isTitle:
      "Plastics — Methods of Testing Part 8 Permanence/Chemical Properties Section 15 Determination of Resistance to Environmental Stress Cracking (ESC) — General Guidance",
  },
  {
    sno: 53,
    isNumber: "IS 13360 (Part 8/Sec 16):2025",
    isTitle:
      "Plastics — Methods of Testing Part 8 Performance/Chemical Properties Section 16 Determination of Resistance to Environmental Stress Cracking (ESC) — Slow Strain Rate Method",
  },
  {
    sno: 54,
    isNumber: "IS 13360 (Part 8/Sec 17):2025",
    isTitle:
      "Plastics — Methods of Testing Part 8 Permanence/Chemical Properties Section 17 Determination of Resistance to Environmental Stress Cracking (ESC) — Ball or Pin Impression Method",
  },
  {
    sno: 55,
    isNumber: "IS 13360 (Part 8/Sec 18):2025",
    isTitle:
      "Plastics — Methods of Testing Part 8 Permanence/Chemical Properties Section 18 Determination of Resistance to Environmental Stress Cracking (ESC) — Constant Tensile Deformation Method",
  },
  {
    sno: 56,
    isNumber: "IS 19048:2025",
    isTitle:
      "Plastics — Verification of Pendulum Impact-Testing Machines — Charpy, Izod and Tensile Impact-Testing",
  },
  {
    sno: 57,
    isNumber: "IS 19166:2025",
    isTitle:
      "Plastics — Methodology for Assessing Polymer Photoageing by FTIR and UV-Visible Spectroscopy",
  },
  {
    sno: 58,
    isNumber: "IS 19170:2025",
    isTitle:
      "Plastics — Small Enclosures for Conditioning and Testing Using Aqueous Solutions to Maintain the Humidity at a Constant Value",
  },
  {
    sno: 59,
    isNumber: "IS 13360 (Part 5/Sec 29):2025",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 29 Determination of Tensile Properties at High Strain Rates",
  },
  {
    sno: 60,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 1):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 1 General Principles",
  },
  {
    sno: 61,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 2):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 2 Torsion-Pendulum Method",
  },
  {
    sno: 62,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 3):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 3 Flexural Vibration — Resonance-Curve Method",
  },
  {
    sno: 63,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 4):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 4 Tensile Vibration — Non-Resonance Method",
  },
  {
    sno: 64,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 5):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 5 Flexural Vibration — Non-Resonance Method",
  },
  {
    sno: 65,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 6):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 6 Shear Vibration — Non-Resonance Method",
  },
  {
    sno: 66,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 7):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 7 Torsional Vibration — Non-Resonance Method",
  },
  {
    sno: 67,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 8):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 8 Longitudinal and Shear Vibration — Wave-Propagation Method",
  },
  {
    sno: 68,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 9):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 9 Tensile Vibration — Sonic-Pulse Propagation Method",
  },
  {
    sno: 69,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 10):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 10 Complex Shear Viscosity Using a Parallel-Plate Oscillatory Rheometer",
  },
  {
    sno: 70,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 11):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 11 Glass Transition Temperature",
  },
  {
    sno: 71,
    isNumber: "IS 13360 (Part 5/Sec 31/Sub-Sec 12):2026",
    isTitle:
      "Plastics — Methods of Testing Part 5 Mechanical Properties Section 31 Determination of Dynamic Mechanical Properties Subsection 12 Compressive Vibration — Non-Resonance Method",
  },
  {
    sno: 72,
    isNumber: "IS 19694:2026",
    isTitle:
      "Plastics — Evaluation of the Action of Microorganisms",
  },
  {
    sno: 73,
    isNumber: "IS 9873 (Part 12):2025",
    isTitle:
      "SAFETY OF TOYS PART 12: SAFETY ASPECTS RELATED TO MECHANICAL AND PHYSICAL PROPERTIES COMPARISON OF ISO 8124-1 EN 71-1 AND ASTM F963",
  },
];

const productionAndGeneralEngineeringDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19661 (Part 1):2026",
    isTitle:
      "Safety Information for the Content of Piping Systems and Tanks Part 1: Piping Systems",
  },
  {
    sno: 2,
    isNumber: "IS 19661 (Part 2):2026",
    isTitle:
      "Safety Information for the Content of Piping Systems and Tanks Part 2: Tanks",
  },
  {
    sno: 3,
    isNumber: "IS 19666:2026",
    isTitle:
      "Graphical Symbols — Safety Colours and Safety Signs — Natural Disaster Safety Way Guidance System",
  },
  {
    sno: 4,
    isNumber: "IS 16681 (Part 4):2026",
    isTitle:
      "Public Information Guidance Systems Part 4: Installation and Assessment",
  },
  {
    sno: 5,
    isNumber: "IS 19708:2026",
    isTitle:
      "Graphical Symbols — Safety Colours and Safety Signs — Guidance for the Development and Use of a Safety Signing System",
  },
  {
    sno: 6,
    isNumber: "IS 19524:2026",
    isTitle:
      "Hydraulic Impulse Tools — Specification",
  },
  {
    sno: 7,
    isNumber: "IS 19595 (Part 1):2026",
    isTitle:
      "Hand-held Non-Electric Power Tools — Safety Requirements Part 1: Assembly Power Tools for Non-Threaded Mechanical Fasteners",
  },
  {
    sno: 8,
    isNumber: "IS 19595 (Part 3):2026",
    isTitle:
      "Hand-held Non-Electric Power Tools — Safety Requirements Part 3: Drills and Tappers",
  },
  {
    sno: 9,
    isNumber: "IS 19595 (Part 7):2026",
    isTitle:
      "Hand-held Non-Electric Power Tools — Safety Requirements Part 7: Grinders",
  },
  {
    sno: 10,
    isNumber: "IS 19595 (Part 8):2026",
    isTitle:
      "Hand-held Non-Electric Power Tools — Safety Requirements Part 8: Sanders and Polishers",
  },
  {
    sno: 11,
    isNumber: "IS 19537:2026",
    isTitle:
      "Hydraulic Torque Wrench — Specification",
  },
  {
    sno: 12,
    isNumber: "IS 19702:2026",
    isTitle:
      "Shanks for Pneumatic Tools and Fitting of Chuck Bushings — Dimensions",
  },
  {
    sno: 13,
    isNumber: "IS 19578:2026",
    isTitle:
      "Coated abrasives -- Cylindrical sleeves",
  },
  {
    sno: 14,
    isNumber: "IS 19382:2025",
    isTitle:
      "Rolling Bearings — Taper Rolling Bearings — Tapered Rollers — Specification",
  },
  {
    sno: 15,
    isNumber: "IS 19579:2026",
    isTitle:
      "Rolling Bearings — Cast and Pressed Housings for Insert Bearings — Boundary Dimensions and Tolerances",
  },
  {
    sno: 16,
    isNumber: "IS 19713:2026",
    isTitle:
      "Plain Bearings — Handling of Plain Bearings",
  },
  {
    sno: 17,
    isNumber: "IS 19709:2026",
    isTitle:
      "Plain Bearings — Sintered Bushes — Dimensions and Tolerances",
  },
  {
    sno: 18,
    isNumber: "IS 19730:2026",
    isTitle:
      "Reuse, Recycling and Disposal of Bearing Materials",
  },
  {
    sno: 19,
    isNumber: "IS 19732 (Part 1):2026",
    isTitle:
      "Rolling Bearings — Measuring Methods for Vibration Part 1: Fundamentals",
  },
  {
    sno: 20,
    isNumber: "IS/ISO 10218-2:2025",
    isTitle:
      "Robotics Safety Requirements: Part 2 Industrial Robot Applications and Robot Cells",
  },
  {
    sno: 21,
    isNumber: "IS/ISO 10218-1:2025",
    isTitle:
      "Robotics Safety Requirements: Part 1 Industrial Robots",
  },
  {
    sno: 22,
    isNumber: "IS 19601:2026",
    isTitle:
      "Robotics — Test Methods for Exoskeleton-Type Walking RACA Robot",
  },
  {
    sno: 23,
    isNumber: "IS 19701 (Part 1):2026",
    isTitle:
      "Automation Systems and Integration — Nuclear Digital Ecosystem Part 1: Overview and Framework",
  },
  {
    sno: 24,
    isNumber: "IS 17192 (Part 3):2026",
    isTitle:
      "Robotics — Performance Criteria and Related Test Methods for Service Robots Part 3: Manipulation",
  },
  {
    sno: 25,
    isNumber: "IS 19758:2026",
    isTitle:
      "Windsocks -- Specification",
  },
  {
    sno: 26,
    isNumber: "IS 19269:2025",
    isTitle:
      "Time-measuring instruments -- Photoluminescent deposits -- Test methods and requirements",
  },
  {
    sno: 27,
    isNumber: "IS 14439 (Part 4):2025",
    isTitle:
      "Legal Metrology — Gas Volume Meters: Part 4 Thermal Mass Flow Based Gas Meters — Specification",
  },
  {
    sno: 28,
    isNumber: "SP 4:2025",
    isTitle:
      "Revised State of the Art of Metric System in India (An Update to the SP 4:1969 Metric Change in India)",
  },
  {
    sno: 29,
    isNumber: "SP 74:2025",
    isTitle:
      "Revised State of the Art of Metric System in India (An Update to the SP 4:1969 Metric Change in India)",
  },
  {
    sno: 30,
    isNumber: "IS 19695:2026",
    isTitle:
      "Petroleum and Liquid Petroleum Products — Calibration of Spherical Tanks — External Electro-Optical Distance-Ranging Method",
  },
  {
    sno: 31,
    isNumber: "IS 18538 (Part 2):2026",
    isTitle:
      "Gaseous Hydrogen — Fuelling Stations Part 2: Dispensers and Dispensing Systems (ISO 19880-2:2025, MOD)",
  },
  {
    sno: 32,
    isNumber: "IS 19445:2025",
    isTitle:
      "Bomb Disposal Systems Performance Evaluation and Requirements",
  },
  {
    sno: 33,
    isNumber: "IS 19665 (Part 1):2026",
    isTitle:
      "Assembly Tools for Screws and Nuts — Machine-Operated Screwdriver Bits Part 1: Screwdriver Bits for Slotted Head Screws",
  },
  {
    sno: 34,
    isNumber: "IS 19665 (Part 2):2026",
    isTitle:
      "Assembly Tools for Screws and Nuts — Machine-Operated Screwdriver Bits Part 2: Screwdriver Bits for Cross-Recessed Head Screws",
  },
  {
    sno: 35,
    isNumber: "IS 19665 (Part 3):2026",
    isTitle:
      "Assembly Tools for Screws and Nuts — Machine-Operated Screwdriver Bits Part 3: Screwdriver Bits for Hexagon Socket Screws",
  },
  {
    sno: 36,
    isNumber: "IS 19725:2026",
    isTitle:
      "Assembly Tools for Screws and Nuts — Single-Head Engineers Wrenches for Lower Torque Applications — Maximum Outside Dimensions of Heads and Test Torques",
  },
  {
    sno: 37,
    isNumber: "IS 19705:2026",
    isTitle:
      "Spanners and Wrenches — Spline Drive Ends for Power Socket Wrenches",
  },
  {
    sno: 38,
    isNumber: "IS 19484:2026",
    isTitle:
      "Industrial Staples — Specification",
  },
  {
    sno: 39,
    isNumber: "IS 16506 (Part 8):2026",
    isTitle:
      "Optics and Photonics — Optical Coatings : Part 8 Minimum Requirements for Coatings Used for Laser Optics",
  },
  {
    sno: 40,
    isNumber: "IS 19312:2025",
    isTitle:
      "Inflatable Balls — Specification",
  },
  {
    sno: 41,
    isNumber: "IS 19597:2026",
    isTitle:
      "Landing Mats Used in Gymnastics — Specification",
  },
];

const serviceSectorDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19610:2026",
    isTitle:
      "TRANSPORTATION OF CLOSED BODY VEHICLES GUIDELINES",
  },
  {
    sno: 2,
    isNumber: "IS 19381:2025",
    isTitle:
      "Adventure Tourism — Cyclotourism Requirements and Recommendations",
  },
  {
    sno: 3,
    isNumber: "IS 19384:2025",
    isTitle:
      "Tourism and Related Services — Online Travel Agency (OTA) Guidelines for Online Accommodation Booking Platform Services",
  },
  {
    sno: 4,
    isNumber: "IS 19385:2025",
    isTitle:
      "Tourism and Related Services — Restaurants and Catering — Vocabulary",
  },
  {
    sno: 5,
    isNumber: "IS 19625:2026",
    isTitle:
      "Organization of Exhibitions — Recommendations and Requirements",
  },
  {
    sno: 6,
    isNumber: "IS 19581:2026",
    isTitle:
      "Sustainable Beach Operations — Requirements",
  },
  {
    sno: 7,
    isNumber: "IS 19633:2026",
    isTitle:
      "Sustainable Tourism — Indicators for Organizations in the Tourism Value Chain — Requirements and Guidance for Use",
  },
  {
    sno: 8,
    isNumber: "IS 19674:2026",
    isTitle:
      "Financial Services — Third-Party Payment Service Providers",
  },
  {
    sno: 9,
    isNumber: "IS 19673:2026",
    isTitle:
      "Financial Services — Security Information for PKI in Blockchain and DLT Implementations",
  },
  {
    sno: 10,
    isNumber: "IS 19671:2026",
    isTitle:
      "Financial Services — Code-Scanning Payment Security",
  },
  {
    sno: 11,
    isNumber: "IS 19672:2026",
    isTitle:
      "Security Aspects for Digital Currencies",
  },
  {
    sno: 12,
    isNumber: "IS 19670:2026",
    isTitle:
      "Financial Services — Biometrics — Security Framework",
  },
  {
    sno: 13,
    isNumber: "IS 19418:2025",
    isTitle:
      "CAMPUS FACILITIES AND ACCOMMODATION SERVICES FOR EDUCATIONAL ORGANIZATIONS — REQUIREMENTS",
  },
  {
    sno: 14,
    isNumber: "IS 19493:2025",
    isTitle:
      "Healthcare Services – Format of Hospital Bills – Requirements and Recommendations",
  },
  {
    sno: 15,
    isNumber: "IS 19278 (Part 1):2025",
    isTitle:
      "Electronic Signatures and Infrastructures (ESI) — Procedures for Creation and Validation of AdES Digital Signatures Part 1 Creation and Validation",
  },
  {
    sno: 16,
    isNumber: "IS 19332:2025",
    isTitle:
      "Electronic Signatures and Infrastructures ESI The framework for standardization of signatures Definitions and abbreviations",
  },
  {
    sno: 17,
    isNumber: "IS 19598:2026",
    isTitle:
      "E-COMMERCE- PRINCIPLES AND GUIDELINES FOR SELF-GOVERNANCE",
  },
  {
    sno: 18,
    isNumber: "IS 19408:2025",
    isTitle:
      "Audit Data Collection Customs and Indirect Tax Extension",
  },
  {
    sno: 19,
    isNumber: "IS 19446:2025",
    isTitle:
      "Audit data collection extension Government regulated financial reports and payroll",
  },
  {
    sno: 20,
    isNumber: "IS 19690:2026",
    isTitle:
      "VIDEO AND DIGITAL GAMES – AGE-RATING AND CONTENT DESCRIPTOR LABELS – SPECIFICATIONS",
  },
  {
    sno: 21,
    isNumber: "IS 19692:2026",
    isTitle:
      "MEDIA AND ENTERTAINMENT SOUND AND MUSIC SERVICES VOCABULARY",
  },
  {
    sno: 22,
    isNumber: "IS 19529:2026",
    isTitle:
      "MAINTENANCE AND REPAIR SERVICES REQUIREMENTS",
  },
  {
    sno: 23,
    isNumber: "IS 19591:2026",
    isTitle:
      "Cold Chain Logistics - Vocabulary",
  },
  {
    sno: 24,
    isNumber: "IS 19696:2026",
    isTitle:
      "Requirements and Recommendations for Food Traceability in Cold Chain Logistics",
  },
];

const transportEngineeringDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19520 (Part 3):2026",
    isTitle:
      "Internal Combustion Engines — Piston Rings — Part 3: Coil-Spring-Loaded Oil Control Rings Made of Steel",
  },
  {
    sno: 2,
    isNumber: "IS 19521:2026",
    isTitle:
      "Internal Combustion Engines — Piston Rings — Expander Rail Oil-Control Rings",
  },
  {
    sno: 3,
    isNumber: "IS 19538:2026",
    isTitle:
      "Internal Combustion Engines — Piston Rings — Oil Control Rings",
  },
  {
    sno: 4,
    isNumber: "IS/ISO 6621-5:2020",
    isTitle:
      "Internal Combustion Engines — Piston Rings — Part 5: Quality Requirements",
  },
  {
    sno: 5,
    isNumber: "IS 17128 (Part 4):2026",
    isTitle:
      "Automotive Vehicles — Vehicle Dynamics Test Methods Part 4: Ride Comfort Measurements",
  },
  {
    sno: 6,
    isNumber: "IS 17128 (Part 5):2026",
    isTitle:
      "Automotive Vehicles — Vehicle Dynamics Test Methods Part 5: Subjective Evaluation of Vehicle Ride, Handling and Steering",
  },
  {
    sno: 7,
    isNumber: "ISO/SAE 21434:2021",
    isTitle:
      "ROAD VEHICLES CYBER SECURITY ENGINEERING",
  },
  {
    sno: 8,
    isNumber: "IS 19212:2025",
    isTitle:
      "SPACE SYSTEMS – LAUNCH PAD AND INTEGRATION SITE – FACILITY, SYSTEM AND EQUIPMENT FAILURE ANALYSIS",
  },
  {
    sno: 9,
    isNumber: "IS 19216:2025",
    isTitle:
      "SPACE SYSTEMS LIQUID ROCKET ENGINES AND TEST STANDS TERMS AND DEFINITIONS",
  },
  {
    sno: 10,
    isNumber: "IS 19215:2025",
    isTitle:
      "Space Systems – The Measured Parameters at Firing Bench and Flight Tests of Liquid Rocket Engines",
  },
  {
    sno: 11,
    isNumber: "IS 19224:2025",
    isTitle:
      "SPACE SYSTEMS – BELLOWS – DESIGN AND OPERATION",
  },
  {
    sno: 12,
    isNumber: "IS 19266:2025",
    isTitle:
      "SPACE SYSTEMS – ORBIT DETERMINATION AND ESTIMATION – PROCESS FOR DESCRIBING TECHNIQUES",
  },
  {
    sno: 13,
    isNumber: "IS 19271:2025",
    isTitle:
      "Space Systems – Structural Design – Loads and Induced Environment",
  },
  {
    sno: 14,
    isNumber: "IS 19289:2025",
    isTitle:
      "SPACE SYSTEMS – RISK MANAGEMENT",
  },
  {
    sno: 15,
    isNumber: "IS 19290:2025",
    isTitle:
      "SPACE SYSTEMS PROJECT REVIEWS",
  },
  {
    sno: 16,
    isNumber: "IS 19302:2025",
    isTitle:
      "SPACE SYSTEMS – SPACE LAUNCH COMPLEXES, INTEGRATION SITES AND OTHER FACILITIES – GENERAL TESTING GUIDELINES",
  },
  {
    sno: 17,
    isNumber: "IS 19265:2025",
    isTitle:
      "SPACE SYSTEMS – LITHIUM ION BATTERY FOR SPACE VEHICLES – DESIGN AND VERIFICATION REQUIREMENTS",
  },
  {
    sno: 18,
    isNumber: "IS 19217:2025",
    isTitle:
      "SPACE SYSTEMS – DESIGN QUALIFICATION AND ACCEPTANCE TESTS OF SMALL SPACECRAFT AND UNITS",
  },
  {
    sno: 19,
    isNumber: "IS 19258:2025",
    isTitle:
      "SPACE SYSTEMS – QUALIFICATION ASSESSMENT",
  },
  {
    sno: 20,
    isNumber: "IS 19288:2025",
    isTitle:
      "SPACE SYSTEMS – INTEGRATED LOGISTIC SUPPORT",
  },
  {
    sno: 21,
    isNumber: "IS 19065 (Part 4):2025",
    isTitle:
      "SPACE SYSTEMS – SURFACE CLEANLINESS OF FLUID SYSTEMS – PART 4: ROUGH-CLEANING PROCESSES",
  },
  {
    sno: 22,
    isNumber: "IS 19211:2025",
    isTitle:
      "Space Systems – Structural Design – Determination of Loading Levels for Static Qualification Testing of Launch Vehicles",
  },
  {
    sno: 23,
    isNumber: "IS 19065 (Part 6):2025",
    isTitle:
      "SPACE SYSTEMS – SURFACE CLEANLINESS OF FLUID SYSTEMS – PART 6: PRECISION-CLEANING PROCESSES",
  },
  {
    sno: 24,
    isNumber: "IS 19280:2025",
    isTitle:
      "SPACE SYSTEMS – LAUNCH-VEHICLE-TO-SPACECRAFT INTERFACES",
  },
  {
    sno: 25,
    isNumber: "IS 19299:2025",
    isTitle:
      "SPACE SYSTEMS – CONTAMINATION AND CLEANLINESS CONTROL",
  },
  {
    sno: 26,
    isNumber: "IS 19297:2025",
    isTitle:
      "Ships and Marine Technology Cyber Safety",
  },
  {
    sno: 27,
    isNumber: "IS 8007 (Part 3):2026",
    isTitle:
      "Road vehicles Mechanical couplings between tractors and semi-trailers Part 3: Requirements for semi-trailer contact area to fifth wheel",
  },
  {
    sno: 28,
    isNumber: "IS 19413:2025",
    isTitle:
      "Intelligent Traffic Management System Components — General Specifications for Smart Traffic Signalling Systems",
  },
];

const textilesDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19441:2025",
    isTitle:
      "Textiles — Smoothness Characteristics of Fabric — Methods of Test",
  },
  {
    sno: 2,
    isNumber: "IS 19577 (Part 1):2026",
    isTitle:
      "Textiles — Test Methods for Evaluating the Electrostatic Propensity of Fabrics — Part 1: Test Method Using Corona Charging",
  },
  {
    sno: 3,
    isNumber: "IS 19577 (Part 2):2026",
    isTitle:
      "Textiles — Test Methods for Evaluating the Electrostatic Propensity of Fabrics — Part 2: Test Method Using Rotary Mechanical Friction",
  },
  {
    sno: 4,
    isNumber: "IS 19577 (Part 3):2026",
    isTitle:
      "Textiles — Test Methods for Evaluating the Electrostatic Propensity of Fabrics — Part 3: Test Method Using Manual Friction",
  },
  {
    sno: 5,
    isNumber: "IS 19577 (Part 4):2026",
    isTitle:
      "Textiles — Test Methods for Evaluating the Electrostatic Propensity of Fabrics — Part 4: Test Method Using Horizontal Mechanical Friction",
  },
  {
    sno: 6,
    isNumber: "IS 1966 (Part 3):2026",
    isTitle:
      "Textiles — Bursting Properties of Fabrics — Part 3: Ball Bursting Method for Determination of Bursting Strength and Bursting Distension",
  },
  {
    sno: 7,
    isNumber: "IS 19728:2026",
    isTitle:
      "Textiles — Jute Bags for filling 5 kg, 10 kg and 15 kg Foodgrains — Specification",
  },
  {
    sno: 8,
    isNumber: "IS 19357:2025",
    isTitle:
      "Textile Floor Coverings — State of the Art on Maintenance and Cleaning",
  },
  {
    sno: 9,
    isNumber: "IS 19699:2026",
    isTitle:
      "Textile Floor Coverings — Broadloom Woven Carpet — Specification",
  },
  {
    sno: 10,
    isNumber: "IS 17260 (Part 2):2026",
    isTitle:
      "Textile Floor Coverings — Production of Changes in Appearance — Part 2: Hexapod Tumbler Test (First Revision)",
  },
  {
    sno: 11,
    isNumber: "IS 19712:2026",
    isTitle:
      "Textiles — Determination of Dimensional Change of Fabrics — Accelerated Machine Method",
  },
  {
    sno: 12,
    isNumber: "IS 19703:2026",
    isTitle:
      "Textiles — Method of Test — Determination of Polycyclic Aromatic Hydrocarbons After Toluene Extraction by Gas Chromatography–Mass Spectrometry",
  },
  {
    sno: 13,
    isNumber: "IS 19754:2026",
    isTitle:
      "Textiles — Determination of Dyes After Methanol Extraction",
  },
  {
    sno: 14,
    isNumber: "IS 19704:2026",
    isTitle:
      "Jute Packaging Material — Determination of Mineral Oil Saturated Hydrocarbons (MOSH) and Mineral Oil Aromatic Hydrocarbons (MOAH) with Online-Coupled High-Performance Liquid Chromatography–Gas Chromatography–Flame Ionization Detection (HPLC-GC-FID) Analysis",
  },
  {
    sno: 15,
    isNumber: "IS 19755:2026",
    isTitle:
      "Textiles — Determination of Pesticide Residues Content",
  },
  {
    sno: 16,
    isNumber: "IS 19777:2026",
    isTitle:
      "Textiles — Determination of Index Ingredient in Coloured Textiles Dyed with Himalayan Rhubarb",
  },
  {
    sno: 17,
    isNumber: "IS 19776:2026",
    isTitle:
      "Textiles — Determination of Index Ingredient in Coloured Textiles Dyed with Hibiscus",
  },
  {
    sno: 18,
    isNumber: "IS 19414:2025",
    isTitle:
      "Textiles - Helideck Landing Net Made from Sisal or Manila Ropes - Specification",
  },
  {
    sno: 19,
    isNumber: "IS 19387:2025",
    isTitle:
      "Textiles — Single Jersey Cotton, Synthetic and Blended Leggings — Specification",
  },
  {
    sno: 20,
    isNumber: "IS 19388:2025",
    isTitle:
      "Textiles — Single Jersey Cotton, Synthetic and Blended Shorts — Specification",
  },
  {
    sno: 21,
    isNumber: "IS 19373:2025",
    isTitle:
      "Textiles — Single Jersey Cotton, Synthetic and Blended Women's Stockings — Specification",
  },
  {
    sno: 22,
    isNumber: "IS 19782:2026",
    isTitle:
      "Textiles — Knitted Pyjamas — Specification",
  },
  {
    sno: 23,
    isNumber: "IS 19774:2026",
    isTitle:
      "TEXTILES — BAXTER FLYER FOR SLIP DRAFT JUTE SPINNING FRAME — SPECIFICATION",
  },
  {
    sno: 24,
    isNumber: "IS 19784:2026",
    isTitle:
      "Fish Cage Net Structures Used in Aquaculture — Glossary of Terms",
  },
  {
    sno: 25,
    isNumber: "IS 19523:2026",
    isTitle:
      "Textiles — Children Apparel — Safety Requirements",
  },
  {
    sno: 26,
    isNumber: "IS 19594:2026",
    isTitle:
      "Textiles — Woven Trouser — Specification",
  },
  {
    sno: 27,
    isNumber: "IS 19593:2026",
    isTitle:
      "Textiles — Woven Shirt — Specification",
  },
  {
    sno: 28,
    isNumber: "IS 19662:2026",
    isTitle:
      "Textiles — Field Service Cap — Specification",
  },
  {
    sno: 29,
    isNumber: "IS 19596:2026",
    isTitle:
      "Textiles — Filled Jacket — Specification",
  },
  {
    sno: 30,
    isNumber: "IS 19602:2026",
    isTitle:
      "Textiles — Peak Cap — Specification",
  },
  {
    sno: 31,
    isNumber: "IS 18305 (Part 3):2026",
    isTitle:
      "Performance Evaluation Protocol for Digital Fitting Systems — Part 3: Digital Fitting Performance — Gap",
  },
  {
    sno: 32,
    isNumber: "IS/ISO 8559-4:2023",
    isTitle:
      "Size Designation of Clothes — Part 4: Determination of the Coverage Ratios of Body Measurement Tables",
  },
  {
    sno: 33,
    isNumber: "IS/ISO 8559-5:2023",
    isTitle:
      "Size Designation of Clothes — Part 5: Anthropometric Measurements for the Head and Face",
  },
  {
    sno: 34,
    isNumber: "IS 19727:2026",
    isTitle:
      "TEXTILES — COIR BASED GREEN ROOF MODULE — SPECIFICATION",
  },
  {
    sno: 35,
    isNumber: "IS 19660:2026",
    isTitle:
      "Determination of Long-Term Flow of Geosynthetic Drains",
  },
  {
    sno: 36,
    isNumber: "IS 19764 (Part 2):2026",
    isTitle:
      "Geosynthetics — Determination of Compression Behaviour — Part 2: Determination of Short-Term Compression Behaviour",
  },
  {
    sno: 37,
    isNumber: "IS 19664:2026",
    isTitle:
      "Geosynthetics — Guidelines for the Assessment of Durability",
  },
  {
    sno: 38,
    isNumber: "IS 19663:2026",
    isTitle:
      "Geosynthetics — Test Method for the Determination of Water Discharge Capacity for Prefabricated Vertical Drains",
  },
  {
    sno: 39,
    isNumber: "IS 19498:2025",
    isTitle:
      "Textiles — Treated Synthetic Fabrics for Conveyor Belts — Specification",
  },
  {
    sno: 40,
    isNumber: "IS 19463:2025",
    isTitle:
      "Agro Textiles — High Density Polyethylene (HDPE) Woven Dry Fodder Storage Bags — Specification",
  },
  {
    sno: 41,
    isNumber: "IS 19706:2026",
    isTitle:
      "Medical Textiles — Scrub Suit — Specification",
  },
  {
    sno: 42,
    isNumber: "IS 19393:2026",
    isTitle:
      "Textiles - Sports Ropes - Specification",
  },
  {
    sno: 43,
    isNumber: "IS 19656:2026",
    isTitle:
      "TEXTILES — GREIGE AND DIPPED POLYESTER TYRE CORD FABRIC FOR AUTOMOTIVE TYRES — SPECIFICATION",
  },
  {
    sno: 44,
    isNumber: "IS 19780:2026",
    isTitle:
      "TEXTILES — WOVEN CLOTH LABELS — SPECIFICATION",
  },
  {
    sno: 45,
    isNumber: "IS 19436:2025",
    isTitle:
      "Textiles Smart Textiles Test Method for Sheet Resistance of Conductive Textiles using Non-Contact Type",
  },
  {
    sno: 46,
    isNumber: "IS 19437:2025",
    isTitle:
      "TEXTILES AND TEXTILE PRODUCTS SMART INTELLIGENT TEXTILES DEFINITIONS CATEGORISATION APPLICATIONS AND STANDARDIZATION NEEDS",
  },
];

const waterResourcesDepartmentStandardsData = [
  {
    sno: 1,
    isNumber: "IS 19738:2026",
    isTitle:
      "Parameters and Assessment Criteria for Downstream Flow to Maintain Ecological Balance — Guidelines",
  },
  {
    sno: 2,
    isNumber: "IS 19744:2026",
    isTitle:
      "Preparation of Catchment Area Treatment (CAT) Plan — Guidelines",
  },
  {
    sno: 3,
    isNumber: "IS 19411:2026",
    isTitle: "GLOSSARY OF TERMS RELATED TO COASTAL ENGINEERING",
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

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

      <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

        {/* table of upcoming products of Environment and Ecology Department under BIS Certification */}
        <DepartmentStandardsTable
          data={environmentAndEcologyDepartmentStandardsData}
        />

  {/* ----------------------------------------------------------------------------------------------------------------------- */}

    <div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

        {/* table of upcoming products of Electro-technical Department under BIS Certification */}
        <DepartmentStandardsTable
          data={electrotechnicalDepartmentStandardsData}
        />

{/* ----------------------------------------------------------------------------------------------------------------------- */}

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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


        {/* table of upcoming products of Food and Agriculture Department under BIS Certification */}
        <DepartmentStandardsTable
          data={foodAndAgricultureDepartmentStandardsData}
        />

{/* ----------------------------------------------------------------------------------------------------------------------------- */}
      
        <div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

        {/* table of upcoming products of Electronics and Information Technology Department under BIS Certification */}
        <DepartmentStandardsTable
          data={electronicsAndInformationTechnologyDepartmentStandardsData} 
        />

  {/* ---------------------------------------------------------------------------------------------------------------------------` */}
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

              {/* table of upcoming products of Mechanical Engineering Department under BIS Certification */}
        <DepartmentStandardsTable
          data={mechanicalEngineeringDepartmentStandardsData}

        />




{/* ------------------------------------------------------------------------------------------------------------------------------------- */}
  
        <div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
  Medical Equipment and Hospital Planning Department (MHD)
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

{/* table of upcoming products of Medical Equipment and Hospital Planning Department under BIS Certification */}
        <DepartmentStandardsTable
          data={medicalEquipmentAndHospitalPlanningDepartmentStandardsData}
        />

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

{/* table of upcoming products of Management and Systems Department under BIS Certification */}
        <DepartmentStandardsTable
          data={managementAndSystemsDepartmentStandardsData}
        />

{/* ---------------------------------------------------------------------------------------------------- */}
<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

    {/* table of upcoming products of Metallurgical Engineering Department under BIS Certification */}
        <DepartmentStandardsTable
          data={metallurgicalEngineeringDepartmentStandardsData}
        />

{/* ------------------------------------------------------------------------------------------------------------------------------- */}
      

<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

{/* table of upcoming products of Petroleum, Coal and Related Products Department under BIS Certification */}
        <DepartmentStandardsTable
          data={petroleumCoalAndRelatedProductsDepartmentStandardsData}
        />

{/* --------------------------------------------------------------------------------------------------------------- */}

<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

{/* table of upcoming products of Production and General Engineering Department under BIS Certification */}
        <DepartmentStandardsTable
          data={productionAndGeneralEngineeringDepartmentStandardsData}
        />

  {/* ----------------------------------------------------------------------------------- */}


<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

{/* table of upcoming products of Service Sector Department under BIS Certification */}
        <DepartmentStandardsTable data={serviceSectorDepartmentStandardsData} />

{/* -------------------------------------------------------------------------------------------------------------------------- */}


<div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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

{/* table of upcoming products of Transport Engineering Department under BIS Certification */}
        <DepartmentStandardsTable
          data={transportEngineeringDepartmentStandardsData}
        />

  {/* ------------------------------------------------------------------------------------------------ */}

       
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

{/* table of upcoming products of Textiles Department under BIS Certification */}
        <DepartmentStandardsTable data={textilesDepartmentStandardsData} />

        {/* ----------------------------------------------------------------------------------------------- */}


        <div className="h-px w-full bg-gray-300 my-6"></div>

<h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-2">
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



{/* table of upcoming products of Water Resources Department under BIS Certification */}
        <DepartmentStandardsTable
          data={waterResourcesDepartmentStandardsData}
        />
<div className="h-px w-full bg-gray-300 my-6"></div>
{/* --------------------------------------------------------------------------------- */}
     

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
