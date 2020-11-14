const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

const setCategories = jest.fn();
let wrapper = shallow(<AddCategory setCategories={setCategories} />);
const input = wrapper.find("input");
const value = "Hola mundo";
beforeEach(() => {

    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    jest.clearAllMocks();
});
describe('Pruebas componente AddCategory', () => {

    test('debe mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de cambiar la caja de texto', () => {
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    });
    test('no debe de postear la información on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });
    // test('debe de llamar el setCategorie y limpiar la caja de texto', () => {
    //     wrapper.find('input').simulate('change', { target: { value } });
    //     wrapper.find('form').simulate('submit', { preventDefault() { } });
    //     expect(setCategories).toHaveBeenCalled();
    //     expect(wrapper.find('input').prop('value')).toBe('');


    // })
    //ole


});
