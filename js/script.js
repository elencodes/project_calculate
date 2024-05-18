function calculateTotalPrice(quantity = 2, price = 15000000) {
	const calculatelPrice = quantity * price;
	alert(`Стоимость покупки: ${calculatelPrice.toLocaleString()} рублей`);
}

let calculatelFinalPrice = (quantity = 2, price = 15000000) => {
	const calculate = quantity * price;
	const result = `Стоимость покупки: ${calculate.toLocaleString()} рублей`;
	const total = document.querySelector('.total');
	total.textContent = (result);
}