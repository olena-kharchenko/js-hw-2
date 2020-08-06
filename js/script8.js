// Задача 2 - 8
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.Для подсчета суммы используй переменную total.Функция должна возвращать 0 если массив пустой и значение total в противном случае.

function reduceArray(array) {
  let total = 0;
  // Write code under this line
  if (array !== null) {
    for (const item of array) {
      total += item;
    }
  }
  return total;
}
