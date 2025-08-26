import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import contactRoute from "./routes/contact.route.js";
import appointmentRoute from "./routes/appointment.route.js";
import { testGoogleSheetsConnection } from "./utils/googleSheet.js";
import { getZohoProducts } from "./utils/zoho.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

// Testing the server
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is up and running ...",
  });
});

// Test Google Sheets connection
app.get("/test-sheets", async (req, res) => {
  try {
    console.log("🧪 Testing Google Sheets connection via API...");
    const result = await testGoogleSheetsConnection();

    return res.status(200).json({
      success: result.success,
      message: result.success
        ? "Google Sheets connection successful"
        : "Google Sheets connection failed",
      data: result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error testing Google Sheets connection",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Test Zoho Products - Get all available products/services
app.get("/test-zoho-products", async (req, res) => {
  try {
    console.log("🧪 Fetching Zoho CRM Products via API...");
    const products = await getZohoProducts();

    return res.status(200).json({
      success: true,
      message: "Zoho products fetched successfully",
      data: {
        totalProducts: products.length,
        products: products.map((product) => ({
          id: product.id,
          name: product.Product_Name,
          code: product.Product_Code,
          description: product.Description,
        })),
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching Zoho products",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

//Api's
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/appointment", appointmentRoute);

// Listening to the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
