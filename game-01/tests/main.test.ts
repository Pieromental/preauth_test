import { findPairSum } from "../src/main";

describe("Test cases for findPairSum", () => {
  test("should return a valid pair", () => {
    expect(findPairSum([1, 2, 5, 7, 3], 8)).toEqual([1, 7]);
  });
  test("should work with a repeated pair", () => {
    expect(findPairSum([4, 4], 8)).toEqual([4, 4]);
  });
  test("should return null if no pair is found", () => {
    expect(findPairSum([1, 2, 3], 10)).toBeNull();
  });
  test("should return null if array is too short", () => {
    expect(findPairSum([1], 8)).toBeNull();
  });
  test("should return null if target is not integer", () => {
    expect(findPairSum([1, 2], 4.5)).toBeNull();
  });
  test("should return null if array has non-integers", () => {
    expect(findPairSum([1, 2.5], 3)).toBeNull();
  });
  test("should return null if array is not valid", () => {
    expect(findPairSum("no array" as any, 5)).toBeNull();
  });
  test("should return null if array has a string", () => {
    expect(findPairSum([1, 2, "3" as any], 5)).toBeNull();
  });
  test("should return null if target is a string", () => {
    expect(findPairSum([1, 2, 5, 7, 3], "no target" as any)).toBeNull();
  });
});
