import { FileMimeType, PreviewType } from "shared/types/index.type";

export const addLeadingZero = (num: number) => {
    let withLeadingZero = num.toString();
    if (num < 1) {
        withLeadingZero = '00';
    } else if (num < 10) {
        withLeadingZero = '0' + num;
    }
    
    return withLeadingZero
}

export const getCorrectHMS = (sec: number) => {
    sec = Number(Math.ceil(sec));
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor(sec % 3600 / 60);
    const seconds = Math.floor(sec % 3600 % 60);

    const hoursFull = addLeadingZero(hours);
    const minutesFull = addLeadingZero(minutes);
    const secondsFull = addLeadingZero(seconds);

    return hours 
        ? hoursFull + ':' + minutesFull + ':' + secondsFull 
        : minutesFull + ':' + secondsFull;
}

export const getFileType = (mimetype: string): FileMimeType => {
    return mimetype.split('/')[0] as FileMimeType;
}

export const getVideoDuration = (file: File) => {
    return new Promise<string>((resolve) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = function() {
            window.URL.revokeObjectURL(video.src);
            resolve(getCorrectHMS(video.duration));
        }
        video.src = URL.createObjectURL(file);
    })
}

export const getAudioDuration = (file: File) => {
    return new Promise<string>((resolve) => {
        const audio = document.createElement('audio');
        audio.preload = 'metadata';
        audio.onloadedmetadata = function() {
            window.URL.revokeObjectURL(audio.src);
            resolve(getCorrectHMS(audio.duration));
        }
        audio.src = URL.createObjectURL(file);
    })
}

export const getDuration = async(preview: PreviewType) => {
    let duration = '0';
    if (preview.type === 'video') {
        duration = await getVideoDuration(preview.file);
    } else if (preview.type === 'audio') {
        duration =  await getAudioDuration(preview.file);
    }

    return duration;
}