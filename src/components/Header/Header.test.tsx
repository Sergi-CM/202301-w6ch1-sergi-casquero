import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Task List App' inside an h1 heading", () => {
      const appName = "Task List App";

      render(<Header />);
      const heading = screen.getByRole("heading", { level: 1 });
      const expectedText = screen.getByText(appName);

      expect(heading).toBeInTheDocument();
      expect(expectedText).toBeInTheDocument();
    });
  });
});
