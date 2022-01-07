import renderer from 'react-test-renderer';
import HeaderSearch from './HeaderSearch';

describe('Header search component ', () => {
    it('matches snapshot', () => {
        const handleTypeSelect = () => false;
        const handleSearch = () => false;
        const component = renderer.create(
            <HeaderSearch 
                handleTypeSelect={handleTypeSelect}
                handleSearch={handleSearch}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
