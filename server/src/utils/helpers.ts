export const removeSpaces = (name: string) => {
    return name.replace(/ /g, '_');
}
export const getFileType = (mimetype: string) => {
    return mimetype.split('/')[0];
}