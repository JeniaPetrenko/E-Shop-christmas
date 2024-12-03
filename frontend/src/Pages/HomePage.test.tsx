import { describe, it, beforeEach } from "vitest"; // Додано expect для перевірки
import { render, screen } from "@testing-library/react";

// Компонент для тестування
import { HomePage } from "./HomePage";

beforeEach(() => render(<HomePage />));
describe("HomePage", () => {
  it("should render the HomePage component", () => {
    //render(<HomePage />);
    screen.getByRole("heading", { name: /Home Page/i });
  });
});
