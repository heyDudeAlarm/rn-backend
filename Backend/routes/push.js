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
router.post('/req_record/:id', async (req, res, next) => {
    const userId = req.body;
    let deviceToken = await Auth.getToken(userId);

    let message = {
        token: deviceToken,
        data: { 
            title: "푸시알림제목",
            body: "푸시알림내용입니다.",
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