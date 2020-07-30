// Задача 2 - 6
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array
// и заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
// По завершению перебора массива array возвращается массив numbers.

function mapArray(array) {
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}
