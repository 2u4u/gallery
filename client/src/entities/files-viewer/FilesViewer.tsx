import { FileType } from 'shared/model/reducers/appReducer';

import './index.scss';

type Props = {
    data: FileType[];
    modalContent?: FileType;
    setModalContent: (arg: FileType) => void;
    modalFileIndex: number;
    setModalFileIndex: (arg: number) => void;
}
function FilesViewer({ data, modalContent, setModalContent, modalFileIndex, setModalFileIndex }: Props) {
    const handlePrev = (id?: string) => {
        if (id) {
            setModalContent(data[modalFileIndex - 1])
            setModalFileIndex(modalFileIndex - 1)
        }
    }

    const handleNext = (id?: string) => {
        if (id) {
            setModalContent(data[modalFileIndex + 1])
            setModalFileIndex(modalFileIndex + 1)
        }
    }

    const renderer = (file?: FileType) => {
        let content = null;
        switch (file?.type) {
            case 'image':
                content = (
                    <div className='file-viewer__content'>
                        <img src={file?.url} alt={file?.name} className='file-viewer__file'/>
                    </div>
                )
                break;
            case 'video':
                content = (
                    <div className='file-viewer__content'>
                        <video controls src={file?.url} className='file-viewer__file'>
                            Sorry, your browser doesn&apos;t support embedded <code>videos</code>,
                            but don&apos;t worry, you can <a href={file?.url}>download it</a>
                            and watch it with your favorite video player!
                        </video>
                    </div>
                )
                break;
            case 'audio': 
                content = (
                    <div className='file-viewer__content'>
                        <audio controls src={file?.url} className='file-viewer__file'>
                            Sorry, your browser doesn&apos;t support embedded <code>audio</code>,
                            but don&apos;t worry, you can <a href={file?.url}>download it</a>
                            and listen it with your favorite audio player!
                        </audio>
                    </div>
                )
                break;
            default:
                break;
        }

        return content;
    }
    
    return (
        <div className='file-viewer'>
            {modalFileIndex > 0 ? (
                <div className='file-viewer__action file-viewer__action--prev' onClick={() => handlePrev(modalContent?._id)}>
                    <img src='./img/arrow-left.svg' alt="Previous file" className='file-viewer__icon'/>
                </div>): null
            }
            {renderer(modalContent)}
            <a href={modalContent?.url} target='_blank' className='file-viewer__download' rel="noreferrer">Download</a>
            {modalFileIndex < data.length - 1 ? (
                <div className='file-viewer__action file-viewer__action--next' onClick={() => handleNext(modalContent?._id)}>
                    <img src='./img/arrow-right.svg' alt="Next file" className='file-viewer__icon'/>
                </div>): null
            }
        </div>
    );
}

export default FilesViewer;
