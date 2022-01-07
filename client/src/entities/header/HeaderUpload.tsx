type Props = {
    handleOpenModal: () => void;
}

function HeaderUpload({ handleOpenModal }: Props) {

    return (
        <button onClick={handleOpenModal} className='header__upload upload'>
            <img src="./img/upload.svg" alt="upload file" className='upload__img' />
            Upload file
        </button>
    );
}

export default HeaderUpload;
