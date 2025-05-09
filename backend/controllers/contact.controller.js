import { Contact } from "../model/contact.model.js";
import { appendToSheet } from "../utils/googleSheet.js";

// submit contact form
export const submitContact = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message } = req.body;

    if (!fullName || !email || !phoneNumber || !message) {
      return res.status(400).json({
        message: "Please fill up All the required fields",
        success: false,
      });
    }

    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email Format",
      });
    }

    // validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: "Phone Number must be 10 digits",
      });
    }

    
    // Get current date and time
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hour = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');
    const dateStr = `${day}/${month}/${year}`;
    const timeStr = `${hour}:${min}:${sec}`;

    const contactData = {
      fullName,
      email,
      phoneNumber,
      message,
      Date: dateStr,
      time: timeStr
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
