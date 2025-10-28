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
    product: "硫酸塩抵抗性ポルトランドセメント",
    notificationText:
      "1. セメント（品質管理）令、2003年\nS.O. No. 191(E) 2003年2月17日",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "低発熱ポルトランドセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "ポルトランドポゾランセメント－パート1 フライアッシュ系",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "ポルトランドポゾランセメント－パート2 焼成粘土系",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "普通ポルトランドセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "組積用セメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "ポルトランドスラグセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "構造用高アルミナセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "超硫酸塩セメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "早強ポルトランドセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "白色ポルトランドセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "疎水性ポルトランドセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "オイルウェルセメント",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "複合セメント－仕様",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "微細普通ポルトランドセメント－仕様",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "高アルミナ耐火セメント",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "住宅用および類似用途用漏電遮断器－パート1 過電流保護内蔵なしの遮断器（RCCB）",
    notificationText:
      "2. 電線、ケーブル、電化製品および保護装置と付属品（品質管理）令、2003年\nS.O. 189(E) 2003年2月17日\nその後の改正:\nS.O. 165(E) 2004年2月5日\nS.O. 1172(E) 2005年8月22日\nS.O. 512(E) 2009年2月18日\nS.O. 2058(E) 2009年8月7日 &\nS.O. 2604(E) 2010年10月19日",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "住宅用および類似用途用漏電遮断器－パート2 過電流保護内蔵の遮断器（RCBO）",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "ACワット時計、クラス0.5、1および2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "ACスタティックワット時計、クラス1および2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "ACスタティック変圧器駆動ワット時計およびVAR時計、クラス0.2Sおよび0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "一般照明用自己安定化ランプ－パート1：安全性要件およびパート2：性能要件",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product: "住宅用および類似電気機器の安全性－電気アイロン",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product: "住宅用および類似電気機器の安全性－電気給湯器",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product: "住宅用および類似電気機器の安全性－電気コンロ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product: "住宅用および類似電気機器の安全性－暖房器",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "家庭用および類似用途用スイッチ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "タングステンフィラメント一般電球（100Wまで）",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product: "エラストマ絶縁ケーブル（パート1）：動作電圧1100Vまで",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "多用途乾電池",
    notificationText: "3. S.O. 516(E)、1987年5月25日",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "フォローアップ粉ミルク－補完食品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "加工穀物ベースの補完食品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "粉ミルク",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "練乳、部分脱脂練乳および脱脂練乳",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "加糖超高温処理練乳",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "脱脂粉ミルク、標準グレード",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "脱脂粉ミルク、特級グレード",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "パッケージ天然ミネラルウォーター",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "乳児用ミルク代替品",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "乳児向け特別医療用途食品",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "プラスチック哺乳瓶",
    notificationText:
      "5. 乳児用ミルク代替品、哺乳瓶および乳児用食品（生産、供給、流通の規制）法、1992年",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "ガラス製哺乳瓶",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "オイル圧力ストーブ、オフセットバーナータイプ",
    notificationText:
      "6. オイル圧力ストーブ（品質管理）令、1997年\nS.O. 451(E) 1997年6月16日",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "多バーナーオイル圧力ストーブ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "オイル圧力ストーブ",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "自動車－エアタイヤ用チューブ",
    notificationText:
      "7. 自動車用エアタイヤおよびチューブ（品質管理）令、2009年\nS.O. No. 2953(E) 2009年11月19日\nその後の改正\nS.O. No. 1057 (E) 2010年5月11日\nS.O. No. 2758 (E) 2010年11月9日",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product: "自動車－2輪および3輪自動車用エアタイヤ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product: "自動車－乗用車用エアタイヤ－斜めプライおよびラジアルプライ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product: "自動車－商用車用エアタイヤ－斜めプライおよびラジアルプライ",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "自動車用液化石油ガス容器",
    notificationText:
      "8. 爆発物法、1884年\nガスシリンダー規則、2016年\nG.S.R. No. 1081(E) 2016年11月22日",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product: "自動車用永久固定液化石油ガス（LPG）容器用多機能バルブアセンブリ",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "低圧液化可能ガス用5リットル超の水容量を有する溶接低炭素鋼シリンダー　パート4 毒性および腐食性ガス用シリンダー",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "低圧液化可能ガス用5リットル超の水容量を有する溶接低炭素鋼ガスシリンダー　パート1 液化石油ガス（LPG）用シリンダー",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "低圧液化可能ガス用5リットル超の水容量を有する溶接低炭素鋼ガスシリンダー　パート2 LPG以外の液化可能ガス用シリンダー",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product: "液化石油ガスシリンダーを除く圧縮ガスシリンダー用バルブ継手",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "小型医療用ガスシリンダー用ヨーク式バルブ接続",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "低圧液化可能ガス用5リットル以下の水容量を有する溶接低炭素鋼シリンダー",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "再充填可能な継目なし鋼製ガスシリンダー　パート1 正規化鋼製シリンダー",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "再充填可能な継目なし鋼製ガスシリンダー　パート2 1100 MPa（112 kgf/mm2）未満の引張強度を有する焼入焼戻し鋼製シリンダー",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableJapanese = () => {
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
          インド標準に基づくBIS認証対象製品
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          以下の表は、インドでBIS認証が必要な製品と、その適用されるインド標準（IS）番号をリストアップしています。これらの標準は、インド市場における製品の品質、安全性、信頼性を保証します。
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="製品名またはIS番号で検索..."
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
                  S.No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS No.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  製品
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  通知詳細については、指定されたリンクをクリックしてください
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
                前へ
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                {totalPages}ページ中{currentPage}ページ目
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次へ
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
