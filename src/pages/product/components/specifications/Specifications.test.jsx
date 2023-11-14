import { describe, expect, it } from "vitest";
import Specifications from "./Specifications";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const details = [
  {
    name: "Internal Memory",
    value: "6 gigabytes",
  },
  {
    name: "Number Of Controllers Included",
    value: "2",
  },
  {
    name: "Interpupillary Distance Adjustment",
    value: "Yes",
  },
  {
    name: "Sensors",
    value: "Integrated insight sensor(s)",
  },
  {
    name: "Interfaces with",
    value: "Standalone device",
  },
  {
    name: "Product Use",
    value: "Virtual Reality (VR)",
  },
  {
    name: "Color",
    value: "Gray",
  },
];

const features = [
  {
    feature:
      "Next level hardware\nA super fast processor and high-resolution display help to keep your experience smooth and seamless, even as high speed action unfolds around you.",
  },
  {
    feature:
      "Experience total immersion\n3D positional audio, hand tracking and haptic feedback make virtual worlds feel real.",
  },
  {
    feature:
      "Enter new realities\nTravel universes in blockbuster fantasies, scare yourself witless in horror adventures or collaborate with colleagues in innovative workspaces.",
  },
  {
    feature:
      "An expanding universe\nExplore over 250 titles across gaming, fitness, social/multiplayer and entertainment, including exclusive blockbuster releases and totally unique VR experiences.",
  },
  {
    feature:
      "Come together, wherever you are\nEnter incredible social spaces and multiplayer arenas to take in live events with friends and family, find your new workout crew or join quests with fellow adventurers.",
  },
  {
    feature:
      "No wires, no limits\nWith a wireless headset, intuitive controls, a built-in battery and easy setup, Quest 2 is the all-in-one system that truly sets you free to roam in VR. No PC or console needed.*",
  },
  {
    feature:
      "Set up for safety\nQuest 2&#8217;s easy-to-use Guardian boundary lets you set your designated play space and alerts you if you move outside it.",
  },
];

const accessories = [
  {
    includedItem: "Quest 2 Headset",
  },
  {
    includedItem: "2 Touch Controllers",
  },
  {
    includedItem: "2 AA Batteries",
  },
  {
    includedItem: "Power Adapter",
  },
  {
    includedItem: "Charging Cable",
  },
  {
    includedItem: "Glasses Spacer",
  },
  {
    includedItem: "Quick Start Guide",
  },
  {
    includedItem: "Safety & Warranty Guide",
  },
];

