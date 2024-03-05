import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("pruebas en <GifItem/>", () => {
  const title = "saitama";
  const url = "https://one-Puch.com/saitama.jpg";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
