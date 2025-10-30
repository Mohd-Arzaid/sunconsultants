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
    product: "Xi măng Poóc-lăng chống sunfat",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "Xi măng Poóc-lăng tỏa nhiệt thấp",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Xi măng Poóc-lăng Pozzolana - Phần 1 (gốc tro bay)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Xi măng Poóc-lăng Pozzolana - Phần 2 (gốc đất sét nung)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "Xi măng Poóc-lăng thông dụng",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "Xi măng xây",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "Xi măng Poóc-lăng xỉ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "Xi măng alumin cao dùng cho kết cấu",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "Xi măng siêu sunfat",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "Xi măng Poóc-lăng đông kết nhanh",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "Xi măng Poóc-lăng trắng",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "Xi măng Poóc-lăng kỵ nước",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "Xi măng giếng khoan",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Xi măng composite - Yêu cầu kỹ thuật",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Xi măng Poóc-lăng siêu mịn - Yêu cầu kỹ thuật",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "Xi măng chịu lửa alumin cao",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Thiết bị chống rò điện cho gia dụng và tương tự - Phần 1: Máy cắt không tích hợp bảo vệ quá dòng (RCCB)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Thiết bị chống rò điện cho gia dụng và tương tự - Phần 2: Máy cắt tích hợp bảo vệ quá dòng (RCBO)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "Công tơ điện năng xoay chiều, cấp 0.5, 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "Công tơ điện năng tĩnh xoay chiều, cấp 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "Công tơ điện năng và công suất phản kháng kiểu tĩnh vận hành qua biến dòng, cấp 0.2S & 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Đèn tự chấn lưu cho chiếu sáng chung – Phần 1: Yêu cầu an toàn & Phần 2: Yêu cầu hiệu suất",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "An toàn thiết bị điện gia dụng và tương tự – Bàn ủi điện",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "An toàn thiết bị điện gia dụng và tương tự – Máy đun nước nhúng điện",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "An toàn thiết bị điện gia dụng và tương tự – Bếp điện",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "An toàn thiết bị điện gia dụng và tương tự – Máy sưởi phòng",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Công tắc dùng cho mục đích gia dụng và tương tự",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Đèn sợi đốt vonfram chiếu sáng thông dụng (đến 100 W)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Cáp cách điện elastomer (Phần 1): Điện áp làm việc đến và bao gồm 1100 V",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "Pin khô đa dụng",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Thực phẩm công thức bổ sung cho trẻ nhỏ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Thực phẩm bổ sung làm từ ngũ cốc chế biến",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "Sữa bột",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Sữa đặc, sữa đặc tách béo một phần và hoàn toàn",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Sữa đặc có đường xử lý UHT",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Sữa bột tách béo, hạng tiêu chuẩn",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Sữa bột tách béo, hạng cao",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "Nước khoáng thiên nhiên đóng gói",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "Sản phẩm thay thế sữa mẹ cho trẻ sơ sinh",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "Thực phẩm cho mục đích y tế đặc biệt dành cho trẻ sơ sinh",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "Bình bú bằng nhựa",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "Bình bú bằng thủy tinh",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "Bếp dầu áp lực, kiểu béc lệch tâm",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "Bếp dầu áp lực nhiều béc",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "Bếp dầu áp lực",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "Ống săm cho lốp hơi xe cơ giới",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "Lốp hơi cho xe mô tô hai và ba bánh",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "Lốp hơi cho xe con – Cấu trúc chéo và hướng tâm",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "Lốp hơi cho xe thương mại – Cấu trúc chéo và hướng tâm",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "Bình chứa LPG dùng cho ô tô",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "Cụm van đa năng cho bình LPG cố định dùng cho ô tô",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Bình thép cacbon thấp hàn dung tích nước > 5 lít cho khí hoá lỏng áp suất thấp – Phần 4: Bình cho khí độc và ăn mòn",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Bình thép cacbon thấp hàn dung tích nước > 5 lít cho khí hoá lỏng áp suất thấp – Phần 1: Bình cho LPG",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Bình thép cacbon thấp hàn dung tích nước > 5 lít cho khí hoá lỏng áp suất thấp – Phần 2: Bình cho khí hoá lỏng khác LPG",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "Phụ kiện van cho bình khí nén (trừ bình LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "Nối van kiểu càng cho bình khí y tế nhỏ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "Bình thép cacbon thấp hàn cho khí hoá lỏng áp suất thấp, dung tích nước ≤ 5 lít",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Bình khí thép liền mạch nạp lại được – Phần 1: Bình thép thường hoá",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Bình khí thép liền mạch nạp lại được – Phần 2: Bình thép tôi, ram có giới hạn bền < 1100 MPa",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTable = () => {
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
          Các Sản Phẩm Thuộc Chứng Nhận BIS theo Tiêu Chuẩn Ấn Độ
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Bảng sau liệt kê các sản phẩm yêu cầu chứng nhận BIS tại Ấn Độ cùng với số hiệu Tiêu chuẩn Ấn Độ (IS) áp dụng. Các tiêu chuẩn này bảo đảm chất lượng, an toàn và độ tin cậy của sản phẩm trên thị trường Ấn Độ.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Tìm sản phẩm theo tên hoặc số IS..."
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
                  STT
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Số IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  Sản phẩm
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Nhấp vào liên kết để xem chi tiết Thông báo
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
                Trước
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Trang {currentPage} trên {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
