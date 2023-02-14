import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";

describe("Given a TaskCard component", () => {
  describe("When rendered with name 'Learn Javascript'", () => {
    test("Then it should show 'Learn Javascript' within a heading", () => {
      const cardName = "Learn Javacript";

      render(<TaskCard name={cardName} />);
      const expectedCardName = screen.getByRole("heading", { level: 3 });

      expect(expectedCardName).toBeInTheDocument();
    });

    test("Then it should show a button to delete that card", () => {
      render(<TaskCard name={""} />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
