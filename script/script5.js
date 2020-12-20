//Дано некоторое число. 
//Определить, можно ли получить это число путем возведения 
//числа 3 в некоторую степень. 
//(Например, числа 9, 81 можно получить, а 13 - нельзя).
const num5 = +prompt('enter number');
const n = Math.log(num5) / Math.log(3);
const nDeg = Math.trunc(n);
if( Math.pow(3,nDeg)==num5){
	console.log(`${num5} is result of 3^${nDeg}`);
}
else{
	console.log('an incorrect input');
}