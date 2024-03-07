import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs");
describe("Pruebas en <GifGrid/>", () => {
  const category = "One punch";
  test("debe de mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("cargando.."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetch", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://LocalHost/Saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://LocalHost/Goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
