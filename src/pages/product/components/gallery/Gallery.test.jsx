import { describe, expect, test } from "vitest";
import Gallery from "./Gallery";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const images1 = [
  {
    rel: "Alt_View_Standard_13",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857ld.jpg",
    number: 0,
  },
  {
    rel: "Alt_View_Standard_20",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv17d.jpg",
    number: 1,
  },

  {
    rel: "Alt_View_Standard_19",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv16d.jpg",
    number: 2,
  },
  {
    rel: "Alt_View_Standard_18",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv15d.jpg",
    number: 3,
  },
  {
    rel: "Alt_View_Standard_17",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv14d.jpg",
    number: 4,
  },
  {
    rel: "Alt_View_Standard_15",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv12d.jpg",
    number: 5,
  },
  {
    rel: "Alt_View_Standard_16",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv13d.jpg",
    number: 6,
  },
  {
    rel: "Alt_View_Standard_14",
    href: "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv11d.jpg",
    number: 7,
  },
];

describe("Gallery component", () => {
  test("should renders primary image", () => {
    const { container } = render(<Gallery images={images1} />);

    expect(container).toMatchSnapshot();
  });

  test("should renders primary image", () => {
    render(<Gallery images={images1} />);

    const primaryImage = screen.getByTestId("primary");

    expect(primaryImage).toBeInTheDocument();
  });

  test("should renders slider buttons with images", () => {
    render(<Gallery images={images1} />);

    const btns = screen.getAllByRole("button");

    const lastImage = screen.queryByAltText(/Alt_View_Standard_14_slider/i);

    const images = screen.getAllByRole("img");

    expect(images.length).toBe(6);
    expect(btns.length).toBe(5);
    expect(lastImage).not.toBeInTheDocument();
    expect(images[1].alt).toMatch(/Alt_View_Standard_13_slider/i);

    expect(images[1].src).toContain(
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857ld.jpg"
    );

    expect(images[2].alt).toMatch(/Alt_View_Standard_20_slider/i);
    expect(images[3].alt).toMatch(/Alt_View_Standard_19_slider/i);
    expect(images[4].alt).toMatch(/Alt_View_Standard_18_slider/i);
    expect(images[5].alt).toMatch(/Alt_View_Standard_17_slider/i);
  });

  test("should renders only one image without slider", () => {
    render(<Gallery images={[images1[3]]} />);

    const images = screen.getAllByRole("img");

    const slider = screen.queryByTestId("slider");

    expect(images.length).toBe(1);
    expect(slider).not.toBeInTheDocument();
    expect(images[0].alt).toMatch(/Alt_View_Standard_18/i);
  });

  test("should change primary image by clicking one of thumbnail buttons, ", async () => {
    const user = userEvent.setup();
    render(<Gallery images={images1} />);

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[4]);

    const primaryImage = screen.getByTestId("primary");

    expect(primaryImage.alt).toMatch(/Alt_View_Standard_17/i);
  });

  test("should change thumbnail buttons by clicking one of them, ", async () => {
    const user = userEvent.setup();
    render(<Gallery images={images1} />);

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[4]);

    const images = screen.getAllByAltText(/._slider/i);

    expect(images[0].alt).not.toMatch(/Alt_View_Standard_13_slider/i);
    expect(images[1].alt).not.toMatch(/Alt_View_Standard_20_slider/i);
    expect(images[2].alt).not.toMatch(/Alt_View_Standard_19_slider/i);
    expect(images[3].alt).not.toMatch(/Alt_View_Standard_18_slider/i);
    expect(images[4].alt).not.toMatch(/Alt_View_Standard_17_slider/i);
    expect(images[0].alt).toMatch(/Alt_View_Standard_19_slider/i);
    expect(images[1].alt).toMatch(/Alt_View_Standard_18_slider/i);
    expect(images[2].alt).toMatch(/Alt_View_Standard_17_slider/i);
    expect(images[3].alt).toMatch(/Alt_View_Standard_15_slider/i);
    expect(images[4].alt).toMatch(/Alt_View_Standard_16_slider/i);
  });

  test("should not change thumbnail buttons by clicking one of them, ", async () => {
    const user = userEvent.setup();
    const slicedImage = images1.slice(0, 4);

    render(<Gallery images={slicedImage} />);

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[2]);

    const primaryImage = screen.getByTestId("primary");
    const slider = screen.getByTestId("slider");
    const images = screen.getAllByAltText(/._slider/i);

    expect(images.length).toBe(4);
    expect(primaryImage.src).toContain(
      "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6473/6473857cv16d.jpg"
    );
    expect(slider).toBeInTheDocument();
    expect(images[0].alt).toMatch(/Alt_View_Standard_13_slider/i);
    expect(images[1].alt).toMatch(/Alt_View_Standard_20_slider/i);
    expect(images[2].alt).toMatch(/Alt_View_Standard_19_slider/i);
    expect(images[3].alt).toMatch(/Alt_View_Standard_18_slider/i);
  });
});
