import { PreviewType } from 'shared/types/index.type';

type Props = {
    preview: PreviewType;
    handleDelete: (file: File) => void;
}

function PreviewDelete({ preview, handleDelete }: Props) {
    return (preview.downloaded !== undefined ? null :  
        (
            <button onClick={() => handleDelete(preview.file)}>
                <img src="./img/close.svg" alt="close modal" className='preview__close'/>
            </button>
        )
    );
}

export default PreviewDelete;
