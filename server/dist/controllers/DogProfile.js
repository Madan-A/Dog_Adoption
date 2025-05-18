"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDogProfile = void 0;
const express_1 = __importDefault(require("express"));
const sqlite3_1 = __importDefault(require("sqlite3"));
// Function to fetch a specific dog's profile details by ID
const getDogProfile = (req, res) => {
    console.log("GET /api/dogs/:id route hit");
    console.log("req.params:", req.params);
    console.log("Dog ID:", req.params.id);
    const app = (0, express_1.default)();
    const db = new sqlite3_1.default.Database('./database.db', sqlite3_1.default.OPEN_READWRITE, (err) => {
        if (err) {
            console.error("Error connecting to SQLite database:", err.message);
        }
        else {
            console.log("Connected to the SQLite database");
        }
    });
    // const db = req.app.locals.db; // Get the database instance from app.locals
    const dogId = parseInt(req.params.id, 10); // Extract and validate dog ID
    console.log(`Dog ID: ${dogId}`);
    if (isNaN(dogId)) {
        console.error("Invalid dog ID:", req.params.id);
        res.status(400).json({ error: "Invalid dog ID" });
        return;
    }
    if (!db) {
        console.error("Database instance not found in app.locals.");
        res.status(500).send("Database connection error");
        return;
    }
    console.log("Database successful");
    // SQL query to fetch dog details by ID
    const query = "SELECT * FROM adoption_new WHERE id =?";
    db.get(query, [dogId], (err, row) => {
        if (err) {
            console.error("Error fetching dog profile:", err.message);
            res.status(500).json({ error: "Failed to fetch dog profile" });
        }
        else if (!row) {
            console.log("No dog found with id:", dogId);
            res.status(404).json({ error: "Dog not found" });
        }
        else {
            console.log("Dog profile found:", row); // Log the result
            res.json(row); // Send the dog's details as JSON
        }
    });
};
exports.getDogProfile = getDogProfile;
