import { Contact } from "../model/contact.model.js";
import { appendToSheet } from "../utils/googleSheet.js";
import { sendToZohoCRM } from "../utils/zoho.js";
import { sendContactEmail } from "../utils/email.js";

// Helper function for background processing with timeout protection
const processInBackground = async (contactData) => {
  console.log("🚀 Starting background processing for contact...");

  const results = await Promise.allSettled([
    // Email with timeout
    Promise.race([
      sendContactEmail(contactData),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Email timeout after 10s")), 10000)
      ),
    ]),

    // Google Sheets with timeout
    Promise.race([
      appendToSheet(contactData),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Google Sheets timeout after 15s")),
          15000
        )
      ),
    ]),

    // Zoho CRM with timeout
    Promise.race([
      sendToZohoCRM(contactData, "contact"),
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
        "✅ Background: Contact email sent successfully to info@sunconsultants.co.in"
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
      console.log("✅ Background: Contact data saved to Google Sheets");
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
      console.log("✅ Background: Contact data sent to Zoho CRM");
    } else {
      console.log("❌ Background: Zoho CRM failed -", zohoResult.value?.error);
    }
  } else {
    console.log("❌ Background: Zoho CRM failed -", zohoResult.reason?.message);
  }

  console.log("🏁 Background processing completed for contact");
};

// submit contact form
export const submitContact = async (req, res) => {
  const startTime = Date.now();

  try {
    const { fullName, email, phoneNumber, message, pageUrl, pageName } =
      req.body;

    // Validation
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !message ||
      !pageUrl ||
      !pageName
    ) {
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

    console.log("💾 Saving contact to MongoDB...");

    // 🚀 CRITICAL: Save to MongoDB only (fast operation)
    const contact = new Contact(contactData);
    await contact.save();

    const processingTime = Date.now() - startTime;
    console.log(`✅ Contact saved to MongoDB in ${processingTime}ms`);

    // 🔥 IMMEDIATE RESPONSE - Don't wait for external APIs
    const response = {
      success: true,
      contact,
      message: "Contact Form Submitted Successfully!",
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
    processInBackground(contactData).catch((error) => {
      console.error("❌ Background processing error:", error.message);
    });
  } catch (error) {
    console.error("❌ Error Submitting Contact Form:", error);
    return res.status(500).json({
      success: false,
      message: "Error while Submitting Contact Form",
      error: error.message,
    });
  }
};
