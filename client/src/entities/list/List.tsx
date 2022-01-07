import { FileType } from 'shared/model/reducers/appReducer';
import './index.scss';

type Props = {
    file: FileType;
    handleOpenModal: () => void;
}

function List({ file, handleOpenModal }: Props) {
    let content = null;

    switch (file.type) {
        case 'image':
            content = (
                <div className='list' onClick={handleOpenModal}>
                    <div className='list__img' style={{ backgroundImage: 'url(' + file.url + ')'}} />
                    <span>{file.name}</span>
                </div>);
            break;
        case 'audio':
        case 'video':
            content = (
                <div className='list' onClick={handleOpenModal}>
                    <div className='list__icon'>
                        <img src={`./img/${file.type}.svg`} alt={file.name} />
                        <div className='list__duration'>{file.duration}</div>
                    </div>
                    <span>{file.name}</span>
                </div>
            )
            break;
        default:
            content = (
                <div className='list' onClick={handleOpenModal}>
                    <div className='list__icon'>
                        <img src={`./img/unknown.svg`} alt='not defined' />
                    </div>
                    <span>{file.name}</span>
                </div>
            )
            break;
    }
    
    return (content);
}

export default List;
