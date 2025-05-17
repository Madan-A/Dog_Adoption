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
exports.FinalAdoption = void 0;
const FinalAdoption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question } = req.body;
    // Validate required fields
    if (!name || !email || !phone || !street || !city || !state || !zipcode || !country || !adoption_date || !notes || !question) {
        res.status(400).json({
            error: 'Name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question are all required',
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
        INSERT INTO personal_adoption (name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question)
        VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)
    `;
    try {
        // Log input data for debugging
        console.log('Debugging input:', name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question);
        // Insert the data into the database
        const response = yield db.run(query, [
            name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question
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
exports.FinalAdoption = FinalAdoption;
