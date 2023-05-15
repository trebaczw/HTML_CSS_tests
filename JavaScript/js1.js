console.clear();

let text = "Randomowy tekst";
let num = [1, 3, 4];
let mix = [1, "dwa", 3];
let a = 7;
let b = 10;
let c = "22";

console.log(text.indexOf("t"));
console.log(text[7]);
console.log(text.substring(3, 9));
console.log(text.charAt(0));
console.log(text.concat("!! ", num));
console.log(text.slice(3, 9));
console.log(text.replace("tekst", "super tekścik"));
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(a === b);
if (a > b) {
	console.log("większe!!");
} else {
	console.log("mniejsze!!");
}
// -----------------
let day = 3;
let dayName;

switch (day) {
	case 1:
		dayName = "pon";
		break;
	case 2:
		dayName = "wt";
		break;
	case 3:
		dayName = "śr";
		break;
	case 4:
		dayName = "czw";
		break;
	case 5:
		dayName = "pt";
		break;
	default:
		dayName = "wpisz 1-5";
		break;
}
console.log(dayName);

// ------------
function sumaDwochLiczb(d, f) {
	var x = d + f;
	return x;
}

console.log(sumaDwochLiczb(2, 7));

// -----------
// 1. Napisz funkcję, która przyjmuje dwie liczby i zwraca większą z nich:
function max(a, b) {
	switch (true) {
		case a > b:
			return a;
			break;
		case a < b:
			return b;
			break;
	}
}

// function max(a,b){
//   if (a>b) {
//     return a;
//   }else {
//     return b;
//   }
// }

console.log(max(2, 5)); // powinno zwrócić 5
console.log(max(10, 3)); // powinno zwrócić 10

// -----------

// 2. Napisz funkcję, która zwraca długość ciągu znaków:

function stringLength(str) {
	return str.length;
}
console.log(stringLength("Hello, world!")); // powinno zwrócić 13

// -----------

// 3 Napisz funkcję, która zwraca true, jeśli podana liczba jest parzysta, lub false, jeśli jest nieparzysta:
function isEven(a) {
	if (a % 2 == 1) {
		return false;
	} else {
		return true;
	}

	// return a % 2 === 0;
}

console.log(isEven(2)); // powinno zwrócić true
console.log(isEven(3)); // powinno zwrócić false
