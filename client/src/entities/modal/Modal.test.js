import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('Modal component ', () => {
    it('matches snapshot', () => {
        const component = renderer.create(
            <Modal title='Hello world' handleCloseModal={() => false}>
                <div>some content</div>
            </Modal>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
