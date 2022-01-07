import renderer from 'react-test-renderer';
import FilesViewer from './FilesViewer';

describe('Files viewer component ', () => {
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
        const setModalContent = () => false;
        const modalFileIndex = 0;
        const setModalFileIndex = () => false;
        const component = renderer.create(
            <FilesViewer 
                data={data}
                setModalContent={setModalContent}
                modalFileIndex={modalFileIndex}
                setModalFileIndex={setModalFileIndex}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
