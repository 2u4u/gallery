import { Request } from "express";
import multer from 'multer';
import { removeSpaces } from '../utils/helpers';
import { galleryStorage } from '../constants';

type DestinationCallback = (error: Error | null, destination: string) => void;

const storage = multer.diskStorage({ 
    destination: galleryStorage,
    filename: (_req: Request, file: Express.Multer.File, cb: DestinationCallback) => {
        cb(null, removeSpaces(file.originalname))
    }
});

export const upload = multer({storage})