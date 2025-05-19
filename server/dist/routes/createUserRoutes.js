"use strict";
// import express from 'express';
// import { createUser } from '../controllers/createUser';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// router.post('/', createUser);
// export default router;
// import express, { Router } from 'express';
// import { createUserControllers } from '../controllers/createUserControllers';
// const router: Router = express.Router();
// router.post('/', createUserControllers);
// export default router;
// import express, { Router } from 'express';
// import { createUserControllers } from '../controllers/createUserControllers';
// const router: Router = express.Router();
// // Explicitly type the route handler
// router.post('/', (req: express.Request, res: express.Response) => {
//   return createUserControllers(req, res);
// });
// export default router;
const express_1 = __importDefault(require("express"));
const createUserControllers_1 = require("../controllers/createUserControllers");
const router = express_1.default.Router();
router.post('/', createUserControllers_1.createUserControllers);
exports.default = router;
