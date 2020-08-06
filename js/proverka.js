const str = 'Вот это интрига!';
console.log(
  `${str
    .split('')
    .splice(0, str.length - 1)
    .join('')} ${str.slice(-7)[0] + str.slice(-4)}`.toUpperCase(),
);
