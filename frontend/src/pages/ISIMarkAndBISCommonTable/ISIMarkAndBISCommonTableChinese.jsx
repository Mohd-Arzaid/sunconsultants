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
    product: "抗硫酸盐波特兰水泥",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "低热波特兰水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "波特兰火山灰水泥-第1部分 粉煤灰基",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "波特兰火山灰水泥-第2部分 煅烧粘土基",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "普通波特兰水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "砌筑水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "波特兰矿渣水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "结构用高铝水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "超硫酸盐水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "快硬波特兰水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "白色波特兰水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "疏水波特兰水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "油井水泥",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "复合水泥-规范",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "微细普通波特兰水泥-规范",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "高铝耐火水泥",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "家用和类似用途的剩余电流操作断路器-第1部分 无整体过流保护的断路器（RCCB）",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "家用和类似用途的剩余电流操作断路器-第2部分 带整体过流保护的断路器（RCBO）",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "交流瓦时表，0.5、1和2级",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "交流静态瓦时表，1和2级",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product: "交流静态变压器操作瓦时表和乏时表，0.2S和0.5S级",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product: "一般照明用自镇流灯-第1部分：安全要求和第2部分：性能要求",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product: "家用和类似用途电器的安全-电熨斗",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product: "家用和类似用途电器的安全-电浸入式热水器",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product: "家用和类似用途电器的安全-电炉",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product: "家用和类似用途电器的安全-房间加热器",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "家用和类似用途开关",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "钨丝一般用途电灯（最高100W）",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product: "弹性体绝缘电缆（第1部分）：工作电压最高至并包括1100V",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "多用途干电池",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "后续配方-补充食品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "加工谷物基补充食品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "奶粉",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "炼乳、部分脱脂和脱脂炼乳",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "超高温处理甜炼乳",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "脱脂奶粉，标准级",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "脱脂奶粉，特级",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "包装天然矿泉水",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "婴儿代乳品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "用于婴儿的特殊医疗用途食品",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "塑料奶瓶",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "玻璃奶瓶",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "油压炉，偏置燃烧器型",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "多燃烧器油压炉",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "油压炉",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "机动车辆-充气轮胎内胎",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product: "机动车辆-两轮和三轮机动车辆用充气轮胎",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product: "机动车辆-乘用车用充气轮胎-斜交和子午线结构",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product: "机动车辆-商用车用充气轮胎-斜交和子午线结构",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "车用液化石油气容器",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product: "永久固定车用液化石油气（LPG）容器用多功能阀组件",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "用于低压可液化气体的超过5升水容量的焊接低碳钢气瓶 第4部分 有毒和腐蚀性气体用气瓶",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "用于低压可液化气体的超过5升水容量的焊接低碳钢气瓶 第1部分 液化石油气（LPG）用气瓶",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "用于低压可液化气体的超过5升水容量的焊接低碳钢气瓶 第2部分 除LPG外的可液化气体用气瓶",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product: "压缩气瓶用阀门配件（不包括液化石油气瓶）",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "小型医用气瓶用轭式阀门连接",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product: "用于低压可液化气体的不超过5升水容量的焊接低碳钢气瓶",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product: "可再充装无缝钢气瓶 第1部分 正火钢气瓶",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "可再充装无缝钢气瓶 第2部分 抗拉强度小于1100 MPa（112 kgf/mm2）的调质钢气瓶",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableChinese = () => {
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
          根据印度标准的BIS认证产品
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          下表列出了在印度需要BIS认证的产品及其适用的印度标准（IS）编号。这些标准确保印度市场产品的质量、安全性和可靠性。
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="按名称或IS编号搜索产品..."
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
                  序号
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS编号
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  产品
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  有关通知详情，请点击给定的链接
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
                上一页
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                第 {currentPage} 页，共 {totalPages} 页
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
