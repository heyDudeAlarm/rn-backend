const admin = require('firebase-admin');
const router = require('express').Router();
const Auth = require('../models/Auth');
//푸시 알림
// Firebase Admin SDK
const admin = require("firebase-admin");
var serviceAccount = require("./reactnativeheydude-firebase-adminsdk-w1p6w-1f5fb7587f.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//녹음 요청 버튼을 클릭 했을 때
router.post('/req_record', async (req, res, next) => {
    // /req_record?receiver=3
    // const userId = req.query.sender;
    const receiver = req.query.receiver;
    const sender = req.session.user.user_id;

    let deviceToken = await Auth.getToken(receiver);
    //푸시알림을 보내는 사람
    let user = await Auth.getInfo(sender, "nickname");
    let message = {
        token: deviceToken,
        data: { 
            title: "HeyDude",
            body: `${user}님이 회원님에게 알람 사운드 녹음 요청했습니다!`,
            style: '',
            user: '',
        }
    }

    admin.getMessaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        }).catch((error) => {
            console.log('Error sending message:', error);
        });
});

module.exports = router;