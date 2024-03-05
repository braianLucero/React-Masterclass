import { getHeroeByIdAsync } from "../../base-pruebas (1)/base-pruebas/09-promesas";

describe("pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("debe de retornar un Error si el heroe no existe ", () => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("no se pudo encontrar el Heroe");
      done();
    });
  });
});
