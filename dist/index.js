"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
// Define the firs Route of APP
app.get('/', (req, res) => {
    const data = "Welcome to my API Restfull Express + Nodemon + Jest + TS + Postman + Mongoose";
    res.send({ data });
});
app.get('/hello', (req, res) => {
    const data = 'Welcome to GET Route: ¡Hello!';
    res.send({ data });
});
// Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
//# sourceMappingURL=index.js.map