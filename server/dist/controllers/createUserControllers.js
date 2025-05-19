"use strict";
// import { error } from 'console';
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
exports.createUserControllers = void 0;
const createUserControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, email, password } = req.body;
        if (!name || !phone || !email || !password) {
            res.status(400).json({ error: 'Name, phone, email, and password are required' });
            return;
        }
        const db = req.app.locals.db;
        if (!db) {
            console.error('Database instance not found in app.locals.');
            res.status(500).json({ error: 'Database connection error' });
            return;
        }
        const query = `
      INSERT INTO users (name, phone, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
        const result = yield db.query(query, [name, phone, email, password]);
        res.status(201).json({
            message: 'User created successfully',
            userId: result.rows[0].id,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUserControllers = createUserControllers;
