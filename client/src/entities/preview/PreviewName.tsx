import { PreviewType } from 'shared/types/index.type';
import './index.scss';

type Props = {
    preview: PreviewType;
}

function PreviewName({ preview }: Props) {
    return (
        <div className='preview__name'>{preview.name}</div>                  
    );
}

export default PreviewName;
