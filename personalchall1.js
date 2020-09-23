/******************************
* Small program to determine where Lorinda went Xmas Shopping
* based on prices for items at Best Buy and Walmart +
* the current sales from each location on each item.
********************************/

// lor object
var lor = {
	fullName: 'Lorinda Bryant',
	itemsPurchased: ['Barbie Dream House', 'Barbie Horse Stable', 'Lego Frozen 2', 
					 'Nintendo Switch', 'Legend of Zelda'],
	purchasePrice: [112.5, 75.65, 63.75, 141.75, 44.25]
}

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Best Buy Discounts and Prices with discount applied.');
console.log('--------------------------------------------------------------------');
console.log(' ');

// Best Buy object
var bestBuy = {
	storeName: 'Best Buy',
	items: ['Barbie Dream House', 'Barbie Horse Stable', 'Lego Frozen 2', 
					 'Nintendo Switch', 'Legend of Zelda'],
	itemPrices: [150, 99, 79, 200, 60],
	discPrice: function() {
		// empty Array's to store data for discounts and final price of item after discount.'
		this.discount = [];
		this.finalPrice = [];
		
		// for loop to repeat if statement for each element in Array itemPrices.
		for (var i = 0; i < this.itemPrices.length; i++) {
			
			// Discover the discount for each item
			// then store in empty Array discount.
			var percentage;
			var price = this.itemPrices[i]; // shortens variable for writing function.
			
			// if statement to determine and apply correct percentage to numbers
			// in itemPrices Array.
			if (price > 125) {
				percentage = .25;
			} else if (price >= 70 && price < 125) {
				percentage = .15;
			} else {
				precentage = .10;
			}
			// Run equation and store elements in empty Arrays.
			this.discount[i] = price * percentage;
			this.finalPrice[i] = price - this.discount[i];
		}
	}
}

bestBuy.discPrice();
console.log(bestBuy.discount + ' - Total Discount to be applied.');
console.log(bestBuy.finalPrice + ' - Final price with discount applied.');

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Walmart Discounts and Prices with discount applied.');
console.log('--------------------------------------------------------------------');
console.log(' ');

// Walmart object.
var walMart = {
	storeName: 'Walmart',
	items: ['Barbie Dream House', 'Barbie Horse Stable', 'Lego Frozen 2', 
					 'Nintendo Switch', 'Legend of Zelda'],
	itemPrices: [159, 89, 75, 189, 59],
	discPrice: function() {
		// empty Array's to store data for discounts and final price of item after discount.'
		this.discount = [];
		this.finalPrice = [];
		
		// for loop to repeat if statement for each element in Array itemPrices.
		for (var i = 0; i < this.itemPrices.length; i++) {
			
			// Discover the discount for each item
			// then store in empty Array discount.
			var percentage;
			var price = this.itemPrices[i]; // shortens variable for writing function.
			
			// if statement to determine and apply correct percentage to numbers
			// in itemPrices Array.
			if (price > 125) {
				percentage = .25;
			} else if (price >= 70 && price < 125) {
				percentage = .15;
			} else {
				precentage = .10;
			}
			// Run equation and store elements in empty Arrays.
			this.discount[i] = price * percentage;
			this.finalPrice[i] = price - this.discount[i];
		}
	}
}

walMart.discPrice();
console.log(walMart.discount + ' - Total discount to be applied.');
console.log(walMart.finalPrice + ' - Final price with discount applied.');

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Lorinda\'s purchase location for each item.');
console.log('--------------------------------------------------------------------');
console.log(' ');

// Determine purchase location of each of Lorinda's items.

	if (lor.purchasePrice[0] === walMart.finalPrice[0]) {
		console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[0] + ' at ' + walMart.storeName);
		} else {
			console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[0] + ' at ' + bestBuy.storeName);
		} 
		
	if (lor.purchasePrice[1] === walMart.finalPrice[1]) {
		console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[1] + ' at ' + walMart.storeName);
		} else {
			console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[1] + ' at ' + bestBuy.storeName);
		} 
		
	if (lor.purchasePrice[2] === walMart.finalPrice[2]) { 
		console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[2] + ' at ' + walMart.storeName);
		} else {
			console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[2] + ' at ' + bestBuy.storeName);
		} 
		
	if (lor.purchasePrice[3] === walMart.finalPrice[3]) {
		console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[3] + ' at ' + walMart.storeName);
		} else {
			console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[3] + ' at ' + bestBuy.storeName);
		} 
		
	if (lor.purchasePrice[4] === walMart.finalPrice[4]) {
		console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[4] + ' at ' + walMart.storeName);
		} else  {
			console.log(lor.fullName + ' purchased ' + lor.itemsPurchased[4] + ' at ' + bestBuy.storeName);
		} 