import { findFirstPair } from "../../src/logic/findFirstPair";

describe("findFirstPair - Pure logic", () => {
  it("returns the first valid pair", () => {
    expect(findFirstPair([1, 2, 7, 5], 8)).toEqual([1, 7]);
  });

  it("returns null when no pair is found", () => {
    expect(findFirstPair([1, 2, 3], 10)).toBeNull();
  });
});
