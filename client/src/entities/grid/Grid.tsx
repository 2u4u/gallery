import { FileType } from 'shared/model/reducers/appReducer';
import './index.scss';

type Props = {
    file: FileType;
    handleOpenModal: () => void;
}

function Grid({ file, handleOpenModal }: Props) {
    let content = null;

    switch (file.type) {
        case 'image':
            content = (
                <div className='grid grid--image' style={{ backgroundImage: 'url(' + file.url + ')'}} onClick={handleOpenModal}>
                    <div className="grid__content"></div>
                </div>
            );
            break;
        case 'audio':
        case 'video':
            content = (
                <div className='grid grid--file' onClick={handleOpenModal}>
                    <div className="grid__content">
                        <div className='grid__block'>
                            <div className='grid__align'>
                                <img alt={file.name} className='grid__img' src={`./img/${file.type}.svg`} />
                            </div>
                        </div>
                    </div>
                    <div className='grid__duration'>{file.duration}</div>
                </div>
            )
            break;
        default:
            content = (
                <div className='grid grid--file'>
                    <div className="grid__content">
                        <div className='grid__block'>
                            <div className='grid__align'>
                                <img alt='not defined' className='grid__img' src={`./img/unknown.svg`} />
                            </div>
                        </div>
                    </div>
                </div>
            )
            break;
    }
    
    return (content);
}

export default Grid;
