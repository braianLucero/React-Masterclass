describe("Pruebas en <DemoComponent/>", () => {
  test("esta prueba no tiene que fallar", () => {
    const mensaje1 = "Hola mundo";

    const mensaje2 = mensaje1.trim();

    expect(mensaje1).toBe(mensaje2);
  });
});
