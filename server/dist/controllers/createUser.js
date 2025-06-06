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
exports.createUser = void 0;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.json({success: true});
    const { name, phone, email, password } = req.body;
    // Validate required fields
    if (!name || !phone || !email || !password) {
        res.status(400).json({ error: 'Name, phone, email, and password are required' });
    }
    const db = req.app.locals.db; // Get the database instance
    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
    }
    const query = `
    INSERT INTO users (name, phone, email, password)
    VALUES (?, ?, ?, ?)
  `;
    try {
        // Insert the user into the database
        console.log("debugging", name, phone, email, password);
        const response = yield db.run(query, [name, phone, email, password]);
        res.status(201).json({
            message: 'User created successfully',
            response
        });
    }
    catch (error) {
        console.error('Unexpected error during user creation:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
});
exports.createUser = createUser;
