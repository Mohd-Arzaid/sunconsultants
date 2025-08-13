import { useEffect, useState } from "react";
import {
  Globe,
  Clock,
  Phone,
  User,
  Mail,
  MessageCircle,
  SendHorizontal,
  PhoneCall,
} from "lucide-react";
import axios from "axios";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const AboutContact = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home Page";
    if (path === "/about") return "About Page";
    if (path === "/contact") return "Contact Page";
    if (path === "/bis-qco-updates") return "DRAFT QCO Notifications page";
    if (path === "/international-audits") return "International Audits";
    if (path === "/seminars-and-exhibitions") return "Exhibition page";
    return "Other Page";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    pageName: getPageName(),
  });

  useEffect(() => {
    // keep URL in sync if user navigates within SPA
    setFormData((prev) => ({
      ...prev,
      pageUrl: window.location.href,
      pageName: getPageName(),
    }));
  }, []);

  const { fullName, email, phoneNumber, message } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Full Name.",
        description: "Name Should only Contain Letters and Spaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Email Address.",
        description: "Check if Your Email Format is Correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    if (!phoneNumber || phoneNumber.length < 8) {
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number is required",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );
      if (!response.data?.success) {
        throw new Error(response.data?.message || "Request failed");
      }

      toast({
        title: "Contact form submit successfully!",
        description:
          "Thank you for Contacting Us. Our Team will Reach out to you Shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something Went Wrong. Please Check Your Details and Try Again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 pb-4">
      {/* Container with About page aesthetic */}
      <div className="relative rounded-3xl shadow-xl md:shadow-2xl overflow-hidden border border-[#1A8781]/30 bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/15">
        {/* Subtle overlay accents */}
        <div className="pointer-events-none absolute -top-[190px] -left-[190px] w-[340px] h-[340px] bg-[#1A8781]/10 rounded-full" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left content (hidden on mobile) */}
          <div className="hidden md:flex p-8 md:p-12 mt-5 flex-col justify-center">
            <div className="inline-flex items-center justify-center md:justify-start mb-4">
              <span className="text-[#1A8781] font-inter text-base font-medium tracking-wider uppercase">
                Contact Us
              </span>
              <div className="h-[2px] w-[40px] bg-[#1A8781] ml-3" />
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
              Let&apos;s talk about your certification
            </h2>
            <p className="text-base md:text-lg font-geist text-gray-700 max-w-xl">
              We simplify compliance so you can focus on growth. Share your
              details and our team will get back within 24 hours.
            </p>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center justify-center sm:justify-start gap-4 md:gap-5">
                <div className="w-11 h-11 rounded-full bg-[#1A8781]/15 border border-[#1A8781]/30 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#1A8781]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-geist text-base md:text-lg text-[#1e1e1e] font-medium">
                    Global Reach
                  </span>
                  <span className="font-geist text-sm text-gray-600">
                    20+ countries
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-4 md:gap-5">
                <div className="w-11 h-11 rounded-full bg-[#1A8781]/15 border border-[#1A8781]/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#1A8781]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-geist text-base md:text-lg text-[#1e1e1e] font-medium">
                    Fast Response
                  </span>
                  <span className="font-geist text-sm text-gray-600">
                    Within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form card (full-width on mobile) */}
          <div className="p-6 md:p-10 bg-white/90 backdrop-blur-sm">
            {/* Mobile form with FreeCallBack style */}
            <div className="md:hidden">
              <div className="flex gap-2 items-center mb-3">
                <PhoneCall className="text-[#232327]" />
                <h1 className="text-xl font-geist font-semibold text-[#232327]">
                  Contact Us
                </h1>
              </div>

              <p className="text-sm text-gray-600 font-geist mb-5">
                We simplify compliance so you can focus on growth. Share your
                details and our team will get back within 24 hours.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={handleOnChange}
                    disabled={loading}
                    required
                    placeholder="Full Name *"
                    className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A8781] focus:border-[#1A8781] outline-none transition-all"
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
                    value={phoneNumber}
                    onChange={handleOnChange}
                    disabled={loading}
                    required
                    placeholder="Phone Number *"
                    className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A8781] focus:border-[#1A8781] outline-none transition-all"
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
                    value={email}
                    onChange={handleOnChange}
                    disabled={loading}
                    required
                    placeholder="Email Address *"
                    className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A8781] focus:border-[#1A8781] outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={message}
                    onChange={handleOnChange}
                    disabled={loading}
                    required
                    placeholder="Which Certification is required ? *"
                    rows="3"
                    className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A8781] focus:border-[#1A8781] outline-none transition-all"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-5 font-geist bg-[#1A8781] hover:bg-[#125E5A] text-white group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {loading ? (
                      <div className="flex gap-3 items-center justify-center">
                        <ClockLoader size={22} color="#fff" />
                        <span>Sending</span>
                      </div>
                    ) : (
                      <>
                        Submit
                        <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <span className="absolute top-0 left-0 w-0 h-full bg-[#125E5A] transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </form>
            </div>

            {/* Desktop form (original style) */}
            <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-2xl p-5">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block font-geist text-sm md:text-base text-[#1e1e1e] mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    disabled={loading}
                    value={fullName}
                    onChange={handleOnChange}
                    placeholder="Full Name *"
                    className="w-full h-14 md:h-[60px] rounded-xl border-2 border-[#1A8781]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781] px-5 md:px-6 bg-white text-[#1e1e1e] placeholder:text-gray-500 font-geist"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-geist text-sm md:text-base text-[#1e1e1e] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Email Address *"
                    className="w-full h-14 md:h-[60px] rounded-xl border-2 border-[#1A8781]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781] px-5 md:px-6 bg-white text-[#1e1e1e] placeholder:text-gray-500 font-geist"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block font-geist text-sm md:text-base text-[#1e1e1e] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    disabled={loading}
                    value={phoneNumber}
                    onChange={handleOnChange}
                    placeholder="Phone Number *"
                    className="w-full h-14 md:h-[60px] rounded-xl border-2 border-[#1A8781]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781] px-5 md:px-6 bg-white text-[#1e1e1e] placeholder:text-gray-500 font-geist"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-geist text-sm md:text-base text-[#1e1e1e] mb-1"
                  >
                    Which Certification is required?
                  </label>
                  <input
                    id="message"
                    name="message"
                    type="text"
                    required
                    disabled={loading}
                    value={message}
                    onChange={handleOnChange}
                    placeholder="Which Certification is required ? *"
                    className="w-full h-14 md:h-[60px] rounded-xl border-2 border-[#1A8781]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781] px-5 md:px-6 bg-white text-[#1e1e1e] placeholder:text-gray-500 font-geist"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 inline-flex items-center justify-center gap-3 h-14 md:h-[56px] rounded-full bg-[#1A8781] hover:bg-[#125E5A] text-white font-geist font-medium px-6 md:px-8 shadow-lg transition-colors"
                >
                  {loading ? (
                    <>
                      <ClockLoader size={20} color="#fff" />
                      <span>Sending</span>
                    </>
                  ) : (
                    <span className="text-base md:text-lg">Submit</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
