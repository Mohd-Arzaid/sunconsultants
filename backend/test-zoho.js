import dotenv from 'dotenv';
import { integrateWithZoho } from './utils/zohoIntegration.js';

dotenv.config();

// Test data
const testContactData = {
  fullName: "Test User",
  email: "test@example.com",
  phoneNumber: "+919999999999",
  message: "This is a test message for Zoho integration",
  pageUrl: "https://sunconsultants.com/contact",
  pageName: "Contact Page",
  companyName: "Test Company"
};

const testAppointmentData = {
  ...testContactData,
  companyName: "Test Company",
  productName: "Test Product"
};

async function testZohoIntegration() {
  console.log('🧪 Testing Zoho CRM Integration...\n');

  // Test Contact Integration
  try {
    console.log('📧 Testing Contact Integration...');
    const contactResult = await integrateWithZoho(testContactData, "Contact");
    console.log('✅ Contact Integration Success:', contactResult);
  } catch (error) {
    console.error('❌ Contact Integration Failed:', error.message);
  }

  console.log('\n' + '='.repeat(50) + '\n');

  // Test Appointment Integration
  try {
    console.log('📅 Testing Appointment Integration...');
    const appointmentResult = await integrateWithZoho(testAppointmentData, "Appointment");
    console.log('✅ Appointment Integration Success:', appointmentResult);
  } catch (error) {
    console.error('❌ Appointment Integration Failed:', error.message);
  }
}

// Check environment variables
function checkEnvironmentVariables() {
  const requiredVars = [
    'ZOHO_REFRESH_TOKEN',
    'ZOHO_CLIENT_ID', 
    'ZOHO_CLIENT_SECRET',
    'ZOHO_OWNER_ID',
    'ZOHO_OWNER_EMAIL'
  ];

  console.log('🔍 Checking Environment Variables...\n');
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('❌ Missing Environment Variables:');
    missing.forEach(varName => console.error(`   - ${varName}`));
    console.error('\n📝 Please add these to your .env file');
    process.exit(1);
  }
  
  console.log('✅ All required environment variables found\n');
}

// Run tests
async function main() {
  try {
    checkEnvironmentVariables();
    await testZohoIntegration();
    console.log('\n🎉 Zoho Integration Test Completed!');
  } catch (error) {
    console.error('\n💥 Test Failed:', error.message);
    process.exit(1);
  }
}

main();