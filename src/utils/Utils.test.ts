import { vi } from "vitest";
import Utils from "./Utils";

describe("Class Utils: ", () => {
  let utils: Utils;

  beforeEach(() => {
    utils = new Utils();
    global.jest = require('jest-mock');
  });

  it("Method formatTimeAndDate should format the date and time correctly", () => {
    const date = new Date("2024-05-20T20:11:33.857Z");
    const { formattedDate, formattedTime } = utils.formatDateAndTime(date);

    expect(formattedTime).toBe("17:11:33");
    expect(formattedDate).toBe("Monday | May 20, 2024");
  });

  it("Method isDarkModeOn should return true if the dark mode is activated", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
      }
    });
    expect(utils.isDarkModeOn()).toBe(true);
  });
});