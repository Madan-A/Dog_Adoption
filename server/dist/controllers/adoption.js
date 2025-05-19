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
exports.adoption = void 0;
const adoption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = req.app.locals.db; // This should be your pg Pool or Client instance
    if (!db) {
        console.error("Database instance not found in app.locals.");
        res.status(500).send("Database connection error");
        return;
    }
    try {
        // Use pg client query method
        const result = yield db.query("SELECT images, dogName, status, id, breed FROM adoption_new;");
        res.json(result.rows);
    }
    catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
});
exports.adoption = adoption;
