import { retornaArreglo } from "../../base-pruebas (1)/base-pruebas/07-deses-arr";

describe("prueba en <07-deses-arr/>", () => {
  test("retornar un string y un numero  ", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
  });
});
