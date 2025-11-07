import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import Footer from "@/common/Footer";
import { backlinksData } from "../data/backlinksData.js";

const BacklinksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter backlinks based on search term
  const filteredBacklinks = useMemo(() => {
    if (!searchTerm.trim()) return backlinksData;

    return backlinksData.filter((backlink) =>
      backlink.url.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-white pt-10">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
            Backlinks
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
            Explore our comprehensive collection of backlinks and external
            resources related to BIS certification, compliance, and regulatory
            standards.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search backlinks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent font-geist text-neutral-700 placeholder-neutral-400"
              />
            </div>
            {searchTerm && (
              <p className="mt-2 text-sm text-neutral-500 font-geist text-center">
                {filteredBacklinks.length} results found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Backlinks Content */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-10 pb-6">
        <div className="bg-white rounded-lg shadow-md border border-black/40 hover:shadow-lg transition-shadow duration-200 flex flex-col">
          <div className="p-6 pb-4 border-b border-gray-100">
            <h2 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 flex items-center justify-between">
              External Backlinks
              <span className="text-sm font-normal text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                {filteredBacklinks.length}
              </span>
            </h2>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto p-6 pt-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
              <ul className="space-y-3">
                {filteredBacklinks.map((backlink) => (
                  <li key={backlink.id}>
                    <a
                      href={backlink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-neutral-700 font-geist text-base md:text-lg transition-colors duration-200 flex items-start group"
                    >
                      <span className="w-2 h-2 rounded-full bg-slate-900 mr-4 mt-2 group-hover:scale-125 transition-transform duration-200 shrink-0"></span>
                      <span className="leading-relaxed group-hover:translate-x-1 transition-transform duration-200 break-all">
                        {backlink.url}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* Scroll indicator for long lists */}
              {filteredBacklinks.length > 8 && (
                <div className="text-center mt-4 text-xs text-neutral-400 font-geist">
                  Scroll to see more items
                </div>
              )}
              {filteredBacklinks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-neutral-500 font-geist text-lg">
                    No backlinks found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BacklinksPage;
