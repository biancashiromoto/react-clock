import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import { vi } from "vitest";
import Utils from "../../utils/Utils";

let matchMediaMock;

describe("Component 'App': ", () => {
  beforeEach(() => render(<App />));

  it("Should contain a 'Clock' component", () => {
    const clockComponent = screen.getByTestId("clock__container");
    expect(clockComponent).toBeInTheDocument();
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

  it("Should toggle between dark and light modes when toggle mode button is clicked", () => {
    matchMediaMock = vi.spyOn(Utils.prototype, 'isDarkModeOn');

    const clockContainer = screen.getByTestId("clock__container");
    expect(clockContainer).toHaveClass("dark-mode__display");
    expect(clockContainer).not.toHaveClass("light-mode__display");

    const toggleModeButton = screen.getByTestId("toggle-mode__button");
    fireEvent.click(toggleModeButton);

    expect(matchMediaMock).toHaveBeenCalledTimes(1);

    expect(clockContainer).not.toHaveClass("dark-mode__display");
    expect(clockContainer).toHaveClass("light-mode__display");
  });
})