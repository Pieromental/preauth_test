import { Item } from "../../app/classes/item";
import { Conjured } from "../../app/classes/conjured";

describe("Conjured Strategy", () => {
  it("should decrease quality by 2 if sellIn > 0", () => {
    const item = new Item("Conjured", 5, 10);
    const strategy = new Conjured();

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(8);
  });

  it("should decrease quality by 4 if sellIn <= 0", () => {
    const item = new Item("Conjured", 0, 10);
    const strategy = new Conjured();

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(6);
  });

  it("should not reduce quality below 0 if degradation is too high", () => {
    const item = new Item("Conjured", 0, 3);
    const strategy = new Conjured();

    strategy.update(item);

    expect(item.quality).toBe(0);
  });

  it("should keep quality at 0 if it was already 0", () => {
    const item = new Item("Conjured", 3, 0);
    const strategy = new Conjured();

    strategy.update(item);

    expect(item.quality).toBe(0);
    expect(item.sellIn).toBe(2);
  });
});
