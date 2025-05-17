"use strict";
//Working code
// // import { error } from 'console';
// import { Request, Response } from 'express';
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
exports.GroomingForm = void 0;
const GroomingForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { petname, breed, gender, size, aggressive, age } = req.body;
    // Validate required fields
    if (!petname || !breed || !gender || !size || !age || !aggressive) {
        res.status(400).json({
            error: 'petname, breed, age, aggressiveness,gender are all required',
        });
        return; // End execution here
    }
    const db = req.app.locals.db; // Get the database instance
    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
        return; // End execution here
    }
    const query = `
        INSERT INTO grooming_form  (petname, breed,gender, size, age, aggressive)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    try {
        // Log input data for debugging
        console.log('Debugging input:', petname, breed, gender, size, age, aggressive);
        // Insert the data into the database
        const response = yield db.run(query, [
            petname, breed, gender, size, age, aggressive
        ]);
        res.status(201).json({
            message: 'Booked Successfully',
            response,
        });
        return; // End execution here
    }
    catch (error) {
        console.error('Unexpected error during user creation:', error);
        res.status(500).json({ error: 'Unexpected server error' });
        return; // End execution here
    }
});
exports.GroomingForm = GroomingForm;
