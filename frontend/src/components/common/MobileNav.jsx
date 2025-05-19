import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const MobileNav = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: "Mobile Device Pop-up",
    pageName: window.location.pathname === "/" ? "Home Page" : "Other Page"
  });

  const { fullName, email, phoneNumber, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validations
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;

    if (!nameRegex.test(fullName)) {
      toast.error("Please Enter a valid Full Name.");
      setLoading(false);
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please Enter a valid Email Address.");
      setLoading(false);
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please Enter a Valid Phone number (8-15 digits)");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Contact form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: "Mobile Device Pop-up",
        pageName: window.location.pathname === "/" ? "Home Page" : "Other Page"
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast.error(errorMessage || "Failed to submit contact form details!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200/50 md:hidden z-[60] shadow-lg">
      <div className="flex justify-around items-center h-[70px]">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-green-600"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="font-geist text-sm mt-0.5">WhatsApp</span>
        </a>

        <a
          href="tel:+919999999999"
          className="flex flex-col items-center text-blue-600"
        >
          <Phone className="h-7 w-7" />
          <span className="font-geist text-sm mt-0.5">Call</span>
        </a>

        <Dialog>
          <DialogTrigger asChild>
            <button className="flex flex-col items-center text-gray-600">
              <Mail className="h-7 w-7" />
              <span className="font-geist text-sm mt-0.5">Contact</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] px-6 py-8">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#1E1E1E] font-geist">Contact Us</DialogTitle>
              <DialogDescription className="text-[#996C6C] font-geist text-base mt-2">
                Want to contact our team? Fill out the form below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <Input
                disabled={loading}
                required
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleOnChange}
                className="h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500 font-geist text-base"
                placeholder="Full Name"
              />
              <Input
                disabled={loading}
                required
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500 font-geist text-base"
                placeholder="Email Address"
              />
              <Input
                disabled={loading}
                required
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleOnChange}
                className="h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500 font-geist text-base"
                placeholder="Phone Number"
              />
              <Input
                disabled={loading}
                required
                type="text"
                name="message"
                value={message}
                onChange={handleOnChange}
                className="h-12 rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500 font-geist text-base"
                placeholder="Type Message"
              />
              <Button
                disabled={loading}
                type="submit"
                className="w-full h-12 rounded-lg bg-[#20B2AA] hover:bg-[#20CFC6] text-white font-geist text-base font-medium mt-2"
              >
                {loading ? (
                  <div className="flex gap-3 items-center justify-center">
                    <ClockLoader size={22} color="#fff" />
                    <span>Sending</span>
                  </div>
                ) : (
                  "Get Started"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MobileNav;
