/****************************************************************************/
/*                             IMPORTS                                      */
/****************************************************************************/
import { Item } from "./classes/item";
import {
  updateQualityForAgedBrie,
  updateQualityForConcert,
  updateQualityForConjured,
  updateQualityForNormalItem,
  updateQualityForSulfuras,
} from "./helpers/updateQuality";

/****************************************************************************/
/*                             METHODS                                      */
/****************************************************************************/
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateItems(): Item[] {
    this.items = this.items.map((item) => {
      switch (item.name) {
        case "Aged Brie":
          return updateQualityForAgedBrie(item);
        case "Backstage passes to a TAFKAL80ETC concert":
          return updateQualityForConcert(item);
        case "Sulfuras, Hand of Ragnaros":
          return updateQualityForSulfuras(item);
        case "Conjured":
          return updateQualityForConjured(item);
        default:
          return updateQualityForNormalItem(item);
      }
    });
    return this.items;
  }
}
