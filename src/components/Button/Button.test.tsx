import { render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button", () => {
      render(<button />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
