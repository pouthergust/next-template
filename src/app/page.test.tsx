import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home Page", () => {
  it("should render the page with Next.js logo", () => {
    render(<Home />);

    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  it("should display the main instruction text", () => {
    render(<Home />);

    const instruction = screen.getByText(/Get started by editing/i);
    expect(instruction).toBeInTheDocument();
  });

  it("should have Deploy now button", () => {
    render(<Home />);

    const deployButton = screen.getByText("Deploy now");
    expect(deployButton).toBeInTheDocument();
  });

  it("should have Read our docs link", () => {
    render(<Home />);

    const docsLink = screen.getByText("Read our docs");
    expect(docsLink).toBeInTheDocument();
  });
});
