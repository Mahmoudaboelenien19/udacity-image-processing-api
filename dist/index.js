"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./routes/images"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static('../images'));
app.get('/', (req, res) => {
    res.send(`welcome to image resizing app follow this example=>
    http://localhost:3000/api/images?imagename=icelandwaterfall&height=130&width=50
    `);
});
app.get('/api', (req, res) => {
    res.send('put height and width you want ');
});
app.use('/api', images_1.default);
/* start express server */
app.listen(port, () => {
    console.log('server is running');
});
exports.default = app;
