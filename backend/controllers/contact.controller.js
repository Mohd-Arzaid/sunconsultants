import { Contact } from "../model/contact.model.js";
import { appendToSheet } from "../utils/googleSheet.js";

// submit contact form
export const submitContact = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message, pageUrl, pageName } = req.body;

    if (!fullName || !email || !phoneNumber || !message || !pageUrl || !pageName) {
      return res.status(400).json({
        message: "Please fill up All the required fields",
        success: false,
      });
    }

    // validate full name
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      return res.status(400).json({
        success: false,
        message: "Please Enter a valid Full Name.",
      });
    }

    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please Enter a valid Email Address.",
      });
    }

    // validate phone number
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message:
          "Please Enter a Valid Phone number (8-15 digits)",
      });
    }

    // Get current date and time
    const now = new Date();
    const options = { timeZone: "Asia/Kolkata", hour12: false };
    const dateTimeStr = now.toLocaleString("en-IN", options);

    const [dateStr, timeStr] = dateTimeStr.split(", ");

    const contactData = {
      fullName,
      email,
      phoneNumber,
      message,
      pageUrl,
      pageName,
      Date: dateStr,
      time: timeStr,
    };

    // Save to MongoDB
    const contact = new Contact(contactData);
    await contact.save();

    // Save to Google Sheets
    await appendToSheet(contactData);

    return res.status(201).json({
      success: true,
      contact,
      message: "Contact Form Submitted Successfully !",
    });
  } catch (error) {
    console.error("Error Submitting Contact Form:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Submitting Contact Form",
      error: error.message,
    });
  }
};
