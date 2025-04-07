import { GildedRose } from "../app/gilded-rose";
import { Item } from "../app/classes/item";

describe("GildedRose Integration", () => {
  it("should update multiple items correctly", () => {
    const items = [
      new Item("Aged Brie", 2, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
      new Item("Conjured", 3, 6),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Normal Item", 10, 10),
    ];

    const gilded = new GildedRose(items);
    const updatedItems = gilded.updateItems();

    expect(updatedItems[0].quality).toBe(1); 
    expect(updatedItems[1].quality).toBe(22); 
    expect(updatedItems[2].quality).toBe(4); 
    expect(updatedItems[3].quality).toBe(80); 
    expect(updatedItems[4].quality).toBe(9); 
  });
});
