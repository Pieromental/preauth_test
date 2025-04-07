import { Item } from "../classes/item";
export interface UpdateStrategy {
  update(item: Item): Item;
}
