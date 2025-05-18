

// import { Request, Response } from 'express';

// export const Veterinary = async (req: Request, res: Response): Promise<void> => {
//     const { dogName, breed, gender,age, appointmentDate, address, pincode, healthDescription } = req.body;

//     // Validate required fields
//     if (!dogName || !breed || !age ||!gender || !appointmentDate || !address || !pincode || !healthDescription) {
//         res.status(400).json({
          
//             error: 'dogName, breed, age, appointementDate, address, pincode, and healthDescription are all required',
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
//         INSERT INTO dog (dogName, breed,gender, age, appointmentDate, address, pincode, healthDescription)
//         VALUES (?, ?, ?, ?, ?, ?, ?,?)
//     `;

//     try {
//         // Log input data for debugging
//         console.log('Debugging input:', dogName, breed,gender, age, appointmentDate, address, pincode, healthDescription);

//         // Insert the data into the database
//         const response = await db.run(query, [
//             dogName,
//             breed,
//             gender,
//             age,
//             appointmentDate,
//             address,
//             pincode,
//             healthDescription,
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

export const Veterinary = async (req: Request, res: Response): Promise<void> => {
    const { dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription } = req.body;

    // Validate required fields
    if (!dogName || !breed || !age || !gender || !appointmentDate || !address || !pincode || !healthDescription) {
        res.status(400).json({
            error: 'dogName, breed, age, gender, appointmentDate, address, pincode, and healthDescription are all required',
        });
        return;
    }

    const db = req.app.locals.db; // PostgreSQL client or pool

    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
        return;
    }

    const query = `
        INSERT INTO dog (dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
    `;

    try {
        console.log('Debugging input:', dogName, breed, gender, age, appointmentDate, address, pincode, healthDescription);

        // Run query with positional parameters
        const result = await db.query(query, [
            dogName,
            breed,
            gender,
            age,
            appointmentDate,
            address,
            pincode,
            healthDescription,
        ]);

        res.status(201).json({
            message: 'Booked Successfully',
            data: result.rows[0],  // return the inserted row
        });
    } catch (error) {
        console.error('Unexpected error during insertion:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
};
