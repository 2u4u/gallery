import renderer from 'react-test-renderer';
import PreviewSubmit from './PreviewSubmit';

describe('Preview submit component ', () => {
    const handleUpload = () => false;
    it('matches snapshot', () => {
        const component = renderer.create(
            <PreviewSubmit handleUpload={handleUpload} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
