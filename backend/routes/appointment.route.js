import express from "express";
import { submitAppointment } from "../controllers/appointment.controller.js";

const router = express.Router();

router.post("/submit-appointment", submitAppointment);

export default router; 