import { Item } from "./item";
import { UpdateStrategy } from "../interfaces/updateStrategy";
import { increaseQuality } from "../helpers/updateQuality";

export class Concert implements UpdateStrategy {
  private getConcertIncrement = (sellIn: number): number => {
    if (sellIn <= 5) return 3;
    if (sellIn <= 10) return 2;
    return 1;
  };

  update(item: Item): Item {
    item.sellIn -= 1;
    if (item.sellIn <= 0) {
      item.quality = 0;
      return item;
    }
    const increment = this.getConcertIncrement(item.sellIn);
    item.quality = increaseQuality(item.quality + increment);
    return item;
  }
}
