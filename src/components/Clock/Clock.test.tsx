import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

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
   const clockContainer = screen.getByTestId("clock__container");
   expect(clockContainer).not.toHaveClass("dark-mode__display");
   expect(clockContainer).toHaveClass("light-mode__display");
   
   const toggleModeButton = screen.getByTestId("toggle-mode__button");
   fireEvent.click(toggleModeButton);

   expect(clockContainer).toHaveClass("dark-mode__display");
   expect(clockContainer).not.toHaveClass("light-mode__display");
  });

  it("Should toggle between dark and light modes when toggle mode button is clicked", () => {
    const clockContainer = screen.getByTestId("clock__container");
    expect(clockContainer).not.toHaveClass("dark-mode__display");
    expect(clockContainer).toHaveClass("light-mode__display");
    
    const toggleModeButton = screen.getByTestId("toggle-mode__button");
    fireEvent.click(toggleModeButton);
 
    expect(clockContainer).toHaveClass("dark-mode__display");
    expect(clockContainer).not.toHaveClass("light-mode__display");
   });
});