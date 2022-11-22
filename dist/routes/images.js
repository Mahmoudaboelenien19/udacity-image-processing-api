"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const valdiation_1 = __importDefault(require("../utlities/valdiation"));
const images = express_1.default.Router();
images.use('/images', valdiation_1.default);
exports.default = images;
