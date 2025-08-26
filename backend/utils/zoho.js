import dotenv from "dotenv";
dotenv.config();

// Zoho CRM Integration Utility Functions

// URL-to-Service Mapping - Maps page URLs to their corresponding services
const URL_TO_SERVICE_MAPPING = {
  "/indian-bis-certification-under-scheme-x": "Scheme X",
  "/nabl-certification-india": "NABL",
  "/cdsco-registration-certification": "CDSCO Registration",
  "/what-is-bis-certificate-indian-bis": "BIS Certification",
  "/a-guide-to-bis-certification-indian-bis": "ISI Mark Indian",
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis":
    "BIS Mark Foreign",
  "/what-is-crs-bis-or-crs-registration": "CRS Registration",
  "/information-about-peso-certification-peso-license-india": "PESO",
  "/information-about-tec-certificate-mtcte": "TEC",
  "/information-about-wpc-certificate-eta-approval": "WPC",
  "/restriction-of-hazardous-substance-rohs-certificate": "ROHS",
  "/bee-certification": "BEE",
  "/ce-certification": "CE Certification",
  "/emi-emc-certification": "EMI/EMC",
  "/cb-certification": "CB Certification",
  "/a-guide-on-how-to-obtain-epr-certificate": "EPR Registration",
  "/epr-certificate-for-battery-waste-management-bwm": "Battery Waste",
  "/a-guide-on-how-to-obtain-lmpc-certificate": "LMPC Registration",
  "/epr-certificate-for-plastic-waste-management-pwm": "Plastic Waste",
  "/what-is-legal-metrology-or-lmpc-certificate": "Legal Metrology",
};

// Service ID Mapping - Maps service names to their Zoho Record IDs (numeric only)
const SERVICE_ID_MAPPING = {
  // Main Services
  "CDSCO Registration": "942070000000536033", // CDSCO Registration (Class A)
  "BIS Mark Foreign": "942070000000536038", // BIS Mark (ISI License) for Foreign Manufactures
  "ISI Mark Indian": "942070000000536043", // ISI Mark (BIS) for India manufacturers
  "EPR Registration": "942070000000536048", // EPR Registration
  "Battery Waste": "942070000000536053", // Battery Waste management
  "LMPC Registration": "942070000000536058", // LMPC registration
  "Plastic Waste": "942070000000536063", // Plastic Waste management
  "Legal Metrology": "942070000000536068", // Legal Metrology
  "BIS Certification": "942070000000536073", // BIS Certification
  "CRS Registration": "942070000000536078", // CRS Registration (BIS)
  PESO: "942070000000536083", // PESO Approval
  TEC: "942070000000536088", // TEC
  WPC: "942070000000536096", // WPC
  ROHS: "942070000000536101", // ROHS
  BEE: "942070000000536106", // BEE
  "CE Certification": "942070000000536111", // CE Certifacation
  "EMI/EMC": "942070000000536116", // EMI/EMC
  "CB Certification": "942070000000536121", // CB Certification
  "WPC ETA": "942070000000536126", // WPC ETA
  "Scheme X": "942070000000557092", // INDIAN SCHEME X
  NABL: "942070000000557092", // Using Scheme X ID for now, add NABL specific ID when available

  // Additional/Alternative Services
  LMPC: "942070000000557062", // Alternative LMPC
  "CDSCO Class A": "942070000000557067", // CDSCO CLASS A
  "EPR Plastic Waste": "942070000000557072", // EPR PLASTIC WASTE
  "EPR Electric Waste": "942070000000557077", // EPR ELECTRIC WASTE
  "EPR Others": "942070000000557082", // EPR OTHERS
  "Indian BIS": "942070000000557087", // INDIAN BIS
  "Indian Scheme X": "942070000000557092", // INDIAN SCHEME X
  CDSCO: "942070000000557097", // CDSCO
  "BIS FMCS": "942070000000557102", // BIS FMCS
  "BIS Scheme X FMCS": "942070000000557107", // BIS SCHEME X FMCS
};

// Function to get service name from page URL
const getServiceFromUrl = (pageUrl) => {
  console.log(`🔍 Detecting service from URL: "${pageUrl}"`);

  // Direct URL mapping
  if (URL_TO_SERVICE_MAPPING[pageUrl]) {
    const serviceName = URL_TO_SERVICE_MAPPING[pageUrl];
    console.log(`🎯 URL matched: ${pageUrl} → Service: ${serviceName}`);
    return serviceName;
  }

  // Fallback URL matching (in case of trailing slashes, query params, etc.)
  for (const [url, service] of Object.entries(URL_TO_SERVICE_MAPPING)) {
    if (pageUrl.includes(url) || url.includes(pageUrl.replace(/\/$/, ""))) {
      console.log(`🎯 URL partially matched: ${pageUrl} → Service: ${service}`);
      return service;
    }
  }

  // Default fallback
  console.log(
    `⚠️ Unknown URL: ${pageUrl}, using BIS Certification as fallback`
  );
  return "BIS Certification";
};

