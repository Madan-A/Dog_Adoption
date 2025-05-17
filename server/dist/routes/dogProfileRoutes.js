"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DogProfile_1 = require("../controllers/DogProfile");
const router = express_1.default.Router();
router.get("/:id", DogProfile_1.getDogProfile);
exports.default = router;
