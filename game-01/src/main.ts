import { isValidInput } from "./helpers/isValidInput";
import { findFirstPair } from "./logic/findFirstPair";


export function findPairSum(arr: number[], target: number): number[] | null {
  if (!isValidInput(arr, target)) return null;
  return findFirstPair(arr, target);
}
