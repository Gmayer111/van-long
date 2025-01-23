import { render, screen, within } from "@testing-library/react";
import { TableCells } from "./table-cells.component";

describe("table-cells", () => {
  it("should return image element", () => {
    render(<TableCells rowContent={"/image.jpg"} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute(
      "src",
      "/_next/image?url=%image.jpg&w=640&q=75"
    );
  });
});
