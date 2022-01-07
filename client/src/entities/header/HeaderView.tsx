import { View } from 'shared/types/index.type';

type Props = {
    view: View,
    changeView: (view: View) => void;
}

function HeaderView({ changeView, view}: Props) {
    return (
        <div className='items-view'>
            <button type='button' className='items-view__item' onClick={() => changeView(View.list)}>
                <img src={view === View.list ? './img/list-active.svg' : './img/list.svg'} alt="list" />
            </button>
            <button type='button' className='items-view__item' onClick={() => changeView(View.grid)}>
                <img src={view === View.grid ? './img/grid-active.svg' : './img/grid.svg'} alt="grid" />
            </button>
        </div>
    );
}

export default HeaderView;
