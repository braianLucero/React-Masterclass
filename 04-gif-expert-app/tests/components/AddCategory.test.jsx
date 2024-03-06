import { render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe("Pruebas en <AddCatefory/>", () => {
  test("debe de cambiar la caja de texto ", () => {
    render(<AddCategory oneNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si el input tiene un valor ", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();
    render(<AddCategory oneNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input esta vacio ", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory oneNewCategory={onNewCategory} />);
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
