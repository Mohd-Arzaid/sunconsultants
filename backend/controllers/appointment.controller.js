import { Appointment } from "../model/appointment.model.js";
import { appendAppointmentToSheet } from "../utils/googleSheet.js";
import { sendToZohoCRM } from "../utils/zoho.js";
import { sendAppointmentEmail } from "../utils/email.js";

// Helper function for background processing with timeout protection
const processInBackground = async (appointmentData) => {
  console.log("🚀 Starting background processing for appointment...");

  const results = await Promise.allSettled([
    // Email with timeout
    Promise.race([
      sendAppointmentEmail(appointmentData),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Email timeout after 10s")), 10000)
      ),
    ]),

    // Google Sheets with timeout
    Promise.race([
      appendAppointmentToSheet(appointmentData),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Google Sheets timeout after 15s")),
          15000
        )
      ),
    ]),

    // Zoho CRM with timeout
    Promise.race([
      sendToZohoCRM(appointmentData, "appointment"),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Zoho timeout after 10s")), 10000)
      ),
    ]),
  ]);

  // Process results and log status
  const [emailResult, sheetsResult, zohoResult] = results;

  // Email Result
  if (emailResult.status === "fulfilled") {
    if (emailResult.value?.success) {
      console.log(
        "✅ Background: Appointment email sent successfully to info@sunconsultants.co.in"
      );
    } else {
      console.log(
        "❌ Background: Email failed -",
        emailResult.value?.error || "Unknown error"
      );
    }
  } else {
    console.log("❌ Background: Email failed -", emailResult.reason?.message);
  }

  // Google Sheets Result
  if (sheetsResult.status === "fulfilled") {
    if (sheetsResult.value?.success) {
      console.log("✅ Background: Appointment data saved to Google Sheets");
    } else {
      console.log(
        "❌ Background: Google Sheets failed -",
        sheetsResult.value?.error
      );
    }
  } else {
    console.log(
      "❌ Background: Google Sheets failed -",
      sheetsResult.reason?.message
    );
  }

  // Zoho CRM Result
  if (zohoResult.status === "fulfilled") {
    if (zohoResult.value?.success) {
      console.log("✅ Background: Appointment data sent to Zoho CRM");
    } else {
      console.log("❌ Background: Zoho CRM failed -", zohoResult.value?.error);
    }
  } else {
    console.log("❌ Background: Zoho CRM failed -", zohoResult.reason?.message);
  }

  console.log("🏁 Background processing completed for appointment");
};

// submit appointment form
export const submitAppointment = async (req, res) => {
  const startTime = Date.now();

  try {
    const {
      fullName,
      email,
      phoneNumber,
      message,
      pageUrl,
      pageName,
      companyName,
      productName,
    } = req.body;

    // Validation - Only essential fields required
    if (!fullName || !email || !phoneNumber || !pageUrl) {
      return res.status(400).json({
        message:
          "Please fill up All the required fields (Name, Email, Phone, PageURL)",
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
      name: fullName, // Map fullName to name for Zoho
      fullName,
      email,
      phone: phoneNumber, // Map phoneNumber to phone for Zoho
      phoneNumber,
      message: message || "Appointment request",
      pageUrl,
      pageName: pageName || "Unknown Page",
      Date: dateStr,
      time: timeStr,
      companyName: companyName || fullName + "'s Company",
      productName: productName || "General Inquiry",
    };

    console.log("💾 Saving appointment to MongoDB...");

    // 🚀 CRITICAL: Save to MongoDB only (fast operation)
    const appointment = new Appointment(appointmentData);
    await appointment.save();

    const processingTime = Date.now() - startTime;
    console.log(`✅ Appointment saved to MongoDB in ${processingTime}ms`);

    // 🔥 IMMEDIATE RESPONSE - Don't wait for external APIs
    const response = {
      success: true,
      appointment,
      message: "Appointment Form Submitted Successfully!",
      processingTime: `${processingTime}ms`,
      status: {
        mongodb: "✅ Saved",
        background: "🚀 Email, Google Sheets & Zoho processing...",
        note: "You will receive confirmation shortly",
      },
    };

    // Send response immediately
    res.status(201).json(response);

    // 🚀 BACKGROUND PROCESSING (non-blocking, won't affect response time)
    processInBackground(appointmentData).catch((error) => {
      console.error("❌ Background processing error:", error.message);
    });
  } catch (error) {
    console.error("❌ Error Submitting Appointment Form:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Submitting Appointment Form",
      error: error.message,
    });
  }
};
