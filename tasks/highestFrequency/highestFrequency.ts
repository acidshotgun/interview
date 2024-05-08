/*
  Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. 
  Если таких строк несколько, то нужно вернуть первую, идя слева на право.
    Input: String[]
    Output: String
*/

function highestFrequency(arr: string[]) {
  const map = new Map();

  arr.forEach((str) => {
    map.has(str) ? map.set(str, map.get(str) + 1) : map.set(str, 1);
  });

  return [...map].sort((a, b) => b[1] - a[1])[0][0];
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
