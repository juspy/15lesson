userName = prompt('Введите свое имя:');
userAge = prompt('Введите свой возраст:');
addition = prompt('Привет, ' + userName + '\nВведи правильный ответ: ' + '5+5');
if (addition != 10) {
    alert('Неверно!')
} else{
    alert('Верно!')
}
subtraction = prompt('Введи правильный ответ: ' + '8-4');
if (subtraction != 4) {
    alert('Неверно!')
} else {
    alert('Верно!')
}
multiplication = prompt('Введи правильный ответ: ' + '5*5');
if (multiplication != 25) {
    alert('Неверно!')
} else {
    alert('Верно!')
}
division = prompt('Введи правильный ответ: ' + '20:4');
if (division != 5) {
    alert('Неверно!')
} else {
    alert('Верно!')
}
divisionW = prompt('Введи остаток от деления: ' + '15:7');
if (divisionW != 1) {
    alert('Неверно!')
} else {
    alert('Верно!')
}
alert('Отличная работа, результаты в консоли!');

console.log('1) 5+5=10\nВаш ответ: ' + addition);
console.log('2) 8-4=4\nВаш ответ: ' + subtraction);
console.log('3) 5*5=25\nВаш ответ: ' + multiplication);
console.log('4) 20:4=5\nВаш ответ: ' + division);
console.log('5) 15:7=1\nВаш ответ: ' + addition);