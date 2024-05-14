import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Clock from "./Clock";
import App from "../../App";

describe("Component 'App': ", () => {
  it("Should contain a 'Clock' component", () => {
    render(<App />);
    const clockComponent = screen.getByTestId("clock__container");
    expect(clockComponent).toBeInTheDocument();
  });
});

describe("Component 'Clock': ", () => {
  beforeEach(() => {
    render(<Clock />);
  });

  it("Should render correctly", async () => {  
    const clockContainer = screen.getByTestId("clock__container");
    expect(clockContainer).toBeInTheDocument();

    const dateTimeContainer = screen.getByTestId("date-time__container");
    expect(dateTimeContainer).toBeInTheDocument();

    const h1Title = screen.getByTestId("formatted-time");
    expect(h1Title).toBeInTheDocument();

    const paragraph = screen.getByTestId("formatted-weekday");
    expect(paragraph).toBeInTheDocument();

    const toggleModeButton = screen.getByTestId("toggle-mode__button");
    expect(toggleModeButton).toBeInTheDocument();
  });

  it("Should toggle between dark and light mode when 'toggle-mode__button' is clicked", () => {
    const clockContainer = screen.getByTestId("clock__container");

    expect(clockContainer).not.toHaveClass("light-mode__display");
    expect(clockContainer).toHaveClass("dark-mode__display");
    
    const toggleModeButton = screen.getByTestId("toggle-mode__button");
    fireEvent.click(toggleModeButton);
    
    expect(clockContainer).not.toHaveClass("dark-mode__display");
    expect(clockContainer).toHaveClass("light-mode__display");
  });
})