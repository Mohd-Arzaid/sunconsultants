import { google } from "googleapis";

// Debug function to validate environment variables
const validateGoogleCredentials = () => {
  console.log("🔍 Validating Google Credentials...");
  console.log(
    "GOOGLE_CLIENT_EMAIL:",
    process.env.GOOGLE_CLIENT_EMAIL ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "GOOGLE_SHEET_ID:",
    process.env.GOOGLE_SHEET_ID ? "✅ Set" : "❌ Missing"
  );
  console.log(
    "GOOGLE_PRIVATE_KEY:",
    process.env.GOOGLE_PRIVATE_KEY ? "✅ Set" : "❌ Missing"
  );

  if (
    !process.env.GOOGLE_CLIENT_EMAIL ||
    !process.env.GOOGLE_PRIVATE_KEY ||
    !process.env.GOOGLE_SHEET_ID
  ) {
    throw new Error(
      "Google Sheets credentials missing in environment variables"
    );
  }
};

// Create reusable authenticated client
const createGoogleSheetsClient = async () => {
  try {
    validateGoogleCredentials();

    // Clean and format the private key
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;

    // Handle different private key formats
    if (privateKey.includes("\\n")) {
      privateKey = privateKey.replace(/\\n/g, "\n");
    }

    // Ensure proper key format
    if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
      throw new Error("Invalid private key format");
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Authorize the client
    await auth.authorize();
    console.log("✅ Google Sheets authentication successful");

    return google.sheets({ version: "v4", auth });
  } catch (error) {
    console.error("❌ Google Sheets authentication failed:", error.message);
    throw new Error(`Google Sheets auth error: ${error.message}`);
  }
};

// Function to append contact-data to Google Sheet
export const appendToSheet = async (contactData) => {
  try {
    console.log("📝 Appending contact data to Google Sheet...");

    const sheets = await createGoogleSheetsClient();

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            contactData.fullName || "",
            contactData.email || "",
            contactData.phoneNumber || "",
            "", // companyName (empty for contact)
            "", // productName (empty for contact)
            contactData.message || "",
            contactData.pageName || "",
            contactData.pageUrl || "",
            contactData.Date || "",
            contactData.time || "",
          ],
        ],
      },
    });

    console.log("✅ Contact data successfully added to Google Sheet");
    return { success: true, updatedRows: result.data.updates.updatedRows };
  } catch (error) {
    console.error("❌ Error appending contact to Google Sheet:", error.message);

    // Return error instead of throwing to prevent blocking
    return {
      success: false,
      error: error.message,
      details:
        "Contact data saved to MongoDB but failed to sync with Google Sheets",
    };
  }
};

// Function to append appointment-data to Google Sheet
export const appendAppointmentToSheet = async (appointmentData) => {
  try {
    console.log("📝 Appending appointment data to Google Sheet...");

    const sheets = await createGoogleSheetsClient();

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            appointmentData.fullName || "",
            appointmentData.email || "",
            appointmentData.phoneNumber || "",
            appointmentData.companyName || "",
            appointmentData.productName || "",
            appointmentData.message || "",
            appointmentData.pageName || "",
            appointmentData.pageUrl || "",
            appointmentData.Date || "",
            appointmentData.time || "",
          ],
        ],
      },
    });

    console.log("✅ Appointment data successfully added to Google Sheet");
    return { success: true, updatedRows: result.data.updates.updatedRows };
  } catch (error) {
    console.error(
      "❌ Error appending appointment to Google Sheet:",
      error.message
    );

    // Return error instead of throwing to prevent blocking
    return {
      success: false,
      error: error.message,
      details:
        "Appointment data saved to MongoDB but failed to sync with Google Sheets",
    };
  }
};

// Test function for debugging
export const testGoogleSheetsConnection = async () => {
  try {
    console.log("🧪 Testing Google Sheets connection...");
    const sheets = await createGoogleSheetsClient();

    // Try to read sheet properties
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    console.log("✅ Google Sheets connection test successful");
    console.log("Sheet title:", response.data.properties.title);
    return { success: true, title: response.data.properties.title };
  } catch (error) {
    console.error("❌ Google Sheets connection test failed:", error.message);
    return { success: false, error: error.message };
  }
};
