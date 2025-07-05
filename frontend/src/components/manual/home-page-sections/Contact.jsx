import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

// Contact Images
import ContactUs from "../../../assets/images/ContactUs.png";
import ContactChild from "../../../assets/images/ContactChild.png";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// Contact
const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path === "/") return "Home Page";
    if (path === "/about") return "About Page";
    if (path === "/services") return "Services Page";
    if (path === "/contact") return "Contact Page";
    return "Other Page";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
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

    // Phone number validation - simplified since react-phone-input-2 handles formatting
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
    <div className=" pt-8 md:pt-8 pb-8 md:pb-8 overflow-x-hidden ">
      <div className="max-w-[88rem] px-4 md:px-8 w-full flex flex-col md:flex-row  items-center justify-between mx-auto">
        <div className="w-full md:w-1/2">
          <div className="hidden md:flex w-full items-center gap-3">
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India&apos;s most trusted partner for certifications
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>

          <h2 className="text-[25px] uppercase md:text-[36px]  font-bold font-inter md:font-roboto text-[#1E1E1E] ">
            Contact Us
          </h2>

          <p className="font-medium font-poppins text-[17px]  md:text-[20px]  text-[#664747]">
            Want to contact our team and book a call?
            <span className="text-black"> Try it now</span>
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            <Input
              disabled={loading}
              required
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border-2 border-blue-500/90
      focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#595959]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Full Name *"
            ></Input>

            <Input
              disabled={loading}
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border-2 border-blue-500/90
    focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#595959]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Email Address *"
            />

            <Input
              disabled={loading}
              required
              type="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border-2 border-blue-500/90
    focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#595959]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Phone Number *"
            />

            <Input
              disabled={loading}
              required
              type="text"
              name="message"
              value={message}
              onChange={handleOnChange}
              className="w-full md:w-[600px] h-14  md:h-[72px] rounded-xl  md:rounded-[15px] border-2 border-blue-500/90
      focus-visible:ring-1  focus-visible:ring-blue-500 focus-visible:ring-offset-0
text-[#595959]   text-[17px]     md:text-[20px]    font-poppins  font-semibold   placeholder:text-[#7E7E7E] placeholder:text-[17px]  md:placeholder:text-[20px] placeholder:font-poppins placeholder:font-semibold px-6 md:px-8 disabled:opacity-100"
              placeholder="Which Certification is required ? *"
            />

            <Button
              disabled={loading}
              type="submit"
              className="w-full md:w-[600px] mt-2 h-14 md:h-[72px] rounded-xl md:rounded-[15px] bg-[#218681] hover:bg-[#17b1a9] text-white text-[17px] md:text-[20px] font-poppins font-semibold disabled:opacity-100"
            >
              {loading ? (
                <div className="flex gap-3 items-center justify-center">
                  <ClockLoader size={22} color="#fff" />
                  <span>Sending</span>
                </div>
              ) : (
                <div className="flex gap-3 text-2xl items-center justify-center">
                  <span>Submit</span>
                </div>
              )}
            </Button>
          </form>
        </div>

        <div className="hidden md:block relative w-[600px] h-[539px] mr-5 mt-16 ">
          <img
            src={ContactUs}
            alt="ContactUs"
            className="absolute right-0 w-[475.99px] h-[539px] object-cover"
          />

          <img
            src={ContactChild}
            alt="ContactChild"
            className=" 
          absolute inset-0 w-[350px] h-[350px] -translate-x-[70px] translate-y-[180px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
