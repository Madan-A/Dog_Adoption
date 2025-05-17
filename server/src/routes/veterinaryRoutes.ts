import express from "express";
import { Veterinary } from "../controllers/veterinaryController";

const router = express.Router();

// Define the login route to use the loginController
router.post("/", Veterinary);

export default router;