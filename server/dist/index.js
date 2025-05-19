"use strict";
// import express, { Application } from 'express';
// import cors from 'cors';
// import sampleRoute from './routes/sampleRoute';
// import createUser from './routes/createUser';
// import loginRoutes  from './routes/loginRoutes';
// import veterinaryRoutes from './routes/veterinaryRoutes'
// import dogProfileRoutes from './routes/dogProfileRoutes'
// import adoptionRoutes  from './routes/adoptionRoutes';
// import finalAdoptionRoutes from './routes/finalAdoptionRoutes';
// import groomingFormRoutes from './routes/groomingFormRoutes';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db';
// dotenv.config();
// const app: Application = express();
// const PORT = process.env.PORT || 5000;
// // Initialize database and start the server
// (async () => {
//   try {
//     const db = await connectDB();
//     console.log('Connected to SQLite database');
//     // Make db available throughout the app
//     app.locals.db = db;
//     app.use(cors());
//     app.use(express.json());
//     app.use('/api/sample', sampleRoute);
//     app.use('/api/createUser', createUser);
//     app.use('/api/login', loginRoutes );
//     app.use('/api/veterinary', veterinaryRoutes );
//     app.use('/api/dogs', adoptionRoutes );
//     app.use('/api/dogs', dogProfileRoutes);
//     app.use('/api/finalAdoption', finalAdoptionRoutes);
//     app.use('/api/groomingForm', groomingFormRoutes);
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error('Failed to connect to the database', error);
//   }
// })();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Postgre SQL
// import express, { Application } from 'express';
// import cors from 'cors';
// import sampleRoute from './routes/sampleRoute';
// import createUserRoutes from './routes/createUserRoutes';
// import loginRoutes  from './routes/loginRoutes';
// import veterinaryRoutes from './routes/veterinaryRoutes'
// import dogProfileRoutes from './routes/dogProfileRoutes'
// import adoptionRoutes  from './routes/adoptionRoutes';
// import finalAdoptionRoutes from './routes/finalAdoptionRoutes';
// import groomingFormRoutes from './routes/groomingFormRoutes';
// import dotenv from 'dotenv';
// // import { connectDB } from './config/db';
// import pool from './config/db';
// dotenv.config();
// const app: Application = express();
// const PORT = process.env.PORT || 5000;
// // Initialize database and start the server
// (async () => {
//   try {
//     // const db = await connectDB();
//     console.log('Connected to PostgreSQL database (Supabase)');
//     app.locals.db = pool;
//     app.use(cors());
//     app.use(express.json());
//     app.use('/api/sample', sampleRoute);
//     app.use('/api/createUser', createUserRoutes);
//     app.use('/api/login', loginRoutes );
//     app.use('/api/veterinary', veterinaryRoutes );
//     app.use('/api/dogs', adoptionRoutes );
//     app.use('/api/dogs', dogProfileRoutes);
//     app.use('/api/finalAdoption', finalAdoptionRoutes);
//     app.use('/api/groomingForm', groomingFormRoutes);
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error('Failed to connect to the database', error);
//   }
// })();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const sampleRoute_1 = __importDefault(require("./routes/sampleRoute"));
const createUserRoutes_1 = __importDefault(require("./routes/createUserRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const veterinaryRoutes_1 = __importDefault(require("./routes/veterinaryRoutes"));
const dogProfileRoutes_1 = __importDefault(require("./routes/dogProfileRoutes"));
const adoptionRoutes_1 = __importDefault(require("./routes/adoptionRoutes"));
const finalAdoptionRoutes_1 = __importDefault(require("./routes/finalAdoptionRoutes"));
const groomingFormRoutes_1 = __importDefault(require("./routes/groomingFormRoutes"));
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Test connection by running a simple query
        yield db_1.default.query('SELECT 1');
        console.log('Connected to PostgreSQL database');
        // Make the pool available throughout the app
        app.locals.db = db_1.default;
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use('/api/sample', sampleRoute_1.default);
        app.use('/api/createUser', createUserRoutes_1.default);
        app.use('/api/login', loginRoutes_1.default);
        app.use('/api/veterinary', veterinaryRoutes_1.default);
        app.use('/api/dogs', adoptionRoutes_1.default);
        app.use('/api/dogs', dogProfileRoutes_1.default);
        app.use('/api/finalAdoption', finalAdoptionRoutes_1.default);
        app.use('/api/groomingForm', groomingFormRoutes_1.default);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to the PostgreSQL database', error);
        process.exit(1);
    }
}))();
