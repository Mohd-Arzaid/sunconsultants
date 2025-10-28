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
    product: "황산염 저항 포틀랜드 시멘트",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "저열 포틀랜드 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "포틀랜드 포졸란 시멘트-파트1 플라이애시 기반",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "포틀랜드 포졸란 시멘트-파트2 소성 점토 기반",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "일반 포틀랜드 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "조적용 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "포틀랜드 슬래그 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "구조용 고알루미나 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "초황산염 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "조조경화 포틀랜드 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "백색 포틀랜드 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "소수성 포틀랜드 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "원유정 시멘트",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "복합 시멘트- 규격.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "미세 분말 일반 포틀랜드 시멘트- 규격.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "고알루미나 내화 시멘트.",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "가정용 및 유사 용도의 잔류 전류 운전 회로 차단기-파트1 내장형 과전류 보호 장치 없는 회로 차단기(RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "가정용 및 유사 용도의 잔류 전류 운전 회로 차단기-파트2 내장형 과전류 보호 회로 차단기(RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "AC 전력량계, 클래스 0.5, 1 및 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "AC 정적 전력량계, 클래스 1 및 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product: "AC 정적 변압기 운전 전력량 및 무효전력량계, 클래스 0.2S 및 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "일반 조명용 자체 안정기 램프 – 파트 1: 안전 요구사항 및 파트 2: 성능 요구사항",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product: "가정용 및 유사 전기 제품의 안전 – 전기 다리미",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product: "가정용 및 유사 전기 제품의 안전 – 침수형 전기 온수기",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product: "가정용 및 유사 전기 제품의 안전 – 전기 스토브",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product: "가정용 및 유사 전기 제품의 안전 – 공간 히터",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "가정용 및 유사 용도의 스위치",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "텅스텐 필라멘트 일반 서비스 전기 램프 (최대100 W)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product: "엘라스토머 절연 케이블 (파트 1): 최대 1100 V(포함) 작동 전압용",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "다목적 건전지",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "후속 조제유 – 보완 식품",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "가공 곡물 기반 보완 식품",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "분유",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "연유, 부분 탈지 연유 및 탈지 연유",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "당분을 첨가한 초고온 처리 연유",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "탈지 분유, 일반 등급",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "탈지 분유, 특급",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "포장 천연 생수",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "유아용 우유 대체품",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "유아용 특수의료용 식품",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "플라스틱 젖병",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "유리 젖병",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "기름 압력 스토브, 오프셋 버너형",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "다중 버너 기름 압력 스토브",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "기름 압력 스토브",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "자동차 – 공압 타이어용 튜브",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product: "자동차 – 2륜 및 3륜 차량용 공압 타이어",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product: "자동차 – 승용차용 공압 타이어 – 대각선 및 반경 플라이",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product: "자동차 – 상용차용 공압 타이어 – 대각선 및 반경 플라이",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "자동차용 액화 석유 가스 용기",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "자동차용 영구 고정 액화 석유 가스(LPG) 용기를 위한 다기능 밸브 조립체",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "저압 액화 가능 가스용 5리터 초과 용량의 용접 저탄소강 실린더 파트 4 독성 및 부식성 가스용 실린더",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "저압 액화 가능 가스용 5리터 초과 용량의 용접 저탄소강 가스 실린더 파트 1 액화 석유 가스(LPG)용 실린더",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "저압 액화 가능 가스용 5리터 초과 용량의 용접 저탄소강 가스 실린더 파트 2 LPG를 제외한 액화 가스용 실린더.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product: "액화 석유 가스 실린더를 제외한 압축 가스 실린더용 밸브 피팅",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "소형 의료용 가스 실린더용 요크형 밸브 연결",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product: "저압 액화 가능 가스용 5리터 이하 용량의 용접 저탄소강 실린더",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product: "재충전 가능한 무이음 강철 가스 실린더 파트1 정규화 강철 실린더",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "재충전 가능한 무이음 강철 가스 실린더 파트 2 인장 강도 1100 MPa(112 kgf/mm2) 미만의 담금질 및 템퍼링 강철 실린더",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableKorean = () => {
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
          인도 표준 기준 BIS 인증 제품
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          아래 표는 인도에서 BIS 인증이 필요한 제품과 해당 인도 표준(IS) 번호를
          나열합니다. 이러한 표준은 인도 시장에서 제품의 품질, 안전성 및
          신뢰성을 보장합니다.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="제품명 또는 IS 번호로 검색..."
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
                  제품
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  통지 세부 사항은 아래 링크를 클릭하세요
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
                이전
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                {totalPages}페이지 중 {currentPage}페이지
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                다음
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
