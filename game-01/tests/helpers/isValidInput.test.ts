import { isValidInput } from "../../src/helpers/isValidInput";

describe("isValidInput", () => {
  it("returns true for valid input", () => {
    expect(isValidInput([1, 2, 3], 5)).toBe(true);
  });

  it("returns false for array too short", () => {
    expect(isValidInput([1], 5)).toBe(false);
  });

  it("returns false if target is not integer", () => {
    expect(isValidInput([1, 2], 4.5)).toBe(false);
  });

  it("returns false if array contains non-integers", () => {
    expect(isValidInput([1, 2.5], 5)).toBe(false);
  });

  it("returns false if input is not an array", () => {
    expect(isValidInput("hello" as any, 5)).toBe(false);
  });
});
