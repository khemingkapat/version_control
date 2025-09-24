// deliberately badly formatted + with some eslint issues
const nums = [1, 2, 3, 4, 5];

function double(n) {
	return n * 2;
}

const result = nums.map((num) => {
	if (num % 2 === 0) {
		return double(num);
	} else {
		console.log("odd number: " + num);
		return num;
	}
});

class Greeter {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		return "Hello, " + this.name;
	}
}

let g = new Greeter("World");
console.log(g.sayHello());
console.log(result);

console.log("Modified Change");

console.log("j");

console.log('on');