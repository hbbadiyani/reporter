import ReactDOM from 'react-dom';
import App from '../../app';

jest.mock('react-dom');

describe('Testing App.jsx', () => {
    it('should render initial view', () => {
        // Arrange
        const deps = {
            translations: {
                languageCode: 'en-US',
                messages: {}
            }
        };

        const sut = new App(deps);
        const container = document.createElement('div');
        container.setAttribute('id', 'my-div');
        document.body.appendChild(container);

        // Act
        sut.render(container);

        // Assert
        expect(ReactDOM.render).toHaveBeenCalledWith(expect.anything(), container);
    });
});
