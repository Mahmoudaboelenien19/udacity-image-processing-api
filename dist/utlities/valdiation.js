"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const resizing_1 = __importDefault(require("./resizing"));
const valdiationFn = (req, res) => {
    const imagename = req.query.imagename;
    const width = req.query.width;
    const height = req.query.height;
    const imagePath = path_1.default.resolve(__dirname, `../../images/${imagename}.jpg`);
    const resizedFolder = path_1.default.resolve(__dirname, `../../thumbnail`);
    const resizedImgName = `${imagename}-${height}-${width}.jpg`;
    const resizedImgPath = `${resizedFolder}/${resizedImgName}`;
    /* check if requested image size is available */
    if (!fs_1.default.existsSync(imagePath)) {
        res.status(400).send("that image name isn't available");
    }
    else if (+height <= 0 || height == undefined || isNaN(parseInt(height))) {
        /* check if requested height is valid */
        res.status(400).send('please put a positive integer for height');
    }
    else if (+width <= 0 || width == undefined || isNaN(parseInt(width))) {
        /* check if requested width  is valid */
        res.status(400).send('please put a positive integer for width');
    }
    else if (fs_1.default.existsSync(resizedImgPath)) {
        /* check if requested size of image is cached */
        res.sendFile(resizedImgPath);
        console.log(`${resizedImgName} is cached`);
    }
    else {
        (0, resizing_1.default)(imagename, imagePath, +width, +height, resizedImgPath).then(() => {
            res.sendFile(resizedImgPath);
        });
    }
};
exports.default = valdiationFn;