// Function to get service ID by name or page identifier
const getServiceId = (serviceName) => {
  // Direct mapping
  if (SERVICE_ID_MAPPING[serviceName]) {
    return SERVICE_ID_MAPPING[serviceName];
  }

  // Fallback mappings for different naming conventions
  const fallbackMappings = {
    cdsco: "942070000000536033",
    "bis-mark": "942070000000536038",
    "isi-mark": "942070000000536043",
    epr: "942070000000536048",
    battery: "942070000000536053",
    lmpc: "942070000000536058",
    plastic: "942070000000536063",
    "legal-metrology": "942070000000536068",
    "bis-certification": "942070000000536073",
    crs: "942070000000536078",
    peso: "942070000000536083",
    tec: "942070000000536088",
    wpc: "942070000000536096",
    rohs: "942070000000536101",
    bee: "942070000000536106",
    ce: "942070000000536111",
    emi: "942070000000536116",
    emc: "942070000000536116",
    cb: "942070000000536121",
    "scheme-x": "942070000000557092",
    nabl: "942070000000557092", // Using Scheme X ID for now
  };

  const lowerServiceName = serviceName.toLowerCase();
  for (const [key, id] of Object.entries(fallbackMappings)) {
    if (lowerServiceName.includes(key)) {
      return id;
    }
  }

  // Default fallback to BIS Certification if no match found
  console.log(
    `⚠️ Service ID not found for: ${serviceName}, using BIS Certification as fallback`
  );
  return "942070000000536073";
};

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
              Account_Name: accountData.name,
              Phone: formatPhoneNumber(accountData.phone),
              Website: accountData.website || "",
              Billing_Street: accountData.address || "",
              Billing_City: accountData.city || "",
              Billing_State: accountData.state || "",
              Billing_Country: accountData.country || "India",
              Account_Type: "Customer",
              // Use Company Name + Phone as unique duplicate check key
              Duplicate_Check_Fields: ["Account_Name", "Phone"],
            },
          ],
          duplicate_check_fields: ["Account_Name", "Phone"],
          apply_feature_execution: [
            {
              name: "layout_rules",
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("🏢 Account upsert response:", JSON.stringify(data, null, 2));

    if (data.data && data.data[0] && data.data[0].details) {
      return data.data[0].details.id;
    } else if (data.data && data.data[0] && data.data[0].duplicate) {
      console.log("Account already exists, using existing ID");
      return data.data[0].duplicate.id;
    } else {
      throw new Error("Failed to create/update account");
    }
  } catch (error) {
    console.error("Error upserting Zoho account:", error);
    throw error;
  }
};

