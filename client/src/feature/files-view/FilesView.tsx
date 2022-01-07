import { useState } from 'react';
import { View } from 'shared/types/index.type';
import { FileType } from 'shared/model/reducers/appReducer';
import Modal from 'entities/modal';
import FilesViewer from 'entities/files-viewer';
import ItemsView from 'entities/items-view';
import './index.scss';

type Props = {
    data: FileType[];
    view: View;
}
function FilesView({ data, view }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<FileType>();
    const [modalFileIndex, setModalFileIndex] = useState(0);

    const handleCloseModal = () => {
        setModalOpen(false);
    }
    
    return (
        <>
            <ItemsView 
                data={data}
                view={view}
                setModalOpen={setModalOpen}
                setModalContent={setModalContent}
                setModalFileIndex={setModalFileIndex}
            />
                
            {modalOpen && 
                <Modal handleCloseModal={handleCloseModal} title='File viewer'>
                    <FilesViewer 
                        data={data}
                        modalContent={modalContent}
                        setModalContent={setModalContent}
                        modalFileIndex={modalFileIndex}
                        setModalFileIndex={setModalFileIndex}
                    />
                </Modal>
            }
        </>
    );
}

export default FilesView;
