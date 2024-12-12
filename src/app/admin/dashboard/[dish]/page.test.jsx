import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import StartersDashboard from "src/components/dashboard/starters/starters-dashboard.component";

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
  it("should return loading if no data", async () => {
    render(await Page({ params: "starters" }));
    const loading = screen.getByText("Chargement...");
    expect(loading).toBeInTheDocument();
  });

  it("should return the right title", async () => {
    render(
      <StartersDashboard
        dishServiceTitle="starters"
        dishServiceId={1}
        dishs={dishs}
      />
    );

    const title = screen.getByText("Les starters");
    expect(title).toBeInTheDocument();
  });
});