// Step 3: Upsert Contact
const upsertContact = async (accessToken, contactData, accountId) => {
  try {
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
              First_Name: contactData.firstName,
              Last_Name: contactData.lastName || "",
              Email: contactData.email,
              Phone: formatPhoneNumber(contactData.phone),
              Account_Name: {
                id: accountId,
              },
              // Use Email + Phone as unique duplicate check key
              Duplicate_Check_Fields: ["Email", "Phone"],
            },
          ],
          duplicate_check_fields: ["Email", "Phone"],
          apply_feature_execution: [
            {
              name: "layout_rules",
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("👤 Contact upsert response:", JSON.stringify(data, null, 2));

    if (data.data && data.data[0] && data.data[0].details) {
      return data.data[0].details.id;
    } else if (data.data && data.data[0] && data.data[0].duplicate) {
      console.log("Contact already exists, using existing ID");
      return data.data[0].duplicate.id;
    } else {
      throw new Error("Failed to create/update contact");
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
            Description: enquiryData.description || "",
            Lead_Source: enquiryData.source || "Website",
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("💼 Enquiry creation response:", JSON.stringify(data, null, 2));

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

// Step 5A: Get Service Product ID (Using Hardcoded Zoho Service IDs)
const getServiceProductId = async (
  accessToken,
  productName,
  categoryServiceId
) => {
  try {
    console.log(`🔍 Getting service ID for: "${productName}"`);

    // Use the hardcoded service ID instead of creating/searching
    const serviceId = getServiceId(productName);

    if (serviceId) {
      console.log(
        `✅ Using hardcoded service ID: ${serviceId} for "${productName}"`
      );
      return serviceId;
    }

    // Fallback to the category service ID if no specific mapping found
    console.log(
      `⚠️ No specific service ID found for "${productName}", using category fallback: ${categoryServiceId}`
    );
    return categoryServiceId;
  } catch (error) {
    console.error("❌ Error getting service product ID:", error);
    return categoryServiceId; // Fallback to category service
  }
};

// Step 5B: Associate Product with Deal
const associateServices = async (accessToken, dealId, productId) => {
  try {
    console.log(`🔗 Associating product ${productId} with deal ${dealId}`);

    // Create the request body with the specific product
    const requestBody = {
      data: [
        {
          id: productId,
          quantity: 1,
        },
      ],
    };

    console.log("📤 Request body:", JSON.stringify(requestBody, null, 2));

    const response = await fetch(
      `https://www.zohoapis.in/crm/v8/Deals/${dealId}/Products`,
      {
        method: "PUT",
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const responseData = await response.json();
    console.log(
      "🔗 Product association response:",
      JSON.stringify(responseData, null, 2)
    );

    return response.ok;
  } catch (error) {
    console.error("❌ Error associating services:", error);
    return false;
  }
};

// Step 6: Fetch Available Products (for testing/setup)
const fetchAvailableProducts = async (accessToken) => {
  try {
    const response = await fetch("https://www.zohoapis.in/crm/v8/Products", {
      method: "GET",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.data) {
      console.log("✅ Available Products in Zoho CRM:");
      data.data.forEach((product) => {
        console.log(`- ${product.Product_Name}: ${product.id}`);
      });
      return data.data;
    }

    return [];
  } catch (error) {
    console.error("❌ Error fetching products from Zoho:", error);
    return [];
  }
};

// Helper function to format phone number
const formatPhoneNumber = (phoneNumber) => {
  // Check if phoneNumber is provided
  if (!phoneNumber || typeof phoneNumber !== "string") {
    console.warn("⚠️ Phone number is undefined or invalid:", phoneNumber);
    return "+91000000000"; // Default fallback number
  }

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

// Export function to get service ID by name (for testing/debugging)
export const getZohoServiceId = (serviceName) => {
  return getServiceId(serviceName);
};

// Export function to get service from URL (for testing/debugging)
export const getZohoServiceFromUrl = (pageUrl) => {
  return getServiceFromUrl(pageUrl);
};

// Export function to fetch products (for testing/setup)
export const getZohoProducts = async () => {
  try {
    const accessToken = await getAccessToken();
    return await fetchAvailableProducts(accessToken);
  } catch (error) {
    console.error("Error getting Zoho products:", error);
    return [];
  }
};

// Main function to send data to Zoho CRM
export const sendToZohoCRM = async (formData, formType) => {
  try {
    console.log("Starting Zoho CRM integration...");

    // Step 1: Get access token
    const accessToken = await getAccessToken();
    console.log("✅ Zoho access token obtained");

    // Step 2: Create or update account
    console.log("📋 Form data received:", {
      name: formData.name,
      phone: formData.phone,
      phoneNumber: formData.phoneNumber,
      companyName: formData.companyName,
      pageUrl: formData.pageUrl,
    });

    // Handle undefined name field
    const fullName =
      formData.name ||
      formData.fullName ||
      formData.customerName ||
      "Unknown Customer";

    const accountData = {
      name: formData.companyName || `${fullName}'s Company`,
      phone:
        formData.phone ||
        formData.phoneNumber ||
        formData.mobile ||
        "+91000000000",
      website: formData.website || "",
      address: formData.address || "",
      city: formData.city || "",
      state: formData.state || "",
      country: "India",
    };

    const accountId = await upsertAccount(accessToken, accountData);
    console.log("Zoho account created/updated, ID:", accountId);

    // Step 3: Create or update contact
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const contactData = {
      firstName: firstName,
      lastName: lastNameParts.join(" ") || "Customer",
      email: formData.email || "unknown@email.com",
      phone:
        formData.phone ||
        formData.phoneNumber ||
        formData.mobile ||
        "+91000000000",
    };

    const contactId = await upsertContact(accessToken, contactData, accountId);
    console.log("Zoho contact created/updated, ID:", contactId);

    // Step 4: Create enquiry
    const enquiryData = {
      dealName: `${fullName} - ${
        formData.productName || formData.interest || "General Enquiry"
      }`,
      description: formData.message || `Form submission from ${formType}`,
      source: "Website",
    };

    const enquiryId = await createEnquiry(
      accessToken,
      enquiryData,
      accountId,
      contactId
    );
    console.log("Zoho enquiry created, ID:", enquiryId);

    // Step 5: URL-based Service Detection and Product Association (for appointment forms)
    let serviceAssociated = false;
    if (formType === "appointment" && formData.pageUrl) {
      try {
        // Get service name from page URL
        const serviceName = getServiceFromUrl(formData.pageUrl);

        // Get service ID from service name
        const productId = getServiceId(serviceName);

        if (productId) {
          console.log(
            `🔗 Attempting to associate service ID ${productId} for service: ${serviceName} (from URL: ${formData.pageUrl})`
          );

          serviceAssociated = await associateServices(
            accessToken,
            enquiryId,
            productId
          );

          if (serviceAssociated) {
            console.log("✅ Product successfully associated with deal");
          } else {
            console.log("⚠️ Product association failed, but deal was created");
          }
        } else {
          console.log(
            `❌ Unable to get service ID for URL: ${formData.pageUrl}`
          );
        }
      } catch (error) {
        console.log("⚠️ URL-based service association error:", error.message);
      }
    } else if (formType === "appointment" && !formData.pageUrl) {
      console.log("⚠️ No pageUrl provided for service detection");
    }

    return {
      success: true,
      accountId,
      contactId,
      enquiryId,
      serviceAssociated,
      pageUrl: formData.pageUrl || null,
      detectedService: formData.pageUrl
        ? getServiceFromUrl(formData.pageUrl)
        : null,
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
