import axios from 'axios';

// Global variable to store access token and its expiry
let accessTokenCache = {
  token: null,
  expiresAt: null
};

/**
 * Get Access Token from Zoho using refresh token
 * Token is valid for 1 hour (3600 seconds)
 */
export const getAccessToken = async () => {
  try {
    // Check if we have a valid cached token
    if (accessTokenCache.token && accessTokenCache.expiresAt > Date.now()) {
      return accessTokenCache.token;
    }

    const response = await axios.post('https://accounts.zoho.in/oauth/v2/token', null, {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token'
      }
    });

    const { access_token, expires_in } = response.data;
    
    // Cache the token with expiry time (expires_in is in seconds)
    accessTokenCache.token = `Zoho-oauthtoken ${access_token}`;
    accessTokenCache.expiresAt = Date.now() + (expires_in * 1000) - 60000; // Subtract 1 minute for safety

    console.log('Zoho Access Token generated successfully');
    return accessTokenCache.token;
  } catch (error) {
    console.error('Error getting Zoho access token:', error.response?.data || error.message);
    throw new Error('Failed to get Zoho access token');
  }
};

/**
 * Create or Update Account in Zoho CRM
 * @param {Object} accountData - Account information
 * @returns {string} Account ID
 */
export const upsertAccount = async (accountData) => {
  try {
    const accessToken = await getAccessToken();
    
    const payload = {
      data: [
        {
          Owner: {
            name: process.env.ZOHO_OWNER_NAME || "Sun Consultants",
            id: process.env.ZOHO_OWNER_ID,
            email: process.env.ZOHO_OWNER_EMAIL
          },
          Account_Type: "Customer",
          Phone: accountData.phoneNumber,
          Account_Name: accountData.companyName || "Individual Customer"
        }
      ]
    };

    const response = await axios.post(
      'https://www.zohoapis.in/crm/v8/Accounts/upsert',
      payload,
      {
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        }
      }
    );

    const accountId = response.data.data[0].details.id;
    console.log('Zoho Account upserted successfully:', accountId);
    return accountId;
  } catch (error) {
    console.error('Error upserting Zoho account:', error.response?.data || error.message);
    throw new Error('Failed to upsert Zoho account');
  }
};

/**
 * Create or Update Contact in Zoho CRM
 * @param {Object} contactData - Contact information
 * @param {string} accountId - Account ID from previous step
 * @returns {string} Contact ID
 */
export const upsertContact = async (contactData, accountId) => {
  try {
    const accessToken = await getAccessToken();
    
    const payload = {
      data: [
        {
          Owner: {
            name: process.env.ZOHO_OWNER_NAME || "Sun Consultants",
            id: process.env.ZOHO_OWNER_ID,
            email: process.env.ZOHO_OWNER_EMAIL
          },
          First_Name: contactData.fullName.split(' ')[0],
          Last_Name: contactData.fullName.split(' ').slice(1).join(' ') || contactData.fullName.split(' ')[0],
          Email: contactData.email,
          Account_Name: {
            id: accountId
          },
          Mobile: contactData.phoneNumber
        }
      ]
    };

    const response = await axios.post(
      'https://www.zohoapis.in/crm/v8/Contacts/upsert',
      payload,
      {
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        }
      }
    );

    const contactId = response.data.data[0].details.id;
    console.log('Zoho Contact upserted successfully:', contactId);
    return contactId;
  } catch (error) {
    console.error('Error upserting Zoho contact:', error.response?.data || error.message);
    throw new Error('Failed to upsert Zoho contact');
  }
};

/**
 * Create Deal (Enquiry) in Zoho CRM
 * @param {Object} dealData - Deal information
 * @param {string} accountId - Account ID
 * @param {string} contactId - Contact ID
 * @param {string} serviceType - Type of service/enquiry
 * @returns {string} Deal ID
 */
export const createDeal = async (dealData, accountId, contactId, serviceType = "General Enquiry") => {
  try {
    const accessToken = await getAccessToken();
    
    const dealName = dealData.productName 
      ? `${serviceType} for ${dealData.productName}`
      : `${serviceType} - ${dealData.fullName}`;

    const payload = {
      data: [
        {
          Owner: {
            name: process.env.ZOHO_OWNER_NAME || "Sun Consultants",
            id: process.env.ZOHO_OWNER_ID,
            email: process.env.ZOHO_OWNER_EMAIL
          },
          Deal_Name: dealName,
          Stage: "Identify Requirements",
          Account_Name: {
            id: accountId
          },
          Contact_Name: {
            id: contactId
          },
          Description: dealData.message,
          Lead_Source: "Website",
          // Add custom fields if needed
          ...(dealData.pageUrl && { Page_URL: dealData.pageUrl }),
          ...(dealData.pageName && { Page_Name: dealData.pageName })
        }
      ]
    };

    // Add Associated_Services if service ID is provided
    if (process.env.ZOHO_DEFAULT_SERVICE_ID) {
      payload.data[0].Associated_Services = [
        {
          Service: process.env.ZOHO_DEFAULT_SERVICE_ID
        }
      ];
    }

    const response = await axios.post(
      'https://www.zohoapis.in/crm/v8/Deals',
      payload,
      {
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        }
      }
    );

    const dealId = response.data.data[0].details.id;
    console.log('Zoho Deal created successfully:', dealId);
    return dealId;
  } catch (error) {
    console.error('Error creating Zoho deal:', error.response?.data || error.message);
    throw new Error('Failed to create Zoho deal');
  }
};

/**
 * Complete Zoho Integration - All steps combined
 * @param {Object} formData - Form data from frontend
 * @param {string} enquiryType - Type of enquiry (Contact/Appointment)
 * @returns {Object} Result with all IDs
 */
export const integrateWithZoho = async (formData, enquiryType = "Contact") => {
  try {
    console.log(`Starting Zoho integration for ${enquiryType} enquiry...`);
    
    // Step 1: Create/Update Account
    const accountId = await upsertAccount(formData);
    
    // Step 2: Create/Update Contact
    const contactId = await upsertContact(formData, accountId);
    
    // Step 3: Create Deal (Enquiry)
    const serviceType = enquiryType === "Appointment" ? "Appointment Request" : "General Enquiry";
    const dealId = await createDeal(formData, accountId, contactId, serviceType);
    
    console.log('Zoho integration completed successfully');
    return {
      success: true,
      accountId,
      contactId,
      dealId
    };
  } catch (error) {
    console.error('Zoho integration failed:', error.message);
    throw error;
  }
};