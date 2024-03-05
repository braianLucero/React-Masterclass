import { getSaludo } from "../../base-pruebas (1)/base-pruebas/02-template-string";
describe("pruebas en <02-template-string/>", () => {
  test('getSaludo debe retornar "Hola Fernando"', () => {
    const name = "Fernando";

    const mensaje = getSaludo(name);

    expect(mensaje).toBe(`Hola ${name}`);
  });
});
