import express from 'express';
import resizingFn from '../utlities/resizing';
import valdiationFn from '../utlities/valdiation';

const images = express.Router();

images.use('/images', valdiationFn, resizingFn);

export default images;
