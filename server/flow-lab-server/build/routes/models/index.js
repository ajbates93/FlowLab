"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("../../controllers/models"));
const router = express_1.default.Router();
// GET /models
router.get('/', models_1.default.get);
exports.default = router;
