

// import { Request, Response } from 'express';

// export const GroomingForm = async (req: Request, res: Response): Promise<void> => {
//     const { petname, breed, gender,size,aggressive , age } = req.body;

//     // Validate required fields
//     if (!petname || !breed || !gender ||!size || !age || !aggressive ) {
//         res.status(400).json({
          
//             error: 'petname, breed, age, aggressiveness,gender are all required',
//         });
        
//         return; // End execution here
//     }

//     const db = req.app.locals.db; // Get the database instance

//     if (!db) {
//         console.error('Database instance not found in app.locals.');
//         res.status(500).json({ error: 'Database connection error' });
//         return; // End execution here
//     }

//     const query = `
//         INSERT INTO grooming_form  (petname, breed,gender, size, age, aggressive)
//         VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     try {
//         // Log input data for debugging
//         console.log('Debugging input:', petname, breed,gender, size, age, aggressive);

//         // Insert the data into the database
//         const response = await db.run(query, [
//             petname, breed,gender, size, age, aggressive
//         ]);

//         res.status(201).json({
//             message: 'Booked Successfully',
//             response,
//         });
//         return; // End execution here
//     } catch (error) {
//         console.error('Unexpected error during user creation:', error);
//         res.status(500).json({ error: 'Unexpected server error' });
//         return; // End execution here
//     }
// };

// Postgre SQL

import { Request, Response } from 'express';

export const GroomingForm = async (req: Request, res: Response): Promise<void> => {
  const { petname, breed, gender, size, aggressive, age } = req.body;

  // Validate required fields
  if (!petname || !breed || !gender || !size || !age || !aggressive) {
    res.status(400).json({
      error: 'petname, breed, age, aggressiveness, gender, and size are all required',
    });
    return;
  }

  const db = req.app.locals.db; // PostgreSQL client instance

  if (!db) {
    console.error('Database instance not found in app.locals.');
    res.status(500).json({ error: 'Database connection error' });
    return;
  }

  const query = `
    INSERT INTO grooming_form (petname, breed, gender, size, age, aggressive)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `;

  try {
    console.log('Debugging input:', petname, breed, gender, size, age, aggressive);

    const result = await db.query(query, [petname, breed, gender, size, age, aggressive]);

    res.status(201).json({
      message: 'Booked Successfully',
      data: result.rows[0], // Return the inserted record
    });
  } catch (error) {
    console.error('Unexpected error during booking:', error);
    res.status(500).json({ error: 'Unexpected server error' });
  }
};
