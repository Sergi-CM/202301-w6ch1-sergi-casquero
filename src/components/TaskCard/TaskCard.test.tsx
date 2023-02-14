import { render, screen } from "@testing-library/react";
import { taskStructure } from "../../store/features/todo/types";
import TaskCard from "./TaskCard";

describe("Given a TaskCard component", () => {
  describe("When rendered with name 'Learn Javascript'", () => {
    test("Then it should show 'Learn Javascript' within a heading", () => {
      const cardTask: taskStructure = {
        id: 1,
        name: "Learn Javascript",
        isDone: true,
      };

      render(<TaskCard task={cardTask} />);
      const expectedCardName = screen.getByRole("heading", { level: 3 });

      expect(expectedCardName).toBeInTheDocument();
    });

    test("Then it should show a button to delete that card", () => {
      const cardTask: taskStructure = {
        id: 1,
        name: "",
        isDone: true,
      };

      render(<TaskCard task={cardTask} />);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
