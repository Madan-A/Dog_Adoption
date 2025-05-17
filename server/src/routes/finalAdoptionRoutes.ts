import express from "express";
import { } from "../controllers/veterinaryController";
import { FinalAdoption } from "../controllers/finalAdoption";

const router = express.Router();

// Define the login route to use the loginController
router.post("/", FinalAdoption);

export default router;