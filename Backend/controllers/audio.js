const multer = require("multer");
const { Upload } = require("@aws-sdk/lib-storage");
const { GetObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const Audio = require('../models/Audio');
const upload = multer({ storage: multer.memoryStorage() });

// API KEY 보관법
const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

// /audio/upload/:id
module.exports.upload = (upload.single("file"), async (req, res, next) => {
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

    //업로드 성공하면 상대 유저에게 푸쉬알림(파일다운로드) 전송
    //-> 푸쉬알림 /push/res_record
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
})

module.exports.download = async (req, res) => {
  const response = await client.send(new GetObjectCommand({
    Bucket: bucketName,
    Key: req.query.filename
  }));
}