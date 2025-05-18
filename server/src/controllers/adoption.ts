

// import { Request, Response } from "express";


// export const adoption = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   //const query = 'SELECT * FROM courses;';  // SQL query to fetch all courses from the 'courses' table
//   const db = req.app.locals.db; // Get the database connection from app.locals

//   if (!db) {
//     console.error("Database instance not found in app.locals.");
//     res.status(500).send("Database connection error");
//   }

//   try {
//     // Execute the query to get all courses
//     const rows = await db.all("SELECT images,dogName,status,id,breed FROM adoption_new;");
//     res.json(rows);
// } catch (error) {
//     console.error("Unexpected error:", error);
//     res.status(500).json({ error: "An unexpected error occurred" });
//   }
// };


// Postgre SQL

import { Request, Response } from "express";

export const adoption = async (
  req: Request,
  res: Response
): Promise<void> => {
  const db = req.app.locals.db; // This should be your pg Pool or Client instance

  if (!db) {
    console.error("Database instance not found in app.locals.");
    res.status(500).send("Database connection error");
    return;
  }

  try {
    // Use pg client query method
    const result = await db.query("SELECT images, dogName, status, id, breed FROM adoption_new;");
    res.json(result.rows);
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};





