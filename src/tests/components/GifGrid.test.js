const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
const { useFetchGifs } = require("../../hooks/useFetchGifs");

jest.mock('../../hooks/useFetchGifs');
const category = "One punch";
describe('Pruebas en <GifGrid/>', () => {
    test('debe mostrar el componente corretamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid key={category} category={category} />);
        expect(wrapper).toMatchSnapshot();

    });
    test('debe mostrar items cuando se cargar imágenes', () => {
        const gifs = [
            { id: 23, title: "ole", url: "erger" }
        ]
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });
        const wrapper = shallow(<GifGrid key={category} category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
    });

});