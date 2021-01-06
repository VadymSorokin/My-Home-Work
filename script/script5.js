/*Дано некоторое число. 
Определить, можно ли получить это число путем возведения 
числа 3 в некоторую степень. */



const numberInteger = parseInt(prompt('enter number'), 10);

for (let i = 1; i <= numberInteger; i++) {
	if (Math.pow(3, i) == numberInteger) {
		console.log(`${numberInteger} is result of 3^${i}`);
		break;
	}
};

//Через логарифмы

/*const numberExponent = Math.trunc(Math.log(numberInteger) / Math.log(3));
if( Math.pow(3,numberExponent)==numberInteger){
	console.log(`${numberInteger} is result of 3^${numberExponent}`);
}
else{
	console.log('ani incorrect input');
}*/
