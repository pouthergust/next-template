import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home Page", () => {
  it("should render the Tegra hero headline", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /tecnologia que simplifica o complexo/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should display the impact stats section", () => {
    render(<Home />);

    const statsHeading = screen.getByRole("heading", {
      name: /numeros que sustentam a primeira impressao/i,
    });
    expect(statsHeading).toBeInTheDocument();
    expect(screen.getByText("+1800")).toBeInTheDocument();
  });

  it("should show the framework steps", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /assessment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /qa e validacao/i })
    ).toBeInTheDocument();
  });
});
