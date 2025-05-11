import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
          },

          phoneNumber: {
            type: String,
            required: true,
            trim: true
          },
          message: {
            type: String,
            required: true,
            trim: true
          },
          pageUrl: {
            type: String,
            required: true,
            trim: true
          },
          pageName: {
            type: String,
            required: true,
            trim: true
          },
          Date: {
            type: String,
            required: true
          },
          time: {
            type: String,
            required: true
          }
    }
);

export const Contact = mongoose.model("Contact", contactSchema);