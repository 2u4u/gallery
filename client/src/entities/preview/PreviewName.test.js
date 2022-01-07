import renderer from 'react-test-renderer';
import PreviewName from './PreviewName';

describe('Preview name component ', () => {
    const preview = {
        type: 'image',
        url: 'https://uae-gallery-test-bucket.s3.eu-central-1.amazonaws.com/cat1.png',
        name: 'test image',
        file: 'Fake file',
    };
    it('matches snapshot', () => {
        const component = renderer.create(
            <PreviewName preview={preview} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
