import { describe, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
// Компонент для тестування
import { ProductsPage } from "./ProductsPage";

beforeEach(() => render(<ProductsPage />));

describe("ProductsPage", () => {
  it('should render Header with title "Christmas products"', () => {
    screen.getByRole("heading", { name: /Christmas products/i });
  });
  it('should display image with title "Christmas products"', () => {});
});
