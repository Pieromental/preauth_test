/****************************************************************************/
/*                             IMPORTS                                      */
/****************************************************************************/
import { Item } from "./classes/item";
import { strategies } from "./statregies/strategy-map";
import { Normal } from "./classes/normal";
/****************************************************************************/
/*                             METHODS                                      */
/****************************************************************************/
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateItems(): Item[] {
    this.items.forEach(item => {
      const strategy = strategies[item.name] || new Normal();
      strategy.update(item);
    });
    return this.items;
  }
}
