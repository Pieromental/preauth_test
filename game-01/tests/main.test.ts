import { findPairSum } from "../src/main";

describe("findPairSum - Integration", () => {
  it("returns a valid pair from valid input", () => {
    expect(findPairSum([1, 2, 5, 7, 3], 8)).toEqual([1, 7]);
  });

  it("works with repeated values", () => {
    expect(findPairSum([4, 4], 8)).toEqual([4, 4]);
  });

  it("returns null if no pair is found", () => {
    expect(findPairSum([1, 2, 3], 10)).toBeNull();
  });
});
