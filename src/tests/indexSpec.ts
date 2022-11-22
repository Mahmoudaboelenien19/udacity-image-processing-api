import path from 'path';
import fs from 'fs';
import supertest from 'supertest';
import app from '../index';
import resizeWithSharp from '../utlities/resizing';
const request = supertest(app);

describe('test home page route', () => {
  it('test', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('test validation ', () => {
  it('wrong imagename', async () => {
    const response = await request.get(
      '/api/images?imagename=jj&height=00&width=100'
    );
    console.log(response.text);
    // "that image name isn't available"
    expect(response.text).toBe("that image name isn't available");
  });

  it('wrong height', async () => {
    const response = await request.get(
      '/api/images?imagename=icelandwaterfall&height&width=100'
    );
    expect(response.text).toBe('please put a correct height value');
  });

  it('wrong width', async () => {
    const response = await request.get(
      '/api/images?imagename=icelandwaterfall&height=100&width'
    );

    expect(response.text).toBe('please put a correct width value');
  });
});

describe('check resizing an image', () => {
  it('resizing is done', async () => {
    const imagename = 'icelandwaterfall';

    const imgpath = path.normalize(
      __dirname + `../../../images/${imagename}.jpg`
    );
    const resizedimgpath = path.normalize(
      __dirname + `../../../thumbnail/${imagename}-500-500.jpg`
    );

    await resizeWithSharp(imagename, imgpath, 500, 500, resizedimgpath);
    expect(fs.existsSync(resizedimgpath)).toBeTruthy();
  });
});
