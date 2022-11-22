import express from 'express';
import images from './routes/images';

const app = express();
const port = 3000;
app.use(express.static('../images'));

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send(`welcome to image resizing app follow this example=>
    http://localhost:3000/api/images?imagename=icelandwaterfall&height=130&width=50
    `);
});
app.get('/api', (req: express.Request, res: express.Response): void => {
  res.status(200).send('put height and width you want ');
});

app.use('/api', images);

/* start express server */
app.listen(port, () => {
  console.log('server is running');
});

export default app;
