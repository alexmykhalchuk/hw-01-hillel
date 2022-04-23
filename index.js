/*Создайте три переменные. Присвойте первой переменной числовое значение.
   Вторая переменная равна первой переменной, увеличенной в три раза. Третья
   переменная равна сумме двух первых. Выведите на экран все три.*/
console.log('Hallo')
let num1 = 2;
let num2 = num1 * 3;
let num3 = num1 + num2; 
// alert(num1);
// alert(num2);
// alert(num3);
console.log(num1, num2, num3) 
// =======================
/*Создайте переменные firstName и lastName для хранения имени и фамилии,
   запишите в них значения из модального окна prompt. Выведите на экран
   приветствие “What’s up John Doe”.*/
let firstName = prompt('What is your name?', 'John');
let lastName = prompt('What is your sarname', 'Doe');
alert(`What’s up ${firstName} ${lastName}`);
// ========================
/*Создайте переменные x и y для хранения числа. Значения переменные получают из
   prompt. Рассчитайте произведение, частное, разность и сумму этих значений.
   Результат последовательно отобразите в модальном окне.*/
let x = prompt('Number1', '')
let y = prompt('Number2', '')
alert(+x + +y);
alert(+x - +y);
alert(+x * +y);
alert(+x / +y);
// =======================
/*Напишите в переменных формулу для расчета з/п за июль с учетом, что
   количество рабочий часов, количество рабочих дней в неделе и рейт за час –
   переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30
   или 31 день не нужно).*/
//let monthName = prompt('What month is it?', '');
//let quantityMonthDay = promt('How many days in the month?', '');
let quantityWorkingDay = +prompt('How many working days in a month?', '');
let quantityHoursPerDay = +prompt('How many working hours per day?', '');
let hourlyRate = +prompt('What is the cost per hour?', '');
let salary = quantityWorkingDay * quantityHoursPerDay * hourlyRate;
alert(salary);
// =======================
/*Напишите программу, которая без использования оператора сравнения определяет,
   является ли число, введенное пользователем, нечётным.*/
let num4 = +prompt('Number3', '');
if (num4 % 2 == 1) {
    alert("Правильно!");
}
else {
    alert('А вот и неправильно!');
}
// ======================
/*Напишите программу, которая проверяет, является ли значение, введенное
   пользователем, числом.*/
let value = 2;
   if (typeof value === 'number') {
  alert("it's a number!");
}
else {
    alert('false');
}
// =====================
/*Запишите в переменную случайное число (Math.random()), умножьте его на 100 и
   округлите. Получите второе число из окна prompt. Сравните и отобразите в
   модальном окне: первое число меньше второго или нет, а также оба значения.*/
let num5 = Math.round(Math.random() * 100);
let num6 = +prompt('Add second number', '');
alert(num5);
alert(num6);
alert(num5 < num6);
// ====================
/*Создайте переменную str и запишите в нее из prompt такое предложение «Мне
   нравится изучать Front-end». Также создайте еще одну переменную и запишите в
   нее из prompt то, что вам нравится изучать. С помощью методов строки
   определите существует ли то что вам нравится изучать в исходной строке str.
   Также возьмите подстроку «Мне нравится изучать » из исходной переменной str
   сохраните ее в переменной. Создайте еще одну переменную result куда запишите
   результирующую строку объединяющую «Мне нравится изучать » и то что вам
   нравится изучать. Отобразите результат в модальном окне.*/
let str = prompt('Add', 'Мне нравится изучать Front-end');
let hobbyName = prompt('Что тебе нравиться изучать?', ''); 
alert(str.indexOf(hobbyName));
let str2 = str.substring(0, 21);
let result = str2 + hobbyName;
alert(result);
