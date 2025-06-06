import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ContactFormPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: document.title,
  });

  const { fullName, email, phoneNumber, message } = formData;

  useEffect(() => {
    // Track window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Don't show the popup on the contact page
    if (location.pathname === "/contact") {
      return;
    }
    
    // Only show popup on medium and larger screens (≥768px)
    if (screenWidth >= 768) {
      // Set a timeout to open the popup after 7 seconds
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);

      // Clean up the timer when component unmounts
      return () => clearTimeout(timer);
    } else {
      // Close popup if screen is resized to mobile
      setOpen(false);
    }
  }, [location.pathname, screenWidth]);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
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

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number Should be (8-15 digits)",
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

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
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
        pageName: document.title,
      });
      
      // Close the dialog after successful submission
      setOpen(false);
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

  // Don't render anything on the contact page or on mobile devices
  if (location.pathname === "/contact" || screenWidth < 768) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[28px] font-geist font-bold text-[#1E1E1E] text-center">
            Contact US
          </DialogTitle>
          <div className="flex w-full items-center justify-center gap-2 md:gap-3 mt-2">
            <Separator className="hidden md:block w-[70px] h-[2px] bg-[#008080]" />
            <span className="uppercase font-poppins font-semibold text-[14px] md:text-[16px] text-[#008080] text-center">
              Get In Touch, We&apos;re Here to Assist You
            </span>
            <Separator className="hidden md:block w-[70px] h-[2px] bg-[#008080]" />
          </div>
        </DialogHeader>
        
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col mt-4 gap-4 w-full"
        >
          <Input
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            placeholder="Please Enter Your Full Name *"
            className="font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100"
          />

          <Input
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            placeholder="Please Enter Your Phone Number *"
            className="font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100"
          />

          <Input
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            placeholder="Please Enter Your Email Address *"
            className="font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100"
          />

          <Textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            placeholder="Which Certification is required? *"
            className="font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-32 placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide p-5 resize-none disabled:opacity-100"
          ></Textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex justify-center font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn h-[50px] disabled:opacity-100"
          >
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>Sending</span>
              </div>
            ) : (
              <div className="flex gap-3 items-center justify-center">
                <Send />
                <span>SUBMIT</span>
              </div>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;
