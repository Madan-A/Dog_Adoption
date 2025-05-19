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
exports.getSampleData = void 0;
const getSampleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = req.app.locals.db; // Access PostgreSQL client or pool
        const query = 'SELECT * FROM sample_table';
        const result = yield db.query(query);
        res.json(result.rows); // PostgreSQL results are in `rows`
    }
    catch (error) {
        console.error('Database query failed:', error);
        res.status(500).json({ error: 'Database query failed' });
    }
});
exports.getSampleData = getSampleData;
