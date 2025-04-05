import { Item } from "../app/classes/item";
import { GildedRose } from "../app/gilded-rose";

describe("Gilded Rose Test Cases", () => {
  describe("Normal item", () => {
    test("should decrease sellIn and quality by 1 for a normal item", () => {
      const item = new Item("Normal Item", 10, 20);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(19);
    });

    test("should not decrease quality below 0", () => {
      const item = new Item("Normal Item", 5, 0);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(0);
    });

    test("should decrease quality by 2 for a normal item when sellIn is below 0", () => {
      const item = new Item("Normal Item", 0, 20);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(18);
    });
  });

  describe("Aged Brie", () => {
    test("should increase quality by 1 when sellIn is above 0", () => {
      const item = new Item("Aged Brie", 5, 10);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(11);
    });
    test("should increase quality by 2 when sellIn is 0 or less", () => {
      const item = new Item("Aged Brie", 0, 10);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(12);
    });
    test("should not increase quality beyond 50", () => {
      const item = new Item("Aged Brie", 0, 49);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(50);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    test("should increase quality by 1 when sellIn > 10", () => {
      const item = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        15,
        20
      );
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(14);
      expect(item.quality).toBe(21);
    });

    test("should increase quality by 2 when sellIn is between 6 and 10", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 7, 20);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(6);
      expect(item.quality).toBe(22);
    });

    test("should increase quality by 3 when sellIn is between 1 and 5", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 3, 20);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(2);
      expect(item.quality).toBe(23);
    });

    test("should drop quality to 0 when sellIn is 0", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(0);
    });

    test("should not increase quality above 50", () => {
      const item = new Item(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        49
      );
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(50);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    test("should not change sellIn or quality", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 5, 80);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(5);
      expect(item.quality).toBe(80);
    });

    test("should keep quality at 80 even if given a different value", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 3, 70);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(80);
    });

    test("should not change even if sellIn is 0", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(0);
      expect(item.quality).toBe(80);
    });

    test("should not change even if sellIn is negative", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", -5, 80);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(-5);
      expect(item.quality).toBe(80);
    });
  });

  describe("Conjured items", () => {
    test("should decrease quality by 2 if sellIn > 0", () => {
      const item = new Item("Conjured", 5, 10);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(8);
    });

    test("should decrease quality by 4 if sellIn <= 0", () => {
      const item = new Item("Conjured", 0, 10);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(6);
    });

    test("should not drop quality below 0 if degradation is too high", () => {
      const item = new Item("Conjured", 0, 3);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(0);
    });

    test("should handle quality already at 0 gracefully", () => {
      const item = new Item("Conjured", 3, 0);
      const gilded = new GildedRose([item]);

      gilded.updateItems();

      expect(item.quality).toBe(0);
      expect(item.sellIn).toBe(2);
    });
  });
});
