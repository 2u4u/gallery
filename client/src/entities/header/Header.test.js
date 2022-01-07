import renderer from 'react-test-renderer';
import Header from './Header';
import { View } from 'shared/types/index.type';

describe('Header component ', () => {
    it('matches snapshot', () => {
        const view = View.grid;
        const handleOpenModal = () => false;
        const handleSearch = () => false;
        const handleTypeSelect = () => false;
        const changeView = () => false;
        const component = renderer.create(
            <Header 
                view={view}
                handleOpenModal={handleOpenModal}
                handleSearch={handleSearch}
                handleTypeSelect={handleTypeSelect}
                changeView={changeView}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
