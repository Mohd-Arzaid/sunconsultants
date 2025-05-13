import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
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
      ,
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    productName: {
      type: String,
      required: true,
      trim: true
    }
  }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema); 