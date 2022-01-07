import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { PreviewType } from 'shared/types/index.type';
import { getFileType } from 'shared/utils/helpers';
import './index.scss';

type Props = {
    setPreviews: (preview: PreviewType[] | ((prevPreview: PreviewType[]) => PreviewType[])) => void;
}

function Dropzone({ setPreviews }: Props) {
    const handleFileDrop = useCallback(async (acceptedFiles) => {
        const createPreview = (file: File) => {
            const type = getFileType(file.type);
            let preview: PreviewType;
            if (type === 'image') {
                preview = {
                    type: 'image',
                    url: URL.createObjectURL(file),
                    name: file.name,
                    file: file,
                }
            } else {
                preview = {
                    type,
                    url: `./img/${type}.svg`,
                    name: file.name,
                    file: file,
                };
            }
            setPreviews((previews: PreviewType[]) => [...previews, preview]);
        }

        acceptedFiles.forEach((file: File) => createPreview(file))
    }, [setPreviews]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ 
        onDrop: handleFileDrop, 
        accept: '.jpeg, .png, .mpeg, .wav, .mp4, .webm, .mp3', 
    });

    return (
        <div {...getRootProps()} className='dropzone'>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag and drop some files here, or click to select files</p>
            }
        </div>
    );
}

export default Dropzone;
