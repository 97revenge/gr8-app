import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders a button", () => {
    render(<Page />);

    const button = screen.getByTestId("button-element");

    expect(button).toBeInTheDocument();
  });
});
