const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe("Pruebas en funciones de Heroes", () => {
  test("debe de retornar un heroe ", () => {
    //
    const id = 10;
    const heroe = getHeroeById(id);
    console.log(heroe);
    //const heroeData = heroes.find((h) => h.id === id);
    //expect(heroe).toEqual(heroeData);

    expect(heroe).toBe(undefined);
  });
  //debe de retonar un arregfle ocn los heroes de DC
  //owner
  //toEqual al arreglo filtrado
  test("debe de retonar un arregfle ocn los heroes de DC ", () => {
    //
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    const heroesData = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(heroesData);
  });

  //debe de retornar un arreglo co los heroes de Marvel
  //length=2 //toBe
  test("debe de retornar un arreglo co los heroes de Marvel ", () => {
    //
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes.length).toBe(2);
  });
});
