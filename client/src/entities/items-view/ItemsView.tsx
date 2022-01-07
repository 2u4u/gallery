import { View } from 'shared/types/index.type';
import { FileType } from 'shared/model/reducers/appReducer';
import Grid from 'entities/grid';
import List from 'entities/list';

import './index.scss';

type Props = {
    data: FileType[];
    view: View;
    setModalOpen: (arg: boolean) => void;
    setModalContent: (arg: FileType) => void;
    setModalFileIndex: (arg: number) => void;
}
function ItemsView({ data, view, setModalOpen, setModalContent, setModalFileIndex }: Props) { 
    const handleOpenModal = (file: FileType, fileIndex: number) => {
        setModalOpen(true);
        setModalContent(file);
        setModalFileIndex(fileIndex);
    }
    
    return (
        <div className='items'>
            <div className='container'>
                {data.map((file) => {
                    const fileIndex = data.findIndex((dataFile) => dataFile._id === file._id);
                    return (
                        view === View.grid 
                            ? <Grid file={file} key={file._id} handleOpenModal={() => handleOpenModal(file, fileIndex)} /> 
                            : <List file={file} key={file._id} handleOpenModal={() => handleOpenModal(file, fileIndex)} />
                    )}
                )}
            </div>
        </div>
    );
}

export default ItemsView;
