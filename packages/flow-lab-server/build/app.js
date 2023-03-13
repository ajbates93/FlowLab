"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const PORT = 3001;
// app.use('/', (req: Request, res: Response): void => {
//   res.send('Hello world!')
// })
app.use('/user', user_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});