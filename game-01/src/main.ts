export function findPairSum(arr: number[], target: number): number[] | null {
  if (
    !Array.isArray(arr) ||
    arr.length < 2 ||
    !arr.every((n) => Number.isInteger(n)) ||
    !Number.isInteger(target)
  ) {
    return null;
  }

  const seen = new Set<number>();

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}
