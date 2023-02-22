// Хлеб: 20х2 = 40

let products = [
	{name: 'Хлеб', count: 2, price: 20 },
	{name: 'Масло', count: 3, price: 70 },
	{name: 'Молоко', count: 1, price: 50 },
	{name: 'Мясо', count: 4, price: 150 },
]

for (let key in products) {
	let productName = products[key].name;
	let productCount = products[key].count;
	let productPrice = products[key].price;

	let totalPrice =  productCount * productPrice;
	console.log(productName + ': ' + productPrice + 'x' + productCount + ' = ' + totalPrice);
}