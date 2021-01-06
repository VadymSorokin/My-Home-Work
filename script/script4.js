//Дано целое число. 
//Выяснить, является ли оно простым 
//(простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя)

const numberToCheck = parseInt(prompt("Enter a positive integer number: "),10);
let isPrime = true;

if (numberToCheck === 1) {
	console.log(`Value should be more than ${numberToCheck}, ex: 2,3 etc...`);
}
else if (numberToCheck >= 2) {
	for (let i = 2; i < numberToCheck; i++) {
		if (numberToCheck % i === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log(`${numberToCheck} is a prime number`);
	} else {
		console.log(`${numberToCheck} is a not prime number`);
	}
}
