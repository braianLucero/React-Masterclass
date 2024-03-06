import { render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe("Pruebas en <AddCatefory/>", () => {
  test("debe de cambiar la caja de texto ", () => {
    render(<AddCategory oneNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });
});
