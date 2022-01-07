import React, { useRef, useState } from 'react';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { FileMimeType } from 'shared/types/index.type';

type Props = {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTypeSelect: (type?: FileMimeType) => void;
}

function HeaderSearch({ handleTypeSelect, handleSearch }: Props) {
    const wrapperRef = useRef<HTMLInputElement>(null);
    const [searchType, setSearchType] = useState<FileMimeType>();
    const [selectOpen, setSelectOpen] = useState(false);

    const handleToggleSelect = () => {
        setSelectOpen(selectOpen => !selectOpen);
    }

    const handleCloseSelect = () => {
        setSelectOpen(false);
    }

    useOutsideClick(wrapperRef, handleCloseSelect);

    const handleTypeClick = (type?: FileMimeType) => {
        handleTypeSelect(type);
        setSearchType(type);
        setSelectOpen(false);
    }

    return (
        <div className='header__search search'> 
            <input id='search' type="text" className='search__input' placeholder='Search' onChange={handleSearch}/>
            <label htmlFor="search" className='search__label'>
                <img src="./img/search.svg" alt="search" />
            </label>
            <div ref={wrapperRef} className='search__filter filter'>
                <div onClick={handleToggleSelect} className='filter__block'>
                    <span className='filter__text'>{searchType}</span>
                    {selectOpen 
                        ? (<button type='button' className='filter__button'>
                            <img src="./img/arrow-up.svg" alt="filter" />
                        </button>)
                        : (<button type='button' className='filter__button'>
                            <img src="./img/arrow-down.svg" alt="filter" />
                        </button>)
                    }
                </div>
                {selectOpen ? (
                    <div className='filter__content'>
                        <button type='button' className='filter__item' onClick={() => handleTypeClick()}><i>--all--</i></button>
                        <button type='button' className='filter__item' onClick={() => handleTypeClick('image')}>image</button>
                        <button type='button' className='filter__item' onClick={() => handleTypeClick('audio')}>audio</button>
                        <button type='button' className='filter__item' onClick={() => handleTypeClick('video')}>video</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default HeaderSearch;
