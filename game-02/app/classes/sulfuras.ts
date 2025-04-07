import { Item } from "./item";
import { UpdateStrategy } from "../interfaces/updateStrategy";

export class Sulfuras implements UpdateStrategy {
  update(item: Item): Item {
    item.quality = 80;
    return item;
  }
}
