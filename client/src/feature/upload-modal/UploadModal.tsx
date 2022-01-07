import Dropzone from 'entities/dropzone';
import Preview from 'entities/preview';
import { useState } from 'react';
import { postFile } from 'shared/api/main';
import { PreviewType, Status } from 'shared/types/index.type';
import Modal from 'entities/modal';
import './index.scss';
import { getDuration } from 'shared/utils/helpers';
import { useDispatch } from 'react-redux';
import { fetchFiles } from 'shared/model/actions/appAction';

type Props = {
    handleCloseModal: () => void;
}

function UploadModal({ handleCloseModal }: Props) {
    const dispatch = useDispatch();
    const [previews, setPreviews] = useState<PreviewType[]>([]);

    const handleDelete = (file: File) => {
        const filteredState = previews.filter((preview) => preview.file.name !== file.name && preview.file.lastModified !== file.lastModified)
        setPreviews([...filteredState]);
    }

    const changeStatus = (fileIndex: number, status: Status) => {
        setPreviews(previews => 
            [
                ...previews.slice(0, fileIndex), 
                {
                    ...previews[fileIndex],
                    downloaded: status,
                }, 
                ...previews.slice(fileIndex + 1)
            ]
        )
    }

    const sendFile = async (file: PreviewType) => {
        const formData = new FormData();
        const duration = await getDuration(file);
        const fileIndex = previews.findIndex((preview) => preview.file.name === file.file.name && preview.file.lastModified === file.file.lastModified);
        formData.append("file", file.file);
        formData.append("duration", duration);
        changeStatus(fileIndex, Status.loading);
        postFile(formData)
            .then(() => {
                changeStatus(fileIndex, Status.success);
                dispatch(fetchFiles());
            })
            .catch(() => changeStatus(fileIndex, Status.error));
    }

    const handleUpload = async () => {
        const filesPromises = previews.map((preview) => sendFile(preview))
        await Promise.all(filesPromises)
    }

    return (
        <Modal
            title='Upload files'
            handleCloseModal={handleCloseModal}
        >
            <Dropzone setPreviews={setPreviews} />
            {
                previews.length
                    ? <Preview previews={previews} handleDelete={handleDelete} handleUpload={handleUpload}/>
                    : null
            }

        </Modal>
    );
}

export default UploadModal;
