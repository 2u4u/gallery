import renderer from 'react-test-renderer';
import HeaderUpload from './HeaderUpload';

describe('Header upload component ', () => {
    it('matches snapshot', () => {
        const handleOpenModal = () => false;
        const component = renderer.create(
            <HeaderUpload 
                handleOpenModal={handleOpenModal}
            />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
