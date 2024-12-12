import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Function to connect to SQLite database
export const connectDB = async () => {
  try {
    const db = await open({
      filename: './database.db',  // Path to your SQLite database file
      driver: sqlite3.Database    // Using sqlite3 driver
    });
    return db;
  } catch (error) {
    console.error('Error connecting to SQLite database:', error);
    throw new Error('Database connection failed');
  }
};
