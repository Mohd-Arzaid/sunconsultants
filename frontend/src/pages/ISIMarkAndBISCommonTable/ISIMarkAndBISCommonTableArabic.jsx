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
    product: "أسمنت بورتلاندي مقاوم للكبريتات",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "أسمنت بورتلاندي منخفض الحرارة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "أسمنت بوزولاني بورتلاندي - الجزء 1 (معتمد على الرماد المتطاير)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "أسمنت بوزولاني بورتلاندي - الجزء 2 (معتمد على الطين المُكلّس)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "أسمنت بورتلاندي عادي",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "أسمنت مباني",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "أسمنت الخبث البورتلاندي",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "أسمنت ألومينا عالي للاستخدام الإنشائي",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "أسمنت فائق الكبريتات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "أسمنت بورتلاندي سريع التصلب",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "أسمنت بورتلاندي أبيض",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "أسمنت بورتلاندي كاره للماء",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "أسمنت آبار النفط",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "أسمنت مركّب - المواصفات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "أسمنت بورتلاندي عادي دقيق جداً - المواصفات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "أسمنت حراري عالي الألومينا",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "قواطع تسريب تيار للاستخدام المنزلي وما شابهه – الجزء 1: قواطع بدون حماية تيار زائد مدمجة (RCCB)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "قواطع تسريب تيار للاستخدام المنزلي وما شابهه – الجزء 2: قواطع بحماية تيار زائد مدمجة (RCBO)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "عدادات طاقة تيار متناوب، الفئة 0.5 و1 و2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "عدادات طاقة ساكنة تيار متناوب، الفئة 1 و2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "عدادات طاقة وساعة فار ساكنة تعمل بمحولات، الفئة 0.2S و0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "مصابيح ذات موازن ذاتي للإضاءة العامة – الجزء 1: متطلبات السلامة والجزء 2: متطلبات الأداء",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "سلامة الأجهزة الكهربائية المنزلية وما شابهها – المكواة الكهربائية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "سلامة الأجهزة الكهربائية المنزلية وما شابهها – سخانات غمر الماء الكهربائية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "سلامة الأجهزة الكهربائية المنزلية وما شابهها – المواقد الكهربائية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "سلامة الأجهزة الكهربائية المنزلية وما شابهها – سخانات الغرف",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "مفاتيح للأغراض المنزلية وما شابهها",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "مصابيح خدمة عامة بخيط تنجستن (حتى 100 واط)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "كابلات معزولة بمطاط صناعي (الجزء 1): لجهود تشغيل حتى 1100 فولت",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "بطاريات جافة متعددة الأغراض",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "تركيبة متابعة – أطعمة تكميلية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "أطعمة تكميلية مصنّعة قائمة على الحبوب",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "حليب بودرة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "حليب مكثف، منزوع الدسم جزئياً وكلياً",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "حليب مكثف محلى معالج بدرجات حرارة فائقة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "حليب بودرة منزوع الدسم – درجة قياسية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "حليب بودرة منزوع الدسم – درجة ممتازة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "مياه معدنية طبيعية مُعبأة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "بدائل حليب الرضع",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "أغذية لأغراض طبية خاصة مخصصة للرضع",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "زجاجات رضاعة بلاستيكية",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "زجاجات رضاعة زجاجية",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "موقد ضغط زيت – نوع موقد منزاح",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "مواقد ضغط زيت متعددة الشعلات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "مواقد ضغط زيت",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "مركبات – أنابيب لإطارات هوائية",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "إطارات هوائية للدراجات النارية ثنائية وثلاثية العجلات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "إطارات هوائية لسيارات الركاب – بنية مائلة وشعاعية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "إطارات هوائية للمركبات التجارية – بنية مائلة وشعاعية",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "حاويات غاز بترولي مسال للاستخدام في السيارات",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "مجموعة صمام متعددة الوظائف لحاويات LPG المثبتة بشكل دائم في السيارات",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "أسطوانات فولاذ كربوني منخفض ملحومة بسعة مياه > 5 لتر لغازات قابلة للإسالة بضغط منخفض – الجزء 4: غازات سامة وتآكلية",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "أسطوانات فولاذ كربوني منخفض ملحومة بسعة مياه > 5 لتر – الجزء 1: لغاز البترول المسال (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "أسطوانات فولاذ كربوني منخفض ملحومة بسعة مياه > 5 لتر – الجزء 2: لغازات قابلة للإسالة بخلاف LPG",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "وصلات صمامات لأسطوانات الغاز المضغوط (باستثناء أسطوانات LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "توصيلة صمام نوع الشوكة لأسطوانات الغاز الطبي الصغيرة",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "أسطوانات فولاذ كربوني منخفض ملحومة لغازات قابلة للإسالة بضغط منخفض بسعة ≤ 5 لتر",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "أسطوانات غاز فولاذية غير ملحومة قابلة لإعادة التعبئة – الجزء 1: فولاذ مُطبّع",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "أسطوانات غاز فولاذية غير ملحومة قابلة لإعادة التعبئة – الجزء 2: فولاذ مُقسى ومُراجَع بحد شد أقل من 1100 ميغاباسكال",
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
          المنتجات الخاضعة لشهادة BIS وفقاً للمعايير الهندية
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          يوضح الجدول التالي المنتجات التي تتطلب شهادة BIS في الهند مع أرقام معيار IS المطبقة. تضمن هذه المعايير جودة وأمان وموثوقية المنتجات في السوق الهندية.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ابحث عن المنتجات بالاسم أو رقم IS..."
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
                  الرقم
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  رقم IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  المنتج
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  تفاصيل الإشعار (انقر على الرابط)
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
                السابق
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                الصفحة {currentPage} من {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                التالي
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
