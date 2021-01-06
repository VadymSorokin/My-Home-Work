//Один доллар стоит 30 гривен. 
//Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов.

const usdRate = 30;
for (i = 10; i <= 100; i = i + 10) {
	const totalUah = i * usdRate;
	console.log(`${totalUah} UAH`);
};
