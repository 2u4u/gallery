import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from 'shared/model/actions/appAction';
import { AppReducerState } from 'shared/model/reducers';
import { FileType } from 'shared/model/reducers/appReducer';
import ControlView from 'feature/control-view';
import { FileMimeType, View } from 'shared/types/index.type';
import FilesView from 'feature/files-view';
import Modal from 'entities/modal';
import './index.scss';

function Main() {
    const dispatch = useDispatch();
    const [view, setView] = useState(View.grid);
    const [data, setData] = useState<FileType[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [searchType, setSearchType] = useState<FileMimeType>();
    const files: FileType[] = useSelector((state: AppReducerState) => state.appStore.files);
    const err: number | undefined = useSelector((state: AppReducerState) => state.appStore.error);

    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch])

    useEffect(() => {
        setData([...files])
    }, [files])

    const changeView = (view: View) => {
        setView(view);
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const filtered = files.filter((file) => file.name.toLowerCase().includes(value.toLowerCase()) && (searchType ? file.type === searchType : true));
        setData([...filtered]);
        setSearchText(value);
    }

    const handleTypeSelect = (type?: FileMimeType) => {
        const filtered = files.filter((file) => file.name.toLowerCase().includes(searchText.toLowerCase()) && (type ? file.type === type : true));
        setData([...filtered]);
        setSearchType(type);
    }
    
    return (
        <>
            <ControlView 
                changeView={changeView} 
                view={view} 
                handleSearch={handleSearch} 
                handleTypeSelect={handleTypeSelect}
            />
            <FilesView data={data} view={view}/>
            {/* START this is in case of problems with remote server during testing */}
            {err === 504 ? 
                <Modal handleCloseModal={() => false} title='Error'>
                    <p>Server not started</p>
                    <p>Please app contact owner</p>
                </Modal> : null
            }
            {/* END this is in case of problems with remote server during testing */}
            </>
    );
}

export default Main;
