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
exports.FinalAdoption = void 0;
const FinalAdoption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question, } = req.body;
    // Validate required fields
    if (!name || !email || !phone || !street || !city || !state || !zipcode || !country || !adoption_date || !notes || !question) {
        res.status(400).json({
            error: 'Name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question are all required',
        });
        return;
    }
    const db = req.app.locals.db; // PostgreSQL client instance
    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
        return;
    }
    const query = `
    INSERT INTO personal_adoption (name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
  `;
    try {
        console.log('Debugging input:', name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question);
        const result = yield db.query(query, [
            name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question,
        ]);
        res.status(201).json({
            message: 'Booked Successfully',
            data: result.rows[0], // Return the inserted row data
        });
    }
    catch (error) {
        console.error('Unexpected error during booking:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
});
exports.FinalAdoption = FinalAdoption;
