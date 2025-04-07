import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from "../config/constants";


export const increaseQuality = (quality: number): number =>
  Math.min(MAXIMUM_QUALITY, quality);

export const decreaseQuality = (quality: number): number =>
  Math.max(MINIMUM_QUALITY, quality);

