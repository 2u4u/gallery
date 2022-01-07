import { PreviewType } from 'shared/types/index.type';

type Props = {
    preview: PreviewType;
}

function PreviewImage({ preview }: Props) {
    return (
        preview.type === 'image' 
            ? (
                <div className='preview__image' style={{backgroundImage: `url(${preview.url})`}} />
            ) 
            : (
                <div className='preview__icon'>
                    <img src={preview.url} alt={preview.name} className='preview__svg'/>
                </div>
            )
    );
}

export default PreviewImage;
