import renderer from 'react-test-renderer';
import Dropzone from './Dropzone';

describe('Dropzone component ', () => {
    it('matches snapshot', () => {
        const setPreviews = () => false;
        const component = renderer.create(
            <Dropzone 
                setPreviews={setPreviews}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
