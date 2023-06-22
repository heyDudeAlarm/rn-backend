const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');
const app = express();
dotenv.config({
  path: './.env'
});

const authRouter = require('./routes/auth');
const alarmRouter = require('./routes/alarm');
// const uploadRouter = require('./routes/upload');
const friendRouter = require('./routes/friend');
const audioRouter = require('./routes/audio');

const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

app.set('port', process.env.PORT);

app.get("/hello", (req, res) => {
	res.send("Hello");
})
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: generateSecret(),
  resave: false,
  saveUninitialized: true
}));

app.use('/auth', authRouter);//로그인, 회원가입, 로그아웃
app.use('/alarm', alarmRouter);
// app.use('/upload', uploadRouter);
app.use('/audio', audioRouter);
app.use('/friend', friendRouter); //친구 

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})
