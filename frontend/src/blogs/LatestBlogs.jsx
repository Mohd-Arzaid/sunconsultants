/* eslint-disable react/prop-types */

// =============================
// IMPORTS
// =============================

// React & React Hooks
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// External Libraries - UI Icons
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SlashIcon, ChevronLeft, ChevronRight } from "lucide-react";

// UI Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

// Custom Components
import AboutContact from "@/components/manual/about/AboutContact";
import Footer from "@/common/Footer";

// =============================
// DATA
// =============================

/**
 * Blog data containing all available blog posts
 * Each blog has an id, color theme, title, description and slug for routing
 */
const blogs = [
  {
    id: 1,
    color: "#8B5CF6", // Purple
    title: "BIS Certification for Tin Ingot under IS 26:2024",
    description:
      "Everything manufacturers need to know about the mandatory BIS certification for tin ingots from 17th October 2025. Learn about the application process, required documents, costs, and compliance requirements.",
    slug: "bis-certificate-for-tin-ingots",
    date: "14 September 2025",
    image: "/blogImages/BISCertificationforTinIngots.png",
  },
  {
    id: 2,
    color: "#10B981", // Green
    title: "BIS Certification for Refined Zinc under IS 209:2024",
    description:
      "Complete guide for manufacturers on obtaining BIS certification for refined zinc. Understand the certification process, documentation requirements, and compliance deadlines under IS 209:2024.",
    slug: "bis-certificate-for-refined-zinc",
    date: "15 September 2025",
  },
  {
    id: 3,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Bunk Beds – IS 17636:2022",
    description:
      "Get BIS Certificate for bunk beds under IS 17636:2022. Complete guide covering process, documents, testing requirements, cost, timeline, and compliance for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/isi-products/bunk-beds-is-17636",
    date: "02 October 2025",
  },
  {
    id: 4,
    color: "#C86A31",
    title: "BIS Certificate for Storage Unit – IS 17634:2022",
    description:
      "Get BIS Certificate for Storage Unit under IS 17634:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for cabinets, wardrobes, and storage furniture.",
    slug: "blogs/isi-products/storage-unit-is-17634",
    date: "02 October 2025",
  },
  {
    id: 41,
    color: "#2D7DD2",
    title: "BIS Certification for Vaccum Cleaners – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Vaccum Cleaners under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for battery-operated and cordless vacuum cleaners.",
    slug: "blogs/isi-products/battery-operated-vaccum-cleaners",
    date: "19 February 2026",
    image: "/blogImages/BISLicenseforVaccumCleaners.png",
  },
  {
    id: 46,
    color: "#1A8781",
    title: "BIS Certificate for Furniture with Electrically Motorized Parts – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Furniture with Electrically Motorized Parts under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers electric beds, motorized recliners, height-adjustable desks & smart furniture.",
    slug: "blogs/isi-products/furniture-with-electrically-motorized-parts",
    date: "28 February 2026",
    image: "/blogImages/BISLicenseforFurniturewithElectricallyMotorizedParts.png",
  },
  {
    id: 47,
    color: "#EC4899",
    title: "BIS Certificate for Skin Beauty Care Appliances – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Skin Beauty Care Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers facial cleansing devices, LED therapy, microcurrent tools & beauty appliances.",
    slug: "blogs/isi-products/skin-beauty-care-appliances",
    date: "02 March 2026",
    image: "/blogImages/BISLicenseforSkinBeautyCareAppliances.png",
  },
  {
    id: 48,
    color: "#0EA5E9",
    title: "BIS Certification for Personal-eTransporters – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Personal-eTransporters under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers hoverboards, self-balancing scooters & electric mobility devices.",
    slug: "blogs/isi-products/personal-etransporters",
    date: "28 Feb 2026",
    image: "/blogImages/BISLicenseforPersonaleTransporters .png",
  },
  {
    id: 49,
    color: "#059669",
    title: "BIS Certificate for Electrolysers – IS 302 (Part 1):2024 Complete Guide",
    description:
      "Get BIS Certificate for Electrolysers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers hydrogen generation & electrolyser systems.",
    slug: "blogs/isi-products/electrolysers",
    date: "02 March 2026",
    image: "/blogImages/BISLicenseforElectrolysers.png",
  },
  {
    id: 50,
    color: "#7C3AED",
    title: "BIS Certification for Vaporizers – IS 302 (Part 1):2024 Complete Guide",
    description:
      "Get BIS Certificate for Vaporizers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers steam & vapor appliances.",
    slug: "blogs/isi-products/vaporizers",
    date: "02 March 2026",
    image: "/blogImages/BISLicenseforVaporizers.png",
  },
  {
    id: 51,
    color: "#DC2626",
    title: "BIS Certification for Commercial Electric Hoods – IS 302 (Part 1):2024 Complete Guide",
    description:
      "Get BIS Certificate for Commercial Electric Hoods under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers kitchen ventilation systems.",
    slug: "blogs/isi-products/commercial-electric-hoods",
    date: "03 March 2026",
    image: "/blogImages/BISLicenseforCommercialElectricHoods.png",
  },
  {
    id: 73,
    color: "#CA8A04",
    title:
      "BIS Certification for Chipboard Screws – Complete Guide to IS 18508:2024",
    description:
      "Get BIS Certificate for Chipboard Screws under IS 18508:2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/chipboard-screws-is-18508",
    date: "19 April 2026",
    image: "/blogImages/BISLicenseforChipboardScrews.png",
  },
  {
    id: 76,
    color: "#0EA5E9",
    title:
      "BIS Certificate for Asbestos Cement Cable Conduits and Troughs - IS 8870:1978",
    description:
      "Get BIS Certificate for Asbestos Cement Cable Conduits and Troughs under IS 8870:1978. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/asbestos-cement-cable-conduits-and-troughs-is-8870",
    date: "12 April 2026",
    image: "/blogImages/BISLicenseforAsbestosCementCableConduitsandTroughs.webp",
  },
  {
    id: 52,
    color: "#0ea5e9",
    title: "BIS Certification for Humidifiers – Complete Guide to IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Humidifiers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/humidifiers",
    date: "03 March 2026",
    image: "/blogImages/BISLicenseforHumidifiers.png",
  },
  {
    id: 53,
    color: "#2563EB",
    title: "BIS Certificate for Fabric Streamers - Complete Guide",
    description:
      "Get BIS Certificate for Fabric Streamers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/fabric-streamers",
    date: "05 March 2026",
    image: "/blogImages/BISLicenseforFabricStreamers.png",
  },
  {
    id: 54,
    color: "#22C55E",
    title:
      "BIS Certification for Toilet Appliances – Complete Guide to IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Toilet Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/toilet-appliances",
    date: "05 March 2026",
    image: "/blogImages/BISLicenseforToiletAppliances.png",
  },
  {
    id: 55,
    color: "#1D4ED8",
    title:
      "BIS Certification for Clothes Dryers – Complete Guide to IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Clothes Dryers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/clothes-dryers",
    date: "28 March 2026",
    image: "/blogImages/BISLicensefor%20lothesDryers.png",
  },
  {
    id: 56,
    color: "#15803D",
    title:
      "BIS Certification for Food Waste Disposers – Complete Guide to IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Food Waste Disposers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/food-waste-disposers",
    date: "28 March 2026",
    image: "/blogImages/BISLicenseforFoodWasteDisposers.png",
  },
  {
    id: 5,
    color: "#f7b186",
    title: "BIS Certification in Indonesia",
    description:
      "In today’s global economy, international trade is no longer just about finding buyers and setting up supply chains. It is increasingly about compliance",
    slug: "bis-certification-in-indonesia",
  },
  {
    id: 6,
    color: "#3B82F6", // Blue
    title: "BIS Certification in the Netherlands",
    description:
      "BIS Certification in Netherlands is a regulatory necessity, a mark of trust, credibility, and commitment to quality for Dutch manufacturers aiming to enter and thrive in the Indian market.",
    slug: "bis-certification-in-netherlands",
  },
  {
    id: 7,
    color: "#EC4899", // Pink
    title: "BIS Certification in Korea",
    description:
      "Complete guide for Korean manufacturers exporting to India. Learn about BIS FMCS certification process, required documents, AIR appointment, and how to ensure regulatory compliance for entering the Indian market.",
    slug: "bis-certification-in-korea",
  },
  {
    id: 8,
    color: "#F59E0B", // Amber
    title: "BIS Certification in Japan",
    description:
      "Essential guide for Japanese manufacturers exporting to India. Understand BIS FMCS certification, factory audits, product testing, AIR services, and how to navigate Indian regulatory compliance for market entry.",
    slug: "bis-certification-in-japan",
  },
  {
    id: 9,
    color: "#EF4444", // Red
    title: "BIS Certification in Italy",
    description:
      "Comprehensive guide for Italian exporters on BIS FMCS certification. Learn about compliance requirements, documentation, factory audits, AIR services, and how to successfully enter the Indian market.",
    slug: "bis-certification-in-italy",
  },
  {
    id: 10,
    color: "#DC2626", // Red (Spanish color)
    title: "BIS Certification in Spain",
    description:
      "Securing BIS certification in Spain is a mandatory requirement for the manufacturers looking to export or sell their products in the Indian market.",
    slug: "bis-certification-in-spain",
  },
  {
    id: 11,
    color: "#0055A4", // Blue (French color)
    title: "BIS Certification in France",
    description:
      "BIS certification in France is a legal requirement for the manufacturers looking to export or sell their products in the Indian market.",
    slug: "bis-certification-in-france",
  },
  {
    id: 12,
    color: "#000000", // Black
    title: "BIS Certification in Germany",
    description:
      "Essential guide for German manufacturers exporting to India. Learn about BIS FMCS certification, ISI Mark requirements, factory inspections, and how German exporters can achieve regulatory compliance for Indian market access.",
    slug: "bis-certification-in-germany",
  },
  {
    id: 13,
    color: "#1E40AF", // Blue (USA flag color)
    title: "BIS Certification in USA",
    description:
      "Comprehensive guide for U.S. manufacturers exporting to India. Learn about BIS FMCS certification, ISI Mark requirements, AIR appointment, factory inspections, and regulatory compliance for successful Indian market entry.",
    slug: "bis-certification-in-usa",
  },
  {
    id: 14,
    color: "#F97316", // Orange
    title: "BIS Certification for Massage Appliances – IS 302 (Part 1):2024",
    description:
      "Complete guide to BIS certification for battery operated massage appliances under IS 302 (Part 1):2024. Learn about safety requirements, testing, documentation, costs, and compliance for massage devices in India.",
    slug: "blogs/isi-products/battery-operated-massage-appliances",
    date: "03 February 2026",
  },
  {
    id: 15,
    color: "#eb15ce",
    title: "BIS Certification in Vietnam",
    description:
      "In the evolving landscape of international trade, maintaining quality and compliance with global standards has become indispensable for businesses aiming to expand beyond domestic borders. For Vietnamese exporters targeting the Indian market",
    slug: "bis-certification-in-vietnam",
  },
  {
    id: 16,
    color: "#f7f714",
    title: "BIS Certification in Thailand",
    description:
      "India and Thailand share a long-standing trade relationship, marked by mutual economic growth and cultural exchange. Over the years, Thailand has become one of the key trading partners for India in Southeast Asia. From electrical goods, machinery",
    slug: "bis-certification-in-thailand",
  },
  {
    id: 17,
    color: "#10B981", // Green
    title: "BIS Certificate for Work Chairs – IS 17631:2022",
    description:
      "Get BIS Certificate for Work Chairs under IS 17631:2022. Complete compliance guide covering process, documents, testing requirements, fees, timeline, and benefits for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/isi-products/work-chairs-is-17631",
    date: "10 October 2025",
  },
  {
    id: 18,
    color: "#EF4444", // Red
    title: "BIS Certificate for Chair & Stools – IS 17632:2022",
    description:
      "Get BIS Certificate for Chair & Stool under IS 17632:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for general purpose chairs and stools.",
    slug: "blogs/isi-products/chairs-and-stools-is-17632",
    date: "12 October 2025",
  },
  {
    id: 19,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Tables & Desks – IS 17633:2022",
    description:
      "Get BIS Certificate for Tables & Desks under IS 17633:2022. Complete guide covering process, documents, testing requirements, cost, timeline, and compliance for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/isi-products/tables-&-desks-is-17633",
    date: "14 October 2025",
  },
  {
    id: 20,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Furniture in India – Complete Detailed Guide",
    description:
      "Complete guide to BIS Certification for Furniture in India. Learn about BIS License, BIS Mark, applicable standards, certification process, cost, documents, compliance requirements, and how to get BIS Certificate for furniture manufacturers.",
    slug: "blogs/isi-products/furniture",
    date: "15 October 2025",
    image: "/blogImages/BISLicenseforFurniture.png",
  },
  {
    id: 21,
    color: "#3B82F6", // Blue
    title: "BIS Certificate for Beds – IS 17635:2022",
    description:
      "Get BIS Certificate for beds under IS 17635:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for manufacturers and importers.",
    slug: "blogs/isi-products/beds-is-17635",
    date: "16 October 2025",
  },
  {
    id: 22,
    color: "#EC4899", // Pink
    title: "BIS Certificate for Welded Pipes & Tubes – IS 17876:2022",
    description:
      "Get BIS Certificate for Welded Pipes & Tubes under IS 17876:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for stainless steel welded pipes and tubes.",
    slug: "blogs/isi-products/welded-pipes-&-tubes-is-17876",
    date: "18 October 2025",
  },
  {
    id: 23,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Seamless Pipes & Tubes – IS 17875:2022",
    description:
      "Get BIS Certificate for Seamless Pipes & Tubes under IS 17875:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for seamless steel pipes and tubes.",
    slug: "blogs/isi-products/seamless-pipes-&-tubes-is-17875",
    date: "20 October 2025",
  },
  {
    id: 24,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Flashlight – IS 2083:2024",
    description:
      "Get BIS Certificate for Flashlight under IS 2083:2024. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for flashlights and torches.",
    slug: "blogs/isi-products/flashlight-is-2083",
    date: "05 December 2025",
  },
  {
    id: 25,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Electric Fence Energizers – IS 302-2-76:1999",
    description:
      "Get BIS Certificate for Electric Fence Energizers under IS 302-2-76:1999. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for electric fence energizers.",
    slug: "blogs/isi-products/electric-fence-energizers-is-302-2-76",
    date: "05 December 2025",
  },
  {
    id: 26,
    color: "#10B981", // Green
    title: "BIS Certificate for Solar Water Heating Systems – IS 16542:2016",
    description:
      "Get BIS Certificate for Solar Water Heating Systems under IS 16542:2016. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for solar water heating systems.",
    slug: "blogs/isi-products/solar-water-heating-systems-is-16542",
    date: "05 December 2025",
  },
  {
    id: 27,
    color: "#3B82F6", // Blue
    title: "BIS Certificate for Solar Flat Plate Collector – IS 12933:2003",
    description:
      "Get BIS Certificate for Solar Flat Plate Collector under IS 12933:2003. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for solar flat plate collectors.",
    slug: "blogs/isi-products/solar-flat-plate-collector-is-12933",
    date: "10 December 2025",
  },
  {
    id: 28,
    color: "#EC4899", // Pink
    title: "BIS Certificate for Fibre Ropes of Polyester – IS 17609:2021",
    description:
      "Get BIS Certificate for Fibre Ropes of Polyester under IS 17609:2021. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for polyester fibre ropes.",
    slug: "blogs/isi-products/fibre-ropes-polyster-is-17609",
    date: "14 December 2025",
  },
  {
    id: 29,
    color: "#EF4444", // Red
    title: "BIS Certificate for Fibre Ropes – Polyethylene – IS 17636:2022",
    description:
      "Get BIS Certificate for Fibre Ropes (Polyethylene) under IS 17636:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for polyethylene fibre ropes.",
    slug: "blogs/isi-products/fibre-ropes-polyethylene-8674",
    date: "15 December 2025",
  },
  {
    id: 30,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Fibre Ropes – Polyamide – IS 4572:2022",
    description:
      "Get BIS Certificate for Fibre Ropes (Polyamide) under IS 4572:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for polyamide fibre ropes.",
    slug: "blogs/isi-products/fibre-ropes-polyamide-is-4572",
    date: "15 December 2025",
  },
  {
    id: 31,
    color: "#1E40AF", // Blue
    title: "BIS Certificate for Steel Wire Ropes – IS 1804:2004",
    description:
      "Get BIS Certificate for Steel Wire Ropes under IS 1804:2004. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for steel wire ropes.",
    slug: "blogs/isi-products/steel-wire-ropes-is-1804",
    date: "10 December 2025",
  },
  {
    id: 32,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Mixed Polyolefin Fibre Ropes – IS 14929:2022",
    description:
      "Get BIS Certificate for Mixed Polyolefin Fibre Ropes under IS 14929:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for mixed polyolefin fibre ropes.",
    slug: "blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022",
    date: "22 December 2025",
  },
  {
    id: 33,
    color: "#10B981", // Green
    title:
      "BIS Certificate for Composite Synthetic Fibre Ropes – IS 14928:2001",
    description:
      "Get BIS Certificate for Composite Synthetic Fibre Ropes under IS 14928:2001. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for composite synthetic fibre ropes.",
    slug: "blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928",
    date: "10 December 2025",
  },
  {
    id: 34,
    color: "#3B82F6", // Blue
    title: "BIS Certificate for Manila Ropes – IS 1084",
    description:
      "Get BIS Certificate for Manila Ropes under IS 1084. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for manila ropes.",
    slug: "blogs/isi-products/manila-ropes-is-1084",
    date: "15 December 2025",
  },
  {
    id: 35,
    color: "#EC4899", // Pink
    title: "BIS Certificate for Flat Woven Webbing Slings – IS 15041",
    description:
      "Get BIS Certificate for Flat Woven Webbing Slings under IS 15041. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for flat woven webbing slings.",
    slug: "blogs/isi-products/flat-woven-webbing-slings-is-15041",
    date: "15 December 2025",
  },
  {
    id: 36,
    color: "#EF4444", // Red
    title: "BIS Certificate for Combination Side Cutting Pliers – IS 3650",
    description:
      "Get BIS Certificate for Combination Side Cutting Pliers under IS 3650. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for combination side cutting pliers.",
    slug: "blogs/isi-products/combination-side-cutting-pliers-is-3650",
    date: "15 December 2025",
  },
  {
    id: 37,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Pipe Wrenches – Heavy Duty – IS 4003",
    description:
      "Get BIS Certificate for Pipe Wrenches (Heavy Duty) under IS 4003. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for heavy duty pipe wrenches.",
    slug: "blogs/isi-products/pipe-wrenches-is-4003",
    date: "20 December 2025",
  },
  {
    id: 38,
    color: "#10B981", // Green
    title: "BIS Certificate for Ring Wrenches – IS 2029:1998",
    description:
      "Ring Wrenches (also known as ring spanners) are indispensable hand tools used across automotive workshops, mechanical maintenance, heavy engineering",
    slug: "blogs/isi-products/ring-wrenches-is-2029",
    date: "22 December 2025",
  },
  {
    id: 39,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Open-Jaw Wrenches – IS 2028:2004",
    description:
      "Get BIS Certificate for Open-Jaw Wrenches under IS 2028:2004. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for open-jaw wrenches (open-end spanners).",
    slug: "blogs/isi-products/open-jaw-wrenches-is-2028",
    date: "22 December 2025",
  },
  {
    id: 40,
    color: "#EC4899", // Pink
    title: "BIS Certificate for Adjustable Wrenches – IS 6149:1984",
    description:
      "Get BIS Certificate for Single-ended Open-jaw Adjustable Wrenches under IS 6149:1984. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for adjustable wrenches.",
    slug: "blogs/isi-products/adjustable-wrenches-is-6149",
    date: "22 December 2025",
  },
  {
    id: 41,
    color: "#DC2626", // Red
    title: "BIS Certificate for Chain Pipe Wrenches – IS 4123:1982",
    description:
      "Get BIS Certificate for Chain Pipe Wrenches under IS 4123:1982. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for chain pipe wrenches used in heavy industrial applications.",
    slug: "blogs/isi-products/chain-pipe-wrenches-is-4123",
    date: "20 December 2025",
  },
  {
    id: 42,
    color: "#10B981", // Green
    title:
      "BIS Certificate for Battery Operated Air Purifier – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Battery Operated Air Purifier under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for battery operated air purifiers.",
    slug: "blogs/isi-products/battery-operated-air-purifier-is-302",
    date: "25 December 2025",
  },
  {
    id: 43,
    color: "#F59E0B", // Amber/Orange
    title:
      "BIS Certification Foot Warmer and Heating Mats – Complete Guide to IS 302 (Part 1):2024",
    description:
      "Foot Warmers and Heating Mats have become increasingly popular in India due to changing lifestyles, rising awareness of personal comfort, and growing demand for localized heating solutions. These products are widely used in homes, offices, hospitals, hotels, hostels, clinics, and personal spaces, especially during winter seasons or in air-conditioned environments.",
    slug: "blogs/isi-products/foot-warmer-&-heating-mats-is-302",
    date: "25 December 2025",
  },
  {
    id: 44,
    color: "#3B82F6", // Blue
    title:
      "BIS Certification Battery-Operated Toothbrush – Complete Guide to IS 302 (Part 1):2024",
    description:
      "The Indian oral-care market has witnessed rapid growth in recent years, with Battery-Operated Toothbrushes becoming a preferred choice among consumers seeking better hygiene, convenience, and effective plaque removal. These toothbrushes are widely used in homes, hotels, hospitals, travel kits, and personal care routines, especially by children, elderly users, and people with limited hand mobility.",
    slug: "blogs/isi-products/battery-operated-tootbrush-is-302",
    date: "25 December 2025",
  },
  {
    id: 45,
    color: "#10B981", // Green
    title: "BIS Certificate for Shavers, Trimmers & Clippers – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for battery-operated shavers, trimmers, clippers and similar appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide for manufacturers and importers.",
    slug: "blogs/isi-products/battery-operated-shavers-trimmers-clippers-and-similar-appliances",
    date: "14 February 2026",
    image: "/blogImages/BISLicenseforShaversTrimmers.png",
  },
  {
    id: 46,
    color: "#2D7DD2",
    title: "BIS Certification for Hand held Electric Engraving Tools – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Hand held Electric Engraving Tools under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for corded and battery-operated engraving tools.",
    slug: "blogs/isi-products/hand-held-electric-engraving-tools",
    date: "21 February 2026",
    image: "/blogImages/BISLicenseforHandHeldElectricEngravingTools.png",
  },
  {
    id: 55,
    color: "#F97316",
    title: "BIS Certification for Foot Warmers & Heating Mats – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Foot Warmers & Heating Mats under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electrically heated foot warmers and heating mats.",
    slug: "blogs/isi-products/foot-warmers-and-heating-mats",
    date: "06 March 2026",
    image: "/blogImages/BIS LicenseforFootWarmers&HeatingMats.png",
  },
  {
    id: 56,
    color: "#EF4444",
    title: "BIS Certification for Outdoor Barbecues – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Outdoor Barbecues under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electrically operated barbecue grills and outdoor cooking appliances.",
    slug: "blogs/isi-products/outdoor-barbecues",
    date: "06 March 2026",
    image: "/blogImages/BISLicenseforOutdoorBarbecues.png",
  },
  {
    id: 57,
    color: "#10B981",
    title: "BIS Certification for Fixed Immersion Heaters – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Fixed Immersion Heaters under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for permanently installed electric immersion heaters used in water tanks and geysers.",
    slug: "blogs/isi-products/fixed-immersion-heaters",
    date: "07 March 2026",
    image: "/blogImages/BISLicenseforFixedImmersionHeaters.png",
  },
  {
    id: 58,
    color: "#0EA5E9",
    title: "BIS Certification for Air-Cleaning Appliances – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Air-Cleaning Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electrically operated air purifiers and indoor air-cleaning devices.",
    slug: "blogs/isi-products/air-cleaning-appliances",
    date: "09 March 2026",
    image: "/blogImages/BISLicenseforFixedImmersionHeaters.png",
  },
  {
    id: 59,
    color: "#F59E0B",
    title: "BIS Certification for Commercial Electric Kitchen Machines – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Commercial Electric Kitchen Machines under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electrically operated food preparation equipment used in commercial kitchens.",
    slug: "blogs/isi-products/commercial-electric-kitchen-machines",
    date: "09 March 2026",
    image: "/blogImages/BISLicenseforCommercialElectricKitchenMachines.png",
  },
  {
    id: 60,
    color: "#06B6D4",
    title: "BIS Certification for Commercial Electric Rinsing Sinks – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Commercial Electric Rinsing Sinks under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electrically powered rinsing and sanitation units used in commercial kitchens.",
    slug: "blogs/isi-products/commercial-electric-rinsing-sinks",
    date: "10 March 2026",
    image: "/blogImages/BISLicenseforCommercialElectricRinsingSinks.png",
  },
  {
    id: 61,
    color: "#EF4444",
    title: "BIS Certification for Thermal Storage Room Heaters – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Thermal Storage Room Heaters under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for electric heating systems that store and gradually release thermal energy.",
    slug: "blogs/isi-products/thermal-storage-room-heaters",
    date: "10 March 2026",
    image: "/blogImages/BISLicenseforThermalStorageRoomHeaters.png",
  },
  {
    id: 62,
    color: "#8B5CF6",
    title: "BIS Certification for Electric Dishwashing Machines – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Electric Dishwashing Machines under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Mandatory for household and commercial dishwashers sold in India.",
    slug: "blogs/isi-products/electric-dishwashing-machines",
    date: "11 March 2026",
    image: "/blogImages/BISLicenseforElectricDishwashingMachines .png",
  },
  {
    id: 63,
    color: "#2563EB",
    title: "BIS Certificate for Whirlpool Baths & Whirlpool Spas – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Whirlpool Baths & Whirlpool Spas under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India. Covers electrically powered hydrotherapy bathing systems used in hotels, wellness centers and homes.",
    slug: "blogs/isi-products/whirlpool-baths-and-whirlpool-spas",
    date: "11 March 2026",
    image: "/blogImages/BISLicenseforWhirlpoolBaths&WhirlpoolSpas.png",
  },
  {
    id: 64,
    color: "#0EA5E9",
    title: "BIS Certificate for Oral Hygiene Appliances – IS 302 (Part 1):2024",
    description:
      "Get BIS Certificate for Oral Hygiene Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/oral-hygiene-appliances",
    date: "12 March 2026",
    image: "/blogImages/BISLicenseforOralHygieneAppliances.png",
  },
  {
    id: 65,
    color: "#8B5CF6",
    title: "BIS Certification for Dishwashers – Complete Guide",
    description:
      "Get BIS Certificate for Dishwashers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/dishwashers",
    date: "10 April 2026",
    image: "/blogImages/BISLicenseforDishwashers.webp",
  },
  {
    id: 66,
    color: "#0ea5e9",
    title:
      "BIS Certification for Food Grinding Machines - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Food Grinding Machines under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/food-grinding-machines",
    date: "28 March 2026",
    image: "/blogImages/BISLicenseforFoodGrindingMachines.webp",
  },
  {
    id: 67,
    color: "#EA580C",
    title:
      "BIS Certificate for Electric Hot Plates - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Electric Hot Plates under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/electric-hot-plates",
    date: "11 April 2026",
    image: "/blogImages/BISLicenseforElectricHotPlates.webp",
  },
  {
    id: 68,
    color: "#DC2626",
    title:
      "BIS Certificate for Slicing Machines - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Slicing Machines under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/slicing-machines",
    date: "16 April 2026",
    image: "/blogImages/BISLicenseforSlicingMachines.webp",
  },
  {
    id: 74,
    color: "#0F766E",
    title:
      "BIS Certificate for Pan Head Screws - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Pan Head Screws under IS 7483:2018. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/pan-head-screws-is-7483",
    date: "9 April 2026",
    image: "/blogImages/BISCertificationforpanheadScrews.webp",
  },
  {
    id: 75,
    color: "#0EA5E9",
    title:
      "BIS Certificate for Tapping Screws Oval Head - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Tapping Screws Oval Head under IS 18480 (Part 3):2023. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/tapping-screws-oval-head-is-18480-part-3",
    date: "05 April 2026",
    image: "/blogImages/BISCertificationfortappingscrewsovalhead.webp",
  },
  {
    id: 69,
    color: "#7C3AED",
    title:
      "BIS Certificate for Cross-recessed Countersunk Head Wood Screws - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Cross-recessed Countersunk Head Wood Screws under IS 18509:2023. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/cross-recessed-countersunk-head-wood-screws",
    date: "24 April 2026",
    image: "/blogImages/BISLicenseforHeadWoodScrews.png",
  },
  {
    id: 70,
    color: "#0369A1",
    title:
      "BIS Certificate for Drywall Screws - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Drywall Screws under IS 18507:2024. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/drywall-screws-is-18507",
    date: "01 May 2026",
    image: "/blogImages/BISCertificationforDrywallScrews.png",
  },
  {
    id: 71,
    color: "#0F766E",
    title:
      "BIS Certificate for Raised countersunk head screws - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Raised countersunk head screws under IS 7486:2018. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/raised-countersunk-head-screws-is-7486",
    date: "02 May 2026",
    image: "/blogImages/RaisedCountersunkHeadScrew.png",
  },
  {
    id: 72,
    color: "#0369A1",
    title:
      "BIS Certificate for Countersunk flat head screws - Process, Cost, Documentation",
    description:
      "Get BIS Certificate for Countersunk flat head screws under IS 7485 (Part 2):2018. Process, documents, testing, cost & timeline for BIS Certification in India.",
    slug: "blogs/isi-products/countersunk-flat-head-screws-is-7485",
    date: "02 May 2026",
    image: "/blogImages/BISCertificationforCountersunkFlatHeadScrews.png",
  },
];

