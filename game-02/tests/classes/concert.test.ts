import { Item } from "../../app/classes/item";

import { Concert } from "../../app/classes/concert";

describe("Concert Strategy (Backstage passes)", () => {
  it("should increase quality by 1 when sellIn > 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const strategy = new Concert();

    strategy.update(item);

    expect(item.sellIn).toBe(14);
    expect(item.quality).toBe(21);
  });

  it("should increase quality by 2 when 6 <= sellIn <= 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25);
    const strategy = new Concert();

    strategy.update(item);

    expect(item.sellIn).toBe(9);
    expect(item.quality).toBe(27);
  });

  it("should increase quality by 3 when 1 <= sellIn <= 5", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30);
    const strategy = new Concert();

    strategy.update(item);

    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(33);
  });

  it("should drop quality to 0 when sellIn is 0", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20);
    const strategy = new Concert();

    strategy.update(item); 
    strategy.update(item); 

    expect(item.sellIn).toBe(-1);
    expect(item.quality).toBe(0);
  });

  it("should not increase quality above 50", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 49);
    const strategy = new Concert();

    strategy.update(item);

    expect(item.quality).toBe(50); 
  });
});
