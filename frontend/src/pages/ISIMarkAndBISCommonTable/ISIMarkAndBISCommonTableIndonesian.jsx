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
    product: "Semen Portland Tahan Sulfat",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "Semen Portland Panas Rendah",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Semen Portland Pozzolana-Bagian 1 Berbasis Abu Terbang",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Semen Portland Pozzolana-Bagian 2 Berbasis Tanah Liat Terkalsinasi",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "Semen Portland Biasa",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "Semen Masonry",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "Semen Portland Slag",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "Semen Alumina Tinggi untuk Penggunaan Struktural",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "Semen supersulfat",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "Semen Portland pengerasan cepat",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "Semen Portland Putih",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "Semen Portland Hidrofobik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "Semen Sumur Minyak",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Semen Komposit - Spesifikasi.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Semen Portland Biasa Mikrohalus - Spesifikasi.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "Semen Tahan Api Alumina Tinggi.",
    notificationText: "",
    notificationLink: "",
  },

  // Kabel Listrik, Kabel, Peralatan dan Perangkat Perlindungan serta Aksesori
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Pemutus sirkuit arus sisa untuk penggunaan rumah tangga dan sejenisnya-Bagian 1 Pemutus sirkuit tanpa perlindungan arus lebih integral (RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Pemutus sirkuit arus sisa untuk penggunaan rumah tangga dan sejenisnya-Bagian 2 Pemutus sirkuit dengan perlindungan arus lebih integral (RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "Meter watt-jam AC, kelas 0.5, 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "Meter watt-jam statis AC, kelas 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "Meter watt-jam dan VAR-jam statis AC yang dioperasikan dengan transformator, kelas 0.2S & 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Lampu Ballast Sendiri untuk Layanan Pencahayaan Umum – Bagian 1 : Persyaratan Keselamatan & Bagian 2 : Persyaratan Kinerja",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Keselamatan peralatan listrik rumah tangga dan sejenisnya – Setrika listrik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Keselamatan peralatan listrik rumah tangga dan sejenisnya – Pemanas air celup listrik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Keselamatan peralatan listrik rumah tangga dan sejenisnya – Kompor listrik",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Keselamatan peralatan listrik rumah tangga dan sejenisnya - Pemanas ruangan",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Sakelar untuk keperluan domestik dan sejenisnya",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Lampu listrik layanan umum filamen tungsten (hingga 100 W)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Kabel berisolasi Elastomer (Bagian.1): Untuk tegangan kerja hingga dan termasuk 1100 V",
    notificationText: "",
    notificationLink: "",
  },

  // Baterai
  {
    id: 32,
    isNumber: "IS 8144",
    product: "Baterai kering multi-guna",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Makanan & Produk Terkait (Dinyatakan tidak wajib dari sertifikasi BIS wajib)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Formula tindak lanjut – makanan pelengkap",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Makanan pelengkap berbasis sereal olahan",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "Susu bubuk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Susu kental, sebagian skim dan susu kental skim",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Susu kental manis yang dirawat dengan suhu ultra tinggi",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Susu bubuk skim, kelas standar",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Susu bubuk skim, kelas ekstra",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "Air Mineral Alam dalam Kemasan",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "Pengganti susu bayi",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "Makanan untuk Keperluan Medis Khusus yang ditujukan untuk Bayi",
    notificationText: "",
    notificationLink: "",
  },

  // Botol Susu
  {
    id: 43,
    isNumber: "IS 14625",
    product: "Botol Susu Plastik",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "Botol Susu Kaca",
    notificationText: "",
    notificationLink: "",
  },

  // Kompor Tekanan Minyak
  {
    id: 45,
    isNumber: "IS 10109",
    product: "Kompor tekanan minyak, tipe pembakar offset",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "Kompor tekanan minyak multi-burner",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "Kompor tekanan minyak",
    notificationText: "",
    notificationLink: "",
  },

  // Aksesori Otomotif
  {
    id: 48,
    isNumber: "IS 13098",
    product: "Kendaraan bermotor – Tabung untuk ban pneumatik",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "Kendaraan bermotor – Ban pneumatik untuk kendaraan bermotor dua dan tiga roda",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "Kendaraan bermotor - Ban pneumatik untuk kendaraan penumpang – Ply diagonal dan radial",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "Kendaraan bermotor - Ban pneumatik untuk kendaraan komersial - Ply diagonal dan radial",
    notificationText: "",
    notificationLink: "",
  },

  // Silinder, Katup dan Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "Wadah gas minyak bumi cair untuk penggunaan otomotif",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "Perakitan katup multifungsi untuk wadah gas minyak bumi cair (LPG) yang dipasang permanen untuk penggunaan otomotif",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Silinder baja karbon rendah lasan melebihi kapasitas air 5 liter untuk gas yang dapat dicairkan bertekanan rendah Bagian 4 silinder untuk gas beracun dan korosif",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Silinder gas baja karbon rendah lasan melebihi kapasitas air 5 liter untuk gas yang dapat dicairkan bertekanan rendah Bagian 1 silinder untuk gas minyak bumi cair (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Silinder gas baja karbon rendah lasan melebihi kapasitas air 5 liter untuk gas yang dapat dicairkan bertekanan rendah Bagian 2 silinder untuk gas yang dapat dicairkan selain LPG.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "Perlengkapan katup untuk silinder gas terkompresi tidak termasuk silinder gas minyak bumi cair",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "Sambungan Katup Tipe Yoke untuk Silinder Gas Medis Kecil",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "Silinder baja karbon rendah lasan untuk gas yang dapat dicairkan bertekanan rendah tidak melebihi kapasitas air 5 liter",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Silinder gas baja seamless yang dapat diisi ulang Bagian 1 Silinder baja ternormalisasi",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Silinder gas baja seamless yang dapat diisi ulang Bagian 2 Silinder baja yang dikeraskan dan ditempa dengan kekuatan tarik kurang dari 1100 MPa (112 kgf/mm2)",
    notificationText: "",
    notificationLink: "",
  },
];

export const ISIMarkAndBISCommonTableIndonesian = () => {
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
          Produk di bawah Sertifikasi BIS sesuai Standar India
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Tabel berikut mencantumkan produk yang memerlukan sertifikasi BIS di
          India beserta nomor Standar India (IS) yang berlaku. Standar ini
          memastikan kualitas, keselamatan, dan keandalan produk di
          pasar India.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari produk berdasarkan nama atau nomor IS..."
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
                  No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  No. IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  Produk
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Untuk detail notifikasi, silakan klik tautan yang diberikan
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
                Sebelumnya
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Halaman {currentPage} dari {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Berikutnya
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
