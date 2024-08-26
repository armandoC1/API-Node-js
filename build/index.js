"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //para usar un moddleware que transforma de body a json 
const PORT = 3001;
app.get('/ping', (_req, res) => {
    console.log('someane pinged her !!!');
    res.send('pong')
});
    app.listen(PORT, () => {
        console.log(`server running in port ${PORT}`);
    
});
