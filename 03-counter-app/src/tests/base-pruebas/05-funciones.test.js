import { getUser } from "../../base-pruebas (1)/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../base-pruebas (1)/base-pruebas/05-funciones";

describe("prueba de <05-funciones/>", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = { uid: "ABC123", username: "El_Papi1502" };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto ", () => {
    const name = "braian ";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "ABC567",
      userName: name,
    });
  });
});
