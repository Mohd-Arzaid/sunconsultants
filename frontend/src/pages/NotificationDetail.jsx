import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  SendHorizontal,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/common/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { LatestBlog } from "@/components/manual/CDSCOContentRight";
import { notifications } from "../data/notificationsData.js";

const NotificationDetail = () => {
  const { notificationName } = useParams();

  return (
    <div className=" bg-white">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side - Content and PDF */}
          <NotificationDetailLeft notificationName={notificationName} />

          {/* Right Side */}
          <NotificationDetailRight />
        </div>
      </div>
      <OurServices />
      <Footer />
    </div>
  );
};

export default NotificationDetail;

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "BIS Mark (ISI License) for Foreign Manufacturers",
      description:
        "Comprehensive ISI licensing solution for foreign manufacturers looking to enter the Indian market with quality-certified products.",
      icon: "🏭",
      path: "/services/bis-foreign-manufacturers",
    },
    {
      id: 2,
      title: "Scheme X",
      description:
        "Specialized certification program for specific product categories requiring compliance with advanced quality and safety standards.",
      icon: "🔍",
      path: "/services/scheme-x",
    },
    {
      id: 3,
      title: "ISI Mark BIS for Indian Manufacturers",
      description:
        "Domestic certification for Indian manufacturers ensuring products meet Bureau of Indian Standards quality and safety requirements.",
      icon: "🇮🇳",
      path: "/services/bis-indian-manufacturers",
    },
    {
      id: 4,
      title: "BIS CRS Registration",
      description:
        "Compulsory Registration Scheme certification for electronic and IT products ensuring safety and quality compliance.",
      icon: "💻",
      path: "/services/bis-crs-registration",
    },
    {
      id: 5,
      title: "CDSCO Registration Certification",
      description:
        "Central Drugs Standard Control Organization approval for medical devices and pharmaceuticals in India.",
      icon: "💊",
      path: "/services/cdsco-registration-certification",
    },
    {
      id: 6,
      title: "Plastic Waste Management",
      description:
        "Comprehensive solutions for plastic waste management compliance, helping businesses meet environmental regulations.",
      icon: "🌱",
      path: "/services/plastic-waste-management",
    },
    {
      id: 7,
      title: "EPR Certificate",
      description:
        "Extended Producer Responsibility certification for sustainable waste management and environmental compliance.",
      icon: "♻️",
      path: "/services/epr-certificate",
    },
    {
      id: 8,
      title: "LMPC Certificate",
      description:
        "Legal Metrology Packaged Commodities certification ensuring accurate measurement and proper labeling of packaged goods.",
      icon: "⚖️",
      path: "/services/lmpc-registration",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-16 md:pt-10 md:pb-4 bg-gradient-to-b from-[#F9F7F2] to-white">
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            Our Certification Services
          </h2>
          <p className="text-base md:text-lg font-geist text-gray-600  max-w-xl md:max-w-2xl mx-auto px-4 md:px-0">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel display */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-auto md:h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="min-w-full h-full flex items-center p-6 md:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center w-full">
                    {/* Left content */}
                    <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
                      <div className="hidden md:flex bg-white/80 backdrop-blur-sm w-16 h-16 md:w-24 md:h-24 rounded-2xl items-center justify-center shadow-lg text-4xl md:text-5xl mx-auto md:mx-0">
                        {service.icon}
                      </div>
                      <h3 className="font-playfair text-2xl md:text-4xl font-bold text-[#1e1e1e] text-center md:text-left">
                        {service.title}
                      </h3>
                      <p className="text-base md:text-xl font-geist text-gray-700 leading-relaxed text-center md:text-left">
                        {service.description}
                      </p>
                      <button
                        onClick={() => navigate(service.path)}
                        className="flex items-center gap-3 bg-[#1A8781] text-white py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 w-fit mt-2 md:mt-4 group mx-auto md:mx-0"
                      >
                        <span className="font-medium text-sm md:text-base">
                          Learn More
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                          <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
                        </div>
                      </button>
                    </div>

                    {/* Right illustration */}
                    <div className="relative order-1 md:order-2">
                      <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
                      <div className="hidden md:block absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>

                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[200px] sm:h-[250px] md:h-[350px] flex items-center justify-center mb-6 md:mb-0">
                        <div className="text-7xl md:text-9xl flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "bg-[#1A8781] w-10"
                  : "bg-[#1A8781]/30 hover:bg-[#1A8781]/50"
                  }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Service thumbnails */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer rounded-xl p-3 md:p-4 transition-all duration-300 border ${activeIndex === index
                ? "bg-[#1A8781]/20 border-[#1A8781]/60 shadow-md"
                : "bg-white border-gray-200 hover:border-[#1A8781]/40 hover:bg-[#1A8781]/10"
                }`}
            >
              <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                <div className="text-2xl md:text-3xl mb-0.5 md:mb-1">
                  {service.icon}
                </div>
                <h4 className="font-geist font-medium text-xs md:text-sm leading-tight">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NotificationDetailLeft = ({ notificationName }) => {
  const navigate = useNavigate();

  // Function to convert title to URL slug (same as in Notification.jsx)
  const getUrlSlug = (title) => {
    // Remove common prefixes like "BIS certification for", "BIS Notification for", etc.
    let cleanTitle = title
      .replace(/^BIS\s+(certification|notification)\s+for\s+/i, '') // Remove "BIS certification for" or "BIS Notification for"
      .replace(/^QCO\s+notification\s+for\s+/i, '') // Remove "QCO notification for"
      .trim();

    // Convert to kebab-case
    return cleanTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, "-")      // Replace spaces with hyphens
      .replace(/-+/g, "-")       // Replace multiple hyphens with single hyphen
      .trim();                   // Remove leading/trailing spaces
  };

  // Find the notification based on the URL slug
  const notification = notifications.find((notif) => {
    const slug = getUrlSlug(notif.title);
    return slug === notificationName.replace('bis-certificate-for-', '');
  });

  // If notification not found, redirect to home
  useEffect(() => {
    if (!notification) {
      navigate('/', { replace: true });
    }
  }, [notification, navigate]);

  if (!notification) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Notification Header */}
      <div className="p-4 md:p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Mail className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
            </div>

            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <h2 className="font-playfair font-bold text-[#1e1e1e] text-lg md:text-2xl leading-tight">
                {notification.title}
              </h2>

              <p className="text-sm md:text-base font-medium text-gray-600 font-geist flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></span>
                <span className="truncate">Regulatory Compliance</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center gap-1 md:gap-0.5 flex-shrink-0">
            <div className="text-sm md:text-base font-medium text-gray-600 font-geist whitespace-nowrap">
              {notification.date}
            </div>

            <div className="flex items-center font-medium gap-2 text-gray-600">
              <MapPin className="text-gray-600 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="text-sm md:text-base font-geist whitespace-nowrap">
                {notification.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h3 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Important Update on Mandatory BIS Certification for Manufacturers and
          Importers of{" "}
          <span className="font-medium text-[#1e1e1e] underline decoration-blue-400  decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-blue-600">
            {notification.subHeading}
          </span>{" "}
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">Dear Reader,</p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e] underline decoration-blue-400  decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-blue-600">
            MINISTRY OF COMMERCE AND INDUSTRY
          </span>{" "}
          has prepared a Quality Control Order in respect of{" "}
          {notification.subHeading} in Consultation with BIS in order to bring
          it under mandatory BIS Certification keeping in view the Human Safety
          and for ensuring the optimum quality of Product. The QCO for above
          said Product is attached below :
        </p>

        <div className="mb-4">
          <h4 className="text-xl font-geist font-medium ttext-[#1e1e1e] mb-2">
            QCO notification {notification.subHeading} under{" "}
            {notification.ISNumber} is as below :
          </h4>
          <p className="text-base text-gray-600 mb-2">
            The Notification was Released on {notification.date} and It will be
            Implemented from :
          </p>
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1">
            <li>
              {notification.Date1} for Medium and Large enterprises (Annual
              turnover {">"}50 crores)
            </li>
            <li>
              {notification.Date2} for Small enterprises (Annual Turnover
              between 5 to 50 crores)
            </li>
            <li>
              {notification.Date3} for Micro enterprises (Annual turnover {"<"}5
              crores)
            </li>
          </ul>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Please review the attached document, If you have any questions or need
          assistance, Our Team is here to Help.
        </p>
      </div>

      {/* Pdf */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src={notification.pdfUrl}
          title="PDF Viewer"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
      </div>
    </div>
  );
};

const NotificationDetailRight = () => {
  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      <LatestBlog />

      <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Header */}
        <div className="flex gap-2 items-center">
          <PhoneCall className="text-[#232327]" />
          <h1 className="text-xl font-geist font-semibold text-[#232327]">
            Request a Free Callback
          </h1>
        </div>

        {/* Intro Text */}
        <p className="mt-3 text-sm text-gray-600 font-geist">
          Leave your details below and our experts will call you back within 24
          hours to discuss your regulatory compliance needs.
        </p>

        {/* Form */}
        <form className="mt-5 space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Your Name*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phoneNumber"
              required
              placeholder="Phone Number*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageCircle className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              placeholder="Required Certification*"
              rows="3"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Request Callback
              <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </form>

        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500 font-geist">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          and consent to being contacted.
        </p>
      </div>
    </div>
  );
};