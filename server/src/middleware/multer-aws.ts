import multer from 'multer';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import { CONFIG } from "../config";
import { removeSpaces } from '../utils/helpers';

aws.config.update({
  secretAccessKey: CONFIG.key,
  accessKeyId: CONFIG.id,
  region: 'eu-central-1'
});

const s3 = new aws.S3();

const storage = multerS3({
    s3,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    bucket: CONFIG.bucket,

    key: function (req, file, cb) {
        cb(null, removeSpaces(file.originalname));
    }
});

export const upload = multer({ storage });
