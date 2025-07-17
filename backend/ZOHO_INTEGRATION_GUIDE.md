# 🚀 Zoho CRM Integration Guide

## Overview
Yeh integration tumhare backend mein automatically Zoho CRM mein leads create kar dega jab bhi koi user contact ya appointment form submit karega.

## 🔧 Setup Steps

### 1. Environment Variables (.env file mein add karo)

```bash
# Zoho CRM Configuration
ZOHO_REFRESH_TOKEN=your_refresh_token_here
ZOHO_CLIENT_ID=your_client_id_here  
ZOHO_CLIENT_SECRET=your_client_secret_here
ZOHO_OWNER_NAME=Sun Consultants
ZOHO_OWNER_ID=your_owner_id_here
ZOHO_OWNER_EMAIL=sun.consult@outlook.com
ZOHO_DEFAULT_SERVICE_ID=your_service_id_here (optional)
```

### 2. Zoho OAuth Setup
1. Zoho Developer Console mein jao: https://api-console.zoho.in/
2. New application banao
3. OAuth credentials generate karo
4. Refresh token obtain karo using authorization code flow
5. Owner ID Zoho CRM se get karo (Settings > Users and Control > Users)

## 🎯 Integration Workflow

### Step 1: Access Token Generation
```javascript
// Token automatically cache hota hai 1 hour ke liye
const accessToken = await getAccessToken();
```

### Step 2: Account Creation/Update
```javascript
// Company account create/update karta hai
const accountId = await upsertAccount(formData);
```

### Step 3: Contact Creation/Update  
```javascript
// Individual contact create/update karta hai
const contactId = await upsertContact(formData, accountId);
```

### Step 4: Deal (Enquiry) Creation
```javascript
// Lead/Enquiry create karta hai
const dealId = await createDeal(formData, accountId, contactId);
```

## 📊 Data Mapping

### Contact Form → Zoho Mapping
- `fullName` → `First_Name` + `Last_Name`
- `email` → `Email`
- `phoneNumber` → `Mobile` + `Phone`
- `companyName` → `Account_Name` (ya "Individual Customer")
- `message` → `Description`
- `pageUrl` → `Page_URL` (custom field)
- `pageName` → `Page_Name` (custom field)

### Deal Names
- Contact Form: "General Enquiry - [Customer Name]"
- Appointment Form: "Appointment Request for [Product Name]"

## 🛡️ Error Handling

### Non-blocking Integration
- Agar Zoho API fail ho jaye, form submission fail nahi hoga
- MongoDB aur Google Sheets mein data save hoga
- Error logs console mein dikhenge

### Access Token Caching
- Token automatically 1 hour ke liye cache hota hai
- Expiry se 1 minute pehle refresh hota hai
- Multiple concurrent requests efficiently handle hote hain

## 🧪 Testing

### Test karne ke liye:
1. Postman mein endpoints test karo
2. Console logs check karo
3. Zoho CRM dashboard mein verify karo

### Sample Request:
```bash
POST /api/v1/contact/submit-contact
{
  "fullName": "John Doe",
  "email": "john@example.com", 
  "phoneNumber": "+919999999999",
  "message": "Test message",
  "pageUrl": "https://example.com/contact",
  "pageName": "Contact Page"
}
```

### Expected Response:
```json
{
  "success": true,
  "contact": {...},
  "message": "Contact Form Submitted Successfully !",
  "zohoIntegration": {
    "success": true,
    "accountId": "942070000000493091",
    "contactId": "942070000000458049", 
    "dealId": "942070000000723005"
  }
}
```

## 🔍 Troubleshooting

### Common Issues:

1. **Invalid Refresh Token**
   - Error: "Failed to get Zoho access token"
   - Solution: Generate new refresh token

2. **Wrong Owner ID**
   - Error: "INVALID_DATA" in response
   - Solution: Get correct owner ID from Zoho CRM

3. **Missing Permissions**
   - Error: "OAUTH_SCOPE_MISMATCH"
   - Solution: Ensure "ZohoCRM.modules.ALL" scope

### Debug Mode:
Environment mein `NODE_ENV=development` set karo detailed logs ke liye.

## 📈 Performance

### Optimizations:
- Access token caching (reduces API calls)
- Non-blocking integration (doesn't affect form response time)
- Proper error handling (graceful degradation)
- Batch operations support (for future enhancements)

## 🔮 Future Enhancements

1. **Webhook Integration**: Zoho se data sync karne ke liye
2. **Lead Scoring**: Automatic lead qualification  
3. **Email Automation**: Follow-up emails
4. **Analytics Dashboard**: Conversion tracking

## 📝 Notes

- Zoho API rate limits: 100 calls per minute
- Access token valid for 1 hour
- Refresh token valid for long term (but can expire)
- Always test in sandbox environment first