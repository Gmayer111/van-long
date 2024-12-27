import { render, screen, within } from "@testing-library/react";
import Tab from "./tab.component";

describe("tab component", () => {
  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/starters/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/soups/pictures`,
    },
  ];
  render(<Tab tabItems={tabItems} />);
  const list = screen.getByRole("list", {
    name: /tabitems/i,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  it("should return a list", () => {
    expect(items.length).toBe(2);
  });

  it("should have right content", () => {
    expect(items[0]).toHaveTextContent("dishs");
  });
});
