"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const loginController = __importStar(require("./controller/login"));
const editController = __importStar(require("./controller/edit"));
const clientController = __importStar(require("./controller/client"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const port = 5000;
//application/x-www-form-urlencoded 정보를 분석
app.use(body_parser_1.default.urlencoded({ extended: true }));
//application/json 정보 분석
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(__dirname));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = new Date().toISOString().replace(/:/g, '-');
        cb(null, uniqueSuffix);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
app.listen(port, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${port}🛡️
    ################################################
  `);
});
app.get('/welcome', (req, res, next) => {
    res.send('welcome!');
});
app.use((0, cors_1.default)({
    origin: 'https://ivc-inha.co.kr',
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.post('/api/admin/login', loginController.login);
app.post('/api/admin/register', loginController.register);
app.get('/api/admin/auth', clientController.Auth);
app.get('/api/admin/logout', loginController.logOut);
app.post('/api/admin/editURL', editController.editURL);
app.post('/api/admin/uploadFile', upload.single("file"), editController.uploadFile);
app.put('/api/admin/selectURL/:id', editController.selectURL);
app.put('/api/admin/selectFile/:id', editController.selectFile);
app.delete('/api/admin/deleteURL/:id', editController.deleteURL);
app.delete('/api/admin/deleteFile/:id', editController.deleteFile);
app.get('/api/admin/getURLs', editController.getURLs);
app.get('/api/admin/getFiles', editController.getFiles);
app.get('/api/admin/getFile/:seq', editController.getFileBySeq);
app.get('/api/admin/getURL', clientController.getURL);
app.get('/api/admin/getFile', clientController.getFile);
app.use(function (req, res, next) {
    res.status(404).send({
        message: 'Sorry cant find that!'
    });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
