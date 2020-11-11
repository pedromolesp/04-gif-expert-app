const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en <GifGridItem/>', () => {
    const title = "Un titulo";
    const url = "http://ole.com";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });
    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(title);
    });
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });
    test('debe tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        const animation = div.prop("className");
        expect(animation.includes('animate__fadeIn')).toBe(true);

    })


});
