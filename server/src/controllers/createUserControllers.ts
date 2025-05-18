// import { error } from 'console';
// import { Request, Response } from 'express';

// export const createUser = async (req: Request, res: Response) => {
//     //res.json({success: true});

//   const { name, phone, email, password } = req.body;

//   // Validate required fields
//   if (!name || !phone || !email || !password) {
//     res.status(400).json({ error: 'Name, phone, email, and password are required' });
//   }

//   const db = req.app.locals.db; // Get the database instance

//   if (!db) {
//     console.error('Database instance not found in app.locals.');
//     res.status(500).json({ error: 'Database connection error'});
//   }

//   const query = `
//     INSERT INTO users (name, phone, email, password)
//     VALUES (?, ?, ?, ?)
//   `;

//   try {
//     // Insert the user into the database
//     console.log("debugging", name, phone, email, password);
    
//     const response = await db.run(query, [name, phone, email, password]);
//     res.status(201).json({
//         message: 'User created successfully',
//         response
//     });

   
//   } catch (error) {
//     console.error('Unexpected error during user creation:', error);
//     res.status(500).json({ error: 'Unexpected server error' });
//   }
// };


// Postgre SQL



// import { Request, Response } from 'express';

// export const createUser = async (req: Request, res: Response) => {
//   const { name, phone, email, password } = req.body;

//   if (!name || !phone || !email || !password) {
//     return res.status(400).json({ error: 'Name, phone, email, and password are required' });
//   }

//   const db = req.app.locals.db;

//   if (!db) {
//     console.error('Database instance not found in app.locals.');
//     return res.status(500).json({ error: 'Database connection error' });
//   }

//   const query = `
//     INSERT INTO users (name, phone, email, password)
//     VALUES ($1, $2, $3, $4)
//     RETURNING id
//   `;

//   try {
//     console.log("debugging", name, phone, email, password);

//     const result = await db.query(query, [name, phone, email, password]);

//     res.status(201).json({
//       message: 'User created successfully',
//       userId: result.rows[0].id,
//     });
//   } catch (error) {
//     console.error('Unexpected error during user creation:', error);
//     res.status(500).json({ error: 'Unexpected server error' });
//   }
// };

// import { Request, Response } from 'express';

// export const createUserControllers = async (req: Request, res: Response): Promise<Response | void> => {
//   const { name, phone, email, password } = req.body;

//   if (!name || !phone || !email || !password) {
//     return res.status(400).json({ error: 'Name, phone, email, and password are required' });
//   }

//   const db = req.app.locals.db;

//   if (!db) {
//     console.error('Database instance not found in app.locals.');
//     return res.status(500).json({ error: 'Database connection error' });
//   }

//   const query = `
//     INSERT INTO users (name, phone, email, password)
//     VALUES ($1, $2, $3, $4)
//     RETURNING id
//   `;

//   try {
//     const result = await db.query(query, [name, phone, email, password]);
//     return res.status(201).json({
//       message: 'User created successfully',
//       userId: result.rows[0].id,
//     });
//   } catch (error) {
//     console.error('Unexpected error during user creation:', error);
//     return res.status(500).json({ error: 'Unexpected server error' });
//   }
// };


import { Request, Response, NextFunction } from 'express';

export const createUserControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
      res.status(400).json({ error: 'Name, phone, email, and password are required' });
      return;
    }

    const db = req.app.locals.db;

    if (!db) {
      console.error('Database instance not found in app.locals.');
      res.status(500).json({ error: 'Database connection error' });
      return;
    }

    const query = `
      INSERT INTO users (name, phone, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;

    const result = await db.query(query, [name, phone, email, password]);
    res.status(201).json({
      message: 'User created successfully',
      userId: result.rows[0].id,
    });
  } catch (error) {
    next(error);
  }
};