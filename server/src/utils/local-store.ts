import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { fakeDatabaseFile, galleryName } from "../constants";
import { getFileType, removeSpaces } from './helpers';

type FileType = {
    id: number,
    type: string,
    name: string,
    url: string,
    date: Date,
};
type FakeDatabase = FileType[];

export const saveToFile = (req: Request, res: Response) => {
    fs.readFile(fakeDatabaseFile, 'utf8', function readFileCallback(err, data) {
        const { filename, mimetype } = req.file;
        const name = removeSpaces(path.parse(filename).name);
        const type = getFileType(mimetype);
        const url = galleryName + '/' + filename;

        let database: FakeDatabase;
        let record: FileType;

        if (err) {
            database = [];
            record = {
                id: 1,
                type,
                name,
                url,
                date: new Date(),
            };
        } else {
            database = JSON.parse(data);
            record = {
                id: database.length + 1,
                type,
                name,
                url,
                date: new Date(),
            };
        }

        database.push(record);
        const json = JSON.stringify(database);
        fs.writeFile(fakeDatabaseFile, json, 'utf8', () => {
            res.sendStatus(200);
        });
    })
};

export const getFiles = (res: Response) => {
    fs.readFile(fakeDatabaseFile, 'utf8', function readFileCallback(err, data) {
        if (err) {
            res.status(200).send([]);
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
};