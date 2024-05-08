/*
  1) Сделать из массива объект: [["a", 1], ["b", 2]] => {a: 1, b: 2}
    * а из объекта сделать массив? 
*/

// Первый способ
const arr = [
  ["a", 1],
  ["b", 2],
];

console.log(Object.fromEntries(arr));

// Второй способ
const objFromArray = (array) => {
  const obj = {};

  for (let key of array) {
    obj[key[0]] = key[1];
  }

  return obj;
};

console.log(objFromArray(arr));

// Третий способ
const arr1 = [
  ["a", 1],
  ["b", 2],
];

const objFromArrayTwo = (array) => {
  return array.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
};

console.log(objFromArrayTwo(arr1));

//
/*
  2) Вернуть массив только уникальных значений: [1,1,2,2,"hello","hello"] => [ 1, 2, 'hello' ]
*/

const uniqueValues = (arr) => {
  // return [...new Set(arr)];
  // return [Array.from(new Set(arr))];

  let result = [];

  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

console.log(uniqueValues([1, 1, 2, 2, "hello", "hello"]));

//
/*
  3) Сделать все глассные буквы в строке заглавными. А согласные строчными. "Привет мир" => прИвЕт мИр
  Гласные буквы ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
*/
const stringChanger = (string) => {
  let letters = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let result = "";

  for (let key in string) {
    if (letters.includes(string[key].toLowerCase())) {
      result += string[key].toUpperCase();
    } else {
      result += string[key].toLowerCase();
    }
  }

  return result;
};

console.log(stringChanger("Привет мир"));
console.log(stringChanger("хеЛЛООУ миР МАнеРа КРУТИТ мир"));

// 4)
// Первая задачка
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

while ("") {
  console.log(8);
}

// 1 7 3 5 2 6 4

// Вторая задачка
setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");

// Создание промиса
// Конец скрипта
// Обработка промиса
// Таймаут

//
/*
  5) Задачи на this
*/

const obj = {
  name: "какойта объект",
  method: function () {
    console.log(this.name);
  },
};

// const func = obj.method;
const func = obj.method.bind(obj);

func();

// еще одна задача

const func = () => {
  console.log(this); // Тут будет window
};

function func2() {
  console.log(this); // Тут контекст где вызывается
}

const obj = {
  name: "aboba",
  age: 15,
  method: function () {
    // Первый вариант задачки на this
    console.log(this);
  },
};

obj.method();

// const obj = {
//   name: "aboba",
//   age: 15,
//   method: func2
// }

obj.method(); // ???

/*
  Задачи на замыкание и область видимости
*/

// 1) Поиграть с задачей на разные вызовы.

let x = 10;

{
  console.log(x);

  let x = 20;
}

console.log(x);

// 2)

let name = "Lydia";

function getName() {
  console.log(name);
  let name = "Some";
}

getName();
