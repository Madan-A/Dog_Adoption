import { Request, Response } from "express";

interface DogProfile {
  id: number;
  dogName: string;
  breed: string;
  age: string;
  gender: string;
  status: string;
  location: string;
  city: string;
  address: string;
  description: string;
  images: string;
}

import express from "express";
import sqlite3 from "sqlite3";


// Function to fetch a specific dog's profile details by ID
export const getDogProfile = (req: Request, res: Response): void => {

//   const app = express();
// const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error("Error connecting to SQLite database:", err.message);
//   } else {
//     console.log("Connected to the SQLite database");
//   }
// });
  console.log("GET /api/dogs/:id route hit");
  console.log("req.params:", req.params);
  console.log("Dog ID:", req.params.id);

  const app = express();
  const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error("Error connecting to SQLite database:", err.message);
    } else {
      console.log("Connected to the SQLite database");
    }
  });

  // const db = req.app.locals.db; // Get the database instance from app.locals
  const dogId = parseInt(req.params.id, 10); // Extract and validate dog ID
  console.log(`Dog ID: ${dogId}`);

  if (isNaN(dogId)) {
    console.error("Invalid dog ID:", req.params.id);
    res.status(400).json({ error: "Invalid dog ID" });
    return;
  }

  if (!db) {
    console.error("Database instance not found in app.locals.");
    res.status(500).send("Database connection error");
    return;
  }
  console.log("Database successful");

  // SQL query to fetch dog details by ID
  const query = "SELECT * FROM adoption_new WHERE id =?";

  db.get(query, [dogId], (err: Error | null, row: DogProfile | undefined) => {
    if (err) {
      console.error("Error fetching dog profile:", err.message);
      res.status(500).json({ error: "Failed to fetch dog profile" });
    } else if (!row) {
      console.log("No dog found with id:", dogId);
      res.status(404).json({ error: "Dog not found" });
    } else {
      console.log("Dog profile found:", row); // Log the result
      res.json(row); // Send the dog's details as JSON
    }
  });
}