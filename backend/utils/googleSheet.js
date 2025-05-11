import { google } from "googleapis";

// Function to append contact-data to Google Sheet
export const appendToSheet = async (contactData) => {
  try {
    // Authenticate with Google Sheets API using service account credentials from .env
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    // Create a Google Sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    // Append the contact data as a new row in the specified Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID, // Sheet ID from .env
      range: "Sheet1!A:H", // Updated range to include page name (columns A to H)
      valueInputOption: "USER_ENTERED", // Data will be treated as if entered by user
      resource: {
        values: [
          [
            contactData.fullName,   // Full Name
            contactData.email,      // Email
            contactData.phoneNumber,// Phone Number
            contactData.message,    // Message
            contactData.pageUrl,    // Page URL
            contactData.pageName,   // Page Name
            contactData.Date,       // Date
            contactData.time,       // Time
          ],
        ],
      },
    });
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw error;
  }
};
