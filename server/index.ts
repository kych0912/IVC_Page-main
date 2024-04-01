import express,{ Request, Response, NextFunction, } from 'express';
import multer from 'multer';
import * as loginController from './controller/login';
import * as editController from './controller/edit';
import * as clientController from './controller/client';
import cors from 'cors';
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
    cb(null, uniqueSuffix)
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

const whitelist = ['https://ivc-inha.co.kr','http://localhost:3000'];

const corsOptions = {
  origin: function (origin:any, callback:any) { 
    if (!origin||whitelist.indexOf(origin) !== -1) { 
      callback(null, true); 
    } else {
      callback(new Error("Not Allowed Origin!")); 
    }
  },
  credentials: true,
  exposedHeaders: ['Content-Disposition'],
};


app.use(cors(corsOptions));

app.post('/api/admin/login', loginController.login);
app.post('/api/admin/register', loginController.register);
app.get('/api/admin/auth', clientController.Auth);
app.get('/api/admin/logout', loginController.logOut);


app.post('/api/admin/editURL', editController.editURL);
app.post('/api/admin/uploadFile',upload.single("file"), editController.uploadFile);
app.put('/api/admin/selectURL/:id', editController.selectURL);
app.put('/api/admin/selectFile/:id', editController.selectFile);
app.delete('/api/admin/deleteURL/:id', editController.deleteURL);
app.delete('/api/admin/deleteFile/:id', editController.deleteFile);
app.get('/api/admin/getURLs', editController.getURLs);
app.get('/api/admin/getFiles', editController.getFiles);
app.get('/api/admin/getFile/:seq', editController.getFileBySeq);

app.get('/api/admin/getURL', clientController.getURL);
app.get('/api/admin/getFile', clientController.getFile);



app.use(function(req, res, next) {
  res.status(404).send({
    message:'Sorry cant find that!'
  });
});

app.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})