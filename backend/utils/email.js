import * as nodemailer from "nodemailer";

// OR try this import
// const nodemailer = require("nodemailer");

// Gmail transporter configuration - FIX: Use nodemailer.createTransporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Function to send contact form email
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@bis-certifications.com",
      subject: `🚨 New Contact Form Submission - ${contactData.pageName}`,
      replyTo: contactData.email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #125E5A 0%, #1A8781 100%); color: Black; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🔔 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">BIS Certifications Website</p>
          </div>

          <!-- Contact Details -->
          <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #125E5A;">
            <h2 style="color: #125E5A; margin-top: 0; font-size: 20px;">👤 Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">📛 Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${contactData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📧 Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${contactData.email}" style="color: #125E5A; text-decoration: none;">${contactData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📱 Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${contactData.phoneNumber}" style="color: #125E5A; text-decoration: none;">${contactData.phoneNumber}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">💬 Message:</td>
                <td style="padding: 8px 0; color: #333; line-height: 1.5; background: white; padding: 12px; border-radius: 5px; margin-top: 5px;">${contactData.message}</td>
              </tr>
            </table>
          </div>

          <!-- Page Information -->
          <div style="background: #e3f2fd; padding: 25px; margin-top: 20px;">
            <h2 style="color: #125E5A; margin-top: 0; font-size: 20px;">🌐 Page Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">📄 Page Name:</td>
                <td style="padding: 8px 0; color: #333; background: white; padding: 8px 12px; border-radius: 5px; font-weight: 500;">${contactData.pageName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">🔗 Page URL:</td>
                <td style="padding: 8px 0;"><a href="${contactData.pageUrl}" style="color: #125E5A; word-break: break-all;">${contactData.pageUrl}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📅 Date:</td>
                <td style="padding: 8px 0; color: #333;">${contactData.Date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">⏰ Time:</td>
                <td style="padding: 8px 0; color: #333;">${contactData.time}</td>
              </tr>
            </table>
          </div>

          <!-- Action Buttons -->
          <div style="background: #fff; padding: 25px; margin-top: 20px; text-align: center; border: 2px dashed #125E5A; border-radius: 10px;">
            <h3 style="color: #125E5A; margin-top: 0;">Quick Actions</h3>
            <a href="mailto:${contactData.email}" style="display: inline-block; background: #125E5A; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px; font-weight: bold;">📧 Reply to Customer</a>
            <a href="tel:${contactData.phoneNumber}" style="display: inline-block; background: #1A8781; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px; font-weight: bold;">📞 Call Customer</a>
          </div>

          <!-- Footer -->
          <div style="background: #2c3e50; color: #ecf0f1; padding: 20px; margin-top: 20px; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">🤖 This email was sent automatically from your BIS Certifications website</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Please respond to the customer as soon as possible</p>
          </div>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(
      "✅ Contact email sent successfully to admin@bis-certifications.com"
    );
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error(" Error sending contact email:", error);
    return { success: false, error: error.message };
  }
};

// Function to send appointment form email
export const sendAppointmentEmail = async (appointmentData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@bis-certifications.com",
      subject: `🗓️ New Appointment Request - ${appointmentData.pageName}`,  
      replyTo: appointmentData.email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Appointment Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #125E5A 0%, #1A8781 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📅 New Appointment Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">BIS Certifications Website</p>
          </div>

          <!-- Contact Details -->
          <div style="background: #f8f9fa; padding: 25px; border-left: 4px solid #125E5A;">
            <h2 style="color: #125E5A; margin-top: 0; font-size: 20px;">👤 Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">📛 Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📧 Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${appointmentData.email}" style="color: #125E5A; text-decoration: none;">${appointmentData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📱 Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${appointmentData.phoneNumber}" style="color: #125E5A; text-decoration: none;">${appointmentData.phoneNumber}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">🏢 Company:</td>
                <td style="padding: 8px 0; color: #333; background: white; padding: 8px 12px; border-radius: 5px; font-weight: 500;">${appointmentData.companyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📦 Product:</td>
                <td style="padding: 8px 0; color: #333; background: white; padding: 8px 12px; border-radius: 5px; font-weight: 500;">${appointmentData.productName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">💬 Message:</td>
                <td style="padding: 8px 0; color: #333; line-height: 1.5; background: white; padding: 12px; border-radius: 5px; margin-top: 5px;">${appointmentData.message}</td>
              </tr>
            </table>
          </div>

          <!-- Page Information -->
          <div style="background: #e3f2fd; padding: 25px; margin-top: 20px;">
            <h2 style="color: #125E5A; margin-top: 0; font-size: 20px;">🌐 Page Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">📄 Page Name:</td>
                <td style="padding: 8px 0; color: #333; background: white; padding: 8px 12px; border-radius: 5px; font-weight: 500;">${appointmentData.pageName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">🔗 Page URL:</td>
                <td style="padding: 8px 0;"><a href="${appointmentData.pageUrl}" style="color: #125E5A; word-break: break-all;">${appointmentData.pageUrl}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">📅 Date:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.Date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">⏰ Time:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.time}</td>
              </tr>
            </table>
          </div>

          <!-- Action Buttons -->
          <div style="background: #fff; padding: 25px; margin-top: 20px; text-align: center; border: 2px dashed #125E5A; border-radius: 10px;">
            <h3 style="color: #125E5A; margin-top: 0;">Quick Actions</h3>
            <a href="mailto:${appointmentData.email}" style="display: inline-block; background: #125E5A; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px; font-weight: bold;">📧 Reply to Customer</a>
            <a href="tel:${appointmentData.phoneNumber}" style="display: inline-block; background: #1A8781; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 5px; font-weight: bold;">📞 Call Customer</a>
          </div>

          <!-- Footer -->
          <div style="background: #2c3e50; color: #ecf0f1; padding: 20px; margin-top: 20px; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">🤖 This email was sent automatically from your BIS Certifications website</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Please respond to the customer as soon as possible</p>
          </div>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(
      "✅ Appointment email sent successfully to admin@bis-certifications.com"
    );
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("❌ Error sending appointment email:", error);
    return { success: false, error: error.message };
  }
};
