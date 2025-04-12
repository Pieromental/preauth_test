import { UpdateStrategy } from "../interfaces/updateStrategy";
import { AgedBrie } from "../classes/agedBrie";
import { Concert } from "../classes/concert";
import { Conjured } from "../classes/conjured";
import { Sulfuras } from "../classes/sulfuras";
import { Normal } from "../classes/normal";

export const strategies: Record<string, UpdateStrategy> = {
  "Aged Brie": new AgedBrie(),
  "Backstage passes to a TAFKAL80ETC concert": new Concert(),
  "Conjured": new Conjured(),
  "Sulfuras, Hand of Ragnaros": new Sulfuras(),
  "default": new Normal(),
};
