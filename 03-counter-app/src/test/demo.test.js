//nuestra primer prueba
describe("Prueba en el archivo demo.test.js", () => {
  //console.log("hola mundo");
  test("deben de ser iguales los string ", () => {
    //1. inicializacion
    const mensaje = "Hola Mundo";

    //2. estimulo
    const mensaje2 = "Hola Mundo";

    //3. observar el comportamiento con expect#tobevalue
    expect(mensaje).toBe(mensaje2);
  });
});
