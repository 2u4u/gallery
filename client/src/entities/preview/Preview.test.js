import renderer from 'react-test-renderer';
import Preview from './Preview';

describe('Preview component ', () => {
    const previews = [
        {
            type: 'image',
            url: 'https://uae-gallery-test-bucket.s3.eu-central-1.amazonaws.com/cat1.png',
            name: 'test image',
            file: 'Fake file',
        }
    ];
    const handleDelete = () => false;
    const handleUpload = () => false;
    it('matches snapshot', () => {
        const component = renderer.create(
            <Preview handleDelete={handleDelete} handleUpload={handleUpload} previews={previews} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
