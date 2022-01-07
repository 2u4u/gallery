import express, { Request, Response } from "express";
import { upload } from '../middleware/multer-aws';
import File from '../database/models/file.model';
import { getFileType } from "../utils/helpers";

const router = express.Router();

type AWSFile = [
    {
        fieldname: string,
        originalname: string,
        encoding: string,
        mimetype: string,
        size: number,
        bucket: string,
        key: string,
        acl: string,
        contentType: string,
        contentDisposition: any,
        contentEncoding: any,
        storageClass: string,
        serverSideEncryption: any,
        metadata: any,
        location: string,
        etag: string,
    }
];

// @route   POST api/upload
// @desk    Save file to folder and add to database
// @access  Public
router.post('/upload', upload.any(), (req: Request, res: Response) => {
    const { originalname: name, contentType, location: url } = (req.files as unknown as AWSFile)[0];
    const { duration } = req.body;
    const type = getFileType(contentType);
    const newFile = new File({
        type,
        name,
        url,
        duration,
    });

    newFile
        .save()
        .then(() => res.sendStatus(200))
        .catch((err: Error) => console.log("Upload file DB error => ", err))

}, (error: Error, req: Request, res: Response) => {
    res.status(400).send({ error: error.message })
})

// @route   GET api/files
// @desk    Get json with data from database
// @access  Public
router.get('/files', (req: Request, res: Response) => {
    File.find({})
        .then((files) => res.status(200).send(files))
        .catch((err: Error) => console.log("Get all files data from DB error => ", err))
})

export default router;
