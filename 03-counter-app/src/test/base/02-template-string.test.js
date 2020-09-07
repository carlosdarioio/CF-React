import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";
//desc =
describe("Prueba en 02-template-string.test.js", () => {
  //test=
  test("getSaludo debe de retornar hola nombre ", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);
    console.log(saludo);

    expect(saludo).toBe("Hola " + nombre);
  });

  //getSaludo debe de retornar Hola Carlos si no hay argumento nombre
  test("getSaludo debe de retornar Hola Carlos si no hay argumento nombre ", () => {
    // const nombre = "Carlos";
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
