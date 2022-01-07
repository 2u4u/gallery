import axios from 'axios';

export const getFiles = async () => {
    try {
        const res = await axios.get(`/api/files`);
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const postFile = async (file: FormData) => {
    try {
        const res = await axios.post(`/api/upload`, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}