describe("Specifications component", () => {
  it("should render all buttons", () => {
    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons[0].textContent).toMatch(/features/i);
    expect(buttons[1].textContent).toMatch(/accessories/i);
    expect(buttons[2].textContent).toMatch(/details/i);
  });

  it("should render initial feature list", () => {
    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const firstFeatureHeading = screen.queryByRole("heading", {
      name: "Next level hardware",
    });

    const lastFeatureHeading = screen.queryByRole("heading", {
      name: "No wires, no limits",
    });

    const firstDetailHeading = screen.queryByRole("heading", {
      name: "Number Of Controllers Included",
    });

    const firstAccessoryHeading = screen.queryByRole("heading", {
      name: "Quest 2 Headset",
    });

    expect(firstFeatureHeading).toBeInTheDocument();
    expect(lastFeatureHeading).toBeInTheDocument();
    expect(firstDetailHeading).not.toBeInTheDocument();
    expect(firstAccessoryHeading).not.toBeInTheDocument();
  });

  it("should render accessories list after click 'accessories' button", async () => {
    const user = userEvent.setup();

    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const button = screen.getByRole("button", { name: "accessories" });

    await user.click(button);

    const firstFeatureHeading = screen.queryByRole("heading", {
      name: "Next level hardware",
    });

    const lastFeatureHeading = screen.queryByRole("heading", {
      name: "Safety & Warranty Guide",
    });

    const firstDetailHeading = screen.queryByRole("heading", {
      name: "Number Of Controllers Included",
    });

    const firstAccessoryHeading = screen.queryByRole("heading", {
      name: "Quest 2 Headset",
    });

    expect(firstFeatureHeading).not.toBeInTheDocument();
    expect(firstDetailHeading).not.toBeInTheDocument();
    expect(firstAccessoryHeading).toBeInTheDocument();
    expect(lastFeatureHeading).toBeInTheDocument();
  });

  it("should render details list after click 'details' button", async () => {
    const user = userEvent.setup();

    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const button = screen.getByRole("button", { name: "details" });

    await user.click(button);

    const firstDetailHeading = screen.queryByRole("heading", {
      name: "Number Of Controllers Included",
    });

    const lastDetailHeading = screen.queryByRole("heading", {
      name: "Color",
    });

    const firstFeatureHeading = screen.queryByRole("heading", {
      name: "Next level hardware",
    });

    const firstAccessoryHeading = screen.queryByRole("heading", {
      name: "Quest 2 Headset",
    });

    expect(firstDetailHeading).toBeInTheDocument();
    expect(lastDetailHeading).toBeInTheDocument();
    expect(firstFeatureHeading).not.toBeInTheDocument();
    expect(firstAccessoryHeading).not.toBeInTheDocument();
  });

  it("should render features list after click 'details' button and next click 'feature' button", async () => {
    const user = userEvent.setup();

    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const detailsBtn = screen.getByRole("button", { name: "details" });
    const featureBtn = screen.getByRole("button", { name: "features" });
    await user.click(detailsBtn);
    await user.click(featureBtn);

    const firstFeatureHeading = screen.queryByRole("heading", {
      name: "Next level hardware",
    });

    const lastFeatureHeading = screen.queryByRole("heading", {
      name: "No wires, no limits",
    });

    const firstDetailHeading = screen.queryByRole("heading", {
      name: "Number Of Controllers Included",
    });

    const firstAccessoryHeading = screen.queryByRole("heading", {
      name: "Quest 2 Headset",
    });

    expect(firstFeatureHeading).toBeInTheDocument();
    expect(lastFeatureHeading).toBeInTheDocument();
    expect(firstDetailHeading).not.toBeInTheDocument();
    expect(firstAccessoryHeading).not.toBeInTheDocument();
  });

  it("should render features list after click 'details' button and next click 'feature' button", async () => {
    const user = userEvent.setup();

    render(
      <Specifications
        details={details}
        features={features}
        accessories={accessories}
      />
    );

    const detailsBtn = screen.getByRole("button", { name: "details" });
    const featureBtn = screen.getByRole("button", { name: "features" });
    await user.click(detailsBtn);
    await user.click(featureBtn);

    const firstFeatureHeading = screen.queryByRole("heading", {
      name: "Next level hardware",
    });

    const lastFeatureHeading = screen.queryByRole("heading", {
      name: "No wires, no limits",
    });

    const firstDetailHeading = screen.queryByRole("heading", {
      name: "Number Of Controllers Included",
    });

    const firstAccessoryHeading = screen.queryByRole("heading", {
      name: "Quest 2 Headset",
    });

    expect(firstFeatureHeading).toBeInTheDocument();
    expect(lastFeatureHeading).toBeInTheDocument();
    expect(firstDetailHeading).not.toBeInTheDocument();
    expect(firstAccessoryHeading).not.toBeInTheDocument();
  });

  it("should not render 'accesorries' button ", () => {
    render(
      <Specifications details={details} features={features} accessories={[]} />
    );

    const featureBtn = screen.queryByRole("button", { name: "features" });
    const detailBtn = screen.queryByRole("button", { name: "details" });
    const accessoryBtn = screen.queryByRole("button", { name: "accessories" });

    expect(featureBtn).toBeInTheDocument();
    expect(detailBtn).toBeInTheDocument();
    expect(accessoryBtn).not.toBeInTheDocument();
  });
});
