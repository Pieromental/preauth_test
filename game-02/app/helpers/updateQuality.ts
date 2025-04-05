import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from "../config/constants";
import { Item } from "../classes/item";

const increaseQuality = (quality: number): number =>
  Math.min(MAXIMUM_QUALITY, quality + 1);
const decreaseQuality = (quality: number): number =>
  Math.max(MINIMUM_QUALITY, quality - 1);

export const updateQualityForNormalItem = (item: Item): Item => {
  item.sellIn -= 1;

  const degradation = item.sellIn < 0 ? 2 : 1;
  for (let i = 0; i < degradation; i++) {
    item.quality = decreaseQuality(item.quality);
  }

  return item;
};

export const updateQualityForConjured = (item: Item): Item => {
  item.sellIn -= 1;

  const degradation = item.sellIn < 0 ? 4 : 2;
  for (let i = 0; i < degradation; i++) {
    item.quality = decreaseQuality(item.quality);
  }

  return item;
};
export const updateQualityForConcert = (item: Item): Item => {
  item.sellIn -= 1;

  const increment = getConcertIncrement(item.sellIn);

  if (increment == 0) item.quality = 0;
  for (let i = 0; i < increment; i++) {
    item.quality = increaseQuality(item.quality);
  }
  return item;
};

const getConcertIncrement = (sellIn: number): number => {
  if (sellIn <= 0) return 0;
  if (sellIn <= 5) return 3;
  if (sellIn <= 10) return 2;
  return 1;
};

export const updateQualityForAgedBrie = (item: Item): Item => {
  item.sellIn -= 1;
  const increment = item.sellIn < 0 ? 2 : 1;
  for (let i = 0; i < increment; i++) {
    item.quality = increaseQuality(item.quality);
  }

  return item;
};

export const updateQualityForSulfuras = (item: Item): Item => {
  item.quality = 80;
  return item;
};
