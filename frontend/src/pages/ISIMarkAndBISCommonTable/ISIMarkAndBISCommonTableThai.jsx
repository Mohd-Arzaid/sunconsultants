import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const productsData = [
  { 
    id: 1,
    isNumber: "IS 12330",
    product: "ปูนซีเมนต์ปอร์ตแลนด์ทนซัลเฟต",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "ปูนซีเมนต์ปอร์ตแลนด์ความร้อนต่ำ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "ปูนซีเมนต์ปอร์ตแลนด์โพซโซลานา-ส่วนที่ 1 ใช้เถ้าลอย",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "ปูนซีเมนต์ปอร์ตแลนด์โพซโซลานา-ส่วนที่ 2 ใช้ดินเผา",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "ปูนซีเมนต์ปอร์ตแลนด์ธรรมดา",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "ปูนซีเมนต์สำหรับงานก่ออิฐ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "ปูนซีเมนต์ปอร์ตแลนด์ผสมตะกรัน",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "ปูนซีเมนต์อลูมินาสูงสำหรับงานโครงสร้าง",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "ปูนซีเมนต์ซุปเปอร์ซัลเฟต",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "ปูนซีเมนต์ปอร์ตแลนด์แข็งตัวเร็ว",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "ปูนซีเมนต์ปอร์ตแลนด์สีขาว",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "ปูนซีเมนต์ปอร์ตแลนด์กันน้ำ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "ปูนซีเมนต์สำหรับหลุมเจาะน้ำมัน",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "ปูนซีเมนต์ผสม- ข้อกำหนด",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "ปูนซีเมนต์ปอร์ตแลนด์ธรรมดาไมโครไฟน์- ข้อกำหนด",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "ปูนซีเมนต์อลูมินาสูงทนไฟ",
    notificationText: "",
    notificationLink: "",
  },

  // สายไฟ แค็บเบิล เครื่องใช้ไฟฟ้าและอุปกรณ์ป้องกันและอุปกรณ์เสริม
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "เบรกเกอร์วงจรทำงานด้วยกระแสตกค้างสำหรับใช้ในบ้านและใช้คล้ายกัน-ส่วนที่ 1 เบรกเกอร์วงจรโดยไม่มีระบบป้องกันกระแสเกินแบบบูรณาการ (RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "เบรกเกอร์วงจรทำงานด้วยกระแสตกค้างสำหรับใช้ในครัวเรือนและใช้คล้ายกัน-ส่วนที่ 2 เบรกเกอร์วงจรพร้อมระบบป้องกันกระแสเกินแบบบูรณาการ (RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "มิเตอร์วัตต์-ชั่วโมง AC คลาส 0.5, 1 และ 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "มิเตอร์วัตต์-ชั่วโมง AC แบบสถิตย์ คลาส 1 และ 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "มิเตอร์วัตต์-ชั่วโมงและ VAR-ชั่วโมง AC แบบสถิตย์ทำงานด้วยหม้อแปลง คลาส 0.2S และ 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "โคมไฟแบบเซลฟ์บัลลาสต์สำหรับบริการแสงสว่างทั่วไป – ส่วนที่ 1 : ข้อกำหนดด้านความปลอดภัย & ส่วนที่ 2 : ข้อกำหนดด้านประสิทธิภาพ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "ความปลอดภัยของเครื่องใช้ไฟฟ้าในครัวเรือนและเครื่องใช้ไฟฟ้าคล้ายกัน – เตารีดไฟฟ้า",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "ความปลอดภัยของเครื่องใช้ไฟฟ้าในครัวเรือนและเครื่องใช้ไฟฟ้าคล้ายกัน– เครื่องทำน้ำร้อนไฟฟ้าแบบจุ่ม",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "ความปลอดภัยของเครื่องใช้ไฟฟ้าในครัวเรือนและเครื่องใช้ไฟฟ้าคล้ายกัน – เตาไฟฟ้า",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "ความปลอดภัยของเครื่องใช้ไฟฟ้าในครัวเรือนและเครื่องใช้ไฟฟ้าคล้ายกัน-เครื่องทำความร้อนห้อง",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "สวิตช์สำหรับใช้ในบ้านและวัตถุประสงค์คล้ายกัน",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "หลอดไฟฟ้าบริการทั่วไปไส้ทังสเตน (สูงสุด 100 W)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "สายเคเบิลฉนวนยาง (ส่วนที่ 1): สำหรับแรงดันทำงานสูงสุด 1100 V รวมถึง",
    notificationText: "",
    notificationLink: "",
  },

  // แบตเตอรี่
  {
    id: 32,
    isNumber: "IS 8144",
    product: "แบตเตอรี่แห้งอเนกประสงค์",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // อาหารและผลิตภัณฑ์ที่เกี่ยวข้อง (ยกเลิกจากการรับรอง BIS บังคับ)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "สูตรอาหารเสริม – อาหารเสริม",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "อาหารเสริมที่ทำจากซีเรียลแปรรูป",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "นมผง",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "นมข้น นมข้นพร่องมันเนยบางส่วนและนมข้นพร่องมันเนย",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "นมข้นหวานที่ผ่านการบำบัดด้วยอุณหภูมิสูงพิเศษ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "นมผงพร่องมันเนย เกรดมาตรฐาน",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "นมผงพร่องมันเนย เกรดพิเศษ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "น้ำแร่ธรรมชาติบรรจุภัณฑ์",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "นมทดแทนสำหรับทารก",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "อาหารเพื่อวัตถุประสงค์ทางการแพทย์พิเศษสำหรับทารก",
    notificationText: "",
    notificationLink: "",
  },

  // ขวดนม
  {
    id: 43,
    isNumber: "IS 14625",
    product: "ขวดนมพลาสติก",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "ขวดนมแก้ว",
    notificationText: "",
    notificationLink: "",
  },

  // เตาน้ำมันแรงดัน
  {
    id: 45,
    isNumber: "IS 10109",
    product: "เตาน้ำมันแรงดัน ประเภทเบิร์นเนอร์ออฟเซ็ต",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "เตาน้ำมันแรงดันหลายเบิร์นเนอร์",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "เตาน้ำมันแรงดัน",
    notificationText: "",
    notificationLink: "",
  },

  // อุปกรณ์เสริมยานยนต์
  {
    id: 48,
    isNumber: "IS 13098",
    product: "ยานพาหนะ – กระบอกสำหรับยางลม",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "ยานพาหนะ – ยางลมสำหรับรถยนต์สองล้อและสามล้อ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "ยานพาหนะ-ยางลมสำหรับรถยนต์โดยสาร – แบบเบลท์ทแยงและเรเดียล",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "ยานพาหนะ-ยางลมสำหรับรถยนต์เชิงพาณิชย์-แบบเบลท์ทแยงและเรเดียล",
    notificationText: "",
    notificationLink: "",
  },

  // ถังแก๊ส วาล์วและเครื่องควบคุม
  {
    id: 52,
    isNumber: "IS 14899",
    product: "ภาชนะก๊าซปิโตรเลียมเหลวสำหรับใช้ในยานยนต์",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "ชุดวาล์วหลายฟังก์ชันสำหรับภาชนะก๊าซปิโตรเลียมเหลว (LPG) ที่ติดตั้งถาวรสำหรับใช้ในยานยนต์",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "ถังแก๊สเหล็กคาร์บอนต่ำเชื่อมที่เกินความจุน้ำ 5 ลิตรสำหรับก๊าซที่ทำให้เป็นของเหลวความดันต่ำ ส่วนที่ 4 ถังสำหรับก๊าซพิษและกัดกร่อน",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "ถังแก๊สเหล็กคาร์บอนต่ำเชื่อมที่เกินความจุน้ำ 5 ลิตรสำหรับก๊าซที่ทำให้เป็นของเหลวความดันต่ำ ส่วนที่ 1 ถังสำหรับก๊าซปิโตรเลียมเหลว (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "ถังแก๊สเหล็กคาร์บอนต่ำเชื่อมที่เกินความจุน้ำ 5 ลิตรสำหรับก๊าซที่ทำให้เป็นของเหลวความดันต่ำ ส่วนที่ 2 ถังสำหรับก๊าซที่ทำให้เป็นของเหลวอื่นๆ ที่ไม่ใช่ LPG",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "ฟิตติ้งวาล์วสำหรับถังแก๊สอัดโดยไม่รวมถังแก๊สปิโตรเลียมเหลว",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "การเชื่อมต่อวาล์วแบบโยคสำหรับถังแก๊สแพทย์ขนาดเล็ก",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "ถังแก๊สเหล็กคาร์บอนต่ำเชื่อมสำหรับก๊าซที่ทำให้เป็นของเหลวความดันต่ำไม่เกินความจุน้ำ 5 ลิตร",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "ถังแก๊สเหล็กไร้รอยต่อเติมได้ ส่วนที่ 1 ถังเหล็กที่ผ่านการนอร์มัลไลซ์",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "ถังแก๊สเหล็กไร้รอยต่อเติมได้ ส่วนที่ 2 ถังเหล็กที่ผ่านการชุบแข็งและเท็มเปอร์ด้วยความแข็งแรงดึงน้อยกว่า 1100 MPa (112 kgf/mm2)",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableThai = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const tableRef = useRef(null);

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

  const scrollToTableTop = () => {
    if (tableRef?.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  return (
    <section ref={tableRef} className="w-full pb-12 ">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          ผลิตภัณฑ์ภายใต้การรับรอง BIS ตามมาตรฐานอินเดีย
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          ตารางต่อไปนี้แสดงรายการผลิตภัณฑ์ที่ต้องการการรับรอง BIS ใน
          อินเดียพร้อมกับหมายเลขมาตรฐานอินเดีย (IS) ที่ใช้บังคับ
          มาตรฐานเหล่านี้รับประกันคุณภาพ ความปลอดภัย และความน่าเชื่อถือของผลิตภัณฑ์ใน
          ตลาดอินเดีย
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาผลิตภัณฑ์ตามชื่อหรือเลข IS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  ลำดับ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  เลข IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  ผลิตภัณฑ์
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  สำหรับรายละเอียดการแจ้งเตือน กรุณาคลิกที่ลิงก์ที่ให้ไว้
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.notificationText ? (
                      <>
                        {item.notificationText.split("\n").map((line, idx) =>
                          idx === 1 && item.notificationLink ? (
                            <div key={idx}>
                              <a
                                href={item.notificationLink}
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {line}
                              </a>
                            </div>
                          ) : (
                            <div key={idx}>{line}</div>
                          )
                        )}
                      </>
                    ) : (
                      " "
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-end items-center mt-6">
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ก่อนหน้า
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                หน้า {currentPage} จาก {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ถัดไป
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
