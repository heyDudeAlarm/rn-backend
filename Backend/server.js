const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

// Firebase Admin SDK
const admin = require("firebase-admin");

var serviceAccount = require("./reactnativeheydude-firebase-adminsdk-w1p6w-1f5fb7587f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const authRouter = require('./routes/auth');
const alarmRouter = require('./routes/alarm');
const uploadRouter = require('./routes/upload');
const friendRouter = require('./routes/friend');

app.set('port', process.env.port);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);//로그인, 회원가입, 로그아웃
app.use('/alarm', alarmRouter);
app.use('/upload', uploadRouter);
app.use('/friend', friendRouter); //친구

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})