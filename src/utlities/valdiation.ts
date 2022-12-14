import express from 'express';
import fs from 'fs';
import path from 'path';
import resizeWithSharp from './resizing';

const valdiationFn = (req: express.Request, res: express.Response) => {
  const imagename = req.query.imagename as unknown as string;
  const width = req.query.width as unknown as string;
  const height = req.query.height as unknown as string;
  const imagePath = path.resolve(
    __dirname,
    `../../images/${imagename}.jpg`
  ) as unknown as string;
  const resizedFolder = path.resolve(
    __dirname,
    `../../thumbnail`
  ) as unknown as string;
  const resizedImgName =
    `${imagename}-${height}-${width}.jpg` as unknown as string;
  const resizedImgPath =
    `${resizedFolder}/${resizedImgName}` as unknown as string;

  /* check if requested image size is available */
  if (!fs.existsSync(imagePath)) {
    res.status(400).send("that image name isn't available");
  } else if (+height <= 0 || height == undefined|| isNaN(parseInt(height))) {
    /* check if requested height is valid */
    res.status(400).send('please put a positive integer for height');
  } else if (+width <= 0 || width == undefined || isNaN(parseInt(width))) {
    /* check if requested width  is valid */
    res.status(400).send('please put a positive integer for width');
  } else if (fs.existsSync(resizedImgPath)) {
    /* check if requested size of image is cached */
    res.sendFile(resizedImgPath);
    console.log(`${resizedImgName} is cached`);
  } else {
    resizeWithSharp(
      imagename,
      imagePath,
      +width,
      +height,
      resizedImgPath
    ).then(()=>{

      res.sendFile(resizedImgPath);
    })
   
  }
}

export default valdiationFn;
