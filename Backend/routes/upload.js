const router = require('express').Router();
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();
const { GetObjectCommand, S3Client } = require("@aws-sdk/client-s3");
const { Upload } = require('@aws-sdk/lib-storage');
// API KEY 보관법
const client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const upload = multer({storage: multer.memoryStorage()})

router.post('/audio', upload.single('file'), async (req, res) => {
    const file = req.file;
    //녹
    const userID = req.body.userID;
    const message = req.body.message;
    //AWS s3 버킷에 파일 업로드
    const upload = new Upload({
        client: client,
        params: {
            Bucket: process.env.AWS_BUCKET,
            Key: `audio/audio_${userID}.mp3`,
            Body: file.buffer,
            ContentType: file.mimetype,
        }
    });
    
    upload.done()
        .then(res => {
            console.log(res);

        }).catch(err => {
            console.log(err);
            // res.json({fail: err});
        })
});


router.get('/', (req, res) => {
    res.sendFile(__dirname +'/test.html');
})

router.get('/download', (req, res) => {
    // const response = await client.send(new GetObjectCommand({
    //     Bucket: 'heydudebucket',
    //     Key: req.query.filename
    // }))
})
module.exports = router;