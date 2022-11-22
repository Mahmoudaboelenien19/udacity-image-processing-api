import express from 'express';
import valdiationFn from '../utlities/valdiation';

const images = express.Router();

images.use('/images', valdiationFn);

export default images;
