import renderer from 'react-test-renderer';
import HeaderView from './HeaderView';
import { View } from 'shared/types/index.type';

describe('Header view component ', () => {
    it('matches snapshot', () => {
        const view = View.grid;
        const changeView = () => false;
        const component = renderer.create(
            <HeaderView 
                view={view}
                changeView={changeView}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
