import sharp from 'sharp';

const resizeWithSharp = async (
  imagename: string,
  imagePath: string,
  width: number,
  height: number,
  resizedImgPath: string
) => {
  try {
    (await sharp(imagePath)
      .resize(width, height)
      .toFile(resizedImgPath)) as unknown as HTMLImageElement;
    const resizedImgName = `${imagename}-${height}-${width}.jpg`;
    console.log(`${resizedImgName} is saved `);
  } catch (err) {
    console.log(err);
  }
};

export default resizeWithSharp;
