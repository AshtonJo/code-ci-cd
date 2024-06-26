import Page from "./page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("page", () => {
  it("renders the page", () => {
    render(<Page />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
