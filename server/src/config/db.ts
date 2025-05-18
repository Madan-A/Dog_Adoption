// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

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

import { Pool } from 'pg';

// Create a new connection pool using the Supabase PostgreSQL URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase SSL
  },
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL (Supabase)');
    return client;
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
    throw new Error('Database connection failed');
  }
};

