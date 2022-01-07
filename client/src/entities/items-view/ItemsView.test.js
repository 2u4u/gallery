import renderer from 'react-test-renderer';
import ItemsView from './ItemsView';
import { View } from 'shared/types/index.type';

describe('Items view component ', () => {
    it('matches snapshot', () => {
        const data = [
            {
                _id: 'someid',
                type: 'image',
                name: 'test image',
                url: 'https://uae-gallery-test-bucket.s3.eu-central-1.amazonaws.com/cat1.png',
                duration: 'undefined',
                date: Date,
            }
        ]
        const view = View.grid;
        const setModalOpen = () => false;
        const setModalContent = () => false;
        const setModalFileIndex = () => false;
        const component = renderer.create(
            <ItemsView 
                data={data}
                view={view}
                setModalOpen={setModalOpen}
                setModalContent={setModalContent}
                setModalFileIndex={setModalFileIndex}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
