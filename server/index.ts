import express,{ Request, Response, NextFunction } from 'express';
const app = express();
const port = 5000;

app.listen(port,()=>{
  console.log(`
    ################################################
    🛡️  Server listening on port: ${port}🛡️
    ################################################
  `);
})

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});