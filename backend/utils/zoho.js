import dotenv from "dotenv";
dotenv.config();

// Zoho CRM Integration Utility Functions

// Step 1: Get Access Token (Valid for 1 hour)
const getAccessToken = async () => {
  try {
    const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      return `Zoho-oauthtoken ${data.access_token}`;
    } else {
      throw new Error("Failed to get access token");
    }
  } catch (error) {
    console.error("Error getting Zoho access token:", error.message);
    throw new Error(`Failed to get Zoho access token: ${error.message}`);
  }
};

// Step 2: Upsert Account (Company)
const upsertAccount = async (accessToken, accountData) => {
  try {
    const response = await fetch(
      "https://www.zohoapis.in/crm/v8/Accounts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Owner: {
                name: process.env.ZOHO_OWNER_NAME,
                id: process.env.ZOHO_OWNER_ID,
                email: process.env.ZOHO_OWNER_EMAIL,
              },
              Account_Type: "Customer",
              Phone: accountData.phone,
              Account_Name: accountData.accountName,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.data && data.data[0] && data.data[0].details) {
      return data.data[0].details.id;
    } else {
      throw new Error("Failed to upsert account");
    }
  } catch (error) {
    console.error("Error upserting Zoho account:", error);
    throw error;
  }
};

// Step 3: Upsert Contact (Person)
const upsertContact = async (accessToken, contactData, accountId) => {
  try {
    const nameArray = contactData.fullName.split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray.slice(1).join(" ");

    const response = await fetch(
      "https://www.zohoapis.in/crm/v8/Contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Owner: {
                name: process.env.ZOHO_OWNER_NAME,
                id: process.env.ZOHO_OWNER_ID,
                email: process.env.ZOHO_OWNER_EMAIL,
              },
              Email: contactData.email,
              Account_Name: {
                id: accountId,
              },
              Mobile: contactData.mobile,
              First_Name: firstName,
              Last_Name: lastName || "Customer",
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.data && data.data[0] && data.data[0].details) {
      return data.data[0].details.id;
    } else {
      throw new Error("Failed to upsert contact");
    }
  } catch (error) {
    console.error("Error upserting Zoho contact:", error);
    throw error;
  }
};

// Step 4: Create Enquiry/Deal
const createEnquiry = async (
  accessToken,
  enquiryData,
  accountId,
  contactId
) => {
  try {
    const response = await fetch("https://www.zohoapis.in/crm/v8/Deals", {
      method: "POST",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Owner: {
              name: process.env.ZOHO_OWNER_NAME,
              id: process.env.ZOHO_OWNER_ID,
              email: process.env.ZOHO_OWNER_EMAIL,
            },
            Deal_Name: enquiryData.dealName,
            Stage: "Identify Requirements",
            Account_Name: {
              id: accountId,
            },
            Contact_Name: {
              id: contactId,
            },
            Description: enquiryData.message,
            // Associated_Services can be added if you have service IDs
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.data && data.data[0] && data.data[0].details) {
      return data.data[0].details.id;
    } else {
      throw new Error("Failed to create enquiry");
    }
  } catch (error) {
    console.error("Error creating Zoho enquiry:", error);
    throw error;
  }
};

// Helper function to format phone number
const formatPhoneNumber = (phoneNumber) => {
  // Remove any spaces, dashes, or other characters
  let cleanNumber = phoneNumber.replace(/[^\d+]/g, "");

  // Add +91 prefix if not present
  if (!cleanNumber.startsWith("+91")) {
    if (cleanNumber.startsWith("91")) {
      cleanNumber = "+" + cleanNumber;
    } else if (cleanNumber.startsWith("0")) {
      cleanNumber = "+91" + cleanNumber.substring(1);
    } else {
      cleanNumber = "+91" + cleanNumber;
    }
  }

  return cleanNumber;
};

// Main function to send data to Zoho CRM
export const sendToZohoCRM = async (formData, formType) => {
  try {
    console.log("Starting Zoho CRM integration...");

    // Step 1: Get access token
    const accessToken = await getAccessToken();
    console.log("Zoho access token obtained");

    // Format phone number
    const formattedPhone = formatPhoneNumber(formData.phoneNumber);

    // Prepare account data based on form type
    const accountData = {
      phone: formattedPhone,
      accountName:
        formType === "appointment"
          ? formData.companyName
          : "Individual Customer",
    };

    // Step 2: Upsert account
    const accountId = await upsertAccount(accessToken, accountData);
    console.log("Zoho account upserted, ID:", accountId);

    // Prepare contact data
    const contactData = {
      fullName: formData.fullName,
      email: formData.email,
      mobile: formattedPhone,
    };

    // Step 3: Upsert contact
    const contactId = await upsertContact(accessToken, contactData, accountId);
    console.log("Zoho contact upserted, ID:", contactId);

    // Prepare enquiry data
    const enquiryData = {
      dealName:
        formType === "appointment"
          ? `${formData.productName} - ${formData.companyName}`
          : `Contact Enquiry from ${formData.pageName}`,
      message: formData.message,
    };

    // Step 4: Create enquiry
    const enquiryId = await createEnquiry(
      accessToken,
      enquiryData,
      accountId,
      contactId
    );
    console.log("Zoho enquiry created, ID:", enquiryId);

    return {
      success: true,
      accountId,
      contactId,
      enquiryId,
    };
  } catch (error) {
    console.error("Zoho CRM integration failed:", error.message);
    // Don't throw error to prevent breaking the main flow
    return {
      success: false,
      error: error.message,
    };
  }
};
