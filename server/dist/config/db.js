"use strict";
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // Function to connect to SQLite database
// export const connectDB = async () => {
//   try {
//     const db = await open({
//       filename: './database.db',  // Path to your SQLite database file
//       driver: sqlite3.Database    // Using sqlite3 driver
//     });
//     return db;
//   } catch (error) {
//     console.error('Error connecting to SQLite database:', error);
//     throw new Error('Database connection failed');
//   }
// };
// Postgre SQL
// Correct witl local postgrs sql
// import { Pool } from 'pg';
// import dotenv from 'dotenv';
// dotenv.config();
// const isProduction = process.env.NODE_ENV === 'production';
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: isProduction
//     ? {
//         rejectUnauthorized: false, // Needed for many cloud providers, like Render
//       }
//     : false, // No SSL in local development
// });
// pool.on('connect', () => {
//   console.log('Connected to PostgreSQL');
// });
// export default pool;
// Render Postgres SQL
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // Always use SSL (Render requires it)
//   },
// });
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});
pool.on('connect', () => {
    console.log('Connected to PostgreSQL');
});
exports.default = pool;
