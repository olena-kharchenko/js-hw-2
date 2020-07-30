// Задача 2 - 5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  // Write code under this line
  let result = false;
  str = str.toLowerCase();
  if (str.includes('spam') || str.includes('sale')) {
    result = true;
  }

  return result;
}
console.log(checkForSpam('Get best sale offers now!'));
