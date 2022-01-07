import { Schema, model, Document } from "mongoose";

type FileType = Document;

const FileSchema = new Schema({
    type: String,
    name: String,
    url: String,
    duration: String,
    date: {
        type: Date,
        default: Date.now
    }
});

export default model<FileType>("File", FileSchema);