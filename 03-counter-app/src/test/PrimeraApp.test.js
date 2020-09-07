//imr=
import React from "react";
//import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  //pruebas con extend-expect
  /*test('debe de mostrar el mensaje "Hola soy Goku" ', () => {
    //
    const saludo = "Hola soy Goku";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });*/

  //pruebas con Enzyme
  test("debe d emostrra <PrimeraApp/> correctamente ", () => {
    const saludo = "Hola Soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el susbtitulo enviado por props ", () => {
    const saludo = "Hola Soy Goku";
    const subtitulo = "Soy subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
  });
});
