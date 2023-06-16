const router = require('express').Router();
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();
const { GetObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require('@aws-sdk/lib-storage');

const upload = multer({storage: multer.memoryStorage()});
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