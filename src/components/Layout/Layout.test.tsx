import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show a Header component", () => {
      const appName = "Task List App";

      render(<Layout />);
      const expectedText = screen.getByText(appName);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
