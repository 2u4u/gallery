import { PreviewType } from 'shared/types/index.type';
import PreviewDelete from './PreviewDelete';
import PreviewStatus from './PreviewStatus';
import PreviewSubmit from './PreviewSubmit';
import PreviewImage from './PreviewImage';
import PreviewName from './PreviewName';
import './index.scss';

type Props = {
    previews: PreviewType[];
    handleDelete: (file: File) => void;
    handleUpload: () => void;
}

function Preview({ previews, handleDelete, handleUpload }: Props) {
    return (
        <>
            <div className='preview'>
                {previews.map((preview, index) => 
                    <div key={index} className='preview__item'>
                        <div className='preview__block'>
                            <PreviewImage preview={preview} />
                            <PreviewName preview={preview} />
                            <PreviewStatus preview={preview} />
                        </div>
                        <PreviewDelete preview={preview} handleDelete={handleDelete} />
                    </div>)
                }
            </div>

            <PreviewSubmit handleUpload={handleUpload} />
        </>
    );
}

export default Preview;
