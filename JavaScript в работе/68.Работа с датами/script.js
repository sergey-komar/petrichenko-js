const now = new Date();
const date = new Date('2022-07-17');


console.log(now.getFullYear());//Год
console.log(now.getMonth());//Месяц
console.log(now.getDate());//День
console.log(now.getDay());//День недели номерация начинается с воскресения .Воскресение -это нулевой день .Суббота это 6.

console.log(now.setHours(17,40));// Первое это часы ,второе минуты
console.log(now)

console.log(date);