import {
  Award,
  Battery,
  BookText,
  CheckCircle,
  Cpu,
  FileCheck,
  FileWarning,
  Flame,
  GalleryHorizontal,
  Presentation,
  Radiation,
  Radio,
  Recycle,
  Scale,
  ShieldCheck,
  Video,
  Wifi,
  Zap,
} from "lucide-react";

// Navigation Data
export const NAVIGATION_DATA = {
  categories: [
    {
      id: 1,
      name: "BIS Mark (Foreign)",
      link: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
      icon: CheckCircle,
      desktopOrder: 1,
      mobileOrder: 1,
    },
    {
      id: 2,
      name: "CRS Registration",
      link: "/what-is-crs-bis-or-crs-registration",
      icon: ShieldCheck,
      desktopOrder: 2,
      mobileOrder: 7,
    },
    {
      id: 3,
      name: "CE Certification",
      link: "/ce-certification",
      icon: ShieldCheck,
      desktopOrder: 3,
      mobileOrder: 14,
    },
    {
      id: 4,
      name: "ISI Mark (Indian)",
      link: "/a-guide-to-bis-certification-indian-bis",
      icon: Award,
      desktopOrder: 4,
      mobileOrder: 2,
    },
    {
      id: 5,
      name: "Scheme X",
      link: "/indian-bis-certification-under-scheme-x",
      icon: Cpu,
      desktopOrder: 5,
      mobileOrder: 8,
    },
    {
      id: 6,
      name: "EPR Registration",
      link: "/a-guide-on-how-to-obtain-epr-certificate",
      icon: Recycle,
      desktopOrder: 6,
      mobileOrder: 9,
    },
    {
      id: 7,
      name: "ROHS",
      link: "/restriction-of-hazardous-substance-rohs-certificate",
      icon: Radiation,
      desktopOrder: 7,
      mobileOrder: 15,
    },
    {
      id: 8,
      name: "BIS Certification",
      link: "/what-is-bis-certificate-indian-bis",
      icon: CheckCircle,
      desktopOrder: 8,
      mobileOrder: 3,
    },
    {
      id: 9,
      name: "Plastic Waste",
      link: "/epr-certificate-for-plastic-waste-management-pwm",
      icon: Recycle,
      desktopOrder: 9,
      mobileOrder: 10,
    },
    {
      id: 10,
      name: "EMI/EMC",
      link: "/emi-emc-certification",
      icon: Cpu,
      desktopOrder: 10,
      mobileOrder: 16,
    },
    {
      id: 11,
      name: "CDSCO Registration",
      link: "/cdsco-registration-certification",
      icon: FileWarning,
      desktopOrder: 11,
      mobileOrder: 4,
    },
    {
      id: 12,
      name: "Battery Waste",
      link: "/epr-certificate-for-battery-waste-management-bwm",
      icon: Battery,
      desktopOrder: 12,
      mobileOrder: 11,
    },
    {
      id: 13,
      name: "TEC",
      link: "/information-about-tec-certificate-mtcte",
      icon: Radio,
      desktopOrder: 13,
      mobileOrder: 17,
    },
    {
      id: 14,
      name: "LMPC Registration",
      link: "/a-guide-on-how-to-obtain-lmpc-certificate",
      icon: BookText,
      desktopOrder: 14,
      mobileOrder: 5,
    },
    {
      id: 15,
      name: "PESO",
      link: "/information-about-peso-certification-peso-license-india",
      icon: Flame,
      desktopOrder: 15,
      mobileOrder: 12,
    },
    {
      id: 16,
      name: "BEE",
      link: "/bee-certification",
      icon: Zap,
      desktopOrder: 16,
      mobileOrder: 18,
    },
    {
      id: 17,
      name: "Legal Metrology",
      link: "/what-is-legal-metrology-or-lmpc-certificate",
      icon: Scale,
      desktopOrder: 17,
      mobileOrder: 6,
    },
    {
      id: 18,
      name: "WPC",
      link: "/information-about-wpc-certificate-eta-approval",
      icon: Wifi,
      desktopOrder: 18,
      mobileOrder: 13,
    },
    {
      id: 19,
      name: "CB Certification",
      link: "/cb-certification",
      icon: Award,
      desktopOrder: 19,
      mobileOrder: 19,
    },
  ],
  updates: [
    {
      id: 1,
      name: "BIS QCO UPDATES",
      link: "/bis-qco-updates",
      icon: BookText,
    },
    {
      id: 2,
      name: "Ministry Updates",
      link: "/ministry-updates",
      icon: FileWarning,
    },
    {
      id: 3,
      name: "Upcoming Webinars",
      link: "/webinar",
      icon: Presentation,
    },
    {
      id: 4,
      name: "Video About BIS Certification",
      link: "/videos-about-bis-certification",
      icon: Video,
    },
  ],
  gallery: [
    {
      id: 1,
      name: "International Audits",
      link: "/international-audits",
      icon: FileCheck,
    },
    {
      id: 2,
      name: "Seminars/Exhibitions",
      link: "/seminars-and-exhibitions",
      icon: GalleryHorizontal,
    },
  ],
  faqs: [
    {
      id: 1,
      name: "BIS Licence",
      link: "/faq-bis-licence",
      icon: Award,
    },
    {
      id: 2,
      name: "BIS Registration",
      link: "/faq-bis-registration",
      icon: CheckCircle,
    },
    {
      id: 3,
      name: "CDSCO Licence",
      link: "/faq-cdsco-licence",
      icon: FileCheck,
    },
    {
      id: 4,
      name: "CDSCO Registration",
      link: "/faq-cdsco-registration",
      icon: BookText,
    },
    {
      id: 5,
      name: "Foreign Manufacturer BIS",
      link: "/faq-foreign-manufacturer-bis",
      icon: ShieldCheck,
    },
  ],
};