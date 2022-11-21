import express from 'express';
import sharp from 'sharp';

const resizingFn = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const { resizedImgPath, imagePath, height, width, resizedImgName } =
    res.locals.data;

  try {
    (await sharp(imagePath)
      .resize(+width, +height)
      .toFile(resizedImgPath)) as unknown as HTMLImageElement;
    res.sendFile(resizedImgPath);
    console.log(`${resizedImgName} is saved `);
  } catch (err) {
    res.send('error');
    console.log(err);
  }
};

export default resizingFn;
