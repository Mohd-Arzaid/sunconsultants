import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const COSTING_ROWS = [
  {
    category: "Application Fee (INR 1000)",
    description:
      "Paid during submission of the FMCS application form for obtaining Indian BIS",
  },
  {
    category: "Audit Charges (INR 7000)",
    description:
      "Covers BIS auditor travel, man-day rates, and related expenses",
  },
  {
    category: "Product Testing Fees (As per product)",
    description: "For testing sealed samples at BIS-recognized labs in India",
  },
  {
    category: "License Fee (INR 1000)",
    description: "One-time fee paid upon grant of BIS certificate",
  },
  {
    category: "Marking Fee (As per product)",
    description: "Annual fee for usage of the ISI mark on certified products",
  },
  {
    category: "Performance Bank Guarantee (USD 10,000)",
    description:
      "Financial guarantee deposited via Indian bank to ensure compliance",
  },
];

const CostingSection = ({ country }) => {
  const heading = country
    ? `BIS Certification Cost Structure for ${country}`
    : "BIS Certification Cost Structure";

  return (
    <section className="my-12 md:my-16">
      <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
        {heading}
      </h2>

      <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
        Overview of BIS Certification Costs
      </h3>

      <p className="text-gray-600 text-base font-geist mb-4">
        Securing a BIS certificate under the Foreign Manufacturers Certification
        Scheme (FMCS) involves several types of costs. These cover everything
        from application submission and audits to product testing and mark
        usage.
      </p>

      <p className="text-gray-600 text-base font-geist mb-6">
        Foreign manufacturers must budget adequately to ensure timely payments,
        as failure to pay can lead to rejection of BIS certification mid-way.
      </p>

      <div className="overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Cost Category
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {COSTING_ROWS.map((row) => (
              <TableRow key={row.category} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                  {row.category}
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default CostingSection;
