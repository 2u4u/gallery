import renderer from 'react-test-renderer';
import PreviewDelete from './PreviewDelete';

describe('Preview delete component ', () => {
    const preview = {
        type: 'image',
        url: 'https://uae-gallery-test-bucket.s3.eu-central-1.amazonaws.com/cat1.png',
        name: 'test image',
        file: 'Fake file',
    };
    const handleDelete = () => false;
    it('matches snapshot', () => {
        const component = renderer.create(
            <PreviewDelete handleDelete={handleDelete} preview={preview} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
