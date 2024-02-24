import express,{ Request, Response, NextFunction, } from 'express';
import * as loginController from './controller/login';
import * as editController from './controller/edit';
import * as clientController from './controller/client';
import db from './data/mysql';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const port = 5000;


//application/x-www-form-urlencoded 정보를 분석
app.use(bodyParser.urlencoded({extended:true}));
//application/json 정보 분석
app.use(bodyParser.json());

app.use(cookieParser());

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

app.post('/api/admin/login', loginController.login);
app.post('/api/admin/register', loginController.register);
app.post('/api/admin/editURL', editController.editURL);
app.get('/api/admin/getURL', clientController.getURL);


app.use(function(req, res, next) {
  res.status(404).send({
    message:'Sorry cant find that!'
  });
});

app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})