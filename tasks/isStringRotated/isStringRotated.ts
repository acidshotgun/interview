/*
  Напишите функцию, которая принимает 2 строки. Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). 
  Иначе верните `false`.

  **Input**: String, String
  **Output**: Boolean
*/

function isStringRotated(source: string, test: string): boolean {
  return source.length === test.length && (source + source).includes(test);
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
console.log(isStringRotated("java", "avaj")); // -> true
