import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

const productTableData = [
  {
    id: 1,
    sno: 1,
    isNumber: "IS 12330",
    product: "Sulphate Resisting Portland Cement",
    notification: {
      title: "1. Cement (Quality Control)Order, 2003",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 191(E).pdf",
      linkText: "S.O. No. 191(E) Dt. 17 Feb 2003",
    },
  },
  {
    id: 2,
    sno: 2,
    isNumber: "IS 12600",
    product: "Low heat Portland Cement",
  },
  {
    id: 3,
    sno: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Portland Pozzolana Cement-Part1 Fly-ash based",
  },
  {
    id: 4,
    sno: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Portland Pozzolana Cement-Part 2 Calcined clay based",
  },
  {
    id: 5,
    sno: 5,
    isNumber: "IS 269",
    product: "Ordinary Portland Cement",
  },
  {
    id: 6,
    sno: 6,
    isNumber: "IS 3466",
    product: "Masonry Cement",
  },
  {
    id: 7,
    sno: 7,
    isNumber: "IS 455",
    product: "Portland Slag Cement",
  },
  {
    id: 8,
    sno: 8,
    isNumber: "IS 6452",
    product: "High Alumina Cement for Structural use",
  },
  {
    id: 9,
    sno: 9,
    isNumber: "IS 6909",
    product: "Super sulphated cement",
  },
  {
    id: 10,
    sno: 10,
    isNumber: "IS 8041",
    product: "Rapid hardening Portland cement",
  },
  {
    id: 11,
    sno: 11,
    isNumber: "IS 8042",
    product: "White Portland Cement",
  },
  {
    id: 12,
    sno: 12,
    isNumber: "IS 8043",
    product: "Hydrophobic Portland Cement",
  },
  {
    id: 13,
    sno: 13,
    isNumber: "IS 8229",
    product: "Oil well Cement",
  },
  {
    id: 14,
    sno: 14,
    isNumber: "IS 16415: 2015",
    product: "Composite Cement- Specification.",
  },
  {
    id: 15,
    sno: 15,
    isNumber: "IS 16993: 2018",
    product: "Microfine Ordinary Portland Cement- Specification.",
  },
  {
    id: 16,
    sno: 16,
    isNumber: "IS 15895: 2018",
    product: "High Alumina Refractory Cement.",
  },
  {
    id: 17,
    sno: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Residual current operated circuit breakers for house hold and similar uses-Part 1 Circuit breakers without integral overcurrent protection (RCCBs)",
    notification: {
      title:
        "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 189 (E).pdf",
      linkText: "No. 189(E) dated 17 Feb 2003",
      amendments: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 165 (E).pdf",
          text: "S.O. 165(E) dated 5 Feb 2004",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 1172 (E).pdf",
          text: "S.O. 1172 (E) dated 22Aug 2005",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 512 (E).pdf",
          text: "S.O. 512(E) dated 19 Feb 2009",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 2058 (E).pdf",
          text: "S.O. 2058(E) dated 7Aug 2009",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 2604 (E).pdf",
          text: "S.O. 2604 (E) dated 19 Oct.2010",
        },
      ],
    },
  },
  {
    id: 18,
    sno: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Residual current operated circuit breakers for household and similar uses–Part 2 Circuit breakers with integral overcurrent protection(RCVOs)",
  },
  {
    id: 19,
    sno: 19,
    isNumber: "IS 13010",
    product: "AC watt-hour meters, class 0.5, 1 & 2",
  },
  {
    id: 20,
    sno: 20,
    isNumber: "IS 13779",
    product: "AC static watt-hour meters, class 1 & 2",
  },
  {
    id: 21,
    sno: 21,
    isNumber: "IS 14697",
    product:
      "AC static transformer operated watt-hour and VAR-hour meters, class 0.2S & 0.5S",
  },
  {
    id: 22,
    sno: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Self Ballasted Lamps for General Lighting Services – Part 1 : Safety Requirements & Part 2 : Performance Requirements",
  },
  {
    id: 23,
    sno: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Safety of household and similar electrical appliances – Electric iron",
  },
  {
    id: 24,
    sno: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Safety of household and similar electrical appliances– Electric immersion water-heaters",
  },
  {
    id: 25,
    sno: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Safety of household and similar electrical appliances –Electric stoves",
  },
  {
    id: 26,
    sno: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Safety of household and similar electrical appliances-Room heaters",
  },
  {
    id: 27,
    sno: 27,
    isNumber: "IS 3854",
    product: "Switches for domestic and similar purposes",
  },
  {
    id: 28,
    sno: 28,
    isNumber: "IS 418",
    product: "Tungsten filament general service electric lamps (upto100 W )",
  },
  {
    id: 29,
    sno: 29,
    isNumber: "IS 694",
    product:
      "PVC insulated cables for working voltages up to and including 1100V",
  },
  {
    id: 30,
    sno: 30,
    isNumber: "IS 8828 *",
    product:
      "Electrical Accessories-Circuit breakers for overcurrent protection for household and similar installations",
  },
  {
    id: 31,
    sno: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Elastomer insulated cables (Part.1): For working voltages up to and including1100 V",
  },
  {
    id: 32,
    sno: "32",
    isNumber: "IS 8144",
    product: "Multi-Purpose dry batteries",
    notification: {
      title: "3.",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/516_E.pdf",
      linkText: "SO 516(E), dated 25th May 1987",
    },
  },
  {
    id: 33,
    sno: " ",
    isNumber: "Food & Related Products",
    product: "Food & Related Products",
    isDeNotified: true,
    isSectionHeader: true,
  },
  {
    id: 34,
    sno: " ",
    isNumber: "IS 15757",
    product: "Follow–up formula –complimentary foods",
    isDeNotified: true,
    notification: {
      title:
        "Food Safety & Standards Prohibition & Restriction on Sales, Regulation, 2011",
      links: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/GSR NO 759(E).pdf",
          linkText: "GSR 759(E)",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/GSR No 760(E).pdf",
          linkText: "GSR 760(E)",
        },
      ],
      deNotification: {
        link: "https://www.bis.gov.in/wp-content/uploads/2024/11/De-notification-FoodProducts.pdf",
        text: "Food Safety and Standards (Prohibition and Restrictions on Sales) first Amendment Regulations, 2024.",
      },
    },
  },
  {
    id: 35,
    sno: " ",
    isNumber: "IS 11536",
    product: "Processed cereal based complementary foods",
    isDeNotified: true,
  },
  {
    id: 36,
    sno: " ",
    isNumber: "IS 1165",
    product: "Milk-powder",
    isDeNotified: true,
  },
  {
    id: 37,
    sno: " ",
    isNumber: "IS 1166",
    product: "Condensed milk, partly skimmed and skimmed condensed milk",
    isDeNotified: true,
  },
  {
    id: 38,
    sno: " ",
    isNumber: "IS 12176",
    product: "Sweetened ultra high temperature treated condensed milk",
    isDeNotified: true,
  },
  {
    id: 39,
    sno: " ",
    isNumber: "IS 13334 (Part 1)",
    product: "Skimmed milk-powder, standard grade",
    isDeNotified: true,
    notification: {
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/Food%20Products/FSSAI%20Regulation%202011.pdf",
      linkText: "Food Safety & Standards",
    },
  },
  {
    id: 40,
    sno: " ",
    isNumber: "IS 13334 (Part 2)",
    product: "Skimmed milk-powder, extra grade",
    isDeNotified: true,
    notification: {
      links: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/Food%20Products/FSSAI%20Regulation%202011.pdf",
          linkText: "Prohibition & Restriction on Sales, Regulation, 2011",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/Food%20Products/GSR%20NO%20759(E).pdf",
          linkText: "GSR 759(E)",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/Food%20Products/GSR%20NO%20759(E).pdf",
          linkText: "GSR 760(E)",
        },
      ],
      additionalLinks: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/02/Gazette_Notification_Prohibition_02_09_2022.pdf",
          linkText:
            "Food Safety and Standards (Prohibition and Restrictions on sales) First Amendment Regulations, 2022, dated 31/08/2022",
        },
      ],
      deNotification: {
        link: "https://www.bis.gov.in/wp-content/uploads/2024/11/De-notification-FoodProducts.pdf",
        text: "Food Safety and Standards (Prohibition and Restrictions on Sales) first Amendment Regulations, 2024.",
      },
    },
  },
  {
    id: 41,
    sno: " ",
    isNumber: "IS 13428",
    product: "Packaged Natural Mineral Water",
    isDeNotified: true,
  },
  {
    id: 42,
    sno: " ",
    isNumber: "IS 14433",
    product: "Infant milk substitutes",
    isDeNotified: true,
  },
  {
    id: 43,
    sno: " ",
    isNumber: "IS 17945: 2022",
    product: "Food for Special Medical Purpose intended for Infants",
    isDeNotified: true,
  },
  {
    id: 44,
    sno: " ",
    isNumber: "IS 14542",
    product: "Partly skimmed milk powder",
    isDeNotified: true,
  },
  {
    id: 45,
    sno: " ",
    isNumber: "IS 14543",
    product:
      "Packaged Drinking Water (Other than Packaged Natural Mineral Water)",
    isDeNotified: true,
  },
  {
    id: 46,
    sno: " ",
    isNumber: "IS 1656",
    product: "Milk- cereal Based Complementary foods",
    isDeNotified: true,
  },
  {
    id: 47,
    sno: " ",
    isNumber: "Feeding Bottles",
    product: "Feeding Bottles",
    isSectionHeader: true,
  },
  {
    id: 48,
    sno: "33",
    isNumber: "IS 14625",
    product: "Plastic Feeding Bottles",
    notification: {
      title: "5.",
      link: "https://indiacode.nic.in/bitstream/123456789/1958/1/199241.pdf",
      linkText:
        "The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    },
  },
  {
    id: 49,
    sno: "34",
    isNumber: "IS 5168",
    product: "Glass Feeding Bottles",
    notification: {
      title: "5.",
      link: "https://indiacode.nic.in/bitstream/123456789/1958/1/199241.pdf",
      linkText:
        "The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    },
  },
  {
    id: 50,
    sno: " ",
    isNumber: "Oil Pressure Stoves",
    product: "Oil Pressure Stoves",
    isSectionHeader: true,
  },
  {
    id: 51,
    sno: "35",
    isNumber: "IS 10109",
    product: "Oil pressure stove, offset burner type",
    notification: {
      title: "6. Oil Pressure Stoves (Q.C) Order, 1997",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 451 (E).pdf",
      linkText: "SO 451(E) dated 16 June 1997",
    },
  },
  {
    id: 52,
    sno: "36",
    isNumber: "IS 2787",
    product: "Multi-burner oil pressure stoves",
    notification: {
      title: "6. Oil Pressure Stoves (Q.C) Order, 1997",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 451 (E).pdf",
      linkText: "SO 451(E) dated 16 June 1997",
    },
  },
  {
    id: 53,
    sno: "37",
    isNumber: "IS 1342",
    product: "Oil pressure stoves",
    notification: {
      title: "6. Oil Pressure Stoves (Q.C) Order, 1997",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 451 (E).pdf",
      linkText: "SO 451(E) dated 16 June 1997",
    },
  },
  {
    id: 54,
    sno: " ",
    isNumber: "Automobile Accessories",
    product: "Automobile Accessories",
    isSectionHeader: true,
  },
  {
    id: 55,
    sno: "38",
    isNumber: "IS 13098",
    product: "Automotive vehicles –Tubes for pneumatic tyres",
    notification: {
      title:
        "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2953 (E).pdf",
      linkText: "S.O. No. 2953(E) dated 19-11-2009",
      amendments: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 1057 (E).pdf",
          text: "S.O. No. 1057 (E) dated 11-05-2010",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2758 (E).pdf",
          text: "S.O. No. 2758 (E) dated 9-11-2010",
        },
      ],
    },
  },
  {
    id: 56,
    sno: "39",
    isNumber: "IS 15627",
    product:
      "Automotive vehicles– Pneumatic tyres for two and three-wheeled motor vehicles",
    notification: {
      title:
        "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2953 (E).pdf",
      linkText: "S.O. No. 2953(E) dated 19-11-2009",
      amendments: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 1057 (E).pdf",
          text: "S.O. No. 1057 (E) dated 11-05-2010",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2758 (E).pdf",
          text: "S.O. No. 2758 (E) dated 9-11-2010",
        },
      ],
    },
  },
  {
    id: 57,
    sno: "40",
    isNumber: "IS 15633",
    product:
      "Automotive vehicles-Pneumatic tyres for passenger car vehicles– Diagonal and radial ply",
    notification: {
      title:
        "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2953 (E).pdf",
      linkText: "S.O. No. 2953(E) dated 19-11-2009",
      amendments: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 1057 (E).pdf",
          text: "S.O. No. 1057 (E) dated 11-05-2010",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2758 (E).pdf",
          text: "S.O. No. 2758 (E) dated 9-11-2010",
        },
      ],
    },
  },
  {
    id: 58,
    sno: "41",
    isNumber: "IS 15636",
    product:
      "Automotive vehicles- Pneumatic tyres for commercial vehicles-Diagonal and radial ply",
    notification: {
      title:
        "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2953 (E).pdf",
      linkText: "S.O. No. 2953(E) dated 19-11-2009",
      amendments: [
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 1057 (E).pdf",
          text: "S.O. No. 1057 (E) dated 11-05-2010",
        },
        {
          link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No. 2758 (E).pdf",
          text: "S.O. No. 2758 (E) dated 9-11-2010",
        },
      ],
    },
  },
  {
    id: 59,
    sno: " ",
    isNumber: "Cylinder, Valves and Regulator",
    product: "Cylinder, Valves and Regulator",
    isSectionHeader: true,
  },
  {
    id: 60,
    sno: "42",
    isNumber: "IS 14899",
    product: "Liquefied petroleum gas containers for automotive use",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 61,
    sno: "43",
    isNumber: "IS 15100",
    product:
      "Multifunction valve assembly for permanently fixed liquefied petroleum gas (LPG) containers for automotive use",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 62,
    sno: "44",
    isNumber: "IS 3196 (Part 4)",
    product:
      "Welded low carbon steel cylinders exceeding 5 litre Water capacity for low pressure liquefiable gases Part 4 Cylinders for toxic and corrosive gases",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 63,
    sno: "45",
    isNumber: "IS 3196 (Part 1)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5 litre water capacity for low pressure liquefiable gases Part1 Cylinders for liquefied petroleum gas (LPG)",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 64,
    sno: "46",
    isNumber: "IS 3196 (Part 2)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5-litre water capacity for low pressure liquefiable gases Part 2 Cylinders for liquefiable gases other than LPG.",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 65,
    sno: "47",
    isNumber: "IS 3224",
    product:
      "Valve fittings for compressed gas cylinder excluding liquefied petroleum gas cylinders",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 66,
    sno: "48",
    isNumber: "IS 3745",
    product: "Yoke Type Valve Connection for Small Medical Gas Cylinders",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 67,
    sno: "49",
    isNumber: "IS 7142",
    product:
      "Welded low carbon steel cylinders for low pressure liquefiable gases not exceeding 5 litre water capacity",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 68,
    sno: "50",
    isNumber: "IS 7285 (Part 1)",
    product:
      "Refillable Seamless steel gas cylinders Part1 Normalized steel cylinders",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 69,
    sno: "51",
    isNumber: "IS 7285 (Part 2)",
    product:
      "Refillable Seamless steel gas cylinders Part 2 Quenched and tempered steel cylinders with tensile strength less than 1100 MPa (112 kgf/mm²)",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 70,
    sno: "52",
    isNumber: "IS 7302",
    product:
      "Valve fittings for gas cylinder valves for use with breathing apparatus",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 71,
    sno: "53",
    isNumber: "IS 7312",
    product: "Welded and seamless steel dissolved acetylene gas cylinders",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 72,
    sno: "54",
    isNumber: "IS 8737",
    product:
      "Valve fittings for use with liquefied petroleum gas cylinders of more than 5 litre water capacity Part 2 Valve fittings for newly manufactured LPG cylinders",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 73,
    sno: "55",
    isNumber: "IS 8776",
    product:
      "Valve Fittings for Use with Liquefied Petroleum Gas (LPG) Cylinders up to and Including 5-Litre Water Capacity",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 74,
    sno: "56",
    isNumber: "IS 9798",
    product:
      "Low pressure regulators for use with liquefied petroleum gas (LPG) mixtures",
    notification: {
      title: "8. Explosive Act, 1884 Gas Cylinder Rules, 2016",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S.O 1081 (E).pdf",
      linkText: "G.S.R. No. 1081(E) Dt. 22-11-2016",
    },
  },
  {
    id: 75,
    sno: " ",
    isNumber: "Medical Equipment",
    product: "Medical Equipment",
    isSectionHeader: true,
  },
  {
    id: 76,
    sno: "57",
    isNumber: "IS 3055 (Part 1)",
    product: "Clinical thermometers :Part1 Solid stem type",
    notification: {
      title: "9. Clinical Thermometers (Quality Control), 2001",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/GSR No. 843 (E).pdf",
      linkText: "GSR No. 843(E) dated 9 Nov. 2001",
    },
  },
  {
    id: 77,
    sno: "58",
    isNumber: "IS 3055 (Part 2)",
    product: "Clinical thermometers :Part 2 Enclosed scale type",
    notification: {
      title: "9. Clinical Thermometers (Quality Control), 2001",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/GSR No. 843 (E).pdf",
      linkText: "GSR No. 843(E) dated 9 Nov. 2001",
    },
  },
  {
    id: 78,
    sno: "59",
    isNumber: "IS 7620 (Part 1)",
    product: "Diagnostic Medical X-Ray Equipment",
    notification: {
      title: "10. Diagnostic Medical X- Ray Equipment",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/Medical X Ray QC order.pdf",
      linkText: "AERB/443/39 MDX/3509/94,Oct. 94",
    },
  },
  {
    id: 79,
    sno: " ",
    isNumber: "Steel and Iron Products",
    product: "Steel and Iron Products",
    isSectionHeader: true,
  },
  {
    id: 80,
    sno: "60",
    isNumber: "IS 1785 (Part 1) : 1983",
    product:
      "Plain Hard-drawn Steel Wire For Pre-stressed Concrete: Part 1 Cold Drawn Stress-relieved Wire",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Ferrocnickel-Extension-Quality-Control-Order-2024.pdf",
          text: "Extension order (namely IS 4409: 2023, dated 01 May 2024)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/08/IS-4409-2023-Specification-for-Ferronickel.pdf",
          text: "Extension order (namely IS 4409:2023, dated 01st August 2024)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Steel-and-Steel-Products-QCO-2024.pdf",
          text: "Steel & Steel Products (Quality Control) Order, 2024 S.O. 3716(E), dated 29th August 2024",
        },
      ],
    },
  },
  {
    id: 81,
    sno: "61",
    isNumber: "IS 1785 (Part 2) : 1983",
    product:
      "Plain hard-drawn steel wire for pre-stressed concrete Part 2: As drawn wire",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 82,
    sno: "62",
    isNumber: "IS 6003:2010",
    product: "Indented wire for Pre-stressed concrete",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 83,
    sno: "63",
    isNumber: "IS 6006:2014",
    product: "Uncoated stress relieved strand for Pre-stressed concrete.",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 84,
    sno: "64",
    isNumber: "IS 13620:1993",
    product: "Fusion bonded epoxy coated reinforcing bars",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 85,
    sno: "65",
    isNumber: "IS 14268:1995",
    product:
      "Uncoated Stress Relieved Low Relaxation Seven-ply Strand For Pre-stressed Concrete.",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 86,
    sno: "66",
    isNumber: "IS 277:2003",
    product: "Galvanized steel sheets ( plain and corrugated).",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 87,
    sno: "67",
    isNumber: "IS 2002:2009",
    product:
      "Steel plates for pressure vessels for intermediate and high temperature service including boilers.",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 88,
    sno: "68",
    isNumber: "IS 2041:2009",
    product:
      "Steel plates for pressure vessels used at moderate and low temperature",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 89,
    sno: "69",
    isNumber: "IS 2830:2012",
    product:
      "Carbon steel cast billet ingots ,billets, blooms and slabs for rerolling into steel for general structural purpose",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 90,
    sno: "70",
    isNumber: "IS 1786:2008",
    product:
      "High strength deformed steel bars and wires for concrete reinforcement",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 91,
    sno: "71",
    isNumber: "IS 648:2006",
    product:
      "Cold rolled non-oriented electrical steel sheets and strip-fully processed type (CRNO)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 92,
    sno: "72",
    isNumber: "IS 3024:2015",
    product: "Grain oriented electrical steel sheet & strip (CRGO)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 93,
    sno: "73",
    isNumber: "IS 15391:2003",
    product:
      "Oriented Electrical Steel Sheet and Strip- Semi-Processed Type- Specification.",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 94,
    sno: "74",
    isNumber: "IS 2062:2011",
    product: "Hot rolled medium and high tensile structural steel",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 95,
    sno: "75",
    isNumber: "IS 432 : Part 1:1982",
    product:
      "Mild Steel and Medium Tensile Steel Bars and Hard–Drawn Steel Wire for Concrete Reinforcement: Part 1 Mild steel and medium tensile steel bars",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 96,
    sno: "76",
    isNumber: "IS 432 : Part 2:1982",
    product:
      "Mild steel and Medium Tensile steel bars and Hard–Drawn Steel Wire for Concrete Reinforcement: Part 2 Hard- Drawn Steel Wire",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 97,
    sno: "77",
    isNumber: "IS 513 (Part-1): 2016",
    product:
      "Cold reduced carbon steel sheets and strips Part 1 Cold Forming and Drawing Purpose",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 98,
    sno: "78",
    isNumber: "IS 513(Part-2):2016",
    product:
      "Cold reduced carbon steel sheets and strips Part 2 High Tensile and Multi-phase Steel",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 99,
    sno: "79",
    isNumber: "IS 1079: 2017",
    product: "Hot Rolled Carbon Steel Sheet, Plate and Strip — Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 100,
    sno: "80",
    isNumber: "IS 1875:1992",
    product: "Carbon steel billets, blooms, slabs and bars for forgings",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 101,
    sno: "81",
    isNumber: "IS 2879:1998",
    product: "Mild steel for metal arc welding electrodes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 102,
    sno: "82",
    isNumber: "IS 3502:2009",
    product: "Steel Chequered Plates",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 103,
    sno: "83",
    isNumber: "IS 5872:1990",
    product: "Cold Rolled Steel Strips (Box Strappings)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 104,
    sno: "84",
    isNumber: "IS 5986: 2017",
    product:
      "Hot Rolled Steel Sheet, Plate and Strip for Forming and Flanging Purposes — Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 105,
    sno: "85",
    isNumber: "IS 6240:2008",
    product:
      "Hot Rolled Steel Plate (up to 6 mm) Sheet and Strip for the Manufacture of Low Pressure Liquefiable Gas Cylinders",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 106,
    sno: "86",
    isNumber: "IS 7283:1992",
    product:
      "Hot Rolled bars for production of bright bars and machined parts for engineering applications",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 107,
    sno: "87",
    isNumber: "IS 7887:1992",
    product: "Mild steel wire rods for general engineering purposes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 108,
    sno: "88",
    isNumber: "IS 10748:2004",
    product: "Hot Rolled Steel Strip for Welded Tubes and Pipes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 109,
    sno: "89",
    isNumber: "IS 11513:2017",
    product:
      "Hot Rolled Carbon Steel Strip for Cold Rolling Purposes — Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 110,
    sno: "90",
    isNumber: "IS 15647:2006",
    product: "Hot rolled steel narrow width strip for welded tubes and pipes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 111,
    sno: "91",
    isNumber: "IS 7904:2017",
    product: "High carbon steel wire rods- Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 112,
    sno: "92",
    isNumber: "IS 14246:2013",
    product: "Continuously pre-painted galvanized steel sheets and coils",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 113,
    sno: "93",
    isNumber: "IS 15965:2012",
    product:
      "Pre-painted aluminium zinc alloy metallic coated steel strip and sheet (Plain)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 114,
    sno: "94",
    isNumber: "IS 280: 2006",
    product: "Mild steel wire for General Engineering purposes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 115,
    sno: "95",
    isNumber: "IS 1835:1976",
    product: "Round Steel wire for ropes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 116,
    sno: "96",
    isNumber: "IS 3975:1999",
    product:
      "Low Carbon Galvanized steel wires formed wires and Tapes for armouring of Cables",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 117,
    sno: "97",
    isNumber: "IS 4368:1967",
    product:
      "Alloy Steel billets, blooms and slabs for forging for general engineering purposes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 118,
    sno: "98",
    isNumber: "IS 4454 (Part 1) : 2001",
    product:
      "Steel wire for mechanical springs Part-1 cold drawn unalloyed steel wire",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 119,
    sno: "99",
    isNumber: "IS 4454 (Part 2): 2001",
    product:
      "Steel wire for mechanical springs Part-2 oil hardened and tempered steel wire",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 120,
    sno: "100",
    isNumber: "IS 4824:2006",
    product: "Bead Wires for Tyres",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 121,
    sno: "101",
    isNumber: "IS 11169 (Part 1): 1984",
    product:
      "Steels for Cold Heading/Cold extrusion application Part-1 Wrought carbon and low alloy steels",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 122,
    sno: "102",
    isNumber: "IS 11587:1986",
    product: "Structural Weather resistant steel",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 123,
    sno: "103",
    isNumber: "IS 15103: 2002",
    product: "Fire resistant Steel- Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 124,
    sno: "104",
    isNumber: "IS 15914:2011",
    product:
      "High Tensile Strength Flat Rolled Steel Plate (Up to 6 mm), Sheet and Strip for the Manufacture of Welded Gas Cylinder",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 125,
    sno: "105",
    isNumber: "IS 15961:2012",
    product:
      "Hot Dip aluminium- Zinc alloy metallic coated steel strip and sheet (Plain)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 126,
    sno: "106",
    isNumber: "IS 15962:2012",
    product:
      "Structural Steel for Building for Structures with improved seismic Resistance",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 127,
    sno: "107",
    isNumber: "IS 6527:1995",
    product: "Stainless Steel wire Rod",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 128,
    sno: "108",
    isNumber: "IS 6528:1995",
    product: "Stainless Steel Wires",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 129,
    sno: "109",
    isNumber: "IS 6603:2001",
    product: "Stainless Steel Bars and Flats",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 130,
    sno: "110",
    isNumber: "IS 5522:2014",
    product: "Stainless Steel sheets and strips for utensils- Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 131,
    sno: "111",
    isNumber: "IS 6911:2017",
    product: "Stainless Steel Plate, Sheet and Strip- Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 132,
    sno: "112",
    isNumber: "IS 15997:2012",
    product:
      "Low Nickel Austenitic Stainless Steel Sheet and Strip For Utensils and Kitchen Applications- Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 133,
    sno: "113",
    isNumber: "IS 1110 : 1990",
    product: "Ferrosilicon – Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 134,
    sno: "114",
    isNumber: "IS 4409 : 1973",
    product: "Specification for Ferronickel",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 135,
    sno: "115",
    isNumber: "IS 1029 : 1970",
    product: "Specification for Hot rolled steel strip (bailing)",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 136,
    sno: "116",
    isNumber: "IS 2385 : 1977",
    product:
      "Specification for Hot-rolled mild steel sheet and strip in coil form for cold-reduced tinplate and cold-reduced black plate",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 137,
    sno: "117",
    isNumber: "IS 3039 : 1988",
    product:
      "Specification for Structural steel for construction of hulls of ships",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 138,
    sno: "118",
    isNumber: "IS 9550 2001",
    product: "Bright steel bars – v Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 139,
    sno: "119",
    isNumber: "IS 3748 : 1990",
    product: "Tool and die steels – Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 140,
    sno: "120",
    isNumber: "IS 5517 : 1993",
    product: "Steel for hardening and tempering – Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 141,
    sno: "121",
    isNumber: "IS 16732: 2019",
    product: "Galvanized Structural Steel – Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 142,
    sno: "122",
    isNumber: "IS 7494 : 1981",
    product:
      "Specification for Steel for valves for internal combustion engines",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 143,
    sno: "123",
    isNumber: "IS 12146 : 1987",
    product:
      "Specification for Carbon manganese steel forgings for pressure vessels",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 144,
    sno: "124",
    isNumber: "IS 16585 : 2016",
    product:
      "Magnetic materials – specification for individual material – Fe based amorphous strip delivered in the semi-processed state",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 145,
    sno: "125",
    isNumber: "IS 2831 : 2012",
    product:
      "Carbon steel cast billet ingots, billets, blooms and slabs for re-rolling into structural steel (ordinary quality) – Specification",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 146,
    sno: "126",
    isNumber: "IS 1148: 2009",
    product:
      "Steel Rivet Bars (medium And High Tensile) – For Structural Purposes",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 147,
    sno: "127",
    isNumber: "IS 1673: 1984",
    product: "Specification for Mild Steel Wire, Cold Heading Quality",
    notification: {
      title: "11. Steel and Steel Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/02/Steel-Steel-Product-QCO-2024.pdf",
      linkText: "S.O. 574(E) dated on 5th February, 2024",
    },
  },
  {
    id: 148,
    sno: "128",
    isNumber: "IS 1812: 1982",
    product:
      "Specification for Carbon Steel Wire for the Manufacture of Wood Screws",
  },
  {
    id: 129,
    sno: 129,
    isNumber: "IS 2507: 1975",
    product: "Specification for Cold – rolled Steel Strips For Springs",
  },
  {
    id: 130,
    sno: 130,
    isNumber: "IS 2255: 1977",
    product:
      "Specification for Mild Steel Wire Rod for the Manufacture of Machine Screws (By Cold Heading Process)",
  },
  {
    id: 131,
    sno: 131,
    isNumber: "IS 3195: 1992",
    product:
      "Steel For the Manufacture of Volute And Helical Springs (for Railway Rolling Stock) – Specification",
  },
  {
    id: 132,
    sno: 132,
    isNumber: "IS 3431: 1982",
    product:
      "Specification for Steel for the manufacture of volute, helical and laminated springs for automotive suspension",
  },
  {
    id: 133,
    sno: 133,
    isNumber: "IS 3885-Part-1: 1992",
    product:
      "Steel for the manufacture of laminated springs (railway rolling stock) Part 1 Flat Sections – Specification",
  },
  {
    id: 134,
    sno: 134,
    isNumber: "IS 3885-Part- 2: 1992",
    product:
      "Steel for the manufacture of laminated springs (railway rolling stock) Part 2: Rib and Groove Sections- Specification",
  },
  {
    id: 135,
    sno: 135,
    isNumber: "IS 4223: 1975",
    product: "Specification for Steel Wire for Umbrella Ribs",
  },
  {
    id: 136,
    sno: 136,
    isNumber: "IS 4224: 1972",
    product: "Specification for Steel Wire for Staples, Pins And Clips",
  },
  {
    id: 137,
    sno: 137,
    isNumber: "IS 4397: 1999",
    product:
      "Cold-rolled Carbon Steel Strips for Ball and Roller Bearing Cages/ Retainers- Specification",
  },
  {
    id: 138,
    sno: 138,
    isNumber: "IS 4398: 1994",
    product:
      "Carbon-chromium Steel for the Manufacture of Balls, Rollers and Bearing Races- Specification",
  },
  {
    id: 139,
    sno: 139,
    isNumber: "IS 6902: 1973",
    product: "Specification for Steel Wire for spokes",
  },
  {
    id: 140,
    sno: 140,
    isNumber: "IS 6967: 1973",
    product:
      "Specification for Steel For Electrically welded round Link Chains",
  },
  {
    id: 141,
    sno: 141,
    isNumber: "IS 7226: 1974",
    product:
      "Specification for Cold rolled medium, high carbon and low alloy steel strip for general engineering purposes",
  },
  {
    id: 142,
    sno: 142,
    isNumber: "IS 7557: 1982",
    product:
      "Specification for Steel Wire: (Up to 20 mm) for the manufacture of cold-forged rivets",
  },
  {
    id: 143,
    sno: 143,
    isNumber: "IS 8052: 2006",
    product:
      "Steel ingots, billets and blooms for the production of springs, rivets and screws for general engineering applications – Specification",
  },
  {
    id: 144,
    sno: 144,
    isNumber: "IS 8951: 2001",
    product:
      "Steel Cast Billet Ingots, Billets and Blooms for production of High Carbon Steel Wire Rods- Specification",
  },
  {
    id: 145,
    sno: 145,
    isNumber: "IS 8952: 1995",
    product:
      "Steel ingots, blooms and billets for production of mild steel wire rods for general engineering purposes – Specification",
  },
  {
    id: 146,
    sno: 146,
    isNumber: "IS 9476: 1980",
    product:
      "Specification for Cold rolled steel strips for carbon steel razor blades",
  },
  {
    id: 147,
    sno: 147,
    isNumber: "IS 9962: 1981",
    product: "Specification for Steel Wire for Needles",
  },
  {
    id: 148,
    sno: 148,
    isNumber: "IS 17111: 2019 (ISO 683- 17: 2014)",
    product:
      "Heat-Treated Steels Alloy and Free-Cutting Steels — Ball and Roller Bearing Steels",
  },
  {
    id: 149,
    sno: 149,
    isNumber: "IS 14331:1995",
    product: "Steels for High Temperature Bolting Applications – Specification",
  },
  {
    id: 150,
    sno: 150,
    isNumber: "IS 12594: 1988",
    product:
      "Hot-dip Zinc Coating on Structural Steel Bars for Concrete Reinforcement – Specification",
  },
  {
    id: 151,
    sno: 151,
    isNumber: "IS 14650:1999",
    product:
      "Carbon Steel Cast Billet Ingots, Billets, Blooms and Slabs for Rerolling purposes- Specification",
  },
  {
    id: 152,
    sno: 152,
    isNumber: "IS 4882: 1979",
    product:
      "Specification for Low Carbon Steel Wire for Rivets for use in Bearing Industry",
  },
  {
    id: 153,
    sno: 153,
    isNumber: "IS 2090:1983",
    product:
      "Specification for High Tensile Steel Bars used in Pre-stressed Concrete",
  },
  {
    id: 154,
    sno: 154,
    isNumber: "IS 6529:1996",
    product: "Stainless Steel Blooms Billets And Slabs For Forging",
  },
  {
    id: 155,
    sno: 155,
    isNumber: "IS 9294:1979",
    product: "Cold-Rolled Stainless Steel Strips for Razor Blades",
  },
  {
    id: 156,
    sno: 156,
    isNumber: "IS 10631:1983",
    product: "Stainless Steel for welding electrode core wire",
  },
  {
    id: 157,
    sno: 157,
    isNumber: "IS 10632 (Part 2):1983",
    product:
      "Specification for Non Magnetic stainless steel for electrical applications Part 2 Specific requirements for binding wire",
  },
  {
    id: 158,
    sno: 158,
    isNumber: "IS 10632 (Part 3):1983",
    product:
      "Specification for Non Magnetic stainless steel for electrical applications Part 3 Specific requirements for sheets, strips and plates",
  },
  {
    id: 159,
    sno: 159,
    isNumber: "IS 11169 (Part 2): 1989",
    product:
      "Steels for cold heading/cold extrusion applications – specification Part 2 Stainless steel",
  },
  {
    id: 160,
    sno: 160,
    isNumber: "IS 5651:1987",
    product: "Steels for Pneumatic Tools",
  },
  {
    id: 161,
    sno: 161,
    isNumber: "IS 9516:1980",
    product: "Heat Resisting Steels",
  },
  {
    id: 162,
    sno: 162,
    isNumber: "IS 11952:1986",
    product: "Steels For Piston Pins (Gudgeon Pins)",
  },
  {
    id: 163,
    sno: 163,
    isNumber: "IS 12045:1987",
    product: "Alloys Used in Electrical Resistance Metallic Heating Elements",
  },
  {
    id: 164,
    sno: 164,
    isNumber: "IS 14652:1999",
    product: "18 Percent Nickel Maraging Steel Bars and Rods",
  },
  {
    id: 165,
    sno: 165,
    isNumber: "IS 1566:1982",
    product:
      "Specification for Hard-drawn Steel Wire Fabric For Concrete Reinforcement",
  },
  {
    id: 166,
    sno: 166,
    isNumber: "IS 1170: 1992",
    product: "Ferrochromium – Specification",
  },
  {
    id: 167,
    sno: 167,
    isNumber: "IS 11946:1987",
    product: "Soft Magnetic Iron Strips",
  },
  {
    id: 168,
    sno: 168,
    isNumber: "IS 11947:1987",
    product: "Soft Magnetic Iron Rods, Bars Flats and Sections",
  },
  {
    id: 169,
    sno: 169,
    isNumber: "IS 963: 1958",
    product: "Chrome molybdenum steel bars and rods for aircraft purposes",
  },
  {
    id: 170,
    sno: 170,
    isNumber: "IS 4454 (Part 4): 2001",
    product: "Steel Wires for Mechanical Springs- Part 4: Stainless Steel Wire",
  },
  {
    id: 171,
    sno: 171,
    isNumber: "IS 1993 : 2018",
    product: "Cold-reduced Electrolytic Tin Plate",
  },
  {
    id: 172,
    sno: 172,
    isNumber: "IS 12591:2018",
    product: "Cold-reduced Electrolytic Chromium/Chromium oxide – coated steel",
  },
  {
    id: 173,
    sno: 173,
    isNumber: "IS 412:1975",
    product: "Expanded Metal Steel Sheets For General Purposes",
  },
  {
    id: 174,
    sno: 174,
    isNumber: "IS 2100: 1970",
    product: "Steel Billets,Bars And Sections For Boilers",
  },
  {
    id: 175,
    sno: 175,
    isNumber: "IS 2589: 1975",
    product: "Hard Drawn Steel Wire For Upholstery Springs",
  },
  {
    id: 176,
    sno: 176,
    isNumber: "IS 3298: 1981",
    product: "Mild Steel Rivet Bars For Ship Building",
  },
  {
    id: 177,
    sno: 177,
    isNumber: "IS 4072: 1975",
    product: "Steel For Spring Washers",
  },
  {
    id: 178,
    sno: 178,
    isNumber: "IS 8510 (Part II): 1977",
    product:
      "Steel Wire For Banding Of Armatures And Rotors Part II Specific Requirements for magnetic banding wires",
  },
  {
    id: 179,
    sno: 179,
    isNumber: "IS 8510 (PartIII): 1977",
    product:
      "Tinned Steel Wire For Banding Of Armatures And Rotors Part III Specific Requirements for non-magnetic banding wires",
  },
  {
    id: 180,
    sno: 180,
    isNumber: "IS 8563: 1977",
    product: "Half Round Mild Steel Wire For The Manufacture of Split Pins",
  },
  {
    id: 181,
    sno: 181,
    isNumber: "IS 8564: 1977",
    product: "Steel Wire For Nipples For Spokes",
  },
  {
    id: 182,
    sno: 182,
    isNumber: "IS 8565: 1977",
    product: "Heald Wire",
  },
  {
    id: 183,
    sno: 183,
    isNumber: "IS 8566: 1977",
    product: "Steel Wire For Reeds",
  },
  {
    id: 184,
    sno: 184,
    isNumber: "IS 8917: 1978",
    product: "Plates For Galvanizing Pots",
  },
  {
    id: 185,
    sno: 185,
    isNumber: "IS 9442: 1980",
    product:
      "Hot Rolled Steel Plates Sheets And Strips For Manufacture of Agricultural Discs",
  },
  {
    id: 186,
    sno: 186,
    isNumber: "IS 9485: 1980",
    product:
      "Cold-Reduced And Hot-Rolled Carbon Steel Sheet For Porcelain Enamelling",
  },
  {
    id: 187,
    sno: 187,
    isNumber: "IS 10794: 1984",
    product: "Mild steel wire for cotter pins",
  },
  {
    id: 188,
    sno: 188,
    isNumber: "IS 12262:1988",
    product: "Trapezoidal Steel Wire For Springs Washers",
  },
  {
    id: 189,
    sno: 189,
    isNumber: "IS 1470: 2013",
    product: "Silicomanganese – Specification",
  },
  {
    id: 190,
    sno: 190,
    isNumber: "IS 15911:2010",
    product: "Structural Steel (Ordinary Quality)",
  },
  {
    id: 191,
    sno: 191,
    isNumber: "IS 1171: 2011",
    product: "Ferromanganese – Specification",
  },
  {
    id: 192,
    sno: 192,
    isNumber: "IS 4431: 1978",
    product: "Carbon And Carbon- Manganese Free- Cutting Steels",
  },
  {
    id: 193,
    sno: 193,
    isNumber: "IS 4432: 1988",
    product: "Case Hardening Steels",
  },
  {
    id: 194,
    sno: 194,
    isNumber: "IS 5518: 1996",
    product: "Steels For Die Blocks For Drop Forging",
  },
  {
    id: 195,
    sno: 195,
    isNumber: "IS 8748: 1978",
    product: "Forged/Rolled CTC Segments",
  },
  {
    id: 196,
    sno: 196,
    isNumber: "IS 12145: 1987",
    product: "Quenched And Tempered Alloy Steel Forgings For Pressure Vessels",
  },
  {
    id: 197,
    sno: 197,
    isNumber: "IS 13387: 1992",
    product: "Tool Steel Forgings For Metal Forming",
  },
  {
    id: 198,
    sno: 198,
    isNumber: "IS 14698:1999",
    product:
      "Carbon And Low Alloy Billets, Blooms, Slabs And Bars For Manufacture Of Shell BodiesAnd Proof Shots Used In Defence Services",
  },
  {
    id: 199,
    sno: 199,
    isNumber: "IS/ISO 11951 : 2016",
    product: "Cold – Reduced tinmill products – Blackplate",
  },
  {
    id: 200,
    sno: 200,
    isNumber: "IS 3930: 1994",
    product: "Flame And Induction Hardening Steels",
  },
  {
    id: 201,
    sno: 201,
    isNumber: "IS 5478: 1969",
    product: "Thermostat Metal Sheet and Strip",
  },
  {
    id: 202,
    sno: 202,
    isNumber: "IS 13352: 1992",
    product:
      "Stock for Forgings produced from Continuously Cast Blooms, Billets and Slabs",
  },
  {
    id: 203,
    sno: 203,
    isNumber: "IS 16644: 2018",
    product:
      "Stress-Relieved, Low Relaxation Steel Wire for Pre-stressed Concrete",
  },
  {
    id: 204,
    sno: 204,
    isNumber: "IS 17404 : 2020",
    product:
      "Electrogalvanized Hot Rolled and Cold Reduced Carbon Steel Sheetsand Strips",
  },
  {
    id: 205,
    sno: 205,
    isNumber: "IS 18316: 2023",
    product:
      "Hot Rolled and Cold Rolled Steel Strips Intended For Processing Of Semi/Fully Processed NonGrain Oriented Electrical Steel Or Fully Processed Grain Oriented Electrical Steel",
  },
  {
    id: 206,
    sno: 206,
    isNumber: "IS 18384: 2023",
    product:
      "Hot-Rolled Steel Strip, Sheet and Plates for Welded Steel Pipe for Pipeline Transportation Systems",
  },
  {
    id: 207,
    sno: 207,
    isNumber: "IS 18385: 2023",
    product:
      "Hot- Dip galvanized/ galvannealed Steel Sheet and strips for Automotive Applications",
  },
  {
    id: 208,
    sno: 208,
    isNumber: "IS 18513: 2023",
    product:
      "Hot-Dip Zinc – Aluminium – Magnesium Alloy Coated Steel Sheets, Plates and Strips",
  },
  {
    id: 209,
    sno: 209,
    isNumber: "IS 1469: 1993",
    product: "Ferromolybdenum – Specification",
  },
  {
    id: 210,
    sno: 210,
    isNumber: "IS 1466: 1985",
    product: "Specification for Ferro Vanadium",
  },
  {
    id: 211,
    sno: 211,
    isNumber: "IS 8329 : 2000",
    product:
      "Centrifugally cast (spun) ductile iron pressure pipes for water, gas and sewage",
    notification: {
      title:
        "12. Ductile Iron Pressure Pipes and Fittings (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 2749 (E).pdf",
      linkText: "S.O. No. 1544(E) dated 25-06-2009",
    },
  },
  {
    id: 212,
    sno: 212,
    isNumber: "IS 9523:2000",
    product:
      "Ductile iron fittings for pressure pipes for water, gas and sewage",
    notification: {
      title:
        "12. Ductile Iron Pressure Pipes and Fittings (Quality Control) Order, 2009",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 2749 (E).pdf",
      linkText: "S.O. No. 1544(E) dated 25-06-2009",
    },
  },
  {
    id: 213,
    sno: 213,
    isNumber: "IS 1161:2014",
    product: "Steel tubes for structural purposes",
    notification: {
      title: "13. Steel Tubes (Quality Control) Order 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Steel-Tubes-Quality-Control-Order-2020.pdf",
      linkText: "S.O. 281 Dated 21/01/2020",
    },
  },
  {
    id: 214,
    sno: 214,
    isNumber: "IS 1239 (Part 1):2014",
    product:
      "Steel Tubes, Tubulars and Other Wrought Steel Fittings – Part 1 : Steel Tubes",
    notification: {
      title: "13. Steel Tubes (Quality Control) Order 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Steel-Tubes-Quality-Control-Order-2020.pdf",
      linkText: "S.O. 281 Dated 21/01/2020",
    },
  },
  {
    id: 215,
    sno: 215,
    isNumber: "IS 4270:2001",
    product: "Steel tubes used for water-wells (upto 200 mm dia)",
    notification: {
      title: "13. Steel Tubes (Quality Control) Order 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Steel-Tubes-Quality-Control-Order-2020.pdf",
      linkText: "S.O. 281 Dated 21/01/2020",
    },
  },
  {
    id: 216,
    sno: 216,
    isNumber: "IS 9139:1979",
    product:
      "Specification for Malleable iron shots and grits for use in foundries",
    notification: {
      title: "14. Malleable Iron Shots and Grits (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/08/Egazette-Malleable-Iron-Shots-and-Grits.pdf",
      linkText: "S.O. 281 Dated 21/01/2020",
    },
  },
  {
    id: 217,
    sno: 217,
    isNumber: "IS 1180 (Part 1)",
    product:
      "Out door type Oil immersed Distribution Transformers upto and including 2500 kVA, 33 KV-specification Part 1 Mineral oil immersed",
    notification: {
      title: "15. Electrical transformers (Quality Control) order, 2015",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/SO No 1221 (E).pdf",
      linkText: "S.O. 1221 (E) dated 07-05-2015",
    },
  },
  {
    id: 218,
    sno: 218,
    isNumber: "IS 12615",
    product: "Energy Efficient Induction Motors-Three Phase Squirrel Cage",
    notification: {
      title:
        "16. Energy Efficient Induction Motors (Quality Control) Order, 2017",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/03/SO-178E.pdf",
      linkText: "SO 178(E), dated 18th January 2017",
    },
  },
  {
    id: 219,
    sno: 219,
    isNumber: "IS 2993",
    product: "A.C. motor capacitors",
    notification: {
      title: "17. Electrical Capacitors (Quality Control) Order, 2017",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S O 2434 (E)Electrical Capacitors QCO.pdf",
      linkText: "SO 2434(E), dated 01st August 2017",
    },
  },
  {
    id: 220,
    sno: 220,
    isNumber: "IS 13340",
    product:
      "Power Capacitors of Self-healing Type for AC Power Systems having Rated Voltage up to 650V",
    notification: {
      title: "17. Electrical Capacitors (Quality Control) Order, 2017",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S O 2434 (E)Electrical Capacitors QCO.pdf",
      linkText: "SO 2434(E), dated 01st August 2017",
    },
  },
  {
    id: 221,
    sno: 221,
    isNumber: "IS 13585 Part 1",
    product:
      "Shunt Power Capacitors of the Non-Self-Healing Type for AC System having a Rated Voltage up to and Including 1000V Part-1 General Performance, Testing amd Rating Safety Requirements Guide for Installation and Operation",
    notification: {
      title: "17. Electrical Capacitors (Quality Control) Order, 2017",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/S O 2434 (E)Electrical Capacitors QCO.pdf",
      linkText: "SO 2434(E), dated 01st August 2017",
    },
  },
  {
    id: 222,
    sno: 222,
    isNumber: "IS 252:2013",
    product: "Caustic Soda -Specification",
    notification: {
      title: "18. Bureau of Indian Standard (Caustic Soda) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/184588.pdf",
      linkText: "S.O No. 1468 E) dated 3rd April 2018",
    },
  },
  {
    id: 223,
    sno: 223,
    isNumber: "IS 10116 : 2015",
    product: "Boric Acid – Specification",
    notification: {
      title:
        "19. Bureau of Indian Standards (Standards for Boric Acid) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/06/BoricAcidQualityControlOrder-1.pdf",
      linkText: "S.O. 1766(E) dated 16th May 2019",
    },
  },
  {
    id: 224,
    sno: 224,
    isNumber: "IS 15573",
    product: "Poly Aluminium Chloride",
    notification: {
      title: "20. Poly Aluminium Chloride (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/08/Poly-Aluminium-Chloride.pdf",
      linkText: "S.O. 2790 (E) dated 05/08/2019",
    },
  },
  {
    id: 225,
    sno: 225,
    isNumber: "IS 695",
    product: "Acetic Acid",
    notification: {
      title: "21. Acetic Acid (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/08/Acitic-acid.pdf",
      linkText: "S.O. 2791 (E) dated 05/08/2019",
    },
  },
  {
    id: 226,
    sno: 226,
    isNumber: "IS 2833",
    product: "Aniline",
    notification: {
      title: "22. Aniline (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/08/Aniline.pdf",
      linkText: "S.O. 2792 (E) dated 05/08/2019",
    },
  },
  {
    id: 227,
    sno: 227,
    isNumber: "IS 517",
    product: "Methanol",
    notification: {
      title: "23. Methanol (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/08/Methanol.pdf",
      linkText: "S.O. 2793 (E) dated 05/08/2019",
    },
  },
  {
    id: 228,
    sno: 228,
    isNumber: "IS 5158: 1987",
    product: "Specification for Phthalic Anhydride, Technical",
    notification: {
      title: "24. Phthalic Anhydride (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Phthallic-anhydride-QCO.pdf",
      linkText: "S.O. 1402(E), dated 23/04/2020",
    },
  },
  {
    id: 229,
    sno: 229,
    isNumber: "IS 8058:2018",
    product: "Pyridine",
    notification: {
      title: "25. Pyridine (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1890(E) dated 16/06/2020",
    },
  },
  {
    id: 230,
    sno: 230,
    isNumber: "IS 16113:2013",
    product: "Gamma Picoline",
    notification: {
      title: "26. Gamma Picoline (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1891(E) dated 16/06/2020",
    },
  },
  {
    id: 231,
    sno: 231,
    isNumber: "IS 16112:2013",
    product: "Beta Picoline",
    notification: {
      title: "27. Beta Picoline (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1892(E) dated 16/06/2020",
    },
  },
  {
    id: 232,
    sno: 232,
    isNumber: "IS 12084: 2018",
    product: "Morpholine",
    notification: {
      title: "Morpholine (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1893(E) dated 16/06/2020",
    },
  },
  {
    id: 233,
    sno: 233,
    isNumber: "IS 297:2001",
    product: "Sodium Sulphide, Technical",
    notification: {
      title: "29. Sodium Sulphide (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1894(E) dated 16/06/2020",
    },
  },
  {
    id: 234,
    sno: 234,
    isNumber: "IS 7129:1992",
    product: "Potassium Carbonate, Anhydrous",
    notification: {
      title: "30. Potassium Carbonate (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1895(E) dated 16/06/2020",
    },
  },
  {
    id: 235,
    sno: 235,
    isNumber: "IS 170:2004",
    product: "Acetone",
    notification: {
      title: "31. Acetone (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1896(E) dated 16/06/2020",
    },
  },
  {
    id: 236,
    sno: 236,
    isNumber: "IS 4581:1978",
    product: "Phosphorous Trichloride, pure and Analytical Reagent",
    notification: {
      title: "32. Phosphorous Trichloride (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1897(E) dated 16/06/2020",
    },
  },
  {
    id: 237,
    sno: 237,
    isNumber: "IS 11744:1986",
    product: "Phosphorous Pentachloride, Technical",
    notification: {
      title: "33. Phosphorous Pentachloride, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1898(E) dated 16/06/2020",
    },
  },
  {
    id: 238,
    sno: 238,
    isNumber: "IS 11657:1986",
    product: "Phosphorous Oxychloride, Technical",
    notification: {
      title: "34. Phosphorous Oxychloride, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1899(E) dated 16/06/2020",
    },
  },
  {
    id: 239,
    sno: 239,
    isNumber: "IS 2080:2021",
    product: "Stabilized Hydrogen Peroxide",
    notification: {
      title: "35. Hydrogen Peroxide, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1900(E) dated 16/06/2020",
    },
  },
  {
    id: 240,
    sno: 240,
    isNumber: "IS 3205:1984",
    product: "Precipitated Barium Carbonate, Technical",
    notification: {
      title: "36. Precipitated Barium Carbonate, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1901(E) dated 16/06/2020",
    },
  },
  {
    id: 241,
    sno: 241,
    isNumber: "IS 12928:1990",
    product: "Precipitated Barium for Ceramic and Glass Industry",
    notification: {
      title: "Precipitated Barium Carbonate, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1901(E) dated 16/06/2020",
    },
  },
  {
    id: 242,
    sno: 242,
    isNumber: "IS 4505:2015",
    product: "Sodium Formaldehyde Sulphoxylate",
    notification: {
      title:
        "37. Sodium Formaldehyde Sulphoxylate, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1902(E) dated 16/06/2020",
    },
  },
  {
    id: 243,
    sno: 243,
    isNumber: "IS 6100:1984",
    product: "Sodium Tripolyphosphate, Anhydrous, Technical",
    notification: {
      title: "38. Sodium Tripolyphosphate, (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/14-QCOs-for-chemical-Products.pdf",
      linkText: "S.O.1903(E) dated 16/06/2020",
    },
  },
  {
    id: 244,
    sno: 244,
    isNumber: "IS 14709:1999",
    product: "n- Butyl Acrylate",
    notification: {
      title: "39. n- Butyl Acrylate (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/12/n-Butyl-Acrylate-QCO.pdf",
      linkText: "S.O. 2182(E), dated 29/06/2020",
    },
  },
  {
    id: 245,
    sno: 245,
    isNumber: "IS 336:1973",
    product: "Ether",
    notification: {
      title: "40. Ether (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/QCO-Ether-DCPC.pdf",
      linkText: "S.O. 2183(E) dated 29/06/2020",
    },
  },
  {
    id: 246,
    sno: 246,
    isNumber: "IS 5295:1985",
    product: "Ethylene Glycol",
    notification: {
      title: "41. Ethylene Glycol (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/QCO-Ethylene-Glycol-DCPC.pdf",
      linkText: "S.O. 2184(E) dated 29/06/2020",
    },
  },
  {
    id: 247,
    sno: 247,
    isNumber: "IS 537:2011",
    product: "Toluene",
    notification: {
      title: "42. Toluene (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Toluene-QCO.pdf",
      linkText: "S.O. 2186(E), dated 29/06/2020",
    },
  },
  {
    id: 248,
    sno: 248,
    isNumber: "IS 15030:2001",
    product: "Terephthalic Acid",
    notification: {
      title: "43. Terephthalic Acid (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Terephthalic-Acid-QCO.pdf",
      linkText: "S.O. 2185(E), dated 29/06/2020",
    },
  },
  {
    id: 249,
    sno: 249,
    isNumber: "IS 14707: 1999",
    product: "Methyl Acrylate",
    notification: {
      title:
        "44. Methyl Acrylate, Ethyl Acrylate, n-Butyl Acrylate (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Methyl-Ethyl-n-Butyl-Acrylate-QCO.pdf",
      linkText: "S.O. No. 4001 (E) 04/11/2020",
    },
  },
  {
    id: 250,
    sno: 250,
    isNumber: "IS 14708:1999",
    product: "Ethyl Acrylate",
    notification: {
      title:
        "44. Methyl Acrylate, Ethyl Acrylate, n-Butyl Acrylate (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Methyl-Ethyl-n-Butyl-Acrylate-QCO.pdf",
      linkText: "S.O. No. 4001 (E) 04/11/2020",
    },
  },
  {
    id: 251,
    sno: 251,
    isNumber: "IS 12345:1988",
    product: "Vinyl Acetate Monomer",
    notification: {
      title: "45. Vinyl Acetate Monomer (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Vinyl-Acetate-Monomer.pdf",
      linkText: "S.O. No. 4003 (E) 04/11/2020",
    },
  },
  {
    id: 252,
    sno: 252,
    isNumber: "IS 4105:2020",
    product: "Styrene (Vinyl Benzene)",
    notification: {
      title: "46. Styrene (Vinyl Benzene) (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Styrine-QCO.pdf",
      linkText: "S.O. No. 4002 (E) 04/11/2020",
    },
  },
  {
    id: 253,
    sno: 253,
    isNumber: "IS 5149:2020",
    product: "Maleic Anhydride, Technical",
    notification: {
      title: "47. Maleic Anhydride (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Maleic-Anhydride-QCO-1.pdf",
      linkText: "S.O. No. 4000 (E) 04/11/2020",
    },
  },
  {
    id: 254,
    sno: 254,
    isNumber: "IS 12540:1988",
    product: "Acrylonitrile",
    notification: {
      title: "48. Acrylonitrile (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Acrylonitrile-QCO-1.pdf",
      linkText: "S.O. No. 3999 (E) 04/11/2020",
    },
  },
  {
    id: 255,
    sno: 255,
    isNumber: "IS 17265:2019",
    product: "100 Percent. Polyester Spun Grey and White Yarn (PSY)",
    notification: {
      title:
        "49. 100 Percent Polyester Spun Grey and White Yarn (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/100-Percent-Polyester-Spun-Grey-and-White-Yarn-Quality-Control-Order-2021.pdf",
      linkText: "S.O. 1618 (E) dated 15.04.2021",
    },
  },
  {
    id: 256,
    sno: 256,
    isNumber: "IS 17261:2019",
    product: "Polyester Continuous Filament Fully Drawn Yarn (FDY)",
    notification: {
      title:
        "50. Polyester Continuous Filament Fully Drawn Yarn (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1621 (E) dated 15.04.2021",
    },
  },
  {
    id: 257,
    sno: 257,
    isNumber: "IS 17264:2019",
    product: "Polyester Industrial Yarn (IDY)",
    notification: {
      title: "51. Polyester Industrial Yarn (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1622 (E) dated 15.04.2021",
    },
  },
  {
    id: 258,
    sno: 258,
    isNumber: "IS 17262:2019",
    product: "Polyester Partially Oriented Yarn (POY)",
    notification: {
      title:
        "52. Polyester Partially Oriented Yarn (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1623 (E) dated 15.04.2021",
    },
  },
  {
    id: 259,
    sno: 259,
    isNumber: "IS 17263:2019",
    product: "Polyester Staple Fibres (PSF)",
    notification: {
      title: "53. Polyester Staple Fibres (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1624 (E) dated 15.04.2021",
    },
  },
  {
    id: 260,
    sno: 260,
    isNumber: "IS 7328:2020",
    product: "Polyethylene Material for moulding and extrusion",
    notification: {
      title:
        "54. Polyethylene Material for Moulding and Extrusion (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1625 (E) dated 15.04.2021",
    },
  },
  {
    id: 261,
    sno: 261,
    isNumber: "IS 11356:2020",
    product: "Styrene-Butadiene Rubber Latex",
    notification: {
      title: "55. Styrene-Butadiene Rubber Latex (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1626 (E) dated 15.04.2021",
    },
  },
  {
    id: 262,
    sno: 262,
    isNumber: "IS 16481:2016",
    product: "Synthetic Micro-Fibres for use in Cement Based Matrix",
    notification: {
      title:
        "56. Synthetic Micro-Fibres for use in Cement Based Matrix (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Polyester-QCO.pdf",
      linkText: "S.O. 1627 (E) dated 15.04.2021",
    },
  },
  {
    id: 263,
    sno: 263,
    isNumber: "IS 12795:2020",
    product: "Linear Alkyl Benzene",
    notification: {
      title: "57. Linear Alkyl Benzene (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/Linear-Alkyl-Benzene-QCO.pdf",
      linkText: "S.O. 1664 (E) dated 15.04.2021",
    },
  },
  {
    id: 264,
    sno: 264,
    isNumber: "IS 13601:1993",
    product: "Ethylene Vinyl Acetate (EVA) Copolymers",
    notification: {
      title:
        "58. Ethylene Vinyl Acetate Copolymers (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/05/EVA-Coplymer-QCO.pdf",
      linkText: "S.O. 1620 (E) dated 15.04.2021",
    },
  },
  {
    id: 265,
    sno: 265,
    isNumber: "IS 7686:2020",
    product: "3(N, N-DiEthyl) Aminophenol",
    notification: {
      title: "59. 3 (N, N Di-Ethyl) Aminophenol (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/07/3-N-N-Di-Ethyl-Aminophenol-Quality-Control-Order-2021.pdf",
      linkText: "S.O. No. 2031 (E) 25/05/2021",
    },
  },
  {
    id: 266,
    sno: 266,
    isNumber: "IS 4566:2020",
    product: "Methylene Chloride (Dichloromethane)",
    notification: {
      title:
        "60. Methylene Chloride (Dichloromethane) (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/07/Methylene-Chloride-Dichloromethane-Quality-Control-Order-2021-1.pdf",
      linkText: "S.O. No. 2032 (E) 25/05/2021",
    },
  },
  {
    id: 267,
    sno: 267,
    isNumber: "IS 2012:2006",
    product: "Red Phosphorus",
    notification: {
      title: "61. Red Phosphorus (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/07/Red-Phosphorus-Quality-Control-Order-2021-1.pdf",
      linkText: "S.O. No. 2033 (E) 25/05/2021",
    },
  },
  {
    id: 268,
    sno: 268,
    isNumber: "IS 17077:2019/ISO 19062-1:2015",
    product: "Acrylonitrile Butadiene Styrene (ABS)",
    notification: {
      title:
        "62. Acrylonitrile-Butadiene Styrene (ABS) (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3927 (E) dated 13.09.2021",
    },
  },
  {
    id: 269,
    sno: 269,
    isNumber: "IS 869:2020",
    product: "Ethylene Dichloride",
    notification: {
      title: "63. Ethylene Dichloride (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3928 (E) dated 13.09.2021",
    },
  },
  {
    id: 270,
    sno: 270,
    isNumber: "IS 17370:2020",
    product: "p-Xylene",
    notification: {
      title: "64. p-Xylene (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3929 (E) dated 13.09.2021",
    },
  },
  {
    id: 271,
    sno: 271,
    isNumber: "IS 14434:1998",
    product: "Polycarbonate",
    notification: {
      title: "65. Polycarbonate (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3930 (E) dated 13.09.2021",
    },
  },
  {
    id: 272,
    sno: 272,
    isNumber: "IS 17397 (Part 1):2020/ISO 16365-1:2014",
    product: "Polyurethanes",
    notification: {
      title: "66. Polyurethanes (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3931 (E) dated 13.09.2021",
    },
  },
  {
    id: 273,
    sno: 273,
    isNumber: "IS 17442:2020",
    product: "Vinyl Chloride Monomer",
    notification: {
      title: "67. Vinyl Chloride Monomer (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Chemical-Products-Quality-Control-Order-2021-3.pdf",
      linkText: "S.O. 3932 (E) dated 13.09.2021",
    },
  },
  {
    id: 274,
    sno: 274,
    isNumber: "IS 17450:2020",
    product: "1,3 Phenylenediamine",
    notification: {
      title: "68. 1,3 Phenylenediamine (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/05/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "S.O. 1960(E), dated 27/04/2022",
    },
  },
  {
    id: 275,
    sno: 275,
    isNumber: "IS 10931 : 1984",
    product: "Lauric Acid",
    notification: {
      title: "69. Lauric Acid (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Lauric Acid(Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Lauric Acid (Quality Control) Amendment Order, 2023 (S.O. 1864(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Lauric Acid (Quality Control) Amendment Order, 2023 (S.O. 4608(E), dated 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Lauric Acid (Quality Control) Amendment Order, 2024 S.O. 1136(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Lauric Acid (Quality Control) Second Amendment Order, 2024 S.O. 4611(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 276,
    sno: 276,
    isNumber: "IS 12029 : 1986",
    product: "Acid Oil",
    notification: {
      title: "70. Acid Oil (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Acid Oil (Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Acid Oil (Quality Control) Amendment Order, 2023 (S.O. 1865(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Acid Oil(Quality Control) Amendment Order, 2023 (S.O. 4609(E), 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Acid Oil (Quality Control) Amendment Order, 2024 S.O. 1137(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Acid Oil (Quality Control) Second Amendment Order, 2024 S.O. 4612(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 277,
    sno: 277,
    isNumber: "IS 12067: 1987",
    product: "Palm Fatty Acids",
    notification: {
      title: "71. Palm Fatty Acids (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Palm Fatty Acids (Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Palm Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 1866(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Palm Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 4610(E), 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Palm Fatty Acids (Quality Control) Amendment Order, 2024 S.O. 1138(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Palm Fatty Acids (Quality Control) Second Amendment Order, 2024 S.O. 4613(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 278,
    sno: 278,
    isNumber: "IS 12068 :1987",
    product: "Rice Bran Fatty Acids",
    notification: {
      title: "72. Rice Bran Fatty Acids (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Rice Bran Fatty Acids (Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Rice Bran Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 1867(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Rice Bran Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 4611(E), 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Rice Bran Fatty Acids (Quality Control) Amendment Order, 2024 S.O. 1139(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Rice Bran Fatty Acids (Quality Control) Second Amendment Order, 2024 S.O. 4614(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 279,
    sno: 279,
    isNumber: "IS 12069 : 1987",
    product: "Coconut Fatty Acids",
    notification: {
      title: "73. Coconut Fatty Acids (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Coconut Fatty Acids (Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Coconut Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 1868(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Coconut Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 4612(E), 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Coconut Fatty Acids (Quality Control) Amendment Order, 2024 S.O. 1140(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Coconut Fatty Acids (Quality Control) Second Amendment Order, 2024 S.O. 4615(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 280,
    sno: 280,
    isNumber: "IS 12124 : 1987",
    product: "Rubberseed Fatty Acids",
    notification: {
      title: "74. Rubberseed Fatty Acids (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
    },
  },
  {
    id: 281,
    sno: 281,
    isNumber: "IS 12361 :1988",
    product: "Hydrogenated Rice Bran Fatty Acids",
    notification: {
      title:
        "75. Hydrogenated Rice Bran Fatty Acids (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Notification-for-08-QCOs-from-DCPC-27042022.pdf",
      linkText: "(S.O. 1961(E), dated 27/04/2022)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Extension-for-date-of-implementation-of-06-QCOs.pdf",
          text: "Hydrogenated Rice Bran Fatty Acids (Quality Control) Amendment Order, 2022 (Amendment order for various Chemicals, dated 21 October 2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Gazette_Notification_for_extension_of_QCO_for_7_Chemicals.pdf",
          text: "Hydrogenated Rice Bran Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 1869(E), dated 24/04/2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Amendment-in-06-Chemical-QCO.pdf",
          text: "Hydrogenated Rice Bran Fatty Acids (Quality Control) Amendment Order, 2023 (S.O. 4613(E), 19th October, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Amendment-order-of-Lauric-acid-Acid-oil-Palm-fatty-acid-Rice-bran-fatty-acidCoconut-fatty-acid-and-Hydrogenated-rice-bran-fatty-acids.pdf",
          text: "Hydrogenated Rice Bran Fatty Acids (Quality Control) Amendment Order, 2024 S.O. 1141(E), dated 07th March 2024",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Amendment-in-Quality-Control-Order-of-06-Chemicals.pdf",
          text: "Hydrogenated Rice Bran Fatty Acids (Quality Control) Second Amendment Order, 2024 S.O. 4616(E), dated 22nd October 2024",
        },
      ],
    },
  },
  {
    id: 282,
    sno: 282,
    isNumber: "IS 302 (Part 2/ Section 14)",
    product: "Hand-held Blender",
    notification: {
      title:
        "76. Bureau of Indian Standards Kitchen Appliances (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5243(E) dated 10th October, 2018",
    },
  },
  {
    id: 283,
    sno: 283,
    isNumber: "IS 4250",
    product:
      "Domestic Electric Food Mixer (Liquidizers and Grinders) and Centrifugal Juicer",
    notification: {
      title:
        "76. Bureau of Indian Standards Kitchen Appliances (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5243(E) dated 10th October, 2018",
    },
  },
  {
    id: 284,
    sno: 284,
    isNumber: "IS 15558",
    product:
      "Instantaneous Domestic Water Heater for use with Liquefied Petroleum Gas",
    notification: {
      title:
        "77. Bureau of Indian Standards Domestic Water Heater for Use with Liquefied Petroleum Gas (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5244(E) dated 10th October, 2018",
    },
  },
  {
    id: 285,
    sno: 285,
    isNumber: "IS 1391 (Part-1): 2017",
    product:
      "Room Air Conditioners- Specification Part 1 Unitary Air Conditioners",
    notification: {
      title:
        "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Air-Conditioner-QCO.pdf",
      linkText: "S.O. 4354(E) dated 05th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-notification-AC-QCO.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2020 (S.O. 1518(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Air-Conditioner-and-its-related-Parts-Hermetic-Compressor-and-Temperature-Sensing-Controls-Quality-Control-Second-Amendment-Order-2020.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Second Amendment Order, 2020",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Air-conditioner-QCO-extension-order.pdf",
          text: "Air Conditioner and its related parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2021 S.O. 5095(E), dated 08 December, 2021",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Extension-of-Date-of-implementation-of-AC-QCOpdf-1.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressors and Temperature Sensing Controls (Quality Control) Amendment Order, 2022 (S.O. 5972(E), dated 21/12/2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Air-Conditioner-and-its-related-parts.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2023 (S.O. 32(E), dated 29th December, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Air-Conditioner-QCO-Amendment-Order-2025.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2025 S.O. 695(E) Dated 11 February, 2025",
        },
      ],
    },
  },
  {
    id: 286,
    sno: 286,
    isNumber: "IS 1391 (Part-2): 2018",
    product:
      "Room Air Conditioners- Specification Part 2 Split Air Conditioners",
    notification: {
      title:
        "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Air-Conditioner-QCO.pdf",
      linkText: "S.O. 4354(E) dated 05th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-notification-AC-QCO.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2020 (S.O. 1518(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Air-Conditioner-and-its-related-Parts-Hermetic-Compressor-and-Temperature-Sensing-Controls-Quality-Control-Second-Amendment-Order-2020.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Second Amendment Order, 2020",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Air-conditioner-QCO-extension-order.pdf",
          text: "Air Conditioner and its related parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2021 S.O. 5095(E), dated 08 December, 2021",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Extension-of-Date-of-implementation-of-AC-QCOpdf-1.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressors and Temperature Sensing Controls (Quality Control) Amendment Order, 2022 (S.O. 5972(E), dated 21/12/2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Air-Conditioner-and-its-related-parts.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2023 (S.O. 32(E), dated 29th December, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Air-Conditioner-QCO-Amendment-Order-2025.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2025 S.O. 695(E) Dated 11 February, 2025",
        },
      ],
    },
  },
  {
    id: 287,
    sno: 287,
    isNumber: "IS 8148:2018",
    product: "Ducted and Package Air Conditioners",
    notification: {
      title:
        "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Air-Conditioner-QCO.pdf",
      linkText: "S.O. 4354(E) dated 05th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-notification-AC-QCO.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2020 (S.O. 1518(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Air-Conditioner-and-its-related-Parts-Hermetic-Compressor-and-Temperature-Sensing-Controls-Quality-Control-Second-Amendment-Order-2020.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Second Amendment Order, 2020",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Air-conditioner-QCO-extension-order.pdf",
          text: "Air Conditioner and its related parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2021 S.O. 5095(E), dated 08 December, 2021",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Extension-of-Date-of-implementation-of-AC-QCOpdf-1.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressors and Temperature Sensing Controls (Quality Control) Amendment Order, 2022 (S.O. 5972(E), dated 21/12/2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Air-Conditioner-and-its-related-parts.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2023 (S.O. 32(E), dated 29th December, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Air-Conditioner-QCO-Amendment-Order-2025.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2025 S.O. 695(E) Dated 11 February, 2025",
        },
      ],
    },
  },
  {
    id: 288,
    sno: 288,
    isNumber: "IS 11329:2018",
    product: "Finned type Heat Exchanger for Room Air Conditioner",
    notification: {
      title:
        "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Air-Conditioner-QCO.pdf",
      linkText: "S.O. 4354(E) dated 05th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-notification-AC-QCO.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2020 (S.O. 1518(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Air-Conditioner-and-its-related-Parts-Hermetic-Compressor-and-Temperature-Sensing-Controls-Quality-Control-Second-Amendment-Order-2020.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Second Amendment Order, 2020",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Air-conditioner-QCO-extension-order.pdf",
          text: "Air Conditioner and its related parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2021 S.O. 5095(E), dated 08 December, 2021",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Extension-of-Date-of-implementation-of-AC-QCOpdf-1.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressors and Temperature Sensing Controls (Quality Control) Amendment Order, 2022 (S.O. 5972(E), dated 21/12/2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Air-Conditioner-and-its-related-parts.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2023 (S.O. 32(E), dated 29th December, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Air-Conditioner-QCO-Amendment-Order-2025.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2025 S.O. 695(E) Dated 11 February, 2025",
        },
      ],
    },
  },
  {
    id: 289,
    sno: 289,
    isNumber: "IS 10617:2018",
    product: "Hermetic compressor\nHermetic Compressors-Specification",
    notification: {
      title:
        "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Air-Conditioner-QCO.pdf",
      linkText: "S.O. 4354(E) dated 05th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-notification-AC-QCO.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2020 (S.O. 1518(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Air-Conditioner-and-its-related-Parts-Hermetic-Compressor-and-Temperature-Sensing-Controls-Quality-Control-Second-Amendment-Order-2020.pdf",
          text: "The Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Second Amendment Order, 2020",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Air-conditioner-QCO-extension-order.pdf",
          text: "Air Conditioner and its related parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2021 S.O. 5095(E), dated 08 December, 2021",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/Extension-of-Date-of-implementation-of-AC-QCOpdf-1.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressors and Temperature Sensing Controls (Quality Control) Amendment Order, 2022 (S.O. 5972(E), dated 21/12/2022)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Air-Conditioner-and-its-related-parts.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2023 (S.O. 32(E), dated 29th December, 2023)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Air-Conditioner-QCO-Amendment-Order-2025.pdf",
          text: "Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Amendment Order, 2025 S.O. 695(E) Dated 11 February, 2025",
        },
      ],
    },
  },
  {
    id: 290,
    sno: 290,
    isNumber: "IS 1293 : 2005",
    product:
      "Plugs and socket-outlets of Rated Voltage up to and including 250 Volts and Rated current up to and including 16 amperes",
    notification: {
      title:
        "Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Plug-and-socket-QCO.pdf",
      linkText: "S.O. 4353(E) dated 04th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-Notification-Plug-and-Socket.pdf",
          text: "The Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Amendment Order, 2020 (S.O. 1517(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Plugs-and-Socket-Outlets-and-AC-Direct-Connected-Static-Prepayment-Meters-for-Active-Energy-Quality-Control-Order-2021.pdf",
          text: "Superseded by Plugs and Socket-Outlets and AC Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2021",
        },
      ],
    },
  },
  {
    id: 291,
    sno: 291,
    isNumber: "IS 15884:2010",
    product:
      "Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Class1 and 2)",
    notification: {
      title:
        "Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/Plug-and-socket-QCO.pdf",
      linkText: "S.O. 4353(E) dated 04th December, 2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/06/Extension-Notification-Plug-and-Socket.pdf",
          text: "The Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Amendment Order, 2020 (S.O. 1517(E) dated 18th May, 2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Plugs-and-Socket-Outlets-and-AC-Direct-Connected-Static-Prepayment-Meters-for-Active-Energy-Quality-Control-Order-2021.pdf",
          text: "Superseded by Plugs and Socket-Outlets and AC Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2021",
        },
      ],
    },
  },
  {
    id: 292,
    sno: 292,
    isNumber: "IS 4246: 2002",
    product: "Domestic Gas Stoves for use with Liquefied Petroleum Gases",
    notification: {
      title:
        "80. Domestic Gas Stoves for use with Liquefied Petroleum Gases (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2019/12/QCO-LPG-Stoves.pdf",
      linkText: "S.O. 4345(E) dated 03th December, 2019",
    },
  },
  {
    id: 293,
    sno: 293,
    isNumber: "IS 14900: 2018",
    product: "Transparent Float Glass",
    notification: {
      title: "Transparent Float Glass (Quality Control) Order, 2019",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/QCO-on-transparent-float-glass.pdf",
      linkText: "(S.O. 03 (E) dated 31/12/2019",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/07/Extension-Order-Float-Glass.pdf",
          text: "Transparent Float Glass (Quality Control) (Amendment) Order, 2020 (S.O.2016(E) dated 23/06/2020)",
        },
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Transparent-Float-Glass-Quality-Control-Order-2021.pdf",
          text: "81.Superseded by Transparent Float Glass (Quality Control) Order, 2021 (S.O. 1928 (E) dated 17.05.2021)",
        },
      ],
    },
  },

  {
    id: 294,
    sno: 294,
    isNumber: "IS 2347:2017",
    product: "Domestic Pressure Cooker",
    notification: {
      title: "82. Domestic Pressure Cooker (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Pressure_cooker_QCO.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020)",
      amendments: [
        {
          link: "https://www.bis.gov.in/wp-content/uploads/2020/07/Extension-Order-Pressure-Cooker.pdf",
          text: "Domestic Pressure Cooker (Quality Control) (Amendment) Order, 2020 (S.O.2019(E) dated 23/06/2020)",
        },
      ],
    },
  },
  {
    id: 295,
    sno: 295,
    isNumber: "IS 1554(Part 1) : 1988",
    product:
      "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 1 For Working Voltages up to and Including 1100 V",
    notification: {
      title: "83. Cables (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Cables_28012020.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020 )",
    },
  },
  {
    id: 296,
    sno: 296,
    isNumber: "IS 1554(Part 2) : 1988",
    product:
      "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 2 For Working Voltages from 3.3 kV up to and Including 11 kV",
    notification: {
      title: "83. Cables (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Cables_28012020.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020 )",
    },
  },
  {
    id: 297,
    sno: 297,
    isNumber: "IS 7098 (Part 1) : 1988",
    product:
      "Specification for Crosslinked Polyethylene Insulated PVC Sheathed Cables Part 1 for working voltages up to and including 1100 V",
    notification: {
      title: "83. Cables (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Cables_28012020.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020 )",
    },
  },
  {
    id: 298,
    sno: 298,
    isNumber: "IS 7098 (Part 2) : 2011",
    product:
      "Crosslinked polyethylene insulated Thermoplastics sheathed cables – Specification Part 2 for working voltages from 3.3 kV up to and including 33 kV",
    notification: {
      title: "83. Cables (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Cables_28012020.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020 )",
    },
  },
  {
    id: 299,
    sno: 299,
    isNumber: "IS 7098 (Part 3) : 1993",
    product:
      "Cross-Linked Polyethylene Insulated Thermoplastics Sheathed Cables Part 3 For Working Voltages from 66 kV Up to and Including 220 kV",
    notification: {
      title: "83. Cables (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/01/Cables_28012020.pdf",
      linkText: "(S.O. 294 (E) dated 21/01/2020 )",
    },
  },
  {
    id: 300,
    sno: 300,
    isNumber: "IS 14255 : 1995",
    product:
      "Aerial Bunched Cables – For Working Voltages Up to and Including 1100 Volts – Specification",
  },
  {
    id: 301,
    sno: 301,
    isNumber: "IS 9968 (Part 2) : 2002",
    product:
      "Specification for Elastomer Insulated Cables Part 2 For Working Voltages form 3.3 kV Up to and Including 33 kV",
  },
  {
    id: 302,
    sno: 302,
    isNumber: "IS 8784 : 1987",
    product: "Specification for Thermocouple Compensating Cables",
  },
  {
    id: 303,
    sno: 303,
    isNumber: "IS 9857 : 1990",
    product: "Welding Cables – Specification",
  },
  {
    id: 304,
    sno: 304,
    isNumber: "IS 14494 : 2019",
    product:
      "Elastomer Insulated Flexible Cables for Use in Mines – Specification",
  },
  {
    id: 305,
    sno: 305,
    isNumber: "IS 2593 : 1984",
    product: "Specification for Flexible Cables for Miner's Cap-Lamps",
  },
  {
    id: 306,
    sno: 306,
    isNumber: "IS 5950 : 1984",
    product:
      "Specification for Shot Firing Cables (for use other than in shafts)",
  },
  {
    id: 307,
    sno: 307,
    isNumber: "IS 17048 : 2018",
    product:
      "Halogen Free Flame Retardant (HFFR) Cables for Working Voltages Up to and Including 1100 V – Specification",
  },
  {
    id: 308,
    sno: 308,
    isNumber: "IS 9573(Part 1):2017",
    product:
      "Rubber Hose for Liquefied Petroleum Gas (LPG)- Specification Part 1 Industrial Application",
    notification: {
      title:
        "84. Rubber Hose for Liquefied Petroleum Gas (LPG) (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/02/Rubber_Hose_LPG_QCO.pdf",
      linkText: "(S.O. 478(E) dated 28th January 2020)",
    },
  },
  {
    id: 309,
    sno: 309,
    isNumber: "IS 9573(Part 2):2017",
    product:
      "Rubber Hose for Liquefied Petroleum Gas (LPG)- Specification Part 2- Domestic and Commercial Application.",
    notification: {
      title:
        "84. Rubber Hose for Liquefied Petroleum Gas (LPG) (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/02/Rubber_Hose_LPG_QCO.pdf",
      linkText: "(S.O. 478(E) dated 28th January 2020)",
    },
  },
  {
    id: 310,
    sno: 310,
    isNumber: "IS 15392",
    product: "Aluminium and Aluminium Alloy Bare Foil for Food Packaging",
    notification: {
      title: "85. Aluminium Foil (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/02/Aluminium_foil_QCO.pdf",
      linkText: "(S.O. 687 (E) dated 13/02/2020 )",
    },
  },
  {
    id: 311,
    sno: 311,
    isNumber: "IS 9873 (Part 1) : 2018",
    product:
      "Safety of Toys Part l Safety Aspects Related to Mechanical and Physical Properties.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 312,
    sno: 312,
    isNumber: "IS 9873 (Part 2) : 2017",
    product: "Safety of Toys Part 2 Flammability.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 313,
    sno: 313,
    isNumber: "IS 9873 (Part 3) : 2017",
    product:
      "Safety Requirements for Toys Part 3 Migration of Certain Elements.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 314,
    sno: 314,
    isNumber: "IS 9873 (Part 4) : 2017",
    product:
      "Safety of Toys Part 4 Swings, Slides and Similar Activity Toys for Indoor and Outdoor Family Domestic Use.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 315,
    sno: 315,
    isNumber: "IS 9873 (Part 7) : 2017",
    product:
      "Safety of Toys Part 7 Requirements and Test Methods for Finger Paints.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 316,
    sno: 316,
    isNumber: "IS 9873 (Part 9) : 2017",
    product:
      "Safety of Toys Part 9 Certain Phthalates Esters in Toys and Children's Products.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 317,
    sno: 317,
    isNumber: "IS 15644: 2006",
    product: "Safety of Electric Toys.",
    notification: {
      title: "86. Toys (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Toy_QC_order.pdf",
      linkText: "(S.O. 853(E) dated 25th February 2020)",
    },
  },
  {
    id: 318,
    sno: 318,
    isNumber: "IS 2835 : 1987",
    product: "Flat Transparent Sheet Glass.",
    notification: {
      title:
        "87. Superseded by Flat Transparent Sheet Glass (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Flat-Transparent-Sheet-Glass-Quality-Control-Order-2021.pdf",
      linkText: "(S.O. 4144(E) dated 7th October, 2021)",
    },
  },
  {
    id: 319,
    sno: 319,
    isNumber: "IS 2553 (Part 1):2018",
    product:
      "Safety Glass -Specification Part 1 Architectural, Building and General uses.",
    notification: {
      title: "88. Safety Glass (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Safety-Glass-QCO.pdf",
      linkText: "(S.O. 1045(E) dated 12th March 2020)",
    },
  },
  {
    id: 320,
    sno: 320,
    isNumber: "IS 2553 (Part 2):2019",
    product: "Safety Glass -Specification Part 2 For Road Transport.",
    notification: {
      title: "88. Safety Glass (Quality Control ) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/03/Safety-Glass-QCO.pdf",
      linkText: "(S.O. 1045(E) dated 12th March 2020)",
    },
  },
  {
    id: 321,
    sno: 321,
    isNumber: "IS/ISO 6742-2:2015",
    product: "Retro-reflective Devices",
    notification: {
      title:
        "91. Bicycles- Retro Reflective Devices (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/QCO-CoC-Bycycle-DPIIT.pdf",
      linkText: "(S.O. 2290(E) dated 07/07/2020)",
      additionalLinks: [
        {
          text: "Superseded by Bicycles- Retro Reflective Devices (Quality Control) Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Bicycles-Retro-Reflective-Devices-Quality-Control-Order-2021.pdf",
          linkText: "(S.O. 2028 (E) dated 25.05.2021)",
        },
        {
          text: "Bicycles- Retro Reflective Devices (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Bicycle.pdf",
          linkText: "(S.O. 5400(E), dated 24 December 2021)",
        },
        {
          text: "Bicycles- Retro-Reflective Devices (Quality Control) Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/03/Extension-of-DOI-of-Bicycles-Retro-Reflective-Devices-Quality-Control-Order-2021.pdf",
          linkText: "(S.O. 882(E), dated 23 February 2023)",
        },
        {
          text: "Corrigendum for Bicycles Retro-Reflective Devices (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Corrigndum-for-Bicycyle-reflector-27032023.pdf",
          linkText: "(S.O. 1441(E), dated 27 March 2023)",
        },
        {
          text: "Bicycles- Retro Reflective Devices (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Bicycles-Retro-Reflective-Devices-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 4569(E), dated 18th October 2024",
        },
      ],
    },
  },
  {
    id: 322,
    sno: 322,
    isNumber: "IS 14490:2018",
    product: "Plain Copier Paper",
    notification: {
      title: "92. Plain Copier Paper (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/QCO-Copier-paper-DPIIT.pdf",
      linkText: "(S.O. 2149(E) dated 05/06/2020)",
    },
  },
  {
    id: 323,
    sno: 323,
    isNumber: "IS 2052 : 2009",
    product: "Compounded Feeds for Cattle",
    notification: {
      title:
        "93. FSSAI Direction vide File No. 1-95/Std/Misc/SP(LC&A)/FSSAI-2015-Pt-1c dated 27.01.2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/07/Direction_Meat_Milk_Feed_27_01_2020.pdf",
      linkText:
        "FSSAI Direction vide File No. 1-95/Std/Misc/SP(LC&A)/FSSAI-2015-Pt-1c dated 27.01.2020",
      additionalLinks: [
        {
          text: "Corrigendum dated 30.01.2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2020/07/Corrigendum_Direction_Meat_Milk_Feed_30_01_2020.pdf",
          linkText: "Corrigendum dated 30.01.2020",
        },
        {
          text: "Extension of timeline for compliance with the direction dated 27th January, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2020/07/Extension_TimeLine_Feeds_24_07_20202-1.pdf",
          linkText:
            "Extension of timeline for compliance with the direction dated 27th January, 2020",
        },
        {
          text: "Extension of timeline for compliance with the direction dated 01 January, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Extension-of-time-line-for-compliance-dated-01.01.2021.pdf",
          linkText:
            "Extension of timeline for compliance with the direction dated 01 January, 2021",
        },
        {
          text: "Extension of timeline for compliance with the direction dated 27th Jan. 2020 issued under 16 (5) of Food Safety and Standards Act, 2006",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/08/Extension-of-timeline-for-compliance-with-the-direction-dated-27th-Jan.-2020-issued-under-16-5-of-Food-Safety-and-Standards-Act-2006.pdf",
          linkText:
            "Extension of timeline for compliance with the direction dated 27th Jan. 2020 issued under 16 (5) of Food Safety and Standards Act, 2006",
        },
      ],
    },
  },
  {
    id: 324,
    sno: 324,
    isNumber: "IS: 16192 (Part 1)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 1 Light Alloy Wheel Rims Method of Tests and Requirements",
    notification: {
      title: "94. Automobile Wheel Rim Component (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/09/Wheel-Rim-QCO.pdf",
      linkText: "(S.O. 3227(E) dated 21/09/2020)",
      additionalLinks: [
        {
          text: "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Automobile-Wheel-Rim-Component-Quality-Control-Amendment-Order-2021.pdf",
          linkText:
            "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Second Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Automobile-Wheel-Rim-Component-Quality-Control-Order-2020.pdf",
          linkText: "(S.O. 4493(E), dated 22 October 2021)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Whell-rim-QCO-amendment-2022.pdf",
          linkText: "(Amendment order S.O.2634(E), dated 8th June 2022)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/06/246575.pdf",
          linkText: "(S.O. 2657 (E), dated 15th June 2023)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order- II, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Automobile-Wheel-Rim-Component.pdf",
          linkText: "(S.O. 5379(E), dated 19th December, 2023)",
        },
      ],
    },
  },
  {
    id: 325,
    sno: 325,
    isNumber: "IS: 16192 (Part 2)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 2 Sheet Metal Wheel Rims Method of Tests and Requirements",
    notification: {
      title: "94. Automobile Wheel Rim Component (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/09/Wheel-Rim-QCO.pdf",
      linkText: "(S.O. 3227(E) dated 21/09/2020)",
      additionalLinks: [
        {
          text: "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Automobile-Wheel-Rim-Component-Quality-Control-Amendment-Order-2021.pdf",
          linkText:
            "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Second Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Automobile-Wheel-Rim-Component-Quality-Control-Order-2020.pdf",
          linkText: "(S.O. 4493(E), dated 22 October 2021)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Whell-rim-QCO-amendment-2022.pdf",
          linkText: "(Amendment order S.O.2634(E), dated 8th June 2022)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/06/246575.pdf",
          linkText: "(S.O. 2657 (E), dated 15th June 2023)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order- II, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Automobile-Wheel-Rim-Component.pdf",
          linkText: "(S.O. 5379(E), dated 19th December, 2023)",
        },
      ],
    },
  },
  {
    id: 326,
    sno: 326,
    isNumber: "IS: 16192 (Part 3)",
    product:
      "Automotive Vehicles Wheel Rims for Two and Three Wheeled Vehicles Part 3 Spoke Wheel Rims Method of Tests and Requirements",
    notification: {
      title: "94. Automobile Wheel Rim Component (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/09/Wheel-Rim-QCO.pdf",
      linkText: "(S.O. 3227(E) dated 21/09/2020)",
      additionalLinks: [
        {
          text: "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Automobile-Wheel-Rim-Component-Quality-Control-Amendment-Order-2021.pdf",
          linkText:
            "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Second Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Automobile-Wheel-Rim-Component-Quality-Control-Order-2020.pdf",
          linkText: "(S.O. 4493(E), dated 22 October 2021)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Whell-rim-QCO-amendment-2022.pdf",
          linkText: "(Amendment order S.O.2634(E), dated 8th June 2022)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/06/246575.pdf",
          linkText: "(S.O. 2657 (E), dated 15th June 2023)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order- II, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Automobile-Wheel-Rim-Component.pdf",
          linkText: "(S.O. 5379(E), dated 19th December, 2023)",
        },
      ],
    },
  },
  {
    id: 327,
    sno: 327,
    isNumber: "IS: 9436",
    product:
      "Performance Requirements and Methods of Tests for Wheels for Passenger Cars",
    notification: {
      title: "94. Automobile Wheel Rim Component (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/09/Wheel-Rim-QCO.pdf",
      linkText: "(S.O. 3227(E) dated 21/09/2020)",
      additionalLinks: [
        {
          text: "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Automobile-Wheel-Rim-Component-Quality-Control-Amendment-Order-2021.pdf",
          linkText:
            "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Second Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Automobile-Wheel-Rim-Component-Quality-Control-Order-2020.pdf",
          linkText: "(S.O. 4493(E), dated 22 October 2021)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Whell-rim-QCO-amendment-2022.pdf",
          linkText: "(Amendment order S.O.2634(E), dated 8th June 2022)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/06/246575.pdf",
          linkText: "(S.O. 2657 (E), dated 15th June 2023)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order- II, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Automobile-Wheel-Rim-Component.pdf",
          linkText: "(S.O. 5379(E), dated 19th December, 2023)",
        },
      ],
    },
  },
  {
    id: 328,
    sno: 328,
    isNumber: "IS: 9438",
    product:
      "Performance Requirements and Methods of Tests for Wheels or Rims for Trucks and Buses",
    notification: {
      title: "94. Automobile Wheel Rim Component (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/09/Wheel-Rim-QCO.pdf",
      linkText: "(S.O. 3227(E) dated 21/09/2020)",
      additionalLinks: [
        {
          text: "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/06/Automobile-Wheel-Rim-Component-Quality-Control-Amendment-Order-2021.pdf",
          linkText:
            "Superseded by Automobile Wheel Rim Component (Quality Control) Amendment Order,2021",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Second Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Automobile-Wheel-Rim-Component-Quality-Control-Order-2020.pdf",
          linkText: "(S.O. 4493(E), dated 22 October 2021)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Whell-rim-QCO-amendment-2022.pdf",
          linkText: "(Amendment order S.O.2634(E), dated 8th June 2022)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/06/246575.pdf",
          linkText: "(S.O. 2657 (E), dated 15th June 2023)",
        },
        {
          text: "Automobile Wheel Rim Component (Quality Control) Amendment Order- II, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Automobile-Wheel-Rim-Component.pdf",
          linkText: "(S.O. 5379(E), dated 19th December, 2023)",
        },
      ],
    },
  },
  {
    id: "footwear-section",
    isSectionHeader: true,
    sectionTitle: "Foot Wear",
  },
  {
    id: 329,
    sno: 329,
    isNumber: "IS 5557: 2004",
    product: "Industrial and protective rubber knee and ankle boots",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
      additionalLinks: [
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2020.pdf",
          linkText: "(S.O. 4378 (E) dated 04/12/2020)",
        },
        {
          text: "Footwear made from all Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/07/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2021.pdf",
          linkText: "(Quality Control) Amendment Order, 2021",
        },
        {
          text: "Rescind order for the Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Rescind-order-for-Footwear-made-from-all-Rubber-all-Polymeric-material-and-its-component-QCO-2020.pdf",
          linkText: "(S.O. 2597(E), dated 3rd June 2022)",
        },
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Leather-Footwear-QCO-2022.pdf",
          linkText: "(S.O. 2600(E), dated 3rd June 2022)",
        },
        {
          text: "Footwear Made from all Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Footwear-made-from-all-rubber-and-all-Polymeric-material-Amend.-QCO-2022.pdf",
          linkText: "S.O. 3880(E), dated 11 August 2022",
        },
        {
          text: "Footwear made from all Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Gazette-Notification-.pdf",
          linkText: "S.O.3893(E), dated 1st September, 2023",
        },
        {
          text: "Footwear made from All Rubber and all Polymeric Material and its Components (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Footwear-made-from-All-Rubber-and-all-Polymeric-Materials-and-its-Components-QCO-2024.pdf",
          linkText: "S.O. 1422(E), dated 15th March 2024",
        },
        {
          text: "Footwear made from All Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Footwear-made-from-All-Rubber-and-all-Polymeric-Material-and-its-QCO.pdf",
          linkText: "S.O. 3701(E), dated 30th August 2024",
        },
      ],
    },
  },
  {
    id: 330,
    sno: 330,
    isNumber: "IS 5557 (Part 2): 2018",
    product: "All rubber gum boots and ankle boots",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
      additionalLinks: [
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2020.pdf",
          linkText: "(S.O. 4378 (E) dated 04/12/2020)",
        },
        {
          text: "Footwear made from all Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/07/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2021.pdf",
          linkText: "(Quality Control) Amendment Order, 2021",
        },
        {
          text: "Rescind order for the Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Rescind-order-for-Footwear-made-from-all-Rubber-all-Polymeric-material-and-its-component-QCO-2020.pdf",
          linkText: "(S.O. 2597(E), dated 3rd June 2022)",
        },
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Leather-Footwear-QCO-2022.pdf",
          linkText: "(S.O. 2600(E), dated 3rd June 2022)",
        },
        {
          text: "Footwear Made from all Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/11/Footwear-made-from-all-rubber-and-all-Polymeric-material-Amend.-QCO-2022.pdf",
          linkText: "S.O. 3880(E), dated 11 August 2022",
        },
        {
          text: "Footwear made from all Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Gazette-Notification-.pdf",
          linkText: "S.O.3893(E), dated 1st September, 2023",
        },
        {
          text: "Footwear made from All Rubber and all Polymeric Material and its Components (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Footwear-made-from-All-Rubber-and-all-Polymeric-Materials-and-its-Components-QCO-2024.pdf",
          linkText: "S.O. 1422(E), dated 15th March 2024",
        },
        {
          text: "Footwear made from All Rubber and all Polymeric Material and its Components (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Footwear-made-from-All-Rubber-and-all-Polymeric-Material-and-its-QCO.pdf",
          linkText: "S.O. 3701(E), dated 30th August 2024",
        },
      ],
    },
  },
  {
    id: 331,
    sno: 331,
    isNumber: "IS 5676: 1995",
    product: "Moulded solid rubber soles and heels",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
      additionalLinks: [
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2020.pdf",
          linkText: "(S.O. 4378 (E) dated 04/12/2020)",
        },
        {
          text: "Footwear made from all Rubber and all Polymeric material and its components (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/07/Footwear-made-from-all-Rubber-and-all-Polymeric-material-and-its-components-Quality-Control-Amendment-Order-2021.pdf",
          linkText: "(Quality Control) Amendment Order, 2021",
        },
        {
          text: "Rescind order for the Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Rescind-order-for-Footwear-made-from-all-Rubber-all-Polymeric-material-and-its-component-QCO-2020.pdf",
          linkText: "(S.O. 2597(E), dated 3rd June 2022)",
        },
        {
          text: "Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Leather-Footwear-QCO-2022.pdf",
          linkText: "(S.O. 2600(E), dated 3rd June 2022)",
        },
      ],
    },
  },
  {
    id: 332,
    sno: 332,
    isNumber: "IS 6664: 1992",
    product: "Rubber microcellular sheets for soles and heels",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 333,
    sno: 333,
    isNumber: "IS 6719: 1972",
    product: "Solid PVC soles and heels",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 334,
    sno: 334,
    isNumber: "IS 6721: 1972",
    product: "PVC sandal",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 335,
    sno: 335,
    isNumber: "IS 10702: 1992",
    product: "Rubber Hawai Chappal",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 336,
    sno: 336,
    isNumber: "IS 12254: 1993",
    product: "Polyvinyl chloride(PVC) industrial boots",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 337,
    sno: 337,
    isNumber: "IS 13893: 1994",
    product: "Polyurethane sole, semirigid",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 338,
    sno: 338,
    isNumber: "IS 13995: 1995",
    product: "Unlined moulded rubber boots",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 339,
    sno: 339,
    isNumber: "IS 16645: 2018",
    product:
      "Moulded plastics footwear- Lined or Unlined polyurethane boots for general industrial use",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 340,
    sno: 340,
    isNumber: "IS 16994: 2018",
    product: "Footwear for men and women for municipal scavenging work",
    notification: {
      title:
        "95. Footwear made from all-Rubber and all Polymeric material and its components (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Footwear-QualityControlOrder-2020-29October2020.pdf",
      linkText: "(S.O. No. 3858 (E) 27/10/2020)",
    },
  },
  {
    id: 359,
    sno: 359,
    isNumber: "IS 4296 (Part 2):2016",
    product:
      "Tools for Pressing Part 2 Punches with Cylindrical Head and Straight or Reduced Shank",
    notification: {
      title: "98. Press Tool- Punches (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Punch-QCO.pdf",
      linkText: "(S.O. No. 3994 (E) 04/11/2020)",
    },
  },
  {
    id: 360,
    sno: 360,
    isNumber: "IS 4296 (Part 3):2016",
    product:
      "Tools for Pressing Part 3 Round Punches with 60 Degrees Conical Head and Reduced Shank",
    notification: {
      title: "98. Press Tool- Punches (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/11/Punch-QCO.pdf",
      linkText: "(S.O. No. 3994 (E) 04/11/2020)",
    },
  },
  {
    id: "helmet-section",
    isSectionHeader: true,
    sectionTitle: "Helmet for riders of Two Wheeler Motor Vehicles",
  },
  {
    id: 361,
    sno: 361,
    isNumber: "IS 4151: 2015",
    product: "Helmet for riders of Two Wheeler Motor Vehicles",
    notification: {
      title:
        "99. Helmet for riders of Two Wheeler Motor Vehicles (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Helmet-for-riders-of-Two-Wheeler-Motor-Vehicles-Quality-Control-Order-2020.pdf",
      linkText: "(S.O. No. 4252 (E) 26/11/2020)",
    },
  },
  {
    id: "refrigerating-section",
    isSectionHeader: true,
    sectionTitle: "Refrigerating Appliances",
  },
  {
    id: 362,
    sno: 362,
    isNumber: "IS 17550 (Part 1): 2021",
    product:
      "Household Refrigerating Appliances- Characteristics and Test Methods part-1 General Requirements",
    notification: {
      title: "100. Refrigerating Appliances (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Refrigerating-Appliances-Quality-Control-Order-2020.pdf",
      linkText: "(S.O. No. 4489 (E) 10/12/2020)",
      additionalLinks: [
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Refrigerating-Appliances-Quality-Control-Amendemnt-Order-2021.pdf",
          linkText: "(S.O. 5339(E), dated 22 December 2021)",
        },
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/e-Gazette-notification.pdf",
          linkText: "S.O. 5850(E), dated 14 December, 2022",
        },
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Refrigerating-Appliances-QCO-2025.pdf",
          linkText: "S.O. 358(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: 363,
    sno: 363,
    isNumber: "IS 7872: 2018",
    product: "Freezers",
    notification: {
      title: "100. Refrigerating Appliances (Quality Control) Order, 2020",
      link: "https://www.bis.gov.in/wp-content/uploads/2020/12/Refrigerating-Appliances-Quality-Control-Order-2020.pdf",
      linkText: "(S.O. No. 4489 (E) 10/12/2020)",
      additionalLinks: [
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2021",
          link: "https://www.bis.gov.in/wp-content/uploads/2021/12/Refrigerating-Appliances-Quality-Control-Amendemnt-Order-2021.pdf",
          linkText: "(S.O. 5339(E), dated 22 December 2021)",
        },
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2022/12/e-Gazette-notification.pdf",
          linkText: "S.O. 5850(E), dated 14 December, 2022",
        },
        {
          text: "Refrigerating Appliances (Quality Control) Amendment Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Refrigerating-Appliances-QCO-2025.pdf",
          linkText: "S.O. 358(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: "iron-pipes-section",
    isSectionHeader: true,
    sectionTitle: "Centrifugally cast (Spun) iron pipes",
  },
  {
    id: 364,
    sno: 364,
    isNumber: "IS 1536: 2001",
    product:
      "Centrifugally cast (Spun) iron pressure pipes for water, gas and sewage",
    notification: {
      title:
        "101. Centrifugally Cast (Spun) Iron Pipes (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Centrifugally-Cast-Spun-Iron-Pipes-Quality-Control-Order-2021.pdf",
      linkText: "(S.O. No. 116 (E) 12/01/2021)",
    },
  },
  {
    id: 365,
    sno: 365,
    isNumber: "IS 3989: 2009",
    product:
      "Centrifugally cast (Spun) iron spigot and socket soil, waste, ventilating and rainwater pipes, fittings and accessories",
    notification: {
      title:
        "101. Centrifugally Cast (Spun) Iron Pipes (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Centrifugally-Cast-Spun-Iron-Pipes-Quality-Control-Order-2021.pdf",
      linkText: "(S.O. No. 116 (E) 12/01/2021)",
    },
  },
  {
    id: 366,
    sno: 366,
    isNumber: "IS 15905: 2011",
    product:
      "Hubless centrifugally cast (Spun) iron pipes, fittings and accessories – Spigot series",
    notification: {
      title:
        "101. Centrifugally Cast (Spun) Iron Pipes (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/01/Centrifugally-Cast-Spun-Iron-Pipes-Quality-Control-Order-2021.pdf",
      linkText: "(S.O. No. 116 (E) 12/01/2021)",
    },
  },
  {
    id: "flux-electrodes-section",
    isSectionHeader: true,
    sectionTitle: "Flux Cored (Tubular) Electrodes",
  },
  {
    id: 367,
    sno: 367,
    isNumber: "IS 15769:2008",
    product:
      "Flux Cored (Tubular) Electrodes for Gas Shielded and Self-Shielded Metal Welding of Carbon or Carbon- Manganese Steel",
    notification: {
      title:
        "102. Flux Cored (Tubular) Electrodes (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/03/Flux-Cored-Tubular-Electrodes-Quality-Control-Order-2021.pdf",
      linkText: "(S.O. No. 1203 (E) 12/03/2021)",
    },
  },
  {
    id: "sewing-machine-section",
    isSectionHeader: true,
    sectionTitle: "Sewing Machine",
  },
  {
    id: 368,
    sno: 368,
    isNumber: "IS 15449 : Part 1 : 2004",
    product: "Household Zig-Zag Sewing Machine Head",
    notification: {
      title: "103. Sewing Machines (Quality Control) Order, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/03/Household_Zig_Zag_Sewing_Machine.pdf",
      linkText: "(S.O. No. 1239 (E) 15.03.2021)",
    },
  },
  {
    id: "water-treatment-section",
    isSectionHeader: true,
    sectionTitle: "Water Treatment System",
  },
  {
    id: 369,
    sno: 369,
    isNumber: "IS 16240 : 2023",
    product:
      "Reverse Osmosis Based Point of Use Water Treatment System for Drinking Purposes",
    notification: {
      title: "104. Environment (Protection) 115 Amendment Rules, 2021",
      link: "https://www.bis.gov.in/wp-content/uploads/2021/10/Environment-Protection-115-Amendment-Rules-2021.pdf",
      linkText:
        "(Notification of water Purification system G.S.R.724(E) dated 04.10.2021)",
      additionalLinks: [
        {
          text: "Water Purification System (Regulation of USE) Rules, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Water-purification-System-Regulation-of-UseRules-2023-Amendment.pdf",
          linkText: "G.S.R. 833(E), dated 10th November, 2023",
        },
      ],
    },
  },
  {
    id: "jute-bag-section",
    isSectionHeader: true,
    sectionTitle: "Jute Bag",
  },
  {
    id: 370,
    sno: 370,
    isNumber: "IS 1943:1995",
    product: "A- twill Jute Bag",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: 371,
    sno: 371,
    isNumber: "IS 2566:1993",
    product: "B-twill Jute bags for packing foodgrains",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: 372,
    sno: 372,
    isNumber: "IS 12650:2018",
    product: "Jute bags for packing 50 Kg foodgrains",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: 373,
    sno: 373,
    isNumber: "IS 15138:2010",
    product: "Jute bags for packing 50 Kg sugar",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: 374,
    sno: 374,
    isNumber: "IS 16186:2014",
    product: "Light weight jute sacking bags for packing 50 Kg foodgrains",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: 375,
    sno: 375,
    isNumber: "IS 16372:2015",
    product: "Jute bags for packing up to 30 Kg foodgrains",
    notification: {
      title: "105. Jute Bags (Quality Control)Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2022/06/Textile-Ministry-notification-for-Jute-bag-QCO-2022.pdf",
      linkText: "(S.O. 2601(E), dated 6th June 2022)",
    },
  },
  {
    id: "viscose-staple-section",
    isSectionHeader: true,
    sectionTitle: "Viscose Staple Fibres",
  },
  {
    id: 376,
    sno: 376,
    isNumber: "IS 17266:2019",
    product: "Viscose Staple Fibres",
    notification: {
      title: "106. Viscose Staple Fibres (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/01/Viscos-Staple-Fibre-QCO-2022.pdf",
      linkText: "Viscose Staple Fibres (Quality Control) Order, 2022",
      additionalLinks: [
        {
          text: "Viscose Staple Fibre (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/03/SO_443_VSF-QCO-Extension-order27012023.pdf",
          linkText: "(S.O. 443(E), dated 27/01/2023)",
        },
      ],
    },
  },
  {
    id: "geo-textiles-section",
    isSectionHeader: true,
    sectionTitle: "Geo Textiles",
  },
  {
    id: 377,
    sno: 377,
    isNumber: "IS 15351 : 2015",
    product:
      "Laminated High Density Polyethylene (HDPE) Woven Geomembrane for Water Proof Lining",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
      additionalLinks: [
        {
          text: "Geo Textiles (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Geo-Textiles-Quality-ControlAmendment-Order-2023.pdf",
          linkText: "(S.O. 2331(E), dated 24th May, 2023)",
        },
        {
          text: "Ministry of Textiles Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Ministry-of-Textiles-Order-2023.pdf",
          linkText: "No. 6/1/2021 - R&D (Pt.) , dated 06 October, 2023",
        },
      ],
    },
  },
  {
    id: 378,
    sno: 378,
    isNumber: "IS 15909 : 2020",
    product: "Poly Vinyl Chloride (PVC) Geomembranes",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
      additionalLinks: [
        {
          text: "Geo Textiles (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Geo-Textiles-Quality-ControlAmendment-Order-2023.pdf",
          linkText: "(S.O. 2331(E), dated 24th May, 2023)",
        },
        {
          text: "Ministry of Textiles Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Ministry-of-Textiles-Order-2023.pdf",
          linkText: "No. 6/1/2021 - R&D (Pt.) , dated 06 October, 2023",
        },
      ],
    },
  },
  {
    id: 379,
    sno: 379,
    isNumber: "IS 16653 : 2017",
    product: "Needle punched non-woven geobags",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 380,
    sno: 380,
    isNumber: "IS 16654: 2017",
    product: "Polypropylene Multifilament woven geobags",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 381,
    sno: 381,
    isNumber: "IS 14715 (Part 1): 2016",
    product: "Jute Geotextiles",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 382,
    sno: 382,
    isNumber: "IS 14715 (Part 2): 2016",
    product: "Jute Geotextiles",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 383,
    sno: 383,
    isNumber: "IS 15869 : 2020",
    product: "Open Weave Coir Bhoovastra",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 384,
    sno: 384,
    isNumber: "IS 16391 : 2015",
    product: "Geotextiles used in sub-grade separation in pavement structures",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 385,
    sno: 385,
    isNumber: "IS 16393 : 2015",
    product: "Geotextiles used in Subsurface Drainage Application",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 386,
    sno: 386,
    isNumber: "IS 16362 : 2020",
    product:
      "Geotextiles used in Sub-grade Stabilisation in pavement structures",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 387,
    sno: 387,
    isNumber: "IS 16352 : 2020",
    product: "High Density Polyethylene (HDPE) Geomembranes for lining",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 388,
    sno: 388,
    isNumber: "IS 16090:2013",
    product: "Geotextiles used as protection (or cushioning) materials",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 389,
    sno: 389,
    isNumber: "IS 16392:2015",
    product: "Geotextiles for permanent erosion control in hard armor systems",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 390,
    sno: 390,
    isNumber: "IS 17371:2020",
    product: "Geogrids for flexible pavements",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 391,
    sno: 391,
    isNumber: "IS 17372:2020",
    product:
      "Polymeric strip or geostrip used as soil reinforcement in retaining structures",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 392,
    sno: 392,
    isNumber: "IS 17373:2020",
    product: "Geogrids used in reinforced soil retaining structures",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 393,
    sno: 393,
    isNumber: "IS 17374:2020",
    product:
      "Reinforced HDPE membrane for effluents and chemical resistance lining",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 394,
    sno: 394,
    isNumber: "IS 17483 (Part 1): 2020",
    product: "Geocells",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 395,
    sno: 395,
    isNumber: "IS 17483 (Part 2): 2020",
    product: "Geocells",
    notification: {
      title: "107. Geo Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Geo-textiles-QCO-1.pdf",
      linkText: "(S.O. 1706 (E), dated 10th April, 2023)",
    },
  },
  {
    id: 396,
    sno: 396,
    isNumber: "IS 17880 :2022",
    product:
      "Geosynthetics — Synthetic Polymer RopeGabions for Coastal and Waterways Protection — Specification",
    notification: {
      title: "108. Geotextiles (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Geotextiles-QCO-2024-1.pdf",
      linkText: "S.O. 4332(E), dated 03rd October 2024",
    },
  },
  {
    id: "protective-textiles-section",
    isSectionHeader: true,
    sectionTitle: "Protective Textiles",
  },
  {
    id: 397,
    sno: 397,
    isNumber: "IS 15741 : 2007",
    product: "Curtains and Drapes",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
      additionalLinks: [
        {
          text: "Protective Textiles (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Protective-Textiles-Quality-ControlAmendment-Order-2023.pdf",
          linkText: "(S.O. 2332(E), 24th May, 2023)",
        },
        {
          text: "Protective Textiles (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Protective-Textiles-QCO-amendment-2024.pdf",
          linkText: "S.O. 3896(E), dated 12th September 2024",
        },
      ],
    },
  },
  {
    id: 398,
    sno: 398,
    isNumber: "IS 16890 : 2018",
    product: "Protective clothing for firefighters",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
      additionalLinks: [
        {
          text: "Protective Textiles (Quality Control) Amendment Order, 2022",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Protective-Textiles-Quality-ControlAmendment-Order-2023.pdf",
          linkText: "(S.O. 2332(E), 24th May, 2023)",
        },
        {
          text: "Protective Textiles (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Protective-Textiles-QCO-amendment-2024.pdf",
          linkText: "S.O. 3896(E), dated 12th September 2024",
        },
      ],
    },
  },
  {
    id: 399,
    sno: 399,
    isNumber: "IS 16874 : 2018",
    product: "Protective gloves for firefighters",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 400,
    sno: 400,
    isNumber: "IS 15748 : 2022",
    product: "Protective clothing for industrial workers exposed to heat",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 401,
    sno: 401,
    isNumber: "IS 15742 : 2007",
    product:
      "Clothing made of limited flame spread materials and material assemblies affording protection against heat and flame",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 402,
    sno: 402,
    isNumber: "IS 15809 : 2017",
    product: "High visibility Warning Clothes",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 403,
    sno: 403,
    isNumber: "IS 16655 : 2017",
    product: "Protective Clothing for use in welding and allied processes",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 404,
    sno: 404,
    isNumber: "IS 16725 : 2018",
    product: "Tactical 3 point sling",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 405,
    sno: 405,
    isNumber: "IS 16726 : 2018",
    product:
      "Pouch for ammunition and grenades made of disruptive pattern nylon-66",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 406,
    sno: 406,
    isNumber: "IS 17051 : 2018",
    product: "Bullet resistant jackets",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: 407,
    sno: 407,
    isNumber: "IS 17286 : 2019",
    product: "Water-proof multipurpose rain poncho",
    notification: {
      title: "109. Protective Textiles (Quality Control) Order, 2022",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/04/Protective-textiles-QCO-1.pdf",
      linkText: "(S.O. 1707(E), dated 10th April, 2023)",
    },
  },
  {
    id: "upholstered-composites-section",
    isSectionHeader: true,
    sectionTitle: "Upholstered Composites used for Non-Domestic Furniture",
  },
  {
    id: 408,
    sno: 408,
    isNumber: "IS 15768 : 2008",
    product: "Upholstered composites used for non-domestic furniture",
    notification: {
      title:
        "110. Protective Textiles Quality Control (Upholstered Composites used for Non-Domestic Furniture) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Protextive-Textiles-QC-upholstered-Composites-used-fror-non-domestic-Furniture-Order-2024.pdf",
      linkText: "S.O. 3916(E), dated 12th September 2024",
    },
  },
  {
    id: "flame-producing-lighters-section",
    isSectionHeader: true,
    sectionTitle: "Flame- Producing Lighters",
  },
  {
    id: 409,
    sno: 409,
    isNumber: "IS/ISO 9994:2018",
    product: "Lighters- Safety Specifications",
    notification: {
      title: "111. Flame- Producing Lighters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Flame-producing-Lighters-QCO-2023-1.pdf",
      linkText: "S.O. 2986(E), dated 5th July 2023",
      additionalLinks: [
        {
          text: "Flame- Producing Lighters (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Flame-Producing-Lighters-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 4230(E), dated 24th September 2024",
        },
      ],
    },
  },
  {
    id: 410,
    sno: 410,
    isNumber: "IS/ISO 22702:2018",
    product: "Utility Lighters – Safety Specifications",
    notification: {
      title: "111. Flame- Producing Lighters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Flame-producing-Lighters-QCO-2023-1.pdf",
      linkText: "S.O. 2986(E), dated 5th July 2023",
      additionalLinks: [
        {
          text: "Flame- Producing Lighters (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Flame-Producing-Lighters-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 4230(E), dated 24th September 2024",
        },
      ],
    },
  },
  {
    id: "potable-water-bottles-section",
    isSectionHeader: true,
    sectionTitle: "Potable Water Bottles",
  },
  {
    id: 411,
    sno: 411,
    isNumber: "IS 17803: 2022",
    product: "Potable Water Bottles (Copper, Stainless Steel, Aluminum)",
    notification: {
      title: "112. Potable Water Bottles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Pottable-Wtaer-bottles-QCO-2023-1.pdf",
      linkText: "S.O. 2988(E), dated 5th July 2023",
      additionalLinks: [
        {
          text: "Potable Water Bottles (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Potable-Water-Bottles-Quality-ControlOrder-2024.pdf",
          linkText: "S.O. 1071(E), dated 05th March 2024",
        },
        {
          text: "Potable Water Bottles (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Potable-Water-Bottles-QCO.pdf",
          linkText: "S.O. 3702(E), dated 29th August 2024",
        },
      ],
    },
  },
  {
    id: "welding-rods-electrodes-section",
    isSectionHeader: true,
    sectionTitle: "Welding Rods and Electrodes",
  },
  {
    id: 412,
    sno: 412,
    isNumber: "IS 814 : 2004",
    product:
      "Covered electrodes for manual metal arc welding of carbon and carbon manganese steel",
    notification: {
      title: "113. Welding Rods and Electrodes (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Welding-Rod-Electrode-QCO.pdf",
      linkText: "S.O. 3153(E), dated 14th July 2023",
    },
  },
  {
    id: 413,
    sno: 413,
    isNumber: "IS 6419 : 1996",
    product:
      "Welding rode and bare electrodes for gas shielded arc welding of structural steel",
    notification: {
      title: "113. Welding Rods and Electrodes (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Welding-Rod-Electrode-QCO.pdf",
      linkText: "S.O. 3153(E), dated 14th July 2023",
    },
  },
  {
    id: "smart-meters-section",
    isSectionHeader: true,
    sectionTitle: "Smart Meters",
  },
  {
    id: 414,
    sno: 414,
    isNumber: "IS 16444 Part 1",
    product: "A.C. Static Direct Connected Watt Hour Smart Meter Class 1 and 2",
    notification: {
      title: "114. Smart Meters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Smart-Meter-QCO.pdf",
      linkText: "S.O. 3154(E), dated 14th July 2023",
    },
  },
  {
    id: 415,
    sno: 415,
    isNumber: "IS 16444 Part 2",
    product:
      "A.C. Static Transformer Operated Watt Hour and Var-Hour Smart Meters, Class 0.2S, 0.5S and 1.0S",
    notification: {
      title: "114. Smart Meters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Smart-Meter-QCO.pdf",
      linkText: "S.O. 3154(E), dated 14th July 2023",
    },
  },
  {
    id: "insulated-flask-section",
    isSectionHeader: true,
    sectionTitle: "Insulated Flask, Bottles and Containers for Domestic Use",
  },
  {
    id: 416,
    sno: 416,
    isNumber: "IS 17790 : 2022",
    product: "Insulated Flask for Domestic Use",
    notification: {
      title:
        "115. Insulated Flask, Bottles and Containers for Domestic Use (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Insulated-Flask-Botles-and-Containers-for-Domestic-Use-QCO-2023.pdf",
      linkText: "S.O. 3140(E), dated 14th July 2023",
      additionalLinks: [
        {
          text: "Insulated Flask, Bottles and Containers for Domestic Use (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Insulated-Flask-Bottles-and-Containers-for-Domestic-Use-QCO.pdf",
          linkText: "S.O. 1072(E), dated 05th March 2024",
        },
        {
          text: "Insulated Flask, Bottles and Containers for Domestic Use (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Insulated-Flask-Bottles-and-Containers-for-Domestic-Use-QCO-29.pdf",
          linkText: "S.O. 3705(E), dated 29th August 2024",
        },
      ],
    },
  },
  {
    id: 417,
    sno: 417,
    isNumber: "IS 17526 : 2021",
    product: "Domestic Stainless steel vacuum flask/bottle",
    notification: {
      title:
        "115. Insulated Flask, Bottles and Containers for Domestic Use (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Insulated-Flask-Botles-and-Containers-for-Domestic-Use-QCO-2023.pdf",
      linkText: "S.O. 3140(E), dated 14th July 2023",
    },
  },
  {
    id: 418,
    sno: 418,
    isNumber: "IS 17569: 2021",
    product: "Insulated Container for Food Storage",
    notification: {
      title:
        "115. Insulated Flask, Bottles and Containers for Domestic Use (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Insulated-Flask-Botles-and-Containers-for-Domestic-Use-QCO-2023.pdf",
      linkText: "S.O. 3140(E), dated 14th July 2023",
    },
  },
  {
    id: 419,
    sno: 419,
    isNumber: "IS 3513 (Part 1) : 1989",
    product:
      "Resin treated compressed wood laminates (compregs) - For electrical purposes",
    notification: {
      title:
        "116. Resin treated compressed wood laminates (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Resin-treated-compressed-wood-laminates-QCO-2023.pdf",
      linkText: "S.O. 3139(E), dated 14th July 2023",
      additionalLinks: [
        {
          text: "Resin Treated Compressed Wood Laminates (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Resin-Treated-Compressed-Wood-Laminates-QCO-2024.pdf",
          linkText: "S.O. 1018(E), dated 29th February 2024",
        },
      ],
    },
  },
  {
    id: 420,
    sno: 420,
    isNumber: "IS 3513 (Part 2) : 1989",
    product:
      "Resin treated compressed wood laminates (compregs) - For chemical purposes",
    notification: {
      title:
        "116. Resin treated compressed wood laminates (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Resin-treated-compressed-wood-laminates-QCO-2023.pdf",
      linkText: "S.O. 3139(E), dated 14th July 2023",
    },
  },
  {
    id: 421,
    sno: 421,
    isNumber: "IS 3513 (Part 3) : 1989",
    product:
      "Resin treated compressed wood laminates (compregs) - For general purposes",
    notification: {
      title:
        "116. Resin treated compressed wood laminates (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/Resin-treated-compressed-wood-laminates-QCO-2023.pdf",
      linkText: "S.O. 3139(E), dated 14th July 2023",
    },
  },
  {
    id: "bolts-nuts-fasteners-section",
    isSectionHeader: true,
    sectionTitle: "Bolts, Nuts and Fasteners",
  },
  {
    id: 422,
    sno: 422,
    isNumber: "IS 1363 (Part 1) :2019",
    product:
      "Hexagon Head Bolts, Screws and Nuts of product Grade C Hexagon Head Bolts (Size Range M 5 to M 64)",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
      additionalLinks: [
        {
          text: "Bolts, Nuts and Fasteners (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Bolts-Nuts-and-Fateners-QCO-2024.pdf",
          linkText: "S.O. 2771(E), dated 12th July 2024",
        },
      ],
    },
  },
  {
    id: 423,
    sno: 423,
    isNumber: "IS 1363 (Part 2) :2018",
    product: "Hexagon Head Screw (Size ranges from M 5 to 64)",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 424,
    sno: 424,
    isNumber: "IS 1363 (Part 3) :2018",
    product:
      "Hexagon Head Bolts, Screws and Nuts of product Grade C - Hexagon Nuts (Size Range M5 to M64)",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 425,
    sno: 425,
    isNumber: "IS 1364 (Part 1) :2018",
    product:
      "Hexagon Head Bolts, Screws and Nuts of product Grades A and B - Hexagon Head Bolts (Size Range M 1.6 To M 64)",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 426,
    sno: 426,
    isNumber: "IS 1364 (Part 2) :2018",
    product:
      "Hexagon Head Bolts, Screws and Nuts of Product Grades A and B - Hexagon Head Screws (Size Range M 1.6 to M 64)",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 427,
    sno: 427,
    isNumber: "IS 4621:1975",
    product: "Indicating Bolts for use in public baths and lavatories",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 428,
    sno: 428,
    isNumber: "IS 5187: 1972",
    product: "Flush Bolts",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 429,
    sno: 429,
    isNumber: "IS 10238:2001",
    product:
      "Fasteners - Threaded Steel Fastener - Step Bolts for Steel Structures",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 430,
    sno: 430,
    isNumber: "IS 12427 : 2001",
    product:
      "Fasteners - Threaded Steel Fasteners - Hexagon Head Transmission Tower Bolts",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 431,
    sno: 431,
    isNumber: "IS 3757 : 1985",
    product: "High Strength Structural Bolts",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 432,
    sno: 432,
    isNumber: "IS 204 (Part 2): 1992",
    product: "Tower Bolts- Non-ferrous metal",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 433,
    sno: 433,
    isNumber: "IS 204 (Part 1): 1991",
    product: "Tower Bolts- Ferrous metals",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 434,
    sno: 434,
    isNumber: "IS 15834 : 2022",
    product:
      "Stainless Steel Sliding Door Bolts (Aldrops) for use With Padlocks",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 435,
    sno: 435,
    isNumber: "IS 2681 : 1993",
    product:
      "Non-ferrous metal sliding door bolts (aldrops) for use with padlocks",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 436,
    sno: 436,
    isNumber: "IS 281 : 2009",
    product: "Mild steel sliding door bolts for use with padlocks",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 437,
    sno: 437,
    isNumber: "IS 7534: 1985",
    product: "Sliding locking bolts for use with padlocks",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 438,
    sno: 438,
    isNumber: "IS 1284 : 1975",
    product:
      "Wrought Aluminium Alloy Bolt and Screw Stock for General Engineering purposes",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 439,
    sno: 439,
    isNumber: "IS 15833 : 2009",
    product: "Stainless steel Tower Bolts",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: 440,
    sno: 440,
    isNumber: "IS 6623 : 2004",
    product: "High Strength Structural Nuts",
    notification: {
      title: "117. Bolts, Nuts and Fasteners (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/07/The-Bolts-Nuts-Fastners-QCO-2023-1.pdf",
      linkText: "S.O. 3267(E), dated 21st July 2023",
    },
  },
  {
    id: "cookware-utensils-section",
    isSectionHeader: true,
    sectionTitle: "Cookware, Utensils and Cans for food and beverages",
  },
  {
    id: 441,
    sno: 441,
    isNumber: "IS 14756 : 2022",
    product: "Stainless Steel Cookware",
    notification: {
      title: "118. Cookware and Utensils (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cookwareand-Utensils-QCO-2023.pdf",
      linkText: "S.O. 3583(E), dated 9th August 2023",
      additionalLinks: [
        {
          text: "Cookware, Utensils and Cans for foods and beverages (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Cookware-Utensils-and-cans-for-foods-and-beverages-QCO-2024.pdf",
          linkText: "S.O. 1365(E), dated 14th March 2024",
        },
        {
          text: "Cookware, Utensils and Cans for Foods and Beverages (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Cookware-Utensils-and-cans-for-food-and-beverages-QCO-2024.pdf",
          linkText: "S.O. 4494(E), dated 14th October 2024",
        },
        {
          text: "Cookware, Utensils and Cans for Foods and Beverages (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Cookware-Utensils-and-cans-for-food-and-beverages-QCO-2024-1.pdf",
          linkText: "S.O. 4494(E), dated 14th October 2024",
        },
      ],
    },
  },
  {
    id: 442,
    sno: 442,
    isNumber: "IS 1660:2009",
    product: "Wrought Aluminium Utensils",
    notification: {
      title: "118. Cookware and Utensils (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cookwareand-Utensils-QCO-2023.pdf",
      linkText: "S.O. 3583(E), dated 9th August 2023",
    },
  },
  {
    id: 443,
    sno: 443,
    isNumber: "IS 13983:1994",
    product: "Stainless Steel Sinks for Domestic Purposes",
    notification: {
      title: "118. Cookware and Utensils (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cookwareand-Utensils-QCO-2023.pdf",
      linkText: "S.O. 3583(E), dated 9th August 2023",
    },
  },
  {
    id: 444,
    sno: 444,
    isNumber: "IS 9396 (Part 1) : 1987",
    product: "Round Open Top Sanitary Cans for Foods and Drinks - Tinplate",
    notification: {
      title: "118. Cookware and Utensils (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cookwareand-Utensils-QCO-2023.pdf",
      linkText: "S.O. 3583(E), dated 9th August 2023",
    },
  },
  {
    id: 445,
    sno: 445,
    isNumber: "IS 14407:1996",
    product: "Aluminium cans for beverages",
    notification: {
      title: "118. Cookware and Utensils (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cookwareand-Utensils-QCO-2023.pdf",
      linkText: "S.O. 3583(E), dated 9th August 2023",
    },
  },
  {
    id: "domestic-gas-stoves-section",
    isSectionHeader: true,
    sectionTitle: "Domestic Gas Stoves for use with PNG",
  },
  {
    id: 446,
    sno: 446,
    isNumber: "IS 17153:2019",
    product: "Domestic Gas Stoves for use with Piped Natural Gas (PNG)",
    notification: {
      title:
        "119. Domestic Gas Stoves for use with Piped Natural Gas (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Domestic-Gas-Stoves-for-use-with-PNG-QCO-2023.pdf",
      linkText: "S.O. 3584(E), dated 9th August 2023",
    },
  },
  {
    id: "fire-extinguishers-section",
    isSectionHeader: true,
    sectionTitle: "Fire Extinguishers",
  },
  {
    id: 447,
    sno: 447,
    isNumber: "IS 15683 : 2018",
    product: "Portable Fire Extinguishers",
    notification: {
      title: "120. Fire Extinguishers (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Fire-Extinguisher-QCO-2023.pdf",
      linkText: "S.O. 3585(E), dated 9th August 2023",
    },
  },
  {
    id: 448,
    sno: 448,
    isNumber: "IS 16018:2012",
    product: "Wheeled Fire Extinguishers",
    notification: {
      title: "120. Fire Extinguishers (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Fire-Extinguisher-QCO-2023.pdf",
      linkText: "S.O. 3585(E), dated 9th August 2023",
    },
  },
  {
    id: "electric-ceiling-fans-section",
    isSectionHeader: true,
    sectionTitle: "Electric Ceiling Type Fans",
  },
  {
    id: 449,
    sno: 449,
    isNumber: "IS 374:2019",
    product: "Electric Ceiling Type Fans",
    notification: {
      title: "121. Electric Ceiling Type Fans (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Electric-Ceiling-Type-Fans-QCO-2023.pdf",
      linkText: "S.O. 3641(E), dated 9th August 2023",
    },
  },
  {
    id: "wood-based-boards-section",
    isSectionHeader: true,
    sectionTitle: "Wood Based Boards",
  },
  {
    id: 450,
    sno: 450,
    isNumber: "IS 1659:2004",
    product: "Block Boards",
    notification: {
      title: "122. Wood Based Boards (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Wood-based-Board-QCO-2023.pdf",
      linkText: "S.O. 3604(E), dated 10th August 2023",
      additionalLinks: [
        {
          text: "Wood Based Products (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Extension-of-Wood-Based-Products-QCO.pdf",
          linkText: "S.O. No. 1307(E), dated 12th March 2024",
        },
      ],
    },
  },
  {
    id: 451,
    sno: 451,
    isNumber: "IS 12823:2015",
    product:
      "Prelaminated particle boards from wood and other Lignocellulosic material",
    notification: {
      title: "122. Wood Based Boards (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Wood-based-Board-QCO-2023.pdf",
      linkText: "S.O. 3604(E), dated 10th August 2023",
    },
  },
  {
    id: 452,
    sno: 452,
    isNumber: "IS 3087:2005",
    product:
      "Particle boards of wood and other lignocellulosic materials (medium density) for general purpose",
    notification: {
      title: "122. Wood Based Boards (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Wood-based-Board-QCO-2023.pdf",
      linkText: "S.O. 3604(E), dated 10th August 2023",
    },
  },
  {
    id: 453,
    sno: 453,
    isNumber: "IS 12406:2021",
    product: "Medium density fibre boards for general purpose",
    notification: {
      title: "122. Wood Based Boards (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Wood-based-Board-QCO-2023.pdf",
      linkText: "S.O. 3604(E), dated 10th August 2023",
    },
  },
  {
    id: 454,
    sno: 454,
    isNumber: "IS 3097:2006",
    product: "Veneered particle boards",
    notification: {
      title: "122. Wood Based Boards (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Wood-based-Board-QCO-2023.pdf",
      linkText: "S.O. 3604(E), dated 10th August 2023",
    },
  },
  {
    id: "cast-iron-products-section",
    isSectionHeader: true,
    sectionTitle: "Cast Iron Products",
  },
  {
    id: 455,
    sno: 455,
    isNumber: "IS 1726:1991",
    product: "Cast iron man hole covers and frames",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
      additionalLinks: [
        {
          text: "Cast Iron Products (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Cast-Iron-Products.pdf",
          linkText: "S.O. 2287(E), dated 13th June 2024",
        },
      ],
    },
  },
  {
    id: 456,
    sno: 456,
    isNumber: "IS 1729:2002",
    product:
      "Cast iron/ductile iron drainage pipes and pipe fittings for over ground non-pressure pipelines socket and spigot series",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
    },
  },
  {
    id: 457,
    sno: 457,
    isNumber: "IS 1879:2010",
    product: "Malleable cast iron pipe fittings",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
    },
  },
  {
    id: 458,
    sno: 458,
    isNumber: "IS 13349:1992",
    product: "Cast iron single faced thimble mounted sluice gates",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
    },
  },
  {
    id: 459,
    sno: 459,
    isNumber: "IS 210:2009",
    product: "Grey iron castings",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
    },
  },
  {
    id: 460,
    sno: 460,
    isNumber: "IS 1537:1976",
    product: "Vertically cast – iron pressure pipes for water, gas and sewage",
    notification: {
      title: "123. Cast Iron Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Cast-Iron-Products-QCO-2023.pdf",
      linkText: "S.O. 3806(E), dated 24th August 2023",
    },
  },
  {
    id: "solar-dc-cable-section",
    isSectionHeader: true,
    sectionTitle: "Solar DC Cable and Fire Survival Cable",
  },
  {
    id: 461,
    sno: 461,
    isNumber: "IS 17293:2020",
    product:
      "Electric Cable for Photovoltic Systems for rated voltage 1500V DC",
    notification: {
      title:
        "124. Solar DC Cable and Fire Survival Cable (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Solar-DC-Cable-and-Fire-Survival-Cable-QCO-2023.pdf",
      linkText: "S.O. 3807(E), dated 24th August 2023",
    },
  },
  {
    id: 462,
    sno: 462,
    isNumber: "IS 17505(Part 1): 2021",
    product:
      "Thermosetting Insulated, Fire Survival Cables for working voltage upto and including 1100V AC and 1500V DC",
    notification: {
      title:
        "124. Solar DC Cable and Fire Survival Cable (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/08/Solar-DC-Cable-and-Fire-Survival-Cable-QCO-2023.pdf",
      linkText: "S.O. 3807(E), dated 24th August 2023",
    },
  },
  {
    id: "metals-alloys-section",
    isSectionHeader: true,
    sectionTitle: "Metals and Alloys",
  },
  {
    id: 463,
    sno: 463,
    isNumber: "IS 617:1994",
    product:
      "Cast aluminium and its alloys – Ingots and castings for general engineering purposes",
    notification: {
      title:
        "125. Aluminium and Aluminium Alloys (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Aluminium-Aluminium-Alloy-QCO-2023.pdf",
      linkText: "S.O. 3846(E), dated 31st August 2023",
      additionalLinks: [
        {
          text: "Aluminium and Aluminium Alloys (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Aluminium-Amended-QCO-2023.pdf",
          linkText: "(S.O. 5090(E), dated 30th November, 2023)",
        },
        {
          text: "Aluminium and Aluminium Alloys (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Al-and-Al-Alloys-QCOAmendment2024.pdf",
          linkText: "S.O. 1902(E), dated 03rd May 2024",
        },
      ],
    },
  },
  {
    id: 464,
    sno: 464,
    isNumber: "IS 11890 : 1987",
    product:
      "High purity primary aluminum ingot for remelting for special applications",
    notification: {
      title:
        "125. Aluminium and Aluminium Alloys (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Aluminium-Aluminium-Alloy-QCO-2023.pdf",
      linkText: "S.O. 3846(E), dated 31st August 2023",
    },
  },
  {
    id: 465,
    sno: 465,
    isNumber: "IS 6754:1972",
    product:
      "Aluminum alloy ingots for remelting for general engineering purpose",
    notification: {
      title:
        "125. Aluminium and Aluminium Alloys (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Aluminium-Aluminium-Alloy-QCO-2023.pdf",
      linkText: "S.O. 3846(E), dated 31st August 2023",
    },
  },
  {
    id: 466,
    sno: 466,
    isNumber: "IS 2590 : 1987",
    product:
      "Primary aluminium ingots for remelting for general engineering purpose",
    notification: {
      title:
        "125. Aluminium and Aluminium Alloys (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Aluminium-Aluminium-Alloy-QCO-2023.pdf",
      linkText: "S.O. 3846(E), dated 31st August 2023",
    },
  },
  {
    id: 467,
    sno: 467,
    isNumber: "IS 4026 : 2023",
    product: "Aluminum ingots billets and wire bars (EC GRADE)",
    notification: {
      title:
        "125. Aluminium and Aluminium Alloys (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Aluminium-Aluminium-Alloy-QCO-2023.pdf",
      linkText: "S.O. 3846(E), dated 31st August 2023",
    },
  },
  {
    id: 468,
    sno: 468,
    isNumber: "IS 191:2007",
    product: "Copper",
    notification: {
      title: "126. Copper (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Copper-QCO-2023.pdf",
      linkText: "S.O. 3847(E), dated 31st August 2023",
      additionalLinks: [
        {
          text: "Copper (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Copper-Quality-Control-Amendment-Order-2023.pdf",
          linkText: "(S.O. 4796(E), dated 3rd November, 2023)",
        },
        {
          text: "Copper (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Copper-QCOAmendment-2024.pdf",
          linkText: "S.O. 1901(E), dated 03rd May 2024",
        },
      ],
    },
  },
  {
    id: 469,
    sno: 469,
    isNumber: "IS 7506:1987",
    product: "Nickel Powder",
    notification: {
      title: "127. Nickel (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Nickle-QCO-2023.pdf",
      linkText: "S.O. 3848(E), dated 31st August 2023",
      additionalLinks: [
        {
          text: "Nickel (Quality Control) Amendment Order, 2023",
          link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Nickle-QCO-Amnd-Order-2023.pdf",
          linkText: "(S.O. 5091(E), dated 30th November, 2023)",
        },
        {
          text: "Nickel (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Nickel-QCO-Amendment2024.pdf",
          linkText: "S.O. 1900(E), dated 03rd May 2024",
        },
      ],
    },
  },
  {
    id: "plywood-wooden-doors-section",
    isSectionHeader: true,
    sectionTitle: "Plywood and Wooden flush door shutters",
  },
  {
    id: 470,
    sno: 470,
    isNumber: "IS 303 : 1989",
    product: "Plywood for general purposes",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
      additionalLinks: [
        {
          text: "Plywood and Wooden flush door shutters (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Plywood-and-Wooden-flush-door-shutters-QCO-2024.pdf",
          linkText: "S.O. 1377(E), dated 15th March 2024",
        },
      ],
    },
  },
  {
    id: 471,
    sno: 471,
    isNumber: "IS 2202 (Part 1) : 1999",
    product:
      "Wooden flush door shutters (solid core type) – Plywood face panels",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 472,
    sno: 472,
    isNumber: "IS 710 : 2010",
    product: "Marine plywood",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 473,
    sno: 473,
    isNumber: "IS 5509 : 2021",
    product: "Fire retardant plywood",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 474,
    sno: 474,
    isNumber: "IS 1328 : 1996",
    product: "Veneered decorative plywood",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 475,
    sno: 475,
    isNumber: "IS 2191 (Part 2): 2022",
    product:
      "Wooden flush door shutters (cellular and hollow core type) – Particle board and hardboard face panels",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 476,
    sno: 476,
    isNumber: "IS 2191 (Part 1): 2022",
    product:
      "Wooden flush door shutters (cellular and hollow core type) – Plywood face panels",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 477,
    sno: 477,
    isNumber: "IS 2202 (Part 2): 2022",
    product:
      "Wooden Flush Door Shutters (Solid core type) – Particle board, High Density Fibre Board, Medium Density Fibre Board and Fibre Hardboard Face Panels",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 478,
    sno: 478,
    isNumber: "IS 4990 : 2011",
    product: "Plywood for concrete shuttering works - Specification",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: 479,
    sno: 479,
    isNumber: "IS 10701 : 2012",
    product: "Structural plywood - Specification",
    notification: {
      title:
        "128. Plywood and Wooden flush door shutters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/Notified-Plywood-and-Wooden-flush-door-shutters-Quality-Control-Order-2023-in-e-Gazette.pdf",
      linkText: "S.O. 3841(E), dated 29th August 2023",
    },
  },
  {
    id: "flux-cored-solder-wire-section",
    isSectionHeader: true,
    sectionTitle: "Flux Cored Solder Wire",
  },
  {
    id: 480,
    sno: 480,
    isNumber: "IS 1921: 2005",
    product: "Flux Cored Solder Wire",
    notification: {
      title: "129. Flux Cored Solder Wire (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/09/QCO-for-Flux-Cored-Solder-Wire-2023.pdf",
      linkText: "S.O. 4092(E), dated 18th September 2023",
    },
  },
  {
    id: "miscellaneous-steel-products-section",
    isSectionHeader: true,
    sectionTitle: "Miscellaneous Steel Products",
  },
  {
    id: 481,
    sno: 481,
    isNumber: "IS 15155 : 2020",
    product:
      "Bar or wire Wrapped Steel Cylinder Pipes with Mortar Lining and Coating Including Specials",
    notification: {
      title: "130. Miscellaneous Steel Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/QCO-for-Miscellaneous-Steel-Products.pdf",
      linkText: "S.O. 4240(E), dated 25th September 2023",
    },
  },
  {
    id: 482,
    sno: 482,
    isNumber: "IS 16651 : 2017",
    product:
      "High Strength deformed stainless steel bars and wires for concrete reinforcement",
    notification: {
      title: "130. Miscellaneous Steel Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/QCO-for-Miscellaneous-Steel-Products.pdf",
      linkText: "S.O. 4240(E), dated 25th September 2023",
    },
  },
  {
    id: 483,
    sno: 483,
    isNumber: "IS 6392 : 2020",
    product: "Steel Pipe Flanges",
    notification: {
      title: "130. Miscellaneous Steel Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/QCO-for-Miscellaneous-Steel-Products.pdf",
      linkText: "S.O. 4240(E), dated 25th September 2023",
    },
  },
  {
    id: 484,
    sno: 484,
    isNumber: "IS 6913 : 1973",
    product: "Stainless steel tubes for the food and beverage industry",
    notification: {
      title: "130. Miscellaneous Steel Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/QCO-for-Miscellaneous-Steel-Products.pdf",
      linkText: "S.O. 4240(E), dated 25th September 2023",
    },
  },
  {
    id: "aluminium-alloy-products-section",
    isSectionHeader: true,
    sectionTitle: "Aluminium and Aluminium Alloy Products",
  },
  {
    id: 485,
    sno: 485,
    isNumber: "IS 7092 (Part 1):1992",
    product: "Aluminium alloy tubes for irrigation purposes -welded tubes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
      additionalLinks: [
        {
          text: "Aluminum and Aluminum Alloy Products (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Aluminum-and-Aluminium-Products-QC-Amend-Order-2024.pdf",
          linkText: "S.O. 1512(E), dated 22nd March 2024",
        },
        {
          text: "Aluminium and Aluminium Alloy Products (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Al-and-Al-Alloys-QCO-2024.pdf",
          linkText: "S.O. 4696(E), dated 28th October 2024",
        },
      ],
    },
  },
  {
    id: 486,
    sno: 486,
    isNumber: "IS 7092 (Part 2):1987",
    product: "Aluminium alloy tube for irrigation purposes - extruded tube",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 487,
    sno: 487,
    isNumber: "IS 5484:1997",
    product:
      "EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 488,
    sno: 488,
    isNumber: "IS 733:1983",
    product:
      "Wrought aluminium and aluminium alloy bars, rods and sections (For General Engineering Purposes)",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 489,
    sno: 489,
    isNumber: "IS 734:1975",
    product:
      "Wrought aluminium and aluminium alloys, forging stock and forgings for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 490,
    sno: 490,
    isNumber: "IS 736:1986",
    product:
      "Wrought aluminium and aluminium alloy plate for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 491,
    sno: 491,
    isNumber: "IS 737:2008",
    product:
      "Wrought aluminium and aluminium alloy sheet and strip for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 492,
    sno: 492,
    isNumber: "IS 739:1992",
    product:
      "Wrought aluminium and aluminium alloy wire for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 493,
    sno: 493,
    isNumber: "IS 740:1977",
    product:
      "Wrought aluminium and aluminium alloy rivet stock for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 494,
    sno: 494,
    isNumber: "IS 5082:1998",
    product:
      "Wrought aluminium and aluminium alloy bars, rods, tubes, sections, plates and sheets for electrical applications",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 495,
    sno: 495,
    isNumber: "IS 16011:2012",
    product: "Aluminium and aluminium alloy foil for pharmaceutical packaging",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 496,
    sno: 496,
    isNumber: "IS 17682:2021",
    product: "Aluminium composite panel",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 497,
    sno: 497,
    isNumber: "IS 1285:2002",
    product:
      "Wrought aluminium  and aluminium alloys- Extruded round tube and hollow sections for general engineering purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 498,
    sno: 498,
    isNumber: "IS 2067:1975",
    product: "Wrought Aluminium Wire for Electrical Purposes",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 499,
    sno: 499,
    isNumber: "IS 21:1992",
    product:
      "Wrought aluminium and aluminium alloys for manufacture of utensils",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 500,
    sno: 500,
    isNumber: "IS 1254:2007",
    product: "Corrugated Aluminium Sheet",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: 501,
    sno: 501,
    isNumber: "IS 7902:2001",
    product:
      "Aluminium alloy forging stock and forgings (Alloy 24345) for aerospace applications",
    notification: {
      title:
        "131. Aluminium and Aluminium Alloy Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Aluminum-and-Aluminum-alloy-products-QCO.pdf",
      linkText: "S.O. 4241(E), dated 25th September 2023",
    },
  },
  {
    id: "precision-roller-bush-chains-section",
    isSectionHeader: true,
    sectionTitle:
      "Precision Roller and Bush Chains, attachments and associated chain sprockets",
  },
  {
    id: 502,
    sno: 502,
    isNumber: "IS 2403 :2014 / ISO 606 : 2004",
    product:
      "Short – Pitch Transmission Precision Roller and Bush Chains, Attachments and Associated Chain Sprockets",
    notification: {
      title:
        "132. Precision Roller and Bush Chains, attachments and associated chain sprockets (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Precision-Roller-and-Bush-Chains-attachments-QCO.pdf",
      linkText: "S.O. 4242(E), dated 25th September 2023",
      additionalLinks: [
        {
          text: "Precision Roller and Bush Chains, attachments and associated Chains sprockets (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Precision-Roller-and-Bush-ChainsAttachments-and-Associated-Chains-Sprockets-QCO-2024.pdf",
          linkText: "S.O. 2174(E), dated 03rd  June 2024",
        },
      ],
    },
  },
  {
    id: "drinking-water-coolers-section",
    isSectionHeader: true,
    sectionTitle: "Self- Contained Drinking Water Coolers",
  },
  {
    id: 503,
    sno: 503,
    isNumber: "IS 1475 (Part 1) : 2001",
    product:
      "Self- Contained Drinking Water Coolers – Energy Consumption and Performance",
    notification: {
      title:
        "133. Self- Contained Drinking Water Coolers (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drinking-Water-Cooler-QCO.pdf",
      linkText: "S.O. 4243(E), dated 25th September 2023",
      additionalLinks: [
        {
          text: "Self-Contained Drinking Water Cooler (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Self-Contained-Drinking-Water-Cooler-QCO-2024.pdf",
          linkText: "S.O. 2112(E), dated 24th  May 2024",
        },
      ],
    },
  },
  {
    id: "medical-textiles-section",
    isSectionHeader: true,
    sectionTitle: "Medical Textiles",
  },
  {
    id: 504,
    sno: 504,
    isNumber: "IS 5405 : 2019",
    product: "Sanitary napkins",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
      additionalLinks: [
        {
          text: "Medical Textiles (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Medical-Textiles-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "(S.O. 830(E), dated 22nd  February, 2024)",
        },
        {
          text: "Medical Textiles (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Medical-Textiles-QCO-2024.pdf",
          linkText: "S.O. 4634(E), dated 23rd October 2024",
        },
        {
          text: "Medical Textiles (Quality Control) Amendment Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Medical-Textiles-Quality-Control-Amendment-Order-2025.pdf",
          linkText: "S.O. 04(E), dated 02nd January 2025",
        },
      ],
    },
  },
  {
    id: 505,
    sno: 505,
    isNumber: "IS 17509 : 2021",
    product: "Disposable baby diaper",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
    },
  },
  {
    id: 506,
    sno: 506,
    isNumber: "IS 17514 : 2021",
    product: "Reusable Sanitary pad/ Sanitary Napkin/ Period Panties",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
    },
  },
  {
    id: 507,
    sno: 507,
    isNumber: "IS 17349 : 2020",
    product: "Shoe covers",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
    },
  },
  {
    id: 508,
    sno: 508,
    isNumber: "IS 17354 : 2020",
    product: "Dental Bib or Napkins",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
    },
  },
  {
    id: 509,
    sno: 509,
    isNumber: "IS 17630 : 2021",
    product: "Bed sheet and Pillow Cover",
    notification: {
      title: "134. Medical Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Medical-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4247(E), dated 27th September 2023",
    },
  },
  {
    id: "agro-textiles-section",
    isSectionHeader: true,
    sectionTitle: "Agro Textiles",
  },
  {
    id: 510,
    sno: 510,
    isNumber: "IS 16718 : 2021",
    product:
      "Polypropylene Spun Bonded Non—Woven Crop Cover and Fruit Skirting Bags for Agriculture and Horticulture Applications",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
      additionalLinks: [
        {
          text: "Agro Textiles (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/04/Agro-Textiles.pdf",
          linkText: "S.O. 1579(E), dated 28th  March 2024",
        },
      ],
    },
  },
  {
    id: 511,
    sno: 511,
    isNumber: "IS 16513 : 2016",
    product: "Insect nets for Agriculture and Horticulture purpose",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 512,
    sno: 512,
    isNumber: "IS 16202 : 2014",
    product: "Woven Ground covers for Horticulture Application",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 513,
    sno: 513,
    isNumber: "IS 17070 : 2019",
    product: "Jute Agro textiles for Growth of Plants and Suppression of Weeds",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 514,
    sno: 514,
    isNumber: "IS 15907 : 2010",
    product: "High Density Polyethylene (HDPE) woven beds for vermiculture",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 515,
    sno: 515,
    isNumber: "IS 16089 : 2013",
    product: "Sapling bags for growth of seedling /sapling",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 516,
    sno: 516,
    isNumber: "IS 16190 : 2014",
    product:
      "High Density Polyethylene (HDPE) laminated woven lay flat tube for irrigation purpose",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 517,
    sno: 517,
    isNumber: "IS 16390 : 2015",
    product: "Nylon Knitted seamless gloves for tobacco harvesters",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 518,
    sno: 518,
    isNumber: "IS 16627 : 2017",
    product:
      "High density polyethylene (HDPE) laminated woven lay flat tube for use in mains and submains of drip irrigation system",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 519,
    sno: 519,
    isNumber: "IS 17355 : 2020",
    product:
      "Propylene Spun bonded non—woven mulch mat for agriculture and horticulture applications",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 520,
    sno: 520,
    isNumber: "IS 17356 : 2020",
    product: "Windshield nets for agriculture and horticulture purpose",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 521,
    sno: 521,
    isNumber: "IS 17357 : 2020",
    product: "Harvest nets for agriculture and horticulture purposes",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 522,
    sno: 522,
    isNumber: "IS 17358 (Part 1) : 2020",
    product:
      "Fencing nets for agriculture and horticulture purposes - made from  extruded polymer mesh",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 523,
    sno: 523,
    isNumber: "IS 17358 (Part 2) : 2020",
    product:
      "Fencing nets for agriculture and horticulture purposes -made from mono filament yarns and combination of tape and mono filament yarns",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 524,
    sno: 524,
    isNumber: "IS 17513 : 2020",
    product: "Plant Support Nets for Agriculture and Horticulture Purposes",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 525,
    sno: 525,
    isNumber: "IS 17728 : 2021",
    product:
      "High Density Polyethylene (HDPE) Laminated Woven Lay Flat Tube and Fittings for use in Rain Irrigation System",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 526,
    sno: 526,
    isNumber: "IS 17729 : 2021",
    product:
      "Flexible Water Storage Tank for Agriculture and Horticulture Purposes",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 527,
    sno: 527,
    isNumber: "IS 17730 (Part 1) : 2021",
    product:
      "Hail Protection Nets for Agriculture and Horticulture Purposes-  Warp Knitted Hail Protection Nets",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 528,
    sno: 528,
    isNumber: "IS 17730 (Part 2) : 2021",
    product:
      "Hail Protection Nets for Agriculture and Horticulture Purposes - Woven Hail Protection Nets",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: 529,
    sno: 529,
    isNumber: "IS 17731 : 2021",
    product: "Laminated Woven Orchard Protection Covers",
    notification: {
      title: "135. Agro Textiles (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Agro-Textiles-QCO-2023.pdf",
      linkText: "S.O. 4248(E), dated 27th September 2023",
    },
  },
  {
    id: "copper-products-section",
    isSectionHeader: true,
    sectionTitle: "Copper Products",
  },
  {
    id: 530,
    sno: 530,
    isNumber: "IS 12444:2020",
    product: "Copper Wire Rods for Electrical Applications",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
      additionalLinks: [
        {
          text: "Copper Products (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/04/Copper-Products-Quality-Control-2024.pdf",
          linkText: "S.O. 1801(E), dated 25th April 2024",
        },
        {
          text: "Copper Product (Quality Control) Amendment Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Copper-Product-Quality-Control-Amendment-Order-2025.pdf",
          linkText: "S.O. 884(E) Dated 19 February, 2025",
        },
      ],
    },
  },
  {
    id: 531,
    sno: 531,
    isNumber: "IS 613:2000",
    product: "Copper Rods and Bars for Electrical Purposes",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 532,
    sno: 532,
    isNumber: "IS 1897:2008",
    product: "Copper strip for electrical purposes",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 533,
    sno: 533,
    isNumber: "IS 4171:1983",
    product: "Copper rods and bars for general engineering purposes",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 534,
    sno: 534,
    isNumber: "IS 1545: 1994",
    product:
      "Solid drawn copper and copper alloy tubes for condensers and heat exchangers",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 535,
    sno: 535,
    isNumber: "IS 2501: 1995",
    product: "Solid drawn copper tubes for general engineering purposes",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 536,
    sno: 536,
    isNumber: "IS 14810: 2000",
    product: "Copper Tubes for plumbing- Specification",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 537,
    sno: 537,
    isNumber: "IS 10773:1995",
    product:
      "Wrought Copper Tubes for Refrigeration and Air- Conditioning Purpose",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: 538,
    sno: 538,
    isNumber: "IS 4412:1981",
    product: "Copper wires for general engineering purposes",
    notification: {
      title: "136. Copper Products (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Copper-Products-QCO-2023.pdf",
      linkText: "S.O. 4595(E), dated 17th October 2023",
    },
  },
  {
    id: "drums-tins-section",
    isSectionHeader: true,
    sectionTitle: "Drums and Tins",
  },
  {
    id: 539,
    sno: 539,
    isNumber: "IS 13997:2014",
    product: "Drums, Large Open Top",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 540,
    sno: 540,
    isNumber: "IS 1783 (Part 1) :2014",
    product: "Drums Large, Fixed Ends - Grade A",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 541,
    sno: 541,
    isNumber: "IS 1783 (Part 2) :2014",
    product: "Drums, Large, Fixed Ends - Grade",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 542,
    sno: 542,
    isNumber: "IS 2552:1989",
    product: "Steel Drums (Galvanized and Ungalvanized)",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 543,
    sno: 543,
    isNumber: "IS 3575:1993",
    product: "Bitumen Drums",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 544,
    sno: 544,
    isNumber: "IS 916:2000",
    product: "Square Tins for Solid Products",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: 545,
    sno: 545,
    isNumber: "IS 10325:2000",
    product:
      "Square Tins - 15 Kilograms or litre for Ghee, Vanaspati, Edible Oils and Bakery",
    notification: {
      title: "137. Drums and Tins (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Drums-Tins-QCO-2023.pdf",
      linkText: "S.O. 4596(E), dated 17th October 2023",
    },
  },
  {
    id: "door-fittings-section",
    isSectionHeader: true,
    sectionTitle: "Door Fittings",
  },
  {
    id: 546,
    sno: 546,
    isNumber: "IS 6343:1982",
    product:
      "Door closers (pneumatically regulated) for light doors weighing up to 40 kg",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 547,
    sno: 547,
    isNumber: "IS 14912:2001",
    product: "Door closers, concealed type (hydraulically regulated)",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 548,
    sno: 548,
    isNumber: "IS 3564:1995",
    product: "Hydraulically Regulated Door Closers",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 549,
    sno: 549,
    isNumber: "IS 6315:1992",
    product: "Floor springs (hydraulically regulated) for heavy doors",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 550,
    sno: 550,
    isNumber: "IS 1019:1974",
    product: "Rim Latches",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 551,
    sno: 551,
    isNumber: "IS 208:2020",
    product: "Door Handles",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: 552,
    sno: 552,
    isNumber: "IS 4992:1975",
    product: "Door handles for mortice lock (vertical type)",
    notification: {
      title: "138. Door Fittings (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Door-Fittings-QCO-2023.pdf",
      linkText: "S.O. 4646(E), dated 23rd  October 2023",
    },
  },
  {
    id: "bottled-water-dispenser-section",
    isSectionHeader: true,
    sectionTitle: "Bottled Water Dispenser",
  },
  {
    id: 553,
    sno: 553,
    isNumber: "IS 17681:2022",
    product: "Bottled water dispensers",
    notification: {
      title: "139. Bottled Water Dispenser (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Bottled-Water-Dispenser-QCO-2023.pdf",
      linkText: "S.O. 4647(E), dated 23rd  October 2023",
      additionalLinks: [
        {
          text: "Bottled Water Dispensers (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Bottled-Water-Dispensers-Quality-ControlOrder2024.pdf",
          linkText: "S.O. 2173(E), dated 03rd  June 2024",
        },
      ],
    },
  },
  {
    id: "helmet-police-civil-defence-section",
    isSectionHeader: true,
    sectionTitle:
      "Helmet for Police Force, Civil Defence and Personal Protection",
  },
  {
    id: 554,
    sno: 554,
    isNumber: "IS 2745:1983",
    product: "Non-metal helmet for firemen and civil defence personnel",
    notification: {
      title:
        "140. Helmet for Police Force, Civil Defence and Personal Protection (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Helmet-for-Police-Force-Civil-Defence-Personal-Protection-QCO-2023.pdf",
      linkText: "S.O. 4649(E), dated 23rd  October 2023",
    },
  },
  {
    id: 555,
    sno: 555,
    isNumber: "IS 2925:1984",
    product: "Industrial safety helmets",
    notification: {
      title:
        "140. Helmet for Police Force, Civil Defence and Personal Protection (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Helmet-for-Police-Force-Civil-Defence-Personal-Protection-QCO-2023.pdf",
      linkText: "S.O. 4649(E), dated 23rd  October 2023",
    },
  },
  {
    id: 556,
    sno: 556,
    isNumber: "IS 9562:1980",
    product: "Non- metal helmet for Police Force",
    notification: {
      title:
        "140. Helmet for Police Force, Civil Defence and Personal Protection (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/10/Helmet-for-Police-Force-Civil-Defence-Personal-Protection-QCO-2023.pdf",
      linkText: "S.O. 4649(E), dated 23rd  October 2023",
    },
  },
  {
    id: "steel-wires-strands-section",
    isSectionHeader: true,
    sectionTitle: "Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh",
  },
  {
    id: 557,
    sno: 557,
    isNumber: "IS 2266 : 2019",
    product: "Steel Wire Ropes for General Engineering Purposes",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
      additionalLinks: [
        {
          text: "Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-and-wire-mesh-QCO-2024.pdf",
          linkText: "S.O. 2581(E), dated 03rd  July 2024",
        },
      ],
    },
  },
  {
    id: 558,
    sno: 558,
    isNumber: "IS 2365 : 2018",
    product: "Steel Wire Suspension Ropes for Lifts, Elevators and Hoists",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 559,
    sno: 559,
    isNumber: "IS 1855:2022",
    product:
      "Stranded steel wire ropes for winding and man –riding haulages in mines",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 560,
    sno: 560,
    isNumber: "IS 1856:2005",
    product: "Steel Wire Rope forhaulage",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 561,
    sno: 561,
    isNumber: "IS 2141:20005",
    product: "Hot Dip Galvanized Stay Strand",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 562,
    sno: 562,
    isNumber: "IS 4521:2001",
    product: "Wire Ropes Used in Oil Wells and Oil Well Drilling",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 563,
    sno: 563,
    isNumber: "IS 6590:1972",
    product: "Braided Nylon Ropes for Mountaineering Purposes",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 564,
    sno: 564,
    isNumber: "IS 278:2009",
    product: "Galvanized Steel Barbed Wire for Fencing",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: 565,
    sno: 565,
    isNumber: "IS 16014:2018",
    product:
      "Mechanically Woven, Double- Twisted, Hexagonal Wire Mesh Gabions, Revet Mattresses and Rock Fall Netting and Other Rock Fall Netting and Other Products for Civil Engineering Purposes (Galvanized Steel Wire or Galvanized Steel Wire with polymer coating)",
    notification: {
      title:
        "141. Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Steel-Wires-or-Strands-Nylon-or-Wire-Ropes-QCO-2023.pdf",
      linkText: "S.O. 5022(E), dated 21st November 2023",
    },
  },
  {
    id: "material-measure-length-section",
    isSectionHeader: true,
    sectionTitle: "Material Measure of length",
  },
  {
    id: 566,
    sno: 566,
    isNumber: "IS 1269(Part 1) : 1997",
    product:
      "Legal Metrology - Material Measure of length - Woven metallic and glass fibre tape measures",
    notification: {
      title:
        "142. Legal Metrology - Material Measures of Length (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Legal-Metrology-Material-Measures-of-Length-QCO-2023.pdf",
      linkText: "S.O. 5029(E), dated 21st November 2023",
    },
  },
  {
    id: 567,
    sno: 567,
    isNumber: "IS 1269(Part 2) : 1997",
    product:
      "Legal Metrology - Material Measure of length - Steel tape measures",
    notification: {
      title:
        "142. Legal Metrology - Material Measures of Length (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/11/Legal-Metrology-Material-Measures-of-Length-QCO-2023.pdf",
      linkText: "S.O. 5029(E), dated 21st November 2023",
    },
  },
  {
    id: "polyethylene-woven-sacks-section",
    isSectionHeader: true,
    sectionTitle: "Polyethylene Woven Sacks",
  },
  {
    id: 568,
    sno: 568,
    isNumber: "IS 9755 : 2021",
    product:
      "Textiles—High Density Polyethylene (HDPE) /Polypropylene (PP) Woven Sacks for Packaging Fertilizers",
    notification: {
      title:
        "143. Textiles—High Density Polyethylene (HDPE) /Polypropylene (PP) Woven Sacks for Packaging Fertilizers (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Polyethylene-woven-Sacks-QCO.pdf",
      linkText: "S.O. 5177(E), dated 06th December 2023",
      additionalLinks: [
        {
          text: "Textiles—High Density Polyethylene (HDPE) /Polypropylene (PP) Woven Sacks for Packaging Fertilizers (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Textiles—High-Density-Polyethylene-HDPEPolypropylenePP-Woven-sacks-Amendment-Order2024.pdf",
          linkText: "S.O. 2180(E), dated 04th  June 2024",
        },
      ],
    },
  },
  {
    id: 569,
    sno: 569,
    isNumber: "IS 11652 : 2017",
    product:
      "Textiles — High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for Packaging of 50 kg Cement",
    notification: {
      title:
        "144. Textiles—High Density Polyethylene (HDPE) /Polypropylene (PP) Woven Sacks for Packaging of 50 kg Cement (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Polyethylene-woven-Sacks-QCO.pdf",
      linkText: "S.O. 5178(E), dated 06th December 2023",
      additionalLinks: [
        {
          text: "Textiles — High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for Packaging of 50 kg Cement (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Textiles—High-Density-Polyethylene-HDPEPolypropylenePP-Woven-sacks-Amendment-Order2024.pdf",
          linkText: "S.O. 2181(E), dated 04th  June 2024",
        },
        {
          text: "Textiles — High Density Polyethylene (HDPE) /Polypropylene (PP) Woven Sacks for Packaging of 50 kg Cement (Quality Control) Second Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Textiles-Woven-sacks-QCO.pdf",
          linkText: "S.O. 3938(E), dated 13th  September 2024",
        },
        {
          text: "Textiles — High Density Polyethylene (HDPE)/ Polypropylene (PP) Woven Sacks for Packaging of 50 kg Cement (Quality Control) Third Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/3-different-types-of-Woven-sacks-QCO-2024.pdf",
          linkText: "S.O. 5261(E), dated 06th  December 2024",
        },
      ],
    },
  },
  {
    id: 570,
    sno: 570,
    isNumber: "IS 16709 : 2017",
    product:
      "Textiles — Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement",
    notification: {
      title:
        "145. Textiles—Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Polyethylene-woven-Sacks-QCO.pdf",
      linkText: "S.O. 5179(E), dated 06th December 2023",
      additionalLinks: [
        {
          text: "Textiles — Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Textiles—High-Density-Polyethylene-HDPEPolypropylenePP-Woven-sacks-Amendment-Order2024.pdf",
          linkText: "S.O. 2182(E), dated 04th  June 2024",
        },
        {
          text: "Textiles — Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement (Quality Control) Second Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Textiles-Woven-sacks-QCO.pdf",
          linkText: "S.O. 3939(E), dated 13th  September 2024",
        },
        {
          text: "Textiles — Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement (Quality Control) Third Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/3-different-types-of-Woven-sacks-QCO-2024.pdf",
          linkText: "S.O. 5262(E), dated 06th  December 2024",
        },
      ],
    },
  },
  {
    id: 571,
    sno: 571,
    isNumber: "IS 16703 : 2017",
    product:
      "Textiles — High Density Polyethylene (HDPE) Polypropylene (PP) Woven Sacks for Packaging of 25 kg Polymer Materials",
    notification: {
      title:
        "146. Textiles— High Density Polyethylene (HDPE) Polypropylene (PP) Woven Sacks for Packaging of 25 kg  Polymer Materials (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Polyethylene-woven-Sacks-QCO.pdf",
      linkText: "S.O. 5180(E), dated 06th December 2023",
    },
  },
  {
    id: 572,
    sno: 572,
    isNumber: "IS 17399 : 2020",
    product:
      "Textiles — Polypropylene (PP)/ High Density Polyethylene (HDPE) Laminated Woven Sacks for Mail Sorting, Storage, Transport and Distribution",
    notification: {
      title:
        "147. Textiles— Polypropylene (PP)/High Density Polyethylene (HDPE) Laminated Woven Sacks  for Mail Sorting, Storage, Transport and Distribution (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Polyethylene-woven-Sacks-QCO.pdf",
      linkText: "S.O. 5181(E), dated 06th December 2023",
      additionalLinks: [
        {
          text: "Textiles — Polypropylene (PP)/High Density Polyethylene (HDPE) Laminated Woven Sacks for Mail Sorting, Storage, Transport and Distribution (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/06/Textiles—High-Density-Polyethylene-HDPEPolypropylenePP-Woven-sacks-Amendment-Order2024.pdf",
          linkText: "S.O. 2183(E), dated 04th  June 2024",
        },
        {
          text: "Textiles — Polypropylene (PP)/ High Density Polyethylene (HDPE) Laminated Woven Sacks for Mail Sorting, Storage, Transport and Distribution (Quality Control) Second Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Textiles-Woven-sacks-QCO.pdf",
          linkText: "S.O. 3940(E), dated 13th  September 2024",
        },
        {
          text: "Textiles — Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement (Quality Control) Third Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/3-different-types-of-Woven-sacks-QCO-2024.pdf",
          linkText: "S.O. 5263(E), dated 06th  December 2024",
        },
      ],
    },
  },
  {
    id: "safes-deposit-lockers-section",
    isSectionHeader: true,
    sectionTitle: "Safes, Safe Deposit Locker Cabinets and key locks",
  },
  {
    id: 573,
    sno: 573,
    isNumber: "IS 550 (Part 1) : 2014",
    product: "Safes",
    notification: {
      title:
        "148. Safes, Safe Deposit Locker Cabinets and key locks (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Safes-Safe-Deposit-locker-cabinets-and-key-locks-QCO.pdf",
      linkText: "S.O. 5293(E), dated 08th December 2023",
    },
  },
  {
    id: 574,
    sno: 574,
    isNumber: "IS 5244 : 2020",
    product: "Safe deposit locker cabinets",
    notification: {
      title:
        "148. Safes, Safe Deposit Locker Cabinets and key locks (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Safes-Safe-Deposit-locker-cabinets-and-key-locks-QCO.pdf",
      linkText: "S.O. 5293(E), dated 08th December 2023",
    },
  },
  {
    id: 575,
    sno: 575,
    isNumber: "IS 17566 : 2021",
    product: "Key locks for security equipment",
    notification: {
      title:
        "148. Safes, Safe Deposit Locker Cabinets and key locks (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Safes-Safe-Deposit-locker-cabinets-and-key-locks-QCO.pdf",
      linkText: "S.O. 5293(E), dated 08th December 2023",
    },
  },
  {
    id: "hinges-section",
    isSectionHeader: true,
    sectionTitle: "Hinges",
  },
  {
    id: 576,
    sno: 576,
    isNumber: "IS 12817:2020",
    product: "Stainless steel butt hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 577,
    sno: 577,
    isNumber: "IS 1341:2018",
    product: "Steel Butt Hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 578,
    sno: 578,
    isNumber: "IS 205:1992",
    product: "Non-ferrous metal butt hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 579,
    sno: 579,
    isNumber: "IS 206:2010",
    product: "Tee and strap hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 580,
    sno: 580,
    isNumber: "IS 362:1991",
    product: "Parliament hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 581,
    sno: 581,
    isNumber: "IS 3818:1992",
    product: "Continuous (Piano) hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 582,
    sno: 582,
    isNumber: "IS 3843:1995",
    product: "Steel back flap hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 583,
    sno: 583,
    isNumber: "IS 453:1993",
    product: "Double-acting spring hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: 584,
    sno: 584,
    isNumber: "IS 18297:2023",
    product: "Cabinet hinges",
    notification: {
      title: "149. Hinges (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Hinges-QCO.pdf",
      linkText: "S.O. 5294(E), dated 08th December 2023",
      additionalLinks: [
        {
          text: "Hinges (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/07/Hinges-QCO.pdf-26-July.pdf",
          linkText: " S.O. 2982(E), dated 26th  July 2024",
        },
      ],
    },
  },
  {
    id: "cycle-rickshaw-tyres-section",
    isSectionHeader: true,
    sectionTitle: "Cycle and Rickshaw Tyres and Tubes",
  },
  {
    id: 585,
    sno: 585,
    isNumber: "IS 2414:2005",
    product: "Cycle and Rickshaw Pneumatic Tyres",
    notification: {
      title:
        "150. Cycle and Rickshaw Tyres and Tubes (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Cycle-and-Rickshaw-tyres-and-Tubes.pdf",
      linkText: "S.O. 5323(E), dated 11th December 2023",
    },
  },
  {
    id: 586,
    sno: 586,
    isNumber: "IS 2415 :2015",
    product: "Cycle - Rubber Tubes (Moulded or Jointed)",
    notification: {
      title:
        "150. Cycle and Rickshaw Tyres and Tubes (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Cycle-and-Rickshaw-tyres-and-Tubes.pdf",
      linkText: "S.O. 5323(E), dated 11th December 2023",
    },
  },
  {
    id: "rubber-gaskets-pressure-cookers-section",
    isSectionHeader: true,
    sectionTitle: "Rubber Gaskets for Pressure Cookers",
  },
  {
    id: 587,
    sno: 587,
    isNumber: "IS 7466 :1994",
    product: "Rubber Gaskets for Pressure Cookers",
    notification: {
      title:
        "151. Rubber Gaskets for Pressure Cookers (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2023/12/Rubber-Gaskets-for-Pressure-Cookers.pdf",
      linkText: "S.O. 5371(E), dated 14th December 2023",
    },
  },
  {
    id: "laboratory-glassware-section",
    isSectionHeader: true,
    sectionTitle: "Laboratory Glassware",
  },
  {
    id: 588,
    sno: 588,
    isNumber: "IS 878 :2008",
    product: "Laboratory glassware – Graduated measuring cylinders",
    notification: {
      title: "152. Laboratory Glassware (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Laboratory-Glassware.pdf",
      linkText: "S.O. 44(E), dated 1st January 2024",
      additionalLinks: [
        {
          text: "Laboratory Glassware (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Laboratory-Glassware-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 5358(E), dated 11th  December 2024",
        },
      ],
    },
  },
  {
    id: 589,
    sno: 589,
    isNumber: "IS 915:2012",
    product: "Laboratory glassware – One – Mark volumetric flasks",
    notification: {
      title: "152. Laboratory Glassware (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Laboratory-Glassware.pdf",
      linkText: "S.O. 44(E), dated 1st January 2024",
      additionalLinks: [
        {
          text: "Laboratory Glassware (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Laboratory-Glassware-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 5358(E), dated 11th  December 2024",
        },
      ],
    },
  },
  {
    id: 590,
    sno: 590,
    isNumber: "IS 1381 (Part 1):2003",
    product: "Laboratory glassware – Narrow-necked boiling flasks",
    notification: {
      title: "152. Laboratory Glassware (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Laboratory-Glassware.pdf",
      linkText: "S.O. 44(E), dated 1st January 2024",
      additionalLinks: [
        {
          text: "Laboratory Glassware (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Laboratory-Glassware-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 5358(E), dated 11th  December 2024",
        },
      ],
    },
  },
  {
    id: 591,
    sno: 591,
    isNumber: "IS 1117:2018",
    product: "Laboratory glassware – Single volume pipettes",
    notification: {
      title: "152. Laboratory Glassware (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Laboratory-Glassware.pdf",
      linkText: "S.O. 44(E), dated 1st January 2024",
      additionalLinks: [
        {
          text: "Laboratory Glassware (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Laboratory-Glassware-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 5358(E), dated 11th  December 2024",
        },
      ],
    },
  },
  {
    id: 592,
    sno: 592,
    isNumber: "IS 2619:2018",
    product: "Glass beakers",
    notification: {
      title: "152. Laboratory Glassware (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Laboratory-Glassware.pdf",
      linkText: "S.O. 44(E), dated 1st January 2024",
      additionalLinks: [
        {
          text: "Laboratory Glassware (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Laboratory-Glassware-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 5358(E), dated 11th  December 2024",
        },
      ],
    },
  },
  {
    id: "electrical-accessories-section",
    isSectionHeader: true,
    sectionTitle: "Electrical Accessories",
  },
  {
    id: 593,
    sno: 593,
    isNumber: "IS 14772: 2020",
    product:
      "Boxes and Enclosures for Electrical Accessories for Household and Similar Fixed Electrical Installations",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 594,
    sno: 594,
    isNumber: "IS 14927 (Part 2): 2001",
    product:
      "Cable Trunking and Ducting Systems for Electrical Installations - Cable Trunking and Ducting Systems Intended for Mounting on Walls or Ceiling",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 595,
    sno: 595,
    isNumber: "IS 1258: 2005",
    product: "Bayonet Lamp Holders",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 596,
    sno: 596,
    isNumber: "IS 15787: 2008",
    product: "Switch-socket-outlets (non-interlock type)",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 597,
    sno: 597,
    isNumber: "IS 13774:2021",
    product: "Live Working Gloves of Insulating Material",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 598,
    sno: 598,
    isNumber: "IS 15652:2006",
    product: "Insulating Mats for Electrical Purposes",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 599,
    sno: 599,
    isNumber: "IS 7809 (Part3/ Sec1): 1986",
    product:
      "Specification for Pressure sensitive adhesive insulating tapes for electrical purposes- Part 3 requirements or individual materials – Sec 1 plasticized polyvinylchloride tapes with non- Thermosetting adhesive",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: 600,
    sno: 600,
    isNumber: "IS 16012: 2012",
    product: "Poly- Laminated aluminium cable wrap",
    notification: {
      title: "153. Electrical Accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/01/Electrical-Accessories1.pdf",
      linkText: "S.O. 43(E), dated 1st January 2024",
    },
  },
  {
    id: "pvc-homopolymers-section",
    isSectionHeader: true,
    sectionTitle: "Poly Vinyl Chloride (PVC) Homopolymers",
  },
  {
    id: 601,
    sno: 601,
    isNumber: "IS 17658:2021",
    product: "Poly Vinyl Chloride (PVC) Homopolymers",
    notification: {
      title:
        "154. Poly Vinyl Chloride (PVC) Homopolymers (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/PVC-Homopolymers-PP-Materials-for-Moulding-and-Extrusion-and-Diesel-Engine-NOx-Reduction-agent-AUS-32-QCO.pdf",
      linkText: "S.O. 920(E), dated 26th  February 2024",
      additionalLinks: [
        {
          text: "Poly Vinyl Chloride (PVC) Homopolymers (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/08/Poly-Vinyl-Chloride-PVC-Homopolymers-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 3595(E), dated 23rd  August 2024",
        },
        {
          text: "Poly Vinyl Chloride (PVC) Homopolymers (Quality Control) Order Third Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Poly-Vinyl-Chloride-PVC-Homopolymers-QCO-2024.pdf",
          linkText: "S.O. 5552(E), dated 24th   December 2024",
        },
      ],
    },
  },
  {
    id: "polypropylene-materials-section",
    isSectionHeader: true,
    sectionTitle: "Polypropylene (PP) Materials for Moulding and Extrusion",
  },
  {
    id: 602,
    sno: 602,
    isNumber: "IS 10951: 2020",
    product: "Polypropylene (PP) Materials for Moulding and Extrusion",
    notification: {
      title:
        "155. Polypropylene (PP) Materials for Moulding and Extrusion (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/PVC-Homopolymers-PP-Materials-for-Moulding-and-Extrusion-and-Diesel-Engine-NOx-Reduction-agent-AUS-32-QCO.pdf",
      linkText: "S.O. 921(E), dated 26th  February 2024",
      additionalLinks: [
        {
          text: "Polypropylene (PP) Materials for Moulding and Extrusion (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/08/Polypropylene-PP-Materials-for-moulding-and-extrusion-Quality-Control-Amendment-Order-2024.pdf",
          linkText: "S.O. 3594(E), dated 23rd  August 2024",
        },
        {
          text: "Polypropylene (PP) Materials for Mouldingand Extrusion (Quality Control) Order Third Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/12/Polypropylene-PP-Materials-for-Moulding-and-Extrusion-QCO-2024.pdf",
          linkText: " S.O. 5553(E), dated 24th   December 2024 ",
        },
      ],
    },
  },
  {
    id: "diesel-engines-nox-section",
    isSectionHeader: true,
    sectionTitle: "Diesel Engines – NOx Reduction Agent AUS 32",
  },
  {
    id: 603,
    sno: 603,
    isNumber: "IS 17042 (Part-1): 2018",
    product: "Diesel Engines – NOx Reduction Agent AUS 32",
    notification: {
      title:
        "156. Diesel Engines – NOx Reduction Agent AUS 32 (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/PVC-Homopolymers-PP-Materials-for-Moulding-and-Extrusion-and-Diesel-Engine-NOx-Reduction-agent-AUS-32-QCO.pdf",
      linkText: "S.O. 922(E), dated 26th  February 2024",
    },
  },
  {
    id: "air-cooler-air-filters-section",
    isSectionHeader: true,
    sectionTitle: "Air Cooler and Air Filters",
  },
  {
    id: 604,
    sno: 604,
    isNumber: "IS 3315:2019",
    product: "Evaporative Air Coolers (Desert Coolers)",
    notification: {
      title: "157. Air Cooler and Air Filters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Air-Cooler-and-Air-Filters-Quality-Control-2023.pdf",
      linkText: "S.O. 1114(E), dated 05th  March 2024",
      additionalLinks: [
        {
          text: "Air Cooler and Air Filters (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Air-Cooler-and-Air-Filters-Quality-Control-2025.pdf",
          linkText: "S.O. 529(E), dated 30th January 2025",
        },
      ],
    },
  },
  {
    id: 605,
    sno: 605,
    isNumber: "IS 17570 (Part 1): 2021 ISO 16890-2: 2016",
    product:
      "Air Filters for general ventilation - Technical specifications requirements and classification system based upon particulate matter efficiency (ePM)",
    notification: {
      title: "157. Air Cooler and Air Filters (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Air-Cooler-and-Air-Filters-Quality-Control-2023.pdf",
      linkText: "S.O. 1114(E), dated 05th  March 2024",
      additionalLinks: [
        {
          text: "Air Cooler and Air Filters (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Air-Cooler-and-Air-Filters-Quality-Control-2025.pdf",
          linkText: "S.O. 529(E), dated 30th January 2025",
        },
      ],
    },
  },
  {
    id: "electrical-appliances-section",
    isSectionHeader: true,
    sectionTitle: "Electrical Appliances",
  },
  {
    id: 606,
    sno: 606,
    isNumber: "IS 302 (Part 2/Sec 9): 2009",
    product:
      "Safety of household and similar electrical appliances - particular requirements - toasters, grills, roasters and similar appliances",
    notification: {
      title:
        "158. Electrical Appliances for Kitchen (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-Kitchen-QCO-2023.pdf",
      linkText: "S.O. 1128(E), dated 05th  March 2024",
    },
  },
  {
    id: 607,
    sno: 607,
    isNumber: "IS 302 (Part 2/Sec 31): 2009",
    product:
      "Safety of household and similar electrical appliances - particular requirements - range hoods",
    notification: {
      title:
        "158. Electrical Appliances for Kitchen (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-Kitchen-QCO-2023.pdf",
      linkText: "S.O. 1128(E), dated 05th  March 2024",
    },
  },
  {
    id: 608,
    sno: 608,
    isNumber: "IS 302 (Part 2/Sec 23): 2009",
    product:
      "Safety of household and similar electrical appliances - particular requirements - appliances for skin or hair care",
    notification: {
      title:
        "159. Electrical Appliances for Skin or Hair care (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-Skin-or-Hair-care-QCO-2023.pdf",
      linkText: "S.O. 1125(E), dated 05th  March 2024",
    },
  },
  {
    id: 609,
    sno: 609,
    isNumber: "IS 302 (Part 2/ Sec 80): 2017",
    product:
      "Household and similar electrical appliances - Safety - particular requirements for fans",
    notification: {
      title: "160. Electrical appliance fans (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-appliance-fans-QCO-2023.pdf",
      linkText: "S.O. 1124(E), dated 05th  March 2024 ",
    },
  },
  {
    id: 610,
    sno: 610,
    isNumber: "IS 302 (Part 2/Sec 75): 2018",
    product:
      "Safety of Household and Similar Electrical Appliances - Particular Requirements - Commercial Dispensing Appliances and Vending Machines",
    notification: {
      title:
        "161. Electrical appliance for commercial dispensing and vending (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-appliance-for-commercial-dispensing-and-vending-QCO-2023.pdf",
      linkText: "S.O. 1127(E), dated 05th  March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for Commercial Dispensing and Vending (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Electrical-Appliances-for-Commercial-Dispensing-and-Vending-QCO-2024.pdf",
          linkText: "S.O. 4568(E), dated 18th  October 2024",
        },
      ],
    },
  },
  {
    id: 611,
    sno: 611,
    isNumber: "IS 302 (Part 2/Sec 7): 2010",
    product:
      "Safety of household and similar electrical appliances - particular requirements - domestic electric clothes washing machines",
    notification: {
      title:
        "162. Electrical appliance for domestic clothes washing (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-appliance-for-domestic-clothes-washing-QCO-2023.pdf",
      linkText: "S.O. 1126(E), dated 05th  March 2024",
      additionalLinks: [
        {
          text: "Electrical appliances for domestic clothes washing (Quality Control) Order 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Electrical-appliance-for-domestic-clothes-washing-QCO-2024.pdf",
          linkText: "S.O. 4815(E), dated 05th  November 2024",
        },
      ],
    },
  },
  {
    id: "asbestos-fibre-cement-section",
    isSectionHeader: true,
    sectionTitle: "Asbestos or Fibre Cement based Products",
  },
  {
    id: 612,
    sno: 612,
    isNumber: "IS 459:1992",
    product: "Corrugated and Semi - Corrugated Asbestos Cement Sheets",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 613,
    sno: 613,
    isNumber: "IS 1592:2003",
    product: "Asbestos Cement Pressure Pipes and Joints",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 614,
    sno: 614,
    isNumber: "IS 2096:1992",
    product: "Asbestos Cement Flat Sheets",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 615,
    sno: 615,
    isNumber: "IS 2098:1997",
    product: "Asbestos Cement Building Boards",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 616,
    sno: 616,
    isNumber: "IS 6908:1991",
    product: "Asbestos - Cement Pipes and Fittings for Sewerage and Drainage",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 617,
    sno: 617,
    isNumber: "IS 13000:1990",
    product: "Silica-Asbestos-Cement Flat Sheets",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 618,
    sno: 618,
    isNumber: "IS 8870:1978",
    product: "Asbestos Cement Cable Conduits and Troughs",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 619,
    sno: 619,
    isNumber: "IS 9627:1980",
    product: "Asbestos Cement Pressure Pipes (Light Duty)",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 620,
    sno: 620,
    isNumber: "IS 13008:1990",
    product: "Shallow Corrugated Asbestos Cement Sheets",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 621,
    sno: 621,
    isNumber: "IS 14862:2000",
    product: "Fibre Cement Flat Sheets",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: 622,
    sno: 622,
    isNumber: "IS 14871:2000",
    product:
      "Fibre Reinforced Cement Products – Long Corrugated or Asymmetrical Section Sheets and Fittings for Roofing and Cladding",
    notification: {
      title:
        "163. Asbestos or Fibre Cement based Products (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Asbestos-or-Fibre-Cement-based-products-QCO-2024.pdf",
      linkText: "S.O. 1152(E), dated 06th  March 2024",
    },
  },
  {
    id: "water-meters-accessories-section",
    isSectionHeader: true,
    sectionTitle: "Water meters and accessories",
  },
  {
    id: 623,
    sno: 623,
    isNumber: "IS 2373:1981",
    product: "Water meters (bulk type)",
    notification: {
      title: "164. Water meters and accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Water-meters-and-accessories-QCO-2023.pdf",
      linkText: "S.O. 1142(E), dated 05th  March 2024",
    },
  },
  {
    id: 624,
    sno: 624,
    isNumber: "IS 779: 1994",
    product: "Water meters (domestic type)",
    notification: {
      title: "164. Water meters and accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Water-meters-and-accessories-QCO-2023.pdf",
      linkText: "S.O. 1142(E), dated 05th  March 2024",
    },
  },
  {
    id: 625,
    sno: 625,
    isNumber: "IS 2692: 1989",
    product: "Ferrules for water services",
    notification: {
      title: "164. Water meters and accessories (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Water-meters-and-accessories-QCO-2023.pdf",
      linkText: "S.O. 1142(E), dated 05th  March 2024",
    },
  },
  {
    id: "gypsum-building-materials-section",
    isSectionHeader: true,
    sectionTitle: "Gypsum based Building Materials",
  },
  {
    id: 626,
    sno: 626,
    isNumber: "IS 2095 (Part 1):2011",
    product:
      "Gypsum plaster boards - Specification: Part 1 plain gypsum plaster boards",
    notification: {
      title:
        "165. Gypsum based Building Materials (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Gypsum-based-Building-Materials-QCO-2024.pdf",
      linkText: "S.O. 1153(E), dated 06th  March 2024",
      additionalLinks: [
        {
          text: "Corrigendum of Gypsum based Building Materials (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Corrigendum-of-Gypsum-based-Building-Materials-Quality-Control-Order-2024.pdf",
          linkText: "S.O. 2007(E), dated 14th  May 2024",
        },
        {
          text: "Gypsum based Building Materials (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Gypsum-based-Building-Materials-Amendment-QCO-2024.pdf",
          linkText: "S.O. 5058(E), dated 25th November 2024",
        },
      ],
    },
  },
  {
    id: 627,
    sno: 627,
    isNumber: "IS 17400:2021",
    product: "Glass Fibre Reinforced Gypsum Panels",
    notification: {
      title:
        "165. Gypsum based Building Materials (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Gypsum-based-Building-Materials-QCO-2024.pdf",
      linkText: "S.O. 1153(E), dated 06th  March 2024",
      additionalLinks: [
        {
          text: "Corrigendum of Gypsum based Building Materials (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Corrigendum-of-Gypsum-based-Building-Materials-Quality-Control-Order-2024.pdf",
          linkText: "S.O. 2007(E), dated 14th  May 2024",
        },
        {
          text: "Gypsum based Building Materials (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Gypsum-based-Building-Materials-Amendment-QCO-2024.pdf",
          linkText: "S.O. 5058(E), dated 25th November 2024",
        },
      ],
    },
  },
  {
    id: 628,
    sno: 628,
    isNumber: "IS 2095 (Part 2): 2022",
    product: "Gypsum Plaster Boards - Coated/ Laminated Gypsum Plaster Boards",
    notification: {
      title:
        "165. Gypsum based Building Materials (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Gypsum-based-Building-Materials-QCO-2024.pdf",
      linkText: "S.O. 1153(E), dated 06th  March 2024",
      additionalLinks: [
        {
          text: "Corrigendum of Gypsum based Building Materials (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Corrigendum-of-Gypsum-based-Building-Materials-Quality-Control-Order-2024.pdf",
          linkText: "S.O. 2007(E), dated 14th  May 2024",
        },
        {
          text: "Gypsum based Building Materials (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Gypsum-based-Building-Materials-Amendment-QCO-2024.pdf",
          linkText: "S.O. 5058(E), dated 25th November 2024",
        },
      ],
    },
  },
  {
    id: 629,
    sno: 629,
    isNumber: "IS 2095 (Part 3):2022",
    product:
      "Gypsum Plaster Boards - Reinforced Gypsum Plaster Boards and Ceiling Tiles",
    notification: {
      title:
        "165. Gypsum based Building Materials (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Gypsum-based-Building-Materials-QCO-2024.pdf",
      linkText: "S.O. 1153(E), dated 06th  March 2024",
      additionalLinks: [
        {
          text: "Corrigendum of Gypsum based Building Materials (Quality Control) Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Corrigendum-of-Gypsum-based-Building-Materials-Quality-Control-Order-2024.pdf",
          linkText: "S.O. 2007(E), dated 14th  May 2024",
        },
        {
          text: "Gypsum based Building Materials (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Gypsum-based-Building-Materials-Amendment-QCO-2024.pdf",
          linkText: "S.O. 5058(E), dated 25th November 2024",
        },
      ],
    },
  },
  {
    id: "electrical-appliances-water-heating-section",
    isSectionHeader: true,
    sectionTitle: "Electrical Appliances for domestic water heating",
  },
  {
    id: 630,
    sno: 630,
    isNumber: "IS 302 (Part 2/Sec 21): 2018",
    product: "Appliances for stationary storage type electric water heaters",
    notification: {
      title:
        "166. Electrical Appliances for domestic water heating (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-domestic-water-heating-Quality-Control-Order-2023.pdf",
      linkText: "S.O. 1253(E), dated 05th March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for domestic water heating (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Electrical-Appliances-for-domestic-water-heating-QCO-2025.pdf",
          linkText: "S.O. 355(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: 631,
    sno: 631,
    isNumber: "IS 302 (Part 2/Sec 35): 2017",
    product: "Appliances for electric instantaneous water heaters",
    notification: {
      title:
        "166. Electrical Appliances for domestic water heating (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-domestic-water-heating-Quality-Control-Order-2023.pdf",
      linkText: "S.O. 1253(E), dated 05th March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for domestic water heating (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Electrical-Appliances-for-domestic-water-heating-QCO-2025.pdf",
          linkText: "S.O. 355(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: 632,
    sno: 632,
    isNumber: "IS 368: 2014",
    product: "Electric Immersion Water Heaters",
    notification: {
      title:
        "166. Electrical Appliances for domestic water heating (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-domestic-water-heating-Quality-Control-Order-2023.pdf",
      linkText: "S.O. 1253(E), dated 05th March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for domestic water heating (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Electrical-Appliances-for-domestic-water-heating-QCO-2025.pdf",
          linkText: "S.O. 355(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: 633,
    sno: 633,
    isNumber: "IS 2082: 2018",
    product: "Stationary storage type electric water heaters",
    notification: {
      title:
        "166. Electrical Appliances for domestic water heating (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-domestic-water-heating-Quality-Control-Order-2023.pdf",
      linkText: "S.O. 1253(E), dated 05th March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for domestic water heating (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Electrical-Appliances-for-domestic-water-heating-QCO-2025.pdf",
          linkText: "S.O. 355(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: 634,
    sno: 634,
    isNumber: "IS 17150: 2019",
    product: "Mini domestic water heater for use with piped natural gas (PNG)s",
    notification: {
      title:
        "166. Electrical Appliances for domestic water heating (Quality Control) Order, 2023",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/Electrical-Appliances-for-domestic-water-heating-Quality-Control-Order-2023.pdf",
      linkText: "S.O. 1253(E), dated 05th March 2024",
      additionalLinks: [
        {
          text: "Electrical Appliances for domestic water heating (Quality Control) Order, 2025",
          link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Electrical-Appliances-for-domestic-water-heating-QCO-2025.pdf",
          linkText: "S.O. 355(E), dated 21st January 2025",
        },
      ],
    },
  },
  {
    id: "v-belt-section",
    isSectionHeader: true,
    sectionTitle: "V-Belt",
  },
  {
    id: 635,
    sno: 635,
    isNumber: "IS 2494 (Part 1): 1994",
    product:
      "V-Belts - Endless V-Belts for Industrial Purposes - General Purpose",
    notification: {
      title: "167. V-Belt (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/V-Belt-Quality-Control-Order-2024.pdf",
      linkText: "S.O. 1252(E), dated 06th March 2024",
      additionalLinks: [
        {
          text: "V-Belt (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/V-Belt-QCO-2024.pdf",
          linkText: "S.O. 4880(E), dated 12 November 2024",
        },
      ],
    },
  },
  {
    id: 636,
    sno: 636,
    isNumber: "IS 2494 (Part 2): 1993",
    product:
      "V-Belts - Endless V-Belts for Industrial Purposes – fire resistant and antistatic V-Belts",
    notification: {
      title: "167. V-Belt (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/V-Belt-Quality-Control-Order-2024.pdf",
      linkText: "S.O. 1252(E), dated 06th March 2024",
      additionalLinks: [
        {
          text: "V-Belt (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/V-Belt-QCO-2024.pdf",
          linkText: "S.O. 4880(E), dated 12 November 2024",
        },
      ],
    },
  },
  {
    id: 637,
    sno: 637,
    isNumber: "IS 14261: 1995",
    product:
      "Transmission Devices – V – Belts endless narrow V-Belts for industrial use",
    notification: {
      title: "167. V-Belt (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/03/V-Belt-Quality-Control-Order-2024.pdf",
      linkText: "S.O. 1252(E), dated 06th March 2024",
      additionalLinks: [
        {
          text: "V-Belt (Quality Control) Amendment Order, 2024",
          link: "https://www.bis.gov.in/wp-content/uploads/2024/11/V-Belt-QCO-2024.pdf",
          linkText: "S.O. 4880(E), dated 12 November 2024",
        },
      ],
    },
  },
  {
    id: "telescopic-ball-bearing-drawer-slide-section",
    isSectionHeader: true,
    sectionTitle: "Telescopic Ball Bearing Drawer Slide",
  },
  {
    id: 638,
    sno: 638,
    isNumber: "IS 17954:2023",
    product: "Telescopic Ball Bearing Drawer Slide",
    notification: {
      title:
        "168. Telescopic Ball Bearing Drawer Slide (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/05/Telescopic-Ball-Bearing-Drawer-Slide-Quality-Control-Order-2024.pdf",
      linkText: "S.O. 1962(E), dated 02nd  May 2024 ",
    },
  },
  {
    id: "cross-recessed-screws-section",
    isSectionHeader: true,
    sectionTitle: "Cross Recessed Screws",
  },
  {
    id: 639,
    sno: 639,
    isNumber: "IS 18471 (Part 1) : 2023/ ISO 15481:1999",
    product:
      "Fasteners - Cross Recessed Drilling Screws with Tapping Screw Thread Part 1 Pan Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 640,
    sno: 640,
    isNumber: "IS 18471 (Part 2) :2023/ ISO 15482:1999",
    product:
      "Fasteners - Cross Recessed Drilling Screws with Tapping Screw Thread Part 2 Countersunk Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 641,
    sno: 641,
    isNumber: "IS 18471 (Part 3) :2023/ ISO 15483:1999",
    product:
      "Fasteners - Cross Recessed Drilling Screws with Tapping Screw Thread Part 3 Raised Countersunk Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 642,
    sno: 642,
    isNumber: "IS 18476 : 2023/ ISO 15480:2019",
    product:
      "Fasteners - Hexagon Washer Head Drilling Screws with Tapping Screw Thread",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 643,
    sno: 643,
    isNumber: "IS 18480 (Part 1) :2023/ ISO 7049 : 2011",
    product: "Cross Recessed Tapping Screws: Part 1 Pan Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 644,
    sno: 644,
    isNumber: "IS 18480 (Part 2) :2023/ ISO 7050 : 2011",
    product: "Cross Recessed Tapping Screws Part 2 Countersunk Flat Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 645,
    sno: 645,
    isNumber: "IS 18480 (Part 3) :2023/ ISO 7051 : 2011",
    product: "Cross Recessed Tapping Screw Part 3 Raised Countersunk Oval Head",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 646,
    sno: 646,
    isNumber: "IS 7483 : 2018/ ISO 7045 : 2011",
    product:
      "Pan Head Screws With Type H or Type Z Cross Recess – Product Grade A",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 647,
    sno: 647,
    isNumber: "IS 7485 (Part 1) : 2018/ ISO 7046 -1 : 2011",
    product:
      "Countersunk Flat Head Screws (Common head Style) With Type H or Type Z Cross Recess - Product Grade A Part 1 Steel Screws of Property Class 4.8",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 648,
    sno: 648,
    isNumber: "7485 (Part 2) : 2018/ISO 7046-2 : 2011",
    product:
      "Countersunk flat head screws (common head style) with type H or Type Z Cross Recess - Product Grade A part 2 Steel Screws of Property Class 8.8, Stainless Steel Screws and Non - Ferrous Metal Screws",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 649,
    sno: 649,
    isNumber: "IS 7486 : 2018/ ISO 7047 : 2011",
    product:
      "Raised countersunk head screws (Common Head Style) with type H or type Z cross recess - Product grade A",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 650,
    sno: 650,
    isNumber: "IS 18507 : 2024",
    product: "Drywall Screws – Specification",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 651,
    sno: 651,
    isNumber: "IS 18508 : 2024",
    product: "Chipboard Screws – Specification",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: 652,
    sno: 652,
    isNumber: "IS 18509 : 2023",
    product: "Cross-recessed Countersunk Head Wood Screws – Specification",
    notification: {
      title: "169. Cross Recessed Screws (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Cross-Recessed-Screws-Quality-Control-Order2024.pdf",
      linkText: "S.O. 4099(E), dated 20th  September 2024",
    },
  },
  {
    id: "safety-household-electrical-appliances-section",
    isSectionHeader: true,
    sectionTitle:
      "Safety of Household, Commercial and Similar Electrical Appliances",
  },
  {
    id: 653,
    sno: 653,
    isNumber: "IS 302 (Part 1) : 2008",
    product:
      "All Electrical Appliances - Vacuum Cleaners and Water Suction Cleaning Appliances, Spin Extractors, Cooking Ranges, Hobs, Ovens and Similar Appliances, Electrical Shavers Hair, Clippers and Similar Appliances, Tumbler Dryers, Warming Plates and Similar Appliances, Frying Pans, Deep Fat Fryers and similar appliances, Appliances for Heating Liquids, Massage Appliances, Electric Forced Convection Ovens, Steam Cookers and Steam-Convection Ovens, Electric Heating Tools, Electric Steam Cookers, Insect Killers, Electric Fence Energizers, Electric Call Bells and Buzzers for Indoor Use, Electric Water Boilers, Electric Coffee Makers, Electric Bean Slicers, Electric Berryjuice Extractors, Electric Can Openers, Electric Centrifugal Juicers, Electric Churn, Electric Citrusfruit Squeezers, Electric Coffee Mills not exceeding 500g hopper capacity, Electric Cream Whippers, Electric Egg Beaters, Electric Food Processors, Electric Grain Grinders not exceeding 3l hopper capacity, Electric Graters, Electric IceCream Machines including those for use in refrigerators and freezers, Electric Knife Sharpeners, Electric Knives, Electric Noodle Makers, Electric Potato Peelers, Electric Shredders, Electric Sieving Machines, Slicing Machines, Electric Hot Plates, Single Walled Baking Ovens, Low Speed Food Grinding Machines, Dishwashers, Floor Treatment Machines and Wet Scrubbing Machines, Food Waste Disposers, Blankets Pads Clothing and Similar Flexible Heating Appliances, Appliances for Skin Exposure to Optical Radiation, Commercial Electric Cooking Ranges Ovens Hobs and Hob Elements, Commercial Electric Doughnut Fryers and Deep Fat Fryers",
    notification: {
      title:
        "170. Safety of Household, Commercial and Similar Electrical Appliances (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/09/Safety-of-Household-Commercial-and-Similar-Electrical-Appliances-QCO-2024.pdf",
      linkText: "S.O. 4098(E), dated 20th  September 2024",
    },
  },
  {
    id: 654,
    sno: 654,
    isNumber: "IS 4508:1992",
    product: "Open Ended Slugging Wrenches (Spanners)",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 655,
    sno: 655,
    isNumber: "IS 4509:1992",
    product: "Ring Slugging Wrenches (Spanners)",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 656,
    sno: 656,
    isNumber: "IS 6149:1984",
    product: "Single-ended Open-jaw Adjustable Wrenches",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 657,
    sno: 657,
    isNumber: "IS 2028:2004",
    product: "Open-Jaw Wrenches (Spanners)",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 658,
    sno: 658,
    isNumber: "IS 2029:1998",
    product: "Ring Wrenches (Spanners)",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 659,
    sno: 659,
    isNumber: "IS 4003 (Part 1): 1978",
    product: "Pipe Wrenches –General Purpose",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 660,
    sno: 660,
    isNumber: "IS 4003 (Part 2): 1986",
    product: "Pipe Wrenches – Heavy Duty",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: 661,
    sno: 661,
    isNumber: "IS 3650:1981",
    product: "Combination Side Cutting Pliers",
    notification: {
      title: "171. Hand Tools (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Hand-Tools-QCO-2024.pdf",
      linkText: "S.O. 4325(E), dated 03rd  October 2024",
    },
  },
  {
    id: "indutech-section",
    isSectionHeader: true,
    sectionTitle: "Indutech",
  },
  {
    id: 662,
    sno: 662,
    isNumber: "IS 15041:2001",
    product:
      "Textiles – Flat woven webbing slings made of man-made fibres for general services",
    notification: {
      title: "172. Indutech (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Indutech-QCO-2024.pdf",
      linkText: "S.O. 4326(E), dated 03rd  October 2024",
    },
  },
  {
    id: "ropes-cordages-section",
    isSectionHeader: true,
    sectionTitle: "Ropes and Cordages",
  },
  {
    id: 663,
    sno: 663,
    isNumber: "IS 1084:2005",
    product: "Textiles — Manila Ropes — Specification",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 664,
    sno: 664,
    isNumber: "IS 11066:2022",
    product: "Fibre Ropes — Polyester — 3-, 4-, 8- and 12- Strand Ropes",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 665,
    sno: 665,
    isNumber: "IS 14928:2001",
    product: "Textiles — Composite Synthetic Fibre Ropes — Specification",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 666,
    sno: 666,
    isNumber: "IS 14929: 2022",
    product: "Mixed Polyolefin Fibre Ropes",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 667,
    sno: 667,
    isNumber: "IS 1804:2004",
    product: "Steel wire ropes – Fibre main cores - Specification",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 668,
    sno: 668,
    isNumber: "IS 4572:2022",
    product: "Fibre Ropes — Polyamide — 3-, 4-, 8- and 12- Strand Ropes",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 669,
    sno: 669,
    isNumber: "IS 5175:2022",
    product:
      "Fibre Ropes — Polypropylene Split Film, Monofilament And Multifilament ( PP2 ) and Polypropylene High-Tenacity Multifilament ( PP3 ) —3-, 4-, 8- and 12- Strand Ropes",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 670,
    sno: 670,
    isNumber: "IS 8674 : 2013",
    product: "Fibre Ropes — Polyethylene —3- And 4-Strand Ropes",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: 671,
    sno: 671,
    isNumber: "IS 17609 : 2021",
    product: "Fibre Ropes Of Polyester / Polyolefin dual Fibres",
    notification: {
      title: "173. Ropes and Cordages (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Ropes-and-Cordages-QCO-2024-1.pdf",
      linkText: "S.O. 4327(E), dated 03rd  October 2024",
    },
  },
  {
    id: "solar-thermal-systems-section",
    isSectionHeader: true,
    sectionTitle: "Solar Thermal Systems, Devices and Components",
  },
  {
    id: 672,
    sno: 672,
    isNumber: "IS 12933 (Part 1): 2003, IS 12933 (Part 2): 2003",
    product: "Solar Flat Plate Collector for Solar Water Heating Systems",
    notification: {
      title:
        "174. Solar Thermal Systems, Devices and Components (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Solar-Thermal-Systems-Devices-and-Components-QCO-2024.pdf",
      linkText: "S.O. 4485(E), dated 14th  October 2024",
    },
  },
  {
    id: 673,
    sno: 673,
    isNumber: "IS 16544: 2016",
    product: "All Glass Evacuated Tubes Solar Water Heating System",
    notification: {
      title:
        "174. Solar Thermal Systems, Devices and Components (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Solar-Thermal-Systems-Devices-and-Components-QCO-2024.pdf",
      linkText: "S.O. 4485(E), dated 14th  October 2024",
    },
  },
  {
    id: 674,
    sno: 674,
    isNumber: "IS 16542: 2016",
    product:
      "Storage Water Tank for All Glass Evacuated Tubes Solar Water Heating Systems",
    notification: {
      title:
        "174. Solar Thermal Systems, Devices and Components (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/10/Solar-Thermal-Systems-Devices-and-Components-QCO-2024.pdf",
      linkText: "S.O. 4485(E), dated 14th  October 2024",
    },
  },
  {
    id: "h-acid-k-acid-vinyl-sulphone-section",
    isSectionHeader: true,
    sectionTitle: "H Acid, K Acid & Vinyl Sulphone",
  },
  {
    id: 675,
    sno: 675,
    isNumber: "IS 8637 : 2020",
    product: "H Acid",
    notification: {
      title: "175. H Acid (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Quality-Control-Order-of-03-Chemicals-viz.-i-H-Acid-ii-K-Acid-iii-Vinyl-Sulphone.pdf",
      linkText: "S.O. 4925(E), dated 14th  November 2024",
    },
  },
  {
    id: 676,
    sno: 676,
    isNumber: "IS 11557: 1986",
    product: "K Acid",
    notification: {
      title: "176. K Acid (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Quality-Control-Order-of-03-Chemicals-viz.-i-H-Acid-ii-K-Acid-iii-Vinyl-Sulphone.pdf",
      linkText: "S.O. 4926(E), dated 14th  November 2024",
    },
  },
  {
    id: 677,
    sno: 677,
    isNumber: "IS 18340 : 2023",
    product: "Vinyl Sulphone",
    notification: {
      title: "177. Vinyl Sulphone (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Quality-Control-Order-of-03-Chemicals-viz.-i-H-Acid-ii-K-Acid-iii-Vinyl-Sulphone.pdf",
      linkText: "S.O. 4927(E), dated 14th  November 2024",
    },
  },
  {
    id: "electric-fence-energizers-section",
    isSectionHeader: true,
    sectionTitle: "Electric Fence Energizers",
  },
  {
    id: 678,
    sno: 678,
    isNumber: "IS 302-2-76:1999",
    product:
      "Safety of Household and similar electrical appliances - Part 2 particular requirement Sec 76 electric fence energizers",
    notification: {
      title: "178. Electric Fence Energizers (Quality Control) Order, 2024",
      link: "https://www.bis.gov.in/wp-content/uploads/2024/11/Electric-Fence-Energizer-QCO-2024.pdf",
      linkText: "S.O. 4958(E), dated 19th  November 2024",
    },
  },
  {
    id: "flashlight-section",
    isSectionHeader: true,
    sectionTitle: "Flashlight",
  },
  {
    id: 679,
    sno: 679,
    isNumber: "IS 2083:2024",
    product: "Flashlight - Specification",
    notification: {
      title: "179. Flashlight (Quality Control) Order, 2025",
      link: "https://www.bis.gov.in/wp-content/uploads/2025/01/Flashlight-Quality-Control-Order-2025.pdf",
      linkText: "S.O. 501(E), dated 28th January 2025",
    },
  },
  {
    id: "stainless-steel-pipes-tubes-section",
    isSectionHeader: true,
    sectionTitle: "Stainless Steel Pipes and Tubes",
  },
  {
    id: 680,
    sno: 680,
    isNumber: "IS 17875: 2022",
    product: "Stainless Steel Seamless pipes and tubes for general service",
    notification: {
      title:
        "180. Stainless Steel Pipes and Tubes (Quality Control) Order, 2025",
      link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Stainless-Steel-Pipes-and-Tubes-QCO-2025.pdf",
      linkText: "S.O. 693(E), dated 11th February 2025",
    },
  },
  {
    id: 681,
    sno: 681,
    isNumber: "IS 17876: 2022",
    product: "Stainless Steel Welded pipes and tubes for general service",
    notification: {
      title:
        "180. Stainless Steel Pipes and Tubes (Quality Control) Order, 2025",
      link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Stainless-Steel-Pipes-and-Tubes-QCO-2025.pdf",
      linkText: "S.O. 693(E), dated 11th February 2025",
    },
  },
  {
    id: "furniture-section",
    isSectionHeader: true,
    sectionTitle: "Furniture",
  },
  {
    id: 682,
    sno: 682,
    isNumber: "IS 17631: 2022",
    product: "Work chairs",
    notification: {
      title: "181. Furniture (Quality Control) Order, 2025",
      link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Furniture-QCO-17-02-2025.pdf",
      linkText: "S.O. 801 (E) Dated 14 February, 2025",
    },
  },
  {
    id: 683,
    sno: 683,
    isNumber: "IS 17632: 2022",
    product: "General purpose chairs and stools",
    notification: {
      title: "181. Furniture (Quality Control) Order, 2025",
      link: "https://www.bis.gov.in/wp-content/uploads/2025/02/Furniture-QCO-17-02-2025.pdf",
      linkText: "S.O. 801 (E) Dated 14 February, 2025",
    },
  },
];

const BISFMProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Enhanced filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === "") return productTableData;

    const searchLower = searchTerm.toLowerCase().trim();

    return productTableData.filter((item) => {
      // Skip section headers from search results
      if (item.isSectionHeader) return false;

      // Search in IS Number
      if (item.isNumber && item.isNumber.toLowerCase().includes(searchLower)) {
        return true;
      }

      // Search in Product name
      if (item.product && item.product.toLowerCase().includes(searchLower)) {
        return true;
      }

      // Search in notification title
      if (
        item.notification?.title &&
        item.notification.title.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in notification text
      if (
        item.notification?.notificationText &&
        item.notification.notificationText.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in link text
      if (
        item.notification?.linkText &&
        item.notification.linkText.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in multiple links
      if (item.notification?.links) {
        return item.notification.links.some(
          (link) =>
            link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in additional links
      if (item.notification?.additionalLinks) {
        return item.notification.additionalLinks.some(
          (link) =>
            link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in amendments
      if (item.notification?.amendments) {
        return item.notification.amendments.some(
          (amendment) =>
            amendment.text && amendment.text.toLowerCase().includes(searchLower)
        );
      }

      return false;
    });
  }, [searchTerm]);

  // Calculate pagination
  const totalEntries = filteredData.length;
  const totalPages =
    entriesPerPage === "all" ? 1 : Math.ceil(totalEntries / entriesPerPage);

  // Get current page data
  const currentData = useMemo(() => {
    if (entriesPerPage === "all") return filteredData;

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, entriesPerPage]);

  // Reset to first page when search or entries per page changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(
      e.target.value === "all" ? "all" : parseInt(e.target.value)
    );
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const currentStart =
    entriesPerPage === "all" ? 1 : (currentPage - 1) * entriesPerPage + 1;
  const currentEnd =
    entriesPerPage === "all"
      ? totalEntries
      : Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 py-6">
      {/* Page Heading */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
        Products Under BIS Certification as per Indian Standards
      </h2>

      {/* Search and Entries Per Page Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by product name, IS number, notification details..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 pl-12 pr-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Entries Per Page Selector */}
        <div className="flex items-center gap-3 min-w-fit">
          <label className="font-medium font-geist text-sm md:text-base text-gray-700 whitespace-nowrap">
            Show entries:
          </label>
          <Select
            value={entriesPerPage.toString()}
            onValueChange={(value) =>
              handleEntriesPerPageChange({ target: { value } })
            }
          >
            <SelectTrigger className="w-[120px] h-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#1A8781] focus:ring-offset-0 hover:shadow-md transition-shadow font-geist text-sm font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border border-gray-300 shadow-md">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-4 font-medium font-geist text-sm md:text-base text-gray-600">
        {searchTerm ? (
          <>
            <span className="text-[#1A8781] font-semibold">
              Found {totalEntries} result{totalEntries !== 1 ? "s" : ""}
            </span>
            {totalEntries > 0 && (
              <>
                {" "}
                - Showing {currentStart} to {currentEnd}
                <span className="ml-2 text-gray-500">
                  (searched in{" "}
                  {
                    productTableData.filter((item) => !item.isSectionHeader)
                      .length
                  }{" "}
                  products)
                </span>
              </>
            )}
            {totalEntries === 0 && (
              <span className="ml-2 text-gray-500">
                for &ldquo;{searchTerm}&rdquo; - try different keywords
              </span>
            )}
          </>
        ) : (
          <>
            Showing {currentStart} to {currentEnd} of {totalEntries} entries
          </>
        )}
      </div>

      {/* Table */}
      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                S.No
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                IS No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Product
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                For Notification Details Please click on the given link
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {currentData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-gray-500"
                >
                  No entries found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((item) => (
                <TableRow
                  key={item.id}
                  className={
                    item.isSectionHeader ? "bg-gray-100" : "hover:bg-gray-50"
                  }
                >
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.sno}
                  </TableCell>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isSectionHeader ? (
                      <span className="font-bold">{item.isNumber}</span>
                    ) : (
                      item.isNumber
                    )}
                  </TableCell>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isSectionHeader ? (
                      <span className="font-bold">{item.product}</span>
                    ) : (
                      <>
                        {item.product}
                        {item.isDeNotified && (
                          <span className="text-red-600 ml-2">
                            De-notified from compulsory BIS certification
                          </span>
                        )}
                      </>
                    )}
                  </TableCell>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left">
                    {!item.isSectionHeader && item.notification && (
                      <div className="flex flex-col gap-2">
                        {item.notification.title && (
                          <span className="font-medium">
                            {item.notification.title}
                          </span>
                        )}
                        {item.notification.notificationText && (
                          <span className="text-gray-700">
                            {item.notification.notificationText}
                          </span>
                        )}
                        {item.notification.link &&
                          item.notification.linkText && (
                            <a
                              href={item.notification.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline inline-block"
                            >
                              {item.notification.linkText}
                            </a>
                          )}
                        {item.notification.links && (
                          <div className="flex flex-col gap-1">
                            {item.notification.links.map((linkItem, index) => (
                              <a
                                key={index}
                                href={linkItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline inline-block"
                              >
                                {linkItem.linkText}
                                {index < item.notification.links.length - 1
                                  ? " and "
                                  : ""}
                              </a>
                            ))}
                          </div>
                        )}
                        {item.notification.additionalLinks && (
                          <div className="flex flex-col gap-1">
                            {item.notification.additionalLinks.map(
                              (linkItem, index) => (
                                <a
                                  key={index}
                                  href={linkItem.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline inline-block"
                                >
                                  {linkItem.linkText}
                                </a>
                              )
                            )}
                          </div>
                        )}
                        {item.notification.deNotification && (
                          <a
                            href={item.notification.deNotification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-800 font-medium inline-block"
                          >
                            {item.notification.deNotification.text}
                          </a>
                        )}
                        {item.notification.amendments && (
                          <div className="flex flex-col gap-1">
                            <span className="font-medium">
                              Subsequent Amendments:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {item.notification.amendments.map(
                                (amendment, index) => (
                                  <a
                                    key={index}
                                    href={amendment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline inline-block"
                                  >
                                    {amendment.text}
                                    {index <
                                    item.notification.amendments.length - 1
                                      ? ", "
                                      : ""}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      {entriesPerPage !== "all" && totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          {/* Page Info */}
          <div className="font-medium font-geist text-sm md:text-base text-gray-600">
            Page {currentPage} of {totalPages}
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-2 font-medium font-geist text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-2 font-medium font-geist text-sm rounded-lg ${
                    pageNum === currentPage
                      ? "bg-[#1A8781] text-white"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-2 font-medium font-geist text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BISFMProductTable;
