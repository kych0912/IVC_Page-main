import express,{ Request, Response, NextFunction, } from 'express';
import multer from 'multer';
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

app.use(express.static(__dirname));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = new Date().toISOString().replace(/:/g, '-');
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });


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
app.get('/api/admin/getFile', clientController.getFile);
app.post('/api/admin/uploadFile',upload.single("file"), editController.uploadFile)
app.get('/api/admin/auth', clientController.Auth);


app.use(function(req, res, next) {
  res.status(404).send({
    message:'Sorry cant find that!'
  });
});

app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})