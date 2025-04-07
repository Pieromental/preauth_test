import { Item } from "../../app/classes/item";
import { AgedBrie } from "../../app/classes/agedBrie";

describe("Test Cases for AgedBrie Item", () => {
  it("should increase quality by 1 if sellIn > 0", () => {
    const item = new Item("Aged Brie", 5, 10);
    const strategy = new AgedBrie();

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(11);
  });

  it("should increase quality by 2 if sellIn <= 0", () => {
    const item = new Item("Aged Brie", 0, 10);
    const strategy = new AgedBrie();

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(12);
  });

  it("should not increase quality above 50", () => {
    const item = new Item("Aged Brie", 0, 49);
    const strategy = new AgedBrie();

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(50);
  });
});
