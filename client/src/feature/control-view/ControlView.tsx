import { useState } from 'react';
import Header from 'entities/header';
import UploadModal from 'feature/upload-modal';
import './index.scss';
import { FileMimeType, View } from 'shared/types/index.type';

type Props = {
    view: View,
    changeView: (view: View) => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeSelect: (type?: FileMimeType) => void;
}
function ViewActions(props: Props) {
    const [modalOpen, setModalOpen] = useState(false);
 
    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }
    
    return (
        <div className='header'>
            <div className='container'>
                <Header 
                    handleOpenModal={handleOpenModal}
                    {...props}
                />
            </div>
                
            {modalOpen && <UploadModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}

export default ViewActions;
