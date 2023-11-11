import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Pagination from "./Pagination";
import { BrowserRouter } from "react-router-dom";

describe("Pagination component", () => {
  it("renders number pages", () => {
    const { container } = render(
      <BrowserRouter>
        <Pagination currentPage={5} totalPages={10} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("should renders simply page buttons with current page equals 5 and total pages are 10 ", () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={5} totalPages={10} />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button");
    const dots = screen.getAllByText(/.../i);

    expect(dots.length).toBe(1);
    expect(dots[0]).toBeInTheDocument();

    expect(buttons[0].textContent).toMatch(/1/i);
    expect(buttons[1].textContent).toMatch(/2/i);
    expect(buttons[2].textContent).toMatch(/3/i);
    expect(buttons[3].textContent).toMatch(/4/i);

    expect(buttons[buttons.length - 3].textContent).toMatch(/7/i);
    expect(buttons[buttons.length - 2].textContent).toMatch(/8/i);
    expect(buttons[buttons.length - 1].textContent).toMatch(/10/i);
  });

  it("should renders simply page buttons with current page equals 2 and total pages are 4 ", () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={2} totalPages={4} />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button");
    const dot = screen.queryByText(/.../i);

    expect(dot).not.toBeInTheDocument();

    expect(buttons[0].textContent).toMatch(/1/i);
    expect(buttons[1].textContent).toMatch(/2/i);
    expect(buttons[2].textContent).toMatch(/3/i);
    expect(buttons[3].textContent).toMatch(/4/i);
  });

  it("should renders page buttons with current page equals 8 and total pages are 16 ", () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={8} totalPages={16} />
      </BrowserRouter>
    );

    const dots = screen.getAllByText(/.../i);

    expect(dots.length).toBe(2);
    expect(dots[0]).toBeInTheDocument();
    expect(dots[1]).toBeInTheDocument();
  });

  it("should not renders nothing", () => {
    render(
      <BrowserRouter>
        <Pagination currentPage={1} totalPages={1} />
      </BrowserRouter>
    );

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});
