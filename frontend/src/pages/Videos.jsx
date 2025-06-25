import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "../data/videosData.js";
import Footer from "@/common/Footer";

const Videos = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get specific categories as requested
    const categories = ["All", "BISFM", "ISI Mark", "Scheme X", "CRS Registration", "BIS Certification"];

    // Filter videos based on search term and category
    const filteredVideos = useMemo(() => {
        return videosData.filter(video => {
            const matchesSearch = video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-white pt-10">
                <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                    <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
                        Videos About BIS Certification
                    </h1>
                    <p className="mt-3 max-w-3xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
                        Discover our comprehensive video library covering BIS certification, CDSCO registration, EPR compliance, and more. Expert insights to guide you through India&apos;s regulatory landscape.
                    </p>

                    {/* Search and Filter Section */}
                    <div className="mt-8 max-w-4xl mx-auto">
                        <div className="flex flex-col gap-4 items-center justify-center">
                            {/* Search Bar */}
                            <div className="relative max-w-md w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search videos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent font-geist text-neutral-700 placeholder-neutral-400"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 mt-1 justify-center">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full font-geist font-medium transition-all duration-200 ${
                                            selectedCategory === category
                                                ? "bg-neutral-800 text-white shadow-md"
                                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {searchTerm && (
                            <p className="mt-4 text-sm text-neutral-500 font-geist text-center">
                                {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''} found
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Videos Grid */}
            <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-12 pb-12">
                {filteredVideos.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
                            <Search className="w-10 h-10 text-neutral-400" />
                        </div>
                        <h3 className="text-xl font-geist font-semibold text-neutral-800 mb-2">
                            No videos found
                        </h3>
                        <p className="text-neutral-600 font-geist max-w-md mx-auto">
                            Try adjusting your search terms or category filters to find what you&apos;re looking for.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredVideos.map((video) => (
                            <div 
                                key={video.id} 
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
                            >
                                <YouTubeFacade
                                    videoId={video.embedId}
                                    aspectRatio="aspect-video"
                                    thumbnailQuality="maxresdefault"
                                    className="w-full"
                                    autoplay={true}
                                    enableIntersectionObserver={false}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Call to Action Section */}
            <div className="my-4 border-2 border-neutral-200 bg-neutral-50 rounded-lg mx-auto p-4 md:p-12 text-center max-w-[88rem]">
                <h2 className="text-3xl md:text-4xl font-geist leading-none font-semibold text-neutral-800 mb-6">
                    Need Personalized Guidance?
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 font-geist leading-relaxed mb-8 max-w-3xl mx-auto">
                    While our videos provide comprehensive information, every business has unique requirements. 
                    Contact our certification experts for personalized guidance tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
                    >
                        Contact Our Experts
                    </Link>
                    <Link
                        to="/about"
                        className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-700 font-geist font-medium rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                    >
                        Learn More About Us
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Videos; 