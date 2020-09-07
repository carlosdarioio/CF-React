import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp/>", () => {
  let wrapper = shallow(<CounterApp />);
  //beforeEach sirve ára ejecutar algo antes de cada test
  //util para reinicializar todo
  beforeEach(() => {
    console.log("beforeEach");
    wrapper = shallow(<CounterApp />);
  });
  //tarea
  /*
  1. Crera las siguientes pruebas para el <CounterApp/>
        *debe de mostrr <CounterApp/> correctamente (hacer match con un snapchot)
        y sus valores por defecto        
  */
  test("debe de mostrar <CounterApp/> correctamente", () => {
    //const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  //
  /*
   *debe de mostrar el valor por defecto de 100
   *usar el wrapper.find, tomando el elemento html donde se muestra el valor de contador
   */
  test("debe de mostrar el valor por defecto de 100", () => {
    //
    const wrapper = shallow(<CounterApp value={100} />);
    const contadorval = wrapper.find("h2").text().trim();
    console.log(contadorval);
    expect(contadorval).toBe("100");
  });

  test("debe de incrementar con el botón de +1 ", () => {
    //const wrapper = shallow(<CounterApp />);

    //const btn1 = wrapper.find("button").at(0);
    //console.log(btn1.html());

    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("debe de decrementar con el botón de -1 ", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("debe de colocar el valor por defecto con el btn reset ", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    console.log(counterText);
    expect(counterText).toBe("10");
  });
});
