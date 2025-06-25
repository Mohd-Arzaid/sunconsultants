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
import { useEffect } from "react";
import { LatestBlog } from "@/components/manual/CDSCOContentRight";
import { notifications } from "../data/notificationsData.js";
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Services } from "@/components/manual/Services";

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
      <Services />
      <Footer />
    </div>
  );
};

export default NotificationDetail;



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

  // SEO data for meta tags
  const seoData = {
    title: `BIS Certification guide for ${notification.subHeading}`,
    ogTitle: `BIS Certification guide for ${notification.subHeading}`,
    twitterTitle: `BIS Certification guide for ${notification.subHeading}`,
    metaDescription: `Complete guide on how to obtain BIS license for ${notification.subHeading} for Indian and foreign manufacturers`,
    ogDescription: `Complete guide on how to obtain BIS certificate for ${notification.subHeading} for Indian and foreign manufacturers`,
    twitterDescription: `Complete guide on how to obtain BIS registration for ${notification.subHeading} for Indian and foreign manufacturers`,
    metaKeywords: `indian bis, bis certification, bis certificate, bis licence, isi mark, bis license, certification scheme, bis certification scheme, bis certificate scheme, bis standard mark, bis licence certificate, process of BIS, cost of BIS Certification, BIS Certification for ${notification.subHeading}`,
    websiteName: "Sun Certifications India",
    type: "article",
    url: `https://bis-certifications.com/bis-qco-updates/bis-certificate-for-${getUrlSlug(notification.title)}`
  };

  return (
    <>
      {/* SEO Meta Tags - Not visible to users, only for search engines */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="keywords" content={seoData.metaKeywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content={seoData.type} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:site_name" content={seoData.websiteName} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sun Certifications India" />
        <link rel="canonical" href={seoData.url} />
      </Helmet>

      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Notification Header */}
        <div className="p-4 md:p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
              </div>

              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <h1 className="font-playfair font-bold text-[#1e1e1e] text-lg md:text-2xl leading-tight">
                  {notification.title}
                </h1>

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
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Important Update on Mandatory BIS Certification for Manufacturers and
            Importers of{" "}
            <span className="font-medium text-[#1e1e1e] underline decoration-blue-400  decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-blue-600">
              {notification.subHeading}
            </span>{" "}
          </h2>

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
            <h3 className="text-xl font-geist font-medium text-[#1e1e1e] mb-2">
              QCO notification {notification.subHeading} under{" "}
              {notification.ISNumber} is as below :
            </h3>
            <p className="text-base text-gray-600 mb-2 font-geist">
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
    </>
  );
};

NotificationDetailLeft.propTypes = {
  notificationName: PropTypes.string.isRequired,
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