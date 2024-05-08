/*
  Написать функцию, которая определяет - уникальны ли все символы в строке.
  Регистр должен учитываться "A" != "a"

  **Input**: String
  **Output**: Boolean
*/

function isUnique(str: string): boolean {
  return str.length === new Set(str).size;
}

console.log(isUnique("12345")); // true
console.log(isUnique("abcdefg")); // true
console.log(isUnique("abcdefa")); // false
console.log(isUnique("abcABC")); // true
