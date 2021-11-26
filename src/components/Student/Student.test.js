import { shallow } from 'enzyme';
import { Student } from "./Student";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('<Student/>', function () {
    let wrapper;
    let name;
    let profession;
    let onClick = jest.fn();

    beforeEach(function () {
        // ARRANGE
        name = 'some_name';
        profession = 'plumber';
        wrapper = shallow(<Student name={name} profession={profession} onClick={onClick}/>);
    });

    it('should render name and profession', function () {
        // ACT
        const rendered_text = wrapper.find('.student').text();

        // ASSERT
        expect(rendered_text.includes(name)).toBe(true);
        expect(rendered_text.includes(profession)).toBe(true);
    });

    describe('when clicking on component', function () {
        it('should call onClick', function () {
            // ACT
            wrapper.simulate('click');

            // ARRANGE
            expect(onClick).toHaveBeenCalled();
        });
    });
});
