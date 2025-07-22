import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/common/Footer";
import { useState } from "react";
import axios from "axios";
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import SEOBreadcrumbs from "@/components/common/SEOBreadcrumbs";
import VisualBreadcrumbs from "@/components/common/VisualBreadcrumbs";
 
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: "Contact Page",
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

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      // toast.error("Please Enter a valid Full Name.");
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
      // toast.error("Please Enter a Valid Phone number (8-15 digits)");
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
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
    ];
    const domain = email.split("@")[1];

    if (!emailRegex.test(email) || !commonDomains.includes(domain)) {
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
      // toast.success("Contact form submit successfully!");
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
        pageName: "Contact Page",
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      // toast.error(errorMessage || "Failed to submit contact form details!");
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
    <>
      <SEOBreadcrumbs customTitle="Contact Us | Get in Touch | Sun Certifications India" />
      <VisualBreadcrumbs 
        customTitle="Contact Us" 
        className="container mx-auto mt-4 mb-2"
      />
      <main className="w-full pt-[30px] md:pt-[50px] pb-[50px] md:pb-[90px]  relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF] ">
        {/* Decorative elements */}
        <div
          className="hidden md:block absolute top-[20%] z-10 right-[15%] w-[20px] h-[20px] rounded-full bg-blue-800/30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* 
        <div className="hidden md:block absolute inset-0 translate-x-[780px] translate-y-[180px]">
          <img
            src={ContactVector}
            alt="ContactVector"
            className="animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div> */}

        <div className="max-w-[84rem] z-[100] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Left Side */}
          <div className="w-full md:w-[600px] flex flex-col items-center justify-center order-2 md:order-1">
            <h3 className="text-[32px] md:text-[48px] font-geist font-bold text-[#1E1E1E] text-center">
              Contact US
            </h3>

            <div className="flex w-full items-center justify-center gap-2 md:gap-3 mt-2 md:mt-0">
              <Separator className="hidden md:block w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[14px] md:text-[18px] text-[#008080] text-center">
                Get In Touch , We're Here to Assist You
              </span>
              <Separator className="hidden md:block w-[94.46px]  h-[2px] bg-[#008080]" />
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col mt-4 gap-5 w-full"
            >
              <Input
                name="fullName"
                value={fullName}
                onChange={handleOnChange}
                disabled={loading}
                placeholder="Please Enter Your Full Name *"
                className="
                font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] md:text-[16px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100
                
                "
              />

              <Input
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleOnChange}
                disabled={loading}
                placeholder="Please Enter Your Phone Number *"
                className="
               font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] md:text-[16px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100"
              />

              <Input
                name="email"
                value={email}
                onChange={handleOnChange}
                disabled={loading}
                placeholder="Please Enter Your Email Address *"
                className="
            font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] md:text-[16px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100"
              />

              <Textarea
                name="message"
                value={message}
                onChange={handleOnChange}
                disabled={loading}
                placeholder="Which Certification is required ? *"
                className="
                font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-48 md:h-64 placeholder:text-[#7E7E7E]/90 text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold  font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] md:text-[16px] placeholder:leading-[24px] leading-[24px] placeholder:tracking-wide tracking-wide p-5 resize-none disabled:opacity-100"
              ></Textarea>

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn h-[50px] md:h-[58px]  disabled:opacity-100"
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
          </div>

          {/* Right side */}
          <div className="z-20 w-full md:w-[580px] flex flex-col order-1 md:order-2">
            <img
              src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
              alt="Software Solutions"
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>

      <div className="w-full h-auto md:h-[196px] bg-[#B9DEEB] py-8 md:py-0">
        <div className="max-w-[84rem] h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-8 md:gap-0">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Get In Touch With Us
            </h4>

            <p className="font-geist text-[16px] md:text-[20px] font-medium text-center">
              <span className="text-[#1E40AF]">We're always happy</span> to
              Assist You
            </p>
          </div>

          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
          />

          <Separator
            orientation="horizontal"
            className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
          />

          <div className="w-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Email
            </h4>
            <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
              admin@bis-certifications.com
            </p>
          </div>

          <Separator
            orientation="vertical"
            className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
          />

          <Separator
            orientation="horizontal"
            className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
          />

          <div className="w-full flex flex-col items-center justify-center">
            <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
              Phone Number
            </h4>
            <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
              +91-8010505057
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
