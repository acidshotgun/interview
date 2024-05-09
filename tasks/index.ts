// https://www.codewars.com/kata/55f2b110f61eb01779000053/typescript

export function getSum(a: number, b: number): number {
  let counter = 0;

  for (let num = Math.min(a, b); num <= Math.max(a, b); num++) {
    counter += num;
  }

  return counter;
}

console.log(getSum(0, -10));
