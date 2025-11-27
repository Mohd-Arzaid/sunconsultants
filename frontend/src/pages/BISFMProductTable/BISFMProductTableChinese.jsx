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
import { useState, useMemo, useRef, useEffect } from "react";
import { productTableData } from "@/data/productTableData/productTableDataChinese.js";

const BISFMProductTableChinese = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const tableRef = useRef(null);
  const previousPageRef = useRef(currentPage); // Track previous page

  // Scroll to table top when page changes (only on actual page navigation)
  useEffect(() => {
    // Only scroll if page actually changed (not initial render)
    if (previousPageRef.current !== currentPage && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update previous page reference
    previousPageRef.current = currentPage;
  }, [currentPage]);

  // Enhanced filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm || searchTerm.trim() === "") return productTableData;

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
      if (
        item.notification?.title &&
        item.notification.title.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in notification text
      if (
        item.notification?.notificationText &&
        item.notification.notificationText.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in link text
      if (
        item.notification?.linkText &&
        item.notification.linkText.toLowerCase().includes(searchLower)
      ) {
        return true;
      }

      // Search in multiple links
      if (item.notification?.links) {
        return item.notification.links.some(
          (link) =>
            link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in additional links
      if (item.notification?.additionalLinks) {
        return item.notification.additionalLinks.some(
          (link) =>
            link.linkText && link.linkText.toLowerCase().includes(searchLower)
        );
      }

      // Search in amendments
      if (item.notification?.amendments) {
        return item.notification.amendments.some(
          (amendment) =>
            amendment.text && amendment.text.toLowerCase().includes(searchLower)
        );
      }

      return false;
    });
  }, [searchTerm]);

  // Calculate pagination
  const totalEntries = filteredData.length;
  const totalPages =
    entriesPerPage === "all" ? 1 : Math.ceil(totalEntries / entriesPerPage);

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
    setEntriesPerPage(
      e.target.value === "all" ? "all" : parseInt(e.target.value)
    );
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
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

  const currentStart =
    entriesPerPage === "all" ? 1 : (currentPage - 1) * entriesPerPage + 1;
  const currentEnd =
    entriesPerPage === "all"
      ? totalEntries
      : Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 py-6">
      {/* Page Heading */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
        Products Under BIS Certification as per Indian Standards
      </h2>

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
                setSearchTerm("");
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
          <Select
            value={entriesPerPage.toString()}
            onValueChange={(value) =>
              handleEntriesPerPageChange({ target: { value } })
            }
          >
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
              Found {totalEntries} result{totalEntries !== 1 ? "s" : ""}
            </span>
            {totalEntries > 0 && (
              <>
                {" "}
                - Showing {currentStart} to {currentEnd}
                <span className="ml-2 text-gray-500">
                  (searched in{" "}
                  {
                    productTableData.filter((item) => !item.isSectionHeader)
                      .length
                  }{" "}
                  products)
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
      <div ref={tableRef} className="rounded-md border bg-white shadow-sm">
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
                <TableCell
                  colSpan={4}
                  className="text-center py-8 text-gray-500"
                >
                  No entries found matching your search criteria.
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((item) => (
                <TableRow
                  key={item.id}
                  className={
                    item.isSectionHeader ? "bg-gray-100" : "hover:bg-gray-50"
                  }
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
                        {item.notification.link &&
                          item.notification.linkText && (
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
                  className={`px-3 py-2 font-medium font-geist text-sm rounded-lg ${
                    pageNum === currentPage
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

export default BISFMProductTableChinese;
