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
		age = '0',
		height = '0',
		weight = '0',
		mood = 0,
		hamsters = [],
		bankAccount = '0'
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

	eat() {
		weight++;
		mood++;
	}

	exercise() {
		weight--;
	}

	ageUp() {
		age++;
		height++;
		weight++;
		mood--;
		bankAccount += 10;
	}

	buyHamster(hamster) {
		this.hamsters.push(hamster);
		mood += 10;
		bankAccount -= hamster.getPrice();
	}
}
