// import { Request, Response } from 'express';

// export const getSampleData = async (req: Request, res: Response) => {
//   try {
//     const db = req.app.locals.db; // Access db instance
//     const rows = await db.all('SELECT * FROM sample_table'); // Example query
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({ error: 'Database query failed' });
//   }
// };


// Postgre SQL

import { Request, Response } from 'express';

export const getSampleData = async (req: Request, res: Response) => {
  try {
    const db = req.app.locals.db; // Access PostgreSQL client or pool

    const query = 'SELECT * FROM sample_table';
    const result = await db.query(query);

    res.json(result.rows); // PostgreSQL results are in `rows`
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Database query failed' });
  }
};
