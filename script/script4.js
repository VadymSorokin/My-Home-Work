//Дано целое число. 
//Выяснить, является ли оно простым 
//(простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

const num4 = prompt(`let's check for a prime number`);
for (let i = 2; i < num4; i++) {
	num4 % i === 0 ?
		console.log(`${num4} - это составное число`) : console.log(`${num4} - это простое число`)
	break;
}