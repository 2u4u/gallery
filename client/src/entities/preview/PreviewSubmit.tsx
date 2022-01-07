type Props = {
    handleUpload: () => void;
}

function PreviewSubmit({ handleUpload }: Props) {
    return (
        <div className='preview__block preview__block--footer'>
            <button type='button' onClick={handleUpload} className={'preview__button'} >
                {'Upload'}
            </button>
        </div>
    );
}

export default PreviewSubmit;
