"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const veterinaryController_1 = require("../controllers/veterinaryController");
const router = express_1.default.Router();
// Define the login route to use the loginController
router.post("/", veterinaryController_1.Veterinary);
exports.default = router;
