import { Item } from "./item";
import { UpdateStrategy } from "../interfaces/updateStrategy";
import { decreaseQuality } from "../helpers/updateQuality";

export  class Conjured implements UpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    const degradation = item.sellIn < 0 ? 4 : 2;
    item.quality = decreaseQuality(item.quality - degradation);
    return item;
  }
}
