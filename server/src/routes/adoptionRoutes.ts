import express from "express";
import  {adoption}  from "../controllers/adoption";

const router = express.Router();

// Define the login route to use the loginController
router.get("/", adoption);

export default router;