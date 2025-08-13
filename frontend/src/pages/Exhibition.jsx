import { Calendar, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import Services from "../components/manual/Services";
import AboutContact from "../components/manual/about/AboutContact";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Exhibition = () => {
  return (
    <div className="bg-[#F9F7F2] relative">
      <Helmet>
        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Seminars and Exhibitions",
                item: "https://bis-certifications.com/seminars-and-exhibitions",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Seminars and Exhibitions</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <ExhibitionHero />
      <ExhibitionGallery />
      <Services />

      {/* Contact Section */}
      <div className="pt-8 pb-4 md:pt-10 md:pb-6">
        <AboutContact />
      </div>

      <Footer />
    </div>
  );
};

const ExhibitionHero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-14 md:pb-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Global Exhibition Excellence
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Discover our world-class exhibition services, bringing together
          industry leaders, innovators, and experts to showcase the latest
          advancements and opportunities.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <Link to="/webinar" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Upcoming Events</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Calendar className="w-4 h-4" />
          </div>
        </Link>

        <Link to="/contact" className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium font-geist">Contact Us</span>
        </Link>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Featured Exhibitions
        </span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        Explore our curated selection of premium exhibitions and industry events
      </p>
    </div>
  );
};

const ExhibitionGallery = () => {
  const exhibitionImages = [
    {
      id: 1,
      image: "/seminarImages/Exhibition-1.webp",
      // title: "Exhibition 1",
    },
    {
      id: 2,
      image: "/seminarImages/Seminar-4.webp",
      // title: "Seminar 4",
    },
    {
      id: 3,
      image: "/seminarImages/Exhibition-2.webp",
      // title: "Exhibition 2",
    },
    {
      id: 4,
      image: "/seminarImages/Seminar-5.webp",
      // title: "Seminar 5",
    },
    {
      id: 5,
      image: "/seminarImages/Exhibition-3.webp",
      // title: "Exhibition 3",
    },
    {
      id: 6,
      image: "/seminarImages/Seminar-6.webp",
      // title: "Seminar 6",
    },
    {
      id: 7,
      image: "/seminarImages/Seimar-8-2.webp",
      // title: "Seimar 8-2",
    },
    {
      id: 8,
      image: "/seminarImages/Seminar-7.webp",
      // title: "Seminar 7",
    },
    {
      id: 9,
      image: "/seminarImages/Seminar-8.webp",
      // title: "Seminar 8",
    },
    {
      id: 10,
      image: "/seminarImages/Seminar-9.webp",
      // title: "Seminar 9",
    },
    {
      id: 11,
      image: "/seminarImages/Seminar-10.webp",
      // title: "Seminar 10",
    },
    {
      id: 12,
      image: "/seminarImages/Seminar-11.webp",
      // title: "Seminar 11",
    },
    {
      id: 13,
      image: "/seminarImages/Seminar-12.webp",
      // title: "Seminar 12",
    },
    {
      id: 14,
      image: "/seminarImages/Seminar-6-2.webp",
      // title: "Seminar 6-2",
    },
    {
      id: 15,
      image: "/seminarImages/Seminar-7-2.webp",
      // title: "Seminar 7-2",
    },
    {
      id: 16,
      image: "/seminarImages/Seminar-10-2.webp",
      // title: "Seminar 10-2",
    },
    {
      id: 17,
      image: "/seminarImages/Seminar-10-3.webp",
      // title: "Seminar 10-3",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {exhibitionImages.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
              />
            </div>
            {/* Title Overlay - Always Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-playfair text-2xl md:text-3xl font-bold transform transition-all duration-500 group-hover:scale-105">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}

        {/* Many More Exhibitions Images Coming Soon Card */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300">
          <div className="aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-6">
              <h3 className="text-gray-800 font-geist text-lg md:text-xl font-bold mb-2 group-hover:text-[#1A8781] transition-colors duration-300 leading-tight tracking-wide">
                Many More Exhibitions
              </h3>
              <p className="text-gray-500 font-geist text-xs md:text-sm font-medium uppercase tracking-widest mb-1">
                Conducted Worldwide
              </p>
              <p className="text-gray-400 font-geist text-xs italic">
                Showcasing our extensive exhibition portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
