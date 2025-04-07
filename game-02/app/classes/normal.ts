import { Item } from "./item";
import { UpdateStrategy } from "../interfaces/updateStrategy";
import { decreaseQuality } from "../helpers/updateQuality";

export class Normal implements UpdateStrategy {
  update(item: Item): Item {
    item.sellIn -= 1;
    const degradation = item.sellIn < 0 ? 2 : 1;
    item.quality = decreaseQuality(item.quality - degradation);
    return item;
  }
}