// =============================
// HELPER COMPONENTS
// =============================

/**
 * Navigation breadcrumb component
 * Displays the current page location in the site hierarchy
 */
const LatestBlogsBreadcrumb = () => {
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
                  <BreadcrumbPage className="whitespace-nowrap">
                    Latest Blogs
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

/**
 * Search input component for filtering blogs
 * Provides real-time search functionality with magnifying glass icon
 */
const LatestBlogsSearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search Latest Blogs
        </label>
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for Latest Blogs"
          className="w-full pl-11 md:pl-12 placeholder:font-geist placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
        />
      </div>
    </div>
  );
};

/**
 * Individual blog card component
 * Displays blog information with color-coded header and hover effects
 */
const BlogCardItem = ({ color, title, description, slug, date }) => {
  const detailUrl = `/${slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      {/* Color-coded header bar */}
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {/* Date display - top right */}
        {date && (
          <div className="flex items-center justify-end mb-4">
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              {date}
            </span>
          </div>
        )}

        {/* Blog title - clickable */}
        <Link to={detailUrl}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-4 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>

        {/* Blog description */}
        <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Read more button with dynamic color styling */}
        <div className="flex justify-end pt-4 border-t-2 border-gray-300 mt-auto">
          <Link to={detailUrl} className="relative">
            <Button
              variant="outline"
              className="transition-all duration-200 hover:shadow-md"
              style={{
                borderColor: color,
                color: color,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = color;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = color;
              }}
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// =============================
// COMPLEX COMPONENTS
// =============================

/**
 * Blog cards grid component with search and pagination logic
 * Handles filtering, pagination calculation, and no-results state
 */
const LatestBlogsCard = ({ searchQuery, currentPage, itemsPerPage }) => {
  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {currentItems.length > 0 ? (
        currentItems.map((blog) => (
          <BlogCardItem
            key={blog.id}
            color={blog.color}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
            date={blog.date}
          />
        ))
      ) : (
        /* No results state */
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No blogs found matching your search criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Try searching with different keywords or browse all our latest
                blogs.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Advanced pagination component with smart page number generation
 * Includes previous/next buttons, ellipsis for long page lists, and page info
 */
const LatestBlogsPagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Filter blogs to get correct total count for pagination
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  // Page change handler with smooth scroll to top
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Don't render pagination if only one page or less
  if (totalPages <= 1) {
    return null;
  }

  // Generate smart page numbers with ellipsis for better UX
  const generatePageNumbers = () => {
    const maxVisiblePages = 5;
    const delta = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - delta);
    let endPage = Math.min(totalPages, currentPage + delta);

    // Adjust range if we're near beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    const pages = [];

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Page number buttons */}
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center h-10 w-10 text-gray-400 font-medium text-base"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${
                currentPage === pageNum
                  ? "bg-[#1A8781] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              aria-label={`Page ${pageNum}`}
              aria-current={currentPage === pageNum ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Page information display */}
      <div className="text-center">
        <span className="text-sm text-gray-500 font-geist font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

/**
 * Wrapper component for pagination with conditional rendering
 * Manages pagination visibility and responsive spacing
 */
const LatestBlogsPaginationWrapper = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Calculate if pagination should be shown
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const showPagination = totalPages > 1;

  return (
    <div
      className={
        showPagination
          ? "pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center"
          : "pt-4 pb-6 md:pt-6 md:pb-8"
      }
    >
      <LatestBlogsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

/**
 * Main content component containing page header, search, and blog grid
 * Manages search and pagination state for the entire blogs section
 */
const LatestBlogsMainContent = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Search handler - resets pagination on new search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#f9f7f2]">
      <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
        {/* Page header section */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            Latest Blogs
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest blogs and articles from our experts
          </p>
        </div>

        {/* Search functionality */}
        <LatestBlogsSearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        {/* Blog cards grid */}
        <LatestBlogsCard
          searchQuery={searchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* Pagination controls */}
      <LatestBlogsPaginationWrapper
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

// =============================
// MAIN COMPONENT
// =============================

/**
 * Latest Blogs Page Component
 * Main page component that orchestrates the entire latest blogs section
 * Combines breadcrumb navigation, main content, contact section, and footer
 */
const LatestBlogs = () => {
  return (
    <div className="relative">
      <LatestBlogsBreadcrumb />
      <LatestBlogsMainContent />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default LatestBlogs;
