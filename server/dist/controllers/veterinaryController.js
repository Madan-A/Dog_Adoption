"use strict";
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
exports.Veterinary = void 0;
const Veterinary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription } = req.body;
    // Validate required fields
    if (!dogName || !breed || !age || !gender || !appointmentDate || !address || !pincode || !healthDescription) {
        res.status(400).json({
            error: 'dogName, breed, age, gender, appointmentDate, address, pincode, and healthDescription are all required',
        });
        return;
    }
    const db = req.app.locals.db; // PostgreSQL client or pool
    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
        return;
    }
    const query = `
        INSERT INTO dog (dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `;
    try {
        console.log('Debugging input:', dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription);
        // Run query with positional parameters
        const result = yield db.query(query, [
            dogName,
            breed,
            gender,
            age,
            appointmentDate,
            address,
            pincode,
            healthDescription,
        ]);
        res.status(201).json({
            message: 'Booked Successfully',
            data: result.rows[0], // return the inserted row
        });
    }
    catch (error) {
        console.error('Unexpected error during insertion:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
});
exports.Veterinary = Veterinary;
