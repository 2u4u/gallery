import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { FileMimeType, View } from 'shared/types/index.type';
import HeaderSearch from './HeaderSearch';
import HeaderUpload from './HeaderUpload';
import HeaderView from './HeaderView';
import './index.scss';

type Props = {
    view: View,
    handleOpenModal: () => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeSelect: (type?: FileMimeType) => void;
    changeView: (view: View) => void;
}

function Header({ handleOpenModal, handleTypeSelect, handleSearch, changeView, view }: Props) {
    const wrapperRef = useRef<HTMLInputElement>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const handleToggleMenu = () => {
        setOpenMenu(openMenu => !openMenu);
    }
    const handleCloseMenu = () => {
        setOpenMenu(false);
    }
    
    useOutsideClick(wrapperRef, handleCloseMenu);

    return (
        <div className='header__block' ref={wrapperRef}>
            <button type='button' onClick={handleToggleMenu} className='header__mobile-button'>
                <img src="./img/menu.svg" alt="mobile menu" className=''/>
            </button>
            <div className={openMenu ? 'header__mobile-menu header__mobile-menu--open' : 'header__mobile-menu'}>
                <div className='header__actions'>
                    <HeaderView changeView={changeView} view={view} />
                    <HeaderUpload handleOpenModal={handleOpenModal} />
                </div>
                <HeaderSearch handleTypeSelect={handleTypeSelect} handleSearch={handleSearch} />
            </div>
        </div>
    );
}

export default Header;
