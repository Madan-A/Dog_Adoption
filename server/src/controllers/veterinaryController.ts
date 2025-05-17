//Working code
// // import { error } from 'console';
// import { Request, Response } from 'express';

// export const Veterinary = async (req: Request, res: Response) => {
//     //res.json({success: true});

//   const { dogName, breed, age, appointementDate,address,pincode,healthDescription } = req.body;

//   // Validate required fields

//   if (!dogName || !breed || !age || !appointementDate || !address || !pincode|| !healthDescription  ) {
//     res.status(400).json({ error: 'dogName, breed, age, appointementDate, address, pincode, healthDescription all are required' });
//   }
  
//   const db = req.app.locals.db; // Get the database instance




//   if (!db) {
//     console.error('Database instance not found in app.locals.');
//     res.status(500).json({ error: 'Database connection error'});
//   }

//   const query = `
//     INSERT INTO dog (dogName, breed, age, appointmentDate,address,pincode,healthDescription)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   try {
//     // Insert the user into the database
//     console.log("debugging", dogName, breed, age, appointementDate,address,pincode,healthDescription);
    
//     const response = await db.run(query, [dogName, breed, age, appointementDate,address,pincode,healthDescription]);
//        res.status(201).json({
//         message: 'Booked Successfully',
//         response
//     });



// } 
//   catch (error) {
//     console.error('Unexpected error during user creation:', error);
//      res.status(500).json({ error: 'Unexpected server error' });
//   }
// };


// import { Request, Response } from 'express';
// import sqlite3 from 'sqlite3';

// // Type the `this` inside the `db.run` callback
// export const Veterinary = async (req: Request, res: Response) => {
//   const { dogName, breed, age, appointementDate, address, pincode, healthDescription } = req.body;

//   // Validate required fields
//   if (!dogName || !breed || !age || !appointementDate || !address || !pincode || !healthDescription) {
//     return res.status(400).json({
//       error: 'dogName, breed, age, appointementDate, address, pincode, healthDescription all are required',
//     });
//   }

//   const db = req.app.locals.db; // Get the database instance

//   if (!db) {
//     console.error('Database instance not found in app.locals.');
//     return res.status(500).json({ error: 'Database connection error' });
//   }

//   const query = `
//     INSERT INTO dog (dogName, breed, age, appointementDate, address, pincode, healthDescription)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   try {
//     // Log for debugging
//     console.log('Inserting data:', dogName, breed, age, appointementDate, address, pincode, healthDescription);

//     // Use db.run to insert the record into the database
//     const response = await new Promise<any>((resolve, reject) => {
//       db.run(query, [dogName, breed, age, appointementDate, address, pincode, healthDescription], function (err) {
//         if (err) {
//           reject(err);
//         } else {
//           // Explicitly cast `this` to `sqlite3.RunResult` or type that fits your context
//           resolve(this); // This will contain the inserted row's details, such as last ID
//         }
//       });
//     });

//     // Respond with success message
//     return res.status(201).json({
//       message: 'Booked Successfully',
//       response, // This will contain the inserted row's details, such as last ID
//     });
//   } catch (error) {
//     console.error('Unexpected error during user creation:', error);
//     return res.status(500).json({ error: 'Unexpected server error' });
//   }
// };

import { Request, Response } from 'express';

export const Veterinary = async (req: Request, res: Response): Promise<void> => {
    const { dogName, breed, gender,age, appointmentDate, address, pincode, healthDescription } = req.body;

    // Validate required fields
    if (!dogName || !breed || !age ||!gender || !appointmentDate || !address || !pincode || !healthDescription) {
        res.status(400).json({
          
            error: 'dogName, breed, age, appointementDate, address, pincode, and healthDescription are all required',
        });
        
        return; // End execution here
    }

    const db = req.app.locals.db; // Get the database instance

    if (!db) {
        console.error('Database instance not found in app.locals.');
        res.status(500).json({ error: 'Database connection error' });
        return; // End execution here
    }

    const query = `
        INSERT INTO dog (dogName, breed,gender, age, appointmentDate, address, pincode, healthDescription)
        VALUES (?, ?, ?, ?, ?, ?, ?,?)
    `;

    try {
        // Log input data for debugging
        console.log('Debugging input:', dogName, breed,gender, age, appointmentDate, address, pincode, healthDescription);

        // Insert the data into the database
        const response = await db.run(query, [
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
            response,
        });
        return; // End execution here
    } catch (error) {
        console.error('Unexpected error during user creation:', error);
        res.status(500).json({ error: 'Unexpected server error' });
        return; // End execution here
    }
};

