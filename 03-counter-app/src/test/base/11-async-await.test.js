//const { getImagen } = require("../../base/11-async-await");
import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await y Fetch", () => {
  //
  test("Debe de retonrar url con imagen ", async () => {
    //
    const url = await getImagen();
    console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
