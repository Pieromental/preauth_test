import { Item } from "../../app/classes/item";
import { Sulfuras } from "../../app/classes/sulfuras";

describe("Sulfuras Strategy", () => {
  it("should not change sellIn or quality", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 5, 80);
    const strategy = new Sulfuras();

    strategy.update(item);

    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(80);
  });

  it("should set quality to 80 even if it was lower", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 3, 70);
    const strategy = new Sulfuras();

    strategy.update(item);

    expect(item.quality).toBe(80);
  });

  it("should not change if sellIn is 0", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const strategy = new Sulfuras();

    strategy.update(item);

    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(80);
  });

  it("should not change if sellIn is negative", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", -5, 80);
    const strategy = new Sulfuras();

    strategy.update(item);

    expect(item.sellIn).toBe(-5);
    expect(item.quality).toBe(80);
  });
});
