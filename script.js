/**
 /* ******************** HAMSTER ********************
 */
class Hamster {
	constructor(owner = '', name, price = 15) {
		(this.owner = owner), (this.name = name), (this.price = price);
	}

	wheelRun() {
		console.log('squeak squeak');
	}

	eatFood() {
		console.log('nibble nibble');
	}

	getPrice() {
		return this.price;
	}
}

/**
 * ******************** PERSON ********************
 */
class Person {
	constructor(
		name,
		age = 0,
		height = 0,
		weight = 0,
		mood = 0,
		hamsters = [],
		bankAccount = 0
	) {
		(this.name = name),
			(this.age = age),
			(this.height = height),
			(this.weight = weight),
			(this.mood = mood),
			(this.hamsters = hamsters),
			(this.bankAccount = bankAccount);
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}

	getWeight() {
		return this.weight;
	}

	greet(name) {
		return `Hello, ${name}`;
	}

	eat(num) {
		for (let x = 0; x < num; x++) {
			this.weight++;
			this.mood++;
		}
	}

	exercise(num) {
		for (let x = 0; x < num; x++) {
			this.weight--;
		}
	}

	ageUp(num) {
		for (let x = 0; x < num; x++) {
			this.age++;
			this.height++;
			this.weight++;
			this.mood--;
			this.bankAccount += 10;
		}
	}

	buyHamster(hamster) {
		this.hamsters.push(hamster);
		this.mood += 10;
		this.bankAccount -= hamster.getPrice();
	}
}

const timmy = new Person('Timmy');
timmy.ageUp(5);

timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

const gus = new Hamster();
gus.name - 'Gus';
gus.owner = 'Timmy';

timmy.buyHamster(gus);
timmy.ageUp(15);

timmy.eat(2);
timmy.exercise(2);

console.log(timmy);

/**
 * ******************** CHEF MAKE DINNERS ********************
 */
class Dinner {
	constructor(appetizer, entree, dessert) {
		this.appetizer = appetizer;
		this.entree = entree;
		this.dessert = dessert;

		this.isReady = {};
	}

	cookDinner() {
		this.isReady.appetizer = this.appetizer;

		this.isReady.entree = this.entree;

		this.isReady.dessert = this.dessert;

		return this.isReady;
	}
}

class Chef {
	constructor(name) {
		this.name = name;
		this.dinner = '';
	}

	prepareDinner(appetizer, entree, dessert) {
		const dinner = new Dinner(appetizer, entree, dessert);

		const ready = dinner.cookDinner();

		return `Preparing ${appetizer}... \nPreparing ${entree}... \nPreparing ${dessert}... \n\nYour dinner is served! \nFor starters, we're having delicious ${ready.appetizer}, followed by succullent ${ready.entree}. Finally, we'll top the meal off with some incredible ${ready.dessert}! \n\n`;
	}
}

const pierre = new Chef();

const dinnerOrders = [
	pierre.prepareDinner(
		'mozzerrell sticks',
		'Chicken Parmesan',
		'apple turnovers'
	),

	pierre.prepareDinner('chips & salsa', 'Carne Asada', 'Tres Leches Cake'),

	pierre.prepareDinner(
		'chef salad',
		'Prime Rib',
		'Chocolate Lava cake and ice cream'
	),
];

dinnerOrders.forEach(dinner => {
	console.log(`Dinner #${dinnerOrders.indexOf(dinner) +1} \n\n${dinner}`);
});
