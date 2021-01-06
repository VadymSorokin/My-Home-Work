//Дано целое число. Вывести все целые числа от 1 до 100,
//квадрат которых не превышает числа которое ввёл пользователь.

const integerNumber = parseInt(prompt('Enter an integer number'), 10);
for (let i = 1; i <= 100; i++) {
	if (integerNumber >= Math.pow(i, 2)) { 
		console.log(`Квадрат числа ${i} не превышает ${integerNumber}`);
	} else {
		break;  //Этот недостающий break  ты имел ввиду? 
	};
};
