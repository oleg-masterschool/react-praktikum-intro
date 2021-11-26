import { render, screen } from '@testing-library/react';
import { App } from './App';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// Arrange // Action // Assert
// describe('App snapshot', function () {
//   it('should render the app', function () {
//     const tree = renderer
//         .create(<App/>)
//         .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
