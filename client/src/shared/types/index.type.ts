export type FileMimeType = 'image' | 'audio' | 'video' | 'all';

export type PreviewType = {
    type: FileMimeType,
    url: string,
    name: string,
    file: File,
    downloaded?: Status,
}

export enum Status {
    success = 'success',
    error = 'error',
    loading = 'loading',
}

export enum View {
    grid,
    list,
}