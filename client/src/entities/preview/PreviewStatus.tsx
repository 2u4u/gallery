import { PreviewType } from 'shared/types/index.type';

type Props = {
    preview: PreviewType;
}

function PreviewStatus({ preview }: Props) {
    return (
        <div className='preview__status'>
            {
                preview.downloaded ? 
                    <img 
                        src={`./img/${preview.downloaded}.svg`} 
                        alt={preview.downloaded} 
                        className={preview.downloaded === 'loading' ? 'preview__spin' : 'preview__svg'}
                    /> : 
                    null
            }
        </div>
    );
}

export default PreviewStatus;
