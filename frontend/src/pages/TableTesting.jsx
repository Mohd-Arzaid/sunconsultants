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
      title: "75. Hydrogenated Rice Bran Fatty Acids (Quality Control) Order, 2022",
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
      title: "76. Bureau of Indian Standards Kitchen Appliances (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5243(E) dated 10th October, 2018",
    },
  },
  {
    id: 283,
    sno: 283,
    isNumber: "IS 4250",
    product: "Domestic Electric Food Mixer (Liquidizers and Grinders) and Centrifugal Juicer",
    notification: {
      title: "76. Bureau of Indian Standards Kitchen Appliances (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5243(E) dated 10th October, 2018",
    },
  },
  {
    id: 284,
    sno: 284,
    isNumber: "IS 15558",
    product: "Instantaneous Domestic Water Heater for use with Liquefied Petroleum Gas",
    notification: {
      title: "77. Bureau of Indian Standards Domestic Water Heater for Use with Liquefied Petroleum Gas (Quality Control) Order, 2018",
      link: "https://www.bis.gov.in/MandatoryProducts/QCOrder/QCO_dated_10th_Oct2018.pdf",
      linkText: "S.O. 5244(E) dated 10th October, 2018",
    },
  },
  {
    id: 285,
    sno: 285,
    isNumber: "IS 1391 (Part-1): 2017",
    product: "Room Air Conditioners- Specification Part 1 Unitary Air Conditioners",
    notification: {
      title: "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
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
    product: "Room Air Conditioners- Specification Part 2 Split Air Conditioners",
    notification: {
      title: "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
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
      title: "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
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
      title: "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
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
      title: "78. Air Conditioner and its related Parts, Hermetic Compressor and Temperature Sensing Controls (Quality Control) Order, 2019",
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
    product: "Plugs and socket-outlets of Rated Voltage up to and including 250 Volts and Rated current up to and including 16 amperes",
    notification: {
      title: "Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2019",
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
    product: "Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Class1 and 2)",
    notification: {
      title: "Plugs and Socket-Outlets and Alternating Current Direct Connected Static Prepayment Meters for Active Energy (Quality Control) Order, 2019",
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
      title: "80. Domestic Gas Stoves for use with Liquefied Petroleum Gases (Quality Control) Order, 2019",
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
    product: "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 1 For Working Voltages up to and Including 1100 V",
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
    product: "Specification for PVC Insulated (Heavy Duty) Electric Cables Part 2 For Working Voltages from 3.3 kV up to and Including 11 kV",
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
    product: "Specification for Crosslinked Polyethylene Insulated PVC Sheathed Cables Part 1 for working voltages up to and including 1100 V",
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
    product: "Crosslinked polyethylene insulated Thermoplastics sheathed cables – Specification Part 2 for working voltages from 3.3 kV up to and including 33 kV",
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
    product: "Cross-Linked Polyethylene Insulated Thermoplastics Sheathed Cables Part 3 For Working Voltages from 66 kV Up to and Including 220 kV",
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
    product: "Aerial Bunched Cables – For Working Voltages Up to and Including 1100 Volts – Specification"
  }

];

const TableTesting = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Enhanced filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === '') return productTableData;

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
      if (item.notification?.title && item.notification.title.toLowerCase().includes(searchLower)) {
        return true;
      }

      // Search in notification text
      if (item.notification?.notificationText && item.notification.notificationText.toLowerCase().includes(searchLower)) {
        return true;
      }

      // Search in link text
      if (item.notification?.linkText && item.notification.linkText.toLowerCase().includes(searchLower)) {
        return true;
      }

      // Search in multiple links
      if (item.notification?.links) {
        return item.notification.links.some(link =>
          link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in additional links
      if (item.notification?.additionalLinks) {
        return item.notification.additionalLinks.some(link =>
          link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in amendments
      if (item.notification?.amendments) {
        return item.notification.amendments.some(amendment =>
          amendment.text && amendment.text.toLowerCase().includes(searchLower)
        );
      }

      return false;
    });
  }, [searchTerm]);

  // Calculate pagination
  const totalEntries = filteredData.length;
  const totalPages = entriesPerPage === "all" ? 1 : Math.ceil(totalEntries / entriesPerPage);

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
    setEntriesPerPage(e.target.value === "all" ? "all" : parseInt(e.target.value));
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
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

  const currentStart = entriesPerPage === "all" ? 1 : (currentPage - 1) * entriesPerPage + 1;
  const currentEnd = entriesPerPage === "all" ? totalEntries : Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 py-10">
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
                setSearchTerm('');
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
          <Select value={entriesPerPage.toString()} onValueChange={(value) => handleEntriesPerPageChange({ target: { value } })}>
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
              Found {totalEntries} result{totalEntries !== 1 ? 's' : ''}
            </span>
            {totalEntries > 0 && (
              <>
                {' '}- Showing {currentStart} to {currentEnd}
                <span className="ml-2 text-gray-500">
                  (searched in {productTableData.filter(item => !item.isSectionHeader).length} products)
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
                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                  No entries found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((item) => (
                <TableRow
                  key={item.id}
                  className={item.isSectionHeader ? "bg-gray-100" : "hover:bg-gray-50"}
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
                        {item.notification.link && item.notification.linkText && (
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
                  className={`px-3 py-2 font-medium font-geist text-sm rounded-lg ${pageNum === currentPage
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

export default TableTesting;
