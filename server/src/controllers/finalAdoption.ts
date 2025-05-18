// import { Request, Response } from 'express';

// export const FinalAdoption = async (req: Request, res: Response): Promise<void> => {
//     const { name, email, phone,street, city, state, zipcode, country,adoption_date,notes,question } = req.body;

//     // Validate required fields
//     if (!name || !email|| !phone ||!street || !city|| !state|| !zipcode || !country || !adoption_date || !notes || !question) {
//         res.status(400).json({
          
//             error: 'Name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question are all required',
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
//         INSERT INTO personal_adoption (name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question)
//         VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)
//     `;

//     try {
//         // Log input data for debugging
//         console.log('Debugging input:', name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question);

//         // Insert the data into the database
//         const response = await db.run(query, [
//             name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question
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

export const FinalAdoption = async (req: Request, res: Response): Promise<void> => {
  const {
    name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question,
  } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !street || !city || !state || !zipcode || !country || !adoption_date || !notes || !question) {
    res.status(400).json({
      error: 'Name,email,phone,street,city,state,zipcode,country,adoption_date,notes,question are all required',
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
    INSERT INTO personal_adoption (name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *
  `;

  try {
    console.log('Debugging input:', name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question);

    const result = await db.query(query, [
      name, email, phone, street, city, state, zipcode, country, adoption_date, notes, question,
    ]);

    res.status(201).json({
      message: 'Booked Successfully',
      data: result.rows[0], // Return the inserted row data
    });
  } catch (error) {
    console.error('Unexpected error during booking:', error);
    res.status(500).json({ error: 'Unexpected server error' });
  }
};

