import express, { Application } from 'express';
import cors from 'cors';
import sampleRoute from './routes/sampleRoute';
import createUser from './routes/createUser';
import loginRoutes  from './routes/loginRoutes';
import veterinaryRoutes from './routes/veterinaryRoutes'
import dogProfileRoutes from './routes/dogProfileRoutes'
import adoptionRoutes  from './routes/adoptionRoutes';
import finalAdoptionRoutes from './routes/finalAdoptionRoutes';
import groomingFormRoutes from './routes/groomingFormRoutes';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5000;
// Initialize database and start the server
(async () => {
  try {
    const db = await connectDB();
    console.log('Connected to SQLite database');
    // Make db available throughout the app
    app.locals.db = db;
    app.use(cors());
    app.use(express.json());
    app.use('/api/sample', sampleRoute);
    app.use('/api/createUser', createUser);
    app.use('/api/login', loginRoutes );
    app.use('/api/veterinary', veterinaryRoutes );
    app.use('/api/dogs', adoptionRoutes );
    app.use('/api/dogs', dogProfileRoutes);
    app.use('/api/finalAdoption', finalAdoptionRoutes);
    app.use('/api/groomingForm', groomingFormRoutes);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
})();
