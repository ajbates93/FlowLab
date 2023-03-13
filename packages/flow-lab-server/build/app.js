"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const PORT = 3001;
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use((0, cors_1.default)(corsOptions));
app.use('/user', user_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
