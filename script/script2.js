//Один доллар стоит 30 гривен. 
//Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

//Комментарий по заданию №2

//То же замечание к названию res2. -- исправил.
//Тебе здесь вообще нет смысла в переменной res2 за пределами цикла. -- исправил.
//Ты мог просто внутри цикла написать так const uah =  i * usdRate; -- сделано, шеф!

const usdRate = 30;
for (i = 10; i <= 100; i = i + 10) {
	const totalUah = i * usdRate;
	console.log(`${totalUah} UAH`);
};