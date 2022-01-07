import renderer from 'react-test-renderer';
import Grid from './Grid';

describe('Grid component ', () => {
    it('matches snapshot', () => {
        const file = {
            _id: 'someid',
            type: 'image',
            name: 'test image',
            url: 'https://uae-gallery-test-bucket.s3.eu-central-1.amazonaws.com/cat1.png',
            duration: 'undefined',
            date: Date,
        }
        const component = renderer.create(
            <Grid file={file} handleOpenModal={() => false}/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
