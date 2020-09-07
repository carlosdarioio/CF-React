import "@testing-library/dom";
const { getUser, getUsuarioActivo } = require("../../base/05-funciones");

//desc
describe("Pruebas en 05-Funciones", () => {
  test("debe de retornar un objeto ", () => {
    //
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    console.log(user);

    expect(user).toEqual(userTest);
  });
  //getUsuarioActivo debe retornar un objeto
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);
    //const user = getUser();
    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
