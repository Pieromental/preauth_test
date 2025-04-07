import { Item } from "./item";
import { UpdateStrategy } from "../interfaces/updateStrategy";
import { increaseQuality } from "../helpers/updateQuality";

export class AgedBrie implements UpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    const increment = item.sellIn < 0 ? 2 : 1;
    item.quality = increaseQuality(item.quality + increment);
    return item;
  }
}
