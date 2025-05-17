// import express, { Request, Response } from 'express';
// import sqlite3 from 'sqlite3';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const app = express();


// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to the SQLite database (using database.db)
// const db = new sqlite3.Database('./database.sqlite', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error('Error connecting to SQLite database:', err.message);
//   } else {
//     console.log('Connected to the SQLite database!');
//   }
// });

// // Define the type for a Dog (optional, but helps with TypeScript's type checking)
// interface Dog {
//   id: number;
//   name: string;
//   age: string;
//   gender:string;
//   breed: string;
//   description: string;
//   location:string;
//   status:string;
//   image: string;
//   city:string;
//   address:string;
// }

// // API to get all dogs
// app.get('/api/dogs', (req: Request, res: Response) => {
//   const query = 'SELECT images,dogName,status  FROM adoption_new';  // Query to fetch all dogs
//   db.all(query, [], (err, rows: Dog[]) => {
//     if (err) {
//       console.error('Error fetching dogs:', err.message);
//       res.status(500).json({ error: 'Failed to fetch dogs' });
//     } else {
//       res.json(rows);  // Send the dog data as JSON
//     }
//   });
// });

// // API to get a specific dog's details by ID
// app.get('/api/dogs/:id', (req: Request, res: Response) => {
//   const dogId = req.params.id;  // Get dog ID from the URL parameter
//   const query = 'SELECT * FROM adoption_new WHERE id = ?';  // Query to fetch dog by ID
//   db.get(query, [dogId], (err, row: Dog | undefined) => {
//     if (err) {
//       console.error('Error fetching dog details:', err.message);
//       res.status(500).json({ error: 'Failed to fetch dog details' });
//     } else if (!row) {
//       res.status(404).json({ error: 'Dog not found' });
//     } else {
//       res.json(row);  // Send the dog details as JSON
//     }
//   });
// });

// // Start the server


// export default app;

// import express, { Request, Response } from 'express';
// import sqlite3 from 'sqlite3';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// const router = express.Router(); // Use Router for defining routes

// // Middleware for routes (you can move this to app if needed)
// router.use(cors());
// router.use(bodyParser.json());

// // Connect to the SQLite database (using database.db)
// const db = new sqlite3.Database('./database.sqlite', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error('Error connecting to SQLite database:', err.message);
//   } else {
//     console.log('Connected to the SQLite database!');
//   }
// });

// // Define the type for a Dog (optional, but helps with TypeScript's type checking)
// interface Dog {
//   id: number;
//   name: string;
//   age: string;
//   gender: string;
//   breed: string;
//   description: string;
//   location: string;
//   status: string;
//   image: string;
//   city: string;
//   address: string;
// }

// // API to get all dogs
// router.get('/api/dogs', (req: Request, res: Response) => {
//   const query = 'SELECT images,dogName,status FROM adoption_new';  // Query to fetch all dogs
//   db.all(query, [], (err, rows: Dog[]) => {
//     if (err) {
//       console.error('Error fetching dogs:', err.message);
//       res.status(500).json({ error: 'Failed to fetch dogs' });
//     } else {
//       res.json(rows);  // Send the dog data as JSON
//     }
//   });
// });

// // API to get a specific dog's details by ID
// router.get('/api/dogs/:id', (req: Request, res: Response) => {
//   const dogId = req.params.id;  // Get dog ID from the URL parameter
//   const query = 'SELECT * FROM adoption_new WHERE id = ?';  // Query to fetch dog by ID
//   db.get(query, [dogId], (err, row: Dog | undefined) => {
//     if (err) {
//       console.error('Error fetching dog details:', err.message);
//       res.status(500).json({ error: 'Failed to fetch dog details' });
//     } else if (!row) {
//       res.status(404).json({ error: 'Dog not found' });
//     } else {
//       res.json(row);  // Send the dog details as JSON
//     }
//   });
// });

// export default router; // Export the router, not the app


import { Request, Response } from "express";


export const adoption = async (
  req: Request,
  res: Response
): Promise<void> => {
  //const query = 'SELECT * FROM courses;';  // SQL query to fetch all courses from the 'courses' table
  const db = req.app.locals.db; // Get the database connection from app.locals

  if (!db) {
    console.error("Database instance not found in app.locals.");
    res.status(500).send("Database connection error");
  }

  try {
    // Execute the query to get all courses
    const rows = await db.all("SELECT images,dogName,status,id,breed FROM adoption_new;");
    res.json(rows);
} catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};





