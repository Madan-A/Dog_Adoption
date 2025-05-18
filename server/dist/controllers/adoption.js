"use strict";
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
    //const query = 'SELECT * FROM courses;';  // SQL query to fetch all courses from the 'courses' table
    const db = req.app.locals.db; // Get the database connection from app.locals
    if (!db) {
        console.error("Database instance not found in app.locals.");
        res.status(500).send("Database connection error");
    }
    try {
        // Execute the query to get all courses
        const rows = yield db.all("SELECT images,dogName,status,id,breed FROM adoption_new;");
        res.json(rows);
    }
    catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).json({ error: "An unexpected error occurred" });
    }
});
exports.adoption = adoption;
