export function findFirstPair(numbers: number[], target: number): number[] | null {
    const seen = new Set<number>();
    for (const num of numbers) {
      const complement = target - num;
      if (seen.has(complement)) {
        return [complement, num];
      }
      seen.add(num);
    }
    return null;
  }