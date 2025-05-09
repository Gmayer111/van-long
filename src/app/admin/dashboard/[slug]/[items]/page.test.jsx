import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import DishsDashboard from "src/components/dashboard/dishs-items/dishs-dashboard.component";

describe("Page", () => {
  const dishs = [
    {
      id: 1,
      label: "Soupe Pho",
      price: 12,
      updatedAt: new Date("01 Jan 1970 00:00:00 GMT"),
      createdAt: new Date("01 Jan 1970 00:00:00 GMT"),
    },
  ];
  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/starters/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/starters/pictures`,
    },
  ];
  it("should return loading if no data", async () => {
    render(await Page({ params: "starters" }));
    const loading = screen.getByText("Chargement...");
    expect(loading).toBeInTheDocument();
  });

  it("should return the right title", async () => {
    render(
      <DishsDashboard
        tabItems={tabItems}
        dishServiceTitle="starters"
        dishServiceId={1}
        dishs={dishs}
      />
    );

    const title = screen.getByText("Les starters");
    expect(title).toBeInTheDocument();
  });
});
