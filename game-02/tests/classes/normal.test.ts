import { Item } from "../../app/classes/item";
import { Normal } from "../../app/classes/normal";
describe("Test Cases for Normal Item", () => {
  it("should decrease sellIn and quality by 1 when sellIn > 0", () => {
    const item = new Item("Normal Item", 10, 20);
    const strategy = new Normal();

    strategy.update(item);

    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(19);
  });

  it("should decrease quality by 2 when sellIn <= 0", () => {
    const item = new Item("Normal Item", 0, 20);
    const strategy = new Normal();

    strategy.update(item);

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(18);
  });

  it("should not decrease quality below 0", () => {
    const item = new Item("Normal Item", 5, 0);
    const strategy = new Normal();

    strategy.update(item);

    expect(item.quality).toBe(0);
  });
});
