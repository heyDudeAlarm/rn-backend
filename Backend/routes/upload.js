const router = require("express").Router();
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const { GetObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");
const Audio = require("../models/Audio");

// API KEY 보관법
const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({ storage: multer.memoryStorage() });

router.post("/audio/:id", upload.single("file"), async (req, res) => {
    //녹음 파일
    const file = req.file;
    //녹음 파일을 받는 유저
    // const receivedUser = req.body.userID;
    //녹음 메세지
    const message = req.body.message;
    //녹음을 한 유저
    const sendUser = req.params.id;

    //AWS s3 버킷에 파일 업로드
    const upload = new Upload({
      client: client,
      params: {
        Bucket: process.env.AWS_BUCKET,
        Key: `audio/audio_${sendUser}.mp3`,
        Body: file.buffer,
        ContentType: file.mimetype,
      },
    });

    upload
      .done()
      .then((res) => {
        let uploadDate = new Date().toLocaleString();

        const data = {
          send_user: sendUser,
          audio_url: res.Location,
          audio_msg: message,
          audio_date: uploadDate,
          received_user: receivedUser,
        };
        console.log(data);
        Audio.insertData(data); //DB에 알람정보 저장
        res.status(200).json(data);
      })
      .catch((err) => {
        res.json({ fail: err });
      });
});

//1. 프로필 사진을 AWS s3에 업로드하기 (완료)
//2. 이미지 객체 url을 DB profile 테이블에 저장하기
router.post('/profile',upload.single('file'), async (req, res) => {
    const file = req.file;
    const userID = req.body.userID;

    const upload = new Upload({
        client: client,
        params: {
            Bucket: 'heydudebucket',
            Key: `image_${userID}.png`,
            Body: file.buffer,
            ContentType: 'image/png',
        },
    });
    upload.done();
    // profile_img : 버킷 폴더 이름
    var img_url = `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/profile_img/${upload.params.Key}`;

    res.status(200).send({ message: "ok", url: img_url })
})

module.exports = router;