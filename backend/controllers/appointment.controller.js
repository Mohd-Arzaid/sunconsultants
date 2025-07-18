import { Appointment } from "../model/appointment.model.js";
import { appendAppointmentToSheet } from "../utils/googleSheet.js";
import { integrateWithZoho } from "../utils/zohoIntegration.js";

// submit appointment form
export const submitAppointment = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message, pageUrl, pageName, companyName, productName } = req.body;

    if (!fullName || !email || !phoneNumber || !message || !pageUrl || !pageName || !companyName || !productName) {
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
        message: "Please Enter a Valid Phone number (8-15 digits)",
      });
    }

    // Get current date and time
    const now = new Date();
    const options = { timeZone: "Asia/Kolkata", hour12: false };
    const dateTimeStr = now.toLocaleString("en-IN", options);
    const [dateStr, timeStr] = dateTimeStr.split(", ");

    const appointmentData = {
      fullName,
      email,
      phoneNumber,
      message,
      pageUrl,
      pageName,
      Date: dateStr,
      time: timeStr,
      companyName,
      productName,
    };

    // Save to MongoDB
    const appointment = new Appointment(appointmentData);
    await appointment.save();

    // Save to Google Sheets
    await appendAppointmentToSheet(appointmentData);

    // Integrate with Zoho CRM (non-blocking)
    let zohoResult = null;
    try {
      zohoResult = await integrateWithZoho(appointmentData, "Appointment");
      console.log('Zoho integration successful:', zohoResult);
    } catch (zohoError) {
      console.error('Zoho integration failed (non-critical):', zohoError.message);
      // Don't fail the entire request if Zoho fails
    }

    return res.status(201).json({
      success: true,
      appointment,
      message: "Appointment Form Submitted Successfully !",
      ...(zohoResult && { zohoIntegration: zohoResult })
    });
  } catch (error) {
    console.error("Error Submitting Appointment Form:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Submitting Appointment Form",
      error: error.message,
    });
  }
}; 