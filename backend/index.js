import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import contactRoute from "./routes/contact.route.js";
import appointmentRoute from "./routes/appointment.route.js";
import { enforceCanonicalUrl, addCanonicalHeaders, robotsTxtRules } from "./utils/seoUtils.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());  
app.use(cookieParser());

// SEO Middlewares - Apply BEFORE other routes
app.use(enforceCanonicalUrl);
app.use(addCanonicalHeaders);

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

//Api's
app.use("/api/v1/contact",contactRoute);
app.use("/api/v1/appointment", appointmentRoute);

// SEO Routes
app.get("/robots.txt", (req, res) => {
  res.type('text/plain');
  res.send(robotsTxtRules);
});

// Sitemap route (basic)
app.get("/sitemap.xml", (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.bis-certifications.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.bis-certifications.com/clients</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.bis-certifications.com/terms-and-conditions</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`);
});

// Listening to the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
