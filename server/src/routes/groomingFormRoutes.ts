import express from "express";
import { GroomingForm } from "../controllers/groomingForm";

const router = express.Router();

// Define the login route to use the loginController
router.post("/", GroomingForm);

export default router;