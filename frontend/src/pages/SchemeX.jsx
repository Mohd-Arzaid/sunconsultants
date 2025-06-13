import { useState } from "react";
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
        description: "Electric Motors (Single Phase)",
        hsCode: "8501.10.00"
    },
    {
        id: 2,
        description: "Industrial Pumps",
        hsCode: "8413.70.00"
    },
    {
        id: 3,
        description: "Power Transformers",
        hsCode: "8504.23.00"
    },
    {
        id: 4,
        description: "Circuit Breakers",
        hsCode: "8535.21.00"
    },
    {
        id: 5,
        description: "Electric Generators",
        hsCode: "8501.31.00"
    }
];

export const SchemeX = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = productsData.filter(
        (product) =>
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.hsCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full pb-12">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
                    Machinery and Electrical Equipment List
                </h2>

                <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
                    The following table lists various machinery and electrical equipment along with their HS codes for reference.
                </p>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by description or HS code..."
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
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                                    Description of Machinery and Electrical Equipment
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    HS Code
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProducts.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.description}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.hsCode}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default SchemeX;
