export function isValidInput(arr: unknown, target: unknown): arr is number[] {
  return (
    Array.isArray(arr) &&
    arr.length >= 2 &&
    arr.every((n) => Number.isInteger(n)) &&
    Number.isInteger(target)
  );
}
