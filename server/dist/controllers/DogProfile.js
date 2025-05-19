"use strict";
// import { Request, Response } from "express";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDogProfile = void 0;
const getDogProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("GET /api/dogs/:id route hit");
    console.log("req.params:", req.params);
    const db = req.app.locals.db; // Use PostgreSQL client from app.locals
    if (!db) {
        console.error("Database instance not found in app.locals.");
        res.status(500).send("Database connection error");
        return;
    }
    const dogId = parseInt(req.params.id, 10);
    if (isNaN(dogId)) {
        console.error("Invalid dog ID:", req.params.id);
        res.status(400).json({ error: "Invalid dog ID" });
        return;
    }
    try {
        const query = "SELECT * FROM adoption_new WHERE id = $1";
        const result = yield db.query(query, [dogId]);
        if (result.rows.length === 0) {
            console.log("No dog found with id:", dogId);
            res.status(404).json({ error: "Dog not found" });
            return;
        }
        console.log("Dog profile found:", result.rows[0]);
        res.json(result.rows[0]);
    }
    catch (error) {
        console.error("Error fetching dog profile:", error);
        res.status(500).json({ error: "Failed to fetch dog profile" });
    }
});
exports.getDogProfile = getDogProfile;
