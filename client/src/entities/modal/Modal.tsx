import { useEffect } from 'react';
import './index.scss';

type Props = {
    handleCloseModal: () => void;
    children: React.ReactNode;
    title: string;
}

function Modal({ handleCloseModal, children, title }: Props) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    })
    
    return (
        <div className='modal'> 
            <div className='modal__backdrop'></div>
            <div className='modal__content'>
                <h2 className='modal__header'>{title}</h2>
                <button className='modal__close' onClick={handleCloseModal}>
                    <img src="./img/close.svg" alt="close modal" />
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
