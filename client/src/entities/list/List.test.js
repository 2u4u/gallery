import renderer from 'react-test-renderer';
import List from './List';

describe('List component ', () => {
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
            <List file={file} handleOpenModal={() => false}/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
