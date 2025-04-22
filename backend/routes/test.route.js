import express from "express";
import { createTest } from "../controllers/test.controller.js";

const router = express.Router();

router.post("/create", createTest);

export default router;